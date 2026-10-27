/**
 * Batch Task: TASK_mat-alj-polinom-susun_MEDIUM
 * SubTopic: Pembagian Bersusun (mat-alj-polinom-susun)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-polinom-susun-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Bersusun oleh Pembagi Kuadrat",
    difficulty: "sedang",
    statement: "Suku banyak $P(x) = 2x^4 - x^3 + 3x^2 - 4x + 1$ dibagi oleh $(x^2 - x + 1)$ dengan metode pembagian bersusun. Sisa pembagian yang diperoleh adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-3x - 1$",
      "$-3x + 1$",
      "$3x - 1$",
      "$-7x + 3$",
      "$-x - 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian suku banyak oleh pembagi berbentuk kuadrat definit yang tidak dapat difaktorkan diselesaikan menggunakan algoritma pembagian bersusun panjang hingga menghasilkan sisa dengan derajat kurang dari 2 (bentuk linear $Ax + B$).",
      steps: "1. Bagi $2x^4$ dengan $x^2$ menghasilkan $2x^2$. Kalikan: $2x^2(x^2 - x + 1) = 2x^4 - 2x^3 + 2x^2$.<br>2. Kurangkan: $(2x^4 - x^3 + 3x^2) - (2x^4 - 2x^3 + 2x^2) = x^3 + x^2$. Turunkan $-4x$.<br>3. Bagi $x^3$ dengan $x^2$ menghasilkan $+x$. Kalikan: $x(x^2 - x + 1) = x^3 - x^2 + x$.<br>4. Kurangkan: $(x^3 + x^2 - 4x) - (x^3 - x^2 + x) = 2x^2 - 5x$. Turunkan $+1$.<br>5. Bagi $2x^2$ dengan $x^2$ menghasilkan $+2$. Kalikan: $2(x^2 - x + 1) = 2x^2 - 2x + 2$.<br>6. Kurangkan: $(2x^2 - 5x + 1) - (2x^2 - 2x + 2) = -3x - 1$.<br>7. Jadi sisa pembagian adalah $-3x - 1$ (pilihan A).",
      pitfalls: "Kesalahan tanda saat mengurangkan suku-suku negatif pada setiap tahapan bersusun."
    }
  },
  {
    id: "mat-alj-polinom-susun-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Parameter Habis Dibagi Pembagi Kuadrat",
    difficulty: "sedang",
    statement: "Suku banyak $x^3 + ax^2 - bx + 6$ habis dibagi oleh $(x^2 + x - 2)$. Nilai dari $a + b$ adalah ....",
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
      concept: "Jika suku banyak $P(x)$ habis dibagi oleh $(x^2 + x - 2) = (x + 2)(x - 1)$, maka menurut teorema faktor berlaku $P(-2) = 0$ dan $P(1) = 0$.",
      steps: "1. Faktorkan pembagi: $x^2 + x - 2 = (x + 2)(x - 1)$.<br>2. Substitusikan pembuat nol $x = 1$:<br>$$P(1) = 1^3 + a(1)^2 - b(1) + 6 = 0 \\implies a - b + 7 = 0 \\implies a - b = -7$$<br>3. Substitusikan pembuat nol $x = -2$:<br>$$P(-2) = (-2)^3 + a(-2)^2 - b(-2) + 6 = 0 \\implies -8 + 4a + 2b + 6 = 0 \\implies 4a + 2b = 2 \\implies 2a + b = 1$$<br>4. Selesaikan SPLDV dengan menjumlahkan kedua persamaan:<br>$$(a - b) + (2a + b) = -7 + 1 \\implies 3a = -6 \\implies a = -2$$<br>Substitusikan ke persamaan pertama: $-2 - b = -7 \\implies b = 5$.<br>5. Hitung nilai $a + b = -2 + 5 = 3$.<br>6. Jadi nilai $a + b$ adalah 3 (pilihan C).",
      pitfalls: "Lupa bahwa $(-2)^3 = -8$ dan $-b(-2) = +2b$."
    }
  },
  {
    id: "mat-alj-polinom-susun-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Rekonstruksi Polinomial dari Hasil Bagi dan Sisa",
    difficulty: "sedang",
    statement: "Sebuah suku banyak $P(x)$ jika dibagi oleh $(x^2 - 2x + 3)$ menghasilkan hasil bagi $(2x - 1)$ dan sisa pembagian $(3x + 4)$. Bentuk eksplisit suku banyak $P(x)$ tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2x^3 - 5x^2 + 11x + 1$",
      "$2x^3 - 5x^2 + 8x + 1$",
      "$2x^3 - 3x^2 + 11x - 1$",
      "$2x^3 - 5x^2 + 5x + 7$",
      "$2x^3 + 5x^2 + 11x + 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Identitas pembagian suku banyak menyatakan bahwa polinomial asal diperoleh dari perkalian pembagi dengan hasil bagi ditambah sisa pembagian: $P(x) = Q(x) \\cdot H(x) + S(x)$.",
      steps: "1. Tuliskan rumus identitas: $P(x) = (x^2 - 2x + 3)(2x - 1) + (3x + 4)$.<br>2. Jabarkan hasil perkalian $(x^2 - 2x + 3)(2x - 1)$:<br>$$= 2x(x^2 - 2x + 3) - 1(x^2 - 2x + 3) = 2x^3 - 4x^2 + 6x - x^2 + 2x - 3$$<br>$$= 2x^3 - 5x^2 + 8x - 3$$<br>3. Tambahkan dengan sisa pembagian $(3x + 4)$:<br>$$P(x) = (2x^3 - 5x^2 + 8x - 3) + (3x + 4) = 2x^3 - 5x^2 + 11x + 1$$<br>4. Jadi suku banyak tersebut adalah $2x^3 - 5x^2 + 11x + 1$ (pilihan A).",
      pitfalls: "Salah mengurangkan sisa alih-alih menjumlahkannya, atau salah menjumlahkan koefisien $8x + 3x = 11x$."
    }
  },
  {
    id: "mat-alj-polinom-susun-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Pembagian Derajat 4 oleh Bentuk Kuadrat Non-Monic",
    difficulty: "sedang",
    statement: "Hasil bagi dari pembagian suku banyak $6x^4 + x^3 - 7x^2 + 5x - 2$ oleh $(2x^2 - x + 1)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x^2 + 2x - 4$",
      "$3x^2 - 2x - 4$",
      "$3x^2 + 4x - 4$",
      "$6x^2 + 4x - 8$",
      "$3x^2 + 2x + 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada pembagian bersusun dengan koefisien utama pembagi $a > 1$, hasil bagi ditentukan melalui pembagian suku tertinggi berturut-turut oleh suku utama pembagi ($2x^2$).",
      steps: "1. Bagi $6x^4$ dengan $2x^2$ menghasilkan $3x^2$. Kalikan: $3x^2(2x^2 - x + 1) = 6x^4 - 3x^3 + 3x^2$.<br>2. Kurangkan: $(6x^4 + x^3 - 7x^2) - (6x^4 - 3x^3 + 3x^2) = 4x^3 - 10x^2$. Turunkan $+5x$.<br>3. Bagi $4x^3$ dengan $2x^2$ menghasilkan $+2x$. Kalikan: $2x(2x^2 - x + 1) = 4x^3 - 2x^2 + 2x$.<br>4. Kurangkan: $(4x^3 - 10x^2 + 5x) - (4x^3 - 2x^2 + 2x) = -8x^2 + 3x$. Turunkan $-2$.<br>5. Bagi $-8x^2$ dengan $2x^2$ menghasilkan $-4$. Kalikan: $-4(2x^2 - x + 1) = -8x^2 + 4x - 4$.<br>6. Kurangkan: $(-8x^2 + 3x - 2) - (-8x^2 + 4x - 4) = -x + 2$ (sisa).<br>7. Diperoleh hasil bagi: $3x^2 + 2x - 4$ (pilihan A).",
      pitfalls: "Lupa membagi koefisien dengan 2 pada setiap langkah pembagian suku baru."
    }
  },
  {
    id: "mat-alj-polinom-susun-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-susun",
    category: "Jumlah Kuadrat Parameter Polinomial Habis Dibagi",
    difficulty: "sedang",
    statement: "Jika suku banyak $P(x) = x^4 - 2x^3 + px + q$ habis dibagi oleh $(x^2 - 1)$, maka nilai dari $p^2 + q^2$ adalah ....",
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
      concept: "Jika polinomial habis dibagi oleh $(x^2 - 1) = (x - 1)(x + 1)$, maka sisa pembagian untuk pembuat nol $x = 1$ dan $x = -1$ keduanya harus bernilai nol ($P(1) = 0$ dan $P(-1) = 0$).",
      steps: "1. Evaluasi pada $x = 1$:<br>$$P(1) = 1^4 - 2(1)^3 + p(1) + q = 0 \\implies 1 - 2 + p + q = 0 \\implies p + q = 1$$<br>2. Evaluasi pada $x = -1$:<br>$$P(-1) = (-1)^4 - 2(-1)^3 + p(-1) + q = 0 \\implies 1 + 2 - p + q = 0 \\implies -p + q = -3 \\implies p - q = 3$$<br>3. Jumlahkan kedua persamaan aljabar:<br>$$(p + q) + (p - q) = 1 + 3 \\implies 2p = 4 \\implies p = 2$$<br>4. Substitusikan $p = 2$ ke $p + q = 1$ menghasilkan $q = 1 - 2 = -1$.<br>5. Hitung $p^2 + q^2$:<br>$$p^2 + q^2 = (2)^2 + (-1)^2 = 4 + 1 = 5$$<br>6. Jadi nilai $p^2 + q^2$ adalah 5 (pilihan C).",
      pitfalls: "Salah menghitung $(-1)^4 = 1$ dan $-2(-1)^3 = +2$, atau salah tanda saat mengurangkan $q = 1 - 2 = -1$."
    }
  }
];
