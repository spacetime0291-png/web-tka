/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Jarak dan Perpindahan (fis-kin-gl-jarak)
 * Slug: jarak-perpindahan
 * Indikator: Perbedaan besaran skalar (jarak) dan vektor (perpindahan) pada lintasan gerak lurus.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-jarak";
  const subTopicSlug = "jarak-perpindahan";
  const questions = [
  {
    "id": "fis-kin-gl-jarak-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "statement": "Seorang pejalan kaki bergerak lurus ke arah timur sejauh $12\\text{ m}$, kemudian berbalik arah dan berjalan lurus ke arah barat sejauh $5\\text{ m}$. Jarak total yang ditempuh dan besar perpindahan orang tersebut dari titik awal berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$17\\text{ m}$ dan $7\\text{ m}$",
      "$17\\text{ m}$ dan $13\\text{ m}$",
      "$7\\text{ m}$ dan $17\\text{ m}$",
      "$13\\text{ m}$ dan $7\\text{ m}$",
      "$17\\text{ m}$ dan $0\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak ($s$) adalah besaran skalar yang menyatakan total panjang seluruh lintasan yang dilalui tanpa memperhatikan arah. Perpindahan ($\\Delta \\vec{r}$) adalah besaran vektor yang menyatakan perubahan kedudukan/posisi dari posisi awal ke posisi akhir.",
      "steps": "1. Jarak total dihitung dengan menjumlahkan seluruh panjang lintasan gerak:<br>$$s = 12\\text{ m} + 5\\text{ m} = 17\\text{ m}$$<br>2. Perpindahan merupakan resultan posisi arah timur (+) dan barat (-):<br>$$\\Delta r = 12\\text{ m} - 5\\text{ m} = 7\\text{ m}\\text{ (ke arah timur)}$$",
      "pitfalls": "Jangan mengurangkan jarak tempuh ketika berbalik arah. Jarak selalu bernilai skalar positif akumulatif."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak ($s$) adalah besaran skalar yang menyatakan total panjang seluruh lintasan yang dilalui tanpa memperhatikan arah. Perpindahan ($\\Delta \\vec{r}$) adalah besaran vektor yang menyatakan perubahan kedudukan/posisi dari posisi awal ke posisi akhir. **Tips:** Jangan mengurangkan jarak tempuh ketika berbalik arah."
  },
  {
    "id": "fis-kin-gl-jarak-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "statement": "Sebuah partikel bergerak menelusuri lintasan setengah lingkaran dengan jari-jari $R = 7\\text{ m}$ dari titik $A$ ke titik $B$. Jika $\\pi = \\frac{22}{7}$, nilai jarak yang ditempuh dan besar perpindahan partikel tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$22\\text{ m}$ dan $14\\text{ m}$",
      "$14\\text{ m}$ dan $22\\text{ m}$",
      "$44\\text{ m}$ dan $14\\text{ m}$",
      "$22\\text{ m}$ dan $7\\text{ m}$",
      "$11\\text{ m}$ dan $14\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak pada lintasan lengkung merupakan panjang busur yang dilalui. Sedangkan perpindahan adalah garis lurus yang menghubungkan titik awal ke titik akhir (dalam setengah lingkaran, garis lurus tersebut adalah garis tengah/diameter lingkaran).",
      "steps": "1. Jarak busur setengah lingkaran:<br>$$s = \\frac{1}{2} \\times (2\\pi R) = \\pi R = \\frac{22}{7} \\times 7\\text{ m} = 22\\text{ m}$$<br>2. Besar perpindahan (diameter titik $A$ ke titik $B$):<br>$$|\\Delta \\vec{r}| = 2R = 2 \\times 7\\text{ m} = 14\\text{ m}$$",
      "pitfalls": "Kekeliruan umum adalah menganggap perpindahan sama dengan panjang busur lengkung, padahal perpindahan selalu merupakan garis lurus terpendek antara titik awal dan akhir."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak pada lintasan lengkung merupakan panjang busur yang dilalui. Sedangkan perpindahan adalah garis lurus yang menghubungkan titik awal ke titik akhir (dalam setengah lingkaran, garis lurus tersebut adalah garis tengah/diameter lingkaran)."
  },
  {
    "id": "fis-kin-gl-jarak-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "statement": "Manakah pernyataan berikut yang paling tepat mengenai perbedaan karakteristik fisis antara jarak dan perpindahan pada suatu gerak benda?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Jarak adalah besaran skalar yang nilainya selalu tak-negatif, sedangkan perpindahan adalah besaran vektor yang bernilai nol jika benda kembali ke posisi semula.",
      "Jarak selalu bernilai lebih kecil daripada besar perpindahannya.",
      "Perpindahan adalah besaran skalar, sedangkan jarak adalah besaran vektor yang memiliki arah.",
      "Jarak dan perpindahan selalu memiliki nilai yang identik pada semua jenis lintasan.",
      "Perpindahan tidak pernah bernilai nol selama benda melakukan gerakan."
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak merupakan besaran skalar (hanya memiliki nilai besar dan selalu positif/akumulatif). Perpindahan merupakan besaran vektor (memiliki nilai besar dan arah tertentu), di mana $\\Delta \\vec{r} = \\vec{r}_{\\text{akhir}} - \\vec{r}_{\\text{awal}}$. Bila posisi akhir berimpit dengan posisi awal, maka $|\\Delta \\vec{r}| = 0$.",
      "steps": "Analisis setiap opsi:<br>• Opsi A: Tepat, jarak adalah besaran skalar positif akumulatif, sedangkan perpindahan bernilai nol jika kembali ke posisi semula.<br>• Opsi B: Salah, jarak selalu $\\ge$ perpindahan.<br>• Opsi C: Terbalik definisi skalar dan vektor.<br>• Opsi D: Nilainya hanya identik pada gerak lurus satu arah tanpa berbalik arah.<br>• Opsi E: Perpindahan nol terjadi saat lintasan tertutup.",
      "pitfalls": "Hati-hati dengan kata mutlak seperti 'selalu identik' atau 'tidak pernah bernilai nol'."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak merupakan besaran skalar (hanya memiliki nilai besar dan selalu positif/akumulatif). Perpindahan merupakan besaran vektor (memiliki nilai besar dan arah tertentu), di mana $\\Delta \\vec{r} = \\vec{r}_{\\text{akhir}} - \\vec{r}_{\\text{awal}}$. Bila posisi akhir berimpit dengan posisi awal, maka $|\\Delta \\vec{r}| = 0$. **Tips:** Hati-hati dengan kata mutlak seperti 'selalu identik' atau 'tidak pernah bernilai nol'."
  },
  {
    "id": "fis-kin-gl-jarak-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "statement": "Sebuah mobil mainan bergerak sepanjang sumbu-$x$. Mula-mula mobil berada pada koordinat $x_1 = -4\\text{ m}$, bergerak maju ke $x_2 = +8\\text{ m}$, kemudian mundur dan berhenti di $x_3 = +2\\text{ m}$. Perpindahan total mobil mainan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+6\\text{ m}$",
      "$+18\\text{ m}$",
      "$-6\\text{ m}$",
      "$+14\\text{ m}$",
      "$+10\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perpindahan pada satu dimensi (sumbu-$x$) didefinisikan secara langsung oleh selisih koordinat posisi akhir terhadap posisi awal:<br>$$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}$$",
      "steps": "1. Tentukan posisi awal dan akhir gerak:<br>$$x_{\\text{awal}} = x_1 = -4\\text{ m}$$<br>$$x_{\\text{akhir}} = x_3 = +2\\text{ m}$$<br>2. Hitung perpindahan total:<br>$$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}} = 2 - (-4) = 2 + 4 = +6\\text{ m}$$",
      "pitfalls": "Jangan menghitung total langkah pergerakan ($12\\text{ m} + 6\\text{ m} = 18\\text{ m}$) karena itu adalah jarak tempuh, bukan perpindahan."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Perpindahan pada satu dimensi (sumbu-$x$) didefinisikan secara langsung oleh selisih koordinat posisi akhir terhadap posisi awal: $$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}$$."
  },
  {
    "id": "fis-kin-gl-jarak-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "statement": "Seorang siswa berlari di lapangan sepak bola dari titik sudut $P$, menempuh lintasan lurus ke utara sejauh $30\\text{ m}$, lalu berbelok lurus ke timur sejauh $40\\text{ m}$ hingga tiba di titik $Q$. Jarak tempuh dan besar perpindahan siswa tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$70\\text{ m}$ dan $50\\text{ m}$",
      "$50\\text{ m}$ dan $70\\text{ m}$",
      "$70\\text{ m}$ dan $10\\text{ m}$",
      "$50\\text{ m}$ dan $50\\text{ m}$",
      "$70\\text{ m}$ dan $70\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak tempuh adalah jumlahan panjang lintasan skalar. Perpindahan dua dimensi yang saling tegak lurus (utara dan timur) dihitung menggunakan teorema Pythagoras.",
      "steps": "1. Jarak skalar total:<br>$$s = 30\\text{ m} + 40\\text{ m} = 70\\text{ m}$$<br>2. Besar perpindahan (sisi miring segitiga siku-siku):<br>$$|\\Delta \\vec{r}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ m}$$",
      "pitfalls": "Perhatikan urutan yang ditanyakan pada soal: 'jarak tempuh dan besar perpindahan' (70 m dan 50 m), bukan terbalik."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Jarak tempuh adalah jumlahan panjang lintasan skalar. Perpindahan dua dimensi yang saling tegak lurus (utara dan timur) dihitung menggunakan teorema Pythagoras. **Tips:** Perhatikan urutan yang ditanyakan pada soal: 'jarak tempuh dan besar perpindahan' (70 m dan 50 m), bukan terbalik."
  },
  {
    "id": "fis-kin-gl-jarak-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "sedang",
    "statement": "Sebuah drone navigasi bergerak dalam ruang tiga dimensi dari titik pusat $(0, 0, 0)$. Mula-mula drone meluncur sejauh $6\\text{ m}$ searah sumbu-$x$ positif, lalu berbelok lurus $2\\text{ m}$ searah sumbu-$y$ positif, dan akhirnya bergerak tegak lurus ke atas sejauh $3\\text{ m}$ searah sumbu-$z$ positif. Jarak total yang dilalui dan besar vektor perpindahan drone dari titik awal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$11\\text{ m}$ dan $7\\text{ m}$",
      "$11\\text{ m}$ dan $\\sqrt{40}\\text{ m}$",
      "$7\\text{ m}$ dan $11\\text{ m}$",
      "$11\\text{ m}$ dan $9\\text{ m}$",
      "$9\\text{ m}$ dan $7\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak skalar adalah penjumlahan seluruh panjang lintasan: $s = \\Delta x + \\Delta y + \\Delta z$. Perpindahan dalam vektor ruang 3 dimensi ditentukan dengan norma Euclidean:<br>$$|\\Delta \\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$$",
      "steps": "1. Jarak skalar total:<br>$$s = 6\\text{ m} + 2\\text{ m} + 3\\text{ m} = 11\\text{ m}$$<br>2. Besar perpindahan 3D:<br>$$|\\Delta \\vec{r}| = \\sqrt{6^2 + 2^2 + 3^2} = \\sqrt{36 + 4 + 9} = \\sqrt{49} = 7\\text{ m}$$",
      "pitfalls": "Jangan hanya memproyeksikan pada dua sumbu mendatar. Sumbu-$z$ (vertikal) harus diperhitungkan dalam modulus vektor ruang."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Jarak skalar adalah penjumlahan seluruh panjang lintasan: $s = \\Delta x + \\Delta y + \\Delta z$. Perpindahan dalam vektor ruang 3 dimensi ditentukan dengan norma Euclidean: $$|\\Delta \\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$$. **Tips:** Jangan hanya memproyeksikan pada dua sumbu mendatar."
  },
  {
    "id": "fis-kin-gl-jarak-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "sedang",
    "statement": "Sebuah mobil robotik menelusuri lintasan berbentuk bujur sangkar $ABCD$ dengan panjang sisi masing-masing $20\\text{ m}$. Mobil mulai berjalan dari titik sudut $A$ melewati $B$ dan $C$ secara berurutan, lalu berhenti tepat di titik sudut $D$. Perbandingan nilai jarak total tempuh terhadap besar perpindahan mobil tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3 : 1$",
      "$4 : 1$",
      "$3 : \\sqrt{2}$",
      "$1 : 1$",
      "$60 : 20\\sqrt{2}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarak tempuh adalah akumulasi ketiga sisi persegi yang dilewati ($AB + BC + CD$). Perpindahan adalah jarak langsung garis lurus dari posisi awal ($A$) ke posisi akhir ($D$).",
      "steps": "1. Panjang sisi persegi: $s = 20\\text{ m}$.<br>2. Jarak tempuh total:<br>$$s_{\\text{total}} = AB + BC + CD = 20 + 20 + 20 = 60\\text{ m}$$<br>3. Posisi akhir mobil berada di titik $D$. Jarak langsung dari $A$ ke $D$ adalah satu sisi persegi:<br>$$|\\Delta \\vec{r}| = AD = 20\\text{ m}$$<br>4. Perbandingan jarak terhadap perpindahan:<br>$$\\frac{s_{\\text{total}}}{|\\Delta \\vec{r}|} = \\frac{60\\text{ m}}{20\\text{ m}} = \\frac{3}{1} = 3 : 1$$",
      "pitfalls": "Sebagian siswa mengira posisi akhir berada di titik $C$ sehingga menggunakan diagonal $\\sqrt{20^2 + 20^2} = 20\\sqrt{2}$, padahal mobil berhenti di titik $D$ sehingga perpindahannya tepat panjang 1 sisi ($20\\text{ m}$)."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Jarak tempuh adalah akumulasi ketiga sisi persegi yang dilewati ($AB + BC + CD$). Perpindahan adalah jarak langsung garis lurus dari posisi awal ($A$) ke posisi akhir ($D$)."
  },
  {
    "id": "fis-kin-gl-jarak-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak lurus sepanjang sumbu-$x$ dengan persamaan posisi terhadap waktu dinyatakan oleh $x(t) = 2t^2 - 8t + 5$, di mana $x$ dalam meter dan $t$ dalam sekon. Jarak total yang ditempuh partikel tersebut dari selang waktu $t = 0\\text{ s}$ sampai $t = 3\\text{ s}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m}$",
      "$6\\text{ m}$",
      "$8\\text{ m}$",
      "$14\\text{ m}$",
      "$12\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk mencari jarak total dari fungsi posisi yang mengalami pembalikan arah gerak, cari terlebih dahulu waktu saat partikel diam sesaat ($v(t) = \\frac{dx}{dt} = 0$), lalu jumlahkan harga mutlak perpindahan tiap segmen perjalanan.",
      "steps": "1. Kecepatan sesaat partikel:<br>$$v(t) = \\frac{dx}{dt} = 4t - 8$$<br>Partikel berbalik arah saat $v(t) = 0 \\implies 4t - 8 = 0 \\implies t = 2\\text{ s}$.<br>Karena $t = 2\\text{ s}$ berada dalam selang $[0, 3]$, terjadi pembalikan arah gerak.<br>2. Hitung posisi pada titik-titik krusial:<br>$$x(0) = 2(0)^2 - 8(0) + 5 = 5\\text{ m}$$<br>$$x(2) = 2(2)^2 - 8(2) + 5 = 8 - 16 + 5 = -3\\text{ m}$$<br>$$x(3) = 2(3)^2 - 8(3) + 5 = 18 - 24 + 5 = -1\\text{ m}$$<br>3. Jarak total adalah jumlahan panjang pergerakan:<br>$$s = |x(2) - x(0)| + |x(3) - x(2)| = |-3 - 5| + |-1 - (-3)| = 8\\text{ m} + 2\\text{ m} = 10\\text{ m}$$",
      "pitfalls": "Jebakan paling sering adalah menghitung $|x(3) - x(0)| = |-1 - 5| = 6\\text{ m}$. Nilai $6\\text{ m}$ adalah besar perpindahan, bukan jarak total yang ditempuh."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Untuk mencari jarak total dari fungsi posisi yang mengalami pembalikan arah gerak, cari terlebih dahulu waktu saat partikel diam sesaat ($v(t) = \\frac{dx}{dt} = 0$), lalu jumlahkan harga mutlak perpindahan tiap segmen perjalanan."
  },
  {
    "id": "fis-kin-gl-jarak-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "sedang",
    "statement": "Sebuah kapal pesiar berlayar dari pelabuhan ke arah timur sejauh $80\\text{ km}$, kemudian mengubah haluan dan berlayar sejauh $60\\text{ km}$ dengan arah $60^\\circ$ terhadap arah timur. Besar perpindahan resultan kapal dari pelabuhan awal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\sqrt{37}\\text{ km}$",
      "$140\\text{ km}$",
      "$100\\text{ km}$",
      "$20\\sqrt{13}\\text{ km}$",
      "$120\\text{ km}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Resultan perpindahan dua vektor dengan sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor:<br>$$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$$",
      "steps": "1. Identifikasi parameter vektor:<br>$$A = 80\\text{ km},\\quad B = 60\\text{ km},\\quad \\theta = 60^\\circ,\\quad \\cos 60^\\circ = 0{,}5$$<br>2. Hitung resultan perpindahan:<br>$$R = \\sqrt{80^2 + 60^2 + 2(80)(60)\\cos 60^\\circ}$$<br>$$R = \\sqrt{6400 + 3600 + 2(4800)(0{,}5)} = \\sqrt{10000 + 4800} = \\sqrt{14800}$$<br>$$R = \\sqrt{400 \\times 37} = 20\\sqrt{37}\\text{ km}$$",
      "pitfalls": "Jangan mengabaikan sudut $60^\\circ$ dan langsung menjumlahkan secara skalar ($140\\text{ km}$) atau menganggap tegak lurus ($100\\text{ km}$)."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Resultan perpindahan dua vektor dengan sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor: $$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$$."
  },
  {
    "id": "fis-kin-gl-jarak-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "sedang",
    "statement": "Jarum menit sebuah jam dinding memiliki panjang $14\\text{ cm}$. Ketika jarum bergerak berputar dari posisi menunjuk angka 12 ke angka 4 (selama 20 menit), besar perpindahan ujung jarum menit tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14\\sqrt{3}\\text{ cm}$",
      "$28\\text{ cm}$",
      "$14\\text{ cm}$",
      "$\\frac{44}{3}\\text{ cm}$",
      "$14\\sqrt{2}\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jarum jam yang berputar membentuk segitiga sama kaki dengan panjang kedua sisi sama dengan panjang jarum ($r$) dan sudut pusat $\\alpha$. Besar perpindahan ujung jarum adalah panjang tali busur yang menghubungkan posisi awal dan akhir:<br>$$|\\Delta \\vec{r}| = 2r\\sin\\left(\\frac{\\alpha}{2}\\right)$$",
      "steps": "1. Hitung sudut pusat pergeseran dari angka 12 ke angka 4:<br>Satu lingkaran penuh ($360^\\circ$) dibagi 12 angka = $30^\\circ$ per angka.<br>$$\\alpha = 4 \\times 30^\\circ = 120^\\circ$$<br>2. Hitung panjang tali busur (perpindahan):<br>$$|\\Delta \\vec{r}| = 2r\\sin\\left(\\frac{120^\\circ}{2}\\right) = 2(14)\\sin(60^\\circ) = 28 \\times \\frac{1}{2}\\sqrt{3} = 14\\sqrt{3}\\text{ cm}$$",
      "pitfalls": "Nilai $\\frac{44}{3}\\text{ cm}$ adalah panjang lintasan busur lingkaran (jarak tempuh), bukan perpindahan."
    },
    "subTopicSlug": "jarak-perpindahan",
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Jarum jam yang berputar membentuk segitiga sama kaki dengan panjang kedua sisi sama dengan panjang jarum ($r$) dan sudut pusat $\\alpha$. Besar perpindahan ujung jarum adalah panjang tali busur yang menghubungkan posisi awal dan akhir: $$|\\Delta \\vec{r}| = 2r\\sin\\left(\\frac{\\alpha}{2}\\right)$$. **Tips:** Nilai $\\frac{44}{3}\\text{ cm}$ adalah panjang lintasan busur lingkaran (jarak tempuh), bukan perpindahan."
  },
  {
    "id": "sup-fis-kin-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Jarak dan Perpindahan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seorang pelari bergerak lurus ke arah timur sejauh $80\\text{ meter}$, kemudian berbelok tepat ke arah utara dan berlari sejauh $60\\text{ meter}$. Nilai jarak tempuh total dan besar perpindahan yang dialami pelari tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$140\\text{ meter}$ dan $100\\text{ meter}$",
      "$100\\text{ meter}$ dan $140\\text{ meter}$",
      "$140\\text{ meter}$ dan $20\\text{ meter}$",
      "$100\\text{ meter}$ dan $100\\text{ meter}$",
      "$140\\text{ meter}$ dan $140\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Jarak (Skalar) vs Perpindahan (Vektor):</strong><br>• Jarak ($s$): total panjang lintasan yang ditempuh tanpa memperhatikan arah.<br>• Perpindahan ($\\Delta \\vec{r}$): perubahan posisi terpendek dari titik awal ke titik akhir (vektor).</div>",
      "steps": "<ol><li>Jarak total: $s = 80 + 60 = 140\\text{ meter}$.</li><li>Perpindahan (resultan vektor siku-siku): $|\\Delta \\vec{r}| = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10000} = 100\\text{ meter}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menyamakan nilai perpindahan dengan jarak total lintasan gerak.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "jarak-perpindahan",
    "hint": "Jarak (Skalar) vs Perpindahan (Vektor): • Jarak ($s$): total panjang lintasan yang ditempuh tanpa memperhatikan arah. • Perpindahan ($\\Delta \\vec{r}$): perubahan posisi terpendek dari titik awal ke titik akhir (vektor). **Tips:** Menyamakan nilai perpindahan dengan jarak total lintasan gerak."
  },
  {
    "id": "sedang-fis-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-jarak",
    "category": "Gerak Parabola Dua Dimensi",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\sin\\theta = 0{,}6$ (dan $\\cos\\theta = 0{,}8$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu total peluru di udara hingga mendarat kembali di tanah serta jarak mendatar terjauh ($X_{\\max}$) yang dicapai peluru berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ s}$ dan $240\\text{ m}$",
      "$3\\text{ s}$ dan $120\\text{ m}$",
      "$6\\text{ s}$ dan $180\\text{ m}$",
      "$8\\text{ s}$ dan $320\\text{ m}$",
      "$5\\text{ s}$ dan $200\\text{ m}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Analisis Komponen Gerak Parabola:</strong><br>\n          • Sumbu horizontal (GLB): $v_x = v_0\\cos\\theta$ (konstan), $X = v_x \\cdot t$<br>\n          • Sumbu vertikal (GLBB gravitasi): $v_{0y} = v_0\\sin\\theta$, $v_y = v_{0y} - gt$<br>\n          • Waktu mencapai titik puncak: $t_p = \\frac{v_0\\sin\\theta}{g}$<br>\n          • Waktu total di udara: $t_{\\text{udara}} = 2 t_p = \\frac{2v_0\\sin\\theta}{g}$<br>\n          • Jarak terjauh: $X_{\\max} = v_x \\cdot t_{\\text{udara}}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li><strong>Hitung Komponen Kecepatan Awal:</strong><br>\n            $$v_x = 50 \\times 0{,}8 = 40\\text{ m/s}$$\n            $$v_{0y} = 50 \\times 0{,}6 = 30\\text{ m/s}$$\n          </li>\n          <li><strong>Hitung Waktu Total di Udara $(t_{\\text{udara}})$:</strong><br>\n            $$t_{\\text{udara}} = \\frac{2 v_{0y}}{g} = \\frac{2(30)}{10} = 6\\text{ detik}$$\n          </li>\n          <li><strong>Hitung Jarak Jangkauan Maksimum $(X_{\\max})$:</strong><br>\n            $$X_{\\max} = v_x \\times t_{\\text{udara}} = 40\\text{ m/s} \\times 6\\text{ s} = 240\\text{ meter}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          <strong>⚠️ Jebakan Waktu:</strong><br>\n          Waktu $t = 3\\text{ detik}$ hanyalah waktu saat peluru berada di titik puncak (tertinggi). Untuk jarak mendatar total di tanah, harus menggunakan waktu tempuh total bolak-balik ($2 \\times 3 = 6\\text{ s}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Jarak dan Perpindahan",
    "subTopic": "Jarak dan Perpindahan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "jarak-perpindahan",
    "hint": "Analisis Komponen Gerak Parabola: • Sumbu horizontal (GLB): $v_x = v_0\\cos\\theta$ (konstan), $X = v_x \\cdot t$ • Sumbu vertikal (GLBB gravitasi): $v_{0y} = v_0\\sin\\theta$, $v_y = v_{0y} - gt$ • Waktu mencapai titik puncak: $t_p = \\frac{v_0\\sin\\theta}{g}$ • Waktu total di udara: $t_{\\text{udara}} = 2 t_p = \\frac{2v_0\\sin\\theta}{g}$ • Jarak terjauh: $X_{\\max} = v_x \\cdot t_{\\text{udara}}$."
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
