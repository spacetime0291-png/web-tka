/**
 * Batch Task: TASK_fun-geo-dasar-gradien_MEDIUM
 * SubTopic: Geometri Dasar: Gradien Garis Sejajar & Tegak Lurus (fun-geo-dasar-gradien)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-geo-dasar-gradien-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Persamaan Garis Sejajar Melalui Titik Tertentu",
    difficulty: "sedang",
    statement: "Persamaan garis yang melalui titik $(2, -3)$ dan sejajar dengan garis $3x - y + 4 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x - y - 9 = 0$",
      "$3x - y + 9 = 0$",
      "$3x + y - 3 = 0$",
      "$x + 3y + 7 = 0$",
      "$3x - y - 3 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis yang sejajar dengan $3x - y + C = 0$ memiliki koefisien variabel yang sama ($3x - y$), sehingga memiliki gradien $m = 3$.",
      steps: "1. Tentukan gradien garis acuan $3x - y + 4 = 0$:\n$$y = 3x + 4 \\implies m_1 = 3$$\n2. Karena sejajar, maka gradien garis baru adalah $m_2 = m_1 = 3$.\n3. Susun persamaan garis melalui titik $(x_1, y_1) = (2, -3)$:\n$$y - (-3) = 3(x - 2)$$\n$$y + 3 = 3x - 6$$\n4. Ubah ke bentuk implisit:\n$$3x - y - 6 - 3 = 0$$\n$$3x - y - 9 = 0$$\n5. Jadi, persamaan garisnya adalah $3x - y - 9 = 0$ (pilihan A).",
      pitfalls: "Kesalahan tanda saat memasukkan ordinat negatif $y - (-3) = y + 3$ sehingga menghasilkan $3x - y - 3 = 0$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Persamaan Garis Tegak Lurus Melalui Titik Tertentu",
    difficulty: "sedang",
    statement: "Persamaan garis yang melalui titik $(-1, 4)$ dan tegak lurus terhadap garis $2x + 4y - 5 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x - y + 6 = 0$",
      "$2x + y - 2 = 0$",
      "$x - 2y + 9 = 0$",
      "$2x - y - 6 = 0$",
      "$4x - 2y + 12 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gradien garis yang tegak lurus adalah lawan dan kebalikan dari gradien garis asal ($m_2 = -\\frac{1}{m_1}$).",
      steps: "1. Cari gradien garis asal $2x + 4y - 5 = 0$:\n$$m_1 = -\\frac{A}{B} = -\\frac{2}{4} = -\\frac{1}{2}$$\n2. Tentukan gradien garis tegak lurus:\n$$m_2 = -\\frac{1}{m_1} = -\\frac{1}{-\\frac{1}{2}} = 2$$\n3. Susun persamaan garis melalui $(-1, 4)$ dengan gradien $m = 2$:\n$$y - 4 = 2(x - (-1))$$\n$$y - 4 = 2(x + 1)$$\n$$y - 4 = 2x + 2$$\n4. Pindahkan semua suku ke ruas kanan:\n$$2x - y + 6 = 0$$\n5. Jadi, persamaan garisnya adalah $2x - y + 6 = 0$ (pilihan A).",
      pitfalls: "Menggunakan gradien $-\\frac{1}{2}$ (syarat sejajar) bukan gradien tegak lurus $2$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Menentukan Koordinat Parameter Garis Tegak Lurus",
    difficulty: "sedang",
    statement: "Garis yang menghubungkan titik $(1, p)$ dan $(4, 7)$ tegak lurus dengan garis $3x + 2y - 1 = 0$. Nilai dari $p$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dua garis tegak lurus memenuhi $m_1 \\cdot m_2 = -1$. Gradien garis dari dua titik disamakan dengan gradien tegak lurus garis acuan.",
      steps: "1. Tentukan gradien garis $3x + 2y - 1 = 0$:\n$$m_1 = -\\frac{3}{2}$$\n2. Karena tegak lurus, gradien garis yang melalui kedua titik adalah:\n$$m_2 = -\\frac{1}{m_1} = \\frac{2}{3}$$\n3. Hitung gradien garis melalui titik $(1, p)$ dan $(4, 7)$:\n$$m = \\frac{7 - p}{4 - 1} = \\frac{7 - p}{3}$$\n4. Samakan kedua nilai gradien:\n$$\\frac{7 - p}{3} = \\frac{2}{3} \\implies 7 - p = 2 \\implies p = 5$$\n5. Jadi, nilai $p$ adalah $5$ (pilihan D).",
      pitfalls: "Menyamakan langsung dengan $-\\frac{3}{2}$ (kondisi garis sejajar) sehingga menghasilkan $p = 11{,}5$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Hubungan Tegak Lurus Dua Persamaan Implisit",
    difficulty: "sedang",
    statement: "Diketahui garis $g_1: 4x + ky = 8$ dan garis $g_2: 3x - 6y = 12$. Jika garis $g_1$ tegak lurus terhadap garis $g_2$, maka nilai dari $k$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$-1$",
      "$1$",
      "$2$",
      "$4$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dua garis $A_1 x + B_1 y + C_1 = 0$ dan $A_2 x + B_2 y + C_2 = 0$ saling tegak lurus jika dan hanya jika $A_1 A_2 + B_1 B_2 = 0$.",
      steps: "1. Tentukan koefisien masing-masing garis:\n$$A_1 = 4, \\quad B_1 = k$$\n$$A_2 = 3, \\quad B_2 = -6$$\n2. Terapkan syarat tegak lurus $A_1 A_2 + B_1 B_2 = 0$:\n$$4(3) + k(-6) = 0$$\n$$12 - 6k = 0$$\n3. Selesaikan untuk nilai $k$:\n$$6k = 12 \\implies k = 2$$\n4. Jadi, nilai konstanta $k$ adalah $2$ (pilihan D).",
      pitfalls: "Mengabaikan tanda minus pada koefisien $B_2 = -6$ sehingga mendapatkan nilai $k = -2$."
    }
  },
  {
    id: "fun-geo-dasar-gradien-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-gradien",
    category: "Persamaan Garis Sumbu (Perpendicular Bisector)",
    difficulty: "sedang",
    statement: "Persamaan garis bagi tegak lurus (garis sumbu) dari ruas garis yang menghubungkan titik $A(2, 1)$ dan titik $B(6, 5)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x + y - 7 = 0$",
      "$x - y - 1 = 0$",
      "$x + y - 6 = 0$",
      "$2x + y - 11 = 0$",
      "$x - y + 7 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis sumbu adalah garis yang melalui titik tengah ruas garis $AB$ dan bergradien tegak lurus terhadap gradien garis $AB$.",
      steps: "1. Tentukan koordinat titik tengah ruas garis $AB$:\n$$M = \\left(\\frac{2 + 6}{2}, \\frac{1 + 5}{2}\\right) = (4, 3)$$\n2. Tentukan gradien ruas garis $AB$:\n$$m_{AB} = \\frac{5 - 1}{6 - 2} = \\frac{4}{4} = 1$$\n3. Tentukan gradien garis sumbu (tegak lurus terhadap $AB$):\n$$m = -\\frac{1}{m_{AB}} = -\\frac{1}{1} = -1$$\n4. Susun persamaan garis melalui $M(4, 3)$ dengan gradien $m = -1$:\n$$y - 3 = -1(x - 4)$$\n$$y - 3 = -x + 4$$\n$$x + y - 7 = 0$$\n5. Jadi, persamaan garis sumbu adalah $x + y - 7 = 0$ (pilihan A).",
      pitfalls: "Menggunakan titik $A$ atau titik $B$ sebagai titik acuan, bukan titik tengah $M$."
    }
  }
];
