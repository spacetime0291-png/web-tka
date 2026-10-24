/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Mesin Kalor & Siklus Carnot (fis-termo-hukum-carnot)
 * Slug: mesin-kalor-carnot
 * Indikator: Efisiensi mesin Carnot ideal (eta = 1 - T_L / T_H), siklus 4 tahap, dan mesin pendingin.
 * 
 * Total Butir Soal: 18 (Mudah: 6, Sedang: 12, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-carnot";
  const subTopicSlug = "mesin-kalor-carnot";
  const questions = [
  {
    "id": "fis-termo-hukum-carnot-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Urutan Empat Proses Siklus Carnot",
    "difficulty": "mudah",
    "statement": "Siklus Carnot merupakan siklus termodinamika ideal yang terdiri atas empat tahapan proses reversibel secara berturut-turut, yaitu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Ekspansi isotermal, ekspansi adiabatik, kompresi isotermal, kompresi adiabatik",
      "Ekspansi adiabatik, ekspansi isokhorik, kompresi adiabatik, kompresi isobarik",
      "Ekspansi isobarik, ekspansi isotermal, kompresi isobarik, kompresi isotermal",
      "Kompresi isotermal, kompresi adiabatik, ekspansi isotermal, ekspansi adiabatik",
      "Ekspansi isokhorik, kompresi isobarik, ekspansi adiabatik, kompresi isotermal"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Siklus mesin Carnot bekerja melalui 4 proses kuasistatis yang reversibel secara siklis:<br>1. Ekspansi isotermal (penyerapan kalor $Q_H$ pada suhu konstan $T_H$)<br>2. Ekspansi adiabatik (penurunan suhu dari $T_H$ ke $T_L$ tanpa perpindahan kalor)<br>3. Kompresi isotermal (pembuangan kalor $Q_L$ pada suhu konstan $T_L$)<br>4. Kompresi adiabatik (kenaikan suhu dari $T_L$ kembali ke $T_H$ tanpa perpindahan kalor).",
      "steps": "1. Tinjau siklus Carnot searah jarum jam (mesin kalor):<br>- Tahap 1: Gas memuai secara isotermal pada suhu tinggi $T_H$.<br>- Tahap 2: Gas memuai secara adiabatik sehingga suhunya turun menjadi $T_L$.<br>- Tahap 3: Gas dimampatkan secara isotermal pada suhu rendah $T_L$.<br>- Tahap 4: Gas dimampatkan secara adiabatik sehingga suhunya naik kembali ke $T_H$.<br>2. Jadi urutan yang benar adalah ekspansi isotermal, ekspansi adiabatik, kompresi isotermal, kompresi adiabatik (pilihan A).",
      "pitfalls": "Sering tertukar antara urutan pemuaian (ekspansi) dan pemampatan (kompresi), atau menyertakan proses isobarik/isokhorik yang sesungguhnya bukan bagian dari siklus Carnot ideal."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-carnot-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Efisiensi Mesin Carnot dari Suhu Reservoir",
    "difficulty": "mudah",
    "statement": "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $600\\text{ K}$ dan reservoir suhu rendah $450\\text{ K}$. Efisiensi termal mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\%$",
      "$20\\%$",
      "$25\\%$",
      "$33{,}3\\%$",
      "$75\\%$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Efisiensi termal maksimum dari suatu mesin Carnot ideal dirumuskan sebagai:<br>$$\\eta = 1 - \\frac{T_L}{T_H} = \\frac{T_H - T_L}{T_H}$$<br>dengan $T_H$ dan $T_L$ berturut-turut adalah suhu mutlak reservoir tinggi dan reservoir rendah dalam satuan Kelvin.",
      "steps": "1. Identifikasi data yang diketahui:<br>$$T_H = 600\\text{ K}$$<br>$$T_L = 450\\text{ K}$$<br>2. Masukkan ke dalam rumus efisiensi Carnot:<br>$$\\eta = 1 - \\frac{450\\text{ K}}{600\\text{ K}} = 1 - 0{,}75 = 0{,}25$$<br>3. Konversikan ke bentuk persentase:<br>$$\\eta = 0{,}25 \\times 100\\% = 25\\%$$<br>4. Jadi efisiensi mesin adalah $25\\%$ (pilihan C).",
      "pitfalls": "Jangan menggunakan rasio $\\frac{T_L}{T_H} = 0{,}75$ sebagai nilai efisiensi; nilai tersebut adalah rasio kalor yang dibuang, sehingga efisiensi adalah selisihnya dari satu ($1 - 0{,}75 = 0{,}25$)."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-carnot-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Perhitungan Usaha Mekanik Mesin Carnot",
    "difficulty": "mudah",
    "statement": "Suatu mesin Carnot menyerap kalor sebesar $4.000\\text{ J}$ dari reservoir bersuhu $800\\text{ K}$ dan melepaskan sebagian kalor ke reservoir bersuhu $600\\text{ K}$. Besar usaha mekanik yang dihasilkan oleh mesin dalam satu siklus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ J}$",
      "$1.000\\text{ J}$",
      "$1.500\\text{ J}$",
      "$2.000\\text{ J}$",
      "$3.000\\text{ J}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan usaha ($W$), kalor yang diserap ($Q_H$), dan efisiensi Carnot ($\\eta$) adalah:<br>$$W = \\eta \\times Q_H = \\left(1 - \\frac{T_L}{T_H}\\right) Q_H$$",
      "steps": "1. Hitung efisiensi mesin Carnot:<br>$$\\eta = 1 - \\frac{T_L}{T_H} = 1 - \\frac{600\\text{ K}}{800\\text{ K}} = 1 - \\frac{3}{4} = \\frac{1}{4} = 0{,}25$$<br>2. Hitung usaha mekanik $W$ yang dihasilkan:<br>$$W = \\eta \\times Q_H = 0{,}25 \\times 4.000\\text{ J} = 1.000\\text{ J}$$<br>3. Jadi usaha mekanik yang dihasilkan adalah $1.000\\text{ J}$ (pilihan B).",
      "pitfalls": "Siswa terkadang salah menghitung $Q_L = 3.000\\text{ J}$ dan mengira nilai tersebut sebagai usaha yang dihasilkan, padahal usaha adalah selisih $W = Q_H - Q_L$."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-carnot-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Menentukan Suhu Reservoir Rendah",
    "difficulty": "mudah",
    "statement": "Sebuah mesin Carnot memiliki efisiensi termal sebesar $40\\%$. Jika suhu reservoir panas mesin tersebut adalah $500\\text{ K}$, suhu reservoir dinginnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ K}$",
      "$200\\text{ K}$",
      "$250\\text{ K}$",
      "$300\\text{ K}$",
      "$350\\text{ K}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dari rumus efisiensi Carnot $\\eta = 1 - \\frac{T_L}{T_H}$, suhu reservoir dingin dapat ditentukan melalui:<br>$$\\frac{T_L}{T_H} = 1 - \\eta \\implies T_L = (1 - \\eta) T_H$$",
      "steps": "1. Diketahui efisiensi $\\eta = 40\\% = 0{,}40$ dan $T_H = 500\\text{ K}$.<br>2. Gunakan persamaan hubungan suhu:<br>$$\\frac{T_L}{500} = 1 - 0{,}40 = 0{,}60$$<br>3. Hitung $T_L$:<br>$$T_L = 0{,}60 \\times 500\\text{ K} = 300\\text{ K}$$<br>4. Jadi suhu reservoir dingin mesin adalah $300\\text{ K}$ (pilihan D).",
      "pitfalls": "Hati-hati jangan langsung mengalikan $\\eta \\times T_H = 0{,}4 \\times 500 = 200\\text{ K}$; nilai $200\\text{ K}$ tersebut adalah selisih suhu $\\Delta T = T_H - T_L$, bukan suhu reservoir dingin $T_L$."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-carnot-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Kalor yang Dilepaskan ke Reservoir Dingin",
    "difficulty": "mudah",
    "statement": "Sebuah mesin Carnot bekerja dengan efisiensi $30\\%$. Jika mesin tersebut menyerap kalor sebesar $6.000\\text{ Joule}$ dari reservoir bersuhu tinggi, kalor yang dibuang oleh mesin ke reservoir dingin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.800\\text{ Joule}$",
      "$2.400\\text{ Joule}$",
      "$3.600\\text{ Joule}$",
      "$4.200\\text{ Joule}$",
      "$5.400\\text{ Joule}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan prinsip kekekalan energi pada siklus termal:<br>$$Q_H = W + Q_L \\implies Q_L = Q_H - W$$<br>Karena usaha yang dihasilkan adalah $W = \\eta Q_H$, maka kalor yang dibuang adalah:<br>$$Q_L = (1 - \\eta) Q_H$$",
      "steps": "1. Diketahui $\\eta = 30\\% = 0{,}30$ dan $Q_H = 6.000\\text{ J}$.<br>2. Hitung kalor yang diubah menjadi usaha:<br>$$W = \\eta \\times Q_H = 0{,}30 \\times 6.000\\text{ J} = 1.800\\text{ J}$$<br>3. Hitung kalor yang dilepaskan ke reservoir dingin:<br>$$Q_L = Q_H - W = 6.000\\text{ J} - 1.800\\text{ J} = 4.200\\text{ J}$$<br>4. Jadi kalor yang dibuang adalah $4.200\\text{ Joule}$ (pilihan D).",
      "pitfalls": "Siswa sering terkecoh menjawab $1.800\\text{ Joule}$, yang merupakan besar usaha yang dilakukan mesin ($W$), bukan kalor yang dibuang ($Q_L$)."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-termo-hukum-carnot-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Kenaikan Suhu Reservoir Tinggi untuk Menaikkan Efisiensi",
    "difficulty": "sedang",
    "statement": "Suatu mesin Carnot mula-mula memiliki efisiensi sebesar $25\\%$ saat beroperasi dengan reservoir suhu rendah $300\\text{ K}$. Agar efisiensi mesin tersebut meningkat menjadi $50\\%$ sementara suhu reservoir rendah tetap dipertahankan pada $300\\text{ K}$, suhu reservoir panas harus dinaikkan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$450\\text{ K}$",
      "$500\\text{ K}$",
      "$600\\text{ K}$",
      "$750\\text{ K}$",
      "$800\\text{ K}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Efisiensi mesin Carnot dirumuskan sebagai $\\eta = 1 - \\frac{T_L}{T_H}$, yang dapat diubah menjadi bentuk $T_H = \\frac{T_L}{1 - \\eta}$.",
      "steps": "1. Keadaan awal: $\\eta_1 = 25\\% = 0{,}25$ dan $T_L = 300\\text{ K}$.<br>Hitung suhu reservoir panas awal ($T_{H1}$):<br>$$0{,}25 = 1 - \\frac{300\\text{ K}}{T_{H1}} \\implies \\frac{300\\text{ K}}{T_{H1}} = 0{,}75 \\implies T_{H1} = \\frac{300}{0{,}75} = 400\\text{ K}$$<br>2. Keadaan akhir yang diinginkan: $\\eta_2 = 50\\% = 0{,}50$ dengan $T_L$ tetap $300\\text{ K}$.<br>Hitung suhu reservoir panas baru ($T_{H2}$):<br>$$0{,}50 = 1 - \\frac{300\\text{ K}}{T_{H2}} \\implies \\frac{300\\text{ K}}{T_{H2}} = 0{,}50 \\implies T_{H2} = \\frac{300}{0{,}50} = 600\\text{ K}$$<br>3. Jadi suhu reservoir panas harus dinaikkan menjadi $600\\text{ K}$ (pilihan C).",
      "pitfalls": "Hati-hati terhadap redaksi soal: apakah ditanya 'dinaikkan menjadi' ($T_{H2} = 600\\text{ K}$) atau 'dinaikkan sebesar' ($\\Delta T_H = 600 - 400 = 200\\text{ K}$)."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-carnot-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Sensitivitas Efisiensi terhadap Perubahan Suhu Reservoir",
    "difficulty": "sedang",
    "statement": "Sebuah mesin Carnot beroperasi di antara suhu $T_H = 600\\text{ K}$ dan $T_L = 300\\text{ K}$. Terdapat dua opsi untuk meningkatkan efisiensi termalnya:<br>(1) Menaikkan $T_H$ sebesar $100\\text{ K}$ menjadi $700\\text{ K}$ (dengan $T_L$ tetap)<br>(2) Menurunkan $T_L$ sebesar $100\\text{ K}$ menjadi $200\\text{ K}$ (dengan $T_H$ tetap)<br>Perbandingan kenaikan efisiensi antara opsi (1) dan opsi (2) ($\\Delta \\eta_1 : \\Delta \\eta_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 2$",
      "$3 : 7$",
      "$7 : 3$",
      "$1 : 1$",
      "$2 : 3$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Efisiensi Carnot awal adalah $\\eta_0 = 1 - \\frac{T_L}{T_H} = 1 - \\frac{300}{600} = \\frac{1}{2} = 50\\%$. Kenaikan efisiensi dihitung dengan $\\Delta \\eta = \\eta_{\\text{baru}} - \\eta_0$.",
      "steps": "1. Hitung efisiensi opsi (1) ($T_H' = 700\\text{ K}$, $T_L = 300\\text{ K}$):<br>$$\\eta_1 = 1 - \\frac{300}{700} = \\frac{400}{700} = \\frac{4}{7}$$<br>Kenaikan efisiensi opsi (1):<br>$$\\Delta \\eta_1 = \\frac{4}{7} - \\frac{1}{2} = \\frac{8 - 7}{14} = \\frac{1}{14}$$<br>2. Hitung efisiensi opsi (2) ($T_H = 600\\text{ K}$, $T_L' = 200\\text{ K}$):<br>$$\\eta_2 = 1 - \\frac{200}{600} = \\frac{400}{600} = \\frac{2}{3}$$<br>Kenaikan efisiensi opsi (2):<br>$$\\Delta \\eta_2 = \\frac{2}{3} - \\frac{1}{2} = \\frac{4 - 3}{6} = \\frac{1}{6}$$<br>3. Bandingkan kenaikan efisiensi:<br>$$\\frac{\\Delta \\eta_1}{\\Delta \\eta_2} = \\frac{1/14}{1/6} = \\frac{6}{14} = \\frac{3}{7}$$<br>4. Jadi perbandingan kenaikan efisiensinya adalah $3 : 7$ (pilihan B).",
      "pitfalls": "Sering mengira bahwa menaikkan suhu reservoir tinggi dan menurunkan suhu reservoir rendah dengan $\\Delta T$ yang sama akan memberikan kenaikan efisiensi yang identik ($1:1$). Faktanya, menurunkan $T_L$ selalu lebih efektif karena $T_L$ berada pada posisi pembilang dengan pembagi $T_H$ yang tetap."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-carnot-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Performansi dan Daya Mesin Pendingin Carnot",
    "difficulty": "sedang",
    "statement": "Sebuah lemari es Carnot beroperasi di antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Setiap menitnya, lemari es tersebut harus membuang kalor dari dalam ruang pendingin sebesar $54.000\\text{ J}$. Daya listrik minimum yang dibutuhkan untuk mengoperasikan lemari es tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$300\\text{ Watt}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Koefisien performansi (Coefficient of Performance / $COP$) mesin pendingin Carnot dirumuskan sebagai:<br>$$COP = \\frac{T_L}{T_H - T_L} = \\frac{Q_L}{W}$$<br>dan daya mekanik/listrik adalah laju usaha per satuan waktu: $P = \\frac{W}{t}$.",
      "steps": "1. Konversikan suhu ke Kelvin mutlak:<br>$$T_L = -3^\\circ\\text{C} = -3 + 273 = 270\\text{ K}$$<br>$$T_H = 27^\\circ\\text{C} = 27 + 273 = 300\\text{ K}$$<br>2. Hitung nilai $COP$ lemari es:<br>$$COP = \\frac{T_L}{T_H - T_L} = \\frac{270\\text{ K}}{300\\text{ K} - 270\\text{ K}} = \\frac{270}{30} = 9$$<br>3. Hitung usaha luar ($W$) yang diperlukan untuk membuang kalor $Q_L = 54.000\\text{ J}$:<br>$$W = \\frac{Q_L}{COP} = \\frac{54.000\\text{ J}}{9} = 6.000\\text{ J}$$<br>4. Waktu operasi $t = 1\\text{ menit} = 60\\text{ detik}$. Hitung daya listrik:<br>$$P = \\frac{W}{t} = \\frac{6.000\\text{ J}}{60\\text{ s}} = 100\\text{ Watt}$$<br>5. Jadi daya listrik minimum adalah $100\\text{ Watt}$ (pilihan B).",
      "pitfalls": "Lupa mengubah satuan waktu 1 menit menjadi 60 detik saat menghitung daya listrik ($P = W/t$)."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-carnot-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Dua Mesin Carnot Tersusun Seri dengan Usaha Sama",
    "difficulty": "sedang",
    "statement": "Dua mesin Carnot bekerja secara seri. Mesin pertama menyerap kalor dari reservoir bersuhu $T_1 = 900\\text{ K}$ dan membuang kalor ke reservoir perantara bersuhu $T$. Mesin kedua menyerap seluruh kalor yang dibuang mesin pertama pada suhu $T$ dan membuang kalornya ke reservoir bersuhu $T_2 = 400\\text{ K}$. Jika kedua mesin menghasilkan usaha mekanik yang sama besar ($W_1 = W_2$), besar suhu perantara $T$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ K}$",
      "$650\\text{ K}$",
      "$700\\text{ K}$",
      "$720\\text{ K}$",
      "$750\\text{ K}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk dua mesin Carnot yang tersusun secara seri di mana kalor buang mesin 1 ($Q$) menjadi kalor masuk mesin 2, relasi kalor dan suhu adalah $\\frac{Q_1}{T_1} = \\frac{Q}{T} = \\frac{Q_2}{T_2}$. Usaha mesin 1 adalah $W_1 = Q_1 - Q$ dan mesin 2 adalah $W_2 = Q - Q_2$.",
      "steps": "1. Nyatakan usaha masing-masing mesin dalam konstanta proporsionalitas $k = \\frac{Q_1}{T_1} = \\frac{Q}{T} = \\frac{Q_2}{T_2}$:<br>$$W_1 = Q_1 - Q = k(T_1 - T)$$<br>$$W_2 = Q - Q_2 = k(T - T_2)$$<br>2. Karena $W_1 = W_2$, maka:<br>$$k(T_1 - T) = k(T - T_2) \\implies T_1 - T = T - T_2$$<br>$$2T = T_1 + T_2 \\implies T = \\frac{T_1 + T_2}{2}$$<br>3. Masukkan nilai $T_1 = 900\\text{ K}$ dan $T_2 = 400\\text{ K}$:<br>$$T = \\frac{900\\text{ K} + 400\\text{ K}}{2} = 650\\text{ K}$$<br>4. Jadi suhu reservoir perantara adalah $650\\text{ K}$ (pilihan B).",
      "pitfalls": "Sering tertukar antara syarat usaha sama ($T = \\frac{T_1 + T_2}{2}$) dengan syarat efisiensi sama ($T = \\sqrt{T_1 T_2} = \\sqrt{900 \\times 400} = 600\\text{ K}$). Soal menanyakan kondisi usaha sama besar, bukan efisiensi sama."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-termo-hukum-carnot-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Performansi Pompa Kalor Carnot",
    "difficulty": "sedang",
    "statement": "Suatu pompa kalor Carnot (heat pump) digunakan untuk menghangatkan interior rumah pada suhu tetap $27^\\circ\\text{C}$ dengan menyerap kalor dari lingkungan luar bersuhu $-3^\\circ\\text{C}$. Jika motor penggerak pompa kalor mengonsumsi daya listrik sebesar $1{,}5\\text{ kW}$, laju kalor pemanasan yang dialirkan ke dalam rumah per detik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5\\text{ kW}$",
      "$10\\text{ kW}$",
      "$13{,}5\\text{ kW}$",
      "$15\\text{ kW}$",
      "$16{,}5\\text{ kW}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Koefisien performansi pompa kalor ($COP_{\\text{HP}}$) mengukur perbandingan kalor yang dialirkan ke reservoir panas ($Q_H$) terhadap usaha luar yang diberikan ($W$):<br>$$COP_{\\text{HP}} = \\frac{Q_H}{W} = \\frac{T_H}{T_H - T_L} = 1 + COP_{\\text{refrigerator}}$$",
      "steps": "1. Konversikan suhu lingkungan dan interior ke Kelvin mutlak:<br>$$T_H = 27^\\circ\\text{C} = 27 + 273 = 300\\text{ K}$$<br>$$T_L = -3^\\circ\\text{C} = -3 + 273 = 270\\text{ K}$$<br>2. Hitung $COP_{\\text{HP}}$ pompa kalor:<br>$$COP_{\\text{HP}} = \\frac{T_H}{T_H - T_L} = \\frac{300\\text{ K}}{300\\text{ K} - 270\\text{ K}} = \\frac{300}{30} = 10$$<br>3. Hitung laju kalor yang dipasok ke ruangan ($P_H = \\frac{Q_H}{t}$):<br>$$P_H = COP_{\\text{HP}} \\times P_{\\text{listrik}} = 10 \\times 1{,}5\\text{ kW} = 15\\text{ kW}$$<br>4. Jadi laju perpindahan kalor pemanasan yang masuk ke dalam ruangan adalah $15\\text{ kW}$ (pilihan D).",
      "pitfalls": "Menggunakan rumus $COP$ mesin pendingin biasa $\\frac{T_L}{T_H - T_L} = 9$ sehingga menghasilkan daya kalor $13{,}5\\text{ kW}$. Untuk pompa kalor, target output adalah kalor yang dihantarkan ke ruangan panas ($Q_H$), sehingga $COP_{\\text{HP}} = \\frac{T_H}{T_H - T_L} = 10$."
    },
    "subTopicSlug": "mesin-kalor-carnot",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Efisiensi Mesin Kalor Carnot",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi $T_1 = 500\\text{ K}$ dan reservoir suhu rendah $T_2 = 300\\text{ K}$. Efisiensi termal maksimum ($\\eta$) dari mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\%$",
      "$60\\%$",
      "$20\\%$",
      "$30\\%$",
      "$50\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi Mesin Kalor Carnot:</strong><br>$$\\eta = \\left( 1 - \\frac{T_2}{T_1} \\right) \\times 100\\% = \\left( \\frac{T_1 - T_2}{T_1} \\right) \\times 100\\%$$<br>dengan $T_1$ reservoir suhu tinggi dan $T_2$ reservoir suhu rendah (wajib Kelvin!).</div>",
      "steps": "<ol><li>Hitung selisih suhu: $T_1 - T_2 = 500 - 300 = 200\\text{ K}$.</li><li>Hitung efisiensi: $\\eta = \\frac{200}{500} \\times 100\\% = \\frac{2}{5} \\times 100\\% = 40\\%$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Efisiensi Carnot adalah \"selisih dibagi suhu tinggi\": $\\eta = \\frac{T_{\\text{tinggi}} - T_{\\text{rendah}}}{T_{\\text{tinggi}}}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "sedang-fis-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Efisiensi Mesin Termal Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir suhu tinggi $527^\\circ\\text{C}$ dan reservoir suhu rendah $127^\\circ\\text{C}$. Jika dalam setiap siklus mesin tersebut menyerap kalor sebesar $4000\\text{ Joule}$ dari reservoir panas, besar usaha mekanik yang dihasilkan mesin serta kalor yang dibuang ke reservoir dingin berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ J}$ dan $2000\\text{ J}$",
      "$2400\\text{ J}$ dan $1600\\text{ J}$",
      "$1500\\text{ J}$ dan $2500\\text{ J}$",
      "$3000\\text{ J}$ dan $1000\\text{ J}$",
      "$1600\\text{ J}$ dan $2400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Mesin Kalor Carnot & Suhu Mutlak Kelvin:</strong><br>\n          • Suhu WAJIB dalam skala Kelvin: $T(\\text{K}) = T(^\\circ\\text{C}) + 273$<br>\n          • Efisiensi: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$<br>\n          • Hukum Kekekalan Energi: $W = Q_H - Q_C \\iff Q_C = Q_H - W$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Konversi Suhu ke Kelvin:</strong><br>\n            $T_H = 527 + 273 = 800\\text{ K}$<br>\n            $T_C = 127 + 273 = 400\\text{ K}$\n          </li>\n          <li><strong>Hitung Efisiensi Siklus $(\\eta)$:</strong><br>\n            $$\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$$\n          </li>\n          <li><strong>Hitung Usaha $(W)$ dan Kalor Terbuang $(Q_C)$:</strong><br>\n            $$W = \\eta \\cdot Q_H = 0{,}5 \\times 4000\\text{ J} = 2000\\text{ Joule}$$\n            $$Q_C = Q_H - W = 4000 - 2000 = 2000\\text{ Joule}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Suhu Celsius:</strong><br>\n          Siswa yang lupa mengonversi ke Kelvin akan menghitung $\\eta = 1 - \\frac{127}{527} \\approx 76\\%$, yang menghasilkan nilai usaha yang keliru. Suhu termodinamika selalu dihitung dalam Kelvin!\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Usaha dan Kalor Dibuang Mesin Kalor",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin kalor memiliki efisiensi termal $30\\%$. Dalam setiap siklusnya, mesin tersebut menyerap kalor sebesar $Q_1 = 2000\\text{ Joule}$ dari reservoir panas. Besar usaha yang dihasilkan ($W$) dan kalor yang dibuang ke reservoir dingin ($Q_2$) dalam satu siklus berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$W = 600\\text{ J}$ dan $Q_2 = 1400\\text{ J}$",
      "$W = 1400\\text{ J}$ dan $Q_2 = 600\\text{ J}$",
      "$W = 600\\text{ J}$ dan $Q_2 = 2000\\text{ J}$",
      "$W = 300\\text{ J}$ dan $Q_2 = 1700\\text{ J}$",
      "$W = 2000\\text{ J}$ dan $Q_2 = 1400\\text{ J}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Usaha dan Kalor Mesin:</strong><br>• $W = \\eta \\cdot Q_1$<br>• Menurut kekekalan energi: $Q_1 = W + Q_2 \\implies Q_2 = Q_1 - W$</div>",
      "steps": "<ol><li>Hitung usaha yang dihasilkan: $W = 30\\% \\times 2000\\text{ J} = 0{,}3 \\times 2000 = 600\\text{ Joule}$.</li><li>Hitung kalor yang dibuang: $Q_2 = 2000 - 600 = 1400\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Kekekalan Energi Mesin:</strong> Kalor yang masuk ($Q_1$) selalu terbagi menjadi dua: yang menjadi kerja bermanfaat ($W$) dan yang terbuang sia-sia ($Q_2$). $Q_1 = W + Q_2$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Jebakan Satuan Suhu Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu mesin kalor Carnot bekerja di antara reservoir panas bersuhu $327^\\circ\\text{C}$ dan reservoir dingin bersuhu $27^\\circ\\text{C}$. Efisiensi mesin Carnot tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\%$",
      "$91{,}7\\%$",
      "$40\\%$",
      "$60\\%$",
      "$25\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Peringatan Mutlak Suhu Carnot:</strong><br>Suhu pada rumus efisiensi Carnot <strong>HARUS</strong> dalam skala Kelvin mutlak, tidak boleh menggunakan derajat Celsius!<br>$$T\\text{ (K)} = T\\text{ (}^\\circ\\text{C)} + 273$$</div>",
      "steps": "<ol><li>Ubah ke Kelvin:<br>• $T_1 = 327 + 273 = 600\\text{ K}$<br>• $T_2 = 27 + 273 = 300\\text{ K}$</li><li>Hitung efisiensi Carnot:<br>$$\\eta = \\frac{T_1 - T_2}{T_1} \\times 100\\% = \\frac{600 - 300}{600} \\times 100\\% = \\frac{300}{600} \\times 100\\% = 50\\%$$</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Paling Populer di Soal Ujian:</strong> Menghitung dengan Celsius: $\\eta = \\frac{327 - 27}{327} \\approx 91{,}7\\%$ (SALAH BESAR!). Selalu tambahkan 273 terlebih dahulu!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill-ter-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Performansi Mesin Pendingin (Kulkas)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah lemari es (kulkas) bekerja dengan siklus Carnot terbalik antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Koefisien performansi (daya guna $C_P$) lemari es tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9$",
      "$10$",
      "$8$",
      "$0{,}9$",
      "$5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin Carnot ($C_P$):</strong><br>$$C_P = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu lingkungan panas (dalam Kelvin).</div>",
      "steps": "<ol><li>Konversi ke Kelvin:<br>• $T_2 = -3 + 273 = 270\\text{ K}$ (ruang pendingin)<br>• $T_1 = 27 + 273 = 300\\text{ K}$ (lingkungan)</li><li>Selisih suhu: $T_1 - T_2 = 300 - 270 = 30\\text{ K}$.</li><li>Hitung $C_P$: $C_P = \\frac{270}{30} = 9$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Formula Pendingin:</strong> Pada mesin pendingin yang diinginkan adalah pendinginan ($T_2$), sehingga pembilangnya adalah $T_2$, bukan $T_1$ ($C_P = \\frac{T_2}{T_1 - T_2}$). Nilai $C_P$ biasanya lebih besar dari 1.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Menghitung Kalor Masuk Mesin Carnot",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $T_1 = 800\\text{ K}$ dan reservoir suhu rendah $T_2 = 400\\text{ K}$. Jika mesin tersebut menghasilkan usaha mekanik sebesar $W = 1000\\text{ Joule}$ setiap siklusnya, kalor yang diserap dari reservoir panas ($Q_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$4000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Efisiensi dan Usaha Carnot:</strong><br>$$\\eta = 1 - \\frac{T_2}{T_1} \\quad \\text{dan} \\quad \\eta = \\frac{W}{Q_1} \\implies Q_1 = \\frac{W}{\\eta}$$</div>",
      "steps": "<ol><li>Hitung efisiensi mesin: $\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$.</li><li>Hitung kalor yang diserap: $Q_1 = \\frac{W}{\\eta} = \\frac{1000\\text{ J}}{0{,}5} = 2000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Alur Terbalik:</strong> Jika diketahui usaha dan suhu, hitung efisiensi $\\eta$ terlebih dahulu, lalu cari $Q_1 = W / \\eta$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Optimalisasi Efisiensi Mesin Termal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Berdasarkan formulasi efisiensi mesin Carnot $\\eta = 1 - \\frac{T_2}{T_1}$, tindakan yang paling efektif untuk menaikkan efisiensi termal mesin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Menaikkan suhu reservoir panas ($T_1$) atau menurunkan suhu reservoir dingin ($T_2$)",
      "Menambah volume gas di dalam silinder mesin sebanyak mungkin",
      "Memperbesar luas penampang piston penghisap mesin",
      "Mengganti gas monoatomik menjadi gas poliatomik",
      "Menjalankan siklus dengan frekuensi putaran yang lebih cepat"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Prinsip Batas Efisiensi Carnot:</strong><br>Efisiensi mesin kalor ideal <strong>hanya bergantung pada rasio suhu mutlak kedua reservoir</strong> ($T_2/T_1$). Efisiensi meningkat jika selisih $(T_1 - T_2)$ diperbesar, yaitu dengan menaikkan $T_1$ setinggi mungkin dan/atau mendinginkan $T_2$ serendah mungkin.</div>",
      "steps": "<ol><li>Bentuk rumus: $\\eta = 1 - \\frac{T_2}{T_1}$.</li><li>Agar $\\eta$ mendekati $100\\%$, suku $\\frac{T_2}{T_1}$ harus sekecil mungkin.</li><li>Hal ini dicapai dengan memperbesar $T_1$ dan memperkecil $T_2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Teorema Carnot:</strong> Tidak ada mesin yang dapat mencapai efisiensi $100\\%$ kecuali jika reservoir dingin bersuhu nol mutlak ($T_2 = 0\\text{ K}$), yang secara termodinamika mustahil dicapai (Hukum III Termodinamika).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
  },
  {
    "id": "drill2-ter-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-hukum-carnot",
    "category": "Koefisien Daya Guna Mesin Pendingin AC",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah mesin pengondisi udara (AC) mempertahankan suhu kamar tidur pada $T_2 = 20^\\circ\\text{C}$ ($293\\text{ K}$) dengan membuang panas ke lingkungan luar yang bersuhu $T_1 = 40^\\circ\\text{C}$ ($313\\text{ K}$). Jika mesin AC bekerja berdasarkan siklus pendingin Carnot, maka koefisien performansi ($C_P$) mesin tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14{,}65$",
      "$7{,}32$",
      "$10{,}50$",
      "$1{,}50$",
      "$29{,}3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Koefisien Performansi Mesin Pendingin:</strong><br>$$C_P = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu ruang panas dalam Kelvin.</div>",
      "steps": "<ol><li>Suhu kamar dingin: $T_2 = 20 + 273 = 293\\text{ K}$.</li><li>Suhu luar panas: $T_1 = 40 + 273 = 313\\text{ K}$.</li><li>Selisih suhu: $T_1 - T_2 = 313 - 293 = 20\\text{ K}$.</li><li>Koefisien performansi: $C_P = \\frac{293}{20} = 14{,}65$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Semakin Kecil Selisih Suhu, Semakin Tinggi $C_P$:</strong> Semakin kecil beda suhu ruangan dan lingkungan luar, AC bekerja jauh lebih efisien dan hemat daya listrik.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Mesin Kalor & Siklus Carnot",
    "subTopic": "Mesin Kalor & Siklus Carnot",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-hukum",
    "subTopicSlug": "mesin-kalor-carnot"
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
