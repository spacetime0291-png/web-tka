/**
 * Batch Task: TASK_fis-gel-optik-pantul_EASY
 * SubTopic: Pemantulan Cahaya (fis-gel-optik-pantul)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-optik-pantul-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "mudah",
    statement: "Seberkas sinar laser diarahkan menuju sebuah cermin datar dan membentuk sudut $30^\\circ$ terhadap permukaan bidang cermin. Besar sudut pantul sinar tersebut terhadap garis normal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$120^\\circ$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan Hukum Pemantulan Cahaya (Hukum Snellius):<br>1. Sinar datang, sinar pantul, dan garis normal terletak pada satu bidang datar.<br>2. Sudut datang ($i$) sama dengan sudut pantul ($r$), dengan sudut selalu diukur relatif terhadap <strong>garis normal</strong> (bukan terhadap bidang cermin).<br>$$i = r$$",
      steps: "1. Garis normal tegak lurus ($90^\\circ$) terhadap permukaan cermin.<br>2. Sinar membentuk sudut $30^\\circ$ terhadap bidang cermin, sehingga sudut datang terhadap garis normal adalah:<br>$$i = 90^\\circ - 30^\\circ = 60^\\circ$$<br>3. Berdasarkan hukum pemantulan, sudut pantul sama dengan sudut datang:<br>$$r = i = 60^\\circ$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jebakan paling sering adalah langsung menganggap sudut terhadap bidang cermin ($30^\\circ$) sebagai sudut datang/pantul (opsi A). Sudut datang selalu diukur terhadap garis normal."
    }
  },
  {
    id: "fis-gel-optik-pantul-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "mudah",
    statement: "Karakteristik bayangan yang dihasilkan oleh sebuah cermin datar dari sebuah benda nyata yang diletakkan di depannya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Maya, tegak, sama besar, dan jarak bayangan ke cermin sama dengan jarak benda ke cermin",
      "Nyata, terbalik, sama besar, dan terletak di depan cermin",
      "Maya, tegak, diperbesar, dan terletak di belakang cermin",
      "Nyata, tegak, diperkecil, dan terletak di depan cermin",
      "Maya, terbalik, sama besar, dan terletak di belakang cermin"
    ],
    correctIndex: 0,
    solution: {
      concept: "Cermin datar membentuk bayangan melalui perpanjangan sinar-sinar pantul di belakang cermin. Sifat bayangan cermin datar:<br>1. Maya (terbentuk di belakang cermin, tidak dapat ditangkap layar).<br>2. Tegak dan tertukar sisi kiri-kanan (lateral inversion).<br>3. Sama besar dengan bendanya ($M = 1$).<br>4. Jarak bayangan ke cermin sama dengan jarak benda ke cermin ($|s'| = s$).",
      steps: "1. Tinjau setiap sifat pada pilihan jawaban.<br>2. Opsi A mencakup seluruh karakteristik cermin datar dengan tepat dan akurat.<br>3. Pilihan yang benar adalah A.",
      pitfalls: "Jangan mengira bayangan cermin datar bersifat nyata. Karena bayangan berada di belakang permukaan cermin dan berasal dari perpanjangan berkas sinar pantul, sifatnya adalah maya."
    }
  },
  {
    id: "fis-gel-optik-pantul-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "mudah",
    statement: "Dua buah cermin datar disusun saling berhadapan membentuk sudut apit sebesar $60^\\circ$. Sebuah lilin yang menyala diletakkan di antara kedua cermin tersebut. Banyaknya bayangan lilin yang dapat teramati adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$6$",
      "$7$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Jumlah bayangan ($n$) yang dibentuk oleh dua cermin datar yang saling membentuk sudut apit $\\alpha$ dihitung dengan persamaan:<br>$$n = \\frac{360^\\circ}{\\alpha} - 1$$",
      steps: "1. Substitusikan sudut apit $\\alpha = 60^\\circ$:<br>$$n = \\frac{360^\\circ}{60^\\circ} - 1$$<br>2. Hitung pembagian:<br>$$n = 6 - 1 = 5$$<br>3. Jumlah bayangan yang terbentuk adalah 5 bayangan.<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Lupa mengurangi angka 1 adalah kesalahan yang sangat umum, sehingga memilih angka 6 (opsi D). Angka 1 dikurangkan karena satu posisi ditempati oleh benda nyatanya sendiri."
    }
  },
  {
    id: "fis-gel-optik-pantul-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "mudah",
    statement: "Sebuah benda diletakkan pada jarak $15\\text{ cm}$ di depan sebuah cermin cekung yang memiliki jari-jari kelengkungan $20\\text{ cm}$. Jarak bayangan yang terbentuk terhadap cermin cekung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$40\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada cermin cekung, jarak fokus bernilai positif dan sama dengan setengah jari-jari kelengkungan ($f = \\frac{R}{2}$). Hubungan antara jarak benda ($s$), jarak fokus ($f$), dan jarak bayangan ($s'$) adalah:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$",
      steps: "1. Hitung jarak fokus: $f = \\frac{R}{2} = \\frac{20\\text{ cm}}{2} = +10\\text{ cm}$.<br>2. Substitusikan $s = 15\\text{ cm}$ dan $f = 10\\text{ cm}$:<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{10} - \\frac{1}{15}$$<br>3. Samakan penyebut KPK 30:<br>$$\\frac{1}{s'} = \\frac{3 - 2}{30} = \\frac{1}{30} \\implies s' = +30\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Kesalahan umum adalah menganggap jari-jari kelengkungan ($R$) langsung sebagai jarak fokus ($f$), sehingga salah menghitung $\\frac{1}{s'} = \\frac{1}{20} - \\frac{1}{15}$."
    }
  },
  {
    id: "fis-gel-optik-pantul-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-pantul",
    category: "Pemantulan Cahaya",
    difficulty: "mudah",
    statement: "Sebuah mobil dipasangi kaca spion cembung dengan jari-jari kelengkungan $40\\text{ cm}$. Sebuah sepeda motor berada di belakang mobil pada jarak $60\\text{ cm}$ dari cermin spion tersebut. Sifat bayangan sepeda motor yang teramati pada kaca spion adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Maya, tegak, dan diperkecil",
      "Maya, tegak, dan diperbesar",
      "Nyata, terbalik, dan diperkecil",
      "Nyata, terbalik, dan diperbesar",
      "Maya, terbalik, dan sama besar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Cermin cembung memiliki titik fokus negatif ($f = -R/2$). Untuk semua posisi benda nyata di depan cermin cembung ($s > 0$):<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} < 0$$<br>Nilai $s'$ selalu negatif (maya), bayangan selalu tegak ($M > 0$), dan $|s'| < s$ sehingga $|M| < 1$ (diperkecil).",
      steps: "1. Fokus cermin cembung: $f = -\\frac{40}{2} = -20\\text{ cm}$.<br>2. Hitung jarak bayangan:<br>$$\\frac{1}{s'} = \\frac{1}{-20} - \\frac{1}{60} = -\\frac{3}{60} - \\frac{1}{60} = -\\frac{4}{60} \\implies s' = -15\\text{ cm}$$<br>3. Tanda minus membuktikan bayangan bersifat maya.<br>4. Perbesaran: $M = \\left|\\frac{s'}{s}\\right| = \\frac{15}{60} = \\frac{1}{4}$ (tegak dan diperkecil).<br>5. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Kaca spion kendaraan selalu menggunakan cermin cembung karena sifat bayangannya yang selalu maya, tegak, dan diperkecil sehingga memberikan jangkauan bidang pandang yang jauh lebih luas."
    }
  }
];
