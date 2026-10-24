/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Percepatan Sentripetal (fis-kin-lengkung-sentripetal)
 * Slug: percepatan-sentripetal
 * Indikator: Arah dan besar percepatan sentripetal (a_s = v^2 / r = omega^2 * r) menuju pusat lingkaran.
 * 
 * Total Butir Soal: 0 (Mudah: 0, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-sentripetal";
  const subTopicSlug = "percepatan-sentripetal";
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
