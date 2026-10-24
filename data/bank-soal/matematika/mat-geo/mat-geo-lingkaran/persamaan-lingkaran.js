/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Persamaan Lingkaran (mat-geo-lingkaran-persamaan)
 * Slug: persamaan-lingkaran
 * Indikator: Persamaan lingkaran berpusat (0,0), (a,b), dan bentuk umum x^2 + y^2 + Ax + By + C = 0.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-persamaan";
  const subTopicSlug = "persamaan-lingkaran";
  const questions = [
  {
    "id": "mudah-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Jari-Jari Lingkaran Bentuk Umum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lingkaran memiliki persamaan bentuk umum $x^2 + y^2 - 6x + 8y - 11 = 0$. Panjang jari-jari ($r$) dari lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Jari-Jari Lingkaran Bentuk Umum $x^2 + y^2 + Ax + By + C = 0$:</strong><br>\n          Titik pusat $(a, b) = \\left(-\\frac{1}{2}A, -\\frac{1}{2}B\\right)$<br>\n          Jari-jari: $r = \\sqrt{a^2 + b^2 - C}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung koordinat pusat:\n            $$a = -\\frac{1}{2}(-6) = 3, \\quad b = -\\frac{1}{2}(8) = -4$$\n          </li>\n          <li>Substitusi ke rumus jari-jari ($C = -11$):\n            $$r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif pada $C = -11$. Mengurangkan nilai negatif menghasilkan penjumlahan: $-(-11) = +11$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "persamaan-lingkaran"
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
