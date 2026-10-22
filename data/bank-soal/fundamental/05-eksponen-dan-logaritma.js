/**
 * Bank Soal TKA: Bab Fundamental (Materi Prasyarat) - Bab Fundamental
 * Sub-topik: Eksponen dan Logaritma (mtk-fun-5)
 * Indikator: Sifat eksponen; persamaan eksponen; sifat & persamaan logaritma.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-fun-5";
  const questions = [
  {
    "id": "mudah-mtk-04",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-5",
    "category": "Sifat Dasar Logaritma (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai dari ekspresi logaritma $^2\\log 24 + ^2\\log 6 - ^2\\log 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Operasi Logaritma Basis Sama:</strong><br>\n          $$^a\\log b + ^a\\log c = ^a\\log(b \\cdot c)$$\n          $$^a\\log b - ^a\\log c = ^a\\log\\left(\\frac{b}{c}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Gabungkan numerus dengan basis 2:\n            $$^2\\log\\left( \\frac{24 \\times 6}{9} \\right)$$\n          </li>\n          <li>Sederhanakan pecahan di dalam numerus:\n            $$\\frac{144}{9} = 16$$\n          </li>\n          <li>Hitung nilai logaritma:\n            $$^2\\log 16 = ^2\\log(2^4) = 4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan basis logaritma sama sebelum menggabungkan numerus.\n        </div>\n      "
    },
    "bab": "Bab Fundamental",
    "subBab": "Eksponen dan Logaritma",
    "subTopic": "Eksponen dan Logaritma",
    "chapterTitle": "Bab Fundamental"
  },
  {
    "id": "sup-mtk-fun-05",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-5",
    "category": "Sifat Perubahan Basis Logaritma",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika diketahui $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^{10}\\log 15$ dinyatakan dalam variabel $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a + b}{1 + b}$",
      "$\\frac{a + b}{a + 1}$",
      "$\\frac{a \\cdot b}{1 + b}$",
      "$\\frac{a + 1}{b + 1}$",
      "$\\frac{a + b}{2 + b}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Perubahan Basis Logaritma:</strong><br>$^c\\log d = \\frac{^p\\log d}{^p\\log c}$. Ubah ke basis referensi yang diketahui (basis 2).</div>",
      "steps": "<ol><li>Ubah basis 10 ke basis 2: $^{10}\\log 15 = \\frac{^2\\log 15}{^2\\log 10}$.</li><li>Faktorkan numerus prima: $^{10}\\log 15 = \\frac{^2\\log (3 \\times 5)}{^2\\log (2 \\times 5)}$.</li><li>Terapkan sifat perkalian: $\\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 5}$.</li><li>Substitusi: $\\frac{a + b}{1 + b}$ (karena $^2\\log 2 = 1$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah menganggap $^2\\log 10 = 2 \\times ^2\\log 5$ bukannya $^2\\log 2 + ^2\\log 5 = 1 + b$.</div>"
    },
    "bab": "Bab Fundamental",
    "subBab": "Eksponen dan Logaritma",
    "subTopic": "Eksponen dan Logaritma",
    "chapterTitle": "Bab Fundamental"
  },
  {
    "id": "sedang-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-5",
    "category": "Persamaan Eksponensial Kuadrat (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jika $x_1$ dan $x_2$ adalah akar-akar real yang memenuhi persamaan eksponen $3^{2x+1} - 28 \\cdot 3^x + 9 = 0$ dengan $x_1 < x_2$, maka nilai dari $2x_1 + x_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Substitusi Persamaan Eksponen ke Bentuk Kuadrat:</strong><br>\n          Misalkan $u = 3^x$ dengan syarat $u > 0$.<br>\n          Maka $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Bentuk persamaan dalam variabel $u$:\n            $$3u^2 - 28u + 9 = 0$$\n          </li>\n          <li>Faktorkan persamaan kuadrat:\n            $$(3u - 1)(u - 9) = 0$$\n            Sehingga diperoleh $u = \\frac{1}{3}$ atau $u = 9$.\n          </li>\n          <li>Kembalikan ke variabel asli $x$:\n            $$3^x = \\frac{1}{3} = 3^{-1} \\implies x_1 = -1$$\n            $$3^x = 9 = 3^2 \\implies x_2 = 2$$\n          </li>\n          <li>Hitung nilai $2x_1 + x_2$:\n            $$2(-1) + 2 = -2 + 2 = 0$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa memisahkan konstanta pangkat: $3^{2x+1} = 3 \\cdot (3^x)^2$. Jika ditulis langsung $u^2$ tanpa pengali 3, pemfaktoran tidak akan menghasilkan akar yang tepat.\n        </div>\n      "
    },
    "bab": "Bab Fundamental",
    "subBab": "Eksponen dan Logaritma",
    "subTopic": "Eksponen dan Logaritma",
    "chapterTitle": "Bab Fundamental"
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
