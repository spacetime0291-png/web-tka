/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Sub-topik: Lingkaran (mtk-geo-2)
 * Indikator: Persamaan lingkaran pusat $(0,0)$, $(a,b)$, & bentuk umum; persamaan garis singgung (titik pada lingkaran, gradien tertentu, titik luar lingkaran); keliling, luas, panjang busur, luas juring, & tembereng.
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-geo-2";
  const questions = [
  {
    "id": "mudah-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-2",
    "category": "Jari-Jari Lingkaran Bentuk Umum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lingkaran memiliki persamaan bentuk umum $x^2 + y^2 - 6x + 8y - 11 = 0$. Panjang jari-jari ($r$) dari lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Jari-Jari Lingkaran Bentuk Umum $x^2 + y^2 + Ax + By + C = 0$:</strong><br>\n          Titik pusat $(a, b) = \\left(-\\frac{1}{2}A, -\\frac{1}{2}B\\right)$<br>\n          Jari-jari: $r = \\sqrt{a^2 + b^2 - C}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung koordinat pusat:\n            $$a = -\\frac{1}{2}(-6) = 3, \\quad b = -\\frac{1}{2}(8) = -4$$\n          </li>\n          <li>Substitusi ke rumus jari-jari ($C = -11$):\n            $$r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif pada $C = -11$. Mengurangkan nilai negatif menghasilkan penjumlahan: $-(-11) = +11$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Lingkaran",
    "subTopic": "Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran"
  },
  {
    "id": "sup-mtk-geo-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-2",
    "category": "Garis Singgung Melalui Titik pada Lingkaran",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Persamaan garis singgung yang melalui titik $P(3, -4)$ pada lingkaran $x^2 + y^2 = 25$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x - 4y = 25$",
      "$3x + 4y = 25$",
      "$-4x + 3y = 25$",
      "$3x - 4y = 5$",
      "$4x - 3y = 25$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Garis Singgung Titik Singgung Lingkaran Pusat $(0,0)$:</strong><br>Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ pada titik singgung $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.</div>",
      "steps": "<ol><li>Uji titik: $3^2 + (-4)^2 = 9 + 16 = 25$ (titik $P$ tepat terletak pada lingkaran).</li><li>Substitusi ke rumus: $(3)x + (-4)y = 25 \\implies 3x - 4y = 25$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan jari-jari $r = 5$ bukannya $r^2 = 25$ pada ruas kanan persamaan garis singgung.</div>"
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Lingkaran",
    "subTopic": "Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran"
  },
  {
    "id": "sedang-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-2",
    "category": "Garis Singgung Lingkaran Gradien m",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ yang tegak lurus dengan garis $2x - y + 7 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x + 2y - 5\\sqrt{5} = 0$",
      "$2x + y - 5\\sqrt{5} = 0$",
      "$x - 2y + 5\\sqrt{5} = 0$",
      "$2x - y - 25 = 0$",
      "$x + 2y - 25 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Garis Singgung Lingkaran $x^2 + y^2 = r^2$ dengan Gradien $m$:</strong><br>\n          $$y = mx \\pm r\\sqrt{1 + m^2}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Tentukan gradien garis yang diberikan:\n            $$2x - y + 7 = 0 \\implies y = 2x + 7 \\implies m_1 = 2$$\n          </li>\n          <li>Garis singgung tegak lurus dengan garis tersebut, sehingga:\n            $$m = -\\frac{1}{m_1} = -\\frac{1}{2}$$\n          </li>\n          <li>Jari-jari lingkaran: $r = \\sqrt{25} = 5$.</li>\n          <li>Substitusi ke rumus garis singgung:\n            $$y = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\left(-\\frac{1}{2}\\right)^2} = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\frac{1}{4}} = -\\frac{1}{2}x \\pm 5\\sqrt{\\frac{5}{4}} = -\\frac{1}{2}x \\pm \\frac{5\\sqrt{5}}{2}$$\n          </li>\n          <li>Kalikan seluruh suku dengan 2:\n            $$2y = -x \\pm 5\\sqrt{5} \\implies x + 2y \\mp 5\\sqrt{5} = 0$$\n            Salah satu persamaannya adalah $x + 2y - 5\\sqrt{5} = 0$.\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa bahwa kondisi tegak lurus menuntut $m = -\\frac{1}{m_1}$. Jika menggunakan $m = 2$ (sejajar), jawaban menjadi keliru.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Lingkaran",
    "subTopic": "Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran"
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
