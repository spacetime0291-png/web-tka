/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Energi Potensial & Potensial Listrik (fis-lis-statis-potensial)
 * Slug: energi-potensial-listrik
 * Indikator: Skalar potensial listrik (V = k * q / r), energi potensial (Ep = q * V), dan usaha gerak muatan.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-potensial";
  const subTopicSlug = "energi-potensial-listrik";
  const questions = [
  {
    "id": "sup-fis-lis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-potensial",
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
    "subBab": "Energi Potensial & Potensial Listrik",
    "subTopic": "Energi Potensial & Potensial Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "energi-potensial-listrik"
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
