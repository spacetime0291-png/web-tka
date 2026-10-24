/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Hukum Ohm & Hambatan (fis-lis-dc-ohm)
 * Slug: hukum-ohm-hambatan
 * Indikator: Hubungan tegangan, arus, dan hambatan (V = I * R), serta hambatan kawat penghantar.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-ohm";
  const subTopicSlug = "hukum-ohm-hambatan";
  const questions = [];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
