/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Cepat Rambat Bunyi (fis-gel-bunyi-cepatrambat)
 * Slug: cepat-rambat-bunyi
 * Indikator: Kecepatan rambat bunyi pada zat padat, zat cair, dan gas ideal.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-cepatrambat";
  const subTopicSlug = "cepat-rambat-bunyi";
  const questions = [
  {
    "id": "mudah-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sumber bunyi menghasilkan gelombang bunyi dengan frekuensi $680\\text{ Hz}$. Jika cepat rambat bunyi di udara pada saat itu adalah $340\\text{ m/s}$, maka panjang gelombang bunyi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}25\\text{ meter}$",
      "$0{,}50\\text{ meter}$",
      "$1{,}00\\text{ meter}$",
      "$2{,}00\\text{ meter}$",
      "$4{,}00\\text{ meter}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Dasar Cepat Rambat Gelombang:</strong><br>\n          $$v = \\lambda f \\implies \\lambda = \\frac{v}{f}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\lambda = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}5\\text{ meter}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan membalik pembagian menjadi $f/v = 2\\text{ m}$. Rumus yang benar adalah $v/f$.\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "cepat-rambat-bunyi"
  },
  {
    "id": "drill2-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-cepatrambat",
    "category": "Cepat Rambat Bunyi pada Zat Padat (Modulus Young)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat gelombang bunyi longitudinal di dalam sebuah rel baja bergantung pada Modulus Elastisitas Young ($E$) dan massa jenis bajanya ($\\rho$). Jika Modulus Young baja adalah $E = 2 \\times 10^{11}\\text{ N/m}^2$ dan massa jenisnya $\\rho = 8000\\text{ kg/m}^3$, kelajuan rambat bunyi di dalam rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5000\\text{ m/s}$",
      "$2500\\text{ m/s}$",
      "$4000\\text{ m/s}$",
      "$1000\\text{ m/s}$",
      "$25000\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Gelombang Bunyi pada Zat Padat:</strong><br>$$v = \\sqrt{\\frac{E}{\\rho}}$$</div>",
      "steps": "<ol><li>Hitung pembagian di bawah akar: $\\frac{E}{\\rho} = \\frac{2 \\times 10^{11}}{8 \\times 10^3} = \\frac{2}{8} \\times 10^8 = 0{,}25 \\times 10^8 = 25 \\times 10^6$.</li><li>Tarik akar kuadrat: $v = \\sqrt{25 \\times 10^6} = 5 \\times 10^3 = 5000\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Gelombang Mekanik:</strong> Bunyi merambat paling cepat pada zat padat ($v \\approx 5000\\text{ m/s}$), lebih lambat pada zat cair ($v \\approx 1500\\text{ m/s}$), dan paling lambat pada gas/udara ($v \\approx 340\\text{ m/s}$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cepat Rambat Bunyi",
    "subTopic": "Cepat Rambat Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "cepat-rambat-bunyi"
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
