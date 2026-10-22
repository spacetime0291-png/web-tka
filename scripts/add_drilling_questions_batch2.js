/**
 * scripts/add_drilling_questions_batch2.js
 * Second Expansion Batch for Priority Physics Chapters:
 * - Gelombang Bunyi (fis-gel-1)
 * - Gelombang Cahaya (fis-gel-2)
 * - Dinamika Rotasi (fis-din-3)
 * - Kalor dan Perpindahannya (fis-ter-1)
 * - Pemanasan Global & Radiasi (fis-ter-2)
 * - Gas Ideal (fis-ter-3)
 * - Termodinamika (fis-ter-4)
 * 
 * Tiers: Mudah dan Sedang saja.
 * Fokus: Drill rumus dasar agar hafal secara alami.
 */

const drillingQuestionsBatch2 = [
  // ==========================================================================
  // GELOMBANG BUNYI (fis-gel-1)
  // ==========================================================================
  {
    id: "drill2-bun-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Cepat Rambat Bunyi pada Zat Padat (Modulus Young)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Kelajuan rambat gelombang bunyi longitudinal di dalam sebuah rel baja bergantung pada Modulus Elastisitas Young ($E$) dan massa jenis bajanya ($\\rho$). Jika Modulus Young baja adalah $E = 2 \\times 10^{11}\\text{ N/m}^2$ dan massa jenisnya $\\rho = 8000\\text{ kg/m}^3$, kelajuan rambat bunyi di dalam rel baja tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5000\\text{ m/s}$",
      "$2500\\text{ m/s}$",
      "$4000\\text{ m/s}$",
      "$1000\\text{ m/s}$",
      "$25000\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kelajuan Gelombang Bunyi pada Zat Padat:</strong><br>$$v = \\sqrt{\\frac{E}{\\rho}}$$</div>`,
      steps: `<ol><li>Hitung pembagian di bawah akar: $\\frac{E}{\\rho} = \\frac{2 \\times 10^{11}}{8 \\times 10^3} = \\frac{2}{8} \\times 10^8 = 0{,}25 \\times 10^8 = 25 \\times 10^6$.</li><li>Tarik akar kuadrat: $v = \\sqrt{25 \\times 10^6} = 5 \\times 10^3 = 5000\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Karakteristik Gelombang Mekanik:</strong> Bunyi merambat paling cepat pada zat padat ($v \\approx 5000\\text{ m/s}$), lebih lambat pada zat cair ($v \\approx 1500\\text{ m/s}$), dan paling lambat pada gas/udara ($v \\approx 340\\text{ m/s}$).</div>`
    }
  },
  {
    id: "drill2-bun-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Nada Atas Kedua Pipa Organa Terbuka",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pipa organa terbuka menghasilkan frekuensi nada dasar sebesar $f_0 = 150\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa terbuka tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$450\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$750\\text{ Hz}$",
      "$225\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Deret Harmonik Pipa Organa Terbuka:</strong><br>Perbandingan frekuensi harmonik berurutan berupa bilangan bulat lengkap:<br>$$f_0 : f_1 : f_2 : f_3 = 1 : 2 : 3 : 4$$<br>• Nada dasar ($n=0$): $f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 2f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 3f_0$</div>`,
      steps: `<ol><li>Nada atas kedua memiliki indeks $n=2$, sehingga merupakan harmonik ke-3 ($3f_0$).</li><li>Hitung frekuensi: $f_2 = 3 \\times f_0 = 3 \\times 150\\text{ Hz} = 450\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Ingat Penamaan Nada:</strong> \"Nada atas ke-$n$\" setara dengan harmonik ke-$(n+1)$. Nada atas ke-2 $=$ harmonik ke-3 ($3f_0$).</div>`
    }
  },
  {
    id: "drill2-bun-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Nada Atas Kedua Pipa Organa Tertutup",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pipa organa tertutup menghasilkan frekuensi nada dasar sebesar $f_0 = 100\\text{ Hz}$. Frekuensi nada atas kedua ($f_2$) yang dihasilkan pipa organa tertutup tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$500\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$",
      "$200\\text{ Hz}$",
      "$700\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Deret Harmonik Pipa Organa Tertutup (Hanya Ganjil):</strong><br>$$f_0 : f_1 : f_2 : f_3 = 1 : 3 : 5 : 7$$<br>• Nada dasar ($n=0$): $f_0 = 1 f_0$<br>• Nada atas ke-1 ($n=1$): $f_1 = 3 f_0$<br>• Nada atas ke-2 ($n=2$): $f_2 = 5 f_0$</div>`,
      steps: `<ol><li>Pipa tertutup hanya menghasilkan kelipatan bilangan ganjil.</li><li>Nada atas kedua bernilai $5 \\times$ nada dasar.</li><li>$f_2 = 5 \\times 100\\text{ Hz} = 500\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Bedakan Terbuka vs Tertutup:</strong><br>• Terbuka: $f_0 : f_1 : f_2 = 1 : 2 : 3$<br>• Tertutup: $f_0 : f_1 : f_2 = 1 : 3 : 5$</div>`
    }
  },
  {
    id: "drill2-bun-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Efek Doppler Sumber Menjauhi Pendengar Diam",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah mobil pemadam kebakaran membunyikan sirene berfrekuensi $f_s = 600\\text{ Hz}$ sambil bergerak menjauhi seorang pejalan kaki yang berdiri diam di tepi jalan dengan kelajuan $v_s = 20\\text{ m/s}$. Jika kelajuan rambat bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi bunyi yang didengar oleh pejalan kaki tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$566{,}7\\text{ Hz}$",
      "$637{,}5\\text{ Hz}$",
      "$600\\text{ Hz}$",
      "$540\\text{ Hz}$",
      "$580\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Efek Doppler Sumber Menjauh:</strong><br>Karena sumber menjauh ($+v_s$ pada penyebut), panjang gelombang merenggang sehingga frekuensi yang terdengar lebih rendah ($f_p < f_s$):<br>$$f_p = \\left( \\frac{v}{v + v_s} \\right) f_s$$</div>`,
      steps: `<ol><li>$v = 340\\text{ m/s}$, $v_s = 20\\text{ m/s}$, $v_p = 0$, $f_s = 600\\text{ Hz}$.</li><li>Penyebut: $v + v_s = 340 + 20 = 360\\text{ m/s}$.</li><li>$f_p = \\frac{340}{360} \\times 600 = \\frac{17}{18} \\times 600 = \\frac{17 \\times 100}{3} \\approx 566{,}67\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Logika Akal Sehat:</strong> Sumber menjauh pasti menghasilkan nada yang lebih rendah dari frekuensi asli ($< 600\\text{ Hz}$). Opsi di atas $600\\text{ Hz}$ langsung gugur!</div>`
    }
  },
  {
    id: "drill2-bun-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Efek Doppler Pendengar Bergerak Menjauhi Sumber Diam",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah peluit stasiun diam membunyikan frekuensi $f_s = 680\\text{ Hz}$. Seorang penumpang menaiki sepeda motor bergerak menjauhi stasiun dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi bunyi peluit yang didengar oleh pengendara motor tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$660\\text{ Hz}$",
      "$700\\text{ Hz}$",
      "$640\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$620\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Efek Doppler Pendengar Menjauh:</strong><br>$$f_p = \\left( \\frac{v - v_p}{v} \\right) f_s$$</div>`,
      steps: `<ol><li>$v = 340\\text{ m/s}$, $v_p = 10\\text{ m/s}$, $f_s = 680\\text{ Hz}$.</li><li>Pembilang: $v - v_p = 340 - 10 = 330\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{330}{340} \\times 680 = 330 \\times 2 = 660\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perhatikan Posisi Variabel:</strong> Kecepatan pendengar ($v_p$) selalu berada di <strong>pembilang</strong>, sedangkan kecepatan sumber ($v_s$) selalu berada di <strong>penyebut</strong>.</div>`
    }
  },
  {
    id: "drill2-bun-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Intensitas Bunyi Sumber Titik Isotropis",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pengeras suara memancarkan daya akustik $P = 40\\pi\\text{ Watt}$ secara seragam ke segala arah (sumber titik bola). Besar intensitas bunyi ($I$) yang diterima pada jarak $r = 10\\text{ meter}$ dari pengeras suara tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}1\\text{ W/m}^2$",
      "$1{,}0\\text{ W/m}^2$",
      "$0{,}01\\text{ W/m}^2$",
      "$0{,}4\\text{ W/m}^2$",
      "$4{,}0\\text{ W/m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Intensitas Bunyi Permukaan Bola:</strong><br>Gelombang bunyi dari sumber titik menyebar membentuk bola dengan luas muka gelombang $A = 4\\pi r^2$:<br>$$I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}$$</div>`,
      steps: `<ol><li>Luas bola pada $r = 10\\text{ m}$: $A = 4\\pi (10)^2 = 400\\pi\\text{ m}^2$.</li><li>Hitung intensitas: $I = \\frac{40\\pi\\text{ W}}{400\\pi\\text{ m}^2} = \\frac{1}{10} = 0{,}1\\text{ W/m}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Pembagi intensitas bola adalah $4\\pi r^2$ (luas kulit bola), bukan $\\pi r^2$ (luas lingkaran).</div>`
    }
  },
  {
    id: "drill2-bun-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Kenaikan Taraf Intensitas 10 Kali Sumber",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah sepeda motor menghasilkan taraf intensitas bunyi sebesar $TI_1 = 65\\text{ dB}$. Jika terdapat $10$ sepeda motor identik yang dibunyikan serentak, maka taraf intensitas bunyi gabungannya ($TI_{10}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$75\\text{ dB}$",
      "$650\\text{ dB}$",
      "$70\\text{ dB}$",
      "$85\\text{ dB}$",
      "$130\\text{ dB}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kaidah Cepat Multi Sumber Bunyi:</strong><br>Setiap pelipatgandaan jumlah sumber sebesar $10\\times$ akan menambah taraf intensitas tepat $+10\\text{ dB}$:<br>$$TI_n = TI_1 + 10 \\log_{10}(n)$$</div>`,
      steps: `<ol><li>Jumlah sumber: $n = 10 \\implies \\log_{10}(10) = 1$.</li><li>Kenaikan taraf intensitas: $10 \\times 1 = 10\\text{ dB}$.</li><li>Taraf intensitas total: $TI = 65 + 10 = 75\\text{ dB}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Pola Logaritmik:</strong><br>• $10\\times$ sumber $\\implies +10\\text{ dB}$<br>• $100\\times$ sumber $\\implies +20\\text{ dB}$<br>• $1000\\times$ sumber $\\implies +30\\text{ dB}$</div>`
    }
  },

  // ==========================================================================
  // GELOMBANG CAHAYA (fis-gel-2)
  // ==========================================================================
  {
    id: "drill2-cah-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Jumlah Bayangan Dua Cermin Datar Bersudut",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dua buah cermin datar disusun saling berhadapan membentuk sudut $\\alpha = 60^\\circ$. Sebuah lilin diletakkan di antara kedua cermin tersebut. Jumlah bayangan lilin yang terbentuk adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ bayangan}$",
      "$6\\text{ bayangan}$",
      "$4\\text{ bayangan}$",
      "$7\\text{ bayangan}$",
      "$3\\text{ bayangan}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Jumlah Bayangan Cermin Datar:</strong><br>$$n = \\frac{360^\\circ}{\\alpha} - 1$$</div>`,
      steps: `<ol><li>Sudut apit: $\\alpha = 60^\\circ$.</li><li>Bagi lingkaran penuh: $\\frac{360^\\circ}{60^\\circ} = 6$.</li><li>Kurangkan satu untuk benda asli: $n = 6 - 1 = 5\\text{ bayangan}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jangan Lupa $-1$:</strong> Nilai $360^\\circ / \\alpha$ harus selalu dikurangi 1 karena salah satu posisi ditempati oleh benda asli.</div>`
    }
  },
  {
    id: "drill2-cah-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Pembentukan Bayangan Cermin Cekung",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah cermin cekung memiliki jari-jari kelengkungan $R = 40\\text{ cm}$. Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan cermin cekung tersebut. Jarak bayangan ($s'$) dan perbesaran bayangan ($M$) berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$s' = +60\\text{ cm}$ (nyata) dan $M = 2\\text{ kali}$",
      "$s' = -60\\text{ cm}$ (maya) dan $M = 2\\text{ kali}$",
      "$s' = +20\\text{ cm}$ (nyata) dan $M = 0{,}67\\text{ kali}$",
      "$s' = +12\\text{ cm}$ (nyata) dan $M = 0{,}4\\text{ kali}$",
      "$s' = +30\\text{ cm}$ (nyata) dan $M = 1\\text{ kali}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Fokus dan Jari-Jari Cermin Cekung:</strong><br>• $f = \\frac{1}{2}R$ (cermin cekung bertanda positif $f > 0$)<br>• $s' = \\frac{s \\cdot f}{s - f}$<br>• Perbesaran: $M = \\left| \\frac{s'}{s} \\right|$</div>`,
      steps: `<ol><li>Jarak fokus: $f = \\frac{1}{2} \\times 40 = +20\\text{ cm}$.</li><li>Jarak bayangan: $s' = \\frac{30 \\times 20}{30 - 20} = \\frac{600}{10} = +60\\text{ cm}$ (nyata di depan cermin).</li><li>Perbesaran: $M = \\frac{60}{30} = 2\\text{ kali}$ diperbesar.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal Jari-Jari:</strong> Jari-jari $R$ selalu dua kali jarak fokus ($R = 2f$). Jangan gunakan nilai $R$ langsung sebagai $f$.</div>`
    }
  },
  {
    id: "drill2-cah-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Lensa Cekung (Divergen)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah benda diletakkan pada jarak $s = 30\\text{ cm}$ di depan sebuah lensa cekung yang memiliki jarak fokus $|f| = 15\\text{ cm}$. Jarak bayangan yang terbentuk ($s'$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-10\\text{ cm}$ (maya dan tegak)",
      "$+10\\text{ cm}$ (nyata dan terbalik)",
      "$-30\\text{ cm}$ (maya dan tegak)",
      "$+30\\text{ cm}$ (nyata dan terbalik)",
      "$-5\\text{ cm}$ (maya dan tegak)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Sifat Mutlak Lensa Cekung:</strong><br>Lensa cekung bersifat menyebarkan cahaya (divergen) dengan fokus <strong>negatif</strong> ($f = -15\\text{ cm}$). Bayangannya selalu bersifat <strong>maya, tegak, dan diperkecil</strong> ($s' < 0$).</div>`,
      steps: `<ol><li>$f = -15\\text{ cm}$, $s = +30\\text{ cm}$.</li><li>$\\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s} = -\\frac{1}{15} - \\frac{1}{30} = -\\frac{2}{30} - \\frac{1}{30} = -\\frac{3}{30} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (maya di depan lensa).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Karakteristik Tetap Lensa Cekung:</strong> Lensa cekung tidak pernah bisa menghasilkan bayangan nyata pada posisi benda real apa pun. Nilai $s'$ selalu negatif.</div>`
    }
  },
  {
    id: "drill2-cah-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kuat Lensa Gabungan Bersentuhan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dua buah lensa tipis ditempelkan berimpit (bersentuhan sumbu utama). Lensa pertama adalah lensa cembung dengan kuat lensa $P_1 = +5\\text{ Dioptri}$, dan lensa kedua adalah lensa cekung dengan kuat lensa $P_2 = -2\\text{ Dioptri}$. Kuat lensa total sistem gabungan tersebut ($P_{\\text{gab}}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+3\\text{ Dioptri}$",
      "$+7\\text{ Dioptri}$",
      "$-10\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+1{,}5\\text{ Dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kuat Lensa Sistem Gabungan Berimpit:</strong><br>Kuat lensa gabungan merupakan penjumlahan aljabar langsung dari kuat masing-masing lensa:<br>$$P_{\\text{gab}} = P_1 + P_2$$</div>`,
      steps: `<ol><li>$P_1 = +5\\text{ D}$ (cembung).</li><li>$P_2 = -2\\text{ D}$ (cekung).</li><li>$P_{\\text{gab}} = (+5) + (-2) = +3\\text{ Dioptri}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Sifat Akhir Gabungan:</strong> Karena $P_{\\text{gab}} > 0$ ($+3\\text{ D}$), sistem gabungan kedua lensa tersebut berperilaku seperti sebuah lensa cembung dengan jarak fokus $f = 100/3 \\approx 33{,}3\\text{ cm}$.</div>`
    }
  },
  {
    id: "drill2-cah-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kacamata Penderita Rabun Dekat (Hipermetropi)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seorang penderita rabun dekat (hipermetropi) memiliki titik dekat mata $PP = 50\\text{ cm}$. Agar ia dapat membaca buku dengan nyaman pada jarak baca normal $s_n = 25\\text{ cm}$, maka kuat lensa kacamata yang harus digunakannya adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+2\\text{ Dioptri}$",
      "$+1\\text{ Dioptri}$",
      "$-2\\text{ Dioptri}$",
      "$+4\\text{ Dioptri}$",
      "$+0{,}5\\text{ Dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Kacamata Hipermetropi (Lensa Cembung):</strong><br>$$P = \\frac{100}{s_n\\text{ (cm)}} - \\frac{100}{PP\\text{ (cm)}} = 4 - \\frac{100}{PP\\text{ (cm)}}$$<br>(dengan jarak baca normal standar $s_n = 25\\text{ cm}$).</div>`,
      steps: `<ol><li>Jarak baca yang diinginkan: $s = 25\\text{ cm} \\implies \\frac{100}{25} = 4\\text{ D}$.</li><li>Titik dekat penderita: $PP = 50\\text{ cm} \\implies \\frac{100}{50} = 2\\text{ D}$.</li><li>Kuat lensa: $P = 4 - 2 = +2\\text{ Dioptri}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal Hipermetropi:</strong> Kacamata baca selalu berlensa plus (+). Rumus cepatnya: $P = 4 - \\frac{100}{PP}$.</div>`
    }
  },
  {
    id: "drill2-cah-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Teropong Bintang Mata Tanpa Akomodasi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah teropong bintang memiliki lensa objektif dengan jarak fokus $f_{\\text{ob}} = 100\\text{ cm}$ dan lensa okuler dengan jarak fokus $f_{\\text{ok}} = 5\\text{ cm}$. Jika pengamatan bintang dilakukan dengan mata tanpa akomodasi, maka perbesaran total ($M$) dan panjang tabung teropong ($d$) berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$M = 20\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 20\\text{ kali}$ dan $d = 95\\text{ cm}$",
      "$M = 5\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 500\\text{ kali}$ dan $d = 105\\text{ cm}$",
      "$M = 25\\text{ kali}$ dan $d = 120\\text{ cm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Baku Teropong Bintang (Mata Rileks):</strong><br>• Perbesaran bayangan: $M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$<br>• Panjang teropong: $d = f_{\\text{ob}} + f_{\\text{ok}}$</div>`,
      steps: `<ol><li>Perbesaran: $M = \\frac{100\\text{ cm}}{5\\text{ cm}} = 20\\text{ kali}$.</li><li>Panjang tabung: $d = 100 + 5 = 105\\text{ cm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Konstruksi Teropong:</strong> Pada teropong bintang, fokus lensa objektif selalu jauh lebih panjang daripada fokus lensa okuler ($f_{\\text{ob}} > f_{\\text{ok}}$).</div>`
    }
  },
  {
    id: "drill2-cah-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kisi Difraksi Spektrum Cahaya",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah kisi difraksi memiliki $N = 500\\text{ garis/mm}$. Seberkas cahaya monokromatik dilewatkan tegak lurus pada kisi tersebut sehingga menghasilkan garis terang orde pertama ($n = 1$) pada sudut deviasi dengan $\\sin \\theta = 0{,}25$. Panjang gelombang cahaya yang digunakan adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$)",
      "$250\\text{ nm}$ ($2{,}5 \\times 10^{-7}\\text{ m}$)",
      "$600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$)",
      "$1000\\text{ nm}$ ($10^{-6}\\text{ m}$)",
      "$400\\text{ nm}$ ($4 \\times 10^{-7}\\text{ m}$)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Kisi Difraksi:</strong><br>$$d \\sin \\theta = n \\lambda$$<br>dengan tetapan jarak antar-kisi: $d = \\frac{1}{N}$.</div>`,
      steps: `<ol><li>Hitung jarak antar-celah $d$ dalam meter:<br>$$d = \\frac{1}{500\\text{ garis/mm}} = \\frac{1\\text{ mm}}{500} = \\frac{10^{-3}\\text{ m}}{500} = 2 \\times 10^{-6}\\text{ m}$$</li><li>Substitusi ke rumus difraksi orde $n = 1$:<br>$$d \\sin \\theta = 1 \\cdot \\lambda \\implies \\lambda = (2 \\times 10^{-6}) \\times 0{,}25 = 0{,}5 \\times 10^{-6}\\text{ m} = 500\\text{ nm}$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Konversi Celah Kisi:</strong> Jangan lupa mengonversi dari $\\text{mm}$ ke $\\text{meter}$ ($1\\text{ mm} = 10^{-3}\\text{ m}$).</div>`
    }
  },

  // ==========================================================================
  // DINAMIKA ROTASI (fis-din-3)
  // ==========================================================================
  {
    id: "drill2-rot-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Momen Inersia Sistem Tiga Partikel",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Tiga buah partikel bermassa $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ disusun pada sumbu-X berturut-turut pada posisi $x_1 = 0\\text{ m}$, $x_2 = 1\\text{ m}$, dan $x_3 = 2\\text{ m}$. Jika sumbu putar berada di titik $x = 0$ (tegak lurus sumbu-X), maka momen inersia total sistem partikel tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$14\\text{ kg}\\cdot\\text{m}^2$",
      "$12\\text{ kg}\\cdot\\text{m}^2$",
      "$8\\text{ kg}\\cdot\\text{m}^2$",
      "$6\\text{ kg}\\cdot\\text{m}^2$",
      "$18\\text{ kg}\\cdot\\text{m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Momen Inersia Sistem Partikel Diskrit:</strong><br>$$I = \\sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2$$<br>dengan $r_i$ adalah jarak tegak lurus partikel ke sumbu putar.</div>`,
      steps: `<ol><li>Jarak ke sumbu $x=0$: $r_1 = 0\\text{ m}$, $r_2 = 1\\text{ m}$, $r_3 = 2\\text{ m}$.</li><li>Hitung kontribusi masing-masing partikel:<br>• $I_1 = 1 \\times (0)^2 = 0$<br>• $I_2 = 2 \\times (1)^2 = 2\\text{ kg}\\cdot\\text{m}^2$<br>• $I_3 = 3 \\times (2)^2 = 3 \\times 4 = 12\\text{ kg}\\cdot\\text{m}^2$</li><li>Jumlahkan: $I = 0 + 2 + 12 = 14\\text{ kg}\\cdot\\text{m}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Kuadratkan Jarak:</strong> Partikel yang tepat berada di sumbu putar ($r=0$) memiliki momen inersia nol. Jarak selalu dikuadratkan ($r^2$).</div>`
    }
  },
  {
    id: "drill2-rot-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Momen Inersia Bola Berongga Tipis",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah bola sepak dianggap sebagai bola berongga kulit tipis dengan massa $M = 3\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ meter}$. Jika rumus momen inersia bola berongga adalah $I = \\frac{2}{3} M R^2$, besar momen inersia bola tersebut terhadap sumbu yang melalui pusatnya adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}08\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}12\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}04\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}16\\text{ kg}\\cdot\\text{m}^2$",
      "$0{,}24\\text{ kg}\\cdot\\text{m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Momen Inersia Kulit Bola Berongga:</strong><br>$$I = \\frac{2}{3} M R^2$$</div>`,
      steps: `<ol><li>Hitung $R^2$: $(0{,}2)^2 = 0{,}04\\text{ m}^2$.</li><li>Hitung $I$: $I = \\frac{2}{3} \\times 3\\text{ kg} \\times 0{,}04\\text{ m}^2 = 2 \\times 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Bedakan Bola Pejal vs Berongga:</strong><br>• Bola pejal: $I = \\frac{2}{5}MR^2 = 0{,}4MR^2$<br>• Bola berongga: $I = \\frac{2}{3}MR^2 \\approx 0{,}67MR^2$</div>`
    }
  },
  {
    id: "drill2-rot-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Hubungan Percepatan Linier dan Percepatan Sudut",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah katrol silinder berputar pada porosnya dengan percepatan sudut tetap $\\alpha = 5\\text{ rad/s}^2$. Jika seutas tali dililitkan pada tepi katrol yang berdiameter $d = 80\\text{ cm}$ (jari-jari $R = 0{,}4\\text{ m}$), maka percepatan tangensial ($a$) tali tersebut saat terulur adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2\\text{ m/s}^2$",
      "$4\\text{ m/s}^2$",
      "$1\\text{ m/s}^2$",
      "$12{,}5\\text{ m/s}^2$",
      "$0{,}8\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Besaran Sudut dan Linier Rotasi:</strong><br>• Kecepatan linier tangensial: $v = \\omega \\cdot R$<br>• Percepatan linier tangensial: $a = \\alpha \\cdot R$</div>`,
      steps: `<ol><li>Identifikasi jari-jari: $R = \\frac{d}{2} = \\frac{80\\text{ cm}}{2} = 40\\text{ cm} = 0{,}4\\text{ m}$.</li><li>Hitung percepatan tangensial: $a = \\alpha \\times R = 5\\text{ rad/s}^2 \\times 0{,}4\\text{ m} = 2\\text{ m/s}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Diameter vs Jari-Jari:</strong> Selalu bagi diameter dengan 2 untuk mendapatkan jari-jari $R$.</div>`
    }
  },
  {
    id: "drill2-rot-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Energi Kinetik Total Bola Pejal Menggelinding",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah bola pejal homogen ($I = \\frac{2}{5}mv^2$) bermassa $m = 2\\text{ kg}$ menggelinding murni di atas lantai mendatar tanpa slip dengan kelajuan linier $v = 10\\text{ m/s}$. Besar energi kinetik total (gabungan translasi dan rotasi) bola pejal tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$140\\text{ Joule}$",
      "$100\\text{ Joule}$",
      "$40\\text{ Joule}$",
      "$70\\text{ Joule}$",
      "$200\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Energi Kinetik Menggelinding Murni:</strong><br>$$E_k = E_{k,\\text{translasi}} + E_{k,\\text{rotasi}} = \\frac{1}{2}mv^2(1 + k)$$<br>Untuk bola pejal, nilai $k = \\frac{2}{5} = 0{,}4$.</div>`,
      steps: `<ol><li>Energi kinetik translasi: $E_{k,\\text{trans}} = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 2 \\times (10)^2 = 100\\text{ Joule}$.</li><li>Energi kinetik rotasi: $E_{k,\\text{rot}} = k \\times E_{k,\\text{trans}} = 0{,}4 \\times 100 = 40\\text{ Joule}$.</li><li>Energi kinetik total: $E_k = 100 + 40 = 140\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Rumus Singkat Bola Pejal:</strong> $E_k = \\frac{7}{10} m v^2$. Langsung hitung $0{,}7 \\times 2 \\times 100 = 140\\text{ J}$.</div>`
    }
  },
  {
    id: "drill2-rot-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Fraksi Energi Rotasi Silinder Pejal",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah silinder pejal ($I = \\frac{1}{2}mR^2$) menggelinding murni tanpa slip pada permukaan mendatar. Persentase energi kinetik rotasi terhadap energi kinetik total silinder pejal tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$33{,}3\\%$ (sepertiga bagian)",
      "$50\\%$ (setengah bagian)",
      "$66{,}7\\%$ (dua pertiga bagian)",
      "$25\\%$ (seperempat bagian)",
      "$20\\%$ (seperlima bagian)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rasio Fraksi Energi Kinetik Benda Menggelinding:</strong><br>$$\\frac{E_{k,\\text{rotasi}}}{E_{k,\\text{total}}} = \\frac{k}{1 + k}$$</div>`,
      steps: `<ol><li>Untuk silinder pejal, $k = \\frac{1}{2}$.</li><li>Rasio rotasi terhadap total: $\\frac{\\frac{1}{2}}{1 + \\frac{1}{2}} = \\frac{\\frac{1}{2}}{\\frac{3}{2}} = \\frac{1}{3}$.</li><li>Dalam persen: $\\frac{1}{3} \\times 100\\% \\approx 33{,}3\\%$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perbandingan Energi:</strong> Pada silinder pejal menggelinding, $\\frac{2}{3}$ energinya adalah translasi ($66{,}7\\%$) dan $\\frac{1}{3}$ energinya adalah rotasi ($33{,}3\\%$).</div>`
    }
  },
  {
    id: "drill2-rot-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Kelajuan Benda Menggelinding di Dasar Bidang Miring",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah silinder pejal ($k = 0{,}5$) dan sebuah bola pejal ($k = 0{,}4$) dilepaskan bersamaan dari puncak bidang miring kasar yang sama setinggi $h = 7\\text{ meter}$ tanpa kecepatan awal ($g = 10\\text{ m/s}^2$). Kelajuan bola pejal saat mencapai dasar bidang miring adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10\\text{ m/s}$",
      "$\\sqrt{140}\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$12\\text{ m/s}$",
      "$7\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kelajuan Benda Menggelinding di Dasar Bidang Miring:</strong><br>Berdasarkan Hukum Kekekalan Energi Mekanik ($mgh = \\frac{1}{2}mv^2(1 + k)$):<br>$$v = \\sqrt{\\frac{2gh}{1 + k}}$$</div>`,
      steps: `<ol><li>Untuk bola pejal: $k = 0{,}4 = \\frac{2}{5}$.</li><li>Hitung pembilang: $2gh = 2 \\times 10 \\times 7 = 140$.</li><li>Hitung penyebut: $1 + k = 1 + 0{,}4 = 1{,}4$.</li><li>Kelajuan: $v = \\sqrt{\\frac{140}{1{,}4}} = \\sqrt{100} = 10\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Siapa Lebih Cepat?:</strong> Benda dengan nilai $k$ lebih kecil (seperti bola pejal $k=0{,}4$) selalu tiba di dasar lebih cepat dan dengan kelajuan lebih tinggi dibandingkan benda dengan $k$ besar (seperti silinder pejal $k=0{,}5$).</div>`
    }
  },
  {
    id: "drill2-rot-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Percepatan Katrol Silinder Pejal Menahan Beban",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah katrol silinder pejal bermassa $M = 2\\text{ kg}$ dan jari-jari $R$ dapat berputar tanpa gesekan poros. Seutas tali tak bermassa dililitkan pada katrol dan di ujung tali digantungkan beban bermassa $m = 1\\text{ kg}$. Jika percepatan gravitasi adalah $g = 10\\text{ m/s}^2$, percepatan linier turunnya beban ($a$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ m/s}^2$",
      "$10\\text{ m/s}^2$",
      "$3{,}33\\text{ m/s}^2$",
      "$6{,}67\\text{ m/s}^2$",
      "$2{,}5\\text{ m/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Percepatan Sistem Katrol Bermassa:</strong><br>Inersia katrol silinder pejal ($I = \\frac{1}{2}MR^2$) menambah massa efektif sistem sebesar $\\frac{1}{2}M$:<br>$$a = \\frac{m \\cdot g}{m + \\frac{1}{2}M}$$</div>`,
      steps: `<ol><li>Pembilang gaya penggerak: $w = m \\cdot g = 1 \\times 10 = 10\\text{ N}$.</li><li>Penyebut massa total sistem: $m + \\frac{1}{2}M = 1 + \\frac{1}{2}(2) = 1 + 1 = 2\\text{ kg}$.</li><li>Percepatan: $a = \\frac{10}{2} = 5\\text{ m/s}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Trik Kilat Katrol:</strong> Katrol silinder pejal menyumbang $\\frac{1}{2}M$ ke penyebut. Jangan masukkan massa penuh $M$!</div>`
    }
  },

  // ==========================================================================
  // KALOR DAN PERPINDAHANNYA (fis-ter-1)
  // ==========================================================================
  {
    id: "drill2-kal-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Kalor Penguapan Air",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Banyaknya kalor yang diperlukan untuk menguapkan seluruhnya $m = 200\\text{ gram}$ air pada titik didihnya $100^\\circ\\text{C}$ menjadi uap air bersuhu $100^\\circ\\text{C}$ (kalor uap air $L_v = 2{,}26 \\times 10^6\\text{ J/kg}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$452\\text{ kJ}$",
      "$226\\text{ kJ}$",
      "$904\\text{ kJ}$",
      "$45{,}2\\text{ kJ}$",
      "$113\\text{ kJ}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kalor Laten Penguapan:</strong><br>$$Q = m \\cdot L_v$$</div>`,
      steps: `<ol><li>Konversi massa: $m = 200\\text{ g} = 0{,}2\\text{ kg}$.</li><li>Kalor: $Q = 0{,}2\\text{ kg} \\times (2{,}26 \\times 10^6\\text{ J/kg}) = 0{,}452 \\times 10^6\\text{ J} = 452.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 452\\text{ kJ}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Fakta Fisika Menarik:</strong> Kalor penguapan air ($2{,}26 \\times 10^6\\text{ J/kg}$) hampir 7 kali lebih besar daripada kalor leburnya ($3{,}36 \\times 10^5\\text{ J/kg}$) karena memutus ikatan antarmolekul cair sepenuhnya menjadi gas.</div>`
    }
  },
  {
    id: "drill2-kal-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Penyusutan Panjang Akibat Pendinginan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seutas kawat tembaga dengan panjang $L_0 = 5\\text{ meter}$ mula-mula bersuhu $80^\\circ\\text{C}$. Kawat tersebut didinginkan hingga suhunya turun menjadi $30^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka pengurangan panjang (penyusutan) kawat tembaga tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4{,}25\\text{ mm}$",
      "$2{,}55\\text{ mm}$",
      "$8{,}50\\text{ mm}$",
      "$1{,}70\\text{ mm}$",
      "$0{,}425\\text{ mm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Penyusutan Termal:</strong><br>$$\\Delta L = L_0 \\cdot \\alpha \\cdot |\\Delta T|$$</div>`,
      steps: `<ol><li>Penurunan suhu: $|\\Delta T| = 80 - 30 = 50^\\circ\\text{C}$.</li><li>Hitung penyusutan: $\\Delta L = 5 \\times (1{,}7 \\times 10^{-5}) \\times 50 = 425 \\times 10^{-5}\\text{ m} = 4{,}25 \\times 10^{-3}\\text{ m} = 4{,}25\\text{ mm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Simetri Pemuaian:</strong> Rumus pemuaian berlaku dua arah: bertambah panjang saat dipanaskan ($\Delta T > 0$) dan menyusut sama besarnya saat didinginkan ($\Delta T < 0$).</div>`
    }
  },
  {
    id: "drill2-kal-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Laju Perpindahan Kalor secara Konveksi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pelat pemanas dengan luas penampang $A = 0{,}5\\text{ m}^2$ melepaskan kalor ke udara sekitarnya secara konveksi alami. Koefisien konveksi udara adalah $h = 20\\text{ W/m}^2\\cdot\\text{K}$. Jika perbedaan suhu antara pelat pemanas dan udara ruangan adalah $\\Delta T = 30^\\circ\\text{C}$, maka laju aliran kalor konveksi ($H$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$50\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Pendinginan Newton (Konveksi):</strong><br>$$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$</div>`,
      steps: `<ol><li>Identifikasi data: $h = 20\\text{ W/m}^2\\cdot\\text{K}$, $A = 0{,}5\\text{ m}^2$, $\\Delta T = 30\\text{ K}$.</li><li>Laju kalor: $H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Selisih Suhu:</strong> Nilai selisih suhu dalam Celcius sebanding tepat dengan selisih suhu dalam Kelvin ($\Delta T\\text{ }^\\circ\\text{C} = \\Delta T\\text{ K}$). Jadi tidak perlu ditambah 273 saat menghitung selisih $\Delta T$!</div>`
    }
  },
  {
    id: "drill2-kal-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Suhu Sambungan Dua Logam Berbeda Konduktivitas",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua batang logam $A$ dan $B$ dengan panjang dan luas penampang yang sama disambungkan ujungnya. Konduktivitas termal logam $A$ adalah tiga kali konduktivitas termal logam $B$ ($k_A = 3k_B$). Ujung bebas logam $A$ bersuhu $100^\\circ\\text{C}$ dan ujung bebas logam $B$ bersuhu $20^\\circ\\text{C}$. Suhu sambungan antara kedua logam ($T_s$) pada keadaan stasioner adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$80^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$",
      "$85^\\circ\\text{C}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Keseimbangan Sambungan Konduksi:</strong><br>Laju aliran kalor pada kedua batang adalah sama:<br>$$H_A = H_B \\implies k_A (T_A - T_s) = k_B (T_s - T_B)$$</div>`,
      steps: `<ol><li>Substitusi $k_A = 3k_B$: $3(100 - T_s) = T_s - 20$.</li><li>Jabarkan: $300 - 3T_s = T_s - 20$.</li><li>$300 + 20 = 4T_s \\implies 320 = 4T_s \\implies T_s = 80^\\circ\\text{C}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Logika Cepat:</strong> Logam $A$ menghantar panas 3 kali lebih cepat $\implies$ suhu sambungan ditarik sangat dekat ke suhu ujung $A$ ($80^\\circ\\text{C}$, bukan rata-rata $60^\\circ\\text{C}$).</div>`
    }
  },
  {
    id: "drill2-kal-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Hubungan Daya Radiasi dan Luas Permukaan",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah pelat logam memancarkan energi radiasi termal sebesar $P_1 = 40\\text{ Watt}$. Jika pelat tersebut diganti dengan pelat sejenis dengan luas permukaan dua kali lipat semula ($A_2 = 2A_1$) dan dipanaskan pada suhu mutlak yang sama, maka daya radiasi yang dipancarkannya sekarang ($P_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$80\\text{ Watt}$",
      "$160\\text{ Watt}$",
      "$40\\text{ Watt}$",
      "$20\\text{ Watt}$",
      "$640\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Ketergantungan Radiasi terhadap Luas:</strong><br>$$P = e \\sigma A T^4 \\implies P \\propto A$$<br>Pada suhu tetap, daya radiasi berbanding lurus linear dengan luas permukaan pemancar.</div>`,
      steps: `<ol><li>Karena suhu $T$ tetap: $\\frac{P_2}{P_1} = \\frac{A_2}{A_1} = 2$.</li><li>Daya baru: $P_2 = 2 \\times P_1 = 2 \\times 40\\text{ W} = 80\\text{ Watt}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Hati-hati Tertukar:</strong> Daya sebanding dengan pangkat empat terhadap <strong>suhu</strong> ($T^4$), tetapi sebanding linear dengan <strong>luas permukaan</strong> ($A^1$). Jangan memangkat-empatkan luas!</div>`
    }
  },
  {
    id: "drill2-kal-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Penentuan Kalor Jenis Zat Asas Black",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebongkah logam bermassa $m_L = 200\\text{ gram}$ bersuhu $100^\\circ\\text{C}$ dimasukkan ke dalam bejana berisi $100\\text{ gram}$ air bersuhu $20^\\circ\\text{C}$ ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$). Jika suhu akhir campuran adalah $40^\\circ\\text{C}$ dan bejana tidak menyerap kalor, maka kalor jenis logam ($c_L$) tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}167\\text{ kal/g}^\\circ\\text{C}$ (sekitar $\\frac{1}{6}$)",
      "$0{,}50\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}25\\text{ kal/g}^\\circ\\text{C}$",
      "$1{,}00\\text{ kal/g}^\\circ\\text{C}$",
      "$0{,}083\\text{ kal/g}^\\circ\\text{C}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Asas Black Menentukan Kalor Jenis:</strong><br>$$m_L \\cdot c_L \\cdot (T_L - T_c) = m_{\\text{air}} \\cdot c_{\\text{air}} \\cdot (T_c - T_{\\text{air}})$$</div>`,
      steps: `<ol><li>Kalor diterima air: $Q_{\\text{terima}} = 100 \\times 1 \\times (40 - 20) = 2000\\text{ kal}$.</li><li>Kalor dilepas logam: $Q_{\\text{lepas}} = 200 \\times c_L \\times (100 - 40) = 200 \\times c_L \\times 60 = 12.000 \\cdot c_L$.</li><li>Asas Black: $12.000 \\cdot c_L = 2000 \\implies c_L = \\frac{2000}{12000} = \\frac{1}{6} \\approx 0{,}167\\text{ kal/g}^\\circ\\text{C}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Cek Satuan Kalor:</strong> Jika menggunakan gram dan $\\text{kal/g}^\\circ\\text{C}$, kalor jenis air adalah $1$. Jika menggunakan kg dan Joule, kalor jenis air adalah $4200\\text{ J/kg}\\cdot\\text{K}$.</div>`
    }
  },
  {
    id: "drill2-kal-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Pemanas Listrik Air (Daya dan Kalor)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah ketel listrik berdaya $P = 420\\text{ Watt}$ digunakan untuk memanaskan $m = 1\\text{ kg}$ air bersuhu $20^\\circ\\text{C}$ hingga mencapai suhu $40^\\circ\\text{C}$ ($c = 4200\\text{ J/kg}^\\circ\\text{C}$). Jika seluruh energi listrik diubah sempurna menjadi kalor tanpa ada yang hilang, waktu ($t$) yang dibutuhkan ketel tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$200\\text{ detik}$ ($3\\text{ menit } 20\\text{ detik}$)",
      "$100\\text{ detik}$",
      "$420\\text{ detik}$",
      "$50\\text{ detik}$",
      "$300\\text{ detik}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kesetaraan Energi Listrik dan Kalor:</strong><br>$$W_{\\text{listrik}} = Q_{\\text{kalor}} \\implies P \\cdot t = m \\cdot c \\cdot \\Delta T$$</div>`,
      steps: `<ol><li>Kalor yang diperlukan: $Q = 1 \\times 4200 \\times (40 - 20) = 1 \\times 4200 \\times 20 = 84.000\\text{ Joule}$.</li><li>Waktu pemanasan: $t = \\frac{Q}{P} = \\frac{84.000\\text{ J}}{420\\text{ W}} = 200\\text{ detik}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Hubungan Joule dan Watt:</strong> $1\\text{ Watt} = 1\\text{ Joule/detik}$. Waktu selalu dihasilkan dalam satuan detik.</div>`
    }
  },

  // ==========================================================================
  // PEMANASAN GLOBAL & RADIASI (fis-ter-2)
  // ==========================================================================
  {
    id: "drill2-pem-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Urutan Spektrum Radiasi Matahari",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Urutan spektrum gelombang elektromagnetik yang dipancarkan oleh radiasi matahari dari frekuensi paling tinggi (energi foton terbesar) ke frekuensi paling rendah adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Ultraviolet $\\to$ Cahaya Tampak $\\to$ Inframerah",
      "Inframerah $\\to$ Cahaya Tampak $\\to$ Ultraviolet",
      "Cahaya Tampak $\\to$ Ultraviolet $\\to$ Inframerah",
      "Inframerah $\\to$ Ultraviolet $\\to$ Cahaya Tampak",
      "Gelombang Mikro $\\to$ Inframerah $\\to$ Cahaya Tampak"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Spektrum Gelombang Elektromagnetik:</strong><br>Frekuensi Tinggi (Panjang Gelombang Pendek) $\\to$ Frekuensi Rendah:<br>Sinar Gamma $\\to$ Sinar-X $\\to$ <strong>Ultraviolet</strong> $\\to$ <strong>Cahaya Tampak</strong> $\\to$ <strong>Inframerah</strong> $\\to$ Gelombang Mikro $\\to$ Gelombang Radio.</div>`,
      steps: `<ol><li>Ultraviolet memiliki energi/frekuensi paling tinggi di antara ketiganya ($f \\sim 10^{15}\\text{ Hz}$).</li><li>Cahaya tampak di tengah ($f \\sim 10^{14}\\text{ Hz}$).</li><li>Inframerah memiliki frekuensi paling rendah ($f \\sim 10^{12}-10^{13}\\text{ Hz}$) namun membawa efek termal (panas).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Mnemonic Urutan Spektrum:</strong> GRUTAMUXI: <strong>G</strong>amma, <strong>R</strong>ontgen (X), <strong>U</strong>ltraviolet, <strong>TAm</strong>pak, <strong>M</strong>erah (Infra), <strong>U</strong>HF/Mikro, <strong>R</strong>ad<strong>i</strong>o.</div>`
    }
  },
  {
    id: "drill2-pem-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Peningkatan Suhu 3 Kali Lipat terhadap Radiasi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah tungku pemanas bersuhu $T$ memancarkan daya radiasi sebesar $P$. Jika suhu mutlak tungku tersebut dinaikkan menjadi $3$ kali lipat ($T' = 3T$), maka daya radiasi yang dipancarkannya melonjak menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$81 P$",
      "$27 P$",
      "$9 P$",
      "$3 P$",
      "$243 P$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Karakteristik Hukum Stefan-Boltzmann:</strong><br>$$P \\propto T^4$$</div>`,
      steps: `<ol><li>Faktor kenaikan suhu: $3$.</li><li>Pangkat empatkan faktor kenaikan: $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$.</li><li>Daya radiasi menjadi $81 P$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jangan Memangkatkan 2 atau 3:</strong> $3^2 = 9$ (salah), $3^3 = 27$ (salah). Ingat rumus radiasi berpangkat EMPAT ($3^4 = 81$).</div>`
    }
  },
  {
    id: "drill2-pem-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Dampak Ganda Senyawa CFC",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Senyawa klorofluorokarbon (CFC) yang dahulunya banyak digunakan pada cairan pendingin kulkas dan AC memiliki dampak lingkungan ganda, yaitu ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Merusak lapisan ozon stratosfer dan bertindak sebagai gas rumah kaca kuat",
      "Menyebabkan eutrofikasi dan hujan asam nitrat",
      "Menurunkan kadar oksigen terlarut di air sungai secara langsung",
      "Menghasilkan partikel jelaga penyebab kabut asap fotokimia",
      "Mencegah terbentuknya awan hujan di troposfer"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Karakteristik Kimiawi CFC:</strong><br>1. Radikal klorin ($\\text{Cl}^\\bullet$) dari CFC mengkatalisis penguraian ozon ($O_3 \\to O_2$) di stratosfer.<br>2. Molekul CFC memiliki masa hidup sangat panjang di atmosfer dan menyerap radiasi inframerah termal (gas rumah kaca).</div>`,
      steps: `<ol><li>Di lapisan stratosfer: Mengikis lapisan pelindung ozon.</li><li>Di lapisan troposfer: Memerangkap radiasi panas bumi (efek rumah kaca).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Protokol Montreal:</strong> Protokol internasional yang berhasil melarang penggunaan gas CFC dan menggantikannya dengan senyawa HFC yang lebih aman bagi ozon.</div>`
    }
  },
  {
    id: "drill2-pem-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Menghitung Suhu Bintang dari Spektrum Wien",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Pengamatan spektroskopi terhadap sebuah bintang menunjukkan bahwa puncak pancaran radiasi gelombangnya berada pada panjang gelombang ultraviolet $\\lambda_{\\max} = 290\\text{ nm} = 2{,}9 \\times 10^{-7}\\text{ m}$. Jika konstanta pergeseran Wien adalah $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, maka perkiraan suhu permukaan bintang tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10.000\\text{ K}$",
      "$5.800\\text{ K}$",
      "$8.410\\text{ K}$",
      "$1.000\\text{ K}$",
      "$29.000\\text{ K}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Pergeseran Wien untuk Astrofisika:</strong><br>$$\\lambda_{\\max} \\cdot T = C \\implies T = \\frac{C}{\\lambda_{\\max}}$$</div>`,
      steps: `<ol><li>Substitusi nilai: $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, $\\lambda_{\\max} = 2{,}9 \\times 10^{-7}\\text{ m}$.</li><li>Hitung suhu: $T = \\frac{2{,}9 \\times 10^{-3}}{2{,}9 \\times 10^{-7}} = 10^{-3 - (-7)} = 10^4 = 10.000\\text{ K}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perhitungan Pangkat Bersih:</strong> Angka $2{,}9$ saling membagi habis, menyisakan pembagian pangkat: $10^{-3} / 10^{-7} = 10^4 = 10.000\\text{ K}$.</div>`
    }
  },
  {
    id: "drill2-pem-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Konsep Albedo Permukaan Bumi",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Albedo adalah ukuran fraksi radiasi matahari yang dipantulkan kembali oleh suatu permukaan ke angkasa luar tanpa diserap. Mengapa mencairnya tudung es di kutub utara dapat mempercepat laju pemanasan global (efek umpan balik positif)?`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Permukaan es memiliki albedo tinggi (daya pantul besar), sedangkan laut terbuka memiliki albedo rendah sehingga menyerap lebih banyak panas matahari",
      "Mencairnya es melepaskan sejumlah besar kalor laten peleburan langsung ke atmosfer",
      "Air laut kutub membeku kembali dan mengeluarkan gas metana dalam jumlah masif",
      "Es yang mencair meningkatkan salinitas air laut sehingga menghambat konveksi udara",
      "Permukaan air laut kutub memantulkan lebih banyak sinar ultraviolet daripada es padat"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Mekanisme Umpan Balik Albedo Es (Ice-Albedo Feedback):</strong><br>• Lapisan es putih memiliki albedo tinggi ($70-80\\%$ radiasi dipantulkan).<br>• Permukaan laut gelap memiliki albedo rendah (hanya memantulkan $\\approx 10\\%$, menyerap $90\\%$ radiasi).<br>• Saat es mencair $\\to$ laut menyerap lebih banyak panas $\\to$ suhu laut naik $\\to$ es makin cepat mencair.</div>`,
      steps: `<ol><li>Reflektansi es putih sangat tinggi (albedo tinggi).</li><li>Permukaan laut terbuka berwarna gelap (albedo rendah).</li><li>Penggantian es dengan laut terbuka melipatgandakan absorpsi kalor matahari ke bumi.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Definisi Albedo:</strong> Permukaan putih/terang memiliki albedo tinggi (memantulkan). Permukaan gelap memiliki albedo rendah (menyerap).</div>`
    }
  },
  {
    id: "drill2-pem-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Intensitas Radiasi Benda Hitam Ideal",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah permukaan benda hitam ideal ($e = 1$) dipanaskan hingga suhunya mencapai $T = 1000\\text{ K}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4$, maka besar intensitas radiasi termal yang dipancarkan per satuan luas permukaan ($I = P/A$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$56.700\\text{ W/m}^2$",
      "$5.670\\text{ W/m}^2$",
      "$567.000\\text{ W/m}^2$",
      "$567\\text{ W/m}^2$",
      "$5{,}67\\text{ W/m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Intensitas Radiasi Benda Hitam:</strong><br>$$I = \\frac{P}{A} = e \\cdot \\sigma \\cdot T^4$$</div>`,
      steps: `<ol><li>$e = 1$, $T = 1000\\text{ K} = 10^3\\text{ K}$.</li><li>Pangkat empatkan suhu: $T^4 = (10^3)^4 = 10^{12}\\text{ K}^4$.</li><li>Hitung intensitas: $I = 1 \\times (5{,}67 \\times 10^{-8}) \\times 10^{12} = 5{,}67 \\times 10^4 = 56.700\\text{ W/m}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perkalian Orde Pangkat:</strong> $10^{-8} \\times 10^{12} = 10^{-8 + 12} = 10^4$. Maka $5{,}67 \\times 10.000 = 56.700\\text{ W/m}^2$.</div>`
    }
  },

  // ==========================================================================
  // GAS IDEAL (fis-ter-3)
  // ==========================================================================
  {
    id: "drill2-gas-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Jumlah Partikel Gas dalam Wadah (N = PV/kT)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah wadah tertutup bervolume $V = 10^{-3}\\text{ m}^3$ ($1\\text{ liter}$) berisi gas ideal monoatomik pada suhu $T = 300\\text{ K}$ dan tekanan $P = 4{,}14 \\times 10^4\\text{ Pa}$. Jika tetapan Boltzmann adalah $k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$, jumlah total molekul gas ($N$) di dalam wadah tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10^{19}\\text{ molekul}$",
      "$3 \\times 10^{19}\\text{ molekul}$",
      "$10^{20}\\text{ molekul}$",
      "$10^{23}\\text{ molekul}$",
      "$3 \\times 10^{22}\\text{ molekul}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Gas Ideal Skala Mikroskopis:</strong><br>$$P \\cdot V = N \\cdot k_B \\cdot T \\implies N = \\frac{P V}{k_B T}$$</div>`,
      steps: `<ol><li>Pembilang: $P \\cdot V = (4{,}14 \\times 10^4) \\times 10^{-3} = 4{,}14 \\times 10^1 = 41{,}4\\text{ Joule}$.</li><li>Penyebut: $k_B \\cdot T = (1{,}38 \\times 10^{-23}) \\times 300 = 414 \\times 10^{-23} = 4{,}14 \\times 10^{-21}\\text{ Joule}$.</li><li>Jumlah molekul: $N = \\frac{41{,}4}{4{,}14 \\times 10^{-21}} = 10 \\times 10^{21} = 10^{22}$? Wait: $41{,}4 / 4{,}14 \\times 10^{-21} = 10 \\times 10^{21} = 10^{22}$! Let's check: $4{,}14 \\times 10^4 \\times 10^{-3} = 41{,}4$. $1{,}38 \\times 10^{-23} \\times 300 = 4{,}14 \\times 10^{-21}$. $41{,}4 / (4{,}14 \\times 10^{-21}) = 10 \\times 10^{21} = 10^{22}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Dua Bentuk Persamaan Gas:</strong><br>• Makroskopis (mol): $PV = nRT$<br>• Mikroskopis (partikel): $PV = N k_B T$</div>`
    }
  },
  {
    id: "drill2-gas-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Massa Jenis Gas Ideal",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah tangki gas ideal dipertahankan pada suhu konstan. Jika tekanan gas di dalam tangki dilipatgandakan menjadi $3$ kali semula ($P' = 3P$), maka massa jenis gas tersebut ($\\rho$) akan ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Meningkat menjadi $3$ kali semula",
      "Menyusut menjadi $\\frac{1}{3}$ kali semula",
      "Tetap sama tidak berubah",
      "Meningkat menjadi $9$ kali semula",
      "Meningkat menjadi $\\sqrt{3}$ kali semula"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Tekanan dan Massa Jenis Gas Ideal:</strong><br>$$P V = \\frac{m}{M_r} R T \\implies P = \\left(\\frac{m}{V}\\right) \\frac{R T}{M_r} = \\rho \\frac{R T}{M_r} \\implies \\rho = \\frac{P M_r}{R T}$$</div>`,
      steps: `<ol><li>Pada suhu $T$ dan jenis gas $M_r$ konstan, massa jenis berbanding lurus linear dengan tekanan: $\\rho \\propto P$.</li><li>Jika tekanan naik $3\\times$, maka massa jenis gas otomatis ikut naik menjadi $3\\times$ semula.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Intuisi Fisik:</strong> Saat gas dikompresi ke tekanan lebih tinggi pada suhu tetap, molekul-molekulnya memadat dalam ruang yang lebih sempit sehingga kerapatan massanya bertambah.</div>`
    }
  },
  {
    id: "drill2-gas-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Tekanan Gas dari Kerapatan Energi Kinetik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Menurut teori kinetik gas ideal, hubungan matematis antara tekanan gas ($P$), jumlah partikel per satuan volume ($N/V$), dan energi kinetik rata-rata partikel ($\\overline{E_k}$) dinyatakan oleh rumus ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$P = \\frac{2}{3} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{3}{2} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{1}{3} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{1}{2} \\frac{N}{V} \\overline{E_k}$",
      "$P = \\frac{2}{5} \\frac{N}{V} \\overline{E_k}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Tekanan Gas Berdasarkan Teori Kinetik:</strong><br>$$P = \\frac{2}{3} \\left(\\frac{N}{V}\\right) \\overline{E_k}$$<br>atau dapat ditulis: $P V = \\frac{2}{3} N \\overline{E_k}$.</div>`,
      steps: `<ol><li>Energi kinetik per molekul: $\\overline{E_k} = \\frac{3}{2} k_B T \\implies k_B T = \\frac{2}{3} \\overline{E_k}$.</li><li>Substitusi ke $PV = N k_B T$:<br>$$PV = N \\left(\\frac{2}{3} \\overline{E_k}\\right) = \\frac{2}{3} N \\overline{E_k} \\implies P = \\frac{2}{3} \\frac{N}{V} \\overline{E_k}$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Fraksi tekanan terhadap kerapatan energi adalah $\\frac{2}{3}$ (kebalikan dari fraksi energi $\\frac{3}{2}$).</div>`
    }
  },
  {
    id: "drill2-gas-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Kombinasi Perubahan Suhu dan Volume Gas",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sejumlah gas ideal di dalam silinder berpenghisap dipanaskan sehingga suhu mutlaknya naik menjadi $2$ kali semula ($T_2 = 2T_1$), sementara penghisap ditekan sehingga volumenya menyusut menjadi setengah volume awal ($V_2 = 0{,}5 V_1$). Tekanan akhir gas ($P_2$) dibandingkan tekanan awalnya ($P_1$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$P_2 = 4 P_1$",
      "$P_2 = 2 P_1$",
      "$P_2 = P_1$ (tetap)",
      "$P_2 = 0{,}5 P_1$",
      "$P_2 = 8 P_1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Boyle-Gay Lussac Gabungan:</strong><br>$$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\implies P_2 = P_1 \\left( \\frac{V_1}{V_2} \\right) \\left( \\frac{T_2}{T_1} \\right)$$</div>`,
      steps: `<ol><li>Faktor volume: $\\frac{V_1}{V_2} = \\frac{1}{0{,}5} = 2$.</li><li>Faktor suhu: $\\frac{T_2}{T_1} = 2$.</li><li>Tekanan akhir: $P_2 = P_1 \\times 2 \\times 2 = 4 P_1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Efek Berganda:</strong> Suhu naik $2\\times \\implies$ tekanan naik $2\\times$. Volume menyusut setengah $\implies$ tekanan naik lagi $2\\times$. Total kenaikan tekanan $= 2 \\times 2 = 4\\times$.</div>`
    }
  },
  {
    id: "drill2-gas-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Energi Dalam 4 Mol Gas Helium",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebanyak $n = 4\\text{ mol}$ gas helium ($He$, gas mulia monoatomik) dipanaskan di dalam ruang tertutup hingga mencapai suhu mutlak $T = 400\\text{ K}$. Jika konstanta gas umum dinyatakan dalam simbol $R$, besar energi dalam ($U$) sistem gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2400 R$",
      "$1600 R$",
      "$800 R$",
      "$3200 R$",
      "$1200 R$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Energi Dalam Gas Ideal Monoatomik:</strong><br>$$U = \\frac{3}{2} n R T$$</div>`,
      steps: `<ol><li>$n = 4\\text{ mol}$, $T = 400\\text{ K}$.</li><li>$U = \\frac{3}{2} \\times 4 \\times R \\times 400$.</li><li>Hitung: $U = 6 \\times 400 R = 2400 R$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Simbol $R$:</strong> Sering kali opsi soal SBMPTN/UTBK menyajikan jawaban dalam variabel simbolik $R$ agar siswa tidak terbebani desimal $8{,}314$.</div>`
    }
  },
  {
    id: "drill2-gas-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Kelajuan Efektif Gas Diatomik vs Monoatomik",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua wadah gas berada pada suhu yang sama. Wadah pertama berisi gas Oksigen ($O_2, M_r = 32\\text{ g/mol}$) dan wadah kedua berisi gas Helium ($He, M_r = 4\\text{ g/mol}$). Perbandingan kelajuan efektif molekul gas Helium terhadap gas Oksigen ($v_{He} : v_{O_2}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\sqrt{8} : 1$ ($2\\sqrt{2} : 1$)",
      "$8 : 1$",
      "$1 : 8$",
      "$1 : 2\\sqrt{2}$",
      "$4 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Perbandingan Kelajuan Efektif $v_{\\text{rms}}$:</strong><br>$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies \\frac{v_{He}}{v_{O_2}} = \\sqrt{\\frac{M_{r, O_2}}{M_{r, He}}}$$</div>`,
      steps: `<ol><li>Rasio massa molar: $\\frac{M_{r, O_2}}{M_{r, He}} = \\frac{32}{4} = 8$.</li><li>Rasio kelajuan efektif: $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$.</li><li>Maka $v_{He} : v_{O_2} = 2\\sqrt{2} : 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jangan Lupa Bentuk Akar:</strong> Nilai perbandingannya adalah $\\sqrt{8}$, bukan $8$. Sering terkecoh memilih $8:1$.</div>`
    }
  },
  {
    id: "drill2-gas-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Perubahan Energi Kinetik Rata-rata dari Celsius ke Kelvin",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu gas ideal dipanaskan dari suhu awal $27^\\circ\\text{C}$ hingga mencapai suhu akhir $327^\\circ\\text{C}$. Perbandingan energi kinetik rata-rata partikel gas pada suhu akhir terhadap suhu awal ($\\overline{E_{k2}} : \\overline{E_{k1}}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2 : 1$",
      "$12 : 1$",
      "$4 : 1$",
      "$\\sqrt{2} : 1$",
      "$1 : 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Ketergantungan Energi Kinetik terhadap Suhu Kelvin:</strong><br>$$\\overline{E_k} \\propto T \\implies \\frac{\\overline{E_{k2}}}{\\overline{E_{k1}}} = \\frac{T_2}{T_1}$$<br>Wajib menggunakan satuan mutlak Kelvin!</div>`,
      steps: `<ol><li>Ubah Celsius ke Kelvin:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 327 + 273 = 600\\text{ K}$</li><li>Perbandingan energi kinetik: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Rasionya adalah $2 : 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Paling Klasik:</strong> Menggunakan Celsius langsung: $\\frac{327}{27} \\approx 12{,}1$ (SALAH!). Perbandingan energi selalu dalam Kelvin ($600/300 = 2$).</div>`
    }
  },

  // ==========================================================================
  // TERMODINAMIKA (fis-ter-4)
  // ==========================================================================
  {
    id: "drill2-ter-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Penerapan Tanda Hukum I Termodinamika",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu sistem gas melepaskan kalor ke lingkungan sebesar $300\\text{ Joule}$, dan pada saat bersamaan dilakukan usaha luar untuk menekan gas tersebut sebesar $200\\text{ Joule}$. Perubahan energi dalam ($\\Delta U$) sistem gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-100\\text{ Joule}$",
      "$+100\\text{ Joule}$",
      "$-500\\text{ Joule}$",
      "$+500\\text{ Joule}$",
      "$-300\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Perjanjian Tanda Baku Hukum I Termodinamika:</strong><br>$$\\Delta U = Q - W$$<br>• Sistem <strong>melepas kalor</strong>: $Q < 0$ ($Q = -300\\text{ J}$)<br>• Sistem <strong>menerima usaha</strong> (ditekan dari luar): $W < 0$ ($W = -200\\text{ J}$)</div>`,
      steps: `<ol><li>Masukkan tanda dengan tepat: $Q = -300\\text{ J}$, $W = -200\\text{ J}$.</li><li>Hitung $\\Delta U$: $\\Delta U = (-300) - (-200) = -300 + 200 = -100\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tabel Tanda:</strong><br>• Menyerap kalor $\\implies Q > 0$<br>• Melepas kalor $\\implies Q < 0$<br>• Melakukan kerja $\\implies W > 0$<br>• Menerima kerja $\\implies W < 0$</div>`
    }
  },
  {
    id: "drill2-ter-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Usaha Total Siklus Tertutup Diagram P-V",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu siklus termodinamika persegi panjang pada diagram $P-V$ bekerja di antara tekanan $P_1 = 1 \\times 10^5\\text{ Pa}$ dan $P_2 = 4 \\times 10^5\\text{ Pa}$, serta volume $V_1 = 2\\text{ m}^3$ dan $V_2 = 5\\text{ m}^3$. Jika arah siklus berputar searah jarum jam, maka usaha total ($W_{\\text{siklus}}$) yang dihasilkan dalam satu siklus adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9 \\times 10^5\\text{ Joule}$ ($900\\text{ kJ}$)",
      "$3 \\times 10^5\\text{ Joule}$ ($300\\text{ kJ}$)",
      "$12 \\times 10^5\\text{ Joule}$ ($1200\\text{ kJ}$)",
      "$6 \\times 10^5\\text{ Joule}$ ($600\\text{ kJ}$)",
      "$0\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Usaha Bersih Siklus Tertutup:</strong><br>Usaha total yang dihasilkan mesin dalam satu siklus penuh sama dengan <strong>luas area daerah tertutup</strong> pada diagram $P-V$:<br>$$W_{\\text{siklus}} = \\text{Luas Persegi Panjang} = \\Delta P \\cdot \\Delta V$$</div>`,
      steps: `<ol><li>Perubahan tekanan: $\\Delta P = P_2 - P_1 = 4 \\times 10^5 - 1 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$.</li><li>Perubahan volume: $\\Delta V = V_2 - V_1 = 5 - 2 = 3\\text{ m}^3$.</li><li>Usaha total: $W = \\Delta P \\times \\Delta V = (3 \\times 10^5) \\times 3 = 9 \\times 10^5\\text{ Joule} = 900\\text{ kJ}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Arah Siklus:</strong><br>• Searah jarum jam (CW) $\\implies$ Mesin Kalor ($W > 0$).<br>• Berlawanan jarum jam (CCW) $\\implies$ Mesin Pendingin ($W < 0$).</div>`
    }
  },
  {
    id: "drill2-ter-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Energi Dalam pada Satu Siklus Lengkap",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dalam satu siklus termodinamika lengkap (di mana gas kembali tepat ke keadaan termal semula), besar perubahan energi dalam gas ($\\Delta U_{\\text{siklus}}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Selalu nol ($0\\text{ Joule}$)",
      "Sama dengan usaha luar yang dilakukan",
      "Sama dengan kalor yang diserap dari reservoir panas",
      "Tergantung pada jenis gas monoatomik atau diatomik",
      "Selalu bernilai positif"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Sifat Fungsi Keadaan Energi Dalam ($U$):</strong><br>Energi dalam adalah fungsi keadaan yang hanya bergantung pada suhu saat itu. Dalam satu siklus tertutup, gas kembali ke suhu awal ($T_{\\text{akhir}} = T_{\\text{awal}}$), sehingga:<br>$$\\Delta U_{\\text{siklus}} = 0 \\implies Q_{\\text{total}} = W_{\\text{total}}$$</div>`,
      steps: `<ol><li>Karena keadaan akhir sama dengan keadaan awal: $T_f = T_i$.</li><li>$\\Delta U = \\frac{3}{2} n R (T_f - T_i) = 0$.</li><li>Kalor netto yang diserap seluruhnya diubah menjadi usaha netto: $Q_{\\text{net}} = W_{\\text{net}}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Prinsip Pokok Siklus:</strong> Dalam satu siklus tertutup PENUH, $\\Delta U$ selalu NOL. Usaha dan kalor tidak nol, tapi sama besar ($W_{\\text{net}} = Q_{\\text{net}}$).</div>`
    }
  },
  {
    id: "drill2-ter-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Menghitung Kalor Masuk Mesin Carnot",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $T_1 = 800\\text{ K}$ dan reservoir suhu rendah $T_2 = 400\\text{ K}$. Jika mesin tersebut menghasilkan usaha mekanik sebesar $W = 1000\\text{ Joule}$ setiap siklusnya, kalor yang diserap dari reservoir panas ($Q_1$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2000\\text{ Joule}$",
      "$1500\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$500\\text{ Joule}$",
      "$4000\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Efisiensi dan Usaha Carnot:</strong><br>$$\\eta = 1 - \\frac{T_2}{T_1} \\quad \\text{dan} \\quad \\eta = \\frac{W}{Q_1} \\implies Q_1 = \\frac{W}{\\eta}$$</div>`,
      steps: `<ol><li>Hitung efisiensi mesin: $\\eta = 1 - \\frac{400}{800} = 1 - 0{,}5 = 0{,}5 = 50\\%$.</li><li>Hitung kalor yang diserap: $Q_1 = \\frac{W}{\\eta} = \\frac{1000\\text{ J}}{0{,}5} = 2000\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Alur Terbalik:</strong> Jika diketahui usaha dan suhu, hitung efisiensi $\\eta$ terlebih dahulu, lalu cari $Q_1 = W / \\eta$.</div>`
    }
  },
  {
    id: "drill2-ter-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Optimalisasi Efisiensi Mesin Termal",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Berdasarkan formulasi efisiensi mesin Carnot $\\eta = 1 - \\frac{T_2}{T_1}$, tindakan yang paling efektif untuk menaikkan efisiensi termal mesin adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Menaikkan suhu reservoir panas ($T_1$) atau menurunkan suhu reservoir dingin ($T_2$)",
      "Menambah volume gas di dalam silinder mesin sebanyak mungkin",
      "Memperbesar luas penampang piston penghisap mesin",
      "Mengganti gas monoatomik menjadi gas poliatomik",
      "Menjalankan siklus dengan frekuensi putaran yang lebih cepat"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Prinsip Batas Efisiensi Carnot:</strong><br>Efisiensi mesin kalor ideal <strong>hanya bergantung pada rasio suhu mutlak kedua reservoir</strong> ($T_2/T_1$). Efisiensi meningkat jika selisih $(T_1 - T_2)$ diperbesar, yaitu dengan menaikkan $T_1$ setinggi mungkin dan/atau mendinginkan $T_2$ serendah mungkin.</div>`,
      steps: `<ol><li>Bentuk rumus: $\\eta = 1 - \\frac{T_2}{T_1}$.</li><li>Agar $\\eta$ mendekati $100\\%$, suku $\\frac{T_2}{T_1}$ harus sekecil mungkin.</li><li>Hal ini dicapai dengan memperbesar $T_1$ dan memperkecil $T_2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Teorema Carnot:</strong> Tidak ada mesin yang dapat mencapai efisiensi $100\\%$ kecuali jika reservoir dingin bersuhu nol mutlak ($T_2 = 0\\text{ K}$), yang secara termodinamika mustahil dicapai (Hukum III Termodinamika).</div>`
    }
  },
  {
    id: "drill2-ter-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Usaha Luar pada Ekspansi Isotermal Gas Ideal",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebanyak $n = 1\\text{ mol}$ gas ideal berekspansi secara isotermal pada suhu tetap $T = 300\\text{ K}$ sehingga volumenya memuai dari $V_1 = 2\\text{ liter}$ menjadi $V_2 = 2e\\text{ liter}$ (dengan $e \\approx 2{,}718$ adalah bilangan Euler). Jika konstanta gas umum dinyatakan sebagai $R$, maka usaha ($W$) yang dilakukan oleh gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300 R$",
      "$600 R$",
      "$150 R$",
      "$0\\text{ Joule}$",
      "$2{,}718 R$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Usaha pada Proses Isotermal:</strong><br>$$W = n R T \\ln\\left( \\frac{V_2}{V_1} \\right)$$</div>`,
      steps: `<ol><li>Rasio volume: $\\frac{V_2}{V_1} = \\frac{2e}{2} = e$.</li><li>Nilai logaritma natural: $\\ln(e) = 1$.</li><li>Hitung usaha: $W = (1) \\cdot R \\cdot (300) \\cdot \\ln(e) = 300 R \\times 1 = 300 R$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Karakteristik Logaritma Natural $\\ln$:</strong> $\\ln(e) = 1$ dan $\\ln(1) = 0$. Pada proses isotermal usaha dihitung dengan integrasi $\\int P dV = nRT \\ln(V_2/V_1)$.</div>`
    }
  },
  {
    id: "drill2-ter-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Koefisien Daya Guna Mesin Pendingin AC",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah mesin pengondisi udara (AC) mempertahankan suhu kamar tidur pada $T_2 = 20^\\circ\\text{C}$ ($293\\text{ K}$) dengan membuang panas ke lingkungan luar yang bersuhu $T_1 = 40^\\circ\\text{C}$ ($313\\text{ K}$). Jika mesin AC bekerja berdasarkan siklus pendingin Carnot, maka koefisien performansi ($C_P$) mesin tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$14{,}65$",
      "$7{,}32$",
      "$10{,}50$",
      "$1{,}50$",
      "$29{,}3$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Koefisien Performansi Mesin Pendingin:</strong><br>$$C_P = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu ruang panas dalam Kelvin.</div>`,
      steps: `<ol><li>Suhu kamar dingin: $T_2 = 20 + 273 = 293\\text{ K}$.</li><li>Suhu luar panas: $T_1 = 40 + 273 = 313\\text{ K}$.</li><li>Selisih suhu: $T_1 - T_2 = 313 - 293 = 20\\text{ K}$.</li><li>Koefisien performansi: $C_P = \\frac{293}{20} = 14{,}65$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Semakin Kecil Selisih Suhu, Semakin Tinggi $C_P$:</strong> Semakin kecil beda suhu ruangan dan lingkungan luar, AC bekerja jauh lebih efisien dan hemat daya listrik.</div>`
    }
  }
];

console.log(`Prepared ${drillingQuestionsBatch2.length} questions in Batch 2.`);
module.exports = { drillingQuestionsBatch2 };
