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
const mockElements = {
  setupAvailableCount: { textContent: '' },
  setupTopicCounterBadge: { textContent: '' },
  stepperMaxBadge: { textContent: '' },
  inputQuestionCount: { value: '10', max: 0 },
  btnStepperMinus: { disabled: false },
  btnStepperPlus: { disabled: false },
  setupTimerDetails: { innerHTML: '', textContent: '' }
};

global.document = {
  addEventListener(event, cb) {},
  getElementById(id) {
    return mockElements[id] || null;
  },
  querySelectorAll(selector) {
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
assert(fund && fund.chapters.length === 1 && fund.chapters[0].subTopics.length === 5, 'Bab Fundamental must have 5 sub-bab (Trigo Dasar, Aljabar Elem, Geo Bidang, Pertidaksamaan, Eksponen Logaritma)');

// Check Doppler, Taraf Intensitas, Pipa Organa in Gelombang Bunyi
const gelombang = fisika.chapters.find(c => c.id === 'fis-gel');
assert(gelombang, 'Gelombang chapter exists');
const bunyiSub = gelombang.subTopics.find(s => s.id === 'fis-gel-1');
assert(bunyiSub && bunyiSub.indicators.includes('efek Doppler') && bunyiSub.indicators.includes('taraf intensitas') && bunyiSub.indicators.includes('pipa organa'),
  'Gelombang Bunyi indicators must explicitly cover dawai & pipa organa, intensitas & taraf intensitas, efek Doppler');

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

// Case A: Select specific cross-chapter subtopics: Efek Doppler/Bunyi (fis-gel-1), Cahaya (fis-gel-2), Limit (mtk-tri-1)
const crossSelection = new Set(['fis-gel-1', 'fis-gel-2', 'mtk-tri-1']);
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

console.log('\n----------------------------------------------------');
console.log(` RESULT: ${passedTests} / ${totalTests} tests passed.`);
console.log('----------------------------------------------------');
console.log('🎉 ALL INTERACTIVE FEATURES & CURRICULUM TESTS PASSED!\n');
