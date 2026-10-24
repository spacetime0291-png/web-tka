/**
 * Batch Task: TASK_fis-termo-hukum-hukum1_MEDIUM
 * SubTopic: Hukum I Termodinamika (fis-termo-hukum-hukum1)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-hukum-hukum1-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Analisis Siklus Termodinamika Tiga Tahap",
    difficulty: "sedang",
    statement: "Suatu gas ideal menjalani siklus tertutup $A \\to B \\to C \\to A$:<br>- Proses $A \\to B$: gas menyerap kalor $Q_{AB} = 500\\text{ J}$ dan melakukan usaha $W_{AB} = 200\\text{ J}$.<br>- Proses $B \\to C$: gas mengalami proses isokhorik dengan perubahan energi dalam $\\Delta U_{BC} = -400\\text{ J}$.<br>- Proses $C \\to A$: gas melepaskan kalor sebesar $50\\text{ J}$ ($Q_{CA} = -50\\text{ J}$) untuk kembali ke keadaan awal $A$.<br>Besar usaha luar yang dilakukan pada proses $C \\to A$ ($W_{CA}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-250\\text{ Joule}$",
      "$-150\\text{ Joule}$",
      "$+50\\text{ Joule}$",
      "$+150\\text{ Joule}$",
      "$+250\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum I Termodinamika ($\\Delta U = Q - W$) dan sifat siklus tertutup di mana total perubahan energi dalam dalam satu putaran penuh bernilai nol:<br>$$\\Delta U_{\\text{siklus}} = \\Delta U_{AB} + \\Delta U_{BC} + \\Delta U_{CA} = 0$$",
      steps: "1. Hitung $\\Delta U_{AB}$:<br>$$\\Delta U_{AB} = Q_{AB} - W_{AB} = 500\\text{ J} - 200\\text{ J} = +300\\text{ J}$$<br>2. Diketahui $\\Delta U_{BC} = -400\\text{ J}$.<br>3. Hitung $\\Delta U_{CA}$ dari syarat siklus penuh:<br>$$300 + (-400) + \\Delta U_{CA} = 0 \\implies -100 + \\Delta U_{CA} = 0 \\implies \\Delta U_{CA} = +100\\text{ J}$$<br>4. Hitung usaha $W_{CA}$:<br>$$\\Delta U_{CA} = Q_{CA} - W_{CA} \\implies 100 = -50 - W_{CA}$$<br>$$W_{CA} = -50 - 100 = -150\\text{ Joule}$$<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Hati-hati dengan tanda aljabar: $W_{CA} = Q_{CA} - \\Delta U_{CA} = (-50) - 100 = -150\\text{ J}$. Tanda negatif menunjukkan bahwa pada lintasan kompresi $C \\to A$, lingkungan melakukan kerja pada gas."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Relasi Kalor Jenis Molar Cp dan Cv (Relasi Mayer)",
    difficulty: "sedang",
    statement: "Sebanyak $2\\text{ mol}$ gas ideal monoatomik dipanaskan sehingga suhunya meningkat sebesar $\\Delta T = 40\\text{ K}$. Diketahui kapasitas kalor molar pada volume konstan adalah $C_v = \\frac{3}{2}R$ dan pada tekanan konstan adalah $C_p = \\frac{5}{2}R$, dengan $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Selisih jumlah kalor yang diperlukan jika pemanasan dilakukan pada tekanan tetap dibandingkan dengan pada volume tetap ($Q_p - Q_v$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$332{,}6\\text{ Joule}$",
      "$665{,}1\\text{ Joule}$",
      "$997{,}7\\text{ Joule}$",
      "$1330{,}2\\text{ Joule}$",
      "$1662{,}8\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Berdasarkan relasi Mayer untuk gas ideal, selisih kapasitas kalor molar pada tekanan tetap dan volume tetap adalah tetapan gas universal:<br>$$C_p - C_v = R$$<br>Kalor pada tekanan tetap adalah $Q_p = n C_p \\Delta T$ dan pada volume tetap adalah $Q_v = n C_v \\Delta T$. Selisih kalor keduanya setara dengan usaha luar yang dilakukan gas pada pemuaian isobarik:<br>$$Q_p - Q_v = n(C_p - C_v)\\Delta T = n R \\Delta T = W$$",
      steps: "1. Identifikasi besaran: $n = 2\\text{ mol}$, $\\Delta T = 40\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Hitung selisih kalor ($Q_p - Q_v$):<br>$$Q_p - Q_v = n \\times R \\times \\Delta T = 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 40\\text{ K}$$<br>$$Q_p - Q_v = 80 \\times 8{,}314 = 665{,}12\\text{ Joule} \\approx 665{,}1\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Tidak perlu menghitung nilai mutlak $Q_p$ dan $Q_v$ secara terpisah lalu mengurangkannya; gunakan langsung relasi Mayer $Q_p - Q_v = n R \\Delta T$ yang menghemat waktu dan meminimalkan galat hitung."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Hukum I pada Perubahan Wujud Penguapan Air",
    difficulty: "sedang",
    statement: "Sebanyak $10\\text{ gram}$ air pada suhu $100^\\circ\\text{C}$ diuapkan seluruhnya menjadi uap air bersuhu $100^\\circ\\text{C}$ pada tekanan atmosfer konstan $P = 1{,}0 \\times 10^5\\text{ Pa}$. Volume $10\\text{ gram}$ air cair adalah $10\\text{ cm}^3$ ($1{,}0 \\times 10^{-5}\\text{ m}^3$), sedangkan volume uap air yang terbentuk adalah $16{,}7\\text{ liter}$ ($16{,}7 \\times 10^{-3}\\text{ m}^3$). Jika kalor laten penguapan air adalah $L_u = 2{,}26 \\times 10^6\\text{ J/kg}$, besar perubahan energi dalam ($\\Delta U$) molekul air selama proses penguapan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1670\\text{ Joule}$",
      "$18.930\\text{ Joule}$",
      "$20.930\\text{ Joule}$",
      "$22.600\\text{ Joule}$",
      "$24.270\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hukum I Termodinamika berlaku pada perubahan fase:<br>$$\\Delta U = Q - W$$<br>- Kalor penyerapan laten: $Q = m \\times L_u$.<br>- Usaha luar ekspansi melawan tekanan atmosfer: $W = P \\times (V_{\\text{uap}} - V_{\\text{cair}})$.",
      steps: "1. Hitung kalor total yang diserap ($m = 10\\text{ g} = 0{,}01\\text{ kg}$):<br>$$Q = 0{,}01\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 22.600\\text{ Joule}$$<br>2. Hitung selisih volume:<br>$$\\Delta V = 16{,}7 \\times 10^{-3}\\text{ m}^3 - 0{,}01 \\times 10^{-3}\\text{ m}^3 \\approx 16{,}7 \\times 10^{-3}\\text{ m}^3$$<br>3. Hitung usaha luar melawan tekanan atmosfer:<br>$$W = P \\times \\Delta V = (1{,}0 \\times 10^5\\text{ Pa}) \\times (16{,}7 \\times 10^{-3}\\text{ m}^3) = 1670\\text{ Joule}$$<br>4. Hitung perubahan energi dalam $\\Delta U$:<br>$$\\Delta U = Q - W = 22.600\\text{ J} - 1670\\text{ J} = 20.930\\text{ Joule}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Kalor laten penguapan tidak seluruhnya menjadi energi dalam. Sebagian kecil (sekitar $1670\\text{ J}$, opsi A) harus digunakan untuk mendesak udara luar atmosfer saat volume uap mengembang ribuan kali lipat."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Kalor Netto Siklus Persegi Panjang Diagram P-V",
    difficulty: "sedang",
    statement: "Suatu siklus termodinamika persegi panjang $ABCDA$ yang dijalani gas ideal memiliki koordinat titik:<br>- $A$ ($1{,}0\\text{ m}^3, 4{,}0 \\times 10^5\\text{ Pa}$)<br>- $B$ ($3{,}0\\text{ m}^3, 4{,}0 \\times 10^5\\text{ Pa}$)<br>- $C$ ($3{,}0\\text{ m}^3, 1{,}0 \\times 10^5\\text{ Pa}$)<br>- $D$ ($1{,}0\\text{ m}^3, 1{,}0 \\times 10^5\\text{ Pa}$)<br>Arah siklus berputar searah jarum jam ($A \\to B \\to C \\to D \\to A$). Kalor netto ($Q_{\\text{netto}}$) yang diserap oleh gas ideal dalam satu siklus lengkap adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ kJ}$",
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada satu siklus termodinamika tertutup penuh, perubahan energi dalam total adalah nol ($\\Delta U_{\\text{siklus}} = 0$).<br>Berdasarkan Hukum I Termodinamika:<br>$$Q_{\\text{netto}} = \\Delta U_{\\text{siklus}} + W_{\\text{siklus}} = 0 + W_{\\text{siklus}} = W_{\\text{siklus}}$$<br>Usaha satu siklus persegi panjang sama dengan luas persegi panjang tersebut.",
      steps: "1. Panjang sisi volume: $\\Delta V = 3{,}0\\text{ m}^3 - 1{,}0\\text{ m}^3 = 2{,}0\\text{ m}^3$.<br>2. Panjang sisi tekanan: $\\Delta P = 4{,}0 \\times 10^5\\text{ Pa} - 1{,}0 \\times 10^5\\text{ Pa} = 3{,}0 \\times 10^5\\text{ Pa}$.<br>3. Hitung luas persegi panjang (usaha siklus $W_{\\text{siklus}}$):<br>$$W_{\\text{siklus}} = \\Delta P \\times \\Delta V = (3{,}0 \\times 10^5\\text{ Pa}) \\times 2{,}0\\text{ m}^3 = 6{,}0 \\times 10^5\\text{ Joule} = 600\\text{ kJ}$$<br>4. Karena $\\Delta U = 0$, maka $Q_{\\text{netto}} = W_{\\text{siklus}} = 600\\text{ kJ}$.<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Karena siklus berputar searah jarum jam, kalor netto bernilai positif (mesin kalor menyerap kalor netto dan menghasilkan kerja netto positif)."
    }
  },
  {
    id: "fis-termo-hukum-hukum1-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum1",
    category: "Kekekalan Energi pada Sistem Terisolasi Kaku",
    difficulty: "sedang",
    statement: "Sebuah kalorimeter bom memiliki dinding tebal yang kaku sempurna (tidak dapat memuai) dan terbungkus lapisan isolator panas ideal sehingga tidak ada kalor yang keluar maupun masuk. Di dalam bejana tersebut terjadi reaksi kimia eksotermik cepat yang melepaskan energi ikatan kimia sebesar $5000\\text{ Joule}$ yang memanaskan gas dan fluida di dalamnya. Berdasarkan Hukum I Termodinamika, perubahan total energi dalam ($\\Delta U_{\\text{total}}$) dari seluruh sistem terisolasi kaku tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-5000\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+2500\\text{ Joule}$",
      "$+5000\\text{ Joule}$",
      "$+10.000\\text{ Joule}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum I Termodinamika untuk sistem terisolasi kaku:<br>- Karena dinding berinsulasi ideal: $Q = 0$ (tidak ada aliran kalor melintasi batas sistem).<br>- Karena dinding kaku tak bergeser: $\\Delta V = 0 \\implies W = 0$ (tidak ada kerja mekanik luar).<br>Maka perubahan energi dalam total sistem adalah:<br>$$\\Delta U_{\\text{total}} = Q - W = 0 - 0 = 0$$",
      steps: "1. Tinjau batas sistem termodinamika secara utuh.<br>2. Tidak ada energi kalor yang menembus batas wadah ($Q = 0$).<br>3. Tidak ada kerja mekanik batas sistem ($W = 0$).<br>4. Energi ikatan kimia berkurang sebesar $5000\\text{ J}$ dan secara simultan berubah menjadi energi termal kinetik molekul bertambah sebesar $5000\\text{ J}$, sehingga jumlah total energi dalam sistem konstan ($\\Delta U_{\\text{total}} = 0$).<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan terkecoh dengan kenaikan suhu termometer di dalam bom. Energi termal memang naik $+5000\\text{ J}$, namun energi kimia turun $-5000\\text{ J}$, sehingga energi dalam total seluruh sistem tetap kekal ($\\Delta U = 0$)."
    }
  }
];
