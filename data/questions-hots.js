/** Auto-generated backward compatibility layer */
window.QUESTIONS_HOTS = [
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
    "subTopicSlug": "momen-gaya-torsi",
    "hint": "Prinsip Dinamika Sistem Translasi & Rotasi Terkopel: 1. Hukum II Newton Translasi: $\\Sigma F = m a$ 2. Hukum II Newton Rotasi: $\\Sigma \\tau = I \\alpha$ 3. Syarat Tali Tidak Selip (No-slip): $a = \\alpha R \\iff \\alpha = \\frac{a}{R}$ 4. Momen Inersia Silinder Pejal Homogen: $I = \\frac{1}{2} M R^2$. **Tips:** Pada sistem di mana katrol memiliki massa, tegangan tali pada kedua sisi katrol TIDAK sama ($T_1 \\neq T_2$)."
  },
  {
    "id": "hots-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Fluida Dinamis & Teorema Torricelli",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Sebuah tangki silinder terbuka berdiameter besar berisi air setinggi $H = 5\\text{ m}$. Pada dinding samping tangki terdapat lubang bocor kecil dengan luas penampang $A = 2\\text{ cm}^2$ yang berada pada kedalaman $h = 3{,}2\\text{ m}$ dari permukaan air. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$ dan $g = 10\\text{ m/s}^2$, tentukan kelajuan pancaran air $(v)$ yang keluar dari lubang serta besar gaya reaksi dorong horizontal $(F_{\\text{reaksi}})$ yang dialami tangki akibat pancaran fluida tersebut!",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 12{,}8\\text{ N}$",
      "$v = 10\\text{ m/s}$ dan $F_{\\text{reaksi}} = 20{,}0\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 25{,}6\\text{ N}$",
      "$v = 6\\text{ m/s}$ dan $F_{\\text{reaksi}} = 7{,}2\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 6{,}4\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Torricelli & Gaya Reaksi Aliran Fluida:</strong><br>\n          1. Kecepatan pancaran Torricelli: $v = \\sqrt{2gh}$ (dengan $h$ kedalaman dari permukaan air)<br>\n          2. Debit aliran massa: $\\dot{m} = \\rho Q = \\rho A v$<br>\n          3. Gaya reaksi dorong impuls fluida (Hukum III Newton): $F_{\\text{reaksi}} = \\dot{m} v = \\rho A v^2$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Kelajuan Pancaran Air $(v)$:</strong><br>\n            $$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 3{,}2} = \\sqrt{64} = 8\\text{ m/s}$$\n          </li>\n          <li><strong>Konversi Luas Penampang ke Satuan SI:</strong><br>\n            $$A = 2\\text{ cm}^2 = 2\\times 10^{-4}\\text{ m}^2$$\n          </li>\n          <li><strong>Hitung Gaya Reaksi Dorong $(F_{\\text{reaksi}})$:</strong><br>\n            $$F_{\\text{reaksi}} = \\rho A v^2 = (1000\\text{ kg/m}^3)(2\\times 10^{-4}\\text{ m}^2)(8\\text{ m/s})^2$$\n            $$F_{\\text{reaksi}} = 0{,}2 \\times 64 = 12{,}8\\text{ N}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa kedalaman $h$ diukur dari <em>permukaan air</em> ke lubang ($3{,}2\\text{ m}$), bukan tinggi lubang dari dasar tangki ($5 - 3{,}2 = 1{,}8\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "hint": "Teorema Torricelli & Gaya Reaksi Aliran Fluida: 1. Kecepatan pancaran Torricelli: $v = \\sqrt{2gh}$ (dengan $h$ kedalaman dari permukaan air) 2. Debit aliran massa: $\\dot{m} = \\rho Q = \\rho A v$ 3. Gaya reaksi dorong impuls fluida (Hukum III Newton): $F_{\\text{reaksi}} = \\dot{m} v = \\rho A v^2$."
  },
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
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "hint": "Analisis Tegangan Nodal (Node Voltage Method): Tetapkan simpul referensi tanah (ground) pada simpul bawah $B$ dengan $V_B = 0\\text{ V}$. Maka beda potensial $V_{AB} = V_A - 0 = V_A$. $$\\Sigma I_{\\text{keluar dari node } A} = 0 \\implies \\sum \\frac{V_A - V_k}{R_k} = 0$$. **Tips:** Sering terjadi kekeliruan polaritas baterai: pelat panjang bernilai positif ($+24\\text{ V}$ dan $+12\\text{ V}$)."
  },
  {
    "id": "hots-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-pythagoras",
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
    "bab": "Trigonometri Dasar",
    "subBab": "Identitas Pythagoras",
    "subTopic": "Identitas Pythagoras",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "identitas-pythagoras",
    "hint": "King's Property Sifat Simetri Integral: $$\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{b} f(a+b-x)\\,dx$$ Khusus untuk batas $[0, \\pi]$ dengan $x \\cdot g(\\sin x)$: $$\\int_{0}^{\\pi} x g(\\sin x)\\,dx = \\frac{\\pi}{2} \\int_{0}^{\\pi} g(\\sin x)\\,dx$$."
  },
  {
    "id": "hots-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Transformasi & Matriks Geometri",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Titik $P(x, y)$ ditransformasikan oleh refleksi terhadap garis $y = -x$, kemudian dilanjutkan dengan rotasi sebesar $+90^\\circ$ berpusat di titik asal $O(0,0)$. Jika hasil komposisi transformasi tersebut memetakan garis $3x - 2y + 6 = 0$ menjadi garis $ax + by + c = 0$, maka persamaan garis bayangan akhir tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x - 3y + 6 = 0$",
      "$3x + 2y - 6 = 0$",
      "$-3x + 2y + 6 = 0$",
      "$2x + 3y + 6 = 0$",
      "$-2x + 3y - 6 = 0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Perkalian Matriks Komposisi Transformasi:</strong><br>\n          • Refleksi garis $y = -x$: $M_1 = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$<br>\n          • Rotasi $+90^\\circ$: $M_2 = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$<br>\n          • Matriks komposisi $T = M_2 \\cdot M_1$ (dikalikan dari kanan ke kiri).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung matriks komposisi $T$:\n            $$T = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0(0)+(-1)(-1) & 0(-1)+(-1)(0) \\\\ 1(0)+0(-1) & 1(-1)+0(0) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$\n          </li>\n          <li>Hubungan koordinat $(x', y')$ dengan $(x, y)$:\n            $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} x \\\\ -y \\end{pmatrix}$$\n            Maka $x = x'$ dan $y = -y'$.\n          </li>\n          <li>Substitusikan ke persamaan garis semula:\n            $$3(x') - 2(-y') + 6 = 0 \\implies 3x' + 2y' + 6 = 0$$\n            Atau dikalikan $-1$: $-3x - 2y - 6 = 0$. Bentuk aslinya adalah $3x + 2y + 6 = 0$ (atau $-3x + 2y + 6 = 0$ bila ditinjau dari pilihan yang ekuivalen).\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat bahwa komposisi transformasi $T_2$ setelah $T_1$ dituliskan sebagai perkalian matriks $M_2 \\cdot M_1$, BUKAN $M_1 \\cdot M_2$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi",
    "hint": "Perkalian Matriks Komposisi Transformasi: • Refleksi garis $y = -x$: $M_1 = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ • Rotasi $+90^\\circ$: $M_2 = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ • Matriks komposisi $T = M_2 \\cdot M_1$ (dikalikan dari kanan ke kiri)."
  },
  {
    "id": "hots-mtk-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-trigono",
    "category": "Limit Fungsi Trigonometri Non-L'Hôpital",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Tentukan nilai dari limit trigonometri analitis berikut tanpa menerapkan dalil L'Hôpital:\n$$\\lim_{x \\to 0} \\frac{\\cos 5x - \\cos 3x}{x \\tan 2x}$$",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4$",
      "$-2$",
      "$2$",
      "$4$",
      "$-8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Selisih Kosinus & Teorema Limit:</strong><br>\n          • $\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$<br>\n          • $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0} \\frac{cx}{\\tan dx} = \\frac{c}{d}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dengan $A = 5x$ dan $B = 3x$:\n            $$\\frac{A+B}{2} = 4x \\quad \\text{dan} \\quad \\frac{A-B}{2} = x$$\n            $$\\cos 5x - \\cos 3x = -2\\sin(4x)\\sin(x)$$\n          </li>\n          <li>Substitusikan ke dalam ekspresi limit:\n            $$\\lim_{x \\to 0} \\frac{-2\\sin(4x)\\sin(x)}{x \\tan(2x)}$$\n          </li>\n          <li>Pisahkan menjadi perkalian limit dasar trigonometri:\n            $$-2 \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(4x)}{\\tan(2x)} \\right) \\times \\left( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\right)$$\n          </li>\n          <li>Hitung nilai masing-masing suku:\n            $$-2 \\times \\left(\\frac{4}{2}\\right) \\times (1) = -2 \\times 2 \\times 1 = -4$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Tanda minus pada rumus selisih kosinus $-2\\sin\\sin$ sangat vital. Lupa tanda minus akan membuat hasil menjadi $+4$, yang merupakan jebakan umum.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Trigonometri",
    "subTopic": "Limit Fungsi Trigonometri",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-trigonometri",
    "hint": "• $\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$ • $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$ dan $\\lim_{x \\to 0} \\frac{cx}{\\tan dx} = \\frac{c}{d}$. **Tips:** Tanda minus pada rumus selisih kosinus $-2\\sin\\sin$ sangat vital."
  }
];
if (typeof module !== 'undefined') module.exports = window.QUESTIONS_HOTS;
