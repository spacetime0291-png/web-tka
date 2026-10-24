/**
 * Batch Task: TASK_fis-gel-bunyi-taraf_EASY
 * SubTopic: Intensitas & Taraf Intensitas (fis-gel-bunyi-taraf)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-taraf-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "mudah",
    statement: "Intensitas gelombang bunyi pada suatu ruangan terukur sebesar $I = 10^{-8}\\text{ W/m}^2$. Jika intensitas ambang pendengaran manusia ditetapkan $I_0 = 10^{-12}\\text{ W/m}^2$, besar taraf intensitas bunyi di ruangan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20\\text{ dB}$",
      "$30\\text{ dB}$",
      "$40\\text{ dB}$",
      "$50\\text{ dB}$",
      "$60\\text{ dB}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Taraf intensitas bunyi ($\\text{TI}$) dalam satuan desibel ($\\text{dB}$) didefinisikan sebagai logaritma dari perbandingan intensitas bunyi ($I$) terhadap intensitas ambang pendengaran ($I_0$):<br>$$\\text{TI} = 10 \\log\\left(\\frac{I}{I_0}\\right)$$",
      steps: "1. Substitusikan nilai $I = 10^{-8}\\text{ W/m}^2$ dan $I_0 = 10^{-12}\\text{ W/m}^2$:<br>$$\\frac{I}{I_0} = \\frac{10^{-8}}{10^{-12}} = 10^{-8 - (-12)} = 10^4$$<br>2. Hitung taraf intensitasnya:<br>$$\\text{TI} = 10 \\log(10^4) = 10 \\times 4 = 40\\text{ dB}$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Siswa terkadang lupa mengalikan dengan faktor 10 pada skala desibel sehingga menjawab 4 dB, atau salah dalam menghitung pembagian bilangan berpangkat negatif."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "mudah",
    statement: "Suatu ruangan memiliki taraf intensitas bunyi sebesar $60\\text{ dB}$. Jika intensitas ambang pendengaran $I_0 = 10^{-12}\\text{ W/m}^2$, intensitas bunyi di dalam ruangan tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10^{-4}\\text{ W/m}^2$",
      "$10^{-5}\\text{ W/m}^2$",
      "$10^{-6}\\text{ W/m}^2$",
      "$10^{-7}\\text{ W/m}^2$",
      "$10^{-8}\\text{ W/m}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Hubungan kebalikan untuk menentukan intensitas bunyi ($I$) dari taraf intensitas ($\\text{TI}$) adalah:<br>$$\\text{TI} = 10 \\log\\left(\\frac{I}{I_0}\\right) \\implies \\log\\left(\\frac{I}{I_0}\\right) = \\frac{\\text{TI}}{10} \\implies I = I_0 \\times 10^{\\frac{\\text{TI}}{10}}$$",
      steps: "1. Masukkan nilai $\\text{TI} = 60\\text{ dB}$:<br>$$\\frac{60}{10} = \\log\\left(\\frac{I}{10^{-12}}\\right) \\implies \\log\\left(\\frac{I}{10^{-12}}\\right) = 6$$<br>2. Bentuk persamaan eksponen:<br>$$\\frac{I}{10^{-12}} = 10^6 \\implies I = 10^{-12} \\times 10^6 = 10^{-6}\\text{ W/m}^2$$<br>3. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Hati-hati saat mengalikan $10^{-12} \\times 10^6$: pangkat dijumlahkan $(-12 + 6 = -6)$, bukan dikalikan."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "mudah",
    statement: "Titik A berjarak $2\\text{ m}$ dari sebuah sumber bunyi titik dan menerima intensitas bunyi sebesar $I_A = 36\\text{ W/m}^2$. Besar intensitas bunyi yang diterima oleh titik B yang berjarak $6\\text{ m}$ dari sumber bunyi yang sama adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ W/m}^2$",
      "$6\\text{ W/m}^2$",
      "$9\\text{ W/m}^2$",
      "$12\\text{ W/m}^2$",
      "$18\\text{ W/m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Gelombang bunyi yang memancar dari sumber titik isotropis menyebar ke permukaan bola ($A = 4\\pi r^2$). Oleh karena itu, intensitas bunyi berbanding terbalik dengan kuadrat jarak:<br>$$I = \\frac{P}{4\\pi r^2} \\implies \\frac{I_B}{I_A} = \\left(\\frac{r_A}{r_B}\\right)^2$$",
      steps: "1. Diketahui $r_A = 2\\text{ m}$, $r_B = 6\\text{ m}$, dan $I_A = 36\\text{ W/m}^2$.<br>2. Gunakan perbandingan terbalik kuadrat jarak:<br>$$\\frac{I_B}{36} = \\left(\\frac{2}{6}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$$<br>3. Hitung $I_B$:<br>$$I_B = \\frac{36}{9} = 4\\text{ W/m}^2$$<br>4. Jawaban yang benar adalah pilihan A.",
      pitfalls: "Kesalahan umum adalah menganggap intensitas berbanding terbalik linier dengan jarak ($I \\propto 1/r$), yang menghasilkan $I_B = 36 \\times (2/6) = 12\\text{ W/m}^2$ (opsi D)."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "mudah",
    statement: "Taraf intensitas bunyi sebuah klakson sepeda motor pada jarak tertentu adalah $70\\text{ dB}$. Jika terdapat $10$ klakson sepeda motor identik dibunyikan secara serentak pada jarak yang sama, taraf intensitas total yang dihasilkan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$71\\text{ dB}$",
      "$75\\text{ dB}$",
      "$80\\text{ dB}$",
      "$700\\text{ dB}$",
      "$800\\text{ dB}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Taraf intensitas untuk $n$ sumber bunyi identik yang berbunyi serentak dihitung dengan rumus:<br>$$\\text{TI}_n = \\text{TI}_1 + 10 \\log(n)$$",
      steps: "1. Diketahui taraf intensitas 1 sumber $\\text{TI}_1 = 70\\text{ dB}$ dan jumlah sumber $n = 10$.<br>2. Masukkan ke dalam rumus taraf intensitas multi sumber:<br>$$\\text{TI}_{10} = 70 + 10 \\log(10)$$<br>3. Karena $\\log(10) = 1$, maka:<br>$$\\text{TI}_{10} = 70 + 10(1) = 80\\text{ dB}$$<br>4. Jawaban yang benar adalah pilihan C.",
      pitfalls: "Sering terjadi kesalahan fatal dengan mengalikan langsung taraf intensitas dengan jumlah sumber ($70 \\times 10 = 700\\text{ dB}$, opsi D). Taraf intensitas menggunakan skala logaritmik, sehingga yang dijumlahkan secara linier adalah intensitas ($I$), bukan taraf intensitas ($\\text{TI}$)."
    }
  },
  {
    id: "fis-gel-bunyi-taraf-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-taraf",
    category: "Intensitas & Taraf Intensitas",
    difficulty: "mudah",
    statement: "Taraf intensitas bunyi sebuah mesin pabrik yang terukur pada jarak $10\\text{ m}$ dari mesin adalah $90\\text{ dB}$. Besar taraf intensitas bunyi pada jarak $100\\text{ m}$ dari mesin tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$80\\text{ dB}$",
      "$85\\text{ dB}$",
      "$89\\text{ dB}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Perubahan taraf intensitas akibat perubahan jarak dari sumber bunyi titik memenuhi persamaan:<br>$$\\text{TI}_2 = \\text{TI}_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      steps: "1. Diketahui $\\text{TI}_1 = 90\\text{ dB}$, $r_1 = 10\\text{ m}$, dan $r_2 = 100\\text{ m}$.<br>2. Hitung perbandingan jarak:<br>$$\\frac{r_2}{r_1} = \\frac{100}{10} = 10$$<br>3. Hitung $\\text{TI}_2$:<br>$$\\text{TI}_2 = 90 - 20 \\log(10) = 90 - 20(1) = 70\\text{ dB}$$<br>4. Jawaban yang benar adalah pilihan B.",
      pitfalls: "Siswa sering keliru menggunakan faktor 10 dan bukan 20 untuk perbandingan jarak, sehingga memperoleh $90 - 10 = 80\\text{ dB}$ (opsi C). Faktor 20 muncul karena intensitas berbanding terbalik dengan kuadrat jarak ($10 \\log(r^{-2}) = -20 \\log r$)."
    }
  }
];
