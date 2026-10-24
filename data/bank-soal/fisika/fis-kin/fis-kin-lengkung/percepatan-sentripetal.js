/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lengkung (fis-kin-lengkung)
 * Sub-Bab: Percepatan Sentripetal (fis-kin-lengkung-sentripetal)
 * Slug: percepatan-sentripetal
 * Indikator: Arah dan besar percepatan sentripetal (a_s = v^2 / r = omega^2 * r) menuju pusat lingkaran.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-lengkung-sentripetal";
  const subTopicSlug = "percepatan-sentripetal";
  const questions = [
  {
    "id": "fis-kin-lengkung-sentripetal-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "mudah",
    "statement": "Pernyataan yang paling tepat mengenai arah vektor percepatan sentripetal pada sebuah partikel yang melakukan gerak melingkar beraturan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu tegak lurus vektor kecepatan linier dan mengarah tepat menuju pusat lingkaran",
      "Selalu sejajar searah dengan vektor kecepatan linier (garis singgung)",
      "Selalu berlawanan arah dengan vektor kecepatan linier",
      "Mengarah menjauh meninggalkan pusat lingkaran ke arah luar lintasan",
      "Arahnya tetap dan tidak pernah berubah di setiap titik lintasan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kata 'sentripetal' berasal dari bahasa Latin yang berarti 'mencari pusat' (center-seeking). Vektor percepatan sentripetal ($\\vec{a}_s$) selalu berarah radial menuju ke titik pusat lingkaran dan tegak lurus terhadap vektor kecepatan linier ($\\vec{v} \\perp \\vec{a}_s$).",
      "steps": "1. Vektor kecepatan linier $\\vec{v}$ selalu berarah tangensial (menyinggung lintasan).<br>2. Perubahan arah gerak ini disebabkan oleh percepatan yang berarah tegak lurus menuju pusat lingkaran, yaitu percepatan sentripetal $\\vec{a}_s$.",
      "pitfalls": "Terkecoh dengan gaya sentrifugal fiktif yang mengarah ke luar lintasan, padahal percepatan fisis sejatinya selalu mengarah ke pusat lingkaran."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "mudah",
    "statement": "Sebuah partikel bergerak menelusuri lintasan lingkaran dengan jari-jari $r = 0{,}5\\text{ meter}$ pada kelajuan linier tetap $v = 4\\text{ m/s}$. Besar percepatan sentripetal yang dialami partikel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$32\\text{ m/s}^2$",
      "$16\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$64\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Besar percepatan sentripetal ($a_s$) dinyatakan oleh hubungan:<br>$$a_s = \\frac{v^2}{r}$$",
      "steps": "1. Substitusikan $v = 4\\text{ m/s}$ dan $r = 0{,}5\\text{ m}$:<br>$$a_s = \\frac{4^2}{0{,}5} = \\frac{16}{0{,}5} = 32\\text{ m/s}^2$$",
      "pitfalls": "Lupa menguadratkan kelajuan sehingga menghitung $\\frac{v}{r} = \\frac{4}{0{,}5} = 8\\text{ m/s}^2$ (yang merupakan kecepatan sudut $\\omega$, bukan percepatan sentripetal)."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "mudah",
    "statement": "Sebuah batu diikat pada seutas tali ringan dengan panjang $R = 2\\text{ meter}$ kemudian diputar mendatar sehingga bergerak melingkar beraturan dengan kecepatan sudut tetap $\\omega = 5\\text{ rad/s}$. Besar percepatan sentripetal batu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$25\\text{ m/s}^2$",
      "$100\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hubungan percepatan sentripetal dengan kecepatan sudut ($\\omega$) dan jari-jari ($R$) adalah:<br>$$a_s = \\omega^2 R$$",
      "steps": "1. Substitusikan $\\omega = 5\\text{ rad/s}$ dan $R = 2\\text{ m}$:<br>$$a_s = (5)^2 \\times 2 = 25 \\times 2 = 50\\text{ m/s}^2$$",
      "pitfalls": "Hanya mengalikan $\\omega \\times R = 5 \\times 2 = 10\\text{ m/s}$, yang merupakan kelajuan linier ($v$), bukan percepatan sentripetal."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "mudah",
    "statement": "Jika kelajuan linier suatu objek yang bergerak melingkar beraturan digandakan menjadi 2 kali semula sementara jari-jari lintasan lingkarannya tetap, maka besar percepatan sentripetal objek tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ kali}$ nilai semula",
      "$2\\text{ kali}$ nilai semula",
      "Tetap sama tidak berubah",
      "$\\frac{1}{2}\\text{ kali}$ nilai semula",
      "$\\frac{1}{4}\\text{ kali}$ nilai semula"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Percepatan sentripetal berbanding lurus dengan kuadrat kelajuan linier jika jari-jari lintasan konstan:<br>$$a_s = \\frac{v^2}{r} \\implies a_s \\propto v^2$$",
      "steps": "1. Kecepatan linier baru: $v' = 2v$.<br>2. Percepatan sentripetal baru:<br>$$a_s' = \\frac{(2v)^2}{r} = \\frac{4v^2}{r} = 4 a_s$$",
      "pitfalls": "Mengabaikan kuadrat kecepatan sehingga mengira percepatan hanya meningkat 2 kali lipat."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "mudah",
    "statement": "Sebuah mobil sedan melaju melintasi tikungan jalan datar berbentuk busur lingkaran dengan jari-jari kelengkungan $R = 40\\text{ meter}$ pada kelajuan konstan $72\\text{ km/jam}$. Besar percepatan sentripetal yang dialami oleh mobil tersebut saat menikung adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$129{,}6\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Mobil yang berbelok pada tikungan melingkar mengalami percepatan sentripetal sebesar $a_s = \\frac{v^2}{R}$. Satuan kelajuan harus dikonversi terlebih dahulu ke satuan SI ($\text{m/s}$).",
      "steps": "1. Konversikan kelajuan ke $\\text{m/s}$:<br>$$v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$$<br>2. Hitung percepatan sentripetal:<br>$$a_s = \\frac{v^2}{R} = \\frac{20^2}{40} = \\frac{400}{40} = 10\\text{ m/s}^2$$",
      "pitfalls": "Langsung memasukkan nilai $72\\text{ km/jam}$ ke dalam rumus ($72^2 / 40 = 129{,}6$) tanpa konversi satuan ke $\\text{m/s}$."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "sedang",
    "statement": "Dua buah partikel $A$ dan $B$ melakukan gerak melingkar beraturan. Periode putaran partikel $A$ adalah dua kali periode partikel $B$ ($T_A = 2 T_B$), sedangkan jari-jari lintasan lingkaran partikel $A$ adalah empat kali jari-jari lintasan partikel $B$ ($R_A = 4 R_B$). Perbandingan besar percepatan sentripetal partikel $A$ terhadap partikel $B$ ($a_{sA} : a_{sB}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$",
      "$1 : 2$",
      "$1 : 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Percepatan sentripetal dinyatakan dalam periode putaran ($T$) dan jari-jari ($R$) adalah:<br>$$a_s = \\omega^2 R = \\left(\\frac{2\\pi}{T}\\right)^2 R = \\frac{4\\pi^2 R}{T^2}$$",
      "steps": "1. Tulis perbandingan percepatan sentripetal:<br>$$\\frac{a_{sA}}{a_{sB}} = \\left( \\frac{R_A}{R_B} \\right) \\times \\left( \\frac{T_B}{T_A} \\right)^2$$<br>2. Masukkan perbandingan $R_A = 4 R_B$ dan $T_A = 2 T_B$:<br>$$\\frac{a_{sA}}{a_{sB}} = 4 \\times \\left( \\frac{1}{2} \\right)^2 = 4 \\times \\frac{1}{4} = 1$$<br>Maka $a_{sA} : a_{sB} = 1 : 1$.",
      "pitfalls": "Lupa mengkuadratkan periode putaran pada penyebut sehingga salah menyimpulkan $4 / 2 = 2 : 1$."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak menempuh lintasan lingkaran dengan jari-jari $R = 2\\text{ meter}$. Posisi sudut putaran partikel memenuhi fungsi waktu $\\theta(t) = 4t^2 + 2t$ (dengan $\\theta$ dalam radian dan $t$ dalam sekon). Besar percepatan sentripetal partikel pada saat $t = 1\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ m/s}^2$",
      "$100\\text{ m/s}^2$",
      "$20\\text{ m/s}^2$",
      "$400\\text{ m/s}^2$",
      "$50\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan sudut sesaat merupakan turunan pertama posisi sudut: $\\omega(t) = \\frac{d\\theta}{dt}$. Percepatan sentripetal sesaat dirumuskan oleh $a_s(t) = [\\omega(t)]^2 R$.",
      "steps": "1. Turunkan fungsi posisi sudut terhadap waktu:<br>$$\\omega(t) = \\frac{d}{dt}(4t^2 + 2t) = 8t + 2\\text{ (rad/s)}$$<br>2. Hitung kecepatan sudut saat $t = 1\\text{ s}$:<br>$$\\omega(1) = 8(1) + 2 = 10\\text{ rad/s}$$<br>3. Hitung percepatan sentripetal saat $t = 1\\text{ s}$:<br>$$a_s = \\omega^2 R = (10\\text{ rad/s})^2 \\times 2\\text{ m} = 100 \\times 2 = 200\\text{ m/s}^2$$",
      "pitfalls": "Hanya menghitung kelajuan linier $v = \\omega R = 20\\text{ m/s}$ atau lupa mengkuadratkan kecepatan sudut."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak melingkar pada lintasan dengan jari-jari $r = 3\\text{ meter}$. Pada suatu saat tertentu, kelajuan linier partikel adalah $v = 6\\text{ m/s}$ dan partikel mengalami percepatan tangensial tetap sebesar $a_t = 5\\text{ m/s}^2$. Besar resultan vektor percepatan total yang dialami partikel pada saat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$13\\text{ m/s}^2$",
      "$17\\text{ m/s}^2$",
      "$12\\text{ m/s}^2$",
      "$7\\text{ m/s}^2$",
      "$\\sqrt{119}\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada gerak melingkar yang mengalami perubahan kelajuan (GMBB), terdapat dua komponen percepatan yang saling tegak lurus: percepatan sentripetal ($a_s$) yang mengarah ke pusat dan percepatan tangensial ($a_t$) yang menyinggung lintasan. Percepatan totalnya adalah:<br>$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2}$$",
      "steps": "1. Hitung percepatan sentripetal saat $v = 6\\text{ m/s}$:<br>$$a_s = \\frac{v^2}{r} = \\frac{6^2}{3} = \\frac{36}{3} = 12\\text{ m/s}^2$$<br>2. Hitung percepatan total resultan:<br>$$a_{\\text{total}} = \\sqrt{a_s^2 + a_t^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ m/s}^2$$",
      "pitfalls": "Langsung menjumlahkan komponen secara aljabar skalar ($12 + 5 = 17\\text{ m/s}^2$), padahal kedua vektor saling tegak lurus tegak sehingga harus menggunakan teorema Pythagoras."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "sedang",
    "statement": "Sebuah jalur rel kereta cepat memiliki tikungan mendatar dengan jari-jari kelengkungan $R = 800\\text{ meter}$. Demi keselamatan dan kenyamanan penumpang, batas percepatan sentripetal maksimum yang diperkenankan saat menikung adalah $2\\text{ m/s}^2$. Kelajuan maksimum kereta cepat yang diizinkan saat melintasi tikungan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$144\\text{ km/jam}$",
      "$100\\text{ km/jam}$",
      "$72\\text{ km/jam}$",
      "$180\\text{ km/jam}$",
      "$40\\text{ km/jam}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Batas kelajuan maksimum pada tikungan dihitung dari rumus percepatan sentripetal:<br>$$a_{s,\\max} = \\frac{v_{\\max}^2}{R} \\implies v_{\\max} = \\sqrt{a_{s,\\max} \\cdot R}$$",
      "steps": "1. Hitung kelajuan maksimum dalam satuan SI ($\\text{m/s}$):<br>$$v_{\\max} = \\sqrt{2\\text{ m/s}^2 \\times 800\\text{ m}} = \\sqrt{1600} = 40\\text{ m/s}$$<br>2. Konversikan kelajuan maksimum ke satuan $\\text{km/jam}$:<br>$$v_{\\max} = 40 \\times \\frac{18}{5} = 8 \\times 18 = 144\\text{ km/jam}$$",
      "pitfalls": "Lupa mengonversikan satuan dari $\\text{m/s}$ ke $\\text{km/jam}$ dan langsung memilih angka $40$."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-kin-lengkung-sentripetal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-lengkung",
    "subTopicId": "fis-kin-lengkung-sentripetal",
    "category": "Percepatan Sentripetal",
    "difficulty": "sedang",
    "statement": "Sebuah piringan datar berputar dengan kecepatan sudut konstan $\\omega$. Dua koin logam $A$ dan $B$ diletakkan di atas piringan pada jarak masing-masing $r_A = 12\\text{ cm}$ dan $r_B = 27\\text{ cm}$ dari poros rotasi piringan. Jika percepatan sentripetal koin $A$ terukur sebesar $48\\text{ m/s}^2$, besar percepatan sentripetal koin $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$108\\text{ m/s}^2$",
      "$72\\text{ m/s}^2$",
      "$96\\text{ m/s}^2$",
      "$54\\text{ m/s}^2$",
      "$144\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karena berada di atas satu piringan yang sama, kedua koin berputar dengan kecepatan sudut yang sama ($\\omega_A = \\omega_B = \\omega$). Hubungan percepatan sentripetal terhadap jari-jari adalah linear sebanding:<br>$$a_s = \\omega^2 r \\implies \\frac{a_{sB}}{a_{sA}} = \\frac{r_B}{r_A}$$",
      "steps": "1. Susun perbandingan percepatan sentripetal:<br>$$a_{sB} = a_{sA} \\times \\left( \\frac{r_B}{r_A} \\right)$$<br>2. Substitusikan nilai parameter:<br>$$a_{sB} = 48\\text{ m/s}^2 \\times \\left( \\frac{27\\text{ cm}}{12\\text{ cm}} \\right) = 48 \\times \\frac{9}{4} = 12 \\times 9 = 108\\text{ m/s}^2$$",
      "pitfalls": "Menggunakan perbandingan kuadrat terbalik ($a_s \\propto 1/r$), yang salah karena mengira kelajuan liniernya sama alih-alih kecepatan sudutnya."
    },
    "subTopicSlug": "percepatan-sentripetal",
    "bab": "Kinematika",
    "subBab": "Percepatan Sentripetal",
    "subTopic": "Percepatan Sentripetal",
    "chapterTitle": "Kinematika",
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
