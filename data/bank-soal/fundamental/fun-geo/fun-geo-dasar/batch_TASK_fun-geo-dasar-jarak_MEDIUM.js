/**
 * Batch Task: TASK_fun-geo-dasar-jarak_MEDIUM
 * SubTopic: Geometri Dasar: Jarak Titik ke Garis (fun-geo-dasar-jarak)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-geo-dasar-jarak-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Titik ke Garis Bentuk Eksplisit",
    difficulty: "sedang",
    statement: "Jarak tegak lurus dari titik $P(3, 2)$ ke garis dengan persamaan $y = 2x - 1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{5}\\sqrt{5}$",
      "$\\frac{2}{5}\\sqrt{5}$",
      "$\\frac{3}{5}\\sqrt{5}$",
      "$\\sqrt{5}$",
      "$\\frac{6}{5}\\sqrt{5}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Sebelum menerapkan rumus jarak titik ke garis, ubah terlebih dahulu persamaan garis bentuk eksplisit $y = mx + c$ menjadi bentuk umum implisit $Ax + By + C = 0$.",
      steps: "1. Ubah persamaan garis $y = 2x - 1$ ke bentuk implisit:\n$$2x - y - 1 = 0$$\nDiperoleh koefisien $A = 2$, $B = -1$, dan $C = -1$.\n2. Substitusikan titik $P(x_0, y_0) = (3, 2)$ ke rumus jarak titik ke garis:\n$$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|2(3) - 1(2) - 1|}{\\sqrt{2^2 + (-1)^2}}$$\n3. Sederhanakan bagian pembilang dan penyebut:\n$$\\text{Pembilang} = |6 - 2 - 1| = |3| = 3$$\n$$\\text{Penyebut} = \\sqrt{4 + 1} = \\sqrt{5}$$\n4. Rasionalkan penyebut pecahan:\n$$d = \\frac{3}{\\sqrt{5}} = \\frac{3}{5}\\sqrt{5}$$\n5. Jadi, jarak tegak lurus titik $P$ ke garis adalah $\\frac{3}{5}\\sqrt{5}$ (pilihan C).",
      pitfalls: "Lupa merasionalkan penyebut pecahan $\\frac{3}{\\sqrt{5}}$ atau salah mengubah tanda saat memindahkan suku $y$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Jarak Antara Dua Garis Sejajar",
    difficulty: "sedang",
    statement: "Jarak antara dua garis sejajar $3x + 4y - 6 = 0$ dan $3x + 4y + 14 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$\\frac{8}{5}$",
      "$5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jarak antara dua garis sejajar $Ax + By + C_1 = 0$ dan $Ax + By + C_2 = 0$ dirumuskan sebagai $d = \\frac{|C_2 - C_1|}{\\sqrt{A^2 + B^2}}$.",
      steps: "1. Pastikan kedua garis memiliki koefisien $A$ dan $B$ yang identik:\n$$A = 3, \\quad B = 4, \\quad C_1 = -6, \\quad C_2 = 14$$\n2. Hitung selisih mutlak kedua konstanta:\n$$|C_2 - C_1| = |14 - (-6)| = |14 + 6| = 20$$\n3. Hitung panjang normal garis:\n$$\\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$\n4. Hitung jarak kedua garis:\n$$d = \\frac{20}{5} = 4$$\n5. Jadi, jarak antara kedua garis sejajar tersebut adalah $4$ satuan (pilihan C).",
      pitfalls: "Mengurangkan konstanta tanpa memperhatikan tanda negatif $14 - 6 = 8$ sehingga menghasilkan jarak $\\frac{8}{5}$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Menentukan Nilai Parameter dari Jarak yang Diketahui",
    difficulty: "sedang",
    statement: "Titik $A(k, 1)$ berjarak $2$ satuan panjang dari garis $3x - 4y + 2 = 0$. Jika $k$ bernilai positif ($k > 0$), maka nilai dari $k$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$\\frac{8}{3}$",
      "$5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan jarak memuat nilai mutlak $|Ax_0 + By_0 + C| = d \\sqrt{A^2 + B^2}$ yang menghasilkan dua kemungkinan nilai variabel.",
      steps: "1. Masukkan titik $A(k, 1)$ dan jarak $d = 2$ ke rumus jarak:\n$$2 = \\frac{|3(k) - 4(1) + 2|}{\\sqrt{3^2 + (-4)^2}}$$\n2. Sederhanakan bentuk di bawah tanda mutlak dan penyebut:\n$$2 = \\frac{|3k - 2|}{5}$$\n3. Kalikan silang:\n$$|3k - 2| = 10$$\n4. Pecah persamaan nilai mutlak:\n$$3k - 2 = 10 \\implies 3k = 12 \\implies k = 4$$\n$$3k - 2 = -10 \\implies 3k = -8 \\implies k = -\\frac{8}{3}$$\n5. Karena disyaratkan $k > 0$, maka nilai yang memenuhi adalah $k = 4$ (pilihan C).",
      pitfalls: "Mengabaikan persamaan nilai mutlak negatif sehingga tidak menyadari adanya dua kemungkinan solusi matematis."
    }
  },
  {
    id: "fun-geo-dasar-jarak-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Aplikasi Jarak Garis Singgung Lingkaran",
    difficulty: "sedang",
    statement: "Sebuah lingkaran berpusat di titik $P(2, -1)$ dan menyinggung garis $3x + 4y - 12 = 0$. Jari-jari lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$\\frac{5}{2}$",
      "$3$",
      "$4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Garis singgung lingkaran selalu tegak lurus terhadap jari-jari yang ditarik ke titik singgung, sehingga jari-jari lingkaran sama dengan jarak titik pusat ke garis singgung tersebut.",
      steps: "1. Substitusikan koordinat pusat $P(2, -1)$ ke persamaan garis $3x + 4y - 12 = 0$:\n$$|Ax_0 + By_0 + C| = |3(2) + 4(-1) - 12|$$\n$$= |6 - 4 - 12| = |-10| = 10$$\n2. Hitung panjang normal garis:\n$$\\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$\n3. Hitung panjang jari-jari lingkaran ($r$):\n$$r = d = \\frac{10}{5} = 2$$\n4. Jadi, panjang jari-jari lingkaran tersebut adalah $2$ satuan (pilihan B).",
      pitfalls: "Salah menghitung nilai di dalam tanda mutlak akibat tanda minus pada $-1$ dan $-12$."
    }
  },
  {
    id: "fun-geo-dasar-jarak-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-geo",
    subChapterId: "fun-geo-dasar",
    subTopicId: "fun-geo-dasar-jarak",
    category: "Menghitung Panjang Garis Tinggi Segitiga Koordinat",
    difficulty: "sedang",
    statement: "Sebuah segitiga memiliki titik-titik sudut di $A(0, 0)$, $B(4, 0)$, dan $C(2, 3)$. Panjang garis tinggi yang ditarik dari titik sudut $C$ ke sisi alas $AB$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$\\frac{5}{2}$",
      "$3$",
      "$\\sqrt{13}$",
      "$4$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Panjang garis tinggi dari suatu titik sudut ke sisi alas adalah jarak tegak lurus dari titik sudut tersebut ke garis yang memuat sisi alas.",
      steps: "1. Titik $A(0, 0)$ dan $B(4, 0)$ terletak pada sumbu-$X$, sehingga persamaan garis alas $AB$ adalah garis horizontal $y = 0$.\n2. Garis tinggi ditarik dari titik $C(2, 3)$ tegak lurus ke garis $y = 0$.\n3. Jarak titik $(x_0, y_0) = (2, 3)$ ke garis $y = 0$ adalah:\n$$t = |y_0 - 0| = |3 - 0| = 3$$\n4. Jadi, panjang garis tinggi tersebut adalah $3$ satuan (pilihan C).",
      pitfalls: "Menghitung panjang sisi miring segitiga $AC = \\sqrt{2^2 + 3^2} = \\sqrt{13}$ alih-alih panjang garis tingginya."
    }
  }
];
