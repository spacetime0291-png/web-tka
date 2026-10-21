/**
 * Bank Soal Drilling: Dinamika Fisika (Tier 1 & Tier 2)
 * Kurikulum: Fisika Saintek (ITB / UTBK SBMPTN / SIMAK UI)
 * Total: 48 Butir Soal (24 Mudah, 24 Sedang)
 * Distribusi Sub-Bab: 6 Sub-Bab x (4 Mudah + 4 Sedang = 8 Soal per Sub-Bab)
 */

const bankSoalDinamika = [
  // ==========================================================================
  // SUB-BAB 1: HUKUM NEWTON & GAYA NORMAL / BERAT SEMU
  // ==========================================================================
  {
    id: "fis-din-01",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Mudah",
    soal: "Seorang siswa bermassa $50\\text{ kg}$ berdiri di atas timbangan badan di dalam lift hotel yang sedang bergerak turun dengan perlambatan konstan $2\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, angka gaya desak normal yang ditunjukkan oleh timbangan adalah...",
    opsi: [
      "A. 400 N",
      "B. 500 N",
      "C. 600 N",
      "D. 700 N",
      "E. 800 N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Hukum II Newton pada kerangka acuan vertikal: $\\Sigma F_y = m \\cdot a$.",
      langkah: "Lift bergerak turun dengan perlambatan, yang berarti vektor percepatan sistem mengarah ke atas ($a = +2\\text{ m/s}^2$). Persamaan gaya normal pada siswa: $N - W = m \\cdot a \\Rightarrow N = m(g + a) = 50(10 + 2) = 600\\text{ N}$.",
      jebakan: "Siswa sering terkecoh menganggap gerakan turun selalu menghasilkan $N = m(g - a) = 400\\text{ N}$, tanpa memperhatikan kata 'perlambatan' yang membalik arah vektor percepatan ke atas."
    }
  },
  {
    id: "fis-din-02",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Mudah",
    soal: "Dua buah peti kargo $A$ ($m_A = 6\\text{ kg}$) dan $B$ ($m_B = 4\\text{ kg}$) diletakkan berdampingan saling bersentuhan di atas lantai gudang yang licin tanpa gesekan. Sebuah gaya dorong horizontal tetap $F = 30\\text{ N}$ diberikan secara langsung pada balok $A$ ke arah balok $B$. Besar gaya kontak antar-permukaan yang dikerjakan oleh balok $A$ pada balok $B$ adalah...",
    opsi: [
      "A. 12 N",
      "B. 18 N",
      "C. 20 N",
      "D. 24 N",
      "E. 30 N"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Hukum II Newton sistem multi-benda kontak: $a = \\frac{\\Sigma F}{\\Sigma m}$ dan gaya aksi-reaksi kontak.",
      langkah: "1) Percepatan bersama kedua balok: $a = \\frac{F}{m_A + m_B} = \\frac{30}{6 + 4} = 3\\text{ m/s}^2$.<br>2) Tinjau balok $B$ secara horizontal: satu-satunya gaya horizontal yang bekerja pada $B$ adalah gaya kontak dari $A$ ($N_{AB}$): $N_{AB} = m_B \\cdot a = 4\\text{ kg} \\times 3\\text{ m/s}^2 = 12\\text{ N}$.",
      jebakan: "Sebagian siswa mengira gaya kontak sama dengan gaya dorong luar $F = 30\\text{ N}$, atau menghitung gaya resultan yang tersisa pada balok $A$ ($F - N_{AB} = 18\\text{ N}$)."
    }
  },
  {
    id: "fis-din-03",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Sedang",
    soal: "Seorang teknisi bermassa $60\\text{ kg}$ berada di dalam sangkar lift konstruksi bermassa $140\\text{ kg}$ (massa total $200\\text{ kg}$). Sangkar ditarik ke atas oleh kabel baja crane dengan gaya tegangan tali $T = 2500\\text{ N}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya desak kaki teknisi terhadap lantai lift konstruksi tersebut adalah...",
    opsi: [
      "A. 600 N",
      "B. 650 N",
      "C. 700 N",
      "D. 750 N",
      "E. 850 N"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Penggabungan Hukum II Newton sistem gabungan (lift + muatan) dan analisis gaya kontak internal.",
      langkah: "1) Menghitung percepatan seluruh sistem ke atas:<br>$\\Sigma F_y = M_{\\text{total}} \\cdot a \\Rightarrow T - M_{\\text{total}} g = M_{\\text{total}} \\cdot a$<br>$2500 - 200(10) = 200 a \\Rightarrow 500 = 200 a \\Rightarrow a = 2{,}5\\text{ m/s}^2$.<br>2) Menghitung gaya desak kaki (gaya normal) pada teknisi ($m = 60\\text{ kg}$):<br>$N - mg = m \\cdot a \\Rightarrow N = m(g + a) = 60(10 + 2{,}5) = 750\\text{ N}$.",
      jebakan: "Siswa sering langsung menjawab berat sejati $mg = 600\\text{ N}$ karena lupa menghitung percepatan sistem, atau salah memasukkan massa total saat meninjau gaya normal teknisi."
    }
  },
  {
    id: "fis-din-04",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Sedang",
    soal: "Dua balok ditumpuk secara vertikal di atas lantai mendatar yang licin tanpa gesekan. Balok bawah bermassa $M = 8\\text{ kg}$ dan balok atas bermassa $m = 2\\text{ kg}$. Balok atas ditarik oleh seutas tali dengan gaya $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Jika kedua balok tetap bergerak bersamaan secara horizontal tanpa terangkat dari lantai ($g = 10\\text{ m/s}^2$), besar gaya normal yang dikerjakan lantai terhadap balok bawah $M$ adalah...",
    opsi: [
      "A. 50 N",
      "B. 70 N",
      "C. 80 N",
      "D. 100 N",
      "E. 130 N"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Kesetimbangan gaya vertikal multi-benda dengan gaya eksternal bersudut: $\\Sigma F_y = 0$.",
      langkah: "Tinjau sistem gabungan ($M + m$) pada sumbu vertikal ($y$):<br>$\\Sigma F_y = 0 \\Rightarrow N_{\\text{lantai}} + F \\sin 37^\\circ - (M + m)g = 0$<br>$N_{\\text{lantai}} + 50(0{,}6) - (8 + 2)(10) = 0$<br>$N_{\\text{lantai}} + 30 - 100 = 0 \\Rightarrow N_{\\text{lantai}} = 70\\text{ N}$.",
      jebakan: "Siswa kerap lupa mengikutsertakan komponen vertikal gaya tarik luar ($F \\sin\\theta$) atau keliru hanya menghitung berat balok bawah ($N = Mg = 80\\text{ N}$)."
    }
  },
  {
    id: "fis-din-25",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Mudah",
    soal: "Sebuah paket kargo bermassa $10\\text{ kg}$ tergantung pada neraca pegas di langit-langit lift gudang. Jika kabel penggantung lift tiba-tiba putus sehingga lift jatuh bebas di bawah pengaruh gravitasi ($g = 10\\text{ m/s}^2$), angka skala yang terbaca pada neraca pegas selama lift jatuh bebas adalah...",
    opsi: [
      "A. 0 N",
      "B. 50 N",
      "C. 100 N",
      "D. 150 N",
      "E. 200 N"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Kondisi jatuh bebas dan bobot semu: saat percepatan sistem $a = g$ ke bawah, berat semu bernilai nol (keadaan tanpa bobot / weightlessness).",
      langkah: "Persamaan gaya pada neraca pegas: $mg - T = ma$. Karena lift jatuh bebas ($a = g$), maka: $T = m(g - a) = m(g - g) = 0\\text{ N}$.",
      jebakan: "Siswa sering mengira pegas tetap menunjukkan berat sejati benda $mg = 100\\text{ N}$ karena mengabaikan percepatan kerangka acuan lift."
    }
  },
  {
    id: "fis-din-26",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Mudah",
    soal: "Tiga buah balok $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, dan $m_3 = 5\\text{ kg}$ diletakkan berderet saling bersentuhan di atas lantai horizontal yang licin tanpa gesekan. Sebuah gaya dorong horizontal $F = 50\\text{ N}$ bekerja mendorong balok pertama ($m_1$) ke arah deretan balok lainnya. Besar gaya kontak antara balok kedua ($m_2$) dan balok ketiga ($m_3$) adalah...",
    opsi: [
      "A. 10 N",
      "B. 15 N",
      "C. 25 N",
      "D. 35 N",
      "E. 50 N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Percepatan bersama sistem gabungan $a = \\frac{F}{\\Sigma m}$ dan gaya desak aksi-reaksi kontak.",
      langkah: "1) Percepatan ketiga balok: $a = \\frac{50}{2 + 3 + 5} = \\frac{50}{10} = 5\\text{ m/s}^2$.<br>2) Gaya kontak antara balok 2 dan 3 ($N_{23}$) adalah gaya yang bertanggung jawab mempercepat balok 3 saja: $N_{23} = m_3 \\cdot a = 5\\text{ kg} \\times 5\\text{ m/s}^2 = 25\\text{ N}$.",
      jebakan: "Siswa sering keliru menghitung gaya kontak antara balok 1 dan balok 2 ($N_{12} = (m_2 + m_3)a = 40\\text{ N}$) atau menjawab gaya luar $50\\text{ N}$."
    }
  },
  {
    id: "fis-din-27",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Sedang",
    soal: "Seorang antariksawan bermassa $70\\text{ kg}$ berada di kursi kabin roket luar angkasa saat peluncuran vertikal ke atas. Roket mengalami percepatan konstan sebesar $a = 30\\text{ m/s}^2$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tekan normal yang dialami antariksawan tersebut terhadap sandaran kursinya adalah...",
    opsi: [
      "A. 2100 N",
      "B. 2800 N",
      "C. 3500 N",
      "D. 4200 N",
      "E. 4900 N"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum II Newton pada kerangka acuan vertikal mengalami akselerasi tinggi ($g$-force): $N = m(g + a)$.",
      langkah: "Persamaan gerak vertikal: $N - mg = ma \\Rightarrow N = m(g + a) = 70(10 + 30) = 70 \\times 40 = 2800\\text{ N}$. Antariksawan merasakan gaya 4 kali berat badannya ($4g$).",
      jebakan: "Hanya menghitung gaya inersia $ma = 2100\\text{ N}$ tanpa menambahkan gaya berat $mg = 700\\text{ N}$."
    }
  },
  {
    id: "fis-din-28",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Hukum Newton & Berat Semu",
    difficulty: "Sedang",
    soal: "Sebuah balok kayu $A$ bermassa $m_A = 2\\text{ kg}$ diletakkan di atas balok baja $B$ bermassa $m_B = 4\\text{ kg}$. Permukaan lantai horizontal tempat balok $B$ bertumpu licin sempurna, namun koefisien gesekan statis antara balok $A$ dan balok $B$ adalah $\\mu_s = 0{,}4$. Jika $g = 10\\text{ m/s}^2$, besar gaya dorong horizontal maksimum $F$ yang boleh diberikan pada balok bawah $B$ agar balok atas $A$ tidak tergelincir adalah...",
    opsi: [
      "A. 8 N",
      "B. 16 N",
      "C. 20 N",
      "D. 24 N",
      "E. 32 N"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Sistem balok bertumpuk: percepatan maksimum balok atas dibatasi oleh gaya gesek statis maksimum ($f_{s,\\max} = \\mu_s m_A g$).",
      langkah: "1) Percepatan maksimum balok $A$ tanpa selip: $a_{\\max} = \\frac{f_{s,\\max}}{m_A} = \\frac{\\mu_s m_A g}{m_A} = \\mu_s g = 0{,}4 \\times 10 = 4\\text{ m/s}^2$.<br>2) Menghitung gaya dorong luar maksimum pada kedua balok: $F_{\\max} = (m_A + m_B) a_{\\max} = (2 + 4) \\times 4 = 24\\text{ N}$.",
      jebakan: "Siswa sering mengalikan $a_{\\max}$ hanya dengan massa balok bawah sehingga mendapatkan $F = 4 \\times 4 = 16\\text{ N}$ atau hanya menghitung gaya gesek $f_s = 8\\text{ N}$."
    }
  },

  // ==========================================================================
  // SUB-BAB 2: GAYA GESEK (STATIS VS KINETIS)
  // ==========================================================================
  {
    id: "fis-din-05",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Mudah",
    soal: "Sebuah truk ekspedisi membawa sebuah peti mesin bermassa $80\\text{ kg}$ di atas bak terbuka yang mendatar. Koefisien gesekan statis antara peti dan permukaan bak truk adalah $\\mu_s = 0{,}35$, sedangkan koefisien gesekan kinetisnya $\\mu_k = 0{,}25$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, deselerasi (perlambatan) maksimum yang diperbolehkan saat truk direm agar peti tidak tergelincir adalah...",
    opsi: [
      "A. 1,5 m/s²",
      "B. 2,5 m/s²",
      "C. 3,0 m/s²",
      "D. 3,5 m/s²",
      "E. 4,0 m/s²"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Syarat benda tidak bertranslasi relatif: gaya inersia maksimum diimbangi oleh gaya gesek statis maksimum ($f_{s,\\max} = \\mu_s N$).",
      langkah: "Pada bak mendatar, $N = mg$. Gaya perlambatan maksimum: $m \\cdot a_{\\max} = f_{s,\\max} = \\mu_s mg \\Rightarrow a_{\\max} = \\mu_s g = 0{,}35 \\times 10 = 3{,}5\\text{ m/s}^2$.",
      jebakan: "Siswa sering keliru menggunakan koefisien gesek kinetis $\\mu_k$ sehingga menjawab $a = 2{,}5\\text{ m/s}^2$. Koefisien kinetis hanya berlaku jika peti sudah tergelincir."
    }
  },
  {
    id: "fis-din-06",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Mudah",
    soal: "Seorang pekerja menahan sebuah papan pajangan bermassa $m = 0{,}6\\text{ kg}$ dengan cara menekannya secara tegak lurus ke dinding vertikal yang kasar. Koefisien gesekan statis antara papan dan dinding adalah $\\mu_s = 0{,}40$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya tekan horizontal minimum $F$ yang harus diberikan agar papan tidak merosot ke bawah adalah...",
    opsi: [
      "A. 6 N",
      "B. 10 N",
      "C. 15 N",
      "D. 20 N",
      "E. 24 N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Kesetimbangan statis benda pada bidang vertikal: $\\Sigma F_y = 0$ dan $\\Sigma F_x = 0$ dengan $f_s \\le \\mu_s N$.",
      langkah: "1) Sumbu vertikal: $f_s = W = mg = 0{,}6 \\times 10 = 6\\text{ N}$.<br>2) Sumbu horizontal: $N = F$.<br>3) Syarat tidak merosot: $f_s \\le \\mu_s N \\Rightarrow mg \\le \\mu_s F \\Rightarrow F \\ge \\frac{mg}{\\mu_s} = \\frac{6}{0{,}40} = 15\\text{ N}$.",
      jebakan: "Terkecoh mengalikan gaya berat dengan $\\mu_s$ bukannya membaginya, atau mengira gaya normal selalu bernilai $mg$ seperti pada bidang datar."
    }
  },
  {
    id: "fis-din-07",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Sedang",
    soal: "Sebuah peti kemas mini bermassa $m = 5\\text{ kg}$ ditarik ke atas menaiki bidang miring kasar bersudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Gaya tarik sebesar $F = 50\\text{ N}$ bekerja sejajar bidang miring. Jika koefisien gesekan kinetis antara peti dan bidang miring adalah $\\mu_k = 0{,}25$, besar percepatan yang dialami peti saat bergerak menaiki bidang miring adalah...",
    opsi: [
      "A. 1 m/s²",
      "B. 2 m/s²",
      "C. 3 m/s²",
      "D. 4 m/s²",
      "E. 6 m/s²"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum II Newton pada bidang miring dengan gesekan: $\\Sigma F_x = m \\cdot a$, di mana $W_x = mg \\sin\\theta$ dan $f_k = \\mu_k mg \\cos\\theta$.",
      langkah: "1) Komponen berat tegak lurus bidang: $N = mg \\cos 37^\\circ = 5(10)(0{,}8) = 40\\text{ N}$.<br>2) Gaya gesek kinetis (menentang arah gerak ke atas): $f_k = \\mu_k N = 0{,}25 \\times 40 = 10\\text{ N}$.<br>3) Komponen berat sejajar bidang: $W_x = mg \\sin 37^\\circ = 5(10)(0{,}6) = 30\\text{ N}$.<br>4) Hukum II Newton sejajar bidang: $F - W_x - f_k = m \\cdot a \\Rightarrow 50 - 30 - 10 = 5a \\Rightarrow 10 = 5a \\Rightarrow a = 2\\text{ m/s}^2$.",
      jebakan: "Lupa memperhitungkan gaya gesek kinetis sehingga memperoleh $a = \\frac{50 - 30}{5} = 4\\text{ m/s}^2$, atau salah menukar fungsi sinus dan kosinus pada komponen kemiringan."
    }
  },
  {
    id: "fis-din-08",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Sedang",
    soal: "Sebuah kotak peralatan bermassa $m = 10\\text{ kg}$ berada di atas lantai bengkel mendatar kasar dengan koefisien gesekan statis $\\mu_s = 0{,}5$ dan kinetis $\\mu_k = 0{,}3$. Kotak ditarik oleh seutas kawat dengan gaya $F = 50\\text{ N}$ yang membentuk sudut elevasi $\\theta = 37^\\circ$ terhadap garis horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Keadaan gerak dan percepatan balok tersebut adalah...",
    opsi: [
      "A. Diam karena gaya tarik horizontal lebih kecil dari berat kotak",
      "B. Bergerak dengan percepatan 0,5 m/s²",
      "C. Bergerak dengan percepatan 1,0 m/s²",
      "D. Bergerak dengan percepatan 1,5 m/s²",
      "E. Bergerak dengan percepatan 1,9 m/s²"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Analisis ambang gerak ($F_x$ vs $f_{s,\\max}$) dengan modifikasi gaya normal akibat gaya tarik bersudut.",
      langkah: "1) Penguraian gaya tarik: $F_x = F \\cos 37^\\circ = 40\\text{ N}$, $F_y = F \\sin 37^\\circ = 30\\text{ N}$.<br>2) Gaya normal: $N = mg - F_y = 10(10) - 30 = 70\\text{ N}$.<br>3) Gaya gesek statis maksimum: $f_{s,\\max} = \\mu_s N = 0{,}5 \\times 70 = 35\\text{ N}$. Karena $F_x = 40\\text{ N} > 35\\text{ N}$, kotak bergerak!<br>4) Gaya gesek kinetis saat bergerak: $f_k = \\mu_k N = 0{,}3 \\times 70 = 21\\text{ N}$.<br>5) Percepatan: $a = \\frac{F_x - f_k}{m} = \\frac{40 - 21}{10} = 1{,}9\\text{ m/s}^2$.",
      jebakan: "Mengabaikan $F_y$ dalam menghitung gaya normal (menganggap $N = mg = 100\\text{ N}$), sehingga menghasilkan $f_k = 30\\text{ N}$ dan $a = 1{,}0\\text{ m/s}^2$."
    }
  },
  {
    id: "fis-din-29",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Mudah",
    soal: "Sebuah balok besi bermassa $m = 8\\text{ kg}$ diletakkan di atas lantai mendatar kasar. Koefisien gesekan statis antara balok dan lantai adalah $\\mu_s = 0{,}40$, sedangkan koefisien gesekan kinetisnya $\\mu_k = 0{,}25$. Jika balok ditarik oleh gaya horizontal sebesar $F = 24\\text{ N}$ ($g = 10\\text{ m/s}^2$), besar gaya gesekan yang bekerja pada balok tersebut adalah...",
    opsi: [
      "A. 16 N",
      "B. 20 N",
      "C. 32 N",
      "D. 40 N",
      "E. 24 N"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Sifat adaptif gaya gesek statis: selama gaya luar horizontal $F \\le f_{s,\\max}$, benda tetap diam dan besar gaya gesek statis tepat sama dengan gaya luar ($f_s = F$).",
      langkah: "1) Gaya gesek statis maksimum: $f_{s,\\max} = \\mu_s mg = 0{,}40 \\times 80 = 32\\text{ N}$.<br>2) Bandingkan gaya tarik dengan $f_{s,\\max}$: $F = 24\\text{ N} < 32\\text{ N}$, artinya balok masih diam.<br>3) Karena balok diam, resultan gaya horizontal nol: $F - f_s = 0 \\Rightarrow f_s = F = 24\\text{ N}$.",
      jebakan: "Salah satu jebakan terpopuler UTBK: siswa langsung menghitung $\\mu_s N = 32\\text{ N}$ atau $\\mu_k N = 20\\text{ N}$ tanpa mengecek apakah gaya penarik melampaui ambang gesek statis maksimum."
    }
  },
  {
    id: "fis-din-30",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Mudah",
    soal: "Sebuah balok es meluncur menuruni bidang miring kasar yang membentuk sudut kemiringan $\\theta = 37^\\circ$ terhadap bidang datar ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$). Jika balok meluncur dengan kelajuan konstan (tanpa percepatan), besar koefisien gesekan kinetis $\\mu_k$ antara balok dan bidang miring adalah...",
    opsi: [
      "A. 0,25",
      "B. 0,60",
      "C. 0,75",
      "D. 0,80",
      "E. 1,33"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Kondisi kelajuan konstan pada bidang miring ($a = 0$): $\\Sigma F = 0 \\Rightarrow mg \\sin\\theta = \\mu_k mg \\cos\\theta \\Rightarrow \\mu_k = \\tan\\theta$.",
      langkah: "$$\\mu_k = \\tan 37^\\circ = \\frac{\\sin 37^\\circ}{\\cos 37^\\circ} = \\frac{0{,}6}{0{,}8} = 0{,}75$$.",
      jebakan: "Siswa sering terkecoh langsung memilih nilai $\\sin 37^\\circ = 0{,}60$ atau $\\cos 37^\\circ = 0{,}80$ bukannya menghitung rasio tangen kemiringan."
    }
  },
  {
    id: "fis-din-31",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Sedang",
    soal: "Sebuah balok bermassa $m = 4\\text{ kg}$ ditekan merapat ke langit-langit atap datar oleh gaya dorong vertikal ke atas sebesar $F_v = 70\\text{ N}$. Koefisien gesekan kinetis antara balok dan permukaan langit-langit atap adalah $\\mu_k = 0{,}20$. Jika balok kemudian ditarik secara horizontal dengan gaya tetap $F_h = 20\\text{ N}$ ($g = 10\\text{ m/s}^2$), besar percepatan horizontal balok adalah...",
    opsi: [
      "A. 3,5 m/s²",
      "B. 4,0 m/s²",
      "C. 4,5 m/s²",
      "D. 5,0 m/s²",
      "E. 5,5 m/s²"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Gaya normal pada langit-langit atap: $N = F_v - mg$ dan Hukum II Newton horizontal: $F_h - f_k = m \\cdot a$.",
      langkah: "1) Gaya vertikal: $\\Sigma F_y = 0 \\Rightarrow F_v - mg - N = 0 \\Rightarrow N = 70 - 4(10) = 30\\text{ N}$.<br>2) Gaya gesek kinetis langit-langit: $f_k = \\mu_k N = 0{,}20 \\times 30 = 6\\text{ N}$.<br>3) Percepatan horizontal: $a = \\frac{F_h - f_k}{m} = \\frac{20 - 6}{4} = \\frac{14}{4} = 3{,}5\\text{ m/s}^2$.",
      jebakan: "Mengira $N = mg = 40\\text{ N}$ atau salah menghitung $N = F_v + mg = 110\\text{ N}$."
    }
  },
  {
    id: "fis-din-32",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gaya Gesek (Statis vs Kinetis)",
    difficulty: "Sedang",
    soal: "Sebuah balok bermassa $m = 6\\text{ kg}$ berada pada bidang miring kasar dengan sudut kemiringan $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Koefisien gesekan kinetis antara balok dan bidang miring adalah $\\mu_k = 0{,}50$. Balok didorong ke bawah sejajar bidang miring dengan gaya luar $F = 18\\text{ N}$. Besar percepatan gerak balok menuruni bidang miring adalah...",
    opsi: [
      "A. 2 m/s²",
      "B. 3 m/s²",
      "C. 4 m/s²",
      "D. 5 m/s²",
      "E. 6 m/s²"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Hukum II Newton balok didorong menuruni bidang miring kasar: $\\Sigma F_x = F + mg \\sin\\theta - f_k = m \\cdot a$.",
      langkah: "1) Komponen berat tegak lurus bidang: $N = mg \\cos 37^\\circ = 6(10)(0{,}8) = 48\\text{ N}$.<br>2) Gaya gesek kinetis (menentang arah gerak turun): $f_k = \\mu_k N = 0{,}50 \\times 48 = 24\\text{ N}$.<br>3) Komponen berat sejajar bidang: $W_x = mg \\sin 37^\\circ = 6(10)(0{,}6) = 36\\text{ N}$.<br>4) Resultan gaya searah kemiringan: $\\Sigma F = F + W_x - f_k = 18 + 36 - 24 = 30\\text{ N}$.<br>5) Percepatan: $a = \\frac{30}{6} = 5\\text{ m/s}^2$.",
      jebakan: "Keliru menentukan arah gaya gesek (menambahkan gaya gesek ke arah bawah), atau salah menghitung $W_x$."
    }
  },

  // ==========================================================================
  // SUB-BAB 3: SISTEM TALI & KATROL (TRANSLASI MURNI)
  // ==========================================================================
  {
    id: "fis-din-09",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Mudah",
    soal: "Dua buah beban $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ dihubungkan dengan tali ringan tak bermassa melalui sebuah katrol tetap yang licin (mesin Atwood vertikal). Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua beban saat sistem dilepas dari keadaan diam adalah...",
    opsi: [
      "A. 1 m/s²",
      "B. 2 m/s²",
      "C. 3 m/s²",
      "D. 4 m/s²",
      "E. 5 m/s²"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum II Newton pada mesin Atwood vertikal: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
      langkah: "Selisih gaya penggerak gravitasi dibagi massa total kedua benda:<br>$$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2} \\times 10 = \\frac{1}{5} \\times 10 = 2\\text{ m/s}^2$$.",
      jebakan: "Seringkali siswa salah membagi dengan selisih massa atau hanya membagi dengan salah satu massa benda."
    }
  },
  {
    id: "fis-din-10",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Mudah",
    soal: "Sebuah balok $A$ bermassa $3\\text{ kg}$ berada di atas meja datar yang licin tanpa gesekan. Balok $A$ dihubungkan dengan tali ringan melalui katrol licin di tepi meja ke balok gantung $B$ bermassa $2\\text{ kg}$. Jika sistem dilepas dari keadaan diam dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama kedua balok bergerak adalah...",
    opsi: [
      "A. 6 N",
      "B. 8 N",
      "C. 12 N",
      "D. 16 N",
      "E. 20 N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Sistem balok meja horizontal licin terhubung katrol: $a = \\frac{m_B g}{m_A + m_B}$ dan $T = m_A \\cdot a$.",
      langkah: "1) Percepatan sistem: $a = \\frac{m_B g}{m_A + m_B} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4\\text{ m/s}^2$.<br>2) Menghitung tegangan tali melalui balok $A$: $T = m_A \\cdot a = 3\\text{ kg} \\times 4\\text{ m/s}^2 = 12\\text{ N}$.",
      jebakan: "Mengira tegangan tali sama dengan gaya berat balok gantung ($T = m_B g = 20\\text{ N}$), padahal saat balok bergerak dipercepat ke bawah, $T < W_B$."
    }
  },
  {
    id: "fis-din-11",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Sedang",
    soal: "Sebuah balok kayu $A$ bermassa $m_A = 4\\text{ kg}$ diletakkan pada permukaan meja horizontal kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}25$. Balok $A$ dihubungkan oleh seutas tali ringan melalui katrol licin tanpa gesekan di ujung meja dengan balok beban $B$ bermassa $m_B = 6\\text{ kg}$ yang tergantung bebas secara vertikal. Jika sistem dilepaskan dan $g = 10\\text{ m/s}^2$, besar gaya tegangan tali selama sistem bergerak adalah...",
    opsi: [
      "A. 18 N",
      "B. 24 N",
      "C. 30 N",
      "D. 40 N",
      "E. 60 N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Penggabungan gaya gesek kinetis permukaan horizontal dengan dinamika sistem katrol dua benda terhubung.",
      langkah: "1) Gaya normal dan gaya gesek pada balok $A$: $N_A = m_A g = 40\\text{ N} \\Rightarrow f_k = \\mu_k N_A = 0{,}25 \\times 40 = 10\\text{ N}$.<br>2) Gaya berat beban $B$: $W_B = m_B g = 60\\text{ N}$.<br>3) Percepatan sistem: $a = \\frac{W_B - f_k}{m_A + m_B} = \\frac{60 - 10}{4 + 6} = \\frac{50}{10} = 5\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$): $W_B - T = m_B a \\Rightarrow T = 60 - 6(5) = 30\\text{ N}$.",
      jebakan: "Siswa lupa mengurangkan gaya gesek kinetis pada gaya penarik sistem, atau keliru menghitung $T = f_k = 10\\text{ N}$ seolah sistem berada dalam kesetimbangan statis."
    }
  },
  {
    id: "fis-din-12",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Sedang",
    soal: "Sebuah balok $A$ bermassa $5\\text{ kg}$ terletak pada bidang miring licin yang memiliki sudut kemiringan $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$). Balok $A$ dihubungkan oleh seutas tali melalui katrol licin di puncak bidang miring ke balok gantung $B$ yang juga bermassa $5\\text{ kg}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar percepatan gerak kedua balok tersebut adalah...",
    opsi: [
      "A. 2,5 m/s²",
      "B. 3,5 m/s²",
      "C. 5,0 m/s²",
      "D. 7,5 m/s²",
      "E. 10,0 m/s²"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Dinamika sistem katrol bidang miring licin terhubung beban vertikal: $a = \\frac{m_B g - m_A g \\sin\\theta}{m_A + m_B}$.",
      langkah: "1) Komponen berat $A$ sejajar bidang miring: $W_{Ax} = m_A g \\sin 30^\\circ = 5(10)(0{,}5) = 25\\text{ N}$.<br>2) Berat beban gantung $B$: $W_B = m_B g = 50\\text{ N}$.<br>3) Karena $W_B > W_{Ax}$, balok $B$ bergerak turun dan $A$ bergerak naik.<br>4) Percepatan sistem: $a = \\frac{W_B - W_{Ax}}{m_A + m_B} = \\frac{50 - 25}{5 + 5} = \\frac{25}{10} = 2{,}5\\text{ m/s}^2$.",
      jebakan: "Hanya membagi resultan gaya dengan massa salah satu benda ($a = 25 / 5 = 5{,}0\\text{ m/s}^2$), atau mengira kedua massa yang sama ($5\\text{ kg}$ dan $5\\text{ kg}$) pasti berada dalam keadaan diam setimbang."
    }
  },
  {
    id: "fis-din-33",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Mudah",
    soal: "Sebuah sangkar mini derek material proyek bermassa total $M = 250\\text{ kg}$ ditarik ke atas secara vertikal oleh kabel baja mesin kerek dengan percepatan konstan $a = 2\\text{ m/s}^2$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan pada kabel baja penarik tersebut adalah...",
    opsi: [
      "A. 2000 N",
      "B. 3000 N",
      "C. 2500 N",
      "D. 3500 N",
      "E. 4000 N"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum II Newton pada kabel derek vertikal: $T - Mg = M \\cdot a \\Rightarrow T = M(g + a)$.",
      langkah: "$$T = 250(10 + 2) = 250 \\times 12 = 3000\\text{ N}$$.",
      jebakan: "Hanya menghitung berat sangkar $Mg = 2500\\text{ N}$ tanpa menambahkan gaya inersia pengangkatan."
    }
  },
  {
    id: "fis-din-34",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Mudah",
    soal: "Dua benda $m_1 = 4\\text{ kg}$ dan $m_2 = 1\\text{ kg}$ digantungkan pada ujung-ujung seutas tali ringan melalui katrol tetap licin tanpa massa. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, besar gaya tegangan tali penghubung selama kedua benda bergerak dipercepat adalah...",
    opsi: [
      "A. 8 N",
      "B. 10 N",
      "C. 12 N",
      "D. 14 N",
      "E. 16 N"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Tegangan tali mesin Atwood vertikal: $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.",
      langkah: "1) Percepatan sistem: $a = \\frac{4 - 1}{4 + 1} \\times 10 = \\frac{3}{5} \\times 10 = 6\\text{ m/s}^2$.<br>2) Tegangan tali (tinjau $m_2$ yang bergerak naik): $T - m_2 g = m_2 a \\Rightarrow T = 1(10 + 6) = 16\\text{ N}$.<br>(Alternatif rumus langsung: $T = \\frac{2(4)(1)}{4 + 1} \\times 10 = \\frac{80}{5} = 16\\text{ N}$).",
      jebakan: "Seringkali siswa menjawab rata-rata berat kedua benda $\\frac{40 + 10}{2} = 25\\text{ N}$ atau salah menjumlahkan."
    }
  },
  {
    id: "fis-din-35",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Sedang",
    soal: "Dua buah balok $A$ ($m_A = 5\\text{ kg}$) dan $B$ ($m_B = 5\\text{ kg}$) diletakkan pada sistem bidang miring ganda yang licin tanpa gesekan. Balok $A$ berada pada kemiringan $\\theta_A = 53^\\circ$ ($\\sin 53^\\circ = 0{,}8$) dan balok $B$ berada pada kemiringan $\\theta_B = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$). Kedua balok dihubungkan oleh seutas tali ringan melalui katrol licin di puncak pertemuan kedua bidang miring. Jika $g = 10\\text{ m/s}^2$, besar percepatan dan tegangan tali penghubung kedua balok adalah...",
    opsi: [
      "A. a = 1 m/s² dan T = 35 N",
      "B. a = 1 m/s² dan T = 40 N",
      "C. a = 2 m/s² dan T = 30 N",
      "D. a = 2 m/s² dan T = 35 N",
      "E. a = 0 m/s² dan T = 30 N"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Sistem katrol bidang miring ganda: $a = \\frac{m_A g \\sin\\theta_A - m_B g \\sin\\theta_B}{m_A + m_B}$.",
      langkah: "1) Gaya penggerak $A$: $W_{Ax} = 5(10)(0{,}8) = 40\\text{ N}$ menuruni bidang $A$.<br>2) Gaya penahan $B$: $W_{Bx} = 5(10)(0{,}6) = 30\\text{ N}$ menuruni bidang $B$.<br>3) Percepatan sistem: $a = \\frac{40 - 30}{5 + 5} = \\frac{10}{10} = 1\\text{ m/s}^2$.<br>4) Tegangan tali (tinjau balok $B$ yang tertarik naik): $T - W_{Bx} = m_B a \\Rightarrow T = 30 + 5(1) = 35\\text{ N}$.",
      jebakan: "Siswa mengira karena massa kedua balok sama ($5\\text{ kg}$ dan $5\\text{ kg}$), sistem otomatis diam setimbang ($a = 0$)."
    }
  },
  {
    id: "fis-din-36",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Sistem Tali & Katrol",
    difficulty: "Sedang",
    soal: "Sebuah balok $A$ ($m_A = 3\\text{ kg}$) berada di atas meja mendatar kasar dengan koefisien gesekan kinetis $\\mu_k = 0{,}20$. Balok $A$ dihubungkan tali melalui katrol licin di ujung kanan meja ke beban gantung $B$ ($m_B = 2\\text{ kg}$). Balok $A$ ditarik ke arah kiri oleh gaya luar horizontal $F = 36\\text{ N}$ sehingga sistem bergerak ke kiri dan balok $B$ terangkat naik. Jika $g = 10\\text{ m/s}^2$, percepatan gerak sistem tersebut adalah...",
    opsi: [
      "A. 1 m/s²",
      "B. 1,5 m/s²",
      "C. 2 m/s²",
      "D. 2,5 m/s²",
      "E. 3 m/s²"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Hukum II Newton pada sistem katrol dengan gaya tarik eksternal berlawanan arah gerak beban gantung.",
      langkah: "1) Karena balok $A$ bergerak ke kiri, gaya gesek kinetis pada $A$ mengarah ke kanan: $f_k = \\mu_k m_A g = 0{,}20 \\times 30 = 6\\text{ N}$.<br>2) Gaya berat beban $B$ yang harus diangkat ke atas: $W_B = m_B g = 20\\text{ N}$.<br>3) Resultan gaya penggerak ke kiri: $\\Sigma F = F - f_k - W_B = 36 - 6 - 20 = 10\\text{ N}$.<br>4) Percepatan sistem: $a = \\frac{\\Sigma F}{m_A + m_B} = \\frac{10}{3 + 2} = \\frac{10}{5} = 2\\text{ m/s}^2$.",
      jebakan: "Salah menentukan arah gaya gesek kinetis (mengira gaya gesek mengarah ke kiri bersama $F$)."
    }
  },

  // ==========================================================================
  // SUB-BAB 4: DINAMIKA GERAK MELINGKAR & GAYA SENTRIPETAL
  // ==========================================================================
  {
    id: "fis-din-13",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Mudah",
    soal: "Sebuah mobil sedan bermassa $1200\\text{ kg}$ melintasi puncak jembatan layang yang memiliki kelengkungan cembung dengan jari-jari $R = 40\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan maksimum mobil di puncak jembatan agar roda tetap mempertahankan kontak dengan jalan (tidak terangkat ke udara) adalah...",
    opsi: [
      "A. 10 m/s",
      "B. 12 m/s",
      "C. 15 m/s",
      "D. 18 m/s",
      "E. 20 m/s"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Dinamika gerak melingkar vertikal di puncak bukit/jembatan cembung: $mg - N = \\frac{m v^2}{R}$.",
      langkah: "Kondisi batas mobil tepat tidak terlempar/terangkat adalah gaya normal bernilai nol ($N = 0$).<br>$$mg = \\frac{m v_{\\max}^2}{R} \\Rightarrow v_{\\max} = \\sqrt{g R} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20\\text{ m/s}$$.",
      jebakan: "Siswa sering mengira massa mobil ($1200\\text{ kg}$) berpengaruh pada kecepatan lepas, padahal variabel massa tereliminasi dari persamaan."
    }
  },
  {
    id: "fis-din-14",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Mudah",
    soal: "Pada sebuah atraksi sirkus, seorang akrobat memutar ember berisi air dalam bidang lingkaran vertikal dengan panjang tali $R = 0{,}9\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear minimum putaran ember di titik tertinggi lintasannya agar air di dalamnya tidak tumpah adalah...",
    opsi: [
      "A. 3 m/s",
      "B. 4 m/s",
      "C. 5 m/s",
      "D. 6 m/s",
      "E. 9 m/s"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Kelajuan kritis pada titik tertinggi gerak melingkar vertikal: $N + mg = \\frac{m v^2}{R}$ dengan syarat $N \\ge 0$.",
      langkah: "Agar air tepat tidak lepas dari dasar ember di titik puncak, gaya desak normal dasar ember $N = 0$:<br>$$mg = \\frac{m v_{\\min}^2}{R} \\Rightarrow v_{\\min} = \\sqrt{g R} = \\sqrt{10 \\times 0{,}9} = \\sqrt{9} = 3\\text{ m/s}$$.",
      jebakan: "Lupa menarik akar kuadrat dari hasil kali $g R = 9$ sehingga memilih opsi $9\\text{ m/s}$."
    }
  },
  {
    id: "fis-din-15",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Sedang",
    soal: "Sebuah jalan tikungan sirkuit balap dirancang dengan kemiringan sudut $\\theta = 37^\\circ$ terhadap bidang datar horizontal ($\\tan 37^\\circ = 0{,}75$) dan memiliki jari-jari kelengkungan $R = 120\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan rancangan aman (*design banking speed*) mobil balap agar dapat melintasi tikungan tanpa bergantung sama sekali pada gaya gesekan ban adalah...",
    opsi: [
      "A. 15 m/s",
      "B. 20 m/s",
      "C. 25 m/s",
      "D. 30 m/s",
      "E. 40 m/s"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Tikungan miring licin (design banking angle): komponen horizontal gaya normal bertindak sebagai gaya sentripetal ($N \\sin\\theta = \\frac{m v^2}{R}$ dan $N \\cos\\theta = mg$).",
      langkah: "1) Dari perbandingan kedua sumbu: $\\tan\\theta = \\frac{v^2}{g R}$.<br>2) Menghitung kelajuan aman: $v = \\sqrt{g R \\tan\\theta} = \\sqrt{10 \\times 120 \\times 0{,}75} = \\sqrt{900} = 30\\text{ m/s}$.",
      jebakan: "Siswa sering membalik fungsi trigonometri menjadi $\\frac{g R}{\\tan\\theta}$ atau lupa menarik akar kuadrat dari 900."
    }
  },
  {
    id: "fis-din-16",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Sedang",
    soal: "Sebuah beban logam bermassa $m = 2\\text{ kg}$ diikatkan pada ujung seutas kawat ringan sepanjang $L = 0{,}8\\text{ meter}$ dan diputar pada bidang lingkaran vertikal. Pada saat beban melintasi titik terendah dari lintasannya, kelajuannya terukur sebesar $v = 4\\text{ m/s}$. Jika $g = 10\\text{ m/s}^2$, besar gaya tegangan kawat pada titik terendah tersebut adalah...",
    opsi: [
      "A. 20 N",
      "B. 30 N",
      "C. 40 N",
      "D. 50 N",
      "E. 60 N"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Hukum II Newton arah radial gerak melingkar vertikal di titik terendah: $T - mg = \\frac{m v^2}{R}$.",
      langkah: "1) Gaya gravitasi: $W = mg = 2 \\times 10 = 20\\text{ N}$.<br>2) Gaya sentripetal yang dibutuhkan: $F_s = \\frac{m v^2}{L} = \\frac{2 \\times 4^2}{0{,}8} = \\frac{32}{0{,}8} = 40\\text{ N}$.<br>3) Tegangan kawat pada titik terendah: $T = W + F_s = 20 + 40 = 60\\text{ N}$.",
      jebakan: "Menjawab hanya gaya sentripetalnya saja ($40\\text{ N}$) atau hanya beratnya saja ($20\\text{ N}$), tanpa menggabungkan kedua komponen gaya searah radial."
    }
  },
  {
    id: "fis-din-37",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Mudah",
    soal: "Sebuah mobil sedan melintasi tikungan jalan datar beraspal dengan jari-jari kelengkungan $R = 25\\text{ meter}$. Koefisien gesekan statis antara ban mobil dan permukaan aspal adalah $\\mu_s = 0{,}40$. Jika $g = 10\\text{ m/s}^2$, kelajuan maksimum yang diperbolehkan agar mobil dapat berbelok dengan aman tanpa selip keluar jalur adalah...",
    opsi: [
      "A. 5 m/s",
      "B. 10 m/s",
      "C. 15 m/s",
      "D. 20 m/s",
      "E. 25 m/s"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Tikungan datar kasar: gaya gesek statis bertindak sebagai gaya sentripetal ($f_s \\le \\mu_s mg = \\frac{m v^2}{R}$).",
      langkah: "$$v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}40 \\times 10 \\times 25} = \\sqrt{100} = 10\\text{ m/s}$$. (Setara dengan $36\\text{ km/jam}$).",
      jebakan: "Lupa menarik akar kuadrat sehingga menjawab $100\\text{ m/s}$ atau mengira kelajuan maksimum bergantung pada massa mobil."
    }
  },
  {
    id: "fis-din-38",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Mudah",
    soal: "Sebuah kereta *roller coaster* membawa seorang penumpang bermassa $60\\text{ kg}$ melintasi titik terbawah lintasan lembah cekung dengan kelajuan $v = 20\\text{ m/s}$. Jari-jari kelengkungan lembah cekung tersebut adalah $R = 20\\text{ meter}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan kursi terhadap badan penumpang di titik terendah tersebut adalah...",
    opsi: [
      "A. 600 N",
      "B. 1200 N",
      "C. 1500 N",
      "D. 1800 N",
      "E. 2400 N"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Dinamika gerak melingkar di titik terendah lembah cekung: $N - mg = \\frac{m v^2}{R}$.",
      langkah: "1) Berat penumpang: $W = mg = 60(10) = 600\\text{ N}$.<br>2) Gaya sentripetal: $F_s = \\frac{m v^2}{R} = \\frac{60 \\times 20^2}{20} = 1200\\text{ N}$.<br>3) Gaya normal: $N = W + F_s = 600 + 1200 = 1800\\text{ N}$ (penumpang merasakan sensasi $3g$).",
      jebakan: "Siswa sering mengurangkan gaya sentripetal dengan gaya berat ($N = 1200 - 600 = 600\\text{ N}$) karena tertukar dengan kasus bukit cembung."
    }
  },
  {
    id: "fis-din-39",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Sedang",
    soal: "Sebuah bandul konis (ayunan kerucut) bermassa $m = 2\\text{ kg}$ diikatkan pada kawat ringan dengan panjang $L = 2\\text{ meter}$. Bandul diputar membentuk kerucut sehingga kawat membentuk sudut tetap $\\theta = 37^\\circ$ terhadap garis vertikal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $\\tan 37^\\circ = 0{,}75$). Jika $g = 10\\text{ m/s}^2$, kelajuan linear putaran bandul tersebut adalah...",
    opsi: [
      "A. 3 m/s",
      "B. 4 m/s",
      "C. 5 m/s",
      "D. 6 m/s",
      "E. 8 m/s"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Bandul konis: $T \\cos\\theta = mg$ dan $T \\sin\\theta = \\frac{m v^2}{R}$ dengan jari-jari lintasan $R = L \\sin\\theta$.",
      langkah: "1) Jari-jari lingkaran horizontal: $R = L \\sin 37^\\circ = 2 \\times 0{,}6 = 1{,}2\\text{ m}$.<br>2) Hubungan kecepatan dan sudut: $\\tan 37^\\circ = \\frac{v^2}{g R}$.<br>3) Kelajuan linier: $v = \\sqrt{g R \\tan 37^\\circ} = \\sqrt{10 \\times 1{,}2 \\times 0{,}75} = \\sqrt{9} = 3\\text{ m/s}$.",
      jebakan: "Menggunakan panjang tali $L = 2\\text{ m}$ langsung sebagai jari-jari lingkaran $R$ tanpa mengalikan dengan $\\sin 37^\\circ$."
    }
  },
  {
    id: "fis-din-40",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gerak Melingkar & Gaya Sentripetal",
    difficulty: "Sedang",
    soal: "Pada wahana taman hiburan silinder putar raksasa vertikal (*Rotor* / Dinding Maut) dengan jari-jari $R = 4\\text{ meter}$, seseorang bersandar merapat pada dinding silinder yang berputar terhadap poros vertikal. Koefisien gesekan statis antara pakaian orang tersebut dan dinding silinder adalah $\\mu_s = 0{,}40$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan linear putaran minimum $v_{\\min}$ dinding silinder agar orang tersebut tidak merosot ke bawah saat lantai di bawah kakinya diturunkan adalah...",
    opsi: [
      "A. 4 m/s",
      "B. 6 m/s",
      "C. 8 m/s",
      "D. 9 m/s",
      "E. 10 m/s"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Silinder putar vertikal: gaya normal dinding menjadi gaya sentripetal ($N = \\frac{m v^2}{R}$) dan gaya gesek statis menahan berat badan ($f_s = mg \\le \\mu_s N$).",
      langkah: "Kondisi batas tepat tidak merosot: $mg = \\mu_s N = \\mu_s \\left(\\frac{m v_{\\min}^2}{R}\\right) \\Rightarrow v_{\\min} = \\sqrt{\\frac{g R}{\\mu_s}} = \\sqrt{\\frac{10 \\times 4}{0{,}40}} = \\sqrt{100} = 10\\text{ m/s}$.",
      jebakan: "Mengalikan dengan $\\mu_s$ bukannya membagi, sehingga menghitung $\\sqrt{10 \\times 4 \\times 0{,}40} = 4\\text{ m/s}$."
    }
  },

  // ==========================================================================
  // SUB-BAB 5: HUKUM GRAVITASI UNIVERSAL NEWTON
  // ==========================================================================
  {
    id: "fis-din-17",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Mudah",
    soal: "Percepatan gravitasi pada permukaan bumi yang berjari-jari $R$ adalah $g = 10\\text{ m/s}^2$. Sebuah satelit pengamat cuaca mengorbit bumi pada lintasan lingkaran pada ketinggian $h = R$ di atas permukaan bumi. Besar percepatan gravitasi yang dirasakan oleh satelit tersebut pada orbitnya adalah...",
    opsi: [
      "A. 1,25 m/s²",
      "B. 2,5 m/s²",
      "C. 5,0 m/s²",
      "D. 7,5 m/s²",
      "E. 10,0 m/s²"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum kuadrat terbalik kuat medan gravitasi: $g(r) = G \\frac{M}{r^2}$ dengan jarak diukur dari pusat massa bumi ($r = R + h$).",
      langkah: "1) Jarak satelit dari pusat bumi: $r = R + h = R + R = 2R$.<br>2) Kuat medan gravitasi pada ketinggian tersebut:<br>$$g' = g \\left(\\frac{R}{r}\\right)^2 = 10 \\left(\\frac{R}{2R}\\right)^2 = 10 \\times \\frac{1}{4} = 2{,}5\\text{ m/s}^2$$.",
      jebakan: "Siswa sering lupa mengkuadratkan perbandingan jarak ($10 / 2 = 5{,}0\\text{ m/s}^2$) atau lupa bahwa jarak harus dihitung dari pusat bumi."
    }
  },
  {
    id: "fis-din-18",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Mudah",
    soal: "Sebuah eksoplanet baru yang ditemukan oleh teleskop antariksa memiliki massa dua kali massa bumi ($M_P = 2 M_B$) dan jari-jari setengah dari jari-jari bumi ($R_P = 0{,}5 R_B$). Jika kuat medan gravitasi di permukaan bumi bernilai $g$, maka kuat medan gravitasi di permukaan eksoplanet tersebut adalah...",
    opsi: [
      "A. g",
      "B. 2g",
      "C. 4g",
      "D. 8g",
      "E. 16g"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Perbandingan kuat medan gravitasi permukaan planet: $g = G \\frac{M}{R^2}$.",
      langkah: "$$\\frac{g_P}{g_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (2) \\left(\\frac{1}{0{,}5}\\right)^2 = 2 \\times 4 = 8 \\Rightarrow g_P = 8g$$.",
      jebakan: "Lupa mengkuadratkan jari-jari sehingga menghitung $\\frac{2}{0{,}5} = 4g$."
    }
  },
  {
    id: "fis-din-19",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Sedang",
    soal: "Dua buah benda angkasa $M_1$ dan $M_2$ berada pada posisi tetap dan terpisah sejauh $d$. Diketahui massa benda pertama adalah sembilan kali massa benda kedua ($M_1 = 9 M_2$). Sebuah wahana antariksa tak berawak melintas di sepanjang garis hubung kedua benda. Jarak wahana dari benda pertama $M_1$ agar resultan medan gravitasi total yang dialami wahana bernilai nol adalah...",
    opsi: [
      "A. 0,25 d",
      "B. 0,33 d",
      "C. 0,50 d",
      "D. 0,60 d",
      "E. 0,75 d"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Titik netral gravitasi: kesetimbangan kuat medan gravitasi dua sumber massa segaris ($g_1 = g_2$).",
      langkah: "Misalkan jarak dari $M_1$ adalah $x$, maka jarak dari $M_2$ adalah $d - x$.<br>$$G \\frac{M_1}{x^2} = G \\frac{M_2}{(d - x)^2} \\Rightarrow \\frac{9 M_2}{x^2} = \\frac{M_2}{(d - x)^2}$$<br>Tarik akar kedua ruas: $\\frac{3}{x} = \\frac{1}{d - x} \\Rightarrow 3(d - x) = x \\Rightarrow 3d = 4x \\Rightarrow x = \\frac{3}{4}d = 0{,}75 d$.",
      jebakan: "Siswa sering memilih opsi $0{,}25 d$ yang merupakan jarak titik netral dari benda kedua ($M_2$), bukan dari benda pertama ($M_1$)."
    }
  },
  {
    id: "fis-din-20",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Sedang",
    soal: "Sebuah satelit komunikasi bermassa $m$ bergerak dalam lintasan orbit lingkaran stabil mengelilingi bumi pada ketinggian $h = 3R$ di atas permukaan bumi, dengan $R$ adalah jari-jari bumi. Jika percepatan gravitasi di permukaan bumi adalah $g$, kelajuan orbit satelit tersebut dinyatakan dalam variabel $g$ dan $R$ adalah...",
    opsi: [
      "A. 1/4 √(gR)",
      "B. 1/3 √(gR)",
      "C. 1/2 √(gR)",
      "D. √(gR)",
      "E. 2 √(gR)"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Kelajuan orbit satelit lingkaran: gaya gravitasi bumi bertindak sebagai gaya sentripetal ($\\frac{G M m}{r^2} = \\frac{m v^2}{r}$).",
      langkah: "1) Jarak orbit dari pusat bumi: $r = R + h = R + 3R = 4R$.<br>2) Kelajuan orbit: $v = \\sqrt{\\frac{GM}{r}}$.<br>3) Hubungan konstanta permukaan: $g = \\frac{GM}{R^2} \\Rightarrow GM = g R^2$.<br>4) Substitusi: $v = \\sqrt{\\frac{g R^2}{4R}} = \\sqrt{\\frac{g R}{4}} = \\frac{1}{2}\\sqrt{g R}$.",
      jebakan: "Mengabaikan penambahan jari-jari bumi ($r = 3R$ bukan $4R$), atau lupa menarik akar kuadrat dari angka 4 di penyebut."
    }
  },
  {
    id: "fis-din-41",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Mudah",
    soal: "Dua buah bola baja raksasa bermassa $m_1 = 4000\\text{ kg}$ dan $m_2 = 9000\\text{ kg}$ terpisah sejauh $r = 6\\text{ meter}$ antar-pusat massanya. Jika $G$ adalah konstanta gravitasi universal Newton, besar gaya gravitasi tarik-menarik antara kedua bola tersebut adalah...",
    opsi: [
      "A. 10⁴ G N",
      "B. 10⁵ G N",
      "C. 10⁶ G N",
      "D. 6 × 10⁶ G N",
      "E. 36 × 10⁶ G N"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Hukum Gravitasi Universal Newton: $F = G \\frac{m_1 m_2}{r^2}$.",
      langkah: "$$F = G \\frac{(4000)(9000)}{6^2} = G \\frac{36 \\times 10^6}{36} = 10^6 G\\text{ N}$$.",
      jebakan: "Lupa mengkuadratkan jarak pemisah di penyebut ($r^2 = 36$ bukan $6$)."
    }
  },
  {
    id: "fis-din-42",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Mudah",
    soal: "Seorang astronot memiliki berat $W = 600\\text{ N}$ di permukaan bumi. Jika astronot tersebut mendarat di permukaan sebuah planet baru yang memiliki massa $3$ kali massa bumi ($M_P = 3 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), berat astronot tersebut di permukaan planet baru adalah...",
    opsi: [
      "A. 300 N",
      "B. 400 N",
      "C. 450 N",
      "D. 450 N",
      "E. 900 N"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Perbandingan gaya berat benda pada dua planet: $W \\propto \\frac{M}{R^2}$.",
      langkah: "$$\\frac{W_P}{W_B} = \\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)^2 = (3) \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4} \\Rightarrow W_P = \\frac{3}{4} \\times 600 = 450\\text{ N}$$.",
      jebakan: "Mengabaikan pengkuadratan jari-jari sehingga menghitung $\\frac{3}{2} \\times 600 = 900\\text{ N}$."
    }
  },
  {
    id: "fis-din-43",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Sedang",
    soal: "Dua buah satelit riset $A$ dan $B$ mengorbit bumi dalam lintasan lingkaran. Satelit $A$ mengorbit dengan jari-jari orbit $r_A = R$ dan memiliki periode revolusi $T_A = 8\\text{ hari}$. Jika satelit $B$ mengorbit dengan jari-jari orbit $r_B = 4R$, periode revolusi satelit $B$ mengelilingi bumi adalah...",
    opsi: [
      "A. 32 hari",
      "B. 64 hari",
      "C. 96 hari",
      "D. 128 hari",
      "E. 256 hari"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Hukum III Kepler: perbandingan kuadrat periode revolusi sama dengan perbandingan pangkat tiga jari-jari orbit ($\\frac{T_B^2}{T_A^2} = \\frac{r_B^3}{r_A^3}$).",
      langkah: "$$\\left(\\frac{T_B}{T_A}\\right)^2 = \\left(\\frac{r_B}{r_A}\\right)^3 = \\left(\\frac{4R}{R}\\right)^3 = 64 \\Rightarrow \\frac{T_B}{T_A} = \\sqrt{64} = 8 \\Rightarrow T_B = 8 \\times T_A = 8 \\times 8 = 64\\text{ hari}$$.",
      jebakan: "Hanya menggunakan perbandingan linear ($4 \\times 8 = 32\\text{ hari}$) tanpa menerapkan aturan pangkat $T^2 \\propto r^3$."
    }
  },
  {
    id: "fis-din-44",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Gravitasi Universal Newton",
    difficulty: "Sedang",
    soal: "Kelajuan lepas (*escape velocity*) sebuah pesawat antariksa dari permukaan bumi adalah $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$. Pada sebuah planet super yang memiliki massa $8$ kali massa bumi ($M_P = 8 M_B$) dan jari-jari $2$ kali jari-jari bumi ($R_P = 2 R_B$), kelajuan lepas roket dari permukaan planet tersebut adalah...",
    opsi: [
      "A. 2 v_lepas",
      "B. 4 v_lepas",
      "C. √2 v_lepas",
      "D. 2√2 v_lepas",
      "E. 8 v_lepas"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Kelajuan lepas medan gravitasi: $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}}$.",
      langkah: "$$\\frac{v_{\\text{lepas}, P}}{v_{\\text{lepas}, B}} = \\sqrt{\\left(\\frac{M_P}{M_B}\\right) \\left(\\frac{R_B}{R_P}\\right)} = \\sqrt{\\frac{8}{2}} = \\sqrt{4} = 2 \\Rightarrow v_{\\text{lepas}, P} = 2 v_{\\text{lepas}, B}$$.",
      jebakan: "Lupa menarik tanda akar kuadrat dari rasio $\\frac{8}{2} = 4$, sehingga menjawab $4 v_{\\text{lepas}}$."
    }
  },

  // ==========================================================================
  // SUB-BAB 6: DINAMIKA ROTASI & BENDA MENGGELINDING
  // ==========================================================================
  {
    id: "fis-din-21",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Mudah",
    soal: "Seorang teknisi mesin menggunakan kunci pas bergagang panjang $L = 40\\text{ cm}$ ($0{,}4\\text{ m}$) untuk mengencangkan sebuah mur poros roda. Teknisi tersebut menarik ujung gagang kunci dengan gaya sebesar $F = 50\\text{ N}$ yang membentuk sudut $30^\\circ$ terhadap arah memanjang gagang kunci pas. Besar momen gaya (torsi) yang dihasilkan terhadap titik pusat mur adalah...",
    opsi: [
      "A. 10 N·m",
      "B. 15 N·m",
      "C. 17,3 N·m",
      "D. 20 N·m",
      "E. 25 N·m"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Definisi torsi (momen gaya): $\\tau = F \\cdot r \\cdot \\sin\\theta$.",
      langkah: "Lengan gaya $r = 0{,}4\\text{ m}$, $F = 50\\text{ N}$, dan sudut $\\theta = 30^\\circ$.<br>$$\\tau = F \\cdot r \\cdot \\sin 30^\\circ = 50 \\times 0{,}4 \\times 0{,}5 = 10\\text{ N}\\cdot\\text{m}$$.",
      jebakan: "Mengabaikan sudut kemiringan (menganggap tegak lurus $\\tau = 50 \\times 0{,}4 = 20\\text{ N}\\cdot\\text{m}$) atau keliru menggunakan fungsi $\\cos 30^\\circ$."
    }
  },
  {
    id: "fis-din-22",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Mudah",
    soal: "Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 10\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ meter}$ dipasang pada poros putar licin di pusatnya ($I = \\frac{1}{2} M R^2$). Sebuah tali ringan dililitkan pada sekeliling tepi silinder dan ditarik dengan gaya tangensial tetap sebesar $F = 30\\text{ N}$. Besar percepatan sudut rotasi yang timbul pada silinder pejal tersebut adalah...",
    opsi: [
      "A. 15 rad/s²",
      "B. 20 rad/s²",
      "C. 25 rad/s²",
      "D. 30 rad/s²",
      "E. 60 rad/s²"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Hukum II Newton untuk gerak rotasi: $\\Sigma \\tau = I \\cdot \\alpha$.",
      langkah: "1) Torsi dari gaya tangensial: $\\tau = F \\cdot R = 30 \\times 0{,}2 = 6\\text{ N}\\cdot\\text{m}$.<br>2) Momen inersia silinder pejal: $I = \\frac{1}{2} M R^2 = \\frac{1}{2}(10)(0{,}2^2) = 5(0{,}04) = 0{,}2\\text{ kg}\\cdot\\text{m}^2$.<br>3) Percepatan sudut: $\\alpha = \\frac{\\tau}{I} = \\frac{6}{0{,}2} = 30\\text{ rad/s}^2$.",
      jebakan: "Lupa menyertakan faktor $1/2$ pada momen inersia silinder pejal sehingga menghasilkan $\\alpha = 15\\text{ rad/s}^2$."
    }
  },
  {
    id: "fis-din-23",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Sedang",
    soal: "Sebuah silinder pejal roda gigi ($I = \\frac{1}{2} M R^2$, konstanta inersia $k = 0{,}5$) bermassa $M = 4\\text{ kg}$ dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut $\\theta = 37^\\circ$ terhadap horizontal ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$; $g = 10\\text{ m/s}^2$). Silinder menggelinding murni menuruni bidang miring tanpa slip. Besar percepatan linier pusat massa silinder dan gaya gesekan statis yang bekerja pada silinder adalah...",
    opsi: [
      "A. a = 4 m/s² dan fs = 8 N",
      "B. a = 6 m/s² dan fs = 0 N",
      "C. a = 4 m/s² dan fs = 16 N",
      "D. a = 3 m/s² dan fs = 12 N",
      "E. a = 2 m/s² dan fs = 6 N"
    ],
    kunci: "A",
    pembahasan: {
      konsep: "Dinamika gerak menggelinding murni tanpa slip: translasi ($Mg \\sin\\theta - f_s = Ma$) dan rotasi ($f_s R = I \\alpha$). Formula percepatan: $a = \\frac{g \\sin\\theta}{1 + k}$.",
      langkah: "1) Percepatan linier pusat massa silinder ($k = 0{,}5$):<br>$$a = \\frac{g \\sin 37^\\circ}{1 + k} = \\frac{10 \\times 0{,}6}{1 + 0{,}5} = \\frac{6}{1{,}5} = 4\\text{ m/s}^2$$.<br>2) Menghitung gaya gesek statis penopang rotasi:<br>$$f_s = \\frac{I \\alpha}{R} = \\frac{1}{2} M a = \\frac{1}{2}(4)(4) = 8\\text{ N}$$.",
      jebakan: "Mengira benda meluncur bebas tanpa rotasi ($a = g \\sin\\theta = 6\\text{ m/s}^2$ dan $f_s = 0\\text{ N}$), atau menggunakan koefisien inersia bola pejal ($k = 2/5$) bukannya silinder pejal ($k = 1/2$)."
    }
  },
  {
    id: "fis-din-24",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Sedang",
    soal: "Sebuah tangga homogen dengan panjang $L = 5\\text{ meter}$ dan berat $W = 300\\text{ N}$ bersandar pada dinding vertikal yang licin sempurna dan bertumpu pada lantai horizontal kasar. Sudut kemiringan antara tangga dan lantai adalah $\\theta = 53^\\circ$ ($\\sin 53^\\circ = 0{,}8$; $\\cos 53^\\circ = 0{,}6$; $\\tan 53^\\circ = \\frac{4}{3}$). Jika tangga berada dalam keadaan tepat akan tergelincir, besar koefisien gesekan statis minimum $\\mu_s$ antara ujung bawah tangga dan lantai adalah...",
    opsi: [
      "A. 0,250",
      "B. 0,375",
      "C. 0,500",
      "D. 0,625",
      "E. 0,750"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Kesetimbangan statis benda tegar (tangga homogen bersandar): $\\Sigma F_x = 0$, $\\Sigma F_y = 0$, dan $\\Sigma \\tau = 0$.",
      langkah: "1) Kesetimbangan gaya vertikal: $N_{\\text{lantai}} = W = 300\\text{ N}$.<br>2) Kesetimbangan gaya horizontal: $f_s = N_{\\text{dinding}}$.<br>3) Torsi terhadap ujung bawah di lantai: $N_{\\text{dinding}} (L \\sin 53^\\circ) - W (\\frac{L}{2} \\cos 53^\\circ) = 0 \\Rightarrow N_{\\text{dinding}} = \\frac{W}{2 \\tan 53^\\circ}$.<br>4) Syarat tepat akan tergelincir ($f_s = \\mu_s N_{\\text{lantai}}$):<br>$$\\mu_s W = \\frac{W}{2 \\tan 53^\\circ} \\Rightarrow \\mu_s = \\frac{1}{2 \\tan 53^\\circ} = \\frac{1}{2 \\times (4/3)} = \\frac{3}{8} = 0{,}375$$.",
      jebakan: "Lupa bahwa letak titik berat tangga homogen berada di tengah batang ($L/2$), sehingga lupa membagi 2 dan mendapatkan hasil $\\mu_s = 0{,}750$."
    }
  },
  {
    id: "fis-din-45",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Mudah",
    soal: "Dua bola logam kecil bermassa $m_1 = 2\\text{ kg}$ dan $m_2 = 3\\text{ kg}$ disambungkan pada kedua ujung sebuah batang penghubung ringan tak bermassa dengan panjang total $L = 1\\text{ meter}$. Sistem diputar terhadap poros vertikal yang tegak lurus batang dan berjarak $0{,}4\\text{ m}$ dari bola pertama $m_1$. Momen inersia sistem partikel tersebut terhadap poros putar adalah...",
    opsi: [
      "A. 0,72 kg·m²",
      "B. 1,08 kg·m²",
      "C. 1,40 kg·m²",
      "D. 1,76 kg·m²",
      "E. 2,00 kg·m²"
    ],
    kunci: "C",
    pembahasan: {
      konsep: "Momen inersia sistem partikel titik diskrit: $I = \\Sigma m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2$.",
      langkah: "1) Jarak $m_1$: $r_1 = 0{,}4\\text{ m}$.<br>2) Jarak $m_2$: $r_2 = 1 - 0{,}4 = 0{,}6\\text{ m}$.<br>3) Momen inersia total: $I = 2(0{,}4)^2 + 3(0{,}6)^2 = 2(0{,}16) + 3(0{,}36) = 0{,}32 + 1{,}08 = 1{,}40\\text{ kg}\\cdot\\text{m}^2$.",
      jebakan: "Lupa mengkuadratkan jarak lengan ($r$), atau salah menentukan jarak bola kedua terhadap poros."
    }
  },
  {
    id: "fis-din-46",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Mudah",
    soal: "Sebuah bola pejal homogen ($I = \\frac{2}{5} M R^2$) menggelinding murni tanpa selip pada permukaan datar dengan kelajuan linier $v$. Perbandingan antara energi kinetik rotasi ($EK_{\\text{rot}}$) terhadap energi kinetik translasi ($EK_{\\text{trans}}$) bola pejal tersebut adalah...",
    opsi: [
      "A. 1/5",
      "B. 2/5",
      "C. 1/2",
      "D. 2/7",
      "E. 5/7"
    ],
    kunci: "B",
    pembahasan: {
      konsep: "Energi kinetik gerak menggelinding murni: $EK_{\\text{rot}} = \\frac{1}{2} I \\omega^2$ dan $EK_{\\text{trans}} = \\frac{1}{2} M v^2$ dengan $v = \\omega R$.",
      langkah: "$$EK_{\\text{rot}} = \\frac{1}{2}\\left(\\frac{2}{5} M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{5} M v^2$$<br>$$\\frac{EK_{\\text{rot}}}{EK_{\\text{trans}}} = \\frac{\\frac{1}{5} M v^2}{\\frac{1}{2} M v^2} = \\frac{2}{5} = 0{,}40$$.",
      jebakan: "Sering tertukar membandingkan dengan energi kinetik total ($EK_{\\text{rot}} / EK_{\\text{tot}} = 2/7$)."
    }
  },
  {
    id: "fis-din-47",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Sedang",
    soal: "Sebuah bola pejal ($I = \\frac{2}{5} M R^2$) dan sebuah silinder berongga tipis ($I = M R^2$) dilepaskan secara bersamaan dari keadaan diam di puncak bidang miring kasar yang sama. Keduanya menggelinding murni menuruni bidang miring tanpa slip. Perbandingan percepatan linier bola pejal ($a_{\\text{bola}}$) terhadap percepatan linier silinder berongga ($a_{\\text{silinder}}$) adalah...",
    opsi: [
      "A. 5 : 7",
      "B. 7 : 5",
      "C. 7 : 10",
      "D. 10 : 7",
      "E. 14 : 5"
    ],
    kunci: "D",
    pembahasan: {
      konsep: "Percepatan linier gerak menggelinding murni: $a = \\frac{g \\sin\\theta}{1 + k}$.",
      langkah: "1) Bola pejal ($k = 2/5$): $a_{\\text{bola}} = \\frac{g \\sin\\theta}{1 + 2/5} = \\frac{5}{7} g \\sin\\theta$.<br>2) Silinder berongga ($k = 1$): $a_{\\text{silinder}} = \\frac{g \\sin\\theta}{1 + 1} = \\frac{1}{2} g \\sin\\theta$.<br>3) Perbandingan: $\\frac{a_{\\text{bola}}}{a_{\\text{silinder}}} = \\frac{5/7}{1/2} = \\frac{10}{7}$.",
      jebakan: "Siswa sering membalik perbandingan menjadi $7 : 10$ atau salah memasukkan konstanta momen inersia silinder berongga tipis."
    }
  },
  {
    id: "fis-din-48",
    pilar: "Fisika",
    bab: "Dinamika",
    subBab: "Dinamika Rotasi & Benda Menggelinding",
    difficulty: "Sedang",
    soal: "Sebuah batang homogen bermassa $M = 6\\text{ kg}$ dan panjang $L = 4\\text{ meter}$ dihubungkan dengan engsel di dinding pada salah satu ujungnya dan ditahan tetap mendatar oleh seutas kawat baja yang diikatkan pada ujung bebas batang dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang ($\\sin 30^\\circ = 0{,}5$; $g = 10\\text{ m/s}^2$). Sebuah beban tambahan bermassa $m = 4\\text{ kg}$ digantungkan tepat di ujung bebas batang tersebut. Besar gaya tegangan kawat baja penahan batang adalah...",
    opsi: [
      "A. 70 N",
      "B. 100 N",
      "C. 110 N",
      "D. 120 N",
      "E. 140 N"
    ],
    kunci: "E",
    pembahasan: {
      konsep: "Kesetimbangan rotasi benda tegar terhadap poros engsel: $\\Sigma \\tau = 0$.",
      langkah: "1) Titik poros pada engsel dinding.<br>2) Torsi searah jarum jam oleh berat batang (di tengah batang $L/2$): $\\tau_1 = W_{\\text{batang}} \\times \\frac{L}{2} = 60 \\times 2 = 120\\text{ N}\\cdot\\text{m}$.<br>3) Torsi searah jarum jam oleh beban gantung (di ujung batang $L$): $\\tau_2 = W_{\\text{beban}} \\times L = 40 \\times 4 = 160\\text{ N}\\cdot\\text{m}$.<br>4) Torsi berlawanan jarum jam oleh kawat baja: $\\tau_3 = T \\sin 30^\\circ \\times L = T(0{,}5)(4) = 2T$.<br>5) Kesetimbangan rotasi: $2T = 120 + 160 = 280 \\Rightarrow T = \\frac{280}{2} = 140\\text{ N}$.",
      jebakan: "Mengira letak titik berat batang berada di ujungnya ($L$) bukannya di tengah batang ($L/2$), sehingga menghasilkan $T = 200\\text{ N}$."
    }
  }
];

