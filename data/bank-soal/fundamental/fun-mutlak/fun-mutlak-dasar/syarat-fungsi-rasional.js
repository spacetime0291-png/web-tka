/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Syarat Fungsi Rasional (fun-mutlak-dasar-rasional)
 * Slug: syarat-fungsi-rasional
 * Indikator: Syarat terdefinisi fungsi rasional pecahan (penyebut tidak sama dengan nol).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-rasional";
  const subTopicSlug = "syarat-fungsi-rasional";
  const questions = [
  {
    "id": "fun-mutlak-dasar-rasional-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Syarat Terdefinisi Fungsi Rasional Sederhana",
    "difficulty": "mudah",
    "statement": "Fungsi rasional $f(x) = \\frac{5}{x - 3}$ terdefinisi untuk seluruh bilangan real $x$, kecuali untuk nilai $x$ sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-3$",
      "$0$",
      "$3$",
      "$5$",
      "$-5$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Fungsi rasional $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak bernilai nol ($Q(x) \\neq 0$).",
      "steps": "1. Tentukan bagian penyebut fungsi, yaitu $x - 3$.\n2. Fungsi tidak terdefinisi saat penyebut bernilai nol:\n$$x - 3 = 0$$\n3. Selesaikan persamaan linier tersebut:\n$$x = 3$$\n4. Dengan demikian, fungsi terdefinisi untuk seluruh bilangan real kecuali $x = 3$.\n5. Jadi, nilai $x$ yang dikecualikan adalah $3$ (pilihan C).",
      "pitfalls": "Menyamakan pembilang dengan nol sehingga memilih $x = 5$ atau salah tanda menjadi $x = -3$."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi rasional $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak bernilai nol ($Q(x) \\neq 0$)."
  },
  {
    "id": "fun-mutlak-dasar-rasional-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Daerah Asal Alami Fungsi Rasional Linier",
    "difficulty": "mudah",
    "statement": "Daerah asal alami (domain) dari fungsi $g(x) = \\frac{2x + 1}{x + 4}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -4\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Domain fungsi rasional mencakup seluruh bilangan real kecuali pembuat nol dari penyebut.",
      "steps": "1. Syarat terdefinisi fungsi pecahan adalah penyebut tidak sama dengan nol:\n$$x + 4 \\neq 0$$\n2. Pindahkan konstanta 4 ke ruas kanan:\n$$x \\neq -4$$\n3. Tuliskan dalam notasi himpunan daerah asal:\n$$D_g = \\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$$\n4. Jadi, daerah asal fungsi adalah $\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$ (pilihan A).",
      "pitfalls": "Memasukkan pembuat nol pembilang $2x + 1 = 0 \\implies x = -\\frac{1}{2}$ sebagai pembatas domain."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Domain fungsi rasional mencakup seluruh bilangan real kecuali pembuat nol dari penyebut."
  },
  {
    "id": "fun-mutlak-dasar-rasional-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Nilai Pembuat Tidak Terdefinisi dengan Koefisien Penyebut Bukan Satu",
    "difficulty": "mudah",
    "statement": "Fungsi $h(x) = \\frac{x^2 - 1}{2x - 6}$ tidak terdefinisi pada nilai $x$ sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-3$",
      "$-1$",
      "$1$",
      "$3$",
      "$6$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Fungsi pecahan tidak terdefinisi apabila pembagian dilakukan dengan angka nol (penyebut bernilai nol).",
      "steps": "1. Ambil bagian penyebut dari fungsi $h(x)$:\n$$2x - 6$$\n2. Buat penyebut bernilai nol:\n$$2x - 6 = 0$$\n3. Selesaikan persamaan linear:\n$$2x = 6 \\implies x = 3$$\n4. Jadi, fungsi tidak terdefinisi saat $x = 3$ (pilihan D).",
      "pitfalls": "Menyederhanakan pembilang $(x - 1)(x + 1)$ dan mengira nilai $x = \\pm 1$ membuat fungsi tidak terdefinisi, padahal nilai tersebut hanya membuat fungsi bernilai nol."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Fungsi pecahan tidak terdefinisi apabila pembagian dilakukan dengan angka nol (penyebut bernilai nol)."
  },
  {
    "id": "fun-mutlak-dasar-rasional-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Daerah Asal Penyebut Selisih Kuadrat",
    "difficulty": "mudah",
    "statement": "Daerah asal alami dari fungsi $f(x) = \\frac{7}{x^2 - 9}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk selisih kuadrat pada penyebut $x^2 - a^2$ memiliki dua pembuat nol yaitu $x = a$ dan $x = -a$, keduanya harus dikeluarkan dari domain.",
      "steps": "1. Syarat terdefinisi fungsi rasional:\n$$x^2 - 9 \\neq 0$$\n2. Faktorkan penyebut:\n$$(x - 3)(x + 3) \\neq 0$$\n3. Diperoleh dua nilai pembatas:\n$$x \\neq 3 \\quad \\text{dan} \\quad x \\neq -3$$\n4. Himpunan daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 3 \\text{ dan } x \\neq -3\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Hanya mengambil akar positif $x \\neq 3$ dan melupakan akar negatif $x \\neq -3$."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk selisih kuadrat pada penyebut $x^2 - a^2$ memiliki dua pembuat nol yaitu $x = a$ dan $x = -a$, keduanya harus dikeluarkan dari domain. **Tips:** Hanya mengambil akar positif $x \\neq 3$ dan melupakan akar negatif $x \\neq -3$."
  },
  {
    "id": "fun-mutlak-dasar-rasional-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Syarat Nilai Nyata Pecahan Aljabar",
    "difficulty": "mudah",
    "statement": "Agar pecahan bentuk aljabar $\\frac{3x - 5}{4 - x}$ bernilai riil, syarat nilai $x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x \\neq -4$",
      "$x \\neq 4$",
      "$x \\neq \\frac{5}{3}$",
      "$x > 4$",
      "$x < 4$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pecahan aljabar bernilai riil jika penyebutnya bukan nol.",
      "steps": "1. Perhatikan penyebut pecahan, yaitu $4 - x$.\n2. Syarat agar pecahan bernilai riil adalah penyebut tidak sama dengan nol:\n$$4 - x \\neq 0$$\n3. Pindahkan variabel $x$ ke ruas kanan:\n$$x \\neq 4$$\n4. Jadi, syarat nilai $x$ adalah $x \\neq 4$ (pilihan B).",
      "pitfalls": "Kesalahan tanda aljabar saat memindahkan ruas sehingga menyimpulkan $x \\neq -4$."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Pecahan aljabar bernilai riil jika penyebutnya bukan nol. **Tips:** Kesalahan tanda aljabar saat memindahkan ruas sehingga menyimpulkan $x \\neq -4$."
  },
  {
    "id": "fun-mutlak-dasar-rasional-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Domain Fungsi Rasional Penyebut Kuadrat Trinomial",
    "difficulty": "sedang",
    "statement": "Daerah asal alami (domain) dari fungsi rasional $f(x) = \\frac{x + 2}{x^2 - 5x + 6}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2, x \\neq 2, \\text{ dan } x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid 2 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 5\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi rasional mensyaratkan penyebut tidak sama dengan nol. Nilai pembuat nol pembilang tidak memengaruhi daerah asal alami kecuali fungsi tidak terdefinisi.",
      "steps": "1. Ambil bagian penyebut dan terapkan syarat terdefinisi:\n$$x^2 - 5x + 6 \\neq 0$$\n2. Faktorkan bentuk kuadrat tersebut:\n$$(x - 2)(x - 3) \\neq 0$$\n3. Diperoleh batas nilai yang dilarang:\n$$x \\neq 2 \\quad \\text{dan} \\quad x \\neq 3$$\n4. Daerah asal alami mencakup seluruh bilangan real kecuali $2$ dan $3$:\n$$D_f = \\{x \\in \\mathbb{R} \\mid x \\neq 2 \\text{ dan } x \\neq 3\\}$$\n5. Jadi, jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Memasukkan pembuat nol pembilang $x + 2 = 0 \\implies x = -2$ sebagai nilai yang tidak termasuk domain."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Fungsi rasional mensyaratkan penyebut tidak sama dengan nol. Nilai pembuat nol pembilang tidak memengaruhi daerah asal alami kecuali fungsi tidak terdefinisi."
  },
  {
    "id": "fun-mutlak-dasar-rasional-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Fungsi Rasional dengan Penyebut Definit Positif",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi rasional $g(x) = \\frac{3x}{x^2 + 4}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -2 \\text{ dan } x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > -2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "Seluruh bilangan real $\\mathbb{R}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Bentuk kuadrat murni yang ditambah konstanta positif ($x^2 + c$, $c > 0$) bersifat definit positif dan tidak pernah bernilai nol untuk setiap $x \\in \\mathbb{R}$.",
      "steps": "1. Tinjau penyebut fungsi $x^2 + 4$.\n2. Untuk setiap bilangan real $x$, kuadratnya selalu bernilai non-negatif ($x^2 \\ge 0$).\n3. Maka berlaku:\n$$x^2 + 4 \\ge 0 + 4 = 4 > 0$$\n4. Karena penyebut tidak pernah bernilai nol untuk bilangan real berapapun, fungsi terdefinisi di mana saja.\n5. Jadi, daerah asalnya adalah seluruh himpunan bilangan real $\\mathbb{R}$ (pilihan E).",
      "pitfalls": "Menganggap $x^2 + 4$ dapat difaktorkan menjadi $(x - 2)(x + 2)$ di himpunan bilangan real sehingga memilih $x \\neq \\pm 2$."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Bentuk kuadrat murni yang ditambah konstanta positif ($x^2 + c$, $c > 0$) bersifat definit positif dan tidak pernah bernilai nol untuk setiap $x \\in \\mathbb{R}$. **Tips:** Menganggap $x^2 + 4$ dapat difaktorkan menjadi $(x - 2)(x + 2)$ di himpunan bilangan real sehingga memilih $x \\neq \\pm 2$."
  },
  {
    "id": "fun-mutlak-dasar-rasional-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Domain Fungsi Rasional Bertingkat Pecahan",
    "difficulty": "sedang",
    "statement": "Daerah asal alami dari fungsi pecahan bersusun $h(x) = \\frac{1}{1 - \\frac{2}{x}}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq -2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > 2\\}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada pecahan bersusun, syarat penyebut tidak sama dengan nol harus diterapkan pada setiap penyebut yang muncul di semua tingkatan pecahan.",
      "steps": "1. Syarat pada pecahan dalam $\\frac{2}{x}$:\n$$x \\neq 0$$\n2. Syarat pada penyebut utama $1 - \\frac{2}{x}$:\n$$1 - \\frac{2}{x} \\neq 0 \\implies \\frac{x - 2}{x} \\neq 0 \\implies x - 2 \\neq 0 \\implies x \\neq 2$$\n3. Gabungkan kedua syarat domain:\n$$D_h = \\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$$\n4. Jadi, daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 0 \\text{ dan } x \\neq 2\\}$ (pilihan C).",
      "pitfalls": "Hanya menyederhanakan menjadi $\\frac{x}{x - 2}$ lalu menyimpulkan syaratnya hanya $x \\neq 2$, melupakan syarat awal bahwa $x = 0$ membuat suku dalam tidak terdefinisi."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Pada pecahan bersusun, syarat penyebut tidak sama dengan nol harus diterapkan pada setiap penyebut yang muncul di semua tingkatan pecahan."
  },
  {
    "id": "fun-mutlak-dasar-rasional-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Batasan Parameter Agar Fungsi Rasional Terdefinisi di Seluruh Bilangan Real",
    "difficulty": "sedang",
    "statement": "Fungsi $f(x) = \\frac{2x - 1}{x^2 - px + 9}$ terdefinisi untuk seluruh bilangan real $x \\in \\mathbb{R}$. Batasan nilai parameter $p$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-3 < p < 3$",
      "$-6 < p < 6$",
      "$p < -6 \\text{ atau } p > 6$",
      "$p < -3 \\text{ atau } p > 3$",
      "$-6 \\le p \\le 6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Penyebut kuadrat $ax^2 + bx + c$ tidak memiliki pembuat nol real jika diskriminannya bernilai negatif tegas ($D < 0$).",
      "steps": "1. Syarat fungsi terdefinisi di seluruh $\\mathbb{R}$ adalah $x^2 - px + 9 \\neq 0$ untuk setiap $x \\in \\mathbb{R}$.\n2. Karena koefisien utama $a = 1 > 0$, maka parabola selalu berada di atas sumbu-$X$ (definit positif) jika diskriminan $D < 0$:\n$$D = b^2 - 4ac < 0$$\n3. Masukkan nilai koefisien $a = 1$, $b = -p$, $c = 9$:\n$$(-p)^2 - 4(1)(9) < 0$$\n$$p^2 - 36 < 0$$\n4. Selesaikan pertidaksamaan kuadrat:\n$$(p - 6)(p + 6) < 0 \\implies -6 < p < 6$$\n5. Jadi, batasan nilai $p$ adalah $-6 < p < 6$ (pilihan B).",
      "pitfalls": "Memasukkan tanda sama dengan $(\\le)$ atau keliru dalam mengalikan $4ac = 4 \\times 9 = 36$ menjadi $4 \\times 3 = 12$."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Penyebut kuadrat $ax^2 + bx + c$ tidak memiliki pembuat nol real jika diskriminannya bernilai negatif tegas ($D < 0$)."
  },
  {
    "id": "fun-mutlak-dasar-rasional-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-rasional",
    "category": "Penyelesaian Pertidaksamaan Rasional Linier",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari pertidaksamaan rasional $\\frac{x - 2}{x + 3} \\le 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{x \\in \\mathbb{R} \\mid -3 \\le x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x \\le 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x < -3 \\text{ atau } x \\ge 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 2\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 2\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Penyelesaian pertidaksamaan rasional menggunakan pembuat nol pembilang dan penyebut, dengan catatan pembuat nol penyebut tidak pernah boleh masuk ke dalam himpunan penyelesaian ($Q(x) \\neq 0$).",
      "steps": "1. Pembuat nol pembilang ($x - 2 = 0 \\implies x = 2$, tanda sama dengan berlaku karena $\\le 0$).\n2. Pembuat nol penyebut ($x + 3 = 0 \\implies x = -3$, tanda tidak sama dengan berlaku karena penyebut $\\neq 0$, sehingga $x \\neq -3$).\n3. Buat garis bilangan dengan titik uji:\n- Untuk $x < -3$ (misal $x = -4$): $\\frac{-6}{-1} = +6 > 0$\n- Untuk $-3 < x < 2$ (misal $x = 0$): $\\frac{-2}{3} < 0$\n- Untuk $x > 2$ (misal $x = 3$): $\\frac{1}{6} > 0$\n4. Daerah yang memenuhi nilai $\\le 0$ adalah $-3 < x \\le 2$.\n5. Jadi, himpunan penyelesaiannya adalah $\\{x \\in \\mathbb{R} \\mid -3 < x \\le 2\\}$ (pilihan B).",
      "pitfalls": "Memasukkan tanda sama dengan pada titik $-3$ sehingga memilih $-3 \\le x \\le 2$, yang melanggar syarat penyebut tidak sama dengan nol."
    },
    "subTopicSlug": "syarat-fungsi-rasional",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Syarat Fungsi Rasional",
    "subTopic": "Syarat Fungsi Rasional",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Penyelesaian pertidaksamaan rasional menggunakan pembuat nol pembilang dan penyebut, dengan catatan pembuat nol penyebut tidak pernah boleh masuk ke dalam himpunan penyelesaian ($Q(x) \\neq 0$)."
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
