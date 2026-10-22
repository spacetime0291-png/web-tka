/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Sub-topik: Pengukuran (fis-kin-1)
 * Indikator: Prinsip kerja & pembacaan jangka sorong; mikrometer sekrup; neraca tiga lengan; kaidah pelaporan & perhitungan angka penting.
 * 
 * Total Butir Soal: 5 Soal (Mudah: 3, Sedang: 2, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-1";
  const questions = [
  {
    "id": "mudah-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-1",
    "category": "Pengukuran & Angka Penting",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Hasil pengukuran ketebalan pelat logam menggunakan jangka sorong menunjukkan skala utama $3{,}1\\text{ cm}$ dan garis nonius ke-7 berimpit tepat dengan garis skala utama. Jika ketelitian (skala terkecil nonius) jangka sorong tersebut adalah $0{,}01\\text{ cm}$, maka pelaporan hasil pengukuran yang benar beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(3{,}17 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}17 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}14 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}70 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}27 \\pm 0{,}05)\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Pembacaan Jangka Sorong & Ketidakpastian Mutlak:</strong><br>\n          • Hasil bacaan: $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$<br>\n          • Nilai ketidakpastian pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}$<br>\n          • Format pelaporan baku: $x \\pm \\Delta x$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Menghitung Nilai Bacaan $(x)$:</strong><br>\n            $$x = 3{,}1\\text{ cm} + (7 \\times 0{,}01\\text{ cm}) = 3{,}1\\text{ cm} + 0{,}07\\text{ cm} = 3{,}17\\text{ cm}$$\n          </li>\n          <li><strong>Menghitung Ketidakpastian Mutlak $(\\Delta x)$:</strong><br>\n            $$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ cm} = 0{,}005\\text{ cm}$$\n          </li>\n          <li><strong>Pelaporan Hasil Pengukuran:</strong><br>\n            $$(x \\pm \\Delta x) = (3{,}17 \\pm 0{,}005)\\text{ cm}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Pengukuran:</strong><br>\n          Jangan lupa membagi ketelitian alat dengan 2 untuk memperoleh ketidakpastian mutlak tunggal $\\Delta x$. Seringkali siswa langsung menuliskan $3{,}17 \\pm 0{,}01\\text{ cm}$ padahal ketidakpastiannya adalah setengah skala terkecil.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Pengukuran",
    "subTopic": "Pengukuran",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sup-fis-kin-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-1",
    "category": "Pembacaan Mikrometer Sekrup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa mengukur diameter sebuah kawat tembaga menggunakan mikrometer sekrup. Skala utama menunjukkan angka $4{,}5\\text{ mm}$ dan garis skala nonius (putar) ke-38 berimpit tepat dengan garis mendatar skala utama. Jika ketelitian alat adalah $0{,}01\\text{ mm}$, maka penulisan hasil pengukuran diameter kawat beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4{,}88 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}88 \\pm 0{,}01)\\text{ mm}$",
      "$(4{,}38 \\pm 0{,}005)\\text{ mm}$",
      "$(4{,}80 \\pm 0{,}01)\\text{ mm}$",
      "$(5{,}38 \\pm 0{,}005)\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pembacaan Mikrometer Sekrup:</strong><br>• $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ mm})$<br>• Nilai ketidakpastian mutlak pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$.</div>",
      "steps": "<ol><li>Skala utama terlihat: $4{,}5\\text{ mm}$.</li><li>Skala putar nonius: $38 \\times 0{,}01\\text{ mm} = 0{,}38\\text{ mm}$.</li><li>Hasil pengukuran: $x = 4{,}5 + 0{,}38 = 4{,}88\\text{ mm}$.</li><li>Format pelaporan baku: $(4{,}88 \\pm 0{,}005)\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering lupa menambahkan garis setengah milimeter ($0{,}5\\text{ mm}$) pada skala utama bawah, sehingga keliru membaca $4{,}38\\text{ mm}$.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Pengukuran",
    "subTopic": "Pengukuran",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sup-fis-kin-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-1",
    "category": "Pembacaan Neraca Tiga Lengan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam praktikum fisika dasar, penimbangan massa suatu sampel mineral menggunakan neraca tiga lengan Ohaus menunjukkan posisi anting geser sebagai berikut:<br>• Lengan belakang (skala ratusan): $300\\text{ gram}$<br>• Lengan tengah (skala puluhan): $40\\text{ gram}$<br>• Lengan depan (skala satuan & persepuluhan): $5{,}6\\text{ gram}$<br>Massa sampel mineral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$345{,}6\\text{ gram}$",
      "$340{,}56\\text{ gram}$",
      "$305{,}6\\text{ gram}$",
      "$354{,}6\\text{ gram}$",
      "$395{,}6\\text{ gram}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Kerja Neraca Tiga Lengan Ohaus:</strong><br>Massa benda merupakan hasil penjumlahan langsung dari penunjukan ketiga lengan penyeimbang: $M = M_{\\text{ratusan}} + M_{\\text{puluhan}} + M_{\\text{satuan/desimal}}$.</div>",
      "steps": "<ol><li>Massa lengan belakang: $300\\text{ g}$.</li><li>Massa lengan tengah: $40\\text{ g}$.</li><li>Massa lengan depan: $5{,}6\\text{ g}$.</li><li>Massa total: $M = 300 + 40 + 5{,}6 = 345{,}6\\text{ gram}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Tertukar antara posisi skala puluhan dan ratusan, atau salah membaca nilai skala nonius pada lengan depan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Pengukuran",
    "subTopic": "Pengukuran",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sedang-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-1",
    "category": "Perhitungan Luas dengan Angka Penting",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang siswa mengukur dimensi panjang dan lebar selembar pelat logam tipis. Dari pengukuran diperoleh panjang pelat $12{,}45\\text{ cm}$ dan lebar pelat $4{,}2\\text{ cm}$. Berdasarkan kaidah baku angka penting hasil perkalian, luas permukaan pelat logam tersebut harus dilaporkan sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$52\\text{ cm}^2$",
      "$52{,}3\\text{ cm}^2$",
      "$52{,}29\\text{ cm}^2$",
      "$52{,}30\\text{ cm}^2$",
      "$50\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Aturan Angka Penting pada Operasi Perkalian/Pembagian:</strong><br>\n          Hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak faktor pengali yang memiliki angka penting <em>paling sedikit</em>.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung jumlah angka penting masing-masing faktor:\n            • Panjang = $12{,}45\\text{ cm}$ (memiliki 4 angka penting)<br>\n            • Lebar = $4{,}2\\text{ cm}$ (memiliki 2 angka penting)\n          </li>\n          <li>Hasil perkalian murni kalkulator:\n            $$L = 12{,}45 \\times 4{,}2 = 52{,}29\\text{ cm}^2$$\n          </li>\n          <li>Bulatkan ke faktor paling sedikit (2 angka penting):\n            $$L \\approx 52\\text{ cm}^2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Seringkali siswa tergoda menuliskan seluruh angka di belakang koma ($52{,}29\\text{ cm}^2$) atau membulatkan ke 3 angka penting ($52{,}3\\text{ cm}^2$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Pengukuran",
    "subTopic": "Pengukuran",
    "chapterTitle": "Kinematika"
  },
  {
    "id": "sup-fis-kin-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-1",
    "category": "Kaidah Angka Penting Penjumlahan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Tiga buah paket ekspedisi ditimbang secara terpisah menghasilkan massa berturut-turut $m_1 = 12{,}34\\text{ kg}$, $m_2 = 5{,}6\\text{ kg}$, dan $m_3 = 0{,}123\\text{ kg}$. Berdasarkan kaidah pelaporan operasi angka penting, massa total ketiga paket tersebut harus dituliskan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$18{,}1\\text{ kg}$",
      "$18{,}06\\text{ kg}$",
      "$18{,}063\\text{ kg}$",
      "$18{,}2\\text{ kg}$",
      "$18\\text{ kg}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Angka Penting Penjumlahan & Pengurangan:</strong><br>Hasil penjumlahan atau pengurangan hanya boleh mengandung <strong>satu angka taksiran</strong>, yang ditentukan oleh suku dengan angka di belakang koma paling sedikit (paling tidak teliti).</div>",
      "steps": "<ol><li>$12{,}34$ memiliki 2 angka di belakang koma.</li><li>$5{,}6$ memiliki 1 angka di belakang koma (pembatas ketelitian).</li><li>$0{,}123$ memiliki 3 angka di belakang koma.</li><li>Jumlah aljabar murni: $12{,}34 + 5{,}6 + 0{,}123 = 18{,}063\\text{ kg}$.</li><li>Pembulatan ke 1 angka di belakang koma: karena setelah angka 0 adalah 6 ($>5$), dibulatkan ke atas menjadi $18{,}1\\text{ kg}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan aturan perkalian (jumlah AP paling sedikit) bukannya aturan penjumlahan (angka di belakang koma paling sedikit).</div>"
    },
    "bab": "Kinematika",
    "subBab": "Pengukuran",
    "subTopic": "Pengukuran",
    "chapterTitle": "Kinematika"
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
