/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Momentum dan Impuls (fis-din-mom)
 * Sub-Bab: Hukum Kekekalan Momentum (fis-din-mom-kekekalan)
 * Slug: kekekalan-momentum
 * Indikator: Kekekalan momentum total pada sistem terisolasi tanpa gaya luar.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-mom-kekekalan";
  const subTopicSlug = "kekekalan-momentum";
  const questions = [
  {
    "id": "drill-rot-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-mom-kekekalan",
    "category": "Hukum Kekekalan Momentum Sudut",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang atlet seluncur es berputar dengan kecepatan sudut $\\omega_1 = 3\\text{ rad/s}$ saat merentangkan kedua tangannya, di mana momen inersia tubuhnya saat itu adalah $I_1 = 4\\text{ kg}\\cdot\\text{m}^2$. Ketika atlet tersebut melipat kedua tangannya merapat ke dada, momen inersianya berkurang menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$. Jika gesekan es diabaikan, kecepatan sudut putaran atlet sekarang ($\\omega_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ rad/s}$",
      "$6\\text{ rad/s}$",
      "$4\\text{ rad/s}$",
      "$12\\text{ rad/s}$",
      "$2\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Kekekalan Momentum Sudut:</strong><br>Jika tidak ada torsi luar yang bekerja pada sistem ($\\Sigma \\tau_{\\text{eksternal}} = 0$), maka momentum sudut sistem kekal:<br>$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$</div>",
      "steps": "<ol><li>Momentum sudut awal: $L_1 = I_1 \\omega_1 = 4 \\times 3 = 12\\text{ kg}\\cdot\\text{m}^2\\text{/s}$.</li><li>Karena momentum sudut kekal: $I_2 \\omega_2 = 12$.</li><li>Kecepatan sudut baru: $\\omega_2 = \\frac{12}{1{,}5} = 8\\text{ rad/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Fisika Riil:</strong> Saat atlet melipat tangan, jari-jari massa terhadap sumbu putar mengecil $\\implies$ momen inersia $I$ mengecil $\\implies$ kecepatan putar $\\omega$ melonjak naik drastis!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum Kekekalan Momentum",
    "subTopic": "Hukum Kekekalan Momentum",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-mom",
    "subTopicSlug": "kekekalan-momentum"
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
