/**
 * Batch Task: TASK_fis-lis-statis-keping_MEDIUM
 * SubTopic: Kapasitor & Keping Sejajar (fis-lis-statis-keping)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-statis-keping-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Pengaruh Penyisipan Dielektrik pada Kondisi Baterai Dilepas",
    difficulty: "sedang",
    statement: "Sebuah kapasitor keping sejajar dihubungkan ke sumber tegangan arus searah $V_0$ hingga termuati penuh dengan muatan $Q_0$, kemudian sumber tegangan dilepaskan (diputus). Setelah itu, ke dalam celah di antara kedua keping disisipkan bahan dielektrik dengan konstanta relatif $K = 3$ hingga memenuhi seluruh ruang. Perubahan yang terjadi pada kapasitas ($C$), beda potensial ($V$), dan energi elektrostatik ($W$) yang tersimpan pada kapasitor adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$C$ menjadi $3C_0$, $V$ menjadi $\\frac{1}{3}V_0$, dan $W$ menjadi $\\frac{1}{3}W_0$",
      "$C$ menjadi $3C_0$, $V$ tetap $V_0$, dan $W$ menjadi $3W_0$",
      "$C$ menjadi $3C_0$, $V$ menjadi $3V_0$, dan $W$ menjadi $9W_0$",
      "$C$ menjadi $\\frac{1}{3}C_0$, $V$ menjadi $3V_0$, dan $W$ menjadi $3W_0$",
      "$C$ menjadi $\\frac{1}{3}C_0$, $V$ menjadi $\\frac{1}{3}V_0$, dan $W$ tetap $W_0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Saat kapasitor dilepas dari baterai, muatan listrik pada keping terisolasi sehingga nilainya kekal konstan ($Q = Q_0$). Penyisipan bahan dielektrik dengan konstanta $K$ mengubah kapasitas menjadi $C = K C_0$, beda potensial menjadi $V = \\frac{Q}{C} = \\frac{V_0}{K}$, dan energi menjadi $W = \\frac{Q^2}{2C} = \\frac{W_0}{K}$.",
      steps: "1. Karena sumber tegangan dilepas, muatan tidak memiliki jalur untuk keluar atau masuk, sehingga $Q = Q_0$ (konstan).<br>2. Kapasitas baru meningkat sebanding konstanta dielektrik:<br>$$C = K C_0 = 3C_0$$<br>3. Beda potensial baru dihitung dari $V = \\frac{Q}{C}$:<br>$$V = \\frac{Q_0}{3C_0} = \\frac{1}{3} V_0$$<br>4. Energi elektrostatik tersimpan dihitung dari $W = \\frac{Q^2}{2C}$:<br>$$W = \\frac{Q_0^2}{2(3C_0)} = \\frac{1}{3} \\left(\\frac{Q_0^2}{2C_0}\\right) = \\frac{1}{3} W_0$$<br>5. Jadi pilihan yang benar adalah A.",
      pitfalls: "Sering tertukar antara kasus baterai dilepas ($Q$ konstan) dengan kasus baterai tetap terhubung ($V$ konstan). Jika baterai tetap terhubung, $V$ tetap dan $W$ justru naik menjadi $3W_0$."
    }
  },
  {
    id: "fis-lis-statis-keping-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Tegangan dan Muatan pada Rangkaian Gabungan Kapasitor",
    difficulty: "sedang",
    statement: "Tiga buah kapasitor $C_1 = 3\\,\\mu\\text{F}$, $C_2 = 2\\,\\mu\\text{F}$, dan $C_3 = 4\\,\\mu\\text{F}$ dirangkai sebagai berikut: $C_2$ dan $C_3$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai secara seri dengan $C_1$. Ujung-ujung rangkaian gabungan tersebut dihubungkan ke sumber tegangan searah $18\\text{ Volt}$. Beda potensial pada kapasitor $C_1$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ Volt}$",
      "$9\\text{ Volt}$",
      "$12\\text{ Volt}$",
      "$15\\text{ Volt}$",
      "$18\\text{ Volt}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada rangkaian kombinasi seri-paralel, tentukan terlebih dahulu kapasitas pengganti total untuk memperoleh muatan total yang dialirkan sumber. Muatan pada komponen yang tersusun seri sama dengan muatan total.",
      steps: "1. Hitung kapasitas pengganti paralel $C_2$ dan $C_3$:<br>$$C_p = C_2 + C_3 = 2\\,\\mu\\text{F} + 4\\,\\mu\\text{F} = 6\\,\\mu\\text{F}$$<br>2. Hitung kapasitas total rangkaian ($C_1 = 3\\,\\mu\\text{F}$ seri dengan $C_p = 6\\,\\mu\\text{F}$):<br>$$C_{\\text{total}} = \\frac{C_1 \\times C_p}{C_1 + C_p} = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\mu\\text{F}$$<br>3. Hitung muatan total yang ditarik dari sumber tegangan $V = 18\\text{ V}$:<br>$$Q_{\\text{total}} = C_{\\text{total}} \\times V = 2\\,\\mu\\text{F} \\times 18\\text{ V} = 36\\,\\mu\\text{C}$$<br>4. Karena $C_1$ terangkai seri pada cabang utama, muatan pada $C_1$ adalah $Q_1 = Q_{\\text{total}} = 36\\,\\mu\\text{C}$.<br>5. Hitung beda potensial pada kapasitor $C_1$:<br>$$V_1 = \\frac{Q_1}{C_1} = \\frac{36\\,\\mu\\text{C}}{3\\,\\mu\\text{F}} = 12\\text{ Volt}$$<br>6. Jadi beda potensial pada $C_1$ adalah $12\\text{ Volt}$ (pilihan C).",
      pitfalls: "Membagi tegangan sama rata (misal masing-masing 9 Volt) tanpa memperhitungkan perbandingan invers kapasitas pada hubungan seri ($V_1 : V_p = C_p : C_1 = 6 : 3 = 2 : 1$)."
    }
  },
  {
    id: "fis-lis-statis-keping-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Gaya Tarik Elektrostatik Antarkeping Kapasitor",
    difficulty: "sedang",
    statement: "Suatu kapasitor keping sejajar memiliki muatan keping sebesar $+Q$ dan $-Q$. Di dalam ruang antarkeping terdapat medan listrik homogen total sebesar $E$. Besar gaya tarik elektrostatik yang dialami oleh salah satu keping akibat medan listrik yang dihasilkan oleh keping lainnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2} Q E$",
      "$Q E$",
      "$2 Q E$",
      "$\\frac{1}{4} Q E$",
      "$\\frac{Q}{E}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Medan listrik total $E$ di antara dua keping kapasitor merupakan resultan superposisi dari medan yang dihasilkan oleh keping positif ($E_1$) dan keping negatif ($E_2$), di mana $E = E_1 + E_2 = 2E_1 \\implies E_1 = \\frac{1}{2}E$. Gaya pada salah satu keping diakibatkan oleh medan keping lainnya saja, bukan oleh medan total.",
      steps: "1. Kuat medan listrik yang dihasilkan oleh satu keping bermuatan saja (pelat tak hingga) adalah:<br>$$E_{\\text{satu keping}} = \\frac{\\sigma}{2\\varepsilon_0} = \\frac{1}{2} E$$<br>2. Muatan pada keping yang ditarik bermagnitudo $Q$.<br>3. Gaya tarik elektrostatik antarkeping adalah:<br>$$F = Q \\times E_{\\text{satu keping}} = Q \\times \\left(\\frac{1}{2} E\\right) = \\frac{1}{2} Q E$$<br>4. Pendekatan alternatif melalui diferensial energi medan:<br>$$F = -\\frac{dW}{dd} = \\frac{d}{dd}\\left(\\frac{Q^2 d}{2 \\varepsilon_0 A}\\right) = \\frac{Q^2}{2 \\varepsilon_0 A} = \\frac{1}{2} Q \\left(\\frac{Q}{\\varepsilon_0 A}\\right) = \\frac{1}{2} Q E$$<br>5. Jadi gaya tarik elektrostatik adalah $\\frac{1}{2} Q E$ (pilihan A).",
      pitfalls: "Kesalahan paling umum adalah langsung menggunakan rumus gaya partikel $F = Q E$, yang melupakan bahwa suatu keping tidak dapat memberikan gaya elektrostatik pada dirinya sendiri."
    }
  },
  {
    id: "fis-lis-statis-keping-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Kapasitor dengan Dielektrik Sebagian Tersusun Seri",
    difficulty: "sedang",
    statement: "Sebuah kapasitor keping sejajar memiliki luas keping $A$ dan jarak pemisah $d$. Ke dalam celah kapasitor disisipkan lempeng dielektrik dengan konstanta relatif $K = 4$ dan ketebalan $\\frac{1}{2}d$, sedangkan sisa ruang setebal $\\frac{1}{2}d$ dibiarkan berisi udara ($K = 1$). Jika kapasitas kapasitor mula-mula saat berisi udara penuh adalah $C_0$, kapasitas kapasitor setelah disisipi dielektrik tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}25 C_0$",
      "$1{,}60 C_0$",
      "$2{,}00 C_0$",
      "$2{,}50 C_0$",
      "$4{,}00 C_0$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kapasitor yang diisi sebagian dielektrik secara paralel terhadap permukaan keping dapat dimodelkan sebagai dua buah kapasitor yang tersusun secara seri dengan ketebalan celah masing-masing:<br>$$\\frac{1}{C_{\\text{eff}}} = \\frac{1}{C_1} + \\frac{1}{C_2}$$",
      steps: "1. Kapasitas awal udara penuh ($d$): $C_0 = \\frac{\\varepsilon_0 A}{d}$.<br>2. Lapisan pertama (dielektrik $K = 4$, tebal $d_1 = \\frac{1}{2}d$):<br>$$C_1 = \\frac{K \\varepsilon_0 A}{d/2} = \\frac{4 \\varepsilon_0 A}{d/2} = 8 \\left(\\frac{\\varepsilon_0 A}{d}\\right) = 8 C_0$$<br>3. Lapisan kedua (udara $K = 1$, tebal $d_2 = \\frac{1}{2}d$):<br>$$C_2 = \\frac{\\varepsilon_0 A}{d/2} = 2 \\left(\\frac{\\varepsilon_0 A}{d}\\right) = 2 C_0$$<br>4. Hitung kapasitas pengganti seri keduanya:<br>$$\\frac{1}{C_{\\text{eff}}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{8C_0} + \\frac{1}{2C_0} = \\frac{1 + 4}{8C_0} = \\frac{5}{8C_0}$$<br>$$C_{\\text{eff}} = \\frac{8}{5} C_0 = 1{,}60 C_0$$<br>5. Jadi kapasitas efektifnya menjadi $1{,}60 C_0$ (pilihan B).",
      pitfalls: "Menjumlahkan kapasitas secara langsung seperti rangkaian paralel ($8C_0 + 2C_0 = 10C_0$), atau merata-ratakan konstanta dielektrik secara linier tanpa mempertimbangkan hubungan kebalikan jarak."
    }
  },
  {
    id: "fis-lis-statis-keping-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-keping",
    category: "Energi yang Hilang pada Penggabungan Dua Kapasitor",
    difficulty: "sedang",
    statement: "Kapasitor $C_1 = 4\\,\\mu\\text{F}$ dimuati hingga beda potensialnya mencapai $100\\text{ Volt}$, kemudian dilepas dari sumber tegangan. Kapasitor tersebut kemudian dihubungkan secara paralel dengan kapasitor kedua $C_2 = 6\\,\\mu\\text{F}$ yang mula-mula tidak bermuatan. Energi elektrostatik yang hilang terdisipasi sebagai panas selama proses redistribusi muatan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}004\\text{ Joule}$",
      "$0{,}008\\text{ Joule}$",
      "$0{,}012\\text{ Joule}$",
      "$0{,}016\\text{ Joule}$",
      "$0{,}020\\text{ Joule}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada penggabungan dua kapasitor, muatan total kekal ($Q_{\\text{awal}} = Q_{\\text{akhir}}$), namun sebagian energi elektrostatik selalu terdisipasi menjadi panas pada kawat penghubung dan radiasi elektromagnetik:<br>$$\\Delta W = W_{\\text{awal}} - W_{\\text{akhir}}$$ ",
      steps: "1. Muatan awal pada $C_1$:<br>$$Q = C_1 V_1 = 4\\,\\mu\\text{F} \\times 100\\text{ V} = 400\\,\\mu\\text{C}$$<br>2. Energi elektrostatik awal sistem:<br>$$W_{\\text{awal}} = \\frac{1}{2} C_1 V_1^2 = \\frac{1}{2} \\times (4 \\times 10^{-6}\\text{ F}) \\times (100\\text{ V})^2 = 0{,}02\\text{ Joule} = 20\\text{ mJ}$$<br>3. Kapasitas gabungan paralel: $C_p = C_1 + C_2 = 4 + 6 = 10\\,\\mu\\text{F}$.<br>Potensial bersama akhir:<br>$$V_f = \\frac{Q}{C_p} = \\frac{400\\,\\mu\\text{C}}{10\\,\\mu\\text{F}} = 40\\text{ Volt}$$<br>4. Energi elektrostatik akhir sistem:<br>$$W_{\\text{akhir}} = \\frac{1}{2} C_p V_f^2 = \\frac{1}{2} \\times (10 \\times 10^{-6}\\text{ F}) \\times (40\\text{ V})^2 = 5 \\times 10^{-6} \\times 1.600 = 0{,}008\\text{ Joule} = 8\\text{ mJ}$$<br>5. Hitung energi yang hilang:<br>$$\\Delta W = W_{\\text{awal}} - W_{\\text{akhir}} = 0{,}020\\text{ J} - 0{,}008\\text{ J} = 0{,}012\\text{ Joule}$$<br>6. Jadi energi yang terdisipasi adalah $0{,}012\\text{ Joule}$ (pilihan C).",
      pitfalls: "Siswa sering menganggap bahwa karena muatan kekal, energinya juga harus kekal ($\Delta W = 0$). Faktanya arus transien selama perpindahan muatan pasti mendisipasikan energi resistif $\\int I^2 R\\, dt$ yang bernilai tepat sama dengan selisih energi elektrostatik."
    }
  }
];
