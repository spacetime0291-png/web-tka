/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Hukum I Termodinamika (fis-termo-hukum-hukum1)
 * Slug: hukum-1-termodinamika
 * Indikator: Prinsip kekekalan energi pada sistem termodinamika (Q = Delta U + W).
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-hukum1";
  const subTopicSlug = "hukum-1-termodinamika";
  const questions = [
  {
    "id": "drill2-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Penerapan Tanda Hukum I Termodinamika",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sistem gas melepaskan kalor ke lingkungan sebesar $300\\text{ Joule}$, dan pada saat bersamaan dilakukan usaha luar untuk menekan gas tersebut sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-100\\text{ Joule}$",
      "$+100\\text{ Joule}$",
      "$-500\\text{ Joule}$",
      "$+500\\text{ Joule}$",
      "$-300\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perjanjian Tanda Baku Hukum I Termodinamika:</strong><br>$$\\Delta U = Q - W$$<br>• Sistem <strong>melepas kalor</strong>: $Q < 0$ ($Q = -300\\text{ J}$)<br>• Sistem <strong>menerima usaha</strong> (ditekan dari luar): $W < 0$ ($W = -200\\text{ J}$)</div>",
      "steps": "<ol><li>Masukkan tanda dengan tepat: $Q = -300\\text{ J}$, $W = -200\\text{ J}$.</li><li>Hitung $\\Delta U$: $\\Delta U = (-300) - (-200) = -300 + 200 = -100\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tabel Tanda:</strong><br>• Menyerap kalor $\\implies Q > 0$<br>• Melepas kalor $\\implies Q < 0$<br>• Melakukan kerja $\\implies W > 0$<br>• Menerima kerja $\\implies W < 0$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "hukum-1-termodinamika"
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
