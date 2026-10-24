module.exports = [
  {
    "id": "fis-din-rot-titikberat-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah plat tipis homogen berbentuk segitiga sama kaki memiliki panjang alas $a = 6\\text{ cm}$ dan tinggi $t = 12\\text{ cm}$. Jarak titik berat plat segitiga tersebut diukur secara tegak lurus dari garis alasnya adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3\\text{ cm}$",
      "$4\\text{ cm}$",
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$9\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk bangun datar dua dimensi berbentuk segitiga homogen dengan tinggi $t$, titik berat terletak pada perpotongan garis-garis berat pada jarak: $y_0 = \\frac{1}{3} t$ dari garis alas segitiga.",
      "steps": "1. Identifikasi tinggi segitiga: $t = 12\\text{ cm}$.\\n2. Hitung letak titik berat dari garis alas:\\n$$y_0 = \\frac{1}{3} t = \\frac{1}{3} \\times 12\\text{ cm} = 4\\text{ cm}$$\\nJadi, jarak titik berat dari garis alas adalah $4\\text{ cm}$.",
      "pitfalls": "Kerap tertukar mengukur dari titik puncak ($\\frac{2}{3} t = 8\\text{ cm}$) atau mengira di tengah-tengah tinggi ($6\\text{ cm}$). Dari garis alas, jarak titik berat segitiga selalu $\\frac{1}{3}$ tinggi."
    }
  },
  {
    "id": "fis-din-rot-titikberat-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua buah partikel diletakkan pada sumbu-$x$. Partikel 1 bermassa $m_1 = 2\\text{ kg}$ berada pada koordinat $x_1 = 2\\text{ m}$ dan partikel 2 bermassa $m_2 = 6\\text{ kg}$ berada pada koordinat $x_2 = 10\\text{ m}$. Koordinat pusat massa ($x_{\\text{pm}}$) kedua partikel tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ m}$",
      "$6\\text{ m}$",
      "$7\\text{ m}$",
      "$8\\text{ m}$",
      "$9\\text{ m}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Koordinat pusat massa dari sistem partikel diskret satu dimensi dihitung menggunakan rata-rata tertimbang massa: $x_{\\text{pm}} = \\frac{\\sum m_i x_i}{\\sum m_i}$.",
      "steps": "1. Kalikan massa masing-masing partikel dengan posisinya:\\n$$m_1 x_1 = 2\\text{ kg} \\times 2\\text{ m} = 4\\text{ kg}\\cdot\\text{m}$$\\n$$m_2 x_2 = 6\\text{ kg} \\times 10\\text{ m} = 60\\text{ kg}\\cdot\\text{m}$$\\n2. Jumlahkan massa total:\\n$$m_{\\text{total}} = m_1 + m_2 = 2 + 6 = 8\\text{ kg}$$\\n3. Hitung koordinat pusat massa:\\n$$x_{\\text{pm}} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{4 + 60}{8} = \\frac{64}{8} = 8\\text{ m}$$\\nJadi, letak pusat massa berada pada koordinat $x = 8\\text{ m}$.",
      "pitfalls": "Kerap menghitung rata-rata posisi aritmetika biasa ($\\frac{2 + 10}{2} = 6\\text{ m}$) tanpa memperhitungkan bobot massa. Pusat massa selalu lebih condong mendekati partikel yang lebih berat ($m_2 = 6\\text{ kg}$)."
    }
  },
  {
    "id": "fis-din-rot-titikberat-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Pusat massa (center of mass) dan titik berat (center of gravity) dari suatu benda tegar akan berada pada posisi titik geometris yang tepat berhimpit apabila...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Benda berada dalam ruang hampa udara mutlak tanpa atmosfer",
      "Benda berada di dalam medan gravitasi yang seragam (homogen) di seluruh bagian tubuh benda",
      "Benda berotasi dengan kelajuan sudut konstan tanpa translasi",
      "Massa jenis benda bernilai tak hingga dan bentuknya berupa bola pejal sempurna",
      "Suhu di seluruh bagian benda berada pada skala nol mutlak"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pusat massa adalah titik rata-rata distribusi massa (sifat intrinsik materi benda), sedangkan titik berat adalah titik tangkap resultan gaya gravitasi yang bekerja pada benda. Keduanya tepat berhimpit jika percepatan gravitasi $g$ bernilai konstan (medan gravitasi homogen) di setiap elemen massa benda: $x_{\\text{tb}} = \\frac{\\sum m_i g x_i}{\\sum m_i g} = \\frac{\\sum m_i x_i}{\\sum m_i} = x_{\\text{pm}}$.",
      "steps": "1. Definisi pusat massa: $\\vec{r}_{\\text{pm}} = \\frac{\\int \\vec{r} dm}{M}$.\\n2. Definisi titik berat: $\\vec{r}_{\\text{tb}} = \\frac{\\int \\vec{r} g dm}{\\int g dm}$.\\n3. Jika medan gravitasi seragam ($g = \\text{konstan}$), maka $g$ dapat dikeluarkan dari pembilang dan penyebut sehingga rumusnya identik.\\nSehingga keduanya berhimpit pada medan gravitasi yang homogen.",
      "pitfalls": "Pada struktur berukuran luar biasa besar (seperti gedung pencakar langit ribuan meter atau satelit raksasa), percepatan gravitasi di bagian atas lebih lemah daripada di bagian bawah sehingga titik berat berada sedikit lebih rendah daripada pusat massanya."
    }
  },
  {
    "id": "fis-din-rot-titikberat-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah kerucut pejal homogen memiliki tinggi total $t = 20\\text{ cm}$. Jarak titik berat kerucut pejal tersebut diukur dari bidang alasnya sepanjang sumbu simetris adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ cm}$",
      "$5\\text{ cm}$",
      "$6,67\\text{ cm}$",
      "$10\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Untuk benda pejal tiga dimensi berbentuk kerucut homogen dengan tinggi $t$, letak titik beratnya berada pada sumbu simetri pada jarak: $y_0 = \\frac{1}{4} t$ dari bidang alas.",
      "steps": "1. Identifikasi tinggi kerucut pejal: $t = 20\\text{ cm}$.\\n2. Hitung jarak titik berat dari bidang alas:\\n$$y_0 = \\frac{1}{4} t = \\frac{1}{4} \\times 20\\text{ cm} = 5\\text{ cm}$$\\nJadi, jarak titik berat kerucut dari bidang alas adalah $5\\text{ cm}$.",
      "pitfalls": "Kerap tertukar dengan bidang segitiga dua dimensi ($y_0 = \\frac{1}{3} t = 6,67\\text{ cm}$) atau kulit kerucut berongga ($y_0 = \\frac{1}{3} t$). Kerucut pejal 3D memiliki volume yang lebih terkonsentrasi di dekat dasar sehingga titik beratnya berada pada $\\frac{1}{4} t$."
    }
  },
  {
    "id": "fis-din-rot-titikberat-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua batang kawat lurus homogen disambung tegak lurus membentuk huruf L pada bidang koordinat $xy$. Kawat 1 dengan panjang $L_1 = 6\\text{ cm}$ terletak mendatar pada sumbu-$x$ dari $x = 0$ hingga $x = 6\\text{ cm}$. Kawat 2 dengan panjang $L_2 = 4\\text{ cm}$ terletak tegak pada sumbu-$y$ dari $y = 0$ hingga $y = 4\\text{ cm}$. Koordinat titik berat gabungan $(x_0, y_0)$ kedua kawat tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(1,8\\text{ cm}, 0,8\\text{ cm})$",
      "$(3,0\\text{ cm}, 2,0\\text{ cm})$",
      "$(2,0\\text{ cm}, 1,5\\text{ cm})$",
      "$(1,5\\text{ cm}, 1,0\\text{ cm})$",
      "$(2,4\\text{ cm}, 1,2\\text{ cm})$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik berat sistem kawat satu dimensi ditentukan oleh panjang masing-masing kawat sebagai bobot penimbang: $x_0 = \\frac{\\sum L_i x_i}{\\sum L_i}$ dan $y_0 = \\frac{\\sum L_i y_i}{\\sum L_i}$.",
      "steps": "1. Identifikasi panjang dan titik berat masing-masing kawat:\\n- Kawat 1: $L_1 = 6\\text{ cm}$, titik berat di tengahnya: $(x_1, y_1) = (3\\text{ cm}, 0)$.\\n- Kawat 2: $L_2 = 4\\text{ cm}$, titik berat di tengahnya: $(x_2, y_2) = (0, 2\\text{ cm})$.\\n2. Hitung koordinat $x_0$:\\n$$x_0 = \\frac{L_1 x_1 + L_2 x_2}{L_1 + L_2} = \\frac{(6)(3) + (4)(0)}{6 + 4} = \\frac{18}{10} = 1,8\\text{ cm}$$\\n3. Hitung koordinat $y_0$:\\n$$y_0 = \\frac{L_1 y_1 + L_2 y_2}{L_1 + L_2} = \\frac{(6)(0) + (4)(2)}{6 + 4} = \\frac{8}{10} = 0,8\\text{ cm}$$\\nJadi, koordinat titik beratnya adalah $(1,8\\text{ cm}, 0,8\\text{ cm})$.",
      "pitfalls": "Kerap langsung mengambil titik tengah masing-masing batang tanpa pembobotan panjang ($(3, 2)$). Kawat 1 lebih panjang ($6\\text{ cm}$) sehingga koordinat $x$ lebih dominan ditarik ke kanan."
    }
  }
];
