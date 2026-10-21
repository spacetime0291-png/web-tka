/**
 * TKA Physics & Advanced Mathematics Drilling Lab
 * Anti-AI Tactile Neo-Brutalist Academic Web Application
 */

// 1. DATA BANK: 4 Realistic High-Difficulty TKA Questions (UTBK-STEI Grade)
const questionsData = [
  {
    id: 1,
    subject: "FISIKA",
    category: "Dinamika Rotasi & Torsi",
    difficulty: "HOTS / Setara UTBK-STEI",
    statement: `Sebuah silinder pejal homogen bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 20\\text{ cm}$ dapat berputar bebas tanpa gesekan terhadap poros horizontal tetap yang melalui pusat massanya (momen inersia $I = \\frac{1}{2}MR^2$). Dua buah balok bermassa $m_1 = 3\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ dihubungkan oleh seutas tali ringan tak elastis yang melilit katrol tersebut tanpa selip. Jika sistem dilepaskan dari keadaan diam dan percepatan gravitasi $g = 10\\text{ m/s}^2$, tentukan percepatan sudut putaran katrol $(\\alpha)$ serta besar selisih tegangan tali pada kedua sisi katrol $(T_1 - T_2)$!`,
    hasDiagram: true,
    diagramSvg: `
      <svg class="diagram-svg" viewBox="0 0 360 270" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <!-- Blueprint Grid Ceiling Bracket -->
        <line x1="80" y1="25" x2="280" y2="25" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <line x1="100" y1="25" x2="115" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="130" y1="25" x2="145" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="160" y1="25" x2="175" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="190" y1="25" x2="205" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="220" y1="25" x2="235" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="250" y1="25" x2="265" y2="10" stroke="#38BDF8" stroke-width="1.5"/>
        
        <!-- Pulley Mounting Hanger -->
        <polygon points="175,25 185,25 182,75 178,75" fill="#38BDF8" opacity="0.4"/>
        <line x1="180" y1="25" x2="180" y2="75" stroke="#38BDF8" stroke-width="2"/>
        
        <!-- Pulley Disk -->
        <circle cx="180" cy="75" r="50" fill="#0A192F" stroke="#38BDF8" stroke-width="2.5"/>
        <circle cx="180" cy="75" r="44" fill="none" stroke="#38BDF8" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
        <circle cx="180" cy="75" r="7" fill="#38BDF8"/>
        
        <!-- Radius & Label -->
        <line x1="180" y1="75" x2="225" y2="50" stroke="#FACC15" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="205" y="55" fill="#FACC15" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">R=20cm</text>
        <text x="145" y="98" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11">M=2kg</text>
        
        <!-- Rotation Alpha Vector Arrow -->
        <path d="M 160 40 A 30 30 0 0 0 145 75" fill="none" stroke="#FF5A26" stroke-width="2" marker-end="url(#arrow-orange)"/>
        <text x="130" y="50" fill="#FF5A26" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="bold">α</text>
        
        <!-- Left Rope & Mass m1 -->
        <line x1="130" y1="75" x2="130" y2="160" stroke="#E0F2FE" stroke-width="2.5"/>
        <!-- Mass 1 Box -->
        <rect x="108" y="160" width="44" height="44" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
        <text x="116" y="186" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold">m₁=3kg</text>
        
        <!-- Forces on m1 -->
        <line x1="130" y1="160" x2="130" y2="130" stroke="#22C55E" stroke-width="2"/>
        <polygon points="127,133 130,125 133,133" fill="#22C55E"/>
        <text x="136" y="138" fill="#22C55E" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">T₁</text>
        
        <line x1="130" y1="204" x2="130" y2="238" stroke="#EF4444" stroke-width="2"/>
        <polygon points="127,235 130,243 133,235" fill="#EF4444"/>
        <text x="136" y="235" fill="#EF4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">m₁g</text>
        
        <text x="82" y="188" fill="#FF5A26" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold">a ↓</text>
        
        <!-- Right Rope & Mass m2 -->
        <line x1="230" y1="75" x2="230" y2="140" stroke="#E0F2FE" stroke-width="2.5"/>
        <!-- Mass 2 Box -->
        <rect x="210" y="140" width="40" height="40" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
        <text x="217" y="165" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold">m₂=1kg</text>
        
        <!-- Forces on m2 -->
        <line x1="230" y1="140" x2="230" y2="110" stroke="#22C55E" stroke-width="2"/>
        <polygon points="227,113 230,105 233,113" fill="#22C55E"/>
        <text x="236" y="118" fill="#22C55E" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">T₂</text>
        
        <line x1="230" y1="180" x2="230" y2="210" stroke="#EF4444" stroke-width="2"/>
        <polygon points="227,207 230,215 233,207" fill="#EF4444"/>
        <text x="236" y="208" fill="#EF4444" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">m₂g</text>
        
        <text x="258" y="165" fill="#FF5A26" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold">a ↑</text>
      </svg>
    `,
    diagramCaption: "SKEMA FREE-BODY DIAGRAM: KATROL BERMASSA & BEBAN GANTUNG",
    options: [
      "$\\alpha = 15\\text{ rad/s}^2$ dan $T_1 - T_2 = 3\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 4\\text{ N}$",
      "$\\alpha = 25\\text{ rad/s}^2$ dan $T_1 - T_2 = 5\\text{ N}$",
      "$\\alpha = 10\\text{ rad/s}^2$ dan $T_1 - T_2 = 2\\text{ N}$",
      "$\\alpha = 20\\text{ rad/s}^2$ dan $T_1 - T_2 = 8\\text{ N}$"
    ],
    correctIndex: 1, // B
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Prinsip Dinamika Sistem Translasi & Rotasi Terkopel:</strong><br>
          1. Hukum II Newton Translasi: $\\Sigma F = m a$<br>
          2. Hukum II Newton Rotasi: $\\Sigma \\tau = I \\alpha$<br>
          3. Syarat Tali Tidak Selip (No-slip): $a = \\alpha R \\iff \\alpha = \\frac{a}{R}$<br>
          4. Momen Inersia Silinder Pejal Homogen: $I = \\frac{1}{2} M R^2$
        </div>
      `,
      steps: `
        <ol>
          <li>
            <strong>Persamaan Gerak Translasi Beban $m_1$ (bergerak turun dipercepat):</strong>
            $$m_1 g - T_1 = m_1 a \\implies T_1 = m_1(g - a)$$
          </li>
          <li>
            <strong>Persamaan Gerak Translasi Beban $m_2$ (bergerak naik dipercepat):</strong>
            $$T_2 - m_2 g = m_2 a \\implies T_2 = m_2(g + a)$$
          </li>
          <li>
            <strong>Persamaan Dinamika Rotasi Katrol Bermassa:</strong>
            Katrol berputar searah jarum jam karena ditarik oleh selisih torsi kedua tali:
            $$\\Sigma \\tau = I \\alpha \\implies (T_1 - T_2) R = \\left(\\frac{1}{2} M R^2\\right) \\left(\\frac{a}{R}\\right)$$
            Bagi kedua ruas dengan $R$:
            $$T_1 - T_2 = \\frac{1}{2} M a$$
          </li>
          <li>
            <strong>Substitusi Nilai Tegangan Tali untuk Mencari Percepatan Tangensial $a$:</strong>
            $$m_1(g - a) - m_2(g + a) = \\frac{1}{2} M a$$
            $$(m_1 - m_2)g = \\left(m_1 + m_2 + \\frac{1}{2} M\\right) a$$
            $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2 + \\frac{1}{2} M}$$
          </li>
          <li>
            <strong>Perhitungan Numerik Percepatan Linier $a$:</strong>
            $$a = \\frac{(3 - 1)(10)}{3 + 1 + \\frac{1}{2}(2)} = \\frac{20}{3 + 1 + 1} = \\frac{20}{5} = 4\\text{ m/s}^2$$
          </li>
          <li>
            <strong>Perhitungan Percepatan Sudut $(\\alpha)$:</strong>
            Karena $R = 20\\text{ cm} = 0.2\\text{ m}$:
            $$\\alpha = \\frac{a}{R} = \\frac{4\\text{ m/s}^2}{0.2\\text{ m}} = 20\\text{ rad/s}^2$$
          </li>
          <li>
            <strong>Perhitungan Selisih Tegangan Tali $(T_1 - T_2)$:</strong>
            $$T_1 - T_2 = \\frac{1}{2} M a = \\frac{1}{2}(2\\text{ kg})(4\\text{ m/s}^2) = 4\\text{ N}$$
            <em>(Sebagai verifikasi: $T_1 = 3(10 - 4) = 18\\text{ N}$, $T_2 = 1(10 + 4) = 14\\text{ N} \\implies 18 - 14 = 4\\text{ N}$)</em>
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Konseptual & Numerik yang Sering Terjadi:</strong><br>
          • <strong>Asumsi Katrol Ideal ($T_1 = T_2$):</strong> Pada soal UTBK tingkat lanjut, katrol memiliki massa $M$. Jika siswa menganggap $T_1 = T_2$, maka selisih torsi bernilai 0 dan katrol tidak mungkin berputar dipercepat.<br>
          • <strong>Kesalahan Konversi Satuan $R$:</strong> Jari-jari harus diubah dari $20\\text{ cm}$ menjadi $0.2\\text{ m}$. Lupa konversi menghasilkan $\\alpha = \\frac{4}{20} = 0.2\\text{ rad/s}^2$.<br>
          • <strong>Inersia Pejal vs Berongga:</strong> Menggunakan $I = M R^2$ (silinder tipis berongga) bukannya $\\frac{1}{2} M R^2$ (silinder pejal) menghasilkan percepatan $a = 3.33\\text{ m/s}^2$ yang keliru.
        </div>
      `
    }
  },
  {
    id: 2,
    subject: "FISIKA",
    category: "Rangkaian Arus Searah & Kirchhoff",
    difficulty: "HOTS / Setara UTBK-STEI",
    statement: `Perhatikan skema rangkaian listrik tertutup 2-loop di bawah ini. Rangkaian ditenagai oleh dua sumber tegangan ggl ideal $\\mathcal{E}_1 = 24\\text{ V}$ dan $\\mathcal{E}_2 = 12\\text{ V}$, serta dihubungkan dengan tiga resistor $R_1 = 3\\,\\Omega$, $R_2 = 6\\,\\Omega$, dan $R_3 = 6\\,\\Omega$. Tentukan besar kuat arus yang mengalir melalui hambatan cabang tengah $R_2$ ($I_{R2}$) dengan arah dari simpul $A$ ke simpul $B$, serta besar beda potensial antara kedua simpul ($V_{AB} = V_A - V_B$)!`,
    hasDiagram: true,
    diagramSvg: `
      <svg class="diagram-svg" viewBox="0 0 380 250" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <!-- Node Points A and B -->
        <circle cx="190" cy="40" r="5" fill="#FACC15"/>
        <text x="195" y="32" fill="#FACC15" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="bold">Simpul A</text>
        
        <circle cx="190" cy="210" r="5" fill="#FACC15"/>
        <text x="195" y="230" fill="#FACC15" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="bold">Simpul B (Ground)</text>

        <!-- Left Loop Wires -->
        <polyline points="190,40 50,40 50,90" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <!-- Battery E1 (24V) -->
        <line x1="35" y1="90" x2="65" y2="90" stroke="#22C55E" stroke-width="3"/> <!-- Long plate (+) -->
        <line x1="42" y1="98" x2="58" y2="98" stroke="#EF4444" stroke-width="1.5"/> <!-- Short plate (-) -->
        <text x="70" y="96" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">ℰ₁=24V</text>
        
        <polyline points="50,98 50,130" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <!-- Resistor R1 (3 ohm) ZigZag -->
        <polyline points="50,130 42,135 58,142 42,149 58,156 50,161" fill="none" stroke="#FACC15" stroke-width="2"/>
        <text x="68" y="150" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11">R₁=3Ω</text>
        <polyline points="50,161 50,210 190,210" fill="none" stroke="#38BDF8" stroke-width="2"/>

        <!-- Middle Branch (R2) -->
        <line x1="190" y1="40" x2="190" y2="95" stroke="#38BDF8" stroke-width="2"/>
        <!-- Resistor R2 (6 ohm) ZigZag -->
        <polyline points="190,95 182,102 198,110 182,118 198,126 190,133" fill="none" stroke="#FACC15" stroke-width="2"/>
        <text x="206" y="118" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">R₂=6Ω</text>
        <line x1="190" y1="133" x2="190" y2="210" stroke="#38BDF8" stroke-width="2"/>
        <!-- Current Arrow I_R2 -->
        <line x1="172" y1="100" x2="172" y2="135" stroke="#FF5A26" stroke-width="2"/>
        <polygon points="169,132 172,140 175,132" fill="#FF5A26"/>
        <text x="140" y="122" fill="#FF5A26" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">I_R2 ↓</text>

        <!-- Right Loop Wires -->
        <polyline points="190,40 330,40 330,90" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <!-- Battery E2 (12V) -->
        <line x1="315" y1="90" x2="345" y2="90" stroke="#22C55E" stroke-width="3"/> <!-- Long plate (+) -->
        <line x1="322" y1="98" x2="338" y2="98" stroke="#EF4444" stroke-width="1.5"/> <!-- Short plate (-) -->
        <text x="265" y="96" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">ℰ₂=12V</text>
        
        <polyline points="330,98 330,130" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <!-- Resistor R3 (6 ohm) ZigZag -->
        <polyline points="330,130 322,135 338,142 322,149 338,156 330,161" fill="none" stroke="#FACC15" stroke-width="2"/>
        <text x="272" y="150" fill="#E0F2FE" font-family="'JetBrains Mono', monospace" font-size="11">R₃=6Ω</text>
        <polyline points="330,161 330,210 190,210" fill="none" stroke="#38BDF8" stroke-width="2"/>

        <!-- Loop Indicators -->
        <path d="M 100 110 A 18 18 0 1 1 120 130" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="100" y="130" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10">Loop 1</text>
        
        <path d="M 260 110 A 18 18 0 1 0 240 130" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="245" y="130" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="10">Loop 2</text>
      </svg>
    `,
    diagramCaption: "SKEMA 2-LOOP MULTI-BRANCH: HUKUM KIRCHHOFF & SIMPUL NODAL",
    options: [
      "$I_{R2} = 2.50\\text{ A}$ dan $V_{AB} = 15.0\\text{ V}$",
      "$I_{R2} = 2.00\\text{ A}$ dan $V_{AB} = 12.0\\text{ V}$",
      "$I_{R2} = 3.00\\text{ A}$ dan $V_{AB} = 18.0\\text{ V}$",
      "$I_{R2} = 1.50\\text{ A}$ dan $V_{AB} = 9.0\\text{ V}$",
      "$I_{R2} = 3.50\\text{ A}$ dan $V_{AB} = 21.0\\text{ V}$"
    ],
    correctIndex: 0, // A
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Metode Cepat Analisis Nodal (Node Voltage Method):</strong><br>
          Daripada menyelesaikan 2 persamaan loop KVL dengan determinan yang rawan tanda minus terbalik, gunakan Hukum I Kirchhoff (KCL) pada Simpul $A$:<br>
          Tetapkan simpul referensi tanah (ground) pada simpul bawah $B$ dengan $V_B = 0\\text{ V}$. Maka beda potensial $V_{AB} = V_A - 0 = V_A$.<br>
          $$\\Sigma I_{\\text{keluar dari node } A} = 0 \\implies \\sum \\frac{V_A - V_k}{R_k} = 0$$
        </div>
      `,
      steps: `
        <ol>
          <li>
            <strong>Perumusan Arus Tiap Cabang yang Meninggalkan Simpul $A$:</strong>
            <ul>
              <li>Cabang kiri (melalui ggl $\\mathcal{E}_1 = 24\\text{ V}$ dan $R_1 = 3\\,\\Omega$):
                $$I_1 = \\frac{V_A - 24}{3}$$
              </li>
              <li>Cabang tengah (melalui $R_2 = 6\\,\\Omega$ menuju $V_B = 0$):
                $$I_2 = \\frac{V_A - 0}{6} = \\frac{V_A}{6}$$
              </li>
              <li>Cabang kanan (melalui ggl $\\mathcal{E}_2 = 12\\text{ V}$ dan $R_3 = 6\\,\\Omega$):
                $$I_3 = \\frac{V_A - 12}{6}$$
              </li>
            </ul>
          </li>
          <li>
            <strong>Penerapan KCL pada Simpul $A$:</strong>
            $$I_1 + I_2 + I_3 = 0$$
            $$\\frac{V_A - 24}{3} + \\frac{V_A}{6} + \\frac{V_A - 12}{6} = 0$$
          </li>
          <li>
            <strong>Eliminasi Penyebut dengan Mengalikan Seluruh Ruas dengan 6:</strong>
            $$2(V_A - 24) + V_A + (V_A - 12) = 0$$
            $$2V_A - 48 + V_A + V_A - 12 = 0$$
            $$4V_A - 60 = 0 \\implies 4V_A = 60 \\implies V_A = 15.0\\text{ V}$$
          </li>
          <li>
            <strong>Menentukan Beda Potensial $V_{AB}$:</strong>
            $$V_{AB} = V_A - V_B = 15.0\\text{ V} - 0\\text{ V} = 15.0\\text{ V}$$
          </li>
          <li>
            <strong>Menghitung Kuat Arus Cabang Tengah ($I_{R2}$):</strong>
            $$I_{R2} = \\frac{V_{AB}}{R_2} = \\frac{15.0\\text{ V}}{6\\,\\Omega} = 2.50\\text{ A}$$
            Karena hasilnya positif, arah arus mengalir tepat dari simpul berpotensial tinggi $A$ ke simpul berpotensial rendah $B$ (ke arah bawah).
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Konseptual & Trik Pemeriksaan Arus Cabang:</strong><br>
          • <strong>Arus Cabang Kiri:</strong> $I_{\\text{kiri}} = \\frac{24 - 15}{3} = 3.00\\text{ A}$ (mengalir masuk ke simpul $A$).<br>
          • <strong>Arus Cabang Kanan:</strong> $I_{\\text{kanan}} = \\frac{15 - 12}{6} = 0.50\\text{ A}$ (mengalir keluar dari simpul $A$).<br>
          • <strong>Verifikasi Kirchhoff I:</strong> $I_{\\text{masuk}} = 3.00\\text{ A}$, $I_{\\text{keluar}} = I_2 + I_3 = 2.50\\text{ A} + 0.50\\text{ A} = 3.00\\text{ A}$ (Konsisten 100%!).<br>
          • <strong>Jebakan Tanda Ggl:</strong> Jika kutub baterai kanan dianggap mendorong arus ke arah berlawanan tanpa memperhatikan bahwa $V_A = 15\\text{ V} > 12\\text{ V}$, baterai $\\mathcal{E}_2$ sebenarnya sedang mengalami proses pengisian (charging).
        </div>
      `
    }
  },
  {
    id: 3,
    subject: "MATEMATIKA",
    category: "Kalkulus Integral Tentu",
    difficulty: "HOTS / Setara UTBK-STEI",
    statement: `Tentukan nilai eksak dari integral tentu fungsi trigonometri berikut yang melibatkan pembagian kuadrat cosinus:
$$I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$$`,
    hasDiagram: false,
    options: [
      "$\\frac{\\pi^2}{8}$",
      "$\\frac{\\pi^2}{4}$",
      "$\\frac{\\pi^2}{2}$",
      "$\\frac{\\pi}{4}$",
      "$\\pi^2 - 2\\pi$"
    ],
    correctIndex: 1, // B
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>King's Property (Sifat Refleksi Simetri Integral Tentu):</strong><br>
          Untuk sebarang fungsi kontinu $f(x)$ pada interval $[a, b]$:<br>
          $$\\int_{a}^{b} f(x) \\, dx = \\int_{a}^{b} f(a + b - x) \\, dx$$
          Sifat ini sangat ampuh mengeliminasi faktor polinomial $x$ pada pembilang perkalian trigonometri periodik $[0, \\pi]$.<br>
          Turunan standar arcus tangen: $\\int \\frac{1}{1 + u^2} \\, du = \\arctan(u) + C$.
        </div>
      `,
      steps: `
        <ol>
          <li>
            <strong>Definisikan Persamaan Integral Asli:</strong>
            $$I = \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx \\quad \\text{--- (Persamaan 1)}$$
          </li>
          <li>
            <strong>Terapkan King's Property dengan Batas $a = 0$ dan $b = \\pi$ ($x \\to \\pi - x$):</strong>
            $$I = \\int_{0}^{\\pi} \\frac{(\\pi - x) \\sin(\\pi - x)}{1 + \\cos^2(\\pi - x)} \\, dx$$
            Berdasarkan identitas relasi sudut trigonometri:
            $$\\sin(\\pi - x) = \\sin x, \\quad \\cos(\\pi - x) = -\\cos x \\implies \\cos^2(\\pi - x) = \\cos^2 x$$
            Sehingga diperoleh:
            $$I = \\int_{0}^{\\pi} \\frac{(\\pi - x) \\sin x}{1 + \\cos^2 x} \\, dx \\quad \\text{--- (Persamaan 2)}$$
          </li>
          <li>
            <strong>Pecah Integral (Persamaan 2) Menjadi Dua Suku:</strong>
            $$I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx - \\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} \\, dx$$
            Perhatikan bahwa suku integral kedua tidak lain adalah definisi $I$ semula:
            $$I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx - I$$
          </li>
          <li>
            <strong>Pindahkan Suku $-I$ ke Ruas Kiri:</strong>
            $$2I = \\pi \\int_{0}^{\\pi} \\frac{\\sin x}{1 + \\cos^2 x} \\, dx$$
          </li>
          <li>
            <strong>Gunakan Metode Substitusi Variabel $u$:</strong>
            Misalkan $u = \\cos x \\implies du = -\\sin x \\, dx \\iff \\sin x \\, dx = -du$.<br>
            Perubahan batas integrasi:
            <ul>
              <li>Batas bawah: saat $x = 0 \\implies u = \\cos(0) = 1$</li>
              <li>Batas atas: saat $x = \\pi \\implies u = \\cos(\\pi) = -1$</li>
            </ul>
          </li>
          <li>
            <strong>Evaluasi Integral Menggunakan Batas Baru:</strong>
            $$2I = \\pi \\int_{1}^{-1} \\frac{-du}{1 + u^2} = \\pi \\int_{-1}^{1} \\frac{du}{1 + u^2}$$
            Karena fungsi $\\frac{1}{1 + u^2}$ genap, atau langsung gunakan anti-turunan $\\arctan(u)$:
            $$2I = \\pi \\Big[ \\arctan(u) \\Big]_{-1}^{1} = \\pi \\Big( \\arctan(1) - \\arctan(-1) \\Big)$$
            $$2I = \\pi \\left( \\frac{\\pi}{4} - \\left(-\\frac{\\pi}{4}\\right) \\right) = \\pi \\left( \\frac{\\pi}{2} \\right) = \\frac{\\pi^2}{2}$$
          </li>
          <li>
            <strong>Selesaikan untuk Nilai $I$:</strong>
            $$I = \\frac{\\pi^2 / 2}{2} = \\frac{\\pi^2}{4}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan yang Sering Menjebak Peserta Ujian:</strong><br>
          • <strong>Lupa Membagi Dua di Langkah Akhir:</strong> Kesalahan fatal paling umum adalah melupakan koefisien 2 pada $2I = \\frac{\\pi^2}{2}$, sehingga memilih jawaban $\\frac{\\pi^2}{2}$ (Opsi C).<br>
          • <strong>Mencoba Integral Parsial Langsung:</strong> Menetapkan $u = x$ dan $dv = \\frac{\\sin x}{1 + \\cos^2 x}dx$ akan menghasilkan anti-turunan $-\\arctan(\\cos x)$, yang saat diintegralkan kembali menuntut integral $\\int \\arctan(\\cos x) dx$ yang jauh lebih rumit dan memakan waktu.<br>
          • <strong>Tanda Minus Batas Balik:</strong> Menghilangkan tanda negatif saat $du = -\\sin x dx$ sehingga menghasilkan batas yang terbalik dan nilai integral bernilai negatif.
        </div>
      `
    }
  },
  {
    id: 4,
    subject: "MATEMATIKA",
    category: "Vektor & Matriks Transformasi Geometri",
    difficulty: "HOTS / Setara UTBK-STEI",
    statement: `Diberikan dua buah vektor pada bidang Cartesius $\\mathbb{R}^2$: $\\vec{u} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$. Vektor $\\vec{w}$ merupakan proyeksi ortogonal dari vektor $\\vec{u}$ pada arah vektor $\\vec{v}$. Selanjutnya, vektor $\\vec{w}$ ditransformasikan secara berturut-turut oleh rotasi sebesar $+90^\\circ$ berpusat di titik asal $(0,0)$ berlawanan arah putaran jarum jam yang diwakili matriks $R$, lalu dilanjutkan dengan refleksi terhadap garis simetri $y = x$ yang diwakili matriks $M$. Tentukan vektor bayangan akhir $\\vec{w}''$!`,
    hasDiagram: false,
    options: [
      "$\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$",
      "$\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$"
    ],
    correctIndex: 0, // A
    solution: {
      concept: `
        <div class="callout-box callout-concept">
          <strong>Dua Fondasi Utama: Proyeksi Vektor & Komposisi Matriks:</strong><br>
          1. <strong>Vektor Proyeksi Ortogonal $\\vec{u}$ pada $\\vec{v}$:</strong>
             $$\\vec{w} = \\operatorname{proj}_{\\vec{v}} \\vec{u} = \\left( \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\right) \\vec{v}$$
          2. <strong>Matriks Rotasi $+90^\\circ$:</strong> $R_{90^\\circ} = \\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$<br>
          3. <strong>Matriks Refleksi Garis $y = x$:</strong> $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$<br>
          4. <strong>Komposisi Transformasi:</strong> Transformasi pertama $R$ dilanjutkan transformasi kedua $M$ dinyatakan oleh perkalian matriks dari kiri: $T = M \\cdot R$.
        </div>
      `,
      steps: `
        <ol>
          <li>
            <strong>Hitung Perkalian Skalar (Dot Product) $\\vec{u} \\cdot \\vec{v}$:</strong>
            $$\\vec{u} \\cdot \\vec{v} = (3)(2) + (1)(4) = 6 + 4 = 10$$
          </li>
          <li>
            <strong>Hitung Kuadrat Panjang Vektor Acuan $|\\vec{v}|^2$:</strong>
            $$|\\vec{v}|^2 = 2^2 + 4^2 = 4 + 16 = 20$$
          </li>
          <li>
            <strong>Tentukan Vektor Proyeksi Ortogonal $\\vec{w}$:</strong>
            $$\\vec{w} = \\left( \\frac{10}{20} \\right) \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\frac{1}{2} \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$
          </li>
          <li>
            <strong>Tentukan Matriks Komposisi Total $T = M \\cdot R$:</strong>
            $$T = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$
            Lakukan perkalian baris kali kolom:
            $$T = \\begin{pmatrix} (0)(0) + (1)(1) & (0)(-1) + (1)(0) \\\\ (1)(0) + (0)(1) & (1)(-1) + (0)(0) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$
            <em>(Catatan Geometri: Matriks $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ setara dengan refleksi terhadap sumbu-$x$!)</em>
          </li>
          <li>
            <strong>Hitung Bayangan Akhir $\\vec{w}''$:</strong>
            $$\\vec{w}'' = T \\cdot \\vec{w} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} (1)(1) + (0)(2) \\\\ (0)(1) + (-1)(2) \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$$
          </li>
        </ol>
      `,
      pitfalls: `
        <div class="callout-box callout-pitfall">
          <strong>⚠️ Jebakan Urutan Matriks & Skalar Proyeksi:</strong><br>
          • <strong>Urutan Perkalian Matriks:</strong> Transformasi $R$ lalu $M$ dihitung dengan $M \\cdot R$, bukan $R \\cdot M$. Jika terbalik menghitung $R \\cdot M = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (refleksi sumbu-$y$), maka hasilnya adalah $\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$ (Opsi C).<br>
          • <strong>Berhenti di Bayangan Pertama:</strong> Hasil rotasi pertama adalah $\\vec{w}' = R \\vec{w} = \\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$ (Opsi B). Siswa yang tidak teliti seringkali memilih opsi ini karena mengira soal telah selesai.<br>
          • <strong>Penyebut Proyeksi:</strong> Membagi dengan $|\\vec{v}| = \\sqrt{20}$ bukannya $|\\vec{v}|^2 = 20$ merupakan kesalahan umum antara proyeksi skalar ortogonal (panjang) dan proyeksi vektor ortogonal.
        </div>
      `
    }
  }
];

// 2. APPLICATION STATE MANAGEMENT
const state = {
  currentIndex: 0,
  userAnswers: new Array(questionsData.length).fill(null),
  isVerified: new Array(questionsData.length).fill(false),
  isRagu: new Array(questionsData.length).fill(false),
  solutionOpen: new Array(questionsData.length).fill(false),
  theme: localStorage.getItem('tka_theme') || 'light',
  timerSeconds: 20 * 60, // 20 minutes countdown
  timerRunning: true,
  timerInterval: null
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const qNum = parseInt(urlParams.get('q'));
  if (!isNaN(qNum) && qNum >= 1 && qNum <= questionsData.length) {
    state.currentIndex = qNum - 1;
  }
  if (urlParams.get('verified') === '1') {
    state.userAnswers[state.currentIndex] = questionsData[state.currentIndex].correctIndex;
    state.isVerified[state.currentIndex] = true;
    state.solutionOpen[state.currentIndex] = true;
  }
  if (urlParams.get('dark') === '1') {
    state.theme = 'dark';
  }

  initTheme();
  initTimer();
  renderCurrentQuestion();
  renderMatrixGrid();
  updateStats();
  bindGlobalEvents();

  if (urlParams.get('modal') === '1') {
    openCheatSheetModal();
  }
});

// 4. THEME CONTROLLER
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('tka_theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = state.theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}

// 5. TIMER CONTROLLER
function initTimer() {
  const timerDisplay = document.getElementById('timerText');
  const timerPill = document.getElementById('timerPill');
  
  function tick() {
    if (!state.timerRunning) return;
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      const mins = Math.floor(state.timerSeconds / 60);
      const secs = state.timerSeconds % 60;
      if (timerDisplay) {
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
      if (state.timerSeconds < 300 && timerPill) {
        timerPill.classList.add('urgent');
      }
    } else {
      clearInterval(state.timerInterval);
      state.timerRunning = false;
      alert('Waktu drilling telah berakhir! Mari periksa hasil evaluasi Anda.');
    }
  }

  state.timerInterval = setInterval(tick, 1000);
}

function toggleTimerPause() {
  state.timerRunning = !state.timerRunning;
  const timerPill = document.getElementById('timerPill');
  if (timerPill) {
    timerPill.style.opacity = state.timerRunning ? '1' : '0.65';
    timerPill.title = state.timerRunning ? 'Klik untuk jeda timer' : 'Timer dijeda - klik untuk lanjut';
  }
}

// 6. QUESTION RENDERING ENGINE
function renderCurrentQuestion() {
  const q = questionsData[state.currentIndex];
  const total = questionsData.length;

  // Header Elements
  const headerTopic = document.getElementById('headerTopic');
  const headerProgressFill = document.getElementById('headerProgressFill');
  if (headerTopic) {
    headerTopic.textContent = `${q.subject}: ${q.category}`;
  }
  if (headerProgressFill) {
    const progressPercent = ((state.currentIndex + 1) / total) * 100;
    headerProgressFill.style.width = `${progressPercent}%`;
  }

  // Question Meta
  const questionNumBadge = document.getElementById('questionNumBadge');
  const subjectBadge = document.getElementById('subjectBadge');
  const difficultyBadge = document.getElementById('difficultyBadge');
  const btnRagu = document.getElementById('btnRagu');

  if (questionNumBadge) questionNumBadge.textContent = `SOAL 0${q.id}`;
  if (subjectBadge) {
    subjectBadge.textContent = q.subject;
    subjectBadge.className = `tactile-badge ${q.subject === 'FISIKA' ? 'badge-physics' : 'badge-math'}`;
  }
  if (difficultyBadge) difficultyBadge.textContent = q.difficulty;
  
  if (btnRagu) {
    if (state.isRagu[state.currentIndex]) {
      btnRagu.classList.add('active');
      btnRagu.innerHTML = '<i class="fa-solid fa-bookmark mr-1"></i> Ragu-ragu (Ditandai)';
    } else {
      btnRagu.classList.remove('active');
      btnRagu.innerHTML = '<i class="fa-regular fa-bookmark mr-1"></i> Tandai Ragu-ragu';
    }
  }

  // Problem Text Statement
  const problemStatement = document.getElementById('problemStatement');
  if (problemStatement) {
    problemStatement.innerHTML = q.statement;
  }

  // Diagram Box Handling
  const diagramBox = document.getElementById('diagramBox');
  const diagramContent = document.getElementById('diagramContent');
  const diagramCaption = document.getElementById('diagramCaption');
  if (q.hasDiagram && diagramBox && diagramContent && diagramCaption) {
    diagramBox.classList.remove('hidden');
    diagramContent.innerHTML = q.diagramSvg;
    diagramCaption.textContent = q.diagramCaption;
  } else if (diagramBox) {
    diagramBox.classList.add('hidden');
  }

  // Options List Rendering
  const optionsList = document.getElementById('optionsList');
  if (optionsList) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const chosen = state.userAnswers[state.currentIndex];
    const verified = state.isVerified[state.currentIndex];

    optionsList.innerHTML = q.options.map((opt, idx) => {
      let stateClass = '';
      if (verified) {
        if (idx === q.correctIndex) {
          stateClass = 'correct disabled-verified';
        } else if (idx === chosen) {
          stateClass = 'wrong disabled-verified';
        } else {
          stateClass = 'disabled-verified';
        }
      } else if (chosen === idx) {
        stateClass = 'selected';
      }

      return `
        <button class="option-card ${stateClass}" onclick="handleOptionSelect(${idx})" ${verified ? 'disabled' : ''}>
          <div class="option-badge">[${letters[idx]}]</div>
          <div class="option-text">${opt}</div>
          ${verified && idx === q.correctIndex ? '<i class="fa-solid fa-circle-check text-green-600 ml-auto text-xl"></i>' : ''}
          ${verified && idx === chosen && idx !== q.correctIndex ? '<i class="fa-solid fa-circle-xmark text-red-600 ml-auto text-xl"></i>' : ''}
        </button>
      `;
    }).join('');
  }

  // Solution Accordion Rendering
  const solutionAccordion = document.getElementById('solutionAccordion');
  const solutionConcept = document.getElementById('solutionConcept');
  const solutionSteps = document.getElementById('solutionSteps');
  const solutionPitfalls = document.getElementById('solutionPitfalls');

  if (solutionConcept) solutionConcept.innerHTML = q.solution.concept;
  if (solutionSteps) solutionSteps.innerHTML = q.solution.steps;
  if (solutionPitfalls) solutionPitfalls.innerHTML = q.solution.pitfalls;

  if (solutionAccordion) {
    if (state.solutionOpen[state.currentIndex]) {
      solutionAccordion.classList.add('open');
    } else {
      solutionAccordion.classList.remove('open');
    }
  }

  // Update Action Bar Button Texts
  updateBottomActionBar();

  // Trigger KaTeX Formula Typesetting
  triggerMathTypeset();

  // Scroll smoothly to top of problem card
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 7. MATH RENDERING WITH FORMULA OVERFLOW PROTECTION
function triggerMathTypeset() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false,
      output: 'htmlAndMathml'
    });

    // Mobile Formula Overflow Safeguard: Ensure all KaTeX displays have a wrapper
    document.querySelectorAll('.katex-display').forEach(el => {
      if (!el.parentElement.classList.contains('formula-scroll')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'formula-scroll';
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }
    });
  }
}

// 8. INTERACTIVE ACTIONS: SELECTION, CHECK, RAGU, ACCORDION
function handleOptionSelect(optionIndex) {
  if (state.isVerified[state.currentIndex]) return;
  state.userAnswers[state.currentIndex] = optionIndex;
  renderCurrentQuestion();
  renderMatrixGrid();
  updateStats();
}

function toggleRagu() {
  state.isRagu[state.currentIndex] = !state.isRagu[state.currentIndex];
  renderCurrentQuestion();
  renderMatrixGrid();
  updateStats();
}

function toggleSolutionAccordion() {
  state.solutionOpen[state.currentIndex] = !state.solutionOpen[state.currentIndex];
  const solutionAccordion = document.getElementById('solutionAccordion');
  if (solutionAccordion) {
    if (state.solutionOpen[state.currentIndex]) {
      solutionAccordion.classList.add('open');
      triggerMathTypeset();
    } else {
      solutionAccordion.classList.remove('open');
    }
  }
}

function handleCheckAnswer() {
  const chosen = state.userAnswers[state.currentIndex];
  if (chosen === null) {
    alert('Silakan pilih salah satu opsi jawaban (A, B, C, D, atau E) terlebih dahulu!');
    return;
  }

  // Mark as verified
  state.isVerified[state.currentIndex] = true;
  // Automatically open solution accordion
  state.solutionOpen[state.currentIndex] = true;

  renderCurrentQuestion();
  renderMatrixGrid();
  updateStats();
}

function handlePrevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderCurrentQuestion();
    renderMatrixGrid();
  }
}

function handleNextQuestion() {
  if (state.currentIndex < questionsData.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion();
    renderMatrixGrid();
  }
}

function jumpToQuestion(idx) {
  if (idx >= 0 && idx < questionsData.length) {
    state.currentIndex = idx;
    closeMobileDrawer();
    renderCurrentQuestion();
    renderMatrixGrid();
  }
}

function updateBottomActionBar() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnCheck = document.getElementById('btnCheck');

  if (btnPrev) {
    btnPrev.disabled = state.currentIndex === 0;
  }
  if (btnNext) {
    btnNext.disabled = state.currentIndex === questionsData.length - 1;
  }
  if (btnCheck) {
    const verified = state.isVerified[state.currentIndex];
    if (verified) {
      btnCheck.innerHTML = '<i class="fa-solid fa-book-open mr-1.5"></i> <span id="btnCheckText">Pembahasan</span>';
      btnCheck.className = 'tactile-btn tactile-btn-secondary';
      btnCheck.onclick = toggleSolutionAccordion;
    } else {
      btnCheck.innerHTML = '<i class="fa-solid fa-circle-check mr-1.5"></i> <span id="btnCheckText">Cek Jawaban</span>';
      btnCheck.className = 'tactile-btn tactile-btn-primary';
      btnCheck.onclick = handleCheckAnswer;
    }
  }
}

// 9. MATRIX GRID & ACCURACY STATS
function renderMatrixGrid() {
  const containers = [
    document.getElementById('matrixGridDesktop'),
    document.getElementById('matrixGridMobile')
  ];

  containers.forEach(container => {
    if (!container) return;
    container.innerHTML = questionsData.map((q, idx) => {
      let statusClass = '';
      const chosen = state.userAnswers[idx];
      const verified = state.isVerified[idx];
      const isRagu = state.isRagu[idx];
      const isActive = idx === state.currentIndex;

      if (verified) {
        if (chosen === q.correctIndex) {
          statusClass = 'answered-correct';
        } else {
          statusClass = 'answered-wrong';
        }
      } else if (isRagu) {
        statusClass = 'ragu';
      } else if (chosen !== null) {
        statusClass = 'answered';
      }

      return `
        <button class="matrix-btn ${statusClass} ${isActive ? 'active' : ''}" onclick="jumpToQuestion(${idx})" title="Soal 0${q.id} (${q.subject})">
          0${q.id}
          ${isRagu && !statusClass.includes('ragu') ? '<span class="ragu-indicator"></span>' : ''}
        </button>
      `;
    }).join('');
  });
}

function updateStats() {
  const total = questionsData.length;
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  state.userAnswers.forEach((ans, idx) => {
    if (ans !== null) answeredCount++;
    if (state.isVerified[idx]) {
      if (ans === questionsData[idx].correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const statAnswered = document.getElementById('statAnswered');
  const statCorrect = document.getElementById('statCorrect');
  const statAccuracy = document.getElementById('statAccuracy');
  const statRemaining = document.getElementById('statRemaining');

  if (statAnswered) statAnswered.textContent = `${answeredCount}/${total}`;
  if (statCorrect) statCorrect.textContent = `${correctCount}`;
  if (statAccuracy) statAccuracy.textContent = `${accuracy}%`;
  if (statRemaining) statRemaining.textContent = `${total - answeredCount}`;
}

// 10. MODAL & DRAWER CONTROLS
function openCheatSheetModal() {
  const modal = document.getElementById('cheatSheetModal');
  if (modal) {
    modal.classList.add('open');
    triggerMathTypeset();
  }
}

function closeCheatSheetModal() {
  const modal = document.getElementById('cheatSheetModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function openMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  const sheet = document.getElementById('mobileDrawerSheet');
  if (overlay && sheet) {
    overlay.classList.add('open');
    sheet.classList.add('open');
  }
}

function closeMobileDrawer() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  const sheet = document.getElementById('mobileDrawerSheet');
  if (overlay && sheet) {
    overlay.classList.remove('open');
    sheet.classList.remove('open');
  }
}

// 11. GLOBAL EVENT LISTENERS & KEYBOARD SHORTCUTS
function bindGlobalEvents() {
  // Keyboard Shortcuts: A-E, Enter, Arrow keys, R
  window.addEventListener('keydown', (e) => {
    // If modal is open and Esc pressed, close it
    if (e.key === 'Escape') {
      closeCheatSheetModal();
      closeMobileDrawer();
      return;
    }

    // Ignore keyboard shortcuts if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
      const idx = key.charCodeAt(0) - 65; // A->0, B->1, etc.
      handleOptionSelect(idx);
    } else if (['1', '2', '3', '4', '5'].includes(key)) {
      const idx = parseInt(key) - 1;
      handleOptionSelect(idx);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (!state.isVerified[state.currentIndex]) {
        handleCheckAnswer();
      } else {
        toggleSolutionAccordion();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrevQuestion();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNextQuestion();
    } else if (key === 'R') {
      e.preventDefault();
      toggleRagu();
    }
  });

  // Close modals when clicking overlay background
  const cheatSheetModal = document.getElementById('cheatSheetModal');
  if (cheatSheetModal) {
    cheatSheetModal.addEventListener('click', (e) => {
      if (e.target === cheatSheetModal) closeCheatSheetModal();
    });
  }

  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
  }
}
