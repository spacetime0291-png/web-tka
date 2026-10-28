/**
 * TKA FORMULA MASTER BANK
 * Menggabungkan seluruh rangkuman rumus dari 28 Bab Kecil:
 * - 5 Bab Kecil Fundamental
 * - 7 Bab Kecil Matematika Lanjut
 * - 16 Bab Kecil Fisika
 */

if (typeof window === 'undefined') {
  global.window = global;
}

const FORMULA_BANK = {};

// Helper untuk menggabungkan modul
function mergeFormulas(source) {
  if (!source || typeof source !== 'object') return;
  Object.keys(source).forEach(key => {
    FORMULA_BANK[key] = source[key];
  });
}

// Node.js environment imports
if (typeof module !== 'undefined' && module.exports) {
  try {
    mergeFormulas(require('./formulas/formulas-fundamental.js'));
    mergeFormulas(require('./formulas/formulas-matematika.js'));
    mergeFormulas(require('./formulas/formulas-fisika-mekanika.js'));
    mergeFormulas(require('./formulas/formulas-fisika-gelombang-termo-listrik.js'));
  } catch (err) {
    console.warn("Node import formula modules notice:", err.message);
  }
}

// Browser environment
if (typeof window !== 'undefined') {
  if (window.FORMULAS_FUNDAMENTAL) mergeFormulas(window.FORMULAS_FUNDAMENTAL);
  if (window.FORMULAS_MATEMATIKA) mergeFormulas(window.FORMULAS_MATEMATIKA);
  if (window.FORMULAS_FISIKA_MEKANIKA) mergeFormulas(window.FORMULAS_FISIKA_MEKANIKA);
  if (window.FORMULAS_FISIKA_LANJUTAN) mergeFormulas(window.FORMULAS_FISIKA_LANJUTAN);
  
  window.FORMULA_BANK = FORMULA_BANK;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULA_BANK;
}
