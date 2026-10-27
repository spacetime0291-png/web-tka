/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Asas Black (fis-termo-kalor-asasblack)
 * Slug: asas-black
 * Indikator: Kekekalan kalor pada pencampuran zat (Q_lepas = Q_serap) dan penentuan suhu akhir campuran.
 * 
 * Total Butir Soal: 13 (Mudah: 5, Sedang: 8, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-asasblack";
  const subTopicSlug = "asas-black";
  const questions = [
  {
    "id": "sedang-fis-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Termofisika - Asas Black Campuran Air dan Es",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $200\\text{ gram}$ air bersuhu $60^\\circ\\text{C}$ dicampurkan dengan $50\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ di dalam wadah kalorimeter ideal terisolasi sempurna. Diketahui kalor jenis air $c = 1\\text{ kal/g}^\\circ\\text{C}$ dan kalor lebur es $L = 80\\text{ kal/g}$. Suhu akhir campuran saat mencapai kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20^\\circ\\text{C}$",
      "$24^\\circ\\text{C}$",
      "$28^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$",
      "$36^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Asas Black ($Q_{\\text{lepas}} = Q_{\\text{terima}}$):</strong><br>\n          Kalor yang dilepas oleh air panas digunakan untuk meleburkan es menjadi air $0^\\circ\\text{C}$, kemudian menaikkan suhu air leburan es ke suhu campuran $T_c$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Kalor yang dibutuhkan untuk meleburkan seluruh es $0^\\circ\\text{C}$:\n            $$Q_{\\text{lebur}} = m_{\\text{es}} \\cdot L = 50 \\times 80 = 4000\\text{ kal}$$\n          </li>\n          <li>Kalor maksimum yang dapat dilepas air panas hingga $0^\\circ\\text{C}$:\n            $$Q_{\\max} = 200 \\times 1 \\times 60 = 12000\\text{ kal}$$\n            Karena $12000 > 4000$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.\n          </li>\n          <li>Persamaan Asas Black:\n            $$m_{\\text{air}} c (60 - T_c) = Q_{\\text{lebur}} + m_{\\text{es}} c (T_c - 0)$$\n            $$200(1)(60 - T_c) = 4000 + 50(1)(T_c)$$\n            $$12000 - 200 T_c = 4000 + 50 T_c$$\n            $$8000 = 250 T_c \\implies T_c = \\frac{8000}{250} = 32^\\circ\\text{C}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering lupa memperhitungkan kalor lebur es ($m_{\\text{es}} L$) dan hanya menghitung $m_1 c \\Delta T_1 = m_2 c \\Delta T_2$.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black",
    "hint": "Asas Black ($Q_{\\text{lepas}} = Q_{\\text{terima}}$): Kalor yang dilepas oleh air panas digunakan untuk meleburkan es menjadi air $0^\\circ\\text{C}$, kemudian menaikkan suhu air leburan es ke suhu campuran $T_c$. **Tips:** Siswa sering lupa memperhitungkan kalor lebur es ($m_{\\text{es}} L$) dan hanya menghitung $m_1 c \\Delta T_1 = m_2 c \\Delta T_2$."
  },
  {
    "id": "drill-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Asas Black Campuran Cairan Sejenis",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebanyak $100\\text{ gram}$ air bersuhu $90^\\circ\\text{C}$ dicampurkan dengan $200\\text{ gram}$ air bersuhu $30^\\circ\\text{C}$ di dalam sebuah wadah terisolasi termal ideal (wadah tidak menyerap kalor). Suhu akhir kesetimbangan termal campuran ($T_c$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black:</strong><br>Kalor yang dilepas oleh zat bersuhu lebih tinggi sama dengan kalor yang diserap oleh zat bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{terima}}$$</div>",
      "steps": "<ol><li>Zat sejenis (air) memiliki kalor jenis $c$ yang sama sehingga $c$ dapat dieliminasi.</li><li>Persamaan Asas Black: $m_1 (T_1 - T_c) = m_2 (T_c - T_2)$.</li><li>Substitusi data: $100(90 - T_c) = 200(T_c - 30)$.</li><li>Bagi kedua ruas dengan 100: $90 - T_c = 2(T_c - 30) = 2T_c - 60$.</li><li>Pindahkan suku: $90 + 60 = 2T_c + T_c \\implies 150 = 3T_c \\implies T_c = 50^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Cepat Cairan Sejenis:</strong> Rata-rata tertimbang massa: $T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \\frac{100(90) + 200(30)}{300} = \\frac{15000}{300} = 50^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black",
    "hint": "Asas Black: Kalor yang dilepas oleh zat bersuhu lebih tinggi sama dengan kalor yang diserap oleh zat bersuhu lebih rendah: $$Q_{\\text{lepas}} = Q_{\\text{terima}}$$."
  },
  {
    "id": "drill2-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Penentuan Kalor Jenis Zat Asas Black",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebongkah logam bermassa $m_L = 200\\text{ gram}$ bersuhu $100^\\circ\\text{C}$ dimasukkan ke dalam bejana berisi $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$). Jika suhu akhir campuran adalah $40^\\circ\\text{C}$ dan bejana tidak menyerap kalor, maka kalor jenis logam ($c_L$) tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}167\\text{ kal/g}^\\circ\\text{C}$ (sekitar $\\frac{1}{6}$)",
      "$0{,}50\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}25\\text{ kal/g}^\\circ\\text{C}$",
      "$1{,}00\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}083\\text{ kal/g}^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Asas Black Menentukan Kalor Jenis:</strong><br>$$m_L \\cdot c_L \\cdot (T_L - T_c) = m_{\\text{air}} \\cdot c_{\\text{air}} \\cdot (T_c - T_{\\text{air}})$$</div>",
      "steps": "<ol><li>Kalor diterima air: $Q_{\\text{terima}} = 100 \\times 1 \\times (40 - 20) = 2000\\text{ kal}$.</li><li>Kalor dilepas logam: $Q_{\\text{lepas}} = 200 \\times c_L \\times (100 - 40) = 200 \\times c_L \\times 60 = 12.000 \\cdot c_L$.</li><li>Asas Black: $12.000 \\cdot c_L = 2000 \\implies c_L = \\frac{2000}{12000} = \\frac{1}{6} \\approx 0{,}167\\text{ kal/g}^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Cek Satuan Kalor:</strong> Jika menggunakan gram dan $\\text{kal/g}^\\circ\\text{C}$, kalor jenis air adalah $1$. Jika menggunakan kg dan Joule, kalor jenis air adalah $4200\\text{ J/kg}\\cdot\\text{K}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "asas-black",
    "hint": "Asas Black Menentukan Kalor Jenis: $$m_L \\cdot c_L \\cdot (T_L - T_c) = m_{\\text{air}} \\cdot c_{\\text{air}} \\cdot (T_c - T_{\\text{air}})$$. **Tips:** ⚠️ Cek Satuan Kalor: Jika menggunakan gram dan $\\text{kal/g}^\\circ\\text{C}$, kalor jenis air adalah $1$."
  },
  {
    "id": "fis-termo-kalor-asasblack-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Asas Black Campuran Cairan Sejenis",
    "difficulty": "mudah",
    "statement": "Sebanyak $100\\text{ gram}$ air bersuhu $80^\\circ\\text{C}$ dicampurkan dengan $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ di dalam wadah yang terisolasi sempurna. Jika pertukaran kalor dengan wadah dan udara luar diabaikan, suhu akhir kesetimbangan campuran air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Asas Black, pada sistem terisolasi berlaku kekekalan energi kalor:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}}$$Jika dua zat cair sejenis bermassa sama ($m_1 = m_2$) dicampurkan tanpa perubahan wujud, suhu kesetimbangan akhir adalah rata-rata aritmetika dari kedua suhu:<br>$$T_c = \\frac{T_1 + T_2}{2}$$",
      "steps": "1. Identifikasi data: $m_1 = m_2 = 100\\text{ g}$, $T_1 = 80^\\circ\\text{C}$, $T_2 = 20^\\circ\\text{C}$.<br>2. Karena kedua massa dan kalor jenis zat sama, substitusikan ke formula:<br>$$T_c = \\frac{80^\\circ\\text{C} + 20^\\circ\\text{C}}{2} = \\frac{100^\\circ\\text{C}}{2} = 50^\\circ\\text{C}$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Rumus rata-rata sederhana $\\frac{T_1+T_2}{2}$ hanya boleh digunakan jika massa kedua cairan sama dan jenis zatnya identik. Jika massanya berbeda, perhitungan harus menggunakan persamaan Asas Black lengkap."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Asas Black, pada sistem terisolasi berlaku kekekalan energi kalor: $$Q_{\\text{lepas}} = Q_{\\text{serap}}$$Jika dua zat cair sejenis bermassa sama ($m_1 = m_2$) dicampurkan tanpa perubahan wujud, suhu kesetimbangan akhir adalah rata-rata aritmetika dari kedua suhu: $$T_c = \\frac{T_1 + T_2}{2}$$. **Tips:** Rumus rata-rata sederhana $\\frac{T_1+T_2}{2}$ hanya boleh digunakan jika massa kedua cairan sama dan jenis zatnya identik."
  },
  {
    "id": "fis-termo-kalor-asasblack-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Pencampuran Air Berbeda Massa",
    "difficulty": "mudah",
    "statement": "Air panas bermassa $200\\text{ gram}$ pada suhu $80^\\circ\\text{C}$ dicampurkan ke dalam $100\\text{ gram}$ air dingin pada suhu $20^\\circ\\text{C}$. Jika tidak ada kalor yang diserap oleh wadah maupun lingkungan sekitar, suhu akhir kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persamaan Asas Black untuk dua massa zat cair yang sama jenisnya ($c_1 = c_2 = c$):<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$<br>Kalor jenis $c$ dapat disederhanakan dari kedua ruas.",
      "steps": "1. Tulis persamaan kesetimbangan:<br>$$200 \\times (80 - T_c) = 100 \\times (T_c - 20)$$<br>2. Sederhanakan dengan membagi kedua ruas dengan 100:<br>$$2(80 - T_c) = 1(T_c - 20)$$<br>3. Selesaikan operasi aljabar:<br>$$160 - 2T_c = T_c - 20 \\implies 3T_c = 180 \\implies T_c = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan menghitung suhu akhir sebagai rata-rata sederhana $(80 + 20)/2 = 50^\\circ\\text{C}$ (opsi B). Karena massa air panas dua kali lebih banyak daripada air dingin, suhu akhir akan lebih condong mendekati suhu air panas."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Persamaan Asas Black untuk dua massa zat cair yang sama jenisnya ($c_1 = c_2 = c$): $$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$ Kalor jenis $c$ dapat disederhanakan dari kedua ruas."
  },
  {
    "id": "fis-termo-kalor-asasblack-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Penentuan Kalor Jenis Zat Padat",
    "difficulty": "mudah",
    "statement": "Sepotong logam bermassa $100\\text{ gram}$ dipanaskan hingga suhunya mencapai $100^\\circ\\text{C}$, kemudian dimasukkan ke dalam bejana berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Suhu akhir kesetimbangan termal sistem tercapai pada $25^\\circ\\text{C}$. Jika kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor yang diserap bejana diabaikan, besar kalor jenis logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$280\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$560\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$700\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$840\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kalor yang dilepas oleh logam sama dengan kalor yang diserap oleh air:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_A \\times c_A \\times (T_c - T_A)$$",
      "steps": "1. Identifikasi nilai besaran:<br>$m_L = 100\\text{ g} = 0{,}1\\text{ kg}$<br>$T_L = 100^\\circ\\text{C}$<br>$m_A = 200\\text{ g} = 0{,}2\\text{ kg}$<br>$T_A = 20^\\circ\\text{C}$<br>$T_c = 25^\\circ\\text{C}$<br>$c_A = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$<br>2. Masukkan ke rumus kesetimbangan:<br>$$0{,}1 \\times c_L \\times (100 - 25) = 0{,}2 \\times 4200 \\times (25 - 20)$$<br>$$0{,}1 \\times c_L \\times 75 = 0{,}2 \\times 4200 \\times 5$$<br>$$7{,}5 \\times c_L = 4200 \\implies c_L = \\frac{4200}{7{,}5} = 560\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$$<br>3. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Perhatikan perubahan suhu masing-masing zat: untuk logam $\\Delta T_L = 100 - 25 = 75^\\circ\\text{C}$, sedangkan untuk air $\\Delta T_A = 25 - 20 = 5^\\circ\\text{C}$."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kalor yang dilepas oleh logam sama dengan kalor yang diserap oleh air: $$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_A \\times c_A \\times (T_c - T_A)$$."
  },
  {
    "id": "fis-termo-kalor-asasblack-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Konsep Dasar dan Syarat Asas Black",
    "difficulty": "mudah",
    "statement": "Hukum pertukaran kalor yang menyatakan bahwa jumlah kalor yang dilepaskan oleh benda bersuhu tinggi sama dengan jumlah kalor yang diserap oleh benda bersuhu rendah ($Q_{\\text{lepas}} = Q_{\\text{serap}}$) dirumuskan oleh Joseph Black. Syarat fisis utama agar persamaan tersebut berlaku secara presisi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kedua benda yang dicampur harus memiliki massa dan kalor jenis yang persis sama",
      "Proses pertukaran kalor harus terjadi dalam sistem terisolasi tanpa aliran kalor ke atau dari lingkungan",
      "Suhu salah satu benda harus berada di atas titik didih normal air ($100^\\circ\\text{C}$)",
      "Zat yang dicampurkan wajib mengalami perubahan wujud dari padat menjadi cair",
      "Pertukaran kalor dilakukan di bawah kondisi tekanan atmosfer yang dinaikkan 2 kali lipat"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Asas Black merupakan manifestasi dari Hukum I Termodinamika (Hukum Kekekalan Energi) pada pertukaran kalor. Persamaan $Q_{\\text{lepas}} = Q_{\\text{serap}}$ berlaku tepat apabila sistem bersifat terisolasi sempurna (adiabatik terhadap lingkungan luar), sehingga tidak ada energi kalor yang bocor ke lingkungan atau diserap dari lingkungan.",
      "steps": "1. Pahami prinsip kekekalan energi: energi tidak dapat diciptakan maupun dimusnahkan.<br>2. Pada pertukaran termal, kalor yang lepas dari zat panas harus sepenuhnya masuk ke zat dingin.<br>3. Jika wadah tidak terisolasi, sebagian kalor akan hilang ke lingkungan sekitar sehingga $Q_{\\text{lepas}} > Q_{\\text{serap}}$.<br>4. Jadi, syarat utama berlakunya Asas Black adalah proses berlangsung dalam sistem yang terisolasi sempurna.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Asas Black berlaku untuk segala jenis benda dan massa yang berbeda, tidak memerlukan perubahan wujud zat, serta tidak mensyaratkan kondisi suhu atau tekanan ekstrem tertentu."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Asas Black merupakan manifestasi dari Hukum I Termodinamika (Hukum Kekekalan Energi) pada pertukaran kalor. Persamaan $Q_{\\text{lepas}} = Q_{\\text{serap}}$ berlaku tepat apabila sistem bersifat terisolasi sempurna (adiabatik terhadap lingkungan luar), sehingga tidak ada energi kalor yang bocor ke lingkungan atau diserap dari lingkungan."
  },
  {
    "id": "fis-termo-kalor-asasblack-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Peleburan Es dalam Air Hangat",
    "difficulty": "mudah",
    "statement": "Potongan es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam sebuah bejana terisolasi yang berisi $500\\text{ gram}$ air bersuhu $40^\\circ\\text{C}$. Diketahui kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor lebur es adalah $336.000\\text{ J/kg}$. Jika seluruh es tepat melebur habis dan suhu akhir campuran air mencapai $0^\\circ\\text{C}$, massa es yang dimasukkan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$125\\text{ gram}$",
      "$200\\text{ gram}$",
      "$250\\text{ gram}$",
      "$300\\text{ gram}$",
      "$350\\text{ gram}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada suhu akhir kesetimbangan $0^\\circ\\text{C}$ dengan seluruh es melebur sempurna:<br>- Air hangat melepaskan kalor untuk mendingin dari $40^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_{\\text{lepas}} = m_A \\times c_A \\times \\Delta T_A$.<br>- Es pada $0^\\circ\\text{C}$ menyerap kalor murni untuk melebur menjadi air pada $0^\\circ\\text{C}$: $Q_{\\text{serap}} = m_{\\text{es}} \\times L$.<br>- Berdasarkan Asas Black: $Q_{\\text{lepas}} = Q_{\\text{serap}}$.",
      "steps": "1. Konversi massa air hangat: $m_A = 500\\text{ g} = 0{,}5\\text{ kg}$.<br>2. Hitung kalor yang dilepas air pendingin:<br>$$Q_{\\text{lepas}} = 0{,}5\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (40 - 0)^\\circ\\text{C} = 2100 \\times 40 = 84.000\\text{ J}$$<br>3. Samakan dengan kalor lebur es:<br>$$m_{\\text{es}} \\times 336.000 = 84.000 \\implies m_{\\text{es}} = \\frac{84.000}{336.000} = 0{,}25\\text{ kg} = 250\\text{ gram}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Karena suhu akhir tepat $0^\\circ\\text{C}$, es yang telah mencair tidak mengalami kenaikan suhu di atas $0^\\circ\\text{C}$ sehingga tidak ada komponen penyerapan kalor sensibel ($mc\\Delta T$) untuk air hasil leburan es."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pada suhu akhir kesetimbangan $0^\\circ\\text{C}$ dengan seluruh es melebur sempurna: - Air hangat melepaskan kalor untuk mendingin dari $40^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_{\\text{lepas}} = m_A \\times c_A \\times \\Delta T_A$. - Es pada $0^\\circ\\text{C}$ menyerap kalor murni untuk melebur menjadi air pada $0^\\circ\\text{C}$: $Q_{\\text{serap}} = m_{\\text{es}} \\times L$. - Berdasarkan Asas Black: $Q_{\\text{lepas}} = Q_{\\text{serap}}$."
  },
  {
    "id": "fis-termo-kalor-asasblack-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Campuran Es Sub-Nol dan Air Hangat",
    "difficulty": "sedang",
    "statement": "Sebongkah es bermassa $100\\text{ gram}$ pada suhu $-10^\\circ\\text{C}$ dimasukkan ke dalam wadah terisolasi yang berisi $400\\text{ gram}$ air bersuhu $50^\\circ\\text{C}$. Diketahui kalor jenis es $c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, kalor lebur es $L = 336.000\\text{ J/kg}$, dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika kapasitas kalor wadah diabaikan, suhu akhir campuran pada keadaan kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15^\\circ\\text{C}$",
      "$18^\\circ\\text{C}$",
      "$20^\\circ\\text{C}$",
      "$23^\\circ\\text{C}$",
      "$26^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Proses pencampuran es bersuhu di bawah nol dengan air hangat melibatkan tiga kemungkinan penyerapan kalor oleh es:<br>1. Pemanasan es dari $-10^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_1 = m_{\\text{es}} c_{\\text{es}} \\Delta T_1$.<br>2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m_{\\text{es}} L$.<br>3. Pemanasan air leburan dari $0^\\circ\\text{C}$ ke $T_c$: $Q_3 = m_{\\text{es}} c_{\\text{air}} T_c$.<br>Kalor dilepaskan oleh air hangat yang mendingin dari $50^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{lepas}} = m_{\\text{air}} c_{\\text{air}} (50 - T_c)$.",
      "steps": "1. Konversi data: $m_{\\text{es}} = 0{,}1\\text{ kg}$, $m_{\\text{air}} = 0{,}4\\text{ kg}$.<br>2. Hitung kalor untuk menaikkan suhu es ke $0^\\circ\\text{C}$ dan melebur seluruhnya:<br>$$Q_1 = 0{,}1 \\times 2100 \\times 10 = 2100\\text{ J}$$<br>$$Q_2 = 0{,}1 \\times 336.000 = 33.600\\text{ J}$$<br>$$Q_{\\text{serap, total}} = 2100 + 33.600 = 35.700\\text{ J}$$<br>3. Hitung kalor maksimum yang dapat dilepas air hangat jika suhunya turun hingga $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas, maks}} = 0{,}4 \\times 4200 \\times 50 = 84.000\\text{ J}$$<br>Karena $84.000\\text{ J} > 35.700\\text{ J}$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.<br>4. Susun persamaan Asas Black:<br>$$Q_{\\text{lepas}} = Q_1 + Q_2 + Q_3$$<br>$$0{,}4 \\times 4200 \\times (50 - T_c) = 35.700 + 0{,}1 \\times 4200 \\times T_c$$<br>$$1680(50 - T_c) = 35.700 + 420 T_c$$<br>$$84.000 - 1680 T_c = 35.700 + 420 T_c$$<br>$$2100 T_c = 84.000 - 35.700 = 48.300 \\implies T_c = \\frac{48.300}{2100} = 23^\\circ\\text{C}$$<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Lupa memperhitungkan kalor jenis es ($c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$) saat es naik suhunya dari $-10^\\circ\\text{C}$ ke $0^\\circ\\text{C}$, atau keliru menggunakan kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ untuk fase es padat."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Proses pencampuran es bersuhu di bawah nol dengan air hangat melibatkan tiga kemungkinan penyerapan kalor oleh es: 1. Pemanasan es dari $-10^\\circ\\text{C}$ ke $0^\\circ\\text{C}$: $Q_1 = m_{\\text{es}} c_{\\text{es}} \\Delta T_1$. 2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m_{\\text{es}} L$. 3. Pemanasan air leburan dari $0^\\circ\\text{C}$ ke $T_c$: $Q_3 = m_{\\text{es}} c_{\\text{air}} T_c$. Kalor dilepaskan oleh air hangat yang mendingin dari $50^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{lepas}} = m_{\\text{air}} c_{\\text{air}} (50 - T_c)$."
  },
  {
    "id": "fis-termo-kalor-asasblack-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Kapasitas Kalor Kalorimeter Diperhitungkan",
    "difficulty": "sedang",
    "statement": "Sebuah kalorimeter dengan kapasitas kalor $C_{\\text{kal}} = 160\\text{ J}/^\\circ\\text{C}$ berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Ke dalam kalorimeter tersebut dimasukkan potongan logam bermassa $400\\text{ gram}$ bersuhu $80^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan suhu akhir kesetimbangan termal adalah $30^\\circ\\text{C}$, kalor jenis potongan logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$350\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$500\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$580\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$640\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika wadah (kalorimeter) ikut menyerap kalor, maka kalor yang dilepas oleh benda panas sama dengan jumlah kalor yang diserap oleh air ditambah kalor yang diserap oleh kalorimeter:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap, air}} + Q_{\\text{serap, wadah}}$$<br>$$m_L \\times c_L \\times (T_L - T_c) = (m_{\\text{air}} c_{\\text{air}} + C_{\\text{kal}}) \\times (T_c - T_{\\text{awal}})$$",
      "steps": "1. Data: $m_L = 0{,}4\\text{ kg}$, $T_L = 80^\\circ\\text{C}$, $T_c = 30^\\circ\\text{C}$, $T_{\\text{awal}} = 20^\\circ\\text{C}$, $m_{\\text{air}} = 0{,}2\\text{ kg}$, $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, $C_{\\text{kal}} = 160\\text{ J}/^\\circ\\text{C}$.<br>2. Hitung kalor yang diserap oleh air dan bejana kalorimeter:<br>$$Q_{\\text{serap}} = (0{,}2 \\times 4200 + 160) \\times (30 - 20) = (840 + 160) \\times 10 = 1000 \\times 10 = 10.000\\text{ J}$$<br>3. Hitung kalor yang dilepas logam:<br>$$Q_{\\text{lepas}} = 0{,}4 \\times c_L \\times (80 - 30) = 0{,}4 \\times c_L \\times 50 = 20 c_L$$<br>4. Samakan kedua nilai kalor:<br>$$20 c_L = 10.000 \\implies c_L = \\frac{10.000}{20} = 500\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jika kapasitas kalor wadah ($C_{\\text{kal}}$) diabaikan, perhitungan hanya menghasilkan $Q_{\\text{serap}} = 840 \\times 10 = 8400\\text{ J}$, yang memberikan $c_L = 8400 / 20 = 420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ (opsi B). Wadah menyerap porsi kalor yang nyata."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Jika wadah (kalorimeter) ikut menyerap kalor, maka kalor yang dilepas oleh benda panas sama dengan jumlah kalor yang diserap oleh air ditambah kalor yang diserap oleh kalorimeter: $$Q_{\\text{lepas}} = Q_{\\text{serap, air}} + Q_{\\text{serap, wadah}}$$ $$m_L \\times c_L \\times (T_L - T_c) = (m_{\\text{air}} c_{\\text{air}} + C_{\\text{kal}}) \\times (T_c - T_{\\text{awal}})$$."
  },
  {
    "id": "fis-termo-kalor-asasblack-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Pencampuran Tiga Cairan Sejenis",
    "difficulty": "sedang",
    "statement": "Tiga buah sampel air dengan massa dan suhu yang berbeda dicampurkan dalam satu wadah kalorimeter ideal yang kedap kalor:<br>- Sampel 1: $100\\text{ gram}$ pada suhu $20^\\circ\\text{C}$<br>- Sampel 2: $200\\text{ gram}$ pada suhu $50^\\circ\\text{C}$<br>- Sampel 3: $300\\text{ gram}$ pada suhu $80^\\circ\\text{C}$<br>Suhu akhir kesetimbangan termal campuran ketiga sampel air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$70^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk pencampuran beberapa sampel zat yang sejenis tanpa perubahan wujud, persamaan Asas Black $\\sum Q = 0$ menghasilkan rumus rata-rata tertimbang (weighted average) terhadap massa:<br>$$T_c = \\frac{\\sum_{i=1}^n m_i T_i}{\\sum_{i=1}^n m_i}$$",
      "steps": "1. Tulis pembilang (jumlah perkalian massa dan suhu):<br>$$\\sum m_i T_i = (100 \\times 20) + (200 \\times 50) + (300 \\times 80)$$<br>$$\\sum m_i T_i = 2000 + 10.000 + 24.000 = 36.000\\text{ g}\\cdot^\\circ\\text{C}$$<br>2. Tulis penyebut (massa total campuran):<br>$$\\sum m_i = 100 + 200 + 300 = 600\\text{ gram}$$<br>3. Hitung suhu campuran $T_c$:<br>$$T_c = \\frac{36.000}{600} = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jangan menghitung suhu akhir sebagai rata-rata aritmetika biasa $\\frac{20 + 50 + 80}{3} = 50^\\circ\\text{C}$ (opsi A). Sampel air panas ($80^\\circ\\text{C}$) memiliki massa terbesar ($300\\text{ g}$) sehingga suhu akhir terdorong ke atas $50^\\circ\\text{C}$."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Untuk pencampuran beberapa sampel zat yang sejenis tanpa perubahan wujud, persamaan Asas Black $\\sum Q = 0$ menghasilkan rumus rata-rata tertimbang (weighted average) terhadap massa: $$T_c = \\frac{\\sum_{i=1}^n m_i T_i}{\\sum_{i=1}^n m_i}$$."
  },
  {
    "id": "fis-termo-kalor-asasblack-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Kesetimbangan Campuran Dua Fase Es dan Air",
    "difficulty": "sedang",
    "statement": "Sebanyak $200\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam wadah terisolasi yang berisi $300\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor lebur es $L = 336.000\\text{ J/kg}$ dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Pada keadaan akhir kesetimbangan termal, massa es yang masih belum melebur di dalam wadah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$125\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dalam interaksi termal es pada $0^\\circ\\text{C}$ dengan air cair, perlu diperiksa apakah kalor yang dilepaskan air cukup untuk meleburkan seluruh es:<br>- Kalor maksimum yang dilepas air saat turun ke $0^\\circ\\text{C}$: $Q_{\\text{lepas, maks}} = m_{\\text{air}} c_{\\text{air}} \\Delta T$.<br>- Kalor yang dibutuhkan untuk meleburkan seluruh es: $Q_{\\text{lebur, tot}} = m_{\\text{es}} L$.<br>- Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, hanya sebagian es yang melebur dan suhu akhir tetap $0^\\circ\\text{C}$.",
      "steps": "1. Hitung kalor maksimum yang dilepaskan air:<br>$$Q_{\\text{lepas, maks}} = 0{,}3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (20 - 0)^\\circ\\text{C} = 25.200\\text{ J}$$<br>2. Hitung kalor yang dibutuhkan untuk melebur seluruh es:<br>$$Q_{\\text{lebur, tot}} = 0{,}2\\text{ kg} \\times 336.000\\text{ J/kg} = 67.200\\text{ J}$$<br>3. Karena $25.200\\text{ J} < 67.200\\text{ J}$, kalor dari air tidak cukup melebur seluruh es. Suhu akhir adalah $0^\\circ\\text{C}$.<br>4. Hitung massa es yang melebur ($m_{\\text{lebur}}$):<br>$$m_{\\text{lebur}} \\times 336.000 = 25.200 \\implies m_{\\text{lebur}} = \\frac{25.200}{336.000} = 0{,}075\\text{ kg} = 75\\text{ gram}$$<br>5. Hitung massa es yang tersisa (belum melebur):<br>$$m_{\\text{sisa}} = 200\\text{ g} - 75\\text{ g} = 125\\text{ gram}$$<br>6. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan terkecoh antara massa es yang melebur ($75\\text{ gram}$, opsi B) dengan massa es yang masih tersisa tidak melebur ($125\\text{ gram}$, opsi D). Pertanyaan meminta massa es yang masih belum melebur."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Dalam interaksi termal es pada $0^\\circ\\text{C}$ dengan air cair, perlu diperiksa apakah kalor yang dilepaskan air cukup untuk meleburkan seluruh es: - Kalor maksimum yang dilepas air saat turun ke $0^\\circ\\text{C}$: $Q_{\\text{lepas, maks}} = m_{\\text{air}} c_{\\text{air}} \\Delta T$. - Kalor yang dibutuhkan untuk meleburkan seluruh es: $Q_{\\text{lebur, tot}} = m_{\\text{es}} L$. - Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, hanya sebagian es yang melebur dan suhu akhir tetap $0^\\circ\\text{C}$."
  },
  {
    "id": "fis-termo-kalor-asasblack-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-asasblack",
    "category": "Kondensasi Uap Air dalam Air Dingin",
    "difficulty": "sedang",
    "statement": "Uap air bersuhu $100^\\circ\\text{C}$ dialirkan ke dalam sebuah bejana terisolasi yang berisi $300\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor penguapan air $U = 2{,}268 \\times 10^6\\text{ J/kg}$ dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika suhu akhir campuran air mencapai $40^\\circ\\text{C}$ dan kalor yang diserap wadah diabaikan, massa uap air yang telah mengembun adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ gram}$",
      "$10\\text{ gram}$",
      "$15\\text{ gram}$",
      "$20\\text{ gram}$",
      "$25\\text{ gram}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat uap air pada $100^\\circ\\text{C}$ masuk ke dalam air dingin, uap mengalami dua tahap pelepasan kalor:<br>1. Mengembun menjadi air pada suhu $100^\\circ\\text{C}$: $Q_1 = m_u \\times U$.<br>2. Air hasil kondensasi mendingin dari $100^\\circ\\text{C}$ ke suhu akhir $T_c$: $Q_2 = m_u \\times c_{\\text{air}} \\times (100 - T_c)$.<br>Kalor ini sepenuhnya diserap oleh air dingin untuk naik suhunya dari $20^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{serap}} = m_{\\text{air}} \\times c_{\\text{air}} \\times (T_c - 20)$.",
      "steps": "1. Hitung kalor yang diserap air dingin ($m_{\\text{air}} = 0{,}3\\text{ kg}$):<br>$$Q_{\\text{serap}} = 0{,}3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (40 - 20)^\\circ\\text{C} = 1260 \\times 20 = 25.200\\text{ J}$$<br>2. Hitung kalor yang dilepas oleh setiap kilogram uap saat mengembun dan mendingin ke $40^\\circ\\text{C}$:<br>$$q_{\\text{lepas/kg}} = U + c_{\\text{air}}(100 - 40) = 2{,}268 \\times 10^6 + 4200(60) = 2.268.000 + 252.000 = 2.520.000\\text{ J/kg}$$<br>3. Samakan kalor lepas dan serap:<br>$$m_u \\times 2.520.000 = 25.200 \\implies m_u = \\frac{25.200}{2.520.000} = 0{,}01\\text{ kg} = 10\\text{ gram}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Jangan mengabaikan tahap kedua pelepasan kalor (pendinginan air hasil kondensasi dari $100^\\circ\\text{C}$ ke $40^\\circ\\text{C}$). Uap tidak hanya melepas kalor laten pengembunan, tetapi air panas hasil embunan juga terus melepas kalor hingga mencapai suhu kesetimbangan."
    },
    "subTopicSlug": "asas-black",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Asas Black",
    "subTopic": "Asas Black",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Saat uap air pada $100^\\circ\\text{C}$ masuk ke dalam air dingin, uap mengalami dua tahap pelepasan kalor: 1. Mengembun menjadi air pada suhu $100^\\circ\\text{C}$: $Q_1 = m_u \\times U$. 2. Air hasil kondensasi mendingin dari $100^\\circ\\text{C}$ ke suhu akhir $T_c$: $Q_2 = m_u \\times c_{\\text{air}} \\times (100 - T_c)$. Kalor ini sepenuhnya diserap oleh air dingin untuk naik suhunya dari $20^\\circ\\text{C}$ ke $T_c$: $Q_{\\text{serap}} = m_{\\text{air}} \\times c_{\\text{air}} \\times (T_c - 20)$. **Tips:** Jangan mengabaikan tahap kedua pelepasan kalor (pendinginan air hasil kondensasi dari $100^\\circ\\text{C}$ ke $40^\\circ\\text{C}$)."
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
