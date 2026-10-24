/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Rangkaian Seri dan Paralel (fis-lis-dc-rangkaian)
 * Slug: rangkaian-seri-paralel
 * Indikator: Hambatan pengganti seri, paralel, pembagi tegangan, dan pembagi arus listrik.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-rangkaian";
  const subTopicSlug = "rangkaian-seri-paralel";
  const questions = [
  {
    "id": "mudah-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Rangkaian Resistor Campuran Seri-Paralel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah resistor masing-masing bernilai $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $R_3 = 4\\,\\Omega$ dirangkai. Resistor $R_1$ dan $R_2$ dipasang secara paralel, kemudian kombinasi paralel tersebut dihubungkan seri dengan resistor $R_3$. Hambatan pengganti total rangkaian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\,\\Omega$",
      "$6\\,\\Omega$",
      "$8\\,\\Omega$",
      "$10\\,\\Omega$",
      "$22\\,\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hambatan Pengganti Seri & Paralel:</strong><br>\n          • Paralel dua resistor: $R_p = \\frac{R_1 R_2}{R_1 + R_2}$<br>\n          • Seri gabungan: $R_{\\text{total}} = R_p + R_3$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung hambatan paralel $R_1$ dan $R_2$:\n            $$R_p = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$$\n          </li>\n          <li>Jumlahkan secara seri dengan $R_3$:\n            $$R_{\\text{total}} = R_p + R_3 = 4\\,\\Omega + 4\\,\\Omega = 8\\,\\Omega$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan langsung menjumlahkan seluruh resistor ($6 + 12 + 4 = 22\\,\\Omega$), perhatikan hubungan paralel antara $R_1$ dan $R_2$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "rangkaian-seri-paralel"
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
