/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Energi dan Daya Listrik (fis-lis-dc-daya)
 * Slug: energi-dan-daya-listrik
 * Indikator: Energi listrik disipasi (W = P * t) dan daya listrik pada resistor (P = I^2 * R = V^2 / R).
 * 
 * Total Butir Soal: 2 (Mudah: 1, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-daya";
  const subTopicSlug = "energi-dan-daya-listrik";
  const questions = [
  {
    "id": "sup-fis-lis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Hukum Ohm & Daya Listrik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lampu pijar bertuliskan spesifikasi daya $100\\text{ W} / 220\\text{ V}$. Apabila lampu tersebut dihubungkan ke sumber tegangan jaringan yang turun menjadi $110\\text{ V}$, dan dengan menganggap nilai hambatan kawat lampu konstan, daya disipasi lampu tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ W}$",
      "$50\\text{ W}$",
      "$75\\text{ W}$",
      "$12{,}5\\text{ W}$",
      "$100\\text{ W}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Daya Listrik Kuadratik Terhadap Tegangan:</strong><br>$P = \\frac{V^2}{R}$. Karena hambatan filamen lampu $R$ tetap, perbandingan daya listrik adalah kuadrat perbandingan tegangan: $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$.</div>",
      "steps": "<ol><li>Rasio tegangan: $\\frac{V_2}{V_1} = \\frac{110}{220} = \\frac{1}{2}$.</li><li>Rasio daya: $\\frac{P_2}{P_1} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</li><li>Daya lampu: $P_2 = \\frac{1}{4} \\times 100 = 25\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering keliru menganggap hubungan linier $P \\propto V$ sehingga menjawab setengahnya ($50\\text{ W}$).</div>"
    },
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "energi-dan-daya-listrik"
  },
  {
    "id": "sedang-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Hukum II Kirchhoff Rangkaian 1 Loop",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu rangkaian tertutup satu loop terdiri dari dua sumber tegangan baterai $\\mathcal{E}_1 = 18\\text{ V}$ dan $\\mathcal{E}_2 = 6\\text{ V}$ yang dipasang saling berhadapan kutub positifnya, serta dua hambatan $R_1 = 3\\,\\Omega$ dan $R_2 = 1\\,\\Omega$. Jika hambatan dalam baterai diabaikan, kuat arus listrik yang mengalir dalam rangkaian dan daya disipasi pada resistor $R_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ A}$ dan $12\\text{ W}$",
      "$3\\text{ A}$ dan $18\\text{ W}$",
      "$3\\text{ A}$ dan $27\\text{ W}$",
      "$4\\text{ A}$ dan $36\\text{ W}$",
      "$6\\text{ A}$ dan $54\\text{ W}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum II Kirchhoff Loop Tunggal:</strong><br>\n          $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0 \\implies I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_{\\text{total}}}$$<br>\n          Daya disipasi resistor: $P = I^2 R$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Karena kutub baterai saling berlawanan, GGL resultan adalah selisih keduanya:\n            $$\\mathcal{E}_{\\text{net}} = 18 - 6 = 12\\text{ V}$$\n          </li>\n          <li>Hambatan total: $R_{\\text{total}} = 3 + 1 = 4\\,\\Omega$.</li>\n          <li>Kuat arus listrik:\n            $$I = \\frac{12\\text{ V}}{4\\,\\Omega} = 3\\text{ Ampere}$$\n          </li>\n          <li>Daya pada resistor $R_1$:\n            $$P_1 = I^2 R_1 = (3^2) \\times 3 = 9 \\times 3 = 27\\text{ Watt}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering keliru menjumlahkan tegangan baterai ($18 + 6 = 24\\text{ V}$) tanpa memperhatikan arah kutub baterai yang saling berlawanan.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "energi-dan-daya-listrik"
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
