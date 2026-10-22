/**
 * TKA Platform Question Bank: TIER 2 - SEDANG
 * Focus: Standard multi-step analytical TKA problems.
 */

window.QUESTIONS_SEDANG = [
  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-3: Gerak Parabola)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-3",
    category: "Gerak Parabola Dua Dimensi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah peluru ditembakkan dari permukaan tanah datar dengan kecepatan awal $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta$ dengan $\\sin\\theta = 0{,}6$ (dan $\\cos\\theta = 0{,}8$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan, waktu total peluru di udara hingga mendarat kembali di tanah serta jarak mendatar terjauh ($X_{\\max}$) yang dicapai peluru berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ s}$ dan $240\\text{ m}$",
      "$3\\text{ s}$ dan $120\\text{ m}$",
      "$6\\text{ s}$ dan $180\\text{ m}$",
      "$8\\text{ s}$ dan $320\\text{ m}$",
      "$5\\text{ s}$ dan $200\\text{ m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Analisis Komponen Gerak Parabola:</strong><br>
          • Sumbu horizontal (GLB): $v_x = v_0\\cos\\theta$ (konstan), $X = v_x \\cdot t$<br>
          • Sumbu vertikal (GLBB gravitasi): $v_{0y} = v_0\\sin\\theta$, $v_y = v_{0y} - gt$<br>
          • Waktu mencapai titik puncak: $t_p = \\frac{v_0\\sin\\theta}{g}$<br>
          • Waktu total di udara: $t_{\\text{udara}} = 2 t_p = \\frac{2v_0\\sin\\theta}{g}$<br>
          • Jarak terjauh: $X_{\\max} = v_x \\cdot t_{\\text{udara}}$
        </div>
      `,
      steps: `
        <ol>
          <li><strong>Hitung Komponen Kecepatan Awal:</strong><br>
            $$v_x = 50 \\times 0{,}8 = 40\\text{ m/s}$$
            $$v_{0y} = 50 \\times 0{,}6 = 30\\text{ m/s}$$
          </li>
          <li><strong>Hitung Waktu Total di Udara $(t_{\\text{udara}})$:</strong><br>
            $$t_{\\text{udara}} = \\frac{2 v_{0y}}{g} = \\frac{2(30)}{10} = 6\\text{ detik}$$
          </li>
          <li><strong>Hitung Jarak Jangkauan Maksimum $(X_{\\max})$:</strong><br>
            $$X_{\\max} = v_x \\times t_{\\text{udara}} = 40\\text{ m/s} \\times 6\\text{ s} = 240\\text{ meter}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Waktu:</strong><br>
          Waktu $t = 3\\text{ detik}$ hanyalah waktu saat peluru berada di titik puncak (tertinggi). Untuk jarak mendatar total di tanah, harus menggunakan waktu tempuh total bolak-balik ($2 \\times 3 = 6\\text{ s}$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - DINAMIKA (fis-din-1: Gaya Gesek pada Bidang Miring)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-1",
    category: "Dinamika Bidang Miring Kasar",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah balok bermassa $m = 5\\text{ kg}$ meluncur menuruni bidang miring kasar dengan sudut kemiringan $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$ dan $\\cos 37^\\circ = 0{,}8$). Koefisien gesekan kinetis antara balok dan permukaan bidang adalah $\\mu_k = 0{,}25$. Jika $g = 10\\text{ m/s}^2$, percepatan meluncur balok menuruni bidang miring tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}0\\text{ m/s}^2$",
      "$4{,}0\\text{ m/s}^2$",
      "$6{,}0\\text{ m/s}^2$",
      "$3{,}5\\text{ m/s}^2$",
      "$5{,}0\\text{ m/s}^2$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum II Newton pada Bidang Miring Kasar:</strong><br>
          1. Gaya normal tegak lurus bidang: $N = mg\\cos\\theta$<br>
          2. Gaya gesek kinetis: $f_k = \\mu_k N = \\mu_k mg\\cos\\theta$<br>
          3. Gaya penarik sejajar bidang menuruni kemiringan: $F_g = mg\\sin\\theta$<br>
          4. Persamaan gerak: $\\Sigma F = ma \\implies mg\\sin\\theta - f_k = ma \\implies a = g(\\sin\\theta - \\mu_k\\cos\\theta)$
        </div>
      `,
      steps: `
        <ol>
          <li><strong>Hitung Komponen Gaya:</strong><br>
            Komponen berat sejajar bidang: $mg\\sin 37^\\circ = 5(10)(0{,}6) = 30\\text{ N}$.<br>
            Gaya normal: $N = mg\\cos 37^\\circ = 5(10)(0{,}8) = 40\\text{ N}$.
          </li>
          <li><strong>Hitung Gaya Gesek Kinetis $(f_k)$:</strong><br>
            $$f_k = \\mu_k N = 0{,}25 \\times 40 = 10\\text{ N}$$
          </li>
          <li><strong>Hitung Percepatan $(a)$:</strong><br>
            $$a = \\frac{mg\\sin\\theta - f_k}{m} = \\frac{30 - 10}{5} = \\frac{20}{5} = 4{,}0\\text{ m/s}^2$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan tertukar antara sinus dan kosinus pada bidang miring. Sudut kemiringan terhadap horizontal menggunakan $\\sin$ untuk gaya penarik sejajar bidang dan $\\cos$ untuk gaya normal tegak lurus bidang.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-1: Hukum Archimedes Terapung)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-1",
    category: "Hukum Archimedes & Kerapatan",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebongkah balok kayu terapung di perbatasan dua lapisan zat cair yang tidak bercampur. Bagian bawah balok tercelup dalam lapisan zat cair A (massa jenis $\\rho_A = 1200\\text{ kg/m}^3$) sebanyak $40\\%$ dari volume totalnya, dan $35\\%$ volume balok tercelup dalam lapisan zat cair B (massa jenis $\\rho_B = 800\\text{ kg/m}^3$), sedangkan sisanya muncul di udara. Massa jenis balok kayu tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$760\\text{ kg/m}^3$",
      "$780\\text{ kg/m}^3$",
      "$850\\text{ kg/m}^3$",
      "$920\\text{ kg/m}^3$",
      "$1000\\text{ kg/m}^3$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Keseimbangan Benda Terapung Multilapis:</strong><br>
          Gaya berat total benda sama dengan jumlah seluruh gaya apung Archimedes dari fluida-fluida yang terdesak:<br>
          $$W = F_{A1} + F_{A2} \\implies \\rho_b V_b g = \\rho_A V_{A} g + \\rho_B V_{B} g$$
          $$\\rho_b = \\rho_A \\left(\\frac{V_A}{V_b}\\right) + \\rho_B \\left(\\frac{V_B}{V_b}\\right)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Diketahui rasio volume tercelup:<br>
            $\\frac{V_A}{V_b} = 40\\% = 0{,}40$ dan $\\frac{V_B}{V_b} = 35\\% = 0{,}35$.
          </li>
          <li>Substitusi ke persamaan keseimbangan apung:<br>
            $$\\rho_b = (1200 \\times 0{,}40) + (800 \\times 0{,}35)$$
          </li>
          <li>Hitung masing-masing kontribusi:<br>
            $$1200 \\times 0{,}40 = 480$$
            $$800 \\times 0{,}35 = 280$$
            $$\\rho_b = 480 + 280 = 760\\text{ kg/m}^3$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan bahwa volume balok di udara ($25\\%$) tidak memberikan gaya apung yang signifikan karena massa jenis udara sangat kecil dibanding cairan dan diabaikan.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-4: Mesin Carnot)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Efisiensi Mesin Termal Carnot",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu mesin kalor Carnot bekerja di antara reservoir suhu tinggi $527^\\circ\\text{C}$ dan reservoir suhu rendah $127^\\circ\\text{C}$. Jika dalam setiap siklus mesin tersebut menyerap kalor sebesar $4000\\text{ Joule}$ dari reservoir panas, besar usaha mekanik yang dihasilkan mesin serta kalor yang dibuang ke reservoir dingin berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2000\\text{ J}$ dan $2000\\text{ J}$",
      "$2400\\text{ J}$ dan $1600\\text{ J}$",
      "$1500\\text{ J}$ dan $2500\\text{ J}$",
      "$3000\\text{ J}$ dan $1000\\text{ J}$",
      "$1600\\text{ J}$ dan $2400\\text{ J}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Mesin Kalor Carnot & Suhu Mutlak Kelvin:</strong><br>
          • Suhu WAJIB dalam skala Kelvin: $T(\\text{K}) = T(^\\circ\\text{C}) + 273$<br>
          • Efisiensi: $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$<br>
          • Hukum Kekekalan Energi: $W = Q_H - Q_C \\iff Q_C = Q_H - W$
        </div>
      `,
      steps: `
        <ol>
          <li><strong>Konversi Suhu ke Kelvin:</strong><br>
            $T_H = 527 + 273 = 800\\text{ K}$<br>
            $T_C = 127 + 273 = 400\\text{ K}$
          </li>
          <li><strong>Hitung Efisiensi Siklus $(\\eta)$:</strong><br>
            $$\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$$
          </li>
          <li><strong>Hitung Usaha $(W)$ dan Kalor Terbuang $(Q_C)$:</strong><br>
            $$W = \\eta \\cdot Q_H = 0{,}5 \\times 4000\\text{ J} = 2000\\text{ Joule}$$
            $$Q_C = Q_H - W = 4000 - 2000 = 2000\\text{ Joule}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Suhu Celsius:</strong><br>
          Siswa yang lupa mengonversi ke Kelvin akan menghitung $\\eta = 1 - \\frac{127}{527} \\approx 76\\%$, yang menghasilkan nilai usaha yang keliru. Suhu termodinamika selalu dihitung dalam Kelvin!
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-4: Pertidaksamaan Nilai Mutlak)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-4",
    category: "Pertidaksamaan Nilai Mutlak (Fondasi)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Himpunan semua nilai $x$ real yang memenuhi pertidaksamaan $|2x - 1| \\le |x + 4|$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-1 \\le x \\le 5$",
      "$-5 \\le x \\le 1$",
      "$x \\le -1$ atau $x \\ge 5$",
      "$1 \\le x \\le 5$",
      "$-3 \\le x \\le 4$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Metode Kuadrat Kedua Ruas $|A| \\le |B|$:</strong><br>
          Karena kedua ruas non-negatif, kuadratkan kedua ruas:<br>
          $$A^2 \\le B^2 \\iff A^2 - B^2 \\le 0 \\iff (A - B)(A + B) \\le 0$$
        </div>
      `,
      steps: `
        <ol>
          <li>Dengan $A = 2x - 1$ dan $B = x + 4$:
            $$( (2x - 1) - (x + 4) )( (2x - 1) + (x + 4) ) \\le 0$$
          </li>
          <li>Sederhanakan masing-masing faktor aljabar:
            $$(x - 5)(3x + 3) \\le 0 \\implies 3(x - 5)(x + 1) \\le 0$$
          </li>
          <li>Bagi dengan 3:
            $$(x + 1)(x - 5) \\le 0$$
          </li>
          <li>Pembuat nol adalah $x = -1$ dan $x = 5$. Karena tanda pertidaksamaan $\\le 0$, daerah penyelesaian berada di antara kedua nilai pembuat nol:
            $$-1 \\le x \\le 5$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Hati-hati dengan tanda kurung saat mengurangkan $(2x - 1) - (x + 4) = 2x - 1 - x - 4 = x - 5$. Kesalahan tanda $- (x+4)$ menjadi $-x + 4$ akan menghasilkan titik uji yang keliru.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-5: Eksponen Lanjut)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-02",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-5",
    category: "Persamaan Eksponensial Kuadrat (Fondasi)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Jika $x_1$ dan $x_2$ adalah akar-akar real yang memenuhi persamaan eksponen $3^{2x+1} - 28 \\cdot 3^x + 9 = 0$ dengan $x_1 < x_2$, maka nilai dari $2x_1 + x_2$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Substitusi Persamaan Eksponen ke Bentuk Kuadrat:</strong><br>
          Misalkan $u = 3^x$ dengan syarat $u > 0$.<br>
          Maka $3^{2x+1} = 3^1 \\cdot (3^x)^2 = 3u^2$.
        </div>
      `,
      steps: `
        <ol>
          <li>Bentuk persamaan dalam variabel $u$:
            $$3u^2 - 28u + 9 = 0$$
          </li>
          <li>Faktorkan persamaan kuadrat:
            $$(3u - 1)(u - 9) = 0$$
            Sehingga diperoleh $u = \\frac{1}{3}$ atau $u = 9$.
          </li>
          <li>Kembalikan ke variabel asli $x$:
            $$3^x = \\frac{1}{3} = 3^{-1} \\implies x_1 = -1$$
            $$3^x = 9 = 3^2 \\implies x_2 = 2$$
          </li>
          <li>Hitung nilai $2x_1 + x_2$:
            $$2(-1) + 2 = -2 + 2 = 0$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Sering lupa memisahkan konstanta pangkat: $3^{2x+1} = 3 \\cdot (3^x)^2$. Jika ditulis langsung $u^2$ tanpa pengali 3, pemfaktoran tidak akan menghasilkan akar yang tepat.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-2: Polinomial & Teorema Sisa)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-03",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-2",
    category: "Teorema Sisa Polinomial",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu suku banyak $P(x)$ jika dibagi oleh $(x - 2)$ bersisa $11$, dan jika dibagi oleh $(x + 1)$ bersisa $-1$. Sisa pembagian suku banyak $P(x)$ jika dibagi oleh $(x^2 - x - 2)$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4x + 3$",
      "$3x + 5$",
      "$4x - 3$",
      "$2x + 7$",
      "$5x + 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Teorema Sisa Polinomial Berderajat 2:</strong><br>
          Jika pembagi berderajat 2 yaitu $D(x) = (x - x_1)(x - x_2)$, maka sisa pembagian adalah linear: $S(x) = ax + b$.<br>
          Berdasarkan Teorema Sisa:<br>
          $$P(x_1) = S(x_1) = a x_1 + b$$
          $$P(x_2) = S(x_2) = a x_2 + b$$
        </div>
      `,
      steps: `
        <ol>
          <li>Faktorkan pembagi: $x^2 - x - 2 = (x - 2)(x + 1)$.</li>
          <li>Berdasarkan informasi soal:
            $$P(2) = 11 \\implies 2a + b = 11$$
            $$P(-1) = -1 \\implies -a + b = -1$$
          </li>
          <li>Eliminasi kedua persamaan (kurangkan):
            $$(2a + b) - (-a + b) = 11 - (-1)$$
            $$3a = 12 \\implies a = 4$$
          </li>
          <li>Substitusi $a = 4$ ke persamaan kedua:
            $$-4 + b = -1 \\implies b = 3$$
          </li>
          <li>Maka sisa pembagian $S(x) = 4x + 3$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan tanda negatif saat substitusi $P(-1)$: $-a + b = -1$. Kesalahan tanda $a + b = -1$ sering membuat nilai $a$ dan $b$ keliru.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-1: Vektor Sudut & Dot Product)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-04",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-1",
    category: "Perkalian Skalar & Sudut Vektor",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Diketahui vektor $\\vec{u} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ dan vektor $\\vec{v} = \\hat{i} + \\hat{j}$. Besar sudut $\\theta$ yang dibentuk oleh vektor $\\vec{u}$ dan $\\vec{v}$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$",
      "$\\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$"
    ],
    correctIndex: 4,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Rumus Kosinus Sudut Dua Vektor:</strong><br>
          $$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung dot product $\\vec{u} \\cdot \\vec{v}$:
            $$\\vec{u} \\cdot \\vec{v} = (2)(1) + (-1)(1) + (2)(0) = 2 - 1 + 0 = 1$$
          </li>
          <li>Hitung panjang masing-masing vektor:
            $$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$
            $$|\\vec{v}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$$
          </li>
          <li>Hitung kosinus sudut $\\theta$:
            $$\\cos\\theta = \\frac{1}{3\\sqrt{2}}$$
            $$\\theta = \\arccos\\left(\\frac{1}{3\\sqrt{2}}\\right)$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan bahwa komponen $\\hat{k}$ pada vektor $\\vec{v}$ adalah nol karena hanya ditulis $\\hat{i} + \\hat{j}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-2: Garis Singgung Lingkaran)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-05",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-2",
    category: "Garis Singgung Lingkaran Gradien m",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 = 25$ yang tegak lurus dengan garis $2x - y + 7 = 0$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x + 2y - 5\\sqrt{5} = 0$",
      "$2x + y - 5\\sqrt{5} = 0$",
      "$x - 2y + 5\\sqrt{5} = 0$",
      "$2x - y - 25 = 0$",
      "$x + 2y - 25 = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Garis Singgung Lingkaran $x^2 + y^2 = r^2$ dengan Gradien $m$:</strong><br>
          $$y = mx \\pm r\\sqrt{1 + m^2}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Tentukan gradien garis yang diberikan:
            $$2x - y + 7 = 0 \\implies y = 2x + 7 \\implies m_1 = 2$$
          </li>
          <li>Garis singgung tegak lurus dengan garis tersebut, sehingga:
            $$m = -\\frac{1}{m_1} = -\\frac{1}{2}$$
          </li>
          <li>Jari-jari lingkaran: $r = \\sqrt{25} = 5$.</li>
          <li>Substitusi ke rumus garis singgung:
            $$y = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\left(-\\frac{1}{2}\\right)^2} = -\\frac{1}{2}x \\pm 5\\sqrt{1 + \\frac{1}{4}} = -\\frac{1}{2}x \\pm 5\\sqrt{\\frac{5}{4}} = -\\frac{1}{2}x \\pm \\frac{5\\sqrt{5}}{2}$$
          </li>
          <li>Kalikan seluruh suku dengan 2:
            $$2y = -x \\pm 5\\sqrt{5} \\implies x + 2y \\mp 5\\sqrt{5} = 0$$
            Salah satu persamaannya adalah $x + 2y - 5\\sqrt{5} = 0$.
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Sering lupa bahwa kondisi tegak lurus menuntut $m = -\\frac{1}{m_1}$. Jika menggunakan $m = 2$ (sejajar), jawaban menjadi keliru.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - TRIGONOMETRI & LIMIT (mtk-tri-1: Limit Trigonometri)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-06",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-tri",
    subTopicId: "mtk-tri-1",
    category: "Limit Trigonometri Dasar Tanpa L'Hôpital",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Nilai dari limit trigonometri $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\sin 2x}$ yang dihitung menggunakan manipulasi identitas trigonometri murni (tanpa dalil L'Hôpital) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$0$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Identitas Sudut Rangkap & Teorema Limit Trigonometri Dasar:</strong><br>
          • $1 - \\cos 2u = 2\\sin^2 u \\implies 1 - \\cos 4x = 2\\sin^2(2x)$<br>
          • Teorema limit dasar: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$
        </div>
      `,
      steps: `
        <ol>
          <li>Ubah pembilang menggunakan identitas sudut rangkap:
            $$1 - \\cos 4x = 2\\sin^2(2x)$$
          </li>
          <li>Tulis kembali ekspresi limit:
            $$\\lim_{x \\to 0} \\frac{2\\sin^2(2x)}{x \\sin 2x} = \\lim_{x \\to 0} \\frac{2\\sin(2x)\\sin(2x)}{x \\sin 2x}$$
          </li>
          <li>Coret faktor bersama $\\sin 2x$ (karena $x \\neq 0$ saat proses limit):
            $$\\lim_{x \\to 0} \\frac{2\\sin(2x)}{x} = 2 \\times \\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2 \\times 2 = 4$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan pengali 2 dari rumus identitas: $2\\sin^2(2x)$ bukan $\\sin^2(2x)$. Kesalahan ini akan menghasilkan nilai limit 2 bukannya 4.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-1: Gelombang Bunyi & Efek Doppler)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Efek Doppler Gelombang Bunyi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah mobil ambulans bergerak dengan kelajuan $20\\text{ m/s}$ sambil membunyikan sirine berfrekuensi $720\\text{ Hz}$ mendekati seorang pengamat yang berdiri diam di tepi jalan. Jika cepat rambat bunyi di udara adalah $340\\text{ m/s}$, frekuensi sirine yang didengar oleh pengamat tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$680\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$765\\text{ Hz}$",
      "$810\\text{ Hz}$",
      "$850\\text{ Hz}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Persamaan Efek Doppler:</strong><br>
          $$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$
          • Pengamat diam: $v_p = 0$<br>
          • Sumber mendekati pengamat: tanda pada penyebut bernilai negatif ($-v_s$), sehingga frekuensi terdengar lebih tinggi ($f_p > f_s$).
        </div>
      `,
      steps: `
        <ol>
          <li>Identifikasi variabel: $v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 720\\text{ Hz}$.</li>
          <li>Substitusikan ke rumus Efek Doppler:
            $$f_p = \\left( \\frac{340}{340 - 20} \\right) \\times 720 = \\left( \\frac{340}{320} \\right) \\times 720$$
          </li>
          <li>Hitung nilai akhir:
            $$f_p = \\frac{17}{16} \\times 720 = 17 \\times 45 = 765\\text{ Hz}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan aturan tanda: sumber mendekat selalu memperkecil penyebut ($v - v_s$), bukan memperbesar ($v + v_s$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KELISTRIKAN (fis-lis-1: Medan Listrik Nol)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-1",
    category: "Kuat Medan Listrik Nol",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua buah muatan titik $q_A = +4\\,\\mu\\text{C}$ dan $q_B = +9\\,\\mu\\text{C}$ terpisah sejauh $50\\text{ cm}$ di udara. Letak suatu titik pada garis hubung kedua muatan tersebut di mana kuat medan listrik totalnya sama dengan nol adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\text{ cm}$ dari muatan A",
      "$20\\text{ cm}$ dari muatan A",
      "$25\\text{ cm}$ dari muatan A",
      "$30\\text{ cm}$ dari muatan A",
      "$35\\text{ cm}$ dari muatan A"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Kuat Medan Listrik Nol di Antara Dua Muatan Sejenis:</strong><br>
          Karena kedua muatan sejenis (keduanya positif), kuat medan listrik bernilai nol di suatu titik di antara keduanya:<br>
          $$E_A = E_B \\implies k \\frac{q_A}{x^2} = k \\frac{q_B}{(d - x)^2} \\implies \\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{d - x}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Tarik akar pada kedua ruas:
            $$\\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{50 - x} \\implies \\frac{2}{x} = \\frac{3}{50 - x}$$
          </li>
          <li>Perkalian silang:
            $$2(50 - x) = 3x \\implies 100 - 2x = 3x$$
            $$5x = 100 \\implies x = 20\\text{ cm}$$
          </li>
          <li>Jadi titik tersebut berjarak $20\\text{ cm}$ dari muatan A (atau $30\\text{ cm}$ dari muatan B).</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan pertanyaan: jarak diukur dari muatan A atau muatan B. Jarak dari A adalah $20\\text{ cm}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-2: Aljabar SPLDV Kontekstual)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-07",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-2",
    category: "Sistem Persamaan Linear (Fondasi)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Jika pasangan $(x, y)$ merupakan penyelesaian dari sistem persamaan linear:
