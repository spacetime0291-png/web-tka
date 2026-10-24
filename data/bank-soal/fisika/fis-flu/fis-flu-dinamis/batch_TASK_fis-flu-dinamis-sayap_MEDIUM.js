/**
 * Batch Task: TASK_fis-flu-dinamis-sayap_MEDIUM
 * SubTopic: Gaya Angkat Pesawat (fis-flu-dinamis-sayap)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-flu-dinamis-sayap-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "sedang",
    statement: "Sebuah pesawat terbang bermassa total $M = 16.400\\text{ kg}$ sedang terbang mendatar pada ketinggian konstan di mana massa jenis udara adalah $\\rho = 1{,}0\\text{ kg/m}^3$. Pesawat memiliki sepasang sayap dengan luas total $A = 80\\text{ m}^2$. Jika kelajuan aliran udara yang melintasi permukaan bawah sayap terukur $v_{\\text{bawah}} = 200\\text{ m/s}$ dan percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan aliran udara di atas permukaan sayap ($v_{\\text{atas}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$205\\text{ m/s}$",
      "$210\\text{ m/s}$",
      "$215\\text{ m/s}$",
      "$220\\text{ m/s}$",
      "$225\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Saat pesawat terbang mendatar pada ketinggian konstan, gaya angkat aerodinamis sayap sama besar dengan berat total pesawat:<br>$$F_A = W = M \\cdot g$$Menurut Persamaan Bernoulli:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A \\implies v_{\\text{atas}} = \\sqrt{v_{\\text{bawah}}^2 + \\frac{2 \\cdot M \\cdot g}{\\rho \\cdot A}}$$",
      steps: "1. Hitung berat pesawat:<br>$$W = 16.400\\text{ kg} \\times 10\\text{ m/s}^2 = 164.000\\text{ N}$$<br>2. Hubungkan dengan persamaan gaya angkat sayap:<br>$$164.000\\text{ N} = \\frac{1}{2} \\times 1{,}0\\text{ kg/m}^3 \\times (v_{\\text{atas}}^2 - 200^2) \\times 80\\text{ m}^2$$<br>$$164.000 = 40 \\times (v_{\\text{atas}}^2 - 40.000)$$<br>3. Selesaikan untuk $v_{\\text{atas}}$:<br>$$v_{\\text{atas}}^2 - 40.000 = \\frac{164.000}{40} = 4.100$$<br>$$v_{\\text{atas}}^2 = 40.000 + 4.100 = 44.100\\text{ m}^2\\text{/s}^2 \\implies v_{\\text{atas}} = \\sqrt{44.100} = 210\\text{ m/s}$$",
      pitfalls: "Siswa sering lupa mengalikan massa pesawat dengan percepatan gravitasi bumi $g$ sehingga gaya angkat menjadi 10 kali lebih kecil."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "sedang",
    statement: "Sebuah pesawat terbang di bandara tepi laut (massa jenis udara $\\rho_1 = 1{,}28\\text{ kg/m}^3$) dapat lepas landas pada kelajuan tinggal landas minimum $v_1 = 60\\text{ m/s}$. Jika pesawat yang sama dengan beban muatan yang persis sama hendak lepas landas di bandara dataran tinggi dengan kerapatan udara lebih rendah, yaitu $\\rho_2 = 0{,}72\\text{ kg/m}^3$, kelajuan tinggal landas minimum yang dibutuhkan pesawat tersebut ($v_2$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$70\\text{ m/s}$",
      "$75\\text{ m/s}$",
      "$80\\text{ m/s}$",
      "$90\\text{ m/s}$",
      "$100\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gaya angkat sayap yang dibutuhkan untuk lepas landas harus sama dengan berat pesawat ($F_A = W = \\text{konstan}$). Karena bentuk aerofoil dan luas sayap tetap, gaya angkat berbanding lurus dengan $\\rho \\cdot v^2$:<br>$$\\rho_1 \\cdot v_1^2 = \\rho_2 \\cdot v_2^2 \\implies v_2 = v_1 \\cdot \\sqrt{\\frac{\\rho_1}{\\rho_2}}$$",
      steps: "1. Tuliskan perbandingan kerapatan udara:<br>$$\\frac{\\rho_1}{\\rho_2} = \\frac{1{,}28\\text{ kg/m}^3}{0{,}72\\text{ kg/m}^3} = \\frac{128}{72} = \\frac{16}{9}$$<br>2. Tarik akar rasio kerapatan:<br>$$\\sqrt{\\frac{\\rho_1}{\\rho_2}} = \\sqrt{\\frac{16}{9}} = \\frac{4}{3}$$<br>3. Hitung kelajuan lepas landas di dataran tinggi:<br>$$v_2 = 60\\text{ m/s} \\times \\frac{4}{3} = 80\\text{ m/s}$$",
      pitfalls: "Terkecoh membalik perbandingan kerapatan sehingga menghitung kelajuan yang lebih lambat ($60 \\times \\frac{3}{4} = 45\\text{ m/s}$). Di udara yang lebih tipis (massa jenis rendah), pesawat membutuhkan laju lebih tinggi untuk menghasilkan gaya angkat yang sama."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "sedang",
    statement: "Sebuah pesawat terbang bermassa $M = 10.000\\text{ kg}$ sedang melakukan manuver menanjak (climbing) vertikal dengan percepatan ke atas sebesar $a = 2\\text{ m/s}^2$. Luas total permukaan sayap adalah $A = 50\\text{ m}^2$, percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, dan massa jenis udara $\\rho = 1{,}20\\text{ kg/m}^3$. Selisih kuadrat kelajuan aliran udara antara bagian atas dan bagian bawah sayap ($v_{\\text{atas}}^2 - v_{\\text{bawah}}^2$) yang harus dihasilkan sayap pesawat saat itu adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2.500\\text{ m}^2\\text{/s}^2$",
      "$3.333\\text{ m}^2\\text{/s}^2$",
      "$4.000\\text{ m}^2\\text{/s}^2$",
      "$5.000\\text{ m}^2\\text{/s}^2$",
      "$6.000\\text{ m}^2\\text{/s}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Menurut Hukum II Newton pada arah vertikal pesawat yang dipercepat ke atas:<br>$$\\Sigma F_y = M \\cdot a \\implies F_A - M \\cdot g = M \\cdot a \\iff F_A = M(g + a)$$Gaya angkat ini dihubungkan dengan prinsip Bernoulli sayap:<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$",
      steps: "1. Hitung gaya angkat total yang dibutuhkan:<br>$$F_A = 10.000\\text{ kg} \\times (10 + 2)\\text{ m/s}^2 = 10.000 \\times 12 = 120.000\\text{ N}$$<br>2. Masukkan ke rumus gaya angkat Bernoulli:<br>$$120.000 = \\frac{1}{2} \\times 1{,}20 \\times (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\times 50$$<br>$$120.000 = 30 \\times (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)$$<br>3. Hitung selisih kuadrat kelajuan:<br>$$v_{\\text{atas}}^2 - v_{\\text{bawah}}^2 = \\frac{120.000}{30} = 4.000\\text{ m}^2\\text{/s}^2$$",
      pitfalls: "Siswa sering mengabaikan percepatan ke atas $a = 2\\text{ m/s}^2$ dan hanya menggunakan berat pesawat biasa ($100.000\\text{ N}$) sehingga memperoleh nilai $3.333\\text{ m}^2\\text{/s}^2$ (opsi B)."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "sedang",
    statement: "Saat terbang mendatar stabil, kelajuan aliran udara di atas sayap sebuah pesawat tercatat $20\\%$ lebih cepat daripada kelajuan aliran udara di bawah sayapnya ($v_{\\text{atas}} = 1{,}20 v_{\\text{bawah}}$). Pesawat memiliki berat total $W = 55.000\\text{ N}$ dan luas efektif sayap $A = 25\\text{ m}^2$. Jika massa jenis udara sekitar adalah $\\rho = 1{,}0\\text{ kg/m}^3$, kelajuan aliran udara di bawah sayap pesawat ($v_{\\text{bawah}}$) adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$80\\text{ m/s}$",
      "$90\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$110\\text{ m/s}$",
      "$120\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gaya angkat pada terbang mendatar sama dengan berat pesawat ($F_A = W$):<br>$$F_A = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) \\cdot A$$Dengan mensubstitusikan $v_{\\text{atas}} = 1{,}20 v_{\\text{bawah}}$:<br>$$v_{\\text{atas}}^2 - v_{\\text{bawah}}^2 = (1{,}20 v_{\\text{bawah}})^2 - v_{\\text{bawah}}^2 = (1{,}44 - 1) v_{\\text{bawah}}^2 = 0{,}44 v_{\\text{bawah}}^2$$",
      steps: "1. Masukkan besaran ke persamaan gaya angkat:<br>$$55.000\\text{ N} = \\frac{1}{2} \\times 1{,}0\\text{ kg/m}^3 \\times (0{,}44 v_{\\text{bawah}}^2) \\times 25\\text{ m}^2$$<br>$$55.000 = 5{,}5 \\cdot v_{\\text{bawah}}^2$$<br>2. Selesaikan untuk $v_{\\text{bawah}}$:<br>$$v_{\\text{bawah}}^2 = \\frac{55.000}{5{,}5} = 10.000\\text{ m}^2\\text{/s}^2 \\implies v_{\\text{bawah}} = \\sqrt{10.000} = 100\\text{ m/s}$$",
      pitfalls: "Terkecoh salah menguadratkan persentase, misalnya mengira $(1{,}2)^2 - 1 = 0{,}2^2 = 0{,}04$, yang menghasilkan kesalahan faktor orde besaran."
    }
  },
  {
    id: "fis-flu-dinamis-sayap-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subChapterId: "fis-flu-dinamis",
    subTopicId: "fis-flu-dinamis-sayap",
    category: "Gaya Angkat Pesawat",
    difficulty: "sedang",
    statement: "Sebuah pesawat latih bermassa $M = 2000\\text{ kg}$ melakukan manuver berbelok pada lintasan lingkaran mendatar (level banking turn) pada ketinggian konstan dengan memiringkan sayapnya sebesar $\\theta = 45^\\circ$ terhadap bidang datar. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya angkat aerodinamis total ($F_A$) yang harus dibangkitkan oleh sayap pesawat selama manuver belokan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10.000\\sqrt{2}\\text{ N}$",
      "$14.140\\text{ N}$",
      "$20.000\\text{ N}$",
      "$20.000\\sqrt{2}\\text{ N}$",
      "$40.000\\text{ N}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Saat pesawat berbelok dengan sayap miring bersudut $\\theta$ terhadap horizontal:<br>• Komponen vertikal gaya angkat menahan bobot pesawat: $F_A \\cos \\theta = M \\cdot g$<br>• Komponen horizontal gaya angkat berfungsi sebagai gaya sentripetal belokan: $F_A \\sin \\theta = \\frac{M v^2}{R}$<br>Sehingga gaya angkat total yang harus dihasilkan sayap adalah:<br>$$F_A = \\frac{M \\cdot g}{\\cos \\theta}$$",
      steps: "1. Hitung berat pesawat:<br>$$W = M \\cdot g = 2000\\text{ kg} \\times 10\\text{ m/s}^2 = 20.000\\text{ N}$$<br>2. Masukkan sudut kemiringan $\\theta = 45^\\circ$ di mana $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$:<br>$$F_A = \\frac{20.000\\text{ N}}{\\frac{1}{2}\\sqrt{2}} = \\frac{40.000}{\\sqrt{2}} = 20.000\\sqrt{2}\\text{ N}$$",
      pitfalls: "Siswa sering menganggap gaya angkat tetap sama dengan berat pesawat ($20.000\\text{ N}$, opsi C), padahal saat berbelok gaya angkat harus dinaikkan karena sebagian vektor gaya dialihkan menjadi gaya sentripetal."
    }
  }
];
