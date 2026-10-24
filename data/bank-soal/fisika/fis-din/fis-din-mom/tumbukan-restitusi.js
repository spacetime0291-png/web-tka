/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Tumbukan & Koefisien Restitusi (fis-din-mom-tumbukan)
 * Slug: tumbukan-restitusi
 * Indikator: Tumbukan lenting sempurna (e=1), lenting sebagian (0 < e < 1), dan tidak lenting sama sekali (e=0).
 * 
 * Total Butir Soal: 2 (Mudah: 0, Sedang: 2, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-tumbukan";
  const subTopicSlug = "tumbukan-restitusi";
  const questions = [
  {
    "id": "sedang-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-tumbukan",
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
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "tumbukan-restitusi"
  },
  {
    "id": "sup-fis-din-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-tumbukan",
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
    "subBab": "Tumbukan & Koefisien Restitusi",
    "subTopic": "Tumbukan & Koefisien Restitusi",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "tumbukan-restitusi"
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
