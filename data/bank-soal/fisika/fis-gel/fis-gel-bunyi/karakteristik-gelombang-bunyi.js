/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Karakteristik Gelombang Bunyi (fis-gel-bunyi-karakteristik)
 * Slug: karakteristik-gelombang-bunyi
 * Indikator: Gelombang mekanik longitudinal, medium perambatan, nada, desah, resonansi, dan pelayangan bunyi.
 * 
 * Total Butir Soal: 13 (Mudah: 7, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-karakteristik";
  const subTopicSlug = "karakteristik-gelombang-bunyi";
  const questions = [
  {
    "id": "fis-gel-bunyi-karakteristik-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "mudah",
    "statement": "Gelombang bunyi yang merambat melalui udara diklasifikasikan sebagai gelombang mekanik longitudinal. Karakteristik fisis yang mendasari klasifikasi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Arah getar partikel medium sejajar dengan arah rambat gelombang dan membutuhkan medium materi untuk merambat",
      "Arah getar partikel medium tegak lurus dengan arah rambat gelombang dan dapat merambat di ruang hampa",
      "Dapat dipolarisasikan menjadi satu bidang getar tunggal saat melewati celah sempit",
      "Merupakan gelombang transversal yang terbentuk dari osilasi medan listrik dan medan magnetik",
      "Kelajuan perambatannya tidak bergantung pada kerapatan maupun suhu medium"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gelombang bunyi adalah gelombang mekanik longitudinal:<br>1) Mekanik: membutuhkan partikel medium elastis untuk merambat, sehingga bunyi tidak dapat merambat di ruang hampa udara (vakum).<br>2) Longitudinal: arah getaran partikel medium sejajar dengan arah perambatan energi gelombang, membentuk pola rapatan (kompresi) dan renggangan (ekspansi).",
      "steps": "1. Tinjau arah getar: Longitudinal $\\implies$ arah getar sejajar arah rambat.<br>2. Tinjau kebutuhan medium: Mekanik $\\implies$ mutlak membutuhkan medium materi.<br>3. Pilihan yang tepat dan lengkap adalah opsi A.",
      "pitfalls": "Siswa sering terkecoh mengira bunyi dapat dipolarisasi, padahal fenomena polarisasi hanya dapat terjadi pada gelombang transversal (seperti gelombang cahaya)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "mudah",
    "statement": "Rentang frekuensi gelombang bunyi yang dapat didengar secara normal oleh telinga manusia sehat (daerah audiosonik) berada pada kisaran ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kurang dari $20\\text{ Hz}$",
      "$20\\text{ Hz}$ sampai dengan $20.000\\text{ Hz}$",
      "$20.000\\text{ Hz}$ sampai dengan $40.000\\text{ Hz}$",
      "Lebih dari $40.000\\text{ Hz}$",
      "$100\\text{ Hz}$ sampai dengan $1.000\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Klasifikasi gelombang bunyi berdasarkan frekuensinya:<br>• Infrasonik: $f < 20\\text{ Hz}$ (didengar oleh gajah, jangkrik, paus).<br>• Audiosonik: $20\\text{ Hz} \\le f \\le 20.000\\text{ Hz}$ (rentang pendengaran manusia normal).<br>• Ultrasonik: $f > 20.000\\text{ Hz}$ (didengar dan dipancarkan oleh kelelawar, lumba-lumba, alat USG medis).",
      "steps": "1. Rentang audiosonik manusia adalah $20\\text{ Hz} - 20.000\\text{ Hz}$ ($20\\text{ kHz}$).<br>2. Pilihan yang tepat adalah opsi B.",
      "pitfalls": "Jangan tertukar dengan batas infrasonik ($< 20\\text{ Hz}$) atau ultrasonik ($> 20.000\\text{ Hz}$)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "mudah",
    "statement": "Dua alat musik berbeda, misalnya piano dan biola, memainkan nada yang sama pada frekuensi dasar $440\\text{ Hz}$ dengan kuat bunyi yang sama. Namun pendengar tetap dapat membedakan dengan jelas suara kedua alat musik tersebut. Karakteristik gelombang bunyi yang menyebabkan perbedaan ciri khas suara tersebut dinamakan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Intensitas bunyi",
      "Warna bunyi (timbre)",
      "Amplitudo gelombang",
      "Frekuensi pelayangan",
      "Panjang gelombang dasar"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Warna bunyi (timbre) adalah kualitas khas dari suatu bunyi yang membedakannya dari bunyi lain meskipun frekuensi dasar dan amplitudonya sama. Timbre ditentukan oleh bentuk gelombang akustik unik yang dihasilkan dari perpaduan nada harmonik atas (overtones) yang menyertai nada dasar alat musik tersebut.",
      "steps": "1. Frekuensi dasar sama $\\implies$ tinggi nada sama.<br>2. Kuat bunyi sama $\\implies$ amplitudo sama.<br>3. Perbedaan ciri khas suara antara instrumen musik yang berbeda disebut warna bunyi atau timbre (opsi B).",
      "pitfalls": "Siswa sering terkecoh menjawab intensitas bunyi atau amplitudo, padahal intensitas/amplitudo hanya menentukan keras atau lemahnya bunyi (loudness)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "mudah",
    "statement": "Dua buah garputala diletakkan berdekatan dan digetarkan secara bersamaan. Garputala pertama memiliki frekuensi $f_1 = 440\\text{ Hz}$ dan garputala kedua memiliki frekuensi $f_2 = 444\\text{ Hz}$. Banyaknya interferensi bunyi keras-lemah (frekuensi pelayangan bunyi) yang terdengar oleh pengamat setiap sekonnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ Hz}$",
      "$4\\text{ Hz}$",
      "$8\\text{ Hz}$",
      "$442\\text{ Hz}$",
      "$884\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pelayangan bunyi (beats) terjadi akibat interferensi konstruktif dan destruktif dari dua gelombang bunyi yang memiliki amplitudo hampir sama namun frekuensinya sedikit berbeda. Frekuensi pelayangan dirumuskan dengan:<br>$$f_p = |f_1 - f_2|$$",
      "steps": "1. Masukkan nilai kedua frekuensi sumber:<br>• $f_1 = 440\\text{ Hz}$<br>• $f_2 = 444\\text{ Hz}$<br>2. Hitung frekuensi pelayangan:<br>$$f_p = |440\\text{ Hz} - 444\\text{ Hz}| = |-4| = 4\\text{ Hz}$$",
      "pitfalls": "Siswa terkadang salah menghitung rata-rata frekuensi $\\frac{f_1 + f_2}{2} = 442\\text{ Hz}$ (opsi D) atau menjumlahkan kedua frekuensi (opsi E)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "mudah",
    "statement": "Sebuah garputala yang digetarkan di atas kolom udara tabung resonansi dapat menyebabkan udara di dalam tabung ikut bergetar kuat pada ketinggian kolom udara tertentu. Peristiwa ikut bergetarnya suatu benda karena getaran benda lain ini dinamakan resonansi. Syarat fisis terjadinya resonansi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Frekuensi alami sistem yang ikut bergetar harus sama dengan frekuensi sumber getaran",
      "Amplitudo sumber getaran harus lebih besar daripada panjang gelombang medium",
      "Massa jenis medium di dalam tabung harus sama dengan massa jenis garputala",
      "Kecepatan rambat gelombang di udara harus bernilai nol di titik simpul",
      "Sumber getaran harus menghasilkan gelombang elektromagnetik transversal"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resonansi adalah peristiwa ikut bergetarnya suatu sistem fisis ketika dipicu oleh gaya periodik dari luar. Syarat mutlak terjadinya resonansi adalah frekuensi gaya penggetar dari luar tepat menyamai atau kelipatan bulat dari frekuensi alami (natural frequency) sistem tersebut ($f_{\\text{sumber}} = f_{\\text{alami}}$), yang menghasilkan transfer energi maksimum dan amplitudo getaran terbesar.",
      "steps": "1. Evaluasi konsep resonansi: Terjadi saat frekuensi getaran pemicu sama dengan frekuensi alami sistem.<br>2. Dampak: Menghasilkan amplitudo osilasi maksimum.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa sering mengira resonansi membutuhkan amplitudo sumber yang sangat besar, padahal sumber dengan amplitudo kecil pun dapat memicu resonansi kuat jika frekuensinya tepat berimpit dengan frekuensi alami sistem."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "sedang",
    "statement": "Garputala A yang memiliki frekuensi baku $f_A = 300\\text{ Hz}$ dibunyikan bersamaan dengan garputala B yang belum diketahui frekuensinya, menghasilkan pelayangan bunyi dengan frekuensi $f_p = 4\\text{ Hz}$. Ketika salah satu kaki garputala B ditempeli sedikit lilin malam (sehingga frekuensi getaran garputala B menurun), frekuensi pelayangan yang terdengar saat dibunyikan bersama garputala A justru bertambah menjadi $6\\text{ Hz}$. Besar frekuensi asli garputala B sebelum ditempeli lilin malam adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$294\\text{ Hz}$",
      "$296\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$304\\text{ Hz}$",
      "$306\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Frekuensi pelayangan bunyi adalah selisih mutlak antara dua frekuensi yang berinterferensi:<br>$$f_p = |f_A - f_B|$$Penambahan massa lilin pada garputala B akan menambah inersia getarannya sehingga frekuensi alaminya selalu menurun ($f_B' < f_B$).",
      "steps": "1. Tentukan dua kemungkinan awal frekuensi $f_B$:<br>• Kemungkinan 1: $f_B = f_A + f_p = 300 + 4 = 304\\text{ Hz}$<br>• Kemungkinan 2: $f_B = f_A - f_p = 300 - 4 = 296\\text{ Hz}$<br>2. Analisis efek penurunan frekuensi B ($f_B' < f_B$):<br>• Jika $f_B = 304\\text{ Hz}$, penurunan nilai $f_B$ mendekati $300\\text{ Hz}$ akan memperkecil selisih pelayangan ($f_p < 4\\text{ Hz}$).<br>• Jika $f_B = 296\\text{ Hz}$, penurunan nilai $f_B$ (misal menjadi $294\\text{ Hz}$) akan memperjauh jarak terhadap $300\\text{ Hz}$ sehingga frekuensi pelayangan membesar menjadi $|300 - 294| = 6\\text{ Hz}$.<br>3. Kesimpulan: Frekuensi asli garputala B adalah $296\\text{ Hz}$.",
      "pitfalls": "Siswa sering langsung memilih $304\\text{ Hz}$ (opsi D) karena hanya melihat selisih 4 dari 300 tanpa menguji arah perubahan selisih saat frekuensi B diturunkan."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "sedang",
    "statement": "Dua pengeras suara koheren $S_1$ dan $S_2$ terpisah pada jarak tertentu memancarkan gelombang bunyi sefase dengan frekuensi yang sama, yaitu $f = 680\\text{ Hz}$. Cepat rambat gelombang bunyi di udara adalah $v = 340\\text{ m/s}$. Seorang pengamat berada di titik P yang berjarak $r_1 = 4{,}00\\text{ meter}$ dari $S_1$. Besar jarak minimum pengamat tersebut ke sumber $S_2$ ($r_2$) agar di titik P terjadi pelemahan bunyi maksimum pertama (interferensi destruktif pertama) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}50\\text{ meter}$",
      "$3{,}75\\text{ meter}$",
      "$4{,}25\\text{ meter}$",
      "$4{,}50\\text{ meter}$",
      "$4{,}75\\text{ meter}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Syarat interferensi destruktif (bunyi minimum) untuk dua sumber koheren sefase adalah beda lintasan gelombang merupakan kelipatan ganjil dari setengah panjang gelombang:<br>$$\\Delta r = |r_1 - r_2| = \\left(m - \\frac{1}{2}\\right) \\lambda, \\quad m = 1, 2, 3, \\dots$$Di mana $\\lambda = \\frac{v}{f}$.",
      "steps": "1. Hitung panjang gelombang bunyi ($\\lambda$):<br>$$\\lambda = \\frac{v}{f} = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}50\\text{ meter}$$<br>2. Untuk destruktif pertama ($m = 1$):<br>$$\\Delta r = \\frac{1}{2}\\lambda = \\frac{1}{2}(0{,}50\\text{ m}) = 0{,}25\\text{ meter}$$<br>3. Cari nilai $r_2$ yang lebih dekat (minimum) ke pengamat:<br>$$|4{,}00 - r_2| = 0{,}25 \\implies r_2 = 4{,}00 - 0{,}25 = 3{,}75\\text{ meter}$$",
      "pitfalls": "Siswa sering menggunakan syarat interferensi konstruktif $\\Delta r = \\lambda = 0{,}50\\text{ m}$ sehingga menghasilkan $3{,}50\\text{ m}$ (opsi A), atau memilih jarak yang lebih jauh ($4{,}25\\text{ m}$, opsi C) padahal soal menanyakan jarak minimum."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "sedang",
    "statement": "Pada percobaan tabung resonansi kolom udara menggunakan garputala berfrekuensi $f = 500\\text{ Hz}$, resonansi pertama terdengar kuat saat panjang kolom udara di atas permukaan air adalah $L_1 = 16\\text{ cm}$. Saat permukaan air diturunkan lebih lanjut, resonansi kedua berturut-turut terdengar saat panjang kolom udara mencapai $L_2 = 50\\text{ cm}$. Berdasarkan data eksperimen tersebut, cepat rambat gelombang bunyi di udara saat percobaan dan nilai koreksi ujung tabung ($\\Delta L$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$320\\text{ m/s}$ dan $0{,}5\\text{ cm}$",
      "$340\\text{ m/s}$ dan $1{,}0\\text{ cm}$",
      "$340\\text{ m/s}$ dan $2{,}0\\text{ cm}$",
      "$360\\text{ m/s}$ dan $1{,}0\\text{ cm}$",
      "$360\\text{ m/s}$ dan $2{,}5\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada tabung resonansi tertutup satu ujung:<br>1) Selisih panjang kolom udara antara dua resonansi berurutan selalu tepat sama dengan setengah panjang gelombang (bebas dari efek koreksi ujung tabung):<br>$$L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>2) Cepat rambat gelombang: $v = f \\cdot \\lambda$.<br>3) Hubungan resonansi pertama dengan koreksi ujung tabung ($\\Delta L$): $L_1 + \\Delta L = \\frac{1}{4}\\lambda$.",
      "steps": "1. Hitung panjang gelombang ($\\lambda$):<br>$$\\lambda = 2(50\\text{ cm} - 16\\text{ cm}) = 2(34\\text{ cm}) = 68\\text{ cm} = 0{,}68\\text{ m}$$<br>2. Hitung cepat rambat bunyi ($v$):<br>$$v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}68\\text{ m} = 340\\text{ m/s}$$<br>3. Hitung koreksi ujung tabung ($\\Delta L$):<br>$$\\frac{1}{4}\\lambda = \\frac{68\\text{ cm}}{4} = 17\\text{ cm}$$<br>$$\\Delta L = 17\\text{ cm} - L_1 = 17\\text{ cm} - 16\\text{ cm} = 1{,}0\\text{ cm}$$",
      "pitfalls": "Siswa sering mengabaikan adanya koreksi ujung tabung dan langsung menghitung $\\lambda = 4 L_1 = 64\\text{ cm}$ yang menghasilkan cepat rambat $320\\text{ m/s}$ (opsi A)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "sedang",
    "statement": "Pada gelombang bunyi stasioner longitudinal di dalam tabung organa, terdapat hubungan mendasar antara fluktuasi simpangan partikel udara (displacement) dan fluktuasi tekanan akustik fluida (pressure). Pernyataan yang tepat mengenai hubungan spasial keduanya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Titik simpul simpangan selalu berimpit dengan titik simpul tekanan, dan perut simpangan berimpit dengan perut tekanan",
      "Titik simpul simpangan berimpit dengan titik perut tekanan, sehingga di ujung pipa tertutup terjadi simpul simpangan dan perut tekanan",
      "Titik perut simpangan selalu berimpit dengan titik perut tekanan di ujung pipa tertutup",
      "Fluktuasi tekanan bernilai maksimum di titik perut simpangan karena kelajuan partikel di titik tersebut maksimum",
      "Perubahan tekanan fluida selalu mendahului simpangan partikel sebesar sudut fase $180^\\circ$ di setiap titik"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gelombang bunyi stasioner memiliki hubungan dualitas antara simpangan partikel ($s(x)$) dan variasi tekanan ($\\Delta P(x)$):<br>$$\\Delta P(x) = -B \\frac{\\partial s}{\\partial x}$$Karena tekanan merupakan turunan spasial dari simpangan, gelombang tekanan berbeda fase spasial sebesar $\\frac{\\pi}{2}$ ($90^\\circ$) terhadap gelombang simpangan:<br>• Simpul simpangan (partikel diam) $\\iff$ Perut tekanan (tekanan berfluktuasi maksimum).<br>• Perut simpangan (partikel bebas bergerak) $\\iff$ Simpul tekanan (tekanan sama dengan tekanan atmosfer luar).",
      "steps": "1. Pada ujung tertutup pipa, partikel udara tidak dapat bergeser $\\implies$ simpul simpangan.<br>2. Molekul menumpuk dan memadat di dinding ujung tertutup $\\implies$ fluktuasi tekanan mencapai maksimum (perut tekanan).<br>3. Pernyataan yang benar dan baku adalah opsi B.",
      "pitfalls": "Siswa sering mengira perut simpangan selalu terjadi bersamaan dengan perut tekanan, padahal keduanya berselisih fase seperempat panjang gelombang (saling berkebalikan)."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-karakteristik-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Karakteristik Gelombang Bunyi",
    "difficulty": "sedang",
    "statement": "Sebuah dawai baja gitar dibunyikan bersamaan dengan garputala standar yang memiliki frekuensi tetap $f_g = 512\\text{ Hz}$. Interferensi keduanya menghasilkan pelayangan bunyi dengan frekuensi $6\\text{ Hz}$. Ketika tegangan dawai gitar dinaikkan secara perlahan, frekuensi pelayangan bunyi yang terdengar berkurang menjadi $2\\text{ Hz}$. Besar frekuensi getaran dawai gitar sebelum tegangannya dinaikkan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$506\\text{ Hz}$",
      "$510\\text{ Hz}$",
      "$514\\text{ Hz}$",
      "$518\\text{ Hz}$",
      "$524\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Frekuensi getaran dawai berbanding lurus dengan cepat rambat gelombang transversal pada dawai (Hukum Melde):<br>$$f \\propto v = \\sqrt{\\frac{F}{\\mu}}$$Sehingga peningkatan gaya tegangan dawai ($F$) dipastikan akan menaikkan frekuensi getaran dawai ($f_{\\text{dawai}}' > f_{\\text{dawai}}$).",
      "steps": "1. Tentukan dua kemungkinan awal frekuensi dawai:<br>• Kemungkinan 1: $f_1 = 512 + 6 = 518\\text{ Hz}$<br>• Kemungkinan 2: $f_1 = 512 - 6 = 506\\text{ Hz}$<br>2. Analisis efek kenaikan tegangan (frekuensi dawai naik):<br>• Jika frekuensi awal $518\\text{ Hz}$, penaikan frekuensi (misal menjadi $520\\text{ Hz}$) akan memperbesar pelayangan ($|520 - 512| = 8\\text{ Hz}$).<br>• Jika frekuensi awal $506\\text{ Hz}$, penaikan frekuensi (misal menjadi $510\\text{ Hz}$) akan memperkecil pelayangan menjadi $|510 - 512| = 2\\text{ Hz}$.<br>3. Maka frekuensi awal dawai adalah $506\\text{ Hz}$.",
      "pitfalls": "Siswa sering memilih $518\\text{ Hz}$ (opsi D) karena lupa bahwa kenaikan tegangan dawai memperbesar frekuensi dawai, sehingga bila frekuensi awalnya lebih tinggi dari garputala, pelayangan seharusnya bertambah besar."
    },
    "subTopicSlug": "karakteristik-gelombang-bunyi",
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Pengaruh Suhu terhadap Kelajuan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Kelajuan rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 320\\text{ m/s}$. Jika gas tersebut dipanaskan hingga suhu mutlaknya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan rambat bunyi di dalam gas tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$640\\text{ m/s}$",
      "$480\\text{ m/s}$",
      "$1280\\text{ m/s}$",
      "$960\\text{ m/s}$",
      "$320\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kelajuan Bunyi pada Gas Ideal:</strong><br>$$v = \\sqrt{\\frac{\\gamma R T}{M_r}} \\implies v \\propto \\sqrt{T}$$<br>Kelajuan bunyi berbanding lurus dengan <strong>akar suhu mutlak</strong> (Kelvin).</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{1200}{300} = 4$.</li><li>Perbandingan kelajuan: $\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2$.</li><li>Kelajuan akhir: $v_2 = 2 \\times v_1 = 2 \\times 320 = 640\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap hubungan linear $v \\propto T$ sehingga mengalikan 4 kali lipat ($1280\\text{ m/s}$). Yang benar adalah sebanding dengan akar kuadrat $\\sqrt{T}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
  },
  {
    "id": "drill-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Fenomena Pelayangan Bunyi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah garpu tala $A$ dan $B$ dibunyikan secara bersamaan. Garpu tala $A$ memiliki frekuensi $440\\text{ Hz}$. Jika terdengar $4$ layangan bunyi setiap detiknya, maka frekuensi yang mungkin dari garpu tala $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$436\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$440\\text{ Hz}$ atau $448\\text{ Hz}$",
      "$220\\text{ Hz}$ atau $880\\text{ Hz}$",
      "$110\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$438\\text{ Hz}$ atau $442\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Frekuensi Pelayangan Bunyi (Beats):</strong><br>Frekuensi pelayangan adalah selisih mutlak dari dua frekuensi gelombang bunyi yang berinterferensi:<br>$$f_{\\text{layang}} = |f_A - f_B|$$</div>",
      "steps": "<ol><li>Diketahui $f_{\\text{layang}} = 4\\text{ Hz}$ dan $f_A = 440\\text{ Hz}$.</li><li>Kemungkinan 1: $f_B = f_A + f_{\\text{layang}} = 440 + 4 = 444\\text{ Hz}$.</li><li>Kemungkinan 2: $f_B = f_A - f_{\\text{layang}} = 440 - 4 = 436\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Pelayangan bunyi selalu berupa selisih sederhana ($|f_1 - f_2|$), bukan rata-rata atau rasio.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
  },
  {
    "id": "drill-bun-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-karakteristik",
    "category": "Resonansi Kolom Udara Tabung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dalam percobaan resonansi tabung kolom udara menggunakan garpu tala berfrekuensi $f = 500\\text{ Hz}$, terjadi resonansi pertama pada panjang kolom udara $L_1 = 18\\text{ cm}$ dan resonansi kedua terjadi pada $L_2 = 54\\text{ cm}$. Kelajuan rambat bunyi di udara berdasarkan percobaan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$360\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$320\\text{ m/s}$",
      "$300\\text{ m/s}$",
      "$270\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Selisih Resonansi Berurutan Tabung Bunyi:</strong><br>Jarak antara dua resonansi berurutan selalu tepat sama dengan <strong>setengah panjang gelombang</strong>:<br>$$\\Delta L = L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>$$v = f \\cdot \\lambda$$</div>",
      "steps": "<ol><li>Hitung selisih panjang kolom udara: $\\Delta L = 54\\text{ cm} - 18\\text{ cm} = 36\\text{ cm} = 0{,}36\\text{ m}$.</li><li>Panjang gelombang bunyi: $\\lambda = 2 \\times 0{,}36\\text{ m} = 0{,}72\\text{ m}$.</li><li>Kelajuan bunyi: $v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}72\\text{ m} = 360\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Trik Cepat:</strong> Selisih dua resonansi berturutan $\\Delta L = \\frac{1}{2}\\lambda$, sehingga $\\lambda = 2\\Delta L$. Tidak perlu mengkhawatirkan koreksi ujung tabung.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Karakteristik Gelombang Bunyi",
    "subTopic": "Karakteristik Gelombang Bunyi",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "karakteristik-gelombang-bunyi"
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
