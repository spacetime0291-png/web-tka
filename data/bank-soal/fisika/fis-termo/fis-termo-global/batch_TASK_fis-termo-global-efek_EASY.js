/**
 * Batch Task: TASK_fis-termo-global-efek_EASY
 * SubTopic: Efek Rumah Kaca (fis-termo-global-efek)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-global-efek-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Mekanisme Fisik Efek Rumah Kaca",
    difficulty: "mudah",
    statement: "Radiasi matahari dengan panjang gelombang pendek (sebagian besar berupa cahaya tampak) melewati atmosfer dan diserap oleh daratan serta lautan bumi. Permukaan bumi yang menghangat kemudian memancarkan kembali energi tersebut ke atmosfer dalam bentuk spektrum gelombang elektromagnetik berupa ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sinar gamma",
      "Sinar-X",
      "Sinar ultraviolet (UV)",
      "Gelombang inframerah",
      "Gelombang radio"
    ],
    correctIndex: 3,
    solution: {
      concept: "Berdasarkan Hukum Pergeseran Wien ($\\lambda_{\\text{maks}} \\times T = C$), panjang gelombang puncak radiasi berbanding terbalik dengan suhu mutlak benda pembocor radiasi:<br>- Permukaan matahari bersuhu sangat tinggi ($\\approx 5800\\text{ K}$) sehingga memancarkan radiasi bergelombang pendek (spektrum cahaya tampak dan UV dekat).<br>- Permukaan bumi bersuhu jauh lebih rendah ($\\approx 288\\text{ K}$) sehingga meradiasikan energi kalor dalam spektrum gelombang yang jauh lebih panjang, yaitu gelombang inframerah termal (panjang gelombang $4\\text{ }\\mu\\text{m} - 100\\text{ }\\mu\\text{m}$).",
      steps: "1. Analisis proses perpindahan radiasi pada sistem bumi-atmosfer.<br>2. Radiasi bergelombang pendek dari matahari diserap oleh bumi sehingga temperatur permukaan bumi naik.<br>3. Benda bersuhu ruangan atau suhu terestrial memancarkan radiasi termal pada rentang inframerah.<br>4. Gelombang inframerah inilah yang kemudian diserap oleh molekul gas rumah kaca di atmosfer.<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan tertukar antara radiasi datang dari matahari (dominan cahaya tampak dan UV) dengan radiasi yang dipancarkan kembali oleh bumi (radiasi inframerah termal)."
    }
  },
  {
    id: "fis-termo-global-efek-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Komposisi Gas Rumah Kaca",
    difficulty: "mudah",
    statement: "Tidak semua gas yang berada di atmosfer dapat menyerap dan memerangkap radiasi kalor inframerah. Kelompok gas berikut yang seluruhnya tergolong sebagai gas rumah kaca utama di atmosfer bumi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Oksigen ($\\text{O}_2$), Nitrogen ($\\text{N}_2$), dan Argon ($\\text{Ar}$)",
      "Karbon dioksida ($\\text{CO}_2$), Metana ($\\text{CH}_4$), dan Uap air ($\\text{H}_2\\text{O}$)",
      "Helium ($\\text{He}$), Hidrogen ($\\text{H}_2$), dan Neon ($\\text{Ne}$)",
      "Karbon monoksida ($\\text{CO}$), Kripton ($\\text{Kr}$), dan Oksigen ($\\text{O}_2$)",
      "Nitrogen ($\\text{N}_2$), Klorin ($\\text{Cl}_2$), dan Xenon ($\\text{Xe}$)"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gas rumah kaca (GRK) adalah molekul gas yang mampu menyerap dan memancarkan radiasi inframerah termal karena memiliki ikatan kimia heteronuklir atau poliatomik yang dapat bervibrasi dengan momen dipol listrik asimetris.<br>- Molekul diatomik homonuklir seperti $\\text{N}_2$ dan $\\text{O}_2$ (penyusun $99\\%$ atmosfer) tidak menyerap inframerah.<br>- Gas rumah kaca alami dan antropogenik utama meliputi uap air ($\\text{H}_2\\text{O}$), karbon dioksida ($\\text{CO}_2$), metana ($\\text{CH}_4$), dinitrogen oksida ($\\text{N}_2\\text{O}$), serta gas-gas fluorinasi.",
      steps: "1. Periksa gas penyusun pada masing-masing opsi jawaban.<br>2. Gas monoatomik (seperti $\\text{Ar}$, $\\text{He}$, $\\text{Ne}$, $\\text{Kr}$, $\\text{Xe}$) dan molekul diatomik simetris (seperti $\\text{N}_2$, $\\text{O}_2$, $\\text{H}_2$) bukan gas rumah kaca.<br>3. Molekul poliatomik $\\text{CO}_2$, $\\text{CH}_4$, dan $\\text{H}_2\\text{O}$ memiliki modus getaran yang aktif menyerap radiasi inframerah.<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Walaupun $\\text{N}_2$ dan $\\text{O}_2$ merupakan gas dengan proporsi terbesar di atmosfer bumi ($78\\%$ dan $21\\%$), keduanya sama sekali bukan gas rumah kaca karena tidak dapat menyerap foton inframerah."
    }
  },
  {
    id: "fis-termo-global-efek-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Peran Efek Rumah Kaca Alami",
    difficulty: "mudah",
    statement: "Efek rumah kaca sering dipersepsikan negatif akibat kaitannya dengan pemanasan global. Namun, secara alamiah efek rumah kaca memiliki peran vital bagi kehidupan. Jika di atmosfer bumi sama sekali tidak terdapat gas rumah kaca alami, suhu rata-rata permukaan bumi diperkirakan akan menjadi sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+25^\\circ\\text{C}$",
      "$+15^\\circ\\text{C}$",
      "$0^\\circ\\text{C}$",
      "$-18^\\circ\\text{C}$",
      "$-50^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Tanpa atmosfer dan efek rumah kaca alami, suhu kesetimbangan radiatif bumi murni dihitung dari kesetimbangan fluks radiasi matahari yang diserap dan radiasi termal benda hitam yang dipancarkan bumi:<br>$$S_0 (1 - \\alpha) \\pi R^2 = 4 \\pi R^2 \\sigma T_e^4 \\implies T_e = \\left[\\frac{S_0 (1 - \\alpha)}{4\\sigma}\\right]^{1/4}$$<br>Dengan konstanta surya $S_0 \\approx 1361\\text{ W/m}^2$ dan albedo bumi $\\alpha \\approx 0{,}30$, diperoleh suhu efektif $T_e \\approx 255\\text{ K} \\approx -18^\\circ\\text{C}$.",
      steps: "1. Suhu rata-rata aktual permukaan bumi saat ini dengan adanya efek rumah kaca alami adalah sekitar $+15^\\circ\\text{C}$ ($288\\text{ K}$).<br>2. Efek rumah kaca alami memberikan efek penghangatan sebesar sekitar $33^\\circ\\text{C}$ ($288\\text{ K} - 255\\text{ K} = 33\\text{ K}$).<br>3. Tanpa gas rumah kaca alami, seluruh energi inframerah langsung lepas ke luar angkasa sehingga suhu rata-rata turun drastis menjadi $-18^\\circ\\text{C}$.<br>4. Pada suhu $-18^\\circ\\text{C}$, seluruh perairan di permukaan bumi akan membeku dan kehidupan tidak dapat berkembang seperti sekarang.<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan keliru mengira suhu bumi tanpa efek rumah kaca adalah $+15^\\circ\\text{C}$ (opsi B, yang merupakan suhu aktual saat ini dengan efek rumah kaca)."
    }
  },
  {
    id: "fis-termo-global-efek-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Sumber Antropogenik Emisi Gas Metana",
    difficulty: "mudah",
    statement: "Metana ($\\text{CH}_4$) merupakan salah satu gas rumah kaca poten yang memiliki daya serap radiasi inframerah persatuan molekul jauh lebih tinggi dibandingkan karbon dioksida. Aktivitas manusia berikut yang merupakan sumber utama pelepasan gas metana antropogenik ke atmosfer adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Penggunaan kendaraan listrik berbasis baterai ion litium",
      "Fermentasi enterik pada pencernaan hewan ternak ruminansia dan sawah padi tergenang",
      "Penguapan air laut pada tambak pembuatan garam konsumsi",
      "Pembangkitan tenaga listrik melalui kincir angin turbin udara",
      "Pemasangan panel surya fotovoltaik di atap pemukiman warga"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gas metana ($\\text{CH}_4$) terbentuk dari proses dekomposisi anaerobik (tanpa oksigen) oleh bakteri metanogenik. Sumber antropogenik utama pelepasan $\\text{CH}_4$ meliputi:<br>1. Sektor peternakan: fermentasi enterik pada saluran pencernaan hewan ruminansia (seperti sapi dan kambing).<br>2. Sektor pertanian: lahan sawah padi tergenang air yang miskin oksigen.<br>3. Pengolahan limbah: tempat pemrosesan akhir (TPA) sampah organik tertimbun.<br>4. Kebocoran infrastruktur gas alam dan ekstraksi bahan bakar fosil.",
      steps: "1. Tinjau proses pembentukan gas metana secara biokimia dan fisikawi.<br>2. Pilihan A, D, dan E merupakan teknologi energi hijau/ramah lingkungan yang justru mereduksi emisi karbon.<br>3. Pilihan C (penguapan air garam) hanya menghasilkan uap air alami tanpa menghasilkan gas metana.<br>4. Peternakan ruminansia dan sawah tergenang merupakan kontributor terbesar emisi gas metana antropogenik global.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Seringkali masyarakat hanya fokus pada gas buang kendaraan bermotor (yang dominan menghasilkan $\\text{CO}_2$ dan $\\text{CO}$) dan melupakan bahwa peternakan skala industri dan persawahan tergenang menghasilkan gas rumah kaca metana dalam jumlah sangat masif."
    }
  },
  {
    id: "fis-termo-global-efek-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Konsep Albedo Permukaan Bumi",
    difficulty: "mudah",
    statement: "Albedo adalah ukuran fraksi atau persentase radiasi matahari datang yang dipantulkan kembali ke luar angkasa tanpa diserap oleh suatu permukaan. Di antara jenis tutupan permukaan bumi berikut, permukaan yang memiliki nilai albedo paling tinggi (paling banyak memantulkan radiasi surya) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Hutan hujan tropis yang lebat dan basah",
      "Hamparan es dan salju segar di daerah kutub",
      "Jalan raya beraspal hitam di kawasan perkotaan",
      "Permukaan air samudra dan laut dalam yang tenang",
      "Lahan pertanian bertanah humus cokelat gelap"
    ],
    correctIndex: 1,
    solution: {
      concept: "Albedo ($\\alpha$) berkisar antara 0 (menyerap seluruh radiasi/benda hitam sempurna) hingga 1 (memantulkan seluruh radiasi):<br>- Permukaan berwarna gelap (aspal $\\approx 0{,}05 - 0{,}10$, laut dalam $\\approx 0{,}06 - 0{,}10$, hutan lebat $\\approx 0{,}15$) menyerap sebagian besar radiasi surya.<br>- Permukaan berwarna terang dan berkilau seperti lapisan salju segar dan tutupan es gletser memiliki albedo tertinggi (mencapai $0{,}80 - 0{,}90$), sehingga memantulkan sebagian besar energi radiasi kembali ke angkasa.",
      steps: "1. Pahami arti fisis dari istilah albedo: daya pantul permukaan terhadap radiasi surya datang.<br>2. Semakin terang dan putih warna suatu permukaan, semakin besar nilai albedonya.<br>3. Salju segar dan es kutub memantulkan sekitar $80\\% - 90\\%$ dari seluruh radiasi matahari yang mengenainya.<br>4. Jadi, hamparan es dan salju segar memiliki albedo tertinggi.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Permukaan air laut dalam justru memiliki albedo sangat rendah (hanya sekitar $6\\% - 10\\%$), artinya air laut menyerap lebih dari $90\\%$ radiasi matahari yang masuk, bukan memantulkannya."
    }
  }
];
