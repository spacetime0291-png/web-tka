/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Sifat Eksponen (fun-eks-dasar-eksponen)
 * Slug: sifat-eksponen
 * Indikator: Sifat-sifat perkalian, pembagian, perpangkatan, dan pangkat negatif bilangan berpangkat.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-eksponen";
  const subTopicSlug = "sifat-eksponen";
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
