/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Sub-topik: Rangkaian Arus Searah (DC) (fis-lis-2)
 * Indikator: Hukum Ohm; Hukum I Kirchhoff; Hukum II Kirchhoff loop tertutup; hambatan pengganti campuran; energi dan daya listrik.
 * 
 * Total Butir Soal: 4 Soal (Mudah: 2, Sedang: 1, HOTS: 1)
 * Arsitektur: Modul Mandiri (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-2";
  const questions = [
  {
    "id": "mudah-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-2",
    "category": "Rangkaian Resistor Campuran Seri-Paralel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah resistor masing-masing bernilai $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $R_3 = 4\\,\\Omega$ dirangkai. Resistor $R_1$ dan $R_2$ dipasang secara paralel, kemudian kombinasi paralel tersebut dihubungkan seri dengan resistor $R_3$. Hambatan pengganti total rangkaian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\,\\Omega$",
      "$6\\,\\Omega$",
      "$8\\,\\Omega$",
      "$10\\,\\Omega$",
      "$22\\,\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hambatan Pengganti Seri & Paralel:</strong><br>\n          • Paralel dua resistor: $R_p = \\frac{R_1 R_2}{R_1 + R_2}$<br>\n          • Seri gabungan: $R_{\\text{total}} = R_p + R_3$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung hambatan paralel $R_1$ dan $R_2$:\n            $$R_p = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$$\n          </li>\n          <li>Jumlahkan secara seri dengan $R_3$:\n            $$R_{\\text{total}} = R_p + R_3 = 4\\,\\Omega + 4\\,\\Omega = 8\\,\\Omega$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan langsung menjumlahkan seluruh resistor ($6 + 12 + 4 = 22\\,\\Omega$), perhatikan hubungan paralel antara $R_1$ dan $R_2$.\n        </div>\n      "
    }
  },
  {
    "id": "sup-fis-lis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-2",
    "category": "Hukum Ohm & Daya Listrik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lampu pijar bertuliskan spesifikasi daya $100\\text{ W} / 220\\text{ V}$. Apabila lampu tersebut dihubungkan ke sumber tegangan jaringan yang turun menjadi $110\\text{ V}$, dan dengan menganggap nilai hambatan kawat lampu konstan, daya disipasi lampu tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ W}$",
      "$50\\text{ W}$",
      "$75\\text{ W}$",
      "$12{,}5\\text{ W}$",
      "$100\\text{ W}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Daya Listrik Kuadratik Terhadap Tegangan:</strong><br>$P = \\frac{V^2}{R}$. Karena hambatan filamen lampu $R$ tetap, perbandingan daya listrik adalah kuadrat perbandingan tegangan: $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$.</div>",
      "steps": "<ol><li>Rasio tegangan: $\\frac{V_2}{V_1} = \\frac{110}{220} = \\frac{1}{2}$.</li><li>Rasio daya: $\\frac{P_2}{P_1} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</li><li>Daya lampu: $P_2 = \\frac{1}{4} \\times 100 = 25\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering keliru menganggap hubungan linier $P \\propto V$ sehingga menjawab setengahnya ($50\\text{ W}$).</div>"
    }
  },
  {
    "id": "sedang-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-2",
    "category": "Hukum II Kirchhoff Rangkaian 1 Loop",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu rangkaian tertutup satu loop terdiri dari dua sumber tegangan baterai $\\mathcal{E}_1 = 18\\text{ V}$ dan $\\mathcal{E}_2 = 6\\text{ V}$ yang dipasang saling berhadapan kutub positifnya, serta dua hambatan $R_1 = 3\\,\\Omega$ dan $R_2 = 1\\,\\Omega$. Jika hambatan dalam baterai diabaikan, kuat arus listrik yang mengalir dalam rangkaian dan daya disipasi pada resistor $R_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ A}$ dan $12\\text{ W}$",
      "$3\\text{ A}$ dan $18\\text{ W}$",
      "$3\\text{ A}$ dan $27\\text{ W}$",
      "$4\\text{ A}$ dan $36\\text{ W}$",
      "$6\\text{ A}$ dan $54\\text{ W}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum II Kirchhoff Loop Tunggal:</strong><br>\n          $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0 \\implies I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_{\\text{total}}}$$<br>\n          Daya disipasi resistor: $P = I^2 R$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Karena kutub baterai saling berlawanan, GGL resultan adalah selisih keduanya:\n            $$\\mathcal{E}_{\\text{net}} = 18 - 6 = 12\\text{ V}$$\n          </li>\n          <li>Hambatan total: $R_{\\text{total}} = 3 + 1 = 4\\,\\Omega$.</li>\n          <li>Kuat arus listrik:\n            $$I = \\frac{12\\text{ V}}{4\\,\\Omega} = 3\\text{ Ampere}$$\n          </li>\n          <li>Daya pada resistor $R_1$:\n            $$P_1 = I^2 R_1 = (3^2) \\times 3 = 9 \\times 3 = 27\\text{ Watt}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering keliru menjumlahkan tegangan baterai ($18 + 6 = 24\\text{ V}$) tanpa memperhatikan arah kutub baterai yang saling berlawanan.\n        </div>\n      "
    }
  },
  {
    "id": "hots-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-2",
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
