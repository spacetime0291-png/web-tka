/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Polinomial (mat-alj-polinom)
 * Sub-Bab: Pembagian Bersusun (mat-alj-polinom-susun)
 * Slug: pembagian-bersusun
 * Indikator: Algoritma pembagian bersusun panjang polinomial oleh pembagi derajat 1 dan 2.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-polinom-susun";
  const subTopicSlug = "pembagian-bersusun";
  const questions = [
  {
    "id": "mat-alj-polinom-susun-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Bersusun Polinomial Kuadrat",
    "difficulty": "mudah",
    "statement": "Hasil bagi dan sisa pembagian dari suku banyak $P(x) = 2x^2 + 7x + 5$ oleh $(x + 2)$ dengan metode pembagian bersusun adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hasil bagi $2x + 3$ dan sisa $-1$",
      "Hasil bagi $2x + 3$ dan sisa $1$",
      "Hasil bagi $2x - 3$ dan sisa $-1$",
      "Hasil bagi $2x + 5$ dan sisa $0$",
      "Hasil bagi $2x + 1$ dan sisa $3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Algoritma pembagian polinomial menyatakan bahwa $P(x) = (x - c) H(x) + S$, dengan $H(x)$ adalah hasil bagi dan $S$ adalah konstanta sisa pembagian.",
      "steps": "1. Bagi suku pertama $2x^2$ dengan $x$, diperoleh suku pertama hasil bagi: $2x$.<br>2. Kalikan $2x$ dengan pembagi $(x + 2)$: $2x(x + 2) = 2x^2 + 4x$.<br>3. Kurangkan: $(2x^2 + 7x + 5) - (2x^2 + 4x) = 3x + 5$.<br>4. Bagi suku $3x$ dengan $x$, diperoleh suku kedua hasil bagi: $+3$.<br>5. Kalikan $3(x + 2) = 3x + 6$.<br>6. Kurangkan: $(3x + 5) - (3x + 6) = -1$.<br>7. Jadi hasil baginya adalah $2x + 3$ dan sisanya adalah $-1$ (pilihan A).",
      "pitfalls": "Salah tanda pada saat melakukan pengurangan tahap akhir: $5 - 6 = -1$, bukan $5 - 6 = 1$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Algoritma pembagian polinomial menyatakan bahwa $P(x) = (x - c) H(x) + S$, dengan $H(x)$ adalah hasil bagi dan $S$ adalah konstanta sisa pembagian."
  },
  {
    "id": "mat-alj-polinom-susun-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Derajat Maksimum Sisa Pembagian",
    "difficulty": "mudah",
    "statement": "Jika sebuah suku banyak berderajat 4 dibagi oleh suku banyak berderajat 2 melalui pembagian bersusun panjang, maka derajat maksimum dari sisa pembagiannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada pembagian polinomial, proses pembagian berhenti ketika derajat polinomial sisa pembagian strictly lebih kecil dari derajat polinomial pembagi: $\\deg(S(x)) < \\deg(Q(x))$. Derajat maksimum sisa adalah $\\deg(Q(x)) - 1$.",
      "steps": "1. Tinjau derajat pembagi: $\\deg(Q(x)) = 2$.<br>2. Syarat sisa pembagian: $\\deg(S(x)) < 2$.<br>3. Nilai bilangan bulat non-negatif terbesar yang kurang dari 2 adalah 1.<br>4. Jadi sisa pembagian berderajat maksimum 1 (berbentuk linear $Ax + B$).<br>5. Pilihan yang tepat adalah 1 (pilihan B).",
      "pitfalls": "Mengira derajat sisa sama dengan selisih derajat terbagi dan pembagi ($4 - 2 = 2$) yang sebenarnya merupakan derajat hasil bagi."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Pada pembagian polinomial, proses pembagian berhenti ketika derajat polinomial sisa pembagian strictly lebih kecil dari derajat polinomial pembagi: $\\deg(S(x)) < \\deg(Q(x))$. Derajat maksimum sisa adalah $\\deg(Q(x)) - 1$."
  },
  {
    "id": "mat-alj-polinom-susun-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Polinomial Kubik Bersusun",
    "difficulty": "mudah",
    "statement": "Hasil bagi dari pembagian suku banyak $x^3 - 3x^2 + 4x - 5$ oleh $(x - 1)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x^2 - 2x + 2$",
      "$x^2 - 4x + 2$",
      "$x^2 - 2x - 3$",
      "$x^2 + 2x + 2$",
      "$x^2 - 3x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian bersusun panjang polinomial derajat 3 oleh bentuk linear menghasilkan hasil bagi berderajat 2 ($3 - 1 = 2$).",
      "steps": "1. Bagi $x^3$ dengan $x$ menghasilkan $x^2$. Kalikan: $x^2(x - 1) = x^3 - x^2$.<br>2. Kurangkan: $(x^3 - 3x^2) - (x^3 - x^2) = -2x^2$. Turunkan $+4x$.<br>3. Bagi $-2x^2$ dengan $x$ menghasilkan $-2x$. Kalikan: $-2x(x - 1) = -2x^2 + 2x$.<br>4. Kurangkan: $(-2x^2 + 4x) - (-2x^2 + 2x) = 2x$. Turunkan $-5$.<br>5. Bagi $2x$ dengan $x$ menghasilkan $+2$. Kalikan: $2(x - 1) = 2x - 2$.<br>6. Kurangkan: $(2x - 5) - (2x - 2) = -3$ (sisa).<br>7. Jadi hasil baginya adalah $x^2 - 2x + 2$ (pilihan A).",
      "pitfalls": "Kesalahan tanda saat mengurangkan $-3x^2 - (-x^2) = -2x^2$ menjadi $-4x^2$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Pembagian bersusun panjang polinomial derajat 3 oleh bentuk linear menghasilkan hasil bagi berderajat 2 ($3 - 1 = 2$). **Tips:** Kesalahan tanda saat mengurangkan $-3x^2 - (-x^2) = -2x^2$ menjadi $-4x^2$."
  },
  {
    "id": "mat-alj-polinom-susun-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Bersusun Habis Dibagi",
    "difficulty": "mudah",
    "statement": "Sisa pembagian dari polinomial $P(x) = x^3 + 2x^2 - 5x - 6$ oleh $(x - 2)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-6",
      "-2",
      "0",
      "2",
      "6"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Sisa pembagian polinomial $P(x)$ oleh pembagi $(x - c)$ sama dengan nilai fungsi pada pembuat nol pembagi, yaitu $P(c)$. Jika $P(c) = 0$, maka polinomial habis dibagi tanpa sisa.",
      "steps": "1. Tentukan pembuat nol dari pembagi $(x - 2)$: $x = 2$.<br>2. Evaluasi nilai $P(2)$:<br>$$P(2) = (2)^3 + 2(2)^2 - 5(2) - 6$$<br>3. Hitung nilai perpangkatan dan perkalian:<br>$$P(2) = 8 + 2(4) - 10 - 6 = 8 + 8 - 10 - 6$$<br>4. Sederhanakan penjumlahan aljabar:<br>$$P(2) = 16 - 16 = 0$$<br>5. Jadi sisa pembagiannya adalah 0 (pilihan C).",
      "pitfalls": "Salah memasukkan nilai $x = -2$ alih-alih pembuat nol $x = 2$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Sisa pembagian polinomial $P(x)$ oleh pembagi $(x - c)$ sama dengan nilai fungsi pada pembuat nol pembagi, yaitu $P(c)$. Jika $P(c) = 0$, maka polinomial habis dibagi tanpa sisa."
  },
  {
    "id": "mat-alj-polinom-susun-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Bersusun oleh Bentuk (ax - b)",
    "difficulty": "mudah",
    "statement": "Suku banyak $P(x) = 4x^3 - 6x^2 + 8x - 1$ dibagi oleh $(2x - 1)$. Hasil bagi dari pembagian tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x^2 - 2x + 3$",
      "$4x^2 - 4x + 6$",
      "$2x^2 - 4x + 3$",
      "$2x^2 + 2x - 3$",
      "$4x^2 - 2x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada pembagian bersusun dengan pembagi berkoefisien $a > 1$, setiap langkah pembagian suku berderajat tertinggi dibagi dengan suku $ax$.",
      "steps": "1. Bagi suku pertama $4x^3$ dengan $2x$, diperoleh $2x^2$.<br>2. Kalikan $2x^2(2x - 1) = 4x^3 - 2x^2$.<br>3. Kurangkan: $(4x^3 - 6x^2) - (4x^3 - 2x^2) = -4x^2$. Turunkan $+8x$.<br>4. Bagi $-4x^2$ dengan $2x$, diperoleh $-2x$.<br>5. Kalikan $-2x(2x - 1) = -4x^2 + 2x$.<br>6. Kurangkan: $(-4x^2 + 8x) - (-4x^2 + 2x) = 6x$. Turunkan $-1$.<br>7. Bagi $6x$ dengan $2x$, diperoleh $+3$. Kalikan: $3(2x - 1) = 6x - 3$.<br>8. Kurangkan: $(6x - 1) - (6x - 3) = 2$ (sisa).<br>9. Jadi hasil baginya adalah $2x^2 - 2x + 3$ (pilihan A).",
      "pitfalls": "Lupa membagi koefisien dengan 2 sehingga menghasilkan $4x^2 - 4x + 6$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Pada pembagian bersusun dengan pembagi berkoefisien $a > 1$, setiap langkah pembagian suku berderajat tertinggi dibagi dengan suku $ax$. **Tips:** Lupa membagi koefisien dengan 2 sehingga menghasilkan $4x^2 - 4x + 6$."
  },
  {
    "id": "mat-alj-polinom-susun-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Bersusun oleh Pembagi Kuadrat",
    "difficulty": "sedang",
    "statement": "Suku banyak $P(x) = 2x^4 - x^3 + 3x^2 - 4x + 1$ dibagi oleh $(x^2 - x + 1)$ dengan metode pembagian bersusun. Sisa pembagian yang diperoleh adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-3x - 1$",
      "$-3x + 1$",
      "$3x - 1$",
      "$-7x + 3$",
      "$-x - 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pembagian suku banyak oleh pembagi berbentuk kuadrat definit yang tidak dapat difaktorkan diselesaikan menggunakan algoritma pembagian bersusun panjang hingga menghasilkan sisa dengan derajat kurang dari 2 (bentuk linear $Ax + B$).",
      "steps": "1. Bagi $2x^4$ dengan $x^2$ menghasilkan $2x^2$. Kalikan: $2x^2(x^2 - x + 1) = 2x^4 - 2x^3 + 2x^2$.<br>2. Kurangkan: $(2x^4 - x^3 + 3x^2) - (2x^4 - 2x^3 + 2x^2) = x^3 + x^2$. Turunkan $-4x$.<br>3. Bagi $x^3$ dengan $x^2$ menghasilkan $+x$. Kalikan: $x(x^2 - x + 1) = x^3 - x^2 + x$.<br>4. Kurangkan: $(x^3 + x^2 - 4x) - (x^3 - x^2 + x) = 2x^2 - 5x$. Turunkan $+1$.<br>5. Bagi $2x^2$ dengan $x^2$ menghasilkan $+2$. Kalikan: $2(x^2 - x + 1) = 2x^2 - 2x + 2$.<br>6. Kurangkan: $(2x^2 - 5x + 1) - (2x^2 - 2x + 2) = -3x - 1$.<br>7. Jadi sisa pembagian adalah $-3x - 1$ (pilihan A).",
      "pitfalls": "Kesalahan tanda saat mengurangkan suku-suku negatif pada setiap tahapan bersusun."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Pembagian suku banyak oleh pembagi berbentuk kuadrat definit yang tidak dapat difaktorkan diselesaikan menggunakan algoritma pembagian bersusun panjang hingga menghasilkan sisa dengan derajat kurang dari 2 (bentuk linear $Ax + B$). **Tips:** Kesalahan tanda saat mengurangkan suku-suku negatif pada setiap tahapan bersusun."
  },
  {
    "id": "mat-alj-polinom-susun-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Parameter Habis Dibagi Pembagi Kuadrat",
    "difficulty": "sedang",
    "statement": "Suku banyak $x^3 + ax^2 - bx + 6$ habis dibagi oleh $(x^2 + x - 2)$. Nilai dari $a + b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika suku banyak $P(x)$ habis dibagi oleh $(x^2 + x - 2) = (x + 2)(x - 1)$, maka menurut teorema faktor berlaku $P(-2) = 0$ dan $P(1) = 0$.",
      "steps": "1. Faktorkan pembagi: $x^2 + x - 2 = (x + 2)(x - 1)$.<br>2. Substitusikan pembuat nol $x = 1$:<br>$$P(1) = 1^3 + a(1)^2 - b(1) + 6 = 0 \\implies a - b + 7 = 0 \\implies a - b = -7$$<br>3. Substitusikan pembuat nol $x = -2$:<br>$$P(-2) = (-2)^3 + a(-2)^2 - b(-2) + 6 = 0 \\implies -8 + 4a + 2b + 6 = 0 \\implies 4a + 2b = 2 \\implies 2a + b = 1$$<br>4. Selesaikan SPLDV dengan menjumlahkan kedua persamaan:<br>$$(a - b) + (2a + b) = -7 + 1 \\implies 3a = -6 \\implies a = -2$$<br>Substitusikan ke persamaan pertama: $-2 - b = -7 \\implies b = 5$.<br>5. Hitung nilai $a + b = -2 + 5 = 3$.<br>6. Jadi nilai $a + b$ adalah 3 (pilihan C).",
      "pitfalls": "Lupa bahwa $(-2)^3 = -8$ dan $-b(-2) = +2b$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Jika suku banyak $P(x)$ habis dibagi oleh $(x^2 + x - 2) = (x + 2)(x - 1)$, maka menurut teorema faktor berlaku $P(-2) = 0$ dan $P(1) = 0$. **Tips:** Lupa bahwa $(-2)^3 = -8$ dan $-b(-2) = +2b$."
  },
  {
    "id": "mat-alj-polinom-susun-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Rekonstruksi Polinomial dari Hasil Bagi dan Sisa",
    "difficulty": "sedang",
    "statement": "Sebuah suku banyak $P(x)$ jika dibagi oleh $(x^2 - 2x + 3)$ menghasilkan hasil bagi $(2x - 1)$ dan sisa pembagian $(3x + 4)$. Bentuk eksplisit suku banyak $P(x)$ tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2x^3 - 5x^2 + 11x + 1$",
      "$2x^3 - 5x^2 + 8x + 1$",
      "$2x^3 - 3x^2 + 11x - 1$",
      "$2x^3 - 5x^2 + 5x + 7$",
      "$2x^3 + 5x^2 + 11x + 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Identitas pembagian suku banyak menyatakan bahwa polinomial asal diperoleh dari perkalian pembagi dengan hasil bagi ditambah sisa pembagian: $P(x) = Q(x) \\cdot H(x) + S(x)$.",
      "steps": "1. Tuliskan rumus identitas: $P(x) = (x^2 - 2x + 3)(2x - 1) + (3x + 4)$.<br>2. Jabarkan hasil perkalian $(x^2 - 2x + 3)(2x - 1)$:<br>$$= 2x(x^2 - 2x + 3) - 1(x^2 - 2x + 3) = 2x^3 - 4x^2 + 6x - x^2 + 2x - 3$$<br>$$= 2x^3 - 5x^2 + 8x - 3$$<br>3. Tambahkan dengan sisa pembagian $(3x + 4)$:<br>$$P(x) = (2x^3 - 5x^2 + 8x - 3) + (3x + 4) = 2x^3 - 5x^2 + 11x + 1$$<br>4. Jadi suku banyak tersebut adalah $2x^3 - 5x^2 + 11x + 1$ (pilihan A).",
      "pitfalls": "Salah mengurangkan sisa alih-alih menjumlahkannya, atau salah menjumlahkan koefisien $8x + 3x = 11x$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Identitas pembagian suku banyak menyatakan bahwa polinomial asal diperoleh dari perkalian pembagi dengan hasil bagi ditambah sisa pembagian: $P(x) = Q(x) \\cdot H(x) + S(x)$."
  },
  {
    "id": "mat-alj-polinom-susun-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Pembagian Derajat 4 oleh Bentuk Kuadrat Non-Monic",
    "difficulty": "sedang",
    "statement": "Hasil bagi dari pembagian suku banyak $6x^4 + x^3 - 7x^2 + 5x - 2$ oleh $(2x^2 - x + 1)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$3x^2 + 2x - 4$",
      "$3x^2 - 2x - 4$",
      "$3x^2 + 4x - 4$",
      "$6x^2 + 4x - 8$",
      "$3x^2 + 2x + 4$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada pembagian bersusun dengan koefisien utama pembagi $a > 1$, hasil bagi ditentukan melalui pembagian suku tertinggi berturut-turut oleh suku utama pembagi ($2x^2$).",
      "steps": "1. Bagi $6x^4$ dengan $2x^2$ menghasilkan $3x^2$. Kalikan: $3x^2(2x^2 - x + 1) = 6x^4 - 3x^3 + 3x^2$.<br>2. Kurangkan: $(6x^4 + x^3 - 7x^2) - (6x^4 - 3x^3 + 3x^2) = 4x^3 - 10x^2$. Turunkan $+5x$.<br>3. Bagi $4x^3$ dengan $2x^2$ menghasilkan $+2x$. Kalikan: $2x(2x^2 - x + 1) = 4x^3 - 2x^2 + 2x$.<br>4. Kurangkan: $(4x^3 - 10x^2 + 5x) - (4x^3 - 2x^2 + 2x) = -8x^2 + 3x$. Turunkan $-2$.<br>5. Bagi $-8x^2$ dengan $2x^2$ menghasilkan $-4$. Kalikan: $-4(2x^2 - x + 1) = -8x^2 + 4x - 4$.<br>6. Kurangkan: $(-8x^2 + 3x - 2) - (-8x^2 + 4x - 4) = -x + 2$ (sisa).<br>7. Diperoleh hasil bagi: $3x^2 + 2x - 4$ (pilihan A).",
      "pitfalls": "Lupa membagi koefisien dengan 2 pada setiap langkah pembagian suku baru."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Pada pembagian bersusun dengan koefisien utama pembagi $a > 1$, hasil bagi ditentukan melalui pembagian suku tertinggi berturut-turut oleh suku utama pembagi ($2x^2$). **Tips:** Lupa membagi koefisien dengan 2 pada setiap langkah pembagian suku baru."
  },
  {
    "id": "mat-alj-polinom-susun-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-polinom",
    "subTopicId": "mat-alj-polinom-susun",
    "category": "Jumlah Kuadrat Parameter Polinomial Habis Dibagi",
    "difficulty": "sedang",
    "statement": "Jika suku banyak $P(x) = x^4 - 2x^3 + px + q$ habis dibagi oleh $(x^2 - 1)$, maka nilai dari $p^2 + q^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "3",
      "5",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Jika polinomial habis dibagi oleh $(x^2 - 1) = (x - 1)(x + 1)$, maka sisa pembagian untuk pembuat nol $x = 1$ dan $x = -1$ keduanya harus bernilai nol ($P(1) = 0$ dan $P(-1) = 0$).",
      "steps": "1. Evaluasi pada $x = 1$:<br>$$P(1) = 1^4 - 2(1)^3 + p(1) + q = 0 \\implies 1 - 2 + p + q = 0 \\implies p + q = 1$$<br>2. Evaluasi pada $x = -1$:<br>$$P(-1) = (-1)^4 - 2(-1)^3 + p(-1) + q = 0 \\implies 1 + 2 - p + q = 0 \\implies -p + q = -3 \\implies p - q = 3$$<br>3. Jumlahkan kedua persamaan aljabar:<br>$$(p + q) + (p - q) = 1 + 3 \\implies 2p = 4 \\implies p = 2$$<br>4. Substitusikan $p = 2$ ke $p + q = 1$ menghasilkan $q = 1 - 2 = -1$.<br>5. Hitung $p^2 + q^2$:<br>$$p^2 + q^2 = (2)^2 + (-1)^2 = 4 + 1 = 5$$<br>6. Jadi nilai $p^2 + q^2$ adalah 5 (pilihan C).",
      "pitfalls": "Salah menghitung $(-1)^4 = 1$ dan $-2(-1)^3 = +2$, atau salah tanda saat mengurangkan $q = 1 - 2 = -1$."
    },
    "subTopicSlug": "pembagian-bersusun",
    "bab": "Aljabar",
    "subBab": "Pembagian Bersusun",
    "subTopic": "Pembagian Bersusun",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Jika polinomial habis dibagi oleh $(x^2 - 1) = (x - 1)(x + 1)$, maka sisa pembagian untuk pembuat nol $x = 1$ dan $x = -1$ keduanya harus bernilai nol ($P(1) = 0$ dan $P(-1) = 0$)."
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
