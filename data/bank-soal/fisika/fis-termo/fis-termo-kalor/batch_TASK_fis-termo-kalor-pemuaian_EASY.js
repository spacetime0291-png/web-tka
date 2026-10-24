/**
 * Batch Task: TASK_fis-termo-kalor-pemuaian_EASY
 * SubTopic: Pemuaian Zat (fis-termo-kalor-pemuaian)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-kalor-pemuaian-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pemuaian Panjang Benda Padat",
    difficulty: "mudah",
    statement: "Sebuah kawat tembaga dengan panjang mula-mula $100\\text{ cm}$ dipanaskan sehingga suhunya naik sebesar $50^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, pertambahan panjang kawat tembaga tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}085\\text{ mm}$",
      "$0{,}85\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$17{,}0\\text{ mm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pertambahan panjang zat padat akibat kenaikan suhu dirumuskan oleh hukum pemuaian panjang:<br>$$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$<br>dengan $L_0$ adalah panjang mula-mula, $\\alpha$ koefisien muai panjang, dan $\\Delta T$ perubahan suhu.",
      steps: "1. Identifikasi nilai yang diketahui:<br>$L_0 = 100\\text{ cm} = 1\\text{ m} = 1000\\text{ mm}$<br>$\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$<br>$\\Delta T = 50^\\circ\\text{C}$<br>2. Hitung pertambahan panjang $\\Delta L$:<br>$$\\Delta L = 1000\\text{ mm} \\times 1{,}7 \\times 10^{-5}/^\\circ\\text{C} \\times 50^\\circ\\text{C} = 0{,}85\\text{ mm}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Perhatikan satuan hasil akhir. $0{,}85\\text{ mm} = 0{,}085\\text{ cm} = 8{,}5 \\times 10^{-4}\\text{ m}$. Kesalahan konversi satuan panjang sering kali menyebabkan salah memilih antara opsi A dan B."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Koefisien Muai Zat Padat",
    difficulty: "mudah",
    statement: "Suatu bahan logam isotropik memiliki koefisien muai panjang sebesar $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Besar koefisien muai volume ($\\gamma$) dari logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}4 \\times 10^{-5}/^\\circ\\text{C}$",
      "$1{,}2 \\times 10^{-5}/^\\circ\\text{C}$",
      "$2{,}4 \\times 10^{-5}/^\\circ\\text{C}$",
      "$3{,}6 \\times 10^{-5}/^\\circ\\text{C}$",
      "$4{,}8 \\times 10^{-5}/^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Untuk benda padat isotropik (memiliki sifat fisis seragam ke segala arah), hubungan antara koefisien muai panjang ($\\alpha$), koefisien muai luas ($\\beta$), dan koefisien muai volume ($\\gamma$) adalah:<br>$$\\beta = 2\\alpha \\quad \\text{dan} \\quad \\gamma = 3\\alpha$$",
      steps: "1. Diketahui nilai koefisien muai panjang $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$.<br>2. Hitung koefisien muai volume $\\gamma$:<br>$$\\gamma = 3\\alpha = 3 \\times (1{,}2 \\times 10^{-5}/^\\circ\\text{C}) = 3{,}6 \\times 10^{-5}/^\\circ\\text{C}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan tertukar dengan koefisien muai luas $\\beta = 2\\alpha = 2{,}4 \\times 10^{-5}/^\\circ\\text{C}$ (opsi C). Muai volume mewakili pemuaian pada tiga dimensi ruang sehingga faktor pengalinya adalah 3."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pemuaian Luas Keping Logam",
    difficulty: "mudah",
    statement: "Sekeping pelat aluminium memiliki luas $2\\text{ m}^2$ pada suhu $25^\\circ\\text{C}$. Pelat tersebut dipanaskan secara merata hingga suhunya mencapai $75^\\circ\\text{C}$. Jika koefisien muai panjang aluminium $\\alpha = 2{,}4 \\times 10^{-5}/^\\circ\\text{C}$, luas akhir pelat aluminium setelah dipanaskan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}0012\\text{ m}^2$",
      "$2{,}0024\\text{ m}^2$",
      "$2{,}0048\\text{ m}^2$",
      "$2{,}0240\\text{ m}^2$",
      "$2{,}0480\\text{ m}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pemuaian luas benda padat memenuhi persamaan:<br>$$\\Delta A = A_0 \\times \\beta \\times \\Delta T \\quad \\text{dengan} \\quad \\beta = 2\\alpha$$<br>Luas akhir benda setelah pemuaian adalah $A = A_0 + \\Delta A$.",
      steps: "1. Hitung selisih suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.<br>2. Hitung koefisien muai luas:<br>$$\\beta = 2\\alpha = 2 \\times 2{,}4 \\times 10^{-5}/^\\circ\\text{C} = 4{,}8 \\times 10^{-5}/^\\circ\\text{C}$$<br>3. Hitung pertambahan luas $\\Delta A$:<br>$$\\Delta A = 2\\text{ m}^2 \\times 4{,}8 \\times 10^{-5}/^\\circ\\text{C} \\times 50^\\circ\\text{C} = 4{,}8 \\times 10^{-3}\\text{ m}^2 = 0{,}0048\\text{ m}^2$$<br>4. Hitung luas akhir $A$:<br>$$A = 2 + 0{,}0048 = 2{,}0048\\text{ m}^2$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Kesalahan umum adalah lupa mengalikan $\\alpha$ dengan 2 untuk mendapatkan koefisien muai luas $\\beta$, sehingga menghasilkan pertambahan $0{,}0024\\text{ m}^2$ (opsi B)."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Pemuaian Volume Kubus Logam",
    difficulty: "mudah",
    statement: "Sebuah kubus besi pejal dengan panjang rusuk awal $10\\text{ cm}$ dipanaskan dari suhu $30^\\circ\\text{C}$ sampai $130^\\circ\\text{C}$. Jika koefisien muai panjang besi adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$, pertambahan volume kubus besi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}2\\text{ cm}^3$",
      "$2{,}4\\text{ cm}^3$",
      "$3{,}6\\text{ cm}^3$",
      "$4{,}8\\text{ cm}^3$",
      "$7{,}2\\text{ cm}^3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pertambahan volume pada pemuaian zat padat dinyatakan oleh:<br>$$\\Delta V = V_0 \\times \\gamma \\times \\Delta T \\quad \\text{dengan} \\quad \\gamma = 3\\alpha$$",
      steps: "1. Hitung volume awal kubus: $V_0 = s^3 = (10\\text{ cm})^3 = 1000\\text{ cm}^3$.<br>2. Perubahan suhu: $\\Delta T = 130^\\circ\\text{C} - 30^\\circ\\text{C} = 100^\\circ\\text{C}$.<br>3. Koefisien muai volume besi: $\\gamma = 3\\alpha = 3 \\times 1{,}2 \\times 10^{-5} = 3{,}6 \\times 10^{-5}/^\\circ\\text{C}$.<br>4. Hitung $\\Delta V$:<br>$$\\Delta V = 1000 \\times 3{,}6 \\times 10^{-5} \\times 100 = 3{,}6\\text{ cm}^3$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Lupa mengalikan dengan 3 (hanya menggunakan $\\alpha$) akan menghasilkan $\\Delta V = 1{,}2\\text{ cm}^3$ (opsi A). Kubus memiliki pemuaian volume sehingga wajib menggunakan $\\gamma = 3\\alpha$."
    }
  },
  {
    id: "fis-termo-kalor-pemuaian-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-pemuaian",
    category: "Aplikasi Bimetal",
    difficulty: "mudah",
    statement: "Dua keping logam tipis X dan Y dengan panjang awal sama direkatkan erat membentuk keping bimetal. Koefisien muai panjang logam X lebih besar daripada koefisien muai panjang logam Y ($\\alpha_X > \\alpha_Y$). Jika keping bimetal tersebut dipanaskan hingga suhunya naik secara merata, peristiwa yang terjadi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Bimetal tetap lurus karena kedua logam saling menahan pemuaian",
      "Bimetal membengkok ke arah logam Y karena logam X memanjang lebih besar",
      "Bimetal membengkok ke arah logam X karena logam Y memanjang lebih besar",
      "Bimetal terlepas rekatannya tanpa mengalami pembengkokan",
      "Bimetal berputar membentuk lingkaran tertutup secara simetris"
    ],
    correctIndex: 1,
    solution: {
      concept: "Keping bimetal bekerja berdasarkan perbedaan koefisien muai panjang dua logam yang disatukan:<br>- Saat dipanaskan, logam dengan $\\alpha$ lebih besar akan memanjang lebih banyak sehingga berada pada sisi luar lengkungan (sisi cembung). Akibatnya, bimetal melengkung/membengkok ke arah logam yang memiliki $\\alpha$ lebih kecil.<br>- Sebaliknya saat didinginkan, logam dengan $\\alpha$ lebih besar menyusut lebih banyak sehingga bimetal membengkok ke arah logam dengan $\\alpha$ lebih besar.",
      steps: "1. Diketahui $\\alpha_X > \\alpha_Y$.<br>2. Saat bimetal dipanaskan, logam X mengalami pemuaian panjang lebih besar daripada logam Y ($\\Delta L_X > \\Delta L_Y$).<br>3. Karena kedua logam terikat erat, logam X akan membentuk sisi luar yang lebih panjang dan mendesak bimetal membengkok ke sisi logam Y.<br>4. Jadi, bimetal membengkok ke arah logam Y.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan terbalik dengan peristiwa pendinginan. Saat didinginkan, logam X menyusut lebih banyak sehingga bimetal justru membengkok ke arah logam X."
    }
  }
];
