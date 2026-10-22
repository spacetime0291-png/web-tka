/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Sub-topik: Matriks (mtk-alj-1)
 * Indikator: Penjumlahan dan pengurangan matriks; perkalian skalar & antarmatriks; determinan 2x2 & 3x3; invers 2x2 & 3x3; SPL dan program linear dengan matriks.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 2, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-alj-1";
  const questions = [
  {
    "id": "mudah-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-1",
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
    }
  },
  {
    "id": "sup-mtk-alj-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-1",
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
    }
  },
  {
    "id": "sedang-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-1",
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
    }
  },
  {
    "id": "sup-mtk-alj-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-1",
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
