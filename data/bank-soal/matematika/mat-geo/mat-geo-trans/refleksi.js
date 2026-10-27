/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Refleksi (mat-geo-trans-refleksi)
 * Slug: refleksi
 * Indikator: Pencerminan terhadap sumbu koordinat, garis y = x, y = -x, dan garis konstanta.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-refleksi";
  const subTopicSlug = "refleksi";
  const questions = [
  {
    "id": "mat-geo-trans-refleksi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Titik terhadap Sumbu-X",
    "difficulty": "mudah",
    "statement": "Bayangan titik koordinat $A(-4, 7)$ jika dicerminkan terhadap sumbu-$X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, 7)$",
      "$(-4, -7)$",
      "$(4, -7)$",
      "$(7, -4)$",
      "$(-7, 4)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Refleksi titik $P(x, y)$ terhadap sumbu-$X$ tidak mengubah absis ($x$), tetapi mengubah tanda ordinat ($y$). Matriks transformasinya adalah $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, sehingga $x' = x$ dan $y' = -y$.",
      "steps": "1. Identifikasi titik asal $A(x, y) = (-4, 7)$, dengan $x = -4$ dan $y = 7$.\n2. Gunakan rumus refleksi sumbu-$X$:\n$$x' = x = -4$$\n$$y' = -y = -(7) = -7$$\n3. Diperoleh koordinat bayangan $A'(-4, -7)$.\n4. Jadi, jawabannya adalah $(-4, -7)$ (pilihan B).",
      "pitfalls": "Tertukar dengan refleksi terhadap sumbu-$Y$ yang mengubah tanda absis ($x$) bukannya ordinat ($y$)."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-refleksi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Titik terhadap Sumbu-Y",
    "difficulty": "mudah",
    "statement": "Titik $B(5, -9)$ dicerminkan terhadap sumbu-$Y$. Koordinat titik bayangannya $B'$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-5, -9)$",
      "$(-5, 9)$",
      "$(5, 9)$",
      "$(-9, 5)$",
      "$(9, -5)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Refleksi titik $P(x, y)$ terhadap sumbu-$Y$ membalikkan tanda absis ($x$) dan mempertahankan ordinat ($y$), yaitu $x' = -x$ dan $y' = y$.",
      "steps": "1. Titik awal adalah $B(5, -9)$, dengan $x = 5$ dan $y = -9$.\n2. Lakukan pencerminan terhadap sumbu-$Y$:\n$$x' = -x = -(5) = -5$$\n$$y' = y = -9$$\n3. Maka bayangan titik $B$ adalah $B'(-5, -9)$.\n4. Jadi, pilihan yang benar adalah A.",
      "pitfalls": "Mengubah kedua tanda koordinat seperti pada refleksi terhadap titik pusat $(0,0)$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-refleksi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Titik terhadap Garis y = x",
    "difficulty": "mudah",
    "statement": "Bayangan titik $C(-3, 8)$ oleh pencerminan terhadap garis lurus $y = x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-8, 3)$",
      "$(3, -8)$",
      "$(-3, -8)$",
      "$(8, -3)$",
      "$(8, 3)$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pencerminan suatu titik $P(x, y)$ terhadap garis $y = x$ menukarkan posisi absis dan ordinat tanpa mengubah tanda: $(x, y) \\to (y, x)$. Matriks transformasinya adalah $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.",
      "steps": "1. Dari titik $C(-3, 8)$, nilai $x = -3$ dan $y = 8$.\n2. Terapkan pemetaan pencerminan terhadap $y = x$:\n$$x' = y = 8$$\n$$y' = x = -3$$\n3. Diperoleh titik bayangan $C'(8, -3)$.\n4. Jadi, bayangan titik $C$ adalah $(8, -3)$ (pilihan D).",
      "pitfalls": "Mengubah tanda koordinat menjadi $(-y, -x)$ yang merupakan aturan refleksi terhadap garis $y = -x$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-refleksi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Titik terhadap Garis y = -x",
    "difficulty": "mudah",
    "statement": "Jika titik $P(2, -6)$ dicerminkan terhadap garis $y = -x$, maka koordinat bayangan titik $P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-6, 2)$",
      "$(6, 2)$",
      "$(6, -2)$",
      "$(-2, 6)$",
      "$(-6, -2)$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pencerminan titik $P(x, y)$ terhadap garis $y = -x$ menghasilkan bayangan dengan menukar posisi serta membalikkan tanda kedua koordinat: $(x, y) \\to (-y, -x)$. Matriks transformasinya adalah $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$.",
      "steps": "1. Titik asal $P(2, -6)$, dengan $x = 2$ dan $y = -6$.\n2. Hitung koordinat bayangan:\n$$x' = -y = -(-6) = 6$$\n$$y' = -x = -(2) = -2$$\n3. Titik bayangan adalah $P'(6, -2)$.\n4. Jadi, hasil pencerminannya adalah $(6, -2)$ (pilihan C).",
      "pitfalls": "Lupa mengubah tanda negatif saat menukar posisi koordinat, menghasilkan $(-6, 2)$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-refleksi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Titik terhadap Titik Asal O(0, 0)",
    "difficulty": "mudah",
    "statement": "Titik $Q(-7, -4)$ dicerminkan terhadap titik pangkal koordinat $O(0, 0)$. Koordinat bayangan titik $Q'$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(7, -4)$",
      "$(-7, 4)$",
      "$(4, 7)$",
      "$(-4, -7)$",
      "$(7, 4)$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Pencerminan titik $P(x, y)$ terhadap titik pangkal $O(0, 0)$ setara dengan rotasi $180^\\circ$, yang membalik tanda kedua koordinat: $(x, y) \\to (-x, -y)$. Matriks transformasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
      "steps": "1. Diberikan koordinat $Q(-7, -4)$, maka $x = -7$ dan $y = -4$.\n2. Terapkan rumus pencerminan terhadap titik asal $O(0, 0)$:\n$$x' = -x = -(-7) = 7$$\n$$y' = -y = -(-4) = 4$$\n3. Koordinat bayangan yang terbentuk adalah $Q'(7, 4)$.\n4. Jadi, koordinat titik $Q'$ adalah $(7, 4)$ (pilihan E).",
      "pitfalls": "Hanya mengubah salah satu tanda koordinat atau tidak teliti dengan tanda minus ganda $(-(-7) = +7)$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-trans-refleksi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Garis terhadap Garis x = h",
    "difficulty": "sedang",
    "statement": "Persamaan bayangan garis $g: 2x - 3y + 6 = 0$ setelah dicerminkan terhadap garis vertikal $x = 3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x + 3y - 18 = 0$",
      "$2x - 3y - 18 = 0$",
      "$2x + 3y + 6 = 0$",
      "$2x - 3y + 18 = 0$",
      "$3x + 2y - 18 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Refleksi suatu kurva terhadap garis vertikal $x = h$ memenuhi rumus koordinat $x' = 2h - x \\iff x = 2h - x'$ dan $y' = y \\iff y = y'$. Substitusikan relasi ini ke persamaan garis asal.",
      "steps": "1. Garis cermin adalah $x = 3$, maka $h = 3$.\n2. Nyatakan koordinat asal dalam koordinat bayangan:\n$$x = 2(3) - x' = 6 - x'$$\n$$y = y'$$\n3. Substitusikan ke dalam persamaan garis $g: 2x - 3y + 6 = 0$:\n$$2(6 - x') - 3y' + 6 = 0$$\n4. Uraikan persamaan:\n$$12 - 2x' - 3y' + 6 = 0$$\n$$-2x' - 3y' + 18 = 0$$\n5. Kalikan kedua ruas dengan $-1$:\n$$2x' + 3y' - 18 = 0$$\n6. Jadi, persamaan bayangan garisnya adalah $2x + 3y - 18 = 0$ (pilihan A).",
      "pitfalls": "Lupa mengalikan $-1$ pada seluruh suku, atau salah menerapkan rumus $2h - x$ menjadi $x - 2h$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-refleksi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Parabola terhadap Garis Horizontal y = k",
    "difficulty": "sedang",
    "statement": "Parabola dengan persamaan $y = x^2 - 4x + 1$ dicerminkan terhadap garis horizontal $y = 2$. Persamaan parabola bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = -x^2 - 4x + 3$",
      "$y = -x^2 + 4x + 3$",
      "$y = -x^2 + 4x - 3$",
      "$y = x^2 - 4x + 3$",
      "$y = -x^2 + 4x + 5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pencerminan terhadap garis horizontal $y = k$ mengubah koordinat menurut $x' = x \\iff x = x'$ dan $y' = 2k - y \\iff y = 2k - y'$.",
      "steps": "1. Diketahui garis cermin $y = 2$, sehingga $k = 2$.\n2. Hubungan koordinat asal dan bayangan:\n$$x = x'$$\n$$y = 2(2) - y' = 4 - y'$$\n3. Substitusikan ke fungsi parabola $y = x^2 - 4x + 1$:\n$$4 - y' = x'^2 - 4x' + 1$$\n4. Sederhanakan untuk menyatakan $y'$ dalam $x'$:\n$$-y' = x'^2 - 4x' + 1 - 4$$\n$$-y' = x'^2 - 4x' - 3$$\n$$y' = -x'^2 + 4x' + 3$$\n5. Jadi, persamaan kurva bayangannya adalah $y = -x^2 + 4x + 3$ (pilihan B).",
      "pitfalls": "Hanya menegatifkan ruas kanan tanpa mengurangkan dari $2k$, sehingga menghasilkan $y = -x^2 + 4x - 1$."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-refleksi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Komposisi Dua Refleksi terhadap Garis Sejajar",
    "difficulty": "sedang",
    "statement": "Titik $P(a, 5)$ dicerminkan berturut-turut terhadap garis $x = 2$ kemudian terhadap garis $x = -1$. Jika koordinat bayangan akhir titik tersebut adalah $P'(-8, b)$, maka nilai dari $a + b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$1$",
      "$3$",
      "$5$",
      "$7$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Komposisi dua refleksi berurutan terhadap dua garis vertikal sejajar $x = h_1$ lalu $x = h_2$ ekuivalen dengan pergeseran (translasi) horizontal sejauh $\\Delta x = 2(h_2 - h_1)$ dengan ordinat tetap ($y' = y$).",
      "steps": "1. Cari pergeseran total absis dari komposisi refleksi terhadap $x = 2$ ($h_1 = 2$) lalu $x = -1$ ($h_2 = -1$):\n$$\\Delta x = 2(h_2 - h_1) = 2(-1 - 2) = 2(-3) = -6$$\n2. Hitung hubungan absis akhir dengan absis awal:\n$$x' = a + \\Delta x = a - 6$$\nDiketahui $x' = -8$, maka:\n$$a - 6 = -8 \\implies a = -2$$\n3. Karena refleksi terhadap garis vertikal tidak mempengaruhi ordinat:\n$$b = y = 5$$\n4. Hitung nilai $a + b$:\n$$a + b = -2 + 5 = 3$$\n5. Jadi, nilai $a + b$ adalah $3$ (pilihan C).",
      "pitfalls": "Membalik urutan pengurangan garis cermin $2(h_1 - h_2)$ yang menghasilkan pergeseran positif alih-alih negatif."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-refleksi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Refleksi Lingkaran terhadap Garis y = -x",
    "difficulty": "sedang",
    "statement": "Lingkaran $L: (x - 3)^2 + (y + 2)^2 = 16$ dicerminkan terhadap garis $y = -x$. Persamaan lingkaran bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x + 2)^2 + (y - 3)^2 = 16$",
      "$(x - 2)^2 + (y + 3)^2 = 16$",
      "$(x - 2)^2 + (y - 3)^2 = 16$",
      "$(x + 3)^2 + (y - 2)^2 = 16$",
      "$(x - 3)^2 + (y + 2)^2 = 16$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Refleksi merupakan transformasi isometri sehingga jari-jari lingkaran bayangan tetap ($r' = r$). Oleh karena itu, kita cukup merefleksikan koordinat titik pusat lingkaran $P(x_p, y_p)$ terhadap garis $y = -x$, yang memenuhi $(x', y') = (-y_p, -x_p)$.",
      "steps": "1. Identifikasi pusat dan jari-jari lingkaran awal dari $(x - 3)^2 + (y + 2)^2 = 16$:\nPusat $P(3, -2)$ dan jari-jari $r = 4$.\n2. Lakukan pencerminan titik pusat terhadap garis $y = -x$:\n$$x_p' = -y_p = -(-2) = 2$$\n$$y_p' = -x_p = -(3) = -3$$\nPusat bayangan adalah $P'(2, -3)$.\n3. Bentuk persamaan lingkaran bayangan dengan pusat $(2, -3)$ dan $r = 4$:\n$$(x - 2)^2 + (y - (-3))^2 = 4^2$$\n$$(x - 2)^2 + (y + 3)^2 = 16$$\n4. Jadi, persamaan lingkaran bayangan adalah $(x - 2)^2 + (y + 3)^2 = 16$ (pilihan B).",
      "pitfalls": "Lupa menukar komponen absis dan ordinat saat mencerminkan terhadap garis $y = -x$ sehingga hanya mengubah tandanya saja."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-trans-refleksi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-refleksi",
    "category": "Komposisi Dua Refleksi terhadap Garis Tegak Lurus",
    "difficulty": "sedang",
    "statement": "Titik sudut segitiga $A(1, 2)$, $B(4, 2)$, dan $C(1, 6)$ direfleksikan berturut-turut terhadap sumbu-$X$ lalu terhadap garis $x = 2$. Jika titik $C''$ adalah bayangan akhir titik $C$, maka jarak antara titik awal $A$ dan titik bayangan $C''$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\sqrt{17}$",
      "$4\\sqrt{5}$",
      "$2\\sqrt{15}$",
      "$8$",
      "$\\sqrt{65}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak antara dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ dihitung dengan rumus $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. Bayangan titik dicari secara bertahap menggunakan kaidah refleksi sumbu-$X$ lalu refleksi garis vertikal $x = h$.",
      "steps": "1. Titik $C$ memiliki koordinat awal $(1, 6)$.\n2. Refleksi pertama terhadap sumbu-$X$ menghasilkan titik $C'$:\n$$x' = 1$$\n$$y' = -6$$\nDiperoleh $C'(1, -6)$.\n3. Refleksi kedua terhadap garis $x = 2$ ($h = 2$) menghasilkan titik $C''$:\n$$x'' = 2(2) - x' = 4 - 1 = 3$$\n$$y'' = y' = -6$$\nDiperoleh koordinat akhir $C''(3, -6)$.\n4. Hitung jarak antara titik awal $A(1, 2)$ dan $C''(3, -6)$:\n$$d = \\sqrt{(3 - 1)^2 + (-6 - 2)^2}$$\n$$d = \\sqrt{2^2 + (-8)^2} = \\sqrt{4 + 64} = \\sqrt{68}$$\n$$d = \\sqrt{4 \\times 17} = 2\\sqrt{17}$$\n5. Jadi, jarak antara titik $A$ dan $C''$ adalah $2\\sqrt{17}$ (pilihan A).",
      "pitfalls": "Salah menghitung selisih ordinat $(-6 - 2)$ menjadi $-4$ karena keliru tanda pengurangan bilangan negatif."
    },
    "subTopicSlug": "refleksi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Refleksi",
    "subTopic": "Refleksi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
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
