/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Rumus Sudut Rangkap (fun-trig-dasar-rangkap)
 * Slug: rumus-sudut-rangkap
 * Indikator: Rumus analitis sin(2A), cos(2A), dan tan(2A).
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-rangkap";
  const subTopicSlug = "rumus-sudut-rangkap";
  const questions = [
  {
    "id": "sedang-mtk-09",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Identitas Trigonometri Sudut Rangkap",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui nilai $\\tan x = \\frac{3}{4}$ dengan sudut $x$ berada pada kuadran III ($180^\\circ < x < 270^\\circ$). Nilai dari $\\sin 2x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{24}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Identitas Sinus Sudut Rangkap:</strong><br>\n          $$\\sin 2x = 2 \\sin x \\cos x$$<br>\n          Di kuadran III, nilai $\\sin x < 0$ dan $\\cos x < 0$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dari $\\tan x = \\frac{3}{4}$, sisi depan $= 3$, samping $= 4$, miring $= \\sqrt{3^2 + 4^2} = 5$.</li>\n          <li>Karena $x$ di kuadran III:\n            $$\\sin x = -\\frac{3}{5}, \\quad \\cos x = -\\frac{4}{5}$$\n          </li>\n          <li>Substitusi ke rumus sudut rangkap:\n            $$\\sin 2x = 2 \\left(-\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = 2 \\left(\\frac{12}{25}\\right) = \\frac{24}{25}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perkalian dua bilangan negatif menghasilkan nilai positif: $(-)(-) = (+)$, sehingga $\\sin 2x$ bernilai positif $+\\frac{24}{25}$.\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "rumus-sudut-rangkap"
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
