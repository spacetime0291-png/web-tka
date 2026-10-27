/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Perkalian Skalar dan Dua Matriks (mat-alj-matriks-kali)
 * Slug: perkalian-skalar-dua-matriks
 * Indikator: Perkalian skalar dengan matriks dan perkalian antardua matriks berdimensi kompatibel.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-kali";
  const subTopicSlug = "perkalian-skalar-dua-matriks";
  const questions = [
  {
    "id": "mat-alj-matriks-kali-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Syarat Kelayakan Perkalian Dua Matriks",
    "difficulty": "mudah",
    "statement": "Perkalian antara dua buah matriks $A$ dan $B$ menghasilkan matriks $C = A \\cdot B$ hanya dapat dilakukan apabila ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Banyak kolom matriks A sama dengan banyak baris matriks B",
      "Banyak baris matriks A sama dengan banyak kolom matriks B",
      "Kedua matriks memiliki ordo yang sama persis",
      "Kedua matriks merupakan matriks identitas",
      "Nilai determinan dari kedua matriks bernilai tidak sama dengan nol"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat perkalian dua matriks $A_{m \\times p} \\cdot B_{q \\times n}$ adalah banyak kolom pada matriks pengali pertama harus sama dengan banyak baris pada matriks pengali kedua ($p = q$). Matriks hasil perkaliannya akan berordo $m \\times n$.",
      "steps": "1. Tinjau definisi aljabar perkalian matriks: elemen $c_{ij}$ diperoleh dari perkalian baris ke-$i$ matriks $A$ dengan kolom ke-$j$ matriks $B$.<br>2. Agar setiap elemen baris $A$ berpasangan secara tepat dengan elemen kolom $B$, panjang baris $A$ (banyak kolom $A$) harus sama dengan panjang kolom $B$ (banyak baris $B$).<br>3. Jadi syarat perkalian matriks adalah banyak kolom matriks $A$ sama dengan banyak baris matriks $B$ (pilihan A).",
      "pitfalls": "Sering mengira kedua matriks harus memiliki ordo yang sama (seperti syarat penjumlahan matriks)."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-kali-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Perkalian Matriks Baris dan Matriks Kolom",
    "difficulty": "mudah",
    "statement": "Hasil perkalian antara matriks baris $P = \\begin{pmatrix} 3 & -2 & 4 \\end{pmatrix}$ dan matriks kolom $Q = \\begin{pmatrix} 2 \\\\ 5 \\\\ 1 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0)$",
      "$(4)$",
      "$(6)$",
      "$(10)$",
      "$(20)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian matriks baris berordo $1 \\times n$ dengan matriks kolom berordo $n \\times 1$ menghasilkan matriks skalar berordo $1 \\times 1$ melalui penjumlahan hasil kali elemen-elemen yang sepadan:<br>$$\\begin{pmatrix} p_1 & p_2 & p_3 \\end{pmatrix} \\begin{pmatrix} q_1 \\\\ q_2 \\\\ q_3 \\end{pmatrix} = (p_1 q_1 + p_2 q_2 + p_3 q_3)$$",
      "steps": "1. Identifikasi ordo: $P$ berordo $1 \\times 3$ dan $Q$ berordo $3 \\times 1$, sehingga matriks hasil berordo $1 \\times 1$.<br>2. Kalikan elemen yang bersesuaian:<br>$$P \\cdot Q = (3 \\times 2) + (-2 \\times 5) + (4 \\times 1)$$<br>3. Hitung hasil perkalian:<br>$$P \\cdot Q = 6 - 10 + 4 = 0$$<br>4. Jadi hasil perkalian matriks adalah $(0)$ (pilihan A).",
      "pitfalls": "Kesalahan tanda operasi pada $(-2 \\times 5) = -10$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-kali-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Perkalian Dua Matriks Ordo 2x2 Dasar",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan matriks $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$. Hasil perkalian $A \\cdot B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 6 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 11 \\\\ 3 & 12 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 4 \\\\ 11 & 12 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian dua matriks ordo $2 \\times 2$ dirumuskan sebagai:<br>$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae + bg & af + bh \\\\ ce + dg & cf + dh \\end{pmatrix}$$",
      "steps": "1. Hitung elemen baris 1:<br>- Kolom 1: $(2)(1) + (1)(2) = 2 + 2 = 4$<br>- Kolom 2: $(2)(0) + (1)(3) = 0 + 3 = 3$<br>2. Hitung elemen baris 2:<br>- Kolom 1: $(3)(1) + (4)(2) = 3 + 8 = 11$<br>- Kolom 2: $(3)(0) + (4)(3) = 0 + 12 = 12$<br>3. Susun matriks hasil:<br>$$A \\cdot B = \\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$$<br>4. Jadi jawabannya adalah pilihan A.",
      "pitfalls": "Mengalikan elemen seletak secara langsung seperti penjumlahan (misal $2 \\times 1 = 2, 1 \\times 0 = 0$ sehingga menghasilkan $\\begin{pmatrix} 2 & 0 \\\\ 6 & 12 \\end{pmatrix}$ pada pilihan B)."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-kali-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Sifat Perkalian Matriks dan Matriks Identitas",
    "difficulty": "mudah",
    "statement": "Jika $A$ adalah suatu matriks persegi berordo $n \\times n$ dan $I$ adalah matriks identitas yang berordo sama, maka hasil dari operasi perkalian $A \\cdot I$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$A$",
      "$I$",
      "$A^2$",
      "$A^T$",
      "Matriks nol"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Matriks identitas $I$ bertindak sebagai elemen netral (unsur identitas) terhadap operasi perkalian matriks, sehingga berlaku sifat:<br>$$A \\cdot I = I \\cdot A = A$$",
      "steps": "1. Dalam aljabar matriks, matriks identitas memiliki peran yang analog dengan bilangan $1$ pada perkalian bilangan real biasa.<br>2. Perkalian sembarang matriks $A$ dengan matriks identitas yang sesuai ukurannya akan menghasilkan kembali matriks $A$ itu sendiri tanpa perubahan elemen apa pun.<br>3. Jadi $A \\cdot I = A$ (pilihan A).",
      "pitfalls": "Mengira perkalian dengan matriks identitas menghasilkan matriks identitas $I$ atau matriks kuadrat $A^2$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-kali-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Perpangkatan Matriks Kuadrat A^2",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $M = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Hasil dari perpangkatan matriks $M^2$ ($M \\cdot M$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 3 & -5 \\\\ 5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 1 \\\\ 1 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ 2 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 5 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & -5 \\\\ 3 & 8 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perpangkatan matriks $M^2$ didefinisikan sebagai perkalian matriks $M$ dengan dirinya sendiri ($M \\cdot M$), bukan mengkuadratkan setiap elemennya.",
      "steps": "1. Tuliskan perkalian matriks $M \\cdot M$:<br>$$M^2 = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$$<br>2. Hitung elemen baris 1:<br>- Kolom 1: $2(2) + (-1)(1) = 4 - 1 = 3$<br>- Kolom 2: $2(-1) + (-1)(3) = -2 - 3 = -5$<br>3. Hitung elemen baris 2:<br>- Kolom 1: $1(2) + 3(1) = 2 + 3 = 5$<br>- Kolom 2: $1(-1) + 3(3) = -1 + 9 = 8$<br>4. Susun matriks hasil:<br>$$M^2 = \\begin{pmatrix} 3 & -5 \\\\ 5 & 8 \\end{pmatrix}$$<br>5. Jadi hasil perpangkatan $M^2$ adalah pilihan A.",
      "pitfalls": "Mengkuadratkan masing-masing elemen secara terpisah ($2^2 = 4, (-1)^2 = 1, 1^2 = 1, 3^2 = 9$ pada pilihan B)."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-alj-matriks-kali-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Sifat Tidak Komutatif Perkalian Matriks",
    "difficulty": "sedang",
    "statement": "Diberikan dua buah matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 0 \\end{pmatrix}$. Hasil dari operasi matriks $AB - BA$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 8 & -6 \\\\ 8 & -8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & 6 \\\\ 8 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -8 & 6 \\\\ -8 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 12 & 8 \\\\ 16 & 8 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian matriks pada umumnya tidak bersifat komutatif ($AB \\neq BA$). Operasi $AB - BA$ (disebut komutator) dihitung dengan mengalikan masing-masing urutan terlebih dahulu, kemudian mengurangkan elemen-elemen yang seletak.",
      "steps": "1. Hitung perkalian $AB$:<br>$$AB = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & 1 \\\\ 4 & 0 \\end{pmatrix} = \\begin{pmatrix} (1)(2) + (2)(4) & (1)(1) + (2)(0) \\\\ (0)(2) + (3)(4) & (0)(1) + (3)(0) \\end{pmatrix} = \\begin{pmatrix} 10 & 1 \\\\ 12 & 0 \\end{pmatrix}$$<br>2. Hitung perkalian $BA$:<br>$$BA = \\begin{pmatrix} 2 & 1 \\\\ 4 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} (2)(1) + (1)(0) & (2)(2) + (1)(3) \\\\ (4)(1) + (0)(0) & (4)(2) + (0)(3) \\end{pmatrix} = \\begin{pmatrix} 2 & 7 \\\\ 4 & 8 \\end{pmatrix}$$<br>3. Hitung selisih $AB - BA$:<br>$$AB - BA = \\begin{pmatrix} 10 - 2 & 1 - 7 \\\\ 12 - 4 & 0 - 8 \\end{pmatrix} = \\begin{pmatrix} 8 & -6 \\\\ 8 & -8 \\end{pmatrix}$$<br>4. Jadi hasil dari $AB - BA$ adalah $\\begin{pmatrix} 8 & -6 \\\\ 8 & -8 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Mengasumsikan bahwa $AB = BA$ sehingga langsung menjawab matriks nol $\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-kali-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Pola Perpangkatan Matriks Berulang",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$. Jumlah seluruh elemen dari matriks $A^{50}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "100",
      "101",
      "102",
      "200",
      "202"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Untuk menghitung perpangkatan matriks berpangkat besar $A^n$, selidiki pola dari $A^2, A^3, \\dots$. Matriks segitiga atas satuan berpola $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}^n = \\begin{pmatrix} 1 & n \\cdot k \\\\ 0 & 1 \\end{pmatrix}$.",
      "steps": "1. Tentukan hasil $A^2$:<br>$$A^2 = A \\cdot A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2(2) \\\\ 0 & 1 \\end{pmatrix}$$<br>2. Tentukan hasil $A^3$:<br>$$A^3 = A^2 \\cdot A = \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 6 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2(3) \\\\ 0 & 1 \\end{pmatrix}$$<br>3. Berdasarkan induksi matematis, untuk setiap bilangan bulat positif $n$ berlaku:<br>$$A^n = \\begin{pmatrix} 1 & 2n \\\\ 0 & 1 \\end{pmatrix}$$<br>4. Untuk $n = 50$:<br>$$A^{50} = \\begin{pmatrix} 1 & 2(50) \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 100 \\\\ 0 & 1 \\end{pmatrix}$$<br>5. Hitung jumlah seluruh elemen matriks $A^{50}$:<br>$$\\text{Jumlah} = 1 + 100 + 0 + 1 = 102$$<br>6. Jadi jumlah seluruh elemen adalah 102 (pilihan C).",
      "pitfalls": "Hanya menjumlahkan elemen baris pertama atau memangkatkan setiap elemen secara langsung ($2^{50}$) yang keliru dalam aljabar matriks."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-kali-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Persamaan Kuadrat Matriks dan Teorema Cayley-Hamilton",
    "difficulty": "sedang",
    "statement": "Jika matriks $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$ memenuhi persamaan matriks $A^2 = p A + q I$ dengan $I$ merupakan matriks identitas ordo $2 \\times 2$, maka nilai dari $p + q$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-21",
      "-7",
      "0",
      "7",
      "21"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Berdasarkan Teorema Cayley-Hamilton, setiap matriks persegi ordo $2 \\times 2$ memenuhi persamaan karakteristiknya sendiri:<br>$$A^2 - \\text{tr}(A) \\cdot A + \\det(A) \\cdot I = O \\implies A^2 = \\text{tr}(A) \\cdot A - \\det(A) \\cdot I$$<br>dengan $\\text{tr}(A) = a + d$ (trace matriks) dan $\\det(A) = ad - bc$.",
      "steps": "1. Hitung $\\text{tr}(A)$ (jumlah elemen diagonal utama):<br>$$\\text{tr}(A) = 3 + 4 = 7$$<br>2. Hitung determinan matriks $A$:<br>$$\\det(A) = (3)(4) - (-1)(2) = 12 + 2 = 14$$<br>3. Terapkan Teorema Cayley-Hamilton:<br>$$A^2 - 7A + 14I = O \\implies A^2 = 7A - 14I$$<br>4. Samakan dengan bentuk $A^2 = pA + qI$, diperoleh:<br>$$p = 7 \\quad \\text{dan} \\quad q = -14$$<br>5. Hitung nilai $p + q$:<br>$$p + q = 7 + (-14) = -7$$<br>6. Jadi nilai $p + q$ adalah $-7$ (pilihan B).",
      "pitfalls": "Lupa bahwa $q = -\\det(A)$ sehingga menuliskan $q = +14$, yang menghasilkan $p + q = 21$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-kali-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Kesamaan Hasil Perkalian Matriks Berpenyandi Variabel",
    "difficulty": "sedang",
    "statement": "Diketahui perkalian dua buah matriks $\\begin{pmatrix} 2 & x \\\\ 3 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 4 \\\\ -2 & y \\end{pmatrix} = \\begin{pmatrix} -4 & 2 \\\\ 1 & 10 \\end{pmatrix}$. Nilai dari ekspresi aljabar $2x - 3y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-6",
      "0",
      "6",
      "12",
      "18"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Dua matriks bernilai sama jika elemen-elemen seletaknya bernilai sama. Perkalian matriks pada ruas kiri dijabarkan terlebih dahulu, lalu elemen-elemen yang bersesuaian disamakan untuk menyusun sistem persamaan linier satu peubah.",
      "steps": "1. Lakukan perkalian matriks di ruas kiri:<br>$$\\begin{pmatrix} 2(1) + x(-2) & 2(4) + x(y) \\\\ 3(1) + 1(-2) & 3(4) + 1(y) \\end{pmatrix} = \\begin{pmatrix} 2 - 2x & 8 + xy \\\\ 3 - 2 & 12 + y \\end{pmatrix} = \\begin{pmatrix} 2 - 2x & 8 + xy \\\\ 1 & 12 + y \\end{pmatrix}$$<br>2. Samakan dengan matriks ruas kanan $\\begin{pmatrix} -4 & 2 \\\\ 1 & 10 \\end{pmatrix}$:<br>- Dari elemen baris 1 kolom 1: $2 - 2x = -4 \\implies -2x = -6 \\implies x = 3$.<br>- Dari elemen baris 2 kolom 2: $12 + y = 10 \\implies y = 10 - 12 = -2$.<br>3. Uji konsistensi pada elemen baris 1 kolom 2: $8 + xy = 8 + (3)(-2) = 8 - 6 = 2$ (sesuai).<br>4. Hitung nilai $2x - 3y$:<br>$$2x - 3y = 2(3) - 3(-2) = 6 + 6 = 12$$<br>5. Jadi nilai dari $2x - 3y$ adalah 12 (pilihan D).",
      "pitfalls": "Kekeliruan tanda minus saat menghitung $2(3) - 3(-2)$, menghasilkan $6 - 6 = 0$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-alj-matriks-kali-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-kali",
    "category": "Sifat Transpos Perkalian Matriks",
    "difficulty": "sedang",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 1 & -3 \\\\ 2 & 0 \\end{pmatrix}$ dan matriks $B = \\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}$. Jika matriks $C = (AB)^T$, maka matriks $C$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 10 & -8 \\\\ 8 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 10 & 8 \\\\ -8 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -8 & 10 \\\\ 2 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -8 \\\\ 8 & 10 \\end{pmatrix}$",
      "$\\begin{pmatrix} -10 & -8 \\\\ 8 & -2 \\end{pmatrix}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Transpos dari perkalian dua matriks memenuhi sifat $(AB)^T = B^T A^T$. Kita dapat menghitung hasil kali $AB$ terlebih dahulu lalu mentransposkannya dengan menukar baris menjadi kolom.",
      "steps": "1. Hitung perkalian $AB$ terlebih dahulu:<br>$$AB = \\begin{pmatrix} 1 & -3 \\\\ 2 & 0 \\end{pmatrix} \\begin{pmatrix} 4 & 1 \\\\ -2 & 3 \\end{pmatrix}$$<br>- Elemen baris 1 kolom 1: $(1)(4) + (-3)(-2) = 4 + 6 = 10$<br>- Elemen baris 1 kolom 2: $(1)(1) + (-3)(3) = 1 - 9 = -8$<br>- Elemen baris 2 kolom 1: $(2)(4) + (0)(-2) = 8 + 0 = 8$<br>- Elemen baris 2 kolom 2: $(2)(1) + (0)(3) = 2 + 0 = 2$<br>Sehingga $AB = \\begin{pmatrix} 10 & -8 \\\\ 8 & 2 \\end{pmatrix}$.<br>2. Transposkan matriks $AB$ untuk mendapatkan $C = (AB)^T$:<br>Tukar elemen baris menjadi kolom:<br>$$C = (AB)^T = \\begin{pmatrix} 10 & 8 \\\\ -8 & 2 \\end{pmatrix}$$<br>3. Jadi matriks $C$ adalah $\\begin{pmatrix} 10 & 8 \\\\ -8 & 2 \\end{pmatrix}$ (pilihan B).",
      "pitfalls": "Lupa mentransposkan matriks hasil perkalian sehingga memilih $\\begin{pmatrix} 10 & -8 \\\\ 8 & 2 \\end{pmatrix}$."
    },
    "subTopicSlug": "perkalian-skalar-dua-matriks",
    "bab": "Aljabar",
    "subBab": "Perkalian Skalar dan Dua Matriks",
    "subTopic": "Perkalian Skalar dan Dua Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang"
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
