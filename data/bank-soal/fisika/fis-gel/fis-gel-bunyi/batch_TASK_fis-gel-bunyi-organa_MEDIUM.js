/**
 * Batch Task: TASK_fis-gel-bunyi-organa_MEDIUM
 * SubTopic: Pipa Organa (fis-gel-bunyi-organa)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-organa-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "sedang",
    statement: "Nada atas pertama sebuah pipa organa terbuka beresonansi tepat sama dengan nada atas kedua sebuah pipa organa tertutup pada ruangan dengan suhu dan kondisi udara yang sama. Jika panjang pipa organa terbuka adalah $L_{\\text{terbuka}} = 40\\text{ cm}$, maka panjang pipa organa tertutup ($L_{\\text{tertutup}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ cm}$",
      "$32\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "1) Frekuensi nada atas pertama ($n = 1$) pipa organa terbuka:<br>$$f_{1,\\text{terbuka}} = 2 \\cdot \\frac{v}{2 L_{\\text{terbuka}}} = \\frac{v}{L_{\\text{terbuka}}}$$<br>2) Frekuensi nada atas kedua ($n = 2$) pipa organa tertutup:<br>$$f_{2,\\text{tertutup}} = (2(2) + 1) \\cdot \\frac{v}{4 L_{\\text{tertutup}}} = \\frac{5v}{4 L_{\\text{tertutup}}}$$<br>3) Kondisi resonansi: $f_{1,\\text{terbuka}} = f_{2,\\text{tertutup}}$.",
      steps: "1. Samakan kedua persamaan frekuensi resonansi:<br>$$\\frac{v}{L_{\\text{terbuka}}} = \\frac{5v}{4 L_{\\text{tertutup}}}$$<br>2. Bagi kedua ruas dengan $v$ dan substitusikan $L_{\\text{terbuka}} = 40\\text{ cm}$:<br>$$\\frac{1}{40\\text{ cm}} = \\frac{5}{4 L_{\\text{tertutup}}} \\implies 4 L_{\\text{tertutup}} = 40 \\times 5 = 200\\text{ cm}$$<br>$$L_{\\text{tertutup}} = \\frac{200\\text{ cm}}{4} = 50\\text{ cm}$$",
      pitfalls: "Siswa sering salah menentukan harmonik nada atas kedua pipa tertutup, menganggapnya sebagai harmonik ke-3 ($3v / 4L$), padahal deret pipa tertutup adalah nada dasar ($1v/4L$), nada atas pertama ($3v/4L$), dan nada atas kedua ($5v/4L$)."
    }
  },
  {
    id: "fis-gel-bunyi-organa-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "sedang",
    statement: "Sebuah pipa organa terbuka yang ditiup menggunakan udara biasa (cepat rambat bunyi $v_{\\text{udara}} = 340\\text{ m/s}$) menghasilkan frekuensi nada dasar sebesar $f_0 = 340\\text{ Hz}$. Jika seluruh udara di dalam pipa organa tersebut digantikan dengan gas helium pada suhu yang sama di mana cepat rambat bunyi di dalam gas helium adalah $v_{\\text{He}} = 1020\\text{ m/s}$, frekuensi nada dasar yang baru dihasilkan oleh pipa organa tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$113\\text{ Hz}$",
      "$340\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$1.020\\text{ Hz}$",
      "$1.360\\text{ Hz}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Frekuensi nada dasar pipa organa terbuka berbanding lurus dengan cepat rambat bunyi di dalam medium gas pengisi pipa:<br>$$f_0 = \\frac{v}{2L} \\implies \\frac{f_{0,\\text{He}}}{f_{0,\\text{udara}}} = \\frac{v_{\\text{He}}}{v_{\\text{udara}}}$$Panjang tabung pipa organa ($L$) tetap konstan.",
      steps: "1. Hitung rasio cepat rambat bunyi:<br>$$\\frac{v_{\\text{He}}}{v_{\\text{udara}}} = \\frac{1020\\text{ m/s}}{340\\text{ m/s}} = 3$$<br>2. Hitung frekuensi nada dasar baru di dalam gas helium:<br>$$f_{0,\\text{He}} = 3 \\times f_{0,\\text{udara}} = 3 \\times 340\\text{ Hz} = 1.020\\text{ Hz}$$",
      pitfalls: "Siswa terkadang mengira frekuensi bunyi suatu alat musik selalu tetap dan tidak terpengaruh oleh medium gas pengisinya, padahal panjang gelombang yang dikunci oleh geometri pipa ($L = \\lambda/2$), sehingga frekuensi berubah mengikuti cepat rambat bunyi medium."
    }
  },
  {
    id: "fis-gel-bunyi-organa-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "sedang",
    statement: "Sebuah pipa organa terbuka dengan panjang fisik tabung $L = 57\\text{ cm}$ memiliki penampang lingkaran dengan jari-jari $r = 2{,}5\\text{ cm}$. Karena ujung tabung terbuka ke udara bebas, perut gelombang stasioner terbentuk sedikit di luar mulut tabung dengan nilai koreksi ujung tabung sebesar $\\Delta L = 0{,}60 r$ pada masing-masing ujung terbuka. Jika cepat rambat bunyi di udara adalah $v = 360\\text{ m/s}$, frekuensi nada dasar sesungguhnya ($f_0$) yang dihasilkan pipa tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$280\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$316\\text{ Hz}$",
      "$333\\text{ Hz}$",
      "$360\\text{ Hz}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada pipa organa terbuka dengan memperhitungkan koreksi ujung (end correction), panjang akustik efektif ($L_{\\text{efektif}}$) adalah panjang fisik ditambah koreksi pada kedua ujung terbukanya:<br>$$L_{\\text{efektif}} = L + 2 \\Delta L = L + 2(0{,}60 r)$$Frekuensi nada dasar sesungguhnya dihitung dengan:<br>$$f_0 = \\frac{v}{2 L_{\\text{efektif}}}$$",
      steps: "1. Hitung koreksi ujung per mulut pipa:<br>$$\\Delta L = 0{,}60 \\times 2{,}5\\text{ cm} = 1{,}5\\text{ cm}$$<br>2. Hitung panjang akustik efektif pipa (dua ujung terbuka):<br>$$L_{\\text{efektif}} = 57\\text{ cm} + 2(1{,}5\\text{ cm}) = 57\\text{ cm} + 3\\text{ cm} = 60\\text{ cm} = 0{,}60\\text{ m}$$<br>3. Hitung frekuensi nada dasar sesungguhnya:<br>$$f_0 = \\frac{360\\text{ m/s}}{2 \\times 0{,}60\\text{ m}} = \\frac{360}{1{,}20} = 300\\text{ Hz}$$",
      pitfalls: "Siswa sering mengabaikan koreksi ujung dan langsung menghitung $\\frac{360}{2 \\times 0{,}57} \\approx 316\\text{ Hz}$ (opsi C), atau hanya menambahkan koreksi pada salah satu ujung saja."
    }
  },
  {
    id: "fis-gel-bunyi-organa-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "sedang",
    statement: "Sebuah pipa organa tertutup dengan panjang $L = 75\\text{ cm}$ ditiup sehingga menghasilkan nada atas kedua. Jumlah titik simpul simpangan ($S$) dan titik perut simpangan ($P$) yang terbentuk di dalam kolom udara pipa, serta letak titik simpul terjauh diukur dari ujung tertutup pipa berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$S = 2$, $P = 2$, dan letak simpul terjauh $x = 50\\text{ cm}$",
      "$S = 3$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$",
      "$S = 3$, $P = 3$, dan letak simpul terjauh $x = 75\\text{ cm}$",
      "$S = 4$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$",
      "$S = 3$, $P = 4$, dan letak simpul terjauh $x = 50\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada pipa organa tertutup nada atas ke-$n$ ($n = 2$ untuk nada atas kedua):<br>1) Pola gelombang: $L = (2n + 1) \\frac{\\lambda}{4} = \\frac{5}{4}\\lambda$.<br>2) Jumlah simpul simpangan $S = n + 1 = 3$ simpul.<br>3) Jumlah perut simpangan $P = n + 1 = 3$ perut.<br>4) Letak simpul simpangan dari ujung tertutup ($x = 0$): $x_k = (k - 1) \\frac{\\lambda}{2}$ untuk $k = 1, 2, 3$.",
      steps: "1. Hitung panjang gelombang ($\\lambda$):<br>$$L = \\frac{5}{4}\\lambda \\implies 75\\text{ cm} = \\frac{5}{4}\\lambda \\implies \\lambda = \\frac{4 \\times 75\\text{ cm}}{5} = 60\\text{ cm}$$<br>2. Tentukan posisi simpul dari ujung tertutup:<br>• Simpul ke-1: $x_1 = 0\\text{ cm}$ (ujung tertutup)<br>• Simpul ke-2: $x_2 = \\frac{\\lambda}{2} = 30\\text{ cm}$<br>• Simpul ke-3 (terjauh): $x_3 = \\lambda = 60\\text{ cm}$<br>3. Jawaban yang tepat adalah $S = 3$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$ (opsi B).",
      pitfalls: "Terkecoh mengira simpul terjauh berada di bibir pipa ($x = 75\\text{ cm}$, opsi C), padahal bibir pipa yang terbuka selalu berupa perut simpangan."
    }
  },
  {
    id: "fis-gel-bunyi-organa-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-organa",
    category: "Pipa Organa",
    difficulty: "sedang",
    statement: "Sebuah pipa organa terbuka dengan panjang awal $L_0 = 80\\text{ cm}$ menghasilkan frekuensi nada dasar sebesar $f_0$. Pipa tersebut kemudian dimasukkan secara vertikal ke dalam bak air sedalam $h = 20\\text{ cm}$ sehingga bagian pipa yang tercelup air tertutup rapat oleh air, mengubah pipa menjadi pipa organa tertutup dengan kolom udara aktif di atas air. Perbandingan frekuensi nada dasar pipa mula-mula terhadap frekuensi nada dasar pipa setelah dicelupkan ke dalam air ($f_0 : f_1$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4 : 3$",
      "$3 : 2$",
      "$2 : 1$",
      "$3 : 4$",
      "$1 : 2$"
    ],
    correctIndex: 1,
    solution: {
      concept: "1) Frekuensi nada dasar pipa organa terbuka mula-mula:<br>$$f_0 = \\frac{v}{2 L_0}$$<br>2) Setelah dicelupkan sedalam $h$, panjang kolom udara aktif yang tersisa di atas air adalah $L_1 = L_0 - h$. Karena ujung bawah tertutup oleh air, pipa berperilaku sebagai pipa organa tertutup dengan nada dasar:<br>$$f_1 = \\frac{v}{4 L_1}$$",
      steps: "1. Hitung panjang kolom udara pipa tertutup:<br>$$L_1 = 80\\text{ cm} - 20\\text{ cm} = 60\\text{ cm}$$<br>2. Tuliskan perbandingan frekuensi:<br>$$\\frac{f_0}{f_1} = \\frac{\\frac{v}{2 L_0}}{\\frac{v}{4 L_1}} = \\frac{4 L_1}{2 L_0} = \\frac{2 L_1}{L_0}$$<br>3. Masukkan nilai panjang kolom:<br>$$\\frac{f_0}{f_1} = \\frac{2 \\times 60\\text{ cm}}{80\\text{ cm}} = \\frac{120}{80} = \\frac{3}{2}$$<br>4. Maka perbandingannya adalah $3 : 2$.",
      pitfalls: "Siswa sering lupa bahwa pipa terbuka memiliki penyebut $2L$ sedangkan pipa tertutup memiliki penyebut $4L$, sehingga keliru menghitung rasio panjang semata ($80 : 60 = 4 : 3$, opsi A)."
    }
  }
];
