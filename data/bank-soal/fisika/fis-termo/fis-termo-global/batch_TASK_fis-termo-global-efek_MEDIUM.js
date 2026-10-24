/**
 * Batch Task: TASK_fis-termo-global-efek_MEDIUM
 * SubTopic: Efek Rumah Kaca (fis-termo-global-efek)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-global-efek-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Model Kesetimbangan Radiatif Satu Lapis Atmosfer",
    difficulty: "sedang",
    statement: "Dalam model iklim sederhana satu lapis atmosfer isotermal, atmosfer dianggap transparan terhadap radiasi surya gelombang pendek, namun menyerap sempurna radiasi inframerah yang dipancarkan permukaan bumi. Atmosfer kemudian meradiasikan energi kalor secara merata ke angkasa luar dan kembali ke permukaan bumi masing-masing sebesar $\\sigma T_a^4$. Jika suhu efektif kesetimbangan radiatif bumi tanpa atmosfer adalah $T_e$, hubungan antara suhu permukaan bumi ($T_s$) dan $T_e$ menurut model ini adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$T_s = T_e$",
      "$T_s = \\sqrt{2}\\,T_e$",
      "$T_s = 2^{1/4}\\,T_e$",
      "$T_s = 2\\,T_e$",
      "$T_s = 4^{1/4}\\,T_e$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Model kesetimbangan energi satu lapis atmosfer (Single-layer Greenhouse Model):<br>1. Kesetimbangan radiasi atmosfer: Atmosfer menyerap fluks dari bumi ($\\sigma T_s^4$) dan memancarkan radiasi ke atas dan ke bawah: $$\\sigma T_s^4 = 2\\sigma T_a^4 \\implies \\sigma T_a^4 = \\frac{1}{2}\\sigma T_s^4$$<br>2. Kesetimbangan di puncak atmosfer (TOA): Fluks matahari masuk harus sama dengan fluks keluar ke angkasa luar: $$\\sigma T_e^4 = \\sigma T_a^4$$",
      steps: "1. Substitusikan persamaan fluks puncak atmosfer ke persamaan kesetimbangan lapisan atmosfer:<br>$$\\sigma T_e^4 = \\frac{1}{2}\\sigma T_s^4$$<br>2. Sederhanakan kedua ruas dengan membagi konstanta Stefan-Boltzmann $\\sigma$:<br>$$T_s^4 = 2\\,T_e^4$$<br>3. Tarik akar pangkat empat pada kedua ruas:<br>$$T_s = 2^{1/4}\\,T_e \\approx 1{,}189\\,T_e$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jebakan eksponen: $T_s^4 = 2 T_e^4$ menghasilkan $T_s = 2^{1/4} T_e$, bukan $T_s = \\sqrt{2} T_e$ (opsi B) ataupun $T_s = 2 T_e$ (opsi D). Eksponen radiasi termal Stefan-Boltzmann adalah pangkat 4."
    }
  },
  {
    id: "fis-termo-global-efek-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Potensi Pemanasan Global (GWP) dan Emisi Ekuivalen",
    difficulty: "sedang",
    statement: "Potensi Pemanasan Global (Global Warming Potential / GWP) adalah metrik untuk membandingkan kapasitas perangkap panas dari gas rumah kaca tertentu terhadap karbon dioksida ($\\text{CO}_2$) dalam horizon waktu tertentu. Jika gas metana ($\\text{CH}_4$) memiliki nilai $\\text{GWP}_{100} = 28$ dan dinitrogen oksida ($\\text{N}_2\\text{O}$) memiliki $\\text{GWP}_{100} = 265$, pelepasan $5\\text{ ton } \\text{CH}_4$ dan $2\\text{ ton } \\text{N}_2\\text{O}$ ke atmosfer setara dengan pelepasan $\\text{CO}_2$ ($\\text{CO}_2\\text{e}$) sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$293\\text{ ton } \\text{CO}_2\\text{e}$",
      "$530\\text{ ton } \\text{CO}_2\\text{e}$",
      "$670\\text{ ton } \\text{CO}_2\\text{e}$",
      "$810\\text{ ton } \\text{CO}_2\\text{e}$",
      "$1470\\text{ ton } \\text{CO}_2\\text{e}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Emisi ekuivalen karbon dioksida ($\\text{CO}_2\\text{e}$) dihitung dengan menjumlahkan hasil kali massa masing-masing gas rumah kaca dengan nilai GWP-nya:<br>$$\\text{Massa } \\text{CO}_2\\text{e} = \\sum (m_i \\times \\text{GWP}_i)$$",
      steps: "1. Hitung kontribusi ekuivalen metana ($\\text{CH}_4$):<br>$$\\text{CO}_2\\text{e}_{(\\text{CH}_4)} = 5\\text{ ton} \\times 28 = 140\\text{ ton } \\text{CO}_2\\text{e}$$<br>2. Hitung kontribusi ekuivalen dinitrogen oksida ($\\text{N}_2\\text{O}$):<br>$$\\text{CO}_2\\text{e}_{(\\text{N}_2\\text{O})} = 2\\text{ ton} \\times 265 = 530\\text{ ton } \\text{CO}_2\\text{e}$$<br>3. Jumlahkan seluruh kontribusi:<br>$$\\text{Total } \\text{CO}_2\\text{e} = 140 + 530 = 670\\text{ ton } \\text{CO}_2\\text{e}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Lupa mengalikan massa masing-masing gas dengan nilai GWP-nya dan hanya menjumlahkan nilai GWP murni ($28 + 265 = 293$, opsi A)."
    }
  },
  {
    id: "fis-termo-global-efek-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Mekanisme Umpan Balik Positif Uap Air",
    difficulty: "sedang",
    statement: "Peningkatan konsentrasi $\\text{CO}_2$ memicu kenaikan suhu permukaan bumi. Berdasarkan relasi Clausius-Clapeyron dalam termodinamika, kenaikan suhu udara sebesar $1^\\circ\\text{C}$ meningkatkan kapasitas udara menampung uap air jenuh sekitar $7\\%$. Karena uap air merupakan gas rumah kaca alami paling dominan, penguapan air yang meningkat ini memerangkap lebih banyak radiasi inframerah sehingga suhu bumi naik lebih lanjut. Fenomena penguatan respon termal ini di dalam ilmu iklim disebut sebagai ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Umpan balik negatif termal",
      "Umpan balik positif iklim (positive climate feedback loop)",
      "Pendinginan evaporatif terestrial",
      "Peredaman radiasi Planck (Planck radiation damping)",
      "Kesetimbangan statis adiabatik"
    ],
    correctIndex: 1,
    solution: {
      concept: "Mekanisme umpan balik (feedback loop) dalam sistem iklim:<br>- Umpan balik positif (positive feedback): proses di mana perubahan awal pada suatu variabel menyebabkan perubahan variabel lain yang dampaknya memperkuat perubahan awal tersebut (amplifikasi ketidakstabilan).<br>- Contoh klasik adalah umpan balik uap air (water vapor feedback) dan umpan balik albedo es (ice-albedo feedback).<br>- Umpan balik negatif (negative feedback): mekanisme yang meredam atau melawan perubahan awal menuju kesetimbangan baru.",
      steps: "1. Kenaikan suhu awal $\\implies$ laju penguapan naik $\\implies$ konsentrasi gas rumah kaca uap air di atmosfer bertambah.<br>2. Tambahan uap air menyerap lebih banyak inframerah $\\implies$ peningkatan radiasi balik ke bumi $\\implies$ suhu bumi semakin meningkat.<br>3. Siklus ini bekerja secara kumulatif memperbesar efek pemanasan awal.<br>4. Jadi, siklus ini merupakan contoh nyata dari umpan balik positif iklim.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Istilah 'positif' di sini bukan berarti hal yang menguntungkan/baik bagi lingkungan, melainkan konsep matematis kontrol sistem di mana sinyal keluaran memperkuat sinyal masukan (efek penguatan/amplifikasi)."
    }
  },
  {
    id: "fis-termo-global-efek-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Jendela Atmosfer Inframerah dan Polutan Halokarbon",
    difficulty: "sedang",
    statement: "Pada spektrum radiasi inframerah termal bumi, terdapat rentang panjang gelombang antara $8\\text{ }\\mu\\text{m}$ hingga $12\\text{ }\\mu\\text{m}$ di mana gas rumah kaca alami utama (uap air dan $\\text{CO}_2$) hampir tidak menyerap radiasi, sehingga energi kalor bumi dapat lolos langsung ke luar angkasa. Rentang ini dikenal sebagai jendela atmosfer (atmospheric window). Senyawa sintetis buatan manusia seperti CFC dan HFC dinilai sangat berbahaya terhadap pemanasan global terutama karena ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Mengurangi konsentrasi oksigen bebas di lapisan troposfer",
      "Memiliki pita serapan vibrasi ikatan kimia tepat di dalam celah jendela atmosfer ($8-12\\text{ }\\mu\\text{m}$)",
      "Bereaksi secara eksotermik menghasilkan energi panas spontan di stratosfer",
      "Memantulkan radiasi sinar ultraviolet matahari kembali ke permukaan bumi",
      "Mencegah proses kondensasi uap air menjadi awan presipitasi"
    ],
    correctIndex: 1,
    solution: {
      concept: "Jendela atmosfer inframerah ($8-12\\text{ }\\mu\\text{m}$) adalah rentang transparan tempat radiasi termal bumi dapat lepas ke antariksa tanpa terhambat $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$.<br>Senyawa halokarbon buatan manusia (CFC, HCFC, HFC, $\\text{SF}_6$) memiliki ikatan karbon-fluor dan karbon-klor yang frekuensi vibrasi resonansinya tepat berada pada rentang jendela atmosfer ($8-12\\text{ }\\mu\\text{m}$). Akibatnya, gas-gas ini menutup celah transmisi kalor bumi yang sebelumnya terbuka, menghasilkan efisiensi penyerapan panas per molekul hingga ribuan kali lipat dibandingkan $\\text{CO}_2$.",
      steps: "1. Pahami fungsi fisis jendela atmosfer sebagai 'ventilasi' pelepasan panas bumi ke angkasa luar.<br>2. Analisis serapan molekuler senyawa halokarbon.<br>3. Karena ikatan kimia C-F dan C-Cl bervibrasi menyerap foton inframerah berpanjang gelombang $8-12\\text{ }\\mu\\text{m}$, mereka menyumbat jendela pelepasan panas bumi.<br>4. Inilah alasan mengapa nilai GWP senyawa CFC dan HFC luar biasa besar.<br>5. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Walaupun CFC terkenal karena merusak lapisan ozon stratosfer (melalui radikal klorin), peran utamanya dalam memperparah efek rumah kaca termal adalah karena penutupan pita jendela atmosfer inframerah."
    }
  },
  {
    id: "fis-termo-global-efek-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-global",
    subTopicId: "fis-termo-global-efek",
    category: "Fluks Radiasi Surya Rata-Rata Terserap Bumi",
    difficulty: "sedang",
    statement: "Konstanta surya di batas luar atmosfer bumi bernilai $S = 1360\\text{ W/m}^2$. Luas penampang penerima sinar matahari berbentuk lingkaran $\\pi R^2$, sedangkan luas permukaan bola bumi yang meradiasikan kembali panas adalah $4\\pi R^2$. Jika albedo rata-rata planet bumi adalah $\\alpha = 0{,}30$ ($30\\%$ radiasi surya dipantulkan kembali ke luar angkasa), besar fluks radiasi matahari rata-rata per satuan luas permukaan bumi yang benar-benar diserap oleh sistem bumi-atmosfer adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$102\\text{ W/m}^2$",
      "$238\\text{ W/m}^2$",
      "$340\\text{ W/m}^2$",
      "$476\\text{ W/m}^2$",
      "$952\\text{ W/m}^2$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Fluks radiasi surya yang datang ke bumi disebarkan ke seluruh luas permukaan bola bumi ($4\\pi R^2$), sehingga fluks surya rata-rata insiden di puncak atmosfer adalah:<br>$$\\bar{F}_{\\text{in}} = \\frac{S \\times \\pi R^2}{4\\pi R^2} = \\frac{S}{4}$$<br>Fluks yang diserap permukaan bumi setelah dikurangi fraksi albedo yang dipantulkan ($\\alpha$) dirumuskan:<br>$$F_{\\text{serap}} = \\frac{S}{4} (1 - \\alpha)$$",
      steps: "1. Hitung fluks surya rata-rata global di batas atas atmosfer:<br>$$\\bar{F}_{\\text{in}} = \\frac{1360\\text{ W/m}^2}{4} = 340\\text{ W/m}^2$$<br>2. Perhitungkan fraksi albedo $\\alpha = 0{,}30$, sehingga fraksi yang diserap adalah $1 - \\alpha = 0{,}70$.<br>3. Hitung fluks rata-rata yang diserap:<br>$$F_{\\text{serap}} = 340\\text{ W/m}^2 \\times 0{,}70 = 238\\text{ W/m}^2$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa membagi dengan faktor geometri 4 (rasio luas permukaan bola $4\\pi R^2$ terhadap penampang lingkaran $\\pi R^2$) akan menghasilkan nilai $1360 \\times 0{,}70 = 952\\text{ W/m}^2$ (opsi E). Sedangkan opsi C ($340\\text{ W/m}^2$) adalah fluks datang sebelum dikurangi pantulan albedo."
    }
  }
];
