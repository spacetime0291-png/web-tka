/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Hukum Ohm & Hambatan (fis-lis-dc-ohm)
 * Slug: hukum-ohm-hambatan
 * Indikator: Hubungan tegangan, arus, dan hambatan (V = I * R), serta hambatan kawat penghantar.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-ohm";
  const subTopicSlug = "hukum-ohm-hambatan";
  const questions = [
  {
    "id": "fis-lis-dc-ohm-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Karakteristik Hukum Ohm pada Konduktor Ohmik",
    "difficulty": "mudah",
    "statement": "Pada suatu konduktor yang memenuhi Hukum Ohm (konduktor ohmik) pada suhu tetap, grafik hubungan antara beda potensial ($V$) dan kuat arus listrik ($I$) yang mengalir berbentuk ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Garis lurus linier yang melalui titik asal (0,0) dengan gradien kemiringan menyatakan nilai hambatan listrik",
      "Kurva eksponensial naik yang semakin curam seiring bertambahnya arus",
      "Garis horizontal mendatar yang menunjukkan tegangan selalu bernilai konstan",
      "Kurva parabola terbuka ke atas",
      "Kurva hiperbola yang menunjukkan hubungan berbanding terbalik"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Ohm menyatakan bahwa kuat arus ($I$) yang mengalir melalui suatu konduktor sebanding dengan beda potensial ($V$) pada ujung-ujungnya selama suhu dipertahankan konstan:<br>$$V = I R$$<br>di mana $R$ adalah tetapan resistansi (hambatan listrik).",
      "steps": "1. Bentuk persamaan $V = R \\cdot I$ analog dengan persamaan garis lurus $y = m x$ dengan gradien $m = R$.<br>2. Pada konduktor ohmik ideal, hambatan $R$ tidak bergantung pada arus maupun tegangan, sehingga grafik $V$ terhadap $I$ berbentuk garis lurus linier yang melintasi titik $(0,0)$.<br>3. Gradien (kemiringan) grafik $\\frac{\\Delta V}{\\Delta I}$ menyatakan nilai resistansi konduktor $R$.<br>4. Jadi pilihan A adalah pernyataan yang benar.",
      "pitfalls": "Sering mengira grafik hubungan $V$ dan $I$ berbentuk melengkung eksponensial (seperti karakteristik komponen non-ohmik semikonduktor/dioda), padahal soal secara eksplisit menyebutkan konduktor ohmik."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-dc-ohm-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Perhitungan Hambatan Kawat Penghantar",
    "difficulty": "mudah",
    "statement": "Seutas kawat tembaga memiliki panjang $L = 50\\text{ meter}$, luas penampang $A = 1\\text{ mm}^2$, dan hambatan jenis $\\rho = 1{,}7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Besar hambatan listrik kawat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}085\\,\\Omega$",
      "$0{,}85\\,\\Omega$",
      "$8{,}5\\,\\Omega$",
      "$17\\,\\Omega$",
      "$85\\,\\Omega$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hambatan listrik suatu kawat silinder homogen dirumuskan berdasarkan dimensinya:<br>$$R = \\rho \\frac{L}{A}$$<br>dengan $\\rho$ adalah hambatan jenis bahan, $L$ adalah panjang kawat, dan $A$ adalah luas penampang kawat.",
      "steps": "1. Konversikan luas penampang ke meter persegi:<br>$$A = 1\\text{ mm}^2 = 1 \\times (10^{-3}\\text{ m})^2 = 1 \\times 10^{-6}\\text{ m}^2$$<br>2. Data lainnya: $L = 50\\text{ m}$ dan $\\rho = 1{,}7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$.<br>3. Masukkan ke dalam rumus hambatan kawat:<br>$$R = (1{,}7 \\times 10^{-8}) \\times \\frac{50}{1 \\times 10^{-6}} = 1{,}7 \\times 10^{-2} \\times 50 = 0{,}85\\,\\Omega$$<br>4. Jadi hambatan kawat tembaga tersebut adalah $0{,}85\\,\\Omega$ (pilihan B).",
      "pitfalls": "Lupa mengonversi satuan luas $1\\text{ mm}^2$ ke $\\text{m}^2$ ($10^{-6}\\text{ m}^2$), atau salah mengalikan pangkat sepuluh."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-dc-ohm-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Kuat Arus Listrik dan Aliran Elektron",
    "difficulty": "mudah",
    "statement": "Dalam suatu kawat penghantar mengalir arus listrik konstan sebesar $3{,}2\\text{ Ampere}$ selama $10\\text{ detik}$. Jika muatan satu elektron adalah $e = 1{,}6 \\times 10^{-19}\\text{ Coulomb}$, jumlah elektron yang melintasi penampang kawat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 \\times 10^{19}\\text{ elektron}$",
      "$2 \\times 10^{20}\\text{ elektron}$",
      "$5 \\times 10^{19}\\text{ elektron}$",
      "$5 \\times 10^{20}\\text{ elektron}$",
      "$3{,}2 \\times 10^{20}\\text{ elektron}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kuat arus listrik didefinisikan sebagai laju aliran muatan neto: $I = \\frac{Q}{t} \\implies Q = I t$. Jumlah elektron pembawa muatan dihitung melalui kuantisasi muatan $Q = n e \\implies n = \\frac{Q}{e}$.",
      "steps": "1. Hitung muatan listrik total yang mengalir selama $t = 10\\text{ s}$:<br>$$Q = I \\times t = 3{,}2\\text{ A} \\times 10\\text{ s} = 32\\text{ Coulomb}$$<br>2. Hitung jumlah partikel elektron ($n$):<br>$$n = \\frac{Q}{e} = \\frac{32\\text{ C}}{1{,}6 \\times 10^{-19}\\text{ C}} = 20 \\times 10^{19} = 2 \\times 10^{20}\\text{ elektron}$$<br>3. Jadi jumlah elektron yang melintas adalah $2 \\times 10^{20}\\text{ elektron}$ (pilihan B).",
      "pitfalls": "Galat pembagian eksponen: $\\frac{32}{1{,}6 \\times 10^{-19}} = 20 \\times 10^{19} = 2 \\times 10^{20}$, sering salah menuliskan eksponen menjadi $2 \\times 10^{19}$."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-dc-ohm-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Perubahan Hambatan Kawat Akibat Penarikan",
    "difficulty": "mudah",
    "statement": "Seutas kawat logam homogen berhambatan $R$ ditarik secara teratur sehingga panjangnya menjadi dua kali lipat panjang semula ($L' = 2L$). Jika massa dan massa jenis kawat tetap konstan selama penarikan, hambatan kawat sekarang menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}R$",
      "$\\frac{1}{2}R$",
      "$R$",
      "$2R$",
      "$4R$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Saat kawat ditarik, volumenya kekal ($V = A L = \\text{konstan}$). Jika panjang bertambah $n$ kali lipat ($L' = n L$), luas penampang mengecil menjadi $\\frac{1}{n}$ kali semula ($A' = \\frac{A}{n}$). Maka hambatannya meningkat menjadi $n^2$ kali lipat.",
      "steps": "1. Kekekalan volume kawat:<br>$$V = A \\cdot L = A' \\cdot L' \\implies A' (2L) = A L \\implies A' = \\frac{1}{2}A$$<br>2. Hitung hambatan kawat baru ($R'$):<br>$$R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{\\frac{1}{2}A} = 4 \\left(\\rho \\frac{L}{A}\\right) = 4R$$<br>3. Jadi hambatan kawat menjadi $4R$ (pilihan E).",
      "pitfalls": "Siswa sering melupakan bahwa penarikan kawat menyebabkan penampangnya mengecil ($A' = A/2$) sehingga hanya memperhitungkan faktor panjang dan keliru menjawab $2R$."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-dc-ohm-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Pengaruh Kenaikan Suhu terhadap Hambatan Logam",
    "difficulty": "mudah",
    "statement": "Sebuah filamen wolfram memiliki nilai hambatan $R_0 = 40\\,\\Omega$ pada suhu $20^\\circ\\text{C}$. Koefisien suhu hambatan wolfram adalah $\\alpha = 4{,}5 \\times 10^{-3}\\text{ /}^\\circ\\text{C}$. Besar hambatan filamen tersebut ketika dipanaskan hingga suhunya mencapai $120^\\circ\\text{C}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$44{,}5\\,\\Omega$",
      "$50\\,\\Omega$",
      "$58\\,\\Omega$",
      "$72\\,\\Omega$",
      "$85\\,\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hambatan listrik kawat logam meningkat seiring kenaikan suhu menurut hubungan pendekatan linier:<br>$$R = R_0 (1 + \\alpha \\Delta T)$$<br>dengan $\\Delta T = T - T_0$ adalah kenaikan suhu.",
      "steps": "1. Hitung kenaikan suhu:<br>$$\\Delta T = 120^\\circ\\text{C} - 20^\\circ\\text{C} = 100^\\circ\\text{C}$$<br>2. Hitung faktor perubahan hambatan:<br>$$\\alpha \\Delta T = (4{,}5 \\times 10^{-3}\\text{ /}^\\circ\\text{C}) \\times 100^\\circ\\text{C} = 0{,}45$$<br>3. Hitung hambatan akhir:<br>$$R = R_0 (1 + \\alpha \\Delta T) = 40\\,\\Omega \\times (1 + 0{,}45) = 40 \\times 1{,}45 = 58\\,\\Omega$$<br>4. Jadi nilai hambatannya menjadi $58\\,\\Omega$ (pilihan C).",
      "pitfalls": "Memasukkan suhu akhir $T = 120$ langsung ke dalam $\\Delta T$ tanpa mengurangkannya terlebih dahulu dengan suhu awal $T_0 = 20^\\circ\\text{C}$."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-dc-ohm-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Kerapatan Arus dan Kecepatan Hanyut Elektron",
    "difficulty": "sedang",
    "statement": "Seutas kawat tembaga berdiameter $d = 2\\text{ mm}$ dialiri arus listrik konstan sebesar $I = 6{,}28\\text{ A}$. Kerapatan elektron bebas tembaga adalah $n = 8{,}5 \\times 10^{28}\\text{ elektron/m}^3$ dan muatan satu elektron adalah $e = 1{,}6 \\times 10^{-19}\\text{ C}$. Jika digunakan nilai pendekatan $\\pi \\approx 3{,}14$, kecepatan hanyut (drift velocity $v_d$) elektron dalam kawat tersebut adalah mendekati ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}15\\text{ mm/s}$",
      "$1{,}5\\text{ mm/s}$",
      "$15\\text{ mm/s}$",
      "$150\\text{ mm/s}$",
      "$1{,}5\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hubungan mikroskopis kuat arus listrik ($I$) dengan kecepatan hanyut elektron pembawa muatan ($v_d$) dirumuskan sebagai:<br>$$I = n e A v_d \\implies v_d = \\frac{I}{n e A}$$<br>di mana $A = \\pi r^2$ adalah luas penampang kawat.",
      "steps": "1. Jari-jari kawat: $r = \\frac{d}{2} = 1\\text{ mm} = 10^{-3}\\text{ m}$.<br>Luas penampang kawat:<br>$$A = \\pi r^2 = 3{,}14 \\times (10^{-3}\\text{ m})^2 = 3{,}14 \\times 10^{-6}\\text{ m}^2$$<br>2. Hitung kerapatan arus ($J$):<br>$$J = \\frac{I}{A} = \\frac{6{,}28\\text{ A}}{3{,}14 \\times 10^{-6}\\text{ m}^2} = 2 \\times 10^6\\text{ A/m}^2$$<br>3. Hitung kecepatan hanyut elektron ($v_d$):<br>$$v_d = \\frac{J}{n e} = \\frac{2 \\times 10^6\\text{ A/m}^2}{(8{,}5 \\times 10^{28}\\text{ m}^{-3}) \\times (1{,}6 \\times 10^{-19}\\text{ C})} = \\frac{2 \\times 10^6}{13{,}6 \\times 10^9} \\approx 1{,}47 \\times 10^{-4}\\text{ m/s} = 0{,}147\\text{ mm/s} \\approx 0{,}15\\text{ mm/s}$$<br>4. Jadi kecepatan hanyut elektron adalah sekitar $0{,}15\\text{ mm/s}$ (pilihan A).",
      "pitfalls": "Siswa sering mengira elektron mengalir dengan kecepatan mendekati kecepatan cahaya. Pada kenyataannya, sinyal medan listrik merambat mendekati kecepatan cahaya, tetapi kecepatan gerak hanyut rata-rata elektron mikroskopis sebenarnya sangat lambat (fraksi milimeter per detik)."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-dc-ohm-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Hambatan Kawat Silinder Berongga",
    "difficulty": "sedang",
    "statement": "Sebuah konduktor silinder berongga memiliki panjang $L = 10\\text{ m}$, jari-jari dalam $r_1 = 1\\text{ mm}$, dan jari-jari luar $r_2 = 2\\text{ mm}$. Hambatan jenis bahan konduktor adalah $\\rho = 3{,}14 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Jika arus listrik mengalir sepanjang sumbu kawat (aksial) dan $\\pi \\approx 3{,}14$, besar hambatan listrik silinder berongga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$11{,}1\\text{ m}\\Omega$",
      "$25{,}0\\text{ m}\\Omega$",
      "$33{,}3\\text{ m}\\Omega$",
      "$66{,}7\\text{ m}\\Omega$",
      "$100\\text{ m}\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hambatan aksial silinder berongga dihitung dengan rumus hambatan kawat $R = \\rho \\frac{L}{A}$, dengan luas penampang konduktor berbentuk cincin melingkar:<br>$$A = \\pi (r_2^2 - r_1^2)$$",
      "steps": "1. Hitung luas penampang konduktif kawat:<br>$$A = \\pi (r_2^2 - r_1^2) = 3{,}14 \\times [(2 \\times 10^{-3})^2 - (1 \\times 10^{-3})^2] = 3{,}14 \\times (4 - 1) \\times 10^{-6}\\text{ m}^2 = 9{,}42 \\times 10^{-6}\\text{ m}^2 = 3\\pi \\times 10^{-6}\\text{ m}^2$$<br>2. Masukkan ke dalam rumus hambatan kawat:<br>$$R = \\rho \\frac{L}{A} = (3{,}14 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}) \\times \\frac{10\\text{ m}}{3 \\times 3{,}14 \\times 10^{-6}\\text{ m}^2} = \\frac{10^{-7}}{3 \\times 10^{-6}} = \\frac{1}{30}\\,\\Omega \\approx 0{,}0333\\,\\Omega = 33{,}3\\text{ m}\\Omega$$<br>3. Jadi hambatan silinder berongga tersebut adalah $33{,}3\\text{ m}\\Omega$ (pilihan C).",
      "pitfalls": "Lupa mengurangkan luas rongga dalam ($r_1$) sehingga hanya menghitung luas silinder luar $\\pi r_2^2$, yang menyebabkan nilai hambatan yang dihitung menjadi terlalu kecil."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-dc-ohm-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Daya Lampu pada Beda Potensial di Bawah Spesifikasi",
    "difficulty": "sedang",
    "statement": "Sebuah lampu pijar memiliki spesifikasi tertulis $100\\text{ W} / 220\\text{ V}$. Jika lampu tersebut dihubungkan ke sumber tegangan jala-jala yang sedang mengalami penurunan tegangan menjadi $110\\text{ V}$, daya listrik aktual yang diserap oleh lampu tersebut menjadi .... (anggap nilai hambatan filamen lampu tidak berubah)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ Watt}$",
      "$50\\text{ Watt}$",
      "$75\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$200\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hambatan filamen lampu adalah konstan: $R = \\frac{V_0^2}{P_0}$. Daya yang diserap pada tegangan baru $V$ dirumuskan sebagai:<br>$$P = \\frac{V^2}{R} = \\left(\\frac{V}{V_0}\\right)^2 P_0$$",
      "steps": "1. Tinjau perbandingan kuadrat tegangan kerja baru terhadap tegangan spesifikasi:<br>$$\\frac{V}{V_0} = \\frac{110\\text{ V}}{220\\text{ V}} = \\frac{1}{2}$$<br>2. Hitung daya baru lampu:<br>$$P = \\left(\\frac{1}{2}\\right)^2 \\times 100\\text{ W} = \\frac{1}{4} \\times 100\\text{ W} = 25\\text{ Watt}$$<br>3. Jadi daya listrik yang diserap lampu menjadi $25\\text{ Watt}$ (pilihan A).",
      "pitfalls": "Siswa kerap mengira hubungan daya dan tegangan bersifat linier ($P \\propto V$) sehingga keliru menjawab setengahnya ($50\\text{ Watt}$). Hubungan daya terhadap tegangan pada hambatan tetap adalah kuadratik ($P \\propto V^2$)."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-dc-ohm-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Perhitungan Suhu Filamen dari Resistansi Pijar",
    "difficulty": "sedang",
    "statement": "Filamen wolfram dari sebuah bohlam lampu memiliki hambatan $R_0 = 25\\,\\Omega$ pada suhu kamar $20^\\circ\\text{C}$. Ketika lampu dinyalakan pada tegangan kerja normalnya $220\\text{ V}$, kuat arus listrik yang mengalir terukur sebesar $0{,}8\\text{ A}$. Jika koefisien suhu hambatan wolfram adalah $\\alpha = 4 \\times 10^{-3}\\text{ /}^\\circ\\text{C}$, suhu kerja filamen lampu saat menyala normal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.520^\\circ\\text{C}$",
      "$2.020^\\circ\\text{C}$",
      "$2.500^\\circ\\text{C}$",
      "$2.520^\\circ\\text{C}$",
      "$2.750^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Hambatan saat filamen membara panas dihitung dari Hukum Ohm $R = \\frac{V}{I}$. Kenaikan suhu $\\Delta T$ diperoleh dari hubungan termal hambatan: $R = R_0(1 + \\alpha \\Delta T)$. Suhu akhir adalah $T = T_0 + \\Delta T$.",
      "steps": "1. Hitung hambatan kawat pada keadaan menyala panas:<br>$$R = \\frac{V}{I} = \\frac{220\\text{ V}}{0{,}8\\text{ A}} = 275\\,\\Omega$$<br>2. Gunakan persamaan kenaikan hambatan terhadap suhu:<br>$$R = R_0 (1 + \\alpha \\Delta T) \\implies 275 = 25 (1 + \\alpha \\Delta T)$$<br>$$1 + \\alpha \\Delta T = \\frac{275}{25} = 11 \\implies \\alpha \\Delta T = 10$$<br>3. Hitung kenaikan suhu $\\Delta T$:<br>$$\\Delta T = \\frac{10}{\\alpha} = \\frac{10}{4 \\times 10^{-3}\\text{ /}^\\circ\\text{C}} = 2.500^\\circ\\text{C}$$<br>4. Hitung suhu kerja akhir filamen:<br>$$T = T_0 + \\Delta T = 20^\\circ\\text{C} + 2.500^\\circ\\text{C} = 2.520^\\circ\\text{C}$$<br>5. Jadi suhu filamen adalah $2.520^\\circ\\text{C}$ (pilihan D).",
      "pitfalls": "Menjawab kenaikan suhu $\\Delta T = 2.500^\\circ\\text{C}$ dan lupa menambahkan suhu awal kamar $T_0 = 20^\\circ\\text{C}$."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-dc-ohm-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-ohm",
    "category": "Efisiensi Transmisi dan Rugi Daya Saluran Listrik",
    "difficulty": "sedang",
    "statement": "Sebuah pusat pembangkit listrik mentransmisikan daya sebesar $P = 10\\text{ MW}$ melalui saluran kawat transmisi yang memiliki total hambatan saluran $R = 4\\,\\Omega$. Perbandingan daya listrik yang hilang sebagai kalor pada kawat ($P_{\\text{rugi}}$) jika transmisi dilakukan pada tegangan $V_1 = 100\\text{ kV}$ dibandingkan dengan transmisi pada tegangan $V_2 = 500\\text{ kV}$ ($P_{\\text{rugi}, 1} : P_{\\text{rugi}, 2}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 5$",
      "$5 : 1$",
      "$1 : 25$",
      "$25 : 1$",
      "$125 : 1$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Arus transmisi ditentukan oleh daya dan tegangan saluran: $I = \\frac{P}{V}$. Daya yang hilang akibat disipasi kalor Joule pada kawat saluran adalah:<br>$$P_{\\text{rugi}} = I^2 R = \\left(\\frac{P}{V}\\right)^2 R = \\frac{P^2 R}{V^2}$$<br>Daya rugi berbanding terbalik dengan kuadrat tegangan transmisi ($P_{\\text{rugi}} \\propto \\frac{1}{V^2}$).",
      "steps": "1. Karena daya total $P$ dan hambatan kawat $R$ sama pada kedua kasus, berlaku hubungan perbandingan berbalik kuadrat tegangan:<br>$$\\frac{P_{\\text{rugi}, 1}}{P_{\\text{rugi}, 2}} = \\left(\\frac{V_2}{V_1}\\right)^2$$<br>2. Masukkan nilai tegangan transmisi:<br>$$\\frac{P_{\\text{rugi}, 1}}{P_{\\text{rugi}, 2}} = \\left(\\frac{500\\text{ kV}}{100\\text{ kV}}\\right)^2 = 5^2 = 25$$<br>3. Jadi perbandingan daya yang hilang adalah $25 : 1$ (pilihan D).",
      "pitfalls": "Siswa sering mengira transmisi berdaya rugi sebanding dengan $V^2/R$, melupakan bahwa tegangan jatuh pada kawat saluran adalah $\\Delta V = I R$, bukan tegangan transmisi $V$ terhadap tanah."
    },
    "subTopicSlug": "hukum-ohm-hambatan",
    "bab": "Kelistrikan",
    "subBab": "Hukum Ohm & Hambatan",
    "subTopic": "Hukum Ohm & Hambatan",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
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
