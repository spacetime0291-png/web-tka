/**
 * Batch Task: TASK_mat-alj-polinom-operasi_MEDIUM
 * SubTopic: Operasi Aljabar Polinomial (mat-alj-polinom-operasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-polinom-operasi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Kesamaan Suku Banyak Derajat Tiga",
    difficulty: "sedang",
    statement: "Diketahui kesamaan suku banyak:\n$$x^3 - 2x^2 + 5x - 4 \\equiv (x - 1)(ax^2 + bx + c) + d$$\nNilai dari penjumlahan konstanta $a + b + c + d$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dua suku banyak bernilai identik ($\equiv$) jika dan hanya jika koefisien suku-suku yang bersesuaian pada kedua ruas bernilai sama untuk setiap derajat variabel $x$.",
      steps: "1. Jabarkan ruas kanan:\n$$(x - 1)(ax^2 + bx + c) + d = ax^3 + (b - a)x^2 + (c - b)x + (d - c)$$\n2. Samakan koefisien dengan ruas kiri ($x^3 - 2x^2 + 5x - 4$):\n- Koefisien $x^3$: $a = 1$\n- Koefisien $x^2$: $b - a = -2 \\implies b - 1 = -2 \\implies b = -1$\n- Koefisien $x$: $c - b = 5 \\implies c - (-1) = 5 \\implies c = 4$\n- Konstanta: $d - c = -4 \\implies d - 4 = -4 \\implies d = 0$\n3. Hitung nilai yang ditanyakan:\n$$a + b + c + d = 1 + (-1) + 4 + 0 = 4$$\n4. Jadi nilai $a + b + c + d$ adalah 4 (pilihan C).",
      pitfalls: "Salah tanda pada saat menyamakan koefisien $c - (-1) = c + 1$ atau salah memindahkan ruas."
    }
  },
  {
    id: "mat-alj-polinom-operasi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Jumlah Seluruh Koefisien Polinomial",
    difficulty: "sedang",
    statement: "Jumlah seluruh koefisien dari hasil ekspansi suku banyak $P(x) = (2x^2 - 3x + 2)^{2024} - (x^3 - x + 1)^{2025}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-1",
      "0",
      "1",
      "2",
      "2024"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jumlah seluruh koefisien dari suatu polinomial $P(x)$ dapat ditentukan secara langsung dengan mengevaluasi nilai fungsi polinomial tersebut pada $x = 1$, yaitu menghitung $P(1)$.",
      steps: "1. Terapkan prinsip dasar: $\\sum \\text{koefisien} = P(1)$.\n2. Substitusikan $x = 1$ ke dalam bentuk polinomial:\n$$P(1) = \\left(2(1)^2 - 3(1) + 2\\right)^{2024} - \\left(1^3 - 1 + 1\\right)^{2025}$$\n3. Sederhanakan nilai di dalam tanda kurung:\n- Bagian pertama: $(2 - 3 + 2)^{2024} = (1)^{2024} = 1$\n- Bagian kedua: $(1 - 1 + 1)^{2025} = (1)^{2025} = 1$\n4. Hitung hasil pengurangannya:\n$$P(1) = 1 - 1 = 0$$\n5. Jadi jumlah seluruh koefisien polinomial tersebut adalah 0 (pilihan B).",
      pitfalls: "Mencoba menjabarkan ekspansi binomial berpangkat 2024 yang mustahil dilakukan secara manual."
    }
  },
  {
    id: "mat-alj-polinom-operasi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Ekspansi Binomial dan Kesamaan Koefisien",
    difficulty: "sedang",
    statement: "Diketahui hasil ekspansi polinomial memenuhi kesamaan:\n$$(1 + ax)(1 - 2x)^4 \\equiv 1 - 5x + bx^2 + \\dots$$\nNilai dari $a$ dan $b$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$a = 3$ dan $b = 0$",
      "$a = 3$ dan $b = 6$",
      "$a = -3$ dan $b = 48$",
      "$a = 2$ dan $b = 8$",
      "$a = 4$ dan $b = -8$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gunakan teorema binomial Newton $(1 + y)^n = 1 + n y + \\frac{n(n-1)}{2} y^2 + \\dots$ untuk mengekspansi $(1 - 2x)^4$, kemudian kalikan dengan faktor linear $(1 + ax)$.",
      steps: "1. Jabarkan $(1 - 2x)^4$ hingga suku berderajat 2:\n$$(1 - 2x)^4 = 1 + 4(-2x) + \\frac{4 \\times 3}{2}(-2x)^2 = 1 - 8x + 24x^2$$\n2. Kalikan dengan $(1 + ax)$:\n$$(1 + ax)(1 - 8x + 24x^2) = 1 - 8x + 24x^2 + ax - 8ax^2 + \\dots = 1 + (a - 8)x + (24 - 8a)x^2 + \\dots$$\n3. Samakan dengan koefisien ruas kanan ($1 - 5x + bx^2$):\n- Koefisien $x$: $a - 8 = -5 \\implies a = 3$\n- Koefisien $x^2$: $b = 24 - 8a = 24 - 8(3) = 24 - 24 = 0$\n4. Jadi diperoleh nilai $a = 3$ dan $b = 0$ (pilihan A).",
      pitfalls: "Lupa mengalikan kuadrat pada suku $-2x$ (yaitu $(-2)^2 = 4$) sehingga koefisien binomial menjadi keliru."
    }
  },
  {
    id: "mat-alj-polinom-operasi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Penentuan Polinomial dari Titik Sampel",
    difficulty: "sedang",
    statement: "Sebuah polinomial kuadrat $f(x) = ax^2 + bx + c$ memenuhi nilai $f(1) = 2$, $f(2) = 5$, dan $f(3) = 10$. Nilai dari $f(5)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "20",
      "24",
      "25",
      "26",
      "28"
    ],
    correctIndex: 3,
    solution: {
      concept: "Polinomial berderajat 2 ditentukan secara tunggal oleh 3 titik berbeda. Pola nilai fungsi atau metode beda hingga (*finite differences*) dapat digunakan untuk mengidentifikasi rumus eksplisit $f(x)$.",
      steps: "1. Amati pola nilai $f(x)$:\n- $f(1) = 2 = 1^2 + 1$\n- $f(2) = 5 = 2^2 + 1$\n- $f(3) = 10 = 3^2 + 1$\n2. Tinjau polinomial $g(x) = f(x) - (x^2 + 1)$. Karena $f(x)$ berderajat paling tinggi 2 dan bernilai sama dengan $x^2 + 1$ di 3 titik berbeda ($x = 1, 2, 3$), maka menurut Teorema Fundamental Aljabar, $g(x) \equiv 0$.\n3. Dengan demikian rumus fungsi secara eksak adalah $f(x) = x^2 + 1$.\n4. Hitung nilai $f(5)$:\n$$f(5) = 5^2 + 1 = 25 + 1 = 26$$\n5. Jadi nilai dari $f(5)$ adalah 26 (pilihan D).",
      pitfalls: "Menghitung secara eliminasi manual 3 variabel yang rawan salah hitung tanda aljabar."
    }
  },
  {
    id: "mat-alj-polinom-operasi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Pecahan Parsial dengan Penyebut Kuadrat Tak Teruraikan",
    difficulty: "sedang",
    statement: "Diketahui kesamaan pecahan aljabar polinomial:\n$$\\frac{4x^2 - 3x + 5}{(x - 1)(x^2 + 2)} \\equiv \\frac{A}{x - 1} + \\frac{Bx + C}{x^2 + 2}$$\nNilai dari penjumlahan konstanta $A + B + C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dekomposisi pecahan parsial dengan faktor kuadrat definit $x^2 + 2$ memiliki pembilang berbentuk linear $(Bx + C)$. Kesamaan pembilang diselesaikan dengan substitusi nilai strategis atau menyamakan koefisien.",
      steps: "1. Samakan penyebut kedua ruas sehingga pembilangnya identik:\n$$4x^2 - 3x + 5 \\equiv A(x^2 + 2) + (Bx + C)(x - 1)$$\n2. Substitusikan $x = 1$ untuk mengeliminasi suku $(Bx + C)$:\n$$4(1)^2 - 3(1) + 5 = A(1^2 + 2) + 0 \\implies 6 = 3A \\implies A = 2$$\n3. Samakan koefisien suku $x^2$ pada kedua ruas:\n$$4 = A + B \\implies 4 = 2 + B \\implies B = 2$$\n4. Samakan suku konstanta dengan mensubstitusikan $x = 0$:\n$$5 = A(2) + C(-1) \\implies 5 = 2(2) - C \\implies 5 = 4 - C \\implies C = -1$$\n5. Hitung nilai penjumlahan $A + B + C$:\n$$A + B + C = 2 + 2 + (-1) = 3$$\n6. Jadi nilai $A + B + C$ adalah 3 (pilihan C).",
      pitfalls: "Lupa bahwa konstanta pada suku kedua adalah $-C$ saat $x = 0$ karena dikalikan dengan $(x - 1)$."
    }
  }
];
