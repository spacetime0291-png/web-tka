/**
 * Bank Soal TKA: Bab Fundamental (Materi Prasyarat) - Bab Fundamental
 * Sub-topik: Pertidaksamaan dan Nilai Mutlak (mtk-fun-4)
 * Indikator: Syarat pecahan terdefinisi; syarat bentuk akar terdefinisi; sifat dasar persamaan & pertidaksamaan nilai mutlak.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-fun-4";
  const questions = [
  {
    "id": "mudah-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-4",
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
    }
  },
  {
    "id": "sup-mtk-fun-04",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-4",
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
    }
  },
  {
    "id": "sedang-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-4",
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
