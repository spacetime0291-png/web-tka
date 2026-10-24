/**
 * Batch Task: TASK_fis-termo-hukum-hukum2_EASY
 * SubTopic: Hukum II Termodinamika & Entropi (fis-termo-hukum-hukum2)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-hukum-hukum2-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Formulasi Kelvin-Planck",
    difficulty: "mudah",
    statement: "Pernyataan Kelvin-Planck mengenai Hukum II Termodinamika secara mendasar menegaskan bahwa ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kalor tidak dapat mengalir secara spontan dari benda dingin ke benda panas tanpa adanya usaha luar",
      "Tidak mungkin membuat mesin kalor yang beroperasi dalam suatu siklus yang semata-mata menyerap kalor dari satu reservoir dan mengubah seluruhnya menjadi usaha mekanik",
      "Entropi suatu sistem yang terisolasi akan selalu bernilai nol pada proses reversibel",
      "Total energi dalam suatu sistem terisolasi selalu konstan pada setiap proses termodinamika",
      "Usaha yang dilakukan oleh suatu gas ideal selalu sama dengan jumlah kalor yang diserapnya"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum II Termodinamika memiliki dua formulasi klasik yang setara: formulasi Kelvin-Planck untuk mesin kalor dan formulasi Clausius untuk mesin pendingin/aliran kalor.",
      steps: "1. Formulasi Kelvin-Planck menyatakan: 'Tidak mungkin membuat mesin kalor yang bekerja dalam suatu siklus yang semata-mata menyerap kalor dari satu reservoir tunggal dan mengubah seluruh kalor tersebut menjadi usaha luar netto.'<br>2. Implikasi utama pernyataan ini adalah bahwa efisiensi mesin termal tidak akan pernah dapat mencapai $100\\%$ ($1$), karena sebagian kalor wajib dibuang ke reservoir bersuhu lebih rendah.<br>3. Pilihan A merupakan formulasi Clausius.<br>4. Pilihan D adalah prinsip kekekalan energi (Hukum I Termodinamika).<br>5. Jadi, pernyataan yang benar untuk Kelvin-Planck adalah pilihan B.",
      pitfalls: "Siswa kerap tertukar antara formulasi Kelvin-Planck (berkaitan dengan efisiensi mesin kalor dan ketidakmungkinan konversi energi kalor 100% menjadi usaha) dengan formulasi Clausius (berkaitan dengan ketidakmungkinan aliran kalor spontan dari suhu rendah ke suhu tinggi)."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi Reservoir Panas",
    difficulty: "mudah",
    statement: "Sebuah reservoir panas pada suhu tetap $500\\text{ K}$ melepaskan kalor sebesar $2.500\\text{ J}$ ke lingkungan. Besar perubahan entropi reservoir panas tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-5\\text{ J/K}$",
      "$+5\\text{ J/K}$",
      "$-0{,}2\\text{ J/K}$",
      "$+0{,}2\\text{ J/K}$",
      "$-1{,}25\\times 10^6\\text{ J/K}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Perubahan entropi ($\\Delta S$) suatu sistem pada suhu mutlak konstan didefinisikan sebagai:<br>$$\\Delta S = \\frac{Q}{T}$$<br>dengan $Q$ adalah kalor yang diserap/dilepas dan $T$ adalah suhu mutlak sistem dalam satuan Kelvin.",
      steps: "1. Tentukan tanda kalor: reservoir melepaskan kalor ke lingkungan, sehingga bernilai negatif:<br>$$Q = -2.500\\text{ J}$$<br>2. Suhu reservoir konstan pada $T = 500\\text{ K}$.<br>3. Hitung perubahan entropi reservoir:<br>$$\\Delta S = \\frac{Q}{T} = \\frac{-2.500\\text{ J}}{500\\text{ K}} = -5\\text{ J/K}$$<br>4. Dengan demikian, jawaban yang tepat adalah pilihan A.",
      pitfalls: "Lupa menyertakan tanda negatif pada kalor yang dilepaskan reservoir ($Q < 0$), sehingga salah memilih nilai positif $+5\\text{ J/K}$."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Prinsip Peningkatan Entropi Semesta",
    difficulty: "mudah",
    statement: "Menurut Hukum II Termodinamika, dalam setiap proses alami (spontan) yang berlangsung di alam semesta, perubahan total entropi semesta ($\\Delta S_{\\text{semesta}}$) selalu ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Selalu bernilai nol",
      "Selalu bernilai negatif",
      "Selalu lebih besar dari nol",
      "Bergantung pada jenis gas yang terlibat",
      "Berkurang seiring bertambahnya waktu"
    ],
    correctIndex: 2,
    solution: {
      concept: "Prinsip peningkatan entropi semesta menyatakan bahwa dalam setiap sistem terisolasi sempurna (seperti alam semesta), entropi total cenderung bertambah menuju nilai maksimum seiring terjadinya proses spontan (ireversibel):<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$",
      steps: "1. Pada proses reversibel ideal (tidak ada di alam nyata), $\\Delta S_{\\text{semesta}} = 0$.<br>2. Pada proses alami yang berlangsung secara spontan di alam semesta, proses selalu bersifat ireversibel karena adanya efek disipasi energi dan perbedaan gradien suhu berhingga.<br>3. Oleh karena itu, pada setiap proses alami, $\\Delta S_{\\text{semesta}} > 0$ (selalu bernilai positif atau meningkat).<br>4. Pernyataan yang benar adalah pilihan C.",
      pitfalls: "Terkadang siswa mengacaukan entropi total semesta dengan entropi sistem lokal. Entropi sistem lokal dapat berkurang (misal pembekuan air murni), namun penurunan tersebut selalu diimbangi oleh pertambahan entropi lingkungan yang lebih besar sehingga entropi total semesta tetap bertambah positif."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Perubahan Entropi Peleburan Es",
    difficulty: "mudah",
    statement: "Suatu balok es pada suhu $0^\\circ\\text{C}$ menyerap kalor sebesar $682{,}5\\text{ J}$ dari lingkungan sehingga mencair sebagian pada suhu tetap. Perubahan entropi dari es tersebut selama proses penyerapan kalor adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ J/K}$",
      "$+2{,}5\\text{ J/K}$",
      "$+250\\text{ J/K}$",
      "$-2{,}5\\text{ J/K}$",
      "Tak terdefinisi karena pembagian dengan nol"
    ],
    correctIndex: 1,
    solution: {
      concept: "Perubahan wujud zat pada titik lebur terjadi secara isotermal (suhu tetap). Perubahan entropi zat dihitung menggunakan rumus:<br>$$\\Delta S = \\frac{Q}{T}$$<br>dengan $T$ merupakan suhu mutlak dalam skala Kelvin ($T = T_C + 273$).",
      steps: "1. Konversikan suhu dari Celcius ke Kelvin mutlak:<br>$$T = 0^\\circ\\text{C} = 0 + 273 = 273\\text{ K}$$<br>2. Karena es menyerap kalor dari lingkungan, kalor bertanda positif:<br>$$Q = +682{,}5\\text{ J}$$<br>3. Hitung perubahan entropi es:<br>$$\\Delta S = \\frac{Q}{T} = \\frac{+682{,}5\\text{ J}}{273\\text{ K}} = +2{,}5\\text{ J/K}$$<br>4. Jadi jawaban yang benar adalah pilihan B.",
      pitfalls: "Kesalahan umum adalah memasukkan nilai suhu Celsius $0^\\circ\\text{C}$ langsung sebagai $T = 0$, yang mengarah pada kesimpulan pembagian dengan nol atau tak terdefinisi. Dalam semua perhitungan termodinamika, satuan suhu wajib Kelvin mutlak."
    }
  },
  {
    id: "fis-termo-hukum-hukum2-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-hukum2",
    category: "Karakteristik Proses Reversibel",
    difficulty: "mudah",
    statement: "Pernyataan berikut yang benar mengenai proses termodinamika reversibel adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Proses yang dapat dibalikkan arahnya tanpa meninggalkan perubahan netto apa pun pada sistem maupun lingkungannya",
      "Proses ekspansi bebas gas ke ruang hampa yang berlangsung seketika",
      "Aliran kalor spontan akibat perbedaan suhu berhingga antara dua benda",
      "Proses nyata yang menyebabkan peningkatan entropi total semesta",
      "Semua proses alami yang berlangsung secara spontan di alam nyata"
    ],
    correctIndex: 0,
    solution: {
      concept: "Proses reversibel adalah proses ideal yang berlangsung secara kuasistatis (sangat lambat melalui rangkaian keadaan seimbang tanpa disipasi friksi/viskositas), sehingga sistem dan lingkungan dapat kembali secara tepat ke keadaan semula tanpa perubahan netto pada semesta.",
      steps: "1. Berdasarkan definisi ilmiah termodinamika, proses reversibel adalah proses yang arahnya dapat dibalik sehingga sistem dan lingkungannya kembali persis ke kondisi awal tanpa menyisakan efek permanen di alam semesta.<br>2. Pada proses reversibel ideal, perubahan total entropi semesta sama dengan nol ($\\Delta S_{\\text{semesta}} = 0$).<br>3. Ekspansi bebas, disipasi gesekan, dan perpindahan panas melalui beda suhu berhingga adalah contoh proses ireversibel.<br>4. Jadi, pilihan A adalah pernyataan yang benar dan akurat.",
      pitfalls: "Sering mengira proses alami dapat bersifat reversibel. Padahal semua proses di dunia nyata bersifat ireversibel karena selalu disertai disipasi mekanik (gesekan) atau gradien termal/konsentrasi."
    }
  }
];
