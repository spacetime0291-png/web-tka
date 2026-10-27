/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Pertidaksamaan & Nilai Mutlak
 * Bab Kecil: Syarat Fungsi & Nilai Mutlak (fun-mutlak-dasar)
 * Sub-Bab: Persamaan Nilai Mutlak (fun-mutlak-dasar-persamaan)
 * Slug: persamaan-nilai-mutlak
 * Indikator: Konsep dasar nilai mutlak sebagai jarak dan penyelesaian persamaan nilai mutlak linear.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-mutlak-dasar-persamaan";
  const subTopicSlug = "persamaan-nilai-mutlak";
  const questions = [
  {
    "id": "fun-mutlak-dasar-persamaan-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Linier Satu Variabel",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari persamaan nilai mutlak $|x - 3| = 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{-2, 8\\}$",
      "$\\{2, 8\\}$",
      "$\\{-8, 2\\}$",
      "$\\{-2, 5\\}$",
      "$\\{8\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan sifat dasar nilai mutlak, $|f(x)| = c$ (dengan $c > 0$) ekuivalen dengan $f(x) = c$ atau $f(x) = -c$.",
      "steps": "1. Pisahkan persamaan menjadi dua kemungkinan kasus:\n- Kasus positif: $x - 3 = 5$\n- Kasus negatif: $x - 3 = -5$\n2. Selesaikan kasus pertama:\n$$x = 5 + 3 = 8$$\n3. Selesaikan kasus kedua:\n$$x = -5 + 3 = -2$$\n4. Himpunan penyelesaiannya adalah $\\{-2, 8\\}$.\n5. Jadi, jawaban yang benar adalah pilihan A.",
      "pitfalls": "Hanya menyelesaikan kasus positif sehingga hanya memperoleh satu akar penyelesaian $x = 8$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan sifat dasar nilai mutlak, $|f(x)| = c$ (dengan $c > 0$) ekuivalen dengan $f(x) = c$ atau $f(x) = -c$."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Koefisien Variabel Bukan Satu",
    "difficulty": "mudah",
    "statement": "Himpunan penyelesaian dari persamaan $|2x + 1| = 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{-3, 4\\}$",
      "$\\{-4, 3\\}$",
      "$\\{-4, 4\\}$",
      "$\\{-3, 3\\}$",
      "$\\{3, 4\\}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pecah persamaan mutlak ke dalam dua persamaan linear: $2x + 1 = 7$ atau $2x + 1 = -7$.",
      "steps": "1. Kasus 1 ($2x + 1 = 7$):\n$$2x = 7 - 1 = 6 \\implies x = 3$$\n2. Kasus 2 ($2x + 1 = -7$):\n$$2x = -7 - 1 = -8 \\implies x = -4$$\n3. Satukan kedua nilai $x$ ke dalam himpunan penyelesaian:\n$$HP = \\{-4, 3\\}$$\n4. Jadi, himpunan penyelesaiannya adalah $\\{-4, 3\\}$ (pilihan B).",
      "pitfalls": "Salah menghitung $-7 - 1$ menjadi $-6$ sehingga menghasilkan akar keliru $x = -3$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Pecah persamaan mutlak ke dalam dua persamaan linear: $2x + 1 = 7$ atau $2x + 1 = -7$. **Tips:** Salah menghitung $-7 - 1$ menjadi $-6$ sehingga menghasilkan akar keliru $x = -3$."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Sama dengan Nol",
    "difficulty": "mudah",
    "statement": "Nilai $x$ yang memenuhi persamaan nilai mutlak $|3x - 6| = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-2$",
      "$0$",
      "$1$",
      "$2$",
      "$\\pm 2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Nilai mutlak bernilai nol jika dan hanya jika ekspresi di dalamnya bernilai nol: $|u| = 0 \\iff u = 0$.",
      "steps": "1. Samakan ekspresi dalam nilai mutlak dengan nol:\n$$3x - 6 = 0$$\n2. Tambahkan kedua ruas dengan 6:\n$$3x = 6$$\n3. Bagi kedua ruas dengan 3:\n$$x = 2$$\n4. Jadi, nilai $x$ yang memenuhi adalah $2$ (pilihan D).",
      "pitfalls": "Mengira ada dua akar $\\pm 2$ karena terbiasa memecah persamaan mutlak menjadi dua kasus padahal ruas kanan bernilai 0."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Nilai mutlak bernilai nol jika dan hanya jika ekspresi di dalamnya bernilai nol: $|u| = 0 \\iff u = 0$. **Tips:** Mengira ada dua akar $\\pm 2$ karena terbiasa memecah persamaan mutlak menjadi dua kasus padahal ruas kanan bernilai 0."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Bernilai Negatif",
    "difficulty": "mudah",
    "statement": "Penyelesaian dari persamaan nilai mutlak $|x + 4| = -3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x = -7$",
      "$x = -1$",
      "$x = -7 \\text{ atau } x = -1$",
      "$x = 1$",
      "Tidak ada nilai $x$ yang memenuhi (himpunan kosong $\\emptyset$)"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Nilai mutlak dari sembarang bilangan real selalu bernilai non-negatif ($|u| \\ge 0$). Oleh karena itu, persamaan mutlak yang disamakan dengan bilangan negatif tidak memiliki solusi real.",
      "steps": "1. Perhatikan ruas kanan persamaan: nilainya adalah $-3$ (bilangan negatif).\n2. Berdasarkan definisi nilai mutlak:\n$$|x + 4| \\ge 0 \\quad \\text{untuk setiap } x \\in \\mathbb{R}$$\n3. Karena nilai non-negatif tidak pernah sama dengan bilangan negatif, tidak ada nilai $x$ yang memenuhi persamaan tersebut.\n4. Jadi, penyelesaiannya adalah himpunan kosong $\\emptyset$ (pilihan E).",
      "pitfalls": "Memaksakan menghitung kasus $x + 4 = -3$ dan $x + 4 = 3$ tanpa memeriksa syarat dasar nilai mutlak."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Nilai mutlak dari sembarang bilangan real selalu bernilai non-negatif ($|u| \\ge 0$). Oleh karena itu, persamaan mutlak yang disamakan dengan bilangan negatif tidak memiliki solusi real."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Jumlah Akar-Akar Persamaan Nilai Mutlak",
    "difficulty": "mudah",
    "statement": "Jumlah seluruh nilai $x$ yang memenuhi persamaan nilai mutlak $|4 - x| = 6$ adalah ....",
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
    "correctIndex": 2,
    "solution": {
      "concept": "Cari seluruh nilai akar penyelesaian terlebih dahulu menggunakan dua cabang nilai mutlak, kemudian jumlahkan hasilnya.",
      "steps": "1. Cabang positif:\n$$4 - x = 6 \\implies -x = 2 \\implies x_1 = -2$$\n2. Cabang negatif:\n$$4 - x = -6 \\implies -x = -10 \\implies x_2 = 10$$\n3. Jumlahkan kedua nilai akar yang diperoleh:\n$$x_1 + x_2 = -2 + 10 = 8$$\n4. Jadi, jumlah seluruh nilai $x$ yang memenuhi adalah $8$ (pilihan C).",
      "pitfalls": "Hanya menjumlahkan nilai tanpa memperhatikan tanda negatif pada akar $x_1 = -2$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Mudah",
    "hint": "Cari seluruh nilai akar penyelesaian terlebih dahulu menggunakan dua cabang nilai mutlak, kemudian jumlahkan hasilnya. **Tips:** Hanya menjumlahkan nilai tanpa memperhatikan tanda negatif pada akar $x_1 = -2$."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Dua Ruas",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari persamaan nilai mutlak $|2x - 1| = |x + 4|$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{-1, 5\\}$",
      "$\\{1, 5\\}$",
      "$\\{-5, 1\\}$",
      "$\\{-1, 3\\}$",
      "$\\{5\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan $|f(x)| = |g(x)|$ ekuivalen dengan $(f(x) - g(x))(f(x) + g(x)) = 0$, yang setara dengan $f(x) = g(x)$ atau $f(x) = -g(x)$.",
      "steps": "1. Tinjau kemungkinan pertama ($f(x) = g(x)$):\n$$2x - 1 = x + 4$$\n$$2x - x = 4 + 1 \\implies x = 5$$\n2. Tinjau kemungkinan kedua ($f(x) = -g(x)$):\n$$2x - 1 = -(x + 4)$$\n$$2x - 1 = -x - 4$$\n$$3x = -3 \\implies x = -1$$\n3. Gabungkan kedua solusi ke dalam himpunan penyelesaian:\n$$HP = \\{-1, 5\\}$$\n4. Jadi, himpunan penyelesaiannya adalah $\\{-1, 5\\}$ (pilihan A).",
      "pitfalls": "Lupa mendistribusikan tanda minus pada seluruh suku kurung kedua saat $-(x + 4)$ sehingga keliru menulis $-x + 4$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Persamaan $|f(x)| = |g(x)|$ ekuivalen dengan $(f(x) - g(x))(f(x) + g(x)) = 0$, yang setara dengan $f(x) = g(x)$ atau $f(x) = -g(x)$. **Tips:** Lupa mendistribusikan tanda minus pada seluruh suku kurung kedua saat $-(x + 4)$ sehingga keliru menulis $-x + 4$."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak dengan Ruas Kanan Memuat Variabel",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari persamaan $|3x + 2| = 2x + 7$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{5\\}$",
      "$\\{-1{,}8\\}$",
      "$\\{-1{,}8, 5\\}$",
      "$\\{-5, 1{,}8\\}$",
      "$\\emptyset$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk persamaan $|f(x)| = g(x)$, ruas kanan harus memenuhi syarat non-negatif $g(x) \\ge 0$, kemudian diselesaikan dengan cabang $f(x) = g(x)$ atau $f(x) = -g(x)$.",
      "steps": "1. Syarat ruas kanan non-negatif:\n$$2x + 7 \\ge 0 \\implies x \\ge -3{,}5$$\n2. Cabang 1 ($3x + 2 = 2x + 7$):\n$$3x - 2x = 7 - 2 \\implies x = 5$$\nPeriksa syarat: $5 \\ge -3{,}5$ (memenuhi).\n3. Cabang 2 ($3x + 2 = -(2x + 7)$):\n$$3x + 2 = -2x - 7$$\n$$5x = -9 \\implies x = -\\frac{9}{5} = -1{,}8$$\nPeriksa syarat: $-1{,}8 \\ge -3{,}5$ (memenuhi).\n4. Kedua nilai memenuhi syarat eksistensi, sehingga $HP = \\{-1{,}8, 5\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Langsung mencoret akar negatif tanpa mengecek apakah nilai tersebut memenuhi batas syarat ruas kanan $x \\ge -3{,}5$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Untuk persamaan $|f(x)| = g(x)$, ruas kanan harus memenuhi syarat non-negatif $g(x) \\ge 0$, kemudian diselesaikan dengan cabang $f(x) = g(x)$ atau $f(x) = -g(x)$. **Tips:** Langsung mencoret akar negatif tanpa mengecek apakah nilai tersebut memenuhi batas syarat ruas kanan $x \\ge -3{,}5$."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Kuadrat dalam Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Hasil kali semua nilai $x$ yang memenuhi persamaan $|x - 2|^2 - 3|x - 2| - 4 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-24$",
      "$-12$",
      "$-8$",
      "$6$",
      "$12$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan pemisalan variabel baru $u = |x - 2| \\ge 0$ untuk mengubahnya menjadi persamaan kuadrat biasa, kemudian buang akar yang tidak memenuhi syarat $u \\ge 0$.",
      "steps": "1. Misalkan $u = |x - 2|$ dengan syarat $u \\ge 0$:\n$$u^2 - 3u - 4 = 0$$\n2. Faktorkan persamaan kuadrat:\n$$(u - 4)(u + 1) = 0$$\nDiperoleh $u = 4$ atau $u = -1$.\n3. Karena $u \\ge 0$, maka $u = -1$ tidak memenuhi. Ambil $u = 4$:\n$$|x - 2| = 4$$\n4. Selesaikan persamaan mutlak:\n$$x - 2 = 4 \\implies x_1 = 6$$\n$$x - 2 = -4 \\implies x_2 = -2$$\n5. Hitung hasil kali kedua akar:\n$$x_1 \\times x_2 = 6 \\times (-2) = -12$$\n6. Jadi, hasil kali semua nilai $x$ yang memenuhi adalah $-12$ (pilihan B).",
      "pitfalls": "Menyelesaikan $|x - 2| = -1$ yang menghasilkan akar imajiner/tidak sah, atau salah mengalikan tanda akar."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan pemisalan variabel baru $u = |x - 2| \\ge 0$ untuk mengubahnya menjadi persamaan kuadrat biasa, kemudian buang akar yang tidak memenuhi syarat $u \\ge 0$. **Tips:** Menyelesaikan $|x - 2| = -1$ yang menghasilkan akar imajiner/tidak sah, atau salah mengalikan tanda akar."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Nilai Mutlak Geometri Jarak Segmen",
    "difficulty": "sedang",
    "statement": "Banyaknya bilangan real $x$ yang memenuhi persamaan nilai mutlak $|x - 1| + |x - 4| = 3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ (tidak ada)}$",
      "$1$",
      "$2$",
      "$3$",
      "Tak terhingga banyaknya"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Secara geometris, $|x - a| + |x - b|$ menyatakan jumlah jarak dari titik $x$ ke titik $a$ dan ke titik $b$. Jika jumlah jaraknya sama dengan jarak antara $a$ dan $b$ ($|b - a|$), maka seluruh titik pada segmen $[a, b]$ adalah solusinya.",
      "steps": "1. Amati jarak antara kedua titik pembuat nol pada garis bilangan:\n$$|4 - 1| = 3$$\n2. Persamaan menyatakan bahwa jumlah jarak dari titik $x$ ke titik 1 dan titik 4 adalah tepat sama dengan 3:\n$$|x - 1| + |x - 4| = 3$$\n3. Sifat ini dipenuhi oleh setiap titik $x$ yang berada di antara $1$ dan $4$, yaitu interval $[1, 4]$:\n$$\\text{Untuk } 1 \\le x \\le 4: \\quad (x - 1) + (4 - x) = 3 \\quad (\\text{selalu benar})$$\n4. Karena interval $[1, 4]$ memuat bilangan real yang tak terhingga banyaknya, maka jumlah penyelesaiannya adalah tak terhingga.\n5. Jadi, terdapat tak terhingga banyaknya solusi (pilihan E).",
      "pitfalls": "Hanya menguji titik batas $x = 1$ dan $x = 4$ sehingga menyimpulkan hanya ada 2 solusi."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Secara geometris, $|x - a| + |x - b|$ menyatakan jumlah jarak dari titik $x$ ke titik $a$ dan ke titik $b$. Jika jumlah jaraknya sama dengan jarak antara $a$ dan $b$ ($|b - a|$), maka seluruh titik pada segmen $[a, b]$ adalah solusinya."
  },
  {
    "id": "fun-mutlak-dasar-persamaan-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-mutlak",
    "subChapterId": "fun-mutlak-dasar",
    "subTopicId": "fun-mutlak-dasar-persamaan",
    "category": "Persamaan Linear Kombinasi Nilai Mutlak",
    "difficulty": "sedang",
    "statement": "Himpunan penyelesaian dari persamaan $|2x - 6| + x = 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\{-3, 5\\}$",
      "$\\{3, 5\\}$",
      "$\\{-5, 3\\}$",
      "$\\{5\\}$",
      "$\\{-3\\}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Isolasi bentuk nilai mutlak ke satu ruas: $|2x - 6| = 9 - x$, dengan syarat ruas kanan non-negatif: $9 - x \\ge 0 \\iff x \\le 9$.",
      "steps": "1. Isolasi nilai mutlak:\n$$|2x - 6| = 9 - x$$\nSyarat penyelesaian: $9 - x \\ge 0 \\implies x \\le 9$.\n2. Cabang pertama ($2x - 6 = 9 - x$):\n$$2x + x = 9 + 6$$\n$$3x = 15 \\implies x = 5$$\nPeriksa syarat: $5 \\le 9$ (memenuhi).\n3. Cabang kedua ($2x - 6 = -(9 - x)$):\n$$2x - 6 = -9 + x$$\n$$2x - x = -9 + 6$$\n$$x = -3$$\nPeriksa syarat: $-3 \\le 9$ (memenuhi).\n4. Gabungkan kedua solusi:\n$$HP = \\{-3, 5\\}$$\n5. Jadi, himpunan penyelesaiannya adalah $\\{-3, 5\\}$ (pilihan A).",
      "pitfalls": "Lupa memindahkan variabel $x$ ke ruas kanan terlebih dahulu sehingga memecah persamaan menjadi $2x - 6 + x = 9$ dan $2x - 6 - x = 9$."
    },
    "subTopicSlug": "persamaan-nilai-mutlak",
    "bab": "Pertidaksamaan & Nilai Mutlak",
    "subBab": "Persamaan Nilai Mutlak",
    "subTopic": "Persamaan Nilai Mutlak",
    "chapterTitle": "Pertidaksamaan & Nilai Mutlak",
    "difficultyLabel": "Sedang",
    "hint": "Isolasi bentuk nilai mutlak ke satu ruas: $|2x - 6| = 9 - x$, dengan syarat ruas kanan non-negatif: $9 - x \\ge 0 \\iff x \\le 9$."
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
