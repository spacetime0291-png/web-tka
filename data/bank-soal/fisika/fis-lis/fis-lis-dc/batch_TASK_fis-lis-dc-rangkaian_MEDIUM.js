/**
 * Batch Task: TASK_fis-lis-dc-rangkaian_MEDIUM
 * SubTopic: Rangkaian Arus Searah & Hukum Kirchhoff (fis-lis-dc-rangkaian)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-dc-rangkaian-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Hukum II Kirchhoff Rangkaian Satu Loop",
    difficulty: "sedang",
    statement: "Suatu rangkaian listrik satu loop tertutup memuat dua buah sumber tegangan dan tiga buah resistor yang dirangkai seri: $\\mathcal{E}_1 = 18\\text{ Volt}$, $\\mathcal{E}_2 = 6\\text{ Volt}$ (dengan kutub positif kedua baterai saling berhadapan), serta resistor $R_1 = 2\\,\\Omega$, $R_2 = 3\\,\\Omega$, dan $R_3 = 5\\,\\Omega$. Jika hambatan dalam baterai diabaikan, besar kuat arus listrik yang mengalir dalam loop dan daya yang diserap oleh resistor $R_3$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}2\\text{ A}$ dan $7{,}2\\text{ W}$",
      "$1{,}2\\text{ A}$ dan $6{,}0\\text{ W}$",
      "$2{,}4\\text{ A}$ dan $28{,}8\\text{ W}$",
      "$0{,}8\\text{ A}$ dan $3{,}2\\text{ W}$",
      "$1{,}8\\text{ A}$ dan $16{,}2\\text{ W}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hukum II Kirchhoff menyatakan bahwa jumlah aljabar perubahan potensial dalam suatu rangkaian tertutup (loop) sama dengan nol:<br>$$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$$<br>Daya disipasi pada suatu resistor adalah $P = I^2 R$.",
      steps: "1. Tinjau arah loop searah putaran arus dominan yang didorong oleh $\\mathcal{E}_1$. Karena kutub positif saling berhadapan, kedua sumber tegangan saling melawan:<br>$$\\Sigma \\mathcal{E} = \\mathcal{E}_1 - \\mathcal{E}_2 = 18\\text{ V} - 6\\text{ V} = 12\\text{ Volt}$$<br>2. Hambatan total rangkaian seri:<br>$$R_{\\text{total}} = R_1 + R_2 + R_3 = 2\\,\\Omega + 3\\,\\Omega + 5\\,\\Omega = 10\\,\\Omega$$<br>3. Hitung kuat arus rangkaian:<br>$$I = \\frac{\\Sigma \\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{10\\,\\Omega} = 1{,}2\\text{ Ampere}$$<br>4. Hitung daya yang diserap oleh resistor $R_3 = 5\\,\\Omega$:<br>$$P_3 = I^2 R_3 = (1{,}2\\text{ A})^2 \\times 5\\,\\Omega = 1{,}44 \\times 5 = 7{,}2\\text{ Watt}$$<br>5. Jadi kuat arus adalah $1{,}2\\text{ A}$ dan dayanya adalah $7{,}2\\text{ W}$ (pilihan A).",
      pitfalls: "Siswa sering menjumlahkan kedua sumber tegangan ($18 + 6 = 24\\text{ V}$) karena tidak memperhatikan orientasi kutub positif yang saling berhadapan (berlawanan tanda)."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Analisis Arus Rangkaian Dua Loop",
    difficulty: "sedang",
    statement: "Suatu rangkaian listrik dua loop memiliki tiga cabang paralel yang bertemu di titik simpul $A$ (atas) dan $B$ (bawah):<br>- Cabang kiri memuat sumber tegangan $\\mathcal{E}_1 = 12\\text{ V}$ (kutub positif menghadap ke $A$) dan resistor $R_1 = 4\\,\\Omega$.<br>- Cabang tengah memuat resistor $R_2 = 2\\,\\Omega$ saja tanpa sumber tegangan.<br>- Cabang kanan memuat sumber tegangan $\\mathcal{E}_2 = 6\\text{ V}$ (kutub positif menghadap ke $A$) dan resistor $R_3 = 4\\,\\Omega$.<br>Besar kuat arus listrik yang mengalir melalui resistor $R_2$ pada cabang tengah adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}00\\text{ Ampere}$",
      "$1{,}50\\text{ Ampere}$",
      "$2{,}25\\text{ Ampere}$",
      "$3{,}00\\text{ Ampere}$",
      "$4{,}50\\text{ Ampere}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Analisis tegangan simpul (Nodal Analysis) menerapkan KCL pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$).",
      steps: "1. Tetapkan potensial acuan pada simpul $B$: $V_B = 0$. Misalkan potensial pada simpul $A$ adalah $V_A = V$.<br>2. Tuliskan persamaan arus yang meninggalkan simpul $A$ untuk ketiga cabang:<br>- Cabang kiri: $I_{\\text{kiri}} = \\frac{V - 12}{4}$<br>- Cabang tengah: $I_{\\text{tengah}} = \\frac{V - 0}{2}$<br>- Cabang kanan: $I_{\\text{kanan}} = \\frac{V - 6}{4}$<br>3. Terapkan Hukum I Kirchhoff pada simpul $A$:<br>$$\\frac{V - 12}{4} + \\frac{V}{2} + \\frac{V - 6}{4} = 0$$<br>Kalikan seluruh persamaan dengan 4:<br>$$(V - 12) + 2V + (V - 6) = 0 \\implies 4V - 18 = 0 \\implies V = \\frac{18}{4} = 4{,}5\\text{ Volt}$$<br>4. Hitung arus pada cabang tengah melalui resistor $R_2 = 2\\,\\Omega$:<br>$$I_2 = \\frac{V_A - 0}{R_2} = \\frac{4{,}5\\text{ V}}{2\\,\\Omega} = 2{,}25\\text{ Ampere}$$<br>5. Jadi kuat arus pada cabang tengah adalah $2{,}25\\text{ Ampere}$ (pilihan C).",
      pitfalls: "Kesalahan tanda saat menuliskan persamaan loop atau salah memasukkan polaritas baterai, serta kekeliruan aritmetika pecahan."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Prinsip Kesetimbangan Jembatan Wheatstone",
    difficulty: "sedang",
    statement: "Lima buah resistor dirangkai dalam konfigurasi jembatan Wheatstone. Resistor $R_1 = 4\\,\\Omega$, $R_2 = 6\\,\\Omega$, $R_3 = 12\\,\\Omega$, dan $R_4 = 18\\,\\Omega$ membentuk empat lengan jembatan, sedangkan sebuah galvanometer dengan hambatan dalam $R_G = 10\\,\\Omega$ dipasang melintang pada jembatan diagonal di antara kedua lengan. Jika ujung-ujung jembatan dihubungkan ke sumber tegangan $20\\text{ Volt}$, kuat arus listrik yang mengalir melalui galvanometer adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ Ampere}$",
      "$0{,}5\\text{ Ampere}$",
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jembatan Wheatstone dikatakan setimbang apabila hasil kali nilai resistansi lengan yang saling berseberangan bernilai sama:<br>$$R_1 \\times R_4 = R_2 \\times R_3$$<br>Dalam keadaan setimbang, potensial pada kedua ujung cabang diagonal bernilai sama sehingga tidak ada arus yang mengalir melalui cabang tengah ($I_G = 0$).",
      steps: "1. Periksa syarat kesetimbangan jembatan dengan mengalikan lengan-lengan yang bersilangan:<br>$$R_1 \\times R_4 = 4\\,\\Omega \\times 18\\,\\Omega = 72\\,\\Omega^2$$<br>$$R_2 \\times R_3 = 6\\,\\Omega \\times 12\\,\\Omega = 72\\,\\Omega^2$$<br>2. Karena $R_1 R_4 = R_2 R_3 = 72\\,\\Omega^2$, maka jembatan berada dalam keadaan setimbang sempurna.<br>3. Beda potensial pada ujung-ujung galvanometer bernilai nol ($\\Delta V_G = 0$).<br>4. Berdasarkan Hukum Ohm, arus yang melalui galvanometer adalah:<br>$$I_G = \\frac{\\Delta V_G}{R_G} = \\frac{0}{10\\,\\Omega} = 0\\text{ Ampere}$$<br>5. Jadi kuat arus pada galvanometer adalah $0\\text{ Ampere}$ (pilihan A).",
      pitfalls: "Mencoba menghitung arus dengan analisis loop yang rumit tanpa memeriksa terlebih dahulu perkalian silang lengan jembatan yang menunjukkan kondisi setimbang."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Perluasan Batas Ukur Amperemeter (Hambatan Shunt)",
    difficulty: "sedang",
    statement: "Sebuah galvanometer (amperemeter dasar) memiliki hambatan dalam $R_A = 90\\,\\Omega$ dan batas ukur arus maksimum sebesar $10\\text{ mA}$. Agar alat tersebut dapat digunakan untuk mengukur arus listrik hingga mencapai batas ukur baru sebesar $100\\text{ mA}$, besar hambatan cabang (shunt) yang harus dipasang secara paralel adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1\\,\\Omega$",
      "$9\\,\\Omega$",
      "$10\\,\\Omega$",
      "$90\\,\\Omega$",
      "$810\\,\\Omega$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Untuk memperbesar batas ukur amperemeter sebanyak $n$ kali lipat ($n = \\frac{I}{I_A}$), dipasang resistor shunt ($R_{sh}$) secara paralel dengan galvanometer:<br>$$R_{sh} = \\frac{R_A}{n - 1}$$",
      steps: "1. Hitung faktor perbesaran batas ukur ($n$):<br>$$n = \\frac{I_{\\text{baru}}}{I_{\\text{lama}}} = \\frac{100\\text{ mA}}{10\\text{ mA}} = 10$$<br>2. Hitung hambatan shunt yang diperlukan:<br>$$R_{sh} = \\frac{R_A}{n - 1} = \\frac{90\\,\\Omega}{10 - 1} = \\frac{90\\,\\Omega}{9} = 10\\,\\Omega$$<br>3. Jadi besar hambatan shunt yang harus dipasang secara paralel adalah $10\\,\\Omega$ (pilihan C).",
      pitfalls: "Membagi langsung dengan $n$ ($90 / 10 = 9\\,\\Omega$) tanpa mengurangkan angka satu pada penyebut ($n - 1$), atau tertukar dengan rumus hambatan muka voltmeter ($R_m = (n - 1) R_V$)."
    }
  },
  {
    id: "fis-lis-dc-rangkaian-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-rangkaian",
    category: "Kondisi Transien dan Tunak Rangkaian RC Arus Searah",
    difficulty: "sedang",
    statement: "Sebuah kapasitor yang mula-mula kosong berkapasitas $C = 10\\,\\mu\\text{F}$ dirangkai seri dengan sebuah resistor $R = 100\\,\\text{k}\\Omega$ dan dihubungkan ke sumber tegangan arus searah $V = 12\\text{ Volt}$ melalui sebuah sakelar. Tepat pada saat sakelar baru ditutup ($t = 0$), kuat arus yang mengalir dalam rangkaian adalah $I_0$, dan setelah sakelar tertutup sangat lama hingga mencapai keadaan tunak ($t \\to \\infty$), kuat arus dalam rangkaian adalah $I_\\infty$. Nilai $I_0$ dan $I_\\infty$ berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}12\\text{ mA}$ dan $0\\text{ mA}$",
      "$0\\text{ mA}$ dan $0{,}12\\text{ mA}$",
      "$0{,}12\\text{ mA}$ dan $0{,}12\\text{ mA}$",
      "$1{,}2\\text{ mA}$ dan $0\\text{ mA}$",
      "$0\\text{ mA}$ dan $1{,}2\\text{ mA}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada rangkaian RC arus searah:<br>- Saat awal sakelar ditutup ($t = 0$), kapasitor belum menyimpan muatan ($q = 0 \\implies V_C = 0$), sehingga berlaku seperti kawat hubung singkat (short circuit) dengan arus maksimum $I_0 = \\frac{V}{R}$.<br>- Pada keadaan tunak ($t \\to \\infty$), kapasitor terisi penuh muatan hingga $V_C = V$, sehingga berlaku seperti rangkaian terbuka (open circuit) dan arus berhenti mengalir ($I_\\infty = 0$).",
      steps: "1. Konversikan hambatan: $R = 100\\,\\text{k}\\Omega = 10^5\\,\\Omega$.<br>2. Pada $t = 0$ (saat awal):<br>$$I_0 = \\frac{V}{R} = \\frac{12\\text{ V}}{10^5\\,\\Omega} = 1{,}2 \\times 10^{-4}\\text{ A} = 0{,}12\\text{ mA}$$<br>3. Pada $t \\to \\infty$ (keadaan tunak):<br>Tegangan kapasitor menyamai tegangan baterai sehingga beda potensial pada resistor nol ($V_R = 0$):<br>$$I_\\infty = 0\\text{ mA}$$<br>4. Jadi nilai $I_0$ dan $I_\\infty$ berturut-turut adalah $0{,}12\\text{ mA}$ dan $0\\text{ mA}$ (pilihan A).",
      pitfalls: "Tertukar antara kondisi awal $t=0$ dan kondisi akhir $t \\to \\infty$, atau mengira arus DC dapat terus mengalir melewati kapasitor secara kontinu pada keadaan tunak."
    }
  }
];
