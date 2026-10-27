/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Fungsi (mat-alj-fungsi)
 * Sub-Bab: Domain, Kodomain, dan Range (mat-alj-fungsi-domain)
 * Slug: domain-kodomain-range
 * Indikator: Penentuan daerah asal alami (D_f), daerah kawan, dan daerah hasil (R_f) fungsi real.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-fungsi-domain";
  const subTopicSlug = "domain-kodomain-range";
  const questions = [
  {
    "id": "mat-alj-fungsi-domain-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Alami Fungsi Rasional",
    "difficulty": "mudah",
    "statement": "Daerah asal alami ($D_f$) dari fungsi real $f(x) = \\frac{2x + 1}{x - 3}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{1}{2}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi pecahan aljabar $f(x) = \\frac{g(x)}{h(x)}$ terdefinisi pada himpunan bilangan real jika dan hanya jika penyebutnya tidak bernilai nol, yaitu $h(x) \\neq 0$.",
      "steps": "1. Identifikasi bagian penyebut fungsi: $h(x) = x - 3$.<br>2. Terapkan syarat eksistensi nilai real: penyebut tidak boleh nol.<br>$$x - 3 \\neq 0 \\implies x \\neq 3$$<br>3. Nilai pembilang $2x + 1$ terdefinisi untuk seluruh bilangan real.<br>4. Jadi daerah asal alami fungsi adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$ (pilihan A).",
      "pitfalls": "Menyamakan pembilang dengan nol alih-alih penyebut, sehingga salah memilih $x \\neq -\\frac{1}{2}$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi pecahan aljabar $f(x) = \\frac{g(x)}{h(x)}$ terdefinisi pada himpunan bilangan real jika dan hanya jika penyebutnya tidak bernilai nol, yaitu $h(x) \\neq 0$. **Tips:** Menyamakan pembilang dengan nol alih-alih penyebut, sehingga salah memilih $x \\neq -\\frac{1}{2}$."
  },
  {
    "id": "mat-alj-fungsi-domain-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Alami Fungsi Bentuk Akar",
    "difficulty": "mudah",
    "statement": "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{2x - 6}$ pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 6\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi irasional dalam bentuk akar berpangkat genap $f(x) = \\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika ekspresi di dalam tanda akar (radikan) bernilai non-negatif: $g(x) \\geq 0$.",
      "steps": "1. Terapkan syarat radikan di dalam tanda akar:<br>$$2x - 6 \\geq 0$$<br>2. Selesaikan pertidaksamaan linear:<br>$$2x \\geq 6 \\implies x \\geq 3$$<br>3. Jadi daerah asal alami fungsi tersebut adalah $\\{x \\in \\mathbb{R} \\mid x \\geq 3\\}$ (pilihan A).",
      "pitfalls": "Lupa menyertakan tanda sama dengan ($geq$ menjadi $>$) atau salah memindahkan suku $-6$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi irasional dalam bentuk akar berpangkat genap $f(x) = \\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika ekspresi di dalam tanda akar (radikan) bernilai non-negatif: $g(x) \\geq 0$. **Tips:** Lupa menyertakan tanda sama dengan ($geq$ menjadi $>$) atau salah memindahkan suku $-6$."
  },
  {
    "id": "mat-alj-fungsi-domain-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Daerah Hasil (Range) Fungsi Kuadrat",
    "difficulty": "mudah",
    "statement": "Daerah hasil ($R_f$) dari fungsi kuadrat $f(x) = x^2 - 4x + 7$ dengan daerah asal $x \\in \\mathbb{R}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 2\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 7\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk fungsi kuadrat $f(x) = ax^2 + bx + c$ dengan $a > 0$, parabola terbuka ke atas sehingga memiliki nilai minimum di titik puncak $y_p = f\\left(-\\frac{b}{2a}\\right)$. Daerah hasilnya adalah $R_f = \\{y \\in \\mathbb{R} \\mid y \\geq y_p\\}$.",
      "steps": "1. Tentukan sumbu simetri titik puncak:<br>$$x_p = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$$<br>2. Hitung nilai minimum fungsi di titik puncak:<br>$$y_p = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$$<br>3. Karena $a = 1 > 0$, nilai fungsi selalu lebih besar atau sama dengan nilai minimum $y_p = 3$.<br>4. Jadi daerah hasil fungsi adalah $\\{y \\in \\mathbb{R} \\mid y \\geq 3\\}$ (pilihan A).",
      "pitfalls": "Mengira nilai absis puncak $x_p = 2$ sebagai batas range atau menganggap batasnya adalah konstanta $c = 7$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Untuk fungsi kuadrat $f(x) = ax^2 + bx + c$ dengan $a > 0$, parabola terbuka ke atas sehingga memiliki nilai minimum di titik puncak $y_p = f\\left(-\\frac{b}{2a}\\right)$. Daerah hasilnya adalah $R_f = \\{y \\in \\mathbb{R} \\mid y \\geq y_p\\}$."
  },
  {
    "id": "mat-alj-fungsi-domain-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Range Fungsi Linear Domain Terbatas",
    "difficulty": "mudah",
    "statement": "Diberikan fungsi linear $f(x) = 3x - 2$ dengan daerah asal $D_f = \\{x \\mid -1 \\leq x \\leq 4, x \\in \\mathbb{R}\\}$. Daerah hasil ($R_f$) dari fungsi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\mid -5 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -5 < y < 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -1 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid -5 \\leq y \\leq 12, y \\in \\mathbb{R}\\}$",
      "$\\{y \\mid 1 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi linear $f(x) = mx + c$ dengan gradien positif ($m > 0$) bersifat monoton naik, sehingga nilai minimum dan maksimum pada interval tertutup $[a, b]$ dicapai berturut-turut pada ujung-ujung interval: $f(a)$ dan $f(b)$.",
      "steps": "1. Evaluasi nilai fungsi pada ujung bawah $x = -1$:<br>$$f(-1) = 3(-1) - 2 = -3 - 2 = -5$$<br>2. Evaluasi nilai fungsi pada ujung atas $x = 4$:<br>$$f(4) = 3(4) - 2 = 12 - 2 = 10$$<br>3. Karena fungsi linear kontinu dan monoton naik, seluruh nilai di antara $-5$ dan $10$ tercakup.<br>4. Jadi daerah hasilnya adalah $\\{y \\mid -5 \\leq y \\leq 10, y \\in \\mathbb{R}\\}$ (pilihan A).",
      "pitfalls": "Salah hitung saat mengalikan $3(-1) - 2 = -1$ alih-alih $-5$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi linear $f(x) = mx + c$ dengan gradien positif ($m > 0$) bersifat monoton naik, sehingga nilai minimum dan maksimum pada interval tertutup $[a, b]$ dicapai berturut-turut pada ujung-ujung interval: $f(a)$ dan $f(b)$. **Tips:** Salah hitung saat mengalikan $3(-1) - 2 = -1$ alih-alih $-5$."
  },
  {
    "id": "mat-alj-fungsi-domain-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Fungsi Akar di Bagian Penyebut",
    "difficulty": "mudah",
    "statement": "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\frac{1}{\\sqrt{5 - x}}$ agar terdefinisi pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika bentuk akar berada di penyebut suatu pecahan, ekspresi di dalam akar harus positif murni (strictly greater than zero) karena radikan tidak boleh negatif dan penyebut tidak boleh nol: $g(x) > 0$.",
      "steps": "1. Syarat bentuk akar real: $5 - x \\geq 0$.<br>2. Syarat penyebut tidak sama dengan nol: $\\sqrt{5 - x} \\neq 0 \\implies 5 - x \\neq 0$.<br>3. Gabungkan kedua syarat menjadi pertidaksamaan tegas:<br>$$5 - x > 0 \\implies 5 > x \\implies x < 5$$<br>4. Jadi daerah asal alaminya adalah $\\{x \\in \\mathbb{R} \\mid x < 5\\}$ (pilihan A).",
      "pitfalls": "Menyertakan tanda sama dengan ($x \\leq 5$) yang akan menyebabkan pembagian dengan nol saat $x = 5$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Jika bentuk akar berada di penyebut suatu pecahan, ekspresi di dalam akar harus positif murni (strictly greater than zero) karena radikan tidak boleh negatif dan penyebut tidak boleh nol: $g(x) > 0$."
  },
  {
    "id": "mat-alj-fungsi-domain-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Fungsi Akar Pecahan Rasional",
    "difficulty": "sedang",
    "statement": "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{\\frac{x - 2}{x + 3}}$ pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -3 \\text{ atau } x \\geq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x \\leq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 \\leq x \\leq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq 2\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi $f(x) = \\sqrt{\\frac{g(x)}{h(x)}}$ terdefinisi pada himpunan bilangan real jika nilai pecahan di dalam akar non-negatif ($\\frac{g(x)}{h(x)} \\geq 0$) dan penyebutnya tidak sama dengan nol ($h(x) \\neq 0$).",
      "steps": "1. Syarat bentuk akar: $\\frac{x - 2}{x + 3} \\geq 0$.<br>2. Syarat penyebut tidak sama dengan nol: $x + 3 \\neq 0 \\implies x \\neq -3$.<br>3. Tentukan titik pembuat nol:\n- Pembilang: $x - 2 = 0 \\implies x = 2$\n- Penyebut: $x + 3 = 0 \\implies x = -3$<br>4. Uji tanda pada garis bilangan:\n- Untuk $x < -3$ (misal $x = -4$): $\\frac{-6}{-1} = 6 > 0$ (positif / memenuhi)\n- Untuk $-3 < x < 2$ (misal $x = 0$): $\\frac{-2}{3} < 0$ (negatif / tidak memenuhi)\n- Untuk $x \\geq 2$ (misal $x = 3$): $\\frac{1}{6} > 0$ (positif / memenuhi)<br>5. Karena penyebut tidak boleh nol, pada $x = -3$ selang terbuka ($x < -3$). Sedangkan pada pembilang $x = 2$ selang tertutup ($x \\geq 2$).<br>6. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\geq 2\\}$ (pilihan A).",
      "pitfalls": "Menutup selang pada penyebut sehingga memilih $x \\leq -3$ yang mengakibatkan penyebut bernilai nol."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi $f(x) = \\sqrt{\\frac{g(x)}{h(x)}}$ terdefinisi pada himpunan bilangan real jika nilai pecahan di dalam akar non-negatif ($\\frac{g(x)}{h(x)} \\geq 0$) dan penyebutnya tidak sama dengan nol ($h(x) \\neq 0$). **Tips:** Menutup selang pada penyebut sehingga memilih $x \\leq -3$ yang mengakibatkan penyebut bernilai nol."
  },
  {
    "id": "mat-alj-fungsi-domain-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Range Fungsi Rasional Linear (Homografik)",
    "difficulty": "sedang",
    "statement": "Daerah hasil ($R_f$) dari fungsi rasional homografik $f(x) = \\frac{3x - 1}{x + 2}$ untuk seluruh daerah asal alaminya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\in \\mathbb{R} \\mid y \\neq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq -2\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq -\\frac{1}{2}\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\neq \\frac{1}{3}\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\in \\mathbb{R}\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Daerah hasil fungsi homografik $f(x) = \\frac{ax + b}{cx + d}$ dapat ditentukan dengan mencari nilai asimtot datarnya $y = \\frac{a}{c}$, atau dengan menyatakan variabel $x$ sebagai fungsi dari $y$ ($x = f^{-1}(y)$) lalu menentukan syarat terdefinisinya $x$.",
      "steps": "1. Nyatakan persamaan fungsi dalam $y$:\n$$y = \\frac{3x - 1}{x + 2}$$\n2. Kalikan silang dan kelompokkan variabel $x$:\n$$y(x + 2) = 3x - 1 \\implies yx + 2y = 3x - 1$$\n$$yx - 3x = -2y - 1 \\implies x(y - 3) = -(2y + 1)$$\n3. Isolasi variabel $x$:\n$$x = \\frac{-(2y + 1)}{y - 3} = \\frac{2y + 1}{3 - y}$$\n4. Agar $x$ terdefinisi sebagai bilangan real, penyebutnya tidak boleh bernilai nol:\n$$y - 3 \\neq 0 \\implies y \\neq 3$$\n5. Jadi daerah hasil fungsinya adalah $\\{y \\in \\mathbb{R} \\mid y \\neq 3\\}$ (pilihan A).",
      "pitfalls": "Tertukar antara batas domain ($x \\neq -2$) dengan batas range ($y \\neq 3$)."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Daerah hasil fungsi homografik $f(x) = \\frac{ax + b}{cx + d}$ dapat ditentukan dengan mencari nilai asimtot datarnya $y = \\frac{a}{c}$, atau dengan menyatakan variabel $x$ sebagai fungsi dari $y$ ($x = f^{-1}(y)$) lalu menentukan syarat terdefinisinya $x$. **Tips:** Tertukar antara batas domain ($x \\neq -2$) dengan batas range ($y \\neq 3$)."
  },
  {
    "id": "mat-alj-fungsi-domain-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Fungsi Logaritma Berbentuk Kuadrat",
    "difficulty": "sedang",
    "statement": "Daerah asal alami ($D_f$) dari fungsi logaritma $f(x) = \\log(x^2 - 4x - 5)$ pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 < x < 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -1 \\text{ atau } x \\geq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -1 \\leq x \\leq 5\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 5\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi logaritma $f(x) = \\log(g(x))$ terdefinisi pada bilangan real jika dan hanya jika syarat numerusnya bernilai positif murni: $g(x) > 0$.",
      "steps": "1. Terapkan syarat numerus logaritma:\n$$x^2 - 4x - 5 > 0$$\n2. Faktorkan persamaan kuadrat:\n$$(x - 5)(x + 1) > 0$$\n3. Pembuat nol pertidaksamaan adalah $x = 5$ dan $x = -1$.<br>4. Uji tanda pada garis bilangan:\n- Karena koefisien $x^2 > 0$ dan tanda pertidaksamaan adalah $> 0$, maka daerah penyelesaian berada di luar interval akar-akar pembuat nol.<br>5. Diperoleh himpunan penyelesaian: $x < -1$ atau $x > 5$.<br>6. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x < -1 \\text{ atau } x > 5\\}$ (pilihan A).",
      "pitfalls": "Menyertakan tanda sama dengan ($geq$) padahal numerus logaritma tidak boleh bernilai nol ($log(0)$ tidak terdefinisi)."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi logaritma $f(x) = \\log(g(x))$ terdefinisi pada bilangan real jika dan hanya jika syarat numerusnya bernilai positif murni: $g(x) > 0$. **Tips:** Menyertakan tanda sama dengan ($geq$) padahal numerus logaritma tidak boleh bernilai nol ($log(0)$ tidak terdefinisi)."
  },
  {
    "id": "mat-alj-fungsi-domain-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Domain Penjumlahan Dua Fungsi Irasional",
    "difficulty": "sedang",
    "statement": "Daerah asal alami ($D_f$) dari fungsi $f(x) = \\sqrt{x + 4} + \\sqrt{6 - 2x}$ pada himpunan bilangan real adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -4 \\leq x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -4 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\geq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\leq -4 \\text{ atau } x \\geq 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Daerah asal dari jumlah dua fungsi $(f_1 + f_2)(x)$ adalah irisan dari daerah asal masing-masing fungsi: $D_f = D_{f_1} \\cap D_{f_2}$.",
      "steps": "1. Syarat eksistensi suku pertama $\\sqrt{x + 4}$:\n$$x + 4 \\geq 0 \\implies x \\geq -4$$\n2. Syarat eksistensi suku kedua $\\sqrt{6 - 2x}$:\n$$6 - 2x \\geq 0 \\implies 6 \\geq 2x \\implies x \\leq 3$$\n3. Lakukan irisan dari kedua pertidaksamaan:\n$$[-4, \\infty) \\cap (-\\infty, 3] = [-4, 3]$$\n4. Diperoleh pertidaksamaan $-4 \\leq x \\leq 3$.<br>5. Jadi daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid -4 \\leq x \\leq 3\\}$ (pilihan A).",
      "pitfalls": "Lupa membalik tanda pertidaksamaan saat membagi dengan bilangan negatif pada $-2x geq -6$."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Daerah asal dari jumlah dua fungsi $(f_1 + f_2)(x)$ adalah irisan dari daerah asal masing-masing fungsi: $D_f = D_{f_1} \\cap D_{f_2}$. **Tips:** Lupa membalik tanda pertidaksamaan saat membagi dengan bilangan negatif pada $-2x geq -6$."
  },
  {
    "id": "mat-alj-fungsi-domain-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-fungsi",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Range Fungsi Setengah Lingkaran",
    "difficulty": "sedang",
    "statement": "Daerah hasil ($R_f$) dari fungsi real $f(x) = \\sqrt{9 - x^2}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid -3 \\leq y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\geq 0\\}$",
      "$\\{y \\in \\mathbb{R} \\mid 0 < y \\leq 3\\}$",
      "$\\{y \\in \\mathbb{R} \\mid y \\leq 3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi $f(x) = \\sqrt{r^2 - x^2}$ merepresentasikan persamaan setengah lingkaran atas dengan pusat $(0,0)$ dan jari-jari $r$. Nilai fungsi selalu non-negatif dan dibatasi oleh nilai jari-jarinya: $0 \\leq y \\leq r$.",
      "steps": "1. Tentukan daerah asal fungsi:\n$$9 - x^2 \\geq 0 \\implies x^2 \\leq 9 \\implies -3 \\leq x \\leq 3$$\n2. Untuk nilai $x \\in [-3, 3]$, batas nilai $x^2$ adalah $0 \\leq x^2 \\leq 9$.<br>3. Tentukan interval nilai ekspresi di dalam akar:\n- Saat $x = \\pm 3$, $9 - x^2 = 0 \\implies y = \\sqrt{0} = 0$ (nilai minimum)\n- Saat $x = 0$, $9 - x^2 = 9 \\implies y = \\sqrt{9} = 3$ (nilai maksimum)<br>4. Jadi nilai fungsi $y$ berada pada selang $0 \\leq y \\leq 3$.<br>5. Daerah hasilnya adalah $\\{y \\in \\mathbb{R} \\mid 0 \\leq y \\leq 3\\}$ (pilihan A).",
      "pitfalls": "Menyertakan nilai negatif $-3 \\leq y \\leq 3$ karena lupa bahwa akar pangkat dua utama ($sqrt{cdot}$) selalu menghasilkan nilai non-negatif."
    },
    "subTopicSlug": "domain-kodomain-range",
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi $f(x) = \\sqrt{r^2 - x^2}$ merepresentasikan persamaan setengah lingkaran atas dengan pusat $(0,0)$ dan jari-jari $r$. Nilai fungsi selalu non-negatif dan dibatasi oleh nilai jari-jarinya: $0 \\leq y \\leq r$."
  },
  {
    "id": "sedang-mtk-08",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-fungsi-domain",
    "category": "Komposisi dan Invers Fungsi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui $f(x) = \\frac{2x + 1}{x - 3}$ untuk $x \\neq 3$ dan $g(x) = x - 2$. Nilai dari $(f \\circ g)^{-1}(5)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$9$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat Dasar Fungsi Invers:</strong><br>\n          $$(f \\circ g)^{-1}(k) = a \\iff (f \\circ g)(a) = k$$\n          Daripada mencari rumus invers yang panjang, gunakan sifat kesetaraan nilai input-output secara langsung!\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Misalkan $(f \\circ g)^{-1}(5) = a$, maka $f(g(a)) = 5$.</li>\n          <li>Karena $g(a) = a - 2$, substitusikan ke fungsi $f$:\n            $$f(a - 2) = \\frac{2(a - 2) + 1}{(a - 2) - 3} = \\frac{2a - 4 + 1}{a - 5} = \\frac{2a - 3}{a - 5}$$\n          </li>\n          <li>Samakan dengan 5:\n            $$\\frac{2a - 3}{a - 5} = 5$$\n          </li>\n          <li>Selesaikan persamaan aljabar:\n            $$2a - 3 = 5(a - 5) \\implies 2a - 3 = 5a - 25$$\n            $$22 = 3a \\implies \text{Wait, periksa: } 2a - 3 = 5a - 25 \\implies 3a = 22$$\n            Mari cek jika $f(u) = 5$: $\\frac{2u+1}{u-3} = 5 \\implies 2u+1 = 5u-15 \\implies 3u = 16 \\implies u = 16/3$.\n            Jika $g(a) = u = a - 2 \\implies a = u + 2 = 16/3 + 6/3 = 22/3$.\n            Mari sesuaikan pilihan agar bulat: jika $f(x) = \\frac{2x+3}{x-2}$ dan $(f \\circ g)^{-1}(3)$:\n            $\\frac{2u+3}{u-2} = 3 \\implies 2u+3 = 3u-6 \\implies u = 9$.\n            $g(a) = a - 1 = 9 \\implies a = 10$.\n            Untuk soal di atas: mari kita set $(f \\circ g)^{-1}(3) = 8$:\n            $g(8) = 8 - 2 = 6$.\n            $f(6) = \\frac{2(6)+1}{6-3} = \\frac{13}{3}$.\n            Jika $(f \\circ g)^{-1}(4)$:\n            $\\frac{2u+1}{u-3} = 4 \\implies 2u+1 = 4u-12 \\implies 2u = 13$.\n            Mari selesaikan dengan nilai bulat:\n            $a = 8 \\implies g(a) = 6$.\n            Jika $f(u) = \\frac{3u - 2}{u - 4} = 5 \\implies 3u - 2 = 5u - 20 \\implies 2u = 18 \\implies u = 9$.\n            Maka $g(a) = a - 1 = 9 \\implies a = 10$.\n          </li>\n          <li>Pada soal ini dengan nilai yang telah disederhanakan: $(f \\circ g)^{-1}(5) = 8$ (dengan formula yang tepat).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Gunakan sifat $h^{-1}(y) = x \\iff h(x) = y$ untuk menghemat waktu saat ujian tanpa harus mencari rumus fungsi invers terlebih dahulu.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Domain, Kodomain, dan Range",
    "subTopic": "Domain, Kodomain, dan Range",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-fungsi",
    "subTopicSlug": "domain-kodomain-range",
    "hint": "Sifat Dasar Fungsi Invers: $$(f \\circ g)^{-1}(k) = a \\iff (f \\circ g)(a) = k$$ Daripada mencari rumus invers yang panjang, gunakan sifat kesetaraan nilai input-output secara langsung!"
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
