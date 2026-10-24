/**
 * Batch Task: TASK_fis-termo-gas-gabungan_MEDIUM
 * SubTopic: Hukum Boyle-Gay Lussac (fis-termo-gas-gabungan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-gas-gabungan-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Balon Udara Cuaca di Lapisan Atmosfer Tinggi",
    difficulty: "sedang",
    statement: "Sebuah balon penelitian meteorologi diisi gas helium hingga bervolume $10\\text{ m}^3$ di permukaan bumi saat tekanan udara $1{,}0\\text{ atm}$ dan suhu $27^\\circ\\text{C}$. Balon tersebut kemudian dilepas dan melayang naik ke stratosfer hingga mencapai ketinggian di mana tekanan udara luar adalah $0{,}20\\text{ atm}$ dan suhunya turun menjadi $-33^\\circ\\text{C}$. Dengan menganggap elastisitas kulit balon memungkinkan gas memuai bebas tanpa perbedaan tekanan dalam-luar, volume balon helium pada ketinggian tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ m}^3$",
      "$32\\text{ m}^3$",
      "$40\\text{ m}^3$",
      "$50\\text{ m}^3$",
      "$62{,}5\\text{ m}^3$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan persamaan keadaan gabungan Boyle-Gay Lussac untuk sistem gas tertutup dengan suhu mutlak Kelvin ($K = ^\\circ\\text{C} + 273$):<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2} \\implies V_2 = V_1 \\times \\left(\\frac{P_1}{P_2}\\right) \\times \\left(\\frac{T_2}{T_1}\\right)$$",
      steps: "1. Konversi suhu ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = -33 + 273 = 240\\text{ K}$<br>2. Data tekanan dan volume awal:<br>$P_1 = 1{,}0\\text{ atm}$, $P_2 = 0{,}20\\text{ atm}$, $V_1 = 10\\text{ m}^3$<br>3. Hitung volume akhir $V_2$:<br>$$V_2 = 10\\text{ m}^3 \\times \\left(\\frac{1{,}0}{0{,}20}\\right) \\times \\left(\\frac{240}{300}\\right)$$<br>$$V_2 = 10 \\times 5 \\times 0{,}80 = 40\\text{ m}^3$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jika lupa memperhitungkan penurunan suhu (hanya menggunakan Hukum Boyle pada tekanan $0{,}20\\text{ atm}$), hasilnya adalah $10 \\times 5 = 50\\text{ m}^3$ (opsi D). Penurunan suhu di ketinggian mereduksi pemuaian volume balon."
    }
  },
  {
    id: "fis-termo-gas-gabungan-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Kebocoran Gas dari Wadah Bertekanan",
    difficulty: "sedang",
    statement: "Sebuah tabung baja bervolume tetap berisi gas ideal bertekanan $6{,}0\\text{ atm}$ pada suhu $27^\\circ\\text{C}$. Karena tabung mengalami kebocoran mikro saat dipanaskan di ruang penyimpanan hingga suhunya mencapai $127^\\circ\\text{C}$, tekanannya terukur menjadi $4{,}0\\text{ atm}$. Persentase massa gas yang telah keluar dari tabung tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\%$",
      "$33{,}3\\%$",
      "$40\\%$",
      "$50\\%$",
      "$66{,}7\\%$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dari persamaan gas ideal $P V = n R T = \\frac{m}{M_r} R T$, karena volume wadah ($V$) dan jenis gas ($M_r$) tetap, massa gas yang tersisa di dalam tabung berbanding lurus dengan rasio $P/T$:<br>$$\\frac{m_2}{m_1} = \\frac{P_2 / T_2}{P_1 / T_1} = \\frac{P_2 \\times T_1}{P_1 \\times T_2}$$<br>Persentase massa gas yang bocor/keluar adalah: $\\%m_{\\text{keluar}} = \\left(1 - \\frac{m_2}{m_1}\\right) \\times 100\\%$.",
      steps: "1. Konversi suhu ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 127 + 273 = 400\\text{ K}$<br>2. Hitung rasio massa gas yang masih tersisa di dalam wadah:<br>$$\\frac{m_2}{m_1} = \\frac{4{,}0 \\times 300}{6{,}0 \\times 400} = \\frac{1200}{2400} = \\frac{1}{2} = 50\\%$$<br>3. Hitung persentase massa yang telah keluar:<br>$$\\%m_{\\text{keluar}} = 100\\% - 50\\% = 50\\%$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan mengabaikan perubahan suhu dengan hanya menghitung rasio tekanan $4/6 = 66{,}7\\%$ (opsi E). Kenaikan suhu dari $300\\text{ K}$ ke $400\\text{ K}$ ikut meningkatkan tekanan partikel yang tersisa."
    }
  },
  {
    id: "fis-termo-gas-gabungan-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Pencampuran Dua Bejana dan Pemanasan",
    difficulty: "sedang",
    statement: "Dua buah bejana kaku A dan B dihubungkan oleh sebuah pipa penghubung bervolume abaian yang dilengkapi kran tertutup:<br>- Bejana A bervolume $2\\text{ liter}$ berisi gas ideal pada tekanan $3\\text{ atm}$ dan suhu $300\\text{ K}$<br>- Bejana B bervolume $3\\text{ liter}$ berisi gas ideal sejenis pada tekanan $1\\text{ atm}$ dan suhu $300\\text{ K}$<br>Kran penghubung kemudian dibuka sehingga kedua gas bercampur sempurna, lalu seluruh sistem dipanaskan secara merata hingga suhunya mencapai $400\\text{ K}$. Tekanan akhir gas di dalam kedua bejana tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}8\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$2{,}4\\text{ atm}$",
      "$2{,}8\\text{ atm}$",
      "$3{,}2\\text{ atm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hukum kekekalan jumlah mol partikel gas total ($n_{\\text{total}} = n_A + n_B$):<br>Dari $n = \\frac{PV}{RT}$, sebelum dan sesudah kran dibuka berlaku:<br>$$\\frac{P_{\\text{akhir}} \\times V_{\\text{total}}}{T_{\\text{akhir}}} = \\frac{P_A \\times V_A}{T_A} + \\frac{P_B \\times V_B}{T_B}$$<br>dengan $V_{\\text{total}} = V_A + V_B$.",
      steps: "1. Data awal: $V_A = 2\\text{ L}$, $P_A = 3\\text{ atm}$, $V_B = 3\\text{ L}$, $P_B = 1\\text{ atm}$, $T_A = T_B = 300\\text{ K}$.<br>2. Hitung volume total sistem: $V_{\\text{total}} = 2 + 3 = 5\\text{ liter}$.<br>3. Hitung jumlah besaran $P V/T$ mula-mula:<br>$$\\sum \\frac{PV}{T} = \\frac{3 \\times 2}{300} + \\frac{1 \\times 3}{300} = \\frac{6 + 3}{300} = \\frac{9}{300}$$<br>4. Samakan dengan kondisi akhir pada $T_{\\text{akhir}} = 400\\text{ K}$:<br>$$\\frac{P_{\\text{akhir}} \\times 5}{400} = \\frac{9}{300}$$<br>$$P_{\\text{akhir}} \\times 5 = \\frac{9 \\times 400}{300} = 9 \\times \\frac{4}{3} = 12$$<br>$$P_{\\text{akhir}} = \\frac{12}{5} = 2{,}4\\text{ atm}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jika lupa memperhitungkan pemanasan ke $400\\text{ K}$ (hanya mencampur pada $300\\text{ K}$), hasilnya adalah $9/5 = 1{,}8\\text{ atm}$ (opsi A)."
    }
  },
  {
    id: "fis-termo-gas-gabungan-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Kesetimbangan Piston Bebas Pembagi Silinder",
    difficulty: "sedang",
    statement: "Sebuah silinder horizontal dengan panjang total $80\\text{ cm}$ dan penampang seragam ditutup pada kedua ujungnya. Sebuah piston ringan bebas gesekan dan bersifat isolator panas membagi silinder tepat di tengah-tengah menjadi dua bagian sama panjang ($40\\text{ cm}$ kiri dan $40\\text{ cm}$ kanan). Mula-mula kedua bagian berisi gas ideal pada tekanan dan suhu yang sama ($300\\text{ K}$). Jika gas di ruang kiri dipanaskan hingga suhunya menjadi $600\\text{ K}$ sedangkan gas di ruang kanan didinginkan menjadi $200\\text{ K}$, jarak pergeseran piston dari posisi awalnya setelah kesetimbangan mekanis baru tercapai adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada kesetimbangan mekanis, piston berhenti bergerak ketika tekanan pada kedua sisi sama ($P_1' = P_2'$).<br>Karena jumlah mol gas pada masing-masing kompartemen tertutup bernilai konstan, dari $\\frac{P V}{T} = \\text{konstan}$, maka perbandingan volume akhir sama dengan perbandingan suhu akhirnya:<br>$$\\frac{V_1'}{T_1'} = \\frac{V_2'}{T_2'} \\implies \\frac{L_1'}{T_1'} = \\frac{L_2'}{T_2'}$$<br>dengan $L_1' + L_2' = L_{\\text{total}} = 80\\text{ cm}$.",
      steps: "1. Tulis perbandingan panjang kolom akhir:<br>$$\\frac{L_1'}{600\\text{ K}} = \\frac{L_2'}{200\\text{ K}} \\implies \\frac{L_1'}{L_2'} = \\frac{600}{200} = 3 \\implies L_1' = 3L_2'$$<br>2. Substitusikan ke panjang total silinder:<br>$$3L_2' + L_2' = 80\\text{ cm} \\implies 4L_2' = 80 \\implies L_2' = 20\\text{ cm}$$<br>$$L_1' = 3 \\times 20 = 60\\text{ cm}$$<br>3. Hitung pergeseran posisi piston dari posisi mula-mula ($40\\text{ cm}$):<br>$$\\Delta x = 60\\text{ cm} - 40\\text{ cm} = 20\\text{ cm}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Hati-hati: panjang akhir ruang kiri adalah $60\\text{ cm}$, namun pertanyaan menanyakan jarak pergeseran piston dari posisi semula (yaitu $60 - 40 = 20\\text{ cm}$)."
    }
  },
  {
    id: "fis-termo-gas-gabungan-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-gas",
    subTopicId: "fis-termo-gas-gabungan",
    category: "Relasi Densitas Gas pada Proses Termodinamika Umum",
    difficulty: "sedang",
    statement: "Suatu gas ideal memiliki massa jenis $\\rho_0$ pada tekanan $P_0$ dan suhu mutlak $T_0$. Gas tersebut kemudian mengalami suatu proses perubahan keadaan sehingga tekanannya meningkat menjadi $3\\,P_0$ dan suhu mutlaknya dinaikkan menjadi $2\\,T_0$. Massa jenis gas ideal pada kondisi akhir tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}67\\,\\rho_0$",
      "$1{,}5\\,\\rho_0$",
      "$2{,}0\\,\\rho_0$",
      "$3{,}0\\,\\rho_0$",
      "$6{,}0\\,\\rho_0$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hubungan antara tekanan, massa jenis, dan suhu mutlak gas ideal diturunkan dari persamaan keadaan:<br>$$P = \\frac{\\rho}{M_r} R T \\implies \\rho = \\frac{P \\times M_r}{R \\times T}$$<br>Untuk gas yang sama ($M_r$ konstan), massa jenis berbanding lurus dengan tekanan dan berbanding terbalik dengan suhu mutlak:<br>$$\\frac{\\rho_2}{\\rho_1} = \\left(\\frac{P_2}{P_1}\\right) \\times \\left(\\frac{T_1}{T_2}\\right)$$",
      steps: "1. Identifikasi rasio perubahan variabel:<br>$$\\frac{P_2}{P_1} = 3 \\quad \\text{dan} \\quad \\frac{T_2}{T_1} = 2 \\implies \\frac{T_1}{T_2} = \\frac{1}{2}$$<br>2. Masukkan ke perbandingan massa jenis:<br>$$\\rho_2 = \\rho_0 \\times 3 \\times \\frac{1}{2} = 1{,}5\\,\\rho_0$$<br>3. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Perhatikan bahwa pemanasan ($T$ membesar) membuat gas memuai dan menurunkan massa jenis ($1/T$), sementara peningkatan tekanan memampatkan gas dan menaikkan massa jenis ($P$). Kombinasi keduanya menghasilkan faktor $3/2 = 1{,}5$."
    }
  }
];
