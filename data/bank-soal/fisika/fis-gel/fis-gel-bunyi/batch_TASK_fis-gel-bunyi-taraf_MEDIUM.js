/**
 * Batch Task: TASK_fis-gel-bunyi-taraf_MEDIUM
 * SubTopic: Intensitas & Taraf Intensitas (fis-gel-bunyi-taraf)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-taraf-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "sedang",
    statement: "Taraf intensitas bunyi sebuah mesin tik pada jarak $2\\text{ m}$ adalah $50\\text{ dB}$. Jika terdapat $100$ mesin tik identik yang diketik bersamaan dan didengarkan pada jarak $20\\text{ m}$, taraf intensitas bunyi total yang terukur adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ dB}$",
      "$50\\text{ dB}$",
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$90\\text{ dB}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Kombinasi pengaruh penambahan jumlah sumber ($n$) dan perubahan jarak ($r$) terhadap taraf intensitas dirumuskan:<br>$$\\text{TI}' = \\text{TI}_1 + 10 \\log(n) - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      steps: "1. Identifikasi variabel: $\\text{TI}_1 = 50\\text{ dB}$, $r_1 = 2\\text{ m}$, $n = 100$, dan $r_2 = 20\\text{ m}$.<br>2. Hitung kontribusi penambahan sumber bunyi:<br>$$\\Delta \\text{TI}_n = 10 \\log(100) = 10(2) = +20\\text{ dB}$$<br>3. Hitung efek pelemahan akibat pertambahan jarak:<br>$$\\Delta \\text{TI}_r = -20 \\log\\left(\\frac{20}{2}\\right) = -20 \\log(10) = -20(1) = -20\\text{ dB}$$<br>4. Jumlahkan seluruh kontribusi:<br>$$\\text{TI}' = 50 + 20 - 20 = 50\\text{ dB}$$<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Pertambahan taraf intensitas akibat 100 sumber (+20 dB) tepat saling meniadakan dengan pelemahan akibat jarak yang menjauh 10 kali lipat (-20 dB). Jangan lupa tanda minus pada suku jarak."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "sedang",
    statement: "Suatu konser musik menghasilkan taraf intensitas $80\\text{ dB}$ ketika $1$ unit pengeras suara bekerja. Penyelenggara kemudian menyalakan beberapa pengeras suara identik tambahan sehingga taraf intensitas total pada jarak yang sama meningkat menjadi $93\\text{ dB}$. Jika diketahui $\\log 2 \\approx 0{,}3$, jumlah total pengeras suara yang dinyalakan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ unit}$",
      "$13\\text{ unit}$",
      "$15\\text{ unit}$",
      "$20\\text{ unit}$",
      "$25\\text{ unit}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Peningkatan taraf intensitas ($\\Delta\\text{TI}$) akibat penambahan jumlah sumber identik pada jarak yang sama adalah:<br>$$\\Delta \\text{TI} = \\text{TI}_n - \\text{TI}_1 = 10 \\log(n)$$",
      steps: "1. Hitung selisih taraf intensitas:<br>$$\\Delta \\text{TI} = 93 - 80 = 13\\text{ dB}$$<br>2. Hubungkan dengan persamaan logaritma:<br>$$10 \\log(n) = 13 \\implies \\log(n) = 1{,}3$$<br>3. Uraikan bentuk logaritma menggunakan nilai $\\log 2 \\approx 0{,}3$:<br>$$1{,}3 = 1 + 0{,}3 = \\log(10) + \\log(2) = \\log(10 \\times 2) = \\log(20)$$<br>4. Diperoleh jumlah sumber $n = 20\\text{ unit}$.<br>5. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Siswa sering terkecoh dengan mengira $13\\text{ dB}$ berarti penambahan $13$ sumber (opsi B) karena mengira hubungan taraf intensitas dan jumlah sumber bersifat linier."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "sedang",
    statement: "Pada jarak $5\\text{ m}$ dari sebuah sumber bunyi titik yang memancarkan energi secara isotropis ke segala arah, terukur taraf intensitas sebesar $80\\text{ dB}$. Jika intensitas ambang pendengaran $I_0 = 10^{-12}\\text{ W/m}^2$, besar daya akustik rata-rata dari sumber bunyi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\pi \\times 10^{-3}\\text{ W}$",
      "$\\pi \\times 10^{-2}\\text{ W}$",
      "$2\\pi \\times 10^{-2}\\text{ W}$",
      "$4\\pi \\times 10^{-2}\\text{ W}$",
      "$10^{-2}\\text{ W}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Daya akustik sumber ($P$) dapat ditentukan dari intensitas bunyi ($I$) melalui luas permukaan bola muka gelombang ($A = 4\\pi r^2$):<br>$$I = I_0 \\times 10^{\\frac{\\text{TI}}{10}}, \\quad P = I \\times A = I \\times (4\\pi r^2)$$",
      steps: "1. Konversi taraf intensitas $\\text{TI} = 80\\text{ dB}$ ke intensitas bunyi:<br>$$I = 10^{-12} \\times 10^{\\frac{80}{10}} = 10^{-12} \\times 10^8 = 10^{-4}\\text{ W/m}^2$$<br>2. Hitung luas permukaan bola pada radius $r = 5\\text{ m}$:<br>$$A = 4\\pi r^2 = 4\\pi (5)^2 = 100\\pi\\text{ m}^2$$<br>3. Hitung daya akustik sumber:<br>$$P = I \\times A = 10^{-4}\\text{ W/m}^2 \\times 100\\pi\\text{ m}^2 = \\pi \\times 10^{-2}\\text{ Watt}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jangan menggunakan luas lingkaran $\\pi r^2$. Bunyi dari sumber titik memancar ke ruang tiga dimensi, sehingga luas permukaan yang digunakan wajib luas kulit bola $4\\pi r^2$."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "sedang",
    statement: "Sebuah sirine pabrik menghasilkan taraf intensitas $100\\text{ dB}$ pada jarak $4\\text{ m}$. Agar taraf intensitas sirine tersebut turun hingga mencapai batas nyaman pendengaran sebesar $60\\text{ dB}$, posisi pengamat harus berjarak sejauh ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\text{ m}$",
      "$80\\text{ m}$",
      "$200\\text{ m}$",
      "$400\\text{ m}$",
      "$800\\text{ m}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Hubungan penurunan taraf intensitas terhadap pertambahan jarak memenuhi persamaan logaritmik kuadrat jarak:<br>$$\\text{TI}_1 - \\text{TI}_2 = 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      steps: "1. Substitusikan $\\text{TI}_1 = 100\\text{ dB}$, $\\text{TI}_2 = 60\\text{ dB}$, dan $r_1 = 4\\text{ m}$:<br>$$100 - 60 = 20 \\log\\left(\\frac{r_2}{4}\\right) \\implies 40 = 20 \\log\\left(\\frac{r_2}{4}\\right)$$<br>2. Sederhanakan persamaan logaritma:<br>$$\\log\\left(\\frac{r_2}{4}\\right) = 2 \\implies \\frac{r_2}{4} = 10^2 = 100$$<br>3. Hitung jarak $r_2$:<br>$$r_2 = 4 \\times 100 = 400\\text{ m}$$<br>4. Jawaban yang benar adalah pilihan D.",
      pitfalls: "Jika keliru menggunakan rumus $\\Delta\\text{TI} = 10 \\log(r_2/r_1)$, maka diperoleh $\\log(r_2/4) = 4 \\implies r_2 = 40.000\\text{ m}$. Ingat bahwa untuk jarak selalu berlaku koefisien 20 karena $I \\propto 1/r^2$."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "sedang",
    statement: "Dua buah mesin berbeda tipe diuji di dalam laboratorium akustik. Mesin pertama menghasilkan taraf intensitas $\\text{TI}_1 = 60\\text{ dB}$, sedangkan mesin kedua menghasilkan taraf intensitas $\\text{TI}_2 = 60\\text{ dB}$. Jika kedua mesin dioperasikan secara bersamaan pada titik ukur yang sama dan diketahui $\\log 2 \\approx 0{,}3$, besar taraf intensitas totalnya adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ dB}$",
      "$63\\text{ dB}$",
      "$66\\text{ dB}$",
      "$90\\text{ dB}$",
      "$120\\text{ dB}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Taraf intensitas total dari dua sumber bunyi tidak dapat dijumlahkan secara langsung dalam satuan $\\text{dB}$. Yang dijumlahkan secara langsung adalah intensitas fisik ($I$) masing-masing sumber:<br>$$I_{\\text{tot}} = I_1 + I_2 \\implies \\text{TI}_{\\text{tot}} = 10 \\log\\left(\\frac{I_{\\text{tot}}}{I_0}\\right)$$",
      steps: "1. Hitung intensitas bunyi mesin pertama dan kedua:<br>$$I_1 = 10^{-12} \\times 10^{\\frac{60}{10}} = 10^{-6}\\text{ W/m}^2$$<br>$$I_2 = 10^{-12} \\times 10^{\\frac{60}{10}} = 10^{-6}\\text{ W/m}^2$$<br>2. Jumlahkan intensitas total:<br>$$I_{\\text{tot}} = 10^{-6} + 10^{-6} = 2 \\times 10^{-6}\\text{ W/m}^2$$<br>3. Hitung taraf intensitas total:<br>$$\\text{TI}_{\\text{tot}} = 10 \\log\\left(\\frac{2 \\times 10^{-6}}{10^{-12}}\\right) = 10 \\log(2 \\times 10^6) = 10(6 + \\log 2)$$<br>4. Substitusikan $\\log 2 \\approx 0{,}3$:<br>$$\\text{TI}_{\\text{tot}} = 10(6 + 0{,}3) = 10(6{,}3) = 63\\text{ dB}$$<br>5. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Jebakan paling sering ditemui adalah menjumlahkan langsung nilai desibel $60 + 60 = 120\\text{ dB}$ (opsi E). Dua sumber yang identik intensitasnya selalu menghasilkan kenaikan tepat $+3\\text{ dB}$ ($10\\log 2 \\approx 3\\text{ dB}$)."
    }
  }
];