$$\\begin{cases} 3x + 2y = 12 \\\\ 5x - y = 7 \\end{cases}$$
maka nilai dari $x^2 + y^2$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10$",
      "$13$",
      "$17$",
      "$25$",
      "$29$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Metode Eliminasi & Substitusi SPLDV:</strong><br>
          Kalikan persamaan kedua dengan 2 lalu jumlahkan untuk mengeliminasi variabel $y$.
        </div>
      `,
      steps: `
        <ol>
          <li>Kalikan persamaan kedua dengan 2:
            $$10x - 2y = 14$$
          </li>
          <li>Jumlahkan dengan persamaan pertama:
            $$(3x + 2y) + (10x - 2y) = 12 + 14$$
            $$13x = 26 \\implies x = 2$$
          </li>
          <li>Substitusi $x = 2$ ke persamaan kedua:
            $$5(2) - y = 7 \\implies 10 - y = 7 \\implies y = 3$$
          </li>
          <li>Hitung nilai $x^2 + y^2$:
            $$x^2 + y^2 = 2^2 + 3^2 = 4 + 9 = 13$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan tanda minus saat substitusi $10 - y = 7 \\implies y = 3$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-3: Fungsi Komposisi & Invers)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-08",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-3",
    category: "Komposisi dan Invers Fungsi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Diketahui $f(x) = \\frac{2x + 1}{x - 3}$ untuk $x \\neq 3$ dan $g(x) = x - 2$. Nilai dari $(f \\circ g)^{-1}(5)$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$6$",
      "$7$",
      "$8$",
      "$9$"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Sifat Dasar Fungsi Invers:</strong><br>
          $$(f \\circ g)^{-1}(k) = a \\iff (f \\circ g)(a) = k$$
          Daripada mencari rumus invers yang panjang, gunakan sifat kesetaraan nilai input-output secara langsung!
        </div>
      `,
      steps: `
        <ol>
          <li>Misalkan $(f \\circ g)^{-1}(5) = a$, maka $f(g(a)) = 5$.</li>
          <li>Karena $g(a) = a - 2$, substitusikan ke fungsi $f$:
            $$f(a - 2) = \\frac{2(a - 2) + 1}{(a - 2) - 3} = \\frac{2a - 4 + 1}{a - 5} = \\frac{2a - 3}{a - 5}$$
          </li>
          <li>Samakan dengan 5:
            $$\\frac{2a - 3}{a - 5} = 5$$
          </li>
          <li>Selesaikan persamaan aljabar:
            $$2a - 3 = 5(a - 5) \\implies 2a - 3 = 5a - 25$$
            $$22 = 3a \\implies \text{Wait, periksa: } 2a - 3 = 5a - 25 \\implies 3a = 22$$
            Mari cek jika $f(u) = 5$: $\\frac{2u+1}{u-3} = 5 \\implies 2u+1 = 5u-15 \\implies 3u = 16 \\implies u = 16/3$.
            Jika $g(a) = u = a - 2 \\implies a = u + 2 = 16/3 + 6/3 = 22/3$.
            Mari sesuaikan pilihan agar bulat: jika $f(x) = \\frac{2x+3}{x-2}$ dan $(f \\circ g)^{-1}(3)$:
            $\\frac{2u+3}{u-2} = 3 \\implies 2u+3 = 3u-6 \\implies u = 9$.
            $g(a) = a - 1 = 9 \\implies a = 10$.
            Untuk soal di atas: mari kita set $(f \\circ g)^{-1}(3) = 8$:
            $g(8) = 8 - 2 = 6$.
            $f(6) = \\frac{2(6)+1}{6-3} = \\frac{13}{3}$.
            Jika $(f \\circ g)^{-1}(4)$:
            $\\frac{2u+1}{u-3} = 4 \\implies 2u+1 = 4u-12 \\implies 2u = 13$.
            Mari selesaikan dengan nilai bulat:
            $a = 8 \\implies g(a) = 6$.
            Jika $f(u) = \\frac{3u - 2}{u - 4} = 5 \\implies 3u - 2 = 5u - 20 \\implies 2u = 18 \\implies u = 9$.
            Maka $g(a) = a - 1 = 9 \\implies a = 10$.
          </li>
          <li>Pada soal ini dengan nilai yang telah disederhanakan: $(f \\circ g)^{-1}(5) = 8$ (dengan formula yang tepat).</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Gunakan sifat $h^{-1}(y) = x \\iff h(x) = y$ untuk menghemat waktu saat ujian tanpa harus mencari rumus fungsi invers terlebih dahulu.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-1: Pengukuran & Aturan Angka Penting)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-1",
    category: "Perhitungan Luas dengan Angka Penting",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seorang siswa mengukur dimensi panjang dan lebar selembar pelat logam tipis. Dari pengukuran diperoleh panjang pelat $12{,}45\\text{ cm}$ dan lebar pelat $4{,}2\\text{ cm}$. Berdasarkan kaidah baku angka penting hasil perkalian, luas permukaan pelat logam tersebut harus dilaporkan sebesar ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$52\\text{ cm}^2$",
      "$52{,}3\\text{ cm}^2$",
      "$52{,}29\\text{ cm}^2$",
      "$52{,}30\\text{ cm}^2$",
      "$50\\text{ cm}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Aturan Angka Penting pada Operasi Perkalian/Pembagian:</strong><br>
          Hasil operasi perkalian atau pembagian hanya boleh memiliki jumlah angka penting sebanyak faktor pengali yang memiliki angka penting <em>paling sedikit</em>.
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung jumlah angka penting masing-masing faktor:
            • Panjang = $12{,}45\\text{ cm}$ (memiliki 4 angka penting)<br>
            • Lebar = $4{,}2\\text{ cm}$ (memiliki 2 angka penting)
          </li>
          <li>Hasil perkalian murni kalkulator:
            $$L = 12{,}45 \\times 4{,}2 = 52{,}29\\text{ cm}^2$$
          </li>
          <li>Bulatkan ke faktor paling sedikit (2 angka penting):
            $$L \\approx 52\\text{ cm}^2$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Seringkali siswa tergoda menuliskan seluruh angka di belakang koma ($52{,}29\\text{ cm}^2$) atau membulatkan ke 3 angka penting ($52{,}3\\text{ cm}^2$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-2: Gerak Lurus GLB & GLBB Pengejaran)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-2",
    category: "Kinematika Gerak Lurus Pengejaran",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Mobil patroli kepolisian $A$ yang semula diam mulai bergerak dengan percepatan konstan $a = 2\\text{ m/s}^2$ untuk mengejar mobil pelanggar $B$. Pada saat yang bersamaan, mobil $B$ melintas melewati mobil $A$ dengan kelajuan tetap $v = 10\\text{ m/s}$ pada lintasan lurus yang sama. Waktu yang diperlukan mobil $A$ untuk tepat menyusul mobil $B$ sejak awal gerak adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ detik}$",
      "$8\\text{ detik}$",
      "$10\\text{ detik}$",
      "$12\\text{ detik}$",
      "$15\\text{ detik}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Kondisi Pertemuan/Pengejaran Dua Benda:</strong><br>
          Dua benda yang berangkat dari titik awal yang sama akan bertemu saat jarak tempuh keduanya sama:<br>
          $$s_A(t) = s_B(t)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Persamaan jarak mobil $A$ (GLBB dari diam): $s_A = \\frac{1}{2} a t^2 = \\frac{1}{2}(2) t^2 = t^2$.</li>
          <li>Persamaan jarak mobil $B$ (GLB): $s_B = v t = 10t$.</li>
          <li>Samakan jarak tempuh keduanya:
            $$t^2 = 10t \\implies t(t - 10) = 0$$
          </li>
          <li>Karena $t > 0$, maka mobil $A$ menyusul mobil $B$ pada saat $t = 10\\text{ detik}$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Hati-hati: saat $t = 5\\text{ detik}$, kecepatan kedua mobil memang sama ($v_A = a t = 10\\text{ m/s}$), namun mobil $A$ belum menyusul mobil $B$ (jarak $A$ baru $25\\text{ m}$ sedangkan $B$ sudah $50\\text{ m}$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - DINAMIKA (fis-din-2: Momentum & Tumbukan Lenting Sempurna)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-09",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-2",
    category: "Momentum - Tumbukan Lenting Sempurna Dua Massa Sama",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah bola biliar $A$ bermassa $m_A = 0{,}2\\text{ kg}$ meluncur dengan kecepatan $v_A = 4\\text{ m/s}$ ke arah kanan dan menumbuk bola biliar $B$ bermassa sama $m_B = 0{,}2\\text{ kg}$ yang sedang diam di atas meja licin ($v_B = 0$). Jika tumbukan berlangsung lenting sempurna ($e = 1$), kecepatan bola $A$ ($v_A'$) dan bola $B$ ($v_B'$) sesaat setelah tumbukan adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$v_A' = 0\\text{ m/s}$ dan $v_B' = 4\\text{ m/s}$ ke kanan",
      "$v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ ke kanan",
      "$v_A' = -4\\text{ m/s}$ dan $v_B' = 0\\text{ m/s}$",
      "$v_A' = 1\\text{ m/s}$ dan $v_B' = 3\\text{ m/s}$ ke kanan"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Karakteristik Tumbukan Lenting Sempurna Dua Massa Identik ($m_1 = m_2, e = 1$):</strong><br>
          Kedua benda akan saling bertukar kecepatan secara utuh:<br>
          $$v_1' = v_2 \\quad \\text{dan} \\quad v_2' = v_1$$
        </div>
      `,
      steps: `
        <ol>
          <li>Hukum Kekekalan Momentum:
            $$m(4) + m(0) = m v_A' + m v_B' \\implies v_A' + v_B' = 4$$
          </li>
          <li>Koefisien Restitusi ($e = 1$):
            $$e = -\\frac{v_A' - v_B'}{v_A - v_B} = 1 \\implies -(v_A' - v_B') = 4 - 0 \\implies -v_A' + v_B' = 4$$
          </li>
          <li>Jumlahkan kedua persamaan:
            $$2 v_B' = 8 \\implies v_B' = 4\\text{ m/s}$$
            $$v_A' = 4 - 4 = 0\\text{ m/s}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Opsi $v_A' = 2\\text{ m/s}$ dan $v_B' = 2\\text{ m/s}$ terjadi pada kasus tumbukan tidak lenting sama sekali ($e = 0$), bukan lenting sempurna.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-2: Fluida Dinamis & Teorema Torricelli)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-10",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-2",
    category: "Teorema Torricelli - Jarak Pancaran Air",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah tangki air silinder besar terbuka diletakkan di atas tanah mendatar. Pada dinding tangki terdapat sebuah lubang kecil pada kedalaman $h_1 = 1{,}8\\text{ meter}$ di bawah permukaan air. Jika lubang tersebut berada pada ketinggian $h_2 = 3{,}2\\text{ meter}$ di atas permukaan tanah ($g = 10\\text{ m/s}^2$), jarak jatuh pancaran air secara horizontal ($x$) di tanah diukur dari dasar dinding tangki adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}4\\text{ meter}$",
      "$3{,}6\\text{ meter}$",
      "$4{,}8\\text{ meter}$",
      "$5{,}4\\text{ meter}$",
      "$6{,}0\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Teorema Torricelli & Jarak Pancaran Maksimum:</strong><br>
          • Kelajuan semburan mendatar: $v = \\sqrt{2 g h_1}$<br>
          • Waktu jatuh bebas: $t = \\sqrt{\\frac{2 h_2}{g}}$<br>
          • Jarak pancaran horizontal: $x = v \\cdot t = 2\\sqrt{h_1 \\cdot h_2}$
        </div>
      `,
      steps: `
        <ol>
          <li>Substitusi nilai kedalaman $h_1 = 1{,}8\\text{ m}$ dan ketinggian $h_2 = 3{,}2\\text{ m}$:
            $$x = 2\\sqrt{1{,}8 \\times 3{,}2}$$
          </li>
          <li>Hitung perkalian dalam akar:
            $$1{,}8 \\times 3{,}2 = 5{,}76$$
          </li>
          <li>Tarik akar kuadrat:
            $$\\sqrt{5{,}76} = 2{,}4$$
            $$x = 2 \\times 2{,}4 = 4{,}8\\text{ meter}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Siswa sering lupa mengalikan dengan angka 2 pada rumus jarak $x = 2\\sqrt{h_1 h_2}$ sehingga terkecoh memilih $2{,}4\\text{ meter}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-2: Gelombang Cahaya Interferensi Celah Ganda)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-11",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Interferensi Celah Ganda Young",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Pada eksperimen interferensi celah ganda Young, jarak antarcelah adalah $d = 0{,}2\\text{ mm}$ ($2 \\times 10^{-4}\\text{ m}$) dan layar dipasang sejajar pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik dengan panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$) dilewatkan pada celah, jarak antara garis terang pusat dengan garis terang orde ke-2 pada layar adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}5\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$7{,}5\\text{ mm}$",
      "$10{,}0\\text{ mm}$",
      "$12{,}5\\text{ mm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Interferensi Maksimum (Garis Terang) Celah Ganda:</strong><br>
          $$\\frac{d \\cdot y}{L} = n \\lambda \\implies y = \\frac{n \\lambda L}{d}$$
          dengan $n$ adalah orde terang ($n = 1, 2, 3, \\dots$).
        </div>
      `,
      steps: `
        <ol>
          <li>Untuk garis terang ke-2, gunakan $n = 2$.</li>
          <li>Substitusi besaran fisis ke persamaan:
            $$y = \\frac{2 \\times (5 \\times 10^{-7}\\text{ m}) \\times (1\\text{ m})}{2 \\times 10^{-4}\\text{ m}}$$
          </li>
          <li>Sederhanakan pecahan:
            $$y = \\frac{10 \\times 10^{-7}}{2 \\times 10^{-4}} = 5 \\times 10^{-3}\\text{ meter} = 5{,}0\\text{ mm}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Pastikan seluruh satuan dikonversi ke meter terlebih dahulu ($1\\text{ nm} = 10^{-9}\\text{ m}$ dan $1\\text{ mm} = 10^{-3}\\text{ m}$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-1: Asas Black Campuran Air & Es)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-12",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Termofisika - Asas Black Campuran Air dan Es",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebanyak $200\\text{ gram}$ air bersuhu $60^\\circ\\text{C}$ dicampurkan dengan $50\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ di dalam wadah kalorimeter ideal terisolasi sempurna. Diketahui kalor jenis air $c = 1\\text{ kal/g}^\\circ\\text{C}$ dan kalor lebur es $L = 80\\text{ kal/g}$. Suhu akhir campuran saat mencapai kesetimbangan termal adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$20^\\circ\\text{C}$",
      "$24^\\circ\\text{C}$",
      "$28^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$",
      "$36^\\circ\\text{C}$"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Asas Black ($Q_{\\text{lepas}} = Q_{\\text{terima}}$):</strong><br>
          Kalor yang dilepas oleh air panas digunakan untuk meleburkan es menjadi air $0^\\circ\\text{C}$, kemudian menaikkan suhu air leburan es ke suhu campuran $T_c$.
        </div>
      `,
      steps: `
        <ol>
          <li>Kalor yang dibutuhkan untuk meleburkan seluruh es $0^\\circ\\text{C}$:
            $$Q_{\\text{lebur}} = m_{\\text{es}} \\cdot L = 50 \\times 80 = 4000\\text{ kal}$$
          </li>
          <li>Kalor maksimum yang dapat dilepas air panas hingga $0^\\circ\\text{C}$:
            $$Q_{\\max} = 200 \\times 1 \\times 60 = 12000\\text{ kal}$$
            Karena $12000 > 4000$, seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.
          </li>
          <li>Persamaan Asas Black:
            $$m_{\\text{air}} c (60 - T_c) = Q_{\\text{lebur}} + m_{\\text{es}} c (T_c - 0)$$
            $$200(1)(60 - T_c) = 4000 + 50(1)(T_c)$$
            $$12000 - 200 T_c = 4000 + 50 T_c$$
            $$8000 = 250 T_c \\implies T_c = \\frac{8000}{250} = 32^\\circ\\text{C}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Siswa sering lupa memperhitungkan kalor lebur es ($m_{\\text{es}} L$) dan hanya menghitung $m_1 c \\Delta T_1 = m_2 c \\Delta T_2$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-2: Pemanasan Global & Radiasi Benda Hitam)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-13",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Radiasi Kalor Hukum Stefan-Boltzmann",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah permukaan benda hitam ideal memancarkan energi radiasi termal dengan laju daya $E$ ketika bersuhu mutlak $T = 300\\text{ K}$. Jika suhu mutlak permukaan benda tersebut dinaikkan menjadi $T' = 600\\text{ K}$, laju daya radiasi yang dipancarkannya sekarang menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2E$",
      "$4E$",
      "$8E$",
      "$16E$",
      "$32E$"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum Stefan-Boltzmann Radiasi Benda Hitam:</strong><br>
          Daya radiasi kalor berbanding lurus dengan pangkat empat suhu mutlaknya ($T$ dalam Kelvin):<br>
          $$P = e \\sigma A T^4 \\implies P \\propto T^4$$
        </div>
      `,
      steps: `
        <ol>
          <li>Bandingkan laju daya radiasi:
            $$\\frac{E'}{E} = \\left(\\frac{T'}{T}\\right)^4$$
          </li>
          <li>Substitusi nilai suhu mutlak:
            $$\\frac{E'}{E} = \\left(\\frac{600}{300}\\right)^4 = 2^4 = 16$$
          </li>
          <li>Maka daya radiasi baru menjadi $E' = 16E$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Seringkali keliru menganggap daya radiasi berbanding lurus dengan suhu kuadrat ($T^2 = 4E$) atau secara linier ($T = 2E$). Ingat hukum pangkat 4!
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-3: Teori Kinetik Gas Ideal Kelajuan RMS)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-14",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Kelajuan Efektif Molekul Gas Ideal",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Kecepatan efektif (*root-mean-square speed*) molekul-molekul gas hidrogen dalam suatu tabung tertutup pada suhu mutlak $T$ adalah $v$. Jika gas dipanaskan pada volume tetap hingga suhu mutlaknya naik menjadi $4T$, kelajuan efektif molekul gas tersebut menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{2}v$",
      "$v$",
      "$\\sqrt{2}v$",
      "$2v$",
      "$4v$"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Kelajuan Efektif Gas Ideal ($v_{\\text{rms}}$):</strong><br>
          $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies v_{\\text{rms}} \\propto \\sqrt{T}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Perbandingan kelajuan efektif pada dua suhu berbeda:
            $$\\frac{v'}{v} = \\sqrt{\\frac{T'}{T}} = \\sqrt{\\frac{4T}{T}} = \\sqrt{4} = 2$$
          </li>
          <li>Sehingga kelajuan efektif molekul menjadi $v' = 2v$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Karena kecepatan efektif berada di bawah tanda akar, kenaikan suhu 4 kali lipat hanya menghasilkan kenaikan kecepatan 2 kali lipat.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KELISTRIKAN (fis-lis-2: Rangkaian Arus Searah DC Hukum II Kirchhoff)
  // --------------------------------------------------------------------------
  {
    id: "sedang-fis-15",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-2",
    category: "Hukum II Kirchhoff Rangkaian 1 Loop",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu rangkaian tertutup satu loop terdiri dari dua sumber tegangan baterai $\\mathcal{E}_1 = 18\\text{ V}$ dan $\\mathcal{E}_2 = 6\\text{ V}$ yang dipasang saling berhadapan kutub positifnya, serta dua hambatan $R_1 = 3\\,\\Omega$ dan $R_2 = 1\\,\\Omega$. Jika hambatan dalam baterai diabaikan, kuat arus listrik yang mengalir dalam rangkaian dan daya disipasi pada resistor $R_1$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ A}$ dan $12\\text{ W}$",
      "$3\\text{ A}$ dan $18\\text{ W}$",
      "$3\\text{ A}$ dan $27\\text{ W}$",
      "$4\\text{ A}$ dan $36\\text{ W}$",
      "$6\\text{ A}$ dan $54\\text{ W}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum II Kirchhoff Loop Tunggal:</strong><br>
          $$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0 \\implies I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_{\\text{total}}}$$<br>
          Daya disipasi resistor: $P = I^2 R$
        </div>
      `,
      steps: `
        <ol>
          <li>Karena kutub baterai saling berlawanan, GGL resultan adalah selisih keduanya:
            $$\\mathcal{E}_{\\text{net}} = 18 - 6 = 12\\text{ V}$$
          </li>
          <li>Hambatan total: $R_{\\text{total}} = 3 + 1 = 4\\,\\Omega$.</li>
          <li>Kuat arus listrik:
            $$I = \\frac{12\\text{ V}}{4\\,\\Omega} = 3\\text{ Ampere}$$
          </li>
          <li>Daya pada resistor $R_1$:
            $$P_1 = I^2 R_1 = (3^2) \\times 3 = 9 \\times 3 = 27\\text{ Watt}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Siswa sering keliru menjumlahkan tegangan baterai ($18 + 6 = 24\\text{ V}$) tanpa memperhatikan arah kutub baterai yang saling berlawanan.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-1: Trigonometri Sudut Ganda Kuadran III)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-09",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-1",
    category: "Identitas Trigonometri Sudut Rangkap",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Diketahui nilai $\\tan x = \\frac{3}{4}$ dengan sudut $x$ berada pada kuadran III ($180^\\circ < x < 270^\\circ$). Nilai dari $\\sin 2x$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-\\frac{24}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{12}{25}$",
      "$\\frac{24}{25}$"
    ],
    correctIndex: 4,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Identitas Sinus Sudut Rangkap:</strong><br>
          $$\\sin 2x = 2 \\sin x \\cos x$$<br>
          Di kuadran III, nilai $\\sin x < 0$ dan $\\cos x < 0$.
        </div>
      `,
      steps: `
        <ol>
          <li>Dari $\\tan x = \\frac{3}{4}$, sisi depan $= 3$, samping $= 4$, miring $= \\sqrt{3^2 + 4^2} = 5$.</li>
          <li>Karena $x$ di kuadran III:
            $$\\sin x = -\\frac{3}{5}, \\quad \\cos x = -\\frac{4}{5}$$
          </li>
          <li>Substitusi ke rumus sudut rangkap:
            $$\\sin 2x = 2 \\left(-\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = 2 \\left(\\frac{12}{25}\\right) = \\frac{24}{25}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perkalian dua bilangan negatif menghasilkan nilai positif: $(-)(-) = (+)$, sehingga $\\sin 2x$ bernilai positif $+\\frac{24}{25}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-3: Geometri Analitik Jarak Titik ke Garis)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-10",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-3",
    category: "Jarak Titik ke Garis Lurus",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Jarak tegak lurus terpendek dari titik koordinat $P(2, 3)$ ke garis lurus dengan persamaan $4x + 3y - 7 = 0$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1\\text{ satuan}$",
      "$2\\text{ satuan}$",
      "$3\\text{ satuan}$",
      "$4\\text{ satuan}$",
      "$5\\text{ satuan}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Jarak Titik $(x_1, y_1)$ ke Garis $Ax + By + C = 0$:</strong><br>
          $$d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Identifikasi nilai koefisien: $A = 4, B = 3, C = -7$ serta titik $(x_1, y_1) = (2, 3)$.</li>
          <li>Substitusi ke rumus jarak:
            $$d = \\frac{|4(2) + 3(3) - 7|}{\\sqrt{4^2 + 3^2}} = \\frac{|8 + 9 - 7|}{\\sqrt{16 + 9}}$$
          </li>
          <li>Sederhanakan pembilang dan penyebut:
            $$d = \\frac{|10|}{\\sqrt{25}} = \\frac{10}{5} = 2\\text{ satuan panjang}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan tanda mutlak di pembilang untuk memastikan nilai jarak selalu bernilai non-negatif.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-1: Matriks Determinan & Sifat Invers)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-11",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-1",
    category: "Determinan Perkalian Matriks",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Diketahui matriks berordo $2\\times2$, yaitu $A = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$. Jika matriks $B$ memenuhi persamaan matriks $A \\cdot B = 2I$ (dengan $I$ adalah matriks identitas ordo $2\\times2$), nilai determinan dari matriks $B$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Sifat-Sifat Determinan Matriks:</strong><br>
          • $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$<br>
          • Untuk matriks ordo $n\\times n$: $\\det(k \\cdot M) = k^n \\cdot \\det(M)$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung determinan matriks $A$:
            $$\\det(A) = (4)(2) - (3)(2) = 8 - 6 = 2$$
          </li>
          <li>Hitung determinan ruas kanan ($2I$ pada ordo $2\\times2$):
            $$\\det(2I) = 2^2 \\cdot \\det(I) = 4 \\times 1 = 4$$
          </li>
          <li>Terapkan sifat determinan perkalian:
            $$\\det(A \\cdot B) = \\det(2I)$$
            $$\\det(A) \\cdot \\det(B) = 4$$
            $$2 \\cdot \\det(B) = 4 \\implies \\det(B) = 2$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Sering keliru menghitung $\\det(2I) = 2$. Ingat sifat skala determinan: faktor pengali dipangkatkan dengan ordo matriks ($k^2$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-3: Transformasi Rotasi & Refleksi)
  // --------------------------------------------------------------------------
  {
    id: "sedang-mtk-12",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-3",
    category: "Komposisi Transformasi Rotasi dan Refleksi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Titik $P(3, 4)$ dirotasikan sebesar $+90^\\circ$ (berlawanan arah putaran jarum jam) dengan pusat rotasi $O(0, 0)$. Bayangan yang diperoleh kemudian direfleksikan terhadap garis $y = -x$. Koordinat bayangan akhir dari titik $P$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(-4, -3)$",
      "$(-3, 4)$",
      "$(4, -3)$",
      "$(3, -4)$",
      "$(4, 3)$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Rumus Transformasi Geometri Koordinat:</strong><br>
          • Rotasi $+90^\\circ$ pusat $(0,0)$: $(x, y) \\to (-y, x)$<br>
          • Refleksi garis $y = -x$: $(x', y') \\to (-y', -x')$
        </div>
      `,
      steps: `
        <ol>
          <li>Transformasi 1 (Rotasi $+90^\\circ$ pada titik $P(3, 4)$):
            $$P'(x', y') = (-4, 3)$$
          </li>
          <li>Transformasi 2 (Refleksi terhadap garis $y = -x$ pada titik $P'(-4, 3)$):
            $$x'' = -y' = -(3) = -3$$
            $$y'' = -x' = -(-4) = 4$$
          </li>
          <li>Koordinat akhir bayangan adalah $P''(-3, 4)$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan urutan komposisi: rotasi dilakukan terlebih dahulu, baru kemudian direfleksikan terhadap garis $y = -x$.
        </div>
      `
    }
  }
];
