/**
 * Batch Task: TASK_fis-gel-optik-cermin_MEDIUM
 * SubTopic: Cermin Datar, Cekung, dan Cembung (fis-gel-optik-cermin)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-cermin-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah cermin cekung memiliki jarak fokus $15\\text{ cm}$. Agar terbentuk bayangan nyata dengan ukuran $3$ kali ukuran bendanya, benda harus diletakkan di depan cermin pada jarak ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bayangan nyata pada cermin cekung berada di depan cermin ($s' > 0$) dan bersifat terbalik. Hubungan perbesaran bayangan nyata:<br>$$M = \\frac{s'}{s} = 3 \\implies s' = 3s$$<br>Persamaan cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$",
      steps: "1. Substitusikan $s' = 3s$ dan $f = 15\\text{ cm}$:<br>$$\\frac{1}{15} = \\frac{1}{s} + \\frac{1}{3s}$$<br>2. Samakan penyebut di ruas kanan:<br>$$\\frac{1}{15} = \\frac{3 + 1}{3s} = \\frac{4}{3s}$$<br>3. Lakukan perkalian silang:<br>$$3s = 4 \\times 15 = 60 \\implies s = 20\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jika keliru menganggap bayangannya maya ($s' = -3s$), maka persamaannya menjadi $\\frac{1}{15} = \\frac{2}{3s} \\implies s = 10\\text{ cm}$ (opsi A). Perhatikan kata kunci 'bayangan nyata'."
    }
  },
  {
    id: "fis-gel-optik-cermin-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah cermin cembung memiliki jari-jari kelengkungan $40\\text{ cm}$. Jika sebuah benda diletakkan di depan cermin tersebut sehingga bayangan yang terbentuk berukuran $\\frac{1}{4}$ kali tinggi bendanya, jarak benda dari permukaan cermin adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada cermin cembung, fokus bernilai negatif ($f = -R/2$) dan bayangan dari benda nyata selalu bersifat maya ($s' < 0$):<br>$$f = -\\frac{40}{2} = -20\\text{ cm}, \\quad s' = -\\frac{1}{4}s$$",
      steps: "1. Substitusikan ke rumus cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies -\\frac{1}{20} = \\frac{1}{s} - \\frac{4}{s} = -\\frac{3}{s}$$<br>2. Kalikan silang:<br>$$\\frac{1}{20} = \\frac{3}{s} \\implies s = 3 \\times 20 = 60\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Lupa menyertakan tanda minus pada fokus cermin cembung atau pada jarak bayangan maya akan menyebabkan kesalahan nilai jarak benda."
    }
  },
  {
    id: "fis-gel-optik-cermin-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Di depan cermin cekung dengan jari-jari kelengkungan $60\\text{ cm}$ diletakkan sebuah lilin sehingga menghasilkan bayangan tegak dengan perbesaran $2$ kali ukuran aslinya. Jarak lilin tersebut dari cermin adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Bayangan tegak pada cermin cekung selalu merupakan bayangan maya yang terletak di belakang cermin ($s' < 0$):<br>$$M = -\\frac{s'}{s} = 2 \\implies s' = -2s, \\quad f = +\\frac{R}{2} = +30\\text{ cm}$$",
      steps: "1. Masukkan ke persamaan cermin Gauss:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{30} = \\frac{1}{s} - \\frac{1}{2s}$$<br>2. Sederhanakan ruas kanan:<br>$$\\frac{1}{30} = \\frac{2 - 1}{2s} = \\frac{1}{2s}$$<br>3. Kalikan silang:<br>$$2s = 30 \\implies s = 15\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jika keliru menganggap bayangan nyata ($s' = +2s$), akan diperoleh $\\frac{1}{30} = \\frac{3}{2s} \\implies s = 45\\text{ cm}$ (opsi E). Bayangan nyata pada cermin cekung pasti terbalik, bukan tegak."
    }
  },
  {
    id: "fis-gel-optik-cermin-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Sebuah benda mula-mula diletakkan pada jarak $60\\text{ cm}$ di depan sebuah cermin cekung yang memiliki jarak fokus $30\\text{ cm}$. Jika benda tersebut kemudian digeser sejauh $15\\text{ cm}$ mendekati cermin, pergeseran posisi bayangan yang terjadi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Bergeser $15\\text{ cm}$ mendekati cermin",
      "Bergeser $30\\text{ cm}$ menjauhi cermin",
      "Bergeser $30\\text{ cm}$ mendekati cermin",
      "Bergeser $45\\text{ cm}$ menjauhi cermin",
      "Bergeser $15\\text{ cm}$ menjauhi cermin"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pergeseran posisi bayangan diperoleh dengan menghitung posisi bayangan mula-mula ($s_1'$) dan posisi bayangan akhir ($s_2'$) setelah pergeseran:<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      steps: "1. Kondisi awal ($s_1 = 60\\text{ cm}, f = 30\\text{ cm}$):<br>$$\\frac{1}{s_1'} = \\frac{1}{30} - \\frac{1}{60} = \\frac{1}{60} \\implies s_1' = +60\\text{ cm}$$<br>2. Benda digeser $15\\text{ cm}$ mendekati cermin $\\implies s_2 = 60 - 15 = 45\\text{ cm}$.<br>3. Kondisi akhir ($s_2 = 45\\text{ cm}$):<br>$$\\frac{1}{s_2'} = \\frac{1}{30} - \\frac{1}{45} = \\frac{3 - 2}{90} = \\frac{1}{90} \\implies s_2' = +90\\text{ cm}$$<br>4. Selisih posisi bayangan: $\\Delta s' = 90 - 60 = 30\\text{ cm}$ menjauhi cermin.<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Ketika benda di depan cermin cekung digeser mendekati titik fokus, bayangan nyatanya akan bergerak berlawanan arah yaitu semakin menjauhi cermin dan bertambah besar."
    }
  },
  {
    id: "fis-gel-optik-cermin-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-cermin",
    category: "Cermin Cekung dan Cembung",
    difficulty: "sedang",
    statement: "Berdasarkan Dalil Esbach pada pembagian ruang optik cermin cekung, jika sebuah benda diletakkan di ruang II (di antara titik fokus $F$ dan titik pusat kelengkungan $M$), letak dan sifat bayangan yang terbentuk adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Di ruang III dengan sifat nyata, terbalik, dan diperbesar",
      "Di ruang I dengan sifat maya, tegak, dan diperkecil",
      "Di ruang IV dengan sifat maya, tegak, dan diperbesar",
      "Di ruang III dengan sifat nyata, tegak, dan diperkecil",
      "Di ruang II dengan sifat nyata, terbalik, dan sama besar"
    ],
    correctIndex: 0,
    solution: {
      concept: "Aturan Dalil Esbach pada cermin cekung:<br>1. Jumlah nomor ruang benda dan ruang bayangan sama dengan 5:<br>$$R_{\\text{benda}} + R_{\\text{bayangan}} = 5$$<br>2. Jika $R_{\\text{bayangan}} > R_{\\text{benda}}$, bayangan diperbesar.<br>3. Bayangan di depan cermin (ruang I, II, III) bersifat nyata dan terbalik; bayangan di belakang cermin (ruang IV) bersifat maya dan tegak.",
      steps: "1. Benda berada di ruang II $\\implies R_{\\text{benda}} = 2$.<br>2. Nomor ruang bayangan: $R_{\\text{bayangan}} = 5 - 2 = 3$ (ruang III).<br>3. Karena $R_{\\text{bayangan}} = 3 > R_{\\text{benda}} = 2$, bayangan berukuran diperbesar.<br>4. Karena berada di ruang III (di depan cermin), bayangan bersifat nyata dan terbalik.<br>5. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Jangan tertukar sifat terbalik dan tegak: semua bayangan nyata pada cermin sferis selalu terbalik, sedangkan semua bayangan maya selalu tegak."
    }
  }
];
