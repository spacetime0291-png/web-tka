/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Kalkulus Limit
 * Bab Kecil: Limit Fungsi (mat-lim-fungsi)
 * Sub-Bab: Limit Fungsi Aljabar (mat-lim-fungsi-aljabar)
 * Slug: limit-fungsi-aljabar
 * Indikator: Limit fungsi aljabar rasional bentuk 0/0 via pemfaktoran dan perkalian sekawan akar.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-lim-fungsi-aljabar";
  const subTopicSlug = "limit-fungsi-aljabar";
  const questions = [
  {
    "id": "mat-lim-fungsi-aljabar-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Substitusi Langsung",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 2} (3x^2 - 5x + 7)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5$",
      "$7$",
      "$9$",
      "$11$",
      "$13$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Fungsi polinomial kontinu pada seluruh domain bilangan real, sehingga nilai limit untuk $x \\to c$ diperoleh melalui substitusi langsung nilai $c$ ke dalam fungsi: $\\lim_{x \\to c} P(x) = P(c)$.",
      "steps": "1. Substitusikan nilai $x = 2$ ke dalam ekspresi fungsi:\n$$3(2)^2 - 5(2) + 7$$\n2. Hitung masing-masing suku:\n$$= 3(4) - 10 + 7$$\n$$= 12 - 10 + 7 = 9$$\n3. Jadi, nilai limit tersebut adalah $9$ (pilihan C).",
      "pitfalls": "Melakukan kesalahan hitung urutan operasi aljabar, seperti mengalikan $3 \\times 2$ baru dikuadratkan."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-aljabar-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Pemfaktoran Selisih Kuadrat",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$3$",
      "$6$",
      "$9$",
      "$\\infty$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Substitusi langsung menghasilkan bentuk tak tentu $\\frac{0}{0}$. Faktorkan pembilang menggunakan rumus selisih dua kuadrat $a^2 - b^2 = (a - b)(a + b)$ untuk mengeliminasi pembuat nol $(x - 3)$.",
      "steps": "1. Evaluasi bentuk limit: substitusi $x = 3$ menghasilkan $\\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (bentuk tak tentu).\n2. Faktorkan pembilang:\n$$x^2 - 9 = (x - 3)(x + 3)$$\n3. Tulis ulang limit dan sederhanakan faktor $(x - 3)$:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3)$$\n4. Substitusikan $x = 3$:\n$$3 + 3 = 6$$\n5. Jadi, nilai limit adalah $6$ (pilihan C).",
      "pitfalls": "Menyimpulkan bahwa hasil limit adalah $0$ atau tak hingga ($\\infty$) saat mendapati bentuk $\\frac{0}{0}$ tanpa melakukan pemfaktoran."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-aljabar-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Pemfaktoran Persamaan Kuadrat",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 4} \\frac{x^2 - 5x + 4}{x - 4}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk tak tentu $\\frac{0}{0}$ pada limit fungsi rasional diselesaikan dengan memfaktorkan bentuk kuadrat pembilang $x^2 - 5x + 4$ menjadi perkalian faktor-faktor linearnya.",
      "steps": "1. Uji substitusi langsung $x = 4$:\n$$\\frac{4^2 - 5(4) + 4}{4 - 4} = \\frac{16 - 20 + 4}{0} = \\frac{0}{0}$$\n2. Faktorkan pembilang $x^2 - 5x + 4 = (x - 4)(x - 1)$.\n3. Sederhanakan bentuk pecahan limit:\n$$\\lim_{x \\to 4} \\frac{(x - 4)(x - 1)}{x - 4} = \\lim_{x \\to 4} (x - 1)$$\n4. Substitusikan $x = 4$:\n$$4 - 1 = 3$$\n5. Jadi, nilai limit tersebut adalah $3$ (pilihan B).",
      "pitfalls": "Salah memfaktorkan persamaan kuadrat, misalnya menjadi $(x - 4)(x + 1)$ yang akan menghasilkan nilai limit $5$."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-aljabar-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit dengan Mengalikan Sekawan Akar",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk tak tentu $\\frac{0}{0}$ yang memuat akar kuadrat dapat diselesaikan dengan memfaktorkan penyebut sebagai selisih kuadrat $x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)$ atau mengalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{x} + 1)$.",
      "steps": "1. Substitusi $x = 1$ menghasilkan bentuk tak tentu $\\frac{\\sqrt{1} - 1}{1 - 1} = \\frac{0}{0}$.\n2. Uraikan penyebut menjadi bentuk selisih kuadrat:\n$$x - 1 = (\\sqrt{x} - 1)(\\sqrt{x} + 1)$$\n3. Tuliskan limit setelah faktor $(\\sqrt{x} - 1)$ disederhanakan:\n$$\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{(\\sqrt{x} - 1)(\\sqrt{x} + 1)} = \\lim_{x \\to 1} \\frac{1}{\\sqrt{x} + 1}$$\n4. Substitusikan $x = 1$:\n$$\\frac{1}{\\sqrt{1} + 1} = \\frac{1}{1 + 1} = \\frac{1}{2}$$\n5. Jadi, nilai limit tersebut adalah $\\frac{1}{2}$ (pilihan C).",
      "pitfalls": "Lupa bahwa $\\sqrt{x} - 1$ saling membagi dengan faktor di penyebut dan meninggalkan angka $1$ di bagian pembilang (bukan $0$)."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-aljabar-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Menuju Tak Hingga Fungsi Rasional",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\frac{6x^2 - 4x + 1}{2x^2 + 5x - 3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$",
      "$\\infty$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Untuk limit menuju tak hingga fungsi rasional $\\frac{P(x)}{Q(x)}$ di mana derajat tertinggi pembilang sama dengan derajat tertinggi penyebut ($n = m$), nilai limitnya sama dengan perbandingan koefisien pangkat tertingginya: $\\frac{a_n}{b_m}$.",
      "steps": "1. Perhatikan bahwa pangkat tertinggi pembilang dan penyebut adalah $x^2$.\n2. Bagi pembilang dan penyebut dengan $x^2$:\n$$\\lim_{x \\to \\infty} \\frac{\\frac{6x^2}{x^2} - \\frac{4x}{x^2} + \\frac{1}{x^2}}{\\frac{2x^2}{x^2} + \\frac{5x}{x^2} - \\frac{3}{x^2}} = \\lim_{x \\to \\infty} \\frac{6 - \\frac{4}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x} - \\frac{3}{x^2}}$$\n3. Karena $\\lim_{x \\to \\infty} \\frac{c}{x^k} = 0$ untuk $k > 0$, maka:\n$$= \\frac{6 - 0 + 0}{2 + 0 - 0} = \\frac{6}{2} = 3$$\n4. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      "pitfalls": "Menghitung seluruh suku polinomial alih-alih berfokus pada koefisien derajat tertinggi."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-lim-fungsi-aljabar-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Bentuk Tak Tentu dengan Perkalian Akar Sekawan Linear",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 2} \\frac{x - 2}{\\sqrt{2x + 5} - 3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$\\frac{3}{2}$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Bentuk tak tentu $\\frac{0}{0}$ yang memuat bentuk irasional di penyebut diatasi dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya, yaitu $(\\sqrt{2x + 5} + 3)$, agar diperoleh selisih kuadrat $(a - b)(a + b) = a^2 - b^2$.",
      "steps": "1. Substitusi $x = 2$ menghasilkan bentuk $\\frac{2 - 2}{\\sqrt{4 + 5} - 3} = \\frac{0}{3 - 3} = \\frac{0}{0}$.\n2. Kalikan pembilang dan penyebut dengan bentuk sekawan penyebut:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(\\sqrt{2x + 5} + 3)}{(\\sqrt{2x + 5} - 3)(\\sqrt{2x + 5} + 3)}$$\n3. Sederhanakan bentuk penyebut:\n$$(\\sqrt{2x + 5})^2 - 3^2 = (2x + 5) - 9 = 2x - 4 = 2(x - 2)$$\n4. Sederhanakan faktor persekutuan $(x - 2)$:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(\\sqrt{2x + 5} + 3)}{2(x - 2)} = \\lim_{x \\to 2} \\frac{\\sqrt{2x + 5} + 3}{2}$$\n5. Substitusikan $x = 2$:\n$$\\frac{\\sqrt{2(2) + 5} + 3}{2} = \\frac{\\sqrt{9} + 3}{2} = \\frac{3 + 3}{2} = 3$$\n6. Jadi, nilai limit tersebut adalah $3$ (pilihan D).",
      "pitfalls": "Lupa memfaktorkan angka 2 dari $(2x - 4)$ sehingga keliru membagi penyebut secara langsung."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-aljabar-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Menuju Tak Hingga Selisih Dua Bentuk Akar Kuadrat",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 8x - 1} - (2x - 3)\\right)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$4$",
      "$5$",
      "$7$",
      "$\\infty$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Ubah suku $(2x - 3)$ menjadi bentuk akar $\\sqrt{(2x - 3)^2} = \\sqrt{4x^2 - 12x + 9}$. Rumus cepat selisih akar kuadrat untuk koefisien $a$ yang sama pada $\\lim_{x \\to \\infty} (\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q})$ adalah $L = \\frac{b - p}{2\\sqrt{a}}$.",
      "steps": "1. Tulis ulang bentuk aljabar ke dalam selisih dua akar:\n$$(2x - 3) = \\sqrt{(2x - 3)^2} = \\sqrt{4x^2 - 12x + 9}$$\n$$\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2 + 8x - 1} - \\sqrt{4x^2 - 12x + 9}\\right)$$\n2. Identifikasi parameter:\n$$a = 4$$\n$$b = 8$$\n$$p = -12$$\n3. Gunakan rumus limit selisih bentuk akar:\n$$L = \\frac{b - p}{2\\sqrt{a}} = \\frac{8 - (-12)}{2\\sqrt{4}} = \\frac{8 + 12}{2(2)} = \\frac{20}{4} = 5$$\n4. Jadi, nilai limit tersebut adalah $5$ (pilihan C).",
      "pitfalls": "Salah mengkuadratkan suku aljabar $(2x - 3)^2$ menjadi $4x^2 - 9$ (lupa suku tengah $-12x$) atau salah memasukkan tanda negatif pada $p = -12$."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-aljabar-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Menentukan Parameter Limit dari Nilai Limit Diketahui",
    "difficulty": "sedang",
    "statement": "Jika diketahui $\\lim_{x \\to 3} \\frac{x^2 + ax + b}{x - 3} = 7$, maka nilai dari $a - b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9$",
      "$11$",
      "$13$",
      "$15$",
      "$17$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Agar limit fungsi rasional dengan penyebut nol saat $x \\to c$ menghasilkan nilai berhingga, pembilang harus memiliki pembuat nol yang sama ($x = c$), sehingga substitusi $x = c$ ke pembilang harus bernilai 0. Kemudian gunakan dalil L'Hopital atau pemfaktoran aljabar.",
      "steps": "1. Karena penyebut $3 - 3 = 0$ dan limit ada ($= 7$), maka pembilang saat $x = 3$ harus nol:\n$$3^2 + a(3) + b = 0 \\implies 9 + 3a + b = 0 \\implies b = -3a - 9$$\n2. Terapkan dalil L'Hopital pada bentuk $\\frac{0}{0}$:\n$$\\lim_{x \\to 3} \\frac{\\frac{d}{dx}(x^2 + ax + b)}{\\frac{d}{dx}(x - 3)} = \\lim_{x \\to 3} \\frac{2x + a}{1} = 2(3) + a = 6 + a$$\n3. Samakan dengan nilai limit yang diketahui:\n$$6 + a = 7 \\implies a = 1$$\n4. Tentukan nilai $b$:\n$$b = -3(1) - 9 = -12$$\n5. Hitung nilai $a - b$:\n$$a - b = 1 - (-12) = 1 + 12 = 13$$\n6. Jadi, nilai $a - b$ adalah $13$ (pilihan C).",
      "pitfalls": "Lupa bahwa $b$ bernilai negatif, sehingga salah menghitung $1 - 12 = -11$ bukan $1 - (-12) = 13$."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-aljabar-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Fungsi Rasional Bentuk Pemfaktoran Derajat Tiga",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 + x - 6}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2$",
      "$\\frac{12}{5}$",
      "$\\frac{8}{3}$",
      "$3$",
      "$\\frac{16}{5}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Faktorkan selisih dua kubik pada pembilang menggunakan rumus aljabar $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ dan faktorkan bentuk kuadrat penyebut untuk mengeliminasi pembuat nol $(x - 2)$.",
      "steps": "1. Uji substitusi langsung $x = 2$ menghasilkan bentuk $\\frac{8 - 8}{4 + 2 - 6} = \\frac{0}{0}$.\n2. Faktorkan pembilang:\n$$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$\n3. Faktorkan penyebut:\n$$x^2 + x - 6 = (x - 2)(x + 3)$$\n4. Sederhanakan faktor $(x - 2)$:\n$$\\lim_{x \\to 2} \\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 3)} = \\lim_{x \\to 2} \\frac{x^2 + 2x + 4}{x + 3}$$\n5. Substitusikan $x = 2$:\n$$\\frac{2^2 + 2(2) + 4}{2 + 3} = \\frac{4 + 4 + 4}{5} = \\frac{12}{5}$$\n6. Jadi, nilai limitnya adalah $\\frac{12}{5}$ (pilihan B).",
      "pitfalls": "Salah menjabarkan rumus selisih kubik, misalnya menganggap $(x^3 - 8) = (x - 2)^3$ atau salah tanda pada suku tengah $(x^2 - 2x + 4)$."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-lim-fungsi-aljabar-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subChapterId": "mat-lim-fungsi",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Selisih Dua Bentuk Akar Kuadrat Rasional",
    "difficulty": "sedang",
    "statement": "Nilai dari $\\lim_{x \\to 0} \\frac{x}{\\sqrt{1 + 3x} - \\sqrt{1 - 2x}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{5}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\frac{5}{2}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk tak tentu $\\frac{0}{0}$ dengan selisih dua akar pada penyebut diselesaikan dengan mengalikan pembilang dan penyebut dengan bentuk sekawannya $(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})$.",
      "steps": "1. Substitusi langsung $x = 0$ menghasilkan $\\frac{0}{\\sqrt{1} - \\sqrt{1}} = \\frac{0}{0}$.\n2. Kalikan sekawan penyebut:\n$$\\lim_{x \\to 0} \\frac{x(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}{(\\sqrt{1 + 3x} - \\sqrt{1 - 2x})(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}$$\n3. Sederhanakan penyebut:\n$$(\\sqrt{1 + 3x})^2 - (\\sqrt{1 - 2x})^2 = (1 + 3x) - (1 - 2x) = 1 + 3x - 1 + 2x = 5x$$\n4. Sederhanakan variabel $x$ pada pembilang dan penyebut:\n$$\\lim_{x \\to 0} \\frac{x(\\sqrt{1 + 3x} + \\sqrt{1 - 2x})}{5x} = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x} + \\sqrt{1 - 2x}}{5}$$\n5. Substitusikan $x = 0$:\n$$\\frac{\\sqrt{1 + 0} + \\sqrt{1 - 0}}{5} = \\frac{1 + 1}{5} = \\frac{2}{5}$$\n6. Jadi, nilai limit tersebut adalah $\\frac{2}{5}$ (pilihan B).",
      "pitfalls": "Keliru saat mengurangkan penyebut: $3x - (-2x) = 5x$, bukan $x$."
    },
    "subTopicSlug": "limit-fungsi-aljabar",
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-06",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Aljabar Pemfaktoran",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai dari limit aljabar $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ (tanpa dalil L'Hôpital) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$3$",
      "$6$",
      "$9$",
      "$\\infty$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Limit Aljabar Bentuk Tak Tentu $\\frac{0}{0}$:</strong><br>\n          Jika substitusi langsung menghasilkan $\\frac{0}{0}$, faktorkan pembilang dan coret faktor pembuat nol $(x - c)$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi $x = 3 \\implies \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (Bentuk tak tentu).</li>\n          <li>Faktorkan selisih kuadrat:\n            $$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$$\n          </li>\n          <li>Eliminasi faktor pembuat nol $(x - 3)$:\n            $$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan langsung menyatakan limit bernilai 0 karena pembilang bernilai 0 saat substitusi awal.\n        </div>\n      "
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-aljabar"
  },
  {
    "id": "sup-mtk-tri-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-lim",
    "subTopicId": "mat-lim-fungsi-aljabar",
    "category": "Limit Aljabar Rasionalisasi Bentuk Akar",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai dari limit aljabar bentuk akar $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ dihitung secara analitis murni tanpa dalil L'Hôpital adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$\\frac{1}{8}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Metode Perkalian Sekawan Akar (Tanpa L'Hôpital):</strong><br>Bentuk tak tentu $\\frac{0}{0}$ diselesaikan dengan mengalikan faktor sekawan $(\\sqrt{x} + 2)$ pada pembilang dan penyebut sehingga faktor pembuat nol $(x - 4)$ dapat dieliminasi.</div>",
      "steps": "<ol><li>Kalikan sekawan: $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$.</li><li>Pembilang menjadi: $(\\sqrt{x})^2 - 2^2 = x - 4$.</li><li>Sederhanakan: $\\lim_{x \\to 4} \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\lim_{x \\to 4} \\frac{1}{\\sqrt{x} + 2}$.</li><li>Substitusi nilai limit $x = 4$: $\\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan instruksi tanpa L'Hôpital atau salah mengalikan faktor sekawan.</div>"
    },
    "bab": "Kalkulus Limit",
    "subBab": "Limit Fungsi Aljabar",
    "subTopic": "Limit Fungsi Aljabar",
    "chapterTitle": "Kalkulus Limit",
    "subChapterId": "mat-lim-fungsi",
    "subTopicSlug": "limit-fungsi-aljabar"
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
