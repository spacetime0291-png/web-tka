/**
 * Batch Task: TASK_mat-geo-trans-komposisi_MEDIUM
 * SubTopic: Transformasi Geometri: Komposisi Transformasi (mat-geo-trans-komposisi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-trans-komposisi-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Matriks Dilanjutkan Translasi pada Garis",
    difficulty: "sedang",
    statement: "Garis $g: 2x - 3y + 1 = 0$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ kemudian dilanjutkan pergeseran oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Persamaan bayangan garis tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3x + 2y - 3 = 0$",
      "$3x - 2y - 3 = 0$",
      "$2x + 3y - 3 = 0$",
      "$3x + 2y + 3 = 0$",
      "$-3x + 2y - 1 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Cari relasi variabel asal $(x, y)$ terhadap variabel akhir $(x', y')$ melalui dua tahap transformasi berurutan: pertama transformasi linear oleh matriks, kemudian translasi.",
      steps: "1. Transformasi matriks $\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -y \\\\ x \\end{pmatrix}$.\nSehingga $x_1 = -y \\iff y = -x_1$ dan $y_1 = x \\iff x = y_1$.\n2. Translasi oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$:\n$$x' = x_1 + 2 \\implies x_1 = x' - 2$$\n$$y' = y_1 - 1 \\implies y_1 = y' + 1$$\n3. Nyatakan variabel asal $x$ dan $y$ dalam $x'$ dan $y'$:\n$$x = y_1 = y' + 1$$\n$$y = -x_1 = -(x' - 2) = -x' + 2$$\n4. Substitusikan ke persamaan garis $2x - 3y + 1 = 0$:\n$$2(y' + 1) - 3(-x' + 2) + 1 = 0$$\n$$2y' + 2 + 3x' - 6 + 1 = 0$$\n$$3x' + 2y' - 3 = 0$$\n5. Persamaan bayangan garis adalah $3x + 2y - 3 = 0$ (pilihan A).",
      pitfalls: "Salah membalikkan urutan substitusi variabel atau keliru tanda minus ketika mengalikan $-3(-x' + 2)$."
    }
  },
  {
    id: "mat-geo-trans-komposisi-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Refleksi Dua Garis Tegak Lurus",
    difficulty: "sedang",
    statement: "Titik $P(5, -2)$ dicerminkan terhadap garis $x = 3$ kemudian dilanjutkan pencerminan terhadap garis $y = 1$. Koordinat bayangan akhir titik $P$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(1, 4)$",
      "$(1, -4)$",
      "$(4, 1)$",
      "$(-1, 4)$",
      "$(7, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Refleksi berturut-turut terhadap dua garis yang saling tegak lurus $x = h$ dan $y = k$ setara dengan rotasi $180^\\circ$ berpusat di titik potong $(h, k)$, dengan rumus $x' = 2h - x$ dan $y' = 2k - y$.",
      steps: "1. Garis pencerminan pertama adalah $x = 3$ ($h = 3$) dan garis kedua adalah $y = 1$ ($k = 1$).\n2. Titik asal adalah $P(5, -2)$, dengan $x = 5$ dan $y = -2$.\n3. Hitung koordinat bayangan akhir secara simultan:\n$$x' = 2h - x = 2(3) - 5 = 6 - 5 = 1$$\n$$y' = 2k - y = 2(1) - (-2) = 2 + 2 = 4$$\n4. Koordinat bayangan akhir adalah $P'(1, 4)$.\n5. Jadi, jawabannya adalah $(1, 4)$ (pilihan A).",
      pitfalls: "Keliru saat mengurangkan bilangan negatif pada ordinat: $2 - (-2) = 4$, bukan $0$."
    }
  },
  {
    id: "mat-geo-trans-komposisi-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Matriks Transformasi Terhadap Parabola",
    difficulty: "sedang",
    statement: "Kurva parabola $y = x^2 - 4$ dicerminkan terhadap garis $y = x$ kemudian dilanjutkan dilatasi dengan pusat $O(0, 0)$ dan faktor skala $k = 2$. Persamaan kurva bayangannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$y^2 = 2x + 16$",
      "$y^2 = 4x - 16$",
      "$x^2 = 2y + 16$",
      "$y^2 = \\frac{1}{2}x - 4$",
      "$y^2 = 4x + 16$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pencerminan terhadap $y = x$ menukar variabel $(x, y) \\to (y, x)$. Dilatasi $[O, k]$ memperbesar koordinat menurut $(x', y') = (kx_1, ky_1)$.",
      steps: "1. Hubungkan variabel bayangan akhir $(x', y')$ dengan variabel awal $(x, y)$:\n$$x' = 2x_1 = 2y \\iff y = \\frac{x'}{2}$$\n$$y' = 2y_1 = 2x \\iff x = \\frac{y'}{2}$$\n2. Substitusikan ke dalam persamaan parabola $y = x^2 - 4$:\n$$\\frac{x'}{2} = \\left(\\frac{y'}{2}\\right)^2 - 4$$\n$$\\frac{x'}{2} = \\frac{y'^2}{4} - 4$$\n3. Kalikan seluruh ruas dengan $4$:\n$$2x' = y'^2 - 16$$\n$$y'^2 = 2x' + 16$$\n4. Diperoleh persamaan bayangannya adalah $y^2 = 2x + 16$ (pilihan A).",
      pitfalls: "Lupa membagi 2 pada variabel $x$ dan $y$ saat mensubstitusikan hasil dilatasi ke fungsi semula."
    }
  },
  {
    id: "mat-geo-trans-komposisi-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Komposisi Dua Rotasi dengan Pusat Berbeda",
    difficulty: "sedang",
    statement: "Titik $A(3, 1)$ dirotasikan sebesar $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $P(1, 1)$, kemudian dilanjutkan rotasi sebesar $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $Q(0, 2)$. Koordinat bayangan akhir titik $A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-1, 3)$",
      "$(1, 3)$",
      "$(-1, 1)$",
      "$(3, -1)$",
      "$(0, 4)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jika dua rotasi memiliki pusat yang berbeda, kita tidak dapat langsung menjumlahkan sudutnya begitu saja; kita harus menghitung koordinat bayangan tahap demi tahap secara berurutan.",
      steps: "1. Rotasi pertama: titik awal $A(3, 1)$, pusat $P(1, 1)$, sudut $90^\\circ$:\n$$x_1 - 1 = -(y - 1) = -(1 - 1) = 0 \\implies x_1 = 1$$\n$$y_1 - 1 = x - 1 = 3 - 1 = 2 \\implies y_1 = 3$$\nDiperoleh bayangan sementara $A_1(1, 3)$.\n2. Rotasi kedua: titik asal $A_1(1, 3)$, pusat $Q(0, 2)$, sudut $90^\\circ$:\n$$x' - 0 = -(y_1 - 2) = -(3 - 2) = -1 \\implies x' = -1$$\n$$y' - 2 = x_1 - 0 = 1 - 0 = 1 \\implies y' = 2 + 1 = 3$$\n3. Koordinat bayangan akhir adalah $A'(-1, 3)$.\n4. Jadi, jawabannya adalah $(-1, 3)$ (pilihan A).",
      pitfalls: "Langsung menggabungkan menjadi rotasi $180^\\circ$ terhadap pusat $P$ atau pusat $Q$, yang tidak berlaku untuk dua rotasi dengan pusat yang berbeda."
    }
  },
  {
    id: "mat-geo-trans-komposisi-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-trans",
    subTopicId: "mat-geo-trans-komposisi",
    category: "Nilai Parameter dari Komposisi Dua Matriks Transformasi",
    difficulty: "sedang",
    statement: "Transformasi $T_1$ dan $T_2$ masing-masing dinyatakan oleh matriks $M_1 = \\begin{pmatrix} 2 & a \\\\ 1 & 3 \\end{pmatrix}$ dan $M_2 = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$. Jika bayangan titik $P(1, 1)$ oleh komposisi $T_2 \\circ T_1$ adalah titik $P'(-7, 4)$, maka nilai konstanta $a$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-3$",
      "$-1$",
      "$1$",
      "$3$",
      "$5$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bayangan titik $P$ oleh komposisi transformasi $T_2 \\circ T_1$ dihitung dengan mengalikan matriks $M_2$ terhadap hasil kali $M_1 P$: $P' = M_2 (M_1 P)$.",
      steps: "1. Hitung hasil perkalian matriks pertama dengan titik $P(1, 1)$:\n$$M_1 \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 & a \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix}$$\n2. Kalikan hasil tersebut dengan matriks kedua $M_2$:\n$$M_2 \\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} (2 + a) - 2(4) \\\\ 0 + 4 \\end{pmatrix} = \\begin{pmatrix} a - 6 \\\\ 4 \\end{pmatrix}$$\n3. Samakan dengan koordinat bayangan $P'(-7, 4)$:\n$$a - 6 = -7 \\implies a = -7 + 6 = -1$$\n4. Jadi, nilai konstanta $a$ adalah $-1$ (pilihan B).",
      pitfalls: "Menghitung urutan perkalian matriks secara terbalik ($T_1 \\circ T_2$), yaitu mengalikan $M_1$ dengan $M_2 P$."
    }
  }
];
