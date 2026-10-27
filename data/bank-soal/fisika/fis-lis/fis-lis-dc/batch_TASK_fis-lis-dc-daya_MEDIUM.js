/**
 * Batch Task: TASK_fis-lis-dc-daya_MEDIUM
 * SubTopic: Energi & Daya Listrik (fis-lis-dc-daya)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-dc-daya-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Efisiensi Pemanas Listrik dan Kalorimeter",
    difficulty: "sedang",
    statement: "Sebuah ketel pemanas listrik berdaya $P = 500\\text{ Watt}$ digunakan untuk memanaskan $1\\text{ kg}$ air dari suhu $20^\\circ\\text{C}$ hingga mencapai titik didih $100^\\circ\\text{C}$. Kalor jenis air adalah $c = 4.200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika proses pemanasan tersebut membutuhkan waktu selama $14\\text{ menit}$, efisiensi termal dari ketel listrik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\%$",
      "$70\\%$",
      "$75\\%$",
      "$80\\%$",
      "$85\\%$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Efisiensi pemanas listrik ($\\eta$) adalah perbandingan antara energi kalor yang diserap oleh air ($Q = m c \\Delta T$) terhadap total energi listrik yang dipasok ($W = P t$):<br>$$\\eta = \\frac{m c \\Delta T}{P t} \\times 100\\%$$",
      steps: "1. Hitung kalor yang dibutuhkan air:<br>$$Q = m c \\Delta T = 1\\text{ kg} \\times 4.200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (100 - 20)^\\circ\\text{C} = 4.200 \\times 80 = 336.000\\text{ Joule}$$<br>2. Konversikan waktu pemanasan ke detik:<br>$$t = 14\\text{ menit} = 14 \\times 60\\text{ s} = 840\\text{ detik}$$<br>3. Hitung energi listrik yang dikonsumsi ketel:<br>$$W = P \\times t = 500\\text{ W} \\times 840\\text{ s} = 420.000\\text{ Joule}$$<br>4. Hitung efisiensi termal:<br>$$\\eta = \\frac{Q}{W} \\times 100\\% = \\frac{336.000\\text{ J}}{420.000\\text{ J}} \\times 100\\% = \\frac{4}{5} \\times 100\\% = 80\\%$$<br>5. Jadi efisiensi ketel pemanas adalah $80\\%$ (pilihan D).",
      pitfalls: "Lupa mengubah satuan waktu 14 menit ke satuan detik ($840\\text{ s}$) saat menghitung energi listrik ($W = P t$)."
    }
  },
  {
    id: "fis-lis-dc-daya-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Analisis Kecerahan Lampu pada Rangkaian Kombinasi",
    difficulty: "sedang",
    statement: "Tiga buah lampu pijar identik $L_1$, $L_2$, dan $L_3$ masing-masing berhambatan $R$ dirangkai sebagai berikut: lampu $L_2$ dan $L_3$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai secara seri dengan lampu $L_1$. Rangkaian dihubungkan ke sumber tegangan ideal $V$. Perbandingan daya listrik yang diserap oleh ketiga lampu ($P_1 : P_2 : P_3$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 1 : 1$",
      "$2 : 1 : 1$",
      "$4 : 1 : 1$",
      "$4 : 2 : 2$",
      "$1 : 2 : 2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Daya disipasi lampu adalah $P = I^2 R$. Pada susunan kombinasi, arus total cabang utama melewati lampu seri ($L_1$), sedangkan pada percabangan paralel arus terbagi dua sama besar ke lampu identik $L_2$ dan $L_3$.",
      steps: "1. Misalkan arus total pada kawat utama adalah $I$. Maka arus yang melintasi lampu $L_1$ adalah:<br>$$I_1 = I$$<br>2. Karena $L_2$ dan $L_3$ tersusun paralel dan memiliki hambatan yang identik ($R$), arus terbagi sama rata pada kedua cabang:<br>$$I_2 = I_3 = \\frac{1}{2}I$$<br>3. Hitung daya pada masing-masing lampu:<br>$$P_1 = I_1^2 R = I^2 R$$<br>$$P_2 = I_2^2 R = \\left(\\frac{1}{2}I\\right)^2 R = \\frac{1}{4} I^2 R$$<br>$$P_3 = I_3^2 R = \\left(\\frac{1}{2}I\\right)^2 R = \\frac{1}{4} I^2 R$$<br>4. Bandingkan daya ketiga lampu:<br>$$P_1 : P_2 : P_3 = 1 : \\frac{1}{4} : \\frac{1}{4} = 4 : 1 : 1$$<br>5. Jadi perbandingan dayanya adalah $4 : 1 : 1$ (pilihan C).",
      pitfalls: "Siswa sering mengira rasio dayanya $2 : 1 : 1$ karena rasio arusnya $2 : 1$, melupakan bahwa daya berbanding lurus dengan kuadrat arus ($I^2$)."
    }
  },
  {
    id: "fis-lis-dc-daya-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Perhitungan Biaya Pemakaian Listrik Rumah Tangga",
    difficulty: "sedang",
    statement: "Sebuah rumah tangga menggunakan peralatan listrik berikut setiap harinya:<br>- 5 buah lampu LED masing-masing berdaya $20\\text{ W}$ menyala selama $10\\text{ jam/hari}$<br>- 1 buah lemari es berdaya $100\\text{ W}$ menyala selama $24\\text{ jam/hari}$<br>- 1 buah televisi berdaya $80\\text{ W}$ menyala selama $5\\text{ jam/hari}$<br>- 1 buah pompa air berdaya $200\\text{ W}$ menyala selama $3\\text{ jam/hari}$<br>Jika tarif energi listrik adalah $\\text{Rp}1.500\\text{ per kWh}$, biaya listrik yang harus dibayar selama satu bulan ($30\\text{ hari}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\text{Rp}165.000$",
      "$\\text{Rp}184.000$",
      "$\\text{Rp}198.000$",
      "$\\text{Rp}212.000$",
      "$\\text{Rp}240.000$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Biaya listrik bulanan dihitung dari total konsumsi energi per hari dikalikan 30 hari dan dikalikan tarif per kWh:<br>$$\\text{Biaya} = \\Sigma(P \\times t) \\times 30 \\times \\text{Tarif}$$",
      steps: "1. Hitung konsumsi energi listrik per hari untuk masing-masing beban:<br>- Lampu: $5 \\times 20\\text{ W} \\times 10\\text{ h} = 1.000\\text{ Wh} = 1{,}0\\text{ kWh}$<br>- Lemari es: $1 \\times 100\\text{ W} \\times 24\\text{ h} = 2.400\\text{ Wh} = 2{,}4\\text{ kWh}$<br>- Televisi: $1 \\times 80\\text{ W} \\times 5\\text{ h} = 400\\text{ Wh} = 0{,}4\\text{ kWh}$<br>- Pompa air: $1 \\times 200\\text{ W} \\times 3\\text{ h} = 600\\text{ Wh} = 0{,}6\\text{ kWh}$<br>2. Total energi harian:<br>$$W_{\\text{hari}} = 1{,}0 + 2{,}4 + 0{,}4 + 0{,}6 = 4{,}4\\text{ kWh/hari}$$<br>3. Total energi selama 30 hari:<br>$$W_{\\text{bulan}} = 4{,}4\\text{ kWh/hari} \\times 30\\text{ hari} = 132\\text{ kWh}$$<br>4. Hitung total rekening listrik:<br>$$\\text{Biaya} = 132\\text{ kWh} \\times \\text{Rp}1.500/\\text{kWh} = \\text{Rp}198.000$$<br>5. Jadi biaya listrik bulanan adalah $\\text{Rp}198.000$ (pilihan C).",
      pitfalls: "Lupa mengalikan jumlah unit lampu ($5 \\times 20\\text{ W}$) atau kesalahan perkalian aritmetika biaya."
    }
  },
  {
    id: "fis-lis-dc-daya-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Dua Pemanas Listrik Dirangkai Seri dan Paralel",
    difficulty: "sedang",
    statement: "Sebuah pemanas air listrik dengan kumparan $A$ dapat mendidihkan sejumlah air dalam waktu $t_A = 12\\text{ menit}$, sedangkan kumparan pemanas $B$ dapat mendidihkan jumlah air yang sama dalam waktu $t_B = 6\\text{ menit}$. Jika kedua kumparan dihubungkan ke sumber tegangan konstan yang sama, waktu yang dibutuhkan untuk mendidihkan air tersebut jika kedua kumparan dirangkai secara paralel ($t_p$) dan secara seri ($t_s$) berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ menit}$ dan $18\\text{ menit}$",
      "$6\\text{ menit}$ dan $12\\text{ menit}$",
      "$3\\text{ menit}$ dan $18\\text{ menit}$",
      "$4\\text{ menit}$ dan $9\\text{ menit}$",
      "$8\\text{ menit}$ dan $18\\text{ menit}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jumlah kalor $Q$ yang diperlukan untuk mendidihkan air bernilai tetap. Pada tegangan tetap $V$, daya pemanas adalah $P = \\frac{V^2}{R}$. Karena $Q = P t = \\frac{V^2}{R} t$, diperoleh hubungan bahwa hambatan kumparan sebanding dengan waktu pemanasan ($R \\propto t$).",
      steps: "1. Untuk susunan paralel, daya total dijumlahkan: $P_p = P_A + P_B$. Karena $P = \\frac{Q}{t}$:<br>$$\\frac{Q}{t_p} = \\frac{Q}{t_A} + \\frac{Q}{t_B} \\implies \\frac{1}{t_p} = \\frac{1}{t_A} + \\frac{1}{t_B}$$<br>Masukkan nilai waktu:<br>$$\\frac{1}{t_p} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1 + 2}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies t_p = 4\\text{ menit}$$<br>2. Untuk susunan seri, hambatan total dijumlahkan: $R_s = R_A + R_B$. Karena $R \\propto t$:<br>$$t_s = t_A + t_B = 12\\text{ menit} + 6\\text{ menit} = 18\\text{ menit}$$<br>3. Jadi waktu pemanasan berturut-turut adalah $4\\text{ menit}$ dan $18\\text{ menit}$ (pilihan A).",
      pitfalls: "Sering tertukar antara aturan seri dan paralel untuk waktu pemanasan: pada paralel daya bertambah sehingga waktu mengecil ($t_p = 4\\text{ menit}$), sedangkan pada seri hambatan membesar sehingga waktu pemanasan bertambah lama ($t_s = 18\\text{ menit}$)."
    }
  },
  {
    id: "fis-lis-dc-daya-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-dc",
    subTopicId: "fis-lis-dc-daya",
    category: "Efisiensi dan GGL Balik Motor Listrik DC",
    difficulty: "sedang",
    statement: "Sebuah motor listrik arus searah (DC) dengan hambatan dalam kumparan $r = 2\\,\\Omega$ dihubungkan ke sumber tegangan $V = 100\\text{ Volt}$. Saat motor berputar normal menghasilkan kerja mekanik, arus yang mengalir melalui motor adalah $I = 5\\text{ Ampere}$. Besar GGL balik (back-EMF $\\mathcal{E}'$) yang dibangkitkan oleh motor dan efisiensi motor tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$90\\text{ V}$ dan $90\\%$",
      "$90\\text{ V}$ dan $80\\%$",
      "$80\\text{ V}$ dan $80\\%$",
      "$100\\text{ V}$ dan $90\\%$",
      "$110\\text{ V}$ dan $95\\%$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Motor listrik mengubah energi listrik menjadi energi mekanik. Tegangan sumber terbagi menjadi GGL balik motor ($\\mathcal{E}'$) dan tegangan jatuh resistif internal ($I r$):<br>$$V = \\mathcal{E}' + I r$$<br>Daya output mekanik adalah $P_{\\text{out}} = \\mathcal{E}' I$ dan efisiensinya adalah $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%$.",
      steps: "1. Hitung besar GGL balik (back-EMF):<br>$$\\mathcal{E}' = V - I r = 100\\text{ V} - (5\\text{ A} \\times 2\\,\\Omega) = 100\\text{ V} - 10\\text{ V} = 90\\text{ Volt}$$<br>2. Hitung daya listrik masukan (input):<br>$$P_{\\text{in}} = V \\times I = 100\\text{ V} \\times 5\\text{ A} = 500\\text{ Watt}$$<br>3. Hitung daya mekanik keluaran (output):<br>$$P_{\\text{out}} = \\mathcal{E}' \\times I = 90\\text{ V} \\times 5\\text{ A} = 450\\text{ Watt}$$<br>4. Hitung efisiensi motor:<br>$$\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{450\\text{ W}}{500\\text{ W}} \\times 100\\% = 90\\%$$<br>5. Jadi GGL balik adalah $90\\text{ V}$ dan efisiensinya adalah $90\\%$ (pilihan A).",
      pitfalls: "Menjumlahkan alih-alih mengurangkan $V + Ir = 110\\text{ V}$, atau mengira daya output dihitung semata-mata dari hambatan internal $I^2 r$."
    }
  }
];
