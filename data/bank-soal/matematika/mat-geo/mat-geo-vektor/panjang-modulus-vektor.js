/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Vektor (mat-geo-vektor)
 * Sub-Bab: Panjang (Modulus) Vektor (mat-geo-vektor-panjang)
 * Slug: panjang-modulus-vektor
 * Indikator: Besar modulus vektor |u| = sqrt(x^2 + y^2 + z^2) dan vektor satuan.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-vektor-panjang";
  const subTopicSlug = "panjang-modulus-vektor";
  const questions = [
  {
    "id": "sup-mtk-geo-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-vektor-panjang",
    "category": "Panjang dan Vektor Satuan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui sebuah vektor pada ruang tiga dimensi $\\mathbb{R}^3$ adalah $\\vec{v} = 3\\hat{i} - 4\\hat{j} + 12\\hat{k}$. Panjang (besar) dari vektor $\\vec{v}$ tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$13$",
      "$11$",
      "$15$",
      "$\\sqrt{17}$",
      "$19$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Panjang (Norm) Vektor Dimensi Tiga:</strong><br>Untuk $\\vec{v} = v_x \\hat{i} + v_y \\hat{j} + v_z \\hat{k}$, panjang vektor didefinisikan sebagai $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$.</div>",
      "steps": "<ol><li>Komponen vektor: $v_x = 3$, $v_y = -4$, $v_z = 12$.</li><li>$|\\vec{v}| = \\sqrt{3^2 + (-4)^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa mengkuadratkan tanda negatif sehingga keliru menghitung $9 - 16 + 144$.</div>"
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang (Modulus) Vektor",
    "subTopic": "Panjang (Modulus) Vektor",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-vektor",
    "subTopicSlug": "panjang-modulus-vektor"
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
