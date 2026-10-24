/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Spektrum Elektromagnetik (fis-gel-optik-spektrum)
 * Slug: spektrum-elektromagnetik
 * Indikator: Urutan spektrum gelombang elektromagnetik dari frekuensi terendah ke tertinggi dan peranannya.
 * 
 * Total Butir Soal: 4 (Mudah: 1, Sedang: 3, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-spektrum";
  const subTopicSlug = "spektrum-elektromagnetik";
  const questions = [
  {
    "id": "drill-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "sedang-fis-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "drill-cah-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
  },
  {
    "id": "drill2-cah-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-spektrum",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Spektrum Elektromagnetik",
    "subTopic": "Spektrum Elektromagnetik",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "spektrum-elektromagnetik"
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
