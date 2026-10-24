/**
 * Batch Task: TASK_fis-lis-statis-keping_EASY
 * SubTopic: Kapasitor & Keping Sejajar (fis-lis-statis-keping)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-statis-keping-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Faktor Penentu Kapasitansi Keping Sejajar",
    difficulty: "mudah",
    statement: "Kapasitas suatu kapasitor keping sejajar dapat ditingkatkan dengan cara ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Memperbesar jarak pemisah antarkeping",
      "Memperluas area permukaan keping dan menyisipkan bahan dielektrik di antara keping",
      "Mengurangi luas permukaan keping",
      "Meningkatkan beda potensial sumber tegangan",
      "Mengurangi muatan listrik pada keping"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kapasitas kapasitor keping sejajar ditentukan oleh parameter geometri dan medium pengisi celah antarkeping:<br>$$C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$$<br>di mana $\\varepsilon_r$ adalah konstanta dielektrik relatif medium, $A$ adalah luas penampang keping, dan $d$ adalah jarak pemisah antarkeping.",
      steps: "1. Tinjau faktor-faktor pada rumus $C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$:<br>- $C$ berbanding lurus dengan luas penampang $A$. Memperbesar $A$ memperbesar $C$.<br>- $C$ berbanding lurus dengan konstanta dielektrik $\\varepsilon_r$. Menyisipkan bahan dielektrik ($\\varepsilon_r > 1$) memperbesar $C$.<br>- $C$ berbanding terbalik dengan jarak pemisah $d$. Memperkecil $d$ memperbesar $C$.<br>2. Nilai kapasitas $C$ merupakan karakteristik murni fisis keping dan tidak dipengaruhi oleh perubahan muatan $Q$ maupun beda potensial $V$.<br>3. Jadi cara yang benar adalah memperluas area permukaan keping dan menyisipkan dielektrik (pilihan B).",
      pitfalls: "Siswa sering mengira mengubah tegangan sumber $V$ dapat mengubah kapasitas kapasitor karena rumus $C = Q/V$. Padahal jika $V$ dinaikkan, muatan $Q$ akan ikut naik secara linier sehingga nilai kapasitas $C$ tetap konstan."
    }
  },
  {
    id: "fis-lis-statis-keping-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Hubungan Kapasitansi, Beda Potensial, dan Muatan",
    difficulty: "mudah",
    statement: "Sebuah kapasitor dengan kapasitas $50\\,\\mu\\text{F}$ dihubungkan dengan sumber tegangan arus searah $12\\text{ Volt}$. Muatan listrik yang tersimpan pada salah satu keping kapasitor tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\,\\mu\\text{C}$",
      "$300\\,\\mu\\text{C}$",
      "$600\\,\\mu\\text{C}$",
      "$1.200\\,\\mu\\text{C}$",
      "$6.000\\,\\mu\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hubungan mendasar antara kapasitas kapasitor ($C$), beda potensial listrik ($V$), dan muatan listrik yang tersimpan ($Q$) dirumuskan sebagai:<br>$$Q = C V$$",
      steps: "1. Identifikasi data: $C = 50\\,\\mu\\text{F}$ dan $V = 12\\text{ Volt}$.<br>2. Hitung muatan kapasitor:<br>$$Q = C \\times V = 50\\,\\mu\\text{F} \\times 12\\text{ V} = 600\\,\\mu\\text{C}$$<br>3. Jadi muatan yang tersimpan pada salah satu keping adalah $600\\,\\mu\\text{C}$ (pilihan C).",
      pitfalls: "Kesalahan membagi alih-alih mengalikan ($50 / 12$), atau salah mengalikan nilai angka."
    }
  },
  {
    id: "fis-lis-statis-keping-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Pengaruh Penyisipan Bahan Dielektrik",
    difficulty: "mudah",
    statement: "Suatu kapasitor keping sejajar di udara memiliki kapasitas $C_0 = 8\\,\\mu\\text{F}$. Jika ruang di antara kedua keping diisi penuh dengan zat dielektrik mika yang memiliki konstanta dielektrik relatif $K = 5$, kapasitas kapasitor tersebut menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}6\\,\\mu\\text{F}$",
      "$8\\,\\mu\\text{F}$",
      "$13\\,\\mu\\text{F}$",
      "$40\\,\\mu\\text{F}$",
      "$200\\,\\mu\\text{F}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Penyisipan bahan dielektrik dengan konstanta dielektrik relatif $K$ (atau $\\varepsilon_r$) melipatgandakan nilai kapasitas kapasitor menurut hubungan:<br>$$C = K \\cdot C_0$$",
      steps: "1. Kapasitas awal kapasitor di udara: $C_0 = 8\\,\\mu\\text{F}$.<br>2. Konstanta dielektrik mika: $K = 5$.<br>3. Hitung kapasitas setelah disisipi dielektrik:<br>$$C = K \\times C_0 = 5 \\times 8\\,\\mu\\text{F} = 40\\,\\mu\\text{F}$$<br>4. Jadi kapasitas kapasitor menjadi $40\\,\\mu\\text{F}$ (pilihan D).",
      pitfalls: "Membagi kapasitas awal dengan konstanta dielektrik ($8 / 5 = 1{,}6\\,\\mu\\text{F}$). Dielektrik selalu meningkatkan kapasitas kapasitor, bukan menurunkannya."
    }
  },
  {
    id: "fis-lis-statis-keping-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Kapasitas Pengganti Rangkaian Paralel dan Seri Sederhana",
    difficulty: "mudah",
    statement: "Dua buah kapasitor masing-masing memiliki kapasitas $C_1 = 3\\,\\mu\\text{F}$ dan $C_2 = 6\\,\\mu\\text{F}$. Kapasitas pengganti jika kedua kapasitor tersebut dirangkai secara paralel ($C_p$) dan secara seri ($C_s$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$",
      "$2\\,\\mu\\text{F}$ dan $9\\,\\mu\\text{F}$",
      "$9\\,\\mu\\text{F}$ dan $4{,}5\\,\\mu\\text{F}$",
      "$4{,}5\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$",
      "$18\\,\\mu\\text{F}$ dan $3\\,\\mu\\text{F}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Aturan penggabungan kapasitor berkebalikan dengan resistor:<br>- Rangkaian paralel: $C_p = C_1 + C_2$<br>- Rangkaian seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} \\implies C_s = \\frac{C_1 C_2}{C_1 + C_2}$",
      steps: "1. Hitung kapasitas pengganti paralel ($C_p$):<br>$$C_p = C_1 + C_2 = 3\\,\\mu\\text{F} + 6\\,\\mu\\text{F} = 9\\,\\mu\\text{F}$$<br>2. Hitung kapasitas pengganti seri ($C_s$):<br>$$\\frac{1}{C_s} = \\frac{1}{3} + \\frac{1}{6} = \\frac{2 + 1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies C_s = 2\\,\\mu\\text{F}$$<br>3. Jadi kapasitas pengganti berturut-turut adalah $9\\,\\mu\\text{F}$ dan $2\\,\\mu\\text{F}$ (pilihan A).",
      pitfalls: "Tertukar dengan rumus resistor, di mana seri dijumlahkan dan paralel dihitung kebalikannya. Pada kapasitor, paralel langsung dijumlahkan dan seri dihitung kebalikannya."
    }
  },
  {
    id: "fis-lis-statis-keping-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Energi Tersimpan pada Kapasitor",
    difficulty: "mudah",
    statement: "Sebuah kapasitor berkapasitas $20\\,\\mu\\text{F}$ dimuati oleh baterai sehingga memiliki beda potensial sebesar $100\\text{ Volt}$. Besar energi elektrostatik yang tersimpan di dalam kapasitor tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}01\\text{ Joule}$",
      "$0{,}05\\text{ Joule}$",
      "$0{,}10\\text{ Joule}$",
      "$0{,}20\\text{ Joule}$",
      "$1{,}00\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Energi elektrostatik yang tersimpan dalam medan listrik kapasitor dirumuskan sebagai:<br>$$W = \\frac{1}{2} C V^2$$",
      steps: "1. Konversikan kapasitas ke Farad: $C = 20\\,\\mu\\text{F} = 20 \\times 10^{-6}\\text{ F} = 2 \\times 10^{-5}\\text{ F}$.<br>2. Tegangan listrik: $V = 100\\text{ V} = 10^2\\text{ V}$.<br>3. Hitung energi yang tersimpan:<br>$$W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times (20 \\times 10^{-6}\\text{ F}) \\times (100\\text{ V})^2 = (10 \\times 10^{-6}) \\times 10.000 = 0{,}10\\text{ Joule}$$<br>4. Jadi energi yang tersimpan adalah $0{,}10\\text{ Joule}$ (pilihan C).",
      pitfalls: "Lupa menyertakan faktor $\\frac{1}{2}$ sehingga menghitung $C V^2 = 0{,}20\\text{ J}$, atau lupa mengkuadratkan tegangan $V$."
    }
  }
];
