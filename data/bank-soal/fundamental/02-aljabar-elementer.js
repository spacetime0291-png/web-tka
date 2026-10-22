/**
 * Bank Soal TKA: Bab Fundamental (Materi Prasyarat) - Bab Fundamental
 * Sub-topik: Aljabar Elementer (mtk-fun-2)
 * Indikator: Bentuk aljabar, suku sejenis, pemfaktoran kuadrat; penyederhanaan pecahan aljabar; metode substitusi & eliminasi SPLDV dan SPLTV.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-fun-2";
  const questions = [
  {
    "id": "mudah-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-2",
    "category": "Pemfaktoran Kuadrat (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Akar-akar penyelesaian dari persamaan kuadrat $2x^2 - 7x + 3 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = 3$ atau $x = \\frac{1}{2}$",
      "$x = -3$ atau $x = -\\frac{1}{2}$",
      "$x = 2$ atau $x = \\frac{3}{2}$",
      "$x = 1$ atau $x = \\frac{7}{2}$",
      "$x = 6$ atau $x = 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Pemfaktoran Persamaan Kuadrat $ax^2 + bx + c = 0$:</strong><br>\n          Cari dua bilangan yang hasil kalinya $a \\times c = 2 \\times 3 = 6$ dan jumlahnya $b = -7$. Bilangan tersebut adalah $-6$ dan $-1$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Uraikan suku tengah:\n            $$2x^2 - 6x - x + 3 = 0$$\n          </li>\n          <li>Faktorkan secara berpasangan:\n            $$2x(x - 3) - 1(x - 3) = 0 \\implies (2x - 1)(x - 3) = 0$$\n          </li>\n          <li>Maka akarnya:\n            $$2x - 1 = 0 \\implies x = \\frac{1}{2} \\quad \\text{atau} \\quad x - 3 = 0 \\implies x = 3$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif saat pemfaktoran agar tidak terbalik menjadi negatif pada hasil akhir.\n        </div>\n      "
    }
  },
  {
    "id": "sup-mtk-fun-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-2",
    "category": "Penyederhanaan Pecahan Aljabar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Bentuk paling sederhana dari pecahan aljabar $\\frac{2x^2 - 8}{x^2 + 3x + 2}$ untuk $x \\neq -1$ dan $x \\neq -2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2(x - 2)}{x + 1}$",
      "$\\frac{2(x + 2)}{x + 1}$",
      "$\\frac{x - 2}{x + 1}$",
      "$\\frac{2(x - 4)}{x + 1}$",
      "$\\frac{2x - 4}{x + 2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyederhanaan Pecahan Bentuk Aljabar:</strong><br>Faktorkan pembilang dan penyebut ke bentuk perkalian faktor-faktor linearnya, lalu bagi dengan faktor persekutuan terbesarnya.</div>",
      "steps": "<ol><li>Faktorkan pembilang: $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$.</li><li>Faktorkan penyebut: $x^2 + 3x + 2 = (x + 1)(x + 2)$.</li><li>Bagi faktor persekutuan $(x + 2)$: $\\frac{2(x - 2)(x + 2)}{(x + 1)(x + 2)} = \\frac{2(x - 2)}{x + 1}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mencoret suku $x^2$ secara langsung tanpa memfaktorkan bentuk penjumlahan aljabar terlebih dahulu.</div>"
    }
  },
  {
    "id": "sedang-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-2",
    "category": "Sistem Persamaan Linear (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jika pasangan $(x, y)$ merupakan penyelesaian dari sistem persamaan linear:\n$$\\begin{cases} 3x + 2y = 12 \\\\ 5x - y = 7 \\end{cases}$$\nmaka nilai dari $x^2 + y^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10$",
      "$13$",
      "$17$",
      "$25$",
      "$29$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Metode Eliminasi & Substitusi SPLDV:</strong><br>\n          Kalikan persamaan kedua dengan 2 lalu jumlahkan untuk mengeliminasi variabel $y$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Kalikan persamaan kedua dengan 2:\n            $$10x - 2y = 14$$\n          </li>\n          <li>Jumlahkan dengan persamaan pertama:\n            $$(3x + 2y) + (10x - 2y) = 12 + 14$$\n            $$13x = 26 \\implies x = 2$$\n          </li>\n          <li>Substitusi $x = 2$ ke persamaan kedua:\n            $$5(2) - y = 7 \\implies 10 - y = 7 \\implies y = 3$$\n          </li>\n          <li>Hitung nilai $x^2 + y^2$:\n            $$x^2 + y^2 = 2^2 + 3^2 = 4 + 9 = 13$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda minus saat substitusi $10 - y = 7 \\implies y = 3$.\n        </div>\n      "
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
