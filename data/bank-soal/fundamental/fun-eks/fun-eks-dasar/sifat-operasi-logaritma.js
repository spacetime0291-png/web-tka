/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Sifat Operasi Logaritma (fun-eks-dasar-logaritma)
 * Slug: sifat-operasi-logaritma
 * Indikator: Sifat dasar logaritma: log(ab) = log a + log b, log(a/b) = log a - log b, log(a^n) = n log a.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-logaritma";
  const subTopicSlug = "sifat-operasi-logaritma";
  const questions = [
  {
    "id": "mudah-mtk-04",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-logaritma",
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
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "sifat-operasi-logaritma"
  },
  {
    "id": "sedang-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-logaritma",
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
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Operasi Logaritma",
    "subTopic": "Sifat Operasi Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "sifat-operasi-logaritma"
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
