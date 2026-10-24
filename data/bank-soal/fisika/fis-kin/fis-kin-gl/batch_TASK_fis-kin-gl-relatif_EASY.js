module.exports = [
  {
    id: "fis-kin-gl-relatif-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "mudah",
    statement: "Dua buah mobil $A$ dan $B$ bergerak pada jalan tol lurus searah ke arah timur. Mobil $A$ bergerak dengan kelajuan konstan $80\\text{ km/jam}$ dan mobil $B$ di belakangnya bergerak dengan kelajuan konstan $60\\text{ km/jam}$. Kecepatan relatif mobil $A$ menurut pengamat di dalam mobil $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ km/jam}$ ke arah timur",
      "$20\\text{ km/jam}$ ke arah barat",
      "$140\\text{ km/jam}$ ke arah timur",
      "$140\\text{ km/jam}$ ke arah barat",
      "$0\\text{ km/jam}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Transformasi Galileo satu dimensi menyatakan bahwa kecepatan relatif benda $A$ terhadap pengamat kerangka acuan $B$ adalah:<br>$$v_{A/B} = v_A - v_B$$",
      steps: "1. Tetapkan arah timur sebagai arah positif (+):<br>$$v_A = +80\\text{ km/jam}$$<br>$$v_B = +60\\text{ km/jam}$$<br>2. Hitung kecepatan relatif mobil $A$ terhadap mobil $B$:<br>$$v_{A/B} = v_A - v_B = 80 - 60 = +20\\text{ km/jam}$$<br>Tanda positif menandakan arah gerak relatif adalah ke arah timur.",
      pitfalls: "Menjumlahkan kecepatan ($80 + 60 = 140\\text{ km/jam}$) adalah kesalahan umum yang terjadi akibat tidak memperhatikan bahwa kedua mobil bergerak searah."
    }
  },
  {
    id: "fis-kin-gl-relatif-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "mudah",
    statement: "Kereta api $P$ melaju lurus ke arah utara dengan kelajuan $70\\text{ km/jam}$, sementara kereta api $Q$ melaju pada rel paralel ke arah selatan dengan kelajuan $50\\text{ km/jam}$. Besar dan arah kecepatan relatif kereta $P$ diamati oleh penumpang di dalam kereta $Q$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$120\\text{ km/jam}$ ke utara",
      "$120\\text{ km/jam}$ ke selatan",
      "$20\\text{ km/jam}$ ke utara",
      "$20\\text{ km/jam}$ ke selatan",
      "$60\\text{ km/jam}$ ke utara"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketika dua benda bergerak saling berlawanan arah, pengamat pada salah satu benda akan melihat benda lainnya mendekat/menjauh dengan kelajuan gabungan:<br>$$v_{P/Q} = v_P - v_Q$$",
      steps: "1. Tetapkan arah utara sebagai arah positif (+):<br>$$v_P = +70\\text{ km/jam}$$<br>$$v_Q = -50\\text{ km/jam}$$<br>2. Hitung kecepatan relatif kereta $P$ terhadap pengamat di $Q$:<br>$$v_{P/Q} = v_P - v_Q = 70 - (-50) = 70 + 50 = +120\\text{ km/jam}$$<br>Tanda positif menunjukkan arah relatif ke utara.",
      pitfalls: "Mengurangkan nilai mutlak kecepatan ($70 - 50 = 20\\text{ km/jam}$) tanpa memperhitungkan bahwa kedua benda bergerak berlawanan arah."
    }
  },
  {
    id: "fis-kin-gl-relatif-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "mudah",
    statement: "Sebuah kereta cepat melaju konstan dengan kecepatan $20\\text{ m/s}$ ke arah barat. Seorang kondektur berjalan di lorong gerbong kereta ke arah barat dengan kecepatan $1{,}5\\text{ m/s}$ relatif terhadap gerbong. Kecepatan kondektur tersebut relatif terhadap pengamat yang berdiri diam di stasiun adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$21{,}5\\text{ m/s}$ ke arah barat",
      "$18{,}5\\text{ m/s}$ ke arah barat",
      "$21{,}5\\text{ m/s}$ ke arah timur",
      "$18{,}5\\text{ m/s}$ ke arah timur",
      "$20\\text{ m/s}$ ke arah barat"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan suatu objek terhadap kerangka tanah/stasiun ($v_{O/T}$) merupakan jumlahan vektor kecepatan objek relatif terhadap kereta ($v_{O/K}$) dengan kecepatan kereta relatif terhadap tanah ($v_{K/T}$):<br>$$v_{O/T} = v_{O/K} + v_{K/T}$$",
      steps: "1. Tetapkan arah barat sebagai arah positif (+):<br>$$v_{K/T} = +20\\text{ m/s}$$<br>$$v_{O/K} = +1{,}5\\text{ m/s}$$<br>2. Hitung kecepatan relatif terhadap tanah:<br>$$v_{O/T} = 20\\text{ m/s} + 1{,}5\\text{ m/s} = +21{,}5\\text{ m/s}\\text{ (ke arah barat)}$$",
      pitfalls: "Jika kondektur berjalan berlawanan arah dengan laju kereta, barulah kecepatannya dikurangkan ($20 - 1{,}5 = 18{,}5\\text{ m/s}$)."
    }
  },
  {
    id: "fis-kin-gl-relatif-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "mudah",
    statement: "Sebuah perahu motor memiliki laju $8\\text{ m/s}$ di air tenang. Perahu tersebut berlayar searah arus sungai yang memiliki kelajuan aliran $2\\text{ m/s}$. Kelajuan perahu tersebut terhadap pengamat diam di bantaran tepi sungai adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$\\sqrt{68}\\text{ m/s}$",
      "$4\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gerak searah arus sungai (hilir): kecepatan perahu terhadap tanah bertambah besar karena didorong oleh aliran arus air sungai:<br>$$v_{\\text{tanah}} = v_{\\text{perahu}} + v_{\\text{arus}}$$",
      steps: "1. Substitusikan parameter laju:<br>$$v_{\\text{perahu}} = 8\\text{ m/s}$$<br>$$v_{\\text{arus}} = 2\\text{ m/s}$$<br>2. Kelajuan total relatif terhadap tepi sungai:<br>$$v = 8 + 2 = 10\\text{ m/s}$$",
      pitfalls: "Nilai $6\\text{ m/s}$ terjadi jika perahu melawan arus sungai (mudik/hulu)."
    }
  },
  {
    id: "fis-kin-gl-relatif-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-gl",
    subTopicId: "fis-kin-gl-relatif",
    category: "Kecepatan Relatif",
    difficulty: "mudah",
    statement: "Dua pelari, Andi dan Budi, berlari pada lintasan lurus ke arah yang sama. Andi berada di depan dengan kecepatan konstan $4\\text{ m/s}$, sedangkan Budi berada di belakang Andi dengan kecepatan konstan $6\\text{ m/s}$. Jika jarak awal antara keduanya adalah $50\\text{ meter}$, waktu yang dibutuhkan Budi untuk tepat menyusul posisi Andi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ sekon}$",
      "$12{,}5\\text{ sekon}$",
      "$5\\text{ sekon}$",
      "$10\\text{ sekon}$",
      "$50\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dalam kerangka acuan Andi (Andi dianggap diam), Budi mendekati Andi dengan kecepatan relatif:<br>$$v_{\\text{rel}} = v_B - v_A$$<br>Waktu untuk menyusul adalah jarak pemisah dibagi kecepatan relatif:<br>$$t = \\frac{d}{v_{\\text{rel}}}$$",
      steps: "1. Hitung kecepatan relatif Budi mendekati Andi:<br>$$v_{\\text{rel}} = 6\\text{ m/s} - 4\\text{ m/s} = 2\\text{ m/s}$$<br>2. Waktu menyusul:<br>$$t = \\frac{d}{v_{\\text{rel}}} = \\frac{50\\text{ m}}{2\\text{ m/s}} = 25\\text{ sekon}$$",
      pitfalls: "Membagi jarak awal dengan kelajuan Budi saja: $\\frac{50}{6} = 8{,}33\\text{ s}$, mengabaikan fakta bahwa Andi juga terus bergerak maju."
    }
  }
];
