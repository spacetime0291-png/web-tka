/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Determinan Matriks 2x2 dan 3x3 (mat-alj-matriks-det)
 * Slug: determinan-matriks
 * Indikator: Determinan matriks 2x2, aturan Sarrus/ekspansi kofaktor 3x3, dan sifat perkalian determinan.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-det";
  const subTopicSlug = "determinan-matriks";
  const questions = [
  {
    "id": "mudah-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks 2x2",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$. Nilai determinan dari matriks $A$ $(\\det(A))$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14$",
      "$26$",
      "$20$",
      "$-26$",
      "$18$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Determinan Matriks Ordo 2x2:</strong><br>\n          $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\det(A) = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Awas tanda minus ganda: $-(-6) = +6$. Sering terjadi kesalahan menghitung $20 - 6 = 14$.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "determinan-matriks"
  },
  {
    "id": "sup-mtk-alj-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks 3x3 Aturan Sarrus",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai determinan dari matriks ordo $3\\times3$ berikut: $M = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & 2 \\\\ 0 & -1 & 4 \\end{pmatrix}$ dihitung menggunakan aturan Sarrus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24$",
      "$20$",
      "$18$",
      "$28$",
      "$16$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Metode Sarrus Matriks $3\\times3$:</strong><br>Salin dua kolom pertama ke sebelah kanan matriks, jumlahkan hasil kali diagonal utama ke bawah, lalu kurangkan hasil kali diagonal sekunder ke atas.</div>",
      "steps": "<ol><li>Hasil kali diagonal turun: $(2 \\times 3 \\times 4) + (1 \\times 2 \\times 0) + (0 \\times 1 \\times (-1)) = 24 + 0 + 0 = 24$.</li><li>Hasil kali diagonal naik: $(0 \\times 3 \\times 0) + ((-1) \\times 2 \\times 2) + (4 \\times 1 \\times 1) = 0 - 4 + 4 = 0$.</li><li>Determinan: $\\det(M) = 24 - 0 = 24$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Kesalahan tanda minus pada suku $(-1)$ saat melakukan perkalian diagonal sekunder.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "determinan-matriks"
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
