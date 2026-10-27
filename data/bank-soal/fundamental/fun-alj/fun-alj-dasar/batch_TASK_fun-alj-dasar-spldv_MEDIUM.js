/**
 * Batch Task: TASK_fun-alj-dasar-spldv_MEDIUM
 * SubTopic: Aljabar Dasar: SPLDV dan SPLTV (fun-alj-dasar-spldv)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-alj-dasar-spldv-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian SPLDV Kombinasi Koefisien Bukan Satu",
    difficulty: "sedang",
    statement: "Diketahui sistem persamaan linear dua variabel:\n$$2x + 3y = 8$$\n$$3x - 2y = -1$$\nNilai dari $x + y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan metode eliminasi dengan menyamakan koefisien salah satu variabel melalui perkalian konstanta sebelum melakukan penjumlahan atau pengurangan persamaan.",
      steps: "1. Kalikan persamaan pertama dengan 2 dan persamaan kedua dengan 3 agar koefisien $y$ sama besar namun berlawanan tanda:\n$$4x + 6y = 16$$\n$$9x - 6y = -3$$\n2. Jumlahkan kedua persamaan:\n$$(4x + 6y) + (9x - 6y) = 16 + (-3)$$\n$$13x = 13 \\implies x = 1$$\n3. Substitusikan $x = 1$ ke persamaan $2x + 3y = 8$:\n$$2(1) + 3y = 8$$\n$$3y = 6 \\implies y = 2$$\n4. Hitung nilai $x + y$:\n$$x + y = 1 + 2 = 3$$\n5. Jadi, nilai dari $x + y$ adalah $3$ (pilihan C).",
      pitfalls: "Hanya mencari nilai $x$ atau $y$ tanpa melanjutkan menghitung nilai jumlahan $x + y$ yang diminta soal."
    }
  },
  {
    id: "fun-alj-dasar-spldv-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Sistem Persamaan Pecahan Resiprokal",
    difficulty: "sedang",
    statement: "Pasangan bilangan real positif $(x, y)$ memenuhi sistem persamaan:\n$$\\frac{2}{x} + \\frac{3}{y} = 7$$\n$$\\frac{1}{x} - \\frac{2}{y} = 0$$\nNilai dari hasil kali $x \\cdot y$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Sistem persamaan non-linier dalam variabel pecahan dapat diubah menjadi SPLDV biasa dengan melakukan pemisalan variabel baru: $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$.",
      steps: "1. Misalkan $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$, sehingga sistem menjadi:\n$$2u + 3v = 7$$\n$$u - 2v = 0 \\implies u = 2v$$\n2. Substitusikan $u = 2v$ ke persamaan pertama:\n$$2(2v) + 3v = 7$$\n$$4v + 3v = 7 \\implies 7v = 7 \\implies v = 1$$\n3. Tentukan nilai $u$:\n$$u = 2v = 2(1) = 2$$\n4. Kembalikan ke variabel awal $x$ dan $y$:\n$$x = \\frac{1}{u} = \\frac{1}{2}$$\n$$y = \\frac{1}{v} = \\frac{1}{1} = 1$$\n5. Hitung nilai $x \\cdot y$:\n$$x \\cdot y = \\frac{1}{2} \\times 1 = \\frac{1}{2}$$\n6. Jadi, nilai $x \\cdot y$ adalah $\\frac{1}{2}$ (pilihan B).",
      pitfalls: "Lupa membalikkan kembali variabel substitusi $u$ dan $v$ sehingga langsung mengalikan $u \\cdot v = 2 \\times 1 = 2$."
    }
  },
  {
    id: "fun-alj-dasar-spldv-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Penyelesaian Sistem Tiga Variabel SPLTV",
    difficulty: "sedang",
    statement: "Diketahui sistem persamaan linear tiga variabel:\n$$x + y + z = 6$$\n$$2x - y + z = 3$$\n$$x + 2y - z = 2$$\nNilai dari hasil kali $x \\cdot y \\cdot z$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    correctIndex: 1,
    solution: {
      concept: "SPLTV diselesaikan dengan mengeliminasi satu variabel yang sama secara bertahap menggunakan dua pasang persamaan sehingga diperoleh SPLDV.",
      steps: "1. Eliminasi $z$ dengan menjumlahkan persamaan (1) dan (3):\n$$(x + y + z) + (x + 2y - z) = 6 + 2$$\n$$2x + 3y = 8 \\quad \\text{--- (4)}$$\n2. Eliminasi $z$ dengan mengurangkan persamaan (1) dan (2):\n$$(x + y + z) - (2x - y + z) = 6 - 3$$\n$$-x + 2y = 3 \\implies x = 2y - 3 \\quad \\text{--- (5)}$$\n3. Substitusikan (5) ke dalam (4):\n$$2(2y - 3) + 3y = 8$$\n$$4y - 6 + 3y = 8 \\implies 7y = 14 \\implies y = 2$$\n4. Hitung nilai $x$ dan $z$:\n$$x = 2(2) - 3 = 1$$\n$$z = 6 - (x + y) = 6 - (1 + 2) = 3$$\n5. Hitung hasil kali ketiga variabel:\n$$x \\cdot y \\cdot z = 1 \\times 2 \\times 3 = 6$$\n6. Jadi, nilai $x \\cdot y \\cdot z$ adalah $6$ (pilihan B).",
      pitfalls: "Kesalahan tanda saat proses eliminasi antar-persamaan bertingkat yang merambat ke seluruh nilai variabel berikutnya."
    }
  },
  {
    id: "fun-alj-dasar-spldv-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Kondisi Banyak Penyelesaian Tak Hingga SPLDV",
    difficulty: "sedang",
    statement: "Diberikan sistem persamaan linear:\n$$kx + 2y = 4$$\n$$3x + y = 2$$\nAgar sistem persamaan tersebut memiliki tak hingga banyaknya penyelesaian, maka nilai konstanta $k$ harus bernilai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$3$",
      "$4$",
      "$6$",
      "$8$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Sistem persamaan linear dua variabel $a_1 x + b_1 y = c_1$ dan $a_2 x + b_2 y = c_2$ memiliki tak terhingga penyelesaian jika kedua garis berimpit, yaitu $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.",
      steps: "1. Tentukan perbandingan koefisien sistem:\n$$\\frac{k}{3} = \\frac{2}{1} = \\frac{4}{2}$$\n2. Perhatikan nilai perbandingan konstanta dan koefisien $y$:\n$$\\frac{2}{1} = 2, \\quad \\frac{4}{2} = 2$$\n3. Samakan perbandingan koefisien $x$ dengan rasio perbandingan tersebut:\n$$\\frac{k}{3} = 2$$\n4. Kalikan kedua ruas dengan 3:\n$$k = 2 \\times 3 = 6$$\n5. Jadi, nilai konstanta $k$ adalah $6$ (pilihan D).",
      pitfalls: "Menggunakan kondisi garis tegak lurus atau salah menyamakan perbandingan invers sehingga memilih $k = \\frac{3}{2}$."
    }
  },
  {
    id: "fun-alj-dasar-spldv-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-alj",
    subChapterId: "fun-alj-dasar",
    subTopicId: "fun-alj-dasar-spldv",
    category: "Aplikasi SPLDV pada Masalah Hubungan Usia",
    difficulty: "sedang",
    statement: "Tiga tahun yang lalu, usia seorang Ayah adalah empat kali usia anaknya. Enam tahun yang akan datang, usia Ayah tersebut menjadi $2{,}5$ kali usia anaknya. Usia anak saat ini adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9\\text{ tahun}$",
      "$12\\text{ tahun}$",
      "$15\\text{ tahun}$",
      "$18\\text{ tahun}$",
      "$21\\text{ tahun}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Masalah umur dimodelkan dengan memisalkan umur saat ini sebagai $A$ (Ayah) dan $B$ (anak), kemudian merumuskan kondisi masa lampau $(A - t)$ dan masa depan $(A + t)$.",
      steps: "1. Misalkan umur Ayah sekarang $= A$ dan umur anak sekarang $= B$.\n2. Kondisi 3 tahun lalu:\n$$A - 3 = 4(B - 3) \\implies A - 3 = 4B - 12 \\implies A = 4B - 9 \\quad \\text{--- (1)}$$\n3. Kondisi 6 tahun yang akan datang:\n$$A + 6 = 2{,}5(B + 6) = \\frac{5}{2}(B + 6)$$\n$$2(A + 6) = 5(B + 6)$$\n$$2A + 12 = 5B + 30 \\implies 2A - 5B = 18 \\quad \\text{--- (2)}$$\n4. Substitusikan persamaan (1) ke dalam persamaan (2):\n$$2(4B - 9) - 5B = 18$$\n$$8B - 18 - 5B = 18$$\n$$3B = 36 \\implies B = 12$$\n5. Jadi, usia anak saat ini adalah $12\\text{ tahun}$ (pilihan B).",
      pitfalls: "Lupa mengurangkan atau menambahkan umur kedua belah pihak (hanya mengubah umur Ayah saja, atau sebaliknya)."
    }
  }
];
