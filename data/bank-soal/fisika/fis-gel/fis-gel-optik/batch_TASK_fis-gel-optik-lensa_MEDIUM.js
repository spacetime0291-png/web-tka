/**
 * Batch Task: TASK_fis-gel-optik-lensa_MEDIUM
 * SubTopic: Lensa Cekung dan Cembung (fis-gel-optik-lensa)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-lensa-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah lensa cembung ganda (bikonveks) terbuat dari bahan kaca berindeks bias $n_l = 1{,}5$. Jari-jari kelengkungan kedua permukaannya sama yaitu $R_1 = R_2 = 20\\text{ cm}$. Jika lensa tersebut berada di udara ($n_u = 1$), jarak fokus lensa tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$40\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rumus pembuat lensa (Lensmaker's Equation) untuk lensa bikonveks di udara:<br>$$\\frac{1}{f} = \\left(\\frac{n_l}{n_u} - 1\\right) \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$$<br>Untuk permukaan pertama cembung $R_1 > 0$, dan permukaan kedua cembung $R_2 > 0$ dalam bentuk penjumlahan tanda kelengkungan.",
      steps: "1. Diketahui $n_l = 1{,}5$, $n_u = 1$, dan $R_1 = R_2 = 20\\text{ cm}$.<br>2. Masukkan ke rumus pembuat lensa:<br>$$\\frac{1}{f} = (1{,}5 - 1) \\left(\\frac{1}{20} + \\frac{1}{20}\\right) = 0{,}5 \\times \\frac{2}{20} = 0{,}5 \\times \\frac{1}{10} = \\frac{1}{20}$$<br>3. Diperoleh jarak fokus:<br>$$f = 20\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Untuk lensa bikonveks simetris dengan indeks bias kaca standar $n = 1{,}5$, jarak fokus selalu sama dengan jari-jari kelengkungannya ($f = R$)."
    }
  },
  {
    id: "fis-gel-optik-lensa-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah lensa cembung memiliki jarak fokus $15\\text{ cm}$ di udara ($n_u = 1$). Indeks bias bahan lensa tersebut adalah $n_l = 1{,}5$. Jika lensa tersebut dicelupkan ke dalam air yang memiliki indeks bias $n_c = \\frac{4}{3}$, jarak fokus lensa di dalam air menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$",
      "$75\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Perbandingan jarak fokus lensa di dalam suatu zat cair ($f_c$) terhadap jarak fokusnya di udara ($f_u$) dirumuskan:<br>$$\\frac{f_c}{f_u} = \\frac{\\frac{n_l}{n_u} - 1}{\\frac{n_l}{n_c} - 1}$$",
      steps: "1. Hitung faktor pembilang di udara:<br>$$\\frac{n_l}{n_u} - 1 = 1{,}5 - 1 = 0{,}5 = \\frac{1}{2}$$<br>2. Hitung faktor penyebut di air:<br>$$\\frac{n_l}{n_c} - 1 = \\frac{1{,}5}{\\frac{4}{3}} - 1 = \\frac{9}{8} - 1 = \\frac{1}{8}$$<br>3. Hitung rasio jarak fokus:<br>$$\\frac{f_c}{15} = \\frac{\\frac{1}{2}}{\\frac{1}{8}} = \\frac{8}{2} = 4 \\implies f_c = 4 \\times 15 = 60\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Ketika dicelupkan ke dalam medium dengan indeks bias lebih rapat (seperti air), perbedaan indeks bias mengecil sehingga daya pembiasan lensa melemah dan jarak fokusnya memanjang secara signifikan."
    }
  },
  {
    id: "fis-gel-optik-lensa-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Dua buah lensa tipis disusun bersentuhan sesumbu. Lensa pertama adalah lensa cembung dengan jarak fokus $25\\text{ cm}$, sedangkan lensa kedua adalah lensa cekung dengan jarak fokus $50\\text{ cm}$. Kuat lensa sistem gabungan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+1\\text{ dioptri}$",
      "$+2\\text{ dioptri}$",
      "$+3\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+6\\text{ dioptri}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Daya lensa gabungan ($P_{\\text{gab}}$) dari dua lensa tipis yang bersentuhan adalah penjumlahan aljabar dari daya masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2 = \\frac{100}{f_1} + \\frac{100}{f_2}$$<br>Ingat bahwa fokus lensa cekung bertanda negatif ($f_2 < 0$).",
      steps: "1. Hitung daya lensa pertama (cembung):<br>$$P_1 = \\frac{100}{+25} = +4\\text{ dioptri}$$<br>2. Hitung daya lensa kedua (cekung):<br>$$P_2 = \\frac{100}{-50} = -2\\text{ dioptri}$$<br>3. Jumlahkan kedua daya:<br>$$P_{\\text{gab}} = +4 + (-2) = +2\\text{ dioptri}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan menjumlahkan kedua nilai secara positif (+4 + 2 = +6 D, opsi E). Lensa cekung memiliki daya negatif yang mengurangi kekuatan konvergensi lensa cembung."
    }
  },
  {
    id: "fis-gel-optik-lensa-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah lensa cembung yang memiliki jarak fokus $12\\text{ cm}$ digunakan untuk menghasilkan bayangan tegak maya yang berukuran $3$ kali ukuran bendanya. Jarak benda dari permukaan lensa tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$16\\text{ cm}$",
      "$24\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bayangan tegak pada lensa cembung selalu bersifat maya dan berada di depan lensa ($s' < 0$):<br>$$M = -\\frac{s'}{s} = 3 \\implies s' = -3s$$",
      steps: "1. Substitusikan $s' = -3s$ dan $f = +12\\text{ cm}$ ke persamaan lensa:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{12} = \\frac{1}{s} - \\frac{1}{3s}$$<br>2. Sederhanakan ruas kanan:<br>$$\\frac{1}{12} = \\frac{3 - 1}{3s} = \\frac{2}{3s}$$<br>3. Kalikan silang:<br>$$3s = 2 \\times 12 = 24 \\implies s = 8\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jika keliru menggunakan bayangan nyata ($s' = +3s$), diperoleh $\\frac{1}{12} = \\frac{4}{3s} \\implies s = 16\\text{ cm}$ (opsi D). Bayangan nyata pada lensa cembung selalu terbalik, bukan tegak."
    }
  },
  {
    id: "fis-gel-optik-lensa-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-lensa",
    category: "Lensa Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah benda nyata dan sebuah layar diletakkan terpisah pada jarak tetap $100\\text{ cm}$. Sebuah lensa cembung dengan jarak fokus $21\\text{ cm}$ diletakkan di antara benda dan layar. Agar bayangan nyata yang tajam tertangkap di layar, posisi lensa cembung dapat diletakkan dari benda pada jarak ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ cm}$ atau $80\\text{ cm}$",
      "$25\\text{ cm}$ atau $75\\text{ cm}$",
      "$30\\text{ cm}$ atau $70\\text{ cm}$",
      "$35\\text{ cm}$ atau $65\\text{ cm}$",
      "$40\\text{ cm}$ atau $60\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada metode kedudukan ganda (Metode Bessel), jarak benda ke layar adalah $D = s + s' = 100\\text{ cm}$, sehingga $s' = 100 - s$. Persamaan lensa menjadi:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{D - s} = \\frac{D}{s(D - s)}$$",
      steps: "1. Masukkan $D = 100\\text{ cm}$ dan $f = 21\\text{ cm}$:<br>$$\\frac{1}{21} = \\frac{100}{s(100 - s)}$$<br>2. Bentuk persamaan kuadrat:<br>$$s(100 - s) = 2100 \\implies 100s - s^2 = 2100 \\implies s^2 - 100s + 2100 = 0$$<br>3. Faktorkan persamaan kuadrat:<br>$$(s - 30)(s - 70) = 0$$<br>4. Diperoleh dua kemungkinan posisi lensa: $s = 30\\text{ cm}$ (diperbesar) atau $s = 70\\text{ cm}$ (diperkecil).<br>5. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Perhatikan prinsip reversibilitas cahaya: dua posisi yang simetris dari titik tengah ($50 \\pm 20\\text{ cm}$) selalu menghasilkan bayangan nyata yang terfokus tajam di layar."
    }
  }
];