// ============================================================================
// Web-TKA Platform Integration Adapter
// ============================================================================
if (typeof window !== "undefined") {
  window.bankSoalDinamika = bankSoalDinamika;

  const toWebAppFormat = (item) => {
    const keyMap = { A: 0, B: 1, C: 2, D: 3, E: 4 };
    const correctIdx = keyMap[item.kunci] !== undefined ? keyMap[item.kunci] : 0;
    const cleanOptions = item.opsi.map((opt) => opt.replace(/^[A-E]\.\s*/, ""));

    let subTopicId = "fis-din-1";
    if (item.subBab.includes("Rotasi")) {
      subTopicId = "fis-din-3";
    }

    return {
      id: item.id,
      subject: "FISIKA",
      pillarId: "fisika",
      chapterId: "fis-din",
      subTopicId: subTopicId,
      category: item.subBab,
      difficulty: item.difficulty.toLowerCase(),
      difficultyLabel: item.difficulty,
      statement: item.soal,
      hasDiagram: false,
      diagramSvg: "",
      diagramCaption: "",
      options: cleanOptions,
      correctIndex: correctIdx,
      solution: {
        concept: `<div class="callout-box callout-concept"><strong>Konsep:</strong><br>${item.pembahasan.konsep}</div>`,
        steps: `<ol><li>${item.pembahasan.langkah}</li></ol>`,
        pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan & Catatan:</strong><br>${item.pembahasan.jebakan}</div>`
      }
    };
  };

  window.QUESTIONS_MUDAH = window.QUESTIONS_MUDAH || [];
  window.QUESTIONS_SEDANG = window.QUESTIONS_SEDANG || [];

  bankSoalDinamika.forEach((item) => {
    const formatted = toWebAppFormat(item);
    if (item.difficulty.toLowerCase() === "mudah") {
      if (!window.QUESTIONS_MUDAH.some((q) => q.id === item.id)) {
        window.QUESTIONS_MUDAH.push(formatted);
      }
    } else {
      if (!window.QUESTIONS_SEDANG.some((q) => q.id === item.id)) {
        window.QUESTIONS_SEDANG.push(formatted);
      }
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { bankSoalDinamika };
}
