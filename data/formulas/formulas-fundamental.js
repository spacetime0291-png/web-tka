/**
 * FORMULA BANK - BAB FUNDAMENTAL (PRASYARAT)
 * Meliputi 5 Bab Kecil:
 * 1. fun-trig-dasar (Trigonometri Analitik Dasar)
 * 2. fun-alj-dasar (Aljabar Dasar)
 * 3. fun-geo-dasar (Garis dan Koordinat)
 * 4. fun-mutlak-dasar (Syarat Fungsi & Nilai Mutlak)
 * 5. fun-eks-dasar (Sifat Eksponen & Logaritma)
 */

const FORMULAS_FUNDAMENTAL = {
  "fun-trig-dasar": {
    subChapterId: "fun-trig-dasar",
    title: "Trigonometri Analitik Dasar",
    chapterId: "fun-trig",
    chapterTitle: "Trigonometri Dasar",
    pillarId: "fundamental",
    pillarTitle: "Bab Fundamental",
    summary: "Fondasi perbandingan sisi segitiga siku-siku, sudut istimewa di empat kuadran, identitas Pythagoras, serta rumus sudut rangkap dan jumlah/selisih sudut.",
    subTopicsCovered: [
      "Perbandingan Trigonometri Siku-Siku",
      "Sudut Istimewa & Relasi Kuadran",
      "Identitas Pythagoras",
      "Rumus Jumlah dan Selisih Sudut",
      "Rumus Sudut Rangkap"
    ],
    formulas: [
      {
        id: "fun-trig-f01",
        code: "R-01",
        title: "Perbandingan Trigonometri Segitiga Siku-Siku",
        formulaLatex: "\\sin\\theta = \\frac{\\text{depan}}{\\text{miring}} = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{\\text{samping}}{\\text{miring}} = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{\\text{depan}}{\\text{samping}} = \\frac{y}{x} \\\\[6pt] \\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}, \\quad r = \\sqrt{x^2 + y^2}",
        conditions: "Berlaku pada segitiga siku-siku dengan hipotenusa $r > 0$.",
        variables: [
          { symbol: "x", desc: "Sisi samping sudut $\\theta$" },
          { symbol: "y", desc: "Sisi depan sudut $\\theta$" },
          { symbol: "r", desc: "Sisi miring (hipotenusa)" }
        ],
        traps: "Tertukar menentukan sisi depan dan sisi samping karena orientasi sudut gambar diputar.",
        example: {
          question: "Diketahui segitiga siku-siku $ABC$ di $B$. Jika panjang $AB = 4$ dan $BC = 3$, dengan $\\theta = \\angle BAC$, tentukan nilai $\\sin\\theta + \\cos\\theta$.",
          steps: [
            "Tentukan sisi miring $AC$: $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$",
            "Terhadap sudut $\\theta$, sisi depan $= BC = 3$, sisi samping $= AB = 4$, sisi miring $= 5$",
            "Hitung $\\sin\\theta = \\frac{3}{5}$ dan $\\cos\\theta = \\frac{4}{5}$",
            "Jumlahkan: $\\sin\\theta + \\cos\\theta = \\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}$"
          ],
          answer: "$\\frac{7}{5}$"
        }
      },
      {
        id: "fun-trig-f02",
        code: "R-02",
        title: "Relasi Sudut 4 Kuadran & Sudut Negatif",
        formulaLatex: "\\text{Kuadran I: Semua }(+), \\quad \\text{Kuadran II: } \\sin(+), \\quad \\text{Kuadran III: } \\tan(+), \\quad \\text{Kuadran IV: } \\cos(+) \\\\[6pt] \\sin(180^\\circ - \\theta) = \\sin\\theta, \\quad \\cos(180^\\circ - \\theta) = -\\cos\\theta, \\quad \\tan(180^\\circ - \\theta) = -\\tan\\theta \\\\[4pt] \\sin(180^\\circ + \\theta) = -\\sin\\theta, \\quad \\cos(180^\\circ + \\theta) = -\\cos\\theta, \\quad \\tan(180^\\circ + \\theta) = \\tan\\theta \\\\[4pt] \\sin(360^\\circ - \\theta) = -\\sin\\theta, \\quad \\cos(360^\\circ - \\theta) = \\cos\\theta, \\quad \\tan(360^\\circ - \\theta) = -\\tan\\theta \\\\[4pt] \\sin(-\\theta) = -\\sin\\theta, \\quad \\cos(-\\theta) = \\cos\\theta, \\quad \\tan(-\\theta) = -\\tan\\theta",
        conditions: "Gunakan acuan sumbu-X ($180^\\circ$ atau $360^\\circ$) agar nama fungsi trigonometri tidak berubah.",
        variables: [
          { symbol: "\\theta", desc: "Besar sudut lancip ($0^\\circ < \\theta < 90^\\circ$)" }
        ],
        traps: "Fungsi cosinus bernilai positif untuk sudut negatif: $\\cos(-\\theta) = \\cos\\theta$, sedangkan $\\sin(-\\theta) = -\\sin\\theta$.",
        example: {
          question: "Hitung nilai dari $\\cos 150^\\circ + \\sin 210^\\circ - \\tan 315^\\circ$.",
          steps: [
            "Sudut $150^\\circ$ di Kuadran II: $\\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{1}{2}\\sqrt{3}$",
            "Sudut $210^\\circ$ di Kuadran III: $\\sin(180^\\circ + 30^\\circ) = -\\sin 30^\\circ = -\\frac{1}{2}$",
            "Sudut $315^\\circ$ di Kuadran IV: $\\tan(360^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$",
            "Substitusi: $\\left(-\\frac{1}{2}\\sqrt{3}\\right) + \\left(-\\frac{1}{2}\\right) - (-1) = -\\frac{1}{2}\\sqrt{3} - \\frac{1}{2} + 1 = \\frac{1}{2} - \\frac{1}{2}\\sqrt{3}$"
          ],
          answer: "$\\frac{1 - \\sqrt{3}}{2}$"
        }
      },
      {
        id: "fun-trig-f03",
        code: "R-03",
        title: "Identitas Trigonometri Pythagoras",
        formulaLatex: "\\sin^2\\theta + \\cos^2\\theta = 1 \\\\[4pt] 1 + \\tan^2\\theta = \\sec^2\\theta \\\\[4pt] 1 + \\cot^2\\theta = \\csc^2\\theta",
        conditions: "Berlaku untuk semua nilai sudut real $\\theta$ selama fungsi terdefinisi.",
        variables: [
          { symbol: "\\sin^2\\theta", desc: "Kuadrat nilai sinus, $(\\sin\\theta)^2$" },
          { symbol: "\\sec^2\\theta", desc: "Kuadrat nilai secan, $\\frac{1}{\\cos^2\\theta}$" }
        ],
        traps: "Lupa bahwa $\\cos\\theta = \\pm\\sqrt{1 - \\sin^2\\theta}$, tanda $\\pm$ wajib disesuaikan dengan posisi kuadran sudut.",
        example: {
          question: "Diketahui $\\cos\\alpha = -\\frac{3}{5}$ dengan $\\alpha$ berada di kuadran II ($90^\\circ < \\alpha < 180^\\circ$). Tentukan nilai dari $\\tan\\alpha$.",
          steps: [
            "Gunakan identitas: $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\left(-\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$",
            "Di kuadran II, nilai $\\sin\\alpha$ positif: $\\sin\\alpha = +\\frac{4}{5}$",
            "Hitung $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$"
          ],
          answer: "$-\\frac{4}{3}$"
        }
      },
      {
        id: "fun-trig-f04",
        code: "R-04",
        title: "Rumus Jumlah dan Selisih Dua Sudut",
        formulaLatex: "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B \\\\[4pt] \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B \\\\[4pt] \\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}",
        conditions: "Perhatikan tanda $\\mp$ pada rumus cosinus dan penyebut tangen berkebalikan dengan tanda operasi sudutnya.",
        variables: [
          { symbol: "A, B", desc: "Sudut-sudut komponen sembarang" }
        ],
        traps: "Tanda operasi pada $\\cos(A + B)$ adalah minus: $\\cos A \\cos B - \\sin A \\sin B$.",
        example: {
          question: "Tentukan nilai eksak dari $\\sin 75^\\circ$.",
          steps: [
            "Uraikan $75^\\circ = 45^\\circ + 30^\\circ$",
            "Gunakan rumus $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$:",
            "$\\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ$",
            "$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{4}\\sqrt{6} + \\frac{1}{4}\\sqrt{2}$"
          ],
          answer: "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$"
        }
      },
      {
        id: "fun-trig-f05",
        code: "R-05",
        title: "Rumus Sudut Rangkap (Ganda)",
        formulaLatex: "\\sin 2A = 2\\sin A \\cos A \\\\[4pt] \\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A \\\\[4pt] \\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}",
        conditions: "Bentuk $\\cos 2A$ memiliki 3 variasi, pilih variasi yang langsung mengeliminasi suku konstanta $1$.",
        variables: [
          { symbol: "2A", desc: "Sudut bernilai dua kali lipat sudut dasar $A$" }
        ],
        traps: "Mengira $\\sin 2A = 2\\sin A$, ini salah besar karena $\\sin 2A = 2\\sin A \\cos A$.",
        example: {
          question: "Jika $\\sin A = \\frac{3}{5}$ dengan $A$ adalah sudut lancip, tentukan nilai $\\cos 2A$.",
          steps: [
            "Gunakan variasi rumus $\\cos 2A$ yang hanya memuat $\\sin A$:",
            "$\\cos 2A = 1 - 2\\sin^2 A$",
            "$\\cos 2A = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$"
          ],
          answer: "$\\frac{7}{25}$"
        }
      }
    ]
  },

  "fun-alj-dasar": {
    subChapterId: "fun-alj-dasar",
    title: "Aljabar Dasar",
    chapterId: "fun-alj",
    chapterTitle: "Aljabar Elementer",
    pillarId: "fundamental",
    pillarTitle: "Bab Fundamental",
    summary: "Identitas pemfaktoran penting, manipulasi pecahan bentuk aljabar, dan penyelesaian sistem persamaan linear dua & tiga variabel.",
    subTopicsCovered: [
      "Operasi Aljabar & Pemfaktoran",
      "Pecahan Bentuk Aljabar",
      "SPLDV dan SPLTV"
    ],
    formulas: [
      {
        id: "fun-alj-f01",
        code: "R-01",
        title: "Identitas Pemfaktoran Aljabar Istimewa",
        formulaLatex: "a^2 - b^2 = (a - b)(a + b) \\\\[4pt] (a \\pm b)^2 = a^2 \\pm 2ab + b^2 \\\\[4pt] a^3 - b^3 = (a - b)(a^2 + ab + b^2) \\\\[4pt] a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\\\[4pt] (a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)",
        conditions: "Berlaku untuk semua bilangan real $a, b, c$.",
        variables: [
          { symbol: "a, b", desc: "Suku-suku bentuk aljabar" }
        ],
        traps: "Tertukar tanda minus pada pemfaktoran selisih kubik: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, suku tengahnya bertanda positif $(+ab)$.",
        example: {
          question: "Jika $x + y = 7$ dan $xy = 10$, tentukan nilai dari $x^2 + y^2$ dan $x^3 + y^3$.",
          steps: [
            "Gunakan identitas kuadrat: $x^2 + y^2 = (x + y)^2 - 2xy = 7^2 - 2(10) = 49 - 20 = 29$",
            "Gunakan identitas kubik: $x^3 + y^3 = (x + y)(x^2 - xy + y^2) = 7 \\cdot (29 - 10) = 7 \\cdot 19 = 133$"
          ],
          answer: "$x^2 + y^2 = 29$ dan $x^3 + y^3 = 133$"
        }
      },
      {
        id: "fun-alj-f02",
        code: "R-02",
        title: "Pecahan Bentuk Aljabar",
        formulaLatex: "\\frac{A}{B} \\pm \\frac{C}{D} = \\frac{A \\cdot D \\pm B \\cdot C}{B \\cdot D} \\quad (B, D \\neq 0) \\\\[6pt] \\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C} = \\frac{A \\cdot D}{B \\cdot C}",
        conditions: "Penyebut tidak boleh sama dengan nol ($B \\neq 0, D \\neq 0, C \\neq 0$).",
        variables: [
          { symbol: "A, B, C, D", desc: "Polinomial atau konstanta aljabar" }
        ],
        traps: "Mencoret suku sejenis tanpa memfaktorkan keseluruhan pembilang terlebih dahulu.",
        example: {
          question: "Sederhanakan bentuk aljabar $\\frac{x^2 - 9}{x^2 + 5x + 6}$.",
          steps: [
            "Faktorkan pembilang: $x^2 - 9 = (x - 3)(x + 3)$",
            "Faktorkan penyebut: $x^2 + 5x + 6 = (x + 2)(x + 3)$",
            "Bagi suku yang sama $(x + 3)$ dengan syarat $x \\neq -3$: $\\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \\frac{x - 3}{x + 2}$"
          ],
          answer: "$\\frac{x - 3}{x + 2}$"
        }
      },
      {
        id: "fun-alj-f03",
        code: "R-03",
        title: "Sistem Persamaan Linear Dua Variabel (SPLDV)",
        formulaLatex: "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\\\[6pt] x = \\frac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}, \\quad y = \\frac{a_1 c_2 - a_2 c_1}{a_1 b_2 - a_2 b_1} \\quad (a_1 b_2 - a_2 b_1 \\neq 0)",
        conditions: "Memiliki tepat 1 solusi jika $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$. Tak hingga solusi jika $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$. Tidak punya solusi jika $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
        variables: [
          { symbol: "x, y", desc: "Variabel penyelesaian sistem" }
        ],
        traps: "Lupa memeriksa kondisi penyebut nol yang menandakan garis sejajar (tidak ada solusi) atau berimpit.",
        example: {
          question: "Tentukan himpunan penyelesaian dari sistem persamaan $3x + 2y = 12$ dan $2x - y = 1$.",
          steps: [
            "Kalikan persamaan kedua dengan 2: $4x - 2y = 2$",
            "Jumlahkan dengan persamaan pertama: $(3x + 2y) + (4x - 2y) = 12 + 2 \\implies 7x = 14 \\implies x = 2$",
            "Substitusi nilai $x = 2$ ke $2x - y = 1 \\implies 2(2) - y = 1 \\implies 4 - y = 1 \\implies y = 3$"
          ],
          answer: "$(x, y) = (2, 3)$"
        }
      },
      {
        id: "fun-alj-f04",
        code: "R-04",
        title: "Metode Eliminasi SPLTV (Tiga Variabel)",
        formulaLatex: "\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}",
        conditions: "Eliminasi satu variabel yang sama secara konsisten dari dua pasang persamaan untuk menghasilkan sistem dua variabel baru.",
        variables: [
          { symbol: "x, y, z", desc: "Variabel penyelesaian SPLTV" }
        ],
        traps: "Mengeliminasi variabel berbeda pada pasangan persamaan berikutnya sehingga sistem tidak mengerucut ke dua variabel.",
        example: {
          question: "Jika $x + y + z = 6$, $2x - y + z = 3$, dan $x + 2y - z = 2$, tentukan nilai dari $x \\cdot y \\cdot z$.",
          steps: [
            "Eliminasi $z$ dari pers (1) dan (3) dengan menjumlahkan: $(x + y + z) + (x + 2y - z) = 6 + 2 \\implies 2x + 3y = 8$ ...(4)",
            "Eliminasi $z$ dari pers (2) dan (3) dengan menjumlahkan: $(2x - y + z) + (x + 2y - z) = 3 + 2 \\implies 3x + y = 5$ ...(5)",
            "Dari (5): $y = 5 - 3x$. Substitusi ke (4): $2x + 3(5 - 3x) = 8 \\implies 2x + 15 - 9x = 8 \\implies -7x = -7 \\implies x = 1$",
            "Maka $y = 5 - 3(1) = 2$. Substitusi ke pers (1): $1 + 2 + z = 6 \\implies z = 3$",
            "Hasil kali: $x \\cdot y \\cdot z = 1 \\cdot 2 \\cdot 3 = 6$"
          ],
          answer: "$6$"
        }
      }
    ]
  },

  "fun-geo-dasar": {
    subChapterId: "fun-geo-dasar",
    title: "Garis dan Koordinat",
    chapterId: "fun-geo",
    chapterTitle: "Geometri Analitik Bidang",
    pillarId: "fundamental",
    pillarTitle: "Bab Fundamental",
    summary: "Jarak dan titik tengah dua koordinat, gradien kemiringan garis, persamaan garis lurus, relasi garis sejajar/tegak lurus, dan jarak titik ke garis.",
    subTopicsCovered: [
      "Koordinat & Jarak Dua Titik",
      "Persamaan Garis Lurus",
      "Gradien Garis Sejajar & Tegak Lurus",
      "Jarak Titik ke Garis"
    ],
    formulas: [
      {
        id: "fun-geo-f01",
        code: "R-01",
        title: "Jarak Dua Titik & Titik Tengah",
        formulaLatex: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\\\[4pt] M = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)",
        conditions: "Berlaku pada bidang kartesius dua dimensi $\\mathbb{R}^2$.",
        variables: [
          { symbol: "d", desc: "Jarak Euclidean antara titik $(x_1, y_1)$ dan $(x_2, y_2)$" },
          { symbol: "M", desc: "Titik koordinat persis di tengah ruas garis" }
        ],
        traps: "Lupa menguadratkan selisih koordinat sebelum menjumlahkannya di dalam akar.",
        example: {
          question: "Tentukan jarak antara titik $A(-2, 1)$ dan titik $B(4, 9)$ serta tentukan koordinat titik tengahnya.",
          steps: [
            "Hitung jarak: $d = \\sqrt{(4 - (-2))^2 + (9 - 1)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$",
            "Hitung titik tengah: $M = \\left(\\frac{-2 + 4}{2}, \\frac{1 + 9}{2}\\right) = \\left(\\frac{2}{2}, \\frac{10}{2}\\right) = (1, 5)$"
          ],
          answer: "Jarak $= 10$, Titik tengah $= (1, 5)$"
        }
      },
      {
        id: "fun-geo-f02",
        code: "R-02",
        title: "Gradien dan Persamaan Garis Lurus",
        formulaLatex: "m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} \\\\[4pt] y - y_1 = m(x - x_1) \\\\[4pt] Ax + By + C = 0 \\implies m = -\\frac{A}{B}",
        conditions: "Garis tidak vertikal ($x_1 \\neq x_2$ dan $B \\neq 0$).",
        variables: [
          { symbol: "m", desc: "Gradien kemiringan garis" },
          { symbol: "(x_1, y_1)", desc: "Titik sembarang yang dilalui garis" }
        ],
        traps: "Tanda minus pada rumus gradien bentuk implisit $Ax + By + C = 0$: $m = -\\frac{A}{B}$ bukan $+\\frac{A}{B}$.",
        example: {
          question: "Tentukan persamaan garis yang melalui titik $(3, -2)$ dengan gradien $m = -4$.",
          steps: [
            "Gunakan rumus $y - y_1 = m(x - x_1)$:",
            "$y - (-2) = -4(x - 3)$",
            "$y + 2 = -4x + 12$",
            "$4x + y - 10 = 0$ atau $y = -4x + 10$"
          ],
          answer: "$4x + y - 10 = 0$"
        }
      },
      {
        id: "fun-geo-f03",
        code: "R-03",
        title: "Gradien Garis Sejajar dan Tegak Lurus",
        formulaLatex: "\\text{Garis Sejajar } (g_1 \\parallel g_2): \\quad m_1 = m_2 \\\\[4pt] \\text{Garis Tegak Lurus } (g_1 \\perp g_2): \\quad m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}",
        conditions: "Gradien kedua garis terdefinisi (bukan garis vertikal tegak lurus sumbu X).",
        variables: [
          { symbol: "m_1, m_2", desc: "Gradien garis pertama dan kedua" }
        ],
        traps: "Lupa mengubah tanda positif/negatif saat mencari gradien tegak lurus ($m_2 = -1/m_1$).",
        example: {
          question: "Tentukan persamaan garis yang melalui titik $(1, 4)$ dan tegak lurus terhadap garis $2x - 6y + 5 = 0$.",
          steps: [
            "Tentukan gradien garis acuan: $m_1 = -\\frac{A}{B} = -\\frac{2}{-6} = \\frac{1}{3}$",
            "Karena tegak lurus, $m_2 = -\\frac{1}{m_1} = -\\frac{1}{1/3} = -3$",
            "Buat persamaan garis baru melalui $(1, 4)$:",
            "$y - 4 = -3(x - 1) \\implies y - 4 = -3x + 3 \\implies 3x + y - 7 = 0$"
          ],
          answer: "$3x + y - 7 = 0$"
        }
      },
      {
        id: "fun-geo-f04",
        code: "R-04",
        title: "Jarak Titik ke Garis",
        formulaLatex: "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
        conditions: "Persamaan garis harus diubah ke bentuk umum implisit $Ax + By + C = 0$ terlebih dahulu.",
        variables: [
          { symbol: "(x_0, y_0)", desc: "Koordinat titik asal" },
          { symbol: "A, B, C", desc: "Koefisien persamaan garis implisit" },
          { symbol: "d", desc: "Jarak terpendek (tegak lurus) titik ke garis" }
        ],
        traps: "Lupa memberikan tanda nilai mutlak pada pembilang, jarak harus bernilai non-negatif ($d \\ge 0$).",
        example: {
          question: "Tentukan jarak dari titik $P(2, -1)$ ke garis $3x + 4y - 12 = 0$.",
          steps: [
            "Identifikasi: $x_0 = 2, y_0 = -1, A = 3, B = 4, C = -12$",
            "Hitung pembilang: $|3(2) + 4(-1) - 12| = |6 - 4 - 12| = |-10| = 10$",
            "Hitung penyebut: $\\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$",
            "Hitung jarak: $d = \\frac{10}{5} = 2$"
          ],
          answer: "$2$"
        }
      }
    ]
  },

  "fun-mutlak-dasar": {
    subChapterId: "fun-mutlak-dasar",
    title: "Syarat Fungsi & Nilai Mutlak",
    chapterId: "fun-mutlak",
    chapterTitle: "Pertidaksamaan & Nilai Mutlak",
    pillarId: "fundamental",
    pillarTitle: "Bab Fundamental",
    summary: "Daerah asal alami fungsi rasional dan irasional (akar), sifat dasar nilai mutlak, serta penyelesaian persamaan dan pertidaksamaan nilai mutlak.",
    subTopicsCovered: [
      "Syarat Fungsi Rasional",
      "Syarat Fungsi Bentuk Akar",
      "Persamaan Nilai Mutlak",
      "Pertidaksamaan Nilai Mutlak"
    ],
    formulas: [
      {
        id: "fun-mutlak-f01",
        code: "R-01",
        title: "Syarat Keberartian Fungsi (Domain Alami)",
        formulaLatex: "f(x) = \\frac{P(x)}{Q(x)} \\implies Q(x) \\neq 0 \\\\[6pt] f(x) = \\sqrt{g(x)} \\implies g(x) \\ge 0 \\\\[6pt] f(x) = \\frac{P(x)}{\\sqrt{g(x)}} \\implies g(x) > 0",
        conditions: "Berlaku untuk semua fungsi dalam himpunan bilangan real $\\mathbb{R}$.",
        variables: [
          { symbol: "Q(x)", desc: "Fungsi penyebut pecahan" },
          { symbol: "g(x)", desc: "Fungsi di bawah tanda akar berindeks genap" }
        ],
        traps: "Jika akar berada di penyebut, syaratnya adalah ketat $g(x) > 0$ (tanpa tanda sama dengan nol).",
        example: {
          question: "Tentukan domain (daerah asal) fungsi $f(x) = \\sqrt{x^2 - 4x - 12}$.",
          steps: [
            "Syarat di dalam tanda akar harus $\\ge 0$: $x^2 - 4x - 12 \\ge 0$",
            "Faktorkan: $(x - 6)(x + 2) \\ge 0$",
            "Pembuat nol: $x = -2$ dan $x = 6$",
            "Uji tanda pada garis bilangan: daerah bernilai positif berada di luar akar-akarnya",
            "Maka domain: $x \\le -2$ atau $x \\ge 6$"
          ],
          answer: "$\\{x \\in \\mathbb{R} \\mid x \\le -2 \\text{ atau } x \\ge 6\\}$"
        }
      },
      {
        id: "fun-mutlak-f02",
        code: "R-02",
        title: "Definisi & Sifat Dasar Nilai Mutlak",
        formulaLatex: "|x| = \\begin{cases} x, & \\text{jika } x \\ge 0 \\\\ -x, & \\text{jika } x < 0 \\end{cases} \\\\[6pt] |x| = \\sqrt{x^2}, \\quad |x|^2 = x^2, \\quad |a \\cdot b| = |a| \\cdot |b|, \\quad \\left|\\frac{a}{b}\\right| = \\frac{|a|}{|b|} \\; (b \\neq 0)",
        conditions: "Nilai mutlak selalu menghasilkan nilai riil non-negatif: $|x| \\ge 0$.",
        variables: [
          { symbol: "|x|", desc: "Besar jarak angka $x$ dari titik nol pada garis bilangan" }
        ],
        traps: "Menganggap $|-x| = x$ secara definisi, padahal jika $x$ bernilai negatif, maka $|x| = -x$ (menghasilkan angka positif).",
        example: {
          question: "Jika $x < 2$, sederhanakan bentuk aljabar $|x - 2| + |x + 3|$ jika diketahui pula $x > -3$.",
          steps: [
            "Karena $-3 < x < 2$:",
            "Nilai $x - 2 < 0$, sehingga $|x - 2| = -(x - 2) = 2 - x$",
            "Nilai $x + 3 > 0$, sehingga $|x + 3| = x + 3$",
            "Jumlahkan: $(2 - x) + (x + 3) = 5$"
          ],
          answer: "$5$"
        }
      },
      {
        id: "fun-mutlak-f03",
        code: "R-03",
        title: "Persamaan Nilai Mutlak",
        formulaLatex: "|f(x)| = c \\quad (c \\ge 0) \\iff f(x) = c \\quad \\text{atau} \\quad f(x) = -c \\\\[4pt] |f(x)| = |g(x)| \\iff [f(x) + g(x)][f(x) - g(x)] = 0",
        conditions: "Jika $c < 0$, persamaan $|f(x)| = c$ tidak memiliki solusi riil.",
        variables: [
          { symbol: "f(x), g(x)", desc: "Bentuk aljabar di dalam tanda mutlak" },
          { symbol: "c", desc: "Konstanta non-negatif" }
        ],
        traps: "Mengkuadratkan kedua ruas tanpa mengecek syarat awal jika ruas kanan mengandung variabel bebas non-mutlak.",
        example: {
          question: "Tentukan seluruh himpunan penyelesaian dari $|2x - 5| = |x + 1|$.",
          steps: [
            "Gunakan selisih kuadrat $[(2x - 5) + (x + 1)][(2x - 5) - (x + 1)] = 0$:",
            "$(3x - 4)(x - 6) = 0$",
            "Kasus 1: $3x - 4 = 0 \\implies x = \\frac{4}{3}$",
            "Kasus 2: $x - 6 = 0 \\implies x = 6$"
          ],
          answer: "$x = \\frac{4}{3}$ atau $x = 6$"
        }
      },
      {
        id: "fun-mutlak-f04",
        code: "R-04",
        title: "Pertidaksamaan Nilai Mutlak",
        formulaLatex: "|f(x)| < a \\quad (a > 0) \\iff -a < f(x) < a \\\\[4pt] |f(x)| > a \\quad (a > 0) \\iff f(x) < -a \\quad \\text{atau} \\quad f(x) > a \\\\[4pt] |f(x)| \\le |g(x)| \\iff [f(x) + g(x)][f(x) - g(x)] \\le 0",
        conditions: "Hanya berlaku jika konstanta $a > 0$.",
        variables: [
          { symbol: "a", desc: "Batas nilai positif" }
        ],
        traps: "Pertidaksamaan 'lebih besar dari' ($>$) menghasilkan dua daerah terpisah menggunakan penghubung 'atau', bukan interval bertingkat.",
        example: {
          question: "Selesaikan pertidaksamaan $|3x - 2| \\le 7$.",
          steps: [
            "Gunakan sifat interval tertutup: $-7 \\le 3x - 2 \\le 7$",
            "Tambahkan 2 pada ketiga ruas: $-7 + 2 \\le 3x \\le 7 + 2 \\implies -5 \\le 3x \\le 9$",
            "Bagi ketiga ruas dengan 3: $-\\frac{5}{3} \\le x \\le 3$"
          ],
          answer: "$-\\frac{5}{3} \\le x \\le 3$"
        }
      }
    ]
  },

  "fun-eks-dasar": {
    subChapterId: "fun-eks-dasar",
    title: "Sifat Eksponen & Logaritma",
    chapterId: "fun-eks",
    chapterTitle: "Eksponen dan Logaritma",
    pillarId: "fundamental",
    pillarTitle: "Bab Fundamental",
    summary: "Hukum perpangkatan bilangan real, bentuk akar dan rasionalisasi penyebut, serta operasi dan perubahan basis logaritma.",
    subTopicsCovered: [
      "Sifat Eksponen",
      "Bentuk Akar & Rasionalisasi",
      "Sifat Operasi Logaritma",
      "Perubahan Basis Logaritma"
    ],
    formulas: [
      {
        id: "fun-eks-f01",
        code: "R-01",
        title: "Hukum Operasi Pangkat (Eksponen)",
        formulaLatex: "a^m \\cdot a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{m \\cdot n} \\\\[6pt] (a \\cdot b)^n = a^n \\cdot b^n, \\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}, \\quad a^{-n} = \\frac{1}{a^n}, \\quad a^{m/n} = \\sqrt[n]{a^m}",
        conditions: "Basis $a, b > 0$ dan $a, b \\neq 1$. Khusus $a^0 = 1$ untuk $a \\neq 0$.",
        variables: [
          { symbol: "a, b", desc: "Bilangan pokok (basis)" },
          { symbol: "m, n", desc: "Pangkat eksponen" }
        ],
        traps: "Penjumlahan basis sama tidak boleh digabung pangkatnya: $a^m + a^n \\neq a^{m+n}$.",
        example: {
          question: "Sederhanakan bentuk $\\frac{2^{n+2} - 2^n}{2^{n+1}}$.",
          steps: [
            "Uraikan bentuk pangkat: $2^{n+2} = 2^n \\cdot 2^2 = 4 \\cdot 2^n$ dan $2^{n+1} = 2 \\cdot 2^n$",
            "Faktorkan $2^n$ pada pembilang: $\\frac{2^n (4 - 1)}{2 \\cdot 2^n}$",
            "Bagi suku $2^n$: $\\frac{3}{2}$"
          ],
          answer: "$\\frac{3}{2}$"
        }
      },
      {
        id: "fun-eks-f02",
        code: "R-02",
        title: "Bentuk Akar dan Menarik Akar Kuadrat Ganda",
        formulaLatex: "\\sqrt{(a + b) \\pm 2\\sqrt{ab}} = \\sqrt{a} \\pm \\sqrt{b} \\quad (a > b > 0) \\\\[6pt] \\text{Merasionalkan: } \\frac{c}{\\sqrt{a} \\pm \\sqrt{b}} = \\frac{c(\\sqrt{a} \\mp \\sqrt{b})}{a - b}",
        conditions: "Angka di depan akar dalam harus tepat bernilai $2$. Jika belum, keluarkan faktor $4$ dari dalam akar atau kalikan $\\frac{2}{2}$.",
        variables: [
          { symbol: "a, b", desc: "Dua bilangan yang jumlahnya $(a+b)$ dan hasil kalinya $ab$" }
        ],
        traps: "Lupa menaruh suku yang lebih besar di depan ($a > b$) saat operasi pengurangan agar hasilnya positif.",
        example: {
          question: "Sederhanakan bentuk akar ganda $\\sqrt{8 - \\sqrt{60}}$.",
          steps: [
            "Ubah angka di dalam akar menjadi bentuk $2\\sqrt{b}$: $\\sqrt{60} = \\sqrt{4 \\times 15} = 2\\sqrt{15}$",
            "Bentuk menjadi: $\\sqrt{8 - 2\\sqrt{15}}$",
            "Cari dua bilangan yang jumlahnya 8 dan perkaliannya 15: bilangan tersebut adalah 5 dan 3 ($5 + 3 = 8$ dan $5 \\times 3 = 15$)",
            "Karena $5 > 3$, maka $\\sqrt{8 - 2\\sqrt{15}} = \\sqrt{5} - \\sqrt{3}$"
          ],
          answer: "$\\sqrt{5} - \\sqrt{3}$"
        }
      },
      {
        id: "fun-eks-f03",
        code: "R-03",
        title: "Sifat-Sifat Pokok Logaritma",
        formulaLatex: "^a\\log b = c \\iff a^c = b \\quad (a > 0, a \\neq 1, b > 0) \\\\[6pt] ^a\\log(x \\cdot y) = ^a\\log x + ^a\\log y \\\\[4pt] ^a\\log\\left(\\frac{x}{y}\\right) = ^a\\log x - ^a\\log y \\\\[4pt] ^a\\log x^n = n \\cdot ^a\\log x, \\quad ^{a^m}\\log x^n = \\frac{n}{m} \\cdot ^a\\log x \\\\[4pt] ^a\\log a = 1, \\quad ^a\\log 1 = 0",
        conditions: "Syarat numerus $x, y > 0$ dan syarat basis $a > 0, a \\neq 1$.",
        variables: [
          { symbol: "a", desc: "Basis logaritma" },
          { symbol: "x, y", desc: "Numerus (bilangan yang dicari logaritmanya)" }
        ],
        traps: "$^a\\log(x + y) \\neq ^a\\log x + ^a\\log y$. Penjumlahan numerus tidak dapat dipisah.",
        example: {
          question: "Hitung nilai dari $^2\\log 48 + ^2\\log \\sqrt{2} - ^2\\log 3$.",
          steps: [
            "Gabungkan dengan sifat logaritma berbasis sama (basis 2):",
            "$^2\\log\\left(\\frac{48 \\cdot \\sqrt{2}}{3}\\right) = ^2\\log(16 \\cdot 2^{1/2})$",
            "Nyatakan dalam pangkat basis 2: $16 = 2^4 \\implies 16 \\cdot 2^{1/2} = 2^{4 + 1/2} = 2^{9/2}$",
            "Gunakan sifat pangkat: $^2\\log 2^{9/2} = \\frac{9}{2} \\cdot ^2\\log 2 = \\frac{9}{2}$"
          ],
          answer: "$\\frac{9}{2} = 4{,}5$"
        }
      },
      {
        id: "fun-eks-f04",
        code: "R-04",
        title: "Perubahan Basis Logaritma & Sifat Rantai",
        formulaLatex: "^a\\log b = \\frac{^c\\log b}{^c\\log a} = \\frac{1}{^b\\log a} \\\\[6pt] ^a\\log b \\cdot ^b\\log c \\cdot ^c\\log d = ^a\\log d \\\\[6pt] a^{^a\\log b} = b",
        conditions: "Semua basis dan numerus perantara harus memenuhi syarat logaritma ($> 0$ dan $\\neq 1$).",
        variables: [
          { symbol: "c", desc: "Basis baru sembarang yang dipilih untuk mempermudah perhitungan" }
        ],
        traps: "Sifat rantai hanya berlaku jika numerus faktor pertama sama persis dengan basis faktor berikutnya.",
        example: {
          question: "Jika $^2\\log 3 = p$ dan $^3\\log 5 = q$, nyatakan $^6\\log 15$ dalam $p$ dan $q$.",
          steps: [
            "Ubah basis ke basis yang diketahui paling banyak hubungannya (basis 2 atau 3). Pilih basis 2:",
            "$^6\\log 15 = \\frac{^2\\log 15}{^2\\log 6} = \\frac{^2\\log(3 \\cdot 5)}{^2\\log(2 \\cdot 3)} = \\frac{^2\\log 3 + ^2\\log 5}{^2\\log 2 + ^2\\log 3}$",
            "Diketahui $^2\\log 3 = p$. Untuk $^2\\log 5$: gunakan rantai $^2\\log 5 = ^2\\log 3 \\cdot ^3\\log 5 = p \\cdot q$",
            "Substitusi: $^6\\log 15 = \\frac{p + pq}{1 + p}$"
          ],
          answer: "$\\frac{p(1 + q)}{1 + p}$"
        }
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_FUNDAMENTAL;
}
if (typeof window !== 'undefined') {
  window.FORMULAS_FUNDAMENTAL = FORMULAS_FUNDAMENTAL;
}
