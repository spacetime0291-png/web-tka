/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Kecepatan Relatif (fis-kin-gl-relatif)
 * Slug: kecepatan-relatif
 * Indikator: Relativitas kecepatan Galileo satu dimensi untuk dua benda bergerak searah & berlawanan arah.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-relatif";
  const subTopicSlug = "kecepatan-relatif";
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
