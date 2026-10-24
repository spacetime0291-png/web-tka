/**
 * Batch Task: TASK_fis-termo-hukum-carnot_MEDIUM
 * SubTopic: Siklus & Mesin Carnot (fis-termo-hukum-carnot)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-hukum-carnot-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Kenaikan Suhu Reservoir Tinggi untuk Menaikkan Efisiensi",
    difficulty: "sedang",
    statement: "Suatu mesin Carnot mula-mula memiliki efisiensi sebesar $25\\%$ saat beroperasi dengan reservoir suhu rendah $300\\text{ K}$. Agar efisiensi mesin tersebut meningkat menjadi $50\\%$ sementara suhu reservoir rendah tetap dipertahankan pada $300\\text{ K}$, suhu reservoir panas harus dinaikkan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$450\\text{ K}$",
      "$500\\text{ K}$",
      "$600\\text{ K}$",
      "$750\\text{ K}$",
      "$800\\text{ K}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Efisiensi mesin Carnot dirumuskan sebagai $\\eta = 1 - \\frac{T_L}{T_H}$, yang dapat diubah menjadi bentuk $T_H = \\frac{T_L}{1 - \\eta}$.",
      steps: "1. Keadaan awal: $\\eta_1 = 25\\% = 0{,}25$ dan $T_L = 300\\text{ K}$.<br>Hitung suhu reservoir panas awal ($T_{H1}$):<br>$$0{,}25 = 1 - \\frac{300\\text{ K}}{T_{H1}} \\implies \\frac{300\\text{ K}}{T_{H1}} = 0{,}75 \\implies T_{H1} = \\frac{300}{0{,}75} = 400\\text{ K}$$<br>2. Keadaan akhir yang diinginkan: $\\eta_2 = 50\\% = 0{,}50$ dengan $T_L$ tetap $300\\text{ K}$.<br>Hitung suhu reservoir panas baru ($T_{H2}$):<br>$$0{,}50 = 1 - \\frac{300\\text{ K}}{T_{H2}} \\implies \\frac{300\\text{ K}}{T_{H2}} = 0{,}50 \\implies T_{H2} = \\frac{300}{0{,}50} = 600\\text{ K}$$<br>3. Jadi suhu reservoir panas harus dinaikkan menjadi $600\\text{ K}$ (pilihan C).",
      pitfalls: "Hati-hati terhadap redaksi soal: apakah ditanya 'dinaikkan menjadi' ($T_{H2} = 600\\text{ K}$) atau 'dinaikkan sebesar' ($\\Delta T_H = 600 - 400 = 200\\text{ K}$)."
    }
  },
  {
    id: "fis-termo-hukum-carnot-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Sensitivitas Efisiensi terhadap Perubahan Suhu Reservoir",
    difficulty: "sedang",
    statement: "Sebuah mesin Carnot beroperasi di antara suhu $T_H = 600\\text{ K}$ dan $T_L = 300\\text{ K}$. Terdapat dua opsi untuk meningkatkan efisiensi termalnya:<br>(1) Menaikkan $T_H$ sebesar $100\\text{ K}$ menjadi $700\\text{ K}$ (dengan $T_L$ tetap)<br>(2) Menurunkan $T_L$ sebesar $100\\text{ K}$ menjadi $200\\text{ K}$ (dengan $T_H$ tetap)<br>Perbandingan kenaikan efisiensi antara opsi (1) dan opsi (2) ($\\Delta \\eta_1 : \\Delta \\eta_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 2$",
      "$3 : 7$",
      "$7 : 3$",
      "$1 : 1$",
      "$2 : 3$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Efisiensi Carnot awal adalah $\\eta_0 = 1 - \\frac{T_L}{T_H} = 1 - \\frac{300}{600} = \\frac{1}{2} = 50\\%$. Kenaikan efisiensi dihitung dengan $\\Delta \\eta = \\eta_{\\text{baru}} - \\eta_0$.",
      steps: "1. Hitung efisiensi opsi (1) ($T_H' = 700\\text{ K}$, $T_L = 300\\text{ K}$):<br>$$\\eta_1 = 1 - \\frac{300}{700} = \\frac{400}{700} = \\frac{4}{7}$$<br>Kenaikan efisiensi opsi (1):<br>$$\\Delta \\eta_1 = \\frac{4}{7} - \\frac{1}{2} = \\frac{8 - 7}{14} = \\frac{1}{14}$$<br>2. Hitung efisiensi opsi (2) ($T_H = 600\\text{ K}$, $T_L' = 200\\text{ K}$):<br>$$\\eta_2 = 1 - \\frac{200}{600} = \\frac{400}{600} = \\frac{2}{3}$$<br>Kenaikan efisiensi opsi (2):<br>$$\\Delta \\eta_2 = \\frac{2}{3} - \\frac{1}{2} = \\frac{4 - 3}{6} = \\frac{1}{6}$$<br>3. Bandingkan kenaikan efisiensi:<br>$$\\frac{\\Delta \\eta_1}{\\Delta \\eta_2} = \\frac{1/14}{1/6} = \\frac{6}{14} = \\frac{3}{7}$$<br>4. Jadi perbandingan kenaikan efisiensinya adalah $3 : 7$ (pilihan B).",
      pitfalls: "Sering mengira bahwa menaikkan suhu reservoir tinggi dan menurunkan suhu reservoir rendah dengan $\\Delta T$ yang sama akan memberikan kenaikan efisiensi yang identik ($1:1$). Faktanya, menurunkan $T_L$ selalu lebih efektif karena $T_L$ berada pada posisi pembilang dengan pembagi $T_H$ yang tetap."
    }
  },
  {
    id: "fis-termo-hukum-carnot-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Koefisien Performansi dan Daya Mesin Pendingin Carnot",
    difficulty: "sedang",
    statement: "Sebuah lemari es Carnot beroperasi di antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Setiap menitnya, lemari es tersebut harus membuang kalor dari dalam ruang pendingin sebesar $54.000\\text{ J}$. Daya listrik minimum yang dibutuhkan untuk mengoperasikan lemari es tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$300\\text{ Watt}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Koefisien performansi (Coefficient of Performance / $COP$) mesin pendingin Carnot dirumuskan sebagai:<br>$$COP = \\frac{T_L}{T_H - T_L} = \\frac{Q_L}{W}$$<br>dan daya mekanik/listrik adalah laju usaha per satuan waktu: $P = \\frac{W}{t}$.",
      steps: "1. Konversikan suhu ke Kelvin mutlak:<br>$$T_L = -3^\\circ\\text{C} = -3 + 273 = 270\\text{ K}$$<br>$$T_H = 27^\\circ\\text{C} = 27 + 273 = 300\\text{ K}$$<br>2. Hitung nilai $COP$ lemari es:<br>$$COP = \\frac{T_L}{T_H - T_L} = \\frac{270\\text{ K}}{300\\text{ K} - 270\\text{ K}} = \\frac{270}{30} = 9$$<br>3. Hitung usaha luar ($W$) yang diperlukan untuk membuang kalor $Q_L = 54.000\\text{ J}$:<br>$$W = \\frac{Q_L}{COP} = \\frac{54.000\\text{ J}}{9} = 6.000\\text{ J}$$<br>4. Waktu operasi $t = 1\\text{ menit} = 60\\text{ detik}$. Hitung daya listrik:<br>$$P = \\frac{W}{t} = \\frac{6.000\\text{ J}}{60\\text{ s}} = 100\\text{ Watt}$$<br>5. Jadi daya listrik minimum adalah $100\\text{ Watt}$ (pilihan B).",
      pitfalls: "Lupa mengubah satuan waktu 1 menit menjadi 60 detik saat menghitung daya listrik ($P = W/t$)."
    }
  },
  {
    id: "fis-termo-hukum-carnot-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Dua Mesin Carnot Tersusun Seri dengan Usaha Sama",
    difficulty: "sedang",
    statement: "Dua mesin Carnot bekerja secara seri. Mesin pertama menyerap kalor dari reservoir bersuhu $T_1 = 900\\text{ K}$ dan membuang kalor ke reservoir perantara bersuhu $T$. Mesin kedua menyerap seluruh kalor yang dibuang mesin pertama pada suhu $T$ dan membuang kalornya ke reservoir bersuhu $T_2 = 400\\text{ K}$. Jika kedua mesin menghasilkan usaha mekanik yang sama besar ($W_1 = W_2$), besar suhu perantara $T$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$600\\text{ K}$",
      "$650\\text{ K}$",
      "$700\\text{ K}$",
      "$720\\text{ K}$",
      "$750\\text{ K}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Untuk dua mesin Carnot yang tersusun secara seri di mana kalor buang mesin 1 ($Q$) menjadi kalor masuk mesin 2, relasi kalor dan suhu adalah $\\frac{Q_1}{T_1} = \\frac{Q}{T} = \\frac{Q_2}{T_2}$. Usaha mesin 1 adalah $W_1 = Q_1 - Q$ dan mesin 2 adalah $W_2 = Q - Q_2$.",
      steps: "1. Nyatakan usaha masing-masing mesin dalam konstanta proporsionalitas $k = \\frac{Q_1}{T_1} = \\frac{Q}{T} = \\frac{Q_2}{T_2}$:<br>$$W_1 = Q_1 - Q = k(T_1 - T)$$<br>$$W_2 = Q - Q_2 = k(T - T_2)$$<br>2. Karena $W_1 = W_2$, maka:<br>$$k(T_1 - T) = k(T - T_2) \\implies T_1 - T = T - T_2$$<br>$$2T = T_1 + T_2 \\implies T = \\frac{T_1 + T_2}{2}$$<br>3. Masukkan nilai $T_1 = 900\\text{ K}$ dan $T_2 = 400\\text{ K}$:<br>$$T = \\frac{900\\text{ K} + 400\\text{ K}}{2} = 650\\text{ K}$$<br>4. Jadi suhu reservoir perantara adalah $650\\text{ K}$ (pilihan B).",
      pitfalls: "Sering tertukar antara syarat usaha sama ($T = \\frac{T_1 + T_2}{2}$) dengan syarat efisiensi sama ($T = \\sqrt{T_1 T_2} = \\sqrt{900 \\times 400} = 600\\text{ K}$). Soal menanyakan kondisi usaha sama besar, bukan efisiensi sama."
    }
  },
  {
    id: "fis-termo-hukum-carnot-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-carnot",
    category: "Koefisien Performansi Pompa Kalor Carnot",
    difficulty: "sedang",
    statement: "Suatu pompa kalor Carnot (heat pump) digunakan untuk menghangatkan interior rumah pada suhu tetap $27^\\circ\\text{C}$ dengan menyerap kalor dari lingkungan luar bersuhu $-3^\\circ\\text{C}$. Jika motor penggerak pompa kalor mengonsumsi daya listrik sebesar $1{,}5\\text{ kW}$, laju kalor pemanasan yang dialirkan ke dalam rumah per detik adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}5\\text{ kW}$",
      "$10\\text{ kW}$",
      "$13{,}5\\text{ kW}$",
      "$15\\text{ kW}$",
      "$16{,}5\\text{ kW}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Koefisien performansi pompa kalor ($COP_{\\text{HP}}$) mengukur perbandingan kalor yang dialirkan ke reservoir panas ($Q_H$) terhadap usaha luar yang diberikan ($W$):<br>$$COP_{\\text{HP}} = \\frac{Q_H}{W} = \\frac{T_H}{T_H - T_L} = 1 + COP_{\\text{refrigerator}}$$",
      steps: "1. Konversikan suhu lingkungan dan interior ke Kelvin mutlak:<br>$$T_H = 27^\\circ\\text{C} = 27 + 273 = 300\\text{ K}$$<br>$$T_L = -3^\\circ\\text{C} = -3 + 273 = 270\\text{ K}$$<br>2. Hitung $COP_{\\text{HP}}$ pompa kalor:<br>$$COP_{\\text{HP}} = \\frac{T_H}{T_H - T_L} = \\frac{300\\text{ K}}{300\\text{ K} - 270\\text{ K}} = \\frac{300}{30} = 10$$<br>3. Hitung laju kalor yang dipasok ke ruangan ($P_H = \\frac{Q_H}{t}$):<br>$$P_H = COP_{\\text{HP}} \\times P_{\\text{listrik}} = 10 \\times 1{,}5\\text{ kW} = 15\\text{ kW}$$<br>4. Jadi laju perpindahan kalor pemanasan yang masuk ke dalam ruangan adalah $15\\text{ kW}$ (pilihan D).",
      pitfalls: "Menggunakan rumus $COP$ mesin pendingin biasa $\\frac{T_L}{T_H - T_L} = 9$ sehingga menghasilkan daya kalor $13{,}5\\text{ kW}$. Untuk pompa kalor, target output adalah kalor yang dihantarkan ke ruangan panas ($Q_H$), sehingga $COP_{\\text{HP}} = \\frac{T_H}{T_H - T_L} = 10$."
    }
  }
];
