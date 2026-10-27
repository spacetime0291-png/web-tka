/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Rangkaian Seri dan Paralel (fis-lis-dc-rangkaian)
 * Slug: rangkaian-seri-paralel
 * Indikator: Hambatan pengganti seri, paralel, pembagi tegangan, dan pembagi arus listrik.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-rangkaian";
  const subTopicSlug = "rangkaian-seri-paralel";
  const questions = [
  {
    "id": "fis-lis-dc-rangkaian-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Hukum I Kirchhoff dan Kekekalan Muatan",
    "difficulty": "mudah",
    "statement": "Pada suatu titik percabangan rangkaian listrik tertutup, terdapat lima kawat penghantar. Arus listrik yang masuk ke titik percabangan adalah $I_1 = 4\\text{ A}$ dan $I_2 = 6\\text{ A}$. Arus yang keluar dari titik percabangan melalui dua kawat lainnya adalah $I_3 = 3\\text{ A}$ dan $I_4 = 5\\text{ A}$. Berdasarkan Hukum I Kirchhoff, besar dan arah arus pada kawat kelima ($I_5$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ A}$, meninggalkan titik percabangan",
      "$2\\text{ A}$, menuju titik percabangan",
      "$8\\text{ A}$, meninggalkan titik percabangan",
      "$10\\text{ A}$, menuju titik percabangan",
      "$18\\text{ A}$, meninggalkan titik percabangan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum I Kirchhoff (Kirchhoff's Current Law / KCL) berlandaskan prinsip kekekalan muatan listrik, yang menyatakan bahwa jumlah aljabar arus listrik yang masuk ke suatu titik percabangan sama dengan jumlah arus yang keluar dari titik percabangan tersebut:<br>$$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$",
      "steps": "1. Hitung total arus masuk yang diketahui:<br>$$\\Sigma I_{\\text{masuk, diketahui}} = I_1 + I_2 = 4\\text{ A} + 6\\text{ A} = 10\\text{ A}$$<br>2. Hitung total arus keluar yang diketahui:<br>$$\\Sigma I_{\\text{keluar, diketahui}} = I_3 + I_4 = 3\\text{ A} + 5\\text{ A} = 8\\text{ A}$$<br>3. Karena total arus masuk ($10\\text{ A}$) lebih besar dari total arus keluar ($8\\text{ A}$), maka kawat kelima harus mengalirkan arus keluar dari titik percabangan agar seimbang:<br>$$10\\text{ A} = 8\\text{ A} + I_5 \\implies I_5 = 10\\text{ A} - 8\\text{ A} = 2\\text{ A}$$<br>4. Jadi arus $I_5$ bernilai $2\\text{ A}$ dengan arah meninggalkan (keluar dari) titik percabangan (pilihan A).",
      "pitfalls": "Salah menentukan arah arus (mengira masuk ke percabangan) sehingga salah memilih pilihan B."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$. **Tips:** Salah menentukan arah arus (mengira masuk ke percabangan) sehingga salah memilih ."
  },
  {
    "id": "fis-lis-dc-rangkaian-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Pembagi Tegangan pada Rangkaian Seri",
    "difficulty": "mudah",
    "statement": "Dua buah resistor $R_1 = 20\\,\\Omega$ dan $R_2 = 30\\,\\Omega$ dihubungkan secara seri dengan sumber tegangan searah $V = 15\\text{ Volt}$. Besar beda potensial pada ujung-ujung resistor $R_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\text{ Volt}$",
      "$6\\text{ Volt}$",
      "$9\\text{ Volt}$",
      "$10\\text{ Volt}$",
      "$12\\text{ Volt}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada rangkaian seri, arus yang mengalir pada setiap resistor sama besar ($I = \\text{konstan}$). Tegangan terbagi sebanding dengan nilai masing-masing hambatan (prinsip pembagi tegangan):<br>$$V_2 = \\frac{R_2}{R_1 + R_2} V$$",
      "steps": "1. Hitung hambatan total seri:<br>$$R_{\\text{total}} = R_1 + R_2 = 20\\,\\Omega + 30\\,\\Omega = 50\\,\\Omega$$<br>2. Hitung kuat arus rangkaian:<br>$$I = \\frac{V}{R_{\\text{total}}} = \\frac{15\\text{ V}}{50\\,\\Omega} = 0{,}3\\text{ A}$$<br>3. Hitung beda potensial pada $R_2$:<br>$$V_2 = I \\times R_2 = 0{,}3\\text{ A} \\times 30\\,\\Omega = 9\\text{ Volt}$$<br>4. Jadi beda potensial pada $R_2$ adalah $9\\text{ Volt}$ (pilihan C).",
      "pitfalls": "Tertukar menghitung tegangan pada $R_1$ ($V_1 = 0{,}3 \\times 20 = 6\\text{ Volt}$) alih-alih tegangan pada $R_2$."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Pada rangkaian seri, arus yang mengalir pada setiap resistor sama besar ($I = \\text{konstan}$). Tegangan terbagi sebanding dengan nilai masing-masing hambatan (prinsip pembagi tegangan): $$V_2 = \\frac{R_2}{R_1 + R_2} V$$."
  },
  {
    "id": "fis-lis-dc-rangkaian-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Pembagi Arus pada Rangkaian Paralel",
    "difficulty": "mudah",
    "statement": "Dua buah resistor $R_1 = 6\\,\\Omega$ dan $R_2 = 12\\,\\Omega$ dihubungkan secara paralel. Jika arus total yang masuk ke titik percabangan paralel tersebut adalah $I_{\\text{total}} = 3\\text{ Ampere}$, kuat arus yang mengalir melalui resistor $R_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}5\\text{ Ampere}$",
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$",
      "$2{,}5\\text{ Ampere}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Pada rangkaian paralel, beda potensial pada setiap cabang sama besar. Kuat arus pada cabang terbagi berbanding terbalik dengan nilai hambatannya (prinsip pembagi arus):<br>$$I_1 = \\frac{R_2}{R_1 + R_2} I_{\\text{total}}$$",
      "steps": "1. Gunakan rumus pembagi arus untuk cabang $R_1$:<br>$$I_1 = \\frac{R_2}{R_1 + R_2} \\times I_{\\text{total}}$$<br>2. Masukkan data: $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $I_{\\text{total}} = 3\\text{ A}$:<br>$$I_1 = \\frac{12}{6 + 12} \\times 3\\text{ A} = \\frac{12}{18} \\times 3\\text{ A} = \\frac{2}{3} \\times 3\\text{ A} = 2\\text{ Ampere}$$<br>3. Jadi kuat arus pada resistor $R_1$ adalah $2\\text{ Ampere}$ (pilihan D).",
      "pitfalls": "Siswa sering menggunakan perbandingan langsung $\\frac{R_1}{R_1+R_2}$ seperti pada pembagi tegangan, sehingga keliru menghitung $I_1 = 1\\text{ A}$."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Pada rangkaian paralel, beda potensial pada setiap cabang sama besar. Kuat arus pada cabang terbagi berbanding terbalik dengan nilai hambatannya (prinsip pembagi arus): $$I_1 = \\frac{R_2}{R_1 + R_2} I_{\\text{total}}$$."
  },
  {
    "id": "fis-lis-dc-rangkaian-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Arus Total Rangkaian Kombinasi Resistor",
    "difficulty": "mudah",
    "statement": "Resistor $R_1 = 4\\,\\Omega$ dan $R_2 = 12\\,\\Omega$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai seri dengan resistor $R_3 = 5\\,\\Omega$. Rangkaian kombinasi tersebut dihubungkan ke sumber tegangan ideal $24\\text{ Volt}$. Kuat arus listrik total yang keluar dari sumber tegangan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}5\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$3\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$6\\text{ Ampere}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk mencari arus total rangkaian kombinasi, sederhanakan rangkaian terlebih dahulu menjadi hambatan pengganti total ($R_{\\text{total}}$), kemudian gunakan Hukum Ohm: $I_{\\text{total}} = \\frac{V}{R_{\\text{total}}}$.",
      "steps": "1. Hitung hambatan pengganti paralel $R_1$ dan $R_2$:<br>$$R_p = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3\\,\\Omega$$<br>2. Hitung hambatan pengganti total ($R_p$ seri dengan $R_3$):<br>$$R_{\\text{total}} = R_p + R_3 = 3\\,\\Omega + 5\\,\\Omega = 8\\,\\Omega$$<br>3. Hitung arus total dari sumber $V = 24\\text{ V}$:<br>$$I_{\\text{total}} = \\frac{V}{R_{\\text{total}}} = \\frac{24\\text{ V}}{8\\,\\Omega} = 3\\text{ Ampere}$$<br>4. Jadi arus totalnya adalah $3\\text{ Ampere}$ (pilihan C).",
      "pitfalls": "Menjumlahkan ketiga resistor secara seri ($4 + 12 + 5 = 21\\,\\Omega$) tanpa menyelesaikan susunan paralel $R_1$ dan $R_2$ terlebih dahulu."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Untuk mencari arus total rangkaian kombinasi, sederhanakan rangkaian terlebih dahulu menjadi hambatan pengganti total ($R_{\\text{total}}$), kemudian gunakan Hukum Ohm: $I_{\\text{total}} = \\frac{V}{R_{\\text{total}}}$."
  },
  {
    "id": "fis-lis-dc-rangkaian-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Tegangan Jepit Baterai dengan Hambatan Dalam",
    "difficulty": "mudah",
    "statement": "Sebuah baterai memiliki Gaya Gerak Listrik (GGL) $\\mathcal{E} = 12\\text{ Volt}$ dan hambatan dalam $r = 0{,}5\\,\\Omega$. Jika baterai tersebut dihubungkan dengan sebuah lampu pijar yang memiliki hambatan $R = 5{,}5\\,\\Omega$, besar tegangan jepit antara kedua kutub baterai saat rangkaian tertutup adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ Volt}$",
      "$11\\text{ Volt}$",
      "$11{,}5\\text{ Volt}$",
      "$12\\text{ Volt}$",
      "$12{,}5\\text{ Volt}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Tegangan jepit ($V_{\\text{jepit}}$) adalah beda potensial antara kutub-kutub sumber tegangan ketika arus listrik mengalir. Tegangan jepit selalu lebih kecil daripada GGL ($\\mathcal{E}$) karena adanya tegangan jatuh pada hambatan dalam ($I r$):<br>$$V_{\\text{jepit}} = \\mathcal{E} - I r = I R$$",
      "steps": "1. Hitung hambatan total rangkaian tertutup:<br>$$R_{\\text{total}} = R + r = 5{,}5\\,\\Omega + 0{,}5\\,\\Omega = 6{,}0\\,\\Omega$$<br>2. Hitung arus yang mengalir pada rangkaian:<br>$$I = \\frac{\\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{6\\,\\Omega} = 2\\text{ Ampere}$$<br>3. Hitung tegangan jepit baterai:<br>$$V_{\\text{jepit}} = \\mathcal{E} - I r = 12\\text{ V} - (2\\text{ A} \\times 0{,}5\\,\\Omega) = 12\\text{ V} - 1\\text{ V} = 11\\text{ Volt}$$<br>(Atau melalui $V_{\\text{jepit}} = I R = 2\\text{ A} \\times 5{,}5\\,\\Omega = 11\\text{ Volt}$).<br>4. Jadi tegangan jepit baterai adalah $11\\text{ Volt}$ (pilihan B).",
      "pitfalls": "Siswa sering menganggap tegangan jepit selalu sama dengan nilai GGL baterai ($12\\text{ V}$), mengabaikan rugi tegangan jatuh internal sebesar $I r = 1\\text{ V}$."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Tegangan jepit ($V_{\\text{jepit}}$) adalah beda potensial antara kutub-kutub sumber tegangan ketika arus listrik mengalir. Tegangan jepit selalu lebih kecil daripada GGL ($\\mathcal{E}$) karena adanya tegangan jatuh pada hambatan dalam ($I r$): $$V_{\\text{jepit}} = \\mathcal{E} - I r = I R$$."
  },
  {
    "id": "fis-lis-dc-rangkaian-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Hukum II Kirchhoff Rangkaian Satu Loop",
    "difficulty": "sedang",
    "statement": "Suatu rangkaian listrik satu loop tertutup memuat dua buah sumber tegangan dan tiga buah resistor yang dirangkai seri: $\\mathcal{E}_1 = 18\\text{ Volt}$, $\\mathcal{E}_2 = 6\\text{ Volt}$ (dengan kutub positif kedua baterai saling berhadapan), serta resistor $R_1 = 2\\,\\Omega$, $R_2 = 3\\,\\Omega$, dan $R_3 = 5\\,\\Omega$. Jika hambatan dalam baterai diabaikan, besar kuat arus listrik yang mengalir dalam loop dan daya yang diserap oleh resistor $R_3$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}2\\text{ A}$ dan $7{,}2\\text{ W}$",
      "$1{,}2\\text{ A}$ dan $6{,}0\\text{ W}$",
      "$2{,}4\\text{ A}$ dan $28{,}8\\text{ W}$",
      "$0{,}8\\text{ A}$ dan $3{,}2\\text{ W}$",
      "$1{,}8\\text{ A}$ dan $16{,}2\\text{ W}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum II Kirchhoff menyatakan bahwa jumlah aljabar perubahan potensial dalam suatu rangkaian tertutup (loop) sama dengan nol:<br>$$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$$<br>Daya disipasi pada suatu resistor adalah $P = I^2 R$.",
      "steps": "1. Tinjau arah loop searah putaran arus dominan yang didorong oleh $\\mathcal{E}_1$. Karena kutub positif saling berhadapan, kedua sumber tegangan saling melawan:<br>$$\\Sigma \\mathcal{E} = \\mathcal{E}_1 - \\mathcal{E}_2 = 18\\text{ V} - 6\\text{ V} = 12\\text{ Volt}$$<br>2. Hambatan total rangkaian seri:<br>$$R_{\\text{total}} = R_1 + R_2 + R_3 = 2\\,\\Omega + 3\\,\\Omega + 5\\,\\Omega = 10\\,\\Omega$$<br>3. Hitung kuat arus rangkaian:<br>$$I = \\frac{\\Sigma \\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{10\\,\\Omega} = 1{,}2\\text{ Ampere}$$<br>4. Hitung daya yang diserap oleh resistor $R_3 = 5\\,\\Omega$:<br>$$P_3 = I^2 R_3 = (1{,}2\\text{ A})^2 \\times 5\\,\\Omega = 1{,}44 \\times 5 = 7{,}2\\text{ Watt}$$<br>5. Jadi kuat arus adalah $1{,}2\\text{ A}$ dan dayanya adalah $7{,}2\\text{ W}$ (pilihan A).",
      "pitfalls": "Siswa sering menjumlahkan kedua sumber tegangan ($18 + 6 = 24\\text{ V}$) karena tidak memperhatikan orientasi kutub positif yang saling berhadapan (berlawanan tanda)."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan perumusan konsep fisis: $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$$ Daya disipasi pada suatu resistor adalah $P = I^2 R$."
  },
  {
    "id": "fis-lis-dc-rangkaian-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Analisis Arus Rangkaian Dua Loop",
    "difficulty": "sedang",
    "statement": "Suatu rangkaian listrik dua loop memiliki tiga cabang paralel yang bertemu di titik simpul $A$ (atas) dan $B$ (bawah):<br>- Cabang kiri memuat sumber tegangan $\\mathcal{E}_1 = 12\\text{ V}$ (kutub positif menghadap ke $A$) dan resistor $R_1 = 4\\,\\Omega$.<br>- Cabang tengah memuat resistor $R_2 = 2\\,\\Omega$ saja tanpa sumber tegangan.<br>- Cabang kanan memuat sumber tegangan $\\mathcal{E}_2 = 6\\text{ V}$ (kutub positif menghadap ke $A$) dan resistor $R_3 = 4\\,\\Omega$.<br>Besar kuat arus listrik yang mengalir melalui resistor $R_2$ pada cabang tengah adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}00\\text{ Ampere}$",
      "$1{,}50\\text{ Ampere}$",
      "$2{,}25\\text{ Ampere}$",
      "$3{,}00\\text{ Ampere}$",
      "$4{,}50\\text{ Ampere}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Analisis tegangan simpul (Nodal Analysis) menerapkan KCL pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$).",
      "steps": "1. Tetapkan potensial acuan pada simpul $B$: $V_B = 0$. Misalkan potensial pada simpul $A$ adalah $V_A = V$.<br>2. Tuliskan persamaan arus yang meninggalkan simpul $A$ untuk ketiga cabang:<br>- Cabang kiri: $I_{\\text{kiri}} = \\frac{V - 12}{4}$<br>- Cabang tengah: $I_{\\text{tengah}} = \\frac{V - 0}{2}$<br>- Cabang kanan: $I_{\\text{kanan}} = \\frac{V - 6}{4}$<br>3. Terapkan Hukum I Kirchhoff pada simpul $A$:<br>$$\\frac{V - 12}{4} + \\frac{V}{2} + \\frac{V - 6}{4} = 0$$<br>Kalikan seluruh persamaan dengan 4:<br>$$(V - 12) + 2V + (V - 6) = 0 \\implies 4V - 18 = 0 \\implies V = \\frac{18}{4} = 4{,}5\\text{ Volt}$$<br>4. Hitung arus pada cabang tengah melalui resistor $R_2 = 2\\,\\Omega$:<br>$$I_2 = \\frac{V_A - 0}{R_2} = \\frac{4{,}5\\text{ V}}{2\\,\\Omega} = 2{,}25\\text{ Ampere}$$<br>5. Jadi kuat arus pada cabang tengah adalah $2{,}25\\text{ Ampere}$ (pilihan C).",
      "pitfalls": "Kesalahan tanda saat menuliskan persamaan loop atau salah memasukkan polaritas baterai, serta kekeliruan aritmetika pecahan."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Analisis tegangan simpul (Nodal Analysis) menerapkan KCL pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$). **Tips:** Kesalahan tanda saat menuliskan persamaan loop atau salah memasukkan polaritas baterai, serta kekeliruan aritmetika pecahan."
  },
  {
    "id": "fis-lis-dc-rangkaian-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Prinsip Kesetimbangan Jembatan Wheatstone",
    "difficulty": "sedang",
    "statement": "Lima buah resistor dirangkai dalam konfigurasi jembatan Wheatstone. Resistor $R_1 = 4\\,\\Omega$, $R_2 = 6\\,\\Omega$, $R_3 = 12\\,\\Omega$, dan $R_4 = 18\\,\\Omega$ membentuk empat lengan jembatan, sedangkan sebuah galvanometer dengan hambatan dalam $R_G = 10\\,\\Omega$ dipasang melintang pada jembatan diagonal di antara kedua lengan. Jika ujung-ujung jembatan dihubungkan ke sumber tegangan $20\\text{ Volt}$, kuat arus listrik yang mengalir melalui galvanometer adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ Ampere}$",
      "$0{,}5\\text{ Ampere}$",
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jembatan Wheatstone dikatakan setimbang apabila hasil kali nilai resistansi lengan yang saling berseberangan bernilai sama:<br>$$R_1 \\times R_4 = R_2 \\times R_3$$<br>Dalam keadaan setimbang, potensial pada kedua ujung cabang diagonal bernilai sama sehingga tidak ada arus yang mengalir melalui cabang tengah ($I_G = 0$).",
      "steps": "1. Periksa syarat kesetimbangan jembatan dengan mengalikan lengan-lengan yang bersilangan:<br>$$R_1 \\times R_4 = 4\\,\\Omega \\times 18\\,\\Omega = 72\\,\\Omega^2$$<br>$$R_2 \\times R_3 = 6\\,\\Omega \\times 12\\,\\Omega = 72\\,\\Omega^2$$<br>2. Karena $R_1 R_4 = R_2 R_3 = 72\\,\\Omega^2$, maka jembatan berada dalam keadaan setimbang sempurna.<br>3. Beda potensial pada ujung-ujung galvanometer bernilai nol ($\\Delta V_G = 0$).<br>4. Berdasarkan Hukum Ohm, arus yang melalui galvanometer adalah:<br>$$I_G = \\frac{\\Delta V_G}{R_G} = \\frac{0}{10\\,\\Omega} = 0\\text{ Ampere}$$<br>5. Jadi kuat arus pada galvanometer adalah $0\\text{ Ampere}$ (pilihan A).",
      "pitfalls": "Mencoba menghitung arus dengan analisis loop yang rumit tanpa memeriksa terlebih dahulu perkalian silang lengan jembatan yang menunjukkan kondisi setimbang."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Jembatan Wheatstone dikatakan setimbang apabila hasil kali nilai resistansi lengan yang saling berseberangan bernilai sama: $$R_1 \\times R_4 = R_2 \\times R_3$$ Dalam keadaan setimbang, potensial pada kedua ujung cabang diagonal bernilai sama sehingga tidak ada arus yang mengalir melalui cabang tengah ($I_G = 0$)."
  },
  {
    "id": "fis-lis-dc-rangkaian-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Perluasan Batas Ukur Amperemeter (Hambatan Shunt)",
    "difficulty": "sedang",
    "statement": "Sebuah galvanometer (amperemeter dasar) memiliki hambatan dalam $R_A = 90\\,\\Omega$ dan batas ukur arus maksimum sebesar $10\\text{ mA}$. Agar alat tersebut dapat digunakan untuk mengukur arus listrik hingga mencapai batas ukur baru sebesar $100\\text{ mA}$, besar hambatan cabang (shunt) yang harus dipasang secara paralel adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\,\\Omega$",
      "$9\\,\\Omega$",
      "$10\\,\\Omega$",
      "$90\\,\\Omega$",
      "$810\\,\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk memperbesar batas ukur amperemeter sebanyak $n$ kali lipat ($n = \\frac{I}{I_A}$), dipasang resistor shunt ($R_{sh}$) secara paralel dengan galvanometer:<br>$$R_{sh} = \\frac{R_A}{n - 1}$$",
      "steps": "1. Hitung faktor perbesaran batas ukur ($n$):<br>$$n = \\frac{I_{\\text{baru}}}{I_{\\text{lama}}} = \\frac{100\\text{ mA}}{10\\text{ mA}} = 10$$<br>2. Hitung hambatan shunt yang diperlukan:<br>$$R_{sh} = \\frac{R_A}{n - 1} = \\frac{90\\,\\Omega}{10 - 1} = \\frac{90\\,\\Omega}{9} = 10\\,\\Omega$$<br>3. Jadi besar hambatan shunt yang harus dipasang secara paralel adalah $10\\,\\Omega$ (pilihan C).",
      "pitfalls": "Membagi langsung dengan $n$ ($90 / 10 = 9\\,\\Omega$) tanpa mengurangkan angka satu pada penyebut ($n - 1$), atau tertukar dengan rumus hambatan muka voltmeter ($R_m = (n - 1) R_V$)."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Untuk memperbesar batas ukur amperemeter sebanyak $n$ kali lipat ($n = \\frac{I}{I_A}$), dipasang resistor shunt ($R_{sh}$) secara paralel dengan galvanometer: $$R_{sh} = \\frac{R_A}{n - 1}$$."
  },
  {
    "id": "fis-lis-dc-rangkaian-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Kondisi Transien dan Tunak Rangkaian RC Arus Searah",
    "difficulty": "sedang",
    "statement": "Sebuah kapasitor yang mula-mula kosong berkapasitas $C = 10\\,\\mu\\text{F}$ dirangkai seri dengan sebuah resistor $R = 100\\,\\text{k}\\Omega$ dan dihubungkan ke sumber tegangan arus searah $V = 12\\text{ Volt}$ melalui sebuah sakelar. Tepat pada saat sakelar baru ditutup ($t = 0$), kuat arus yang mengalir dalam rangkaian adalah $I_0$, dan setelah sakelar tertutup sangat lama hingga mencapai keadaan tunak ($t \\to \\infty$), kuat arus dalam rangkaian adalah $I_\\infty$. Nilai $I_0$ dan $I_\\infty$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}12\\text{ mA}$ dan $0\\text{ mA}$",
      "$0\\text{ mA}$ dan $0{,}12\\text{ mA}$",
      "$0{,}12\\text{ mA}$ dan $0{,}12\\text{ mA}$",
      "$1{,}2\\text{ mA}$ dan $0\\text{ mA}$",
      "$0\\text{ mA}$ dan $1{,}2\\text{ mA}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada rangkaian RC arus searah:<br>- Saat awal sakelar ditutup ($t = 0$), kapasitor belum menyimpan muatan ($q = 0 \\implies V_C = 0$), sehingga berlaku seperti kawat hubung singkat (short circuit) dengan arus maksimum $I_0 = \\frac{V}{R}$.<br>- Pada keadaan tunak ($t \\to \\infty$), kapasitor terisi penuh muatan hingga $V_C = V$, sehingga berlaku seperti rangkaian terbuka (open circuit) dan arus berhenti mengalir ($I_\\infty = 0$).",
      "steps": "1. Konversikan hambatan: $R = 100\\,\\text{k}\\Omega = 10^5\\,\\Omega$.<br>2. Pada $t = 0$ (saat awal):<br>$$I_0 = \\frac{V}{R} = \\frac{12\\text{ V}}{10^5\\,\\Omega} = 1{,}2 \\times 10^{-4}\\text{ A} = 0{,}12\\text{ mA}$$<br>3. Pada $t \\to \\infty$ (keadaan tunak):<br>Tegangan kapasitor menyamai tegangan baterai sehingga beda potensial pada resistor nol ($V_R = 0$):<br>$$I_\\infty = 0\\text{ mA}$$<br>4. Jadi nilai $I_0$ dan $I_\\infty$ berturut-turut adalah $0{,}12\\text{ mA}$ dan $0\\text{ mA}$ (pilihan A).",
      "pitfalls": "Tertukar antara kondisi awal $t=0$ dan kondisi akhir $t \\to \\infty$, atau mengira arus DC dapat terus mengalir melewati kapasitor secara kontinu pada keadaan tunak."
    },
    "subTopicSlug": "rangkaian-seri-paralel",
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Pada rangkaian RC arus searah: - Saat awal sakelar ditutup ($t = 0$), kapasitor belum menyimpan muatan ($q = 0 \\implies V_C = 0$), sehingga berlaku seperti kawat hubung singkat (short circuit) dengan arus maksimum $I_0 = \\frac{V}{R}$. - Pada keadaan tunak ($t \\to \\infty$), kapasitor terisi penuh muatan hingga $V_C = V$, sehingga berlaku seperti rangkaian terbuka (open circuit) dan arus berhenti mengalir ($I_\\infty = 0$)."
  },
  {
    "id": "mudah-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-rangkaian",
    "category": "Rangkaian Resistor Campuran Seri-Paralel",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Tiga buah resistor masing-masing bernilai $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $R_3 = 4\\,\\Omega$ dirangkai. Resistor $R_1$ dan $R_2$ dipasang secara paralel, kemudian kombinasi paralel tersebut dihubungkan seri dengan resistor $R_3$. Hambatan pengganti total rangkaian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\,\\Omega$",
      "$6\\,\\Omega$",
      "$8\\,\\Omega$",
      "$10\\,\\Omega$",
      "$22\\,\\Omega$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hambatan Pengganti Seri & Paralel:</strong><br>\n          • Paralel dua resistor: $R_p = \\frac{R_1 R_2}{R_1 + R_2}$<br>\n          • Seri gabungan: $R_{\\text{total}} = R_p + R_3$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung hambatan paralel $R_1$ dan $R_2$:\n            $$R_p = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$$\n          </li>\n          <li>Jumlahkan secara seri dengan $R_3$:\n            $$R_{\\text{total}} = R_p + R_3 = 4\\,\\Omega + 4\\,\\Omega = 8\\,\\Omega$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan langsung menjumlahkan seluruh resistor ($6 + 12 + 4 = 22\\,\\Omega$), perhatikan hubungan paralel antara $R_1$ dan $R_2$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Rangkaian Seri dan Paralel",
    "subTopic": "Rangkaian Seri dan Paralel",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "rangkaian-seri-paralel",
    "hint": "Hambatan Pengganti Seri & Paralel: • Paralel dua resistor: $R_p = \\frac{R_1 R_2}{R_1 + R_2}$ • Seri gabungan: $R_{\\text{total}} = R_p + R_3$."
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
