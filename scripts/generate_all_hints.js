/**
 * scripts/generate_all_hints.js
 * Automated Generation and Ingestion of Pedagogical Hints for All Questions in TKA Bank Soal.
 */

const fs = require('fs');
const path = require('path');

// Ensure browser global namespace for syllabusData
if (typeof window === 'undefined') {
  global.window = global;
}
require('../data/syllabusData.js');

const bankIndex = require('../data/bank-soal/index.js');
const allQuestions = bankIndex.allQuestions;

console.log(`Starting Hint Generation for ${allQuestions.length} questions...`);

function cleanHtml(text) {
  if (!text) return '';
  return text
    .replace(/<div[^>]*>/gi, ' ')
    .replace(/<\/div>/gi, ' ')
    .replace(/<strong>/gi, ' ')
    .replace(/<\/strong>/gi, ' ')
    .replace(/<em>/gi, ' ')
    .replace(/<\/em>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<p[^>]*>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<li>/gi, ' ')
    .replace(/<\/li>/gi, ' ')
    .replace(/<ol[^>]*>/gi, ' ')
    .replace(/<\/ol>/gi, ' ')
    .replace(/<ul[^>]*>/gi, ' ')
    .replace(/<\/ul>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function removeSpoilers(text) {
  if (!text) return '';
  return text
    .replace(/\b(Opsi|Pilihan)\s+[A-E]\b/gi, '')
    .replace(/\bJawaban(nya)?\s+(adalah|yaitu)\s+[A-E]\b/gi, '')
    .replace(/\bjadi\s+jawaban\s+yang\s+benar\s+adalah\b/gi, '')
    .replace(/\bmaka\s+opsi\s+yang\s+tepat\s+adalah\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function synthesizeHint(q) {
  // If already customized, keep
  if (q.hint && typeof q.hint === 'string' && q.hint.trim().length > 20) {
    return q.hint.trim();
  }

  const rawConcept = q.solution?.concept || '';
  const rawPitfalls = q.solution?.pitfalls || '';
  let cleanedConcept = removeSpoilers(cleanHtml(rawConcept));
  let cleanedPitfall = removeSpoilers(cleanHtml(rawPitfalls));

  // Strip prefixes
  cleanedConcept = cleanedConcept
    .replace(/^Rumus [^:]+:\s*/i, '')
    .replace(/^Konsep Dasar [^:]*:\s*/i, '')
    .replace(/^Hukum [^:]+:\s*/i, '')
    .replace(/^Peringatan Mutlak [^:]*:\s*/i, '')
    .trim();

  // If concept starts with a formula directly ($$ or $)
  if (cleanedConcept.startsWith('$$') || cleanedConcept.startsWith('$')) {
    if (q.subject === 'FISIKA') {
      cleanedConcept = `Gunakan perumusan konsep fisis: ${cleanedConcept}`;
    } else {
      cleanedConcept = `Gunakan hubungan matematis dasar: ${cleanedConcept}`;
    }
  }

  // Ensure sentence punctuation
  if (!cleanedConcept.endsWith('.') && !cleanedConcept.endsWith('!')) {
    cleanedConcept += '.';
  }

  // Extract brief tactical warning from pitfalls (anti-spoiler)
  let tacticalTip = '';
  if (cleanedPitfall) {
    let tip = cleanedPitfall
      .replace(/^⚠️\s*(Tips Menghafal|Peringatan Mutlak|Jebakan Paling Populer|Waspada Jebakan|Jebakan Umum|Jebakan)[^:]*:\s*/i, '')
      .replace(/^Peringatan:\s*/i, '')
      .replace(/^Tips:\s*/i, '')
      .trim();

    // Take only the first sentence
    const firstSentence = tip.split(/[.!?]\s+/)[0];
    if (firstSentence && 
        firstSentence.length > 15 && 
        firstSentence.length < 130 && 
        !firstSentence.match(/=\s*\d+/) && 
        !firstSentence.match(/\b(opsi|pilihan)\s+[A-E]\b/i)) {
      tacticalTip = firstSentence.trim();
      if (!tacticalTip.endsWith('.')) tacticalTip += '.';
    }
  }

  let finalHint = cleanedConcept;
  if (tacticalTip) {
    finalHint += ` **Tips:** ${tacticalTip}`;
  }

  // KaTeX balance sanity check
  const singleDollars = (finalHint.match(/(?<!\\)\$/g) || []).length;
  if (singleDollars % 2 !== 0) {
    // If odd single dollars, close it
    finalHint += '$';
  }

  return finalHint;
}

// Generate hints for all questions
let updatedCount = 0;
allQuestions.forEach((q, idx) => {
  const hint = synthesizeHint(q);
  q.hint = hint;
  updatedCount++;
});

console.log(`Generated hints for ${updatedCount} questions.`);

// Re-run build_full_modular_system to inject into all files and update bundles
console.log('Now updating modular bank files and bundles...');
require('./build_full_modular_system.js');

console.log('=== HINT INJECTION & BUNDLING COMPLETED SUCCESSFULLY ===');
