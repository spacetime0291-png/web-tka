/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Konduksi, Konveksi, dan Radiasi (fis-termo-kalor-perpindahan)
 * Slug: konduksi-konveksi-radiasi
 * Indikator: Laju konduksi Fourier, konveksi zat cair/gas, dan radiasi hukum Stefan-Boltzmann (P = e * sigma * A * T^4).
 * 
 * Total Butir Soal: 5 (Mudah: 1, Sedang: 4, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-perpindahan";
  const subTopicSlug = "konduksi-konveksi-radiasi";
  const questions = [
  {
    "id": "drill2-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Perpindahan Kalor secara Konveksi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat pemanas dengan luas penampang $A = 0{,}5\\text{ m}^2$ melepaskan kalor ke udara sekitarnya secara konveksi alami. Koefisien konveksi udara adalah $h = 20\\text{ W/m}^2\\cdot\\text{K}$. Jika perbedaan suhu antara pelat pemanas dan udara ruangan adalah $\\Delta T = 30^\\circ\\text{C}$, maka laju aliran kalor konveksi ($H$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$50\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pendinginan Newton (Konveksi):</strong><br>$$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Identifikasi data: $h = 20\\text{ W/m}^2\\cdot\\text{K}$, $A = 0{,}5\\text{ m}^2$, $\\Delta T = 30\\text{ K}$.</li><li>Laju kalor: $H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Selisih Suhu:</strong> Nilai selisih suhu dalam Celcius sebanding tepat dengan selisih suhu dalam Kelvin ($Delta T\\text{ }^\\circ\\text{C} = \\Delta T\\text{ K}$). Jadi tidak perlu ditambah 273 saat menghitung selisih $Delta T$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi"
  },
  {
    "id": "sup-fis-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Konduksi Termal Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $P$ dan $Q$ dengan luas penampang dan panjang yang sama disambungkan ujungnya. Konduktivitas termal logam $P$ adalah dua kali konduktivitas termal logam $Q$ ($k_P = 2k_Q$). Jika ujung bebas logam $P$ bersuhu $90^\\circ\\text{C}$ dan ujung bebas logam $Q$ bersuhu $30^\\circ\\text{C}$, maka suhu sambungan kedua logam pada keadaan tunak (stasioner) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$70^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Kalor Keadaan Stasioner:</strong><br>Pada sambungan batang, laju aliran kalor melalui batang $P$ sama dengan laju aliran kalor melalui batang $Q$: $H_P = H_Q \\implies k_P A \\frac{\\Delta T_P}{L} = k_Q A \\frac{\\Delta T_Q}{L}$.</div>",
      "steps": "<ol><li>Karena $A$ dan $L$ sama: $k_P (90 - T) = k_Q (T - 30)$.</li><li>Substitusi $k_P = 2k_Q$: $2(90 - T) = T - 30$.</li><li>$180 - 2T = T - 30 \\implies 3T = 210 \\implies T = 70^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengambil rata-rata aritmetika biasa $\\frac{90 + 30}{2} = 60^\\circ\\text{C}$ tanpa memperhitungkan perbedaan nilai konduktivitas kedua bahan.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi"
  },
  {
    "id": "drill-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Konduksi Kalor Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang tembaga memiliki panjang $L = 50\\text{ cm} = 0{,}5\\text{ m}$ dan luas penampang $A = 4\\text{ cm}^2 = 4 \\times 10^{-4}\\text{ m}^2$. Konduktivitas termal tembaga adalah $k = 400\\text{ W/m}\\cdot\\text{K}$. Jika perbedaan suhu antara kedua ujung batang dipertahankan sebesar $\\Delta T = 100^\\circ\\text{C}$, maka laju perpindahan kalor secara konduksi ($H$) melalui batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$32\\text{ Watt}$",
      "$16\\text{ Watt}$",
      "$64\\text{ Watt}$",
      "$8\\text{ Watt}$",
      "$320\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Termal Fourier:</strong><br>Laju rambatan kalor per detik berbanding lurus dengan konduktivitas termal, luas penampang, dan gradien suhu:<br>$$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$</div>",
      "steps": "<ol><li>Pembilang: $k \\cdot A \\cdot \\Delta T = 400 \\times (4 \\times 10^{-4}) \\times 100 = 16\\text{ W}\\cdot\\text{m}$.</li><li>Penyebut: $L = 0{,}5\\text{ m}$.</li><li>Laju kalor: $H = \\frac{16}{0{,}5} = 32\\text{ Watt}$ (Joule/detik).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konversi Luas $A$:</strong> $1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}$. Kesalahan umum lupa mengkuadratkan faktor $10^{-2}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi"
  },
  {
    "id": "drill-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Daya Radiasi Termal Stefan-Boltzmann",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah filamen pemanas berbentuk silinder memancarkan daya radiasi sebesar $P_1 = 50\\text{ Watt}$ ketika suhunya berada pada $T_1 = 300\\text{ K}$. Jika suhu filamen tersebut dinaikkan menjadi $T_2 = 600\\text{ K}$, dengan luas permukaan dan emisivitas tetap, maka daya radiasi yang dipancarkan filamen sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$800\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$1600\\text{ Watt}$",
      "$100\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Radiasi Stefan-Boltzmann:</strong><br>Daya radiasi kalor sebanding dengan <strong>pangkat empat</strong> dari suhu mutlaknya:<br>$$P = e \\cdot \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_2}{P_1} = \\left( \\frac{T_2}{T_1} \\right)^4$$</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Pangkat empatkan perbandingan: $2^4 = 16$.</li><li>Daya baru: $P_2 = 16 \\times P_1 = 16 \\times 50\\text{ W} = 800\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pangkat Empat Wajib Diingat:</strong> Kenaikan suhu $2\\times \\implies$ daya radiasi naik $2^4 = 16\\times$. Kenaikan suhu $3\\times \\implies$ daya radiasi naik $3^4 = 81\\times$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi"
  },
  {
    "id": "drill2-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Hubungan Daya Radiasi dan Luas Permukaan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah pelat logam memancarkan energi radiasi termal sebesar $P_1 = 40\\text{ Watt}$. Jika pelat tersebut diganti dengan pelat sejenis dengan luas permukaan dua kali lipat semula ($A_2 = 2A_1$) dan dipanaskan pada suhu mutlak yang sama, maka daya radiasi yang dipancarkannya sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ Watt}$",
      "$160\\text{ Watt}$",
      "$40\\text{ Watt}$",
      "$20\\text{ Watt}$",
      "$640\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Ketergantungan Radiasi terhadap Luas:</strong><br>$$P = e \\sigma A T^4 \\implies P \\propto A$$<br>Pada suhu tetap, daya radiasi berbanding lurus linear dengan luas permukaan pemancar.</div>",
      "steps": "<ol><li>Karena suhu $T$ tetap: $\\frac{P_2}{P_1} = \\frac{A_2}{A_1} = 2$.</li><li>Daya baru: $P_2 = 2 \\times P_1 = 2 \\times 40\\text{ W} = 80\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hati-hati Tertukar:</strong> Daya sebanding dengan pangkat empat terhadap <strong>suhu</strong> ($T^4$), tetapi sebanding linear dengan <strong>luas permukaan</strong> ($A^1$). Jangan memangkat-empatkan luas!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi"
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
