/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Persamaan Matriks (mat-alj-matriks-persamaan)
 * Slug: persamaan-matriks
 * Indikator: Penyelesaian persamaan matriks AX = B (X = A^(-1) B) dan XA = B (X = B A^(-1)).
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-persamaan";
  const subTopicSlug = "persamaan-matriks";
  const questions = [
  {
    "id": "mat-alj-matriks-persamaan-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Konsep Dasar Persamaan Matriks AX = B",
    "difficulty": "mudah",
    "statement": "Jika $A$ dan $B$ adalah matriks persegi berordo sama dan $A$ merupakan matriks tak-singular, maka bentuk penyelesaian untuk matriks $X$ dari persamaan matriks $A \\cdot X = B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$X = A^{-1} \\cdot B$",
      "$X = B \\cdot A^{-1}$",
      "$X = \\frac{B}{A}$",
      "$X = A \\cdot B^{-1}$",
      "$X = B^{-1} \\cdot A$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dalam aljabar matriks tidak didefinisikan operasi pembagian. Untuk mengeliminasi matriks pengali $A$ di sebelah kiri pada persamaan $AX = B$, kedua ruas dikalikan dengan invers $A^{-1}$ dari arah kiri:<br>$$A^{-1}(AX) = A^{-1}B \\implies IX = A^{-1}B \\implies X = A^{-1}B$$",
      "steps": "1. Tinjau persamaan: $A \\cdot X = B$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sebelah kiri:<br>$$A^{-1} \\cdot (A \\cdot X) = A^{-1} \\cdot B$$<br>3. Terapkan sifat asosiatif dan identitas invers matriks $(A^{-1} A) X = I X = X$:<br>$$X = A^{-1} \\cdot B$$<br>4. Jadi penyelesaian untuk matriks $X$ adalah $X = A^{-1} \\cdot B$ (pilihan A).",
      "pitfalls": "Menuliskan pembagian biasa seperti $\\frac{B}{A}$ atau mengalikan invers dari sebelah kanan ($B A^{-1}$), padahal perkalian matriks tidak bersifat komutatif."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-persamaan-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Konsep Dasar Persamaan Matriks XA = B",
    "difficulty": "mudah",
    "statement": "Jika matriks $X$ memenuhi persamaan matriks $X \\cdot A = B$ dengan matriks $A$ merupakan matriks tak-singular, maka matriks $X$ diperoleh melalui penyelesaian ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$X = B \\cdot A^{-1}$",
      "$X = A^{-1} \\cdot B$",
      "$X = (AB)^{-1}$",
      "$X = A \\cdot B^{-1}$",
      "$X = \\frac{B}{A}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk menyelesaikan persamaan matriks di mana variabel yang dicari berada di sebelah kiri matriks pengali ($XA = B$), kedua ruas harus dikalikan dengan invers $A^{-1}$ dari arah kanan:<br>$$(XA) A^{-1} = B A^{-1} \\implies X I = B A^{-1} \\implies X = B A^{-1}$$",
      "steps": "1. Tuliskan persamaan matriks: $X \\cdot A = B$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sisi kanan:<br>$$(X \\cdot A) \\cdot A^{-1} = B \\cdot A^{-1}$$<br>3. Sederhanakan ruas kiri menggunakan sifat invers $A \\cdot A^{-1} = I$:<br>$$X \\cdot I = B \\cdot A^{-1} \\implies X = B \\cdot A^{-1}$$<br>4. Jadi matriks $X$ dapat dicari dengan $X = B \\cdot A^{-1}$ (pilihan A).",
      "pitfalls": "Tertukar antara mengalikan dari kanan ($B A^{-1}$) dan dari kiri ($A^{-1} B$)."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-persamaan-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Menyelesaikan Persamaan AX = B",
    "difficulty": "mudah",
    "statement": "Diketahui persamaan matriks $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} X = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$. Matriks $X$ yang memenuhi persamaan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 3 \\\\ 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & 5 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk persamaan $AX = B$ diselesaikan dengan $X = A^{-1} B$, dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      "steps": "1. Misalkan $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$.<br>2. Hitung determinan $A$: $\\det(A) = (1)(1) - (2)(0) = 1$.<br>3. Tentukan invers $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$$<br>4. Kalikan $A^{-1}$ dengan $B$ dari kiri:<br>$$X = A^{-1} B = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 5 & 3 \\\\ 2 & 1 \\end{pmatrix}$$<br>- Baris 1: $[(1)(5) + (-2)(2), (1)(3) + (-2)(1)] = [5 - 4, 3 - 2] = [1, 1]$<br>- Baris 2: $[(0)(5) + (1)(2), (0)(3) + (1)(1)] = [2, 1]$<br>5. Diperoleh $X = \\begin{pmatrix} 1 & 1 \\\\ 2 & 1 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Mengalikan $B$ dengan $A^{-1}$ dari kanan atau salah tanda pada invers matriks $A$."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-persamaan-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Menyelesaikan Persamaan Matriks Baris XA = B",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ dan matriks baris $B = \\begin{pmatrix} 4 & 3 \\end{pmatrix}$. Jika matriks baris $X$ memenuhi $X \\cdot A = B$, maka matriks $X$ bernilai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 & 10 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan matriks berbentuk $X \\cdot A = B$ memiliki penyelesaian $X = B \\cdot A^{-1}$.",
      "steps": "1. Hitung nilai determinan matriks $A$: $\\det(A) = (2)(1) - (1)(1) = 2 - 1 = 1$.<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>3. Hitung hasil perkalian matriks baris $B$ dengan $A^{-1}$:<br>$$X = B \\cdot A^{-1} = \\begin{pmatrix} 4 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$<br>- Kolom 1: $(4)(1) + (3)(-1) = 4 - 3 = 1$<br>- Kolom 2: $(4)(-1) + (3)(2) = -4 + 6 = 2$<br>4. Jadi matriks baris $X$ adalah $\\begin{pmatrix} 1 & 2 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Mencoba mengalikan $A^{-1} B$ yang tidak kompatibel secara ordo ($(2 \\times 2) \\times (1 \\times 2)$)."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-persamaan-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Determinan Solusi Persamaan Matriks",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 6 \\\\ 1 & 5 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan $A \\cdot X = B$, maka nilai determinan matriks $X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "4",
      "6",
      "8"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan sifat perkalian determinan, jika $AX = B$ maka berlaku hubungan determinan:<br>$$\\det(AX) = \\det(B) \\implies \\det(A) \\cdot \\det(X) = \\det(B) \\implies \\det(X) = \\frac{\\det(B)}{\\det(A)}$$",
      "steps": "1. Hitung nilai determinan matriks $A$:<br>$$\\det(A) = (3)(2) - (1)(4) = 6 - 4 = 2$$<br>2. Hitung nilai determinan matriks $B$:<br>$$\\det(B) = (2)(5) - (6)(1) = 10 - 6 = 4$$<br>3. Gunakan relasi determinan:<br>$$\\det(X) = \\frac{\\det(B)}{\\det(A)} = \\frac{4}{2} = 2$$<br>4. Jadi nilai determinan matriks $X$ adalah 2 (pilihan B).",
      "pitfalls": "Mencari seluruh elemen matriks $X$ secara manual terlebih dahulu yang membutuhkan waktu lama dan rawan kesalahan hitung."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-persamaan-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Penyelesaian Persamaan Matriks AXB = C",
    "difficulty": "sedang",
    "statement": "Jika $A$, $B$, $C$, dan $X$ adalah matriks persegi berordo sama dengan $A$ dan $B$ tak-singular yang memenuhi persamaan $A \\cdot X \\cdot B = C$, maka rumus untuk matriks $X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$X = A^{-1} \\cdot C \\cdot B^{-1}$",
      "$X = B^{-1} \\cdot C \\cdot A^{-1}$",
      "$X = C \\cdot A^{-1} \\cdot B^{-1}$",
      "$X = (AB)^{-1} \\cdot C$",
      "$X = C \\cdot (AB)^{-1}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk menyelesaikan persamaan $AXB = C$, kalikan dengan invers $A^{-1}$ dari arah kiri dan invers $B^{-1}$ dari arah kanan:<br>$$A^{-1}(AXB)B^{-1} = A^{-1} C B^{-1} \\implies (A^{-1}A) X (B B^{-1}) = A^{-1} C B^{-1} \\implies I X I = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$",
      "steps": "1. Tuliskan persamaan awal: $A \\cdot X \\cdot B = C$.<br>2. Kalikan kedua ruas dengan $A^{-1}$ dari sebelah kiri:<br>$$A^{-1} \\cdot (A \\cdot X \\cdot B) = A^{-1} \\cdot C \\implies (A^{-1} A) \\cdot X \\cdot B = A^{-1} C \\implies X \\cdot B = A^{-1} C$$<br>3. Kalikan kedua ruas dengan $B^{-1}$ dari sebelah kanan:<br>$$(X \\cdot B) \\cdot B^{-1} = (A^{-1} C) \\cdot B^{-1} \\implies X \\cdot (B B^{-1}) = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$<br>4. Jadi rumus matriks $X$ yang tepat adalah $X = A^{-1} \\cdot C \\cdot B^{-1}$ (pilihan A).",
      "pitfalls": "Menukar posisi pengali invers menjadi $B^{-1} C A^{-1}$ atau mengelompokkan $(AB)^{-1} C$ padahal $A$ dan $B$ mengapit matriks $X$."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-persamaan-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Perhitungan Elemen Matriks XA = B",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 10 & 0 \\\\ 5 & 10 \\end{pmatrix}$. Jika matriks $X$ memenuhi $X \\cdot A = B$, maka jumlah seluruh elemen dari matriks $X$ adalah ....",
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
      "concept": "Persamaan $XA = B$ diselesaikan melalui hubungan $X = B \\cdot A^{-1}$ dengan $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.",
      "steps": "1. Hitung determinan matriks $A$:<br>$$\\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$$<br>2. Tentukan invers matriks $A$:<br>$$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$$<br>3. Hitung matriks $X = B \\cdot A^{-1}$:<br>$$X = \\begin{pmatrix} 10 & 0 \\\\ 5 & 10 \\end{pmatrix} \\left[\\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}\\right] = \\begin{pmatrix} 1 & 0 \\\\ \\frac{1}{2} & 1 \\end{pmatrix} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$$<br>- Baris 1: $[(1)(4) + 0, (1)(-2) + 0] = [4, -2]$<br>- Baris 2: $[(\\frac{1}{2})(4) + (1)(-1), (\\frac{1}{2})(-2) + (1)(3)] = [2 - 1, -1 + 3] = [1, 2]$<br>Jadi $X = \\begin{pmatrix} 4 & -2 \\\\ 1 & 2 \\end{pmatrix}$.<br>4. Jumlahkan seluruh elemen matriks $X$:<br>$$\\text{Jumlah} = 4 + (-2) + 1 + 2 = 5$$<br>5. Jadi jumlah seluruh elemennya adalah 5 (pilihan C).",
      "pitfalls": "Mengalikan $A^{-1} B$ dari sebelah kiri yang menghasilkan matriks yang salah karena perkalian matriks tidak komutatif."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-persamaan-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Persamaan Matriks Komposisi Penjumlahan AX + B = C",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & -2 \\\\ 4 & 1 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 3 & 0 \\\\ 7 & 5 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan $A \\cdot X + B = C$, maka nilai determinan matriks $X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-2",
      "1",
      "2",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Persamaan $AX + B = C$ disederhanakan menjadi $AX = C - B$. Nilai determinan matriks $X$ kemudian dihitung memanfaatkan sifat $\\det(A) \\cdot \\det(X) = \\det(C - B)$.",
      "steps": "1. Kurangkan kedua ruas dengan matriks $B$:<br>$$AX = C - B = \\begin{pmatrix} 3 & 0 \\\\ 7 & 5 \\end{pmatrix} - \\begin{pmatrix} 1 & -2 \\\\ 4 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 3 & 4 \\end{pmatrix}$$<br>2. Hitung nilai determinan dari matriks $A$:<br>$$\\det(A) = (2)(2) - (1)(3) = 4 - 3 = 1$$<br>3. Hitung determinan matriks $(C - B)$:<br>$$\\det(C - B) = (2)(4) - (2)(3) = 8 - 6 = 2$$<br>4. Berdasarkan sifat determinan perkalian:<br>$$\\det(A) \\cdot \\det(X) = \\det(C - B) \\implies 1 \\cdot \\det(X) = 2 \\implies \\det(X) = 2$$<br>5. Jadi determinan matriks $X$ bernilai 2 (pilihan C).",
      "pitfalls": "Lupa mengurangkan matriks $C - B$ terlebih dahulu atau langsung membagi elemen tanpa menghitung determinan."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-persamaan-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Persamaan Matriks Bentuk Invers",
    "difficulty": "sedang",
    "statement": "Jika $(A + X)^{-1} = B$ dengan $B$ merupakan matriks tak-singular berordo sama dengan matriks $A$, maka matriks $X$ dapat dinyatakan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$X = B^{-1} - A$",
      "$X = A - B^{-1}$",
      "$X = (B - A)^{-1}$",
      "$X = B - A^{-1}$",
      "$X = A^{-1} - B$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gunakan sifat invers ganda: $((M)^{-1})^{-1} = M$. Jika $(A + X)^{-1} = B$, lakukan inversi pada kedua ruas untuk mengisolasi suku $(A + X)$.",
      "steps": "1. Ambil invers pada kedua ruas:<br>$$((A + X)^{-1})^{-1} = B^{-1}$$<br>2. Sederhanakan ruas kiri:<br>$$A + X = B^{-1}$$<br>3. Kurangkan matriks $A$ dari kedua ruas untuk mendapatkan matriks $X$:<br>$$X = B^{-1} - A$$<br>4. Jadi matriks $X$ dinyatakan dengan $X = B^{-1} - A$ (pilihan A).",
      "pitfalls": "Mengasumsikan $(A + X)^{-1} = A^{-1} + X^{-1}$, padahal invers tidak bersifat distributif terhadap penjumlahan matriks."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-persamaan-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Persamaan Matriks dengan Transpose",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 5 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 4 \\\\ 11 \\end{pmatrix}$. Jika vektor kolom $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ memenuhi $A^T \\cdot X = B$, maka nilai dari $x + y$ adalah ....",
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
      "concept": "Persamaan $A^T X = B$ diselesaikan dengan $X = (A^T)^{-1} B$. Transpose matriks diperoleh dengan menukar baris menjadi kolom.",
      "steps": "1. Tentukan transpose matriks $A$:<br>$$A^T = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$$<br>2. Hitung determinan $A^T$: $\\det(A^T) = (1)(5) - (2)(3) = 5 - 6 = -1$.<br>3. Tentukan invers $(A^T)^{-1}$:<br>$$(A^T)^{-1} = \\frac{1}{-1} \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$$<br>4. Hitung vektor kolom $X = (A^T)^{-1} B$:<br>$$X = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix} \\begin{pmatrix} 4 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} (-5)(4) + (2)(11) \\\\ (3)(4) + (-1)(11) \\end{pmatrix} = \\begin{pmatrix} -20 + 22 \\\\ 12 - 11 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$$<br>Diperoleh $x = 2$ dan $y = 1$.<br>5. Hitung nilai $x + y = 2 + 1 = 3$.<br>6. Jadi nilai $x + y$ adalah 3 (pilihan C).",
      "pitfalls": "Lupa melakukan transpose pada matriks $A$ terlebih dahulu sebelum mencari invers dan mengalikan vektor."
    },
    "subTopicSlug": "persamaan-matriks",
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sedang-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-persamaan",
    "category": "Determinan Perkalian Matriks",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Diketahui matriks berordo $2\\times2$, yaitu $A = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$. Jika matriks $B$ memenuhi persamaan matriks $A \\cdot B = 2I$ (dengan $I$ adalah matriks identitas ordo $2\\times2$), nilai determinan dari matriks $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Sifat-Sifat Determinan Matriks:</strong><br>\n          • $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$<br>\n          • Untuk matriks ordo $n\\times n$: $\\det(k \\cdot M) = k^n \\cdot \\det(M)$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung determinan matriks $A$:\n            $$\\det(A) = (4)(2) - (3)(2) = 8 - 6 = 2$$\n          </li>\n          <li>Hitung determinan ruas kanan ($2I$ pada ordo $2\\times2$):\n            $$\\det(2I) = 2^2 \\cdot \\det(I) = 4 \\times 1 = 4$$\n          </li>\n          <li>Terapkan sifat determinan perkalian:\n            $$\\det(A \\cdot B) = \\det(2I)$$\n            $$\\det(A) \\cdot \\det(B) = 4$$\n            $$2 \\cdot \\det(B) = 4 \\implies \\det(B) = 2$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering keliru menghitung $\\det(2I) = 2$. Ingat sifat skala determinan: faktor pengali dipangkatkan dengan ordo matriks ($k^2$).\n        </div>\n      "
    },
    "bab": "Aljabar",
    "subBab": "Persamaan Matriks",
    "subTopic": "Persamaan Matriks",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "persamaan-matriks"
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
