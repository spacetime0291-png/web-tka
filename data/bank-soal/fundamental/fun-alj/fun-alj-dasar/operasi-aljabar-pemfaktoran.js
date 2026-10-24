/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Aljabar Elementer
 * Bab Kecil: Aljabar Dasar (fun-alj-dasar)
 * Sub-Bab: Operasi Aljabar & Pemfaktoran (fun-alj-dasar-operasi)
 * Slug: operasi-aljabar-pemfaktoran
 * Indikator: Operasi distributif aljabar, pemfaktoran selisih kuadrat, dan bentuk kuadrat sempurna.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-alj-dasar-operasi";
  const subTopicSlug = "operasi-aljabar-pemfaktoran";
  const questions = [
  {
    "id": "mudah-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-operasi",
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
    },
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "operasi-aljabar-pemfaktoran"
  },
  {
    "id": "sedang-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subTopicId": "fun-alj-dasar-operasi",
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
    },
    "bab": "Aljabar Elementer",
    "subBab": "Operasi Aljabar & Pemfaktoran",
    "subTopic": "Operasi Aljabar & Pemfaktoran",
    "chapterTitle": "Aljabar Elementer",
    "subChapterId": "fun-alj-dasar",
    "subTopicSlug": "operasi-aljabar-pemfaktoran"
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
