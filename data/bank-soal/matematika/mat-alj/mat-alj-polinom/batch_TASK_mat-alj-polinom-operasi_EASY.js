/**
 * Batch Task: TASK_mat-alj-polinom-operasi_EASY
 * SubTopic: Operasi Aljabar Polinomial (mat-alj-polinom-operasi)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-polinom-operasi-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Derajat dan Koefisien Utama Polinomial",
    difficulty: "mudah",
    statement: "Diberikan polinomial $P(x) = (3x^2 - 2)(2x^3 + 5x - 1)$. Derajat dari polinomial $P(x)$ serta koefisien utama dari suku dengan derajat tertinggi tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Derajat 5 dan koefisien 6",
      "Derajat 6 dan koefisien 6",
      "Derajat 5 dan koefisien 5",
      "Derajat 6 dan koefisien 5",
      "Derajat 5 dan koefisien 10"
    ],
    correctIndex: 0,
    solution: {
      concept: "Derajat hasil perkalian dua polinomial $P(x)$ dan $Q(x)$ adalah jumlah dari derajat masing-masing polinomial faktor: $\\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)$. Koefisien utama adalah hasil kali koefisien dari suku-suku berderajat tertinggi kedua faktor.",
      steps: "1. Identifikasi faktor pertama $(3x^2 - 2)$: suku tertinggi adalah $3x^2$ dengan derajat 2 dan koefisien 3.<br>2. Identifikasi faktor kedua $(2x^3 + 5x - 1)$: suku tertinggi adalah $2x^3$ dengan derajat 3 dan koefisien 2.<br>3. Hitung derajat polinomial hasil kali: $\\deg(P) = 2 + 3 = 5$.<br>4. Hitung koefisien utama: $(3) \\times (2) = 6$.<br>5. Jadi polinomial memiliki derajat 5 dan koefisien utama 6 (pilihan A).",
      pitfalls: "Mengalikan pangkat alih-alih menjumlahkannya ($2 \\times 3 = 6$) sehingga mengira berderajat 6."
    }
  },
  {
    id: "mat-alj-polinom-operasi-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Pengurangan dan Perkalian Skalar Polinomial",
    difficulty: "mudah",
    statement: "Diketahui polinomial $P(x) = 4x^3 - 2x^2 + 5x - 7$ dan $Q(x) = 2x^3 + 3x^2 - x + 4$. Bentuk sederhana dari $P(x) - 2Q(x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-8x^2 + 7x - 15$",
      "$-8x^2 + 3x - 15$",
      "$8x^3 - 8x^2 + 7x - 15$",
      "$-8x^2 + 7x + 1$",
      "$-4x^2 + 7x - 15$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Operasi aljabar suku banyak dilakukan dengan mengelompokkan suku-suku yang memiliki variabel dengan pangkat sama (suku sejenis) setelah menerapkan sifat distributif perkalian tanda dan skalar.",
      steps: "1. Tuliskan operasi: $P(x) - 2Q(x) = (4x^3 - 2x^2 + 5x - 7) - 2(2x^3 + 3x^2 - x + 4)$.<br>2. Kalikan skalar $-2$ ke setiap suku di dalam $Q(x)$:<br>$$P(x) - 2Q(x) = 4x^3 - 2x^2 + 5x - 7 - 4x^3 - 6x^2 + 2x - 8$$<br>3. Gabungkan suku-suku sejenis:<br>- Suku $x^3$: $(4 - 4)x^3 = 0x^3$<br>- Suku $x^2$: $(-2 - 6)x^2 = -8x^2$<br>- Suku $x$: $(5 + 2)x = 7x$<br>- Konstanta: $-7 - 8 = -15$<br>4. Diperoleh bentuk akhir: $-8x^2 + 7x - 15$ (pilihan A).",
      pitfalls: "Lupa mengubah tanda pada suku $-x$ saat dikalikan dengan $-2$, sehingga menghasilkan $-2(-x) = -2x$ padahal seharusnya $+2x$."
    }
  },
  {
    id: "mat-alj-polinom-operasi-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Evaluasi Nilai Suku Banyak",
    difficulty: "mudah",
    statement: "Nilai numerik dari suku banyak $F(x) = 2x^4 - 3x^3 + x^2 - 5x + 6$ untuk $x = 2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    correctIndex: 2,
    solution: {
      concept: "Nilai suku banyak $F(x)$ untuk $x = k$ diperoleh dengan mensubstitusikan nilai $k$ secara langsung ke setiap variabel $x$ pada suku banyak tersebut.",
      steps: "1. Substitusikan nilai $x = 2$ ke dalam $F(x)$:<br>$$F(2) = 2(2)^4 - 3(2)^3 + (2)^2 - 5(2) + 6$$<br>2. Hitung nilai perpangkatan:<br>$$2^4 = 16, \\quad 2^3 = 8, \\quad 2^2 = 4$$<br>3. Kalikan dengan koefisien masing-masing suku:<br>$$F(2) = 2(16) - 3(8) + 4 - 10 + 6 = 32 - 24 + 4 - 10 + 6$$<br>4. Selesaikan penjumlahan dan pengurangan:<br>$$F(2) = 8 + 4 - 10 + 6 = 8$$<br>5. Jadi nilai suku banyak $F(2)$ adalah 8 (pilihan C).",
      pitfalls: "Kesalahan urutan operasi hitung antara perpangkatan dan perkalian koefisien, seperti menghitung $2(2)^4$ menjadi $(2 \\times 2)^4 = 256$."
    }
  },
  {
    id: "mat-alj-polinom-operasi-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Kesamaan Suku Banyak Pecahan Parsial",
    difficulty: "mudah",
    statement: "Diketahui kesamaan aljabar pecahan rasional:\n$$\\frac{5x - 2}{(x - 2)(x + 1)} \\equiv \\frac{A}{x - 2} + \\frac{B}{x + 1}$$\nNilai dari penjumlahan konstanta $A + B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    correctIndex: 2,
    solution: {
      concept: "Dua bentuk pecahan aljabar dikatakan identik jika pembilangnya bernilai sama untuk semua nilai variabel $x$. Dengan menyamakan penyebut ruas kanan, kesamaan pembilang dapat langsung dianalisis.",
      steps: "1. Samakan penyebut pada ruas kanan:\n$$\\frac{A(x + 1) + B(x - 2)}{(x - 2)(x + 1)} = \\frac{5x - 2}{(x - 2)(x + 1)}$$\n2. Samakan bagian pembilang kedua ruas:\n$$5x - 2 \\equiv A(x + 1) + B(x - 2) = (A + B)x + (A - 2B)$$\n3. Berdasarkan prinsip kesamaan polinomial, koefisien variabel $x$ pada ruas kiri harus sama dengan koefisien variabel $x$ pada ruas kanan:\n$$A + B = 5$$\n4. Jadi nilai dari $A + B$ langsung diperoleh bernilai 5 (pilihan C).",
      pitfalls: "Menghabiskan waktu menghitung nilai $A$ dan $B$ secara terpisah padahal soal langsung menanyakan jumlah koefisien $(A + B)$."
    }
  },
  {
    id: "mat-alj-polinom-operasi-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-operasi",
    category: "Koefisien Suku Hasil Perkalian Polinomial",
    difficulty: "mudah",
    statement: "Koefisien dari suku $x^3$ pada hasil ekspansi perkalian polinomial $(2x^2 - x + 3)(x^2 + 4x - 5)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    correctIndex: 2,
    solution: {
      concept: "Koefisien dari suku berpangkat tertentu (misalnya $x^3$) pada perkalian dua polinomial dapat diperoleh cukup dengan menjumlahkan hasil kali suku-suku yang jumlah pangkatnya sama dengan 3, tanpa perlu menjabarkan seluruh suku.",
      steps: "1. Tinjau pasangan suku yang menghasilkan variabel $x^3$:\n- Dari faktor pertama suku $x^2$ ($2x^2$) dikali suku $x$ dari faktor kedua ($4x$): $(2x^2)(4x) = 8x^3$\n- Dari faktor pertama suku $x$ ($-x$) dikali suku $x^2$ dari faktor kedua ($x^2$): $(-x)(x^2) = -x^3$\n- Suku konstanta tidak dapat berpasangan menghasilkan $x^3$ karena faktor lainnya berderajat maksimum 2.\n2. Jumlahkan suku-suku sejenis tersebut:\n$$8x^3 - x^3 = 7x^3$$\n3. Jadi koefisien dari suku $x^3$ adalah 7 (pilihan C).",
      pitfalls: "Lupa menyertakan tanda minus pada koefisien suku $(-x)$ sehingga salah menghitung $8 + 1 = 9$."
    }
  }
];
