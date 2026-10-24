/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Hukum II Newton (fis-din-gaya-newton2)
 * Slug: hukum-2-newton
 * Indikator: Hubungan resultan gaya luar, massa, dan percepatan (Sigma F = m * a).
 * 
 * Total Butir Soal: 17 (Mudah: 8, Sedang: 9, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-newton2";
  const subTopicSlug = "hukum-2-newton";
  const questions = [
  {
    "id": "fis-din-gaya-newton2-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "statement": "Sebuah balok kayu bermassa $m = 4\\text{ kg}$ diletakkan di atas lantai mendatar yang licin sempurna tanpa gesekan. Balok kemudian ditarik oleh gaya horizontal konstan $F = 20\\text{ N}$. Besar percepatan yang dialami balok kayu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ m/s}^2$",
      "$80\\text{ m/s}^2$",
      "$0{,}2\\text{ m/s}^2$",
      "$16\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum II Newton menyatakan bahwa percepatan suatu benda sebanding dengan resultan gaya total yang bekerja dan berbanding terbalik dengan massanya:<br>$$a = \\frac{\\Sigma F}{m}$$",
      "steps": "1. Identifikasi gaya horizontal: $\\Sigma F = F = 20\\text{ N}$.<br>2. Hitung percepatan balok:<br>$$a = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2$$",
      "pitfalls": "Mengalikan massa dengan gaya ($20 \\times 4 = 80$) alih-alih membaginya."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton2-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "statement": "Sebuah kotak kardus bermassa $m = 6\\text{ kg}$ ditarik di atas lantai mendatar licin oleh dua gaya horizontal searah: $F_1 = 18\\text{ N}$ dan $F_2 = 12\\text{ N}$. Jika kotak mula-mula dalam keadaan diam, kecepatan kotak kardus tersebut setelah ditarik selama $t = 3\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$30\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$45\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resultan gaya searah dijumlahkan untuk memperoleh percepatan benda. Kecepatan akhir dihitung menggunakan kinematika GLBB:<br>$$\\Sigma F = F_1 + F_2,\\quad a = \\frac{\\Sigma F}{m},\\quad v_t = v_0 + a t$$",
      "steps": "1. Hitung resultan gaya total:<br>$$\\Sigma F = 18\\text{ N} + 12\\text{ N} = 30\\text{ N}$$<br>2. Hitung percepatan:<br>$$a = \\frac{30\\text{ N}}{6\\text{ kg}} = 5\\text{ m/s}^2$$<br>3. Hitung kecepatan akhir setelah $3\\text{ s}$ dari keadaan diam ($v_0 = 0$):<br>$$v_t = 0 + (5\\text{ m/s}^2 \\times 3\\text{ s}) = 15\\text{ m/s}$$",
      "pitfalls": "Hanya menghitung nilai percepatan $a = 5\\text{ m/s}^2$ dan lupa mengalikan dengan waktu tempuh $t = 3\\text{ s}$ untuk mendapatkan kecepatan akhir."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton2-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "statement": "Pernyataan yang paling tepat mengenai hubungan fisis antara resultan gaya total ($\\Sigma \\vec{F}$), massa inersial ($m$), dan percepatan ($\\vec{a}$) menurut Hukum II Newton adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Percepatan berbanding lurus dengan resultan gaya total dan berbanding terbalik dengan massa benda",
      "Percepatan berbanding terbalik dengan resultan gaya total dan berbanding lurus dengan massa benda",
      "Resultan gaya total berbanding terbalik dengan percepatan yang dihasilkan",
      "Massa benda berbanding lurus dengan percepatan pada gaya konstan",
      "Percepatan tidak bergantung pada resultan gaya luar yang bekerja"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum II Newton menyatakan hubungan matematis fundamental dinamika: $\\vec{a} = \\frac{\\Sigma \\vec{F}}{m}$. Secara fisis, percepatan bertambah jika gaya luar membesar, dan berkurang jika massa kelembaman membesar.",
      "steps": "1. Tinjau persamaan $\\vec{a} = \\frac{\\Sigma \\vec{F}}{m}$.<br>2. $\\vec{a} \\propto \\Sigma \\vec{F}$ (sebanding/berbanding lurus dengan gaya).<br>3. $\\vec{a} \\propto \\frac{1}{m}$ (berbanding terbalik dengan massa).",
      "pitfalls": "Tertukar antara konsep berbanding lurus (proporsional langsung) dan berbanding terbalik."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton2-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "statement": "Sebuah mobil-mobilan bermassa $2\\text{ kg}$ bergerak pada lintasan lurus licin. Kecepatan mobil-mobilan bertambah secara teratur dari $4\\text{ m/s}$ menjadi $10\\text{ m/s}$ dalam selang waktu $3\\text{ sekon}$. Besar resultan gaya yang bekerja pada mobil-mobilan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ N}$",
      "$2\\text{ N}$",
      "$6\\text{ N}$",
      "$8\\text{ N}$",
      "$12\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya dihitung dari perkalian massa dengan percepatan ($\\Sigma F = m \\cdot a$), di mana percepatan diperoleh dari perubahan kecepatan per satuan waktu ($a = \\frac{\\Delta v}{\\Delta t}$).",
      "steps": "1. Hitung percepatan mobil-mobilan:<br>$$a = \\frac{v_t - v_0}{\\Delta t} = \\frac{10\\text{ m/s} - 4\\text{ m/s}}{3\\text{ s}} = \\frac{6}{3} = 2\\text{ m/s}^2$$<br>2. Hitung resultan gaya:<br>$$\\Sigma F = m \\cdot a = 2\\text{ kg} \\times 2\\text{ m/s}^2 = 4\\text{ N}$$",
      "pitfalls": "Lupa mengurangkan kecepatan awal sehingga menghitung $a = 10 / 3$."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton2-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "mudah",
    "statement": "Suatu gaya resultan $F$ mampu menghasilkan percepatan sebesar $a$ ketika bekerja pada balok $A$ bermassa $m_A$. Ketika gaya yang sama besar bekerja pada balok $B$ bermassa $m_B$, percepatan yang dihasilkan adalah $2a$. Perbandingan massa balok $A$ terhadap balok $B$ ($m_A : m_B$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 : 1$",
      "$1 : 2$",
      "$4 : 1$",
      "$1 : 4$",
      "$1 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada gaya yang konstan ($F = \\text{konstan}$), massa berbanding terbalik dengan percepatan yang dialami benda:<br>$$F = m_A a_A = m_B a_B \\implies \\frac{m_A}{m_B} = \\frac{a_B}{a_A}$$",
      "steps": "1. Substitusikan $a_A = a$ dan $a_B = 2a$:<br>$$\\frac{m_A}{m_B} = \\frac{2a}{a} = \\frac{2}{1} = 2 : 1$$",
      "pitfalls": "Terkecoh menganggap massa berbanding lurus dengan percepatan sehingga menjawab $1 : 2$."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-newton2-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "sedang",
    "statement": "Dua balok $A$ dan $B$ dengan massa masing-masing $m_A = 3\\text{ kg}$ dan $m_B = 2\\text{ kg}$ diletakkan berdampingan saling bersentuhan di atas lantai horizontal licin tanpa gesekan. Sebuah gaya mendatar konstan $F = 25\\text{ N}$ didorongkan pada balok $A$ ke arah kanan menuju balok $B$. Besar gaya kontak (gaya tekan) antara balok $A$ dan balok $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$25\\text{ N}$",
      "$5\\text{ N}$",
      "$12{,}5\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tinjau sistem gabungan untuk menentukan percepatan bersama, kemudian tinjau diagram benda bebas balok kedua untuk menentukan gaya kontak:<br>$$a = \\frac{F}{m_A + m_B},\\quad N_{AB} = m_B \\cdot a$$",
      "steps": "1. Percepatan bersama kedua balok:<br>$$a = \\frac{25\\text{ N}}{3\\text{ kg} + 2\\text{ kg}} = \\frac{25}{5} = 5\\text{ m/s}^2$$<br>2. Tinjau balok $B$: Satu-satunya gaya horizontal yang bekerja pada balok $B$ adalah gaya dorong kontak dari balok $A$ ($N_{AB}$):<br>$$N_{AB} = m_B \\cdot a = 2\\text{ kg} \\times 5\\text{ m/s}^2 = 10\\text{ N}$$",
      "pitfalls": "Menghitung gaya kontak menggunakan massa balok $A$ ($3 \\times 5 = 15\\text{ N}$), yang bernilai salah karena balok $A$ didorong oleh gaya $F$ dari luar."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton2-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai mendatar yang licin. Balok ditarik oleh gaya luar $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal (diketahui $\\cos 37^\\circ = 0{,}8$ dan $\\sin 37^\\circ = 0{,}6$, $g = 10\\text{ m/s}^2$). Jarak yang ditempuh balok dalam selang waktu $t = 4\\text{ sekon}$ dari keadaan diam adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$32\\text{ meter}$",
      "$40\\text{ meter}$",
      "$16\\text{ meter}$",
      "$64\\text{ meter}$",
      "$24\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hanya komponen gaya horizontal ($F_x = F \\cos\\theta$) yang menghasilkan percepatan translasi pada lantai licin. Komponen vertikal ($F_y = F \\sin\\theta = 30\\text{ N}$) lebih kecil dari berat benda ($w = 100\\text{ N}$) sehingga balok tetap meluncur di lantai.",
      "steps": "1. Komponen gaya horizontal penggerak:<br>$$F_x = 50\\text{ N} \\times 0{,}8 = 40\\text{ N}$$<br>2. Percepatan balok:<br>$$a = \\frac{F_x}{m} = \\frac{40\\text{ N}}{10\\text{ kg}} = 4\\text{ m/s}^2$$<br>3. Jarak tempuh dari keadaan diam ($v_0 = 0$):<br>$$s = \\frac{1}{2} a t^2 = \\frac{1}{2} (4\\text{ m/s}^2) \\times (4\\text{ s})^2 = 2 \\times 16 = 32\\text{ meter}$$",
      "pitfalls": "Langsung menggunakan gaya total $F = 50\\text{ N}$ tanpa memproyeksikannya dengan $\\cos 37^\\circ$, menghasilkan $a = 5\\text{ m/s}^2$ dan $s = 40\\text{ m}$."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton2-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "sedang",
    "statement": "Sebuah benda bermassa $m = 2\\text{ kg}$ bergerak pada lintasan lurus sepanjang sumbu-$x$ dengan posisi memenuhi fungsi waktu $x(t) = 3t^2 - 4t + 1$ (dengan $x$ dalam meter dan $t$ dalam sekon). Besar resultan gaya yang bekerja pada benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ N}$",
      "$6\\text{ N}$",
      "$8\\text{ N}$",
      "$16\\text{ N}$",
      "$24\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Percepatan adalah turunan kedua dari fungsi posisi terhadap waktu ($a = \\frac{d^2x}{dt^2}$). Berdasarkan Hukum II Newton, resultan gaya adalah hasil kali massa dengan percepatan tersebut:<br>$$\\Sigma F = m \\cdot a$$",
      "steps": "1. Turunan pertama (kecepatan):<br>$$v(t) = \\frac{dx}{dt} = 6t - 4\\text{ (m/s)}$$<br>2. Turunan kedua (percepatan):<br>$$a(t) = \\frac{dv}{dt} = 6\\text{ m/s}^2$$<br>3. Hitung resultan gaya:<br>$$\\Sigma F = m \\cdot a = 2\\text{ kg} \\times 6\\text{ m/s}^2 = 12\\text{ N}$$",
      "pitfalls": "Hanya menurunkan posisi satu kali sehingga menyangka kecepatan sebagai percepatan."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton2-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 4\\text{ kg}$ mula-mula diam di atas lantai datar licin. Mulai saat $t = 0$, balok didorong oleh gaya mendatar yang besarnya berubah terhadap waktu memenuhi persamaan $F(t) = 6t + 2$ (dengan $F$ dalam Newton dan $t$ dalam sekon). Kelajuan balok pada saat $t = 2\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$6\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketika gaya luar bergantung pada waktu ($F(t)$), percepatan juga berubah terhadap waktu ($a(t) = \\frac{F(t)}{m}$). Perubahan kecepatan dicari melalui integrasi percepatan:<br>$$\\Delta v = \\int_0^t a(t)\\,dt$$",
      "steps": "1. Persamaan fungsi percepatan:<br>$$a(t) = \\frac{6t + 2}{4} = 1{,}5t + 0{,}5\\text{ (m/s}^2)$$<br>2. Integrasikan dari $t = 0$ hingga $t = 2\\text{ s}$:<br>$$v(2) - v(0) = \\int_0^2 (1{,}5t + 0{,}5)\\,dt = \\left[ 0{,}75t^2 + 0{,}5t \\right]_0^2$$<br>3. Masukkan batas waktu:<br>$$v(2) = 0{,}75(2)^2 + 0{,}5(2) = 0{,}75(4) + 1 = 3 + 1 = 4\\text{ m/s}$$",
      "pitfalls": "Langsung menghitung gaya pada $t=2$ ($F=14\\text{ N}$), lalu membagi $a = 14/4 = 3{,}5$ dan mengalikan $v = 3{,}5 \\times 2 = 7\\text{ m/s}$ tanpa integrasi."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-newton2-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Hukum II Newton",
    "difficulty": "sedang",
    "statement": "Tiga buah balok $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ disusun segaris di atas lantai licin dan saling terhubung oleh tali ringan tak bermassa. Balok $m_1$ dan $m_2$ dihubungkan oleh tali 1, sedangkan balok $m_2$ dan $m_3$ dihubungkan oleh tali 2. Ujung balok $m_3$ kemudian ditarik ke kanan oleh gaya luar mendatar $F = 18\\text{ N}$. Perbandingan besar gaya tegangan tali 1 terhadap tali 2 ($T_1 : T_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 3$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 3$",
      "$3 : 5$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Seluruh sistem bergerak bersama dengan percepatan yang sama ($a$). Tali 1 hanya bertugas menarik balok $m_1$, sedangkan tali 2 bertugas menarik gabungan balok ($m_1 + m_2$).",
      "steps": "1. Percepatan bersama seluruh sistem:<br>$$a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{18\\text{ N}}{1 + 2 + 3} = \\frac{18}{6} = 3\\text{ m/s}^2$$<br>2. Tegangan tali 1 (menarik $m_1$):<br>$$T_1 = m_1 \\cdot a = 1\\text{ kg} \\times 3\\text{ m/s}^2 = 3\\text{ N}$$<br>3. Tegangan tali 2 (menarik $m_1 + m_2$):<br>$$T_2 = (m_1 + m_2) \\cdot a = (1 + 2)\\text{ kg} \\times 3\\text{ m/s}^2 = 9\\text{ N}$$<br>4. Perbandingan tegangan tali:<br>$$\\frac{T_1}{T_2} = \\frac{3\\text{ N}}{9\\text{ N}} = \\frac{1}{3} = 1 : 3$$",
      "pitfalls": "Terkecoh mengira tegangan tali 2 hanya menarik beban $m_2$ saja ($2 \\times 3 = 6\\text{ N}$), padahal tali 2 harus menahan beban $m_1$ dan $m_2$ sekaligus."
    },
    "subTopicSlug": "hukum-2-newton",
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-17",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Percepatan gravitasi pada permukaan bumi yang berjari-jari $R$ adalah $g = 10\\text{ m/s}^2$. Sebuah satelit pengamat cuaca mengorbit bumi pada lintasan lingkaran pada ketinggian $h = R$ di atas permukaan bumi. Besar percepatan gravitasi yang dirasakan oleh satelit tersebut pada orbitnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1,25 m/s²",
      "2,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "10,0 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum kuadrat terbalik kuat medan gravitasi: $g(r) = G \\frac{M}{r^2}$ dengan jarak diukur dari pusat massa bumi ($r = R + h$).</div>",
      "steps": "<ol><li>1) Jarak satelit dari pusat bumi: $r = R + h = R + R = 2R$.<br>2) Kuat medan gravitasi pada ketinggian tersebut:<br>$$g' = g \\left(\\frac{R}{r}\\right)^2 = 10 \\left(\\frac{R}{2R}\\right)^2 = 10 \\times \\frac{1}{4} = 2{,}5\\text{ m/s}^2$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering lupa mengkuadratkan perbandingan jarak ($10 / 2 = 5{,}0\\text{ m/s}^2$) atau lupa bahwa jarak harus dihitung dari pusat bumi.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-18",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah eksoplanet baru yang ditemukan oleh teleskop antariksa memiliki massa dua kali massa bumi ($M_P = 2 M_B$) dan jari-jari setengah dari jari-jari bumi ($R_P = 0{,}5 R_B$). Jika kuat medan gravitasi di permukaan bumi bernilai $g$, maka kuat medan gravitasi di permukaan eksoplanet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "g",
      "2g",
      "4g",
      "8g",
      "16g"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan kuat medan gravitasi permukaan planet: $g = G \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{g_P}{g_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (2) \\left(\\frac{1}{0{,}5}\\right)^2 = 2 \\times 4 = 8 \\Rightarrow g_P = 8g$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jari-jari sehingga menghitung $\\frac{2}{0{,}5} = 4g$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-41",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah bola baja raksasa bermassa $m_1 = 4000\\text{ kg}$ dan $m_2 = 9000\\text{ kg}$ terpisah sejauh $r = 6\\text{ meter}$ antar-pusat massanya. Jika $G$ adalah konstanta gravitasi universal Newton, besar gaya gravitasi tarik-menarik antara kedua bola tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10⁴ G N",
      "10⁵ G N",
      "10⁶ G N",
      "6 × 10⁶ G N",
      "36 × 10⁶ G N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum Gravitasi Universal Newton: $F = G \\frac{m_1 m_2}{r^2}$.</div>",
      "steps": "<ol><li>$$F = G \\frac{(4000)(9000)}{6^2} = G \\frac{36 \\times 10^6}{36} = 10^6 G\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa mengkuadratkan jarak pemisah di penyebut ($r^2 = 36$ bukan $6$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-19",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah benda angkasa $M_1$ dan $M_2$ berada pada posisi tetap dan terpisah sejauh $d$. Diketahui massa benda pertama adalah sembilan kali massa benda kedua ($M_1 = 9 M_2$). Sebuah wahana antariksa tak berawak melintas di sepanjang garis hubung kedua benda. Jarak wahana dari benda pertama $M_1$ agar resultan medan gravitasi total yang dialami wahana bernilai nol adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0,25 d",
      "0,33 d",
      "0,50 d",
      "0,60 d",
      "0,75 d"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Titik netral gravitasi: kesetimbangan kuat medan gravitasi dua sumber massa segaris ($g_1 = g_2$).</div>",
      "steps": "<ol><li>Misalkan jarak dari $M_1$ adalah $x$, maka jarak dari $M_2$ adalah $d - x$.<br>$$G \\frac{M_1}{x^2} = G \\frac{M_2}{(d - x)^2} \\Rightarrow \\frac{9 M_2}{x^2} = \\frac{M_2}{(d - x)^2}$$<br>Tarik akar kedua ruas: $\\frac{3}{x} = \\frac{1}{d - x} \\Rightarrow 3(d - x) = x \\Rightarrow 3d = 4x \\Rightarrow x = \\frac{3}{4}d = 0{,}75 d$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering memilih opsi $0{,}25 d$ yang merupakan jarak titik netral dari benda kedua ($M_2$), bukan dari benda pertama ($M_1$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-20",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah satelit komunikasi bermassa $m$ bergerak dalam lintasan orbit lingkaran stabil mengelilingi bumi pada ketinggian $h = 3R$ di atas permukaan bumi, dengan $R$ adalah jari-jari bumi. Jika percepatan gravitasi di permukaan bumi adalah $g$, kelajuan orbit satelit tersebut dinyatakan dalam variabel $g$ dan $R$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1/4 √(gR)",
      "1/3 √(gR)",
      "1/2 √(gR)",
      "√(gR)",
      "2 √(gR)"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan orbit satelit lingkaran: gaya gravitasi bumi bertindak sebagai gaya sentripetal ($\\frac{G M m}{r^2} = \\frac{m v^2}{r}$).</div>",
      "steps": "<ol><li>1) Jarak orbit dari pusat bumi: $r = R + h = R + 3R = 4R$.<br>2) Kelajuan orbit: $v = \\sqrt{\\frac{GM}{r}}$.<br>3) Hubungan konstanta permukaan: $g = \\frac{GM}{R^2} \\Rightarrow GM = g R^2$.<br>4) Substitusi: $v = \\sqrt{\\frac{g R^2}{4R}} = \\sqrt{\\frac{g R}{4}} = \\frac{1}{2}\\sqrt{g R}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan penambahan jari-jari bumi ($r = 3R$ bukan $4R$), atau lupa menarik akar kuadrat dari angka 4 di penyebut.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-43",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah satelit riset $A$ dan $B$ mengorbit bumi dalam lintasan lingkaran. Satelit $A$ mengorbit dengan jari-jari orbit $r_A = R$ dan memiliki periode revolusi $T_A = 8\\text{ hari}$. Jika satelit $B$ mengorbit dengan jari-jari orbit $r_B = 4R$, periode revolusi satelit $B$ mengelilingi bumi adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "32 hari",
      "64 hari",
      "96 hari",
      "128 hari",
      "256 hari"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum III Kepler: perbandingan kuadrat periode revolusi sama dengan perbandingan pangkat tiga jari-jari orbit ($\\frac{T_B^2}{T_A^2} = \\frac{r_B^3}{r_A^3}$).</div>",
      "steps": "<ol><li>$$\\left(\\frac{T_B}{T_A}\\right)^2 = \\left(\\frac{r_B}{r_A}\\right)^3 = \\left(\\frac{4R}{R}\\right)^3 = 64 \\Rightarrow \\frac{T_B}{T_A} = \\sqrt{64} = 8 \\Rightarrow T_B = 8 \\times T_A = 8 \\times 8 = 64\\text{ hari}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menggunakan perbandingan linear ($4 \\times 8 = 32\\text{ hari}$) tanpa menerapkan aturan pangkat $T^2 \\propto r^3$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
  },
  {
    "id": "fis-din-44",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-newton2",
    "category": "Gravitasi Universal Newton",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Kelajuan lepas (*escape velocity*) sebuah pesawat antariksa dari permukaan bumi adalah $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$. Pada sebuah planet super yang memiliki massa $8$ kali massa bumi ($M_P = 8 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), kelajuan lepas roket dari permukaan planet tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2 v_lepas",
      "4 v_lepas",
      "√2 v_lepas",
      "2√2 v_lepas",
      "8 v_lepas"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kelajuan lepas medan gravitasi: $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$.</div>",
      "steps": "<ol><li>$$\\frac{v_{\\text{lepas}, P}}{v_{\\text{lepas}, B}} = \\sqrt{\\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)} = \\sqrt{\\frac{8}{2}} = \\sqrt{4} = 2 \\Rightarrow v_{\\text{lepas}, P} = 2 v_{\\text{lepas}, B}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik tanda akar kuadrat dari rasio $\\frac{8}{2} = 4$, sehingga menjawab $4 v_{\\text{lepas}}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Hukum II Newton",
    "subTopic": "Hukum II Newton",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "hukum-2-newton"
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
