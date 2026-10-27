/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Eksponen dan Logaritma
 * Bab Kecil: Sifat Eksponen & Logaritma (fun-eks-dasar)
 * Sub-Bab: Sifat Eksponen (fun-eks-dasar-eksponen)
 * Slug: sifat-eksponen
 * Indikator: Sifat-sifat perkalian, pembagian, perpangkatan, dan pangkat negatif bilangan berpangkat.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-eks-dasar-eksponen";
  const subTopicSlug = "sifat-eksponen";
  const questions = [
  {
    "id": "fun-eks-dasar-eksponen-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Sifat Perkalian Bilangan Berpangkat Basis Sama",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari operasi perkalian bilangan berpangkat $2^3 \\times 2^4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2^7$",
      "$2^{12}$",
      "$4^7$",
      "$4^{12}$",
      "$2^1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat perkalian bilangan berpangkat dengan basis yang sama menyatakan bahwa pangkatnya dijumlahkan: $a^m \\times a^n = a^{m+n}$.",
      "steps": "1. Amati bahwa kedua bilangan memiliki basis yang sama, yaitu $2$.\n2. Terapkan sifat penjumlahan pangkat:\n$$2^3 \\times 2^4 = 2^{3 + 4}$$\n3. Hitung jumlahan pangkat:\n$$= 2^7$$\n4. Jadi, bentuk sederhananya adalah $2^7$ (pilihan A).",
      "pitfalls": "Mengalikan pangkat ($3 \\times 4 = 12$) alih-alih menjumlahkannya, atau mengalikan basisnya menjadi $4^7$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-eks-dasar-eksponen-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Sifat Pembagian Bilangan Berpangkat",
    "difficulty": "mudah",
    "statement": "Bentuk sederhana dari pembagian bilangan berpangkat $\\frac{3^8}{3^5}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3^{13}$",
      "$3^3$",
      "$1^3$",
      "$3^{-3}$",
      "$3^{\\frac{8}{5}}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sifat pembagian bilangan berpangkat dengan basis yang sama menyatakan bahwa pangkat pembilang dikurangi pangkat penyebut: $\\frac{a^m}{a^n} = a^{m-n}$.",
      "steps": "1. Pastikan kedua bilangan berpangkat memiliki basis yang sama ($3$).\n2. Kurangkan pangkatnya:\n$$\\frac{3^8}{3^5} = 3^{8 - 5}$$\n3. Hitung hasil pengurangan pangkat:\n$$= 3^3$$\n4. Jadi, bentuk sederhananya adalah $3^3$ (pilihan B).",
      "pitfalls": "Membagi pangkat ($8 / 5$) atau menjumlahkannya menjadi $3^{13}$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-eks-dasar-eksponen-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Sifat Pemangkatan Bilangan Berpangkat",
    "difficulty": "mudah",
    "statement": "Hasil dari pemangkatan $(2^3)^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2^5$",
      "$2^6$",
      "$2^9$",
      "$4^5$",
      "$4^6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sifat perpangkatan dari bilangan berpangkat menyatakan bahwa kedua eksponen saling dikalikan: $(a^m)^n = a^{m \\cdot n}$.",
      "steps": "1. Kalikan kedua eksponennya:\n$$(2^3)^2 = 2^{3 \\times 2}$$\n2. Selesaikan perkalian pangkat:\n$$= 2^6$$\n3. Jadi, hasilnya adalah $2^6$ (pilihan B).",
      "pitfalls": "Menjumlahkan eksponen ($3 + 2 = 5$) sehingga memilih $2^5$ atau memangkatkan eksponen ($3^2 = 9$) sehingga memilih $2^9$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-eks-dasar-eksponen-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Mengubah Pangkat Negatif Menjadi Positif",
    "difficulty": "mudah",
    "statement": "Bentuk pangkat bulat positif dari ekspresi $x^{-3} y^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{x^3 y^2}$",
      "$\\frac{x^3}{y^2}$",
      "$\\frac{y^2}{x^3}$",
      "$-\\frac{y^2}{x^3}$",
      "$(xy)^{-1}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bilangan berpangkat negatif didefinisikan sebagai kebalikan dari bilangan berpangkat positif: $a^{-n} = \\frac{1}{a^n}$.",
      "steps": "1. Tinjau faktor yang memiliki pangkat negatif, yaitu $x^{-3}$:\n$$x^{-3} = \\frac{1}{x^3}$$\n2. Kalikan dengan suku berpangkat positif $y^2$:\n$$x^{-3} y^2 = \\frac{1}{x^3} \\times y^2 = \\frac{y^2}{x^3}$$\n3. Jadi, bentuk pangkat bulat positifnya adalah $\\frac{y^2}{x^3}$ (pilihan C).",
      "pitfalls": "Memindahkan seluruh variabel ke bagian penyebut sehingga menghasilkan $\\frac{1}{x^3 y^2}$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-eks-dasar-eksponen-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Nilai Pecahan dengan Pangkat Negatif",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi bilangan pecahan berpangkat negatif $\\left(\\frac{2}{3}\\right)^{-2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{4}{9}$",
      "$\\frac{4}{9}$",
      "$-\\frac{9}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{6}{4}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pecahan berpangkat negatif dapat diubah menjadi pangkat positif dengan membalik pembilang dan penyebut: $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.",
      "steps": "1. Balik pecahan untuk menghilangkan tanda negatif pada eksponen:\n$$\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2$$\n2. Kuadratkan pembilang dan penyebut:\n$$= \\frac{3^2}{2^2} = \\frac{9}{4}$$\n3. Jadi, nilai ekspresi tersebut adalah $\\frac{9}{4}$ (pilihan D).",
      "pitfalls": "Memberikan tanda negatif di depan pecahan $-\\frac{4}{9}$ karena keliru mengartikan pangkat negatif sebagai bilangan bertanda minus."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-eks-dasar-eksponen-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Penyederhanaan Aljabar Eksponen Bertingkat",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari ekspresi $\\frac{(a^2 b^{-3})^2}{a^{-1} b^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a^5}{b^8}$",
      "$\\frac{a^3}{b^4}$",
      "$\\frac{a^5}{b^4}$",
      "$\\frac{a^4}{b^8}$",
      "$a^5 b^4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan aturan pangkat eksponen $(x^m y^n)^k = x^{mk} y^{nk}$ dan pembagian basis sama $\\frac{x^p}{x^q} = x^{p-q}$.",
      "steps": "1. Jabarkan bagian pembilang terlebih dahulu:\n$$(a^2 b^{-3})^2 = a^{2 \\times 2} b^{-3 \\times 2} = a^4 b^{-6}$$\n2. Tuliskan perbandingan lengkapnya:\n$$\\frac{a^4 b^{-6}}{a^{-1} b^2}$$\n3. Operasikan eksponen untuk masing-masing variabel:\nUntuk $a$: $4 - (-1) = 4 + 1 = 5 \\implies a^5$\nUntuk $b$: $-6 - 2 = -8 \\implies b^{-8} = \\frac{1}{b^8}$\n4. Gabungkan hasilnya:\n$$= \\frac{a^5}{b^8}$$\n5. Jadi, bentuk sederhananya adalah $\\frac{a^5}{b^8}$ (pilihan A).",
      "pitfalls": "Salah menghitung pangkat variabel $a$ menjadi $4 - 1 = 3$ karena lupa bahwa penyebut berpangkat $-1$ sehingga terjadi pengurangan ganda $4 - (-1) = 5$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-eks-dasar-eksponen-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Penyederhanaan Eksponen Penjumlahan Variabel Pangkat",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $\\frac{2^{n+2} - 2^n}{2^{n+1}}$ untuk sembarang bilangan bulat $n$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Faktorkan keluar suku berpangkat terkecil $2^n$ pada pembilang dan penyebut untuk menyederhanakan pecahan aljabar eksponen.",
      "steps": "1. Uraikan suku-suku pada pembilang:\n$$2^{n+2} = 2^n \\cdot 2^2 = 4 \\cdot 2^n$$\n2. Lakukan faktorisasi pada pembilang:\n$$2^{n+2} - 2^n = 2^n(2^2 - 1) = 2^n(4 - 1) = 3 \\cdot 2^n$$\n3. Uraikan bagian penyebut:\n$$2^{n+1} = 2 \\cdot 2^n$$\n4. Bagikan pembilang dengan penyebut:\n$$\\frac{3 \\cdot 2^n}{2 \\cdot 2^n} = \\frac{3}{2}$$\n5. Jadi, nilai ekspresi tersebut bernilai konstan $\\frac{3}{2}$ (pilihan C).",
      "pitfalls": "Mencoret langsung suku $2^n$ tanpa melakukan faktorisasi distributif aljabar terlebih dahulu."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-eks-dasar-eksponen-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Substitusi Nilai Eksponen Basis Majemuk",
    "difficulty": "sedang",
    "statement": "Jika diketahui $2^x = 3$, maka nilai dari ekspresi $8^x - 4^x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6$",
      "$12$",
      "$18$",
      "$24$",
      "$27$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Basis majemuk $8^x$ dan $4^x$ dapat dinyatakan dalam basis $2^x$ menggunakan sifat pemangkatan: $a^{kx} = (a^x)^k$.",
      "steps": "1. Ubah $8^x$ ke dalam bentuk basis $2^x$:\n$$8^x = (2^3)^x = (2^x)^3$$\nKarena $2^x = 3$, maka:\n$$8^x = 3^3 = 27$$\n2. Ubah $4^x$ ke dalam bentuk basis $2^x$:\n$$4^x = (2^2)^x = (2^x)^2$$\nKarena $2^x = 3$, maka:\n$$4^x = 3^2 = 9$$\n3. Kurangkan kedua nilai tersebut:\n$$8^x - 4^x = 27 - 9 = 18$$\n4. Jadi, nilai dari $8^x - 4^x$ adalah $18$ (pilihan C).",
      "pitfalls": "Mengalikan langsung $8 \\times 3 = 24$ dan $4 \\times 3 = 12$ alih-alih memangkatkannya."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-eks-dasar-eksponen-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Persamaan Eksponen Sederhana Basis Sama",
    "difficulty": "sedang",
    "statement": "Nilai $x$ yang memenuhi persamaan eksponensial $3^{2x - 1} = 27$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$\\frac{5}{2}$",
      "$3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika $a^{f(x)} = a^p$ dengan $a > 0$ dan $a \\neq 1$, maka eksponennya bernilai sama: $f(x) = p$.",
      "steps": "1. Nyatakan bilangan 27 dalam basis 3:\n$$27 = 3^3$$\n2. Tuliskan kembali persamaan eksponen:\n$$3^{2x - 1} = 3^3$$\n3. Samakan kedua eksponen:\n$$2x - 1 = 3$$\n4. Selesaikan persamaan linear:\n$$2x = 3 + 1 = 4$$\n$$x = 2$$\n5. Jadi, nilai $x$ yang memenuhi adalah $2$ (pilihan C).",
      "pitfalls": "Lupa mengubah 27 menjadi $3^3$ dan malah menyamakan $2x - 1 = 27$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-eks-dasar-eksponen-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-eks",
    "subChapterId": "fun-eks-dasar",
    "subTopicId": "fun-eks-dasar-eksponen",
    "category": "Penyederhanaan Pecahan Eksponen Multi-Variabel Berpangkat Negatif",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari ekspresi $\\left(\\frac{27 a^{-5} b^3}{3 a b^{-1}}\\right)^{-1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{a^6}{9b^4}$",
      "$\\frac{9a^6}{b^4}$",
      "$\\frac{b^4}{9a^6}$",
      "$\\frac{a^4}{9b^2}$",
      "$\\frac{9b^4}{a^6}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sederhanakan terlebih dahulu suku-suku di dalam kurung, lalu terapkan pembalikan pecahan oleh pangkat $-1$.",
      "steps": "1. Sederhanakan suku-suku di dalam tanda kurung:\n- Koefisien numerik: $\\frac{27}{3} = 9$\n- Variabel $a$: $\\frac{a^{-5}}{a^1} = a^{-5 - 1} = a^{-6}$\n- Variabel $b$: $\\frac{b^3}{b^{-1}} = b^{3 - (-1)} = b^4$\n2. Gabungkan bentuk di dalam kurung:\n$$= 9 a^{-6} b^4 = \\frac{9 b^4}{a^6}$$\n3. Terapkan pangkat luar $-1$ (balik pecahan):\n$$\\left(\\frac{9 b^4}{a^6}\\right)^{-1} = \\frac{a^6}{9 b^4}$$\n4. Jadi, bentuk paling sederhananya adalah $\\frac{a^6}{9b^4}$ (pilihan A).",
      "pitfalls": "Lupa membalik koefisien 9 menjadi $\\frac{1}{9}$ saat menerapkan pemangkatan $-1$."
    },
    "subTopicSlug": "sifat-eksponen",
    "bab": "Eksponen dan Logaritma",
    "subBab": "Sifat Eksponen",
    "subTopic": "Sifat Eksponen",
    "chapterTitle": "Eksponen dan Logaritma",
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
