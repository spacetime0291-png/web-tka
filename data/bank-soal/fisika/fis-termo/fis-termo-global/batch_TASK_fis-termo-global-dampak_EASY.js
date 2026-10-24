/**
 * Batch Task: TASK_fis-termo-global-dampak_EASY
 * SubTopic: Penyebab & Dampak Pemanasan Global (fis-termo-global-dampak)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-global-dampak-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Penyebab Utama Peningkatan Gas Rumah Kaca",
    difficulty: "mudah",
    statement: "Sejak masa revolusi industri pada abad ke-18 hingga era modern, konsentrasi gas karbon dioksida ($\\text{CO}_2$) di atmosfer bumi melonjak dari sekitar $280\\text{ ppm}$ menjadi lebih dari $420\\text{ ppm}$. Faktor pendorong antropogenik paling dominan yang menyebabkan lonjakan drastis konsentrasi $\\text{CO}_2$ tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Penggunaan pupuk kimia buatan pada tanaman pangan",
      "Pembakaran bahan bakar fosil (batu bara, minyak bumi, dan gas alam) untuk energi dan transportasi",
      "Peningkatan populasi hewan laut pemakan plankton",
      "Uji coba peluncuran satelit luar angkasa",
      "Pelepasan gas klorin dari instalasi pemurnian air minum"
    ],
    correctIndex: 1,
    solution: {
      concept: "Penyebab utama kenaikan konsentrasi gas rumah kaca global:<br>- Pembakaran bahan bakar fosil hidrokarbon (batu bara, minyak bumi, gas alam) menyumbang lebih dari $75\\%$ dari total emisi gas rumah kaca global dan hampir $90\\%$ dari seluruh emisi $\\text{CO}_2$.<br>- Reaksi kimia pembakaran hidrokarbon secara umum: $$\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right)\\text{O}_2 \\to x\\,\\text{CO}_2 + \\frac{y}{2}\\,\\text{H}_2\\text{O} + \\text{Energi}$$",
      steps: "1. Analisis sumber emisi $\\text{CO}_2$ global berdasarkan data sains iklim IPCC.<br>2. Sektor pembangkit listrik tenaga uap batu bara, industri manufaktur, dan kendaraan bermotor berbahan bakar bensin/solar merupakan konsumen bahan bakar fosil terbesar.<br>3. Pembakaran karbon purba yang tersimpan jutaan tahun di kerak bumi melepaskan miliaran ton $\\text{CO}_2$ setiap tahun ke siklus atmosfer.<br>4. Jadi, pembakaran bahan bakar fosil adalah penyebab dominan.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Penggunaan pupuk buatan (opsi A) memang melepaskan gas rumah kaca, namun gas yang dilepaskan dominan berupa dinitrogen oksida ($\\text{N}_2\\text{O}$), bukan penyumbang utama volume masif $\\text{CO}_2$."
    }
  },
  {
    id: "fis-termo-global-dampak-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Mekanisme Fisik Kenaikan Muka Air Laut",
    difficulty: "mudah",
    statement: "Pemanasan global memicu kenaikan rata-rata permukaan air laut (sea level rise) secara global yang mengancam wilayah pesisir dan pulau-pulau kecil. Dua mekanisme fisik primer yang secara langsung bertanggung jawab atas fenomena kenaikan muka air laut tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Penurunan penguapan air samudra dan penurunan salinitas air laut",
      "Pemuaian termal air laut dan penambahan massa air dari pencairan es/gletser di daratan",
      "Pencairan es laut terapung di kutub utara dan peningkatan curah hujan di daratan",
      "Peningkatan pasang surut gravitasi bulan dan penurunan massa jenis atmosfer",
      "Pengendapan sedimen sungai ke muara dan penurunan aktivitas gempa bawah laut"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kenaikan permukaan air laut global disebabkan oleh dua proses fisis utama:<br>1. Pemuaian termal air laut (thermal expansion): ketika suhu lapisan atas samudra naik, volume air laut memuai ($\\Delta V = V_0 \\gamma \\Delta T$). Proses ini menyumbang sekitar sepertiga hingga setengah dari total kenaikan muka air laut.<br>2. Pencairan es daratan: mencairnya gletser pegunungan dan lembaran es daratan (Greenland dan Antartika) menambah volume massa air baru ke cekungan samudra.",
      steps: "1. Tinjau faktor-faktor penambah volume air samudra.<br>2. Berdasarkan prinsip fisika pemuaian zat cair, air hangat memiliki volume jenis lebih besar daripada air dingin.<br>3. Es yang berada di atas daratan (gletser dan ice sheet) jika mencair akan mengalir masuk ke laut sehingga menambah volume air total.<br>4. Sebaliknya, es laut yang sudah terapung (seperti es kutub Arktik) tidak menambah ketinggian muka air laut saat mencair karena sudah menggantikan volumenya sendiri berdasarkan Hukum Archimedes.<br>5. Jadi, dua mekanisme primer adalah pemuaian termal dan pencairan es daratan.<br>6. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jebakan konseptual umum adalah mengira pencairan es laut terapung di Kutub Utara (Arktik) menaikkan muka air laut. Sesuai Hukum Archimedes, es terapung tidak menaikkan ketinggian permukaan air ketika melebur."
    }
  },
  {
    id: "fis-termo-global-dampak-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Pengasaman Laut (Ocean Acidification)",
    difficulty: "mudah",
    statement: "Selain menghangatkan atmosfer, peningkatan konsentrasi gas $\\text{CO}_2$ di udara diserap dalam jumlah besar oleh lautan dunia (sekitar $25\\% - 30\\%$ dari total emisi). Penyerapan gas $\\text{CO}_2$ yang berlebih oleh air laut memicu fenomena pengasaman laut (ocean acidification), yang secara fisikawi dan kimiawi ditandai dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Kenaikan nilai pH air laut di atas 9 sehingga air laut menjadi basa kuat",
      "Penurunan nilai pH air laut akibat pembentukan asam karbonat yang melepaskan ion hidrogen ($H^+$)",
      "Pengendapan garam dapur ($\\text{NaCl}$) secara mendadak di dasar palung laut",
      "Penurunan titik didih normal air laut menjadi di bawah $90^\\circ\\text{C}$",
      "Peningkatan konsentrasi gas oksigen terlarut secara drastis di permukaan laut"
    ],
    correctIndex: 1,
    solution: {
      concept: "Reaksi kimia penyerapan $\\text{CO}_2$ oleh air laut:<br>$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$$<br>Peningkatan ion hidrogen ($\\text{H}^+$) menyebabkan penurunan pH air laut (air laut menjadi lebih asam), serta menurunkan ketersediaan ion karbonat ($\\text{CO}_3^{2-}$), yang menghambat pembentukan cangkang kalsium karbonat ($\\text{CaCO}_3$) pada terumbu karang dan moluska.",
      steps: "1. Analisis interaksi $\\text{CO}_2$ atmosfer dengan permukaan hidrosfer.<br>2. Reaksi pembentukan asam karbonat menghasilkan ion $\\text{H}^+$.<br>3. Semakin banyak ion $\\text{H}^+$, nilai pH air laut semakin turun (sejak masa pra-industri, pH rata-rata laut turun dari $8{,}2$ menjadi sekitar $8{,}1$, yang setara dengan kenaikan keasaman sekitar $30\\%$ karena skala pH adalah logaritmik).<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Pengasaman laut berarti nilai pH-nya TURUN (bukan naik, opsi A). Jangan terkecoh dengan istilah basa/asam: air laut saat ini masih bersifat sedikit basa ($8{,}1$), namun proses penurunan pH menuju nilai yang lebih rendah disebut pengasaman (acidification)."
    }
  },
  {
    id: "fis-termo-global-dampak-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Anomali Cuaca dan Iklim Ekstrem",
    difficulty: "mudah",
    statement: "Pemanasan global tidak hanya menyebabkan kenaikan temperatur rata-rata tahunan permukaan bumi, tetapi juga meningkatkan intensitas dan frekuensi fenomena cuaca ekstrem. Contoh dampak anomali iklim ekstrem yang secara langsung teramati di berbagai belahan dunia adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Pola pergantian musim tanam yang semakin stabil dan dapat diprediksi secara tepat",
      "Penurunan kekuatan angin badai tropis di seluruh samudra khatulistiwa",
      "Gelombang panas ekstrem (heatwaves), kekeringan berkepanjangan, dan badai presipitasi lebat penyebab banjir bandang",
      "Pembentukan lapisan es permanen baru di wilayah gurun subtropis",
      "Penurunan laju penguapan air di seluruh waduk dan danau daratan"
    ],
    correctIndex: 2,
    solution: {
      concept: "Kenaikan energi termal dalam sistem atmosfer-laut bumi meningkatkan ketidakstabilan dinamika fluida atmosfer:<br>- Udara yang lebih hangat menampung lebih banyak uap air (energi potensial laten tinggi).<br>- Akibatnya, saat terjadi pelepasan energi, badai presipitasi menjadi jauh lebih hebat dan berpotensi memicu banjir bandang ekstrem.<br>- Sebaliknya, wilayah yang mengalami subsiden udara kering mengalami penguapan intensif yang memicu kekeringan parah dan gelombang panas ekstrem.",
      steps: "1. Tinjau konsekuensi peningkatan suhu atmosfer global.<br>2. Dinamika iklim menjadi semakin tidak menentu dan volatil.<br>3. Opsi A dan B bertentangan dengan kenyataan fisis pemanasan global.<br>4. Gejala gelombang panas, musim kemarau ekstrem, dan banjir bandang mendadak adalah ciri khas anomali cuaca akibat pemanasan global.<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Pemanasan global bukan berarti bumi di setiap saat dan di setiap titik selalu terasa panas; pergeseran arus atmosfer kutub (jet stream) bahkan kadang memicu semburan udara dingin Arktik sesaat (polar vortex), namun dalam skala global cuaca ekstrem meningkat secara menyeluruh."
    }
  },
  {
    id: "fis-termo-global-dampak-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Konsep Jejak Karbon (Carbon Footprint)",
    difficulty: "mudah",
    statement: "Dalam kajian mitigasi lingkungan hidup, istilah jejak karbon (carbon footprint) didefinisikan sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Bekas endapan jelaga hitam karbon yang tertinggal pada pipa cerobong asap pabrik",
      "Total jumlah emisi gas rumah kaca yang dihasilkan secara langsung maupun tidak langsung oleh aktivitas individu, organisasi, atau produk, dinyatakan dalam satuan ekuivalen karbon dioksida",
      "Lapisan sedimen batu bara yang terbentuk dari pembusukan hutan purba zaman karbon",
      "Konsentrasi unsur karbon murni yang terdapat dalam struktur sel organisme hidup",
      "Banyaknya serbuk arang aktif yang digunakan untuk menyaring limbah cair industri"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jejak karbon (carbon footprint) adalah ukuran total emisi gas rumah kaca (GRK)—termasuk $\\text{CO}_2$, $\\text{CH}_4$, $\\text{N}_2\\text{O}$—yang dihasilkan oleh aktivitas manusia (seperti konsumsi listrik, transportasi, konsumsi makanan, dan rantai pasok industri) yang diekspresikan dalam satuan ekuivalen $\\text{CO}_2$ ($\\text{kg CO}_2\\text{e}$ atau $\\text{ton CO}_2\\text{e}$).",
      steps: "1. Pahami terminologi jejak karbon dalam ilmu keberlanjutan dan fisika lingkungan.<br>2. Jejak karbon mencakup emisi langsung (seperti pembakaran bensin pada mobil) dan emisi tidak langsung (seperti emisi dari pembangkit listrik yang menyuplai energi rumah).<br>3. Satuan standarnya dinyatakan dalam massa ekuivalen $\\text{CO}_2$.<br>4. Jadi, definisi yang tepat adalah pilihan B.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jejak karbon bukanlah endapan jelaga atau zat padat hitam karbon secara harfiah (opsi A), melainkan metrik perhitungan kuantitatif emisi gas rumah kaca ke atmosfer."
    }
  }
];
