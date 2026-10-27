/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Gerak Melingkar Beraturan (GMB) (fis-kin-lengkung-gmb)
 * Slug: gmb
 * Indikator: Frekuensi, periode, kecepatan sudut (omega), dan kelajuan linier (v = omega * r).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-gmb";
  const subTopicSlug = "gmb";
  const questions = [
  {
    "id": "fis-kin-lengkung-gmb-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "mudah",
    "statement": "Sebuah roda sepeda berputar beraturan menempuh 120 putaran dalam selang waktu $1\\text{ menit}$ ($60\\text{ sekon}$). Nilai frekuensi dan periode putaran roda tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ Hz}$ dan $0{,}5\\text{ sekon}$",
      "$0{,}5\\text{ Hz}$ dan $2\\text{ sekon}$",
      "$120\\text{ Hz}$ dan $60\\text{ sekon}$",
      "$2\\text{ Hz}$ dan $2\\text{ sekon}$",
      "$4\\text{ Hz}$ dan $0{,}25\\text{ sekon}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Frekuensi ($f$) menyatakan banyaknya putaran per satuan waktu, sedangkan periode ($T$) menyatakan waktu yang dibutuhkan untuk satu putaran penuh:<br>$$f = \\frac{n}{t},\\quad T = \\frac{t}{n} = \\frac{1}{f}$$",
      "steps": "1. Hitung frekuensi ($n = 120$ putaran, $t = 60\\text{ s}$):<br>$$f = \\frac{120}{60} = 2\\text{ Hz}$$<br>2. Hitung periode:<br>$$T = \\frac{1}{f} = \\frac{1}{2} = 0{,}5\\text{ sekon}$$",
      "pitfalls": "Tertukar antara frekuensi dan periode sehingga menjawab $0{,}5\\text{ Hz}$ dan $2\\text{ sekon}$."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Frekuensi ($f$) menyatakan banyaknya putaran per satuan waktu, sedangkan periode ($T$) menyatakan waktu yang dibutuhkan untuk satu putaran penuh: $$f = \\frac{n}{t},\\quad T = \\frac{t}{n} = \\frac{1}{f}$$. **Tips:** Tertukar antara frekuensi dan periode sehingga menjawab $0{,}5\\text{ Hz}$ dan $2\\text{ sekon}$."
  },
  {
    "id": "fis-kin-lengkung-gmb-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "mudah",
    "statement": "Sebuah piringan hitam berputar beraturan dengan kecepatan sudut tetap $\\omega = 10\\pi\\text{ rad/s}$. Sebuah partikel debu berada di tepi piringan pada jarak $R = 20\\text{ cm}$ dari poros pusat putaran. Kelajuan linier ($v$) partikel debu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\pi\\text{ m/s}$",
      "$200\\pi\\text{ m/s}$",
      "$0{,}5\\pi\\text{ m/s}$",
      "$4\\pi\\text{ m/s}$",
      "$10\\pi\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hubungan antara kelajuan linier ($v$), kecepatan sudut ($\\omega$), dan jari-jari lintasan ($r$) pada gerak melingkar adalah:<br>$$v = \\omega \\cdot r$$",
      "steps": "1. Konversikan jari-jari ke satuan meter:<br>$$r = 20\\text{ cm} = 0{,}2\\text{ meter}$$<br>2. Hitung kelajuan linier:<br>$$v = \\omega \\cdot r = (10\\pi\\text{ rad/s}) \\times 0{,}2\\text{ m} = 2\\pi\\text{ m/s}$$",
      "pitfalls": "Lupa mengonversi satuan centimeter ke meter sehingga memperoleh hasil keliru $200\\pi\\text{ m/s}$."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Hubungan antara kelajuan linier ($v$), kecepatan sudut ($\\omega$), dan jari-jari lintasan ($r$) pada gerak melingkar adalah: $$v = \\omega \\cdot r$$. **Tips:** Lupa mengonversi satuan centimeter ke meter sehingga memperoleh hasil keliru $200\\pi\\text{ m/s}$."
  },
  {
    "id": "fis-kin-lengkung-gmb-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "mudah",
    "statement": "Jarum detik pada sebuah jam dinding analog berputar secara beraturan menyelesaikan satu putaran penuh ($2\\pi\\text{ radian}$) dalam waktu $60\\text{ sekon}$. Besar kecepatan sudut ($\\omega$) dari jarum detik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{\\pi}{30}\\text{ rad/s}$",
      "$\\frac{\\pi}{60}\\text{ rad/s}$",
      "$\\frac{\\pi}{15}\\text{ rad/s}$",
      "$30\\pi\\text{ rad/s}$",
      "$60\\pi\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan sudut rata-rata untuk satu putaran penuh dengan periode $T$ adalah:<br>$$\\omega = \\frac{2\\pi}{T}$$",
      "steps": "1. Periode jarum detik: $T = 60\\text{ sekon}$.<br>2. Hitung kecepatan sudut:<br>$$\\omega = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}$$",
      "pitfalls": "Lupa bahwa satu putaran penuh adalah $2\\pi$ radian (bukan $1\\pi$ radian)."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kecepatan sudut rata-rata untuk satu putaran penuh dengan periode $T$ adalah: $$\\omega = \\frac{2\\pi}{T}$$. **Tips:** Lupa bahwa satu putaran penuh adalah $2\\pi$ radian (bukan $1\\pi$ radian)."
  },
  {
    "id": "fis-kin-lengkung-gmb-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "mudah",
    "statement": "Pernyataan yang paling tepat mengenai karakteristik fisis sebuah benda yang bergerak melingkar beraturan (GMB) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kelajuan linier dan kecepatan sudut konstan, namun vektor kecepatan linier selalu berubah arah",
      "Vektor kecepatan linier selalu konstan baik nilai maupun arahnya",
      "Percepatan total yang dialami benda bernilai sama dengan nol",
      "Gaya resultan yang bekerja pada benda bernilai nol",
      "Arah percepatan selalu berimpit sejajar dengan arah garis singgung lintasan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada GMB, kelajuan (skalar) konstan, namun arah vektor kecepatan linier (garis singgung) terus berbelok mengikuti lengkungan lingkaran setiap saat. Akibat perubahan arah vektor kecepatan ini, timbul percepatan ke arah pusat (percepatan sentripetal), sehingga percepatannya tidak nol.",
      "steps": "Analisis pilihan:<br>• Opsi A: Tepat, kelajuan konstan tetapi vektor arah gerak selalu berubah.<br>• Opsi B: Salah, arahnya terus berputar.<br>• Opsi C & D: Salah, terdapat percepatan sentripetal dan gaya sentripetal.<br>• Opsi E: Percepatan sentripetal tegak lurus garis singgung (mengarah ke pusat).",
      "pitfalls": "Menyamakan kata 'kelajuan linier konstan' dengan 'vektor kecepatan konstan'."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Pada GMB, kelajuan (skalar) konstan, namun arah vektor kecepatan linier (garis singgung) terus berbelok mengikuti lengkungan lingkaran setiap saat. Akibat perubahan arah vektor kecepatan ini, timbul percepatan ke arah pusat (percepatan sentripetal), sehingga percepatannya tidak nol. **Tips:** Menyamakan kata 'kelajuan linier konstan' dengan 'vektor kecepatan konstan'."
  },
  {
    "id": "fis-kin-lengkung-gmb-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "mudah",
    "statement": "Sebuah baling-baling helikopter berputar dengan laju rotasi $300\\text{ rpm}$ (rotasi per menit). Kecepatan sudut putaran baling-baling tersebut jika dinyatakan dalam satuan standar internasional ($\\text{rad/s}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\pi\\text{ rad/s}$",
      "$5\\pi\\text{ rad/s}$",
      "$20\\pi\\text{ rad/s}$",
      "$300\\pi\\text{ rad/s}$",
      "$600\\pi\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Konversi satuan rotasi per menit (rpm) ke radian per sekon (rad/s): satu rotasi sama dengan $2\\pi$ radian dan satu menit sama dengan $60$ sekon:<br>$$1\\text{ rpm} = \\frac{2\\pi}{60}\\text{ rad/s} = \\frac{\\pi}{30}\\text{ rad/s}$$",
      "steps": "1. Konversikan nilai laju rotasi $300\\text{ rpm}$:<br>$$\\omega = 300 \\times \\frac{\\pi}{30}\\text{ rad/s} = 10\\pi\\text{ rad/s}$$",
      "pitfalls": "Lupa mengalikan dengan $2\\pi$ dan hanya membagi $300 / 60 = 5\\text{ rad/s}$."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Konversi satuan rotasi per menit (rpm) ke radian per sekon (rad/s): satu rotasi sama dengan $2\\pi$ radian dan satu menit sama dengan $60$ sekon: $$1\\text{ rpm} = \\frac{2\\pi}{60}\\text{ rad/s} = \\frac{\\pi}{30}\\text{ rad/s}$$."
  },
  {
    "id": "fis-kin-lengkung-gmb-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "sedang",
    "statement": "Dua buah roda $A$ dan $B$ dihubungkan menggunakan rantai tak elastis. Jari-jari roda $A$ adalah $R_A = 20\\text{ cm}$ dan jari-jari roda $B$ adalah $R_B = 5\\text{ cm}$. Jika roda $A$ berputar dengan kecepatan sudut tetap $\\omega_A = 15\\text{ rad/s}$, besar kecepatan sudut roda $B$ ($\\omega_B$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ rad/s}$",
      "$3{,}75\\text{ rad/s}$",
      "$30\\text{ rad/s}$",
      "$75\\text{ rad/s}$",
      "$15\\text{ rad/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua roda yang dihubungkan dengan rantai atau tali sabuk memiliki kelajuan linier pada tepi roda yang sama besar ($v_A = v_B$):<br>$$\\omega_A R_A = \\omega_B R_B$$",
      "steps": "1. Hubungkan parameter gerak kedua roda:<br>$$\\omega_B = \\omega_A \\left( \\frac{R_A}{R_B} \\right)$$<br>2. Masukkan nilai yang diketahui:<br>$$\\omega_B = 15\\text{ rad/s} \\times \\left( \\frac{20\\text{ cm}}{5\\text{ cm}} \\right) = 15 \\times 4 = 60\\text{ rad/s}$$",
      "pitfalls": "Menyamakan kecepatan sudut ($\\omega_A = \\omega_B = 15\\text{ rad/s}$), yang merupakan hubungan untuk dua roda yang sesumbu/seporos, bukan dihubungkan rantai."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Dua roda yang dihubungkan dengan rantai atau tali sabuk memiliki kelajuan linier pada tepi roda yang sama besar ($v_A = v_B$): $$\\omega_A R_A = \\omega_B R_B$$."
  },
  {
    "id": "fis-kin-lengkung-gmb-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "sedang",
    "statement": "Tiga buah roda $A$, $B$, dan $C$ dirangkai sebagai berikut: roda $A$ dan $B$ dipasang seporos (sepusat), sedangkan tepi roda $B$ dan tepi roda $C$ dihubungkan oleh sebuah sabuk penggerak. Jari-jari masing-masing roda adalah $R_A = 30\\text{ cm}$, $R_B = 10\\text{ cm}$, dan $R_C = 20\\text{ cm}$. Jika titik pada tepi roda $C$ memiliki kelajuan linier $v_C = 6\\text{ m/s}$, besar kelajuan linier titik pada tepi roda $A$ ($v_A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$18\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$2\\text{ m/s}$",
      "$9\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "• Roda $B$ dan $C$ dihubungkan sabuk: $v_B = v_C$.<br>• Roda $A$ dan $B$ seporos: $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$.",
      "steps": "1. Dari hubungan sabuk $B-C$:<br>$$v_B = v_C = 6\\text{ m/s}$$<br>2. Dari hubungan seporos $A-B$:<br>$$v_A = v_B \\left( \\frac{R_A}{R_B} \\right) = 6\\text{ m/s} \\times \\left( \\frac{30\\text{ cm}}{10\\text{ cm}} \\right) = 6 \\times 3 = 18\\text{ m/s}$$",
      "pitfalls": "Menyamakan kelajuan linier seluruh roda $v_A = v_B = v_C = 6\\text{ m/s}$."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "• Roda $B$ dan $C$ dihubungkan sabuk: $v_B = v_C$. • Roda $A$ dan $B$ seporos: $\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$."
  },
  {
    "id": "fis-kin-lengkung-gmb-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "sedang",
    "statement": "Dua titik $P$ dan $Q$ terletak pada piringan pemutar yang sama dan berputar bersamaan mengitari satu poros putaran pusat. Titik $P$ berada pada jarak $r_P = 10\\text{ cm}$ dan titik $Q$ berada pada jarak $r_Q = 30\\text{ cm}$ dari poros pusat. Perbandingan kecepatan sudut ($\\omega_P : \\omega_Q$) dan perbandingan kelajuan linier ($v_P : v_Q$) kedua titik tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 1$ dan $1 : 3$",
      "$1 : 3$ dan $1 : 1$",
      "$1 : 3$ dan $1 : 3$",
      "$3 : 1$ dan $1 : 3$",
      "$1 : 1$ dan $1 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik-titik yang terletak pada satu benda tegar atau piringan yang sama selalu menyapu sudut yang sama dalam selang waktu yang sama sehingga memiliki kecepatan sudut identik ($\\omega_P = \\omega_Q$). Kelajuan linier berbanding lurus dengan jarak titik ke poros ($v = \\omega r$).",
      "steps": "1. Karena seporos pada piringan yang sama:<br>$$\\omega_P : \\omega_Q = 1 : 1$$<br>2. Perbandingan kelajuan linier:<br>$$\\frac{v_P}{v_Q} = \\frac{\\omega \\cdot r_P}{\\omega \\cdot r_Q} = \\frac{10\\text{ cm}}{30\\text{ cm}} = \\frac{1}{3} = 1 : 3$$",
      "pitfalls": "Terkecoh mengira titik yang lebih jauh memiliki kecepatan sudut yang lebih besar."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Titik-titik yang terletak pada satu benda tegar atau piringan yang sama selalu menyapu sudut yang sama dalam selang waktu yang sama sehingga memiliki kecepatan sudut identik ($\\omega_P = \\omega_Q$). Kelajuan linier berbanding lurus dengan jarak titik ke poros ($v = \\omega r$). **Tips:** Terkecoh mengira titik yang lebih jauh memiliki kecepatan sudut yang lebih besar."
  },
  {
    "id": "fis-kin-lengkung-gmb-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "sedang",
    "statement": "Sebuah roda turbin berputar secara beraturan dengan kelajuan sudut konstan $\\omega = 40\\pi\\text{ rad/s}$. Banyaknya putaran penuh ($N$) yang telah diselesaikan oleh roda turbin tersebut selama selang waktu $5\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ putaran}$",
      "$200\\text{ putaran}$",
      "$50\\text{ putaran}$",
      "$40\\text{ putaran}$",
      "$80\\text{ putaran}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Posisi sudut yang ditempuh dalam selang waktu $t$ pada GMB adalah $\\theta = \\omega \\cdot t$. Karena satu putaran penuh setara dengan $2\\pi\\text{ radian}$, jumlah putaran adalah:<br>$$N = \\frac{\\theta}{2\\pi} = \\frac{\\omega \\cdot t}{2\\pi}$$",
      "steps": "1. Hitung sudut putar total:<br>$$\\theta = 40\\pi\\text{ rad/s} \\times 5\\text{ s} = 200\\pi\\text{ radian}$$<br>2. Konversi ke banyaknya putaran:<br>$$N = \\frac{200\\pi}{2\\pi} = 100\\text{ putaran}$$",
      "pitfalls": "Lupa membagi dengan faktor $2\\pi$ sehingga menjawab $200\\pi$ atau $200$."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Posisi sudut yang ditempuh dalam selang waktu $t$ pada GMB adalah $\\theta = \\omega \\cdot t$. Karena satu putaran penuh setara dengan $2\\pi\\text{ radian}$, jumlah putaran adalah: $$N = \\frac{\\theta}{2\\pi} = \\frac{\\omega \\cdot t}{2\\pi}$$. **Tips:** Lupa membagi dengan faktor $2\\pi$ sehingga menjawab $200\\pi$ atau $200$."
  },
  {
    "id": "fis-kin-lengkung-gmb-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-gmb",
    "category": "Gerak Melingkar Beraturan (GMB)",
    "difficulty": "sedang",
    "statement": "Dua roda bergigi $A$ dan $B$ saling bertautan (bersinggungan luar) tanpa selip. Roda $A$ memiliki $24\\text{ gigi}$ dan roda $B$ memiliki $72\\text{ gigi}$. Jika roda $A$ diputar dengan frekuensi $12\\text{ Hz}$ searah jarum jam, maka besar frekuensi putaran dan arah putar roda $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ Hz}$, berlawanan arah jarum jam",
      "$4\\text{ Hz}$, searah jarum jam",
      "$36\\text{ Hz}$, berlawanan arah jarum jam",
      "$36\\text{ Hz}$, searah jarum jam",
      "$6\\text{ Hz}$, berlawanan arah jarum jam"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Roda bergigi yang bersinggungan luar memiliki kelajuan linier gigi yang sama ($v_A = v_B$) dan arah putar yang saling berlawanan. Hubungan frekuensi dengan jumlah gigi ($Z$) adalah $f_A Z_A = f_B Z_B$.",
      "steps": "1. Hitung frekuensi roda $B$:<br>$$f_B = f_A \\left( \\frac{Z_A}{Z_B} \\right) = 12\\text{ Hz} \\times \\left( \\frac{24}{72} \\right) = 12 \\times \\frac{1}{3} = 4\\text{ Hz}$$<br>2. Tentukan arah putar: Karena kedua roda bertautan luar, jika roda $A$ berputar searah jarum jam, maka roda $B$ berputar berlawanan arah jarum jam.",
      "pitfalls": "Mengalikan terbalik sehingga mendapatkan $36\\text{ Hz}$ atau lupa bahwa persinggungan luar membalikkan arah putaran."
    },
    "subTopicSlug": "gmb",
    "bab": "Kinematika",
    "subBab": "Gerak Melingkar Beraturan (GMB)",
    "subTopic": "Gerak Melingkar Beraturan (GMB)",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Roda bergigi yang bersinggungan luar memiliki kelajuan linier gigi yang sama ($v_A = v_B$) dan arah putar yang saling berlawanan. Hubungan frekuensi dengan jumlah gigi ($Z$) adalah $f_A Z_A = f_B Z_B$. **Tips:** Mengalikan terbalik sehingga mendapatkan $36\\text{ Hz}$ atau lupa bahwa persinggungan luar membalikkan arah putaran."
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
