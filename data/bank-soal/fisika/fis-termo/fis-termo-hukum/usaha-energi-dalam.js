/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Usaha & Energi Dalam (fis-termo-hukum-usaha)
 * Slug: usaha-energi-dalam
 * Indikator: Usaha luar sistem gas (W = integral P dV) dan perubahan energi dalam gas monoatomik/diatomik.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-usaha";
  const subTopicSlug = "usaha-energi-dalam";
  const questions = [
  {
    "id": "drill2-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha Total Siklus Tertutup Diagram P-V",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu siklus termodinamika persegi panjang pada diagram $P-V$ bekerja di antara tekanan $P_1 = 1 \\times 10^5\\text{ Pa}$ dan $P_2 = 4 \\times 10^5\\text{ Pa}$, serta volume $V_1 = 2\\text{ m}^3$ dan $V_2 = 5\\text{ m}^3$. Jika arah siklus berputar searah jarum jam, maka usaha total ($W_{\\text{siklus}}$) yang dihasilkan dalam satu siklus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 \\times 10^5\\text{ Joule}$ ($900\\text{ kJ}$)",
      "$3 \\times 10^5\\text{ Joule}$ ($300\\text{ kJ}$)",
      "$12 \\times 10^5\\text{ Joule}$ ($1200\\text{ kJ}$)",
      "$6 \\times 10^5\\text{ Joule}$ ($600\\text{ kJ}$)",
      "$0\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Usaha Bersih Siklus Tertutup:</strong><br>Usaha total yang dihasilkan mesin dalam satu siklus penuh sama dengan <strong>luas area daerah tertutup</strong> pada diagram $P-V$:<br>$$W_{\\text{siklus}} = \\text{Luas Persegi Panjang} = \\Delta P \\cdot \\Delta V$$</div>",
      "steps": "<ol><li>Perubahan tekanan: $\\Delta P = P_2 - P_1 = 4 \\times 10^5 - 1 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$.</li><li>Perubahan volume: $\\Delta V = V_2 - V_1 = 5 - 2 = 3\\text{ m}^3$.</li><li>Usaha total: $W = \\Delta P \\times \\Delta V = (3 \\times 10^5) \\times 3 = 9 \\times 10^5\\text{ Joule} = 900\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Arah Siklus:</strong><br>• Searah jarum jam (CW) $\\implies$ Mesin Kalor ($W > 0$).<br>• Berlawanan jarum jam (CCW) $\\implies$ Mesin Pendingin ($W < 0$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "usaha-energi-dalam"
  },
  {
    "id": "drill2-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Energi Dalam pada Satu Siklus Lengkap",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam satu siklus termodinamika lengkap (di mana gas kembali tepat ke keadaan termal semula), besar perubahan energi dalam gas ($\\Delta U_{\\text{siklus}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu nol ($0\\text{ Joule}$)",
      "Sama dengan usaha luar yang dilakukan",
      "Sama dengan kalor yang diserap dari reservoir panas",
      "Tergantung pada jenis gas monoatomik atau diatomik",
      "Selalu bernilai positif"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Fungsi Keadaan Energi Dalam ($U$):</strong><br>Energi dalam adalah fungsi keadaan yang hanya bergantung pada suhu saat itu. Dalam satu siklus tertutup, gas kembali ke suhu awal ($T_{\\text{akhir}} = T_{\\text{awal}}$), sehingga:<br>$$\\Delta U_{\\text{siklus}} = 0 \\implies Q_{\\text{total}} = W_{\\text{total}}$$</div>",
      "steps": "<ol><li>Karena keadaan akhir sama dengan keadaan awal: $T_f = T_i$.</li><li>$\\Delta U = \\frac{3}{2} n R (T_f - T_i) = 0$.</li><li>Kalor netto yang diserap seluruhnya diubah menjadi usaha netto: $Q_{\\text{net}} = W_{\\text{net}}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Pokok Siklus:</strong> Dalam satu siklus tertutup PENUH, $\\Delta U$ selalu NOL. Usaha dan kalor tidak nol, tapi sama besar ($W_{\\text{net}} = Q_{\\text{net}}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "usaha-energi-dalam"
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
