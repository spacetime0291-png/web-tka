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
  modalSubTopicScrollList: { innerHTML: '' },
  modalActiveChapterTitle: { textContent: '' },
  modalActiveChapterBadge: { textContent: '' },
  modalChapterSelectionSummary: { textContent: '' },
  drillSetupModal: { classList: { add() {}, remove() {} } },
  setupScopeSubtitle: { textContent: '' },
  wrongCountBadge: { textContent: '' },
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
assert(mtk && mtk.chapters.length === 3, 'Matematika Lanjut must have 3 chapters (Aljabar, Geometri dan Pengukuran, Trigonometri & Kalkulus Dasar)');
assert(fund && fund.chapters.length === 1, 'Bab Fundamental must have 1 chapter (Bab Fundamental)');

const fundChapter = fund.chapters[0];
assert(fundChapter && fundChapter.subTopics.length === 5, 'Bab Fundamental chapter must have 5 subtopics');
const triSub = fundChapter.subTopics.find(s => s.id === 'mtk-fun-1');
assert(triSub && triSub.title.includes('Trigonometri Analitik Dasar'), 'mtk-fun-1 covers Trigonometri Analitik Dasar');

// Check Gelombang 2 sub-topics (Gelombang Bunyi & Gelombang Cahaya)
const gelombang = fisika.chapters.find(c => c.id === 'fis-gel');
assert(gelombang && gelombang.subTopics.length === 2, 'Gelombang chapter must have 2 subtopics (Gelombang Bunyi & Gelombang Cahaya)');
const bunyiSub = gelombang.subTopics.find(s => s.id === 'fis-gel-1');
assert(bunyiSub && bunyiSub.title.includes('Gelombang Bunyi'), 'fis-gel-1 covers Gelombang Bunyi');
const cahayaSub = gelombang.subTopics.find(s => s.id === 'fis-gel-2');
assert(cahayaSub && cahayaSub.title.includes('Gelombang Cahaya'), 'fis-gel-2 covers Gelombang Cahaya');

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

// Case A: Select specific cross-chapter subtopics: Bunyi (fis-gel-1), Cahaya (fis-gel-2), Limit (mtk-tri-1), Fundamental (mtk-fun-1)
const crossSelection = new Set(['fis-gel-1', 'fis-gel-2', 'mtk-tri-1', 'mtk-fun-1']);
const crossFiltered = app.getFilteredQuestions({ subTopicIds: crossSelection });
assert(crossFiltered.length > 0, `Cross-chapter multi-select returned ${crossFiltered.length} questions`);
assert(crossFiltered.every(q => crossSelection.has(q.subTopicId)), 'All returned questions must strictly match the selected subTopicIds');

// Case B: Select All Subtopics
const allSubTopicIds = app.getAllSubTopicIds();
assert(allSubTopicIds.length === 28, `Syllabus must have exactly 28 sub-topics (found: ${allSubTopicIds.length})`);

const allFiltered = app.getFilteredQuestions({ subTopicIds: new Set(allSubTopicIds) });
assert(allFiltered.length === 239, `Selecting all subtopics must return all 239 questions (found: ${allFiltered.length})`);

// Case C: Reset Selection (Empty Set)
const emptyFiltered = app.getFilteredQuestions({ subTopicIds: new Set() });
assert(emptyFiltered.length === 0, `Reset selection (0 subtopics) must return 0 questions (found: ${emptyFiltered.length})`);

// Case D: Filter by subBab string
const subBabFiltered = app.getFilteredQuestions({ subTopicIds: new Set(['Pengukuran']) });
assert(subBabFiltered.length > 0 && subBabFiltered.every(q => q.subBab === 'Pengukuran'), 'Filtering by subBab string works seamlessly');

// ----------------------------------------------------
// TEST 4: Stepper (+1 / -1) & Manual Input Clamping
// ----------------------------------------------------
console.log('\n--- TEST GROUP 4: STEPPER (+1 / -1) & QUESTION COUNT ---');

// Set active selection to only 'fis-kin-1' (Pengukuran: 8 questions)
app.state.setupForm.selectedSubTopicIds = new Set(['fis-kin-1']);
app.state.setupForm.difficulties = ['mudah', 'sedang', 'hots'];
app.state.setupForm.isProgressive = false;
app.state.setupForm.wrongOnly = false;
app.updateSetupPreviewCount();

const kin1Questions = app.getFilteredQuestions({ subTopicIds: new Set(['fis-kin-1']) });
const maxKin1 = kin1Questions.length; // 5
assert(maxKin1 === 5, `fis-kin-1 must have exactly 5 questions (found: ${maxKin1})`);

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

