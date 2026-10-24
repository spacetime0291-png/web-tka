/**
 * Batch Task: TASK_fis-termo-kalor-sensibel_MEDIUM
 * SubTopic: Kalor Sensibel & Kalor Laten (fis-termo-kalor-sensibel)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-kalor-sensibel-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "sedang",
    statement: "Sebanyak $200\\text{ gram}$ es bersuhu $-10^\\circ\\text{C}$ dipanaskan hingga seluruhnya mencair dan suhunya menjadi $20^\\circ\\text{C}$. Diketahui kalor jenis es $c_{\\text{es}} = 2100\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, kalor lebur es $L = 336.000\\text{ J/kg}$, dan kalor jenis air $c_{\\text{air}} = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Kalor total yang diserap dalam seluruh proses tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$71{,}4\\text{ kJ}$",
      "$84{,}0\\text{ kJ}$",
      "$88{,}2\\text{ kJ}$",
      "$92{,}4\\text{ kJ}$",
      "$105{,}0\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Proses pemanasan es dari suhu di bawah nol hingga menjadi air di atas nol terdiri dari 3 tahapan penyerapan kalor:<br>1. Pemanasan es: $Q_1 = m \\times c_{\\text{es}} \\times \\Delta T_1$<br>2. Peleburan es menjadi air pada $0^\\circ\\text{C}$: $Q_2 = m \\times L$<br>3. Pemanasan air: $Q_3 = m \\times c_{\\text{air}} \\times \\Delta T_2$<br>Kalor total: $Q_{\\text{tot}} = Q_1 + Q_2 + Q_3$.",
      steps: "1. Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.<br>2. Tahap 1 (es $-10^\\circ\\text{C} \\to 0^\\circ\\text{C}$):<br>$$Q_1 = 0{,}2 \\times 2100 \\times 10 = 4200\\text{ J}$$<br>3. Tahap 2 (peleburan pada $0^\\circ\\text{C}$):<br>$$Q_2 = 0{,}2 \\times 336.000 = 67.200\\text{ J}$$<br>4. Tahap 3 (air $0^\\circ\\text{C} \\to 20^\\circ\\text{C}$):<br>$$Q_3 = 0{,}2 \\times 4200 \\times 20 = 16.800\\text{ J}$$<br>5. Hitung kalor total:<br>$$Q_{\\text{tot}} = 4200 + 67.200 + 16.800 = 88.200\\text{ J} = 88{,}2\\text{ kJ}$$<br>6. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Jangan melewatkan tahap peleburan ($Q_2 = mL$). Mengabaikan kalor lebur akan menghasilkan $4200 + 16800 = 21\\text{ kJ}$, yang sangat jauh dari nilai sebenarnya."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "sedang",
    statement: "Sebuah ketel listrik berdaya $700\\text{ Watt}$ dengan efisiensi pemanasan $80\\%$ digunakan untuk memanaskan $1\\text{ kg}$ air dari suhu $20^\\circ\\text{C}$ hingga mendidih pada suhu $100^\\circ\\text{C}$. Jika kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, waktu yang dibutuhkan sampai air mulai mendidih adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ menit}$",
      "$8\\text{ menit}$",
      "$10\\text{ menit}$",
      "$12\\text{ menit}$",
      "$15\\text{ menit}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hubungan daya listrik ($P$), efisiensi ($\\eta$), waktu ($t$), dan kalor pemanasan ($Q$) dirumuskan:<br>$$W_{\\text{berguna}} = Q \\implies \\eta \\times P \\times t = m \\times c \\times \\Delta T \\implies t = \\frac{m \\times c \\times \\Delta T}{\\eta \\times P}$$",
      steps: "1. Hitung kalor yang dibutuhkan air:<br>$$Q = 1\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (100 - 20)^\\circ\\text{C} = 4200 \\times 80 = 336.000\\text{ J}$$<br>2. Hitung daya efektif pemanas:<br>$$P_{\\text{efektif}} = 80\\% \\times 700\\text{ W} = 0{,}80 \\times 700 = 560\\text{ Watt}$$<br>3. Hitung waktu pemanasan:<br>$$t = \\frac{336.000\\text{ J}}{560\\text{ W}} = 600\\text{ detik}$$<br>4. Konversikan detik ke menit:<br>$$t = \\frac{600}{60} = 10\\text{ menit}$$<br>5. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Lupa memperhitungkan efisiensi $80\\%$ akan menghasilkan waktu yang lebih cepat yaitu $336.000/700 = 480\\text{ detik} = 8\\text{ menit}$ (opsi B). Karena ada energi terbuang, pemanasan membutuhkan waktu lebih lama."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "sedang",
    statement: "Air panas bermassa $300\\text{ gram}$ dengan suhu $90^\\circ\\text{C}$ dituangkan ke dalam wadah terisolasi yang berisi $200\\text{ gram}$ air dingin bersuhu $20^\\circ\\text{C}$. Jika pertukaran kalor dengan wadah dan lingkungan dapat diabaikan, suhu akhir kesetimbangan termal campuran air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$62^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Asas Black, pada sistem terisolasi, kalor yang dilepaskan oleh benda bersuhu lebih tinggi sama dengan kalor yang diserap oleh benda bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_1 \\times c \\times (T_1 - T_c) = m_2 \\times c \\times (T_c - T_2)$$<br>Karena kedua zat sama-sama air, kalor jenis $c$ dapat saling meniadakan.",
      steps: "1. Tulis persamaan kesetimbangan:<br>$$300 \\times (90 - T_c) = 200 \\times (T_c - 20)$$<br>2. Sederhanakan pembagian dengan 100:<br>$$3(90 - T_c) = 2(T_c - 20)$$<br>3. Buka tanda kurung:<br>$$270 - 3T_c = 2T_c - 40$$<br>4. Kelompokkan variabel $T_c$:<br>$$5T_c = 270 + 40 = 310 \\implies T_c = \\frac{310}{5} = 62^\\circ\\text{C}$$<br>5. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Jangan menghitung suhu akhir sebagai rata-rata sederhana $\\frac{90 + 20}{2} = 55^\\circ\\text{C}$ (opsi B). Rata-rata sederhana hanya berlaku jika massa kedua zat persis sama."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "sedang",
    statement: "Sepotong logam bermassa $500\\text{ gram}$ dipanaskan hingga suhunya mencapai $100^\\circ\\text{C}$, kemudian dimasukkan ke dalam kalorimeter yang berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Jika suhu akhir campuran adalah $30^\\circ\\text{C}$ dan kalor jenis air $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ (kalor yang diserap kalorimeter diabaikan), besar kalor jenis logam tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$120\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$240\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$360\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$420\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$",
      "$840\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Penerapan Asas Black untuk menentukan kalor jenis suatu bahan tak dikenal ($c_L$):<br>$$Q_{\\text{lepas}} = Q_{\\text{serap}} \\implies m_L \\times c_L \\times (T_L - T_c) = m_a \\times c_a \\times (T_c - T_a)$$",
      steps: "1. Substitusikan nilai-nilai massa dan suhu:<br>$$m_L = 0{,}5\\text{ kg}, \\quad \\Delta T_L = 100 - 30 = 70^\\circ\\text{C}$$<br>$$m_a = 0{,}2\\text{ kg}, \\quad c_a = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}), \\quad \\Delta T_a = 30 - 20 = 10^\\circ\\text{C}$$<br>2. Hitung kalor yang diserap air:<br>$$Q_{\\text{serap}} = 0{,}2 \\times 4200 \\times 10 = 8400\\text{ Joule}$$<br>3. Samakan dengan kalor yang dilepas logam:<br>$$0{,}5 \\times c_L \\times 70 = 8400 \\implies 35 c_L = 8400$$<br>4. Hitung nilai $c_L$:<br>$$c_L = \\frac{8400}{35} = 240\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$$<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Periksa kembali konversi massa gram ke kilogram. Jika satu ruas dalam gram dan ruas lain dalam kilogram, perhitungan kalor jenis akan salah."
    }
  },
  {
    id: "fis-termo-kalor-sensibel-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-kalor",
    subTopicId: "fis-termo-kalor-sensibel",
    category: "Kalor Sensibel & Kapasitas Kalor",
    difficulty: "sedang",
    statement: "Sebanyak $100\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ dimasukkan ke dalam bejana terisolasi yang berisi $200\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$. Diketahui kalor jenis air adalah $4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$ dan kalor lebur es adalah $336.000\\text{ J/kg}$. Jika sistem dianggap terisolasi sempurna dari lingkungan luar, massa es yang mencair saat mencapai kesetimbangan termal adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$25\\text{ gram}$",
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Tinjau kemampuan pelepasan kalor air hangat dibandingkan kebutuhan kalor peleburan seluruh es:<br>1. Kalor maksimum yang dilepas air jika didinginkan hingga $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas, maks}} = m_a \\times c_a \\times (T_a - 0)$$<br>2. Kalor yang dibutuhkan untuk meleburkan seluruh es:<br>$$Q_{\\text{lebur, tot}} = m_{\\text{es}} \\times L$$<br>Jika $Q_{\\text{lepas, maks}} < Q_{\\text{lebur, tot}}$, maka suhu akhir kesetimbangan adalah tepat $0^\\circ\\text{C}$ dan hanya sebagian es yang mencair: $m_{\\text{cair}} = \\frac{Q_{\\text{lepas, maks}}}{L}$.",
      steps: "1. Hitung kalor yang dilepas air saat turun ke $0^\\circ\\text{C}$:<br>$$Q_{\\text{lepas}} = 0{,}2\\text{ kg} \\times 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times 20^\\circ\\text{C} = 16.800\\text{ J}$$<br>2. Hitung kalor untuk meleburkan seluruh $100\\text{ gram}$ es:<br>$$Q_{\\text{lebur}} = 0{,}1\\text{ kg} \\times 336.000\\text{ J/kg} = 33.600\\text{ J}$$<br>3. Karena $16.800\\text{ J} < 33.600\\text{ J}$, kalor air tidak cukup meleburkan seluruh es. Suhu campuran berhenti di $0^\\circ\\text{C}$.<br>4. Hitung massa es yang berhasil mencair:<br>$$m_{\\text{cair}} = \\frac{16.800\\text{ J}}{336.000\\text{ J/kg}} = 0{,}05\\text{ kg} = 50\\text{ gram}$$<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Kesalahan umum adalah mengasumsikan seluruh es mencair dan langsung menghitung suhu akhir campuran dengan rumus Asas Black standar, yang menghasilkan nilai suhu di bawah $0^\\circ\\text{C}$ yang tidak fisis."
    }
  }
];
