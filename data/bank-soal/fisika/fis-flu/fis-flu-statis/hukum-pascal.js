/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Pascal (fis-flu-statis-pascal)
 * Slug: hukum-pascal
 * Indikator: Penerusan tekanan ke segala arah sama besar pada dongkrak hidrolik (F_1 / A_1 = F_2 / A_2).
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-pascal";
  const subTopicSlug = "hukum-pascal";
  const questions = [
  {
    "id": "sup-fis-flu-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal Sistem Hidrolik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah dongkrak hidrolik memiliki dua pengisap berbentuk silinder dengan luas penampang pengisap kecil $A_1 = 25\\text{ cm}^2$ dan pengisap besar $A_2 = 500\\text{ cm}^2$. Jika pada pengisap besar diletakkan mobil dengan berat $10.000\\text{ N}$, maka gaya tekan minimum yang harus diberikan pada pengisap kecil agar mobil terangkat seimbang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ N}$",
      "$250\\text{ N}$",
      "$200\\text{ N}$",
      "$100\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pascal:</strong><br>Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_1 = \\frac{A_1}{A_2} F_2$.</div>",
      "steps": "<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{25}{500} = \\frac{1}{20}$.</li><li>Gaya input pada pengisap kecil: $F_1 = \\frac{1}{20} \\times 10.000 = 500\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Terbalik mengalikan rasio penampang sehingga menghasilkan nilai gaya yang tidak masuk akal ($200.000\\text{ N}$).</div>"
    },
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-pascal"
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
