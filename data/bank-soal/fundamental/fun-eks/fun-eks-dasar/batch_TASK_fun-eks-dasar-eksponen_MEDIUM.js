/**
 * Batch Task: TASK_fun-eks-dasar-eksponen_MEDIUM
 * SubTopic: Eksponen & Logaritma Dasar: Sifat Eksponen (fun-eks-dasar-eksponen)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-eks-dasar-eksponen-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Penyederhanaan Aljabar Eksponen Bertingkat",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari ekspresi $\\frac{(a^2 b^{-3})^2}{a^{-1} b^2}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{a^5}{b^8}$",
      "$\\frac{a^3}{b^4}$",
      "$\\frac{a^5}{b^4}$",
      "$\\frac{a^4}{b^8}$",
      "$a^5 b^4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan aturan pangkat eksponen $(x^m y^n)^k = x^{mk} y^{nk}$ dan pembagian basis sama $\\frac{x^p}{x^q} = x^{p-q}$.",
      steps: "1. Jabarkan bagian pembilang terlebih dahulu:\n$$(a^2 b^{-3})^2 = a^{2 \\times 2} b^{-3 \\times 2} = a^4 b^{-6}$$\n2. Tuliskan perbandingan lengkapnya:\n$$\\frac{a^4 b^{-6}}{a^{-1} b^2}$$\n3. Operasikan eksponen untuk masing-masing variabel:\nUntuk $a$: $4 - (-1) = 4 + 1 = 5 \\implies a^5$\nUntuk $b$: $-6 - 2 = -8 \\implies b^{-8} = \\frac{1}{b^8}$\n4. Gabungkan hasilnya:\n$$= \\frac{a^5}{b^8}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{a^5}{b^8}$ (pilihan A).",
      pitfalls: "Salah menghitung pangkat variabel $a$ menjadi $4 - 1 = 3$ karena lupa bahwa penyebut berpangkat $-1$ sehingga terjadi pengurangan ganda $4 - (-1) = 5$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Penyederhanaan Eksponen Penjumlahan Variabel Pangkat",
    difficulty: "sedang",
    statement: "Nilai dari ekspresi $\\frac{2^{n+2} - 2^n}{2^{n+1}}$ untuk sembarang bilangan bulat $n$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Faktorkan keluar suku berpangkat terkecil $2^n$ pada pembilang dan penyebut untuk menyederhanakan pecahan aljabar eksponen.",
      steps: "1. Uraikan suku-suku pada pembilang:\n$$2^{n+2} = 2^n \\cdot 2^2 = 4 \\cdot 2^n$$\n2. Lakukan faktorisasi pada pembilang:\n$$2^{n+2} - 2^n = 2^n(2^2 - 1) = 2^n(4 - 1) = 3 \\cdot 2^n$$\n3. Uraikan bagian penyebut:\n$$2^{n+1} = 2 \\cdot 2^n$$\n4. Bagikan pembilang dengan penyebut:\n$$\\frac{3 \\cdot 2^n}{2 \\cdot 2^n} = \\frac{3}{2}$$\n5. Jadi, nilai ekspresi tersebut bernilai konstan $\\frac{3}{2}$ (pilihan C).",
      pitfalls: "Mencoret langsung suku $2^n$ tanpa melakukan faktorisasi distributif aljabar terlebih dahulu."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Substitusi Nilai Eksponen Basis Majemuk",
    difficulty: "sedang",
    statement: "Jika diketahui $2^x = 3$, maka nilai dari ekspresi $8^x - 4^x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6$",
      "$12$",
      "$18$",
      "$24$",
      "$27$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Basis majemuk $8^x$ dan $4^x$ dapat dinyatakan dalam basis $2^x$ menggunakan sifat pemangkatan: $a^{kx} = (a^x)^k$.",
      steps: "1. Ubah $8^x$ ke dalam bentuk basis $2^x$:\n$$8^x = (2^3)^x = (2^x)^3$$\nKarena $2^x = 3$, maka:\n$$8^x = 3^3 = 27$$\n2. Ubah $4^x$ ke dalam bentuk basis $2^x$:\n$$4^x = (2^2)^x = (2^x)^2$$\nKarena $2^x = 3$, maka:\n$$4^x = 3^2 = 9$$\n3. Kurangkan kedua nilai tersebut:\n$$8^x - 4^x = 27 - 9 = 18$$\n4. Jadi, nilai dari $8^x - 4^x$ adalah $18$ (pilihan C).",
      pitfalls: "Mengalikan langsung $8 \\times 3 = 24$ dan $4 \\times 3 = 12$ alih-alih memangkatkannya."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Persamaan Eksponen Sederhana Basis Sama",
    difficulty: "sedang",
    statement: "Nilai $x$ yang memenuhi persamaan eksponensial $3^{2x - 1} = 27$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$\\frac{5}{2}$",
      "$3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jika $a^{f(x)} = a^p$ dengan $a > 0$ dan $a \\neq 1$, maka eksponennya bernilai sama: $f(x) = p$.",
      steps: "1. Nyatakan bilangan 27 dalam basis 3:\n$$27 = 3^3$$\n2. Tuliskan kembali persamaan eksponen:\n$$3^{2x - 1} = 3^3$$\n3. Samakan kedua eksponen:\n$$2x - 1 = 3$$\n4. Selesaikan persamaan linear:\n$$2x = 3 + 1 = 4$$\n$$x = 2$$\n5. Jadi, nilai $x$ yang memenuhi adalah $2$ (pilihan C).",
      pitfalls: "Lupa mengubah 27 menjadi $3^3$ dan malah menyamakan $2x - 1 = 27$."
    }
  },
  {
    id: "fun-eks-dasar-eksponen-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-eks",
    subChapterId: "fun-eks-dasar",
    subTopicId: "fun-eks-dasar-eksponen",
    category: "Penyederhanaan Pecahan Eksponen Multi-Variabel Berpangkat Negatif",
    difficulty: "sedang",
    statement: "Bentuk sederhana dari ekspresi $\\left(\\frac{27 a^{-5} b^3}{3 a b^{-1}}\\right)^{-1}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{a^6}{9b^4}$",
      "$\\frac{9a^6}{b^4}$",
      "$\\frac{b^4}{9a^6}$",
      "$\\frac{a^4}{9b^2}$",
      "$\\frac{9b^4}{a^6}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Sederhanakan terlebih dahulu suku-suku di dalam kurung, lalu terapkan pembalikan pecahan oleh pangkat $-1$.",
      steps: "1. Sederhanakan suku-suku di dalam tanda kurung:\n- Koefisien numerik: $\\frac{27}{3} = 9$\n- Variabel $a$: $\\frac{a^{-5}}{a^1} = a^{-5 - 1} = a^{-6}$\n- Variabel $b$: $\\frac{b^3}{b^{-1}} = b^{3 - (-1)} = b^4$\n2. Gabungkan bentuk di dalam kurung:\n$$= 9 a^{-6} b^4 = \\frac{9 b^4}{a^6}$$\n3. Terapkan pangkat luar $-1$ (balik pecahan):\n$$\\left(\\frac{9 b^4}{a^6}\\right)^{-1} = \\frac{a^6}{9 b^4}$$\n4. Jadi, bentuk paling sederhananya adalah $\\frac{a^6}{9b^4}$ (pilihan A).",
      pitfalls: "Lupa membalik koefisien 9 menjadi $\\frac{1}{9}$ saat menerapkan pemangkatan $-1$."
    }
  }
];
