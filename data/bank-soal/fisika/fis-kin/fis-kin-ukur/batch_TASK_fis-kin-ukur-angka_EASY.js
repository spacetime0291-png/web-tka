/**
 * Batch Task: TASK_fis-kin-ukur-angka_EASY
 * SubTopic: Angka Penting (fis-kin-ukur-angka)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    "id": "fis-kin-ukur-angka-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "mudah",
    "statement": "Dalam suatu pengukuran laboratorium, diperoleh dua nilai besaran fisika: massa sebuah batu mineral sebesar $0{,}04050\\text{ kg}$ dan panjang seutas tali sebesar $200{,}0\\text{ cm}$. Berdasarkan kaidah aturan angka penting, jumlah angka penting yang dimiliki oleh kedua hasil pengukuran tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "ATURAN PENENTUAN JUMLAH ANGKA PENTING",
    "options": [
      "4 angka penting dan 4 angka penting",
      "5 angka penting dan 1 angka penting",
      "3 angka penting dan 4 angka penting",
      "4 angka penting dan 1 angka penting",
      "5 angka penting dan 4 angka penting"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kaidah angka penting: 1) Angka bukan nol adalah angka penting. 2) Angka nol di sebelah kiri angka bukan nol pertama bukan angka penting. 3) Angka nol di antara angka bukan nol adalah angka penting. 4) Angka nol di sebelah kanan tanda desimal yang mengikuti angka bukan nol adalah angka penting.",
      "steps": "1) Menentukan angka penting pada $0{,}04050\\text{ kg}$:<br>Angka nol sebelum angka 4 hanya penunjuk koma desimal (bukan AP). Angka 4, 0 (diapit), 5, dan 0 (desimal ujung) adalah angka penting. Maka terdapat 4 angka penting (4, 0, 5, 0).<br>2) Menentukan angka penting pada $200{,}0\\text{ cm}$:<br>Karena memuat tanda desimal eksplisit, semua angka nol setelah angka 2 termasuk angka penting. Maka terdapat 4 angka penting (2, 0, 0, 0).<br>3) Kedua besaran memiliki masing-masing 4 angka penting.",
      "pitfalls": "Siswa sering menganggap semua angka nol pada $0{,}04050$ sebagai angka penting (mengira 5 atau 6 AP), atau menganggap $200{,}0$ hanya memiliki 1 AP karena mengabaikan tanda koma desimal."
    }
  },
  {
    "id": "fis-kin-ukur-angka-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "mudah",
    "statement": "Seorang pekerja mengukur lantai sebuah kamar berbentuk persegi panjang. Hasil pengukuran panjang adalah $4{,}25\\text{ m}$ dan lebarnya adalah $2{,}4\\text{ m}$. Luas lantai kamar tersebut berdasarkan aturan angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERKALIAN BESARAN MENURUT KAIDAH ANGKA PENTING",
    "options": [
      "$10\\text{ m}^2$",
      "$10{,}2\\text{ m}^2$",
      "$10{,}20\\text{ m}^2$",
      "$10{,}200\\text{ m}^2$",
      "$10{,}0\\text{ m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan perkalian dan pembagian angka penting: hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak angka penting yang paling sedikit dari komponen besaran yang dikalikan.",
      "steps": "1) Menghitung jumlah angka penting komponen:<br>• Panjang = $4{,}25\\text{ m}$ (memiliki 3 angka penting)<br>• Lebar = $2{,}4\\text{ m}$ (memiliki 2 angka penting)<br>2) Jumlah angka penting paling sedikit adalah 2 angka penting.<br>3) Melakukan operasi perkalian matematis:<br>$$\\text{Luas} = 4{,}25\\text{ m} \\times 2{,}4\\text{ m} = 10{,}2\\text{ m}^2$$<br>4) Membulatkan hasil ke 2 angka penting:<br>$10{,}2$ memiliki 3 angka penting, sehingga dibulatkan menjadi $10\\text{ m}^2$ (atau $1{,}0 \\times 10^1\\text{ m}^2$ dengan 2 angka penting).",
      "pitfalls": "Sebagian besar siswa langsung memilih $10{,}2\\text{ m}^2$ (opsi B) karena merupakan hasil kali matematis biasa, mengabaikan bahwa faktor lebar ($2{,}4\\text{ m}$) hanya memiliki 2 angka penting."
    }
  },
  {
    "id": "fis-kin-ukur-angka-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "mudah",
    "statement": "Tiga buah logam ditimbang secara terpisah dengan tiga alat ukur massa berbeda dan menghasilkan data: $m_1 = 125{,}4\\text{ g}$, $m_2 = 12{,}35\\text{ g}$, dan $m_3 = 0{,}625\\text{ g}$. Jika ketiga logam digabungkan bersama, massa total ketiga logam tersebut menurut kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENJUMLAHAN ANGKA PENTING DAN ATURAN DESIMAL TAKSIRAN",
    "options": [
      "$138{,}4\\text{ g}$",
      "$138{,}38\\text{ g}$",
      "$138{,}375\\text{ g}$",
      "$138\\text{ g}$",
      "$138{,}37\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan penjumlahan dan pengurangan angka penting: hasil operasi penjumlahan atau pengurangan hanya boleh memiliki satu angka taksiran (posisi desimal paling tidak teliti di antara bilangan yang dijumlahkan).",
      "steps": "1) Meninjau posisi desimal (angka taksiran):<br>• $125{,}4\\text{ g}$ memiliki 1 desimal (taksiran pada persepuluhan)<br>• $12{,}35\\text{ g}$ memiliki 2 desimal (taksiran pada perseratusan)<br>• $0{,}625\\text{ g}$ memiliki 3 desimal (taksiran pada perseribuan)<br>2) Posisi taksiran paling tidak teliti (paling kasar) adalah 1 tempat desimal.<br>3) Menjumlahkan secara matematis:<br>$$m_{\\text{total}} = 125{,}4 + 12{,}35 + 0{,}625 = 138{,}375\\text{ g}$$<br>4) Membulatkan hasil ke 1 tempat desimal:<br>Karena angka setelah 3 adalah 7 ($> 5$), dibulatkan ke atas menjadi $138{,}4\\text{ g}$.",
      "pitfalls": "Memilih hasil penjumlahan lengkap kalkulator $138{,}375\\text{ g}$ (opsi C) atau membulatkan ke 2 desimal $138{,}38\\text{ g}$ (opsi B) tanpa memperhatikan bahwa $125{,}4$ membatasi presisi hanya sampai 1 tempat desimal."
    }
  },
  {
    "id": "fis-kin-ukur-angka-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "mudah",
    "statement": "Ketebalan selembar kertas kalkir diukur dengan mikrometer sekrup dan diperoleh nilai $0{,}085\\text{ mm}$. Jika seorang pustakawan menumpuk tepat $500$ lembar kertas kalkir sejenis, tebal total tumpukan kertas tersebut berdasarkan aturan angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERKALIAN BILANGAN EKSAK DENGAN HASIL PENGUKURAN",
    "options": [
      "$43\\text{ mm}$",
      "$42{,}5\\text{ mm}$",
      "$42{,}50\\text{ mm}$",
      "$40\\text{ mm}$",
      "$42\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian antara bilangan hasil pengukuran dengan bilangan eksak (bilangan bulat cacah hasil membilang) menghasilkan jumlah angka penting yang sama dengan jumlah angka penting pada bilangan hasil pengukuran.",
      "steps": "1) Menentukan sifat bilangan:<br>• $0{,}085\\text{ mm}$ adalah bilangan hasil pengukuran yang memiliki 2 angka penting (angka 8 dan 5).<br>• $500$ lembar adalah bilangan eksak (bukan hasil ukur, melainkan hasil membilang pasti).<br>2) Hasil kali matematis:<br>$$\\text{Tebal total} = 500 \\times 0{,}085\\text{ mm} = 42{,}5\\text{ mm}$$<br>3) Membulatkan hasil ke 2 angka penting:<br>$42{,}5\\text{ mm}$ dibulatkan ke 2 angka penting menjadi $43\\text{ mm}$ (atau $4{,}3 \\times 10^1\\text{ mm}$).",
      "pitfalls": "Siswa sering menganggap 500 memiliki 1 angka penting sehingga membulatkan ke $40\\text{ mm}$ (opsi D), atau membiarkan hasil desimal $42{,}5\\text{ mm}$ (3 AP) padahal tebal satu lembar hanya memiliki 2 angka penting."
    }
  },
  {
    "id": "fis-kin-ukur-angka-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "mudah",
    "statement": "Sebuah balok homogen memiliki massa $m = 145{,}5\\text{ g}$ dan volume $V = 15{,}0\\text{ cm}^3$. Berdasarkan kaidah angka penting, massa jenis balok tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBAGIAN ANGKA PENTING PADA PERHITUNGAN MASSA JENIS",
    "options": [
      "$9{,}70\\text{ g/cm}^3$",
      "$9{,}7\\text{ g/cm}^3$",
      "$9{,}700\\text{ g/cm}^3$",
      "$10\\text{ g/cm}^3$",
      "$9{,}66\\text{ g/cm}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi pembagian angka penting $\\rho = \\frac{m}{V}$ mengikuti jumlah angka penting paling sedikit di antara besaran pembagi dan yang dibagi.",
      "steps": "1) Menentukan jumlah angka penting:<br>• Massa $m = 145{,}5\\text{ g}$ (memiliki 4 angka penting)<br>• Volume $V = 15{,}0\\text{ cm}^3$ (memiliki 3 angka penting)<br>2) Jumlah angka penting paling sedikit adalah 3 angka penting.<br>3) Menghitung nilai matematis:<br>$$\\rho = \\frac{145{,}5\\text{ g}}{15{,}0\\text{ cm}^3} = 9{,}7\\text{ g/cm}^3$$<br>4) Menuliskan hasil dalam 3 angka penting:<br>Untuk memenuhi kaidah 3 angka penting, ditambahkan angka nol di belakang desimal sehingga menjadi $9{,}70\\text{ g/cm}^3$.",
      "pitfalls": "Banyak siswa memilih $9{,}7\\text{ g/cm}^3$ (opsi B) karena hasil kalkulator hanya menampilkan satu desimal, melupakan bahwa aturan angka penting mewajibkan tepat 3 angka penting ($9{,}70$)."
    }
  }
];
