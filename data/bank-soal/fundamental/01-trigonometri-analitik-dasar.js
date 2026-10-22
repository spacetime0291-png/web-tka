/**
 * Bank Soal TKA: Bab Fundamental (Materi Prasyarat) - Bab Fundamental
 * Sub-topik: Trigonometri Analitik Dasar (mtk-fun-1)
 * Indikator: Perbandingan sisi (\sin, \cos, \tan) segitiga siku-siku; sudut istimewa kuadran I; relasi sudut kuadran II, III, IV; identitas Pythagoras (\sin^2 x + \cos^2 x = 1); sudut rangkap (\sin 2x, \cos 2x); jumlah & selisih sudut sinus & kosinus.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 1, HOTS: 1)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mtk-fun-1";
  const questions = [
  {
    "id": "mudah-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-1",
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
    "bab": "Bab Fundamental",
    "subBab": "Trigonometri Analitik Dasar",
    "subTopic": "Trigonometri Analitik Dasar",
    "chapterTitle": "Bab Fundamental"
  },
  {
    "id": "sup-mtk-fun-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-1",
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
    "bab": "Bab Fundamental",
    "subBab": "Trigonometri Analitik Dasar",
    "subTopic": "Trigonometri Analitik Dasar",
    "chapterTitle": "Bab Fundamental"
  },
  {
    "id": "sedang-mtk-09",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-1",
    "category": "Identitas Trigonometri Sudut Rangkap",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui nilai $\\tan x = \\frac{3}{4}$ dengan sudut $x$ berada pada kuadran III ($180^\\circ < x < 270^\\circ$). Nilai dari $\\sin 2x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{24}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Identitas Sinus Sudut Rangkap:</strong><br>\n          $$\\sin 2x = 2 \\sin x \\cos x$$<br>\n          Di kuadran III, nilai $\\sin x < 0$ dan $\\cos x < 0$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dari $\\tan x = \\frac{3}{4}$, sisi depan $= 3$, samping $= 4$, miring $= \\sqrt{3^2 + 4^2} = 5$.</li>\n          <li>Karena $x$ di kuadran III:\n            $$\\sin x = -\\frac{3}{5}, \\quad \\cos x = -\\frac{4}{5}$$\n          </li>\n          <li>Substitusi ke rumus sudut rangkap:\n            $$\\sin 2x = 2 \\left(-\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = 2 \\left(\\frac{12}{25}\\right) = \\frac{24}{25}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perkalian dua bilangan negatif menghasilkan nilai positif: $(-)(-) = (+)$, sehingga $\\sin 2x$ bernilai positif $+\\frac{24}{25}$.\n        </div>\n      "
    },
    "bab": "Bab Fundamental",
    "subBab": "Trigonometri Analitik Dasar",
    "subTopic": "Trigonometri Analitik Dasar",
    "chapterTitle": "Bab Fundamental"
  },
  {
    "id": "hots-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "mtk-fun",
    "subTopicId": "mtk-fun-1",
    "category": "Sifat Simetri & Identitas Trigonometri Lanjut",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Jika nilai dari ekspresi berikut dihitung pada interval $[0, \\pi]$:\n$$I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$$\nmaka nilai pasti dari integral tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi^2}{8}$",
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\pi$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>King's Property Sifat Simetri Integral:</strong><br>\n          $$\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a+b-x)\\,dx$$\n          Khusus untuk batas $[0, \\pi]$ dengan $x \\cdot g(\\sin x)$:\n          $$\\int_{0}^{\\pi} x g(\\sin x)\\,dx = \\frac{\\pi}{2} \\int_{0}^{\\pi} g(\\sin x)\\,dx$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Terapkan substitusi $x \\to \\pi - x$:\n            $$I = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)} \\, dx = \\int_{0}^{\\pi} \\frac{(\\pi - x)\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Jumlahkan kedua bentuk $I$:\n            $$2I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx \\implies I = \\frac{\\pi}{2} \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx$$\n          </li>\n          <li>Substitusi $u = \\cos x \\implies du = -\\sin x \\, dx$.<br>\n            Saat $x = 0 \\implies u = 1$; saat $x = \\pi \\implies u = -1$:\n            $$I = \\frac{\\pi}{2} \\int_{1}^{-1} \\frac{-du}{1 + u^2} = \\frac{\\pi}{2} \\int_{-1}^{1} \\frac{du}{1 + u^2}$$\n          </li>\n          <li>Anti-turunan baku $\\arctan(u)$:\n            $$I = \\frac{\\pi}{2} [\\arctan(1) - \\arctan(-1)] = \\frac{\\pi}{2} \\left[ \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right) \\right] = \\frac{\\pi}{2} \\left( \\frac{\\pi}{2} \\right) = \\frac{\\pi^2}{4}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengalikan $\\frac{\\pi}{2}$ dengan hasil integral $\\frac{\\pi}{2}$, sehingga mendapatkan $\\frac{\\pi}{2}$ atau salah tanda saat integrasi substitusi $u = \\cos x$.\n        </div>\n      "
    },
    "bab": "Bab Fundamental",
    "subBab": "Trigonometri Analitik Dasar",
    "subTopic": "Trigonometri Analitik Dasar",
    "chapterTitle": "Bab Fundamental"
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
