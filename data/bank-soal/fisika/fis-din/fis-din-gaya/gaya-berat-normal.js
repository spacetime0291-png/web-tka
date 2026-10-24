/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Berat dan Gaya Normal (fis-din-gaya-berat-normal)
 * Slug: gaya-berat-normal
 * Indikator: Gaya berat gravitasi (w = m * g) dan gaya normal pada bidang horizontal, bidang miring, dan dalam lift.
 * 
 * Total Butir Soal: 14 (Mudah: 8, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-berat-normal";
  const subTopicSlug = "gaya-berat-normal";
  const questions = [
  {
    "id": "fis-din-gaya-berat-normal-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gaya Berat dan Gaya Normal",
    "difficulty": "mudah",
    "statement": "Sebuah balok besi bermassa $m = 8\\text{ kg}$ diletakkan di atas lantai mendatar yang diam. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya normal yang diberikan lantai pada balok besi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ N}$",
      "$8\\text{ N}$",
      "$40\\text{ N}$",
      "$0\\text{ N}$",
      "$160\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada bidang horizontal tanpa gaya vertikal luar tambahan, gaya normal ($N$) mengimbangi gaya berat ($w$):<br>$$N = w = m \\cdot g$$",
      "steps": "1. Hitung berat balok:<br>$$w = 8\\text{ kg} \\times 10\\text{ m/s}^2 = 80\\text{ N}$$<br>2. Dari kesetimbangan sumbu vertikal ($\\Sigma F_y = 0$):<br>$$N - w = 0 \\implies N = 80\\text{ N}$$",
      "pitfalls": "Menyamakan satuan gaya dengan massa ($8\\text{ N}$) atau lupa mengalikan dengan percepatan gravitasi $g$."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-berat-normal-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gaya Berat dan Gaya Normal",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 5\\text{ kg}$ diletakkan di atas bidang miring dengan sudut kemiringan $\\theta = 60^\\circ$ terhadap horizontal (diketahui $\\cos 60^\\circ = 0{,}5$ dan $\\sin 60^\\circ = 0{,}5\\sqrt{3}$). Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan bidang miring pada balok adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ N}$",
      "$50\\text{ N}$",
      "$25\\sqrt{3}\\text{ N}$",
      "$10\\text{ N}$",
      "$50\\sqrt{3}\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya normal pada bidang miring mengimbangi komponen gaya berat yang tegak lurus terhadap permukaan bidang miring:<br>$$N = w \\cos\\theta = m \\cdot g \\cdot \\cos\\theta$$",
      "steps": "1. Hitung gaya normal tegak lurus bidang:<br>$$N = 5\\text{ kg} \\times 10\\text{ m/s}^2 \\times \\cos 60^\\circ = 50 \\times 0{,}5 = 25\\text{ N}$$",
      "pitfalls": "Menggunakan fungsi sinus sehingga menghitung $w \\sin 60^\\circ = 25\\sqrt{3}\\text{ N}$, yang merupakan gaya berat sejajar bidang, bukan gaya normal."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-berat-normal-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gaya Berat dan Gaya Normal",
    "difficulty": "mudah",
    "statement": "Seseorang bermassa $m = 50\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Ketika lift bergerak dipercepat vertikal ke atas dengan percepatan $a = 2\\text{ m/s}^2$ ($g = 10\\text{ m/s}^2$), angka gaya normal desakan kaki yang terbaca pada timbangan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ N}$",
      "$500\\text{ N}$",
      "$400\\text{ N}$",
      "$100\\text{ N}$",
      "$550\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Timbangan badan mengukur gaya normal ($N$) desakan kaki. Saat lift dipercepat ke atas, berlaku Hukum II Newton:<br>$$\\Sigma F_y = m \\cdot a \\implies N - w = m \\cdot a \\implies N = m(g + a)$$",
      "steps": "1. Substitusikan $m = 50\\text{ kg}$, $g = 10\\text{ m/s}^2$, dan $a = 2\\text{ m/s}^2$:<br>$$N = 50(10 + 2) = 50 \\times 12 = 600\\text{ N}$$",
      "pitfalls": "Mengurangkan percepatan ($50(10 - 2) = 400\\text{ N}$), yang baru merupakan gaya normal jika lift dipercepat ke bawah."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-berat-normal-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gaya Berat dan Gaya Normal",
    "difficulty": "mudah",
    "statement": "Arah dari vektor gaya normal yang dialami oleh suatu benda padat yang bersentuhan dengan bidang kontak selalu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Tegak lurus (perpendikular) terhadap bidang kontak dan mengarah menjauhi bidang kontak menuju ke benda",
      "Selalu tegak lurus mengarah ke pusat bumi",
      "Sejajar dengan garis permukaan bidang kontak",
      "Selalu berlawanan arah dengan arah gerak benda",
      "Membentuk sudut $45^\\circ$ terhadap bidang kontak"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kata 'normal' dalam geometri matematika berarti tegak lurus ($90^\\circ$). Gaya normal adalah gaya kontak tolak-menolak antar atom pada permukaan sentuh yang selalu tegak lurus bidang kontak.",
      "steps": "1. Gaya normal timbul akibat deformasi mikro permukaan kontak.<br>2. Arahnya selalu tegak lurus permukaan bidang sentuh dan mendorong benda menjauh dari permukaan.",
      "pitfalls": "Mengira gaya normal selalu berarah ke atas melawan gravitasi bumi, padahal pada dinding vertikal arah gaya normal adalah horizontal."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-berat-normal-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gaya Berat dan Gaya Normal",
    "difficulty": "mudah",
    "statement": "Sebuah balok bermassa $m = 10\\text{ kg}$ berada di atas lantai datar. Balok tersebut kemudian ditekan dari atas secara vertikal ke bawah dengan gaya tekan tambahan $F = 30\\text{ N}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal lantai pada balok adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$130\\text{ N}$",
      "$100\\text{ N}$",
      "$70\\text{ N}$",
      "$30\\text{ N}$",
      "$170\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya normal pada bidang horizontal dipengaruhi oleh seluruh gaya vertikal luar yang bekerja pada benda:<br>$$\\Sigma F_y = 0 \\implies N - w - F = 0 \\implies N = w + F$$",
      "steps": "1. Berat balok: $w = m \\cdot g = 10 \\times 10 = 100\\text{ N}$.<br>2. Gaya tekan ke bawah: $F = 30\\text{ N}$.<br>3. Hitung gaya normal:<br>$$N = 100\\text{ N} + 30\\text{ N} = 130\\text{ N}$$",
      "pitfalls": "Mengurangkan gaya tekan ($100 - 30 = 70\\text{ N}$), padahal gaya tekan diarahkan ke bawah sehingga menambah desakan lantai."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-din-gaya-berat-normal-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Seseorang dengan massa $m = 60\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Lift sedang bergerak ke bawah namun kecepatannya berkurang secara konstan (mengalami perlambatan) sebesar $a = 3\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya normal (skala timbangan) yang dialami orang tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$420\\text{ N}$",
      "$600\\text{ N}$",
      "$780\\text{ N}$",
      "$800\\text{ N}$",
      "$980\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum II Newton pada kerangka inersial: $\\sum F_y = m a_y$. Ketika lift bergerak ke bawah dan mengalami perlambatan, vektor percepatan lift justru berarah ke atas ($a_y = +a$). Gaya normal yang dikerjakan timbangan merupakan gaya berat semu yang terbaca oleh alat ukur.",
      "steps": "1. Identifikasi arah percepatan: Gerak ke arah bawah dengan laju berkurang (perlambatan) berarti arah vektor percepatan adalah ke atas.\\n2. Terapkan Hukum II Newton pada arah vertikal (sumbu positif ke atas):\\n$$\\sum F_y = N - W = m a$$\\n$$N = W + m a = m(g + a)$$\\n3. Masukkan nilai yang diketahui:\\n$$N = 60(10 + 3) = 60 \\times 13 = 780\\text{ N}$$\\nJadi, gaya normal yang terbaca pada timbangan adalah $780\\text{ N}$.",
      "pitfalls": "Kekeliruan umum adalah mengasumsikan gerak ke bawah selalu menghasilkan bobot semu berkurang ($N = m(g - a) = 420\\text{ N}$). Ingat bahwa tanda percepatan ditentukan oleh perubahan vektor kecepatan, bukan semata-mata arah lintasan lift."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-berat-normal-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok bermassa $m = 4\\text{ kg}$ berada di atas bidang miring licin dengan sudut kemiringan $\\theta = 30^\\circ$ terhadap bidang horizontal. Balok ditekan oleh gaya luar horizontal $F = 20\\text{ N}$ yang mengarah tegak lurus ke dinding vertikal (menekan ke arah bidang miring). Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan bidang miring pada balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(20\\sqrt{3} + 10)\\text{ N}$",
      "$(20\\sqrt{3} - 10)\\text{ N}$",
      "$(20 + 10\\sqrt{3})\\text{ N}$",
      "$20\\sqrt{3}\\text{ N}$",
      "$(40 + 10\\sqrt{3})\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya normal bekerja tegak lurus permukaan bidang miring. Pada sumbu tegak lurus bidang miring (sumbu-$y'$), berlaku kesetimbangan translasi $\\sum F_\\perp = 0$. Komponen gaya yang tegak lurus bidang miring berasal dari proyeksi gaya berat ($W_\\perp = m g \\cos\\theta$) dan proyeksi gaya luar horizontal ($F_\\perp = F \\sin\\theta$).",
      "steps": "1. Uraikan gaya-gaya pada sumbu tegak lurus bidang miring:\\n- Gaya normal $N$ berarah ke luar permukaan bidang.\\n- Komponen berat: $W_\\perp = m g \\cos 30^\\circ = 4 \\times 10 \\times \\frac{1}{2}\\sqrt{3} = 20\\sqrt{3}\\text{ N}$.\\n- Komponen gaya tekan horizontal $F$: sudut antara vektor horizontal $F$ dan bidang miring adalah $\\theta = 30^\\circ$, sehingga komponen yang tegak lurus ke dalam bidang adalah $F_\\perp = F \\sin 30^\\circ = 20 \\times \\frac{1}{2} = 10\\text{ N}$.\\n2. Terapkan syarat keseimbangan tegak lurus bidang:\\n$$\\sum F_\\perp = 0 \\implies N - W_\\perp - F_\\perp = 0$$\\n$$N = W_\\perp + F_\\perp = 20\\sqrt{3} + 10\\text{ N}$$\\nSehingga besar gaya normal adalah $(20\\sqrt{3} + 10)\\text{ N}$.",
      "pitfalls": "Sering salah menguraikan gaya luar horizontal $F$; siswa kerap menggunakan $F \\cos\\theta$ untuk komponen tegak lurus bidang, padahal proyeksi gaya horizontal pada sumbu tegak lurus bidang miring adalah $F \\sin\\theta$."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-berat-normal-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah buku bermassa $m = 2\\text{ kg}$ ditekan secara horizontal ke dinding vertikal dengan gaya tekan $F = 50\\text{ N}$ sehingga buku tetap diam di dinding. Jika $g = 10\\text{ m/s}^2$, pernyataan berikut yang paling tepat mengenai gaya normal yang bekerja pada buku adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Besar gaya normal adalah $20\\text{ N}$ dan berarah vertikal ke atas mengimbangi berat buku.",
      "Besar gaya normal adalah $50\\text{ N}$ dan berarah horizontal menjauhi dinding tegak lurus permukaan.",
      "Besar gaya normal adalah $70\\text{ N}$ karena merupakan penjumlahan gaya tekan dan gaya berat.",
      "Besar gaya normal bernilai nol karena gaya normal hanya muncul pada bidang horizontal atau miring.",
      "Besar gaya normal adalah $30\\text{ N}$ yang berasal dari selisih gaya dorong dan gaya berat."
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya normal adalah gaya kontak yang arahnya selalu tegak lurus terhadap bidang sentuh. Pada dinding vertikal, bidang sentuh berada pada posisi vertikal sehingga gaya normal berarah horizontal tegak lurus dinding. Pada sumbu horizontal buku diam, sehingga $\\sum F_x = 0 \\implies N = F$.",
      "steps": "1. Analisis sumbu horizontal ($x$):\\nDinding vertikal menahan dorongan buku dengan gaya reaksi kontak tegak lurus bidang vertikal (horizontal).\\n$$\\sum F_x = 0 \\implies F - N = 0 \\implies N = F = 50\\text{ N}$$\\n2. Analisis sumbu vertikal ($y$):\\nGaya berat $W = m g = 2 \\times 10 = 20\\text{ N}$ berarah ke bawah, diimbangi oleh gaya gesek statis dinding ke atas ($f_s = 20\\text{ N}$).\\n3. Kesimpulan: Gaya normal besarnya $50\\text{ N}$ dan berarah horizontal tegak lurus permukaan dinding.",
      "pitfalls": "Salah satu miskonsepsi paling umum adalah menganggap gaya normal selalu sama dengan gaya berat $m g$. Gaya normal bergantung pada interaksi kontak tegak lurus permukaan."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-berat-normal-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua balok $A$ ($m_A = 3\\text{ kg}$) dan $B$ ($m_B = 2\\text{ kg}$) disusun bertumpuk di lantai horizontal, dengan balok $B$ diletakkan tepat di atas balok $A$. Sebuah gaya vertikal ke atas $F = 15\\text{ N}$ ditarikkan pada balok $B$ tetapi belum cukup untuk mengangkat balok $B$ terlepas dari balok $A$. Jika $g = 10\\text{ m/s}^2$, perbandingan besar gaya kontak antara balok $A$ dan $B$ ($N_{AB}$) terhadap gaya normal lantai pada balok $A$ ($N_{\\text{lantai}}$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 7$",
      "$1 : 5$",
      "$2 : 5$",
      "$3 : 7$",
      "$2 : 7$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Diagram benda bebas (Free Body Diagram) dipisahkan untuk balok $B$ dan sistem gabungan balok $(A+B)$. Gaya normal timbul pada setiap antarmuka kontak berdasarkan kondisi kesetimbangan vertikal $\\sum F_y = 0$.",
      "steps": "1. Tinjau balok $B$ (di atas):\\nGaya ke atas: $F = 15\\text{ N}$ dan gaya kontak dari balok $A$ ($N_{AB}$).\\nGaya ke bawah: gaya berat $W_B = m_B g = 2 \\times 10 = 20\\text{ N}$.\\n$$\\sum F_{y,B} = 0 \\implies N_{AB} + F - W_B = 0$$\\n$$N_{AB} = 20 - 15 = 5\\text{ N}$$\\n2. Tinjau sistem keseluruhan $(A + B)$ di atas lantai:\\nGaya ke atas: gaya normal lantai $N_{\\text{lantai}}$ dan gaya tarik $F = 15\\text{ N}$.\\nGaya ke bawah: total gaya berat $(m_A + m_B)g = (3 + 2) \\times 10 = 50\\text{ N}$.\\n$$\\sum F_{y,\\text{total}} = 0 \\implies N_{\\text{lantai}} + F - (W_A + W_B) = 0$$\\n$$N_{\\text{lantai}} = 50 - 15 = 35\\text{ N}$$\\n3. Hitung perbandingannya:\\n$$\\frac{N_{AB}}{N_{\\text{lantai}}} = \\frac{5}{35} = \\frac{1}{7}$$\\nJadi, perbandingannya adalah $1 : 7$.",
      "pitfalls": "Kekeliruan terjadi jika lupa bahwa gaya tarik $F$ bekerja pada balok $B$ sehingga mengurangi gaya tekan kontak antara $B$ dan $A$, sekaligus mengurangi total gaya tekan sistem ke lantai."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-gaya-berat-normal-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah mobil bermassa $M = 1.000\\text{ kg}$ melintasi puncak jembatan cembung yang memiliki jari-jari kelengkungan $R = 40\\text{ m}$. Jika mobil melaju dengan kelajuan tetap $v = 10\\text{ m/s}$ dan percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan permukaan jalan pada ban mobil tepat di puncak jembatan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.500\\text{ N}$",
      "$5.000\\text{ N}$",
      "$7.500\\text{ N}$",
      "$10.000\\text{ N}$",
      "$12.500\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada puncak lintasan cembung melingkar vertikal, resultan gaya berarah menuju pusat kelengkungan (ke arah bawah) sebagai gaya sentripetal: $\\sum F_r = m \\frac{v^2}{R}$. Gaya yang bekerja adalah gaya berat ke bawah ($W$) dan gaya normal ke atas ($N$).",
      "steps": "1. Rumuskan persamaan dinamika gerak melingkar di puncak bukit:\\n$$\\sum F_r = W - N = M \\frac{v^2}{R}$$\\n2. Nyatakan gaya normal $N$:\\n$$N = W - M \\frac{v^2}{R} = M\\left(g - \\frac{v^2}{R}\\right)$$\\n3. Substitusi nilai-nilai ke dalam rumus:\\n$$N = 1000\\left(10 - \\frac{10^2}{40}\\right) = 1000\\left(10 - \\frac{100}{40}\\right) = 1000(10 - 2,5)$$\\n$$N = 1000 \\times 7,5 = 7.500\\text{ N}$$\\nJadi, gaya normal pada puncak jembatan cembung adalah $7.500\\text{ N}$.",
      "pitfalls": "Kerap tertukar tanda antara puncak cembung ($N = m(g - v^2/R)$) dan lembah cekung ($N = m(g + v^2/R)$). Di puncak cembung, mobil terasa lebih ringan sehingga gaya normal berkurang."
    },
    "subTopicSlug": "gaya-berat-normal",
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-din-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang siswa bermassa $50\\text{ kg}$ berdiri di atas timbangan badan di dalam lift hotel yang sedang bergerak turun dengan perlambatan konstan $2\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, angka gaya desak normal yang ditunjukkan oleh timbangan adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "400 N",
      "500 N",
      "600 N",
      "700 N",
      "800 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal: $\\Sigma F_y = m \\cdot a$.</div>",
      "steps": "<ol><li>Lift bergerak turun dengan perlambatan, yang berarti vektor percepatan sistem mengarah ke atas ($a = +2\\text{ m/s}^2$). Persamaan gaya normal pada siswa: $N - W = m \\cdot a \\Rightarrow N = m(g + a) = 50(10 + 2) = 600\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering terkecoh menganggap gerakan turun selalu menghasilkan $N = m(g - a) = 400\\text{ N}$, tanpa memperhatikan kata 'perlambatan' yang membalik arah vektor percepatan ke atas.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-25",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah paket kargo bermassa $10\\text{ kg}$ tergantung pada neraca pegas di langit-langit lift gudang. Jika kabel penggantung lift tiba-tiba putus sehingga lift jatuh bebas di bawah pengaruh gravitasi ($g = 10\\text{ m/s}^2$), angka skala yang terbaca pada neraca pegas selama lift jatuh bebas adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0 N",
      "50 N",
      "100 N",
      "150 N",
      "200 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kondisi jatuh bebas dan bobot semu: saat percepatan sistem $a = g$ ke bawah, berat semu bernilai nol (keadaan tanpa bobot / weightlessness).</div>",
      "steps": "<ol><li>Persamaan gaya pada neraca pegas: $mg - T = ma$. Karena lift jatuh bebas ($a = g$), maka: $T = m(g - a) = m(g - g) = 0\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira pegas tetap menunjukkan berat sejati benda $mg = 100\\text{ N}$ karena mengabaikan percepatan kerangka acuan lift.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-42",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Gravitasi Universal Newton",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang astronot memiliki berat $W = 600\\text{ N}$ di permukaan bumi. Jika astronot tersebut mendarat di permukaan sebuah planet baru yang memiliki massa $3$ kali massa bumi ($M_P = 3 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), berat astronot tersebut di permukaan planet baru adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "300 N",
      "400 N",
      "450 N",
      "450 N",
      "900 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Perbandingan gaya berat benda pada dua planet: $W \\propto \\frac{M}{R^2}$.</div>",
      "steps": "<ol><li>$$\\frac{W_P}{W_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (3) \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4} \\Rightarrow W_P = \\frac{3}{4} \\times 600 = 450\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengabaikan pengkuadratan jari-jari sehingga menghitung $\\frac{3}{2} \\times 600 = 900\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
  },
  {
    "id": "fis-din-27",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-berat-normal",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang antariksawan bermassa $70\\text{ kg}$ berada di kursi kabin roket luar angkasa saat peluncuran vertikal ke atas. Roket mengalami percepatan konstan sebesar $a = 30\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tekan normal yang dialami antariksawan tersebut terhadap sandaran kursinya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2100 N",
      "2800 N",
      "3500 N",
      "4200 N",
      "4900 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kerangka acuan vertikal mengalami akselerasi tinggi ($g$-force): $N = m(g + a)$.</div>",
      "steps": "<ol><li>Persamaan gerak vertikal: $N - mg = ma \\Rightarrow N = m(g + a) = 70(10 + 30) = 70 \\times 40 = 2800\\text{ N}$. Antariksawan merasakan gaya 4 kali berat badannya ($4g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menghitung gaya inersia $ma = 2100\\text{ N}$ tanpa menambahkan gaya berat $mg = 700\\text{ N}$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Berat dan Gaya Normal",
    "subTopic": "Gaya Berat dan Gaya Normal",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-berat-normal"
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
