/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Titik Ekstrem Gerak Parabola (fis-kin-lengkung-ekstrem)
 * Slug: titik-ekstrem-parabola
 * Indikator: Penentuan waktu mencapai titik tertinggi (h_max), jangkauan horizontal terjauh (x_max), dan kecepatan di titik ekstrem.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-ekstrem";
  const subTopicSlug = "titik-ekstrem-parabola";
  const questions = [
  {
    "id": "mudah-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-lengkung-ekstrem",
    "category": "Gerak Parabola & Titik Tertinggi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola ditendang dari permukaan tanah dengan kecepatan awal $v_0 = 40\\text{ m/s}$ dan sudut elevasi $\\theta = 30^\\circ$ terhadap bidang datar ($\\sin 30^\\circ = 0{,}5$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, waktu yang dibutuhkan bola untuk mencapai titik tertinggi lintasannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0\\text{ detik}$",
      "$2{,}0\\text{ detik}$",
      "$3{,}0\\text{ detik}$",
      "$4{,}0\\text{ detik}$",
      "$5{,}0\\text{ detik}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Waktu Mencapai Titik Tertinggi Gerak Parabola:</strong><br>\n          Pada titik puncak, komponen kecepatan vertikal bernilai nol ($v_y = 0$).<br>\n          $$t_h = \\frac{v_0 \\sin\\theta}{g}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi besaran: $v_0 = 40\\text{ m/s}$, $\\sin 30^\\circ = 0{,}5$, $g = 10\\text{ m/s}^2$.</li>\n          <li>Substitusi ke rumus waktu puncak:\n            $$t_h = \\frac{40 \\times 0{,}5}{10} = \\frac{20}{10} = 2{,}0\\text{ detik}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar dengan waktu total di udara ($t_{\\text{total}} = 2 t_h = 4{,}0\\text{ detik}$). Soal hanya menanyakan waktu menuju titik tertinggi.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Titik Ekstrem Gerak Parabola",
    "subTopic": "Titik Ekstrem Gerak Parabola",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-lengkung",
    "subTopicSlug": "titik-ekstrem-parabola"
  }
];

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
