/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Pemuaian Zat (fis-termo-kalor-pemuaian)
 * Slug: pemuaian-zat
 * Indikator: Pemuaian panjang (Delta L = L_0 * alpha * Delta T), luas, dan volume zat padat serta cair.
 * 
 * Total Butir Soal: 4 (Mudah: 4, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-pemuaian";
  const subTopicSlug = "pemuaian-zat";
  const questions = [
  {
    "id": "sup-fis-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Panjang Benda Padat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebatang rel baja memiliki panjang awal $10\\text{ meter}$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang baja tersebut adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pada siang hari terik suhu rel meningkat menjadi $50^\\circ\\text{C}$, maka pertambahan panjang rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}6\\text{ mm}$",
      "$1{,}8\\text{ mm}$",
      "$2{,}4\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$0{,}36\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Panjang Benda Padat:</strong><br>Pertambahan panjang zat padat sebanding dengan panjang mula-mula, koefisien muai panjang, dan kenaikan suhu: $\\Delta L = L_0 \\alpha \\Delta T$.</div>",
      "steps": "<ol><li>Panjang mula-mula: $L_0 = 10\\text{ m}$.</li><li>Perubahan suhu: $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$.</li><li>Pertambahan panjang: $\\Delta L = 10 \\times (1{,}2 \\times 10^{-5}) \\times 30 = 3{,}6 \\times 10^{-3}\\text{ m} = 3{,}6\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan dengan suhu akhir $50^\\circ\\text{C}$ tanpa mengurangkan suhu awal $20^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat"
  },
  {
    "id": "drill-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Luas Keping Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat kuningan memiliki luas mula-mula $A_0 = 2\\text{ m}^2$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang kuningan adalah $\\alpha = 2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pelat tersebut dipanaskan hingga suhunya menjadi $70^\\circ\\text{C}$, pertambahan luas pelat kuningan tersebut ($\\Delta A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 \\times 10^{-3}\\text{ m}^2$",
      "$2 \\times 10^{-3}\\text{ m}^2$",
      "$8 \\times 10^{-3}\\text{ m}^2$",
      "$4 \\times 10^{-4}\\text{ m}^2$",
      "$1 \\times 10^{-3}\\text{ m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Koefisien Pemuaian:</strong><br>• Koefisien muai luas adalah dua kali koefisien muai panjang: $\\beta = 2\\alpha$<br>• Pertambahan luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T = A_0 \\cdot (2\\alpha) \\cdot \\Delta T$</div>",
      "steps": "<ol><li>Koefisien muai luas: $\\beta = 2 \\times (2 \\times 10^{-5}) = 4 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Kenaikan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li><li>Pertambahan luas: $\\Delta A = 2 \\times (4 \\times 10^{-5}) \\times 50 = 400 \\times 10^{-5} = 4 \\times 10^{-3}\\text{ m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan 1-2-3 Dimensi:</strong><br>Panjang $\\implies \\alpha$<br>Luas $\\implies \\beta = 2\\alpha$<br>Volume $\\implies \\gamma = 3\\alpha$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat"
  },
  {
    "id": "drill-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Volume Kubus Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kubus tembaga memiliki volume awal $V_0 = 1000\\text{ cm}^3$ pada suhu $0^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka koefisien muai volume ($\\gamma$) dan pertambahan volume kubus ($\\Delta V$) saat dipanaskan hingga $100^\\circ\\text{C}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 1{,}7\\text{ cm}^3$",
      "$\\gamma = 3{,}4 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 3{,}4\\text{ cm}^3$",
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 51\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Volume Zat Padat:</strong><br>$$\\gamma = 3\\alpha$$<br>$$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Hitung $\\gamma$: $\\gamma = 3 \\times 1{,}7 \\times 10^{-5} = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Hitung $\\Delta V$: $\\Delta V = 1000 \\times (5{,}1 \\times 10^{-5}) \\times 100 = 5{,}1\\text{ cm}^3$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan nilai $\\alpha$ langsung untuk menghitung pemuaian ruang/volume tanpa mengalikan dengan 3.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat"
  },
  {
    "id": "drill2-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Penyusutan Panjang Akibat Pendinginan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seutas kawat tembaga dengan panjang $L_0 = 5\\text{ meter}$ mula-mula bersuhu $80^\\circ\\text{C}$. Kawat tersebut didinginkan hingga suhunya turun menjadi $30^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka pengurangan panjang (penyusutan) kawat tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}25\\text{ mm}$",
      "$2{,}55\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$0{,}425\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyusutan Termal:</strong><br>$$\\Delta L = L_0 \\cdot \\alpha \\cdot |\\Delta T|$$</div>",
      "steps": "<ol><li>Penurunan suhu: $|\\Delta T| = 80 - 30 = 50^\\circ\\text{C}$.</li><li>Hitung penyusutan: $\\Delta L = 5 \\times (1{,}7 \\times 10^{-5}) \\times 50 = 425 \\times 10^{-5}\\text{ m} = 4{,}25 \\times 10^{-3}\\text{ m} = 4{,}25\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Simetri Pemuaian:</strong> Rumus pemuaian berlaku dua arah: bertambah panjang saat dipanaskan ($Delta T > 0$) dan menyusut sama besarnya saat didinginkan ($Delta T < 0$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat"
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
