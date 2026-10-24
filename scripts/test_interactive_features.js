/**
 * Interactive Features & Curriculum Test Suite
 * Tests:
 * 1. Exact 3-Pillar Curriculum Tree & Sub-topic Structure
 * 2. Multi-Select Sub-Bab Filtering across chapters and pillars
 * 3. Question Metadata (bab, subBab, subTopic, subTopicId)
 * 4. Custom Stepper (+1 / -1) & Manual Input Clamping
 * 5. Reactive Timer Countdown Calculation
 * 6. Typography & Font-Weight Rules Integrity
 */

const fs = require('fs');
const path = require('path');

// Mock browser environment for app.js
global.window = global;
global.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, val) { this.store[key] = String(val); },
  removeItem(key) { delete this.store[key]; }
};

// Mock minimal DOM for modal elements
const mockPills = [
  { textContent: '5 Soal', classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  { textContent: '10 Soal', classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  { textContent: '20 Soal', classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  { textContent: 'Semua', classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } }
];

const mockElements = {
  setupAvailableCount: { textContent: '' },
  setupAvailableCountText: { textContent: '' },
  setupTopicCounterBadge: { textContent: '', classList: { add() {}, remove() {} } },
  stepperMaxBadge: { textContent: '' },
  inputQuestionCount: { value: '10', max: 0, disabled: false },
  btnStepperMinus: { disabled: false },
  btnStepperPlus: { disabled: false },
  btnStartDrillSession: { disabled: false, style: {}, classList: { remove() {}, add() {} }, removeAttribute() {} },
  setupEmptyWarning: { classList: { _classes: new Set(['hidden']), add(c) { this._classes.add(c); }, remove(c) { this._classes.delete(c); }, contains(c) { return this._classes.has(c); } } },
  setupTimerDetails: { innerHTML: '', textContent: '' },
  statTotalBankQuestions: { textContent: '' },
  statTotalChapters: { textContent: '' },
  statTierBreakdown: { innerHTML: '' },
  statOverallMastery: { textContent: '' },
  'modalTabPillar-fisika': { classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} }, setAttribute() {} },
  'modalTabPillar-matematika': { classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} }, setAttribute() {} },
  'modalTabPillar-fundamental': { classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} }, setAttribute() {} },
  modalChapterGrid: { innerHTML: '' },
  modalSubChapterList: { innerHTML: '' },
  modalSubTopicScrollList: { innerHTML: '' },
  modalActiveChapterTitle: { textContent: '' },
  modalActiveChapterBadge: { textContent: '' },
  modalActiveSubChapterTitle: { textContent: '', innerHTML: '' },
  modalActiveSubChapterBadge: { textContent: '', classList: { add() {}, remove() {} } },
  modalChapterSelectionSummary: { textContent: '' },
  drillSetupModal: { classList: { add() {}, remove() {} } },
  setupScopeSubtitle: { textContent: '' },
  wrongCountBadge: { textContent: '' },
  statAnsweredDrawer: { textContent: '' },
  statCorrectDrawer: { textContent: '' },
  statAccuracyDrawer: { textContent: '' },
  statRemainingDrawer: { textContent: '' },
  examFinishBoxDrawer: { classList: { _c: new Set(['hidden']), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  activeSessionBanner: { innerHTML: '', classList: { _c: new Set(['hidden']), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  setupResumeCallout: { innerHTML: '', classList: { _c: new Set(['hidden']), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  btnHeaderExitDrill: { classList: { _c: new Set(['hidden']), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  exitConfirmModal: { classList: { _c: new Set(), add(c){this._c.add(c);}, remove(c){this._c.delete(c);}, contains(c){return this._c.has(c);} } },
  workspaceView: { classList: { add() {}, remove() {} } },
  stickyBottomBar: { classList: { add() {}, remove() {} } },
  timerPill: { classList: { add() {}, remove() {} } },
  headerModeBadge: { classList: { add() {}, remove() {} }, textContent: '', className: '' },
  btnMobileDrawerTrigger: { classList: { add() {}, remove() {} } },
  syllabusView: { classList: { add() {}, remove() {} } },
  headerTopic: { textContent: '' },
  btnHeaderSyllabus: { innerHTML: '', title: '' },
  headerProgressFill: { style: {} }
};

global.document = {
  addEventListener(event, cb) {},
  getElementById(id) {
    if (mockElements[id]) return mockElements[id];
    return { textContent: '', innerHTML: '', style: {}, classList: { add() {}, remove() {}, contains() { return false; } }, setAttribute() {}, removeAttribute() {} };
  },
  querySelectorAll(selector) {
    if (selector === '.setup-count-pill') return mockPills;
    return [];
  }
};

// 1. Load Syllabus Data
require('../data/syllabusData.js');
// 2. Load Bank Soal Bundle
require('../data/bank-soal/bank-soal-bundle.js');
// 3. Load App Logic
const app = require('../app.js');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`  [FAIL] ${message}`);
    process.exit(1);
  } else {
    console.log(`  [PASS] ${message}`);
    passedTests++;
  }
}

console.log('====================================================');
console.log(' RUNNING INTERACTIVE FEATURES & CURRICULUM TEST');
console.log('====================================================\n');

// ----------------------------------------------------
// TEST 1: Exact Curriculum Structure Verification
// ----------------------------------------------------
console.log('--- TEST GROUP 1: EXACT CURRICULUM TREE ---');
const pillars = window.SYLLABUS_DATA.pillars;
assert(pillars.length === 3, 'Must have exactly 3 pillars (Fisika, Matematika Lanjut, Fundamental)');

const fisika = pillars.find(p => p.id === 'fisika');
const mtk = pillars.find(p => p.id === 'matematika');
const fund = pillars.find(p => p.id === 'fundamental');

assert(fisika && fisika.chapters.length === 6, 'Fisika must have 6 chapters (Kinematika, Dinamika, Fluida, Gelombang, Kalor, Kelistrikan)');
assert(mtk && mtk.chapters.length === 3, 'Matematika Lanjut must have 3 chapters (Aljabar, Geometri dan Pengukuran, Limit)');
assert(fund && fund.chapters.length === 5, 'Bab Fundamental must have 5 chapters (Trigonometri, Aljabar, Geometri, Pertidaksamaan, Eksponen)');

const fundTrigChapter = fund.chapters.find(c => c.id === 'fun-trig');
assert(fundTrigChapter && fundTrigChapter.subTopics.length === 5, 'Trigonometri Dasar chapter must have 5 subtopics');
const triSub = fundTrigChapter.subTopics.find(s => s.id === 'fun-trig-dasar-perbandingan');
assert(triSub && triSub.title.includes('Perbandingan Trigonometri Siku-Siku'), 'fun-trig-dasar-perbandingan covers Perbandingan Trigonometri Siku-Siku');

// Check Gelombang 2 sub-chapters (Gelombang Bunyi & Gelombang Cahaya & Optik)
const gelombang = fisika.chapters.find(c => c.id === 'fis-gel');
assert(gelombang && gelombang.subChapters.length === 2, 'Gelombang chapter must have 2 subchapters (Gelombang Bunyi & Gelombang Cahaya & Optik)');
assert(gelombang.subTopics.length === 13, 'Gelombang chapter must have 13 subtopics in total across subchapters');
const bunyiSub = gelombang.subTopics.find(s => s.id === 'fis-gel-bunyi-doppler');
assert(bunyiSub && bunyiSub.title.includes('Efek Doppler'), 'fis-gel-bunyi-doppler covers Efek Doppler');
const cahayaSub = gelombang.subTopics.find(s => s.id === 'fis-gel-optik-lensa');
assert(cahayaSub && cahayaSub.title.includes('Lensa Cekung dan Cembung'), 'fis-gel-optik-lensa covers Lensa Cekung dan Cembung');

// ----------------------------------------------------
// TEST 2: Question Bank Metadata Mapping
// ----------------------------------------------------
console.log('\n--- TEST GROUP 2: QUESTION METADATA MAPPING ---');
const allQuestions = [...window.QUESTIONS_MUDAH, ...window.QUESTIONS_SEDANG, ...window.QUESTIONS_HOTS];
assert(allQuestions.length === 239, `Total questions must be exactly 239 (found: ${allQuestions.length})`);

const missingMetadata = allQuestions.filter(q => !q.bab || !q.subBab || !q.subTopicId || !q.chapterId);
assert(missingMetadata.length === 0, `All 239 questions must have non-empty bab, subBab, subTopicId, and chapterId (missing: ${missingMetadata.length})`);

// ----------------------------------------------------
// TEST 3: Multi-Select Sub-Bab Filtering Logic
// ----------------------------------------------------
console.log('\n--- TEST GROUP 3: MULTI-SELECT SUB-BAB FILTERING ---');

// Case A: Select specific cross-chapter subtopics: Bunyi Doppler, Optik Lensa, Limit Aljabar, Trig Perbandingan
const crossSelection = new Set(['fis-gel-bunyi-doppler', 'fis-gel-optik-lensa', 'mat-lim-fungsi-aljabar', 'fun-trig-dasar-perbandingan']);
const crossFiltered = app.getFilteredQuestions({ subTopicIds: crossSelection });
assert(crossFiltered.length > 0, `Cross-chapter multi-select returned ${crossFiltered.length} questions`);
assert(crossFiltered.every(q => crossSelection.has(q.subTopicId)), 'All returned questions must strictly match the selected subTopicIds');

// Case B: Select All Subtopics
const allSubTopicIds = app.getAllSubTopicIds();
assert(allSubTopicIds.length === 137, `Syllabus must have exactly 137 sub-topics (found: ${allSubTopicIds.length})`);

const allFiltered = app.getFilteredQuestions({ subTopicIds: new Set(allSubTopicIds) });
assert(allFiltered.length === 239, `Selecting all subtopics must return all 239 questions (found: ${allFiltered.length})`);

// Case C: Reset Selection (Empty Set)
const emptyFiltered = app.getFilteredQuestions({ subTopicIds: new Set() });
assert(emptyFiltered.length === 0, `Reset selection (0 subtopics) must return 0 questions (found: ${emptyFiltered.length})`);

// Case D: Filter by subBab string
const subBabFiltered = app.getFilteredQuestions({ subTopicIds: new Set(['Jangka Sorong']) });
assert(subBabFiltered.length > 0 && subBabFiltered.every(q => q.subBab === 'Jangka Sorong'), 'Filtering by subBab string works seamlessly');

// ----------------------------------------------------
// TEST 4: Stepper (+1 / -1) & Manual Input Clamping
// ----------------------------------------------------
console.log('\n--- TEST GROUP 4: STEPPER (+1 / -1) & QUESTION COUNT ---');

// Set active selection to subtopics under Pengukuran (6 questions)
const kinUkurSubs = window.SYLLABUS_DATA.pillars[0].chapters[0].subChapters[0].subTopics.map(s => s.id);
app.state.setupForm.selectedSubTopicIds = new Set(kinUkurSubs);
app.state.setupForm.difficulties = ['mudah', 'sedang', 'hots'];
app.state.setupForm.isProgressive = false;
app.state.setupForm.wrongOnly = false;
app.updateSetupPreviewCount();

const kinUkurQuestions = app.getFilteredQuestions({ subTopicIds: new Set(kinUkurSubs) });
const maxKinUkur = kinUkurQuestions.length; // 6
assert(maxKinUkur === 6, `fis-kin-ukur subtopics must have exactly 6 questions (found: ${maxKinUkur})`);

// Test presets
app.selectSetupQuestionCount(3);
assert(app.state.setupForm.questionCount === 3, 'Preset/Count sets questionCount to 3');

// Test +1 stepper
app.stepQuestionCount(1);
assert(app.state.setupForm.questionCount === 4, 'Stepper +1 from 3 yields 4');

app.stepQuestionCount(1);
assert(app.state.setupForm.questionCount === 5, 'Stepper +1 from 4 yields 5');

// Test -1 stepper
app.stepQuestionCount(-1);
assert(app.state.setupForm.questionCount === 4, 'Stepper -1 from 5 yields 4');

// Test Upper Clamping: +1 past max (6)
app.stepQuestionCount(10);
assert(app.state.setupForm.questionCount === maxKinUkur, `Stepper clamps to maximum available (${maxKinUkur})`);

// Test Lower Clamping: -1 past 1
app.stepQuestionCount(-20);
assert(app.state.setupForm.questionCount === 1, 'Stepper clamps to minimum 1');

// Test Manual Input: valid 4
app.handleManualCountInput('4');
assert(app.state.setupForm.questionCount === 4, 'Manual input "4" sets questionCount to 4');

// Test Manual Input Clamping: 99 -> maxKinUkur
app.handleManualCountInput('99');
assert(app.state.setupForm.questionCount === maxKinUkur, `Manual input 99 clamps to max available (${maxKinUkur})`);

// Test Preset 'all'
app.selectSetupQuestionCount('all');
assert(app.state.setupForm.questionCount === 'all', 'Preset "all" sets questionCount to "all"');

// ----------------------------------------------------
// TEST 5: Reactive Countdown Timer Calculation
// ----------------------------------------------------
console.log('\n--- TEST GROUP 5: REACTIVE TIMER CALCULATION ---');

// Expand selection to all subtopics for timer testing
app.state.setupForm.selectedSubTopicIds = new Set(allSubTopicIds);
app.updateSetupPreviewCount();

app.state.setupForm.timerMode = 'countdown';
app.selectSetupQuestionCount(7);
assert(mockElements.setupTimerDetails.innerHTML.includes('14 menit') && mockElements.setupTimerDetails.innerHTML.includes('7 butir soal'),
  'Timer countdown estimation reactively computes 14 menit for 7 soal (7 * 2 mins)');

app.stepQuestionCount(1); // 8
assert(mockElements.setupTimerDetails.innerHTML.includes('16 menit') && mockElements.setupTimerDetails.innerHTML.includes('8 butir soal'),
  'Timer countdown estimation updates reactively to 16 menit after +1 step');

// ----------------------------------------------------
// TEST 6: Typography Integrity Verification
// ----------------------------------------------------
console.log('\n--- TEST GROUP 6: TYPOGRAPHY INTEGRITY ---');

const cssContent = fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf-8');
const boldCssMatches = cssContent.match(/font-weight:\s*(700|800)\b/g);
assert(!boldCssMatches, `styles.css must have 0 occurrences of font-weight: 700 or 800 (found: ${boldCssMatches ? boldCssMatches.length : 0})`);

const appJsContent = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf-8');
const boldJsMatches = appJsContent.match(/\bfont-bold\b/g);
assert(!boldJsMatches, `app.js must have 0 occurrences of font-bold (found: ${boldJsMatches ? boldJsMatches.length : 0})`);

// Check line-height 1.8 and letter-spacing -0.01em in styles.css
assert(cssContent.includes('line-height: 1.8') && cssContent.includes('letter-spacing: -0.01em'),
  'styles.css must enforce line-height: 1.8 and letter-spacing: -0.01em for problem and solution text');

// ----------------------------------------------------
// TEST 7: Setup Modal Auto-Select & Zero-Count Handling
// ----------------------------------------------------
console.log('\n--- TEST GROUP 7: SETUP MODAL & ZERO-COUNT HANDLING ---');

// Case A: Direct Subtopic Drill opens with only that subtopic
app.openDrillSetupModal('fisika', 'fis-gel', 'fis-gel-bunyi-doppler', 'Efek Doppler');
assert(app.state.setupForm.selectedSubTopicIds.size === 1 && app.state.setupForm.selectedSubTopicIds.has('fis-gel-bunyi-doppler'),
  'Direct Subtopic Drill selects only that specific subtopic (fis-gel-bunyi-doppler)');
assert(app.state.setupForm.activeModalPillar === 'fisika', 'Direct drill sets activeModalPillar to fisika');
assert(app.state.setupForm.activeModalChapter === 'fis-gel', 'Direct drill sets activeModalChapter to fis-gel');

// Case B: Chapter Drill selects all subtopics of that chapter
app.openDrillSetupModal('fisika', 'fis-kin', 'all', 'Kinematika');
assert(app.state.setupForm.selectedSubTopicIds.size === 16, 'Chapter drill on Kinematika selects all 16 subtopics of Kinematika');
assert(app.state.setupForm.activeModalChapter === 'fis-kin', 'Chapter drill sets activeModalChapter to fis-kin');

// Case C: Global Drill selects all 137 subtopics across all 14 chapters
app.openDrillSetupModal('all', 'all', 'all', 'Semua Materi');
assert(app.state.setupForm.selectedSubTopicIds.size === 137, 'Global drill auto-selects all 137 subtopics across 14 chapters');

// Case D: Zero-Count State handling
app.state.setupForm.selectedSubTopicIds = new Set();
app.updateSetupPreviewCount();
assert(mockElements.btnStartDrillSession.disabled === true, 'Mulai Sesi button is disabled when available questions == 0');
assert(!mockElements.setupEmptyWarning.classList.contains('hidden'), 'Empty warning alert is visible when available questions == 0');

// Case E: Preset highlights are unhighlighted on custom count
app.state.setupForm.selectedSubTopicIds = new Set(allSubTopicIds);
app.updateSetupPreviewCount();
app.stepQuestionCount(1); // 11
app.syncCountPillsUI();
assert(!mockPills.some(p => p.classList.contains('active')), 'Preset pills are unhighlighted when count does not match 5, 10, 20, or Semua');

app.selectSetupQuestionCount(10);
assert(mockPills.find(p => p.textContent === '10 Soal').classList.contains('active'), 'Preset pill 10 Soal is active when count is 10');

// Case F: Dynamic Homepage Counter Calculation
app.updateGlobalCounters();
assert(Number(mockElements.statTotalChapters.textContent) === 14, 'statTotalChapters dynamically computes exactly 14 chapters');
assert(Number(mockElements.statTotalBankQuestions.textContent) === 239, 'statTotalBankQuestions dynamically computes exactly 239 questions');

// Case G: No <strong> tags in Hero and Exam banner in index.html
const indexHtmlContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
const heroStrongMatch = indexHtmlContent.match(/syllabus-hero[\s\S]*?<\/p>/);
assert(heroStrongMatch && !heroStrongMatch[0].includes('<strong>'), 'Hero description has 0 <strong> tags');
const examStrongMatch = indexHtmlContent.match(/id="examLockedNotice"[\s\S]*?<\/div>/);
assert(examStrongMatch && !examStrongMatch[0].includes('<strong>'), 'Exam locked notice has 0 <strong> tags');

// Case H: 4-Level Navigation System (Tab Mapel -> Pilihan Bab -> Kartu Sub-Bab Bergulir)
app.switchModalPillar('matematika');
assert(app.state.setupForm.activeModalPillar === 'matematika', 'switchModalPillar updates activeModalPillar to matematika');
assert(app.state.setupForm.activeModalChapter === 'mat-alj', 'switchModalPillar defaults active chapter to mat-alj');

app.selectModalChapter('mat-geo');
assert(app.state.setupForm.activeModalChapter === 'mat-geo', 'selectModalChapter updates active chapter to mat-geo');

// Test Level 3 Scoped Chapter Select/Reset
const geoSubs = window.SYLLABUS_DATA.pillars[1].chapters[1].subTopics.map(s => s.id);
app.selectCurrentChapterSubTopics(false);
assert(geoSubs.every(id => !app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentChapterSubTopics(false) unchecks subtopics in active chapter');

app.selectCurrentChapterSubTopics(true);
assert(geoSubs.every(id => app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentChapterSubTopics(true) checks all subtopics in active chapter');

// ============================================================================
// TEST GROUP 8: REFACTOR LIST MATERI & DRILL EXIT PERSISTENCE
// ============================================================================
console.log('\n--- TEST GROUP 8: REFACTOR LIST MATERI & DRILL EXIT PERSISTENCE ---');

// Case A: Verify typography in styles.css for accordion-title
const freshCss = fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf-8');
const accordionTitleMatch = freshCss.match(/\.accordion-title\s*\{([^}]+)\}/);
assert(accordionTitleMatch && accordionTitleMatch[1].includes('font-size: 1.1rem'),
  'accordion-title font-size is 1.1rem (within 1.05rem - 1.15rem range)');
assert(accordionTitleMatch && accordionTitleMatch[1].includes('font-weight: 600'),
  'accordion-title font-weight is 600 (semi-bold)');

// Case B: Verify chapter card renders compact inline M/S/H badge
const sampleChapter = window.SYLLABUS_DATA.pillars[0].chapters[0]; // Kinematika
const renderedCardHtml = app.renderChapterCard(sampleChapter, 'fisika');
assert(renderedCardHtml.includes('class="chapter-tier-badge"'),
  'renderChapterCard outputs chapter-tier-badge');
assert(renderedCardHtml.includes('M:') && renderedCardHtml.includes('S:') && renderedCardHtml.includes('H:'),
  'renderChapterCard contains compact M, S, H indicators');
assert(renderedCardHtml.includes('tier-badge-mudah') && renderedCardHtml.includes('tier-badge-sedang') && renderedCardHtml.includes('tier-badge-hots'),
  'renderChapterCard contains tier color accent spans');

// Case C: Verify index.html contains exit buttons and modal confirmation message
assert(indexHtmlContent.includes('id="btnHeaderExitDrill"'),
  'index.html contains #btnHeaderExitDrill navigation button');
assert(indexHtmlContent.includes('id="exitConfirmModal"'),
  'index.html contains #exitConfirmModal modal container');
assert(indexHtmlContent.includes('Keluar dari latihan? Jawaban yang sudah dikerjakan akan disimpan.'),
  'exit confirmation modal contains exact message: "Keluar dari latihan? Jawaban yang sudah dikerjakan akan disimpan."');

// Case D: Drill Exit Persistence & Partial State Schema
// Setup a dummy active drill session with 5 questions
const testQuestions = app.getFilteredQuestions({ chapterId: 'fis-kin' }).slice(0, 5);
app.state.sessionId = 'test_session_123';
app.state.questions = testQuestions;
app.state.sessionScope = { chapterId: 'fis-kin', subTopicId: 'all', pillarId: 'fisika', scopeTitle: 'Kinematika' };
app.state.userAnswers = [testQuestions[0].correctIndex, 999, null, null, null]; // Q1 correct, Q2 wrong, Q3-5 unattempted

// Trigger exit
app.confirmSaveAndExitDrillSession();

// Verify partial session data was saved to localStorage
const savedPartialRaw = global.localStorage.getItem(app.STORAGE_KEY_PARTIAL_SESSION);
assert(Boolean(savedPartialRaw), 'Partial session was persisted to localStorage under STORAGE_KEY_PARTIAL_SESSION');

const savedPartial = JSON.parse(savedPartialRaw);
assert(typeof savedPartial.sessionId === 'string' && savedPartial.sessionId.length > 0,
  'Partial session schema has valid string sessionId');
assert(savedPartial.materialId === 'fis-kin',
  'Partial session schema has materialId matching current scope (fis-kin)');
assert(typeof savedPartial.lastUpdated === 'number' && savedPartial.lastUpdated > 0,
  'Partial session schema has timestamp lastUpdated');
assert(Array.isArray(savedPartial.completedQuestions) && savedPartial.completedQuestions.length === 2,
  'Partial session completedQuestions array contains ONLY the 2 answered questions (attemptedQuestions)');
assert(savedPartial.completedQuestions[0].questionId === testQuestions[0].id && savedPartial.completedQuestions[0].isCorrect === true,
  'Completed question 1 is recorded with isCorrect = true');
assert(savedPartial.completedQuestions[1].questionId === testQuestions[1].id && savedPartial.completedQuestions[1].isCorrect === false,
  'Completed question 2 is recorded with isCorrect = false');

// Verify unattempted questions did not get penalty
assert(!savedPartial.completedQuestions.some(q => q.questionId === testQuestions[2].id),
  'Unattempted question 3 is not penalized or recorded as completed');

// Case E: checkActiveSessionResume UI rendering
app.checkActiveSessionResume();
assert(!mockElements.activeSessionBanner.classList.contains('hidden'),
  'activeSessionBanner is visible when partial session is stored');
assert(mockElements.activeSessionBanner.innerHTML.includes('2') && mockElements.activeSessionBanner.innerHTML.includes('5'),
  'activeSessionBanner shows 2 dari 5 terjawab');
assert(mockElements.activeSessionBanner.innerHTML.includes('Lanjutkan Sisa Soal'),
  'activeSessionBanner contains "Lanjutkan Sisa Soal" button');
assert(mockElements.activeSessionBanner.innerHTML.includes('Reset Sesi Baru'),
  'activeSessionBanner contains "Reset Sesi Baru" button');

// Case F: Resume Active Session
app.state.questions = [];
app.state.userAnswers = [];
app.resumeActiveDrillSession();
assert(app.state.questions.length === 5, 'resumeActiveDrillSession restored all 5 session questions');
assert(app.state.userAnswers[0] === testQuestions[0].correctIndex, 'resumeActiveDrillSession restored Q1 answer');
assert(app.state.userAnswers[1] === 999, 'resumeActiveDrillSession restored Q2 answer');
assert(app.state.userAnswers[2] === null, 'resumeActiveDrillSession restored unattempted Q3 as null');

// Clean up timer interval in test environment
if (app.state.timerInterval) clearInterval(app.state.timerInterval);

// Case G: Discard / Reset clears storage
app.clearSessionState();
assert(global.localStorage.getItem(app.STORAGE_KEY_PARTIAL_SESSION) === null,
  'clearSessionState removes partial session storage');
assert(global.localStorage.getItem(window.STORAGE_KEY_SESSION) === null,
  'clearSessionState removes full session storage');
assert(mockElements.activeSessionBanner.classList.contains('hidden'),
  'activeSessionBanner is hidden after clearing session state');

// ============================================================================
// TEST GROUP 9: 4-LEVEL LINEAR SETUP MODAL, ACCORDIONS & CENTERED WORKSPACE
// ============================================================================
console.log('\n--- TEST GROUP 9: 4-LEVEL LINEAR SETUP MODAL, ACCORDIONS & CENTERED WORKSPACE ---');

// Case A: 4-Level Linear Hierarchy in Drill Modal (Pilar -> Bab Utama -> Bab Kecil [Outside] -> Sub-Bab [Window])
app.openDrillSetupModal('matematika', 'mat-alj', 'all', 'Aljabar');
assert(app.state.setupForm.activeModalChapter === 'mat-alj', 'Active chapter is mat-alj');
assert(app.state.setupForm.activeModalSubChapter === 'mat-alj-matriks',
  'activeModalSubChapter defaults to first sub-chapter (mat-alj-matriks)');
assert(app.state.setupForm.activeModalSubChapterId === 'mat-alj-matriks',
  'activeModalSubChapterId is in sync with activeModalSubChapter');
assert(mockElements.modalSubChapterList.innerHTML.includes('Matriks') && mockElements.modalSubChapterList.innerHTML.includes('Polinomial'),
  'modalSubChapterList renders outside Bab Kecil pills/cards');
assert(mockElements.modalSubTopicScrollList.innerHTML.includes('Ordo, Kesamaan, dan Transpose'),
  'modalSubTopicScrollList renders active subChapter subtopics inside window');

// Switch active sub-chapter in Bab Kecil pills/cards
app.selectModalSubChapter('mat-alj-polinom');
assert(app.state.setupForm.activeModalSubChapter === 'mat-alj-polinom',
  'selectModalSubChapter updates activeModalSubChapter to mat-alj-polinom');
assert(app.state.setupForm.activeModalSubChapterId === 'mat-alj-polinom',
  'selectModalSubChapter updates activeModalSubChapterId to mat-alj-polinom');
assert(mockElements.modalSubTopicScrollList.innerHTML.includes('Skema Horner') && mockElements.modalSubTopicScrollList.innerHTML.includes('Teorema Sisa'),
  'modalSubTopicScrollList updates right window with Polinomial subtopics');
assert(mockElements.modalSubChapterList.innerHTML.includes('modal-subchapter-card'),
  'modalSubChapterList renders Bab Kecil as modal-subchapter-card (card grid layout)');

// Scoped SubChapter Select / Reset via selectCurrentSubChapterTopics
const polinomSubs = window.SYLLABUS_DATA.pillars[1].chapters[0].subChapters[1].subTopics.map(s => s.id);
app.selectCurrentSubChapterTopics(false);
assert(polinomSubs.every(id => !app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentSubChapterTopics(false) unchecks all subtopics in active Bab Kecil');

app.selectCurrentSubChapterTopics(true);
assert(polinomSubs.every(id => app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentSubChapterTopics(true) checks all subtopics in active Bab Kecil');

// Scoped Chapter Select / Reset via selectCurrentChapterSubTopics
const matAljSubs = window.SYLLABUS_DATA.pillars[1].chapters[0].subTopics.map(s => s.id);
app.selectCurrentChapterSubTopics(false);
assert(matAljSubs.every(id => !app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentChapterSubTopics(false) unchecks all subtopics in active Chapter');

app.selectCurrentChapterSubTopics(true);
assert(matAljSubs.every(id => app.state.setupForm.selectedSubTopicIds.has(id)),
  'selectCurrentChapterSubTopics(true) checks all subtopics in active Chapter');

// Global Select All / Reset across all topics
app.resetSetupTopics();
assert(app.state.setupForm.selectedSubTopicIds.size === 0,
  'resetSetupTopics() empties all selected subtopics');

app.selectAllSetupTopics();
assert(app.state.setupForm.selectedSubTopicIds.size === 137,
  'selectAllSetupTopics() selects all 137 subtopics across all pillars and chapters');

// Direct Sub-Chapter Drill open
app.openDrillSetupModal('fisika', 'fis-gel', 'subchapter:fis-gel-optik', 'Gelombang Cahaya & Optik');
assert(app.state.setupForm.activeModalSubChapter === 'fis-gel-optik',
  'openDrillSetupModal with subchapter:<id> activates that specific subChapter in modal');

// Check 4-Level Linear HTML & CSS selectors
assert(indexHtmlContent.includes('modal-subchapter-grid') && cssContent.includes('.modal-subchapter-grid'),
  'modal-subchapter-grid exists in index.html and styles.css (Bab Kecil card grid)');
assert(indexHtmlContent.includes('modal-subtopic-single-window') && cssContent.includes('.modal-subtopic-single-window'),
  'modal-subtopic-single-window exists in index.html and styles.css (single window container for sub-bab)');

// Case B: Global Accordion & Bab Kecil Accordion Controls
// Test Bab Kecil Accordion Toggle on Homepage (e.g. Kinematika -> Gerak Lengkung)
assert(typeof app.toggleSubChapterAccordion === 'function',
  'app.toggleSubChapterAccordion is defined');
const initialScState = app.getSubChapterAccordionState();
assert(!initialScState.includes('fis-kin-lengkung'),
  'fis-kin-lengkung (Gerak Lengkung) is closed initially by default');

app.toggleSubChapterAccordion('fis-kin-lengkung');
const openedScState = app.getSubChapterAccordionState();
assert(openedScState.includes('fis-kin-lengkung'),
  'toggleSubChapterAccordion opens fis-kin-lengkung (Gerak Lengkung)');

app.toggleSubChapterAccordion('fis-kin-lengkung');
const closedAgainScState = app.getSubChapterAccordionState();
assert(!closedAgainScState.includes('fis-kin-lengkung'),
  'toggleSubChapterAccordion closes fis-kin-lengkung (Gerak Lengkung) when clicked again');

app.expandAllChapterAccordions();
const expandedState = app.getAccordionState();
assert(expandedState.length === 14,
  `expandAllChapterAccordions() opens all 14 chapters (found: ${expandedState.length})`);

app.collapseAllChapterAccordions();
const collapsedState = app.getAccordionState();
assert(collapsedState.length === 0,
  `collapseAllChapterAccordions() closes all chapters (found: ${collapsedState.length})`);

// Case C: Desktop Centered Workspace & Daftar Soal Slide-Over Drawer
assert(cssContent.includes('.workspace-layout') && cssContent.includes('max-width: 900px') && cssContent.includes('margin: 0 auto'),
  'styles.css centers .workspace-layout with max-width: 900px and margin: 0 auto');
assert(cssContent.includes('.problem-column') && cssContent.includes('max-width: 860px') && cssContent.includes('margin: 0 auto'),
  'styles.css centers .problem-column with max-width: 860px and margin: 0 auto');
assert(cssContent.includes('.desktop-dashboard') && cssContent.includes('display: none !important'),
  'styles.css hides .desktop-dashboard with display: none !important');

// Top navbar Daftar Soal trigger button in index.html
const drawerTriggerMatch = indexHtmlContent.match(/id="btnMobileDrawerTrigger"[^>]*>([\s\S]*?)<\/button>/);
assert(drawerTriggerMatch, 'index.html contains #btnMobileDrawerTrigger');
assert(!drawerTriggerMatch[0].includes('lg:hidden'),
  '#btnMobileDrawerTrigger does not have lg:hidden (enabled on desktop and mobile)');
assert(drawerTriggerMatch[1].includes('Daftar Soal'),
  '#btnMobileDrawerTrigger displays clear tactile label "Daftar Soal"');

// Drawer Sheet contains matrix, session accuracy stats, and exam finish box
assert(indexHtmlContent.includes('id="mobileDrawerSheet"'),
  'index.html contains #mobileDrawerSheet slide-over drawer');
assert(indexHtmlContent.includes('id="statAnsweredDrawer"') && indexHtmlContent.includes('id="statAccuracyDrawer"'),
  '#mobileDrawerSheet contains session accuracy statistics');
assert(indexHtmlContent.includes('id="examFinishBoxDrawer"'),
  '#mobileDrawerSheet contains #examFinishBoxDrawer submit action');

console.log('\n----------------------------------------------------');
console.log(` RESULT: ${passedTests} / ${totalTests} tests passed.`);
console.log('----------------------------------------------------');
console.log('🎉 ALL INTERACTIVE FEATURES & CURRICULUM TESTS PASSED!\n');
