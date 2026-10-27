/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Kesetimbangan Benda Tegar (fis-din-rot-kesetimbangan)
 * Slug: kesetimbangan-benda-tegar
 * Indikator: Syarat kesetimbangan lengkap: resultan gaya nol dan resultan momen gaya nol.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-kesetimbangan";
  const subTopicSlug = "kesetimbangan-benda-tegar";
  const questions = [
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
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kesetimbangan statis benda tegar memerlukan ketiadaan percepatan translasi (kesetimbangan translasi: $\\sum \\vec{F} = 0$) sekaligus ketiadaan percepatan sudut (kesetimbangan rotasi: $\\sum \\vec{\\tau} = 0$)."
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
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kesetimbangan stabil (mantap) terjadi ketika gangguan kecil menyebabkan titik berat benda naik sehingga memunculkan gaya/torsi pemulih yang berusaha mengembalikan benda ke posisi setimbang awalnya."
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
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pada balok horizontal simetris yang ditumpu di kedua ujungnya tanpa ada beban tambahan di luar pusat massa, beban total terbagi rata secara identik ke kedua penumpu: $N_A = N_B = \\frac{W}{2}$. **Tips:** Karena geometri batang homogen dan tumpuan simetris, beban terbagi sama besar masing-masing $50\\text{ N}$."
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
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Kesetimbangan netral (indifferen) adalah kondisi kesetimbangan di mana gangguan atau pergeseran posisi tidak mengubah ketinggian titik berat benda, sehingga energi potensialnya tetap konstan dan benda tetap berada dalam keadaan setimbang di posisi yang baru. **Tips:** Kerap menyamakan dengan kesetimbangan stabil."
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
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gaya berat batang homogen bekerja di titik tengah batang ($L/2 = 1,5\\text{ m}$ dari $A$). Ambil poros rotasi di titik penumpu $C$ dan terapkan syarat kesetimbangan rotasi: $\\sum \\tau_C = 0$."
  },
  {
    "id": "fis-din-rot-kesetimbangan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah tangga homogen dengan panjang $L$ dan berat $W = 100\\text{ N}$ bersandar pada dinding vertikal yang licin (tanpa gesekan) dan bertumpu pada lantai horizontal yang kasar. Sudut kemiringan tangga terhadap lantai adalah $\\theta = 53^\\circ$ (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Jika tangga tersebut berada dalam kondisi tepat akan tergelincir, nilai koefisien gesekan statis antara lantai dan tangga ($\\mu_s$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,250$",
      "$0,375$",
      "$0,500$",
      "$0,625$",
      "$0,750$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Terapkan syarat kesetimbangan statis: (1) $\\sum F_y = 0 \\implies N_L = W$, (2) $\\sum F_x = 0 \\implies f_s = N_D$, dan (3) $\\sum \\tau = 0$ terhadap titik tumpu lantai. Nilai batas tepat akan tergelincir mensyaratkan $f_s = \\mu_s N_L = \\mu_s W$, yang menghasilkan rumus umum $\\mu_s = \\frac{1}{2 \\tan\\theta}$.",
      "steps": "1. Kesetimbangan gaya vertikal:\\n$$N_L = W = 100\\text{ N}$$\\n2. Kesetimbangan momen gaya terhadap kaki tangga di lantai:\\n$$\\sum \\tau = N_D (L \\sin 53^\\circ) - W \\left(\\frac{L}{2} \\cos 53^\\circ\\right) = 0$$\\n$$N_D \\sin 53^\\circ = \\frac{1}{2} W \\cos 53^\\circ \\implies N_D = \\frac{W \\cos 53^\\circ}{2 \\sin 53^\\circ}$$\\n3. Kesetimbangan gaya horizontal pada kondisi tepat akan tergelincir ($f_s = \\mu_s N_L$):\\n$$f_s = N_D \\implies \\mu_s W = \\frac{W \\cos 53^\\circ}{2 \\sin 53^\\circ}$$\\n$$\\mu_s = \\frac{\\cos 53^\\circ}{2 \\sin 53^\\circ} = \\frac{0,6}{2 \\times 0,8} = \\frac{0,6}{1,6} = \\frac{3}{8} = 0,375$$\\nJadi, koefisien gesekan statis antara lantai dan tangga adalah $0,375$.",
      "pitfalls": "Kerap lupa faktor $\\frac{1}{2}$ dari titik berat tangga homogen sehingga menghitung $\\mu_s = \\frac{1}{\\tan 53^\\circ} = 0,750$."
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Terapkan syarat kesetimbangan statis: (1) $\\sum F_y = 0 \\implies N_L = W$, (2) $\\sum F_x = 0 \\implies f_s = N_D$, dan (3) $\\sum \\tau = 0$ terhadap titik tumpu lantai. Nilai batas tepat akan tergelincir mensyaratkan $f_s = \\mu_s N_L = \\mu_s W$, yang menghasilkan rumus umum $\\mu_s = \\frac{1}{2 \\tan\\theta}$."
  },
  {
    "id": "fis-din-rot-kesetimbangan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah batang homogen $AB$ bermassa $M = 10\\text{ kg}$ dan panjang $L = 2\\text{ m}$ dipasang engsel pada dinding vertikal di titik $A$. Batang dipertahankan pada posisi horizontal oleh seutas kawat ringan yang menghubungkan ujung $B$ ke dinding di atas titik $A$, membentuk sudut elevasi $\\theta = 30^\\circ$ terhadap batang. Sebuah beban bermassa $m = 20\\text{ kg}$ digantungkan tepat di ujung $B$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tegangan kawat ($T$) penahan batang tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$300\\text{ N}$",
      "$400\\text{ N}$",
      "$500\\text{ N}$",
      "$600\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan titik engsel $A$ sebagai poros putar agar gaya reaksi engsel tidak masuk ke dalam perhitungan torsi (lengannya nol). Terapkan syarat kesetimbangan rotasi: $\\sum \\tau_A = 0$.",
      "steps": "1. Identifikasi gaya-gaya pemutar terhadap engsel $A$:\\n- Berat batang: $W_b = M g = 10 \\times 10 = 100\\text{ N}$, bekerja di titik tengah ($d_b = 1\\text{ m}$ dari $A$) memutar searah jarum jam (CW).\\n- Berat beban gantung: $W_m = m g = 20 \\times 10 = 200\\text{ N}$, bekerja di ujung $B$ ($d_m = 2\\text{ m}$ dari $A$) memutar CW.\\n- Komponen tegangan kawat tegak lurus batang: $T \\sin 30^\\circ$ di ujung $B$ ($L = 2\\text{ m}$) memutar berlawanan jarum jam (CCW).\\n2. Terapkan kesetimbangan torsi terhadap $A$:\\n$$\\sum \\tau_A = 0 \\implies (T \\sin 30^\\circ) L = W_b \\left(\\frac{L}{2}\\right) + W_m L$$\\n$$(T \\times 0,5)(2) = (100)(1) + (200)(2)$$\\n$$1,0 T = 100 + 400 = 500\\text{ N}$$\\nJadi, besar tegangan kawat adalah $500\\text{ N}$.",
      "pitfalls": "Kerap lupa memperhitungkan berat batang sendiri ($W_b = 100\\text{ N}$), atau salah mengalokasikan letak titik berat batang homogen yang berada di tengah batang ($1\\text{ m}$ dari poros)."
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan titik engsel $A$ sebagai poros putar agar gaya reaksi engsel tidak masuk ke dalam perhitungan torsi (lengannya nol). Terapkan syarat kesetimbangan rotasi: $\\sum \\tau_A = 0$."
  },
  {
    "id": "fis-din-rot-kesetimbangan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah silinder pejal bermassa $M = 50\\text{ kg}$ dan berjari-jari $R = 25\\text{ cm}$ berada di lantai mendatar di depan sebuah undakan tangga vertikal setinggi $h = 5\\text{ cm}$. Sebuah gaya horizontal $F$ dikerjakan tepat pada sumbu poros pusat silinder untuk menariknya melewati undakan. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya horizontal minimum $F$ agar silinder tepat mulai terangkat menaiki undakan tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$250\\text{ N}$",
      "$300\\text{ N}$",
      "$375\\text{ N}$",
      "$500\\text{ N}$",
      "$625\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Saat silinder tepat akan terangkat menaiki undakan, titik tumpu rotasi sesaat berpindah ke tepi undakan ($P$). Gaya normal lantai menjadi nol ($N_{\\text{lantai}} = 0$). Syarat terangkat adalah torsi gaya penarik $F$ harus mengimbangi torsi gaya gravitasi $W$ terhadap titik tumpu $P$.",
      "steps": "1. Hitung berat silinder:\\n$$W = M g = 50\\text{ kg} \\times 10\\text{ m/s}^2 = 500\\text{ N}$$\\n2. Tentukan lengan momen masing-masing gaya terhadap titik sudut undakan $P$:\\n- Jarak vertikal dari poros pusat ke titik $P$:\\n$$d_F = R - h = 25\\text{ cm} - 5\\text{ cm} = 20\\text{ cm} = 0,20\\text{ m}$$\\n- Jarak horizontal dari pusat massa ke titik $P$ (menggunakan teorema Pythagoras):\\n$$d_W = \\sqrt{R^2 - (R - h)^2} = \\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15\\text{ cm} = 0,15\\text{ m}$$\\n3. Terapkan kesetimbangan momen gaya terhadap $P$:\\n$$\\sum \\tau_P = 0 \\implies F \\times d_F = W \\times d_W$$\\n$$F \\times 0,20\\text{ m} = 500\\text{ N} \\times 0,15\\text{ m}$$\\n$$0,20 F = 75 \\implies F = \\frac{75}{0,20} = 375\\text{ N}$$\\nJadi, gaya penarik horizontal minimum adalah $375\\text{ N}$.",
      "pitfalls": "Kekeliruan paling umum adalah menggunakan jari-jari $R$ sebagai lengan gaya penarik atau berat, bukan jarak tegak lurus terhadap garis kerja gaya ke titik tumpu undakan."
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Saat silinder tepat akan terangkat menaiki undakan, titik tumpu rotasi sesaat berpindah ke tepi undakan ($P$). Gaya normal lantai menjadi nol ($N_{\\text{lantai}} = 0$). Syarat terangkat adalah torsi gaya penarik $F$ harus mengimbangi torsi gaya gravitasi $W$ terhadap titik tumpu $P$."
  },
  {
    "id": "fis-din-rot-kesetimbangan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah tangga homogen dengan panjang $L = 5\\text{ m}$ dan berat $W_t = 100\\text{ N}$ bersandar pada dinding vertikal licin dengan sudut kemiringan $\\theta = 53^\\circ$ terhadap lantai mendatar (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Koefisien gesekan statis antara lantai dan tangga adalah $\\mu_s = 0,50$. Seorang pekerja dengan berat $W_p = 500\\text{ N}$ mulai menaiki tangga tersebut dari dasar. Jarak maksimum $x$ sepanjang tangga yang dapat dicapai pekerja sebelum tangga tepat akan tergelincir adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2,5\\text{ m}$",
      "$3,0\\text{ m}$",
      "$3,5\\text{ m}$",
      "$4,0\\text{ m}$",
      "$4,5\\text{ m}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Terapkan kesetimbangan statis lengkap. Pada ambang batas tergelincir, gaya gesek statis lantai mencapai nilai maksimum: $f_{s,\\text{maks}} = \\mu_s N_L$. Dari kesetimbangan horizontal, gaya reaksi dinding adalah $N_D = f_{s,\\text{maks}}$. Nilai $x$ dicari dari kesetimbangan momen gaya terhadap kaki tangga di lantai.",
      "steps": "1. Kesetimbangan gaya vertikal:\\n$$N_L = W_t + W_p = 100\\text{ N} + 500\\text{ N} = 600\\text{ N}$$\\n2. Gaya reaksi normal dinding pada kondisi batas tergelincir:\\n$$N_D = f_{s,\\text{maks}} = \\mu_s N_L = 0,50 \\times 600\\text{ N} = 300\\text{ N}$$\\n3. Terapkan kesetimbangan momen gaya terhadap dasar tangga di lantai (titik $A$):\\n$$\\sum \\tau_A = 0$$\\n$$N_D (L \\sin 53^\\circ) - W_t \\left(\\frac{L}{2} \\cos 53^\\circ\\right) - W_p (x \\cos 53^\\circ) = 0$$\\n$$(300)(5 \\times 0,8) - (100)(2,5 \\times 0,6) - (500)(x \\times 0,6) = 0$$\\n$$(300)(4,0) - (100)(1,5) - 300 x = 0$$\\n$$1.200 - 150 - 300 x = 0$$\\n$$1.050 = 300 x \\implies x = \\frac{1.050}{300} = 3,5\\text{ m}$$\\nJadi, jarak maksimum yang dapat dinaiki pekerja adalah $3,5\\text{ m}$.",
      "pitfalls": "Kerap lupa menjumlahkan berat pekerja ke dalam gaya normal lantai ($N_L = W_t + W_p$). Keberadaan pekerja di tangga justru menambah gaya tekan vertikal ke lantai sehingga gaya gesek maksimum lantai meningkat."
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Terapkan kesetimbangan statis lengkap. Pada ambang batas tergelincir, gaya gesek statis lantai mencapai nilai maksimum: $f_{s,\\text{maks}} = \\mu_s N_L$. Dari kesetimbangan horizontal, gaya reaksi dinding adalah $N_D = f_{s,\\text{maks}}$. Nilai $x$ dicari dari kesetimbangan momen gaya terhadap kaki tangga di lantai. **Tips:** Kerap lupa menjumlahkan berat pekerja ke dalam gaya normal lantai ($N_L = W_t + W_p$)."
  },
  {
    "id": "fis-din-rot-kesetimbangan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-kesetimbangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah lampu gantung bermassa $m = 3\\text{ kg}$ ditahan oleh dua utas tali ringan $T_1$ dan $T_2$ dalam posisi setimbang statis. Tali 1 membentuk sudut elevasi $37^\\circ$ terhadap horizontal ke arah kiri atas, sedangkan tali 2 membentuk sudut elevasi $53^\\circ$ terhadap horizontal ke arah kanan atas (kedua tali saling tegak lurus). Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan tali 1 ($T_1$) dan tali 2 ($T_2$) berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T_1 = 18\\text{ N}$ dan $T_2 = 24\\text{ N}$",
      "$T_1 = 24\\text{ N}$ dan $T_2 = 18\\text{ N}$",
      "$T_1 = 15\\text{ N}$ dan $T_2 = 20\\text{ N}$",
      "$T_1 = 12\\text{ N}$ dan $T_2 = 16\\text{ N}$",
      "$T_1 = 20\\text{ N}$ dan $T_2 = 25\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Karena sudut tali terhadap horizontal adalah $37^\\circ$ dan $53^\\circ$, sudut antara kedua tali adalah $180^\\circ - (37^\\circ + 53^\\circ) = 90^\\circ$ (tegak lurus). Kedua tegangan tali dapat diuraikan pada sumbu-$x$ dan sumbu-$y$ untuk memenuhi kesetimbangan partikel $\\sum F_x = 0$ dan $\\sum F_y = 0$.",
      "steps": "1. Berat beban gantung:\\n$$W = m g = 3\\text{ kg} \\times 10\\text{ m/s}^2 = 30\\text{ N}$$\\n2. Kesetimbangan sumbu horizontal ($x$):\\n$$\\sum F_x = 0 \\implies T_1 \\cos 37^\\circ = T_2 \\cos 53^\\circ$$\\n$$0,8 T_1 = 0,6 T_2 \\implies T_2 = \\frac{4}{3} T_1$$\\n3. Kesetimbangan sumbu vertikal ($y$):\\n$$\\sum F_y = 0 \\implies T_1 \\sin 37^\\circ + T_2 \\sin 53^\\circ = W$$\\n$$0,6 T_1 + 0,8 \\left(\\frac{4}{3} T_1\\right) = 30$$\\n$$0,6 T_1 + 1,067 T_1 = 30 \\implies \\frac{5}{3} T_1 = 30$$\\n$$T_1 = 30 \\times \\frac{3}{5} = 18\\text{ N}$$\\n4. Hitung tegangan tali kedua:\\n$$T_2 = \\frac{4}{3} (18\\text{ N}) = 24\\text{ N}$$\\n(Bisa diverifikasi dengan resultan ortogonal: $\\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30\\text{ N} = W$, konsisten).\\nJadi, $T_1 = 18\\text{ N}$ dan $T_2 = 24\\text{ N}$.",
      "pitfalls": "Kerap tertukar antara $T_1$ dan $T_2$. Tali dengan sudut lebih curam terhadap horizontal ($53^\\circ$) memikul komponen beban vertikal yang lebih besar sehingga nilai tegangannya lebih tinggi ($24\\text{ N} > 18\\text{ N}$)."
    },
    "subTopicSlug": "kesetimbangan-benda-tegar",
    "bab": "Dinamika",
    "subBab": "Kesetimbangan Benda Tegar",
    "subTopic": "Kesetimbangan Benda Tegar",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Karena sudut tali terhadap horizontal adalah $37^\\circ$ dan $53^\\circ$, sudut antara kedua tali adalah $180^\\circ - (37^\\circ + 53^\\circ) = 90^\\circ$ (tegak lurus). Kedua tegangan tali dapat diuraikan pada sumbu-$x$ dan sumbu-$y$ untuk memenuhi kesetimbangan partikel $\\sum F_x = 0$ dan $\\sum F_y = 0$. **Tips:** Kerap tertukar antara $T_1$ dan $T_2$."
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
