/**
 * Batch Task: TASK_mat-geo-trans-rotasi_MEDIUM
 * SubTopic: Transformasi Geometri: Rotasi (mat-geo-trans-rotasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-trans-rotasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik terhadap Pusat P(a, b) Sebesar +90 Derajat",
    difficulty: "sedang",
    statement: "Titik $A(5, 2)$ dirotasikan sejauh $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat titik $P(1, -1)$. Koordinat bayangan titik $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-2, 3)$",
      "$(2, -3)$",
      "$(-3, 2)$",
      "$(3, -2)$",
      "$(-2, -3)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Rotasi titik $(x, y)$ terhadap pusat $(a, b)$ sebesar $+90^\\circ$ berlawanan arah jarum jam memenuhi relasi matriks $\\begin{pmatrix} x' - a \\\\ y' - b \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix}$, yang menghasilkan $x' - a = -(y - b)$ dan $y' - b = x - a$.",
      steps: "1. Identifikasi koordinat titik asal $x = 5, y = 2$ dan titik pusat $a = 1, b = -1$.\n2. Hitung selisih terhadap titik pusat:\n$$x - a = 5 - 1 = 4$$\n$$y - b = 2 - (-1) = 3$$\n3. Terapkan rumus rotasi $90^\\circ$:\n$$x' - 1 = -(3) = -3 \\implies x' = 1 - 3 = -2$$\n$$y' - (-1) = 4 \\implies y' + 1 = 4 \\implies y' = 3$$\n4. Diperoleh koordinat bayangan $A'(-2, 3)$.\n5. Jadi, koordinat bayangannya adalah $(-2, 3)$ (pilihan A).",
      pitfalls: "Lupa memperhitungkan pergeseran koordinat terhadap titik pusat $(a, b)$ dan langsung mengalikan titik asal dengan matriks rotasi titik pusat $(0,0)$."
    }
  },
  {
    id: "mat-geo-trans-rotasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Garis Lurus terhadap Pusat O(0, 0) Sebesar +90 Derajat",
    difficulty: "sedang",
    statement: "Persamaan bayangan garis $g: 2x + 5y - 10 = 0$ oleh rotasi dengan pusat $O(0, 0)$ sebesar $90^\\circ$ berlawanan arah putaran jarum jam adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5x + 2y - 10 = 0$",
      "$5x - 2y + 10 = 0$",
      "$2x - 5y + 10 = 0$",
      "$5x - 2y - 10 = 0$",
      "$2x + 5y + 10 = 0$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Rotasi $[O, 90^\\circ]$ memetakan koordinat menurut $x' = -y \\iff y = -x'$ dan $y' = x \\iff x = y'$. Substitusikan relasi variabel lama dalam variabel baru ke persamaan garis asal.",
      steps: "1. Nyatakan $x$ dan $y$ dalam bentuk bayangan $x'$ dan $y'$:\n$$x = y'$$\n$$y = -x'$$\n2. Substitusikan ke dalam persamaan garis $g: 2x + 5y - 10 = 0$:\n$$2(y') + 5(-x') - 10 = 0$$\n$$-5x' + 2y' - 10 = 0$$\n3. Kalikan kedua ruas dengan $-1$ agar koefisien $x$ bernilai positif:\n$$5x' - 2y' + 10 = 0$$\n4. Diperoleh persamaan garis bayangan $5x - 2y + 10 = 0$ (pilihan B).",
      pitfalls: "Salah memasukkan substitusi variabel (misalnya tertukar antara $x = -y'$ dan $y = x'$)."
    }
  },
  {
    id: "mat-geo-trans-rotasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Titik terhadap Pusat P(a, b) Sebesar 180 Derajat",
    difficulty: "sedang",
    statement: "Titik $B(a, 3)$ dirotasikan sebesar $180^\\circ$ dengan pusat titik $P(2, -1)$ sehingga menghasilkan bayangan $B'(6, b)$. Nilai dari $a \\times b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-10$",
      "$-7$",
      "$7$",
      "$10$",
      "$12$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rotasi $180^\\circ$ terhadap pusat $P(x_p, y_p)$ menjadikan titik $P$ sebagai titik tengah antara titik asal $(x, y)$ dan titik bayangan $(x', y')$, sehingga berlaku hubungan titik tengah: $x_p = \\frac{x + x'}{2}$ dan $y_p = \\frac{y + y'}{2}$.",
      steps: "1. Terapkan rumus titik tengah pada absis dengan pusat $x_p = 2$:\n$$\\frac{a + 6}{2} = 2 \\implies a + 6 = 4 \\implies a = -2$$\n2. Terapkan rumus titik tengah pada ordinat dengan pusat $y_p = -1$:\n$$\\frac{3 + b}{2} = -1 \\implies 3 + b = -2 \\implies b = -5$$\n3. Hitung hasil kali $a \\times b$:\n$$a \\times b = (-2) \\times (-5) = 10$$\n4. Jadi, nilai $a \\times b$ adalah $10$ (pilihan D).",
      pitfalls: "Lupa mengalikan 2 pada koordinat pusat saat menyelesaikan persamaan titik tengah."
    }
  },
  {
    id: "mat-geo-trans-rotasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Komposisi Dua Rotasi Sepusat",
    difficulty: "sedang",
    statement: "Titik $C(4, 2)$ dirotasikan terhadap pusat $P(1, 2)$ sebesar $35^\\circ$, kemudian dilanjutkan dengan rotasi terhadap pusat $P(1, 2)$ yang sama sebesar $55^\\circ$ berlawanan arah putaran jarum jam. Koordinat bayangan akhir titik $C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(1, 5)$",
      "$(1, -5)$",
      "$(-1, 5)$",
      "$(5, 1)$",
      "$(3, 5)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua rotasi berurutan yang memiliki titik pusat yang sama bersesuaian dengan rotasi tunggal dengan titik pusat tersebut dan besar sudut total sama dengan jumlah kedua sudut rotasi: $\\theta_{\\text{total}} = \\theta_1 + \\theta_2$.",
      steps: "1. Hitung sudut total rotasi:\n$$\\theta_{\\text{total}} = 35^\\circ + 55^\\circ = 90^\\circ$$\n2. Transformasi setara dengan rotasi tunggal $[P(1, 2), 90^\\circ]$ terhadap titik asal $C(4, 2)$:\n$$x - a = 4 - 1 = 3$$\n$$y - b = 2 - 2 = 0$$\n3. Terapkan rumus rotasi $90^\\circ$ berpusat di $(a, b)$:\n$$x' - a = -(y - b) = -(0) = 0 \\implies x' = a = 1$$\n$$y' - b = x - a = 3 \\implies y' = b + 3 = 2 + 3 = 5$$\n4. Diperoleh bayangan akhir $C'(1, 5)$.\n5. Jadi, koordinat bayangan akhir titik $C$ adalah $(1, 5)$ (pilihan A).",
      pitfalls: "Menghitung rotasi sudut bukan istimewa $35^\\circ$ satu per satu yang sangat rumit, alih-alih memanfaatkan sifat aditif rotasi sepusat."
    }
  },
  {
    id: "mat-geo-trans-rotasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-rotasi",
    category: "Rotasi Lingkaran terhadap Pusat O(0, 0)",
    difficulty: "sedang",
    statement: "Lingkaran $L: (x - 4)^2 + (y - 1)^2 = 9$ dirotasikan terhadap pusat $O(0, 0)$ sebesar $270^\\circ$ searah jarum jam. Persamaan bayangan lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 1)^2 + (y + 4)^2 = 9$",
      "$(x - 4)^2 + (y - 1)^2 = 9$",
      "$(x + 1)^2 + (y - 4)^2 = 9$",
      "$(x + 4)^2 + (y + 1)^2 = 9$",
      "$(x - 1)^2 + (y - 4)^2 = 9$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rotasi sebesar $270^\\circ$ searah jarum jam memiliki sudut $\\theta = -270^\\circ$, yang secara posisi sudut setara dengan rotasi $+90^\\circ$ berlawanan arah jarum jam $(-270^\\circ + 360^\\circ = +90^\\circ)$. Rotasi mempertahankan jari-jari lingkaran ($r' = r$), sehingga cukup merotasikan titik pusat lingkaran.",
      steps: "1. Dari persamaan awal $(x - 4)^2 + (y - 1)^2 = 9$, diperoleh pusat lingkaran awal $P(4, 1)$ dan $r = 3$.\n2. Sudut rotasi $-270^\\circ$ ekuivalen dengan $+90^\\circ$:\n$$x_p' = -y_p = -1$$\n$$y_p' = x_p = 4$$\nPusat lingkaran bayangan adalah $P'(-1, 4)$.\n3. Bentuk persamaan lingkaran bayangan dengan pusat $(-1, 4)$ dan jari-jari $r = 3$:\n$$(x - (-1))^2 + (y - 4)^2 = 3^2$$\n$$(x + 1)^2 + (y - 4)^2 = 9$$\n4. Jadi, persamaan lingkaran bayangan adalah $(x + 1)^2 + (y - 4)^2 = 9$ (pilihan C).",
      pitfalls: "Salah mengonversi rotasi searah jarum jam menjadi sudut positif, atau salah memasukkan tanda pusat lingkaran $(-1, 4)$ ke bentuk baku persamaan lingkaran."
    }
  }
];
