/**
 * Batch Task: TASK_mat-geo-lingkaran-luas_EASY
 * SubTopic: Luas Juring dan Tembereng Lingkaran (mat-geo-lingkaran-luas)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-luas-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Juring Sudut Siku-Siku",
    difficulty: "mudah",
    statement: "Sebuah lingkaran memiliki panjang jari-jari $r = 14\\text{ cm}$. Jika sudut pusat suatu juring adalah $90^\\circ$, maka luas juring lingkaran tersebut adalah .... (gunakan $\\pi = \\frac{22}{7}$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$154\\text{ cm}^2$",
      "$308\\text{ cm}^2$",
      "$77\\text{ cm}^2$",
      "$616\\text{ cm}^2$",
      "$44\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas juring lingkaran dengan sudut pusat $\\alpha$ dan jari-jari $r$ dirumuskan sebagai perbandingan sudut pusat terhadap satu putaran penuh ($360^\\circ$) dikalikan dengan luas lingkaran utuh: $L_{\\text{juring}} = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$.",
      steps: "1. Hitung pecahan sudut juring terhadap lingkaran penuh:\n$$\\frac{\\alpha}{360^\\circ} = \\frac{90^\\circ}{360^\\circ} = \\frac{1}{4}$$\n2. Hitung luas lingkaran utuh:\n$$L = \\pi r^2 = \\frac{22}{7} \\times 14 \\times 14 = 22 \\times 2 \\times 14 = 616\\text{ cm}^2$$\n3. Hitung luas juring:\n$$L_{\\text{juring}} = \\frac{1}{4} \\times 616 = 154\\text{ cm}^2$$\n4. Jadi, luas juring lingkaran tersebut adalah $154\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Lupa membagi dengan 4 sehingga memilih luas lingkaran utuh ($616\\text{ cm}^2$)."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Juring Sudut 60 Derajat",
    difficulty: "mudah",
    statement: "Suatu juring lingkaran memiliki sudut pusat sebesar $60^\\circ$ dan panjang jari-jari $6\\text{ cm}$. Luas juring tersebut dinyatakan dalam konstanta $\\pi$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\pi\\text{ cm}^2$",
      "$12\\pi\\text{ cm}^2$",
      "$3\\pi\\text{ cm}^2$",
      "$36\\pi\\text{ cm}^2$",
      "$2\\pi\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas juring lingkaran sebanding dengan besar sudut pusatnya terhadap sudut satu putaran penuh: $L_{\\text{juring}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$.",
      steps: "1. Tentukan faktor perbandingan sudut:\n$$\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$$\n2. Masukkan jari-jari $r = 6\\text{ cm}$ ke rumus luas juring:\n$$L_{\\text{juring}} = \\frac{1}{6} \\times \\pi (6^2)$$\n$$L_{\\text{juring}} = \\frac{1}{6} \\times 36\\pi = 6\\pi\\text{ cm}^2$$\n3. Jadi, luas juring lingkaran tersebut adalah $6\\pi\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Lupa menguadratkan panjang jari-jari $6$ sehingga hanya menghitung $\\frac{1}{6} \\times 6\\pi = \\pi\\text{ cm}^2$."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Tembereng Sudut Siku-Siku",
    difficulty: "mudah",
    statement: "Pada sebuah lingkaran berjari-jari $10\\text{ cm}$, terdapat juring dengan sudut pusat siku-siku ($90^\\circ$). Luas tembereng yang dibatasi oleh busur juring dan tali busurnya adalah .... (gunakan $\\pi = 3{,}14$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$28{,}5\\text{ cm}^2$",
      "$78{,}5\\text{ cm}^2$",
      "$50\\text{ cm}^2$",
      "$25\\text{ cm}^2$",
      "$39{,}25\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas tembereng lingkaran sama dengan luas juring lingkaran dikurangi luas segitiga pembatas yang terbentuk dari dua jari-jari dan tali busurnya: $L_{\\text{tembereng}} = L_{\\text{juring}} - L_{\\triangle}$.",
      steps: "1. Hitung luas juring lingkaran dengan sudut $90^\\circ$:\n$$L_{\\text{juring}} = \\frac{90^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{4} \\times 3{,}14 \\times 10^2 = \\frac{314}{4} = 78{,}5\\text{ cm}^2$$\n2. Hitung luas segitiga siku-siku pengapit jari-jari:\n$$L_{\\triangle} = \\frac{1}{2} \\times r \\times r = \\frac{1}{2} \\times 10 \\times 10 = 50\\text{ cm}^2$$\n3. Kurangkan luas segitiga dari luas juring:\n$$L_{\\text{tembereng}} = 78{,}5 - 50 = 28{,}5\\text{ cm}^2$$\n4. Jadi, luas temberengnya adalah $28{,}5\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Hanya menghitung luas juring ($78{,}5\\text{ cm}^2$) tanpa mengurangkan luas segitiga pembatasnya."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Perbandingan Luas Dua Juring Sejenis",
    difficulty: "mudah",
    statement: "Pada sebuah lingkaran, juring $AOB$ memiliki sudut pusat $40^\\circ$ dan luas $20\\text{ cm}^2$. Jika juring $COD$ pada lingkaran yang sama memiliki sudut pusat $100^\\circ$, maka luas juring $COD$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ cm}^2$",
      "$40\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
      "$25\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada lingkaran yang sama, rasio luas dua juring berbanding lurus secara linier dengan rasio besar sudut pusat masing-masing juring: $\\frac{L_1}{L_2} = \\frac{\\alpha_1}{\\alpha_2}$.",
      steps: "1. Susun persamaan perbandingan senilai:\n$$\\frac{L_{COD}}{L_{AOB}} = \\frac{\\angle COD}{\\angle AOB}$$\n2. Masukkan nilai yang diketahui:\n$$\\frac{L_{COD}}{20} = \\frac{100^\\circ}{40^\\circ}$$\n3. Sederhanakan perbandingan pecahan sudut:\n$$\\frac{100}{40} = \\frac{5}{2}$$\n4. Kalikan silang untuk mencari luas $COD$:\n$$L_{COD} = 20 \\times \\frac{5}{2} = 10 \\times 5 = 50\\text{ cm}^2$$\n5. Jadi, luas juring $COD$ adalah $50\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Salah membalik rasio perbandingan menjadi $\\frac{2}{5} \\times 20 = 8\\text{ cm}^2$."
    }
  },
  {
    id: "mat-geo-lingkaran-luas-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-luas",
    category: "Luas Cincin Lingkaran (Anulus)",
    difficulty: "mudah",
    statement: "Dua buah lingkaran konsentris (sepusat) masing-masing memiliki panjang jari-jari $r_1 = 3\\text{ cm}$ dan $r_2 = 5\\text{ cm}$. Luas daerah cincin (daerah di antara kedua lingkaran tersebut) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$16\\pi\\text{ cm}^2$",
      "$8\\pi\\text{ cm}^2$",
      "$4\\pi\\text{ cm}^2$",
      "$25\\pi\\text{ cm}^2$",
      "$34\\pi\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Luas daerah cincin lingkaran (anulus) dihitung dari selisih luas lingkaran luar dengan luas lingkaran dalam: $L_{\\text{cincin}} = \\pi(r_2^2 - r_1^2)$.",
      steps: "1. Kuadratkan masing-masing jari-jari lingkaran:\n$$r_2^2 = 5^2 = 25$$\n$$r_1^2 = 3^2 = 9$$\n2. Hitung selisih kuadrat jari-jari:\n$$r_2^2 - r_1^2 = 25 - 9 = 16$$\n3. Kalikan dengan konstanta $\\pi$:\n$$L_{\\text{cincin}} = 16\\pi\\text{ cm}^2$$\n4. Jadi, luas daerah cincin tersebut adalah $16\\pi\\text{ cm}^2$ (pilihan A).",
      pitfalls: "Mengurangkan jari-jari terlebih dahulu $(5 - 3 = 2)$ lalu menguadratkannya menjadi $2^2 = 4\\pi\\text{ cm}^2$, yang merupakan kesalahan aljabar."
    }
  }
];
