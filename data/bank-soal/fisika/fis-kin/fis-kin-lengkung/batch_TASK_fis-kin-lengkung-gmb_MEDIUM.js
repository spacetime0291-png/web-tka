module.exports = [
  {
    id: "fis-kin-lengkung-gmb-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "sedang",
    statement: "Dua buah roda $A$ dan $B$ dihubungkan menggunakan rantai tak elastis. Jari-jari roda $A$ adalah $R_A = 20\\text{ cm}$ dan jari-jari roda $B$ adalah $R_B = 5\\text{ cm}$. Jika roda $A$ berputar dengan kecepatan sudut tetap $\\omega_A = 15\\text{ rad/s}$, besar kecepatan sudut roda $B$ ($\\omega_B$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ rad/s}$",
      "$3{,}75\\text{ rad/s}$",
      "$30\\text{ rad/s}$",
      "$75\\text{ rad/s}$",
      "$15\\text{ rad/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua roda yang dihubungkan dengan rantai atau tali sabuk memiliki kelajuan linier pada tepi roda yang sama besar ($v_A = v_B$):<br>$$\\omega_A R_A = \\omega_B R_B$$",
      steps: "1. Hubungkan parameter gerak kedua roda:<br>$$\\omega_B = \\omega_A \\left( \\frac{R_A}{R_B} \\right)$$<br>2. Masukkan nilai yang diketahui:<br>$$\\omega_B = 15\\text{ rad/s} \\times \\left( \\frac{20\\text{ cm}}{5\\text{ cm}} \\right) = 15 \\times 4 = 60\\text{ rad/s}$$",
      pitfalls: "Menyamakan kecepatan sudut ($\\omega_A = \\omega_B = 15\\text{ rad/s}$), yang merupakan hubungan untuk dua roda yang sesumbu/seporos, bukan dihubungkan rantai."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "sedang",
    statement: "Tiga buah roda $A$, $B$, dan $C$ dirangkai sebagai berikut: roda $A$ dan $B$ dipasang seporos (sepusat), sedangkan tepi roda $B$ dan tepi roda $C$ dihubungkan oleh sebuah sabuk penggerak. Jari-jari masing-masing roda adalah $R_A = 30\\text{ cm}$, $R_B = 10\\text{ cm}$, dan $R_C = 20\\text{ cm}$. Jika titik pada tepi roda $C$ memiliki kelajuan linier $v_C = 6\\text{ m/s}$, besar kelajuan linier titik pada tepi roda $A$ ($v_A$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$18\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$9\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "• Roda $B$ dan $C$ dihubungkan sabuk: $v_B = v_C$.<br>• Roda $A$ dan $B$ seporos: $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$.",
      steps: "1. Dari hubungan sabuk $B-C$:<br>$$v_B = v_C = 6\\text{ m/s}$$<br>2. Dari hubungan seporos $A-B$:<br>$$v_A = v_B \\left( \\frac{R_A}{R_B} \\right) = 6\\text{ m/s} \\times \\left( \\frac{30\\text{ cm}}{10\\text{ cm}} \\right) = 6 \\times 3 = 18\\text{ m/s}$$",
      pitfalls: "Menyamakan kelajuan linier seluruh roda $v_A = v_B = v_C = 6\\text{ m/s}$."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "sedang",
    statement: "Dua titik $P$ dan $Q$ terletak pada piringan pemutar yang sama dan berputar bersamaan mengitari satu poros putaran pusat. Titik $P$ berada pada jarak $r_P = 10\\text{ cm}$ dan titik $Q$ berada pada jarak $r_Q = 30\\text{ cm}$ dari poros pusat. Perbandingan kecepatan sudut ($\\omega_P : \\omega_Q$) dan perbandingan kelajuan linier ($v_P : v_Q$) kedua titik tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 1$ dan $1 : 3$",
      "$1 : 3$ dan $1 : 1$",
      "$1 : 3$ dan $1 : 3$",
      "$3 : 1$ dan $1 : 3$",
      "$1 : 1$ dan $1 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik-titik yang terletak pada satu benda tegar atau piringan yang sama selalu menyapu sudut yang sama dalam selang waktu yang sama sehingga memiliki kecepatan sudut identik ($\\omega_P = \\omega_Q$). Kelajuan linier berbanding lurus dengan jarak titik ke poros ($v = \\omega r$).",
      steps: "1. Karena seporos pada piringan yang sama:<br>$$\\omega_P : \\omega_Q = 1 : 1$$<br>2. Perbandingan kelajuan linier:<br>$$\\frac{v_P}{v_Q} = \\frac{\\omega \\cdot r_P}{\\omega \\cdot r_Q} = \\frac{10\\text{ cm}}{30\\text{ cm}} = \\frac{1}{3} = 1 : 3$$",
      pitfalls: "Terkecoh mengira titik yang lebih jauh memiliki kecepatan sudut yang lebih besar."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "sedang",
    statement: "Sebuah roda turbin berputar secara beraturan dengan kelajuan sudut konstan $\\omega = 40\\pi\\text{ rad/s}$. Banyaknya putaran penuh ($N$) yang telah diselesaikan oleh roda turbin tersebut selama selang waktu $5\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ putaran}$",
      "$200\\text{ putaran}$",
      "$50\\text{ putaran}$",
      "$40\\text{ putaran}$",
      "$80\\text{ putaran}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Posisi sudut yang ditempuh dalam selang waktu $t$ pada GMB adalah $\\theta = \\omega \\cdot t$. Karena satu putaran penuh setara dengan $2\\pi\\text{ radian}$, jumlah putaran adalah:<br>$$N = \\frac{\\theta}{2\\pi} = \\frac{\\omega \\cdot t}{2\\pi}$$",
      steps: "1. Hitung sudut putar total:<br>$$\\theta = 40\\pi\\text{ rad/s} \\times 5\\text{ s} = 200\\pi\\text{ radian}$$<br>2. Konversi ke banyaknya putaran:<br>$$N = \\frac{200\\pi}{2\\pi} = 100\\text{ putaran}$$",
      pitfalls: "Lupa membagi dengan faktor $2\\pi$ sehingga menjawab $200\\pi$ atau $200$."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "sedang",
    statement: "Dua roda bergigi $A$ dan $B$ saling bertautan (bersinggungan luar) tanpa selip. Roda $A$ memiliki $24\\text{ gigi}$ dan roda $B$ memiliki $72\\text{ gigi}$. Jika roda $A$ diputar dengan frekuensi $12\\text{ Hz}$ searah jarum jam, maka besar frekuensi putaran dan arah putar roda $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ Hz}$, berlawanan arah jarum jam",
      "$4\\text{ Hz}$, searah jarum jam",
      "$36\\text{ Hz}$, berlawanan arah jarum jam",
      "$36\\text{ Hz}$, searah jarum jam",
      "$6\\text{ Hz}$, berlawanan arah jarum jam"
    ],
    correctIndex: 0,
    solution: {
      concept: "Roda bergigi yang bersinggungan luar memiliki kelajuan linier gigi yang sama ($v_A = v_B$) dan arah putar yang saling berlawanan. Hubungan frekuensi dengan jumlah gigi ($Z$) adalah $f_A Z_A = f_B Z_B$.",
      steps: "1. Hitung frekuensi roda $B$:<br>$$f_B = f_A \\left( \\frac{Z_A}{Z_B} \\right) = 12\\text{ Hz} \\times \\left( \\frac{24}{72} \\right) = 12 \\times \\frac{1}{3} = 4\\text{ Hz}$$<br>2. Tentukan arah putar: Karena kedua roda bertautan luar, jika roda $A$ berputar searah jarum jam, maka roda $B$ berputar berlawanan arah jarum jam.",
      pitfalls: "Mengalikan terbalik sehingga mendapatkan $36\\text{ Hz}$ atau lupa bahwa persinggungan luar membalikkan arah putaran."
    }
  }
];
