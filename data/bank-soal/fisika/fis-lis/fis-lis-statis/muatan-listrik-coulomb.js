/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Muatan Listrik & Hukum Coulomb (fis-lis-statis-coulomb)
 * Slug: muatan-listrik-coulomb
 * Indikator: Interaksi gaya elektrostatis Coulomb antarmuatan titik (F = k * |q1 * q2| / r^2).
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-coulomb";
  const subTopicSlug = "muatan-listrik-coulomb";
  const questions = [
  {
    "id": "mudah-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Hukum Coulomb",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah muatan titik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta elektrostatis $k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar gaya tolak-menolak antara kedua muatan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}3\\text{ N}$",
      "$0{,}6\\text{ N}$",
      "$1{,}2\\text{ N}$",
      "$3{,}0\\text{ N}$",
      "$6{,}0\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum Coulomb:</strong><br>\n          $$F = k \\frac{|q_1 q_2|}{r^2}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Konversi satuan ke SI: $q_1 = 2\\times 10^{-6}\\text{ C}$, $q_2 = 3\\times 10^{-6}\\text{ C}$, $r = 30\\text{ cm} = 0{,}3\\text{ m} = 3\\times 10^{-1}\\text{ m}$.</li>\n          <li>$$F = (9\\times 10^9) \\frac{(2\\times 10^{-6})(3\\times 10^{-6})}{(3\\times 10^{-1})^2} = (9\\times 10^9) \\frac{6\\times 10^{-12}}{9\\times 10^{-2}} = 0{,}6\\text{ N}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengubah satuan $\\text{cm}$ ke $\\text{meter}$ atau $\\mu\\text{C}$ ke $\\text{Coulomb}$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "muatan-listrik-coulomb"
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
