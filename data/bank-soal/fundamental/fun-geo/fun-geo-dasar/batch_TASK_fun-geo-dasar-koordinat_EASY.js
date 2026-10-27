/**
 * Batch Task: TASK_fun-geo-dasar-koordinat_EASY
 * SubTopic: Geometri Dasar: Koordinat & Jarak Dua Titik (fun-geo-dasar-koordinat)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-geo-dasar-koordinat-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Jarak Antara Dua Titik pada Bidang Kartesius",
    difficulty: "mudah",
    statement: "Jarak antara titik $A(1, 2)$ dan titik $B(4, 6)$ pada bidang koordinat Kartesius adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$\\sqrt{15}$",
      "$7$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rumus jarak antara dua titik $A(x_1, y_1)$ dan $B(x_2, y_2)$ diturunkan dari teorema Pythagoras: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
      steps: "1. Tentukan komponen selisih absis dan ordinat:\n$$\\Delta x = x_2 - x_1 = 4 - 1 = 3$$\n$$\\Delta y = y_2 - y_1 = 6 - 2 = 4$$\n2. Hitung jarak menggunakan rumus Pythagoras:\n$$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{3^2 + 4^2}$$\n3. Selesaikan operasi akar kuadrat:\n$$d = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n4. Jadi, jarak antara titik $A$ dan $B$ adalah $5$ satuan (pilihan C).",
      pitfalls: "Menjumlahkan langsung nilai selisih $3 + 4 = 7$ tanpa melakukan pengkuadratan dan penarikan akar."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Menentukan Koordinat Titik Tengah",
    difficulty: "mudah",
    statement: "Koordinat titik tengah dari ruas garis yang menghubungkan titik $P(2, -4)$ dan titik $Q(8, 2)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, -1)$",
      "$(5, 1)$",
      "$(3, -1)$",
      "$(6, -2)$",
      "$(10, -2)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik tengah $M$ dari dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ adalah rata-rata aritmetika dari koordinatnya: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
      steps: "1. Hitung absis titik tengah:\n$$x_M = \\frac{x_1 + x_2}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n2. Hitung ordinat titik tengah:\n$$y_M = \\frac{y_1 + y_2}{2} = \\frac{-4 + 2}{2} = \\frac{-2}{2} = -1$$\n3. Gabungkan koordinat titik tengah:\n$$M = (5, -1)$$\n4. Jadi, koordinat titik tengahnya adalah $(5, -1)$ (pilihan A).",
      pitfalls: "Melakukan pengurangan absis/ordinat alih-alih penjumlahan saat menghitung titik tengah."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Jarak Titik ke Pusat Koordinat",
    difficulty: "mudah",
    statement: "Jarak titik $P(-3, 4)$ ke titik pusat koordinat $O(0, 0)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Jarak suatu titik $(x, y)$ terhadap titik asal $(0, 0)$ dihitung dengan rumus $d = \\sqrt{x^2 + y^2}$.",
      steps: "1. Masukkan koordinat titik $P(-3, 4)$ ke dalam rumus jarak ke titik asal:\n$$d = \\sqrt{(-3)^2 + 4^2}$$\n2. Kuadratkan masing-masing bilangan:\n$$(-3)^2 = 9$$\n$$4^2 = 16$$\n3. Hitung jumlahan dan akar kuadratnya:\n$$d = \\sqrt{9 + 16} = \\sqrt{25} = 5$$\n4. Jadi, jarak titik $P$ ke titik pusat adalah $5$ satuan (pilihan D).",
      pitfalls: "Lupa bahwa kuadrat bilangan negatif bernilai positif $((-3)^2 = +9)$, bukan $-9$."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Menentukan Titik Ujung dari Titik Tengah",
    difficulty: "mudah",
    statement: "Titik tengah dari ruas garis $AB$ adalah $M(3, 5)$. Jika koordinat titik $A$ adalah $(1, 2)$, maka koordinat titik $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(2, 3)$",
      "$(4, 7)$",
      "$(5, 8)$",
      "$(5, 7)$",
      "$(7, 12)$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan hubungan titik tengah: $x_B = 2x_M - x_A$ dan $y_B = 2y_M - y_A$.",
      steps: "1. Tentukan absis titik $B$:\n$$\\frac{1 + x_B}{2} = 3 \\implies 1 + x_B = 6 \\implies x_B = 5$$\n2. Tentukan ordinat titik $B$:\n$$\\frac{2 + y_B}{2} = 5 \\implies 2 + y_B = 10 \\implies y_B = 8$$\n3. Satukan koordinat titik $B$:\n$$B = (5, 8)$$\n4. Jadi, koordinat titik $B$ adalah $(5, 8)$ (pilihan C).",
      pitfalls: "Membagi dua selisih koordinat $M$ dan $A$ sehingga malah menghasilkan titik tengah antara $M$ dan $A$."
    }
  },
  {
    id: "fun-geo-dasar-koordinat-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-koordinat",
    category: "Jarak Dua Titik dengan Koordinat Negatif",
    difficulty: "mudah",
    statement: "Jarak antara dua titik $K(-2, 1)$ dan $L(6, 7)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8$",
      "$10$",
      "$\\sqrt{52}$",
      "$12$",
      "$14$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Perhatikan tanda negatif saat menghitung selisih koordinat: $\\Delta x = x_2 - x_1 = 6 - (-2) = 8$.",
      steps: "1. Hitung selisih absis:\n$$\\Delta x = 6 - (-2) = 6 + 2 = 8$$\n2. Hitung selisih ordinat:\n$$\\Delta y = 7 - 1 = 6$$\n3. Hitung jarak dengan teorema Pythagoras:\n$$d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$$\n4. Jadi, jarak antara titik $K$ dan $L$ adalah $10$ satuan (pilihan B).",
      pitfalls: "Salah menghitung selisih absis menjadi $6 - 2 = 4$ karena melupakan tanda negatif pada titik koordinat awal."
    }
  }
];
