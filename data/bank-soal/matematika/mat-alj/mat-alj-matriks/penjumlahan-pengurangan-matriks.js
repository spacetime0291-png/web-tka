/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Penjumlahan dan Pengurangan Matriks (mat-alj-matriks-operasi)
 * Slug: penjumlahan-pengurangan-matriks
 * Indikator: Operasi penjumlahan dan pengurangan matriks berordo sama serta sifat aljabarnya.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-operasi";
  const subTopicSlug = "penjumlahan-pengurangan-matriks";
  const questions = [
  {
    "id": "mat-alj-matriks-operasi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Syarat Penjumlahan dan Pengurangan Matriks",
    "difficulty": "mudah",
    "statement": "Dua buah matriks $A$ dan $B$ dapat dijumlahkan atau dikurangkan ($A + B$ atau $A - B$) jika dan hanya jika memenuhi syarat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Keduanya memiliki ordo yang sama",
      "Jumlah kolom matriks A sama dengan jumlah baris matriks B",
      "Keduanya merupakan matriks persegi",
      "Keduanya memiliki nilai determinan yang sama",
      "Keduanya memiliki elemen-elemen bernilai positif"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi penjumlahan dan pengurangan matriks dilakukan elemen demi elemen pada posisi yang bersesuaian ($c_{ij} = a_{ij} \\pm b_{ij}$). Oleh karena itu, syarat mutlaknya adalah kedua matriks harus memiliki dimensi (ordo) yang identik.",
      "steps": "1. Tinjau operasi penjumlahan elemen per elemen: jika matriks $A$ berordo $m \\times n$ dan matriks $B$ berordo $p \\times q$, maka operasi $A \\pm B$ hanya terdefinisi jika banyak baris sama ($m = p$) dan banyak kolom sama ($n = q$).<br>2. Pilihan B adalah syarat untuk perkalian dua matriks ($A \\cdot B$), bukan penjumlahan/pengurangan.<br>3. Jadi syarat yang benar adalah keduanya memiliki ordo yang sama (pilihan A).",
      "pitfalls": "Siswa sering tertukar dengan syarat perkalian matriks (jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua)."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Operasi penjumlahan dan pengurangan matriks dilakukan elemen demi elemen pada posisi yang bersesuaian ($c_{ij} = a_{ij} \\pm b_{ij}$). Oleh karena itu, syarat mutlaknya adalah kedua matriks harus memiliki dimensi (ordo) yang identik."
  },
  {
    "id": "mat-alj-matriks-operasi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Penjumlahan Dua Matriks Ordo 2x2",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 3 & -2 \\\\ 4 & 5 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 7 \\\\ 2 & -3 \\end{pmatrix}$. Hasil dari operasi $A + B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 2 & 5 \\\\ 6 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 9 \\\\ 2 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & -5 \\\\ -6 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 9 \\\\ 6 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 5 \\\\ 6 & 2 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Penjumlahan dua matriks dilakukan dengan menjumlahkan setiap pasang elemen yang seletak:<br>$$\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} + \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{pmatrix}$$",
      "steps": "1. Jumlahkan elemen baris 1:<br>- Kolom 1: $3 + (-1) = 2$<br>- Kolom 2: $-2 + 7 = 5$<br>2. Jumlahkan elemen baris 2:<br>- Kolom 1: $4 + 2 = 6$<br>- Kolom 2: $5 + (-3) = 2$<br>3. Susun matriks hasil:<br>$$A + B = \\begin{pmatrix} 2 & 5 \\\\ 6 & 2 \\end{pmatrix}$$<br>4. Jadi hasil penjumlahannya adalah pilihan A.",
      "pitfalls": "Kesalahan perhitungan tanda negatif pada $-2 + 7$ atau $5 + (-3)$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Penjumlahan dua matriks dilakukan dengan menjumlahkan setiap pasang elemen yang seletak: $$\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} + \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{pmatrix}$$. **Tips:** Kesalahan perhitungan tanda negatif pada $-2 + 7$ atau $5 + (-3)$."
  },
  {
    "id": "mat-alj-matriks-operasi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Perkalian Skalar pada Matriks",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $P = \\begin{pmatrix} 4 & -6 \\\\ 8 & 2 \\end{pmatrix}$. Hasil dari perkalian skalar $\\frac{1}{2}P$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 8 & -12 \\\\ 16 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 4 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -3 \\\\ 8 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -6 \\\\ 4 & 2 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perkalian suatu matriks dengan skalar $k$ dilakukan dengan mengalikan setiap elemen matriks tersebut dengan bilangan skalar $k$:<br>$$k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}$$",
      "steps": "1. Kalikan setiap elemen matriks $P$ dengan $\\frac{1}{2}$:<br>- Baris 1: $\\frac{1}{2}(4) = 2$, $\\frac{1}{2}(-6) = -3$<br>- Baris 2: $\\frac{1}{2}(8) = 4$, $\\frac{1}{2}(2) = 1$<br>2. Susun matriks hasil:<br>$$\\frac{1}{2}P = \\begin{pmatrix} 2 & -3 \\\\ 4 & 1 \\end{pmatrix}$$<br>3. Jadi jawaban yang benar adalah pilihan A.",
      "pitfalls": "Hanya mengalikan elemen baris pertama atau hanya elemen diagonal utama, melupakan bahwa skalar harus dikalikan ke seluruh elemen matriks."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Perkalian suatu matriks dengan skalar $k$ dilakukan dengan mengalikan setiap elemen matriks tersebut dengan bilangan skalar $k$: $$k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}$$."
  },
  {
    "id": "mat-alj-matriks-operasi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Operasi Campuran Perkalian Skalar dan Pengurangan",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $K = \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix}$ dan $L = \\begin{pmatrix} 1 & -2 \\\\ 3 & 0 \\end{pmatrix}$. Hasil operasi matriks $2K - L$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 3 & 8 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 4 \\\\ -5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 8 \\\\ 1 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 8 \\\\ -1 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 5 \\\\ -4 & 4 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Operasi kombinasi $2K - L$ diselesaikan dengan mengalikan skalar 2 terlebih dahulu ke seluruh elemen matriks $K$, lalu mengurangkan hasilnya dengan elemen-elemen seletak dari matriks $L$.",
      "steps": "1. Hitung matriks $2K$:<br>$$2K = 2 \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ -2 & 8 \\end{pmatrix}$$<br>2. Kurangkan dengan matriks $L$:<br>$$2K - L = \\begin{pmatrix} 4 & 6 \\\\ -2 & 8 \\end{pmatrix} - \\begin{pmatrix} 1 & -2 \\\\ 3 & 0 \\end{pmatrix}$$<br>- Baris 1 Kolom 1: $4 - 1 = 3$<br>- Baris 1 Kolom 2: $6 - (-2) = 6 + 2 = 8$<br>- Baris 2 Kolom 1: $-2 - 3 = -5$<br>- Baris 2 Kolom 2: $8 - 0 = 8$<br>3. Susun matriks hasil:<br>$$2K - L = \\begin{pmatrix} 3 & 8 \\\\ -5 & 8 \\end{pmatrix}$$<br>4. Jadi jawabannya adalah pilihan A.",
      "pitfalls": "Kesalahan tanda pada operasi pengurangan $6 - (-2)$ yang sering keliru dihitung sebagai $6 - 2 = 4$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Operasi kombinasi $2K - L$ diselesaikan dengan mengalikan skalar 2 terlebih dahulu ke seluruh elemen matriks $K$, lalu mengurangkan hasilnya dengan elemen-elemen seletak dari matriks $L$."
  },
  {
    "id": "mat-alj-matriks-operasi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Kesamaan Matriks Melalui Penjumlahan Sederhana",
    "difficulty": "mudah",
    "statement": "Diketahui persamaan matriks $\\begin{pmatrix} x & 5 \\\\ 2 & y \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 4 & 2 \\end{pmatrix} = \\begin{pmatrix} 7 & 4 \\\\ 6 & 9 \\end{pmatrix}$. Nilai dari perkalian $x \\cdot y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$14$",
      "$21$",
      "$24$",
      "$28$",
      "$32$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan konsep penjumlahan matriks dan kesamaan dua matriks untuk menyusun persamaan linier bagi masing-masing elemen yang memuat variabel.",
      "steps": "1. Jumlahkan ruas kiri:<br>$$\\begin{pmatrix} x + 3 & 5 + (-1) \\\\ 2 + 4 & y + 2 \\end{pmatrix} = \\begin{pmatrix} x + 3 & 4 \\\\ 6 & y + 2 \\end{pmatrix}$$<br>2. Samakan dengan ruas kanan:<br>$$\\begin{pmatrix} x + 3 & 4 \\\\ 6 & y + 2 \\end{pmatrix} = \\begin{pmatrix} 7 & 4 \\\\ 6 & 9 \\end{pmatrix}$$<br>3. Selesaikan nilai variabel:<br>- Elemen baris 1 kolom 1: $x + 3 = 7 \\implies x = 7 - 3 = 4$<br>- Elemen baris 2 kolom 2: $y + 2 = 9 \\implies y = 9 - 2 = 7$<br>4. Hitung nilai $x \\cdot y$:<br>$$x \\cdot y = 4 \\times 7 = 28$$<br>5. Jadi nilai perkaliannya adalah $28$ (pilihan D).",
      "pitfalls": "Menjumlahkan variabel alih-alih mengalikannya ($4 + 7 = 11$), atau salah memindahkan ruas."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan konsep penjumlahan matriks dan kesamaan dua matriks untuk menyusun persamaan linier bagi masing-masing elemen yang memuat variabel."
  },
  {
    "id": "mat-alj-matriks-operasi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Penyelesaian Persamaan Matriks untuk Menemukan Matriks X",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 3 & -3 \\\\ 6 & 0 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 4 & 1 \\\\ 5 & 2 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan aljabar matriks $2X + A = 3B - X$, maka matriks $X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 0 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 2 & 3 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan matriks linear diselesaikan menggunakan sifat aljabar penjumlahan dan perkalian skalar: kumpulkan suku yang memuat variabel matriks $X$ ke satu ruas:<br>$$2X + X = 3B - A \\implies 3X = 3B - A \\implies X = \\frac{1}{3}(3B - A)$$",
      "steps": "1. Sederhanakan persamaan matriks:<br>$$2X + A = 3B - X \\implies 3X = 3B - A$$<br>2. Hitung matriks $3B$:<br>$$3B = 3 \\begin{pmatrix} 4 & 1 \\\\ 5 & 2 \\end{pmatrix} = \\begin{pmatrix} 12 & 3 \\\\ 15 & 6 \\end{pmatrix}$$<br>3. Kurangkan dengan matriks $A$:<br>$$3B - A = \\begin{pmatrix} 12 & 3 \\\\ 15 & 6 \\end{pmatrix} - \\begin{pmatrix} 3 & -3 \\\\ 6 & 0 \\end{pmatrix} = \\begin{pmatrix} 12 - 3 & 3 - (-3) \\\\ 15 - 6 & 6 - 0 \\end{pmatrix} = \\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$$<br>4. Kalikan dengan skalar $\\frac{1}{3}$:<br>$$X = \\frac{1}{3} \\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ 3 & 2 \\end{pmatrix}$$<br>5. Jadi matriks $X$ adalah pilihan A.",
      "pitfalls": "Lupa mengalikan dengan skalar $\\frac{1}{3}$ di langkah terakhir sehingga memilih $\\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Persamaan matriks linear diselesaikan menggunakan sifat aljabar penjumlahan dan perkalian skalar: kumpulkan suku yang memuat variabel matriks $X$ ke satu ruas: $$2X + X = 3B - A \\implies 3X = 3B - A \\implies X = \\frac{1}{3}(3B - A)$$. **Tips:** Lupa mengalikan dengan skalar $\\frac{1}{3}$ di langkah terakhir sehingga memilih $\\begin{pmatrix} 9 & 6 \\\\ 9 & 6 \\end{pmatrix}$."
  },
  {
    "id": "mat-alj-matriks-operasi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Sistem Persamaan Linier pada Elemen Kesamaan Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui kesamaan matriks:<br>$$3 \\begin{pmatrix} x & 2 \\\\ -1 & y \\end{pmatrix} - \\begin{pmatrix} y & 1 \\\\ -2 & 2x \\end{pmatrix} = \\begin{pmatrix} 5 & 5 \\\\ -1 & 6 \\end{pmatrix}$$<br>Nilai dari $x^2 + y^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$13$",
      "$20$",
      "$25$",
      "$29$",
      "$34$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Lakukan operasi skalar dan pengurangan pada ruas kiri terlebih dahulu, lalu samakan elemen-elemen yang seletak untuk memperoleh sistem persamaan linear dua variabel (SPLDV) dalam $x$ dan $y$.",
      "steps": "1. Operasikan ruas kiri:<br>$$\\begin{pmatrix} 3x & 6 \\\\ -3 & 3y \\end{pmatrix} - \\begin{pmatrix} y & 1 \\\\ -2 & 2x \\end{pmatrix} = \\begin{pmatrix} 3x - y & 5 \\\\ -1 & 3y - 2x \\end{pmatrix}$$<br>2. Samakan dengan ruas kanan $\\begin{pmatrix} 5 & 5 \\\\ -1 & 6 \\end{pmatrix}$:<br>- Dari elemen baris 1 kolom 1: $3x - y = 5 \\implies y = 3x - 5$<br>- Dari elemen baris 2 kolom 2: $3y - 2x = 6$<br>3. Substitusikan $y = 3x - 5$ ke persamaan kedua:<br>$$3(3x - 5) - 2x = 6 \\implies 9x - 15 - 2x = 6 \\implies 7x = 21 \\implies x = 3$$<br>4. Cari nilai $y$:<br>$$y = 3(3) - 5 = 9 - 5 = 4$$<br>5. Hitung nilai $x^2 + y^2$:<br>$$x^2 + y^2 = 3^2 + 4^2 = 9 + 16 = 25$$<br>6. Jadi nilai $x^2 + y^2$ adalah $25$ (pilihan C).",
      "pitfalls": "Kesalahan tanda saat melakukan substitusi aljabar $3(3x - 5) = 9x - 15$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Lakukan operasi skalar dan pengurangan pada ruas kiri terlebih dahulu, lalu samakan elemen-elemen yang seletak untuk memperoleh sistem persamaan linear dua variabel (SPLDV) dalam $x$ dan $y$."
  },
  {
    "id": "mat-alj-matriks-operasi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Kombinasi Linier Dua Matriks",
    "difficulty": "sedang",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} 2 & 1 \\\\ -1 & 1 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 8 & 10 \\\\ -2 & 14 \\end{pmatrix}$. Jika matriks $C$ dapat dinyatakan sebagai kombinasi linier $C = p A + q B$, maka nilai dari $p - q$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kombinasi linier dua matriks $C = p A + q B$ berarti setiap elemen matriks $C$ merupakan jumlahan dari perkalian skalar elemen matriks $A$ dan $B$: $c_{ij} = p a_{ij} + q b_{ij}$.",
      "steps": "1. Susun kombinasi linier $p A + q B$:<br>$$p \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} + q \\begin{pmatrix} 2 & 1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} p + 2q & 2p + q \\\\ -q & 3p + q \\end{pmatrix}$$<br>2. Samakan dengan matriks $C = \\begin{pmatrix} 8 & 10 \\\\ -2 & 14 \\end{pmatrix}$:<br>- Dari elemen baris 2 kolom 1: $-q = -2 \\implies q = 2$<br>- Dari elemen baris 1 kolom 1: $p + 2q = 8 \\implies p + 2(2) = 8 \\implies p + 4 = 8 \\implies p = 4$<br>3. Uji konsistensi pada elemen lainnya:<br>- Elemen baris 1 kolom 2: $2(4) + 2 = 10$ (sesuai)<br>- Elemen baris 2 kolom 2: $3(4) + 2 = 14$ (sesuai)<br>4. Hitung nilai $p - q$:<br>$$p - q = 4 - 2 = 2$$<br>5. Jadi nilai $p - q$ adalah $2$ (pilihan B).",
      "pitfalls": "Kesalahan membaca elemen baris 2 kolom 1 (lupa tanda minus pada $-q = -2$)."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Kombinasi linier dua matriks $C = p A + q B$ berarti setiap elemen matriks $C$ merupakan jumlahan dari perkalian skalar elemen matriks $A$ dan $B$: $c_{ij} = p a_{ij} + q b_{ij}$. **Tips:** Kesalahan membaca elemen baris 2 kolom 1 (lupa tanda minus pada $-q = -2$)."
  },
  {
    "id": "mat-alj-matriks-operasi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Operasi Transpos pada Penjumlahan Matriks Berordo 3x3",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $M = \\begin{pmatrix} 1 & 4 & -2 \\\\ 3 & 0 & 5 \\\\ 2 & -1 & 6 \\end{pmatrix}$ dan $N = \\begin{pmatrix} 2 & -1 & 3 \\\\ 0 & 4 & 1 \\\\ -3 & 2 & 5 \\end{pmatrix}$. Elemen pada baris ke-2 kolom ke-3 dari matriks $(2M - N^T)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$9$",
      "$11$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Elemen pada baris ke-$i$ dan kolom ke-$j$ dari matriks transpos $N^T$ adalah elemen baris ke-$j$ dan kolom ke-$i$ dari matriks asal $N$, yaitu $(N^T)_{ij} = n_{ji}$.",
      "steps": "1. Elemen baris ke-2 kolom ke-3 dari $(2M - N^T)$ dirumuskan sebagai:<br>$$(2M - N^T)_{23} = 2 m_{23} - (N^T)_{23} = 2 m_{23} - n_{32}$$<br>2. Ambil elemen yang bersesuaian dari matriks $M$ dan $N$:<br>- $m_{23}$ (baris ke-2, kolom ke-3 matriks $M$) adalah $5$.<br>- $n_{32}$ (baris ke-3, kolom ke-2 matriks $N$) adalah $2$.<br>3. Hitung nilainya:<br>$$(2M - N^T)_{23} = 2(5) - 2 = 10 - 2 = 8$$<br>4. Jadi nilai elemen tersebut adalah $8$ (pilihan C).",
      "pitfalls": "Mengambil elemen $n_{23} = 1$ alih-alih elemen transpos $n_{32} = 2$ sehingga keliru menghitung $2(5) - 1 = 9$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Elemen pada baris ke-$i$ dan kolom ke-$j$ dari matriks transpos $N^T$ adalah elemen baris ke-$j$ dan kolom ke-$i$ dari matriks asal $N$, yaitu $(N^T)_{ij} = n_{ji}$."
  },
  {
    "id": "mat-alj-matriks-operasi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-operasi",
    "category": "Persamaan Matriks Melibatkan Transpos dan Identitas",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dan matriks identitas $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Jika matriks $A$ memenuhi sistem persamaan $A + A^T = 4I$ dan $A - A^T = \\begin{pmatrix} 0 & 6 \\\\ -6 & 0 \\end{pmatrix}$, maka nilai dari $a + d + b - c$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$10$",
      "$12$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Gunakan dekomposisi matriks menjadi bagian simetris $\\frac{1}{2}(A + A^T)$ dan bagian antisimetris $\\frac{1}{2}(A - A^T)$:<br>$$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$",
      "steps": "1. Jumlahkan kedua persamaan matriks yang diketahui:<br>$$(A + A^T) + (A - A^T) = 2A$$<br>$$2A = \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} + \\begin{pmatrix} 0 & 6 \\\\ -6 & 0 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ -6 & 4 \\end{pmatrix}$$<br>2. Peroleh matriks $A$:<br>$$A = \\frac{1}{2} \\begin{pmatrix} 4 & 6 \\\\ -6 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 3 \\\\ -3 & 2 \\end{pmatrix}$$<br>3. Identifikasi masing-masing elemen matriks $A$:<br>$$a = 2, \\quad b = 3, \\quad c = -3, \\quad d = 2$$<br>4. Hitung ekspresi aljabar yang diminta:<br>$$a + d + b - c = 2 + 2 + 3 - (-3) = 4 + 3 + 3 = 10$$<br>5. Jadi nilai dari $a + d + b - c$ adalah $10$ (pilihan D).",
      "pitfalls": "Kesalahan tanda minus negatif saat mengurangkan $b - c = 3 - (-3) = 6$."
    },
    "subTopicSlug": "penjumlahan-pengurangan-matriks",
    "bab": "Aljabar",
    "subBab": "Penjumlahan dan Pengurangan Matriks",
    "subTopic": "Penjumlahan dan Pengurangan Matriks",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan dekomposisi matriks menjadi bagian simetris $\\frac{1}{2}(A + A^T)$ dan bagian antisimetris $\\frac{1}{2}(A - A^T)$: $$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$."
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
