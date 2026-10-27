/**
 * Batch Task: TASK_fun-mutlak-dasar-persamaan_MEDIUM
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Persamaan Nilai Mutlak (fun-mutlak-dasar-persamaan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-persamaan-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Dua Ruas",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari persamaan nilai mutlak $|2x - 1| = |x + 4|$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{-1, 5\\}$",
      "$\\{1, 5\\}$",
      "$\\{-5, 1\\}$",
      "$\\{-1, 3\\}$",
      "$\\{5\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Persamaan $|f(x)| = |g(x)|$ ekuivalen dengan $(f(x) - g(x))(f(x) + g(x)) = 0$, yang setara dengan $f(x) = g(x)$ atau $f(x) = -g(x)$.",
      steps: "1. Tinjau kemungkinan pertama ($f(x) = g(x)$):\n$$2x - 1 = x + 4$$\n$$2x - x = 4 + 1 \\implies x = 5$$\n2. Tinjau kemungkinan kedua ($f(x) = -g(x)$):\n$$2x - 1 = -(x + 4)$$\n$$2x - 1 = -x - 4$$\n$$3x = -3 \\implies x = -1$$\n3. Gabungkan kedua solusi ke dalam himpunan penyelesaian:\n$$HP = \\{-1, 5\\}$$\n4. Jadi, himpunan penyelesaiannya adalah $\\{-1, 5\\}$ (pilihan A).",
      pitfalls: "Lupa mendistribusikan tanda minus pada seluruh suku kurung kedua saat $-(x + 4)$ sehingga keliru menulis $-x + 4$."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak dengan Ruas Kanan Memuat Variabel",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari persamaan $|3x + 2| = 2x + 7$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{5\\}$",
      "$\\{-1{,}8\\}$",
      "$\\{-1{,}8, 5\\}$",
      "$\\{-5, 1{,}8\\}$",
      "$\\emptyset$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk persamaan $|f(x)| = g(x)$, ruas kanan harus memenuhi syarat non-negatif $g(x) \\ge 0$, kemudian diselesaikan dengan cabang $f(x) = g(x)$ atau $f(x) = -g(x)$.",
      steps: "1. Syarat ruas kanan non-negatif:\n$$2x + 7 \\ge 0 \\implies x \\ge -3{,}5$$\n2. Cabang 1 ($3x + 2 = 2x + 7$):\n$$3x - 2x = 7 - 2 \\implies x = 5$$\nPeriksa syarat: $5 \\ge -3{,}5$ (memenuhi).\n3. Cabang 2 ($3x + 2 = -(2x + 7)$):\n$$3x + 2 = -2x - 7$$\n$$5x = -9 \\implies x = -\\frac{9}{5} = -1{,}8$$\nPeriksa syarat: $-1{,}8 \\ge -3{,}5$ (memenuhi).\n4. Kedua nilai memenuhi syarat eksistensi, sehingga $HP = \\{-1{,}8, 5\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan C.",
      pitfalls: "Langsung mencoret akar negatif tanpa mengecek apakah nilai tersebut memenuhi batas syarat ruas kanan $x \\ge -3{,}5$."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Kuadrat dalam Nilai Mutlak",
    difficulty: "sedang",
    statement: "Hasil kali semua nilai $x$ yang memenuhi persamaan $|x - 2|^2 - 3|x - 2| - 4 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-24$",
      "$-12$",
      "$-8$",
      "$6$",
      "$12$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan pemisalan variabel baru $u = |x - 2| \\ge 0$ untuk mengubahnya menjadi persamaan kuadrat biasa, kemudian buang akar yang tidak memenuhi syarat $u \\ge 0$.",
      steps: "1. Misalkan $u = |x - 2|$ dengan syarat $u \\ge 0$:\n$$u^2 - 3u - 4 = 0$$\n2. Faktorkan persamaan kuadrat:\n$$(u - 4)(u + 1) = 0$$\nDiperoleh $u = 4$ atau $u = -1$.\n3. Karena $u \\ge 0$, maka $u = -1$ tidak memenuhi. Ambil $u = 4$:\n$$|x - 2| = 4$$\n4. Selesaikan persamaan mutlak:\n$$x - 2 = 4 \\implies x_1 = 6$$\n$$x - 2 = -4 \\implies x_2 = -2$$\n5. Hitung hasil kali kedua akar:\n$$x_1 \\times x_2 = 6 \\times (-2) = -12$$\n6. Jadi, hasil kali semua nilai $x$ yang memenuhi adalah $-12$ (pilihan B).",
      pitfalls: "Menyelesaikan $|x - 2| = -1$ yang menghasilkan akar imajiner/tidak sah, atau salah mengalikan tanda akar."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Nilai Mutlak Geometri Jarak Segmen",
    difficulty: "sedang",
    statement: "Banyaknya bilangan real $x$ yang memenuhi persamaan nilai mutlak $|x - 1| + |x - 4| = 3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ (tidak ada)}$",
      "$1$",
      "$2$",
      "$3$",
      "Tak terhingga banyaknya"
    ],
    correctIndex: 4,
    solution: {
      concept: "Secara geometris, $|x - a| + |x - b|$ menyatakan jumlah jarak dari titik $x$ ke titik $a$ dan ke titik $b$. Jika jumlah jaraknya sama dengan jarak antara $a$ dan $b$ ($|b - a|$), maka seluruh titik pada segmen $[a, b]$ adalah solusinya.",
      steps: "1. Amati jarak antara kedua titik pembuat nol pada garis bilangan:\n$$|4 - 1| = 3$$\n2. Persamaan menyatakan bahwa jumlah jarak dari titik $x$ ke titik 1 dan titik 4 adalah tepat sama dengan 3:\n$$|x - 1| + |x - 4| = 3$$\n3. Sifat ini dipenuhi oleh setiap titik $x$ yang berada di antara $1$ dan $4$, yaitu interval $[1, 4]$:\n$$\\text{Untuk } 1 \\le x \\le 4: \\quad (x - 1) + (4 - x) = 3 \\quad (\\text{selalu benar})$$\n4. Karena interval $[1, 4]$ memuat bilangan real yang tak terhingga banyaknya, maka jumlah penyelesaiannya adalah tak terhingga.\n5. Jadi, terdapat tak terhingga banyaknya solusi (pilihan E).",
      pitfalls: "Hanya menguji titik batas $x = 1$ dan $x = 4$ sehingga menyimpulkan hanya ada 2 solusi."
    }
  },
  {
    id: "fun-mutlak-dasar-persamaan-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-persamaan",
    category: "Persamaan Linear Kombinasi Nilai Mutlak",
    difficulty: "sedang",
    statement: "Himpunan penyelesaian dari persamaan $|2x - 6| + x = 9$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{-3, 5\\}$",
      "$\\{3, 5\\}$",
      "$\\{-5, 3\\}$",
      "$\\{5\\}$",
      "$\\{-3\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Isolasi bentuk nilai mutlak ke satu ruas: $|2x - 6| = 9 - x$, dengan syarat ruas kanan non-negatif: $9 - x \\ge 0 \\iff x \\le 9$.",
      steps: "1. Isolasi nilai mutlak:\n$$|2x - 6| = 9 - x$$\nSyarat penyelesaian: $9 - x \\ge 0 \\implies x \\le 9$.\n2. Cabang pertama ($2x - 6 = 9 - x$):\n$$2x + x = 9 + 6$$\n$$3x = 15 \\implies x = 5$$\nPeriksa syarat: $5 \\le 9$ (memenuhi).\n3. Cabang kedua ($2x - 6 = -(9 - x)$):\n$$2x - 6 = -9 + x$$\n$$2x - x = -9 + 6$$\n$$x = -3$$\nPeriksa syarat: $-3 \\le 9$ (memenuhi).\n4. Gabungkan kedua solusi:\n$$HP = \\{-3, 5\\}$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{-3, 5\\}$ (pilihan A).",
      pitfalls: "Lupa memindahkan variabel $x$ ke ruas kanan terlebih dahulu sehingga memecah persamaan menjadi $2x - 6 + x = 9$ dan $2x - 6 - x = 9$."
    }
  }
];
