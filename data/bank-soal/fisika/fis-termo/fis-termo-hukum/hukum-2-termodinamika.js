/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Hukum II Termodinamika (fis-termo-hukum-hukum2)
 * Slug: hukum-2-termodinamika
 * Indikator: Arah aliran kalor spontan, konsep entropi, dan batasan konversi kalor total menjadi usaha.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-hukum2";
  const subTopicSlug = "hukum-2-termodinamika";
  const questions = [
  {
    "id": "fis-termo-hukum-hukum2-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Formulasi Kelvin-Planck",
    "difficulty": "mudah",
    "statement": "Pernyataan Kelvin-Planck mengenai Hukum II Termodinamika secara mendasar menegaskan bahwa ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kalor tidak dapat mengalir secara spontan dari benda dingin ke benda panas tanpa adanya usaha luar",
      "Tidak mungkin membuat mesin kalor yang beroperasi dalam suatu siklus yang semata-mata menyerap kalor dari satu reservoir dan mengubah seluruhnya menjadi usaha mekanik",
      "Entropi suatu sistem yang terisolasi akan selalu bernilai nol pada proses reversibel",
      "Total energi dalam suatu sistem terisolasi selalu konstan pada setiap proses termodinamika",
      "Usaha yang dilakukan oleh suatu gas ideal selalu sama dengan jumlah kalor yang diserapnya"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum II Termodinamika memiliki dua formulasi klasik yang setara: formulasi Kelvin-Planck untuk mesin kalor dan formulasi Clausius untuk mesin pendingin/aliran kalor.",
      "steps": "1. Formulasi Kelvin-Planck menyatakan: 'Tidak mungkin membuat mesin kalor yang bekerja dalam suatu siklus yang semata-mata menyerap kalor dari satu reservoir tunggal dan mengubah seluruh kalor tersebut menjadi usaha luar netto.'<br>2. Implikasi utama pernyataan ini adalah bahwa efisiensi mesin termal tidak akan pernah dapat mencapai $100\\%$ ($1$), karena sebagian kalor wajib dibuang ke reservoir bersuhu lebih rendah.<br>3. Pilihan A merupakan formulasi Clausius.<br>4. Pilihan D adalah prinsip kekekalan energi (Hukum I Termodinamika).<br>5. Jadi, pernyataan yang benar untuk Kelvin-Planck adalah pilihan B.",
      "pitfalls": "Siswa kerap tertukar antara formulasi Kelvin-Planck (berkaitan dengan efisiensi mesin kalor dan ketidakmungkinan konversi energi kalor 100% menjadi usaha) dengan formulasi Clausius (berkaitan dengan ketidakmungkinan aliran kalor spontan dari suhu rendah ke suhu tinggi)."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "formulasi Kelvin-Planck untuk mesin kalor dan formulasi Clausius untuk mesin pendingin/aliran kalor."
  },
  {
    "id": "fis-termo-hukum-hukum2-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi Reservoir Panas",
    "difficulty": "mudah",
    "statement": "Sebuah reservoir panas pada suhu tetap $500\\text{ K}$ melepaskan kalor sebesar $2.500\\text{ J}$ ke lingkungan. Besar perubahan entropi reservoir panas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-5\\text{ J/K}$",
      "$+5\\text{ J/K}$",
      "$-0{,}2\\text{ J/K}$",
      "$+0{,}2\\text{ J/K}$",
      "$-1{,}25\\times 10^6\\text{ J/K}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perubahan entropi ($\\Delta S$) suatu sistem pada suhu mutlak konstan didefinisikan sebagai:<br>$$\\Delta S = \\frac{Q}{T}$$<br>dengan $Q$ adalah kalor yang diserap/dilepas dan $T$ adalah suhu mutlak sistem dalam satuan Kelvin.",
      "steps": "1. Tentukan tanda kalor: reservoir melepaskan kalor ke lingkungan, sehingga bernilai negatif:<br>$$Q = -2.500\\text{ J}$$<br>2. Suhu reservoir konstan pada $T = 500\\text{ K}$.<br>3. Hitung perubahan entropi reservoir:<br>$$\\Delta S = \\frac{Q}{T} = \\frac{-2.500\\text{ J}}{500\\text{ K}} = -5\\text{ J/K}$$<br>4. Dengan demikian, jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Lupa menyertakan tanda negatif pada kalor yang dilepaskan reservoir ($Q < 0$), sehingga salah memilih nilai positif $+5\\text{ J/K}$."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Perubahan entropi ($\\Delta S$) suatu sistem pada suhu mutlak konstan didefinisikan sebagai: $$\\Delta S = \\frac{Q}{T}$$ dengan $Q$ adalah kalor yang diserap/dilepas dan $T$ adalah suhu mutlak sistem dalam satuan Kelvin."
  },
  {
    "id": "fis-termo-hukum-hukum2-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Prinsip Peningkatan Entropi Semesta",
    "difficulty": "mudah",
    "statement": "Menurut Hukum II Termodinamika, dalam setiap proses alami (spontan) yang berlangsung di alam semesta, perubahan total entropi semesta ($\\Delta S_{\\text{semesta}}$) selalu ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Selalu bernilai nol",
      "Selalu bernilai negatif",
      "Selalu lebih besar dari nol",
      "Bergantung pada jenis gas yang terlibat",
      "Berkurang seiring bertambahnya waktu"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Prinsip peningkatan entropi semesta menyatakan bahwa dalam setiap sistem terisolasi sempurna (seperti alam semesta), entropi total cenderung bertambah menuju nilai maksimum seiring terjadinya proses spontan (ireversibel):<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$",
      "steps": "1. Pada proses reversibel ideal (tidak ada di alam nyata), $\\Delta S_{\\text{semesta}} = 0$.<br>2. Pada proses alami yang berlangsung secara spontan di alam semesta, proses selalu bersifat ireversibel karena adanya efek disipasi energi dan perbedaan gradien suhu berhingga.<br>3. Oleh karena itu, pada setiap proses alami, $\\Delta S_{\\text{semesta}} > 0$ (selalu bernilai positif atau meningkat).<br>4. Pernyataan yang benar adalah pilihan C.",
      "pitfalls": "Terkadang siswa mengacaukan entropi total semesta dengan entropi sistem lokal. Entropi sistem lokal dapat berkurang (misal pembekuan air murni), namun penurunan tersebut selalu diimbangi oleh pertambahan entropi lingkungan yang lebih besar sehingga entropi total semesta tetap bertambah positif."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Prinsip peningkatan entropi semesta menyatakan bahwa dalam setiap sistem terisolasi sempurna (seperti alam semesta), entropi total cenderung bertambah menuju nilai maksimum seiring terjadinya proses spontan (ireversibel): $$\\Delta S_{\\text{semesta}} = \\Delta S_{\\text{sistem}} + \\Delta S_{\\text{lingkungan}} > 0$$. **Tips:** Terkadang siswa mengacaukan entropi total semesta dengan entropi sistem lokal."
  },
  {
    "id": "fis-termo-hukum-hukum2-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi Peleburan Es",
    "difficulty": "mudah",
    "statement": "Suatu balok es pada suhu $0^\\circ\\text{C}$ menyerap kalor sebesar $682{,}5\\text{ J}$ dari lingkungan sehingga mencair sebagian pada suhu tetap. Perubahan entropi dari es tersebut selama proses penyerapan kalor adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ J/K}$",
      "$+2{,}5\\text{ J/K}$",
      "$+250\\text{ J/K}$",
      "$-2{,}5\\text{ J/K}$",
      "Tak terdefinisi karena pembagian dengan nol"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Perubahan wujud zat pada titik lebur terjadi secara isotermal (suhu tetap). Perubahan entropi zat dihitung menggunakan rumus:<br>$$\\Delta S = \\frac{Q}{T}$$<br>dengan $T$ merupakan suhu mutlak dalam skala Kelvin ($T = T_C + 273$).",
      "steps": "1. Konversikan suhu dari Celcius ke Kelvin mutlak:<br>$$T = 0^\\circ\\text{C} = 0 + 273 = 273\\text{ K}$$<br>2. Karena es menyerap kalor dari lingkungan, kalor bertanda positif:<br>$$Q = +682{,}5\\text{ J}$$<br>3. Hitung perubahan entropi es:<br>$$\\Delta S = \\frac{Q}{T} = \\frac{+682{,}5\\text{ J}}{273\\text{ K}} = +2{,}5\\text{ J/K}$$<br>4. Jadi jawaban yang benar adalah pilihan B.",
      "pitfalls": "Kesalahan umum adalah memasukkan nilai suhu Celsius $0^\\circ\\text{C}$ langsung sebagai $T = 0$, yang mengarah pada kesimpulan pembagian dengan nol atau tak terdefinisi. Dalam semua perhitungan termodinamika, satuan suhu wajib Kelvin mutlak."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Perubahan wujud zat pada titik lebur terjadi secara isotermal (suhu tetap). Perubahan entropi zat dihitung menggunakan rumus: $$\\Delta S = \\frac{Q}{T}$$ dengan $T$ merupakan suhu mutlak dalam skala Kelvin ($T = T_C + 273$)."
  },
  {
    "id": "fis-termo-hukum-hukum2-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Karakteristik Proses Reversibel",
    "difficulty": "mudah",
    "statement": "Pernyataan berikut yang benar mengenai proses termodinamika reversibel adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Proses yang dapat dibalikkan arahnya tanpa meninggalkan perubahan netto apa pun pada sistem maupun lingkungannya",
      "Proses ekspansi bebas gas ke ruang hampa yang berlangsung seketika",
      "Aliran kalor spontan akibat perbedaan suhu berhingga antara dua benda",
      "Proses nyata yang menyebabkan peningkatan entropi total semesta",
      "Semua proses alami yang berlangsung secara spontan di alam nyata"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Proses reversibel adalah proses ideal yang berlangsung secara kuasistatis (sangat lambat melalui rangkaian keadaan seimbang tanpa disipasi friksi/viskositas), sehingga sistem dan lingkungan dapat kembali secara tepat ke keadaan semula tanpa perubahan netto pada semesta.",
      "steps": "1. Berdasarkan definisi ilmiah termodinamika, proses reversibel adalah proses yang arahnya dapat dibalik sehingga sistem dan lingkungannya kembali persis ke kondisi awal tanpa menyisakan efek permanen di alam semesta.<br>2. Pada proses reversibel ideal, perubahan total entropi semesta sama dengan nol ($\\Delta S_{\\text{semesta}} = 0$).<br>3. Ekspansi bebas, disipasi gesekan, dan perpindahan panas melalui beda suhu berhingga adalah contoh proses ireversibel.<br>4. Jadi, pilihan A adalah pernyataan yang benar dan akurat.",
      "pitfalls": "Sering mengira proses alami dapat bersifat reversibel. Padahal semua proses di dunia nyata bersifat ireversibel karena selalu disertai disipasi mekanik (gesekan) atau gradien termal/konsentrasi."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Proses reversibel adalah proses ideal yang berlangsung secara kuasistatis (sangat lambat melalui rangkaian keadaan seimbang tanpa disipasi friksi/viskositas), sehingga sistem dan lingkungan dapat kembali secara tepat ke keadaan semula tanpa perubahan netto pada semesta. **Tips:** Sering mengira proses alami dapat bersifat reversibel."
  },
  {
    "id": "fis-termo-hukum-hukum2-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi Semesta pada Aliran Kalor Konduksi",
    "difficulty": "sedang",
    "statement": "Kalor sebesar $1.200\\text{ J}$ mengalir secara spontan melalui batang logam dari reservoir panas bersuhu $600\\text{ K}$ ke reservoir dingin bersuhu $300\\text{ K}$. Total perubahan entropi alam semesta ($\\Delta S_{\\text{semesta}}$) akibat proses konduksi kalor tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ J/K}$",
      "$+2\\text{ J/K}$",
      "$-2\\text{ J/K}$",
      "$+6\\text{ J/K}$",
      "$+4\\text{ J/K}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Entropi total semesta pada perpindahan kalor konduksi tak-reversibel di antara dua reservoir bersuhu tetap dirumuskan sebagai penjumlahan perubahan entropi reservoir panas dan reservoir dingin:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_H + \\Delta S_C = -\\frac{Q}{T_H} + \\frac{Q}{T_C}$$",
      "steps": "1. Perubahan entropi reservoir panas ($T_H = 600\\text{ K}$ melepaskan kalor $Q = 1.200\\text{ J}$):<br>$$\\Delta S_H = -\\frac{1.200\\text{ J}}{600\\text{ K}} = -2\\text{ J/K}$$<br>2. Perubahan entropi reservoir dingin ($T_C = 300\\text{ K}$ menyerap kalor $Q = 1.200\\text{ J}$):<br>$$\\Delta S_C = +\\frac{1.200\\text{ J}}{300\\text{ K}} = +4\\text{ J/K}$$<br>3. Hitung perubahan total entropi semesta:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_H + \\Delta S_C = -2\\text{ J/K} + 4\\text{ J/K} = +2\\text{ J/K}$$<br>4. Jadi, pilihan yang tepat adalah B.",
      "pitfalls": "Siswa sering menganggap bahwa karena kalor yang berpindah kekal ($Q_{\\text{lepas}} = Q_{\\text{serap}}$), maka entropi totalnya juga kekal bernilai nol. Padahal karena $T_C < T_H$, pertambahan entropi di sisi dingin selalu lebih besar daripada penurunan entropi di sisi panas."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Entropi total semesta pada perpindahan kalor konduksi tak-reversibel di antara dua reservoir bersuhu tetap dirumuskan sebagai penjumlahan perubahan entropi reservoir panas dan reservoir dingin: $$\\Delta S_{\\text{semesta}} = \\Delta S_H + \\Delta S_C = -\\frac{Q}{T_H} + \\frac{Q}{T_C}$$."
  },
  {
    "id": "fis-termo-hukum-hukum2-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi Ekspansi Isotermal Gas Ideal",
    "difficulty": "sedang",
    "statement": "Sebanyak $1\\text{ mol}$ gas ideal mengalami pemuaian secara isotermal dan reversibel pada suhu $300\\text{ K}$ sehingga volumenya mengembang dari $V_1 = 2\\text{ liter}$ menjadi $V_2 = 4\\text{ liter}$. Jika konstanta gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan $\\ln 2 \\approx 0{,}693$, besar perubahan entropi gas tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2{,}88\\text{ J/K}$",
      "$4{,}15\\text{ J/K}$",
      "$5{,}76\\text{ J/K}$",
      "$8{,}31\\text{ J/K}$",
      "$11{,}52\\text{ J/K}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada proses isotermal reversibel gas ideal, perubahan energi dalam $\\Delta U = 0$ sehingga $Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$. Maka perubahan entropi gas dirumuskan sebagai:<br>$$\\Delta S = \\frac{Q}{T} = n R \\ln\\left(\\frac{V_2}{V_1}\\right)$$",
      "steps": "1. Identifikasi data: $n = 1\\text{ mol}$, $V_1 = 2\\text{ L}$, $V_2 = 4\\text{ L}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio volume adalah $\\frac{V_2}{V_1} = \\frac{4}{2} = 2$.<br>3. Hitung perubahan entropi gas:<br>$$\\Delta S = n R \\ln 2 = 1 \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 0{,}693 \\approx 5{,}76\\text{ J/K}$$<br>4. Dengan demikian, jawaban yang benar adalah pilihan C.",
      "pitfalls": "Sering mengira bahwa karena suhunya tetap ($\\Delta T = 0$), perubahan entropi $\\Delta S = 0$. Pada pemuaian isotermal, gas menyerap kalor dari lingkungan untuk melakukan usaha, sehingga entropi gas bertambah ($\\Delta S > 0$)."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada proses isotermal reversibel gas ideal, perubahan energi dalam $\\Delta U = 0$ sehingga $Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$. Maka perubahan entropi gas dirumuskan sebagai: $$\\Delta S = \\frac{Q}{T} = n R \\ln\\left(\\frac{V_2}{V_1}\\right)$$."
  },
  {
    "id": "fis-termo-hukum-hukum2-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi pada Pemanasan Suhu Variabel",
    "difficulty": "sedang",
    "statement": "Suatu zat cair bermassa $0{,}5\\text{ kg}$ dengan kalor jenis $c = 4.000\\text{ J}/(\\text{kg}\\cdot\\text{K})$ dipanaskan secara perlahan dari suhu $300\\text{ K}$ hingga mencapai $600\\text{ K}$ pada tekanan konstan. Jika diketahui $\\ln 2 \\approx 0{,}693$, perubahan entropi zat cair tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$693\\text{ J/K}$",
      "$1.000\\text{ J/K}$",
      "$1.386\\text{ J/K}$",
      "$2.000\\text{ J/K}$",
      "$2.772\\text{ J/K}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika suhu sistem berubah secara kontinu dari $T_1$ ke $T_2$, perubahan entropi dihitung melalui integrasi:<br>$$\\Delta S = \\int_{T_1}^{T_2} \\frac{dQ}{T} = \\int_{T_1}^{T_2} \\frac{m c\\, dT}{T} = m c \\ln\\left(\\frac{T_2}{T_1}\\right)$$",
      "steps": "1. Kapasitas kalor zat cair:<br>$$C = m c = 0{,}5\\text{ kg} \\times 4.000\\text{ J}/(\\text{kg}\\cdot\\text{K}) = 2.000\\text{ J/K}$$<br>2. Rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{600\\text{ K}}{300\\text{ K}} = 2$$<br>3. Hitung perubahan entropi zat cair:<br>$$\\Delta S = 2.000 \\times \\ln(2) = 2.000 \\times 0{,}693 = 1.386\\text{ J/K}$$<br>4. Jadi jawaban yang benar adalah pilihan C.",
      "pitfalls": "Jangan menggunakan rumus suhu tetap $\\Delta S = \\frac{Q}{T_{\\text{rata-rata}}}$ atau membagi kalor total $Q$ dengan suhu awal/akhir secara langsung. Integrasi wajib dilakukan jika suhu berubah selama transfer kalor."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Jika suhu sistem berubah secara kontinu dari $T_1$ ke $T_2$, perubahan entropi dihitung melalui integrasi: $$\\Delta S = \\int_{T_1}^{T_2} \\frac{dQ}{T} = \\int_{T_1}^{T_2} \\frac{m c\\, dT}{T} = m c \\ln\\left(\\frac{T_2}{T_1}\\right)$$."
  },
  {
    "id": "fis-termo-hukum-hukum2-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Uji Validitas Mesin Kalor (Teorema Carnot)",
    "difficulty": "sedang",
    "statement": "Seorang perancang mengklaim telah menciptakan mesin kalor yang bekerja di antara reservoir panas $500^\\circ\\text{C}$ dan reservoir dingin $100^\\circ\\text{C}$. Mesin tersebut dilaporkan menyerap kalor sebesar $10.000\\text{ J}$ dari reservoir panas dan menghasilkan usaha luar sebesar $6.000\\text{ J}$. Berdasarkan Hukum II Termodinamika, klaim tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Benar, karena efisiensinya $60\\%$ masih berada di bawah $100\\%$ sehingga memenuhi Hukum I Termodinamika",
      "Mustahil (tidak benar), karena efisiensi teoritis maksimum mesin Carnot pada kedua suhu tersebut hanya sekitar $51{,}7\\%$",
      "Benar, karena efisiensi Carnot teoritisnya adalah $\\frac{500 - 100}{500} = 80\\%$",
      "Mustahil, karena mesin kalor sama sekali tidak boleh membuang kalor ke lingkungan dingin",
      "Benar, selama mesin beroperasi menggunakan siklus diesel bertahap ganda"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Teorema Carnot menyatakan bahwa tidak ada mesin kalor riil maupun reversibel yang dapat memiliki efisiensi lebih tinggi daripada efisiensi mesin Carnot ideal yang bekerja di antara dua batas reservoir suhu mutlak yang sama:<br>$$\\eta_{\\text{maks}} = \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}$$",
      "steps": "1. Konversikan batas suhu kerja ke Kelvin mutlak:<br>$$T_H = 500 + 273 = 773\\text{ K}$$<br>$$T_C = 100 + 273 = 373\\text{ K}$$<br>2. Hitung efisiensi maksimum Carnot teoritis:<br>$$\\eta_{\\text{Carnot}} = 1 - \\frac{373}{773} = \\frac{400}{773} \\approx 0{,}5174 = 51{,}74\\%$$<br>3. Hitung efisiensi yang diklaim perancang:<br>$$\\eta_{\\text{klaim}} = \\frac{W}{Q_H} = \\frac{6.000\\text{ J}}{10.000\\text{ J}} = 0{,}60 = 60\\%$$<br>4. Karena $\\eta_{\\text{klaim}} (60\\%) > \\eta_{\\text{Carnot}} (51{,}7\\%)$, mesin tersebut melanggar Hukum II Termodinamika sehingga klaim tersebut mustahil terwujud.<br>5. Jadi pilihan B adalah jawaban yang benar.",
      "pitfalls": "Sering menggunakan suhu Celsius secara langsung: $\\eta = 1 - \\frac{100}{500} = 80\\%$, yang menyesatkan dan menghasilkan kesimpulan keliru bahwa klaim $60\\%$ mungkin dicapai."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Teorema Carnot menyatakan bahwa tidak ada mesin kalor riil maupun reversibel yang dapat memiliki efisiensi lebih tinggi daripada efisiensi mesin Carnot ideal yang bekerja di antara dua batas reservoir suhu mutlak yang sama: $$\\eta_{\\text{maks}} = \\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}$$."
  },
  {
    "id": "fis-termo-hukum-hukum2-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-hukum2",
    "category": "Perubahan Entropi Pencampuran Air Terisolasi",
    "difficulty": "sedang",
    "statement": "Sebanyak $1\\text{ kg}$ air bersuhu $360\\text{ K}$ dicampurkan dengan $1\\text{ kg}$ air bersuhu $300\\text{ K}$ di dalam bejana kalorimeter terisolasi sempurna ($c_{\\text{air}} = 4.200\\text{ J}/(\\text{kg}\\cdot\\text{K})$). Setelah mencapai kesetimbangan termal pada suhu $330\\text{ K}$, perubahan total entropi semesta ($\\Delta S_{\\text{semesta}}$) bernilai positif karena .... (diketahui $\\ln(1{,}1) \\approx 0{,}0953$ dan $\\ln(11/12) \\approx -0{,}0870$)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Penurunan entropi air panas persis meniadakan kenaikan entropi air dingin sehingga totalnya nol",
      "Penurunan entropi air panas bermagnitudo lebih besar daripada pertambahan entropi air dingin",
      "Pertambahan entropi air dingin bermagnitudo lebih besar daripada penurunan entropi air panas sehingga $\\Delta S_{\\text{semesta}} \\approx +34{,}9\\text{ J/K}$",
      "Kedua massa air sama-sama melepaskan kalor ke udara bebas di sekitar wadah",
      "Tidak terjadi perubahan fase zat sehingga entropi tidak dipengaruhi suhu"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada pencampuran tak-reversibel di dalam bejana adiabatik terisolasi, kalor diserap oleh fluida dingin dan dilepaskan oleh fluida panas ($Q_{\\text{lepas}} = Q_{\\text{terima}}$). Total perubahan entropi semesta adalah $\\Delta S_{\\text{semesta}} = \\Delta S_1 + \\Delta S_2$.",
      "steps": "1. Perubahan entropi air panas ($360\\text{ K} \\to 330\\text{ K}$):<br>$$\\Delta S_1 = m c \\ln\\left(\\frac{330}{360}\\right) = 1 \\times 4.200 \\times \\ln\\left(\\frac{11}{12}\\right) = 4.200 \\times (-0{,}0870) = -365{,}4\\text{ J/K}$$<br>2. Perubahan entropi air dingin ($300\\text{ K} \\to 330\\text{ K}$):<br>$$\\Delta S_2 = m c \\ln\\left(\\frac{330}{300}\\right) = 1 \\times 4.200 \\times \\ln(1{,}1) = 4.200 \\times 0{,}0953 = +400{,}26\\text{ J/K}$$<br>3. Total perubahan entropi semesta:<br>$$\\Delta S_{\\text{semesta}} = \\Delta S_1 + \\Delta S_2 = -365{,}4 + 400{,}26 = +34{,}86\\text{ J/K} \\approx +34{,}9\\text{ J/K}$$<br>4. Karena pertambahan entropi air dingin lebih besar daripada penurunan entropi air panas, entropi total semesta meningkat ($\\Delta S > 0$), sesuai Hukum II Termodinamika.<br>5. Jadi pilihan yang benar adalah C.",
      "pitfalls": "Terkadang mengira sistem tertutup terisolasi tidak mengalami perubahan entropi total. Meskipun kalor tidak bertukar dengan lingkungan luar wadah, proses transfer panas internal antara air panas dan dingin bersifat spontan dan ireversibel, menghasilkan entropi netto semesta $\\Delta S > 0$."
    },
    "subTopicSlug": "hukum-2-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Hukum II Termodinamika",
    "subTopic": "Hukum II Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada pencampuran tak-reversibel di dalam bejana adiabatik terisolasi, kalor diserap oleh fluida dingin dan dilepaskan oleh fluida panas ($Q_{\\text{lepas}} = Q_{\\text{terima}}$). Total perubahan entropi semesta adalah $\\Delta S_{\\text{semesta}} = \\Delta S_1 + \\Delta S_2$. **Tips:** Terkadang mengira sistem tertutup terisolasi tidak mengalami perubahan entropi total."
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
