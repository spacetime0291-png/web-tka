/**
 * Batch Task: TASK_fis-gel-optik-spektrum_MEDIUM
 * SubTopic: Spektrum Elektromagnetik (fis-gel-optik-spektrum)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-optik-spektrum-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "sedang",
    statement: "Suatu sumber radiasi monokromatis memancarkan foton dengan panjang gelombang $\\lambda = 330\\text{ nm}$ ($1\\text{ nm} = 10^{-9}\\text{ m}$). Jika konstanta Planck dinyatakan sebagai $h = 6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, besar energi dari setiap foton radiasi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 \\times 10^{-19}\\text{ J}$",
      "$4 \\times 10^{-19}\\text{ J}$",
      "$6 \\times 10^{-19}\\text{ J}$",
      "$8 \\times 10^{-19}\\text{ J}$",
      "$10 \\times 10^{-19}\\text{ J}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Energi foton ($E$) dari gelombang elektromagnetik berbanding lurus dengan frekuensi ($f$) dan berbanding terbalik dengan panjang gelombang ($\\lambda$):<br>$$E = h f = \\frac{h c}{\\lambda}$$",
      steps: "1. Konversikan panjang gelombang ke satuan meter:<br>$$\\lambda = 330\\text{ nm} = 330 \\times 10^{-9}\\text{ m} = 3{,}3 \\times 10^{-7}\\text{ m}$$<br>2. Hitung energi foton:<br>$$E = \\frac{(6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s})(3 \\times 10^8\\text{ m/s})}{3{,}3 \\times 10^{-7}\\text{ m}}$$<br>3. Sederhanakan angka utama dan orde pangkat:<br>$$E = \\left(\\frac{6{,}6 \\times 3}{3{,}3}\\right) \\times 10^{-34 + 8 - (-7)} = (2 \\times 3) \\times 10^{-19} = 6 \\times 10^{-19}\\text{ Joule}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Perhatikan eksponen penyebut saat dinaikkan ke pembilang: $10^{-34} \\times 10^8 / 10^{-7} = 10^{-34 + 8 + 7} = 10^{-19}$. Jangan sampai salah tanda menjadi $10^{-33}$."
    }
  },
  {
    id: "fis-gel-optik-spektrum-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "sedang",
    statement: "Sebuah pemancar laser helium-neon menghasilkan daya radiasi sebesar $33\\text{ mW}$ pada panjang gelombang $\\lambda = 600\\text{ nm}$. Jika konstanta Planck $h = 6{,}6 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ dan kelajuan cahaya $c = 3 \\times 10^8\\text{ m/s}$, jumlah foton yang dipancarkan oleh laser tersebut setiap detiknya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0 \\times 10^{16}\\text{ foton/s}$",
      "$1{,}0 \\times 10^{17}\\text{ foton/s}$",
      "$3{,}3 \\times 10^{17}\\text{ foton/s}$",
      "$1{,}0 \\times 10^{18}\\text{ foton/s}$",
      "$3{,}3 \\times 10^{18}\\text{ foton/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Daya radiasi ($P$) adalah energi total foton yang dipancarkan per satuan waktu. Jika $N$ adalah laju pemancaran foton per detik:<br>$$P = N \\times E_{\\text{foton}} = N \\times \\frac{h c}{\\lambda} \\implies N = \\frac{P \\lambda}{h c}$$",
      steps: "1. Hitung energi 1 foton:<br>$$E = \\frac{h c}{\\lambda} = \\frac{(6{,}6 \\times 10^{-34})(3 \\times 10^8)}{600 \\times 10^{-9}} = \\frac{19{,}8 \\times 10^{-26}}{6 \\times 10^{-7}} = 3{,}3 \\times 10^{-19}\\text{ J}$$<br>2. Konversi daya laser ke Watt: $P = 33\\text{ mW} = 33 \\times 10^{-3}\\text{ W}$.<br>3. Hitung jumlah foton per detik ($N$):<br>$$N = \\frac{P}{E} = \\frac{33 \\times 10^{-3}\\text{ J/s}}{3{,}3 \\times 10^{-19}\\text{ J}} = 10 \\times 10^{16} = 1{,}0 \\times 10^{17}\\text{ foton/s}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Lupa mengonversi miliWatt ($10^{-3}\\text{ W}$) ke Watt akan menghasilkan jawaban yang meleset sebesar faktor $10^3$ ($10^{20}\\text{ foton/s}$)."
    }
  },
  {
    id: "fis-gel-optik-spektrum-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "sedang",
    statement: "Suatu gelombang elektromagnetik bidang merambat di ruang hampa searah sumbu-x positif. Pada suatu titik dan saat tertentu, amplitudo komponen medan listriknya bernilai $E_{\\max} = 600\\text{ N/C}$. Jika cepat rambat cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, amplitudo komponen medan magnet ($B_{\\max}$) dari gelombang tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 \\times 10^{-8}\\text{ T}$",
      "$2 \\times 10^{-6}\\text{ T}$",
      "$1{,}8 \\times 10^{-5}\\text{ T}$",
      "$2 \\times 10^{-4}\\text{ T}$",
      "$1{,}8 \\times 10^{11}\\text{ T}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada gelombang elektromagnetik, perbandingan antara amplitudo medan listrik ($E_{\\max}$) dan amplitudo medan magnet ($B_{\\max}$) selalu sebanding dengan kecepatan rambat gelombang ($c$):<br>$$c = \\frac{E_{\\max}}{B_{\\max}} \\implies B_{\\max} = \\frac{E_{\\max}}{c}$$",
      steps: "1. Substitusikan nilai $E_{\\max} = 600\\text{ N/C}$ dan $c = 3 \\times 10^8\\text{ m/s}$:<br>$$B_{\\max} = \\frac{600}{3 \\times 10^8} = 200 \\times 10^{-8}\\text{ Tesla}$$<br>2. Ubah ke bentuk notasi ilmiah baku:<br>$$B_{\\max} = 2 \\times 10^{-6}\\text{ Tesla}$$<br>3. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan mengalikan $E_{\\max}$ dengan $c$ yang akan menghasilkan nilai medan magnet luar biasa besar ($1{,}8 \\times 10^{11}\\text{ T}$, opsi E). Hubungan yang benar adalah membagi $E$ dengan $c$."
    }
  },
  {
    id: "fis-gel-optik-spektrum-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "sedang",
    statement: "Berdasarkan tingkat energinya, radiasi elektromagnetik diklasifikasikan menjadi radiasi pengion (ionizing radiation) dan non-pengion. Kelompok spektrum berikut yang seluruh anggotanya termasuk ke dalam kategori radiasi pengion berbahaya karena energi fotonnya mampu memutus ikatan kimia dan mengionisasi molekul biologis adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sinar ultraviolet frekuensi tinggi, sinar-X, dan sinar gamma",
      "Gelombang mikro, sinar inframerah, dan cahaya tampak",
      "Sinar inframerah, cahaya tampak, dan sinar ultraviolet gelombang panjang",
      "Gelombang radio, gelombang mikro, dan sinar inframerah",
      "Cahaya tampak, sinar ultraviolet gelombang panjang, dan gelombang mikro"
    ],
    correctIndex: 0,
    solution: {
      concept: "Radiasi pengion adalah radiasi elektromagnetik yang energi fotonnya melebihi energi ionisasi atom/molekul (biasanya $\\gtrsim 10 - 12\\text{ eV}$). Spektrum yang termasuk radiasi pengion adalah sinar ultraviolet ekstrem/jauh, sinar-X, dan sinar gamma. Spektrum berenergi lebih rendah (cahaya tampak, inframerah, gelombang mikro, dan gelombang radio) adalah radiasi non-pengion.",
      steps: "1. Identifikasi sifat pengion: Foton berfrekuensi sangat tinggi membawa energi $E = hf$ yang sangat besar sehingga mampu melepaskan elektron dari atom/DNA (ionisasi).<br>2. Spektrum yang memenuhi syarat ini adalah UV berenergi tinggi, sinar-X, dan sinar gamma.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Sinar inframerah dan gelombang mikro dapat menimbulkan efek pemanasan (termal), tetapi energinya tidak cukup besar untuk melepaskan elektron ikatan atomik (bukan radiasi pengion)."
    }
  },
  {
    id: "fis-gel-optik-spektrum-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-optik",
    subTopicId: "fis-gel-optik-spektrum",
    category: "Spektrum Elektromagnetik",
    difficulty: "sedang",
    statement: "Suatu gelombang elektromagnetik monokromatik dengan frekuensi $5 \\times 10^{14}\\text{ Hz}$ merambat dari ruang hampa memasuki suatu medium kaca optik bening yang memiliki indeks bias $n = 1{,}5$. Panjang gelombang elektromagnetik tersebut di dalam kaca adalah .... ($c = 3 \\times 10^8\\text{ m/s}$).",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3 \\times 10^{-7}\\text{ m}$",
      "$4 \\times 10^{-7}\\text{ m}$",
      "$6 \\times 10^{-7}\\text{ m}$",
      "$8 \\times 10^{-7}\\text{ m}$",
      "$9 \\times 10^{-7}\\text{ m}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Ketika gelombang elektromagnetik berpindah medium:<br>1. Frekuensi ($f$) selalu bernilai konstan karena ditentukan oleh sumber pemancar.<br>2. Kecepatan rambat berkurang sesuai indeks bias: $v = \\frac{c}{n}$.<br>3. Panjang gelombang di dalam medium memendek: $\\lambda = \\frac{v}{f} = \\frac{\\lambda_0}{n}$.",
      steps: "1. Hitung panjang gelombang di ruang hampa ($\\lambda_0$):<br>$$\\lambda_0 = \\frac{c}{f} = \\frac{3 \\times 10^8\\text{ m/s}}{5 \\times 10^{14}\\text{ Hz}} = 0{,}6 \\times 10^{-6}\\text{ m} = 6 \\times 10^{-7}\\text{ m}$$<br>2. Hitung panjang gelombang di dalam medium ($n = 1{,}5$):<br>$$\\lambda = \\frac{\\lambda_0}{n} = \\frac{6 \\times 10^{-7}\\text{ m}}{1{,}5} = 4 \\times 10^{-7}\\text{ m}$$<br>3. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Siswa sering mengira frekuensi berubah di dalam medium, atau mengalikan panjang gelombang dengan indeks bias sehingga memperoleh $9 \\times 10^{-7}\\text{ m}$ (opsi E). Panjang gelombang selalu memendek ketika memasuki medium yang lebih rapat optik."
    }
  }
];
