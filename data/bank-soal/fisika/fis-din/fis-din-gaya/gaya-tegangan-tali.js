/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Gaya dan Gerak (fis-din-gaya)
 * Sub-Bab: Gaya Tegangan Tali (fis-din-gaya-tegangan)
 * Slug: gaya-tegangan-tali
 * Indikator: Gaya tegangan tali pada sistem katrol Atwood, benda bergandeng, dan gerak vertikal bertali.
 * 
 * Total Butir Soal: 20 (Mudah: 9, Sedang: 11, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-gaya-tegangan";
  const subTopicSlug = "gaya-tegangan-tali";
  const questions = [
  {
    "id": "fis-din-gaya-tegangan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah lampu gantung bermassa $m = 8\\text{ kg}$ tergantung diam pada seutas kawat vertikal tak bermassa yang terikat kuat pada langit-langit ruangan. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tegangan pada kawat tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ N}$",
      "$40\\text{ N}$",
      "$80\\text{ N}$",
      "$100\\text{ N}$",
      "$160\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada benda yang berada dalam keadaan diam (kesetimbangan statis), resultan gaya yang bekerja adalah nol: $\\sum F_y = 0$. Gaya tegangan kawat ke atas mengimbangi gaya gravitasi (berat) lampu ke bawah.",
      "steps": "1. Identifikasi gaya-gaya yang bekerja pada lampu:\\n- Gaya berat ke bawah: $W = m g = 8 \\times 10 = 80\\text{ N}$.\\n- Gaya tegangan kawat ke atas: $T$.\\n2. Terapkan Hukum I Newton:\\n$$\\sum F_y = T - W = 0$$\\n$$T = W = 80\\text{ N}$$\\nJadi, besar gaya tegangan pada kawat adalah $80\\text{ N}$.",
      "pitfalls": "Tegangan kawat bukan dua kali lipat gaya berat. Pasangan aksi-reaksi terjadi antara kawat dengan langit-langit dan kawat dengan lampu, sehingga pada kondisi statis nilai tegangan tali tunggal sama dengan berat beban."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pada benda yang berada dalam keadaan diam (kesetimbangan statis), resultan gaya yang bekerja adalah nol: $\\sum F_y = 0$. Gaya tegangan kawat ke atas mengimbangi gaya gravitasi (berat) lampu ke bawah. **Tips:** Tegangan kawat bukan dua kali lipat gaya berat."
  },
  {
    "id": "fis-din-gaya-tegangan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua buah balok $A$ ($m_A = 2\\text{ kg}$) dan $B$ ($m_B = 3\\text{ kg}$) terletak di atas lantai mendatar yang licin tanpa gesekan. Kedua balok dihubungkan oleh seutas tali ringan tak bermassa. Balok $B$ ditarik oleh gaya mendatar konstan $F = 20\\text{ N}$ ke kanan menjauhi balok $A$. Besar tegangan tali penghubung kedua balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ N}$",
      "$8\\text{ N}$",
      "$10\\text{ N}$",
      "$12\\text{ N}$",
      "$20\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Terapkan Hukum II Newton pada sistem keseluruhan untuk menentukan percepatan bersama: $a = \\frac{F}{m_A + m_B}$. Kemudian tinjau diagram benda bebas balok $A$ di mana tegangan tali $T$ menjadi satu-satunya gaya penggerak balok $A$: $T = m_A a$.",
      "steps": "1. Hitung percepatan gerak kedua balok:\\n$$a = \\frac{F}{m_A + m_B} = \\frac{20}{2 + 3} = \\frac{20}{5} = 4\\text{ m/s}^2$$\\n2. Tinjau balok $A$ secara terpisah:\\n$$\\sum F_{x,A} = T = m_A a$$\\n$$T = 2 \\times 4 = 8\\text{ N}$$\\n(Bisa diverifikasi pada balok $B$: $F - T = m_B a \\implies 20 - 8 = 3 \\times 4 = 12\\text{ N}$, konsisten).\\nJadi, besar tegangan tali penghubung adalah $8\\text{ N}$.",
      "pitfalls": "Kerap dianggap tegangan tali sama dengan gaya tarik $F = 20\\text{ N}$. Sebagian gaya luar $F$ digunakan untuk mempercepat massa $B$, sehingga tegangan tali yang diteruskan ke balok $A$ hanyalah fraksi proporsional terhadap massa $A$ ($T = \\frac{m_A}{m_A+m_B} F$)."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Terapkan Hukum II Newton pada sistem keseluruhan untuk menentukan percepatan bersama: $a = \\frac{F}{m_A + m_B}$. Kemudian tinjau diagram benda bebas balok $A$ di mana tegangan tali $T$ menjadi satu-satunya gaya penggerak balok $A$: $T = m_A a$."
  },
  {
    "id": "fis-din-gaya-tegangan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah ember berisi adukan semen bermassa total $m = 5\\text{ kg}$ ditarik vertikal ke atas menggunakan seutas tali dengan percepatan konstan $a = 2\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar tegangan tali penarik adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ N}$",
      "$50\\text{ N}$",
      "$60\\text{ N}$",
      "$70\\text{ N}$",
      "$100\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Berdasarkan Hukum II Newton pada sumbu vertikal, tegangan tali harus melawan gaya berat sekaligus memberikan resultan gaya untuk percepatan ke atas: $\\sum F_y = T - m g = m a \\implies T = m(g + a)$.",
      "steps": "1. Identifikasi gaya vertikal:\\n- Berat ember: $W = m g = 5 \\times 10 = 50\\text{ N}$ (ke bawah).\\n- Tegangan tali: $T$ (ke atas).\\n2. Gunakan persamaan Hukum II Newton:\\n$$T - W = m a$$\\n$$T = m g + m a = m(g + a)$$\\n3. Hitung nilainya:\\n$$T = 5(10 + 2) = 5 \\times 12 = 60\\text{ N}$$\\nJadi, tegangan tali penarik adalah $60\\text{ N}$.",
      "pitfalls": "Jangan mengurangkan percepatan ($T = m(g - a) = 40\\text{ N}$). Pengurangan berlaku jika ember ditarik ke atas dengan gerak perlambatan atau diturunkan ke bawah dengan percepatan."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum II Newton pada sumbu vertikal, tegangan tali harus melawan gaya berat sekaligus memberikan resultan gaya untuk percepatan ke atas: $\\sum F_y = T - m g = m a \\implies T = m(g + a)$."
  },
  {
    "id": "fis-din-gaya-tegangan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah pesawat Atwood sederhana terdiri dari dua beban bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ yang dihubungkan oleh seutas tali ringan melalui katrol licin tanpa gesekan (massa katrol diabaikan). Jika sistem dilepaskan dari keadaan diam dan $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua beban tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1\\text{ m/s}^2$",
      "$2\\text{ m/s}^2$",
      "$3\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pesawat Atwood dengan katrol licin tak bermassa, selisih gaya berat beban bekerja sebagai gaya penggerak netto untuk menggerakkan total massa kedua benda: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
      "steps": "1. Identifikasi massa beban:\\n$m_1 = 3\\text{ kg}$ (beban yang bergerak turun) dan $m_2 = 2\\text{ kg}$ (beban yang bergerak naik).\\n2. Terapkan rumus percepatan pesawat Atwood:\\n$$a = \\frac{m_1 - m_2}{m_1 + m_2} g$$\\n$$a = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$\\nJadi, percepatan gerak beban adalah $2\\text{ m/s}^2$.",
      "pitfalls": "Kerap salah membagi selisih gaya penggerak dengan hanya salah satu massa beban, bukan total massa sistem ($m_1 + m_2$)."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pada pesawat Atwood dengan katrol licin tak bermassa, selisih gaya berat beban bekerja sebagai gaya penggerak netto untuk menggerakkan total massa kedua benda: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$. **Tips:** Kerap salah membagi selisih gaya penggerak dengan hanya salah satu massa beban, bukan total massa sistem ($m_1 + m_2$)."
  },
  {
    "id": "fis-din-gaya-tegangan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Perhatikan pernyataan-pernyataan berikut mengenai karakteristik tali ideal dalam persoalan mekanika klasik:\\n1. Tali diasumsikan tidak memiliki massa ($m_{\\text{tali}} = 0$) dan tidak dapat bertambah panjang (tak teregang).\\n2. Gaya tegangan tali selalu berarah menarik benda, menjauhi titik ikatan pada benda yang bersangkutan.\\n3. Besar tegangan tali ideal seragam di sepanjang tali yang melewati katrol licin tak bermassa.\\nPernyataan yang BENAR adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 dan 2 saja",
      "1 dan 3 saja",
      "2 dan 3 saja",
      "1 saja",
      "1, 2, dan 3"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Model tali ideal memiliki karakteristik: tak bermassa ($m = 0$), tidak elastis/tidak melar (panjang konstan), selalu mentransmisikan gaya tarikan (tidak bisa mendorong), dan besarnya tegangan sama di semua titik.",
      "steps": "1. Pernyataan 1 benar: Model standar mengasumsikan tali tak bermassa dan inextensible sehingga percepatan di kedua ujungnya identik.\\n2. Pernyataan 2 benar: Tali hanya dapat mentransmisikan gaya tarik, arah vektor gayanya selalu menjauhi benda yang diikat.\\n3. Pernyataan 3 benar: Karena tali dan katrol licin tak bermassa, tidak ada torsi inersia yang mengonsumsi gaya, sehingga tegangan di kedua sisi katrol bernilai persis sama.\\nDengan demikian, semua pernyataan (1, 2, dan 3) adalah benar.",
      "pitfalls": "Tali tidak pernah dapat memberikan gaya tekan (mendorong). Tali hanya dapat meregang tegang dan menarik benda yang terhubung dengannya."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Model tali ideal memiliki karakteristik: tak bermassa ($m = 0$), tidak elastis/tidak melar (panjang konstan), selalu mentransmisikan gaya tarikan (tidak bisa mendorong), dan besarnya tegangan sama di semua titik. **Tips:** Tali tidak pernah dapat memberikan gaya tekan (mendorong)."
  },
  {
    "id": "fis-din-gaya-tegangan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Dua beban bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ dihubungkan dengan seutas tali tak bermassa melalui sebuah katrol licin ideal (massa dan gesekan katrol diabaikan). Ketika kedua benda dilepas dan bergerak bebas, percepatan gravitasi bumi $g = 10\\text{ m/s}^2$. Besar tegangan tali penghubung selama benda bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ N}$",
      "$24\\text{ N}$",
      "$25\\text{ N}$",
      "$30\\text{ N}$",
      "$50\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pesawat Atwood, tegangan tali selama bergerak bernilai: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$. Nilai tegangan ini berada di antara berat beban ringan ($m_2 g = 20\\text{ N}$) dan beban berat ($m_1 g = 30\\text{ N}$).",
      "steps": "1. Tentukan percepatan sistem:\\n$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$\\n2. Tinjau balok $m_2$ yang bergerak naik ($a = 2\\text{ m/s}^2$ ke atas):\\n$$\\sum F_y = T - m_2 g = m_2 a$$\\n$$T = m_2(g + a) = 2(10 + 2) = 2 \\times 12 = 24\\text{ N}$$\\n(Atau tinjau $m_1$ yang turun: $m_1 g - T = m_1 a \\implies T = 3(10 - 2) = 24\\text{ N}$).\\nJadi, besar tegangan tali adalah $24\\text{ N}$.",
      "pitfalls": "Kerap mengira tegangan tali adalah rata-rata aritmetika dari berat kedua beban ($\\frac{30 + 20}{2} = 25\\text{ N}$) atau sama dengan selisih beratnya ($10\\text{ N}$). Tegangan tali dinamika diturunkan dari Hukum II Newton."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada pesawat Atwood, tegangan tali selama bergerak bernilai: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$. Nilai tegangan ini berada di antara berat beban ringan ($m_2 g = 20\\text{ N}$) dan beban berat ($m_1 g = 30\\text{ N}$)."
  },
  {
    "id": "fis-din-gaya-tegangan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Balok $A$ ($m_A = 3\\text{ kg}$) diletakkan di atas meja horizontal kasar dengan koefisien gesekan kinetis $\\mu_k = 0,20$. Balok $A$ dihubungkan oleh seutas tali ringan melalui katrol licin di tepi meja ke balok $B$ ($m_B = 2\\text{ kg}$) yang tergantung bebas. Jika sistem dilepas dari keadaan diam dan $g = 10\\text{ m/s}^2$, percepatan sistem $a$ dan besar tegangan tali $T$ berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$a = 2,8\\text{ m/s}^2$ dan $T = 14,4\\text{ N}$",
      "$a = 2,8\\text{ m/s}^2$ dan $T = 20,0\\text{ N}$",
      "$a = 4,0\\text{ m/s}^2$ dan $T = 12,0\\text{ N}$",
      "$a = 2,0\\text{ m/s}^2$ dan $T = 16,0\\text{ N}$",
      "$a = 3,5\\text{ m/s}^2$ dan $T = 10,5\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya penggerak sistem berasal dari berat balok gantung $B$ ($W_B = m_B g$), sedangkan gaya hambat berasal dari gesekan kinetis pada balok $A$ ($f_k = \\mu_k m_A g$). Percepatan: $a = \\frac{W_B - f_k}{m_A + m_B}$.",
      "steps": "1. Hitung gaya gesek kinetis pada balok $A$:\\n$$f_k = \\mu_k m_A g = 0,20 \\times 3 \\times 10 = 6\\text{ N}$$\\n2. Terapkan Hukum II Newton untuk sistem:\\n$$a = \\frac{m_B g - f_k}{m_A + m_B} = \\frac{(2)(10) - 6}{3 + 2} = \\frac{20 - 6}{5} = \\frac{14}{5} = 2,8\\text{ m/s}^2$$\\n3. Cari tegangan tali dari diagram balok gantung $B$:\\n$$\\sum F_{y,B} = m_B g - T = m_B a$$\\n$$T = m_B (g - a) = 2(10 - 2,8) = 2 \\times 7,2 = 14,4\\text{ N}$$\\nJadi, $a = 2,8\\text{ m/s}^2$ dan $T = 14,4\\text{ N}$.",
      "pitfalls": "Kekeliruan terjadi jika menganggap tegangan tali tepat sama dengan berat beban gantung ($20\\text{ N}$). Karena beban $B$ bergerak dipercepat ke bawah, tegangan tali pasti lebih kecil dari berat beban $B$ ($T < m_B g$)."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gaya penggerak sistem berasal dari berat balok gantung $B$ ($W_B = m_B g$), sedangkan gaya hambat berasal dari gesekan kinetis pada balok $A$ ($f_k = \\mu_k m_A g$). Percepatan: $a = \\frac{W_B - f_k}{m_A + m_B}$. **Tips:** Kekeliruan terjadi jika menganggap tegangan tali tepat sama dengan berat beban gantung ($20\\text{ N}$)."
  },
  {
    "id": "fis-din-gaya-tegangan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah beban bermassa $m = 6\\text{ kg}$ digantung dalam kondisi setimbang pada simpul pertemuan tiga utas tali. Tali 1 terikat horizontal ke dinding di sebelah kiri, sedangkan tali 2 terikat ke langit-langit membentuk sudut kemiringan $\\theta = 53^\\circ$ terhadap arah horizontal (diketahui $\\sin 53^\\circ = 0,8$ dan $\\cos 53^\\circ = 0,6$). Jika $g = 10\\text{ m/s}^2$, besar tegangan tali 1 ($T_1$) dan tali 2 ($T_2$) berturut-turut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T_1 = 45\\text{ N}$ dan $T_2 = 75\\text{ N}$",
      "$T_1 = 75\\text{ N}$ dan $T_2 = 45\\text{ N}$",
      "$T_1 = 60\\text{ N}$ dan $T_2 = 100\\text{ N}$",
      "$T_1 = 36\\text{ N}$ dan $T_2 = 48\\text{ N}$",
      "$T_1 = 45\\text{ N}$ dan $T_2 = 60\\text{ N}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan statis partikel pada simpul tali: $\\sum F_x = 0$ dan $\\sum F_y = 0$. Uraikan tegangan tali miring $T_2$ ke dalam komponen horizontal ($T_2 \\cos 53^\\circ$) dan vertikal ($T_2 \\sin 53^\\circ$).",
      "steps": "1. Berat beban yang digantung:\\n$$W = m g = 6 \\times 10 = 60\\text{ N}$$\\n2. Tinjau kesetimbangan sumbu vertikal ($y$) pada simpul:\\n$$\\sum F_y = T_2 \\sin 53^\\circ - W = 0$$\\n$$T_2 (0,8) = 60 \\implies T_2 = \\frac{60}{0,8} = 75\\text{ N}$$\\n3. Tinjau kesetimbangan sumbu horizontal ($x$):\\n$$\\sum F_x = T_2 \\cos 53^\\circ - T_1 = 0$$\\n$$T_1 = T_2 \\cos 53^\\circ = 75 \\times 0,6 = 45\\text{ N}$$\\nJadi, $T_1 = 45\\text{ N}$ dan $T_2 = 75\\text{ N}$.",
      "pitfalls": "Kerap tertukar menguraikan trigonometri sin dan cos, di mana $\\sin 53^\\circ$ adalah proyeksi sumbu vertikal dan $\\cos 53^\\circ$ adalah proyeksi sumbu horizontal."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Syarat kesetimbangan statis partikel pada simpul tali: $\\sum F_x = 0$ dan $\\sum F_y = 0$. Uraikan tegangan tali miring $T_2$ ke dalam komponen horizontal ($T_2 \\cos 53^\\circ$) dan vertikal ($T_2 \\sin 53^\\circ$)."
  },
  {
    "id": "fis-din-gaya-tegangan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Tiga buah balok $A$ ($m_A = 1\\text{ kg}$), $B$ ($m_B = 2\\text{ kg}$), dan $C$ ($m_C = 3\\text{ kg}$) terletak berurutan pada lantai horizontal licin. Balok $A$ dan $B$ dihubungkan oleh tali 1, sedangkan balok $B$ dan $C$ dihubungkan oleh tali 2. Balok $C$ kemudian ditarik oleh gaya horizontal konstan $F = 24\\text{ N}$ menjauhi balok yang lain. Perbandingan besar tegangan tali 1 terhadap tali 2 ($T_1 : T_2$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 2$",
      "$1 : 3$",
      "$2 : 3$",
      "$1 : 5$",
      "$1 : 6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada sistem rangkaian balok mendatar, percepatan seluruh benda bernilai sama ($a$). Setiap tali hanya bertanggung jawab menarik massa total balok yang berada di belakangnya: $T_k = m_{\\text{belakang}} \\times a$.",
      "steps": "1. Hitung percepatan bersama ketiga balok:\\n$$a = \\frac{F}{m_A + m_B + m_C} = \\frac{24}{1 + 2 + 3} = \\frac{24}{6} = 4\\text{ m/s}^2$$\\n2. Tentukan besar tegangan tali 1 (hanya menarik balok $A$):\\n$$T_1 = m_A a = 1 \\times 4 = 4\\text{ N}$$\\n3. Tentukan besar tegangan tali 2 (menarik balok $A$ dan balok $B$):\\n$$T_2 = (m_A + m_B) a = (1 + 2) \\times 4 = 3 \\times 4 = 12\\text{ N}$$\\n4. Hitung perbandingan $T_1 : T_2$:\\n$$\\frac{T_1}{T_2} = \\frac{4}{12} = \\frac{1}{3}$$\\nJadi, perbandingan tegangan tali adalah $1 : 3$.",
      "pitfalls": "Kerap salah mengasumsikan tali 2 hanya menarik balok $B$ saja ($T_2 = m_B a = 8\\text{ N}$) sehingga mendapat perbandingan $1 : 2$. Tali 2 memikul beban gerak balok $A$ dan balok $B$ sekaligus."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada sistem rangkaian balok mendatar, percepatan seluruh benda bernilai sama ($a$). Setiap tali hanya bertanggung jawab menarik massa total balok yang berada di belakangnya: $T_k = m_{\\text{belakang}} \\times a$."
  },
  {
    "id": "fis-din-gaya-tegangan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-gaya",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Balok $A$ ($m_A = 4\\text{ kg}$) diletakkan pada bidang miring licin dengan sudut kemiringan $\\theta = 30^\\circ$ terhadap bidang horizontal. Balok $A$ dihubungkan oleh seutas tali ringan melalui sebuah katrol licin di puncak bidang miring ke balok gantung $B$ ($m_B = 6\\text{ kg}$) yang tergantung bebas secara vertikal. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak sistem balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\text{ m/s}^2$",
      "$3\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$6\\text{ m/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya penggerak netto berasal dari selisih antara gaya berat balok gantung ($W_B = m_B g$) dan komponen gaya berat balok $A$ yang sejajar bidang miring ($W_{A,\\parallel} = m_A g \\sin\\theta$). Percepatan sistem: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$.",
      "steps": "1. Hitung gaya penarik dan gaya penahan:\\n- Gaya berat balok gantung $B$: $W_B = m_B g = 6 \\times 10 = 60\\text{ N}$.\\n- Komponen berat balok $A$ sejajar bidang miring: $W_{A,\\parallel} = m_A g \\sin 30^\\circ = 4 \\times 10 \\times 0,5 = 20\\text{ N}$.\\n2. Tentukan resultan gaya penggerak netto:\\n$$F_{\\text{net}} = W_B - W_{A,\\parallel} = 60 - 20 = 40\\text{ N}$$\\n3. Hitung percepatan sistem dengan membagi massa total:\\n$$a = \\frac{F_{\\text{net}}}{m_A + m_B} = \\frac{40}{4 + 6} = \\frac{40}{10} = 4\\text{ m/s}^2$$\\nJadi, besar percepatan gerak sistem balok adalah $4\\text{ m/s}^2$.",
      "pitfalls": "Kerap lupa mengalikan $\\sin 30^\\circ$ pada balok di bidang miring sehingga menghitung $F_{\\text{net}} = 60 - 40 = 20\\text{ N}$ yang menghasilkan $a = 2\\text{ m/s}^2$."
    },
    "subTopicSlug": "gaya-tegangan-tali",
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gaya penggerak netto berasal dari selisih antara gaya berat balok gantung ($W_B = m_B g$) dan komponen gaya berat balok $A$ yang sejajar bidang miring ($W_{A,\\parallel} = m_A g \\sin\\theta$). Percepatan sistem: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$."
  },
  {
    "id": "fis-din-09",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah beban $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ dihubungkan dengan tali ringan tak bermassa melalui sebuah katrol tetap yang licin (mesin Atwood vertikal). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua beban saat sistem dilepas dari keadaan diam adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 m/s²",
      "2 m/s²",
      "3 m/s²",
      "4 m/s²",
      "5 m/s²"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada mesin Atwood vertikal: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.</div>",
      "steps": "<ol><li>Selisih gaya penggerak gravitasi dibagi massa total kedua benda:<br>$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Seringkali siswa salah membagi dengan selisih massa atau hanya membagi dengan salah satu massa benda.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Hukum II Newton pada mesin Atwood vertikal: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$. **Tips:** Seringkali siswa salah membagi dengan selisih massa atau hanya membagi dengan salah satu massa benda."
  },
  {
    "id": "fis-din-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah balok $A$ bermassa $3\\text{ kg}$ berada di atas meja datar yang licin tanpa gesekan. Balok $A$ dihubungkan dengan tali ringan melalui katrol licin di tepi meja ke balok gantung $B$ bermassa $2\\text{ kg}$. Jika sistem dilepas dari keadaan diam dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama kedua balok bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "6 N",
      "8 N",
      "12 N",
      "16 N",
      "20 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sistem balok meja horizontal licin terhubung katrol: $a = \\frac{m_B g}{m_A + m_B}$ dan $T = m_A \\cdot a$.</div>",
      "steps": "<ol><li>1) Percepatan sistem: $a = \\frac{m_B g}{m_A + m_B} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4\\text{ m/s}^2$.<br>2) Menghitung tegangan tali melalui balok $A$: $T = m_A \\cdot a = 3\\text{ kg} \\times 4\\text{ m/s}^2 = 12\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Mengira tegangan tali sama dengan gaya berat balok gantung ($T = m_B g = 20\\text{ N}$), padahal saat balok bergerak dipercepat ke bawah, $T < W_B$.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Sistem balok meja horizontal licin terhubung katrol: $a = \\frac{m_B g}{m_A + m_B}$ dan $T = m_A \\cdot a$."
  },
  {
    "id": "fis-din-33",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah sangkar mini derek material proyek bermassa total $M = 250\\text{ kg}$ ditarik ke atas secara vertikal oleh kabel baja mesin kerek dengan percepatan konstan $a = 2\\text{ m/s}^2$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan pada kabel baja penarik tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2000 N",
      "3000 N",
      "2500 N",
      "3500 N",
      "4000 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada kabel derek vertikal: $T - Mg = M \\cdot a \\Rightarrow T = M(g + a)$.</div>",
      "steps": "<ol><li>$$T = 250(10 + 2) = 250 \\times 12 = 3000\\text{ N}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya menghitung berat sangkar $Mg = 2500\\text{ N}$ tanpa menambahkan gaya inersia pengangkatan.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Hukum II Newton pada kabel derek vertikal: $T - Mg = M \\cdot a \\Rightarrow T = M(g + a)$."
  },
  {
    "id": "fis-din-34",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua benda $m_1 = 4\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ digantungkan pada ujung-ujung seutas tali ringan melalui katrol tetap licin tanpa massa. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tegangan tali penghubung selama kedua benda bergerak dipercepat adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "8 N",
      "10 N",
      "12 N",
      "14 N",
      "16 N"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tegangan tali mesin Atwood vertikal: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.</div>",
      "steps": "<ol><li>1) Percepatan sistem: $a = \\frac{4 - 1}{4 + 1} \\times 10 = \\frac{3}{5} \\times 10 = 6\\text{ m/s}^2$.<br>2) Tegangan tali (tinjau $m_2$ yang bergerak naik): $T - m_2 g = m_2 a \\Rightarrow T = 1(10 + 6) = 16\\text{ N}$.<br>(Alternatif rumus langsung: $T = \\frac{2(4)(1)}{4 + 1} \\times 10 = \\frac{80}{5} = 16\\text{ N}$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Seringkali siswa menjawab rata-rata berat kedua benda $\\frac{40 + 10}{2} = 25\\text{ N}$ atau salah menjumlahkan.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Tegangan tali mesin Atwood vertikal: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$."
  },
  {
    "id": "fis-din-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Seorang teknisi bermassa $60\\text{ kg}$ berada di dalam sangkar lift konstruksi bermassa $140\\text{ kg}$ (massa total $200\\text{ kg}$). Sangkar ditarik ke atas oleh kabel baja crane dengan gaya tegangan tali $T = 2500\\text{ N}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya desak kaki teknisi terhadap lantai lift konstruksi tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "600 N",
      "650 N",
      "700 N",
      "750 N",
      "850 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Penggabungan Hukum II Newton sistem gabungan (lift + muatan) dan analisis gaya kontak internal.</div>",
      "steps": "<ol><li>1) Menghitung percepatan seluruh sistem ke atas:<br>$\\Sigma F_y = M_{\\text{total}} \\cdot a \\Rightarrow T - M_{\\text{total}} g = M_{\\text{total}} \\cdot a$<br>$2500 - 200(10) = 200 a \\Rightarrow 500 = 200 a \\Rightarrow a = 2{,}5\\text{ m/s}^2$.<br>2) Menghitung gaya desak kaki (gaya normal) pada teknisi ($m = 60\\text{ kg}$):<br>$N - mg = m \\cdot a \\Rightarrow N = m(g + a) = 60(10 + 2{,}5) = 750\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering langsung menjawab berat sejati $mg = 600\\text{ N}$ karena lupa menghitung percepatan sistem, atau salah memasukkan massa total saat meninjau gaya normal teknisi.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Penggabungan Hukum II Newton sistem gabungan (lift + muatan) dan analisis gaya kontak internal."
  },
  {
    "id": "fis-din-04",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Hukum Newton & Berat Semu",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua balok ditumpuk secara vertikal di atas lantai mendatar yang licin tanpa gesekan. Balok bawah bermassa $M = 8\\text{ kg}$ dan balok atas bermassa $m = 2\\text{ kg}$. Balok atas ditarik oleh seutas tali dengan gaya $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Jika kedua balok tetap bergerak bersamaan secara horizontal tanpa terangkat dari lantai ($g = 10\\text{ m/s}^2$), besar gaya normal yang dikerjakan lantai terhadap balok bawah $M$ adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "50 N",
      "70 N",
      "80 N",
      "100 N",
      "130 N"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Kesetimbangan gaya vertikal multi-benda dengan gaya eksternal bersudut: $\\Sigma F_y = 0$.</div>",
      "steps": "<ol><li>Tinjau sistem gabungan ($M + m$) pada sumbu vertikal ($y$):<br>$\\Sigma F_y = 0 \\Rightarrow N_{\\text{lantai}} + F \\sin 37^\\circ - (M + m)g = 0$<br>$N_{\\text{lantai}} + 50(0{,}6) - (8 + 2)(10) = 0$<br>$N_{\\text{lantai}} + 30 - 100 = 0 \\Rightarrow N_{\\text{lantai}} = 70\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa kerap lupa mengikutsertakan komponen vertikal gaya tarik luar ($F \\sin\\theta$) atau keliru hanya menghitung berat balok bawah ($N = Mg = 80\\text{ N}$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Kesetimbangan gaya vertikal multi-benda dengan gaya eksternal bersudut: $\\Sigma F_y = 0$."
  },
  {
    "id": "fis-din-11",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok kayu $A$ bermassa $m_A = 4\\text{ kg}$ diletakkan pada permukaan meja horizontal kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}25$. Balok $A$ dihubungkan oleh seutas tali ringan melalui katrol licin tanpa gesekan di ujung meja dengan balok beban $B$ bermassa $m_B = 6\\text{ kg}$ yang tergantung bebas secara vertikal. Jika sistem dilepaskan dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama sistem bergerak adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "18 N",
      "24 N",
      "30 N",
      "40 N",
      "60 N"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Penggabungan gaya gesek kinetis permukaan horizontal dengan dinamika sistem katrol dua benda terhubung.</div>",
      "steps": "<ol><li>1) Gaya normal dan gaya gesek pada balok $A$: $N_A = m_A g = 40\\text{ N} \\Rightarrow f_k = \\mu_k N_A = 0{,}25 \\times 40 = 10\\text{ N}$.<br>2) Gaya berat beban $B$: $W_B = m_B g = 60\\text{ N}$.<br>3) Percepatan sistem: $a = \\frac{W_B - f_k}{m_A + m_B} = \\frac{60 - 10}{4 + 6} = \\frac{50}{10} = 5\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$): $W_B - T = m_B a \\Rightarrow T = 60 - 6(5) = 30\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa lupa mengurangkan gaya gesek kinetis pada gaya penarik sistem, atau keliru menghitung $T = f_k = 10\\text{ N}$ seolah sistem berada dalam kesetimbangan statis.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Penggabungan gaya gesek kinetis permukaan horizontal dengan dinamika sistem katrol dua benda terhubung."
  },
  {
    "id": "fis-din-12",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok $A$ bermassa $5\\text{ kg}$ terletak pada bidang miring licin yang memiliki sudut kemiringan $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$). Balok $A$ dihubungkan oleh seutas tali melalui katrol licin di puncak bidang miring ke balok gantung $B$ yang juga bermassa $5\\text{ kg}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua balok tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2,5 m/s²",
      "3,5 m/s²",
      "5,0 m/s²",
      "7,5 m/s²",
      "10,0 m/s²"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika sistem katrol bidang miring licin terhubung beban vertikal: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$.</div>",
      "steps": "<ol><li>1) Komponen berat $A$ sejajar bidang miring: $W_{Ax} = m_A g \\sin 30^\\circ = 5(10)(0{,}5) = 25\\text{ N}$.<br>2) Berat beban gantung $B$: $W_B = m_B g = 50\\text{ N}$.<br>3) Karena $W_B > W_{Ax}$, balok $B$ bergerak turun dan $A$ bergerak naik.<br>4) Percepatan sistem: $a = \\frac{W_B - W_{Ax}}{m_A + m_B} = \\frac{50 - 25}{5 + 5} = \\frac{25}{10} = 2{,}5\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Hanya membagi resultan gaya dengan massa salah satu benda ($a = 25 / 5 = 5{,}0\\text{ m/s}^2$), atau mengira kedua massa yang sama ($5\\text{ kg}$ dan $5\\text{ kg}$) pasti berada dalam keadaan diam setimbang.</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Dinamika sistem katrol bidang miring licin terhubung beban vertikal: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$."
  },
  {
    "id": "fis-din-35",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah balok $A$ ($m_A = 5\\text{ kg}$) dan $B$ ($m_B = 5\\text{ kg}$) diletakkan pada sistem bidang miring ganda yang licin tanpa gesekan. Balok $A$ berada pada kemiringan $\\theta_A = 53^\\circ$ ($\\sin 53^\\circ = 0{,}8$) dan balok $B$ berada pada kemiringan $\\theta_B = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$). Kedua balok dihubungkan oleh seutas tali ringan melalui katrol licin di puncak pertemuan kedua bidang miring. Jika $g = 10\\text{ m/s}^2$, besar percepatan dan tegangan tali penghubung kedua balok adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "a = 1 m/s² dan T = 35 N",
      "a = 1 m/s² dan T = 40 N",
      "a = 2 m/s² dan T = 30 N",
      "a = 2 m/s² dan T = 35 N",
      "a = 0 m/s² dan T = 30 N"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Sistem katrol bidang miring ganda: $a = \\frac{m_A g \\sin\\theta_A - m_B g \\sin\\theta_B}{m_A + m_B}$.</div>",
      "steps": "<ol><li>1) Gaya penggerak $A$: $W_{Ax} = 5(10)(0{,}8) = 40\\text{ N}$ menuruni bidang $A$.<br>2) Gaya penahan $B$: $W_{Bx} = 5(10)(0{,}6) = 30\\text{ N}$ menuruni bidang $B$.<br>3) Percepatan sistem: $a = \\frac{40 - 30}{5 + 5} = \\frac{10}{10} = 1\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$ yang tertarik naik): $T - W_{Bx} = m_B a \\Rightarrow T = 30 + 5(1) = 35\\text{ N}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa mengira karena massa kedua balok sama ($5\\text{ kg}$ dan $5\\text{ kg}$), sistem otomatis diam setimbang ($a = 0$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Sistem katrol bidang miring ganda: $a = \\frac{m_A g \\sin\\theta_A - m_B g \\sin\\theta_B}{m_A + m_B}$."
  },
  {
    "id": "fis-din-36",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subTopicId": "fis-din-gaya-tegangan",
    "category": "Sistem Tali & Katrol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah balok $A$ ($m_A = 3\\text{ kg}$) berada di atas meja mendatar kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}20$. Balok $A$ dihubungkan tali melalui katrol licin di ujung kanan meja ke beban gantung $B$ ($m_B = 2\\text{ kg}$). Balok $A$ ditarik ke arah kiri oleh gaya luar horizontal $F = 36\\text{ N}$ sehingga sistem bergerak ke kiri dan balok $B$ terangkat naik. Jika $g = 10\\text{ m/s}^2$, percepatan gerak sistem tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 m/s²",
      "1,5 m/s²",
      "2 m/s²",
      "2,5 m/s²",
      "3 m/s²"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Hukum II Newton pada sistem katrol dengan gaya tarik eksternal berlawanan arah gerak beban gantung.</div>",
      "steps": "<ol><li>1) Karena balok $A$ bergerak ke kiri, gaya gesek kinetis pada $A$ mengarah ke kanan: $f_k = \\mu_k m_A g = 0{,}20 \\times 30 = 6\\text{ N}$.<br>2) Gaya berat beban $B$ yang harus diangkat ke atas: $W_B = m_B g = 20\\text{ N}$.<br>3) Resultan gaya penggerak ke kiri: $\\Sigma F = F - f_k - W_B = 36 - 6 - 20 = 10\\text{ N}$.<br>4) Percepatan sistem: $a = \\frac{\\Sigma F}{m_A + m_B} = \\frac{10}{3 + 2} = \\frac{10}{5} = 2\\text{ m/s}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Salah menentukan arah gaya gesek kinetis (mengira gaya gesek mengarah ke kiri bersama $F$).</div>"
    },
    "bab": "Dinamika",
    "subBab": "Gaya Tegangan Tali",
    "subTopic": "Gaya Tegangan Tali",
    "chapterTitle": "Dinamika",
    "subChapterId": "fis-din-gaya",
    "subTopicSlug": "gaya-tegangan-tali",
    "hint": "Konsep: Hukum II Newton pada sistem katrol dengan gaya tarik eksternal berlawanan arah gerak beban gantung. **Tips:** Salah menentukan arah gaya gesek kinetis (mengira gaya gesek mengarah ke kiri bersama $F$)."
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
