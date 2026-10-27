/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Rangkaian Arus Searah (DC) (fis-lis-dc)
 * Sub-Bab: Hukum I dan II Kirchhoff (fis-lis-dc-kirchhoff)
 * Slug: hukum-1-dan-2-kirchhoff
 * Indikator: Hukum percabangan arus dan analisis rangkaian tertutup satu dan multi-loop.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 5, HOTS: 1)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-dc-kirchhoff";
  const subTopicSlug = "hukum-1-dan-2-kirchhoff";
  const questions = [
  {
    "id": "fis-lis-dc-kirchhoff-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Prinsip Fisika Dasar Hukum Kirchhoff",
    "difficulty": "mudah",
    "statement": "Hukum I Kirchhoff dan Hukum II Kirchhoff secara berurutan berlandaskan pada prinsip hukum kekekalan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Muatan listrik dan energi",
      "Energi dan muatan listrik",
      "Momentum linier dan energi",
      "Muatan listrik dan momentum sudut",
      "Daya listrik dan tegangan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum I Kirchhoff (KCL / Kirchhoff's Current Law) didasarkan pada prinsip hukum kekekalan muatan listrik di titik percabangan. Hukum II Kirchhoff (KVL / Kirchhoff's Voltage Law) didasarkan pada prinsip hukum kekekalan energi dalam suatu lintasan tertutup (loop).",
      "steps": "1. Tinjau Hukum I Kirchhoff: $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$. Muatan tidak dapat diciptakan atau dimusnahkan di simpul percabangan, sehingga jumlah muatan per detik yang masuk sama dengan yang keluar (kekekalan muatan).<br>2. Tinjau Hukum II Kirchhoff: $\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$. Kerja total yang dilakukan oleh gaya elektrostatik dan non-elektrostatik pada satu putaran penuh loop sama dengan nol, yang mencerminkan kekekalan energi listrik.<br>3. Jadi urutan yang benar adalah muatan listrik dan energi (pilihan A).",
      "pitfalls": "Sering tertukar urutan antara kekekalan muatan listrik (Hukum I) dan kekekalan energi (Hukum II)."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Hukum I Kirchhoff (KCL / Kirchhoff's Current Law) didasarkan pada prinsip hukum kekekalan muatan listrik di titik percabangan. Hukum II Kirchhoff (KVL / Kirchhoff's Voltage Law) didasarkan pada prinsip hukum kekekalan energi dalam suatu lintasan tertutup (loop). **Tips:** Sering tertukar urutan antara kekekalan muatan listrik (Hukum I) dan kekekalan energi (Hukum II)."
  },
  {
    "id": "fis-lis-dc-kirchhoff-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Perhitungan Arus Percabangan Simpul Kirchhoff",
    "difficulty": "mudah",
    "statement": "Pada suatu simpul percabangan rangkaian listrik terdapat empat kawat penghantar. Arus listrik $I_1 = 5\\text{ A}$ dan $I_2 = 7\\text{ A}$ mengalir masuk menuju simpul, sedangkan arus $I_3 = 4\\text{ A}$ mengalir keluar dari simpul. Kuat arus listrik pada kawat keempat ($I_4$) dan arah alirannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$8\\text{ A}$, keluar dari simpul",
      "$8\\text{ A}$, masuk menuju simpul",
      "$16\\text{ A}$, keluar dari simpul",
      "$6\\text{ A}$, masuk menuju simpul",
      "$2\\text{ A}$, keluar dari simpul"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Hukum I Kirchhoff, jumlah arus listrik yang masuk ke suatu titik simpul harus sama dengan jumlah arus yang keluar dari titik tersebut:<br>$$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$",
      "steps": "1. Hitung total arus masuk yang diketahui:<br>$$\\Sigma I_{\\text{masuk, diketahui}} = I_1 + I_2 = 5\\text{ A} + 7\\text{ A} = 12\\text{ A}$$<br>2. Arus keluar yang diketahui adalah $I_3 = 4\\text{ A}$.<br>3. Karena arus masuk ($12\\text{ A}$) lebih besar daripada arus keluar ($4\\text{ A}$), maka kawat keempat ($I_4$) harus mengalirkan arus keluar dari simpul agar seimbang:<br>$$12\\text{ A} = 4\\text{ A} + I_4 \\implies I_4 = 12\\text{ A} - 4\\text{ A} = 8\\text{ A}$$<br>4. Jadi nilai $I_4 = 8\\text{ A}$ dengan arah keluar dari simpul (pilihan A).",
      "pitfalls": "Keliru menentukan arah arus (mengira masuk) atau salah menjumlahkan aljabar arus pada simpul."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum I Kirchhoff, jumlah arus listrik yang masuk ke suatu titik simpul harus sama dengan jumlah arus yang keluar dari titik tersebut: $$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$. **Tips:** Keliru menentukan arah arus (mengira masuk) atau salah menjumlahkan aljabar arus pada simpul."
  },
  {
    "id": "fis-lis-dc-kirchhoff-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Hukum II Kirchhoff Rangkaian Loop Tunggal Sederhana",
    "difficulty": "mudah",
    "statement": "Suatu rangkaian satu loop tertutup terdiri dari satu sumber tegangan $\\mathcal{E} = 12\\text{ Volt}$ dengan hambatan dalam $r = 1\\,\\Omega$ yang dihubungkan secara seri dengan dua buah resistor luar $R_1 = 2\\,\\Omega$ dan $R_2 = 3\\,\\Omega$. Kuat arus listrik yang mengalir dalam rangkaian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$2{,}4\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$6\\text{ Ampere}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada rangkaian satu loop tertutup dengan satu sumber GGL dan beberapa hambatan seri, kuat arus listrik dirumuskan oleh Hukum II Kirchhoff:<br>$$I = \\frac{\\mathcal{E}}{\\Sigma R + r}$$",
      "steps": "1. Hitung total hambatan pada rangkaian seri tertutup:<br>$$R_{\\text{total}} = R_1 + R_2 + r = 2\\,\\Omega + 3\\,\\Omega + 1\\,\\Omega = 6\\,\\Omega$$<br>2. Hitung kuat arus listrik yang mengalir:<br>$$I = \\frac{\\mathcal{E}}{R_{\\text{total}}} = \\frac{12\\text{ V}}{6\\,\\Omega} = 2\\text{ Ampere}$$<br>3. Jadi kuat arus rangkaian adalah $2\\text{ Ampere}$ (pilihan B).",
      "pitfalls": "Lupa menyertakan hambatan dalam baterai ($r = 1\\,\\Omega$) pada pembagi hambatan sehingga membagi 12 dengan 5 ($2{,}4\\text{ A}$)."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Pada rangkaian satu loop tertutup dengan satu sumber GGL dan beberapa hambatan seri, kuat arus listrik dirumuskan oleh Hukum II Kirchhoff: $$I = \\frac{\\mathcal{E}}{\\Sigma R + r}$$."
  },
  {
    "id": "fis-lis-dc-kirchhoff-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Beda Potensial Antara Dua Titik pada Suatu Lintasan",
    "difficulty": "mudah",
    "statement": "Pada suatu penggalan kawat rangkaian listrik dari titik $A$ ke titik $B$, arus listrik $I = 2\\text{ A}$ mengalir dari $A$ menuju $B$. Di antara $A$ dan $B$ terdapat resistor $R = 4\\,\\Omega$ dan sebuah sumber tegangan $\\mathcal{E} = 6\\text{ Volt}$ (dengan kutub positif menghadap ke titik $A$ dan kutub negatif ke titik $B$). Beda potensial antara titik $A$ dan $B$ ($V_{AB} = V_A - V_B$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ Volt}$",
      "$6\\text{ Volt}$",
      "$8\\text{ Volt}$",
      "$14\\text{ Volt}$",
      "$16\\text{ Volt}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Beda potensial antara titik $A$ dan $B$ dihitung dengan menelusuri lintasan dari $A$ ke $B$:<br>$$V_{AB} = V_A - V_B = \\Sigma (I R) + \\Sigma \\mathcal{E}$$<br>dengan memperhatikan penurunan potensial searah arus ($+IR$) dan kutub GGL yang ditinggalkan.",
      "steps": "1. Telusuri dari titik $A$ menuju titik $B$ mengikuti arah arus $I = 2\\text{ A}$:<br>- Melewati resistor $R = 4\\,\\Omega$ searah arus menghasilkan penurunan potensial: $\\Delta V_R = I R = 2\\text{ A} \\times 4\\,\\Omega = 8\\text{ Volt}$.<br>- Melewati baterai $\\mathcal{E} = 6\\text{ V}$ dari kutub positif ke kutub negatif menghasilkan penurunan potensial: $\\Delta V_{\\mathcal{E}} = 6\\text{ Volt}$.<br>2. Hubungan potensial kedua titik:<br>$$V_B = V_A - I R - \\mathcal{E} \\implies V_A - V_B = I R + \\mathcal{E}$$<br>$$V_{AB} = 8\\text{ V} + 6\\text{ V} = 14\\text{ Volt}$$<br>3. Jadi beda potensial $V_{AB}$ bernilai $14\\text{ Volt}$ (pilihan D).",
      "pitfalls": "Siswa sering mengurangkan tegangan baterai dengan penurunan tegangan resistor ($8 - 6 = 2\\text{ V}$) karena keliru membaca arah penurunan potensial dari kutub positif ke kutub negatif."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Beda potensial antara titik $A$ dan $B$ dihitung dengan menelusuri lintasan dari $A$ ke $B$: $$V_{AB} = V_A - V_B = \\Sigma (I R) + \\Sigma \\mathcal{E}$$ dengan memperhatikan penurunan potensial searah arus ($+IR$) dan kutub GGL yang ditinggalkan."
  },
  {
    "id": "fis-lis-dc-kirchhoff-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Tanda GGL pada Penelusuran Loop Kirchhoff",
    "difficulty": "mudah",
    "statement": "Dalam menerapkan Hukum II Kirchhoff ($\\Sigma \\mathcal{E} + \\Sigma I R = 0$) pada suatu lintasan loop tertutup, aturan tanda untuk GGL ($\\mathcal{E}$) yang benar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Jika arah penelusuran loop menemui kutub positif sumber tegangan terlebih dahulu, maka nilai GGL bertanda positif",
      "Jika arah penelusuran loop menemui kutub positif sumber tegangan terlebih dahulu, maka nilai GGL bertanda negatif",
      "Tanda GGL selalu bertanda positif tanpa bergantung pada arah penelusuran loop",
      "Tanda GGL semata-mata ditentukan oleh arah aliran arus listrik, bukan oleh kutub sumber tegangan",
      "Jika loop searah jarum jam maka semua nilai GGL otomatis bertanda negatif"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Konvensi standar penelusuran loop pada Hukum II Kirchhoff ($\\Sigma \\mathcal{E} + \\Sigma I R = 0$) menyatakan bahwa tanda GGL ditentukan oleh kutub sumber tegangan yang pertama kali dijumpai oleh lintasan loop.",
      "steps": "1. Jika arah penelusuran loop menjumpai kutub positif (garis panjang pada simbol baterai) terlebih dahulu, maka nilai GGL ditulis bertanda positif ($+\\mathcal{E}$).<br>2. Sebaliknya, jika arah penelusuran loop menjumpai kutub negatif (garis pendek) terlebih dahulu, maka nilai GGL ditulis bertanda negatif ($-\\mathcal{E}$).<br>3. Penentuan tanda GGL ini tidak dipengaruhi oleh arah arus listrik yang mengalir.<br>4. Jadi pernyataan yang tepat adalah pilihan A.",
      "pitfalls": "Siswa sering tertukar dengan aturan tanda arus listrik ($I$), di mana arus bertanda positif jika searah loop dan negatif jika berlawanan arah loop."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Konvensi standar penelusuran loop pada Hukum II Kirchhoff ($\\Sigma \\mathcal{E} + \\Sigma I R = 0$) menyatakan bahwa tanda GGL ditentukan oleh kutub sumber tegangan yang pertama kali dijumpai oleh lintasan loop."
  },
  {
    "id": "fis-lis-dc-kirchhoff-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Analisis Arus Rangkaian Dua Loop Tak Simetris",
    "difficulty": "sedang",
    "statement": "Perhatikan rangkaian listrik dua loop berikut:<br>- Cabang kiri memuat sumber tegangan $\\mathcal{E}_1 = 8\\text{ V}$ dan resistor $R_1 = 2\\,\\Omega$.<br>- Cabang tengah bersama memuat resistor $R_2 = 3\\,\\Omega$ tanpa sumber tegangan.<br>- Cabang kanan memuat sumber tegangan $\\mathcal{E}_2 = 12\\text{ V}$ dan resistor $R_3 = 6\\,\\Omega$.<br>Kutub positif kedua sumber tegangan menghadap ke simpul atas ($A$) dan kutub negatif ke simpul bawah ($B$). Kuat arus listrik yang mengalir melalui cabang tengah $R_2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ Ampere}$",
      "$2\\text{ Ampere}$",
      "$3\\text{ Ampere}$",
      "$4\\text{ Ampere}$",
      "$5\\text{ Ampere}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan analisis simpul (Nodal Analysis) berbasis Hukum I Kirchhoff (KCL) pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$).",
      "steps": "1. Tetapkan potensial acuan pada simpul bawah: $V_B = 0$. Misalkan potensial simpul atas adalah $V_A = V$.<br>2. Tuliskan arus yang meninggalkan simpul $A$ pada ketiga cabang:<br>- Cabang kiri: $I_1 = \\frac{V - 8}{2}$<br>- Cabang tengah: $I_2 = \\frac{V - 0}{3}$<br>- Cabang kanan: $I_3 = \\frac{V - 12}{6}$<br>3. Terapkan KCL pada simpul $A$:<br>$$\\frac{V - 8}{2} + \\frac{V}{3} + \\frac{V - 12}{6} = 0$$<br>Kalikan kedua ruas dengan 6:<br>$$3(V - 8) + 2V + (V - 12) = 0 \\implies 3V - 24 + 2V + V - 12 = 0$$<br>$$6V - 36 = 0 \\implies 6V = 36 \\implies V = 6\\text{ Volt}$$<br>4. Hitung kuat arus pada cabang tengah melalui resistor $R_2 = 3\\,\\Omega$:<br>$$I_2 = \\frac{V_A - 0}{R_2} = \\frac{6\\text{ V}}{3\\,\\Omega} = 2\\text{ Ampere}$$<br>5. Jadi kuat arus pada cabang tengah adalah $2\\text{ Ampere}$ (pilihan B).",
      "pitfalls": "Kesalahan tanda aljabar saat merumuskan persamaan simpul atau salah memasukkan polaritas sumber tegangan."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan analisis simpul (Nodal Analysis) berbasis Hukum I Kirchhoff (KCL) pada simpul $A$: jumlah arus yang meninggalkan simpul sama dengan nol ($\\Sigma I_{\\text{keluar}} = 0$). **Tips:** Kesalahan tanda aljabar saat merumuskan persamaan simpul atau salah memasukkan polaritas sumber tegangan."
  },
  {
    "id": "fis-lis-dc-kirchhoff-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Beda Potensial Titik Simpul Bebas pada Rangkaian Tertutup",
    "difficulty": "sedang",
    "statement": "Pada suatu rangkaian satu loop tertutup, terdapat baterai $\\mathcal{E}_1 = 24\\text{ V}$ (kutub positif di kiri), resistor $R_1 = 2\\,\\Omega$, resistor $R_2 = 3\\,\\Omega$, baterai $\\mathcal{E}_2 = 8\\text{ V}$ (kutub positif di kanan, berlawanan arah dengan $\\mathcal{E}_1$), dan resistor $R_3 = 3\\,\\Omega$. Titik $C$ terletak di antara $R_1$ dan $R_2$, sedangkan titik $D$ terletak di antara $R_3$ dan kutub negatif $\\mathcal{E}_1$. Jika titik $D$ dihubungkan ke tanah (grounding, $V_D = 0$), besar potensial listrik di titik $C$ ($V_C$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$12\\text{ Volt}$",
      "$16\\text{ Volt}$",
      "$20\\text{ Volt}$",
      "$24\\text{ Volt}$",
      "$28\\text{ Volt}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Tentukan terlebih dahulu arus loop rangkaian tertutup menggunakan Hukum II Kirchhoff, kemudian hitung potensial mutlak titik $C$ dari titik acuan tanah ($V_D = 0$) melalui penelusuran lintasan.",
      "steps": "1. Hitung GGL total loop searah jarum jam:<br>$$\\Sigma \\mathcal{E} = \\mathcal{E}_1 - \\mathcal{E}_2 = 24\\text{ V} - 8\\text{ V} = 16\\text{ Volt}$$<br>2. Hambatan total loop:<br>$$R_{\\text{total}} = R_1 + R_2 + R_3 = 2\\,\\Omega + 3\\,\\Omega + 3\\,\\Omega = 8\\,\\Omega$$<br>3. Hitung arus loop:<br>$$I = \\frac{\\Sigma \\mathcal{E}}{R_{\\text{total}}} = \\frac{16\\text{ V}}{8\\,\\Omega} = 2\\text{ Ampere}$$<br>4. Telusuri potensial dari titik $D$ ($V_D = 0$) menuju titik $C$ melewati baterai $\\mathcal{E}_1$ dan resistor $R_1$:<br>$$V_C = V_D + \\mathcal{E}_1 - I R_1 = 0 + 24\\text{ V} - (2\\text{ A} \\times 2\\,\\Omega) = 24\\text{ V} - 4\\text{ V} = 20\\text{ Volt}$$<br>5. Jadi potensial di titik $C$ adalah $20\\text{ Volt}$ (pilihan C).",
      "pitfalls": "Lupa bahwa resistor $R_1$ dialiri arus yang menimbulkan penurunan tegangan $-I R_1$, sehingga langsung menjawab $V_C = 24\\text{ V}$."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Tentukan terlebih dahulu arus loop rangkaian tertutup menggunakan Hukum II Kirchhoff, kemudian hitung potensial mutlak titik $C$ dari titik acuan tanah ($V_D = 0$) melalui penelusuran lintasan."
  },
  {
    "id": "fis-lis-dc-kirchhoff-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Daya Disipasi Maksimum Teorema Transfer Daya",
    "difficulty": "sedang",
    "statement": "Sebuah sumber tegangan nyata memiliki GGL $\\mathcal{E} = 20\\text{ Volt}$ dan hambatan dalam $r = 4\\,\\Omega$. Sumber tegangan ini dihubungkan ke sebuah resistor beban variabel $R_L$. Berdasarkan teorema transfer daya maksimum, nilai hambatan $R_L$ agar menyerap daya listrik maksimum dari sumber beserta besar daya maksimum tersebut berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\,\\Omega$ dan $25\\text{ Watt}$",
      "$4\\,\\Omega$ dan $50\\text{ Watt}$",
      "$2\\,\\Omega$ dan $50\\text{ Watt}$",
      "$8\\,\\Omega$ dan $25\\text{ Watt}$",
      "$0\\,\\Omega$ dan $100\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema transfer daya maksimum (Maximum Power Transfer Theorem) menyatakan bahwa daya yang diserap oleh beban $R_L$ mencapai nilai maksimum ketika nilai resistansi beban sama dengan resistansi dalam sumber tegangan ($R_L = r$). Daya maksimum dirumuskan sebagai:<br>$$P_{\\text{maks}} = \\frac{\\mathcal{E}^2}{4r}$$",
      "steps": "1. Syarat daya transfer maksimum tercapai saat:<br>$$R_L = r = 4\\,\\Omega$$<br>2. Kuat arus saat keadaan transfer maksimum:<br>$$I = \\frac{\\mathcal{E}}{R_L + r} = \\frac{20\\text{ V}}{4\\,\\Omega + 4\\,\\Omega} = \\frac{20\\text{ V}}{8\\,\\Omega} = 2{,}5\\text{ Ampere}$$<br>3. Hitung daya maksimum yang diserap beban $R_L$:<br>$$P_{\\text{maks}} = I^2 R_L = (2{,}5\\text{ A})^2 \\times 4\\,\\Omega = 6{,}25 \\times 4 = 25\\text{ Watt}$$<br>(Atau dengan rumus langsung: $P_{\\text{maks}} = \\frac{20^2}{4 \\times 4} = \\frac{400}{16} = 25\\text{ Watt}$).<br>4. Jadi jawabannya adalah $4\\,\\Omega$ dan $25\\text{ Watt}$ (pilihan A).",
      "pitfalls": "Mengira daya maksimum tercapai saat hambatan beban nol ($R_L = 0$), padahal saat $R_L = 0$ daya yang diserap beban justru nol ($P = I^2 \\times 0 = 0$)."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Teorema transfer daya maksimum (Maximum Power Transfer Theorem) menyatakan bahwa daya yang diserap oleh beban $R_L$ mencapai nilai maksimum ketika nilai resistansi beban sama dengan resistansi dalam sumber tegangan ($R_L = r$). Daya maksimum dirumuskan sebagai: $$P_{\\text{maks}} = \\frac{\\mathcal{E}^2}{4r}$$."
  },
  {
    "id": "fis-lis-dc-kirchhoff-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Tegangan Terbuka dan Hambatan Ekuivalen Thevenin",
    "difficulty": "sedang",
    "statement": "Suatu rangkaian pembagi tegangan terdiri dari sumber tegangan ideal $V_s = 30\\text{ V}$ yang dihubungkan seri dengan dua resistor $R_1 = 20\\,\\Omega$ dan $R_2 = 30\\,\\Omega$. Sepasang terminal keluaran $A-B$ diambil melintasi resistor $R_2$. Nilai tegangan rangkaian terbuka (tegangan Thevenin $V_{th}$) dan resistansi Thevenin ($R_{th}$) yang dilihat dari terminal $A-B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$18\\text{ V}$ dan $12\\,\\Omega$",
      "$18\\text{ V}$ dan $50\\,\\Omega$",
      "$12\\text{ V}$ dan $12\\,\\Omega$",
      "$30\\text{ V}$ dan $12\\,\\Omega$",
      "$12\\text{ V}$ dan $25\\,\\Omega$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Teorema Thevenin menyatakan bahwa jaringan linier dua terminal dapat digantikan oleh sumber tegangan ekuivalen $V_{th}$ (tegangan rangkaian terbuka pada terminal) yang diseri dengan hambatan $R_{th}$ (hambatan ekuivalen saat sumber tegangan dinonaktifkan/hubung singkat).",
      "steps": "1. Hitung tegangan Thevenin $V_{th}$ pada terminal terbuka $A-B$ (tegangan pada $R_2$):<br>$$V_{th} = \\frac{R_2}{R_1 + R_2} V_s = \\frac{30\\,\\Omega}{20\\,\\Omega + 30\\,\\Omega} \\times 30\\text{ V} = \\frac{30}{50} \\times 30\\text{ V} = 18\\text{ Volt}$$<br>2. Hitung resistansi Thevenin $R_{th}$ dengan menonaktifkan sumber tegangan ideal (hubung singkat sumber $V_s$):<br>Dari terminal $A-B$, resistor $R_1$ dan $R_2$ terhubung secara paralel:<br>$$R_{th} = \\frac{R_1 \\times R_2}{R_1 + R_2} = \\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12\\,\\Omega$$<br>3. Jadi nilai $V_{th}$ dan $R_{th}$ berturut-turut adalah $18\\text{ V}$ dan $12\\,\\Omega$ (pilihan A).",
      "pitfalls": "Menjumlahkan $R_1$ dan $R_2$ secara seri ($50\\,\\Omega$) saat mencari resistansi Thevenin, padahal terminal yang diuji melihat kedua resistor terhubung paralel ke ground."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Teorema Thevenin menyatakan bahwa jaringan linier dua terminal dapat digantikan oleh sumber tegangan ekuivalen $V_{th}$ (tegangan rangkaian terbuka pada terminal) yang diseri dengan hambatan $R_{th}$ (hambatan ekuivalen saat sumber tegangan dinonaktifkan/hubung singkat)."
  },
  {
    "id": "fis-lis-dc-kirchhoff-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-dc",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Dua Baterai Paralel Beda GGL dan Hambatan Dalam",
    "difficulty": "sedang",
    "statement": "Dua buah baterai berbeda dihubungkan secara paralel untuk menyuplai sebuah lampu beban berhambatan $R = 2\\,\\Omega$. Baterai pertama memiliki GGL $\\mathcal{E}_1 = 6\\text{ V}$ dan hambatan dalam $r_1 = 1\\,\\Omega$. Baterai kedua memiliki GGL $\\mathcal{E}_2 = 4\\text{ V}$ dan hambatan dalam $r_2 = 1\\,\\Omega$. Kuat arus listrik total yang mengalir melalui lampu tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1{,}0\\text{ Ampere}$",
      "$1{,}5\\text{ Ampere}$",
      "$2{,}0\\text{ Ampere}$",
      "$2{,}5\\text{ Ampere}$",
      "$3{,}0\\text{ Ampere}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan Teorema Millman atau analisis simpul untuk cabang paralel multi-sumber guna menghitung beda potensial pada beban lampu ($V_L$), kemudian hitung arus lampu melalui $I_L = \\frac{V_L}{R}$.",
      "steps": "1. Berdasarkan Teorema Millman, tegangan pada simpul paralel lampu adalah:<br>$$V_L = \\frac{\\frac{\\mathcal{E}_1}{r_1} + \\frac{\\mathcal{E}_2}{r_2}}{\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{R}}$$<br>2. Masukkan data ke dalam persamaan:<br>$$V_L = \\frac{\\frac{6}{1} + \\frac{4}{1}}{\\frac{1}{1} + \\frac{1}{1} + \\frac{1}{2}} = \\frac{6 + 4}{1 + 1 + 0{,}5} = \\frac{10}{2{,}5} = 4\\text{ Volt}$$<br>3. Hitung kuat arus yang melintasi lampu beban $R = 2\\,\\Omega$:<br>$$I_L = \\frac{V_L}{R} = \\frac{4\\text{ V}}{2\\,\\Omega} = 2\\text{ Ampere}$$<br>4. Jadi kuat arus listrik yang mengalir melalui lampu adalah $2\\text{ Ampere}$ (pilihan C).",
      "pitfalls": "Siswa sering merata-ratakan GGL baterai secara langsung tanpa memperhitungkan pengaruh beban luar $R$."
    },
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan Teorema Millman atau analisis simpul untuk cabang paralel multi-sumber guna menghitung beda potensial pada beban lampu ($V_L$), kemudian hitung arus lampu melalui $I_L = \\frac{V_L}{R}$. **Tips:** Siswa sering merata-ratakan GGL baterai secara langsung tanpa memperhitungkan pengaruh beban luar $R$."
  },
  {
    "id": "hots-fis-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-dc-kirchhoff",
    "category": "Rangkaian Arus Searah & Kirchhoff",
    "difficulty": "hots",
    "difficultyLabel": "HOTS / Setara UTBK-STEI",
    "statement": "Perhatikan skema rangkaian listrik tertutup 2-loop di bawah ini. Rangkaian ditenagai oleh dua sumber tegangan ggl ideal $\\mathcal{E}_1 = 24\\text{ V}$ dan $\\mathcal{E}_2 = 12\\text{ V}$, serta dihubungkan dengan tiga resistor $R_1 = 3\\,\\Omega$, $R_2 = 6\\,\\Omega$, dan $R_3 = 6\\,\\Omega$. Tentukan besar kuat arus yang mengalir melalui hambatan cabang tengah $R_2$ ($I_{R2}$) dengan arah dari simpul $A$ ke simpul $B$, serta besar beda potensial antara kedua simpul ($V_{AB} = V_A - V_B$)!",
    "hasDiagram": true,
    "diagramSvg": "\n      <svg class=\"diagram-svg\" viewBox=\"0 0 380 250\" preserveAspectRatio=\"xMidYMid meet\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"190\" cy=\"40\" r=\"5\" fill=\"#FACC15\"/>\n        <text x=\"195\" y=\"32\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">Simpul A</text>\n        \n        <circle cx=\"190\" cy=\"210\" r=\"5\" fill=\"#FACC15\"/>\n        <text x=\"195\" y=\"230\" fill=\"#FACC15\" font-family=\"'JetBrains Mono', monospace\" font-size=\"13\" font-weight=\"bold\">Simpul B (Ground)</text>\n\n        <!-- Left Loop -->\n        <polyline points=\"190,40 50,40 50,90\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"35\" y1=\"90\" x2=\"65\" y2=\"90\" stroke=\"#22C55E\" stroke-width=\"3\"/>\n        <line x1=\"42\" y1=\"98\" x2=\"58\" y2=\"98\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n        <text x=\"70\" y=\"96\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">ℰ₁=24V</text>\n        <polyline points=\"50,98 50,130\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"50,130 42,135 58,142 42,149 58,156 50,161\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"68\" y=\"150\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">R₁=3Ω</text>\n        <polyline points=\"50,161 50,210 190,210\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n\n        <!-- Middle Branch -->\n        <line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"95\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"190,95 182,102 198,110 182,118 198,126 190,133\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"206\" y=\"118\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">R₂=6Ω</text>\n        <line x1=\"190\" y1=\"133\" x2=\"190\" y2=\"210\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"172\" y1=\"100\" x2=\"172\" y2=\"135\" stroke=\"#FF5A26\" stroke-width=\"2\"/>\n        <polygon points=\"169,132 172,140 175,132\" fill=\"#FF5A26\"/>\n        <text x=\"140\" y=\"122\" fill=\"#FF5A26\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">I_R2 ↓</text>\n\n        <!-- Right Loop -->\n        <polyline points=\"190,40 330,40 330,90\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <line x1=\"315\" y1=\"90\" x2=\"345\" y2=\"90\" stroke=\"#22C55E\" stroke-width=\"3\"/>\n        <line x1=\"322\" y1=\"98\" x2=\"338\" y2=\"98\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n        <text x=\"265\" y=\"96\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"bold\">ℰ₂=12V</text>\n        <polyline points=\"330,98 330,130\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n        <polyline points=\"330,130 322,135 338,142 322,149 338,156 330,161\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n        <text x=\"272\" y=\"150\" fill=\"#E0F2FE\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\">R₃=6Ω</text>\n        <polyline points=\"330,161 330,210 190,210\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n      </svg>\n    ",
    "diagramCaption": "SKEMA 2-LOOP MULTI-BRANCH: HUKUM KIRCHHOFF & SIMPUL NODAL",
    "options": [
      "$I_{R2} = 2{,}50\\text{ A}$ dan $V_{AB} = 15{,}0\\text{ V}$",
      "$I_{R2} = 2{,}00\\text{ A}$ dan $V_{AB} = 12{,}0\\text{ V}$",
      "$I_{R2} = 3{,}00\\text{ A}$ dan $V_{AB} = 18{,}0\\text{ V}$",
      "$I_{R2} = 1{,}50\\text{ A}$ dan $V_{AB} = 9{,}0\\text{ V}$",
      "$I_{R2} = 3{,}50\\text{ A}$ dan $V_{AB} = 21{,}0\\text{ V}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Analisis Tegangan Nodal (Node Voltage Method):</strong><br>\n          Tetapkan simpul referensi tanah (ground) pada simpul bawah $B$ dengan $V_B = 0\\text{ V}$. Maka beda potensial $V_{AB} = V_A - 0 = V_A$.<br>\n          $$\\Sigma I_{\\text{keluar dari node } A} = 0 \\implies \\sum \\frac{V_A - V_k}{R_k} = 0$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>\n            <strong>Rumuskan Arus Keluar dari Simpul A:</strong><br>\n            • Cabang kiri: $I_1 = \\frac{V_A - 24}{3}$<br>\n            • Cabang tengah: $I_2 = \\frac{V_A - 0}{6}$<br>\n            • Cabang kanan: $I_3 = \\frac{V_A - 12}{6}$\n          </li>\n          <li>\n            <strong>Penerapan KCL pada Simpul A:</strong><br>\n            $$\\frac{V_A - 24}{3} + \\frac{V_A}{6} + \\frac{V_A - 12}{6} = 0$$\n          </li>\n          <li>\n            <strong>Kalikan dengan 6 untuk Menghilangkan Pecahan:</strong><br>\n            $$2(V_A - 24) + V_A + (V_A - 12) = 0$$\n            $$2V_A - 48 + V_A + V_A - 12 = 0$$\n            $$4V_A = 60 \\implies V_A = 15{,}0\\text{ V}$$\n          </li>\n          <li>\n            <strong>Hitung Arus Cabang Tengah $I_{R2}$:</strong><br>\n            $$I_{R2} = \\frac{V_A}{R_2} = \\frac{15{,}0\\text{ V}}{6\\,\\Omega} = 2{,}50\\text{ A}$$\n            $$V_{AB} = V_A - V_B = 15{,}0 - 0 = 15{,}0\\text{ V}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering terjadi kekeliruan polaritas baterai: pelat panjang bernilai positif ($+24\\text{ V}$ dan $+12\\text{ V}$). Pastikan arah arus konsisten keluar atau masuk simpul.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Hukum I dan II Kirchhoff",
    "subTopic": "Hukum I dan II Kirchhoff",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-dc",
    "subTopicSlug": "hukum-1-dan-2-kirchhoff",
    "hint": "Analisis Tegangan Nodal (Node Voltage Method): Tetapkan simpul referensi tanah (ground) pada simpul bawah $B$ dengan $V_B = 0\\text{ V}$. Maka beda potensial $V_{AB} = V_A - 0 = V_A$. $$\\Sigma I_{\\text{keluar dari node } A} = 0 \\implies \\sum \\frac{V_A - V_k}{R_k} = 0$$. **Tips:** Sering terjadi kekeliruan polaritas baterai: pelat panjang bernilai positif ($+24\\text{ V}$ dan $+12\\text{ V}$)."
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
