module.exports = [
  {
    id: "fis-din-gaya-newton2-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "sedang",
    statement: "Dua balok $A$ dan $B$ dengan massa masing-masing $m_A = 3\\text{ kg}$ dan $m_B = 2\\text{ kg}$ diletakkan berdampingan saling bersentuhan di atas lantai horizontal licin tanpa gesekan. Sebuah gaya mendatar konstan $F = 25\\text{ N}$ didorongkan pada balok $A$ ke arah kanan menuju balok $B$. Besar gaya kontak (gaya tekan) antara balok $A$ dan balok $B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ N}$",
      "$15\\text{ N}$",
      "$25\\text{ N}$",
      "$5\\text{ N}$",
      "$12{,}5\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Tinjau sistem gabungan untuk menentukan percepatan bersama, kemudian tinjau diagram benda bebas balok kedua untuk menentukan gaya kontak:<br>$$a = \\frac{F}{m_A + m_B},\\quad N_{AB} = m_B \\cdot a$$",
      steps: "1. Percepatan bersama kedua balok:<br>$$a = \\frac{25\\text{ N}}{3\\text{ kg} + 2\\text{ kg}} = \\frac{25}{5} = 5\\text{ m/s}^2$$<br>2. Tinjau balok $B$: Satu-satunya gaya horizontal yang bekerja pada balok $B$ adalah gaya dorong kontak dari balok $A$ ($N_{AB}$):<br>$$N_{AB} = m_B \\cdot a = 2\\text{ kg} \\times 5\\text{ m/s}^2 = 10\\text{ N}$$",
      pitfalls: "Menghitung gaya kontak menggunakan massa balok $A$ ($3 \\times 5 = 15\\text{ N}$), yang bernilai salah karena balok $A$ didorong oleh gaya $F$ dari luar."
    }
  },
  {
    id: "fis-din-gaya-newton2-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "sedang",
    statement: "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai mendatar yang licin. Balok ditarik oleh gaya luar $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal (diketahui $\\cos 37^\\circ = 0{,}8$ dan $\\sin 37^\\circ = 0{,}6$, $g = 10\\text{ m/s}^2$). Jarak yang ditempuh balok dalam selang waktu $t = 4\\text{ sekon}$ dari keadaan diam adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$32\\text{ meter}$",
      "$40\\text{ meter}$",
      "$16\\text{ meter}$",
      "$64\\text{ meter}$",
      "$24\\text{ meter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Hanya komponen gaya horizontal ($F_x = F \\cos\\theta$) yang menghasilkan percepatan translasi pada lantai licin. Komponen vertikal ($F_y = F \\sin\\theta = 30\\text{ N}$) lebih kecil dari berat benda ($w = 100\\text{ N}$) sehingga balok tetap meluncur di lantai.",
      steps: "1. Komponen gaya horizontal penggerak:<br>$$F_x = 50\\text{ N} \\times 0{,}8 = 40\\text{ N}$$<br>2. Percepatan balok:<br>$$a = \\frac{F_x}{m} = \\frac{40\\text{ N}}{10\\text{ kg}} = 4\\text{ m/s}^2$$<br>3. Jarak tempuh dari keadaan diam ($v_0 = 0$):<br>$$s = \\frac{1}{2} a t^2 = \\frac{1}{2} (4\\text{ m/s}^2) \\times (4\\text{ s})^2 = 2 \\times 16 = 32\\text{ meter}$$",
      pitfalls: "Langsung menggunakan gaya total $F = 50\\text{ N}$ tanpa memproyeksikannya dengan $\\cos 37^\\circ$, menghasilkan $a = 5\\text{ m/s}^2$ dan $s = 40\\text{ m}$."
    }
  },
  {
    id: "fis-din-gaya-newton2-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "sedang",
    statement: "Sebuah benda bermassa $m = 2\\text{ kg}$ bergerak pada lintasan lurus sepanjang sumbu-$x$ dengan posisi memenuhi fungsi waktu $x(t) = 3t^2 - 4t + 1$ (dengan $x$ dalam meter dan $t$ dalam sekon). Besar resultan gaya yang bekerja pada benda tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\text{ N}$",
      "$6\\text{ N}$",
      "$8\\text{ N}$",
      "$16\\text{ N}$",
      "$24\\text{ N}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Percepatan adalah turunan kedua dari fungsi posisi terhadap waktu ($a = \\frac{d^2x}{dt^2}$). Berdasarkan Hukum II Newton, resultan gaya adalah hasil kali massa dengan percepatan tersebut:<br>$$\\Sigma F = m \\cdot a$$",
      steps: "1. Turunan pertama (kecepatan):<br>$$v(t) = \\frac{dx}{dt} = 6t - 4\\text{ (m/s)}$$<br>2. Turunan kedua (percepatan):<br>$$a(t) = \\frac{dv}{dt} = 6\\text{ m/s}^2$$<br>3. Hitung resultan gaya:<br>$$\\Sigma F = m \\cdot a = 2\\text{ kg} \\times 6\\text{ m/s}^2 = 12\\text{ N}$$",
      pitfalls: "Hanya menurunkan posisi satu kali sehingga menyangka kecepatan sebagai percepatan."
    }
  },
  {
    id: "fis-din-gaya-newton2-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "sedang",
    statement: "Sebuah balok bermassa $m = 4\\text{ kg}$ mula-mula diam di atas lantai datar licin. Mulai saat $t = 0$, balok didorong oleh gaya mendatar yang besarnya berubah terhadap waktu memenuhi persamaan $F(t) = 6t + 2$ (dengan $F$ dalam Newton dan $t$ dalam sekon). Kelajuan balok pada saat $t = 2\\text{ sekon}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$16\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$6\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Ketika gaya luar bergantung pada waktu ($F(t)$), percepatan juga berubah terhadap waktu ($a(t) = \\frac{F(t)}{m}$). Perubahan kecepatan dicari melalui integrasi percepatan:<br>$$\\Delta v = \\int_0^t a(t)\\,dt$$",
      steps: "1. Persamaan fungsi percepatan:<br>$$a(t) = \\frac{6t + 2}{4} = 1{,}5t + 0{,}5\\text{ (m/s}^2)$$<br>2. Integrasikan dari $t = 0$ hingga $t = 2\\text{ s}$:<br>$$v(2) - v(0) = \\int_0^2 (1{,}5t + 0{,}5)\\,dt = \\left[ 0{,}75t^2 + 0{,}5t \\right]_0^2$$<br>3. Masukkan batas waktu:<br>$$v(2) = 0{,}75(2)^2 + 0{,}5(2) = 0{,}75(4) + 1 = 3 + 1 = 4\\text{ m/s}$$",
      pitfalls: "Langsung menghitung gaya pada $t=2$ ($F=14\\text{ N}$), lalu membagi $a = 14/4 = 3{,}5$ dan mengalikan $v = 3{,}5 \\times 2 = 7\\text{ m/s}$ tanpa integrasi."
    }
  },
  {
    id: "fis-din-gaya-newton2-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subChapterId: "fis-din-gaya",
    subTopicId: "fis-din-gaya-newton2",
    category: "Hukum II Newton",
    difficulty: "sedang",
    statement: "Tiga buah balok $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ disusun segaris di atas lantai licin dan saling terhubung oleh tali ringan tak bermassa. Balok $m_1$ dan $m_2$ dihubungkan oleh tali 1, sedangkan balok $m_2$ dan $m_3$ dihubungkan oleh tali 2. Ujung balok $m_3$ kemudian ditarik ke kanan oleh gaya luar mendatar $F = 18\\text{ N}$. Perbandingan besar gaya tegangan tali 1 terhadap tali 2 ($T_1 : T_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 3$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 3$",
      "$3 : 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Seluruh sistem bergerak bersama dengan percepatan yang sama ($a$). Tali 1 hanya bertugas menarik balok $m_1$, sedangkan tali 2 bertugas menarik gabungan balok ($m_1 + m_2$).",
      steps: "1. Percepatan bersama seluruh sistem:<br>$$a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{18\\text{ N}}{1 + 2 + 3} = \\frac{18}{6} = 3\\text{ m/s}^2$$<br>2. Tegangan tali 1 (menarik $m_1$):<br>$$T_1 = m_1 \\cdot a = 1\\text{ kg} \\times 3\\text{ m/s}^2 = 3\\text{ N}$$<br>3. Tegangan tali 2 (menarik $m_1 + m_2$):<br>$$T_2 = (m_1 + m_2) \\cdot a = (1 + 2)\\text{ kg} \\times 3\\text{ m/s}^2 = 9\\text{ N}$$<br>4. Perbandingan tegangan tali:<br>$$\\frac{T_1}{T_2} = \\frac{3\\text{ N}}{9\\text{ N}} = \\frac{1}{3} = 1 : 3$$",
      pitfalls: "Terkecoh mengira tegangan tali 2 hanya menarik beban $m_2$ saja ($2 \\times 3 = 6\\text{ N}$), padahal tali 2 harus menahan beban $m_1$ dan $m_2$ sekaligus."
    }
  }
];
