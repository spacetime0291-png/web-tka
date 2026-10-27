/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Pengukuran (fis-kin-ukur)
 * Sub-Bab: Angka Penting (fis-kin-ukur-angka)
 * Slug: angka-penting
 * Indikator: Aturan angka penting, operasi hitung penjumlahan, pengurangan, perkalian, & pembagian.
 * 
 * Total Butir Soal: 12 (Mudah: 5, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-ukur-angka";
  const subTopicSlug = "angka-penting";
  const questions = [
  {
    "id": "sedang-fis-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Perhitungan Luas dengan Angka Penting",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang siswa mengukur dimensi panjang dan lebar selembar pelat logam tipis. Dari pengukuran diperoleh panjang pelat $12{,}45\\text{ cm}$ dan lebar pelat $4{,}2\\text{ cm}$. Berdasarkan kaidah baku angka penting hasil perkalian, luas permukaan pelat logam tersebut harus dilaporkan sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$52\\text{ cm}^2$",
      "$52{,}3\\text{ cm}^2$",
      "$52{,}29\\text{ cm}^2$",
      "$52{,}30\\text{ cm}^2$",
      "$50\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Aturan Angka Penting pada Operasi Perkalian/Pembagian:</strong><br>\n          Hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak faktor pengali yang memiliki angka penting <em>paling sedikit</em>.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung jumlah angka penting masing-masing faktor:\n            • Panjang = $12{,}45\\text{ cm}$ (memiliki 4 angka penting)<br>\n            • Lebar = $4{,}2\\text{ cm}$ (memiliki 2 angka penting)\n          </li>\n          <li>Hasil perkalian murni kalkulator:\n            $$L = 12{,}45 \\times 4{,}2 = 52{,}29\\text{ cm}^2$$\n          </li>\n          <li>Bulatkan ke faktor paling sedikit (2 angka penting):\n            $$L \\approx 52\\text{ cm}^2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Seringkali siswa tergoda menuliskan seluruh angka di belakang koma ($52{,}29\\text{ cm}^2$) atau membulatkan ke 3 angka penting ($52{,}3\\text{ cm}^2$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "angka-penting",
    "hint": "Aturan Angka Penting pada Operasi Perkalian/Pembagian: Hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak faktor pengali yang memiliki angka penting paling sedikit ."
  },
  {
    "id": "sup-fis-kin-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Kaidah Angka Penting Penjumlahan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Tiga buah paket ekspedisi ditimbang secara terpisah menghasilkan massa berturut-turut $m_1 = 12{,}34\\text{ kg}$, $m_2 = 5{,}6\\text{ kg}$, dan $m_3 = 0{,}123\\text{ kg}$. Berdasarkan kaidah pelaporan operasi angka penting, massa total ketiga paket tersebut harus dituliskan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$18{,}1\\text{ kg}$",
      "$18{,}06\\text{ kg}$",
      "$18{,}063\\text{ kg}$",
      "$18{,}2\\text{ kg}$",
      "$18\\text{ kg}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Angka Penting Penjumlahan & Pengurangan:</strong><br>Hasil penjumlahan atau pengurangan hanya boleh mengandung <strong>satu angka taksiran</strong>, yang ditentukan oleh suku dengan angka di belakang koma paling sedikit (paling tidak teliti).</div>",
      "steps": "<ol><li>$12{,}34$ memiliki 2 angka di belakang koma.</li><li>$5{,}6$ memiliki 1 angka di belakang koma (pembatas ketelitian).</li><li>$0{,}123$ memiliki 3 angka di belakang koma.</li><li>Jumlah aljabar murni: $12{,}34 + 5{,}6 + 0{,}123 = 18{,}063\\text{ kg}$.</li><li>Pembulatan ke 1 angka di belakang koma: karena setelah angka 0 adalah 6 ($>5$), dibulatkan ke atas menjadi $18{,}1\\text{ kg}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan aturan perkalian (jumlah AP paling sedikit) bukannya aturan penjumlahan (angka di belakang koma paling sedikit).</div>"
    },
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-ukur",
    "subTopicSlug": "angka-penting",
    "hint": "Hasil penjumlahan atau pengurangan hanya boleh mengandung satu angka taksiran , yang ditentukan oleh suku dengan angka di belakang koma paling sedikit (paling tidak teliti). **Tips:** Menggunakan aturan perkalian (jumlah AP paling sedikit) bukannya aturan penjumlahan (angka di belakang koma paling sedikit)."
  },
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
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "1) Angka bukan nol adalah angka penting. 2) Angka nol di sebelah kiri angka bukan nol pertama bukan angka penting. 3) Angka nol di antara angka bukan nol adalah angka penting. 4) Angka nol di sebelah kanan tanda desimal yang mengikuti angka bukan nol adalah angka penting."
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
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Aturan perkalian dan pembagian angka penting: hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak angka penting yang paling sedikit dari komponen besaran yang dikalikan."
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
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Aturan penjumlahan dan pengurangan angka penting: hasil operasi penjumlahan atau pengurangan hanya boleh memiliki satu angka taksiran (posisi desimal paling tidak teliti di antara bilangan yang dijumlahkan)."
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
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Perkalian antara bilangan hasil pengukuran dengan bilangan eksak (bilangan bulat cacah hasil membilang) menghasilkan jumlah angka penting yang sama dengan jumlah angka penting pada bilangan hasil pengukuran."
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
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Operasi pembagian angka penting $\\rho = \\frac{m}{V}$ mengikuti jumlah angka penting paling sedikit di antara besaran pembagi dan yang dibagi."
  },
  {
    "id": "fis-kin-ukur-angka-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah pelat logam tipis berbentuk bujur sangkar (persegi) memiliki luas permukaan terukur sebesar $129{,}96\\text{ cm}^2$. Berdasarkan kaidah angka penting untuk operasi penarikan akar kuadrat, panjang sisi pelat logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENARIKAN AKAR KUADRAT PADA OPERASI ANGKA PENTING",
    "options": [
      "$11{,}400\\text{ cm}$",
      "$11{,}4\\text{ cm}$",
      "$11{,}40\\text{ cm}$",
      "$11\\text{ cm}$",
      "$11{,}4000\\text{ cm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan penarikan akar dan pemangkatan pada angka penting: hasil penarikan akar kuadrat memiliki jumlah angka penting yang sama persis dengan jumlah angka penting dari bilangan yang ditarik akarnya.",
      "steps": "1) Menghitung jumlah angka penting bilangan asal:<br>Luas $A = 129{,}96\\text{ cm}^2$ memiliki 5 angka penting (1, 2, 9, 9, 6).<br>2) Menghitung panjang sisi secara matematis:<br>$$s = \\sqrt{A} = \\sqrt{129{,}96\\text{ cm}^2} = 11{,}4\\text{ cm}$$<br>3) Menyesuaikan hasil dengan kaidah 5 angka penting:<br>Agar hasil penarikan akar memiliki tepat 5 angka penting, kita menambahkan angka nol pada desimal:<br>$$s = 11{,}400\\text{ cm}$$.",
      "pitfalls": "Siswa sering mengira hasil cukup ditulis $11{,}4\\text{ cm}$ (opsi B, 3 AP) atau $11{,}40\\text{ cm}$ (opsi C, 4 AP) mengikuti pembulatan desimal, padahal kaidah baku penarikan akar mensyaratkan jumlah angka penting sama dengan bilangan semula (5 AP)."
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Aturan penarikan akar dan pemangkatan pada angka penting: hasil penarikan akar kuadrat memiliki jumlah angka penting yang sama persis dengan jumlah angka penting dari bilangan yang ditarik akarnya."
  },
  {
    "id": "fis-kin-ukur-angka-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah mobil mainan bergerak menempuh dua lintasan lurus berturut-turut. Lintasan pertama ditempuh sejauh $s_1 = 45{,}2\\text{ m}$ dan lintasan kedua ditempuh sejauh $s_2 = 120{,}85\\text{ m}$. Jika waktu total yang dibutuhkan mobil untuk melintasi kedua jalur tersebut terukur sebesar $t = 12{,}5\\text{ s}$, maka kelajuan rata-rata mobil mainan tersebut menurut kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOMBINASI OPERASI PENJUMLAHAN DAN PEMBAGIAN ANGKA PENTING",
    "options": [
      "$13{,}3\\text{ m/s}$",
      "$13{,}288\\text{ m/s}$",
      "$13{,}29\\text{ m/s}$",
      "$13\\text{ m/s}$",
      "$13{,}28\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada operasi gabungan, aturan penjumlahan (angka taksiran paling tidak teliti) diterapkan terlebih dahulu pada jarak total, kemudian aturan pembagian (jumlah angka penting tersedikit) diterapkan pada perhitungan kelajuan rata-rata $v = \\frac{s_{\\text{total}}}{t}$.",
      "steps": "1) Menghitung jarak total dengan aturan penjumlahan:<br>$$s_{\\text{total}} = 45{,}2\\text{ m} + 120{,}85\\text{ m} = 166{,}05\\text{ m}$$<br>Karena $45{,}2$ memiliki 1 desimal taksiran, maka jarak total dibulatkan menjadi $166{,}1\\text{ m}$ (memiliki 4 angka penting).<br>2) Menghitung kelajuan rata-rata:<br>Waktu $t = 12{,}5\\text{ s}$ memiliki 3 angka penting.<br>$$v = \\frac{166{,}1\\text{ m}}{12{,}5\\text{ s}} = 13{,}288\\text{ m/s}$$<br>3) Membulatkan hasil ke 3 angka penting:<br>$13{,}288$ dibulatkan ke 3 angka penting menjadi $13{,}3\\text{ m/s}$.",
      "pitfalls": "Menuliskan seluruh angka desimal hasil pembagian $13{,}288\\text{ m/s}$ (opsi B) atau membulatkan ke 4 angka penting $13{,}29\\text{ m/s}$ (opsi C) tanpa menyadari waktu $t = 12{,}5$ membatasi hasil akhir hanya pada 3 angka penting."
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Pada operasi gabungan, aturan penjumlahan (angka taksiran paling tidak teliti) diterapkan terlebih dahulu pada jarak total, kemudian aturan pembagian (jumlah angka penting tersedikit) diterapkan pada perhitungan kelajuan rata-rata $v = \\frac{s_{\\text{total}}}{t}$."
  },
  {
    "id": "fis-kin-ukur-angka-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Sebuah pipa silinder tembaga berongga memiliki jari-jari luar $R = 5{,}25\\text{ cm}$ dan jari-jari dalam $r = 4{,}75\\text{ cm}$. Nilai selisih kuadrat jari-jari $(R^2 - r^2)$ yang digunakan untuk menghitung luas penampang cincin pipa menurut kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGURANGAN PADA OPERASI SELISIH KUADRAT ANGKA PENTING",
    "options": [
      "$5{,}00\\text{ cm}^2$",
      "$5\\text{ cm}^2$",
      "$5{,}0\\text{ cm}^2$",
      "$5{,}000\\text{ cm}^2$",
      "$5{,}0000\\text{ cm}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada operasi kuadrat, angka penting awal menentukan presisi hasil pemangkatan. Pada operasi pengurangan, hasil akhir ditentukan oleh posisi desimal taksiran paling tidak teliti.",
      "steps": "1) Menghitung kuadrat masing-masing jari-jari (masing-masing 3 angka penting):<br>$$R^2 = (5{,}25\\text{ cm})^2 = 27{,}5625\\text{ cm}^2 \\to 27{,}6\\text{ cm}^2\\text{ (atau simpan desimal penuh } 27{,}56\\text{)}$$<br>$$r^2 = (4{,}75\\text{ cm})^2 = 22{,}5625\\text{ cm}^2 \\to 22{,}6\\text{ cm}^2\\text{ (atau simpan desimal penuh } 22{,}56\\text{)}$$<br>2) Menghitung selisih kuadrat secara eksak terlebih dahulu:<br>$$R^2 - r^2 = 27{,}5625 - 22{,}5625 = 5{,}0000\\text{ cm}^2$$<br>3) Menentukan angka penting hasil pengurangan:<br>Karena $R$ dan $r$ awal diukur dengan ketelitian 2 tempat desimal ($0{,}01\\text{ cm}$), selisih nilai harus konsisten dengan presisi 2 desimal ($5{,}00\\text{ cm}^2$).",
      "pitfalls": "Memilih $5\\text{ cm}^2$ (opsi B) dengan menghapus angka nol di belakang desimal, padahal angka nol desimal menunjukkan presisi pengukuran yang telah dicapai."
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Pada operasi kuadrat, angka penting awal menentukan presisi hasil pemangkatan. Pada operasi pengurangan, hasil akhir ditentukan oleh posisi desimal taksiran paling tidak teliti."
  },
  {
    "id": "fis-kin-ukur-angka-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Dalam uji analisis salinitas, seorang peneliti menimbang kristal garam terlarut sebesar $m_g = 3{,}50\\text{ g}$ dari suatu sampel air laut bermassa total $m_{\\text{sampel}} = 98{,}25\\text{ g}$. Persentase kadar garam $(\\frac{m_g}{m_{\\text{sampel}}} \\times 100\\%)$ yang dilaporkan sesuai kaidah angka penting adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PERHITUNGAN PERSENTASE KADAR MENURUT ATURAN ANGKA PENTING",
    "options": [
      "$3{,}56\\%$",
      "$3{,}562\\%$",
      "$3{,}5623\\%$",
      "$3{,}6\\%$",
      "$4\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perhitungan persentase melibatkan operasi pembagian dan perkalian dengan faktor 100% (bilangan eksak). Jumlah angka penting hasil akhir ditentukan oleh komponen pengukuran dengan angka penting paling sedikit.",
      "steps": "1) Menentukan angka penting:<br>• Massa garam $m_g = 3{,}50\\text{ g}$ (memiliki 3 angka penting)<br>• Massa sampel $m_{\\text{sampel}} = 98{,}25\\text{ g}$ (memiliki 4 angka penting)<br>• Faktor $100\\%$ adalah angka eksak (tidak membatasi angka penting)<br>2) Angka penting paling sedikit adalah 3 angka penting.<br>3) Menghitung nilai matematis:<br>$$P = \\frac{3{,}50\\text{ g}}{98{,}25\\text{ g}} \\times 100\\% = 3{,}56234...\\%$$<br>4) Membulatkan ke 3 angka penting:<br>Hasil dibulatkan menjadi $3{,}56\\%$.",
      "pitfalls": "Menyajikan 4 angka penting $3{,}562\\%$ (opsi B) mengikuti massa sampel, padahal massa garam terlarut hanya memiliki 3 angka penting ($3{,}50$)."
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Perhitungan persentase melibatkan operasi pembagian dan perkalian dengan faktor 100% (bilangan eksak). Jumlah angka penting hasil akhir ditentukan oleh komponen pengukuran dengan angka penting paling sedikit."
  },
  {
    "id": "fis-kin-ukur-angka-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-angka",
    "category": "Angka Penting",
    "difficulty": "sedang",
    "statement": "Kaidah pembulatan angka penting standar internasional (round-to-even rule) menyatakan bahwa jika angka paling kanan yang dibuang tepat bernilai $5$ (atau diikuti angka-angka nol saja), maka angka terakhir yang dipertahankan dibulatkan ke bilangan genap terdekat. Diberikan dua hasil pengukuran suhu: $T_1 = 24{,}350\\text{ }^\\circ\\text{C}$ dan $T_2 = 24{,}650\\text{ }^\\circ\\text{C}$. Hasil pembulatan kedua suhu tersebut hingga satu tempat desimal berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "ATURAN PEMBULATAN KE ANGKA GENAP TERDEKAT (ROUND TO EVEN)",
    "options": [
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$",
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}7\\text{ }^\\circ\\text{C}$",
      "$24{,}3\\text{ }^\\circ\\text{C}$ dan $24{,}7\\text{ }^\\circ\\text{C}$",
      "$24{,}3\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$",
      "$24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}65\\text{ }^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Aturan pembulatan genap (round-to-even / Gaussian rounding): jika angka yang dibuang tepat sama dengan 5 (atau 5 diikuti nol), maka jika angka sebelumnya ganjil dibulatkan ke atas menjadi genap, dan jika angka sebelumnya genap dibiarkan tetap (tidak berubah).",
      "steps": "1) Meninjau $T_1 = 24{,}350\\text{ }^\\circ\\text{C}$:<br>Angka yang dibuang adalah 5 diikuti nol. Angka terakhir yang dipertahankan adalah 3 (ganjil). Karena ganjil, dibulatkan ke atas menjadi bilangan genap terdekat, yaitu $4$. Maka $T_1$ menjadi $24{,}4\\text{ }^\\circ\\text{C}$.<br>2) Meninjau $T_2 = 24{,}650\\text{ }^\\circ\\text{C}$:<br>Angka yang dibuang adalah 5 diikuti nol. Angka terakhir yang dipertahankan adalah 6 (genap). Karena sudah genap, angka tersebut dibiarkan tetap. Maka $T_2$ menjadi $24{,}6\\text{ }^\\circ\\text{C}$.<br>3) Maka hasil pembulatan adalah $24{,}4\\text{ }^\\circ\\text{C}$ dan $24{,}6\\text{ }^\\circ\\text{C}$.",
      "pitfalls": "Aturan pembulatan sekolah dasar tradisional selalu menaikkan angka 5 ke atas ($24{,}4$ dan $24{,}7$, opsi B). Dalam fisika dan metrologi standar ISO, aturan pembulatan genap diterapkan untuk mencegah penumpukan bias statistika positif."
    },
    "subTopicSlug": "angka-penting",
    "bab": "Kinematika",
    "subBab": "Angka Penting",
    "subTopic": "Angka Penting",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Aturan pembulatan genap (round-to-even / Gaussian rounding): jika angka yang dibuang tepat sama dengan 5 (atau 5 diikuti nol), maka jika angka sebelumnya ganjil dibulatkan ke atas menjadi genap, dan jika angka sebelumnya genap dibiarkan tetap (tidak berubah). **Tips:** Aturan pembulatan sekolah dasar tradisional selalu menaikkan angka 5 ke atas ($24{,}4$ dan $24{,}7$, )."
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
