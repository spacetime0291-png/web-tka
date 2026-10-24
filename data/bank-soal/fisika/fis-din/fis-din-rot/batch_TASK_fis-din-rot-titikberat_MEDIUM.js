module.exports = [
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
