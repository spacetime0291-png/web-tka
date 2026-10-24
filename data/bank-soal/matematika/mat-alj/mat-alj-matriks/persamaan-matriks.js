/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Persamaan Matriks (mat-alj-matriks-persamaan)
 * Slug: persamaan-matriks
 * Indikator: Penyelesaian persamaan matriks AX = B (X = A^(-1) B) dan XA = B (X = B A^(-1)).
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-persamaan";
  const subTopicSlug = "persamaan-matriks";
  const questions = [
  {
    "id": "sedang-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Determinan Perkalian Matriks",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui matriks berordo $2\\times2$, yaitu $A = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$. Jika matriks $B$ memenuhi persamaan matriks $A \\cdot B = 2I$ (dengan $I$ adalah matriks identitas ordo $2\\times2$), nilai determinan dari matriks $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat-Sifat Determinan Matriks:</strong><br>\n          • $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$<br>\n          • Untuk matriks ordo $n\\times n$: $\\det(k \\cdot M) = k^n \\cdot \\det(M)$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung determinan matriks $A$:\n            $$\\det(A) = (4)(2) - (3)(2) = 8 - 6 = 2$$\n          </li>\n          <li>Hitung determinan ruas kanan ($2I$ pada ordo $2\\times2$):\n            $$\\det(2I) = 2^2 \\cdot \\det(I) = 4 \\times 1 = 4$$\n          </li>\n          <li>Terapkan sifat determinan perkalian:\n            $$\\det(A \\cdot B) = \\det(2I)$$\n            $$\\det(A) \\cdot \\det(B) = 4$$\n            $$2 \\cdot \\det(B) = 4 \\implies \\det(B) = 2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering keliru menghitung $\\det(2I) = 2$. Ingat sifat skala determinan: faktor pengali dipangkatkan dengan ordo matriks ($k^2$).\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "persamaan-matriks"
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
