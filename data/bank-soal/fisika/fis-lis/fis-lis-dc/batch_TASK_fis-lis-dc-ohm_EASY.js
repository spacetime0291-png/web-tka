/**
 * Batch Task: TASK_fis-lis-dc-ohm_EASY
 * SubTopic: Hukum Ohm & Hambatan Jenis (fis-lis-dc-ohm)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-dc-ohm-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Karakteristik Hukum Ohm pada Konduktor Ohmik",
    difficulty: "mudah",
    statement: "Pada suatu konduktor yang memenuhi Hukum Ohm (konduktor ohmik) pada suhu tetap, grafik hubungan antara beda potensial ($V$) dan kuat arus listrik ($I$) yang mengalir berbentuk ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Garis lurus linier yang melalui titik asal (0,0) dengan gradien kemiringan menyatakan nilai hambatan listrik",
      "Kurva eksponensial naik yang semakin curam seiring bertambahnya arus",
      "Garis horizontal mendatar yang menunjukkan tegangan selalu bernilai konstan",
      "Kurva parabola terbuka ke atas",
      "Kurva hiperbola yang menunjukkan hubungan berbanding terbalik"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum Ohm menyatakan bahwa kuat arus ($I$) yang mengalir melalui suatu konduktor sebanding dengan beda potensial ($V$) pada ujung-ujungnya selama suhu dipertahankan konstan:<br>$$V = I R$$<br>di mana $R$ adalah tetapan resistansi (hambatan listrik).",
      steps: "1. Bentuk persamaan $V = R \\cdot I$ analog dengan persamaan garis lurus $y = m x$ dengan gradien $m = R$.<br>2. Pada konduktor ohmik ideal, hambatan $R$ tidak bergantung pada arus maupun tegangan, sehingga grafik $V$ terhadap $I$ berbentuk garis lurus linier yang melintasi titik $(0,0)$.<br>3. Gradien (kemiringan) grafik $\\frac{\\Delta V}{\\Delta I}$ menyatakan nilai resistansi konduktor $R$.<br>4. Jadi pilihan A adalah pernyataan yang benar.",
      pitfalls: "Sering mengira grafik hubungan $V$ dan $I$ berbentuk melengkung eksponensial (seperti karakteristik komponen non-ohmik semikonduktor/dioda), padahal soal secara eksplisit menyebutkan konduktor ohmik."
    }
  },
  {
    id: "fis-lis-dc-ohm-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Perhitungan Hambatan Kawat Penghantar",
    difficulty: "mudah",
    statement: "Seutas kawat tembaga memiliki panjang $L = 50\\text{ meter}$, luas penampang $A = 1\\text{ mm}^2$, dan hambatan jenis $\\rho = 1{,}7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Besar hambatan listrik kawat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}085\\,\\Omega$",
      "$0{,}85\\,\\Omega$",
      "$8{,}5\\,\\Omega$",
      "$17\\,\\Omega$",
      "$85\\,\\Omega$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hambatan listrik suatu kawat silinder homogen dirumuskan berdasarkan dimensinya:<br>$$R = \\rho \\frac{L}{A}$$<br>dengan $\\rho$ adalah hambatan jenis bahan, $L$ adalah panjang kawat, dan $A$ adalah luas penampang kawat.",
      steps: "1. Konversikan luas penampang ke meter persegi:<br>$$A = 1\\text{ mm}^2 = 1 \\times (10^{-3}\\text{ m})^2 = 1 \\times 10^{-6}\\text{ m}^2$$<br>2. Data lainnya: $L = 50\\text{ m}$ dan $\\rho = 1{,}7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$.<br>3. Masukkan ke dalam rumus hambatan kawat:<br>$$R = (1{,}7 \\times 10^{-8}) \\times \\frac{50}{1 \\times 10^{-6}} = 1{,}7 \\times 10^{-2} \\times 50 = 0{,}85\\,\\Omega$$<br>4. Jadi hambatan kawat tembaga tersebut adalah $0{,}85\\,\\Omega$ (pilihan B).",
      pitfalls: "Lupa mengonversi satuan luas $1\\text{ mm}^2$ ke $\\text{m}^2$ ($10^{-6}\\text{ m}^2$), atau salah mengalikan pangkat sepuluh."
    }
  },
  {
    id: "fis-lis-dc-ohm-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Kuat Arus Listrik dan Aliran Elektron",
    difficulty: "mudah",
    statement: "Dalam suatu kawat penghantar mengalir arus listrik konstan sebesar $3{,}2\\text{ Ampere}$ selama $10\\text{ detik}$. Jika muatan satu elektron adalah $e = 1{,}6 \\times 10^{-19}\\text{ Coulomb}$, jumlah elektron yang melintasi penampang kawat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 \\times 10^{19}\\text{ elektron}$",
      "$2 \\times 10^{20}\\text{ elektron}$",
      "$5 \\times 10^{19}\\text{ elektron}$",
      "$5 \\times 10^{20}\\text{ elektron}$",
      "$3{,}2 \\times 10^{20}\\text{ elektron}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kuat arus listrik didefinisikan sebagai laju aliran muatan neto: $I = \\frac{Q}{t} \\implies Q = I t$. Jumlah elektron pembawa muatan dihitung melalui kuantisasi muatan $Q = n e \\implies n = \\frac{Q}{e}$.",
      steps: "1. Hitung muatan listrik total yang mengalir selama $t = 10\\text{ s}$:<br>$$Q = I \\times t = 3{,}2\\text{ A} \\times 10\\text{ s} = 32\\text{ Coulomb}$$<br>2. Hitung jumlah partikel elektron ($n$):<br>$$n = \\frac{Q}{e} = \\frac{32\\text{ C}}{1{,}6 \\times 10^{-19}\\text{ C}} = 20 \\times 10^{19} = 2 \\times 10^{20}\\text{ elektron}$$<br>3. Jadi jumlah elektron yang melintas adalah $2 \\times 10^{20}\\text{ elektron}$ (pilihan B).",
      pitfalls: "Galat pembagian eksponen: $\\frac{32}{1{,}6 \\times 10^{-19}} = 20 \\times 10^{19} = 2 \\times 10^{20}$, sering salah menuliskan eksponen menjadi $2 \\times 10^{19}$."
    }
  },
  {
    id: "fis-lis-dc-ohm-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Perubahan Hambatan Kawat Akibat Penarikan",
    difficulty: "mudah",
    statement: "Seutas kawat logam homogen berhambatan $R$ ditarik secara teratur sehingga panjangnya menjadi dua kali lipat panjang semula ($L' = 2L$). Jika massa dan massa jenis kawat tetap konstan selama penarikan, hambatan kawat sekarang menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}R$",
      "$\\frac{1}{2}R$",
      "$R$",
      "$2R$",
      "$4R$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Saat kawat ditarik, volumenya kekal ($V = A L = \\text{konstan}$). Jika panjang bertambah $n$ kali lipat ($L' = n L$), luas penampang mengecil menjadi $\\frac{1}{n}$ kali semula ($A' = \\frac{A}{n}$). Maka hambatannya meningkat menjadi $n^2$ kali lipat.",
      steps: "1. Kekekalan volume kawat:<br>$$V = A \\cdot L = A' \\cdot L' \\implies A' (2L) = A L \\implies A' = \\frac{1}{2}A$$<br>2. Hitung hambatan kawat baru ($R'$):<br>$$R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{\\frac{1}{2}A} = 4 \\left(\\rho \\frac{L}{A}\\right) = 4R$$<br>3. Jadi hambatan kawat menjadi $4R$ (pilihan E).",
      pitfalls: "Siswa sering melupakan bahwa penarikan kawat menyebabkan penampangnya mengecil ($A' = A/2$) sehingga hanya memperhitungkan faktor panjang dan keliru menjawab $2R$."
    }
  },
  {
    id: "fis-lis-dc-ohm-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Pengaruh Kenaikan Suhu terhadap Hambatan Logam",
    difficulty: "mudah",
    statement: "Sebuah filamen wolfram memiliki nilai hambatan $R_0 = 40\\,\\Omega$ pada suhu $20^\\circ\\text{C}$. Koefisien suhu hambatan wolfram adalah $\\alpha = 4{,}5 \\times 10^{-3}\\text{ /}^\\circ\\text{C}$. Besar hambatan filamen tersebut ketika dipanaskan hingga suhunya mencapai $120^\\circ\\text{C}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$44{,}5\\,\\Omega$",
      "$50\\,\\Omega$",
      "$58\\,\\Omega$",
      "$72\\,\\Omega$",
      "$85\\,\\Omega$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hambatan listrik kawat logam meningkat seiring kenaikan suhu menurut hubungan pendekatan linier:<br>$$R = R_0 (1 + \\alpha \\Delta T)$$<br>dengan $\\Delta T = T - T_0$ adalah kenaikan suhu.",
      steps: "1. Hitung kenaikan suhu:<br>$$\\Delta T = 120^\\circ\\text{C} - 20^\\circ\\text{C} = 100^\\circ\\text{C}$$<br>2. Hitung faktor perubahan hambatan:<br>$$\\alpha \\Delta T = (4{,}5 \\times 10^{-3}\\text{ /}^\\circ\\text{C}) \\times 100^\\circ\\text{C} = 0{,}45$$<br>3. Hitung hambatan akhir:<br>$$R = R_0 (1 + \\alpha \\Delta T) = 40\\,\\Omega \\times (1 + 0{,}45) = 40 \\times 1{,}45 = 58\\,\\Omega$$<br>4. Jadi nilai hambatannya menjadi $58\\,\\Omega$ (pilihan C).",
      pitfalls: "Memasukkan suhu akhir $T = 120$ langsung ke dalam $\\Delta T$ tanpa mengurangkannya terlebih dahulu dengan suhu awal $T_0 = 20^\\circ\\text{C}$."
    }
  }
];
