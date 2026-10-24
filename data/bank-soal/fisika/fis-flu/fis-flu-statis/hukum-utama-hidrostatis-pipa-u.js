/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Utama Hidrostatis (Pipa U) (fis-flu-statis-pipau)
 * Slug: hukum-utama-hidrostatis-pipa-u
 * Indikator: Prinsip kesamaan tekanan pada bidang datar horizontal fluida sejenis (rho_1 * h_1 = rho_2 * h_2).
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-pipau";
  const subTopicSlug = "hukum-utama-hidrostatis-pipa-u";
  const questions = [
  {
    "id": "sup-fis-flu-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-pipau",
    "category": "Penerapan Persamaan Bernoulli",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Air mengalir secara horizontal melalui pipa venturimeter tanpa manometer. Luas penampang pipa utama $A_1 = 20\\text{ cm}^2$ dan luas penampang leher $A_2 = 10\\text{ cm}^2$. Perbedaan ketinggian kolom zat cair pada kedua tabung vertikal pengukur adalah $h = 15\\text{ cm}$ ($g = 10\\text{ m/s}^2$). Kelajuan aliran air pada penampang utama ($v_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$1{,}5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$0{,}5\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Venturimeter Tanpa Manometer:</strong><br>Kombinasi Persamaan Kontinuitas dan Persamaan Bernoulli menghasilkan kelajuan masuk:<br>$v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$.</div>",
      "steps": "<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{20}{10} = 2 \\implies \\left(\\frac{A_1}{A_2}\\right)^2 = 4$.</li><li>Pembilang formula: $2 g h = 2 \\times 10 \\times 0{,}15 = 3$.</li><li>Penyebut formula: $4 - 1 = 3$.</li><li>Kelajuan: $v_1 = \\sqrt{\\frac{3}{3}} = 1\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi beda tinggi $h = 15\\text{ cm}$ ke meter ($0{,}15\\text{ m}$).</div>"
    },
    "bab": "Fluida",
    "subBab": "Hukum Utama Hidrostatis (Pipa U)",
    "subTopic": "Hukum Utama Hidrostatis (Pipa U)",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-utama-hidrostatis-pipa-u"
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
