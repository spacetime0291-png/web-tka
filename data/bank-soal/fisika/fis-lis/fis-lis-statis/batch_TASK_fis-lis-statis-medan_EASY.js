/**
 * Batch Task: TASK_fis-lis-statis-medan_EASY
 * SubTopic: Medan Listrik & Garis Gaya Medan (fis-lis-statis-medan)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-statis-medan-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-medan",
    category: "Arah dan Konsep Garis Medan Listrik",
    difficulty: "mudah",
    statement: "Pernyataan berikut yang benar mengenai karakteristik garis-garis medan listrik di sekitar muatan listrik titik adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Keluar menjauhi muatan positif dan masuk menuju muatan negatif",
      "Masuk menuju muatan positif dan keluar menjauhi muatan negatif",
      "Garis-garis medan listrik dapat saling berpotongan jika medannya sangat kuat",
      "Kerapatan garis medan listrik berbanding terbalik dengan kuat medan listriknya",
      "Garis medan selalu berbentuk lintasan lingkaran tertutup yang mengitari muatan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Garis-garis medan listrik (electric field lines) menggambarkan arah dan kuat medan listrik. Garis medan selalu berawal dari muatan positif dan berakhir pada muatan negatif (atau di tak hingga), serta tidak pernah saling berpotongan.",
      steps: "1. Berdasarkan konvensi arah medan listrik, muatan uji positif akan ditolak oleh muatan positif (arah keluar radial) dan ditarik oleh muatan negatif (arah masuk radial).<br>2. Kerapatan garis-garis medan berbanding lurus dengan besar kuat medan listrik (semakin rapat garisnya, semakin kuat medannya).<br>3. Dua garis medan tidak dapat saling berpotongan karena medan listrik pada satu titik memiliki arah resultan yang unik.<br>4. Jadi pilihan A adalah pernyataan yang benar dan tepat.",
      pitfalls: "Sering tertukar antara arah garis medan listrik (keluar dari positif, masuk ke negatif) dengan arah garis medan magnet di luar batang magnet (keluar dari kutub utara, masuk ke kutub selatan)."
    }
  },
  {
    id: "fis-lis-statis-medan-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-medan",
    category: "Kuat Medan Listrik Muatan Titik",
    difficulty: "mudah",
    statement: "Kuat medan listrik pada suatu titik yang berjarak $30\\text{ cm}$ dari sebuah muatan titik $+3\\,\\mu\\text{C}$ di udara ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$3 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$3 \\times 10^5\\text{ N/C}$, menuju muatan",
      "$9 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$9 \\times 10^5\\text{ N/C}$, menuju muatan"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kuat medan listrik ($E$) pada jarak $r$ dari muatan titik $q$ dirumuskan sebagai:<br>$$E = k \\frac{|q|}{r^2}$$<br>Arah medan listrik menjauhi muatan jika muatan sumber positif, dan menuju muatan jika muatan sumber negatif.",
      steps: "1. Konversikan satuan ke SI standar:<br>$$q = +3\\,\\mu\\text{C} = 3 \\times 10^{-6}\\text{ C}$$<br>$$r = 30\\text{ cm} = 0{,}3\\text{ m} = 3 \\times 10^{-1}\\text{ m}$$<br>2. Kuadrat jarak:<br>$$r^2 = (3 \\times 10^{-1}\\text{ m})^2 = 9 \\times 10^{-2}\\text{ m}^2$$<br>3. Hitung kuat medan listrik:<br>$$E = (9 \\times 10^9) \\times \\frac{3 \\times 10^{-6}}{9 \\times 10^{-2}} = 3 \\times 10^5\\text{ N/C}$$<br>4. Karena muatan sumber bertanda positif ($+3\\,\\mu\\text{C}$), arah kuat medan listrik menjauhi muatan.<br>5. Jadi jawabannya adalah $3 \\times 10^5\\text{ N/C}$, menjauhi muatan (pilihan B).",
      pitfalls: "Lupa mengkuadratkan jarak pembagi ($r^2$) sehingga membagi langsung dengan $0{,}3$, atau salah menentukan arah medan listrik untuk muatan positif."
    }
  },
  {
    id: "fis-lis-statis-medan-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-medan",
    category: "Hubungan Gaya Coulomb dan Kuat Medan Listrik",
    difficulty: "mudah",
    statement: "Sebuah muatan uji $q_0 = -5\\,\\mu\\text{C}$ diletakkan dalam suatu medan listrik homogen dan mengalami gaya elektrostatik sebesar $0{,}25\\text{ N}$ ke arah timur. Besar dan arah kuat medan listrik di titik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5 \\times 10^4\\text{ N/C}$ ke arah timur",
      "$5 \\times 10^4\\text{ N/C}$ ke arah barat",
      "$1{,}25 \\times 10^{-6}\\text{ N/C}$ ke arah timur",
      "$1{,}25 \\times 10^{-6}\\text{ N/C}$ ke arah barat",
      "$2 \\times 10^4\\text{ N/C}$ ke arah barat"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gaya elektrostatik yang dialami muatan uji dalam medan listrik adalah $\\vec{F} = q_0 \\vec{E}$. Jika muatan uji positif, arah $\\vec{F}$ searah dengan $\\vec{E}$. Jika muatan uji negatif, arah $\\vec{F}$ berlawanan arah dengan $\\vec{E}$.",
      steps: "1. Hitung besar kuat medan listrik:<br>$$E = \\frac{F}{|q_0|} = \\frac{0{,}25\\text{ N}}{5 \\times 10^{-6}\\text{ C}} = 50.000\\text{ N/C} = 5 \\times 10^4\\text{ N/C}$$<br>2. Tentukan arah medan listrik:<br>Karena muatan uji bernilai negatif ($q_0 = -5\\,\\mu\\text{C}$), gaya elektrostatik berlawanan arah dengan medan listrik.<br>Gaya mengarah ke timur, maka arah medan listrik harus berlawanan, yaitu ke arah barat.<br>3. Jadi kuat medan listrik bernilai $5 \\times 10^4\\text{ N/C}$ ke arah barat (pilihan B).",
      pitfalls: "Siswa sering menganggap arah medan listrik selalu searah dengan gaya yang dialami partikel, melupakan fakta bahwa muatan negatif mengalami gaya yang berlawanan arah dengan medan listrik."
    }
  },
  {
    id: "fis-lis-statis-medan-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-medan",
    category: "Perbandingan Jarak dan Kuat Medan Listrik",
    difficulty: "mudah",
    statement: "Kuat medan listrik di titik $P$ yang berjarak $r$ dari suatu muatan sumber adalah $E$. Jika titik pengamatan digeser ke titik $Q$ yang berjarak $2r$ dari muatan sumber yang sama, kuat medan listrik di titik $Q$ menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{4}E$",
      "$\\frac{1}{2}E$",
      "$E$",
      "$2E$",
      "$4E$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Kuat medan listrik dari muatan titik berbanding terbalik dengan kuadrat jaraknya terhadap muatan sumber:<br>$$E \\propto \\frac{1}{r^2} \\implies \\frac{E_Q}{E_P} = \\left(\\frac{r_P}{r_Q}\\right)^2$$",
      steps: "1. Diketahui $r_P = r$ dengan kuat medan $E_P = E$.<br>2. Titik $Q$ berjarak $r_Q = 2r$.<br>3. Bandingkan kuat medan listrik:<br>$$\\frac{E_Q}{E_P} = \\left(\\frac{r}{2r}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$<br>4. Maka kuat medan di titik $Q$ adalah $E_Q = \\frac{1}{4}E$ (pilihan A).",
      pitfalls: "Lupa mengkuadratkan faktor perbandingan jarak sehingga memilih $\\frac{1}{2}E$."
    }
  },
  {
    id: "fis-lis-statis-medan-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-medan",
    category: "Medan Listrik pada Bola Konduktor Berongga",
    difficulty: "mudah",
    statement: "Sebuah bola konduktor berongga dengan jari-jari $R = 10\\text{ cm}$ diberi muatan listrik $+20\\,\\mu\\text{C}$ yang tersebar merata di permukaannya. Kuat medan listrik pada titik yang terletak di dalam rongga bola berjarak $5\\text{ cm}$ dari pusat bola adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ N/C}$",
      "$1{,}8 \\times 10^6\\text{ N/C}$",
      "$3{,}6 \\times 10^6\\text{ N/C}$",
      "$7{,}2 \\times 10^6\\text{ N/C}$",
      "Tak terdefinisi (tak hingga)"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan Hukum Gauss dan sifat konduktor elektrostatik, seluruh kelebihan muatan pada bahan konduktor akan saling tolak-menolak dan berkumpul hanya di permukaan terluar konduktor. Tidak ada muatan netto di dalam rongga bola, sehingga kuat medan listrik di dalam bola konduktor selalu nol ($E = 0$).",
      steps: "1. Titik pengamatan berada pada jarak $r = 5\\text{ cm}$, sedangkan jari-jari bola konduktor adalah $R = 10\\text{ cm}$.<br>2. Karena $r < R$, titik pengamatan berada di dalam rongga konduktor.<br>3. Buat permukaan Gauss berbentuk bola dengan jari-jari $r = 5\\text{ cm}$. Jumlah muatan yang dilingkupi permukaan Gauss ini adalah $q_{\\text{enclosed}} = 0$.<br>4. Melalui Hukum Gauss:<br>$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0} = 0 \\implies E = 0\\text{ N/C}$$<br>5. Jadi kuat medan listriknya bernilai $0\\text{ N/C}$ (pilihan A).",
      pitfalls: "Siswa sering menggunakan rumus muatan titik $k \\frac{q}{r^2}$ dengan memasukkan $r = 5\\text{ cm}$ sehingga mendapatkan nilai $7{,}2 \\times 10^6\\text{ N/C}$, melupakan bahwa untuk konduktor di bagian dalam bola nilai $E$ selalu nol."
    }
  }
];
