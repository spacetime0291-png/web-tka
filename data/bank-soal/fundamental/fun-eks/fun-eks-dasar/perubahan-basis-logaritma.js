/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Perubahan Basis Logaritma (fun-eks-dasar-basis)
 * Slug: perubahan-basis-logaritma
 * Indikator: Rumus pengubahan basis logaritma dan sifat perkalian rantai basis logaritma.
 * 
 * Total Butir Soal: 1 (Mudah: 1, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-basis";
  const subTopicSlug = "perubahan-basis-logaritma";
  const questions = [
  {
    "id": "sup-mtk-fun-05",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subTopicId": "fun-eks-dasar-basis",
    "category": "Sifat Perubahan Basis Logaritma",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Jika diketahui $^2\\log 3 = a$ dan $^2\\log 5 = b$, maka nilai dari $^{10}\\log 15$ dinyatakan dalam variabel $a$ dan $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a + b}{1 + b}$",
      "$\\frac{a + b}{a + 1}$",
      "$\\frac{a \\cdot b}{1 + b}$",
      "$\\frac{a + 1}{b + 1}$",
      "$\\frac{a + b}{2 + b}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Perubahan Basis Logaritma:</strong><br>$^c\\log d = \\frac{^p\\log d}{^p\\log c}$. Ubah ke basis referensi yang diketahui (basis 2).</div>",
      "steps": "<ol><li>Ubah basis 10 ke basis 2: $^{10}\\log 15 = \\frac{^2\\log 15}{^2\\log 10}$.</li><li>Faktorkan numerus prima: $^{10}\\log 15 = \\frac{^2\\log (3 \\times 5)}{^2\\log (2 \\times 5)}$.</li><li>Terapkan sifat perkalian: $\\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 5}$.</li><li>Substitusi: $\\frac{a + b}{1 + b}$ (karena $^2\\log 2 = 1$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah menganggap $^2\\log 10 = 2 \\times ^2\\log 5$ bukannya $^2\\log 2 + ^2\\log 5 = 1 + b$.</div>"
    },
    "bab": "Eksponen dan Logaritma",
    "subBab": "Perubahan Basis Logaritma",
    "subTopic": "Perubahan Basis Logaritma",
    "chapterTitle": "Eksponen dan Logaritma",
    "subChapterId": "fun-eks-dasar",
    "subTopicSlug": "perubahan-basis-logaritma"
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
