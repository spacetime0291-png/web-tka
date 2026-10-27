/**
 * Batch Task: TASK_fun-geo-dasar-gradien_EASY
 * SubTopic: Geometri Dasar: Gradien Garis Sejajar & Tegak Lurus (fun-geo-dasar-gradien)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-geo-dasar-gradien-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Membaca Gradien dari Bentuk Eksplisit",
    difficulty: "mudah",
    statement: "Gradien kemiringan garis lurus dengan persamaan $y = 4x - 7$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-7$",
      "$-4$",
      "$\\frac{1}{4}$",
      "$4$",
      "$7$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada bentuk umum eksplisit $y = mx + c$, koefisien di depan variabel $x$ menyatakan nilai kemiringan (gradien) garis $m$.",
      steps: "1. Bandingkan persamaan garis yang diketahui dengan bentuk standar:\n$$y = mx + c$$\n$$y = 4x - 7$$\n2. Dari korespondensi suku-suku diperoleh:\n$$m = 4$$\n3. Jadi, gradien garis tersebut adalah $4$ (pilihan D).",
      pitfalls: "Menjawab $-7$ karena mengira konstanta di belakang adalah nilai gradien."
    }
  },
  {
    id: "fun-geo-dasar-gradien-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Menghitung Gradien Melalui Dua Titik",
    difficulty: "mudah",
    statement: "Gradien garis lurus yang melalui titik $A(2, 5)$ dan titik $B(6, 13)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$",
      "$8$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gradien garis yang melalui dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ dirumuskan sebagai perbandingan perubahan ordinat terhadap absis: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
      steps: "1. Hitung perubahan ordinat ($\\Delta y$):\n$$\\Delta y = 13 - 5 = 8$$\n2. Hitung perubahan absis ($\\Delta x$):\n$$\\Delta x = 6 - 2 = 4$$\n3. Hitung nilai gradien:\n$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{4} = 2$$\n4. Jadi, gradien garis tersebut adalah $2$ (pilihan C).",
      pitfalls: "Terbalik membagi perubahan absis dengan perubahan ordinat $\\frac{4}{8} = \\frac{1}{2}$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Menentukan Gradien dari Bentuk Implisit",
    difficulty: "mudah",
    statement: "Gradien garis dengan persamaan linear $3x + 2y - 6 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk persamaan garis bentuk implisit $Ax + By + C = 0$, gradien garis dirumuskan sebagai $m = -\\frac{A}{B}$.",
      steps: "1. Identifikasi nilai koefisien: $A = 3$, $B = 2$, dan $C = -6$.\n2. Gunakan rumus gradien bentuk implisit:\n$$m = -\\frac{A}{B} = -\\frac{3}{2}$$\n3. (Metode alternatif) Ubah ke bentuk eksplisit:\n$$2y = -3x + 6$$\n$$y = -\\frac{3}{2}x + 3 \\implies m = -\\frac{3}{2}$$\n4. Jadi, gradien garis tersebut adalah $-\\frac{3}{2}$ (pilihan A).",
      pitfalls: "Lupa menyematkan tanda negatif saat memindahkan suku $3x$ ke ruas kanan."
    }
  },
  {
    id: "fun-geo-dasar-gradien-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Syarat Gradien Garis Sejajar",
    difficulty: "mudah",
    statement: "Dua garis lurus dikatakan saling sejajar. Jika gradien garis pertama adalah $m_1 = 5$, maka gradien garis kedua $m_2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-5$",
      "$-\\frac{1}{5}$",
      "$\\frac{1}{5}$",
      "$5$",
      "$10$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dua garis lurus sejajar memiliki kemiringan yang sama, sehingga syarat kesejajarannya adalah $m_1 = m_2$.",
      steps: "1. Diketahui bahwa kedua garis saling sejajar.\n2. Syarat matematis dua garis sejajar adalah:\n$$m_2 = m_1$$\n3. Karena $m_1 = 5$, maka diperoleh:\n$$m_2 = 5$$\n4. Jadi, gradien garis kedua adalah $5$ (pilihan D).",
      pitfalls: "Tertukar dengan syarat garis tegak lurus ($m_1 \\cdot m_2 = -1$) sehingga memilih $-\\frac{1}{5}$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Syarat Gradien Garis Tegak Lurus",
    difficulty: "mudah",
    statement: "Garis $g$ tegak lurus terhadap garis $h$. Jika garis $h$ memiliki gradien $m_h = \\frac{2}{3}$, maka gradien garis $g$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$-1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua garis saling tegak lurus jika hasil kali kedua gradiennya sama dengan $-1$, yaitu $m_g \\cdot m_h = -1$ atau $m_g = -\\frac{1}{m_h}$.",
      steps: "1. Tuliskan syarat dua garis tegak lurus:\n$$m_g \\times m_h = -1$$\n2. Masukkan nilai $m_h = \\frac{2}{3}$:\n$$m_g \\times \\frac{2}{3} = -1$$\n3. Selesaikan untuk $m_g$:\n$$m_g = -\\frac{1}{\\frac{2}{3}} = -\\frac{3}{2}$$\n4. Jadi, gradien garis $g$ adalah $-\\frac{3}{2}$ (pilihan A).",
      pitfalls: "Hanya membalik pecahan tanpa memberi tanda minus sehingga memilih $\\frac{3}{2}$."
    }
  }
];
