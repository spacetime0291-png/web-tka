/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Kuat Medan Listrik (fis-lis-statis-medan)
 * Slug: kuat-medan-listrik
 * Indikator: Vektor kuat medan listrik (E = k * q / r^2) dan resultan medan listrik gabungan.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-medan";
  const subTopicSlug = "kuat-medan-listrik";
  const questions = [
  {
    "id": "sedang-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-medan",
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
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "kuat-medan-listrik"
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
