/**
 * Batch Task: TASK_fis-termo-kalor-perpindahan_MEDIUM
 * SubTopic: Konduksi, Konveksi, dan Radiasi (fis-termo-kalor-perpindahan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-kalor-perpindahan-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Suhu Sambungan Dua Batang Logam Konduksi Seri",
    difficulty: "sedang",
    statement: "Dua batang logam P dan Q disambungkan secara seri pada salah satu ujungnya. Kedua batang memiliki panjang dan luas penampang yang sama persis ($L_P = L_Q$ dan $A_P = A_Q$). Konduktivitas termal logam P adalah dua kali konduktivitas termal logam Q ($k_P = 2k_Q$). Ujung bebas batang P dipertahankan pada suhu $90^\\circ\\text{C}$ dan ujung bebas batang Q dipertahankan pada suhu $0^\\circ\\text{C}$. Pada keadaan tunak (steady state), suhu pada bidang sambungan kedua logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$70^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada kondisi tunak (steady state) tanpa kebocoran kalor melalui selimut batang, laju konduksi kalor yang mengalir melalui batang P harus sama dengan laju konduksi kalor yang melalui batang Q:<br>$$H_P = H_Q \\implies \\frac{k_P \\times A_P \\times (T_P - T_s)}{L_P} = \\frac{k_Q \\times A_Q \\times (T_s - T_Q)}{L_Q}$$",
      steps: "1. Karena dimensi kedua batang sama ($A_P = A_Q$ dan $L_P = L_Q$), kedua besaran tersebut saling meniadakan:<br>$$k_P(T_P - T_s) = k_Q(T_s - T_Q)$$<br>2. Substitusikan $k_P = 2k_Q$, $T_P = 90^\\circ\\text{C}$, dan $T_Q = 0^\\circ\\text{C}$:<br>$$2k_Q(90 - T_s) = k_Q(T_s - 0)$$<br>3. Bagi kedua ruas dengan $k_Q$:<br>$$2(90 - T_s) = T_s \\implies 180 - 2T_s = T_s$$<br>$$3T_s = 180 \\implies T_s = \\frac{180}{3} = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan mengasumsikan suhu sambungan adalah rata-rata langsung $(90 + 0)/2 = 45^\\circ\\text{C}$ (opsi B). Rata-rata langsung hanya berlaku jika konduktivitas kedua logam sama ($k_P = k_Q$). Karena logam P menghantarkan kalor lebih baik, suhunya lebih dekat ke ujung panas."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Laju Radiasi Kalor Bersih (Net Radiation)",
    difficulty: "sedang",
    statement: "Sebuah pelat logam dengan luas permukaan $1\\text{ m}^2$ dan koefisien emisivitas $e = 0{,}8$ dipanaskan hingga suhunya mencapai $127^\\circ\\text{C}$. Pelat tersebut diletakkan di dalam ruangan yang bersuhu $27^\\circ\\text{C}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$, besar laju perpindahan kalor radiasi bersih (neto) dari pelat ke lingkungan sekitarnya adalah sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$396{,}9\\text{ Watt}$",
      "$567{,}0\\text{ Watt}$",
      "$793{,}8\\text{ Watt}$",
      "$992{,}3\\text{ Watt}$",
      "$1161\\text{ Watt}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Laju bersih perpindahan kalor secara radiasi antara benda pada suhu $T$ dan lingkungan pada suhu $T_0$ dihitung dengan rumus radiasi netto Stefan-Boltzmann:<br>$$P_{\\text{neto}} = e \\times \\sigma \\times A \\times (T^4 - T_0^4)$$<br>dengan suhu wajib dikonversikan ke skala mutlak Kelvin ($K = ^\\circ\\text{C} + 273$).",
      steps: "1. Konversi suhu ke Kelvin:<br>$T = 127 + 273 = 400\\text{ K}$<br>$T_0 = 27 + 273 = 300\\text{ K}$<br>2. Hitung nilai $T^4 - T_0^4$:<br>$$T^4 = (400)^4 = 256 \\times 10^8\\text{ K}^4$$<br>$$T_0^4 = (300)^4 = 81 \\times 10^8\\text{ K}^4$$<br>$$T^4 - T_0^4 = (256 - 81) \\times 10^8 = 175 \\times 10^8\\text{ K}^4$$<br>3. Hitung daya radiasi bersih:<br>$$P_{\\text{neto}} = 0{,}8 \\times (5{,}67 \\times 10^{-8}) \\times 1 \\times (175 \\times 10^8)$$<br>$$P_{\\text{neto}} = 0{,}8 \\times 5{,}67 \\times 175 = 0{,}8 \\times 992{,}25 = 793{,}8\\text{ Watt}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jebakan fatal adalah menghitung $(T - T_0)^4 = (400 - 300)^4 = 100^4 = 10^8$, bukan $T^4 - T_0^4 = 175 \\times 10^8$. Perbedaan nilai keduanya mencapai 175 kali lipat."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Konduksi Dinding Komposit Dua Lapis",
    difficulty: "sedang",
    statement: "Sebuah dinding ruang berpendingin terdiri dari dua lapisan bahan yang saling menempel rapat:<br>- Lapisan insulasi A dengan tebal $8\\text{ cm}$ dan konduktivitas termal $k_A = 0{,}08\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>- Lapisan kayu B dengan tebal $10\\text{ cm}$ dan konduktivitas termal $k_B = 0{,}20\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>Suhu permukaan luar lapisan A adalah $35^\\circ\\text{C}$ dan suhu permukaan dalam lapisan B adalah $20^\\circ\\text{C}$. Suhu pada bidang antarmuka kontak antara lapisan A dan lapisan B adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$22^\\circ\\text{C}$",
      "$25^\\circ\\text{C}$",
      "$27{,}5^\\circ\\text{C}$",
      "$30^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada susunan dinding berlapis seri, laju aliran kalor konduksi per satuan luas ($H/A$) sama di setiap lapisan:<br>$$\\frac{H}{A} = \\frac{T_1 - T_b}{R_A} = \\frac{T_b - T_2}{R_B}$$<br>dengan resistansi termal konduksi per satuan luas $R = \\frac{d}{k}$.",
      steps: "1. Hitung resistansi termal lapisan A:<br>$$R_A = \\frac{d_A}{k_A} = \\frac{0{,}08\\text{ m}}{0{,}08\\text{ W}/(\\text{m}\\cdot\\text{K})} = 1{,}0\\text{ m}^2\\cdot\\text{K/W}$$<br>2. Hitung resistansi termal lapisan B:<br>$$R_B = \\frac{d_B}{k_B} = \\frac{0{,}10\\text{ m}}{0{,}20\\text{ W}/(\\text{m}\\cdot\\text{K})} = 0{,}5\\text{ m}^2\\cdot\\text{K/W}$$<br>3. Samakan fluks kalor kedua lapisan:<br>$$\\frac{35 - T_b}{R_A} = \\frac{T_b - 20}{R_B} \\implies \\frac{35 - T_b}{1{,}0} = \\frac{T_b - 20}{0{,}5}$$<br>$$35 - T_b = 2(T_b - 20) = 2T_b - 40$$<br>$$3T_b = 75 \\implies T_b = 25^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Pastikan satuan ketebalan dikonversi dari sentimeter ke meter ($8\\text{ cm} = 0{,}08\\text{ m}$ dan $10\\text{ cm} = 0{,}10\\text{ m}$) agar konsisten dengan satuan konduktivitas termal."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Hukum Pergeseran Wien dan Intensitas Radiasi",
    difficulty: "sedang",
    statement: "Spektrum radiasi bintang X menunjukkan panjang gelombang emisi maksimum pada $\\lambda_{\\text{maks, X}} = 600\\text{ nm}$, sedangkan bintang Y menunjukkan panjang gelombang emisi maksimum pada $\\lambda_{\\text{maks, Y}} = 300\\text{ nm}$. Berdasarkan Hukum Pergeseran Wien dan Hukum Stefan-Boltzmann, perbandingan intensitas radiasi total per satuan luas permukaan bintang Y terhadap bintang X ($\\frac{I_Y}{I_X}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 : 1$",
      "$4 : 1$",
      "$8 : 1$",
      "$16 : 1$",
      "$32 : 1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Hukum Pergeseran Wien menyatakan hubungan suhu mutlak dengan panjang gelombang puncak emisi:<br>$$\\lambda_{\\text{maks}} \\times T = C \\implies T \\propto \\frac{1}{\\lambda_{\\text{maks}}}$$<br>Sedangkan Hukum Stefan-Boltzmann menyatakan intensitas radiasi berbanding lurus dengan pangkat empat suhu:<br>$$I = \\sigma T^4 \\implies I \\propto \\left(\\frac{1}{\\lambda_{\\text{maks}}}\\right)^4$$",
      steps: "1. Tentukan rasio suhu mutlak bintang Y terhadap bintang X:<br>$$\\frac{T_Y}{T_X} = \\frac{\\lambda_{\\text{maks, X}}}{\\lambda_{\\text{maks, Y}}} = \\frac{600\\text{ nm}}{300\\text{ nm}} = 2$$<br>2. Hubungkan dengan intensitas radiasi:<br>$$\\frac{I_Y}{I_X} = \\left(\\frac{T_Y}{T_X}\\right)^4 = (2)^4 = 16$$<br>3. Jadi, rasio intensitas radiasi per satuan luas bintang Y terhadap X adalah $16 : 1$.<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Perhatikan bahwa panjang gelombang berbanding TERBALIK dengan suhu. Bintang dengan $\\lambda_{\\text{maks}}$ lebih pendek bersuhu lebih tinggi. Jangan lupa memangkatkan empat perbandingan suhu tersebut."
    }
  },
  {
    id: "fis-termo-kalor-perpindahan-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-perpindahan",
    category: "Laju Peleburan Es Melalui Konduksi Batang Logam",
    difficulty: "sedang",
    statement: "Sebuah batang logam seragam dengan panjang $50\\text{ cm}$ dan luas penampang $2\\text{ cm}^2$ memiliki konduktivitas termal $k = 350\\text{ W}/(\\text{m}\\cdot\\text{K})$. Ujung pertama batang dicelupkan ke dalam air mendidih ($100^\\circ\\text{C}$), sedangkan ujung lainnya dimasukkan ke dalam bejana berisi es pada $0^\\circ\\text{C}$. Seluruh permukaan samping batang diselubungi isolator ideal. Jika kalor lebur es adalah $L = 336.000\\text{ J/kg}$, massa es yang mencair selama $40\\text{ menit}$ akibat hantaran kalor melalui batang tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$120\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kalor yang dihantarkan secara konduksi sepanjang batang dalam selang waktu $t$ digunakan sepenuhnya untuk meleburkan es:<br>$$Q = H \\times t = \\frac{k \\times A \\times \\Delta T}{L_{\\text{batang}}} \\times t$$<br>Massa es yang melebur dihitung dari kalor laten peleburan: $Q = m_{\\text{es}} \\times L_{\\text{lebur}}$.",
      steps: "1. Konversi satuan ke SI:<br>$L_{\\text{batang}} = 50\\text{ cm} = 0{,}5\\text{ m}$<br>$A = 2\\text{ cm}^2 = 2 \\times 10^{-4}\\text{ m}^2$<br>$\\Delta T = 100^\\circ\\text{C} - 0^\\circ\\text{C} = 100\\text{ K}$<br>$t = 40\\text{ menit} = 40 \\times 60 = 2400\\text{ detik}$<br>2. Hitung laju konduksi kalor $H$:<br>$$H = \\frac{350 \\times (2 \\times 10^{-4}) \\times 100}{0{,}5} = \\frac{7}{0{,}5} = 14\\text{ W}$$<br>3. Hitung kalor total yang dihantarkan selama 40 menit:<br>$$Q = H \\times t = 14\\text{ W} \\times 2400\\text{ s} = 33.600\\text{ Joule}$$<br>4. Hitung massa es yang melebur:<br>$$m_{\\text{es}} = \\frac{Q}{L_{\\text{lebur}}} = \\frac{33.600\\text{ J}}{336.000\\text{ J/kg}} = 0{,}1\\text{ kg} = 100\\text{ gram}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Lupa mengonversi luas penampang dari $\\text{cm}^2$ ke $\\text{m}^2$ ($1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}\\text{ m}^2$) atau lupa mengonversi menit ke detik akan menghasilkan jawaban yang salah ribuan kali lipat."
    }
  }
];
