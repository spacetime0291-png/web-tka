/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Pemuaian Zat (fis-termo-kalor-pemuaian)
 * Slug: pemuaian-zat
 * Indikator: Pemuaian panjang (Delta L = L_0 * alpha * Delta T), luas, dan volume zat padat serta cair.
 * 
 * Total Butir Soal: 14 (Mudah: 9, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-pemuaian";
  const subTopicSlug = "pemuaian-zat";
  const questions = [
  {
    "id": "fis-termo-kalor-pemuaian-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Panjang Benda Padat",
    "difficulty": "mudah",
    "statement": "Sebuah kawat tembaga dengan panjang mula-mula $100\\text{ cm}$ dipanaskan sehingga suhunya naik sebesar $50^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, pertambahan panjang kawat tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}085\\text{ mm}$",
      "$0{,}85\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$17{,}0\\text{ mm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pertambahan panjang zat padat akibat kenaikan suhu dirumuskan oleh hukum pemuaian panjang:<br>$$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$<br>dengan $L_0$ adalah panjang mula-mula, $\\alpha$ koefisien muai panjang, dan $\\Delta T$ perubahan suhu.",
      "steps": "1. Identifikasi nilai yang diketahui:<br>$L_0 = 100\\text{ cm} = 1\\text{ m} = 1000\\text{ mm}$<br>$\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$<br>$\\Delta T = 50^\\circ\\text{C}$<br>2. Hitung pertambahan panjang $\\Delta L$:<br>$$\\Delta L = 1000\\text{ mm} \\times 1{,}7 \\times 10^{-5}/^\\circ\\text{C} \\times 50^\\circ\\text{C} = 0{,}85\\text{ mm}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Perhatikan satuan hasil akhir. $0{,}85\\text{ mm} = 0{,}085\\text{ cm} = 8{,}5 \\times 10^{-4}\\text{ m}$. Kesalahan konversi satuan panjang sering kali menyebabkan salah memilih antara opsi A dan B."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pertambahan panjang zat padat akibat kenaikan suhu dirumuskan oleh hukum pemuaian panjang: $$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$ dengan $L_0$ adalah panjang mula-mula, $\\alpha$ koefisien muai panjang, dan $\\Delta T$ perubahan suhu. **Tips:** Perhatikan satuan hasil akhir."
  },
  {
    "id": "fis-termo-kalor-pemuaian-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Koefisien Muai Zat Padat",
    "difficulty": "mudah",
    "statement": "Suatu bahan logam isotropik memiliki koefisien muai panjang sebesar $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Besar koefisien muai volume ($\\gamma$) dari logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}4 \\times 10^{-5}/^\\circ\\text{C}$",
      "$1{,}2 \\times 10^{-5}/^\\circ\\text{C}$",
      "$2{,}4 \\times 10^{-5}/^\\circ\\text{C}$",
      "$3{,}6 \\times 10^{-5}/^\\circ\\text{C}$",
      "$4{,}8 \\times 10^{-5}/^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Untuk benda padat isotropik (memiliki sifat fisis seragam ke segala arah), hubungan antara koefisien muai panjang ($\\alpha$), koefisien muai luas ($\\beta$), dan koefisien muai volume ($\\gamma$) adalah:<br>$$\\beta = 2\\alpha \\quad \\text{dan} \\quad \\gamma = 3\\alpha$$",
      "steps": "1. Diketahui nilai koefisien muai panjang $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$.<br>2. Hitung koefisien muai volume $\\gamma$:<br>$$\\gamma = 3\\alpha = 3 \\times (1{,}2 \\times 10^{-5}/^\\circ\\text{C}) = 3{,}6 \\times 10^{-5}/^\\circ\\text{C}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan tertukar dengan koefisien muai luas $\\beta = 2\\alpha = 2{,}4 \\times 10^{-5}/^\\circ\\text{C}$ (opsi C). Muai volume mewakili pemuaian pada tiga dimensi ruang sehingga faktor pengalinya adalah 3."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Untuk benda padat isotropik (memiliki sifat fisis seragam ke segala arah), hubungan antara koefisien muai panjang ($\\alpha$), koefisien muai luas ($\\beta$), dan koefisien muai volume ($\\gamma$) adalah: $$\\beta = 2\\alpha \\quad \\text{dan} \\quad \\gamma = 3\\alpha$$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Luas Keping Logam",
    "difficulty": "mudah",
    "statement": "Sekeping pelat aluminium memiliki luas $2\\text{ m}^2$ pada suhu $25^\\circ\\text{C}$. Pelat tersebut dipanaskan secara merata hingga suhunya mencapai $75^\\circ\\text{C}$. Jika koefisien muai panjang aluminium $\\alpha = 2{,}4 \\times 10^{-5}/^\\circ\\text{C}$, luas akhir pelat aluminium setelah dipanaskan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}0012\\text{ m}^2$",
      "$2{,}0024\\text{ m}^2$",
      "$2{,}0048\\text{ m}^2$",
      "$2{,}0240\\text{ m}^2$",
      "$2{,}0480\\text{ m}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pemuaian luas benda padat memenuhi persamaan:<br>$$\\Delta A = A_0 \\times \\beta \\times \\Delta T \\quad \\text{dengan} \\quad \\beta = 2\\alpha$$<br>Luas akhir benda setelah pemuaian adalah $A = A_0 + \\Delta A$.",
      "steps": "1. Hitung selisih suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.<br>2. Hitung koefisien muai luas:<br>$$\\beta = 2\\alpha = 2 \\times 2{,}4 \\times 10^{-5}/^\\circ\\text{C} = 4{,}8 \\times 10^{-5}/^\\circ\\text{C}$$<br>3. Hitung pertambahan luas $\\Delta A$:<br>$$\\Delta A = 2\\text{ m}^2 \\times 4{,}8 \\times 10^{-5}/^\\circ\\text{C} \\times 50^\\circ\\text{C} = 4{,}8 \\times 10^{-3}\\text{ m}^2 = 0{,}0048\\text{ m}^2$$<br>4. Hitung luas akhir $A$:<br>$$A = 2 + 0{,}0048 = 2{,}0048\\text{ m}^2$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Kesalahan umum adalah lupa mengalikan $\\alpha$ dengan 2 untuk mendapatkan koefisien muai luas $\\beta$, sehingga menghasilkan pertambahan $0{,}0024\\text{ m}^2$ (opsi B)."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pemuaian luas benda padat memenuhi persamaan: $$\\Delta A = A_0 \\times \\beta \\times \\Delta T \\quad \\text{dengan} \\quad \\beta = 2\\alpha$$ Luas akhir benda setelah pemuaian adalah $A = A_0 + \\Delta A$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Volume Kubus Logam",
    "difficulty": "mudah",
    "statement": "Sebuah kubus besi pejal dengan panjang rusuk awal $10\\text{ cm}$ dipanaskan dari suhu $30^\\circ\\text{C}$ sampai $130^\\circ\\text{C}$. Jika koefisien muai panjang besi adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$, pertambahan volume kubus besi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}2\\text{ cm}^3$",
      "$2{,}4\\text{ cm}^3$",
      "$3{,}6\\text{ cm}^3$",
      "$4{,}8\\text{ cm}^3$",
      "$7{,}2\\text{ cm}^3$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pertambahan volume pada pemuaian zat padat dinyatakan oleh:<br>$$\\Delta V = V_0 \\times \\gamma \\times \\Delta T \\quad \\text{dengan} \\quad \\gamma = 3\\alpha$$",
      "steps": "1. Hitung volume awal kubus: $V_0 = s^3 = (10\\text{ cm})^3 = 1000\\text{ cm}^3$.<br>2. Perubahan suhu: $\\Delta T = 130^\\circ\\text{C} - 30^\\circ\\text{C} = 100^\\circ\\text{C}$.<br>3. Koefisien muai volume besi: $\\gamma = 3\\alpha = 3 \\times 1{,}2 \\times 10^{-5} = 3{,}6 \\times 10^{-5}/^\\circ\\text{C}$.<br>4. Hitung $\\Delta V$:<br>$$\\Delta V = 1000 \\times 3{,}6 \\times 10^{-5} \\times 100 = 3{,}6\\text{ cm}^3$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Lupa mengalikan dengan 3 (hanya menggunakan $\\alpha$) akan menghasilkan $\\Delta V = 1{,}2\\text{ cm}^3$ (opsi A). Kubus memiliki pemuaian volume sehingga wajib menggunakan $\\gamma = 3\\alpha$."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pertambahan volume pada pemuaian zat padat dinyatakan oleh: $$\\Delta V = V_0 \\times \\gamma \\times \\Delta T \\quad \\text{dengan} \\quad \\gamma = 3\\alpha$$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Aplikasi Bimetal",
    "difficulty": "mudah",
    "statement": "Dua keping logam tipis X dan Y dengan panjang awal sama direkatkan erat membentuk keping bimetal. Koefisien muai panjang logam X lebih besar daripada koefisien muai panjang logam Y ($\\alpha_X > \\alpha_Y$). Jika keping bimetal tersebut dipanaskan hingga suhunya naik secara merata, peristiwa yang terjadi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Bimetal tetap lurus karena kedua logam saling menahan pemuaian",
      "Bimetal membengkok ke arah logam Y karena logam X memanjang lebih besar",
      "Bimetal membengkok ke arah logam X karena logam Y memanjang lebih besar",
      "Bimetal terlepas rekatannya tanpa mengalami pembengkokan",
      "Bimetal berputar membentuk lingkaran tertutup secara simetris"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Keping bimetal bekerja berdasarkan perbedaan koefisien muai panjang dua logam yang disatukan:<br>- Saat dipanaskan, logam dengan $\\alpha$ lebih besar akan memanjang lebih banyak sehingga berada pada sisi luar lengkungan (sisi cembung). Akibatnya, bimetal melengkung/membengkok ke arah logam yang memiliki $\\alpha$ lebih kecil.<br>- Sebaliknya saat didinginkan, logam dengan $\\alpha$ lebih besar menyusut lebih banyak sehingga bimetal membengkok ke arah logam dengan $\\alpha$ lebih besar.",
      "steps": "1. Diketahui $\\alpha_X > \\alpha_Y$.<br>2. Saat bimetal dipanaskan, logam X mengalami pemuaian panjang lebih besar daripada logam Y ($\\Delta L_X > \\Delta L_Y$).<br>3. Karena kedua logam terikat erat, logam X akan membentuk sisi luar yang lebih panjang dan mendesak bimetal membengkok ke sisi logam Y.<br>4. Jadi, bimetal membengkok ke arah logam Y.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Jangan terbalik dengan peristiwa pendinginan. Saat didinginkan, logam X menyusut lebih banyak sehingga bimetal justru membengkok ke arah logam X."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Keping bimetal bekerja berdasarkan perbedaan koefisien muai panjang dua logam yang disatukan: - Saat dipanaskan, logam dengan $\\alpha$ lebih besar akan memanjang lebih banyak sehingga berada pada sisi luar lengkungan (sisi cembung). Akibatnya, bimetal melengkung/membengkok ke arah logam yang memiliki $\\alpha$ lebih kecil. - Sebaliknya saat didinginkan, logam dengan $\\alpha$ lebih besar menyusut lebih banyak sehingga bimetal membengkok ke arah logam dengan $\\alpha$ lebih besar. **Tips:** Jangan terbalik dengan peristiwa pendinginan."
  },
  {
    "id": "fis-termo-kalor-pemuaian-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Semu Zat Cair",
    "difficulty": "sedang",
    "statement": "Sebuah bejana kaca berkapasitas $1000\\text{ mL}$ diisi penuh dengan raksa pada suhu $20^\\circ\\text{C}$. Bejana beserta isinya dipanaskan bersamaan hingga suhunya mencapai $120^\\circ\\text{C}$. Diketahui koefisien muai panjang kaca adalah $\\alpha_{\\text{kaca}} = 9 \\times 10^{-6}/^\\circ\\text{C}$ dan koefisien muai volume raksa adalah $\\gamma_{\\text{raksa}} = 1{,}8 \\times 10^{-4}/^\\circ\\text{C}$. Volume raksa yang tumpah akibat pemanasan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}7\\text{ mL}$",
      "$15{,}3\\text{ mL}$",
      "$17{,}1\\text{ mL}$",
      "$18{,}0\\text{ mL}$",
      "$20{,}7\\text{ mL}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat bejana dan zat cair di dalamnya dipanaskan bersama, keduanya mengalami pertambahan volume. Jika koefisien muai zat cair lebih besar daripada koefisien muai bejana, sebagian zat cair akan tumpah. Volume tumpah dihitung sebagai pemuaian semu:<br>$$\\Delta V_{\\text{tumpah}} = \\Delta V_{\\text{cair}} - \\Delta V_{\\text{bejana}} = V_0 (\\gamma_{\\text{cair}} - \\gamma_{\\text{bejana}}) \\Delta T$$<br>dengan $\\gamma_{\\text{bejana}} = 3\\alpha_{\\text{bejana}}$.",
      "steps": "1. Tentukan nilai parameter:<br>$V_0 = 1000\\text{ mL}$<br>$\\Delta T = 120^\\circ\\text{C} - 20^\\circ\\text{C} = 100^\\circ\\text{C}$<br>$\\gamma_{\\text{raksa}} = 1{,}8 \\times 10^{-4}/^\\circ\\text{C} = 180 \\times 10^{-6}/^\\circ\\text{C}$<br>$\\gamma_{\\text{kaca}} = 3 \\times \\alpha_{\\text{kaca}} = 3 \\times (9 \\times 10^{-6}) = 27 \\times 10^{-6}/^\\circ\\text{C}$<br>2. Hitung selisih koefisien muai volume:<br>$$\\gamma_{\\text{efektif}} = \\gamma_{\\text{raksa}} - \\gamma_{\\text{kaca}} = (180 - 27) \\times 10^{-6} = 153 \\times 10^{-6}/^\\circ\\text{C}$$<br>3. Hitung volume tumpah:<br>$$\\Delta V_{\\text{tumpah}} = 1000 \\times (153 \\times 10^{-6}) \\times 100 = 15{,}3\\text{ mL}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Lupa memperhitungkan pemuaian bejana kaca akan menghasilkan $\\Delta V = 1000 \\times 1{,}8 \\times 10^{-4} \\times 100 = 18\\text{ mL}$ (opsi D). Bejana kaca juga memuai sehingga ruang tampungnya bertambah sebesar $2{,}7\\text{ mL}$."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Saat bejana dan zat cair di dalamnya dipanaskan bersama, keduanya mengalami pertambahan volume. Jika koefisien muai zat cair lebih besar daripada koefisien muai bejana, sebagian zat cair akan tumpah. Volume tumpah dihitung sebagai pemuaian semu: $$\\Delta V_{\\text{tumpah}} = \\Delta V_{\\text{cair}} - \\Delta V_{\\text{bejana}} = V_0 (\\gamma_{\\text{cair}} - \\gamma_{\\text{bejana}}) \\Delta T$$ dengan $\\gamma_{\\text{bejana}} = 3\\alpha_{\\text{bejana}}$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pencegahan Lengkungan Rel Kereta Api",
    "difficulty": "sedang",
    "statement": "Batang rel kereta api terbuat dari baja dengan panjang masing-masing $20\\text{ meter}$ dipasang pada pagi hari saat suhu udara $20^\\circ\\text{C}$. Jika suhu maksimum di siang hari terik dapat mencapai $50^\\circ\\text{C}$ dan koefisien muai panjang baja $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$, celah minimum yang harus disediakan di antara dua ujung rel agar rel tidak saling bertumbukan dan melengkung adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}4\\text{ mm}$",
      "$3{,}6\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$7{,}2\\text{ mm}$",
      "$12{,}0\\text{ mm}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Celah antarbatang rel berfungsi memberikan ruang bebas bagi pemuaian panjang baja saat suhu lingkungan naik. Besar celah minimum setara dengan pertambahan panjang satu batang rel pada rentang kenaikan suhu maksimum:<br>$$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$",
      "steps": "1. Identifikasi data soal:<br>$L_0 = 20\\text{ m}$<br>$\\Delta T = 50^\\circ\\text{C} - 20^\\circ\\text{C} = 30^\\circ\\text{C}$<br>$\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$<br>2. Hitung pemuaian panjang rel:<br>$$\\Delta L = 20\\text{ m} \\times (1{,}2 \\times 10^{-5}/^\\circ\\text{C}) \\times 30^\\circ\\text{C} = 7{,}2 \\times 10^{-3}\\text{ m} = 7{,}2\\text{ mm}$$<br>3. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Pastikan menggunakan $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$, bukan suhu mutlak atau suhu akhir $50^\\circ\\text{C}$. Menggunakan $50^\\circ\\text{C}$ akan menghasilkan $12{,}0\\text{ mm}$ (opsi E)."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Celah antarbatang rel berfungsi memberikan ruang bebas bagi pemuaian panjang baja saat suhu lingkungan naik. Besar celah minimum setara dengan pertambahan panjang satu batang rel pada rentang kenaikan suhu maksimum: $$\\Delta L = L_0 \\times \\alpha \\times \\Delta T$$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemasangan Cincin Logam (Shrink Fitting)",
    "difficulty": "sedang",
    "statement": "Sebuah cincin tembaga memiliki diameter dalam $5{,}000\\text{ cm}$ pada suhu $25^\\circ\\text{C}$. Cincin tersebut hendak dipasang pada poros roda yang berdiameter $5{,}010\\text{ cm}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 2{,}0 \\times 10^{-5}/^\\circ\\text{C}$, suhu minimum cincin tembaga harus dipanaskan agar dapat tepat masuk ke poros roda adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$75^\\circ\\text{C}$",
      "$100^\\circ\\text{C}$",
      "$125^\\circ\\text{C}$",
      "$150^\\circ\\text{C}$",
      "$200^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pemuaian diameter lubang atau cincin mengikuti hukum pemuaian panjang linear pada dimensi diameternya:<br>$$\\Delta D = D_0 \\times \\alpha \\times \\Delta T \\implies \\Delta T = \\frac{\\Delta D}{D_0 \\times \\alpha}$$<br>Suhu akhir pemanasan cincin dihitung dari $T = T_0 + \\Delta T$.",
      "steps": "1. Tentukan pertambahan diameter yang diperlukan:<br>$$\\Delta D = 5{,}010\\text{ cm} - 5{,}000\\text{ cm} = 0{,}010\\text{ cm}$$<br>2. Hitung kenaikan suhu $\\Delta T$:<br>$$\\Delta T = \\frac{0{,}010\\text{ cm}}{5{,}000\\text{ cm} \\times 2{,}0 \\times 10^{-5}/^\\circ\\text{C}} = \\frac{0{,}010}{1{,}0 \\times 10^{-4}} = 100^\\circ\\text{C}$$<br>3. Hitung suhu akhir cincin $T$:<br>$$T = T_0 + \\Delta T = 25^\\circ\\text{C} + 100^\\circ\\text{C} = 125^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Pertanyaan meminta suhu akhir pemanasan ($T$), bukan sekadar kenaikan suhunya ($\\Delta T = 100^\\circ\\text{C}$, opsi B). Jangan lupa menambahkan suhu awal $25^\\circ\\text{C}$."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pemuaian diameter lubang atau cincin mengikuti hukum pemuaian panjang linear pada dimensi diameternya: $$\\Delta D = D_0 \\times \\alpha \\times \\Delta T \\implies \\Delta T = \\frac{\\Delta D}{D_0 \\times \\alpha}$$ Suhu akhir pemanasan cincin dihitung dari $T = T_0 + \\Delta T$."
  },
  {
    "id": "fis-termo-kalor-pemuaian-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pengaruh Suhu terhadap Massa Jenis",
    "difficulty": "sedang",
    "statement": "Sebuah balok padat memiliki massa jenis $\\rho_0 = 8000\\text{ kg/m}^3$ pada suhu $20^\\circ\\text{C}$. Logam tersebut memiliki koefisien muai volume $\\gamma = 5{,}0 \\times 10^{-5}/^\\circ\\text{C}$. Ketika balok tersebut dipanaskan hingga suhunya menjadi $220^\\circ\\text{C}$, penurunan massa jenis balok logam tersebut adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ kg/m}^3$",
      "$80\\text{ kg/m}^3$",
      "$120\\text{ kg/m}^3$",
      "$160\\text{ kg/m}^3$",
      "$200\\text{ kg/m}^3$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Massa benda konstan selama pemanasan ($m = \\rho \\times V$). Karena volume memuai ($V = V_0(1 + \\gamma \\Delta T)$), maka massa jenis benda berkurang:<br>$$\\rho = \\frac{m}{V_0(1 + \\gamma \\Delta T)} = \\frac{\\rho_0}{1 + \\gamma \\Delta T} \\approx \\rho_0 (1 - \\gamma \\Delta T)$$<br>Penurunan massa jenisnya adalah $\\Delta \\rho = \\rho_0 - \\rho \\approx \\rho_0 \\times \\gamma \\times \\Delta T$.",
      "steps": "1. Hitung kenaikan suhu: $\\Delta T = 220^\\circ\\text{C} - 20^\\circ\\text{C} = 200^\\circ\\text{C}$.<br>2. Hitung perkiraan penurunan massa jenis $\\Delta \\rho$:<br>$$\\Delta \\rho \\approx \\rho_0 \\times \\gamma \\times \\Delta T = 8000\\text{ kg/m}^3 \\times (5{,}0 \\times 10^{-5}/^\\circ\\text{C}) \\times 200^\\circ\\text{C}$$<br>$$\\Delta \\rho \\approx 8000 \\times 1{,}0 \\times 10^{-2} = 80\\text{ kg/m}^3$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Hati-hati dengan tanda dan makna 'penurunan massa jenis'. Massa jenis akhir adalah sekitar $7920\\text{ kg/m}^3$, sehingga penurunannya adalah $80\\text{ kg/m}^3$."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Massa benda konstan selama pemanasan ($m = \\rho \\times V$). Karena volume memuai ($V = V_0(1 + \\gamma \\Delta T)$), maka massa jenis benda berkurang: $$\\rho = \\frac{m}{V_0(1 + \\gamma \\Delta T)} = \\frac{\\rho_0}{1 + \\gamma \\Delta T} \\approx \\rho_0 (1 - \\gamma \\Delta T)$$ Penurunan massa jenisnya adalah $\\Delta \\rho = \\rho_0 - \\rho \\approx \\rho_0 \\times \\gamma \\times \\Delta T$. **Tips:** Hati-hati dengan tanda dan makna 'penurunan massa jenis'."
  },
  {
    "id": "fis-termo-kalor-pemuaian-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Anomali Air dan Ekosistem Perairan",
    "difficulty": "sedang",
    "statement": "Pada musim dingin yang sangat dingin di daerah subtropis, permukaan danau membeku menjadi lapisan es padat, namun organisme air seperti ikan tetap dapat bertahan hidup di dasar danau. Fenomena fisika ini dapat dijelaskan berdasarkan sifat anomali air, yaitu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Air memiliki kalor jenis paling rendah pada suhu $0^\\circ\\text{C}$ sehingga es cepat melepas kalor ke atmosfer",
      "Air memuai saat dipanaskan dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$ sehingga air hangat terapung di atas es",
      "Air memiliki massa jenis terbesar pada suhu $4^\\circ\\text{C}$, sehingga air bersuhu $4^\\circ\\text{C}$ tenggelam ke dasar danau dan tidak membeku",
      "Es memiliki kerapatan lebih besar daripada air cair sehingga es tenggelam ke dasar danau",
      "Air melepaskan kalor laten pembekuan ke arah dasar danau sehingga memanaskan dasar perairan"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Air mengalami fenomena anomali termal antara rentang suhu $0^\\circ\\text{C}$ sampai $4^\\circ\\text{C}$:<br>- Saat dipanaskan dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$, volumenya menyusut dan massa jenisnya bertambah.<br>- Pada suhu tepat $4^\\circ\\text{C}$, air mencapai volume minimum dan massa jenis maksimum ($\\rho_{\\text{maks}} \\approx 1000\\text{ kg/m}^3$).<br>- Air terpadat ini turun ke dasar danau, sedangkan air yang lebih dingin ($< 4^\\circ\\text{C}$) dan lapisan es terapung di permukaan karena massa jenis es lebih kecil dari air cair.",
      "steps": "1. Analisis sifat air pada musim dingin:<br>Saat udara dingin mendinginkan permukaan danau hingga $4^\\circ\\text{C}$, air permukaan mencapai kerapatan maksimum dan turun ke dasar.<br>2. Ketika suhu air permukaan turun lagi dari $4^\\circ\\text{C}$ menuju $0^\\circ\\text{C}$, massa jenisnya justru mengecil sehingga air tetap berada di permukaan dan akhirnya membeku menjadi es.<br>3. Karena es terapung dan menjadi isolator termal, bagian dasar danau tetap berupa air cair bersuhu sekitar $4^\\circ\\text{C}$ yang memungkinkan biota air bertahan hidup.<br>4. Jadi, penjelasan yang tepat adalah pilihan C.",
      "pitfalls": "Pernyataan pada opsi B keliru karena dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$ air menyusut (bukan memuai). Opsi D juga salah karena es memiliki massa jenis lebih kecil daripada air, bukan lebih besar."
    },
    "subTopicSlug": "pemuaian-zat",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Air mengalami fenomena anomali termal antara rentang suhu $0^\\circ\\text{C}$ sampai $4^\\circ\\text{C}$: - Saat dipanaskan dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$, volumenya menyusut dan massa jenisnya bertambah. - Pada suhu tepat $4^\\circ\\text{C}$, air mencapai volume minimum dan massa jenis maksimum ($\\rho_{\\text{maks}} \\approx 1000\\text{ kg/m}^3$). - Air terpadat ini turun ke dasar danau, sedangkan air yang lebih dingin ($< 4^\\circ\\text{C}$) dan lapisan es terapung di permukaan karena massa jenis es lebih kecil dari air cair. **Tips:** Pernyataan pada keliru karena dari $0^\\circ\\text{C}$ ke $4^\\circ\\text{C}$ air menyusut (bukan memuai)."
  },
  {
    "id": "sup-fis-ter-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Panjang Benda Padat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebatang rel baja memiliki panjang awal $10\\text{ meter}$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang baja tersebut adalah $\\alpha = 1{,}2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pada siang hari terik suhu rel meningkat menjadi $50^\\circ\\text{C}$, maka pertambahan panjang rel baja tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}6\\text{ mm}$",
      "$1{,}8\\text{ mm}$",
      "$2{,}4\\text{ mm}$",
      "$4{,}8\\text{ mm}$",
      "$0{,}36\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Panjang Benda Padat:</strong><br>Pertambahan panjang zat padat sebanding dengan panjang mula-mula, koefisien muai panjang, dan kenaikan suhu: $\\Delta L = L_0 \\alpha \\Delta T$.</div>",
      "steps": "<ol><li>Panjang mula-mula: $L_0 = 10\\text{ m}$.</li><li>Perubahan suhu: $\\Delta T = 50 - 20 = 30^\\circ\\text{C}$.</li><li>Pertambahan panjang: $\\Delta L = 10 \\times (1{,}2 \\times 10^{-5}) \\times 30 = 3{,}6 \\times 10^{-3}\\text{ m} = 3{,}6\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan dengan suhu akhir $50^\\circ\\text{C}$ tanpa mengurangkan suhu awal $20^\\circ\\text{C}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat",
    "hint": "Pemuaian Panjang Benda Padat: Pertambahan panjang zat padat sebanding dengan panjang mula-mula, koefisien muai panjang, dan kenaikan suhu: $\\Delta L = L_0 \\alpha \\Delta T$. **Tips:** Mengalikan dengan suhu akhir $50^\\circ\\text{C}$ tanpa mengurangkan suhu awal $20^\\circ\\text{C}$."
  },
  {
    "id": "drill-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Luas Keping Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat kuningan memiliki luas mula-mula $A_0 = 2\\text{ m}^2$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang kuningan adalah $\\alpha = 2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pelat tersebut dipanaskan hingga suhunya menjadi $70^\\circ\\text{C}$, pertambahan luas pelat kuningan tersebut ($\\Delta A$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4 \\times 10^{-3}\\text{ m}^2$",
      "$2 \\times 10^{-3}\\text{ m}^2$",
      "$8 \\times 10^{-3}\\text{ m}^2$",
      "$4 \\times 10^{-4}\\text{ m}^2$",
      "$1 \\times 10^{-3}\\text{ m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Koefisien Pemuaian:</strong><br>• Koefisien muai luas adalah dua kali koefisien muai panjang: $\\beta = 2\\alpha$<br>• Pertambahan luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T = A_0 \\cdot (2\\alpha) \\cdot \\Delta T$</div>",
      "steps": "<ol><li>Koefisien muai luas: $\\beta = 2 \\times (2 \\times 10^{-5}) = 4 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Kenaikan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li><li>Pertambahan luas: $\\Delta A = 2 \\times (4 \\times 10^{-5}) \\times 50 = 400 \\times 10^{-5} = 4 \\times 10^{-3}\\text{ m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan 1-2-3 Dimensi:</strong><br>Panjang $\\implies \\alpha$<br>Luas $\\implies \\beta = 2\\alpha$<br>Volume $\\implies \\gamma = 3\\alpha$</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat",
    "hint": "Hubungan Koefisien Pemuaian: • Koefisien muai luas adalah dua kali koefisien muai panjang: $\\beta = 2\\alpha$ • Pertambahan luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T = A_0 \\cdot (2\\alpha) \\cdot \\Delta T$."
  },
  {
    "id": "drill-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Pemuaian Volume Kubus Logam",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kubus tembaga memiliki volume awal $V_0 = 1000\\text{ cm}^3$ pada suhu $0^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka koefisien muai volume ($\\gamma$) dan pertambahan volume kubus ($\\Delta V$) saat dipanaskan hingga $100^\\circ\\text{C}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 1{,}7\\text{ cm}^3$",
      "$\\gamma = 3{,}4 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 3{,}4\\text{ cm}^3$",
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 51\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Pemuaian Volume Zat Padat:</strong><br>$$\\gamma = 3\\alpha$$<br>$$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Hitung $\\gamma$: $\\gamma = 3 \\times 1{,}7 \\times 10^{-5} = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Hitung $\\Delta V$: $\\Delta V = 1000 \\times (5{,}1 \\times 10^{-5}) \\times 100 = 5{,}1\\text{ cm}^3$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Menggunakan nilai $\\alpha$ langsung untuk menghitung pemuaian ruang/volume tanpa mengalikan dengan 3.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat",
    "hint": "Pemuaian Volume Zat Padat: $$\\gamma = 3\\alpha$$ $$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$. **Tips:** Menggunakan nilai $\\alpha$ langsung untuk menghitung pemuaian ruang/volume tanpa mengalikan dengan 3."
  },
  {
    "id": "drill2-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-pemuaian",
    "category": "Penyusutan Panjang Akibat Pendinginan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Seutas kawat tembaga dengan panjang $L_0 = 5\\text{ meter}$ mula-mula bersuhu $80^\\circ\\text{C}$. Kawat tersebut didinginkan hingga suhunya turun menjadi $30^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka pengurangan panjang (penyusutan) kawat tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}25\\text{ mm}$",
      "$2{,}55\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$0{,}425\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Penyusutan Termal:</strong><br>$$\\Delta L = L_0 \\cdot \\alpha \\cdot |\\Delta T|$$</div>",
      "steps": "<ol><li>Penurunan suhu: $|\\Delta T| = 80 - 30 = 50^\\circ\\text{C}$.</li><li>Hitung penyusutan: $\\Delta L = 5 \\times (1{,}7 \\times 10^{-5}) \\times 50 = 425 \\times 10^{-5}\\text{ m} = 4{,}25 \\times 10^{-3}\\text{ m} = 4{,}25\\text{ mm}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Simetri Pemuaian:</strong> Rumus pemuaian berlaku dua arah: bertambah panjang saat dipanaskan ($Delta T > 0$) dan menyusut sama besarnya saat didinginkan ($Delta T < 0$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Pemuaian Zat",
    "subTopic": "Pemuaian Zat",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "pemuaian-zat",
    "hint": "Penyusutan Termal: $$\\Delta L = L_0 \\cdot \\alpha \\cdot |\\Delta T|$$."
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
