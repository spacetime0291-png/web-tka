/**
 * Batch Task: TASK_mat-geo-vektor-perbandingan_EASY
 * SubTopic: Perbandingan Vektor (mat-geo-vektor-perbandingan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "mat-geo-vektor-perbandingan-001",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-perbandingan",
    category: "Titik Tengah Ruas Garis",
    difficulty: "mudah",
    statement: "Titik $M$ merupakan titik tengah dari ruas garis yang menghubungkan titik $A(2, 6)$ dan titik $B(8, -2)$. Koordinat titik $M$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, 2)$",
      "$(6, 4)$",
      "$(5, 4)$",
      "$(3, 2)$",
      "$(10, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik tengah suatu ruas garis merupakan titik pembagi dengan rasio $1 : 1$, sehingga vektor posisinya merupakan rata-rata dari kedua koordinat ujungnya: $\\vec{m} = \\frac{\\vec{a} + \\vec{b}}{2}$.",
      steps: "1. Tentukan komponen absis $x_M$:\n$$x_M = \\frac{x_A + x_B}{2} = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$\n2. Tentukan komponen ordinat $y_M$:\n$$y_M = \\frac{y_A + y_B}{2} = \\frac{6 + (-2)}{2} = \\frac{4}{2} = 2$$\n3. Susun koordinat titik tengah $M$:\n$$M(x_M, y_M) = (5, 2)$$\n4. Jadi, koordinat titik tengah adalah $(5, 2)$ (pilihan A).",
      pitfalls: "Kesalahan hitung saat menjumlahkan bilangan negatif $6 + (-2) = 4$, yang sering keliru dihitung menjadi 8."
    }
  },
  {
    id: "mat-geo-vektor-perbandingan-002",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-perbandingan",
    category: "Pembagian Dalam Ruas Garis Dua Dimensi",
    difficulty: "mudah",
    statement: "Titik $P$ membagi ruas garis $AB$ di dalam dengan perbandingan panjang $AP : PB = 1 : 2$. Jika koordinat titik $A(1, 2)$ dan $B(7, 8)$, maka koordinat titik $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3, 4)$",
      "$(4, 5)$",
      "$(2, 3)$",
      "$(5, 6)$",
      "$(3, 5)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Vektor posisi titik $P$ yang membagi ruas garis $AB$ dengan perbandingan $AP : PB = m : n$ dirumuskan sebagai $\\vec{p} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      steps: "1. Tentukan nilai rasio: $m = 1$ dan $n = 2$, sehingga $m + n = 3$.\n2. Hitung nilai absis $x_P$:\n$$x_P = \\frac{1(7) + 2(1)}{3} = \\frac{7 + 2}{3} = \\frac{9}{3} = 3$$\n3. Hitung nilai ordinat $y_P$:\n$$y_P = \\frac{1(8) + 2(2)}{3} = \\frac{8 + 4}{3} = \\frac{12}{3} = 4$$\n4. Koordinat titik $P$ adalah $(3, 4)$.\n5. Jadi, koordinat titik $P$ adalah $(3, 4)$ (pilihan A).",
      pitfalls: "Tertukar memasangkan rasio pembagi, misalnya mengalikan $m=1$ ke titik $A$ dan $n=2$ ke titik $B$."
    }
  },
  {
    id: "mat-geo-vektor-perbandingan-003",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-perbandingan",
    category: "Pembagian Ruas Garis Tiga Dimensi",
    difficulty: "mudah",
    statement: "Titik $R$ terletak pada ruas garis penghubung titik $P(2, -1, 3)$ dan $Q(7, 4, -2)$ sedemikian rupa sehingga $PR : RQ = 3 : 2$. Koordinat titik $R$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(5, 2, 0)$",
      "$(4, 1, 1)$",
      "$(5, 3, 0)$",
      "$(6, 2, -1)$",
      "$(5, 1, 0)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada ruang dimensi tiga, koordinat titik bagi ruas garis dihitung terpisah untuk masing-masing sumbu menggunakan rumus pembagian vektor berbobot: $\\vec{r} = \\frac{m\\vec{q} + n\\vec{p}}{m + n}$.",
      steps: "1. Rasio perbandingan adalah $m = 3$ dan $n = 2$, dengan total bobot $m + n = 5$.\n2. Hitung masing-masing komponen koordinat:\n- Sumbu-$X$: $x_R = \\frac{3(7) + 2(2)}{5} = \\frac{21 + 4}{5} = \\frac{25}{5} = 5$\n- Sumbu-$Y$: $y_R = \\frac{3(4) + 2(-1)}{5} = \\frac{12 - 2}{5} = \\frac{10}{5} = 2$\n- Sumbu-$Z$: $z_R = \\frac{3(-2) + 2(3)}{5} = \\frac{-6 + 6}{5} = \\frac{0}{5} = 0$\n3. Koordinat titik $R$ adalah $(5, 2, 0)$.\n4. Jadi, koordinat yang tepat adalah $(5, 2, 0)$ (pilihan A).",
      pitfalls: "Keliru saat mengoperasikan tanda bilangan negatif pada sumbu-$Z$ sehingga tidak menghasilkan nilai nol."
    }
  },
  {
    id: "mat-geo-vektor-perbandingan-004",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-perbandingan",
    category: "Rumus Pembagian Luar Ruas Garis",
    difficulty: "mudah",
    statement: "Titik $K$ membagi ruas garis $AB$ di luar dengan perbandingan $AK : KB = 3 : -1$. Jika vektor posisi titik $A$ adalah $\\vec{a}$ dan titik $B$ adalah $\\vec{b}$, maka vektor posisi $\\vec{k}$ dinyatakan sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3\\vec{b} - \\vec{a}}{2}$",
      "$\\frac{3\\vec{b} + \\vec{a}}{2}$",
      "$\\frac{3\\vec{a} - \\vec{b}}{2}$",
      "$3\\vec{b} - \\vec{a}$",
      "$\\frac{-\\vec{b} + 3\\vec{a}}{4}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pembagian di luar ruas garis ditandai dengan nilai perbandingan bertanda negatif pada salah satu ruasnya. Rumus perbandingan vektor tetap berlaku: $\\vec{k} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$.",
      steps: "1. Identifikasi nilai rasio berarah: $m = 3$ dan $n = -1$.\n2. Masukkan ke rumus vektor posisi titik bagi:\n$$\\vec{k} = \\frac{3\\vec{b} + (-1)\\vec{a}}{3 + (-1)}$$\n3. Sederhanakan bentuk pembilang dan penyebut:\n$$\\vec{k} = \\frac{3\\vec{b} - \\vec{a}}{2}$$\n4. Jadi, vektor posisi $\\vec{k}$ adalah $\\frac{3\\vec{b} - \\vec{a}}{2}$ (pilihan A).",
      pitfalls: "Lupa menjumlahkan aljabar pada bagian penyebut $3 + (-1) = 2$ dan menganggap penyebutnya bernilai $3 + 1 = 4$."
    }
  },
  {
    id: "mat-geo-vektor-perbandingan-005",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-vektor",
    subTopicId: "mat-geo-vektor-perbandingan",
    category: "Menentukan Rasio Titik Kolinier",
    difficulty: "mudah",
    statement: "Diketahui titik $A(1, 3)$, $B(4, 9)$, dan titik $C(2, 5)$ terletak pada satu garis lurus. Perbandingan panjang ruas garis $AC : CB$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 2$",
      "$1 : 3$",
      "$2 : 3$",
      "$2 : 1$",
      "$1 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perbandingan segmen garis $AC : CB$ ditentukan dengan membandingkan komponen vektor perpindahan $\\vec{AC}$ terhadap vektor perpindahan $\\vec{CB}$.",
      steps: "1. Tentukan vektor perpindahan $\\vec{AC}$:\n$$\\vec{AC} = (2 - 1)\\hat{i} + (5 - 3)\\hat{j} = \\hat{i} + 2\\hat{j}$$\n2. Tentukan vektor perpindahan $\\vec{CB}$:\n$$\\vec{CB} = (4 - 2)\\hat{i} + (9 - 5)\\hat{j} = 2\\hat{i} + 4\\hat{j}$$\n3. Nyatakan hubungan kelipatan skalar kedua vektor:\n$$\\vec{CB} = 2(\\hat{i} + 2\\hat{j}) = 2\\vec{AC}$$\n4. Bandingkan panjangnya:\n$$\\frac{|\\vec{AC}|}{|\\vec{CB}|} = \\frac{1}{2} \\implies AC : CB = 1 : 2$$\n5. Jadi, perbandingannya adalah $1 : 2$ (pilihan A).",
      pitfalls: "Tertukar urutan titik saat mencari segmen $\\vec{CB}$ dengan $\\vec{BC}$ yang berlawanan tanda, atau membandingkan $AC : AB$ alih-alih $AC : CB$."
    }
  }
];
