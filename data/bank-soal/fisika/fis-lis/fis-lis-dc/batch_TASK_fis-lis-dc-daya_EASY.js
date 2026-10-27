/**
 * Batch Task: TASK_fis-lis-dc-daya_EASY
 * SubTopic: Energi & Daya Listrik (fis-lis-dc-daya)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-dc-daya-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Hubungan Daya, Tegangan, Arus, dan Hambatan",
    difficulty: "mudah",
    statement: "Pernyataan rumus berikut yang tepat untuk menyatakan daya listrik ($P$) yang diserap oleh suatu komponen berhambatan $R$ yang dialiri arus listrik $I$ pada beda potensial $V$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$P = V I = I^2 R = \\frac{V^2}{R}$",
      "$P = \\frac{V}{I} = I R^2 = \\frac{R}{V^2}$",
      "$P = V I^2 = \\frac{I}{R} = V^2 R$",
      "$P = \\frac{I}{V} = \\frac{R}{I^2} = \\frac{V}{R^2}$",
      "$P = V^2 I = I R = \\frac{V}{R}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Daya listrik ($P$) didefinisikan sebagai laju transfer energi per satuan waktu ($P = \\frac{W}{t}$). Berdasarkan Hukum Ohm $V = I R$, rumus daya dapat dituliskan dalam tiga bentuk ekuivalen:<br>$$P = V I = I^2 R = \\frac{V^2}{R}$$",
      steps: "1. Dari definisi dasar kerja listrik: $W = V q = V I t$.<br>2. Bagi dengan waktu $t$ untuk mendapatkan daya: $P = \\frac{W}{t} = V I$.<br>3. Substitusikan $V = I R$ menghasilkan $P = (I R) I = I^2 R$.<br>4. Substitusikan $I = \\frac{V}{R}$ menghasilkan $P = V \\left(\\frac{V}{R}\\right) = \\frac{V^2}{R}$.<br>5. Jadi bentuk yang tepat adalah pilihan A.",
      pitfalls: "Sering tertukar antara perkalian dan pembagian, misalnya keliru mengingat $V^2 R$ alih-alih $\\frac{V^2}{R}$."
    }
  },
  {
    id: "fis-lis-dc-daya-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Perhitungan Energi Listrik dalam Satuan kWh",
    difficulty: "mudah",
    statement: "Sebuah setrika listrik berdaya $400\\text{ Watt}$ digunakan setiap hari selama $2{,}5\\text{ jam}$. Energi listrik yang dikonsumsi oleh setrika tersebut selama 30 hari pemakaian adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ kWh}$",
      "$20\\text{ kWh}$",
      "$30\\text{ kWh}$",
      "$40\\text{ kWh}$",
      "$60\\text{ kWh}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Energi listrik dalam satuan kilowatt-jam (kWh) dihitung dengan mengalikan daya listrik (dalam kilowatt, kW) dengan total waktu penggunaan (dalam jam, h):<br>$$W = P \\times t$$",
      steps: "1. Hitung energi listrik harian yang digunakan setrika:<br>$$W_{\\text{hari}} = 400\\text{ W} \\times 2{,}5\\text{ jam} = 1.000\\text{ Wh} = 1\\text{ kWh}$$<br>2. Hitung total energi listrik selama 30 hari pemakaian:<br>$$W_{\\text{total}} = 1\\text{ kWh/hari} \\times 30\\text{ hari} = 30\\text{ kWh}$$<br>3. Jadi energi listrik yang dikonsumsi adalah $30\\text{ kWh}$ (pilihan C).",
      pitfalls: "Lupa mengonversi watt-jam (Wh) ke kilowatt-jam (kWh) dengan membagi 1.000, atau lupa mengalikan dengan 30 hari."
    }
  },
  {
    id: "fis-lis-dc-daya-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Energi Kalor Joule pada Pemanas Listrik",
    difficulty: "mudah",
    statement: "Sebuah pemanas air listrik berhambatan $R = 20\\,\\Omega$ dialiri arus listrik konstan sebesar $2\\text{ Ampere}$ selama $5\\text{ menit}$. Besar energi kalor yang dihasilkan oleh pemanas air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$400\\text{ Joule}$",
      "$2.400\\text{ Joule}$",
      "$12.000\\text{ Joule}$",
      "$24.000\\text{ Joule}$",
      "$48.000\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum Joule, energi kalor listrik yang dilepaskan oleh suatu hambatan dirumuskan sebagai:<br>$$W = I^2 R t$$<br>dengan $t$ dinyatakan dalam satuan detik (SI).",
      steps: "1. Konversikan waktu dari menit ke detik:<br>$$t = 5\\text{ menit} = 5 \\times 60\\text{ s} = 300\\text{ detik}$$<br>2. Masukkan nilai $I = 2\\text{ A}$ dan $R = 20\\,\\Omega$ ke dalam rumus Hukum Joule:<br>$$W = (2\\text{ A})^2 \\times 20\\,\\Omega \\times 300\\text{ s} = 4 \\times 20 \\times 300 = 80 \\times 300 = 24.000\\text{ Joule}$$<br>3. Jadi energi kalor yang dihasilkan adalah $24.000\\text{ Joule}$ (pilihan D).",
      pitfalls: "Lupa mengonversi waktu 5 menit ke detik ($300\\text{ s}$) dan langsung mengalikan dengan 5 sehingga memperoleh $400\\text{ J}$."
    }
  },
  {
    id: "fis-lis-dc-daya-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Perbandingan Daya Lampu Seri dan Paralel",
    difficulty: "mudah",
    statement: "Dua buah lampu pijar identik masing-masing memiliki hambatan $R$. Jika kedua lampu tersebut dihubungkan ke sumber tegangan konstan $V$, perbandingan daya total yang diserap saat kedua lampu dirangkai secara seri ($P_s$) terhadap daya total saat dirangkai secara paralel ($P_p$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 4$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Daya total dari sumber tegangan konstan $V$ berbanding terbalik dengan hambatan ekuivalen rangkaian ($P = \\frac{V^2}{R_{\\text{eq}}}$).",
      steps: "1. Hambatan ekuivalen saat dirangkai seri:<br>$$R_s = R + R = 2R \\implies P_s = \\frac{V^2}{2R}$$<br>2. Hambatan ekuivalen saat dirangkai paralel:<br>$$R_p = \\frac{R}{2} \\implies P_p = \\frac{V^2}{R/2} = \\frac{2V^2}{R}$$<br>3. Bandingkan daya total kedua rangkaian:<br>$$\\frac{P_s}{P_p} = \\frac{\\frac{V^2}{2R}}{\\frac{2V^2}{R}} = \\frac{1}{4}$$<br>4. Jadi perbandingannya adalah $1 : 4$ (pilihan A).",
      pitfalls: "Siswa sering mengira rasio dayanya $1:2$ karena melibatkan dua lampu, melupakan bahwa pada tegangan tetap, susunan paralel menurunkan hambatan sekaligus melipatgandakan arus."
    }
  },
  {
    id: "fis-lis-dc-daya-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Kuat Arus Maksimum Berdasarkan Nilai Sekring",
    difficulty: "mudah",
    statement: "Sebuah rumah memasang sekring pengaman otomatis dengan kapasitas arus $6\\text{ Ampere}$ pada tegangan jala-jala $220\\text{ Volt}$. Jumlah lampu $20\\text{ Watt} / 220\\text{ Volt}$ maksimum yang dapat dinyalakan secara bersamaan tanpa menyebabkan sekring putus adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$33\\text{ lampu}$",
      "$44\\text{ lampu}$",
      "$55\\text{ lampu}$",
      "$66\\text{ lampu}$",
      "$72\\text{ lampu}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Daya total maksimum yang dapat ditanggung oleh instalasi rumah ditentukan oleh kapasitas arus pembatas (sekring) dan tegangannya: $P_{\\text{maks}} = V \\times I_{\\text{maks}}$. Jumlah peralatan maksimum adalah $N = \\frac{P_{\\text{maks}}}{P_{\\text{alat}}}$.",
      steps: "1. Hitung daya listrik maksimum yang diizinkan sekring:<br>$$P_{\\text{maks}} = V \\times I_{\\text{maks}} = 220\\text{ V} \\times 6\\text{ A} = 1.320\\text{ Watt}$$<br>2. Setiap lampu mengonsumsi daya $P_{\\text{lampu}} = 20\\text{ Watt}$.<br>3. Hitung jumlah lampu maksimum yang dapat dipasang paralel:<br>$$N = \\frac{P_{\\text{maks}}}{P_{\\text{lampu}}} = \\frac{1.320\\text{ W}}{20\\text{ W}} = 66\\text{ lampu}$$<br>4. Jadi jumlah lampu maksimum adalah $66\\text{ lampu}$ (pilihan D).",
      pitfalls: "Kesalahan membagi $220 / 6$ alih-alih mengalikan $V \\times I$ untuk memperoleh kapasitas daya total."
    }
  }
];
