/**
 * Batch Task: TASK_fis-gel-bunyi-organa_EASY
 * SubTopic: Pipa Organa (fis-gel-bunyi-organa)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-organa-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "mudah",
    statement: "Pada pipa organa terbuka, kedua ujung pipa berhubungan langsung dengan udara bebas sehingga partikel udara di kedua ujung dapat bergetar bebas. Pola gelombang stasioner simpangan dan perbandingan frekuensi nada harmonik yang dihasilkan oleh pipa organa terbuka adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kedua ujungnya selalu merupakan titik perut, dengan perbandingan frekuensi harmonik $1 : 2 : 3 : 4 : \\dots$",
      "Kedua ujungnya selalu merupakan titik simpul, dengan perbandingan frekuensi harmonik $1 : 3 : 5 : 7 : \\dots$",
      "Salah satu ujung merupakan simpul dan ujung lain perut, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya selalu merupakan titik perut, dengan perbandingan frekuensi harmonik $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya selalu merupakan titik simpul, dengan perbandingan frekuensi harmonik $1 : 2 : 3 : 4 : \\dots$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pipa organa terbuka memiliki kedua ujung yang terbuka ke atmosfer:<br>1) Di kedua ujung terbuka, partikel fluida bebas berosilasi dengan amplitudo maksimum $\\implies$ kedua ujung berupa perut simpangan.<br>2) Panjang kolom pada nada dasar: $L = \\frac{1}{2}\\lambda_0 \\implies f_0 = \\frac{v}{2L}$.<br>3) Frekuensi harmonik ke-$n$ memenuhi seluruh kelipatan bulat bulat positif:<br>$$f_n = (n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : 4 : \\dots$$",
      steps: "1. Tinjau kondisi batas ujung pipa: Terbuka $\\implies$ perut simpangan di kedua ujung.<br>2. Tinjau deret harmonik: Kelipatan bulat lengkap $1 : 2 : 3 : 4 : \\dots$.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Siswa sering tertukar dengan pipa organa tertutup yang hanya menghasilkan kelipatan ganjil ($1 : 3 : 5 : \\dots$, opsi D)."
    }
  },
  {
    id: "fis-gel-bunyi-organa-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "mudah",
    statement: "Sebuah pipa organa tertutup memiliki satu ujung yang tertutup rapat dan satu ujung terbuka. Pola gelombang stasioner simpangan pada nada dasar dan perbandingan frekuensi nada-nada harmonik yang dihasilkan oleh pipa organa tertutup adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Ujung tertutup simpul dan ujung terbuka perut, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Ujung tertutup perut dan ujung terbuka simpul, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$",
      "Kedua ujungnya merupakan simpul simpangan, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya merupakan perut simpangan, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$",
      "Ujung tertutup simpul dan ujung terbuka perut, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pipa organa tertutup:<br>1) Ujung tertutup membatasi gerak partikel $\\implies$ simpul simpangan.<br>2) Ujung terbuka partikel bebas berosilasi $\\implies$ perut simpangan.<br>3) Nada dasar: $L = \\frac{1}{4}\\lambda_0 \\implies f_0 = \\frac{v}{4L}$.<br>4) Harmonik hanya terdiri dari kelipatan bilangan bulat ganjil:<br>$$f_n = (2n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 3 : 5 : 7 : \\dots$$",
      steps: "1. Ujung tertutup adalah simpul, ujung terbuka adalah perut.<br>2. Frekuensi harmonik berbanding sebagai kelipatan ganjil: $1 : 3 : 5 : 7 : \\dots$.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Siswa sering mengira pipa organa tertutup dapat menghasilkan nada harmonik genap seperti $2 f_0$ atau $4 f_0$, padahal harmonik genap tidak dapat terbentuk karena terbentur oleh kondisi batas simpul pada ujung tertutup."
    }
  },
  {
    id: "fis-gel-bunyi-organa-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "mudah",
    statement: "Sebuah pipa organa terbuka memiliki panjang kolom udara $L = 50\\text{ cm}$. Jika cepat rambat bunyi di udara adalah $v = 340\\text{ m/s}$, besar frekuensi nada atas pertama ($f_1$) yang dihasilkan pipa organa terbuka tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$170\\text{ Hz}$",
      "$340\\text{ Hz}$",
      "$510\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$1.020\\text{ Hz}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada pipa organa terbuka, frekuensi nada atas ke-$n$ dirumuskan:<br>$$f_n = (n + 1) \\cdot \\frac{v}{2L}$$Untuk nada atas pertama ($n = 1$):<br>$$f_1 = 2 \\cdot \\frac{v}{2L} = \\frac{v}{L}$$",
      steps: "1. Konversikan panjang pipa ke meter:<br>$$L = 50\\text{ cm} = 0{,}50\\text{ m}$$<br>2. Hitung frekuensi nada atas pertama ($f_1$):<br>$$f_1 = \\frac{340\\text{ m/s}}{0{,}50\\text{ m}} = 680\\text{ Hz}$$",
      pitfalls: "Terkecoh menghitung nada dasar ($f_0 = \\frac{v}{2L} = 340\\text{ Hz}$, opsi B) karena tidak membaca secara teliti bahwa yang ditanyakan adalah nada atas pertama."
    }
  },
  {
    id: "fis-gel-bunyi-organa-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "mudah",
    statement: "Sebuah pipa organa tertutup memiliki panjang $L = 30\\text{ cm}$. Jika cepat rambat gelombang bunyi di udara pada saat itu adalah $v = 360\\text{ m/s}$, besar frekuensi nada atas pertama ($f_1$) yang dihasilkan oleh pipa organa tertutup tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$900\\text{ Hz}$",
      "$1.200\\text{ Hz}$",
      "$1.500\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada pipa organa tertutup, frekuensi nada atas ke-$n$ dirumuskan:<br>$$f_n = (2n + 1) \\cdot \\frac{v}{4L}$$Untuk nada atas pertama ($n = 1$):<br>$$f_1 = 3 \\cdot \\frac{v}{4L}$$",
      steps: "1. Konversikan panjang pipa ke meter:<br>$$L = 30\\text{ cm} = 0{,}30\\text{ m}$$<br>2. Hitung frekuensi nada dasar ($f_0$):<br>$$f_0 = \\frac{v}{4L} = \\frac{360\\text{ m/s}}{4 \\times 0{,}30\\text{ m}} = \\frac{360}{1{,}20} = 300\\text{ Hz}$$<br>3. Hitung frekuensi nada atas pertama ($f_1 = 3 f_0$):<br>$$f_1 = 3 \\times 300\\text{ Hz} = 900\\text{ Hz}$$",
      pitfalls: "Siswa sering mengalikan nada dasar dengan 2 ($2 \\times 300 = 600\\text{ Hz}$, opsi B) karena lupa bahwa pada pipa organa tertutup tidak ada harmonik genap, sehingga nada atas pertama adalah kelipatan 3 dari nada dasar."
    }
  },
  {
    id: "fis-gel-bunyi-organa-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "mudah",
    statement: "Sebuah pipa organa terbuka (panjang $L_{\\text{terbuka}}$) dan sebuah pipa organa tertutup (panjang $L_{\\text{tertutup}}$) menghasilkan frekuensi nada dasar yang persis sama di udara yang sama. Perbandingan panjang pipa organa terbuka terhadap pipa organa tertutup ($L_{\\text{terbuka}} : L_{\\text{tertutup}}$) adalah ....",
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
    correctIndex: 3,
    solution: {
      concept: "Frekuensi nada dasar masing-masing pipa organa adalah:<br>• Pipa terbuka: $f_{0,\\text{terbuka}} = \\frac{v}{2 L_{\\text{terbuka}}}$<br>• Pipa tertutup: $f_{0,\\text{tertutup}} = \\frac{v}{4 L_{\\text{tertutup}}}$<br>Syarat frekuensi sama: $f_{0,\\text{terbuka}} = f_{0,\\text{tertutup}}$.",
      steps: "1. Samakan kedua persamaan frekuensi nada dasar:<br>$$\\frac{v}{2 L_{\\text{terbuka}}} = \\frac{v}{4 L_{\\text{tertutup}}}$$<br>2. Sederhanakan kedua ruas:<br>$$2 L_{\\text{terbuka}} = 4 L_{\\text{tertutup}} \\implies L_{\\text{terbuka}} = 2 L_{\\text{tertutup}}$$<br>3. Rasio perbandingannya adalah $L_{\\text{terbuka}} : L_{\\text{tertutup}} = 2 : 1$.",
      pitfalls: "Terkecoh membalik perbandingan menjadi $1 : 2$ (opsi B). Pipa organa terbuka harus dua kali lebih panjang daripada pipa tertutup agar nada dasarnya berfrekuensi sama."
    }
  }
];
