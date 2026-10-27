/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Geometri Analitik Bidang
 * Bab Kecil: Garis dan Koordinat (fun-geo-dasar)
 * Sub-Bab: Gradien Garis Sejajar & Tegak Lurus (fun-geo-dasar-gradien)
 * Slug: gradien-garis-sejajar-tegak-lurus
 * Indikator: Gradien kemiringan garis lurus, syarat garis sejajar (m1 = m2) dan tegak lurus (m1 * m2 = -1).
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-geo-dasar-gradien";
  const subTopicSlug = "gradien-garis-sejajar-tegak-lurus";
  const questions = [
  {
    "id": "fun-geo-dasar-gradien-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Membaca Gradien dari Bentuk Eksplisit",
    "difficulty": "mudah",
    "statement": "Gradien kemiringan garis lurus dengan persamaan $y = 4x - 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-7$",
      "$-4$",
      "$\\frac{1}{4}$",
      "$4$",
      "$7$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada bentuk umum eksplisit $y = mx + c$, koefisien di depan variabel $x$ menyatakan nilai kemiringan (gradien) garis $m$.",
      "steps": "1. Bandingkan persamaan garis yang diketahui dengan bentuk standar:\n$$y = mx + c$$\n$$y = 4x - 7$$\n2. Dari korespondensi suku-suku diperoleh:\n$$m = 4$$\n3. Jadi, gradien garis tersebut adalah $4$ (pilihan D).",
      "pitfalls": "Menjawab $-7$ karena mengira konstanta di belakang adalah nilai gradien."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Pada bentuk umum eksplisit $y = mx + c$, koefisien di depan variabel $x$ menyatakan nilai kemiringan (gradien) garis $m$. **Tips:** Menjawab $-7$ karena mengira konstanta di belakang adalah nilai gradien."
  },
  {
    "id": "fun-geo-dasar-gradien-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Menghitung Gradien Melalui Dua Titik",
    "difficulty": "mudah",
    "statement": "Gradien garis lurus yang melalui titik $A(2, 5)$ dan titik $B(6, 13)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gradien garis yang melalui dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ dirumuskan sebagai perbandingan perubahan ordinat terhadap absis: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
      "steps": "1. Hitung perubahan ordinat ($\\Delta y$):\n$$\\Delta y = 13 - 5 = 8$$\n2. Hitung perubahan absis ($\\Delta x$):\n$$\\Delta x = 6 - 2 = 4$$\n3. Hitung nilai gradien:\n$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{4} = 2$$\n4. Jadi, gradien garis tersebut adalah $2$ (pilihan C).",
      "pitfalls": "Terbalik membagi perubahan absis dengan perubahan ordinat $\\frac{4}{8} = \\frac{1}{2}$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Gradien garis yang melalui dua titik $(x_1, y_1)$ dan $(x_2, y_2)$ dirumuskan sebagai perbandingan perubahan ordinat terhadap absis: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. **Tips:** Terbalik membagi perubahan absis dengan perubahan ordinat $\\frac{4}{8} = \\frac{1}{2}$."
  },
  {
    "id": "fun-geo-dasar-gradien-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Menentukan Gradien dari Bentuk Implisit",
    "difficulty": "mudah",
    "statement": "Gradien garis dengan persamaan linear $3x + 2y - 6 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk persamaan garis bentuk implisit $Ax + By + C = 0$, gradien garis dirumuskan sebagai $m = -\\frac{A}{B}$.",
      "steps": "1. Identifikasi nilai koefisien: $A = 3$, $B = 2$, dan $C = -6$.\n2. Gunakan rumus gradien bentuk implisit:\n$$m = -\\frac{A}{B} = -\\frac{3}{2}$$\n3. (Metode alternatif) Ubah ke bentuk eksplisit:\n$$2y = -3x + 6$$\n$$y = -\\frac{3}{2}x + 3 \\implies m = -\\frac{3}{2}$$\n4. Jadi, gradien garis tersebut adalah $-\\frac{3}{2}$ (pilihan A).",
      "pitfalls": "Lupa menyematkan tanda negatif saat memindahkan suku $3x$ ke ruas kanan."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Untuk persamaan garis bentuk implisit $Ax + By + C = 0$, gradien garis dirumuskan sebagai $m = -\\frac{A}{B}$. **Tips:** Lupa menyematkan tanda negatif saat memindahkan suku $3x$ ke ruas kanan."
  },
  {
    "id": "fun-geo-dasar-gradien-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Syarat Gradien Garis Sejajar",
    "difficulty": "mudah",
    "statement": "Dua garis lurus dikatakan saling sejajar. Jika gradien garis pertama adalah $m_1 = 5$, maka gradien garis kedua $m_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-5$",
      "$-\\frac{1}{5}$",
      "$\\frac{1}{5}$",
      "$5$",
      "$10$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dua garis lurus sejajar memiliki kemiringan yang sama, sehingga syarat kesejajarannya adalah $m_1 = m_2$.",
      "steps": "1. Diketahui bahwa kedua garis saling sejajar.\n2. Syarat matematis dua garis sejajar adalah:\n$$m_2 = m_1$$\n3. Karena $m_1 = 5$, maka diperoleh:\n$$m_2 = 5$$\n4. Jadi, gradien garis kedua adalah $5$ (pilihan D).",
      "pitfalls": "Tertukar dengan syarat garis tegak lurus ($m_1 \\cdot m_2 = -1$) sehingga memilih $-\\frac{1}{5}$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Dua garis lurus sejajar memiliki kemiringan yang sama, sehingga syarat kesejajarannya adalah $m_1 = m_2$. **Tips:** Tertukar dengan syarat garis tegak lurus ($m_1 \\cdot m_2 = -1$) sehingga memilih $-\\frac{1}{5}$."
  },
  {
    "id": "fun-geo-dasar-gradien-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Syarat Gradien Garis Tegak Lurus",
    "difficulty": "mudah",
    "statement": "Garis $g$ tegak lurus terhadap garis $h$. Jika garis $h$ memiliki gradien $m_h = \\frac{2}{3}$, maka gradien garis $g$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{3}{2}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{2}$",
      "$-1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua garis saling tegak lurus jika hasil kali kedua gradiennya sama dengan $-1$, yaitu $m_g \\cdot m_h = -1$ atau $m_g = -\\frac{1}{m_h}$.",
      "steps": "1. Tuliskan syarat dua garis tegak lurus:\n$$m_g \\times m_h = -1$$\n2. Masukkan nilai $m_h = \\frac{2}{3}$:\n$$m_g \\times \\frac{2}{3} = -1$$\n3. Selesaikan untuk $m_g$:\n$$m_g = -\\frac{1}{\\frac{2}{3}} = -\\frac{3}{2}$$\n4. Jadi, gradien garis $g$ adalah $-\\frac{3}{2}$ (pilihan A).",
      "pitfalls": "Hanya membalik pecahan tanpa memberi tanda minus sehingga memilih $\\frac{3}{2}$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Mudah",
    "hint": "Dua garis saling tegak lurus jika hasil kali kedua gradiennya sama dengan $-1$, yaitu $m_g \\cdot m_h = -1$ atau $m_g = -\\frac{1}{m_h}$. **Tips:** Hanya membalik pecahan tanpa memberi tanda minus sehingga memilih $\\frac{3}{2}$."
  },
  {
    "id": "fun-geo-dasar-gradien-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Persamaan Garis Sejajar Melalui Titik Tertentu",
    "difficulty": "sedang",
    "statement": "Persamaan garis yang melalui titik $(2, -3)$ dan sejajar dengan garis $3x - y + 4 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x - y - 9 = 0$",
      "$3x - y + 9 = 0$",
      "$3x + y - 3 = 0$",
      "$x + 3y + 7 = 0$",
      "$3x - y - 3 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis yang sejajar dengan $3x - y + C = 0$ memiliki koefisien variabel yang sama ($3x - y$), sehingga memiliki gradien $m = 3$.",
      "steps": "1. Tentukan gradien garis acuan $3x - y + 4 = 0$:\n$$y = 3x + 4 \\implies m_1 = 3$$\n2. Karena sejajar, maka gradien garis baru adalah $m_2 = m_1 = 3$.\n3. Susun persamaan garis melalui titik $(x_1, y_1) = (2, -3)$:\n$$y - (-3) = 3(x - 2)$$\n$$y + 3 = 3x - 6$$\n4. Ubah ke bentuk implisit:\n$$3x - y - 6 - 3 = 0$$\n$$3x - y - 9 = 0$$\n5. Jadi, persamaan garisnya adalah $3x - y - 9 = 0$ (pilihan A).",
      "pitfalls": "Kesalahan tanda saat memasukkan ordinat negatif $y - (-3) = y + 3$ sehingga menghasilkan $3x - y - 3 = 0$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Garis yang sejajar dengan $3x - y + C = 0$ memiliki koefisien variabel yang sama ($3x - y$), sehingga memiliki gradien $m = 3$."
  },
  {
    "id": "fun-geo-dasar-gradien-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Persamaan Garis Tegak Lurus Melalui Titik Tertentu",
    "difficulty": "sedang",
    "statement": "Persamaan garis yang melalui titik $(-1, 4)$ dan tegak lurus terhadap garis $2x + 4y - 5 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x - y + 6 = 0$",
      "$2x + y - 2 = 0$",
      "$x - 2y + 9 = 0$",
      "$2x - y - 6 = 0$",
      "$4x - 2y + 12 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gradien garis yang tegak lurus adalah lawan dan kebalikan dari gradien garis asal ($m_2 = -\\frac{1}{m_1}$).",
      "steps": "1. Cari gradien garis asal $2x + 4y - 5 = 0$:\n$$m_1 = -\\frac{A}{B} = -\\frac{2}{4} = -\\frac{1}{2}$$\n2. Tentukan gradien garis tegak lurus:\n$$m_2 = -\\frac{1}{m_1} = -\\frac{1}{-\\frac{1}{2}} = 2$$\n3. Susun persamaan garis melalui $(-1, 4)$ dengan gradien $m = 2$:\n$$y - 4 = 2(x - (-1))$$\n$$y - 4 = 2(x + 1)$$\n$$y - 4 = 2x + 2$$\n4. Pindahkan semua suku ke ruas kanan:\n$$2x - y + 6 = 0$$\n5. Jadi, persamaan garisnya adalah $2x - y + 6 = 0$ (pilihan A).",
      "pitfalls": "Menggunakan gradien $-\\frac{1}{2}$ (syarat sejajar) bukan gradien tegak lurus $2$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Gradien garis yang tegak lurus adalah lawan dan kebalikan dari gradien garis asal ($m_2 = -\\frac{1}{m_1}$). **Tips:** Menggunakan gradien $-\\frac{1}{2}$ (syarat sejajar) bukan gradien tegak lurus $2$."
  },
  {
    "id": "fun-geo-dasar-gradien-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Menentukan Koordinat Parameter Garis Tegak Lurus",
    "difficulty": "sedang",
    "statement": "Garis yang menghubungkan titik $(1, p)$ dan $(4, 7)$ tegak lurus dengan garis $3x + 2y - 1 = 0$. Nilai dari $p$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dua garis tegak lurus memenuhi $m_1 \\cdot m_2 = -1$. Gradien garis dari dua titik disamakan dengan gradien tegak lurus garis acuan.",
      "steps": "1. Tentukan gradien garis $3x + 2y - 1 = 0$:\n$$m_1 = -\\frac{3}{2}$$\n2. Karena tegak lurus, gradien garis yang melalui kedua titik adalah:\n$$m_2 = -\\frac{1}{m_1} = \\frac{2}{3}$$\n3. Hitung gradien garis melalui titik $(1, p)$ dan $(4, 7)$:\n$$m = \\frac{7 - p}{4 - 1} = \\frac{7 - p}{3}$$\n4. Samakan kedua nilai gradien:\n$$\\frac{7 - p}{3} = \\frac{2}{3} \\implies 7 - p = 2 \\implies p = 5$$\n5. Jadi, nilai $p$ adalah $5$ (pilihan D).",
      "pitfalls": "Menyamakan langsung dengan $-\\frac{3}{2}$ (kondisi garis sejajar) sehingga menghasilkan $p = 11{,}5$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Dua garis tegak lurus memenuhi $m_1 \\cdot m_2 = -1$. Gradien garis dari dua titik disamakan dengan gradien tegak lurus garis acuan."
  },
  {
    "id": "fun-geo-dasar-gradien-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Hubungan Tegak Lurus Dua Persamaan Implisit",
    "difficulty": "sedang",
    "statement": "Diketahui garis $g_1: 4x + ky = 8$ dan garis $g_2: 3x - 6y = 12$. Jika garis $g_1$ tegak lurus terhadap garis $g_2$, maka nilai dari $k$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-1$",
      "$1$",
      "$2$",
      "$4$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dua garis $A_1 x + B_1 y + C_1 = 0$ dan $A_2 x + B_2 y + C_2 = 0$ saling tegak lurus jika dan hanya jika $A_1 A_2 + B_1 B_2 = 0$.",
      "steps": "1. Tentukan koefisien masing-masing garis:\n$$A_1 = 4, \\quad B_1 = k$$\n$$A_2 = 3, \\quad B_2 = -6$$\n2. Terapkan syarat tegak lurus $A_1 A_2 + B_1 B_2 = 0$:\n$$4(3) + k(-6) = 0$$\n$$12 - 6k = 0$$\n3. Selesaikan untuk nilai $k$:\n$$6k = 12 \\implies k = 2$$\n4. Jadi, nilai konstanta $k$ adalah $2$ (pilihan D).",
      "pitfalls": "Mengabaikan tanda minus pada koefisien $B_2 = -6$ sehingga mendapatkan nilai $k = -2$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Dua garis $A_1 x + B_1 y + C_1 = 0$ dan $A_2 x + B_2 y + C_2 = 0$ saling tegak lurus jika dan hanya jika $A_1 A_2 + B_1 B_2 = 0$. **Tips:** Mengabaikan tanda minus pada koefisien $B_2 = -6$ sehingga mendapatkan nilai $k = -2$."
  },
  {
    "id": "fun-geo-dasar-gradien-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subChapterId": "fun-geo-dasar",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Persamaan Garis Sumbu (Perpendicular Bisector)",
    "difficulty": "sedang",
    "statement": "Persamaan garis bagi tegak lurus (garis sumbu) dari ruas garis yang menghubungkan titik $A(2, 1)$ dan titik $B(6, 5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x + y - 7 = 0$",
      "$x - y - 1 = 0$",
      "$x + y - 6 = 0$",
      "$2x + y - 11 = 0$",
      "$x - y + 7 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis sumbu adalah garis yang melalui titik tengah ruas garis $AB$ dan bergradien tegak lurus terhadap gradien garis $AB$.",
      "steps": "1. Tentukan koordinat titik tengah ruas garis $AB$:\n$$M = \\left(\\frac{2 + 6}{2}, \\frac{1 + 5}{2}\\right) = (4, 3)$$\n2. Tentukan gradien ruas garis $AB$:\n$$m_{AB} = \\frac{5 - 1}{6 - 2} = \\frac{4}{4} = 1$$\n3. Tentukan gradien garis sumbu (tegak lurus terhadap $AB$):\n$$m = -\\frac{1}{m_{AB}} = -\\frac{1}{1} = -1$$\n4. Susun persamaan garis melalui $M(4, 3)$ dengan gradien $m = -1$:\n$$y - 3 = -1(x - 4)$$\n$$y - 3 = -x + 4$$\n$$x + y - 7 = 0$$\n5. Jadi, persamaan garis sumbu adalah $x + y - 7 = 0$ (pilihan A).",
      "pitfalls": "Menggunakan titik $A$ atau titik $B$ sebagai titik acuan, bukan titik tengah $M$."
    },
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "difficultyLabel": "Sedang",
    "hint": "Garis sumbu adalah garis yang melalui titik tengah ruas garis $AB$ dan bergradien tegak lurus terhadap gradien garis $AB$. **Tips:** Menggunakan titik $A$ atau titik $B$ sebagai titik acuan, bukan titik tengah $M$."
  },
  {
    "id": "mudah-mtk-03",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-geo",
    "subTopicId": "fun-geo-dasar-gradien",
    "category": "Garis Lurus & Gradien (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Gradien garis yang tegak lurus dengan garis $3x - 6y + 12 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$2$",
      "$-3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Gradien Dua Garis Tegak Lurus:</strong><br>\n          $$m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Ubah persamaan garis ke bentuk eksplisit $y = mx + c$:\n            $$3x - 6y + 12 = 0 \\implies 6y = 3x + 12 \\implies y = \\frac{1}{2}x + 2$$\n            Jadi, gradien garis pertama $m_1 = \\frac{1}{2}$.\n          </li>\n          <li>Garis yang tegak lurus memiliki gradien:\n            $$m_2 = -\\frac{1}{m_1} = -\\frac{1}{1/2} = -2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Pilihan C (1/2) adalah gradien garis yang <em>sejajar</em>, bukan tegak lurus.\n        </div>\n      "
    },
    "bab": "Geometri Analitik Bidang",
    "subBab": "Gradien Garis Sejajar & Tegak Lurus",
    "subTopic": "Gradien Garis Sejajar & Tegak Lurus",
    "chapterTitle": "Geometri Analitik Bidang",
    "subChapterId": "fun-geo-dasar",
    "subTopicSlug": "gradien-garis-sejajar-tegak-lurus",
    "hint": "Sifat Gradien Dua Garis Tegak Lurus: $$m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$$. **Tips:** (1/2) adalah gradien garis yang sejajar , bukan tegak lurus."
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
