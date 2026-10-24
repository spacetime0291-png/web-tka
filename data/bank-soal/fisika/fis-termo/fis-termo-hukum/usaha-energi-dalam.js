/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Usaha & Energi Dalam (fis-termo-hukum-usaha)
 * Slug: usaha-energi-dalam
 * Indikator: Usaha luar sistem gas (W = integral P dV) dan perubahan energi dalam gas monoatomik/diatomik.
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-usaha";
  const subTopicSlug = "usaha-energi-dalam";
  const questions = [
  {
    "id": "fis-termo-hukum-usaha-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha Luar pada Kompresi Isobarik",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal berada di dalam silinder berpenghisap pada tekanan konstan $3{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut dimampatkan (dikompresi) oleh gaya luar sehingga volumenya menyusut dari volume awal $4{,}0\\text{ m}^3$ menjadi $1{,}0\\text{ m}^3$. Besar usaha yang dilakukan oleh lingkungan pada gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$900\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1500\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Usaha luar pada proses isobarik dirumuskan:<br>$$W = P \\times \\Delta V = P \\times (V_2 - V_1)$$<br>Ketika volume gas menyusut ($V_2 < V_1$), gas melakukan usaha negatif terhadap lingkungan, yang berarti lingkungan melakukan usaha positif sebesar $|W|$ pada gas.",
      "steps": "1. Identifikasi nilai yang diketahui:<br>$P = 3{,}0 \\times 10^5\\text{ Pa}$<br>$V_1 = 4{,}0\\text{ m}^3$<br>$V_2 = 1{,}0\\text{ m}^3$<br>2. Hitung perubahan volume: $\\Delta V = 1{,}0 - 4{,}0 = -3{,}0\\text{ m}^3$.<br>3. Hitung usaha yang dilakukan oleh gas:<br>$$W = (3{,}0 \\times 10^5\\text{ Pa}) \\times (-3{,}0\\text{ m}^3) = -9{,}0 \\times 10^5\\text{ Joule} = -900\\text{ kJ}$$<br>4. Usaha yang dilakukan oleh lingkungan PADA gas adalah besaran positifnya: $+900\\text{ kJ}$.<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Perhatikan arah usaha: jika gas memuai, gas melakukan usaha pada lingkungan ($W > 0$). Jika gas dimampatkan, lingkungan melakukan usaha pada gas ($W_{\\text{lingkungan}} = -W_{\\text{gas}} = +900\\text{ kJ}$)."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-usaha-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Perubahan Energi Dalam Gas Monoatomik",
    "difficulty": "mudah",
    "statement": "Sebanyak $2\\text{ mol}$ gas helium (gas monoatomik) dipanaskan di dalam bejana tertutup sehingga suhunya naik sebesar $\\Delta T = 50\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar perubahan energi dalam ($\\Delta U$) gas helium tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$415{,}7\\text{ Joule}$",
      "$831{,}4\\text{ Joule}$",
      "$1247{,}1\\text{ Joule}$",
      "$1662{,}8\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perubahan energi dalam ($\\Delta U$) dari $n$ mol gas ideal monoatomik hanya bergantung pada perubahan suhu mutlaknya ($\\Delta T$):<br>$$\\Delta U = \\frac{3}{2} n R \\Delta T$$",
      "steps": "1. Data besaran: $n = 2\\text{ mol}$, $\\Delta T = 50\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Masukkan ke rumus energi dalam monoatomik:<br>$$\\Delta U = \\frac{3}{2} \\times 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 50\\text{ K}$$<br>$$\\Delta U = 3 \\times 8{,}314 \\times 50 = 150 \\times 8{,}314 = 1247{,}1\\text{ Joule}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Lupa menyertakan faktor derajat kebebasan $3/2$ akan menghasilkan nilai $n R \\Delta T = 831{,}4\\text{ Joule}$ (opsi B). Untuk gas monoatomik, faktor $3/2$ wajib digunakan."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-usaha-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Sifat Energi Dalam sebagai Fungsi Keadaan",
    "difficulty": "mudah",
    "statement": "Dalam termodinamika, energi dalam ($U$) dari suatu gas ideal digolongkan sebagai fungsi keadaan (state function). Pernyataan berikut yang paling tepat menjelaskan makna fisis dari fungsi keadaan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Perubahan energi dalam sangat bergantung pada kecepatan gas berekspansi",
      "Besar perubahan energi dalam hanya bergantung pada keadaan awal dan keadaan akhir sistem, tidak bergantung pada proses lintasan yang ditempuh",
      "Energi dalam hanya dapat diubah melalui proses perpindahan kalor tanpa usaha",
      "Nilai energi dalam selalu meningkat pada setiap proses perubahan keadaan gas",
      "Energi dalam gas ideal selalu bernilai nol pada setiap tekanan di atas atmosfer"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fungsi keadaan (state function) adalah besaran termodinamika yang nilainya ditentukan sepenuhnya oleh variabel keadaan sistem saat itu (seperti temperatur $T$, tekanan $P$, dan volume $V$), bukan oleh bagaimana sistem mencapai keadaan tersebut.<br>Oleh karena itu, perubahan energi dalam $\\Delta U = U_2 - U_1$ hanya bergantung pada kondisi awal dan akhir. Berbeda halnya dengan kalor ($Q$) dan usaha ($W$) yang merupakan fungsi lintasan (path functions).",
      "steps": "1. Pahami perbedaan antara fungsi keadaan (state function) dan fungsi proses/lintasan (path function).<br>2. $U$ adalah fungsi keadaan; $Q$ dan $W$ adalah fungsi lintasan.<br>3. Jadi, perubahan $\\Delta U$ independen terhadap jalur lintasan proses.<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Jangan menyamakan energi dalam ($U$) dengan usaha ($W$) atau kalor ($Q$). Usaha dan kalor bergantung pada rute lintasan kurva pada diagram $P-V$, sedangkan $\\Delta U$ hanya melihat selisih suhu akhir dan awal."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-usaha-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Perhitungan Usaha Luar Ekspansi Gas",
    "difficulty": "mudah",
    "statement": "Suatu gas ideal berekspansi di dalam silinder mesin pada tekanan konstan $5{,}0 \\times 10^5\\text{ Pa}$. Volume gas bertambah dari volume awal $0{,}20\\text{ m}^3$ menjadi volume akhir $0{,}60\\text{ m}^3$. Besar usaha luar yang dilakukan oleh gas ideal tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ kJ}$",
      "$150\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$250\\text{ kJ}$",
      "$300\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada proses isobarik, usaha luar dihitung dengan rumus:<br>$$W = P \\times (V_2 - V_1)$$",
      "steps": "1. Data soal: $P = 5{,}0 \\times 10^5\\text{ Pa}$, $V_1 = 0{,}20\\text{ m}^3$, $V_2 = 0{,}60\\text{ m}^3$.<br>2. Hitung selisih volume: $\\Delta V = 0{,}60 - 0{,}20 = 0{,}40\\text{ m}^3$.<br>3. Hitung usaha luar $W$:<br>$$W = (5{,}0 \\times 10^5\\text{ Pa}) \\times 0{,}40\\text{ m}^3 = 2{,}0 \\times 10^5\\text{ Joule} = 200\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jika keliru mengalikan tekanan dengan volume akhir ($5 \\times 10^5 \\times 0{,}60 = 300\\text{ kJ}$), hasilnya akan salah (opsi E). Pengali yang benar adalah pertambahan volumenya ($\\Delta V = 0{,}40\\text{ m}^3$)."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-usaha-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Energi Dalam pada Satu Siklus Tertutup Penuh",
    "difficulty": "mudah",
    "statement": "Suatu mesin kalor beroperasi dengan memanfaatkan gas ideal yang mengalami serangkaian proses termodinamika tertutup hingga kembali tepat ke keadaan fisis semula (satu siklus termodinamika lengkap). Besar perubahan energi dalam total ($\\Delta U_{\\text{siklus}}$) dari gas ideal tersebut setelah menempuh satu siklus penuh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu sama dengan nol ($\\Delta U_{\\text{siklus}} = 0$)",
      "Selalu bernilai positif sebanding dengan kalor masuk",
      "Selalu bernilai negatif karena adanya gesekan mekanik piston",
      "Sama dengan usaha luar total yang dilakukan mesin",
      "Bergantung pada luas kurva tertutup pada diagram $P-V$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada satu siklus termodinamika tertutup lengkap:<br>- Keadaan akhir sistem identik dengan keadaan awalnya, sehingga $T_{\\text{akhir}} = T_{\\text{awal}}$.<br>- Karena energi dalam gas ideal murni merupakan fungsi keadaan suhu mutlak ($U = U(T)$), maka perubahan energi dalam pada satu siklus penuh pasti bernilai nol:<br>$$\\Delta U_{\\text{siklus}} = U_{\\text{akhir}} - U_{\\text{awal}} = 0$$<br>- Berdasarkan Hukum I Termodinamika, usaha netto siklus sama persis dengan kalor netto yang diserap: $W_{\\text{siklus}} = Q_{\\text{siklus}}$.",
      "steps": "1. Analisis sifat siklus termodinamika tertutup.<br>2. Karena sistem kembali ke titik koordinat semula pada diagram $P-V$, suhu akhir sama dengan suhu mula-mula.<br>3. Jadi, $\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} n R (0) = 0$.<br>4. Jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Jangan keliru antara perubahan energi dalam ($\\Delta U_{\\text{siklus}} = 0$) dengan usaha netto siklus ($W_{\\text{siklus}} \\ne 0$). Usaha netto sama dengan luas kurva tertutup, tetapi $\\Delta U$ selalu nol."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-usaha-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha Lintasan Linier Trapesium pada Diagram P-V",
    "difficulty": "sedang",
    "statement": "Suatu gas ideal mengalami proses ekspansi dari keadaan A menuju keadaan B melalui lintasan garis lurus miring pada diagram $P-V$. Pada keadaan awal A, gas memiliki volume $V_A = 1{,}0\\text{ m}^3$ dan tekanan $P_A = 2{,}0 \\times 10^5\\text{ Pa}$. Pada keadaan akhir B, volume gas menjadi $V_B = 5{,}0\\text{ m}^3$ dan tekanannya meningkat menjadi $P_B = 6{,}0 \\times 10^5\\text{ Pa}$. Besar usaha luar yang dilakukan oleh gas selama proses ekspansi dari A ke B tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1600\\text{ kJ}$",
      "$2000\\text{ kJ}$",
      "$2400\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Usaha luar ($W$) pada diagram $P-V$ untuk lintasan garis lurus miring setara dengan luas daerah bangun trapesium yang dibatasi oleh kurva, sumbu volume, serta garis tegak $V = V_A$ dan $V = V_B$:<br>$$W = \\frac{P_A + P_B}{2} \\times (V_B - V_A)$$",
      "steps": "1. Data: $P_A = 2{,}0 \\times 10^5\\text{ Pa}$, $P_B = 6{,}0 \\times 10^5\\text{ Pa}$, $V_A = 1{,}0\\text{ m}^3$, $V_B = 5{,}0\\text{ m}^3$.<br>2. Hitung tekanan rata-rata (tinggi rata-rata trapesium):<br>$$P_{\\text{rata-rata}} = \\frac{2{,}0 \\times 10^5 + 6{,}0 \\times 10^5}{2} = 4{,}0 \\times 10^5\\text{ Pa}$$<br>3. Hitung pertambahan volume: $\\Delta V = 5{,}0 - 1{,}0 = 4{,}0\\text{ m}^3$.<br>4. Hitung luas trapesium (usaha $W$):<br>$$W = (4{,}0 \\times 10^5\\text{ Pa}) \\times 4{,}0\\text{ m}^3 = 16 \\times 10^5\\text{ Joule} = 1600\\text{ kJ}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jika hanya menghitung luas segitiga atas saja ($1/2 \\times 4 \\times 4 \\times 10^5 = 800\\text{ kJ}$, opsi A) atau persegi panjang bawah saja, nilainya belum mencakup seluruh luas di bawah kurva hingga sumbu horizontal $P = 0$."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-usaha-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Perbandingan Usaha Luar Antar Lintasan Berbeda",
    "difficulty": "sedang",
    "statement": "Suatu gas ideal dipindahkan dari keadaan awal 1 ($P_1, V_1$) menuju keadaan akhir 2 ($P_2, V_2$) dengan $P_2 < P_1$ dan $V_2 > V_1$ melalui tiga lintasan yang berbeda pada diagram $P-V$:<br>- Lintasan I: Dari 1 diekspansikan secara isobarik hingga volume $V_2$, lalu tekanannya diturunkan secara isokhorik menuju 2.<br>- Lintasan II: Dari 1 diturunkan tekanannya secara isokhorik hingga $P_2$, lalu diekspansikan secara isobarik menuju 2.<br>- Lintasan III: Menghubungkan titik 1 langsung ke titik 2 melalui garis lurus.<br>Pernyataan yang tepat mengenai perbandingan usaha luar ($W$) dan perubahan energi dalam ($\\Delta U$) pada ketiga lintasan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$",
      "$W_{\\text{I}} = W_{\\text{II}} = W_{\\text{III}}$ dan $\\Delta U_{\\text{I}} > \\Delta U_{\\text{III}} > \\Delta U_{\\text{II}}$",
      "$W_{\\text{II}} > W_{\\text{III}} > W_{\\text{I}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$",
      "$W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ dan $\\Delta U_{\\text{I}} > \\Delta U_{\\text{III}} > \\Delta U_{\\text{II}}$",
      "$W_{\\text{I}} = W_{\\text{II}} = W_{\\text{III}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karakteristik besaran termodinamika:<br>1. Energi dalam ($U$) adalah fungsi keadaan, sehingga perubahannya $\\Delta U = U_2 - U_1$ hanya bergantung pada keadaan awal 1 dan akhir 2, artinya $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$.<br>2. Usaha ($W = \\int P\\,dV$) adalah fungsi lintasan yang nilainya sama dengan luas area di bawah grafik $P-V$. Luas di bawah Lintasan I paling besar, diikuti Lintasan III (trapesium), dan Lintasan II memiliki luas paling kecil.",
      "steps": "1. Amati geometri kurva pada diagram $P-V$.<br>2. Lintasan I berlangsung pada tekanan tinggi $P_1$ terlebih dahulu sehingga area di bawahnya mencakup seluruh persegi panjang atas dan bawah.<br>3. Lintasan II berlangsung pada tekanan rendah $P_2$ sehingga areanya hanya persegi panjang bawah.<br>4. Lintasan III membentuk trapesium di antara keduanya.<br>5. Jadi: $W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ sedangkan $\\Delta U$ identik sama pada ketiganya.<br>6. Jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Jangan menyimpulkan bahwa jika keadaan awal dan akhir sama maka usahanya juga sama. Usaha bergantung mutlak pada rute lintasan yang dilalui."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-usaha-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha yang Dilakukan pada Kompresi Isotermal",
    "difficulty": "sedang",
    "statement": "Sebanyak $2\\text{ mol}$ gas ideal berada pada suhu konstan $T = 300\\text{ K}$. Gas tersebut dikompresi secara kuasistatis dan isotermal sehingga volumenya menyusut dari volume awal $V_1 = 4\\,V_0$ menjadi volume akhir $V_2 = V_0$. Diketahui tetapan gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan $\\ln 2 \\approx 0{,}693$. Besar usaha yang dilakukan oleh lingkungan pada gas tersebut adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1728\\text{ Joule}$",
      "$3457\\text{ Joule}$",
      "$4988\\text{ Joule}$",
      "$6914\\text{ Joule}$",
      "$9977\\text{ Joule}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Usaha luar yang dilakukan oleh gas pada proses isotermal dirumuskan:<br>$$W_{\\text{gas}} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$<br>Karena $V_2 < V_1$, $W_{\\text{gas}}$ bernilai negatif. Usaha yang dilakukan oleh lingkungan PADA gas bernilai positif: $W_{\\text{lingkungan}} = -W_{\\text{gas}} = n R T \\ln\\left(\\frac{V_1}{V_2}\\right)$.",
      "steps": "1. Identifikasi parameter: $n = 2\\text{ mol}$, $T = 300\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio kompresi: $\\frac{V_1}{V_2} = 4 = 2^2 \\implies \\ln 4 = 2 \\ln 2 \\approx 2 \\times 0{,}693 = 1{,}386$.<br>3. Hitung usaha yang dilakukan lingkungan pada gas:<br>$$W_{\\text{lingkungan}} = 2 \\times 8{,}314 \\times 300 \\times 1{,}386$$<br>$$W_{\\text{lingkungan}} = 4988{,}4 \\times 1{,}386 \\approx 6914\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan lupa bahwa rasio volume adalah $4$, sehingga $\\ln 4 = 2 \\ln 2$. Menggunakan $\\ln 2$ saja akan menghasilkan setengahnya ($3457\\text{ Joule}$, opsi B)."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-usaha-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Energi Dalam Campuran Gas Berbeda Derajat Kebebasan",
    "difficulty": "sedang",
    "statement": "Sebuah wadah terisolasi kaku berisi campuran gas ideal yang terdiri atas $1{,}0\\text{ mol}$ gas helium (monoatomik, derajat kebebasan $f_1 = 3$) dan $2{,}0\\text{ mol}$ gas nitrogen (diatomik pada suhu kamar, derajat kebebasan $f_2 = 5$) dalam kesetimbangan termal pada suhu $T = 300\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, energi dalam total ($U_{\\text{total}}$) dari campuran gas tersebut adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7{,}48\\text{ kJ}$",
      "$11{,}22\\text{ kJ}$",
      "$14{,}96\\text{ kJ}$",
      "$16{,}21\\text{ kJ}$",
      "$19{,}95\\text{ kJ}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Energi dalam total sistem campuran gas ideal adalah penjumlahan aljabar dari energi dalam masing-masing komponen gasnya:<br>$$U_{\\text{total}} = U_{\\text{He}} + U_{\\text{N}_2} = \\left(\\frac{f_1}{2} n_1 R T\\right) + \\left(\\frac{f_2}{2} n_2 R T\\right)$$",
      "steps": "1. Hitung kontribusi gas helium ($n_1 = 1{,}0\\text{ mol}$, $f_1 = 3$):<br>$$U_{\\text{He}} = \\frac{3}{2} \\times 1{,}0 \\times R \\times 300 = 450\\,R$$<br>2. Hitung kontribusi gas nitrogen ($n_2 = 2{,}0\\text{ mol}$, $f_2 = 5$):<br>$$U_{\\text{N}_2} = \\frac{5}{2} \\times 2{,}0 \\times R \\times 300 = 1500\\,R$$<br>3. Jumlahkan total energi dalam:<br>$$U_{\\text{total}} = 450\\,R + 1500\\,R = 1950\\,R$$<br>4. Masukkan nilai $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$:<br>$$U_{\\text{total}} = 1950 \\times 8{,}314 = 16.212{,}3\\text{ Joule} \\approx 16{,}21\\text{ kJ}$$<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan menganggap kedua gas memiliki derajat kebebasan yang sama ($f = 3$ untuk semua atau $f = 5$ untuk semua). Gas monoatomik memiliki $f = 3$ sedangkan gas diatomik pada suhu kamar memiliki $f = 5$."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-usaha-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha pada Proses Politropik",
    "difficulty": "sedang",
    "statement": "Suatu gas ideal berekspansi di dalam silinder menurut proses politropik dengan persamaan $P \\times V^2 = C$ (dengan $C$ adalah konstanta). Keadaan awal gas memiliki volume $V_1 = 1{,}0\\text{ m}^3$ dan tekanan $P_1 = 8{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut memuai hingga volumenya menjadi $V_2 = 2{,}0\\text{ m}^3$. Besar usaha luar yang dilakukan oleh gas selama proses politropik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ kJ}$",
      "$400\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Usaha pada proses politropik $P V^n = C$ (untuk $n \\ne 1$) dihitung dari integrasi kalkulus:<br>$$W = \\int_{V_1}^{V_2} P\\,dV = \\int_{V_1}^{V_2} C V^{-n}\\,dV = \\frac{C}{1 - n} \\left[V_2^{1 - n} - V_1^{1 - n}\\right] = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$$",
      "steps": "1. Eksponen politropik $n = 2$.<br>2. Hitung tekanan akhir $P_2$ dari $P_1 V_1^2 = P_2 V_2^2$:<br>$$P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right)^2 = (8{,}0 \\times 10^5\\text{ Pa}) \\times \\left(\\frac{1{,}0}{2{,}0}\\right)^2 = 8{,}0 \\times 10^5 \\times \\frac{1}{4} = 2{,}0 \\times 10^5\\text{ Pa}$$<br>3. Masukkan ke rumus usaha politropik:<br>$$W = \\frac{P_1 V_1 - P_2 V_2}{n - 1} = \\frac{(8{,}0 \\times 10^5 \\times 1{,}0) - (2{,}0 \\times 10^5 \\times 2{,}0)}{2 - 1}$$<br>$$W = \\frac{8{,}0 \\times 10^5 - 4{,}0 \\times 10^5}{1} = 4{,}0 \\times 10^5\\text{ Joule} = 400\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Perhatikan penyebut pada rumus politropik adalah $n - 1$. Karena $n = 2$, penyebutnya bernilai $2 - 1 = 1$. Jangan tertukar urutan antara $P_1 V_1$ dan $P_2 V_2$."
    },
    "subTopicSlug": "usaha-energi-dalam",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill2-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Usaha Total Siklus Tertutup Diagram P-V",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu siklus termodinamika persegi panjang pada diagram $P-V$ bekerja di antara tekanan $P_1 = 1 \\times 10^5\\text{ Pa}$ dan $P_2 = 4 \\times 10^5\\text{ Pa}$, serta volume $V_1 = 2\\text{ m}^3$ dan $V_2 = 5\\text{ m}^3$. Jika arah siklus berputar searah jarum jam, maka usaha total ($W_{\\text{siklus}}$) yang dihasilkan dalam satu siklus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 \\times 10^5\\text{ Joule}$ ($900\\text{ kJ}$)",
      "$3 \\times 10^5\\text{ Joule}$ ($300\\text{ kJ}$)",
      "$12 \\times 10^5\\text{ Joule}$ ($1200\\text{ kJ}$)",
      "$6 \\times 10^5\\text{ Joule}$ ($600\\text{ kJ}$)",
      "$0\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Usaha Bersih Siklus Tertutup:</strong><br>Usaha total yang dihasilkan mesin dalam satu siklus penuh sama dengan <strong>luas area daerah tertutup</strong> pada diagram $P-V$:<br>$$W_{\\text{siklus}} = \\text{Luas Persegi Panjang} = \\Delta P \\cdot \\Delta V$$</div>",
      "steps": "<ol><li>Perubahan tekanan: $\\Delta P = P_2 - P_1 = 4 \\times 10^5 - 1 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$.</li><li>Perubahan volume: $\\Delta V = V_2 - V_1 = 5 - 2 = 3\\text{ m}^3$.</li><li>Usaha total: $W = \\Delta P \\times \\Delta V = (3 \\times 10^5) \\times 3 = 9 \\times 10^5\\text{ Joule} = 900\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Arah Siklus:</strong><br>• Searah jarum jam (CW) $\\implies$ Mesin Kalor ($W > 0$).<br>• Berlawanan jarum jam (CCW) $\\implies$ Mesin Pendingin ($W < 0$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "usaha-energi-dalam"
  },
  {
    "id": "drill2-ter-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-usaha",
    "category": "Energi Dalam pada Satu Siklus Lengkap",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dalam satu siklus termodinamika lengkap (di mana gas kembali tepat ke keadaan termal semula), besar perubahan energi dalam gas ($\\Delta U_{\\text{siklus}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu nol ($0\\text{ Joule}$)",
      "Sama dengan usaha luar yang dilakukan",
      "Sama dengan kalor yang diserap dari reservoir panas",
      "Tergantung pada jenis gas monoatomik atau diatomik",
      "Selalu bernilai positif"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Fungsi Keadaan Energi Dalam ($U$):</strong><br>Energi dalam adalah fungsi keadaan yang hanya bergantung pada suhu saat itu. Dalam satu siklus tertutup, gas kembali ke suhu awal ($T_{\\text{akhir}} = T_{\\text{awal}}$), sehingga:<br>$$\\Delta U_{\\text{siklus}} = 0 \\implies Q_{\\text{total}} = W_{\\text{total}}$$</div>",
      "steps": "<ol><li>Karena keadaan akhir sama dengan keadaan awal: $T_f = T_i$.</li><li>$\\Delta U = \\frac{3}{2} n R (T_f - T_i) = 0$.</li><li>Kalor netto yang diserap seluruhnya diubah menjadi usaha netto: $Q_{\\text{net}} = W_{\\text{net}}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Prinsip Pokok Siklus:</strong> Dalam satu siklus tertutup PENUH, $\\Delta U$ selalu NOL. Usaha dan kalor tidak nol, tapi sama besar ($W_{\\text{net}} = Q_{\\text{net}}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Usaha & Energi Dalam",
    "subTopic": "Usaha & Energi Dalam",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "usaha-energi-dalam"
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
