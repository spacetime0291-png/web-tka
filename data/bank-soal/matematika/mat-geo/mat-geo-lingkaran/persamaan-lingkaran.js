/**
 * Bank Soal TKA: Matematika Lanjut (TKA) - Geometri dan Pengukuran
 * Bab Kecil: Lingkaran (mat-geo-lingkaran)
 * Sub-Bab: Persamaan Lingkaran (mat-geo-lingkaran-persamaan)
 * Slug: persamaan-lingkaran
 * Indikator: Persamaan lingkaran berpusat (0,0), (a,b), dan bentuk umum x^2 + y^2 + Ax + By + C = 0.
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "mat-geo-lingkaran-persamaan";
  const subTopicSlug = "persamaan-lingkaran";
  const questions = [
  {
    "id": "mat-geo-lingkaran-persamaan-001",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Persamaan Lingkaran Berpusat di Titik Asal",
    "difficulty": "mudah",
    "statement": "Persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dan memiliki jari-jari $r = 5$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x^2 + y^2 = 25$",
      "$x^2 + y^2 = 5$",
      "$x^2 + y^2 = 10$",
      "$(x - 5)^2 + (y - 5)^2 = 25$",
      "$x^2 + y^2 = 50$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk baku persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dengan jari-jari $r$ adalah $x^2 + y^2 = r^2$.",
      "steps": "1. Identifikasi titik pusat: $(a, b) = (0, 0)$.\n2. Identifikasi jari-jari: $r = 5$.\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 5^2 = 25$$\n4. Masukkan ke rumus persamaan lingkaran berpusat di $(0, 0)$:\n$$x^2 + y^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $x^2 + y^2 = 25$ (pilihan A).",
      "pitfalls": "Lupa menguadratkan jari-jari pada ruas kanan persamaan sehingga memilih $x^2 + y^2 = 5$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-002",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Persamaan Lingkaran Bentuk Baku Pusat (a, b)",
    "difficulty": "mudah",
    "statement": "Persamaan lingkaran yang berpusat di titik $(3, -2)$ dan memiliki panjang jari-jari $r = 4$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 3)^2 + (y + 2)^2 = 16$",
      "$(x + 3)^2 + (y - 2)^2 = 16$",
      "$(x - 3)^2 + (y - 2)^2 = 16$",
      "$(x - 3)^2 + (y + 2)^2 = 4$",
      "$(x + 3)^2 + (y + 2)^2 = 8$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Persamaan lingkaran dengan pusat $(a, b)$ dan jari-jari $r$ dirumuskan dalam bentuk baku $(x - a)^2 + (y - b)^2 = r^2$.",
      "steps": "1. Identifikasi koordinat pusat: $a = 3$ dan $b = -2$.\n2. Masukkan ke dalam bentuk kuadrat sempurna:\n$$(x - 3)^2 + (y - (-2))^2 = r^2$$\n$$(x - 3)^2 + (y + 2)^2 = r^2$$\n3. Kuadratkan nilai jari-jari $r = 4$:\n$$r^2 = 4^2 = 16$$\n4. Susun persamaan lengkapnya:\n$$(x - 3)^2 + (y + 2)^2 = 16$$\n5. Jadi, persamaan lingkarannya adalah $(x - 3)^2 + (y + 2)^2 = 16$ (pilihan A).",
      "pitfalls": "Kekeliruan tanda pada suku ordinat $(y - (-2))$ yang sering salah ditulis menjadi $(y - 2)$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-003",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Pusat dan Jari-Jari Bentuk Umum Lingkaran",
    "difficulty": "mudah",
    "statement": "Titik pusat dan panjang jari-jari dari lingkaran dengan persamaan umum $x^2 + y^2 - 6x + 8y - 11 = 0$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Pusat $(3, -4)$ dan jari-jari $6$",
      "Pusat $(-3, 4)$ dan jari-jari $6$",
      "Pusat $(3, -4)$ dan jari-jari $\\sqrt{11}$",
      "Pusat $(6, -8)$ dan jari-jari $6$",
      "Pusat $(3, -4)$ dan jari-jari $36$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Bentuk umum lingkaran $x^2 + y^2 + Ax + By + C = 0$ memiliki pusat pada titik $\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$ dan jari-jari $r = \\sqrt{\\left(-\\frac{A}{2}\\right)^2 + \\left(-\\frac{B}{2}\\right)^2 - C}$.",
      "steps": "1. Identifikasi koefisien persamaan: $A = -6$, $B = 8$, dan $C = -11$.\n2. Tentukan koordinat titik pusat:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{-6}{2}, -\\frac{8}{2}\\right) = (3, -4)$$\n3. Hitung panjang jari-jari $r$:\n$$r = \\sqrt{3^2 + (-4)^2 - (-11)}$$\n$$r = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$\n4. Jadi, pusat lingkaran berada pada titik $(3, -4)$ dan panjang jari-jarinya adalah 6 (pilihan A).",
      "pitfalls": "Lupa membagi dua koefisien linier saat menentukan pusat atau keliru tanda minus pada $-C$, yaitu $-(-11) = +11$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-004",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Persamaan Lingkaran Pusat Asal Melalui Titik",
    "difficulty": "mudah",
    "statement": "Persamaan lingkaran yang berpusat di titik asal $O(0, 0)$ dan melalui titik koordinat $P(3, -4)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x^2 + y^2 = 25$",
      "$x^2 + y^2 = 5$",
      "$x^2 + y^2 = 7$",
      "$(x - 3)^2 + (y + 4)^2 = 25$",
      "$x^2 + y^2 = 49$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jari-jari lingkaran berpusat di $O(0, 0)$ yang melalui titik $(x_1, y_1)$ sama dengan jarak titik tersebut ke titik asal, dengan $r^2 = x_1^2 + y_1^2$.",
      "steps": "1. Substitusikan titik $P(3, -4)$ ke dalam bentuk $r^2 = x^2 + y^2$:\n$$r^2 = 3^2 + (-4)^2$$\n$$r^2 = 9 + 16 = 25$$\n2. Masukkan nilai $r^2 = 25$ ke bentuk persamaan lingkaran pusat $(0, 0)$:\n$$x^2 + y^2 = 25$$\n3. Jadi, persamaan lingkarannya adalah $x^2 + y^2 = 25$ (pilihan A).",
      "pitfalls": "Menuliskan persamaan dengan pusat di titik $P$ alih-alih di titik asal $O(0,0)$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-005",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Lingkaran Menyinggung Sumbu Koordinat",
    "difficulty": "mudah",
    "statement": "Persamaan lingkaran yang berpusat di titik $(2, 5)$ dan menyinggung sumbu-$X$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 2)^2 + (y - 5)^2 = 25$",
      "$(x - 2)^2 + (y - 5)^2 = 4$",
      "$(x + 2)^2 + (y + 5)^2 = 25$",
      "$(x - 2)^2 + (y - 5)^2 = 5$",
      "$(x - 2)^2 + (y - 5)^2 = 29$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Sebuah lingkaran dengan pusat $(a, b)$ yang menyinggung sumbu-$X$ memiliki panjang jari-jari yang sama dengan nilai mutlak dari ordinat pusatnya: $r = |b|$.",
      "steps": "1. Pusat lingkaran adalah $(a, b) = (2, 5)$.\n2. Karena lingkaran menyinggung sumbu-$X$, maka jarak tegak lurus ke sumbu-$X$ adalah nilai ordinat pusat: $r = |5| = 5$.\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 5^2 = 25$$\n4. Susun persamaan lingkaran dalam bentuk baku:\n$$(x - 2)^2 + (y - 5)^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $(x - 2)^2 + (y - 5)^2 = 25$ (pilihan A).",
      "pitfalls": "Tertukar mengambil nilai absis sebagai jari-jari ($r = |a| = 2$ yang seharusnya untuk kondisi menyinggung sumbu-$Y$)."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-006",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Persamaan Lingkaran Berdasarkan Diameter",
    "difficulty": "sedang",
    "statement": "Sebuah lingkaran memiliki garis tengah (diameter) yang menghubungkan titik $A(-2, 1)$ dan titik $B(4, 9)$. Persamaan lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 1)^2 + (y - 5)^2 = 25$",
      "$(x + 1)^2 + (y + 5)^2 = 25$",
      "$(x - 1)^2 + (y - 5)^2 = 100$",
      "$(x - 2)^2 + (y - 4)^2 = 25$",
      "$(x - 1)^2 + (y - 5)^2 = 50$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Titik pusat lingkaran yang memiliki diameter dengan ujung $A(x_1, y_1)$ dan $B(x_2, y_2)$ adalah titik tengah segmen garis $AB$, dan jari-jarinya adalah setengah dari panjang segmen garis $AB$.",
      "steps": "1. Tentukan titik pusat $(a, b)$ sebagai titik tengah $AB$:\n$$a = \\frac{-2 + 4}{2} = \\frac{2}{2} = 1$$\n$$b = \\frac{1 + 9}{2} = \\frac{10}{2} = 5$$\nSehingga pusat lingkaran adalah $(1, 5)$.\n2. Hitung panjang diameter $d = |AB|$:\n$$d = \\sqrt{(4 - (-2))^2 + (9 - 1)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Tentukan jari-jari dan kuadrat jari-jarinya:\n$$r = \\frac{d}{2} = \\frac{10}{2} = 5 \\implies r^2 = 25$$\n4. Susun persamaan lingkaran bentuk baku:\n$$(x - 1)^2 + (y - 5)^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $(x - 1)^2 + (y - 5)^2 = 25$ (pilihan A).",
      "pitfalls": "Lupa membagi dua panjang diameter saat menghitung jari-jari sehingga memasukkan $r^2 = 100$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-007",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Lingkaran Menyinggung Garis Linier",
    "difficulty": "sedang",
    "statement": "Persamaan lingkaran yang berpusat di titik $(1, -2)$ dan menyinggung garis lurus $3x - 4y + 9 = 0$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x - 1)^2 + (y + 2)^2 = 16$",
      "$(x - 1)^2 + (y + 2)^2 = 4$",
      "$(x + 1)^2 + (y - 2)^2 = 16$",
      "$(x - 1)^2 + (y + 2)^2 = 20$",
      "$(x - 1)^2 + (y + 2)^2 = 25$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jari-jari lingkaran yang menyinggung garis $Ax + By + C = 0$ sama dengan jarak tegak lurus dari titik pusat $(x_0, y_0)$ ke garis tersebut: $r = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
      "steps": "1. Hitung jari-jari $r$ dari titik pusat $(1, -2)$ ke garis $3x - 4y + 9 = 0$:\n$$r = \\frac{|3(1) - 4(-2) + 9|}{\\sqrt{3^2 + (-4)^2}}$$\n2. Selesaikan pembilang dan penyebut:\n$$r = \\frac{|3 + 8 + 9|}{\\sqrt{9 + 16}} = \\frac{|20|}{\\sqrt{25}} = \\frac{20}{5} = 4$$\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 4^2 = 16$$\n4. Susun persamaan lingkaran baku dengan pusat $(1, -2)$:\n$$(x - 1)^2 + (y - (-2))^2 = 16 \\implies (x - 1)^2 + (y + 2)^2 = 16$$\n5. Jadi, persamaan lingkarannya adalah $(x - 1)^2 + (y + 2)^2 = 16$ (pilihan A).",
      "pitfalls": "Kesalahan tanda saat menghitung jarak titik ke garis pada suku $-4(-2) = 8$, atau lupa menguadratkan nilai $r=4$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-008",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Lingkaran Konsentris dengan Luas Berlipat",
    "difficulty": "sedang",
    "statement": "Persamaan lingkaran yang sepusat (konsentris) dengan lingkaran $x^2 + y^2 + 4x - 6y - 12 = 0$ tetapi memiliki luas dua kali lipat dari luas lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$(x + 2)^2 + (y - 3)^2 = 50$",
      "$(x - 2)^2 + (y + 3)^2 = 50$",
      "$(x + 2)^2 + (y - 3)^2 = 100$",
      "$(x + 2)^2 + (y - 3)^2 = 25$",
      "$(x - 2)^2 + (y + 3)^2 = 25$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Dua lingkaran konsentris memiliki koordinat titik pusat yang identik. Karena luas lingkaran sebanding dengan kuadrat jari-jarinya ($L = \\pi r^2$), maka luas yang berlipat ganda berarti kuadrat jari-jari barunya menjadi dua kali kuadrat jari-jari awal.",
      "steps": "1. Tentukan titik pusat dan jari-jari lingkaran awal:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{4}{2}, -\\frac{-6}{2}\\right) = (-2, 3)$$\n$$r_1^2 = (-2)^2 + 3^2 - (-12) = 4 + 9 + 12 = 25$$\n2. Hitung kuadrat jari-jari lingkaran baru yang memiliki luas dua kali lipat:\n$$L_2 = 2L_1 \\implies \\pi r_2^2 = 2(\\pi r_1^2) \\implies r_2^2 = 2r_1^2$$\n$$r_2^2 = 2(25) = 50$$\n3. Susun persamaan lingkaran konsentris baru:\n$$(x - (-2))^2 + (y - 3)^2 = r_2^2$$\n$$(x + 2)^2 + (y - 3)^2 = 50$$\n4. Jadi, persamaan lingkarannya adalah $(x + 2)^2 + (y - 3)^2 = 50$ (pilihan A).",
      "pitfalls": "Mengalikan jari-jari dengan 2 alih-alih mengalikan luasnya dengan 2, yang keliru menghasilkan $r_2 = 10$ dan $r_2^2 = 100$."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-009",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Lingkaran Melalui Titik Siku-Siku Tiga Titik",
    "difficulty": "sedang",
    "statement": "Persamaan lingkaran yang melalui titik asal $O(0, 0)$, titik $A(4, 0)$, dan titik $B(0, 6)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$x^2 + y^2 - 4x - 6y = 0$",
      "$x^2 + y^2 + 4x + 6y = 0$",
      "$x^2 + y^2 - 2x - 3y = 0$",
      "$x^2 + y^2 - 4x - 6y + 13 = 0$",
      "$x^2 + y^2 - 8x - 12y = 0$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Segitiga $OAB$ merupakan segitiga siku-siku di titik $O(0, 0)$. Berdasarkan teorema Thales, hipotenusa $AB$ bertindak sebagai diameter dari lingkaran luar segitiga tersebut.",
      "steps": "1. Karena sudut pada titik asal siku-siku ($90^\\circ$), maka segmen $AB$ adalah garis tengah lingkaran.\n2. Tentukan titik pusat sebagai titik tengah $AB$:\n$$a = \\frac{4 + 0}{2} = 2, \\quad b = \\frac{0 + 6}{2} = 3 \\implies \\text{Pusat } (2, 3)$$\n3. Hitung kuadrat jari-jari menggunakan jarak pusat $(2, 3)$ ke titik $(0, 0)$:\n$$r^2 = (2 - 0)^2 + (3 - 0)^2 = 4 + 9 = 13$$\n4. Susun persamaan lingkaran:\n$$(x - 2)^2 + (y - 3)^2 = 13$$\n5. Jabarkan ke bentuk umum:\n$$x^2 - 4x + 4 + y^2 - 6y + 9 = 13$$\n$$x^2 + y^2 - 4x - 6y = 0$$\n6. Jadi, persamaan lingkarannya adalah $x^2 + y^2 - 4x - 6y = 0$ (pilihan A).",
      "pitfalls": "Menyertakan konstanta $+13$ pada bentuk umum persamaan lingkaran padahal konstanta $4 + 9 = 13$ habis saling mengurangi dengan $r^2 = 13$ di ruas kanan."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mat-geo-lingkaran-persamaan-010",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Lingkaran Kuadran Tertentu Menyinggung Sumbu-Sumbu",
    "difficulty": "sedang",
    "statement": "Sebuah lingkaran berada di kuadran IV, menyinggung sumbu-$X$ dan sumbu-$Y$, serta melalui titik $(2, -1)$. Nilai jari-jari lingkaran terkecil yang memenuhi kondisi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1",
      "2",
      "3",
      "5",
      "$\\sqrt{5}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Lingkaran di kuadran IV yang menyinggung kedua sumbu koordinat memiliki titik pusat $(r, -r)$ dengan panjang jari-jari $r > 0$, sehingga persamaannya adalah $(x - r)^2 + (y + r)^2 = r^2$.",
      "steps": "1. Susun persamaan lingkaran dengan pusat $(r, -r)$:\n$$(x - r)^2 + (y + r)^2 = r^2$$\n2. Substitusikan koordinat titik lalui $(2, -1)$:\n$$(2 - r)^2 + (-1 + r)^2 = r^2$$\n3. Jabarkan bentuk kuadrat aljabar:\n$$(4 - 4r + r^2) + (1 - 2r + r^2) = r^2$$\n$$2r^2 - 6r + 5 = r^2$$\n4. Pindahkan semua suku ke ruas kiri membentuk persamaan kuadrat:\n$$r^2 - 6r + 5 = 0$$\n5. Faktorkan persamaan kuadrat:\n$$(r - 1)(r - 5) = 0 \\implies r = 1 \\text{ atau } r = 5$$\n6. Nilai jari-jari terkecil yang memenuhi adalah $r = 1$.\n7. Jadi, jari-jari terkecilnya adalah 1 (pilihan A).",
      "pitfalls": "Memilih nilai jari-jari terbesar $r = 5$ padahal yang diminta secara spesifik adalah jari-jari lingkaran terkecil."
    },
    "subTopicSlug": "persamaan-lingkaran",
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "mudah-mtk-11",
    "subject": "MATEMATIKA",
    "pillarId": "matematika",
    "chapterId": "mat-geo",
    "subTopicId": "mat-geo-lingkaran-persamaan",
    "category": "Jari-Jari Lingkaran Bentuk Umum",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah lingkaran memiliki persamaan bentuk umum $x^2 + y^2 - 6x + 8y - 11 = 0$. Panjang jari-jari ($r$) dari lingkaran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Jari-Jari Lingkaran Bentuk Umum $x^2 + y^2 + Ax + By + C = 0$:</strong><br>\n          Titik pusat $(a, b) = \\left(-\\frac{1}{2}A, -\\frac{1}{2}B\\right)$<br>\n          Jari-jari: $r = \\sqrt{a^2 + b^2 - C}$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Hitung koordinat pusat:\n            $$a = -\\frac{1}{2}(-6) = 3, \\quad b = -\\frac{1}{2}(8) = -4$$\n          </li>\n          <li>Substitusi ke rumus jari-jari ($C = -11$):\n            $$r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$\n          </li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan tanda negatif pada $C = -11$. Mengurangkan nilai negatif menghasilkan penjumlahan: $-(-11) = +11$.\n        </div>\n      "
    },
    "bab": "Geometri dan Pengukuran",
    "subBab": "Persamaan Lingkaran",
    "subTopic": "Persamaan Lingkaran",
    "chapterTitle": "Geometri dan Pengukuran",
    "subChapterId": "mat-geo-lingkaran",
    "subTopicSlug": "persamaan-lingkaran"
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
