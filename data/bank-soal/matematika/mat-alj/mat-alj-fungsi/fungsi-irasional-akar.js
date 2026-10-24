/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Irasional (Bentuk Akar) (mat-alj-fungsi-akar)
 * Slug: fungsi-irasional-akar
 * Indikator: Fungsi aljabar dalam tanda akar f(x) = sqrt(g(x)) dan syarat numerus g(x) >= 0.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-akar";
  const subTopicSlug = "fungsi-irasional-akar";
  const questions = [
  {
    "id": "mudah-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Domain Fungsi Bentuk Akar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Daerah asal alami (domain) dari fungsi real $f(x) = \\sqrt{2x - 8}$ adalah himpunan semua $x \\in \\mathbb{R}$ yang memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge 8$",
      "$x \\in \\mathbb{R}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Syarat Terdefinisi Bentuk Akar Real:</strong><br>\n          Fungsi $\\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika radikan tidak negatif:<br>\n          $$g(x) \\ge 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$2x - 8 \\ge 0$$</li>\n          <li>$$2x \\ge 8 \\implies x \\ge 4$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena akar berada di pembilang (bukan penyebut pecahan), nilai 0 diperbolehkan (sehingga menggunakan $\\ge 4$, bukan $> 4$).\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-fungsi",
    "subTopicSlug": "fungsi-irasional-akar"
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
