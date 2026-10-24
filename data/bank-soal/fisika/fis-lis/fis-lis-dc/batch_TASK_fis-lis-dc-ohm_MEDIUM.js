/**
 * Batch Task: TASK_fis-lis-dc-ohm_MEDIUM
 * SubTopic: Hukum Ohm & Hambatan Jenis (fis-lis-dc-ohm)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-dc-ohm-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Kerapatan Arus dan Kecepatan Hanyut Elektron",
    difficulty: "sedang",
    statement: "Seutas kawat tembaga berdiameter $d = 2\\text{ mm}$ dialiri arus listrik konstan sebesar $I = 6{,}28\\text{ A}$. Kerapatan elektron bebas tembaga adalah $n = 8{,}5 \\times 10^{28}\\text{ elektron/m}^3$ dan muatan satu elektron adalah $e = 1{,}6 \\times 10^{-19}\\text{ C}$. Jika digunakan nilai pendekatan $\\pi \\approx 3{,}14$, kecepatan hanyut (drift velocity $v_d$) elektron dalam kawat tersebut adalah mendekati ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}15\\text{ mm/s}$",
      "$1{,}5\\text{ mm/s}$",
      "$15\\text{ mm/s}$",
      "$150\\text{ mm/s}$",
      "$1{,}5\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hubungan mikroskopis kuat arus listrik ($I$) dengan kecepatan hanyut elektron pembawa muatan ($v_d$) dirumuskan sebagai:<br>$$I = n e A v_d \\implies v_d = \\frac{I}{n e A}$$<br>di mana $A = \\pi r^2$ adalah luas penampang kawat.",
      steps: "1. Jari-jari kawat: $r = \\frac{d}{2} = 1\\text{ mm} = 10^{-3}\\text{ m}$.<br>Luas penampang kawat:<br>$$A = \\pi r^2 = 3{,}14 \\times (10^{-3}\\text{ m})^2 = 3{,}14 \\times 10^{-6}\\text{ m}^2$$<br>2. Hitung kerapatan arus ($J$):<br>$$J = \\frac{I}{A} = \\frac{6{,}28\\text{ A}}{3{,}14 \\times 10^{-6}\\text{ m}^2} = 2 \\times 10^6\\text{ A/m}^2$$<br>3. Hitung kecepatan hanyut elektron ($v_d$):<br>$$v_d = \\frac{J}{n e} = \\frac{2 \\times 10^6\\text{ A/m}^2}{(8{,}5 \\times 10^{28}\\text{ m}^{-3}) \\times (1{,}6 \\times 10^{-19}\\text{ C})} = \\frac{2 \\times 10^6}{13{,}6 \\times 10^9} \\approx 1{,}47 \\times 10^{-4}\\text{ m/s} = 0{,}147\\text{ mm/s} \\approx 0{,}15\\text{ mm/s}$$<br>4. Jadi kecepatan hanyut elektron adalah sekitar $0{,}15\\text{ mm/s}$ (pilihan A).",
      pitfalls: "Siswa sering mengira elektron mengalir dengan kecepatan mendekati kecepatan cahaya. Pada kenyataannya, sinyal medan listrik merambat mendekati kecepatan cahaya, tetapi kecepatan gerak hanyut rata-rata elektron mikroskopis sebenarnya sangat lambat (fraksi milimeter per detik)."
    }
  },
  {
    id: "fis-lis-dc-ohm-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Hambatan Kawat Silinder Berongga",
    difficulty: "sedang",
    statement: "Sebuah konduktor silinder berongga memiliki panjang $L = 10\\text{ m}$, jari-jari dalam $r_1 = 1\\text{ mm}$, dan jari-jari luar $r_2 = 2\\text{ mm}$. Hambatan jenis bahan konduktor adalah $\\rho = 3{,}14 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Jika arus listrik mengalir sepanjang sumbu kawat (aksial) dan $\\pi \\approx 3{,}14$, besar hambatan listrik silinder berongga tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$11{,}1\\text{ m}\\Omega$",
      "$25{,}0\\text{ m}\\Omega$",
      "$33{,}3\\text{ m}\\Omega$",
      "$66{,}7\\text{ m}\\Omega$",
      "$100\\text{ m}\\Omega$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hambatan aksial silinder berongga dihitung dengan rumus hambatan kawat $R = \\rho \\frac{L}{A}$, dengan luas penampang konduktor berbentuk cincin melingkar:<br>$$A = \\pi (r_2^2 - r_1^2)$$",
      steps: "1. Hitung luas penampang konduktif kawat:<br>$$A = \\pi (r_2^2 - r_1^2) = 3{,}14 \\times [(2 \\times 10^{-3})^2 - (1 \\times 10^{-3})^2] = 3{,}14 \\times (4 - 1) \\times 10^{-6}\\text{ m}^2 = 9{,}42 \\times 10^{-6}\\text{ m}^2 = 3\\pi \\times 10^{-6}\\text{ m}^2$$<br>2. Masukkan ke dalam rumus hambatan kawat:<br>$$R = \\rho \\frac{L}{A} = (3{,}14 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}) \\times \\frac{10\\text{ m}}{3 \\times 3{,}14 \\times 10^{-6}\\text{ m}^2} = \\frac{10^{-7}}{3 \\times 10^{-6}} = \\frac{1}{30}\\,\\Omega \\approx 0{,}0333\\,\\Omega = 33{,}3\\text{ m}\\Omega$$<br>3. Jadi hambatan silinder berongga tersebut adalah $33{,}3\\text{ m}\\Omega$ (pilihan C).",
      pitfalls: "Lupa mengurangkan luas rongga dalam ($r_1$) sehingga hanya menghitung luas silinder luar $\\pi r_2^2$, yang menyebabkan nilai hambatan yang dihitung menjadi terlalu kecil."
    }
  },
  {
    id: "fis-lis-dc-ohm-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Daya Lampu pada Beda Potensial di Bawah Spesifikasi",
    difficulty: "sedang",
    statement: "Sebuah lampu pijar memiliki spesifikasi tertulis $100\\text{ W} / 220\\text{ V}$. Jika lampu tersebut dihubungkan ke sumber tegangan jala-jala yang sedang mengalami penurunan tegangan menjadi $110\\text{ V}$, daya listrik aktual yang diserap oleh lampu tersebut menjadi .... (anggap nilai hambatan filamen lampu tidak berubah)",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ Watt}$",
      "$50\\text{ Watt}$",
      "$75\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$200\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hambatan filamen lampu adalah konstan: $R = \\frac{V_0^2}{P_0}$. Daya yang diserap pada tegangan baru $V$ dirumuskan sebagai:<br>$$P = \\frac{V^2}{R} = \\left(\\frac{V}{V_0}\\right)^2 P_0$$",
      steps: "1. Tinjau perbandingan kuadrat tegangan kerja baru terhadap tegangan spesifikasi:<br>$$\\frac{V}{V_0} = \\frac{110\\text{ V}}{220\\text{ V}} = \\frac{1}{2}$$<br>2. Hitung daya baru lampu:<br>$$P = \\left(\\frac{1}{2}\\right)^2 \\times 100\\text{ W} = \\frac{1}{4} \\times 100\\text{ W} = 25\\text{ Watt}$$<br>3. Jadi daya listrik yang diserap lampu menjadi $25\\text{ Watt}$ (pilihan A).",
      pitfalls: "Siswa kerap mengira hubungan daya dan tegangan bersifat linier ($P \\propto V$) sehingga keliru menjawab setengahnya ($50\\text{ Watt}$). Hubungan daya terhadap tegangan pada hambatan tetap adalah kuadratik ($P \\propto V^2$)."
    }
  },
  {
    id: "fis-lis-dc-ohm-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Perhitungan Suhu Filamen dari Resistansi Pijar",
    difficulty: "sedang",
    statement: "Filamen wolfram dari sebuah bohlam lampu memiliki hambatan $R_0 = 25\\,\\Omega$ pada suhu kamar $20^\\circ\\text{C}$. Ketika lampu dinyalakan pada tegangan kerja normalnya $220\\text{ V}$, kuat arus listrik yang mengalir terukur sebesar $0{,}8\\text{ A}$. Jika koefisien suhu hambatan wolfram adalah $\\alpha = 4 \\times 10^{-3}\\text{ /}^\\circ\\text{C}$, suhu kerja filamen lampu saat menyala normal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.520^\\circ\\text{C}$",
      "$2.020^\\circ\\text{C}$",
      "$2.500^\\circ\\text{C}$",
      "$2.520^\\circ\\text{C}$",
      "$2.750^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Hambatan saat filamen membara panas dihitung dari Hukum Ohm $R = \\frac{V}{I}$. Kenaikan suhu $\\Delta T$ diperoleh dari hubungan termal hambatan: $R = R_0(1 + \\alpha \\Delta T)$. Suhu akhir adalah $T = T_0 + \\Delta T$.",
      steps: "1. Hitung hambatan kawat pada keadaan menyala panas:<br>$$R = \\frac{V}{I} = \\frac{220\\text{ V}}{0{,}8\\text{ A}} = 275\\,\\Omega$$<br>2. Gunakan persamaan kenaikan hambatan terhadap suhu:<br>$$R = R_0 (1 + \\alpha \\Delta T) \\implies 275 = 25 (1 + \\alpha \\Delta T)$$<br>$$1 + \\alpha \\Delta T = \\frac{275}{25} = 11 \\implies \\alpha \\Delta T = 10$$<br>3. Hitung kenaikan suhu $\\Delta T$:<br>$$\\Delta T = \\frac{10}{\\alpha} = \\frac{10}{4 \\times 10^{-3}\\text{ /}^\\circ\\text{C}} = 2.500^\\circ\\text{C}$$<br>4. Hitung suhu kerja akhir filamen:<br>$$T = T_0 + \\Delta T = 20^\\circ\\text{C} + 2.500^\\circ\\text{C} = 2.520^\\circ\\text{C}$$<br>5. Jadi suhu filamen adalah $2.520^\\circ\\text{C}$ (pilihan D).",
      pitfalls: "Menjawab kenaikan suhu $\\Delta T = 2.500^\\circ\\text{C}$ dan lupa menambahkan suhu awal kamar $T_0 = 20^\\circ\\text{C}$."
    }
  },
  {
    id: "fis-lis-dc-ohm-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-ohm",
    category: "Efisiensi Transmisi dan Rugi Daya Saluran Listrik",
    difficulty: "sedang",
    statement: "Sebuah pusat pembangkit listrik mentransmisikan daya sebesar $P = 10\\text{ MW}$ melalui saluran kawat transmisi yang memiliki total hambatan saluran $R = 4\\,\\Omega$. Perbandingan daya listrik yang hilang sebagai kalor pada kawat ($P_{\\text{rugi}}$) jika transmisi dilakukan pada tegangan $V_1 = 100\\text{ kV}$ dibandingkan dengan transmisi pada tegangan $V_2 = 500\\text{ kV}$ ($P_{\\text{rugi}, 1} : P_{\\text{rugi}, 2}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 5$",
      "$5 : 1$",
      "$1 : 25$",
      "$25 : 1$",
      "$125 : 1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Arus transmisi ditentukan oleh daya dan tegangan saluran: $I = \\frac{P}{V}$. Daya yang hilang akibat disipasi kalor Joule pada kawat saluran adalah:<br>$$P_{\\text{rugi}} = I^2 R = \\left(\\frac{P}{V}\\right)^2 R = \\frac{P^2 R}{V^2}$$<br>Daya rugi berbanding terbalik dengan kuadrat tegangan transmisi ($P_{\\text{rugi}} \\propto \\frac{1}{V^2}$).",
      steps: "1. Karena daya total $P$ dan hambatan kawat $R$ sama pada kedua kasus, berlaku hubungan perbandingan berbalik kuadrat tegangan:<br>$$\\frac{P_{\\text{rugi}, 1}}{P_{\\text{rugi}, 2}} = \\left(\\frac{V_2}{V_1}\\right)^2$$<br>2. Masukkan nilai tegangan transmisi:<br>$$\\frac{P_{\\text{rugi}, 1}}{P_{\\text{rugi}, 2}} = \\left(\\frac{500\\text{ kV}}{100\\text{ kV}}\\right)^2 = 5^2 = 25$$<br>3. Jadi perbandingan daya yang hilang adalah $25 : 1$ (pilihan D).",
      pitfalls: "Siswa sering mengira transmisi berdaya rugi sebanding dengan $V^2/R$, melupakan bahwa tegangan jatuh pada kawat saluran adalah $\\Delta V = I R$, bukan tegangan transmisi $V$ terhadap tanah."
    }
  }
];
