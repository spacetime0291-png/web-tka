module.exports = [
  {
    "id": "fis-din-rot-newton-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 0,1\\text{ m}$ dilepaskan dari keadaan diam di puncak bidang miring kasar yang membentuk sudut kemiringan $\\theta = 37^\\circ$ terhadap bidang horizontal (diketahui $\\sin 37^\\circ = 0,6$ dan $\\cos 37^\\circ = 0,8$). Silinder menggelinding murni tanpa selip. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar percepatan linier translasi silinder menuruni bidang miring adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ m/s}^2$",
      "$3,0\\text{ m/s}^2$",
      "$4,0\\text{ m/s}^2$",
      "$5,0\\text{ m/s}^2$",
      "$6,0\\text{ m/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada gerak menggelinding murni benda tegar di bidang miring, percepatan linier translasi diturunkan dari gabungan Hukum II Newton translasi dan rotasi: $a = \\frac{g \\sin\\theta}{1 + k}$, di mana $k$ adalah konstanta bentuk momen inersia ($I = k M R^2$). Untuk silinder pejal, $k = \\frac{1}{2}$.",
      "steps": "1. Identifikasi konstanta inersia silinder pejal: $k = \\frac{1}{2}$.\\n2. Terapkan rumus percepatan menggelinding murni:\\n$$a = \\frac{g \\sin 37^\\circ}{1 + k} = \\frac{10 \\times 0,6}{1 + \\frac{1}{2}} = \\frac{6}{\\frac{3}{2}}$$\\n$$a = 6 \\times \\frac{2}{3} = 4,0\\text{ m/s}^2$$\\nJadi, percepatan linier silinder pejal adalah $4,0\\text{ m/s}^2$.",
      "pitfalls": "Kerap keliru mengabaikan inersia rotasi dan menganggap silinder meluncur licin ($a = g \\sin 37^\\circ = 6,0\\text{ m/s}^2$). Sebagian gaya gravitasi digunakan untuk memutar silinder melalui torsi gaya gesek statis sehingga percepatannya berkurang."
    }
  },
  {
    "id": "fis-din-rot-newton-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah beban bermassa $m = 3\\text{ kg}$ diikatkan pada seutas tali ringan yang terlilit rapat pada katrol silinder pejal bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 0,1\\text{ m}$. Katrol dapat berputar bebas pada poros horizontalnya tanpa gesekan. Ketika beban dilepaskan dari keadaan diam dan bergerak turun vertikal, percepatan gravitasi bumi bernilai $g = 10\\text{ m/s}^2$. Besar percepatan gerak turun beban ($a$) dan gaya tegangan tali ($T$) berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a = 7,5\\text{ m/s}^2$ dan $T = 7,5\\text{ N}$",
      "$a = 6,0\\text{ m/s}^2$ dan $T = 12,0\\text{ N}$",
      "$a = 10,0\\text{ m/s}^2$ dan $T = 0\\text{ N}$",
      "$a = 5,0\\text{ m/s}^2$ dan $T = 15,0\\text{ N}$",
      "$a = 8,0\\text{ m/s}^2$ dan $T = 6,0\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tinjau dua persamaan gerak yang saling terhubung: (1) Gerak translasi beban vertikal: $m g - T = m a$, dan (2) Gerak rotasi katrol pejal: $\\tau = T R = I \\alpha = (\\frac{1}{2} M R^2)(\\frac{a}{R}) \\implies T = \\frac{1}{2} M a$.",
      "steps": "1. Substitusi persamaan tegangan tali ke persamaan translasi beban:\\n$$m g - \\frac{1}{2} M a = m a$$\\n$$m g = \\left(m + \\frac{1}{2} M\\right) a \\implies a = \\frac{m g}{m + \\frac{1}{2} M}$$\\n2. Masukkan angka ($m = 3\\text{ kg}$, $M = 2\\text{ kg}$, $g = 10\\text{ m/s}^2$):\\n$$a = \\frac{(3)(10)}{3 + \\frac{1}{2}(2)} = \\frac{30}{3 + 1} = \\frac{30}{4} = 7,5\\text{ m/s}^2$$\\n3. Hitung besar tegangan tali:\\n$$T = \\frac{1}{2} M a = \\frac{1}{2}(2\\text{ kg})(7,5\\text{ m/s}^2) = 7,5\\text{ N}$$\\nJadi, $a = 7,5\\text{ m/s}^2$ dan $T = 7,5\\text{ N}$.",
      "pitfalls": "Kerap mengabaikan massa katrol sehingga menghitung $a = g = 10\\text{ m/s}^2$ dan $T = 0$, padahal katrol masif memerlukan torsi untuk berputar sehingga menahan gerak jatuh beban."
    }
  },
  {
    "id": "fis-din-rot-newton-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola pejal homogen bermassa $M$ dan berjari-jari $R$ menggelinding murni tanpa selip di atas lantai mendatar dengan kecepatan linier pusat massa $v$. Pecahan bagian energi kinetik rotasi ($E_{k,\\text{rot}}$) terhadap energi kinetik total ($E_{k,\\text{total}}$) bola pejal tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{5}$",
      "$\\frac{2}{7}$",
      "$\\frac{2}{5}$",
      "$\\frac{5}{7}$",
      "$\\frac{7}{10}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Energi kinetik total benda menggelinding adalah penjumlahan energi kinetik translasi dan rotasi: $E_{k,\\text{total}} = E_{k,\\text{trans}} + E_{k,\\text{rot}}$. Untuk bola pejal, $I = \\frac{2}{5} M R^2$ dan $\\omega = \\frac{v}{R}$.",
      "steps": "1. Energi kinetik translasi: $E_{k,\\text{trans}} = \\frac{1}{2} M v^2 = \\frac{5}{10} M v^2$.\\n2. Energi kinetik rotasi:\\n$$E_{k,\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\left(\\frac{2}{5} M R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{5} M v^2 = \\frac{2}{10} M v^2$$\\n3. Hitung energi kinetik total:\\n$$E_{k,\\text{total}} = \\frac{5}{10} M v^2 + \\frac{2}{10} M v^2 = \\frac{7}{10} M v^2$$\\n4. Hitung rasio pecahan $E_{k,\\text{rot}} / E_{k,\\text{total}}$:\\n$$\\frac{E_{k,\\text{rot}}}{E_{k,\\text{total}}} = \\frac{\\frac{2}{10} M v^2}{\\frac{7}{10} M v^2} = \\frac{2}{7}$$\\nJadi, pecahan bagian energi kinetik rotasi adalah $\\frac{2}{7}$ dari energi kinetik total.",
      "pitfalls": "Kerap tertukar membandingkan dengan energi kinetik translasi ($\\frac{E_{k,\\text{rot}}}{E_{k,\\text{trans}}} = \\frac{2}{5}$) bukan terhadap energi total ($\\frac{2}{7}$)."
    }
  },
  {
    "id": "fis-din-rot-newton-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah piringan $A$ dengan momen inersia $I_A = 0,4\\text{ kg}\\cdot\\text{m}^2$ berputar bebas pada poros vertikal licin dengan kelajuan sudut $\\omega_A = 30\\text{ rad/s}$. Piringan kedua $B$ dengan momen inersia $I_B = 0,2\\text{ kg}\\cdot\\text{m}^2$ yang awalnya diam dijatuhkan tepat pada poros yang sama di atas piringan $A$. Karena gesekan antarmuka kedua piringan, keduanya akhirnya berputar bersama dengan kelajuan sudut yang sama. Besar kelajuan sudut bersama ($\\omega'$) dan energi kinetik rotasi yang hilang ($\\Delta E_k$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\omega' = 20\\text{ rad/s}$ dan $\\Delta E_k = 60\\text{ J}$",
      "$\\omega' = 20\\text{ rad/s}$ dan $\\Delta E_k = 0\\text{ J}$",
      "$\\omega' = 15\\text{ rad/s}$ dan $\\Delta E_k = 90\\text{ J}$",
      "$\\omega' = 25\\text{ rad/s}$ dan $\\Delta E_k = 40\\text{ J}$",
      "$\\omega' = 10\\text{ rad/s}$ dan $\\Delta E_k = 120\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Terapkan Hukum Kekekalan Momentum Sudut: $I_A \\omega_A = (I_A + I_B) \\omega'$. Energi kinetik yang hilang adalah selisih energi mekanik rotasi sebelum dan sesudah penggabungan: $\\Delta E_k = E_{k1} - E_{k2}$.",
      "steps": "1. Hitung kelajuan sudut bersama:\\n$$I_A \\omega_A + 0 = (I_A + I_B) \\omega'$$\\n$$(0,4)(30) = (0,4 + 0,2) \\omega' \\implies 12 = 0,6 \\omega' \\implies \\omega' = 20\\text{ rad/s}$$\\n2. Hitung energi kinetik rotasi awal:\\n$$E_{k1} = \\frac{1}{2} I_A \\omega_A^2 = \\frac{1}{2} (0,4)(30^2) = 0,2 \\times 900 = 180\\text{ J}$$\\n3. Hitung energi kinetik rotasi akhir:\\n$$E_{k2} = \\frac{1}{2} (I_A + I_B) (\\omega')^2 = \\frac{1}{2} (0,6)(20^2) = 0,3 \\times 400 = 120\\text{ J}$$\\n4. Hitung energi yang hilang:\\n$$\\Delta E_k = 180 - 120 = 60\\text{ J}$$\\nJadi, $\\omega' = 20\\text{ rad/s}$ dan $\\Delta E_k = 60\\text{ J}$.",
      "pitfalls": "Meskipun momentum sudut kekal sempurna, energi kinetik rotasi TIDAK kekal karena terjadi gesekan inelastis antarpiringan saat proses sinkronisasi kelajuan putar."
    }
  },
  {
    "id": "fis-din-rot-newton-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah bola pejal homogen bermassa $M = 1\\text{ kg}$ dan berjari-jari $R$ menggelinding murni tanpa selip dari keadaan diam di puncak bidang miring yang memiliki ketinggian vertikal $h = 7\\text{ m}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan tidak ada energi yang hilang akibat gesekan udara, kelajuan linier bola pejal saat mencapai dasar bidang miring adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$14\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Hukum Kekekalan Energi Mekanik, energi potensial gravitasi di puncak sepenuhnya diubah menjadi energi kinetik translasi dan rotasi di dasar: $M g h = \\frac{1}{2} M v^2 + \\frac{1}{2} I \\omega^2 = \\frac{7}{10} M v^2$.",
      "steps": "1. Rumuskan hubungan energi mekanik:\\n$$M g h = \\frac{1}{2} M v^2 + \\frac{1}{2} \\left(\\frac{2}{5} M R^2\\right) \\left(\\frac{v}{R}\\right)^2$$\\n$$M g h = \\left(\\frac{1}{2} + \\frac{1}{5}\\right) M v^2 = \\frac{7}{10} M v^2$$\\n2. Sederhanakan massa $M$ dan selesaikan $v$:\\n$$g h = \\frac{7}{10} v^2 \\implies v = \\sqrt{\\frac{10}{7} g h}$$\\n3. Substitusi nilai ($g = 10\\text{ m/s}^2$ dan $h = 7\\text{ m}$):\\n$$v = \\sqrt{\\frac{10}{7} \\times 10 \\times 7} = \\sqrt{100} = 10\\text{ m/s}$$\\nJadi, kelajuan bola di dasar bidang adalah $10\\text{ m/s}$.",
      "pitfalls": "Kerap menggunakan rumus luncur bebas licin ($v = \\sqrt{2 g h} = \\sqrt{140} \\approx 11,83\\text{ m/s}$). Pada gerak menggelinding, kecepatan di dasar selalu lebih lambat karena sebagian energi potensial disimpan dalam bentuk energi kinetik rotasi."
    }
  }
];
