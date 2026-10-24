/**
 * Batch Task: TASK_fis-termo-global-dampak_MEDIUM
 * SubTopic: Penyebab & Dampak Pemanasan Global (fis-termo-global-dampak)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-global-dampak-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Perhitungan Pemuaian Termal Kolom Air Laut",
    difficulty: "sedang",
    statement: "Sebuah model oseanografi sederhana meninjau lapisan campuran atas samudra dunia dengan kedalaman rata-rata $h_0 = 500\\text{ meter}$. Koefisien muai volume rata-rata air laut pada lapisan tersebut adalah $\\gamma = 2{,}1 \\times 10^{-4}/^\\circ\\text{C}$. Jika lapisan air laut tersebut mengalami kenaikan suhu rata-rata sebesar $\\Delta T = 0{,}8^\\circ\\text{C}$ dan luas permukaan samudra dianggap tetap, pertambahan tinggi muka air laut ($\\Delta h$) murni akibat pemuaian termal kolom air tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4{,}2\\text{ cm}$",
      "$6{,}4\\text{ cm}$",
      "$8{,}4\\text{ cm}$",
      "$10{,}5\\text{ cm}$",
      "$16{,}8\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pemuaian volume zat cair dirumuskan: $\\Delta V = V_0 \\times \\gamma \\times \\Delta T$.<br>Karena cekungan samudra dibatasi oleh daratan benua sehingga luas permukaan samudra ($A$) praktis konstan, maka pertambahan volume air terwujud sebagai kenaikan tinggi kolom permukaan laut secara vertikal (pemuaian linear vertikal zat cair yang terkekang horizontal):<br>$$\\Delta V = A \\times \\Delta h \\implies \\frac{\\Delta h}{h_0} = \\gamma \\times \\Delta T \\implies \\Delta h = h_0 \\times \\gamma \\times \\Delta T$$",
      steps: "1. Identifikasi parameter:<br>$h_0 = 500\\text{ m}$<br>$\\gamma = 2{,}1 \\times 10^{-4}/^\\circ\\text{C}$<br>$\\Delta T = 0{,}8^\\circ\\text{C}$<br>2. Hitung kenaikan tinggi permukaan laut $\\Delta h$:<br>$$\\Delta h = 500\\text{ m} \\times (2{,}1 \\times 10^{-4}/^\\circ\\text{C}) \\times 0{,}8^\\circ\\text{C}$$<br>$$\\Delta h = 500 \\times 1{,}68 \\times 10^{-4} = 0{,}084\\text{ meter}$$<br>3. Konversi satuan ke sentimeter:<br>$$\\Delta h = 0{,}084 \\times 100 = 8{,}4\\text{ cm}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan membagi koefisien muai volume dengan 3. Pada zat cair dalam wadah berpenampang tetap, zat cair tidak memuai secara bebas ke samping melainkan seluruh pemuaian volume diarahkan ke arah vertikal bebas (atas), sehingga pengalinya tetap $\\gamma$, bukan $\\gamma/3$."
    }
  },
  {
    id: "fis-termo-global-dampak-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Umpan Balik Albedo Es Kutub (Ice-Albedo Feedback)",
    difficulty: "sedang",
    statement: "Lapisan es laut kutub memiliki nilai albedo $\\alpha_{\\text{es}} = 0{,}85$, sedangkan air laut terbuka memiliki albedo $\\alpha_{\\text{laut}} = 0{,}05$. Jika fluks radiasi matahari yang jatuh di permukaan kutub pada puncak musim panas adalah $I_0 = 300\\text{ W/m}^2$, pertambahan fluks daya kalor yang diserap oleh setiap meter persegi permukaan kutub ketika lapisan es mencair seluruhnya menjadi perairan laut terbuka adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ W/m}^2$",
      "$150\\text{ W/m}^2$",
      "$240\\text{ W/m}^2$",
      "$255\\text{ W/m}^2$",
      "$285\\text{ W/m}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Fluks radiasi yang diserap suatu permukaan dihitung dari fraksi serapan $(1 - \\alpha)$ dikalikan fluks datang $I_0$:<br>$$I_{\\text{serap}} = I_0 (1 - \\alpha)$$<br>Pertambahan fluks serapan saat terjadi pergantian tutupan permukaan dari es ke laut terbuka adalah:<br>$$\\Delta I_{\\text{serap}} = I_0 \\left[(1 - \\alpha_{\\text{laut}}) - (1 - \\alpha_{\\text{es}})\\right] = I_0 (\\alpha_{\\text{es}} - \\alpha_{\\text{laut}})$$",
      steps: "1. Hitung selisih albedo:<br>$$\\Delta \\alpha = \\alpha_{\\text{es}} - \\alpha_{\\text{laut}} = 0{,}85 - 0{,}05 = 0{,}80$$<br>2. Hitung daya kalor serap saat masih tertutup es:<br>$$I_{\\text{es}} = 300 \\times (1 - 0{,}85) = 300 \\times 0{,}15 = 45\\text{ W/m}^2$$<br>3. Hitung daya kalor serap setelah es mencair menjadi laut terbuka:<br>$$I_{\\text{laut}} = 300 \\times (1 - 0{,}05) = 300 \\times 0{,}95 = 285\\text{ W/m}^2$$<br>4. Hitung pertambahan daya serap $\\Delta I$:<br>$$\\Delta I_{\\text{serap}} = 285\\text{ W/m}^2 - 45\\text{ W/m}^2 = 240\\text{ W/m}^2$$<br>(Atau langsung $\\Delta I = 300 \\times 0{,}80 = 240\\text{ W/m}^2$).<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Hati-hati: opsi E ($285\\text{ W/m}^2$) adalah daya serap total setelah menjadi air laut, bukan pertambahannya. Pertanyaan meminta pertambahan (selisih) daya kalor yang diserap."
    }
  },
  {
    id: "fis-termo-global-dampak-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Laju Kenaikan Muka Laut dari Pencairan Es Daratan",
    difficulty: "sedang",
    statement: "Sebuah lembaran es daratan di wilayah kutub diperkirakan kehilangan volume es sebesar $240\\text{ km}^3$ per tahun akibat peleburan es yang mengalir masuk ke samudra. Jika massa jenis es adalah $\\rho_{\\text{es}} = 900\\text{ kg/m}^3$, massa jenis air laut adalah $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$, dan luas total permukaan samudra di bumi adalah $360 \\times 10^6\\text{ km}^2$, kontribusi tahunan pencairan es daratan ini terhadap kenaikan tinggi rata-rata muka air laut dunia adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}30\\text{ mm}$",
      "$0{,}60\\text{ mm}$",
      "$0{,}90\\text{ mm}$",
      "$1{,}20\\text{ mm}$",
      "$1{,}50\\text{ mm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kekekalan massa berlaku saat es melebur menjadi air:<br>$$m = \\rho_{\\text{es}} \\times V_{\\text{es}} = \\rho_{\\text{air}} \\times V_{\\text{air}} \\implies V_{\\text{air}} = V_{\\text{es}} \\times \\frac{\\rho_{\\text{es}}}{\\rho_{\\text{air}}}$$<br>Kenaikan tinggi rata-rata muka air laut ($\\Delta h$) diperoleh dengan membagi volume air cair tambahan dengan luas permukaan samudra dunia ($A_{\\text{samudra}}$):<br>$$\\Delta h = \\frac{V_{\\text{air}}}{A_{\\text{samudra}}}$$",
      steps: "1. Hitung volume air cair yang dihasilkan dari peleburan es:<br>$$V_{\\text{air}} = 240\\text{ km}^3 \\times \\frac{900}{1000} = 216\\text{ km}^3$$<br>2. Hitung kenaikan tinggi air laut dalam satuan kilometer:<br>$$\\Delta h = \\frac{216\\text{ km}^3}{360 \\times 10^6\\text{ km}^2} = 0{,}60 \\times 10^{-6}\\text{ km}$$<br>3. Konversikan kilometer ke milimeter ($1\\text{ km} = 10^6\\text{ mm}$):<br>$$\\Delta h = 0{,}60 \\times 10^{-6} \\times 10^6\\text{ mm} = 0{,}60\\text{ mm}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa mengoreksi massa jenis es (menganggap volume air leburan sama dengan volume es $240\\text{ km}^3$) akan menghasilkan $\\Delta h = 240 / 360 = 0{,}67\\text{ mm}$. Es memiliki kerapatan lebih rendah daripada air sehingga saat mencair volumenya menyusut sebesar $10\\%$."
    }
  },
  {
    id: "fis-termo-global-dampak-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Pencairan Permafrost dan Titik Kritis Iklim",
    difficulty: "sedang",
    statement: "Di wilayah sirkumpolar kutub utara, terdapat tanah beku abadi (permafrost) yang telah membeku selama ribuan tahun dan menyimpan ribuan gigaton karbon organik. Para ilmuwan iklim mengkategorikan pencairan permafrost secara masif sebagai potensi tipping point (titik kritis) yang berbahaya bagi kestabilan iklim bumi karena ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Menyebabkan pergeseran sumbu rotasi bumi sebesar lebih dari 15 derajat",
      "Memicu peluruhan radioaktif alami pada batuan dasar granit di wilayah kutub",
      "Melepaskan gas metana dan karbon dioksida secara swasembada (self-sustaining) akibat penguraian mikrob anaerob, yang mempercepat pemanasan tanpa bergantung pada emisi antropogenik",
      "Mengurangi gravitasi bumi di daerah kutub sehingga atmosfer bumi terlepas ke angkasa luar",
      "Menghentikan proses fotosintesis seluruh vegetasi di kawasan hutan boreal taiga"
    ],
    correctIndex: 2,
    solution: {
      concept: "Tipping point dalam dinamika iklim adalah ambang batas kritis di mana perubahan kecil dapat memicu perubahan sistemik skala besar yang tidak dapat dipulihkan (irreversible).<br>Ketika permafrost mencair, mikroorganisme tanah menjadi aktif dan mendekomposisi bahan organik yang sebelumnya terawetkan dalam kondisi beku, melepaskan miliaran ton gas metana ($\\text{CH}_4$) dan $\\text{CO}_2$. Gas rumah kaca ini semakin meningkatkan suhu atmosfer, yang memicu pencairan permafrost lebih luas lagi secara swasembada (siklus umpan balik positif tak terkendali).",
      steps: "1. Tinjau kandungan dan karakteristik termal permafrost arktik.<br>2. Permafrost mengandung biomassa tanaman mati purba yang terperangkap dalam es beku.<br>3. Pencairan permafrost mengubah lingkungan beku menjadi rawa termokarst anoksik yang ideal bagi bakteri penghasil gas metana.<br>4. Pelepasan gas rumah kaca ini terjadi secara alami dan mandiri di luar kendali mitigasi manusia.<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Pencairan es tidak mengubah sumbu rotasi bumi secara dramatis (opsi A) dan tidak berkaitan dengan peristiwa nuklir radioaktif batuan (opsi B)."
    }
  },
  {
    id: "fis-termo-global-dampak-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-dampak",
    category: "Pelemahan Sirkulasi Termohalin Samudra (AMOC)",
    difficulty: "sedang",
    statement: "Sirkulasi Balik Meridional Atlantik (Atlantic Meridional Overturning Circulation / AMOC) adalah sistem arus laut global yang digerakkan oleh perbedaan suhu (termo) dan kadar garam / salinitas (halin). Air laut Atlantik Utara yang dingin dan sangat asin memiliki massa jenis tinggi sehingga tenggelam ke kedalaman samudra. Jika lapisan es gletser Greenland mencair secara masif dan cepat, dampak fisis langsung terhadap kelangsungan arus laut AMOC adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Arus AMOC mengalir semakin cepat karena penambahan volume air memperbesar tekanan hidrostatis dasar laut",
      "Aliran air tawar bersalinitas nol dalam jumlah masif menurunkan massa jenis air permukaan kutub utara, sehingga air kutub sulit tenggelam dan melemahkan atau melumpuhkan sirkulasi AMOC",
      "Kadar garam air laut Atlantik Utara melonjak tajam sehingga air permukaan membeku seketika",
      "Arus teluk (Gulf Stream) membalikkan arah alirannya menuju ke khatulistiwa pada lapisan permukaan",
      "Viskositas air laut menurun drastis sehingga seluruh arus samudra berubah menjadi aliran laminar statis"
    ],
    correctIndex: 1,
    solution: {
      concept: "Prinsip Sirkulasi Termohalin (AMOC):<br>- Penggerak utama (engine) sirkulasi laut dalam adalah pembentukan air padat (dense water) di Atlantik Utara: pendinginan udara kutub (termo) dan pembentukan es laut menyisakan garam di air cair sehingga meningkatkan salinitas (halin). Air dengan kerapatan tinggi ini tenggelam (deep water formation).<br>- Air leburan gletser Greenland adalah air tawar murni (salinitas $0\\text{ PSU}$). Masuknya volume masif air tawar mengencerkan air laut, menurunkan massa jenisnya secara drastis ($\\rho_{\\text{tawar}} < \\rho_{\\text{asin}}$), sehingga air permukaan tetap mengapung dan tidak dapat tenggelam ke dasar laut.",
      steps: "1. Analisis densitas air laut sebagai fungsi suhu dan salinitas (persamaan keadaan air laut).<br>2. Injeksi air tawar dari Greenland menurunkan salinitas lapisan atas samudra Atlantik Utara.<br>3. Penurunan salinitas mencegah tenggelamnya massa air permukaan yang menjadi motor penarik Arus Teluk dari tropis.<br>4. Akibatnya, sirkulasi AMOC melambat atau terancam kolaps, memicu destabilisasi iklim dramatis di belahan bumi utara.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Air leburan es gletser daratan adalah AIR TAWAR, bukan air asin. Jangan berasumsi pencairan es menambah kadar garam (opsi C)."
    }
  }
];
