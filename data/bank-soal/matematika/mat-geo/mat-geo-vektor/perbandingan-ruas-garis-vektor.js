/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Perbandingan Ruas Garis Vektor (mat-geo-vektor-perbandingan)
 * Slug: perbandingan-ruas-garis-vektor
 * Indikator: Vektor pembagi ruas garis di dalam dan di luar dengan rasio m : n.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-perbandingan";
  const subTopicSlug = "perbandingan-ruas-garis-vektor";
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
