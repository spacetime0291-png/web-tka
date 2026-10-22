/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Trigonometri
 * Sub-topik: Limit Fungsi (mtk-tri-1)
 * Indikator: Limit fungsi aljabar (substitusi, pemfaktoran, rasionalisasi akar tanpa L'Hopital); limit fungsi trigonometri (teorema dasar & manipulasi identitas tanpa L'Hopital).
 * 
 * Total Butir Soal: 4 Soal (Mudah: 1, Sedang: 2, HOTS: 1)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-tri-1";
  const questions = [
  {
    "id": "mudah-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-tri",
    "subTopicId": "mtk-tri-1",
    "category": "Limit Aljabar Pemfaktoran",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai dari limit aljabar $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ (tanpa dalil L'Hôpital) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$3$",
      "$6$",
      "$9$",
      "$\\infty$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Limit Aljabar Bentuk Tak Tentu $\\frac{0}{0}$:</strong><br>\n          Jika substitusi langsung menghasilkan $\\frac{0}{0}$, faktorkan pembilang dan coret faktor pembuat nol $(x - c)$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi $x = 3 \\implies \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (Bentuk tak tentu).</li>\n          <li>Faktorkan selisih kuadrat:\n            $$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$$\n          </li>\n          <li>Eliminasi faktor pembuat nol $(x - 3)$:\n            $$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan langsung menyatakan limit bernilai 0 karena pembilang bernilai 0 saat substitusi awal.\n        </div>\n      "
    }
  },
  {
    "id": "sedang-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-tri",
    "subTopicId": "mtk-tri-1",
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
    }
  },
  {
    "id": "sup-mtk-tri-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-tri",
    "subTopicId": "mtk-tri-1",
    "category": "Limit Aljabar Rasionalisasi Bentuk Akar",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai dari limit aljabar bentuk akar $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ dihitung secara analitis murni tanpa dalil L'Hôpital adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$\\frac{1}{8}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Metode Perkalian Sekawan Akar (Tanpa L'Hôpital):</strong><br>Bentuk tak tentu $\\frac{0}{0}$ diselesaikan dengan mengalikan faktor sekawan $(\\sqrt{x} + 2)$ pada pembilang dan penyebut sehingga faktor pembuat nol $(x - 4)$ dapat dieliminasi.</div>",
      "steps": "<ol><li>Kalikan sekawan: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$.</li><li>Pembilang menjadi: $(\\sqrt{x})^2 - 2^2 = x - 4$.</li><li>Sederhanakan: $\\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2}$.</li><li>Substitusi nilai limit $x = 4$: $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan instruksi tanpa L'Hôpital atau salah mengalikan faktor sekawan.</div>"
    }
  },
  {
    "id": "hots-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-tri",
    "subTopicId": "mtk-tri-1",
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
    }
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
