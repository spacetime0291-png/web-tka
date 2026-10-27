/**
 * Batch Task: TASK_fun-mutlak-dasar-persamaan_EASY
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Persamaan Nilai Mutlak (fun-mutlak-dasar-persamaan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-persamaan-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Linier Satu Variabel",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari persamaan nilai mutlak $|x - 3| = 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{-2, 8\\}$",
      "$\\{2, 8\\}$",
      "$\\{-8, 2\\}$",
      "$\\{-2, 5\\}$",
      "$\\{8\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan sifat dasar nilai mutlak, $|f(x)| = c$ (dengan $c > 0$) ekuivalen dengan $f(x) = c$ atau $f(x) = -c$.",
      steps: "1. Pisahkan persamaan menjadi dua kemungkinan kasus:\n- Kasus positif: $x - 3 = 5$\n- Kasus negatif: $x - 3 = -5$\n2. Selesaikan kasus pertama:\n$$x = 5 + 3 = 8$$\n3. Selesaikan kasus kedua:\n$$x = -5 + 3 = -2$$\n4. Himpunan penyelesaiannya adalah $\\{-2, 8\\}$.\n5. Jadi, jawaban yang benar adalah pilihan A.",
      pitfalls: "Hanya menyelesaikan kasus positif sehingga hanya memperoleh satu akar penyelesaian $x = 8$."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Koefisien Variabel Bukan Satu",
    difficulty: "mudah",
    statement: "Himpunan penyelesaian dari persamaan $|2x + 1| = 7$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{-3, 4\\}$",
      "$\\{-4, 3\\}$",
      "$\\{-4, 4\\}$",
      "$\\{-3, 3\\}$",
      "$\\{3, 4\\}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pecah persamaan mutlak ke dalam dua persamaan linear: $2x + 1 = 7$ atau $2x + 1 = -7$.",
      steps: "1. Kasus 1 ($2x + 1 = 7$):\n$$2x = 7 - 1 = 6 \\implies x = 3$$\n2. Kasus 2 ($2x + 1 = -7$):\n$$2x = -7 - 1 = -8 \\implies x = -4$$\n3. Satukan kedua nilai $x$ ke dalam himpunan penyelesaian:\n$$HP = \\{-4, 3\\}$$\n4. Jadi, himpunan penyelesaiannya adalah $\\{-4, 3\\}$ (pilihan B).",
      pitfalls: "Salah menghitung $-7 - 1$ menjadi $-6$ sehingga menghasilkan akar keliru $x = -3$."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Sama dengan Nol",
    difficulty: "mudah",
    statement: "Nilai $x$ yang memenuhi persamaan nilai mutlak $|3x - 6| = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$0$",
      "$1$",
      "$2$",
      "$\\pm 2$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Nilai mutlak bernilai nol jika dan hanya jika ekspresi di dalamnya bernilai nol: $|u| = 0 \\iff u = 0$.",
      steps: "1. Samakan ekspresi dalam nilai mutlak dengan nol:\n$$3x - 6 = 0$$\n2. Tambahkan kedua ruas dengan 6:\n$$3x = 6$$\n3. Bagi kedua ruas dengan 3:\n$$x = 2$$\n4. Jadi, nilai $x$ yang memenuhi adalah $2$ (pilihan D).",
      pitfalls: "Mengira ada dua akar $\\pm 2$ karena terbiasa memecah persamaan mutlak menjadi dua kasus padahal ruas kanan bernilai 0."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Bernilai Negatif",
    difficulty: "mudah",
    statement: "Penyelesaian dari persamaan nilai mutlak $|x + 4| = -3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = -7$",
      "$x = -1$",
      "$x = -7 \\text{ atau } x = -1$",
      "$x = 1$",
      "Tidak ada nilai $x$ yang memenuhi (himpunan kosong $\\emptyset$)"
    ],
    correctIndex: 4,
    solution: {
      concept: "Nilai mutlak dari sembarang bilangan real selalu bernilai non-negatif ($|u| \\ge 0$). Oleh karena itu, persamaan mutlak yang disamakan dengan bilangan negatif tidak memiliki solusi real.",
      steps: "1. Perhatikan ruas kanan persamaan: nilainya adalah $-3$ (bilangan negatif).\n2. Berdasarkan definisi nilai mutlak:\n$$|x + 4| \\ge 0 \\quad \\text{untuk setiap } x \\in \\mathbb{R}$$\n3. Karena nilai non-negatif tidak pernah sama dengan bilangan negatif, tidak ada nilai $x$ yang memenuhi persamaan tersebut.\n4. Jadi, penyelesaiannya adalah himpunan kosong $\\emptyset$ (pilihan E).",
      pitfalls: "Memaksakan menghitung kasus $x + 4 = -3$ dan $x + 4 = 3$ tanpa memeriksa syarat dasar nilai mutlak."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Jumlah Akar-Akar Persamaan Nilai Mutlak",
    difficulty: "mudah",
    statement: "Jumlah seluruh nilai $x$ yang memenuhi persamaan nilai mutlak $|4 - x| = 6$ adalah ....",
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
    correctIndex: 2,
    solution: {
      concept: "Cari seluruh nilai akar penyelesaian terlebih dahulu menggunakan dua cabang nilai mutlak, kemudian jumlahkan hasilnya.",
      steps: "1. Cabang positif:\n$$4 - x = 6 \\implies -x = 2 \\implies x_1 = -2$$\n2. Cabang negatif:\n$$4 - x = -6 \\implies -x = -10 \\implies x_2 = 10$$\n3. Jumlahkan kedua nilai akar yang diperoleh:\n$$x_1 + x_2 = -2 + 10 = 8$$\n4. Jadi, jumlah seluruh nilai $x$ yang memenuhi adalah $8$ (pilihan C).",
      pitfalls: "Hanya menjumlahkan nilai tanpa memperhatikan tanda negatif pada akar $x_1 = -2$."
    }
  }
];
