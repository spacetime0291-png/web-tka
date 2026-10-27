/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Pertidaksamaan Nilai Mutlak (fun-mutlak-dasar-pertidaksamaan)
 * Slug: pertidaksamaan-nilai-mutlak
 * Indikator: Sifat penyelesaian pertidaksamaan nilai mutlak (|f(x)| < a dan |f(x)| > a).
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-pertidaksamaan";
  const subTopicSlug = "pertidaksamaan-nilai-mutlak";
  const questions = [
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Dasar Kurang Dari",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari pertidaksamaan nilai mutlak $|x| < 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -4 \\text{ atau } x > 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x < 4\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat dasar pertidaksamaan nilai mutlak menyatakan bahwa untuk $a > 0$, bentuk $|x| < a$ ekuivalen dengan rentang $-a < x < a$.",
      "steps": "1. Terapkan sifat pertidaksamaan kurang dari dengan $a = 4$:\n$$|x| < 4 \\iff -4 < x < 4$$\n2. Himpunan penyelesaiannya dituliskan sebagai:\n$$HP = \\{x \\in \\mathbb{R} \\mid -4 < x < 4\\}$$\n3. Jadi, pilihan yang benar adalah pilihan A.",
      "pitfalls": "Tertukar dengan sifat lebih dari ($x < -4$ atau $x > 4$) atau menyertakan tanda sama dengan."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Sifat dasar pertidaksamaan nilai mutlak menyatakan bahwa untuk $a > 0$, bentuk $|x| < a$ ekuivalen dengan rentang $-a < x < a$. **Tips:** Tertukar dengan sifat lebih dari ($x < -4$ atau $x > 4$) atau menyertakan tanda sama dengan."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Linier Kurang Dari Sama Dengan",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|x - 2| \\le 3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -5 \\le x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -1 \\text{ atau } x \\ge 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 1 \\le x \\le 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk $|f(x)| \\le a$ ekuivalen dengan pertidaksamaan ganda $-a \\le f(x) \\le a$.",
      "steps": "1. Buka tanda nilai mutlak menjadi pertidaksamaan ganda:\n$$-3 \\le x - 2 \\le 3$$\n2. Tambahkan semua ruas dengan 2:\n$$-3 + 2 \\le x \\le 3 + 2$$\n$$-1 \\le x \\le 5$$\n3. Himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 5\\}$.\n4. Jadi, jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Lupa menambahkan 2 pada batas kiri sehingga menghasilkan $-3 \\le x \\le 5$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk $|f(x)| \\le a$ ekuivalen dengan pertidaksamaan ganda $-a \\le f(x) \\le a$. **Tips:** Lupa menambahkan 2 pada batas kiri sehingga menghasilkan $-3 \\le x \\le 5$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Dasar Lebih Dari",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari pertidaksamaan nilai mutlak $|x| > 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -5 < x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -5 \\text{ atau } x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -5 \\text{ atau } x \\ge 5\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk $a > 0$, bentuk $|x| > a$ ekuivalen dengan gabungan dua daerah terpisah: $x < -a$ atau $x > a$.",
      "steps": "1. Terapkan sifat pertidaksamaan lebih dari dengan $a = 5$:\n$$|x| > 5 \\iff x < -5 \\quad \\text{atau} \\quad x > 5$$\n2. Himpunan penyelesaiannya dituliskan sebagai:\n$$HP = \\{x \\in \\mathbb{R} \\mid x < -5 \\text{ atau } x > 5\\}$$\n3. Jadi, pilihan yang benar adalah pilihan B.",
      "pitfalls": "Tertukar dengan bentuk interval terbuka antara dua bilangan $-5 < x < 5$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Untuk $a > 0$, bentuk $|x| > a$ ekuivalen dengan gabungan dua daerah terpisah: $x < -a$ atau $x > a$. **Tips:** Tertukar dengan bentuk interval terbuka antara dua bilangan $-5 < x < 5$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak dengan Koefisien Variabel",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|2x - 1| < 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -2 \\text{ atau } x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 6\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan sifat $-a < 2x - 1 < a$, lalu tambahkan 1 dan bagi 2 pada setiap ruas.",
      "steps": "1. Uraikan bentuk pertidaksamaan mutlak:\n$$-5 < 2x - 1 < 5$$\n2. Tambahkan 1 pada ketiga ruas:\n$$-5 + 1 < 2x < 5 + 1$$\n$$-4 < 2x < 6$$\n3. Bagi ketiga ruas dengan 2:\n$$-2 < x < 3$$\n4. Himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 < x < 3\\}$.\n5. Jadi, jawaban yang benar adalah pilihan A.",
      "pitfalls": "Lupa membagi dengan koefisien 2 sehingga berhenti di rentang $-4 < x < 6$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan sifat $-a < 2x - 1 < a$, lalu tambahkan 1 dan bagi 2 pada setiap ruas. **Tips:** Lupa membagi dengan koefisien 2 sehingga berhenti di rentang $-4 < x < 6$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Lebih Dari Sama Dengan",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|x + 3| \\ge 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -7 \\le x \\le 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -7 \\text{ atau } x \\ge 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -7 \\text{ atau } x > 1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -1 \\text{ atau } x \\ge 7\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 7\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk $|f(x)| \\ge a$ ekuivalen dengan $f(x) \\le -a$ atau $f(x) \\ge a$.",
      "steps": "1. Pecah menjadi dua cabang pertidaksamaan:\n- Cabang 1: $x + 3 \\le -4$\n$$x \\le -4 - 3 \\implies x \\le -7$$\n- Cabang 2: $x + 3 \\ge 4$\n$$x \\ge 4 - 3 \\implies x \\ge 1$$\n2. Gabungkan kedua daerah solusi:\n$$HP = \\{x \\in \\mathbb{R} \\mid x \\le -7 \\text{ atau } x \\ge 1\\}$$\n3. Jadi, pilihan yang benar adalah pilihan B.",
      "pitfalls": "Tertukar tanda menjadi rentang tertutup $-7 \\le x \\le 1$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk $|f(x)| \\ge a$ ekuivalen dengan $f(x) \\le -a$ atau $f(x) \\ge a$. **Tips:** Tertukar tanda menjadi rentang tertutup $-7 \\le x \\le 1$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Dua Ruas Kurang Dari Sama Dengan",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|2x + 3| \\le |x + 6|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -9 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -9 \\text{ atau } x \\ge 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pertidaksamaan bentuk $|f(x)| \\le |g(x)|$ dapat diselesaikan dengan memfaktorkan selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) \\le 0$.",
      "steps": "1. Kuadratkan kedua ruas persamaan:\n$$(2x + 3)^2 \\le (x + 6)^2$$\n$$(2x + 3)^2 - (x + 6)^2 \\le 0$$\n2. Terapkan identitas selisih kuadrat $a^2 - b^2 = (a - b)(a + b)$:\n$$[(2x + 3) - (x + 6)][(2x + 3) + (x + 6)] \\le 0$$\n$$(x - 3)(3x + 9) \\le 0$$\n$$3(x - 3)(x + 3) \\le 0$$\n3. Bagi kedua ruas dengan 3:\n$$(x - 3)(x + 3) \\le 0$$\n4. Daerah penyelesaian $\\le 0$ terletak di antara kedua akar pembuat nol:\n$$-3 \\le x \\le 3$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$ (pilihan A).",
      "pitfalls": "Lupa mendistribusikan tanda minus pada $(x + 6)$ sehingga salah menghitung faktor $(x - 3)$ menjadi $(x + 9)$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Pertidaksamaan bentuk $|f(x)| \\le |g(x)|$ dapat diselesaikan dengan memfaktorkan selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) \\le 0$. **Tips:** Lupa mendistribusikan tanda minus pada $(x + 6)$ sehingga salah menghitung faktor $(x - 3)$ menjadi $(x + 9)$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Dua Ruas Lebih Dari",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|3x - 2| > |x + 4|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -\\frac{1}{2} < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -\\frac{1}{2} \\text{ atau } x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x > \\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < \\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan pengkuadratan kedua ruas dan faktorisasi selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) > 0$.",
      "steps": "1. Ubah ke bentuk selisih kuadrat:\n$$(3x - 2)^2 - (x + 4)^2 > 0$$\n$$[(3x - 2) - (x + 4)][(3x - 2) + (x + 4)] > 0$$\n$$(2x - 6)(4x + 2) > 0$$\n2. Keluarkan faktor persekutuan numerik:\n$$2(x - 3) \\cdot 2(2x + 1) > 0$$\n$$4(x - 3)(2x + 1) > 0$$\n3. Bagi kedua ruas dengan 4:\n$$(x - 3)(2x + 1) > 0$$\n4. Pembuat nol: $x = 3$ dan $x = -\\frac{1}{2}$.\n5. Karena tanda pertidaksamaan adalah $> 0$, maka daerah penyelesaian berada di luar interval akar:\n$$x < -\\frac{1}{2} \\quad \\text{atau} \\quad x > 3$$\n6. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid x < -\\frac{1}{2} \\text{ atau } x > 3\\}$ (pilihan B).",
      "pitfalls": "Memilih daerah di antara dua akar $-\\frac{1}{2} < x < 3$ yang merupakan penyelesaian jika tandanya adalah $< 0$."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan pengkuadratan kedua ruas dan faktorisasi selisih kuadrat: $(f(x) - g(x))(f(x) + g(x)) > 0$. **Tips:** Memilih daerah di antara dua akar $-\\frac{1}{2} < x < 3$ yang merupakan penyelesaian jika tandanya adalah $< 0$."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Dua Batas (Double Bound)",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $1 < |x - 2| \\le 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x < 1 \\text{ atau } 3 < x \\le 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 1 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 < x < 1 \\text{ atau } 3 < x < 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 1 \\text{ atau } x > 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pertidaksamaan $a < |u| \\le b$ dipecah menjadi sistem dua kondisi yang harus dipenuhi secara bersamaan: $|u| \\le b$ diiriskan dengan $|u| > a$.",
      "steps": "1. Selesaikan batas atas $|x - 2| \\le 4$:\n$$-4 \\le x - 2 \\le 4$$\n$$-2 \\le x \\le 6$$\n2. Selesaikan batas bawah $|x - 2| > 1$:\n$$x - 2 < -1 \\implies x < 1$$\n$$x - 2 > 1 \\implies x > 3$$\n3. Iriskan kedua daerah penyelesaian:\n$$[-2, 6] \\cap ((-\\infty, 1) \\cup (3, \\infty))$$\n4. Diperoleh dua interval gabungan:\n$$-2 \\le x < 1 \\quad \\text{atau} \\quad 3 < x \\le 6$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 \\le x < 1 \\text{ atau } 3 < x \\le 6\\}$ (pilihan A).",
      "pitfalls": "Hanya menyelesaikan batas atas $|x - 2| \\le 4$ dan mengabaikan pembatasan dari batas bawah."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Pertidaksamaan $a < |u| \\le b$ dipecah menjadi sistem dua kondisi yang harus dipenuhi secara bersamaan: $|u| \\le b$ diiriskan dengan $|u| > a$. **Tips:** Hanya menyelesaikan batas atas $|x - 2| \\le 4$ dan mengabaikan pembatasan dari batas bawah."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Kuadrat Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan $|x - 1|^2 - 2|x - 1| - 3 \\le 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\le x \\le 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -2 \\text{ atau } x \\ge 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan pemisalan $u = |x - 1| \\ge 0$. Selesaikan pertidaksamaan kuadrat dalam $u$, kemudian kembalikan ke variabel $x$.",
      "steps": "1. Misalkan $u = |x - 1|$ dengan syarat $u \\ge 0$:\n$$u^2 - 2u - 3 \\le 0$$\n2. Faktorkan pertidaksamaan kuadrat:\n$$(u - 3)(u + 1) \\le 0$$\n$$-1 \\le u \\le 3$$\n3. Karena $u = |x - 1| \\ge 0$ selalu benar untuk batas bawah $-1$, maka kondisi menyusut menjadi:\n$$0 \\le |x - 1| \\le 3$$\n4. Selesaikan pertidaksamaan mutlak $|x - 1| \\le 3$:\n$$-3 \\le x - 1 \\le 3$$\n$$-2 \\le x \\le 4$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -2 \\le x \\le 4\\}$ (pilihan A).",
      "pitfalls": "Membuka nilai mutlak sebelum menyelesaikan pertidaksamaan kuadrat yang membuat proses perhitungan sangat rumit."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan pemisalan $u = |x - 1| \\ge 0$. Selesaikan pertidaksamaan kuadrat dalam $u$, kemudian kembalikan ke variabel $x$. **Tips:** Membuka nilai mutlak sebelum menyelesaikan pertidaksamaan kuadrat yang membuat proses perhitungan sangat rumit."
  },
  {
    "id": "fun-mutlak-dasar-pertidaksamaan-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Pecahan Memuat Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan pecahan $\\frac{|x + 1|}{x - 2} < 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 2 \\text{ dan } x \\neq -1\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 2\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pembilang memuat nilai mutlak $|x + 1| \\ge 0$. Agar pecahan bernilai negatif tegas ($< 0$), penyebut harus bernilai negatif dan pembilang tidak boleh bernilai nol.",
      "steps": "1. Perhatikan sifat nilai mutlak pada pembilang: $|x + 1| \\ge 0$.\n2. Jika $x = -1$, maka pembilang bernilai 0, sehingga $\\frac{0}{-3} = 0$, yang tidak memenuhi pertidaksamaan ketat $< 0$. Maka $x \\neq -1$.\n3. Untuk $x \\neq -1$, pembilang selalu bernilai positif tegas ($|x + 1| > 0$).\n4. Pecahan bernilai negatif jika pembilang positif dibagi penyebut negatif:\n$$x - 2 < 0 \\implies x < 2$$\n5. Gabungkan syarat penyebut negatif dan $x \\neq -1$:\n$$x < 2 \\quad \\text{dan} \\quad x \\neq -1$$\n6. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid x < 2 \\text{ dan } x \\neq -1\\}$ (pilihan B).",
      "pitfalls": "Lupa mengecualikan $x = -1$ sehingga salah memilih $x < 2$ (pilihan A)."
    },
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Pembilang memuat nilai mutlak $|x + 1| \\ge 0$. Agar pecahan bernilai negatif tegas ($< 0$), penyebut harus bernilai negatif dan pembilang tidak boleh bernilai nol. **Tips:** Lupa mengecualikan $x = -1$ sehingga salah memilih $x < 2$ ()."
  },
  {
    "id": "mudah-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak Satu Variabel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Himpunan semua nilai real $x$ yang memenuhi pertidaksamaan nilai mutlak $|2x - 3| < 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2 < x < 5$",
      "$-5 < x < 2$",
      "$x < -2 \\text{ atau } x > 5$",
      "$-2 \\le x \\le 5$",
      "$-5 < x < 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Dasar Pertidaksamaan Nilai Mutlak:</strong><br>\n          $$|u| < k \\iff -k < u < k \\quad (k > 0)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Terapkan sifat nilai mutlak:\n            $$-7 < 2x - 3 < 7$$\n          </li>\n          <li>Tambahkan 3 pada seluruh ruas:\n            $$-7 + 3 < 2x < 7 + 3 \\implies -4 < 2x < 10$$\n          </li>\n          <li>Bagi dengan 2:\n            $$-2 < x < 5$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Tanda pertidaksamaan pada soal adalah $<$ murni (tanpa sama dengan), sehingga batas penyelesaian juga tidak memuat tanda sama dengan.\n        </div>\n      "
    },
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "hint": "Sifat Dasar Pertidaksamaan Nilai Mutlak: $$|u| < k \\iff -k < u < k \\quad (k > 0)$$."
  },
  {
    "id": "sedang-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subTopicId": "fun-mutlak-dasar-pertidaksamaan",
    "category": "Pertidaksamaan Nilai Mutlak (Fondasi)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Himpunan semua nilai $x$ real yang memenuhi pertidaksamaan $|2x - 1| \\le |x + 4|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1 \\le x \\le 5$",
      "$-5 \\le x \\le 1$",
      "$x \\le -1$ atau $x \\ge 5$",
      "$1 \\le x \\le 5$",
      "$-3 \\le x \\le 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Metode Kuadrat Kedua Ruas $|A| \\le |B|$:</strong><br>\n          Karena kedua ruas non-negatif, kuadratkan kedua ruas:<br>\n          $$A^2 \\le B^2 \\iff A^2 - B^2 \\le 0 \\iff (A - B)(A + B) \\le 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dengan $A = 2x - 1$ dan $B = x + 4$:\n            $$( (2x - 1) - (x + 4) )( (2x - 1) + (x + 4) ) \\le 0$$\n          </li>\n          <li>Sederhanakan masing-masing faktor aljabar:\n            $$(x - 5)(3x + 3) \\le 0 \\implies 3(x - 5)(x + 1) \\le 0$$\n          </li>\n          <li>Bagi dengan 3:\n            $$(x + 1)(x - 5) \\le 0$$\n          </li>\n          <li>Pembuat nol adalah $x = -1$ dan $x = 5$. Karena tanda pertidaksamaan $\\le 0$, daerah penyelesaian berada di antara kedua nilai pembuat nol:\n            $$-1 \\le x \\le 5$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hati-hati dengan tanda kurung saat mengurangkan $(2x - 1) - (x + 4) = 2x - 1 - x - 4 = x - 5$. Kesalahan tanda $- (x+4)$ menjadi $-x + 4$ akan menghasilkan titik uji yang keliru.\n        </div>\n      "
    },
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Pertidaksamaan Nilai Mutlak",
    "subTopic": "Pertidaksamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicSlug": "pertidaksamaan-nilai-mutlak",
    "hint": "Metode Kuadrat Kedua Ruas $|A| \\le |B|$: Karena kedua ruas non-negatif, kuadratkan kedua ruas: $$A^2 \\le B^2 \\iff A^2 - B^2 \\le 0 \\iff (A - B)(A + B) \\le 0$$."
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
