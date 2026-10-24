/**
 * Batch Task: TASK_fis-flu-dinamis-sayap_EASY
 * SubTopic: Gaya Angkat Pesawat (fis-flu-dinamis-sayap)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-sayap-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "mudah",
    statement: "Penampang sayap pesawat terbang dirancang khusus dengan profil aerofoil, yaitu permukaan atas lebih melengkung cembung daripada permukaan bawahnya yang relatif mendatar. Kondisi kelajuan aliran udara ($v$) dan tekanan udara ($P$) yang tepat saat pesawat sedang mengudara adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$v_{\\text{atas}} > v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} < P_{\\text{bawah}}$",
      "$v_{\\text{atas}} < v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} > P_{\\text{bawah}}$",
      "$v_{\\text{atas}} > v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} > P_{\\text{bawah}}$",
      "$v_{\\text{atas}} = v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} = P_{\\text{bawah}}$",
      "$v_{\\text{atas}} < v_{\\text{bawah}}$ sehingga $P_{\\text{atas}} < P_{\\text{bawah}}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Berdasarkan prinsip Bernoulli:<br>1) Bentuk aerofoil memaksa udara yang melintasi permukaan atas sayap mengalir lebih cepat dibanding permukaan bawah ($v_{\\text{atas}} > v_{\\text{bawah}}$).<br>2) Berdasarkan Persamaan Bernoulli ($P + \\frac{1}{2}\\rho v^2 = \\text{konstan}$), di mana kelajuan fluida lebih besar, tekanan statisnya akan lebih kecil ($P_{\\text{atas}} < P_{\\text{bawah}}$).<br>3) Perbedaan tekanan ini menghasilkan gaya angkat neto ke atas:<br>$$F_A = (P_{\\text{bawah}} - P_{\\text{atas}}) \\cdot A > 0$$",
      steps: "1. Tinjau kelajuan: Bentuk melengkung di atas sayap menyebabkan garis alir merapat $\\implies v_{\\text{atas}} > v_{\\text{bawah}}$.<br>2. Tinjau tekanan: Menurut Bernoulli, kelajuan tinggi $\\implies P_{\\text{atas}} < P_{\\text{bawah}}$.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Siswa sering mengira bahwa kelajuan yang lebih tinggi menghasilkan tekanan yang lebih besar, padahal menurut Hukum Bernoulli hubungan antara kelajuan dan tekanan statis adalah berbanding terbalik."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "mudah",
    statement: "Sebuah pesawat terbang memiliki luas total sayap $A = 50\\text{ m}^2$. Saat melaju mendatar, kelajuan aliran udara di atas sayap terukur $v_{\\text{atas}} = 250\\text{ m/s}$ dan di bawah sayap terukur $v_{\\text{bawah}} = 200\\text{ m/s}$. Jika massa jenis udara di sekitar pesawat adalah $\\rho = 1{,}20\\text{ kg/m}^3$, besar gaya angkat aerodinamis yang bekerja pada sayap pesawat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$3{,}375 \\times 10^5\\text{ N}$",
      "$5{,}400 \\times 10^5\\text{ N}$",
      "$6{,}750 \\times 10^5\\text{ N}$",
      "$1{,}350 \\times 10^6\\text{ N}$",
      "$2{,}700 \\times 10^6\\text{ N}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gaya angkat sayap pesawat dirumuskan langsung dari selisih tekanan Bernoulli:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$",
      steps: "1. Kuadratkan masing-masing kelajuan udara:<br>• $v_{\\text{atas}}^2 = (250\\text{ m/s})^2 = 62.500\\text{ m}^2\\text{/s}^2$<br>• $v_{\\text{bawah}}^2 = (200\\text{ m/s})^2 = 40.000\\text{ m}^2\\text{/s}^2$<br>• Selisih kuadrat: $62.500 - 40.000 = 22.500\\text{ m}^2\\text{/s}^2$<br>2. Hitung gaya angkat sayap:<br>$$F_A = \\frac{1}{2} \\times 1{,}20\\text{ kg/m}^3 \\times 22.500\\text{ m}^2\\text{/s}^2 \\times 50\\text{ m}^2$$<br>$$F_A = 0{,}60 \\times 22.500 \\times 50 = 675.000\\text{ N} = 6{,}750 \\times 10^5\\text{ N}$$",
      pitfalls: "Kesalahan paling lazim adalah mengurangkan kelajuan terlebih dahulu baru dikuadratkan: $(250 - 200)^2 = 50^2 = 2500$ (yang menghasilkan nilai $75.000\\text{ N}$). Ingat bahwa yang dihitung adalah selisih kuadrat ($v_a^2 - v_b^2$), bukan kuadrat selisih ($(v_a - v_b)^2$)."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "mudah",
    statement: "Sebuah pesawat terbang komersial sedang berada pada kondisi terbang jelajah mendatar (cruising) dengan ketinggian dan kelajuan konstan. Hubungan kesetimbangan gaya vertikal yang harus dipenuhi pesawat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Gaya angkat sayap ($F_A$) harus sama besar dengan gaya berat total pesawat ($W$)",
      "Gaya angkat sayap ($F_A$) harus lebih besar daripada gaya berat total pesawat ($W$)",
      "Gaya angkat sayap ($F_A$) harus sama besar dengan gaya dorong mesin pesawat ($T$)",
      "Gaya angkat sayap ($F_A$) bernilai nol karena kelajuan sudah konstan",
      "Gaya berat pesawat ($W$) dinetralkan seluruhnya oleh gaya hambat udara ($D$)"
    ],
    correctIndex: 0,
    solution: {
      concept: "Pada penerbangan mendatar dengan ketinggian konstan (tidak naik dan tidak turun), percepatan vertikal pesawat bernilai nol ($a_y = 0$). Sesuai Hukum I Newton:<br>$$\\Sigma F_y = 0 \\implies F_A - W = 0 \\iff F_A = W = m \\cdot g$$Di mana $F_A$ adalah gaya angkat aerodinamis sayap dan $W$ adalah gaya berat total pesawat beserta muatannya.",
      steps: "1. Identifikasi kondisi penerbangan: terbang jelajah mendatar pada ketinggian konstan.<br>2. Resultan gaya vertikal harus nol (kesetimbangan statis/dinamis vertikal).<br>3. Maka gaya angkat ke atas harus tepat mengimbangi gaya berat ke bawah ($F_A = W$).",
      pitfalls: "Siswa sering mengira pesawat yang sedang terbang tinggi harus selalu memiliki $F_A > W$. Kondisi $F_A > W$ hanya berlaku saat pesawat sedang naik (climbing) menambah ketinggian."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "mudah",
    statement: "Pada fase lepas landas (take off) dan pendaratan (landing), pilot mengaktifkan sirip sayap tambahan (flaps dan slats) di bagian tepi sayap pesawat. Fungsi aerodinamis utama dari pembentangan flaps ini adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Memperluas area efektif sayap dan memperbesar kelengkungan profil sayap untuk mempertahankan gaya angkat tinggi pada kelajuan rendah",
      "Mengurangi massa jenis udara di sekitar sayap agar hambatan udara berkurang drastis",
      "Menghilangkan gaya angkat sayap sama sekali agar roda pesawat tidak bergesekan dengan landasan",
      "Mengurangi luas penampang sayap agar kelajuan pesawat meningkat tajam saat mendarat",
      "Mengarahkan aliran udara agar berpusar di atas sayap untuk memicu turbulensi"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gaya angkat pesawat sebanding dengan luas sayap ($A$) dan koefisien gaya angkat yang bergantung pada kelengkungan profil sayap:<br>$$F_A = \\frac{1}{2} C_L \\cdot \\rho \\cdot v^2 \\cdot A$$Saat lepas landas dan mendarat, kelajuan pesawat ($v$) relatif rendah. Pembentangan flaps memperbesar luas sayap ($A$) dan memperbesar kelengkungan (camber) sayap, sehingga nilai $C_L$ dan $A$ melonjak untuk mempertahankan gaya angkat yang cukup menopang bobot pesawat.",
      steps: "1. Analisis fungsi flaps: Menambah luasan sayap dan kelengkungan aerofoil.<br>2. Dampak fisis: Menghasilkan gaya angkat memadai pada kecepatan pesawat yang relatif lambat saat manuver di landasan.<br>3. Pilihan yang tepat adalah opsi A.",
      pitfalls: "Siswa sering mengira flaps hanya berfungsi sebagai rem angin (air brake), padahal fungsi utamanya adalah sebagai penambah gaya angkat pada kelajuan rendah (high-lift device)."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "mudah",
    statement: "Sepasang sayap sebuah pesawat terbang menghasilkan gaya angkat total sebesar $F_A = 120.000\\text{ N}$. Jika luas total permukaan efektif kedua sayap pesawat adalah $A = 40\\text{ m}^2$, maka besar selisih tekanan udara antara permukaan bawah dan permukaan atas sayap ($\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1.500\\text{ Pa}$",
      "$2.400\\text{ Pa}$",
      "$3.000\\text{ Pa}$",
      "$4.800\\text{ Pa}$",
      "$6.000\\text{ Pa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gaya angkat aerodinamis sayap adalah hasil kali selisih tekanan statis antara sisi bawah dan sisi atas sayap dengan luas penampang sayap:<br>$$F_A = \\Delta P \\cdot A \\implies \\Delta P = \\frac{F_A}{A}$$",
      steps: "1. Identifikasi data yang diketahui:<br>• Gaya angkat total: $F_A = 120.000\\text{ N}$<br>• Luas penampang sayap: $A = 40\\text{ m}^2$<br>2. Hitung selisih tekanan:<br>$$\\Delta P = \\frac{120.000\\text{ N}}{40\\text{ m}^2} = 3.000\\text{ N/m}^2 = 3.000\\text{ Pa}$$",
      pitfalls: "Kesalahan perhitungan pembagian atau lupa bahwa $\\Delta P = P_{\\text{bawah}} - P_{\\text{atas}}$, bukan tekanan mutlak atmosfer."
    }
  }
];
