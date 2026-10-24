/**
 * Batch Task: TASK_fis-gel-bunyi-dawai_EASY
 * SubTopic: Dawai (Senar) (fis-gel-bunyi-dawai)
 * Difficulty: mudah (5 Soal, IDs: -001 .. -005)
 */

module.exports = [
  {
    id: "fis-gel-bunyi-dawai-001",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "mudah",
    statement: "Sebuah dawai gitar dengan panjang $L = 2\\text{ meter}$ dan massa $m = 20\\text{ gram}$ ditegangkan dengan gaya tarik sebesar $F = 100\\text{ N}$. Cepat rambat gelombang transversal pada dawai tersebut menurut Hukum Melde adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$150\\text{ m/s}$",
      "$200\\text{ m/s}$",
      "$500\\text{ m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Hukum Melde menyatakan bahwa cepat rambat gelombang transversal pada dawai berbanding lurus dengan akar gaya tegangan ($F$) dan berbanding terbalik dengan akar massa persatuan panjang dawai ($\\mu$):<br>$$v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}}$$",
      steps: "1. Konversikan massa ke kilogram:<br>$$m = 20\\text{ gram} = 0{,}02\\text{ kg}$$<br>2. Hitung massa linier per satuan panjang ($\\mu$):<br>$$\\mu = \\frac{m}{L} = \\frac{0{,}02\\text{ kg}}{2\\text{ m}} = 0{,}01\\text{ kg/m}$$<br>3. Hitung cepat rambat gelombang transversal:<br>$$v = \\sqrt{\\frac{100\\text{ N}}{0{,}01\\text{ kg/m}}} = \\sqrt{10.000} = 100\\text{ m/s}$$",
      pitfalls: "Lupa mengonversi satuan massa dari gram ke kilogram ($20$ alih-alih $0{,}02$), yang menghasilkan nilai akar pecahan keliru."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-002",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "mudah",
    statement: "Sebuah dawai yang kedua ujungnya terikat kuat memiliki panjang $L = 50\\text{ cm}$. Jika cepat rambat gelombang transversal pada dawai tersebut adalah $v = 200\\text{ m/s}$, frekuensi nada dasar ($f_0$) yang dihasilkan dawai tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ Hz}$",
      "$150\\text{ Hz}$",
      "$200\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pada nada dasar (harmonik pertama, $n = 0$) dawai yang kedua ujungnya terikat, terbentuk setengah panjang gelombang di sepanjang dawai ($L = \\frac{1}{2}\\lambda_0$). Frekuensi nada dasarnya dirumuskan:<br>$$f_0 = \\frac{v}{2L}$$",
      steps: "1. Konversikan panjang dawai ke satuan meter:<br>$$L = 50\\text{ cm} = 0{,}5\\text{ m}$$<br>2. Hitung frekuensi nada dasar:<br>$$f_0 = \\frac{200\\text{ m/s}}{2 \\times 0{,}5\\text{ m}} = \\frac{200}{1} = 200\\text{ Hz}$$",
      pitfalls: "Lupa faktor 2 pada penyebut sehingga menghitung $f = \\frac{v}{L} = 400\\text{ Hz}$ (opsi E, yang sebenarnya merupakan frekuensi nada atas pertama)."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-003",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "mudah",
    statement: "Sebuah dawai yang terikat pada kedua ujungnya bergetar menghasilkan gelombang stasioner. Perbandingan frekuensi nada dasar ($f_0$), nada atas pertama ($f_1$), dan nada atas kedua ($f_2$) yang dihasilkan oleh dawai tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 2 : 3$",
      "$1 : 3 : 5$",
      "$1 : 4 : 9$",
      "$2 : 3 : 4$",
      "$1 : \\sqrt{2} : \\sqrt{3}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Frekuensi harmonik ke-$n$ (nada atas ke-$n$) pada dawai dengan kedua ujung terikat memenuhi deret bilangan bulat positif lengkap:<br>$$f_n = (n + 1) f_0, \\quad n = 0, 1, 2, 3, \\dots$$Sehingga perbandingannya adalah:<br>$$f_0 : f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : 4 : \\dots$$",
      steps: "1. Nada dasar ($n = 0$): $f_0 = 1 f_0$.<br>2. Nada atas ke-1 ($n = 1$): $f_1 = 2 f_0$.<br>3. Nada atas ke-2 ($n = 2$): $f_2 = 3 f_0$.<br>4. Rasio perbandingannya adalah $1 : 2 : 3$ (opsi A).",
      pitfalls: "Siswa sering tertukar dengan perbandingan frekuensi pipa organa tertutup yang hanya menghasilkan kelipatan ganjil ($1 : 3 : 5$, opsi B)."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-004",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "mudah",
    statement: "Sebuah senar biola yang kedua ujungnya dijepit bergetar menghasilkan nada atas pertama. Banyaknya titik simpul dan titik perut yang terbentuk pada senar biola tersebut berturut-turut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "2 simpul dan 1 perut",
      "2 simpul dan 2 perut",
      "3 simpul dan 2 perut",
      "3 simpul dan 3 perut",
      "4 simpul dan 3 perut"
    ],
    correctIndex: 2,
    solution: {
      concept: "Pola gelombang stasioner pada dawai kedua ujung terikat untuk nada atas ke-$n$ ($n = 1$ untuk nada atas pertama):<br>• Jumlah perut: $P = n + 1$<br>• Jumlah simpul: $S = n + 2$<br>Pada nada atas pertama ($n = 1$), panjang dawai membentuk 1 gelombang penuh ($L = \\lambda$).",
      steps: "1. Pada nada atas pertama ($n = 1$):<br>• Jumlah perut: $P = 1 + 1 = 2$ perut.<br>• Jumlah simpul: $S = 1 + 2 = 3$ simpul (dua di ujung jepit dan satu di tengah dawai).<br>2. Jawaban yang tepat adalah 3 simpul dan 2 perut (opsi C).",
      pitfalls: "Siswa sering mengira nada atas pertama memiliki 1 simpul dan 1 perut, lupa menghitung simpul di kedua ujung ikatan kaku dawai."
    }
  },
  {
    id: "fis-gel-bunyi-dawai-005",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subChapterId: "fis-gel-bunyi",
    subTopicId: "fis-gel-bunyi-dawai",
    category: "Dawai (Senar)",
    difficulty: "mudah",
    statement: "Sebuah dawai menghasilkan frekuensi nada dasar sebesar $f_0$ saat ditarik dengan gaya tegangan $F$. Jika gaya tegangan dawai tersebut dinaikkan menjadi $4$ kali semula ($F' = 4F$) tanpa mengubah panjang maupun jenis dawai, frekuensi nada dasar yang baru ($f_0'$) akan menjadi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2} f_0$",
      "$\\sqrt{2} f_0$",
      "$2 f_0$",
      "$4 f_0$",
      "$16 f_0$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Frekuensi nada dasar dawai sebanding dengan kelajuan gelombang pada dawai:<br>$$f_0 = \\frac{v}{2L} = \\frac{1}{2L}\\sqrt{\\frac{F}{\\mu}} \\implies f_0 \\propto \\sqrt{F}$$Sehingga perbandingan frekuensinya terhadap tegangan dawai adalah:<br>$$\\frac{f_0'}{f_0} = \\sqrt{\\frac{F'}{F}}$$",
      steps: "1. Masukkan rasio tegangan dawai: $\\frac{F'}{F} = 4$.<br>2. Hitung perbandingan frekuensi baru:<br>$$f_0' = f_0 \\cdot \\sqrt{4} = 2 f_0$$",
      pitfalls: "Siswa sering mengira hubungan frekuensi terhadap tegangan berbanding lurus linier sehingga memilih $4 f_0$ (opsi D), padahal bergantung pada akar kuadrat tegangan."
    }
  }
];
