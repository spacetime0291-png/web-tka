/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Momen Gaya (Torsi) (fis-din-rot-torsi)
 * Slug: momen-gaya-torsi
 * Indikator: Perkalian silang lengan gaya dengan vektor gaya (tau = r * F * sin theta) terhadap poros rotasi.
 * 
 * Total Butir Soal: 4 (Mudah: 2, Sedang: 1, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-torsi";
  const subTopicSlug = "momen-gaya-torsi";
  const questions = [
  {
    "id": "fis-din-21",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang teknisi mesin menggunakan kunci pas bergagang panjang $L = 40\\text{ cm}$ ($0{,}4\\text{ m}$) untuk mengencangkan sebuah mur poros roda. Teknisi tersebut menarik ujung gagang kunci dengan gaya sebesar $F = 50\\text{ N}$ yang membentuk sudut $30^\\circ$ terhadap arah memanjang gagang kunci pas. Besar momen gaya (torsi) yang dihasilkan terhadap titik pusat mur adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 N·m",
      "15 N·m",
      "17,3 N·m",
      "20 N·m",
      "25 N·m"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Definisi torsi (momen gaya): $\\tau = F \\cdot r \\cdot \\sin\\theta$.</div>",
      "steps": "<ol><li>Lengan gaya $r = 0{,}4\\text{ m}$, $F = 50\\text{ N}$, dan sudut $\\theta = 30^\\circ$.<br>$$\\tau = F \\cdot r \\cdot \\sin 30^\\circ = 50 \\times 0{,}4 \\times 0{,}5 = 10\\text{ N}\\cdot\\text{m}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan sudut kemiringan (menganggap tegak lurus $\\tau = 50 \\times 0{,}4 = 20\\text{ N}\\cdot\\text{m}$) atau keliru menggunakan fungsi $\\cos 30^\\circ$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-gaya-torsi"
  },
  {
    "id": "drill-rot-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Momen Gaya (Torsi) Gaya Bersudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah batang homogen dengan panjang $r = 2\\text{ meter}$ dapat berputar bebas pada poros di salah satu ujungnya. Sebuah gaya $F = 30\\text{ N}$ ditarik pada ujung bebas batang dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang ($\\sin 30^\\circ = 0{,}5$). Besar momen gaya (torsi) yang bekerja pada batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}\\cdot\\text{m}$",
      "$60\\text{ N}\\cdot\\text{m}$",
      "$15\\text{ N}\\cdot\\text{m}$",
      "$30\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$45\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Definisi Momen Gaya (Torsi):</strong><br>Momen gaya adalah hasil kali silang antara lengan gaya dan komponen gaya yang tegak lurus terhadap lengan:<br>$$\\tau = r \\cdot F \\sin \\theta$$</div>",
      "steps": "<ol><li>Identifikasi nilai: $r = 2\\text{ m}$, $F = 30\\text{ N}$, $\\theta = 30^\\circ$.</li><li>Komponen gaya tegak lurus: $F_{\\perp} = F \\sin 30^\\circ = 30 \\times 0{,}5 = 15\\text{ N}$.</li><li>Torsi: $\\tau = r \\times F_{\\perp} = 2 \\times 15 = 30\\text{ N}\\cdot\\text{m}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor sudut $\\sin\\theta$ sehingga menghitung langsung $2 \\times 30 = 60\\text{ N}\\cdot\\text{m}$. Komponen gaya yang sejajar batang tidak menghasilkan torsi!</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-gaya-torsi"
  },
  {
    "id": "drill-rot-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Hukum II Newton Rotasi dan Percepatan Sudut",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0{,}5\\text{ m}$ ($I = \\frac{1}{2}MR^2$). Roda tersebut mula-mula diam, kemudian diberi momen gaya konstan sebesar $\\tau = 6\\text{ N}\\cdot\\text{m}$. Percepatan sudut ($\\alpha$) yang dialami roda gila tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ rad/s}^2$",
      "$6\\text{ rad/s}^2$",
      "$24\\text{ rad/s}^2$",
      "$3\\text{ rad/s}^2$",
      "$8\\text{ rad/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum II Newton untuk Rotasi:</strong><br>$$\\Sigma \\tau = I \\cdot \\alpha \\implies \\alpha = \\frac{\\Sigma \\tau}{I}$$</div>",
      "steps": "<ol><li>Hitung momen inersia silinder pejal:<br>$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 4 \\times (0{,}5)^2 = 2 \\times 0{,}25 = 0{,}5\\text{ kg}\\cdot\\text{m}^2$$</li><li>Hitung percepatan sudut:<br>$$\\alpha = \\frac{\\tau}{I} = \\frac{6\\text{ N}\\cdot\\text{m}}{0{,}5\\text{ kg}\\cdot\\text{m}^2} = 12\\text{ rad/s}^2$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Analogi Gerak:</strong> Torsi $\\tau$ analog dengan gaya $F$, momen inersia $I$ analog dengan massa $m$, dan percepatan sudut $\\alpha$ analog dengan percepatan linier $a$ ($F = ma \\leftrightarrow \\tau = I\\alpha$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-gaya-torsi"
  },
  {
    "id": "hots-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Dinamika Rotasi & Torsi",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 20\\text{ cm}$ dapat berputar bebas tanpa gesekan terhadap poros horizontal tetap yang melalui pusat massanya (momen inersia $I = \\frac{1}{2}MR^2$). Dua buah balok bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ dihubungkan oleh seutas tali ringan tak elastis yang melilit katrol tersebut tanpa selip. Jika sistem dilepaskan dari keadaan diam dan percepatan gravitasi $g = 10\\text{ m/s}^2$, tentukan percepatan sudut putaran katrol $(\\alpha)$ serta besar selisih tegangan tali pada kedua sisi katrol $(T_1 - T_2)$!",
    "hasDiagram": true,
    "diagramSvg": "\n      <svg class=\"diagram-svg\" viewBox=\"0 0 360 270\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\">\n        <!-- Blueprint Grid Ceiling Bracket -->\n        <line x1=\"80\" y1=\"25\" x2=\"280\" y2=\"25\" stroke=\"#38BDF8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n        <line x1=\"100\" y1=\"25\" x2=\"115\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"130\" y1=\"25\" x2=\"145\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"160\" y1=\"25\" x2=\"175\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"190\" y1=\"25\" x2=\"205\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"220\" y1=\"25\" x2=\"235\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        <line x1=\"250\" y1=\"25\" x2=\"265\" y2=\"10\" stroke=\"#38BDF8\" stroke-width=\"1.5\"/>\n        \n        <!-- Pulley Mounting Hanger -->\n        <polygon points=\"175,25 185,25 182,75 178,75\" fill=\"#38BDF8\" opacity=\"0.4\"/>\n        <line x1=\"180\" y1=\"25\" x2=\"180\" y2=\"75\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        \n        <!-- Pulley Disk -->\n        <circle cx=\"180\" cy=\"75\" r=\"50\" fill=\"#0A192F\" stroke=\"#38BDF8\" stroke-width=\"2.5\"/>\n        <circle cx=\"180\" cy=\"75\" r=\"44\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" opacity=\"0.6\"/>\n        <circle cx=\"180\" cy=\"75\" r=\"7\" fill=\"#38BDF8\"/>\n        \n        <!-- Radius & Label -->\n        <line x1=\"180\" y1=\"75\" x2=\"225\" y2=\"50\" stroke=\"#FACC15\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n        <text x=\"205\" y=\"55\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">R=20cm</text>\n        <text x=\"145\" y=\"98\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">M=2kg</text>\n        \n        <!-- Rotation Alpha Vector Arrow -->\n        <path d=\"M 160 40 A 30 30 0 0 0 145 75\" fill=\"none\" stroke=\"#FF5A26\" stroke-width=\"2\" marker-end=\"url(#arrow-orange)\"/>\n        <text x=\"130\" y=\"50\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">α</text>\n        \n        <!-- Left Rope & Mass m1 -->\n        <line x1=\"130\" y1=\"75\" x2=\"130\" y2=\"160\" stroke=\"#E0F2FE\" stroke-width=\"2.5\"/>\n        <rect x=\"108\" y=\"160\" width=\"44\" height=\"44\" rx=\"4\" fill=\"#1E293B\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <text x=\"116\" y=\"186\" fill=\"#FFFFFF\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">m₁=3kg</text>\n        \n        <!-- Forces on m1 -->\n        <line x1=\"130\" y1=\"160\" x2=\"130\" y2=\"130\" stroke=\"#22C55E\" stroke-width=\"2\"/>\n        <polygon points=\"127,133 130,125 133,133\" fill=\"#22C55E\"/>\n        <text x=\"136\" y=\"138\" fill=\"#22C55E\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">T₁</text>\n        \n        <line x1=\"130\" y1=\"204\" x2=\"130\" y2=\"238\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n        <polygon points=\"127,235 130,243 133,235\" fill=\"#EF4444\"/>\n        <text x=\"136\" y=\"235\" fill=\"#EF4444\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">m₁g</text>\n        \n        <text x=\"82\" y=\"188\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">a ↓</text>\n        \n        <!-- Right Rope & Mass m2 -->\n        <line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"140\" stroke=\"#E0F2FE\" stroke-width=\"2.5\"/>\n        <rect x=\"210\" y=\"140\" width=\"40\" height=\"40\" rx=\"4\" fill=\"#1E293B\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <text x=\"217\" y=\"165\" fill=\"#FFFFFF\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">m₂=1kg</text>\n        \n        <!-- Forces on m2 -->\n        <line x1=\"230\" y1=\"140\" x2=\"230\" y2=\"110\" stroke=\"#22C55E\" stroke-width=\"2\"/>\n        <polygon points=\"227,113 230,105 233,113\" fill=\"#22C55E\"/>\n        <text x=\"236\" y=\"118\" fill=\"#22C55E\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">T₂</text>\n        \n        <line x1=\"230\" y1=\"180\" x2=\"230\" y2=\"210\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n        <polygon points=\"227,207 230,215 233,207\" fill=\"#EF4444\"/>\n        <text x=\"236\" y=\"208\" fill=\"#EF4444\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">m₂g</text>\n        \n        <text x=\"258\" y=\"165\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"bold\">a ↑</text>\n      </svg>\n    ",
    "diagramCaption": "SKEMA FREE-BODY DIAGRAM: KATROL BERMASSA & BEBAN GANTUNG",
    "options": [
      "$\\alpha = 15\\text{ rad/s}^2$ dan $T_1 - T_2 = 3\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 4\\text{ N}$",
      "$\\alpha = 25\\text{ rad/s}^2$ dan $T_1 - T_2 = 5\\text{ N}$",
      "$\\alpha = 10\\text{ rad/s}^2$ dan $T_1 - T_2 = 2\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 8\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Prinsip Dinamika Sistem Translasi & Rotasi Terkopel:</strong><br>\n          1. Hukum II Newton Translasi: $\\Sigma F = m a$<br>\n          2. Hukum II Newton Rotasi: $\\Sigma \\tau = I \\alpha$<br>\n          3. Syarat Tali Tidak Selip (No-slip): $a = \\alpha R \\iff \\alpha = \\frac{a}{R}$<br>\n          4. Momen Inersia Silinder Pejal Homogen: $I = \\frac{1}{2} M R^2$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>\n            <strong>Persamaan Gerak Translasi Beban $m_1$ (turun):</strong>\n            $$m_1 g - T_1 = m_1 a \\implies T_1 = m_1(g - a)$$\n          </li>\n          <li>\n            <strong>Persamaan Gerak Translasi Beban $m_2$ (naik):</strong>\n            $$T_2 - m_2 g = m_2 a \\implies T_2 = m_2(g + a)$$\n          </li>\n          <li>\n            <strong>Persamaan Dinamika Rotasi Katrol:</strong>\n            Katrol berputar searah jarum jam karena ditarik oleh selisih torsi:\n            $$\\Sigma \\tau = I \\alpha \\implies (T_1 - T_2) R = \\left(\\frac{1}{2} M R^2\\right) \\left(\\frac{a}{R}\\right)$$\n            $$T_1 - T_2 = \\frac{1}{2} M a$$\n          </li>\n          <li>\n            <strong>Substitusi untuk Mencari Percepatan Tangensial $a$:</strong>\n            $$m_1(g - a) - m_2(g + a) = \\frac{1}{2} M a$$\n            $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2 + \\frac{1}{2} M}$$\n          </li>\n          <li>\n            <strong>Perhitungan Numerik $a$:</strong>\n            $$a = \\frac{(3 - 1)(10)}{3 + 1 + \\frac{1}{2}(2)} = \\frac{20}{5} = 4\\text{ m/s}^2$$\n          </li>\n          <li>\n            <strong>Perhitungan Percepatan Sudut $(\\alpha)$:</strong>\n            Karena $R = 20\\text{ cm} = 0{,}2\\text{ m}$:\n            $$\\alpha = \\frac{a}{R} = \\frac{4}{0{,}2} = 20\\text{ rad/s}^2$$\n          </li>\n          <li>\n            <strong>Perhitungan Selisih Tegangan Tali $(T_1 - T_2)$:</strong>\n            $$T_1 - T_2 = \\frac{1}{2} M a = \\frac{1}{2}(2)(4) = 4\\text{ N}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Katrol Ideal:</strong> Pada sistem di mana katrol memiliki massa, tegangan tali pada kedua sisi katrol TIDAK sama ($T_1 \\neq T_2$). Anggapan katrol tanpa massa akan membuat torsi nol dan katrol tidak berakselerasi.\n        </div>\n      "
    },
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-gaya-torsi"
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
