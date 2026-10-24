/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Identitas Pythagoras (fun-trig-dasar-pythagoras)
 * Slug: identitas-pythagoras
 * Indikator: Identitas dasar sin^2(x) + cos^2(x) = 1, 1 + tan^2(x) = sec^2(x), dan 1 + cot^2(x) = csc^2(x).
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 0, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-pythagoras";
  const subTopicSlug = "identitas-pythagoras";
  const questions = [
  {
    "id": "hots-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-pythagoras",
    "category": "Sifat Simetri & Identitas Trigonometri Lanjut",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Jika nilai dari ekspresi berikut dihitung pada interval $[0, \\pi]$:\n$$I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$$\nmaka nilai pasti dari integral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi^2}{8}$",
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\pi$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>King's Property Sifat Simetri Integral:</strong><br>\n          $$\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a+b-x)\\,dx$$\n          Khusus untuk batas $[0, \\pi]$ dengan $x \\cdot g(\\sin x)$:\n          $$\\int_{0}^{\\pi} x g(\\sin x)\\,dx = \\frac{\\pi}{2} \\int_{0}^{\\pi} g(\\sin x)\\,dx$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Terapkan substitusi $x \\to \\pi - x$:\n            $$I = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)} \\, dx = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Jumlahkan kedua bentuk $I$:\n            $$2I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx \\implies I = \\frac{\\pi}{2} \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Substitusi $u = \\cos x \\implies du = -\\sin x \\, dx$.<br>\n            Saat $x = 0 \\implies u = 1$; saat $x = \\pi \\implies u = -1$:\n            $$I = \\frac{\\pi}{2} \\int_{1}^{-1} \\frac{-du}{1 + u^2} = \\frac{\\pi}{2} \\int_{-1}^{1} \\frac{du}{1 + u^2}$$\n          </li>\n          <li>Anti-turunan baku $\\arctan(u)$:\n            $$I = \\frac{\\pi}{2} [\\arctan(1) - \\arctan(-1)] = \\frac{\\pi}{2} \\left[ \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right) \\right] = \\frac{\\pi}{2} \\left( \\frac{\\pi}{2} \\right) = \\frac{\\pi^2}{4}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengalikan $\\frac{\\pi}{2}$ dengan hasil integral $\\frac{\\pi}{2}$, sehingga mendapatkan $\\frac{\\pi}{2}$ atau salah tanda saat integrasi substitusi $u = \\cos x$.\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "identitas-pythagoras"
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
