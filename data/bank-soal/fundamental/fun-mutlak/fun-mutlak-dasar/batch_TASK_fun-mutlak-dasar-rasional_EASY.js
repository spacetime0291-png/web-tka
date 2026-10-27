/**
 * Batch Task: TASK_fun-mutlak-dasar-rasional_EASY
 * SubTopic: Pertidaksamaan & Nilai Mutlak: Syarat Fungsi Rasional (fun-mutlak-dasar-rasional)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fun-mutlak-dasar-rasional-001",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Syarat Terdefinisi Fungsi Rasional Sederhana",
    difficulty: "mudah",
    statement: "Fungsi rasional $f(x) = \\frac{5}{x - 3}$ terdefinisi untuk seluruh bilangan real $x$, kecuali untuk nilai $x$ sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-3$",
      "$0$",
      "$3$",
      "$5$",
      "$-5$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Fungsi rasional $\\frac{P(x)}{Q(x)}$ terdefinisi pada bilangan real jika dan hanya jika penyebutnya tidak bernilai nol ($Q(x) \\neq 0$).",
      steps: "1. Tentukan bagian penyebut fungsi, yaitu $x - 3$.\n2. Fungsi tidak terdefinisi saat penyebut bernilai nol:\n$$x - 3 = 0$$\n3. Selesaikan persamaan linier tersebut:\n$$x = 3$$\n4. Dengan demikian, fungsi terdefinisi untuk seluruh bilangan real kecuali $x = 3$.\n5. Jadi, nilai $x$ yang dikecualikan adalah $3$ (pilihan C).",
      pitfalls: "Menyamakan pembilang dengan nol sehingga memilih $x = 5$ atau salah tanda menjadi $x = -3$."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-002",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Daerah Asal Alami Fungsi Rasional Linier",
    difficulty: "mudah",
    statement: "Daerah asal alami (domain) dari fungsi $g(x) = \\frac{2x + 1}{x + 4}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -\\frac{1}{2}\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x > -4\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\ge -4\\}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Domain fungsi rasional mencakup seluruh bilangan real kecuali pembuat nol dari penyebut.",
      steps: "1. Syarat terdefinisi fungsi pecahan adalah penyebut tidak sama dengan nol:\n$$x + 4 \\neq 0$$\n2. Pindahkan konstanta 4 ke ruas kanan:\n$$x \\neq -4$$\n3. Tuliskan dalam notasi himpunan daerah asal:\n$$D_g = \\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$$\n4. Jadi, daerah asal fungsi adalah $\\{x \\in \\mathbb{R} \\mid x \\neq -4\\}$ (pilihan A).",
      pitfalls: "Memasukkan pembuat nol pembilang $2x + 1 = 0 \\implies x = -\\frac{1}{2}$ sebagai pembatas domain."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-003",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Nilai Pembuat Tidak Terdefinisi dengan Koefisien Penyebut Bukan Satu",
    difficulty: "mudah",
    statement: "Fungsi $h(x) = \\frac{x^2 - 1}{2x - 6}$ tidak terdefinisi pada nilai $x$ sama dengan ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-3$",
      "$-1$",
      "$1$",
      "$3$",
      "$6$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Fungsi pecahan tidak terdefinisi apabila pembagian dilakukan dengan angka nol (penyebut bernilai nol).",
      steps: "1. Ambil bagian penyebut dari fungsi $h(x)$:\n$$2x - 6$$\n2. Buat penyebut bernilai nol:\n$$2x - 6 = 0$$\n3. Selesaikan persamaan linear:\n$$2x = 6 \\implies x = 3$$\n4. Jadi, fungsi tidak terdefinisi saat $x = 3$ (pilihan D).",
      pitfalls: "Menyederhanakan pembilang $(x - 1)(x + 1)$ dan mengira nilai $x = \\pm 1$ membuat fungsi tidak terdefinisi, padahal nilai tersebut hanya membuat fungsi bernilai nol."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-004",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Daerah Asal Penyebut Selisih Kuadrat",
    difficulty: "mudah",
    statement: "Daerah asal alami dari fungsi $f(x) = \\frac{7}{x^2 - 9}$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\neq 3 \\text{ dan } x \\neq -3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid -3 < x < 3\\}$",
      "$\\{x \\in \\mathbb{R} \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Bentuk selisih kuadrat pada penyebut $x^2 - a^2$ memiliki dua pembuat nol yaitu $x = a$ dan $x = -a$, keduanya harus dikeluarkan dari domain.",
      steps: "1. Syarat terdefinisi fungsi rasional:\n$$x^2 - 9 \\neq 0$$\n2. Faktorkan penyebut:\n$$(x - 3)(x + 3) \\neq 0$$\n3. Diperoleh dua nilai pembatas:\n$$x \\neq 3 \\quad \\text{dan} \\quad x \\neq -3$$\n4. Himpunan daerah asalnya adalah $\\{x \\in \\mathbb{R} \\mid x \\neq 3 \\text{ dan } x \\neq -3\\}$.\n5. Jadi, jawaban yang tepat adalah pilihan C.",
      pitfalls: "Hanya mengambil akar positif $x \\neq 3$ dan melupakan akar negatif $x \\neq -3$."
    }
  },
  {
    id: "fun-mutlak-dasar-rasional-005",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-mutlak",
    subChapterId: "fun-mutlak-dasar",
    subTopicId: "fun-mutlak-dasar-rasional",
    category: "Syarat Nilai Nyata Pecahan Aljabar",
    difficulty: "mudah",
    statement: "Agar pecahan bentuk aljabar $\\frac{3x - 5}{4 - x}$ bernilai riil, syarat nilai $x$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x \\neq -4$",
      "$x \\neq 4$",
      "$x \\neq \\frac{5}{3}$",
      "$x > 4$",
      "$x < 4$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pecahan aljabar bernilai riil jika penyebutnya bukan nol.",
      steps: "1. Perhatikan penyebut pecahan, yaitu $4 - x$.\n2. Syarat agar pecahan bernilai riil adalah penyebut tidak sama dengan nol:\n$$4 - x \\neq 0$$\n3. Pindahkan variabel $x$ ke ruas kanan:\n$$x \\neq 4$$\n4. Jadi, syarat nilai $x$ adalah $x \\neq 4$ (pilihan B).",
      pitfalls: "Kesalahan tanda aljabar saat memindahkan ruas sehingga menyimpulkan $x \\neq -4$."
    }
  }
];
