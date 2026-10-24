/**
 * Batch Task: TASK_fis-lis-dc-rangkaian_EASY
 * SubTopic: Rangkaian Arus Searah & Hukum Kirchhoff (fis-lis-dc-rangkaian)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-lis-dc-rangkaian-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Hukum I Kirchhoff dan Kekekalan Muatan",
    difficulty: "mudah",
    statement: "Pada suatu titik percabangan rangkaian listrik tertutup, terdapat lima kawat penghantar. Arus listrik yang masuk ke titik percabangan adalah $I_1 = 4\\text{ A}$ dan $I_2 = 6\\text{ A}$. Arus yang keluar dari titik percabangan melalui dua kawat lainnya adalah $I_3 = 3\\text{ A}$ dan $I_4 = 5\\text{ A}$. Berdasarkan Hukum I Kirchhoff, besar dan arah arus pada kawat kelima ($I_5$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ A}$, meninggalkan titik percabangan",
      "$2\\text{ A}$, menuju titik percabangan",
      "$8\\text{ A}$, meninggalkan titik percabangan",
      "$10\\text{ A}$, menuju titik percabangan",
      "$18\\text{ A}$, meninggalkan titik percabangan"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum I Kirchhoff (Kirchhoff's Current Law / KCL) berlandaskan prinsip kekekalan muatan listrik, yang menyatakan bahwa jumlah aljabar arus listrik yang masuk ke suatu titik percabangan sama dengan jumlah arus yang keluar dari titik percabangan tersebut:<br>$$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$",
      steps: "1. Hitung total arus masuk yang diketahui:<br>$$\\Sigma I_{\\text{masuk, diketahui}} = I_1 + I_2 = 4\\text{ A} + 6\\text{ A} = 10\\text{ A}$$<br>2. Hitung total arus keluar yang diketahui:<br>$$\\Sigma I_{\\text{keluar, diketahui}} = I_3 + I_4 = 3\\text{ A} + 5\\text{ A} = 8\\text{ A}$$<br>3. Karena total arus masuk ($10\\text{ A}$) lebih besar dari total arus keluar ($8\\text{ A}$), maka kawat kelima harus mengalirkan arus keluar dari titik percabangan agar seimbang:<br>$$10\\text{ A} = 8\\text{ A} + I_5 \\implies I_5 = 10\\text{ A} - 8\\text{ A} = 2\\text{ A}$$<br>4. Jadi arus $I_5$ bernilai $2\\text{ A}$ dengan arah meninggalkan (keluar dari) titik percabangan (pilihan A).",
      pitfalls: "Salah menentukan arah arus (mengira masuk ke percabangan) sehingga salah memilih pilihan B."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Pembagi Tegangan pada Rangkaian Seri",
    difficulty: "mudah",
    statement: "Dua buah resistor $R_1 = 20\\,\\Omega$ dan $R_2 = 30\\,\\Omega$ dihubungkan secara seri dengan sumber tegangan searah $V = 15\\text{ Volt}$. Besar beda potensial pada ujung-ujung resistor $R_2$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3\\text{ Volt}$",
      "$6\\text{ Volt}$",
      "$9\\text{ Volt}$",
      "$10\\text{ Volt}$",
      "$12\\text{ Volt}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada rangkaian seri, arus yang mengalir pada setiap resistor sama besar ($I = \\text{konstan}$). Tegangan terbagi sebanding dengan nilai masing-masing hambatan (prinsip pembagi tegangan):<br>$$V_2 = \\frac{R_2}{R_1 + R_2} V$$",
      steps: "1. Hitung hambatan total seri:<br>$$R_{\\text{total}} = R_1 + R_2 = 20\\,\\Omega + 30\\,\\Omega = 50\\,\\Omega$$<br>2. Hitung kuat arus rangkaian:<br>$$I = \\frac{V}{R_{\\text{total}}} = \\frac{15\\text{ V}}{50\\,\\Omega} = 0{,}3\\text{ A}$$<br>3. Hitung beda potensial pada $R_2$:<br>$$V_2 = I \\times R_2 = 0{,}3\\text{ A} \\times 30\\,\\Omega = 9\\text{ Volt}$$<br>4. Jadi beda potensial pada $R_2$ adalah $9\\text{ Volt}$ (pilihan C).",
      pitfalls: "Tertukar menghitung tegangan pada $R_1$ ($V_1 = 0{,}3 \\times 20 = 6\\text{ Volt}$) alih-alih tegangan pada $R_2$."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Pembagi Arus pada Rangkaian Paralel",
    difficulty: "mudah",
    statement: "Dua buah resistor $R_1 = 6\\,\\Omega$ dan $R_2 = 12\\,\\Omega$ dihubungkan secara paralel. Jika arus total yang masuk ke titik percabangan paralel tersebut adalah $I_{\\text{total}} = 3\\text{ Ampere}$, kuat arus yang mengalir melalui resistor $R_1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}5\\text{ Ampere}$",
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$",
      "$2{,}5\\text{ Ampere}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Pada rangkaian paralel, beda potensial pada setiap cabang sama besar. Kuat arus pada cabang terbagi berbanding terbalik dengan nilai hambatannya (prinsip pembagi arus):<br>$$I_1 = \\frac{R_2}{R_1 + R_2} I_{\\text{total}}$$",
      steps: "1. Gunakan rumus pembagi arus untuk cabang $R_1$:<br>$$I_1 = \\frac{R_2}{R_1 + R_2} \\times I_{\\text{total}}$$<br>2. Masukkan data: $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $I_{\\text{total}} = 3\\text{ A}$:<br>$$I_1 = \\frac{12}{6 + 12} \\times 3\\text{ A} = \\frac{12}{18} \\times 3\\text{ A} = \\frac{2}{3} \\times 3\\text{ A} = 2\\text{ Ampere}$$<br>3. Jadi kuat arus pada resistor $R_1$ adalah $2\\text{ Ampere}$ (pilihan D).",
      pitfalls: "Siswa sering menggunakan perbandingan langsung $\\frac{R_1}{R_1+R_2}$ seperti pada pembagi tegangan, sehingga keliru menghitung $I_1 = 1\\text{ A}$."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Arus Total Rangkaian Kombinasi Resistor",
    difficulty: "mudah",
    statement: "Resistor $R_1 = 4\\,\\Omega$ dan $R_2 = 12\\,\\Omega$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai seri dengan resistor $R_3 = 5\\,\\Omega$. Rangkaian kombinasi tersebut dihubungkan ke sumber tegangan ideal $24\\text{ Volt}$. Kuat arus listrik total yang keluar dari sumber tegangan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$3\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$6\\text{ Ampere}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk mencari arus total rangkaian kombinasi, sederhanakan rangkaian terlebih dahulu menjadi hambatan pengganti total ($R_{\\text{total}}$), kemudian gunakan Hukum Ohm: $I_{\\text{total}} = \\frac{V}{R_{\\text{total}}}$.",
      steps: "1. Hitung hambatan pengganti paralel $R_1$ dan $R_2$:<br>$$R_p = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3\\,\\Omega$$<br>2. Hitung hambatan pengganti total ($R_p$ seri dengan $R_3$):<br>$$R_{\\text{total}} = R_p + R_3 = 3\\,\\Omega + 5\\,\\Omega = 8\\,\\Omega$$<br>3. Hitung arus total dari sumber $V = 24\\text{ V}$:<br>$$I_{\\text{total}} = \\frac{V}{R_{\\text{total}}} = \\frac{24\\text{ V}}{8\\,\\Omega} = 3\\text{ Ampere}$$<br>4. Jadi arus totalnya adalah $3\\text{ Ampere}$ (pilihan C).",
      pitfalls: "Menjumlahkan ketiga resistor secara seri ($4 + 12 + 5 = 21\\,\\Omega$) tanpa menyelesaikan susunan paralel $R_1$ dan $R_2$ terlebih dahulu."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Tegangan Jepit Baterai dengan Hambatan Dalam",
    difficulty: "mudah",
    statement: "Sebuah baterai memiliki Gaya Gerak Listrik (GGL) $\\mathcal{E} = 12\\text{ Volt}$ dan hambatan dalam $r = 0{,}5\\,\\Omega$. Jika baterai tersebut dihubungkan dengan sebuah lampu pijar yang memiliki hambatan $R = 5{,}5\\,\\Omega$, besar tegangan jepit antara kedua kutub baterai saat rangkaian tertutup adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ Volt}$",
      "$11\\text{ Volt}$",
      "$11{,}5\\text{ Volt}$",
      "$12\\text{ Volt}$",
      "$12{,}5\\text{ Volt}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Tegangan jepit ($V_{\\text{jepit}}$) adalah beda potensial antara kutub-kutub sumber tegangan ketika arus listrik mengalir. Tegangan jepit selalu lebih kecil daripada GGL ($\\mathcal{E}$) karena adanya tegangan jatuh pada hambatan dalam ($I r$):<br>$$V_{\\text{jepit}} = \\mathcal{E} - I r = I R$$",
      steps: "1. Hitung hambatan total rangkaian tertutup:<br>$$R_{\\text{total}} = R + r = 5{,}5\\,\\Omega + 0{,}5\\,\\Omega = 6{,}0\\,\\Omega$$<br>2. Hitung arus yang mengalir pada rangkaian:<br>$$I = \\frac{\\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{6\\,\\Omega} = 2\\text{ Ampere}$$<br>3. Hitung tegangan jepit baterai:<br>$$V_{\\text{jepit}} = \\mathcal{E} - I r = 12\\text{ V} - (2\\text{ A} \\times 0{,}5\\,\\Omega) = 12\\text{ V} - 1\\text{ V} = 11\\text{ Volt}$$<br>(Atau melalui $V_{\\text{jepit}} = I R = 2\\text{ A} \\times 5{,}5\\,\\Omega = 11\\text{ Volt}$).<br>4. Jadi tegangan jepit baterai adalah $11\\text{ Volt}$ (pilihan B).",
      pitfalls: "Siswa sering menganggap tegangan jepit selalu sama dengan nilai GGL baterai ($12\\text{ V}$), mengabaikan rugi tegangan jatuh internal sebesar $I r = 1\\text{ V}$."
    }
  }
];
