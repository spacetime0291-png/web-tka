/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Matriks Transformasi (mat-geo-trans-matriks)
 * Slug: matriks-transformasi
 * Indikator: Representasi matriks 2x2 untuk setiap jenis transformasi geometri tunggal.
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-matriks";
  const subTopicSlug = "matriks-transformasi";
  const questions = [
  {
    "id": "mat-geo-trans-matriks-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Bayangan Titik oleh Matriks Transformasi 2x2",
    "difficulty": "mudah",
    "statement": "Bayangan titik koordinat $A(3, -2)$ oleh transformasi yang bersesuaian dengan matriks $M = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(4, -9)$",
      "$(4, 9)$",
      "$(8, -9)$",
      "$(-4, -9)$",
      "$(7, -3)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Transformasi linear titik $P(x, y)$ oleh matriks $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dirumuskan dengan perkalian matriks kolom: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, sehingga $x' = ax + by$ dan $y' = cx + dy$.",
      "steps": "1. Tuliskan titik asal ke bentuk matriks kolom: $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.\n2. Lakukan perkalian matriks:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ -1 & 3 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$$\n$$x' = 2(3) + 1(-2) = 6 - 2 = 4$$\n$$y' = -1(3) + 3(-2) = -3 - 6 = -9$$\n3. Koordinat bayangannya adalah $A'(4, -9)$.\n4. Jadi, pilihan yang benar adalah A.",
      "pitfalls": "Salah aturan perkalian baris kali kolom atau keliru pada tanda negatif $-1(3) + 3(-2)$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Transformasi linear titik $P(x, y)$ oleh matriks $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dirumuskan dengan perkalian matriks kolom: $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, sehingga $x' = ax + by$ dan $y' = cx + dy$. **Tips:** Salah aturan perkalian baris kali kolom atau keliru pada tanda negatif $-1(3) + 3(-2)$."
  },
  {
    "id": "mat-geo-trans-matriks-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Matriks Pencerminan terhadap Sumbu-Y",
    "difficulty": "mudah",
    "statement": "Matriks transformasi $2 \\times 2$ yang bersesuaian dengan pencerminan terhadap sumbu-$Y$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pencerminan terhadap sumbu-$Y$ memetakan koordinat menurut aturan $x' = -x = -1(x) + 0(y)$ dan $y' = y = 0(x) + 1(y)$. Dengan demikian, matriks representasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
      "steps": "1. Analisis pemetaan titik $(x, y)$ saat dicerminkan terhadap sumbu-$Y$:\n$$x' = -x$$\n$$y' = y$$\n2. Tuliskan dalam bentuk sistem persamaan linear:\n$$x' = -1 \\cdot x + 0 \\cdot y$$\n$$y' = 0 \\cdot x + 1 \\cdot y$$\n3. Susun koefisiennya ke dalam bentuk matriks:\n$$M = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$\n4. Jadi, matriks yang bersesuaian adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (pilihan B).",
      "pitfalls": "Tertukar dengan matriks pencerminan terhadap sumbu-$X$, yaitu $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Pencerminan terhadap sumbu-$Y$ memetakan koordinat menurut aturan $x' = -x = -1(x) + 0(y)$ dan $y' = y = 0(x) + 1(y)$. Dengan demikian, matriks representasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. **Tips:** Tertukar dengan matriks pencerminan terhadap sumbu-$X$, yaitu $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$."
  },
  {
    "id": "mat-geo-trans-matriks-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Menentukan Titik Asal dari Bayangan Matriks",
    "difficulty": "mudah",
    "statement": "Titik $B(x, y)$ ditransformasikan oleh matriks diagonal $M = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ menghasilkan bayangan $B'(12, -8)$. Koordinat titik $B$ mula-mula adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(36, -16)$",
      "$(4, -4)$",
      "$(4, 4)$",
      "$(-4, 4)$",
      "$(9, -10)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Dari hubungan $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, diperoleh $x' = ax \\implies x = \\frac{x'}{a}$ dan $y' = dy \\implies y = \\frac{y'}{d}$.",
      "steps": "1. Tulis hubungan hasil kali matriks:\n$$x' = 3x = 12 \\implies x = \\frac{12}{3} = 4$$\n$$y' = 2y = -8 \\implies y = \\frac{-8}{2} = -4$$\n2. Diperoleh koordinat titik asal $B(4, -4)$.\n3. Jadi, jawabannya adalah $(4, -4)$ (pilihan B).",
      "pitfalls": "Mengalikan kembali titik bayangan dengan matriks $M$ alih-alih mengalikannya dengan matriks invers $M^{-1}$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Dari hubungan $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & 0 \\\\ 0 & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, diperoleh $x' = ax \\implies x = \\frac{x'}{a}$ dan $y' = dy \\implies y = \\frac{y'}{d}$. **Tips:** Mengalikan kembali titik bayangan dengan matriks $M$ alih-alih mengalikannya dengan matriks invers $M^{-1}$."
  },
  {
    "id": "mat-geo-trans-matriks-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Transformasi Titik oleh Matriks Geseran (Shear)",
    "difficulty": "mudah",
    "statement": "Bayangan titik $C(2, 5)$ oleh transformasi matriks geseran $M = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(17, 5)$",
      "$(7, 5)$",
      "$(15, 5)$",
      "$(17, 2)$",
      "$(2, 17)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Matriks shear horizontal $M = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ menggeser absis sebanding dengan nilai ordinatnya: $x' = x + ky$ sementara ordinat tetap: $y' = y$.",
      "steps": "1. Titik asal adalah $C(2, 5)$, dengan $x = 2$ dan $y = 5$.\n2. Lakukan perkalian matriks:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$$\n$$x' = 1(2) + 3(5) = 2 + 15 = 17$$\n$$y' = 0(2) + 1(5) = 5$$\n3. Titik bayangannya adalah $C'(17, 5)$.\n4. Jadi, pilihan yang benar adalah A.",
      "pitfalls": "Mengabaikan penambahan $3(5)$ pada absis atau salah menempatkan koordinat bayangan."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Matriks shear horizontal $M = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ menggeser absis sebanding dengan nilai ordinatnya: $x' = x + ky$ sementara ordinat tetap: $y' = y$. **Tips:** Mengabaikan penambahan $3(5)$ pada absis atau salah menempatkan koordinat bayangan."
  },
  {
    "id": "mat-geo-trans-matriks-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Matriks Rotasi Sudut Istimewa 90 Derajat",
    "difficulty": "mudah",
    "statement": "Matriks yang bersesuaian dengan transformasi rotasi sebesar $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Bentuk umum matriks rotasi berpusat di $O(0, 0)$ dengan sudut $\\theta$ adalah $R_\\theta = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix}$.",
      "steps": "1. Masukkan sudut $\\theta = 90^\\circ$:\n$$\\cos 90^\\circ = 0$$\n$$\\sin 90^\\circ = 1$$\n2. Substitusikan nilai-nilai trigonometri tersebut ke dalam bentuk umum:\n$$R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$\n3. Jadi, matriks yang bersesuaian adalah $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (pilihan C).",
      "pitfalls": "Tertukar dengan rotasi searah jarum jam ($-90^\\circ$ atau $270^\\circ$) yang memiliki matriks $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Bentuk umum matriks rotasi berpusat di $O(0, 0)$ dengan sudut $\\theta$ adalah $R_\\theta = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix}$."
  },
  {
    "id": "mat-geo-trans-matriks-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Transformasi Garis oleh Matriks Invertibel",
    "difficulty": "sedang",
    "statement": "Persamaan bayangan garis $g: 2x - y + 4 = 0$ oleh transformasi yang bersesuaian dengan matriks $M = \\begin{pmatrix} 1 & 2 \\\\ 1 & 3 \\end{pmatrix}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$7x - 5y + 4 = 0$",
      "$5x - 7y + 4 = 0$",
      "$7x + 5y - 4 = 0$",
      "$x - 3y + 4 = 0$",
      "$7x - 5y - 4 = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk mencari bayangan kurva oleh transformasi matriks $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, kita gunakan matriks invers $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = M^{-1}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ untuk mensubstitusikan variabel $x$ dan $y$ ke persamaan asal kurva.",
      "steps": "1. Cari invers matriks $M = \\begin{pmatrix} 1 & 2 \\\\ 1 & 3 \\end{pmatrix}$:\n$$\\det(M) = 1(3) - 2(1) = 1$$\n$$M^{-1} = \\frac{1}{1}\\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix}$$\n2. Nyatakan $x$ dan $y$ dalam $x'$ dan $y'$:\n$$x = 3x' - 2y'$$\n$$y = -x' + y'$$\n3. Substitusikan ke dalam persamaan garis $2x - y + 4 = 0$:\n$$2(3x' - 2y') - (-x' + y') + 4 = 0$$\n$$6x' - 4y' + x' - y' + 4 = 0$$\n$$7x' - 5y' + 4 = 0$$\n4. Diperoleh persamaan bayangan garis $7x - 5y + 4 = 0$ (pilihan A).",
      "pitfalls": "Langsung mensubstitusikan $x' = x + 2y$ dan $y' = x + 3y$ ke persamaan asal tanpa mencari invers matriksnya terlebih dahulu."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Untuk mencari bayangan kurva oleh transformasi matriks $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, kita gunakan matriks invers $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = M^{-1}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ untuk mensubstitusikan variabel $x$ dan $y$ ke persamaan asal kurva. **Tips:** Langsung mensubstitusikan $x' = x + 2y$ dan $y' = x + 3y$ ke persamaan asal tanpa mencari invers matriksnya terlebih dahulu."
  },
  {
    "id": "mat-geo-trans-matriks-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Menentukan Matriks Transformasi dari Pasangan Titik",
    "difficulty": "sedang",
    "statement": "Suatu transformasi matriks $M$ memetakan titik $(1, 0)$ ke titik $(3, -1)$ dan memetakan titik $(0, 1)$ ke titik $(2, 4)$. Bayangan titik $P(-2, 3)$ oleh transformasi matriks $M$ tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(0, 14)$",
      "$(0, 10)$",
      "$(-12, 14)$",
      "$(14, 0)$",
      "$(-6, 12)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Matriks transformasi linear berukuran $2 \\times 2$ memiliki kolom-kolom yang tepat sama dengan vektor bayangan dari vektor basis standar $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ dan $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$.",
      "steps": "1. Tentukan elemen matriks $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:\n$$M\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} a \\\\ c \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$$\n$$M\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} b \\\\ d \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$$\nSehingga diperoleh matriks $M = \\begin{pmatrix} 3 & 2 \\\\ -1 & 4 \\end{pmatrix}$.\n2. Hitung bayangan titik $P(-2, 3)$:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ -1 & 4 \\end{pmatrix}\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$\n$$x' = 3(-2) + 2(3) = -6 + 6 = 0$$\n$$y' = -1(-2) + 4(3) = 2 + 12 = 14$$\n3. Titik bayangannya adalah $P'(0, 14)$.\n4. Jadi, pilihan yang tepat adalah A.",
      "pitfalls": "Menyusun vektor bayangan sebagai baris bukannya kolom pada matriks $M$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Matriks transformasi linear berukuran $2 \\times 2$ memiliki kolom-kolom yang tepat sama dengan vektor bayangan dari vektor basis standar $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ dan $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$. **Tips:** Menyusun vektor bayangan sebagai baris bukannya kolom pada matriks $M$."
  },
  {
    "id": "mat-geo-trans-matriks-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Matriks Gabungan Transformasi Refleksi dan Rotasi",
    "difficulty": "sedang",
    "statement": "Suatu pencerminan terhadap sumbu-$X$ dilanjutkan dengan rotasi $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$. Matriks transformasi tunggal yang merepresentasikan gabungan kedua transformasi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Jika transformasi $T_1$ dilanjutkan dengan transformasi $T_2$, maka matriks transformasi gabungannya diperoleh dari perkalian matriks secara terbalik: $M = M_2 \\times M_1$.",
      "steps": "1. Matriks pencerminan terhadap sumbu-$X$ ($T_1$):\n$$M_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$\n2. Matriks rotasi $90^\\circ$ berlawanan arah jarum jam ($T_2$):\n$$M_2 = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$\n3. Kalikan matriks $M_2$ dengan $M_1$:\n$$M = M_2 \\times M_1 = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$\n$$M = \\begin{pmatrix} 0(1) + (-1)(0) & 0(0) + (-1)(-1) \\\\ 1(1) + 0(0) & 1(0) + 0(-1) \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$\n4. Jadi, matriks gabungannya adalah $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (pilihan B).",
      "pitfalls": "Membalik urutan perkalian menjadi $M_1 \\times M_2$ yang menghasilkan matriks $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Jika transformasi $T_1$ dilanjutkan dengan transformasi $T_2$, maka matriks transformasi gabungannya diperoleh dari perkalian matriks secara terbalik: $M = M_2 \\times M_1$. **Tips:** Membalik urutan perkalian menjadi $M_1 \\times M_2$ yang menghasilkan matriks $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$."
  },
  {
    "id": "mat-geo-trans-matriks-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Transformasi Parabola oleh Matriks",
    "difficulty": "sedang",
    "statement": "Kurva parabola dengan persamaan $y = x^2$ ditransformasikan oleh matriks $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Persamaan kurva bayangannya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$y = 4x^2$",
      "$y = 2x^2$",
      "$y = \\frac{1}{2}x^2$",
      "$y = \\frac{1}{4}x^2$",
      "$y = \\frac{1}{16}x^2$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Matriks peregangan horizontal $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$ menghasilkan $x' = 2x \\implies x = \\frac{x'}{2}$ dan $y' = y$. Masukkan hubungan ini ke fungsi kuadrat asal.",
      "steps": "1. Hubungkan koordinat awal dengan bayangan:\n$$x' = 2x \\iff x = \\frac{x'}{2}$$\n$$y' = y \\iff y = y'$$\n2. Substitusikan nilai $x$ dan $y$ ke persamaan parabola $y = x^2$:\n$$y' = \\left(\\frac{x'}{2}\\right)^2$$\n$$y' = \\frac{x'^2}{4} = \\frac{1}{4}x'^2$$\n3. Diperoleh persamaan bayangan parabola $y = \\frac{1}{4}x^2$ (pilihan D).",
      "pitfalls": "Langsung mengganti $x$ dengan $2x'$ sehingga memperoleh persamaan $y = 4x^2$."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Matriks peregangan horizontal $M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$ menghasilkan $x' = 2x \\implies x = \\frac{x'}{2}$ dan $y' = y$. Masukkan hubungan ini ke fungsi kuadrat asal."
  },
  {
    "id": "mat-geo-trans-matriks-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-matriks",
    "category": "Menentukan Nilai Parameter dari Matriks Transformasi",
    "difficulty": "sedang",
    "statement": "Titik $P(1, 2)$ ditransformasikan oleh matriks $M = \\begin{pmatrix} a & 2 \\\\ -1 & b \\end{pmatrix}$ menghasilkan titik bayangan $P'(7, 5)$. Nilai dari $a^2 + b^2$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$13$",
      "$18$",
      "$20$",
      "$25$",
      "$29$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan transformasi $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ menghasilkan sistem persamaan linear untuk menentukan nilai parameter matriks.",
      "steps": "1. Tuliskan perkalian matriks sesuai data soal:\n$$\\begin{pmatrix} 7 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} a & 2 \\\\ -1 & b \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$\n2. Selesaikan persamaan baris pertama:\n$$a(1) + 2(2) = 7 \\implies a + 4 = 7 \\implies a = 3$$\n3. Selesaikan persamaan baris kedua:\n$$-1(1) + b(2) = 5 \\implies -1 + 2b = 5 \\implies 2b = 6 \\implies b = 3$$\n4. Hitung nilai $a^2 + b^2$:\n$$a^2 + b^2 = 3^2 + 3^2 = 9 + 9 = 18$$\n5. Jadi, nilai $a^2 + b^2$ adalah $18$ (pilihan B).",
      "pitfalls": "Keliru saat memindahkan suku konstanta $-1$ ke ruas kanan persamaan kedua (menjadi $5 - 1 = 4$ bukannya $5 + 1 = 6$)."
    },
    "subTopicSlug": "matriks-transformasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Matriks Transformasi",
    "subTopic": "Matriks Transformasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Hubungan transformasi $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ menghasilkan sistem persamaan linear untuk menentukan nilai parameter matriks."
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
