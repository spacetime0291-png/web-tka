/**
 * Bank Soal TKA: Fisika (TKA) - Dinamika
 * Bab Kecil: Dinamika Rotasi & Kesetimbangan (fis-din-rot)
 * Sub-Bab: Titik Berat (fis-din-rot-titikberat)
 * Slug: titik-berat
 * Indikator: Penentuan koordinat titik berat benda satu dimensi (garis), dua dimensi (luasan), dan gabungan.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-din-rot-titikberat";
  const subTopicSlug = "titik-berat";
  const questions = [
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
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Untuk bangun datar dua dimensi berbentuk segitiga homogen dengan tinggi $t$, titik berat terletak pada perpotongan garis-garis berat pada jarak: $y_0 = \\frac{1}{3} t$ dari garis alas segitiga."
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
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Koordinat pusat massa dari sistem partikel diskret satu dimensi dihitung menggunakan rata-rata tertimbang massa: $x_{\\text{pm}} = \\frac{\\sum m_i x_i}{\\sum m_i}$."
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
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Pusat massa adalah titik rata-rata distribusi massa (sifat intrinsik materi benda), sedangkan titik berat adalah titik tangkap resultan gaya gravitasi yang bekerja pada benda. Keduanya tepat berhimpit jika percepatan gravitasi $g$ bernilai konstan (medan gravitasi homogen) di setiap elemen massa benda: $x_{\\text{tb}} = \\frac{\\sum m_i g x_i}{\\sum m_i g} = \\frac{\\sum m_i x_i}{\\sum m_i} = x_{\\text{pm}}$."
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
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Untuk benda pejal tiga dimensi berbentuk kerucut homogen dengan tinggi $t$, letak titik beratnya berada pada sumbu simetri pada jarak: $y_0 = \\frac{1}{4} t$ dari bidang alas."
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
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Mudah",
    "hint": "Titik berat sistem kawat satu dimensi ditentukan oleh panjang masing-masing kawat sebagai bobot penimbang: $x_0 = \\frac{\\sum L_i x_i}{\\sum L_i}$ dan $y_0 = \\frac{\\sum L_i y_i}{\\sum L_i}$. **Tips:** Kerap langsung mengambil titik tengah masing-masing batang tanpa pembobotan panjang ($(3, 2)$)."
  },
  {
    "id": "fis-din-rot-titikberat-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah plat tipis homogen berbentuk persegi dengan panjang sisi $s_1 = 12\\text{ cm}$ diletakkan dengan sudut kiri bawah pada titik asal $(0,0)$. Dari plat tersebut, dipotong sebuah lubang berbentuk persegi dengan panjang sisi $s_2 = 4\\text{ cm}$ yang berpusat di titik $(x_2 = 8\\text{ cm}, y_2 = 8\\text{ cm})$. Koordinat titik berat sisa plat setelah dilubangi adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5,50\\text{ cm}, 5,50\\text{ cm})$",
      "$(5,75\\text{ cm}, 5,75\\text{ cm})$",
      "$(6,00\\text{ cm}, 6,00\\text{ cm})$",
      "$(6,25\\text{ cm}, 6,25\\text{ cm})$",
      "$(6,50\\text{ cm}, 6,50\\text{ cm})$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada benda berlubang (bagian yang dipotong atau dibuang), luas lubang diperlakukan sebagai pembobot negatif: $x_0 = \\frac{A_1 x_1 - A_2 x_2}{A_1 - A_2}$ dan $y_0 = \\frac{A_1 y_1 - A_2 y_2}{A_1 - A_2}$.",
      "steps": "1. Identifikasi luas dan pusat plat utuh:\\n- Luas plat awal: $A_1 = 12 \\times 12 = 144\\text{ cm}^2$.\\n- Titik berat plat awal: $(x_1, y_1) = (6\\text{ cm}, 6\\text{ cm})$.\\n2. Identifikasi luas dan pusat lubang potong:\\n- Luas lubang: $A_2 = 4 \\times 4 = 16\\text{ cm}^2$.\\n- Pusat lubang: $(x_2, y_2) = (8\\text{ cm}, 8\\text{ cm})$.\\n3. Hitung koordinat $x_0$ sisa plat:\\n$$x_0 = \\frac{A_1 x_1 - A_2 x_2}{A_1 - A_2} = \\frac{(144)(6) - (16)(8)}{144 - 16} = \\frac{864 - 128}{128} = \\frac{736}{128} = 5,75\\text{ cm}$$\\n4. Karena bentuk dan posisi simetris terhadap garis diagonal $y = x$:\\n$$y_0 = 5,75\\text{ cm}$$\\nJadi, koordinat titik berat sisa plat adalah $(5,75\\text{ cm}, 5,75\\text{ cm})$.",
      "pitfalls": "Kerap menjumlahkan luas lubang bukannya mengurangkan, sehingga menghasilkan pergeseran ke arah yang salah ($(6,25\\text{ cm}, 6,25\\text{ cm})$). Karena massa di kuadran kanan atas dibuang, titik berat sisa benda harus bergeser menjauhi lubang (ke kiri bawah)."
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada benda berlubang (bagian yang dipotong atau dibuang), luas lubang diperlakukan sebagai pembobot negatif: $x_0 = \\frac{A_1 x_1 - A_2 x_2}{A_1 - A_2}$ dan $y_0 = \\frac{A_1 y_1 - A_2 y_2}{A_1 - A_2}$."
  },
  {
    "id": "fis-din-rot-titikberat-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah benda pejal homogen tersusun dari silinder pejal setinggi $t_s = 6\\text{ cm}$ dan berjari-jari $R$ yang di atasnya digabungkan sepusat dengan sebuah kerucut pejal berjari-jari alas sama $R$ dan tinggi kerucut $t_k = 12\\text{ cm}$. Jarak titik berat gabungan benda tersebut diukur dari bidang alas silinder sepanjang sumbu simetri adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4,8\\text{ cm}$",
      "$5,4\\text{ cm}$",
      "$6,0\\text{ cm}$",
      "$6,6\\text{ cm}$",
      "$7,2\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Titik berat benda gabungan tiga dimensi pejal dihitung menggunakan volume masing-masing komponen: $y_0 = \\frac{\\sum V_i y_i}{\\sum V_i}$. Titik berat silinder berada di $\\frac{1}{2} t_s$, dan titik berat kerucut berada di $\\frac{1}{4} t_k$ dari alas kerucut.",
      "steps": "1. Volume dan titik berat silinder (diukur dari alas silinder):\\n- Volume: $V_s = \\pi R^2 t_s = 6 \\pi R^2$.\\n- Titik berat: $y_s = \\frac{t_s}{2} = \\frac{6}{2} = 3\\text{ cm}$.\\n2. Volume dan titik berat kerucut (diukur dari alas silinder):\\n- Volume: $V_k = \\frac{1}{3} \\pi R^2 t_k = \\frac{1}{3} \\pi R^2 (12) = 4 \\pi R^2$.\\n- Titik berat dari dasar kerucut adalah $\\frac{1}{4} t_k = \\frac{12}{4} = 3\\text{ cm}$. Karena kerucut berada di atas silinder setinggi $6\\text{ cm}$, maka dari alas silinder: $y_k = 6 + 3 = 9\\text{ cm}$.\\n3. Hitung titik berat gabungan:\\n$$y_0 = \\frac{V_s y_s + V_k y_k}{V_s + V_k} = \\frac{(6 \\pi R^2)(3) + (4 \\pi R^2)(9)}{6 \\pi R^2 + 4 \\pi R^2}$$\\n$$y_0 = \\frac{18 + 36}{10} = \\frac{54}{10} = 5,4\\text{ cm}$$\\nJadi, jarak titik berat gabungan dari bidang alas silinder adalah $5,4\\text{ cm}$.",
      "pitfalls": "Kerap lupa menambahkan tinggi silinder ($6\\text{ cm}$) pada koordinat titik berat kerucut sehingga menggunakan $y_k = 3\\text{ cm}$ yang menyebabkan hasil perhitungan menjadi keliru."
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Titik berat benda gabungan tiga dimensi pejal dihitung menggunakan volume masing-masing komponen: $y_0 = \\frac{\\sum V_i y_i}{\\sum V_i}$. Titik berat silinder berada di $\\frac{1}{2} t_s$, dan titik berat kerucut berada di $\\frac{1}{4} t_k$ dari alas kerucut."
  },
  {
    "id": "fis-din-rot-titikberat-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah plat tipis homogen tersusun dari persegi panjang berukuran alas $p = 8\\text{ cm}$ dan tinggi $t_p = 6\\text{ cm}$ yang diletakkan simetris terhadap sumbu-$y$ (dari $x = -4$ hingga $x = +4$, dan $y = 0$ hingga $y = 6$). Di atas sisi atas persegi panjang tersebut digabungkan sebuah segitiga sama kaki homogen dengan alas $8\\text{ cm}$ dan tinggi $t_s = 3\\text{ cm}$ (puncak segitiga di koordinat $(0, 9)$). Koordinat titik berat gabungan kedua plat tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0\\text{ cm}, 3,2\\text{ cm})$",
      "$(0\\text{ cm}, 3,8\\text{ cm})$",
      "$(0\\text{ cm}, 4,0\\text{ cm})$",
      "$(0\\text{ cm}, 4,5\\text{ cm})$",
      "$(0\\text{ cm}, 5,0\\text{ cm})$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Karena bangun simetris terhadap sumbu-$y$, maka $x_0 = 0$. Koordinat vertikal titik berat komposit dihitung berdasarkan pembobotan luas masing-masing bidang: $y_0 = \\frac{A_1 y_1 + A_2 y_2}{A_1 + A_2}$.",
      "steps": "1. Persegi panjang (bidang 1):\\n- Luas: $A_1 = 8 \\times 6 = 48\\text{ cm}^2$.\\n- Titik berat: $y_1 = \\frac{6}{2} = 3\\text{ cm}$.\\n2. Segitiga (bidang 2):\\n- Luas: $A_2 = \\frac{1}{2} \\times 8 \\times 3 = 12\\text{ cm}^2$.\\n- Titik berat dari dasar segitiga adalah $\\frac{1}{3} t_s = \\frac{3}{3} = 1\\text{ cm}$. Dari sumbu-$x$ ($y = 0$), dasarnya berada di $y = 6$, sehingga $y_2 = 6 + 1 = 7\\text{ cm}$.\\n3. Hitung koordinat $y_0$ gabungan:\\n$$y_0 = \\frac{A_1 y_1 + A_2 y_2}{A_1 + A_2} = \\frac{(48)(3) + (12)(7)}{48 + 12}$$\\n$$y_0 = \\frac{144 + 84}{60} = \\frac{228}{60} = 3,8\\text{ cm}$$\\nJadi, koordinat titik berat gabungan adalah $(0\\text{ cm}, 3,8\\text{ cm})$.",
      "pitfalls": "Kerap salah menghitung titik berat segitiga sebagai $\\frac{1}{2}$ tinggi atau lupa menambahkan offset ketinggian dasar segitiga ($6\\text{ cm}$)."
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Karena bangun simetris terhadap sumbu-$y$, maka $x_0 = 0$. Koordinat vertikal titik berat komposit dihitung berdasarkan pembobotan luas masing-masing bidang: $y_0 = \\frac{A_1 y_1 + A_2 y_2}{A_1 + A_2}$."
  },
  {
    "id": "fis-din-rot-titikberat-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah plat tipis homogen berbentuk setengah lingkaran memiliki jari-jari $R = 33\\text{ cm}$. Menggunakan pendekatan nilai $\\pi = \\frac{22}{7}$, jarak titik berat plat setengah lingkaran tersebut diukur dari garis diameternya sepanjang sumbu simetri adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$11\\text{ cm}$",
      "$14\\text{ cm}$",
      "$16,5\\text{ cm}$",
      "$21\\text{ cm}$",
      "$22\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Letak titik berat plat tipis homogen berbentuk setengah lingkaran pejal dari garis diameternya diperoleh melalui hasil integrasi kalkulus: $y_0 = \\frac{4R}{3\\pi}$.",
      "steps": "1. Identifikasi jari-jari dan rumus:\\n$R = 33\\text{ cm}$, $\\pi = \\frac{22}{7}$.\\n$$y_0 = \\frac{4R}{3\\pi}$$\\n2. Substitusi nilai numerik:\\n$$y_0 = \\frac{4 \\times 33}{3 \\times \\frac{22}{7}} = \\frac{132}{\\frac{66}{7}}$$\\n$$y_0 = \\frac{132 \\times 7}{66} = 2 \\times 7 = 14\\text{ cm}$$\\nJadi, jarak titik berat dari garis diameter adalah $14\\text{ cm}$.",
      "pitfalls": "Kerap tertukar dengan rumus busur kawat setengah lingkaran ($y_0 = \\frac{2R}{\\pi}$) atau setengah bola pejal 3 dimensi ($y_0 = \\frac{3}{8} R$). Untuk plat setengah lingkaran pejal 2 dimensi, rumusnya adalah $\\frac{4R}{3\\pi}$."
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Letak titik berat plat tipis homogen berbentuk setengah lingkaran pejal dari garis diameternya diperoleh melalui hasil integrasi kalkulus: $y_0 = \\frac{4R}{3\\pi}$."
  },
  {
    "id": "fis-din-rot-titikberat-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-rot",
    "subTopicId": "fis-din-rot-titikberat",
    "category": "Mekanika",
    "difficulty": "sedang",
    "statement": "Sebuah balok kayu homogen dengan penampang persegi panjang memiliki lebar alas $b = 30\\text{ cm}$ dan tinggi $h = 40\\text{ cm}$. Balok diletakkan di atas sebuah papan bidang miring kasar yang sudut kemiringannya $\\theta$ dapat diperbesar secara perlahan. Koefisien gesekan lantai sangat besar sehingga balok tidak melorot. Besar sudut kemiringan bidang miring $\\theta$ tepat saat balok mulai terguling adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ$",
      "$37^\\circ$",
      "$45^\\circ$",
      "$53^\\circ$",
      "$60^\\circ$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Benda tegar tepat akan terguling ketika garis kerja gaya berat yang berpusat di titik berat benda tepat berimpit dengan titik sudut tumpuan terluar alasnya. Kondisi batas terguling pada balok berdimensi alas $b$ dan tinggi $h$ memenuhi persamaan trigonometri: $\\tan\\theta = \\frac{b}{h}$.",
      "steps": "1. Koordinat titik berat balok homogen berada di tengah-tengah geometrisnya:\\nJarak horizontal dari tepi tumpuan ke pusat massa adalah $\\frac{b}{2}$, dan jarak vertikal dari alas ke pusat massa adalah $\\frac{h}{2}$.\\n2. Terapkan kondisi batas penggulingan:\\n$$\\tan\\theta = \\frac{b/2}{h/2} = \\frac{b}{h}$$\\n3. Substitusi dimensi balok ($b = 30\\text{ cm}$, $h = 40\\text{ cm}$):\\n$$\\tan\\theta = \\frac{30}{40} = \\frac{3}{4} = 0,75$$\\n$$\\theta = \\arctan(0,75) = 37^\\circ$$\\nJadi, balok tepat akan mulai terguling pada sudut kemiringan $37^\\circ$.",
      "pitfalls": "Kerap terbalik menghitung $\\tan\\theta = \\frac{h}{b} = \\frac{4}{3} \\implies 53^\\circ$. Ingat bahwa semakin tinggi balok ($h$ besar), balok semakin mudah terguling sehingga sudut kemiringan kritisnya harus semakin kecil."
    },
    "subTopicSlug": "titik-berat",
    "bab": "Dinamika",
    "subBab": "Titik Berat",
    "subTopic": "Titik Berat",
    "chapterTitle": "Dinamika",
    "difficultyLabel": "Sedang",
    "hint": "Benda tegar tepat akan terguling ketika garis kerja gaya berat yang berpusat di titik berat benda tepat berimpit dengan titik sudut tumpuan terluar alasnya. Kondisi batas terguling pada balok berdimensi alas $b$ dan tinggi $h$ memenuhi persamaan trigonometri: $\\tan\\theta = \\frac{b}{h}$. **Tips:** Kerap terbalik menghitung $\\tan\\theta = \\frac{h}{b} = \\frac{4}{3} \\implies 53^\\circ$."
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
