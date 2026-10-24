/**
 * Batch Task: TASK_fis-termo-global-mitigasi_MEDIUM
 * SubTopic: Mitigasi Pemanasan Global (fis-termo-global-mitigasi)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-global-mitigasi-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-mitigasi",
    category: "Kalkulasi Reduksi Emisi Transisi PLTS",
    difficulty: "sedang",
    statement: "Sebuah pembangkit listrik tenaga uap (PLTU) batu bara memiliki faktor emisi rata-rata sebesar $0{,}90\\text{ kg CO}_2$ per $\\text{kWh}$ listrik yang dibangkitkan. Suatu kawasan industri membangun instalasi Pembangkit Listrik Tenaga Surya (PLTS) atap dengan daya efektif yang mampu memasok energi listrik sebesar $200.000\\text{ kWh}$ per tahun untuk menggantikan sebagian pasokan dari PLTU batu bara tersebut. Jika emisi siklus hidup operasional PLTS diabaikan, massa gas $\\text{CO}_2$ yang berhasil dicegah pelepasannya ke atmosfer setiap tahun adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90\\text{ ton}$",
      "$180\\text{ ton}$",
      "$200\\text{ ton}$",
      "$222\\text{ ton}$",
      "$360\\text{ ton}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Reduksi emisi gas rumah kaca dihitung dari perkalian antara energi listrik terbarukan yang disubstitusikan ($E$) dengan intensitas emisi karbon pembangkit listrik fosil acuan ($FE$):<br>$$\\Delta m_{\\text{CO}_2} = E \\times FE$$",
      steps: "1. Tentukan energi listrik yang disubstitusikan: $E = 200.000\\text{ kWh/tahun}$.<br>2. Tentukan faktor emisi PLTU: $FE = 0{,}90\\text{ kg CO}_2/\\text{kWh}$.<br>3. Hitung reduksi emisi $\\text{CO}_2$:<br>$$\\Delta m_{\\text{CO}_2} = 200.000\\text{ kWh} \\times 0{,}90\\text{ kg/kWh} = 180.000\\text{ kg CO}_2$$<br>4. Konversi ke satuan ton ($1\\text{ ton} = 1000\\text{ kg}$):<br>$$\\Delta m_{\\text{CO}_2} = \\frac{180.000}{1000} = 180\\text{ ton CO}_2$$<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa mengalikan dengan faktor emisi $0{,}90$ dan langsung menganggap massa emisi sama dengan besaran $\\text{kWh}$ ($200\\text{ ton}$, opsi C)."
    }
  },
  {
    id: "fis-termo-global-mitigasi-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-mitigasi",
    category: "Prinsip Fisika Carbon Capture and Storage (CCS)",
    difficulty: "sedang",
    statement: "Teknologi Penangkapan dan Penyimpanan Karbon (Carbon Capture and Storage / CCS) menangkap gas $\\text{CO}_2$ langsung dari cerobong asap emisi industri berat sebelum dilepaskan ke udara. Untuk mengangkut dan menyuntikkan $\\text{CO}_2$ secara efisien ke dalam formasi batuan geologi sedimen berpori di kedalaman lebih dari $800\\text{ meter}$, gas $\\text{CO}_2$ terlebih dahulu dikompresi hingga mencapai fase fluida superkritis. Alasan fisis digunakannya fase superkritis adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Mengubah ikatan kimia $\\text{CO}_2$ menjadi gas mulia helium yang tidak dapat bereaksi",
      "Memiliki massa jenis tinggi menyerupai zat cair sehingga volume ruang simpannya jauh lebih kecil, namun memiliki viskositas rendah menyerupai gas sehingga mudah mengalir masuk menembus pori batuan",
      "Membuat $\\text{CO}_2$ membeku seketika menjadi es kering (dry ice) bersuhu $-78^\\circ\\text{C}$",
      "Meniadakan gaya gravitasi bumi pada partikel karbon sehingga tidak mengendap di dasar pipa",
      "Memecah ikatan kovalen antara atom karbon dan oksigen secara spontan tanpa masukan energi"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fluida superkritis adalah keadaan materi pada temperatur dan tekanan di atas titik kritis termodinamikanya ($T_c = 31{,}1^\\circ\\text{C}$ dan $P_c = 73{,}8\\text{ bar}$ untuk $\\text{CO}_2$).<br>Pada keadaan superkritis, batas fase cair-gas lenyap sehingga materi memiliki kombinasi sifat fisis unik:<br>1. Kerapatan (densitas) tinggi mendekati cairan ($600 - 800\\text{ kg/m}^3$), menghemat volume penyimpanan secara drastis.<br>2. Viskositas rendah dan difusivitas tinggi menyerupai gas, meminimalkan kehilangan tekanan saat dipompa melalui pipa injeksi dan memaksimalkan kemampuan penetrasi ke celah mikroskopis batuan sedimen penampung.",
      steps: "1. Analisis sifat keadaan zat di atas titik kritis termodinamika.<br>2. Pada kondisi ambien, $1\\text{ ton } \\text{CO}_2$ menempati volume gas lebih dari $500\\text{ m}^3$.<br>3. Dalam fase superkritis, volumenya menyusut menjadi kurang dari $2\\text{ m}^3$ dengan fluiditas tinggi.<br>4. Jadi, kombinasi densitas tinggi menyerupai cairan dan viskositas rendah menyerupai gas adalah keunggulan utamanya.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Fluida superkritis bukan es padat kering (dry ice, opsi C) dan bukan pemecahan ikatan kimia molekul (opsi E), melainkan modifikasi wujud fisik akibat tekanan dan temperatur tinggi."
    }
  },
  {
    id: "fis-termo-global-mitigasi-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-mitigasi",
    category: "Sistem Perdagangan Emisi Karbon (Cap-and-Trade)",
    difficulty: "sedang",
    statement: "Dalam skema perdagangan kuota emisi berbasis pasar (Cap-and-Trade), pemerintah menetapkan batas atas (cap) emisi karbon tahunan bagi industri:<br>- Pabrik Semen A memiliki kuota batas emisi sebesar $40.000\\text{ ton CO}_2\\text{e}$, namun menghasilkan emisi aktual sebesar $34.000\\text{ ton CO}_2\\text{e}$ karena menerapkan teknologi efisiensi panas kalsinasi.<br>- Pabrik Semen B memiliki kuota batas emisi sebesar $30.000\\text{ ton CO}_2\\text{e}$, namun menghasilkan emisi aktual sebesar $35.000\\text{ ton CO}_2\\text{e}$.<br>Jika Pabrik Semen B membeli kredit karbon dari sisa kuota Pabrik Semen A seharga $\\$30$ per ton $\\text{CO}_2\\text{e}$ untuk menutupi seluruh defisit emisinya, total biaya yang harus dibayarkan Pabrik Semen B adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\$90.000$",
      "$\\$150.000$",
      "$\\$180.000$",
      "$\\$210.000$",
      "$\\$300.000$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada sistem Cap-and-Trade:<br>1. Surplus kuota (kredit karbon yang dapat dijual) = $\\text{Kuota} - \\text{Emisi Aktual}$.<br>2. Defisit kuota (kredit karbon yang wajib dibeli) = $\\text{Emisi Aktual} - \\text{Kuota}$.<br>3. Total biaya transaksi = $\\text{Defisit yang dibeli} \\times \\text{Harga per satuan ton}$.",
      steps: "1. Hitung surplus kuota Pabrik A:<br>$$\\text{Surplus}_A = 40.000 - 34.000 = 6.000\\text{ ton CO}_2\\text{e}$$<br>2. Hitung defisit emisi Pabrik B yang harus ditutupi:<br>$$\\text{Defisit}_B = 35.000 - 30.000 = 5.000\\text{ ton CO}_2\\text{e}$$<br>Karena $5.000 \\le 6.000$, Pabrik B dapat menutupi seluruh defisitnya dari Pabrik A.<br>3. Hitung biaya yang dibayarkan Pabrik B:<br>$$\\text{Biaya} = 5.000\\text{ ton} \\times \\$30/\\text{ton} = \\$150.000$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan menggunakan surplus total Pabrik A ($6.000 \\times 30 = \\$180.000$, opsi C). Pabrik B hanya perlu membeli kuota sesuai defisit kebutuhannya sendiri yaitu $5.000\\text{ ton}$."
    }
  },
  {
    id: "fis-termo-global-mitigasi-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-mitigasi",
    category: "Bioenergy with Carbon Capture and Storage (BECCS)",
    difficulty: "sedang",
    statement: "Bioenergy with Carbon Capture and Storage (BECCS) merupakan salah satu teknologi emisi negatif (negative emission technologies) yang diproyeksikan dalam skenario mitigasi IPCC. Alasan ilmiah mengapa sistem BECCS mampu menghasilkan neraca karbon neto negatif (mengurangi jumlah $\\text{CO}_2$ netto dari atmosfer secara permanen) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Tanaman biomassa menyerap karbon dioksida atmosfer melalui fotosintesis selama masa tumbuhnya, lalu saat biomassa dibakar untuk energi listrik, $\\text{CO}_2$ hasil pembakaran ditangkap dan diinjeksi ke dalam tanah secara permanen sehingga karbon netto ditarik keluar dari biosfer atmosfer",
      "BECCS melepaskan enzim biologis ke stratosfer yang memecah $\\text{CO}_2$ menjadi gas metana",
      "Energi yang dihasilkan oleh biomassa bernilai lebih besar daripada energi ikat foton matahari",
      "BECCS memanfaatkan mikroalga yang mengubah seluruh radiasi inframerah bumi menjadi medan magnet",
      "Sistem pembakaran biomassa sama sekali tidak memerlukan gas oksigen untuk proses oksidasi kalor"
    ],
    correctIndex: 0,
    solution: {
      concept: "Analisis siklus hidup neraca karbon BECCS:<br>1. Fase Pertumbuhan: Tanaman biomassa menyerap $\\text{CO}_2$ dari atmosfer melalui fotosintesis (aliran karbon: atmosfer $\\to$ biomassa, $\\Delta C < 0$).<br>2. Fase Pembangkitan: Biomassa dibakar menghasilkan energi kalor/listrik.<br>3. Fase Penangkapan & Sekuestrasi: Alih-alih dilepaskan ke udara, emisi $\\text{CO}_2$ cerobong ditangkap oleh unit CCS dan disimpan permanen di formasi geologi bawah tanah (aliran karbon: cerobong $\\to$ litosfer).<br>Akibatnya, total karbon di atmosfer berkurang secara bersih (net-negative carbon balance).",
      steps: "1. Evaluasi siklus karbon tertutup versus sistem BECCS.<br>2. Pembakaran biomassa biasa bersifat netral karbon (karbon kembali ke atmosfer).<br>3. Penambahan CCS memutus siklus pengembalian karbon ke atmosfer dan mengalihkannya ke penyimpanan bawah tanah.<br>4. Jadi, sistem ini bertindak sebagai pompa penyedot $\\text{CO}_2$ atmosfer secara netto.<br>5. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Jika sistem CCS pada BECCS bocor atau gagal menginjeksi karbon secara permanen, sistem tersebut hanya bersifat netral karbon (carbon neutral), bukan emisi negatif (carbon negative)."
    }
  },
  {
    id: "fis-termo-global-mitigasi-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-mitigasi",
    category: "Geoengineering Manajemen Radiasi Surya (SRM)",
    difficulty: "sedang",
    statement: "Salah satu usulan teknologi georekayasa (geoengineering) untuk menahan pemanasan global adalah Manajemen Radiasi Surya (Solar Radiation Management / SRM), misalnya dengan menginjeksikan partikel aerosol sulfat ke lapisan stratosfer. Prinsip kerja fisis dari metode SRM ini serta keterbatasan utamanya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Prinsip kerja: menyerap radiasi inframerah terestrial; Keterbatasan: meningkatkan kadar oksigen di laut",
      "Prinsip kerja: memantulkan sebagian radiasi sinar matahari kembali ke angkasa (menaikkan albedo planetari bumi); Keterbatasan: tidak menurunkan konsentrasi gas $\\text{CO}_2$ di atmosfer sehingga masalah pengasaman laut tetap berlangsung",
      "Prinsip kerja: mempercepat kondensasi awan menjadi hujan asam es; Keterbatasan: mematikan seluruh biota tanah kutub",
      "Prinsip kerja: memperlemah gaya gravitasi pada lapisan ozon; Keterbatasan: meningkatkan hamburan sinar ultraviolet B",
      "Prinsip kerja: memicu pemuaian isotermal udara stratosfer; Keterbatasan: menghentikan siklus angin pasat khatulistiwa"
    ],
    correctIndex: 1,
    solution: {
      concept: "Manajemen Radiasi Surya (SRM) terinspirasi oleh letusan gunung berapi besar (seperti Gunung Pinatubo 1991), di mana partikel aerosol belerang ($\\text{SO}_2 / \\text{SO}_4^{2-}$) di stratosfer menghamburkan dan memantulkan radiasi surya datang kembali ke luar angkasa, menaikkan albedo planetari bumi sehingga mendinginkan permukaan secara cepat.<br>Namun, SRM hanya memanipulasi kesetimbangan radiasi insolasi surya dan sama sekali TIDAK menyerap atau mengurangi molekul gas $\\text{CO}_2$ di atmosfer. Oleh karena itu, konsentrasi $\\text{CO}_2$ yang tetap tinggi terus larut ke samudra dan menyebabkan pengasaman laut (ocean acidification) tanpa henti.",
      steps: "1. Analisis mekanisme optik partikel aerosol stratosferik terhadap radiasi matahari gelombang pendek.<br>2. Partikel aerosol meningkatkan fraksi pantulan albedo bumi.<br>3. Identifikasi efek samping dan keterbatasan fundamental SRM.<br>4. Karena konsentrasi $\\text{CO}_2$ di udara tidak berkurang, hidrosfer terus menyerap $\\text{CO}_2$ berlebih sehingga pengasaman laut tetap terjadi.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Jangan mengira geoengineering SRM menyelesaikan akar masalah perubahan iklim; metode ini hanya menutupi gejala pemanasan (seperti peredam demam) tanpa mengobati penyebab utamanya yaitu tingginya konsentrasi gas rumah kaca."
    }
  }
];
