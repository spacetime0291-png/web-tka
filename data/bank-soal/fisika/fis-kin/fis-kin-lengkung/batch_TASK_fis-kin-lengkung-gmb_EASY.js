module.exports = [
  {
    id: "fis-kin-lengkung-gmb-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "mudah",
    statement: "Sebuah roda sepeda berputar beraturan menempuh 120 putaran dalam selang waktu $1\\text{ menit}$ ($60\\text{ sekon}$). Nilai frekuensi dan periode putaran roda tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ Hz}$ dan $0{,}5\\text{ sekon}$",
      "$0{,}5\\text{ Hz}$ dan $2\\text{ sekon}$",
      "$120\\text{ Hz}$ dan $60\\text{ sekon}$",
      "$2\\text{ Hz}$ dan $2\\text{ sekon}$",
      "$4\\text{ Hz}$ dan $0{,}25\\text{ sekon}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Frekuensi ($f$) menyatakan banyaknya putaran per satuan waktu, sedangkan periode ($T$) menyatakan waktu yang dibutuhkan untuk satu putaran penuh:<br>$$f = \\frac{n}{t},\\quad T = \\frac{t}{n} = \\frac{1}{f}$$",
      steps: "1. Hitung frekuensi ($n = 120$ putaran, $t = 60\\text{ s}$):<br>$$f = \\frac{120}{60} = 2\\text{ Hz}$$<br>2. Hitung periode:<br>$$T = \\frac{1}{f} = \\frac{1}{2} = 0{,}5\\text{ sekon}$$",
      pitfalls: "Tertukar antara frekuensi dan periode sehingga menjawab $0{,}5\\text{ Hz}$ dan $2\\text{ sekon}$."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "mudah",
    statement: "Sebuah piringan hitam berputar beraturan dengan kecepatan sudut tetap $\\omega = 10\\pi\\text{ rad/s}$. Sebuah partikel debu berada di tepi piringan pada jarak $R = 20\\text{ cm}$ dari poros pusat putaran. Kelajuan linier ($v$) partikel debu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\pi\\text{ m/s}$",
      "$200\\pi\\text{ m/s}$",
      "$0{,}5\\pi\\text{ m/s}$",
      "$4\\pi\\text{ m/s}$",
      "$10\\pi\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan antara kelajuan linier ($v$), kecepatan sudut ($\\omega$), dan jari-jari lintasan ($r$) pada gerak melingkar adalah:<br>$$v = \\omega \\cdot r$$",
      steps: "1. Konversikan jari-jari ke satuan meter:<br>$$r = 20\\text{ cm} = 0{,}2\\text{ meter}$$<br>2. Hitung kelajuan linier:<br>$$v = \\omega \\cdot r = (10\\pi\\text{ rad/s}) \\times 0{,}2\\text{ m} = 2\\pi\\text{ m/s}$$",
      pitfalls: "Lupa mengonversi satuan centimeter ke meter sehingga memperoleh hasil keliru $200\\pi\\text{ m/s}$."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "mudah",
    statement: "Jarum detik pada sebuah jam dinding analog berputar secara beraturan menyelesaikan satu putaran penuh ($2\\pi\\text{ radian}$) dalam waktu $60\\text{ sekon}$. Besar kecepatan sudut ($\\omega$) dari jarum detik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{\\pi}{30}\\text{ rad/s}$",
      "$\\frac{\\pi}{60}\\text{ rad/s}$",
      "$\\frac{\\pi}{15}\\text{ rad/s}$",
      "$30\\pi\\text{ rad/s}$",
      "$60\\pi\\text{ rad/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kecepatan sudut rata-rata untuk satu putaran penuh dengan periode $T$ adalah:<br>$$\\omega = \\frac{2\\pi}{T}$$",
      steps: "1. Periode jarum detik: $T = 60\\text{ sekon}$.<br>2. Hitung kecepatan sudut:<br>$$\\omega = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}$$",
      pitfalls: "Lupa bahwa satu putaran penuh adalah $2\\pi$ radian (bukan $1\\pi$ radian)."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "mudah",
    statement: "Pernyataan yang paling tepat mengenai karakteristik fisis sebuah benda yang bergerak melingkar beraturan (GMB) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kelajuan linier dan kecepatan sudut konstan, namun vektor kecepatan linier selalu berubah arah",
      "Vektor kecepatan linier selalu konstan baik nilai maupun arahnya",
      "Percepatan total yang dialami benda bernilai sama dengan nol",
      "Gaya resultan yang bekerja pada benda bernilai nol",
      "Arah percepatan selalu berimpit sejajar dengan arah garis singgung lintasan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada GMB, kelajuan (skalar) konstan, namun arah vektor kecepatan linier (garis singgung) terus berbelok mengikuti lengkungan lingkaran setiap saat. Akibat perubahan arah vektor kecepatan ini, timbul percepatan ke arah pusat (percepatan sentripetal), sehingga percepatannya tidak nol.",
      steps: "Analisis pilihan:<br>• Opsi A: Tepat, kelajuan konstan tetapi vektor arah gerak selalu berubah.<br>• Opsi B: Salah, arahnya terus berputar.<br>• Opsi C & D: Salah, terdapat percepatan sentripetal dan gaya sentripetal.<br>• Opsi E: Percepatan sentripetal tegak lurus garis singgung (mengarah ke pusat).",
      pitfalls: "Menyamakan kata 'kelajuan linier konstan' dengan 'vektor kecepatan konstan'."
    }
  },
  {
    id: "fis-kin-lengkung-gmb-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subChapterId: "fis-kin-lengkung",
    subTopicId: "fis-kin-lengkung-gmb",
    category: "Gerak Melingkar Beraturan (GMB)",
    difficulty: "mudah",
    statement: "Sebuah baling-baling helikopter berputar dengan laju rotasi $300\\text{ rpm}$ (rotasi per menit). Kecepatan sudut putaran baling-baling tersebut jika dinyatakan dalam satuan standar internasional ($\\text{rad/s}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\pi\\text{ rad/s}$",
      "$5\\pi\\text{ rad/s}$",
      "$20\\pi\\text{ rad/s}$",
      "$300\\pi\\text{ rad/s}$",
      "$600\\pi\\text{ rad/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Konversi satuan rotasi per menit (rpm) ke radian per sekon (rad/s): satu rotasi sama dengan $2\\pi$ radian dan satu menit sama dengan $60$ sekon:<br>$$1\\text{ rpm} = \\frac{2\\pi}{60}\\text{ rad/s} = \\frac{\\pi}{30}\\text{ rad/s}$$",
      steps: "1. Konversikan nilai laju rotasi $300\\text{ rpm}$:<br>$$\\omega = 300 \\times \\frac{\\pi}{30}\\text{ rad/s} = 10\\pi\\text{ rad/s}$$",
      pitfalls: "Lupa mengalikan dengan $2\\pi$ dan hanya membagi $300 / 60 = 5\\text{ rad/s}$."
    }
  }
];
