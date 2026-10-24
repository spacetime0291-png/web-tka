/**
 * Batch Task: TASK_fis-termo-gas-ideal_EASY
 * SubTopic: Persamaan Umum Gas Ideal (fis-termo-gas-ideal)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-gas-ideal-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Persamaan Keadaan Gas Ideal P-V-n-R-T",
    difficulty: "mudah",
    statement: "Sebanyak $2\\text{ mol}$ gas helium berada di dalam wadah bervolume $8{,}314\\text{ liter}$ pada suhu $27^\\circ\\text{C}$ ($300\\text{ K}$). Jika tetapan umum gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar tekanan gas helium di dalam wadah tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5 \\times 10^5\\text{ Pa}$",
      "$3{,}0 \\times 10^5\\text{ Pa}$",
      "$4{,}5 \\times 10^5\\text{ Pa}$",
      "$6{,}0 \\times 10^5\\text{ Pa}$",
      "$9{,}0 \\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Persamaan umum gas ideal dalam satuan SI menghubungkan tekanan ($P$), volume ($V$), jumlah mol ($n$), tetapan gas ($R$), dan suhu mutlak ($T$):<br>$$P \\times V = n \\times R \\times T \\implies P = \\frac{n \\times R \\times T}{V}$$",
      steps: "1. Konversikan volume ke satuan meter kubik: $V = 8{,}314\\text{ liter} = 8{,}314 \\times 10^{-3}\\text{ m}^3$.<br>2. Data lain: $n = 2\\text{ mol}$, $T = 300\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>3. Hitung tekanan $P$:<br>$$P = \\frac{2 \\times 8{,}314 \\times 300}{8{,}314 \\times 10^{-3}} = 2 \\times 300 \\times 10^3 = 600.000\\text{ Pa} = 6{,}0 \\times 10^5\\text{ Pa}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Lupa mengonversi volume dari liter ke $\\text{m}^3$ ($1\\text{ liter} = 10^{-3}\\text{ m}^3$) akan menghasilkan nilai tekanan $600\\text{ Pa}$ yang salah sebesar seribu kali lipat."
    }
  },
  {
    id: "fis-termo-gas-ideal-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Jumlah Partikel Gas Ideal dan Tetapan Boltzmann",
    difficulty: "mudah",
    statement: "Suatu tabung bervolume $3\\text{ liter}$ berisi gas ideal pada tekanan $1{,}38 \\times 10^5\\text{ Pa}$ dan suhu $300\\text{ K}$. Jika tetapan Boltzmann bernilai $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$, jumlah total molekul partikel gas di dalam tabung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0 \\times 10^{22}\\text{ partikel}$",
      "$3{,}0 \\times 10^{22}\\text{ partikel}$",
      "$1{,}0 \\times 10^{23}\\text{ partikel}$",
      "$3{,}0 \\times 10^{23}\\text{ partikel}$",
      "$1{,}0 \\times 10^{24}\\text{ partikel}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Persamaan gas ideal dapat dinyatakan dalam jumlah partikel ($N$) dan tetapan Boltzmann ($k_B$):<br>$$P \\times V = N \\times k_B \\times T \\implies N = \\frac{P \\times V}{k_B \\times T}$$",
      steps: "1. Konversikan volume ke $\\text{m}^3$: $V = 3\\text{ L} = 3 \\times 10^{-3}\\text{ m}^3$.<br>2. Data: $P = 1{,}38 \\times 10^5\\text{ Pa}$, $T = 300\\text{ K}$, $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$.<br>3. Hitung jumlah partikel $N$:<br>$$N = \\frac{(1{,}38 \\times 10^5) \\times (3 \\times 10^{-3})}{(1{,}38 \\times 10^{-23}) \\times 300} = \\frac{4{,}14 \\times 10^2}{4{,}14 \\times 10^{-21}} = 1{,}0 \\times 10^{23}\\text{ partikel}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Perhatikan pangkat sepuluh saat menyederhanakan pecahan eksponensial: $10^2 / 10^{-21} = 10^{2 - (-21)} = 10^{23}$."
    }
  },
  {
    id: "fis-termo-gas-ideal-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Energi Kinetik Rata-Rata Molekul Gas Monoatomik",
    difficulty: "mudah",
    statement: "Sebuah gas ideal monoatomik berada dalam keadaan setimbang termal pada suhu $300\\text{ K}$. Jika tetapan Boltzmann bernilai $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$, besar energi kinetik translasi rata-rata yang dimiliki oleh setiap satu butir molekul gas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}07 \\times 10^{-21}\\text{ Joule}$",
      "$4{,}14 \\times 10^{-21}\\text{ Joule}$",
      "$6{,}21 \\times 10^{-21}\\text{ Joule}$",
      "$8{,}28 \\times 10^{-21}\\text{ Joule}$",
      "$1{,}24 \\times 10^{-20}\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Berdasarkan teorema ekipartisi energi, molekul gas monoatomik memiliki 3 derajat kebebasan translasi ($f = 3$), sehingga energi kinetik rata-rata tiap molekul adalah:<br>$$\\bar{E}_k = \\frac{3}{2} k_B T$$",
      steps: "1. Data: $T = 300\\text{ K}$, $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$.<br>2. Masukkan ke rumus energi kinetik rata-rata:<br>$$\\bar{E}_k = \\frac{3}{2} \\times (1{,}38 \\times 10^{-23}\\text{ J/K}) \\times 300\\text{ K}$$<br>$$\\bar{E}_k = 1{,}5 \\times 414 \\times 10^{-23} = 621 \\times 10^{-23}\\text{ J} = 6{,}21 \\times 10^{-21}\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan keliru menggunakan rumus $\\bar{E}_k = \\frac{1}{2} k_B T$ (yang hanya untuk satu derajat kebebasan) atau $\\bar{E}_k = k_B T$ (opsi B). Untuk molekul gas monoatomik pada ruang tiga dimensi, derajat kebebasan translasi adalah 3 sehingga faktor pengalinya adalah $3/2$."
    }
  },
  {
    id: "fis-termo-gas-ideal-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Kelajuan Efektif Molekul Gas (v_rms)",
    difficulty: "mudah",
    statement: "Kelajuan efektif molekul gas ideal di dalam sebuah tabung tercatat sebesar $v_0$ pada suhu mutlak $T$. Jika gas tersebut dipanaskan hingga suhu mutlaknya meningkat menjadi $4\\,T$ pada volume tetap, kelajuan efektif molekul gas sekarang menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}\\,v_0$",
      "$\\sqrt{2}\\,v_0$",
      "$2\\,v_0$",
      "$4\\,v_0$",
      "$16\\,v_0$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kelajuan efektif akar kuadrat rata-rata ($v_{\\text{rms}}$) molekul gas ideal sebanding dengan akar kuadrat dari suhu mutlaknya:<br>$$v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m_0}} = \\sqrt{\\frac{3 R T}{M_r}} \\implies v_{\\text{rms}} \\propto \\sqrt{T}$$",
      steps: "1. Tulis perbandingan kelajuan efektif terhadap suhu:<br>$$\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}}$$<br>2. Substitusikan $T_2 = 4\\,T_1$:<br>$$\\frac{v_2}{v_0} = \\sqrt{\\frac{4\\,T_1}{T_1}} = \\sqrt{4} = 2 \\implies v_2 = 2\\,v_0$$<br>3. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jebakan linearitas: kelajuan efektif berbanding lurus dengan AKAR suhu ($\\sqrt{T}$), bukan suhu langsung ($T$). Kenaikan suhu $4$ kali lipat hanya menghasilkan kenaikan kelajuan $2$ kali lipat, bukan $4$ kali lipat (opsi D)."
    }
  },
  {
    id: "fis-termo-gas-ideal-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-ideal",
    category: "Energi Dalam Gas Ideal Monoatomik",
    difficulty: "mudah",
    statement: "Sebanyak $4\\text{ mol}$ gas ideal monoatomik berada di dalam ruangan tertutup pada suhu mutlak $400\\text{ K}$. Jika tetapan gas universal adalah $R$, besar energi dalam total ($U$) dari gas ideal tersebut dinyatakan dalam $R$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$800\\,R\\text{ Joule}$",
      "$1200\\,R\\text{ Joule}$",
      "$1600\\,R\\text{ Joule}$",
      "$2400\\,R\\text{ Joule}$",
      "$4800\\,R\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Energi dalam ($U$) dari $n$ mol gas ideal monoatomik adalah jumlah energi kinetik seluruh molekul gas:<br>$$U = N \\times \\bar{E}_k = n \\times N_A \\times \\left(\\frac{3}{2} k_B T\\right) = \\frac{3}{2} n R T$$",
      steps: "1. Data: $n = 4\\text{ mol}$, $T = 400\\text{ K}$.<br>2. Masukkan ke rumus energi dalam monoatomik:<br>$$U = \\frac{3}{2} \\times 4\\text{ mol} \\times R \\times 400\\text{ K}$$<br>$$U = 6 \\times 400 \\times R = 2400\\,R\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Perhatikan koefisien derajat kebebasan: untuk gas monoatomik faktornya adalah $3/2$. Menggunakan faktor $5/2$ (gas diatomik pada suhu kamar) akan menghasilkan $4000\\,R\\text{ J}$, sedangkan lupa mengalikan dengan $3/2$ menghasilkan $1600\\,R\\text{ J}$ (opsi C)."
    }
  }
];
