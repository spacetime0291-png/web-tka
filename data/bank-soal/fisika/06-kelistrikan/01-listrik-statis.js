/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Sub-topik: Listrik Statis (fis-lis-1)
 * Indikator: Muatan & interaksi elektrostatik; Hukum Coulomb; kuat medan listrik; potensial & energi potensial listrik.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-1";
  const questions = [
  {
    "id": "mudah-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-1",
    "category": "Hukum Coulomb",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah muatan titik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta elektrostatis $k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar gaya tolak-menolak antara kedua muatan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}3\\text{ N}$",
      "$0{,}6\\text{ N}$",
      "$1{,}2\\text{ N}$",
      "$3{,}0\\text{ N}$",
      "$6{,}0\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum Coulomb:</strong><br>\n          $$F = k \\frac{|q_1 q_2|}{r^2}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Konversi satuan ke SI: $q_1 = 2\\times 10^{-6}\\text{ C}$, $q_2 = 3\\times 10^{-6}\\text{ C}$, $r = 30\\text{ cm} = 0{,}3\\text{ m} = 3\\times 10^{-1}\\text{ m}$.</li>\n          <li>$$F = (9\\times 10^9) \\frac{(2\\times 10^{-6})(3\\times 10^{-6})}{(3\\times 10^{-1})^2} = (9\\times 10^9) \\frac{6\\times 10^{-12}}{9\\times 10^{-2}} = 0{,}6\\text{ N}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengubah satuan $\\text{cm}$ ke $\\text{meter}$ atau $\\mu\\text{C}$ ke $\\text{Coulomb}$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Listrik Statis",
    "subTopic": "Listrik Statis",
    "chapterTitle": "Kelistrikan"
  },
  {
    "id": "sup-fis-lis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-1",
    "category": "Potensial Listrik & Usaha Muatan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Usaha luar yang diperlukan untuk memindahkan sebuah muatan uji positif $q = 5\\,\\mu\\text{C}$ dari titik $A$ yang berpotensial listrik $20\\text{ V}$ ke titik $B$ yang berpotensial listrik $80\\text{ V}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3 \\times 10^{-4}\\text{ Joule}$",
      "$1 \\times 10^{-4}\\text{ Joule}$",
      "$4 \\times 10^{-4}\\text{ Joule}$",
      "$5 \\times 10^{-4}\\text{ Joule}$",
      "$6 \\times 10^{-4}\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Usaha dan Beda Potensial Listrik:</strong><br>Usaha untuk memindahkan muatan $q$ dari potensial $V_A$ ke $V_B$ adalah $W = q \\Delta V = q (V_B - V_A)$.</div>",
      "steps": "<ol><li>Muatan: $q = 5 \\times 10^{-6}\\text{ C}$.</li><li>Beda potensial: $\\Delta V = 80 - 20 = 60\\text{ V}$.</li><li>Usaha: $W = (5 \\times 10^{-6}) \\times 60 = 300 \\times 10^{-6} = 3 \\times 10^{-4}\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan muatan dengan nilai potensial akhir saja ($5\\,\\mu\\text{C} \\times 80\\text{ V}$).</div>"
    },
    "bab": "Kelistrikan",
    "subBab": "Listrik Statis",
    "subTopic": "Listrik Statis",
    "chapterTitle": "Kelistrikan"
  },
  {
    "id": "sedang-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-1",
    "category": "Kuat Medan Listrik Nol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah muatan titik $q_A = +4\\,\\mu\\text{C}$ dan $q_B = +9\\,\\mu\\text{C}$ terpisah sejauh $50\\text{ cm}$ di udara. Letak suatu titik pada garis hubung kedua muatan tersebut di mana kuat medan listrik totalnya sama dengan nol adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ cm}$ dari muatan A",
      "$20\\text{ cm}$ dari muatan A",
      "$25\\text{ cm}$ dari muatan A",
      "$30\\text{ cm}$ dari muatan A",
      "$35\\text{ cm}$ dari muatan A"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kuat Medan Listrik Nol di Antara Dua Muatan Sejenis:</strong><br>\n          Karena kedua muatan sejenis (keduanya positif), kuat medan listrik bernilai nol di suatu titik di antara keduanya:<br>\n          $$E_A = E_B \\implies k \\frac{q_A}{x^2} = k \\frac{q_B}{(d - x)^2} \\implies \\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{d - x}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Tarik akar pada kedua ruas:\n            $$\\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{50 - x} \\implies \\frac{2}{x} = \\frac{3}{50 - x}$$\n          </li>\n          <li>Perkalian silang:\n            $$2(50 - x) = 3x \\implies 100 - 2x = 3x$$\n            $$5x = 100 \\implies x = 20\\text{ cm}$$\n          </li>\n          <li>Jadi titik tersebut berjarak $20\\text{ cm}$ dari muatan A (atau $30\\text{ cm}$ dari muatan B).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan pertanyaan: jarak diukur dari muatan A atau muatan B. Jarak dari A adalah $20\\text{ cm}$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Listrik Statis",
    "subTopic": "Listrik Statis",
    "chapterTitle": "Kelistrikan"
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
