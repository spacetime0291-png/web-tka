/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Archimedes (fis-flu-statis-archimedes)
 * Slug: hukum-archimedes
 * Indikator: Gaya apung ke atas (F_a = rho_f * V_bf * g) dan syarat terapung, melayang, serta tenggelam.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-archimedes";
  const subTopicSlug = "hukum-archimedes";
  const questions = [
  {
    "id": "sedang-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-archimedes",
    "category": "Hukum Archimedes & Kerapatan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah balok kayu terapung di perbatasan dua lapisan zat cair yang tidak bercampur. Bagian bawah balok tercelup dalam lapisan zat cair A (massa jenis $\\rho_A = 1200\\text{ kg/m}^3$) sebanyak $40\\%$ dari volume totalnya, dan $35\\%$ volume balok tercelup dalam lapisan zat cair B (massa jenis $\\rho_B = 800\\text{ kg/m}^3$), sedangkan sisanya muncul di udara. Massa jenis balok kayu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$760\\text{ kg/m}^3$",
      "$780\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$1000\\text{ kg/m}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Keseimbangan Benda Terapung Multilapis:</strong><br>\n          Gaya berat total benda sama dengan jumlah seluruh gaya apung Archimedes dari fluida-fluida yang terdesak:<br>\n          $$W = F_{A1} + F_{A2} \\implies \\rho_b V_b g = \\rho_A V_{A} g + \\rho_B V_{B} g$$\n          $$\\rho_b = \\rho_A \\left(\\frac{V_A}{V_b}\\right) + \\rho_B \\left(\\frac{V_B}{V_b}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Diketahui rasio volume tercelup:<br>\n            $\\frac{V_A}{V_b} = 40\\% = 0{,}40$ dan $\\frac{V_B}{V_b} = 35\\% = 0{,}35$.\n          </li>\n          <li>Substitusi ke persamaan keseimbangan apung:<br>\n            $$\\rho_b = (1200 \\times 0{,}40) + (800 \\times 0{,}35)$$\n          </li>\n          <li>Hitung masing-masing kontribusi:<br>\n            $$1200 \\times 0{,}40 = 480$$\n            $$800 \\times 0{,}35 = 280$$\n            $$\\rho_b = 480 + 280 = 760\\text{ kg/m}^3$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa volume balok di udara ($25\\%$) tidak memberikan gaya apung yang signifikan karena massa jenis udara sangat kecil dibanding cairan dan diabaikan.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Hukum Archimedes",
    "subTopic": "Hukum Archimedes",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-archimedes"
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
