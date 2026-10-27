/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Kalor Sensibel & Kalor Laten (fis-termo-kalor-sensibel)
 * Slug: kalor-sensibel-laten
 * Indikator: Kalor pengubah suhu (Q = m * c * Delta T) dan kalor pengubah wujud lebur/uap (Q = m * L).
 * 
 * Total Butir Soal: 17 (Mudah: 10, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-sensibel";
  const subTopicSlug = "kalor-sensibel-laten";
  const questions = [
  {
    "id": "fis-termo-kalor-sensibel-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "mudah",
    "statement": "Sebanyak $3\\text{ kg}$ air murni bersuhu $25^\\circ\\text{C}$ dipanaskan sampai suhunya mencapai $65^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, banyak kalor yang diserap oleh air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$252\\text{ kJ}$",
      "$378\\text{ kJ}$",
      "$504\\text{ kJ}$",
      "$630\\text{ kJ}$",
      "$756\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kalor sensibel ($Q$) adalah energi kalor yang diserap atau dilepaskan suatu zat yang menyebabkan perubahan suhu tanpa mengalami perubahan wujud:<br>$$Q = m \\times c \\times \\Delta T$$",
      "steps": "1. Hitung perubahan suhu air: $\\Delta T = 65^\\circ\\text{C} - 25^\\circ\\text{C} = 40^\\circ\\text{C}$.<br>2. Masukkan ke rumus kalor:<br>$$Q = 3\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times 40^\\circ\\text{C} = 504.000\\text{ Joule}$$<br>3. Konversi ke kiloJoule: $Q = 504\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Pastikan menggunakan $\\Delta T$ (selisih suhu akhir dan suhu awal yaitu $40^\\circ\\text{C}$), bukan suhu akhir $65^\\circ\\text{C}$ atau suhu awal $25^\\circ\\text{C}$."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kalor sensibel ($Q$) adalah energi kalor yang diserap atau dilepaskan suatu zat yang menyebabkan perubahan suhu tanpa mengalami perubahan wujud: $$Q = m \\times c \\times \\Delta T$$."
  },
  {
    "id": "fis-termo-kalor-sensibel-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "mudah",
    "statement": "Suatu bejana logam membutuhkan kalor sebesar $12.000\\text{ Joule}$ untuk menaikkan suhunya dari $20^\\circ\\text{C}$ menjadi $60^\\circ\\text{C}$. Kapasitas kalor dari bejana logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$150\\text{ J}/^\\circ\\text{C}$",
      "$200\\text{ J}/^\\circ\\text{C}$",
      "$300\\text{ J}/^\\circ\\text{C}$",
      "$400\\text{ J}/^\\circ\\text{C}$",
      "$600\\text{ J}/^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kapasitas kalor ($C$) menyatakan banyaknya kalor yang diperlukan suatu benda utuh untuk menaikkan suhunya sebesar $1^\\circ\\text{C}$:<br>$$C = \\frac{Q}{\\Delta T}$$",
      "steps": "1. Hitung perubahan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.<br>2. Masukkan nilai $Q = 12.000\\text{ J}$:<br>$$C = \\frac{12.000\\text{ J}}{40^\\circ\\text{C}} = 300\\text{ J}/^\\circ\\text{C}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Perhatikan perbedaan antara kalor jenis ($c$, per satuan massa, satuan $\\text{J}/(\\text{kg}\\cdot^\\circ\\text{C})$) dan kapasitas kalor ($C$, untuk seluruh massa benda, satuan $\\text{J}/^\\circ\\text{C}$)."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kapasitas kalor ($C$) menyatakan banyaknya kalor yang diperlukan suatu benda utuh untuk menaikkan suhunya sebesar $1^\\circ\\text{C}$: $$C = \\frac{Q}{\\Delta T}$$."
  },
  {
    "id": "fis-termo-kalor-sensibel-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "mudah",
    "statement": "Sebanyak $500\\text{ gram}$ es bersuhu tepat $0^\\circ\\text{C}$ hendak dileburkan seluruhnya menjadi air pada suhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L = 336.000\\text{ J/kg}$, jumlah kalor yang dibutuhkan untuk proses peleburan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$84\\text{ kJ}$",
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$504\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kalor laten lebur ($Q$) adalah kalor yang dibutuhkan untuk mengubah wujud zat dari padat menjadi cair pada titik leburnya tanpa adanya kenaikan suhu:<br>$$Q = m \\times L$$",
      "steps": "1. Konversikan massa ke satuan kilogram: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.<br>2. Masukkan ke rumus kalor lebur:<br>$$Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ Joule}$$<br>3. Ubah ke satuan kiloJoule: $Q = 168\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pastikan massa selalu dikonversikan ke satuan SI kilogram ($0{,}5\\text{ kg}$). Jika menggunakan $500$, nilai kalor akan salah sebesar faktor seribu."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kalor laten lebur ($Q$) adalah kalor yang dibutuhkan untuk mengubah wujud zat dari padat menjadi cair pada titik leburnya tanpa adanya kenaikan suhu: $$Q = m \\times L$$. **Tips:** Pastikan massa selalu dikonversikan ke satuan SI kilogram ($0{,}5\\text{ kg}$)."
  },
  {
    "id": "fis-termo-kalor-sensibel-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "mudah",
    "statement": "Sebanyak $200\\text{ gram}$ air bersuhu $100^\\circ\\text{C}$ diuapkan seluruhnya menjadi uap air pada suhu $100^\\circ\\text{C}$. Jika kalor uap air adalah $U = 2{,}26 \\times 10^6\\text{ J/kg}$, besar kalor yang diserap air untuk penguapan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$226\\text{ kJ}$",
      "$452\\text{ kJ}$",
      "$678\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$1130\\text{ kJ}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kalor laten penguapan ($Q$) adalah energi kalor yang diserap suatu zat untuk mengubah wujudnya dari cair menjadi gas pada titik didihnya:<br>$$Q = m \\times U$$",
      "steps": "1. Konversi massa air ke kilogram: $m = 200\\text{ gram} = 0{,}2\\text{ kg}$.<br>2. Hitung kalor penguapan:<br>$$Q = 0{,}2\\text{ kg} \\times 2{,}26 \\times 10^6\\text{ J/kg} = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ Joule}$$<br>3. Konversi ke satuan kiloJoule: $Q = 452\\text{ kJ}$.<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pada saat terjadi perubahan wujud (melebur atau mendidih), suhu zat tetap konstan sehingga rumus yang digunakan adalah $Q = mL$ atau $Q = mU$, bukan $Q = mc\\Delta T$."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kalor laten penguapan ($Q$) adalah energi kalor yang diserap suatu zat untuk mengubah wujudnya dari cair menjadi gas pada titik didihnya: $$Q = m \\times U$$."
  },
  {
    "id": "fis-termo-kalor-sensibel-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "mudah",
    "statement": "Besaran fisika yang menyatakan banyaknya kalor yang dibutuhkan untuk menaikkan suhu $1\\text{ kg}$ suatu zat sebesar $1^\\circ\\text{C}$ tanpa mengubah wujud zat tersebut didefinisikan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kalor laten",
      "Kalor lebur",
      "Kalor jenis",
      "Kapasitas kalor",
      "Konduktivitas termal"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kalor jenis ($c$) adalah karakteristik termal intrinsik suatu zat yang didefinisikan sebagai jumlah kalor yang diserap per satuan massa per kenaikan satu satuan suhu:<br>$$c = \\frac{Q}{m \\times \\Delta T}$$<br>Satuan standarnya dalam SI adalah $\\text{J}/(\\text{kg}\\cdot^\\circ\\text{C})$ atau $\\text{J}/(\\text{kg}\\cdot\\text{K})$.",
      "steps": "1. Tinjau definisi besaran-besaran termal.<br>2. Besaran per satuan massa zat untuk kenaikan $1^\\circ\\text{C}$ adalah kalor jenis.<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan tertukar dengan kapasitas kalor ($C = mc$) yang tidak memperhitungkan per satuan massa, atau kalor laten yang berhubungan dengan perubahan wujud pada suhu tetap."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kalor jenis ($c$) adalah karakteristik termal intrinsik suatu zat yang didefinisikan sebagai jumlah kalor yang diserap per satuan massa per kenaikan satu satuan suhu: $$c = \\frac{Q}{m \\times \\Delta T}$$ Satuan standarnya dalam SI adalah $\\text{J}/(\\text{kg}\\cdot^\\circ\\text{C})$ atau $\\text{J}/(\\text{kg}\\cdot\\text{K})$."
  },
  {
    "id": "fis-termo-kalor-sensibel-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "sedang",
    "statement": "Sebanyak $200\\text{ gram}$ es bersuhu $-10^\\circ\\text{C}$ dipanaskan hingga seluruhnya mencair dan suhunya menjadi $20^\\circ\\text{C}$. Diketahui kalor jenis es $c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, kalor lebur es $L = 336.000\\text{ J/kg}$, dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Kalor total yang diserap dalam seluruh proses tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$71{,}4\\text{ kJ}$",
      "$84{,}0\\text{ kJ}$",
      "$88{,}2\\text{ kJ}$",
      "$92{,}4\\text{ kJ}$",
      "$105{,}0\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Proses pemanasan es dari suhu di bawah nol hingga menjadi air di atas nol terdiri dari 3 tahapan penyerapan kalor:<br>1. Pemanasan es: $Q_1 = m \\times c_{\\text{es}} \\times \\Delta T_1$<br>2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m \\times L$<br>3. Pemanasan air: $Q_3 = m \\times c_{\\text{air}} \\times \\Delta T_2$<br>Kalor total: $Q_{\\text{tot}} = Q_1 + Q_2 + Q_3$.",
      "steps": "1. Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.<br>2. Tahap 1 (es $-10^\\circ\\text{C} \\to 0^\\circ\\text{C}$):<br>$$Q_1 = 0{,}2 \\times 2100 \\times 10 = 4200\\text{ J}$$<br>3. Tahap 2 (peleburan pada $0^\\circ\\text{C}$):<br>$$Q_2 = 0{,}2 \\times 336.000 = 67.200\\text{ J}$$<br>4. Tahap 3 (air $0^\\circ\\text{C} \\to 20^\\circ\\text{C}$):<br>$$Q_3 = 0{,}2 \\times 4200 \\times 20 = 16.800\\text{ J}$$<br>5. Hitung kalor total:<br>$$Q_{\\text{tot}} = 4200 + 67.200 + 16.800 = 88.200\\text{ J} = 88{,}2\\text{ kJ}$$<br>6. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan melewatkan tahap peleburan ($Q_2 = mL$). Mengabaikan kalor lebur akan menghasilkan $4200 + 16800 = 21\\text{ kJ}$, yang sangat jauh dari nilai sebenarnya."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Proses pemanasan es dari suhu di bawah nol hingga menjadi air di atas nol terdiri dari 3 tahapan penyerapan kalor: 1. Pemanasan es: $Q_1 = m \\times c_{\\text{es}} \\times \\Delta T_1$ 2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m \\times L$ 3. Pemanasan air: $Q_3 = m \\times c_{\\text{air}} \\times \\Delta T_2$ Kalor total: $Q_{\\text{tot}} = Q_1 + Q_2 + Q_3$. **Tips:** Jangan melewatkan tahap peleburan ($Q_2 = mL$)."
  },
  {
    "id": "fis-termo-kalor-sensibel-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "sedang",
    "statement": "Sebuah ketel listrik berdaya $700\\text{ Watt}$ dengan efisiensi pemanasan $80\\%$ digunakan untuk memanaskan $1\\text{ kg}$ air dari suhu $20^\\circ\\text{C}$ hingga mendidih pada suhu $100^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, waktu yang dibutuhkan sampai air mulai mendidih adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ menit}$",
      "$8\\text{ menit}$",
      "$10\\text{ menit}$",
      "$12\\text{ menit}$",
      "$15\\text{ menit}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hubungan daya listrik ($P$), efisiensi ($\\eta$), waktu ($t$), dan kalor pemanasan ($Q$) dirumuskan:<br>$$W_{\\text{berguna}} = Q \\implies \\eta \\times P \\times t = m \\times c \\times \\Delta T \\implies t = \\frac{m \\times c \\times \\Delta T}{\\eta \\times P}$$",
      "steps": "1. Hitung kalor yang dibutuhkan air:<br>$$Q = 1\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (100 - 20)^\\circ\\text{C} = 4200 \\times 80 = 336.000\\text{ J}$$<br>2. Hitung daya efektif pemanas:<br>$$P_{\\text{efektif}} = 80\\% \\times 700\\text{ W} = 0{,}80 \\times 700 = 560\\text{ Watt}$$<br>3. Hitung waktu pemanasan:<br>$$t = \\frac{336.000\\text{ J}}{560\\text{ W}} = 600\\text{ detik}$$<br>4. Konversikan detik ke menit:<br>$$t = \\frac{600}{60} = 10\\text{ menit}$$<br>5. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Lupa memperhitungkan efisiensi $80\\%$ akan menghasilkan waktu yang lebih cepat yaitu $336.000/700 = 480\\text{ detik} = 8\\text{ menit}$ (opsi B). Karena ada energi terbuang, pemanasan membutuhkan waktu lebih lama."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Hubungan daya listrik ($P$), efisiensi ($\\eta$), waktu ($t$), dan kalor pemanasan ($Q$) dirumuskan: $$W_{\\text{berguna}} = Q \\implies \\eta \\times P \\times t = m \\times c \\times \\Delta T \\implies t = \\frac{m \\times c \\times \\Delta T}{\\eta \\times P}$$."
  },
  {
    "id": "fis-termo-kalor-sensibel-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "sedang",
    "statement": "Air panas bermassa $300\\text{ gram}$ dengan suhu $90^\\circ\\text{C}$ dituangkan ke dalam wadah terisolasi yang berisi $200\\text{ gram}$ air dingin bersuhu $20^\\circ\\text{C}$. Jika pertukaran kalor dengan wadah dan lingkungan dapat diabaikan, suhu akhir kesetimbangan termal campuran air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$62^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Asas Black, pada sistem terisolasi, kalor yang dilepaskan oleh benda bersuhu lebih tinggi sama dengan kalor yang diserap oleh benda bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$<br>Karena kedua zat sama-sama air, kalor jenis $c$ dapat saling meniadakan.",
      "steps": "1. Tulis persamaan kesetimbangan:<br>$$300 \\times (90 - T_c) = 200 \\times (T_c - 20)$$<br>2. Sederhanakan pembagian dengan 100:<br>$$3(90 - T_c) = 2(T_c - 20)$$<br>3. Buka tanda kurung:<br>$$270 - 3T_c = 2T_c - 40$$<br>4. Kelompokkan variabel $T_c$:<br>$$5T_c = 270 + 40 = 310 \\implies T_c = \\frac{310}{5} = 62^\\circ\\text{C}$$<br>5. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Jangan menghitung suhu akhir sebagai rata-rata sederhana $\\frac{90 + 20}{2} = 55^\\circ\\text{C}$ (opsi B). Rata-rata sederhana hanya berlaku jika massa kedua zat persis sama."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Asas Black, pada sistem terisolasi, kalor yang dilepaskan oleh benda bersuhu lebih tinggi sama dengan kalor yang diserap oleh benda bersuhu lebih rendah: $$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$ Karena kedua zat sama-sama air, kalor jenis $c$ dapat saling meniadakan."
  },
  {
    "id": "fis-termo-kalor-sensibel-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "sedang",
    "statement": "Sepotong logam bermassa $500\\text{ gram}$ dipanaskan hingga suhunya mencapai $100^\\circ\\text{C}$, kemudian dimasukkan ke dalam kalorimeter yang berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Jika suhu akhir campuran adalah $30^\\circ\\text{C}$ dan kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ (kalor yang diserap kalorimeter diabaikan), besar kalor jenis logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$120\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$240\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$360\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$840\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Penerapan Asas Black untuk menentukan kalor jenis suatu bahan tak dikenal ($c_L$):<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_a \\times c_a \\times (T_c - T_a)$$",
      "steps": "1. Substitusikan nilai-nilai massa dan suhu:<br>$$m_L = 0{,}5\\text{ kg}, \\quad \\Delta T_L = 100 - 30 = 70^\\circ\\text{C}$$<br>$$m_a = 0{,}2\\text{ kg}, \\quad c_a = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}), \\quad \\Delta T_a = 30 - 20 = 10^\\circ\\text{C}$$<br>2. Hitung kalor yang diserap air:<br>$$Q_{\\text{serap}} = 0{,}2 \\times 4200 \\times 10 = 8400\\text{ Joule}$$<br>3. Samakan dengan kalor yang dilepas logam:<br>$$0{,}5 \\times c_L \\times 70 = 8400 \\implies 35 c_L = 8400$$<br>4. Hitung nilai $c_L$:<br>$$c_L = \\frac{8400}{35} = 240\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$$<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Periksa kembali konversi massa gram ke kilogram. Jika satu ruas dalam gram dan ruas lain dalam kilogram, perhitungan kalor jenis akan salah."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Penerapan Asas Black untuk menentukan kalor jenis suatu bahan tak dikenal ($c_L$): $$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_a \\times c_a \\times (T_c - T_a)$$. **Tips:** Periksa kembali konversi massa gram ke kilogram."
  },
  {
    "id": "fis-termo-kalor-sensibel-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Sensibel & Kapasitas Kalor",
    "difficulty": "sedang",
    "statement": "Sebanyak $100\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam bejana terisolasi yang berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor lebur es adalah $336.000\\text{ J/kg}$. Jika sistem dianggap terisolasi sempurna dari lingkungan luar, massa es yang mencair saat mencapai kesetimbangan termal adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ gram}$",
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Tinjau kemampuan pelepasan kalor air hangat dibandingkan kebutuhan kalor peleburan seluruh es:<br>1. Kalor maksimum yang dilepas air jika didinginkan hingga $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas, maks}} = m_a \\times c_a \\times (T_a - 0)$$<br>2. Kalor yang dibutuhkan untuk meleburkan seluruh es:<br>$$Q_{\\text{lebur, tot}} = m_{\\text{es}} \\times L$$<br>Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, maka suhu akhir kesetimbangan adalah tepat $0^\\circ\\text{C}$ dan hanya sebagian es yang mencair: $m_{\\text{cair}} = \\frac{Q_{\\text{lepas, maks}}}{L}$.",
      "steps": "1. Hitung kalor yang dilepas air saat turun ke $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas}} = 0{,}2\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times 20^\\circ\\text{C} = 16.800\\text{ J}$$<br>2. Hitung kalor untuk meleburkan seluruh $100\\text{ gram}$ es:<br>$$Q_{\\text{lebur}} = 0{,}1\\text{ kg} \\times 336.000\\text{ J/kg} = 33.600\\text{ J}$$<br>3. Karena $16.800\\text{ J} < 33.600\\text{ J}$, kalor air tidak cukup meleburkan seluruh es. Suhu campuran berhenti di $0^\\circ\\text{C}$.<br>4. Hitung massa es yang berhasil mencair:<br>$$m_{\\text{cair}} = \\frac{16.800\\text{ J}}{336.000\\text{ J/kg}} = 0{,}05\\text{ kg} = 50\\text{ gram}$$<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Kesalahan umum adalah mengasumsikan seluruh es mencair dan langsung menghitung suhu akhir campuran dengan rumus Asas Black standar, yang menghasilkan nilai suhu di bawah $0^\\circ\\text{C}$ yang tidak fisis."
    },
    "subTopicSlug": "kalor-sensibel-laten",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Tinjau kemampuan pelepasan kalor air hangat dibandingkan kebutuhan kalor peleburan seluruh es: 1. Kalor maksimum yang dilepas air jika didinginkan hingga $0^\\circ\\text{C}$: $$Q_{\\text{lepas, maks}} = m_a \\times c_a \\times (T_a - 0)$$ 2. Kalor yang dibutuhkan untuk meleburkan seluruh es: $$Q_{\\text{lebur, tot}} = m_{\\text{es}} \\times L$$ Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, maka suhu akhir kesetimbangan adalah tepat $0^\\circ\\text{C}$ dan hanya sebagian es yang mencair: $m_{\\text{cair}} = \\frac{Q_{\\text{lepas, maks}}}{L}$."
  },
  {
    "id": "mudah-fis-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Pemanasan",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $2\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $70^\\circ\\text{C}$. Jika kalor jenis air $c = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, jumlah kalor yang diserap air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$105\\text{ kJ}$",
      "$210\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$588\\text{ kJ}$",
      "$840\\text{ kJ}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Kalor Perubahan Suhu:</strong><br>\n          $$Q = m c \\Delta T$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung perubahan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li>\n          <li>$$Q = (2\\text{ kg})(4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}))(50^\\circ\\text{C}) = 420.000\\text{ J} = 420\\text{ kJ}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan $\\Delta T$ adalah selisih suhu akhir dikurang suhu awal ($50$), bukan suhu akhir ($70$).\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Gunakan perumusan konsep fisis: $$Q = m c \\Delta T$$. **Tips:** Perhatikan $\\Delta T$ adalah selisih suhu akhir dikurang suhu awal ($50$), bukan suhu akhir ($70$)."
  },
  {
    "id": "drill-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Pemanasan dan Kenaikan Suhu",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebanyak $m = 3\\text{ kg}$ air bersuhu $25^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $75^\\circ\\text{C}$. Jika kalor jenis air adalah $c = 4200\\text{ J/kg}^\\circ\\text{C}$, jumlah kalor yang diserap oleh air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$630\\text{ kJ}$",
      "$315\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$540\\text{ kJ}$",
      "$63\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Persamaan Kalor Sensibel:</strong><br>Kalor yang dibutuhkan untuk menaikkan suhu zat tanpa mengubah wujud:<br>$$Q = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Perubahan suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = 3\\text{ kg} \\times 4200\\text{ J/kg}^\\circ\\text{C} \\times 50^\\circ\\text{C} = 630.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 630\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Perhatikan Satuan:</strong> Periksa apakah opsi meminta Joule atau kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Persamaan Kalor Sensibel: Kalor yang dibutuhkan untuk menaikkan suhu zat tanpa mengubah wujud: $$Q = m \\cdot c \\cdot \\Delta T$$."
  },
  {
    "id": "drill-kal-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Laten Peleburan Zat",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebongkah es bermassa $m = 500\\text{ gram}$ pada suhu titik leburnya $0^\\circ\\text{C}$ hendak dicairkan seluruhnya menjadi air bersuhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L_f = 336.000\\text{ J/kg}$, banyak kalor yang diperlukan dalam proses peleburan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$168.000\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Perubahan Wujud:</strong><br>Saat zat melebur atau membeku pada suhu tetap, kalor yang diserap/dilepas tidak menaikkan suhu:<br>$$Q = m \\cdot L_f$$</div>",
      "steps": "<ol><li>Konversi massa ke kg: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.</li><li>Hitung kalor lebur: $Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ J} = 168\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konsep Kunci:</strong> Pada peristiwa perubahan wujud zat, suhu zat selalu konstan (tidak ada $\\Delta T$). Jangan masukkan kalor jenis $c$ saat zat sedang melebur!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Kalor Laten Perubahan Wujud: Saat zat melebur atau membeku pada suhu tetap, kalor yang diserap/dilepas tidak menaikkan suhu: $$Q = m \\cdot L_f$$. **Tips:** ⚠️ Konsep Kunci: Pada peristiwa perubahan wujud zat, suhu zat selalu konstan (tidak ada $\\Delta T$)."
  },
  {
    "id": "drill-kal-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kapasitas Kalor Benda",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Suatu balok logam memiliki kapasitas kalor $C = 250\\text{ J/}^circ\\text{C}$. Berapakah jumlah kalor yang dibutuhkan untuk memanaskan balok logam tersebut dari suhu $20^\\circ\\text{C}$ hingga menjadi $60^\\circ\\text{C}$?",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10.000\\text{ Joule}$",
      "$5.000\\text{ Joule}$",
      "$15.000\\text{ Joule}$",
      "$2.500\\text{ Joule}$",
      "$25.000\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Kapasitas Kalor ($C$) dan Kalor ($Q$):</strong><br>Kapasitas kalor adalah kemampuan seluruh benda menyerap kalor per derajat kenaikan suhu ($C = m \\cdot c$):<br>$$Q = C \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kenaikan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = C \\cdot \\Delta T = 250\\text{ J/}^circ\\text{C} \\times 40^\\circ\\text{C} = 10.000\\text{ Joule}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan $c$ dan $C$:</strong> Kalor jenis ($c$) memiliki satuan $\\text{J/kg}^\\circ\\text{C}$ (tergantung massa). Kapasitas kalor ($C$) bersatuan $\\text{J/}^circ\\text{C}$ (sudah mencakup massa benda).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Hubungan Kapasitas Kalor ($C$) dan Kalor ($Q$): Kapasitas kalor adalah kemampuan seluruh benda menyerap kalor per derajat kenaikan suhu ($C = m \\cdot c$): $$Q = C \\cdot \\Delta T$$. **Tips:** ⚠️ Bedakan $c$ dan $C$: Kalor jenis ($c$) memiliki satuan $\\text{J/kg}^\\circ\\text{C}$ (tergantung massa)."
  },
  {
    "id": "drill2-kal-01",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Kalor Penguapan Air",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Banyaknya kalor yang diperlukan untuk menguapkan seluruhnya $m = 200\\text{ gram}$ air pada titik didihnya $100^\\circ\\text{C}$ menjadi uap air bersuhu $100^\\circ\\text{C}$ (kalor uap air $L_v = 2{,}26 \\times 10^6\\text{ J/kg}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$452\\text{ kJ}$",
      "$226\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$45{,}2\\text{ kJ}$",
      "$113\\text{ kJ}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kalor Laten Penguapan:</strong><br>$$Q = m \\cdot L_v$$</div>",
      "steps": "<ol><li>Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.</li><li>Kalor: $Q = 0{,}2\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 452\\text{ kJ}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Fakta Fisika Menarik:</strong> Kalor penguapan air ($2{,}26 \\times 10^6\\text{ J/kg}$) hampir 7 kali lebih besar daripada kalor leburnya ($3{,}36 \\times 10^5\\text{ J/kg}$) karena memutus ikatan antarmolekul cair sepenuhnya menjadi gas.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Kalor Laten Penguapan: $$Q = m \\cdot L_v$$."
  },
  {
    "id": "drill2-kal-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Suhu Sambungan Dua Logam Berbeda Konduktivitas",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $A$ dan $B$ dengan panjang dan luas penampang yang sama disambungkan ujungnya. Konduktivitas termal logam $A$ adalah tiga kali konduktivitas termal logam $B$ ($k_A = 3k_B$). Ujung bebas logam $A$ bersuhu $100^\\circ\\text{C}$ dan ujung bebas logam $B$ bersuhu $20^\\circ\\text{C}$. Suhu sambungan antara kedua logam ($T_s$) pada keadaan stasioner adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$85^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Keseimbangan Sambungan Konduksi:</strong><br>Laju aliran kalor pada kedua batang adalah sama:<br>$$H_A = H_B \\implies k_A (T_A - T_s) = k_B (T_s - T_B)$$</div>",
      "steps": "<ol><li>Substitusi $k_A = 3k_B$: $3(100 - T_s) = T_s - 20$.</li><li>Jabarkan: $300 - 3T_s = T_s - 20$.</li><li>$300 + 20 = 4T_s \\implies 320 = 4T_s \\implies T_s = 80^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Logika Cepat:</strong> Logam $A$ menghantar panas 3 kali lebih cepat $implies$ suhu sambungan ditarik sangat dekat ke suhu ujung $A$ ($80^\\circ\\text{C}$, bukan rata-rata $60^\\circ\\text{C}$).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Keseimbangan Sambungan Konduksi: Laju aliran kalor pada kedua batang adalah sama: $$H_A = H_B \\implies k_A (T_A - T_s) = k_B (T_s - T_B)$$."
  },
  {
    "id": "drill2-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-sensibel",
    "category": "Pemanas Listrik Air (Daya dan Kalor)",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah ketel listrik berdaya $P = 420\\text{ Watt}$ digunakan untuk memanaskan $m = 1\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ hingga mencapai suhu $40^\\circ\\text{C}$ ($c = 4200\\text{ J/kg}^\\circ\\text{C}$). Jika seluruh energi listrik diubah sempurna menjadi kalor tanpa ada yang hilang, waktu ($t$) yang dibutuhkan ketel tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$200\\text{ detik}$ ($3\\text{ menit } 20\\text{ detik}$)",
      "$100\\text{ detik}$",
      "$420\\text{ detik}$",
      "$50\\text{ detik}$",
      "$300\\text{ detik}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kesetaraan Energi Listrik dan Kalor:</strong><br>$$W_{\\text{listrik}} = Q_{\\text{kalor}} \\implies P \\cdot t = m \\cdot c \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Kalor yang diperlukan: $Q = 1 \\times 4200 \\times (40 - 20) = 1 \\times 4200 \\times 20 = 84.000\\text{ Joule}$.</li><li>Waktu pemanasan: $t = \\frac{Q}{P} = \\frac{84.000\\text{ J}}{420\\text{ W}} = 200\\text{ detik}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hubungan Joule dan Watt:</strong> $1\\text{ Watt} = 1\\text{ Joule/detik}$. Waktu selalu dihasilkan dalam satuan detik.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Kalor Sensibel & Kalor Laten",
    "subTopic": "Kalor Sensibel & Kalor Laten",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "kalor-sensibel-laten",
    "hint": "Kesetaraan Energi Listrik dan Kalor: $$W_{\\text{listrik}} = Q_{\\text{kalor}} \\implies P \\cdot t = m \\cdot c \\cdot \\Delta T$$."
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
