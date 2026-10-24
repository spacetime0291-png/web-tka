/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Pertidaksamaan Nilai Mutlak (fun-mutlak-dasar-pertidaksamaan)
 * Slug: pertidaksamaan-nilai-mutlak
 * Indikator: Sifat penyelesaian pertidaksamaan nilai mutlak (|f(x)| < a dan |f(x)| > a).
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-pertidaksamaan";
  const subTopicSlug = "pertidaksamaan-nilai-mutlak";
  const questions = [
  {
    "id": "mudah-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Satu Variabel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Himpunan semua nilai real $x$ yang memenuhi pertidaksamaan nilai mutlak $|2x - 3| < 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2 < x < 5$",
      "$-5 < x < 2$",
      "$x < -2 \\text{ atau } x > 5$",
      "$-2 \\le x \\le 5$",
      "$-5 < x < 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Dasar Pertidaksamaan Nilai Mutlak:</strong><br>\n          $$|u| < k \\iff -k < u < k \\quad (k > 0)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Terapkan sifat nilai mutlak:\n            $$-7 < 2x - 3 < 7$$\n          </li>\n          <li>Tambahkan 3 pada seluruh ruas:\n            $$-7 + 3 < 2x < 7 + 3 \\implies -4 < 2x < 10$$\n          </li>\n          <li>Bagi dengan 2:\n            $$-2 < x < 5$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Tanda pertidaksamaan pada soal adalah $<$ murni (tanpa sama dengan), sehingga batas penyelesaian juga tidak memuat tanda sama dengan.\n        </div>\n      "
    },
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicSlug": "pertidaksamaan-nilai-mutlak"
  },
  {
    "id": "sedang-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Himpunan semua nilai $x$ real yang memenuhi pertidaksamaan $|2x - 1| \\le |x + 4|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1 \\le x \\le 5$",
      "$-5 \\le x \\le 1$",
      "$x \\le -1$ atau $x \\ge 5$",
      "$1 \\le x \\le 5$",
      "$-3 \\le x \\le 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Metode Kuadrat Kedua Ruas $|A| \\le |B|$:</strong><br>\n          Karena kedua ruas non-negatif, kuadratkan kedua ruas:<br>\n          $$A^2 \\le B^2 \\iff A^2 - B^2 \\le 0 \\iff (A - B)(A + B) \\le 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dengan $A = 2x - 1$ dan $B = x + 4$:\n            $$( (2x - 1) - (x + 4) )( (2x - 1) + (x + 4) ) \\le 0$$\n          </li>\n          <li>Sederhanakan masing-masing faktor aljabar:\n            $$(x - 5)(3x + 3) \\le 0 \\implies 3(x - 5)(x + 1) \\le 0$$\n          </li>\n          <li>Bagi dengan 3:\n            $$(x + 1)(x - 5) \\le 0$$\n          </li>\n          <li>Pembuat nol adalah $x = -1$ dan $x = 5$. Karena tanda pertidaksamaan $\\le 0$, daerah penyelesaian berada di antara kedua nilai pembuat nol:\n            $$-1 \\le x \\le 5$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hati-hati dengan tanda kurung saat mengurangkan $(2x - 1) - (x + 4) = 2x - 1 - x - 4 = x - 5$. Kesalahan tanda $- (x+4)$ menjadi $-x + 4$ akan menghasilkan titik uji yang keliru.\n        </div>\n      "
    },
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicSlug": "pertidaksamaan-nilai-mutlak"
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
