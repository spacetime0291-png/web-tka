/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Fungsi Aljabar (mat-lim-fungsi-aljabar)
 * Slug: limit-fungsi-aljabar
 * Indikator: Limit fungsi aljabar rasional bentuk 0/0 via pemfaktoran dan perkalian sekawan akar.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-aljabar";
  const subTopicSlug = "limit-fungsi-aljabar";
  const questions = [
  {
    "id": "mudah-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-aljabar",
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
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-aljabar"
  },
  {
    "id": "sup-mtk-tri-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-aljabar",
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
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-aljabar"
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
