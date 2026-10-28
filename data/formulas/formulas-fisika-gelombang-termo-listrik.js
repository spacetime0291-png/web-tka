/**
 * FORMULA BANK - FISIKA (TKA) BAGIAN 2: GELOMBANG, TERMODINAMIKA & KELISTRIKAN
 * Meliputi 8 Bab Kecil:
 * 9.  fis-gel-bunyi (Gelombang Bunyi)
 * 10. fis-gel-optik (Gelombang Cahaya & Optik)
 * 11. fis-termo-kalor (Kalor dan Perpindahannya)
 * 12. fis-termo-global (Pemanasan Global)
 * 13. fis-termo-gas (Teori Gas Ideal)
 * 14. fis-termo-hukum (Termodinamika)
 * 15. fis-lis-statis (Listrik Statis)
 * 16. fis-lis-dc (Rangkaian Arus Searah DC)
 */

const FORMULAS_FISIKA_LANJUTAN = {
  "fis-gel-bunyi": {
    subChapterId: "fis-gel-bunyi",
    title: "Gelombang Bunyi",
    chapterId: "fis-gel",
    chapterTitle: "Gelombang dan Optik",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Cepat rambat dawai Melde dan gas, frekuensi nada pipa organa, taraf intensitas bunyi gabungan dan jarak, serta efek Doppler dan pelayangan.",
    subTopicsCovered: [
      "Karakteristik Gelombang Bunyi",
      "Cepat Rambat Bunyi",
      "Dawai (Senar)",
      "Pipa Organa",
      "Intensitas & Taraf Intensitas",
      "Efek Doppler"
    ],
    formulas: [
      {
        id: "fis-gel-bunyi-f01",
        code: "R-01",
        title: "Cepat Rambat Dawai Melde & Gelombang Bunyi",
        formulaLatex: "\\text{Hukum Melde: } v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}} \\\\[6pt] \\text{Gas Ideal: } v = \\sqrt{\\frac{\\gamma R T}{M_r}}",
        conditions: "Tegangan dawai $F$ dalam Newton, massa per satuan panjang $\\mu = m/L$ (kg/m), suhu $T$ gas dalam Kelvin.",
        variables: [
          { symbol: "v", desc: "Cepat rambat gelombang transversal dawai (m/s)" },
          { symbol: "F", desc: "Tegangan dawai (N)" },
          { symbol: "\\mu", desc: "Rapat massa linear dawai (kg/m)" }
        ],
        traps: "Jika tegangan dawai dinaikkan 4 kali lipat, cepat rambatnya hanya bertambah 2 kali lipat karena berada di dalam akar.",
        example: {
          question: "Kawat sepanjang $2\\text{ m}$ dengan massa $10\\text{ gram}$ ditegangkan dengan gaya $50\\text{ N}$. Tentukan cepat rambat gelombang pada kawat tersebut.",
          steps: [
            "Massa kawat dalam kg: $m = 10\\text{ gram} = 0{,}01\\text{ kg}$",
            "Massa per satuan panjang: $\\mu = \\frac{m}{L} = \\frac{0{,}01}{2} = 0{,}005\\text{ kg/m}$",
            "Cepat rambat: $v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{50}{0{,}005}} = \\sqrt{10.000} = 100\\text{ m/s}$"
          ],
          answer: "$100\\text{ m/s}$"
        }
      },
      {
        id: "fis-gel-bunyi-f02",
        code: "R-02",
        title: "Harmonik Dawai, Pipa Organa Terbuka (POB) & Tertutup (POT)",
        formulaLatex: "\\text{Dawai & POB: } f_n = (n + 1) \\frac{v}{2L} \\quad (f_0 : f_1 : f_2 = 1 : 2 : 3 : \\dots) \\\\[6pt] \\text{POT: } f_n = (2n + 1) \\frac{v}{4L} \\quad (f_0 : f_1 : f_2 = 1 : 3 : 5 : \\dots)",
        conditions: "$n=0$ (nada dasar), $n=1$ (nada atas ke-1), $n=2$ (nada atas ke-2). POT hanya menghasilkan harmonik ganjil.",
        variables: [
          { symbol: "L", desc: "Panjang pipa atau dawai (m)" },
          { symbol: "n", desc: "Indeks nada atas" }
        ],
        traps: "Pipa organa tertutup memuat pembagi $4L$ dan kelipatan ganjil $(2n+1)$, bukan $(n+1)$.",
        example: {
          question: "Pipa organa terbuka memiliki panjang $50\\text{ cm}$. Jika cepat rambat bunyi di udara $340\\text{ m/s}$, tentukan frekuensi nada atas pertamanya ($n=1$).",
          steps: [
            "$L = 50\\text{ cm} = 0{,}5\\text{ m}$",
            "Nada atas ke-1 ($n=1$): $f_1 = (1 + 1) \\frac{v}{2L} = \\frac{2 \\times 340}{2 \\times 0{,}5} = \\frac{680}{1} = 680\\text{ Hz}$"
          ],
          answer: "$680\\text{ Hz}$"
        }
      },
      {
        id: "fis-gel-bunyi-f03",
        code: "R-03",
        title: "Intensitas & Taraf Intensitas Bunyi (TI)",
        formulaLatex: "I = \\frac{P}{4\\pi r^2} \\\\[4pt] TI = 10 \\log\\left(\\frac{I}{I_0}\\right) \\quad (I_0 = 10^{-12}\\text{ W/m}^2) \\\\[6pt] \\text{Kelipatan } n \\text{ Sumber Identik: } TI_n = TI_1 + 10 \\log n \\\\[4pt] \\text{Perubahan Jarak: } TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)",
        conditions: "Sumber memancar ke segala arah berbentuk bola konsentris.",
        variables: [
          { symbol: "TI", desc: "Taraf intensitas bunyi dalam satuan desibel (dB)" },
          { symbol: "r", desc: "Jarak pengamat ke sumber bunyi" }
        ],
        traps: "Koefisien logaritma: untuk penambahan jumlah sumber digunakan faktor $+10\\log n$, sedangkan perubahan jarak digunakan $-20\\log(r_2/r_1)$.",
        example: {
          question: "Taraf intensitas sebuah mesin adalah $60\\text{ dB}$. Jika terdapat 100 mesin identik yang dinyalakan serentak, tentukan taraf intensitas totalnya.",
          steps: [
            "$TI_n = TI_1 + 10\\log n$",
            "$TI_{100} = 60 + 10\\log(100) = 60 + 10(2) = 60 + 20 = 80\\text{ dB}$"
          ],
          answer: "$80\\text{ dB}$"
        }
      },
      {
        id: "fis-gel-bunyi-f04",
        code: "R-04",
        title: "Efek Doppler",
        formulaLatex: "f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s \\\\[4pt] \\text{Aturan Tanda: Pendengar Mendekat } (+v_p), \\quad \\text{Sumber Mendekat } (-v_s) \\\\[2pt] \\text{Pendengar Menjauh } (-v_p), \\quad \\text{Sumber Menjauh } (+v_s)",
        conditions: "Medium udara diam. Kecepatan angin nol.",
        variables: [
          { symbol: "f_p, f_s", desc: "Frekuensi yang didengar pengamat dan frekuensi asli sumber (Hz)" },
          { symbol: "v_p, v_s", desc: "Kelajuan pengamat dan kelajuan sumber bunyi (m/s)" },
          { symbol: "v", desc: "Cepat rambat bunyi di udara (m/s)" }
        ],
        traps: "Jika sumber mendekat, penyebut harus mengecil $(-v_s)$ agar frekuensi yang didengar bertambah tinggi.",
        example: {
          question: "Kereta api membunyikan sirine $720\\text{ Hz}$ bergerak mendekati stasiun dengan kelajuan $20\\text{ m/s}$. Seseorang duduk diam di peron stasiun. Jika cepat rambat bunyi $340\\text{ m/s}$, tentukan frekuensi yang didengar orang tersebut.",
          steps: [
            "Pengamat diam: $v_p = 0$. Sumber mendekat: $-v_s = -20\\text{ m/s}$",
            "$f_p = \\left(\\frac{v}{v - v_s}\\right) f_s = \\left(\\frac{340}{340 - 20}\\right) 720 = \\left(\\frac{340}{320}\\right) 720 = \\frac{17}{16} \\times 720 = 765\\text{ Hz}$"
          ],
          answer: "$765\\text{ Hz}$"
        }
      }
    ]
  },

  "fis-gel-optik": {
    subChapterId: "fis-gel-optik",
    title: "Gelombang Cahaya & Optik",
    chapterId: "fis-gel",
    chapterTitle: "Gelombang dan Optik",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum pembiasan Snellius, cermin dan lensa lengkung, cacat mata kacamata (miopi & hipermetropi), difraksi kisi, dan interferensi celah ganda.",
    subTopicsCovered: [
      "Spektrum Elektromagnetik",
      "Pemantulan Cahaya",
      "Pembiasan Cahaya (Hukum Snellius)",
      "Cermin Datar, Cekung, dan Cembung",
      "Lensa Cekung dan Cembung",
      "Mata dan Kacamata",
      "Lup, Mikroskop, dan Teropong"
    ],
    formulas: [
      {
        id: "fis-gel-optik-f01",
        code: "R-01",
        title: "Hukum Pembiasan Snellius & Sudut Kritis",
        formulaLatex: "n_1 \\sin i = n_2 \\sin r \\\\[4pt] \\sin\\theta_k = \\frac{n_2}{n_1} \\quad (n_1 > n_2, \\text{ Pemantulan Total Sempurna})",
        conditions: "Pemantulan total sempurna hanya dapat terjadi jika cahaya merambat dari medium lebih rapat ($n_1$) ke medium kurang rapat ($n_2$).",
        variables: [
          { symbol: "n_1, n_2", desc: "Indeks bias medium 1 dan medium 2" },
          { symbol: "\\theta_k", desc: "Sudut kritis batas terjadinya pemantulan internal total" }
        ],
        traps: "Sudut datang $i$ dan sudut bias $r$ diukur terhadap garis normal tegak lurus permukaan, bukan terhadap bidang batas kaca.",
        example: {
          question: "Cahaya merambat dari air ($n_1 = 4/3$) menuju udara ($n_2 = 1$). Tentukan besar sinus sudut kritis pemantulan total.",
          steps: [
            "$\\sin\\theta_k = \\frac{n_2}{n_1} = \\frac{1}{4/3} = \\frac{3}{4} = 0{,}75$"
          ],
          answer: "$\\sin\\theta_k = \\frac{3}{4}$"
        }
      },
      {
        id: "fis-gel-optik-f02",
        code: "R-02",
        title: "Rumus Gauss Cermin Lengkung & Lensa Tipis",
        formulaLatex: "\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\\\[4pt] M = \\left| \\frac{s'}{s} \\right| = \\left| \\frac{h'}{h} \\right| \\\\[4pt] P = \\frac{1}{f\\text{ (m)}} = \\frac{100}{f\\text{ (cm)}}",
        conditions: "Cermin Cekung / Lensa Cembung: fokus positif ($f > 0$). Cermin Cembung / Lensa Cekung: fokus negatif ($f < 0$).",
        variables: [
          { symbol: "s, s'", desc: "Jarak benda dan jarak bayangan" },
          { symbol: "M", desc: "Perbesaran bayangan" },
          { symbol: "P", desc: "Kekuatan lensa dalam satuan Dioptri (D)" }
        ],
        traps: "Jika bayangan maya (di belakang cermin / sepihak lensa), nilai $s'$ bertanda negatif.",
        example: {
          question: "Benda diletakkan $15\\text{ cm}$ di depan cermin cekung dengan fokus $10\\text{ cm}$. Tentukan jarak bayangan dan perbesarannya.",
          steps: [
            "$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3 - 2}{30} = \\frac{1}{30}$",
            "$s' = 30\\text{ cm}$ (nyata, di depan cermin)",
            "Perbesaran: $M = \\left|\\frac{s'}{s}\\right| = \\left|\\frac{30}{15}\\right| = 2\\text{ kali}$"
          ],
          answer: "Jarak bayangan $= 30\\text{ cm}$ dan perbesaran $= 2\\text{ kali}$"
        }
      },
      {
        id: "fis-gel-optik-f03",
        code: "R-03",
        title: "Koreksi Cacat Mata (Kacamata)",
        formulaLatex: "\\text{Miopi (Rabun Jauh): } P = -\\frac{100}{PR\\text{ (cm)}} \\\\[6pt] \\text{Hipermetropi (Rabun Dekat): } P = 4 - \\frac{100}{PP\\text{ (cm)}}",
        conditions: "Titik dekat normal standar $S_n = 25\\text{ cm}$. Titik jauh tak hingga.",
        variables: [
          { symbol: "PR", desc: "Punctum Remotum / Titik jauh mata miopi (cm)" },
          { symbol: "PP", desc: "Punctum Proximum / Titik dekat mata hipermetropi (cm)" }
        ],
        traps: "Kacamata miopi menggunakan lensa negatif/cekung (hasil $P$ bertanda minus).",
        example: {
          question: "Seorang penderita miopi tidak dapat melihat benda dengan jelas yang berjarak lebih dari $200\\text{ cm}$. Tentukan kekuatan lensa kacamata yang diperlukannya.",
          steps: [
            "$P = -\\frac{100}{PR} = -\\frac{100}{200} = -0{,}5\\text{ Dioptri}$"
          ],
          answer: "$-0{,}5\\text{ Dioptri}$"
        }
      },
      {
        id: "fis-gel-optik-f04",
        code: "R-04",
        title: "Difraksi Kisi & Celah Ganda",
        formulaLatex: "d \\sin\\theta = n \\cdot \\lambda \\\\[4pt] \\frac{d \\cdot y}{L} = n \\cdot \\lambda \\\\[4pt] d = \\frac{1}{N} \\quad (N = \\text{jumlah garis per satuan panjang})",
        conditions: "Terang ke-$n$ (maksimum) berlaku $n = 0, 1, 2, \\dots$. Gelap ke-$n$ berlaku $(n - \\frac{1}{2})\\lambda$.",
        variables: [
          { symbol: "d", desc: "Lebar celah kisi (m)" },
          { symbol: "y", desc: "Jarak garis terang ke-$n$ dari terang pusat pada layar (m)" },
          { symbol: "L", desc: "Jarak kisi ke layar (m)" }
        ],
        traps: "Satuan kisi sering dinyatakan dalam garis/cm atau garis/mm; konversikan selalu ke meter terlebih dahulu.",
        example: {
          question: "Sebuah kisi memiliki 500 garis/mm disinari cahaya dengan panjang gelombang $600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$). Tentukan sudut difraksi untuk terang orde pertama ($n=1$).",
          steps: [
            "Konversi lebar celah: $d = \\frac{1}{500\\text{ garis/mm}} = 2 \\times 10^{-3}\\text{ mm} = 2 \\times 10^{-6}\\text{ m}$",
            "$d \\sin\\theta = n\\lambda \\implies (2 \\times 10^{-6}) \\sin\\theta = 1 \\times (6 \\times 10^{-7})$",
            "$\\sin\\theta = \\frac{6 \\times 10^{-7}}{2 \\times 10^{-6}} = 0{,}3$"
          ],
          answer: "$\\sin\\theta = 0{,}3$"
        }
      }
    ]
  },

  "fis-termo-kalor": {
    subChapterId: "fis-termo-kalor",
    title: "Kalor dan Perpindahannya",
    chapterId: "fis-termo",
    chapterTitle: "Kalor dan Termodinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Kalor sensibel dan kapasitas kalor, kalor laten perubahan wujud, Asas Black kesetimbangan termal, pemuaian zat padat-cair, serta konduksi dan radiasi Stefan-Boltzmann.",
    subTopicsCovered: [
      "Kalor Sensibel & Kalor Laten",
      "Pemuaian Zat",
      "Asas Black",
      "Konduksi, Konveksi, dan Radiasi"
    ],
    formulas: [
      {
        id: "fis-termo-kalor-f01",
        code: "R-01",
        title: "Kalor Sensibel, Kalor Laten & Asas Black",
        formulaLatex: "Q_{\\text{suhu}} = m \\cdot c \\cdot \\Delta T = C \\cdot \\Delta T \\\\[4pt] Q_{\\text{wujud}} = m \\cdot L \\\\[6pt] \\text{Asas Black: } Q_{\\text{lepas}} = Q_{\\text{terima}} \\implies m_1 c_1 (T_1 - T_c) = m_2 c_2 (T_c - T_2)",
        conditions: "Kalor jenis air $c_{\\text{air}} = 4200\\text{ J/kg}^\\circ\\text{C} = 1\\text{ kal/g}^\\circ\\text{C}$. Kalor lebur es $L_{\\text{es}} = 80\\text{ kal/g} = 336.000\\text{ J/kg}$.",
        variables: [
          { symbol: "c", desc: "Kalor jenis bahan" },
          { symbol: "L", desc: "Kalor laten lebur atau uap" },
          { symbol: "T_c", desc: "Suhu akhir campuran kesetimbangan termal" }
        ],
        traps: "Jika es mengalami peleburan, jangan lupa menghitung kalor lebur $m \\cdot L$ selain kalor perubahan suhu $m \\cdot c \\cdot \\Delta T$.",
        example: {
          question: "Air bermassa $200\\text{ g}$ bersuhu $80^\\circ\\text{C}$ dicampurkan dengan air bermassa $100\\text{ g}$ bersuhu $20^\\circ\\text{C}$ dalam wadah terisolasi. Tentukan suhu akhir campuran.",
          steps: [
            "Asas Black: $Q_{\\text{lepas}} = Q_{\\text{terima}}$",
            "$m_1 \\cdot c \\cdot (T_1 - T_c) = m_2 \\cdot c \\cdot (T_c - T_2)$",
            "$200(80 - T_c) = 100(T_c - 20)$",
            "$2(80 - T_c) = T_c - 20 \\implies 160 - 2T_c = T_c - 20 \\implies 3T_c = 180 \\implies T_c = 60^\\circ\\text{C}$"
          ],
          answer: "$60^\\circ\\text{C}$"
        }
      },
      {
        id: "fis-termo-kalor-f02",
        code: "R-02",
        title: "Pemuaian Zat Padat (Panjang, Luas, Volume)",
        formulaLatex: "\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T \\implies L_t = L_0(1 + \\alpha \\Delta T) \\\\[4pt] \\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T \\quad (\\beta = 2\\alpha) \\\\[4pt] \\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T \\quad (\\gamma = 3\\alpha)",
        conditions: "Perubahan suhu $\\Delta T = T_t - T_0$.",
        variables: [
          { symbol: "\\alpha, \\beta, \\gamma", desc: "Koefisien muai panjang, luas, dan volume" }
        ],
        traps: "Koefisien muai volume zat padat isotropik adalah 3 kali koefisien muai panjang ($\\gamma = 3\\alpha$).",
        example: {
          question: "Batang tembaga sepanjang $100\\text{ cm}$ dipanaskan dari $20^\\circ\\text{C}$ hingga $120^\\circ\\text{C}$. Jika $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, tentukan pertambahan panjang batang.",
          steps: [
            "$\\Delta T = 120 - 20 = 100^\\circ\\text{C}$",
            "$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T = 100 \\times (1{,}7 \\times 10^{-5}) \\times 100 = 1{,}7 \\times 10^{-1} = 0{,}17\\text{ cm}$"
          ],
          answer: "$0{,}17\\text{ cm} = 1{,}7\\text{ mm}$"
        }
      },
      {
        id: "fis-termo-kalor-f03",
        code: "R-03",
        title: "Laju Perpindahan Kalor Konduksi & Radiasi",
        formulaLatex: "\\text{Konduksi: } H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L} \\\\[6pt] \\text{Radiasi: } P = \\frac{Q}{t} = e \\cdot \\sigma \\cdot A \\cdot T^4 \\quad (\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4)",
        conditions: "Suhu pada rumus radiasi Stefan-Boltzmann wajib dinyatakan dalam satuan mutlak Kelvin ($T\\text{ [K]} = T\\text{ [}^\\circ\\text{C]} + 273$).",
        variables: [
          { symbol: "k", desc: "Konduktivitas termal bahan" },
          { symbol: "e", desc: "Emisivitas permukaan ($0 \\le e \\le 1$)" },
          { symbol: "T", desc: "Suhu mutlak permukaan dalam Kelvin" }
        ],
        traps: "Lupa memangkatkan empat suhu mutlak $T^4$ pada laju radiasi.",
        example: {
          question: "Dua batang logam A dan B disambungkan dengan luas penampang dan panjang sama. Jika konduktivitas $k_A = 2 k_B$, ujung bebas A bersuhu $100^\\circ\\text{C}$ dan ujung bebas B bersuhu $25^\\circ\\text{C}$, tentukan suhu bidang batas sambungan ($T_s$).",
          steps: [
            "Laju konduksi sama: $H_A = H_B \\implies \\frac{k_A A (100 - T_s)}{L} = \\frac{k_B A (T_s - 25)}{L}$",
            "$2 k_B (100 - T_s) = k_B (T_s - 25)$",
            "$2(100 - T_s) = T_s - 25 \\implies 200 - 2T_s = T_s - 25 \\implies 3T_s = 225 \\implies T_s = 75^\\circ\\text{C}$"
          ],
          answer: "$75^\\circ\\text{C}$"
        }
      }
    ]
  },

  "fis-termo-global": {
    subChapterId: "fis-termo-global",
    title: "Pemanasan Global",
    chapterId: "fis-termo",
    chapterTitle: "Kalor dan Termodinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum pergeseran Wien radiasi termal bumi, efek rumah kaca, kesetimbangan neraca radiasi matahari-bumi, dan mitigasi emisi gas.",
    subTopicsCovered: [
      "Efek Rumah Kaca",
      "Penyebab & Dampak Pemanasan Global",
      "Mitigasi Pemanasan Global"
    ],
    formulas: [
      {
        id: "fis-termo-global-f01",
        code: "R-01",
        title: "Hukum Pergeseran Wien",
        formulaLatex: "\\lambda_{\\max} \\cdot T = C = 2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}",
        conditions: "Berlaku untuk radiasi gelombang elektromagnetik spektrum benda hitam.",
        variables: [
          { symbol: "\\lambda_{\\max}", desc: "Panjang gelombang intensitas pancaran maksimum (m)" },
          { symbol: "T", desc: "Suhu mutlak permukaan pemancar radiasi (K)" },
          { symbol: "C", desc: "Konstanta pergeseran Wien" }
        ],
        traps: "Semakin tinggi suhu benda, panjang gelombang puncak pancarannya semakin pendek (bergeser ke frekuensi tinggi).",
        example: {
          question: "Permukaan matahari memancarkan intensitas radiasi maksimum pada $\\lambda_{\\max} = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$). Tentukan suhu permukaan matahari menggunakan konstanta Wien $2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$.",
          steps: [
            "$T = \\frac{C}{\\lambda_{\\max}} = \\frac{2{,}9 \\times 10^{-3}}{5 \\times 10^{-7}} = 5800\\text{ K}$"
          ],
          answer: "$5800\\text{ K}$"
        }
      },
      {
        id: "fis-termo-global-f02",
        code: "R-02",
        title: "Fluks Intensitas & Konstanta Surya",
        formulaLatex: "I_{\\text{surya}} = \\frac{P_{\\text{matahari}}}{4\\pi R^2} \\approx 1360\\text{ W/m}^2",
        conditions: "$R$ adalah jarak rata-rata bumi ke matahari ($1\\text{ AU} \\approx 1{,}5 \\times 10^{11}\\text{ m}$).",
        variables: [
          { symbol: "I_{\\text{surya}}", desc: "Intensitas energi surya yang tiba di batas atmosfer bumi" }
        ],
        traps: "Hanya sekitar 70% dari konstanta surya yang diserap bumi akibat adanya albedo permukaan es dan awan.",
        example: {
          question: "Panel surya seluas $2\\text{ m}^2$ dengan efisiensi $20\\%$ dipasang di tempat dengan intensitas matahari $1000\\text{ W/m}^2$. Hitung daya listrik yang dihasilkan panel.",
          steps: [
            "$P_{\\text{masuk}} = I \\cdot A = 1000 \\times 2 = 2000\\text{ W}$",
            "$P_{\\text{listrik}} = \\eta \\cdot P_{\\text{masuk}} = 0{,}20 \\times 2000 = 400\\text{ W}$"
          ],
          answer: "$400\\text{ Watt}$"
        }
      }
    ]
  },

  "fis-termo-gas": {
    subChapterId: "fis-termo-gas",
    title: "Teori Gas Ideal",
    chapterId: "fis-termo",
    chapterTitle: "Kalor dan Termodinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Persamaan umum gas ideal, hukum gabungan Boyle-Gay Lussac, energi kinetik translasi partikel gas, kecepatan efektif molekul rms, dan energi dalam gas.",
    subTopicsCovered: [
      "Hukum Boyle & Gay-Lussac",
      "Hukum Boyle-Gay Lussac",
      "Persamaan Umum Gas Ideal"
    ],
    formulas: [
      {
        id: "fis-termo-gas-f01",
        code: "R-01",
        title: "Persamaan Keadaan Gas Ideal & Boyle-Gay Lussac",
        formulaLatex: "P \\cdot V = n \\cdot R \\cdot T = N \\cdot k_B \\cdot T \\\\[6pt] \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}",
        conditions: "Suhu $T$ wajib dalam satuan Kelvin! Gas dianggap tidak berinteraksi selain tumbukan lenting sempurna.",
        variables: [
          { symbol: "R", desc: "Konstanta gas universal ($8{,}314\\text{ J/mol}\\cdot\\text{K}$)" },
          { symbol: "k_B", desc: "Konstanta Boltzmann ($1{,}38 \\times 10^{-23}\\text{ J/K}$)" },
          { symbol: "n, N", desc: "Jumlah mol ($n$) dan jumlah molekul partikel ($N$)" }
        ],
        traps: "Memasukkan suhu dalam skala Celcius langsung ke dalam rumus adalah kesalahan paling umum.",
        example: {
          question: "Sejumlah gas ideal bersuhu $27^\\circ\\text{C}$ pada tekanan $1\\text{ atm}$ dan volume $2\\text{ L}$ dipanaskan hingga suhunya $127^\\circ\\text{C}$ dan volumenya menjadi $3\\text{ L}$. Tentukan tekanan akhirnya.",
          steps: [
            "Konversi suhu ke Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 127 + 273 = 400\\text{ K}$",
            "$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\implies \\frac{(1)(2)}{300} = \\frac{P_2 (3)}{400}$",
            "$\\frac{2}{300} = \\frac{3 P_2}{400} \\implies 3 P_2 = \\frac{800}{300} = \\frac{8}{3} \\implies P_2 = \\frac{8}{9}\\text{ atm}$"
          ],
          answer: "$\\frac{8}{9}\\text{ atm} \\approx 0{,}89\\text{ atm}$"
        }
      },
      {
        id: "fis-termo-gas-f02",
        code: "R-02",
        title: "Energi Kinetik Partikel & Kecepatan Efektif ($v_{\\text{rms}}$)",
        formulaLatex: "\\overline{EK} = \\frac{3}{2} k_B T \\\\[6pt] v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m_0}} = \\sqrt{\\frac{3 R T}{M_r}} = \\sqrt{\\frac{3 P}{\\rho}}",
        conditions: "Berlaku untuk gas monoatomik dengan 3 derajat kebebasan translasi.",
        variables: [
          { symbol: "v_{\\text{rms}}", desc: "Kecepatan efektif akar kuadrat rata-rata (root-mean-square) molekul" },
          { symbol: "M_r", desc: "Massa molar gas (kg/mol)" },
          { symbol: "\\rho", desc: "Massa jenis gas (kg/m$^3$)" }
        ],
        traps: "Jika suhu mutlak dinaikkan 4 kali lipat, kecepatan efektif molekul $v_{\\text{rms}}$ hanya naik $\\sqrt{4} = 2$ kali lipat.",
        example: {
          question: "Jika suhu gas ideal dinaikkan dari $27^\\circ\\text{C}$ menjadi $327^\\circ\\text{C}$, tentukan perbandingan kecepatan efektif molekul mula-mula terhadap kecepatan akhir.",
          steps: [
            "$T_1 = 27 + 273 = 300\\text{ K}$",
            "$T_2 = 327 + 273 = 600\\text{ K}$",
            "$\\frac{v_1}{v_2} = \\sqrt{\\frac{T_1}{T_2}} = \\sqrt{\\frac{300}{600}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}} = 1 : \\sqrt{2}$"
          ],
          answer: "$1 : \\sqrt{2}$"
        }
      },
      {
        id: "fis-termo-gas-f03",
        code: "R-03",
        title: "Energi Dalam Gas Ideal",
        formulaLatex: "U = N \\cdot \\overline{EK} = \\frac{f}{2} N k_B T = \\frac{f}{2} n R T \\\\[4pt] \\text{Monoatomik: } f = 3 \\implies U = \\frac{3}{2} n R T \\\\[4pt] \\text{Diatomik Suhu Sedang: } f = 5 \\implies U = \\frac{5}{2} n R T",
        conditions: "$f$ adalah derajat kebebasan gas. Gas mulia (He, Ne, Ar) memiliki $f=3$.",
        variables: [
          { symbol: "U", desc: "Energi dalam gas ideal (Joule)" },
          { symbol: "f", desc: "Derajat kebebasan molekul" }
        ],
        traps: "Perubahan energi dalam $\\Delta U$ hanya bergantung pada perubahan suhu $\\Delta T$. Pada proses isotermik (suhu tetap), $\\Delta U = 0$.",
        example: {
          question: "Tentukan energi dalam dari $2\\text{ mol}$ gas helium (monoatomik) pada suhu $300\\text{ K}$ ($R = 8{,}31\\text{ J/mol}\\cdot\\text{K}$).",
          steps: [
            "Untuk gas monoatomik $f = 3$:",
            "$U = \\frac{3}{2} n R T = \\frac{3}{2} \\times 2 \\times 8{,}31 \\times 300 = 3 \\times 8{,}31 \\times 300 = 7479\\text{ Joule}$"
          ],
          answer: "$7479\\text{ Joule}$"
        }
      }
    ]
  },

  "fis-termo-hukum": {
    subChapterId: "fis-termo-hukum",
    title: "Termodinamika",
    chapterId: "fis-termo",
    chapterTitle: "Kalor dan Termodinamika",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum I termodinamika, usaha pada 4 proses gas utama, siklus mesin kalor Carnot dan efisiensi maksimum, serta koefisien performa mesin pendingin.",
    subTopicsCovered: [
      "Proses Termodinamika",
      "Usaha & Energi Dalam",
      "Hukum I Termodinamika"
    ],
    formulas: [
      {
        id: "fis-termo-hukum-f01",
        code: "R-01",
        title: "Hukum I Termodinamika & Usaha 4 Proses Gas",
        formulaLatex: "Q = \\Delta U + W \\\\[6pt] \\text{Isobarik }(P = c): \\quad W = P \\Delta V = P(V_2 - V_1) \\\\[4pt] \\text{Isokhorik }(V = c): \\quad W = 0 \\implies Q = \\Delta U \\\\[4pt] \\text{Isotermik }(T = c): \\quad \\Delta U = 0 \\implies Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) \\\\[4pt] \\text{Adiabatik }(Q = 0): \\quad W = -\\Delta U",
        conditions: "Kalor diserap ($Q > 0$), kalor dilepas ($Q < 0$). Sistem melakukan usaha memuai ($W > 0$), sistem menerima usaha kompresi ($W < 0$).",
        variables: [
          { symbol: "Q", desc: "Kalor yang mengalir masuk/keluar sistem" },
          { symbol: "W", desc: "Usaha luar oleh gas" },
          { symbol: "\\Delta U", desc: "Perubahan energi dalam sistem" }
        ],
        traps: "Pada proses isokhorik (volume tetap), usaha luar selalu bernilai nol ($W = 0$).",
        example: {
          question: "Gas ideal menyerap kalor sebesar $500\\text{ J}$ dari lingkungan dan pada saat yang sama melakukan usaha sebesar $200\\text{ J}$. Tentukan perubahan energi dalam gas.",
          steps: [
            "Hukum I Termodinamika: $Q = \\Delta U + W$",
            "$500 = \\Delta U + 200 \\implies \\Delta U = 500 - 200 = 300\\text{ Joule}$"
          ],
          answer: "$300\\text{ Joule}$ (energi dalam bertambah)"
        }
      },
      {
        id: "fis-termo-hukum-f02",
        code: "R-02",
        title: "Efisiensi Mesin Kalor Carnot",
        formulaLatex: "\\eta = \\left( 1 - \\frac{T_L}{T_H} \\right) \\times 100\\% = \\left( \\frac{W}{Q_H} \\right) \\times 100\\% = \\left( \\frac{Q_H - Q_L}{Q_H} \\right) \\times 100\\%",
        conditions: "Suhu reservoir tinggi ($T_H$) dan reservoir rendah ($T_L$) wajib dalam Kelvin.",
        variables: [
          { symbol: "T_H, T_L", desc: "Suhu reservoir kalor panas dan dingin (Kelvin)" },
          { symbol: "Q_H, Q_L", desc: "Kalor yang diserap dari tandon panas dan dibuang ke tandon dingin" },
          { symbol: "W", desc: "Usaha bersih siklus ($W = Q_H - Q_L$)" }
        ],
        traps: "Tidak ada mesin kalor yang memiliki efisiensi $100\\%$ menurut Hukum II Termodinamika.",
        example: {
          question: "Mesin Carnot beroperasi di antara tandon bersuhu $500\\text{ K}$ dan $300\\text{ K}$. Jika mesin menyerap kalor $1000\\text{ J}$ dari tandon panas, tentukan usaha yang dihasilkan mesin.",
          steps: [
            "Efisiensi: $\\eta = 1 - \\frac{T_L}{T_H} = 1 - \\frac{300}{500} = 1 - 0{,}6 = 0{,}4 = 40\\%$",
            "Usaha: $W = \\eta \\cdot Q_H = 0{,}4 \\times 1000 = 400\\text{ Joule}$"
          ],
          answer: "$400\\text{ Joule}$"
        }
      },
      {
        id: "fis-termo-hukum-f03",
        code: "R-03",
        title: "Koefisien Kinerja Mesin Pendingin (Kulkas)",
        formulaLatex: "COP = K_p = \\frac{Q_L}{W} = \\frac{T_L}{T_H - T_L}",
        conditions: "Mesin pendingin ideal Carnot memindahkan kalor dari tandon dingin ke panas dengan bantuan usaha dari luar.",
        variables: [
          { symbol: "COP", desc: "Coefficient of Performance (Koefisien Daya Guna)" }
        ],
        traps: "Pembilang koefisien pendingin adalah $T_L$ (tandon dingin), bukan $T_H$.",
        example: {
          question: "Sebuah kulkas memiliki suhu ruang dalam $-3^\\circ\\text{C}$ dan suhu luar ruang $27^\\circ\\text{C}$. Tentukan koefisien kinerja kulkas tersebut.",
          steps: [
            "Ubah ke Kelvin: $T_L = -3 + 273 = 270\\text{ K}$, $T_H = 27 + 273 = 300\\text{ K}$",
            "$COP = \\frac{T_L}{T_H - T_L} = \\frac{270}{300 - 270} = \\frac{270}{30} = 9$"
          ],
          answer: "$9$"
        }
      }
    ]
  },

  "fis-lis-statis": {
    subChapterId: "fis-lis-statis",
    title: "Listrik Statis",
    chapterId: "fis-lis",
    chapterTitle: "Kelistrikan",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum Coulomb gaya elektrostatik, kuat medan listrik, energi potensial dan potensial listrik, serta kapasitor keping sejajar dan rangkaian kapasitor.",
    subTopicsCovered: [
      "Hukum Coulomb",
      "Medan Listrik",
      "Potensial Listrik",
      "Kapasitor Keping Sejajar"
    ],
    formulas: [
      {
        id: "fis-lis-statis-f01",
        code: "R-01",
        title: "Hukum Coulomb & Kuat Medan Listrik",
        formulaLatex: "F = k \\frac{|q_1 q_2|}{r^2} \\\\[6pt] E = k \\frac{|q|}{r^2} \\implies \\vec{F} = q \\vec{E} \\\\[4pt] k = \\frac{1}{4\\pi \\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2",
        conditions: "Gaya Coulomb dan medan listrik adalah vektor. Arah medan listrik keluar dari muatan positif dan masuk menuju muatan negatif.",
        variables: [
          { symbol: "q", desc: "Besar muatan listrik (Coulomb)" },
          { symbol: "r", desc: "Jarak pisah antar muatan (meter)" },
          { symbol: "E", desc: "Kuat medan listrik (N/C atau V/m)" }
        ],
        traps: "Tanda minus pada muatan tidak dimasukkan ke dalam perhitungan besaran gaya kuadrat, melainkan digunakan untuk menentukan arah tolak-menolak atau tarik-menarik.",
        example: {
          question: "Dua muatan titik $+2\\,\\mu\\text{C}$ dan $-8\\,\\mu\\text{C}$ terpisah pada jarak $6\\text{ cm}$. Tentukan besar gaya tarik-menarik antara kedua muatan ($k = 9 \\times 10^9$).",
          steps: [
            "Ubah satuan: $q_1 = 2 \\times 10^{-6}\\text{ C}, q_2 = 8 \\times 10^{-6}\\text{ C}, r = 0{,}06\\text{ m} = 6 \\times 10^{-2}\\text{ m}$",
            "$F = (9 \\times 10^9) \\frac{(2 \\times 10^{-6})(8 \\times 10^{-6})}{(6 \\times 10^{-2})^2} = \\frac{9 \\times 10^9 \\times 16 \\times 10^{-12}}{36 \\times 10^{-4}} = \\frac{144 \\times 10^{-3}}{36 \\times 10^{-4}} = 40\\text{ N}$"
          ],
          answer: "$40\\text{ N}$"
        }
      },
      {
        id: "fis-lis-statis-f02",
        code: "R-02",
        title: "Potensial Listrik, Energi Potensial & Usaha Muatan",
        formulaLatex: "V = k \\frac{q}{r} \\\\[4pt] EP = q V = k \\frac{q_1 q_2}{r} \\\\[4pt] W_{A \\to B} = q (V_B - V_A) = -\\Delta EP",
        conditions: "Potensial listrik dan energi potensial adalah besaran skalar (tanda $\\pm$ muatan WAJIB diikutsertakan dalam penjumlahan aljabar).",
        variables: [
          { symbol: "V", desc: "Potensial listrik (Volt)" },
          { symbol: "EP", desc: "Energi potensial elektrostatik (Joule)" },
          { symbol: "W", desc: "Usaha luar untuk memindahkan muatan $q$" }
        ],
        traps: "Potensial listrik adalah skalar sehingga tidak perlu diuraikan ke sumbu vektor sinus/cosinus.",
        example: {
          question: "Tentukan potensial listrik di titik $P$ yang berjarak $30\\text{ cm}$ dari muatan $-6\\,\\mu\\text{C}$.",
          steps: [
            "$r = 0{,}3\\text{ m}$, $q = -6 \\times 10^{-6}\\text{ C}$",
            "$V = k \\frac{q}{r} = (9 \\times 10^9) \\frac{-6 \\times 10^{-6}}{0{,}3} = -180.000\\text{ V} = -180\\text{ kV}$"
          ],
          answer: "$-180\\text{ kV}$"
        }
      },
      {
        id: "fis-lis-statis-f03",
        code: "R-03",
        title: "Kapasitansi Keping Sejajar & Energi Kapasitor",
        formulaLatex: "C = \\varepsilon_r \\frac{\\varepsilon_0 A}{d} \\\\[4pt] Q = C \\cdot V \\\\[4pt] W = \\frac{1}{2} Q V = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}",
        conditions: "Penyisipan bahan dielektrik ($\\varepsilon_r > 1$) akan menaikkan kapasitas kapasitor sebesar $C = \\varepsilon_r \\cdot C_0$.",
        variables: [
          { symbol: "C", desc: "Kapasitas kapasitor (Farad)" },
          { symbol: "A", desc: "Luas keping elektroda (m$^2$)" },
          { symbol: "d", desc: "Jarak pisah antar keping (m)" },
          { symbol: "W", desc: "Energi elektrostatik tersimpan dalam kapasitor (Joule)" }
        ],
        traps: "Jika kapasitor dilepas dari baterai, muatannya $Q$ konstan. Jika tetap terhubung baterai, beda potensialnya $V$ yang konstan.",
        example: {
          question: "Kapasitor $4\\,\\mu\\text{F}$ dihubungkan ke sumber tegangan $12\\text{ V}$. Hitung muatan dan energi yang tersimpan di dalamnya.",
          steps: [
            "Muatan: $Q = C \\cdot V = (4 \\times 10^{-6}\\text{ F}) \\times 12\\text{ V} = 48\\,\\mu\\text{C}$",
            "Energi: $W = \\frac{1}{2} C V^2 = \\frac{1}{2} (4 \\times 10^{-6})(12^2) = 2 \\times 10^{-6} \\times 144 = 288\\,\\mu\\text{J}$"
          ],
          answer: "$Q = 48\\,\\mu\\text{C}$ dan $W = 288\\,\\mu\\text{J}$"
        }
      }
    ]
  },

  "fis-lis-dc": {
    subChapterId: "fis-lis-dc",
    title: "Rangkaian Arus Searah (DC)",
    chapterId: "fis-lis",
    chapterTitle: "Kelistrikan",
    pillarId: "fisika",
    pillarTitle: "Fisika (TKA)",
    summary: "Hukum Ohm, hambatan kawat penghantar, rangkaian resistor seri & paralel, hukum Kirchhoff I & II loop tertutup, dan daya-energi listrik.",
    subTopicsCovered: [
      "Kuat Arus & Hukum Ohm",
      "Hambatan Kawat Penghantar",
      "Hukum Kirchhoff I dan II",
      "Energi dan Daya Listrik"
    ],
    formulas: [
      {
        id: "fis-lis-dc-f01",
        code: "R-01",
        title: "Hukum Ohm & Hambatan Jenis Kawat",
        formulaLatex: "I = \\frac{V}{R} \\\\[4pt] R = \\rho \\frac{L}{A} = \\rho \\frac{L}{\\frac{1}{4}\\pi d^2} \\\\[6pt] R_T = R_0(1 + \\alpha \\Delta T)",
        conditions: "Hambatan berbanding lurus dengan panjang kawat dan berbanding terbalik dengan kuadrat diameter kawat ($R \\propto 1/d^2$).",
        variables: [
          { symbol: "\\rho", desc: "Hambatan jenis kawat ($\\Omega\\cdot$m)" },
          { symbol: "L", desc: "Panjang kawat (m)" },
          { symbol: "A", desc: "Luas penampang kawat (m$^2$)" }
        ],
        traps: "Jika kawat ditarik meregang hingga panjangnya menjadi $n$ kali lipat volumenya tetap, maka luasnya mengecil sehingga hambatannya menjadi $n^2$ kali semula.",
        example: {
          question: "Kawat tembaga berhambatan $8\\,\\Omega$ ditarik secara merata sehingga panjangnya menjadi 2 kali panjang semula. Tentukan besar hambatan kawat sekarang.",
          steps: [
            "Volume konstan: jika panjang $L' = 2L$, maka luas penampang $A' = \\frac{1}{2}A$",
            "$R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{\\frac{1}{2}A} = 4 \\left(\\rho \\frac{L}{A}\\right) = 4R$",
            "$R' = 4 \\times 8\\,\\Omega = 32\\,\\Omega$"
          ],
          answer: "$32\\,\\Omega$"
        }
      },
      {
        id: "fis-lis-dc-f02",
        code: "R-02",
        title: "Rangkaian Resistor Gabungan (Seri & Paralel)",
        formulaLatex: "\\text{Seri: } R_s = R_1 + R_2 + \\dots \\quad (I \\text{ sama}) \\\\[4pt] \\text{Paralel: } \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots \\quad (V \\text{ sama}) \\\\[4pt] \\text{Trik Cepat 2 Resistor Paralel: } R_p = \\frac{R_1 \\cdot R_2}{R_1 + R_2}",
        conditions: "Resistor paralel menghasilkan hambatan pengganti yang nilainya selalu lebih kecil dibanding resistor terkecil dalam rangkaian.",
        variables: [
          { symbol: "R_s, R_p", desc: "Hambatan pengganti susunan seri dan paralel" }
        ],
        traps: "Lupa membalik hasil penjumlahan pecahan saat menggunakan rumus $1/R_p$.",
        example: {
          question: "Tiga buah resistor $6\\,\\Omega$, $3\\,\\Omega$, dan $2\\,\\Omega$ dirangkai secara paralel. Tentukan hambatan totalnya.",
          steps: [
            "$\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{3} + \\frac{1}{2} = \\frac{1 + 2 + 3}{6} = \\frac{6}{6} = 1$",
            "$R_p = 1\\,\\Omega$"
          ],
          answer: "$1\\,\\Omega$"
        }
      },
      {
        id: "fis-lis-dc-f03",
        code: "R-03",
        title: "Hukum II Kirchhoff (Loop Rangkaian)",
        formulaLatex: "\\Sigma \\mathcal{E} + \\Sigma (I \\cdot R) = 0",
        conditions: "Jika arah loop menemui kutub negatif sumber tegangan terlebih dahulu, $\\mathcal{E}$ bertanda negatif. Jika arus searah putaran loop, suku $I \\cdot R$ bertanda positif.",
        variables: [
          { symbol: "\\mathcal{E}", desc: "Gaya Gerak Listrik (GGL) baterai (Volt)" },
          { symbol: "I", desc: "Arus listrik dalam loop tertutup (Ampere)" }
        ],
        traps: "Hasil akhir arus bernilai negatif menandakan arah pemisalan arus sebenarnya berlawanan arah dengan arah yang diasumsikan semula.",
        example: {
          question: "Rangkaian satu loop memuat baterai $\\mathcal{E}_1 = 12\\text{ V}$, baterai $\\mathcal{E}_2 = 6\\text{ V}$ (berlawanan polaritas), serta hambatan $R = 3\\,\\Omega$. Tentukan kuat arus yang mengalir.",
          steps: [
            "Pilih arah loop searah baterai terbesar: $\\Sigma \\mathcal{E} + I \\Sigma R = 0$",
            "$(-12 + 6) + I(3) = 0 \\implies -6 + 3I = 0 \\implies 3I = 6 \\implies I = 2\\text{ A}$"
          ],
          answer: "$2\\text{ Ampere}$"
        }
      },
      {
        id: "fis-lis-dc-f04",
        code: "R-04",
        title: "Daya & Energi Listrik Lampu",
        formulaLatex: "P = V \\cdot I = I^2 R = \\frac{V^2}{R} \\\\[4pt] W = P \\cdot t \\\\[6pt] \\text{Daya Lampu pada Tegangan Baru: } P_2 = P_1 \\left( \\frac{V_2}{V_1} \\right)^2",
        conditions: "Hambatan filamen lampu dianggap konstan ($R = \\frac{V_1^2}{P_1} = \\text{konstan}$).",
        variables: [
          { symbol: "P_1, V_1", desc: "Daya dan tegangan nominal tertulis pada spesifikasi lampu" },
          { symbol: "P_2, V_2", desc: "Daya nyata yang diserap lampu saat dipasang pada tegangan nyata $V_2$" }
        ],
        traps: "Daya lampu sebanding dengan kuadrat perbandingan tegangan $(V_2/V_1)^2$, bukan sebanding linear.",
        example: {
          question: "Lampu bertuliskan $60\\text{ W} / 220\\text{ V}$ dipasang pada tegangan listrik $110\\text{ V}$. Tentukan daya yang diserap lampu tersebut.",
          steps: [
            "$P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 = 60 \\times \\left(\\frac{110}{220}\\right)^2 = 60 \\times \\left(\\frac{1}{2}\\right)^2 = 60 \\times \\frac{1}{4} = 15\\text{ Watt}$"
          ],
          answer: "$15\\text{ Watt}$"
        }
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMULAS_FISIKA_LANJUTAN;
}
if (typeof window !== 'undefined') {
  window.FORMULAS_FISIKA_LANJUTAN = FORMULAS_FISIKA_LANJUTAN;
}
