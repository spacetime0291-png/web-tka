/**
 * Batch Task: TASK_fis-termo-hukum-usaha_MEDIUM
 * SubTopic: Usaha & Energi Dalam (fis-termo-hukum-usaha)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-termo-hukum-usaha-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Usaha Lintasan Linier Trapesium pada Diagram P-V",
    difficulty: "sedang",
    statement: "Suatu gas ideal mengalami proses ekspansi dari keadaan A menuju keadaan B melalui lintasan garis lurus miring pada diagram $P-V$. Pada keadaan awal A, gas memiliki volume $V_A = 1{,}0\\text{ m}^3$ dan tekanan $P_A = 2{,}0 \\times 10^5\\text{ Pa}$. Pada keadaan akhir B, volume gas menjadi $V_B = 5{,}0\\text{ m}^3$ dan tekanannya meningkat menjadi $P_B = 6{,}0 \\times 10^5\\text{ Pa}$. Besar usaha luar yang dilakukan oleh gas selama proses ekspansi dari A ke B tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1600\\text{ kJ}$",
      "$2000\\text{ kJ}$",
      "$2400\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Usaha luar ($W$) pada diagram $P-V$ untuk lintasan garis lurus miring setara dengan luas daerah bangun trapesium yang dibatasi oleh kurva, sumbu volume, serta garis tegak $V = V_A$ dan $V = V_B$:<br>$$W = \\frac{P_A + P_B}{2} \\times (V_B - V_A)$$",
      steps: "1. Data: $P_A = 2{,}0 \\times 10^5\\text{ Pa}$, $P_B = 6{,}0 \\times 10^5\\text{ Pa}$, $V_A = 1{,}0\\text{ m}^3$, $V_B = 5{,}0\\text{ m}^3$.<br>2. Hitung tekanan rata-rata (tinggi rata-rata trapesium):<br>$$P_{\\text{rata-rata}} = \\frac{2{,}0 \\times 10^5 + 6{,}0 \\times 10^5}{2} = 4{,}0 \\times 10^5\\text{ Pa}$$<br>3. Hitung pertambahan volume: $\\Delta V = 5{,}0 - 1{,}0 = 4{,}0\\text{ m}^3$.<br>4. Hitung luas trapesium (usaha $W$):<br>$$W = (4{,}0 \\times 10^5\\text{ Pa}) \\times 4{,}0\\text{ m}^3 = 16 \\times 10^5\\text{ Joule} = 1600\\text{ kJ}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      pitfalls: "Jika hanya menghitung luas segitiga atas saja ($1/2 \\times 4 \\times 4 \\times 10^5 = 800\\text{ kJ}$, opsi A) atau persegi panjang bawah saja, nilainya belum mencakup seluruh luas di bawah kurva hingga sumbu horizontal $P = 0$."
    }
  },
  {
    id: "fis-termo-hukum-usaha-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Perbandingan Usaha Luar Antar Lintasan Berbeda",
    difficulty: "sedang",
    statement: "Suatu gas ideal dipindahkan dari keadaan awal 1 ($P_1, V_1$) menuju keadaan akhir 2 ($P_2, V_2$) dengan $P_2 < P_1$ dan $V_2 > V_1$ melalui tiga lintasan yang berbeda pada diagram $P-V$:<br>- Lintasan I: Dari 1 diekspansikan secara isobarik hingga volume $V_2$, lalu tekanannya diturunkan secara isokhorik menuju 2.<br>- Lintasan II: Dari 1 diturunkan tekanannya secara isokhorik hingga $P_2$, lalu diekspansikan secara isobarik menuju 2.<br>- Lintasan III: Menghubungkan titik 1 langsung ke titik 2 melalui garis lurus.<br>Pernyataan yang tepat mengenai perbandingan usaha luar ($W$) dan perubahan energi dalam ($\\Delta U$) pada ketiga lintasan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$",
      "$W_{\\text{I}} = W_{\\text{II}} = W_{\\text{III}}$ dan $\\Delta U_{\\text{I}} > \\Delta U_{\\text{III}} > \\Delta U_{\\text{II}}$",
      "$W_{\\text{II}} > W_{\\text{III}} > W_{\\text{I}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$",
      "$W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ dan $\\Delta U_{\\text{I}} > \\Delta U_{\\text{III}} > \\Delta U_{\\text{II}}$",
      "$W_{\\text{I}} = W_{\\text{II}} = W_{\\text{III}}$ dan $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Karakteristik besaran termodinamika:<br>1. Energi dalam ($U$) adalah fungsi keadaan, sehingga perubahannya $\\Delta U = U_2 - U_1$ hanya bergantung pada keadaan awal 1 dan akhir 2, artinya $\\Delta U_{\\text{I}} = \\Delta U_{\\text{II}} = \\Delta U_{\\text{III}}$.<br>2. Usaha ($W = \\int P\\,dV$) adalah fungsi lintasan yang nilainya sama dengan luas area di bawah grafik $P-V$. Luas di bawah Lintasan I paling besar, diikuti Lintasan III (trapesium), dan Lintasan II memiliki luas paling kecil.",
      steps: "1. Amati geometri kurva pada diagram $P-V$.<br>2. Lintasan I berlangsung pada tekanan tinggi $P_1$ terlebih dahulu sehingga area di bawahnya mencakup seluruh persegi panjang atas dan bawah.<br>3. Lintasan II berlangsung pada tekanan rendah $P_2$ sehingga areanya hanya persegi panjang bawah.<br>4. Lintasan III membentuk trapesium di antara keduanya.<br>5. Jadi: $W_{\\text{I}} > W_{\\text{III}} > W_{\\text{II}}$ sedangkan $\\Delta U$ identik sama pada ketiganya.<br>6. Jawaban yang tepat adalah pilihan A.",
      pitfalls: "Jangan menyimpulkan bahwa jika keadaan awal dan akhir sama maka usahanya juga sama. Usaha bergantung mutlak pada rute lintasan yang dilalui."
    }
  },
  {
    id: "fis-termo-hukum-usaha-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Usaha yang Dilakukan pada Kompresi Isotermal",
    difficulty: "sedang",
    statement: "Sebanyak $2\\text{ mol}$ gas ideal berada pada suhu konstan $T = 300\\text{ K}$. Gas tersebut dikompresi secara kuasistatis dan isotermal sehingga volumenya menyusut dari volume awal $V_1 = 4\\,V_0$ menjadi volume akhir $V_2 = V_0$. Diketahui tetapan gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan $\\ln 2 \\approx 0{,}693$. Besar usaha yang dilakukan oleh lingkungan pada gas tersebut adalah sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1728\\text{ Joule}$",
      "$3457\\text{ Joule}$",
      "$4988\\text{ Joule}$",
      "$6914\\text{ Joule}$",
      "$9977\\text{ Joule}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Usaha luar yang dilakukan oleh gas pada proses isotermal dirumuskan:<br>$$W_{\\text{gas}} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$<br>Karena $V_2 < V_1$, $W_{\\text{gas}}$ bernilai negatif. Usaha yang dilakukan oleh lingkungan PADA gas bernilai positif: $W_{\\text{lingkungan}} = -W_{\\text{gas}} = n R T \\ln\\left(\\frac{V_1}{V_2}\\right)$.",
      steps: "1. Identifikasi parameter: $n = 2\\text{ mol}$, $T = 300\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio kompresi: $\\frac{V_1}{V_2} = 4 = 2^2 \\implies \\ln 4 = 2 \\ln 2 \\approx 2 \\times 0{,}693 = 1{,}386$.<br>3. Hitung usaha yang dilakukan lingkungan pada gas:<br>$$W_{\\text{lingkungan}} = 2 \\times 8{,}314 \\times 300 \\times 1{,}386$$<br>$$W_{\\text{lingkungan}} = 4988{,}4 \\times 1{,}386 \\approx 6914\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan lupa bahwa rasio volume adalah $4$, sehingga $\\ln 4 = 2 \\ln 2$. Menggunakan $\\ln 2$ saja akan menghasilkan setengahnya ($3457\\text{ Joule}$, opsi B)."
    }
  },
  {
    id: "fis-termo-hukum-usaha-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Energi Dalam Campuran Gas Berbeda Derajat Kebebasan",
    difficulty: "sedang",
    statement: "Sebuah wadah terisolasi kaku berisi campuran gas ideal yang terdiri atas $1{,}0\\text{ mol}$ gas helium (monoatomik, derajat kebebasan $f_1 = 3$) dan $2{,}0\\text{ mol}$ gas nitrogen (diatomik pada suhu kamar, derajat kebebasan $f_2 = 5$) dalam kesetimbangan termal pada suhu $T = 300\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, energi dalam total ($U_{\\text{total}}$) dari campuran gas tersebut adalah sekitar ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$7{,}48\\text{ kJ}$",
      "$11{,}22\\text{ kJ}$",
      "$14{,}96\\text{ kJ}$",
      "$16{,}21\\text{ kJ}$",
      "$19{,}95\\text{ kJ}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Energi dalam total sistem campuran gas ideal adalah penjumlahan aljabar dari energi dalam masing-masing komponen gasnya:<br>$$U_{\\text{total}} = U_{\\text{He}} + U_{\\text{N}_2} = \\left(\\frac{f_1}{2} n_1 R T\\right) + \\left(\\frac{f_2}{2} n_2 R T\\right)$$",
      steps: "1. Hitung kontribusi gas helium ($n_1 = 1{,}0\\text{ mol}$, $f_1 = 3$):<br>$$U_{\\text{He}} = \\frac{3}{2} \\times 1{,}0 \\times R \\times 300 = 450\\,R$$<br>2. Hitung kontribusi gas nitrogen ($n_2 = 2{,}0\\text{ mol}$, $f_2 = 5$):<br>$$U_{\\text{N}_2} = \\frac{5}{2} \\times 2{,}0 \\times R \\times 300 = 1500\\,R$$<br>3. Jumlahkan total energi dalam:<br>$$U_{\\text{total}} = 450\\,R + 1500\\,R = 1950\\,R$$<br>4. Masukkan nilai $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$:<br>$$U_{\\text{total}} = 1950 \\times 8{,}314 = 16.212{,}3\\text{ Joule} \\approx 16{,}21\\text{ kJ}$$<br>5. Jawaban yang tepat adalah pilihan D.",
      pitfalls: "Jangan menganggap kedua gas memiliki derajat kebebasan yang sama ($f = 3$ untuk semua atau $f = 5$ untuk semua). Gas monoatomik memiliki $f = 3$ sedangkan gas diatomik pada suhu kamar memiliki $f = 5$."
    }
  },
  {
    id: "fis-termo-hukum-usaha-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-termo",
    subChapterId: "fis-termo-hukum",
    subTopicId: "fis-termo-hukum-usaha",
    category: "Usaha pada Proses Politropik",
    difficulty: "sedang",
    statement: "Suatu gas ideal berekspansi di dalam silinder menurut proses politropik dengan persamaan $P \\times V^2 = C$ (dengan $C$ adalah konstanta). Keadaan awal gas memiliki volume $V_1 = 1{,}0\\text{ m}^3$ dan tekanan $P_1 = 8{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut memuai hingga volumenya menjadi $V_2 = 2{,}0\\text{ m}^3$. Besar usaha luar yang dilakukan oleh gas selama proses politropik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ kJ}$",
      "$400\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$800\\text{ kJ}$",
      "$1200\\text{ kJ}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Usaha pada proses politropik $P V^n = C$ (untuk $n \\ne 1$) dihitung dari integrasi kalkulus:<br>$$W = \\int_{V_1}^{V_2} P\\,dV = \\int_{V_1}^{V_2} C V^{-n}\\,dV = \\frac{C}{1 - n} \\left[V_2^{1 - n} - V_1^{1 - n}\\right] = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$$",
      steps: "1. Eksponen politropik $n = 2$.<br>2. Hitung tekanan akhir $P_2$ dari $P_1 V_1^2 = P_2 V_2^2$:<br>$$P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right)^2 = (8{,}0 \\times 10^5\\text{ Pa}) \\times \\left(\\frac{1{,}0}{2{,}0}\\right)^2 = 8{,}0 \\times 10^5 \\times \\frac{1}{4} = 2{,}0 \\times 10^5\\text{ Pa}$$<br>3. Masukkan ke rumus usaha politropik:<br>$$W = \\frac{P_1 V_1 - P_2 V_2}{n - 1} = \\frac{(8{,}0 \\times 10^5 \\times 1{,}0) - (2{,}0 \\times 10^5 \\times 2{,}0)}{2 - 1}$$<br>$$W = \\frac{8{,}0 \\times 10^5 - 4{,}0 \\times 10^5}{1} = 4{,}0 \\times 10^5\\text{ Joule} = 400\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      pitfalls: "Perhatikan penyebut pada rumus politropik adalah $n - 1$. Karena $n = 2$, penyebutnya bernilai $2 - 1 = 1$. Jangan tertukar urutan antara $P_1 V_1$ dan $P_2 V_2$."
    }
  }
];
