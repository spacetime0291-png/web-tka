/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Lensa Cekung dan Cembung (fis-gel-optik-lensa)
 * Slug: lensa-cekung-cembung
 * Indikator: Persamaan pembuat lensa, kekuatan lensa (P = 100/f dioptri), dan sifat bayangan nyata/maya.
 * 
 * Total Butir Soal: 14 (Mudah: 8, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-lensa";
  const subTopicSlug = "lensa-cekung-cembung";
  const questions = [
  {
    "id": "fis-gel-optik-lensa-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah lensa cembung memiliki jarak fokus $f = 25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+2\\text{ dioptri}$",
      "$+2{,}5\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+5\\text{ dioptri}$",
      "$+8\\text{ dioptri}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kuat lensa atau daya lensa ($P$) dalam satuan dioptri didefinisikan sebagai kebalikan dari jarak fokus dalam meter ($f$), atau jika $f$ dalam sentimeter:<br>$$P = \\frac{100}{f\\text{ (cm)}}$$",
      "steps": "1. Substitusikan nilai jarak fokus $f = +25\\text{ cm}$:<br>$$P = \\frac{100}{25} = +4\\text{ dioptri}$$<br>2. Kuat lensa cembung bernilai positif ($+4\\text{ D}$).<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan membagi dengan 1 jika fokus masih dalam sentimeter ($1/25 = 0{,}04$). Pastikan mengonversi ke meter atau gunakan rumus $100/f$."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Kuat lensa atau daya lensa ($P$) dalam satuan dioptri didefinisikan sebagai kebalikan dari jarak fokus dalam meter ($f$), atau jika $f$ dalam sentimeter: $$P = \\frac{100}{f\\text{ (cm)}}$$."
  },
  {
    "id": "fis-gel-optik-lensa-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah benda diletakkan pada jarak $30\\text{ cm}$ di depan sebuah lensa cembung yang memiliki jarak fokus $20\\text{ cm}$. Jarak bayangan yang terbentuk di belakang lensa adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ cm}$",
      "$40\\text{ cm}$",
      "$50\\text{ cm}$",
      "$60\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persamaan lensa tipis menghubungkan jarak benda ($s$), jarak fokus ($f$), dan jarak bayangan ($s'$):<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      "steps": "1. Substitusikan $f = +20\\text{ cm}$ dan $s = 30\\text{ cm}$:<br>$$\\frac{1}{s'} = \\frac{1}{20} - \\frac{1}{30}$$<br>2. Samakan penyebut KPK 60:<br>$$\\frac{1}{s'} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies s' = +60\\text{ cm}$$<br>3. Tanda positif menandakan bayangan nyata berada di belakang lensa.<br>4. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Perhatikan bahwa pada lensa, bayangan nyata terletak di belakang lensa ($s' > 0$), berlawanan dengan cermin di mana bayangan nyata terletak di depan cermin."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan lensa tipis menghubungkan jarak benda ($s$), jarak fokus ($f$), dan jarak bayangan ($s'$): $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$."
  },
  {
    "id": "fis-gel-optik-lensa-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Karakteristik utama dari lensa cekung (lensa negatif) ketika berkas sinar sejajar sumbu utama melaluinya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Mengumpulkan berkas sinar (konvergen) ke titik fokus nyata di belakang lensa",
      "Menyebarkan berkas sinar (divergen) seolah-olah berasal dari titik fokus maya di depan lensa",
      "Memantulkan seluruh berkas sinar kembali ke medium asal",
      "Meneruskan seluruh berkas sinar lurus tanpa pembiasan sama sekali",
      "Mengubah panjang gelombang dan warna cahaya menjadi monokromatik"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Lensa cekung memiliki bagian tengah yang lebih tipis dibandingkan bagian tepinya. Berkas sinar datang yang sejajar sumbu utama akan dibiaskan menyebar (divergen) sedemikian rupa sehingga perpanjangan sinar bias tersebut seolah-olah bersumber dari titik fokus maya ($F$) di depan lensa.",
      "steps": "1. Analisis pembiasan lensa cekung: Sifat alaminya adalah divergen (menyebarkan sinar).<br>2. Berkas sinar dibiaskan menjauhi sumbu utama, dan garis perpanjangannya bertemu di titik fokus maya.<br>3. Pilihan yang tepat adalah opsi B.",
      "pitfalls": "Opsi A adalah sifat lensa cembung (konvergen). Jangan tertukar antara lensa cembung yang bersifat konvergen dengan cermin cembung yang bersifat divergen."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Lensa cekung memiliki bagian tengah yang lebih tipis dibandingkan bagian tepinya. Berkas sinar datang yang sejajar sumbu utama akan dibiaskan menyebar (divergen) sedemikian rupa sehingga perpanjangan sinar bias tersebut seolah-olah bersumber dari titik fokus maya ($F$) di depan lensa. **Tips:** adalah sifat lensa cembung (konvergen)."
  },
  {
    "id": "fis-gel-optik-lensa-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah benda nyata diletakkan di depan lensa cekung pada jarak berapapun. Karakteristik bayangan yang SELALU dihasilkan oleh lensa cekung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Maya, tegak, dan diperkecil",
      "Maya, tegak, dan diperbesar",
      "Nyata, terbalik, dan diperkecil",
      "Nyata, terbalik, dan diperbesar",
      "Nyata, tegak, dan sama besar"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk setiap posisi benda nyata ($s > 0$) di depan lensa cekung ($f < 0$):<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} < 0$$<br>Nilai $s'$ selalu negatif (maya, di depan lensa), bayangan selalu tegak ($M > 0$), dan $|s'| < s$ sehingga $|M| < 1$ (diperkecil).",
      "steps": "1. Tinjau sifat pembentukan bayangan lensa divergen.<br>2. Untuk semua benda nyata di depan lensa cekung, bayangan yang terbentuk selalu berada di antara lensa dan titik fokus maya.<br>3. Sifat bayangan selalu maya, tegak, dan diperkecil.<br>4. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Lensa cekung tidak pernah menghasilkan bayangan nyata dari sebuah benda nyata, sifatnya persis analog dengan cermin cembung."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Untuk setiap posisi benda nyata ($s > 0$) di depan lensa cekung ($f < 0$): $$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} < 0$$ Nilai $s'$ selalu negatif (maya, di depan lensa), bayangan selalu tegak ($M > 0$), dan $|s'| < s$ sehingga $|M| < 1$ (diperkecil). **Tips:** Lensa cekung tidak pernah menghasilkan bayangan nyata dari sebuah benda nyata, sifatnya persis analog dengan cermin cembung."
  },
  {
    "id": "fis-gel-optik-lensa-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah lensa cembung membentuk bayangan nyata pada jarak $40\\text{ cm}$ di belakang lensa dari sebuah benda yang diletakkan pada jarak $10\\text{ cm}$ di depan lensa. Perbesaran linier bayangan yang dialami benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}25\\text{ kali}$",
      "$2\\text{ kali}$",
      "$4\\text{ kali}$",
      "$5\\text{ kali}$",
      "$8\\text{ kali}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Perbesaran linier bayangan ($M$) pada lensa dihitung melalui perbandingan jarak bayangan terhadap jarak benda:<br>$$M = \\left|\\frac{s'}{s}\\right|$$",
      "steps": "1. Substitusikan $s' = 40\\text{ cm}$ dan $s = 10\\text{ cm}$:<br>$$M = \\left|\\frac{40}{10}\\right| = 4\\text{ kali}$$<br>2. Bayangan berukuran 4 kali lebih besar daripada bendanya.<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Pastikan tidak membagi jarak benda dengan jarak bayangan ($10/40 = 0{,}25$). Nilai perbesaran adalah rasio $s'/s$."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Perbesaran linier bayangan ($M$) pada lensa dihitung melalui perbandingan jarak bayangan terhadap jarak benda: $$M = \\left|\\frac{s'}{s}\\right|$$."
  },
  {
    "id": "fis-gel-optik-lensa-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah lensa cembung ganda (bikonveks) terbuat dari bahan kaca berindeks bias $n_l = 1{,}5$. Jari-jari kelengkungan kedua permukaannya sama yaitu $R_1 = R_2 = 20\\text{ cm}$. Jika lensa tersebut berada di udara ($n_u = 1$), jarak fokus lensa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$40\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Rumus pembuat lensa (Lensmaker's Equation) untuk lensa bikonveks di udara:<br>$$\\frac{1}{f} = \\left(\\frac{n_l}{n_u} - 1\\right) \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$$<br>Untuk permukaan pertama cembung $R_1 > 0$, dan permukaan kedua cembung $R_2 > 0$ dalam bentuk penjumlahan tanda kelengkungan.",
      "steps": "1. Diketahui $n_l = 1{,}5$, $n_u = 1$, dan $R_1 = R_2 = 20\\text{ cm}$.<br>2. Masukkan ke rumus pembuat lensa:<br>$$\\frac{1}{f} = (1{,}5 - 1) \\left(\\frac{1}{20} + \\frac{1}{20}\\right) = 0{,}5 \\times \\frac{2}{20} = 0{,}5 \\times \\frac{1}{10} = \\frac{1}{20}$$<br>3. Diperoleh jarak fokus:<br>$$f = 20\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Untuk lensa bikonveks simetris dengan indeks bias kaca standar $n = 1{,}5$, jarak fokus selalu sama dengan jari-jari kelengkungannya ($f = R$)."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan perumusan konsep fisis: $$\\frac{1}{f} = \\left(\\frac{n_l}{n_u} - 1\\right) \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$$ Untuk permukaan pertama cembung $R_1 > 0$, dan permukaan kedua cembung $R_2 > 0$ dalam bentuk penjumlahan tanda kelengkungan."
  },
  {
    "id": "fis-gel-optik-lensa-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah lensa cembung memiliki jarak fokus $15\\text{ cm}$ di udara ($n_u = 1$). Indeks bias bahan lensa tersebut adalah $n_l = 1{,}5$. Jika lensa tersebut dicelupkan ke dalam air yang memiliki indeks bias $n_c = \\frac{4}{3}$, jarak fokus lensa di dalam air menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$",
      "$75\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Perbandingan jarak fokus lensa di dalam suatu zat cair ($f_c$) terhadap jarak fokusnya di udara ($f_u$) dirumuskan:<br>$$\\frac{f_c}{f_u} = \\frac{\\frac{n_l}{n_u} - 1}{\\frac{n_l}{n_c} - 1}$$",
      "steps": "1. Hitung faktor pembilang di udara:<br>$$\\frac{n_l}{n_u} - 1 = 1{,}5 - 1 = 0{,}5 = \\frac{1}{2}$$<br>2. Hitung faktor penyebut di air:<br>$$\\frac{n_l}{n_c} - 1 = \\frac{1{,}5}{\\frac{4}{3}} - 1 = \\frac{9}{8} - 1 = \\frac{1}{8}$$<br>3. Hitung rasio jarak fokus:<br>$$\\frac{f_c}{15} = \\frac{\\frac{1}{2}}{\\frac{1}{8}} = \\frac{8}{2} = 4 \\implies f_c = 4 \\times 15 = 60\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Ketika dicelupkan ke dalam medium dengan indeks bias lebih rapat (seperti air), perbedaan indeks bias mengecil sehingga daya pembiasan lensa melemah dan jarak fokusnya memanjang secara signifikan."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Perbandingan jarak fokus lensa di dalam suatu zat cair ($f_c$) terhadap jarak fokusnya di udara ($f_u$) dirumuskan: $$\\frac{f_c}{f_u} = \\frac{\\frac{n_l}{n_u} - 1}{\\frac{n_l}{n_c} - 1}$$."
  },
  {
    "id": "fis-gel-optik-lensa-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Dua buah lensa tipis disusun bersentuhan sesumbu. Lensa pertama adalah lensa cembung dengan jarak fokus $25\\text{ cm}$, sedangkan lensa kedua adalah lensa cekung dengan jarak fokus $50\\text{ cm}$. Kuat lensa sistem gabungan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+1\\text{ dioptri}$",
      "$+2\\text{ dioptri}$",
      "$+3\\text{ dioptri}$",
      "$+4\\text{ dioptri}$",
      "$+6\\text{ dioptri}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Daya lensa gabungan ($P_{\\text{gab}}$) dari dua lensa tipis yang bersentuhan adalah penjumlahan aljabar dari daya masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2 = \\frac{100}{f_1} + \\frac{100}{f_2}$$<br>Ingat bahwa fokus lensa cekung bertanda negatif ($f_2 < 0$).",
      "steps": "1. Hitung daya lensa pertama (cembung):<br>$$P_1 = \\frac{100}{+25} = +4\\text{ dioptri}$$<br>2. Hitung daya lensa kedua (cekung):<br>$$P_2 = \\frac{100}{-50} = -2\\text{ dioptri}$$<br>3. Jumlahkan kedua daya:<br>$$P_{\\text{gab}} = +4 + (-2) = +2\\text{ dioptri}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan menjumlahkan kedua nilai secara positif (+4 + 2 = +6 D, opsi E). Lensa cekung memiliki daya negatif yang mengurangi kekuatan konvergensi lensa cembung."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Daya lensa gabungan ($P_{\\text{gab}}$) dari dua lensa tipis yang bersentuhan adalah penjumlahan aljabar dari daya masing-masing lensa: $$P_{\\text{gab}} = P_1 + P_2 = \\frac{100}{f_1} + \\frac{100}{f_2}$$ Ingat bahwa fokus lensa cekung bertanda negatif ($f_2 < 0$). **Tips:** Jangan menjumlahkan kedua nilai secara positif (+4 + 2 = +6 D, )."
  },
  {
    "id": "fis-gel-optik-lensa-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah lensa cembung yang memiliki jarak fokus $12\\text{ cm}$ digunakan untuk menghasilkan bayangan tegak maya yang berukuran $3$ kali ukuran bendanya. Jarak benda dari permukaan lensa tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$16\\text{ cm}$",
      "$24\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bayangan tegak pada lensa cembung selalu bersifat maya dan berada di depan lensa ($s' < 0$):<br>$$M = -\\frac{s'}{s} = 3 \\implies s' = -3s$$",
      "steps": "1. Substitusikan $s' = -3s$ dan $f = +12\\text{ cm}$ ke persamaan lensa:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{12} = \\frac{1}{s} - \\frac{1}{3s}$$<br>2. Sederhanakan ruas kanan:<br>$$\\frac{1}{12} = \\frac{3 - 1}{3s} = \\frac{2}{3s}$$<br>3. Kalikan silang:<br>$$3s = 2 \\times 12 = 24 \\implies s = 8\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jika keliru menggunakan bayangan nyata ($s' = +3s$), diperoleh $\\frac{1}{12} = \\frac{4}{3s} \\implies s = 16\\text{ cm}$ (opsi D). Bayangan nyata pada lensa cembung selalu terbalik, bukan tegak."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Bayangan tegak pada lensa cembung selalu bersifat maya dan berada di depan lensa ($s' < 0$): $$M = -\\frac{s'}{s} = 3 \\implies s' = -3s$$."
  },
  {
    "id": "fis-gel-optik-lensa-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah benda nyata dan sebuah layar diletakkan terpisah pada jarak tetap $100\\text{ cm}$. Sebuah lensa cembung dengan jarak fokus $21\\text{ cm}$ diletakkan di antara benda dan layar. Agar bayangan nyata yang tajam tertangkap di layar, posisi lensa cembung dapat diletakkan dari benda pada jarak ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ cm}$ atau $80\\text{ cm}$",
      "$25\\text{ cm}$ atau $75\\text{ cm}$",
      "$30\\text{ cm}$ atau $70\\text{ cm}$",
      "$35\\text{ cm}$ atau $65\\text{ cm}$",
      "$40\\text{ cm}$ atau $60\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada metode kedudukan ganda (Metode Bessel), jarak benda ke layar adalah $D = s + s' = 100\\text{ cm}$, sehingga $s' = 100 - s$. Persamaan lensa menjadi:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{D - s} = \\frac{D}{s(D - s)}$$",
      "steps": "1. Masukkan $D = 100\\text{ cm}$ dan $f = 21\\text{ cm}$:<br>$$\\frac{1}{21} = \\frac{100}{s(100 - s)}$$<br>2. Bentuk persamaan kuadrat:<br>$$s(100 - s) = 2100 \\implies 100s - s^2 = 2100 \\implies s^2 - 100s + 2100 = 0$$<br>3. Faktorkan persamaan kuadrat:<br>$$(s - 30)(s - 70) = 0$$<br>4. Diperoleh dua kemungkinan posisi lensa: $s = 30\\text{ cm}$ (diperbesar) atau $s = 70\\text{ cm}$ (diperkecil).<br>5. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Perhatikan prinsip reversibilitas cahaya: dua posisi yang simetris dari titik tengah ($50 \\pm 20\\text{ cm}$) selalu menghasilkan bayangan nyata yang terfokus tajam di layar."
    },
    "subTopicSlug": "lensa-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pada metode kedudukan ganda (Metode Bessel), jarak benda ke layar adalah $D = s + s' = 100\\text{ cm}$, sehingga $s' = 100 - s$. Persamaan lensa menjadi: $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{D - s} = \\frac{D}{s(D - s)}$$."
  },
  {
    "id": "drill-cah-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Kuat Lensa (Daya Dioptri)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lensa cembung memiliki jarak fokus $f = +25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+4\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+0{,}04\\text{ Dioptri}$",
      "$-4\\text{ Dioptri}$",
      "$+10\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Kuat Lensa (Dioptri):</strong><br>$$P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$$</div>",
      "steps": "<ol><li>Jarak fokus dalam cm: $f = 25\\text{ cm}$.</li><li>Hitung kuat lensa: $P = \\frac{100}{25} = +4\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Jika fokus dalam cm, langsung bagi dengan 100 ($P = 100/f$). Jika fokus dalam meter, $P = 1/f$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung",
    "hint": "Gunakan perumusan konsep fisis: $$P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$$."
  },
  {
    "id": "drill2-cah-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Lensa Cekung (Divergen)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan sebuah lensa cekung yang memiliki jarak fokus $|f| = 15\\text{ cm}$. Jarak bayangan yang terbentuk ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya dan tegak)",
      "$+10\\text{ cm}$ (nyata dan terbalik)",
      "$-30\\text{ cm}$ (maya dan tegak)",
      "$+30\\text{ cm}$ (nyata dan terbalik)",
      "$-5\\text{ cm}$ (maya dan tegak)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Sifat Mutlak Lensa Cekung:</strong><br>Lensa cekung bersifat menyebarkan cahaya (divergen) dengan fokus <strong>negatif</strong> ($f = -15\\text{ cm}$). Bayangannya selalu bersifat <strong>maya, tegak, dan diperkecil</strong> ($s' < 0$).</div>",
      "steps": "<ol><li>$f = -15\\text{ cm}$, $s = +30\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = -\\frac{1}{15} - \\frac{1}{30} = -\\frac{2}{30} - \\frac{1}{30} = -\\frac{3}{30} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (maya di depan lensa).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Karakteristik Tetap Lensa Cekung:</strong> Lensa cekung tidak pernah bisa menghasilkan bayangan nyata pada posisi benda real apa pun. Nilai $s'$ selalu negatif.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung",
    "hint": "Sifat Mutlak Lensa Cekung: Lensa cekung bersifat menyebarkan cahaya (divergen) dengan fokus negatif ($f = -15\\text{ cm}$). Bayangannya selalu bersifat maya, tegak, dan diperkecil ($s' < 0$). **Tips:** ⚠️ Karakteristik Tetap Lensa Cekung: Lensa cekung tidak pernah bisa menghasilkan bayangan nyata pada posisi benda real apa pun."
  },
  {
    "id": "drill2-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Kuat Lensa Gabungan Bersentuhan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah lensa tipis ditempelkan berimpit (bersentuhan sumbu utama). Lensa pertama adalah lensa cembung dengan kuat lensa $P_1 = +5\\text{ Dioptri}$, dan lensa kedua adalah lensa cekung dengan kuat lensa $P_2 = -2\\text{ Dioptri}$. Kuat lensa total sistem gabungan tersebut ($P_{\\text{gab}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+3\\text{ Dioptri}$",
      "$+7\\text{ Dioptri}$",
      "$-10\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+1{,}5\\text{ Dioptri}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kuat Lensa Sistem Gabungan Berimpit:</strong><br>Kuat lensa gabungan merupakan penjumlahan aljabar langsung dari kuat masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2$$</div>",
      "steps": "<ol><li>$P_1 = +5\\text{ D}$ (cembung).</li><li>$P_2 = -2\\text{ D}$ (cekung).</li><li>$P_{\\text{gab}} = (+5) + (-2) = +3\\text{ Dioptri}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Sifat Akhir Gabungan:</strong> Karena $P_{\\text{gab}} > 0$ ($+3\\text{ D}$), sistem gabungan kedua lensa tersebut berperilaku seperti sebuah lensa cembung dengan jarak fokus $f = 100/3 \\approx 33{,}3\\text{ cm}$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung",
    "hint": "Kuat Lensa Sistem Gabungan Berimpit: Kuat lensa gabungan merupakan penjumlahan aljabar langsung dari kuat masing-masing lensa: $$P_{\\text{gab}} = P_1 + P_2$$."
  },
  {
    "id": "sup-fis-gel-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-lensa",
    "category": "Pembentukan Bayangan Lensa Cembung",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah benda diletakkan pada jarak $12\\text{ cm}$ di depan sebuah lensa cembung yang memiliki panjang fokus $8\\text{ cm}$. Jarak bayangan dan sifat bayangan yang terbentuk berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24\\text{ cm}$, nyata dan terbalik",
      "$24\\text{ cm}$, maya dan tegak",
      "$16\\text{ cm}$, nyata dan terbalik",
      "$18\\text{ cm}$, nyata dan tegak",
      "$4{,}8\\text{ cm}$, maya dan tegak"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Lensa Tipis Gauss:</strong><br>$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. Tanda $s' > 0$ menandakan bayangan nyata di belakang lensa (selalu terbalik).</div>",
      "steps": "<ol><li>$f = +8\\text{ cm}$, $s = +12\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{8} - \\frac{1}{12} = \\frac{3 - 2}{24} = \\frac{1}{24}$.</li><li>$s' = +24\\text{ cm}$. Karena bertanda positif, bayangannya bersifat <strong>nyata dan terbalik</strong>.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menganggap bayangan pada cermin dan lensa memiliki aturan tanda sama untuk letak maya/nyata.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Lensa Cekung dan Cembung",
    "subTopic": "Lensa Cekung dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "lensa-cekung-cembung",
    "hint": "Persamaan Lensa Tipis Gauss: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$. Tanda $s' > 0$ menandakan bayangan nyata di belakang lensa (selalu terbalik). **Tips:** Menganggap bayangan pada cermin dan lensa memiliki aturan tanda sama untuk letak maya/nyata."
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
