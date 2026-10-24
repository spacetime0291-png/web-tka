/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Persamaan Garis Lurus (fun-geo-dasar-garis)
 * Slug: persamaan-garis-lurus
 * Indikator: Persamaan garis lurus bentuk eksplisit y = mx + c dan implisit Ax + By + C = 0.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-garis";
  const subTopicSlug = "persamaan-garis-lurus";
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
