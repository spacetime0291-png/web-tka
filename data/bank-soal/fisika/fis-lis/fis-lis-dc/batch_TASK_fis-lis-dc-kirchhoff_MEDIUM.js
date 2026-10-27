/**
 * Batch Task: TASK_fis-lis-dc-kirchhoff_MEDIUM
 * SubTopic: Hukum-Hukum Kirchhoff (fis-lis-dc-kirchhoff)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-dc-kirchhoff-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Analisis Arus Rangkaian Dua Loop Tak Simetris",
    difficulty: "sedang",
    statement: "Perhatikan rangkaian listrik dua loop berikut:<br>- Cabang kiri memuat sumber tegangan $\\mathcal{E}_1 = 8\\text{ V}$ dan resistor $R_1 = 2\\,\\Omega$.<br>- Cabang tengah bersama memuat resistor $R_2 = 3\\,\\Omega$ tanpa sumber tegangan.<br>- Cabang kanan memuat sumber tegangan $\\mathcal{E}_2 = 12\\text{ V}$ dan resistor $R_3 = 6\\,\\Omega$.<br>Kutub positif kedua sumber tegangan menghadap ke simpul atas ($A$) dan kutub negatif ke simpul bawah ($B$). Kuat arus listrik yang mengalir melalui cabang tengah $R_2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$3\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$5\\text{ Ampere}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan analisis simpul (Nodal Analysis) berbasis Hukum I Kirchhoff (KCL) pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$).",
      steps: "1. Tetapkan potensial acuan pada simpul bawah: $V_B = 0$. Misalkan potensial simpul atas adalah $V_A = V$.<br>2. Tuliskan arus yang meninggalkan simpul $A$ pada ketiga cabang:<br>- Cabang kiri: $I_1 = \\frac{V - 8}{2}$<br>- Cabang tengah: $I_2 = \\frac{V - 0}{3}$<br>- Cabang kanan: $I_3 = \\frac{V - 12}{6}$<br>3. Terapkan KCL pada simpul $A$:<br>$$\\frac{V - 8}{2} + \\frac{V}{3} + \\frac{V - 12}{6} = 0$$<br>Kalikan kedua ruas dengan 6:<br>$$3(V - 8) + 2V + (V - 12) = 0 \\implies 3V - 24 + 2V + V - 12 = 0$$<br>$$6V - 36 = 0 \\implies 6V = 36 \\implies V = 6\\text{ Volt}$$<br>4. Hitung kuat arus pada cabang tengah melalui resistor $R_2 = 3\\,\\Omega$:<br>$$I_2 = \\frac{V_A - 0}{R_2} = \\frac{6\\text{ V}}{3\\,\\Omega} = 2\\text{ Ampere}$$<br>5. Jadi kuat arus pada cabang tengah adalah $2\\text{ Ampere}$ (pilihan B).",
      pitfalls: "Kesalahan tanda aljabar saat merumuskan persamaan simpul atau salah memasukkan polaritas sumber tegangan."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Beda Potensial Titik Simpul Bebas pada Rangkaian Tertutup",
    difficulty: "sedang",
    statement: "Pada suatu rangkaian satu loop tertutup, terdapat baterai $\\mathcal{E}_1 = 24\\text{ V}$ (kutub positif di kiri), resistor $R_1 = 2\\,\\Omega$, resistor $R_2 = 3\\,\\Omega$, baterai $\\mathcal{E}_2 = 8\\text{ V}$ (kutub positif di kanan, berlawanan arah dengan $\\mathcal{E}_1$), dan resistor $R_3 = 3\\,\\Omega$. Titik $C$ terletak di antara $R_1$ dan $R_2$, sedangkan titik $D$ terletak di antara $R_3$ dan kutub negatif $\\mathcal{E}_1$. Jika titik $D$ dihubungkan ke tanah (grounding, $V_D = 0$), besar potensial listrik di titik $C$ ($V_C$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\text{ Volt}$",
      "$16\\text{ Volt}$",
      "$20\\text{ Volt}$",
      "$24\\text{ Volt}$",
      "$28\\text{ Volt}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Tentukan terlebih dahulu arus loop rangkaian tertutup menggunakan Hukum II Kirchhoff, kemudian hitung potensial mutlak titik $C$ dari titik acuan tanah ($V_D = 0$) melalui penelusuran lintasan.",
      steps: "1. Hitung GGL total loop searah jarum jam:<br>$$\\Sigma \\mathcal{E} = \\mathcal{E}_1 - \\mathcal{E}_2 = 24\\text{ V} - 8\\text{ V} = 16\\text{ Volt}$$<br>2. Hambatan total loop:<br>$$R_{\\text{total}} = R_1 + R_2 + R_3 = 2\\,\\Omega + 3\\,\\Omega + 3\\,\\Omega = 8\\,\\Omega$$<br>3. Hitung arus loop:<br>$$I = \\frac{\\Sigma \\mathcal{E}}{R_{\\text{total}}} = \\frac{16\\text{ V}}{8\\,\\Omega} = 2\\text{ Ampere}$$<br>4. Telusuri potensial dari titik $D$ ($V_D = 0$) menuju titik $C$ melewati baterai $\\mathcal{E}_1$ dan resistor $R_1$:<br>$$V_C = V_D + \\mathcal{E}_1 - I R_1 = 0 + 24\\text{ V} - (2\\text{ A} \\times 2\\,\\Omega) = 24\\text{ V} - 4\\text{ V} = 20\\text{ Volt}$$<br>5. Jadi potensial di titik $C$ adalah $20\\text{ Volt}$ (pilihan C).",
      pitfalls: "Lupa bahwa resistor $R_1$ dialiri arus yang menimbulkan penurunan tegangan $-I R_1$, sehingga langsung menjawab $V_C = 24\\text{ V}$."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Daya Disipasi Maksimum Teorema Transfer Daya",
    difficulty: "sedang",
    statement: "Sebuah sumber tegangan nyata memiliki GGL $\\mathcal{E} = 20\\text{ Volt}$ dan hambatan dalam $r = 4\\,\\Omega$. Sumber tegangan ini dihubungkan ke sebuah resistor beban variabel $R_L$. Berdasarkan teorema transfer daya maksimum, nilai hambatan $R_L$ agar menyerap daya listrik maksimum dari sumber beserta besar daya maksimum tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\,\\Omega$ dan $25\\text{ Watt}$",
      "$4\\,\\Omega$ dan $50\\text{ Watt}$",
      "$2\\,\\Omega$ dan $50\\text{ Watt}$",
      "$8\\,\\Omega$ dan $25\\text{ Watt}$",
      "$0\\,\\Omega$ dan $100\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema transfer daya maksimum (Maximum Power Transfer Theorem) menyatakan bahwa daya yang diserap oleh beban $R_L$ mencapai nilai maksimum ketika nilai resistansi beban sama dengan resistansi dalam sumber tegangan ($R_L = r$). Daya maksimum dirumuskan sebagai:<br>$$P_{\\text{maks}} = \\frac{\\mathcal{E}^2}{4r}$$",
      steps: "1. Syarat daya transfer maksimum tercapai saat:<br>$$R_L = r = 4\\,\\Omega$$<br>2. Kuat arus saat keadaan transfer maksimum:<br>$$I = \\frac{\\mathcal{E}}{R_L + r} = \\frac{20\\text{ V}}{4\\,\\Omega + 4\\,\\Omega} = \\frac{20\\text{ V}}{8\\,\\Omega} = 2{,}5\\text{ Ampere}$$<br>3. Hitung daya maksimum yang diserap beban $R_L$:<br>$$P_{\\text{maks}} = I^2 R_L = (2{,}5\\text{ A})^2 \\times 4\\,\\Omega = 6{,}25 \\times 4 = 25\\text{ Watt}$$<br>(Atau dengan rumus langsung: $P_{\\text{maks}} = \\frac{20^2}{4 \\times 4} = \\frac{400}{16} = 25\\text{ Watt}$).<br>4. Jadi jawabannya adalah $4\\,\\Omega$ dan $25\\text{ Watt}$ (pilihan A).",
      pitfalls: "Mengira daya maksimum tercapai saat hambatan beban nol ($R_L = 0$), padahal saat $R_L = 0$ daya yang diserap beban justru nol ($P = I^2 \\times 0 = 0$)."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Tegangan Terbuka dan Hambatan Ekuivalen Thevenin",
    difficulty: "sedang",
    statement: "Suatu rangkaian pembagi tegangan terdiri dari sumber tegangan ideal $V_s = 30\\text{ V}$ yang dihubungkan seri dengan dua resistor $R_1 = 20\\,\\Omega$ dan $R_2 = 30\\,\\Omega$. Sepasang terminal keluaran $A-B$ diambil melintasi resistor $R_2$. Nilai tegangan rangkaian terbuka (tegangan Thevenin $V_{th}$) dan resistansi Thevenin ($R_{th}$) yang dilihat dari terminal $A-B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$18\\text{ V}$ dan $12\\,\\Omega$",
      "$18\\text{ V}$ dan $50\\,\\Omega$",
      "$12\\text{ V}$ dan $12\\,\\Omega$",
      "$30\\text{ V}$ dan $12\\,\\Omega$",
      "$12\\text{ V}$ dan $25\\,\\Omega$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Teorema Thevenin menyatakan bahwa jaringan linier dua terminal dapat digantikan oleh sumber tegangan ekuivalen $V_{th}$ (tegangan rangkaian terbuka pada terminal) yang diseri dengan hambatan $R_{th}$ (hambatan ekuivalen saat sumber tegangan dinonaktifkan/hubung singkat).",
      steps: "1. Hitung tegangan Thevenin $V_{th}$ pada terminal terbuka $A-B$ (tegangan pada $R_2$):<br>$$V_{th} = \\frac{R_2}{R_1 + R_2} V_s = \\frac{30\\,\\Omega}{20\\,\\Omega + 30\\,\\Omega} \\times 30\\text{ V} = \\frac{30}{50} \\times 30\\text{ V} = 18\\text{ Volt}$$<br>2. Hitung resistansi Thevenin $R_{th}$ dengan menonaktifkan sumber tegangan ideal (hubung singkat sumber $V_s$):<br>Dari terminal $A-B$, resistor $R_1$ dan $R_2$ terhubung secara paralel:<br>$$R_{th} = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12\\,\\Omega$$<br>3. Jadi nilai $V_{th}$ dan $R_{th}$ berturut-turut adalah $18\\text{ V}$ dan $12\\,\\Omega$ (pilihan A).",
      pitfalls: "Menjumlahkan $R_1$ dan $R_2$ secara seri ($50\\,\\Omega$) saat mencari resistansi Thevenin, padahal terminal yang diuji melihat kedua resistor terhubung paralel ke ground."
    }
  },
  {
    id: "fis-lis-dc-kirchhoff-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-kirchhoff",
    category: "Dua Baterai Paralel Beda GGL dan Hambatan Dalam",
    difficulty: "sedang",
    statement: "Dua buah baterai berbeda dihubungkan secara paralel untuk menyuplai sebuah lampu beban berhambatan $R = 2\\,\\Omega$. Baterai pertama memiliki GGL $\\mathcal{E}_1 = 6\\text{ V}$ dan hambatan dalam $r_1 = 1\\,\\Omega$. Baterai kedua memiliki GGL $\\mathcal{E}_2 = 4\\text{ V}$ dan hambatan dalam $r_2 = 1\\,\\Omega$. Kuat arus listrik total yang mengalir melalui lampu tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$",
      "$2{,}5\\text{ Ampere}$",
      "$3{,}0\\text{ Ampere}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan Teorema Millman atau analisis simpul untuk cabang paralel multi-sumber guna menghitung beda potensial pada beban lampu ($V_L$), kemudian hitung arus lampu melalui $I_L = \\frac{V_L}{R}$.",
      steps: "1. Berdasarkan Teorema Millman, tegangan pada simpul paralel lampu adalah:<br>$$V_L = \\frac{\\frac{\\mathcal{E}_1}{r_1} + \\frac{\\mathcal{E}_2}{r_2}}{\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{R}}$$<br>2. Masukkan data ke dalam persamaan:<br>$$V_L = \\frac{\\frac{6}{1} + \\frac{4}{1}}{\\frac{1}{1} + \\frac{1}{1} + \\frac{1}{2}} = \\frac{6 + 4}{1 + 1 + 0{,}5} = \\frac{10}{2{,}5} = 4\\text{ Volt}$$<br>3. Hitung kuat arus yang melintasi lampu beban $R = 2\\,\\Omega$:<br>$$I_L = \\frac{V_L}{R} = \\frac{4\\text{ V}}{2\\,\\Omega} = 2\\text{ Ampere}$$<br>4. Jadi kuat arus listrik yang mengalir melalui lampu adalah $2\\text{ Ampere}$ (pilihan C).",
      pitfalls: "Siswa sering merata-ratakan GGL baterai secara langsung tanpa memperhitungkan pengaruh beban luar $R$."
    }
  }
];
