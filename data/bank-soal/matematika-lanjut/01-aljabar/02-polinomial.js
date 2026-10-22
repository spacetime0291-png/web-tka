/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Sub-topik: Polinomial (mtk-alj-2)
 * Indikator: Operasi polinomial orde <= 4; pembagian bersusun & skema Horner; pemfaktoran suku banyak hingga faktor linear; Teorema Sisa; Teorema Faktor.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-alj-2";
  const questions = [
  {
    "id": "mudah-mtk-09",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-2",
    "category": "Polinomial - Teorema Sisa Pembagian",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sisa pembagian suku banyak $P(x) = 2x^3 - 5x^2 + 4x - 6$ oleh pembagi linear $(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4$",
      "$-2$",
      "$0$",
      "$2$",
      "$4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Sisa Suku Banyak:</strong><br>\n          Jika polinomial $P(x)$ dibagi oleh $(x - c)$, maka sisa pembagiannya adalah $S = P(c)$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Pembuat nol pembagi: $x - 2 = 0 \\implies x = 2$.</li>\n          <li>Substitusi $x = 2$ ke dalam $P(x)$:\n            $$S = P(2) = 2(2^3) - 5(2^2) + 4(2) - 6$$\n            $$S = 2(8) - 5(4) + 8 - 6 = 16 - 20 + 8 - 6 = -2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering keliru tanda substitusi menjadi $P(-2)$. Pembagi $(x - c)$ menghasilkan nilai evaluasi $x = +c$.\n        </div>\n      "
    }
  },
  {
    "id": "sup-mtk-alj-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-2",
    "category": "Teorema Faktor Polinomial",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika suku banyak $P(x) = x^3 - 3x^2 + ax - 4$ habis dibagi oleh $(x - 2)$, maka nilai dari konstanta $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$2$",
      "$-2$",
      "$-4$",
      "$6$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Faktor:</strong><br>Bentuk $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika $P(k) = 0$.</div>",
      "steps": "<ol><li>Karena habis dibagi $(x - 2)$, maka $P(2) = 0$.</li><li>Substitusi $x = 2$: $(2)^3 - 3(2)^2 + a(2) - 4 = 0$.</li><li>$8 - 12 + 2a - 4 = 0 \\implies 2a - 8 = 0 \\implies 2a = 8 \\implies a = 4$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Keliru mensubstitusikan nilai $x = -2$ bukannya pembuat nol pembagi $x = 2$.</div>"
    }
  },
  {
    "id": "sedang-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-2",
    "category": "Teorema Sisa Polinomial",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu suku banyak $P(x)$ jika dibagi oleh $(x - 2)$ bersisa $11$, dan jika dibagi oleh $(x + 1)$ bersisa $-1$. Sisa pembagian suku banyak $P(x)$ jika dibagi oleh $(x^2 - x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4x + 3$",
      "$3x + 5$",
      "$4x - 3$",
      "$2x + 7$",
      "$5x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Sisa Polinomial Berderajat 2:</strong><br>\n          Jika pembagi berderajat 2 yaitu $D(x) = (x - x_1)(x - x_2)$, maka sisa pembagian adalah linear: $S(x) = ax + b$.<br>\n          Berdasarkan Teorema Sisa:<br>\n          $$P(x_1) = S(x_1) = a x_1 + b$$\n          $$P(x_2) = S(x_2) = a x_2 + b$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Faktorkan pembagi: $x^2 - x - 2 = (x - 2)(x + 1)$.</li>\n          <li>Berdasarkan informasi soal:\n            $$P(2) = 11 \\implies 2a + b = 11$$\n            $$P(-1) = -1 \\implies -a + b = -1$$\n          </li>\n          <li>Eliminasi kedua persamaan (kurangkan):\n            $$(2a + b) - (-a + b) = 11 - (-1)$$\n            $$3a = 12 \\implies a = 4$$\n          </li>\n          <li>Substitusi $a = 4$ ke persamaan kedua:\n            $$-4 + b = -1 \\implies b = 3$$\n          </li>\n          <li>Maka sisa pembagian $S(x) = 4x + 3$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif saat substitusi $P(-1)$: $-a + b = -1$. Kesalahan tanda $a + b = -1$ sering membuat nilai $a$ dan $b$ keliru.\n        </div>\n      "
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
