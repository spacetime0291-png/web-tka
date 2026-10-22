/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Sub-topik: Fluida Statis (fis-flu-1)
 * Indikator: Tekanan hidrostatis & mutlak; Hukum Pascal sistem hidrolik; Hukum Archimedes (terapung, melayang, tenggelam).
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 2, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-1";
  const questions = [
  {
    "id": "mudah-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-1",
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
    "subBab": "Fluida Statis",
    "subTopic": "Fluida Statis",
    "chapterTitle": "Fluida"
  },
  {
    "id": "sup-fis-flu-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-1",
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
    "subBab": "Fluida Statis",
    "subTopic": "Fluida Statis",
    "chapterTitle": "Fluida"
  },
  {
    "id": "sedang-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-1",
    "category": "Hukum Archimedes & Kerapatan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah balok kayu terapung di perbatasan dua lapisan zat cair yang tidak bercampur. Bagian bawah balok tercelup dalam lapisan zat cair A (massa jenis $\\rho_A = 1200\\text{ kg/m}^3$) sebanyak $40\\%$ dari volume totalnya, dan $35\\%$ volume balok tercelup dalam lapisan zat cair B (massa jenis $\\rho_B = 800\\text{ kg/m}^3$), sedangkan sisanya muncul di udara. Massa jenis balok kayu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$760\\text{ kg/m}^3$",
      "$780\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$1000\\text{ kg/m}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Keseimbangan Benda Terapung Multilapis:</strong><br>\n          Gaya berat total benda sama dengan jumlah seluruh gaya apung Archimedes dari fluida-fluida yang terdesak:<br>\n          $$W = F_{A1} + F_{A2} \\implies \\rho_b V_b g = \\rho_A V_{A} g + \\rho_B V_{B} g$$\n          $$\\rho_b = \\rho_A \\left(\\frac{V_A}{V_b}\\right) + \\rho_B \\left(\\frac{V_B}{V_b}\\right)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Diketahui rasio volume tercelup:<br>\n            $\\frac{V_A}{V_b} = 40\\% = 0{,}40$ dan $\\frac{V_B}{V_b} = 35\\% = 0{,}35$.\n          </li>\n          <li>Substitusi ke persamaan keseimbangan apung:<br>\n            $$\\rho_b = (1200 \\times 0{,}40) + (800 \\times 0{,}35)$$\n          </li>\n          <li>Hitung masing-masing kontribusi:<br>\n            $$1200 \\times 0{,}40 = 480$$\n            $$800 \\times 0{,}35 = 280$$\n            $$\\rho_b = 480 + 280 = 760\\text{ kg/m}^3$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa volume balok di udara ($25\\%$) tidak memberikan gaya apung yang signifikan karena massa jenis udara sangat kecil dibanding cairan dan diabaikan.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Fluida Statis",
    "subTopic": "Fluida Statis",
    "chapterTitle": "Fluida"
  },
  {
    "id": "sup-fis-flu-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-1",
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
    "subBab": "Fluida Statis",
    "subTopic": "Fluida Statis",
    "chapterTitle": "Fluida"
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
