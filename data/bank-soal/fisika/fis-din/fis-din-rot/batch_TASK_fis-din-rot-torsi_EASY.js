module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
