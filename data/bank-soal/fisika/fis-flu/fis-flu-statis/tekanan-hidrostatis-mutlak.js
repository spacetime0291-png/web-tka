/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Tekanan Hidrostatis & Mutlak (fis-flu-statis-tekanan)
 * Slug: tekanan-hidrostatis-mutlak
 * Indikator: Tekanan fluida cair (P_h = rho * g * h) dan tekanan mutlak total (P = P_0 + rho * g * h).
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-tekanan";
  const subTopicSlug = "tekanan-hidrostatis-mutlak";
  const questions = [
  {
    "id": "mudah-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Hidrostatis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang penyelam berada pada kedalaman $8\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tekanan hidrostatis yang dialami penyelam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\times 10^3\\text{ Pa}$",
      "$1{,}8\\times 10^4\\text{ Pa}$",
      "$8\\times 10^4\\text{ Pa}$",
      "$1{,}8\\times 10^5\\text{ Pa}$",
      "$8\\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Tekanan Hidrostatis Murni:</strong><br>\n          $$P_h = \\rho g h$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$P_h = (1000\\text{ kg/m}^3)(10\\text{ m/s}^2)(8\\text{ m}) = 80.000\\text{ Pa} = 8\\times 10^4\\text{ Pa}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Soal menanyakan <em>tekanan hidrostatis</em>, bukan tekanan mutlak ($P_{\\text{mutlak}} = P_0 + P_h$). Jadi tekanan atmosfer $P_0$ tidak dijumlahkan.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "tekanan-hidrostatis-mutlak"
  },
  {
    "id": "sup-fis-flu-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-tekanan",
    "category": "Tekanan Mutlak Fluida",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang penyelam berada di kedalaman $20\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$, percepatan gravitasi $g = 10\\text{ m/s}^2$). Jika tekanan atmosfer di atas permukaan danau adalah $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$, maka tekanan mutlak yang dialami penyelam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}01 \\times 10^5\\text{ Pa}$",
      "$2{,}00 \\times 10^5\\text{ Pa}$",
      "$2{,}01 \\times 10^5\\text{ Pa}$",
      "$1{,}21 \\times 10^5\\text{ Pa}$",
      "$3{,}21 \\times 10^5\\text{ Pa}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Tekanan Mutlak (Total):</strong><br>Tekanan total pada kedalaman $h$ merupakan jumlahan dari tekanan atmosfer luar dan tekanan hidrostatis zat cair: $P_{\\text{mutlak}} = P_{\\text{atm}} + \\rho g h$.</div>",
      "steps": "<ol><li>Tekanan hidrostatis: $P_h = \\rho g h = 1000 \\times 10 \\times 20 = 200.000\\text{ Pa} = 2{,}00 \\times 10^5\\text{ Pa}$.</li><li>Tekanan atmosfer: $P_{\\text{atm}} = 1{,}01 \\times 10^5\\text{ Pa}$.</li><li>Tekanan mutlak: $P = P_{\\text{atm}} + P_h = 1{,}01 \\times 10^5 + 2{,}00 \\times 10^5 = 3{,}01 \\times 10^5\\text{ Pa}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Hanya menghitung tekanan hidrostatis murni ($2{,}00 \\times 10^5\\text{ Pa}$) dan mengabaikan tekanan atmosfer di permukaan danau.</div>"
    },
    "bab": "Fluida",
    "subBab": "Tekanan Hidrostatis & Mutlak",
    "subTopic": "Tekanan Hidrostatis & Mutlak",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "tekanan-hidrostatis-mutlak"
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
