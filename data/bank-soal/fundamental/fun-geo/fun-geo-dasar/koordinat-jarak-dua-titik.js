/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Koordinat & Jarak Dua Titik (fun-geo-dasar-koordinat)
 * Slug: koordinat-jarak-dua-titik
 * Indikator: Jarak antara dua titik pada bidang Kartesius dan penentuan titik tengah.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-koordinat";
  const subTopicSlug = "koordinat-jarak-dua-titik";
  const questions = [
  {
    "id": "sup-mtk-fun-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subTopicId": "fun-geo-dasar-koordinat",
    "category": "Jarak Antartitik Koordinat Kartesius",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jarak Euclidean antara titik koordinat $A(-2, 3)$ dan titik $B(4, -5)$ pada bidang Kartesius adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10$",
      "$12$",
      "$8$",
      "$\\sqrt{74}$",
      "$14$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jarak Dua Titik Bidang Kartesius:</strong><br>$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</div>",
      "steps": "<ol><li>$\\Delta x = 4 - (-2) = 6$.</li><li>$\\Delta y = -5 - 3 = -8$.</li><li>$d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah dalam operasi tanda negatif: $4 - (-2) \\neq 2$.</div>"
    },
    "bab": "Geometri Analitik Bidang",
    "subBab": "Koordinat & Jarak Dua Titik",
    "subTopic": "Koordinat & Jarak Dua Titik",
    "chapterTitle": "Geometri Analitik Bidang",
    "subChapterId": "fun-geo-dasar",
    "subTopicSlug": "koordinat-jarak-dua-titik"
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
