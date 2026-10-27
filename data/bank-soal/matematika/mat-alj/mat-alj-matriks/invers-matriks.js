/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Aljabar
 * Bab Kecil: Matriks (mat-alj-matriks)
 * Sub-Bab: Invers Matriks 2x2 dan 3x3 (mat-alj-matriks-invers)
 * Slug: invers-matriks
 * Indikator: Invers matriks non-singular A^(-1) = (1 / det(A)) * adj(A).
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-alj-matriks-invers";
  const subTopicSlug = "invers-matriks";
  const questions = [
  {
    "id": "mat-alj-matriks-invers-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Ordo 2x2 Dasar",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $A = \\begin{pmatrix} 3 & 5 \\\\ 1 & 2 \\end{pmatrix}$. Invers dari matriks $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 & 5 \\\\ 1 & -3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 & 5 \\\\ 1 & -2 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Invers dari matriks ordo $2 \\times 2$, $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, dirumuskan sebagai:<br>$$M^{-1} = \\frac{1}{\\det(M)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$<br>dengan syarat $\\det(M) = ad - bc \\neq 0$.",
      "steps": "1. Hitung determinan matriks $A$: $\\det(A) = (3)(2) - (5)(1) = 6 - 5 = 1$.<br>2. Tentukan adjoin matriks $A$ dengan menukar elemen diagonal utama dan mengubah tanda diagonal sekunder:<br>$$\\text{adj}(A) = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$$<br>3. Hitung $A^{-1}$:<br>$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$$<br>4. Jadi invers matriks $A$ adalah $\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Sering lupa mengubah tanda elemen diagonal sekunder atau tertukar antara menukar posisi dan mengubah tanda."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Invers dari matriks ordo $2 \\times 2$, $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, dirumuskan sebagai: $$M^{-1} = \\frac{1}{\\det(M)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$ dengan syarat $\\det(M) = ad - bc \\neq 0$. **Tips:** Sering lupa mengubah tanda elemen diagonal sekunder atau tertukar antara menukar posisi dan mengubah tanda."
  },
  {
    "id": "mat-alj-matriks-invers-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Syarat Keberadaan Invers Matriks",
    "difficulty": "mudah",
    "statement": "Matriks $M = \\begin{pmatrix} 2 & k \\\\ 4 & 6 \\end{pmatrix}$ memiliki invers jika dan hanya jika nilai $k$ memenuhi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$k \\neq 2$",
      "$k \\neq 3$",
      "$k \\neq 4$",
      "$k = 3$",
      "$k = 6$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Suatu matriks persegi memiliki invers (non-singular) jika dan hanya jika nilai determinannya tidak sama dengan nol ($\\det(M) \\neq 0$).",
      "steps": "1. Syarat invers ada: $\\det(M) \\neq 0$.<br>2. Hitung rumus determinan $M$:<br>$$\\det(M) = (2)(6) - (k)(4) = 12 - 4k$$<br>3. Susun pertidaksamaan aljabar:<br>$$12 - 4k \\neq 0 \\implies 4k \\neq 12 \\implies k \\neq 3$$<br>4. Jadi matriks $M$ memiliki invers jika $k \\neq 3$ (pilihan B).",
      "pitfalls": "Terkecoh antara syarat 'memiliki invers' ($k \\neq 3$) dan 'tidak memiliki invers / singular' ($k = 3$)."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Suatu matriks persegi memiliki invers (non-singular) jika dan hanya jika nilai determinannya tidak sama dengan nol ($\\det(M) \\neq 0$)."
  },
  {
    "id": "mat-alj-matriks-invers-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Sifat Perkalian Matriks dengan Inversnya",
    "difficulty": "mudah",
    "statement": "Jika $P$ adalah matriks persegi tak-singular dan $I$ adalah matriks identitas yang berordo sama dengan $P$, maka hasil penyederhanaan bentuk $P \\cdot P^{-1} + 2I$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$I$",
      "$2I$",
      "$3I$",
      "$O$",
      "$P$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Definisi invers matriks menyatakan bahwa perkalian matriks tak-singular dengan inversnya selalu menghasilkan matriks identitas: $P \\cdot P^{-1} = P^{-1} \\cdot P = I$.",
      "steps": "1. Gunakan identitas perkalian invers: $P \\cdot P^{-1} = I$.<br>2. Substitusikan ke ekspresi yang ditanyakan:<br>$$P \\cdot P^{-1} + 2I = I + 2I$$<br>3. Jumlahkan koefisien matriks identitas yang sejenis: $1I + 2I = 3I$.<br>4. Jadi hasil penyederhanaannya adalah $3I$ (pilihan C).",
      "pitfalls": "Mengira $P \\cdot P^{-1} = 1$ (skalar) dan bukan matriks identitas $I$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan hubungan matematis dasar: $P \\cdot P^{-1} = P^{-1} \\cdot P = I$."
  },
  {
    "id": "mat-alj-matriks-invers-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Diagonal",
    "difficulty": "mudah",
    "statement": "Invers dari matriks diagonal $D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$",
      "$\\begin{pmatrix} -\\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{4} \\end{pmatrix}$",
      "$\\begin{pmatrix} -4 & 0 \\\\ 0 & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & \\frac{1}{2} \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Invers dari matriks diagonal tak-singular $D = \\text{diag}(d_1, d_2, \\dots, d_n)$ adalah matriks diagonal dengan elemen-elemen kebalikan dari masing-masing diagonal utamanya: $D^{-1} = \\text{diag}\\left(\\frac{1}{d_1}, \\frac{1}{d_2}, \\dots, \\frac{1}{d_n}\\right)$.",
      "steps": "1. Hitung determinan matriks $D$: $\\det(D) = (4)(-2) - (0)(0) = -8$.<br>2. Tentukan adjoin matriks $D$: $\\text{adj}(D) = \\begin{pmatrix} -2 & 0 \\\\ 0 & 4 \\end{pmatrix}$.<br>3. Kalikan dengan skalar $\\frac{1}{\\det(D)} = -\\frac{1}{8}$:<br>$$D^{-1} = -\\frac{1}{8} \\begin{pmatrix} -2 & 0 \\\\ 0 & 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{-2}{-8} & 0 \\\\ 0 & \\frac{4}{-8} \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$$<br>4. Jadi invers matriks $D$ adalah $\\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & -\\frac{1}{2} \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Menukar letak diagonal tanpa membagi dengan determinan, atau salah tanda minus pada $-\\frac{1}{2}$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Invers dari matriks diagonal tak-singular $D = \\text{diag}(d_1, d_2, \\dots, d_n)$ adalah matriks diagonal dengan elemen-elemen kebalikan dari masing-masing diagonal utamanya: $D^{-1} = \\text{diag}\\left(\\frac{1}{d_1}, \\frac{1}{d_2}, \\dots, \\frac{1}{d_n}\\right)$. **Tips:** Menukar letak diagonal tanpa membagi dengan determinan, atau salah tanda minus pada $-\\frac{1}{2}$."
  },
  {
    "id": "mat-alj-matriks-invers-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Pecahan Aljabar",
    "difficulty": "mudah",
    "statement": "Diketahui matriks $B = \\begin{pmatrix} 4 & 2 \\\\ 3 & 2 \\end{pmatrix}$. Invers dari matriks $B$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 1 \\\\ \\frac{3}{2} & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ \\frac{3}{2} & 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & -1 \\\\ -\\frac{3}{2} & 1 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Invers matriks $B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ diperoleh dengan rumus $B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
      "steps": "1. Hitung nilai determinan matriks $B$:<br>$$\\det(B) = (4)(2) - (2)(3) = 8 - 6 = 2$$<br>2. Susun adjoin matriks $B$:<br>$$\\text{adj}(B) = \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}$$<br>3. Kalikan adjoin dengan skalar $\\frac{1}{\\det(B)} = \\frac{1}{2}$:<br>$$B^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{2}{2} & \\frac{-2}{2} \\\\ \\frac{-3}{2} & \\frac{4}{2} \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$$<br>4. Jadi invers dari matriks $B$ adalah $\\begin{pmatrix} 1 & -1 \\\\ -\\frac{3}{2} & 2 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Hanya menyusun adjoin tanpa membaginya dengan nilai determinan (2)."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Mudah",
    "hint": "Invers matriks $B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ diperoleh dengan rumus $B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$. **Tips:** Hanya menyusun adjoin tanpa membaginya dengan nilai determinan (2)."
  },
  {
    "id": "mat-alj-matriks-invers-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Hasil Kali Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui matriks invers $A^{-1} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B^{-1} = \\begin{pmatrix} -1 & 0 \\\\ 2 & 1 \\end{pmatrix}$. Matriks $(AB)^{-1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} -1 & -2 \\\\ 5 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 2 \\\\ 5 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 5 \\\\ -2 & 8 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 & 8 \\\\ -1 & -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 5 & 7 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan teorema pembalikan urutan invers pada perkalian matriks (*reversal property*), invers dari hasil perkalian dua matriks adalah:<br>$$(AB)^{-1} = B^{-1} \\cdot A^{-1}$$",
      "steps": "1. Terapkan sifat invers perkalian: $(AB)^{-1} = B^{-1} \\cdot A^{-1}$.<br>2. Kalikan matriks $B^{-1}$ dengan matriks $A^{-1}$:<br>$$(AB)^{-1} = \\begin{pmatrix} -1 & 0 \\\\ 2 & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$<br>3. Hitung elemen-elemen hasil kali matriks:<br>- Baris 1 Kolom 1: $(-1)(1) + (0)(3) = -1$<br>- Baris 1 Kolom 2: $(-1)(2) + (0)(4) = -2$<br>- Baris 2 Kolom 1: $(2)(1) + (1)(3) = 2 + 3 = 5$<br>- Baris 2 Kolom 2: $(2)(2) + (1)(4) = 4 + 4 = 8$<br>4. Diperoleh $(AB)^{-1} = \\begin{pmatrix} -1 & -2 \\\\ 5 & 8 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Mengira urutan perkalian invers tidak berbalik, yaitu salah menghitung $A^{-1} B^{-1}$ alih-alih $B^{-1} A^{-1}$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Berdasarkan teorema pembalikan urutan invers pada perkalian matriks (*reversal property*), invers dari hasil perkalian dua matriks adalah: $$(AB)^{-1} = B^{-1} \\cdot A^{-1}$$. **Tips:** Mengira urutan perkalian invers tidak berbalik, yaitu salah menghitung $A^{-1} B^{-1}$ alih-alih $B^{-1} A^{-1}$."
  },
  {
    "id": "mat-alj-matriks-invers-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Perpangkatan Invers Matriks",
    "difficulty": "sedang",
    "statement": "Diketahui matriks $M = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. Matriks $(M^{-1})^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 14 & -5 \\\\ -25 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 9 & -1 \\\\ -25 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 14 & 5 \\\\ 25 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 19 & -5 \\\\ -25 & 14 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Matriks $(M^{-1})^2$ diperoleh dengan mencari invers $M^{-1}$ terlebih dahulu, kemudian mengalikan matriks invers tersebut dengan dirinya sendiri: $(M^{-1})^2 = M^{-1} \\cdot M^{-1}$.",
      "steps": "1. Hitung determinan matriks $M$: $\\det(M) = (2)(3) - (1)(5) = 6 - 5 = 1$.<br>2. Tentukan invers matriks $M$:<br>$$M^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$<br>3. Hitung perkalian kuadrat $(M^{-1})^2 = M^{-1} \\cdot M^{-1}$:<br>$$(M^{-1})^2 = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$<br>- Elemen (1,1): $(3)(3) + (-1)(-5) = 9 + 5 = 14$<br>- Elemen (1,2): $(3)(-1) + (-1)(2) = -3 - 2 = -5$<br>- Elemen (2,1): $(-5)(3) + (2)(-5) = -15 - 10 = -25$<br>- Elemen (2,2): $(-5)(-1) + (2)(2) = 5 + 4 = 9$<br>4. Jadi diperoleh $(M^{-1})^2 = \\begin{pmatrix} 14 & -5 \\\\ -25 & 9 \\end{pmatrix}$ (pilihan A).",
      "pitfalls": "Menguadratkan masing-masing elemen di dalam matriks invers alih-alih melakukan perkalian baris kali kolom."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Matriks $(M^{-1})^2$ diperoleh dengan mencari invers $M^{-1}$ terlebih dahulu, kemudian mengalikan matriks invers tersebut dengan dirinya sendiri: $(M^{-1})^2 = M^{-1} \\cdot M^{-1}$. **Tips:** Menguadratkan masing-masing elemen di dalam matriks invers alih-alih melakukan perkalian baris kali kolom."
  },
  {
    "id": "mat-alj-matriks-invers-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Diagonal Ordo 3x3",
    "difficulty": "sedang",
    "statement": "Diketahui matriks diagonal $C = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix}$. Jumlah seluruh elemen dari matriks $C^{-1}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-\\frac{3}{10}$",
      "$-\\frac{1}{10}$",
      "$\\frac{1}{10}$",
      "$\\frac{7}{10}$",
      "$6$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk matriks diagonal tak-singular berordo $3 \\times 3$, invers matriksnya merupakan matriks diagonal yang elemen diagonalnya adalah resiprokal (kebalikan) dari elemen diagonal matriks semula.",
      "steps": "1. Matriks $C$ adalah matriks diagonal dengan entri $c_{11} = 2$, $c_{22} = -1$, dan $c_{33} = 5$.<br>2. Tentukan invers masing-masing elemen diagonal:<br>$$\\frac{1}{2}, \\quad \\frac{1}{-1} = -1, \\quad \\frac{1}{5}$$<br>3. Matriks inversnya berbentuk:<br>$$C^{-1} = \\begin{pmatrix} \\frac{1}{2} & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & \\frac{1}{5} \\end{pmatrix}$$<br>4. Jumlahkan seluruh elemennya (karena elemen selain diagonal adalah 0):<br>$$\\text{Jumlah} = \\frac{1}{2} + (-1) + \\frac{1}{5} = \\frac{5 - 10 + 2}{10} = -\\frac{3}{10}$$<br>5. Jadi jumlah seluruh elemen $C^{-1}$ adalah $-\\frac{3}{10}$ (pilihan A).",
      "pitfalls": "Salah menyamakan penyebut pecahan atau salah tanda pada $-1$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Untuk matriks diagonal tak-singular berordo $3 \\times 3$, invers matriksnya merupakan matriks diagonal yang elemen diagonalnya adalah resiprokal (kebalikan) dari elemen diagonal matriks semula. **Tips:** Salah menyamakan penyebut pecahan atau salah tanda pada $-1$."
  },
  {
    "id": "mat-alj-matriks-invers-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Berdasarkan Persamaan Matriks Polinomial",
    "difficulty": "sedang",
    "statement": "Diketahui matriks persegi $A$ memenuhi persamaan matriks $A^2 - 5A + 2I = O$, dengan $I$ matriks identitas dan $O$ matriks nol. Invers matriks $A$ dapat dinyatakan sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{2}(5I - A)$",
      "$\\frac{1}{2}(A - 5I)$",
      "$5I - A$",
      "$A - 5I$",
      "$\\frac{1}{5}(2I - A)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika matriks $A$ memenuhi persamaan polinomial $A^2 + pA + qI = O$ dengan $q \\neq 0$, maka matriks tersebut memiliki invers yang dapat dicari dengan memfaktorkan perkalian matriks $A$ terhadap matriks identitas $I$.",
      "steps": "1. Tuliskan persamaan: $A^2 - 5A + 2I = O$.<br>2. Pindahkan konstanta identitas ke ruas kanan:<br>$$A^2 - 5A = -2I$$<br>3. Faktorkan matriks $A$ di ruas kiri:<br>$$A(A - 5I) = -2I$$<br>4. Bagi kedua ruas dengan skalar $-2$:<br>$$A \\left(-\\frac{1}{2}(A - 5I)\\right) = I \\implies A \\left(\\frac{1}{2}(5I - A)\\right) = I$$<br>5. Berdasarkan definisi invers di mana $A \\cdot A^{-1} = I$, maka:<br>$$A^{-1} = \\frac{1}{2}(5I - A)$$<br>6. Jadi invers matriks $A$ adalah $\\frac{1}{2}(5I - A)$ (pilihan A).",
      "pitfalls": "Salah tanda ketika membagi dengan $-2$ sehingga memilih $\\frac{1}{2}(A - 5I)$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Jika matriks $A$ memenuhi persamaan polinomial $A^2 + pA + qI = O$ dengan $q \\neq 0$, maka matriks tersebut memiliki invers yang dapat dicari dengan memfaktorkan perkalian matriks $A$ terhadap matriks identitas $I$. **Tips:** Salah tanda ketika membagi dengan $-2$ sehingga memilih $\\frac{1}{2}(A - 5I)$."
  },
  {
    "id": "mat-alj-matriks-invers-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subChapterId": "mat-alj-matriks",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Elemen Invers Matriks Segitiga Ordo 3x3",
    "difficulty": "sedang",
    "statement": "Diketahui matriks unipotent segitiga atas $T = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}$. Elemen pada baris ke-1 kolom ke-3 dari matriks invers $T^{-1}$ bernilai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "-6",
      "-3",
      "0",
      "3",
      "6"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Invers matriks $T$ memenuhi relasi $T \\cdot T^{-1} = I$. Elemen kolom ke-3 dari $T^{-1}$, yaitu $\\mathbf{v}_3 = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$, dapat diselesaikan melalui sistem persamaan $T \\mathbf{v}_3 = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$.",
      "steps": "1. Tuliskan sistem persamaan matriks untuk kolom ke-3:<br>$$\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$$<br>2. Selesaikan persamaan dari baris paling bawah secara substitusi mundur (*back substitution*):<br>- Baris 3: $z = 1$<br>- Baris 2: $y + 3z = 0 \\implies y + 3(1) = 0 \\implies y = -3$<br>- Baris 1: $x + 2y + 0z = 0 \\implies x + 2(-3) = 0 \\implies x - 6 = 0 \\implies x = 6$<br>3. Nilai $x$ adalah elemen pada baris ke-1 kolom ke-3 dari $T^{-1}$, yaitu bernilai 6.<br>4. Jadi nilai yang dicari adalah 6 (pilihan E).",
      "pitfalls": "Sering mengira nilai elemen tetap 0 seperti matriks asalnya atau keliru tanda menjadi $-6$."
    },
    "subTopicSlug": "invers-matriks",
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "difficultyLabel": "Sedang",
    "hint": "Invers matriks $T$ memenuhi relasi $T \\cdot T^{-1} = I$. Elemen kolom ke-3 dari $T^{-1}$, yaitu $\\mathbf{v}_3 = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$, dapat diselesaikan melalui sistem persamaan $T \\mathbf{v}_3 = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$. **Tips:** Sering mengira nilai elemen tetap 0 seperti matriks asalnya atau keliru tanda menjadi $-6$."
  },
  {
    "id": "sup-mtk-alj-01",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-alj",
    "subTopicId": "mat-alj-matriks-invers",
    "category": "Invers Matriks Ordo 2x2",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Diberikan matriks $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$. Matriks invers $A^{-1}$ dari matriks tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{10}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} 3 & -2 \\\\ -1 & 4 \\end{pmatrix}$",
      "$\\frac{1}{14}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\frac{1}{10}\\begin{pmatrix} -4 & 2 \\\\ 1 & -3 \\end{pmatrix}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Invers Matriks Ordo $2\\times2$:</strong><br>Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, inversnya adalah $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ dengan $\\det(A) = ad - bc \\neq 0$.</div>",
      "steps": "<ol><li>Determinan: $\\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$.</li><li>Adjoin matriks: tukar elemen diagonal utama dan ubah tanda diagonal samping $\\to \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li><li>$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Lupa menukar posisi elemen diagonal utama saat membentuk matriks adjoin.</div>"
    },
    "bab": "Aljabar",
    "subBab": "Invers Matriks 2x2 dan 3x3",
    "subTopic": "Invers Matriks 2x2 dan 3x3",
    "chapterTitle": "Aljabar",
    "subChapterId": "mat-alj-matriks",
    "subTopicSlug": "invers-matriks",
    "hint": "Invers Matriks Ordo $2\\times2$: Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, inversnya adalah $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ dengan $\\det(A) = ad - bc \\neq 0$. **Tips:** Lupa menukar posisi elemen diagonal utama saat membentuk matriks adjoin."
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
