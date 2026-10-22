/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Sub-topik: Momentum dan Impuls (fis-din-2)
 * Indikator: Momentum linier; impuls & teorema impuls-momentum; Hukum Kekekalan Momentum pada tumbukan.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 2, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-2";
  const questions = [
  {
    "id": "mudah-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-2",
    "category": "Momentum Linier",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola sepak bermassa $0{,}5\\text{ kg}$ ditendang sehingga bergerak dengan kecepatan $20\\text{ m/s}$. Besar momentum linier bola tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$15\\text{ kg}\\cdot\\text{m/s}$",
      "$20\\text{ kg}\\cdot\\text{m/s}$",
      "$40\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Definisi Momentum Linier:</strong><br>\n          $$p = m \\cdot v$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$p = (0{,}5\\text{ kg})(20\\text{ m/s}) = 10\\text{ kg}\\cdot\\text{m/s}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pastikan satuan massa dalam kilogram (kg) dan kecepatan dalam meter per detik (m/s).\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Momentum dan Impuls",
    "subTopic": "Momentum dan Impuls",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "sup-fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-2",
    "category": "Teorema Impuls-Momentum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola kasti bermassa $0{,}2\\text{ kg}$ dilempar mendatar ke arah kiri dengan kelajuan $10\\text{ m/s}$. Seorang pemukul memukul bola tersebut sehingga berbalik arah melaju ke kanan dengan kelajuan $15\\text{ m/s}$. Jika waktu kontak pemukul dan bola adalah $\\Delta t = 0{,}02\\text{ detik}$, besar gaya kontak rata-rata yang diberikan pemukul pada bola adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$50\\text{ N}$",
      "$100\\text{ N}$",
      "$150\\text{ N}$",
      "$200\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Impuls-Momentum (Vektor):</strong><br>Impuls gaya sama dengan perubahan momentum partikel: $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_2 - \\vec{v}_1)$. Perhatikan tanda positif dan negatif arah vektor kecepatan!</div>",
      "steps": "<ol><li>Tetapkan arah kanan sebagai positif ($+$) dan arah kiri sebagai negatif ($-$).</li><li>$v_1 = -10\\text{ m/s}$, $v_2 = +15\\text{ m/s}$.</li><li>Perubahan momentum: $\\Delta p = m(v_2 - v_1) = 0{,}2 \\cdot (15 - (-10)) = 0{,}2 \\cdot 25 = 5\\text{ N}\\cdot\\text{s}$.</li><li>Gaya rata-rata: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{5}{0{,}02} = 250\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengurangkan kecepatan tanpa memperhatikan tanda arah: $15 - 10 = 5\\text{ m/s}$, sehingga menghasilkan $F = 50\\text{ N}$ yang salah fatal.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momentum dan Impuls",
    "subTopic": "Momentum dan Impuls",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "sedang-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-2",
    "category": "Momentum - Tumbukan Lenting Sempurna Dua Massa Sama",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah bola biliar $A$ bermassa $m_A = 0{,}2\\text{ kg}$ meluncur dengan kecepatan $v_A = 4\\text{ m/s}$ ke arah kanan dan menumbuk bola biliar $B$ bermassa sama $m_B = 0{,}2\\text{ kg}$ yang sedang diam di atas meja licin ($v_B = 0$). Jika tumbukan berlangsung lenting sempurna ($e = 1$), kecepatan bola $A$ ($v_A'$) dan bola $B$ ($v_B'$) sesaat setelah tumbukan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v_A' = 0\\text{ m/s}$ dan $v_B' = 4\\text{ m/s}$ ke kanan",
      "$v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -4\\text{ m/s}$ dan $v_B' = 0\\text{ m/s}$",
      "$v_A' = 1\\text{ m/s}$ dan $v_B' = 3\\text{ m/s}$ ke kanan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Karakteristik Tumbukan Lenting Sempurna Dua Massa Identik ($m_1 = m_2, e = 1$):</strong><br>\n          Kedua benda akan saling bertukar kecepatan secara utuh:<br>\n          $$v_1' = v_2 \\quad \\text{dan} \\quad v_2' = v_1$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hukum Kekekalan Momentum:\n            $$m(4) + m(0) = m v_A' + m v_B' \\implies v_A' + v_B' = 4$$\n          </li>\n          <li>Koefisien Restitusi ($e = 1$):\n            $$e = -\\frac{v_A' - v_B'}{v_A - v_B} = 1 \\implies -(v_A' - v_B') = 4 - 0 \\implies -v_A' + v_B' = 4$$\n          </li>\n          <li>Jumlahkan kedua persamaan:\n            $$2 v_B' = 8 \\implies v_B' = 4\\text{ m/s}$$\n            $$v_A' = 4 - 4 = 0\\text{ m/s}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Opsi $v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ terjadi pada kasus tumbukan tidak lenting sama sekali ($e = 0$), bukan lenting sempurna.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Momentum dan Impuls",
    "subTopic": "Momentum dan Impuls",
    "chapterTitle": "Dinamika"
  },
  {
    "id": "sup-fis-din-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-2",
    "category": "Tumbukan Tidak Lenting Sama Sekali",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebutir peluru bermassa $20\\text{ gram}$ meluncur horizontal dengan kecepatan $300\\text{ m/s}$ menumbuk balok kayu bermassa $980\\text{ gram}$ yang diam di atas lantai licin. Peluru bersarang di dalam balok dan keduanya meluncur bersama. Kecepatan balok beserta peluru setelah tumbukan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$9\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Kekekalan Momentum Linear:</strong><br>Pada tumbukan tidak lenting sama sekali ($e = 0$), kedua benda bergabung menjadi satu massa dengan kecepatan akhir bersama ($v'$): $m_1 v_1 + m_2 v_2 = (m_1 + m_2) v'$.</div>",
      "steps": "<ol><li>Konversi satuan ke kg: $m_p = 0{,}02\\text{ kg}$, $m_b = 0{,}98\\text{ kg}$.</li><li>Momentum sebelum: $p = 0{,}02 \\times 300 + 0 = 6\\text{ kg}\\cdot\\text{m/s}$.</li><li>Massa gabungan: $M = 0{,}02 + 0{,}98 = 1{,}0\\text{ kg}$.</li><li>Kecepatan bersama: $v' = \\frac{p}{M} = \\frac{6}{1{,}0} = 6\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengonversi satuan gram ke kilogram atau salah menjumlahkan massa total peluru dan balok.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momentum dan Impuls",
    "subTopic": "Momentum dan Impuls",
    "chapterTitle": "Dinamika"
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
