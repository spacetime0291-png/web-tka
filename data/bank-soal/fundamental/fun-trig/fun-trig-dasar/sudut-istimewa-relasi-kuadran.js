/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Sudut Istimewa & Relasi Kuadran (fun-trig-dasar-kuadran)
 * Slug: sudut-istimewa-relasi-kuadran
 * Indikator: Nilai sudut istimewa dan tanda perbandingan trigonometri pada empat kuadran.
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-kuadran";
  const subTopicSlug = "sudut-istimewa-relasi-kuadran";
  const questions = [
  {
    "id": "fun-trig-dasar-kuadran-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Nilai Sinus di Kuadran II",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\sin 150^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$1$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sudut $150^\\circ$ terletak di Kuadran II. Pada Kuadran II, nilai fungsi sinus bernilai positif dengan rumus relasi sudut: $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$.",
      "steps": "1. Nyatakan sudut $150^\\circ$ dalam bentuk $(180^\\circ - \\alpha)$:\n$$150^\\circ = 180^\\circ - 30^\\circ$$\n2. Terapkan rumus relasi kuadran II:\n$$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ$$\n3. Karena $\\sin 30^\\circ = \\frac{1}{2}$, maka:\n$$\\sin 150^\\circ = \\frac{1}{2}$$\n4. Jadi, nilai dari $\\sin 150^\\circ$ adalah $\\frac{1}{2}$ (pilihan C).",
      "pitfalls": "Memberikan tanda negatif $-\\frac{1}{2}$ karena mengira seluruh fungsi trigonometri selain sudut lancip bernilai negatif."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-trig-dasar-kuadran-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Nilai Cosinus di Kuadran II",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\cos 120^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$0$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sudut $120^\\circ$ berada di Kuadran II. Di Kuadran II, nilai cosinus bertanda negatif dengan relasi $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$.",
      "steps": "1. Ubah sudut $120^\\circ$ ke bentuk $(180^\\circ - \\alpha)$:\n$$120^\\circ = 180^\\circ - 60^\\circ$$\n2. Terapkan rumus sudut berelasi:\n$$\\cos 120^\\circ = -\\cos 60^\\circ$$\n3. Masukkan nilai $\\cos 60^\\circ = \\frac{1}{2}$:\n$$\\cos 120^\\circ = -\\frac{1}{2}$$\n4. Jadi, jawabannya adalah $-\\frac{1}{2}$ (pilihan B).",
      "pitfalls": "Lupa menyematkan tanda minus untuk nilai cosinus di Kuadran II sehingga memilih $+\\frac{1}{2}$."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-trig-dasar-kuadran-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Nilai Tangen di Kuadran III",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\tan 225^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\sqrt{3}$",
      "$-1$",
      "$0$",
      "$1$",
      "$\\sqrt{3}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Sudut $225^\\circ$ terletak di Kuadran III ($180^\\circ < \\theta < 270^\\circ$). Pada Kuadran III, fungsi tangen bernilai positif dengan relasi $\\tan(180^\\circ + \\alpha) = \\tan \\alpha$.",
      "steps": "1. Tuliskan sudut $225^\\circ$ dalam bentuk $(180^\\circ + \\alpha)$:\n$$225^\\circ = 180^\\circ + 45^\\circ$$\n2. Terapkan rumus relasi kuadran III:\n$$\\tan 225^\\circ = \\tan 45^\\circ$$\n3. Karena $\\tan 45^\\circ = 1$, maka:\n$$\\tan 225^\\circ = 1$$\n4. Jadi, nilai dari $\\tan 225^\\circ$ adalah $1$ (pilihan D).",
      "pitfalls": "Memberikan nilai negatif $-1$ karena menyangka semua sudut di kuadran III bernilai negatif."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-trig-dasar-kuadran-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Tanda Perbandingan Trigonometri di Kuadran IV",
    "difficulty": "mudah",
    "statement": "Jika sudut $\\theta$ terletak di Kuadran IV ($270^\\circ < \\theta < 360^\\circ$), maka pasangan perbandingan trigonometri yang bernilai positif adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\sin \\theta$ dan $\\csc \\theta$",
      "$\\tan \\theta$ dan $\\cot \\theta$",
      "$\\cos \\theta$ dan $\\sec \\theta$",
      "$\\sin \\theta$ dan $\\cos \\theta$",
      "$\\tan \\theta$ dan $\\sec \\theta$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kaidah tanda trigonometri pada keempat kuadran (ASTC: All, Sin, Tan, Cos):\n- Kuadran I ($0^\\circ - 90^\\circ$): Semua positif\n- Kuadran II ($90^\\circ - 180^\\circ$): Sinus dan Cosecan positif\n- Kuadran III ($180^\\circ - 270^\\circ$): Tangen dan Cotangen positif\n- Kuadran IV ($270^\\circ - 360^\\circ$): Cosinus dan Secan positif.",
      "steps": "1. Pada Kuadran IV, absis bertanda positif ($x > 0$) dan ordinat bertanda negatif ($y < 0$).\n2. Sisi miring selalu positif ($r > 0$).\n3. Maka perbandingan trigonometri yang bernilai positif adalah:\n$$\\cos \\theta = \\frac{x}{r} > 0$$\n$$\\sec \\theta = \\frac{r}{x} > 0$$\n4. Jadi, pasangan yang bernilai positif adalah $\\cos \\theta$ dan $\\sec \\theta$ (pilihan C).",
      "pitfalls": "Tertukar antara tanda kuadran III (tangen positif) dan kuadran IV (cosinus positif)."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-trig-dasar-kuadran-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Nilai Sinus Sudut Negatif",
    "difficulty": "mudah",
    "statement": "Nilai dari $\\sin(-60^\\circ)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{1}{2}\\sqrt{3}$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\sqrt{3}$",
      "$-\\sqrt{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Fungsi sinus merupakan fungsi ganjil, yaitu fungsi yang memenuhi sifat simetri rotasi terhadap titik asal: $\\sin(-\\alpha) = -\\sin \\alpha$.",
      "steps": "1. Gunakan sifat sudut negatif pada fungsi sinus:\n$$\\sin(-\\alpha) = -\\sin \\alpha$$\n2. Masukkan $\\alpha = 60^\\circ$:\n$$\\sin(-60^\\circ) = -\\sin 60^\\circ$$\n3. Karena $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$, maka:\n$$\\sin(-60^\\circ) = -\\frac{1}{2}\\sqrt{3}$$\n4. Jadi, jawabannya adalah $-\\frac{1}{2}\\sqrt{3}$ (pilihan A).",
      "pitfalls": "Menyamakan dengan fungsi cosinus yang merupakan fungsi genap di mana $\\cos(-\\alpha) = \\cos \\alpha$."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fun-trig-dasar-kuadran-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Menentukan Nilai Trigonometri di Kuadran II",
    "difficulty": "sedang",
    "statement": "Diketahui $\\sin A = \\frac{5}{13}$ dengan sudut $A$ merupakan sudut tumpul ($90^\\circ < A < 180^\\circ$). Nilai dari $\\cos A - \\tan A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{119}{156}$",
      "$-\\frac{79}{156}$",
      "$\\frac{79}{156}$",
      "$-\\frac{25}{156}$",
      "$\\frac{119}{156}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sudut tumpul berada di Kuadran II, sehingga nilai cosinus dan tangen keduanya bertanda negatif: $\\cos A < 0$ dan $\\tan A < 0$.",
      "steps": "1. Diketahui $\\sin A = \\frac{5}{13}$. Sisi samping segitiga siku-siku acuan adalah:\n$$\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\n2. Karena $A$ di Kuadran II, tentukan tanda nilai perbandingannya:\n$$\\cos A = -\\frac{12}{13}$$\n$$\\tan A = \\frac{\\sin A}{\\cos A} = \\frac{\\frac{5}{13}}{-\\frac{12}{13}} = -\\frac{5}{12}$$\n3. Hitung nilai $\\cos A - \\tan A$:\n$$\\cos A - \\tan A = -\\frac{12}{13} - \\left(-\\frac{5}{12}\\right) = -\\frac{12}{13} + \\frac{5}{12}$$\n4. Samakan penyebut ($13 \\times 12 = 156$):\n$$= \\frac{-144 + 65}{156} = -\\frac{79}{156}$$\n5. Jadi, nilai dari $\\cos A - \\tan A$ adalah $-\\frac{79}{156}$ (pilihan B).",
      "pitfalls": "Lupa bahwa $\\cos A$ dan $\\tan A$ bertanda negatif di Kuadran II, sehingga keliru menghitung nilai tanda operasi."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-trig-dasar-kuadran-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Periodisitas Sudut Lebih dari 360 Derajat",
    "difficulty": "sedang",
    "statement": "Nilai dari ekspresi $\\cos 750^\\circ + \\sin 420^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{2}$",
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Fungsi sinus dan cosinus memiliki periode sebesar $360^\\circ$ ($2\\pi$), sehingga berlaku sifat $\\cos(k \\cdot 360^\\circ + \\alpha) = \\cos \\alpha$ dan $\\sin(k \\cdot 360^\\circ + \\alpha) = \\sin \\alpha$ untuk setiap bilangan bulat $k$.",
      "steps": "1. Sederhanakan sudut $750^\\circ$:\n$$750^\\circ = 2 \\times 360^\\circ + 30^\\circ = 720^\\circ + 30^\\circ$$\n$$\\cos 750^\\circ = \\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$$\n2. Sederhanakan sudut $420^\\circ$:\n$$420^\\circ = 1 \\times 360^\\circ + 60^\\circ = 360^\\circ + 60^\\circ$$\n$$\\sin 420^\\circ = \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$$\n3. Jumlahkan kedua nilai tersebut:\n$$\\cos 750^\\circ + \\sin 420^\\circ = \\frac{1}{2}\\sqrt{3} + \\frac{1}{2}\\sqrt{3} = \\sqrt{3}$$\n4. Jadi, nilai hasil penjumlahannya adalah $\\sqrt{3}$ (pilihan D).",
      "pitfalls": "Keliru saat membagi sudut dengan $360^\\circ$ sehingga menghasilkan sisa sudut yang salah."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-trig-dasar-kuadran-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Relasi Sudut Kofungsi dan Kuadran",
    "difficulty": "sedang",
    "statement": "Bentuk sederhana dari pecahan trigonometri $\\frac{\\sin(90^\\circ + \\alpha) \\cdot \\cos(180^\\circ - \\alpha)}{\\tan(270^\\circ - \\alpha)}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\sin^2 \\alpha$",
      "$-\\cos^2 \\alpha$",
      "$-\\sin \\alpha \\cos \\alpha$",
      "$\\sin \\alpha \\cos \\alpha$",
      "$\\cos^2 \\alpha$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan kaidah sudut berelasi dan kofungsi:\n- $\\sin(90^\\circ + \\alpha) = \\cos \\alpha$ (Kuadran II, sinus positif dan kofungsi berubah).\n- $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$ (Kuadran II, cosinus negatif).\n- $\\tan(270^\\circ - \\alpha) = \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$ (Kuadran III, tangen positif dan kofungsi berubah).",
      "steps": "1. Substitusikan masing-masing relasi sudut ke dalam persamaan:\n$$\\frac{(\\cos \\alpha) \\cdot (-\\cos \\alpha)}{\\cot \\alpha}$$\n2. Sederhanakan pembilang:\n$$= \\frac{-\\cos^2 \\alpha}{\\cot \\alpha}$$\n3. Nyatakan $\\cot \\alpha$ sebagai $\\frac{\\cos \\alpha}{\\sin \\alpha}$:\n$$= \\frac{-\\cos^2 \\alpha}{\\frac{\\cos \\alpha}{\\sin \\alpha}} = -\\cos^2 \\alpha \\times \\frac{\\sin \\alpha}{\\cos \\alpha}$$\n4. Sederhanakan faktor $\\cos \\alpha$:\n$$= -\\cos \\alpha \\sin \\alpha = -\\sin \\alpha \\cos \\alpha$$\n5. Jadi, bentuk sederhananya adalah $-\\sin \\alpha \\cos \\alpha$ (pilihan C).",
      "pitfalls": "Lupa mengubah fungsi trigonometri menjadi kofungsinya saat berelasi dengan sudut ganjil $90^\\circ$ atau $270^\\circ$."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-trig-dasar-kuadran-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Persamaan Trigonometri Sederhana di Kuadran IV",
    "difficulty": "sedang",
    "statement": "Jika $\\tan x = -\\sqrt{3}$ dan diketahui interval $180^\\circ \\le x \\le 360^\\circ$, maka besar sudut $x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$210^\\circ$",
      "$240^\\circ$",
      "$300^\\circ$",
      "$315^\\circ$",
      "$330^\\circ$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Fungsi tangen bernilai negatif pada Kuadran II dan Kuadran IV. Dalam rentang $180^\\circ \\le x \\le 360^\\circ$, daerah yang memenuhi adalah Kuadran IV ($270^\\circ < x < 360^\\circ$).",
      "steps": "1. Cari sudut lancip acuan $\\alpha$ di mana $\\tan \\alpha = \\sqrt{3}$:\n$$\\alpha = 60^\\circ$$\n2. Karena $\\tan x$ bernilai negatif dan $180^\\circ \\le x \\le 360^\\circ$, maka $x$ harus berada di Kuadran IV:\n$$x = 360^\\circ - \\alpha$$\n3. Hitung nilai sudut $x$:\n$$x = 360^\\circ - 60^\\circ = 300^\\circ$$\n4. Jadi, besar sudut $x$ adalah $300^\\circ$ (pilihan C).",
      "pitfalls": "Memilih sudut Kuadran II ($120^\\circ$) yang berada di luar batas interval soal atau keliru memilih sudut acuan $30^\\circ$."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fun-trig-dasar-kuadran-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Menentukan Nilai Bentuk Aljabar dari Sudut Kuadran III",
    "difficulty": "sedang",
    "statement": "Diketahui $\\tan \\theta = \\frac{4}{3}$ dan $180^\\circ < \\theta < 270^\\circ$. Nilai dari $5\\sin \\theta + 10\\cos \\theta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-14$",
      "$-10$",
      "$-2$",
      "$2$",
      "$10$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Sudut $\\theta$ dengan interval $180^\\circ < \\theta < 270^\\circ$ berada di Kuadran III. Di Kuadran III, nilai sinus dan cosinus keduanya bertanda negatif: $\\sin \\theta < 0$ dan $\\cos \\theta < 0$.",
      "steps": "1. Dari $\\tan \\theta = \\frac{\\text{depan}}{\\text{samping}} = \\frac{4}{3}$, hitung sisi miring:\n$$\\text{miring} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$$\n2. Karena $\\theta$ di Kuadran III:\n$$\\sin \\theta = -\\frac{4}{5}$$\n$$\\cos \\theta = -\\frac{3}{5}$$\n3. Hitung nilai ekspresi yang ditanyakan:\n$$5\\sin \\theta + 10\\cos \\theta = 5\\left(-\\frac{4}{5}\\right) + 10\\left(-\\frac{3}{5}\\right)$$\n$$= -4 + (-6) = -10$$\n4. Jadi, nilai ekspresi tersebut adalah $-10$ (pilihan B).",
      "pitfalls": "Lupa memberi tanda negatif pada sinus dan cosinus di Kuadran III sehingga mendapatkan jawaban positif $+10$."
    },
    "subTopicSlug": "sudut-istimewa-relasi-kuadran",
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Trigonometri Dasar (Fondasi)",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diketahui suatu sudut lancip $\\alpha$ pada kuadran I memenuhi $\\sin\\alpha = \\frac{3}{5}$. Nilai dari $\\cos 2\\alpha$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{7}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{9}{25}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Rumus Sudut Rangkap Kosinus:</strong><br>\n          $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1 = \\cos^2\\alpha - \\sin^2\\alpha$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Gunakan bentuk langsung dengan sinus:\n            $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$$\n          </li>\n          <li>Substitusi $\\sin\\alpha = \\frac{3}{5}$:\n            $$\\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar antara rumus $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ dengan $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$. Pilihan A (24/25) adalah nilai $\\sin 2\\alpha$!\n        </div>\n      "
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "sudut-istimewa-relasi-kuadran"
  },
  {
    "id": "sup-mtk-fun-01",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subTopicId": "fun-trig-dasar-kuadran",
    "category": "Relasi Sudut Kuadran II, III, dan IV",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Nilai eksak dari ekspresi trigonometri $\\sin 150^\\circ + \\cos 240^\\circ - \\tan 315^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$-1$",
      "$2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Relasi Sudut Antar Kuadran:</strong><br>• Kuadran II: $\\sin(180^\\circ - \\alpha) = +\\sin \\alpha$<br>• Kuadran III: $\\cos(180^\\circ + \\alpha) = -\\cos \\alpha$<br>• Kuadran IV: $\\tan(360^\\circ - \\alpha) = -\\tan \\alpha$</div>",
      "steps": "<ol><li>$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = +\\frac{1}{2}$.</li><li>$\\cos 240^\\circ = \\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.</li><li>$\\tan 315^\\circ = \\tan(360^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$.</li><li>Hasil akhir: $\\left(+\\frac{1}{2}\\right) + \\left(-\\frac{1}{2}\\right) - (-1) = 0 + 1 = 1$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Salah menentukan tanda aljabar trigonometri pada kuadran III dan IV.</div>"
    },
    "bab": "Trigonometri Dasar",
    "subBab": "Sudut Istimewa & Relasi Kuadran",
    "subTopic": "Sudut Istimewa & Relasi Kuadran",
    "chapterTitle": "Trigonometri Dasar",
    "subChapterId": "fun-trig-dasar",
    "subTopicSlug": "sudut-istimewa-relasi-kuadran"
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
