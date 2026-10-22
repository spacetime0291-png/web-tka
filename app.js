/**
 * TKA Physics & Advanced Mathematics Drilling Platform
 * Anti-AI Tactile Neo-Brutalist Academic Web Application
 * Modular 3-Tier Architecture & Complete 2-Pillar Syllabus
 */

// ============================================================================
// 1. GLOBAL STATE & CONFIGURATION
// ============================================================================
const state = {
  currentView: 'syllabus', // 'syllabus' | 'workspace'
  activePillarFilter: 'all', // 'all' | 'fisika' | 'matematika'
  
  // Active Drilling Session
  sessionScope: null, // { subject, chapterId, subTopicId, title }
  sessionMode: 'latihan', // 'latihan' | 'ujian'
  timerMode: 'countdown', // 'countdown' | 'stopwatch'
  totalDurationSeconds: 0,
  timerSeconds: 0,
  timerInterval: null,
  timerRunning: false,
  sessionStartTime: 0,
  sessionEndTime: 0,
  isReviewMode: false,

  // Question Dataset for Active Session
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  isVerified: [],
  isRagu: [],
  solutionOpen: [],
  questionTimeSpent: [],

  // Drill Setup Modal Form State
  setupForm: {
    subject: 'all',
    chapterId: 'all',
    subTopicId: 'all',
    selectedSubTopicIds: new Set(),
    scopeTitle: 'Semua Materi',
    difficulties: ['mudah', 'sedang', 'hots'],
    isProgressive: false,
    wrongOnly: false,
    mode: 'latihan',
    timerMode: 'countdown',
    questionCount: 10,
    shuffleQuestions: true,
    shuffleOptions: true
  }
};

if (typeof window !== 'undefined') {
  window.state = state;
}

// LocalStorage Persistence Keys
const STORAGE_KEY_MASTERY = 'TKA_MASTERY_PROGRESS_V3';
const STORAGE_KEY_THEME = 'tka_theme_preference';
const STORAGE_KEY_ACCORDION = 'tka_syllabus_accordion_state';
const STORAGE_KEY_SESSION = 'tka_drilling_session_state';
const STORAGE_KEY_WRONG_QUESTIONS = 'tka_wrong_questions_history';

if (typeof window !== 'undefined') {
  window.STORAGE_KEY_MASTERY = STORAGE_KEY_MASTERY;
  window.STORAGE_KEY_THEME = STORAGE_KEY_THEME;
  window.STORAGE_KEY_ACCORDION = STORAGE_KEY_ACCORDION;
  window.STORAGE_KEY_SESSION = STORAGE_KEY_SESSION;
  window.STORAGE_KEY_WRONG_QUESTIONS = STORAGE_KEY_WRONG_QUESTIONS;
}

// ============================================================================
// 2. CENTRAL QUESTION AGGREGATOR & PERSISTENCE HELPERS
// ============================================================================
function getWrongQuestionsHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WRONG_QUESTIONS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function recordWrongQuestion(questionId) {
  try {
    const list = getWrongQuestionsHistory();
    if (!list.includes(questionId)) {
      list.push(questionId);
      localStorage.setItem(STORAGE_KEY_WRONG_QUESTIONS, JSON.stringify(list));
    }
  } catch (e) {}
}

function getAccordionState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCORDION);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  // Default state: Only the first chapter ('fis-kin') is open
  return ['fis-kin'];
}

function saveAccordionState(stateList) {
  try {
    localStorage.setItem(STORAGE_KEY_ACCORDION, JSON.stringify(stateList));
  } catch (e) {}
}

function toggleChapterAccordion(chapterId) {
  let list = getAccordionState();
  const index = list.indexOf(chapterId);
  const el = document.getElementById(`accordion-${chapterId}`);
  const header = document.getElementById(`accordion-header-${chapterId}`);

  if (index > -1) {
    list.splice(index, 1);
    if (el) el.classList.remove('open');
    if (header) header.setAttribute('aria-expanded', 'false');
  } else {
    list.push(chapterId);
    if (el) el.classList.add('open');
    if (header) header.setAttribute('aria-expanded', 'true');
  }
  saveAccordionState(list);
}

// Syllabus Lookup Helpers
function getAllSubTopicIds() {
  const ids = [];
  if (typeof window !== 'undefined' && window.SYLLABUS_DATA && Array.isArray(window.SYLLABUS_DATA.pillars)) {
    window.SYLLABUS_DATA.pillars.forEach(p => {
      if (Array.isArray(p.chapters)) {
        p.chapters.forEach(ch => {
          if (Array.isArray(ch.subTopics)) {
            ch.subTopics.forEach(sub => ids.push(sub.id));
          }
        });
      }
    });
  }
  return ids;
}

function findChapterById(chapterId) {
  if (typeof window === 'undefined' || !window.SYLLABUS_DATA || !Array.isArray(window.SYLLABUS_DATA.pillars)) return null;
  for (const p of window.SYLLABUS_DATA.pillars) {
    if (Array.isArray(p.chapters)) {
      const ch = p.chapters.find(c => c.id === chapterId);
      if (ch) return ch;
    }
  }
  return null;
}

function findSubTopicById(subTopicId) {
  if (typeof window === 'undefined' || !window.SYLLABUS_DATA || !Array.isArray(window.SYLLABUS_DATA.pillars)) return null;
  for (const p of window.SYLLABUS_DATA.pillars) {
    if (Array.isArray(p.chapters)) {
      for (const ch of p.chapters) {
        if (Array.isArray(ch.subTopics)) {
          const sub = ch.subTopics.find(s => s.id === subTopicId);
          if (sub) return { sub, chapter: ch, pillar: p };
        }
      }
    }
  }
  return null;
}

/**
 * Merges and filters questions dynamically by subject, chapterId, subTopicId, subTopicIds, difficulty, and wrong history.
 * @param {Object} filter - { subject, chapterId, subTopicId, subTopicIds, difficulty, difficulties, progressive, wrongOnly }
 * @returns {Array} Filtered and cloned question objects
 */
function getFilteredQuestions(filter = {}) {
  const mudahPool = Array.isArray(window.QUESTIONS_MUDAH) ? window.QUESTIONS_MUDAH : [];
  const sedangPool = Array.isArray(window.QUESTIONS_SEDANG) ? window.QUESTIONS_SEDANG : [];
  const hotsPool = Array.isArray(window.QUESTIONS_HOTS) ? window.QUESTIONS_HOTS : [];

  let combined = [];

  // Handle Progressive order vs Standard difficulty selection
  if (filter.progressive) {
    combined = [...mudahPool, ...sedangPool, ...hotsPool];
  } else if (filter.difficulties && Array.isArray(filter.difficulties)) {
    if (filter.difficulties.includes('mudah')) combined.push(...mudahPool);
    if (filter.difficulties.includes('sedang')) combined.push(...sedangPool);
    if (filter.difficulties.includes('hots')) combined.push(...hotsPool);
  } else if (filter.difficulty) {
    if (filter.difficulty === 'mudah') combined = [...mudahPool];
    else if (filter.difficulty === 'sedang') combined = [...sedangPool];
    else if (filter.difficulty === 'hots') combined = [...hotsPool];
    else combined = [...mudahPool, ...sedangPool, ...hotsPool];
  } else {
    combined = [...mudahPool, ...sedangPool, ...hotsPool];
  }

  // Filter by Wrong Questions history if wrongOnly is requested
  const wrongOnly = filter.wrongOnly !== undefined ? filter.wrongOnly : (state.setupForm ? state.setupForm.wrongOnly : false);
  if (wrongOnly) {
    const wrongList = getWrongQuestionsHistory();
    combined = combined.filter(q => wrongList.includes(q.id));
  }

  // Filter by Scope: Multi-select SubTopics or Single Subject/Chapter/SubTopic
  return combined.filter(q => {
    // Multi-select subTopicIds filter (Set or Array)
    if (filter.subTopicIds !== undefined && filter.subTopicIds !== null) {
      const idSet = filter.subTopicIds instanceof Set ? filter.subTopicIds : new Set(filter.subTopicIds);
      const matchesSub = idSet.has(q.subTopicId) || idSet.has(q.subBab) || idSet.has(q.subTopic);
      if (!matchesSub) {
        return false;
      }
    } else {
      // Fallback single filters if subTopicIds is not provided
      // Subject filter
      if (filter.subject && filter.subject !== 'all') {
        const qSubject = (q.pillarId || q.subject || '').toLowerCase();
        const targetSubject = filter.subject.toLowerCase();
        if (qSubject !== targetSubject && !qSubject.includes(targetSubject)) {
          return false;
        }
      }

      // Chapter filter
      if (filter.chapterId && filter.chapterId !== 'all') {
        if (q.chapterId !== filter.chapterId && q.bab !== filter.chapterId) {
          return false;
        }
      }

      // SubTopic filter
      if (filter.subTopicId && filter.subTopicId !== 'all') {
        if (q.subTopicId !== filter.subTopicId && q.subBab !== filter.subTopicId && q.subTopic !== filter.subTopicId) {
          return false;
        }
      }
    }

    return true;
  });
}

// ============================================================================
// 3. APPLICATION INITIALIZATION & SYLLABUS HUB
// ============================================================================
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSyllabusHub();
    updateGlobalCounters();
    bindGlobalEvents();
    checkActiveSessionResume();
    triggerMathTypeset();
  });
}

