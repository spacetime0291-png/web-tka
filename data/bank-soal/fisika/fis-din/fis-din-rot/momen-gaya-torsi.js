/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Momen Gaya (Torsi) (fis-din-rot-torsi)
 * Slug: momen-gaya-torsi
 * Indikator: Perkalian silang lengan gaya dengan vektor gaya (tau = r * F * sin theta) terhadap poros rotasi.
 * 
 * Total Butir Soal: 14 (Mudah: 7, Sedang: 6, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-torsi";
  const subTopicSlug = "momen-gaya-torsi";
  const questions = [
  {
    "id": "fis-din-rot-torsi-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah kunci pas dengan panjang gagang $r = 25\\text{ cm}$ digunakan untuk mengencangkan sebuah baut. Jika seorang mekanik menarik ujung gagang kunci pas dengan gaya $F = 40\\text{ N}$ secara tegak lurus terhadap gagang, besar momen gaya (torsi) yang dikerjakan pada baut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ N}\\cdot\\text{m}$",
      "$5,0\\text{ N}\\cdot\\text{m}$",
      "$10,0\\text{ N}\\cdot\\text{m}$",
      "$16,0\\text{ N}\\cdot\\text{m}$",
      "$100,0\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momen gaya (torsi) menyatakan kecenderungan gaya untuk memutar suatu benda terhadap suatu poros tertentu: $\\tau = r F \\sin\\theta$. Jika gaya bekerja tegak lurus gagang ($\\theta = 90^\\circ$), maka $\\sin 90^\\circ = 1$ sehingga $\\tau = r F$.",
      "steps": "1. Konversikan panjang lengan ke satuan meter (SI):\\n$$r = 25\\text{ cm} = 0,25\\text{ m}$$\\n2. Hitung besar torsi:\\n$$\\tau = r F \\sin 90^\\circ = 0,25\\text{ m} \\times 40\\text{ N} \\times 1 = 10,0\\text{ N}\\cdot\\text{m}$$\\nJadi, besar momen gaya pada baut adalah $10,0\\text{ N}\\cdot\\text{m}$.",
      "pitfalls": "Kerap lupa mengonversi centimeter ke meter ($25 \\times 40 = 1.000$), atau salah membagi nilai panjang lengan."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-rot-torsi-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah batang homogen dapat berputar bebas pada poros di salah satu ujungnya (titik $O$). Sebuah gaya $F = 20\\text{ N}$ dikerjakan pada titik yang berjarak $r = 2\\text{ m}$ dari poros $O$ dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang. Besar momen gaya terhadap poros $O$ tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}\\cdot\\text{m}$",
      "$10\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$20\\text{ N}\\cdot\\text{m}$",
      "$20\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$40\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momen gaya ditentukan oleh komponen gaya yang tegak lurus terhadap lengan momen: $\\tau = r F \\sin\\theta$, di mana $\\theta$ adalah sudut antara vektor lengan posisi $\\vec{r}$ dan garis kerja gaya $\\vec{F}$.",
      "steps": "1. Identifikasi parameter:\\n$r = 2\\text{ m}$, $F = 20\\text{ N}$, $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0,5$).\\n2. Hitung momen gaya:\\n$$\\tau = r F \\sin 30^\\circ = (2)(20)(0,5) = 20\\text{ N}\\cdot\\text{m}$$\\nJadi, besar momen gaya terhadap poros $O$ adalah $20\\text{ N}\\cdot\\text{m}$.",
      "pitfalls": "Kerap tertukar menggunakan fungsi kosinus ($\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$) yang menghasilkan $20\\sqrt{3}\\text{ N}\\cdot\\text{m}$. Komponen yang tegak lurus batang dan menghasilkan efek rotasi adalah komponen sinus."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-rot-torsi-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Perhatikan faktor-faktor yang memengaruhi momen gaya $\\tau = r F \\sin\\theta$. Kondisi berikut yang menyebabkan momen gaya pada benda bernilai tepat sama dengan NOL ($\\tau = 0$) meskipun gaya luar bekerja pada benda adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Garis kerja gaya tegak lurus terhadap sumbu putar dan berjarak maksimum dari poros",
      "Garis kerja gaya melewati langsung poros putar benda atau sejajar dengan vektor lengan posisi",
      "Gaya bekerja tepat pada sudut elevasi $\\theta = 45^\\circ$ terhadap batang",
      "Benda berotasi dengan kelajuan sudut konstan di bidang horizontal licin",
      "Gaya yang diberikan sangat besar dan arahnya membentuk sudut $\\theta = 60^\\circ$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan definisi matematis $\\tau = r F \\sin\\theta$, torsi bernilai nol jika salah satu dari kondisi berikut terpenuhi: (1) jarak ke poros $r = 0$ (gaya bekerja tepat di poros/garis kerja melewati poros), atau (2) sudut $\\theta = 0^\\circ$ atau $180^\\circ$ (gaya menarik atau mendorong sejajar lengan batang sehingga $\\sin\\theta = 0$).",
      "steps": "1. Jika gaya melewati poros putar, lengan momen tegak lurus bernilai nol ($r_\\perp = 0$).\\n2. Jika gaya sejajar batang (menarik lurus ke luar atau mendorong ke poros), sudut $\\theta = 0^\\circ$ atau $180^\\circ$, menghasilkan $\\sin\\theta = 0$.\\n3. Pada kedua kondisi tersebut tidak timbul efek puntir (rotasi).\\nJadi, momen gaya bernilai nol saat garis kerja gaya melewati poros atau sejajar dengan lengan posisi.",
      "pitfalls": "Mendorong gagang pintu tepat di engselnya (poros) tidak akan pernah dapat membuka pintu karena lengan gayanya nol ($r = 0$), berapapun besarnya gaya yang dikerahkan."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-rot-torsi-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah batang ringan tak bermassa dengan panjang total $L = 3\\text{ m}$ memiliki poros putar di ujung $A$. Pada titik $B$ yang berjarak $1\\text{ m}$ dari poros $A$, bekerja gaya $F_1 = 10\\text{ N}$ tegak lurus ke atas. Pada ujung lain $C$ yang berjarak $3\\text{ m}$ dari $A$, bekerja gaya $F_2 = 5\\text{ N}$ tegak lurus ke bawah. Besar dan arah resultan momen gaya pada batang terhadap poros $A$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam",
      "$5\\text{ N}\\cdot\\text{m}$ berlawanan arah putaran jarum jam",
      "$25\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam",
      "$25\\text{ N}\\cdot\\text{m}$ berlawanan arah putaran jarum jam",
      "$0\\text{ N}\\cdot\\text{m}$ (batang dalam keadaan seimbang)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resultan momen gaya adalah penjumlahan aljabar torsi dengan memperhatikan konvensi tanda rotasi: biasanya berlawanan arah jarum jam (CCW) bertanda positif ($+$) dan searah jarum jam (CW) bertanda negatif ($-$).",
      "steps": "1. Tinjau torsi oleh gaya $F_1$ di titik $B$ ($r_1 = 1\\text{ m}$, arah ke atas memutar CCW / positif):\\n$$\\tau_1 = +r_1 F_1 = +(1\\text{ m})(10\\text{ N}) = +10\\text{ N}\\cdot\\text{m}$$\\n2. Tinjau torsi oleh gaya $F_2$ di ujung $C$ ($r_2 = 3\\text{ m}$, arah ke bawah memutar CW / negatif):\\n$$\\tau_2 = -r_2 F_2 = -(3\\text{ m})(5\\text{ N}) = -15\\text{ N}\\cdot\\text{m}$$\\n3. Hitung resultan torsi terhadap poros $A$:\\n$$\\sum \\tau_A = \\tau_1 + \\tau_2 = +10 - 15 = -5\\text{ N}\\cdot\\text{m}$$\\nTanda negatif menandakan arah rotasi netto adalah searah putaran jarum jam.\\nJadi, besar resultan momen gaya adalah $5\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam.",
      "pitfalls": "Kerap menjumlahkan kedua torsi tanpa memperhatikan perbedaan arah putarnya ($10 + 15 = 25\\text{ N}\\cdot\\text{m}$). Karena satu gaya memutar berlawanan jarum jam dan gaya lainnya memutar searah jarum jam, keduanya saling mengurangi."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-rot-torsi-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Meskipun satuan momen gaya ($\\text{N}\\cdot\\text{m}$) secara dimensi turunan setara dengan joule ($\\text{J}$), satuan momen gaya tidak pernah dinyatakan dalam joule. Alasan fisis yang paling tepat untuk membedakan kedua satuan ini adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Torsi hanya berlaku pada benda elastis sedangkan joule hanya berlaku pada fluida",
      "Torsi merupakan besaran vektor hasil perkalian silang (cross product), sedangkan joule menyatakan besaran skalar energi/usaha hasil perkalian titik (dot product)",
      "Torsi selalu bernilai negatif sedangkan joule selalu bernilai positif",
      "Joule hanya dapat digunakan jika benda bergerak lurus beraturan tanpa rotasi",
      "Torsi adalah besaran pokok sedangkan joule adalah besaran turunan"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen gaya $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ adalah besaran pseudovektor yang menyatakan tendensi puntiran, sedangkan Usaha $W = \\vec{F} \\cdot \\vec{s}$ adalah besaran skalar energi. Untuk menghindari kerancuan antara besaran kapasitas kerja (energi) dan efek pemuntir (torsi), satuan joule secara konvensi hanya dialokasikan untuk usaha dan energi.",
      "steps": "1. Analisis matematika: Perkalian silang $\\vec{r} \\times \\vec{F}$ menghasilkan vektor yang tegak lurus bidang putar.\\n2. Analisis fisis: Torsi tidak menyatakan kuantitas energi yang dipindahkan melainkan kemampuan memutar.\\n3. Konvensi SI: Joule dikhususkan untuk besaran skalar energi, sedangkan torsi selalu dituliskan dalam $\\text{N}\\cdot\\text{m}$.",
      "pitfalls": "Dua besaran dengan dimensi fisika yang sama ($[M][L]^2[T]^{-2}$) tidak selalu memiliki makna atau satuan operasional yang sama bila salah satunya adalah vektor dan yang lainnya adalah skalar."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-rot-torsi-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah batang homogen $AB$ dengan panjang $L = 4\\text{ m}$ dapat berputar bebas pada engsel di titik $A$. Pada batang tersebut bekerja tiga gaya luar:\\n- Gaya $F_1 = 10\\text{ N}$ bekerja di titik tengah batang ($r_1 = 2\\text{ m}$ dari $A$) tegak lurus ke atas.\\n- Gaya $F_2 = 20\\text{ N}$ bekerja di ujung $B$ ($r_2 = 4\\text{ m}$ dari $A$) membentuk sudut $\\theta_2 = 30^\\circ$ ke arah bawah terhadap batang.\\n- Gaya $F_3 = 15\\text{ N}$ bekerja tepat pada engsel $A$.\\nBesar dan arah resultan momen gaya terhadap titik poros $A$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam",
      "$20\\text{ N}\\cdot\\text{m}$ berlawanan arah putaran jarum jam",
      "$60\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam",
      "$10\\text{ N}\\cdot\\text{m}$ berlawanan arah putaran jarum jam",
      "$0\\text{ N}\\cdot\\text{m}$ (batang dalam keadaan seimbang)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hitung torsi masing-masing gaya terhadap poros $A$ dengan rumus $\\tau = r F \\sin\\theta$. Terapkan aturan tanda arah rotasi: berlawanan arah jarum jam (CCW) bertanda positif ($+$) dan searah jarum jam (CW) bertanda negatif ($-$).",
      "steps": "1. Tinjau gaya $F_3$ di engsel $A$:\\nKarena garis kerja gaya tepat di poros, $r_3 = 0 \\implies \\tau_3 = 0$.\\n2. Tinjau gaya $F_1$ di titik tengah ($r_1 = 2\\text{ m}$):\\nGaya mengarah ke atas sehingga memutar CCW ($+$):\\n$$\\tau_1 = +r_1 F_1 \\sin 90^\\circ = +(2)(10)(1) = +20\\text{ N}\\cdot\\text{m}$$\\n3. Tinjau gaya $F_2$ di ujung $B$ ($r_2 = 4\\text{ m}$):\\nGaya mengarah ke bawah dengan sudut $30^\\circ$ sehingga memutar CW ($-$):\\n$$\\tau_2 = -r_2 F_2 \\sin 30^\\circ = -(4)(20)(0,5) = -40\\text{ N}\\cdot\\text{m}$$\\n4. Hitung resultan momen gaya:\\n$$\\sum \\tau_A = \\tau_1 + \\tau_2 + \\tau_3 = +20 - 40 + 0 = -20\\text{ N}\\cdot\\text{m}$$\\nTanda negatif menandakan arah putaran searah jarum jam.\\nJadi, besar resultan momen gaya adalah $20\\text{ N}\\cdot\\text{m}$ searah putaran jarum jam.",
      "pitfalls": "Kerap lupa mengalikan $\\sin 30^\\circ = 0,5$ pada gaya $F_2$, atau memasukkan gaya $F_3$ yang sesungguhnya menghasilkan torsi nol karena berada di titik engsel."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-rot-torsi-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah gaya $\\vec{F} = (2\\hat{i} + 3\\hat{j} - \\hat{k})\\text{ N}$ bekerja pada sebuah partikel dengan posisi relatif terhadap titik acuan $O$ dinyatakan oleh vektor $\\vec{r} = (4\\hat{i} - \\hat{j} + 2\\hat{k})\\text{ m}$. Vektor momen gaya (torsi) terhadap titik acuan $O$ tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-5\\hat{i} + 8\\hat{j} + 14\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "$(5\\hat{i} - 8\\hat{j} - 14\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "$(-5\\hat{i} - 8\\hat{j} + 14\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "$(8\\hat{i} - 3\\hat{j} - 2\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "$(11\\hat{i} + 8\\hat{j} + 10\\hat{k})\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Secara analitik tiga dimensi, momen gaya merupakan perkalian silang (vektor cross product) antara vektor lengan posisi dan vektor gaya: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.",
      "steps": "1. Susun determinan matriks perkalian silang:\\n$$\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 4 & -1 & 2 \\\\ 2 & 3 & -1 \\end{vmatrix}$$\\n2. Hitung masing-masing komponen:\\n- Komponen $\\hat{i}$: $(-1)(-1) - (2)(3) = 1 - 6 = -5$\\n- Komponen $\\hat{j}$: $- [ (4)(-1) - (2)(2) ] = - [ -4 - 4 ] = -(-8) = +8$\\n- Komponen $\\hat{k}$: $(4)(3) - (-1)(2) = 12 - (-2) = 12 + 2 = 14$\\n3. Tuliskan vektor hasil:\\n$$\\vec{\\tau} = (-5\\hat{i} + 8\\hat{j} + 14\\hat{k})\\text{ N}\\cdot\\text{m}$$\\nJadi, vektor momen gaya adalah $(-5\\hat{i} + 8\\hat{j} + 14\\hat{k})\\text{ N}\\cdot\\text{m}$.",
      "pitfalls": "Kerap tertukar urutan perkalian silang menjadi $\\vec{F} \\times \\vec{r}$ yang menghasilkan vektor dengan tanda berlawanan ($5\\hat{i} - 8\\hat{j} - 14\\hat{k}$). Ingat bahwa perkalian silang bersifat antikomutatif."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-rot-torsi-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sepasang gaya sejajar berlawanan arah yang sama besar (kopel) dengan nilai masing-masing $F = 25\\text{ N}$ bekerja pada tepi roda kemudi yang memiliki diameter $D = 40\\text{ cm}$. Gaya pertama menarik tepi atas roda ke kiri, sedangkan gaya kedua menarik tepi bawah roda ke kanan. Besar momen kopel yang dihasilkan pada kemudi tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}\\cdot\\text{m}$",
      "$10\\text{ N}\\cdot\\text{m}$",
      "$20\\text{ N}\\cdot\\text{m}$",
      "$25\\text{ N}\\cdot\\text{m}$",
      "$50\\text{ N}\\cdot\\text{m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momen kopel dihasilkan oleh sepasang gaya sejajar berlawanan arah dengan besar sama ($F$) yang terpisah sejauh jarak tegak lurus $d$: $M = F \\times d$. Nilai momen kopel bernilai konstan dan tidak bergantung pada letak titik poros putaran acuan.",
      "steps": "1. Tentukan jarak tegak lurus antargaris kerja kedua gaya:\\nJarak antara tepi atas dan bawah adalah diameter kemudi:\\n$$d = D = 40\\text{ cm} = 0,40\\text{ m}$$\\n2. Hitung momen kopel:\\n$$M = F \\times d = 25\\text{ N} \\times 0,40\\text{ m} = 10\\text{ N}\\cdot\\text{m}$$\\nJadi, besar momen kopel yang dihasilkan adalah $10\\text{ N}\\cdot\\text{m}$.",
      "pitfalls": "Kerap menggunakan jari-jari ($R = 0,20\\text{ m}$) untuk menghitung momen kopel sehingga mendapatkan nilai $5\\text{ N}\\cdot\\text{m}$. Ingat bahwa lengan kopel adalah jarak total pemisah antara kedua garis kerja gaya sejajar ($d = 2R = D$)."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-rot-torsi-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah katrol silinder pejal bertingkat memiliki jari-jari dalam $R_1 = 10\\text{ cm}$ dan jari-jari luar $R_2 = 25\\text{ cm}$. Tali pertama dililitkan pada silinder dalam dan ditarik vertikal ke bawah dengan gaya $F_1 = 50\\text{ N}$ (menghasilkan efek putar searah jarum jam). Tali kedua dililitkan pada silinder luar dan ditarik vertikal ke atas dengan gaya $F_2 = 30\\text{ N}$ (menghasilkan efek putar berlawanan arah jarum jam). Besar dan arah resultan momen gaya terhadap sumbu simetri katrol adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ N}\\cdot\\text{m}$ berlawanan arah jarum jam",
      "$2,5\\text{ N}\\cdot\\text{m}$ searah jarum jam",
      "$12,5\\text{ N}\\cdot\\text{m}$ berlawanan arah jarum jam",
      "$12,5\\text{ N}\\cdot\\text{m}$ searah jarum jam",
      "$0\\text{ N}\\cdot\\text{m}$ (katrol setimbang)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tali yang melilit silinder selalu bekerja menyinggung tepi lingkaran, sehingga sudut antara gaya tegangan tali dan jari-jari silinder selalu tegak lurus ($\\theta = 90^\\circ$). Torsi masing-masing tali adalah $\\tau = R \\times F$.",
      "steps": "1. Konversikan jari-jari ke meter:\\n$R_1 = 10\\text{ cm} = 0,10\\text{ m}$, $R_2 = 25\\text{ cm} = 0,25\\text{ m}$.\\n2. Hitung torsi oleh tali silinder dalam (memutar searah jarum jam / CW, tanda negatif):\\n$$\\tau_1 = -R_1 F_1 = -(0,10)(50) = -5,0\\text{ N}\\cdot\\text{m}$$\\n3. Hitung torsi oleh tali silinder luar (memutar berlawanan jarum jam / CCW, tanda positif):\\n$$\\tau_2 = +R_2 F_2 = +(0,25)(30) = +7,5\\text{ N}\\cdot\\text{m}$$\\n4. Hitung resultan torsi total:\\n$$\\sum \\tau = \\tau_2 + \\tau_1 = +7,5 - 5,0 = +2,5\\text{ N}\\cdot\\text{m}$$\\nTanda positif menunjukkan putaran berlawanan arah jarum jam.\\nJadi, resultan torsinya adalah $2,5\\text{ N}\\cdot\\text{m}$ berlawanan arah jarum jam.",
      "pitfalls": "Kerap menjumlahkan kedua torsi secara skalar ($7,5 + 5,0 = 12,5\\text{ N}\\cdot\\text{m}$) tanpa memperhatikan bahwa arah lilitan dan tarikan tali memutar katrol pada arah yang saling berlawanan."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-rot-torsi-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-torsi",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah papan jungkat-jungkit homogen bermassa $M = 10\\text{ kg}$ dan panjang $L = 6\\text{ m}$ ditumpu tepat di bagian tengahnya. Anak $A$ bermassa $m_A = 30\\text{ kg}$ duduk tepat di ujung kiri papan ($3\\text{ m}$ dari titik tumpu). Agar papan jungkat-jungkit berada dalam posisi seimbang horizontal, jarak tempat duduk anak $B$ yang bermassa $m_B = 45\\text{ kg}$ dari titik tumpu di sebelah kanan haruslah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1,5\\text{ m}$",
      "$2,0\\text{ m}$",
      "$2,5\\text{ m}$",
      "$3,0\\text{ m}$",
      "$4,5\\text{ m}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Syarat kesetimbangan rotasi adalah resultan momen gaya terhadap titik tumpu harus sama dengan nol: $\\sum \\tau = 0$. Karena titik tumpu berada tepat di pusat massa papan, gaya berat papan tidak menghasilkan torsi (lengannya nol).",
      "steps": "1. Identifikasi torsi terhadap titik tumpu:\\n- Anak $A$ di kiri: $\\tau_A = +m_A g \\cdot d_A$ (memutar CCW).\\n- Anak $B$ di kanan: $\\tau_B = -m_B g \\cdot d_B$ (memutar CW).\\n2. Terapkan syarat kesetimbangan rotasi:\\n$$\\sum \\tau = 0 \\implies m_A g \\cdot d_A = m_B g \\cdot d_B$$\\n$$m_A d_A = m_B d_B$$\\n3. Substitusi data ($m_A = 30\\text{ kg}$, $d_A = 3\\text{ m}$, $m_B = 45\\text{ kg}$):\\n$$30 \\times 3 = 45 \\times d_B$$\\n$$90 = 45 d_B \\implies d_B = \\frac{90}{45} = 2,0\\text{ m}$$\\nJadi, anak $B$ harus duduk pada jarak $2,0\\text{ m}$ dari titik tumpu.",
      "pitfalls": "Kerap mengikutsertakan massa papan secara keliru. Jika tumpuan tepat berada di titik berat papan homogen, torsi akibat gaya berat papan adalah nol."
    },
    "subTopicSlug": "momen-gaya-torsi",
    "bab": "Dinamika",
    "subBab": "Momen Gaya (Torsi)",
    "subTopic": "Momen Gaya (Torsi)",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
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
