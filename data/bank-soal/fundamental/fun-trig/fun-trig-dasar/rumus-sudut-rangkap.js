/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Rumus Sudut Rangkap (fun-trig-dasar-rangkap)
 * Slug: rumus-sudut-rangkap
 * Indikator: Rumus analitis sin(2A), cos(2A), dan tan(2A).
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-rangkap";
  const subTopicSlug = "rumus-sudut-rangkap";
  const questions = [
  {
    "id": "fun-trig-dasar-rangkap-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Menghitung Sinus Sudut Rangkap",
    "difficulty": "mudah",
    "statement": "Diketahui $\\sin \\alpha = \\frac{3}{5}$ dengan $\\alpha$ merupakan sudut lancip. Nilai dari $\\sin 2\\alpha$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{6}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{18}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{7}{25}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rumus sudut rangkap untuk sinus adalah $\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$.",
      "steps": "1. Tentukan $\\cos \\alpha$ dengan identitas Pythagoras pada sudut lancip:\n$$\\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = \\frac{4}{5}$$\n2. Terapkan rumus sinus sudut rangkap:\n$$\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$$\n3. Substitusikan nilai yang diperoleh:\n$$\\sin 2\\alpha = 2 \\times \\frac{3}{5} \\times \\frac{4}{5} = \\frac{24}{25}$$\n4. Jadi, nilai dari $\\sin 2\\alpha$ adalah $\\frac{24}{25}$ (pilihan D).",
      "pitfalls": "Hanya mengalikan sinus dengan 2 (yaitu $2 \\times \\frac{3}{5} = \\frac{6}{5}$) tanpa menyadari berlakunya rumus perkalian dengan $\\cos \\alpha$."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Rumus sudut rangkap untuk sinus adalah $\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$."
  },
  {
    "id": "fun-trig-dasar-rangkap-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Menghitung Cosinus Sudut Rangkap dari Cosinus",
    "difficulty": "mudah",
    "statement": "Diketahui $\\cos \\theta = \\frac{4}{5}$. Nilai dari $\\cos 2\\theta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{7}{25}$",
      "$\\frac{9}{25}$",
      "$\\frac{14}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{24}{25}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Rumus sudut rangkap cosinus dalam bentuk cosinus kuadrat adalah $\\cos 2\\theta = 2\\cos^2 \\theta - 1$.",
      "steps": "1. Kuadratkan nilai cosinus yang diketahui:\n$$\\cos^2 \\theta = \\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$$\n2. Terapkan rumus $\\cos 2\\theta = 2\\cos^2 \\theta - 1$:\n$$\\cos 2\\theta = 2\\left(\\frac{16}{25}\\right) - 1$$\n3. Selesaikan operasi aritmetika:\n$$= \\frac{32}{25} - \\frac{25}{25} = \\frac{7}{25}$$\n4. Jadi, nilai dari $\\cos 2\\theta$ adalah $\\frac{7}{25}$ (pilihan A).",
      "pitfalls": "Lupa mengurangkan dengan 1 atau lupa mengalikan dengan 2 sebelum mengurangkan."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Rumus sudut rangkap cosinus dalam bentuk cosinus kuadrat adalah $\\cos 2\\theta = 2\\cos^2 \\theta - 1$. **Tips:** Lupa mengurangkan dengan 1 atau lupa mengalikan dengan 2 sebelum mengurangkan."
  },
  {
    "id": "fun-trig-dasar-rangkap-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Menghitung Tangen Sudut Rangkap",
    "difficulty": "mudah",
    "statement": "Diketahui $\\tan x = \\frac{1}{2}$. Nilai dari $\\tan 2x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{2}{3}$",
      "$1$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$",
      "$2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Rumus sudut rangkap untuk tangen adalah $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$.",
      "steps": "1. Substitusikan $\\tan x = \\frac{1}{2}$ ke dalam rumus sudut rangkap tangen:\n$$\\tan 2x = \\frac{2\\left(\\frac{1}{2}\\right)}{1 - \\left(\\frac{1}{2}\\right)^2}$$\n2. Sederhanakan bagian pembilang dan penyebut:\n$$\\text{Pembilang} = 2 \\times \\frac{1}{2} = 1$$\n$$\\text{Penyebut} = 1 - \\frac{1}{4} = \\frac{3}{4}$$\n3. Hitung hasil bagi:\n$$\\tan 2x = \\frac{1}{\\frac{3}{4}} = \\frac{4}{3}$$\n4. Jadi, nilai dari $\\tan 2x$ adalah $\\frac{4}{3}$ (pilihan C).",
      "pitfalls": "Menulis tanda tambah pada penyebut $(1 + \\tan^2 x)$ yang merupakan rumus turunan secan kuadrat."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Rumus sudut rangkap untuk tangen adalah $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$. **Tips:** Menulis tanda tambah pada penyebut $(1 + \\tan^2 x)$ yang merupakan rumus turunan secan kuadrat."
  },
  {
    "id": "fun-trig-dasar-rangkap-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Sederhana Bentuk Perkalian Sinus Cosinus Sudut Sama",
    "difficulty": "mudah",
    "statement": "Nilai dari bentuk perkalian $2\\sin 15^\\circ \\cos 15^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$1$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Bentuk $2\\sin A \\cos A$ merupakan bentuk terurai dari rumus sudut rangkap $\\sin 2A$.",
      "steps": "1. Identifikasi bentuk rumus dengan memisalkan $A = 15^\\circ$:\n$$2\\sin 15^\\circ \\cos 15^\\circ = \\sin(2 \\times 15^\\circ)$$\n2. Lakukan perkalian sudut:\n$$= \\sin 30^\\circ$$\n3. Masukkan nilai sinus sudut istimewa $30^\\circ$:\n$$\\sin 30^\\circ = \\frac{1}{2}$$\n4. Jadi, nilai ekspresi tersebut adalah $\\frac{1}{2}$ (pilihan B).",
      "pitfalls": "Mencari nilai $\\sin 15^\\circ$ dan $\\cos 15^\\circ$ terlebih dahulu sehingga perhitungan menjadi panjang dan berisiko salah hitung."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk $2\\sin A \\cos A$ merupakan bentuk terurai dari rumus sudut rangkap $\\sin 2A$. **Tips:** Mencari nilai $\\sin 15^\\circ$ dan $\\cos 15^\\circ$ terlebih dahulu sehingga perhitungan menjadi panjang dan berisiko salah hitung."
  },
  {
    "id": "fun-trig-dasar-rangkap-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Sederhana Bentuk Cosinus Sudut Rangkap dari Sinus",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi $1 - 2\\sin^2 15^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$\\frac{\\sqrt{3}}{3}$",
      "$1$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk $1 - 2\\sin^2 A$ ekuivalen dengan rumus cosinus sudut rangkap $\\cos 2A$.",
      "steps": "1. Identifikasi bentuk sudut rangkap dengan $A = 15^\\circ$:\n$$1 - 2\\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ)$$\n2. Kalikan besar sudut:\n$$= \\cos 30^\\circ$$\n3. Ambil nilai cosinus sudut istimewa $30^\\circ$:\n$$\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$$\n4. Jadi, nilai dari ekspresi tersebut adalah $\\frac{1}{2}\\sqrt{3}$ (pilihan C).",
      "pitfalls": "Tertukar dengan fungsi sinus sehingga menjawab $\\sin 30^\\circ = \\frac{1}{2}$."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk $1 - 2\\sin^2 A$ ekuivalen dengan rumus cosinus sudut rangkap $\\cos 2A$. **Tips:** Tertukar dengan fungsi sinus sehingga menjawab $\\sin 30^\\circ = \\frac{1}{2}$."
  },
  {
    "id": "fun-trig-dasar-rangkap-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Sinus Sudut Rangkap dari Selisih Linier",
    "difficulty": "sedang",
    "statement": "Diketahui $\\sin x - \\cos x = \\frac{1}{5}$. Nilai dari $\\sin 2x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$",
      "$\\frac{26}{25}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Kuadrat dari selisih $(\\sin x - \\cos x)^2$ memuat identitas Pythagoras dan sudut rangkap: $(\\sin x - \\cos x)^2 = 1 - \\sin 2x$.",
      "steps": "1. Kuadratkan kedua ruas persamaan:\n$$(\\sin x - \\cos x)^2 = \\left(\\frac{1}{5}\\right)^2$$\n2. Uraikan ruas kiri:\n$$\\sin^2 x - 2\\sin x \\cos x + \\cos^2 x = \\frac{1}{25}$$\n3. Gabungkan suku $\\sin^2 x + \\cos^2 x = 1$ dan gunakan $\\sin 2x = 2\\sin x \\cos x$:\n$$1 - \\sin 2x = \\frac{1}{25}$$\n4. Selesaikan untuk $\\sin 2x$:\n$$\\sin 2x = 1 - \\frac{1}{25} = \\frac{24}{25}$$\n5. Jadi, nilai $\\sin 2x$ adalah $\\frac{24}{25}$ (pilihan D).",
      "pitfalls": "Lupa bahwa tanda suku silang bernilai negatif $(-2\\sin x \\cos x)$ sehingga malah menghitung $1 + \\frac{1}{25} = \\frac{26}{25}$."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Kuadrat dari selisih $(\\sin x - \\cos x)^2$ memuat identitas Pythagoras dan sudut rangkap: $(\\sin x - \\cos x)^2 = 1 - \\sin 2x$. **Tips:** Lupa bahwa tanda suku silang bernilai negatif $(-2\\sin x \\cos x)$ sehingga malah menghitung $1 + \\frac{1}{25} = \\frac{26}{25}$."
  },
  {
    "id": "fun-trig-dasar-rangkap-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Penyederhanaan Rasional Sudut Rangkap ke Tangen",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari $\\frac{\\sin 2x}{1 + \\cos 2x}$ untuk $x \\neq \\frac{\\pi}{2} + k\\pi$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sin x$",
      "$\\cos x$",
      "$\\tan x$",
      "$\\cot x$",
      "$\\sec x$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan rumus sudut rangkap $\\sin 2x = 2\\sin x \\cos x$ dan $1 + \\cos 2x = 2\\cos^2 x$.",
      "steps": "1. Tuliskan pembilang dalam rumus sudut rangkap:\n$$\\sin 2x = 2\\sin x \\cos x$$\n2. Tuliskan penyebut menggunakan bentuk $\\cos 2x = 2\\cos^2 x - 1$:\n$$1 + \\cos 2x = 1 + (2\\cos^2 x - 1) = 2\\cos^2 x$$\n3. Bentuk pecahannya menjadi:\n$$\\frac{\\sin 2x}{1 + \\cos 2x} = \\frac{2\\sin x \\cos x}{2\\cos^2 x}$$\n4. Batalkan faktor persekutuan $2\\cos x$:\n$$= \\frac{\\sin x}{\\cos x} = \\tan x$$\n5. Jadi, bentuk sederhananya adalah $\\tan x$ (pilihan C).",
      "pitfalls": "Memilih varian cosinus sudut rangkap yang salah pada penyebut sehingga tidak saling mengeliminasi dengan angka 1."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan rumus sudut rangkap $\\sin 2x = 2\\sin x \\cos x$ dan $1 + \\cos 2x = 2\\cos^2 x$. **Tips:** Memilih varian cosinus sudut rangkap yang salah pada penyebut sehingga tidak saling mengeliminasi dengan angka 1."
  },
  {
    "id": "fun-trig-dasar-rangkap-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Menentukan Tangen Sudut Tunggal dari Sudut Rangkap",
    "difficulty": "sedang",
    "statement": "Jika $\\cos 2A = \\frac{7}{25}$ dengan $A$ merupakan sudut lancip ($0^\\circ < A < 90^\\circ$), maka nilai dari $\\tan A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{7}{24}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Rumus setengah sudut atau reduksi kuadrat: $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$ dan $\\cos^2 A = \\frac{1 + \\cos 2A}{2}$.",
      "steps": "1. Hitung nilai $\\sin^2 A$:\n$$\\sin^2 A = \\frac{1 - \\frac{7}{25}}{2} = \\frac{\\frac{18}{25}}{2} = \\frac{9}{25} \\implies \\sin A = \\frac{3}{5}$$\n2. Hitung nilai $\\cos^2 A$:\n$$\\cos^2 A = \\frac{1 + \\frac{7}{25}}{2} = \\frac{\\frac{32}{25}}{2} = \\frac{16}{25} \\implies \\cos A = \\frac{4}{5}$$\n3. Hitung nilai $\\tan A$:\n$$\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\frac{3}{5}}{\\frac{4}{5}} = \\frac{3}{4}$$\n4. Jadi, nilai dari $\\tan A$ adalah $\\frac{3}{4}$ (pilihan C).",
      "pitfalls": "Terbalik dalam pembagian nilai $\\frac{\\sin A}{\\cos A}$ sehingga memilih $\\frac{4}{3}$."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan hubungan matematis dasar: $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$ dan $\\cos^2 A = \\frac{1 + \\cos 2A}{2}$. **Tips:** Terbalik dalam pembagian nilai $\\frac{\\sin A}{\\cos A}$ sehingga memilih $\\frac{4}{3}$."
  },
  {
    "id": "fun-trig-dasar-rangkap-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Penyederhanaan Selisih Cosinus Rangkap",
    "difficulty": "sedang",
    "statement": "Bentuk $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$ untuk $\\sin 2\\theta \\neq 0$ ekuivalen dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\cot \\theta$",
      "$\\tan \\theta$",
      "$\\sin \\theta$",
      "$\\cos \\theta$",
      "$\\sec \\theta$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan identitas sudut rangkap $1 - \\cos 2\\theta = 2\\sin^2 \\theta$ dan $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$.",
      "steps": "1. Ubah pembilang dengan rumus $1 - \\cos 2\\theta = 2\\sin^2 \\theta$:\n$$\\text{Pembilang} = 2\\sin^2 \\theta$$\n2. Ubah penyebut dengan rumus $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:\n$$\\text{Penyebut} = 2\\sin \\theta \\cos \\theta$$\n3. Tuliskan pecahan secara lengkap:\n$$\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\sin^2 \\theta}{2\\sin \\theta \\cos \\theta}$$\n4. Sederhanakan pecahan:\n$$= \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta$$\n5. Jadi, bentuk yang ekuivalen adalah $\\tan \\theta$ (pilihan B).",
      "pitfalls": "Tertukar antara $\\tan \\theta$ dan $\\cot \\theta$ karena salah menempatkan sinus kuadrat pada penyebut."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan identitas sudut rangkap $1 - \\cos 2\\theta = 2\\sin^2 \\theta$ dan $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$. **Tips:** Tertukar antara $\\tan \\theta$ dan $\\cot \\theta$ karena salah menempatkan sinus kuadrat pada penyebut."
  },
  {
    "id": "fun-trig-dasar-rangkap-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Penerapan Berulang Rumus Sudut Rangkap",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ \\cos 45^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{2}}{2}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Identitas $\\sin \\alpha \\cos \\alpha = \\frac{1}{2}\\sin 2\\alpha$ dapat diterapkan secara beruntun pada sudut-sudut kelipatan dua.",
      "steps": "1. Terapkan identitas sudut rangkap pada pasangan sudut pertama:\n$$\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ = \\frac{1}{2}\\sin(2 \\times 22{,}5^\\circ) = \\frac{1}{2}\\sin 45^\\circ$$\n2. Substitusikan kembali ke bentuk perkalian awal:\n$$\\left(\\frac{1}{2}\\sin 45^\\circ\\right) \\cos 45^\\circ = \\frac{1}{2}(\\sin 45^\\circ \\cos 45^\\circ)$$\n3. Terapkan kembali identitas sudut rangkap untuk sudut $45^\\circ$:\n$$= \\frac{1}{2} \\times \\left(\\frac{1}{2}\\sin(2 \\times 45^\\circ)\\right) = \\frac{1}{4}\\sin 90^\\circ$$\n4. Karena $\\sin 90^\\circ = 1$, maka diperoleh:\n$$= \\frac{1}{4}(1) = \\frac{1}{4}$$\n5. Jadi, nilai ekspresi tersebut adalah $\\frac{1}{4}$ (pilihan B).",
      "pitfalls": "Lupa faktor $\\frac{1}{2}$ pada setiap penerapan rumus sudut rangkap sehingga menghasilkan jawaban yang 2 atau 4 kali lebih besar."
    },
    "subTopicSlug": "rumus-sudut-rangkap",
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Identitas $\\sin \\alpha \\cos \\alpha = \\frac{1}{2}\\sin 2\\alpha$ dapat diterapkan secara beruntun pada sudut-sudut kelipatan dua. **Tips:** Lupa faktor $\\frac{1}{2}$ pada setiap penerapan rumus sudut rangkap sehingga menghasilkan jawaban yang 2 atau 4 kali lebih besar."
  },
  {
    "id": "sedang-mtk-09",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-rangkap",
    "category": "Identitas Trigonometri Sudut Rangkap",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui nilai $\\tan x = \\frac{3}{4}$ dengan sudut $x$ berada pada kuadran III ($180^\\circ < x < 270^\\circ$). Nilai dari $\\sin 2x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{24}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Identitas Sinus Sudut Rangkap:</strong><br>\n          $$\\sin 2x = 2 \\sin x \\cos x$$<br>\n          Di kuadran III, nilai $\\sin x < 0$ dan $\\cos x < 0$.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Dari $\\tan x = \\frac{3}{4}$, sisi depan $= 3$, samping $= 4$, miring $= \\sqrt{3^2 + 4^2} = 5$.</li>\n          <li>Karena $x$ di kuadran III:\n            $$\\sin x = -\\frac{3}{5}, \\quad \\cos x = -\\frac{4}{5}$$\n          </li>\n          <li>Substitusi ke rumus sudut rangkap:\n            $$\\sin 2x = 2 \\left(-\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = 2 \\left(\\frac{12}{25}\\right) = \\frac{24}{25}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perkalian dua bilangan negatif menghasilkan nilai positif: $(-)(-) = (+)$, sehingga $\\sin 2x$ bernilai positif $+\\frac{24}{25}$.\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Rumus Sudut Rangkap",
    "subTopic": "Rumus Sudut Rangkap",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "rumus-sudut-rangkap",
    "hint": "Identitas Sinus Sudut Rangkap: $$\\sin 2x = 2 \\sin x \\cos x$$ Di kuadran III, nilai $\\sin x < 0$ dan $\\cos x < 0$. **Tips:** Perkalian dua bilangan negatif menghasilkan nilai positif: $(-)(-) = (+)$, sehingga $\\sin 2x$ bernilai positif $+\\frac{24}{25}$."
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
