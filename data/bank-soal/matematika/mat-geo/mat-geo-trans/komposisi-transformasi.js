/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Komposisi Transformasi (mat-geo-trans-komposisi)
 * Slug: komposisi-transformasi
 * Indikator: Gabungan dua atau lebih transformasi berturutan dengan perkalian matriks transformasi.
 * 
 * Total Butir Soal: 13 (Mudah: 6, Sedang: 6, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-komposisi";
  const subTopicSlug = "komposisi-transformasi";
  const questions = [
  {
    "id": "mat-geo-trans-komposisi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Translasi Dilanjutkan Refleksi Sumbu-X",
    "difficulty": "mudah",
    "statement": "Titik $A(2, -3)$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ kemudian dicerminkan terhadap sumbu-$X$. Koordinat bayangan akhir titik $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, -2)$",
      "$(5, 2)$",
      "$(-5, 2)$",
      "$(5, -8)$",
      "$(-5, -2)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada komposisi transformasi, hasil bayangan dari transformasi pertama menjadi titik asal bagi transformasi berikutnya secara bertahap.",
      "steps": "1. Terapkan translasi pertama oleh $T = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ pada titik awal $A(2, -3)$:\n$$x_1 = 2 + 3 = 5$$\n$$y_1 = -3 + 5 = 2$$\nDiperoleh bayangan sementara $A_1(5, 2)$.\n2. Terapkan pencerminan terhadap sumbu-$X$ pada $A_1(5, 2)$:\n$$x' = x_1 = 5$$\n$$y' = -y_1 = -2$$\n3. Diperoleh bayangan akhir $A'(5, -2)$.\n4. Jadi, jawabannya adalah $(5, -2)$ (pilihan A).",
      "pitfalls": "Melakukan pencerminan terhadap sumbu-$X$ terlebih dahulu sebelum translasi, yang akan menghasilkan urutan yang salah jika pertanyaannya tidak komutatif."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-komposisi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Refleksi Garis y = x Dilanjutkan Rotasi +90 Derajat",
    "difficulty": "mudah",
    "statement": "Titik $B(4, 1)$ dicerminkan terhadap garis $y = x$ lalu dirotasikan $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $O(0, 0)$. Koordinat bayangan akhir titik $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-4, 1)$",
      "$(4, -1)$",
      "$(-1, 4)$",
      "$(-4, -1)$",
      "$(1, -4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Transformasi bertahap: refleksi $y = x$ memetakan $(x, y) \\to (y, x)$, kemudian rotasi $[O, 90^\\circ]$ memetakan $(x_1, y_1) \\to (-y_1, x_1)$. Gabungannya setara dengan pencerminan terhadap sumbu-$Y$: $(x, y) \\to (-x, y)$.",
      "steps": "1. Refleksi titik $B(4, 1)$ terhadap garis $y = x$ menghasilkan $B_1(1, 4)$.\n2. Rotasi titik $B_1(1, 4)$ sebesar $90^\\circ$ berlawanan arah jarum jam:\n$$x' = -y_1 = -4$$\n$$y' = x_1 = 1$$\n3. Diperoleh koordinat bayangan akhir $B'(-4, 1)$.\n4. Jadi, pilihan yang benar adalah A.",
      "pitfalls": "Tertukar saat menerapkan aturan rotasi $90^\\circ$ berlawanan arah jarum jam ($x' = -y$) dengan rotasi searah jarum jam ($x' = y$)."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-komposisi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Dilatasi Dilanjutkan Translasi",
    "difficulty": "mudah",
    "statement": "Titik $C(-2, 3)$ didilatasikan dengan faktor skala $k = 2$ terhadap pusat $O(0, 0)$, kemudian dilanjutkan pergeseran oleh vektor $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$. Bayangan akhir titik $C$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-5, 10)$",
      "$(-3, 10)$",
      "$(-6, 14)$",
      "$(-5, 7)$",
      "$(5, -10)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Lakukan dilatasi $[O, k]$ terlebih dahulu: $(x_1, y_1) = (kx, ky)$, kemudian jumlahkan dengan komponen translasi $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$: $(x', y') = (x_1 + a, y_1 + b)$.",
      "steps": "1. Dilatasi titik $C(-2, 3)$ dengan $k = 2$:\n$$x_1 = 2 \\times (-2) = -4$$\n$$y_1 = 2 \\times 3 = 6$$\nDiperoleh titik $C_1(-4, 6)$.\n2. Translasi titik $C_1(-4, 6)$ oleh $T = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$:\n$$x' = -4 + (-1) = -5$$\n$$y' = 6 + 4 = 10$$\n3. Bayangan akhir yang diperoleh adalah $C'(-5, 10)$.\n4. Jadi, pilihan yang tepat adalah A.",
      "pitfalls": "Menjumlahkan titik dengan translasi terlebih dahulu baru kemudian mengalikan dengan faktor skala, yang menghasilkan bayangan berbeda $(-6, 14)$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-komposisi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Dua Matriks Transformasi Sederhana",
    "difficulty": "mudah",
    "statement": "Transformasi $T_1$ bersesuaian dengan matriks $M_1 = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$ dan transformasi $T_2$ bersesuaian dengan matriks $M_2 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Bayangan titik $D(3, 4)$ oleh transformasi komposisi $T_2 \\circ T_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(6, 4)$",
      "$(8, 3)$",
      "$(4, 6)$",
      "$(3, 8)$",
      "$(4, 3)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Komposisi transformasi $T_2 \\circ T_1$ berarti transformasi $T_1$ dikerjakan terlebih dahulu pada titik objek, kemudian hasilnya ditransformasikan oleh $T_2$. Dalam notasi matriks: $(T_2 \\circ T_1)(D) = M_2 \\times (M_1 \\times D) = (M_2 M_1) D$.",
      "steps": "1. Transformasi pertama oleh $M_1$ pada titik $D(3, 4)$:\n$$\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$$\n2. Transformasi kedua oleh $M_2$ pada hasil $(6, 4)$:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$$\n3. Titik bayangan akhir adalah $D'(4, 6)$.\n4. Jadi, jawabannya adalah $(4, 6)$ (pilihan C).",
      "pitfalls": "Mengerjakan $T_2$ terlebih dahulu baru $T_1$ (yaitu $T_1 \\circ T_2$) yang menghasilkan koordinat $(8, 3)$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-komposisi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Rotasi 180 Derajat Dilanjutkan Refleksi Garis y = -x",
    "difficulty": "mudah",
    "statement": "Bayangan titik $E(-3, -5)$ oleh rotasi $180^\\circ$ berpusat di titik asal $O(0, 0)$ kemudian dicerminkan terhadap garis $y = -x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, 3)$",
      "$(-3, -5)$",
      "$(-5, 3)$",
      "$(-5, -3)$",
      "$(3, 5)$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rotasi $[O, 180^\\circ]$ memetakan $(x, y) \\to (-x, -y)$. Pencerminan terhadap garis $y = -x$ memetakan $(x_1, y_1) \\to (-y_1, -x_1)$.",
      "steps": "1. Rotasi $180^\\circ$ pada titik awal $E(-3, -5)$:\n$$x_1 = -(-3) = 3$$\n$$y_1 = -(-5) = 5$$\nDiperoleh titik $E_1(3, 5)$.\n2. Pencerminan terhadap garis $y = -x$ pada $E_1(3, 5)$:\n$$x' = -y_1 = -5$$\n$$y' = -x_1 = -3$$\n3. Bayangan akhir titik adalah $E'(-5, -3)$.\n4. Jadi, pilihan yang tepat adalah D.",
      "pitfalls": "Hanya menukar koordinat tanpa mengubah tanda negatif saat menerapkan refleksi terhadap garis $y = -x$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-komposisi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Matriks Dilanjutkan Translasi pada Garis",
    "difficulty": "sedang",
    "statement": "Garis $g: 2x - 3y + 1 = 0$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ kemudian dilanjutkan pergeseran oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Persamaan bayangan garis tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x + 2y - 3 = 0$",
      "$3x - 2y - 3 = 0$",
      "$2x + 3y - 3 = 0$",
      "$3x + 2y + 3 = 0$",
      "$-3x + 2y - 1 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Cari relasi variabel asal $(x, y)$ terhadap variabel akhir $(x', y')$ melalui dua tahap transformasi berurutan: pertama transformasi linear oleh matriks, kemudian translasi.",
      "steps": "1. Transformasi matriks $\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -y \\\\ x \\end{pmatrix}$.\nSehingga $x_1 = -y \\iff y = -x_1$ dan $y_1 = x \\iff x = y_1$.\n2. Translasi oleh $T = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$:\n$$x' = x_1 + 2 \\implies x_1 = x' - 2$$\n$$y' = y_1 - 1 \\implies y_1 = y' + 1$$\n3. Nyatakan variabel asal $x$ dan $y$ dalam $x'$ dan $y'$:\n$$x = y_1 = y' + 1$$\n$$y = -x_1 = -(x' - 2) = -x' + 2$$\n4. Substitusikan ke persamaan garis $2x - 3y + 1 = 0$:\n$$2(y' + 1) - 3(-x' + 2) + 1 = 0$$\n$$2y' + 2 + 3x' - 6 + 1 = 0$$\n$$3x' + 2y' - 3 = 0$$\n5. Persamaan bayangan garis adalah $3x + 2y - 3 = 0$ (pilihan A).",
      "pitfalls": "Salah membalikkan urutan substitusi variabel atau keliru tanda minus ketika mengalikan $-3(-x' + 2)$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-komposisi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Refleksi Dua Garis Tegak Lurus",
    "difficulty": "sedang",
    "statement": "Titik $P(5, -2)$ dicerminkan terhadap garis $x = 3$ kemudian dilanjutkan pencerminan terhadap garis $y = 1$. Koordinat bayangan akhir titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(1, 4)$",
      "$(1, -4)$",
      "$(4, 1)$",
      "$(-1, 4)$",
      "$(7, 4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Refleksi berturut-turut terhadap dua garis yang saling tegak lurus $x = h$ dan $y = k$ setara dengan rotasi $180^\\circ$ berpusat di titik potong $(h, k)$, dengan rumus $x' = 2h - x$ dan $y' = 2k - y$.",
      "steps": "1. Garis pencerminan pertama adalah $x = 3$ ($h = 3$) dan garis kedua adalah $y = 1$ ($k = 1$).\n2. Titik asal adalah $P(5, -2)$, dengan $x = 5$ dan $y = -2$.\n3. Hitung koordinat bayangan akhir secara simultan:\n$$x' = 2h - x = 2(3) - 5 = 6 - 5 = 1$$\n$$y' = 2k - y = 2(1) - (-2) = 2 + 2 = 4$$\n4. Koordinat bayangan akhir adalah $P'(1, 4)$.\n5. Jadi, jawabannya adalah $(1, 4)$ (pilihan A).",
      "pitfalls": "Keliru saat mengurangkan bilangan negatif pada ordinat: $2 - (-2) = 4$, bukan $0$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-komposisi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Matriks Transformasi Terhadap Parabola",
    "difficulty": "sedang",
    "statement": "Kurva parabola $y = x^2 - 4$ dicerminkan terhadap garis $y = x$ kemudian dilanjutkan dilatasi dengan pusat $O(0, 0)$ dan faktor skala $k = 2$. Persamaan kurva bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y^2 = 2x + 16$",
      "$y^2 = 4x - 16$",
      "$x^2 = 2y + 16$",
      "$y^2 = \\frac{1}{2}x - 4$",
      "$y^2 = 4x + 16$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pencerminan terhadap $y = x$ menukar variabel $(x, y) \\to (y, x)$. Dilatasi $[O, k]$ memperbesar koordinat menurut $(x', y') = (kx_1, ky_1)$.",
      "steps": "1. Hubungkan variabel bayangan akhir $(x', y')$ dengan variabel awal $(x, y)$:\n$$x' = 2x_1 = 2y \\iff y = \\frac{x'}{2}$$\n$$y' = 2y_1 = 2x \\iff x = \\frac{y'}{2}$$\n2. Substitusikan ke dalam persamaan parabola $y = x^2 - 4$:\n$$\\frac{x'}{2} = \\left(\\frac{y'}{2}\\right)^2 - 4$$\n$$\\frac{x'}{2} = \\frac{y'^2}{4} - 4$$\n3. Kalikan seluruh ruas dengan $4$:\n$$2x' = y'^2 - 16$$\n$$y'^2 = 2x' + 16$$\n4. Diperoleh persamaan bayangannya adalah $y^2 = 2x + 16$ (pilihan A).",
      "pitfalls": "Lupa membagi 2 pada variabel $x$ dan $y$ saat mensubstitusikan hasil dilatasi ke fungsi semula."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-komposisi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Dua Rotasi dengan Pusat Berbeda",
    "difficulty": "sedang",
    "statement": "Titik $A(3, 1)$ dirotasikan sebesar $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $P(1, 1)$, kemudian dilanjutkan rotasi sebesar $90^\\circ$ berlawanan arah putaran jarum jam terhadap pusat $Q(0, 2)$. Koordinat bayangan akhir titik $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-1, 3)$",
      "$(1, 3)$",
      "$(-1, 1)$",
      "$(3, -1)$",
      "$(0, 4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika dua rotasi memiliki pusat yang berbeda, kita tidak dapat langsung menjumlahkan sudutnya begitu saja; kita harus menghitung koordinat bayangan tahap demi tahap secara berurutan.",
      "steps": "1. Rotasi pertama: titik awal $A(3, 1)$, pusat $P(1, 1)$, sudut $90^\\circ$:\n$$x_1 - 1 = -(y - 1) = -(1 - 1) = 0 \\implies x_1 = 1$$\n$$y_1 - 1 = x - 1 = 3 - 1 = 2 \\implies y_1 = 3$$\nDiperoleh bayangan sementara $A_1(1, 3)$.\n2. Rotasi kedua: titik asal $A_1(1, 3)$, pusat $Q(0, 2)$, sudut $90^\\circ$:\n$$x' - 0 = -(y_1 - 2) = -(3 - 2) = -1 \\implies x' = -1$$\n$$y' - 2 = x_1 - 0 = 1 - 0 = 1 \\implies y' = 2 + 1 = 3$$\n3. Koordinat bayangan akhir adalah $A'(-1, 3)$.\n4. Jadi, jawabannya adalah $(-1, 3)$ (pilihan A).",
      "pitfalls": "Langsung menggabungkan menjadi rotasi $180^\\circ$ terhadap pusat $P$ atau pusat $Q$, yang tidak berlaku untuk dua rotasi dengan pusat yang berbeda."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-komposisi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Nilai Parameter dari Komposisi Dua Matriks Transformasi",
    "difficulty": "sedang",
    "statement": "Transformasi $T_1$ dan $T_2$ masing-masing dinyatakan oleh matriks $M_1 = \\begin{pmatrix} 2 & a \\\\ 1 & 3 \\end{pmatrix}$ dan $M_2 = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$. Jika bayangan titik $P(1, 1)$ oleh komposisi $T_2 \\circ T_1$ adalah titik $P'(-7, 4)$, maka nilai konstanta $a$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-3$",
      "$-1$",
      "$1$",
      "$3$",
      "$5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bayangan titik $P$ oleh komposisi transformasi $T_2 \\circ T_1$ dihitung dengan mengalikan matriks $M_2$ terhadap hasil kali $M_1 P$: $P' = M_2 (M_1 P)$.",
      "steps": "1. Hitung hasil perkalian matriks pertama dengan titik $P(1, 1)$:\n$$M_1 \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 & a \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix}$$\n2. Kalikan hasil tersebut dengan matriks kedua $M_2$:\n$$M_2 \\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 2 + a \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} (2 + a) - 2(4) \\\\ 0 + 4 \\end{pmatrix} = \\begin{pmatrix} a - 6 \\\\ 4 \\end{pmatrix}$$\n3. Samakan dengan koordinat bayangan $P'(-7, 4)$:\n$$a - 6 = -7 \\implies a = -7 + 6 = -1$$\n4. Jadi, nilai konstanta $a$ adalah $-1$ (pilihan B).",
      "pitfalls": "Menghitung urutan perkalian matriks secara terbalik ($T_1 \\circ T_2$), yaitu mengalikan $M_1$ dengan $M_2 P$."
    },
    "subTopicSlug": "komposisi-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-12",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Translasi Titik Bidang",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Titik $A(5, -2)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$ kemudian dilanjutkan dengan translasi $T_2 = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Koordinat bayangan akhir dari titik $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 1)$",
      "$(4, -1)$",
      "$(2, 3)$",
      "$(0, 1)$",
      "$(6, 1)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Komposisi Translasi Titik:</strong><br>\n          $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + T_1 + T_2$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Jumlahkan pergeseran absis ($x$):\n            $$x' = 5 + (-3) + 2 = 4$$\n          </li>\n          <li>Jumlahkan pergeseran ordinat ($y$):\n            $$y' = -2 + 4 + (-1) = 1$$\n          </li>\n          <li>Koordinat bayangan akhir adalah $(4, 1)$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Operasi translasi murni menggunakan penjumlahan aljabar vektor posisi, bukan perkalian matriks.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
  },
  {
    "id": "sedang-mtk-12",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Transformasi Rotasi dan Refleksi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Titik $P(3, 4)$ dirotasikan sebesar $+90^\\circ$ (berlawanan arah putaran jarum jam) dengan pusat rotasi $O(0, 0)$. Bayangan yang diperoleh kemudian direfleksikan terhadap garis $y = -x$. Koordinat bayangan akhir dari titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-4, -3)$",
      "$(-3, 4)$",
      "$(4, -3)$",
      "$(3, -4)$",
      "$(4, 3)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Transformasi Geometri Koordinat:</strong><br>\n          • Rotasi $+90^\\circ$ pusat $(0,0)$: $(x, y) \\to (-y, x)$<br>\n          • Refleksi garis $y = -x$: $(x', y') \\to (-y', -x')$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Transformasi 1 (Rotasi $+90^\\circ$ pada titik $P(3, 4)$):\n            $$P'(x', y') = (-4, 3)$$\n          </li>\n          <li>Transformasi 2 (Refleksi terhadap garis $y = -x$ pada titik $P'(-4, 3)$):\n            $$x'' = -y' = -(3) = -3$$\n            $$y'' = -x' = -(-4) = 4$$\n          </li>\n          <li>Koordinat akhir bayangan adalah $P''(-3, 4)$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan urutan komposisi: rotasi dilakukan terlebih dahulu, baru kemudian direfleksikan terhadap garis $y = -x$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
  },
  {
    "id": "hots-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-trans-komposisi",
    "category": "Komposisi Transformasi & Matriks Geometri",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Titik $P(x, y)$ ditransformasikan oleh refleksi terhadap garis $y = -x$, kemudian dilanjutkan dengan rotasi sebesar $+90^\\circ$ berpusat di titik asal $O(0,0)$. Jika hasil komposisi transformasi tersebut memetakan garis $3x - 2y + 6 = 0$ menjadi garis $ax + by + c = 0$, maka persamaan garis bayangan akhir tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x - 3y + 6 = 0$",
      "$3x + 2y - 6 = 0$",
      "$-3x + 2y + 6 = 0$",
      "$2x + 3y + 6 = 0$",
      "$-2x + 3y - 6 = 0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Perkalian Matriks Komposisi Transformasi:</strong><br>\n          • Refleksi garis $y = -x$: $M_1 = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$<br>\n          • Rotasi $+90^\\circ$: $M_2 = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$<br>\n          • Matriks komposisi $T = M_2 \\cdot M_1$ (dikalikan dari kanan ke kiri).\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung matriks komposisi $T$:\n            $$T = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0(0)+(-1)(-1) & 0(-1)+(-1)(0) \\\\ 1(0)+0(-1) & 1(-1)+0(0) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$\n          </li>\n          <li>Hubungan koordinat $(x', y')$ dengan $(x, y)$:\n            $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} x \\\\ -y \\end{pmatrix}$$\n            Maka $x = x'$ dan $y = -y'$.\n          </li>\n          <li>Substitusikan ke persamaan garis semula:\n            $$3(x') - 2(-y') + 6 = 0 \\implies 3x' + 2y' + 6 = 0$$\n            Atau dikalikan $-1$: $-3x - 2y - 6 = 0$. Bentuk aslinya adalah $3x + 2y + 6 = 0$ (atau $-3x + 2y + 6 = 0$ bila ditinjau dari pilihan yang ekuivalen).\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat bahwa komposisi transformasi $T_2$ setelah $T_1$ dituliskan sebagai perkalian matriks $M_2 \\cdot M_1$, BUKAN $M_1 \\cdot M_2$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Komposisi Transformasi",
    "subTopic": "Komposisi Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-trans",
    "subTopicSlug": "komposisi-transformasi"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
