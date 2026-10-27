/**
 * Bank Soal TKA: Bab Fundamental (Prasyarat) - Trigonometri Dasar
 * Bab Kecil: Trigonometri Analitik Dasar (fun-trig-dasar)
 * Sub-Bab: Perbandingan Trigonometri Siku-Siku (fun-trig-dasar-perbandingan)
 * Slug: perbandingan-trigonometri-siku-siku
 * Indikator: Definisi sinus, kosinus, tangen, sekan, kosekan, kotangen pada segitiga siku-siku.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fun-trig-dasar-perbandingan";
  const subTopicSlug = "perbandingan-trigonometri-siku-siku";
  const questions = [
  {
    "id": "fun-trig-dasar-perbandingan-001",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Perbandingan Dasar Sinus pada Segitiga Siku-Siku",
    "difficulty": "mudah",
    "statement": "Diketahui segitiga siku-siku $ABC$ dengan siku-siku di titik $B$. Jika panjang sisi di depan sudut $A$ adalah $BC = 3\\text{ cm}$ dan panjang sisi miring (hipotenusa) $AC = 5\\text{ cm}$, maka nilai dari $\\sin A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{5}{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada segitiga siku-siku, perbandingan sinus sudut didefinisikan sebagai perbandingan antara panjang sisi di depan sudut tersebut terhadap panjang sisi miring (hipotenusa): $\\sin \\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$.",
      "steps": "1. Identifikasi sisi-sisi segitiga terhadap sudut $A$:\n- Sisi depan sudut $A$ adalah $BC = 3\\text{ cm}$.\n- Sisi miring adalah $AC = 5\\text{ cm}$.\n2. Hitung nilai sinus sudut $A$:\n$$\\sin A = \\frac{BC}{AC} = \\frac{3}{5}$$\n3. Jadi, nilai dari $\\sin A$ adalah $\\frac{3}{5}$ (pilihan A).",
      "pitfalls": "Tertukar dengan perbandingan cosinus (samping per miring) yang bernilai $\\frac{4}{5}$ atau tangen yang bernilai $\\frac{3}{4}$."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Pada segitiga siku-siku, perbandingan sinus sudut didefinisikan sebagai perbandingan antara panjang sisi di depan sudut tersebut terhadap panjang sisi miring (hipotenusa): $\\sin \\theta = \\frac{\\text{sisi depan}}{\\text{sisi miring}}$. **Tips:** Tertukar dengan perbandingan cosinus (samping per miring) yang bernilai $\\frac{4}{5}$ atau tangen yang bernilai $\\frac{3}{4}$."
  },
  {
    "id": "fun-trig-dasar-perbandingan-002",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Menentukan Tangen dari Nilai Cosinus",
    "difficulty": "mudah",
    "statement": "Jika $\\cos \\theta = \\frac{12}{13}$ dan $\\theta$ merupakan sudut lancip, maka nilai dari $\\tan \\theta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{12}{5}$",
      "$\\frac{5}{12}$",
      "$\\frac{13}{12}$",
      "$\\frac{13}{5}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gunakan teorema Pythagoras pada segitiga siku-siku: $\\text{sisi depan} = \\sqrt{\\text{miring}^2 - \\text{samping}^2}$. Perbandingan tangen didefinisikan sebagai $\\tan \\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}}$.",
      "steps": "1. Dari $\\cos \\theta = \\frac{12}{13}$, diperoleh:\n$$\\text{sisi samping} = 12$$\n$$\\text{sisi miring} = 13$$\n2. Hitung panjang sisi depan dengan teorema Pythagoras:\n$$\\text{sisi depan} = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$$\n3. Hitung nilai tangen sudut $\\theta$:\n$$\\tan \\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}} = \\frac{5}{12}$$\n4. Jadi, nilai dari $\\tan \\theta$ adalah $\\frac{5}{12}$ (pilihan C).",
      "pitfalls": "Membalik perbandingan tangen menjadi $\\frac{\\text{samping}}{\\text{depan}} = \\frac{12}{5}$ yang merupakan nilai dari $\\cot \\theta$."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan teorema Pythagoras pada segitiga siku-siku: $\\text{sisi depan} = \\sqrt{\\text{miring}^2 - \\text{samping}^2}$. Perbandingan tangen didefinisikan sebagai $\\tan \\theta = \\frac{\\text{sisi depan}}{\\text{sisi samping}}$."
  },
  {
    "id": "fun-trig-dasar-perbandingan-003",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Perbandingan Trigonometri Cosecan",
    "difficulty": "mudah",
    "statement": "Pada segitiga siku-siku $PQR$ dengan sudut siku-siku di $Q$, diketahui panjang $PQ = 8\\text{ cm}$ dan $QR = 6\\text{ cm}$. Nilai dari $\\csc P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$",
      "$\\frac{5}{4}$",
      "$\\frac{5}{3}$",
      "$\\frac{4}{3}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Cosecan merupakan kebalikan dari fungsi sinus: $\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{sisi miring}}{\\text{sisi depan}}$.",
      "steps": "1. Sisi siku-siku adalah $PQ = 8\\text{ cm}$ (sisi samping terhadap $P$) dan $QR = 6\\text{ cm}$ (sisi depan terhadap $P$).\n2. Cari panjang sisi miring $PR$:\n$$PR = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}$$\n3. Hitung nilai cosecan sudut $P$:\n$$\\csc P = \\frac{\\text{sisi miring}}{\\text{sisi depan}} = \\frac{PR}{QR} = \\frac{10}{6} = \\frac{5}{3}$$\n4. Jadi, nilai dari $\\csc P$ adalah $\\frac{5}{3}$ (pilihan D).",
      "pitfalls": "Tertukar antara cosecan (kebalikan sinus) dengan secan (kebalikan cosinus yang bernilai $\\frac{10}{8} = \\frac{5}{4}$)."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Cosecan merupakan kebalikan dari fungsi sinus: $\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{sisi miring}}{\\text{sisi depan}}$. **Tips:** Tertukar antara cosecan (kebalikan sinus) dengan secan (kebalikan cosinus yang bernilai $\\frac{10}{8} = \\frac{5}{4}$)."
  },
  {
    "id": "fun-trig-dasar-perbandingan-004",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Operasi Aritmetika Nilai Sudut Istimewa",
    "difficulty": "mudah",
    "statement": "Nilai dari ekspresi $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-1$",
      "$0$",
      "$\\frac{1}{2}$",
      "$1$",
      "$\\sqrt{3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan tabel nilai fungsi trigonometri untuk sudut-sudut istimewa: $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, dan $\\tan 45^\\circ = 1$.",
      "steps": "1. Tuliskan nilai trigonometri masing-masing suku:\n$$\\sin 30^\\circ = \\frac{1}{2}$$\n$$\\cos 60^\\circ = \\frac{1}{2}$$\n$$\\tan 45^\\circ = 1$$\n2. Lakukan operasi penjumlahan dan pengurangan:\n$$\\frac{1}{2} + \\frac{1}{2} - 1 = 1 - 1 = 0$$\n3. Jadi, hasil nilai ekspresi tersebut adalah $0$ (pilihan B).",
      "pitfalls": "Salah mengingat nilai $\\tan 45^\\circ$ sebagai $\\frac{1}{2}\\sqrt{2}$ atau salah menjumlahkan pecahan $\\frac{1}{2} + \\frac{1}{2} = 1$."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan tabel nilai fungsi trigonometri untuk sudut-sudut istimewa: $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, dan $\\tan 45^\\circ = 1$."
  },
  {
    "id": "fun-trig-dasar-perbandingan-005",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Aplikasi Tangen pada Sudut Elevasi",
    "difficulty": "mudah",
    "statement": "Seseorang berdiri pada jarak $12\\text{ meter}$ dari pangkal sebuah pohon tegak. Ia mengamati puncak pohon dengan sudut elevasi $30^\\circ$. Jika tinggi pengamat diabaikan, maka tinggi pohon tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\sqrt{3}\\text{ meter}$",
      "$6\\sqrt{3}\\text{ meter}$",
      "$12\\sqrt{3}\\text{ meter}$",
      "$4\\text{ meter}$",
      "$6\\text{ meter}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Tinggi objek tegak $t$ dapat dihitung melalui hubungan tangen sudut elevasi: $\\tan \\alpha = \\frac{\\text{tinggi objek}}{\\text{jarak horizontal}} \\implies t = s \\times \\tan \\alpha$.",
      "steps": "1. Diketahui jarak horizontal $s = 12\\text{ meter}$ dan sudut elevasi $\\alpha = 30^\\circ$.\n2. Nilai $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{1}{3}\\sqrt{3}$.\n3. Hitung tinggi pohon $t$:\n$$t = 12 \\times \\tan 30^\\circ = 12 \\times \\frac{1}{3}\\sqrt{3} = 4\\sqrt{3}\\text{ meter}$$\n4. Jadi, tinggi pohon tersebut adalah $4\\sqrt{3}\\text{ meter}$ (pilihan A).",
      "pitfalls": "Mengalikan $12$ dengan $\\sqrt{3}$ (nilai dari $\\tan 60^\\circ$) menghasilkan $12\\sqrt{3}$ alih-alih membaginya dengan 3."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Mudah",
    "hint": "Tinggi objek tegak $t$ dapat dihitung melalui hubungan tangen sudut elevasi: $\\tan \\alpha = \\frac{\\text{tinggi objek}}{\\text{jarak horizontal}} \\implies t = s \\times \\tan \\alpha$. **Tips:** Mengalikan $12$ dengan $\\sqrt{3}$ (nilai dari $\\tan 60^\\circ$) menghasilkan $12\\sqrt{3}$ alih-alih membaginya dengan 3."
  },
  {
    "id": "fun-trig-dasar-perbandingan-006",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Nilai Bentuk Aljabar dari Perbandingan Trigonometri",
    "difficulty": "sedang",
    "statement": "Diketahui $\\tan \\alpha = \\frac{3}{4}$ dengan $\\alpha$ merupakan sudut lancip. Nilai dari pecahan aljabar $\\frac{2\\sin \\alpha - \\cos \\alpha}{\\sin \\alpha + 3\\cos \\alpha}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{15}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{5}$",
      "$\\frac{4}{15}$",
      "$\\frac{1}{3}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pecahan homogen derajat 1 yang memuat $\\sin \\alpha$ dan $\\cos \\alpha$ dapat disederhanakan dengan membagi pembilang dan penyebut dengan $\\cos \\alpha$ agar langsung dinyatakan dalam bentuk $\\tan \\alpha$.",
      "steps": "1. Bagi pembilang dan penyebut dengan $\\cos \\alpha$:\n$$\\frac{\\frac{2\\sin \\alpha}{\\cos \\alpha} - \\frac{\\cos \\alpha}{\\cos \\alpha}}{\\frac{\\sin \\alpha}{\\cos \\alpha} + 3\\frac{\\cos \\alpha}{\\cos \\alpha}} = \\frac{2\\tan \\alpha - 1}{\\tan \\alpha + 3}$$\n2. Substitusikan nilai $\\tan \\alpha = \\frac{3}{4}$:\n$$\\text{Pembilang} = 2\\left(\\frac{3}{4}\\right) - 1 = \\frac{3}{2} - 1 = \\frac{1}{2}$$\n$$\\text{Penyebut} = \\frac{3}{4} + 3 = \\frac{3 + 12}{4} = \\frac{15}{4}$$\n3. Selesaikan pembagian pecahan:\n$$\\frac{\\frac{1}{2}}{\\frac{15}{4}} = \\frac{1}{2} \\times \\frac{4}{15} = \\frac{2}{15}$$\n4. Jadi, nilai pecahan tersebut adalah $\\frac{2}{15}$ (pilihan B).",
      "pitfalls": "Menghitung nilai $\\sin \\alpha = \\frac{3}{5}$ dan $\\cos \\alpha = \\frac{4}{5}$ satu per satu namun keliru saat menjumlahkan pecahan bertingkat."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Pecahan homogen derajat 1 yang memuat $\\sin \\alpha$ dan $\\cos \\alpha$ dapat disederhanakan dengan membagi pembilang dan penyebut dengan $\\cos \\alpha$ agar langsung dinyatakan dalam bentuk $\\tan \\alpha$."
  },
  {
    "id": "fun-trig-dasar-perbandingan-007",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Dua Segitiga Siku-Siku Bergandengan",
    "difficulty": "sedang",
    "statement": "Pada segitiga $ABC$, titik $D$ terletak pada sisi $BC$ sedemikian sehingga garis $AD$ tegak lurus dengan $BC$. Jika diketahui $\\angle B = 45^\\circ$, $\\angle C = 30^\\circ$, dan panjang garis tinggi $AD = 6\\text{ cm}$, maka panjang sisi $BC$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6 + 2\\sqrt{3}\\text{ cm}$",
      "$6 + 3\\sqrt{3}\\text{ cm}$",
      "$6 + 6\\sqrt{3}\\text{ cm}$",
      "$12\\sqrt{3}\\text{ cm}$",
      "$18\\text{ cm}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Garis tinggi $AD$ membagi segitiga $ABC$ menjadi dua segitiga siku-siku $\\triangle ABD$ dan $\\triangle ACD$ dengan siku-siku di $D$. Panjang sisi $BC$ adalah penjumlahan $BC = BD + DC$.",
      "steps": "1. Pada $\\triangle ABD$ siku-siku di $D$ dengan $\\angle B = 45^\\circ$:\n$$\\tan 45^\\circ = \\frac{AD}{BD} \\implies 1 = \\frac{6}{BD} \\implies BD = 6\\text{ cm}$$\n2. Pada $\\triangle ACD$ siku-siku di $D$ dengan $\\angle C = 30^\\circ$:\n$$\\tan 30^\\circ = \\frac{AD}{DC} \\implies \\frac{1}{\\sqrt{3}} = \\frac{6}{DC} \\implies DC = 6\\sqrt{3}\\text{ cm}$$\n3. Jumlahkan kedua ruas garis alas:\n$$BC = BD + DC = 6 + 6\\sqrt{3}\\text{ cm}$$\n4. Jadi, panjang sisi $BC$ adalah $6 + 6\\sqrt{3}\\text{ cm}$ (pilihan C).",
      "pitfalls": "Mengabaikan bahwa sudut $45^\\circ$ dan $30^\\circ$ berada pada segitiga yang berbeda dan salah menggunakan aturan sinus sembarang."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Garis tinggi $AD$ membagi segitiga $ABC$ menjadi dua segitiga siku-siku $\\triangle ABD$ dan $\\triangle ACD$ dengan siku-siku di $D$. Panjang sisi $BC$ adalah penjumlahan $BC = BD + DC$. **Tips:** Mengabaikan bahwa sudut $45^\\circ$ dan $30^\\circ$ berada pada segitiga yang berbeda dan salah menggunakan aturan sinus sembarang."
  },
  {
    "id": "fun-trig-dasar-perbandingan-008",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Identitas Trigonometri Dasar",
    "difficulty": "sedang",
    "statement": "Jika diketahui $\\sin x + \\cos x = \\frac{7}{5}$, maka nilai dari hasil kali $\\sin x \\cos x$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{6}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{18}{25}$",
      "$\\frac{24}{25}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kuadratkan kedua ruas persamaan dan gunakan identitas Pythagoras trigonometri dasar: $\\sin^2 x + \\cos^2 x = 1$.",
      "steps": "1. Kuadratkan kedua ruas persamaan:\n$$(\\sin x + \\cos x)^2 = \\left(\\frac{7}{5}\\right)^2$$\n$$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = \\frac{49}{25}$$\n2. Substitusikan $\\sin^2 x + \\cos^2 x = 1$:\n$$1 + 2\\sin x \\cos x = \\frac{49}{25}$$\n3. Kurangkan kedua ruas dengan 1:\n$$2\\sin x \\cos x = \\frac{49}{25} - 1 = \\frac{24}{25}$$\n4. Bagi kedua ruas dengan 2:\n$$\\sin x \\cos x = \\frac{24}{25} \\times \\frac{1}{2} = \\frac{12}{25}$$\n5. Jadi, nilai $\\sin x \\cos x$ adalah $\\frac{12}{25}$ (pilihan B).",
      "pitfalls": "Lupa membagi 2 di langkah akhir sehingga memilih opsi $\\frac{24}{25}$."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Kuadratkan kedua ruas persamaan dan gunakan identitas Pythagoras trigonometri dasar: $\\sin^2 x + \\cos^2 x = 1$. **Tips:** Lupa membagi 2 di langkah akhir sehingga memilih opsi $\\frac{24}{25}$."
  },
  {
    "id": "fun-trig-dasar-perbandingan-009",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Aplikasi Trigonometri Dua Sudut Elevasi",
    "difficulty": "sedang",
    "statement": "Dari titik pengamatan $A$, puncak sebuah menara terlihat dengan sudut elevasi $30^\\circ$. Pengamat kemudian berjalan sejauh $40\\text{ meter}$ lurus mendekati kaki menara menuju titik $B$, dan sudut elevasi puncak menara menjadi $60^\\circ$. Tinggi menara tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\sqrt{3}\\text{ meter}$",
      "$20\\sqrt{3}\\text{ meter}$",
      "$30\\sqrt{3}\\text{ meter}$",
      "$40\\sqrt{3}\\text{ meter}$",
      "$60\\text{ meter}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gunakan model dua segitiga siku-siku dengan tinggi yang sama $h$ dan jarak horizontal $x$ dari titik $B$ ke dasar menara, serta $(x + 40)$ dari titik $A$ ke dasar menara.",
      "steps": "1. Dari titik $B$ dengan sudut elevasi $60^\\circ$:\n$$\\tan 60^\\circ = \\frac{h}{x} \\implies \\sqrt{3} = \\frac{h}{x} \\implies x = \\frac{h}{\\sqrt{3}}$$\n2. Dari titik $A$ dengan sudut elevasi $30^\\circ$:\n$$\\tan 30^\\circ = \\frac{h}{x + 40} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{x + 40} \\implies x + 40 = h\\sqrt{3}$$\n3. Substitusikan nilai $x = \\frac{h}{\\sqrt{3}}$ ke dalam persamaan:\n$$\\frac{h}{\\sqrt{3}} + 40 = h\\sqrt{3}$$\n$$40 = h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = h\\left(\\frac{3 - 1}{\\sqrt{3}}\\right) = \\frac{2h}{\\sqrt{3}}$$\n4. Selesaikan untuk $h$:\n$$2h = 40\\sqrt{3} \\implies h = 20\\sqrt{3}\\text{ meter}$$\n5. Jadi, tinggi menara adalah $20\\sqrt{3}\\text{ meter}$ (pilihan B).",
      "pitfalls": "Salah membedakan jarak antara $x$ dan $x + 40$ atau keliru rasionalisasi bentuk akar."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan model dua segitiga siku-siku dengan tinggi yang sama $h$ dan jarak horizontal $x$ dari titik $B$ ke dasar menara, serta $(x + 40)$ dari titik $A$ ke dasar menara. **Tips:** Salah membedakan jarak antara $x$ dan $x + 40$ atau keliru rasionalisasi bentuk akar."
  },
  {
    "id": "fun-trig-dasar-perbandingan-010",
    "subject": "MATEMATIKA",
    "pillarId": "fundamental",
    "chapterId": "fun-trig",
    "subChapterId": "fun-trig-dasar",
    "subTopicId": "fun-trig-dasar-perbandingan",
    "category": "Relasi Tangen dan Secan pada Segitiga Siku-Siku",
    "difficulty": "sedang",
    "statement": "Diketahui $\\beta$ merupakan salah satu sudut lancip pada segitiga siku-siku. Jika berlaku hubungan $\\sec \\beta - \\tan \\beta = \\frac{1}{3}$, maka nilai dari $\\sec \\beta + \\tan \\beta$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{9}$",
      "$\\frac{1}{3}$",
      "$1$",
      "$3$",
      "$9$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Identitas trigonometri turunan Pythagoras menyatakan $\\sec^2 \\beta - \\tan^2 \\beta = 1$. Bentuk ini dapat difaktorkan sebagai selisih kuadrat: $(\\sec \\beta - \\tan \\beta)(\\sec \\beta + \\tan \\beta) = 1$.",
      "steps": "1. Faktorkan identitas trigonometri $\\sec^2 \\beta - \\tan^2 \\beta = 1$:\n$$(\\sec \\beta - \\tan \\beta)(\\sec \\beta + \\tan \\beta) = 1$$\n2. Substitusikan nilai $\\sec \\beta - \\tan \\beta = \\frac{1}{3}$:\n$$\\frac{1}{3} \\times (\\sec \\beta + \\tan \\beta) = 1$$\n3. Kalikan kedua ruas dengan 3:\n$$\\sec \\beta + \\tan \\beta = 3$$\n4. Jadi, nilai dari $\\sec \\beta + \\tan \\beta$ adalah $3$ (pilihan D).",
      "pitfalls": "Mencari nilai sisi-sisi segitiga secara manual yang memakan waktu lama, padahal kedua bentuk saling berkebalikan."
    },
    "subTopicSlug": "perbandingan-trigonometri-siku-siku",
    "bab": "Trigonometri Dasar",
    "subBab": "Perbandingan Trigonometri Siku-Siku",
    "subTopic": "Perbandingan Trigonometri Siku-Siku",
    "chapterTitle": "Trigonometri Dasar",
    "difficultyLabel": "Sedang",
    "hint": "Identitas trigonometri turunan Pythagoras menyatakan $\\sec^2 \\beta - \\tan^2 \\beta = 1$. Bentuk ini dapat difaktorkan sebagai selisih kuadrat: $(\\sec \\beta - \\tan \\beta)(\\sec \\beta + \\tan \\beta) = 1$. **Tips:** Mencari nilai sisi-sisi segitiga secara manual yang memakan waktu lama, padahal kedua bentuk saling berkebalikan."
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
