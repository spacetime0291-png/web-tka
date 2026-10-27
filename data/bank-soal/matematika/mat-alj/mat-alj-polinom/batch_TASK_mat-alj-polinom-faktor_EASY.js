/**
 * Batch Task: TASK_mat-alj-polinom-faktor_EASY
 * SubTopic: Teorema Faktor & Akar Polinomial (mat-alj-polinom-faktor)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-alj-polinom-faktor-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Pernyataan Dasar Teorema Faktor",
    difficulty: "mudah",
    statement: "Berdasarkan Teorema Faktor, bentuk linear $(x - k)$ merupakan faktor dari suku banyak $P(x)$ jika dan hanya jika memenuhi syarat ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$P(k) = 0$",
      "$P(-k) = 0$",
      "$P(k) > 0$",
      "$P(0) = k$",
      "$P(k) = 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema Faktor menyatakan bahwa $(x - k)$ adalah faktor dari polinomial $P(x)$ jika dan hanya jika sisa pembagiannya bernilai nol, yang berarti $P(k) = 0$, dan $x = k$ merupakan akar dari persamaan $P(x) = 0$.",
      steps: "1. Tinjau algoritma pembagian: $P(x) = (x - k) H(x) + S$.<br>2. Definisi suatu bentuk aljabar menjadi faktor adalah pembagian tersebut tidak menyisakan sisa ($S = 0$).<br>3. Menurut Teorema Sisa, $S = P(k)$.<br>4. Maka syarat mutlak $(x - k)$ sebagai faktor adalah $P(k) = 0$.<br>5. Jadi pilihan yang benar adalah A.",
      pitfalls: "Terkecoh dengan tanda negatif sehingga memilih $P(-k) = 0$."
    }
  },
  {
    id: "mat-alj-polinom-faktor-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Identifikasi Faktor Linear Suku Banyak",
    difficulty: "mudah",
    statement: "Di antara pilihan bentuk linear berikut, yang merupakan faktor dari suku banyak $P(x) = x^3 - 4x^2 + x + 6$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 2)$",
      "$(x + 2)$",
      "$(x - 1)$",
      "$(x + 3)$",
      "$(x - 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Untuk menguji apakah $(x - c)$ merupakan faktor dari $P(x)$, substitusikan pembuat nol $x = c$. Jika $P(c) = 0$, maka $(x - c)$ adalah faktor.",
      steps: "1. Uji pilihan A yaitu $(x - 2)$ dengan mensubstitusikan $x = 2$:<br>$$P(2) = (2)^3 - 4(2)^2 + (2) + 6 = 8 - 4(4) + 2 + 6 = 8 - 16 + 2 + 6 = 0$$<br>2. Karena $P(2) = 0$, maka $(x - 2)$ merupakan faktor dari $P(x)$.<br>3. (Sebagai pembanding, uji $x = -2$: $P(-2) = -8 - 16 - 2 + 6 = -20 \\neq 0$).<br>4. Jadi faktor yang benar adalah $(x - 2)$ (pilihan A).",
      pitfalls: "Salah tanda saat mengevaluasi nilai fungsi, seperti menghitung $-4(2)^2 = (-8)^2 = 64$ alih-alih $-4(4) = -16$."
    }
  },
  {
    id: "mat-alj-polinom-faktor-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Penentuan Parameter Berdasarkan Faktor Linear",
    difficulty: "mudah",
    statement: "Agar bentuk linear $(x - 2)$ merupakan faktor dari suku banyak $P(x) = 2x^3 - 3x^2 + ax - 6$, maka nilai konstanta $a$ harus sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-2",
      "-1",
      "1",
      "2",
      "3"
    ],
    correctIndex: 2,
    solution: {
      concept: "Syarat agar $(x - 2)$ menjadi faktor dari $P(x)$ adalah nilai $P(2) = 0$.",
      steps: "1. Terapkan Teorema Faktor: $P(2) = 0$.<br>2. Substitusikan $x = 2$ ke dalam rumus fungsi $P(x)$:<br>$$P(2) = 2(2)^3 - 3(2)^2 + a(2) - 6 = 0$$<br>3. Hitung nilai bilangan:<br>$$2(8) - 3(4) + 2a - 6 = 0 \\implies 16 - 12 + 2a - 6 = 0$$<br>4. Sederhanakan persamaan aljabar:<br>$$2a - 2 = 0 \\implies 2a = 2 \\implies a = 1$$<br>5. Jadi nilai konstanta $a$ adalah 1 (pilihan C).",
      pitfalls: "Lupa menyertakan perkalian dengan konstanta $-6$ di akhir persamaan aljabar."
    }
  },
  {
    id: "mat-alj-polinom-faktor-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Teorema Vieta Jumlah Akar-Akar Polinomial",
    difficulty: "mudah",
    statement: "Akar-akar dari persamaan suku banyak $2x^3 - 6x^2 + 4x - 8 = 0$ adalah $x_1, x_2,$ dan $x_3$. Nilai dari $x_1 + x_2 + x_3$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-3",
      "-2",
      "2",
      "3",
      "4"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Teorema Vieta untuk persamaan polinomial kubik $ax^3 + bx^2 + cx + d = 0$, jumlah seluruh akar-akarnya dirumuskan sebagai:<br>$$x_1 + x_2 + x_3 = -\\frac{b}{a}$$",
      steps: "1. Identifikasi koefisien-koefisien persamaan:\n- $a = 2$\n- $b = -6$\n- $c = 4$\n- $d = -8$<br>2. Terapkan rumus Vieta untuk penjumlahan akar:<br>$$x_1 + x_2 + x_3 = -\\frac{b}{a} = -\\frac{-6}{2} = \\frac{6}{2} = 3$$<br>3. Jadi jumlah akar-akarnya adalah 3 (pilihan D).",
      pitfalls: "Lupa membagi dengan koefisien utama $a = 2$, atau salah tanda minus $-\\frac{b}{a}$ sehingga menjawab $-3$."
    }
  },
  {
    id: "mat-alj-polinom-faktor-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-polinom",
    subTopicId: "mat-alj-polinom-faktor",
    category: "Teorema Vieta Hasil Kali Akar-Akar Polinomial",
    difficulty: "mudah",
    statement: "Persamaan polinomial $x^3 - 2x^2 - 5x + 10 = 0$ memiliki akar-akar $x_1, x_2,$ dan $x_3$. Hasil kali ketiga akar-akarnya ($x_1 \\cdot x_2 \\cdot x_3$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "-10",
      "-5",
      "2",
      "5",
      "10"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Teorema Vieta untuk persamaan polinomial berderajat 3 ($ax^3 + bx^2 + cx + d = 0$), perkalian ketiga akarnya adalah:<br>$$x_1 \\cdot x_2 \\cdot x_3 = -\\frac{d}{a}$$",
      steps: "1. Identifikasi koefisien persamaan:\n- $a = 1$\n- $d = 10$<br>2. Masukkan ke rumus perkalian akar Vieta:<br>$$x_1 \\cdot x_2 \\cdot x_3 = -\\frac{d}{a} = -\\frac{10}{1} = -10$$<br>3. Jadi hasil kali akar-akarnya adalah $-10$ (pilihan A).",
      pitfalls: "Lupa tanda minus pada rumus hasil kali persamaan kubik ($-\\frac{d}{a}$) sehingga menjawab $+10$."
    }
  }
];
