/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Dinamis (fis-flu-dinamis)
 * Sub-Bab: Debit & Persamaan Kontinuitas (fis-flu-dinamis-kontinuitas)
 * Slug: debit-persamaan-kontinuitas
 * Indikator: Laju aliran debit (Q = A * v) dan kekekalan massa fluida inkompresibel (A_1 * v_1 = A_2 * v_2).
 * 
 * Total Butir Soal: 3 (Mudah: 1, Sedang: 1, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-dinamis-kontinuitas";
  const subTopicSlug = "debit-persamaan-kontinuitas";
  const questions = [
  {
    "id": "mudah-fis-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Persamaan Kontinuitas & Debit Fluida",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Minyak mengalir melalui pipa mendatar yang memiliki luas penampang $A_1 = 20\\text{ cm}^2$ dengan kelajuan $v_1 = 2\\text{ m/s}$. Jika pipa tersebut menyempit hingga luas penampangnya menjadi $A_2 = 5\\text{ cm}^2$, kelajuan aliran minyak pada penampang sempit ($v_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Kontinuitas Fluida Inkompresibel:</strong><br>\n          Debit aliran konstan di setiap penampang pipa:<br>\n          $$Q_1 = Q_2 \\implies A_1 v_1 = A_2 v_2$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi nilai penampang dan kelajuan:\n            $$20\\text{ cm}^2 \\times 2\\text{ m/s} = 5\\text{ cm}^2 \\times v_2$$\n          </li>\n          <li>Hitung nilai $v_2$:\n            $$40 = 5 v_2 \\implies v_2 = \\frac{40}{5} = 8\\text{ m/s}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena satuan penampang kedua sisi sama-sama $\\text{cm}^2$, tidak perlu mengonversi ke $\\text{m}^2$ asalkan satuannya konsisten.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas"
  },
  {
    "id": "sedang-fis-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Teorema Torricelli - Jarak Pancaran Air",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah tangki air silinder besar terbuka diletakkan di atas tanah mendatar. Pada dinding tangki terdapat sebuah lubang kecil pada kedalaman $h_1 = 1{,}8\\text{ meter}$ di bawah permukaan air. Jika lubang tersebut berada pada ketinggian $h_2 = 3{,}2\\text{ meter}$ di atas permukaan tanah ($g = 10\\text{ m/s}^2$), jarak jatuh pancaran air secara horizontal ($x$) di tanah diukur dari dasar dinding tangki adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}4\\text{ meter}$",
      "$3{,}6\\text{ meter}$",
      "$4{,}8\\text{ meter}$",
      "$5{,}4\\text{ meter}$",
      "$6{,}0\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Torricelli & Jarak Pancaran Maksimum:</strong><br>\n          • Kelajuan semburan mendatar: $v = \\sqrt{2 g h_1}$<br>\n          • Waktu jatuh bebas: $t = \\sqrt{\\frac{2 h_2}{g}}$<br>\n          • Jarak pancaran horizontal: $x = v \\cdot t = 2\\sqrt{h_1 \\cdot h_2}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi nilai kedalaman $h_1 = 1{,}8\\text{ m}$ dan ketinggian $h_2 = 3{,}2\\text{ m}$:\n            $$x = 2\\sqrt{1{,}8 \\times 3{,}2}$$\n          </li>\n          <li>Hitung perkalian dalam akar:\n            $$1{,}8 \\times 3{,}2 = 5{,}76$$\n          </li>\n          <li>Tarik akar kuadrat:\n            $$\\sqrt{5{,}76} = 2{,}4$$\n            $$x = 2 \\times 2{,}4 = 4{,}8\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering lupa mengalikan dengan angka 2 pada rumus jarak $x = 2\\sqrt{h_1 h_2}$ sehingga terkecoh memilih $2{,}4\\text{ meter}$.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas"
  },
  {
    "id": "hots-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Fluida Dinamis & Teorema Torricelli",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Sebuah tangki silinder terbuka berdiameter besar berisi air setinggi $H = 5\\text{ m}$. Pada dinding samping tangki terdapat lubang bocor kecil dengan luas penampang $A = 2\\text{ cm}^2$ yang berada pada kedalaman $h = 3{,}2\\text{ m}$ dari permukaan air. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$ dan $g = 10\\text{ m/s}^2$, tentukan kelajuan pancaran air $(v)$ yang keluar dari lubang serta besar gaya reaksi dorong horizontal $(F_{\\text{reaksi}})$ yang dialami tangki akibat pancaran fluida tersebut!",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 12{,}8\\text{ N}$",
      "$v = 10\\text{ m/s}$ dan $F_{\\text{reaksi}} = 20{,}0\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 25{,}6\\text{ N}$",
      "$v = 6\\text{ m/s}$ dan $F_{\\text{reaksi}} = 7{,}2\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 6{,}4\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Torricelli & Gaya Reaksi Aliran Fluida:</strong><br>\n          1. Kecepatan pancaran Torricelli: $v = \\sqrt{2gh}$ (dengan $h$ kedalaman dari permukaan air)<br>\n          2. Debit aliran massa: $\\dot{m} = \\rho Q = \\rho A v$<br>\n          3. Gaya reaksi dorong impuls fluida (Hukum III Newton): $F_{\\text{reaksi}} = \\dot{m} v = \\rho A v^2$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Kelajuan Pancaran Air $(v)$:</strong><br>\n            $$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 3{,}2} = \\sqrt{64} = 8\\text{ m/s}$$\n          </li>\n          <li><strong>Konversi Luas Penampang ke Satuan SI:</strong><br>\n            $$A = 2\\text{ cm}^2 = 2\\times 10^{-4}\\text{ m}^2$$\n          </li>\n          <li><strong>Hitung Gaya Reaksi Dorong $(F_{\\text{reaksi}})$:</strong><br>\n            $$F_{\\text{reaksi}} = \\rho A v^2 = (1000\\text{ kg/m}^3)(2\\times 10^{-4}\\text{ m}^2)(8\\text{ m/s})^2$$\n            $$F_{\\text{reaksi}} = 0{,}2 \\times 64 = 12{,}8\\text{ N}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa kedalaman $h$ diukur dari <em>permukaan air</em> ke lubang ($3{,}2\\text{ m}$), bukan tinggi lubang dari dasar tangki ($5 - 3{,}2 = 1{,}8\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas"
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
