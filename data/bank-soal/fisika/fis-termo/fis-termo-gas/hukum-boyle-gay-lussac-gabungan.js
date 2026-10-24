/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Teori Gas Ideal (fis-termo-gas)
 * Sub-Bab: Hukum Boyle-Gay Lussac (fis-termo-gas-gabungan)
 * Slug: hukum-boyle-gay-lussac-gabungan
 * Indikator: Persamaan keadaan gabungan gas ideal ((P_1 * V_1) / T_1 = (P_2 * V_2) / T_2).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-gas-gabungan";
  const subTopicSlug = "hukum-boyle-gay-lussac-gabungan";
  const questions = [
  {
    "id": "fis-termo-gas-gabungan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Persamaan Keadaan Gabungan Boyle-Gay Lussac",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal dalam ruang tertutup memiliki volume $2\\text{ liter}$ pada tekanan $1\\text{ atm}$ dan suhu $300\\text{ K}$. Jika tekanan gas dinaikkan menjadi $2\\text{ atm}$ dan suhunya dinaikkan menjadi $600\\text{ K}$, volume gas ideal tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ liter}$",
      "$1{,}0\\text{ liter}$",
      "$2{,}0\\text{ liter}$",
      "$4{,}0\\text{ liter}$",
      "$8{,}0\\text{ liter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum gabungan Boyle-Gay Lussac menyatakan bahwa untuk sejumlah mol gas ideal dalam sistem tertutup, rasio $\\frac{P \\times V}{T}$ bernilai konstan:<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2}$$",
      "steps": "1. Tulis data keadaan mula-mula dan akhir:<br>$P_1 = 1\\text{ atm}$, $V_1 = 2\\text{ liter}$, $T_1 = 300\\text{ K}$<br>$P_2 = 2\\text{ atm}$, $T_2 = 600\\text{ K}$<br>2. Masukkan ke rumus gabungan:<br>$$\\frac{1 \\times 2}{300} = \\frac{2 \\times V_2}{600}$$<br>$$\\frac{2}{300} = \\frac{V_2}{300} \\implies V_2 = 2\\text{ liter}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Walaupun tekanan dilipatduakan (yang cenderung memperkecil volume menjadi separuhnya), suhu mutlak juga dilipatduakan (yang cenderung memperbesar volume dua kali lipat), sehingga kedua pengaruh tersebut saling meniadakan dan volume gas tetap $2\\text{ liter}$."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-gabungan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Perbandingan Kelipatan Variabel Keadaan Gas",
    "difficulty": "mudah",
    "statement": "Suatu gas ideal di dalam wadah silinder tertutup memiliki tekanan awal $P_0$. Jika volume gas diekspansikan menjadi $2$ kali volume semula dan suhu mutlaknya dinaikkan menjadi $3$ kali suhu mutlak semula, besar tekanan gas yang baru adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}67\\,P_0$",
      "$1{,}0\\,P_0$",
      "$1{,}5\\,P_0$",
      "$3{,}0\\,P_0$",
      "$6{,}0\\,P_0$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan persamaan keadaan gas ideal:<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2} \\implies P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right) \\times \\left(\\frac{T_2}{T_1}\\right)$$",
      "steps": "1. Diketahui rasio besaran:<br>$V_2 = 2V_1 \\implies \\frac{V_1}{V_2} = \\frac{1}{2}$<br>$T_2 = 3T_1 \\implies \\frac{T_2}{T_1} = 3$<br>2. Masukkan ke perbandingan tekanan:<br>$$P_2 = P_0 \\times \\left(\\frac{1}{2}\\right) \\times 3 = \\frac{3}{2}\\,P_0 = 1{,}5\\,P_0$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jebakan perkalian: jangan langsung mengalikan $2 \\times 3 = 6$ (opsi E). Volume berada di penyebut saat mencari tekanan ($P \\propto 1/V$), sedangkan suhu berada di pembilang ($P \\propto T$)."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-gabungan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Perubahan Kondisi Gas dari Suhu Beku ke Suhu Kamar",
    "difficulty": "mudah",
    "statement": "Sebuah sampel gas ideal memiliki volume $5{,}46\\text{ liter}$ pada suhu $0^\\circ\\text{C}$ dan tekanan $1{,}0\\text{ atm}$. Sampel gas tersebut kemudian dipindahkan ke ruangan bersuhu $27^\\circ\\text{C}$ dan tekanannya diturunkan menjadi $0{,}50\\text{ atm}$. Volume sampel gas pada kondisi baru tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6{,}0\\text{ liter}$",
      "$9{,}0\\text{ liter}$",
      "$10{,}92\\text{ liter}$",
      "$12{,}0\\text{ liter}$",
      "$15{,}0\\text{ liter}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan persamaan Boyle-Gay Lussac dengan memastikan semua suhu dinyatakan dalam Kelvin:<br>$$T_1 = 0 + 273 = 273\\text{ K}$$<br>$$T_2 = 27 + 273 = 300\\text{ K}$$<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2}$$",
      "steps": "1. Masukkan nilai yang diketahui ke dalam persamaan:<br>$$\\frac{1{,}0 \\times 5{,}46}{273} = \\frac{0{,}50 \\times V_2}{300}$$<br>2. Sederhanakan ruas kiri:<br>$$\\frac{5{,}46}{273} = 0{,}02$$<br>3. Hitung $V_2$:<br>$$0{,}02 = \\frac{0{,}50 \\times V_2}{300} \\implies 0{,}50 \\times V_2 = 0{,}02 \\times 300 = 6$$<br>$$V_2 = \\frac{6}{0{,}50} = 12{,}0\\text{ liter}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jika lupa memperhitungkan perubahan suhu (menganggap hanya ada perubahan tekanan), hasilnya adalah $5{,}46 / 0{,}5 = 10{,}92\\text{ liter}$ (opsi C). Pemanasan dari $273\\text{ K}$ ke $300\\text{ K}$ memberikan ekspansi tambahan."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-gabungan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Menghitung Suhu Akhir Proses Gas",
    "difficulty": "mudah",
    "statement": "Gas ideal di dalam tangki silinder semula memiliki tekanan $2\\text{ atm}$ dan volume $3\\text{ liter}$ pada suhu mutlak $300\\text{ K}$. Gas tersebut diekspansikan hingga volumenya menjadi $6\\text{ liter}$, sedangkan tekanannya turun menjadi $1{,}5\\text{ atm}$. Suhu akhir gas ideal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$225\\text{ K}$",
      "$350\\text{ K}$",
      "$400\\text{ K}$",
      "$450\\text{ K}$",
      "$600\\text{ K}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persamaan keadaan gabungan gas ideal dapat diselesaikan untuk mencari suhu akhir $T_2$:<br>$$T_2 = T_1 \\times \\left(\\frac{P_2 \\times V_2}{P_1 \\times V_1}\\right)$$",
      "steps": "1. Identifikasi parameter:<br>$P_1 = 2\\text{ atm}$, $V_1 = 3\\text{ liter}$, $T_1 = 300\\text{ K}$<br>$P_2 = 1{,}5\\text{ atm}$, $V_2 = 6\\text{ liter}$<br>2. Masukkan ke rumus:<br>$$\\frac{2 \\times 3}{300} = \\frac{1{,}5 \\times 6}{T_2}$$<br>$$\\frac{6}{300} = \\frac{9}{T_2} \\implies \\frac{1}{50} = \\frac{9}{T_2}$$<br>$$T_2 = 9 \\times 50 = 450\\text{ K}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Periksa apakah hasil kali $P \\times V$ bertambah atau berkurang: $P_1 V_1 = 6$ sedangkan $P_2 V_2 = 9$. Karena $P V$ membesar, maka suhu mutlak $T$ pasti meningkat di atas $300\\text{ K}$."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-gabungan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Sifat Tetapan Boyle-Gay Lussac",
    "difficulty": "mudah",
    "statement": "Menurut Hukum Boyle-Gay Lussac, nilai perbandingan $\\frac{P \\times V}{T}$ untuk gas ideal selalu bernilai konstan dalam sistem tertutup. Nilai tetapan dari perbandingan $\\frac{P \\times V}{T}$ tersebut secara fisis berbanding lurus dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Luas penampang dinding wadah penampung gas",
      "Jumlah mol atau banyaknya partikel molekul gas yang terkurung dalam sistem",
      "Kerapatan massa dinding luar bejana",
      "Percepatan gravitasi tempat percobaan dilakukan",
      "Koefisien muai panjang bahan penyusun wadah"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Dari persamaan umum gas ideal $P V = n R T = N k_B T$, jika kedua ruas dibagi dengan suhu mutlak $T$, diperoleh:<br>$$\\frac{P \\times V}{T} = n \\times R = N \\times k_B$$<br>dengan $R$ adalah tetapan gas universal dan $k_B$ tetapan Boltzmann (keduanya bernilai konstan). Jadi, nilai $\\frac{P V}{T}$ berbanding lurus secara linier dengan jumlah mol gas ($n$) atau jumlah partikel gas ($N$).",
      "steps": "1. Analisis penurunan persamaan gas ideal.<br>2. Nilai tetapan $\\frac{P V}{T}$ tidak dipengaruhi oleh bentuk wadah, gravitasi, maupun bahan bejana.<br>3. Nilai tetapan hanya ditentukan oleh seberapa banyak zat gas (jumlah partikel/mol) yang berada di dalam sistem tertutup tersebut.<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Konstanta $\\frac{PV}{T}$ bernilai tetap HANYA JIKA sistem tertutup (tidak ada partikel gas yang bocor keluar atau ditambahkan ke dalam wadah)."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-gas-gabungan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Balon Udara Cuaca di Lapisan Atmosfer Tinggi",
    "difficulty": "sedang",
    "statement": "Sebuah balon penelitian meteorologi diisi gas helium hingga bervolume $10\\text{ m}^3$ di permukaan bumi saat tekanan udara $1{,}0\\text{ atm}$ dan suhu $27^\\circ\\text{C}$. Balon tersebut kemudian dilepas dan melayang naik ke stratosfer hingga mencapai ketinggian di mana tekanan udara luar adalah $0{,}20\\text{ atm}$ dan suhunya turun menjadi $-33^\\circ\\text{C}$. Dengan menganggap elastisitas kulit balon memungkinkan gas memuai bebas tanpa perbedaan tekanan dalam-luar, volume balon helium pada ketinggian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ m}^3$",
      "$32\\text{ m}^3$",
      "$40\\text{ m}^3$",
      "$50\\text{ m}^3$",
      "$62{,}5\\text{ m}^3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan persamaan keadaan gabungan Boyle-Gay Lussac untuk sistem gas tertutup dengan suhu mutlak Kelvin ($K = ^\\circ\\text{C} + 273$):<br>$$\\frac{P_1 \\times V_1}{T_1} = \\frac{P_2 \\times V_2}{T_2} \\implies V_2 = V_1 \\times \\left(\\frac{P_1}{P_2}\\right) \\times \\left(\\frac{T_2}{T_1}\\right)$$",
      "steps": "1. Konversi suhu ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = -33 + 273 = 240\\text{ K}$<br>2. Data tekanan dan volume awal:<br>$P_1 = 1{,}0\\text{ atm}$, $P_2 = 0{,}20\\text{ atm}$, $V_1 = 10\\text{ m}^3$<br>3. Hitung volume akhir $V_2$:<br>$$V_2 = 10\\text{ m}^3 \\times \\left(\\frac{1{,}0}{0{,}20}\\right) \\times \\left(\\frac{240}{300}\\right)$$<br>$$V_2 = 10 \\times 5 \\times 0{,}80 = 40\\text{ m}^3$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jika lupa memperhitungkan penurunan suhu (hanya menggunakan Hukum Boyle pada tekanan $0{,}20\\text{ atm}$), hasilnya adalah $10 \\times 5 = 50\\text{ m}^3$ (opsi D). Penurunan suhu di ketinggian mereduksi pemuaian volume balon."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-gabungan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Kebocoran Gas dari Wadah Bertekanan",
    "difficulty": "sedang",
    "statement": "Sebuah tabung baja bervolume tetap berisi gas ideal bertekanan $6{,}0\\text{ atm}$ pada suhu $27^\\circ\\text{C}$. Karena tabung mengalami kebocoran mikro saat dipanaskan di ruang penyimpanan hingga suhunya mencapai $127^\\circ\\text{C}$, tekanannya terukur menjadi $4{,}0\\text{ atm}$. Persentase massa gas yang telah keluar dari tabung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\%$",
      "$33{,}3\\%$",
      "$40\\%$",
      "$50\\%$",
      "$66{,}7\\%$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dari persamaan gas ideal $P V = n R T = \\frac{m}{M_r} R T$, karena volume wadah ($V$) dan jenis gas ($M_r$) tetap, massa gas yang tersisa di dalam tabung berbanding lurus dengan rasio $P/T$:<br>$$\\frac{m_2}{m_1} = \\frac{P_2 / T_2}{P_1 / T_1} = \\frac{P_2 \\times T_1}{P_1 \\times T_2}$$<br>Persentase massa gas yang bocor/keluar adalah: $\\%m_{\\text{keluar}} = \\left(1 - \\frac{m_2}{m_1}\\right) \\times 100\\%$.",
      "steps": "1. Konversi suhu ke Kelvin:<br>$T_1 = 27 + 273 = 300\\text{ K}$<br>$T_2 = 127 + 273 = 400\\text{ K}$<br>2. Hitung rasio massa gas yang masih tersisa di dalam wadah:<br>$$\\frac{m_2}{m_1} = \\frac{4{,}0 \\times 300}{6{,}0 \\times 400} = \\frac{1200}{2400} = \\frac{1}{2} = 50\\%$$<br>3. Hitung persentase massa yang telah keluar:<br>$$\\%m_{\\text{keluar}} = 100\\% - 50\\% = 50\\%$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan mengabaikan perubahan suhu dengan hanya menghitung rasio tekanan $4/6 = 66{,}7\\%$ (opsi E). Kenaikan suhu dari $300\\text{ K}$ ke $400\\text{ K}$ ikut meningkatkan tekanan partikel yang tersisa."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-gabungan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Pencampuran Dua Bejana dan Pemanasan",
    "difficulty": "sedang",
    "statement": "Dua buah bejana kaku A dan B dihubungkan oleh sebuah pipa penghubung bervolume abaian yang dilengkapi kran tertutup:<br>- Bejana A bervolume $2\\text{ liter}$ berisi gas ideal pada tekanan $3\\text{ atm}$ dan suhu $300\\text{ K}$<br>- Bejana B bervolume $3\\text{ liter}$ berisi gas ideal sejenis pada tekanan $1\\text{ atm}$ dan suhu $300\\text{ K}$<br>Kran penghubung kemudian dibuka sehingga kedua gas bercampur sempurna, lalu seluruh sistem dipanaskan secara merata hingga suhunya mencapai $400\\text{ K}$. Tekanan akhir gas di dalam kedua bejana tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}8\\text{ atm}$",
      "$2{,}0\\text{ atm}$",
      "$2{,}4\\text{ atm}$",
      "$2{,}8\\text{ atm}$",
      "$3{,}2\\text{ atm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum kekekalan jumlah mol partikel gas total ($n_{\\text{total}} = n_A + n_B$):<br>Dari $n = \\frac{PV}{RT}$, sebelum dan sesudah kran dibuka berlaku:<br>$$\\frac{P_{\\text{akhir}} \\times V_{\\text{total}}}{T_{\\text{akhir}}} = \\frac{P_A \\times V_A}{T_A} + \\frac{P_B \\times V_B}{T_B}$$<br>dengan $V_{\\text{total}} = V_A + V_B$.",
      "steps": "1. Data awal: $V_A = 2\\text{ L}$, $P_A = 3\\text{ atm}$, $V_B = 3\\text{ L}$, $P_B = 1\\text{ atm}$, $T_A = T_B = 300\\text{ K}$.<br>2. Hitung volume total sistem: $V_{\\text{total}} = 2 + 3 = 5\\text{ liter}$.<br>3. Hitung jumlah besaran $P V/T$ mula-mula:<br>$$\\sum \\frac{PV}{T} = \\frac{3 \\times 2}{300} + \\frac{1 \\times 3}{300} = \\frac{6 + 3}{300} = \\frac{9}{300}$$<br>4. Samakan dengan kondisi akhir pada $T_{\\text{akhir}} = 400\\text{ K}$:<br>$$\\frac{P_{\\text{akhir}} \\times 5}{400} = \\frac{9}{300}$$<br>$$P_{\\text{akhir}} \\times 5 = \\frac{9 \\times 400}{300} = 9 \\times \\frac{4}{3} = 12$$<br>$$P_{\\text{akhir}} = \\frac{12}{5} = 2{,}4\\text{ atm}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jika lupa memperhitungkan pemanasan ke $400\\text{ K}$ (hanya mencampur pada $300\\text{ K}$), hasilnya adalah $9/5 = 1{,}8\\text{ atm}$ (opsi A)."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-gabungan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Kesetimbangan Piston Bebas Pembagi Silinder",
    "difficulty": "sedang",
    "statement": "Sebuah silinder horizontal dengan panjang total $80\\text{ cm}$ dan penampang seragam ditutup pada kedua ujungnya. Sebuah piston ringan bebas gesekan dan bersifat isolator panas membagi silinder tepat di tengah-tengah menjadi dua bagian sama panjang ($40\\text{ cm}$ kiri dan $40\\text{ cm}$ kanan). Mula-mula kedua bagian berisi gas ideal pada tekanan dan suhu yang sama ($300\\text{ K}$). Jika gas di ruang kiri dipanaskan hingga suhunya menjadi $600\\text{ K}$ sedangkan gas di ruang kanan didinginkan menjadi $200\\text{ K}$, jarak pergeseran piston dari posisi awalnya setelah kesetimbangan mekanis baru tercapai adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada kesetimbangan mekanis, piston berhenti bergerak ketika tekanan pada kedua sisi sama ($P_1' = P_2'$).<br>Karena jumlah mol gas pada masing-masing kompartemen tertutup bernilai konstan, dari $\\frac{P V}{T} = \\text{konstan}$, maka perbandingan volume akhir sama dengan perbandingan suhu akhirnya:<br>$$\\frac{V_1'}{T_1'} = \\frac{V_2'}{T_2'} \\implies \\frac{L_1'}{T_1'} = \\frac{L_2'}{T_2'}$$<br>dengan $L_1' + L_2' = L_{\\text{total}} = 80\\text{ cm}$.",
      "steps": "1. Tulis perbandingan panjang kolom akhir:<br>$$\\frac{L_1'}{600\\text{ K}} = \\frac{L_2'}{200\\text{ K}} \\implies \\frac{L_1'}{L_2'} = \\frac{600}{200} = 3 \\implies L_1' = 3L_2'$$<br>2. Substitusikan ke panjang total silinder:<br>$$3L_2' + L_2' = 80\\text{ cm} \\implies 4L_2' = 80 \\implies L_2' = 20\\text{ cm}$$<br>$$L_1' = 3 \\times 20 = 60\\text{ cm}$$<br>3. Hitung pergeseran posisi piston dari posisi mula-mula ($40\\text{ cm}$):<br>$$\\Delta x = 60\\text{ cm} - 40\\text{ cm} = 20\\text{ cm}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Hati-hati: panjang akhir ruang kiri adalah $60\\text{ cm}$, namun pertanyaan menanyakan jarak pergeseran piston dari posisi semula (yaitu $60 - 40 = 20\\text{ cm}$)."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-gas-gabungan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-gas",
    "subTopicId": "fis-termo-gas-gabungan",
    "category": "Relasi Densitas Gas pada Proses Termodinamika Umum",
    "difficulty": "sedang",
    "statement": "Suatu gas ideal memiliki massa jenis $\\rho_0$ pada tekanan $P_0$ dan suhu mutlak $T_0$. Gas tersebut kemudian mengalami suatu proses perubahan keadaan sehingga tekanannya meningkat menjadi $3\\,P_0$ dan suhu mutlaknya dinaikkan menjadi $2\\,T_0$. Massa jenis gas ideal pada kondisi akhir tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}67\\,\\rho_0$",
      "$1{,}5\\,\\rho_0$",
      "$2{,}0\\,\\rho_0$",
      "$3{,}0\\,\\rho_0$",
      "$6{,}0\\,\\rho_0$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan antara tekanan, massa jenis, dan suhu mutlak gas ideal diturunkan dari persamaan keadaan:<br>$$P = \\frac{\\rho}{M_r} R T \\implies \\rho = \\frac{P \\times M_r}{R \\times T}$$<br>Untuk gas yang sama ($M_r$ konstan), massa jenis berbanding lurus dengan tekanan dan berbanding terbalik dengan suhu mutlak:<br>$$\\frac{\\rho_2}{\\rho_1} = \\left(\\frac{P_2}{P_1}\\right) \\times \\left(\\frac{T_1}{T_2}\\right)$$",
      "steps": "1. Identifikasi rasio perubahan variabel:<br>$$\\frac{P_2}{P_1} = 3 \\quad \\text{dan} \\quad \\frac{T_2}{T_1} = 2 \\implies \\frac{T_1}{T_2} = \\frac{1}{2}$$<br>2. Masukkan ke perbandingan massa jenis:<br>$$\\rho_2 = \\rho_0 \\times 3 \\times \\frac{1}{2} = 1{,}5\\,\\rho_0$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Perhatikan bahwa pemanasan ($T$ membesar) membuat gas memuai dan menurunkan massa jenis ($1/T$), sementara peningkatan tekanan memampatkan gas dan menaikkan massa jenis ($P$). Kombinasi keduanya menghasilkan faktor $3/2 = 1{,}5$."
    },
    "subTopicSlug": "hukum-boyle-gay-lussac-gabungan",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum Boyle-Gay Lussac",
    "subTopic": "Hukum Boyle-Gay Lussac",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
