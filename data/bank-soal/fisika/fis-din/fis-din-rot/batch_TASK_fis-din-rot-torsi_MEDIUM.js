module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
