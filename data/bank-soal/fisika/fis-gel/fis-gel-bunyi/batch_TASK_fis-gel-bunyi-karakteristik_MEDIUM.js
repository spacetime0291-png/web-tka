/**
 * Batch Task: TASK_fis-gel-bunyi-karakteristik_MEDIUM
 * SubTopic: Karakteristik Gelombang Bunyi (fis-gel-bunyi-karakteristik)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-karakteristik-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-karakteristik",
    category: "Karakteristik Gelombang Bunyi",
    difficulty: "sedang",
    statement: "Garputala A yang memiliki frekuensi baku $f_A = 300\\text{ Hz}$ dibunyikan bersamaan dengan garputala B yang belum diketahui frekuensinya, menghasilkan pelayangan bunyi dengan frekuensi $f_p = 4\\text{ Hz}$. Ketika salah satu kaki garputala B ditempeli sedikit lilin malam (sehingga frekuensi getaran garputala B menurun), frekuensi pelayangan yang terdengar saat dibunyikan bersama garputala A justru bertambah menjadi $6\\text{ Hz}$. Besar frekuensi asli garputala B sebelum ditempeli lilin malam adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$294\\text{ Hz}$",
      "$296\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$304\\text{ Hz}$",
      "$306\\text{ Hz}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Frekuensi pelayangan bunyi adalah selisih mutlak antara dua frekuensi yang berinterferensi:<br>$$f_p = |f_A - f_B|$$Penambahan massa lilin pada garputala B akan menambah inersia getarannya sehingga frekuensi alaminya selalu menurun ($f_B' < f_B$).",
      steps: "1. Tentukan dua kemungkinan awal frekuensi $f_B$:<br>• Kemungkinan 1: $f_B = f_A + f_p = 300 + 4 = 304\\text{ Hz}$<br>• Kemungkinan 2: $f_B = f_A - f_p = 300 - 4 = 296\\text{ Hz}$<br>2. Analisis efek penurunan frekuensi B ($f_B' < f_B$):<br>• Jika $f_B = 304\\text{ Hz}$, penurunan nilai $f_B$ mendekati $300\\text{ Hz}$ akan memperkecil selisih pelayangan ($f_p < 4\\text{ Hz}$).<br>• Jika $f_B = 296\\text{ Hz}$, penurunan nilai $f_B$ (misal menjadi $294\\text{ Hz}$) akan memperjauh jarak terhadap $300\\text{ Hz}$ sehingga frekuensi pelayangan membesar menjadi $|300 - 294| = 6\\text{ Hz}$.<br>3. Kesimpulan: Frekuensi asli garputala B adalah $296\\text{ Hz}$.",
      pitfalls: "Siswa sering langsung memilih $304\\text{ Hz}$ (opsi D) karena hanya melihat selisih 4 dari 300 tanpa menguji arah perubahan selisih saat frekuensi B diturunkan."
    }
  },
  {
    id: "fis-gel-bunyi-karakteristik-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-karakteristik",
    category: "Karakteristik Gelombang Bunyi",
    difficulty: "sedang",
    statement: "Dua pengeras suara koheren $S_1$ dan $S_2$ terpisah pada jarak tertentu memancarkan gelombang bunyi sefase dengan frekuensi yang sama, yaitu $f = 680\\text{ Hz}$. Cepat rambat gelombang bunyi di udara adalah $v = 340\\text{ m/s}$. Seorang pengamat berada di titik P yang berjarak $r_1 = 4{,}00\\text{ meter}$ dari $S_1$. Besar jarak minimum pengamat tersebut ke sumber $S_2$ ($r_2$) agar di titik P terjadi pelemahan bunyi maksimum pertama (interferensi destruktif pertama) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3{,}50\\text{ meter}$",
      "$3{,}75\\text{ meter}$",
      "$4{,}25\\text{ meter}$",
      "$4{,}50\\text{ meter}$",
      "$4{,}75\\text{ meter}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Syarat interferensi destruktif (bunyi minimum) untuk dua sumber koheren sefase adalah beda lintasan gelombang merupakan kelipatan ganjil dari setengah panjang gelombang:<br>$$\\Delta r = |r_1 - r_2| = \\left(m - \\frac{1}{2}\\right) \\lambda, \\quad m = 1, 2, 3, \\dots$$Di mana $\\lambda = \\frac{v}{f}$.",
      steps: "1. Hitung panjang gelombang bunyi ($\\lambda$):<br>$$\\lambda = \\frac{v}{f} = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}50\\text{ meter}$$<br>2. Untuk destruktif pertama ($m = 1$):<br>$$\\Delta r = \\frac{1}{2}\\lambda = \\frac{1}{2}(0{,}50\\text{ m}) = 0{,}25\\text{ meter}$$<br>3. Cari nilai $r_2$ yang lebih dekat (minimum) ke pengamat:<br>$$|4{,}00 - r_2| = 0{,}25 \\implies r_2 = 4{,}00 - 0{,}25 = 3{,}75\\text{ meter}$$",
      pitfalls: "Siswa sering menggunakan syarat interferensi konstruktif $\\Delta r = \\lambda = 0{,}50\\text{ m}$ sehingga menghasilkan $3{,}50\\text{ m}$ (opsi A), atau memilih jarak yang lebih jauh ($4{,}25\\text{ m}$, opsi C) padahal soal menanyakan jarak minimum."
    }
  },
  {
    id: "fis-gel-bunyi-karakteristik-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-karakteristik",
    category: "Karakteristik Gelombang Bunyi",
    difficulty: "sedang",
    statement: "Pada percobaan tabung resonansi kolom udara menggunakan garputala berfrekuensi $f = 500\\text{ Hz}$, resonansi pertama terdengar kuat saat panjang kolom udara di atas permukaan air adalah $L_1 = 16\\text{ cm}$. Saat permukaan air diturunkan lebih lanjut, resonansi kedua berturut-turut terdengar saat panjang kolom udara mencapai $L_2 = 50\\text{ cm}$. Berdasarkan data eksperimen tersebut, cepat rambat gelombang bunyi di udara saat percobaan dan nilai koreksi ujung tabung ($\\Delta L$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$320\\text{ m/s}$ dan $0{,}5\\text{ cm}$",
      "$340\\text{ m/s}$ dan $1{,}0\\text{ cm}$",
      "$340\\text{ m/s}$ dan $2{,}0\\text{ cm}$",
      "$360\\text{ m/s}$ dan $1{,}0\\text{ cm}$",
      "$360\\text{ m/s}$ dan $2{,}5\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada tabung resonansi tertutup satu ujung:<br>1) Selisih panjang kolom udara antara dua resonansi berurutan selalu tepat sama dengan setengah panjang gelombang (bebas dari efek koreksi ujung tabung):<br>$$L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>2) Cepat rambat gelombang: $v = f \\cdot \\lambda$.<br>3) Hubungan resonansi pertama dengan koreksi ujung tabung ($\\Delta L$): $L_1 + \\Delta L = \\frac{1}{4}\\lambda$.",
      steps: "1. Hitung panjang gelombang ($\\lambda$):<br>$$\\lambda = 2(50\\text{ cm} - 16\\text{ cm}) = 2(34\\text{ cm}) = 68\\text{ cm} = 0{,}68\\text{ m}$$<br>2. Hitung cepat rambat bunyi ($v$):<br>$$v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}68\\text{ m} = 340\\text{ m/s}$$<br>3. Hitung koreksi ujung tabung ($\\Delta L$):<br>$$\\frac{1}{4}\\lambda = \\frac{68\\text{ cm}}{4} = 17\\text{ cm}$$<br>$$\\Delta L = 17\\text{ cm} - L_1 = 17\\text{ cm} - 16\\text{ cm} = 1{,}0\\text{ cm}$$",
      pitfalls: "Siswa sering mengabaikan adanya koreksi ujung tabung dan langsung menghitung $\\lambda = 4 L_1 = 64\\text{ cm}$ yang menghasilkan cepat rambat $320\\text{ m/s}$ (opsi A)."
    }
  },
  {
    id: "fis-gel-bunyi-karakteristik-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-karakteristik",
    category: "Karakteristik Gelombang Bunyi",
    difficulty: "sedang",
    statement: "Pada gelombang bunyi stasioner longitudinal di dalam tabung organa, terdapat hubungan mendasar antara fluktuasi simpangan partikel udara (displacement) dan fluktuasi tekanan akustik fluida (pressure). Pernyataan yang tepat mengenai hubungan spasial keduanya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Titik simpul simpangan selalu berimpit dengan titik simpul tekanan, dan perut simpangan berimpit dengan perut tekanan",
      "Titik simpul simpangan berimpit dengan titik perut tekanan, sehingga di ujung pipa tertutup terjadi simpul simpangan dan perut tekanan",
      "Titik perut simpangan selalu berimpit dengan titik perut tekanan di ujung pipa tertutup",
      "Fluktuasi tekanan bernilai maksimum di titik perut simpangan karena kelajuan partikel di titik tersebut maksimum",
      "Perubahan tekanan fluida selalu mendahului simpangan partikel sebesar sudut fase $180^\\circ$ di setiap titik"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gelombang bunyi stasioner memiliki hubungan dualitas antara simpangan partikel ($s(x)$) dan variasi tekanan ($\\Delta P(x)$):<br>$$\\Delta P(x) = -B \\frac{\\partial s}{\\partial x}$$Karena tekanan merupakan turunan spasial dari simpangan, gelombang tekanan berbeda fase spasial sebesar $\\frac{\\pi}{2}$ ($90^\\circ$) terhadap gelombang simpangan:<br>• Simpul simpangan (partikel diam) $\\iff$ Perut tekanan (tekanan berfluktuasi maksimum).<br>• Perut simpangan (partikel bebas bergerak) $\\iff$ Simpul tekanan (tekanan sama dengan tekanan atmosfer luar).",
      steps: "1. Pada ujung tertutup pipa, partikel udara tidak dapat bergeser $\\implies$ simpul simpangan.<br>2. Molekul menumpuk dan memadat di dinding ujung tertutup $\\implies$ fluktuasi tekanan mencapai maksimum (perut tekanan).<br>3. Pernyataan yang benar dan baku adalah opsi B.",
      pitfalls: "Siswa sering mengira perut simpangan selalu terjadi bersamaan dengan perut tekanan, padahal keduanya berselisih fase seperempat panjang gelombang (saling berkebalikan)."
    }
  },
  {
    id: "fis-gel-bunyi-karakteristik-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-karakteristik",
    category: "Karakteristik Gelombang Bunyi",
    difficulty: "sedang",
    statement: "Sebuah dawai baja gitar dibunyikan bersamaan dengan garputala standar yang memiliki frekuensi tetap $f_g = 512\\text{ Hz}$. Interferensi keduanya menghasilkan pelayangan bunyi dengan frekuensi $6\\text{ Hz}$. Ketika tegangan dawai gitar dinaikkan secara perlahan, frekuensi pelayangan bunyi yang terdengar berkurang menjadi $2\\text{ Hz}$. Besar frekuensi getaran dawai gitar sebelum tegangannya dinaikkan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$506\\text{ Hz}$",
      "$510\\text{ Hz}$",
      "$514\\text{ Hz}$",
      "$518\\text{ Hz}$",
      "$524\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Frekuensi getaran dawai berbanding lurus dengan cepat rambat gelombang transversal pada dawai (Hukum Melde):<br>$$f \\propto v = \\sqrt{\\frac{F}{\\mu}}$$Sehingga peningkatan gaya tegangan dawai ($F$) dipastikan akan menaikkan frekuensi getaran dawai ($f_{\\text{dawai}}' > f_{\\text{dawai}}$).",
      steps: "1. Tentukan dua kemungkinan awal frekuensi dawai:<br>• Kemungkinan 1: $f_1 = 512 + 6 = 518\\text{ Hz}$<br>• Kemungkinan 2: $f_1 = 512 - 6 = 506\\text{ Hz}$<br>2. Analisis efek kenaikan tegangan (frekuensi dawai naik):<br>• Jika frekuensi awal $518\\text{ Hz}$, penaikan frekuensi (misal menjadi $520\\text{ Hz}$) akan memperbesar pelayangan ($|520 - 512| = 8\\text{ Hz}$).<br>• Jika frekuensi awal $506\\text{ Hz}$, penaikan frekuensi (misal menjadi $510\\text{ Hz}$) akan memperkecil pelayangan menjadi $|510 - 512| = 2\\text{ Hz}$.<br>3. Maka frekuensi awal dawai adalah $506\\text{ Hz}$.",
      pitfalls: "Siswa sering memilih $518\\text{ Hz}$ (opsi D) karena lupa bahwa kenaikan tegangan dawai memperbesar frekuensi dawai, sehingga bila frekuensi awalnya lebih tinggi dari garputala, pelayangan seharusnya bertambah besar."
    }
  }
];
