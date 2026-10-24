module.exports = [
  {
    "id": "fis-din-rot-inersia-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 0,2\\text{ m}$ diputar terhadap sumbu rotasi yang sejajar dengan sumbu pusat massanya pada jarak pergeseran $d = 0,3\\text{ m}$. Berdasarkan teorema sumbu sejajar, besar momen inersia silinder terhadap sumbu rotasi baru tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,04\\text{ kg}\\cdot\\text{m}^2$",
      "$0,18\\text{ kg}\\cdot\\text{m}^2$",
      "$0,22\\text{ kg}\\cdot\\text{m}^2$",
      "$0,26\\text{ kg}\\cdot\\text{m}^2$",
      "$0,40\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Teorema sumbu sejajar (Steiner) menghubungkan momen inersia terhadap sembarang sumbu sejajar ($I$) dengan momen inersia terhadap sumbu yang melalui pusat massa ($I_{\\text{pm}}$): $I = I_{\\text{pm}} + M d^2$, di mana $d$ adalah jarak antara kedua sumbu sejajar.",
      "steps": "1. Hitung momen inersia silinder pejal terhadap sumbu pusat massa:\\n$$I_{\\text{pm}} = \\frac{1}{2} M R^2 = \\frac{1}{2} (2\\text{ kg})(0,2\\text{ m})^2 = 0,04\\text{ kg}\\cdot\\text{m}^2$$\\n2. Hitung kontribusi pergeseran sumbu sejajar:\\n$$M d^2 = 2\\text{ kg} \\times (0,3\\text{ m})^2 = 2 \\times 0,09 = 0,18\\text{ kg}\\cdot\\text{m}^2$$\\n3. Terapkan teorema sumbu sejajar:\\n$$I = I_{\\text{pm}} + M d^2 = 0,04 + 0,18 = 0,22\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia terhadap sumbu baru adalah $0,22\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kerap hanya menghitung $M d^2 = 0,18\\text{ kg}\\cdot\\text{m}^2$ seolah-olah silinder adalah partikel titik, tanpa menambahkan momen inersia intrinsik silinder terhadap pusat massanya ($I_{\\text{pm}}$)."
    }
  },
  {
    "id": "fis-din-rot-inersia-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Empat buah partikel bermassa masing-masing $m = 1\\text{ kg}$ diletakkan pada keempat titik sudut sebuah kerangka persegi tak bermassa dengan panjang sisi $s = 2\\text{ m}$ yang terletak pada bidang $xy$. Momen inersia sistem partikel tersebut jika diputar terhadap sumbu-$z$ yang tegak lurus bidang persegi dan melewati titik pusat simetri persegi adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ kg}\\cdot\\text{m}^2$",
      "$8\\text{ kg}\\cdot\\text{m}^2$",
      "$12\\text{ kg}\\cdot\\text{m}^2$",
      "$16\\text{ kg}\\cdot\\text{m}^2$",
      "$24\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen inersia sistem partikel diskret terhadap sumbu-$z$ yang melalui pusat adalah $I_z = \\sum_{i=1}^4 m_i r_i^2$, di mana $r_i$ adalah jarak dari titik pusat persegi ke masing-masing titik sudut.",
      "steps": "1. Hitung panjang diagonal persegi:\\n$$D = s\\sqrt{2} = 2\\sqrt{2}\\text{ m}$$\\n2. Hitung jarak dari pusat ke tiap titik sudut (setengah diagonal):\\n$$r = \\frac{D}{2} = \\sqrt{2}\\text{ m}$$\\n3. Hitung kuadrat jaraknya:\\n$$r^2 = (\\sqrt{2})^2 = 2\\text{ m}^2$$\\n4. Hitung momen inersia total dari 4 partikel identik:\\n$$I_z = 4 (m r^2) = 4 (1\\text{ kg} \\times 2\\text{ m}^2) = 8\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia sistem partikel tersebut adalah $8\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kerap keliru menggunakan panjang sisi ($s = 2\\text{ m}$) sebagai jarak ke poros putar ($4 \\times 1 \\times 4 = 16\\text{ kg}\\cdot\\text{m}^2$). Poros berada di pusat persegi, bukan di salah satu sisi."
    }
  },
  {
    "id": "fis-din-rot-inersia-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah plat tipis seragam berbentuk lingkaran dengan massa $M$ dan jari-jari $R$ berada pada bidang $xy$. Momen inersia plat terhadap sumbu-$z$ yang tegak lurus plat melalui pusatnya adalah $I_z = \\frac{1}{2} M R^2$. Berdasarkan teorema sumbu tegak lurus (perpendicular axis theorem), momen inersia plat tipis tersebut terhadap sumbu diameternya yang terletak pada bidang plat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{8} M R^2$",
      "$\\frac{1}{4} M R^2$",
      "$\\frac{1}{3} M R^2$",
      "$\\frac{1}{2} M R^2$",
      "$M R^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Teorema sumbu tegak lurus untuk lamina tipis 2D pada bidang $xy$: $I_z = I_x + I_y$. Karena bentuk lingkaran simetris sempurna di segala arah, momen inersia terhadap sembarang sumbu diameter adalah identik ($I_x = I_y = I_{\\text{diameter}}$).",
      "steps": "1. Terapkan teorema sumbu tegak lurus:\\n$$I_z = I_x + I_y$$\\n2. Karena simetri lingkaran di bidang datar:\\n$$I_x = I_y = I_{\\text{diameter}}$$\\n$$I_z = 2 I_{\\text{diameter}}$$\\n3. Nyatakan $I_{\\text{diameter}}$ dalam $I_z$:\\n$$I_{\\text{diameter}} = \\frac{1}{2} I_z = \\frac{1}{2} \\left(\\frac{1}{2} M R^2\\right) = \\frac{1}{4} M R^2$$\\nJadi, momen inersia plat terhadap sumbu diameternya adalah $\\frac{1}{4} M R^2$.",
      "pitfalls": "Kerap menganggap momen inersia terhadap diameter sama dengan momen inersia terhadap sumbu polar tegak lurus ($\\frac{1}{2} M R^2$). Momen inersia terhadap diameter bernilai setengah dari momen inersia terhadap sumbu tegak lurus."
    }
  },
  {
    "id": "fis-din-rot-inersia-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah cincin logam tebal (silinder berongga dengan dinding tebal) bermassa total $M = 3\\text{ kg}$ memiliki jari-jari dalam $R_1 = 0,2\\text{ m}$ dan jari-jari luar $R_2 = 0,4\\text{ m}$. Momen inersia cincin logam tebal tersebut terhadap sumbu simetri longitudinal yang melalui pusatnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,18\\text{ kg}\\cdot\\text{m}^2$",
      "$0,24\\text{ kg}\\cdot\\text{m}^2$",
      "$0,30\\text{ kg}\\cdot\\text{m}^2$",
      "$0,45\\text{ kg}\\cdot\\text{m}^2$",
      "$0,60\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momen inersia silinder berongga homogen berdinding tebal dengan massa $M$, jari-jari dalam $R_1$, dan jari-jari luar $R_2$ dinyatakan oleh rumus integrasi: $I = \\frac{1}{2} M (R_1^2 + R_2^2)$.",
      "steps": "1. Identifikasi data yang diketahui:\\n$M = 3\\text{ kg}$, $R_1 = 0,2\\text{ m}$, $R_2 = 0,4\\text{ m}$.\\n2. Hitung kuadrat masing-masing jari-jari:\\n$$R_1^2 = (0,2)^2 = 0,04\\text{ m}^2$$\\n$$R_2^2 = (0,4)^2 = 0,16\\text{ m}^2$$\\n3. Substitusi ke dalam rumus momen inersia silinder tebal:\\n$$I = \\frac{1}{2} M (R_1^2 + R_2^2) = \\frac{1}{2} (3)(0,04 + 0,16)$$\\n$$I = 1,5 \\times 0,20 = 0,30\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia cincin tebal tersebut adalah $0,30\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kekeliruan umum adalah mengurangkan kuadrat jari-jari ($R_2^2 - R_1^2 = 0,12$) yang menghasilkan $0,18\\text{ kg}\\cdot\\text{m}^2$. Pengurangan hanya muncul saat menghitung luas atau massa dari kerapatan, tetapi ketika massa total $M$ sudah diketahui, rumusnya menggunakan tanda tambah ($R_1^2 + R_2^2$)."
    }
  },
  {
    "id": "fis-din-rot-inersia-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah batang homogen bermassa $M_b = 6\\text{ kg}$ dan panjang $L = 2\\text{ m}$ dipasangi dua bola logam kecil (dianggap partikel titik) bermassa masing-masing $m = 1\\text{ kg}$ pada kedua ujung batang. Jika sistem batang dan kedua bola tersebut diputar bersama-sama terhadap poros tegak lurus batang yang melalui titik tengah batang, momen inersia total sistem adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ kg}\\cdot\\text{m}^2$",
      "$3\\text{ kg}\\cdot\\text{m}^2$",
      "$4\\text{ kg}\\cdot\\text{m}^2$",
      "$5\\text{ kg}\\cdot\\text{m}^2$",
      "$8\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momen inersia total sistem komposit adalah penjumlahan skalar momen inersia batang kontinu terhadap pusat massanya dan momen inersia kedua partikel di ujung-ujungnya: $I_{\\text{total}} = I_{\\text{batang}} + \\sum m r^2$.",
      "steps": "1. Hitung momen inersia batang homogen terhadap poros tengah:\\n$$I_{\\text{batang}} = \\frac{1}{12} M_b L^2 = \\frac{1}{12} (6\\text{ kg})(2\\text{ m})^2 = \\frac{6 \\times 4}{12} = 2\\text{ kg}\\cdot\\text{m}^2$$\\n2. Jarak kedua partikel dari poros tengah adalah $r = \\frac{L}{2} = 1\\text{ m}$.\\n3. Hitung momen inersia kedua partikel ujung:\\n$$I_{\\text{partikel}} = 2 (m r^2) = 2 (1\\text{ kg} \\times 1^2) = 2\\text{ kg}\\cdot\\text{m}^2$$\\n4. Jumlahkan momen inersia total sistem:\\n$$I_{\\text{total}} = I_{\\text{batang}} + I_{\\text{partikel}} = 2 + 2 = 4\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia total sistem adalah $4\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kerap lupa mengalikan faktor 2 pada partikel karena terdapat dua bola di kedua ujung batang, atau salah menggunakan rumus batang di ujung ($\\frac{1}{3} M L^2$)."
    }
  }
];
