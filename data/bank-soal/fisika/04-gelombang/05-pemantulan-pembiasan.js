/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Pemantulan & Pembiasan Cahaya (fis-gel-5)
 * Indikator: Spektrum gelombang elektromagnetik; hukum Snellius; pembiasan & pemantulan total sempurna; interferensi & difraksi celah ganda.
 * 
 * Total Butir Soal: 7 Soal (Mudah: 3, Sedang: 4, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-5";
  const questions = [
  {
    "id": "sup-fis-gel-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Pembiasan Cahaya Hukum Snellius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seberkas cahaya merambat dari udara ($n_1 = 1$) masuk ke dalam balok kaca yang mempunyai indeks bias $n_2 = 1{,}5$. Jika sudut datang sinar adalah $30^\\circ$, maka nilai sinus sudut bias ($\\sin r$) di dalam balok kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Snellius Pembiasan Cahaya:</strong><br>$n_1 \\sin i = n_2 \\sin r$, dengan $i$ sudut datang dan $r$ sudut bias terhadap garis normal.</div>",
      "steps": "<ol><li>$n_1 = 1$, $i = 30^\\circ \\implies \\sin 30^\\circ = 0{,}5 = \\frac{1}{2}$.</li><li>$n_2 = 1{,}5 = \\frac{3}{2}$.</li><li>Persamaan: $1 \\cdot \\frac{1}{2} = \\frac{3}{2} \\cdot \\sin r$.</li><li>$\\sin r = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Membalik indeks bias medium sehingga menghasilkan $\\sin r = \\frac{3}{4}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Hubungan Frekuensi dan Panjang Gelombang Cahaya",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seberkas laser jingga memiliki panjang gelombang $\\lambda = 600\\text{ nm}$ di ruang hampa ($1\\text{ nm} = 10^{-9}\\text{ m}$). Jika kelajuan cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, maka frekuensi gelombang laser tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{15}\\text{ Hz}$",
      "$2 \\times 10^{14}\\text{ Hz}$",
      "$1{,}8 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{12}\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Gelombang Elektromagnetik:</strong><br>$$c = \\lambda \\cdot f \\implies f = \\frac{c}{\\lambda}$$</div>",
      "steps": "<ol><li>Konversi panjang gelombang ke meter: $\\lambda = 600 \\times 10^{-9}\\text{ m} = 6 \\times 10^{-7}\\text{ m}$.</li><li>Hitung frekuensi: $f = \\frac{3 \\times 10^8}{6 \\times 10^{-7}} = 0{,}5 \\times 10^{15} = 5 \\times 10^{14}\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Orde Pangkat:</strong> Hati-hati saat menaikkan pangkat dari penyebut: $10^8 / 10^{-7} = 10^{8 - (-7)} = 10^{15}$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Kelajuan Cahaya dalam Medium Pembias",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Cahaya merambat dari ruang hampa ($c = 3 \\times 10^8\\text{ m/s}$) memasuki balok kaca yang mempunyai indeks bias $n = 1{,}5$. Kelajuan cahaya di dalam kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Definisi Indeks Bias Mutlak:</strong><br>Indeks bias medium menyatakan perbandingan kelajuan cahaya di ruang hampa terhadap kelajuan cahaya di medium tersebut:<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$</div>",
      "steps": "<ol><li>Substitusi nilai: $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$.</li><li>$v = \\frac{3 \\times 10^8}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Cahaya selalu merambat <em>lebih lambat</em> di dalam medium optik ($n > 1$) dibandingkan di ruang hampa. Nilai $v$ tidak mungkin melebihi $c$.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "sedang-fis-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Interferensi Celah Ganda Young",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada eksperimen interferensi celah ganda Young, jarak antarcelah adalah $d = 0{,}2\\text{ mm}$ ($2 \\times 10^{-4}\\text{ m}$) dan layar dipasang sejajar pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik dengan panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$) dilewatkan pada celah, jarak antara garis terang pusat dengan garis terang orde ke-2 pada layar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}5\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$7{,}5\\text{ mm}$",
      "$10{,}0\\text{ mm}$",
      "$12{,}5\\text{ mm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Interferensi Maksimum (Garis Terang) Celah Ganda:</strong><br>\n          $$\\frac{d \\cdot y}{L} = n \\lambda \\implies y = \\frac{n \\lambda L}{d}$$\n          dengan $n$ adalah orde terang ($n = 1, 2, 3, \\dots$).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Untuk garis terang ke-2, gunakan $n = 2$.</li>\n          <li>Substitusi besaran fisis ke persamaan:\n            $$y = \\frac{2 \\times (5 \\times 10^{-7}\\text{ m}) \\times (1\\text{ m})}{2 \\times 10^{-4}\\text{ m}}$$\n          </li>\n          <li>Sederhanakan pecahan:\n            $$y = \\frac{10 \\times 10^{-7}}{2 \\times 10^{-4}} = 5 \\times 10^{-3}\\text{ meter} = 5{,}0\\text{ mm}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan seluruh satuan dikonversi ke meter terlebih dahulu ($1\\text{ nm} = 10^{-9}\\text{ m}$ dan $1\\text{ mm} = 10^{-3}\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Sudut Kritis dan Pemantulan Total Sempurna",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seberkas sinar merambat dari dalam air yang memiliki indeks bias $n_1 = \\frac{4}{3}$ menuju ke udara yang memiliki indeks bias $n_2 = 1$. Nilai sinus sudut kritis ($\\sin \\theta_k$) agar terjadi peristiwa pemantulan total sempurna adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{4}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Syarat Pemantulan Total Sempurna & Sudut Kritis:</strong><br>1. Cahaya harus merambat dari medium <strong>lebih rapat ke medium kurang rapat</strong> ($n_1 > n_2$).<br>2. Pada sudut kritis, sudut bias $r = 90^\\circ$ ($\\sin 90^\\circ = 1$):<br>$$\\sin \\theta_k = \\frac{n_2}{n_1}$$</div>",
      "steps": "<ol><li>Identifikasi: $n_1 = \\frac{4}{3}$ (medium rapat/air), $n_2 = 1$ (medium renggang/udara).</li><li>Rumus sudut kritis: $\\sin \\theta_k = \\frac{n_2}{n_1} = \\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Masuk Akal:</strong> Nilai sinus suatu sudut nyata tidak pernah boleh lebih dari 1. Jadi pembagian selalu medium kecil dibagi medium besar ($n_{\\text{kecil}} / n_{\\text{besar}}$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-cah-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Interferensi Celah Ganda Young",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Pada eksperimen interferensi celah ganda Young, jarak antara kedua celah adalah $d = 0{,}2\\text{ mm}$ dan layar diletakkan pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik yang digunakan memiliki panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$), maka jarak antara dua garis terang yang berdekatan ($\\Delta y$) pada layar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}5\\text{ mm}$",
      "$1{,}0\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$0{,}25\\text{ mm}$",
      "$25\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Jarak Antar-Garis Terang Celah Ganda:</strong><br>Jarak pisah antara dua pola terang berurutan ($Delta y$) memenuhi persamaan:<br>$$\\frac{d \\cdot \\Delta y}{L} = \\lambda \\implies \\Delta y = \\frac{\\lambda L}{d}$$</div>",
      "steps": "<ol><li>Samakan semua satuan ke meter:<br>• $d = 0{,}2\\text{ mm} = 2 \\times 10^{-4}\\text{ m}$<br>• $L = 1\\text{ m}$<br>• $\\lambda = 5 \\times 10^{-7}\\text{ m}$</li><li>Hitung $\\Delta y$:<br>$$\\Delta y = \\frac{(5 \\times 10^{-7}) \\times 1}{2 \\times 10^{-4}} = 2{,}5 \\times 10^{-3}\\text{ m} = 2{,}5\\text{ mm}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Selalu konversikan semua data ($\text{mm}$, $\text{nm}$, $\text{cm}$) ke meter terlebih dahulu sebelum melakukan pembagian ordo pangkat.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-cah-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-5",
    "category": "Kisi Difraksi Spektrum Cahaya",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kisi difraksi memiliki $N = 500\\text{ garis/mm}$. Seberkas cahaya monokromatik dilewatkan tegak lurus pada kisi tersebut sehingga menghasilkan garis terang orde pertama ($n = 1$) pada sudut deviasi dengan $\\sin \\theta = 0{,}25$. Panjang gelombang cahaya yang digunakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$)",
      "$250\\text{ nm}$ ($2{,}5 \\times 10^{-7}\\text{ m}$)",
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$1000\\text{ nm}$ ($10^{-6}\\text{ m}$)",
      "$400\\text{ nm}$ ($4 \\times 10^{-7}\\text{ m}$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Kisi Difraksi:</strong><br>$$d \\sin \\theta = n \\lambda$$<br>dengan tetapan jarak antar-kisi: $d = \\frac{1}{N}$.</div>",
      "steps": "<ol><li>Hitung jarak antar-celah $d$ dalam meter:<br>$$d = \\frac{1}{500\\text{ garis/mm}} = \\frac{1\\text{ mm}}{500} = \\frac{10^{-3}\\text{ m}}{500} = 2 \\times 10^{-6}\\text{ m}$$</li><li>Substitusi ke rumus difraksi orde $n = 1$:<br>$$d \\sin \\theta = 1 \\cdot \\lambda \\implies \\lambda = (2 \\times 10^{-6}) \\times 0{,}25 = 0{,}5 \\times 10^{-6}\\text{ m} = 500\\text{ nm}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konversi Celah Kisi:</strong> Jangan lupa mengonversi dari $\\text{mm}$ ke $\\text{meter}$ ($1\\text{ mm} = 10^{-3}\\text{ m}$).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Pemantulan & Pembiasan Cahaya",
    "subTopic": "Pemantulan & Pembiasan Cahaya",
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
