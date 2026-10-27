/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Energi dan Daya Listrik (fis-lis-dc-daya)
 * Slug: energi-dan-daya-listrik
 * Indikator: Energi listrik disipasi (W = P * t) dan daya listrik pada resistor (P = I^2 * R = V^2 / R).
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-daya";
  const subTopicSlug = "energi-dan-daya-listrik";
  const questions = [
  {
    "id": "fis-lis-dc-daya-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Hubungan Daya, Tegangan, Arus, dan Hambatan",
    "difficulty": "mudah",
    "statement": "Pernyataan rumus berikut yang tepat untuk menyatakan daya listrik ($P$) yang diserap oleh suatu komponen berhambatan $R$ yang dialiri arus listrik $I$ pada beda potensial $V$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$P = V I = I^2 R = \\frac{V^2}{R}$",
      "$P = \\frac{V}{I} = I R^2 = \\frac{R}{V^2}$",
      "$P = V I^2 = \\frac{I}{R} = V^2 R$",
      "$P = \\frac{I}{V} = \\frac{R}{I^2} = \\frac{V}{R^2}$",
      "$P = V^2 I = I R = \\frac{V}{R}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Daya listrik ($P$) didefinisikan sebagai laju transfer energi per satuan waktu ($P = \\frac{W}{t}$). Berdasarkan Hukum Ohm $V = I R$, rumus daya dapat dituliskan dalam tiga bentuk ekuivalen:<br>$$P = V I = I^2 R = \\frac{V^2}{R}$$",
      "steps": "1. Dari definisi dasar kerja listrik: $W = V q = V I t$.<br>2. Bagi dengan waktu $t$ untuk mendapatkan daya: $P = \\frac{W}{t} = V I$.<br>3. Substitusikan $V = I R$ menghasilkan $P = (I R) I = I^2 R$.<br>4. Substitusikan $I = \\frac{V}{R}$ menghasilkan $P = V \\left(\\frac{V}{R}\\right) = \\frac{V^2}{R}$.<br>5. Jadi bentuk yang tepat adalah pilihan A.",
      "pitfalls": "Sering tertukar antara perkalian dan pembagian, misalnya keliru mengingat $V^2 R$ alih-alih $\\frac{V^2}{R}$."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Daya listrik ($P$) didefinisikan sebagai laju transfer energi per satuan waktu ($P = \\frac{W}{t}$). Berdasarkan Hukum Ohm $V = I R$, rumus daya dapat dituliskan dalam tiga bentuk ekuivalen: $$P = V I = I^2 R = \\frac{V^2}{R}$$. **Tips:** Sering tertukar antara perkalian dan pembagian, misalnya keliru mengingat $V^2 R$ alih-alih $\\frac{V^2}{R}$."
  },
  {
    "id": "fis-lis-dc-daya-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Perhitungan Energi Listrik dalam Satuan kWh",
    "difficulty": "mudah",
    "statement": "Sebuah setrika listrik berdaya $400\\text{ Watt}$ digunakan setiap hari selama $2{,}5\\text{ jam}$. Energi listrik yang dikonsumsi oleh setrika tersebut selama 30 hari pemakaian adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ kWh}$",
      "$20\\text{ kWh}$",
      "$30\\text{ kWh}$",
      "$40\\text{ kWh}$",
      "$60\\text{ kWh}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Energi listrik dalam satuan kilowatt-jam (kWh) dihitung dengan mengalikan daya listrik (dalam kilowatt, kW) dengan total waktu penggunaan (dalam jam, h):<br>$$W = P \\times t$$",
      "steps": "1. Hitung energi listrik harian yang digunakan setrika:<br>$$W_{\\text{hari}} = 400\\text{ W} \\times 2{,}5\\text{ jam} = 1.000\\text{ Wh} = 1\\text{ kWh}$$<br>2. Hitung total energi listrik selama 30 hari pemakaian:<br>$$W_{\\text{total}} = 1\\text{ kWh/hari} \\times 30\\text{ hari} = 30\\text{ kWh}$$<br>3. Jadi energi listrik yang dikonsumsi adalah $30\\text{ kWh}$ (pilihan C).",
      "pitfalls": "Lupa mengonversi watt-jam (Wh) ke kilowatt-jam (kWh) dengan membagi 1.000, atau lupa mengalikan dengan 30 hari."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Energi listrik dalam satuan kilowatt-jam (kWh) dihitung dengan mengalikan daya listrik (dalam kilowatt, kW) dengan total waktu penggunaan (dalam jam, h): $$W = P \\times t$$. **Tips:** Lupa mengonversi watt-jam (Wh) ke kilowatt-jam (kWh) dengan membagi 1.000, atau lupa mengalikan dengan 30 hari."
  },
  {
    "id": "fis-lis-dc-daya-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Energi Kalor Joule pada Pemanas Listrik",
    "difficulty": "mudah",
    "statement": "Sebuah pemanas air listrik berhambatan $R = 20\\,\\Omega$ dialiri arus listrik konstan sebesar $2\\text{ Ampere}$ selama $5\\text{ menit}$. Besar energi kalor yang dihasilkan oleh pemanas air tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$400\\text{ Joule}$",
      "$2.400\\text{ Joule}$",
      "$12.000\\text{ Joule}$",
      "$24.000\\text{ Joule}$",
      "$48.000\\text{ Joule}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum Joule, energi kalor listrik yang dilepaskan oleh suatu hambatan dirumuskan sebagai:<br>$$W = I^2 R t$$<br>dengan $t$ dinyatakan dalam satuan detik (SI).",
      "steps": "1. Konversikan waktu dari menit ke detik:<br>$$t = 5\\text{ menit} = 5 \\times 60\\text{ s} = 300\\text{ detik}$$<br>2. Masukkan nilai $I = 2\\text{ A}$ dan $R = 20\\,\\Omega$ ke dalam rumus Hukum Joule:<br>$$W = (2\\text{ A})^2 \\times 20\\,\\Omega \\times 300\\text{ s} = 4 \\times 20 \\times 300 = 80 \\times 300 = 24.000\\text{ Joule}$$<br>3. Jadi energi kalor yang dihasilkan adalah $24.000\\text{ Joule}$ (pilihan D).",
      "pitfalls": "Lupa mengonversi waktu 5 menit ke detik ($300\\text{ s}$) dan langsung mengalikan dengan 5 sehingga memperoleh $400\\text{ J}$."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum Joule, energi kalor listrik yang dilepaskan oleh suatu hambatan dirumuskan sebagai: $$W = I^2 R t$$ dengan $t$ dinyatakan dalam satuan detik (SI). **Tips:** Lupa mengonversi waktu 5 menit ke detik ($300\\text{ s}$) dan langsung mengalikan dengan 5 sehingga memperoleh $400\\text{ J}$."
  },
  {
    "id": "fis-lis-dc-daya-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Perbandingan Daya Lampu Seri dan Paralel",
    "difficulty": "mudah",
    "statement": "Dua buah lampu pijar identik masing-masing memiliki hambatan $R$. Jika kedua lampu tersebut dihubungkan ke sumber tegangan konstan $V$, perbandingan daya total yang diserap saat kedua lampu dirangkai secara seri ($P_s$) terhadap daya total saat dirangkai secara paralel ($P_p$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 4$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Daya total dari sumber tegangan konstan $V$ berbanding terbalik dengan hambatan ekuivalen rangkaian ($P = \\frac{V^2}{R_{\\text{eq}}}$).",
      "steps": "1. Hambatan ekuivalen saat dirangkai seri:<br>$$R_s = R + R = 2R \\implies P_s = \\frac{V^2}{2R}$$<br>2. Hambatan ekuivalen saat dirangkai paralel:<br>$$R_p = \\frac{R}{2} \\implies P_p = \\frac{V^2}{R/2} = \\frac{2V^2}{R}$$<br>3. Bandingkan daya total kedua rangkaian:<br>$$\\frac{P_s}{P_p} = \\frac{\\frac{V^2}{2R}}{\\frac{2V^2}{R}} = \\frac{1}{4}$$<br>4. Jadi perbandingannya adalah $1 : 4$ (pilihan A).",
      "pitfalls": "Siswa sering mengira rasio dayanya $1:2$ karena melibatkan dua lampu, melupakan bahwa pada tegangan tetap, susunan paralel menurunkan hambatan sekaligus melipatgandakan arus."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Daya total dari sumber tegangan konstan $V$ berbanding terbalik dengan hambatan ekuivalen rangkaian ($P = \\frac{V^2}{R_{\\text{eq}}}$)."
  },
  {
    "id": "fis-lis-dc-daya-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Kuat Arus Maksimum Berdasarkan Nilai Sekring",
    "difficulty": "mudah",
    "statement": "Sebuah rumah memasang sekring pengaman otomatis dengan kapasitas arus $6\\text{ Ampere}$ pada tegangan jala-jala $220\\text{ Volt}$. Jumlah lampu $20\\text{ Watt} / 220\\text{ Volt}$ maksimum yang dapat dinyalakan secara bersamaan tanpa menyebabkan sekring putus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$33\\text{ lampu}$",
      "$44\\text{ lampu}$",
      "$55\\text{ lampu}$",
      "$66\\text{ lampu}$",
      "$72\\text{ lampu}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Daya total maksimum yang dapat ditanggung oleh instalasi rumah ditentukan oleh kapasitas arus pembatas (sekring) dan tegangannya: $P_{\\text{maks}} = V \\times I_{\\text{maks}}$. Jumlah peralatan maksimum adalah $N = \\frac{P_{\\text{maks}}}{P_{\\text{alat}}}$.",
      "steps": "1. Hitung daya listrik maksimum yang diizinkan sekring:<br>$$P_{\\text{maks}} = V \\times I_{\\text{maks}} = 220\\text{ V} \\times 6\\text{ A} = 1.320\\text{ Watt}$$<br>2. Setiap lampu mengonsumsi daya $P_{\\text{lampu}} = 20\\text{ Watt}$.<br>3. Hitung jumlah lampu maksimum yang dapat dipasang paralel:<br>$$N = \\frac{P_{\\text{maks}}}{P_{\\text{lampu}}} = \\frac{1.320\\text{ W}}{20\\text{ W}} = 66\\text{ lampu}$$<br>4. Jadi jumlah lampu maksimum adalah $66\\text{ lampu}$ (pilihan D).",
      "pitfalls": "Kesalahan membagi $220 / 6$ alih-alih mengalikan $V \\times I$ untuk memperoleh kapasitas daya total."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Daya total maksimum yang dapat ditanggung oleh instalasi rumah ditentukan oleh kapasitas arus pembatas (sekring) dan tegangannya: $P_{\\text{maks}} = V \\times I_{\\text{maks}}$. Jumlah peralatan maksimum adalah $N = \\frac{P_{\\text{maks}}}{P_{\\text{alat}}}$. **Tips:** Kesalahan membagi $220 / 6$ alih-alih mengalikan $V \\times I$ untuk memperoleh kapasitas daya total."
  },
  {
    "id": "fis-lis-dc-daya-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Efisiensi Pemanas Listrik dan Kalorimeter",
    "difficulty": "sedang",
    "statement": "Sebuah ketel pemanas listrik berdaya $P = 500\\text{ Watt}$ digunakan untuk memanaskan $1\\text{ kg}$ air dari suhu $20^\\circ\\text{C}$ hingga mencapai titik didih $100^\\circ\\text{C}$. Kalor jenis air adalah $c = 4.200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$. Jika proses pemanasan tersebut membutuhkan waktu selama $14\\text{ menit}$, efisiensi termal dari ketel listrik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\%$",
      "$70\\%$",
      "$75\\%$",
      "$80\\%$",
      "$85\\%$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Efisiensi pemanas listrik ($\\eta$) adalah perbandingan antara energi kalor yang diserap oleh air ($Q = m c \\Delta T$) terhadap total energi listrik yang dipasok ($W = P t$):<br>$$\\eta = \\frac{m c \\Delta T}{P t} \\times 100\\%$$",
      "steps": "1. Hitung kalor yang dibutuhkan air:<br>$$Q = m c \\Delta T = 1\\text{ kg} \\times 4.200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}) \\times (100 - 20)^\\circ\\text{C} = 4.200 \\times 80 = 336.000\\text{ Joule}$$<br>2. Konversikan waktu pemanasan ke detik:<br>$$t = 14\\text{ menit} = 14 \\times 60\\text{ s} = 840\\text{ detik}$$<br>3. Hitung energi listrik yang dikonsumsi ketel:<br>$$W = P \\times t = 500\\text{ W} \\times 840\\text{ s} = 420.000\\text{ Joule}$$<br>4. Hitung efisiensi termal:<br>$$\\eta = \\frac{Q}{W} \\times 100\\% = \\frac{336.000\\text{ J}}{420.000\\text{ J}} \\times 100\\% = \\frac{4}{5} \\times 100\\% = 80\\%$$<br>5. Jadi efisiensi ketel pemanas adalah $80\\%$ (pilihan D).",
      "pitfalls": "Lupa mengubah satuan waktu 14 menit ke satuan detik ($840\\text{ s}$) saat menghitung energi listrik ($W = P t$)."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Efisiensi pemanas listrik ($\\eta$) adalah perbandingan antara energi kalor yang diserap oleh air ($Q = m c \\Delta T$) terhadap total energi listrik yang dipasok ($W = P t$): $$\\eta = \\frac{m c \\Delta T}{P t} \\times 100\\%$$. **Tips:** Lupa mengubah satuan waktu 14 menit ke satuan detik ($840\\text{ s}$) saat menghitung energi listrik ($W = P t$)."
  },
  {
    "id": "fis-lis-dc-daya-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Analisis Kecerahan Lampu pada Rangkaian Kombinasi",
    "difficulty": "sedang",
    "statement": "Tiga buah lampu pijar identik $L_1$, $L_2$, dan $L_3$ masing-masing berhambatan $R$ dirangkai sebagai berikut: lampu $L_2$ dan $L_3$ dirangkai secara paralel, kemudian kombinasi paralel tersebut dirangkai secara seri dengan lampu $L_1$. Rangkaian dihubungkan ke sumber tegangan ideal $V$. Perbandingan daya listrik yang diserap oleh ketiga lampu ($P_1 : P_2 : P_3$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 1 : 1$",
      "$2 : 1 : 1$",
      "$4 : 1 : 1$",
      "$4 : 2 : 2$",
      "$1 : 2 : 2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Daya disipasi lampu adalah $P = I^2 R$. Pada susunan kombinasi, arus total cabang utama melewati lampu seri ($L_1$), sedangkan pada percabangan paralel arus terbagi dua sama besar ke lampu identik $L_2$ dan $L_3$.",
      "steps": "1. Misalkan arus total pada kawat utama adalah $I$. Maka arus yang melintasi lampu $L_1$ adalah:<br>$$I_1 = I$$<br>2. Karena $L_2$ dan $L_3$ tersusun paralel dan memiliki hambatan yang identik ($R$), arus terbagi sama rata pada kedua cabang:<br>$$I_2 = I_3 = \\frac{1}{2}I$$<br>3. Hitung daya pada masing-masing lampu:<br>$$P_1 = I_1^2 R = I^2 R$$<br>$$P_2 = I_2^2 R = \\left(\\frac{1}{2}I\\right)^2 R = \\frac{1}{4} I^2 R$$<br>$$P_3 = I_3^2 R = \\left(\\frac{1}{2}I\\right)^2 R = \\frac{1}{4} I^2 R$$<br>4. Bandingkan daya ketiga lampu:<br>$$P_1 : P_2 : P_3 = 1 : \\frac{1}{4} : \\frac{1}{4} = 4 : 1 : 1$$<br>5. Jadi perbandingan dayanya adalah $4 : 1 : 1$ (pilihan C).",
      "pitfalls": "Siswa sering mengira rasio dayanya $2 : 1 : 1$ karena rasio arusnya $2 : 1$, melupakan bahwa daya berbanding lurus dengan kuadrat arus ($I^2$)."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Daya disipasi lampu adalah $P = I^2 R$. Pada susunan kombinasi, arus total cabang utama melewati lampu seri ($L_1$), sedangkan pada percabangan paralel arus terbagi dua sama besar ke lampu identik $L_2$ dan $L_3$."
  },
  {
    "id": "fis-lis-dc-daya-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Perhitungan Biaya Pemakaian Listrik Rumah Tangga",
    "difficulty": "sedang",
    "statement": "Sebuah rumah tangga menggunakan peralatan listrik berikut setiap harinya:<br>- 5 buah lampu LED masing-masing berdaya $20\\text{ W}$ menyala selama $10\\text{ jam/hari}$<br>- 1 buah lemari es berdaya $100\\text{ W}$ menyala selama $24\\text{ jam/hari}$<br>- 1 buah televisi berdaya $80\\text{ W}$ menyala selama $5\\text{ jam/hari}$<br>- 1 buah pompa air berdaya $200\\text{ W}$ menyala selama $3\\text{ jam/hari}$<br>Jika tarif energi listrik adalah $\\text{Rp}1.500\\text{ per kWh}$, biaya listrik yang harus dibayar selama satu bulan ($30\\text{ hari}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\text{Rp}165.000$",
      "$\\text{Rp}184.000$",
      "$\\text{Rp}198.000$",
      "$\\text{Rp}212.000$",
      "$\\text{Rp}240.000$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Biaya listrik bulanan dihitung dari total konsumsi energi per hari dikalikan 30 hari dan dikalikan tarif per kWh:<br>$$\\text{Biaya} = \\Sigma(P \\times t) \\times 30 \\times \\text{Tarif}$$",
      "steps": "1. Hitung konsumsi energi listrik per hari untuk masing-masing beban:<br>- Lampu: $5 \\times 20\\text{ W} \\times 10\\text{ h} = 1.000\\text{ Wh} = 1{,}0\\text{ kWh}$<br>- Lemari es: $1 \\times 100\\text{ W} \\times 24\\text{ h} = 2.400\\text{ Wh} = 2{,}4\\text{ kWh}$<br>- Televisi: $1 \\times 80\\text{ W} \\times 5\\text{ h} = 400\\text{ Wh} = 0{,}4\\text{ kWh}$<br>- Pompa air: $1 \\times 200\\text{ W} \\times 3\\text{ h} = 600\\text{ Wh} = 0{,}6\\text{ kWh}$<br>2. Total energi harian:<br>$$W_{\\text{hari}} = 1{,}0 + 2{,}4 + 0{,}4 + 0{,}6 = 4{,}4\\text{ kWh/hari}$$<br>3. Total energi selama 30 hari:<br>$$W_{\\text{bulan}} = 4{,}4\\text{ kWh/hari} \\times 30\\text{ hari} = 132\\text{ kWh}$$<br>4. Hitung total rekening listrik:<br>$$\\text{Biaya} = 132\\text{ kWh} \\times \\text{Rp}1.500/\\text{kWh} = \\text{Rp}198.000$$<br>5. Jadi biaya listrik bulanan adalah $\\text{Rp}198.000$ (pilihan C).",
      "pitfalls": "Lupa mengalikan jumlah unit lampu ($5 \\times 20\\text{ W}$) atau kesalahan perkalian aritmetika biaya."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Biaya listrik bulanan dihitung dari total konsumsi energi per hari dikalikan 30 hari dan dikalikan tarif per kWh: $$\\text{Biaya} = \\Sigma(P \\times t) \\times 30 \\times \\text{Tarif}$$. **Tips:** Lupa mengalikan jumlah unit lampu ($5 \\times 20\\text{ W}$) atau kesalahan perkalian aritmetika biaya."
  },
  {
    "id": "fis-lis-dc-daya-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Dua Pemanas Listrik Dirangkai Seri dan Paralel",
    "difficulty": "sedang",
    "statement": "Sebuah pemanas air listrik dengan kumparan $A$ dapat mendidihkan sejumlah air dalam waktu $t_A = 12\\text{ menit}$, sedangkan kumparan pemanas $B$ dapat mendidihkan jumlah air yang sama dalam waktu $t_B = 6\\text{ menit}$. Jika kedua kumparan dihubungkan ke sumber tegangan konstan yang sama, waktu yang dibutuhkan untuk mendidihkan air tersebut jika kedua kumparan dirangkai secara paralel ($t_p$) dan secara seri ($t_s$) berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ menit}$ dan $18\\text{ menit}$",
      "$6\\text{ menit}$ dan $12\\text{ menit}$",
      "$3\\text{ menit}$ dan $18\\text{ menit}$",
      "$4\\text{ menit}$ dan $9\\text{ menit}$",
      "$8\\text{ menit}$ dan $18\\text{ menit}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jumlah kalor $Q$ yang diperlukan untuk mendidihkan air bernilai tetap. Pada tegangan tetap $V$, daya pemanas adalah $P = \\frac{V^2}{R}$. Karena $Q = P t = \\frac{V^2}{R} t$, diperoleh hubungan bahwa hambatan kumparan sebanding dengan waktu pemanasan ($R \\propto t$).",
      "steps": "1. Untuk susunan paralel, daya total dijumlahkan: $P_p = P_A + P_B$. Karena $P = \\frac{Q}{t}$:<br>$$\\frac{Q}{t_p} = \\frac{Q}{t_A} + \\frac{Q}{t_B} \\implies \\frac{1}{t_p} = \\frac{1}{t_A} + \\frac{1}{t_B}$$<br>Masukkan nilai waktu:<br>$$\\frac{1}{t_p} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1 + 2}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies t_p = 4\\text{ menit}$$<br>2. Untuk susunan seri, hambatan total dijumlahkan: $R_s = R_A + R_B$. Karena $R \\propto t$:<br>$$t_s = t_A + t_B = 12\\text{ menit} + 6\\text{ menit} = 18\\text{ menit}$$<br>3. Jadi waktu pemanasan berturut-turut adalah $4\\text{ menit}$ dan $18\\text{ menit}$ (pilihan A).",
      "pitfalls": "Sering tertukar antara aturan seri dan paralel untuk waktu pemanasan: pada paralel daya bertambah sehingga waktu mengecil ($t_p = 4\\text{ menit}$), sedangkan pada seri hambatan membesar sehingga waktu pemanasan bertambah lama ($t_s = 18\\text{ menit}$)."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Jumlah kalor $Q$ yang diperlukan untuk mendidihkan air bernilai tetap. Pada tegangan tetap $V$, daya pemanas adalah $P = \\frac{V^2}{R}$. Karena $Q = P t = \\frac{V^2}{R} t$, diperoleh hubungan bahwa hambatan kumparan sebanding dengan waktu pemanasan ($R \\propto t$)."
  },
  {
    "id": "fis-lis-dc-daya-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Efisiensi dan GGL Balik Motor Listrik DC",
    "difficulty": "sedang",
    "statement": "Sebuah motor listrik arus searah (DC) dengan hambatan dalam kumparan $r = 2\\,\\Omega$ dihubungkan ke sumber tegangan $V = 100\\text{ Volt}$. Saat motor berputar normal menghasilkan kerja mekanik, arus yang mengalir melalui motor adalah $I = 5\\text{ Ampere}$. Besar GGL balik (back-EMF $\\mathcal{E}'$) yang dibangkitkan oleh motor dan efisiensi motor tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$90\\text{ V}$ dan $90\\%$",
      "$90\\text{ V}$ dan $80\\%$",
      "$80\\text{ V}$ dan $80\\%$",
      "$100\\text{ V}$ dan $90\\%$",
      "$110\\text{ V}$ dan $95\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Motor listrik mengubah energi listrik menjadi energi mekanik. Tegangan sumber terbagi menjadi GGL balik motor ($\\mathcal{E}'$) dan tegangan jatuh resistif internal ($I r$):<br>$$V = \\mathcal{E}' + I r$$<br>Daya output mekanik adalah $P_{\\text{out}} = \\mathcal{E}' I$ dan efisiensinya adalah $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%$.",
      "steps": "1. Hitung besar GGL balik (back-EMF):<br>$$\\mathcal{E}' = V - I r = 100\\text{ V} - (5\\text{ A} \\times 2\\,\\Omega) = 100\\text{ V} - 10\\text{ V} = 90\\text{ Volt}$$<br>2. Hitung daya listrik masukan (input):<br>$$P_{\\text{in}} = V \\times I = 100\\text{ V} \\times 5\\text{ A} = 500\\text{ Watt}$$<br>3. Hitung daya mekanik keluaran (output):<br>$$P_{\\text{out}} = \\mathcal{E}' \\times I = 90\\text{ V} \\times 5\\text{ A} = 450\\text{ Watt}$$<br>4. Hitung efisiensi motor:<br>$$\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{450\\text{ W}}{500\\text{ W}} \\times 100\\% = 90\\%$$<br>5. Jadi GGL balik adalah $90\\text{ V}$ dan efisiensinya adalah $90\\%$ (pilihan A).",
      "pitfalls": "Menjumlahkan alih-alih mengurangkan $V + Ir = 110\\text{ V}$, atau mengira daya output dihitung semata-mata dari hambatan internal $I^2 r$."
    },
    "subTopicSlug": "energi-dan-daya-listrik",
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Motor listrik mengubah energi listrik menjadi energi mekanik. Tegangan sumber terbagi menjadi GGL balik motor ($\\mathcal{E}'$) dan tegangan jatuh resistif internal ($I r$): $$V = \\mathcal{E}' + I r$$ Daya output mekanik adalah $P_{\\text{out}} = \\mathcal{E}' I$ dan efisiensinya adalah $\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%$."
  },
  {
    "id": "sup-fis-lis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Hukum Ohm & Daya Listrik",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lampu pijar bertuliskan spesifikasi daya $100\\text{ W} / 220\\text{ V}$. Apabila lampu tersebut dihubungkan ke sumber tegangan jaringan yang turun menjadi $110\\text{ V}$, dan dengan menganggap nilai hambatan kawat lampu konstan, daya disipasi lampu tersebut sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$25\\text{ W}$",
      "$50\\text{ W}$",
      "$75\\text{ W}$",
      "$12{,}5\\text{ W}$",
      "$100\\text{ W}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Daya Listrik Kuadratik Terhadap Tegangan:</strong><br>$P = \\frac{V^2}{R}$. Karena hambatan filamen lampu $R$ tetap, perbandingan daya listrik adalah kuadrat perbandingan tegangan: $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$.</div>",
      "steps": "<ol><li>Rasio tegangan: $\\frac{V_2}{V_1} = \\frac{110}{220} = \\frac{1}{2}$.</li><li>Rasio daya: $\\frac{P_2}{P_1} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</li><li>Daya lampu: $P_2 = \\frac{1}{4} \\times 100 = 25\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Siswa sering keliru menganggap hubungan linier $P \\propto V$ sehingga menjawab setengahnya ($50\\text{ W}$).</div>"
    },
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "energi-dan-daya-listrik",
    "hint": "Daya Listrik Kuadratik Terhadap Tegangan: $P = \\frac{V^2}{R}$. Karena hambatan filamen lampu $R$ tetap, perbandingan daya listrik adalah kuadrat perbandingan tegangan: $\\frac{P_2}{P_1} = \\left(\\frac{V_2}{V_1}\\right)^2$. **Tips:** Siswa sering keliru menganggap hubungan linier $P \\propto V$ sehingga menjawab setengahnya ($50\\text{ W}$)."
  },
  {
    "id": "sedang-fis-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-daya",
    "category": "Hukum II Kirchhoff Rangkaian 1 Loop",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Suatu rangkaian tertutup satu loop terdiri dari dua sumber tegangan baterai $\\mathcal{E}_1 = 18\\text{ V}$ dan $\\mathcal{E}_2 = 6\\text{ V}$ yang dipasang saling berhadapan kutub positifnya, serta dua hambatan $R_1 = 3\\,\\Omega$ dan $R_2 = 1\\,\\Omega$. Jika hambatan dalam baterai diabaikan, kuat arus listrik yang mengalir dalam rangkaian dan daya disipasi pada resistor $R_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ A}$ dan $12\\text{ W}$",
      "$3\\text{ A}$ dan $18\\text{ W}$",
      "$3\\text{ A}$ dan $27\\text{ W}$",
      "$4\\text{ A}$ dan $36\\text{ W}$",
      "$6\\text{ A}$ dan $54\\text{ W}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum II Kirchhoff Loop Tunggal:</strong><br>\n          $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0 \\implies I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_{\\text{total}}}$$<br>\n          Daya disipasi resistor: $P = I^2 R$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Karena kutub baterai saling berlawanan, GGL resultan adalah selisih keduanya:\n            $$\\mathcal{E}_{\\text{net}} = 18 - 6 = 12\\text{ V}$$\n          </li>\n          <li>Hambatan total: $R_{\\text{total}} = 3 + 1 = 4\\,\\Omega$.</li>\n          <li>Kuat arus listrik:\n            $$I = \\frac{12\\text{ V}}{4\\,\\Omega} = 3\\text{ Ampere}$$\n          </li>\n          <li>Daya pada resistor $R_1$:\n            $$P_1 = I^2 R_1 = (3^2) \\times 3 = 9 \\times 3 = 27\\text{ Watt}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Siswa sering keliru menjumlahkan tegangan baterai ($18 + 6 = 24\\text{ V}$) tanpa memperhatikan arah kutub baterai yang saling berlawanan.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Energi dan Daya Listrik",
    "subTopic": "Energi dan Daya Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "energi-dan-daya-listrik",
    "hint": "Gunakan perumusan konsep fisis: $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0 \\implies I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_{\\text{total}}}$$ Daya disipasi resistor: $P = I^2 R$."
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
