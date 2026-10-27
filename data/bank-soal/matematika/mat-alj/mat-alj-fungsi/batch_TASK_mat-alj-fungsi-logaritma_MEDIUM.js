/**
 * Batch Task: TASK_mat-alj-fungsi-logaritma_MEDIUM
 * SubTopic: Fungsi Logaritma (mat-alj-fungsi-logaritma)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-logaritma-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Asimtot Tegak dan Perpotongan Garis",
    difficulty: "sedang",
    statement: "Diketahui grafik fungsi logaritma $f(x) = {}^2\\log(x - 3) + 1$. Persamaan asimtot tegak dari grafik fungsi tersebut dan titik potongnya dengan garis horizontal $y = 3$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Garis $x = 3$ dan titik $(7, 3)$",
      "Garis $x = -3$ dan titik $(7, 3)$",
      "Garis $x = 3$ dan titik $(5, 3)$",
      "Garis $y = 1$ dan titik $(7, 3)$",
      "Garis $x = 0$ dan titik $(4, 3)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Asimtot tegak kurva fungsi logaritma $f(x) = {}^a\\log(x - h) + k$ terjadi pada garis pembuat nol numerus, yaitu $x = h$. Titik potong kurva dengan garis horizontal $y = c$ diperoleh dengan menyelesaikan persamaan $f(x) = c$.",
      steps: "1. Tentukan asimtot tegak: Syarat batas numerus adalah $x - 3 = 0$, sehingga asimtot tegaknya adalah garis vertikal $x = 3$.\n2. Tentukan titik potong dengan garis $y = 3$ dengan menyamakan nilai fungsi:\n$${}^2\\log(x - 3) + 1 = 3$$\n3. Kurangkan kedua ruas dengan 1:\n$${}^2\\log(x - 3) = 2$$\n4. Ubah ke bentuk perpangkatan eksponensial:\n$$x - 3 = 2^2 = 4 \\implies x = 7$$\n5. Jadi, koordinat titik potongnya adalah $(7, 3)$.",
      pitfalls: "Sering salah menentukan asimtot tegak menjadi $x = -3$ akibat salah memindahkan tanda pada bentuk $(x - 3)$, atau keliru mengubah ${}^2\\log(x-3) = 2$ menjadi $x-3 = 2 \\times 2 = 4$ padahal konversi yang benar adalah $2^2$."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Invers Fungsi Logaritma",
    difficulty: "sedang",
    statement: "Invers dari fungsi logaritma $f(x) = {}^3\\log(2x + 1) - 4$ untuk interval domain $x > -\\frac{1}{2}$ adalah $f^{-1}(x) = ....$",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3^{x+4} - 1}{2}$",
      "$\\frac{3^{x-4} - 1}{2}$",
      "$\\frac{3^{x+4} + 1}{2}$",
      "$3^{\\frac{x+4}{2}} - 1$",
      "$\\frac{3^{2x+1} - 4}{2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Invers dari suatu fungsi logaritma merupakan fungsi eksponensial. Prosedur pencarian invers dilakukan dengan menyatakan variabel $x$ dalam bentuk variabel $y$, lalu menukar kembali kedua variabel tersebut.",
      steps: "1. Nyatakan persamaan fungsi sebagai $y$:\n$$y = {}^3\\log(2x + 1) - 4$$\n2. Tambahkan kedua ruas dengan 4 untuk mengisolasi suku logaritma:\n$$y + 4 = {}^3\\log(2x + 1)$$\n3. Ubah bentuk logaritma ke bentuk eksponensial dengan basis 3:\n$$2x + 1 = 3^{y + 4}$$\n4. Selesaikan untuk variabel $x$:\n$$2x = 3^{y + 4} - 1 \\implies x = \\frac{3^{y + 4} - 1}{2}$$\n5. Ganti variabel $y$ dengan $x$ sehingga diperoleh rumus invers:\n$$f^{-1}(x) = \\frac{3^{x + 4} - 1}{2}$$",
      pitfalls: "Keliru memindahkan konstanta $-4$ menjadi $-4$ pada eksponen (seharusnya bertanda positif $+4$), atau salah membagi seluruh bentuk dengan $2$."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Parameter Kurva Logaritma",
    difficulty: "sedang",
    statement: "Kurva grafik fungsi logaritma $f(x) = a \\cdot {}^2\\log(x + b)$ melalui titik $(1, 6)$ dan titik $(5, 9)$ dengan $a, b > 0$. Nilai dari $a + b$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    correctIndex: 2,
    solution: {
      concept: "Parameter fungsi ditentukan dengan membentuk sistem persamaan nonlinier dari titik-titik yang dilalui oleh kurva, lalu menggunakan sifat perbandingan logaritma.",
      steps: "1. Substitusikan titik $(1, 6)$ ke persamaan:\n$$a \\cdot {}^2\\log(1 + b) = 6 \\implies a = \\frac{6}{{}^2\\log(1 + b)}$$\n2. Substitusikan titik $(5, 9)$ ke persamaan:\n$$a \\cdot {}^2\\log(5 + b) = 9$$\n3. Bagi persamaan kedua dengan persamaan pertama:\n$$\\frac{{}^2\\log(5 + b)}{{}^2\\log(1 + b)} = \\frac{9}{6} = \\frac{3}{2}$$\n4. Kalikan silang dan terapkan sifat pangkat logaritma:\n$$2 \\cdot {}^2\\log(5 + b) = 3 \\cdot {}^2\\log(1 + b) \\implies {}^2\\log((5 + b)^2) = {}^2\\log((1 + b)^3)$$\n5. Samakan numerus:\n$$(5 + b)^2 = (1 + b)^3$$\nUntuk bilangan bulat positif $b = 3$, diperoleh $(5 + 3)^2 = 8^2 = 64$ dan $(1 + 3)^3 = 4^3 = 64$ (terpenuhi).\n6. Cari nilai $a$ dengan $b = 3$:\n$$a = \\frac{6}{{}^2\\log(1 + 3)} = \\frac{6}{{}^2\\log(4)} = \\frac{6}{2} = 3$$\n7. Hitung $a + b = 3 + 3 = 6$.",
      pitfalls: "Kesalahan aljabar saat membagi kedua persamaan logaritma atau keliru mengaplikasikan sifat koefisien di depan logaritma menjadi pangkat numerus."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Titik Potong Dua Kurva Logaritma",
    difficulty: "sedang",
    statement: "Absis titik potong antara kurva $f(x) = {}^2\\log(x + 2)$ dan kurva $g(x) = {}^2\\log(14 - x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "4",
      "6",
      "8",
      "12"
    ],
    correctIndex: 2,
    solution: {
      concept: "Titik potong dua grafik logaritma dengan basis yang sama ditentukan dengan menyamakan kedua fungsi $f(x) = g(x)$ serta memastikan solusi memenuhi irisan syarat numerus kedua fungsi.",
      steps: "1. Tentukan syarat numerus: $x + 2 > 0 \\implies x > -2$ dan $14 - x > 0 \\implies x < 14$. Interval domain bersama adalah $-2 < x < 14$.\n2. Samakan kedua persamaan fungsi:\n$${}^2\\log(x + 2) = {}^2\\log(14 - x)$$\n3. Karena basis sama-sama bernilai 2, maka samakan numerusnya:\n$$x + 2 = 14 - x$$\n4. Pindahkan variabel ke satu ruas:\n$$2x = 12 \\implies x = 6$$\n5. Uji pada domain bersama: $x = 6$ berada di dalam interval $-2 < x < 14$, sehingga nilai absis yang memenuhi adalah $x = 6$ (pilihan C).",
      pitfalls: "Lupa memeriksa apakah nilai absis yang diperoleh memenuhi syarat numerus positif untuk kedua kurva logaritma."
    }
  },
  {
    id: "mat-alj-fungsi-logaritma-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-logaritma",
    category: "Titik Potong Grafik Logaritma dengan Sumbu Koordinat",
    difficulty: "sedang",
    statement: "Diketahui grafik fungsi logaritma $f(x) = {}^2\\log(x + 4) - 3$. Jika kurva memotong sumbu-$X$ di titik $(p, 0)$ dan memotong sumbu-$Y$ di titik $(0, q)$, maka nilai dari $p - q$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "3",
      "5",
      "7",
      "9"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perpotongan kurva dengan sumbu-$X$ dicari dengan menetapkan $y = 0$, sedangkan perpotongan kurva dengan sumbu-$Y$ dicari dengan menetapkan $x = 0$.",
      steps: "1. Cari perpotongan dengan sumbu-$X$ ($y = 0$):\n$${}^2\\log(p + 4) - 3 = 0 \\implies {}^2\\log(p + 4) = 3$$\n$$p + 4 = 2^3 = 8 \\implies p = 8 - 4 = 4$$\n2. Cari perpotongan dengan sumbu-$Y$ ($x = 0$):\n$$q = f(0) = {}^2\\log(0 + 4) - 3 = {}^2\\log(4) - 3 = 2 - 3 = -1$$\n3. Hitung nilai $p - q$:\n$$p - q = 4 - (-1) = 4 + 1 = 5$$\n4. Jadi, diperoleh nilai $p - q = 5$ (pilihan C).",
      pitfalls: "Kekeliruan tanda saat melakukan pengurangan bilangan negatif $p - q = 4 - (-1)$ yang sering salah dihitung menjadi $4 - 1 = 3$."
    }
  }
];
