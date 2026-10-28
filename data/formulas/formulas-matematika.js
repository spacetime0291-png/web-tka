/**
 * FORMULA BANK - MATEMATIKA LANJUT (TKA)
 * Meliputi 7 Bab Kecil:
 * 1. mat-alj-matriks (Matriks)
 * 2. mat-alj-polinom (Polinomial)
 * 3. mat-alj-fungsi (Fungsi)
 * 4. mat-geo-vektor (Vektor)
 * 5. mat-geo-lingkaran (Lingkaran)
 * 6. mat-geo-trans (Transformasi Geometri)
 * 7. mat-lim-fungsi (Limit Fungsi)
 */

const FORMULAS_MATEMATIKA = {
  "mat-alj-matriks": {
    subChapterId: "mat-alj-matriks",
    title: "Matriks",
    chapterId: "mat-alj",
    chapterTitle: "Aljabar",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Konsep ordo, kesamaan, transposisi matriks, operasi aljabar, determinan ordo 2 dan 3, sifat-sifat determinan, invers, dan persamaan matriks linier.",
    subTopicsCovered: [
      "Ordo, Kesamaan, dan Transpose",
      "Penjumlahan dan Pengurangan Matriks",
      "Perkalian Skalar dan Dua Matriks",
      "Determinan Matriks 2x2 dan 3x3",
      "Invers Matriks 2x2 dan 3x3",
      "Persamaan Matriks",
      "Matriks pada SPL"
    ],
    formulas: [
      {
        id: "mat-alj-matriks-f01",
        code: "R-01",
        title: "Kesamaan Matriks & Transpose",
        formulaLatex: "A = B \\iff a_{ij} = b_{ij} \\quad \\forall i, j \\\\[6pt] A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies A^T = \\begin{pmatrix} a & c \\\\ b & d \\end{pmatrix}, \\quad (A^T)^T = A, \\quad (AB)^T = B^T A^T",
        conditions: "Ordo kedua matriks harus identik. Pada transpose perkalian, urutan dibalik.",
        variables: [
          { symbol: "A^T", desc: "Matriks transpose hasil penukaran baris menjadi kolom" }
        ],
        traps: "Lupa membalik urutan perkalian: $(AB)^T = B^T A^T$ (bukan $A^T B^T$).",
        example: {
          question: "Diketahui matriks $A = \\begin{pmatrix} 2x+1 & 4 \\\\ 3 & y-2 \\end{pmatrix}$ dan $B^T = \\begin{pmatrix} 7 & 3 \\\\ 4 & 5 \\end{pmatrix}$. Jika $A = B^T$, tentukan nilai dari $x + y$.",
          steps: [
            "Samakan elemen seletak: $2x + 1 = 7 \\implies 2x = 6 \\implies x = 3$",
            "Samakan elemen baris 2 kolom 2: $y - 2 = 5 \\implies y = 7$",
            "Hitung nilai $x + y = 3 + 7 = 10$"
          ],
          answer: "$10$"
        }
      },
      {
        id: "mat-alj-matriks-f02",
        code: "R-02",
        title: "Penjumlahan, Pengurangan & Skalar",
        formulaLatex: "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\pm \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} a \\pm e & b \\pm f \\\\ c \\pm g & d \\pm h \\end{pmatrix} \\\\[6pt] k \\cdot \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}",
        conditions: "Hanya berlaku jika ordo kedua matriks sama.",
        variables: [
          { symbol: "k", desc: "Bilangan skalar real" }
        ],
        traps: "Menjumlahkan matriks yang berbeda ordonya.",
        example: {
          question: "Jika $P = \\begin{pmatrix} 1 & -2 \\\\ 3 & 4 \\end{pmatrix}$ dan $Q = \\begin{pmatrix} 4 & 1 \\\\ -1 & 2 \\end{pmatrix}$, tentukan matriks $2P - Q$.",
          steps: [
            "$2P = \\begin{pmatrix} 2 & -4 \\\\ 6 & 8 \\end{pmatrix}$",
            "$2P - Q = \\begin{pmatrix} 2 - 4 & -4 - 1 \\\\ 6 - (-1) & 8 - 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -5 \\\\ 7 & 6 \\end{pmatrix}$"
          ],
          answer: "$\\begin{pmatrix} -2 & -5 \\\\ 7 & 6 \\end{pmatrix}$"
        }
      },
      {
        id: "mat-alj-matriks-f03",
        code: "R-03",
        title: "Perkalian Dua Matriks",
        formulaLatex: "A_{m \\times p} \\times B_{p \\times n} = C_{m \\times n} \\\\[6pt] \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae + bg & af + bh \\\\ ce + dg & cf + dh \\end{pmatrix}",
        conditions: "Jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua.",
        variables: [
          { symbol: "m, p, n", desc: "Dimensi ordo matriks" }
        ],
        traps: "Perkalian matriks tidak komutatif: $AB \\neq BA$.",
        example: {
          question: "Tentukan hasil perkalian $\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$.",
          steps: [
            "Baris 1: $(2)(5) + (3)(-1) = 10 - 3 = 7$",
            "Baris 2: $(1)(5) + (4)(-1) = 5 - 4 = 1$"
          ],
          answer: "$\\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix}$"
        }
      },
      {
        id: "mat-alj-matriks-f04",
        code: "R-04",
        title: "Determinan Matriks 2x2 dan 3x3",
        formulaLatex: "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc \\\\[6pt] \\det\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = (aei + bfg + cdh) - (ceg + afh + bdi)",
        conditions: "Hanya terdefinisi untuk matriks persegi ($n \\times n$).",
        variables: [
          { symbol: "\\det(A)", desc: "Nilai skalar determinan matriks $A$" }
        ],
        traps: "Salah tanda pada perhitungan diagonal sekunder saat metode Sarrus.",
        example: {
          question: "Hitung determinan dari matriks $M = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$.",
          steps: [
            "$\\det(M) = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$"
          ],
          answer: "$26$"
        }
      },
      {
        id: "mat-alj-matriks-f05",
        code: "R-05",
        title: "Sifat-Sifat Pokok Determinan",
        formulaLatex: "\\det(AB) = \\det(A) \\cdot \\det(B), \\quad \\det(A^T) = \\det(A) \\\\[4pt] \\det(A^{-1}) = \\frac{1}{\\det(A)}, \\quad \\det(k \\cdot A_{n \\times n}) = k^n \\cdot \\det(A), \\quad \\det(A^m) = (\\det A)^m",
        conditions: "Matriks berordo $n \\times n$. Skalar $k$ keluar dengan pangkat $n$.",
        variables: [
          { symbol: "n", desc: "Ordo matriks persegi" }
        ],
        traps: "Lupa memangkatkan $k$ dengan $n$ pada $\\det(kA) = k^n \\det(A)$.",
        example: {
          question: "Matriks $A$ dan $B$ berordo $2 \\times 2$ dengan $\\det(A) = 4$ dan $\\det(B) = -3$. Hitung $\\det(2AB^T)$.",
          steps: [
            "Karena ordo $n = 2$: $\\det(2AB^T) = 2^2 \\cdot \\det(A) \\cdot \\det(B^T)$",
            "Substitusi nilai: $4 \\cdot 4 \\cdot (-3) = -48$"
          ],
          answer: "$-48$"
        }
      },
      {
        id: "mat-alj-matriks-f06",
        code: "R-06",
        title: "Invers Matriks 2x2 & Sifat Invers",
        formulaLatex: "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\\\[6pt] A A^{-1} = I, \\quad (AB)^{-1} = B^{-1} A^{-1}, \\quad (A^{-1})^{-1} = A",
        conditions: "Hanya ada jika matriks non-singular, yaitu $\\det(A) = ad - bc \\neq 0$.",
        variables: [
          { symbol: "I", desc: "Matriks identitas $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$" }
        ],
        traps: "Lupa menukar posisi diagonal utama ($a$ dan $d$) atau lupa mengganti tanda diagonal samping.",
        example: {
          question: "Tentukan invers dari matriks $A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$.",
          steps: [
            "$\\det(A) = (3)(2) - (5)(1) = 6 - 5 = 1$",
            "$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$"
          ],
          answer: "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$"
        }
      },
      {
        id: "mat-alj-matriks-f07",
        code: "R-07",
        title: "Persamaan Matriks Linear",
        formulaLatex: "AX = B \\iff X = A^{-1} B \\\\[4pt] XA = B \\iff X = B A^{-1}",
        conditions: "Matriks $A$ harus memiliki invers (non-singular).",
        variables: [
          { symbol: "X", desc: "Matriks variabel yang dicari" }
        ],
        traps: "Tertukar meletakkan $A^{-1}$ di depan atau di belakang $B$.",
        example: {
          question: "Tentukan $X$ jika $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} X = \\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}$.",
          steps: [
            "Bentuk $AX = B \\implies X = A^{-1}B$",
            "$\\det(A) = 4 - 6 = -2 \\implies A^{-1} = -\\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$",
            "$X = -\\frac{1}{2} \\begin{pmatrix} 4(4) - 2(10) \\\\ -3(4) + 1(10) \\end{pmatrix} = -\\frac{1}{2} \\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$"
          ],
          answer: "$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$"
        }
      },
      {
        id: "mat-alj-matriks-f08",
        code: "R-08",
        title: "Aturan Cramer untuk SPL",
        formulaLatex: "x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D} \\\\[6pt] D = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}, \\quad D_x = \\begin{vmatrix} c_1 & b_1 \\\\ c_2 & b_2 \\end{vmatrix}, \\quad D_y = \\begin{vmatrix} a_1 & c_1 \\\\ a_2 & c_2 \\end{vmatrix}",
        conditions: "Determinan utama $D \\neq 0$.",
        variables: [
          { symbol: "D_x", desc: "Determinan koefisien di mana kolom $x$ diganti kolom konstanta" }
        ],
        traps: "Salah menempatkan kolom konstanta saat menghitung $D_x$ dan $D_y$.",
        example: {
          question: "Tentukan nilai $x$ dari sistem $2x + 3y = 8$ dan $x - 2y = -3$.",
          steps: [
            "$D = (2)(-2) - (3)(1) = -4 - 3 = -7$",
            "$D_x = (8)(-2) - (3)(-3) = -16 + 9 = -7$",
            "$x = \\frac{D_x}{D} = \\frac{-7}{-7} = 1$"
          ],
          answer: "$1$"
        }
      }
    ]
  },

  "mat-alj-polinom": {
    subChapterId: "mat-alj-polinom",
    title: "Polinomial",
    chapterId: "mat-alj",
    chapterTitle: "Aljabar",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Konsep suku banyak, algoritma pembagian bersusun, metode sintetik Horner, Teorema Sisa, Teorema Faktor, dan relasi akar-akar Vieta.",
    subTopicsCovered: [
      "Operasi Aljabar Polinomial",
      "Pembagian Bersusun",
      "Skema Horner",
      "Teorema Sisa",
      "Teorema Faktor & Akar Polinomial"
    ],
    formulas: [
      {
        id: "mat-alj-polinom-f01",
        code: "R-01",
        title: "Algoritma Pembagian Polinomial",
        formulaLatex: "P(x) = Q(x) \\cdot H(x) + S(x) \\\\[4pt] \\text{Derajat } S(x) \\le \\text{Derajat } Q(x) - 1",
        conditions: "Derajat sisa pembagian $S(x)$ selalu lebih kecil minimal 1 derajat dibanding pembagi $Q(x)$.",
        variables: [
          { symbol: "P(x)", desc: "Suku banyak yang dibagi" },
          { symbol: "Q(x)", desc: "Suku banyak pembagi" },
          { symbol: "H(x)", desc: "Hasil bagi" },
          { symbol: "S(x)", desc: "Sisa pembagian" }
        ],
        traps: "Jika pembagi berderajat 2, maka pemisalan sisa pembagian adalah linear: $S(x) = ax + b$.",
        example: {
          question: "Suku banyak $P(x)$ dibagi $(x - 1)$ bersisa 5, dan jika dibagi $(x + 2)$ bersisa -1. Tentukan sisa pembagian $P(x)$ oleh $x^2 + x - 2$.",
          steps: [
            "Faktorkan pembagi: $x^2 + x - 2 = (x - 1)(x + 2)$",
            "Misalkan sisa pembagian $S(x) = ax + b$",
            "Untuk $x = 1: S(1) = a(1) + b = 5 \\implies a + b = 5$",
            "Untuk $x = -2: S(-2) = a(-2) + b = -1 \\implies -2a + b = -1$",
            "Kurangkan kedua persamaan: $3a = 6 \\implies a = 2$",
            "Substitusi: $2 + b = 5 \\implies b = 3$",
            "Maka sisa $S(x) = 2x + 3$"
          ],
          answer: "$S(x) = 2x + 3$"
        }
      },
      {
        id: "mat-alj-polinom-f02",
        code: "R-02",
        title: "Teorema Sisa (Remainder Theorem)",
        formulaLatex: "P(x) \\div (x - k) \\implies \\text{Sisa } = P(k) \\\\[4pt] P(x) \\div (ax - b) \\implies \\text{Sisa } = P\\left(\\frac{b}{a}\\right)",
        conditions: "Hanya berlaku jika pembagi adalah bentuk linear satu derajat.",
        variables: [
          { symbol: "k", desc: "Pembuat nol pembagi, $x - k = 0 \\implies x = k$" }
        ],
        traps: "Lupa mengubah tanda: pembagi $(x + 3)$ berarti $k = -3$, bukan $+3$.",
        example: {
          question: "Tentukan sisa pembagian jika $P(x) = 2x^3 - 5x^2 + 4x - 7$ dibagi oleh $(x - 2)$.",
          steps: [
            "Pembuat nol pembagi: $x - 2 = 0 \\implies x = 2$",
            "Sisa $= P(2) = 2(2)^3 - 5(2)^2 + 4(2) - 7$",
            "$= 2(8) - 5(4) + 8 - 7 = 16 - 20 + 8 - 7 = -3$"
          ],
          answer: "$-3$"
        }
      },
      {
        id: "mat-alj-polinom-f03",
        code: "R-03",
        title: "Skema Horner & Horner-Kino",
        formulaLatex: "\\begin{array}{c|rrrr} k & a_n & a_{n-1} & \\dots & a_0 \\\\ & & k \\cdot c_1 & \\dots & k \\cdot c_n \\\\ \\hline & a_n & c_1 & \\dots & S \\end{array} \\\\[6pt] \\text{Jika pembagi } (ax - b): \\quad H(x) = \\frac{\\text{Koefisien Baris Bawah}}{a}",
        conditions: "Jangan lupa menulis koefisien $0$ untuk suku derajat yang hilang pada polinomial.",
        variables: [
          { symbol: "a", desc: "Koefisien di depan variabel $x$ pada pembagi $(ax - b)$" }
        ],
        traps: "Lupa membagi koefisien hasil bagi dengan $a$ jika pembaginya berbentuk $(ax - b)$.",
        example: {
          question: "Tentukan hasil bagi $H(x)$ jika $P(x) = 2x^3 + 5x^2 - 4x + 3$ dibagi $(2x - 1)$.",
          steps: [
            "Pembuat nol $x = \\frac{1}{2}$. Koefisien: [2, 5, -4, 3]",
            "Turun 2. Kalikan $\\frac{1}{2} \\to 1$. Jumlahkan: $5 + 1 = 6$",
            "Kalikan $\\frac{1}{2} \\to 3$. Jumlahkan: $-4 + 3 = -1$",
            "Kalikan $\\frac{1}{2} \\to -\\frac{1}{2}$. Jumlahkan: $3 - \\frac{1}{2} = \\frac{5}{2}$ (Sisa)",
            "Baris koefisien hasil adalah $[2, 6, -1]$. Karena pembagi $(2x - 1)$, bagi dengan 2:",
            "$H(x) = \\frac{2x^2 + 6x - 1}{2} = x^2 + 3x - \\frac{1}{2}$"
          ],
          answer: "$H(x) = x^2 + 3x - \\frac{1}{2}$"
        }
      },
      {
        id: "mat-alj-polinom-f04",
        code: "R-04",
        title: "Teorema Faktor",
        formulaLatex: "(x - k) \\text{ adalah faktor dari } P(x) \\iff P(k) = 0",
        conditions: "Sisa pembagian harus bernilai nol sempurna ($S = 0$).",
        variables: [
          { symbol: "x = k", desc: "Akar penyelesaian dari persamaan polinomial $P(x) = 0$" }
        ],
        traps: "Mengasumsikan $k$ pasti bulat, calon akar rasional adalah $\\pm \\frac{\\text{faktor suku tetap}}{\\text{faktor koefisien tertinggi}}$.",
        example: {
          question: "Diketahui $(x - 3)$ merupakan faktor dari $P(x) = x^3 - ax^2 - 5x + 6$. Tentukan nilai $a$.",
          steps: [
            "Karena $(x - 3)$ adalah faktor, maka $P(3) = 0$",
            "$3^3 - a(3)^2 - 5(3) + 6 = 0$",
            "$27 - 9a - 15 + 6 = 0$",
            "$18 - 9a = 0 \\implies 9a = 18 \\implies a = 2$"
          ],
          answer: "$a = 2$"
        }
      },
      {
        id: "mat-alj-polinom-f05",
        code: "R-05",
        title: "Teorema Vieta Akar-Akar Polinomial",
        formulaLatex: "\\text{Derajat 3: } ax^3 + bx^2 + cx + d = 0 \\\\[4pt] x_1 + x_2 + x_3 = -\\frac{b}{a} \\\\[4pt] x_1 x_2 + x_2 x_3 + x_1 x_3 = \\frac{c}{a} \\\\[4pt] x_1 x_2 x_3 = -\\frac{d}{a}",
        conditions: "Tanda operasi bergantian: minus, plus, minus, plus.",
        variables: [
          { symbol: "x_1, x_2, x_3", desc: "Akar-akar persamaan kubik" }
        ],
        traps: "Tanda rumus hasil kali tiga akar kubik adalah negatif: $-\\frac{d}{a}$.",
        example: {
          question: "Akar-akar dari $2x^3 - 6x^2 + 8x - 10 = 0$ adalah $x_1, x_2, x_3$. Tentukan nilai $x_1 + x_2 + x_3$ dan $x_1 x_2 x_3$.",
          steps: [
            "$x_1 + x_2 + x_3 = -\\frac{b}{a} = -\\frac{-6}{2} = 3$",
            "$x_1 x_2 x_3 = -\\frac{d}{a} = -\\frac{-10}{2} = 5$"
          ],
          answer: "Jumlah akar $= 3$, Hasil kali akar $= 5$"
        }
      }
    ]
  },

  "mat-alj-fungsi": {
    subChapterId: "mat-alj-fungsi",
    title: "Fungsi",
    chapterId: "mat-alj",
    chapterTitle: "Aljabar",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Daerah asal dan hasil, aljabar fungsi, fungsi komposisi, fungsi invers serta trik invers cepat, dan sifat periodik fungsi trigonometri.",
    subTopicsCovered: [
      "Domain, Kodomain, dan Range",
      "Fungsi Polinom",
      "Fungsi Rasional",
      "Fungsi Irasional (Bentuk Akar)",
      "Fungsi Eksponensial",
      "Fungsi Logaritma",
      "Fungsi Nilai Mutlak & Piecewise",
      "Grafik & Periode Fungsi Trigonometri"
    ],
    formulas: [
      {
        id: "mat-alj-fungsi-f01",
        code: "R-01",
        title: "Komposisi Fungsi & Sifat Asosiatif",
        formulaLatex: "(f \\circ g)(x) = f(g(x)) \\\\[4pt] (f \\circ g \\circ h)(x) = f(g(h(x))) \\\\[4pt] (f \\circ g)(x) \\neq (g \\circ f)(x) \\quad (\\text{Tidak komutatif})",
        conditions: "Range dari $g$ harus beririsan dengan domain dari $f$ ($R_g \\cap D_f \\neq \\emptyset$).",
        variables: [
          { symbol: "f \\circ g", desc: "Fungsi komposisi di mana output $g(x)$ menjadi input bagi fungsi $f$" }
        ],
        traps: "Tertukar urutan: $(f \\circ g)(x)$ berarti fungsi $g$ dikerjakan terlebih dahulu, lalu dimasukkan ke $f$.",
        example: {
          question: "Jika $f(x) = 2x + 3$ dan $g(x) = x^2 - 1$, tentukan $(f \\circ g)(x)$ dan $(g \\circ f)(1)$.",
          steps: [
            "$(f \\circ g)(x) = f(g(x)) = 2(x^2 - 1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1$",
            "Hitung $f(1) = 2(1) + 3 = 5$",
            "$(g \\circ f)(1) = g(f(1)) = g(5) = 5^2 - 1 = 25 - 1 = 24$"
          ],
          answer: "$(f \\circ g)(x) = 2x^2 + 1$ dan $(g \\circ f)(1) = 24$"
        }
      },
      {
        id: "mat-alj-fungsi-f02",
        code: "R-02",
        title: "Fungsi Invers & Trik Cepat Invers Pecahan Linear",
        formulaLatex: "f(x) = y \\iff f^{-1}(y) = x \\\\[6pt] \\text{Trik Cepat Linear: } f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}",
        conditions: "Fungsi harus bijektif (satu-satu dan onto). Penyebut $cx - a \\neq 0$.",
        variables: [
          { symbol: "f^{-1}(x)", desc: "Fungsi balikan (invers)" }
        ],
        traps: "Lupa menukar posisi $a$ dan $d$ sekaligus mengubah kedua tandanya menjadi berlawanan.",
        example: {
          question: "Tentukan invers dari fungsi $f(x) = \\frac{3x - 5}{2x + 4}$ untuk $x \\neq -2$.",
          steps: [
            "Identifikasi koefisien: $a = 3, b = -5, c = 2, d = 4$",
            "Terapkan rumus cepat: tukar $a$ dan $d$, beri tanda negatif:",
            "$f^{-1}(x) = \\frac{-4x - 5}{2x - 3} = \\frac{4x + 5}{3 - 2x}$"
          ],
          answer: "$f^{-1}(x) = \\frac{-4x - 5}{2x - 3}$ dengan $x \\neq \\frac{3}{2}$"
        }
      },
      {
        id: "mat-alj-fungsi-f03",
        code: "R-03",
        title: "Sifat Komposisi dan Invers",
        formulaLatex: "(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x) \\\\[4pt] (f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x \\\\[4pt] f(g(x)) = h(x) \\implies g(x) = f^{-1}(h(x))",
        conditions: "Urutan invers komposisi selalu terbalik: $(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$.",
        variables: [
          { symbol: "x", desc: "Fungsi identitas $I(x) = x$" }
        ],
        traps: "Membagi langsung fungsi bukan aljabar sederhana; harus menggunakan komposisi fungsi invers.",
        example: {
          question: "Diketahui $(f \\circ g)(x) = 6x - 7$ dan $f(x) = 2x + 5$. Tentukan rumus fungsi $g(x)$.",
          steps: [
            "Invers fungsi $f$: $y = 2x + 5 \\implies x = \\frac{y - 5}{2} \\implies f^{-1}(x) = \\frac{x - 5}{2}$",
            "Karena $(f \\circ g)(x) = h(x)$, maka $g(x) = f^{-1}(h(x))$:",
            "$g(x) = \\frac{(6x - 7) - 5}{2} = \\frac{6x - 12}{2} = 3x - 6$"
          ],
          answer: "$g(x) = 3x - 6$"
        }
      },
      {
        id: "mat-alj-fungsi-f04",
        code: "R-04",
        title: "Karakteristik & Periode Fungsi Trigonometri",
        formulaLatex: "y = A \\sin(k x \\pm c) + d \\quad \\text{atau} \\quad y = A \\cos(k x \\pm c) + d \\\\[6pt] \\text{Amplitudo} = |A|, \\quad \\text{Periode } (T) = \\frac{2\\pi}{k} = \\frac{360^\\circ}{k} \\\\[4pt] y_{\\max} = |A| + d, \\quad y_{\\min} = -|A| + d",
        conditions: "Untuk fungsi tangen $y = A\\tan(kx)$, periodenya adalah $T = \\frac{\\pi}{k} = \\frac{180^\\circ}{k}$.",
        variables: [
          { symbol: "A", desc: "Amplitudo simpangan maksimum" },
          { symbol: "k", desc: "Koefisien frekuensi sudut" },
          { symbol: "d", desc: "Pergeseran vertikal garis tengah" }
        ],
        traps: "Periode tangen adalah $180^\\circ/k$, sedangkan sinus dan cosinus adalah $360^\\circ/k$.",
        example: {
          question: "Tentukan amplitudo, nilai maksimum, dan periode dari fungsi $y = 3\\sin(2x - 30^\\circ) + 1$.",
          steps: [
            "Amplitudo $= |A| = 3$",
            "Nilai maksimum $= |A| + d = 3 + 1 = 4$",
            "Periode $T = \\frac{360^\\circ}{k} = \\frac{360^\\circ}{2} = 180^\\circ$"
          ],
          answer: "Amplitudo $= 3$, Nilai Maksimum $= 4$, Periode $= 180^\\circ$"
        }
      }
    ]
  },

  "mat-geo-vektor": {
    subChapterId: "mat-geo-vektor",
    title: "Vektor",
    chapterId: "mat-geo",
    chapterTitle: "Geometri dan Pengukuran",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Representasi komponen ruang, panjang/modulus vektor, operasi aljabar vektor, perbandingan ruas garis, perkalian skalar dot product, dan proyeksi ortogonal.",
    subTopicsCovered: [
      "Vektor Bidang (R2) dan Ruang (R3)",
      "Panjang (Modulus) Vektor",
      "Penjumlahan dan Pengurangan Vektor",
      "Perbandingan Ruas Garis Vektor",
      "Perkalian Titik (Dot Product)"
    ],
    formulas: [
      {
        id: "mat-geo-vektor-f01",
        code: "R-01",
        title: "Modulus (Panjang) Vektor & Vektor Satuan",
        formulaLatex: "\\vec{u} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} \\implies |\\vec{u}| = \\sqrt{x^2 + y^2 + z^2} \\\\[6pt] \\hat{u} = \\frac{\\vec{u}}{|\\vec{u}|} \\quad (\\text{Vektor satuan berpanjang } 1)",
        conditions: "Panjang vektor selalu bernilai skalar non-negatif ($|\\vec{u}| \\ge 0$).",
        variables: [
          { symbol: "|\\vec{u}|", desc: "Panjang atau norma vektor" },
          { symbol: "\\hat{u}", desc: "Vektor berarah sama dengan panjang tepat satu satuan" }
        ],
        traps: "Lupa bahwa vektor posisi $\\vec{AB} = \\vec{b} - \\vec{a}$ (titik akhir dikurangi titik awal).",
        example: {
          question: "Jika titik $A(1, -2, 4)$ dan titik $B(3, 2, 0)$, tentukan panjang vektor $\\vec{AB}$.",
          steps: [
            "Tentukan vektor $\\vec{AB} = \\vec{b} - \\vec{a} = \\begin{pmatrix} 3 - 1 \\\\ 2 - (-2) \\\\ 0 - 4 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ -4 \\end{pmatrix}$",
            "Hitung panjang: $|\\vec{AB}| = \\sqrt{2^2 + 4^2 + (-4)^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$"
          ],
          answer: "$6$"
        }
      },
      {
        id: "mat-geo-vektor-f02",
        code: "R-02",
        title: "Pembagian Ruas Garis Vektor",
        formulaLatex: "A - P - B \\text{ dengan } AP : PB = m : n \\\\[6pt] \\vec{p} = \\frac{m \\vec{b} + n \\vec{a}}{m + n}",
        conditions: "Perhatikan rasio perkalian silang: rasio $m$ dikalikan ke vektor posisi ujung seberang $\\vec{b}$, dan rasio $n$ dikalikan ke $\\vec{a}$.",
        variables: [
          { symbol: "\\vec{p}", desc: "Vektor posisi titik pembagi $P$" },
          { symbol: "m, n", desc: "Perbandingan panjang segmen ruas garis" }
        ],
        traps: "Jika titik $P$ membagi di luar ruas garis ($AP : PB = m : -n$), salah satu nilai rasio bertanda negatif.",
        example: {
          question: "Titik $P$ membagi ruas garis $AB$ dengan perbandingan $AP : PB = 2 : 1$. Jika $A(2, 1, -3)$ dan $B(5, 4, 3)$, tentukan koordinat titik $P$.",
          steps: [
            "$\\vec{p} = \\frac{2\\vec{b} + 1\\vec{a}}{2 + 1} = \\frac{2(5, 4, 3) + (2, 1, -3)}{3}$",
            "$\\vec{p} = \\frac{(10, 8, 6) + (2, 1, -3)}{3} = \\frac{(12, 9, 3)}{3} = (4, 3, 1)$"
          ],
          answer: "$P(4, 3, 1)$"
        }
      },
      {
        id: "mat-geo-vektor-f03",
        code: "R-03",
        title: "Perkalian Titik (Dot Product) & Sudut Antara Dua Vektor",
        formulaLatex: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\theta = a_1 b_1 + a_2 b_2 + a_3 b_3 \\\\[6pt] \\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|} \\\\[4pt] \\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0",
        conditions: "Dua vektor saling tegak lurus (ortogonal) jika dan hanya jika dot product-nya sama dengan nol.",
        variables: [
          { symbol: "\\theta", desc: "Sudut apit antara kedua vektor ($0^\\circ \\le \\theta \\le 180^\\circ$)" }
        ],
        traps: "Dot product menghasilkan skalar (angka tunggal), bukan vektor.",
        example: {
          question: "Vektor $\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} x \\\\ 4 \\\\ 2 \\end{pmatrix}$ saling tegak lurus. Tentukan nilai $x$.",
          steps: [
            "Syarat tegak lurus: $\\vec{a} \\cdot \\vec{b} = 0$",
            "$(2)(x) + (-1)(4) + (3)(2) = 0$",
            "$2x - 4 + 6 = 0 \\implies 2x + 2 = 0 \\implies 2x = -2 \\implies x = -1$"
          ],
          answer: "$x = -1$"
        }
      },
      {
        id: "mat-geo-vektor-f04",
        code: "R-04",
        title: "Proyeksi Ortogonal Skalar & Proyeksi Vektor",
        formulaLatex: "\\text{Proyeksi Skalar } \\vec{a} \\text{ pada } \\vec{b}: \\quad |\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} \\\\[6pt] \\text{Proyeksi Vektor } \\vec{a} \\text{ pada } \\vec{b}: \\quad \\vec{c} = \\left( \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\right) \\vec{b}",
        conditions: "Vektor yang dijadikan alas proyeksi berada di penyebut. Jika proyeksi $\\vec{a}$ pada $\\vec{b}$, pembaginya adalah besaran vektor $\\vec{b}$.",
        variables: [
          { symbol: "|\\vec{c}|", desc: "Panjang proyeksi (skalar)" },
          { symbol: "\\vec{c}", desc: "Vektor hasil proyeksi yang searah/sejajar vektor alas $\\vec{b}$" }
        ],
        traps: "Lupa menguadratkan $|\\vec{b}|$ pada rumus proyeksi vektor ortogonal.",
        example: {
          question: "Tentukan proyeksi skalar ortogonal vektor $\\vec{a} = (3, 2, -1)$ pada vektor $\\vec{b} = (2, 2, 1)$.",
          steps: [
            "Hitung dot product: $\\vec{a} \\cdot \\vec{b} = (3)(2) + (2)(2) + (-1)(1) = 6 + 4 - 1 = 9$",
            "Hitung panjang vektor alas $\\vec{b}$: $|\\vec{b}| = \\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$",
            "Proyeksi skalar: $|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{9}{3} = 3$"
          ],
          answer: "$3$"
        }
      }
    ]
  },

  "mat-geo-lingkaran": {
    subChapterId: "mat-geo-lingkaran",
    title: "Lingkaran",
    chapterId: "mat-geo",
    chapterTitle: "Geometri dan Pengukuran",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Persamaan standar dan bentuk umum lingkaran, posisi titik dan garis terhadap lingkaran, garis singgung melalui titik pada lingkaran, garis singgung bergradien $m$, dan elemen busur-juring.",
    subTopicsCovered: [
      "Persamaan Lingkaran",
      "Kedudukan Titik dan Garis",
      "Garis Singgung Lingkaran",
      "Keliling dan Luas Lingkaran",
      "Panjang Busur, Juring, dan Tembereng"
    ],
    formulas: [
      {
        id: "mat-geo-lingkaran-f01",
        code: "R-01",
        title: "Bentuk Baku dan Bentuk Umum Lingkaran",
        formulaLatex: "\\text{Pusat }(a,b), \\text{ Jari-jari } r: \\quad (x - a)^2 + (y - b)^2 = r^2 \\\\[6pt] x^2 + y^2 + Ax + By + C = 0 \\\\[4pt] \\text{Pusat } P = \\left(-\\frac{A}{2}, -\\frac{B}{2}\\right), \\quad r = \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}",
        conditions: "Koefisien $x^2$ dan $y^2$ pada bentuk umum harus sama dengan 1.",
        variables: [
          { symbol: "P(a, b)", desc: "Koordinat titik pusat lingkaran" },
          { symbol: "r", desc: "Panjang jari-jari lingkaran ($r > 0$)" }
        ],
        traps: "Tanda minus pada rumus pusat: $-\\frac{A}{2}$ dan $-\\frac{B}{2}$.",
        example: {
          question: "Tentukan pusat dan jari-jari lingkaran dengan persamaan $x^2 + y^2 - 6x + 8y - 11 = 0$.",
          steps: [
            "Identifikasi: $A = -6, B = 8, C = -11$",
            "Pusat: $P = \\left(-\\frac{-6}{2}, -\\frac{8}{2}\\right) = (3, -4)$",
            "Jari-jari: $r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$"
          ],
          answer: "Pusat $(3, -4)$ dan jari-jari $r = 6$"
        }
      },
      {
        id: "mat-geo-lingkaran-f02",
        code: "R-02",
        title: "Kedudukan Titik dan Garis terhadap Lingkaran",
        formulaLatex: "K = (x_1 - a)^2 + (y_1 - b)^2 - r^2 \\\\[4pt] K < 0 \\implies \\text{Di dalam}, \\quad K = 0 \\implies \\text{Pada kurva}, \\quad K > 0 \\implies \\text{Di luar} \\\\[6pt] \\text{Diskriminan } D = b^2 - 4ac: \\\\[2pt] D > 0 \\implies \\text{Memotong 2 titik}, \\quad D = 0 \\implies \\text{Menyinggung}, \\quad D < 0 \\implies \\text{Tidak memotong}",
        conditions: "Substitusikan persamaan garis $y = mx + n$ ke persamaan lingkaran hingga diperoleh persamaan kuadrat satu variabel.",
        variables: [
          { symbol: "D", desc: "Diskriminan persamaan kuadrat gabungan" }
        ],
        traps: "Menyimpulkan garis menyinggung padahal $D > 0$.",
        example: {
          question: "Tentukan posisi titik $T(5, 1)$ terhadap lingkaran $(x - 2)^2 + (y + 3)^2 = 25$.",
          steps: [
            "Substitusikan $(x, y) = (5, 1)$ ke ruas kiri:",
            "$(5 - 2)^2 + (1 + 3)^2 = 3^2 + 4^2 = 9 + 16 = 25$",
            "Karena hasilnya sama dengan $25$ ($K = 0$), maka titik berada tepat pada lingkaran."
          ],
          answer: "Titik $T(5, 1)$ terletak tepat pada lingkaran."
        }
      },
      {
        id: "mat-geo-lingkaran-f03",
        code: "R-03",
        title: "Garis Singgung Melalui Titik pada Lingkaran (Metode Bagi Adil)",
        formulaLatex: "\\text{Pusat }(0,0): \\quad x_1 x + y_1 y = r^2 \\\\[4pt] \\text{Pusat }(a,b): \\quad (x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2 \\\\[4pt] \\text{Bentuk Umum}: \\quad x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0",
        conditions: "Titik $(x_1, y_1)$ wajib dipastikan terletak tepat pada keliling lingkaran.",
        variables: [
          { symbol: "(x_1, y_1)", desc: "Koordinat titik singgung pada lingkaran" }
        ],
        traps: "Menggunakan rumus bagi adil pada titik yang berada di luar lingkaran.",
        example: {
          question: "Tentukan persamaan garis singgung lingkaran $(x - 1)^2 + (y + 2)^2 = 25$ di titik $(4, 2)$.",
          steps: [
            "Cek: $(4 - 1)^2 + (2 + 2)^2 = 9 + 16 = 25$ (titik sah pada lingkaran)",
            "Gunakan rumus bagi adil: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$",
            "$(4 - 1)(x - 1) + (2 - (-2))(y + 2) = 25$",
            "$3(x - 1) + 4(y + 2) = 25$",
            "$3x - 3 + 4y + 8 = 25 \\implies 3x + 4y + 5 = 25 \\implies 3x + 4y - 20 = 0$"
          ],
          answer: "$3x + 4y - 20 = 0$"
        }
      },
      {
        id: "mat-geo-lingkaran-f04",
        code: "R-04",
        title: "Garis Singgung Lingkaran dengan Gradien Tertentu ($m$)",
        formulaLatex: "\\text{Pusat }(0,0): \\quad y = mx \\pm r\\sqrt{1 + m^2} \\\\[6pt] \\text{Pusat }(a,b): \\quad y - b = m(x - a) \\pm r\\sqrt{1 + m^2}",
        conditions: "Selalu menghasilkan dua buah garis singgung yang saling sejajar (tanda $\\pm$).",
        variables: [
          { symbol: "m", desc: "Kemiringan gradien garis singgung" },
          { symbol: "r", desc: "Jari-jari lingkaran" }
        ],
        traps: "Hanya menulis satu persamaan dan melupakan tanda $\\pm$ yang menghasilkan sepasang garis.",
        example: {
          question: "Tentukan persamaan garis singgung lingkaran $x^2 + y^2 = 9$ yang bergradien $m = 2$.",
          steps: [
            "Pusat $(0, 0)$ dan $r = \\sqrt{9} = 3$",
            "Rumus: $y = mx \\pm r\\sqrt{1 + m^2}$",
            "$y = 2x \\pm 3\\sqrt{1 + 2^2} = 2x \\pm 3\\sqrt{5}$"
          ],
          answer: "$y = 2x + 3\\sqrt{5}$ dan $y = 2x - 3\\sqrt{5}$"
        }
      }
    ]
  },

  "mat-geo-trans": {
    subChapterId: "mat-geo-trans",
    title: "Transformasi Geometri",
    chapterId: "mat-geo",
    chapterTitle: "Geometri dan Pengukuran",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Translasi, refleksi berbagai sumbu dan garis, rotasi sudut sembarang, dilatasi skala faktor, matriks transformasi gabungan, dan luas bayangan.",
    subTopicsCovered: [
      "Translasi",
      "Refleksi",
      "Rotasi",
      "Dilatasi",
      "Matriks Transformasi",
      "Komposisi Transformasi",
      "Luas Bangun Hasil Transformasi"
    ],
    formulas: [
      {
        id: "mat-geo-trans-f01",
        code: "R-01",
        title: "Translasi (Pergeseran)",
        formulaLatex: "\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix} \\\\[6pt] \\text{Bayangan kurva } F(x, y) = 0 \\implies F(x' - a, \\; y' - b) = 0",
        conditions: "Translasi tidak mengubah orientasi dan luas bangun.",
        variables: [
          { symbol: "T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}", desc: "Komponen pergeseran sumbu-x sebesar $a$ dan sumbu-y sebesar $b$" }
        ],
        traps: "Saat mensubstitusikan ke persamaan kurva, gunakan variabel asal: $x = x' - a$ dan $y = y' - b$.",
        example: {
          question: "Tentukan bayangan garis $2x - 3y + 6 = 0$ oleh translasi $T = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$.",
          steps: [
            "$x' = x + 1 \\implies x = x' - 1$",
            "$y' = y - 2 \\implies y = y' + 2$",
            "Substitusikan ke persamaan garis: $2(x' - 1) - 3(y' + 2) + 6 = 0$",
            "$2x' - 2 - 3y' - 6 + 6 = 0 \\implies 2x' - 3y' - 2 = 0$"
          ],
          answer: "$2x - 3y - 2 = 0$"
        }
      },
      {
        id: "mat-geo-trans-f02",
        code: "R-02",
        title: "Tabel Matriks Refleksi (Pencerminan)",
        formulaLatex: "\\begin{aligned} \\text{Sumbu X: } & \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} & \\quad \\text{Sumbu Y: } & \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\[4pt] \\text{Garis } y = x: & \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} & \\quad \\text{Garis } y = -x: & \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} \\\\[4pt] \\text{Titik }(0,0): & \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} & \\quad \\text{Garis } x = h: & x' = 2h - x, \\; y' = y \\\\[4pt] & & \\quad \\text{Garis } y = k: & x' = x, \\; y' = 2k - y \\end{aligned}",
        conditions: "Untuk refleksi terhadap garis $x=h$ atau $y=k$, transformasi bersifat affin (tidak murni linear matriks perkalian nol).",
        variables: [
          { symbol: "(x', y')", desc: "Koordinat bayangan hasil pencerminan" }
        ],
        traps: "Pencerminan terhadap garis $y = -x$ menghasilkan penukaran koordinat sekaligus dinegatifkan keduanya: $(x, y) \\to (-y, -x)$.",
        example: {
          question: "Tentukan bayangan titik $A(3, -5)$ setelah dicerminkan terhadap garis $y = -x$.",
          steps: [
            "Matriks refleksi $y = -x$ adalah $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
            "$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$"
          ],
          answer: "$A'(5, -3)$"
        }
      },
      {
        id: "mat-geo-trans-f03",
        code: "R-03",
        title: "Rotasi terhadap Pusat $(0,0)$ dan Pusat $(a,b)$",
        formulaLatex: "\\text{Pusat }(0,0): \\quad \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\\\[6pt] \\text{Pusat }(a,b): \\quad \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}",
        conditions: "Sudut positif ($\\,+\\theta$) berputar berlawanan arah jarum jam. Sudut negatif searah jarum jam.",
        variables: [
          { symbol: "\\theta", desc: "Besar sudut rotasi" }
        ],
        traps: "Arah putaran: searah jarum jam berarti $\\theta$ bernilai negatif (gunakan $-\\theta$).",
        example: {
          question: "Tentukan bayangan titik $P(4, 2)$ yang dirotasikan sejauh $90^\\circ$ berlawanan arah jarum jam terhadap titik pusat $(0,0)$.",
          steps: [
            "Sudut $\\theta = 90^\\circ \\implies \\cos 90^\\circ = 0, \\sin 90^\\circ = 1$",
            "$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$"
          ],
          answer: "$P'(-2, 4)$"
        }
      },
      {
        id: "mat-geo-trans-f04",
        code: "R-04",
        title: "Dilatasi (Perkalian Skala)",
        formulaLatex: "\\text{Pusat }(0,0): \\quad \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix} \\\\[6pt] \\text{Pusat }(a,b): \\quad \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = k \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}",
        conditions: "Faktor skala $k \\neq 0$. Jika $k < 0$, bangun diperbesar/diperkecil dan posisinya berbalik arah.",
        variables: [
          { symbol: "k", desc: "Faktor perbesaran skala dilatasi" }
        ],
        traps: "Lupa menambahkan kembali titik pusat $(a, b)$ setelah dikalikan dengan faktor skala $k$.",
        example: {
          question: "Titik $B(-1, 3)$ didilatasikan dengan faktor skala $k = 3$ dan berpusat di titik $P(1, 2)$. Tentukan koordinat titik bayangannya.",
          steps: [
            "$x' = k(x - a) + a = 3(-1 - 1) + 1 = 3(-2) + 1 = -6 + 1 = -5$",
            "$y' = k(y - b) + b = 3(3 - 2) + 2 = 3(1) + 2 = 5$"
          ],
          answer: "$B'(-5, 5)$"
        }
      },
      {
        id: "mat-geo-trans-f05",
        code: "R-05",
        title: "Komposisi Transformasi & Luas Bangun Bayangan",
        formulaLatex: "\\text{Transformasi } T_1 \\text{ dilanjutkan } T_2: \\quad M = M_2 \\times M_1 \\\\[6pt] \\text{Luas Bayangan } L': \\quad L' = |\\det(M)| \\times L",
        conditions: "Perkalian matriks komposisi disusun dari kanan ke kiri: transformasi pertama diletakkan di sebelah kanan.",
        variables: [
          { symbol: "M", desc: "Matriks tunggal representasi komposisi transformasi" },
          { symbol: "L, L'", desc: "Luas bangun mula-mula dan luas bangun bayangan" }
        ],
        traps: "Menyusun perkalian matriks secara terbalik: $T_2 \\circ T_1 = M_2 \\times M_1$ (bukan $M_1 \\times M_2$).",
        example: {
          question: "Segitiga $ABC$ memiliki luas $12\\text{ cm}^2$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 1 \\\\ -2 & 4 \\end{pmatrix}$. Tentukan luas segitiga bayangannya.",
          steps: [
            "Hitung determinan matriks: $\\det(M) = (3)(4) - (1)(-2) = 12 + 2 = 14$",
            "Luas bayangan: $L' = |\\det(M)| \\times L = |14| \\times 12 = 168\\text{ cm}^2$"
          ],
          answer: "$168\\text{ cm}^2$"
        }
      }
    ]
  },

  "mat-lim-fungsi": {
    subChapterId: "mat-lim-fungsi",
    title: "Limit Fungsi",
    chapterId: "mat-lim",
    chapterTitle: "Kalkulus Limit",
    pillarId: "matematika",
    pillarTitle: "Matematika Lanjut",
    summary: "Limit fungsi aljabar tentu & tak tentu 0/0, metode faktorisasi, perkalian sekawan akar, teorema L'Hopital, limit menuju tak hingga, dan teorema limit trigonometri.",
    subTopicsCovered: [
      "Limit Fungsi Aljabar",
      "Limit Fungsi Piecewise",
      "Limit Menuju Tak Hingga",
      "Limit Fungsi Trigonometri"
    ],
    formulas: [
      {
        id: "mat-lim-fungsi-f01",
        code: "R-01",
        title: "Limit Bentuk Tak Tentu $\\frac{0}{0}$ & Dalil L'Hôpital",
        formulaLatex: "\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{0}{0} \\implies \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}",
        conditions: "Hanya berlaku jika hasil substitusi awal bernilai tak tentu $\\frac{0}{0}$ atau $\\frac{\\infty}{\\infty}$. Turunkan pembilang dan penyebut secara terpisah (bukan turunan pecahan $u/v$).",
        variables: [
          { symbol: "f'(x), g'(x)", desc: "Turunan pertama dari masing-masing fungsi pembilang dan penyebut" }
        ],
        traps: "Menggunakan aturan turunan bagi $\\frac{u'v - uv'}{v^2}$; pada Dalil L'Hopital turunkan masing-masing secara independen.",
        example: {
          question: "Tentukan nilai dari $\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 + x - 6}$.",
          steps: [
            "Substitusi $x = 2$: $\\frac{2^3 - 8}{2^2 + 2 - 6} = \\frac{0}{0}$ (Bentuk tak tentu, terapkan L'Hopital)",
            "Turunkan pembilang: $(x^3 - 8)' = 3x^2$",
            "Turunkan penyebut: $(x^2 + x - 6)' = 2x + 1$",
            "Hitung limit baru: $\\lim_{x \\to 2} \\frac{3x^2}{2x + 1} = \\frac{3(2)^2}{2(2) + 1} = \\frac{12}{5}$"
          ],
          answer: "$\\frac{12}{5} = 2{,}4$"
        }
      },
      {
        id: "mat-lim-fungsi-f02",
        code: "R-02",
        title: "Limit Tak Hingga Fungsi Rasional",
        formulaLatex: "\\lim_{x \\to \\infty} \\frac{a x^m + \\dots}{b x^n + \\dots} = \\begin{cases} \\frac{a}{b}, & m = n \\\\ 0, & m < n \\\\ \\infty, & m > n \\; (a,b > 0) \\end{cases}",
        conditions: "Cukup perhatikan derajat tertinggi pembilang ($m$) dan penyebut ($n$).",
        variables: [
          { symbol: "m, n", desc: "Pangkat tertinggi dari suku pembilang dan penyebut" }
        ],
        traps: "Mengabaikan suku derajat tertinggi jika letak sukunya sengaja diacak di barisan belakang.",
        example: {
          question: "Hitung nilai dari $\\lim_{x \\to \\infty} \\frac{(2x - 1)(3x + 2)}{4x^2 + 5x - 1}$.",
          steps: [
            "Uraikan suku berpangkat tertinggi pada pembilang: $(2x)(3x) = 6x^2$",
            "Pangkat tertinggi penyebut adalah $4x^2$",
            "Karena derajat pembilang sama dengan penyebut ($m = n = 2$):",
            "$\\text{Limit} = \\frac{\\text{koefisien pembilang}}{\\text{koefisien penyebut}} = \\frac{6}{4} = \\frac{3}{2}$"
          ],
          answer: "$\\frac{3}{2}$"
        }
      },
      {
        id: "mat-lim-fungsi-f03",
        code: "R-03",
        title: "Trik Cepat Limit Selisih Bentuk Akar Tak Hingga",
        formulaLatex: "\\lim_{x \\to \\infty} \\left(\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q}\\right) = \\frac{b - p}{2\\sqrt{a}}",
        conditions: "Koefisien suku $x^2$ di bawah kedua akar harus sama persis bernilai $a$. Jika koefisien pertama lebih besar hasilnya $+\\infty$, jika lebih kecil hasilnya $-\\infty$.",
        variables: [
          { symbol: "b, p", desc: "Koefisien di depan variabel $x$ pada akar pertama dan kedua" }
        ],
        traps: "Jika di luar akar terdapat suku $- kx$, ubah dulu menjadi $-\\sqrt{k^2 x^2}$ sebelum menerapkan rumus.",
        example: {
          question: "Tentukan nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 8x - 5} - \\sqrt{4x^2 - 4x + 1}\\right)$.",
          steps: [
            "Identifikasi: $a = 4, b = 8, p = -4$",
            "Gunakan rumus cepat $\\frac{b - p}{2\\sqrt{a}}$:",
            "$\\frac{8 - (-4)}{2\\sqrt{4}} = \\frac{8 + 4}{2(2)} = \\frac{12}{4} = 3$"
          ],
          answer: "$3$"
        }
      },
      {
        id: "mat-lim-fungsi-f04",
        code: "R-04",
        title: "Teorema Limit Trigonometri Dasar",
        formulaLatex: "\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b} \\\\[6pt] \\text{Pendekatan Cepat Taylor: } \\quad 1 - \\cos(kx) \\approx \\frac{1}{2}(kx)^2 \\quad \\text{saat } x \\to 0",
        conditions: "Hanya berlaku jika variabel mendekati nol ($x \\to 0$) dan fungsi berbentuk sinus atau tangen. Cosinus harus diubah dengan identitas sudut rangkap atau pendekatan kuadrat.",
        variables: [
          { symbol: "a, b, k", desc: "Koefisien numerik variabel sudut" }
        ],
        traps: "Langsung mencoret nilai cosinus tanpa diubah: $\\lim_{x \\to 0} \\frac{\\cos x}{x} \\neq 1$.",
        example: {
          question: "Hitung nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\sin 2x}$.",
          steps: [
            "Gunakan pendekatan $1 - \\cos 4x = 2\\sin^2 2x$ atau aproksimasi $\\frac{1}{2}(4x)^2 = \\frac{1}{2}(16x^2) = 8x^2$",
            "Penyebut: $x \\sin 2x \\approx x(2x) = 2x^2$",
            "Limit $= \\lim_{x \\to 0} \\frac{8x^2}{2x^2} = \\frac{8}{2} = 4$"
          ],
          answer: "$4$"
        }
      },
      {
        id: "mat-lim-fungsi-f05",
        code: "R-05",
        title: "Syarat Kontinuitas Fungsi",
        formulaLatex: "f(x) \\text{ kontinu di } x = c \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)",
        conditions: "Limit kiri harus sama dengan limit kanan, dan nilainya harus sama dengan nilai fungsi di titik tersebut.",
        variables: [
          { symbol: "c", desc: "Titik batas diskontinuitas yang diuji" }
        ],
        traps: "Lupa mengecek apakah $f(c)$ terdefinisi secara nyata.",
        example: {
          question: "Tentukan nilai $k$ agar fungsi $f(x) = \\begin{cases} 2x + k, & x < 3 \\\\ x^2 - 1, & x \\ge 3 \\end{cases}$ kontinu di $x = 3$.",
          steps: [
            "Limit kiri: $\\lim_{x \\to 3^-} (2x + k) = 2(3) + k = 6 + k$",
            "Limit kanan & nilai fungsi: $\\lim_{x \\to 3^+} (x^2 - 1) = 3^2 - 1 = 9 - 1 = 8$",
            "Syarat kontinu: $\\text{Limit Kiri} = \\text{Limit Kanan} \\implies 6 + k = 8 \\implies k = 2$"
          ],
          answer: "$k = 2$"
        }
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_MATEMATIKA;
}
if (typeof window !== 'undefined') {
  window.FORMULAS_MATEMATIKA = FORMULAS_MATEMATIKA;
}
