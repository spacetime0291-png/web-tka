/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Hukum I dan II Kirchhoff (fis-lis-dc-kirchhoff)
 * Slug: hukum-1-dan-2-kirchhoff
 * Indikator: Hukum percabangan arus dan analisis rangkaian tertutup satu dan multi-loop.
 * 
 * Total Butir Soal: 1 (Mudah: 0, Sedang: 0, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-kirchhoff";
  const subTopicSlug = "hukum-1-dan-2-kirchhoff";
  const questions = [
  {
    "id": "hots-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Rangkaian Arus Searah & Kirchhoff",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Perhatikan skema rangkaian listrik tertutup 2-loop di bawah ini. Rangkaian ditenagai oleh dua sumber tegangan ggl ideal $\\mathcal{E}_1 = 24\\text{ V}$ dan $\\mathcal{E}_2 = 12\\text{ V}$, serta dihubungkan dengan tiga resistor $R_1 = 3\\,\\Omega$, $R_2 = 6\\,\\Omega$, dan $R_3 = 6\\,\\Omega$. Tentukan besar kuat arus yang mengalir melalui hambatan cabang tengah $R_2$ ($I_{R2}$) dengan arah dari simpul $A$ ke simpul $B$, serta besar beda potensial antara kedua simpul ($V_{AB} = V_A - V_B$)!",
    "hasDiagram": true,
    "diagramSvg": "\n      <svg class=\"diagram-svg\" viewBox=\"0 0 380 250\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"190\" cy=\"40\" r=\"5\" fill=\"#FACC15\"/>\n        <text x=\"195\" y=\"32\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">Simpul A</text>\n        \n        <circle cx=\"190\" cy=\"210\" r=\"5\" fill=\"#FACC15\"/>\n        <text x=\"195\" y=\"230\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">Simpul B (Ground)</text>\n\n        <!-- Left Loop -->\n        <polyline points=\"190,40 50,40 50,90\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"35\" y1=\"90\" x2=\"65\" y2=\"90\" stroke=\"#22C55E\" stroke-width=\"3\"/>\n        <line x1=\"42\" y1=\"98\" x2=\"58\" y2=\"98\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n        <text x=\"70\" y=\"96\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">ℰ₁=24V</text>\n        <polyline points=\"50,98 50,130\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"50,130 42,135 58,142 42,149 58,156 50,161\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"68\" y=\"150\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">R₁=3Ω</text>\n        <polyline points=\"50,161 50,210 190,210\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n\n        <!-- Middle Branch -->\n        <line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"95\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"190,95 182,102 198,110 182,118 198,126 190,133\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"206\" y=\"118\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">R₂=6Ω</text>\n        <line x1=\"190\" y1=\"133\" x2=\"190\" y2=\"210\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"172\" y1=\"100\" x2=\"172\" y2=\"135\" stroke=\"#FF5A26\" stroke-width=\"2\"/>\n        <polygon points=\"169,132 172,140 175,132\" fill=\"#FF5A26\"/>\n        <text x=\"140\" y=\"122\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">I_R2 ↓</text>\n\n        <!-- Right Loop -->\n        <polyline points=\"190,40 330,40 330,90\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"315\" y1=\"90\" x2=\"345\" y2=\"90\" stroke=\"#22C55E\" stroke-width=\"3\"/>\n        <line x1=\"322\" y1=\"98\" x2=\"338\" y2=\"98\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n        <text x=\"265\" y=\"96\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">ℰ₂=12V</text>\n        <polyline points=\"330,98 330,130\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"330,130 322,135 338,142 322,149 338,156 330,161\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"272\" y=\"150\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">R₃=6Ω</text>\n        <polyline points=\"330,161 330,210 190,210\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n      </svg>\n    ",
    "diagramCaption": "SKEMA 2-LOOP MULTI-BRANCH: HUKUM KIRCHHOFF & SIMPUL NODAL",
    "options": [
      "$I_{R2} = 2{,}50\\text{ A}$ dan $V_{AB} = 15{,}0\\text{ V}$",
      "$I_{R2} = 2{,}00\\text{ A}$ dan $V_{AB} = 12{,}0\\text{ V}$",
      "$I_{R2} = 3{,}00\\text{ A}$ dan $V_{AB} = 18{,}0\\text{ V}$",
      "$I_{R2} = 1{,}50\\text{ A}$ dan $V_{AB} = 9{,}0\\text{ V}$",
      "$I_{R2} = 3{,}50\\text{ A}$ dan $V_{AB} = 21{,}0\\text{ V}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Analisis Tegangan Nodal (Node Voltage Method):</strong><br>\n          Tetapkan simpul referensi tanah (ground) pada simpul bawah $B$ dengan $V_B = 0\\text{ V}$. Maka beda potensial $V_{AB} = V_A - 0 = V_A$.<br>\n          $$\\Sigma I_{\\text{keluar dari node } A} = 0 \\implies \\sum \\frac{V_A - V_k}{R_k} = 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>\n            <strong>Rumuskan Arus Keluar dari Simpul A:</strong><br>\n            • Cabang kiri: $I_1 = \\frac{V_A - 24}{3}$<br>\n            • Cabang tengah: $I_2 = \\frac{V_A - 0}{6}$<br>\n            • Cabang kanan: $I_3 = \\frac{V_A - 12}{6}$\n          </li>\n          <li>\n            <strong>Penerapan KCL pada Simpul A:</strong><br>\n            $$\\frac{V_A - 24}{3} + \\frac{V_A}{6} + \\frac{V_A - 12}{6} = 0$$\n          </li>\n          <li>\n            <strong>Kalikan dengan 6 untuk Menghilangkan Pecahan:</strong><br>\n            $$2(V_A - 24) + V_A + (V_A - 12) = 0$$\n            $$2V_A - 48 + V_A + V_A - 12 = 0$$\n            $$4V_A = 60 \\implies V_A = 15{,}0\\text{ V}$$\n          </li>\n          <li>\n            <strong>Hitung Arus Cabang Tengah $I_{R2}$:</strong><br>\n            $$I_{R2} = \\frac{V_A}{R_2} = \\frac{15{,}0\\text{ V}}{6\\,\\Omega} = 2{,}50\\text{ A}$$\n            $$V_{AB} = V_A - V_B = 15{,}0 - 0 = 15{,}0\\text{ V}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering terjadi kekeliruan polaritas baterai: pelat panjang bernilai positif ($+24\\text{ V}$ dan $+12\\text{ V}$). Pastikan arah arus konsisten keluar atau masuk simpul.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "hukum-1-dan-2-kirchhoff"
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
