/**
 * Batch Task: TASK_mat-geo-lingkaran-persamaan_MEDIUM
 * SubTopic: Persamaan Lingkaran (mat-geo-lingkaran-persamaan)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-geo-lingkaran-persamaan-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Persamaan Lingkaran Berdasarkan Diameter",
    difficulty: "sedang",
    statement: "Sebuah lingkaran memiliki garis tengah (diameter) yang menghubungkan titik $A(-2, 1)$ dan titik $B(4, 9)$. Persamaan lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 1)^2 + (y - 5)^2 = 25$",
      "$(x + 1)^2 + (y + 5)^2 = 25$",
      "$(x - 1)^2 + (y - 5)^2 = 100$",
      "$(x - 2)^2 + (y - 4)^2 = 25$",
      "$(x - 1)^2 + (y - 5)^2 = 50$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik pusat lingkaran yang memiliki diameter dengan ujung $A(x_1, y_1)$ dan $B(x_2, y_2)$ adalah titik tengah segmen garis $AB$, dan jari-jarinya adalah setengah dari panjang segmen garis $AB$.",
      steps: "1. Tentukan titik pusat $(a, b)$ sebagai titik tengah $AB$:\n$$a = \\frac{-2 + 4}{2} = \\frac{2}{2} = 1$$\n$$b = \\frac{1 + 9}{2} = \\frac{10}{2} = 5$$\nSehingga pusat lingkaran adalah $(1, 5)$.\n2. Hitung panjang diameter $d = |AB|$:\n$$d = \\sqrt{(4 - (-2))^2 + (9 - 1)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n3. Tentukan jari-jari dan kuadrat jari-jarinya:\n$$r = \\frac{d}{2} = \\frac{10}{2} = 5 \\implies r^2 = 25$$\n4. Susun persamaan lingkaran bentuk baku:\n$$(x - 1)^2 + (y - 5)^2 = 25$$\n5. Jadi, persamaan lingkarannya adalah $(x - 1)^2 + (y - 5)^2 = 25$ (pilihan A).",
      pitfalls: "Lupa membagi dua panjang diameter saat menghitung jari-jari sehingga memasukkan $r^2 = 100$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Lingkaran Menyinggung Garis Linier",
    difficulty: "sedang",
    statement: "Persamaan lingkaran yang berpusat di titik $(1, -2)$ dan menyinggung garis lurus $3x - 4y + 9 = 0$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x - 1)^2 + (y + 2)^2 = 16$",
      "$(x - 1)^2 + (y + 2)^2 = 4$",
      "$(x + 1)^2 + (y - 2)^2 = 16$",
      "$(x - 1)^2 + (y + 2)^2 = 20$",
      "$(x - 1)^2 + (y + 2)^2 = 25$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Jari-jari lingkaran yang menyinggung garis $Ax + By + C = 0$ sama dengan jarak tegak lurus dari titik pusat $(x_0, y_0)$ ke garis tersebut: $r = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
      steps: "1. Hitung jari-jari $r$ dari titik pusat $(1, -2)$ ke garis $3x - 4y + 9 = 0$:\n$$r = \\frac{|3(1) - 4(-2) + 9|}{\\sqrt{3^2 + (-4)^2}}$$\n2. Selesaikan pembilang dan penyebut:\n$$r = \\frac{|3 + 8 + 9|}{\\sqrt{9 + 16}} = \\frac{|20|}{\\sqrt{25}} = \\frac{20}{5} = 4$$\n3. Kuadratkan nilai jari-jari:\n$$r^2 = 4^2 = 16$$\n4. Susun persamaan lingkaran baku dengan pusat $(1, -2)$:\n$$(x - 1)^2 + (y - (-2))^2 = 16 \\implies (x - 1)^2 + (y + 2)^2 = 16$$\n5. Jadi, persamaan lingkarannya adalah $(x - 1)^2 + (y + 2)^2 = 16$ (pilihan A).",
      pitfalls: "Kesalahan tanda saat menghitung jarak titik ke garis pada suku $-4(-2) = 8$, atau lupa menguadratkan nilai $r=4$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Lingkaran Konsentris dengan Luas Berlipat",
    difficulty: "sedang",
    statement: "Persamaan lingkaran yang sepusat (konsentris) dengan lingkaran $x^2 + y^2 + 4x - 6y - 12 = 0$ tetapi memiliki luas dua kali lipat dari luas lingkaran tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(x + 2)^2 + (y - 3)^2 = 50$",
      "$(x - 2)^2 + (y + 3)^2 = 50$",
      "$(x + 2)^2 + (y - 3)^2 = 100$",
      "$(x + 2)^2 + (y - 3)^2 = 25$",
      "$(x - 2)^2 + (y + 3)^2 = 25$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Dua lingkaran konsentris memiliki koordinat titik pusat yang identik. Karena luas lingkaran sebanding dengan kuadrat jari-jarinya ($L = \\pi r^2$), maka luas yang berlipat ganda berarti kuadrat jari-jari barunya menjadi dua kali kuadrat jari-jari awal.",
      steps: "1. Tentukan titik pusat dan jari-jari lingkaran awal:\n$$\\text{Pusat } (a, b) = \\left(-\\frac{4}{2}, -\\frac{-6}{2}\\right) = (-2, 3)$$\n$$r_1^2 = (-2)^2 + 3^2 - (-12) = 4 + 9 + 12 = 25$$\n2. Hitung kuadrat jari-jari lingkaran baru yang memiliki luas dua kali lipat:\n$$L_2 = 2L_1 \\implies \\pi r_2^2 = 2(\\pi r_1^2) \\implies r_2^2 = 2r_1^2$$\n$$r_2^2 = 2(25) = 50$$\n3. Susun persamaan lingkaran konsentris baru:\n$$(x - (-2))^2 + (y - 3)^2 = r_2^2$$\n$$(x + 2)^2 + (y - 3)^2 = 50$$\n4. Jadi, persamaan lingkarannya adalah $(x + 2)^2 + (y - 3)^2 = 50$ (pilihan A).",
      pitfalls: "Mengalikan jari-jari dengan 2 alih-alih mengalikan luasnya dengan 2, yang keliru menghasilkan $r_2 = 10$ dan $r_2^2 = 100$."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Lingkaran Melalui Titik Siku-Siku Tiga Titik",
    difficulty: "sedang",
    statement: "Persamaan lingkaran yang melalui titik asal $O(0, 0)$, titik $A(4, 0)$, dan titik $B(0, 6)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x^2 + y^2 - 4x - 6y = 0$",
      "$x^2 + y^2 + 4x + 6y = 0$",
      "$x^2 + y^2 - 2x - 3y = 0$",
      "$x^2 + y^2 - 4x - 6y + 13 = 0$",
      "$x^2 + y^2 - 8x - 12y = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Segitiga $OAB$ merupakan segitiga siku-siku di titik $O(0, 0)$. Berdasarkan teorema Thales, hipotenusa $AB$ bertindak sebagai diameter dari lingkaran luar segitiga tersebut.",
      steps: "1. Karena sudut pada titik asal siku-siku ($90^\\circ$), maka segmen $AB$ adalah garis tengah lingkaran.\n2. Tentukan titik pusat sebagai titik tengah $AB$:\n$$a = \\frac{4 + 0}{2} = 2, \\quad b = \\frac{0 + 6}{2} = 3 \\implies \\text{Pusat } (2, 3)$$\n3. Hitung kuadrat jari-jari menggunakan jarak pusat $(2, 3)$ ke titik $(0, 0)$:\n$$r^2 = (2 - 0)^2 + (3 - 0)^2 = 4 + 9 = 13$$\n4. Susun persamaan lingkaran:\n$$(x - 2)^2 + (y - 3)^2 = 13$$\n5. Jabarkan ke bentuk umum:\n$$x^2 - 4x + 4 + y^2 - 6y + 9 = 13$$\n$$x^2 + y^2 - 4x - 6y = 0$$\n6. Jadi, persamaan lingkarannya adalah $x^2 + y^2 - 4x - 6y = 0$ (pilihan A).",
      pitfalls: "Menyertakan konstanta $+13$ pada bentuk umum persamaan lingkaran padahal konstanta $4 + 9 = 13$ habis saling mengurangi dengan $r^2 = 13$ di ruas kanan."
    }
  },
  {
    id: "mat-geo-lingkaran-persamaan-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-geo",
    subChapterId: "mat-geo-lingkaran",
    subTopicId: "mat-geo-lingkaran-persamaan",
    category: "Lingkaran Kuadran Tertentu Menyinggung Sumbu-Sumbu",
    difficulty: "sedang",
    statement: "Sebuah lingkaran berada di kuadran IV, menyinggung sumbu-$X$ dan sumbu-$Y$, serta melalui titik $(2, -1)$. Nilai jari-jari lingkaran terkecil yang memenuhi kondisi tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "5",
      "$\\sqrt{5}$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Lingkaran di kuadran IV yang menyinggung kedua sumbu koordinat memiliki titik pusat $(r, -r)$ dengan panjang jari-jari $r > 0$, sehingga persamaannya adalah $(x - r)^2 + (y + r)^2 = r^2$.",
      steps: "1. Susun persamaan lingkaran dengan pusat $(r, -r)$:\n$$(x - r)^2 + (y + r)^2 = r^2$$\n2. Substitusikan koordinat titik lalui $(2, -1)$:\n$$(2 - r)^2 + (-1 + r)^2 = r^2$$\n3. Jabarkan bentuk kuadrat aljabar:\n$$(4 - 4r + r^2) + (1 - 2r + r^2) = r^2$$\n$$2r^2 - 6r + 5 = r^2$$\n4. Pindahkan semua suku ke ruas kiri membentuk persamaan kuadrat:\n$$r^2 - 6r + 5 = 0$$\n5. Faktorkan persamaan kuadrat:\n$$(r - 1)(r - 5) = 0 \\implies r = 1 \\text{ atau } r = 5$$\n6. Nilai jari-jari terkecil yang memenuhi adalah $r = 1$.\n7. Jadi, jari-jari terkecilnya adalah 1 (pilihan A).",
      pitfalls: "Memilih nilai jari-jari terbesar $r = 5$ padahal yang diminta secara spesifik adalah jari-jari lingkaran terkecil."
    }
  }
];
