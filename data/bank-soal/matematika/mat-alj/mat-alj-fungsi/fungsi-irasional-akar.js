/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Fungsi Irasional (Bentuk Akar) (mat-alj-fungsi-akar)
 * Slug: fungsi-irasional-akar
 * Indikator: Fungsi aljabar dalam tanda akar f(x) = sqrt(g(x)) dan syarat numerus g(x) >= 0.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-akar";
  const subTopicSlug = "fungsi-irasional-akar";
  const questions = [
  {
    "id": "mat-alj-fungsi-akar-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Syarat Numerus Bentuk Akar",
    "difficulty": "mudah",
    "statement": "Agar fungsi $f(x) = \\sqrt{3x - 12}$ terdefinisi pada himpunan bilangan real, syarat nilai $x$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\geq 4$",
      "$x > 4$",
      "$x \\leq 4$",
      "$x \\geq 12$",
      "$x \\neq 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi irasional $f(x) = \\sqrt{g(x)}$ bernilai real jika dan hanya jika bentuk di dalam tanda akar (radikan) bernilai non-negatif, yaitu $g(x) \\geq 0$.",
      "steps": "1. Terapkan syarat radikan non-negatif:\n$$3x - 12 \\geq 0$$\n2. Selesaikan pertidaksamaan linear:\n$$3x \\geq 12 \\implies x \\geq \\frac{12}{3} \\implies x \\geq 4$$\n3. Jadi syarat nilai $x$ adalah $x \\geq 4$ (pilihan A).",
      "pitfalls": "Lupa menyertakan tanda sama dengan ($geq$ menjadi $>$) atau salah operasi pembagian aljabar."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi irasional $f(x) = \\sqrt{g(x)}$ bernilai real jika dan hanya jika bentuk di dalam tanda akar (radikan) bernilai non-negatif, yaitu $g(x) \\geq 0$. **Tips:** Lupa menyertakan tanda sama dengan ($geq$ menjadi $>$) atau salah operasi pembagian aljabar."
  },
  {
    "id": "mat-alj-fungsi-akar-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Nilai Ekstrem Minimum Fungsi Bentuk Akar",
    "difficulty": "mudah",
    "statement": "Nilai minimum dari fungsi real $f(x) = \\sqrt{x - 2} + 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "2",
      "0",
      "7",
      "3"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Nilai dari akar pangkat dua utama $\\sqrt{u}$ selalu bernilai lebih besar atau sama dengan nol ($\\sqrt{u} \\geq 0$), dengan nilai minimum sama dengan 0 yang tercapai saat $u = 0$.",
      "steps": "1. Syarat daerah asal: $x - 2 \\geq 0 \\implies x \\geq 2$.<br>2. Nilai minimum dari suku bentuk akar $\\sqrt{x - 2}$ adalah 0, tercapai saat $x = 2$.<br>3. Substitusikan nilai minimum ke fungsi $f(x)$:\n$$f_{\\min} = 0 + 5 = 5$$\n4. Jadi nilai minimum fungsi tersebut adalah 5 (pilihan A).",
      "pitfalls": "Terkecoh menjawab nilai absis pembuat nol $x = 2$ alih-alih nilai fungsi minimumnya ($y = 5$)."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Nilai dari akar pangkat dua utama $\\sqrt{u}$ selalu bernilai lebih besar atau sama dengan nol ($\\sqrt{u} \\geq 0$), dengan nilai minimum sama dengan 0 yang tercapai saat $u = 0$."
  },
  {
    "id": "mat-alj-fungsi-akar-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Titik Potong Fungsi Akar dengan Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Titik potong kurva grafik fungsi $f(x) = \\sqrt{2x + 8}$ dengan sumbu-$X$ dan sumbu-$Y$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-4, 0)$ dan $(0, 2\\sqrt{2})$",
      "$(4, 0)$ dan $(0, 2\\sqrt{2})$",
      "$(-4, 0)$ dan $(0, 8)$",
      "$(-8, 0)$ dan $(0, 4)$",
      "$(-4, 0)$ dan $(0, 4)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik potong sumbu-$X$ diperoleh saat $f(x) = 0$, sedangkan titik potong sumbu-$Y$ diperoleh saat $x = 0$.",
      "steps": "1. Titik potong sumbu-$X$ ($y = 0$):\n$$\\sqrt{2x + 8} = 0 \\implies 2x + 8 = 0 \\implies 2x = -8 \\implies x = -4$$\nKoordinat titik potong sumbu-$X$: $(-4, 0)$.<br>2. Titik potong sumbu-$Y$ ($x = 0$):\n$$f(0) = \\sqrt{2(0) + 8} = \\sqrt{8} = 2\\sqrt{2}$$\nKoordinat titik potong sumbu-$Y$: $(0, 2\\sqrt{2})$.<br>3. Jadi titik potong berturut-turut adalah $(-4, 0)$ dan $(0, 2\\sqrt{2})$ (pilihan A).",
      "pitfalls": "Menyederhanakan $\\sqrt{8}$ menjadi $4$ alih-alih $2\\sqrt{2}$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Titik potong sumbu-$X$ diperoleh saat $f(x) = 0$, sedangkan titik potong sumbu-$Y$ diperoleh saat $x = 0$. **Tips:** Menyederhanakan $\\sqrt{8}$ menjadi $4$ alih-alih $2\\sqrt{2}$."
  },
  {
    "id": "mat-alj-fungsi-akar-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Karakteristik Monotonik Fungsi Akar",
    "difficulty": "mudah",
    "statement": "Diberikan fungsi $f(x) = \\sqrt{x + 1}$ untuk $x \\geq -1$. Pernyataan berikut yang benar mengenai karakteristik fungsi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Fungsi monoton naik pada interval $[-1, \\infty)$",
      "Fungsi monoton turun pada interval $[-1, \\infty)$",
      "Fungsi memiliki nilai maksimum di $x = -1$",
      "Grafik simetris terhadap sumbu-Y",
      "Grafik memotong sumbu-X di titik $(1, 0)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi $f(x) = \\sqrt{x - c}$ memiliki turunan pertama $f'(x) = \\frac{1}{2\\sqrt{x - c}} > 0$ untuk seluruh $x > c$, sehingga grafiknya selalu naik secara monoton (*strictly increasing*).",
      "steps": "1. Amati bahwa seiring bertambahnya nilai $x$ dari $-1$ menuju tak hingga, nilai $\\sqrt{x + 1}$ juga terus membesar secara monoton.<br>2. Nilai di titik ujung $x = -1$ adalah $f(-1) = 0$ yang merupakan nilai minimum global (bukan maksimum).<br>3. Titik potong sumbu-$X$ berada pada $(-1, 0)$, bukan $(1, 0)$.<br>4. Jadi karakteristik yang benar adalah fungsi monoton naik pada interval $[-1, \\infty)$ (pilihan A).",
      "pitfalls": "Mengira fungsi akar memiliki titik puncak maksimum."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi $f(x) = \\sqrt{x - c}$ memiliki turunan pertama $f'(x) = \\frac{1}{2\\sqrt{x - c}} > 0$ untuk seluruh $x > c$, sehingga grafiknya selalu naik secara monoton (*strictly increasing*). **Tips:** Mengira fungsi akar memiliki titik puncak maksimum."
  },
  {
    "id": "mat-alj-fungsi-akar-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Domain Fungsi Akar Koefisien Negatif",
    "difficulty": "mudah",
    "statement": "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\sqrt{9 - 3x}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq -3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat fungsi akar real adalah radikan non-negatif. Perhatikan bahwa membagi atau mengalikan pertidaksamaan dengan bilangan negatif akan membalik arah tanda pertidaksamaan.",
      "steps": "1. Terapkan syarat eksistensi akar real:\n$$9 - 3x \\geq 0$$\n2. Pindahkan suku konstanta atau variabel:\n$$-3x \\geq -9$$\n3. Bagi kedua ruas dengan $-3$ dan balik arah tanda pertidaksamaan:\n$$x \\leq \\frac{-9}{-3} \\implies x \\leq 3$$\n4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$ (pilihan A).",
      "pitfalls": "Lupa membalik tanda pertidaksamaan saat membagi dengan $-3$ sehingga keliru memilih $x \\geq 3$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Syarat fungsi akar real adalah radikan non-negatif. Perhatikan bahwa membagi atau mengalikan pertidaksamaan dengan bilangan negatif akan membalik arah tanda pertidaksamaan. **Tips:** Lupa membalik tanda pertidaksamaan saat membagi dengan $-3$ sehingga keliru memilih $x \\geq 3$."
  },
  {
    "id": "mat-alj-fungsi-akar-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Domain Fungsi Akar Campuran Pecahan",
    "difficulty": "sedang",
    "statement": "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\frac{\\sqrt{x^2 - 4}}{x - 3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid (x \\leq -2 \\text{ atau } x \\geq 2) \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -2 \\leq x \\leq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -2 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Daerah asal fungsi pecahan yang memuat bentuk akar di pembilangnya harus memenuhi dua syarat serentak: ekspresi di dalam akar non-negatif ($x^2 - 4 \\geq 0$) dan penyebut tidak sama dengan nol ($x - 3 \\neq 0$).",
      "steps": "1. Syarat bentuk akar real: $x^2 - 4 \\geq 0$.\nFaktorkan: $(x - 2)(x + 2) \\geq 0 \\implies x \\leq -2$ atau $x \\geq 2$.<br>2. Syarat penyebut tidak sama dengan nol:\n$$x - 3 \\neq 0 \\implies x \\neq 3$$<br>3. Gabungkan kedua syarat dalam irisan:\n$$(x \\leq -2 \\text{ atau } x \\geq 2) \\text{ serta } x \\neq 3$$<br>4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid (x \\leq -2 \\text{ atau } x \\geq 2) \\text{ dan } x \\neq 3\\}$ (pilihan A).",
      "pitfalls": "Lupa mengecualikan $x = 3$ dari daerah penyelesaian atau salah menyelesaikan pertidaksamaan kuadrat menjadi $-2 \\leq x \\leq 2$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Daerah asal fungsi pecahan yang memuat bentuk akar di pembilangnya harus memenuhi dua syarat serentak: ekspresi di dalam akar non-negatif ($x^2 - 4 \\geq 0$) dan penyebut tidak sama dengan nol ($x - 3 \\neq 0$)."
  },
  {
    "id": "mat-alj-fungsi-akar-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Range Fungsi Akar dengan Refleksi Vertikal",
    "difficulty": "sedang",
    "statement": "Daerah hasil ($R_f$) dari fungsi real $f(x) = 4 - \\sqrt{2x + 6}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 4\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 0\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq -3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk akar utama selalu bernilai $\\sqrt{u} \\geq 0$. Pengali negatif pada suku akar membalik ketidaksamaan menjadi $-\\sqrt{u} \\leq 0$, sehingga fungsi memiliki nilai maksimum lokal pada titik pembuat nol radikan.",
      "steps": "1. Tentukan batas nilai suku bentuk akar: $\\sqrt{2x + 6} \\geq 0$ untuk seluruh $x \\geq -3$.<br>2. Kalikan dengan $-1$:\n$$-\\sqrt{2x + 6} \\leq 0$$<br>3. Tambahkan 4 pada kedua ruas:\n$$4 - \\sqrt{2x + 6} \\leq 4$$\nNilai maksimum dicapai saat $x = -3$, yaitu $f(-3) = 4 - 0 = 4$.<br>4. Seiring membesarnya nilai $x$, nilai fungsi berkurang tanpa batas ke arah negatif ($-\\infty$).<br>5. Jadi daerah hasilnya adalah $\\{y \\in \\mathbb{R} \\mid y \\leq 4\\}$ (pilihan A).",
      "pitfalls": "Mengabaikan tanda minus di depan akar sehingga keliru menyimpulkan $y \\geq 4$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk akar utama selalu bernilai $\\sqrt{u} \\geq 0$. Pengali negatif pada suku akar membalik ketidaksamaan menjadi $-\\sqrt{u} \\leq 0$, sehingga fungsi memiliki nilai maksimum lokal pada titik pembuat nol radikan. **Tips:** Mengabaikan tanda minus di depan akar sehingga keliru menyimpulkan $y \\geq 4$."
  },
  {
    "id": "mat-alj-fungsi-akar-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Titik Potong Kurva Akar dengan Garis Lurus",
    "difficulty": "sedang",
    "statement": "Kurva fungsi bentuk akar $f(x) = \\sqrt{3x + 1}$ dan garis lurus $g(x) = x - 1$ berpotongan pada absis $x$ sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = 5$",
      "$x = 0$",
      "$x = 0$ dan $x = 5$",
      "$x = 3$",
      "$x = 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Saat menyelesaikan persamaan irasional $\\sqrt{f(x)} = g(x)$, ruas kanan harus non-negatif ($g(x) \\geq 0$) sebelum kedua ruas dikuadratkan untuk menghindari akar semu (*extraneous solutions*).",
      "steps": "1. Samakan kedua fungsi: $\\sqrt{3x + 1} = x - 1$.<br>2. Syarat eksistensi: $3x + 1 \\geq 0 \\implies x \\geq -\\frac{1}{3}$, dan syarat ruas kanan non-negatif: $x - 1 \\geq 0 \\implies x \\geq 1$.<br>3. Kuadratkan kedua ruas:\n$$3x + 1 = (x - 1)^2 = x^2 - 2x + 1$$\n4. Pindahkan semua suku ke satu ruas:\n$$x^2 - 5x = 0 \\implies x(x - 5) = 0$$\nDiperoleh calon penyelesaian $x = 0$ atau $x = 5$.<br>5. Uji terhadap syarat $x \\geq 1$:\n- Untuk $x = 0$: $0 < 1$ (tidak memenuhi, karena $\\sqrt{1} = 1 \\neq 0 - 1 = -1$)\n- Untuk $x = 5$: $5 \\geq 1$ (memenuhi, karena $\\sqrt{16} = 4 = 5 - 1 = 4$)<br>6. Jadi absis titik potong yang benar hanya $x = 5$ (pilihan A).",
      "pitfalls": "Menyertakan akar semu $x = 0$ sebagai penyelesaian yang sah."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Saat menyelesaikan persamaan irasional $\\sqrt{f(x)} = g(x)$, ruas kanan harus non-negatif ($g(x) \\geq 0$) sebelum kedua ruas dikuadratkan untuk menghindari akar semu (*extraneous solutions*)."
  },
  {
    "id": "mat-alj-fungsi-akar-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Domain Fungsi Bentuk Akar Bertingkat",
    "difficulty": "sedang",
    "statement": "Daerah asal alami ($D_f$) dari fungsi akar bersarang $f(x) = \\sqrt{4 - \\sqrt{x}}$ pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 16\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 16\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 4 \\leq x \\leq 16\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk fungsi akar bersarang $f(x) = \\sqrt{g(\\sqrt{x})}$, syarat numerus harus dipenuhi pada setiap tingkatan akar: akar bagian dalam harus terdefinisi, dan radikan akar bagian luar harus non-negatif.",
      "steps": "1. Syarat akar bagian dalam: $x \\geq 0$.<br>2. Syarat akar bagian luar:\n$$4 - \\sqrt{x} \\geq 0 \\implies \\sqrt{x} \\leq 4$$\n3. Kuadratkan kedua ruas (karena kedua ruas non-negatif):\n$$x \\leq 16$$<br>4. Iriskan kedua syarat:\n$$x \\geq 0 \\text{ dan } x \\leq 16 \\implies 0 \\leq x \\leq 16$$<br>5. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 16\\}$ (pilihan A).",
      "pitfalls": "Lupa menguadratkan angka 4 sehingga menyimpulkan $x \\leq 4$, atau lupa syarat akar dalam $x \\geq 0$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Untuk fungsi akar bersarang $f(x) = \\sqrt{g(\\sqrt{x})}$, syarat numerus harus dipenuhi pada setiap tingkatan akar: akar bagian dalam harus terdefinisi, dan radikan akar bagian luar harus non-negatif. **Tips:** Lupa menguadratkan angka 4 sehingga menyimpulkan $x \\leq 4$, atau lupa syarat akar dalam $x \\geq 0$."
  },
  {
    "id": "mat-alj-fungsi-akar-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Invers Fungsi Bentuk Akar",
    "difficulty": "sedang",
    "statement": "Diketahui fungsi $f(x) = \\sqrt{2x - 5} + 3$ yang terdefinisi untuk $x \\geq \\frac{5}{2}$. Rumus fungsi invers $f^{-1}(x)$ beserta daerah asalnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2}$ untuk $x \\geq 3$",
      "$f^{-1}(x) = \\frac{(x + 3)^2 - 5}{2}$ untuk $x \\geq 3$",
      "$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2}$ untuk $x \\geq \\frac{5}{2}$",
      "$f^{-1}(x) = \\frac{(x - 5)^2 + 3}{2}$ untuk $x \\geq 5$",
      "$f^{-1}(x) = 2(x - 3)^2 + 5$ untuk $x \\geq 3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi invers $f^{-1}(x)$ diperoleh dengan mengisolasi variabel $x$ sebagai fungsi dari $y$. Daerah asal dari fungsi invers ($D_{f^{-1}}$) sama dengan daerah hasil dari fungsi asalnya ($R_f$).",
      "steps": "1. Nyatakan fungsi dalam $y$:\n$$y = \\sqrt{2x - 5} + 3$$\n2. Karena $\\sqrt{2x - 5} \\geq 0$, maka $y \\geq 3$. Rentang ini menjadi domain dari $f^{-1}(x)$, yaitu $x \\geq 3$.<br>3. Pindahkan konstanta 3:\n$$y - 3 = \\sqrt{2x - 5}$$\n4. Kuadratkan kedua ruas:\n$$(y - 3)^2 = 2x - 5$$\n5. Isolasi variabel $x$:\n$$2x = (y - 3)^2 + 5 \\implies x = \\frac{(y - 3)^2 + 5}{2}$$\n6. Ganti variabel ke $x$:\n$$f^{-1}(x) = \\frac{(x - 3)^2 + 5}{2} \\text{ untuk } x \\geq 3$$<br>7. Jadi pilihan yang tepat adalah A.",
      "pitfalls": "Lupa mencantumkan pembatasan domain $x \\geq 3$ pada fungsi kuadrat hasil invers atau menggunakan batas domain $x geq 5/2$."
    },
    "subTopicSlug": "fungsi-irasional-akar",
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi invers $f^{-1}(x)$ diperoleh dengan mengisolasi variabel $x$ sebagai fungsi dari $y$. Daerah asal dari fungsi invers ($D_{f^{-1}}$) sama dengan daerah hasil dari fungsi asalnya ($R_f$). **Tips:** Lupa mencantumkan pembatasan domain $x \\geq 3$ pada fungsi kuadrat hasil invers atau menggunakan batas domain $x geq 5/2$."
  },
  {
    "id": "mudah-mtk-07",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-fungsi-akar",
    "category": "Domain Fungsi Bentuk Akar",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Daerah asal alami (domain) dari fungsi real $f(x) = \\sqrt{2x - 8}$ adalah himpunan semua $x \\in \\mathbb{R}$ yang memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge 8$",
      "$x \\in \\mathbb{R}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Syarat Terdefinisi Bentuk Akar Real:</strong><br>\n          Fungsi $\\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika radikan tidak negatif:<br>\n          $$g(x) \\ge 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$2x - 8 \\ge 0$$</li>\n          <li>$$2x \\ge 8 \\implies x \\ge 4$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena akar berada di pembilang (bukan penyebut pecahan), nilai 0 diperbolehkan (sehingga menggunakan $\\ge 4$, bukan $> 4$).\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Fungsi Irasional (Bentuk Akar)",
    "subTopic": "Fungsi Irasional (Bentuk Akar)",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-fungsi",
    "subTopicSlug": "fungsi-irasional-akar",
    "hint": "Syarat Terdefinisi Bentuk Akar Real: Fungsi $\\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika radikan tidak negatif: $$g(x) \\ge 0$$. **Tips:** Karena akar berada di pembilang (bukan penyebut pecahan), nilai 0 diperbolehkan (sehingga menggunakan $\\ge 4$, bukan $> 4$)."
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
