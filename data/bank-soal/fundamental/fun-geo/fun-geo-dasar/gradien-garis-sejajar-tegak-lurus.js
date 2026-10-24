/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Gradien Garis Sejajar & Tegak Lurus (fun-geo-dasar-gradien)
 * Slug: gradien-garis-sejajar-tegak-lurus
 * Indikator: Gradien kemiringan garis lurus, syarat garis sejajar (m1 = m2) dan tegak lurus (m1 * m2 = -1).
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-gradien";
  const subTopicSlug = "gradien-garis-sejajar-tegak-lurus";
  const questions = [
  {
    "id": "mudah-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subTopicId": "fun-geo-dasar-gradien",
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
    },
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "subChapterId": "fun-geo-dasar",
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus"
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
