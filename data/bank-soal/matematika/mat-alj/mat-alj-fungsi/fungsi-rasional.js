/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Rasional (mat-alj-fungsi-rasional)
 * Slug: fungsi-rasional
 * Indikator: Karakteristik fungsi pecahan aljabar, asimtot tegak, dan asimtot datar.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-rasional";
  const subTopicSlug = "fungsi-rasional";
  const questions = [
  {
    "id": "sup-mtk-alj-04",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-fungsi-rasional",
    "category": "Domain Fungsi Rasional",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Daerah asal alami (*domain*) dari fungsi rasional $f(x) = \\frac{2x + 5}{x - 3}$ agar terdefinisi pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{5}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Domain Fungsi Pecahan Rasional:</strong><br>Pecahan aljabar $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak sama dengan nol: $Q(x) \\neq 0$.</div>",
      "steps": "<ol><li>Penyebut pecahan: $x - 3$.</li><li>Syarat terdefinisi: $x - 3 \\neq 0 \\implies x \\neq 3$.</li><li>Domain fungsi: $D_f = \\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Membingungkan antara syarat penyebut tidak nol dengan syarat pembilang tidak nol.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Fungsi Rasional",
    "subTopic": "Fungsi Rasional",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-fungsi",
    "subTopicSlug": "fungsi-rasional"
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
