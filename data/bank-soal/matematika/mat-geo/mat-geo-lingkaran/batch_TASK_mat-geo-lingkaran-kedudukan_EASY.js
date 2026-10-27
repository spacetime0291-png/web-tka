/**
 * Batch Task: TASK_mat-geo-lingkaran-kedudukan_EASY
 * SubTopic: Kedudukan Titik dan Garis terhadap Lingkaran (mat-geo-lingkaran-kedudukan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-kedudukan-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Kedudukan Titik terhadap Lingkaran Pusat Asal",
    difficulty: "mudah",
    statement: "Kedudukan titik $P(3, 4)$ terhadap kurva lingkaran $L \\equiv x^2 + y^2 = 25$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Terletak tepat pada lingkaran",
      "Berada di dalam lingkaran",
      "Berada di luar lingkaran",
      "Merupakan titik pusat lingkaran",
      "Tidak dapat ditentukan kedudukannya"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kedudukan titik $(x_1, y_1)$ terhadap lingkaran $x^2 + y^2 = r^2$ ditentukan dengan membandingkan nilai kuasa $K = x_1^2 + y_1^2$ terhadap $r^2$: jika $K = r^2$ titik berada pada lingkaran, jika $K < r^2$ di dalam, dan jika $K > r^2$ di luar.",
      steps: "1. Substitusikan absis $x = 3$ dan ordinat $y = 4$ ke ruas kiri persamaan lingkaran:\n$$K = 3^2 + 4^2 = 9 + 16 = 25$$\n2. Bandingkan dengan ruas kanan persamaan lingkaran ($r^2 = 25$):\n$$K = 25 = r^2$$\n3. Karena nilai ruas kiri sama persis dengan $r^2$, maka titik $P(3, 4)$ terletak tepat pada lingkaran.\n4. Jadi, kedudukannya adalah terletak tepat pada lingkaran (pilihan A).",
      pitfalls: "Mengabaikan kuadrat variabel dan langsung menjumlahkan koordinat $3 + 4 = 7$ lalu membandingkannya dengan 25."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Kedudukan Titik terhadap Lingkaran Pusat (a, b)",
    difficulty: "mudah",
    statement: "Nilai substitusi titik $Q(2, 3)$ terhadap bentuk baku lingkaran $(x - 1)^2 + (y + 2)^2 = 16$ menghasilkan nilai .... sehingga posisi titik $Q$ berada di .... lingkaran.",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Lebih besar dari 16; luar",
      "Lebih kecil dari 16; dalam",
      "Sama dengan 16; pada",
      "Lebih kecil dari 0; dalam",
      "Sama dengan 0; pusat"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk lingkaran $(x - a)^2 + (y - b)^2 = r^2$, jika hasil substitusi koordinat titik menghasilkan nilai yang lebih besar dari $r^2$, maka titik tersebut berada di luar lingkaran.",
      steps: "1. Substitusikan titik $Q(2, 3)$ ke ruas kiri persamaan lingkaran:\n$$K = (2 - 1)^2 + (3 + 2)^2$$\n$$K = 1^2 + 5^2 = 1 + 25 = 26$$\n2. Bandingkan hasil perhitungan $K = 26$ dengan kuadrat jari-jari $r^2 = 16$:\n$$26 > 16$$\n3. Karena nilai substitusi lebih besar dari 16, titik $Q$ berada di luar lingkaran.\n4. Jadi, pernyataan yang benar adalah lebih besar dari 16 dan posisinya di luar lingkaran (pilihan A).",
      pitfalls: "Salah menghitung bentuk $(3 + 2)^2$ menjadi $(3 - 2)^2 = 1$ akibat tidak cermat membaca tanda tambah."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Identifikasi Titik di Dalam Lingkaran",
    difficulty: "mudah",
    statement: "Titik koordinat berikut ini yang terletak di dalam daerah lingkaran $x^2 + y^2 = 20$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(2, 3)$",
      "$(4, 3)$",
      "$(2, 4)$",
      "$(5, 0)$",
      "$(-4, 3)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Suatu titik terletak di dalam lingkaran jika jarak dari titik tersebut ke titik pusat kurang dari panjang jari-jarinya, yaitu $x^2 + y^2 < r^2$.",
      steps: "1. Uji titik $(2, 3)$:\n$$2^2 + 3^2 = 4 + 9 = 13$$\nKarena $13 < 20$, titik $(2, 3)$ berada di dalam lingkaran.\n2. Uji pilihan lainnya sebagai pembanding:\n- $(4, 3) \\implies 4^2 + 3^2 = 25 > 20$ (di luar)\n- $(2, 4) \\implies 2^2 + 4^2 = 20 = 20$ (pada lingkaran)\n- $(5, 0) \\implies 5^2 + 0^2 = 25 > 20$ (di luar)\n- $(-4, 3) \\implies (-4)^2 + 3^2 = 25 > 20$ (di luar)\n3. Jadi, titik yang berada di dalam lingkaran adalah $(2, 3)$ (pilihan A).",
      pitfalls: "Terkecoh dengan titik $(2, 4)$ yang nilainya tepat sama dengan 20 (terletak pada batas kurva lingkaran, bukan di dalam)."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Kedudukan Garis Berdasarkan Nilai Diskriminan",
    difficulty: "mudah",
    statement: "Jika persamaan garis lurus disubstitusikan ke dalam persamaan lingkaran menghasilkan persamaan kuadrat sekutu dengan nilai diskriminan $D < 0$, maka kedudukan garis tersebut terhadap lingkaran adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Tidak memotong maupun menyinggung lingkaran (di luar)",
      "Memotong lingkaran di dua titik berbeda",
      "Menyinggung lingkaran di satu titik",
      "Membagi lingkaran menjadi dua juring sama besar",
      "Tepat melalui titik pusat lingkaran"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kedudukan garis terhadap lingkaran ditentukan oleh nilai diskriminan $D = b^2 - 4ac$ dari persamaan kuadrat persekutuan: $D > 0$ memotong di dua titik, $D = 0$ menyinggung di satu titik, dan $D < 0$ tidak memotong maupun menyinggung (di luar lingkaran).",
      steps: "1. Tinjau interpretasi geometris dari diskriminan $D$:\n- $D > 0$: memiliki dua akar real berbeda, garis memotong lingkaran di dua titik.\n- $D = 0$: memiliki satu akar kembar real, garis menyinggung lingkaran di tepat satu titik.\n- $D < 0$: tidak memiliki akar real, garis tidak memiliki titik persekutuan dengan lingkaran.\n2. Berdasarkan data soal bahwa $D < 0$, maka garis tersebut berada sepenuhnya di luar lingkaran tanpa memotong atau menyinggung.\n3. Jadi, jawabannya adalah tidak memotong maupun menyinggung lingkaran (pilihan A).",
      pitfalls: "Tertukar antara kondisi menyinggung ($D = 0$) dengan kondisi garis di luar lingkaran ($D < 0$)."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Kedudukan Garis Horizontal terhadap Lingkaran Pusat Asal",
    difficulty: "mudah",
    statement: "Kedudukan garis lurus $y = 3$ terhadap lingkaran $x^2 + y^2 = 9$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Menyinggung lingkaran di satu titik",
      "Memotong lingkaran di dua titik berbeda",
      "Berada sepenuhnya di luar lingkaran",
      "Melalui titik pusat lingkaran",
      "Memotong lingkaran di titik asal"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis menyinggung lingkaran jika memiliki tepat satu titik potong persekutuan, yang terjadi ketika jarak garis ke titik pusat sama persis dengan panjang jari-jari lingkaran ($d = r$).",
      steps: "1. Lingkaran $x^2 + y^2 = 9$ berpusat di $(0, 0)$ dengan jari-jari $r = \\sqrt{9} = 3$.\n2. Substitusikan persamaan garis $y = 3$ ke persamaan lingkaran:\n$$x^2 + 3^2 = 9$$\n$$x^2 + 9 = 9 \\implies x^2 = 0 \\implies x = 0$$\n3. Persamaan hanya menghasilkan satu solusi real kembar, yaitu $x = 0$, sehingga titik persekutuannya tunggal di $(0, 3)$.\n4. Karena hanya memiliki tepat satu titik persekutuan, maka garis tersebut menyinggung lingkaran.\n5. Jadi, kedudukannya adalah menyinggung lingkaran di satu titik (pilihan A).",
      pitfalls: "Mengira garis memotong di dua titik karena terkecoh melihat angka $9$ dan $3$ tanpa menyubstitusikan ke persamaan."
    }
  }
];
