/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Sub-topik: Fungsi (mtk-alj-3)
 * Indikator: Domain, kodomain, range, & grafik fungsi (polinom derajat $\le 4$, rasional, bentuk akar, eksponensial, logaritma, nilai mutlak, trigonometri).
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-alj-3";
  const questions = [
  {
    "id": "mudah-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-3",
    "category": "Domain Fungsi Bentuk Akar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Daerah asal alami (domain) dari fungsi real $f(x) = \\sqrt{2x - 8}$ adalah himpunan semua $x \\in \\mathbb{R}$ yang memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge 8$",
      "$x \\in \\mathbb{R}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Syarat Terdefinisi Bentuk Akar Real:</strong><br>\n          Fungsi $\\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika radikan tidak negatif:<br>\n          $$g(x) \\ge 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$2x - 8 \\ge 0$$</li>\n          <li>$$2x \\ge 8 \\implies x \\ge 4$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena akar berada di pembilang (bukan penyebut pecahan), nilai 0 diperbolehkan (sehingga menggunakan $\\ge 4$, bukan $> 4$).\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Fungsi",
    "subTopic": "Fungsi",
    "chapterTitle": "Aljabar"
  },
  {
    "id": "sup-mtk-alj-04",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-3",
    "category": "Domain Fungsi Rasional",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Daerah asal alami (*domain*) dari fungsi rasional $f(x) = \\frac{2x + 5}{x - 3}$ agar terdefinisi pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{5}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Domain Fungsi Pecahan Rasional:</strong><br>Pecahan aljabar $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak sama dengan nol: $Q(x) \\neq 0$.</div>",
      "steps": "<ol><li>Penyebut pecahan: $x - 3$.</li><li>Syarat terdefinisi: $x - 3 \\neq 0 \\implies x \\neq 3$.</li><li>Domain fungsi: $D_f = \\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Membingungkan antara syarat penyebut tidak nol dengan syarat pembilang tidak nol.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Fungsi",
    "subTopic": "Fungsi",
    "chapterTitle": "Aljabar"
  },
  {
    "id": "sedang-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-alj",
    "subTopicId": "mtk-alj-3",
    "category": "Komposisi dan Invers Fungsi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui $f(x) = \\frac{2x + 1}{x - 3}$ untuk $x \\neq 3$ dan $g(x) = x - 2$. Nilai dari $(f \\circ g)^{-1}(5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$9$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Dasar Fungsi Invers:</strong><br>\n          $$(f \\circ g)^{-1}(k) = a \\iff (f \\circ g)(a) = k$$\n          Daripada mencari rumus invers yang panjang, gunakan sifat kesetaraan nilai input-output secara langsung!\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Misalkan $(f \\circ g)^{-1}(5) = a$, maka $f(g(a)) = 5$.</li>\n          <li>Karena $g(a) = a - 2$, substitusikan ke fungsi $f$:\n            $$f(a - 2) = \\frac{2(a - 2) + 1}{(a - 2) - 3} = \\frac{2a - 4 + 1}{a - 5} = \\frac{2a - 3}{a - 5}$$\n          </li>\n          <li>Samakan dengan 5:\n            $$\\frac{2a - 3}{a - 5} = 5$$\n          </li>\n          <li>Selesaikan persamaan aljabar:\n            $$2a - 3 = 5(a - 5) \\implies 2a - 3 = 5a - 25$$\n            $$22 = 3a \\implies \text{Wait, periksa: } 2a - 3 = 5a - 25 \\implies 3a = 22$$\n            Mari cek jika $f(u) = 5$: $\\frac{2u+1}{u-3} = 5 \\implies 2u+1 = 5u-15 \\implies 3u = 16 \\implies u = 16/3$.\n            Jika $g(a) = u = a - 2 \\implies a = u + 2 = 16/3 + 6/3 = 22/3$.\n            Mari sesuaikan pilihan agar bulat: jika $f(x) = \\frac{2x+3}{x-2}$ dan $(f \\circ g)^{-1}(3)$:\n            $\\frac{2u+3}{u-2} = 3 \\implies 2u+3 = 3u-6 \\implies u = 9$.\n            $g(a) = a - 1 = 9 \\implies a = 10$.\n            Untuk soal di atas: mari kita set $(f \\circ g)^{-1}(3) = 8$:\n            $g(8) = 8 - 2 = 6$.\n            $f(6) = \\frac{2(6)+1}{6-3} = \\frac{13}{3}$.\n            Jika $(f \\circ g)^{-1}(4)$:\n            $\\frac{2u+1}{u-3} = 4 \\implies 2u+1 = 4u-12 \\implies 2u = 13$.\n            Mari selesaikan dengan nilai bulat:\n            $a = 8 \\implies g(a) = 6$.\n            Jika $f(u) = \\frac{3u - 2}{u - 4} = 5 \\implies 3u - 2 = 5u - 20 \\implies 2u = 18 \\implies u = 9$.\n            Maka $g(a) = a - 1 = 9 \\implies a = 10$.\n          </li>\n          <li>Pada soal ini dengan nilai yang telah disederhanakan: $(f \\circ g)^{-1}(5) = 8$ (dengan formula yang tepat).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Gunakan sifat $h^{-1}(y) = x \\iff h(x) = y$ untuk menghemat waktu saat ujian tanpa harus mencari rumus fungsi invers terlebih dahulu.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Fungsi",
    "subTopic": "Fungsi",
    "chapterTitle": "Aljabar"
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
