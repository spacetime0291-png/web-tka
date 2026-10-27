/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Garis Singgung Lingkaran (mat-geo-lingkaran-singgung)
 * Slug: garis-singgung-lingkaran
 * Indikator: Persamaan garis singgung lingkaran di titik singgung dan garis singgung bergradien m.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-singgung";
  const subTopicSlug = "garis-singgung-lingkaran";
  const questions = [
  {
    "id": "mat-geo-lingkaran-singgung-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung di Titik pada Lingkaran Pusat Asal",
    "difficulty": "mudah",
    "statement": "Persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ di titik $(3, 4)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x + 4y = 25$",
      "$3x - 4y = 25$",
      "$4x + 3y = 25$",
      "$3x + 4y = 5$",
      "$4x - 3y = 25$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan garis singgung pada lingkaran $x^2 + y^2 = r^2$ di titik singgung $(x_1, y_1)$ yang terletak pada lingkaran ditentukan menggunakan rumus bagi adil: $x_1 x + y_1 y = r^2$.",
      "steps": "1. Pastikan titik $(3, 4)$ terletak pada lingkaran: $3^2 + 4^2 = 9 + 16 = 25$ (terbukti terletak pada lingkaran).\n2. Terapkan rumus bagi adil dengan $x_1 = 3$, $y_1 = 4$, dan $r^2 = 25$:\n$$x_1 x + y_1 y = r^2$$\n$$3x + 4y = 25$$\n3. Jadi, persamaan garis singgungnya adalah $3x + 4y = 25$ (pilihan A).",
      "pitfalls": "Tertukar antara koefisien $x$ dan $y$ menjadi $4x + 3y = 25$ atau keliru menggunakan jari-jari $r=5$ alih-alih $r^2=25$."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan garis singgung pada lingkaran $x^2 + y^2 = r^2$ di titik singgung $(x_1, y_1)$ yang terletak pada lingkaran ditentukan menggunakan rumus bagi adil: $x_1 x + y_1 y = r^2$."
  },
  {
    "id": "mat-geo-lingkaran-singgung-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung di Titik pada Lingkaran Pusat (a, b)",
    "difficulty": "mudah",
    "statement": "Persamaan garis singgung pada lingkaran $(x - 1)^2 + (y + 3)^2 = 25$ di titik singgung $(4, 1)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x + 4y - 16 = 0$",
      "$3x + 4y + 16 = 0$",
      "$4x + y - 17 = 0$",
      "$3x - 4y - 8 = 0$",
      "$3x + 4y - 25 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ di titik $(x_1, y_1)$ dirumuskan dengan metode bagi adil: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$.",
      "steps": "1. Identifikasi parameter pusat $(a, b) = (1, -3)$, jari-jari $r^2 = 25$, dan titik singgung $(x_1, y_1) = (4, 1)$.\n2. Masukkan ke rumus bagi adil:\n$$(4 - 1)(x - 1) + (1 - (-3))(y + 3) = 25$$\n$$3(x - 1) + 4(y + 3) = 25$$\n3. Uraikan perkalian aljabar:\n$$3x - 3 + 4y + 12 = 25$$\n$$3x + 4y + 9 = 25$$\n4. Pindahkan konstanta ke ruas kiri:\n$$3x + 4y - 16 = 0$$\n5. Jadi, persamaan garis singgungnya adalah $3x + 4y - 16 = 0$ (pilihan A).",
      "pitfalls": "Kesalahan tanda pada substitusi ordinat $(1 - (-3))$ yang keliru dihitung sebagai $1 - 3 = -2$."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ di titik $(x_1, y_1)$ dirumuskan dengan metode bagi adil: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$. **Tips:** Kesalahan tanda pada substitusi ordinat $(1 - (-3))$ yang keliru dihitung sebagai $1 - 3 = -2$."
  },
  {
    "id": "mat-geo-lingkaran-singgung-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung dengan Gradien Tertentu",
    "difficulty": "mudah",
    "statement": "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 = 9$ yang memiliki gradien garis $m = 2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 2x + 3\\sqrt{5}$",
      "$y = 2x + 9$",
      "$y = 2x + 3\\sqrt{3}$",
      "$y = 2x + 6$",
      "$y = 2x + 15$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ dengan gradien $m$ dirumuskan sebagai $y = mx \\pm r\\sqrt{1 + m^2}$.",
      "steps": "1. Identifikasi jari-jari $r = \\sqrt{9} = 3$ dan gradien $m = 2$.\n2. Masukkan ke rumus garis singgung bergradien:\n$$y = 2x \\pm 3\\sqrt{1 + 2^2}$$\n3. Hitung nilai di dalam akar:\n$$y = 2x \\pm 3\\sqrt{1 + 4} = 2x \\pm 3\\sqrt{5}$$\n4. Dua garis singgung yang terbentuk adalah $y = 2x + 3\\sqrt{5}$ dan $y = 2x - 3\\sqrt{5}$.\n5. Salah satunya yang terdapat pada opsi adalah $y = 2x + 3\\sqrt{5}$ (pilihan A).",
      "pitfalls": "Lupa mengalikan akar $\\sqrt{1+m^2}$ dengan jari-jari $r = 3$, atau keliru menghitung $1 + 2^2 = 1 + 4 = 5$."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ dengan gradien $m$ dirumuskan sebagai $y = mx \\pm r\\sqrt{1 + m^2}$."
  },
  {
    "id": "mat-geo-lingkaran-singgung-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Bentuk Umum Lingkaran",
    "difficulty": "mudah",
    "statement": "Persamaan garis singgung pada lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ di titik $(5, 1)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x + 4y - 19 = 0$",
      "$3x + 4y + 19 = 0$",
      "$5x + y - 12 = 0$",
      "$3x - 4y - 11 = 0$",
      "$4x + 3y - 23 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis singgung lingkaran bentuk umum $x^2 + y^2 + Ax + By + C = 0$ di titik $(x_1, y_1)$ dirumuskan dengan rumus bagi adil: $x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$.",
      "steps": "1. Identifikasi koefisien: $A = -4$, $B = 6$, $C = -12$, dan titik $(x_1, y_1) = (5, 1)$.\n2. Terapkan rumus bagi adil:\n$$5x + 1y + \\frac{-4}{2}(x + 5) + \\frac{6}{2}(y + 1) - 12 = 0$$\n$$5x + y - 2(x + 5) + 3(y + 1) - 12 = 0$$\n3. Jabarkan perkalian aljabar:\n$$5x + y - 2x - 10 + 3y + 3 - 12 = 0$$\n4. Satukan suku-suku sejenis:\n$$(5x - 2x) + (y + 3y) + (-10 + 3 - 12) = 0$$\n$$3x + 4y - 19 = 0$$\n5. Jadi, persamaan garis singgungnya adalah $3x + 4y - 19 = 0$ (pilihan A).",
      "pitfalls": "Lupa membagi dua koefisien $A$ dan $B$ saat menerapkan rumus bagi adil bentuk umum."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Garis singgung lingkaran bentuk umum $x^2 + y^2 + Ax + By + C = 0$ di titik $(x_1, y_1)$ dirumuskan dengan rumus bagi adil: $x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$. **Tips:** Lupa membagi dua koefisien $A$ dan $B$ saat menerapkan rumus bagi adil bentuk umum."
  },
  {
    "id": "mat-geo-lingkaran-singgung-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Sejajar Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Persamaan garis singgung pada lingkaran $x^2 + y^2 = 16$ yang sejajar dengan sumbu-$X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 4$ atau $y = -4$",
      "$x = 4$ atau $x = -4$",
      "$y = 16$ atau $y = -16$",
      "$y = 2$ atau $y = -2$",
      "$x = 16$ atau $x = -16$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis yang sejajar dengan sumbu-$X$ memiliki gradien kemiringan $m = 0$. Garis singgung horizontal pada lingkaran berpusat di asal $(0, 0)$ memiliki persamaan garis mendatar $y = \\pm r$.",
      "steps": "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{16} = 4$.\n2. Karena garis sejajar sumbu-$X$, maka nilai kemiringannya $m = 0$.\n3. Masukkan ke rumus garis singgung bergradien:\n$$y = 0 \\cdot x \\pm r\\sqrt{1 + 0^2} \\implies y = \\pm r$$\n4. Masukkan nilai $r = 4$:\n$$y = 4 \\text{ atau } y = -4$$\n5. Jadi, garis singgung yang sejajar sumbu-$X$ adalah $y = 4$ atau $y = -4$ (pilihan A).",
      "pitfalls": "Tertukar dengan garis yang sejajar sumbu-$Y$ (garis vertikal $x = \\pm 4$)."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Garis yang sejajar dengan sumbu-$X$ memiliki gradien kemiringan $m = 0$. Garis singgung horizontal pada lingkaran berpusat di asal $(0, 0)$ memiliki persamaan garis mendatar $y = \\pm r$. **Tips:** Tertukar dengan garis yang sejajar sumbu-$Y$ (garis vertikal $x = \\pm 4$)."
  },
  {
    "id": "mat-geo-lingkaran-singgung-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Tegak Lurus Garis Linier",
    "difficulty": "sedang",
    "statement": "Salah satu persamaan garis singgung pada lingkaran $(x - 2)^2 + (y + 1)^2 = 20$ yang tegak lurus terhadap garis $2x + y - 5 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x - 2y + 6 = 0$",
      "$x - 2y - 6 = 0$",
      "$2x + y + 6 = 0$",
      "$x + 2y - 14 = 0$",
      "$2x - y - 10 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ yang tegak lurus garis dengan gradien $m_1$ memiliki gradien $m_2 = -\\frac{1}{m_1}$. Persamaan garis singgungnya dirumuskan sebagai $y - b = m_2(x - a) \\pm r\\sqrt{1 + m_2^2}$.",
      "steps": "1. Tentukan gradien garis $2x + y - 5 = 0 \\implies m_1 = -2$.\n2. Syarat dua garis saling tegak lurus: $m_1 \\cdot m_2 = -1 \\implies m_2 = \\frac{1}{2}$.\n3. Identifikasi pusat $(a, b) = (2, -1)$ dan jari-jari $r = \\sqrt{20}$.\n4. Masukkan ke rumus garis singgung bergradien:\n$$y - (-1) = \\frac{1}{2}(x - 2) \\pm \\sqrt{20}\\sqrt{1 + \\left(\\frac{1}{2}\\right)^2}$$\n$$y + 1 = \\frac{1}{2}(x - 2) \\pm \\sqrt{20}\\sqrt{\\frac{5}{4}} = \\frac{1}{2}(x - 2) \\pm \\sqrt{25} = \\frac{1}{2}(x - 2) \\pm 5$$\n5. Kalikan kedua ruas dengan 2:\n$$2(y + 1) = (x - 2) \\pm 10 \\implies 2y + 2 = x - 2 \\pm 10$$\n$$x - 2y - 4 \\pm 10 = 0$$\n6. Garis singgung yang mungkin:\n- $x - 2y - 4 + 10 = 0 \\implies x - 2y + 6 = 0$\n- $x - 2y - 4 - 10 = 0 \\implies x - 2y - 14 = 0$\n7. Salah satu garis singgung yang terdapat pada pilihan adalah $x - 2y + 6 = 0$ (pilihan A).",
      "pitfalls": "Langsung memakai gradien $m = -2$ tanpa mengubahnya dengan syarat tegak lurus $m_2 = \\frac{1}{2}$."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Garis singgung lingkaran $(x - a)^2 + (y - b)^2 = r^2$ yang tegak lurus garis dengan gradien $m_1$ memiliki gradien $m_2 = -\\frac{1}{m_1}$. Persamaan garis singgungnya dirumuskan sebagai $y - b = m_2(x - a) \\pm r\\sqrt{1 + m_2^2}$. **Tips:** Langsung memakai gradien $m = -2$ tanpa mengubahnya dengan syarat tegak lurus $m_2 = \\frac{1}{2}$."
  },
  {
    "id": "mat-geo-lingkaran-singgung-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Persamaan Garis Kutub (Polar) Lingkaran",
    "difficulty": "sedang",
    "statement": "Persamaan garis kutub (polar) dari titik luar $P(5, 1)$ terhadap lingkaran $x^2 + y^2 = 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5x + y - 9 = 0$",
      "$5x + y - 26 = 0$",
      "$x + 5y - 9 = 0$",
      "$5x - y - 9 = 0$",
      "$5x + y + 9 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis kutub (polar) yang ditarik dari titik luar $(x_1, y_1)$ menuju lingkaran $x^2 + y^2 = r^2$ memiliki rumus yang identik dengan rumus bagi adil garis singgung: $x_1 x + y_1 y = r^2$.",
      "steps": "1. Amati bahwa titik $P(5, 1)$ berada di luar lingkaran karena $5^2 + 1^2 = 26 > 9$.\n2. Gunakan rumus persamaan garis kutub:\n$$x_1 x + y_1 y = r^2$$\n3. Substitusikan $x_1 = 5$, $y_1 = 1$, dan $r^2 = 9$:\n$$5x + 1y = 9 \\implies 5x + y - 9 = 0$$\n4. Jadi, persamaan garis kutubnya adalah $5x + y - 9 = 0$ (pilihan A).",
      "pitfalls": "Mengganti ruas kanan dengan nilai kuasa titik ($26$) alih-alih nilai kuadrat jari-jari lingkaran ($9$)."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Garis kutub (polar) yang ditarik dari titik luar $(x_1, y_1)$ menuju lingkaran $x^2 + y^2 = r^2$ memiliki rumus yang identik dengan rumus bagi adil garis singgung: $x_1 x + y_1 y = r^2$. **Tips:** Mengganti ruas kanan dengan nilai kuasa titik ($26$) alih-alih nilai kuadrat jari-jari lingkaran ($9$)."
  },
  {
    "id": "mat-geo-lingkaran-singgung-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Panjang Ruas Garis Singgung dari Titik Luar",
    "difficulty": "sedang",
    "statement": "Dari titik luar $A(7, 9)$ ditarik garis singgung ke kurva lingkaran $x^2 + y^2 - 4x - 6y - 12 = 0$. Jika titik singgung pada lingkaran adalah $T$, maka panjang ruas garis singgung $AT$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6",
      "5",
      "$\\sqrt{61}$",
      "8",
      "36"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang ruas garis singgung dari titik $(x_1, y_1)$ ke lingkaran $x^2 + y^2 + Ax + By + C = 0$ dihitung menggunakan akar dari nilai kuasa titik: $|AT| = \\sqrt{x_1^2 + y_1^2 + Ax_1 + By_1 + C}$.",
      "steps": "1. Substitusikan titik $A(7, 9)$ ke bentuk umum lingkaran:\n$$K = 7^2 + 9^2 - 4(7) - 6(9) - 12$$\n2. Hitung masing-masing suku:\n$$K = 49 + 81 - 28 - 54 - 12$$\n$$K = 130 - 94 = 36$$\n3. Tarik akar kuadrat dari nilai kuasa tersebut:\n$$|AT| = \\sqrt{K} = \\sqrt{36} = 6$$\n4. Jadi, panjang ruas garis singgung $AT$ adalah 6 satuan (pilihan A).",
      "pitfalls": "Lupa menarik akar kuadrat di akhir langkah sehingga memilih nilai kuadrat panjang garis singgung ($36$)."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Panjang ruas garis singgung dari titik $(x_1, y_1)$ ke lingkaran $x^2 + y^2 + Ax + By + C = 0$ dihitung menggunakan akar dari nilai kuasa titik: $|AT| = \\sqrt{x_1^2 + y_1^2 + Ax_1 + By_1 + C}$. **Tips:** Lupa menarik akar kuadrat di akhir langkah sehingga memilih nilai kuadrat panjang garis singgung ($36$)."
  },
  {
    "id": "mat-geo-lingkaran-singgung-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Sudut Antara Dua Garis Singgung dari Titik Luar",
    "difficulty": "sedang",
    "statement": "Dari titik luar $P(0, 2\\sqrt{3})$ ditarik dua buah garis singgung ke lingkaran $x^2 + y^2 = 3$. Besar sudut yang dibentuk oleh kedua garis singgung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60^\\circ$",
      "$90^\\circ$",
      "$45^\\circ$",
      "$30^\\circ$",
      "$120^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis singgung lingkaran selalu tegak lurus terhadap jari-jari di titik singgung. Sudut separuh $\\alpha$ antara garis hubung pusat dan garis singgung memenuhi $\\sin(\\alpha) = \\frac{r}{|OP|}$, dan sudut antara kedua garis singgung adalah $2\\alpha$.",
      "steps": "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{3}$ dengan pusat $O(0, 0)$.\n2. Hitung jarak titik $P(0, 2\\sqrt{3})$ ke titik pusat $O$:\n$$|OP| = \\sqrt{0^2 + (2\\sqrt{3})^2} = 2\\sqrt{3}$$\n3. Gunakan perbandingan sinus pada segitiga siku-siku singgung:\n$$\\sin(\\alpha) = \\frac{r}{|OP|} = \\frac{\\sqrt{3}}{2\\sqrt{3}} = \\frac{1}{2}$$\n4. Diperoleh sudut separuh $\\alpha = 30^\\circ$.\n5. Sudut total antara kedua garis singgung adalah:\n$$\\theta = 2\\alpha = 2(30^\\circ) = 60^\\circ$$\n6. Jadi, besar sudut yang terbentuk adalah $60^\\circ$ (pilihan A).",
      "pitfalls": "Lupa mengalikan sudut $\\alpha$ dengan 2 sehingga langsung menjawab dengan sudut separuh ($30^\\circ$)."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Garis singgung lingkaran selalu tegak lurus terhadap jari-jari di titik singgung. Sudut separuh $\\alpha$ antara garis hubung pusat dan garis singgung memenuhi $\\sin(\\alpha) = \\frac{r}{|OP|}$, dan sudut antara kedua garis singgung adalah $2\\alpha$. **Tips:** Lupa mengalikan sudut $\\alpha$ dengan 2 sehingga langsung menjawab dengan sudut separuh ($30^\\circ$)."
  },
  {
    "id": "mat-geo-lingkaran-singgung-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Sejajar Garis Lain pada Bentuk Umum",
    "difficulty": "sedang",
    "statement": "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 - 2x + 4y - 4 = 0$ yang sejajar dengan garis $3x - 4y + 7 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x - 4y + 4 = 0$",
      "$3x - 4y - 4 = 0$",
      "$4x + 3y + 4 = 0$",
      "$3x - 4y - 11 = 0$",
      "$3x + 4y - 26 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis yang sejajar memiliki gradien yang sama ($m_1 = m_2$). Persamaan garis singgung bergradien $m$ pada lingkaran berpusat di $(a, b)$ dirumuskan sebagai $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$.",
      "steps": "1. Tentukan titik pusat dan jari-jari lingkaran:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{-2}{2}, -\\frac{4}{2}\\right) = (1, -2)$$\n$$r = \\sqrt{1^2 + (-2)^2 - (-4)} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$\n2. Tentukan gradien dari garis sejajar $3x - 4y + 7 = 0$:\n$$4y = 3x + 7 \\implies m = \\frac{3}{4}$$\n3. Masukkan ke rumus garis singgung lingkaran:\n$$y - (-2) = \\frac{3}{4}(x - 1) \\pm 3\\sqrt{1 + \\left(\\frac{3}{4}\\right)^2}$$\n$$y + 2 = \\frac{3}{4}(x - 1) \\pm 3\\sqrt{\\frac{25}{16}} = \\frac{3}{4}(x - 1) \\pm 3\\left(\\frac{5}{4}\\right) = \\frac{3}{4}(x - 1) \\pm \\frac{15}{4}$$\n4. Kalikan seluruh ruas dengan 4:\n$$4(y + 2) = 3(x - 1) \\pm 15$$\n$$4y + 8 = 3x - 3 \\pm 15 \\implies 3x - 4y - 11 \\pm 15 = 0$$\n5. Garis singgung yang mungkin:\n- $3x - 4y - 11 + 15 = 0 \\implies 3x - 4y + 4 = 0$\n- $3x - 4y - 11 - 15 = 0 \\implies 3x - 4y - 26 = 0$\n6. Salah satu persamaan yang tersedia pada opsi adalah $3x - 4y + 4 = 0$ (pilihan A).",
      "pitfalls": "Kesalahan saat memindahkan suku pada manipulasi aljabar $4y + 8 = 3x - 3 \\pm 15$ sehingga salah menghitung konstanta."
    },
    "subTopicSlug": "garis-singgung-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Garis yang sejajar memiliki gradien yang sama ($m_1 = m_2$). Persamaan garis singgung bergradien $m$ pada lingkaran berpusat di $(a, b)$ dirumuskan sebagai $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$."
  },
  {
    "id": "sup-mtk-geo-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Melalui Titik pada Lingkaran",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Persamaan garis singgung yang melalui titik $P(3, -4)$ pada lingkaran $x^2 + y^2 = 25$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x - 4y = 25$",
      "$3x + 4y = 25$",
      "$-4x + 3y = 25$",
      "$3x - 4y = 5$",
      "$4x - 3y = 25$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Garis Singgung Titik Singgung Lingkaran Pusat $(0,0)$:</strong><br>Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ pada titik singgung $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.</div>",
      "steps": "<ol><li>Uji titik: $3^2 + (-4)^2 = 9 + 16 = 25$ (titik $P$ tepat terletak pada lingkaran).</li><li>Substitusi ke rumus: $(3)x + (-4)y = 25 \\implies 3x - 4y = 25$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan jari-jari $r = 5$ bukannya $r^2 = 25$ pada ruas kanan persamaan garis singgung.</div>"
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "garis-singgung-lingkaran",
    "hint": "Garis Singgung Titik Singgung Lingkaran Pusat $(0,0)$: Persamaan garis singgung lingkaran $x^2 + y^2 = r^2$ pada titik singgung $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$."
  },
  {
    "id": "sedang-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-singgung",
    "category": "Garis Singgung Lingkaran Gradien m",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ yang tegak lurus dengan garis $2x - y + 7 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x + 2y - 5\\sqrt{5} = 0$",
      "$2x + y - 5\\sqrt{5} = 0$",
      "$x - 2y + 5\\sqrt{5} = 0$",
      "$2x - y - 25 = 0$",
      "$x + 2y - 25 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Garis Singgung Lingkaran $x^2 + y^2 = r^2$ dengan Gradien $m$:</strong><br>\n          $$y = mx \\pm r\\sqrt{1 + m^2}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Tentukan gradien garis yang diberikan:\n            $$2x - y + 7 = 0 \\implies y = 2x + 7 \\implies m_1 = 2$$\n          </li>\n          <li>Garis singgung tegak lurus dengan garis tersebut, sehingga:\n            $$m = -\\frac{1}{m_1} = -\\frac{1}{2}$$\n          </li>\n          <li>Jari-jari lingkaran: $r = \\sqrt{25} = 5$.</li>\n          <li>Substitusi ke rumus garis singgung:\n            $$y = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\left(-\\frac{1}{2}\\right)^2} = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\frac{1}{4}} = -\\frac{1}{2}x \\pm 5\\sqrt{\\frac{5}{4}} = -\\frac{1}{2}x \\pm \\frac{5\\sqrt{5}}{2}$$\n          </li>\n          <li>Kalikan seluruh suku dengan 2:\n            $$2y = -x \\pm 5\\sqrt{5} \\implies x + 2y \\mp 5\\sqrt{5} = 0$$\n            Salah satu persamaannya adalah $x + 2y - 5\\sqrt{5} = 0$.\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa bahwa kondisi tegak lurus menuntut $m = -\\frac{1}{m_1}$. Jika menggunakan $m = 2$ (sejajar), jawaban menjadi keliru.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Garis Singgung Lingkaran",
    "subTopic": "Garis Singgung Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "garis-singgung-lingkaran",
    "hint": "Garis Singgung Lingkaran $x^2 + y^2 = r^2$ dengan Gradien $m$: $$y = mx \\pm r\\sqrt{1 + m^2}$$. **Tips:** Sering lupa bahwa kondisi tegak lurus menuntut $m = -\\frac{1}{m_1}$."
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
