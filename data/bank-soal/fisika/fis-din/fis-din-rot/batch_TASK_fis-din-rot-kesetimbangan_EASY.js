module.exports = [
  {
    "id": "fis-din-rot-kesetimbangan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua syarat mutlak yang harus dipenuhi secara simultan agar suatu benda tegar berada dalam kondisi kesetimbangan statis sempurna adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Resultan gaya bernilai nol ($\\sum \\vec{F} = 0$) dan resultan momen gaya terhadap sembarang titik poros bernilai nol ($\\sum \\vec{\\tau} = 0$)",
      "Energi kinetik total bernilai maksimum dan percepatan gravitasi bernilai konstan",
      "Gaya normal selalu sama besar dengan gaya berat benda di setiap titik kontak",
      "Benda harus terbuat dari material homogen dengan momen inersia minimum",
      "Kecepatan sudut harus konstan dan percepatan tangensial tidak boleh nol"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesetimbangan statis benda tegar memerlukan ketiadaan percepatan translasi (kesetimbangan translasi: $\\sum \\vec{F} = 0$) sekaligus ketiadaan percepatan sudut (kesetimbangan rotasi: $\\sum \\vec{\\tau} = 0$).",
      "steps": "1. Syarat pertama (translasi): $\\sum F_x = 0$ dan $\\sum F_y = 0$, memastikan pusat massa benda tidak mengalami percepatan linier.\\n2. Syarat kedua (rotasi): $\\sum \\tau = 0$ terhadap sembarang poros acuan, memastikan benda tidak mengalami percepatan rotasi (tidak berputar).\\n3. Kesimpulan: Kedua syarat di atas wajib terpenuhi secara bersamaan.",
      "pitfalls": "Kerap hanya mengingat syarat resultan gaya $\\sum \\vec{F} = 0$ (yang hanya cukup untuk kesetimbangan partikel titik). Pada benda tegar yang memiliki ukuran, gaya yang resultannya nol masih bisa memutar benda jika menghasilkan momen kopel (torsi)."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah kelereng diletakkan di dasar mangkuk setengah bola yang cekung. Jika kelereng tersebut diberi sedikit gangguan (disimpangkan sedikit ke atas) lalu dilepaskan, kelereng akan menggelinding kembali ke posisi terendahnya semula. Jenis kesetimbangan yang dimiliki kelereng pada posisi tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kesetimbangan stabil (mantap)",
      "Kesetimbangan labil (goyah)",
      "Kesetimbangan netral (indifferen)",
      "Kesetimbangan dinamis",
      "Kesetimbangan semu"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesetimbangan stabil (mantap) terjadi ketika gangguan kecil menyebabkan titik berat benda naik sehingga memunculkan gaya/torsi pemulih yang berusaha mengembalikan benda ke posisi setimbang awalnya.",
      "steps": "1. Pada posisi dasar mangkuk cekung, energi potensial berada pada nilai minimum lokal.\\n2. Saat disimpangkan ke samping, posisi titik berat kelereng naik.\\n3. Gaya gravitasi dan reaksi normal menghasilkan resultan gaya yang mengarah kembali ke dasar.\\n4. Kesimpulan: Karakteristik ini adalah definisi kesetimbangan stabil (mantap).",
      "pitfalls": "Jangan tertukar dengan kesetimbangan labil (contoh kelereng di puncak bola terbalik yang jika disimpangkan langsung jatuh menjauh) atau netral (kelereng di lantai datar)."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah balok jembatan homogen $AB$ bermassa $M = 10\\text{ kg}$ dan panjang $L = 4\\text{ m}$ disangga secara horizontal oleh dua pilar: pilar 1 di ujung $A$ dan pilar 2 di ujung $B$. Titik berat balok berada tepat di tengah-tengah bentang balok ($2\\text{ m}$ dari ujung $A$ dan $B$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya reaksi normal yang diberikan pilar di $A$ ($N_A$) dan pilar di $B$ ($N_B$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$N_A = 25\\text{ N}$ dan $N_B = 75\\text{ N}$",
      "$N_A = 50\\text{ N}$ dan $N_B = 50\\text{ N}$",
      "$N_A = 100\\text{ N}$ dan $N_B = 0\\text{ N}$",
      "$N_A = 60\\text{ N}$ dan $N_B = 40\\text{ N}$",
      "$N_A = 80\\text{ N}$ dan $N_B = 20\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada balok horizontal simetris yang ditumpu di kedua ujungnya tanpa ada beban tambahan di luar pusat massa, beban total terbagi rata secara identik ke kedua penumpu: $N_A = N_B = \\frac{W}{2}$.",
      "steps": "1. Hitung berat balok:\\n$$W = M g = 10\\text{ kg} \\times 10\\text{ m/s}^2 = 100\\text{ N}$$\\n2. Terapkan kesetimbangan rotasi terhadap titik $A$:\\n$$\\sum \\tau_A = 0 \\implies N_B \\times L - W \\times \\left(\\frac{L}{2}\\right) = 0$$\\n$$N_B \\times 4 - 100 \\times 2 = 0 \\implies 4 N_B = 200 \\implies N_B = 50\\text{ N}$$\\n3. Terapkan kesetimbangan translasi vertikal:\\n$$\\sum F_y = 0 \\implies N_A + N_B - W = 0$$\\n$$N_A + 50 - 100 = 0 \\implies N_A = 50\\text{ N}$$\\nJadi, $N_A = 50\\text{ N}$ dan $N_B = 50\\text{ N}$.",
      "pitfalls": "Karena geometri batang homogen dan tumpuan simetris, beban terbagi sama besar masing-masing $50\\text{ N}$."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah silinder pejal homogen diletakkan mendatar di atas lantai horizontal yang rata. Ketika silinder digelindingkan sedikit ke posisi baru, ketinggian titik berat silinder tidak berubah dan silinder langsung berada dalam keadaan setimbang di posisi barunya tersebut tanpa kecenderungan kembali ke posisi awal. Keadaan ini merupakan contoh dari...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kesetimbangan labil",
      "Kesetimbangan stabil",
      "Kesetimbangan netral (indifferen)",
      "Kesetimbangan dinamis dipercepat",
      "Kesetimbangan metastabil"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kesetimbangan netral (indifferen) adalah kondisi kesetimbangan di mana gangguan atau pergeseran posisi tidak mengubah ketinggian titik berat benda, sehingga energi potensialnya tetap konstan dan benda tetap berada dalam keadaan setimbang di posisi yang baru.",
      "steps": "1. Identifikasi lintasan titik berat: Saat silinder bergeser di lantai datar, jarak pusat massa ke lantai selalu konstan setinggi jari-jari $R$.\\n2. Tidak ada gaya pemulih maupun gaya pengguling yang muncul.\\n3. Kesimpulan: Sifat ini merupakan definisi fisika dari kesetimbangan netral (indifferen).",
      "pitfalls": "Kerap menyamakan dengan kesetimbangan stabil. Pada kesetimbangan stabil, benda harus memiliki kecenderungan kembali ke posisi semula. Pada kesetimbangan netral, benda nyaman diam di posisi barunya."
    }
  },
  {
    "id": "fis-din-rot-kesetimbangan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah batang homogen $AB$ memiliki berat $W = 120\\text{ N}$ dan panjang total $L = 3\\text{ m}$. Batang tersebut ditumpu pada titik penumpu $C$ yang berjarak $1\\text{ m}$ dari ujung $A$. Sebuah beban $W_1$ digantungkan tepat di ujung $A$ agar batang dapat berada dalam posisi setimbang horizontal. Besar beban $W_1$ tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ N}$",
      "$40\\text{ N}$",
      "$60\\text{ N}$",
      "$80\\text{ N}$",
      "$120\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya berat batang homogen bekerja di titik tengah batang ($L/2 = 1,5\\text{ m}$ dari $A$). Ambil poros rotasi di titik penumpu $C$ dan terapkan syarat kesetimbangan rotasi: $\\sum \\tau_C = 0$.",
      "steps": "1. Tentukan lengan momen masing-masing gaya terhadap penumpu $C$:\\n- Jarak beban $W_1$ di ujung $A$ ke $C$: $d_1 = 1\\text{ m}$ (di sebelah kiri $C$).\\n- Titik berat batang berada $1,5\\text{ m}$ dari $A$. Karena $C$ berada $1\\text{ m}$ dari $A$, jarak titik berat batang ke $C$ adalah $d_W = 1,5 - 1,0 = 0,5\\text{ m}$ (di sebelah kanan $C$).\\n2. Terapkan kesetimbangan momen gaya terhadap $C$:\\n$$\\sum \\tau_C = 0 \\implies W_1 \\times d_1 = W \\times d_W$$\\n$$W_1 \\times 1\\text{ m} = 120\\text{ N} \\times 0,5\\text{ m}$$\\n$$W_1 = 60\\text{ N}$$\\nJadi, besar beban $W_1$ yang harus digantung adalah $60\\text{ N}$.",
      "pitfalls": "Kekeliruan paling sering adalah menggunakan panjang sisa batang ($2\\text{ m}$) sebagai lengan gaya berat, padahal gaya berat selalu terpusat di titik tengah batang ($1,5\\text{ m}$ dari ujung $A$)."
    }
  }
];
