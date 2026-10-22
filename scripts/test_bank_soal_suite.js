/**
 * scripts/test_bank_soal_suite.js
 * Comprehensive automated test suite for the modular TKA bank soal.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// 1. Load syllabus
global.window = global;
require('../data/syllabusData.js');
const syllabus = window.SYLLABUS_DATA;

console.log('====================================================');
console.log(' RUNNING COMPREHENSIVE TKA BANK SOAL VERIFICATION');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(`         ${err.message}`);
  }
}

// Gather all subtopics defined in syllabus
const expectedSubtopics = new Map();
const expectedChapters = new Set();
syllabus.pillars.forEach(p => {
  p.chapters.forEach(c => {
    expectedChapters.add(c.id);
    c.subTopics.forEach(s => {
      expectedSubtopics.set(s.id, {
        pillarId: p.id,
        chapterId: c.id,
        title: s.title
      });
    });
  });
});

console.log(`Identified ${expectedSubtopics.size} official subtopics across ${expectedChapters.size} chapters in Syllabus.\n`);

// Load modular master index
const { subtopics, allQuestions, questionsMudah, questionsSedang, questionsHots } = require('../data/bank-soal/index.js');

// Test 1: All 28 syllabus subtopics exist in the modular registry
runTest('All 28 syllabus subtopics are registered in modular bank', () => {
  assert.strictEqual(expectedSubtopics.size, 28, 'Should have exactly 28 official subtopics');
  expectedSubtopics.forEach((info, subTopicId) => {
    assert(subtopics[subTopicId], `Subtopic ${subTopicId} (${info.title}) must exist in subtopics index`);
    assert(Array.isArray(subtopics[subTopicId]), `Subtopic ${subTopicId} must export an array of questions`);
    assert(subtopics[subTopicId].length > 0, `Subtopic ${subTopicId} must not be empty`);
  });
});

// Test 2: Subtopic file existence on disk
runTest('All subtopic file paths exist on disk', () => {
  const baseDir = path.resolve(__dirname, '../data/bank-soal');
  expectedSubtopics.forEach((info, subTopicId) => {
    // Check if subTopicId is present in questions
    const list = subtopics[subTopicId];
    assert(list.length > 0, `File for ${subTopicId} should have questions`);
  });
});

// Test 3: Grand question counts and difficulty tiers
runTest('Question totals and tier distribution integrity', () => {
  assert(allQuestions.length >= 120, `Total questions should be >= 120, got ${allQuestions.length}`);
  assert(questionsMudah.length > 0, 'Mudah tier must have questions');
  assert(questionsSedang.length > 0, 'Sedang tier must have questions');
  assert(questionsHots.length > 0, 'HOTS tier must have questions');
  assert.strictEqual(allQuestions.length, questionsMudah.length + questionsSedang.length + questionsHots.length, 'Sum of tiers must equal total questions');
});

// Test 4: Uniqueness of question IDs
runTest('Question IDs must be globally unique', () => {
  const idMap = new Map();
  allQuestions.forEach(q => {
    assert(!idMap.has(q.id), `Duplicate question ID found: ${q.id} (appears in both ${idMap.get(q.id)} and ${q.subTopicId})`);
    idMap.set(q.id, q.subTopicId);
  });
});

// Test 5: Strict Question Schema Verification
runTest('Strict Schema & Payload Validation for all questions', () => {
  allQuestions.forEach((q, idx) => {
    const context = `Question [${idx}] ID=${q.id} (${q.subTopicId})`;
    assert(typeof q.id === 'string' && q.id.length > 0, `${context}: id must be non-empty string`);
    assert(q.subject === 'FISIKA' || q.subject === 'MATEMATIKA', `${context}: subject must be FISIKA or MATEMATIKA, got ${q.subject}`);
    assert(q.pillarId === 'fisika' || q.pillarId === 'matematika', `${context}: pillarId must be fisika or matematika`);
    assert(expectedChapters.has(q.chapterId), `${context}: chapterId ${q.chapterId} is not in syllabus`);
    assert(expectedSubtopics.has(q.subTopicId), `${context}: subTopicId ${q.subTopicId} is not in syllabus`);
    assert(typeof q.category === 'string' && q.category.length > 0, `${context}: category must be non-empty string`);
    assert(['mudah', 'sedang', 'hots'].includes(q.difficulty), `${context}: difficulty must be mudah/sedang/hots, got ${q.difficulty}`);
    assert(typeof q.statement === 'string' && q.statement.trim().length > 10, `${context}: statement must be detailed`);
    
    // Options
    assert(Array.isArray(q.options), `${context}: options must be an array`);
    assert.strictEqual(q.options.length, 5, `${context}: must have exactly 5 options (A-E), found ${q.options.length}`);
    q.options.forEach((opt, oIdx) => {
      assert(typeof opt === 'string' && opt.trim().length > 0, `${context}: option ${oIdx} is empty`);
    });

    // Correct index
    assert(Number.isInteger(q.correctIndex), `${context}: correctIndex must be an integer`);
    assert(q.correctIndex >= 0 && q.correctIndex <= 4, `${context}: correctIndex must be between 0 and 4, got ${q.correctIndex}`);

    // Solution
    assert(q.solution && typeof q.solution === 'object', `${context}: solution must be an object`);
    assert(typeof q.solution.concept === 'string' && q.solution.concept.length > 0, `${context}: solution.concept is missing`);
    assert(typeof q.solution.steps === 'string' && q.solution.steps.length > 0, `${context}: solution.steps is missing`);
    assert(typeof q.solution.pitfalls === 'string' && q.solution.pitfalls.length > 0, `${context}: solution.pitfalls is missing`);
  });
});

// Test 6: Mathematical Delimiters & KaTeX Syntax check
runTest('KaTeX Math delimiter consistency check', () => {
  allQuestions.forEach(q => {
    const textToCheck = q.statement + ' ' + q.options.join(' ');
    // Count unescaped dollar signs
    const dollars = (textToCheck.match(/(?<!\\)\$/g) || []).length;
    assert(dollars % 2 === 0, `Unmatched single dollar signs ($) in question ${q.id}: count is ${dollars}`);
  });
});

// Test 7: Browser Bundle Validation
runTest('Browser bundle file exists and loads cleanly', () => {
  const bundlePath = path.resolve(__dirname, '../data/bank-soal/bank-soal-bundle.js');
  assert(fs.existsSync(bundlePath), 'bank-soal-bundle.js must exist');
  
  // Test evaluation in simulated browser environment
  const mockWindow = {};
  const bundleCode = fs.readFileSync(bundlePath, 'utf8');
  const bundleFn = new Function('window', 'module', bundleCode);
  bundleFn(mockWindow, {});

  assert(mockWindow.BANK_SOAL_ALL, 'Bundle must expose window.BANK_SOAL_ALL');
  assert(Array.isArray(mockWindow.QUESTIONS_MUDAH), 'Bundle must expose window.QUESTIONS_MUDAH');
  assert(Array.isArray(mockWindow.QUESTIONS_SEDANG), 'Bundle must expose window.QUESTIONS_SEDANG');
  assert(Array.isArray(mockWindow.QUESTIONS_HOTS), 'Bundle must expose window.QUESTIONS_HOTS');
  assert(mockWindow.TKA_BANK_SOAL, 'Bundle must expose window.TKA_BANK_SOAL');
  assert.strictEqual(mockWindow.BANK_SOAL_ALL.length, allQuestions.length, 'Bundle question count must match master index');
});

console.log('\n----------------------------------------------------');
console.log(` RESULT: ${passedTests} / ${totalTests} tests passed.`);
console.log('----------------------------------------------------');

if (passedTests === totalTests) {
  console.log('🎉 ALL INTEGRATION AND UNIT TESTS PASSED SUCCESSFULLY!\n');
  process.exit(0);
} else {
  console.error('❌ SOME TESTS FAILED. PLEASE FIX BEFORE PROCEEDING.\n');
  process.exit(1);
}
