module.exports = [
  {
    "id": "fis-din-rot-newton-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah roda piringan pejal memiliki momen inersia $I = 0,5\\text{ kg}\\cdot\\text{m}^2$ terhadap sumbu putarnya. Roda tersebut mengalami momen gaya konstan sebesar $\\tau = 4\\text{ N}\\cdot\\text{m}$. Besar percepatan sudut ($\\alpha$) yang dialami roda adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ rad/s}^2$",
      "$4\\text{ rad/s}^2$",
      "$8\\text{ rad/s}^2$",
      "$16\\text{ rad/s}^2$",
      "$20\\text{ rad/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum II Newton untuk gerak rotasi menyatakan bahwa momen gaya netto berbanding lurus dengan percepatan sudut yang dihasilkan: $\\sum \\tau = I \\alpha$, dengan $I$ adalah momen inersia benda terhadap sumbu putarnya.",
      "steps": "1. Tuliskan formula Hukum II Newton rotasi:\\n$$\\tau = I \\alpha \\implies \\alpha = \\frac{\\tau}{I}$$\\n2. Masukkan nilai yang diketahui:\\n$$\\alpha = \\frac{4\\text{ N}\\cdot\\text{m}}{0,5\\text{ kg}\\cdot\\text{m}^2} = 8\\text{ rad/s}^2$$\\nJadi, besar percepatan sudut roda adalah $8\\text{ rad/s}^2$.",
      "pitfalls": "Kerap salah membagi atau mengalikan torsi dengan momen inersia ($4 \\times 0,5 = 2\\text{ rad/s}^2$). Ingat bahwa $\\alpha = \\frac{\\tau}{I}$."
    }
  },
  {
    "id": "fis-din-rot-newton-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah roda berputar terhadap sumbu tetap dengan kelajuan sudut konstan $\\omega = 10\\text{ rad/s}$. Jika momen inersia roda terhadap sumbu tersebut adalah $I = 2\\text{ kg}\\cdot\\text{m}^2$, besar momentum sudut ($L$) roda tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
      "$10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
      "$20\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
      "$50\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
      "$100\\text{ kg}\\cdot\\text{m}^2/\\text{s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momentum sudut ($L$) dari benda tegar yang berputar terhadap sumbu simetris tetap dihitung melalui perkalian momen inersia dengan kecepatan sudutnya: $L = I \\omega$. Satuan SI momentum sudut adalah $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ (setara $\\text{J}\\cdot\\text{s}$).",
      "steps": "1. Identifikasi besaran:\\n$I = 2\\text{ kg}\\cdot\\text{m}^2$ dan $\\omega = 10\\text{ rad/s}$.\\n2. Hitung besar momentum sudut:\\n$$L = I \\omega = 2\\text{ kg}\\cdot\\text{m}^2 \\times 10\\text{ rad/s} = 20\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\\nJadi, momentum sudut roda adalah $20\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.",
      "pitfalls": "Kerap tertukar antara momentum sudut ($L = I \\omega$) dengan energi kinetik rotasi ($E_{k,\\text{rot}} = \\frac{1}{2} I \\omega^2$)."
    }
  },
  {
    "id": "fis-din-rot-newton-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0,5\\text{ m}$ berputar pada porosnya dengan kecepatan sudut konstan $\\omega = 6\\text{ rad/s}$. Besar energi kinetik rotasi silinder pejal tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4,5\\text{ J}$",
      "$9,0\\text{ J}$",
      "$18,0\\text{ J}$",
      "$36,0\\text{ J}$",
      "$72,0\\text{ J}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Energi kinetik rotasi benda tegar dirumuskan sebagai: $E_{k,\\text{rot}} = \\frac{1}{2} I \\omega^2$, di mana momen inersia silinder pejal adalah $I = \\frac{1}{2} M R^2$.",
      "steps": "1. Hitung momen inersia silinder pejal:\\n$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} (4\\text{ kg})(0,5\\text{ m})^2 = 2 \\times 0,25 = 0,5\\text{ kg}\\cdot\\text{m}^2$$\\n2. Hitung energi kinetik rotasi:\\n$$E_{k,\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} (0,5\\text{ kg}\\cdot\\text{m}^2)(6\\text{ rad/s})^2$$\\n$$E_{k,\\text{rot}} = 0,25 \\times 36 = 9,0\\text{ J}$$\\nJadi, besar energi kinetik rotasinya adalah $9,0\\text{ J}$.",
      "pitfalls": "Kerap lupa mengalikan faktor $\\frac{1}{2}$ dua kali (faktor $\\frac{1}{2}$ pertama pada momen inersia silinder pejal, dan faktor $\\frac{1}{2}$ kedua pada rumus energi kinetik rotasi)."
    }
  },
  {
    "id": "fis-din-rot-newton-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Seorang penari balet sedang berputar dengan kedua lengan terentang dengan kecepatan sudut $\\omega_1 = 4\\text{ rad/s}$. Momen inersia penari saat merentangkan tangan adalah $I_1 = 2,5\\text{ kg}\\cdot\\text{m}^2$. Ketika penari melipat kedua lengannya merapat ke dada, momen inersianya berkurang menjadi $I_2 = 1,0\\text{ kg}\\cdot\\text{m}^2$. Jika gesekan lantai diabaikan, kecepatan sudut putaran penari sekarang ($\\omega_2$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1,6\\text{ rad/s}$",
      "$4,0\\text{ rad/s}$",
      "$6,0\\text{ rad/s}$",
      "$10,0\\text{ rad/s}$",
      "$16,0\\text{ rad/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Jika tidak ada momen gaya luar yang bekerja pada sistem ($\\sum \\tau_{\\text{eksternal}} = 0$), berlaku Hukum Kekekalan Momentum Sudut: $L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$.",
      "steps": "1. Identifikasi kondisi awal dan akhir:\\n$I_1 = 2,5\\text{ kg}\\cdot\\text{m}^2, \\quad \\omega_1 = 4\\text{ rad/s}$\\n$I_2 = 1,0\\text{ kg}\\cdot\\text{m}^2, \\quad \\omega_2 = ?$\\n2. Terapkan hukum kekekalan momentum sudut:\\n$$I_1 \\omega_1 = I_2 \\omega_2$$\\n$$(2,5)(4) = (1,0) \\omega_2$$\\n$$10 = 1,0 \\omega_2 \\implies \\omega_2 = 10,0\\text{ rad/s}$$\\nJadi, kecepatan sudut putaran penari menjadi $10,0\\text{ rad/s}$.",
      "pitfalls": "Kerap terbalik membagi ($1,0 / 2,5 \\times 4 = 1,6\\text{ rad/s}$). Mengurangi momen inersia (memusatkan massa ke poros) selalu mengakibatkan kecepatan putaran meningkat pesat."
    }
  },
  {
    "id": "fis-din-rot-newton-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-newton",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah katrol berbentuk silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan berjari-jari $R = 0,2\\text{ m}$ bebas berputar pada porosnya tanpa gesekan. Seutas tali ringan dililitkan pada tepi katrol dan ditarik dengan gaya konstan $F = 10\\text{ N}$. Besar percepatan sudut ($\\alpha$) yang dialami katrol adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ rad/s}^2$",
      "$25\\text{ rad/s}^2$",
      "$50\\text{ rad/s}^2$",
      "$100\\text{ rad/s}^2$",
      "$200\\text{ rad/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya tarik tali menghasilkan momen gaya tangensial $\\tau = F R$. Terapkan Hukum II Newton rotasi $\\tau = I \\alpha$ dengan momen inersia katrol silinder pejal $I = \\frac{1}{2} M R^2$. Hubungan langsungnya adalah: $\\alpha = \\frac{2 F}{M R}$.",
      "steps": "1. Hitung momen gaya penarik:\\n$$\\tau = F R = 10\\text{ N} \\times 0,2\\text{ m} = 2\\text{ N}\\cdot\\text{m}$$\\n2. Hitung momen inersia katrol:\\n$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} (2\\text{ kg})(0,2\\text{ m})^2 = 0,04\\text{ kg}\\cdot\\text{m}^2$$\\n3. Hitung percepatan sudut:\\n$$\\alpha = \\frac{\\tau}{I} = \\frac{2}{0,04} = \\frac{200}{4} = 50\\text{ rad/s}^2$$\\nJadi, percepatan sudut katrol adalah $50\\text{ rad/s}^2$.",
      "pitfalls": "Kerap lupa mengalikan faktor 2 dari penyebut pecahan inersia silinder pejal, atau salah menghitung pembagian desimal $2 / 0,04$."
    }
  }
];
