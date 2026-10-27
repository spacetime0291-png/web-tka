/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Transformasi Geometri (mat-geo-trans)
 * Sub-Bab: Rotasi (mat-geo-trans-rotasi)
 * Slug: rotasi
 * Indikator: Perputaran sebesar sudut alpha terhadap titik pusat asal (0,0) atau titik sembarang (a,b).
 * 
 * Total Butir Soal: 10 (Mudah: 5, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-trans-rotasi";
  const subTopicSlug = "rotasi";
  const questions = [
  {
    "id": "mat-geo-trans-rotasi-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik terhadap Pusat O(0, 0) Sebesar +90 Derajat",
    "difficulty": "mudah",
    "statement": "Bayangan titik koordinat $A(4, -3)$ oleh rotasi yang berpusat di titik asal $O(0, 0)$ sejauh $90^\\circ$ berlawanan arah putaran jarum jam adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-3, -4)$",
      "$(3, 4)$",
      "$(-3, 4)$",
      "$(3, -4)$",
      "$(-4, -3)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rotasi titik $P(x, y)$ terhadap pusat $O(0, 0)$ sejauh $+90^\\circ$ menggunakan matriks rotasi $R_{90^\\circ} = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, yang memberikan hubungan $x' = -y$ dan $y' = x$.",
      "steps": "1. Titik asal adalah $A(4, -3)$, sehingga $x = 4$ dan $y = -3$.\n2. Hitung absis dan ordinat bayangan:\n$$x' = -y = -(-3) = 3$$\n$$y' = x = 4$$\n3. Diperoleh koordinat bayangan $A'(3, 4)$.\n4. Jadi, bayangan titik $A$ adalah $(3, 4)$ (pilihan B).",
      "pitfalls": "Lupa bahwa sudut rotasi positif berarti berlawanan arah jarum jam, atau keliru tanda minus sehingga mendapatkan $(-3, 4)$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Rotasi titik $P(x, y)$ terhadap pusat $O(0, 0)$ sejauh $+90^\\circ$ menggunakan matriks rotasi $R_{90^\\circ} = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, yang memberikan hubungan $x' = -y$ dan $y' = x$. **Tips:** Lupa bahwa sudut rotasi positif berarti berlawanan arah jarum jam, atau keliru tanda minus sehingga mendapatkan $(-3, 4)$."
  },
  {
    "id": "mat-geo-trans-rotasi-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik terhadap Pusat O(0, 0) Sebesar 180 Derajat",
    "difficulty": "mudah",
    "statement": "Titik $B(-5, 8)$ dirotasikan sebesar $180^\\circ$ dengan pusat titik asal $O(0, 0)$. Koordinat titik bayangannya $B'$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(5, -8)$",
      "$(-5, -8)$",
      "$(8, -5)$",
      "$(-8, 5)$",
      "$(5, 8)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Rotasi sebesar $180^\\circ$ (baik searah maupun berlawanan arah jarum jam) terhadap pusat $O(0, 0)$ membalik tanda kedua koordinat: $(x, y) \\to (-x, -y)$. Matriks rotasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
      "steps": "1. Titik asal adalah $B(-5, 8)$, dengan $x = -5$ dan $y = 8$.\n2. Terapkan rumus rotasi $180^\\circ$:\n$$x' = -x = -(-5) = 5$$\n$$y' = -y = -(8) = -8$$\n3. Diperoleh titik bayangan $B'(5, -8)$.\n4. Jadi, jawabannya adalah $(5, -8)$ (pilihan A).",
      "pitfalls": "Menukar letak absis dan ordinat layaknya rotasi $90^\\circ$ atau $270^\\circ$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Rotasi sebesar $180^\\circ$ (baik searah maupun berlawanan arah jarum jam) terhadap pusat $O(0, 0)$ membalik tanda kedua koordinat: $(x, y) \\to (-x, -y)$. Matriks rotasinya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. **Tips:** Menukar letak absis dan ordinat layaknya rotasi $90^\\circ$ atau $270^\\circ$."
  },
  {
    "id": "mat-geo-trans-rotasi-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik terhadap Pusat O(0, 0) Sebesar 270 Derajat",
    "difficulty": "mudah",
    "statement": "Bayangan titik $C(2, 6)$ oleh rotasi sebesar $270^\\circ$ berlawanan arah putaran jarum jam dengan pusat $O(0, 0)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-6, 2)$",
      "$(-2, -6)$",
      "$(6, 2)$",
      "$(6, -2)$",
      "$(-6, -2)$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rotasi $[O, 270^\\circ]$ berlawanan arah jarum jam ekuivalen dengan rotasi $[O, -90^\\circ]$ searah jarum jam. Matriks transformasinya adalah $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, sehingga $x' = y$ dan $y' = -x$.",
      "steps": "1. Diketahui titik $C(2, 6)$, dengan $x = 2$ dan $y = 6$.\n2. Hitung koordinat bayangan:\n$$x' = y = 6$$\n$$y' = -x = -(2) = -2$$\n3. Koordinat bayangan yang dihasilkan adalah $C'(6, -2)$.\n4. Jadi, hasil rotasinya adalah $(6, -2)$ (pilihan D).",
      "pitfalls": "Tertukar dengan rotasi $90^\\circ$ berlawanan arah jarum jam yang memiliki rumus $x' = -y$ dan $y' = x$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Rotasi $[O, 270^\\circ]$ berlawanan arah jarum jam ekuivalen dengan rotasi $[O, -90^\\circ]$ searah jarum jam. Matriks transformasinya adalah $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, sehingga $x' = y$ dan $y' = -x$. **Tips:** Tertukar dengan rotasi $90^\\circ$ berlawanan arah jarum jam yang memiliki rumus $x' = -y$ dan $y' = x$."
  },
  {
    "id": "mat-geo-trans-rotasi-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik Searah Putaran Jarum Jam -90 Derajat",
    "difficulty": "mudah",
    "statement": "Titik $D(-7, 1)$ dirotasikan sejauh $90^\\circ$ searah jarum jam terhadap titik asal $O(0, 0)$. Koordinat bayangan titik $D$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-1, -7)$",
      "$(1, -7)$",
      "$(-1, 7)$",
      "$(7, -1)$",
      "$(1, 7)$"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "Rotasi searah putaran jarum jam memiliki sudut negatif, yaitu $\\theta = -90^\\circ$. Hubungan bayangan terhadap titik awal adalah $x' = y$ dan $y' = -x$.",
      "steps": "1. Titik awal adalah $D(-7, 1)$, dengan $x = -7$ dan $y = 1$.\n2. Gunakan relasi rotasi $-90^\\circ$:\n$$x' = y = 1$$\n$$y' = -x = -(-7) = 7$$\n3. Koordinat bayangan adalah $D'(1, 7)$.\n4. Jadi, pilihan yang tepat adalah E.",
      "pitfalls": "Mengabaikan keterangan 'searah jarum jam' dan menganggap sudut rotasi $+90^\\circ$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Rotasi searah putaran jarum jam memiliki sudut negatif, yaitu $\\theta = -90^\\circ$. Hubungan bayangan terhadap titik awal adalah $x' = y$ dan $y' = -x$. **Tips:** Mengabaikan keterangan 'searah jarum jam' dan menganggap sudut rotasi $+90^\\circ$."
  },
  {
    "id": "mat-geo-trans-rotasi-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Menentukan Sudut Rotasi Titik terhadap Pusat O(0, 0)",
    "difficulty": "mudah",
    "statement": "Titik $P(3, 4)$ dirotasikan dengan pusat $O(0, 0)$ sebesar sudut $\\alpha$ ($0^\\circ \\le \\alpha \\le 360^\\circ$) berlawanan arah jarum jam sehingga menghasilkan bayangan $P'(-4, 3)$. Besar sudut $\\alpha$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$45^\\circ$",
      "$90^\\circ$",
      "$180^\\circ$",
      "$270^\\circ$",
      "$360^\\circ$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Matriks rotasi pusat $O(0,0)$ adalah $R_\\alpha = \\begin{pmatrix} \\cos \\alpha & -\\sin \\alpha \\\\ \\sin \\alpha & \\cos \\alpha \\end{pmatrix}$. Hubungan koordinat adalah $x' = x\\cos \\alpha - y\\sin \\alpha$ dan $y' = x\\sin \\alpha + y\\cos \\alpha$. Untuk pemetaan $(x, y) \\to (-y, x)$, diperoleh $\\cos \\alpha = 0$ dan $\\sin \\alpha = 1$, yang bersesuaian dengan sudut $\\alpha = 90^\\circ$.",
      "steps": "1. Diberikan $(x, y) = (3, 4)$ dan $(x', y') = (-4, 3)$.\n2. Perhatikan pola perubahan nilai:\n$$x' = -4 = -(4) = -y$$\n$$y' = 3 = x$$\n3. Pola $x' = -y$ dan $y' = x$ merupakan karakteristik dari matriks rotasi sejauh $90^\\circ$ berlawanan arah jarum jam.\n4. Jadi, besar sudut $\\alpha$ adalah $90^\\circ$ (pilihan B).",
      "pitfalls": "Keliru menyimpulkan sudut sebagai $270^\\circ$ yang memiliki pola berlawanan tanda: $x' = y$ dan $y' = -x$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah",
    "hint": "Matriks rotasi pusat $O(0,0)$ adalah $R_\\alpha = \\begin{pmatrix} \\cos \\alpha & -\\sin \\alpha \\\\ \\sin \\alpha & \\cos \\alpha \\end{pmatrix}$. Hubungan koordinat adalah $x' = x\\cos \\alpha - y\\sin \\alpha$ dan $y' = x\\sin \\alpha + y\\cos \\alpha$. Untuk pemetaan $(x, y) \\to (-y, x)$, diperoleh $\\cos \\alpha = 0$ dan $\\sin \\alpha = 1$, yang bersesuaian dengan sudut $\\alpha = 90^\\circ$. **Tips:** Keliru menyimpulkan sudut sebagai $270^\\circ$ yang memiliki pola berlawanan tanda: $x' = y$ dan $y' = -x$."
  },
  {
    "id": "mat-geo-trans-rotasi-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik terhadap Pusat P(a, b) Sebesar +90 Derajat",
    "difficulty": "sedang",
    "statement": "Titik $A(5, 2)$ dirotasikan sejauh $90^\\circ$ berlawanan arah putaran jarum jam dengan pusat titik $P(1, -1)$. Koordinat bayangan titik $A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(-2, 3)$",
      "$(2, -3)$",
      "$(-3, 2)$",
      "$(3, -2)$",
      "$(-2, -3)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Rotasi titik $(x, y)$ terhadap pusat $(a, b)$ sebesar $+90^\\circ$ berlawanan arah jarum jam memenuhi relasi matriks $\\begin{pmatrix} x' - a \\\\ y' - b \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix}$, yang menghasilkan $x' - a = -(y - b)$ dan $y' - b = x - a$.",
      "steps": "1. Identifikasi koordinat titik asal $x = 5, y = 2$ dan titik pusat $a = 1, b = -1$.\n2. Hitung selisih terhadap titik pusat:\n$$x - a = 5 - 1 = 4$$\n$$y - b = 2 - (-1) = 3$$\n3. Terapkan rumus rotasi $90^\\circ$:\n$$x' - 1 = -(3) = -3 \\implies x' = 1 - 3 = -2$$\n$$y' - (-1) = 4 \\implies y' + 1 = 4 \\implies y' = 3$$\n4. Diperoleh koordinat bayangan $A'(-2, 3)$.\n5. Jadi, koordinat bayangannya adalah $(-2, 3)$ (pilihan A).",
      "pitfalls": "Lupa memperhitungkan pergeseran koordinat terhadap titik pusat $(a, b)$ dan langsung mengalikan titik asal dengan matriks rotasi titik pusat $(0,0)$."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Rotasi titik $(x, y)$ terhadap pusat $(a, b)$ sebesar $+90^\\circ$ berlawanan arah jarum jam memenuhi relasi matriks $\\begin{pmatrix} x' - a \\\\ y' - b \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix}$, yang menghasilkan $x' - a = -(y - b)$ dan $y' - b = x - a$."
  },
  {
    "id": "mat-geo-trans-rotasi-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Garis Lurus terhadap Pusat O(0, 0) Sebesar +90 Derajat",
    "difficulty": "sedang",
    "statement": "Persamaan bayangan garis $g: 2x + 5y - 10 = 0$ oleh rotasi dengan pusat $O(0, 0)$ sebesar $90^\\circ$ berlawanan arah putaran jarum jam adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5x + 2y - 10 = 0$",
      "$5x - 2y + 10 = 0$",
      "$2x - 5y + 10 = 0$",
      "$5x - 2y - 10 = 0$",
      "$2x + 5y + 10 = 0$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Rotasi $[O, 90^\\circ]$ memetakan koordinat menurut $x' = -y \\iff y = -x'$ dan $y' = x \\iff x = y'$. Substitusikan relasi variabel lama dalam variabel baru ke persamaan garis asal.",
      "steps": "1. Nyatakan $x$ dan $y$ dalam bentuk bayangan $x'$ dan $y'$:\n$$x = y'$$\n$$y = -x'$$\n2. Substitusikan ke dalam persamaan garis $g: 2x + 5y - 10 = 0$:\n$$2(y') + 5(-x') - 10 = 0$$\n$$-5x' + 2y' - 10 = 0$$\n3. Kalikan kedua ruas dengan $-1$ agar koefisien $x$ bernilai positif:\n$$5x' - 2y' + 10 = 0$$\n4. Diperoleh persamaan garis bayangan $5x - 2y + 10 = 0$ (pilihan B).",
      "pitfalls": "Salah memasukkan substitusi variabel (misalnya tertukar antara $x = -y'$ dan $y = x'$)."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Rotasi $[O, 90^\\circ]$ memetakan koordinat menurut $x' = -y \\iff y = -x'$ dan $y' = x \\iff x = y'$. Substitusikan relasi variabel lama dalam variabel baru ke persamaan garis asal. **Tips:** Salah memasukkan substitusi variabel (misalnya tertukar antara $x = -y'$ dan $y = x'$)."
  },
  {
    "id": "mat-geo-trans-rotasi-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Titik terhadap Pusat P(a, b) Sebesar 180 Derajat",
    "difficulty": "sedang",
    "statement": "Titik $B(a, 3)$ dirotasikan sebesar $180^\\circ$ dengan pusat titik $P(2, -1)$ sehingga menghasilkan bayangan $B'(6, b)$. Nilai dari $a \\times b$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$-10$",
      "$-7$",
      "$7$",
      "$10$",
      "$12$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Rotasi $180^\\circ$ terhadap pusat $P(x_p, y_p)$ menjadikan titik $P$ sebagai titik tengah antara titik asal $(x, y)$ dan titik bayangan $(x', y')$, sehingga berlaku hubungan titik tengah: $x_p = \\frac{x + x'}{2}$ dan $y_p = \\frac{y + y'}{2}$.",
      "steps": "1. Terapkan rumus titik tengah pada absis dengan pusat $x_p = 2$:\n$$\\frac{a + 6}{2} = 2 \\implies a + 6 = 4 \\implies a = -2$$\n2. Terapkan rumus titik tengah pada ordinat dengan pusat $y_p = -1$:\n$$\\frac{3 + b}{2} = -1 \\implies 3 + b = -2 \\implies b = -5$$\n3. Hitung hasil kali $a \\times b$:\n$$a \\times b = (-2) \\times (-5) = 10$$\n4. Jadi, nilai $a \\times b$ adalah $10$ (pilihan D).",
      "pitfalls": "Lupa mengalikan 2 pada koordinat pusat saat menyelesaikan persamaan titik tengah."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Rotasi $180^\\circ$ terhadap pusat $P(x_p, y_p)$ menjadikan titik $P$ sebagai titik tengah antara titik asal $(x, y)$ dan titik bayangan $(x', y')$, sehingga berlaku hubungan titik tengah: $x_p = \\frac{x + x'}{2}$ dan $y_p = \\frac{y + y'}{2}$. **Tips:** Lupa mengalikan 2 pada koordinat pusat saat menyelesaikan persamaan titik tengah."
  },
  {
    "id": "mat-geo-trans-rotasi-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Komposisi Dua Rotasi Sepusat",
    "difficulty": "sedang",
    "statement": "Titik $C(4, 2)$ dirotasikan terhadap pusat $P(1, 2)$ sebesar $35^\\circ$, kemudian dilanjutkan dengan rotasi terhadap pusat $P(1, 2)$ yang sama sebesar $55^\\circ$ berlawanan arah putaran jarum jam. Koordinat bayangan akhir titik $C$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(1, 5)$",
      "$(1, -5)$",
      "$(-1, 5)$",
      "$(5, 1)$",
      "$(3, 5)$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua rotasi berurutan yang memiliki titik pusat yang sama bersesuaian dengan rotasi tunggal dengan titik pusat tersebut dan besar sudut total sama dengan jumlah kedua sudut rotasi: $\\theta_{\\text{total}} = \\theta_1 + \\theta_2$.",
      "steps": "1. Hitung sudut total rotasi:\n$$\\theta_{\\text{total}} = 35^\\circ + 55^\\circ = 90^\\circ$$\n2. Transformasi setara dengan rotasi tunggal $[P(1, 2), 90^\\circ]$ terhadap titik asal $C(4, 2)$:\n$$x - a = 4 - 1 = 3$$\n$$y - b = 2 - 2 = 0$$\n3. Terapkan rumus rotasi $90^\\circ$ berpusat di $(a, b)$:\n$$x' - a = -(y - b) = -(0) = 0 \\implies x' = a = 1$$\n$$y' - b = x - a = 3 \\implies y' = b + 3 = 2 + 3 = 5$$\n4. Diperoleh bayangan akhir $C'(1, 5)$.\n5. Jadi, koordinat bayangan akhir titik $C$ adalah $(1, 5)$ (pilihan A).",
      "pitfalls": "Menghitung rotasi sudut bukan istimewa $35^\\circ$ satu per satu yang sangat rumit, alih-alih memanfaatkan sifat aditif rotasi sepusat."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Dua rotasi berurutan yang memiliki titik pusat yang sama bersesuaian dengan rotasi tunggal dengan titik pusat tersebut dan besar sudut total sama dengan jumlah kedua sudut rotasi: $\\theta_{\\text{total}} = \\theta_1 + \\theta_2$."
  },
  {
    "id": "mat-geo-trans-rotasi-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-trans",
    "subTopicId": "mat-geo-trans-rotasi",
    "category": "Rotasi Lingkaran terhadap Pusat O(0, 0)",
    "difficulty": "sedang",
    "statement": "Lingkaran $L: (x - 4)^2 + (y - 1)^2 = 9$ dirotasikan terhadap pusat $O(0, 0)$ sebesar $270^\\circ$ searah jarum jam. Persamaan bayangan lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 1)^2 + (y + 4)^2 = 9$",
      "$(x - 4)^2 + (y - 1)^2 = 9$",
      "$(x + 1)^2 + (y - 4)^2 = 9$",
      "$(x + 4)^2 + (y + 1)^2 = 9$",
      "$(x - 1)^2 + (y - 4)^2 = 9$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Rotasi sebesar $270^\\circ$ searah jarum jam memiliki sudut $\\theta = -270^\\circ$, yang secara posisi sudut setara dengan rotasi $+90^\\circ$ berlawanan arah jarum jam $(-270^\\circ + 360^\\circ = +90^\\circ)$. Rotasi mempertahankan jari-jari lingkaran ($r' = r$), sehingga cukup merotasikan titik pusat lingkaran.",
      "steps": "1. Dari persamaan awal $(x - 4)^2 + (y - 1)^2 = 9$, diperoleh pusat lingkaran awal $P(4, 1)$ dan $r = 3$.\n2. Sudut rotasi $-270^\\circ$ ekuivalen dengan $+90^\\circ$:\n$$x_p' = -y_p = -1$$\n$$y_p' = x_p = 4$$\nPusat lingkaran bayangan adalah $P'(-1, 4)$.\n3. Bentuk persamaan lingkaran bayangan dengan pusat $(-1, 4)$ dan jari-jari $r = 3$:\n$$(x - (-1))^2 + (y - 4)^2 = 3^2$$\n$$(x + 1)^2 + (y - 4)^2 = 9$$\n4. Jadi, persamaan lingkaran bayangan adalah $(x + 1)^2 + (y - 4)^2 = 9$ (pilihan C).",
      "pitfalls": "Salah mengonversi rotasi searah jarum jam menjadi sudut positif, atau salah memasukkan tanda pusat lingkaran $(-1, 4)$ ke bentuk baku persamaan lingkaran."
    },
    "subTopicSlug": "rotasi",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Rotasi",
    "subTopic": "Rotasi",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang",
    "hint": "Rotasi sebesar $270^\\circ$ searah jarum jam memiliki sudut $\\theta = -270^\\circ$, yang secara posisi sudut setara dengan rotasi $+90^\\circ$ berlawanan arah jarum jam $(-270^\\circ + 360^\\circ = +90^\\circ)$. Rotasi mempertahankan jari-jari lingkaran ($r' = r$), sehingga cukup merotasikan titik pusat lingkaran."
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
