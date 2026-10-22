/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Sub-topik: Fluida Dinamis (fis-flu-2)
 * Indikator: Persamaan kontinuitas dan debit aliran; penerapan Persamaan Bernoulli dalam kehidupan dan teknologi.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 1, Sedang: 2, HOTS: 1)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-2";
  const questions = [
  {
    "id": "mudah-fis-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-2",
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
    }
  },
  {
    "id": "sedang-fis-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-2",
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
    }
  },
  {
    "id": "sup-fis-flu-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-2",
    "category": "Penerapan Persamaan Bernoulli",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Air mengalir secara horizontal melalui pipa venturimeter tanpa manometer. Luas penampang pipa utama $A_1 = 20\\text{ cm}^2$ dan luas penampang leher $A_2 = 10\\text{ cm}^2$. Perbedaan ketinggian kolom zat cair pada kedua tabung vertikal pengukur adalah $h = 15\\text{ cm}$ ($g = 10\\text{ m/s}^2$). Kelajuan aliran air pada penampang utama ($v_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$1{,}5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$0{,}5\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Venturimeter Tanpa Manometer:</strong><br>Kombinasi Persamaan Kontinuitas dan Persamaan Bernoulli menghasilkan kelajuan masuk:<br>$v_1 = \\sqrt{\\frac{2 g h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$.</div>",
      "steps": "<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{20}{10} = 2 \\implies \\left(\\frac{A_1}{A_2}\\right)^2 = 4$.</li><li>Pembilang formula: $2 g h = 2 \\times 10 \\times 0{,}15 = 3$.</li><li>Penyebut formula: $4 - 1 = 3$.</li><li>Kelajuan: $v_1 = \\sqrt{\\frac{3}{3}} = 1\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi beda tinggi $h = 15\\text{ cm}$ ke meter ($0{,}15\\text{ m}$).</div>"
    }
  },
  {
    "id": "hots-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-2",
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
    }
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
