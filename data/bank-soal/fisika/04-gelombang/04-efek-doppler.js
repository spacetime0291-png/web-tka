/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang
 * Sub-topik: Efek Doppler (fis-gel-4)
 * Indikator: Efek Doppler: pergeseran frekuensi bunyi terdeteksi akibat gerak relatif sumber bunyi dan pendengar (saling mendekat & menjauh).
 * 
 * Total Butir Soal: 4 Soal (Mudah: 0, Sedang: 4, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-4";
  const questions = [
  {
    "id": "sedang-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-4",
    "category": "Efek Doppler Gelombang Bunyi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $720\\text{ Hz}$ mendekati seorang pengamat yang berdiri diam di tepi jalan. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$765\\text{ Hz}$",
      "$810\\text{ Hz}$",
      "$850\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Efek Doppler:</strong><br>\n          $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$\n          • Pengamat diam: $v_p = 0$<br>\n          • Sumber mendekati pengamat: tanda pada penyebut bernilai negatif ($-v_s$), sehingga frekuensi terdengar lebih tinggi ($f_p > f_s$).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi variabel: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 720\\text{ Hz}$.</li>\n          <li>Substitusikan ke rumus Efek Doppler:\n            $$f_p = \\left( \\frac{340}{340 - 20} \\right) \\times 720 = \\left( \\frac{340}{320} \\right) \\times 720$$\n          </li>\n          <li>Hitung nilai akhir:\n            $$f_p = \\frac{17}{16} \\times 720 = 17 \\times 45 = 765\\text{ Hz}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan aturan tanda: sumber mendekat selalu memperkecil penyebut ($v - v_s$), bukan memperbesar ($v + v_s$).\n        </div>\n      "
    },
    "bab": "Gelombang",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-4",
    "category": "Efek Doppler Sumber & Pendengar Saling Mendekat",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah kereta api bergerak mendekati stasiun dengan kelajuan $v_s = 20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $640\\text{ Hz}$. Pada saat bersamaan, seorang penumpang di peron bergerak berjalan mendekati kereta api dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi peluit yang didengar oleh penumpang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$700\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$600\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Tanda Efek Doppler:</strong><br>$$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$<br>• Pendengar mendekati sumber $\\implies (+v_p)$ pada pembilang.<br>• Sumber mendekati pendengar $\\implies (-v_s)$ pada penyebut.<br>• Efek keduanya saling mendekat membuat frekuensi yang didengar semakin tinggi ($f_p > f_s$).</div>",
      "steps": "<ol><li>Substitusi nilai: $v = 340$, $v_p = 10$, $v_s = 20$, $f_s = 640$.</li><li>Pembilang: $v + v_p = 340 + 10 = 350\\text{ m/s}$.</li><li>Penyebut: $v - v_s = 340 - 20 = 320\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{350}{320} \\times 640 = 350 \\times 2 = 700\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Mnemonic Tanda Doppler:</strong> \"Mendekat = Lebih Tinggi\" (pembilang ditambah, penyebut dikurang). \"Menjauh = Lebih Rendah\" (pembilang dikurang, penyebut ditambah).</div>"
    },
    "bab": "Gelombang",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-4",
    "category": "Efek Doppler Sumber Menjauhi Pendengar Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mobil pemadam kebakaran membunyikan sirene berfrekuensi $f_s = 600\\text{ Hz}$ sambil bergerak menjauhi seorang pejalan kaki yang berdiri diam di tepi jalan dengan kelajuan $v_s = 20\\text{ m/s}$. Jika kelajuan rambat bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi bunyi yang didengar oleh pejalan kaki tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$566{,}7\\text{ Hz}$",
      "$637{,}5\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$540\\text{ Hz}$",
      "$580\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Sumber Menjauh:</strong><br>Karena sumber menjauh ($+v_s$ pada penyebut), panjang gelombang merenggang sehingga frekuensi yang terdengar lebih rendah ($f_p < f_s$):<br>$$f_p = \\left( \\frac{v}{v + v_s} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 600\\text{ Hz}$.</li><li>Penyebut: $v + v_s = 340 + 20 = 360\\text{ m/s}$.</li><li>$f_p = \\frac{340}{360} \\times 600 = \\frac{17}{18} \\times 600 = \\frac{17 \\times 100}{3} \\approx 566{,}67\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Akal Sehat:</strong> Sumber menjauh pasti menghasilkan nada yang lebih rendah dari frekuensi asli ($< 600\\text{ Hz}$). Opsi di atas $600\\text{ Hz}$ langsung gugur!</div>"
    },
    "bab": "Gelombang",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
    "chapterTitle": "Gelombang"
  },
  {
    "id": "drill2-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-4",
    "category": "Efek Doppler Pendengar Bergerak Menjauhi Sumber Diam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluit stasiun diam membunyikan frekuensi $f_s = 680\\text{ Hz}$. Seorang penumpang menaiki sepeda motor bergerak menjauhi stasiun dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi bunyi peluit yang didengar oleh pengendara motor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$660\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$620\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efek Doppler Pendengar Menjauh:</strong><br>$$f_p = \\left( \\frac{v - v_p}{v} \\right) f_s$$</div>",
      "steps": "<ol><li>$v = 340\\text{ m/s}$, $v_p = 10\\text{ m/s}$, $f_s = 680\\text{ Hz}$.</li><li>Pembilang: $v - v_p = 340 - 10 = 330\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{330}{340} \\times 680 = 330 \\times 2 = 660\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Posisi Variabel:</strong> Kecepatan pendengar ($v_p$) selalu berada di <strong>pembilang</strong>, sedangkan kecepatan sumber ($v_s$) selalu berada di <strong>penyebut</strong>.</div>"
    },
    "bab": "Gelombang",
    "subBab": "Efek Doppler",
    "subTopic": "Efek Doppler",
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
