/**
 * Batch Task: TASK_fun-trig-dasar-jumlah_MEDIUM
 * SubTopic: Trigonometri Dasar: Rumus Jumlah dan Selisih Sudut (fun-trig-dasar-jumlah)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fun-trig-dasar-jumlah-006",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Sinus Jumlah Dua Sudut Lancip",
    difficulty: "sedang",
    statement: "Diketahui $\\sin A = \\frac{3}{5}$ ($A$ lancip) dan $\\cos B = \\frac{12}{13}$ ($B$ lancip). Nilai dari $\\sin(A + B)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{16}{65}$",
      "$\\frac{33}{65}$",
      "$\\frac{56}{65}$",
      "$\\frac{63}{65}$",
      "$\\frac{65}{56}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gunakan identitas Pythagoras untuk mencari nilai trigonometri pasangan ($\\cos A$ dan $\\sin B$), lalu terapkan rumus $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$.",
      steps: "1. Karena $A$ lancip, tentukan $\\cos A$:\n$$\\cos A = \\sqrt{1 - \\sin^2 A} = \\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = \\frac{4}{5}$$\n2. Karena $B$ lancip, tentukan $\\sin B$:\n$$\\sin B = \\sqrt{1 - \\cos^2 B} = \\sqrt{1 - \\left(\\frac{12}{13}\\right)^2} = \\frac{5}{13}$$\n3. Terapkan rumus penjumlahan sinus:\n$$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$$\n4. Masukkan seluruh nilai perbandingan:\n$$\\sin(A + B) = \\left(\\frac{3}{5}\\right)\\left(\\frac{12}{13}\\right) + \\left(\\frac{4}{5}\\right)\\left(\\frac{5}{13}\\right) = \\frac{36}{65} + \\frac{20}{65} = \\frac{56}{65}$$\n5. Jadi, nilai $\\sin(A + B)$ adalah $\\frac{56}{65}$ (pilihan C).",
      pitfalls: "Lupa mencari nilai $\\cos A$ dan $\\sin B$ terlebih dahulu dan langsung mengalikan nilai yang ada di soal."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-007",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Cosinus Selisih Dua Sudut",
    difficulty: "sedang",
    statement: "Diketahui $\\sin A = \\frac{3}{5}$ ($A$ lancip) dan $\\cos B = \\frac{12}{13}$ ($B$ lancip). Nilai dari $\\cos(A - B)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{33}{65}$",
      "$\\frac{48}{65}$",
      "$\\frac{56}{65}$",
      "$\\frac{63}{65}$",
      "$1$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Rumus selisih sudut untuk cosinus adalah $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$.",
      steps: "1. Dari data sudut lancip, diperoleh perbandingan lengkap:\n$$\\cos A = \\frac{4}{5}, \\quad \\sin B = \\frac{5}{13}$$\n2. Tulis rumus cosinus selisih dua sudut:\n$$\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$$\n3. Substitusikan nilai perbandingan:\n$$\\cos(A - B) = \\left(\\frac{4}{5}\\right)\\left(\\frac{12}{13}\\right) + \\left(\\frac{3}{5}\\right)\\left(\\frac{5}{13}\\right)$$\n4. Selesaikan perhitungan pecahan:\n$$= \\frac{48}{65} + \\frac{15}{65} = \\frac{63}{65}$$\n5. Jadi, nilai $\\cos(A - B)$ adalah $\\frac{63}{65}$ (pilihan D).",
      pitfalls: "Mengurangkan suku perkalian $(\\frac{48}{65} - \\frac{15}{65} = \\frac{33}{65})$ karena terkecoh tanda minus pada ekspresi sudut $(A - B)$."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-008",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Tangen Jumlah Dua Sudut",
    difficulty: "sedang",
    statement: "Diketahui $\\tan A = \\frac{3}{4}$ dan $\\tan B = \\frac{1}{7}$ dengan $A$ dan $B$ merupakan sudut lancip. Nilai dari $\\tan(A + B)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$1$",
      "$\\sqrt{3}$",
      "$\\frac{4}{3}$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Rumus tangen penjumlahan dua sudut adalah $\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$.",
      steps: "1. Hitung jumlah kedua tangen pada bagian pembilang:\n$$\\tan A + \\tan B = \\frac{3}{4} + \\frac{1}{7} = \\frac{21 + 4}{28} = \\frac{25}{28}$$\n2. Hitung bagian penyebut:\n$$1 - \\tan A \\tan B = 1 - \\left(\\frac{3}{4} \\times \\frac{1}{7}\\right) = 1 - \\frac{3}{28} = \\frac{25}{28}$$\n3. Bagikan pembilang dengan penyebut:\n$$\\tan(A + B) = \\frac{\\frac{25}{28}}{\\frac{25}{28}} = 1$$\n4. Jadi, nilai dari $\\tan(A + B)$ adalah $1$ (pilihan C).",
      pitfalls: "Lupa mengurangkan hasil kali tangen dari 1 pada penyebut sehingga salah dalam operasi pecahan kompleks."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-009",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Cosinus Sudut Ketiga dalam Segitiga",
    difficulty: "sedang",
    statement: "Pada segitiga $ABC$, diketahui $\\sin A = \\frac{4}{5}$ dan $\\cos B = \\frac{5}{13}$ dengan $A$ dan $B$ keduanya merupakan sudut lancip. Nilai dari $\\cos C$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{56}{65}$",
      "$-\\frac{33}{65}$",
      "$\\frac{16}{65}$",
      "$\\frac{33}{65}$",
      "$\\frac{56}{65}$"
    ],
    correctIndex: 3,
    solution: {
      concept: "Dalam segitiga berlaku $A + B + C = 180^\\circ \\implies C = 180^\\circ - (A + B)$, sehingga $\\cos C = \\cos(180^\\circ - (A + B)) = -\\cos(A + B)$.",
      steps: "1. Tentukan nilai perbandingan trigonometri yang lain:\n$$\\cos A = \\sqrt{1 - \\left(\\frac{4}{5}\\right)^2} = \\frac{3}{5}$$\n$$\\sin B = \\sqrt{1 - \\left(\\frac{5}{13}\\right)^2} = \\frac{12}{13}$$\n2. Hitung nilai $\\cos(A + B)$ menggunakan rumus cosinus jumlah sudut:\n$$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$$\n$$= \\left(\\frac{3}{5}\\right)\\left(\\frac{5}{13}\\right) - \\left(\\frac{4}{5}\\right)\\left(\\frac{12}{13}\\right) = \\frac{15 - 48}{65} = -\\frac{33}{65}$$\n3. Terapkan relasi sudut segitiga untuk menghitung $\\cos C$:\n$$\\cos C = -\\cos(A + B) = -\\left(-\\frac{33}{65}\\right) = \\frac{33}{65}$$\n4. Jadi, nilai $\\cos C$ adalah $\\frac{33}{65}$ (pilihan D).",
      pitfalls: "Lupa mengalikan dengan $-1$ dari relasi kuadran II $\\cos(180^\\circ - \\theta) = -\\cos \\theta$, sehingga salah memilih $-\\frac{33}{65}$."
    }
  },
  {
    id: "fun-trig-dasar-jumlah-010",
    subject: "MATEMATIKA",
    pillarId: "fundamental",
    chapterId: "fun-trig",
    subChapterId: "fun-trig-dasar",
    subTopicId: "fun-trig-dasar-jumlah",
    category: "Penyelesaian Sistem Perkalian Sinus dan Cosinus",
    difficulty: "sedang",
    statement: "Diketahui $A - B = 30^\\circ$ dan $\\sin A \\cos B = \\frac{2}{3}$. Nilai dari $\\cos A \\sin B$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{12}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{7}{6}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Gunakan rumus selisih sudut sinus: $\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$.",
      steps: "1. Substitusikan nilai sudut $(A - B) = 30^\\circ$ ke rumus sinus selisih sudut:\n$$\\sin 30^\\circ = \\sin A \\cos B - \\cos A \\sin B$$\n2. Masukkan nilai $\\sin 30^\\circ = \\frac{1}{2}$ dan $\\sin A \\cos B = \\frac{2}{3}$:\n$$\\frac{1}{2} = \\frac{2}{3} - \\cos A \\sin B$$\n3. Pindahkan variabel $\\cos A \\sin B$ ke ruas kiri:\n$$\\cos A \\sin B = \\frac{2}{3} - \\frac{1}{2}$$\n4. Samakan penyebut pecahan:\n$$= \\frac{4 - 3}{6} = \\frac{1}{6}$$\n5. Jadi, nilai dari $\\cos A \\sin B$ adalah $\\frac{1}{6}$ (pilihan B).",
      pitfalls: "Menjumlahkan $\\frac{2}{3} + \\frac{1}{2} = \\frac{7}{6}$ karena keliru dalam aljabar perpindahan ruas persamaan."
    }
  }
];
