/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Aljabar Elementer
 * Bab Kecil: Aljabar Dasar (fun-alj-dasar)
 * Sub-Bab: Pecahan Bentuk Aljabar (fun-alj-dasar-pecahan)
 * Slug: pecahan-bentuk-aljabar
 * Indikator: Penyederhanaan, penjumlahan, pengurangan, dan perkalian pecahan bentuk aljabar.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-alj-dasar-pecahan";
  const subTopicSlug = "pecahan-bentuk-aljabar";
  const questions = [
  {
    "id": "sup-mtk-fun-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Penyederhanaan Pecahan Aljabar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Bentuk paling sederhana dari pecahan aljabar $\\frac{2x^2 - 8}{x^2 + 3x + 2}$ untuk $x \\neq -1$ dan $x \\neq -2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2(x - 2)}{x + 1}$",
      "$\\frac{2(x + 2)}{x + 1}$",
      "$\\frac{x - 2}{x + 1}$",
      "$\\frac{2(x - 4)}{x + 1}$",
      "$\\frac{2x - 4}{x + 2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyederhanaan Pecahan Bentuk Aljabar:</strong><br>Faktorkan pembilang dan penyebut ke bentuk perkalian faktor-faktor linearnya, lalu bagi dengan faktor persekutuan terbesarnya.</div>",
      "steps": "<ol><li>Faktorkan pembilang: $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$.</li><li>Faktorkan penyebut: $x^2 + 3x + 2 = (x + 1)(x + 2)$.</li><li>Bagi faktor persekutuan $(x + 2)$: $\\frac{2(x - 2)(x + 2)}{(x + 1)(x + 2)} = \\frac{2(x - 2)}{x + 1}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mencoret suku $x^2$ secara langsung tanpa memfaktorkan bentuk penjumlahan aljabar terlebih dahulu.</div>"
    },
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "pecahan-bentuk-aljabar"
  },
  {
    "id": "sup-mtk-fun-04",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-pecahan",
    "category": "Syarat Pecahan Aljabar Terdefinisi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Himpunan semua nilai $x$ real agar fungsi aljabar $f(x) = \\frac{x + 4}{x^2 - 5x + 6}$ terdefinisi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 6\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Syarat Pecahan Terdefinisi:</strong><br>Penyebut dari suatu pecahan rasional tidak boleh sama dengan nol: $\\text{Penyebut} \\neq 0$.</div>",
      "steps": "<ol><li>Penyebut: $x^2 - 5x + 6 \\neq 0$.</li><li>Faktorkan: $(x - 2)(x - 3) \\neq 0$.</li><li>Maka $x \\neq 2$ dan $x \\neq 3$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap pembilang tidak boleh nol sehingga menyertakan $x \\neq -4$.</div>"
    },
    "bab": "Aljabar Elementer",
    "subBab": "Pecahan Bentuk Aljabar",
    "subTopic": "Pecahan Bentuk Aljabar",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "pecahan-bentuk-aljabar"
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
