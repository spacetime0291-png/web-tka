/**
 * Batch Task: TASK_fis-lis-statis-potensial_EASY
 * SubTopic: Energi Potensial & Potensial Listrik (fis-lis-statis-potensial)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-statis-potensial-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Karakteristik Skalar Potensial Listrik",
    difficulty: "mudah",
    statement: "Pernyataan berikut yang tepat mengenai besaran potensial listrik adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Merupakan besaran vektor yang arahnya selalu menjauhi muatan positif",
      "Merupakan besaran skalar dan tanda aljabar muatan (+ atau -) wajib disertakan dalam perhitungannya",
      "Memiliki satuan Newton per Coulomb (N/C) dalam sistem satuan internasional",
      "Nilainya selalu bernilai positif untuk semua jenis muatan sumber listrik",
      "Berbanding terbalik dengan kuadrat jarak dari muatan sumber"
    ],
    correctIndex: 1,
    solution: {
      concept: "Potensial listrik ($V$) didefinisikan sebagai energi potensial listrik per satuan muatan ($V = \\frac{E_p}{q}$). Potensial listrik merupakan besaran skalar (tidak memiliki arah) dengan satuan Volt (Joule per Coulomb). Rumusnya adalah $V = k \\frac{q}{r}$, di mana tanda positif atau negatif muatan wajib disertakan dalam perhitungan aljabar.",
      steps: "1. Tinjau definisi potensial listrik: $V = k \\frac{q}{r}$.<br>2. Karena energi potensial adalah besaran skalar, potensial listrik juga merupakan besaran skalar murni.<br>3. Muatan positif menghasilkan potensial positif ($V > 0$) dan muatan negatif menghasilkan potensial negatif ($V < 0$).<br>4. Satuan SI potensial listrik adalah Volt (V), bukan N/C (satuan medan listrik).<br>5. Jadi pernyataan yang paling tepat adalah pilihan B.",
      pitfalls: "Siswa sering menganggap potensial listrik sebagai besaran vektor seperti halnya medan listrik, atau mengabaikan tanda minus pada muatan negatif."
    }
  },
  {
    id: "fis-lis-statis-potensial-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Perhitungan Potensial Listrik Muatan Negatif",
    difficulty: "mudah",
    statement: "Potensial listrik di suatu titik yang berjarak $20\\text{ cm}$ dari sebuah muatan titik $-4\\,\\mu\\text{C}$ di ruang hampa ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-180\\text{ kV}$",
      "$+180\\text{ kV}$",
      "$-90\\text{ kV}$",
      "$+90\\text{ kV}$",
      "$-360\\text{ kV}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Potensial listrik pada jarak $r$ dari muatan titik $q$ dirumuskan sebagai:<br>$$V = k \\frac{q}{r}$$<br>dengan $q$ dihitung beserta tanda aljabarnya.",
      steps: "1. Konversikan satuan ke SI standar:<br>$$q = -4\\,\\mu\\text{C} = -4 \\times 10^{-6}\\text{ C}$$<br>$$r = 20\\text{ cm} = 0{,}2\\text{ m} = 2 \\times 10^{-1}\\text{ m}$$<br>2. Hitung potensial listrik:<br>$$V = (9 \\times 10^9) \\times \\frac{-4 \\times 10^{-6}\\text{ C}}{2 \\times 10^{-1}\\text{ m}} = 9 \\times 10^9 \\times (-2 \\times 10^{-5}) = -18 \\times 10^4\\text{ V} = -180\\text{ kV}$$<br>3. Jadi potensial listrik di titik tersebut adalah $-180\\text{ kV}$ (pilihan A).",
      pitfalls: "Lupa menyertakan tanda minus muatan sehingga salah memilih $+180\\text{ kV}$, atau lupa mengonversi jarak $20\\text{ cm}$ ke satuan meter ($0{,}2\\text{ m}$)."
    }
  },
  {
    id: "fis-lis-statis-potensial-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Usaha Memindahkan Muatan Antara Dua Titik",
    difficulty: "mudah",
    statement: "Untuk memindahkan muatan uji positif sebesar $q = +5\\,\\mu\\text{C}$ dari titik $A$ yang berpotensial $20\\text{ V}$ ke titik $B$ yang berpotensial $80\\text{ V}$, usaha luar yang harus dilakukan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 \\times 10^{-4}\\text{ Joule}$",
      "$3 \\times 10^{-4}\\text{ Joule}$",
      "$4 \\times 10^{-4}\\text{ Joule}$",
      "$5 \\times 10^{-4}\\text{ Joule}$",
      "$6 \\times 10^{-4}\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Usaha luar ($W$) yang diperlukan untuk memindahkan muatan uji $q$ dari titik $A$ ke titik $B$ sama dengan perubahan energi potensial listriknya:<br>$$W_{A \\to B} = q \\Delta V = q (V_B - V_A)$$",
      steps: "1. Beda potensial antara titik $B$ dan titik $A$ adalah:<br>$$\\Delta V = V_B - V_A = 80\\text{ V} - 20\\text{ V} = 60\\text{ Volt}$$<br>2. Muatan yang dipindahkan adalah $q = +5\\,\\mu\\text{C} = 5 \\times 10^{-6}\\text{ C}$.<br>3. Hitung usaha luar:<br>$$W = q (V_B - V_A) = (5 \\times 10^{-6}\\text{ C}) \\times 60\\text{ V} = 300 \\times 10^{-6}\\text{ J} = 3 \\times 10^{-4}\\text{ Joule}$$<br>4. Jadi usaha yang dibutuhkan adalah $3 \\times 10^{-4}\\text{ Joule}$ (pilihan B).",
      pitfalls: "Menjumlahkan kedua potensial ($80 + 20 = 100\\text{ V}$) atau mengurangkan secara terbalik ($20 - 80 = -60\\text{ V}$). Usaha memindahkan dari $A$ ke $B$ dihitung dari potensial akhir dikurangi potensial awal ($V_B - V_A$)."
    }
  },
  {
    id: "fis-lis-statis-potensial-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Energi Potensial Listrik Dua Muatan",
    difficulty: "mudah",
    statement: "Dua buah muatan titik $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta Coulomb $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, energi potensial listrik dari pasangan kedua muatan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}06\\text{ Joule}$",
      "$0{,}18\\text{ Joule}$",
      "$0{,}54\\text{ Joule}$",
      "$1{,}8\\text{ Joule}$",
      "$5{,}4\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Energi potensial elektrostatik ($E_p$) dari sistem dua muatan titik $q_1$ dan $q_2$ yang berjarak $r$ dirumuskan sebagai:<br>$$E_p = k \\frac{q_1 q_2}{r}$$",
      steps: "1. Konversikan ke satuan SI:<br>$$q_1 = 2 \\times 10^{-6}\\text{ C}$$<br>$$q_2 = 3 \\times 10^{-6}\\text{ C}$$<br>$$r = 30\\text{ cm} = 0{,}3\\text{ m} = 3 \\times 10^{-1}\\text{ m}$$<br>2. Hitung energi potensial listrik:<br>$$E_p = (9 \\times 10^9) \\times \\frac{(2 \\times 10^{-6}) \\times (3 \\times 10^{-6})}{3 \\times 10^{-1}} = 9 \\times 10^9 \\times \\frac{6 \\times 10^{-12}}{3 \\times 10^{-1}}$$<br>$$E_p = 9 \\times 10^9 \\times 2 \\times 10^{-11} = 18 \\times 10^{-2} = 0{,}18\\text{ Joule}$$<br>3. Jadi energi potensial listrik sistem adalah $0{,}18\\text{ Joule}$ (pilihan B).",
      pitfalls: "Tertukar dengan rumus gaya Coulomb $k \\frac{q_1 q_2}{r^2}$ yang membagi dengan kuadrat jarak $r^2$. Pada energi potensial listrik, penyebutnya hanya berjarak $r$ (pangkat satu)."
    }
  },
  {
    id: "fis-lis-statis-potensial-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-potensial",
    category: "Potensial Listrik Bola Konduktor Bermuatan",
    difficulty: "mudah",
    statement: "Sebuah bola konduktor memiliki jari-jari $R = 15\\text{ cm}$ dan diberi muatan listrik $+6\\,\\mu\\text{C}$. Jika potensial listrik tepat di permukaan bola tersebut adalah $V_0$, maka potensial listrik pada suatu titik di dalam rongga bola yang berjarak $5\\text{ cm}$ dari pusat bola adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$\\frac{1}{3}V_0$",
      "$\\frac{1}{9}V_0$",
      "$V_0$",
      "$3V_0$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Di seluruh bagian dalam bola konduktor elektrostatik, kuat medan listrik bernilai nol ($E = 0$). Karena $E = -\\frac{dV}{dr} = 0$, maka potensial listrik $V$ bernilai konstan di seluruh bagian dalam dan sama persis dengan potensial di permukaan kulit bola:<br>$$V_{\\text{dalam}} = V_{\\text{permukaan}} = V_0 = k\\frac{Q}{R}$$",
      steps: "1. Titik pengamatan berada pada jarak $r = 5\\text{ cm} < R = 15\\text{ cm}$ (di dalam konduktor).<br>2. Karena kuat medan listrik di dalam konduktor adalah nol, tidak ada usaha yang diperlukan untuk memindahkan muatan dari permukaan ke titik mana pun di dalam bola.<br>3. Akibatnya, seluruh volume dalam konduktor merupakan wilayah ekuipotensial dengan nilai potensial sama dengan potensial permukaannya, yaitu $V_0$.<br>4. Jadi potensial di titik tersebut adalah $V_0$ (pilihan D).",
      pitfalls: "Siswa sering mengacaukan potensial listrik dengan kuat medan listrik. Kuat medan listrik di dalam bola konduktor memang bernilai nol ($E = 0$), namun potensial listriknya tidak nol melainkan sama dengan potensial di kulit ($V = V_0$)."
    }
  }
];
