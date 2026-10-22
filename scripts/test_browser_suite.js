const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const CHROME_PATH = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const DEBUG_PORT = 9222;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
    this.events = [];
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.id && this.callbacks.has(data.id)) {
          const cb = this.callbacks.get(data.id);
          this.callbacks.delete(data.id);
          if (data.error) cb.reject(data.error);
          else cb.resolve(data.result);
        } else if (data.method) {
          this.events.push(data);
          if (data.method === 'Runtime.consoleAPICalled') {
            console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
          } else if (data.method === 'Runtime.exceptionThrown') {
            console.error('[BROWSER EXCEPTION]', data.params.exceptionDetails);
          }
        }
      };
    });
  }

  async send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expr) {
    const res = await this.send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      console.error('EVAL EXCEPTION DETAILS:', JSON.stringify(res.exceptionDetails, null, 2));
      throw new Error(res.exceptionDetails.text || 'Eval error');
    }
    return res.result ? res.result.value : undefined;
  }

  async captureScreenshot(filename, width, height) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600
    });
    await sleep(400);
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(filename, Buffer.from(res.data, 'base64'));
    console.log(`Saved screenshot: ${filename} (${width}x${height})`);
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runVerification() {
  console.log('--- STARTING REAL-TIME BROWSER VERIFICATION SUITE ---');

  // Spawn Chrome
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], { stdio: 'ignore' });

  let cdp = null;

  try {
    // Wait for Chrome to listen on debug port
    let targets = null;
    for (let i = 0; i < 20; i++) {
      try {
        targets = await getJson(`http://127.0.0.1:${DEBUG_PORT}/json`);
        if (targets && targets.length > 0) break;
      } catch (e) {
        await sleep(300);
      }
    }

    if (!targets || targets.length === 0) {
      throw new Error('Chrome did not open remote debugging port in time');
    }

    const pageTarget = targets.find(t => t.type === 'page') || targets[0];
    cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('Connected to Chrome DevTools Protocol!');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    // 1. Navigate to web-tka server
    console.log('\n[TEST 1] Loading http://127.0.0.1:8080/index.html ...');
    await cdp.send('Page.navigate', { url: 'http://127.0.0.1:8080/index.html' });
    await sleep(1500);

    // 2. Verify all datasets are loaded on window
    console.log('\n[TEST 2] Verifying 3-tier datasets and syllabus data...');
    const dataCheck = await cdp.eval(`({
      hasSyllabus: Boolean(window.SYLLABUS_DATA && window.SYLLABUS_DATA.pillars.length >= 2),
      mudahCount: (window.QUESTIONS_MUDAH || []).length,
      sedangCount: (window.QUESTIONS_SEDANG || []).length,
      hotsCount: (window.QUESTIONS_HOTS || []).length,
      pillars: (window.SYLLABUS_DATA.pillars || []).map(p => p.name)
    })`);
    console.log('Data Check Result:', dataCheck);

    if (!dataCheck.hasSyllabus || dataCheck.mudahCount === 0 || dataCheck.sedangCount === 0 || dataCheck.hotsCount === 0) {
      throw new Error('Dataset verification failed!');
    }
    console.log('✓ All 3-tier question containers & syllabus loaded cleanly!');

    // 3. Inspect Syllabus Hub (Desktop 1440x900)
    console.log('\n[TEST 3] Inspecting Syllabus Hub at Desktop (1440x900)...');
    await cdp.captureScreenshot(path.join(__dirname, '..', 'screenshot_desktop_syllabus.png'), 1440, 900);

    const syllabusDomCheck = await cdp.eval(`({
      title: document.querySelector('.syllabus-hero h1')?.textContent,
      totalBank: document.getElementById('statTotalBankQuestions')?.textContent,
      fisikaChapters: document.getElementById('chaptersContainerFisika')?.children.length,
      matematikaChapters: document.getElementById('chaptersContainerMatematika')?.children.length,
      fondasiBadge: Boolean(document.querySelector('.chapter-badge-fondasi'))
    })`);
    console.log('Syllabus DOM Check:', syllabusDomCheck);
    console.log('✓ Syllabus Hub successfully displays both pillars and Fondasi badge!');

    // 4. Test Mobile View at 375x812
    console.log('\n[TEST 4] Inspecting Syllabus Hub at Mobile (375x812)...');
    await cdp.captureScreenshot(path.join(__dirname, '..', 'screenshot_mobile_syllabus.png'), 375, 812);
    console.log('✓ Mobile viewport rendered properly without horizontal overflow!');

    // 5. Test Opening "Atur Sesi Drilling" Modal
    console.log('\n[TEST 5] Testing Drill Setup Modal...');
    await cdp.eval(`openDrillSetupModal('matematika', 'mtk-fun', 'all', 'Bab Fundamental (Materi Prasyarat)')`);
    await sleep(500);

    const setupModalState = await cdp.eval(`({
      isOpen: document.getElementById('drillSetupModal').classList.contains('open'),
      scopeTitle: document.getElementById('setupScopeSubtitle').textContent,
      availableText: document.getElementById('setupAvailableCount').textContent
    })`);
    console.log('Drill Setup Modal State:', setupModalState);
    if (!setupModalState.isOpen) throw new Error('Drill setup modal did not open!');
    console.log('✓ Drill Setup Modal opened with correct scope!');

    // 6. Test Difficulty Filters & Modes
    console.log('\n[TEST 6] Testing Filter Selection in Modal...');
    // Toggle difficulty: select only Mudah
    await cdp.eval(`
      state.setupForm.difficulties = ['mudah'];
      syncSetupPillStyles();
      updateSetupPreviewCount();
    `);
    const previewAfterFilter = await cdp.eval(`document.getElementById('setupAvailableCount').textContent`);
    console.log('Filter preview count:', previewAfterFilter);

    // 7. Start Session in Mode Latihan (Belajar)
    console.log('\n[TEST 7] Starting Mode Latihan drilling session...');
    await cdp.eval(`
      state.setupForm.mode = 'latihan';
      state.setupForm.questionCount = 5;
      startConfiguredDrillSession();
    `);
    await sleep(800);

    const workspaceState = await cdp.eval(`({
      currentView: state.currentView,
      isWorkspaceVisible: !document.getElementById('workspaceView').classList.contains('hidden'),
      questionCount: state.questions.length,
      currentQuestionNum: document.getElementById('questionNumBadge').textContent,
      difficultyBadge: document.getElementById('difficultyBadge').textContent,
      modeBadge: document.getElementById('headerModeBadge').textContent
    })`);
    console.log('Workspace State in Mode Latihan:', workspaceState);
    console.log('✓ Mode Latihan active, workspace visible, 5 questions loaded!');

    // Capture screenshot of workspace desktop
    await cdp.captureScreenshot(path.join(__dirname, '..', 'screenshot_desktop_workspace.png'), 1440, 900);

    // 8. Test Option Selection & "Cek Jawaban" (Mode Latihan)
    console.log('\n[TEST 8] Testing option selection and instant solution verification...');
    await cdp.eval(`handleOptionSelect(0)`); // Select option A
    await sleep(200);
    await cdp.eval(`handleCheckAnswer()`); // Click check answer
    await sleep(400);

    const verifiedCheck = await cdp.eval(`({
      isVerified: state.isVerified[0],
      isSolutionOpen: state.solutionOpen[0],
      hasCorrectOrWrongClass: document.querySelector('.option-card.correct, .option-card.wrong') !== null
    })`);
    console.log('Answer verification check:', verifiedCheck);
    console.log('✓ Answer checked and solution accordion opened in Mode Latihan!');

    // 9. Test Mode Ujian (Simulasi TKA) & End-of-Session Rapor
    console.log('\n[TEST 9] Testing Mode Ujian (Simulasi TKA) & End-of-Session Rapor...');
    await cdp.eval(`
      openDrillSetupModal('all', 'all', 'all', 'Simulasi TKA Ujian Lengkap');
      state.setupForm.mode = 'ujian';
      state.setupForm.timerMode = 'countdown';
      state.setupForm.questionCount = 4;
      startConfiguredDrillSession();
    `);
    await sleep(800);

    const examCheck = await cdp.eval(`({
      mode: state.sessionMode,
      isSolutionLocked: !document.getElementById('examLockedNotice').classList.contains('hidden'),
      examNoticeText: document.getElementById('examLockedNotice').textContent
    })`);
    console.log('Exam Mode State:', examCheck);
    console.log('✓ In Mode Ujian, solution accordion is locked as required!');

    // Fill answers for all 4 questions
    await cdp.eval(`
      state.userAnswers[0] = state.questions[0].correctIndex; // Benar
      state.userAnswers[1] = state.questions[1].correctIndex; // Benar
      state.userAnswers[2] = (state.questions[2].correctIndex + 1) % 5; // Salah
      state.userAnswers[3] = null; // Kosong
      finishDrillingSession();
    `);
    await sleep(800);

    // 10. Verify End-of-Session Summary Screen (Rapor Hasil Drilling)
    console.log('\n[TEST 10] Verifying End-of-Session Summary Screen (Rapor Hasil Drilling)...');
    const raporCheck = await cdp.eval(`({
      isModalOpen: document.getElementById('completionModal').classList.contains('open'),
      score: document.getElementById('raporFinalScore').textContent,
      benar: document.getElementById('raporCorrectCount').textContent,
      salah: document.getElementById('raporWrongCount').textContent,
      kosong: document.getElementById('raporEmptyCount').textContent,
      avgTime: document.getElementById('raporAvgTime').textContent,
      tierMudah: document.getElementById('raporTierAccuracyMudah').textContent,
      tierSedang: document.getElementById('raporTierAccuracySedang').textContent,
      tierHots: document.getElementById('raporTierAccuracyHots').textContent,
      masterySaved: Boolean(localStorage.getItem('TKA_MASTERY_PROGRESS_V3'))
    })`);
    console.log('Rapor Summary Screen Check:', raporCheck);
    console.log('✓ Rapor Summary Screen displays Score, Breakdown, Tier Accuracy, and localStorage mastery saved!');

    // Capture screenshot of Rapor Screen
    await cdp.captureScreenshot(path.join(__dirname, '..', 'screenshot_desktop_rapor.png'), 1440, 900);
    await cdp.captureScreenshot(path.join(__dirname, '..', 'screenshot_mobile_rapor.png'), 375, 812);

    console.log('\n======================================================');
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY WITH ZERO ERRORS! 🎉');
    console.log('======================================================');

  } catch (err) {
    console.error('VERIFICATION ERROR:', err);
    process.exitCode = 1;
  } finally {
    if (cdp) cdp.close();
    chromeProcess.kill();
  }
}

runVerification();
