/**
 * pipeline/linter.js
 * Linter & Validator Guardrail for TKA Bank Soal Batch Files.
 *
 * Rules:
 * 1. Structure: Must export an array of exactly 5 question objects.
 * 2. ID & Difficulty Integrity:
 *    - Difficulty matches task ('mudah' or 'sedang').
 *    - IDs are strictly consecutive without duplicates (e.g., -001..-005 or -006..-010).
 * 3. Options & Key:
 *    - options has exactly 5 non-empty string items (A, B, C, D, E).
 *    - correctIndex is an integer in [0, 4].
 * 4. Comprehensive Solutions:
 *    - solution.concept, solution.steps, solution.pitfalls must be substantively populated (> 10 chars).
 * 5. Multi-level KaTeX Validation:
 *    - Display math ($$) count must be even.
 *    - Strip display math ($$...$$) blocks.
 *    - Unescaped inline math ($) count in remaining text must be even.
 * 6. Exit code: 0 on pass, 1 on failure.
 */

const fs = require('fs');
const path = require('path');

const targetArg = process.argv[2];
if (!targetArg) {
  console.error('Usage: node pipeline/linter.js <target_file>');
  process.exit(1);
}

const targetPath = path.resolve(targetArg);
if (!fs.existsSync(targetPath)) {
  console.error(`[FAIL] File not found: ${targetPath}`);
  process.exit(1);
}

console.log(`====================================================`);
console.log(` LINTER GUARDRAIL: ${path.basename(targetPath)}`);
console.log(`====================================================\n`);

let questions;
try {
  if (targetPath.endsWith('.json')) {
    const raw = fs.readFileSync(targetPath, 'utf8');
    questions = JSON.parse(raw);
  } else {
    // Load as CommonJS module
    delete require.cache[require.resolve(targetPath)];
    questions = require(targetPath);
  }
} catch (err) {
  console.error(`[FAIL] Failed to parse target file: ${err.message}`);
  process.exit(1);
}

const errors = [];
const warnings = [];

// ------------------------------------------------------------------
// Rule 1: Array of exactly 5 question objects
// ------------------------------------------------------------------
if (!Array.isArray(questions)) {
  errors.push(`Rule 1 (Structure): Root export must be an Array, received ${typeof questions}`);
} else if (questions.length !== 5) {
  errors.push(`Rule 1 (Structure): File must contain exactly 5 questions, found ${questions.length}`);
}

if (errors.length > 0) {
  reportAndExit(errors, warnings);
}

// Check if tasks.json exists to cross-check task metadata
let taskMeta = null;
const tasksJsonPath = path.resolve(__dirname, 'tasks.json');
if (fs.existsSync(tasksJsonPath)) {
  try {
    const tasks = JSON.parse(fs.readFileSync(tasksJsonPath, 'utf8'));
    const normalizedTarget = targetArg.replace(/\\/g, '/');
    taskMeta = tasks.find(t => {
      const normT = t.target_file.replace(/\\/g, '/');
      return normalizedTarget.endsWith(normT) || normT.endsWith(normalizedTarget);
    });
  } catch (e) {
    // non-fatal
  }
}

// ------------------------------------------------------------------
// Rule 2: ID & Difficulty Integrity
// ------------------------------------------------------------------
const seenIds = new Set();
const filename = path.basename(targetPath);
let expectedDifficulty = null;
let expectedStartId = null;

if (taskMeta) {
  expectedDifficulty = taskMeta.difficulty;
  expectedStartId = taskMeta.id_start;
} else if (filename.includes('_EASY') || filename.includes('_mudah')) {
  expectedDifficulty = 'mudah';
  expectedStartId = 1;
} else if (filename.includes('_MEDIUM') || filename.includes('_sedang')) {
  expectedDifficulty = 'sedang';
  expectedStartId = 6;
}

