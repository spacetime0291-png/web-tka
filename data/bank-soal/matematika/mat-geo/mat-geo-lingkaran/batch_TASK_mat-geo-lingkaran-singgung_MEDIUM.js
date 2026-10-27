/**
 * Batch Task: TASK_mat-geo-lingkaran-singgung_MEDIUM
 * SubTopic: Persamaan Garis Singgung Lingkaran (mat-geo-lingkaran-singgung)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-singgung-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung Tegak Lurus Garis Linier",
    difficulty: "sedang",
    statement: "Salah satu persamaan garis singgung pada lingkaran $(x - 2)^2 + (y + 1)^2 = 20$ yang tegak lurus terhadap garis $2x + y - 5 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x - 2y + 6 = 0$",
      "$x - 2y - 6 = 0$",
      "$2x + y + 6 = 0$",
      "$x + 2y - 14 = 0$",
      "$2x - y - 10 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ yang tegak lurus garis dengan gradien $m_1$ memiliki gradien $m_2 = -\\frac{1}{m_1}$. Persamaan garis singgungnya dirumuskan sebagai $y - b = m_2(x - a) \\pm r\\sqrt{1 + m_2^2}$.",
      steps: "1. Tentukan gradien garis $2x + y - 5 = 0 \\implies m_1 = -2$.\n2. Syarat dua garis saling tegak lurus: $m_1 \\cdot m_2 = -1 \\implies m_2 = \\frac{1}{2}$.\n3. Identifikasi pusat $(a, b) = (2, -1)$ dan jari-jari $r = \\sqrt{20}$.\n4. Masukkan ke rumus garis singgung bergradien:\n$$y - (-1) = \\frac{1}{2}(x - 2) \\pm \\sqrt{20}\\sqrt{1 + \\left(\\frac{1}{2}\\right)^2}$$\n$$y + 1 = \\frac{1}{2}(x - 2) \\pm \\sqrt{20}\\sqrt{\\frac{5}{4}} = \\frac{1}{2}(x - 2) \\pm \\sqrt{25} = \\frac{1}{2}(x - 2) \\pm 5$$\n5. Kalikan kedua ruas dengan 2:\n$$2(y + 1) = (x - 2) \\pm 10 \\implies 2y + 2 = x - 2 \\pm 10$$\n$$x - 2y - 4 \\pm 10 = 0$$\n6. Garis singgung yang mungkin:\n- $x - 2y - 4 + 10 = 0 \\implies x - 2y + 6 = 0$\n- $x - 2y - 4 - 10 = 0 \\implies x - 2y - 14 = 0$\n7. Salah satu garis singgung yang terdapat pada pilihan adalah $x - 2y + 6 = 0$ (pilihan A).",
      pitfalls: "Langsung memakai gradien $m = -2$ tanpa mengubahnya dengan syarat tegak lurus $m_2 = \\frac{1}{2}$."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Persamaan Garis Kutub (Polar) Lingkaran",
    difficulty: "sedang",
    statement: "Persamaan garis kutub (polar) dari titik luar $P(5, 1)$ terhadap lingkaran $x^2 + y^2 = 9$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5x + y - 9 = 0$",
      "$5x + y - 26 = 0$",
      "$x + 5y - 9 = 0$",
      "$5x - y - 9 = 0$",
      "$5x + y + 9 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis kutub (polar) yang ditarik dari titik luar $(x_1, y_1)$ menuju lingkaran $x^2 + y^2 = r^2$ memiliki rumus yang identik dengan rumus bagi adil garis singgung: $x_1 x + y_1 y = r^2$.",
      steps: "1. Amati bahwa titik $P(5, 1)$ berada di luar lingkaran karena $5^2 + 1^2 = 26 > 9$.\n2. Gunakan rumus persamaan garis kutub:\n$$x_1 x + y_1 y = r^2$$\n3. Substitusikan $x_1 = 5$, $y_1 = 1$, dan $r^2 = 9$:\n$$5x + 1y = 9 \\implies 5x + y - 9 = 0$$\n4. Jadi, persamaan garis kutubnya adalah $5x + y - 9 = 0$ (pilihan A).",
      pitfalls: "Mengganti ruas kanan dengan nilai kuasa titik ($26$) alih-alih nilai kuadrat jari-jari lingkaran ($9$)."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Panjang Ruas Garis Singgung dari Titik Luar",
    difficulty: "sedang",
    statement: "Dari titik luar $A(7, 9)$ ditarik garis singgung ke kurva lingkaran $x^2 + y^2 - 4x - 6y - 12 = 0$. Jika titik singgung pada lingkaran adalah $T$, maka panjang ruas garis singgung $AT$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "6",
      "5",
      "$\\sqrt{61}$",
      "8",
      "36"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang ruas garis singgung dari titik $(x_1, y_1)$ ke lingkaran $x^2 + y^2 + Ax + By + C = 0$ dihitung menggunakan akar dari nilai kuasa titik: $|AT| = \\sqrt{x_1^2 + y_1^2 + Ax_1 + By_1 + C}$.",
      steps: "1. Substitusikan titik $A(7, 9)$ ke bentuk umum lingkaran:\n$$K = 7^2 + 9^2 - 4(7) - 6(9) - 12$$\n2. Hitung masing-masing suku:\n$$K = 49 + 81 - 28 - 54 - 12$$\n$$K = 130 - 94 = 36$$\n3. Tarik akar kuadrat dari nilai kuasa tersebut:\n$$|AT| = \\sqrt{K} = \\sqrt{36} = 6$$\n4. Jadi, panjang ruas garis singgung $AT$ adalah 6 satuan (pilihan A).",
      pitfalls: "Lupa menarik akar kuadrat di akhir langkah sehingga memilih nilai kuadrat panjang garis singgung ($36$)."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Sudut Antara Dua Garis Singgung dari Titik Luar",
    difficulty: "sedang",
    statement: "Dari titik luar $P(0, 2\\sqrt{3})$ ditarik dua buah garis singgung ke lingkaran $x^2 + y^2 = 3$. Besar sudut yang dibentuk oleh kedua garis singgung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$120^\\circ$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis singgung lingkaran selalu tegak lurus terhadap jari-jari di titik singgung. Sudut separuh $\\alpha$ antara garis hubung pusat dan garis singgung memenuhi $\\sin(\\alpha) = \\frac{r}{|OP|}$, dan sudut antara kedua garis singgung adalah $2\\alpha$.",
      steps: "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{3}$ dengan pusat $O(0, 0)$.\n2. Hitung jarak titik $P(0, 2\\sqrt{3})$ ke titik pusat $O$:\n$$|OP| = \\sqrt{0^2 + (2\\sqrt{3})^2} = 2\\sqrt{3}$$\n3. Gunakan perbandingan sinus pada segitiga siku-siku singgung:\n$$\\sin(\\alpha) = \\frac{r}{|OP|} = \\frac{\\sqrt{3}}{2\\sqrt{3}} = \\frac{1}{2}$$\n4. Diperoleh sudut separuh $\\alpha = 30^\\circ$.\n5. Sudut total antara kedua garis singgung adalah:\n$$\\theta = 2\\alpha = 2(30^\\circ) = 60^\\circ$$\n6. Jadi, besar sudut yang terbentuk adalah $60^\\circ$ (pilihan A).",
      pitfalls: "Lupa mengalikan sudut $\\alpha$ dengan 2 sehingga langsung menjawab dengan sudut separuh ($30^\\circ$)."
    }
  },
  {
    id: "mat-geo-lingkaran-singgung-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-singgung",
    category: "Garis Singgung Sejajar Garis Lain pada Bentuk Umum",
    difficulty: "sedang",
    statement: "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 - 2x + 4y - 4 = 0$ yang sejajar dengan garis $3x - 4y + 7 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x - 4y + 4 = 0$",
      "$3x - 4y - 4 = 0$",
      "$4x + 3y + 4 = 0$",
      "$3x - 4y - 11 = 0$",
      "$3x + 4y - 26 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis yang sejajar memiliki gradien yang sama ($m_1 = m_2$). Persamaan garis singgung bergradien $m$ pada lingkaran berpusat di $(a, b)$ dirumuskan sebagai $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$.",
      steps: "1. Tentukan titik pusat dan jari-jari lingkaran:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{-2}{2}, -\\frac{4}{2}\\right) = (1, -2)$$\n$$r = \\sqrt{1^2 + (-2)^2 - (-4)} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$\n2. Tentukan gradien dari garis sejajar $3x - 4y + 7 = 0$:\n$$4y = 3x + 7 \\implies m = \\frac{3}{4}$$\n3. Masukkan ke rumus garis singgung lingkaran:\n$$y - (-2) = \\frac{3}{4}(x - 1) \\pm 3\\sqrt{1 + \\left(\\frac{3}{4}\\right)^2}$$\n$$y + 2 = \\frac{3}{4}(x - 1) \\pm 3\\sqrt{\\frac{25}{16}} = \\frac{3}{4}(x - 1) \\pm 3\\left(\\frac{5}{4}\\right) = \\frac{3}{4}(x - 1) \\pm \\frac{15}{4}$$\n4. Kalikan seluruh ruas dengan 4:\n$$4(y + 2) = 3(x - 1) \\pm 15$$\n$$4y + 8 = 3x - 3 \\pm 15 \\implies 3x - 4y - 11 \\pm 15 = 0$$\n5. Garis singgung yang mungkin:\n- $3x - 4y - 11 + 15 = 0 \\implies 3x - 4y + 4 = 0$\n- $3x - 4y - 11 - 15 = 0 \\implies 3x - 4y - 26 = 0$\n6. Salah satu persamaan yang tersedia pada opsi adalah $3x - 4y + 4 = 0$ (pilihan A).",
      pitfalls: "Kesalahan saat memindahkan suku pada manipulasi aljabar $4y + 8 = 3x - 3 \\pm 15$ sehingga salah menghitung konstanta."
    }
  }
];
