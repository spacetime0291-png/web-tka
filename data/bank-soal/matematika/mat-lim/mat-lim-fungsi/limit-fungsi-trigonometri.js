/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Fungsi Trigonometri (mat-lim-fungsi-trigono)
 * Slug: limit-fungsi-trigonometri
 * Indikator: Teorema limit trigonometri dasar dan manipulasi identitas tanpa aturan L'Hopital.
 * 
 * Total Butir Soal: 2 (Mudah: 0, Sedang: 1, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-trigono";
  const subTopicSlug = "limit-fungsi-trigonometri";
  const questions = [
  {
    "id": "sedang-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Trigonometri Dasar Tanpa L'Hôpital",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\sin 2x}$ yang dihitung menggunakan manipulasi identitas trigonometri murni (tanpa dalil L'Hôpital) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Identitas Sudut Rangkap & Teorema Limit Trigonometri Dasar:</strong><br>\n          • $1 - \\cos 2u = 2\\sin^2 u \\implies 1 - \\cos 4x = 2\\sin^2(2x)$<br>\n          • Teorema limit dasar: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Ubah pembilang menggunakan identitas sudut rangkap:\n            $$1 - \\cos 4x = 2\\sin^2(2x)$$\n          </li>\n          <li>Tulis kembali ekspresi limit:\n            $$\\lim_{x \\to 0} \\frac{2\\sin^2(2x)}{x \\sin 2x} = \\lim_{x \\to 0} \\frac{2\\sin(2x)\\sin(2x)}{x \\sin 2x}$$\n          </li>\n          <li>Coret faktor bersama $\\sin 2x$ (karena $x \\neq 0$ saat proses limit):\n            $$\\lim_{x \\to 0} \\frac{2\\sin(2x)}{x} = 2 \\times \\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2 \\times 2 = 4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan pengali 2 dari rumus identitas: $2\\sin^2(2x)$ bukan $\\sin^2(2x)$. Kesalahan ini akan menghasilkan nilai limit 2 bukannya 4.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-trigonometri"
  },
  {
    "id": "hots-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Fungsi Trigonometri Non-L'Hôpital",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Tentukan nilai dari limit trigonometri analitis berikut tanpa menerapkan dalil L'Hôpital:\n$$\\lim_{x \\to 0} \\frac{\\cos 5x - \\cos 3x}{x \\tan 2x}$$",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4$",
      "$-2$",
      "$2$",
      "$4$",
      "$-8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Selisih Kosinus & Teorema Limit:</strong><br>\n          • $\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$<br>\n          • $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0} \\frac{cx}{\\tan dx} = \\frac{c}{d}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dengan $A = 5x$ dan $B = 3x$:\n            $$\\frac{A+B}{2} = 4x \\quad \\text{dan} \\quad \\frac{A-B}{2} = x$$\n            $$\\cos 5x - \\cos 3x = -2\\sin(4x)\\sin(x)$$\n          </li>\n          <li>Substitusikan ke dalam ekspresi limit:\n            $$\\lim_{x \\to 0} \\frac{-2\\sin(4x)\\sin(x)}{x \\tan(2x)}$$\n          </li>\n          <li>Pisahkan menjadi perkalian limit dasar trigonometri:\n            $$-2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(4x)}{\\tan(2x)} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\right)$$\n          </li>\n          <li>Hitung nilai masing-masing suku:\n            $$-2 \\times \\left(\\frac{4}{2}\\right) \\times (1) = -2 \\times 2 \\times 1 = -4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Tanda minus pada rumus selisih kosinus $-2\\sin\\sin$ sangat vital. Lupa tanda minus akan membuat hasil menjadi $+4$, yang merupakan jebakan umum.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-trigonometri"
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