// Test Upper Clamping: +1 past max (8)
app.stepQuestionCount(10);
assert(app.state.setupForm.questionCount === maxKin1, `Stepper clamps to maximum available (${maxKin1})`);

// Test Lower Clamping: -1 past 1
app.stepQuestionCount(-20);
assert(app.state.setupForm.questionCount === 1, 'Stepper clamps to minimum 1');

// Test Manual Input: valid 4
app.handleManualCountInput('4');
assert(app.state.setupForm.questionCount === 4, 'Manual input "4" sets questionCount to 4');

// Test Manual Input Clamping: 99 -> maxKin1
app.handleManualCountInput('99');
assert(app.state.setupForm.questionCount === maxKin1, `Manual input 99 clamps to max available (${maxKin1})`);

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
app.openDrillSetupModal('fisika', 'fis-gel', 'fis-gel-1', 'Gelombang Bunyi');
assert(app.state.setupForm.selectedSubTopicIds.size === 1 && app.state.setupForm.selectedSubTopicIds.has('fis-gel-1'),
  'Direct Subtopic Drill selects only that specific subtopic (fis-gel-1)');
assert(app.state.setupForm.activeModalPillar === 'fisika', 'Direct drill sets activeModalPillar to fisika');
assert(app.state.setupForm.activeModalChapter === 'fis-gel', 'Direct drill sets activeModalChapter to fis-gel');

// Case B: Chapter Drill selects all subtopics of that chapter
app.openDrillSetupModal('fisika', 'fis-kin', 'all', 'Kinematika');
assert(app.state.setupForm.selectedSubTopicIds.size === 3, 'Chapter drill on Kinematika selects all 3 subtopics of Kinematika');
assert(app.state.setupForm.activeModalChapter === 'fis-kin', 'Chapter drill sets activeModalChapter to fis-kin');

// Case C: Global Drill selects all 28 subtopics across all 10 chapters
app.openDrillSetupModal('all', 'all', 'all', 'Semua Materi');
assert(app.state.setupForm.selectedSubTopicIds.size === 28, 'Global drill auto-selects all 28 subtopics across 10 chapters');

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
assert(Number(mockElements.statTotalChapters.textContent) === 10, 'statTotalChapters dynamically computes exactly 10 chapters');
assert(Number(mockElements.statTotalBankQuestions.textContent) === 239, 'statTotalBankQuestions dynamically computes exactly 239 questions');

// Case G: No <strong> tags in Hero and Exam banner in index.html
const indexHtmlContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
const heroStrongMatch = indexHtmlContent.match(/syllabus-hero[\s\S]*?<\/p>/);
assert(heroStrongMatch && !heroStrongMatch[0].includes('<strong>'), 'Hero description has 0 <strong> tags');
const examStrongMatch = indexHtmlContent.match(/id="examLockedNotice"[\s\S]*?<\/div>/);
assert(examStrongMatch && !examStrongMatch[0].includes('<strong>'), 'Exam locked notice has 0 <strong> tags');

// Case H: 3-Level Navigation System (Tab Mapel -> Pilihan Bab -> Kartu Sub-Bab Bergulir)
app.switchModalPillar('matematika');
assert(app.state.setupForm.activeModalPillar === 'matematika', 'switchModalPillar updates activeModalPillar to matematika');
assert(app.state.setupForm.activeModalChapter === 'mtk-alj', 'switchModalPillar defaults active chapter to mtk-alj');

app.selectModalChapter('mtk-geo');
assert(app.state.setupForm.activeModalChapter === 'mtk-geo', 'selectModalChapter updates active chapter to mtk-geo');

// Test Level 3 Scoped Chapter Select/Reset
app.selectCurrentChapterSubTopics(false);
assert(!app.state.setupForm.selectedSubTopicIds.has('mtk-geo-1') && !app.state.setupForm.selectedSubTopicIds.has('mtk-geo-2'),
  'selectCurrentChapterSubTopics(false) unchecks subtopics in active chapter');

app.selectCurrentChapterSubTopics(true);
assert(app.state.setupForm.selectedSubTopicIds.has('mtk-geo-1') && app.state.setupForm.selectedSubTopicIds.has('mtk-geo-2') && app.state.setupForm.selectedSubTopicIds.has('mtk-geo-3'),
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

console.log('\n----------------------------------------------------');
console.log(` RESULT: ${passedTests} / ${totalTests} tests passed.`);
console.log('----------------------------------------------------');
console.log('🎉 ALL INTERACTIVE FEATURES & CURRICULUM TESTS PASSED!\n');
