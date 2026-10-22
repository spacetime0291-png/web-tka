/**
 * Bank Soal TKA: Bab Fundamental (Materi Prasyarat) - Bab Fundamental
 * Sub-topik: Geometri Analitik Bidang (mtk-fun-3)
 * Indikator: Titik koordinat Kartesius & jarak antartitik; persamaan garis lurus; gradien sejajar & tegak lurus; jarak titik ke garis lurus.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-fun-3";
  const questions = [
  {
    "id": "mudah-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-3",
    "category": "Garis Lurus & Gradien (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Gradien garis yang tegak lurus dengan garis $3x - 6y + 12 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$2$",
      "$-3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Gradien Dua Garis Tegak Lurus:</strong><br>\n          $$m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Ubah persamaan garis ke bentuk eksplisit $y = mx + c$:\n            $$3x - 6y + 12 = 0 \\implies 6y = 3x + 12 \\implies y = \\frac{1}{2}x + 2$$\n            Jadi, gradien garis pertama $m_1 = \\frac{1}{2}$.\n          </li>\n          <li>Garis yang tegak lurus memiliki gradien:\n            $$m_2 = -\\frac{1}{m_1} = -\\frac{1}{1/2} = -2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pilihan C (1/2) adalah gradien garis yang <em>sejajar</em>, bukan tegak lurus.\n        </div>\n      "
    }
  },
  {
    "id": "sup-mtk-fun-03",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-3",
    "category": "Jarak Antartitik Koordinat Kartesius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jarak Euclidean antara titik koordinat $A(-2, 3)$ dan titik $B(4, -5)$ pada bidang Kartesius adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10$",
      "$12$",
      "$8$",
      "$\\sqrt{74}$",
      "$14$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jarak Dua Titik Bidang Kartesius:</strong><br>$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</div>",
      "steps": "<ol><li>$\\Delta x = 4 - (-2) = 6$.</li><li>$\\Delta y = -5 - 3 = -8$.</li><li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah dalam operasi tanda negatif: $4 - (-2) \\neq 2$.</div>"
    }
  },
  {
    "id": "sedang-mtk-10",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-3",
    "category": "Jarak Titik ke Garis Lurus",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jarak tegak lurus terpendek dari titik koordinat $P(2, 3)$ ke garis lurus dengan persamaan $4x + 3y - 7 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ satuan}$",
      "$2\\text{ satuan}$",
      "$3\\text{ satuan}$",
      "$4\\text{ satuan}$",
      "$5\\text{ satuan}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Jarak Titik $(x_1, y_1)$ ke Garis $Ax + By + C = 0$:</strong><br>\n          $$d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi nilai koefisien: $A = 4, B = 3, C = -7$ serta titik $(x_1, y_1) = (2, 3)$.</li>\n          <li>Substitusi ke rumus jarak:\n            $$d = \\frac{|4(2) + 3(3) - 7|}{\\sqrt{4^2 + 3^2}} = \\frac{|8 + 9 - 7|}{\\sqrt{16 + 9}}$$\n          </li>\n          <li>Sederhanakan pembilang dan penyebut:\n            $$d = \\frac{|10|}{\\sqrt{25}} = \\frac{10}{5} = 2\\text{ satuan panjang}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda mutlak di pembilang untuk memastikan nilai jarak selalu bernilai non-negatif.\n        </div>\n      "
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
