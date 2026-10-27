/**
 * Bank Soal TKA: Fisika (TKA) - Fluida
 * Bab Kecil: Fluida Dinamis (fis-flu-dinamis)
 * Sub-Bab: Gaya Angkat Pesawat (fis-flu-dinamis-sayap)
 * Slug: gaya-angkat-pesawat
 * Indikator: Perbedaan kelajuan dan tekanan udara atas-bawah sayap pesawat terbang.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-flu-dinamis-sayap";
  const subTopicSlug = "gaya-angkat-pesawat";
  const questions = [
  {
    "id": "fis-flu-dinamis-sayap-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "mudah",
    "statement": "Penampang sayap pesawat terbang dirancang khusus dengan profil aerofoil, yaitu permukaan atas lebih melengkung cembung daripada permukaan bawahnya yang relatif mendatar. Kondisi kelajuan aliran udara ($v$) dan tekanan udara ($P$) yang tepat saat pesawat sedang mengudara adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$v_{\\text{atas}} > v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} < P_{\\text{bawah}}$",
      "$v_{\\text{atas}} < v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} > P_{\\text{bawah}}$",
      "$v_{\\text{atas}} > v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} > P_{\\text{bawah}}$",
      "$v_{\\text{atas}} = v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} = P_{\\text{bawah}}$",
      "$v_{\\text{atas}} < v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} < P_{\\text{bawah}}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan prinsip Bernoulli:<br>1) Bentuk aerofoil memaksa udara yang melintasi permukaan atas sayap mengalir lebih cepat dibanding permukaan bawah ($v_{\\text{atas}} > v_{\\text{bawah}}$).<br>2) Berdasarkan Persamaan Bernoulli ($P + \\frac{1}{2}\\rho v^2 = \\text{konstan}$), di mana kelajuan fluida lebih besar, tekanan statisnya akan lebih kecil ($P_{\\text{atas}} < P_{\\text{bawah}}$).<br>3) Perbedaan tekanan ini menghasilkan gaya angkat neto ke atas:<br>$$F_A = (P_{\\text{bawah}} - P_{\\text{atas}}) \\cdot A > 0$$",
      "steps": "1. Tinjau kelajuan: Bentuk melengkung di atas sayap menyebabkan garis alir merapat $\\implies v_{\\text{atas}} > v_{\\text{bawah}}$.<br>2. Tinjau tekanan: Menurut Bernoulli, kelajuan tinggi $\\implies P_{\\text{atas}} < P_{\\text{bawah}}$.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa sering mengira bahwa kelajuan yang lebih tinggi menghasilkan tekanan yang lebih besar, padahal menurut Hukum Bernoulli hubungan antara kelajuan dan tekanan statis adalah berbanding terbalik."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan prinsip Bernoulli: 1) Bentuk aerofoil memaksa udara yang melintasi permukaan atas sayap mengalir lebih cepat dibanding permukaan bawah ($v_{\\text{atas}} > v_{\\text{bawah}}$). 2) Berdasarkan Persamaan Bernoulli ($P + \\frac{1}{2}\\rho v^2 = \\text{konstan}$), di mana kelajuan fluida lebih besar, tekanan statisnya akan lebih kecil ($P_{\\text{atas}} < P_{\\text{bawah}}$). 3) Perbedaan tekanan ini menghasilkan gaya angkat neto ke atas: $$F_A = (P_{\\text{bawah}} - P_{\\text{atas}}) \\cdot A > 0$$."
  },
  {
    "id": "fis-flu-dinamis-sayap-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "mudah",
    "statement": "Sebuah pesawat terbang memiliki luas total sayap $A = 50\\text{ m}^2$. Saat melaju mendatar, kelajuan aliran udara di atas sayap terukur $v_{\\text{atas}} = 250\\text{ m/s}$ dan di bawah sayap terukur $v_{\\text{bawah}} = 200\\text{ m/s}$. Jika massa jenis udara di sekitar pesawat adalah $\\rho = 1{,}20\\text{ kg/m}^3$, besar gaya angkat aerodinamis yang bekerja pada sayap pesawat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3{,}375 \\times 10^5\\text{ N}$",
      "$5{,}400 \\times 10^5\\text{ N}$",
      "$6{,}750 \\times 10^5\\text{ N}$",
      "$1{,}350 \\times 10^6\\text{ N}$",
      "$2{,}700 \\times 10^6\\text{ N}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya angkat sayap pesawat dirumuskan langsung dari selisih tekanan Bernoulli:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$",
      "steps": "1. Kuadratkan masing-masing kelajuan udara:<br>• $v_{\\text{atas}}^2 = (250\\text{ m/s})^2 = 62.500\\text{ m}^2\\text{/s}^2$<br>• $v_{\\text{bawah}}^2 = (200\\text{ m/s})^2 = 40.000\\text{ m}^2\\text{/s}^2$<br>• Selisih kuadrat: $62.500 - 40.000 = 22.500\\text{ m}^2\\text{/s}^2$<br>2. Hitung gaya angkat sayap:<br>$$F_A = \\frac{1}{2} \\times 1{,}20\\text{ kg/m}^3 \\times 22.500\\text{ m}^2\\text{/s}^2 \\times 50\\text{ m}^2$$<br>$$F_A = 0{,}60 \\times 22.500 \\times 50 = 675.000\\text{ N} = 6{,}750 \\times 10^5\\text{ N}$$",
      "pitfalls": "Kesalahan paling lazim adalah mengurangkan kelajuan terlebih dahulu baru dikuadratkan: $(250 - 200)^2 = 50^2 = 2500$ (yang menghasilkan nilai $75.000\\text{ N}$). Ingat bahwa yang dihitung adalah selisih kuadrat ($v_a^2 - v_b^2$), bukan kuadrat selisih ($(v_a - v_b)^2$)."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gaya angkat sayap pesawat dirumuskan langsung dari selisih tekanan Bernoulli: $$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$."
  },
  {
    "id": "fis-flu-dinamis-sayap-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "mudah",
    "statement": "Sebuah pesawat terbang komersial sedang berada pada kondisi terbang jelajah mendatar (cruising) dengan ketinggian dan kelajuan konstan. Hubungan kesetimbangan gaya vertikal yang harus dipenuhi pesawat tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Gaya angkat sayap ($F_A$) harus sama besar dengan gaya berat total pesawat ($W$)",
      "Gaya angkat sayap ($F_A$) harus lebih besar daripada gaya berat total pesawat ($W$)",
      "Gaya angkat sayap ($F_A$) harus sama besar dengan gaya dorong mesin pesawat ($T$)",
      "Gaya angkat sayap ($F_A$) bernilai nol karena kelajuan sudah konstan",
      "Gaya berat pesawat ($W$) dinetralkan seluruhnya oleh gaya hambat udara ($D$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada penerbangan mendatar dengan ketinggian konstan (tidak naik dan tidak turun), percepatan vertikal pesawat bernilai nol ($a_y = 0$). Sesuai Hukum I Newton:<br>$$\\Sigma F_y = 0 \\implies F_A - W = 0 \\iff F_A = W = m \\cdot g$$Di mana $F_A$ adalah gaya angkat aerodinamis sayap dan $W$ adalah gaya berat total pesawat beserta muatannya.",
      "steps": "1. Identifikasi kondisi penerbangan: terbang jelajah mendatar pada ketinggian konstan.<br>2. Resultan gaya vertikal harus nol (kesetimbangan statis/dinamis vertikal).<br>3. Maka gaya angkat ke atas harus tepat mengimbangi gaya berat ke bawah ($F_A = W$).",
      "pitfalls": "Siswa sering mengira pesawat yang sedang terbang tinggi harus selalu memiliki $F_A > W$. Kondisi $F_A > W$ hanya berlaku saat pesawat sedang naik (climbing) menambah ketinggian."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Pada penerbangan mendatar dengan ketinggian konstan (tidak naik dan tidak turun), percepatan vertikal pesawat bernilai nol ($a_y = 0$). Sesuai Hukum I Newton: $$\\Sigma F_y = 0 \\implies F_A - W = 0 \\iff F_A = W = m \\cdot g$$Di mana $F_A$ adalah gaya angkat aerodinamis sayap dan $W$ adalah gaya berat total pesawat beserta muatannya. **Tips:** Siswa sering mengira pesawat yang sedang terbang tinggi harus selalu memiliki $F_A > W$."
  },
  {
    "id": "fis-flu-dinamis-sayap-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "mudah",
    "statement": "Pada fase lepas landas (take off) dan pendaratan (landing), pilot mengaktifkan sirip sayap tambahan (flaps dan slats) di bagian tepi sayap pesawat. Fungsi aerodinamis utama dari pembentangan flaps ini adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Memperluas area efektif sayap dan memperbesar kelengkungan profil sayap untuk mempertahankan gaya angkat tinggi pada kelajuan rendah",
      "Mengurangi massa jenis udara di sekitar sayap agar hambatan udara berkurang drastis",
      "Menghilangkan gaya angkat sayap sama sekali agar roda pesawat tidak bergesekan dengan landasan",
      "Mengurangi luas penampang sayap agar kelajuan pesawat meningkat tajam saat mendarat",
      "Mengarahkan aliran udara agar berpusar di atas sayap untuk memicu turbulensi"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gaya angkat pesawat sebanding dengan luas sayap ($A$) dan koefisien gaya angkat yang bergantung pada kelengkungan profil sayap:<br>$$F_A = \\frac{1}{2} C_L \\cdot \\rho \\cdot v^2 \\cdot A$$Saat lepas landas dan mendarat, kelajuan pesawat ($v$) relatif rendah. Pembentangan flaps memperbesar luas sayap ($A$) dan memperbesar kelengkungan (camber) sayap, sehingga nilai $C_L$ dan $A$ melonjak untuk mempertahankan gaya angkat yang cukup menopang bobot pesawat.",
      "steps": "1. Analisis fungsi flaps: Menambah luasan sayap dan kelengkungan aerofoil.<br>2. Dampak fisis: Menghasilkan gaya angkat memadai pada kecepatan pesawat yang relatif lambat saat manuver di landasan.<br>3. Pilihan yang tepat adalah opsi A.",
      "pitfalls": "Siswa sering mengira flaps hanya berfungsi sebagai rem angin (air brake), padahal fungsi utamanya adalah sebagai penambah gaya angkat pada kelajuan rendah (high-lift device)."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gaya angkat pesawat sebanding dengan luas sayap ($A$) dan koefisien gaya angkat yang bergantung pada kelengkungan profil sayap: $$F_A = \\frac{1}{2} C_L \\cdot \\rho \\cdot v^2 \\cdot A$$Saat lepas landas dan mendarat, kelajuan pesawat ($v$) relatif rendah. Pembentangan flaps memperbesar luas sayap ($A$) dan memperbesar kelengkungan (camber) sayap, sehingga nilai $C_L$ dan $A$ melonjak untuk mempertahankan gaya angkat yang cukup menopang bobot pesawat."
  },
  {
    "id": "fis-flu-dinamis-sayap-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "mudah",
    "statement": "Sepasang sayap sebuah pesawat terbang menghasilkan gaya angkat total sebesar $F_A = 120.000\\text{ N}$. Jika luas total permukaan efektif kedua sayap pesawat adalah $A = 40\\text{ m}^2$, maka besar selisih tekanan udara antara permukaan bawah dan permukaan atas sayap ($\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1.500\\text{ Pa}$",
      "$2.400\\text{ Pa}$",
      "$3.000\\text{ Pa}$",
      "$4.800\\text{ Pa}$",
      "$6.000\\text{ Pa}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya angkat aerodinamis sayap adalah hasil kali selisih tekanan statis antara sisi bawah dan sisi atas sayap dengan luas penampang sayap:<br>$$F_A = \\Delta P \\cdot A \\implies \\Delta P = \\frac{F_A}{A}$$",
      "steps": "1. Identifikasi data yang diketahui:<br>• Gaya angkat total: $F_A = 120.000\\text{ N}$<br>• Luas penampang sayap: $A = 40\\text{ m}^2$<br>2. Hitung selisih tekanan:<br>$$\\Delta P = \\frac{120.000\\text{ N}}{40\\text{ m}^2} = 3.000\\text{ N/m}^2 = 3.000\\text{ Pa}$$",
      "pitfalls": "Kesalahan perhitungan pembagian atau lupa bahwa $\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}}$, bukan tekanan mutlak atmosfer."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Mudah",
    "hint": "Gaya angkat aerodinamis sayap adalah hasil kali selisih tekanan statis antara sisi bawah dan sisi atas sayap dengan luas penampang sayap: $$F_A = \\Delta P \\cdot A \\implies \\Delta P = \\frac{F_A}{A}$$. **Tips:** Kesalahan perhitungan pembagian atau lupa bahwa $\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}}$, bukan tekanan mutlak atmosfer."
  },
  {
    "id": "fis-flu-dinamis-sayap-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "sedang",
    "statement": "Sebuah pesawat terbang bermassa total $M = 16.400\\text{ kg}$ sedang terbang mendatar pada ketinggian konstan di mana massa jenis udara adalah $\\rho = 1{,}0\\text{ kg/m}^3$. Pesawat memiliki sepasang sayap dengan luas total $A = 80\\text{ m}^2$. Jika kelajuan aliran udara yang melintasi permukaan bawah sayap terukur $v_{\\text{bawah}} = 200\\text{ m/s}$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan aliran udara di atas permukaan sayap ($v_{\\text{atas}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$205\\text{ m/s}$",
      "$210\\text{ m/s}$",
      "$215\\text{ m/s}$",
      "$220\\text{ m/s}$",
      "$225\\text{ m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Saat pesawat terbang mendatar pada ketinggian konstan, gaya angkat aerodinamis sayap sama besar dengan berat total pesawat:<br>$$F_A = W = M \\cdot g$$Menurut Persamaan Bernoulli:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A \\implies v_{\\text{atas}} = \\sqrt{v_{\\text{bawah}}^2 + \\frac{2 \\cdot M \\cdot g}{\\rho \\cdot A}}$$",
      "steps": "1. Hitung berat pesawat:<br>$$W = 16.400\\text{ kg} \\times 10\\text{ m/s}^2 = 164.000\\text{ N}$$<br>2. Hubungkan dengan persamaan gaya angkat sayap:<br>$$164.000\\text{ N} = \\frac{1}{2} \\times 1{,}0\\text{ kg/m}^3 \\times (v_{\\text{atas}}^2 - 200^2) \\times 80\\text{ m}^2$$<br>$$164.000 = 40 \\times (v_{\\text{atas}}^2 - 40.000)$$<br>3. Selesaikan untuk $v_{\\text{atas}}$:<br>$$v_{\\text{atas}}^2 - 40.000 = \\frac{164.000}{40} = 4.100$$<br>$$v_{\\text{atas}}^2 = 40.000 + 4.100 = 44.100\\text{ m}^2\\text{/s}^2 \\implies v_{\\text{atas}} = \\sqrt{44.100} = 210\\text{ m/s}$$",
      "pitfalls": "Siswa sering lupa mengalikan massa pesawat dengan percepatan gravitasi bumi $g$ sehingga gaya angkat menjadi 10 kali lebih kecil."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Saat pesawat terbang mendatar pada ketinggian konstan, gaya angkat aerodinamis sayap sama besar dengan berat total pesawat: $$F_A = W = M \\cdot g$$Menurut Persamaan Bernoulli: $$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A \\implies v_{\\text{atas}} = \\sqrt{v_{\\text{bawah}}^2 + \\frac{2 \\cdot M \\cdot g}{\\rho \\cdot A}}$$. **Tips:** Siswa sering lupa mengalikan massa pesawat dengan percepatan gravitasi bumi $g$ sehingga gaya angkat menjadi 10 kali lebih kecil."
  },
  {
    "id": "fis-flu-dinamis-sayap-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "sedang",
    "statement": "Sebuah pesawat terbang di bandara tepi laut (massa jenis udara $\\rho_1 = 1{,}28\\text{ kg/m}^3$) dapat lepas landas pada kelajuan tinggal landas minimum $v_1 = 60\\text{ m/s}$. Jika pesawat yang sama dengan beban muatan yang persis sama hendak lepas landas di bandara dataran tinggi dengan kerapatan udara lebih rendah, yaitu $\\rho_2 = 0{,}72\\text{ kg/m}^3$, kelajuan tinggal landas minimum yang dibutuhkan pesawat tersebut ($v_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$70\\text{ m/s}$",
      "$75\\text{ m/s}$",
      "$80\\text{ m/s}$",
      "$90\\text{ m/s}$",
      "$100\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya angkat sayap yang dibutuhkan untuk lepas landas harus sama dengan berat pesawat ($F_A = W = \\text{konstan}$). Karena bentuk aerofoil dan luas sayap tetap, gaya angkat berbanding lurus dengan $\\rho \\cdot v^2$:<br>$$\\rho_1 \\cdot v_1^2 = \\rho_2 \\cdot v_2^2 \\implies v_2 = v_1 \\cdot \\sqrt{\\frac{\\rho_1}{\\rho_2}}$$",
      "steps": "1. Tuliskan perbandingan kerapatan udara:<br>$$\\frac{\\rho_1}{\\rho_2} = \\frac{1{,}28\\text{ kg/m}^3}{0{,}72\\text{ kg/m}^3} = \\frac{128}{72} = \\frac{16}{9}$$<br>2. Tarik akar rasio kerapatan:<br>$$\\sqrt{\\frac{\\rho_1}{\\rho_2}} = \\sqrt{\\frac{16}{9}} = \\frac{4}{3}$$<br>3. Hitung kelajuan lepas landas di dataran tinggi:<br>$$v_2 = 60\\text{ m/s} \\times \\frac{4}{3} = 80\\text{ m/s}$$",
      "pitfalls": "Terkecoh membalik perbandingan kerapatan sehingga menghitung kelajuan yang lebih lambat ($60 \\times \\frac{3}{4} = 45\\text{ m/s}$). Di udara yang lebih tipis (massa jenis rendah), pesawat membutuhkan laju lebih tinggi untuk menghasilkan gaya angkat yang sama."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Gaya angkat sayap yang dibutuhkan untuk lepas landas harus sama dengan berat pesawat ($F_A = W = \\text{konstan}$). Karena bentuk aerofoil dan luas sayap tetap, gaya angkat berbanding lurus dengan $\\rho \\cdot v^2$: $$\\rho_1 \\cdot v_1^2 = \\rho_2 \\cdot v_2^2 \\implies v_2 = v_1 \\cdot \\sqrt{\\frac{\\rho_1}{\\rho_2}}$$."
  },
  {
    "id": "fis-flu-dinamis-sayap-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "sedang",
    "statement": "Sebuah pesawat terbang bermassa $M = 10.000\\text{ kg}$ sedang melakukan manuver menanjak (climbing) vertikal dengan percepatan ke atas sebesar $a = 2\\text{ m/s}^2$. Luas total permukaan sayap adalah $A = 50\\text{ m}^2$, percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, dan massa jenis udara $\\rho = 1{,}20\\text{ kg/m}^3$. Selisih kuadrat kelajuan aliran udara antara bagian atas dan bagian bawah sayap ($v_{\\text{atas}}^2 - v_{\\text{bawah}}^2$) yang harus dihasilkan sayap pesawat saat itu adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.500\\text{ m}^2\\text{/s}^2$",
      "$3.333\\text{ m}^2\\text{/s}^2$",
      "$4.000\\text{ m}^2\\text{/s}^2$",
      "$5.000\\text{ m}^2\\text{/s}^2$",
      "$6.000\\text{ m}^2\\text{/s}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Menurut Hukum II Newton pada arah vertikal pesawat yang dipercepat ke atas:<br>$$\\Sigma F_y = M \\cdot a \\implies F_A - M \\cdot g = M \\cdot a \\iff F_A = M(g + a)$$Gaya angkat ini dihubungkan dengan prinsip Bernoulli sayap:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$",
      "steps": "1. Hitung gaya angkat total yang dibutuhkan:<br>$$F_A = 10.000\\text{ kg} \\times (10 + 2)\\text{ m/s}^2 = 10.000 \\times 12 = 120.000\\text{ N}$$<br>2. Masukkan ke rumus gaya angkat Bernoulli:<br>$$120.000 = \\frac{1}{2} \\times 1{,}20 \\times (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\times 50$$<br>$$120.000 = 30 \\times (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)$$<br>3. Hitung selisih kuadrat kelajuan:<br>$$v_{\\text{atas}}^2 - v_{\\text{bawah}}^2 = \\frac{120.000}{30} = 4.000\\text{ m}^2\\text{/s}^2$$",
      "pitfalls": "Siswa sering mengabaikan percepatan ke atas $a = 2\\text{ m/s}^2$ dan hanya menggunakan berat pesawat biasa ($100.000\\text{ N}$) sehingga memperoleh nilai $3.333\\text{ m}^2\\text{/s}^2$ (opsi B)."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Menurut Hukum II Newton pada arah vertikal pesawat yang dipercepat ke atas: $$\\Sigma F_y = M \\cdot a \\implies F_A - M \\cdot g = M \\cdot a \\iff F_A = M(g + a)$$Gaya angkat ini dihubungkan dengan prinsip Bernoulli sayap: $$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$."
  },
  {
    "id": "fis-flu-dinamis-sayap-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "sedang",
    "statement": "Saat terbang mendatar stabil, kelajuan aliran udara di atas sayap sebuah pesawat tercatat $20\\%$ lebih cepat daripada kelajuan aliran udara di bawah sayapnya ($v_{\\text{atas}} = 1{,}20 v_{\\text{bawah}}$). Pesawat memiliki berat total $W = 55.000\\text{ N}$ dan luas efektif sayap $A = 25\\text{ m}^2$. Jika massa jenis udara sekitar adalah $\\rho = 1{,}0\\text{ kg/m}^3$, kelajuan aliran udara di bawah sayap pesawat ($v_{\\text{bawah}}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ m/s}$",
      "$90\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$110\\text{ m/s}$",
      "$120\\text{ m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya angkat pada terbang mendatar sama dengan berat pesawat ($F_A = W$):<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$Dengan mensubstitusikan $v_{\\text{atas}} = 1{,}20 v_{\\text{bawah}}$:<br>$$v_{\\text{atas}}^2 - v_{\\text{bawah}}^2 = (1{,}20 v_{\\text{bawah}})^2 - v_{\\text{bawah}}^2 = (1{,}44 - 1) v_{\\text{bawah}}^2 = 0{,}44 v_{\\text{bawah}}^2$$",
      "steps": "1. Masukkan besaran ke persamaan gaya angkat:<br>$$55.000\\text{ N} = \\frac{1}{2} \\times 1{,}0\\text{ kg/m}^3 \\times (0{,}44 v_{\\text{bawah}}^2) \\times 25\\text{ m}^2$$<br>$$55.000 = 5{,}5 \\cdot v_{\\text{bawah}}^2$$<br>2. Selesaikan untuk $v_{\\text{bawah}}$:<br>$$v_{\\text{bawah}}^2 = \\frac{55.000}{5{,}5} = 10.000\\text{ m}^2\\text{/s}^2 \\implies v_{\\text{bawah}} = \\sqrt{10.000} = 100\\text{ m/s}$$",
      "pitfalls": "Terkecoh salah menguadratkan persentase, misalnya mengira $(1{,}2)^2 - 1 = 0{,}2^2 = 0{,}04$, yang menghasilkan kesalahan faktor orde besaran."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Gaya angkat pada terbang mendatar sama dengan berat pesawat ($F_A = W$): $$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$Dengan mensubstitusikan $v_{\\text{atas}} = 1{,}20 v_{\\text{bawah}}$: $$v_{\\text{atas}}^2 - v_{\\text{bawah}}^2 = (1{,}20 v_{\\text{bawah}})^2 - v_{\\text{bawah}}^2 = (1{,}44 - 1) v_{\\text{bawah}}^2 = 0{,}44 v_{\\text{bawah}}^2$$."
  },
  {
    "id": "fis-flu-dinamis-sayap-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-flu",
    "subChapterId": "fis-flu-dinamis",
    "subTopicId": "fis-flu-dinamis-sayap",
    "category": "Gaya Angkat Pesawat",
    "difficulty": "sedang",
    "statement": "Sebuah pesawat latih bermassa $M = 2000\\text{ kg}$ melakukan manuver berbelok pada lintasan lingkaran mendatar (level banking turn) pada ketinggian konstan dengan memiringkan sayapnya sebesar $\\theta = 45^\\circ$ terhadap bidang datar. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya angkat aerodinamis total ($F_A$) yang harus dibangkitkan oleh sayap pesawat selama manuver belokan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10.000\\sqrt{2}\\text{ N}$",
      "$14.140\\text{ N}$",
      "$20.000\\text{ N}$",
      "$20.000\\sqrt{2}\\text{ N}$",
      "$40.000\\text{ N}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Saat pesawat berbelok dengan sayap miring bersudut $\\theta$ terhadap horizontal:<br>• Komponen vertikal gaya angkat menahan bobot pesawat: $F_A \\cos \\theta = M \\cdot g$<br>• Komponen horizontal gaya angkat berfungsi sebagai gaya sentripetal belokan: $F_A \\sin \\theta = \\frac{M v^2}{R}$<br>Sehingga gaya angkat total yang harus dihasilkan sayap adalah:<br>$$F_A = \\frac{M \\cdot g}{\\cos \\theta}$$",
      "steps": "1. Hitung berat pesawat:<br>$$W = M \\cdot g = 2000\\text{ kg} \\times 10\\text{ m/s}^2 = 20.000\\text{ N}$$<br>2. Masukkan sudut kemiringan $\\theta = 45^\\circ$ di mana $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$:<br>$$F_A = \\frac{20.000\\text{ N}}{\\frac{1}{2}\\sqrt{2}} = \\frac{40.000}{\\sqrt{2}} = 20.000\\sqrt{2}\\text{ N}$$",
      "pitfalls": "Siswa sering menganggap gaya angkat tetap sama dengan berat pesawat ($20.000\\text{ N}$, opsi C), padahal saat berbelok gaya angkat harus dinaikkan karena sebagian vektor gaya dialihkan menjadi gaya sentripetal."
    },
    "subTopicSlug": "gaya-angkat-pesawat",
    "bab": "Fluida",
    "subBab": "Gaya Angkat Pesawat",
    "subTopic": "Gaya Angkat Pesawat",
    "chapterTitle": "Fluida",
    "difficultyLabel": "Sedang",
    "hint": "Saat pesawat berbelok dengan sayap miring bersudut $\\theta$ terhadap horizontal: • Komponen vertikal gaya angkat menahan bobot pesawat: $F_A \\cos \\theta = M \\cdot g$ • Komponen horizontal gaya angkat berfungsi sebagai gaya sentripetal belokan: $F_A \\sin \\theta = \\frac{M v^2}{R}$ Sehingga gaya angkat total yang harus dihasilkan sayap adalah: $$F_A = \\frac{M \\cdot g}{\\cos \\theta}$$."
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
