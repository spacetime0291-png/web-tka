/**
 * Batch Task: TASK_fun-eks-dasar-eksponen_EASY
 * SubTopic: Eksponen & Logaritma Dasar: Sifat Eksponen (fun-eks-dasar-eksponen)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-eks-dasar-eksponen-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Sifat Perkalian Bilangan Berpangkat Basis Sama",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari operasi perkalian bilangan berpangkat $2^3 \\times 2^4$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2^7$",
      "$2^{12}$",
      "$4^7$",
      "$4^{12}$",
      "$2^1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sifat perkalian bilangan berpangkat dengan basis yang sama menyatakan bahwa pangkatnya dijumlahkan: $a^m \\times a^n = a^{m+n}$.",
      steps: "1. Amati bahwa kedua bilangan memiliki basis yang sama, yaitu $2$.\n2. Terapkan sifat penjumlahan pangkat:\n$$2^3 \\times 2^4 = 2^{3 + 4}$$\n3. Hitung jumlahan pangkat:\n$$= 2^7$$\n4. Jadi, bentuk sederhananya adalah $2^7$ (pilihan A).",
      pitfalls: "Mengalikan pangkat ($3 \\times 4 = 12$) alih-alih menjumlahkannya, atau mengalikan basisnya menjadi $4^7$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Sifat Pembagian Bilangan Berpangkat",
    difficulty: "mudah",
    statement: "Bentuk sederhana dari pembagian bilangan berpangkat $\\frac{3^8}{3^5}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3^{13}$",
      "$3^3$",
      "$1^3$",
      "$3^{-3}$",
      "$3^{\\frac{8}{5}}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sifat pembagian bilangan berpangkat dengan basis yang sama menyatakan bahwa pangkat pembilang dikurangi pangkat penyebut: $\\frac{a^m}{a^n} = a^{m-n}$.",
      steps: "1. Pastikan kedua bilangan berpangkat memiliki basis yang sama ($3$).\n2. Kurangkan pangkatnya:\n$$\\frac{3^8}{3^5} = 3^{8 - 5}$$\n3. Hitung hasil pengurangan pangkat:\n$$= 3^3$$\n4. Jadi, bentuk sederhananya adalah $3^3$ (pilihan B).",
      pitfalls: "Membagi pangkat ($8 / 5$) atau menjumlahkannya menjadi $3^{13}$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Sifat Pemangkatan Bilangan Berpangkat",
    difficulty: "mudah",
    statement: "Hasil dari pemangkatan $(2^3)^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2^5$",
      "$2^6$",
      "$2^9$",
      "$4^5$",
      "$4^6$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sifat perpangkatan dari bilangan berpangkat menyatakan bahwa kedua eksponen saling dikalikan: $(a^m)^n = a^{m \\cdot n}$.",
      steps: "1. Kalikan kedua eksponennya:\n$$(2^3)^2 = 2^{3 \\times 2}$$\n2. Selesaikan perkalian pangkat:\n$$= 2^6$$\n3. Jadi, hasilnya adalah $2^6$ (pilihan B).",
      pitfalls: "Menjumlahkan eksponen ($3 + 2 = 5$) sehingga memilih $2^5$ atau memangkatkan eksponen ($3^2 = 9$) sehingga memilih $2^9$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Mengubah Pangkat Negatif Menjadi Positif",
    difficulty: "mudah",
    statement: "Bentuk pangkat bulat positif dari ekspresi $x^{-3} y^2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{x^3 y^2}$",
      "$\\frac{x^3}{y^2}$",
      "$\\frac{y^2}{x^3}$",
      "$-\\frac{y^2}{x^3}$",
      "$(xy)^{-1}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bilangan berpangkat negatif didefinisikan sebagai kebalikan dari bilangan berpangkat positif: $a^{-n} = \\frac{1}{a^n}$.",
      steps: "1. Tinjau faktor yang memiliki pangkat negatif, yaitu $x^{-3}$:\n$$x^{-3} = \\frac{1}{x^3}$$\n2. Kalikan dengan suku berpangkat positif $y^2$:\n$$x^{-3} y^2 = \\frac{1}{x^3} \\times y^2 = \\frac{y^2}{x^3}$$\n3. Jadi, bentuk pangkat bulat positifnya adalah $\\frac{y^2}{x^3}$ (pilihan C).",
      pitfalls: "Memindahkan seluruh variabel ke bagian penyebut sehingga menghasilkan $\\frac{1}{x^3 y^2}$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Nilai Pecahan dengan Pangkat Negatif",
    difficulty: "mudah",
    statement: "Nilai dari ekspresi bilangan pecahan berpangkat negatif $\\left(\\frac{2}{3}\\right)^{-2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{4}{9}$",
      "$\\frac{4}{9}$",
      "$-\\frac{9}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{6}{4}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pecahan berpangkat negatif dapat diubah menjadi pangkat positif dengan membalik pembilang dan penyebut: $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.",
      steps: "1. Balik pecahan untuk menghilangkan tanda negatif pada eksponen:\n$$\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2$$\n2. Kuadratkan pembilang dan penyebut:\n$$= \\frac{3^2}{2^2} = \\frac{9}{4}$$\n3. Jadi, nilai ekspresi tersebut adalah $\\frac{9}{4}$ (pilihan D).",
      pitfalls: "Memberikan tanda negatif di depan pecahan $-\\frac{4}{9}$ karena keliru mengartikan pangkat negatif sebagai bilangan bertanda minus."
    }
  }
];
