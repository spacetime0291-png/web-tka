/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Teorema Faktor & Akar Polinomial (mat-alj-polinom-faktor)
 * Slug: teorema-faktor-akar
 * Indikator: Faktor linear suku banyak (P(k) = 0) dan hubungan akar-akar Vieta.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-faktor";
  const subTopicSlug = "teorema-faktor-akar";
  const questions = [
  {
    "id": "sup-mtk-alj-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-polinom-faktor",
    "category": "Teorema Faktor Polinomial",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika suku banyak $P(x) = x^3 - 3x^2 + ax - 4$ habis dibagi oleh $(x - 2)$, maka nilai dari konstanta $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$2$",
      "$-2$",
      "$-4$",
      "$6$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Faktor:</strong><br>Bentuk $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika $P(k) = 0$.</div>",
      "steps": "<ol><li>Karena habis dibagi $(x - 2)$, maka $P(2) = 0$.</li><li>Substitusi $x = 2$: $(2)^3 - 3(2)^2 + a(2) - 4 = 0$.</li><li>$8 - 12 + 2a - 4 = 0 \\implies 2a - 8 = 0 \\implies 2a = 8 \\implies a = 4$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Keliru mensubstitusikan nilai $x = -2$ bukannya pembuat nol pembagi $x = 2$.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Teorema Faktor & Akar Polinomial",
    "subTopic": "Teorema Faktor & Akar Polinomial",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-polinom",
    "subTopicSlug": "teorema-faktor-akar"
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
