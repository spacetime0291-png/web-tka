/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Syarat Fungsi Bentuk Akar (fun-mutlak-dasar-akar)
 * Slug: syarat-fungsi-bentuk-akar
 * Indikator: Syarat terdefinisi fungsi irasional bentuk akar (bilangan dalam akar >= 0).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-akar";
  const subTopicSlug = "syarat-fungsi-bentuk-akar";
  const questions = [
  {
    "id": "fun-mutlak-dasar-akar-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Syarat Terdefinisi Bentuk Akar Sederhana",
    "difficulty": "mudah",
    "statement": "Fungsi $f(x) = \\sqrt{x - 4}$ terdefinisi pada himpunan bilangan real jika nilai $x$ memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x > 4$",
      "$x \\ge 4$",
      "$x \\le 4$",
      "$x < 4$",
      "$x \\neq 4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fungsi irasional bentuk akar kuadrat $\\sqrt{g(x)}$ terdefinisi pada himpunan bilangan real jika bilangan di bawah tanda akar (radikan) bernilai non-negatif ($g(x) \\ge 0$).",
      "steps": "1. Ambil bilangan di dalam tanda akar:\n$$x - 4$$\n2. Terapkan syarat non-negatif:\n$$x - 4 \\ge 0$$\n3. Pindahkan konstanta 4 ke ruas kanan:\n$$x \\ge 4$$\n4. Jadi, fungsi terdefinisi jika $x \\ge 4$ (pilihan B).",
      "pitfalls": "Memilih pertidaksamaan ketat $x > 4$ dan lupa bahwa $\\sqrt{0} = 0$ merupakan bilangan real yang sah."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi irasional bentuk akar kuadrat $\\sqrt{g(x)}$ terdefinisi pada himpunan bilangan real jika bilangan di bawah tanda akar (radikan) bernilai non-negatif ($g(x) \\ge 0$)."
  },
  {
    "id": "fun-mutlak-dasar-akar-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Daerah Asal Alami dengan Koefisien Variabel Negatif",
    "difficulty": "mudah",
    "statement": "Daerah asal alami (domain) dari fungsi $g(x) = \\sqrt{6 - 2x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -3\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat membagi atau mengalikan kedua ruas pertidaksamaan dengan bilangan negatif, tanda arah pertidaksamaan wajib dibalik.",
      "steps": "1. Terapkan syarat radikan non-negatif:\n$$6 - 2x \\ge 0$$\n2. Pindahkan konstanta 6 ke ruas kanan:\n$$-2x \\ge -6$$\n3. Bagi kedua ruas dengan $-2$ dan balikkan tanda pertidaksamaan:\n$$x \\le \\frac{-6}{-2}$$\n$$x \\le 3$$\n4. Daerah asalnya adalah $D_g = \\{x \\in \\mathbb{R} \\mid x \\le 3\\}$.\n5. Jadi, jawaban yang benar adalah pilihan B.",
      "pitfalls": "Lupa membalikkan tanda pertidaksamaan saat membagi dengan $-2$ sehingga menghasilkan $x \\ge 3$."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Saat membagi atau mengalikan kedua ruas pertidaksamaan dengan bilangan negatif, tanda arah pertidaksamaan wajib dibalik. **Tips:** Lupa membalikkan tanda pertidaksamaan saat membagi dengan $-2$ sehingga menghasilkan $x \\ge 3$."
  },
  {
    "id": "fun-mutlak-dasar-akar-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Syarat Bentuk Akar Bernilai Nyata",
    "difficulty": "mudah",
    "statement": "Nilai $x$ yang memenuhi agar bentuk akar $\\sqrt{3x + 9}$ bernilai riil adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\ge -3$",
      "$x \\le -3$",
      "$x \\ge 3$",
      "$x > -3$",
      "$x \\neq -3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk akar berindeks genap bernilai riil jika ekspresi di dalam akar tidak bernilai negatif.",
      "steps": "1. Terapkan syarat numerus akar:\n$$3x + 9 \\ge 0$$\n2. Kurangkan kedua ruas dengan 9:\n$$3x \\ge -9$$\n3. Bagi kedua ruas dengan 3:\n$$x \\ge -3$$\n4. Jadi, nilai $x$ yang memenuhi adalah $x \\ge -3$ (pilihan A).",
      "pitfalls": "Kesalahan tanda operasi saat memindahkan konstanta 9 menjadi $+9$ sehingga memilih $x \\ge 3$."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk akar berindeks genap bernilai riil jika ekspresi di dalam akar tidak bernilai negatif. **Tips:** Kesalahan tanda operasi saat memindahkan konstanta 9 menjadi $+9$ sehingga memilih $x \\ge 3$."
  },
  {
    "id": "fun-mutlak-dasar-akar-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Fungsi Irasional Monomial Negatif",
    "difficulty": "mudah",
    "statement": "Daerah asal dari fungsi $h(x) = \\sqrt{5 - x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Syarat agar fungsi terdefinisi adalah nilai di bawah tanda akar lebih besar dari atau sama dengan nol.",
      "steps": "1. Tuliskan syarat terdefinisi fungsi irasional:\n$$5 - x \\ge 0$$\n2. Pindahkan suku $-x$ ke ruas kanan:\n$$5 \\ge x$$\n3. Bentuk ini ekuivalen dengan:\n$$x \\le 5$$\n4. Daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\le 5\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Menulis $x \\ge 5$ karena mengira tanda pertidaksamaan selalu mengarah ke nilai lebih besar."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Syarat agar fungsi terdefinisi adalah nilai di bawah tanda akar lebih besar dari atau sama dengan nol. **Tips:** Menulis $x \\ge 5$ karena mengira tanda pertidaksamaan selalu mengarah ke nilai lebih besar."
  },
  {
    "id": "fun-mutlak-dasar-akar-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Syarat Terdefinisi Bentuk Akar Kuadratik Linier",
    "difficulty": "mudah",
    "statement": "Bentuk $\\sqrt{2x - 8}$ terdefinisi pada himpunan bilangan real dengan syarat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge -4$",
      "$x \\neq 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Radikan di dalam akar kuadrat harus bernilai lebih besar atau sama dengan nol ($2x - 8 \\ge 0$).",
      "steps": "1. Terapkan syarat radikan non-negatif:\n$$2x - 8 \\ge 0$$\n2. Tambahkan kedua ruas dengan 8:\n$$2x \\ge 8$$\n3. Bagi kedua ruas dengan 2:\n$$x \\ge 4$$\n4. Jadi, syarat terdefinisinya adalah $x \\ge 4$ (pilihan A).",
      "pitfalls": "Lupa membagi dengan 2 sehingga menyimpulkan $x \\ge 8$."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Radikan di dalam akar kuadrat harus bernilai lebih besar atau sama dengan nol ($2x - 8 \\ge 0$). **Tips:** Lupa membagi dengan 2 sehingga menyimpulkan $x \\ge 8$."
  },
  {
    "id": "fun-mutlak-dasar-akar-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Fungsi Akar Kuadrat Terbuka Luar",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi bentuk akar kuadrat $f(x) = \\sqrt{x^2 - 16}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -4 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -4 \\text{ atau } x \\ge 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -4 \\text{ atau } x > 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq \\pm 4\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Radikan di dalam akar kuadrat harus bernilai non-negatif ($x^2 - 16 \\ge 0$). Pertidaksamaan kuadrat diselesaikan melalui pemfaktoran dan uji garis bilangan.",
      "steps": "1. Terapkan syarat terdefinisi bentuk akar:\n$$x^2 - 16 \\ge 0$$\n2. Faktorkan bentuk selisih kuadrat:\n$$(x - 4)(x + 4) \\ge 0$$\n3. Tentukan pembuat nol: $x = -4$ dan $x = 4$.\n4. Uji tanda pada garis bilangan:\n- Untuk $x < -4$ (misal $x = -5$): $(-9)(-1) = +9 > 0$\n- Untuk $-4 < x < 4$ (misal $x = 0$): $(-4)(4) = -16 < 0$\n- Untuk $x > 4$ (misal $x = 5$): $(1)(9) = +9 > 0$\n5. Karena tanda pertidaksamaan adalah $\\ge 0$, maka daerah penyelesaiannya adalah $x \\le -4$ atau $x \\ge 4$.\n6. Jadi, daerah asal fungsi adalah $\\{x \\in \\mathbb{R} \\mid x \\le -4 \\text{ atau } x \\ge 4\\}$ (pilihan B).",
      "pitfalls": "Tertukar dengan daerah interval tertutup $-4 \\le x \\le 4$ yang merupakan penyelesaian untuk $x^2 - 16 \\le 0$."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Radikan di dalam akar kuadrat harus bernilai non-negatif ($x^2 - 16 \\ge 0$). Pertidaksamaan kuadrat diselesaikan melalui pemfaktoran dan uji garis bilangan. **Tips:** Tertukar dengan daerah interval tertutup $-4 \\le x \\le 4$ yang merupakan penyelesaian untuk $x^2 - 16 \\le 0$."
  },
  {
    "id": "fun-mutlak-dasar-akar-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Fungsi Akar Kuadrat Terbuka Dalam",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi $g(x) = \\sqrt{9 - x^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Penyelesaian dari pertidaksamaan kuadrat bertanda koefisien $x^2$ negatif $a - x^2 \\ge 0$ berbentuk interval tertutup $-\\sqrt{a} \\le x \\le \\sqrt{a}$.",
      "steps": "1. Syarat terdefinisi fungsi akar:\n$$9 - x^2 \\ge 0$$\n2. Kalikan kedua ruas dengan $-1$ dan balik tanda pertidaksamaan:\n$$x^2 - 9 \\le 0$$\n3. Faktorkan ruas kiri:\n$$(x - 3)(x + 3) \\le 0$$\n4. Daerah yang memenuhi pertidaksamaan $\\le 0$ berada di antara kedua akar:\n$$-3 \\le x \\le 3$$\n5. Jadi, daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$ (pilihan A).",
      "pitfalls": "Lupa membalik tanda pertidaksamaan saat mengalikan dengan $-1$ sehingga memilih daerah di luar akar $x \\le -3$ atau $x \\ge 3$."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Penyelesaian dari pertidaksamaan kuadrat bertanda koefisien $x^2$ negatif $a - x^2 \\ge 0$ berbentuk interval tertutup $-\\sqrt{a} \\le x \\le \\sqrt{a}$. **Tips:** Lupa membalik tanda pertidaksamaan saat mengalikan dengan $-1$ sehingga memilih daerah di luar akar $x \\le -3$ atau $x \\ge 3$."
  },
  {
    "id": "fun-mutlak-dasar-akar-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Fungsi Bentuk Akar pada Posisi Penyebut",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi pecahan berakar $h(x) = \\frac{1}{\\sqrt{2x - 6}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Jika bentuk akar berada pada posisi penyebut pecahan, radikan harus positif tegas ($> 0$), karena penyebut tidak boleh sama dengan nol dan radikan tidak boleh negatif.",
      "steps": "1. Terapkan gabungan syarat akar ($\\ge 0$) dan syarat penyebut ($\\neq 0$):\n$$2x - 6 > 0$$\n2. Tambahkan kedua ruas dengan 6:\n$$2x > 6$$\n3. Bagi kedua ruas dengan 2:\n$$x > 3$$\n4. Daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x > 3\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Memasukkan tanda sama dengan ($x \\ge 3$) yang menyebabkan penyebut bernilai $\\sqrt{0} = 0$ sehingga fungsi tidak terdefinisi."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Jika bentuk akar berada pada posisi penyebut pecahan, radikan harus positif tegas ($> 0$), karena penyebut tidak boleh sama dengan nol dan radikan tidak boleh negatif."
  },
  {
    "id": "fun-mutlak-dasar-akar-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Fungsi Bentuk Akar Pecahan Rasional",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi irasional pecahan $f(x) = \\sqrt{\\frac{x - 1}{x + 2}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -2 < x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -2 \\text{ atau } x \\ge 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -2 \\text{ atau } x \\ge 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 1\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Syarat radikan pecahan adalah $\\frac{x - 1}{x + 2} \\ge 0$ dengan syarat tambahan penyebut $x + 2 \\neq 0$.",
      "steps": "1. Tentukan pembuat nol pembilang: $x - 1 = 0 \\implies x = 1$ (termasuk solusi, tanda $\\ge$).\n2. Tentukan pembuat nol penyebut: $x + 2 = 0 \\implies x = -2$ (tidak termasuk solusi, karena penyebut $\\neq 0$, sehingga $x \\neq -2$).\n3. Lakukan uji tanda pada garis bilangan:\n- Untuk $x < -2$ (misal $x = -3$): $\\frac{-4}{-1} = +4 > 0$ (memenuhi)\n- Untuk $-2 < x < 1$ (misal $x = 0$): $\\frac{-1}{2} < 0$\n- Untuk $x > 1$ (misal $x = 2$): $\\frac{1}{4} > 0$ (memenuhi)\n4. Daerah penyelesaian adalah $x < -2$ atau $x \\ge 1$.\n5. Jadi, daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x < -2 \\text{ atau } x \\ge 1\\}$ (pilihan B).",
      "pitfalls": "Memasukkan tanda sama dengan pada titik $-2$ ($x \\le -2$) yang membuat penyebut bernilai nol."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Syarat radikan pecahan adalah $\\frac{x - 1}{x + 2} \\ge 0$ dengan syarat tambahan penyebut $x + 2 \\neq 0$. **Tips:** Memasukkan tanda sama dengan pada titik $-2$ ($x \\le -2$) yang membuat penyebut bernilai nol."
  },
  {
    "id": "fun-mutlak-dasar-akar-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-akar",
    "category": "Domain Irisan Dua Bentuk Akar Linier",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi $f(x) = \\sqrt{x - 2} + \\sqrt{7 - x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\ge 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 7\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 \\le x \\le 7\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 2 \\text{ atau } x \\ge 7\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 7\\}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Daerah asal dari jumlahan dua fungsi irasional merupakan irisan dari daerah asal masing-masing suku akar: $D_f = D_1 \\cap D_2$.",
      "steps": "1. Syarat suku akar pertama $\\sqrt{x - 2}$:\n$$x - 2 \\ge 0 \\implies x \\ge 2$$\n2. Syarat suku akar kedua $\\sqrt{7 - x}$:\n$$7 - x \\ge 0 \\implies x \\le 7$$\n3. Cari irisan dari kedua pertidaksamaan:\n$$x \\ge 2 \\quad \\text{dan} \\quad x \\le 7$$\n$$2 \\le x \\le 7$$\n4. Daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid 2 \\le x \\le 7\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Menggabungkan (union) kedua interval alih-alih mengirisnya (intersection)."
    },
    "subTopicSlug": "syarat-fungsi-bentuk-akar",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Bentuk Akar",
    "subTopic": "Syarat Fungsi Bentuk Akar",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Daerah asal dari jumlahan dua fungsi irasional merupakan irisan dari daerah asal masing-masing suku akar: $D_f = D_1 \\cap D_2$. **Tips:** Menggabungkan (union) kedua interval alih-alih mengirisnya (intersection)."
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
