/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Invers Matriks 2x2 dan 3x3 (mat-alj-matriks-invers)
 * Slug: invers-matriks
 * Indikator: Invers matriks non-singular A^(-1) = (1 / det(A)) * adj(A).
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-invers";
  const subTopicSlug = "invers-matriks";
  const questions = [
  {
    "id": "sup-mtk-alj-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Ordo 2x2",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$. Matriks invers $A^{-1}$ dari matriks tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{10}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} 3 & -2 \\\\ -1 & 4 \\end{pmatrix}$",
      "$\\frac{1}{14}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} -4 & 2 \\\\ 1 & -3 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Invers Matriks Ordo $2\\times2$:</strong><br>Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, inversnya adalah $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ dengan $\\det(A) = ad - bc \\neq 0$.</div>",
      "steps": "<ol><li>Determinan: $\\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$.</li><li>Adjoin matriks: tukar elemen diagonal utama dan ubah tanda diagonal samping $\\to \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li><li>$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa menukar posisi elemen diagonal utama saat membentuk matriks adjoin.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "invers-matriks"
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
