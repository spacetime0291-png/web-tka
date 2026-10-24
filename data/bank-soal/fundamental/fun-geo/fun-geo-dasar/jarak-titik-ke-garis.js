/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Jarak Titik ke Garis (fun-geo-dasar-jarak)
 * Slug: jarak-titik-ke-garis
 * Indikator: Jarak tegak lurus dari titik ke garis lurus pada bidang Kartesius.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 1, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-jarak";
  const subTopicSlug = "jarak-titik-ke-garis";
  const questions = [
  {
    "id": "sedang-mtk-10",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subTopicId": "fun-geo-dasar-jarak",
    "category": "Jarak Titik ke Garis Lurus",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Jarak tegak lurus terpendek dari titik koordinat $P(2, 3)$ ke garis lurus dengan persamaan $4x + 3y - 7 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ satuan}$",
      "$2\\text{ satuan}$",
      "$3\\text{ satuan}$",
      "$4\\text{ satuan}$",
      "$5\\text{ satuan}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Jarak Titik $(x_1, y_1)$ ke Garis $Ax + By + C = 0$:</strong><br>\n          $$d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi nilai koefisien: $A = 4, B = 3, C = -7$ serta titik $(x_1, y_1) = (2, 3)$.</li>\n          <li>Substitusi ke rumus jarak:\n            $$d = \\frac{|4(2) + 3(3) - 7|}{\\sqrt{4^2 + 3^2}} = \\frac{|8 + 9 - 7|}{\\sqrt{16 + 9}}$$\n          </li>\n          <li>Sederhanakan pembilang dan penyebut:\n            $$d = \\frac{|10|}{\\sqrt{25}} = \\frac{10}{5} = 2\\text{ satuan panjang}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda mutlak di pembilang untuk memastikan nilai jarak selalu bernilai non-negatif.\n        </div>\n      "
    },
    "bab": "Geometri Analitik Bidang",
    "subBab": "Jarak Titik ke Garis",
    "subTopic": "Jarak Titik ke Garis",
    "chapterTitle": "Geometri Analitik Bidang",
    "subChapterId": "fun-geo-dasar",
    "subTopicSlug": "jarak-titik-ke-garis"
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
