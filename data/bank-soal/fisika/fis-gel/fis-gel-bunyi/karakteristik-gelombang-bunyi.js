/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Karakteristik Gelombang Bunyi (fis-gel-bunyi-karakteristik)
 * Slug: karakteristik-gelombang-bunyi
 * Indikator: Gelombang mekanik longitudinal, medium perambatan, nada, desah, resonansi, dan pelayangan bunyi.
 * 
 * Total Butir Soal: 3 (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-karakteristik";
  const subTopicSlug = "karakteristik-gelombang-bunyi";
  const questions = [
  {
    "id": "drill-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
  },
  {
    "id": "drill-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
  },
  {
    "id": "drill-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
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
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
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
