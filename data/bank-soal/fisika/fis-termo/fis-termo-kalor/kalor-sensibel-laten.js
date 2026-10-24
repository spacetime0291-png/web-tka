/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Kalor Sensibel & Kalor Laten (fis-termo-kalor-sensibel)
 * Slug: kalor-sensibel-laten
 * Indikator: Kalor pengubah suhu (Q = m * c * Delta T) dan kalor pengubah wujud lebur/uap (Q = m * L).
 * 
 * Total Butir Soal: 7 (Mudah: 5, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-sensibel";
  const subTopicSlug = "kalor-sensibel-laten";
  const questions = [
  {
    "id": "mudah-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Pemanasan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $2\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $70^\\circ\\text{C}$. Jika kalor jenis air $c = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, jumlah kalor yang diserap air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$105\\text{ kJ}$",
      "$210\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$588\\text{ kJ}$",
      "$840\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kalor Perubahan Suhu:</strong><br>\n          $$Q = m c \\Delta T$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung perubahan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li>\n          <li>$$Q = (2\\text{ kg})(4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}))(50^\\circ\\text{C}) = 420.000\\text{ J} = 420\\text{ kJ}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan $\\Delta T$ adalah selisih suhu akhir dikurang suhu awal ($50$), bukan suhu akhir ($70$).\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Pemanasan dan Kenaikan Suhu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $m = 3\\text{ kg}$ air bersuhu $25^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $75^\\circ\\text{C}$. Jika kalor jenis air adalah $c = 4200\\text{ J/kg}^\\circ\\text{C}$, jumlah kalor yang diserap oleh air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$630\\text{ kJ}$",
      "$315\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$540\\text{ kJ}$",
      "$63\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Kalor Sensibel:</strong><br>Kalor yang dibutuhkan untuk menaikkan suhu zat tanpa mengubah wujud:<br>$$Q = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Perubahan suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = 3\\text{ kg} \\times 4200\\text{ J/kg}^\\circ\\text{C} \\times 50^\\circ\\text{C} = 630.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 630\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Satuan:</strong> Periksa apakah opsi meminta Joule atau kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Laten Peleburan Zat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebongkah es bermassa $m = 500\\text{ gram}$ pada suhu titik leburnya $0^\\circ\\text{C}$ hendak dicairkan seluruhnya menjadi air bersuhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L_f = 336.000\\text{ J/kg}$, banyak kalor yang diperlukan dalam proses peleburan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$168.000\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Perubahan Wujud:</strong><br>Saat zat melebur atau membeku pada suhu tetap, kalor yang diserap/dilepas tidak menaikkan suhu:<br>$$Q = m \\cdot L_f$$</div>",
      "steps": "<ol><li>Konversi massa ke kg: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.</li><li>Hitung kalor lebur: $Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ J} = 168\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Pada peristiwa perubahan wujud zat, suhu zat selalu konstan (tidak ada $\\Delta T$). Jangan masukkan kalor jenis $c$ saat zat sedang melebur!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill-kal-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kapasitas Kalor Benda",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu balok logam memiliki kapasitas kalor $C = 250\\text{ J/}^circ\\text{C}$. Berapakah jumlah kalor yang dibutuhkan untuk memanaskan balok logam tersebut dari suhu $20^\\circ\\text{C}$ hingga menjadi $60^\\circ\\text{C}$?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10.000\\text{ Joule}$",
      "$5.000\\text{ Joule}$",
      "$15.000\\text{ Joule}$",
      "$2.500\\text{ Joule}$",
      "$25.000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Kapasitas Kalor ($C$) dan Kalor ($Q$):</strong><br>Kapasitas kalor adalah kemampuan seluruh benda menyerap kalor per derajat kenaikan suhu ($C = m \\cdot c$):<br>$$Q = C \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kenaikan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = C \\cdot \\Delta T = 250\\text{ J/}^circ\\text{C} \\times 40^\\circ\\text{C} = 10.000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan $c$ dan $C$:</strong> Kalor jenis ($c$) memiliki satuan $\\text{J/kg}^\\circ\\text{C}$ (tergantung massa). Kapasitas kalor ($C$) bersatuan $\\text{J/}^circ\\text{C}$ (sudah mencakup massa benda).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill2-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Penguapan Air",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Banyaknya kalor yang diperlukan untuk menguapkan seluruhnya $m = 200\\text{ gram}$ air pada titik didihnya $100^\\circ\\text{C}$ menjadi uap air bersuhu $100^\\circ\\text{C}$ (kalor uap air $L_v = 2{,}26 \\times 10^6\\text{ J/kg}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$452\\text{ kJ}$",
      "$226\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$45{,}2\\text{ kJ}$",
      "$113\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Penguapan:</strong><br>$$Q = m \\cdot L_v$$</div>",
      "steps": "<ol><li>Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.</li><li>Kalor: $Q = 0{,}2\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 452\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Fakta Fisika Menarik:</strong> Kalor penguapan air ($2{,}26 \\times 10^6\\text{ J/kg}$) hampir 7 kali lebih besar daripada kalor leburnya ($3{,}36 \\times 10^5\\text{ J/kg}$) karena memutus ikatan antarmolekul cair sepenuhnya menjadi gas.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill2-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Suhu Sambungan Dua Logam Berbeda Konduktivitas",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $A$ dan $B$ dengan panjang dan luas penampang yang sama disambungkan ujungnya. Konduktivitas termal logam $A$ adalah tiga kali konduktivitas termal logam $B$ ($k_A = 3k_B$). Ujung bebas logam $A$ bersuhu $100^\\circ\\text{C}$ dan ujung bebas logam $B$ bersuhu $20^\\circ\\text{C}$. Suhu sambungan antara kedua logam ($T_s$) pada keadaan stasioner adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$85^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Keseimbangan Sambungan Konduksi:</strong><br>Laju aliran kalor pada kedua batang adalah sama:<br>$$H_A = H_B \\implies k_A (T_A - T_s) = k_B (T_s - T_B)$$</div>",
      "steps": "<ol><li>Substitusi $k_A = 3k_B$: $3(100 - T_s) = T_s - 20$.</li><li>Jabarkan: $300 - 3T_s = T_s - 20$.</li><li>$300 + 20 = 4T_s \\implies 320 = 4T_s \\implies T_s = 80^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Cepat:</strong> Logam $A$ menghantar panas 3 kali lebih cepat $implies$ suhu sambungan ditarik sangat dekat ke suhu ujung $A$ ($80^\\circ\\text{C}$, bukan rata-rata $60^\\circ\\text{C}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
  },
  {
    "id": "drill2-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Pemanas Listrik Air (Daya dan Kalor)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah ketel listrik berdaya $P = 420\\text{ Watt}$ digunakan untuk memanaskan $m = 1\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ hingga mencapai suhu $40^\\circ\\text{C}$ ($c = 4200\\text{ J/kg}^\\circ\\text{C}$). Jika seluruh energi listrik diubah sempurna menjadi kalor tanpa ada yang hilang, waktu ($t$) yang dibutuhkan ketel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ detik}$ ($3\\text{ menit } 20\\text{ detik}$)",
      "$100\\text{ detik}$",
      "$420\\text{ detik}$",
      "$50\\text{ detik}$",
      "$300\\text{ detik}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kesetaraan Energi Listrik dan Kalor:</strong><br>$$W_{\\text{listrik}} = Q_{\\text{kalor}} \\implies P \\cdot t = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kalor yang diperlukan: $Q = 1 \\times 4200 \\times (40 - 20) = 1 \\times 4200 \\times 20 = 84.000\\text{ Joule}$.</li><li>Waktu pemanasan: $t = \\frac{Q}{P} = \\frac{84.000\\text{ J}}{420\\text{ W}} = 200\\text{ detik}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan Joule dan Watt:</strong> $1\\text{ Watt} = 1\\text{ Joule/detik}$. Waktu selalu dihasilkan dalam satuan detik.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten"
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
