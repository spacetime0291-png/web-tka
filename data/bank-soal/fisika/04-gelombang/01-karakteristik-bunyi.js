/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Karakteristik Gelombang Bunyi (fis-gel-1)
 * Indikator: Karakteristik rambatan gelombang mekanik bunyi; cepat rambat bunyi pada berbagai medium; pelayangan bunyi; resonansi tabung kolom udara.
 * 
 * Total Butir Soal: 5 Soal (Mudah: 4, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-1";
  const questions = [
  {
    "id": "mudah-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "bab": "Gelombang",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Pengaruh Suhu terhadap Kelajuan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 320\\text{ m/s}$. Jika gas tersebut dipanaskan hingga suhu mutlaknya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan rambat bunyi di dalam gas tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$640\\text{ m/s}$",
      "$480\\text{ m/s}$",
      "$1280\\text{ m/s}$",
      "$960\\text{ m/s}$",
      "$320\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Bunyi pada Gas Ideal:</strong><br>$$v = \\sqrt{\\frac{\\gamma R T}{M_r}} \\implies v \\propto \\sqrt{T}$$<br>Kelajuan bunyi berbanding lurus dengan <strong>akar suhu mutlak</strong> (Kelvin).</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{1200}{300} = 4$.</li><li>Perbandingan kelajuan: $\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2$.</li><li>Kelajuan akhir: $v_2 = 2 \\times v_1 = 2 \\times 320 = 640\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap hubungan linear $v \\propto T$ sehingga mengalikan 4 kali lipat ($1280\\text{ m/s}$). Yang benar adalah sebanding dengan akar kuadrat $\\sqrt{T}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Fenomena Pelayangan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah garpu tala $A$ dan $B$ dibunyikan secara bersamaan. Garpu tala $A$ memiliki frekuensi $440\\text{ Hz}$. Jika terdengar $4$ layangan bunyi setiap detiknya, maka frekuensi yang mungkin dari garpu tala $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$436\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$440\\text{ Hz}$ atau $448\\text{ Hz}$",
      "$220\\text{ Hz}$ atau $880\\text{ Hz}$",
      "$110\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$438\\text{ Hz}$ atau $442\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Frekuensi Pelayangan Bunyi (Beats):</strong><br>Frekuensi pelayangan adalah selisih mutlak dari dua frekuensi gelombang bunyi yang berinterferensi:<br>$$f_{\\text{layang}} = |f_A - f_B|$$</div>",
      "steps": "<ol><li>Diketahui $f_{\\text{layang}} = 4\\text{ Hz}$ dan $f_A = 440\\text{ Hz}$.</li><li>Kemungkinan 1: $f_B = f_A + f_{\\text{layang}} = 440 + 4 = 444\\text{ Hz}$.</li><li>Kemungkinan 2: $f_B = f_A - f_{\\text{layang}} = 440 - 4 = 436\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Pelayangan bunyi selalu berupa selisih sederhana ($|f_1 - f_2|$), bukan rata-rata atau rasio.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
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
    "bab": "Gelombang",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-1",
    "category": "Resonansi Kolom Udara Tabung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dalam percobaan resonansi tabung kolom udara menggunakan garpu tala berfrekuensi $f = 500\\text{ Hz}$, terjadi resonansi pertama pada panjang kolom udara $L_1 = 18\\text{ cm}$ dan resonansi kedua terjadi pada $L_2 = 54\\text{ cm}$. Kelajuan rambat bunyi di udara berdasarkan percobaan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$360\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$320\\text{ m/s}$",
      "$300\\text{ m/s}$",
      "$270\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Selisih Resonansi Berurutan Tabung Bunyi:</strong><br>Jarak antara dua resonansi berurutan selalu tepat sama dengan <strong>setengah panjang gelombang</strong>:<br>$$\\Delta L = L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>$$v = f \\cdot \\lambda$$</div>",
      "steps": "<ol><li>Hitung selisih panjang kolom udara: $\\Delta L = 54\\text{ cm} - 18\\text{ cm} = 36\\text{ cm} = 0{,}36\\text{ m}$.</li><li>Panjang gelombang bunyi: $\\lambda = 2 \\times 0{,}36\\text{ m} = 0{,}72\\text{ m}$.</li><li>Kelajuan bunyi: $v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}72\\text{ m} = 360\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Trik Cepat:</strong> Selisih dua resonansi berturutan $\\Delta L = \\frac{1}{2}\\lambda$, sehingga $\\lambda = 2\\Delta L$. Tidak perlu mengkhawatirkan koreksi ujung tabung.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang"
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
