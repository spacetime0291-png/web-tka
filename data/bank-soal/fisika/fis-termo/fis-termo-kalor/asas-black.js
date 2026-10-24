/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Asas Black (fis-termo-kalor-asasblack)
 * Slug: asas-black
 * Indikator: Kekekalan kalor pada pencampuran zat (Q_lepas = Q_serap) dan penentuan suhu akhir campuran.
 * 
 * Total Butir Soal: 3 (Mudah: 0, Sedang: 3, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-asasblack";
  const subTopicSlug = "asas-black";
  const questions = [
  {
    "id": "sedang-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Termofisika - Asas Black Campuran Air dan Es",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $200\\text{ gram}$ air bersuhu $60^\\circ\\text{C}$ dicampurkan dengan $50\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ di dalam wadah kalorimeter ideal terisolasi sempurna. Diketahui kalor jenis air $c = 1\\text{ kal/g}^\\circ\\text{C}$ dan kalor lebur es $L = 80\\text{ kal/g}$. Suhu akhir campuran saat mencapai kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20^\\circ\\text{C}$",
      "$24^\\circ\\text{C}$",
      "$28^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$",
      "$36^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Asas Black ($Q_{\\text{lepas}} = Q_{\\text{terima}}$):</strong><br>\n          Kalor yang dilepas oleh air panas digunakan untuk meleburkan es menjadi air $0^\\circ\\text{C}$, kemudian menaikkan suhu air leburan es ke suhu campuran $T_c$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Kalor yang dibutuhkan untuk meleburkan seluruh es $0^\\circ\\text{C}$:\n            $$Q_{\\text{lebur}} = m_{\\text{es}} \\cdot L = 50 \\times 80 = 4000\\text{ kal}$$\n          </li>\n          <li>Kalor maksimum yang dapat dilepas air panas hingga $0^\\circ\\text{C}$:\n            $$Q_{\\max} = 200 \\times 1 \\times 60 = 12000\\text{ kal}$$\n            Karena $12000 > 4000$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.\n          </li>\n          <li>Persamaan Asas Black:\n            $$m_{\\text{air}} c (60 - T_c) = Q_{\\text{lebur}} + m_{\\text{es}} c (T_c - 0)$$\n            $$200(1)(60 - T_c) = 4000 + 50(1)(T_c)$$\n            $$12000 - 200 T_c = 4000 + 50 T_c$$\n            $$8000 = 250 T_c \\implies T_c = \\frac{8000}{250} = 32^\\circ\\text{C}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering lupa memperhitungkan kalor lebur es ($m_{\\text{es}} L$) dan hanya menghitung $m_1 c \\Delta T_1 = m_2 c \\Delta T_2$.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black"
  },
  {
    "id": "drill-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Asas Black Campuran Cairan Sejenis",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $100\\text{ gram}$ air bersuhu $90^\\circ\\text{C}$ dicampurkan dengan $200\\text{ gram}$ air bersuhu $30^\\circ\\text{C}$ di dalam sebuah wadah terisolasi termal ideal (wadah tidak menyerap kalor). Suhu akhir kesetimbangan termal campuran ($T_c$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black:</strong><br>Kalor yang dilepas oleh zat bersuhu lebih tinggi sama dengan kalor yang diserap oleh zat bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{terima}}$$</div>",
      "steps": "<ol><li>Zat sejenis (air) memiliki kalor jenis $c$ yang sama sehingga $c$ dapat dieliminasi.</li><li>Persamaan Asas Black: $m_1 (T_1 - T_c) = m_2 (T_c - T_2)$.</li><li>Substitusi data: $100(90 - T_c) = 200(T_c - 30)$.</li><li>Bagi kedua ruas dengan 100: $90 - T_c = 2(T_c - 30) = 2T_c - 60$.</li><li>Pindahkan suku: $90 + 60 = 2T_c + T_c \\implies 150 = 3T_c \\implies T_c = 50^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Cepat Cairan Sejenis:</strong> Rata-rata tertimbang massa: $T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \\frac{100(90) + 200(30)}{300} = \\frac{15000}{300} = 50^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black"
  },
  {
    "id": "drill2-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Penentuan Kalor Jenis Zat Asas Black",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah logam bermassa $m_L = 200\\text{ gram}$ bersuhu $100^\\circ\\text{C}$ dimasukkan ke dalam bejana berisi $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$). Jika suhu akhir campuran adalah $40^\\circ\\text{C}$ dan bejana tidak menyerap kalor, maka kalor jenis logam ($c_L$) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}167\\text{ kal/g}^\\circ\\text{C}$ (sekitar $\\frac{1}{6}$)",
      "$0{,}50\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}25\\text{ kal/g}^\\circ\\text{C}$",
      "$1{,}00\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}083\\text{ kal/g}^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black Menentukan Kalor Jenis:</strong><br>$$m_L \\cdot c_L \\cdot (T_L - T_c) = m_{\\text{air}} \\cdot c_{\\text{air}} \\cdot (T_c - T_{\\text{air}})$$</div>",
      "steps": "<ol><li>Kalor diterima air: $Q_{\\text{terima}} = 100 \\times 1 \\times (40 - 20) = 2000\\text{ kal}$.</li><li>Kalor dilepas logam: $Q_{\\text{lepas}} = 200 \\times c_L \\times (100 - 40) = 200 \\times c_L \\times 60 = 12.000 \\cdot c_L$.</li><li>Asas Black: $12.000 \\cdot c_L = 2000 \\implies c_L = \\frac{2000}{12000} = \\frac{1}{6} \\approx 0{,}167\\text{ kal/g}^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Satuan Kalor:</strong> Jika menggunakan gram dan $\\text{kal/g}^\\circ\\text{C}$, kalor jenis air adalah $1$. Jika menggunakan kg dan Joule, kalor jenis air adalah $4200\\text{ J/kg}\\cdot\\text{K}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black"
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
