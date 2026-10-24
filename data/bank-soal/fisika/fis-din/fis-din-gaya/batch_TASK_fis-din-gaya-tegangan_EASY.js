module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
