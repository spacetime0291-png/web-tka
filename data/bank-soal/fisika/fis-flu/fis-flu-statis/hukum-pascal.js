/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Statis (fis-flu-statis)
 * Sub-Bab: Hukum Pascal (fis-flu-statis-pascal)
 * Slug: hukum-pascal
 * Indikator: Penerusan tekanan ke segala arah sama besar pada dongkrak hidrolik (F_1 / A_1 = F_2 / A_2).
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-statis-pascal";
  const subTopicSlug = "hukum-pascal";
  const questions = [
  {
    "id": "fis-flu-statis-pascal-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "mudah",
    "statement": "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada suatu zat cair dalam ruang tertutup akan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Diteruskan ke segala arah dengan sama besar",
      "Berkurang secara beraturan seiring bertambahnya jarak dari sumber tekanan",
      "Diteruskan hanya ke arah tegak lurus terhadap dasar wadah",
      "Berbanding terbalik dengan massa jenis zat cair tersebut",
      "Meningkat secara eksponensial di setiap titik sudut wadah"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Pascal adalah prinsip dasar hidrostatika dalam ruang tertutup:<br>$$\\Delta P_1 = \\Delta P_2 = \\dots = \\Delta P_n$$Artinya, setiap perubahan tekanan yang diberikan pada permukaan zat cair dalam wadah tertutup akan diteruskan ke setiap bagian zat cair dan dinding wadahnya ke segala arah dengan besar yang sama tanpa berkurang.",
      "steps": "1. Tinjau bunyi hukum fisika Pascal: 'Tekanan yang diberikan pada zat cair dalam ruang tertutup akan diteruskan sama besar ke segala arah.'<br>2. Evaluasi pilihan:<br>• Opsi A: Tepat, sesuai definisi baku Hukum Pascal.<br>• Opsi B, C, D, E: Bertentangan dengan sifat penerusan tekanan fluida inkompresibel pada ruang tertutup.",
      "pitfalls": "Siswa terkadang menyamakan prinsip Hukum Pascal (ruang tertutup, tekanan sama ke segala arah) dengan tekanan hidrostatis bejana terbuka yang nilainya bergantung pada kedalaman."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-flu-statis-pascal-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "mudah",
    "statement": "Sebuah alat pengangkat hidrolik memiliki piston kecil dengan luas penampang $A_1 = 10\\text{ cm}^2$ dan piston besar dengan luas penampang $A_2 = 250\\text{ cm}^2$. Jika pada piston kecil diberikan gaya tekan sebesar $F_1 = 200\\text{ N}$, besar gaya angkat yang dihasilkan pada piston besar ($F_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.500\\text{ N}$",
      "$5.000\\text{ N}$",
      "$7.500\\text{ N}$",
      "$10.000\\text{ N}$",
      "$25.000\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan Hukum Pascal, tekanan fluida pada kedua penampang bernilai sama:<br>$$P_1 = P_2 \\iff \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$Sehingga gaya angkat pada piston besar dirumuskan:<br>$$F_2 = F_1 \\cdot \\frac{A_2}{A_1}$$",
      "steps": "1. Masukkan besaran yang diketahui:<br>• $A_1 = 10\\text{ cm}^2$<br>• $A_2 = 250\\text{ cm}^2$<br>• $F_1 = 200\\text{ N}$<br>2. Hitung gaya angkat pada penampang besar:<br>$$F_2 = 200\\text{ N} \\times \\frac{250\\text{ cm}^2}{10\\text{ cm}^2} = 200 \\times 25 = 5.000\\text{ N}$$",
      "pitfalls": "Terkecoh membalik perbandingan luas penampang menjadi $F_1 \\times \\frac{A_1}{A_2}$, yang menghasilkan gaya sangat kecil ($8\\text{ N}$), padahal dongkrak hidrolik berfungsi sebagai pengganda gaya mekanik."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-flu-statis-pascal-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "mudah",
    "statement": "Sebuah dongkrak hidrolik digunakan untuk mengangkat sebuah mobil yang memiliki berat $W = 10.000\\text{ N}$. Piston kecil dongkrak tersebut memiliki diameter $d_1 = 4\\text{ cm}$, sedangkan piston besarnya memiliki diameter $d_2 = 20\\text{ cm}$. Besar gaya minimal yang harus diberikan pada piston kecil agar mobil tersebut dapat terangkat adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ N}$",
      "$400\\text{ N}$",
      "$500\\text{ N}$",
      "$2.000\\text{ N}$",
      "$2.500\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Luas penampang lingkaran berbanding lurus dengan kuadrat diameternya ($A = \\frac{1}{4}\\pi d^2$). Sehingga persamaan Hukum Pascal menggunakan diameter menjadi:<br>$$\\frac{F_1}{d_1^2} = \\frac{F_2}{d_2^2} \\iff F_1 = F_2 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      "steps": "1. Identifikasi data yang diketahui:<br>• $d_1 = 4\\text{ cm}$<br>• $d_2 = 20\\text{ cm}$<br>• $F_2 = W = 10.000\\text{ N}$<br>2. Hitung rasio diameter:<br>$$\\frac{d_1}{d_2} = \\frac{4}{20} = \\frac{1}{5}$$<br>3. Kuadratkan rasio dan hitung gaya tekan minimal $F_1$:<br>$$F_1 = 10.000\\text{ N} \\times \\left(\\frac{1}{5}\\right)^2 = 10.000 \\times \\frac{1}{25} = 400\\text{ N}$$",
      "pitfalls": "Kesalahan umum adalah hanya membagi gaya dengan perbandingan diameter secara linier ($10.000 / 5 = 2.000\\text{ N}$, opsi D) tanpa menguadratkan rasio diameternya."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-flu-statis-pascal-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "mudah",
    "statement": "Pada suatu sistem bejana hidrolik ideal, perbandingan luas penampang piston kecil dan piston besar adalah $A_1 : A_2 = 1 : 50$. Jika piston kecil ditekan ke bawah sejauh $s_1 = 25\\text{ cm}$, maka ketinggian kenaikan piston besar ($s_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}2\\text{ cm}$",
      "$0{,}5\\text{ cm}$",
      "$1{,}0\\text{ cm}$",
      "$2{,}0\\text{ cm}$",
      "$5{,}0\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena fluida hidrolik bersifat inkompresibel (tak termampatkan), volume fluida yang dipindahkan oleh piston kecil harus sama dengan volume fluida yang mendorong piston besar:<br>$$V_1 = V_2 \\iff A_1 \\cdot s_1 = A_2 \\cdot s_2$$Sehingga perpindahan piston berbanding terbalik dengan luas penampangnya:<br>$$s_2 = s_1 \\cdot \\frac{A_1}{A_2}$$",
      "steps": "1. Substitusikan rasio luas penampang dan jarak pergeseran piston kecil:<br>$$s_2 = 25\\text{ cm} \\times \\frac{1}{50} = 0{,}5\\text{ cm}$$",
      "pitfalls": "Siswa sering mengalikan jarak dengan rasio luas ($25 \\times 50 = 1250\\text{ cm}$), padahal keuntungan mekanik gaya pada dongkrak hidrolik harus dibayar dengan pergeseran jarak yang lebih pendek."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-flu-statis-pascal-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "mudah",
    "statement": "Pada sistem rem hidrolik sebuah kendaraan, pedal rem terhubung langsung ke sebuah master cylinder berdiameter $2\\text{ cm}$. Saat pedal diinjak dengan gaya $100\\text{ N}$, tekanan diteruskan melalui minyak rem ke sebuah silinder roda (wheel cylinder) yang memiliki diameter $4\\text{ cm}$. Besar gaya dorong yang bekerja pada kampas rem di silinder roda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ N}$",
      "$300\\text{ N}$",
      "$400\\text{ N}$",
      "$600\\text{ N}$",
      "$800\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Prinsip kerja rem hidrolik memanfaatkan transmisi tekanan fluida Hukum Pascal. Gaya dorong pada silinder roda ($F_2$) berbanding lurus dengan kuadrat rasio diameternya terhadap silinder master ($F_1$):<br>$$F_2 = F_1 \\cdot \\left(\\frac{d_2}{d_1}\\right)^2$$",
      "steps": "1. Identifikasi besaran:<br>• Diameter master silinder: $d_1 = 2\\text{ cm}$<br>• Diameter silinder roda: $d_2 = 4\\text{ cm}$<br>• Gaya tekan pedal: $F_1 = 100\\text{ N}$<br>2. Hitung gaya dorong pada kampas rem:<br>$$F_2 = 100\\text{ N} \\times \\left(\\frac{4\\text{ cm}}{2\\text{ cm}}\\right)^2 = 100 \\times 2^2 = 100 \\times 4 = 400\\text{ N}$$",
      "pitfalls": "Terkecoh hanya mengalikan gaya dengan perbandingan diameter secara linier ($100 \\times 2 = 200\\text{ N}$, opsi A), lupa bahwa luas lingkaran sebanding dengan kuadrat diameternya."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-flu-statis-pascal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "sedang",
    "statement": "Sebuah dongkrak hidrolik memiliki piston kecil dengan luas penampang $A_1 = 5\\text{ cm}^2$ dan piston besar dengan luas penampang $A_2 = 100\\text{ cm}^2$. Fluida di dalam dongkrak adalah oli hidrolik dengan massa jenis $\\rho = 800\\text{ kg/m}^3$. Saat mengangkat beban bermassa $M = 200\\text{ kg}$ pada piston besar, permukaan piston besar berada $h = 50\\text{ cm}$ lebih tinggi daripada permukaan piston kecil. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tekan $F_1$ yang harus diberikan pada piston kecil untuk mempertahankan kesetimbangan sistem adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$98\\text{ N}$",
      "$100\\text{ N}$",
      "$102\\text{ N}$",
      "$104\\text{ N}$",
      "$110\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika terdapat perbedaan ketinggian cairan setinggi $h$ antara kedua piston, tekanan pada bidang acuan horizontal setinggi piston kecil harus setimbang:<br>$$P_1 = P_2 + \\rho \\cdot g \\cdot h \\iff \\frac{F_1}{A_1} = \\frac{F_2}{A_2} + \\rho \\cdot g \\cdot h$$Sehingga gaya pada piston kecil dihitung dengan:<br>$$F_1 = A_1 \\cdot \\left(\\frac{F_2}{A_2} + \\rho \\cdot g \\cdot h\\right)$$",
      "steps": "1. Konversikan besaran ke satuan SI:<br>• $A_1 = 5 \\times 10^{-4}\\text{ m}^2$<br>• $A_2 = 100 \\times 10^{-4}\\text{ m}^2 = 10^{-2}\\text{ m}^2$<br>• $F_2 = M \\cdot g = 200\\text{ kg} \\times 10\\text{ m/s}^2 = 2.000\\text{ N}$<br>• $h = 50\\text{ cm} = 0{,}5\\text{ m}$<br>• $\\rho = 800\\text{ kg/m}^3$<br>2. Hitung tekanan pada dasar piston besar:<br>$$P_2 = \\frac{F_2}{A_2} = \\frac{2.000\\text{ N}}{10^{-2}\\text{ m}^2} = 200.000\\text{ Pa}$$<br>3. Hitung tekanan hidrostatis akibat kolom cairan setinggi $h$:<br>$$P_h = \\rho \\cdot g \\cdot h = 800\\text{ kg/m}^3 \\times 10\\text{ m/s}^2 \\times 0{,}5\\text{ m} = 4.000\\text{ Pa}$$<br>4. Hitung tekanan total pada piston kecil dan gaya $F_1$:<br>$$P_1 = 200.000\\text{ Pa} + 4.000\\text{ Pa} = 204.000\\text{ Pa}$$<br>$$F_1 = P_1 \\cdot A_1 = 204.000\\text{ Pa} \\times 5 \\times 10^{-4}\\text{ m}^2 = 102\\text{ N}$$",
      "pitfalls": "Siswa sering mengabaikan efek ketinggian kolom oli hidrolik dan hanya menghitung $F_1 = 2.000 \\times \\frac{5}{100} = 100\\text{ N}$ (opsi B). Kolom fluida setinggi $0{,}5\\text{ m}$ turut menyumbang beban tekanan tambahan sebesar $4.000\\text{ Pa}$."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-flu-statis-pascal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "sedang",
    "statement": "Sebuah dongkrak hidrolik bengkel memiliki efisiensi mekanik sebesar $\\eta = 80\\%$ akibat adanya gesekan pada silinder piston dan viskositas oli hidrolik. Rasio diameter piston kecil terhadap piston besar adalah $1 : 10$. Jika dongkrak tersebut digunakan untuk mengangkat beban kendaraan seberat $W = 16.000\\text{ N}$, besar gaya tekan nyata ($F_1$) yang harus dikerjakan pada piston kecil adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$128\\text{ N}$",
      "$160\\text{ N}$",
      "$200\\text{ N}$",
      "$250\\text{ N}$",
      "$320\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Efisiensi mekanik dongkrak hidrolik dirumuskan sebagai rasio gaya angkat ideal terhadap gaya nyata yang diberikan:<br>$$\\eta = \\frac{F_{1,\\text{ideal}}}{F_{1,\\text{nyata}}} \\implies F_{1,\\text{nyata}} = \\frac{F_{1,\\text{ideal}}}{\\eta}$$Di mana gaya ideal menurut Hukum Pascal dengan rasio diameter adalah:<br>$$F_{1,\\text{ideal}} = W \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      "steps": "1. Hitung gaya ideal tanpa rugi gesekan:<br>$$F_{1,\\text{ideal}} = 16.000\\text{ N} \\times \\left(\\frac{1}{10}\\right)^2 = 16.000 \\times \\frac{1}{100} = 160\\text{ N}$$<br>2. Perhitungkan efisiensi mekanik $\\eta = 80\\% = 0{,}8$:<br>$$F_{1,\\text{nyata}} = \\frac{160\\text{ N}}{0{,}8} = 200\\text{ N}$$",
      "pitfalls": "Terkecoh mengalikan efisiensi dengan gaya ideal ($160 \\times 0{,}8 = 128\\text{ N}$, opsi A). Karena terdapat rugi-rugi gesekan, gaya masukan yang harus diberikan selalu lebih besar dari kondisi ideal, bukan lebih kecil."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-flu-statis-pascal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "sedang",
    "statement": "Sebuah dongkrak hidrolik dilengkapi dengan tuas pengungkit mekanik pada tuas pemompaannya. Tuas tersebut memiliki panjang lengan kuasa $L_k = 60\\text{ cm}$ dari titik tumpu dan panjang lengan beban $L_b = 10\\text{ cm}$ yang langsung menekan piston kecil berpenampang $A_1 = 4\\text{ cm}^2$. Piston besar dongkrak memiliki luas penampang $A_2 = 240\\text{ cm}^2$. Jika seorang mekanik menekan ujung tuas kuasa dengan gaya $F_{\\text{tangan}} = 50\\text{ N}$, besar beban maksimum yang dapat diangkat oleh piston besar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3.000\\text{ N}$",
      "$9.000\\text{ N}$",
      "$12.000\\text{ N}$",
      "$18.000\\text{ N}$",
      "$24.000\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Sistem ini menggabungkan dua tahap penggandaan gaya mekanik:<br>1) Keuntungan mekanik tuas pengungkit:<br>$$F_1 = F_{\\text{tangan}} \\cdot \\frac{L_k}{L_b}$$<br>2) Keuntungan mekanik bejana hidrolik Hukum Pascal:<br>$$F_2 = F_1 \\cdot \\frac{A_2}{A_1}$$Sehingga keuntungan mekanik total adalah hasil kali kedua faktor pengali.",
      "steps": "1. Hitung gaya yang diteruskan tuas ke piston kecil ($F_1$):<br>$$F_1 = 50\\text{ N} \\times \\frac{60\\text{ cm}}{10\\text{ cm}} = 50 \\times 6 = 300\\text{ N}$$<br>2. Hitung gaya angkat pada piston besar ($F_2$):<br>$$F_2 = 300\\text{ N} \\times \\frac{240\\text{ cm}^2}{4\\text{ cm}^2} = 300 \\times 60 = 18.000\\text{ N}$$",
      "pitfalls": "Siswa terkadang lupa memperhitungkan tuas pengungkit dan langsung mengalikan gaya tangan $50\\text{ N}$ dengan rasio hidrolik sehingga memperoleh $3.000\\text{ N}$ (opsi A)."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-flu-statis-pascal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "sedang",
    "statement": "Sebuah lift hidrolik digunakan untuk mengangkat mobil bermassa $1500\\text{ kg}$ setinggi $h = 1{,}6\\text{ meter}$ dalam selang waktu $t = 20\\text{ sekon}$ secara konstan. Jika silinder piston penopang mobil memiliki luas penampang $A = 300\\text{ cm}^2$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar tekanan kerja fluida di dalam silinder dan daya mekanik rata-rata sistem hidrolik berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 \\times 10^5\\text{ Pa}$ dan $1{,}2\\text{ kW}$",
      "$5 \\times 10^4\\text{ Pa}$ dan $1{,}2\\text{ kW}$",
      "$5 \\times 10^5\\text{ Pa}$ dan $2{,}4\\text{ kW}$",
      "$2{,}5 \\times 10^5\\text{ Pa}$ dan $1{,}2\\text{ kW}$",
      "$5 \\times 10^5\\text{ Pa}$ dan $600\\text{ W}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "1) Tekanan kerja fluida hidrolik adalah perbandingan berat beban terhadap luas penampang silinder:<br>$$P = \\frac{F}{A} = \\frac{M \\cdot g}{A}$$<br>2) Daya mekanik rata-rata adalah laju usaha pengangkatan terhadap waktu:<br>$$\\mathcal{P} = \\frac{W}{t} = \\frac{(M \\cdot g) \\cdot h}{t}$$",
      "steps": "1. Konversikan luas penampang: $A = 300\\text{ cm}^2 = 300 \\times 10^{-4}\\text{ m}^2 = 0{,}03\\text{ m}^2$<br>2. Hitung berat mobil: $F = 1500\\text{ kg} \\times 10\\text{ m/s}^2 = 15.000\\text{ N}$<br>3. Hitung tekanan kerja fluida:<br>$$P = \\frac{15.000\\text{ N}}{0{,}03\\text{ m}^2} = 500.000\\text{ Pa} = 5 \\times 10^5\\text{ Pa}$$<br>4. Hitung daya rata-rata pengangkatan:<br>$$\\mathcal{P} = \\frac{15.000\\text{ N} \\times 1{,}6\\text{ m}}{20\\text{ s}} = \\frac{24.000\\text{ J}}{20\\text{ s}} = 1.200\\text{ W} = 1{,}2\\text{ kW}$$",
      "pitfalls": "Kesalahan konversi satuan luas $300\\text{ cm}^2$ menjadi $0{,}3\\text{ m}^2$ (hanya dibagi 1000 alih-alih 10.000) yang menghasilkan tekanan keliru $5 \\times 10^4\\text{ Pa}$ (opsi B)."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-flu-statis-pascal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-statis",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal",
    "difficulty": "sedang",
    "statement": "Sebuah sistem transmisi hidrolik terdiri dari piston penggerak dengan luas $A_1 = 2\\text{ cm}^2$ dan piston beban dengan luas $A_2 = 50\\text{ cm}^2$. Piston beban dihubungkan secara tegak lurus dengan sebuah pegas spiral yang memiliki konstanta pegas $k = 20.000\\text{ N/m}$. Saat piston penggerak ditekan dengan gaya tetap $F_1 = 80\\text{ N}$, besar pemendekan pegas ($\\Delta x$) setelah sistem mencapai kondisi setimbang baru adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ cm}$",
      "$10\\text{ cm}$",
      "$15\\text{ cm}$",
      "$20\\text{ cm}$",
      "$25\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya yang dihasilkan pada piston beban dihitung menggunakan Hukum Pascal:<br>$$F_2 = F_1 \\cdot \\frac{A_2}{A_1}$$Gaya ini mengompresi pegas sesuai Hukum Hooke:<br>$$F_{\\text{pegas}} = k \\cdot \\Delta x$$Pada kondisi setimbang berlaku $F_2 = F_{\\text{pegas}}$.",
      "steps": "1. Hitung gaya dorong pada piston beban ($F_2$):<br>$$F_2 = 80\\text{ N} \\times \\frac{50\\text{ cm}^2}{2\\text{ cm}^2} = 80 \\times 25 = 2.000\\text{ N}$$<br>2. Hitung kompresi pemendekan pegas $\\Delta x$:<br>$$F_2 = k \\cdot \\Delta x \\implies \\Delta x = \\frac{F_2}{k} = \\frac{2.000\\text{ N}}{20.000\\text{ N/m}} = 0{,}1\\text{ m} = 10\\text{ cm}$$",
      "pitfalls": "Siswa sering lupa mengubah satuan meter ke sentimeter pada akhir perhitungan, atau salah menghitung rasio penampang $A_2 / A_1$."
    },
    "subTopicSlug": "hukum-pascal",
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sup-fis-flu-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subTopicId": "fis-flu-statis-pascal",
    "category": "Hukum Pascal Sistem Hidrolik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah dongkrak hidrolik memiliki dua pengisap berbentuk silinder dengan luas penampang pengisap kecil $A_1 = 25\\text{ cm}^2$ dan pengisap besar $A_2 = 500\\text{ cm}^2$. Jika pada pengisap besar diletakkan mobil dengan berat $10.000\\text{ N}$, maka gaya tekan minimum yang harus diberikan pada pengisap kecil agar mobil terangkat seimbang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$500\\text{ N}$",
      "$250\\text{ N}$",
      "$200\\text{ N}$",
      "$100\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pascal:</strong><br>Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_1 = \\frac{A_1}{A_2} F_2$.</div>",
      "steps": "<ol><li>Rasio penampang: $\\frac{A_1}{A_2} = \\frac{25}{500} = \\frac{1}{20}$.</li><li>Gaya input pada pengisap kecil: $F_1 = \\frac{1}{20} \\times 10.000 = 500\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Terbalik mengalikan rasio penampang sehingga menghasilkan nilai gaya yang tidak masuk akal ($200.000\\text{ N}$).</div>"
    },
    "bab": "Fluida",
    "subBab": "Hukum Pascal",
    "subTopic": "Hukum Pascal",
    "chapterTitle": "Fluida",
    "subChapterId": "fis-flu-statis",
    "subTopicSlug": "hukum-pascal"
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