questions.forEach((q, idx) => {
  const qNum = idx + 1;
  const qContext = `Question #${qNum} (ID: ${q.id || 'MISSING'})`;

  // Required core properties
  if (!q.id || typeof q.id !== 'string') {
    errors.push(`Rule 2 (ID): ${qContext} has missing or non-string id`);
  } else {
    if (seenIds.has(q.id)) {
      errors.push(`Rule 2 (ID): Duplicate ID found: '${q.id}'`);
    }
    seenIds.add(q.id);

    // ID suffix format check: -001, -002, etc.
    const idParts = q.id.split('-');
    const suffixStr = idParts[idParts.length - 1];
    const suffixNum = parseInt(suffixStr, 10);

    if (isNaN(suffixNum)) {
      errors.push(`Rule 2 (ID): ID '${q.id}' does not end with numeric sequence (e.g. -001)`);
    } else if (expectedStartId !== null) {
      const expectedNum = expectedStartId + idx;
      if (suffixNum !== expectedNum) {
        errors.push(`Rule 2 (ID): ${qContext} expected sequence index ${String(expectedNum).padStart(3, '0')}, found ${suffixStr}`);
      }
    }
  }

  // Difficulty check
  if (!q.difficulty || !['mudah', 'sedang', 'hots'].includes(q.difficulty)) {
    errors.push(`Rule 2 (Difficulty): ${qContext} difficulty must be 'mudah' or 'sedang', got '${q.difficulty}'`);
  } else if (expectedDifficulty && q.difficulty !== expectedDifficulty) {
    errors.push(`Rule 2 (Difficulty): ${qContext} difficulty '${q.difficulty}' does not match expected '${expectedDifficulty}'`);
  }

  // Pillar & subject check
  if (q.pillarId && !['fisika', 'matematika', 'fundamental'].includes(q.pillarId)) {
    errors.push(`Rule 2 (Metadata): ${qContext} invalid pillarId: '${q.pillarId}'`);
  }
  if (q.subject && !['FISIKA', 'MATEMATIKA'].includes(q.subject)) {
    errors.push(`Rule 2 (Metadata): ${qContext} subject must be 'FISIKA' or 'MATEMATIKA', got '${q.subject}'`);
  }

  // ------------------------------------------------------------------
  // Rule 3: Options (5 items) & Key (0..4)
  // ------------------------------------------------------------------
  if (!Array.isArray(q.options)) {
    errors.push(`Rule 3 (Options): ${qContext} options must be an Array`);
  } else if (q.options.length !== 5) {
    errors.push(`Rule 3 (Options): ${qContext} options must have exactly 5 items, got ${q.options.length}`);
  } else {
    q.options.forEach((opt, oIdx) => {
      if (typeof opt !== 'string' || opt.trim().length === 0) {
        errors.push(`Rule 3 (Options): ${qContext} option [${oIdx}] is empty or not a string`);
      }
    });
  }

  if (!Number.isInteger(q.correctIndex)) {
    errors.push(`Rule 3 (Key): ${qContext} correctIndex must be an integer, got ${typeof q.correctIndex}`);
  } else if (q.correctIndex < 0 || q.correctIndex > 4) {
    errors.push(`Rule 3 (Key): ${qContext} correctIndex must be between 0 and 4, got ${q.correctIndex}`);
  }

  // Statement check
  if (typeof q.statement !== 'string' || q.statement.trim().length < 15) {
    errors.push(`Rule 3 (Statement): ${qContext} statement is missing or too short`);
  }

  // ------------------------------------------------------------------
  // Rule 4: Substantial Solutions (concept, steps, pitfalls)
  // ------------------------------------------------------------------
  if (!q.solution || typeof q.solution !== 'object') {
    errors.push(`Rule 4 (Solution): ${qContext} solution must be an object`);
  } else {
    if (typeof q.solution.concept !== 'string' || q.solution.concept.trim().length < 10) {
      errors.push(`Rule 4 (Solution): ${qContext} solution.concept must be substantively populated (> 10 chars)`);
    }
    if (typeof q.solution.steps !== 'string' || q.solution.steps.trim().length < 10) {
      errors.push(`Rule 4 (Solution): ${qContext} solution.steps must be substantively populated (> 10 chars)`);
    }
    if (typeof q.solution.pitfalls !== 'string' || q.solution.pitfalls.trim().length < 10) {
      errors.push(`Rule 4 (Solution): ${qContext} solution.pitfalls must be substantively populated (> 10 chars)`);
    }
  }

  // ------------------------------------------------------------------
  // Rule 5: Multi-level KaTeX Math Delimiter Validation
  // ------------------------------------------------------------------
  function validateKaTeX(text, fieldName) {
    if (typeof text !== 'string') return;

    // 5a. Count display math ($$) delimiters
    const displayDelims = (text.match(/\$\$/g) || []).length;
    if (displayDelims % 2 !== 0) {
      errors.push(`Rule 5 (KaTeX): ${qContext} in '${fieldName}' has an odd number of display math ($$) delimiters (count: ${displayDelims})`);
    }

    // 5b. Strip display math blocks: $$...$$
    const stripped = text.replace(/\$\$[\s\S]*?\$\$/g, '');

    // 5c. Count unescaped inline math ($) delimiters in remainder
    const inlineDelims = (stripped.match(/(?<!\\)\$/g) || []).length;
    if (inlineDelims % 2 !== 0) {
      errors.push(`Rule 5 (KaTeX): ${qContext} in '${fieldName}' has an odd number of inline math ($) delimiters (count: ${inlineDelims})`);
    }
  }

  validateKaTeX(q.statement, 'statement');
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, oIdx) => {
      validateKaTeX(opt, `options[${oIdx}]`);
    });
  }
  if (q.solution) {
    validateKaTeX(q.solution.concept, 'solution.concept');
    validateKaTeX(q.solution.steps, 'solution.steps');
    validateKaTeX(q.solution.pitfalls, 'solution.pitfalls');
  }
  if (q.diagramCaption) {
    validateKaTeX(q.diagramCaption, 'diagramCaption');
  }
});

reportAndExit(errors, warnings);

function reportAndExit(errs, warns) {
  if (warns.length > 0) {
    console.warn(`WARNINGS (${warns.length}):`);
    warns.forEach(w => console.warn(`  [WARN] ${w}`));
    console.log('');
  }

  if (errs.length > 0) {
    console.error(`FAILED: ${errs.length} validation errors found:\n`);
    errs.forEach(e => console.error(`  ❌ ${e}`));
    console.error(`\n====================================================`);
    console.error(` RESULT: FAILED (Exit Code 1)`);
    console.error(`====================================================\n`);
    process.exit(1);
  } else {
    console.log(`  ✅ Rule 1 Passed: Exactly 5 questions in array structure.`);
    console.log(`  ✅ Rule 2 Passed: ID sequence and difficulty '${expectedDifficulty || 'validated'}' match.`);
    console.log(`  ✅ Rule 3 Passed: 5 non-empty options and valid correctIndex [0..4].`);
    console.log(`  ✅ Rule 4 Passed: Comprehensive solution (concept, steps, pitfalls).`);
    console.log(`  ✅ Rule 5 Passed: Multi-level KaTeX delimiters ($$ and $) balanced.`);
    console.log(`\n====================================================`);
    console.log(` RESULT: ALL GUARDRAIL CHECKS PASSED (Exit Code 0)`);
    console.log(`====================================================\n`);
    process.exit(0);
  }
}
