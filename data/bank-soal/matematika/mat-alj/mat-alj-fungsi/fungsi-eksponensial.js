/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Eksponensial (mat-alj-fungsi-eksponen)
 * Slug: fungsi-eksponensial
 * Indikator: Grafik f(x) = a^x, pertumbuhan eksponensial, dan asimtot datar y = 0.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-eksponen";
  const subTopicSlug = "fungsi-eksponensial";
  const questions = [
  {
    "id": "mat-alj-fungsi-eksponen-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Asimtot Datar Fungsi Eksponensial Dasar",
    "difficulty": "mudah",
    "statement": "Persamaan garis asimtot datar dari kurva grafik fungsi eksponensial $f(x) = 3^x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 0$",
      "$x = 0$",
      "$y = 1$",
      "$y = 3$",
      "$x = 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi eksponensial standar $f(x) = a^x$ dengan $a > 1$ mendekati nilai 0 saat $x$ menuju $-\\infty$ ($\\lim_{x \\to -\\infty} a^x = 0$), sehingga memiliki asimtot datar pada sumbu-$X$ yaitu garis horizontal $y = 0$.",
      "steps": "1. Amati perilaku fungsi $f(x) = 3^x$ saat $x$ menuju nilai negatif yang sangat besar:\n$$\\lim_{x \\to -\\infty} 3^x = \\lim_{x \\to \\infty} \\frac{1}{3^x} = 0$$\n2. Kurva mendekati garis $y = 0$ tetapi tidak pernah menyentuh atau memotongnya untuk setiap bilangan real $x$.<br>3. Jadi persamaan asimtot datarnya adalah $y = 0$ (pilihan A).",
      "pitfalls": "Tertukar antara garis horizontal ($y = 0$) dengan garis vertikal sumbu-$Y$ ($x = 0$)."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi eksponensial standar $f(x) = a^x$ dengan $a > 1$ mendekati nilai 0 saat $x$ menuju $-\\infty$ ($\\lim_{x \\to -\\infty} a^x = 0$), sehingga memiliki asimtot datar pada sumbu-$X$ yaitu garis horizontal $y = 0$."
  },
  {
    "id": "mat-alj-fungsi-eksponen-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Titik Potong Grafik Eksponen dengan Sumbu-Y",
    "difficulty": "mudah",
    "statement": "Grafik fungsi eksponensial $f(x) = 2^x$ memotong sumbu-$Y$ pada koordinat titik ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0, 1)$",
      "$(1, 0)$",
      "$(0, 2)$",
      "$(0, 0)$",
      "$(2, 1)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong grafik dengan sumbu-$Y$ diperoleh saat $x = 0$. Untuk setiap bilangan real positif $a$, berlaku sifat pangkat nol: $a^0 = 1$.",
      "steps": "1. Substitusikan $x = 0$ ke dalam rumus fungsi:\n$$f(0) = 2^0 = 1$$\n2. Maka titik potong kurva dengan sumbu-$Y$ adalah $(0, 1)$.<br>3. Jadi pilihan yang benar adalah $(0, 1)$ (pilihan A).",
      "pitfalls": "Mengira $2^0 = 0$ sehingga memilih $(0, 0)$, atau $2^0 = 2$ sehingga memilih $(0, 2)$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong grafik dengan sumbu-$Y$ diperoleh saat $x = 0$. Untuk setiap bilangan real positif $a$, berlaku sifat pangkat nol: $a^0 = 1$."
  },
  {
    "id": "mat-alj-fungsi-eksponen-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Identifikasi Peluruhan Eksponensial",
    "difficulty": "mudah",
    "statement": "Di antara fungsi-fungsi eksponensial berikut, yang merupakan fungsi peluruhan eksponensial (grafiknya monoton turun) untuk seluruh $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$f(x) = \\left(\\frac{1}{2}\\right)^x$",
      "$f(x) = 2^x$",
      "$f(x) = 3^x$",
      "$f(x) = e^x$",
      "$f(x) = 5^{x+1}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi eksponensial $f(x) = a^x$ merupakan fungsi pertumbuhan eksponensial (monoton naik) jika basis $a > 1$, dan merupakan fungsi peluruhan eksponensial (monoton turun) jika basis memenuhi interval $0 < a < 1$.",
      "steps": "1. Tinjau nilai basis dari masing-masing pilihan:\n- $f(x) = \\left(\\frac{1}{2}\\right)^x$: basis $a = \\frac{1}{2}$, memenuhi $0 < a < 1$.\n- $f(x) = 2^x, 3^x, e^x, 5^{x+1}$: seluruhnya memiliki basis $a > 1$ (fungsi pertumbuhan naik).<br>2. Karena basis $\\frac{1}{2} < 1$, nilai fungsinya mengecil seiring bertambahnya nilai $x$.<br>3. Jadi fungsi peluruhan eksponensial adalah $f(x) = \\left(\\frac{1}{2}\\right)^x$ (pilihan A).",
      "pitfalls": "Mengira fungsi peluruhan harus memiliki tanda minus di depan koefisien utama."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi eksponensial $f(x) = a^x$ merupakan fungsi pertumbuhan eksponensial (monoton naik) jika basis $a > 1$, dan merupakan fungsi peluruhan eksponensial (monoton turun) jika basis memenuhi interval $0 < a < 1$. **Tips:** Mengira fungsi peluruhan harus memiliki tanda minus di depan koefisien utama."
  },
  {
    "id": "mat-alj-fungsi-eksponen-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Asimtot Datar Fungsi Eksponen Tertranslasi",
    "difficulty": "mudah",
    "statement": "Persamaan asimtot datar dari kurva grafik fungsi eksponensial $f(x) = 2^{x - 1} - 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = -4$",
      "$y = 4$",
      "$x = 1$",
      "$y = 0$",
      "$x = -4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Grafik fungsi eksponensial berbentuk $f(x) = a^{x - h} + k$ memiliki asimtot datar pada garis horizontal $y = k$ yang ditentukan oleh pergeseran vertikal konstanta $k$.",
      "steps": "1. Amati suku eksponen $2^{x - 1}$ saat $x \\to -\\infty$:\n$$\\lim_{x \\to -\\infty} 2^{x - 1} = 0$$\n2. Hitung nilai limit fungsi secara keseluruhan:\n$$\\lim_{x \\to -\\infty} f(x) = 0 - 4 = -4$$\n3. Garis horizontal yang didekati kurva tanpa pernah disentuh adalah garis $y = -4$.<br>4. Jadi persamaan asimtot datarnya adalah $y = -4$ (pilihan A).",
      "pitfalls": "Mengabaikan konstanta $-4$ dan tetap menjawab $y = 0$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Grafik fungsi eksponensial berbentuk $f(x) = a^{x - h} + k$ memiliki asimtot datar pada garis horizontal $y = k$ yang ditentukan oleh pergeseran vertikal konstanta $k$."
  },
  {
    "id": "mat-alj-fungsi-eksponen-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Penentuan Parameter Grafik Fungsi Eksponen",
    "difficulty": "mudah",
    "statement": "Jika kurva grafik fungsi eksponensial $f(x) = b \\cdot 2^{x + 1}$ melalui titik koordinat $(1, 12)$, maka nilai dari konstanta $b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3",
      "2",
      "4",
      "6",
      "1"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika kurva melalui titik $(x_1, y_1)$, maka koordinat titik tersebut harus memenuhi persamaan fungsi: $y_1 = f(x_1)$.",
      "steps": "1. Substitusikan $x = 1$ dan $f(x) = 12$ ke dalam rumus fungsi:\n$$12 = b \\cdot 2^{1 + 1}$$\n2. Sederhanakan bentuk perpangkatan:\n$$12 = b \\cdot 2^2 \\implies 12 = b \\cdot 4$$\n3. Selesaikan untuk mencari nilai $b$:\n$$b = \\frac{12}{4} = 3$$\n4. Jadi nilai konstanta $b$ adalah 3 (pilihan A).",
      "pitfalls": "Menghitung $(b \\cdot 2)^{x+1}$ alih-alih $b \\cdot (2^{x+1})$ karena salah aturan prioritas operasi perpangkatan."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Jika kurva melalui titik $(x_1, y_1)$, maka koordinat titik tersebut harus memenuhi persamaan fungsi: $y_1 = f(x_1)$. **Tips:** Menghitung $(b \\cdot 2)^{x+1}$ alih-alih $b \\cdot (2^{x+1})$ karena salah aturan prioritas operasi perpangkatan."
  },
  {
    "id": "mat-alj-fungsi-eksponen-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Grafik dan Asimtot Fungsi Eksponensial",
    "difficulty": "sedang",
    "statement": "Diketahui grafik fungsi eksponen $f(x) = a \\cdot 2^{bx} + c$ memiliki asimtot datar garis $y = 1$ serta melalui titik $(0, 5)$ dan $(1, 9)$. Nilai dari $f(2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15",
      "17",
      "25",
      "33",
      "65"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Grafik fungsi eksponen $f(x) = a \\cdot b^x + c$ memiliki asimtot datar pada garis horizontal $y = c$ karena untuk basis $b > 1$, saat $x \\to -\\infty$ nilai suku eksponensial mendekati nol.",
      "steps": "1. Identifikasi asimtot datar: Karena kurva memiliki asimtot datar $y = 1$, maka diperoleh konstanta $c = 1$.\n2. Substitusikan titik $(0, 5)$ ke persamaan $f(x) = a \\cdot 2^{bx} + 1$:\n$$f(0) = a \\cdot 2^0 + 1 = 5 \\implies a + 1 = 5 \\implies a = 4$$\n3. Substitusikan titik $(1, 9)$ dengan nilai $a = 4$ dan $c = 1$:\n$$f(1) = 4 \\cdot 2^{b(1)} + 1 = 9 \\implies 4 \\cdot 2^b = 8 \\implies 2^b = 2 \\implies b = 1$$\n4. Rumus fungsi menjadi $f(x) = 4 \\cdot 2^x + 1$.\n5. Hitung nilai $f(2)$:\n$$f(2) = 4 \\cdot 2^2 + 1 = 4 \\cdot 4 + 1 = 17$$",
      "pitfalls": "Kekeliruan menentukan nilai asimtot datar sering terjadi jika mengabaikan konstanta $c$, atau salah menghitung nilai perpangkatan $2^0 = 1$ menjadi $0$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Grafik fungsi eksponen $f(x) = a \\cdot b^x + c$ memiliki asimtot datar pada garis horizontal $y = c$ karena untuk basis $b > 1$, saat $x \\to -\\infty$ nilai suku eksponensial mendekati nol."
  },
  {
    "id": "mat-alj-fungsi-eksponen-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Daerah Hasil (Range) Fungsi Eksponensial",
    "difficulty": "sedang",
    "statement": "Daerah hasil (range) dari fungsi $f(x) = 3 - 2^{1 - x}$ untuk domain $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\mid y > 3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\ge 3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y < 3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid y \\le 3,\\; y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 0 < y < 3,\\; y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sifat dasar fungsi eksponen dengan basis positif menyatakan bahwa untuk setiap eksponen riil, nilai perpangkatan selalu positif tegas, yaitu $a^{g(x)} > 0$ untuk $a > 0$.",
      "steps": "1. Analisis suku eksponensial: Untuk setiap $x \\in \\mathbb{R}$, nilai $2^{1-x} > 0$.\n2. Kalikan ketaksamaan dengan $-1$ sehingga arah tanda ketidaksamaan berbalik:\n$$-2^{1-x} < 0$$\n3. Tambahkan konstanta $3$ pada kedua ruas:\n$$3 - 2^{1-x} < 3$$\n4. Karena $y = f(x) = 3 - 2^{1-x}$, diperoleh $y < 3$.\n5. Jadi, daerah hasil fungsi adalah $R_f = \\{y \\mid y < 3,\\; y \\in \\mathbb{R}\\}$.",
      "pitfalls": "Sering menyertakan tanda sama dengan ($le$) padahal kurva eksponensial tidak pernah menyentuh garis asimtot datarnya ($y = 3$), sehingga tanda ketidaksamaan adalah ketat ($<$)."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Sifat dasar fungsi eksponen dengan basis positif menyatakan bahwa untuk setiap eksponen riil, nilai perpangkatan selalu positif tegas, yaitu $a^{g(x)} > 0$ untuk $a > 0$."
  },
  {
    "id": "mat-alj-fungsi-eksponen-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Titik Potong Grafik Eksponensial",
    "difficulty": "sedang",
    "statement": "Kurva fungsi $f(x) = 3^{x+1} - 6$ memotong sumbu-$X$ di titik $P(p, 0)$ dan memotong sumbu-$Y$ di titik $Q(0, q)$. Nilai dari $3^p + q$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-3",
      "-1",
      "0",
      "2",
      "5"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik potong kurva dengan sumbu koordinat diperoleh dengan menetapkan $y = 0$ untuk perpotongan sumbu-$X$ dan $x = 0$ untuk perpotongan sumbu-$Y$.",
      "steps": "1. Tentukan titik potong sumbu-$X$ ($y = 0$):\n$$3^{p+1} - 6 = 0 \\implies 3 \\cdot 3^p = 6 \\implies 3^p = 2$$\n2. Tentukan titik potong sumbu-$Y$ ($x = 0$):\n$$q = f(0) = 3^{0+1} - 6 = 3 - 6 = -3$$\n3. Hitung nilai $3^p + q$:\n$$3^p + q = 2 + (-3) = -1$$",
      "pitfalls": "Mencari nilai $p$ dalam bentuk logaritma terlebih dahulu berpotensi memicu kesalahan hitung; perhatikan bahwa yang ditanyakan adalah $3^p$, yang langsung bernilai $2$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Titik potong kurva dengan sumbu koordinat diperoleh dengan menetapkan $y = 0$ untuk perpotongan sumbu-$X$ dan $x = 0$ untuk perpotongan sumbu-$Y$."
  },
  {
    "id": "mat-alj-fungsi-eksponen-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Titik Potong Dua Kurva Eksponen",
    "difficulty": "sedang",
    "statement": "Titik potong antara kurva $f(x) = 2^{x+2}$ dan kurva $g(x) = 2^{-x} + 3$ adalah $(x_0, y_0)$. Nilai dari ordinat $y_0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Titik potong dua kurva dicari dengan menyamakan kedua fungsi $f(x) = g(x)$ dan menyelesaikannya menggunakan pemisalan aljabar persamaan kuadrat.",
      "steps": "1. Samakan kedua persamaan kurva: $2^{x+2} = 2^{-x} + 3$, yang setara dengan $4 \\cdot 2^x = \\frac{1}{2^x} + 3$.\n2. Misalkan $u = 2^x$ dengan $u > 0$:\n$$4u = \\frac{1}{u} + 3 \\implies 4u^2 - 3u - 1 = 0$$\n3. Faktorkan persamaan kuadrat:\n$$(4u + 1)(u - 1) = 0$$\nKarena $u > 0$, maka $u = 1$.\n4. Kembalikan ke variabel $x$: $2^x = 1 \\implies x = 0$, sehingga $x_0 = 0$.\n5. Hitung nilai ordinat $y_0$:\n$$y_0 = f(0) = 2^{0+2} = 4$$",
      "pitfalls": "Terkecoh memberikan jawaban absis $x_0 = 0$ padahal yang ditanyakan secara spesifik adalah nilai ordinat $y_0$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Titik potong dua kurva dicari dengan menyamakan kedua fungsi $f(x) = g(x)$ dan menyelesaikannya menggunakan pemisalan aljabar persamaan kuadrat."
  },
  {
    "id": "mat-alj-fungsi-eksponen-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-eksponen",
    "category": "Aplikasi Pertumbuhan Eksponensial",
    "difficulty": "sedang",
    "statement": "Jumlah populasi bakteri dalam sebuah biakan bertambah mengikuti model pertumbuhan eksponensial $N(t) = N_0 \\cdot 2^{kt}$, dengan $t$ menyatakan waktu dalam jam. Jika mula-mula terdapat $1.200$ bakteri dan setelah $3$ jam populasinya menjadi $9.600$, maka waktu yang dibutuhkan agar populasi mencapai $38.400$ bakteri adalah .... jam.",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Model pertumbuhan eksponensial $N(t) = N_0 \\cdot b^{kt}$ diselesaikan dengan menentukan konstanta laju pertumbuhan $k$ terlebih dahulu melalui data awal dan pengamatan.",
      "steps": "1. Substitusikan populasi awal $t = 0$: $N_0 = 1.200$.\n2. Gunakan data saat $t = 3$ jam dengan $N(3) = 9.600$:\n$$1.200 \\cdot 2^{3k} = 9.600 \\implies 2^{3k} = \\frac{9.600}{1.200} = 8$$\n3. Karena $8 = 2^3$, maka $3k = 3 \\implies k = 1$, sehingga $N(t) = 1.200 \\cdot 2^t$.\n4. Tentukan nilai $t$ saat $N(t) = 38.400$:\n$$1.200 \\cdot 2^t = 38.400 \\implies 2^t = \\frac{38.400}{1.200} = 32$$\n5. Karena $32 = 2^5$, maka $t = 5$ jam.",
      "pitfalls": "Salah membagi populasi akhir dengan populasi awal saat mencari nilai perpangkatan basis, atau keliru menyamakan $32 = 2^5$."
    },
    "subTopicSlug": "fungsi-eksponensial",
    "bab": "Aljabar",
    "subBab": "Fungsi Eksponensial",
    "subTopic": "Fungsi Eksponensial",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Model pertumbuhan eksponensial $N(t) = N_0 \\cdot b^{kt}$ diselesaikan dengan menentukan konstanta laju pertumbuhan $k$ terlebih dahulu melalui data awal dan pengamatan."
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
