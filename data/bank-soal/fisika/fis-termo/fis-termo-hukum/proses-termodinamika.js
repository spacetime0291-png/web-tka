/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Termodinamika (fis-termo-hukum)
 * Sub-Bab: Proses Termodinamika (fis-termo-hukum-proses)
 * Slug: proses-termodinamika
 * Indikator: Karakteristik proses isobarik, isotermal, isokhorik, dan adiabatik pada diagram P-V.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-hukum-proses";
  const subTopicSlug = "proses-termodinamika";
  const questions = [
  {
    "id": "fis-termo-hukum-proses-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Usaha Gas pada Proses Isobarik",
    "difficulty": "mudah",
    "statement": "Sejumlah gas ideal berada di dalam silinder berpenghisap pada tekanan konstan $2{,}0 \\times 10^5\\text{ Pa}$. Gas tersebut menyerap kalor sehingga memuai dari volume awal $1{,}5\\text{ m}^3$ menjadi volume akhir $3{,}5\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas selama proses pemuaian isobarik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$100\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$300\\text{ kJ}$",
      "$400\\text{ kJ}$",
      "$700\\text{ kJ}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Usaha luar ($W$) yang dilakukan gas pada proses tekanan konstan (isobarik) dihitung dengan mengalikan tekanan dengan perubahan volumenya:<br>$$W = P \\times \\Delta V = P \\times (V_2 - V_1)$$",
      "steps": "1. Identifikasi data:<br>$P = 2{,}0 \\times 10^5\\text{ Pa}$<br>$V_1 = 1{,}5\\text{ m}^3$<br>$V_2 = 3{,}5\\text{ m}^3$<br>2. Hitung perubahan volume $\\Delta V$:<br>$$\\Delta V = 3{,}5 - 1{,}5 = 2{,}0\\text{ m}^3$$<br>3. Hitung usaha luar $W$:<br>$$W = (2{,}0 \\times 10^5\\text{ Pa}) \\times 2{,}0\\text{ m}^3 = 4{,}0 \\times 10^5\\text{ Joule} = 400\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Pastikan menggunakan selisih volume $\\Delta V = 3{,}5 - 1{,}5 = 2{,}0\\text{ m}^3$, bukan volume akhir $3{,}5\\text{ m}^3$ langsung (yang akan menghasilkan $700\\text{ kJ}$, opsi E)."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Usaha luar ($W$) yang dilakukan gas pada proses tekanan konstan (isobarik) dihitung dengan mengalikan tekanan dengan perubahan volumenya: $$W = P \\times \\Delta V = P \\times (V_2 - V_1)$$."
  },
  {
    "id": "fis-termo-hukum-proses-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Karakteristik Usaha Proses Isokhorik",
    "difficulty": "mudah",
    "statement": "Sebuah wadah tertutup terbuat dari logam baja kaku berisi gas ideal dipanaskan di atas nyala api sehingga tekanannya melonjak dari $1{,}0\\text{ atm}$ menjadi $3{,}0\\text{ atm}$. Besar usaha luar ($W$) yang dilakukan oleh gas selama proses pemanasan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ Joule}$",
      "$1{,}0 \\times 10^5\\text{ Joule}$",
      "$2{,}0 \\times 10^5\\text{ Joule}$",
      "$3{,}0 \\times 10^5\\text{ Joule}$",
      "$4{,}5 \\times 10^5\\text{ Joule}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Usaha termodinamika dinyatakan sebagai integral tekanan terhadap perubahan volume: $W = \\int P\\,dV$.<br>Pada wadah kaku, volume gas tidak dapat memuai maupun menyusut ($V = \\text{konstan}$ atau $\\Delta V = 0$). Karena tidak terjadi pergeseran batas sistem, usaha luar yang dilakukan oleh gas pada proses isokhorik bernilai tepat nol ($W = 0$).",
      "steps": "1. Analisis kondisi wadah: wadah baja kaku $\\implies$ volume tetap (proses isokhorik/isovolumetrik).<br>2. Perubahan volume $\\Delta V = 0$.<br>3. Usaha luar: $W = P \\times \\Delta V = 0\\text{ Joule}$.<br>4. Seluruh kalor yang diserap semata-mata digunakan untuk menaikkan energi dalam (suhu) gas.<br>5. Jawaban yang tepat adalah pilihan A.",
      "pitfalls": "Walaupun tekanan gas melonjak tinggi, selama batas wadah tidak bergeser (tidak ada ekspansi volume), gas TIDAK melakukan usaha mekanik luar ($W = 0$)."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Usaha termodinamika dinyatakan sebagai integral tekanan terhadap perubahan volume: $W = \\int P\\,dV$. Pada wadah kaku, volume gas tidak dapat memuai maupun menyusut ($V = \\text{konstan}$ atau $\\Delta V = 0$). Karena tidak terjadi pergeseran batas sistem, usaha luar yang dilakukan oleh gas pada proses isokhorik bernilai tepat nol ($W = 0$)."
  },
  {
    "id": "fis-termo-hukum-proses-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Definisi Proses Adiabatik",
    "difficulty": "mudah",
    "statement": "Suatu proses termodinamika di mana gas memuai atau dimampatkan secara sangat cepat di dalam wadah yang terisolasi sempurna sehingga tidak ada aliran kalor yang masuk ke dalam sistem maupun keluar menuju lingkungan ($Q = 0$) dinamakan proses ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Isotermal",
      "Isobarik",
      "Isokhorik",
      "Adiabatik",
      "Polisiuklik"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Empat proses termodinamika dasar:<br>1. Isobarik: tekanan konstan ($\\Delta P = 0$).<br>2. Isotermal: suhu konstan ($\\Delta T = 0$, $\\Delta U = 0$).<br>3. Isokhorik: volume konstan ($\\Delta V = 0$, $W = 0$).<br>4. Adiabatik: tidak ada pertukaran kalor antara sistem dan lingkungan ($Q = 0$).",
      "steps": "1. Identifikasi kata kunci: tidak ada aliran kalor masuk atau keluar $\\implies Q = 0$.<br>2. Berdasarkan definisi termodinamika, kondisi $Q = 0$ adalah proses adiabatik.<br>3. Berdasarkan Hukum I Termodinamika ($\\Delta U = Q - W$), pada proses adiabatik berlaku $\\Delta U = -W$.<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan tertukar antara isotermal ($T$ konstan, kalor $Q$ tetap bisa mengalir) dengan adiabatik ($Q = 0$, suhu $T$ justru berubah drastis saat gas berekspansi atau dikompresi)."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Empat proses termodinamika dasar: 1. Isobarik: tekanan konstan ($\\Delta P = 0$). 2. Isotermal: suhu konstan ($\\Delta T = 0$, $\\Delta U = 0$). 3. Isokhorik: volume konstan ($\\Delta V = 0$, $W = 0$). 4. Adiabatik: tidak ada pertukaran kalor antara sistem dan lingkungan ($Q = 0$)."
  },
  {
    "id": "fis-termo-hukum-proses-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Usaha pada Ekspansi Isotermal",
    "difficulty": "mudah",
    "statement": "Sebanyak $1\\text{ mol}$ gas ideal berekspansi secara perlahan pada suhu tetap $T = 300\\text{ K}$ (proses isotermal) sehingga volumenya bertambah menjadi dua kali volume awal ($V_2 = 2\\,V_1$). Jika tetapan gas universal $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$ dan diketahui nilai $\\ln 2 \\approx 0{,}693$, besar usaha luar yang dilakukan oleh gas tersebut adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$864{,}5\\text{ Joule}$",
      "$1247{,}1\\text{ Joule}$",
      "$1728{,}5\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$",
      "$3457{,}0\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Usaha luar pada proses isotermal gas ideal dihitung dari integral persamaan keadaan $P = \\frac{nRT}{V}$:<br>$$W = \\int_{V_1}^{V_2} P\\,dV = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$",
      "steps": "1. Data: $n = 1\\text{ mol}$, $T = 300\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Rasio ekspansi volume: $\\frac{V_2}{V_1} = 2 \\implies \\ln\\left(\\frac{V_2}{V_1}\\right) = \\ln 2 \\approx 0{,}693$.<br>3. Hitung usaha luar $W$:<br>$$W = 1 \\times 8{,}314 \\times 300 \\times 0{,}693 = 2494{,}2 \\times 0{,}693 \\approx 1728{,}5\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Lupa mengalikan dengan $\\ln 2 = 0{,}693$ akan menghasilkan nilai $n R T = 2494{,}2\\text{ Joule}$ (opsi D). Pada proses isotermal, faktor logaritma natural rasio volume wajib disertakan."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Usaha luar pada proses isotermal gas ideal dihitung dari integral persamaan keadaan $P = \\frac{nRT}{V}$: $$W = \\int_{V_1}^{V_2} P\\,dV = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$."
  },
  {
    "id": "fis-termo-hukum-proses-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Interpretasi Geometris Usaha pada Diagram P-V",
    "difficulty": "mudah",
    "statement": "Pada diagram tekanan terhadap volume ($P-V$), sebuah proses pemuaian gas ideal berlangsung secara isobarik pada tekanan konstan $4{,}0 \\times 10^5\\text{ Pa}$ dari titik A ($V_A = 1{,}0\\text{ m}^3$) menuju titik B ($V_B = 4{,}0\\text{ m}^3$). Berdasarkan konsep geometris diagram $P-V$, besar usaha luar yang dilakukan oleh gas setara dengan luas daerah di bawah kurva grafik, yaitu sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4{,}0 \\times 10^5\\text{ Joule}$",
      "$8{,}0 \\times 10^5\\text{ Joule}$",
      "$1{,}2 \\times 10^6\\text{ Joule}$",
      "$1{,}6 \\times 10^6\\text{ Joule}$",
      "$2{,}0 \\times 10^6\\text{ Joule}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Secara fisis dan grafis pada diagram $P-V$, usaha yang dilakukan gas selama proses termodinamika sama dengan luas area di bawah kurva lintasan proses yang dibatasi oleh sumbu volume:<br>$$W = \\text{Luas daerah di bawah kurva } P-V$$<br>Untuk proses isobarik, bentuk bangun datarnya adalah persegi panjang dengan tinggi $P$ dan alas $\\Delta V = V_B - V_A$.",
      "steps": "1. Tentukan alas persegi panjang: $\\Delta V = V_B - V_A = 4{,}0\\text{ m}^3 - 1{,}0\\text{ m}^3 = 3{,}0\\text{ m}^3$.<br>2. Tentukan tinggi persegi panjang: $P = 4{,}0 \\times 10^5\\text{ Pa}$.<br>3. Hitung luas persegi panjang (usaha $W$):<br>$$W = \\text{panjang} \\times \\text{lebar} = (4{,}0 \\times 10^5\\text{ Pa}) \\times 3{,}0\\text{ m}^3 = 12 \\times 10^5\\text{ Joule} = 1{,}2 \\times 10^6\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jangan menghitung luas menggunakan $V_B$ penuh ($4 \\times 10^5 \\times 4 = 1{,}6 \\times 10^6\\text{ J}$, opsi D). Panjang alas hanya dihitung dari selisih $V_B - V_A = 3{,}0\\text{ m}^3$."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Secara fisis dan grafis pada diagram $P-V$, usaha yang dilakukan gas selama proses termodinamika sama dengan luas area di bawah kurva lintasan proses yang dibatasi oleh sumbu volume: $$W = \\text{Luas daerah di bawah kurva } P-V$$ Untuk proses isobarik, bentuk bangun datarnya adalah persegi panjang dengan tinggi $P$ dan alas $\\Delta V = V_B - V_A$."
  },
  {
    "id": "fis-termo-hukum-proses-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Usaha Total Siklus Tertutup Segitiga P-V",
    "difficulty": "sedang",
    "statement": "Suatu siklus termodinamika tertutup yang dialami oleh gas ideal digambarkan pada diagram $P-V$ dengan tiga lintasan berturut-turut searah jarum jam:<br>- Keadaan 1 ($V_1 = 2{,}0\\text{ m}^3$, $P_1 = 6{,}0 \\times 10^5\\text{ Pa}$) mengalami ekspansi isobarik menuju keadaan 2 ($V_2 = 5{,}0\\text{ m}^3$, $P_2 = 6{,}0 \\times 10^5\\text{ Pa}$)<br>- Keadaan 2 mengalami penurunan tekanan isokhorik menuju keadaan 3 ($V_3 = 5{,}0\\text{ m}^3$, $P_3 = 2{,}0 \\times 10^5\\text{ Pa}$)<br>- Keadaan 3 kembali ke keadaan 1 melalui lintasan garis lurus miring pada diagram $P-V$.<br>Besar usaha total neto yang dihasilkan oleh gas dalam satu siklus lengkap tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ kJ}$",
      "$600\\text{ kJ}$",
      "$900\\text{ kJ}$",
      "$1200\\text{ kJ}$",
      "$1800\\text{ kJ}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Usaha netto ($W_{\\text{net}}$) pada siklus tertutup dalam diagram $P-V$ setara dengan luas area tertutup di dalam kurva siklus:<br>$$W_{\\text{siklus}} = \\text{Luas daerah tertutup}$$<br>Untuk siklus berbentuk segitiga: $W = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}$.<br>Karena lintasan siklus berputar searah jarum jam (clockwise), usaha total bernilai positif (sistem menghasilkan kerja luar).",
      "steps": "1. Tentukan panjang alas segitiga (perubahan volume):<br>$$\\text{alas} = V_2 - V_1 = 5{,}0\\text{ m}^3 - 2{,}0\\text{ m}^3 = 3{,}0\\text{ m}^3$$<br>2. Tentukan tinggi segitiga (selisih tekanan):<br>$$\\text{tinggi} = P_1 - P_3 = 6{,}0 \\times 10^5\\text{ Pa} - 2{,}0 \\times 10^5\\text{ Pa} = 4{,}0 \\times 10^5\\text{ Pa}$$<br>3. Hitung luas segitiga (usaha netto):<br>$$W_{\\text{siklus}} = \\frac{1}{2} \\times 3{,}0\\text{ m}^3 \\times (4{,}0 \\times 10^5\\text{ Pa}) = 6{,}0 \\times 10^5\\text{ Joule} = 600\\text{ kJ}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Lupa mengalikan dengan faktor $1/2$ (menghitung luas persegi panjang penuh) akan menghasilkan $1200\\text{ kJ}$ (opsi D). Bentuk kurva siklus adalah segitiga siku-siku sehingga luasnya setengah dari persegi panjang."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Usaha netto ($W_{\\text{net}}$) pada siklus tertutup dalam diagram $P-V$ setara dengan luas area tertutup di dalam kurva siklus: $$W_{\\text{siklus}} = \\text{Luas daerah tertutup}$$ Untuk siklus berbentuk segitiga: $W = \\frac{1}{2} \\times \\text{alas} \\times \\text{tinggi}$. Karena lintasan siklus berputar searah jarum jam (clockwise), usaha total bernilai positif (sistem menghasilkan kerja luar). **Tips:** Lupa mengalikan dengan faktor $1/2$ (menghitung luas persegi panjang penuh) akan menghasilkan $1200\\text{ kJ}$ ()."
  },
  {
    "id": "fis-termo-hukum-proses-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Hukum Poisson pada Kompresi Adiabatik",
    "difficulty": "sedang",
    "statement": "Sebuah sampel gas ideal monoatomik memiliki tetapan Laplace $\\gamma = 5/3$. Mula-mula gas tersebut menempati volume $V_1 = 8{,}0\\text{ liter}$ pada suhu mutlak $T_1 = 300\\text{ K}$. Gas tersebut kemudian dimampatkan secara adiabatik cepat hingga volumenya menyusut menjadi $V_2 = 1{,}0\\text{ liter}$. Suhu mutlak akhir gas setelah proses kompresi adiabatik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$600\\text{ K}$",
      "$800\\text{ K}$",
      "$1200\\text{ K}$",
      "$1600\\text{ K}$",
      "$2400\\text{ K}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada proses adiabatik kuasistatis gas ideal berlaku relasi Poisson antara suhu mutlak dan volume:<br>$$T_1 \\times V_1^{\\gamma - 1} = T_2 \\times V_2^{\\gamma - 1} \\implies T_2 = T_1 \\times \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$",
      "steps": "1. Hitung eksponen $\\gamma - 1$:<br>$$\\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$$<br>2. Tentukan rasio kompresi volume: $\\frac{V_1}{V_2} = \\frac{8{,}0}{1{,}0} = 8$.<br>3. Hitung suhu akhir $T_2$:<br>$$T_2 = 300\\text{ K} \\times (8)^{2/3} = 300 \\times (8^{1/3})^2 = 300 \\times (2)^2 = 300 \\times 4 = 1200\\text{ K}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jangan menggunakan eksponen $\\gamma = 5/3$ langsung pada suhu. Eksponen untuk hubungan $T-V$ adalah $\\gamma - 1 = 2/3$. Selain itu, pada kompresi adiabatik suhu gas selalu melonjak naik karena kerja kompresi lingkungan diubah sepenuhnya menjadi energi dalam gas."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada proses adiabatik kuasistatis gas ideal berlaku relasi Poisson antara suhu mutlak dan volume: $$T_1 \\times V_1^{\\gamma - 1} = T_2 \\times V_2^{\\gamma - 1} \\implies T_2 = T_1 \\times \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$."
  },
  {
    "id": "fis-termo-hukum-proses-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Usaha Luar pada Ekspansi Adiabatik",
    "difficulty": "sedang",
    "statement": "Sebanyak $2\\text{ mol}$ gas ideal monoatomik mengalami ekspansi adiabatik sehingga suhunya turun dari $T_1 = 600\\text{ K}$ menjadi $T_2 = 400\\text{ K}$. Jika tetapan gas universal adalah $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$, besar usaha luar ($W$) yang dilakukan oleh gas tersebut selama ekspansi adiabatik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1662{,}8\\text{ Joule}$",
      "$2494{,}2\\text{ Joule}$",
      "$3325{,}6\\text{ Joule}$",
      "$4988{,}4\\text{ Joule}$",
      "$7482{,}6\\text{ Joule}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum I Termodinamika, pada proses adiabatik tidak ada kalor yang mengalir ($Q = 0$):<br>$$\\Delta U = Q - W \\implies \\Delta U = -W \\implies W = -\\Delta U$$<br>Untuk gas monoatomik, perubahan energi dalam adalah $\\Delta U = \\frac{3}{2} n R (T_2 - T_1)$, sehingga usaha luar bernilai:<br>$$W = \\frac{3}{2} n R (T_1 - T_2)$$",
      "steps": "1. Identifikasi data: $n = 2\\text{ mol}$, $T_1 = 600\\text{ K}$, $T_2 = 400\\text{ K}$, $R = 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K})$.<br>2. Hitung selisih penurunan suhu: $\\Delta T_{\\text{turun}} = T_1 - T_2 = 600 - 400 = 200\\text{ K}$.<br>3. Hitung usaha luar $W$:<br>$$W = \\frac{3}{2} \\times 2\\text{ mol} \\times 8{,}314\\text{ J}/(\\text{mol}\\cdot\\text{K}) \\times 200\\text{ K}$$<br>$$W = 3 \\times 8{,}314 \\times 200 = 600 \\times 8{,}314 = 4988{,}4\\text{ Joule}$$<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Perhatikan tanda usaha: saat gas berekspansi (memuai), gas melakukan usaha positif ($W > 0$) dengan mengorbankan energi dalamnya sendiri sehingga suhu gas turun dari $600\\text{ K}$ ke $400\\text{ K}$."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Hukum I Termodinamika, pada proses adiabatik tidak ada kalor yang mengalir ($Q = 0$): $$\\Delta U = Q - W \\implies \\Delta U = -W \\implies W = -\\Delta U$$ Untuk gas monoatomik, perubahan energi dalam adalah $\\Delta U = \\frac{3}{2} n R (T_2 - T_1)$, sehingga usaha luar bernilai: $$W = \\frac{3}{2} n R (T_1 - T_2)$$."
  },
  {
    "id": "fis-termo-hukum-proses-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Analisis Kemiringan Kurva Adiabatik vs Isotermal",
    "difficulty": "sedang",
    "statement": "Pada diagram $P-V$, sebuah kurva isotermal ($P V = \\text{konstan}$) dan sebuah kurva adiabatik ($P V^\\gamma = \\text{konstan}$ dengan $\\gamma > 1$) saling berpotongan di suatu titik keadaan $(P_0, V_0)$. Rasio perbandingan nilai mutlak kemiringan (gradien $\\left|\\frac{dP}{dV}\\right|$) kurva adiabatik terhadap kurva isotermal pada titik potong tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{\\gamma}$",
      "$1$",
      "$\\sqrt{\\gamma}$",
      "$\\gamma$",
      "$\\gamma^2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Kemiringan kurva pada diagram $P-V$ dicari dengan turunan pertama $\\frac{dP}{dV}$:<br>1. Kurva isotermal ($P = C_1 V^{-1}$):<br>$$\\left(\\frac{dP}{dV}\\right)_{\\text{isotermal}} = -C_1 V^{-2} = -\\frac{P}{V}$$<br>2. Kurva adiabatik ($P = C_2 V^{-\\gamma}$):<br>$$\\left(\\frac{dP}{dV}\\right)_{\\text{adiabatik}} = -\\gamma C_2 V^{-\\gamma - 1} = -\\gamma \\frac{P}{V}$$<br>Rasio kemiringan kurva adiabatik terhadap kurva isotermal adalah $\\gamma$.",
      "steps": "1. Hitung nilai mutlak gradien kurva adiabatik di titik $(P_0, V_0)$: $\\left|\\frac{dP}{dV}\\right|_{\\text{ad}} = \\gamma \\frac{P_0}{V_0}$.<br>2. Hitung nilai mutlak gradien kurva isotermal di titik yang sama: $\\left|\\frac{dP}{dV}\\right|_{\\text{iso}} = \\frac{P_0}{V_0}$.<br>3. Bagi kedua nilai gradien:<br>$$\\frac{\\left|\\frac{dP}{dV}\\right|_{\\text{ad}}}{\\left|\\frac{dP}{dV}\\right|_{\\text{iso}}} = \\frac{\\gamma \\frac{P_0}{V_0}}{\\frac{P_0}{V_0}} = \\gamma$$<br>4. Jadi, kurva adiabatik selalu $\\gamma$ kali lebih curam dibandingkan kurva isotermal.<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Ingat bahwa $\\gamma = C_p/C_v > 1$. Oleh karena itu, kurva adiabatik selalu tampak lebih curam menukik ke bawah dibandingkan kurva isotermal pada diagram $P-V$."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Kemiringan kurva pada diagram $P-V$ dicari dengan turunan pertama $\\frac{dP}{dV}$: 1. Kurva isotermal ($P = C_1 V^{-1}$): $$\\left(\\frac{dP}{dV}\\right)_{\\text{isotermal}} = -C_1 V^{-2} = -\\frac{P}{V}$$ 2. Kurva adiabatik ($P = C_2 V^{-\\gamma}$): $$\\left(\\frac{dP}{dV}\\right)_{\\text{adiabatik}} = -\\gamma C_2 V^{-\\gamma - 1} = -\\gamma \\frac{P}{V}$$ Rasio kemiringan kurva adiabatik terhadap kurva isotermal adalah $\\gamma$. **Tips:** Ingat bahwa $\\gamma = C_p/C_v > 1$."
  },
  {
    "id": "fis-termo-hukum-proses-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-hukum",
    "subTopicId": "fis-termo-hukum-proses",
    "category": "Penerapan Hukum I Termodinamika pada Ekspansi Isobarik",
    "difficulty": "sedang",
    "statement": "Sebanyak $1{,}0\\text{ mol}$ gas ideal monoatomik berada di dalam silinder yang dilengkapi piston bebas. Gas dipanaskan pada tekanan tetap $P = 1{,}0 \\times 10^5\\text{ Pa}$ sehingga volumenya memuai dari volume awal $2{,}0 \\times 10^{-2}\\text{ m}^3$ menjadi volume akhir $4{,}0 \\times 10^{-2}\\text{ m}^3$. Kalor total ($Q$) yang diserap oleh gas selama proses pemuaian isobarik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2000\\text{ Joule}$",
      "$3000\\text{ Joule}$",
      "$4000\\text{ Joule}$",
      "$5000\\text{ Joule}$",
      "$6000\\text{ Joule}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum I Termodinamika: $Q = \\Delta U + W$.<br>- Usaha isobarik: $W = P \\times \\Delta V$.<br>- Perubahan energi dalam monoatomik: $\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} P \\times \\Delta V$.<br>- Kalor total yang diserap pada tekanan konstan: $Q = \\Delta U + W = \\frac{3}{2} P \\Delta V + P \\Delta V = \\frac{5}{2} P \\Delta V$.",
      "steps": "1. Hitung pertambahan volume gas:<br>$$\\Delta V = 4{,}0 \\times 10^{-2}\\text{ m}^3 - 2{,}0 \\times 10^{-2}\\text{ m}^3 = 2{,}0 \\times 10^{-2}\\text{ m}^3$$<br>2. Hitung usaha luar yang dilakukan gas ($W$):<br>$$W = P \\times \\Delta V = (1{,}0 \\times 10^5\\text{ Pa}) \\times (2{,}0 \\times 10^{-2}\\text{ m}^3) = 2000\\text{ Joule}$$<br>3. Hitung perubahan energi dalam gas ($\\Delta U$):<br>$$\\Delta U = \\frac{3}{2} \\times 2000\\text{ J} = 3000\\text{ Joule}$$<br>4. Hitung kalor yang diserap ($Q$):<br>$$Q = \\Delta U + W = 3000\\text{ J} + 2000\\text{ J} = 5000\\text{ Joule}$$<br>(Atau langsung $Q = \\frac{5}{2} P \\Delta V = \\frac{5}{2} \\times 2000 = 5000\\text{ J}$).<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jebakan parsial: $2000\\text{ J}$ (opsi A) adalah usaha luar saja ($W$), sedangkan $3000\\text{ J}$ (opsi B) adalah perubahan energi dalam saja ($\\Delta U$). Kalor total yang diserap adalah jumlah keduanya ($Q = 5000\\text{ J}$)."
    },
    "subTopicSlug": "proses-termodinamika",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Proses Termodinamika",
    "subTopic": "Proses Termodinamika",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan Hukum I Termodinamika: $Q = \\Delta U + W$. - Usaha isobarik: $W = P \\times \\Delta V$. - Perubahan energi dalam monoatomik: $\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} P \\times \\Delta V$. - Kalor total yang diserap pada tekanan konstan: $Q = \\Delta U + W = \\frac{3}{2} P \\Delta V + P \\Delta V = \\frac{5}{2} P \\Delta V$."
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
