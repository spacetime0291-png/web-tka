/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Menuju Tak Hingga (mat-lim-fungsi-takhingga)
 * Slug: limit-menuju-tak-hingga
 * Indikator: Limit fungsi aljabar rasional dan irasional saat x mendekati tak hingga.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-takhingga";
  const subTopicSlug = "limit-menuju-tak-hingga";
  const questions = [
  {
    "id": "mat-lim-fungsi-takhingga-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Polinomial Menuju Tak Hingga",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} (4x^3 - 7x^2 + 2x - 9)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\infty$",
      "$-9$",
      "$0$",
      "$4$",
      "$\\infty$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Pada fungsi polinomial saat $x \\to \\infty$, perilaku asimtotik seluruh fungsi didominasi sepenuhnya oleh suku dengan derajat tertinggi ($a_n x^n$).",
      "steps": "1. Faktorkan suku berpangkat tertinggi $x^3$:\n$$4x^3 - 7x^2 + 2x - 9 = x^3 \\left(4 - \\frac{7}{x} + \\frac{2}{x^2} - \\frac{9}{x^3}\\right)$$\n2. Evaluasi limit saat $x \\to \\infty$:\n$$\\lim_{x \\to \\infty} x^3 \\left(4 - 0 + 0 - 0\\right) = \\infty \\times 4 = \\infty$$\n3. Jadi, nilai limit tersebut adalah $\\infty$ (pilihan E).",
      "pitfalls": "Hanya melihat konstanta suku terakhir $-9$ atau hanya mengambil koefisien suku pertama $4$ tanpa menyadari bahwa nilai fungsi terus membesar tanpa batas."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-takhingga-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Rasional Derajat Pembilang Lebih Kecil",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\frac{5x + 3}{2x^2 - 4x + 7}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{5}{2}$",
      "$2$",
      "$5$",
      "$\\infty$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika derajat polinomial pembilang ($n = 1$) lebih kecil daripada derajat polinomial penyebut ($m = 2$), maka nilai limit menuju tak hingga bernilai $0$ karena penyebut tumbuh jauh lebih cepat dibandingkan pembilang.",
      "steps": "1. Bagilah pembilang dan penyebut dengan $x^2$ (pangkat tertinggi penyebut):\n$$\\lim_{x \\to \\infty} \\frac{\\frac{5x}{x^2} + \\frac{3}{x^2}}{\\frac{2x^2}{x^2} - \\frac{4x}{x^2} + \\frac{7}{x^2}} = \\lim_{x \\to \\infty} \\frac{\\frac{5}{x} + \\frac{3}{x^2}}{2 - \\frac{4}{x} + \\frac{7}{x^2}}$$\n2. Masukkan nilai limit saat $x \\to \\infty$:\n$$= \\frac{0 + 0}{2 - 0 + 0} = \\frac{0}{2} = 0$$\n3. Jadi, nilai limitnya adalah $0$ (pilihan A).",
      "pitfalls": "Mengambil rasio koefisien $\\frac{5}{2}$ tanpa memperhatikan bahwa pangkat dari kedua variabel berbeda ($x$ berbanding $x^2$)."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-takhingga-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Rasional dengan Derajat Sama",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\frac{(2x + 1)(3x - 2)}{x^2 + 5x + 1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$5$",
      "$6$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Ketika derajat tertinggi pembilang sama dengan penyebut ($n = m = 2$), nilai limit menuju tak hingga adalah perbandingan koefisien suku berpangkat tertinggi dari pembilang dan penyebut.",
      "steps": "1. Jabarkan perkalian pada pembilang:\n$$(2x + 1)(3x - 2) = 6x^2 - 4x + 3x - 2 = 6x^2 - x - 2$$\n2. Tuliskan bentuk limit pecahan rasionalnya:\n$$\\lim_{x \\to \\infty} \\frac{6x^2 - x - 2}{x^2 + 5x + 1}$$\n3. Karena derajat pembilang dan penyebut sama-sama 2, perbandingan koefisien pangkat tertingginya adalah:\n$$\\frac{6}{1} = 6$$\n4. Jadi, nilai limit tersebut adalah $6$ (pilihan E).",
      "pitfalls": "Hanya mengalikan konstanta $1 \\times (-2) = -2$ atau lupa mengalikan koefisien $2 \\times 3 = 6$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-takhingga-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Selisih Dua Bentuk Akar Linear Sederhana",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{x + 4} - \\sqrt{x})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$4$",
      "$\\infty$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk tak tentu $\\infty - \\infty$ yang memuat bentuk akar diubah menjadi bentuk pecahan dengan mengalikan bentuk sekawannya, yaitu $(\\sqrt{x + 4} + \\sqrt{x})$.",
      "steps": "1. Kalikan dengan bentuk sekawan dibagi bentuk sekawan:\n$$\\lim_{x \\to \\infty} \\frac{(\\sqrt{x + 4} - \\sqrt{x})(\\sqrt{x + 4} + \\sqrt{x})}{\\sqrt{x + 4} + \\sqrt{x}}$$\n2. Sederhanakan pembilang:\n$$(\\sqrt{x + 4})^2 - (\\sqrt{x})^2 = (x + 4) - x = 4$$\n3. Tuliskan limit pecahan:\n$$\\lim_{x \\to \\infty} \\frac{4}{\\sqrt{x + 4} + \\sqrt{x}}$$\n4. Saat $x \\to \\infty$, penyebut membesar menuju $\\infty$ sedangkan pembilang tetap bernilai 4:\n$$\\frac{4}{\\infty} = 0$$\n5. Jadi, nilai limit tersebut adalah $0$ (pilihan A).",
      "pitfalls": "Menyimpulkan $\\sqrt{x+4} - \\sqrt{x} = \\sqrt{4} = 2$, yang merupakan kesalahan umum manipulasi bentuk akar aljabar."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-takhingga-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Rasional dengan Bentuk Akar pada Penyebut",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\frac{3x}{\\sqrt{4x^2 + 5}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{3}{4}$",
      "$1$",
      "$\\frac{3}{2}$",
      "$\\infty$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Untuk $x > 0$ saat $x \\to \\infty$, suku $x$ dapat dimasukkan ke dalam bentuk akar sebagai $\\sqrt{x^2}$. Bagi pembilang dan penyebut dengan $x$ untuk mencari nilai asimtotik fungsi.",
      "steps": "1. Bagi pembilang dengan $x$ dan penyebut dengan $\\sqrt{x^2}$:\n$$\\lim_{x \\to \\infty} \\frac{\\frac{3x}{x}}{\\sqrt{\\frac{4x^2}{x^2} + \\frac{5}{x^2}}} = \\lim_{x \\to \\infty} \\frac{3}{\\sqrt{4 + \\frac{5}{x^2}}}$$\n2. Substitusikan $x \\to \\infty$ di mana $\\frac{5}{x^2} \\to 0$:\n$$= \\frac{3}{\\sqrt{4 + 0}} = \\frac{3}{\\sqrt{4}} = \\frac{3}{2}$$\n3. Jadi, nilai limit tersebut adalah $\\frac{3}{2}$ (pilihan D).",
      "pitfalls": "Lupa menarik akar dari koefisien 4 di penyebut sehingga menghasilkan $\\frac{3}{4}$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-takhingga-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Tak Hingga Selisih Bentuk Akar Kuadrat",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{9x^2 + 12x - 5} - 3x + 1\\right)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk selisih $\\sqrt{ax^2 + bx + c} - (px + q)$ diubah menjadi $\\sqrt{ax^2 + bx + c} - \\sqrt{(px + q)^2}$. Jika koefisien kuadratnya sama ($a = p^2$), rumus praktis nilai limitnya adalah $L = \\frac{b - \\text{koefisien } x \\text{ bentuk kedua}}{2\\sqrt{a}}$.",
      "steps": "1. Ubah suku linier ke dalam bentuk kurung bertanda minus:\n$$-3x + 1 = -(3x - 1)$$\n2. Kuadratkan dan masukkan ke dalam bentuk akar:\n$$(3x - 1) = \\sqrt{(3x - 1)^2} = \\sqrt{9x^2 - 6x + 1}$$\n3. Tuliskan limit lengkapnya:\n$$\\lim_{x \\to \\infty} \\left(\\sqrt{9x^2 + 12x - 5} - \\sqrt{9x^2 - 6x + 1}\\right)$$\n4. Identifikasi nilai koefisien:\n$$a = 9, \\quad b = 12, \\quad p = -6$$\n5. Terapkan rumus selisih dua akar:\n$$L = \\frac{b - p}{2\\sqrt{a}} = \\frac{12 - (-6)}{2\\sqrt{9}} = \\frac{12 + 6}{2(3)} = \\frac{18}{6} = 3$$\n6. Jadi, nilai limit tersebut adalah $3$ (pilihan C).",
      "pitfalls": "Lupa mengubah tanda positif $+1$ saat memfaktorkan tanda minus: $-(3x - 1)$, bukan $-(3x + 1)$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-takhingga-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Menuju Negatif Tak Hingga",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 - 6x + 2}}{2x + 5}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{3}{2}$",
      "$-\\frac{9}{2}$",
      "$0$",
      "$\\frac{3}{2}$",
      "$\\frac{9}{2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perhatikan bahwa untuk $x < 0$ saat $x \\to -\\infty$, berlaku $\\sqrt{x^2} = |x| = -x$, sehingga $x = -\\sqrt{x^2}$. Hal ini menyebabkan faktor pembuat tanda minus keluar saat membagi bentuk akar dengan $x$.",
      "steps": "1. Bagi pembilang dan penyebut dengan $x$ (karena $x < 0$, maka $x = -\\sqrt{x^2}$):\n$$\\frac{\\sqrt{9x^2 - 6x + 2}}{x} = \\frac{\\sqrt{9x^2 - 6x + 2}}{-\\sqrt{x^2}} = -\\sqrt{\\frac{9x^2}{x^2} - \\frac{6x}{x^2} + \\frac{2}{x^2}} = -\\sqrt{9 - \\frac{6}{x} + \\frac{2}{x^2}}$$\n2. Bagi suku penyebut dengan $x$:\n$$\\frac{2x + 5}{x} = 2 + \\frac{5}{x}$$\n3. Evaluasi limit saat $x \\to -\\infty$:\n$$\\lim_{x \\to -\\infty} \\frac{-\\sqrt{9 - \\frac{6}{x} + \\frac{2}{x^2}}}{2 + \\frac{5}{x}} = \\frac{-\\sqrt{9 - 0 + 0}}{2 + 0} = \\frac{-3}{2} = -\\frac{3}{2}$$\n4. Jadi, nilai limit tersebut adalah $-\\frac{3}{2}$ (pilihan A).",
      "pitfalls": "Lupa bahwa $\\sqrt{x^2} = -x$ untuk $x < 0$, sehingga menghasilkan nilai positif $+\\frac{3}{2}$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-takhingga-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Tak Hingga Tiga Bentuk Akar",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 6x} - 2\\sqrt{x^2 + x} + \\sqrt{x^2 - 2x}\\right)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$0$",
      "$1$",
      "$2$",
      "$\\frac{5}{2}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pecah suku tengah $-2\\sqrt{x^2 + x}$ menjadi $-\\sqrt{x^2 + x} - \\sqrt{x^2 + x}$, kemudian kelompokkan masing-masing dengan suku pertama dan suku ketiga agar dapat diselesaikan menggunakan rumus selisih dua akar kuadrat.",
      "steps": "1. Pisahkan dan kelompokkan suku-suku limit:\n$$\\lim_{x \\to \\infty} \\left[\\left(\\sqrt{x^2 + 6x} - \\sqrt{x^2 + x}\\right) + \\left(\\sqrt{x^2 - 2x} - \\sqrt{x^2 + x}\\right)\\right]$$\n2. Hitung bagian pertama menggunakan rumus $\\frac{b - p}{2\\sqrt{a}}$:\n$$L_1 = \\frac{6 - 1}{2\\sqrt{1}} = \\frac{5}{2}$$\n3. Hitung bagian kedua:\n$$L_2 = \\frac{-2 - 1}{2\\sqrt{1}} = \\frac{-3}{2}$$\n4. Jumlahkan kedua hasil limit:\n$$L = L_1 + L_2 = \\frac{5}{2} + \\left(-\\frac{3}{2}\\right) = \\frac{2}{2} = 1$$\n5. Jadi, nilai limit tersebut adalah $1$ (pilihan C).",
      "pitfalls": "Mencoba mengalikan ketiga bentuk akar sekaligus dengan sekawan panjang yang berakibat pada kerumitan aljabar tak berujung."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-takhingga-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Menentukan Parameter dari Nilai Limit Tak Hingga",
    "difficulty": "sedang",
    "statement": "Jika diketahui $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + kx + 4} - (x - 2)\\right) = 5$, maka nilai dari konstanta $k$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$4$",
      "$6$",
      "$8$",
      "$10$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk $(x - 2)$ diubah menjadi bentuk akar $\\sqrt{(x - 2)^2} = \\sqrt{x^2 - 4x + 4}$. Samakan hasil rumus limit selisih akar $\\frac{b - p}{2\\sqrt{a}}$ dengan nilai limit yang diberikan untuk mencari parameter $k$.",
      "steps": "1. Nyatakan ke dalam bentuk selisih dua akar kuadrat:\n$$\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + kx + 4} - \\sqrt{x^2 - 4x + 4}\\right) = 5$$\n2. Identifikasi parameter:\n$$a = 1, \\quad b = k, \\quad p = -4$$\n3. Terapkan rumus limit:\n$$L = \\frac{b - p}{2\\sqrt{a}} = \\frac{k - (-4)}{2\\sqrt{1}} = \\frac{k + 4}{2}$$\n4. Selesaikan persamaan linear untuk $k$:\n$$\\frac{k + 4}{2} = 5 \\implies k + 4 = 10 \\implies k = 6$$\n5. Jadi, nilai konstanta $k$ adalah $6$ (pilihan C).",
      "pitfalls": "Lupa bahwa $(-2)^2$ menghasilkan tanda negatif pada suku tengah $-4x$, sehingga salah menuliskan tanda $p$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-takhingga-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-takhingga",
    "category": "Limit Tak Hingga Rasional Selisih Bentuk Akar",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 2x} - x}{\\sqrt{4x^2 + x} - 2x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pembilang dan penyebut masing-masing berbentuk tak tentu $\\infty - \\infty$. Kita dapat menyelesaikan nilai limit pembilang dan nilai limit penyebut secara terpisah dengan rumus selisih akar.",
      "steps": "1. Evaluasi limit pada bagian pembilang:\n$$L_{\\text{atas}} = \\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 2x} - \\sqrt{x^2}\\right) = \\frac{2 - 0}{2\\sqrt{1}} = \\frac{2}{2} = 1$$\n2. Evaluasi limit pada bagian penyebut:\n$$L_{\\text{bawah}} = \\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + x} - \\sqrt{4x^2}\\right) = \\frac{1 - 0}{2\\sqrt{4}} = \\frac{1}{2(2)} = \\frac{1}{4}$$\n3. Hitung hasil bagi limit pembilang dengan penyebut:\n$$L = \\frac{L_{\\text{atas}}}{L_{\\text{bawah}}} = \\frac{1}{\\frac{1}{4}} = 1 \\times 4 = 4$$\n4. Jadi, nilai limit tersebut adalah $4$ (pilihan C).",
      "pitfalls": "Membagi pembilang dan penyebut dengan $x$ tanpa mengalikan bentuk sekawan terlebih dahulu, yang menghasilkan bentuk tak tentu $\\frac{0}{0}$."
    },
    "subTopicSlug": "limit-menuju-tak-hingga",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Menuju Tak Hingga",
    "subTopic": "Limit Menuju Tak Hingga",
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
