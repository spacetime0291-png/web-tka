/**
 * Batch Task: TASK_fun-geo-dasar-jarak_EASY
 * SubTopic: Geometri Dasar: Jarak Titik ke Garis (fun-geo-dasar-jarak)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-geo-dasar-jarak-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik Asal ke Garis Lurus",
    difficulty: "mudah",
    statement: "Jarak tegak lurus dari titik pusat koordinat $O(0, 0)$ ke garis dengan persamaan $3x + 4y - 15 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$\\frac{15}{7}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jarak dari titik $(x_0, y_0)$ ke garis $Ax + By + C = 0$ dirumuskan sebagai $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
      steps: "1. Substitusikan titik asal $(x_0, y_0) = (0, 0)$ ke dalam rumus jarak:\n$$d = \\frac{|3(0) + 4(0) - 15|}{\\sqrt{3^2 + 4^2}}$$\n2. Hitung nilai mutlak pada pembilang:\n$$|0 + 0 - 15| = |-15| = 15$$\n3. Hitung akar kuadrat pada penyebut:\n$$\\sqrt{9 + 16} = \\sqrt{25} = 5$$\n4. Lakukan pembagian:\n$$d = \\frac{15}{5} = 3$$\n5. Jadi, jarak titik asal ke garis tersebut adalah $3$ satuan (pilihan B).",
      pitfalls: "Lupa menghitung nilai mutlak sehingga menghasilkan nilai jarak bertanda negatif $-3$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik ke Garis Horizontal",
    difficulty: "mudah",
    statement: "Jarak tegak lurus dari titik $P(1, 2)$ ke garis horizontal $y = 5$ adalah ....",
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
      concept: "Jarak dari sembarang titik $(x_0, y_0)$ ke garis horizontal $y = k$ adalah selisih mutlak ordinatnya: $d = |y_0 - k|$.",
      steps: "1. Identifikasi ordinat titik $P(1, 2)$, yaitu $y_0 = 2$.\n2. Identifikasi garis horizontal $y = 5$.\n3. Hitung selisih mutlak ordinat:\n$$d = |2 - 5| = |-3| = 3$$\n4. Jadi, jarak titik $P$ ke garis horizontal tersebut adalah $3$ satuan (pilihan C).",
      pitfalls: "Memasukkan nilai absis $x = 1$ ke dalam perhitungan padahal garis horizontal sejajar dengan sumbu-$X$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik ke Garis Vertikal",
    difficulty: "mudah",
    statement: "Jarak tegak lurus dari titik $Q(4, -3)$ ke garis vertikal $x = -1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$6$",
      "$\\sqrt{10}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jarak dari sembarang titik $(x_0, y_0)$ ke garis vertikal $x = h$ adalah selisih mutlak absisnya: $d = |x_0 - h|$.",
      steps: "1. Identifikasi absis titik $Q(4, -3)$, yaitu $x_0 = 4$.\n2. Garis vertikal memiliki persamaan $x = -1$.\n3. Hitung jarak mutlak absis:\n$$d = |4 - (-1)| = |4 + 1| = 5$$\n4. Jadi, jarak titik $Q$ ke garis vertikal tersebut adalah $5$ satuan (pilihan C).",
      pitfalls: "Salah menghitung operasi tanda minus ganda $4 - (-1)$ menjadi $4 - 1 = 3$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik Sembarang ke Garis Miring",
    difficulty: "mudah",
    statement: "Jarak dari titik $A(2, 1)$ ke garis dengan persamaan $4x - 3y + 5 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$\\frac{7}{5}$",
      "$\\frac{12}{5}$",
      "$3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan rumus standar jarak titik $(x_0, y_0)$ ke garis $Ax + By + C = 0$: $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
      steps: "1. Substitusikan titik $A(2, 1)$ ke bagian pembilang:\n$$|Ax_0 + By_0 + C| = |4(2) - 3(1) + 5| = |8 - 3 + 5| = |10| = 10$$\n2. Hitung panjang vektor normal (penyebut):\n$$\\sqrt{A^2 + B^2} = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$\n3. Hitung hasil bagi:\n$$d = \\frac{10}{5} = 2$$\n4. Jadi, jarak titik $A$ ke garis adalah $2$ satuan (pilihan B).",
      pitfalls: "Keliru dalam menghitung tanda $(-3)^2$ menjadi $-9$ sehingga penyebut menjadi $\\sqrt{7}$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik Asal Menggunakan Tripel Pythagoras 5-12-13",
    difficulty: "mudah",
    statement: "Jarak tegak lurus antara titik asal $O(0, 0)$ ke garis $5x - 12y + 26 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$\\frac{26}{7}$",
      "$3$",
      "$4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jarak titik asal $(0, 0)$ ke garis $Ax + By + C = 0$ dirumuskan secara langsung sebagai $d = \\frac{|C|}{\\sqrt{A^2 + B^2}}$.",
      steps: "1. Substitusikan nilai $A = 5$, $B = -12$, dan $C = 26$:\n$$d = \\frac{|26|}{\\sqrt{5^2 + (-12)^2}}$$\n2. Hitung penyebut menggunakan tripel Pythagoras:\n$$\\sqrt{25 + 144} = \\sqrt{169} = 13$$\n3. Lakukan pembagian:\n$$d = \\frac{26}{13} = 2$$\n4. Jadi, jarak dari titik asal ke garis tersebut adalah $2$ satuan (pilihan B).",
      pitfalls: "Membagi langsung konstanta 26 dengan salah satu koefisien tanpa memperhitungkan panjang resultan normal $\\sqrt{A^2 + B^2}$."
    }
  }
];
