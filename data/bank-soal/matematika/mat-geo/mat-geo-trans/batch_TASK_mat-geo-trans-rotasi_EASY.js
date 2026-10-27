/**
 * Batch Task: TASK_mat-geo-trans-rotasi_EASY
 * SubTopic: Transformasi Geometri: Rotasi (mat-geo-trans-rotasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-trans-rotasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik terhadap Pusat O(0, 0) Sebesar +90 Derajat",
    difficulty: "mudah",
    statement: "Bayangan titik koordinat $A(4, -3)$ oleh rotasi yang berpusat di titik asal $O(0, 0)$ sejauh $90^\\circ$ berlawanan arah putaran jarum jam adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-3, -4)$",
      "$(3, 4)$",
      "$(-3, 4)$",
      "$(3, -4)$",
      "$(-4, -3)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rotasi titik $P(x, y)$ terhadap pusat $O(0, 0)$ sejauh $+90^\\circ$ menggunakan matriks rotasi $R_{90^\\circ} = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, yang memberikan hubungan $x' = -y$ dan $y' = x$.",
      steps: "1. Titik asal adalah $A(4, -3)$, sehingga $x = 4$ dan $y = -3$.\n2. Hitung absis dan ordinat bayangan:\n$$x' = -y = -(-3) = 3$$\n$$y' = x = 4$$\n3. Diperoleh koordinat bayangan $A'(3, 4)$.\n4. Jadi, bayangan titik $A$ adalah $(3, 4)$ (pilihan B).",
      pitfalls: "Lupa bahwa sudut rotasi positif berarti berlawanan arah jarum jam, atau keliru tanda minus sehingga mendapatkan $(-3, 4)$."
    }
  },
  {
    id: "mat-geo-trans-rotasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik terhadap Pusat O(0, 0) Sebesar 180 Derajat",
    difficulty: "mudah",
    statement: "Titik $B(-5, 8)$ dirotasikan sebesar $180^\\circ$ dengan pusat titik asal $O(0, 0)$. Koordinat titik bayangannya $B'$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, -8)$",
      "$(-5, -8)$",
      "$(8, -5)$",
      "$(-8, 5)$",
      "$(5, 8)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Rotasi sebesar $180^\\circ$ (baik searah maupun berlawanan arah jarum jam) terhadap pusat $O(0, 0)$ membalik tanda kedua koordinat: $(x, y) \\to (-x, -y)$. Matriks rotasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
      steps: "1. Titik asal adalah $B(-5, 8)$, dengan $x = -5$ dan $y = 8$.\n2. Terapkan rumus rotasi $180^\\circ$:\n$$x' = -x = -(-5) = 5$$\n$$y' = -y = -(8) = -8$$\n3. Diperoleh titik bayangan $B'(5, -8)$.\n4. Jadi, jawabannya adalah $(5, -8)$ (pilihan A).",
      pitfalls: "Menukar letak absis dan ordinat layaknya rotasi $90^\\circ$ atau $270^\\circ$."
    }
  },
  {
    id: "mat-geo-trans-rotasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik terhadap Pusat O(0, 0) Sebesar 270 Derajat",
    difficulty: "mudah",
    statement: "Bayangan titik $C(2, 6)$ oleh rotasi sebesar $270^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-6, 2)$",
      "$(-2, -6)$",
      "$(6, 2)$",
      "$(6, -2)$",
      "$(-6, -2)$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rotasi $[O, 270^\\circ]$ berlawanan arah jarum jam ekuivalen dengan rotasi $[O, -90^\\circ]$ searah jarum jam. Matriks transformasinya adalah $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, sehingga $x' = y$ dan $y' = -x$.",
      steps: "1. Diketahui titik $C(2, 6)$, dengan $x = 2$ dan $y = 6$.\n2. Hitung koordinat bayangan:\n$$x' = y = 6$$\n$$y' = -x = -(2) = -2$$\n3. Koordinat bayangan yang dihasilkan adalah $C'(6, -2)$.\n4. Jadi, hasil rotasinya adalah $(6, -2)$ (pilihan D).",
      pitfalls: "Tertukar dengan rotasi $90^\\circ$ berlawanan arah jarum jam yang memiliki rumus $x' = -y$ dan $y' = x$."
    }
  },
  {
    id: "mat-geo-trans-rotasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik Searah Putaran Jarum Jam -90 Derajat",
    difficulty: "mudah",
    statement: "Titik $D(-7, 1)$ dirotasikan sejauh $90^\\circ$ searah jarum jam terhadap titik asal $O(0, 0)$. Koordinat bayangan titik $D$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-1, -7)$",
      "$(1, -7)$",
      "$(-1, 7)$",
      "$(7, -1)$",
      "$(1, 7)$"
    ],
    correctIndex: 4,
    solution: {
      concept: "Rotasi searah putaran jarum jam memiliki sudut negatif, yaitu $\\theta = -90^\\circ$. Hubungan bayangan terhadap titik awal adalah $x' = y$ dan $y' = -x$.",
      steps: "1. Titik awal adalah $D(-7, 1)$, dengan $x = -7$ dan $y = 1$.\n2. Gunakan relasi rotasi $-90^\\circ$:\n$$x' = y = 1$$\n$$y' = -x = -(-7) = 7$$\n3. Koordinat bayangan adalah $D'(1, 7)$.\n4. Jadi, pilihan yang tepat adalah E.",
      pitfalls: "Mengabaikan keterangan 'searah jarum jam' dan menganggap sudut rotasi $+90^\\circ$."
    }
  },
  {
    id: "mat-geo-trans-rotasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Menentukan Sudut Rotasi Titik terhadap Pusat O(0, 0)",
    difficulty: "mudah",
    statement: "Titik $P(3, 4)$ dirotasikan dengan pusat $O(0, 0)$ sebesar sudut $\\alpha$ ($0^\\circ \\le \\alpha \\le 360^\\circ$) berlawanan arah jarum jam sehingga menghasilkan bayangan $P'(-4, 3)$. Besar sudut $\\alpha$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$45^\\circ$",
      "$90^\\circ$",
      "$180^\\circ$",
      "$270^\\circ$",
      "$360^\\circ$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Matriks rotasi pusat $O(0,0)$ adalah $R_\\alpha = \\begin{pmatrix} \\cos \\alpha & -\\sin \\alpha \\\\ \\sin \\alpha & \\cos \\alpha \\end{pmatrix}$. Hubungan koordinat adalah $x' = x\\cos \\alpha - y\\sin \\alpha$ dan $y' = x\\sin \\alpha + y\\cos \\alpha$. Untuk pemetaan $(x, y) \\to (-y, x)$, diperoleh $\\cos \\alpha = 0$ dan $\\sin \\alpha = 1$, yang bersesuaian dengan sudut $\\alpha = 90^\\circ$.",
      steps: "1. Diberikan $(x, y) = (3, 4)$ dan $(x', y') = (-4, 3)$.\n2. Perhatikan pola perubahan nilai:\n$$x' = -4 = -(4) = -y$$\n$$y' = 3 = x$$\n3. Pola $x' = -y$ dan $y' = x$ merupakan karakteristik dari matriks rotasi sejauh $90^\\circ$ berlawanan arah jarum jam.\n4. Jadi, besar sudut $\\alpha$ adalah $90^\\circ$ (pilihan B).",
      pitfalls: "Keliru menyimpulkan sudut sebagai $270^\\circ$ yang memiliki pola berlawanan tanda: $x' = y$ dan $y' = -x$."
    }
  }
];
