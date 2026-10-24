module.exports = [
  {
    "id": "fis-din-rot-inersia-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua partikel bermassa $m_1 = 2\\text{ kg}$ dan $m_2 = 3\\text{ kg}$ dihubungkan oleh sebatang kawat kaku tak bermassa sepanjang $L = 1\\text{ m}$. Jika sistem tersebut diputar terhadap sumbu putar tegak lurus kawat yang berada tepat di tengah-tengah kawat ($r_1 = r_2 = 0,5\\text{ m}$), momen inersia total sistem partikel tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,50\\text{ kg}\\cdot\\text{m}^2$",
      "$1,25\\text{ kg}\\cdot\\text{m}^2$",
      "$2,50\\text{ kg}\\cdot\\text{m}^2$",
      "$5,00\\text{ kg}\\cdot\\text{m}^2$",
      "$6,25\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen inersia sistem partikel diskret dihitung melalui penjumlahan skalar hasil kali massa masing-masing partikel dengan kuadrat jarak tegak lurusnya ke sumbu rotasi: $I = \\sum m_i r_i^2$.",
      "steps": "1. Identifikasi massa dan jarak masing-masing partikel ke sumbu tengah:\\n$m_1 = 2\\text{ kg}, \\quad r_1 = 0,5\\text{ m}$\\n$m_2 = 3\\text{ kg}, \\quad r_2 = 0,5\\text{ m}$\\n2. Hitung momen inersia masing-masing:\\n$$I_1 = m_1 r_1^2 = 2 \\times (0,5)^2 = 2 \\times 0,25 = 0,50\\text{ kg}\\cdot\\text{m}^2$$\\n$$I_2 = m_2 r_2^2 = 3 \\times (0,5)^2 = 3 \\times 0,25 = 0,75\\text{ kg}\\cdot\\text{m}^2$$\\n3. Jumlahkan momen inersia total:\\n$$I_{\\text{total}} = I_1 + I_2 = 0,50 + 0,75 = 1,25\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia sistem adalah $1,25\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kerap lupa menguadratkan jarak ($2 \\times 0,5 + 3 \\times 0,5 = 2,5$) atau menggunakan panjang total batang ($L = 1\\text{ m}$) sebagai jarak partikel."
    }
  },
  {
    "id": "fis-din-rot-inersia-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah silinder pejal homogen bermassa $M = 4\\text{ kg}$ dan berjari-jari $R = 20\\text{ cm}$ berputar terhadap sumbu longitudinal yang melalui pusat massanya. Besar momen inersia silinder pejal tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,04\\text{ kg}\\cdot\\text{m}^2$",
      "$0,08\\text{ kg}\\cdot\\text{m}^2$",
      "$0,16\\text{ kg}\\cdot\\text{m}^2$",
      "$0,80\\text{ kg}\\cdot\\text{m}^2$",
      "$1,60\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen inersia silinder pejal homogen yang berputar terhadap sumbu simetrinya adalah: $I = \\frac{1}{2} M R^2$. Satuan SI untuk momen inersia adalah $\\text{kg}\\cdot\\text{m}^2$.",
      "steps": "1. Konversikan jari-jari ke meter:\\n$$R = 20\\text{ cm} = 0,2\\text{ m}$$\\n2. Masukkan nilai ke rumus silinder pejal:\\n$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} (4\\text{ kg})(0,2\\text{ m})^2$$\\n$$I = 2 \\times 0,04 = 0,08\\text{ kg}\\cdot\\text{m}^2$$\\nJadi, momen inersia silinder pejal adalah $0,08\\text{ kg}\\cdot\\text{m}^2$.",
      "pitfalls": "Kerap tertukar dengan silinder tipis berongga ($I = M R^2 = 0,16\\text{ kg}\\cdot\\text{m}^2$) atau lupa mengonversi centimeter ke meter."
    }
  },
  {
    "id": "fis-din-rot-inersia-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah batang silinder homogen bermassa $M$ dan panjang $L$ memiliki momen inersia $I_{\\text{pusat}} = \\frac{1}{12} M L^2$ ketika diputar melalui sumbu tegak lurus di pusat massanya. Jika sumbu putar digeser sejajar ke salah satu ujung batang, rumus momen inersia batang tersebut menjadi...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{6} M L^2$",
      "$\\frac{1}{4} M L^2$",
      "$\\frac{1}{3} M L^2$",
      "$\\frac{1}{2} M L^2$",
      "$M L^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Teorema sumbu sejajar (Steiner): $I = I_{\\text{pm}} + M d^2$, di mana $d$ adalah jarak pergeseran sumbu putar dari pusat massa. Untuk batang panjang $L$, jarak pusat massa ke ujung batang adalah $d = \\frac{1}{2} L$.",
      "steps": "1. Terapkan teorema sumbu sejajar ke ujung batang ($d = L/2$):\\n$$I_{\\text{ujung}} = I_{\\text{pusat}} + M \\left(\\frac{L}{2}\\right)^2$$\\n$$I_{\\text{ujung}} = \\frac{1}{12} M L^2 + \\frac{1}{4} M L^2$$\\n2. Samakan penyebut pecahan:\\n$$I_{\\text{ujung}} = \\left(\\frac{1}{12} + \\frac{3}{12}\\right) M L^2 = \\frac{4}{12} M L^2 = \\frac{1}{3} M L^2$$\\nJadi, momen inersia batang di ujung adalah $\\frac{1}{3} M L^2$.",
      "pitfalls": "Perhatikan bahwa momen inersia di ujung selalu lebih besar daripada di pusat massa karena sebagian besar massa terdistribusi lebih jauh dari poros putaran."
    }
  },
  {
    "id": "fis-din-rot-inersia-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Manakah pernyataan yang BENAR mengenai besaran momen inersia dalam dinamika rotasi fisika?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Momen inersia hanya bergantung pada massa total benda dan tidak dipengaruhi oleh posisi sumbu putar.",
      "Momen inersia merupakan ukuran kelembaman rotasi benda, dan nilainya bergantung pada massa total serta distribusi jarak massa terhadap sumbu putar.",
      "Momen inersia selalu bernilai sama dengan nol apabila benda berputar dengan kecepatan sudut konstan.",
      "Momen inersia adalah besaran vektor yang arahnya selalu searah dengan vektor kecepatan sudut.",
      "Semakin dekat massa terkonsentrasi ke sumbu rotasi, semakin besar nilai momen inersia benda tersebut."
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen inersia ($I$) adalah analogi rotasional dari massa inersial pada gerak translasi. Momen inersia mencerminkan resistensi benda terhadap percepatan sudut. Secara definisi integral $I = \\int r^2 dm$, nilainya ditentukan oleh geometri distribusi massa relatif terhadap sumbu putar tertentu.",
      "steps": "1. Momen inersia skalar selalu bernilai positif dan bergantung pada letak sumbu putar.\\n2. Benda dengan massa yang sama dapat memiliki momen inersia berbeda drastis jika bentuk geometris atau porosnya berbeda.\\n3. Semakin jauh massa tersebar dari poros putar, semakin besar nilai momen inersianya karena faktor kuadrat jarak ($r^2$).\\nSehingga pernyataan yang benar adalah opsi kedua.",
      "pitfalls": "Kerap menganggap momen inersia bernilai tetap untuk suatu benda layaknya massa translasi. Mengubah poros putar akan langsung mengubah momen inersia benda."
    }
  },
  {
    "id": "fis-din-rot-inersia-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah bola pejal homogen bermassa $M$ dan sebuah bola berongga (kulit bola tipis) bermassa $M$ memiliki jari-jari luar yang sama besar ($R$). Perbandingan momen inersia bola pejal ($I_p$) terhadap bola berongga ($I_b$) jika keduanya diputar terhadap sumbu yang melalui pusatnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 : 5$",
      "$3 : 5$",
      "$5 : 3$",
      "$2 : 3$",
      "$1 : 1$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen inersia bola pejal melalui pusat adalah $I_p = \\frac{2}{5} M R^2$. Momen inersia bola berongga tipis melalui pusat adalah $I_b = \\frac{2}{3} M R^2$.",
      "steps": "1. Tuliskan rumus momen inersia kedua benda:\\n$$I_p = \\frac{2}{5} M R^2$$\\n$$I_b = \\frac{2}{3} M R^2$$\\n2. Hitung perbandingannya:\\n$$\\frac{I_p}{I_b} = \\frac{\\frac{2}{5} M R^2}{\\frac{2}{3} M R^2} = \\frac{2/5}{2/3} = \\frac{2}{5} \\times \\frac{3}{2} = \\frac{3}{5}$$\\nJadi, perbandingannya adalah $3 : 5$.",
      "pitfalls": "Kerap tertukar karena bola berongga memiliki koefisien $\\frac{2}{3}$ sedangkan bola pejal memiliki koefisien $\\frac{2}{5}$. Karena seluruh massa bola berongga berada di tepi terjauh ($R$), momen inersianya lebih besar daripada bola pejal."
    }
  }
];
