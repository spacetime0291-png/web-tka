/**
 * FORMULA BANK - FISIKA (TKA) BAGIAN 1: MEKANIKA & FLUIDA
 * Meliputi 8 Bab Kecil:
 * 1. fis-kin-ukur (Pengukuran)
 * 2. fis-kin-gl (Gerak Lurus)
 * 3. fis-kin-lengkung (Gerak Lengkung)
 * 4. fis-din-gaya (Gaya dan Gerak)
 * 5. fis-din-mom (Momentum dan Impuls)
 * 6. fis-din-rot (Dinamika Rotasi & Kesetimbangan)
 * 7. fis-flu-statis (Fluida Statis)
 * 8. fis-flu-dinamis (Fluida Dinamis)
 */

const FORMULAS_FISIKA_MEKANIKA = {
  "fis-kin-ukur": {
    subChapterId: "fis-kin-ukur",
    title: "Pengukuran",
    chapterId: "fis-kin",
    chapterTitle: "Kinematika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Instrumen presisi jangka sorong dan mikrometer sekrup, aturan angka penting dalam perhitungan, serta ketidakpastian mutlak dan relatif.",
    subTopicsCovered: [
      "Jangka Sorong",
      "Mikrometer Sekrup",
      "Neraca Tiga Lengan",
      "Angka Penting",
      "Ketidakpastian & Evaluasi Data"
    ],
    formulas: [
      {
        id: "fis-kin-ukur-f01",
        code: "R-01",
        title: "Pembacaan Jangka Sorong & Mikrometer Sekrup",
        formulaLatex: "\\text{Jangka Sorong: } X = SU + (SN \\times 0{,}01\\text{ cm}) \\\\[6pt] \\text{Mikrometer Sekrup: } X = SU + (SN \\times 0{,}01\\text{ mm})",
        conditions: "Jangka sorong berskala nonius ketelitian $0{,}1\\text{ mm} = 0{,}01\\text{ cm}$. Mikrometer sekrup ketelitian $0{,}01\\text{ mm}$.",
        variables: [
          { symbol: "SU", desc: "Skala Utama" },
          { symbol: "SN", desc: "Skala Nonius (garis yang tepat berimpit lurus dengan skala utama)" }
        ],
        traps: "Perhatikan satuan: skala utama jangka sorong biasanya dalam cm, sedangkan mikrometer dalam mm.",
        example: {
          question: "Hasil pengukuran diameter kelereng dengan mikrometer sekrup menunjukkan skala utama 5,5 mm dan skala putar (nonius) menunjukkan angka 28. Tentukan diameter kelereng tersebut.",
          steps: [
            "Skala utama $SU = 5{,}5\\text{ mm}$",
            "Skala nonius $SN = 28 \\times 0{,}01\\text{ mm} = 0{,}28\\text{ mm}$",
            "Diameter total: $X = 5{,}5 + 0{,}28 = 5{,}78\\text{ mm}$"
          ],
          answer: "$5{,}78\\text{ mm}$"
        }
      },
      {
        id: "fis-kin-ukur-f02",
        code: "R-02",
        title: "Aturan Operasi Angka Penting (AP)",
        formulaLatex: "\\text{Penjumlahan/Pengurangan} \\implies \\text{Mengikuti angka taksiran paling sedikit (desimal paling sedikit)} \\\\[6pt] \\text{Perkalian/Pembagian} \\implies \\text{Mengikuti jumlah Angka Penting (AP) paling sedikit}",
        conditions: "Angka nol di sebelah kanan koma desimal setelah angka bukan nol termasuk AP.",
        variables: [
          { symbol: "AP", desc: "Angka penting hasil pengukuran" }
        ],
        traps: "Mengikuti jumlah desimal saat operasi perkalian, padahal aturan perkalian mengikuti jumlah AP paling sedikit.",
        example: {
          question: "Sebuah pelat tipis memiliki panjang $12{,}4\\text{ cm}$ (3 AP) dan lebar $2{,}5\\text{ cm}$ (2 AP). Berdasarkan aturan angka penting, luas pelat tersebut adalah ....",
          steps: [
            "Hitung nilai matematis: $L = 12{,}4 \\times 2{,}5 = 31{,}0\\text{ cm}^2$",
            "Faktor pengali memiliki 3 AP dan 2 AP, sehingga hasil harus dibulatkan menjadi 2 AP",
            "Bulatkan $31{,}0$ menjadi 2 AP $\\implies 31\\text{ cm}^2$"
          ],
          answer: "$31\\text{ cm}^2$"
        }
      },
      {
        id: "fis-kin-ukur-f03",
        code: "R-03",
        title: "Ketidakpastian Mutlak & Relatif Pengukuran",
        formulaLatex: "\\Delta x = \\frac{1}{2} \\times \\text{Skala Terkecil (NST)} \\\\[6pt] \\text{Pelaporan: } X = (x_0 \\pm \\Delta x) \\\\[4pt] \\text{Ketidakpastian Relatif: } KR = \\frac{\\Delta x}{x_0} \\times 100\\%",
        conditions: "Untuk pengukuran tunggal, ketidakpastian mutlak diambil setengah skala terkecil alat ukur.",
        variables: [
          { symbol: "\\Delta x", desc: "Ketidakpastian mutlak pengukuran" },
          { symbol: "KR", desc: "Ketidakpastian relatif dalam persentase" }
        ],
        traps: "Jika $KR \\approx 10\\%$, pelaporan berhak atas 2 AP; jika $KR \\approx 1\\%$, pelaporan 3 AP; jika $KR \\approx 0{,}1\\%$, pelaporan 4 AP.",
        example: {
          question: "Penggaris memiliki nilai skala terkecil $1\\text{ mm}$. Tentukan hasil pelaporan pengukuran panjang balok yang terukur $8{,}4\\text{ cm}$ dan tentukan ketidakpastian relatifnya.",
          steps: [
            "$\\Delta x = \\frac{1}{2} \\times 1\\text{ mm} = 0{,}5\\text{ mm} = 0{,}05\\text{ cm}$",
            "Pelaporan: $(8{,}40 \\pm 0{,}05)\\text{ cm}$",
            "Ketidakpastian relatif: $KR = \\frac{0{,}05}{8{,}4} \\times 100\\% \\approx 0{,}6\\%$"
          ],
          answer: "$(8{,}40 \\pm 0{,}05)\\text{ cm}$ dengan $KR \\approx 0{,}6\\%$"
        }
      }
    ]
  },

  "fis-kin-gl": {
    subChapterId: "fis-kin-gl",
    title: "Gerak Lurus",
    chapterId: "fis-kin",
    chapterTitle: "Kinematika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Konsep kinematika 1 dimensi: GLB, GLBB, gerak vertikal ke atas dan ke bawah, gerak jatuh bebas, serta interpretasi luas dan gradien grafik.",
    subTopicsCovered: [
      "Jarak dan Perpindahan",
      "Kelajuan dan Kecepatan",
      "Kecepatan Relatif",
      "Gerak Lurus Beraturan (GLB)",
      "Gerak Lurus Berubah Beraturan (GLBB)",
      "Analisis Grafik Gerak Lurus",
      "Gerak Vertikal & Jatuh Bebas"
    ],
    formulas: [
      {
        id: "fis-kin-gl-f01",
        code: "R-01",
        title: "Gerak Lurus Beraturan (GLB) & Papasan",
        formulaLatex: "s = v \\cdot t \\\\[4pt] \\text{Berpapasan Berlawanan: } t_{\\text{temu}} = \\frac{s_{\\text{total}}}{v_A + v_B} \\\\[4pt] \\text{Mengejar Searah: } t_{\\text{kejar}} = \\frac{\\Delta s_0}{v_A - v_B} \\quad (v_A > v_B)",
        conditions: "Kecepatan konstan ($a = 0$).",
        variables: [
          { symbol: "s", desc: "Jarak tempuh (m)" },
          { symbol: "v", desc: "Kelajuan konstan (m/s)" },
          { symbol: "t", desc: "Waktu tempuh (s)" }
        ],
        traps: "Kecepatan rata-rata untuk jarak bolak-balik berjarak sama adalah rata-rata harmonik: $v = \\frac{2v_1 v_2}{v_1 + v_2}$, bukan rata-rata biasa.",
        example: {
          question: "Mobil A dan B terpisah jarak 300 m dan bergerak saling mendekati dengan kelajuan masing-masing 15 m/s dan 10 m/s. Kapan dan di mana kedua mobil berpapasan dihitung dari titik berangkat mobil A?",
          steps: [
            "Waktu temu: $t = \\frac{s_{\\text{total}}}{v_A + v_B} = \\frac{300}{15 + 10} = \\frac{300}{25} = 12\\text{ s}$",
            "Jarak dari titik berangkat mobil A: $s_A = v_A \\cdot t = 15 \\times 12 = 180\\text{ m}$"
          ],
          answer: "Berpapasan setelah $12\\text{ s}$ pada jarak $180\\text{ m}$ dari titik awal mobil A."
        }
      },
      {
        id: "fis-kin-gl-f02",
        code: "R-02",
        title: "Tiga Persamaan Pokok GLBB",
        formulaLatex: "v_t = v_0 + a \\cdot t \\\\[4pt] s = v_0 \\cdot t + \\frac{1}{2} a \\cdot t^2 \\\\[4pt] v_t^2 = v_0^2 + 2 a \\cdot s \\\\[4pt] s_n = v_0 + \\frac{1}{2} a (2n - 1) \\quad (\\text{Jarak khusus pada detik ke-}n)",
        conditions: "Percepatan konstan ($a = \\text{konstan} \\neq 0$). Jika diperlambat, $a$ bertanda negatif.",
        variables: [
          { symbol: "v_0, v_t", desc: "Kecepatan awal dan kecepatan akhir (m/s)" },
          { symbol: "a", desc: "Percepatan konstan (m/s$^2$)" },
          { symbol: "s_n", desc: "Jarak yang ditempuh khusus hanya pada interval detik ke-$n$" }
        ],
        traps: "Jarak pada detik ke-$n$ ($s_n$) berbeda dengan jarak total selama $n$ detik ($s(n)$).",
        example: {
          question: "Sebuah mobil mengerem dari kecepatan $20\\text{ m/s}$ hingga berhenti dalam jarak $40\\text{ m}$. Tentukan besar perlambatan mobil.",
          steps: [
            "Variabel: $v_0 = 20\\text{ m/s}, v_t = 0, s = 40\\text{ m}$",
            "Gunakan rumus $v_t^2 = v_0^2 + 2as$:",
            "$0^2 = 20^2 + 2a(40) \\implies 0 = 400 + 80a \\implies 80a = -400 \\implies a = -5\\text{ m/s}^2$"
          ],
          answer: "Perlambatan $= 5\\text{ m/s}^2$"
        }
      },
      {
        id: "fis-kin-gl-f03",
        code: "R-03",
        title: "Gerak Jatuh Bebas (GJB) & Vertikal ke Atas (GVA)",
        formulaLatex: "\\text{GJB }(v_0 = 0): \\quad v_t = \\sqrt{2gh}, \\quad h = \\frac{1}{2}gt^2, \\quad t = \\sqrt{\\frac{2h}{g}} \\\\[6pt] \\text{GVA (Puncak):} \\quad h_{\\max} = \\frac{v_0^2}{2g}, \\quad t_{\\text{naik}} = \\frac{v_0}{g}, \\quad t_{\\text{total udara}} = \\frac{2v_0}{g}",
        conditions: "Gesekan udara diabaikan, percepatan gravitasi bumi ke bawah ($g \\approx 9{,}8$ atau $10\\text{ m/s}^2$).",
        variables: [
          { symbol: "h_{\\max}", desc: "Ketinggian maksimum yang dicapai benda (m)" },
          { symbol: "t_{\\text{total}}", desc: "Waktu total benda berada di udara sebelum kembali ke ketinggian semula" }
        ],
        traps: "Di titik tertinggi lintasan vertikal, kecepatannya bernilai nol ($v = 0$), namun percepatannya tetap $g = 10\\text{ m/s}^2$ ke bawah.",
        example: {
          question: "Sebuah benda dilempar vertikal ke atas dengan kelajuan $30\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, tentukan tinggi maksimum dan waktu total benda di udara.",
          steps: [
            "$h_{\\max} = \\frac{v_0^2}{2g} = \\frac{30^2}{2(10)} = \\frac{900}{20} = 45\\text{ m}$",
            "$t_{\\text{total}} = \\frac{2v_0}{g} = \\frac{2(30)}{10} = 6\\text{ s}$"
          ],
          answer: "$h_{\\max} = 45\\text{ m}$ dan waktu di udara $= 6\\text{ sekon}$"
        }
      },
      {
        id: "fis-kin-gl-f04",
        code: "R-04",
        title: "Interpretasi Grafik Gerak ($v-t$)",
        formulaLatex: "\\text{Kemiringan Gradien: } m = \\frac{\\Delta v}{\\Delta t} = \\text{Percepatan } (a) \\\\[6pt] \\text{Luas Daerah di Bawah Kurva } v-t = \\text{Jarak / Perpindahan } (s)",
        conditions: "Daerah di atas sumbu-t bernilai perpindahan positif, daerah di bawah sumbu-t bernilai negatif.",
        variables: [
          { symbol: "m", desc: "Gradien kurva kecepatan terhadap waktu" }
        ],
        traps: "Jarak adalah total seluruh luas bidang tanpa tanda minus ($|L_1| + |L_2|$), sedangkan perpindahan memperhitungkan tanda tanda minus ($L_1 - L_2$).",
        example: {
          question: "Grafik $v-t$ berbentuk trapesium dengan kecepatan konstan $10\\text{ m/s}$ selama interval $t=2$ s hingga $t=6$ s, berawal dari diam di $t=0$ dan berhenti di $t=8$ s. Hitung perpindahan total.",
          steps: [
            "Bentuk kurva adalah trapesium dengan sisi sejajar $a = 6 - 2 = 4\\text{ s}$ dan $b = 8 - 0 = 8\\text{ s}$, tinggi $h = 10\\text{ m/s}$",
            "Luas $= \\frac{a + b}{2} \\times h = \\frac{4 + 8}{2} \\times 10 = 6 \\times 10 = 60\\text{ m}$"
          ],
          answer: "Perpindahan total $= 60\\text{ m}$"
        }
      }
    ]
  },

  "fis-kin-lengkung": {
    subChapterId: "fis-kin-lengkung",
    title: "Gerak Lengkung",
    chapterId: "fis-kin",
    chapterTitle: "Kinematika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Kombinasi gerak 2 dimensi: Gerak Parabola (proyektil) serta Gerak Melingkar Beraturan (GMB) dan percepatan sentripetal.",
    subTopicsCovered: [
      "Vektor Gerak Parabola",
      "Titik Ekstrem Gerak Parabola",
      "Gerak Melingkar Beraturan (GMB)",
      "Percepatan Sentripetal"
    ],
    formulas: [
      {
        id: "fis-kin-lengkung-f01",
        code: "R-01",
        title: "Dekomposisi Gerak Parabola (Sumbu-X dan Sumbu-Y)",
        formulaLatex: "\\text{Sumbu X (GLB): } v_x = v_0 \\cos\\theta, \\quad x = v_0 \\cos\\theta \\cdot t \\\\[6pt] \\text{Sumbu Y (GLBB): } v_y = v_0 \\sin\\theta - gt, \\quad y = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2 \\\\[6pt] \\text{Kecepatan Total Sesaat: } v = \\sqrt{v_x^2 + v_y^2}",
        conditions: "Percepatan horizontal $a_x = 0$, percepatan vertikal ke bawah $a_y = -g$.",
        variables: [
          { symbol: "\\theta", desc: "Sudut elevasi penembakan terhadap sumbu horizontal" }
        ],
        traps: "Kecepatan di titik tertinggi bukan nol, melainkan bernilai $v = v_x = v_0 \\cos\\theta$.",
        example: {
          question: "Sebuah peluru ditembakkan dengan $v_0 = 50\\text{ m/s}$ pada sudut elevasi $37^\\circ$ ($\\sin 37^\\circ = 0{,}6, \\cos 37^\\circ = 0{,}8$). Hitung posisi koordinat peluru $(x, y)$ saat $t = 2\\text{ s}$ ($g = 10\\text{ m/s}^2$).",
          steps: [
            "$v_x = 50 \\times 0{,}8 = 40\\text{ m/s}$",
            "$x = v_x \\cdot t = 40 \\times 2 = 80\\text{ m}$",
            "$y = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2 = (50 \\times 0{,}6)(2) - \\frac{1}{2}(10)(2^2) = 60 - 20 = 40\\text{ m}$"
          ],
          answer: "Koordinat $(80\\text{ m}, 40\\text{ m})$"
        }
      },
      {
        id: "fis-kin-lengkung-f02",
        code: "R-02",
        title: "Titik Puncak & Jangkauan Terjauh Parabola",
        formulaLatex: "h_{\\max} = \\frac{v_0^2 \\sin^2\\theta}{2g} \\\\[6pt] x_{\\max} = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{2 v_0^2 \\sin\\theta \\cos\\theta}{g} \\\\[6pt] \\text{Jangkauan Maksimum } x_{\\max} \\iff \\theta = 45^\\circ",
        conditions: "Benda ditembakkan dan mendarat pada bidang horizontal yang sejajar datar.",
        variables: [
          { symbol: "h_{\\max}", desc: "Ketinggian maksimum proyektil" },
          { symbol: "x_{\\max}", desc: "Jarak horizontal terjauh sebelum menyentuh tanah" }
        ],
        traps: "Perhatikan sudut rangkap: $\\sin 2\\theta$ pada jangkauan horizontal $x_{\\max}$, jangan tertukar dengan $\\sin^2\\theta$ pada $h_{\\max}$.",
        example: {
          question: "Sebuah bola ditendang dengan kecepatan $20\\text{ m/s}$ pada sudut $30^\\circ$. Hitung tinggi maksimum dan jarak mendatar terjauh ($g = 10\\text{ m/s}^2$).",
          steps: [
            "$h_{\\max} = \\frac{20^2 \\cdot (\\sin 30^\\circ)^2}{2(10)} = \\frac{400 \\cdot (0{,}5)^2}{20} = 20 \\times 0{,}25 = 5\\text{ m}$",
            "$x_{\\max} = \\frac{20^2 \\cdot \\sin(2 \\times 30^\\circ)}{10} = \\frac{400 \\cdot \\sin 60^\\circ}{10} = 40 \\cdot \\frac{1}{2}\\sqrt{3} = 20\\sqrt{3}\\text{ m}$"
          ],
          answer: "$h_{\\max} = 5\\text{ m}$ dan $x_{\\max} = 20\\sqrt{3}\\text{ m}$"
        }
      },
      {
        id: "fis-kin-lengkung-f03",
        code: "R-03",
        title: "Kinematika Gerak Melingkar Beraturan (GMB)",
        formulaLatex: "\\omega = 2\\pi f = \\frac{2\\pi}{T} \\\\[4pt] v = \\omega \\cdot r \\\\[4pt] a_s = \\frac{v^2}{r} = \\omega^2 \\cdot r \\\\[4pt] \\text{Roda Sepusat: } \\omega_A = \\omega_B, \\quad \\text{Roda Bersinggungan/Tali: } v_A = v_B",
        conditions: "Kelajuan linear konstan, arah kecepatan selalu menyinggung lingkaran, vektor percepatan sentripetal menuju pusat.",
        variables: [
          { symbol: "\\omega", desc: "Kecepatan sudut (rad/s)" },
          { symbol: "v", desc: "Kelajuan linear tangensial (m/s)" },
          { symbol: "a_s", desc: "Percepatan sentripetal (m/s$^2$)" },
          { symbol: "r", desc: "Jari-jari lintasan lingkaran (m)" }
        ],
        traps: "Hubungan roda dihubungkan rantai yang sama adalah kelajuan linearnya: $v_A = v_B \\iff \\omega_A r_A = \\omega_B r_B$.",
        example: {
          question: "Roda A berjejari $10\\text{ cm}$ dihubungkan tali dengan roda B berjejari $25\\text{ cm}$. Jika roda A berputar dengan kecepatan sudut $20\\text{ rad/s}$, tentukan kecepatan sudut roda B.",
          steps: [
            "Karena dihubungkan tali rantai, kelajuan linear sama: $v_A = v_B$",
            "$\\omega_A \\cdot r_A = \\omega_B \\cdot r_B$",
            "$20 \\times 10 = \\omega_B \\times 25 \\implies 200 = 25\\omega_B \\implies \\omega_B = 8\\text{ rad/s}$"
          ],
          answer: "$8\\text{ rad/s}$"
        }
      }
    ]
  },

  "fis-din-gaya": {
    subChapterId: "fis-din-gaya",
    title: "Gaya dan Gerak",
    chapterId: "fis-din",
    chapterTitle: "Dinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum gerak Newton I, II, dan III, penguraian gaya berat dan normal pada bidang datar & miring, gaya gesek statis-kinetis, serta tegangan tali pada sistem katrol.",
    subTopicsCovered: [
      "Hukum I Newton",
      "Hukum II Newton",
      "Hukum III Newton",
      "Gaya Berat dan Gaya Normal",
      "Gaya Gesek Statis dan Kinetis",
      "Gaya Tegangan Tali",
      "Gaya Sentripetal"
    ],
    formulas: [
      {
        id: "fis-din-gaya-f01",
        code: "R-01",
        title: "Hukum II Newton & Penguraian Gaya Bidang Miring",
        formulaLatex: "\\Sigma \\vec{F} = m \\cdot \\vec{a} \\\\[6pt] \\text{Bidang Miring Sudut } \\theta: \\\\[4pt] w_x = m g \\sin\\theta \\; (\\text{Sejajar bidang}), \\quad N = w_y = m g \\cos\\theta \\; (\\text{Tegak lurus bidang}) \\\\[4pt] a = g(\\sin\\theta - \\mu_k \\cos\\theta) \\quad (\\text{Jika meluncur turun})",
        conditions: "Sudut kemiringan $\\theta$ diukur terhadap bidang horizontal.",
        variables: [
          { symbol: "m", desc: "Massa benda (kg)" },
          { symbol: "N", desc: "Gaya normal kontak permukaan (N)" },
          { symbol: "\\mu_k", desc: "Koefisien gesekan kinetis" }
        ],
        traps: "Komponen sejajar bidang miring adalah $\\sin\\theta$, sedangkan gaya normal adalah $\\cos\\theta$.",
        example: {
          question: "Balok bermassa $4\\text{ kg}$ meluncur turun pada bidang miring licin (tanpa gesekan) dengan sudut kemiringan $30^\\circ$. Hitung percepatan balok ($g = 10\\text{ m/s}^2$).",
          steps: [
            "Gaya penyebab gerak searah kemiringan: $\\Sigma F = m g \\sin 30^\\circ$",
            "Berdasarkan Hukum II Newton: $m a = m g \\sin 30^\\circ \\implies a = g \\sin 30^\\circ$",
            "$a = 10 \\times 0{,}5 = 5\\text{ m/s}^2$"
          ],
          answer: "$5\\text{ m/s}^2$"
        }
      },
      {
        id: "fis-din-gaya-f02",
        code: "R-02",
        title: "Gaya Gesek Statis Maksimum & Kinetis",
        formulaLatex: "f_s^{\\max} = \\mu_s \\cdot N \\\\[4pt] f_k = \\mu_k \\cdot N \\quad (\\mu_s > \\mu_k) \\\\[6pt] \\text{Jika } F_{\\text{tarik}} \\le f_s^{\\max} \\implies \\text{Benda Diam, } f_s = F_{\\text{tarik}} \\\\[4pt] \\text{Jika } F_{\\text{tarik}} > f_s^{\\max} \\implies \\text{Benda Bergerak, } f_{\\text{gesek}} = f_k",
        conditions: "Gaya gesek selalu berarah melawan kecenderungan arah gerak benda.",
        variables: [
          { symbol: "\\mu_s, \\mu_k", desc: "Koefisien gesek statis dan kinetis permukaan" }
        ],
        traps: "Jika benda masih diam, besar gaya gesek statis sama dengan gaya tariknya ($f_s = F_{\\text{tarik}}$), bukan sama dengan $\\mu_s N$.",
        example: {
          question: "Balok $2\\text{ kg}$ berada di lantai mendatar dengan $\\mu_s = 0{,}4$ dan $\\mu_k = 0{,}2$ ($g = 10\\text{ m/s}^2$). Jika ditarik gaya horizontal $6\\text{ N}$, tentukan besar gaya gesek yang bekerja.",
          steps: [
            "Gaya normal: $N = mg = 2 \\times 10 = 20\\text{ N}$",
            "Gaya gesek statis maksimum: $f_s^{\\max} = \\mu_s N = 0{,}4 \\times 20 = 8\\text{ N}$",
            "Karena gaya tarik $F = 6\\text{ N} < f_s^{\\max} = 8\\text{ N}$, balok tetap diam",
            "Maka gaya gesek yang bekerja mengimbangi gaya tarik: $f_s = 6\\text{ N}$"
          ],
          answer: "$6\\text{ N}$"
        }
      },
      {
        id: "fis-din-gaya-f03",
        code: "R-03",
        title: "Sistem Katrol Atwood & Tegangan Tali",
        formulaLatex: "a = \\frac{(m_2 - m_1) g}{m_1 + m_2} \\quad (m_2 > m_1) \\\\[6pt] T = \\frac{2 m_1 m_2}{m_1 + m_2} g",
        conditions: "Katrol licin ideal tanpa massa dan tali tak bermassa/tidak mulur.",
        variables: [
          { symbol: "T", desc: "Gaya tegangan tali penghubung (N)" },
          { symbol: "a", desc: "Percepatan linear kedua beban (m/s$^2$)" }
        ],
        traps: "Jika katrol bermassa $M$, tambahkan inersia katrol pada penyebut: $m_1 + m_2 + \\frac{1}{2}M$.",
        example: {
          question: "Dua massa $m_1 = 3\\text{ kg}$ dan $m_2 = 5\\text{ kg}$ digantungkan pada katrol licin tak bermassa. Tentukan percepatan sistem ($g = 10\\text{ m/s}^2$).",
          steps: [
            "$a = \\frac{(m_2 - m_1) g}{m_1 + m_2} = \\frac{(5 - 3)(10)}{3 + 5} = \\frac{20}{8} = 2{,}5\\text{ m/s}^2$"
          ],
          answer: "$2{,}5\\text{ m/s}^2$"
        }
      }
    ]
  },

  "fis-din-mom": {
    subChapterId: "fis-din-mom",
    title: "Momentum dan Impuls",
    chapterId: "fis-din",
    chapterTitle: "Dinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum kekekalan momentum linier, teorema impuls-perubahan momentum, koefisien restitusi, klasifikasi tumbukan, dan pantulan bola jatuh bebas.",
    subTopicsCovered: [
      "Momentum Linier",
      "Impuls & Teorema Impuls-Momentum",
      "Hukum Kekekalan Momentum",
      "Tumbukan & Koefisien Restitusi"
    ],
    formulas: [
      {
        id: "fis-din-mom-f01",
        code: "R-01",
        title: "Teorema Impuls - Perubahan Momentum",
        formulaLatex: "I = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_t - \\vec{v}_0) \\\\[4pt] I = \\int F \\, dt = \\text{Luas daerah di bawah kurva grafik } F-t",
        conditions: "Momentum dan kecepatan adalah besaran vektor (arah gerak menentukan tanda $\\pm$).",
        variables: [
          { symbol: "I", desc: "Impuls gaya (N$\\cdot$s atau kg$\\cdot$m/s)" },
          { symbol: "\\Delta p", desc: "Perubahan momentum (kg$\\cdot$m/s)" }
        ],
        traps: "Jika bola memantul berbalik arah, kecepatan akhir bertanda negatif: $\\Delta v = -v_t - v_0$.",
        example: {
          question: "Bola bermassa $0{,}2\\text{ kg}$ melaju dengan kecepatan $10\\text{ m/s}$ ke barat, lalu dipukul sehingga berbalik ke timur dengan kelajuan $15\\text{ m/s}$. Tentukan impuls pemukul.",
          steps: [
            "Arah barat negatif ($v_0 = -10\\text{ m/s}$), arah timur positif ($v_t = +15\\text{ m/s}$)",
            "$I = m(v_t - v_0) = 0{,}2 [15 - (-10)] = 0{,}2(25) = 5\\text{ N}\\cdot\\text{s}$"
          ],
          answer: "$5\\text{ N}\\cdot\\text{s}$ ke arah timur"
        }
      },
      {
        id: "fis-din-mom-f02",
        code: "R-02",
        title: "Hukum Kekekalan Momentum & Klasifikasi Tumbukan",
        formulaLatex: "m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\\\[6pt] e = -\\frac{v_1' - v_2'}{v_1 - v_2} = \\frac{v_2' - v_1'}{v_1 - v_2} \\\\[4pt] \\text{Lenting Sempurna: } e = 1, \\quad \\text{Sebagian: } 0 < e < 1, \\quad \\text{Tidak Lenting Sama Sekali: } e = 0 \\implies v_1' = v_2' = v'",
        conditions: "Berlaku selama tidak ada gaya luar eksternal neto yang bekerja pada sistem.",
        variables: [
          { symbol: "e", desc: "Koefisien elastisitas restitusi ($0 \\le e \\le 1$)" }
        ],
        traps: "Pada tumbukan tidak lenting sama sekali ($e=0$), energi kinetik hilang maksimum berubah menjadi kalor/deformasi.",
        example: {
          question: "Benda A ($2\\text{ kg}$) bergerak $4\\text{ m/s}$ menumbuk benda B ($3\\text{ kg}$) yang diam. Setelah tumbukan kedua benda menyatu dan bergerak bersama. Hitung kelajuan kedua benda setelah tumbukan.",
          steps: [
            "Gunakan tumbukan tidak lenting sama sekali ($e = 0$):",
            "$m_A v_A + m_B v_B = (m_A + m_B) v'$",
            "$(2)(4) + (3)(0) = (2 + 3) v' \\implies 8 = 5v' \\implies v' = 1{,}6\\text{ m/s}$"
          ],
          answer: "$1{,}6\\text{ m/s}$"
        }
      },
      {
        id: "fis-din-mom-f03",
        code: "R-03",
        title: "Pantulan Bola Jatuh Bebas",
        formulaLatex: "e = \\sqrt{\\frac{h_2}{h_1}} = \\sqrt{\\frac{h_3}{h_2}} = \\dots = \\sqrt{\\frac{h_n}{h_{n-1}}}",
        conditions: "Lantai mendatar kokoh diam.",
        variables: [
          { symbol: "h_1", desc: "Ketinggian awal bola dijatuhkan" },
          { symbol: "h_2", desc: "Ketinggian pantulan pertama" }
        ],
        traps: "Pangkat pecahan: perbandingan tinggi pantulan adalah kuadrat koefisien restitusi ($h_2 = e^2 h_1$).",
        example: {
          question: "Sebuah bola dijatuhkan bebas dari ketinggian $100\\text{ cm}$. Jika koefisien restitusi lantai $e = 0{,}6$, tentukan tinggi pantulan pertama bola.",
          steps: [
            "$e = \\sqrt{\\frac{h_2}{h_1}} \\implies e^2 = \\frac{h_2}{h_1}$",
            "$h_2 = e^2 \\cdot h_1 = (0{,}6)^2 \\times 100 = 0{,}36 \\times 100 = 36\\text{ cm}$"
          ],
          answer: "$36\\text{ cm}$"
        }
      }
    ]
  },

  "fis-din-rot": {
    subChapterId: "fis-din-rot",
    title: "Dinamika Rotasi & Kesetimbangan",
    chapterId: "fis-din",
    chapterTitle: "Dinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Torsi/momen gaya, momen inersia berbagai geometri benda tegar, hukum II Newton rotasi, gerak menggelinding murni, kesetimbangan statis, dan pusat massa.",
    subTopicsCovered: [
      "Momen Gaya (Torsi)",
      "Momen Inersia",
      "Hukum II Newton Rotasi",
      "Kesetimbangan Benda Tegar",
      "Titik Berat"
    ],
    formulas: [
      {
        id: "fis-din-rot-f01",
        code: "R-01",
        title: "Momen Gaya (Torsi) & Hukum II Newton Rotasi",
        formulaLatex: "\\tau = F \\cdot r \\sin\\theta \\\\[4pt] \\Sigma \\tau = I \\cdot \\alpha = I \\cdot \\left(\\frac{a}{r}\\right)",
        conditions: "Lengan gaya $r\\sin\\theta$ adalah jarak tegak lurus dari poros putar ke garis kerja gaya.",
        variables: [
          { symbol: "\\tau", desc: "Momen gaya torsi (N$\\cdot$m)" },
          { symbol: "I", desc: "Momen inersia benda tegar (kg$\\cdot$m$^2$)" },
          { symbol: "\\alpha", desc: "Percepatan sudut rotasi (rad/s$^2$)" }
        ],
        traps: "Gaya yang garis kerjanya melewati poros putar memiliki lengan gaya nol sehingga tidak menghasilkan torsi ($\\tau = 0$).",
        example: {
          question: "Sebuah roda silinder pejal bermassa $4\\text{ kg}$ dan jari-jari $0{,}2\\text{ m}$ ($I = \\frac{1}{2}mr^2$) ditarik dengan gaya tangensial $10\\text{ N}$ di tepinya. Tentukan percepatan sudut putaran roda.",
          steps: [
            "Momen inersia: $I = \\frac{1}{2}mr^2 = \\frac{1}{2}(4)(0{,}2)^2 = 2 \\times 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$",
            "Torsi: $\\tau = F \\cdot r = 10 \\times 0{,}2 = 2\\text{ N}\\cdot\\text{m}$",
            "Percepatan sudut: $\\alpha = \\frac{\\tau}{I} = \\frac{2}{0{,}08} = 25\\text{ rad/s}^2$"
          ],
          answer: "$25\\text{ rad/s}^2$"
        }
      },
      {
        id: "fis-din-rot-f02",
        code: "R-02",
        title: "Energi Kinetik & Percepatan Menggelinding Murni",
        formulaLatex: "EK_{\\text{total}} = EK_{\\text{trans}} + EK_{\\text{rot}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2(1 + k) \\\\[6pt] \\text{Bidang Miring: } a = \\frac{g \\sin\\theta}{1 + k}, \\quad v_{\\text{dasar}} = \\sqrt{\\frac{2gh}{1 + k}}",
        conditions: "Benda menggelinding murni tanpa selip ($v = \\omega r$). Faktor geometri $I = k \\cdot mr^2$.",
        variables: [
          { symbol: "k", desc: "Konstanta inersia: silinder pejal ($k = 1/2$), bola pejal ($k = 2/5$), bola berongga ($k = 2/3$)" }
        ],
        traps: "Benda dengan nilai $k$ paling kecil (bola pejal) akan memiliki percepatan terbesar dan tiba di dasar bidang miring paling awal.",
        example: {
          question: "Sebuah bola pejal ($k = 2/5$) menggelinding menuruni bidang miring dengan ketinggian vertikal $h = 7\\text{ m}$. Hitung kelajuan bola saat mencapai dasar ($g = 10\\text{ m/s}^2$).",
          steps: [
            "Rumus: $v = \\sqrt{\\frac{2gh}{1 + k}}$",
            "Substitusi: $v = \\sqrt{\\frac{2(10)(7)}{1 + 2/5}} = \\sqrt{\\frac{140}{7/5}} = \\sqrt{140 \\times \\frac{5}{7}} = \\sqrt{100} = 10\\text{ m/s}$"
          ],
          answer: "$10\\text{ m/s}$"
        }
      },
      {
        id: "fis-din-rot-f03",
        code: "R-03",
        title: "Syarat Kesetimbangan Statis Benda Tegar",
        formulaLatex: "\\Sigma F_x = 0, \\quad \\Sigma F_y = 0, \\quad \\Sigma \\tau = 0 \\quad (\\text{pada sembarang titik poros})",
        conditions: "Benda tidak mengalami translasi maupun rotasi.",
        variables: [
          { symbol: "\\Sigma \\tau = 0", desc: "Jumlah torsi terhadap titik poros manapun harus sama dengan nol" }
        ],
        traps: "Pilihlah titik poros pada titik yang dilalui oleh gaya terbanyak yang tidak diketahui nilainya agar perhitungannya efisien.",
        example: {
          question: "Batang homogen $AB$ dengan berat $w = 60\\text{ N}$ dan panjang $4\\text{ m}$ bertumpu pada titik penumpu di $A$. Jika di titik $B$ digantung beban $100\\text{ N}$, tentukan gaya angkat ke atas di ujung $B$ agar batang tetap mendatar seimbang.",
          steps: [
            "Titik berat batang di tengah (jarak $2\\text{ m}$ dari $A$)",
            "Pilih poros di $A$: $\\Sigma \\tau_A = 0$",
            "$(w_{\\text{batang}} \\times 2) + (w_{\\text{beban}} \\times 4) - (F_B \\times 4) = 0$",
            "$(60 \\times 2) + (100 \\times 4) - 4 F_B = 0 \\implies 120 + 400 = 4 F_B \\implies 4 F_B = 520 \\implies F_B = 130\\text{ N}$"
          ],
          answer: "$130\\text{ N}$"
        }
      }
    ]
  },

  "fis-flu-statis": {
    subChapterId: "fis-flu-statis",
    title: "Fluida Statis",
    chapterId: "fis-flu",
    chapterTitle: "Fluida",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Tekanan hidrostatis, hukum bejana berhubungan (pipa U), dongkrak hidrolik hukum Pascal, serta gaya apung dan keadaan benda terapung/melayang hukum Archimedes.",
    subTopicsCovered: [
      "Tekanan Hidrostatis & Mutlak",
      "Hukum Utama Hidrostatis (Pipa U)",
      "Hukum Pascal",
      "Hukum Archimedes"
    ],
    formulas: [
      {
        id: "fis-flu-statis-f01",
        code: "R-01",
        title: "Tekanan Hidrostatis & Hukum Utama Hidrostatis",
        formulaLatex: "P_h = \\rho \\cdot g \\cdot h \\\\[4pt] P_{\\text{mutlak}} = P_0 + \\rho \\cdot g \\cdot h \\\\[6pt] \\text{Pipa U: } \\rho_1 \\cdot h_1 = \\rho_2 \\cdot h_2",
        conditions: "Kedalaman $h$ diukur dari permukaan fluida ke titik tinjau.",
        variables: [
          { symbol: "\\rho", desc: "Massa jenis fluida (kg/m$^3$)" },
          { symbol: "h", desc: "Kedalaman cairan (m)" },
          { symbol: "P_0", desc: "Tekanan udara atmosfer ($1\\text{ atm} \\approx 10^5\\text{ Pa}$)" }
        ],
        traps: "Mengukur $h$ dari dasar wadah; ingat $h$ adalah kedalaman dari batas permukaan cairan.",
        example: {
          question: "Pipa U diisi air ($\\rho_1 = 1000\\text{ kg/m}^3$). Salah satu kaki diisi minyak hingga tingginya $10\\text{ cm}$. Jika selisih permukaan air dan minyak adalah $2\\text{ cm}$ (tinggi air $= 8\\text{ cm}$), hitung massa jenis minyak.",
          steps: [
            "Hukum utama hidrostatis: $\\rho_{\\text{minyak}} \\cdot h_{\\text{minyak}} = \\rho_{\\text{air}} \\cdot h_{\\text{air}}$",
            "$\\rho_{\\text{minyak}} \\times 10 = 1000 \\times 8 \\implies \\rho_{\\text{minyak}} = \\frac{8000}{10} = 800\\text{ kg/m}^3$"
          ],
          answer: "$800\\text{ kg/m}^3$"
        }
      },
      {
        id: "fis-flu-statis-f02",
        code: "R-02",
        title: "Hukum Pascal (Dongkrak Hidrolik)",
        formulaLatex: "\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{d_2}{d_1}\\right)^2 = F_1 \\left(\\frac{r_2}{r_1}\\right)^2",
        conditions: "Fluida dalam ruang tertutup meneruskan tekanan ke segala arah dengan sama besar.",
        variables: [
          { symbol: "A_1, A_2", desc: "Luas penampang pengisap kecil dan besar" },
          { symbol: "d_1, d_2", desc: "Diameter pengisap pipa hidrolik" }
        ],
        traps: "Jika diketahui perbandingan diameter, perbandingan gayanya sebanding dengan kuadrat perbandingan diameter $(\\frac{d_2}{d_1})^2$.",
        example: {
          question: "Dongkrak hidrolik memiliki piston kecil berdiameter $4\\text{ cm}$ dan piston besar berdiameter $20\\text{ cm}$. Jika beban pada piston besar $10.000\\text{ N}$, tentukan gaya minimal pada piston kecil.",
          steps: [
            "$F_1 = F_2 \\left(\\frac{d_1}{d_2}\\right)^2 = 10.000 \\times \\left(\\frac{4}{20}\\right)^2 = 10.000 \\times \\left(\\frac{1}{5}\\right)^2 = \\frac{10.000}{25} = 400\\text{ N}$"
          ],
          answer: "$400\\text{ N}$"
        }
      },
      {
        id: "fis-flu-statis-f03",
        code: "R-03",
        title: "Hukum Archimedes & Benda Terapung",
        formulaLatex: "F_A = \\rho_f \\cdot g \\cdot V_{bf} \\\\[4pt] w' = w - F_A \\\\[6pt] \\text{Benda Terapung: } \\frac{V_{bf}}{V_b} = \\frac{\\rho_b}{\\rho_f}",
        conditions: "$V_{bf}$ adalah volume bagian benda yang tercelup saja.",
        variables: [
          { symbol: "F_A", desc: "Gaya apung ke atas oleh fluida (N)" },
          { symbol: "V_{bf}", desc: "Volume benda yang terbenam di dalam zat cair (m$^3$)" },
          { symbol: "w'", desc: "Berat semu benda saat berada di dalam fluida" }
        ],
        traps: "Gaya apung menggunakan massa jenis zat cair $\\rho_f$, bukan massa jenis benda $\\rho_b$.",
        example: {
          question: "Sebuah balok kayu bermassa jenis $600\\text{ kg/m}^3$ terapung di atas air ($\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$). Berapa persentase volume balok yang tercelup di dalam air?",
          steps: [
            "$\\frac{V_{\\text{tercelup}}}{V_{\\text{total}}} = \\frac{\\rho_{\\text{benda}}}{\\rho_{\\text{fluida}}} = \\frac{600}{1000} = 0{,}6 = 60\\%$"
          ],
          answer: "$60\\%$ tercelup (dan $40\\%$ berada di atas permukaan air)"
        }
      }
    ]
  },

  "fis-flu-dinamis": {
    subChapterId: "fis-flu-dinamis",
    title: "Fluida Dinamis",
    chapterId: "fis-flu",
    chapterTitle: "Fluida",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Persamaan kontinuitas dan debit, hukum kekekalan energi Bernoulli, teorema Torricelli pancaran air tangki bocor, venturimeter, dan gaya angkat sayap pesawat.",
    subTopicsCovered: [
      "Debit & Persamaan Kontinuitas",
      "Persamaan Bernoulli",
      "Tabung Pitot & Penyemprot",
      "Gaya Angkat Pesawat"
    ],
    formulas: [
      {
        id: "fis-flu-dinamis-f01",
        code: "R-01",
        title: "Debit Aliran & Persamaan Kontinuitas",
        formulaLatex: "Q = \\frac{V}{t} = A \\cdot v \\\\[4pt] A_1 v_1 = A_2 v_2 \\implies v_2 = v_1 \\left(\\frac{d_1}{d_2}\\right)^2",
        conditions: "Fluida inkompresibel (massa jenis konstan) dan aliran tunak non-viskos.",
        variables: [
          { symbol: "Q", desc: "Debit aliran volume per satuan waktu (m$^3$/s)" },
          { symbol: "A", desc: "Luas penampang saluran pipa (m$^2$)" },
          { symbol: "v", desc: "Kecepatan alir fluida (m/s)" }
        ],
        traps: "Pipa yang menyempit memiliki luas lebih kecil, sehingga kecepatan alirnya meningkat berbanding terbalik dengan kuadrat diameternya.",
        example: {
          question: "Air mengalir dalam pipa berdiameter $6\\text{ cm}$ dengan kelajuan $2\\text{ m/s}$. Berapakah kelajuan air saat melalui penampang pipa yang menyempit menjadi diameter $3\\text{ cm}$?",
          steps: [
            "$v_2 = v_1 \\left(\\frac{d_1}{d_2}\\right)^2 = 2 \\times \\left(\\frac{6}{3}\\right)^2 = 2 \\times (2)^2 = 2 \\times 4 = 8\\text{ m/s}$"
          ],
          answer: "$8\\text{ m/s}$"
        }
      },
      {
        id: "fis-flu-dinamis-f02",
        code: "R-02",
        title: "Persamaan Asas Bernoulli",
        formulaLatex: "P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\text{konstan}",
        conditions: "Di bagian pipa horizontal ($h_1 = h_2$), penampang dengan kelajuan fluida paling tinggi memiliki tekanan statis paling rendah ($P$ kecil).",
        variables: [
          { symbol: "P", desc: "Tekanan statis fluida (Pa)" },
          { symbol: "\\frac{1}{2}\\rho v^2", desc: "Tekanan dinamis fluida (Pa)" }
        ],
        traps: "Di tempat yang alirannya cepat kecepatannya tinggi, tekanannya justru lebih kecil, bukan lebih besar.",
        example: {
          question: "Air mengalir dalam pipa mendatar dari penampang 1 bertekanan $1{,}5 \\times 10^5\\text{ Pa}$ dengan kelajuan $2\\text{ m/s}$ ke penampang 2 dengan kelajuan $6\\text{ m/s}$. Tentukan tekanan di penampang 2 ($\\rho = 1000\\text{ kg/m}^3$).",
          steps: [
            "Pipa mendatar ($h_1 = h_2$): $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$",
            "$150.000 + \\frac{1}{2}(1000)(2^2) = P_2 + \\frac{1}{2}(1000)(6^2)$",
            "$150.000 + 2.000 = P_2 + 18.000$",
            "$P_2 = 152.000 - 18.000 = 134.000\\text{ Pa} = 1{,}34 \\times 10^5\\text{ Pa}$"
          ],
          answer: "$1{,}34 \\times 10^5\\text{ Pa}$"
        }
      },
      {
        id: "fis-flu-dinamis-f03",
        code: "R-03",
        title: "Teorema Torricelli (Tangki Bocor)",
        formulaLatex: "v = \\sqrt{2gh_1} \\\\[4pt] t = \\sqrt{\\frac{2h_2}{g}} \\\\[4pt] x = 2\\sqrt{h_1 \\cdot h_2}",
        conditions: "Luas lubang bocor sangat kecil dibanding luas permukaan tangki penampung. $h_1$ adalah jarak dari lubang ke permukaan air atas, $h_2$ adalah jarak dari lubang ke tanah dasar.",
        variables: [
          { symbol: "h_1", desc: "Kedalaman lubang dari permukaan fluida teratas" },
          { symbol: "h_2", desc: "Tinggi lubang diukur dari lantai/tanah" },
          { symbol: "x", desc: "Jangkauan horizontal pancaran air di tanah" }
        ],
        traps: "Tertukar antara kedalaman dari atas ($h_1$) untuk kelajuan dan ketinggian dari bawah ($h_2$) untuk waktu jatuh.",
        example: {
          question: "Sebuah tangki air memiliki lubang kebocoran $5\\text{ m}$ di bawah permukaan air. Jika posisi lubang tersebut berada $1{,}25\\text{ m}$ di atas tanah, hitung jangkauan pancaran air mendatar di tanah ($g = 10\\text{ m/s}^2$).",
          steps: [
            "Identifikasi: $h_1 = 5\\text{ m}$ dan $h_2 = 1{,}25\\text{ m}$",
            "$x = 2\\sqrt{h_1 \\cdot h_2} = 2\\sqrt{5 \\times 1{,}25} = 2\\sqrt{6{,}25} = 2 \\times 2{,}5 = 5\\text{ m}$"
          ],
          answer: "$5\\text{ m}$"
        }
      },
      {
        id: "fis-flu-dinamis-f04",
        code: "R-04",
        title: "Gaya Angkat Sayap Pesawat Terbang",
        formulaLatex: "F_{\\text{angkat}} = (P_{\\text{bawah}} - P_{\\text{atas}}) A = \\frac{1}{2} \\rho_{\\text{udara}} A (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)",
        conditions: "Kelajuan udara di atas sayap lebih cepat dibanding di bawah sayap ($v_{\\text{atas}} > v_{\\text{bawah}}$).",
        variables: [
          { symbol: "A", desc: "Luas penampang total sayap pesawat (m$^2$)" },
          { symbol: "\\rho_{\\text{udara}}", desc: "Massa jenis udara sekitar (kg/m$^3$)" }
        ],
        traps: "Di atas sayap kelajuan lebih cepat ($v_{\\text{atas}} > v_{\\text{bawah}}$) sehingga tekanannya lebih kecil ($P_{\\text{atas}} < P_{\\text{bawah}}$).",
        example: {
          question: "Sebuah sayap pesawat seluas $40\\text{ m}^2$ dialiri udara dengan laju di atas sayap $250\\text{ m/s}$ dan di bawah sayap $200\\text{ m/s}$. Jika $\\rho_{\\text{udara}} = 1{,}2\\text{ kg/m}^3$, tentukan besar gaya angkat sayap pesawat.",
          steps: [
            "$F = \\frac{1}{2} \\rho A (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2)$",
            "$F = \\frac{1}{2}(1{,}2)(40)(250^2 - 200^2) = 24 \\times (62.500 - 40.000) = 24 \\times 22.500 = 540.000\\text{ N} = 540\\text{ kN}$"
          ],
          answer: "$540\\text{ kN}$"
        }
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_FISIKA_MEKANIKA;
}
if (typeof window !== 'undefined') {
  window.FORMULAS_FISIKA_MEKANIKA = FORMULAS_FISIKA_MEKANIKA;
}