function initTheme() {
  if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  if (typeof document === 'undefined' || typeof localStorage === 'undefined') return;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(STORAGE_KEY_THEME, newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// Session Persistence & Resume Handlers
function saveSessionState() {
  if (!state.questions || state.questions.length === 0) return;
  try {
    const payload = {
      sessionScope: state.sessionScope,
      sessionMode: state.sessionMode,
      timerMode: state.timerMode,
      totalDurationSeconds: state.totalDurationSeconds,
      timerSeconds: state.timerSeconds,
      currentIndex: state.currentIndex,
      questions: state.questions,
      userAnswers: state.userAnswers,
      isVerified: state.isVerified,
      isRagu: state.isRagu,
      solutionOpen: state.solutionOpen,
      isReviewMode: state.isReviewMode,
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(payload));
  } catch (e) {}
}

function clearSessionState() {
  try {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  } catch (e) {}
  checkActiveSessionResume();
}

function checkActiveSessionResume() {
  const banner = document.getElementById('activeSessionBanner');
  if (!banner) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (!raw) {
      banner.classList.add('hidden');
      banner.innerHTML = '';
      return;
    }
    const data = JSON.parse(raw);
    if (!data.questions || data.questions.length === 0) {
      banner.classList.add('hidden');
      banner.innerHTML = '';
      return;
    }

    const answeredCount = (data.userAnswers || []).filter(a => a !== null).length;
    const totalCount = data.questions.length;
    const currentQ = (data.currentIndex || 0) + 1;
    const scopeTitle = data.sessionScope && data.sessionScope.scopeTitle ? data.sessionScope.scopeTitle : 'Drilling TKA';

    banner.innerHTML = `
      <div class="resume-banner-text">
        <i class="fa-solid fa-clock-rotate-left mr-1.5 text-amber-600"></i>
        <strong>Sesi Belajar Tersimpan (${scopeTitle}):</strong> ${answeredCount} dari ${totalCount} terjawab • Posisi Soal #${currentQ}.
      </div>
      <div class="resume-banner-actions">
        <button class="tactile-btn tactile-btn-primary" style="padding: 5px 12px; font-size: 0.8rem;" onclick="resumeActiveDrillSession()">
          <i class="fa-solid fa-play mr-1"></i> Lanjutkan Sesi
        </button>
        <button class="tactile-btn tactile-btn-secondary" style="padding: 5px 10px; font-size: 0.8rem;" onclick="discardActiveDrillSession()" title="Buang Sesi Ini">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    banner.classList.remove('hidden');
  } catch (e) {
    banner.classList.add('hidden');
  }
}

function resumeActiveDrillSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (!data.questions || data.questions.length === 0) return;

    state.sessionScope = data.sessionScope;
    state.sessionMode = data.sessionMode || 'latihan';
    state.timerMode = data.timerMode || 'countdown';
    state.totalDurationSeconds = data.totalDurationSeconds || 0;
    state.timerSeconds = data.timerSeconds || 0;
    state.currentIndex = data.currentIndex || 0;
    state.questions = data.questions;
    state.userAnswers = data.userAnswers || new Array(data.questions.length).fill(null);
    state.isVerified = data.isVerified || new Array(data.questions.length).fill(false);
    state.isRagu = data.isRagu || new Array(data.questions.length).fill(false);
    state.solutionOpen = data.solutionOpen || new Array(data.questions.length).fill(false);
    state.isReviewMode = Boolean(data.isReviewMode);

    state.timerRunning = true;
    startTimer();
    showWorkspaceView();
    renderCurrentQuestion(true);
    renderMatrixGrid();
    updateStats();
  } catch (e) {
    alert('Gagal memuat sesi tersimpan.');
  }
}

function discardActiveDrillSession() {
  if (confirm('Apakah Anda yakin ingin menghapus sesi belajar tersimpan ini? Progres jawaban sesi ini akan dibuang.')) {
    clearSessionState();
  }
}

// Switch between Peta Silabus (Hub) and Workspace View
function showSyllabusView() {
  // If leaving active workspace, save state and pause timer
  if (state.currentView === 'workspace' && state.questions.length > 0) {
    saveSessionState();
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerRunning = false;
  }

  state.currentView = 'syllabus';
  
  // Hide workspace elements
  const workspaceView = document.getElementById('workspaceView');
  const stickyBottomBar = document.getElementById('stickyBottomBar');
  const timerPill = document.getElementById('timerPill');
  const headerModeBadge = document.getElementById('headerModeBadge');
  const btnMobileDrawerTrigger = document.getElementById('btnMobileDrawerTrigger');
  const syllabusView = document.getElementById('syllabusView');

  if (workspaceView) workspaceView.classList.add('hidden');
  if (stickyBottomBar) stickyBottomBar.classList.add('hidden');
  if (timerPill) timerPill.classList.add('hidden');
  if (headerModeBadge) headerModeBadge.classList.add('hidden');
  if (btnMobileDrawerTrigger) btnMobileDrawerTrigger.classList.add('hidden');
  if (syllabusView) syllabusView.classList.remove('hidden');

  // Update header title and syllabus toggle button
  const headerTopic = document.getElementById('headerTopic');
  if (headerTopic) headerTopic.textContent = 'Peta Silabus & Kurikulum TKA';

  const btnHeaderSyllabus = document.getElementById('btnHeaderSyllabus');
  if (btnHeaderSyllabus) {
    btnHeaderSyllabus.innerHTML = '<i class="fa-solid fa-map"></i> <span class="sm:inline">Silabus</span>';
    btnHeaderSyllabus.title = 'Buka Peta Silabus Lengkap';
  }

  const headerProgressFill = document.getElementById('headerProgressFill');
  if (headerProgressFill) headerProgressFill.style.width = '0%';

  // Check and render active session banner if any
  checkActiveSessionResume();

  // Re-render mastery stats
  renderSyllabusHub();
  updateGlobalCounters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWorkspaceView() {
  state.currentView = 'workspace';
  
  const syllabusView = document.getElementById('syllabusView');
  const workspaceView = document.getElementById('workspaceView');
  const stickyBottomBar = document.getElementById('stickyBottomBar');
  const timerPill = document.getElementById('timerPill');
  const headerModeBadge = document.getElementById('headerModeBadge');
  const btnMobileDrawerTrigger = document.getElementById('btnMobileDrawerTrigger');

  if (syllabusView) syllabusView.classList.add('hidden');
  if (workspaceView) workspaceView.classList.remove('hidden');
  if (stickyBottomBar) stickyBottomBar.classList.remove('hidden');
  if (timerPill) timerPill.classList.remove('hidden');
  if (headerModeBadge) {
    headerModeBadge.classList.remove('hidden');
    headerModeBadge.textContent = state.sessionMode === 'ujian' ? 'Mode Ujian (Simulasi)' : 'Mode Latihan (Belajar)';
    headerModeBadge.className = `tactile-badge ${state.sessionMode === 'ujian' ? 'badge-physics' : 'badge-neutral'}`;
  }
  if (btnMobileDrawerTrigger) btnMobileDrawerTrigger.classList.remove('hidden');

  // Update navbar syllabus button to indicate quick exit back to syllabus
  const btnHeaderSyllabus = document.getElementById('btnHeaderSyllabus');
  if (btnHeaderSyllabus) {
    btnHeaderSyllabus.innerHTML = '<i class="fa-solid fa-arrow-left"></i> <span class="sm:inline">Silabus</span>';
    btnHeaderSyllabus.title = 'Kembali ke Peta Silabus';
  }
}

// ============================================================================
// 4. SYLLABUS MAP & HIERARCHY RENDERING
// ============================================================================
function getMasteryData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MASTERY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveMasteryProgress(questionId, isCorrect) {
  const mastery = getMasteryData();
  if (!mastery[questionId]) {
    mastery[questionId] = { attempts: 0, correct: 0 };
  }
  mastery[questionId].attempts++;
  if (isCorrect) mastery[questionId].correct++;
  localStorage.setItem(STORAGE_KEY_MASTERY, JSON.stringify(mastery));
}

function calculateChapterMastery(chapterId) {
  const questions = getFilteredQuestions({ chapterId });
  if (questions.length === 0) return 0;
  const mastery = getMasteryData();
  let masteredCount = 0;
  questions.forEach(q => {
    if (mastery[q.id] && mastery[q.id].correct > 0) {
      masteredCount++;
    }
  });
  return Math.round((masteredCount / questions.length) * 100);
}

function updateGlobalCounters() {
  const mudahCount = (window.QUESTIONS_MUDAH || []).length;
  const sedangCount = (window.QUESTIONS_SEDANG || []).length;
  const hotsCount = (window.QUESTIONS_HOTS || []).length;
  const total = mudahCount + sedangCount + hotsCount;

  const statTotal = document.getElementById('statTotalBankQuestions');
  const statTier = document.getElementById('statTierBreakdown');
  const statMastery = document.getElementById('statOverallMastery');

  if (statTotal) statTotal.textContent = total;
  if (statTier) {
    statTier.innerHTML = `<span style="color: #16A34A;">${mudahCount} M</span> • <span style="color: #D97706;">${sedangCount} S</span> • <span style="color: #DC2626;">${hotsCount} H</span>`;
  }

  // Calculate Overall Mastery
  const mastery = getMasteryData();
  let totalMastered = 0;
  [...(window.QUESTIONS_MUDAH || []), ...(window.QUESTIONS_SEDANG || []), ...(window.QUESTIONS_HOTS || [])].forEach(q => {
    if (mastery[q.id] && mastery[q.id].correct > 0) totalMastered++;
  });
  const overallPercent = total > 0 ? Math.round((totalMastered / total) * 100) : 0;
  if (statMastery) statMastery.textContent = `${overallPercent}%`;
}

function switchPillarFilter(pillarId) {
  state.activePillarFilter = pillarId;
  
  const tabAll = document.getElementById('tabFilterAll');
  const tabPhys = document.getElementById('tabFilterPhys');
  const tabMath = document.getElementById('tabFilterMath');
  const tabFund = document.getElementById('tabFilterFund');
  const secPhys = document.getElementById('pillarFisikaSection');
  const secMath = document.getElementById('pillarMatematikaSection');
  const secFund = document.getElementById('pillarFundamentalSection');

  [tabAll, tabPhys, tabMath, tabFund].forEach(t => t && t.classList.remove('active'));

  if (pillarId === 'all') {
    if (tabAll) tabAll.classList.add('active');
    if (secPhys) secPhys.classList.remove('hidden');
    if (secMath) secMath.classList.remove('hidden');
    if (secFund) secFund.classList.remove('hidden');
  } else if (pillarId === 'fisika') {
    if (tabPhys) tabPhys.classList.add('active');
    if (secPhys) secPhys.classList.remove('hidden');
    if (secMath) secMath.classList.add('hidden');
    if (secFund) secFund.classList.add('hidden');
  } else if (pillarId === 'matematika') {
    if (tabMath) tabMath.classList.add('active');
    if (secPhys) secPhys.classList.add('hidden');
    if (secMath) secMath.classList.remove('hidden');
    if (secFund) secFund.classList.add('hidden');
  } else if (pillarId === 'fundamental') {
    if (tabFund) tabFund.classList.add('active');
    if (secPhys) secPhys.classList.add('hidden');
    if (secMath) secMath.classList.add('hidden');
    if (secFund) secFund.classList.remove('hidden');
  }
}

function renderSyllabusHub() {
  if (!window.SYLLABUS_DATA || !window.SYLLABUS_DATA.pillars) return;

  const fisikaPillar = window.SYLLABUS_DATA.pillars.find(p => p.id === 'fisika');
  const matematikaPillar = window.SYLLABUS_DATA.pillars.find(p => p.id === 'matematika');
  const fundamentalPillar = window.SYLLABUS_DATA.pillars.find(p => p.id === 'fundamental');

  const containerPhys = document.getElementById('chaptersContainerFisika');
  const containerMath = document.getElementById('chaptersContainerMatematika');
  const containerFund = document.getElementById('chaptersContainerFundamental');

  if (fisikaPillar && containerPhys) {
    containerPhys.innerHTML = fisikaPillar.chapters.map(ch => renderChapterCard(ch, 'fisika')).join('');
  }

  if (matematikaPillar && containerMath) {
    containerMath.innerHTML = matematikaPillar.chapters.map(ch => renderChapterCard(ch, 'matematika')).join('');
  }

  if (fundamentalPillar && containerFund) {
    containerFund.innerHTML = fundamentalPillar.chapters.map(ch => renderChapterCard(ch, 'fundamental')).join('');
  }

  // Update total chapters in statTotalChapters
  const statChapters = document.getElementById('statTotalChapters');
  if (statChapters) {
    let totalCh = 0;
    window.SYLLABUS_DATA.pillars.forEach(p => { totalCh += (p.chapters || []).length; });
    statChapters.textContent = totalCh;
  }

  // Synchronize checkboxes on syllabus cards
  syncSyllabusCardCheckboxes();

  // Trigger KaTeX for any mathematical indicator formulas in syllabus
  triggerMathTypeset();
}

function syncSyllabusCardCheckboxes() {
  if (typeof window === 'undefined' || !window.SYLLABUS_DATA || !window.SYLLABUS_DATA.pillars) return;
  const selected = state.setupForm.selectedSubTopicIds || new Set();

  window.SYLLABUS_DATA.pillars.forEach(p => {
    p.chapters.forEach(ch => {
      let chCount = 0;
      ch.subTopics.forEach(sub => {
        const isChecked = selected.has(sub.id);
        if (isChecked) chCount++;
        const subChk = document.getElementById(`card-chk-sub-${sub.id}`);
        if (subChk) subChk.checked = isChecked;
      });

      const chChk = document.getElementById(`card-chk-ch-${ch.id}`);
      if (chChk) {
        if (chCount === ch.subTopics.length) {
          chChk.checked = true;
          chChk.indeterminate = false;
        } else if (chCount === 0) {
          chChk.checked = false;
          chChk.indeterminate = false;
        } else {
          chChk.checked = false;
          chChk.indeterminate = true;
        }
      }
    });
  });
}

function toggleChapterCheckboxOnCard(chapterId, checked) {
  toggleSetupChapter(chapterId, checked);
}

function toggleSubTopicCheckboxOnCard(subTopicId, checked) {
  toggleSetupSubTopic(subTopicId, checked);
}

function renderChapterCard(chapter, pillarId) {
  const isFoundation = Boolean(chapter.isFoundation);
  const questionsInChapter = getFilteredQuestions({ chapterId: chapter.id, wrongOnly: false });
  const countMudah = questionsInChapter.filter(q => q.difficulty === 'mudah').length;
  const countSedang = questionsInChapter.filter(q => q.difficulty === 'sedang').length;
  const countHots = questionsInChapter.filter(q => q.difficulty === 'hots').length;
  const masteryPercent = calculateChapterMastery(chapter.id);
  const openList = getAccordionState();
  const isOpen = openList.includes(chapter.id);
  const mastery = getMasteryData();

  return `
    <article class="chapter-accordion ${isOpen ? 'open' : ''} ${isFoundation ? 'foundation-accordion' : ''}" id="accordion-${chapter.id}">
      <!-- Accordion Header (Minimal, No cognitive overload) -->
      <div id="accordion-header-${chapter.id}" class="chapter-accordion-header" onclick="toggleChapterAccordion('${chapter.id}')" role="button" aria-expanded="${isOpen}">
        <div class="accordion-header-left">
          <input type="checkbox" id="card-chk-ch-${chapter.id}" class="tactile-checkbox mr-1" 
                 onclick="event.stopPropagation(); toggleChapterCheckboxOnCard('${chapter.id}', this.checked)" 
                 title="Pilih seluruh sub-bab di bab ${chapter.title} untuk drill" />
          <i class="fa-solid fa-chevron-right accordion-chevron"></i>
          <div class="accordion-title-wrap">
            ${isFoundation ? `
              <span class="chapter-badge-fondasi">
                <i class="fa-solid fa-bolt mr-1"></i> FONDASI
              </span>
            ` : `
              <span class="subtopic-code">${chapter.id.toUpperCase()}</span>
            `}
            <h3 class="accordion-title">${chapter.title}</h3>
          </div>
        </div>
        <div class="accordion-header-right">
          <span class="chapter-tier-badge" title="Tersedia: Mudah, Sedang, HOTS">
            M: ${countMudah} | S: ${countSedang} | H: ${countHots}
          </span>
          <button class="tactile-btn tactile-btn-drill-chapter ${isFoundation ? 'tactile-btn-primary' : ''}" 
                  onclick="event.stopPropagation(); openDrillSetupModal('${pillarId}', '${chapter.id}', 'all', '${chapter.title}')"
                  title="Drill Semua Soal di Bab Ini">
            <i class="fa-solid fa-play"></i>
            <span>Drill</span>
          </button>
        </div>
      </div>

      <!-- Thin 4px Progress Track -->
      <div class="chapter-progress-track" title="Tingkat Penguasaan: ${masteryPercent}%">
        <div class="chapter-progress-fill" style="width: ${masteryPercent}%;"></div>
      </div>

      <!-- Collapsible Content via CSS Grid transition -->
      <div class="chapter-accordion-content">
        <div class="chapter-accordion-inner">
          <div class="subtopic-compact-list">
            ${chapter.subTopics.map(sub => {
              const subQuestions = getFilteredQuestions({ subTopicId: sub.id, wrongOnly: false });
              const isMastered = subQuestions.length > 0 && subQuestions.every(q => mastery[q.id] && mastery[q.id].correct > 0);
              return `
                <div class="subtopic-compact-row">
                  <div class="subtopic-compact-left">
                    <input type="checkbox" id="card-chk-sub-${sub.id}" class="tactile-checkbox mr-1" 
                           onclick="event.stopPropagation(); toggleSubTopicCheckboxOnCard('${sub.id}', this.checked)" 
                           title="Pilih sub-bab ${sub.title} untuk drill" />
                    <span class="status-dot ${isMastered ? 'dot-mastered' : 'dot-unmastered'}" 
                          title="${isMastered ? 'Materi Terkuasai (100%)' : 'Belum Dikerjakan / Belum Kuasai'}"></span>
                    <span class="subtopic-code">${sub.id}</span>
                    <span class="subtopic-name">${sub.title}</span>
                  </div>
                  <div class="subtopic-compact-right">
                    <span class="subtopic-count-pill">${subQuestions.length} Soal</span>
                    <button class="tactile-btn tactile-btn-compact" 
                            onclick="openDrillSetupModal('${pillarId}', '${chapter.id}', '${sub.id}', '${sub.id} - ${sub.title}')"
                            title="Latih Sub-Topik Ini">
                      <i class="fa-solid fa-bullseye"></i>
                      <span>Latih</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// 5. DRILL SETUP MODAL / CONFIGURATOR LOGIC (TOPIC SELECTOR & STEPPER)
// ============================================================================

/**
 * Render the hierarchical accordion + checkbox topic selector inside modal
 */
function renderSetupTopicSelector() {
  const container = document.getElementById('setupTopicAccordion');
  if (!container || !window.SYLLABUS_DATA || !window.SYLLABUS_DATA.pillars) return;

  let html = '';
  window.SYLLABUS_DATA.pillars.forEach(p => {
    p.chapters.forEach(ch => {
      html += `
        <div class="topic-accordion-box" id="setup-box-${ch.id}">
          <div class="topic-accordion-box-header" onclick="toggleSetupAccordion('${ch.id}')">
            <div class="topic-header-check-wrap" onclick="event.stopPropagation()">
              <input type="checkbox" id="setup-chk-ch-${ch.id}" class="tactile-checkbox" onchange="toggleSetupChapter('${ch.id}', this.checked)" title="Pilih Semua Sub-Bab di ${ch.title}">
              <label for="setup-chk-ch-${ch.id}" class="topic-header-label" onclick="event.stopPropagation()">
                ${ch.title}
              </label>
            </div>
            <div class="topic-header-meta">
              <span id="setup-ch-count-${ch.id}" class="topic-count-pill">0 Soal</span>
              <button type="button" class="topic-chevron-btn" onclick="event.stopPropagation(); toggleSetupAccordion('${ch.id}')" aria-label="Ekspansi Sub-Bab">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <div class="topic-sub-list">
            ${ch.subTopics.map(sub => `
              <div class="topic-sub-row">
                <div class="topic-sub-left">
                  <input type="checkbox" id="setup-chk-sub-${sub.id}" class="tactile-checkbox" onchange="toggleSetupSubTopic('${sub.id}', this.checked)" title="Pilih ${sub.title}">
                  <label for="setup-chk-sub-${sub.id}" class="topic-sub-title">
                    <span class="subtopic-code mr-1">${sub.id}</span>
                    <span>${sub.title}</span>
                  </label>
                </div>
                <span id="setup-sub-count-${sub.id}" class="subtopic-count-pill">0 Soal</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
  syncSetupTopicSelectorUI();
}

/**
 * Synchronize checkbox states, count pills, and total counter badge in setup modal
 */
function syncSetupTopicSelectorUI() {
  if (!window.SYLLABUS_DATA || !window.SYLLABUS_DATA.pillars) return;

  const selected = state.setupForm.selectedSubTopicIds || new Set();

  window.SYLLABUS_DATA.pillars.forEach(p => {
    p.chapters.forEach(ch => {
      let chSelectedCount = 0;
      let chTotalAvailable = 0;

      ch.subTopics.forEach(sub => {
        const isChecked = selected.has(sub.id);
        if (isChecked) chSelectedCount++;

        const subChk = document.getElementById(`setup-chk-sub-${sub.id}`);
        if (subChk) subChk.checked = isChecked;

        // Calculate available questions for this subtopic based on current difficulties
        const subMatches = getFilteredQuestions({
          subTopicId: sub.id,
          difficulties: state.setupForm.difficulties,
          progressive: state.setupForm.isProgressive,
          wrongOnly: state.setupForm.wrongOnly
        });
        chTotalAvailable += subMatches.length;

        const subCountEl = document.getElementById(`setup-sub-count-${sub.id}`);
        if (subCountEl) subCountEl.textContent = `${subMatches.length} Soal`;
      });

      const chChk = document.getElementById(`setup-chk-ch-${ch.id}`);
      if (chChk) {
        if (chSelectedCount === ch.subTopics.length) {
          chChk.checked = true;
          chChk.indeterminate = false;
        } else if (chSelectedCount === 0) {
          chChk.checked = false;
          chChk.indeterminate = false;
        } else {
          chChk.checked = false;
          chChk.indeterminate = true;
        }
      }

      const chCountEl = document.getElementById(`setup-ch-count-${ch.id}`);
      if (chCountEl) chCountEl.textContent = `${chTotalAvailable} Soal`;
    });
  });

  // Calculate total questions available across currently selected subtopics
  const totalMatches = getFilteredQuestions({
    subTopicIds: selected,
    difficulties: state.setupForm.difficulties,
    progressive: state.setupForm.isProgressive,
    wrongOnly: state.setupForm.wrongOnly
  });

  const badge = document.getElementById('setupTopicCounterBadge');
  if (badge) {
    badge.textContent = `Ditemukan ${totalMatches.length} butir soal pada sub-bab terpilih`;
  }
}

function selectAllSetupTopics() {
  state.setupForm.selectedSubTopicIds = new Set(getAllSubTopicIds());
  syncSetupTopicSelectorUI();
  syncSyllabusCardCheckboxes();
  updateSetupPreviewCount();
}

function resetSetupTopics() {
  state.setupForm.selectedSubTopicIds = new Set();
  syncSetupTopicSelectorUI();
  syncSyllabusCardCheckboxes();
  updateSetupPreviewCount();
}

function toggleSetupChapter(chapterId, checked) {
  const ch = findChapterById(chapterId);
  if (!ch) return;
  if (!state.setupForm.selectedSubTopicIds) state.setupForm.selectedSubTopicIds = new Set();
  ch.subTopics.forEach(sub => {
    if (checked) {
      state.setupForm.selectedSubTopicIds.add(sub.id);
    } else {
      state.setupForm.selectedSubTopicIds.delete(sub.id);
    }
  });
  syncSetupTopicSelectorUI();
  syncSyllabusCardCheckboxes();
  updateSetupPreviewCount();
}

function toggleSetupSubTopic(subTopicId, checked) {
  if (!state.setupForm.selectedSubTopicIds) state.setupForm.selectedSubTopicIds = new Set();
  if (checked) {
    state.setupForm.selectedSubTopicIds.add(subTopicId);
  } else {
    state.setupForm.selectedSubTopicIds.delete(subTopicId);
  }
  syncSetupTopicSelectorUI();
  syncSyllabusCardCheckboxes();
  updateSetupPreviewCount();
}

function toggleSetupAccordion(chapterId) {
  const box = document.getElementById(`setup-box-${chapterId}`);
  if (box) {
    box.classList.toggle('open');
  }
}

function openDrillSetupModal(subject = 'all', chapterId = 'all', subTopicId = 'all', scopeTitle = 'Semua Materi') {
  state.setupForm.subject = subject;
  state.setupForm.chapterId = chapterId;
  state.setupForm.subTopicId = subTopicId;
  state.setupForm.scopeTitle = scopeTitle;
  state.setupForm.isProgressive = false;
  state.setupForm.wrongOnly = false;

  // Multi-select subTopic selection mapping
  if (subTopicId !== 'all') {
    state.setupForm.selectedSubTopicIds = new Set([subTopicId]);
  } else if (chapterId !== 'all') {
    const ch = findChapterById(chapterId);
    state.setupForm.selectedSubTopicIds = ch ? new Set(ch.subTopics.map(s => s.id)) : new Set(getAllSubTopicIds());
  } else if (subject !== 'all') {
    const pillar = window.SYLLABUS_DATA.pillars.find(p => p.id === subject);
    const pSubIds = [];
    if (pillar && Array.isArray(pillar.chapters)) {
      pillar.chapters.forEach(ch => {
        if (Array.isArray(ch.subTopics)) ch.subTopics.forEach(s => pSubIds.push(s.id));
      });
    }
    state.setupForm.selectedSubTopicIds = new Set(pSubIds);
  } else {
    // If not already populated, default to all subtopics
    if (!state.setupForm.selectedSubTopicIds || state.setupForm.selectedSubTopicIds.size === 0) {
      state.setupForm.selectedSubTopicIds = new Set(getAllSubTopicIds());
    }
  }

  const modal = document.getElementById('drillSetupModal');
  const scopeSubtitle = document.getElementById('setupScopeSubtitle');
  if (scopeSubtitle) scopeSubtitle.textContent = scopeTitle;

  // Update badge for available wrong questions
  const wrongCountBadge = document.getElementById('wrongCountBadge');
  if (wrongCountBadge) {
    wrongCountBadge.textContent = getWrongQuestionsHistory().length;
  }

  // Render and sync Topic Selector
  renderSetupTopicSelector();

  // If a specific chapter was targeted, open its accordion inside modal
  if (chapterId !== 'all') {
    const box = document.getElementById(`setup-box-${chapterId}`);
    if (box) box.classList.add('open');
  } else if (subTopicId !== 'all') {
    const found = findSubTopicById(subTopicId);
    if (found && found.chapter) {
      const box = document.getElementById(`setup-box-${found.chapter.id}`);
      if (box) box.classList.add('open');
    }
  }

  // Refresh active pills styling
  syncSetupPillStyles();
  updateSetupPreviewCount();

  if (modal) modal.classList.add('open');
}

function closeDrillSetupModal() {
  const modal = document.getElementById('drillSetupModal');
  if (modal) modal.classList.remove('open');
}

function toggleSetupDifficulty(diff) {
  state.setupForm.isProgressive = false;
  const arr = state.setupForm.difficulties;
  const idx = arr.indexOf(diff);
  if (idx > -1) {
    if (arr.length > 1) { // Prevent empty selection
      arr.splice(idx, 1);
    }
  } else {
    arr.push(diff);
  }
  syncSetupPillStyles();
  syncSetupTopicSelectorUI();
  updateSetupPreviewCount();
}

function setSetupProgressiveDifficulty() {
  state.setupForm.isProgressive = true;
  state.setupForm.difficulties = ['mudah', 'sedang', 'hots'];
  syncSetupPillStyles();
  syncSetupTopicSelectorUI();
  updateSetupPreviewCount();
}

function toggleSetupWrongOnly() {
  const wrongList = getWrongQuestionsHistory();
  if (!state.setupForm.wrongOnly && wrongList.length === 0) {
    alert('Belum ada riwayat soal salah. Silakan berlatih terlebih dahulu!');
    return;
  }
  state.setupForm.wrongOnly = !state.setupForm.wrongOnly;
  syncSetupPillStyles();
  syncSetupTopicSelectorUI();
  updateSetupPreviewCount();
}

function syncSetupPillStyles() {
  const pillM = document.getElementById('pillMudah');
  const pillS = document.getElementById('pillSedang');
  const pillH = document.getElementById('pillHots');
  const pillP = document.getElementById('pillProgresif');
  const pillW = document.getElementById('pillWrongOnly');

  if (pillM) pillM.className = `config-pill pill-mudah ${state.setupForm.difficulties.includes('mudah') && !state.setupForm.isProgressive ? 'active' : ''}`;
  if (pillS) pillS.className = `config-pill pill-sedang ${state.setupForm.difficulties.includes('sedang') && !state.setupForm.isProgressive ? 'active' : ''}`;
  if (pillH) pillH.className = `config-pill pill-hots ${state.setupForm.difficulties.includes('hots') && !state.setupForm.isProgressive ? 'active' : ''}`;
  if (pillP) pillP.className = `config-pill pill-progresif ${state.setupForm.isProgressive ? 'active' : ''}`;
  if (pillW) pillW.className = `config-pill pill-wrong ${state.setupForm.wrongOnly ? 'active' : ''}`;
}

function selectSetupMode(mode) {
  state.setupForm.mode = mode;
  const cardLatihan = document.getElementById('modeLatihanCard');
  const cardUjian = document.getElementById('modeUjianCard');

  if (cardLatihan) cardLatihan.className = `mode-choice-card ${mode === 'latihan' ? 'selected' : ''}`;
  if (cardUjian) cardUjian.className = `mode-choice-card ${mode === 'ujian' ? 'selected' : ''}`;
}

function selectSetupTimerMode(mode) {
  state.setupForm.timerMode = mode;
  const optCountdown = document.getElementById('timerOptCountdown');
  const optStopwatch = document.getElementById('timerOptStopwatch');

  if (optCountdown) optCountdown.className = `config-pill ${mode === 'countdown' ? 'active' : ''}`;
  if (optStopwatch) optStopwatch.className = `config-pill ${mode === 'stopwatch' ? 'active' : ''}`;

  updateReactiveTimerEstimation();
}

function getSetupFilteredMatches() {
  return getFilteredQuestions({
    subTopicIds: state.setupForm.selectedSubTopicIds,
    difficulties: state.setupForm.difficulties,
    progressive: state.setupForm.isProgressive,
    wrongOnly: state.setupForm.wrongOnly
  });
}

function updateSetupPreviewCount() {
  const matches = getSetupFilteredMatches();
  const maxAvailable = matches.length;

  const countEl = document.getElementById('setupAvailableCount');
  if (countEl) {
    countEl.textContent = `Ditemukan ${maxAvailable} butir soal yang sesuai dengan kombinasi filter ini.`;
  }

  const badge = document.getElementById('setupTopicCounterBadge');
  if (badge) {
    badge.textContent = `Ditemukan ${maxAvailable} butir soal pada sub-bab terpilih`;
  }

  // Update Stepper Max Badge
  const stepperMaxBadge = document.getElementById('stepperMaxBadge');
  if (stepperMaxBadge) {
    stepperMaxBadge.textContent = `(Maks: ${maxAvailable})`;
  }

  // Clamp current questionCount if needed
  let currentVal = state.setupForm.questionCount;
  if (currentVal === 'all') {
    syncStepperUI(maxAvailable, maxAvailable);
  } else {
    let num = typeof currentVal === 'number' ? currentVal : 10;
    if (maxAvailable === 0) {
      num = 0;
    } else if (num > maxAvailable) {
      num = maxAvailable;
    } else if (num < 1) {
      num = 1;
    }
    state.setupForm.questionCount = num;
    syncStepperUI(num, maxAvailable);
  }

  syncCountPillsUI();
  updateReactiveTimerEstimation();
}

function syncStepperUI(val, maxAvailable) {
  const input = document.getElementById('inputQuestionCount');
  const btnMinus = document.getElementById('btnStepperMinus');
  const btnPlus = document.getElementById('btnStepperPlus');

  if (input) {
    input.max = maxAvailable;
    input.value = val;
  }
  if (btnMinus) {
    btnMinus.disabled = val <= 1 || maxAvailable <= 0;
  }
  if (btnPlus) {
    btnPlus.disabled = val >= maxAvailable || maxAvailable <= 0;
  }
}

function syncCountPillsUI() {
  const buttons = document.querySelectorAll('.setup-count-pill');
  const count = state.setupForm.questionCount;
  buttons.forEach(btn => {
    const text = btn.textContent.trim();
    if (count === 'all' && (text === 'Semua' || text.startsWith('Semua'))) {
      btn.classList.add('active');
    } else if (typeof count === 'number' && text.startsWith(`${count} `)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function selectSetupQuestionCount(count) {
  const matches = getSetupFilteredMatches();
  const maxAvailable = matches.length;

  if (count === 'all') {
    state.setupForm.questionCount = 'all';
    syncStepperUI(maxAvailable, maxAvailable);
  } else {
    let num = Number(count);
    if (maxAvailable === 0) num = 0;
    else if (num > maxAvailable) num = maxAvailable;
    else if (num < 1) num = 1;

    state.setupForm.questionCount = num;
    syncStepperUI(num, maxAvailable);
  }

  syncCountPillsUI();
  updateReactiveTimerEstimation();
}

function stepQuestionCount(delta) {
  const matches = getSetupFilteredMatches();
  const maxAvailable = matches.length;
  if (maxAvailable === 0) return;

  let currentVal = state.setupForm.questionCount;
  let num = currentVal === 'all' ? maxAvailable : (Number(currentVal) || 10);
  num += delta;

  if (num < 1) num = 1;
  if (num > maxAvailable) num = maxAvailable;

  state.setupForm.questionCount = num;
  syncStepperUI(num, maxAvailable);
  syncCountPillsUI();
  updateReactiveTimerEstimation();
}

function handleManualCountInput(val) {
  const matches = getSetupFilteredMatches();
  const maxAvailable = matches.length;

  let num = parseInt(val, 10);
  if (isNaN(num)) return;

  if (maxAvailable === 0) {
    num = 0;
  } else if (num < 1) {
    num = 1;
  } else if (num > maxAvailable) {
    num = maxAvailable;
  }

  state.setupForm.questionCount = num;
  syncStepperUI(num, maxAvailable);
  syncCountPillsUI();
  updateReactiveTimerEstimation();
}

function updateReactiveTimerEstimation() {
  const details = document.getElementById('setupTimerDetails');
  if (!details) return;

  const matches = getSetupFilteredMatches();
  const maxAvailable = matches.length;

  let activeCount = state.setupForm.questionCount === 'all' ? maxAvailable : Number(state.setupForm.questionCount) || 0;
  if (activeCount > maxAvailable) activeCount = maxAvailable;

  if (state.setupForm.timerMode === 'countdown') {
    const mins = activeCount * 2;
    details.innerHTML = `Batas waktu otomatis: <strong>${mins} menit</strong> (2 menit × ${activeCount} butir soal). Peringatan merah saat sisa waktu &lt; 20%.`;
  } else {
    details.innerHTML = `Stopwatch menghitung maju durasi pengerjaan Anda untuk <strong>${activeCount} butir soal</strong> tanpa batas waktu pemblokiran.`;
  }
}

function toggleSetupCheckbox(id) {
  const chk = document.getElementById(id);
  if (chk) {
    chk.checked = !chk.checked;
    if (id === 'chkShuffleQuestions') state.setupForm.shuffleQuestions = chk.checked;
    if (id === 'chkShuffleOptions') state.setupForm.shuffleOptions = chk.checked;
  }
}

// Start Session from Configurator
function startConfiguredDrillSession() {
  const matches = getSetupFilteredMatches();

  if (matches.length === 0) {
    alert('Tidak ada soal yang sesuai dengan kombinasi filter ini. Silakan pilih filter tingkat kesulitan atau cakupan materi lainnya.');
    return;
  }

  // Deep clone questions so shuffling options does not mutate original data bank
  let sessionPool = JSON.parse(JSON.stringify(matches));

  // Acak urutan soal jika opsi shuffle aktif dan bukan mode progresif murni
  if (state.setupForm.shuffleQuestions && !state.setupForm.isProgressive) {
    sessionPool.sort(() => Math.random() - 0.5);
  }

  // Terapkan batasan jumlah soal
  let finalQuestions = sessionPool;
  if (typeof state.setupForm.questionCount === 'number' && state.setupForm.questionCount > 0) {
    finalQuestions = sessionPool.slice(0, state.setupForm.questionCount);
  }

  // Acak posisi opsi (A - E) jika diaktifkan
  if (state.setupForm.shuffleOptions) {
    finalQuestions.forEach(q => {
      const origCorrect = q.options[q.correctIndex];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      q.correctIndex = shuffledOptions.indexOf(origCorrect);
      q.options = shuffledOptions;
    });
  }

  // Setup state for active session
  state.questions = finalQuestions;
  state.currentIndex = 0;
  state.sessionScope = {
    ...state.setupForm,
    selectedSubTopicIds: Array.from(state.setupForm.selectedSubTopicIds || [])
  };
  state.sessionMode = state.setupForm.mode;
  state.timerMode = state.setupForm.timerMode;
  state.isReviewMode = false;
  state.userAnswers = new Array(finalQuestions.length).fill(null);
  state.isVerified = new Array(finalQuestions.length).fill(false);
  state.isRagu = new Array(finalQuestions.length).fill(false);
  state.solutionOpen = new Array(finalQuestions.length).fill(false);
  state.questionTimeSpent = new Array(finalQuestions.length).fill(0);
  state.sessionStartTime = Date.now();

  // Setup Timer
  if (state.timerMode === 'countdown') {
    state.totalDurationSeconds = finalQuestions.length * 2 * 60; // 2 menit per soal
    state.timerSeconds = state.totalDurationSeconds;
  } else {
    state.totalDurationSeconds = 0;
    state.timerSeconds = 0; // Stopwatch mulai dari 0
  }
  state.timerRunning = true;
  startTimer();

  // Close modal and switch views
  closeDrillSetupModal();
  showWorkspaceView();
  renderCurrentQuestion(true);
  renderMatrixGrid();
  updateStats();

  // Save initial session state
  saveSessionState();
}

// ============================================================================
// 6. TIMER ENGINE (COUNTDOWN & STOPWATCH WITH URGENCY MONITOR)
// ============================================================================
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);

  function tick() {
    if (!state.timerRunning) return;

    if (state.timerMode === 'countdown') {
      state.timerSeconds--;
      updateTimerDisplay();

      // Urgency Alert when < 20% time left
      const timerPill = document.getElementById('timerPill');
      if (timerPill && state.totalDurationSeconds > 0) {
        const percentLeft = (state.timerSeconds / state.totalDurationSeconds) * 100;
        if (percentLeft <= 20) {
          timerPill.classList.add('urgent');
        } else {
          timerPill.classList.remove('urgent');
        }
      }

      if (state.timerSeconds <= 0) {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        alert('⏱️ Waktu pengerjaan telah habis! Sistem akan mengumpulkan lembar jawaban Anda.');
        finishDrillingSession();
      }
    } else {
      // Stopwatch Mode
      state.timerSeconds++;
      updateTimerDisplay();
    }

    // Periodically save active timer state every 5 seconds
    if (Math.abs(state.timerSeconds) % 5 === 0) {
      saveSessionState();
    }
  }

  updateTimerDisplay();
  state.timerInterval = setInterval(tick, 1000);
}

function updateTimerDisplay() {
  const timerText = document.getElementById('timerText');
  if (!timerText) return;

  const mins = Math.floor(Math.abs(state.timerSeconds) / 60);
  const secs = Math.abs(state.timerSeconds) % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  timerText.textContent = formatted;
}

function toggleTimerPause() {
  state.timerRunning = !state.timerRunning;
  const timerPill = document.getElementById('timerPill');
  if (timerPill) {
    timerPill.style.opacity = state.timerRunning ? '1' : '0.65';
    timerPill.title = state.timerRunning ? 'Klik untuk menjeda timer' : 'Timer dijeda - klik untuk lanjut';
  }
}

// ============================================================================
// 7. WORKSPACE QUESTION RENDERING ENGINE
// ============================================================================
function renderCurrentQuestion(shouldScrollToTop = false) {
  if (!state.questions || state.questions.length === 0) return;

  const q = state.questions[state.currentIndex];
  const total = state.questions.length;

  // Header Elements
  const headerTopic = document.getElementById('headerTopic');
  const headerProgressFill = document.getElementById('headerProgressFill');
  if (headerTopic) {
    headerTopic.textContent = `${q.subject}: ${q.category || q.subTopicId}`;
  }
  if (headerProgressFill) {
    const progressPercent = ((state.currentIndex + 1) / total) * 100;
    headerProgressFill.style.width = `${progressPercent}%`;
  }

  // Question Metadata Badges
  const questionNumBadge = document.getElementById('questionNumBadge');
  const subjectBadge = document.getElementById('subjectBadge');
  const difficultyBadge = document.getElementById('difficultyBadge');
  const btnRagu = document.getElementById('btnRagu');

  if (questionNumBadge) {
    questionNumBadge.textContent = `SOAL ${String(state.currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  }

  if (subjectBadge) {
    subjectBadge.textContent = q.subject;
    subjectBadge.className = `tactile-badge ${q.subject === 'FISIKA' ? 'badge-physics' : 'badge-math'}`;
  }

  if (difficultyBadge) {
    let diffClass = 'badge-neutral';
    let diffLabel = q.difficultyLabel || 'Sedang';
    if (q.difficulty === 'mudah') {
      diffClass = 'text-green-600 font-medium';
      diffLabel = '🟢 MUDAH';
    } else if (q.difficulty === 'sedang') {
      diffClass = 'text-amber-600 font-medium';
      diffLabel = '🟡 SEDANG';
    } else if (q.difficulty === 'hots') {
      diffClass = 'text-red-600 font-medium';
      diffLabel = '🔴 HOTS / UTBK';
    }
    difficultyBadge.innerHTML = diffLabel;
  }

  // Bookmark / Doubt State
  if (btnRagu) {
    if (state.isRagu[state.currentIndex]) {
      btnRagu.classList.add('active');
      btnRagu.innerHTML = '<i class="fa-solid fa-bookmark mr-1"></i> Ragu-ragu (Ditandai)';
    } else {
      btnRagu.classList.remove('active');
      btnRagu.innerHTML = '<i class="fa-regular fa-bookmark mr-1"></i> Tandai Ragu-ragu';
    }
  }

  // Problem Text Statement
  const problemStatement = document.getElementById('problemStatement');
  if (problemStatement) {
    problemStatement.innerHTML = q.statement;
  }

  // Blueprint SVG Diagram Box
  const diagramBox = document.getElementById('diagramBox');
  const diagramContent = document.getElementById('diagramContent');
  const diagramCaption = document.getElementById('diagramCaption');
  if (q.hasDiagram && q.diagramSvg && diagramBox && diagramContent && diagramCaption) {
    diagramBox.classList.remove('hidden');
    diagramContent.innerHTML = q.diagramSvg;
    diagramCaption.textContent = q.diagramCaption || 'SKEMA SISTEM FISIKA';
  } else if (diagramBox) {
    diagramBox.classList.add('hidden');
  }

  // Options List
  const optionsList = document.getElementById('optionsList');
  if (optionsList) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const chosen = state.userAnswers[state.currentIndex];
    const verified = state.isVerified[state.currentIndex] || state.isReviewMode;

    optionsList.innerHTML = q.options.map((opt, idx) => {
      let stateClass = '';
      if (verified) {
        if (idx === q.correctIndex) {
          stateClass = 'correct disabled-verified';
        } else if (idx === chosen) {
          stateClass = 'wrong disabled-verified';
        } else {
          stateClass = 'disabled-verified';
        }
      } else if (chosen === idx) {
        stateClass = 'selected';
      }

      return `
        <button class="option-card ${stateClass}" onclick="handleOptionSelect(${idx})" ${verified ? 'disabled' : ''}>
          <div class="option-badge">[${letters[idx]}]</div>
          <div class="option-text">${opt}</div>
          ${verified && idx === q.correctIndex ? '<i class="fa-solid fa-circle-check text-green-600 ml-auto text-xl"></i>' : ''}
          ${verified && idx === chosen && idx !== q.correctIndex ? '<i class="fa-solid fa-circle-xmark text-red-600 ml-auto text-xl"></i>' : ''}
        </button>
      `;
    }).join('');
  }

  // Solution Accordion vs Exam Locked Notice
  const solutionAccordion = document.getElementById('solutionAccordion');
  const examLockedNotice = document.getElementById('examLockedNotice');
  const solutionConcept = document.getElementById('solutionConcept');
  const solutionSteps = document.getElementById('solutionSteps');
  const solutionPitfalls = document.getElementById('solutionPitfalls');

  if (state.sessionMode === 'ujian' && !state.isReviewMode) {
    // Mode Ujian: Pembahasan dikunci
    if (solutionAccordion) solutionAccordion.classList.add('hidden');
    if (examLockedNotice) examLockedNotice.classList.remove('hidden');
  } else {
    // Mode Latihan atau Mode Review Rapor: Pembahasan tersedia
    if (examLockedNotice) examLockedNotice.classList.add('hidden');
    if (solutionAccordion) {
      solutionAccordion.classList.remove('hidden');
      if (solutionConcept) solutionConcept.innerHTML = q.solution ? q.solution.concept : '';
      if (solutionSteps) solutionSteps.innerHTML = q.solution ? q.solution.steps : '';
      if (solutionPitfalls) solutionPitfalls.innerHTML = q.solution ? q.solution.pitfalls : '';

      if (state.solutionOpen[state.currentIndex] || state.isReviewMode) {
        solutionAccordion.classList.add('open');
      } else {
        solutionAccordion.classList.remove('open');
      }
    }
  }

  // Action Bar Button Labels
  updateBottomActionBar();

  // Desktop Finish Exam Action Visibility
  const examFinishBox = document.getElementById('examFinishBox');
  if (examFinishBox) {
    if (state.sessionMode === 'ujian' && !state.isReviewMode) {
      examFinishBox.classList.remove('hidden');
    } else {
      examFinishBox.classList.add('hidden');
    }
  }

  // Trigger KaTeX Formula Typesetting
  triggerMathTypeset();

  if (shouldScrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Math Typesetting Engine with Overflow Protection
let mathPollTimer = null;
function triggerMathTypeset() {
  if (window.renderMathInElement) {
    if (mathPollTimer) {
      clearInterval(mathPollTimer);
      mathPollTimer = null;
    }
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false,
      output: 'htmlAndMathml'
    });

    // Mobile Formula Overflow Safeguard: Ensure all KaTeX displays have a wrapper
    document.querySelectorAll('.katex-display').forEach(el => {
      if (!el.parentElement.classList.contains('formula-scroll')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'formula-scroll';
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }
    });
  } else if (!mathPollTimer) {
    let attempts = 0;
    mathPollTimer = setInterval(() => {
      attempts++;
      if (window.renderMathInElement) {
        clearInterval(mathPollTimer);
        mathPollTimer = null;
        triggerMathTypeset();
      } else if (attempts > 35) {
        clearInterval(mathPollTimer);
        mathPollTimer = null;
      }
    }, 80);
  }
}

// ============================================================================
// 8. INTERACTIVE ACTIONS (SELECT, CHECK, RAGU, ACCORDION)
// ============================================================================
function handleOptionSelect(optionIndex) {
  if ((state.isVerified[state.currentIndex] && state.sessionMode === 'latihan') || state.isReviewMode) {
    return;
  }

  state.userAnswers[state.currentIndex] = optionIndex;

  // Visual option card update
  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  renderMatrixGrid();
  updateStats();
  updateBottomActionBar();
  saveSessionState();
}

function toggleRagu() {
  state.isRagu[state.currentIndex] = !state.isRagu[state.currentIndex];
  const btnRagu = document.getElementById('btnRagu');
  if (btnRagu) {
    if (state.isRagu[state.currentIndex]) {
      btnRagu.classList.add('active');
      btnRagu.innerHTML = '<i class="fa-solid fa-bookmark mr-1"></i> Ragu-ragu (Ditandai)';
    } else {
      btnRagu.classList.remove('active');
      btnRagu.innerHTML = '<i class="fa-regular fa-bookmark mr-1"></i> Tandai Ragu-ragu';
    }
  }
  renderMatrixGrid();
  updateStats();
  saveSessionState();
}

function toggleSolutionAccordion() {
  state.solutionOpen[state.currentIndex] = !state.solutionOpen[state.currentIndex];
  const solutionAccordion = document.getElementById('solutionAccordion');
  if (solutionAccordion) {
    if (state.solutionOpen[state.currentIndex]) {
      solutionAccordion.classList.add('open');
      triggerMathTypeset();
      setTimeout(() => {
        solutionAccordion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    } else {
      solutionAccordion.classList.remove('open');
    }
  }
  saveSessionState();
}

function handleCheckAnswer() {
  const chosen = state.userAnswers[state.currentIndex];
  
  if (state.sessionMode === 'ujian' && !state.isReviewMode) {
    // In Exam Mode: Center button functions as Next Question or Finish
    if (state.currentIndex === state.questions.length - 1) {
      confirmFinishExamSession();
    } else {
      handleNextQuestion();
    }
    return;
  }

  // In Practice Mode: Verify answer and show solution
  if (chosen === null) {
    alert('Silakan pilih salah satu opsi jawaban (A, B, C, D, atau E) terlebih dahulu!');
    return;
  }

  state.isVerified[state.currentIndex] = true;
  state.solutionOpen[state.currentIndex] = true;

  // Save mastery progress to localStorage
  const currentQ = state.questions[state.currentIndex];
  const isCorrect = chosen === currentQ.correctIndex;
  saveMasteryProgress(currentQ.id, isCorrect);
  if (!isCorrect) {
    recordWrongQuestion(currentQ.id);
  }

  renderCurrentQuestion(false);
  renderMatrixGrid();
  updateStats();
  saveSessionState();

  setTimeout(() => {
    const solutionAccordion = document.getElementById('solutionAccordion');
    if (solutionAccordion) {
      solutionAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);

  // If all questions are verified in practice mode, open completion modal
  if (state.isVerified.every(Boolean)) {
    setTimeout(finishDrillingSession, 1200);
  }
}

function handlePrevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderCurrentQuestion(true);
    renderMatrixGrid();
    saveSessionState();
  }
}

function handleNextQuestion() {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion(true);
    renderMatrixGrid();
    saveSessionState();
  }
}

function jumpToQuestion(idx) {
  if (idx >= 0 && idx < state.questions.length) {
    state.currentIndex = idx;
    closeMobileDrawer();
    renderCurrentQuestion(true);
    renderMatrixGrid();
    saveSessionState();
  }
}

function updateBottomActionBar() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnCheck = document.getElementById('btnCheck');
  const total = state.questions.length;

  if (btnPrev) {
    btnPrev.disabled = state.currentIndex === 0;
  }
  if (btnNext) {
    btnNext.disabled = state.currentIndex === total - 1;
  }

  if (btnCheck) {
    if (state.sessionMode === 'ujian' && !state.isReviewMode) {
      if (state.currentIndex === total - 1) {
        btnCheck.innerHTML = '<i class="fa-solid fa-paper-plane mr-1.5"></i> <span id="btnCheckText">Kumpulkan Ujian</span>';
        btnCheck.className = 'tactile-btn tactile-btn-primary';
        btnCheck.onclick = confirmFinishExamSession;
      } else {
        btnCheck.innerHTML = '<i class="fa-solid fa-arrow-right mr-1.5"></i> <span id="btnCheckText">Lanjut Soal</span>';
        btnCheck.className = 'tactile-btn tactile-btn-secondary';
        btnCheck.onclick = handleNextQuestion;
      }
    } else {
      // Practice Mode or Review Mode
      const verified = state.isVerified[state.currentIndex] || state.isReviewMode;
      if (verified) {
        btnCheck.innerHTML = '<i class="fa-solid fa-book-open mr-1.5"></i> <span id="btnCheckText">Pembahasan</span>';
        btnCheck.className = 'tactile-btn tactile-btn-secondary';
        btnCheck.onclick = toggleSolutionAccordion;
      } else {
        btnCheck.innerHTML = '<i class="fa-solid fa-circle-check mr-1.5"></i> <span id="btnCheckText">Cek Jawaban</span>';
        btnCheck.className = 'tactile-btn tactile-btn-primary';
        btnCheck.onclick = handleCheckAnswer;
      }
    }
  }
}

// ============================================================================
// 9. QUESTION MATRIX & PROGRESS STATS
// ============================================================================
function renderMatrixGrid() {
  const containers = [
    document.getElementById('matrixGridDesktop'),
    document.getElementById('matrixGridMobile')
  ];

  const total = state.questions.length;
  const countBadge = document.getElementById('matrixCountBadge');
  if (countBadge) countBadge.textContent = `${total} Butir`;

  containers.forEach(container => {
    if (!container) return;
    container.innerHTML = state.questions.map((q, idx) => {
      let statusClass = '';
      const chosen = state.userAnswers[idx];
      const verified = state.isVerified[idx] || state.isReviewMode;
      const isRagu = state.isRagu[idx];
      const isActive = idx === state.currentIndex;

      if (verified) {
        if (chosen === q.correctIndex) {
          statusClass = 'answered-correct';
        } else {
          statusClass = 'answered-wrong';
        }
      } else if (isRagu) {
        statusClass = 'ragu';
      } else if (chosen !== null) {
        statusClass = 'answered';
      }

      return `
        <button class="matrix-btn ${statusClass} ${isActive ? 'active' : ''}" 
                onclick="jumpToQuestion(${idx})" 
                title="Soal ${idx + 1} (${q.subject} - ${q.difficulty.toUpperCase()})">
          ${String(idx + 1).padStart(2, '0')}
          ${isRagu && !statusClass.includes('ragu') ? '<span class="ragu-indicator"></span>' : ''}
        </button>
      `;
    }).join('');
  });
}

function updateStats() {
  const total = state.questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  state.userAnswers.forEach((ans, idx) => {
    if (ans !== null) answeredCount++;
    if (state.isVerified[idx] || state.isReviewMode) {
      if (ans === state.questions[idx].correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const statAnswered = document.getElementById('statAnswered');
  const statCorrect = document.getElementById('statCorrect');
  const statAccuracy = document.getElementById('statAccuracy');
  const statRemaining = document.getElementById('statRemaining');

  if (statAnswered) statAnswered.textContent = `${answeredCount}/${total}`;
  if (statCorrect) statCorrect.textContent = `${correctCount}`;
  if (statAccuracy) statAccuracy.textContent = `${accuracy}%`;
  if (statRemaining) statRemaining.textContent = `${total - answeredCount}`;
}

// ============================================================================
// 10. END-OF-SESSION SUMMARY & REVIEW SCREEN (RAPOR HASIL DRILLING)
// ============================================================================
function confirmFinishExamSession() {
  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const total = state.questions.length;
  const raguCount = state.isRagu.filter(Boolean).length;

  let msg = `Apakah Anda yakin ingin mengakhiri dan mengumpulkan sesi drilling ini?\n\n• Terjawab: ${answeredCount} dari ${total} butir`;
  if (raguCount > 0) {
    msg += `\n• Masih ada ${raguCount} soal ditandai Ragu-ragu!`;
  }
  if (answeredCount < total) {
    msg += `\n• Peringatan: ${total - answeredCount} soal belum diisi!`;
  }

  if (confirm(msg)) {
    finishDrillingSession();
  }
}

function finishDrillingSession() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerRunning = false;
  state.sessionEndTime = Date.now();

  // Mark all questions as verified for final grading
  state.isVerified = new Array(state.questions.length).fill(true);

  // Compute final score and breakdown
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  // Breakdown per Difficulty Tier
  const tierStats = {
    mudah: { total: 0, correct: 0 },
    sedang: { total: 0, correct: 0 },
    hots: { total: 0, correct: 0 }
  };

  state.questions.forEach((q, idx) => {
    const chosen = state.userAnswers[idx];
    const diff = q.difficulty || 'sedang';

    if (tierStats[diff]) tierStats[diff].total++;

    if (chosen === null) {
      emptyCount++;
      saveMasteryProgress(q.id, false);
      recordWrongQuestion(q.id);
    } else if (chosen === q.correctIndex) {
      correctCount++;
      if (tierStats[diff]) tierStats[diff].correct++;
      saveMasteryProgress(q.id, true);
    } else {
      wrongCount++;
      saveMasteryProgress(q.id, false);
      recordWrongQuestion(q.id);
    }
  });

  const total = state.questions.length;
  const finalScore = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  // Clear session state since session has officially finished
  clearSessionState();

  // Calculate Average Time per Question
  const totalSecondsSpent = state.timerMode === 'countdown'
    ? (state.totalDurationSeconds - Math.max(0, state.timerSeconds))
    : state.timerSeconds;
  const avgSeconds = total > 0 ? Math.round(totalSecondsSpent / total) : 0;
  const avgMins = Math.floor(avgSeconds / 60);
  const avgRemSecs = avgSeconds % 60;
  const formattedAvg = avgMins > 0 ? `${avgMins}m ${avgRemSecs}s` : `${avgRemSecs}s`;

  // Populate Rapor Modal DOM Elements
  const raporGradeTitle = document.getElementById('raporGradeTitle');
  const raporFinalScore = document.getElementById('raporFinalScore');
  const raporSummarySubtitle = document.getElementById('raporSummarySubtitle');
  const raporCorrectCount = document.getElementById('raporCorrectCount');
  const raporWrongCount = document.getElementById('raporWrongCount');
  const raporEmptyCount = document.getElementById('raporEmptyCount');
  const raporAvgTime = document.getElementById('raporAvgTime');

  if (raporFinalScore) raporFinalScore.textContent = finalScore;
  if (raporCorrectCount) raporCorrectCount.textContent = correctCount;
  if (raporWrongCount) raporWrongCount.textContent = wrongCount;
  if (raporEmptyCount) raporEmptyCount.textContent = emptyCount;
  if (raporAvgTime) raporAvgTime.textContent = formattedAvg;

  if (raporGradeTitle) {
    if (finalScore >= 85) {
      raporGradeTitle.textContent = '🌟 Luar Biasa! Penguasaan Sangat Tinggi!';
      if (raporSummarySubtitle) raporSummarySubtitle.textContent = 'Performa Anda siap bersaing di tingkat UTBK Saintek / STEI!';
    } else if (finalScore >= 65) {
      raporGradeTitle.textContent = '👍 Kerja Bagus! Pemahaman Solid!';
      if (raporSummarySubtitle) raporSummarySubtitle.textContent = 'Tingkatkan lagi ketelitian pada analisis multi-step dan HOTS.';
    } else {
      raporGradeTitle.textContent = '📚 Perlu Penguatan Konsep Dasar!';
      if (raporSummarySubtitle) raporSummarySubtitle.textContent = 'Pelajari pembahasan langkah demi langkah pada soal yang keliru.';
    }
  }

  // Populate Tier Accuracy Bars
  const populateTierBar = (tierKey, labelId, fillId) => {
    const labelEl = document.getElementById(labelId);
    const fillEl = document.getElementById(fillId);
    const stat = tierStats[tierKey];
    if (stat.total === 0) {
      if (labelEl) labelEl.textContent = 'Tidak diuji (0 butir)';
      if (fillEl) fillEl.style.width = '0%';
    } else {
      const pct = Math.round((stat.correct / stat.total) * 100);
      if (labelEl) labelEl.textContent = `${pct}% (${stat.correct}/${stat.total})`;
      if (fillEl) fillEl.style.width = `${pct}%`;
    }
  };

  populateTierBar('mudah', 'raporTierAccuracyMudah', 'raporTierFillMudah');
  populateTierBar('sedang', 'raporTierAccuracySedang', 'raporTierFillSedang');
  populateTierBar('hots', 'raporTierAccuracyHots', 'raporTierFillHots');

  // Open Completion Modal
  const modal = document.getElementById('completionModal');
  if (modal) modal.classList.add('open');

  // Also refresh matrix and stats in workspace background
  renderMatrixGrid();
  updateStats();
}

function closeCompletionModal() {
  const modal = document.getElementById('completionModal');
  if (modal) modal.classList.remove('open');
}

// Review Incorrect Questions Only
function reviewWrongQuestionsOnly() {
  closeCompletionModal();
  state.isReviewMode = true;

  // Find index of first incorrect answer
  let firstWrongIndex = -1;
  for (let i = 0; i < state.questions.length; i++) {
    if (state.userAnswers[i] !== state.questions[i].correctIndex) {
      firstWrongIndex = i;
      break;
    }
  }

  state.currentIndex = firstWrongIndex !== -1 ? firstWrongIndex : 0;
  state.solutionOpen = new Array(state.questions.length).fill(true);

  renderCurrentQuestion(true);
  renderMatrixGrid();
  updateStats();
}

function restartCurrentDrillSession() {
  closeCompletionModal();
  clearSessionState();
  if (state.sessionScope) {
    startConfiguredDrillSession();
  }
}

// ============================================================================
// 11. FORMULA CHEAT-SHEET DRAWER & MOBILE SHEET
// ============================================================================
function openCheatSheetModal() {
  const drawer = document.getElementById('cheatSheetDrawer');
  const backdrop = document.getElementById('cheatSheetDrawerBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  triggerMathTypeset();
}

function closeCheatSheetModal() {
  const drawer = document.getElementById('cheatSheetDrawer');
  const backdrop = document.getElementById('cheatSheetDrawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function openMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  const sheet = document.getElementById('mobileDrawerSheet');
  if (overlay && sheet) {
    overlay.classList.add('open');
    sheet.classList.add('open');
  }
}

function closeMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  const sheet = document.getElementById('mobileDrawerSheet');
  if (overlay && sheet) {
    overlay.classList.remove('open');
    sheet.classList.remove('open');
  }
}

// ============================================================================
// 12. GLOBAL EVENT LISTENERS & KEYBOARD SHORTCUTS
// ============================================================================
function bindGlobalEvents() {
  window.addEventListener('keydown', (e) => {
    // Escape closes all open modals and slideover drawer
    if (e.key === 'Escape') {
      closeCheatSheetModal();
      closeCompletionModal();
      closeDrillSetupModal();
      closeMobileDrawer();
      return;
    }

    // Ignore hotkeys when typing in form inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Only active during workspace drilling
    if (state.currentView !== 'workspace') return;

    const key = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
      const idx = key.charCodeAt(0) - 65;
      handleOptionSelect(idx);
    } else if (['1', '2', '3', '4', '5'].includes(key)) {
      const idx = parseInt(key, 10) - 1;
      handleOptionSelect(idx);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (state.sessionMode === 'latihan' && !state.isVerified[state.currentIndex]) {
        handleCheckAnswer();
      } else {
        toggleSolutionAccordion();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrevQuestion();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNextQuestion();
    } else if (key === 'R') {
      e.preventDefault();
      toggleRagu();
    }
  });

  // Modal overlay click to close
  ['completionModal', 'drillSetupModal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          if (id === 'completionModal') closeCompletionModal();
          else if (id === 'drillSetupModal') closeDrillSetupModal();
        }
      });
    }
  });

  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
  }
}

// Global and Module Exports for Testing & Integration
if (typeof window !== 'undefined') {
  window.getFilteredQuestions = getFilteredQuestions;
  window.state = state;
  window.getAllSubTopicIds = getAllSubTopicIds;
  window.findChapterById = findChapterById;
  window.findSubTopicById = findSubTopicById;
  window.renderSetupTopicSelector = renderSetupTopicSelector;
  window.syncSetupTopicSelectorUI = syncSetupTopicSelectorUI;
  window.selectAllSetupTopics = selectAllSetupTopics;
  window.resetSetupTopics = resetSetupTopics;
  window.toggleSetupChapter = toggleSetupChapter;
  window.toggleSetupSubTopic = toggleSetupSubTopic;
  window.stepQuestionCount = stepQuestionCount;
  window.handleManualCountInput = handleManualCountInput;
  window.selectSetupQuestionCount = selectSetupQuestionCount;
  window.updateSetupPreviewCount = updateSetupPreviewCount;
  window.openDrillSetupModal = openDrillSetupModal;
  window.startConfiguredDrillSession = startConfiguredDrillSession;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getFilteredQuestions,
    state,
    getAllSubTopicIds,
    findChapterById,
    findSubTopicById,
    selectAllSetupTopics,
    resetSetupTopics,
    toggleSetupChapter,
    toggleSetupSubTopic,
    stepQuestionCount,
    handleManualCountInput,
    selectSetupQuestionCount,
    updateSetupPreviewCount,
    openDrillSetupModal,
    startConfiguredDrillSession
  };
}
