/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Sudut Istimewa & Relasi Kuadran (fun-trig-dasar-kuadran)
 * Slug: sudut-istimewa-relasi-kuadran
 * Indikator: Nilai sudut istimewa dan tanda perbandingan trigonometri pada empat kuadran.
 * 
 * Total Butir Soal: 2 (Mudah: 2, Sedang: 0, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-kuadran";
  const subTopicSlug = "sudut-istimewa-relasi-kuadran";
  const questions = [
  {
    "id": "mudah-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Trigonometri Dasar (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui suatu sudut lancip $\\alpha$ pada kuadran I memenuhi $\\sin\\alpha = \\frac{3}{5}$. Nilai dari $\\cos 2\\alpha$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{7}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{9}{25}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Sudut Rangkap Kosinus:</strong><br>\n          $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1 = \\cos^2\\alpha - \\sin^2\\alpha$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Gunakan bentuk langsung dengan sinus:\n            $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$$\n          </li>\n          <li>Substitusi $\\sin\\alpha = \\frac{3}{5}$:\n            $$\\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar antara rumus $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ dengan $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$. Pilihan A (24/25) adalah nilai $\\sin 2\\alpha$!\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "sudut-istimewa-relasi-kuadran"
  },
  {
    "id": "sup-mtk-fun-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Relasi Sudut Kuadran II, III, dan IV",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai eksak dari ekspresi trigonometri $\\sin 150^\\circ + \\cos 240^\\circ - \\tan 315^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$-1$",
      "$2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Relasi Sudut Antar Kuadran:</strong><br>• Kuadran II: $\\sin(180^\\circ - \\alpha) = +\\sin \\alpha$<br>• Kuadran III: $\\cos(180^\\circ + \\alpha) = -\\cos \\alpha$<br>• Kuadran IV: $\\tan(360^\\circ - \\alpha) = -\\tan \\alpha$</div>",
      "steps": "<ol><li>$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = +\\frac{1}{2}$.</li><li>$\\cos 240^\\circ = \\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.</li><li>$\\tan 315^\\circ = \\tan(360^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$.</li><li>Hasil akhir: $\\left(+\\frac{1}{2}\\right) + \\left(-\\frac{1}{2}\\right) - (-1) = 0 + 1 = 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah menentukan tanda aljabar trigonometri pada kuadran III dan IV.</div>"
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "sudut-istimewa-relasi-kuadran"
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
