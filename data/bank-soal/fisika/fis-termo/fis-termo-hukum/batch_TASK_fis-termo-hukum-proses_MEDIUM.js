/**
 * Batch Task: TASK_fis-termo-hukum-proses_MEDIUM
 * SubTopic: Proses Termodinamika (fis-termo-hukum-proses)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-hukum-proses-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Usaha Total Siklus Tertutup Segitiga P-V",
    difficulty: "sedang",
    statement: "Suatu siklus termodinamika tertutup yang dialami oleh gas ideal digambarkan pada diagram $P-V$ dengan tiga lintasan berturut-turut searah jarum jam:<br>- Keadaan 1 ($V_1 = 2{,}0\\text{ m}^3$, $P_1 = 6{,}0 \\times 10^5\\text{ Pa}$) mengalami ekspansi isobarik menuju keadaan 2 ($V_2 = 5{,}0\\text{ m}^3$, $P_2 = 6{,}0 \\times 10^5\\text{ Pa}$)<br>- Keadaan 2 mengalami penurunan tekanan isokhorik menuju keadaan 3 ($V_3 = 5{,}0\\text{ m}^3$, $P_3 = 2{,}0 \\times 10^5\\text{ Pa}$)<br>- Keadaan 3 kembali ke keadaan 1 melalui lintasan garis lurus miring pada diagram $P-V$.<br>Besar usaha total neto yang dihasilkan oleh gas dalam satu siklus lengkap tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$900\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1800\\text{ kJ}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Usaha netto ($W_{\\text{net}}$) pada siklus tertutup dalam diagram $P-V$ setara dengan luas area tertutup di dalam kurva siklus:<br>$$W_{\\text{siklus}} = \\text{Luas daerah tertutup}$$<br>Untuk siklus berbentuk segitiga: $W = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}$.<br>Karena lintasan siklus berputar searah jarum jam (clockwise), usaha total bernilai positif (sistem menghasilkan kerja luar).",
      steps: "1. Tentukan panjang alas segitiga (perubahan volume):<br>$$\\text{alas} = V_2 - V_1 = 5{,}0\\text{ m}^3 - 2{,}0\\text{ m}^3 = 3{,}0\\text{ m}^3$$<br>2. Tentukan tinggi segitiga (selisih tekanan):<br>$$\\text{tinggi} = P_1 - P_3 = 6{,}0 \\times 10^5\\text{ Pa} - 2{,}0 \\times 10^5\\text{ Pa} = 4{,}0 \\times 10^5\\text{ Pa}$$<br>3. Hitung luas segitiga (usaha netto):<br>$$W_{\\text{siklus}} = \\frac{1}{2} \\times 3{,}0\\text{ m}^3 \\times (4{,}0 \\times 10^5\\text{ Pa}) = 6{,}0 \\times 10^5\\text{ Joule} = 600\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa mengalikan dengan faktor $1/2$ (menghitung luas persegi panjang penuh) akan menghasilkan $1200\\text{ kJ}$ (opsi D). Bentuk kurva siklus adalah segitiga siku-siku sehingga luasnya setengah dari persegi panjang."
    }
  },
  {
    id: "fis-termo-hukum-proses-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Hukum Poisson pada Kompresi Adiabatik",
    difficulty: "sedang",
    statement: "Sebuah sampel gas ideal monoatomik memiliki tetapan Laplace $\\gamma = 5/3$. Mula-mula gas tersebut menempati volume $V_1 = 8{,}0\\text{ liter}$ pada suhu mutlak $T_1 = 300\\text{ K}$. Gas tersebut kemudian dimampatkan secara adiabatik cepat hingga volumenya menyusut menjadi $V_2 = 1{,}0\\text{ liter}$. Suhu mutlak akhir gas setelah proses kompresi adiabatik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ K}$",
      "$800\\text{ K}$",
      "$1200\\text{ K}$",
      "$1600\\text{ K}$",
      "$2400\\text{ K}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada proses adiabatik kuasistatis gas ideal berlaku relasi Poisson antara suhu mutlak dan volume:<br>$$T_1 \\times V_1^{\\gamma - 1} = T_2 \\times V_2^{\\gamma - 1} \\implies T_2 = T_1 \\times \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$",
      steps: "1. Hitung eksponen $\\gamma - 1$:<br>$$\\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$$<br>2. Tentukan rasio kompresi volume: $\\frac{V_1}{V_2} = \\frac{8{,}0}{1{,}0} = 8$.<br>3. Hitung suhu akhir $T_2$:<br>$$T_2 = 300\\text{ K} \\times (8)^{2/3} = 300 \\times (8^{1/3})^2 = 300 \\times (2)^2 = 300 \\times 4 = 1200\\text{ K}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan menggunakan eksponen $\\gamma = 5/3$ langsung pada suhu. Eksponen untuk hubungan $T-V$ adalah $\\gamma - 1 = 2/3$. Selain itu, pada kompresi adiabatik suhu gas selalu melonjak naik karena kerja kompresi lingkungan diubah sepenuhnya menjadi energi dalam gas."
    }
  },
  {
    id: "fis-termo-hukum-proses-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Usaha Luar pada Ekspansi Adiabatik",
    difficulty: "sedang",
    statement: "Sebanyak $2\\text{ mol}$ gas ideal monoatomik mengalami ekspansi adiabatik sehingga suhunya turun dari $T_1 = 600\\text{ K}$ menjadi $T_2 = 400\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar usaha luar ($W$) yang dilakukan oleh gas tersebut selama ekspansi adiabatik adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1662{,}8\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$",
      "$3325{,}6\\text{ Joule}$",
      "$4988{,}4\\text{ Joule}$",
      "$7482{,}6\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum I Termodinamika, pada proses adiabatik tidak ada kalor yang mengalir ($Q = 0$):<br>$$\\Delta U = Q - W \\implies \\Delta U = -W \\implies W = -\\Delta U$$<br>Untuk gas monoatomik, perubahan energi dalam adalah $\\Delta U = \\frac{3}{2} n R (T_2 - T_1)$, sehingga usaha luar bernilai:<br>$$W = \\frac{3}{2} n R (T_1 - T_2)$$",
      steps: "1. Identifikasi data: $n = 2\\text{ mol}$, $T_1 = 600\\text{ K}$, $T_2 = 400\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Hitung selisih penurunan suhu: $\\Delta T_{\\text{turun}} = T_1 - T_2 = 600 - 400 = 200\\text{ K}$.<br>3. Hitung usaha luar $W$:<br>$$W = \\frac{3}{2} \\times 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 200\\text{ K}$$<br>$$W = 3 \\times 8{,}314 \\times 200 = 600 \\times 8{,}314 = 4988{,}4\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Perhatikan tanda usaha: saat gas berekspansi (memuai), gas melakukan usaha positif ($W > 0$) dengan mengorbankan energi dalamnya sendiri sehingga suhu gas turun dari $600\\text{ K}$ ke $400\\text{ K}$."
    }
  },
  {
    id: "fis-termo-hukum-proses-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Analisis Kemiringan Kurva Adiabatik vs Isotermal",
    difficulty: "sedang",
    statement: "Pada diagram $P-V$, sebuah kurva isotermal ($P V = \\text{konstan}$) dan sebuah kurva adiabatik ($P V^\\gamma = \\text{konstan}$ dengan $\\gamma > 1$) saling berpotongan di suatu titik keadaan $(P_0, V_0)$. Rasio perbandingan nilai mutlak kemiringan (gradien $\\left|\\frac{dP}{dV}\\right|$) kurva adiabatik terhadap kurva isotermal pada titik potong tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{\\gamma}$",
      "$1$",
      "$\\sqrt{\\gamma}$",
      "$\\gamma$",
      "$\\gamma^2$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Kemiringan kurva pada diagram $P-V$ dicari dengan turunan pertama $\\frac{dP}{dV}$:<br>1. Kurva isotermal ($P = C_1 V^{-1}$):<br>$$\\left(\\frac{dP}{dV}\\right)_{\\text{isotermal}} = -C_1 V^{-2} = -\\frac{P}{V}$$<br>2. Kurva adiabatik ($P = C_2 V^{-\\gamma}$):<br>$$\\left(\\frac{dP}{dV}\\right)_{\\text{adiabatik}} = -\\gamma C_2 V^{-\\gamma - 1} = -\\gamma \\frac{P}{V}$$<br>Rasio kemiringan kurva adiabatik terhadap kurva isotermal adalah $\\gamma$.",
      steps: "1. Hitung nilai mutlak gradien kurva adiabatik di titik $(P_0, V_0)$: $\\left|\\frac{dP}{dV}\\right|_{\\text{ad}} = \\gamma \\frac{P_0}{V_0}$.<br>2. Hitung nilai mutlak gradien kurva isotermal di titik yang sama: $\\left|\\frac{dP}{dV}\\right|_{\\text{iso}} = \\frac{P_0}{V_0}$.<br>3. Bagi kedua nilai gradien:<br>$$\\frac{\\left|\\frac{dP}{dV}\\right|_{\\text{ad}}}{\\left|\\frac{dP}{dV}\\right|_{\\text{iso}}} = \\frac{\\gamma \\frac{P_0}{V_0}}{\\frac{P_0}{V_0}} = \\gamma$$<br>4. Jadi, kurva adiabatik selalu $\\gamma$ kali lebih curam dibandingkan kurva isotermal.<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Ingat bahwa $\\gamma = C_p/C_v > 1$. Oleh karena itu, kurva adiabatik selalu tampak lebih curam menukik ke bawah dibandingkan kurva isotermal pada diagram $P-V$."
    }
  },
  {
    id: "fis-termo-hukum-proses-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Penerapan Hukum I Termodinamika pada Ekspansi Isobarik",
    difficulty: "sedang",
    statement: "Sebanyak $1{,}0\\text{ mol}$ gas ideal monoatomik berada di dalam silinder yang dilengkapi piston bebas. Gas dipanaskan pada tekanan tetap $P = 1{,}0 \\times 10^5\\text{ Pa}$ sehingga volumenya memuai dari volume awal $2{,}0 \\times 10^{-2}\\text{ m}^3$ menjadi volume akhir $4{,}0 \\times 10^{-2}\\text{ m}^3$. Kalor total ($Q$) yang diserap oleh gas selama proses pemuaian isobarik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2000\\text{ Joule}$",
      "$3000\\text{ Joule}$",
      "$4000\\text{ Joule}$",
      "$5000\\text{ Joule}$",
      "$6000\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum I Termodinamika: $Q = \\Delta U + W$.<br>- Usaha isobarik: $W = P \\times \\Delta V$.<br>- Perubahan energi dalam monoatomik: $\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} P \\times \\Delta V$.<br>- Kalor total yang diserap pada tekanan konstan: $Q = \\Delta U + W = \\frac{3}{2} P \\Delta V + P \\Delta V = \\frac{5}{2} P \\Delta V$.",
      steps: "1. Hitung pertambahan volume gas:<br>$$\\Delta V = 4{,}0 \\times 10^{-2}\\text{ m}^3 - 2{,}0 \\times 10^{-2}\\text{ m}^3 = 2{,}0 \\times 10^{-2}\\text{ m}^3$$<br>2. Hitung usaha luar yang dilakukan gas ($W$):<br>$$W = P \\times \\Delta V = (1{,}0 \\times 10^5\\text{ Pa}) \\times (2{,}0 \\times 10^{-2}\\text{ m}^3) = 2000\\text{ Joule}$$<br>3. Hitung perubahan energi dalam gas ($\\Delta U$):<br>$$\\Delta U = \\frac{3}{2} \\times 2000\\text{ J} = 3000\\text{ Joule}$$<br>4. Hitung kalor yang diserap ($Q$):<br>$$Q = \\Delta U + W = 3000\\text{ J} + 2000\\text{ J} = 5000\\text{ Joule}$$<br>(Atau langsung $Q = \\frac{5}{2} P \\Delta V = \\frac{5}{2} \\times 2000 = 5000\\text{ J}$).<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jebakan parsial: $2000\\text{ J}$ (opsi A) adalah usaha luar saja ($W$), sedangkan $3000\\text{ J}$ (opsi B) adalah perubahan energi dalam saja ($\\Delta U$). Kalor total yang diserap adalah jumlah keduanya ($Q = 5000\\text{ J}$)."
    }
  }
];
