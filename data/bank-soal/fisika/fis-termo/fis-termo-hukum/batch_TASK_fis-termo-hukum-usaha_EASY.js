/**
 * Batch Task: TASK_fis-termo-hukum-usaha_EASY
 * SubTopic: Usaha & Energi Dalam (fis-termo-hukum-usaha)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-hukum-usaha-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Usaha Luar pada Kompresi Isobarik",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal berada di dalam silinder berpenghisap pada tekanan konstan $3{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut dimampatkan (dikompresi) oleh gaya luar sehingga volumenya menyusut dari volume awal $4{,}0\\text{ m}^3$ menjadi $1{,}0\\text{ m}^3$. Besar usaha yang dilakukan oleh lingkungan pada gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$900\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1500\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Usaha luar pada proses isobarik dirumuskan:<br>$$W = P \\times \\Delta V = P \\times (V_2 - V_1)$$<br>Ketika volume gas menyusut ($V_2 < V_1$), gas melakukan usaha negatif terhadap lingkungan, yang berarti lingkungan melakukan usaha positif sebesar $|W|$ pada gas.",
      steps: "1. Identifikasi nilai yang diketahui:<br>$P = 3{,}0 \\times 10^5\\text{ Pa}$<br>$V_1 = 4{,}0\\text{ m}^3$<br>$V_2 = 1{,}0\\text{ m}^3$<br>2. Hitung perubahan volume: $\\Delta V = 1{,}0 - 4{,}0 = -3{,}0\\text{ m}^3$.<br>3. Hitung usaha yang dilakukan oleh gas:<br>$$W = (3{,}0 \\times 10^5\\text{ Pa}) \\times (-3{,}0\\text{ m}^3) = -9{,}0 \\times 10^5\\text{ Joule} = -900\\text{ kJ}$$<br>4. Usaha yang dilakukan oleh lingkungan PADA gas adalah besaran positifnya: $+900\\text{ kJ}$.<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Perhatikan arah usaha: jika gas memuai, gas melakukan usaha pada lingkungan ($W > 0$). Jika gas dimampatkan, lingkungan melakukan usaha pada gas ($W_{\\text{lingkungan}} = -W_{\\text{gas}} = +900\\text{ kJ}$)."
    }
  },
  {
    id: "fis-termo-hukum-usaha-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Perubahan Energi Dalam Gas Monoatomik",
    difficulty: "mudah",
    statement: "Sebanyak $2\\text{ mol}$ gas helium (gas monoatomik) dipanaskan di dalam bejana tertutup sehingga suhunya naik sebesar $\\Delta T = 50\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar perubahan energi dalam ($\\Delta U$) gas helium tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$415{,}7\\text{ Joule}$",
      "$831{,}4\\text{ Joule}$",
      "$1247{,}1\\text{ Joule}$",
      "$1662{,}8\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Perubahan energi dalam ($\\Delta U$) dari $n$ mol gas ideal monoatomik hanya bergantung pada perubahan suhu mutlaknya ($\\Delta T$):<br>$$\\Delta U = \\frac{3}{2} n R \\Delta T$$",
      steps: "1. Data besaran: $n = 2\\text{ mol}$, $\\Delta T = 50\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Masukkan ke rumus energi dalam monoatomik:<br>$$\\Delta U = \\frac{3}{2} \\times 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 50\\text{ K}$$<br>$$\\Delta U = 3 \\times 8{,}314 \\times 50 = 150 \\times 8{,}314 = 1247{,}1\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Lupa menyertakan faktor derajat kebebasan $3/2$ akan menghasilkan nilai $n R \\Delta T = 831{,}4\\text{ Joule}$ (opsi B). Untuk gas monoatomik, faktor $3/2$ wajib digunakan."
    }
  },
  {
    id: "fis-termo-hukum-usaha-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Sifat Energi Dalam sebagai Fungsi Keadaan",
    difficulty: "mudah",
    statement: "Dalam termodinamika, energi dalam ($U$) dari suatu gas ideal digolongkan sebagai fungsi keadaan (state function). Pernyataan berikut yang paling tepat menjelaskan makna fisis dari fungsi keadaan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Perubahan energi dalam sangat bergantung pada kecepatan gas berekspansi",
      "Besar perubahan energi dalam hanya bergantung pada keadaan awal dan keadaan akhir sistem, tidak bergantung pada proses lintasan yang ditempuh",
      "Energi dalam hanya dapat diubah melalui proses perpindahan kalor tanpa usaha",
      "Nilai energi dalam selalu meningkat pada setiap proses perubahan keadaan gas",
      "Energi dalam gas ideal selalu bernilai nol pada setiap tekanan di atas atmosfer"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fungsi keadaan (state function) adalah besaran termodinamika yang nilainya ditentukan sepenuhnya oleh variabel keadaan sistem saat itu (seperti temperatur $T$, tekanan $P$, dan volume $V$), bukan oleh bagaimana sistem mencapai keadaan tersebut.<br>Oleh karena itu, perubahan energi dalam $\\Delta U = U_2 - U_1$ hanya bergantung pada kondisi awal dan akhir. Berbeda halnya dengan kalor ($Q$) dan usaha ($W$) yang merupakan fungsi lintasan (path functions).",
      steps: "1. Pahami perbedaan antara fungsi keadaan (state function) dan fungsi proses/lintasan (path function).<br>2. $U$ adalah fungsi keadaan; $Q$ dan $W$ adalah fungsi lintasan.<br>3. Jadi, perubahan $\\Delta U$ independen terhadap jalur lintasan proses.<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan menyamakan energi dalam ($U$) dengan usaha ($W$) atau kalor ($Q$). Usaha dan kalor bergantung pada rute lintasan kurva pada diagram $P-V$, sedangkan $\\Delta U$ hanya melihat selisih suhu akhir dan awal."
    }
  },
  {
    id: "fis-termo-hukum-usaha-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Perhitungan Usaha Luar Ekspansi Gas",
    difficulty: "mudah",
    statement: "Suatu gas ideal berekspansi di dalam silinder mesin pada tekanan konstan $5{,}0 \\times 10^5\\text{ Pa}$. Volume gas bertambah dari volume awal $0{,}20\\text{ m}^3$ menjadi volume akhir $0{,}60\\text{ m}^3$. Besar usaha luar yang dilakukan oleh gas ideal tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ kJ}$",
      "$150\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$250\\text{ kJ}$",
      "$300\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada proses isobarik, usaha luar dihitung dengan rumus:<br>$$W = P \\times (V_2 - V_1)$$",
      steps: "1. Data soal: $P = 5{,}0 \\times 10^5\\text{ Pa}$, $V_1 = 0{,}20\\text{ m}^3$, $V_2 = 0{,}60\\text{ m}^3$.<br>2. Hitung selisih volume: $\\Delta V = 0{,}60 - 0{,}20 = 0{,}40\\text{ m}^3$.<br>3. Hitung usaha luar $W$:<br>$$W = (5{,}0 \\times 10^5\\text{ Pa}) \\times 0{,}40\\text{ m}^3 = 2{,}0 \\times 10^5\\text{ Joule} = 200\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jika keliru mengalikan tekanan dengan volume akhir ($5 \\times 10^5 \\times 0{,}60 = 300\\text{ kJ}$), hasilnya akan salah (opsi E). Pengali yang benar adalah pertambahan volumenya ($\\Delta V = 0{,}40\\text{ m}^3$)."
    }
  },
  {
    id: "fis-termo-hukum-usaha-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Energi Dalam pada Satu Siklus Tertutup Penuh",
    difficulty: "mudah",
    statement: "Suatu mesin kalor beroperasi dengan memanfaatkan gas ideal yang mengalami serangkaian proses termodinamika tertutup hingga kembali tepat ke keadaan fisis semula (satu siklus termodinamika lengkap). Besar perubahan energi dalam total ($\\Delta U_{\\text{siklus}}$) dari gas ideal tersebut setelah menempuh satu siklus penuh adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Selalu sama dengan nol ($\\Delta U_{\\text{siklus}} = 0$)",
      "Selalu bernilai positif sebanding dengan kalor masuk",
      "Selalu bernilai negatif karena adanya gesekan mekanik piston",
      "Sama dengan usaha luar total yang dilakukan mesin",
      "Bergantung pada luas kurva tertutup pada diagram $P-V$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada satu siklus termodinamika tertutup lengkap:<br>- Keadaan akhir sistem identik dengan keadaan awalnya, sehingga $T_{\\text{akhir}} = T_{\\text{awal}}$.<br>- Karena energi dalam gas ideal murni merupakan fungsi keadaan suhu mutlak ($U = U(T)$), maka perubahan energi dalam pada satu siklus penuh pasti bernilai nol:<br>$$\\Delta U_{\\text{siklus}} = U_{\\text{akhir}} - U_{\\text{awal}} = 0$$<br>- Berdasarkan Hukum I Termodinamika, usaha netto siklus sama persis dengan kalor netto yang diserap: $W_{\\text{siklus}} = Q_{\\text{siklus}}$.",
      steps: "1. Analisis sifat siklus termodinamika tertutup.<br>2. Karena sistem kembali ke titik koordinat semula pada diagram $P-V$, suhu akhir sama dengan suhu mula-mula.<br>3. Jadi, $\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} n R (0) = 0$.<br>4. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Jangan keliru antara perubahan energi dalam ($\\Delta U_{\\text{siklus}} = 0$) dengan usaha netto siklus ($W_{\\text{siklus}} \\ne 0$). Usaha netto sama dengan luas kurva tertutup, tetapi $\\Delta U$ selalu nol."
    }
  }
];
