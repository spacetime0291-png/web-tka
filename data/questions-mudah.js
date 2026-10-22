/**
 * TKA Platform Question Bank: TIER 1 - MUDAH
 * Focus: Single-step concept recall, instrument reading, direct formula application.
 */

window.QUESTIONS_MUDAH = [
  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-1: Pengukuran)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-1",
    category: "Pengukuran & Angka Penting",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Hasil pengukuran ketebalan pelat logam menggunakan jangka sorong menunjukkan skala utama $3{,}1\\text{ cm}$ dan garis nonius ke-7 berimpit tepat dengan garis skala utama. Jika ketelitian (skala terkecil nonius) jangka sorong tersebut adalah $0{,}01\\text{ cm}$, maka pelaporan hasil pengukuran yang benar beserta nilai ketidakpastian mutlaknya $(\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(3{,}17 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}17 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}14 \\pm 0{,}005)\\text{ cm}$",
      "$(3{,}70 \\pm 0{,}01)\\text{ cm}$",
      "$(3{,}27 \\pm 0{,}05)\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Pembacaan Jangka Sorong & Ketidakpastian Mutlak:</strong><br>
          • Hasil bacaan: $x = \\text{Skala Utama} + (\\text{Skala Nonius} \\times \\text{Ketelitian})$<br>
          • Nilai ketidakpastian pengukuran tunggal: $\\Delta x = \\frac{1}{2} \\times \\text{skala terkecil}$<br>
          • Format pelaporan baku: $x \\pm \\Delta x$
        </div>
      `,
      steps: `
        <ol>
          <li><strong>Menghitung Nilai Bacaan $(x)$:</strong><br>
            $$x = 3{,}1\\text{ cm} + (7 \\times 0{,}01\\text{ cm}) = 3{,}1\\text{ cm} + 0{,}07\\text{ cm} = 3{,}17\\text{ cm}$$
          </li>
          <li><strong>Menghitung Ketidakpastian Mutlak $(\\Delta x)$:</strong><br>
            $$\\Delta x = \\frac{1}{2} \\times 0{,}01\\text{ cm} = 0{,}005\\text{ cm}$$
          </li>
          <li><strong>Pelaporan Hasil Pengukuran:</strong><br>
            $$(x \\pm \\Delta x) = (3{,}17 \\pm 0{,}005)\\text{ cm}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Pengukuran:</strong><br>
          Jangan lupa membagi ketelitian alat dengan 2 untuk memperoleh ketidakpastian mutlak tunggal $\\Delta x$. Seringkali siswa langsung menuliskan $3{,}17 \\pm 0{,}01\\text{ cm}$ padahal ketidakpastiannya adalah setengah skala terkecil.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-2: Gerak Lurus)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-2",
    category: "Gerak Lurus Beraturan (GLB/GLBB)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah mobil bergerak lurus dengan kecepatan awal $10\\text{ m/s}$ kemudian dipercepat secara konstan sebesar $2\\text{ m/s}^2$ selama $5\\text{ detik}$. Jarak total yang ditempuh mobil selama selang waktu tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ meter}$",
      "$65\\text{ meter}$",
      "$75\\text{ meter}$",
      "$85\\text{ meter}$",
      "$100\\text{ meter}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Rumus Kinematika GLBB Dipercepat:</strong><br>
          $$s = v_0 t + \\frac{1}{2} a t^2$$
          dengan $v_0$ kecepatan awal, $a$ percepatan, dan $t$ selang waktu.
        </div>
      `,
      steps: `
        <ol>
          <li><strong>Identifikasi Variabel:</strong><br>
            $v_0 = 10\\text{ m/s}$, $a = 2\\text{ m/s}^2$, $t = 5\\text{ s}$.
          </li>
          <li><strong>Substitusi ke Persamaan Jarak GLBB:</strong><br>
            $$s = (10)(5) + \\frac{1}{2}(2)(5^2) = 50 + 25 = 75\\text{ meter}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Kesalahan Umum:</strong> Lupa memangkatkan waktu $t^2 = 25$ atau lupa mengalikan dengan $\\frac{1}{2}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - DINAMIKA (fis-din-1: Hubungan Gaya dan Gerak)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-1",
    category: "Hukum II Newton",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah balok bermassa $4\\text{ kg}$ terletak di atas lantai horizontal licin tanpa gesekan. Jika balok ditarik oleh gaya konstan $F = 20\\text{ N}$ searah bidang lantai, besar percepatan gerak balok tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$5\\text{ m/s}^2$",
      "$8\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum II Newton:</strong><br>
          $$\\Sigma F = m a \\implies a = \\frac{\\Sigma F}{m}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Karena lantai licin sempurna ($f_k = 0$), gaya penggerak total $\\Sigma F = 20\\text{ N}$.</li>
          <li>$$a = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan apakah ada koefisien gesekan atau lantai dinyatakan licin sempurna.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-1: Fluida Statis)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-1",
    category: "Tekanan Hidrostatis",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seorang penyelam berada pada kedalaman $8\\text{ meter}$ di bawah permukaan danau air tawar (massa jenis air $\\rho = 1000\\text{ kg/m}^3$). Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar tekanan hidrostatis yang dialami penyelam tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\times 10^3\\text{ Pa}$",
      "$1{,}8\\times 10^4\\text{ Pa}$",
      "$8\\times 10^4\\text{ Pa}$",
      "$1{,}8\\times 10^5\\text{ Pa}$",
      "$8\\times 10^5\\text{ Pa}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Tekanan Hidrostatis Murni:</strong><br>
          $$P_h = \\rho g h$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$P_h = (1000\\text{ kg/m}^3)(10\\text{ m/s}^2)(8\\text{ m}) = 80.000\\text{ Pa} = 8\\times 10^4\\text{ Pa}$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Soal menanyakan <em>tekanan hidrostatis</em>, bukan tekanan mutlak ($P_{\\text{mutlak}} = P_0 + P_h$). Jadi tekanan atmosfer $P_0$ tidak dijumlahkan.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KELISTRIKAN (fis-lis-1: Listrik Statis)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-1",
    category: "Hukum Coulomb",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dua buah muatan titik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta elektrostatis $k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar gaya tolak-menolak antara kedua muatan tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}3\\text{ N}$",
      "$0{,}6\\text{ N}$",
      "$1{,}2\\text{ N}$",
      "$3{,}0\\text{ N}$",
      "$6{,}0\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum Coulomb:</strong><br>
          $$F = k \\frac{|q_1 q_2|}{r^2}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Konversi satuan ke SI: $q_1 = 2\\times 10^{-6}\\text{ C}$, $q_2 = 3\\times 10^{-6}\\text{ C}$, $r = 30\\text{ cm} = 0{,}3\\text{ m} = 3\\times 10^{-1}\\text{ m}$.</li>
          <li>$$F = (9\\times 10^9) \\frac{(2\\times 10^{-6})(3\\times 10^{-6})}{(3\\times 10^{-1})^2} = (9\\times 10^9) \\frac{6\\times 10^{-12}}{9\\times 10^{-2}} = 0{,}6\\text{ N}$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Sering lupa mengubah satuan $\\text{cm}$ ke $\\text{meter}$ atau $\\mu\\text{C}$ ke $\\text{Coulomb}$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-1: Trigonometri Analitik Dasar)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-01",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-1",
    category: "Trigonometri Dasar (Fondasi)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Diketahui suatu sudut lancip $\\alpha$ pada kuadran I memenuhi $\\sin\\alpha = \\frac{3}{5}$. Nilai dari $\\cos 2\\alpha$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{24}{25}$",
      "$\\frac{16}{25}$",
      "$\\frac{7}{25}$",
      "$-\\frac{7}{25}$",
      "$\\frac{9}{25}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Rumus Sudut Rangkap Kosinus:</strong><br>
          $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1 = \\cos^2\\alpha - \\sin^2\\alpha$$
        </div>
      `,
      steps: `
        <ol>
          <li>Gunakan bentuk langsung dengan sinus:
            $$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$$
          </li>
          <li>Substitusi $\\sin\\alpha = \\frac{3}{5}$:
            $$\\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan tertukar antara rumus $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$ dengan $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$. Pilihan A (24/25) adalah nilai $\\sin 2\\alpha$!
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-2: Aljabar Elementer)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-02",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-2",
    category: "Pemfaktoran Kuadrat (Fondasi)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Akar-akar penyelesaian dari persamaan kuadrat $2x^2 - 7x + 3 = 0$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x = 3$ atau $x = \\frac{1}{2}$",
      "$x = -3$ atau $x = -\\frac{1}{2}$",
      "$x = 2$ atau $x = \\frac{3}{2}$",
      "$x = 1$ atau $x = \\frac{7}{2}$",
      "$x = 6$ atau $x = 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Pemfaktoran Persamaan Kuadrat $ax^2 + bx + c = 0$:</strong><br>
          Cari dua bilangan yang hasil kalinya $a \\times c = 2 \\times 3 = 6$ dan jumlahnya $b = -7$. Bilangan tersebut adalah $-6$ dan $-1$.
        </div>
      `,
      steps: `
        <ol>
          <li>Uraikan suku tengah:
            $$2x^2 - 6x - x + 3 = 0$$
          </li>
          <li>Faktorkan secara berpasangan:
            $$2x(x - 3) - 1(x - 3) = 0 \\implies (2x - 1)(x - 3) = 0$$
          </li>
          <li>Maka akarnya:
            $$2x - 1 = 0 \\implies x = \\frac{1}{2} \\quad \\text{atau} \\quad x - 3 = 0 \\implies x = 3$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan tanda negatif saat pemfaktoran agar tidak terbalik menjadi negatif pada hasil akhir.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-3: Geometri Analitik Bidang)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-03",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-3",
    category: "Garis Lurus & Gradien (Fondasi)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Gradien garis yang tegak lurus dengan garis $3x - 6y + 12 = 0$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2$",
      "$-\\frac{1}{2}$",
      "$\\frac{1}{2}$",
      "$2$",
      "$-3$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Sifat Gradien Dua Garis Tegak Lurus:</strong><br>
          $$m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Ubah persamaan garis ke bentuk eksplisit $y = mx + c$:
            $$3x - 6y + 12 = 0 \\implies 6y = 3x + 12 \\implies y = \\frac{1}{2}x + 2$$
            Jadi, gradien garis pertama $m_1 = \\frac{1}{2}$.
          </li>
          <li>Garis yang tegak lurus memiliki gradien:
            $$m_2 = -\\frac{1}{m_1} = -\\frac{1}{1/2} = -2$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Pilihan C (1/2) adalah gradien garis yang <em>sejajar</em>, bukan tegak lurus.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-5: Eksponen & Logaritma)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-04",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-5",
    category: "Sifat Dasar Logaritma (Fondasi)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Nilai dari ekspresi logaritma $^2\\log 24 + ^2\\log 6 - ^2\\log 9$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$",
      "$6$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Sifat Operasi Logaritma Basis Sama:</strong><br>
          $$^a\\log b + ^a\\log c = ^a\\log(b \\cdot c)$$
          $$^a\\log b - ^a\\log c = ^a\\log\\left(\\frac{b}{c}\\right)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Gabungkan numerus dengan basis 2:
            $$^2\\log\\left( \\frac{24 \\times 6}{9} \\right)$$
          </li>
          <li>Sederhanakan pecahan di dalam numerus:
            $$\\frac{144}{9} = 16$$
          </li>
          <li>Hitung nilai logaritma:
            $$^2\\log 16 = ^2\\log(2^4) = 4$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Pastikan basis logaritma sama sebelum menggabungkan numerus.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-1: Matriks)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-05",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-1",
    category: "Determinan Matriks 2x2",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Diberikan matriks $A = \\begin{pmatrix} 4 & -2 \\\\ 3 & 5 \\end{pmatrix}$. Nilai determinan dari matriks $A$ $(\\det(A))$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$14$",
      "$26$",
      "$20$",
      "$-26$",
      "$18$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Determinan Matriks Ordo 2x2:</strong><br>
          $$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$\\det(A) = (4)(5) - (-2)(3) = 20 - (-6) = 20 + 6 = 26$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Awas tanda minus ganda: $-(-6) = +6$. Sering terjadi kesalahan menghitung $20 - 6 = 14$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - TRIGONOMETRI & LIMIT (mtk-tri-1: Limit Fungsi)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-06",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-tri",
    subTopicId: "mtk-tri-1",
    category: "Limit Aljabar Pemfaktoran",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Nilai dari limit aljabar $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ (tanpa dalil L'Hôpital) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0$",
      "$3$",
      "$6$",
      "$9$",
      "$\\infty$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Limit Aljabar Bentuk Tak Tentu $\\frac{0}{0}$:</strong><br>
          Jika substitusi langsung menghasilkan $\\frac{0}{0}$, faktorkan pembilang dan coret faktor pembuat nol $(x - c)$.
        </div>
      `,
      steps: `
        <ol>
          <li>Substitusi $x = 3 \\implies \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}$ (Bentuk tak tentu).</li>
          <li>Faktorkan selisih kuadrat:
            $$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3}$$
          </li>
          <li>Eliminasi faktor pembuat nol $(x - 3)$:
            $$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan langsung menyatakan limit bernilai 0 karena pembilang bernilai 0 saat substitusi awal.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - DINAMIKA (fis-din-2: Momentum dan Impuls)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-2",
    category: "Momentum Linier",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah bola sepak bermassa $0{,}5\\text{ kg}$ ditendang sehingga bergerak dengan kecepatan $20\\text{ m/s}$. Besar momentum linier bola tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ kg}\\cdot\\text{m/s}$",
      "$10\\text{ kg}\\cdot\\text{m/s}$",
      "$15\\text{ kg}\\cdot\\text{m/s}$",
      "$20\\text{ kg}\\cdot\\text{m/s}$",
      "$40\\text{ kg}\\cdot\\text{m/s}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Definisi Momentum Linier:</strong><br>
          $$p = m \\cdot v$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$p = (0{,}5\\text{ kg})(20\\text{ m/s}) = 10\\text{ kg}\\cdot\\text{m/s}$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Pastikan satuan massa dalam kilogram (kg) dan kecepatan dalam meter per detik (m/s).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-1: Gelombang Bunyi)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Cepat Rambat Bunyi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu sumber bunyi menghasilkan gelombang bunyi dengan frekuensi $680\\text{ Hz}$. Jika cepat rambat bunyi di udara pada saat itu adalah $340\\text{ m/s}$, maka panjang gelombang bunyi tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}25\\text{ meter}$",
      "$0{,}50\\text{ meter}$",
      "$1{,}00\\text{ meter}$",
      "$2{,}00\\text{ meter}$",
      "$4{,}00\\text{ meter}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Persamaan Dasar Cepat Rambat Gelombang:</strong><br>
          $$v = \\lambda f \\implies \\lambda = \\frac{v}{f}$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$\\lambda = \\frac{340\\text{ m/s}}{680\\text{ Hz}} = 0{,}5\\text{ meter}$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan membalik pembagian menjadi $f/v = 2\\text{ m}$. Rumus yang benar adalah $v/f$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - GELOMBANG (fis-gel-2: Gelombang Cahaya & Cermin)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Cermin Cekung",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah benda diletakkan pada jarak $15\\text{ cm}$ di depan cermin cekung yang memiliki jarak fokus $10\\text{ cm}$. Jarak bayangan yang terbentuk dari cermin adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$15\\text{ cm}$",
      "$25\\text{ cm}$",
      "$30\\text{ cm}$",
      "$45\\text{ cm}$",
      "$60\\text{ cm}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Persamaan Cermin Cekung (Fokus Positif):</strong><br>
          $$\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$\\frac{1}{s'} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30}$$</li>
          <li>$$s' = 30\\text{ cm}$$ (bayangan nyata di depan cermin).</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Ingat cermin cekung memiliki fokus positif ($+10\\text{ cm}$), sedangkan cermin cembung memiliki fokus negatif.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-1: Kalor)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-09",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Kalor Pemanasan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebanyak $2\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $70^\\circ\\text{C}$. Jika kalor jenis air $c = 4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C})$, jumlah kalor yang diserap air tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$105\\text{ kJ}$",
      "$210\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$588\\text{ kJ}$",
      "$840\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Rumus Kalor Perubahan Suhu:</strong><br>
          $$Q = m c \\Delta T$$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung perubahan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li>
          <li>$$Q = (2\\text{ kg})(4200\\text{ J}/(\\text{kg}\\cdot^\\circ\\text{C}))(50^\\circ\\text{C}) = 420.000\\text{ J} = 420\\text{ kJ}$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan $\\Delta T$ adalah selisih suhu akhir dikurang suhu awal ($50$), bukan suhu akhir ($70$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-2: Pemanasan Global)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-10",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Efek Rumah Kaca",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Pemanasan global secara fisis terjadi karena gas-gas rumah kaca di atmosfer bumi menyerap dan memancarkan kembali sebagian radiasi elektromagnetik yang dipancarkan oleh permukaan bumi. Spektrum gelombang elektromagnetik yang diserap secara dominan oleh gas rumah kaca tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Sinar Gamma",
      "Sinar Ultraviolet",
      "Cahaya Tampak",
      "Radiasi Inframerah (Thermal)",
      "Sinar-X"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Fisika Efek Rumah Kaca:</strong><br>
          Permukaan bumi menyerap cahaya tampak dari matahari dan meradiasikannya kembali sebagai radiasi termal bergelombang panjang yaitu <em>radiasi inframerah</em>, yang kemudian diserap oleh molekul gas rumah kaca ($CO_2, CH_4, H_2O$) sehingga memerangkap panas di troposfer.
        </div>
      `,
      steps: `
        <ol>
          <li>Radiasi matahari yang masuk didominasi cahaya tampak dan UV dekat.</li>
          <li>Radiasi bumi yang dipancarkan kembali adalah radiasi inframerah termal.</li>
          <li>Gas rumah kaca memiliki pita serapan getaran molekul pada spektrum inframerah.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan tertukar dengan lapisan ozon di stratosfer yang menyerap radiasi ultraviolet (UV). Efek rumah kaca berkaitan dengan penyerapan radiasi inframerah.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-3: Gas Ideal)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-11",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Persamaan Gas Ideal",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu gas ideal berada di dalam wadah tertutup bervolume $V$ dengan tekanan $P$ dan suhu mutlak $T$. Jika gas tersebut mengalami pemanasan pada volume tetap (isokhorik) sehingga suhu mutlaknya naik menjadi $3T$, maka tekanan gas sekarang menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{3}P$",
      "$P$",
      "$\\sqrt{3}P$",
      "$3P$",
      "$9P$"
    ],
    correctIndex: 3,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hukum Gay-Lussac (Proses Isokhorik/Volume Konstan):</strong><br>
          $$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Karena $V$ tetap, tekanan berbanding lurus dengan suhu mutlak ($P \\propto T$).</li>
          <li>$$P_2 = P \\times \\frac{3T}{T} = 3P$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan hukum kesebandingan lurus vs terbalik. Pada proses isotermal $P_1 V_1 = P_2 V_2$ (berbanding terbalik), sedangkan pada isokhorik $P/T = \\text{konstan}$ (berbanding lurus).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-3: Domain Alami Fungsi)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-07",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-3",
    category: "Domain Fungsi Bentuk Akar",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Daerah asal alami (domain) dari fungsi real $f(x) = \\sqrt{2x - 8}$ adalah himpunan semua $x \\in \\mathbb{R}$ yang memenuhi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$x \\ge 4$",
      "$x > 4$",
      "$x \\le 4$",
      "$x \\ge 8$",
      "$x \\in \\mathbb{R}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Syarat Terdefinisi Bentuk Akar Real:</strong><br>
          Fungsi $\\sqrt{g(x)}$ terdefinisi pada bilangan real jika dan hanya jika radikan tidak negatif:<br>
          $$g(x) \\ge 0$$
        </div>
      `,
      steps: `
        <ol>
          <li>$$2x - 8 \\ge 0$$</li>
          <li>$$2x \\ge 8 \\implies x \\ge 4$$</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Karena akar berada di pembilang (bukan penyebut pecahan), nilai 0 diperbolehkan (sehingga menggunakan $\\ge 4$, bukan $> 4$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KINEMATIKA (fis-kin-3: Gerak Lengkung & Parabola)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-12",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-kin",
    subTopicId: "fis-kin-3",
    category: "Gerak Parabola & Titik Tertinggi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah bola ditendang dari permukaan tanah dengan kecepatan awal $v_0 = 40\\text{ m/s}$ dan sudut elevasi $\\theta = 30^\\circ$ terhadap bidang datar ($\\sin 30^\\circ = 0{,}5$). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, waktu yang dibutuhkan bola untuk mencapai titik tertinggi lintasannya adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1{,}0\\text{ detik}$",
      "$2{,}0\\text{ detik}$",
      "$3{,}0\\text{ detik}$",
      "$4{,}0\\text{ detik}$",
      "$5{,}0\\text{ detik}$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Waktu Mencapai Titik Tertinggi Gerak Parabola:</strong><br>
          Pada titik puncak, komponen kecepatan vertikal bernilai nol ($v_y = 0$).<br>
          $$t_h = \\frac{v_0 \\sin\\theta}{g}$$
        </div>
      `,
      steps: `
        <ol>
          <li>Identifikasi besaran: $v_0 = 40\\text{ m/s}$, $\\sin 30^\\circ = 0{,}5$, $g = 10\\text{ m/s}^2$.</li>
          <li>Substitusi ke rumus waktu puncak:
            $$t_h = \\frac{40 \\times 0{,}5}{10} = \\frac{20}{10} = 2{,}0\\text{ detik}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan tertukar dengan waktu total di udara ($t_{\\text{total}} = 2 t_h = 4{,}0\\text{ detik}$). Soal hanya menanyakan waktu menuju titik tertinggi.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - FLUIDA (fis-flu-2: Fluida Dinamis & Persamaan Kontinuitas)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-13",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-flu",
    subTopicId: "fis-flu-2",
    category: "Persamaan Kontinuitas & Debit Fluida",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Minyak mengalir melalui pipa mendatar yang memiliki luas penampang $A_1 = 20\\text{ cm}^2$ dengan kelajuan $v_1 = 2\\text{ m/s}$. Jika pipa tersebut menyempit hingga luas penampangnya menjadi $A_2 = 5\\text{ cm}^2$, kelajuan aliran minyak pada penampang sempit ($v_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$10\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Persamaan Kontinuitas Fluida Inkompresibel:</strong><br>
          Debit aliran konstan di setiap penampang pipa:<br>
          $$Q_1 = Q_2 \\implies A_1 v_1 = A_2 v_2$$
        </div>
      `,
      steps: `
        <ol>
          <li>Substitusi nilai penampang dan kelajuan:
            $$20\\text{ cm}^2 \\times 2\\text{ m/s} = 5\\text{ cm}^2 \\times v_2$$
          </li>
          <li>Hitung nilai $v_2$:
            $$40 = 5 v_2 \\implies v_2 = \\frac{40}{5} = 8\\text{ m/s}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Karena satuan penampang kedua sisi sama-sama $\\text{cm}^2$, tidak perlu mengonversi ke $\\text{m}^2$ asalkan satuannya konsisten.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KALOR & TERMODINAMIKA (fis-ter-4: Usaha Luar Proses Isobarik)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-14",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Termodinamika - Usaha Gas Isobarik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu gas ideal berada di dalam silinder berpenghisap pada tekanan tetap $P = 2 \\times 10^5\\text{ N/m}^2$. Gas tersebut memuai secara isobarik sehingga volumenya bertambah dari $V_1 = 1{,}5\\text{ m}^3$ menjadi $V_2 = 2{,}5\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$100\\text{ kJ}$",
      "$150\\text{ kJ}$",
      "$200\\text{ kJ}$",
      "$250\\text{ kJ}$",
      "$300\\text{ kJ}$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Usaha Luar Gas pada Proses Isobarik (Tekanan Tetap):</strong><br>
          $$W = P \\cdot \\Delta V = P(V_2 - V_1)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung perubahan volume: $\\Delta V = 2{,}5\\text{ m}^3 - 1{,}5\\text{ m}^3 = 1{,}0\\text{ m}^3$.</li>
          <li>Hitung usaha luar:
            $$W = (2 \\times 10^5\\text{ N/m}^2)(1{,}0\\text{ m}^3) = 2 \\times 10^5\\text{ Joule} = 200\\text{ kJ}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan konversi satuan dari Joule ke kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // FISIKA - KELISTRIKAN (fis-lis-2: Rangkaian Arus Searah DC Campuran)
  // --------------------------------------------------------------------------
  {
    id: "mudah-fis-15",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subTopicId: "fis-lis-2",
    category: "Rangkaian Resistor Campuran Seri-Paralel",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Tiga buah resistor masing-masing bernilai $R_1 = 6\\,\\Omega$, $R_2 = 12\\,\\Omega$, dan $R_3 = 4\\,\\Omega$ dirangkai. Resistor $R_1$ dan $R_2$ dipasang secara paralel, kemudian kombinasi paralel tersebut dihubungkan seri dengan resistor $R_3$. Hambatan pengganti total rangkaian tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\,\\Omega$",
      "$6\\,\\Omega$",
      "$8\\,\\Omega$",
      "$10\\,\\Omega$",
      "$22\\,\\Omega$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Hambatan Pengganti Seri & Paralel:</strong><br>
          • Paralel dua resistor: $R_p = \\frac{R_1 R_2}{R_1 + R_2}$<br>
          • Seri gabungan: $R_{\\text{total}} = R_p + R_3$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung hambatan paralel $R_1$ dan $R_2$:
            $$R_p = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\,\\Omega$$
          </li>
          <li>Jumlahkan secara seri dengan $R_3$:
            $$R_{\\text{total}} = R_p + R_3 = 4\\,\\Omega + 4\\,\\Omega = 8\\,\\Omega$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Jangan langsung menjumlahkan seluruh resistor ($6 + 12 + 4 = 22\\,\\Omega$), perhatikan hubungan paralel antara $R_1$ dan $R_2$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - BAB FUNDAMENTAL (mtk-fun-4: Pertidaksamaan Nilai Mutlak)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-08",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-fun",
    subTopicId: "mtk-fun-4",
    category: "Pertidaksamaan Nilai Mutlak Satu Variabel",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Himpunan semua nilai real $x$ yang memenuhi pertidaksamaan nilai mutlak $|2x - 3| < 7$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-2 < x < 5$",
      "$-5 < x < 2$",
      "$x < -2 \\text{ atau } x > 5$",
      "$-2 \\le x \\le 5$",
      "$-5 < x < 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Sifat Dasar Pertidaksamaan Nilai Mutlak:</strong><br>
          $$|u| < k \\iff -k < u < k \\quad (k > 0)$$
        </div>
      `,
      steps: `
        <ol>
          <li>Terapkan sifat nilai mutlak:
            $$-7 < 2x - 3 < 7$$
          </li>
          <li>Tambahkan 3 pada seluruh ruas:
            $$-7 + 3 < 2x < 7 + 3 \\implies -4 < 2x < 10$$
          </li>
          <li>Bagi dengan 2:
            $$-2 < x < 5$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Tanda pertidaksamaan pada soal adalah $<$ murni (tanpa sama dengan), sehingga batas penyelesaian juga tidak memuat tanda sama dengan.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - ALJABAR LANJUT (mtk-alj-2: Polinomial & Teorema Sisa)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-09",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-alj",
    subTopicId: "mtk-alj-2",
    category: "Polinomial - Teorema Sisa Pembagian",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sisa pembagian suku banyak $P(x) = 2x^3 - 5x^2 + 4x - 6$ oleh pembagi linear $(x - 2)$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-4$",
      "$-2$",
      "$0$",
      "$2$",
      "$4$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Teorema Sisa Suku Banyak:</strong><br>
          Jika polinomial $P(x)$ dibagi oleh $(x - c)$, maka sisa pembagiannya adalah $S = P(c)$.
        </div>
      `,
      steps: `
        <ol>
          <li>Pembuat nol pembagi: $x - 2 = 0 \\implies x = 2$.</li>
          <li>Substitusi $x = 2$ ke dalam $P(x)$:
            $$S = P(2) = 2(2^3) - 5(2^2) + 4(2) - 6$$
            $$S = 2(8) - 5(4) + 8 - 6 = 16 - 20 + 8 - 6 = -2$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Sering keliru tanda substitusi menjadi $P(-2)$. Pembagi $(x - c)$ menghasilkan nilai evaluasi $x = +c$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-1: Vektor & Perkalian Skalar)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-10",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-1",
    category: "Perkalian Skalar Dua Vektor (Dot Product)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Diketahui dua buah vektor pada bidang datar $\\vec{u} = 3\\hat{i} - 4\\hat{j}$ dan $\\vec{v} = 2\\hat{i} + 5\\hat{j}$. Nilai perkalian skalar $(\\vec{u} \\cdot \\vec{v})$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-26$",
      "$-14$",
      "$-6$",
      "$14$",
      "$26$"
    ],
    correctIndex: 1,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Perkalian Skalar (Dot Product) Dua Vektor:</strong><br>
          $$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$$
        </div>
      `,
      steps: `
        <ol>
          <li>Identifikasi komponen: $u_x = 3, u_y = -4$ dan $v_x = 2, v_y = 5$.</li>
          <li>Hitung perkalian skalar:
            $$\\vec{u} \\cdot \\vec{v} = (3)(2) + (-4)(5) = 6 - 20 = -14$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Hasil kali skalar (dot product) berupa bilangan skalar real, bukan vektor. Perhatikan tanda negatif pada komponen $u_y = -4$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-2: Persamaan Lingkaran Bentuk Umum)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-11",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-2",
    category: "Jari-Jari Lingkaran Bentuk Umum",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah lingkaran memiliki persamaan bentuk umum $x^2 + y^2 - 6x + 8y - 11 = 0$. Panjang jari-jari ($r$) dari lingkaran tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4$",
      "$5$",
      "$6$",
      "$7$",
      "$8$"
    ],
    correctIndex: 2,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Jari-Jari Lingkaran Bentuk Umum $x^2 + y^2 + Ax + By + C = 0$:</strong><br>
          Titik pusat $(a, b) = \\left(-\\frac{1}{2}A, -\\frac{1}{2}B\\right)$<br>
          Jari-jari: $r = \\sqrt{a^2 + b^2 - C}$
        </div>
      `,
      steps: `
        <ol>
          <li>Hitung koordinat pusat:
            $$a = -\\frac{1}{2}(-6) = 3, \\quad b = -\\frac{1}{2}(8) = -4$$
          </li>
          <li>Substitusi ke rumus jari-jari ($C = -11$):
            $$r = \\sqrt{3^2 + (-4)^2 - (-11)} = \\sqrt{9 + 16 + 11} = \\sqrt{36} = 6$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Perhatikan tanda negatif pada $C = -11$. Mengurangkan nilai negatif menghasilkan penjumlahan: $-(-11) = +11$.
        </div>
      `
    }
  },

  // --------------------------------------------------------------------------
  // MATEMATIKA - GEOMETRI & PENGUKURAN (mtk-geo-3: Transformasi Geometri - Translasi)
  // --------------------------------------------------------------------------
  {
    id: "mudah-mtk-12",
    subject: "MATEMATIKA",
    pillarId: "matematika",
    chapterId: "mtk-geo",
    subTopicId: "mtk-geo-3",
    category: "Komposisi Translasi Titik Bidang",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Titik $A(5, -2)$ ditranslasikan oleh $T_1 = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$ kemudian dilanjutkan dengan translasi $T_2 = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$. Koordinat bayangan akhir dari titik $A$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$(4, 1)$",
      "$(4, -1)$",
      "$(2, 3)$",
      "$(0, 1)$",
      "$(6, 1)$"
    ],
    correctIndex: 0,
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Komposisi Translasi Titik:</strong><br>
          $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + T_1 + T_2$$
        </div>
      `,
      steps: `
        <ol>
          <li>Jumlahkan pergeseran absis ($x$):
            $$x' = 5 + (-3) + 2 = 4$$
          </li>
          <li>Jumlahkan pergeseran ordinat ($y$):
            $$y' = -2 + 4 + (-1) = 1$$
          </li>
          <li>Koordinat bayangan akhir adalah $(4, 1)$.</li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          Operasi translasi murni menggunakan penjumlahan aljabar vektor posisi, bukan perkalian matriks.
        </div>
      `
    }
  }
];
