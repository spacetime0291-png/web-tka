/**
 * Batch Task: TASK_fis-termo-hukum-proses_EASY
 * SubTopic: Proses Termodinamika (fis-termo-hukum-proses)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-termo-hukum-proses-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Usaha Gas pada Proses Isobarik",
    difficulty: "mudah",
    statement: "Sejumlah gas ideal berada di dalam silinder berpenghisap pada tekanan konstan $2{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut menyerap kalor sehingga memuai dari volume awal $1{,}5\\text{ m}^3$ menjadi volume akhir $3{,}5\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas selama proses pemuaian isobarik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$300\\text{ kJ}$",
      "$400\\text{ kJ}$",
      "$700\\text{ kJ}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Usaha luar ($W$) yang dilakukan gas pada proses tekanan konstan (isobarik) dihitung dengan mengalikan tekanan dengan perubahan volumenya:<br>$$W = P \\times \\Delta V = P \\times (V_2 - V_1)$$",
      steps: "1. Identifikasi data:<br>$P = 2{,}0 \\times 10^5\\text{ Pa}$<br>$V_1 = 1{,}5\\text{ m}^3$<br>$V_2 = 3{,}5\\text{ m}^3$<br>2. Hitung perubahan volume $\\Delta V$:<br>$$\\Delta V = 3{,}5 - 1{,}5 = 2{,}0\\text{ m}^3$$<br>3. Hitung usaha luar $W$:<br>$$W = (2{,}0 \\times 10^5\\text{ Pa}) \\times 2{,}0\\text{ m}^3 = 4{,}0 \\times 10^5\\text{ Joule} = 400\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Pastikan menggunakan selisih volume $\\Delta V = 3{,}5 - 1{,}5 = 2{,}0\\text{ m}^3$, bukan volume akhir $3{,}5\\text{ m}^3$ langsung (yang akan menghasilkan $700\\text{ kJ}$, opsi E)."
    }
  },
  {
    id: "fis-termo-hukum-proses-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Karakteristik Usaha Proses Isokhorik",
    difficulty: "mudah",
    statement: "Sebuah wadah tertutup terbuat dari logam baja kaku berisi gas ideal dipanaskan di atas nyala api sehingga tekanannya melonjak dari $1{,}0\\text{ atm}$ menjadi $3{,}0\\text{ atm}$. Besar usaha luar ($W$) yang dilakukan oleh gas selama proses pemanasan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ Joule}$",
      "$1{,}0 \\times 10^5\\text{ Joule}$",
      "$2{,}0 \\times 10^5\\text{ Joule}$",
      "$3{,}0 \\times 10^5\\text{ Joule}$",
      "$4{,}5 \\times 10^5\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Usaha termodinamika dinyatakan sebagai integral tekanan terhadap perubahan volume: $W = \\int P\\,dV$.<br>Pada wadah kaku, volume gas tidak dapat memuai maupun menyusut ($V = \\text{konstan}$ atau $\\Delta V = 0$). Karena tidak terjadi pergeseran batas sistem, usaha luar yang dilakukan oleh gas pada proses isokhorik bernilai tepat nol ($W = 0$).",
      steps: "1. Analisis kondisi wadah: wadah baja kaku $\\implies$ volume tetap (proses isokhorik/isovolumetrik).<br>2. Perubahan volume $\\Delta V = 0$.<br>3. Usaha luar: $W = P \\times \\Delta V = 0\\text{ Joule}$.<br>4. Seluruh kalor yang diserap semata-mata digunakan untuk menaikkan energi dalam (suhu) gas.<br>5. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Walaupun tekanan gas melonjak tinggi, selama batas wadah tidak bergeser (tidak ada ekspansi volume), gas TIDAK melakukan usaha mekanik luar ($W = 0$)."
    }
  },
  {
    id: "fis-termo-hukum-proses-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Definisi Proses Adiabatik",
    difficulty: "mudah",
    statement: "Suatu proses termodinamika di mana gas memuai atau dimampatkan secara sangat cepat di dalam wadah yang terisolasi sempurna sehingga tidak ada aliran kalor yang masuk ke dalam sistem maupun keluar menuju lingkungan ($Q = 0$) dinamakan proses ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Isotermal",
      "Isobarik",
      "Isokhorik",
      "Adiabatik",
      "Polisiuklik"
    ],
    correctIndex: 3,
    solution: {
      concept: "Empat proses termodinamika dasar:<br>1. Isobarik: tekanan konstan ($\\Delta P = 0$).<br>2. Isotermal: suhu konstan ($\\Delta T = 0$, $\\Delta U = 0$).<br>3. Isokhorik: volume konstan ($\\Delta V = 0$, $W = 0$).<br>4. Adiabatik: tidak ada pertukaran kalor antara sistem dan lingkungan ($Q = 0$).",
      steps: "1. Identifikasi kata kunci: tidak ada aliran kalor masuk atau keluar $\\implies Q = 0$.<br>2. Berdasarkan definisi termodinamika, kondisi $Q = 0$ adalah proses adiabatik.<br>3. Berdasarkan Hukum I Termodinamika ($\\Delta U = Q - W$), pada proses adiabatik berlaku $\\Delta U = -W$.<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan tertukar antara isotermal ($T$ konstan, kalor $Q$ tetap bisa mengalir) dengan adiabatik ($Q = 0$, suhu $T$ justru berubah drastis saat gas berekspansi atau dikompresi)."
    }
  },
  {
    id: "fis-termo-hukum-proses-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Usaha pada Ekspansi Isotermal",
    difficulty: "mudah",
    statement: "Sebanyak $1\\text{ mol}$ gas ideal berekspansi secara perlahan pada suhu tetap $T = 300\\text{ K}$ (proses isotermal) sehingga volumenya bertambah menjadi dua kali volume awal ($V_2 = 2\\,V_1$). Jika tetapan gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan diketahui nilai $\\ln 2 \\approx 0{,}693$, besar usaha luar yang dilakukan oleh gas tersebut adalah sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$864{,}5\\text{ Joule}$",
      "$1247{,}1\\text{ Joule}$",
      "$1728{,}5\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$",
      "$3457{,}0\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Usaha luar pada proses isotermal gas ideal dihitung dari integral persamaan keadaan $P = \\frac{nRT}{V}$:<br>$$W = \\int_{V_1}^{V_2} P\\,dV = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$",
      steps: "1. Data: $n = 1\\text{ mol}$, $T = 300\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio ekspansi volume: $\\frac{V_2}{V_1} = 2 \\implies \\ln\\left(\\frac{V_2}{V_1}\\right) = \\ln 2 \\approx 0{,}693$.<br>3. Hitung usaha luar $W$:<br>$$W = 1 \\times 8{,}314 \\times 300 \\times 0{,}693 = 2494{,}2 \\times 0{,}693 \\approx 1728{,}5\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Lupa mengalikan dengan $\\ln 2 = 0{,}693$ akan menghasilkan nilai $n R T = 2494{,}2\\text{ Joule}$ (opsi D). Pada proses isotermal, faktor logaritma natural rasio volume wajib disertakan."
    }
  },
  {
    id: "fis-termo-hukum-proses-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-proses",
    category: "Interpretasi Geometris Usaha pada Diagram P-V",
    difficulty: "mudah",
    statement: "Pada diagram tekanan terhadap volume ($P-V$), sebuah proses pemuaian gas ideal berlangsung secara isobarik pada tekanan konstan $4{,}0 \\times 10^5\\text{ Pa}$ dari titik A ($V_A = 1{,}0\\text{ m}^3$) menuju titik B ($V_B = 4{,}0\\text{ m}^3$). Berdasarkan konsep geometris diagram $P-V$, besar usaha luar yang dilakukan oleh gas setara dengan luas daerah di bawah kurva grafik, yaitu sebesar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4{,}0 \\times 10^5\\text{ Joule}$",
      "$8{,}0 \\times 10^5\\text{ Joule}$",
      "$1{,}2 \\times 10^6\\text{ Joule}$",
      "$1{,}6 \\times 10^6\\text{ Joule}$",
      "$2{,}0 \\times 10^6\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Secara fisis dan grafis pada diagram $P-V$, usaha yang dilakukan gas selama proses termodinamika sama dengan luas area di bawah kurva lintasan proses yang dibatasi oleh sumbu volume:<br>$$W = \\text{Luas daerah di bawah kurva } P-V$$<br>Untuk proses isobarik, bentuk bangun datarnya adalah persegi panjang dengan tinggi $P$ dan alas $\\Delta V = V_B - V_A$.",
      steps: "1. Tentukan alas persegi panjang: $\\Delta V = V_B - V_A = 4{,}0\\text{ m}^3 - 1{,}0\\text{ m}^3 = 3{,}0\\text{ m}^3$.<br>2. Tentukan tinggi persegi panjang: $P = 4{,}0 \\times 10^5\\text{ Pa}$.<br>3. Hitung luas persegi panjang (usaha $W$):<br>$$W = \\text{panjang} \\times \\text{lebar} = (4{,}0 \\times 10^5\\text{ Pa}) \\times 3{,}0\\text{ m}^3 = 12 \\times 10^5\\text{ Joule} = 1{,}2 \\times 10^6\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jangan menghitung luas menggunakan $V_B$ penuh ($4 \\times 10^5 \\times 4 = 1{,}6 \\times 10^6\\text{ J}$, opsi D). Panjang alas hanya dihitung dari selisih $V_B - V_A = 3{,}0\\text{ m}^3$."
    }
  }
];
