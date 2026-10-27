/**
 * Batch Task: TASK_mat-geo-lingkaran-kedudukan_MEDIUM
 * SubTopic: Kedudukan Titik dan Garis terhadap Lingkaran (mat-geo-lingkaran-kedudukan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-kedudukan-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Batas Parameter Titik di Luar Lingkaran",
    difficulty: "sedang",
    statement: "Nilai parameter $k$ agar titik $P(k, -2)$ terletak di luar lingkaran $x^2 + y^2 - 4x + 6y - 13 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$k < -3 \\text{ atau } k > 7$",
      "$-3 < k < 7$",
      "$k < -7 \\text{ atau } k > 3$",
      "$-7 < k < 3$",
      "$k < -3$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik $(x_1, y_1)$ terletak di luar lingkaran umum $x^2 + y^2 + Ax + By + C = 0$ jika nilai kuasanya lebih besar dari nol, yaitu $x_1^2 + y_1^2 + Ax_1 + By_1 + C > 0$.",
      steps: "1. Substitusikan titik $P(k, -2)$ ke dalam persamaan umum lingkaran:\n$$k^2 + (-2)^2 - 4(k) + 6(-2) - 13 > 0$$\n2. Sederhanakan pertidaksamaan kuadrat:\n$$k^2 + 4 - 4k - 12 - 13 > 0$$\n$$k^2 - 4k - 21 > 0$$\n3. Faktorkan bentuk kuadrat:\n$$(k - 7)(k + 3) > 0$$\n4. Tentukan pembuat nol yaitu $k = -3$ dan $k = 7$.\n5. Karena tanda pertidaksamaan lebih besar dari nol ($> 0$), daerah penyelesaian berada di luar interval pembuat nol:\n$$k < -3 \\text{ atau } k > 7$$\n6. Jadi, nilai $k$ yang memenuhi adalah $k < -3 \\text{ atau } k > 7$ (pilihan A).",
      pitfalls: "Memilih daerah interval di antara kedua akar ($-3 < k < 7$), yang merupakan daerah untuk titik di dalam lingkaran."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Jarak Minimum Titik ke Kurva Lingkaran",
    difficulty: "sedang",
    statement: "Jarak terdekat dari titik $A(9, 14)$ ke kurva lingkaran $x^2 + y^2 - 6x - 12y + 20 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "5",
      "10",
      "15",
      "$\\sqrt{5}$",
      "4"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jarak terdekat dari titik luar $A$ ke kurva lingkaran berpusat $P$ dengan jari-jari $r$ dirumuskan sebagai selisih jarak titik ke pusat dengan jari-jari lingkaran: $d_{\\text{min}} = |AP| - r$.",
      steps: "1. Tentukan titik pusat dan jari-jari lingkaran:\n$$\\text{Pusat } P = \\left(-\\frac{-6}{2}, -\\frac{-12}{2}\\right) = (3, 6)$$\n$$r = \\sqrt{3^2 + 6^2 - 20} = \\sqrt{9 + 36 - 20} = \\sqrt{25} = 5$$\n2. Hitung jarak titik $A(9, 14)$ ke titik pusat $P(3, 6)$:\n$$|AP| = \\sqrt{(9 - 3)^2 + (14 - 6)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Hitung jarak terdekat ke kurva lingkaran:\n$$d_{\\text{min}} = |AP| - r = 10 - 5 = 5$$\n4. Jadi, jarak terdekatnya adalah 5 satuan (pilihan A).",
      pitfalls: "Berhenti pada perhitungan jarak ke titik pusat ($|AP| = 10$) tanpa mengurangkannya dengan panjang jari-jari $r = 5$."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Panjang Tali Busur Perpotongan Garis",
    difficulty: "sedang",
    statement: "Garis $x - y + 1 = 0$ memotong lingkaran $x^2 + y^2 = 25$ di titik $A$ dan titik $B$. Panjang tali busur $AB$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$7\\sqrt{2}$",
      "$5\\sqrt{2}$",
      "7",
      "$10\\sqrt{2}$",
      "$\\frac{7}{2}\\sqrt{2}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Panjang tali busur lingkaran yang dipotong oleh garis lurus dapat dihitung menggunakan teorema Pythagoras pada segitiga siku-siku antara jari-jari $r$, jarak garis ke pusat $d$, dan setengah tali busur: $|AB| = 2\\sqrt{r^2 - d^2}$.",
      steps: "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{25} = 5$ dengan pusat $O(0, 0)$.\n2. Hitung jarak tegak lurus pusat $(0, 0)$ ke garis $x - y + 1 = 0$:\n$$d = \\frac{|1(0) - 1(0) + 1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{1}{\\sqrt{2}}$$\n3. Kuadratkan nilai jarak:\n$$d^2 = \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}$$\n4. Hitung setengah panjang tali busur:\n$$\\frac{1}{2}|AB| = \\sqrt{r^2 - d^2} = \\sqrt{25 - \\frac{1}{2}} = \\sqrt{\\frac{49}{2}} = \\frac{7}{\\sqrt{2}} = \\frac{7}{2}\\sqrt{2}$$\n5. Kalikan dengan 2 untuk mendapatkan panjang tali busur utuh:\n$$|AB| = 2 \\times \\frac{7}{2}\\sqrt{2} = 7\\sqrt{2}$$\n6. Jadi, panjang tali busur $AB$ adalah $7\\sqrt{2}$ (pilihan A).",
      pitfalls: "Lupa mengalikan 2 di akhir langkah sehingga memilih panjang setengah tali busur $\\frac{7}{2}\\sqrt{2}$."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Syarat Garis Memotong Lingkaran di Dua Titik",
    difficulty: "sedang",
    statement: "Nilai konstanta $c$ agar garis $y = x + c$ memotong lingkaran $x^2 + y^2 = 8$ di dua titik yang berbeda adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-4 < c < 4$",
      "$c < -4 \\text{ atau } c > 4$",
      "$-8 < c < 8$",
      "$c < -8 \\text{ atau } c > 8$",
      "$-2 < c < 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis memotong lingkaran di dua titik berbeda jika sistem persamaan keduanya menghasilkan persamaan kuadrat dengan nilai diskriminan $D > 0$.",
      steps: "1. Substitusikan $y = x + c$ ke dalam persamaan lingkaran $x^2 + y^2 = 8$:\n$$x^2 + (x + c)^2 = 8$$\n$$x^2 + x^2 + 2cx + c^2 - 8 = 0$$\n$$2x^2 + 2cx + (c^2 - 8) = 0$$\n2. Terapkan syarat memotong di dua titik ($D > 0$):\n$$D = (2c)^2 - 4(2)(c^2 - 8) > 0$$\n$$4c^2 - 8c^2 + 64 > 0$$\n$$-4c^2 + 64 > 0$$\n3. Bagi kedua ruas dengan $-4$ (balikkan tanda ketaksamaan):\n$$c^2 - 16 < 0$$\n$$(c - 4)(c + 4) < 0$$\n4. Daerah penyelesaiannya adalah interval tertutup pembuat nol:\n$$-4 < c < 4$$\n5. Jadi, nilai konstanta $c$ yang memenuhi adalah $-4 < c < 4$ (pilihan A).",
      pitfalls: "Lupa membalik tanda ketaksamaan saat membagi dengan bilangan negatif $-4$."
    }
  },
  {
    id: "mat-geo-lingkaran-kedudukan-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-kedudukan",
    category: "Kedudukan Relatif Dua Lingkaran",
    difficulty: "sedang",
    statement: "Diketahui dua buah lingkaran $L_1 \\equiv (x - 1)^2 + (y - 2)^2 = 9$ dan $L_2 \\equiv (x - 7)^2 + (y - 10)^2 = 16$. Kedudukan relatif antara kedua lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Saling terpisah di luar (saling lepas)",
      "Bersinggungan di luar",
      "Berpotongan di dua titik",
      "Bersinggungan di dalam",
      "Berada di dalam tanpa bersinggungan (konsentris)"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kedudukan dua lingkaran ditentukan dengan membandingkan jarak antarpusat $d = |P_1 P_2|$ terhadap jumlah atau selisih panjang jari-jari: jika $d > r_1 + r_2$, maka kedua lingkaran saling terpisah di luar (saling lepas).",
      steps: "1. Identifikasi pusat dan jari-jari masing-masing lingkaran:\n- $L_1$: Pusat $P_1(1, 2)$ dan jari-jari $r_1 = \\sqrt{9} = 3$\n- $L_2$: Pusat $P_2(7, 10)$ dan jari-jari $r_2 = \\sqrt{16} = 4$\n2. Hitung jarak antara kedua titik pusat $P_1$ dan $P_2$:\n$$d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Hitung jumlah kedua jari-jari:\n$$r_1 + r_2 = 3 + 4 = 7$$\n4. Bandingkan jarak pusat terhadap jumlah jari-jari:\n$$d = 10 > 7 = r_1 + r_2$$\n5. Karena $d > r_1 + r_2$, maka kedua lingkaran saling terpisah di luar (saling lepas).\n6. Jadi, kedudukannya adalah saling terpisah di luar (pilihan A).",
      pitfalls: "Terkecoh menyimpulkan bersinggungan di luar ($d = r_1 + r_2$) tanpa menghitung jarak riil antarpusat."
    }
  }
];
