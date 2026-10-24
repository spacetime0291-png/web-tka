/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Mesin Kalor & Siklus Carnot (fis-termo-hukum-carnot)
 * Slug: mesin-kalor-carnot
 * Indikator: Efisiensi mesin Carnot ideal (eta = 1 - T_L / T_H), siklus 4 tahap, dan mesin pendingin.
 * 
 * Total Butir Soal: 8 (Mudah: 1, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-carnot";
  const subTopicSlug = "mesin-kalor-carnot";
  const questions = [
  {
    "id": "drill-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Efisiensi Mesin Kalor Carnot",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi $T_1 = 500\\text{ K}$ dan reservoir suhu rendah $T_2 = 300\\text{ K}$. Efisiensi termal maksimum ($\\eta$) dari mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\%$",
      "$60\\%$",
      "$20\\%$",
      "$30\\%$",
      "$50\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi Mesin Kalor Carnot:</strong><br>$$\\eta = \\left( 1 - \\frac{T_2}{T_1} \\right) \\times 100\\% = \\left( \\frac{T_1 - T_2}{T_1} \\right) \\times 100\\%$$<br>dengan $T_1$ reservoir suhu tinggi dan $T_2$ reservoir suhu rendah (wajib Kelvin!).</div>",
      "steps": "<ol><li>Hitung selisih suhu: $T_1 - T_2 = 500 - 300 = 200\\text{ K}$.</li><li>Hitung efisiensi: $\\eta = \\frac{200}{500} \\times 100\\% = \\frac{2}{5} \\times 100\\% = 40\\%$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Efisiensi Carnot adalah \"selisih dibagi suhu tinggi\": $\\eta = \\frac{T_{\\text{tinggi}} - T_{\\text{rendah}}}{T_{\\text{tinggi}}}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "sedang-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Efisiensi Mesin Termal Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir suhu tinggi $527^\\circ\\text{C}$ dan reservoir suhu rendah $127^\\circ\\text{C}$. Jika dalam setiap siklus mesin tersebut menyerap kalor sebesar $4000\\text{ Joule}$ dari reservoir panas, besar usaha mekanik yang dihasilkan mesin serta kalor yang dibuang ke reservoir dingin berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ J}$ dan $2000\\text{ J}$",
      "$2400\\text{ J}$ dan $1600\\text{ J}$",
      "$1500\\text{ J}$ dan $2500\\text{ J}$",
      "$3000\\text{ J}$ dan $1000\\text{ J}$",
      "$1600\\text{ J}$ dan $2400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Mesin Kalor Carnot & Suhu Mutlak Kelvin:</strong><br>\n          • Suhu WAJIB dalam skala Kelvin: $T(\\text{K}) = T(^\\circ\\text{C}) + 273$<br>\n          • Efisiensi: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$<br>\n          • Hukum Kekekalan Energi: $W = Q_H - Q_C \\iff Q_C = Q_H - W$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Konversi Suhu ke Kelvin:</strong><br>\n            $T_H = 527 + 273 = 800\\text{ K}$<br>\n            $T_C = 127 + 273 = 400\\text{ K}$\n          </li>\n          <li><strong>Hitung Efisiensi Siklus $(\\eta)$:</strong><br>\n            $$\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$$\n          </li>\n          <li><strong>Hitung Usaha $(W)$ dan Kalor Terbuang $(Q_C)$:</strong><br>\n            $$W = \\eta \\cdot Q_H = 0{,}5 \\times 4000\\text{ J} = 2000\\text{ Joule}$$\n            $$Q_C = Q_H - W = 4000 - 2000 = 2000\\text{ Joule}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Suhu Celsius:</strong><br>\n          Siswa yang lupa mengonversi ke Kelvin akan menghitung $\\eta = 1 - \\frac{127}{527} \\approx 76\\%$, yang menghasilkan nilai usaha yang keliru. Suhu termodinamika selalu dihitung dalam Kelvin!\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Usaha dan Kalor Dibuang Mesin Kalor",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin kalor memiliki efisiensi termal $30\\%$. Dalam setiap siklusnya, mesin tersebut menyerap kalor sebesar $Q_1 = 2000\\text{ Joule}$ dari reservoir panas. Besar usaha yang dihasilkan ($W$) dan kalor yang dibuang ke reservoir dingin ($Q_2$) dalam satu siklus berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$W = 600\\text{ J}$ dan $Q_2 = 1400\\text{ J}$",
      "$W = 1400\\text{ J}$ dan $Q_2 = 600\\text{ J}$",
      "$W = 600\\text{ J}$ dan $Q_2 = 2000\\text{ J}$",
      "$W = 300\\text{ J}$ dan $Q_2 = 1700\\text{ J}$",
      "$W = 2000\\text{ J}$ dan $Q_2 = 1400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Usaha dan Kalor Mesin:</strong><br>• $W = \\eta \\cdot Q_1$<br>• Menurut kekekalan energi: $Q_1 = W + Q_2 \\implies Q_2 = Q_1 - W$</div>",
      "steps": "<ol><li>Hitung usaha yang dihasilkan: $W = 30\\% \\times 2000\\text{ J} = 0{,}3 \\times 2000 = 600\\text{ Joule}$.</li><li>Hitung kalor yang dibuang: $Q_2 = 2000 - 600 = 1400\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kekekalan Energi Mesin:</strong> Kalor yang masuk ($Q_1$) selalu terbagi menjadi dua: yang menjadi kerja bermanfaat ($W$) dan yang terbuang sia-sia ($Q_2$). $Q_1 = W + Q_2$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Jebakan Satuan Suhu Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir panas bersuhu $327^\\circ\\text{C}$ dan reservoir dingin bersuhu $27^\\circ\\text{C}$. Efisiensi mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\%$",
      "$91{,}7\\%$",
      "$40\\%$",
      "$60\\%$",
      "$25\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Peringatan Mutlak Suhu Carnot:</strong><br>Suhu pada rumus efisiensi Carnot <strong>HARUS</strong> dalam skala Kelvin mutlak, tidak boleh menggunakan derajat Celsius!<br>$$T\\text{ (K)} = T\\text{ (}^\\circ\\text{C)} + 273$$</div>",
      "steps": "<ol><li>Ubah ke Kelvin:<br>• $T_1 = 327 + 273 = 600\\text{ K}$<br>• $T_2 = 27 + 273 = 300\\text{ K}$</li><li>Hitung efisiensi Carnot:<br>$$\\eta = \\frac{T_1 - T_2}{T_1} \\times 100\\% = \\frac{600 - 300}{600} \\times 100\\% = \\frac{300}{600} \\times 100\\% = 50\\%$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Paling Populer di Soal Ujian:</strong> Menghitung dengan Celsius: $\\eta = \\frac{327 - 27}{327} \\approx 91{,}7\\%$ (SALAH BESAR!). Selalu tambahkan 273 terlebih dahulu!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Performansi Mesin Pendingin (Kulkas)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah lemari es (kulkas) bekerja dengan siklus Carnot terbalik antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Koefisien performansi (daya guna $C_P$) lemari es tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9$",
      "$10$",
      "$8$",
      "$0{,}9$",
      "$5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin Carnot ($C_P$):</strong><br>$$C_P = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu lingkungan panas (dalam Kelvin).</div>",
      "steps": "<ol><li>Konversi ke Kelvin:<br>• $T_2 = -3 + 273 = 270\\text{ K}$ (ruang pendingin)<br>• $T_1 = 27 + 273 = 300\\text{ K}$ (lingkungan)</li><li>Selisih suhu: $T_1 - T_2 = 300 - 270 = 30\\text{ K}$.</li><li>Hitung $C_P$: $C_P = \\frac{270}{30} = 9$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Formula Pendingin:</strong> Pada mesin pendingin yang diinginkan adalah pendinginan ($T_2$), sehingga pembilangnya adalah $T_2$, bukan $T_1$ ($C_P = \\frac{T_2}{T_1 - T_2}$). Nilai $C_P$ biasanya lebih besar dari 1.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Menghitung Kalor Masuk Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $T_1 = 800\\text{ K}$ dan reservoir suhu rendah $T_2 = 400\\text{ K}$. Jika mesin tersebut menghasilkan usaha mekanik sebesar $W = 1000\\text{ Joule}$ setiap siklusnya, kalor yang diserap dari reservoir panas ($Q_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$4000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi dan Usaha Carnot:</strong><br>$$\\eta = 1 - \\frac{T_2}{T_1} \\quad \\text{dan} \\quad \\eta = \\frac{W}{Q_1} \\implies Q_1 = \\frac{W}{\\eta}$$</div>",
      "steps": "<ol><li>Hitung efisiensi mesin: $\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$.</li><li>Hitung kalor yang diserap: $Q_1 = \\frac{W}{\\eta} = \\frac{1000\\text{ J}}{0{,}5} = 2000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Alur Terbalik:</strong> Jika diketahui usaha dan suhu, hitung efisiensi $\\eta$ terlebih dahulu, lalu cari $Q_1 = W / \\eta$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Optimalisasi Efisiensi Mesin Termal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Berdasarkan formulasi efisiensi mesin Carnot $\\eta = 1 - \\frac{T_2}{T_1}$, tindakan yang paling efektif untuk menaikkan efisiensi termal mesin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Menaikkan suhu reservoir panas ($T_1$) atau menurunkan suhu reservoir dingin ($T_2$)",
      "Menambah volume gas di dalam silinder mesin sebanyak mungkin",
      "Memperbesar luas penampang piston penghisap mesin",
      "Mengganti gas monoatomik menjadi gas poliatomik",
      "Menjalankan siklus dengan frekuensi putaran yang lebih cepat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Batas Efisiensi Carnot:</strong><br>Efisiensi mesin kalor ideal <strong>hanya bergantung pada rasio suhu mutlak kedua reservoir</strong> ($T_2/T_1$). Efisiensi meningkat jika selisih $(T_1 - T_2)$ diperbesar, yaitu dengan menaikkan $T_1$ setinggi mungkin dan/atau mendinginkan $T_2$ serendah mungkin.</div>",
      "steps": "<ol><li>Bentuk rumus: $\\eta = 1 - \\frac{T_2}{T_1}$.</li><li>Agar $\\eta$ mendekati $100\\%$, suku $\\frac{T_2}{T_1}$ harus sekecil mungkin.</li><li>Hal ini dicapai dengan memperbesar $T_1$ dan memperkecil $T_2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Teorema Carnot:</strong> Tidak ada mesin yang dapat mencapai efisiensi $100\\%$ kecuali jika reservoir dingin bersuhu nol mutlak ($T_2 = 0\\text{ K}$), yang secara termodinamika mustahil dicapai (Hukum III Termodinamika).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Daya Guna Mesin Pendingin AC",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin pengondisi udara (AC) mempertahankan suhu kamar tidur pada $T_2 = 20^\\circ\\text{C}$ ($293\\text{ K}$) dengan membuang panas ke lingkungan luar yang bersuhu $T_1 = 40^\\circ\\text{C}$ ($313\\text{ K}$). Jika mesin AC bekerja berdasarkan siklus pendingin Carnot, maka koefisien performansi ($C_P$) mesin tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14{,}65$",
      "$7{,}32$",
      "$10{,}50$",
      "$1{,}50$",
      "$29{,}3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin:</strong><br>$$C_P = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu ruang panas dalam Kelvin.</div>",
      "steps": "<ol><li>Suhu kamar dingin: $T_2 = 20 + 273 = 293\\text{ K}$.</li><li>Suhu luar panas: $T_1 = 40 + 273 = 313\\text{ K}$.</li><li>Selisih suhu: $T_1 - T_2 = 313 - 293 = 20\\text{ K}$.</li><li>Koefisien performansi: $C_P = \\frac{293}{20} = 14{,}65$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Semakin Kecil Selisih Suhu, Semakin Tinggi $C_P$:</strong> Semakin kecil beda suhu ruangan dan lingkungan luar, AC bekerja jauh lebih efisien dan hemat daya listrik.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
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
