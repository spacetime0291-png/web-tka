/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Cahaya & Optik (fis-gel-optik)
 * Sub-Bab: Cermin Datar, Cekung, dan Cembung (fis-gel-optik-cermin)
 * Slug: cermin-datar-cekung-cembung
 * Indikator: Pembentukan bayangan, titik fokus (f = R/2), persamaan Gauss (1/f = 1/s + 1/s'), dan perbesaran.
 * 
 * Total Butir Soal: 14 (Mudah: 9, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-optik-cermin";
  const subTopicSlug = "cermin-datar-cekung-cembung";
  const questions = [
  {
    "id": "fis-gel-optik-cermin-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Jarak fokus cermin cekung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$20\\text{ cm}$",
      "$40\\text{ cm}$",
      "$60\\text{ cm}$",
      "$80\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Jarak fokus cermin sferis ($f$) merupakan setengah dari panjang jari-jari kelengkungannya ($R$):<br>$$f = \\frac{R}{2}$$<br>Untuk cermin cekung, jarak fokus bernilai positif ($f > 0$).",
      "steps": "1. Diketahui jari-jari kelengkungan $R = 40\\text{ cm}$.<br>2. Hitung jarak fokus:<br>$$f = \\frac{40\\text{ cm}}{2} = +20\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan mengalikan jari-jari dengan 2 yang menghasilkan 80 cm. Titik fokus terletak di tengah-tengah antara puncak cermin dan pusat kelengkungan."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Jarak fokus cermin sferis ($f$) merupakan setengah dari panjang jari-jari kelengkungannya ($R$): $$f = \\frac{R}{2}$$ Untuk cermin cekung, jarak fokus bernilai positif ($f > 0$). **Tips:** Jangan mengalikan jari-jari dengan 2 yang menghasilkan 80 cm."
  },
  {
    "id": "fis-gel-optik-cermin-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah benda diletakkan pada jarak $20\\text{ cm}$ di depan cermin cekung dan menghasilkan bayangan nyata pada jarak $60\\text{ cm}$ di depan cermin. Perbesaran linier bayangan yang terbentuk adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}33\\text{ kali}$",
      "$1{,}5\\text{ kali}$",
      "$2\\text{ kali}$",
      "$3\\text{ kali}$",
      "$4\\text{ kali}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Perbesaran linier bayangan ($M$) pada cermin lengkung didefinisikan sebagai perbandingan nilai mutlak jarak bayangan ($s'$) terhadap jarak benda ($s$):<br>$$M = \\left|\\frac{s'}{s}\\right|$$",
      "steps": "1. Diketahui $s = 20\\text{ cm}$ dan $s' = 60\\text{ cm}$.<br>2. Hitung perbesaran linier:<br>$$M = \\left|\\frac{60}{20}\\right| = 3\\text{ kali}$$<br>3. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Pastikan pembilang adalah jarak bayangan ($s'$) dan penyebut adalah jarak benda ($s$). Jika terbalik akan memperoleh nilai $20/60 = 0{,}33$ (opsi A)."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Perbesaran linier bayangan ($M$) pada cermin lengkung didefinisikan sebagai perbandingan nilai mutlak jarak bayangan ($s'$) terhadap jarak benda ($s$): $$M = \\left|\\frac{s'}{s}\\right|$$. **Tips:** Pastikan pembilang adalah jarak bayangan ($s'$) dan penyebut adalah jarak benda ($s$)."
  },
  {
    "id": "fis-gel-optik-cermin-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Berdasarkan prinsip sinar-sinar istimewa pada cermin cekung, seberkas sinar datang yang merambat sejajar dengan sumbu utama cermin akan dipantulkan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Melalui titik fokus cermin",
      "Seolah-olah berasal dari titik fokus di belakang cermin",
      "Melalui titik pusat kelengkungan cermin",
      "Sejajar kembali dengan sumbu utama cermin",
      "Tegak lurus terhadap sumbu utama cermin"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tiga sinar istimewa pada cermin cekung:<br>1. Sinar datang sejajar sumbu utama dipantulkan <strong>melalui titik fokus ($F$)</strong>.<br>2. Sinar datang melalui titik fokus dipantulkan sejajar sumbu utama.<br>3. Sinar datang melalui titik pusat kelengkungan ($M$) dipantulkan kembali melalui jalur yang sama.",
      "steps": "1. Analisis sifat sinar datang sejajar sumbu utama: Cermin cekung bersifat mengumpulkan sinar (konvergen).<br>2. Berkas sinar pantul diarahkan memotong sumbu utama tepat di titik fokus ($F$).<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Opsi B adalah karakteristik sinar istimewa pada cermin cembung (menyebarkan sinar seolah berasal dari fokus di belakang cermin)."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Tiga sinar istimewa pada cermin cekung: 1. Sinar datang sejajar sumbu utama dipantulkan melalui titik fokus ($F$) . 2. Sinar datang melalui titik fokus dipantulkan sejajar sumbu utama. 3. Sinar datang melalui titik pusat kelengkungan ($M$) dipantulkan kembali melalui jalur yang sama. **Tips:** adalah karakteristik sinar istimewa pada cermin cembung (menyebarkan sinar seolah berasal dari fokus di belakang cermin)."
  },
  {
    "id": "fis-gel-optik-cermin-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah lilin berada pada jarak $12\\text{ cm}$ di depan sebuah cermin cekung yang memiliki jarak fokus $8\\text{ cm}$. Jarak bayangan yang terbentuk dari permukaan cermin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$16\\text{ cm}$",
      "$20\\text{ cm}$",
      "$24\\text{ cm}$",
      "$28\\text{ cm}$",
      "$32\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hubungan jarak benda ($s$), jarak bayangan ($s'$), dan jarak fokus cermin ($f$) memenuhi persamaan Gauss:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      "steps": "1. Diketahui $s = 12\\text{ cm}$ dan $f = +8\\text{ cm}$.<br>2. Masukkan ke rumus cermin:<br>$$\\frac{1}{s'} = \\frac{1}{8} - \\frac{1}{12}$$<br>3. Samakan penyebut KPK 24:<br>$$\\frac{1}{s'} = \\frac{3 - 2}{24} = \\frac{1}{24} \\implies s' = +24\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Hati-hati saat menyamakan penyebut pecahan. Pastikan tidak menjumlahkan penyebut secara langsung."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Hubungan jarak benda ($s$), jarak bayangan ($s'$), dan jarak fokus cermin ($f$) memenuhi persamaan Gauss: $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$. **Tips:** Hati-hati saat menyamakan penyebut pecahan."
  },
  {
    "id": "fis-gel-optik-cermin-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "mudah",
    "statement": "Sebuah cermin cembung memiliki jari-jari kelengkungan $30\\text{ cm}$. Berdasarkan konvensi tanda optik geometris, nilai jarak fokus cermin cembung tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+30\\text{ cm}$",
      "$+15\\text{ cm}$",
      "$0\\text{ cm}$",
      "$-15\\text{ cm}$",
      "$-30\\text{ cm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Cermin cembung memiliki titik fokus di belakang permukaan pemantul (bersifat maya/divergen). Oleh karena itu, jarak fokusnya selalu bernilai negatif:<br>$$f = -\\frac{R}{2}$$",
      "steps": "1. Diketahui $R = 30\\text{ cm}$.<br>2. Hitung jarak fokus bertanda negatif:<br>$$f = -\\frac{30\\text{ cm}}{2} = -15\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Lupa menyertakan tanda negatif pada fokus cermin cembung adalah kesalahan yang paling sering terjadi saat menyelesaikan soal optik geometris."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah",
    "hint": "Cermin cembung memiliki titik fokus di belakang permukaan pemantul (bersifat maya/divergen). Oleh karena itu, jarak fokusnya selalu bernilai negatif: $$f = -\\frac{R}{2}$$."
  },
  {
    "id": "fis-gel-optik-cermin-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah cermin cekung memiliki jarak fokus $15\\text{ cm}$. Agar terbentuk bayangan nyata dengan ukuran $3$ kali ukuran bendanya, benda harus diletakkan di depan cermin pada jarak ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bayangan nyata pada cermin cekung berada di depan cermin ($s' > 0$) dan bersifat terbalik. Hubungan perbesaran bayangan nyata:<br>$$M = \\frac{s'}{s} = 3 \\implies s' = 3s$$<br>Persamaan cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$",
      "steps": "1. Substitusikan $s' = 3s$ dan $f = 15\\text{ cm}$:<br>$$\\frac{1}{15} = \\frac{1}{s} + \\frac{1}{3s}$$<br>2. Samakan penyebut di ruas kanan:<br>$$\\frac{1}{15} = \\frac{3 + 1}{3s} = \\frac{4}{3s}$$<br>3. Lakukan perkalian silang:<br>$$3s = 4 \\times 15 = 60 \\implies s = 20\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jika keliru menganggap bayangannya maya ($s' = -3s$), maka persamaannya menjadi $\\frac{1}{15} = \\frac{2}{3s} \\implies s = 10\\text{ cm}$ (opsi A). Perhatikan kata kunci 'bayangan nyata'."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Bayangan nyata pada cermin cekung berada di depan cermin ($s' > 0$) dan bersifat terbalik. Hubungan perbesaran bayangan nyata: $$M = \\frac{s'}{s} = 3 \\implies s' = 3s$$ Persamaan cermin: $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$$."
  },
  {
    "id": "fis-gel-optik-cermin-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah cermin cembung memiliki jari-jari kelengkungan $40\\text{ cm}$. Jika sebuah benda diletakkan di depan cermin tersebut sehingga bayangan yang terbentuk berukuran $\\frac{1}{4}$ kali tinggi bendanya, jarak benda dari permukaan cermin adalah ....",
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
      "concept": "Pada cermin cembung, fokus bernilai negatif ($f = -R/2$) dan bayangan dari benda nyata selalu bersifat maya ($s' < 0$):<br>$$f = -\\frac{40}{2} = -20\\text{ cm}, \\quad s' = -\\frac{1}{4}s$$",
      "steps": "1. Substitusikan ke rumus cermin:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies -\\frac{1}{20} = \\frac{1}{s} - \\frac{4}{s} = -\\frac{3}{s}$$<br>2. Kalikan silang:<br>$$\\frac{1}{20} = \\frac{3}{s} \\implies s = 3 \\times 20 = 60\\text{ cm}$$<br>3. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Lupa menyertakan tanda minus pada fokus cermin cembung atau pada jarak bayangan maya akan menyebabkan kesalahan nilai jarak benda."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pada cermin cembung, fokus bernilai negatif ($f = -R/2$) dan bayangan dari benda nyata selalu bersifat maya ($s' < 0$): $$f = -\\frac{40}{2} = -20\\text{ cm}, \\quad s' = -\\frac{1}{4}s$$."
  },
  {
    "id": "fis-gel-optik-cermin-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Di depan cermin cekung dengan jari-jari kelengkungan $60\\text{ cm}$ diletakkan sebuah lilin sehingga menghasilkan bayangan tegak dengan perbesaran $2$ kali ukuran aslinya. Jarak lilin tersebut dari cermin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bayangan tegak pada cermin cekung selalu merupakan bayangan maya yang terletak di belakang cermin ($s' < 0$):<br>$$M = -\\frac{s'}{s} = 2 \\implies s' = -2s, \\quad f = +\\frac{R}{2} = +30\\text{ cm}$$",
      "steps": "1. Masukkan ke persamaan cermin Gauss:<br>$$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{30} = \\frac{1}{s} - \\frac{1}{2s}$$<br>2. Sederhanakan ruas kanan:<br>$$\\frac{1}{30} = \\frac{2 - 1}{2s} = \\frac{1}{2s}$$<br>3. Kalikan silang:<br>$$2s = 30 \\implies s = 15\\text{ cm}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jika keliru menganggap bayangan nyata ($s' = +2s$), akan diperoleh $\\frac{1}{30} = \\frac{3}{2s} \\implies s = 45\\text{ cm}$ (opsi E). Bayangan nyata pada cermin cekung pasti terbalik, bukan tegak."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Bayangan tegak pada cermin cekung selalu merupakan bayangan maya yang terletak di belakang cermin ($s' < 0$): $$M = -\\frac{s'}{s} = 2 \\implies s' = -2s, \\quad f = +\\frac{R}{2} = +30\\text{ cm}$$."
  },
  {
    "id": "fis-gel-optik-cermin-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Sebuah benda mula-mula diletakkan pada jarak $60\\text{ cm}$ di depan sebuah cermin cekung yang memiliki jarak fokus $30\\text{ cm}$. Jika benda tersebut kemudian digeser sejauh $15\\text{ cm}$ mendekati cermin, pergeseran posisi bayangan yang terjadi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Bergeser $15\\text{ cm}$ mendekati cermin",
      "Bergeser $30\\text{ cm}$ menjauhi cermin",
      "Bergeser $30\\text{ cm}$ mendekati cermin",
      "Bergeser $45\\text{ cm}$ menjauhi cermin",
      "Bergeser $15\\text{ cm}$ menjauhi cermin"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pergeseran posisi bayangan diperoleh dengan menghitung posisi bayangan mula-mula ($s_1'$) dan posisi bayangan akhir ($s_2'$) setelah pergeseran:<br>$$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$",
      "steps": "1. Kondisi awal ($s_1 = 60\\text{ cm}, f = 30\\text{ cm}$):<br>$$\\frac{1}{s_1'} = \\frac{1}{30} - \\frac{1}{60} = \\frac{1}{60} \\implies s_1' = +60\\text{ cm}$$<br>2. Benda digeser $15\\text{ cm}$ mendekati cermin $\\implies s_2 = 60 - 15 = 45\\text{ cm}$.<br>3. Kondisi akhir ($s_2 = 45\\text{ cm}$):<br>$$\\frac{1}{s_2'} = \\frac{1}{30} - \\frac{1}{45} = \\frac{3 - 2}{90} = \\frac{1}{90} \\implies s_2' = +90\\text{ cm}$$<br>4. Selisih posisi bayangan: $\\Delta s' = 90 - 60 = 30\\text{ cm}$ menjauhi cermin.<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Ketika benda di depan cermin cekung digeser mendekati titik fokus, bayangan nyatanya akan bergerak berlawanan arah yaitu semakin menjauhi cermin dan bertambah besar."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Pergeseran posisi bayangan diperoleh dengan menghitung posisi bayangan mula-mula ($s_1'$) dan posisi bayangan akhir ($s_2'$) setelah pergeseran: $$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$."
  },
  {
    "id": "fis-gel-optik-cermin-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-optik",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung dan Cembung",
    "difficulty": "sedang",
    "statement": "Berdasarkan Dalil Esbach pada pembagian ruang optik cermin cekung, jika sebuah benda diletakkan di ruang II (di antara titik fokus $F$ dan titik pusat kelengkungan $M$), letak dan sifat bayangan yang terbentuk adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Di ruang III dengan sifat nyata, terbalik, dan diperbesar",
      "Di ruang I dengan sifat maya, tegak, dan diperkecil",
      "Di ruang IV dengan sifat maya, tegak, dan diperbesar",
      "Di ruang III dengan sifat nyata, tegak, dan diperkecil",
      "Di ruang II dengan sifat nyata, terbalik, dan sama besar"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan Dalil Esbach pada cermin cekung:<br>1. Jumlah nomor ruang benda dan ruang bayangan sama dengan 5:<br>$$R_{\\text{benda}} + R_{\\text{bayangan}} = 5$$<br>2. Jika $R_{\\text{bayangan}} > R_{\\text{benda}}$, bayangan diperbesar.<br>3. Bayangan di depan cermin (ruang I, II, III) bersifat nyata dan terbalik; bayangan di belakang cermin (ruang IV) bersifat maya dan tegak.",
      "steps": "1. Benda berada di ruang II $\\implies R_{\\text{benda}} = 2$.<br>2. Nomor ruang bayangan: $R_{\\text{bayangan}} = 5 - 2 = 3$ (ruang III).<br>3. Karena $R_{\\text{bayangan}} = 3 > R_{\\text{benda}} = 2$, bayangan berukuran diperbesar.<br>4. Karena berada di ruang III (di depan cermin), bayangan bersifat nyata dan terbalik.<br>5. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Jangan tertukar sifat terbalik dan tegak: semua bayangan nyata pada cermin sferis selalu terbalik, sedangkan semua bayangan maya selalu tegak."
    },
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang",
    "hint": "Aturan Dalil Esbach pada cermin cekung: 1. Jumlah nomor ruang benda dan ruang bayangan sama dengan 5: $$R_{\\text{benda}} + R_{\\text{bayangan}} = 5$$ 2. Jika $R_{\\text{bayangan}} > R_{\\text{benda}}$, bayangan diperbesar. 3. Bayangan di depan cermin (ruang I, II, III) bersifat nyata dan terbalik; bayangan di belakang cermin (ruang IV) bersifat maya dan tegak."
  },
  {
    "id": "mudah-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah benda diletakkan pada jarak $15\\text{ cm}$ di depan cermin cekung yang memiliki jarak fokus $10\\text{ cm}$. Jarak bayangan yang terbentuk dari cermin adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Persamaan Cermin Cekung (Fokus Positif):</strong><br>\n          $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30}$$</li>\n          <li>$$s' = 30\\text{ cm}$$ (bayangan nyata di depan cermin).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Ingat cermin cekung memiliki fokus positif ($+10\\text{ cm}$), sedangkan cermin cembung memiliki fokus negatif.\n        </div>\n      "
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "hint": "Persamaan Cermin Cekung (Fokus Positif): $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$. **Tips:** Ingat cermin cekung memiliki fokus positif ($+10\\text{ cm}$), sedangkan cermin cembung memiliki fokus negatif."
  },
  {
    "id": "drill-cah-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Cermin Cembung Pembentukan Bayangan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah spion mobil berupa cermin cembung memiliki jarak fokus $|f| = 20\\text{ cm}$. Jika sebuah sepeda motor berada pada jarak $s = 20\\text{ cm}$ di depan cermin tersebut, maka letak bayangan sepeda motor ($s'$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10\\text{ cm}$ (maya di belakang cermin)",
      "$+10\\text{ cm}$ (nyata di depan cermin)",
      "$-20\\text{ cm}$ (maya di belakang cermin)",
      "$-40\\text{ cm}$ (maya di belakang cermin)",
      "$+20\\text{ cm}$ (nyata di depan cermin)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Aturan Tanda Cermin Cembung:</strong><br>• Jarak fokus cermin cembung <strong>selalu bernilai negatif</strong> ($f = -20\\text{ cm}$).<br>• Persamaan cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$.<br>• Bayangan cermin cembung selalu maya ($s' < 0$), tegak, dan diperkecil.</div>",
      "steps": "<ol><li>$f = -20\\text{ cm}$, $s = +20\\text{ cm}$.</li><li>$\\frac{1}{s'} = -\\frac{1}{20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (tanda minus menandakan bayangan maya di belakang cermin).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Wajib Diingat:</strong> Selalu beri tanda minus pada fokus cermin cembung dan lensa cekung ($f < 0$).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "hint": "Aturan Tanda Cermin Cembung: • Jarak fokus cermin cembung selalu bernilai negatif ($f = -20\\text{ cm}$). • Persamaan cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$. • Bayangan cermin cembung selalu maya ($s' < 0$), tegak, dan diperkecil. **Tips:** ⚠️ Wajib Diingat: Selalu beri tanda minus pada fokus cermin cembung dan lensa cekung ($f < 0$)."
  },
  {
    "id": "drill2-cah-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Jumlah Bayangan Dua Cermin Datar Bersudut",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah cermin datar disusun saling berhadapan membentuk sudut $\\alpha = 60^\\circ$. Sebuah lilin diletakkan di antara kedua cermin tersebut. Jumlah bayangan lilin yang terbentuk adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ bayangan}$",
      "$6\\text{ bayangan}$",
      "$4\\text{ bayangan}$",
      "$7\\text{ bayangan}$",
      "$3\\text{ bayangan}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Rumus Jumlah Bayangan Cermin Datar:</strong><br>$$n = \\frac{360^\\circ}{\\alpha} - 1$$</div>",
      "steps": "<ol><li>Sudut apit: $\\alpha = 60^\\circ$.</li><li>Bagi lingkaran penuh: $\\frac{360^\\circ}{60^\\circ} = 6$.</li><li>Kurangkan satu untuk benda asli: $n = 6 - 1 = 5\\text{ bayangan}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jangan Lupa $-1$:</strong> Nilai $360^\\circ / \\alpha$ harus selalu dikurangi 1 karena salah satu posisi ditempati oleh benda asli.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "hint": "Gunakan perumusan konsep fisis: $$n = \\frac{360^\\circ}{\\alpha} - 1$$. **Tips:** ⚠️ Jangan Lupa $-1$: Nilai $360^\\circ / \\alpha$ harus selalu dikurangi 1 karena salah satu posisi ditempati oleh benda asli."
  },
  {
    "id": "drill2-cah-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-optik-cermin",
    "category": "Pembentukan Bayangan Cermin Cekung",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan cermin cekung tersebut. Jarak bayangan ($s'$) dan perbesaran bayangan ($M$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$s' = +60\\text{ cm}$ (nyata) dan $M = 2\\text{ kali}$",
      "$s' = -60\\text{ cm}$ (maya) dan $M = 2\\text{ kali}$",
      "$s' = +20\\text{ cm}$ (nyata) dan $M = 0{,}67\\text{ kali}$",
      "$s' = +12\\text{ cm}$ (nyata) dan $M = 0{,}4\\text{ kali}$",
      "$s' = +30\\text{ cm}$ (nyata) dan $M = 1\\text{ kali}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Fokus dan Jari-Jari Cermin Cekung:</strong><br>• $f = \\frac{1}{2}R$ (cermin cekung bertanda positif $f > 0$)<br>• $s' = \\frac{s \\cdot f}{s - f}$<br>• Perbesaran: $M = \\left| \\frac{s'}{s} \\right|$</div>",
      "steps": "<ol><li>Jarak fokus: $f = \\frac{1}{2} \\times 40 = +20\\text{ cm}$.</li><li>Jarak bayangan: $s' = \\frac{30 \\times 20}{30 - 20} = \\frac{600}{10} = +60\\text{ cm}$ (nyata di depan cermin).</li><li>Perbesaran: $M = \\frac{60}{30} = 2\\text{ kali}$ diperbesar.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal Jari-Jari:</strong> Jari-jari $R$ selalu dua kali jarak fokus ($R = 2f$). Jangan gunakan nilai $R$ langsung sebagai $f$.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Cermin Datar, Cekung, dan Cembung",
    "subTopic": "Cermin Datar, Cekung, dan Cembung",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-optik",
    "subTopicSlug": "cermin-datar-cekung-cembung",
    "hint": "Hubungan Fokus dan Jari-Jari Cermin Cekung: • $f = \\frac{1}{2}R$ (cermin cekung bertanda positif $f > 0$) • $s' = \\frac{s \\cdot f}{s - f}$ • Perbesaran: $M = \\left| \\frac{s'}{s} \\right|$."
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
