/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Hukum I Termodinamika (fis-termo-hukum-hukum1)
 * Slug: hukum-1-termodinamika
 * Indikator: Prinsip kekekalan energi pada sistem termodinamika (Q = Delta U + W).
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-hukum1";
  const subTopicSlug = "hukum-1-termodinamika";
  const questions = [
  {
    "id": "fis-termo-hukum-hukum1-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Formulasi Dasar Hukum I Termodinamika",
    "difficulty": "mudah",
    "statement": "Suatu sistem gas ideal menyerap kalor dari lingkungan sebesar $800\\text{ Joule}$. Pada saat yang bersamaan, gas tersebut berekspansi dan melakukan usaha luar sebesar $300\\text{ Joule}$. Besar perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$800\\text{ Joule}$",
      "$1100\\text{ Joule}$",
      "$2400\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum I Termodinamika menyatakan prinsip kekekalan energi pada sistem termal:<br>$$\\Delta U = Q - W \\quad \\text{atau} \\quad Q = \\Delta U + W$$<br>dengan $Q$ adalah kalor yang diserap sistem dan $W$ usaha luar yang dilakukan oleh sistem.",
      "steps": "1. Data besaran:<br>Kalor diserap sistem: $Q = +800\\text{ Joule}$<br>Usaha dilakukan sistem: $W = +300\\text{ Joule}$<br>2. Masukkan ke rumus Hukum I Termodinamika:<br>$$\\Delta U = Q - W = 800\\text{ J} - 300\\text{ J} = +500\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Jika keliru menjumlahkan $Q$ dan $W$ ($800 + 300 = 1100\\text{ J}$, opsi D), perhatikan bahwa usaha yang dilakukan oleh gas mengurangi energi internal gas ($Q - W$)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-hukum1-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Penerapan Aturan Tanda Kalor dan Usaha",
    "difficulty": "mudah",
    "statement": "Suatu sistem gas melepaskan kalor ke lingkungan sebesar $500\\text{ Joule}$. Pada saat yang bersamaan, lingkungan melakukan usaha pada gas sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-700\\text{ Joule}$",
      "$-300\\text{ Joule}$",
      "$+300\\text{ Joule}$",
      "$+700\\text{ Joule}$",
      "$0\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Aturan konvensi tanda dalam Hukum I Termodinamika ($\\Delta U = Q - W$):<br>- Sistem melepaskan kalor ke lingkungan: $Q < 0$ (negatif)<br>- Lingkungan melakukan usaha pada sistem (kompresi): $W < 0$ (negatif)",
      "steps": "1. Tentukan tanda masing-masing variabel:<br>$Q = -500\\text{ Joule}$ (kalor keluar/dilepas)<br>$W = -200\\text{ Joule}$ (usaha dilakukan pada sistem)<br>2. Hitung perubahan energi dalam $\\Delta U$:<br>$$\\Delta U = Q - W = (-500) - (-200) = -500 + 200 = -300\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Hati-hati dengan tanda negatif ganda: $-(-200) = +200$. Jika salah mengartikan tanda usaha, hasilnya bisa menjadi $-700\\text{ Joule}$ (opsi A)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-hukum1-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Hukum I pada Proses Isotermal",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal mengalami pemuaian secara isotermal (suhu konstan) di dalam silinder. Selama proses ekspansi tersebut, gas menyerap kalor sebesar $1500\\text{ Joule}$ dari reservoir panas. Besar usaha luar yang dilakukan oleh gas adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ Joule}$",
      "$750\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$3000\\text{ Joule}$",
      "Tidak dapat ditentukan tanpa mengetahui volume awal"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada proses isotermal gas ideal, suhu gas bernilai konstan ($\\Delta T = 0$).<br>Karena energi dalam gas ideal murni fungsi suhu mutlak, maka perubahan energi dalam pada proses isotermal selalu bernilai nol:<br>$$\\Delta U = 0$$<br>Berdasarkan Hukum I Termodinamika: $\\Delta U = Q - W \\implies 0 = Q - W \\implies W = Q$.",
      "steps": "1. Identifikasi karakteristik proses: isotermal $\\implies \\Delta T = 0 \\implies \\Delta U = 0$.<br>2. Hubungkan kalor dan usaha: $W = Q$.<br>3. Karena $Q = 1500\\text{ Joule}$, maka usaha luar $W = 1500\\text{ Joule}$.<br>4. Seluruh kalor yang diserap gas dikonversikan seutuhnya menjadi usaha luar mekanik pada proses isotermal.<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jangan mengira usaha luar bernilai nol (opsi A). Yang bernilai nol pada proses isotermal adalah perubahan energi dalamnya ($\\Delta U = 0$), bukan usahanya ($W = Q$)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-hukum1-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Hukum I pada Proses Isokhorik",
    "difficulty": "mudah",
    "statement": "Sebuah tabung gas kaku bervolume tetap menyerap energi kalor sebesar $2400\\text{ Joule}$ saat dipanaskan. Besar perubahan energi dalam ($\\Delta U$) gas ideal di dalam tabung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ Joule}$",
      "$1200\\text{ Joule}$",
      "$2400\\text{ Joule}$",
      "$3600\\text{ Joule}$",
      "$4800\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada proses isokhorik (volume konstan), gas tidak mengalami perubahan volume ($\\Delta V = 0$) sehingga usaha luar bernilai nol:<br>$$W = 0$$<br>Berdasarkan Hukum I Termodinamika: $\\Delta U = Q - W \\implies \\Delta U = Q$. Seluruh kalor yang diserap semata-mata digunakan untuk meningkatkan energi dalam gas.",
      "steps": "1. Karakteristik proses: volume tetap $\\implies W = 0$.<br>2. Terapkan Hukum I Termodinamika:<br>$$\\Delta U = Q - 0 = Q$$<br>3. Karena kalor yang diserap $Q = 2400\\text{ Joule}$, maka $\\Delta U = 2400\\text{ Joule}$.<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Pada proses volume tetap, tidak ada kerja mekanik yang dilakukan pada piston/lingkungan, sehingga $100\\%$ energi kalor masuk langsung menaikkan suhu dan energi dalam molekul gas."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-hukum1-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Hukum I pada Proses Adiabatik",
    "difficulty": "mudah",
    "statement": "Suatu gas ideal di dalam wadah berinsulasi termal mengalami ekspansi adiabatik dan melakukan usaha luar sebesar $650\\text{ Joule}$ pada lingkungan. Perubahan energi dalam ($\\Delta U$) gas tersebut selama proses ekspansi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-650\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+325\\text{ Joule}$",
      "$+650\\text{ Joule}$",
      "$+1300\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada proses adiabatik, sistem tidak mengalami pertukaran kalor dengan lingkungan sekitarnya ($Q = 0$).<br>Persamaan Hukum I Termodinamika menjadi:<br>$$\\Delta U = Q - W = 0 - W = -W$$",
      "steps": "1. Karakteristik adiabatik: $Q = 0$.<br>2. Data usaha: gas melakukan usaha $\\implies W = +650\\text{ Joule}$.<br>3. Hitung $\\Delta U$:<br>$$\\Delta U = -W = -650\\text{ Joule}$$<br>4. Energi dalam gas berkurang sebesar $650\\text{ Joule}$ yang ditandai dengan penurunan suhu gas.<br>5. Jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Perhatikan tanda negatif: karena tidak ada pasokan kalor dari luar, usaha yang dilakukan gas diambil langsung dari stok energi dalamnya sendiri, sehingga $\\Delta U$ bernilai negatif (suhu gas mendingin)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-hukum1-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Analisis Siklus Termodinamika Tiga Tahap",
    "difficulty": "sedang",
    "statement": "Suatu gas ideal menjalani siklus tertutup $A \\to B \\to C \\to A$:<br>- Proses $A \\to B$: gas menyerap kalor $Q_{AB} = 500\\text{ J}$ dan melakukan usaha $W_{AB} = 200\\text{ J}$.<br>- Proses $B \\to C$: gas mengalami proses isokhorik dengan perubahan energi dalam $\\Delta U_{BC} = -400\\text{ J}$.<br>- Proses $C \\to A$: gas melepaskan kalor sebesar $50\\text{ J}$ ($Q_{CA} = -50\\text{ J}$) untuk kembali ke keadaan awal $A$.<br>Besar usaha luar yang dilakukan pada proses $C \\to A$ ($W_{CA}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-250\\text{ Joule}$",
      "$-150\\text{ Joule}$",
      "$+50\\text{ Joule}$",
      "$+150\\text{ Joule}$",
      "$+250\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum I Termodinamika ($\\Delta U = Q - W$) dan sifat siklus tertutup di mana total perubahan energi dalam dalam satu putaran penuh bernilai nol:<br>$$\\Delta U_{\\text{siklus}} = \\Delta U_{AB} + \\Delta U_{BC} + \\Delta U_{CA} = 0$$",
      "steps": "1. Hitung $\\Delta U_{AB}$:<br>$$\\Delta U_{AB} = Q_{AB} - W_{AB} = 500\\text{ J} - 200\\text{ J} = +300\\text{ J}$$<br>2. Diketahui $\\Delta U_{BC} = -400\\text{ J}$.<br>3. Hitung $\\Delta U_{CA}$ dari syarat siklus penuh:<br>$$300 + (-400) + \\Delta U_{CA} = 0 \\implies -100 + \\Delta U_{CA} = 0 \\implies \\Delta U_{CA} = +100\\text{ J}$$<br>4. Hitung usaha $W_{CA}$:<br>$$\\Delta U_{CA} = Q_{CA} - W_{CA} \\implies 100 = -50 - W_{CA}$$<br>$$W_{CA} = -50 - 100 = -150\\text{ Joule}$$<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Hati-hati dengan tanda aljabar: $W_{CA} = Q_{CA} - \\Delta U_{CA} = (-50) - 100 = -150\\text{ J}$. Tanda negatif menunjukkan bahwa pada lintasan kompresi $C \\to A$, lingkungan melakukan kerja pada gas."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-hukum1-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Relasi Kalor Jenis Molar Cp dan Cv (Relasi Mayer)",
    "difficulty": "sedang",
    "statement": "Sebanyak $2\\text{ mol}$ gas ideal monoatomik dipanaskan sehingga suhunya meningkat sebesar $\\Delta T = 40\\text{ K}$. Diketahui kapasitas kalor molar pada volume konstan adalah $C_v = \\frac{3}{2}R$ dan pada tekanan konstan adalah $C_p = \\frac{5}{2}R$, dengan $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$. Selisih jumlah kalor yang diperlukan jika pemanasan dilakukan pada tekanan tetap dibandingkan dengan pada volume tetap ($Q_p - Q_v$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$332{,}6\\text{ Joule}$",
      "$665{,}1\\text{ Joule}$",
      "$997{,}7\\text{ Joule}$",
      "$1330{,}2\\text{ Joule}$",
      "$1662{,}8\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan relasi Mayer untuk gas ideal, selisih kapasitas kalor molar pada tekanan tetap dan volume tetap adalah tetapan gas universal:<br>$$C_p - C_v = R$$<br>Kalor pada tekanan tetap adalah $Q_p = n C_p \\Delta T$ dan pada volume tetap adalah $Q_v = n C_v \\Delta T$. Selisih kalor keduanya setara dengan usaha luar yang dilakukan gas pada pemuaian isobarik:<br>$$Q_p - Q_v = n(C_p - C_v)\\Delta T = n R \\Delta T = W$$",
      "steps": "1. Identifikasi besaran: $n = 2\\text{ mol}$, $\\Delta T = 40\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Hitung selisih kalor ($Q_p - Q_v$):<br>$$Q_p - Q_v = n \\times R \\times \\Delta T = 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 40\\text{ K}$$<br>$$Q_p - Q_v = 80 \\times 8{,}314 = 665{,}12\\text{ Joule} \\approx 665{,}1\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Tidak perlu menghitung nilai mutlak $Q_p$ dan $Q_v$ secara terpisah lalu mengurangkannya; gunakan langsung relasi Mayer $Q_p - Q_v = n R \\Delta T$ yang menghemat waktu dan meminimalkan galat hitung."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-hukum1-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Hukum I pada Perubahan Wujud Penguapan Air",
    "difficulty": "sedang",
    "statement": "Sebanyak $10\\text{ gram}$ air pada suhu $100^\\circ\\text{C}$ diuapkan seluruhnya menjadi uap air bersuhu $100^\\circ\\text{C}$ pada tekanan atmosfer konstan $P = 1{,}0 \\times 10^5\\text{ Pa}$. Volume $10\\text{ gram}$ air cair adalah $10\\text{ cm}^3$ ($1{,}0 \\times 10^{-5}\\text{ m}^3$), sedangkan volume uap air yang terbentuk adalah $16{,}7\\text{ liter}$ ($16{,}7 \\times 10^{-3}\\text{ m}^3$). Jika kalor laten penguapan air adalah $L_u = 2{,}26 \\times 10^6\\text{ J/kg}$, besar perubahan energi dalam ($\\Delta U$) molekul air selama proses penguapan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1670\\text{ Joule}$",
      "$18.930\\text{ Joule}$",
      "$20.930\\text{ Joule}$",
      "$22.600\\text{ Joule}$",
      "$24.270\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum I Termodinamika berlaku pada perubahan fase:<br>$$\\Delta U = Q - W$$<br>- Kalor penyerapan laten: $Q = m \\times L_u$.<br>- Usaha luar ekspansi melawan tekanan atmosfer: $W = P \\times (V_{\\text{uap}} - V_{\\text{cair}})$.",
      "steps": "1. Hitung kalor total yang diserap ($m = 10\\text{ g} = 0{,}01\\text{ kg}$):<br>$$Q = 0{,}01\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 22.600\\text{ Joule}$$<br>2. Hitung selisih volume:<br>$$\\Delta V = 16{,}7 \\times 10^{-3}\\text{ m}^3 - 0{,}01 \\times 10^{-3}\\text{ m}^3 \\approx 16{,}7 \\times 10^{-3}\\text{ m}^3$$<br>3. Hitung usaha luar melawan tekanan atmosfer:<br>$$W = P \\times \\Delta V = (1{,}0 \\times 10^5\\text{ Pa}) \\times (16{,}7 \\times 10^{-3}\\text{ m}^3) = 1670\\text{ Joule}$$<br>4. Hitung perubahan energi dalam $\\Delta U$:<br>$$\\Delta U = Q - W = 22.600\\text{ J} - 1670\\text{ J} = 20.930\\text{ Joule}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Kalor laten penguapan tidak seluruhnya menjadi energi dalam. Sebagian kecil (sekitar $1670\\text{ J}$, opsi A) harus digunakan untuk mendesak udara luar atmosfer saat volume uap mengembang ribuan kali lipat."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-hukum1-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Kalor Netto Siklus Persegi Panjang Diagram P-V",
    "difficulty": "sedang",
    "statement": "Suatu siklus termodinamika persegi panjang $ABCDA$ yang dijalani gas ideal memiliki koordinat titik:<br>- $A$ ($1{,}0\\text{ m}^3, 4{,}0 \\times 10^5\\text{ Pa}$)<br>- $B$ ($3{,}0\\text{ m}^3, 4{,}0 \\times 10^5\\text{ Pa}$)<br>- $C$ ($3{,}0\\text{ m}^3, 1{,}0 \\times 10^5\\text{ Pa}$)<br>- $D$ ($1{,}0\\text{ m}^3, 1{,}0 \\times 10^5\\text{ Pa}$)<br>Arah siklus berputar searah jarum jam ($A \\to B \\to C \\to D \\to A$). Kalor netto ($Q_{\\text{netto}}$) yang diserap oleh gas ideal dalam satu siklus lengkap adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ kJ}$",
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada satu siklus termodinamika tertutup penuh, perubahan energi dalam total adalah nol ($\\Delta U_{\\text{siklus}} = 0$).<br>Berdasarkan Hukum I Termodinamika:<br>$$Q_{\\text{netto}} = \\Delta U_{\\text{siklus}} + W_{\\text{siklus}} = 0 + W_{\\text{siklus}} = W_{\\text{siklus}}$$<br>Usaha satu siklus persegi panjang sama dengan luas persegi panjang tersebut.",
      "steps": "1. Panjang sisi volume: $\\Delta V = 3{,}0\\text{ m}^3 - 1{,}0\\text{ m}^3 = 2{,}0\\text{ m}^3$.<br>2. Panjang sisi tekanan: $\\Delta P = 4{,}0 \\times 10^5\\text{ Pa} - 1{,}0 \\times 10^5\\text{ Pa} = 3{,}0 \\times 10^5\\text{ Pa}$.<br>3. Hitung luas persegi panjang (usaha siklus $W_{\\text{siklus}}$):<br>$$W_{\\text{siklus}} = \\Delta P \\times \\Delta V = (3{,}0 \\times 10^5\\text{ Pa}) \\times 2{,}0\\text{ m}^3 = 6{,}0 \\times 10^5\\text{ Joule} = 600\\text{ kJ}$$<br>4. Karena $\\Delta U = 0$, maka $Q_{\\text{netto}} = W_{\\text{siklus}} = 600\\text{ kJ}$.<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Karena siklus berputar searah jarum jam, kalor netto bernilai positif (mesin kalor menyerap kalor netto dan menghasilkan kerja netto positif)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-hukum1-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Kekekalan Energi pada Sistem Terisolasi Kaku",
    "difficulty": "sedang",
    "statement": "Sebuah kalorimeter bom memiliki dinding tebal yang kaku sempurna (tidak dapat memuai) dan terbungkus lapisan isolator panas ideal sehingga tidak ada kalor yang keluar maupun masuk. Di dalam bejana tersebut terjadi reaksi kimia eksotermik cepat yang melepaskan energi ikatan kimia sebesar $5000\\text{ Joule}$ yang memanaskan gas dan fluida di dalamnya. Berdasarkan Hukum I Termodinamika, perubahan total energi dalam ($\\Delta U_{\\text{total}}$) dari seluruh sistem terisolasi kaku tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-5000\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+2500\\text{ Joule}$",
      "$+5000\\text{ Joule}$",
      "$+10.000\\text{ Joule}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum I Termodinamika untuk sistem terisolasi kaku:<br>- Karena dinding berinsulasi ideal: $Q = 0$ (tidak ada aliran kalor melintasi batas sistem).<br>- Karena dinding kaku tak bergeser: $\\Delta V = 0 \\implies W = 0$ (tidak ada kerja mekanik luar).<br>Maka perubahan energi dalam total sistem adalah:<br>$$\\Delta U_{\\text{total}} = Q - W = 0 - 0 = 0$$",
      "steps": "1. Tinjau batas sistem termodinamika secara utuh.<br>2. Tidak ada energi kalor yang menembus batas wadah ($Q = 0$).<br>3. Tidak ada kerja mekanik batas sistem ($W = 0$).<br>4. Energi ikatan kimia berkurang sebesar $5000\\text{ J}$ dan secara simultan berubah menjadi energi termal kinetik molekul bertambah sebesar $5000\\text{ J}$, sehingga jumlah total energi dalam sistem konstan ($\\Delta U_{\\text{total}} = 0$).<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Jangan terkecoh dengan kenaikan suhu termometer di dalam bom. Energi termal memang naik $+5000\\text{ J}$, namun energi kimia turun $-5000\\text{ J}$, sehingga energi dalam total seluruh sistem tetap kekal ($\\Delta U = 0$)."
    },
    "subTopicSlug": "hukum-1-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill2-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-hukum1",
    "category": "Penerapan Tanda Hukum I Termodinamika",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu sistem gas melepaskan kalor ke lingkungan sebesar $300\\text{ Joule}$, dan pada saat bersamaan dilakukan usaha luar untuk menekan gas tersebut sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-100\\text{ Joule}$",
      "$+100\\text{ Joule}$",
      "$-500\\text{ Joule}$",
      "$+500\\text{ Joule}$",
      "$-300\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Perjanjian Tanda Baku Hukum I Termodinamika:</strong><br>$$\\Delta U = Q - W$$<br>• Sistem <strong>melepas kalor</strong>: $Q < 0$ ($Q = -300\\text{ J}$)<br>• Sistem <strong>menerima usaha</strong> (ditekan dari luar): $W < 0$ ($W = -200\\text{ J}$)</div>",
      "steps": "<ol><li>Masukkan tanda dengan tepat: $Q = -300\\text{ J}$, $W = -200\\text{ J}$.</li><li>Hitung $\\Delta U$: $\\Delta U = (-300) - (-200) = -300 + 200 = -100\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tabel Tanda:</strong><br>• Menyerap kalor $\\implies Q > 0$<br>• Melepas kalor $\\implies Q < 0$<br>• Melakukan kerja $\\implies W > 0$<br>• Menerima kerja $\\implies W < 0$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum I Termodinamika",
    "subTopic": "Hukum I Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "hukum-1-termodinamika"
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
