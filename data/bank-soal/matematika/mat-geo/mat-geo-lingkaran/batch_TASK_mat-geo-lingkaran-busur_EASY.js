/**
 * Batch Task: TASK_mat-geo-lingkaran-busur_EASY
 * SubTopic: Panjang Busur dan Sudut Pusat / Keliling Lingkaran (mat-geo-lingkaran-busur)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-busur-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Panjang Busur Lingkaran",
    difficulty: "mudah",
    statement: "Sebuah lingkaran memiliki panjang jari-jari $r = 21\\text{ cm}$. Panjang busur lingkaran yang menghadap sudut pusat $60^\\circ$ adalah .... (gunakan $\\pi = \\frac{22}{7}$)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$22\\text{ cm}$",
      "$44\\text{ cm}$",
      "$11\\text{ cm}$",
      "$33\\text{ cm}$",
      "$66\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang busur lingkaran dengan sudut pusat $\\theta$ dirumuskan sebagai fraksi sudut pusat terhadap putaran penuh dikalikan keliling lingkaran: $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$.",
      steps: "1. Tentukan perbandingan sudut terhadap putaran penuh:\n$$\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$$\n2. Hitung keliling lingkaran utuh:\n$$K = 2\\pi r = 2 \\times \\frac{22}{7} \\times 21 = 2 \\times 22 \\times 3 = 132\\text{ cm}$$\n3. Hitung panjang busur lingkaran:\n$$s = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$\n4. Jadi, panjang busur lingkaran tersebut adalah $22\\text{ cm}$ (pilihan A).",
      pitfalls: "Menggunakan rumus luas juring alih-alih keliling lingkaran, atau lupa mengalikan dengan faktor 2 pada keliling lingkaran ($2\\pi r$)."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Hubungan Sudut Pusat dan Sudut Keliling",
    difficulty: "mudah",
    statement: "Pada sebuah lingkaran, sudut pusat $\\angle AOB$ dan sudut keliling $\\angle ACB$ menghadap busur yang sama, yaitu busur $AB$. Jika besar sudut pusat $\\angle AOB = 70^\\circ$, maka besar sudut keliling $\\angle ACB$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$35^\\circ$",
      "$70^\\circ$",
      "$140^\\circ$",
      "$20^\\circ$",
      "$55^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema sudut keliling menyatakan bahwa besar sudut keliling yang menghadap busur yang sama dengan sudut pusat adalah tepat setengah dari besar sudut pusat tersebut: $\\text{Sudut Keliling} = \\frac{1}{2} \\times \\text{Sudut Pusat}$.",
      steps: "1. Identifikasi besar sudut pusat: $\\angle AOB = 70^\\circ$.\n2. Karena $\\angle ACB$ adalah sudut keliling yang menghadap busur yang sama, berlaku:\n$$\\angle ACB = \\frac{1}{2} \\times \\angle AOB$$\n3. Hitung hasilnya:\n$$\\angle ACB = \\frac{1}{2} \\times 70^\\circ = 35^\\circ$$\n4. Jadi, besar sudut keliling $\\angle ACB$ adalah $35^\\circ$ (pilihan A).",
      pitfalls: "Terkecoh mengalikan sudut pusat dengan 2 sehingga menghasilkan $140^\\circ$, yang merupakan kebalikan rumus."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Sudut Keliling Menghadap Diameter",
    difficulty: "mudah",
    statement: "Ruas garis $AB$ merupakan diameter sebuah lingkaran dengan titik pusat $O$. Jika titik $C$ terletak pada keliling lingkaran tersebut (dengan $C \\ne A$ dan $C \\ne B$), maka besar sudut $\\angle ACB$ selalu sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$180^\\circ$",
      "Tergantung panjang diameter lingkaran"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Teorema Thales, setiap sudut keliling lingkaran yang menghadap garis tengah (diameter) lingkaran selalu bernilai siku-siku ($90^\\circ$), karena sudut pusat garis lurus adalah $180^\\circ$.",
      steps: "1. Sudut pusat yang dibentuk oleh diameter $AB$ adalah garis lurus dengan sudut $180^\\circ$.\n2. Sudut $\\angle ACB$ merupakan sudut keliling yang menghadap busur setengah lingkaran tersebut.\n3. Berdasarkan rumus sudut keliling:\n$$\\angle ACB = \\frac{1}{2} \\times 180^\\circ = 90^\\circ$$\n4. Sifat ini selalu berlaku universal untuk setiap posisi titik $C$ pada busur lingkaran.\n5. Jadi, besar sudut $\\angle ACB$ adalah $90^\\circ$ (pilihan A).",
      pitfalls: "Mengira besar sudutnya bervariasi bergantung pada letak titik $C$ atau panjang diameter lingkaran."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Sudut-Sudut Keliling Menghadap Busur yang Sama",
    difficulty: "mudah",
    statement: "Dua buah sudut keliling $\\angle APB$ dan $\\angle AQB$ menghadap busur yang sama pada sebuah lingkaran. Jika besar $\\angle APB = (3x - 10)^\\circ$ dan besar $\\angle AQB = (x + 30)^\\circ$, maka nilai dari $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "20",
      "15",
      "25",
      "30",
      "10"
    ],
    correctIndex: 0,
    solution: {
      concept: "Semua sudut keliling yang menghadap busur yang sama pada sebuah lingkaran selalu memiliki besar sudut yang sama persis.",
      steps: "1. Samakan persamaan kedua sudut keliling:\n$$3x - 10 = x + 30$$\n2. Pindahkan suku bervariabel $x$ ke ruas kiri dan konstanta ke ruas kanan:\n$$3x - x = 30 + 10$$\n$$2x = 40$$\n3. Bagi kedua ruas dengan 2:\n$$x = 20$$\n4. Jadi, nilai $x$ adalah 20 (pilihan A).",
      pitfalls: "Kekeliruan tanda aljabar saat memindahkan suku $-10$ menjadi $30 - 10 = 20$."
    }
  },
  {
    id: "mat-geo-lingkaran-busur-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-busur",
    category: "Perbandingan Panjang Dua Busur",
    difficulty: "mudah",
    statement: "Pada lingkaran dengan titik pusat $O$, sudut pusat $\\angle AOB = 45^\\circ$ memiliki panjang busur $AB = 12\\text{ cm}$. Panjang busur $CD$ yang menghadap sudut pusat $\\angle COD = 105^\\circ$ pada lingkaran yang sama adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$28\\text{ cm}$",
      "$24\\text{ cm}$",
      "$32\\text{ cm}$",
      "$36\\text{ cm}$",
      "$20\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada lingkaran yang sama, panjang busur lingkaran berbanding lurus secara linier dengan besar sudut pusat yang menghadapinya: $\\frac{\\text{Busur } CD}{\\text{Busur } AB} = \\frac{\\angle COD}{\\angle AOB}$.",
      steps: "1. Susun perbandingan panjang busur terhadap sudut pusat:\n$$\\frac{\\text{Busur } CD}{12} = \\frac{105^\\circ}{45^\\circ}$$\n2. Sederhanakan perbandingan pecahan sudut dengan membagi pembilang dan penyebut dengan 15:\n$$\\frac{105}{45} = \\frac{7}{3}$$\n3. Hitung panjang busur $CD$:\n$$\\text{Busur } CD = 12 \\times \\frac{7}{3} = 4 \\times 7 = 28\\text{ cm}$$\n4. Jadi, panjang busur $CD$ adalah $28\\text{ cm}$ (pilihan A).",
      pitfalls: "Kesalahan saat menyederhanakan pecahan $\\frac{105}{45}$ sehingga menghasilkan angka desimal yang keliru."
    }
  }
];
