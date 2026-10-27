/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Kedudukan Titik dan Garis (mat-geo-lingkaran-kedudukan)
 * Slug: kedudukan-titik-dan-garis
 * Indikator: Posisi titik dan garis terhadap lingkaran (memotong, menyinggung, luar).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-kedudukan";
  const subTopicSlug = "kedudukan-titik-dan-garis";
  const questions = [
  {
    "id": "mat-geo-lingkaran-kedudukan-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Kedudukan Titik terhadap Lingkaran Pusat Asal",
    "difficulty": "mudah",
    "statement": "Kedudukan titik $P(3, 4)$ terhadap kurva lingkaran $L \\equiv x^2 + y^2 = 25$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Terletak tepat pada lingkaran",
      "Berada di dalam lingkaran",
      "Berada di luar lingkaran",
      "Merupakan titik pusat lingkaran",
      "Tidak dapat ditentukan kedudukannya"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kedudukan titik $(x_1, y_1)$ terhadap lingkaran $x^2 + y^2 = r^2$ ditentukan dengan membandingkan nilai kuasa $K = x_1^2 + y_1^2$ terhadap $r^2$: jika $K = r^2$ titik berada pada lingkaran, jika $K < r^2$ di dalam, dan jika $K > r^2$ di luar.",
      "steps": "1. Substitusikan absis $x = 3$ dan ordinat $y = 4$ ke ruas kiri persamaan lingkaran:\n$$K = 3^2 + 4^2 = 9 + 16 = 25$$\n2. Bandingkan dengan ruas kanan persamaan lingkaran ($r^2 = 25$):\n$$K = 25 = r^2$$\n3. Karena nilai ruas kiri sama persis dengan $r^2$, maka titik $P(3, 4)$ terletak tepat pada lingkaran.\n4. Jadi, kedudukannya adalah terletak tepat pada lingkaran (pilihan A).",
      "pitfalls": "Mengabaikan kuadrat variabel dan langsung menjumlahkan koordinat $3 + 4 = 7$ lalu membandingkannya dengan 25."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Kedudukan titik $(x_1, y_1)$ terhadap lingkaran $x^2 + y^2 = r^2$ ditentukan dengan membandingkan nilai kuasa $K = x_1^2 + y_1^2$ terhadap $r^2$: jika $K = r^2$ titik berada pada lingkaran, jika $K < r^2$ di dalam, dan jika $K > r^2$ di luar."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Kedudukan Titik terhadap Lingkaran Pusat (a, b)",
    "difficulty": "mudah",
    "statement": "Nilai substitusi titik $Q(2, 3)$ terhadap bentuk baku lingkaran $(x - 1)^2 + (y + 2)^2 = 16$ menghasilkan nilai .... sehingga posisi titik $Q$ berada di .... lingkaran.",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Lebih besar dari 16; luar",
      "Lebih kecil dari 16; dalam",
      "Sama dengan 16; pada",
      "Lebih kecil dari 0; dalam",
      "Sama dengan 0; pusat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk lingkaran $(x - a)^2 + (y - b)^2 = r^2$, jika hasil substitusi koordinat titik menghasilkan nilai yang lebih besar dari $r^2$, maka titik tersebut berada di luar lingkaran.",
      "steps": "1. Substitusikan titik $Q(2, 3)$ ke ruas kiri persamaan lingkaran:\n$$K = (2 - 1)^2 + (3 + 2)^2$$\n$$K = 1^2 + 5^2 = 1 + 25 = 26$$\n2. Bandingkan hasil perhitungan $K = 26$ dengan kuadrat jari-jari $r^2 = 16$:\n$$26 > 16$$\n3. Karena nilai substitusi lebih besar dari 16, titik $Q$ berada di luar lingkaran.\n4. Jadi, pernyataan yang benar adalah lebih besar dari 16 dan posisinya di luar lingkaran (pilihan A).",
      "pitfalls": "Salah menghitung bentuk $(3 + 2)^2$ menjadi $(3 - 2)^2 = 1$ akibat tidak cermat membaca tanda tambah."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Untuk lingkaran $(x - a)^2 + (y - b)^2 = r^2$, jika hasil substitusi koordinat titik menghasilkan nilai yang lebih besar dari $r^2$, maka titik tersebut berada di luar lingkaran."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Identifikasi Titik di Dalam Lingkaran",
    "difficulty": "mudah",
    "statement": "Titik koordinat berikut ini yang terletak di dalam daerah lingkaran $x^2 + y^2 = 20$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(2, 3)$",
      "$(4, 3)$",
      "$(2, 4)$",
      "$(5, 0)$",
      "$(-4, 3)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Suatu titik terletak di dalam lingkaran jika jarak dari titik tersebut ke titik pusat kurang dari panjang jari-jarinya, yaitu $x^2 + y^2 < r^2$.",
      "steps": "1. Uji titik $(2, 3)$:\n$$2^2 + 3^2 = 4 + 9 = 13$$\nKarena $13 < 20$, titik $(2, 3)$ berada di dalam lingkaran.\n2. Uji pilihan lainnya sebagai pembanding:\n- $(4, 3) \\implies 4^2 + 3^2 = 25 > 20$ (di luar)\n- $(2, 4) \\implies 2^2 + 4^2 = 20 = 20$ (pada lingkaran)\n- $(5, 0) \\implies 5^2 + 0^2 = 25 > 20$ (di luar)\n- $(-4, 3) \\implies (-4)^2 + 3^2 = 25 > 20$ (di luar)\n3. Jadi, titik yang berada di dalam lingkaran adalah $(2, 3)$ (pilihan A).",
      "pitfalls": "Terkecoh dengan titik $(2, 4)$ yang nilainya tepat sama dengan 20 (terletak pada batas kurva lingkaran, bukan di dalam)."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Suatu titik terletak di dalam lingkaran jika jarak dari titik tersebut ke titik pusat kurang dari panjang jari-jarinya, yaitu $x^2 + y^2 < r^2$. **Tips:** Terkecoh dengan titik $(2, 4)$ yang nilainya tepat sama dengan 20 (terletak pada batas kurva lingkaran, bukan di dalam)."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Kedudukan Garis Berdasarkan Nilai Diskriminan",
    "difficulty": "mudah",
    "statement": "Jika persamaan garis lurus disubstitusikan ke dalam persamaan lingkaran menghasilkan persamaan kuadrat sekutu dengan nilai diskriminan $D < 0$, maka kedudukan garis tersebut terhadap lingkaran adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Tidak memotong maupun menyinggung lingkaran (di luar)",
      "Memotong lingkaran di dua titik berbeda",
      "Menyinggung lingkaran di satu titik",
      "Membagi lingkaran menjadi dua juring sama besar",
      "Tepat melalui titik pusat lingkaran"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kedudukan garis terhadap lingkaran ditentukan oleh nilai diskriminan $D = b^2 - 4ac$ dari persamaan kuadrat persekutuan: $D > 0$ memotong di dua titik, $D = 0$ menyinggung di satu titik, dan $D < 0$ tidak memotong maupun menyinggung (di luar lingkaran).",
      "steps": "1. Tinjau interpretasi geometris dari diskriminan $D$:\n- $D > 0$: memiliki dua akar real berbeda, garis memotong lingkaran di dua titik.\n- $D = 0$: memiliki satu akar kembar real, garis menyinggung lingkaran di tepat satu titik.\n- $D < 0$: tidak memiliki akar real, garis tidak memiliki titik persekutuan dengan lingkaran.\n2. Berdasarkan data soal bahwa $D < 0$, maka garis tersebut berada sepenuhnya di luar lingkaran tanpa memotong atau menyinggung.\n3. Jadi, jawabannya adalah tidak memotong maupun menyinggung lingkaran (pilihan A).",
      "pitfalls": "Tertukar antara kondisi menyinggung ($D = 0$) dengan kondisi garis di luar lingkaran ($D < 0$)."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Kedudukan garis terhadap lingkaran ditentukan oleh nilai diskriminan $D = b^2 - 4ac$ dari persamaan kuadrat persekutuan: $D > 0$ memotong di dua titik, $D = 0$ menyinggung di satu titik, dan $D < 0$ tidak memotong maupun menyinggung (di luar lingkaran)."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Kedudukan Garis Horizontal terhadap Lingkaran Pusat Asal",
    "difficulty": "mudah",
    "statement": "Kedudukan garis lurus $y = 3$ terhadap lingkaran $x^2 + y^2 = 9$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Menyinggung lingkaran di satu titik",
      "Memotong lingkaran di dua titik berbeda",
      "Berada sepenuhnya di luar lingkaran",
      "Melalui titik pusat lingkaran",
      "Memotong lingkaran di titik asal"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis menyinggung lingkaran jika memiliki tepat satu titik potong persekutuan, yang terjadi ketika jarak garis ke titik pusat sama persis dengan panjang jari-jari lingkaran ($d = r$).",
      "steps": "1. Lingkaran $x^2 + y^2 = 9$ berpusat di $(0, 0)$ dengan jari-jari $r = \\sqrt{9} = 3$.\n2. Substitusikan persamaan garis $y = 3$ ke persamaan lingkaran:\n$$x^2 + 3^2 = 9$$\n$$x^2 + 9 = 9 \\implies x^2 = 0 \\implies x = 0$$\n3. Persamaan hanya menghasilkan satu solusi real kembar, yaitu $x = 0$, sehingga titik persekutuannya tunggal di $(0, 3)$.\n4. Karena hanya memiliki tepat satu titik persekutuan, maka garis tersebut menyinggung lingkaran.\n5. Jadi, kedudukannya adalah menyinggung lingkaran di satu titik (pilihan A).",
      "pitfalls": "Mengira garis memotong di dua titik karena terkecoh melihat angka $9$ dan $3$ tanpa menyubstitusikan ke persamaan."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Garis menyinggung lingkaran jika memiliki tepat satu titik potong persekutuan, yang terjadi ketika jarak garis ke titik pusat sama persis dengan panjang jari-jari lingkaran ($d = r$). **Tips:** Mengira garis memotong di dua titik karena terkecoh melihat angka $9$ dan $3$ tanpa menyubstitusikan ke persamaan."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Batas Parameter Titik di Luar Lingkaran",
    "difficulty": "sedang",
    "statement": "Nilai parameter $k$ agar titik $P(k, -2)$ terletak di luar lingkaran $x^2 + y^2 - 4x + 6y - 13 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$k < -3 \\text{ atau } k > 7$",
      "$-3 < k < 7$",
      "$k < -7 \\text{ atau } k > 3$",
      "$-7 < k < 3$",
      "$k < -3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik $(x_1, y_1)$ terletak di luar lingkaran umum $x^2 + y^2 + Ax + By + C = 0$ jika nilai kuasanya lebih besar dari nol, yaitu $x_1^2 + y_1^2 + Ax_1 + By_1 + C > 0$.",
      "steps": "1. Substitusikan titik $P(k, -2)$ ke dalam persamaan umum lingkaran:\n$$k^2 + (-2)^2 - 4(k) + 6(-2) - 13 > 0$$\n2. Sederhanakan pertidaksamaan kuadrat:\n$$k^2 + 4 - 4k - 12 - 13 > 0$$\n$$k^2 - 4k - 21 > 0$$\n3. Faktorkan bentuk kuadrat:\n$$(k - 7)(k + 3) > 0$$\n4. Tentukan pembuat nol yaitu $k = -3$ dan $k = 7$.\n5. Karena tanda pertidaksamaan lebih besar dari nol ($> 0$), daerah penyelesaian berada di luar interval pembuat nol:\n$$k < -3 \\text{ atau } k > 7$$\n6. Jadi, nilai $k$ yang memenuhi adalah $k < -3 \\text{ atau } k > 7$ (pilihan A).",
      "pitfalls": "Memilih daerah interval di antara kedua akar ($-3 < k < 7$), yang merupakan daerah untuk titik di dalam lingkaran."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Titik $(x_1, y_1)$ terletak di luar lingkaran umum $x^2 + y^2 + Ax + By + C = 0$ jika nilai kuasanya lebih besar dari nol, yaitu $x_1^2 + y_1^2 + Ax_1 + By_1 + C > 0$. **Tips:** Memilih daerah interval di antara kedua akar ($-3 < k < 7$), yang merupakan daerah untuk titik di dalam lingkaran."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Jarak Minimum Titik ke Kurva Lingkaran",
    "difficulty": "sedang",
    "statement": "Jarak terdekat dari titik $A(9, 14)$ ke kurva lingkaran $x^2 + y^2 - 6x - 12y + 20 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5",
      "10",
      "15",
      "$\\sqrt{5}$",
      "4"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak terdekat dari titik luar $A$ ke kurva lingkaran berpusat $P$ dengan jari-jari $r$ dirumuskan sebagai selisih jarak titik ke pusat dengan jari-jari lingkaran: $d_{\\text{min}} = |AP| - r$.",
      "steps": "1. Tentukan titik pusat dan jari-jari lingkaran:\n$$\\text{Pusat } P = \\left(-\\frac{-6}{2}, -\\frac{-12}{2}\\right) = (3, 6)$$\n$$r = \\sqrt{3^2 + 6^2 - 20} = \\sqrt{9 + 36 - 20} = \\sqrt{25} = 5$$\n2. Hitung jarak titik $A(9, 14)$ ke titik pusat $P(3, 6)$:\n$$|AP| = \\sqrt{(9 - 3)^2 + (14 - 6)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Hitung jarak terdekat ke kurva lingkaran:\n$$d_{\\text{min}} = |AP| - r = 10 - 5 = 5$$\n4. Jadi, jarak terdekatnya adalah 5 satuan (pilihan A).",
      "pitfalls": "Berhenti pada perhitungan jarak ke titik pusat ($|AP| = 10$) tanpa mengurangkannya dengan panjang jari-jari $r = 5$."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Jarak terdekat dari titik luar $A$ ke kurva lingkaran berpusat $P$ dengan jari-jari $r$ dirumuskan sebagai selisih jarak titik ke pusat dengan jari-jari lingkaran: $d_{\\text{min}} = |AP| - r$."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Panjang Tali Busur Perpotongan Garis",
    "difficulty": "sedang",
    "statement": "Garis $x - y + 1 = 0$ memotong lingkaran $x^2 + y^2 = 25$ di titik $A$ dan titik $B$. Panjang tali busur $AB$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7\\sqrt{2}$",
      "$5\\sqrt{2}$",
      "7",
      "$10\\sqrt{2}$",
      "$\\frac{7}{2}\\sqrt{2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang tali busur lingkaran yang dipotong oleh garis lurus dapat dihitung menggunakan teorema Pythagoras pada segitiga siku-siku antara jari-jari $r$, jarak garis ke pusat $d$, dan setengah tali busur: $|AB| = 2\\sqrt{r^2 - d^2}$.",
      "steps": "1. Identifikasi jari-jari lingkaran: $r = \\sqrt{25} = 5$ dengan pusat $O(0, 0)$.\n2. Hitung jarak tegak lurus pusat $(0, 0)$ ke garis $x - y + 1 = 0$:\n$$d = \\frac{|1(0) - 1(0) + 1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{1}{\\sqrt{2}}$$\n3. Kuadratkan nilai jarak:\n$$d^2 = \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}$$\n4. Hitung setengah panjang tali busur:\n$$\\frac{1}{2}|AB| = \\sqrt{r^2 - d^2} = \\sqrt{25 - \\frac{1}{2}} = \\sqrt{\\frac{49}{2}} = \\frac{7}{\\sqrt{2}} = \\frac{7}{2}\\sqrt{2}$$\n5. Kalikan dengan 2 untuk mendapatkan panjang tali busur utuh:\n$$|AB| = 2 \\times \\frac{7}{2}\\sqrt{2} = 7\\sqrt{2}$$\n6. Jadi, panjang tali busur $AB$ adalah $7\\sqrt{2}$ (pilihan A).",
      "pitfalls": "Lupa mengalikan 2 di akhir langkah sehingga memilih panjang setengah tali busur $\\frac{7}{2}\\sqrt{2}$."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Panjang tali busur lingkaran yang dipotong oleh garis lurus dapat dihitung menggunakan teorema Pythagoras pada segitiga siku-siku antara jari-jari $r$, jarak garis ke pusat $d$, dan setengah tali busur: $|AB| = 2\\sqrt{r^2 - d^2}$. **Tips:** Lupa mengalikan 2 di akhir langkah sehingga memilih panjang setengah tali busur $\\frac{7}{2}\\sqrt{2}$."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Syarat Garis Memotong Lingkaran di Dua Titik",
    "difficulty": "sedang",
    "statement": "Nilai konstanta $c$ agar garis $y = x + c$ memotong lingkaran $x^2 + y^2 = 8$ di dua titik yang berbeda adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-4 < c < 4$",
      "$c < -4 \\text{ atau } c > 4$",
      "$-8 < c < 8$",
      "$c < -8 \\text{ atau } c > 8$",
      "$-2 < c < 2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis memotong lingkaran di dua titik berbeda jika sistem persamaan keduanya menghasilkan persamaan kuadrat dengan nilai diskriminan $D > 0$.",
      "steps": "1. Substitusikan $y = x + c$ ke dalam persamaan lingkaran $x^2 + y^2 = 8$:\n$$x^2 + (x + c)^2 = 8$$\n$$x^2 + x^2 + 2cx + c^2 - 8 = 0$$\n$$2x^2 + 2cx + (c^2 - 8) = 0$$\n2. Terapkan syarat memotong di dua titik ($D > 0$):\n$$D = (2c)^2 - 4(2)(c^2 - 8) > 0$$\n$$4c^2 - 8c^2 + 64 > 0$$\n$$-4c^2 + 64 > 0$$\n3. Bagi kedua ruas dengan $-4$ (balikkan tanda ketaksamaan):\n$$c^2 - 16 < 0$$\n$$(c - 4)(c + 4) < 0$$\n4. Daerah penyelesaiannya adalah interval tertutup pembuat nol:\n$$-4 < c < 4$$\n5. Jadi, nilai konstanta $c$ yang memenuhi adalah $-4 < c < 4$ (pilihan A).",
      "pitfalls": "Lupa membalik tanda ketaksamaan saat membagi dengan bilangan negatif $-4$."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Garis memotong lingkaran di dua titik berbeda jika sistem persamaan keduanya menghasilkan persamaan kuadrat dengan nilai diskriminan $D > 0$. **Tips:** Lupa membalik tanda ketaksamaan saat membagi dengan bilangan negatif $-4$."
  },
  {
    "id": "mat-geo-lingkaran-kedudukan-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-kedudukan",
    "category": "Kedudukan Relatif Dua Lingkaran",
    "difficulty": "sedang",
    "statement": "Diketahui dua buah lingkaran $L_1 \\equiv (x - 1)^2 + (y - 2)^2 = 9$ dan $L_2 \\equiv (x - 7)^2 + (y - 10)^2 = 16$. Kedudukan relatif antara kedua lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Saling terpisah di luar (saling lepas)",
      "Bersinggungan di luar",
      "Berpotongan di dua titik",
      "Bersinggungan di dalam",
      "Berada di dalam tanpa bersinggungan (konsentris)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kedudukan dua lingkaran ditentukan dengan membandingkan jarak antarpusat $d = |P_1 P_2|$ terhadap jumlah atau selisih panjang jari-jari: jika $d > r_1 + r_2$, maka kedua lingkaran saling terpisah di luar (saling lepas).",
      "steps": "1. Identifikasi pusat dan jari-jari masing-masing lingkaran:\n- $L_1$: Pusat $P_1(1, 2)$ dan jari-jari $r_1 = \\sqrt{9} = 3$\n- $L_2$: Pusat $P_2(7, 10)$ dan jari-jari $r_2 = \\sqrt{16} = 4$\n2. Hitung jarak antara kedua titik pusat $P_1$ dan $P_2$:\n$$d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Hitung jumlah kedua jari-jari:\n$$r_1 + r_2 = 3 + 4 = 7$$\n4. Bandingkan jarak pusat terhadap jumlah jari-jari:\n$$d = 10 > 7 = r_1 + r_2$$\n5. Karena $d > r_1 + r_2$, maka kedua lingkaran saling terpisah di luar (saling lepas).\n6. Jadi, kedudukannya adalah saling terpisah di luar (pilihan A).",
      "pitfalls": "Terkecoh menyimpulkan bersinggungan di luar ($d = r_1 + r_2$) tanpa menghitung jarak riil antarpusat."
    },
    "subTopicSlug": "kedudukan-titik-dan-garis",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Kedudukan Titik dan Garis",
    "subTopic": "Kedudukan Titik dan Garis",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Kedudukan dua lingkaran ditentukan dengan membandingkan jarak antarpusat $d = |P_1 P_2|$ terhadap jumlah atau selisih panjang jari-jari: jika $d > r_1 + r_2$, maka kedua lingkaran saling terpisah di luar (saling lepas). **Tips:** Terkecoh menyimpulkan bersinggungan di luar ($d = r_1 + r_2$) tanpa menghitung jarak riil antarpusat."
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
