/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Determinan Matriks 2x2 dan 3x3 (mat-alj-matriks-det)
 * Slug: determinan-matriks
 * Indikator: Determinan matriks 2x2, aturan Sarrus/ekspansi kofaktor 3x3, dan sifat perkalian determinan.
 * 
 * Total Butir Soal: 12 (Mudah: 6, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-det";
  const subTopicSlug = "determinan-matriks";
  const questions = [
  {
    "id": "mat-alj-matriks-det-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks Ordo 2x2",
    "difficulty": "mudah",
    "statement": "Nilai determinan dari matriks $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "26",
      "14",
      "-14",
      "-26",
      "20"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Determinan dari matriks ordo $2 \\times 2$, yaitu $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, didefinisikan sebagai selisih hasil kali elemen diagonal utama dengan elemen diagonal sekunder:<br>$$\\det(M) = ad - bc$$",
      "steps": "1. Tentukan elemen-elemen matriks $A$: $a = 4$, $b = -2$, $c = 3$, $d = 5$.<br>2. Hitung hasil kali diagonal utama: $ad = 4 \\times 5 = 20$.<br>3. Hitung hasil kali diagonal sekunder: $bc = (-2) \\times 3 = -6$.<br>4. Lakukan pengurangan: $\\det(A) = ad - bc = 20 - (-6) = 20 + 6 = 26$.<br>5. Jadi nilai determinan matriks $A$ adalah 26 (pilihan A).",
      "pitfalls": "Sering salah tanda saat mengurangkan bilangan negatif: $20 - (-6)$ menjadi $20 - 6 = 14$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Determinan dari matriks ordo $2 \\times 2$, yaitu $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, didefinisikan sebagai selisih hasil kali elemen diagonal utama dengan elemen diagonal sekunder: $$\\det(M) = ad - bc$$."
  },
  {
    "id": "mat-alj-matriks-det-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Matriks Singular",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $B = \\begin{pmatrix} x+1 & 4 \\\\ 3 & 2 \\end{pmatrix}$. Jika matriks $B$ merupakan matriks singular, maka nilai $x$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Matriks singular adalah matriks persegi yang tidak memiliki invers, yang terjadi jika dan hanya jika nilai determinannya sama dengan nol: $\\det(B) = 0$.",
      "steps": "1. Syarat matriks singular: $\\det(B) = 0$.<br>2. Hitung rumus determinan matriks $B$:<br>$$\\det(B) = (x + 1)(2) - (4)(3) = 0$$<br>3. Sederhanakan persamaan aljabar:<br>$$2x + 2 - 12 = 0 \\implies 2x - 10 = 0 \\implies 2x = 10 \\implies x = 5$$<br>4. Jadi nilai $x$ adalah 5 (pilihan C).",
      "pitfalls": "Lupa mengalikan 2 ke kedua suku $(x + 1)$ atau terbalik mendefinisikan matriks singular sebagai $\\det(B) \\neq 0$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Matriks singular adalah matriks persegi yang tidak memiliki invers, yang terjadi jika dan hanya jika nilai determinannya sama dengan nol: $\\det(B) = 0$. **Tips:** Lupa mengalikan 2 ke kedua suku $(x + 1)$ atau terbalik mendefinisikan matriks singular sebagai $\\det(B) \\neq 0$."
  },
  {
    "id": "mat-alj-matriks-det-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Sifat Determinan Perkalian Matriks",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $P$ dan $Q$ keduanya berordo $2 \\times 2$. Jika $\\det(P) = 6$ dan $\\det(Q) = -2$, maka nilai dari $\\det(P \\cdot Q)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-12",
      "-3",
      "4",
      "8",
      "12"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sifat perkalian determinan menyatakan bahwa determinan dari hasil perkalian dua matriks persegi berordo sama sama dengan hasil perkalian masing-masing determinannya:<br>$$\\det(AB) = \\det(A) \\cdot \\det(B)$$",
      "steps": "1. Gunakan sifat determinan: $\\det(P \\cdot Q) = \\det(P) \\cdot \\det(Q)$.<br>2. Masukkan nilai yang diketahui: $\\det(P) = 6$ dan $\\det(Q) = -2$.<br>3. Hitung perkaliannya: $\\det(P \\cdot Q) = 6 \\times (-2) = -12$.<br>4. Jadi determinan matriks $P \\cdot Q$ bernilai -12 (pilihan A).",
      "pitfalls": "Mengira $\\det(P \\cdot Q) = \\det(P) + \\det(Q)$ atau keliru dalam aturan tanda perkalian bilangan negatif."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Sifat perkalian determinan menyatakan bahwa determinan dari hasil perkalian dua matriks persegi berordo sama sama dengan hasil perkalian masing-masing determinannya: $$\\det(AB) = \\det(A) \\cdot \\det(B)$$. **Tips:** Mengira $\\det(P \\cdot Q) = \\det(P) + \\det(Q)$ atau keliru dalam aturan tanda perkalian bilangan negatif."
  },
  {
    "id": "mat-alj-matriks-det-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Sifat Determinan Skalar dan Transpose",
    "difficulty": "mudah",
    "statement": "Matriks $A$ berordo $2 \\times 2$ memiliki determinan bernilai 4. Nilai determinan dari matriks $3A^T$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "12",
      "24",
      "36",
      "48",
      "72"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk matriks persegi $A$ berordo $n \\times n$ dan konstanta $k$, berlaku sifat determinan:<br>1. $\\det(A^T) = \\det(A)$<br>2. $\\det(kA) = k^n \\cdot \\det(A)$",
      "steps": "1. Identifikasi ordo matriks: $n = 2$ dan skalar pengali $k = 3$.<br>2. Terapkan sifat transpose: $\\det(A^T) = \\det(A) = 4$.<br>3. Terapkan sifat perkalian skalar matriks ordo $2 \\times 2$:<br>$$\\det(3A^T) = 3^2 \\cdot \\det(A^T) = 9 \\cdot 4 = 36$$<br>4. Jadi nilai determinan $3A^T$ adalah 36 (pilihan C).",
      "pitfalls": "Sering lupa memangkatkan skalar dengan ordo matriks, sehingga hanya menghitung $3 \\times 4 = 12$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Untuk matriks persegi $A$ berordo $n \\times n$ dan konstanta $k$, berlaku sifat determinan: 1. $\\det(A^T) = \\det(A)$ 2. $\\det(kA) = k^n \\cdot \\det(A)$."
  },
  {
    "id": "mat-alj-matriks-det-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks Segitiga Ordo 3x3",
    "difficulty": "mudah",
    "statement": "Nilai determinan dari matriks segitiga atas $T = \\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 7 \\\\ 0 & 0 & 4 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "12",
      "18",
      "24",
      "32",
      "48"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Determinan dari matriks segitiga (baik segitiga atas maupun segitiga bawah) dan matriks diagonal sama dengan hasil kali seluruh elemen pada diagonal utamanya.",
      "steps": "1. Perhatikan bahwa $T$ adalah matriks segitiga atas karena semua elemen di bawah diagonal utama bernilai nol.<br>2. Elemen diagonal utamanya adalah $t_{11} = 2$, $t_{22} = 3$, dan $t_{33} = 4$.<br>3. Hitung hasil kali elemen diagonal utama:<br>$$\\det(T) = 2 \\times 3 \\times 4 = 24$$<br>4. Jadi nilai determinan matriks $T$ adalah 24 (pilihan C).",
      "pitfalls": "Menghitung secara manual menggunakan aturan Sarrus yang panjang padahal cukup mengalikan elemen diagonal utama."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Determinan dari matriks segitiga (baik segitiga atas maupun segitiga bawah) dan matriks diagonal sama dengan hasil kali seluruh elemen pada diagonal utamanya. **Tips:** Menghitung secara manual menggunakan aturan Sarrus yang panjang padahal cukup mengalikan elemen diagonal utama."
  },
  {
    "id": "mat-alj-matriks-det-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks Ordo 3x3",
    "difficulty": "sedang",
    "statement": "Nilai determinan dari matriks $M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 4 \\\\ 1 & 0 & 2 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Determinan matriks $3 \\times 3$ dapat dihitung menggunakan aturan Sarrus atau ekspansi kofaktor baris/kolom. Menggunakan ekspansi kofaktor pada baris yang memuat elemen 0 akan mempermudah perhitungan aljabar.",
      "steps": "1. Gunakan ekspansi kofaktor sepanjang baris ke-3 ($a_{31} = 1, a_{32} = 0, a_{33} = 2$):<br>$$\\det(M) = 1 \\cdot \\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} - 0 + 2 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$$<br>2. Hitung sub-determinan $2 \\times 2$:<br>$$\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} = (2)(4) - (3)(1) = 8 - 3 = 5$$<br>$$\\det\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} = (1)(1) - (2)(2) = 1 - 4 = -3$$<br>3. Substitusikan kembali:<br>$$\\det(M) = 1(5) + 2(-3) = 5 - 6 = -1$$<br>4. Jadi nilai determinan matriks $M$ adalah -1 (pilihan B).",
      "pitfalls": "Kesalahan tanda selang-seling $+ - +$ pada kofaktor atau salah mengalikan diagonal pada aturan Sarrus."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Determinan matriks $3 \\times 3$ dapat dihitung menggunakan aturan Sarrus atau ekspansi kofaktor baris/kolom. Menggunakan ekspansi kofaktor pada baris yang memuat elemen 0 akan mempermudah perhitungan aljabar. **Tips:** Kesalahan tanda selang-seling $+ - +$ pada kofaktor atau salah mengalikan diagonal pada aturan Sarrus."
  },
  {
    "id": "mat-alj-matriks-det-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Komposisi Sifat Determinan Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A$ dan $B$ berordo $2 \\times 2$ tak-singular dengan $\\det(A) = 3$ dan $\\det(B) = -4$. Nilai dari $\\det(2 A^{-1} B^T)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{16}{3}$",
      "$-\\frac{8}{3}$",
      "$-\\frac{4}{3}$",
      "$\\frac{8}{3}$",
      "$\\frac{16}{3}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk matriks berordo $n \\times n$ berlaku sifat-sifat determinan aljabar linier:<br>1. $\\det(k M) = k^n \\det(M)$<br>2. $\\det(M_1 M_2) = \\det(M_1) \\cdot \\det(M_2)$<br>3. $\\det(M^{-1}) = \\frac{1}{\\det(M)}$<br>4. $\\det(M^T) = \\det(M)$",
      "steps": "1. Karena matriks berordo $2 \\times 2$, maka pemangkatan skalar $k = 2$ bernilai $2^2 = 4$.<br>2. Uraikan determinan menurut sifat perkalian:<br>$$\\det(2 A^{-1} B^T) = 2^2 \\cdot \\det(A^{-1}) \\cdot \\det(B^T)$$<br>3. Masukkan nilai determinan yang telah diketahui:<br>$$\\det(2 A^{-1} B^T) = 4 \\cdot \\left(\\frac{1}{3}\\right) \\cdot (-4) = -\\frac{16}{3}$$<br>4. Jadi nilai yang diperoleh adalah $-\\frac{16}{3}$ (pilihan A).",
      "pitfalls": "Lupa memangkatkan skalar $2$ dengan ordo matriks $n = 2$ sehingga hanya memperoleh $-8/3$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Untuk matriks berordo $n \\times n$ berlaku sifat-sifat determinan aljabar linier: 1. $\\det(k M) = k^n \\det(M)$ 2. $\\det(M_1 M_2) = \\det(M_1) \\cdot \\det(M_2)$ 3. $\\det(M^{-1}) = \\frac{1}{\\det(M)}$ 4. $\\det(M^T) = \\det(M)$."
  },
  {
    "id": "mat-alj-matriks-det-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Persamaan Determinan Aljabar",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $C = \\begin{pmatrix} x & 1 \\\\ 11 & x \\end{pmatrix}$ dan $D = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Jika $\\det(C) = \\det(D)$, maka nilai positif $x$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dua matriks memiliki determinan yang sama jika nilai numerik hasil ekspansi masing-masing determinan memenuhi kesamaan aljabar: $\\det(C) = \\det(D)$.",
      "steps": "1. Hitung determinan matriks $C$:<br>$$\\det(C) = (x)(x) - (1)(11) = x^2 - 11$$<br>2. Hitung determinan matriks $D$:<br>$$\\det(D) = (5)(4) - (2)(3) = 20 - 6 = 14$$<br>3. Samakan kedua determinan:<br>$$x^2 - 11 = 14 \\implies x^2 = 25 \\implies x = \\pm 5$$<br>4. Karena diminta nilai positif $x$, maka $x = 5$ (pilihan D).",
      "pitfalls": "Mengabaikan syarat nilai positif atau salah hitung determinan $D$ menjadi $20 + 6 = 26$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Dua matriks memiliki determinan yang sama jika nilai numerik hasil ekspansi masing-masing determinan memenuhi kesamaan aljabar: $\\det(C) = \\det(D)$."
  },
  {
    "id": "mat-alj-matriks-det-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Nilai Parameter Matriks Singular Ordo 3x3",
    "difficulty": "sedang",
    "statement": "Matriks $K = \\begin{pmatrix} 2 & 1 & 0 \\\\ 4 & x & 3 \\\\ -2 & 3 & 1 \\end{pmatrix}$ merupakan matriks singular. Nilai $x$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Syarat perlu dan cukup agar suatu matriks persegi berordo $3 \\times 3$ berstatus singular adalah nilai determinannya bernilai nol ($det(K) = 0$).",
      "steps": "1. Hitung $\\det(K)$ dengan ekspansi baris pertama ($2, 1, 0$):<br>$$\\det(K) = 2 \\cdot \\det\\begin{pmatrix} x & 3 \\\\ 3 & 1 \\end{pmatrix} - 1 \\cdot \\det\\begin{pmatrix} 4 & 3 \\\\ -2 & 1 \\end{pmatrix} + 0$$<br>2. Selesaikan masing-masing determinan minor $2 \\times 2$:<br>$$\\det\\begin{pmatrix} x & 3 \\\\ 3 & 1 \\end{pmatrix} = x(1) - 3(3) = x - 9$$<br>$$\\det\\begin{pmatrix} 4 & 3 \\\\ -2 & 1 \\end{pmatrix} = 4(1) - 3(-2) = 4 + 6 = 10$$<br>3. Susun persamaan determinan bernilai nol:<br>$$2(x - 9) - 1(10) = 0 \\implies 2x - 18 - 10 = 0 \\implies 2x = 28 \\implies x = 14$$<br>4. Jadi nilai $x$ adalah 14 (pilihan D).",
      "pitfalls": "Kesalahan tanda minus pada kofaktor elemen tengah baris pertama atau salah menjumlahkan $4 - (-6) = 10$."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Syarat perlu dan cukup agar suatu matriks persegi berordo $3 \\times 3$ berstatus singular adalah nilai determinannya bernilai nol ($det(K) = 0$)."
  },
  {
    "id": "mat-alj-matriks-det-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Persamaan Karakteristik Determinan Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$ dan $I$ adalah matriks identitas ordo $2 \\times 2$. Jika nilai determinan dari matriks $(A - \\lambda I)$ sama dengan nol, maka jumlah seluruh nilai $\\lambda$ yang memenuhi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Persamaan $\\det(A - \\lambda I) = 0$ disebut persamaan karakteristik matriks. Untuk matriks $2 \\times 2$, jumlah akar-akar karakteristik $\\lambda_1 + \\lambda_2$ sama dengan nilai jejak (*trace*) dari matriks $A$, yaitu jumlah elemen-elemen diagonal utamanya.",
      "steps": "1. Bentuk matriks $(A - \\lambda I)$:<br>$$A - \\lambda I = \\begin{pmatrix} 5 - \\lambda & 2 \\\\ 2 & 2 - \\lambda \\end{pmatrix}$$<br>2. Hitung nilai determinannya dan samakan dengan nol:<br>$$\\det(A - \\lambda I) = (5 - \\lambda)(2 - \\lambda) - (2)(2) = 0$$<br>3. Jabarkan bentuk kuadrat:<br>$$\\lambda^2 - 7\\lambda + 10 - 4 = 0 \\implies \\lambda^2 - 7\\lambda + 6 = 0$$<br>4. Berdasarkan teorema Vieta, jumlah akar-akar persamaan kuadrat $a\\lambda^2 + b\\lambda + c = 0$ adalah $-\\frac{b}{a} = -\\frac{-7}{1} = 7$.<br>(Dapat diverifikasi bahwa akarnya adalah $\\lambda = 6$ dan $\\lambda = 1$, dengan $6 + 1 = 7$).<br>5. Jadi jumlah seluruh nilai $\\lambda$ adalah 7 (pilihan D).",
      "pitfalls": "Salah menjabarkan perkalian suku aljabar $(5 - \\lambda)(2 - \\lambda)$ atau salah tanda pada rumus Vieta."
    },
    "subTopicSlug": "determinan-matriks",
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Persamaan $\\det(A - \\lambda I) = 0$ disebut persamaan karakteristik matriks. Untuk matriks $2 \\times 2$, jumlah akar-akar karakteristik $\\lambda_1 + \\lambda_2$ sama dengan nilai jejak (*trace*) dari matriks $A$, yaitu jumlah elemen-elemen diagonal utamanya. **Tips:** Salah menjabarkan perkalian suku aljabar $(5 - \\lambda)(2 - \\lambda)$ atau salah tanda pada rumus Vieta."
  },
  {
    "id": "mudah-mtk-05",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks 2x2",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$. Nilai determinan dari matriks $A$ $(\\det(A))$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14$",
      "$26$",
      "$20$",
      "$-26$",
      "$18$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Determinan Matriks Ordo 2x2:</strong><br>\n          $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>$$\\det(A) = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Awas tanda minus ganda: $-(-6) = +6$. Sering terjadi kesalahan menghitung $20 - 6 = 14$.\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "determinan-matriks",
    "hint": "Determinan Matriks Ordo 2x2: $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$. **Tips:** Awas tanda minus ganda: $-(-6) = +6$."
  },
  {
    "id": "sup-mtk-alj-02",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-det",
    "category": "Determinan Matriks 3x3 Aturan Sarrus",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Nilai determinan dari matriks ordo $3\\times3$ berikut: $M = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & 2 \\\\ 0 & -1 & 4 \\end{pmatrix}$ dihitung menggunakan aturan Sarrus adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$24$",
      "$20$",
      "$18$",
      "$28$",
      "$16$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Metode Sarrus Matriks $3\\times3$:</strong><br>Salin dua kolom pertama ke sebelah kanan matriks, jumlahkan hasil kali diagonal utama ke bawah, lalu kurangkan hasil kali diagonal sekunder ke atas.</div>",
      "steps": "<ol><li>Hasil kali diagonal turun: $(2 \\times 3 \\times 4) + (1 \\times 2 \\times 0) + (0 \\times 1 \\times (-1)) = 24 + 0 + 0 = 24$.</li><li>Hasil kali diagonal naik: $(0 \\times 3 \\times 0) + ((-1) \\times 2 \\times 2) + (4 \\times 1 \\times 1) = 0 - 4 + 4 = 0$.</li><li>Determinan: $\\det(M) = 24 - 0 = 24$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Kesalahan tanda minus pada suku $(-1)$ saat melakukan perkalian diagonal sekunder.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Determinan Matriks 2x2 dan 3x3",
    "subTopic": "Determinan Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "determinan-matriks",
    "hint": "Metode Sarrus Matriks $3\\times3$: Salin dua kolom pertama ke sebelah kanan matriks, jumlahkan hasil kali diagonal utama ke bawah, lalu kurangkan hasil kali diagonal sekunder ke atas. **Tips:** Kesalahan tanda minus pada suku $(-1)$ saat melakukan perkalian diagonal sekunder."
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
