/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Panjang Busur, Juring, dan Tembereng (mat-geo-lingkaran-busur)
 * Slug: panjang-busur-juring-tembereng
 * Indikator: Panjang busur lingkaran (s = r * theta), luas juring, dan luas tembereng lingkaran.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-busur";
  const subTopicSlug = "panjang-busur-juring-tembereng";
  const questions = [
  {
    "id": "mat-geo-lingkaran-busur-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Panjang Busur Lingkaran",
    "difficulty": "mudah",
    "statement": "Sebuah lingkaran memiliki panjang jari-jari $r = 21\\text{ cm}$. Panjang busur lingkaran yang menghadap sudut pusat $60^\\circ$ adalah .... (gunakan $\\pi = \\frac{22}{7}$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$22\\text{ cm}$",
      "$44\\text{ cm}$",
      "$11\\text{ cm}$",
      "$33\\text{ cm}$",
      "$66\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Panjang busur lingkaran dengan sudut pusat $\\theta$ dirumuskan sebagai fraksi sudut pusat terhadap putaran penuh dikalikan keliling lingkaran: $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$.",
      "steps": "1. Tentukan perbandingan sudut terhadap putaran penuh:\n$$\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$$\n2. Hitung keliling lingkaran utuh:\n$$K = 2\\pi r = 2 \\times \\frac{22}{7} \\times 21 = 2 \\times 22 \\times 3 = 132\\text{ cm}$$\n3. Hitung panjang busur lingkaran:\n$$s = \\frac{1}{6} \\times 132 = 22\\text{ cm}$$\n4. Jadi, panjang busur lingkaran tersebut adalah $22\\text{ cm}$ (pilihan A).",
      "pitfalls": "Menggunakan rumus luas juring alih-alih keliling lingkaran, atau lupa mengalikan dengan faktor 2 pada keliling lingkaran ($2\\pi r$)."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-busur-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Hubungan Sudut Pusat dan Sudut Keliling",
    "difficulty": "mudah",
    "statement": "Pada sebuah lingkaran, sudut pusat $\\angle AOB$ dan sudut keliling $\\angle ACB$ menghadap busur yang sama, yaitu busur $AB$. Jika besar sudut pusat $\\angle AOB = 70^\\circ$, maka besar sudut keliling $\\angle ACB$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$35^\\circ$",
      "$70^\\circ$",
      "$140^\\circ$",
      "$20^\\circ$",
      "$55^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema sudut keliling menyatakan bahwa besar sudut keliling yang menghadap busur yang sama dengan sudut pusat adalah tepat setengah dari besar sudut pusat tersebut: $\\text{Sudut Keliling} = \\frac{1}{2} \\times \\text{Sudut Pusat}$.",
      "steps": "1. Identifikasi besar sudut pusat: $\\angle AOB = 70^\\circ$.\n2. Karena $\\angle ACB$ adalah sudut keliling yang menghadap busur yang sama, berlaku:\n$$\\angle ACB = \\frac{1}{2} \\times \\angle AOB$$\n3. Hitung hasilnya:\n$$\\angle ACB = \\frac{1}{2} \\times 70^\\circ = 35^\\circ$$\n4. Jadi, besar sudut keliling $\\angle ACB$ adalah $35^\\circ$ (pilihan A).",
      "pitfalls": "Terkecoh mengalikan sudut pusat dengan 2 sehingga menghasilkan $140^\\circ$, yang merupakan kebalikan rumus."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-busur-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Sudut Keliling Menghadap Diameter",
    "difficulty": "mudah",
    "statement": "Ruas garis $AB$ merupakan diameter sebuah lingkaran dengan titik pusat $O$. Jika titik $C$ terletak pada keliling lingkaran tersebut (dengan $C \\ne A$ dan $C \\ne B$), maka besar sudut $\\angle ACB$ selalu sama dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$90^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$180^\\circ$",
      "Tergantung panjang diameter lingkaran"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Teorema Thales, setiap sudut keliling lingkaran yang menghadap garis tengah (diameter) lingkaran selalu bernilai siku-siku ($90^\\circ$), karena sudut pusat garis lurus adalah $180^\\circ$.",
      "steps": "1. Sudut pusat yang dibentuk oleh diameter $AB$ adalah garis lurus dengan sudut $180^\\circ$.\n2. Sudut $\\angle ACB$ merupakan sudut keliling yang menghadap busur setengah lingkaran tersebut.\n3. Berdasarkan rumus sudut keliling:\n$$\\angle ACB = \\frac{1}{2} \\times 180^\\circ = 90^\\circ$$\n4. Sifat ini selalu berlaku universal untuk setiap posisi titik $C$ pada busur lingkaran.\n5. Jadi, besar sudut $\\angle ACB$ adalah $90^\\circ$ (pilihan A).",
      "pitfalls": "Mengira besar sudutnya bervariasi bergantung pada letak titik $C$ atau panjang diameter lingkaran."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-busur-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Sudut-Sudut Keliling Menghadap Busur yang Sama",
    "difficulty": "mudah",
    "statement": "Dua buah sudut keliling $\\angle APB$ dan $\\angle AQB$ menghadap busur yang sama pada sebuah lingkaran. Jika besar $\\angle APB = (3x - 10)^\\circ$ dan besar $\\angle AQB = (x + 30)^\\circ$, maka nilai dari $x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "20",
      "15",
      "25",
      "30",
      "10"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Semua sudut keliling yang menghadap busur yang sama pada sebuah lingkaran selalu memiliki besar sudut yang sama persis.",
      "steps": "1. Samakan persamaan kedua sudut keliling:\n$$3x - 10 = x + 30$$\n2. Pindahkan suku bervariabel $x$ ke ruas kiri dan konstanta ke ruas kanan:\n$$3x - x = 30 + 10$$\n$$2x = 40$$\n3. Bagi kedua ruas dengan 2:\n$$x = 20$$\n4. Jadi, nilai $x$ adalah 20 (pilihan A).",
      "pitfalls": "Kekeliruan tanda aljabar saat memindahkan suku $-10$ menjadi $30 - 10 = 20$."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-busur-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Perbandingan Panjang Dua Busur",
    "difficulty": "mudah",
    "statement": "Pada lingkaran dengan titik pusat $O$, sudut pusat $\\angle AOB = 45^\\circ$ memiliki panjang busur $AB = 12\\text{ cm}$. Panjang busur $CD$ yang menghadap sudut pusat $\\angle COD = 105^\\circ$ pada lingkaran yang sama adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$28\\text{ cm}$",
      "$24\\text{ cm}$",
      "$32\\text{ cm}$",
      "$36\\text{ cm}$",
      "$20\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada lingkaran yang sama, panjang busur lingkaran berbanding lurus secara linier dengan besar sudut pusat yang menghadapinya: $\\frac{\\text{Busur } CD}{\\text{Busur } AB} = \\frac{\\angle COD}{\\angle AOB}$.",
      "steps": "1. Susun perbandingan panjang busur terhadap sudut pusat:\n$$\\frac{\\text{Busur } CD}{12} = \\frac{105^\\circ}{45^\\circ}$$\n2. Sederhanakan perbandingan pecahan sudut dengan membagi pembilang dan penyebut dengan 15:\n$$\\frac{105}{45} = \\frac{7}{3}$$\n3. Hitung panjang busur $CD$:\n$$\\text{Busur } CD = 12 \\times \\frac{7}{3} = 4 \\times 7 = 28\\text{ cm}$$\n4. Jadi, panjang busur $CD$ adalah $28\\text{ cm}$ (pilihan A).",
      "pitfalls": "Kesalahan saat menyederhanakan pecahan $\\frac{105}{45}$ sehingga menghasilkan angka desimal yang keliru."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-busur-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Sudut-Sudut Berhadapan Segi Empat Tali Busur",
    "difficulty": "sedang",
    "statement": "Pada suatu segi empat tali busur $ABCD$ yang seluruh titik sudutnya terletak pada keliling lingkaran, besar sudut $\\angle A = (2x + 10)^\\circ$ dan besar sudut $\\angle C = (3x + 20)^\\circ$. Besar sudut $\\angle C$ sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$110^\\circ$",
      "$70^\\circ$",
      "$100^\\circ$",
      "$120^\\circ$",
      "$80^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat utama segi empat tali busur menyatakan bahwa jumlah dua sudut yang saling berhadapan selalu sama dengan sudut lurus ($180^\\circ$), yaitu $\\angle A + \\angle C = 180^\\circ$.",
      "steps": "1. Terapkan sifat sudut berhadapan segi empat tali busur:\n$$\\angle A + \\angle C = 180^\\circ$$\n$$(2x + 10) + (3x + 20) = 180$$\n2. Selesaikan persamaan linier aljabar:\n$$5x + 30 = 180 \\implies 5x = 150 \\implies x = 30$$\n3. Hitung besar sudut $\\angle C$ dengan menyubstitusikan $x = 30$:\n$$\\angle C = 3(30) + 20 = 90 + 20 = 110^\\circ$$\n4. (Sebagai verifikasi: $\\angle A = 2(30) + 10 = 70^\\circ$, dan $70^\\circ + 110^\\circ = 180^\\circ$).\n5. Jadi, besar sudut $\\angle C$ adalah $110^\\circ$ (pilihan A).",
      "pitfalls": "Terkecoh menyamakan kedua sudut (mengira $\\angle A = \\angle C$) alih-alih menjumlahkannya sama dengan $180^\\circ$, atau salah memilih nilai $\\angle A = 70^\\circ$."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-busur-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Sudut Dua Tali Busur Berpotongan di Dalam",
    "difficulty": "sedang",
    "statement": "Dua buah tali busur $AC$ dan $BD$ berpotongan di dalam lingkaran pada titik $E$. Jika besar sudut pusat yang menghadap busur $AB$ adalah $\\angle AOB = 80^\\circ$ dan sudut pusat yang menghadap busur $CD$ adalah $\\angle COD = 40^\\circ$, maka besar sudut $\\angle AEB$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60^\\circ$",
      "$40^\\circ$",
      "$120^\\circ$",
      "$30^\\circ$",
      "$50^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Besar sudut antara dua tali busur yang berpotongan di dalam lingkaran sama dengan setengah dari jumlah sudut-sudut pusat busur yang dihadapi oleh sudut tersebut dan sudut bertolak belakangnya: $\\angle AEB = \\frac{1}{2}(\\angle AOB + \\angle COD)$.",
      "steps": "1. Identifikasi besar sudut pusat kedua busur yang diapit: $\\angle AOB = 80^\\circ$ dan $\\angle COD = 40^\\circ$.\n2. Masukkan ke rumus sudut perpotongan tali busur di dalam lingkaran:\n$$\\angle AEB = \\frac{1}{2}(\\angle AOB + \\angle COD)$$\n3. Hitung hasil penjumlahan dan pembagiannya:\n$$\\angle AEB = \\frac{1}{2}(80^\\circ + 40^\\circ) = \\frac{1}{2}(120^\\circ) = 60^\\circ$$\n4. Jadi, besar sudut $\\angle AEB$ adalah $60^\\circ$ (pilihan A).",
      "pitfalls": "Mengurangkan kedua sudut pusat (yang merupakan rumus untuk perpotongan di luar lingkaran) alih-alih menjumlahkannya."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-busur-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Sudut Dua Tali Busur Berpotongan di Luar",
    "difficulty": "sedang",
    "statement": "Dua garis perpanjangan tali busur $AB$ dan $CD$ berpotongan di titik $P$ di luar lingkaran. Jika busur besar $AC$ menghadap sudut pusat $110^\\circ$ dan busur kecil $BD$ menghadap sudut pusat $30^\\circ$, maka besar sudut luar $\\angle APC$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40^\\circ$",
      "$70^\\circ$",
      "$80^\\circ$",
      "$35^\\circ$",
      "$55^\\circ$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Besar sudut yang dibentuk oleh perpotongan dua tali busur di luar lingkaran sama dengan setengah dari selisih besar sudut pusat busur besar dan busur kecil yang diapitnya: $\\angle APC = \\frac{1}{2}(\\text{sudut busur besar} - \\text{sudut busur kecil})$.",
      "steps": "1. Identifikasi besar kedua sudut pusat busur yang diapit: busur besar $= 110^\\circ$ dan busur kecil $= 30^\\circ$.\n2. Masukkan ke rumus sudut perpotongan di luar lingkaran:\n$$\\angle APC = \\frac{1}{2}(110^\\circ - 30^\\circ)$$\n3. Hitung selisih sudut:\n$$\\angle APC = \\frac{1}{2}(80^\\circ) = 40^\\circ$$\n4. Jadi, besar sudut $\\angle APC$ adalah $40^\\circ$ (pilihan A).",
      "pitfalls": "Menjumlahkan kedua sudut alih-alih mengurangkannya sehingga menghasilkan $\\frac{1}{2}(140^\\circ) = 70^\\circ$."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-busur-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Teorema Perpotongan Dua Tali Busur",
    "difficulty": "sedang",
    "statement": "Dua tali busur $AB$ dan $CD$ pada sebuah lingkaran saling berpotongan di titik $P$. Jika panjang segmen garis $AP = 4\\text{ cm}$, $PB = 6\\text{ cm}$, dan $CP = 3\\text{ cm}$, maka panjang segmen garis $PD$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ cm}$",
      "$6\\text{ cm}$",
      "$7\\text{ cm}$",
      "$9\\text{ cm}$",
      "$10\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema perkalian segmen tali busur (Chord Theorem) menyatakan bahwa jika dua tali busur $AB$ dan $CD$ berpotongan di titik $P$, maka hasil kali panjang segmen pada satu tali busur sama dengan hasil kali panjang segmen pada tali busur lainnya: $AP \\times PB = CP \\times PD$.",
      "steps": "1. Tuliskan rumus perpotongan tali busur:\n$$AP \\times PB = CP \\times PD$$\n2. Masukkan panjang segmen yang diketahui:\n$$4 \\times 6 = 3 \\times PD$$\n$$24 = 3 \\times PD$$\n3. Selesaikan untuk mencari panjang $PD$:\n$$PD = \\frac{24}{3} = 8\\text{ cm}$$\n4. Jadi, panjang ruas garis $PD$ adalah $8\\text{ cm}$ (pilihan A).",
      "pitfalls": "Keliru menyamakan penjumlahan segmen $AP + PB = CP + PD$ alih-alih perkalian segmen garis."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-busur-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-busur",
    "category": "Teorema Garis Singgung dan Garis Potong",
    "difficulty": "sedang",
    "statement": "Dari sebuah titik $P$ di luar lingkaran, ditarik garis singgung $PT$ yang menyentuh lingkaran di titik $T$, dan garis potong $PAB$ yang memotong lingkaran di titik $A$ dan $B$. Jika panjang $PA = 4\\text{ cm}$ dan panjang $AB = 5\\text{ cm}$, maka panjang ruas garis singgung $PT$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ cm}$",
      "$4{,}5\\text{ cm}$",
      "$\\sqrt{20}\\text{ cm}$",
      "$8\\text{ cm}$",
      "$9\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema garis singgung-potong (Tangent-Secant Theorem) menyatakan bahwa kuadrat panjang segmen garis singgung sama dengan hasil kali panjang segmen garis potong luar dengan panjang keseluruhan garis potong: $PT^2 = PA \\times PB$.",
      "steps": "1. Hitung panjang segmen garis potong total $PB$:\n$$PB = PA + AB = 4 + 5 = 9\\text{ cm}$$\n2. Masukkan ke rumus teorema garis singgung-potong:\n$$PT^2 = PA \\times PB$$\n$$PT^2 = 4 \\times 9 = 36$$\n3. Tarik akar kuadrat:\n$$PT = \\sqrt{36} = 6\\text{ cm}$$\n4. Jadi, panjang ruas garis singgung $PT$ adalah $6\\text{ cm}$ (pilihan A).",
      "pitfalls": "Langsung mengalikan $PA \\times AB = 4 \\times 5 = 20$ tanpa menjumlahkan segmen total $PB = PA + AB$."
    },
    "subTopicSlug": "panjang-busur-juring-tembereng",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Panjang Busur, Juring, dan Tembereng",
    "subTopic": "Panjang Busur, Juring, dan Tembereng",
    "chapterTitle": "Geometri dan Pengukuran",
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
