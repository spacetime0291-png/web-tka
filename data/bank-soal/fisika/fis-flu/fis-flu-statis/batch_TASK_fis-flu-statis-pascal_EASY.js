/**
 * Batch Task: TASK_fis-flu-statis-pascal_EASY
 * SubTopic: Hukum Pascal (fis-flu-statis-pascal)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-statis-pascal-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pascal",
    category: "Hukum Pascal",
    difficulty: "mudah",
    statement: "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada suatu zat cair dalam ruang tertutup akan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Diteruskan ke segala arah dengan sama besar",
      "Berkurang secara beraturan seiring bertambahnya jarak dari sumber tekanan",
      "Diteruskan hanya ke arah tegak lurus terhadap dasar wadah",
      "Berbanding terbalik dengan massa jenis zat cair tersebut",
      "Meningkat secara eksponensial di setiap titik sudut wadah"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum Pascal adalah prinsip dasar hidrostatika dalam ruang tertutup:<br>$$\\Delta P_1 = \\Delta P_2 = \\dots = \\Delta P_n$$Artinya, setiap perubahan tekanan yang diberikan pada permukaan zat cair dalam wadah tertutup akan diteruskan ke setiap bagian zat cair dan dinding wadahnya ke segala arah dengan besar yang sama tanpa berkurang.",
      steps: "1. Tinjau bunyi hukum fisika Pascal: 'Tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan sama besar ke segala arah.'<br>2. Evaluasi pilihan:<br>• Opsi A: Tepat, sesuai definisi baku Hukum Pascal.<br>• Opsi B, C, D, E: Bertentangan dengan sifat penerusan tekanan fluida inkompresibel pada ruang tertutup.",
      pitfalls: "Siswa terkadang menyamakan prinsip Hukum Pascal (ruang tertutup, tekanan sama ke segala arah) dengan tekanan hidrostatis bejana terbuka yang nilainya bergantung pada kedalaman."
    }
  },
  {
    id: "fis-flu-statis-pascal-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pascal",
    category: "Hukum Pascal",
    difficulty: "mudah",
    statement: "Sebuah alat pengangkat hidrolik memiliki piston kecil dengan luas penampang $A_1 = 10\\text{ cm}^2$ dan piston besar dengan luas penampang $A_2 = 250\\text{ cm}^2$. Jika pada piston kecil diberikan gaya tekan sebesar $F_1 = 200\\text{ N}$, besar gaya angkat yang dihasilkan pada piston besar ($F_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2.500\\text{ N}$",
      "$5.000\\text{ N}$",
      "$7.500\\text{ N}$",
      "$10.000\\text{ N}$",
      "$25.000\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan Hukum Pascal, tekanan fluida pada kedua penampang bernilai sama:<br>$$P_1 = P_2 \\iff \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$Sehingga gaya angkat pada piston besar dirumuskan:<br>$$F_2 = F_1 \\cdot \\frac{A_2}{A_1}$$",
      steps: "1. Masukkan besaran yang diketahui:<br>• $A_1 = 10\\text{ cm}^2$<br>• $A_2 = 250\\text{ cm}^2$<br>• $F_1 = 200\\text{ N}$<br>2. Hitung gaya angkat pada penampang besar:<br>$$F_2 = 200\\text{ N} \\times \\frac{250\\text{ cm}^2}{10\\text{ cm}^2} = 200 \\times 25 = 5.000\\text{ N}$$",
      pitfalls: "Terkecoh membalik perbandingan luas penampang menjadi $F_1 \\times \\frac{A_1}{A_2}$, yang menghasilkan gaya sangat kecil ($8\\text{ N}$), padahal dongkrak hidrolik berfungsi sebagai pengganda gaya mekanik."
    }
  },
  {
    id: "fis-flu-statis-pascal-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pascal",
    category: "Hukum Pascal",
    difficulty: "mudah",
    statement: "Sebuah dongkrak hidrolik digunakan untuk mengangkat sebuah mobil yang memiliki berat $W = 10.000\\text{ N}$. Piston kecil dongkrak tersebut memiliki diameter $d_1 = 4\\text{ cm}$, sedangkan piston besarnya memiliki diameter $d_2 = 20\\text{ cm}$. Besar gaya minimal yang harus diberikan pada piston kecil agar mobil tersebut dapat terangkat adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ N}$",
      "$400\\text{ N}$",
      "$500\\text{ N}$",
      "$2.000\\text{ N}$",
      "$2.500\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Luas penampang lingkaran berbanding lurus dengan kuadrat diameternya ($A = \\frac{1}{4}\\pi d^2$). Sehingga persamaan Hukum Pascal menggunakan diameter menjadi:<br>$$\\frac{F_1}{d_1^2} = \\frac{F_2}{d_2^2} \\iff F_1 = F_2 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      steps: "1. Identifikasi data yang diketahui:<br>• $d_1 = 4\\text{ cm}$<br>• $d_2 = 20\\text{ cm}$<br>• $F_2 = W = 10.000\\text{ N}$<br>2. Hitung rasio diameter:<br>$$\\frac{d_1}{d_2} = \\frac{4}{20} = \\frac{1}{5}$$<br>3. Kuadratkan rasio dan hitung gaya tekan minimal $F_1$:<br>$$F_1 = 10.000\\text{ N} \\times \\left(\\frac{1}{5}\\right)^2 = 10.000 \\times \\frac{1}{25} = 400\\text{ N}$$",
      pitfalls: "Kesalahan umum adalah hanya membagi gaya dengan perbandingan diameter secara linier ($10.000 / 5 = 2.000\\text{ N}$, opsi D) tanpa menguadratkan rasio diameternya."
    }
  },
  {
    id: "fis-flu-statis-pascal-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pascal",
    category: "Hukum Pascal",
    difficulty: "mudah",
    statement: "Pada suatu sistem bejana hidrolik ideal, perbandingan luas penampang piston kecil dan piston besar adalah $A_1 : A_2 = 1 : 50$. Jika piston kecil ditekan ke bawah sejauh $s_1 = 25\\text{ cm}$, maka ketinggian kenaikan piston besar ($s_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}2\\text{ cm}$",
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$5{,}0\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Karena fluida hidrolik bersifat inkompresibel (tak termampatkan), volume fluida yang dipindahkan oleh piston kecil harus sama dengan volume fluida yang mendorong piston besar:<br>$$V_1 = V_2 \\iff A_1 \\cdot s_1 = A_2 \\cdot s_2$$Sehingga perpindahan piston berbanding terbalik dengan luas penampangnya:<br>$$s_2 = s_1 \\cdot \\frac{A_1}{A_2}$$",
      steps: "1. Substitusikan rasio luas penampang dan jarak pergeseran piston kecil:<br>$$s_2 = 25\\text{ cm} \\times \\frac{1}{50} = 0{,}5\\text{ cm}$$",
      pitfalls: "Siswa sering mengalikan jarak dengan rasio luas ($25 \\times 50 = 1250\\text{ cm}$), padahal keuntungan mekanik gaya pada dongkrak hidrolik harus dibayar dengan pergeseran jarak yang lebih pendek."
    }
  },
  {
    id: "fis-flu-statis-pascal-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-statis",
    subTopicId: "fis-flu-statis-pascal",
    category: "Hukum Pascal",
    difficulty: "mudah",
    statement: "Pada sistem rem hidrolik sebuah kendaraan, pedal rem terhubung langsung ke sebuah master cylinder berdiameter $2\\text{ cm}$. Saat pedal diinjak dengan gaya $100\\text{ N}$, tekanan diteruskan melalui minyak rem ke sebuah silinder roda (wheel cylinder) yang memiliki diameter $4\\text{ cm}$. Besar gaya dorong yang bekerja pada kampas rem di silinder roda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ N}$",
      "$300\\text{ N}$",
      "$400\\text{ N}$",
      "$600\\text{ N}$",
      "$800\\text{ N}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Prinsip kerja rem hidrolik memanfaatkan transmisi tekanan fluida Hukum Pascal. Gaya dorong pada silinder roda ($F_2$) berbanding lurus dengan kuadrat rasio diameternya terhadap silinder master ($F_1$):<br>$$F_2 = F_1 \\cdot \\left(\\frac{d_2}{d_1}\\right)^2$$",
      steps: "1. Identifikasi besaran:<br>• Diameter master silinder: $d_1 = 2\\text{ cm}$<br>• Diameter silinder roda: $d_2 = 4\\text{ cm}$<br>• Gaya tekan pedal: $F_1 = 100\\text{ N}$<br>2. Hitung gaya dorong pada kampas rem:<br>$$F_2 = 100\\text{ N} \\times \\left(\\frac{4\\text{ cm}}{2\\text{ cm}}\\right)^2 = 100 \\times 2^2 = 100 \\times 4 = 400\\text{ N}$$",
      pitfalls: "Terkecoh hanya mengalikan gaya dengan perbandingan diameter secara linier ($100 \\times 2 = 200\\text{ N}$, opsi A), lupa bahwa luas lingkaran sebanding dengan kuadrat diameternya."
    }
  }
];
