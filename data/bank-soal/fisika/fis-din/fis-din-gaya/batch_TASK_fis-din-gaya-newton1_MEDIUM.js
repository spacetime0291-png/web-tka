module.exports = [
  {
    id: "fis-din-gaya-newton1-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "sedang",
    statement: "Sebuah lampu gantung antik bermassa $m = 6\\text{ kg}$ digantungkan pada langit-langit gedung menggunakan dua utas tali simetris $T_1$ dan $T_2$. Kedua tali masing-masing membentuk sudut $\\theta = 30^\\circ$ terhadap garis horizontal langit-langit (diketahui $\\sin 30^\\circ = 0{,}5$). Jika sistem berada dalam kesetimbangan statis dan $g = 10\\text{ m/s}^2$, besar gaya tegangan pada masing-masing tali adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ N}$",
      "$30\\text{ N}$",
      "$120\\text{ N}$",
      "$30\\sqrt{3}\\text{ N}$",
      "$60\\sqrt{3}\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat kesetimbangan translasi statis menurut Hukum I Newton adalah $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$. Pada sumbu vertikal, komponen tegangan kedua tali menopang gaya berat lampu.",
      steps: "1. Berat lampu gantung:<br>$$w = m \\cdot g = 6\\text{ kg} \\times 10\\text{ m/s}^2 = 60\\text{ N}$$<br>2. Karena sistem simetris, besar tegangan tali sama ($T_1 = T_2 = T$).<br>3. Terapkan kesetimbangan gaya vertikal ($\\Sigma F_y = 0$):<br>$$T_1 \\sin 30^\\circ + T_2 \\sin 30^\\circ - w = 0$$<br>$$2 T \\sin 30^\\circ = w \\implies 2 T (0{,}5) = 60 \\implies T = 60\\text{ N}$$",
      pitfalls: "Lupa bahwa ada dua tali yang menopang sehingga membagi dua gaya berat tanpa memperhitungkan faktor $\\sin 30^\\circ = 0{,}5$."
    }
  },
  {
    id: "fis-din-gaya-newton1-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "sedang",
    statement: "Sebuah balok bermassa $m = 5\\text{ kg}$ berada di atas bidang miring licin yang memiliki sudut kemiringan $\\theta = 37^\\circ$ terhadap garis horizontal (diketahui $\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Agar balok tersebut tetap tertahan diam dalam keadaan setimbang, besar gaya dorong horizontal $F$ yang harus diberikan pada balok adalah .... ($g = 10\\text{ m/s}^2$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$37{,}5\\text{ N}$",
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$24\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gaya dorong $F$ berarah horizontal mendatar. Proyeksikan gaya-gaya yang bekerja sejajar dengan permukaan bidang miring untuk memenuhi syarat kesetimbangan $\\Sigma F_{\\parallel} = 0$.",
      steps: "1. Berat balok: $w = m \\cdot g = 5 \\times 10 = 50\\text{ N}$.<br>2. Komponen gaya berat menuruni bidang miring:<br>$$w_x = w \\sin 37^\\circ = 50 \\times 0{,}6 = 30\\text{ N}$$<br>3. Komponen gaya dorong $F$ menaiki bidang miring:<br>$$F_x = F \\cos 37^\\circ = 0{,}8 F$$<br>4. Kesetimbangan sejajar bidang ($\\Sigma F_{\\parallel} = 0$):<br>$$F \\cos 37^\\circ = w \\sin 37^\\circ \\implies 0{,}8 F = 30 \\implies F = \\frac{30}{0{,}8} = 37{,}5\\text{ N}$$",
      pitfalls: "Mengabaikan arah horizontal dari gaya dorong $F$ dan mengasumsikan $F$ sudah sejajar bidang miring sehingga menjawab $30\\text{ N}$."
    }
  },
  {
    id: "fis-din-gaya-newton1-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "sedang",
    statement: "Sebuah partikel titik berada dalam keadaan setimbang translasi di bawah pengaruh tiga gaya vektor sebidang: $\\vec{F}_1 = (6\\hat{i} + 8\\hat{j})\\text{ N}$, $\\vec{F}_2 = (-2\\hat{i} - 5\\hat{j})\\text{ N}$, dan gaya ketiga $\\vec{F}_3$. Besar magnitudo (nilai mutlak) dari vektor gaya $\\vec{F}_3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ N}$",
      "$7\\text{ N}$",
      "$\\sqrt{65}\\text{ N}$",
      "$25\\text{ N}$",
      "$1\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Syarat kesetimbangan partikel adalah resultan jumlahan vektor seluruh gaya bernilai nol:<br>$$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$$",
      steps: "1. Jumlahkan komponen vektor $\\vec{F}_1$ dan $\\vec{F}_2$:<br>$$\\vec{F}_{12} = (6 - 2)\\hat{i} + (8 - 5)\\hat{j} = 4\\hat{i} + 3\\hat{j}\\text{ (N)}$$<br>2. Tentukan vektor gaya $\\vec{F}_3$ penyeimbang:<br>$$\\vec{F}_3 = -\\vec{F}_{12} = -4\\hat{i} - 3\\hat{j}\\text{ (N)}$$<br>3. Hitung besar (norma) vektor gaya $\\vec{F}_3$:<br>$$|\\vec{F}_3| = \\sqrt{(-4)^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ N}$$",
      pitfalls: "Lupa menarik akar kuadrat setelah menjumlahkan kuadrat komponen ($16 + 9 = 25$)."
    }
  },
  {
    id: "fis-din-gaya-newton1-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "sedang",
    statement: "Sebuah balok kayu bermassa $m = 8\\text{ kg}$ ditarik oleh gaya luar konstan $F = 40\\text{ N}$ yang membentuk sudut elevasi $60^\\circ$ terhadap lantai horizontal kasar ($\\cos 60^\\circ = 0{,}5$). Jika balok teramati bergerak lurus dengan kelajuan tetap $v = 2\\text{ m/s}$, besar gaya gesekan kinetis yang bekerja pada balok dari lantai adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ N}$",
      "$40\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$80\\text{ N}$",
      "$10\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak dengan kelajuan tetap pada lintasan lurus merupakan Gerak Lurus Beraturan (GLB). Berdasarkan Hukum I Newton, resultan gaya pada arah mendatar harus sama dengan nol ($\\Sigma F_x = 0$).",
      steps: "1. Komponen gaya tarik mendatar searah gerak:<br>$$F_x = F \\cos 60^\\circ = 40\\text{ N} \\times 0{,}5 = 20\\text{ N}$$<br>2. Terapkan kesetimbangan horizontal ($\\Sigma F_x = 0$):<br>$$F_x - f_k = 0 \\implies f_k = F_x = 20\\text{ N}$$",
      pitfalls: "Mencoba menghitung koefisien gesek dan gaya normal yang rumit, padahal informasi 'bergerak dengan kelajuan tetap' secara langsung memastikan $f_k = F_x$."
    }
  },
  {
    id: "fis-din-gaya-newton1-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton1",
    category: "Hukum I Newton",
    difficulty: "sedang",
    statement: "Sebuah simpul tali dalam keadaan setimbang menahan beban bermassa $M = 4\\text{ kg}$ melalui seutas tali vertikal. Simpul tersebut dihubungkan ke dinding oleh tali $A$ yang mendatar horizontal dan ke langit-langit oleh tali $B$ yang membentuk sudut $53^\\circ$ terhadap garis horizontal (diketahui $\\sin 53^\\circ = 0{,}8$ dan $\\cos 53^\\circ = 0{,}6$, $g = 10\\text{ m/s}^2$). Besar gaya tegangan tali $A$ ($T_A$) dan tali $B$ ($T_B$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ N}$ dan $50\\text{ N}$",
      "$50\\text{ N}$ dan $30\\text{ N}$",
      "$40\\text{ N}$ dan $50\\text{ N}$",
      "$30\\text{ N}$ dan $40\\text{ N}$",
      "$24\\text{ N}$ dan $32\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kesetimbangan titik simpul tiga gaya:<br>• Sumbu vertikal: $\\Sigma F_y = 0 \\implies T_B \\sin\\theta - w = 0$<br>• Sumbu horizontal: $\\Sigma F_x = 0 \\implies T_B \\cos\\theta - T_A = 0$",
      steps: "1. Berat beban: $w = M \\cdot g = 4 \\times 10 = 40\\text{ N}$.<br>2. Dari kesetimbangan vertikal:<br>$$T_B \\sin 53^\\circ = w \\implies T_B (0{,}8) = 40 \\implies T_B = \\frac{40}{0{,}8} = 50\\text{ N}$$<br>3. Dari kesetimbangan horizontal:<br>$$T_A = T_B \\cos 53^\\circ = 50 \\times 0{,}6 = 30\\text{ N}$$",
      pitfalls: "Tertukar antara tegangan tali $A$ dan tali $B$ saat membaca urutan pertanyaan."
    }
  }
];
