/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Dinamis (fis-flu-dinamis)
 * Sub-Bab: Debit & Persamaan Kontinuitas (fis-flu-dinamis-kontinuitas)
 * Slug: debit-persamaan-kontinuitas
 * Indikator: Laju aliran debit (Q = A * v) dan kekekalan massa fluida inkompresibel (A_1 * v_1 = A_2 * v_2).
 * 
 * Total Butir Soal: 13 (Mudah: 6, Sedang: 6, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-dinamis-kontinuitas";
  const subTopicSlug = "debit-persamaan-kontinuitas";
  const questions = [
  {
    "id": "fis-flu-dinamis-kontinuitas-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "mudah",
    "statement": "Sebuah selang air digunakan untuk mengisi bak mandi bervolume $V = 120\\text{ liter}$ hingga penuh dalam selang waktu $t = 2\\text{ menit}$. Besar debit aliran air dari selang tersebut dalam satuan standar internasional ($\\text{m}^3\\text{/s}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 \\times 10^{-4}\\text{ m}^3\\text{/s}$",
      "$5 \\times 10^{-4}\\text{ m}^3\\text{/s}$",
      "$1 \\times 10^{-3}\\text{ m}^3\\text{/s}$",
      "$2 \\times 10^{-3}\\text{ m}^3\\text{/s}$",
      "$6 \\times 10^{-2}\\text{ m}^3\\text{/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Debit aliran ($Q$) didefinisikan sebagai laju volume fluida yang mengalir melalui suatu penampang per satuan waktu:<br>$$Q = \\frac{V}{t}$$Satuan SI untuk volume adalah meter kubik ($1\\text{ liter} = 10^{-3}\\text{ m}^3$) dan waktu adalah sekon ($1\\text{ menit} = 60\\text{ s}$).",
      "steps": "1. Konversikan besaran ke satuan SI:<br>• Volume: $V = 120\\text{ liter} = 120 \\times 10^{-3}\\text{ m}^3 = 0{,}12\\text{ m}^3$<br>• Waktu: $t = 2\\text{ menit} = 120\\text{ sekon}$<br>2. Hitung debit aliran:<br>$$Q = \\frac{0{,}12\\text{ m}^3}{120\\text{ s}} = 10^{-3}\\text{ m}^3\\text{/s}$$",
      "pitfalls": "Lupa mengonversi menit ke sekon sehingga membagi $120$ liter langsung dengan 2 menit yang menghasilkan $60\\text{ liter/menit}$ tanpa penyesuaian ke $\\text{m}^3\\text{/s}$."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Debit aliran ($Q$) didefinisikan sebagai laju volume fluida yang mengalir melalui suatu penampang per satuan waktu: $$Q = \\frac{V}{t}$$Satuan SI untuk volume adalah meter kubik ($1\\text{ liter} = 10^{-3}\\text{ m}^3$) dan waktu adalah sekon ($1\\text{ menit} = 60\\text{ s}$)."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "mudah",
    "statement": "Air mengalir melalui pipa berpenampang lingkaran dengan luas $A = 5\\text{ cm}^2$. Jika kelajuan rata-rata aliran air di dalam pipa tersebut adalah $v = 4\\text{ m/s}$, debit aliran air dalam satuan $\\text{liter/sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0\\text{ liter/s}$",
      "$2{,}0\\text{ liter/s}$",
      "$4{,}0\\text{ liter/s}$",
      "$10\\text{ liter/s}$",
      "$20\\text{ liter/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Debit aliran fluida juga dapat dirumuskan dari perkalian antara luas penampang saluran ($A$) dengan kelajuan linier aliran ($v$):<br>$$Q = A \\cdot v$$",
      "steps": "1. Konversikan luas penampang ke meter persegi:<br>$$A = 5\\text{ cm}^2 = 5 \\times 10^{-4}\\text{ m}^2$$<br>2. Hitung debit dalam satuan $\\text{m}^3\\text{/s}$:<br>$$Q = A \\cdot v = (5 \\times 10^{-4}\\text{ m}^2) \\times 4\\text{ m/s} = 20 \\times 10^{-4}\\text{ m}^3\\text{/s} = 2 \\times 10^{-3}\\text{ m}^3\\text{/s}$$<br>3. Konversikan ke satuan liter/sekon ($1\\text{ m}^3 = 1000\\text{ liter}$):<br>$$Q = 2 \\times 10^{-3} \\times 1000\\text{ liter/s} = 2{,}0\\text{ liter/s}$$",
      "pitfalls": "Kesalahan konversi $5\\text{ cm}^2$ menjadi $5 \\times 10^{-2}\\text{ m}^2$ (lupa menguadratkan faktor konversi centimeter ke meter)."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Debit aliran fluida juga dapat dirumuskan dari perkalian antara luas penampang saluran ($A$) dengan kelajuan linier aliran ($v$): $$Q = A \\cdot v$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "mudah",
    "statement": "Minyak mengalir secara kontinu melalui pipa mendatar yang luas penampangnya mengecil. Di penampang besar dengan luas $A_1 = 20\\text{ cm}^2$, minyak mengalir dengan kelajuan $v_1 = 3\\text{ m/s}$. Kelajuan aliran minyak pada bagian penampang pipa sempit yang luasnya $A_2 = 5\\text{ cm}^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}75\\text{ m/s}$",
      "$6{,}0\\text{ m/s}$",
      "$9{,}0\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$15\\text{ m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persamaan Kontinuitas untuk fluida inkompresibel menyatakan kekekalan debit aliran pada setiap titik sepanjang pipa alir:<br>$$Q_1 = Q_2 \\iff A_1 \\cdot v_1 = A_2 \\cdot v_2$$Sehingga kelajuan fluida berbanding terbalik dengan luas penampang:<br>$$v_2 = v_1 \\cdot \\frac{A_1}{A_2}$$",
      "steps": "1. Masukkan nilai yang diketahui:<br>• $A_1 = 20\\text{ cm}^2$<br>• $v_1 = 3\\text{ m/s}$<br>• $A_2 = 5\\text{ cm}^2$<br>2. Hitung kelajuan $v_2$:<br>$$v_2 = 3\\text{ m/s} \\times \\frac{20\\text{ cm}^2}{5\\text{ cm}^2} = 3 \\times 4 = 12\\text{ m/s}$$",
      "pitfalls": "Terkecoh membalik rasio penampang menjadi $3 \\times \\frac{5}{20} = 0{,}75\\text{ m/s}$ (opsi A). Ingat prinsip fisis: di bagian pipa yang lebih sempit, kelajuan aliran fluida selalu bertambah cepat."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan Kontinuitas untuk fluida inkompresibel menyatakan kekekalan debit aliran pada setiap titik sepanjang pipa alir: $$Q_1 = Q_2 \\iff A_1 \\cdot v_1 = A_2 \\cdot v_2$$Sehingga kelajuan fluida berbanding terbalik dengan luas penampang: $$v_2 = v_1 \\cdot \\frac{A_1}{A_2}$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "mudah",
    "statement": "Air mengalir di dalam sebuah pipa horizontal berdiameter penampang $d_1 = 6\\text{ cm}$ dengan kelajuan $v_1 = 1{,}5\\text{ m/s}$. Pipa tersebut kemudian menyempit menjadi pipa berdiameter $d_2 = 2\\text{ cm}$. Kelajuan aliran air pada pipa yang menyempit tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}5\\text{ m/s}$",
      "$9{,}0\\text{ m/s}$",
      "$13{,}5\\text{ m/s}$",
      "$18{,}0\\text{ m/s}$",
      "$27{,}0\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Karena luas penampang pipa lingkaran sebanding dengan kuadrat diameternya ($A \\propto d^2$), maka persamaan kontinuitas dapat dinyatakan dalam perbandingan diameter:<br>$$d_1^2 \\cdot v_1 = d_2^2 \\cdot v_2 \\iff v_2 = v_1 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      "steps": "1. Hitung rasio diameter:<br>$$\\frac{d_1}{d_2} = \\frac{6\\text{ cm}}{2\\text{ cm}} = 3$$<br>2. Kuadratkan rasio diameter:<br>$$\\left(\\frac{d_1}{d_2}\\right)^2 = 3^2 = 9$$<br>3. Hitung kelajuan $v_2$:<br>$$v_2 = 1{,}5\\text{ m/s} \\times 9 = 13{,}5\\text{ m/s}$$",
      "pitfalls": "Siswa sering lupa menguadratkan rasio diameter dan hanya mengalikan secara linier ($1{,}5 \\times 3 = 4{,}5\\text{ m/s}$, opsi A)."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Karena luas penampang pipa lingkaran sebanding dengan kuadrat diameternya ($A \\propto d^2$), maka persamaan kontinuitas dapat dinyatakan dalam perbandingan diameter: $$d_1^2 \\cdot v_1 = d_2^2 \\cdot v_2 \\iff v_2 = v_1 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "mudah",
    "statement": "Fluida dinamis dalam pembahasan fisika dasar ideal diasumsikan memenuhi empat karakteristik utama. Pasangan karakteristik berikut yang secara tepat mendeskripsikan sifat fluida ideal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Inkompresibel (tak termampatkan) dan non-viskos (tidak kental)",
      "Kompresibel (mudah termampatkan) dan memiliki viskositas tinggi",
      "Aliran turbulen tak beraturan dan mengalami pusaran (rotasional)",
      "Kelajuan di setiap titik selalu berubah-ubah terhadap waktu (tidak tunak)",
      "Massa jenisnya selalu berubah drastis sepanjang garis alir"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Empat sifat utama fluida ideal adalah:<br>1) Inkompresibel: massa jenis fluida konstan dan tidak berubah ketika ditekan.<br>2) Non-viskos: tidak memiliki gesekan internal atau kekentalan saat mengalir.<br>3) Aliran tunak (steady): kecepatan partikel pada titik tertentu selalu konstan terhadap waktu.<br>4) Tak berputar (irrotasional): partikel tidak memiliki momentum sudut terhadap porosnya.",
      "steps": "1. Analisis opsi A: Inkompresibel dan non-viskos adalah dua karakteristik mutlak fluida ideal.<br>2. Opsi B, C, D, E merupakan karakteristik fluida nyata atau non-ideal.",
      "pitfalls": "Jangan tertukar antara aliran tunak (steady) dan aliran laminer dengan aliran turbulen atau pusaran berolak."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Empat sifat utama fluida ideal adalah: 1) Inkompresibel: massa jenis fluida konstan dan tidak berubah ketika ditekan. 2) Non-viskos: tidak memiliki gesekan internal atau kekentalan saat mengalir. 3) Aliran tunak (steady): kecepatan partikel pada titik tertentu selalu konstan terhadap waktu. 4) Tak berputar (irrotasional): partikel tidak memiliki momentum sudut terhadap porosnya. **Tips:** Jangan tertukar antara aliran tunak (steady) dan aliran laminer dengan aliran turbulen atau pusaran berolak."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "sedang",
    "statement": "Sebuah pembuluh darah utama (aorta) berdiameter rata-rata $D = 1{,}2\\text{ cm}$ mengalirkan darah dengan kelajuan rata-rata $v_1 = 40\\text{ cm/s}$. Pembuluh darah aorta ini kemudian bercabang-cabang menjadi $N = 3 \\times 10^7$ pembuluh darah kapiler halus yang tersusun secara paralel, masing-masing dengan diameter rata-rata $d = 8 \\times 10^{-4}\\text{ cm}$. Kelajuan rata-rata aliran darah di dalam setiap pembuluh darah kapiler tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ cm/s}$",
      "$1{,}0\\text{ cm/s}$",
      "$2{,}0\\text{ cm/s}$",
      "$3{,}0\\text{ cm/s}$",
      "$6{,}0\\text{ cm/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan prinsip kontinuitas, debit aliran pada pembuluh utama sama dengan jumlah debit total pada seluruh cabang kapiler:<br>$$Q_{\\text{aorta}} = N \\cdot Q_{\\text{kapiler}} \\iff A_{\\text{aorta}} \\cdot v_1 = N \\cdot A_{\\text{kapiler}} \\cdot v_2$$Dengan mensubstitusikan luas penampang lingkaran $A = \\frac{1}{4}\\pi d^2$:<br>$$D^2 \\cdot v_1 = N \\cdot d^2 \\cdot v_2 \\implies v_2 = \\frac{D^2 \\cdot v_1}{N \\cdot d^2}$$",
      "steps": "1. Hitung pembilang ($D^2 \\cdot v_1$):<br>$$D^2 \\cdot v_1 = (1{,}2\\text{ cm})^2 \\times 40\\text{ cm/s} = 1{,}44 \\times 40 = 57{,}6\\text{ cm}^3\\text{/s}$$<br>2. Hitung penyebut ($N \\cdot d^2$):<br>$$N \\cdot d^2 = (3 \\times 10^7) \\times (8 \\times 10^{-4}\\text{ cm})^2 = 3 \\times 10^7 \\times 64 \\times 10^{-8} = 19{,}2\\text{ cm}^2$$<br>3. Hitung kelajuan rata-rata di kapiler ($v_2$):<br>$$v_2 = \\frac{57{,}6}{19{,}2} = 3{,}0\\text{ cm/s}$$",
      "pitfalls": "Siswa sering lupa memperhitungkan jumlah total cabang $N$, sehingga menghitung kelajuan yang luar biasa besar karena hanya membandingkan satu aorta dengan satu kapiler tunggal."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan prinsip kontinuitas, debit aliran pada pembuluh utama sama dengan jumlah debit total pada seluruh cabang kapiler: $$Q_{\\text{aorta}} = N \\cdot Q_{\\text{kapiler}} \\iff A_{\\text{aorta}} \\cdot v_1 = N \\cdot A_{\\text{kapiler}} \\cdot v_2$$Dengan mensubstitusikan luas penampang lingkaran $A = \\frac{1}{4}\\pi d^2$: $$D^2 \\cdot v_1 = N \\cdot d^2 \\cdot v_2 \\implies v_2 = \\frac{D^2 \\cdot v_1}{N \\cdot d^2}$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "sedang",
    "statement": "Sebuah tandon penampung air berkapasitas volume $V = 1800\\text{ liter}$ diisi secara bersamaan oleh dua pipa pengisi, yaitu pipa A dengan debit $Q_A = 2{,}5\\text{ liter/s}$ dan pipa B dengan debit $Q_B = 1{,}5\\text{ liter/s}$. Namun pada saat yang sama, lubang pembuangan di dasar tandon terbuka dan mengalirkan air keluar dengan kelajuan $v = 2\\text{ m/s}$ melalui penampang lubang $A_{\\text{bocor}} = 5\\text{ cm}^2$. Waktu yang diperlukan untuk mengisi tandon tersebut dari keadaan kosong hingga terisi penuh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ menit}$",
      "$7{,}5\\text{ menit}$",
      "$10\\text{ menit}$",
      "$12{,}5\\text{ menit}$",
      "$15\\text{ menit}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Laju pengisian netto tandon adalah selisih antara debit total air masuk dan debit air keluar:<br>$$Q_{\\text{netto}} = Q_{\\text{masuk}} - Q_{\\text{keluar}} = (Q_A + Q_B) - (A_{\\text{bocor}} \\cdot v)$$Waktu pengisian dihitung dengan:<br>$$t = \\frac{V}{Q_{\\text{netto}}}$$",
      "steps": "1. Hitung total debit air masuk:<br>$$Q_{\\text{masuk}} = 2{,}5\\text{ liter/s} + 1{,}5\\text{ liter/s} = 4{,}0\\text{ liter/s}$$<br>2. Hitung debit air yang bocor keluar:<br>$$Q_{\\text{keluar}} = A_{\\text{bocor}} \\cdot v = (5 \\times 10^{-4}\\text{ m}^2) \\times 2\\text{ m/s} = 10^{-3}\\text{ m}^3\\text{/s} = 1{,}0\\text{ liter/s}$$<br>3. Hitung debit netto pengisian:<br>$$Q_{\\text{netto}} = 4{,}0\\text{ liter/s} - 1{,}0\\text{ liter/s} = 3{,}0\\text{ liter/s}$$<br>4. Hitung waktu pengisian total:<br>$$t = \\frac{1800\\text{ liter}}{3{,}0\\text{ liter/s}} = 600\\text{ sekon} = 10\\text{ menit}$$",
      "pitfalls": "Lupa mengonversi satuan luas bocor dari $\\text{cm}^2$ ke $\\text{m}^2$ atau lupa memperhitungkan kebocoran keluar sehingga membagi $1800$ dengan $4{,}0$ yang menghasilkan $7{,}5\\text{ menit}$ (opsi B)."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Laju pengisian netto tandon adalah selisih antara debit total air masuk dan debit air keluar: $$Q_{\\text{netto}} = Q_{\\text{masuk}} - Q_{\\text{keluar}} = (Q_A + Q_B) - (A_{\\text{bocor}} \\cdot v)$$Waktu pengisian dihitung dengan: $$t = \\frac{V}{Q_{\\text{netto}}}$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "sedang",
    "statement": "Sebuah selang penyiram tanaman dialiri air dengan debit tetap $Q = 0{,}4\\text{ liter/s}$. Di ujung selang dipasang nozzle kepala semprotan yang memiliki $n = 25$ lubang sembur kecil yang identik. Luas penampang masing-masing lubang kecil tersebut adalah $a = 2\\text{ mm}^2$. Besar kelajuan semburan air yang keluar dari setiap lubang nozzle adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$20\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Debit total fluida terbagi rata melalui $n$ lubang kecil yang identik:<br>$$Q = n \\cdot a \\cdot v \\implies v = \\frac{Q}{n \\cdot a}$$Di mana $n \\cdot a$ adalah luas penampang total seluruh lubang sembur.",
      "steps": "1. Konversikan besaran ke satuan SI:<br>• Debit: $Q = 0{,}4\\text{ liter/s} = 0{,}4 \\times 10^{-3}\\text{ m}^3\\text{/s} = 4 \\times 10^{-4}\\text{ m}^3\\text{/s}$<br>• Luas total lubang: $A_{\\text{total}} = 25 \\times (2\\text{ mm}^2) = 50\\text{ mm}^2 = 50 \\times 10^{-6}\\text{ m}^2 = 5 \\times 10^{-5}\\text{ m}^2$<br>2. Hitung kelajuan semburan air ($v$):<br>$$v = \\frac{4 \\times 10^{-4}\\text{ m}^3\\text{/s}}{5 \\times 10^{-5}\\text{ m}^2} = \\frac{40}{5} = 8\\text{ m/s}$$",
      "pitfalls": "Siswa sering lupa mengalikan luas 1 lubang dengan jumlah total lubang ($n = 25$) sehingga memperoleh hasil kelajuan yang keliru sebesar $200\\text{ m/s}$."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Debit total fluida terbagi rata melalui $n$ lubang kecil yang identik: $$Q = n \\cdot a \\cdot v \\implies v = \\frac{Q}{n \\cdot a}$$Di mana $n \\cdot a$ adalah luas penampang total seluruh lubang sembur."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "sedang",
    "statement": "Sebuah tangki silinder besar dengan luas penampang $A_1 = 1{,}5\\text{ m}^2$ diisi air hingga ketinggian tertentu. Pada dinding dekat dasar tangki terdapat keran pembuangan mendatar dengan luas penampang $A_2 = 3\\text{ cm}^2$. Ketika keran dibuka penuh, air mengalir keluar dari mulut keran dengan kelajuan rata-rata $v_2 = 5\\text{ m/s}$. Laju penurunan permukaan air di dalam tangki silinder tersebut ($v_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ mm/s}$",
      "$1{,}0\\text{ mm/s}$",
      "$2{,}0\\text{ mm/s}$",
      "$5{,}0\\text{ mm/s}$",
      "$10\\text{ mm/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan persamaan kontinuitas fluida inkompresibel, debit penurunan air di dalam tangki sama dengan debit air yang keluar melalui keran:<br>$$A_1 \\cdot v_1 = A_2 \\cdot v_2 \\implies v_1 = v_2 \\cdot \\frac{A_2}{A_1}$$",
      "steps": "1. Konversikan luas penampang keran ke meter persegi:<br>$$A_2 = 3\\text{ cm}^2 = 3 \\times 10^{-4}\\text{ m}^2$$<br>2. Hitung laju penurunan permukaan air ($v_1$):<br>$$v_1 = 5\\text{ m/s} \\times \\frac{3 \\times 10^{-4}\\text{ m}^2}{1{,}5\\text{ m}^2} = 5 \\times (2 \\times 10^{-4}) = 10^{-3}\\text{ m/s} = 1{,}0\\text{ mm/s}$$",
      "pitfalls": "Kesalahan konversi satuan kecepatan dari $\\text{m/s}$ ke $\\text{mm/s}$ atau kesalahan konversi satuan luas penampang dari $\\text{cm}^2$ ke $\\text{m}^2$."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan persamaan kontinuitas fluida inkompresibel, debit penurunan air di dalam tangki sama dengan debit air yang keluar melalui keran: $$A_1 \\cdot v_1 = A_2 \\cdot v_2 \\implies v_1 = v_2 \\cdot \\frac{A_2}{A_1}$$."
  },
  {
    "id": "fis-flu-dinamis-kontinuitas-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Debit & Persamaan Kontinuitas",
    "difficulty": "sedang",
    "statement": "Sebuah pipa saluran air konis horizontal memiliki penampang yang menyempit secara bertahap dari diameter inlet $d_1 = 12\\text{ cm}$ menjadi diameter outlet $d_2 = 4\\text{ cm}$. Jika massa jenis air adalah $\\rho = 1000\\text{ kg/m}^3$ dan kelajuan air saat keluar dari outlet adalah $v_2 = 9\\text{ m/s}$, besar debit massa aliran (laju aliran massa fluida per detik) yang melintasi pipa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}8\\pi\\text{ kg/s}$",
      "$3{,}6\\pi\\text{ kg/s}$",
      "$7{,}2\\pi\\text{ kg/s}$",
      "$14{,}4\\pi\\text{ kg/s}$",
      "$36\\pi\\text{ kg/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Debit massa (laju aliran massa, $\\dot{m}$) adalah massa fluida yang melewati penampang pipa per satuan waktu:<br>$$\\dot{m} = \\rho \\cdot Q = \\rho \\cdot A_2 \\cdot v_2 = \\rho \\cdot \\left(\\frac{1}{4}\\pi d_2^2\\right) \\cdot v_2$$Prinsip kekekalan massa menjamin bahwa nilai debit massa konstan di setiap penampang pipa.",
      "steps": "1. Konversikan diameter outlet ke meter:<br>$$d_2 = 4\\text{ cm} = 0{,}04\\text{ m}$$<br>2. Hitung luas penampang outlet ($A_2$):<br>$$A_2 = \\frac{1}{4}\\pi (0{,}04\\text{ m})^2 = \\frac{1}{4}\\pi (16 \\times 10^{-4}\\text{ m}^2) = 4\\pi \\times 10^{-4}\\text{ m}^2$$<br>3. Hitung debit volume ($Q$):<br>$$Q = A_2 \\cdot v_2 = (4\\pi \\times 10^{-4}\\text{ m}^2) \\times 9\\text{ m/s} = 36\\pi \\times 10^{-4}\\text{ m}^3\\text{/s} = 3{,}6\\pi \\times 10^{-3}\\text{ m}^3\\text{/s}$$<br>4. Hitung debit massa ($\\dot{m}$):<br>$$\\dot{m} = \\rho \\cdot Q = 1000\\text{ kg/m}^3 \\times (3{,}6\\pi \\times 10^{-3}\\text{ m}^3\\text{/s}) = 3{,}6\\pi\\text{ kg/s}$$",
      "pitfalls": "Siswa sering mengira debit massa sama dengan debit volume tanpa mengalikan dengan massa jenis $\\rho$, atau salah menghitung luas lingkaran dari diameter."
    },
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Debit massa (laju aliran massa, $\\dot{m}$) adalah massa fluida yang melewati penampang pipa per satuan waktu: $$\\dot{m} = \\rho \\cdot Q = \\rho \\cdot A_2 \\cdot v_2 = \\rho \\cdot \\left(\\frac{1}{4}\\pi d_2^2\\right) \\cdot v_2$$Prinsip kekekalan massa menjamin bahwa nilai debit massa konstan di setiap penampang pipa."
  },
  {
    "id": "mudah-fis-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Persamaan Kontinuitas & Debit Fluida",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Minyak mengalir melalui pipa mendatar yang memiliki luas penampang $A_1 = 20\\text{ cm}^2$ dengan kelajuan $v_1 = 2\\text{ m/s}$. Jika pipa tersebut menyempit hingga luas penampangnya menjadi $A_2 = 5\\text{ cm}^2$, kelajuan aliran minyak pada penampang sempit ($v_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Kontinuitas Fluida Inkompresibel:</strong><br>\n          Debit aliran konstan di setiap penampang pipa:<br>\n          $$Q_1 = Q_2 \\implies A_1 v_1 = A_2 v_2$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi nilai penampang dan kelajuan:\n            $$20\\text{ cm}^2 \\times 2\\text{ m/s} = 5\\text{ cm}^2 \\times v_2$$\n          </li>\n          <li>Hitung nilai $v_2$:\n            $$40 = 5 v_2 \\implies v_2 = \\frac{40}{5} = 8\\text{ m/s}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Karena satuan penampang kedua sisi sama-sama $\\text{cm}^2$, tidak perlu mengonversi ke $\\text{m}^2$ asalkan satuannya konsisten.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "hint": "Persamaan Kontinuitas Fluida Inkompresibel: Debit aliran konstan di setiap penampang pipa: $$Q_1 = Q_2 \\implies A_1 v_1 = A_2 v_2$$. **Tips:** Karena satuan penampang kedua sisi sama-sama $\\text{cm}^2$, tidak perlu mengonversi ke $\\text{m}^2$ asalkan satuannya konsisten."
  },
  {
    "id": "sedang-fis-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Teorema Torricelli - Jarak Pancaran Air",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah tangki air silinder besar terbuka diletakkan di atas tanah mendatar. Pada dinding tangki terdapat sebuah lubang kecil pada kedalaman $h_1 = 1{,}8\\text{ meter}$ di bawah permukaan air. Jika lubang tersebut berada pada ketinggian $h_2 = 3{,}2\\text{ meter}$ di atas permukaan tanah ($g = 10\\text{ m/s}^2$), jarak jatuh pancaran air secara horizontal ($x$) di tanah diukur dari dasar dinding tangki adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}4\\text{ meter}$",
      "$3{,}6\\text{ meter}$",
      "$4{,}8\\text{ meter}$",
      "$5{,}4\\text{ meter}$",
      "$6{,}0\\text{ meter}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Torricelli & Jarak Pancaran Maksimum:</strong><br>\n          • Kelajuan semburan mendatar: $v = \\sqrt{2 g h_1}$<br>\n          • Waktu jatuh bebas: $t = \\sqrt{\\frac{2 h_2}{g}}$<br>\n          • Jarak pancaran horizontal: $x = v \\cdot t = 2\\sqrt{h_1 \\cdot h_2}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Substitusi nilai kedalaman $h_1 = 1{,}8\\text{ m}$ dan ketinggian $h_2 = 3{,}2\\text{ m}$:\n            $$x = 2\\sqrt{1{,}8 \\times 3{,}2}$$\n          </li>\n          <li>Hitung perkalian dalam akar:\n            $$1{,}8 \\times 3{,}2 = 5{,}76$$\n          </li>\n          <li>Tarik akar kuadrat:\n            $$\\sqrt{5{,}76} = 2{,}4$$\n            $$x = 2 \\times 2{,}4 = 4{,}8\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering lupa mengalikan dengan angka 2 pada rumus jarak $x = 2\\sqrt{h_1 h_2}$ sehingga terkecoh memilih $2{,}4\\text{ meter}$.\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "hint": "Teorema Torricelli & Jarak Pancaran Maksimum: • Kelajuan semburan mendatar: $v = \\sqrt{2 g h_1}$ • Waktu jatuh bebas: $t = \\sqrt{\\frac{2 h_2}{g}}$ • Jarak pancaran horizontal: $x = v \\cdot t = 2\\sqrt{h_1 \\cdot h_2}$."
  },
  {
    "id": "hots-fis-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-dinamis-kontinuitas",
    "category": "Fluida Dinamis & Teorema Torricelli",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Sebuah tangki silinder terbuka berdiameter besar berisi air setinggi $H = 5\\text{ m}$. Pada dinding samping tangki terdapat lubang bocor kecil dengan luas penampang $A = 2\\text{ cm}^2$ yang berada pada kedalaman $h = 3{,}2\\text{ m}$ dari permukaan air. Jika massa jenis air $\\rho = 1000\\text{ kg/m}^3$ dan $g = 10\\text{ m/s}^2$, tentukan kelajuan pancaran air $(v)$ yang keluar dari lubang serta besar gaya reaksi dorong horizontal $(F_{\\text{reaksi}})$ yang dialami tangki akibat pancaran fluida tersebut!",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 12{,}8\\text{ N}$",
      "$v = 10\\text{ m/s}$ dan $F_{\\text{reaksi}} = 20{,}0\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 25{,}6\\text{ N}$",
      "$v = 6\\text{ m/s}$ dan $F_{\\text{reaksi}} = 7{,}2\\text{ N}$",
      "$v = 8\\text{ m/s}$ dan $F_{\\text{reaksi}} = 6{,}4\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Teorema Torricelli & Gaya Reaksi Aliran Fluida:</strong><br>\n          1. Kecepatan pancaran Torricelli: $v = \\sqrt{2gh}$ (dengan $h$ kedalaman dari permukaan air)<br>\n          2. Debit aliran massa: $\\dot{m} = \\rho Q = \\rho A v$<br>\n          3. Gaya reaksi dorong impuls fluida (Hukum III Newton): $F_{\\text{reaksi}} = \\dot{m} v = \\rho A v^2$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Kelajuan Pancaran Air $(v)$:</strong><br>\n            $$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 3{,}2} = \\sqrt{64} = 8\\text{ m/s}$$\n          </li>\n          <li><strong>Konversi Luas Penampang ke Satuan SI:</strong><br>\n            $$A = 2\\text{ cm}^2 = 2\\times 10^{-4}\\text{ m}^2$$\n          </li>\n          <li><strong>Hitung Gaya Reaksi Dorong $(F_{\\text{reaksi}})$:</strong><br>\n            $$F_{\\text{reaksi}} = \\rho A v^2 = (1000\\text{ kg/m}^3)(2\\times 10^{-4}\\text{ m}^2)(8\\text{ m/s})^2$$\n            $$F_{\\text{reaksi}} = 0{,}2 \\times 64 = 12{,}8\\text{ N}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan bahwa kedalaman $h$ diukur dari <em>permukaan air</em> ke lubang ($3{,}2\\text{ m}$), bukan tinggi lubang dari dasar tangki ($5 - 3{,}2 = 1{,}8\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Fluida",
    "subBab": "Debit & Persamaan Kontinuitas",
    "subTopic": "Debit & Persamaan Kontinuitas",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-dinamis",
    "subTopicSlug": "debit-persamaan-kontinuitas",
    "hint": "Teorema Torricelli & Gaya Reaksi Aliran Fluida: 1. Kecepatan pancaran Torricelli: $v = \\sqrt{2gh}$ (dengan $h$ kedalaman dari permukaan air) 2. Debit aliran massa: $\\dot{m} = \\rho Q = \\rho A v$ 3. Gaya reaksi dorong impuls fluida (Hukum III Newton): $F_{\\text{reaksi}} = \\dot{m} v = \\rho A v^2$."
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
