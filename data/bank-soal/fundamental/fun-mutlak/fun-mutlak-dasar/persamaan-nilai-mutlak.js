/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Persamaan Nilai Mutlak (fun-mutlak-dasar-persamaan)
 * Slug: persamaan-nilai-mutlak
 * Indikator: Konsep dasar nilai mutlak sebagai jarak dan penyelesaian persamaan nilai mutlak linear.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-persamaan";
  const subTopicSlug = "persamaan-nilai-mutlak";
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
