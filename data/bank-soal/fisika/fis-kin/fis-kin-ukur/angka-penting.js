/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Angka Penting (fis-kin-ukur-angka)
 * Slug: angka-penting
 * Indikator: Aturan angka penting, operasi hitung penjumlahan, pengurangan, perkalian, & pembagian.
 * 
 * Total Butir Soal: 2 (Mudah: 0, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-angka";
  const subTopicSlug = "angka-penting";
  const questions = [
  {
    "id": "sedang-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-angka",
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
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "angka-penting"
  },
  {
    "id": "sup-fis-kin-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-angka",
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
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "angka-penting"
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
