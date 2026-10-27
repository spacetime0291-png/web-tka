/**
 * Batch Task: TASK_mat-alj-fungsi-polinom_MEDIUM
 * SubTopic: Fungsi Polinom (mat-alj-fungsi-polinom)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "mat-alj-fungsi-polinom-006",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Titik Stasioner Fungsi Kubik",
    difficulty: "sedang",
    statement: "Titik-titik stasioner dari kurva grafik fungsi kubik $f(x) = x^3 - 3x^2 - 9x + 5$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-1, 10)$ dan $(3, -22)$",
      "$(1, -6)$ dan $(3, -22)$",
      "$(-1, 10)$ dan $(-3, -22)$",
      "$(1, 10)$ dan $(-3, -22)$",
      "$(0, 5)$ dan $(3, -22)$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Titik stasioner suatu fungsi kontinu $f(x)$ terjadi pada saat gradien garis singgungnya bernilai nol, yaitu memenuhi syarat turunan pertama $f'(x) = 0$.",
      steps: "1. Turunkan fungsi $f(x)$ terhadap $x$:\n$$f'(x) = 3x^2 - 6x - 9$$\n2. Terapkan syarat stasioner $f'(x) = 0$:\n$$3x^2 - 6x - 9 = 0 \\implies x^2 - 2x - 3 = 0$$\n3. Faktorkan persamaan kuadrat:\n$$(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ atau } x = -1$$\n4. Hitung nilai fungsi untuk masing-masing absis stasioner:\n- Untuk $x = -1$:\n$$f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$$\n- Untuk $x = 3$:\n$$f(3) = (3)^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$$\n5. Jadi koordinat titik stasionernya adalah $(-1, 10)$ dan $(3, -22)$ (pilihan A).",
      pitfalls: "Salah tanda saat memfaktorkan $x^2 - 2x - 3 = 0$ sehingga memperoleh $x = 1$ dan $x = -3$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-007",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Kedudukan Parabola Menyinggung Garis Lurus",
    difficulty: "sedang",
    statement: "Grafik fungsi kuadrat $f(x) = x^2 - 2x + c$ menyinggung garis lurus $y = 2x - 1$. Nilai konstanta $c$ yang memenuhi adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    correctIndex: 2,
    solution: {
      concept: "Parabola menyinggung garis lurus jika dan hanya jika persamaan kuadrat sekutu hasil substitusi kedua persamaan memiliki nilai diskriminan sama dengan nol ($D = 0$).",
      steps: "1. Samakan kedua persamaan kurva:\n$$x^2 - 2x + c = 2x - 1$$\n2. Susun dalam bentuk persamaan kuadrat standar $Ax^2 + Bx + C = 0$:\n$$x^2 - 4x + (c + 1) = 0$$\n3. Terapkan syarat menyinggung ($D = 0$):\n$$D = B^2 - 4AC = (-4)^2 - 4(1)(c + 1) = 0$$\n4. Selesaikan persamaan aljabar:\n$$16 - 4c - 4 = 0 \\implies 12 - 4c = 0 \\implies 4c = 12 \\implies c = 3$$\n5. Jadi nilai konstanta $c$ adalah 3 (pilihan C).",
      pitfalls: "Lupa mengubah tanda konstanta $-1$ menjadi $+1$ saat memindahkan ke ruas kiri."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-008",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Menyusun Rumus Fungsi Kuadrat dari Titik Balik",
    difficulty: "sedang",
    statement: "Suatu fungsi kuadrat memiliki titik puncak di $(2, -1)$ dan grafiknya memotong sumbu-$Y$ di titik $(0, 7)$. Rumus fungsi kuadrat tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$f(x) = 2x^2 - 8x + 7$",
      "$f(x) = 2x^2 + 8x + 7$",
      "$f(x) = x^2 - 4x + 7$",
      "$f(x) = 2x^2 - 4x + 7$",
      "$f(x) = 2x^2 - 8x - 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi kuadrat yang diketahui titik baliknya $(x_p, y_p)$ dapat dirumuskan sebagai $f(x) = a(x - x_p)^2 + y_p$. Nilai parameter $a$ dicari melalui substitusi titik lain yang dilalui grafik.",
      steps: "1. Masukkan titik balik $(2, -1)$ ke bentuk baku:\n$$f(x) = a(x - 2)^2 - 1$$\n2. Substitusikan titik $(0, 7)$ yang dilalui:\n$$7 = a(0 - 2)^2 - 1 \\implies 7 = 4a - 1 \\implies 4a = 8 \\implies a = 2$$\n3. Jabarkan rumus fungsi kuadrat dengan $a = 2$:\n$$f(x) = 2(x^2 - 4x + 4) - 1 = 2x^2 - 8x + 8 - 1 = 2x^2 - 8x + 7$$\n4. Jadi rumus fungsinya adalah $f(x) = 2x^2 - 8x + 7$ (pilihan A).",
      pitfalls: "Lupa mengalikan konstanta 4 di dalam kurung dengan $a = 2$, sehingga hanya menghitung $4 - 1 = 3$ alih-alih $8 - 1 = 7$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-009",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Syarat Definit Positif Fungsi Kuadrat",
    difficulty: "sedang",
    statement: "Fungsi kuadrat $f(x) = (m - 1)x^2 + 4x + (m + 2)$ bernilai definit positif untuk setiap $x \\in \\mathbb{R}$ jika dan hanya jika nilai $m$ memenuhi ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$m > 2$",
      "$m > 1$",
      "$m < -3 \\text{ atau } m > 2$",
      "$-3 < m < 2$",
      "$1 < m < 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Fungsi kuadrat definit positif (selalu bernilai positif untuk semua $x \\in \\mathbb{R}$) harus memenuhi dua syarat mutlak: koefisien utama positif ($a > 0$) dan nilai diskriminan negatif ($D < 0$).",
      steps: "1. Syarat pertama ($a > 0$):\n$$m - 1 > 0 \\implies m > 1$$\n2. Syarat kedua ($D < 0$):\n$$D = b^2 - 4ac = (4)^2 - 4(m - 1)(m + 2) < 0$$\n$$16 - 4(m^2 + m - 2) < 0$$\nBagi kedua ruas dengan 4:\n$$4 - (m^2 + m - 2) < 0 \\implies -m^2 - m + 6 < 0 \\implies m^2 + m - 6 > 0$$\n3. Faktorkan pertidaksamaan kuadrat:\n$$(m + 3)(m - 2) > 0 \\implies m < -3 \\text{ atau } m > 2$$\n4. Tentukan irisan dari syarat pertama ($m > 1$) dan syarat kedua ($m < -3$ atau $m > 2$):\n$$(m > 1) \\cap (m < -3 \\cup m > 2) = m > 2$$\n5. Jadi nilai yang memenuhi adalah $m > 2$ (pilihan A).",
      pitfalls: "Lupa mengiriskan dengan syarat $a > 0$ sehingga keliru memilih $m < -3$ atau $m > 2$."
    }
  },
  {
    id: "mat-alj-fungsi-polinom-010",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mat-alj",
    subChapterId: "mat-alj-fungsi",
    subTopicId: "mat-alj-fungsi-polinom",
    category: "Translasi Grafik Parabola",
    difficulty: "sedang",
    statement: "Grafik fungsi kuadrat $f(x) = x^2 - 4x + 3$ ditranslasikan sejauh 3 satuan ke arah sumbu-$X$ positif (ke kanan) dan 2 satuan ke arah sumbu-$Y$ positif (ke atas) menghasilkan grafik fungsi $g(x)$. Persamaan fungsi $g(x)$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$g(x) = x^2 - 10x + 26$",
      "$g(x) = x^2 - 10x + 24$",
      "$g(x) = x^2 - 2x + 2$",
      "$g(x) = x^2 + 2x + 6$",
      "$g(x) = x^2 - 10x + 22$"
    ],
    correctIndex: 0,
    solution: {
      concept: "Translasi fungsi $y = f(x)$ sejauh $h$ satuan ke kanan dan $k$ satuan ke atas menghasilkan fungsi baru $y = f(x - h) + k$.",
      steps: "1. Identifikasi pergeseran: $h = 3$ dan $k = 2$, sehingga $g(x) = f(x - 3) + 2$.<br>2. Substitusikan $(x - 3)$ ke dalam fungsi $f(x)$:\n$$f(x - 3) = (x - 3)^2 - 4(x - 3) + 3$$\n3. Jabarkan suku-suku aljabar:\n$$f(x - 3) = (x^2 - 6x + 9) - 4x + 12 + 3 = x^2 - 10x + 24$$\n4. Tambahkan pergeseran vertikal $k = +2$:\n$$g(x) = (x^2 - 10x + 24) + 2 = x^2 - 10x + 26$$\n5. Jadi persamaan fungsi hasil pergeseran adalah $g(x) = x^2 - 10x + 26$ (pilihan A).",
      pitfalls: "Tertukar tanda pergeseran horizontal, yaitu menggunakan $(x + 3)$ padahal pergeseran ke kanan menggunakan $(x - 3)$."
    }
  }
];
