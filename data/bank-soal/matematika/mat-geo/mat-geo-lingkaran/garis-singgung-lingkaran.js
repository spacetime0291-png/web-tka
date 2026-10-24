/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Garis Singgung Lingkaran (mat-geo-lingkaran-singgung)
 * Slug: garis-singgung-lingkaran
 * Indikator: Persamaan garis singgung lingkaran di titik singgung dan garis singgung bergradien m.
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-singgung";
  const subTopicSlug = "garis-singgung-lingkaran";
  const questions = [
  {
    "id": "sup-mtk-geo-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-singgung",
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
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "garis-singgung-lingkaran"
  },
  {
    "id": "sedang-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-singgung",
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
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "garis-singgung-lingkaran"
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
