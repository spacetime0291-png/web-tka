/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Fungsi Piecewise (mat-lim-fungsi-piecewise)
 * Slug: limit-fungsi-piecewise
 * Indikator: Kekontinuan dan eksistensi limit fungsi melalui kesamaan limit kiri dan kanan.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-piecewise";
  const subTopicSlug = "limit-fungsi-piecewise";
  const questions = [
  {
    "id": "mat-lim-fungsi-piecewise-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Kiri Fungsi Sepotong",
    "difficulty": "mudah",
    "statement": "Diberikan fungsi sepotong-sepotong (piecewise) $f(x) = \\begin{cases} 2x + 1, & \\text{untuk } x < 3 \\\\ x^2 - 2, & \\text{untuk } x \\ge 3 \\end{cases}$. Nilai dari $\\lim_{x \\to 3^-} f(x)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "Tidak ada"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Limit kiri $\\lim_{x \\to c^-} f(x)$ adalah nilai pendekatan fungsi ketika variabel $x$ mendekati titik $c$ dari arah kiri ($x < c$). Oleh karena itu, kita menggunakan aturan fungsi yang terdefinisi untuk interval $x < c$.",
      "steps": "1. Karena $x \\to 3^-$ menyatakan $x < 3$, gunakan cabang rumus $f(x) = 2x + 1$.\n2. Substitusikan nilai $x = 3$ ke dalam rumus tersebut:\n$$\\lim_{x \\to 3^-} f(x) = 2(3) + 1 = 6 + 1 = 7$$\n3. Jadi, nilai limit kiri tersebut adalah $7$ (pilihan B).",
      "pitfalls": "Menggunakan cabang kedua $x^2 - 2$ yang diperuntukkan bagi $x \\ge 3$ (pendekatan dari kanan)."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-piecewise-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Keberadaan Limit Fungsi Sepotong",
    "difficulty": "mudah",
    "statement": "Diketahui fungsi $g(x) = \\begin{cases} 4x - 1, & \\text{untuk } x \\le 2 \\\\ x^2 + 3, & \\text{untuk } x > 2 \\end{cases}$. Nilai dari $\\lim_{x \\to 2} g(x)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3$",
      "$5$",
      "$7$",
      "$9$",
      "Tidak ada nilai limit"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Suatu limit dua sisi $\\lim_{x \\to c} g(x)$ bernilai $L$ jika dan hanya jika limit kiri dan limit kanan keduanya bernilai sama: $\\lim_{x \\to c^-} g(x) = \\lim_{x \\to c^+} g(x) = L$.",
      "steps": "1. Hitung limit kiri ($x \\to 2^-$ pada $x \\le 2$):\n$$\\lim_{x \\to 2^-} g(x) = 4(2) - 1 = 8 - 1 = 7$$\n2. Hitung limit kanan ($x \\to 2^+$ pada $x > 2$):\n$$\\lim_{x \\to 2^+} g(x) = 2^2 + 3 = 4 + 3 = 7$$\n3. Karena limit kiri = limit kanan = $7$, maka nilai limit dua sisinya ada dan bernilai $7$.\n4. Jadi, jawabannya adalah $7$ (pilihan C).",
      "pitfalls": "Langsung menyatakan limit tidak ada tanpa menguji dan membandingkan kesamaan nilai limit kiri dan kanannya."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-piecewise-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Kanan Fungsi Nilai Mutlak",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 4^+} \\frac{|x - 4|}{x - 4}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$0$",
      "$1$",
      "$4$",
      "Tidak terdefinisi"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan definisi nilai mutlak, $|u| = u$ jika $u \\ge 0$ dan $|u| = -u$ jika $u < 0$. Untuk pendekatan dari kanan $x \\to 4^+$, berlaku $x > 4$, sehingga $(x - 4) > 0$.",
      "steps": "1. Perhatikan bahwa ketika $x \\to 4^+$, maka $x > 4$, yang mengakibatkan $x - 4 > 0$.\n2. Berdasarkan definisi nilai mutlak:\n$$|x - 4| = x - 4$$\n3. Sederhanakan bentuk pecahan limit:\n$$\\lim_{x \\to 4^+} \\frac{|x - 4|}{x - 4} = \\lim_{x \\to 4^+} \\frac{x - 4}{x - 4} = \\lim_{x \\to 4^+} 1 = 1$$\n4. Jadi, nilai limit kanan tersebut adalah $1$ (pilihan C).",
      "pitfalls": "Mengabaikan arah pendekatan dari kanan dan keliru menyamakan dengan limit dari arah kiri yang bernilai $-1$."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-piecewise-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Kiri Fungsi Nilai Mutlak",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 0^-} \\frac{|2x|}{x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketika variabel $x$ mendekati $0$ dari arah kiri ($x \\to 0^-$), maka nilai $x$ bernilai negatif ($x < 0$). Oleh karena itu, $|2x| = -2x$.",
      "steps": "1. Untuk $x < 0$, uraikan bentuk nilai mutlak:\n$$|2x| = -2x$$\n2. Substitusikan ke dalam ekspresi limit:\n$$\\lim_{x \\to 0^-} \\frac{|2x|}{x} = \\lim_{x \\to 0^-} \\frac{-2x}{x}$$\n3. Bagi pembilang dan penyebut dengan $x$ ($x \\ne 0$):\n$$= \\lim_{x \\to 0^-} (-2) = -2$$\n4. Jadi, nilai limit kiri tersebut adalah $-2$ (pilihan A).",
      "pitfalls": "Lupa menambahkan tanda minus saat membuka tanda mutlak untuk bilangan bernilai negatif."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-piecewise-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Kanan Fungsi Tangga Aljabar",
    "difficulty": "mudah",
    "statement": "Diberikan fungsi $h(x) = \\begin{cases} x + 5, & \\text{untuk } x < 1 \\\\ 3x + 1, & \\text{untuk } x \\ge 1 \\end{cases}$. Nilai dari $\\lim_{x \\to 1^+} h(x)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$6$",
      "$7$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Limit kanan $\\lim_{x \\to 1^+} h(x)$ ditinjau untuk nilai-nilai $x$ yang lebih besar dari 1 ($x > 1$). Gunakan cabang aturan fungsi yang bersesuaian dengan interval tersebut.",
      "steps": "1. Untuk $x \\to 1^+$, berlaku $x > 1$, sehingga fungsi yang digunakan adalah $h(x) = 3x + 1$.\n2. Substitusikan $x = 1$:\n$$\\lim_{x \\to 1^+} h(x) = 3(1) + 1 = 4$$\n3. Jadi, nilai limit kanan tersebut adalah $4$ (pilihan B).",
      "pitfalls": "Salah memilih cabang fungsi pertama $x + 5$ yang bernilai $6$ (yang merupakan nilai limit kiri)."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-piecewise-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Syarat Kekontinuan Fungsi Sepotong",
    "difficulty": "sedang",
    "statement": "Agar fungsi $f(x) = \\begin{cases} ax + 3, & \\text{untuk } x \\le 2 \\\\ 2x^2 - 1, & \\text{untuk } x > 2 \\end{cases}$ kontinu di titik $x = 2$, maka nilai konstanta $a$ haruslah ....",
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
      "concept": "Fungsi $f(x)$ dikatakan kontinu di $x = c$ jika memenuhi tiga syarat: $f(c)$ terdefinisi, limit $\\lim_{x \\to c} f(x)$ ada (limit kiri sama dengan limit kanan), dan $\\lim_{x \\to c} f(x) = f(c)$.",
      "steps": "1. Hitung limit kiri sekaligus nilai fungsi di $x = 2$:\n$$\\lim_{x \\to 2^-} f(x) = f(2) = a(2) + 3 = 2a + 3$$\n2. Hitung limit kanan di $x = 2$:\n$$\\lim_{x \\to 2^+} f(x) = 2(2^2) - 1 = 2(4) - 1 = 8 - 1 = 7$$\n3. Samakan limit kiri dan limit kanan agar fungsi kontinu:\n$$2a + 3 = 7$$\n$$2a = 4 \\implies a = 2$$\n4. Jadi, nilai konstanta $a$ adalah $2$ (pilihan B).",
      "pitfalls": "Lupa mengalikan 2 dengan nilai $x$ pada suku kuadrat atau salah memindahkan suku konstanta $7 - 3$."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-piecewise-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Dua Sisi dengan Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{|x - 3|}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-6$",
      "$0$",
      "$6$",
      "$12$",
      "Tidak ada"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Untuk menguji keberadaan limit dua sisi fungsi yang memuat tanda mutlak di sekitar titik kritis pembuat nol, kita harus memeriksa kesamaan antara limit kiri dan limit kanannya.",
      "steps": "1. Uji limit kanan ($x \\to 3^+$ di mana $x > 3 \\implies |x - 3| = x - 3$):\n$$\\lim_{x \\to 3^+} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3^+} (x + 3) = 3 + 3 = 6$$\n2. Uji limit kiri ($x \\to 3^-$ di mana $x < 3 \\implies |x - 3| = -(x - 3)$):\n$$\\lim_{x \\to 3^-} \\frac{(x - 3)(x + 3)}{-(x - 3)} = \\lim_{x \\to 3^-} -(x + 3) = -(3 + 3) = -6$$\n3. Karena nilai limit kiri ($-6$) tidak sama dengan limit kanan ($6$), maka limit dua sisinya tidak ada.\n4. Jadi, nilai limit tersebut tidak ada (pilihan E).",
      "pitfalls": "Hanya menghitung salah satu arah limit saja dan terburu-buru memilih jawaban $6$ atau $-6$."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-piecewise-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Kekontinuan dengan Dua Parameter Linear",
    "difficulty": "sedang",
    "statement": "Fungsi $g(x) = \\begin{cases} x + 2a, & \\text{untuk } x < -1 \\\\ ax + b, & \\text{untuk } -1 \\le x \\le 1 \\\\ 3x - 2, & \\text{untuk } x > 1 \\end{cases}$ kontinu untuk semua bilangan real $x$. Nilai dari $a + b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Agar fungsi kontinu di seluruh domain bilangan real, fungsi harus kontinu pada setiap titik peralihan interval, yaitu di $x = -1$ dan $x = 1$.",
      "steps": "1. Syarat kontinu di titik batas $x = 1$:\n$$\\lim_{x \\to 1^-} g(x) = \\lim_{x \\to 1^+} g(x)$$\n$$a(1) + b = 3(1) - 2$$\n$$a + b = 1$$\n2. Karena yang ditanyakan pada soal secara langsung adalah nilai dari $a + b$, maka kita langsung memperoleh $a + b = 1$.\n3. (Verifikasi di $x = -1$):\n$$-1 + 2a = a(-1) + b \\implies 3a - b = 1$$\nMenyelesaikan sistem persamaan menghasilkan $a = \\frac{1}{2}$ dan $b = \\frac{1}{2}$, sehingga $a + b = \\frac{1}{2} + \\frac{1}{2} = 1$.\n4. Jadi, nilai $a + b$ adalah $1$ (pilihan C).",
      "pitfalls": "Menghabiskan waktu terlalu lama mencari nilai masing-masing variabel $a$ dan $b$ padahal nilai $a + b$ dapat langsung dibaca dari syarat kontinuitas di $x = 1$."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-piecewise-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Limit Pecahan Nilai Mutlak Kuadrat",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 1^-} \\frac{|x^2 - 1|}{x - 1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perhatikan tanda dari argumen di dalam nilai mutlak $(x^2 - 1)$ saat $x$ mendekati 1 dari arah kiri ($x < 1$). Jika $x < 1$ (misalkan $x = 0{,}9$), maka $x^2 < 1$, sehingga $x^2 - 1 < 0$ dan $|x^2 - 1| = -(x^2 - 1)$.",
      "steps": "1. Karena $x \\to 1^-$, maka $x^2 < 1 \\implies x^2 - 1 < 0$.\n2. Uraikan bentuk nilai mutlak:\n$$|x^2 - 1| = -(x^2 - 1) = -(x - 1)(x + 1)$$\n3. Masukkan ke dalam ekspresi limit:\n$$\\lim_{x \\to 1^-} \\frac{-(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1^-} -(x + 1)$$\n4. Substitusikan $x = 1$:\n$$-(1 + 1) = -2$$\n5. Jadi, nilai limit tersebut adalah $-2$ (pilihan A).",
      "pitfalls": "Lupa menganalisis tanda aljabar di sekitar 1 dari arah kiri dan langsung membuka tanda mutlak sebagai $(x^2 - 1)$, yang menghasilkan jawaban salah $+2$."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-piecewise-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-piecewise",
    "category": "Diskontinuitas yang Dapat Dihilangkan",
    "difficulty": "sedang",
    "statement": "Diketahui fungsi $f(x) = \\begin{cases} \\frac{x^2 - 4x + 3}{x - 3}, & \\text{untuk } x \\ne 3 \\\\ k, & \\text{untuk } x = 3 \\end{cases}$. Agar fungsi $f(x)$ kontinu di seluruh daerah asalnya, maka nilai $k$ harus sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Titik diskontinuitas yang dapat dihilangkan (*removable discontinuity*) terjadi ketika limit $\\lim_{x \\to c} f(x)$ ada, dan kekontinuan dicapai dengan menetapkan nilai fungsi $f(c) = k = \\lim_{x \\to c} f(x)$.",
      "steps": "1. Hitung nilai limit fungsi saat $x \\to 3$:\n$$\\lim_{x \\to 3} \\frac{x^2 - 4x + 3}{x - 3}$$\n2. Faktorkan pembilang:\n$$x^2 - 4x + 3 = (x - 3)(x - 1)$$\n3. Sederhanakan pecahan:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x - 1)}{x - 3} = \\lim_{x \\to 3} (x - 1)$$\n4. Substitusikan $x = 3$:\n$$3 - 1 = 2$$\n5. Agar kontinu di $x = 3$, nilai $f(3)$ harus sama dengan nilai limitnya:\n$$f(3) = k = 2$$\n6. Jadi, nilai $k$ yang tepat adalah $2$ (pilihan C).",
      "pitfalls": "Salah memfaktorkan pembilang menjadi $(x + 3)(x - 1)$ yang menyebabkan salah perhitungan."
    },
    "subTopicSlug": "limit-fungsi-piecewise",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Piecewise",
    "subTopic": "Limit Fungsi Piecewise",
    "chapterTitle": "Kalkulus Limit",
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
