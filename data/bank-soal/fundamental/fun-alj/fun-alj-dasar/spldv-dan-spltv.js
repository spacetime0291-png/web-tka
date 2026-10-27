/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Aljabar Elementer
 * Bab Kecil: Aljabar Dasar (fun-alj-dasar)
 * Sub-Bab: SPLDV dan SPLTV (fun-alj-dasar-spldv)
 * Slug: spldv-dan-spltv
 * Indikator: Metode penyelesaian sistem persamaan linear dua dan tiga variabel.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-alj-dasar-spldv";
  const subTopicSlug = "spldv-dan-spltv";
  const questions = [
  {
    "id": "fun-alj-dasar-spldv-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian SPLDV Metode Eliminasi Sederhana",
    "difficulty": "mudah",
    "statement": "Diketahui sistem persamaan linear dua variabel $x + y = 7$ dan $x - y = 3$. Nilai dari $x$ adalah ....",
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
      "concept": "Metode eliminasi menyelesaikan sistem persamaan linear dengan menjumlahkan atau mengurangkan kedua persamaan untuk mengeliminasi salah satu variabel.",
      "steps": "1. Tuliskan kedua persamaan linear:\n$$x + y = 7$$\n$$x - y = 3$$\n2. Jumlahkan kedua persamaan untuk mengeliminasi variabel $y$:\n$$(x + y) + (x - y) = 7 + 3$$\n$$2x = 10$$\n3. Bagi kedua ruas dengan 2:\n$$x = 5$$\n4. Jadi, nilai $x$ adalah $5$ (pilihan D).",
      "pitfalls": "Mengurangkan kedua persamaan sehingga memperoleh nilai $y = 2$ padahal yang ditanyakan adalah nilai $x$."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-spldv-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian SPLDV Mencari Variabel Kedua",
    "difficulty": "mudah",
    "statement": "Diberikan sistem persamaan $2x + y = 11$ dan $x - y = 1$. Nilai dari variabel $y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan eliminasi variabel $y$ untuk menemukan $x$, kemudian substitusikan nilai $x$ ke salah satu persamaan untuk mencari $y$.",
      "steps": "1. Jumlahkan kedua persamaan linear untuk mengeliminasi variabel $y$:\n$$(2x + y) + (x - y) = 11 + 1$$\n$$3x = 12 \\implies x = 4$$\n2. Substitusikan $x = 4$ ke persamaan kedua $x - y = 1$:\n$$4 - y = 1$$\n$$-y = 1 - 4$$\n$$-y = -3 \\implies y = 3$$\n3. Jadi, nilai dari $y$ adalah $3$ (pilihan C).",
      "pitfalls": "Menjawab $4$ karena terburu-buru mengira nilai yang diperoleh pertama kali $(x)$ adalah jawaban akhir."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-spldv-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian SPLDV Metode Substitusi",
    "difficulty": "mudah",
    "statement": "Pasangan bilangan $(x, y)$ memenuhi sistem persamaan $3x + 2y = 12$ dan $y = 2x - 1$. Nilai dari $x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Metode substitusi dilakukan dengan mengganti suatu variabel dengan ekspresi variabel lain yang telah dinyatakan secara eksplisit.",
      "steps": "1. Substitusikan bentuk $y = 2x - 1$ ke dalam persamaan pertama:\n$$3x + 2(2x - 1) = 12$$\n2. Jabarkan perkalian aljabar:\n$$3x + 4x - 2 = 12$$\n3. Gabungkan suku-suku sejenis:\n$$7x - 2 = 12$$\n$$7x = 14 \\implies x = 2$$\n4. Jadi, nilai $x$ adalah $2$ (pilihan B).",
      "pitfalls": "Lupa mengalikan $-1$ dengan koefisien 2 di luar kurung sehingga menghasilkan $3x + 4x - 1 = 12$."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-spldv-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Pemodelan Matematika Sistem Persamaan Linear",
    "difficulty": "mudah",
    "statement": "Harga $2$ buku dan $3$ pensil adalah $\\text{Rp}17.000,00$, sedangkan harga $1$ buku dan $2$ pensil adalah $\\text{Rp}10.000,00$. Jika $b$ menyatakan harga satu buku dan $p$ menyatakan harga satu pensil, maka model matematika yang tepat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{cases} 2b + 3p = 17.000 \\\\ b + 2p = 10.000 \\end{cases}$",
      "$\\begin{cases} 3b + 2p = 17.000 \\\\ 2b + p = 10.000 \\end{cases}$",
      "$\\begin{cases} 2b + 3p = 10.000 \\\\ b + 2p = 17.000 \\end{cases}$",
      "$\\begin{cases} 2b + p = 17.000 \\\\ b + 3p = 10.000 \\end{cases}$",
      "$\\begin{cases} b + p = 17.000 \\\\ 2b + 2p = 10.000 \\end{cases}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pemodelan aljabar menerjemahkan kalimat verbal menjadi persamaan matematika dengan memetakan besaran objek ke variabel linier.",
      "steps": "1. Misalkan harga 1 buku $= b$ dan harga 1 pensil $= p$.\n2. Kalimat pertama: 2 buku dan 3 pensil berharga Rp17.000,00:\n$$2b + 3p = 17.000$$\n3. Kalimat kedua: 1 buku dan 2 pensil berharga Rp10.000,00:\n$$b + 2p = 10.000$$\n4. Satukan kedua persamaan menjadi sistem:\n$$\\begin{cases} 2b + 3p = 17.000 \\\\ b + 2p = 10.000 \\end{cases}$$\n5. Jadi, model matematika yang tepat adalah pilihan A.",
      "pitfalls": "Tertukar koefisien antara variabel buku $b$ dan pensil $p$ pada persamaan."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-spldv-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian SPLTV Bentuk Reduksi Langsung",
    "difficulty": "mudah",
    "statement": "Diberikan sistem persamaan linear tiga variabel: $x + y + z = 10$, $x + y = 6$, dan $y + z = 7$. Nilai dari variabel $z$ adalah ....",
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
    "correctIndex": 2,
    "solution": {
      "concept": "Pada SPLTV dengan kombinasi penjumlahan parsial, substitusi gabungan $(x + y)$ langsung menghasilkan nilai variabel ketiga $z$.",
      "steps": "1. Perhatikan persamaan pertama: $x + y + z = 10$.\n2. Kelompokkan dua variabel pertama: $(x + y) + z = 10$.\n3. Substitusikan nilai persamaan kedua $(x + y = 6)$:\n$$6 + z = 10$$\n4. Kurangkan kedua ruas dengan 6:\n$$z = 10 - 6 = 4$$\n5. Jadi, nilai $z$ adalah $4$ (pilihan C).",
      "pitfalls": "Melakukan proses eliminasi bertahap yang panjang dan rumit padahal suku $(x + y)$ sudah diketahui secara utuh."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-alj-dasar-spldv-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian SPLDV Kombinasi Koefisien Bukan Satu",
    "difficulty": "sedang",
    "statement": "Diketahui sistem persamaan linear dua variabel:\n$$2x + 3y = 8$$\n$$3x - 2y = -1$$\nNilai dari $x + y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan metode eliminasi dengan menyamakan koefisien salah satu variabel melalui perkalian konstanta sebelum melakukan penjumlahan atau pengurangan persamaan.",
      "steps": "1. Kalikan persamaan pertama dengan 2 dan persamaan kedua dengan 3 agar koefisien $y$ sama besar namun berlawanan tanda:\n$$4x + 6y = 16$$\n$$9x - 6y = -3$$\n2. Jumlahkan kedua persamaan:\n$$(4x + 6y) + (9x - 6y) = 16 + (-3)$$\n$$13x = 13 \\implies x = 1$$\n3. Substitusikan $x = 1$ ke persamaan $2x + 3y = 8$:\n$$2(1) + 3y = 8$$\n$$3y = 6 \\implies y = 2$$\n4. Hitung nilai $x + y$:\n$$x + y = 1 + 2 = 3$$\n5. Jadi, nilai dari $x + y$ adalah $3$ (pilihan C).",
      "pitfalls": "Hanya mencari nilai $x$ atau $y$ tanpa melanjutkan menghitung nilai jumlahan $x + y$ yang diminta soal."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-spldv-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Sistem Persamaan Pecahan Resiprokal",
    "difficulty": "sedang",
    "statement": "Pasangan bilangan real positif $(x, y)$ memenuhi sistem persamaan:\n$$\\frac{2}{x} + \\frac{3}{y} = 7$$\n$$\\frac{1}{x} - \\frac{2}{y} = 0$$\nNilai dari hasil kali $x \\cdot y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$",
      "$4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sistem persamaan non-linier dalam variabel pecahan dapat diubah menjadi SPLDV biasa dengan melakukan pemisalan variabel baru: $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$.",
      "steps": "1. Misalkan $u = \\frac{1}{x}$ dan $v = \\frac{1}{y}$, sehingga sistem menjadi:\n$$2u + 3v = 7$$\n$$u - 2v = 0 \\implies u = 2v$$\n2. Substitusikan $u = 2v$ ke persamaan pertama:\n$$2(2v) + 3v = 7$$\n$$4v + 3v = 7 \\implies 7v = 7 \\implies v = 1$$\n3. Tentukan nilai $u$:\n$$u = 2v = 2(1) = 2$$\n4. Kembalikan ke variabel awal $x$ dan $y$:\n$$x = \\frac{1}{u} = \\frac{1}{2}$$\n$$y = \\frac{1}{v} = \\frac{1}{1} = 1$$\n5. Hitung nilai $x \\cdot y$:\n$$x \\cdot y = \\frac{1}{2} \\times 1 = \\frac{1}{2}$$\n6. Jadi, nilai $x \\cdot y$ adalah $\\frac{1}{2}$ (pilihan B).",
      "pitfalls": "Lupa membalikkan kembali variabel substitusi $u$ dan $v$ sehingga langsung mengalikan $u \\cdot v = 2 \\times 1 = 2$."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-spldv-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Penyelesaian Sistem Tiga Variabel SPLTV",
    "difficulty": "sedang",
    "statement": "Diketahui sistem persamaan linear tiga variabel:\n$$x + y + z = 6$$\n$$2x - y + z = 3$$\n$$x + 2y - z = 2$$\nNilai dari hasil kali $x \\cdot y \\cdot z$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "SPLTV diselesaikan dengan mengeliminasi satu variabel yang sama secara bertahap menggunakan dua pasang persamaan sehingga diperoleh SPLDV.",
      "steps": "1. Eliminasi $z$ dengan menjumlahkan persamaan (1) dan (3):\n$$(x + y + z) + (x + 2y - z) = 6 + 2$$\n$$2x + 3y = 8 \\quad \\text{--- (4)}$$\n2. Eliminasi $z$ dengan mengurangkan persamaan (1) dan (2):\n$$(x + y + z) - (2x - y + z) = 6 - 3$$\n$$-x + 2y = 3 \\implies x = 2y - 3 \\quad \\text{--- (5)}$$\n3. Substitusikan (5) ke dalam (4):\n$$2(2y - 3) + 3y = 8$$\n$$4y - 6 + 3y = 8 \\implies 7y = 14 \\implies y = 2$$\n4. Hitung nilai $x$ dan $z$:\n$$x = 2(2) - 3 = 1$$\n$$z = 6 - (x + y) = 6 - (1 + 2) = 3$$\n5. Hitung hasil kali ketiga variabel:\n$$x \\cdot y \\cdot z = 1 \\times 2 \\times 3 = 6$$\n6. Jadi, nilai $x \\cdot y \\cdot z$ adalah $6$ (pilihan B).",
      "pitfalls": "Kesalahan tanda saat proses eliminasi antar-persamaan bertingkat yang merambat ke seluruh nilai variabel berikutnya."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-spldv-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Kondisi Banyak Penyelesaian Tak Hingga SPLDV",
    "difficulty": "sedang",
    "statement": "Diberikan sistem persamaan linear:\n$$kx + 2y = 4$$\n$$3x + y = 2$$\nAgar sistem persamaan tersebut memiliki tak hingga banyaknya penyelesaian, maka nilai konstanta $k$ harus bernilai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$6$",
      "$8$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Sistem persamaan linear dua variabel $a_1 x + b_1 y = c_1$ dan $a_2 x + b_2 y = c_2$ memiliki tak terhingga penyelesaian jika kedua garis berimpit, yaitu $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.",
      "steps": "1. Tentukan perbandingan koefisien sistem:\n$$\\frac{k}{3} = \\frac{2}{1} = \\frac{4}{2}$$\n2. Perhatikan nilai perbandingan konstanta dan koefisien $y$:\n$$\\frac{2}{1} = 2, \\quad \\frac{4}{2} = 2$$\n3. Samakan perbandingan koefisien $x$ dengan rasio perbandingan tersebut:\n$$\\frac{k}{3} = 2$$\n4. Kalikan kedua ruas dengan 3:\n$$k = 2 \\times 3 = 6$$\n5. Jadi, nilai konstanta $k$ adalah $6$ (pilihan D).",
      "pitfalls": "Menggunakan kondisi garis tegak lurus atau salah menyamakan perbandingan invers sehingga memilih $k = \\frac{3}{2}$."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-alj-dasar-spldv-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-alj",
    "subChapterId": "fun-alj-dasar",
    "subTopicId": "fun-alj-dasar-spldv",
    "category": "Aplikasi SPLDV pada Masalah Hubungan Usia",
    "difficulty": "sedang",
    "statement": "Tiga tahun yang lalu, usia seorang Ayah adalah empat kali usia anaknya. Enam tahun yang akan datang, usia Ayah tersebut menjadi $2{,}5$ kali usia anaknya. Usia anak saat ini adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9\\text{ tahun}$",
      "$12\\text{ tahun}$",
      "$15\\text{ tahun}$",
      "$18\\text{ tahun}$",
      "$21\\text{ tahun}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Masalah umur dimodelkan dengan memisalkan umur saat ini sebagai $A$ (Ayah) dan $B$ (anak), kemudian merumuskan kondisi masa lampau $(A - t)$ dan masa depan $(A + t)$.",
      "steps": "1. Misalkan umur Ayah sekarang $= A$ dan umur anak sekarang $= B$.\n2. Kondisi 3 tahun lalu:\n$$A - 3 = 4(B - 3) \\implies A - 3 = 4B - 12 \\implies A = 4B - 9 \\quad \\text{--- (1)}$$\n3. Kondisi 6 tahun yang akan datang:\n$$A + 6 = 2{,}5(B + 6) = \\frac{5}{2}(B + 6)$$\n$$2(A + 6) = 5(B + 6)$$\n$$2A + 12 = 5B + 30 \\implies 2A - 5B = 18 \\quad \\text{--- (2)}$$\n4. Substitusikan persamaan (1) ke dalam persamaan (2):\n$$2(4B - 9) - 5B = 18$$\n$$8B - 18 - 5B = 18$$\n$$3B = 36 \\implies B = 12$$\n5. Jadi, usia anak saat ini adalah $12\\text{ tahun}$ (pilihan B).",
      "pitfalls": "Lupa mengurangkan atau menambahkan umur kedua belah pihak (hanya mengubah umur Ayah saja, atau sebaliknya)."
    },
    "subTopicSlug": "spldv-dan-spltv",
    "bab": "Aljabar Elementer",
    "subBab": "SPLDV dan SPLTV",
    "subTopic": "SPLDV dan SPLTV",
    "chapterTitle": "Aljabar Elementer",
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
