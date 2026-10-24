/**
 * Batch Task: TASK_fis-flu-dinamis-kontinuitas_EASY
 * SubTopic: Debit & Persamaan Kontinuitas (fis-flu-dinamis-kontinuitas)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-kontinuitas-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "mudah",
    statement: "Sebuah selang air digunakan untuk mengisi bak mandi bervolume $V = 120\\text{ liter}$ hingga penuh dalam selang waktu $t = 2\\text{ menit}$. Besar debit aliran air dari selang tersebut dalam satuan standar internasional ($\\text{m}^3\\text{/s}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 \\times 10^{-4}\\text{ m}^3\\text{/s}$",
      "$5 \\times 10^{-4}\\text{ m}^3\\text{/s}$",
      "$1 \\times 10^{-3}\\text{ m}^3\\text{/s}$",
      "$2 \\times 10^{-3}\\text{ m}^3\\text{/s}$",
      "$6 \\times 10^{-2}\\text{ m}^3\\text{/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Debit aliran ($Q$) didefinisikan sebagai laju volume fluida yang mengalir melalui suatu penampang per satuan waktu:<br>$$Q = \\frac{V}{t}$$Satuan SI untuk volume adalah meter kubik ($1\\text{ liter} = 10^{-3}\\text{ m}^3$) dan waktu adalah sekon ($1\\text{ menit} = 60\\text{ s}$).",
      steps: "1. Konversikan besaran ke satuan SI:<br>• Volume: $V = 120\\text{ liter} = 120 \\times 10^{-3}\\text{ m}^3 = 0{,}12\\text{ m}^3$<br>• Waktu: $t = 2\\text{ menit} = 120\\text{ sekon}$<br>2. Hitung debit aliran:<br>$$Q = \\frac{0{,}12\\text{ m}^3}{120\\text{ s}} = 10^{-3}\\text{ m}^3\\text{/s}$$",
      pitfalls: "Lupa mengonversi menit ke sekon sehingga membagi $120$ liter langsung dengan 2 menit yang menghasilkan $60\\text{ liter/menit}$ tanpa penyesuaian ke $\\text{m}^3\\text{/s}$."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "mudah",
    statement: "Air mengalir melalui pipa berpenampang lingkaran dengan luas $A = 5\\text{ cm}^2$. Jika kelajuan rata-rata aliran air di dalam pipa tersebut adalah $v = 4\\text{ m/s}$, debit aliran air dalam satuan $\\text{liter/sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0\\text{ liter/s}$",
      "$2{,}0\\text{ liter/s}$",
      "$4{,}0\\text{ liter/s}$",
      "$10\\text{ liter/s}$",
      "$20\\text{ liter/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Debit aliran fluida juga dapat dirumuskan dari perkalian antara luas penampang saluran ($A$) dengan kelajuan linier aliran ($v$):<br>$$Q = A \\cdot v$$",
      steps: "1. Konversikan luas penampang ke meter persegi:<br>$$A = 5\\text{ cm}^2 = 5 \\times 10^{-4}\\text{ m}^2$$<br>2. Hitung debit dalam satuan $\\text{m}^3\\text{/s}$:<br>$$Q = A \\cdot v = (5 \\times 10^{-4}\\text{ m}^2) \\times 4\\text{ m/s} = 20 \\times 10^{-4}\\text{ m}^3\\text{/s} = 2 \\times 10^{-3}\\text{ m}^3\\text{/s}$$<br>3. Konversikan ke satuan liter/sekon ($1\\text{ m}^3 = 1000\\text{ liter}$):<br>$$Q = 2 \\times 10^{-3} \\times 1000\\text{ liter/s} = 2{,}0\\text{ liter/s}$$",
      pitfalls: "Kesalahan konversi $5\\text{ cm}^2$ menjadi $5 \\times 10^{-2}\\text{ m}^2$ (lupa menguadratkan faktor konversi centimeter ke meter)."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "mudah",
    statement: "Minyak mengalir secara kontinu melalui pipa mendatar yang luas penampangnya mengecil. Di penampang besar dengan luas $A_1 = 20\\text{ cm}^2$, minyak mengalir dengan kelajuan $v_1 = 3\\text{ m/s}$. Kelajuan aliran minyak pada bagian penampang pipa sempit yang luasnya $A_2 = 5\\text{ cm}^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}75\\text{ m/s}$",
      "$6{,}0\\text{ m/s}$",
      "$9{,}0\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan Kontinuitas untuk fluida inkompresibel menyatakan kekekalan debit aliran pada setiap titik sepanjang pipa alir:<br>$$Q_1 = Q_2 \\iff A_1 \\cdot v_1 = A_2 \\cdot v_2$$Sehingga kelajuan fluida berbanding terbalik dengan luas penampang:<br>$$v_2 = v_1 \\cdot \\frac{A_1}{A_2}$$",
      steps: "1. Masukkan nilai yang diketahui:<br>• $A_1 = 20\\text{ cm}^2$<br>• $v_1 = 3\\text{ m/s}$<br>• $A_2 = 5\\text{ cm}^2$<br>2. Hitung kelajuan $v_2$:<br>$$v_2 = 3\\text{ m/s} \\times \\frac{20\\text{ cm}^2}{5\\text{ cm}^2} = 3 \\times 4 = 12\\text{ m/s}$$",
      pitfalls: "Terkecoh membalik rasio penampang menjadi $3 \\times \\frac{5}{20} = 0{,}75\\text{ m/s}$ (opsi A). Ingat prinsip fisis: di bagian pipa yang lebih sempit, kelajuan aliran fluida selalu bertambah cepat."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "mudah",
    statement: "Air mengalir di dalam sebuah pipa horizontal berdiameter penampang $d_1 = 6\\text{ cm}$ dengan kelajuan $v_1 = 1{,}5\\text{ m/s}$. Pipa tersebut kemudian menyempit menjadi pipa berdiameter $d_2 = 2\\text{ cm}$. Kelajuan aliran air pada pipa yang menyempit tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4{,}5\\text{ m/s}$",
      "$9{,}0\\text{ m/s}$",
      "$13{,}5\\text{ m/s}$",
      "$18{,}0\\text{ m/s}$",
      "$27{,}0\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Karena luas penampang pipa lingkaran sebanding dengan kuadrat diameternya ($A \\propto d^2$), maka persamaan kontinuitas dapat dinyatakan dalam perbandingan diameter:<br>$$d_1^2 \\cdot v_1 = d_2^2 \\cdot v_2 \\iff v_2 = v_1 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      steps: "1. Hitung rasio diameter:<br>$$\\frac{d_1}{d_2} = \\frac{6\\text{ cm}}{2\\text{ cm}} = 3$$<br>2. Kuadratkan rasio diameter:<br>$$\\left(\\frac{d_1}{d_2}\\right)^2 = 3^2 = 9$$<br>3. Hitung kelajuan $v_2$:<br>$$v_2 = 1{,}5\\text{ m/s} \\times 9 = 13{,}5\\text{ m/s}$$",
      pitfalls: "Siswa sering lupa menguadratkan rasio diameter dan hanya mengalikan secara linier ($1{,}5 \\times 3 = 4{,}5\\text{ m/s}$, opsi A)."
    }
  },
  {
    id: "fis-flu-dinamis-kontinuitas-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-kontinuitas",
    category: "Debit & Persamaan Kontinuitas",
    difficulty: "mudah",
    statement: "Fluida dinamis dalam pembahasan fisika dasar ideal diasumsikan memenuhi empat karakteristik utama. Pasangan karakteristik berikut yang secara tepat mendeskripsikan sifat fluida ideal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Inkompresibel (tak termampatkan) dan non-viskos (tidak kental)",
      "Kompresibel (mudah termampatkan) dan memiliki viskositas tinggi",
      "Aliran turbulen tak beraturan dan mengalami pusaran (rotasional)",
      "Kelajuan di setiap titik selalu berubah-ubah terhadap waktu (tidak tunak)",
      "Massa jenisnya selalu berubah drastis sepanjang garis alir"
    ],
    correctIndex: 0,
    solution: {
      concept: "Empat sifat utama fluida ideal adalah:<br>1) Inkompresibel: massa jenis fluida konstan dan tidak berubah ketika ditekan.<br>2) Non-viskos: tidak memiliki gesekan internal atau kekentalan saat mengalir.<br>3) Aliran tunak (steady): kecepatan partikel pada titik tertentu selalu konstan terhadap waktu.<br>4) Tak berputar (irrotasional): partikel tidak memiliki momentum sudut terhadap porosnya.",
      steps: "1. Analisis opsi A: Inkompresibel dan non-viskos adalah dua karakteristik mutlak fluida ideal.<br>2. Opsi B, C, D, E merupakan karakteristik fluida nyata atau non-ideal.",
      pitfalls: "Jangan tertukar antara aliran tunak (steady) dan aliran laminer dengan aliran turbulen atau pusaran berolak."
    }
  }
];
