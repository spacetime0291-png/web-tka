/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Momen Inersia (fis-din-rot-inersia)
 * Slug: momen-inersia
 * Indikator: Momen inersia partikel dan berbagai benda tegar simetris homogen (silinder, bola, batang tipis).
 * 
 * Total Butir Soal: 16 (Mudah: 9, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-inersia";
  const subTopicSlug = "momen-inersia";
  const questions = [
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
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
    },
    "subTopicSlug": "momen-inersia",
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-45",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua bola logam kecil bermassa $m_1 = 2\\text{ kg}$ dan $m_2 = 3\\text{ kg}$ disambungkan pada kedua ujung sebuah batang penghubung ringan tak bermassa dengan panjang total $L = 1\\text{ meter}$. Sistem diputar terhadap poros vertikal yang tegak lurus batang dan berjarak $0{,}4\\text{ m}$ dari bola pertama $m_1$. Momen inersia sistem partikel tersebut terhadap poros putar adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,72 kg·m²",
      "1,08 kg·m²",
      "1,40 kg·m²",
      "1,76 kg·m²",
      "2,00 kg·m²"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Momen inersia sistem partikel titik diskrit: $I = \\Sigma m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2$.</div>",
      "steps": "<ol><li>1) Jarak $m_1$: $r_1 = 0{,}4\\text{ m}$.<br>2) Jarak $m_2$: $r_2 = 1 - 0{,}4 = 0{,}6\\text{ m}$.<br>3) Momen inersia total: $I = 2(0{,}4)^2 + 3(0{,}6)^2 = 2(0{,}16) + 3(0{,}36) = 0{,}32 + 1{,}08 = 1{,}40\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jarak lengan ($r$), atau salah menentukan jarak bola kedua terhadap poros.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Perbandingan Momen Inersia Silinder vs Bola Pejal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah silinder pejal dan sebuah bola pejal memiliki massa ($M$) dan jari-jari ($R$) yang sama persis. Perbandingan momen inersia silinder pejal terhadap momen inersia bola pejal ($I_{\\text{silinder}} : I_{\\text{bola}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 : 4$",
      "$4 : 5$",
      "$2 : 5$",
      "$1 : 2$",
      "$3 : 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konstanta Momen Inersia Benda Pejal Baku:</strong><br>• Silinder pejal homogen: $I_{\\text{silinder}} = \\frac{1}{2} M R^2 = 0{,}5 M R^2$<br>• Bola pejal homogen: $I_{\\text{bola}} = \\frac{2}{5} M R^2 = 0{,}4 M R^2$</div>",
      "steps": "<ol><li>Bandingkan koefisien bentuknya:<br>$$\\frac{I_{\\text{silinder}}}{I_{\\text{bola}}} = \\frac{\\frac{1}{2}}{\\frac{2}{5}} = \\frac{1}{2} \\times \\frac{5}{2} = \\frac{5}{4}$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Ingat fraksi bentuk benda berotasi:<br>• Cincin/Silinder Berongga: $k = 1$<br>• Silinder Pejal: $k = 1/2 = 0{,}5$<br>• Bola Berongga: $k = 2/3 \\approx 0{,}67$<br>• Bola Pejal: $k = 2/5 = 0{,}4$</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill2-rot-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Momen Inersia Sistem Tiga Partikel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah partikel bermassa $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ disusun pada sumbu-X berturut-turut pada posisi $x_1 = 0\\text{ m}$, $x_2 = 1\\text{ m}$, dan $x_3 = 2\\text{ m}$. Jika sumbu putar berada di titik $x = 0$ (tegak lurus sumbu-X), maka momen inersia total sistem partikel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14\\text{ kg}\\cdot\\text{m}^2$",
      "$12\\text{ kg}\\cdot\\text{m}^2$",
      "$8\\text{ kg}\\cdot\\text{m}^2$",
      "$6\\text{ kg}\\cdot\\text{m}^2$",
      "$18\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Momen Inersia Sistem Partikel Diskrit:</strong><br>$$I = \\sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2$$<br>dengan $r_i$ adalah jarak tegak lurus partikel ke sumbu putar.</div>",
      "steps": "<ol><li>Jarak ke sumbu $x=0$: $r_1 = 0\\text{ m}$, $r_2 = 1\\text{ m}$, $r_3 = 2\\text{ m}$.</li><li>Hitung kontribusi masing-masing partikel:<br>• $I_1 = 1 \\times (0)^2 = 0$<br>• $I_2 = 2 \\times (1)^2 = 2\\text{ kg}\\cdot\\text{m}^2$<br>• $I_3 = 3 \\times (2)^2 = 3 \\times 4 = 12\\text{ kg}\\cdot\\text{m}^2$</li><li>Jumlahkan: $I = 0 + 2 + 12 = 14\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kuadratkan Jarak:</strong> Partikel yang tepat berada di sumbu putar ($r=0$) memiliki momen inersia nol. Jarak selalu dikuadratkan ($r^2$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill2-rot-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Momen Inersia Bola Berongga Tipis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah bola sepak dianggap sebagai bola berongga kulit tipis dengan massa $M = 3\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ meter}$. Jika rumus momen inersia bola berongga adalah $I = \\frac{2}{3} M R^2$, besar momen inersia bola tersebut terhadap sumbu yang melalui pusatnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}08\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}12\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}04\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}16\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}24\\text{ kg}\\cdot\\text{m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Momen Inersia Kulit Bola Berongga:</strong><br>$$I = \\frac{2}{3} M R^2$$</div>",
      "steps": "<ol><li>Hitung $R^2$: $(0{,}2)^2 = 0{,}04\\text{ m}^2$.</li><li>Hitung $I$: $I = \\frac{2}{3} \\times 3\\text{ kg} \\times 0{,}04\\text{ m}^2 = 2 \\times 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan Bola Pejal vs Berongga:</strong><br>• Bola pejal: $I = \\frac{2}{5}MR^2 = 0{,}4MR^2$<br>• Bola berongga: $I = \\frac{2}{3}MR^2 \\approx 0{,}67MR^2$</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "fis-din-23",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Dinamika Rotasi & Benda Menggelinding",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah silinder pejal roda gigi ($I = \\frac{1}{2} M R^2$, konstanta inersia $k = 0{,}5$) bermassa $M = 4\\text{ kg}$ dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Silinder menggelinding murni menuruni bidang miring tanpa slip. Besar percepatan linier pusat massa silinder dan gaya gesekan statis yang bekerja pada silinder adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "a = 4 m/s² dan fs = 8 N",
      "a = 6 m/s² dan fs = 0 N",
      "a = 4 m/s² dan fs = 16 N",
      "a = 3 m/s² dan fs = 12 N",
      "a = 2 m/s² dan fs = 6 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak menggelinding murni tanpa slip: translasi ($Mg \\sin\\theta - f_s = Ma$) dan rotasi ($f_s R = I \\alpha$). Formula percepatan: $a = \\frac{g \\sin\\theta}{1 + k}$.</div>",
      "steps": "<ol><li>1) Percepatan linier pusat massa silinder ($k = 0{,}5$):<br>$$a = \\frac{g \\sin 37^\\circ}{1 + k} = \\frac{10 \\times 0{,}6}{1 + 0{,}5} = \\frac{6}{1{,}5} = 4\\text{ m/s}^2$$.<br>2) Menghitung gaya gesek statis penopang rotasi:<br>$$f_s = \\frac{I \\alpha}{R} = \\frac{1}{2} M a = \\frac{1}{2}(4)(4) = 8\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira benda meluncur bebas tanpa rotasi ($a = g \\sin\\theta = 6\\text{ m/s}^2$ dan $f_s = 0\\text{ N}$), atau menggunakan koefisien inersia bola pejal ($k = 2/5$) bukannya silinder pejal ($k = 1/2$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
  },
  {
    "id": "drill-rot-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-rot-inersia",
    "category": "Teorema Sumbu Sejajar Momen Inersia",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang silinder homogen bermassa $M$ dan panjang $L$ memiliki momen inersia terhadap poros yang melalui pusat massanya sebesar $I_{\\text{pm}} = \\frac{1}{12} M L^2$. Berdasarkan teorema sumbu sejajar, momen inersia batang jika diputar pada salah satu ujungnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3} M L^2$",
      "$\\frac{1}{4} M L^2$",
      "$\\frac{1}{6} M L^2$",
      "$\\frac{5}{12} M L^2$",
      "$\\frac{2}{3} M L^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Teorema Sumbu Sejajar (Steiner):</strong><br>Momen inersia terhadap sumbu sejajar yang berjarak $d$ dari pusat massa adalah:<br>$$I = I_{\\text{pm}} + M d^2$$</div>",
      "steps": "<ol><li>Jarak dari pusat massa (tengah batang) ke ujung batang: $d = \\frac{1}{2}L$.</li><li>Terapkan teorema sumbu sejajar:<br>$$I = \\frac{1}{12}ML^2 + M\\left(\\frac{1}{2}L\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2$$</li><li>Samakan penyebut:<br>$$I = \\left(\\frac{1}{12} + \\frac{3}{12}\\right)ML^2 = \\frac{4}{12}ML^2 = \\frac{1}{3}ML^2$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pasangan Rumus Batang:</strong> Poros di tengah $\\implies \\frac{1}{12}ML^2$. Poros di ujung $\\implies \\frac{1}{3}ML^2$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Momen Inersia",
    "subTopic": "Momen Inersia",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-rot",
    "subTopicSlug": "momen-inersia"
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
