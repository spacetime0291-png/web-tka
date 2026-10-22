/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Sub-topik: Vektor (mtk-geo-1)
 * Indikator: Komponen vektor R2 & R3; besar/panjang vektor; penjumlahan & pengurangan; perkalian skalar dua vektor (dot product).
 * 
 * Total Butir Soal: 3 Soal (Mudah: 2, Sedang: 1, HOTS: 0)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-geo-1";
  const questions = [
  {
    "id": "mudah-mtk-10",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-1",
    "category": "Perkalian Skalar Dua Vektor (Dot Product)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui dua buah vektor pada bidang datar $\\vec{u} = 3\\hat{i} - 4\\hat{j}$ dan $\\vec{v} = 2\\hat{i} + 5\\hat{j}$. Nilai perkalian skalar $(\\vec{u} \\cdot \\vec{v})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-26$",
      "$-14$",
      "$-6$",
      "$14$",
      "$26$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Perkalian Skalar (Dot Product) Dua Vektor:</strong><br>\n          $$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Identifikasi komponen: $u_x = 3, u_y = -4$ dan $v_x = 2, v_y = 5$.</li>\n          <li>Hitung perkalian skalar:\n            $$\\vec{u} \\cdot \\vec{v} = (3)(2) + (-4)(5) = 6 - 20 = -14$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hasil kali skalar (dot product) berupa bilangan skalar real, bukan vektor. Perhatikan tanda negatif pada komponen $u_y = -4$.\n        </div>\n      "
    }
  },
  {
    "id": "sup-mtk-geo-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-1",
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
    }
  },
  {
    "id": "sedang-mtk-04",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mtk-geo",
    "subTopicId": "mtk-geo-1",
    "category": "Perkalian Skalar & Sudut Vektor",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui vektor $\\vec{u} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ dan vektor $\\vec{v} = \\hat{i} + \\hat{j}$. Besar sudut $\\theta$ yang dibentuk oleh vektor $\\vec{u}$ dan $\\vec{v}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$\\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kosinus Sudut Dua Vektor:</strong><br>\n          $$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung dot product $\\vec{u} \\cdot \\vec{v}$:\n            $$\\vec{u} \\cdot \\vec{v} = (2)(1) + (-1)(1) + (2)(0) = 2 - 1 + 0 = 1$$\n          </li>\n          <li>Hitung panjang masing-masing vektor:\n            $$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$\n            $$|\\vec{v}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$$\n          </li>\n          <li>Hitung kosinus sudut $\\theta$:\n            $$\\cos\\theta = \\frac{1}{3\\sqrt{2}}$$\n            $$\\theta = \\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa komponen $\\hat{k}$ pada vektor $\\vec{v}$ adalah nol karena hanya ditulis $\\hat{i} + \\hat{j}$.\n        </div>\n      "
    }
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
