/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Pipa Organa (fis-gel-bunyi-organa)
 * Slug: pipa-organa
 * Indikator: Frekuensi resonansi nada pipa organa terbuka dan pipa organa tertutup.
 * 
 * Total Butir Soal: 14 (Mudah: 9, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-organa";
  const subTopicSlug = "pipa-organa";
  const questions = [
  {
    "id": "fis-gel-bunyi-organa-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "mudah",
    "statement": "Pada pipa organa terbuka, kedua ujung pipa berhubungan langsung dengan udara bebas sehingga partikel udara di kedua ujung dapat bergetar bebas. Pola gelombang stasioner simpangan dan perbandingan frekuensi nada harmonik yang dihasilkan oleh pipa organa terbuka adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kedua ujungnya selalu merupakan titik perut, dengan perbandingan frekuensi harmonik $1 : 2 : 3 : 4 : \\dots$",
      "Kedua ujungnya selalu merupakan titik simpul, dengan perbandingan frekuensi harmonik $1 : 3 : 5 : 7 : \\dots$",
      "Salah satu ujung merupakan simpul dan ujung lain perut, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya selalu merupakan titik perut, dengan perbandingan frekuensi harmonik $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya selalu merupakan titik simpul, dengan perbandingan frekuensi harmonik $1 : 2 : 3 : 4 : \\dots$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pipa organa terbuka memiliki kedua ujung yang terbuka ke atmosfer:<br>1) Di kedua ujung terbuka, partikel fluida bebas berosilasi dengan amplitudo maksimum $\\implies$ kedua ujung berupa perut simpangan.<br>2) Panjang kolom pada nada dasar: $L = \\frac{1}{2}\\lambda_0 \\implies f_0 = \\frac{v}{2L}$.<br>3) Frekuensi harmonik ke-$n$ memenuhi seluruh kelipatan bulat bulat positif:<br>$$f_n = (n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : 4 : \\dots$$",
      "steps": "1. Tinjau kondisi batas ujung pipa: Terbuka $\\implies$ perut simpangan di kedua ujung.<br>2. Tinjau deret harmonik: Kelipatan bulat lengkap $1 : 2 : 3 : 4 : \\dots$.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa sering tertukar dengan pipa organa tertutup yang hanya menghasilkan kelipatan ganjil ($1 : 3 : 5 : \\dots$, opsi D)."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Pipa organa terbuka memiliki kedua ujung yang terbuka ke atmosfer: 1) Di kedua ujung terbuka, partikel fluida bebas berosilasi dengan amplitudo maksimum $\\implies$ kedua ujung berupa perut simpangan. 2) Panjang kolom pada nada dasar: $L = \\frac{1}{2}\\lambda_0 \\implies f_0 = \\frac{v}{2L}$. 3) Frekuensi harmonik ke-$n$ memenuhi seluruh kelipatan bulat bulat positif: $$f_n = (n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : 4 : \\dots$$. **Tips:** Siswa sering tertukar dengan pipa organa tertutup yang hanya menghasilkan kelipatan ganjil ($1 : 3 : 5 : \\dots$, )."
  },
  {
    "id": "fis-gel-bunyi-organa-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "mudah",
    "statement": "Sebuah pipa organa tertutup memiliki satu ujung yang tertutup rapat dan satu ujung terbuka. Pola gelombang stasioner simpangan pada nada dasar dan perbandingan frekuensi nada-nada harmonik yang dihasilkan oleh pipa organa tertutup adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Ujung tertutup simpul dan ujung terbuka perut, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Ujung tertutup perut dan ujung terbuka simpul, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$",
      "Kedua ujungnya merupakan simpul simpangan, dengan perbandingan frekuensi $1 : 3 : 5 : 7 : \\dots$",
      "Kedua ujungnya merupakan perut simpangan, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$",
      "Ujung tertutup simpul dan ujung terbuka perut, dengan perbandingan frekuensi $1 : 2 : 3 : 4 : \\dots$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pipa organa tertutup:<br>1) Ujung tertutup membatasi gerak partikel $\\implies$ simpul simpangan.<br>2) Ujung terbuka partikel bebas berosilasi $\\implies$ perut simpangan.<br>3) Nada dasar: $L = \\frac{1}{4}\\lambda_0 \\implies f_0 = \\frac{v}{4L}$.<br>4) Harmonik hanya terdiri dari kelipatan bilangan bulat ganjil:<br>$$f_n = (2n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 3 : 5 : 7 : \\dots$$",
      "steps": "1. Ujung tertutup adalah simpul, ujung terbuka adalah perut.<br>2. Frekuensi harmonik berbanding sebagai kelipatan ganjil: $1 : 3 : 5 : 7 : \\dots$.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa sering mengira pipa organa tertutup dapat menghasilkan nada harmonik genap seperti $2 f_0$ atau $4 f_0$, padahal harmonik genap tidak dapat terbentuk karena terbentur oleh kondisi batas simpul pada ujung tertutup."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Pipa organa tertutup: 1) Ujung tertutup membatasi gerak partikel $\\implies$ simpul simpangan. 2) Ujung terbuka partikel bebas berosilasi $\\implies$ perut simpangan. 3) Nada dasar: $L = \\frac{1}{4}\\lambda_0 \\implies f_0 = \\frac{v}{4L}$. 4) Harmonik hanya terdiri dari kelipatan bilangan bulat ganjil: $$f_n = (2n + 1) f_0 \\implies f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 3 : 5 : 7 : \\dots$$."
  },
  {
    "id": "fis-gel-bunyi-organa-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "mudah",
    "statement": "Sebuah pipa organa terbuka memiliki panjang kolom udara $L = 50\\text{ cm}$. Jika cepat rambat bunyi di udara adalah $v = 340\\text{ m/s}$, besar frekuensi nada atas pertama ($f_1$) yang dihasilkan pipa organa terbuka tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$170\\text{ Hz}$",
      "$340\\text{ Hz}$",
      "$510\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$1.020\\text{ Hz}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada pipa organa terbuka, frekuensi nada atas ke-$n$ dirumuskan:<br>$$f_n = (n + 1) \\cdot \\frac{v}{2L}$$Untuk nada atas pertama ($n = 1$):<br>$$f_1 = 2 \\cdot \\frac{v}{2L} = \\frac{v}{L}$$",
      "steps": "1. Konversikan panjang pipa ke meter:<br>$$L = 50\\text{ cm} = 0{,}50\\text{ m}$$<br>2. Hitung frekuensi nada atas pertama ($f_1$):<br>$$f_1 = \\frac{340\\text{ m/s}}{0{,}50\\text{ m}} = 680\\text{ Hz}$$",
      "pitfalls": "Terkecoh menghitung nada dasar ($f_0 = \\frac{v}{2L} = 340\\text{ Hz}$, opsi B) karena tidak membaca secara teliti bahwa yang ditanyakan adalah nada atas pertama."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Pada pipa organa terbuka, frekuensi nada atas ke-$n$ dirumuskan: $$f_n = (n + 1) \\cdot \\frac{v}{2L}$$Untuk nada atas pertama ($n = 1$): $$f_1 = 2 \\cdot \\frac{v}{2L} = \\frac{v}{L}$$."
  },
  {
    "id": "fis-gel-bunyi-organa-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "mudah",
    "statement": "Sebuah pipa organa tertutup memiliki panjang $L = 30\\text{ cm}$. Jika cepat rambat gelombang bunyi di udara pada saat itu adalah $v = 360\\text{ m/s}$, besar frekuensi nada atas pertama ($f_1$) yang dihasilkan oleh pipa organa tertutup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$900\\text{ Hz}$",
      "$1.200\\text{ Hz}$",
      "$1.500\\text{ Hz}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada pipa organa tertutup, frekuensi nada atas ke-$n$ dirumuskan:<br>$$f_n = (2n + 1) \\cdot \\frac{v}{4L}$$Untuk nada atas pertama ($n = 1$):<br>$$f_1 = 3 \\cdot \\frac{v}{4L}$$",
      "steps": "1. Konversikan panjang pipa ke meter:<br>$$L = 30\\text{ cm} = 0{,}30\\text{ m}$$<br>2. Hitung frekuensi nada dasar ($f_0$):<br>$$f_0 = \\frac{v}{4L} = \\frac{360\\text{ m/s}}{4 \\times 0{,}30\\text{ m}} = \\frac{360}{1{,}20} = 300\\text{ Hz}$$<br>3. Hitung frekuensi nada atas pertama ($f_1 = 3 f_0$):<br>$$f_1 = 3 \\times 300\\text{ Hz} = 900\\text{ Hz}$$",
      "pitfalls": "Siswa sering mengalikan nada dasar dengan 2 ($2 \\times 300 = 600\\text{ Hz}$, opsi B) karena lupa bahwa pada pipa organa tertutup tidak ada harmonik genap, sehingga nada atas pertama adalah kelipatan 3 dari nada dasar."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Pada pipa organa tertutup, frekuensi nada atas ke-$n$ dirumuskan: $$f_n = (2n + 1) \\cdot \\frac{v}{4L}$$Untuk nada atas pertama ($n = 1$): $$f_1 = 3 \\cdot \\frac{v}{4L}$$."
  },
  {
    "id": "fis-gel-bunyi-organa-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "mudah",
    "statement": "Sebuah pipa organa terbuka (panjang $L_{\\text{terbuka}}$) dan sebuah pipa organa tertutup (panjang $L_{\\text{tertutup}}$) menghasilkan frekuensi nada dasar yang persis sama di udara yang sama. Perbandingan panjang pipa organa terbuka terhadap pipa organa tertutup ($L_{\\text{terbuka}} : L_{\\text{tertutup}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 4$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Frekuensi nada dasar masing-masing pipa organa adalah:<br>• Pipa terbuka: $f_{0,\\text{terbuka}} = \\frac{v}{2 L_{\\text{terbuka}}}$<br>• Pipa tertutup: $f_{0,\\text{tertutup}} = \\frac{v}{4 L_{\\text{tertutup}}}$<br>Syarat frekuensi sama: $f_{0,\\text{terbuka}} = f_{0,\\text{tertutup}}$.",
      "steps": "1. Samakan kedua persamaan frekuensi nada dasar:<br>$$\\frac{v}{2 L_{\\text{terbuka}}} = \\frac{v}{4 L_{\\text{tertutup}}}$$<br>2. Sederhanakan kedua ruas:<br>$$2 L_{\\text{terbuka}} = 4 L_{\\text{tertutup}} \\implies L_{\\text{terbuka}} = 2 L_{\\text{tertutup}}$$<br>3. Rasio perbandingannya adalah $L_{\\text{terbuka}} : L_{\\text{tertutup}} = 2 : 1$.",
      "pitfalls": "Terkecoh membalik perbandingan menjadi $1 : 2$ (opsi B). Pipa organa terbuka harus dua kali lebih panjang daripada pipa tertutup agar nada dasarnya berfrekuensi sama."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Frekuensi nada dasar masing-masing pipa organa adalah: • Pipa terbuka: $f_{0,\\text{terbuka}} = \\frac{v}{2 L_{\\text{terbuka}}}$ • Pipa tertutup: $f_{0,\\text{tertutup}} = \\frac{v}{4 L_{\\text{tertutup}}}$ Syarat frekuensi sama: $f_{0,\\text{terbuka}} = f_{0,\\text{tertutup}}$. **Tips:** Terkecoh membalik perbandingan menjadi $1 : 2$ ()."
  },
  {
    "id": "fis-gel-bunyi-organa-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "sedang",
    "statement": "Nada atas pertama sebuah pipa organa terbuka beresonansi tepat sama dengan nada atas kedua sebuah pipa organa tertutup pada ruangan dengan suhu dan kondisi udara yang sama. Jika panjang pipa organa terbuka adalah $L_{\\text{terbuka}} = 40\\text{ cm}$, maka panjang pipa organa tertutup ($L_{\\text{tertutup}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ cm}$",
      "$32\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "1) Frekuensi nada atas pertama ($n = 1$) pipa organa terbuka:<br>$$f_{1,\\text{terbuka}} = 2 \\cdot \\frac{v}{2 L_{\\text{terbuka}}} = \\frac{v}{L_{\\text{terbuka}}}$$<br>2) Frekuensi nada atas kedua ($n = 2$) pipa organa tertutup:<br>$$f_{2,\\text{tertutup}} = (2(2) + 1) \\cdot \\frac{v}{4 L_{\\text{tertutup}}} = \\frac{5v}{4 L_{\\text{tertutup}}}$$<br>3) Kondisi resonansi: $f_{1,\\text{terbuka}} = f_{2,\\text{tertutup}}$.",
      "steps": "1. Samakan kedua persamaan frekuensi resonansi:<br>$$\\frac{v}{L_{\\text{terbuka}}} = \\frac{5v}{4 L_{\\text{tertutup}}}$$<br>2. Bagi kedua ruas dengan $v$ dan substitusikan $L_{\\text{terbuka}} = 40\\text{ cm}$:<br>$$\\frac{1}{40\\text{ cm}} = \\frac{5}{4 L_{\\text{tertutup}}} \\implies 4 L_{\\text{tertutup}} = 40 \\times 5 = 200\\text{ cm}$$<br>$$L_{\\text{tertutup}} = \\frac{200\\text{ cm}}{4} = 50\\text{ cm}$$",
      "pitfalls": "Siswa sering salah menentukan harmonik nada atas kedua pipa tertutup, menganggapnya sebagai harmonik ke-3 ($3v / 4L$), padahal deret pipa tertutup adalah nada dasar ($1v/4L$), nada atas pertama ($3v/4L$), dan nada atas kedua ($5v/4L$)."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "1) Frekuensi nada atas pertama ($n = 1$) pipa organa terbuka: $$f_{1,\\text{terbuka}} = 2 \\cdot \\frac{v}{2 L_{\\text{terbuka}}} = \\frac{v}{L_{\\text{terbuka}}}$$ 2) Frekuensi nada atas kedua ($n = 2$) pipa organa tertutup: $$f_{2,\\text{tertutup}} = (2(2) + 1) \\cdot \\frac{v}{4 L_{\\text{tertutup}}} = \\frac{5v}{4 L_{\\text{tertutup}}}$$ 3) Kondisi resonansi: $f_{1,\\text{terbuka}} = f_{2,\\text{tertutup}}$."
  },
  {
    "id": "fis-gel-bunyi-organa-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "sedang",
    "statement": "Sebuah pipa organa terbuka yang ditiup menggunakan udara biasa (cepat rambat bunyi $v_{\\text{udara}} = 340\\text{ m/s}$) menghasilkan frekuensi nada dasar sebesar $f_0 = 340\\text{ Hz}$. Jika seluruh udara di dalam pipa organa tersebut digantikan dengan gas helium pada suhu yang sama di mana cepat rambat bunyi di dalam gas helium adalah $v_{\\text{He}} = 1020\\text{ m/s}$, frekuensi nada dasar yang baru dihasilkan oleh pipa organa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$113\\text{ Hz}$",
      "$340\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$1.020\\text{ Hz}$",
      "$1.360\\text{ Hz}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Frekuensi nada dasar pipa organa terbuka berbanding lurus dengan cepat rambat bunyi di dalam medium gas pengisi pipa:<br>$$f_0 = \\frac{v}{2L} \\implies \\frac{f_{0,\\text{He}}}{f_{0,\\text{udara}}} = \\frac{v_{\\text{He}}}{v_{\\text{udara}}}$$Panjang tabung pipa organa ($L$) tetap konstan.",
      "steps": "1. Hitung rasio cepat rambat bunyi:<br>$$\\frac{v_{\\text{He}}}{v_{\\text{udara}}} = \\frac{1020\\text{ m/s}}{340\\text{ m/s}} = 3$$<br>2. Hitung frekuensi nada dasar baru di dalam gas helium:<br>$$f_{0,\\text{He}} = 3 \\times f_{0,\\text{udara}} = 3 \\times 340\\text{ Hz} = 1.020\\text{ Hz}$$",
      "pitfalls": "Siswa terkadang mengira frekuensi bunyi suatu alat musik selalu tetap dan tidak terpengaruh oleh medium gas pengisinya, padahal panjang gelombang yang dikunci oleh geometri pipa ($L = \\lambda/2$), sehingga frekuensi berubah mengikuti cepat rambat bunyi medium."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Frekuensi nada dasar pipa organa terbuka berbanding lurus dengan cepat rambat bunyi di dalam medium gas pengisi pipa: $$f_0 = \\frac{v}{2L} \\implies \\frac{f_{0,\\text{He}}}{f_{0,\\text{udara}}} = \\frac{v_{\\text{He}}}{v_{\\text{udara}}}$$Panjang tabung pipa organa ($L$) tetap konstan."
  },
  {
    "id": "fis-gel-bunyi-organa-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "sedang",
    "statement": "Sebuah pipa organa terbuka dengan panjang fisik tabung $L = 57\\text{ cm}$ memiliki penampang lingkaran dengan jari-jari $r = 2{,}5\\text{ cm}$. Karena ujung tabung terbuka ke udara bebas, perut gelombang stasioner terbentuk sedikit di luar mulut tabung dengan nilai koreksi ujung tabung sebesar $\\Delta L = 0{,}60 r$ pada masing-masing ujung terbuka. Jika cepat rambat bunyi di udara adalah $v = 360\\text{ m/s}$, frekuensi nada dasar sesungguhnya ($f_0$) yang dihasilkan pipa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$280\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$316\\text{ Hz}$",
      "$333\\text{ Hz}$",
      "$360\\text{ Hz}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pipa organa terbuka dengan memperhitungkan koreksi ujung (end correction), panjang akustik efektif ($L_{\\text{efektif}}$) adalah panjang fisik ditambah koreksi pada kedua ujung terbukanya:<br>$$L_{\\text{efektif}} = L + 2 \\Delta L = L + 2(0{,}60 r)$$Frekuensi nada dasar sesungguhnya dihitung dengan:<br>$$f_0 = \\frac{v}{2 L_{\\text{efektif}}}$$",
      "steps": "1. Hitung koreksi ujung per mulut pipa:<br>$$\\Delta L = 0{,}60 \\times 2{,}5\\text{ cm} = 1{,}5\\text{ cm}$$<br>2. Hitung panjang akustik efektif pipa (dua ujung terbuka):<br>$$L_{\\text{efektif}} = 57\\text{ cm} + 2(1{,}5\\text{ cm}) = 57\\text{ cm} + 3\\text{ cm} = 60\\text{ cm} = 0{,}60\\text{ m}$$<br>3. Hitung frekuensi nada dasar sesungguhnya:<br>$$f_0 = \\frac{360\\text{ m/s}}{2 \\times 0{,}60\\text{ m}} = \\frac{360}{1{,}20} = 300\\text{ Hz}$$",
      "pitfalls": "Siswa sering mengabaikan koreksi ujung dan langsung menghitung $\\frac{360}{2 \\times 0{,}57} \\approx 316\\text{ Hz}$ (opsi C), atau hanya menambahkan koreksi pada salah satu ujung saja."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pada pipa organa terbuka dengan memperhitungkan koreksi ujung (end correction), panjang akustik efektif ($L_{\\text{efektif}}$) adalah panjang fisik ditambah koreksi pada kedua ujung terbukanya: $$L_{\\text{efektif}} = L + 2 \\Delta L = L + 2(0{,}60 r)$$Frekuensi nada dasar sesungguhnya dihitung dengan: $$f_0 = \\frac{v}{2 L_{\\text{efektif}}}$$."
  },
  {
    "id": "fis-gel-bunyi-organa-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "sedang",
    "statement": "Sebuah pipa organa tertutup dengan panjang $L = 75\\text{ cm}$ ditiup sehingga menghasilkan nada atas kedua. Jumlah titik simpul simpangan ($S$) dan titik perut simpangan ($P$) yang terbentuk di dalam kolom udara pipa, serta letak titik simpul terjauh diukur dari ujung tertutup pipa berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$S = 2$, $P = 2$, dan letak simpul terjauh $x = 50\\text{ cm}$",
      "$S = 3$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$",
      "$S = 3$, $P = 3$, dan letak simpul terjauh $x = 75\\text{ cm}$",
      "$S = 4$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$",
      "$S = 3$, $P = 4$, dan letak simpul terjauh $x = 50\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pipa organa tertutup nada atas ke-$n$ ($n = 2$ untuk nada atas kedua):<br>1) Pola gelombang: $L = (2n + 1) \\frac{\\lambda}{4} = \\frac{5}{4}\\lambda$.<br>2) Jumlah simpul simpangan $S = n + 1 = 3$ simpul.<br>3) Jumlah perut simpangan $P = n + 1 = 3$ perut.<br>4) Letak simpul simpangan dari ujung tertutup ($x = 0$): $x_k = (k - 1) \\frac{\\lambda}{2}$ untuk $k = 1, 2, 3$.",
      "steps": "1. Hitung panjang gelombang ($\\lambda$):<br>$$L = \\frac{5}{4}\\lambda \\implies 75\\text{ cm} = \\frac{5}{4}\\lambda \\implies \\lambda = \\frac{4 \\times 75\\text{ cm}}{5} = 60\\text{ cm}$$<br>2. Tentukan posisi simpul dari ujung tertutup:<br>• Simpul ke-1: $x_1 = 0\\text{ cm}$ (ujung tertutup)<br>• Simpul ke-2: $x_2 = \\frac{\\lambda}{2} = 30\\text{ cm}$<br>• Simpul ke-3 (terjauh): $x_3 = \\lambda = 60\\text{ cm}$<br>3. Jawaban yang tepat adalah $S = 3$, $P = 3$, dan letak simpul terjauh $x = 60\\text{ cm}$ (opsi B).",
      "pitfalls": "Terkecoh mengira simpul terjauh berada di bibir pipa ($x = 75\\text{ cm}$, opsi C), padahal bibir pipa yang terbuka selalu berupa perut simpangan."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pada pipa organa tertutup nada atas ke-$n$ ($n = 2$ untuk nada atas kedua): 1) Pola gelombang: $L = (2n + 1) \\frac{\\lambda}{4} = \\frac{5}{4}\\lambda$. 2) Jumlah simpul simpangan $S = n + 1 = 3$ simpul. 3) Jumlah perut simpangan $P = n + 1 = 3$ perut. 4) Letak simpul simpangan dari ujung tertutup ($x = 0$): $x_k = (k - 1) \\frac{\\lambda}{2}$ untuk $k = 1, 2, 3$."
  },
  {
    "id": "fis-gel-bunyi-organa-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Pipa Organa",
    "difficulty": "sedang",
    "statement": "Sebuah pipa organa terbuka dengan panjang awal $L_0 = 80\\text{ cm}$ menghasilkan frekuensi nada dasar sebesar $f_0$. Pipa tersebut kemudian dimasukkan secara vertikal ke dalam bak air sedalam $h = 20\\text{ cm}$ sehingga bagian pipa yang tercelup air tertutup rapat oleh air, mengubah pipa menjadi pipa organa tertutup dengan kolom udara aktif di atas air. Perbandingan frekuensi nada dasar pipa mula-mula terhadap frekuensi nada dasar pipa setelah dicelupkan ke dalam air ($f_0 : f_1$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 : 3$",
      "$3 : 2$",
      "$2 : 1$",
      "$3 : 4$",
      "$1 : 2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "1) Frekuensi nada dasar pipa organa terbuka mula-mula:<br>$$f_0 = \\frac{v}{2 L_0}$$<br>2) Setelah dicelupkan sedalam $h$, panjang kolom udara aktif yang tersisa di atas air adalah $L_1 = L_0 - h$. Karena ujung bawah tertutup oleh air, pipa berperilaku sebagai pipa organa tertutup dengan nada dasar:<br>$$f_1 = \\frac{v}{4 L_1}$$",
      "steps": "1. Hitung panjang kolom udara pipa tertutup:<br>$$L_1 = 80\\text{ cm} - 20\\text{ cm} = 60\\text{ cm}$$<br>2. Tuliskan perbandingan frekuensi:<br>$$\\frac{f_0}{f_1} = \\frac{\\frac{v}{2 L_0}}{\\frac{v}{4 L_1}} = \\frac{4 L_1}{2 L_0} = \\frac{2 L_1}{L_0}$$<br>3. Masukkan nilai panjang kolom:<br>$$\\frac{f_0}{f_1} = \\frac{2 \\times 60\\text{ cm}}{80\\text{ cm}} = \\frac{120}{80} = \\frac{3}{2}$$<br>4. Maka perbandingannya adalah $3 : 2$.",
      "pitfalls": "Siswa sering lupa bahwa pipa terbuka memiliki penyebut $2L$ sedangkan pipa tertutup memiliki penyebut $4L$, sehingga keliru menghitung rasio panjang semata ($80 : 60 = 4 : 3$, opsi A)."
    },
    "subTopicSlug": "pipa-organa",
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "1) Frekuensi nada dasar pipa organa terbuka mula-mula: $$f_0 = \\frac{v}{2 L_0}$$ 2) Setelah dicelupkan sedalam $h$, panjang kolom udara aktif yang tersisa di atas air adalah $L_1 = L_0 - h$. Karena ujung bawah tertutup oleh air, pipa berperilaku sebagai pipa organa tertutup dengan nada dasar: $$f_1 = \\frac{v}{4 L_1}$$."
  },
  {
    "id": "sup-fis-gel-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Frekuensi Pipa Organa Terbuka",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa terbuka memiliki panjang $60\\text{ cm}$. Jika cepat rambat bunyi di udara saat itu adalah $340\\text{ m/s}$, maka frekuensi nada atas pertama ($f_1$) yang dihasilkan pipa organa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$566{,}7\\text{ Hz}$",
      "$283{,}3\\text{ Hz}$",
      "$850\\text{ Hz}$",
      "$1133{,}3\\text{ Hz}$",
      "$425\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Resonansi Pipa Organa Terbuka:</strong><br>Frekuensi nada ke-$n$ (dimulai dari $n=0$ nada dasar): $f_n = (n + 1) \\frac{v}{2L}$. Untuk nada atas pertama, $n = 1 \\implies f_1 = \\frac{v}{L}$.</div>",
      "steps": "<ol><li>Panjang pipa: $L = 60\\text{ cm} = 0{,}6\\text{ m}$.</li><li>Nada atas pertama ($n=1$): $f_1 = \\frac{v}{L} = \\frac{340}{0{,}6} \\approx 566{,}67\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Terkecoh menghitung nada dasar ($f_0 = \\frac{v}{2L} = 283{,}3\\text{ Hz}$) karena mengira nada atas pertama berindeks $n=0$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "pipa-organa",
    "hint": "Resonansi Pipa Organa Terbuka: Frekuensi nada ke-$n$ (dimulai dari $n=0$ nada dasar): $f_n = (n + 1) \\frac{v}{2L}$. Untuk nada atas pertama, $n = 1 \\implies f_1 = \\frac{v}{L}$."
  },
  {
    "id": "drill-bun-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Frekuensi Pipa Organa Tertutup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa tertutup memiliki panjang $L = 50\\text{ cm}$. Jika kelajuan bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) dan frekuensi nada atas pertama ($f_1$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$170\\text{ Hz}$ dan $510\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $340\\text{ Hz}$",
      "$340\\text{ Hz}$ dan $680\\text{ Hz}$",
      "$85\\text{ Hz}$ dan $255\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $680\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pipa Organa Tertutup (Harmonik Ganjil):</strong><br>• Nada dasar ($n=0$): $f_0 = \\frac{v}{4L}$<br>• Perbandingan frekuensi hanya bilangan ganjil: $f_0 : f_1 : f_2 = 1 : 3 : 5$<br>• Nada atas pertama ($n=1$): $f_1 = 3 f_0 = \\frac{3v}{4L}$</div>",
      "steps": "<ol><li>Konversi panjang: $L = 50\\text{ cm} = 0{,}5\\text{ m}$.</li><li>Nada dasar: $f_0 = \\frac{v}{4L} = \\frac{340}{4 \\times 0{,}5} = \\frac{340}{2} = 170\\text{ Hz}$.</li><li>Nada atas pertama: $f_1 = 3 \\times f_0 = 3 \\times 170 = 510\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perbedaan Kunci:</strong> Pipa tertutup penyebutnya $4L$ dan bernada ganjil ($1 : 3 : 5$). Pipa terbuka penyebutnya $2L$ dan bernada bulat ($1 : 2 : 3$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "pipa-organa",
    "hint": "Pipa Organa Tertutup (Harmonik Ganjil): • Nada dasar ($n=0$): $f_0 = \\frac{v}{4L}$ • Perbandingan frekuensi hanya bilangan ganjil: $f_0 : f_1 : f_2 = 1 : 3 : 5$ • Nada atas pertama ($n=1$): $f_1 = 3 f_0 = \\frac{3v}{4L}$. **Tips:** ⚠️ Perbedaan Kunci: Pipa tertutup penyebutnya $4L$ dan bernada ganjil ($1 : 3 : 5$)."
  },
  {
    "id": "drill2-bun-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Nada Atas Kedua Pipa Organa Terbuka",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa terbuka menghasilkan frekuensi nada dasar sebesar $f_0 = 150\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa terbuka tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$450\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$750\\text{ Hz}$",
      "$225\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Deret Harmonik Pipa Organa Terbuka:</strong><br>Perbandingan frekuensi harmonik berurutan berupa bilangan bulat lengkap:<br>$$f_0 : f_1 : f_2 : f_3 = 1 : 2 : 3 : 4$$<br>• Nada dasar ($n=0$): $f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 2f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 3f_0$</div>",
      "steps": "<ol><li>Nada atas kedua memiliki indeks $n=2$, sehingga merupakan harmonik ke-3 ($3f_0$).</li><li>Hitung frekuensi: $f_2 = 3 \\times f_0 = 3 \\times 150\\text{ Hz} = 450\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Ingat Penamaan Nada:</strong> \"Nada atas ke-$n$\" setara dengan harmonik ke-$(n+1)$. Nada atas ke-2 $=$ harmonik ke-3 ($3f_0$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "pipa-organa",
    "hint": "Deret Harmonik Pipa Organa Terbuka: Perbandingan frekuensi harmonik berurutan berupa bilangan bulat lengkap: $$f_0 : f_1 : f_2 : f_3 = 1 : 2 : 3 : 4$$ • Nada dasar ($n=0$): $f_0$ • Nada atas ke-1 ($n=1$): $f_1 = 2f_0$ • Nada atas ke-2 ($n=2$): $f_2 = 3f_0$. **Tips:** ⚠️ Ingat Penamaan Nada: \"Nada atas ke-$n$\" setara dengan harmonik ke-$(n+1)$."
  },
  {
    "id": "drill2-bun-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-organa",
    "category": "Nada Atas Kedua Pipa Organa Tertutup",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pipa organa tertutup menghasilkan frekuensi nada dasar sebesar $f_0 = 100\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa tertutup tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$",
      "$200\\text{ Hz}$",
      "$700\\text{ Hz}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Deret Harmonik Pipa Organa Tertutup (Hanya Ganjil):</strong><br>$$f_0 : f_1 : f_2 : f_3 = 1 : 3 : 5 : 7$$<br>• Nada dasar ($n=0$): $f_0 = 1 f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 3 f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 5 f_0$</div>",
      "steps": "<ol><li>Pipa tertutup hanya menghasilkan kelipatan bilangan ganjil.</li><li>Nada atas kedua bernilai $5 \\times$ nada dasar.</li><li>$f_2 = 5 \\times 100\\text{ Hz} = 500\\text{ Hz}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan Terbuka vs Tertutup:</strong><br>• Terbuka: $f_0 : f_1 : f_2 = 1 : 2 : 3$<br>• Tertutup: $f_0 : f_1 : f_2 = 1 : 3 : 5$</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Pipa Organa",
    "subTopic": "Pipa Organa",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "pipa-organa",
    "hint": "Deret Harmonik Pipa Organa Tertutup (Hanya Ganjil): $$f_0 : f_1 : f_2 : f_3 = 1 : 3 : 5 : 7$$ • Nada dasar ($n=0$): $f_0 = 1 f_0$ • Nada atas ke-1 ($n=1$): $f_1 = 3 f_0$ • Nada atas ke-2 ($n=2$): $f_2 = 5 f_0$."
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
