/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Gerak Lurus Berubah Beraturan (GLBB) (fis-kin-gl-glbb)
 * Slug: glbb
 * Indikator: Karakteristik GLBB (a = konstan), persamaan percepatan, kecepatan akhir, dan jarak tempuh.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-glbb";
  const subTopicSlug = "glbb";
  const questions = [
  {
    "id": "mudah-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-glbb",
    "category": "Gerak Lurus Beraturan (GLB/GLBB)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil bergerak lurus dengan kecepatan awal $10\\text{ m/s}$ kemudian dipercepat secara konstan sebesar $2\\text{ m/s}^2$ selama $5\\text{ detik}$. Jarak total yang ditempuh mobil selama selang waktu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ meter}$",
      "$65\\text{ meter}$",
      "$75\\text{ meter}$",
      "$85\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kinematika GLBB Dipercepat:</strong><br>\n          $$s = v_0 t + \\frac{1}{2} a t^2$$\n          dengan $v_0$ kecepatan awal, $a$ percepatan, dan $t$ selang waktu.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Identifikasi Variabel:</strong><br>\n            $v_0 = 10\\text{ m/s}$, $a = 2\\text{ m/s}^2$, $t = 5\\text{ s}$.\n          </li>\n          <li><strong>Substitusi ke Persamaan Jarak GLBB:</strong><br>\n            $$s = (10)(5) + \\frac{1}{2}(2)(5^2) = 50 + 25 = 75\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Kesalahan Umum:</strong> Lupa memangkatkan waktu $t^2 = 25$ atau lupa mengalikan dengan $\\frac{1}{2}$.\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Gerak Lurus Berubah Beraturan (GLBB)",
    "subTopic": "Gerak Lurus Berubah Beraturan (GLBB)",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "glbb"
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
