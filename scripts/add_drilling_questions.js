/**
 * scripts/add_drilling_questions.js
 * Dedicated question batch for high-yield physics drilling:
 * - Gelombang Bunyi (fis-gel-1)
 * - Gelombang Cahaya (fis-gel-2)
 * - Dinamika Rotasi (fis-din-3)
 * - Kalor dan Perpindahannya (fis-ter-1)
 * - Pemanasan Global & Radiasi (fis-ter-2)
 * - Gas Ideal (fis-ter-3)
 * - Termodinamika (fis-ter-4)
 * 
 * Tiers: Mudah dan Sedang saja.
 * Tujuan: Terbiasa dan hafal secara alami seluruh rumus dasar yang dibutuhkan.
 */

const fs = require('fs');
const path = require('path');

const drillingQuestions = [
  // ==========================================================================
  // GELOMBANG BUNYI (fis-gel-1)
  // ==========================================================================
  {
    id: "drill-bun-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Cepat Rambat Gelombang Dawai Hukum Melde",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Pada percobaan Hukum Melde, seutas dawai senar gitar diberi gaya tegangan tali sebesar $F = 100\\text{ N}$. Jika massa per satuan panjang dawai tersebut adalah $\\mu = 0{,}04\\text{ kg/m}$, maka kelajuan rambat gelombang transversal pada dawai adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$40\\text{ m/s}$",
      "$100\\text{ m/s}$",
      "$200\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Hukum Melde:</strong><br>Kelajuan rambat gelombang pada dawai berbanding lurus dengan akar gaya tegangan dan berbanding terbalik dengan akar massa persatuan panjang:<br>$$v = \\sqrt{\\frac{F}{\\mu}}$$</div>`,
      steps: `<ol><li>Identifikasi nilai yang diketahui: $F = 100\\text{ N}$, $\\mu = 0{,}04\\text{ kg/m}$.</li><li>Hitung pembagian dalam akar: $\\frac{F}{\\mu} = \\frac{100}{0{,}04} = 2500$.</li><li>Tarik akar kuadrat: $v = \\sqrt{2500} = 50\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Ingat kata kunci <em>\"Melde = Gaya per mu\"</em> ($v = \\sqrt{F/\\mu}$). Jangan mengalikan $F \\times \\mu$.</div>`
    }
  },
  {
    id: "drill-bun-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Pengaruh Suhu terhadap Kelajuan Bunyi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Kelajuan rambat bunyi di dalam suatu gas ideal pada suhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 320\\text{ m/s}$. Jika gas tersebut dipanaskan hingga suhu mutlaknya naik menjadi $T_2 = 1200\\text{ K}$, kelajuan rambat bunyi di dalam gas tersebut menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$640\\text{ m/s}$",
      "$480\\text{ m/s}$",
      "$1280\\text{ m/s}$",
      "$960\\text{ m/s}$",
      "$320\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kelajuan Bunyi pada Gas Ideal:</strong><br>$$v = \\sqrt{\\frac{\\gamma R T}{M_r}} \\implies v \\propto \\sqrt{T}$$<br>Kelajuan bunyi berbanding lurus dengan <strong>akar suhu mutlak</strong> (Kelvin).</div>`,
      steps: `<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{1200}{300} = 4$.</li><li>Perbandingan kelajuan: $\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2$.</li><li>Kelajuan akhir: $v_2 = 2 \\times v_1 = 2 \\times 320 = 640\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menganggap hubungan linear $v \\propto T$ sehingga mengalikan 4 kali lipat ($1280\\text{ m/s}$). Yang benar adalah sebanding dengan akar kuadrat $\\sqrt{T}$.</div>`
    }
  },
  {
    id: "drill-bun-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Frekuensi Nada Dasar Dawai Gitar",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seutas senar gitar memiliki panjang efektif $L = 80\\text{ cm}$. Jika gelombang transversal merambat pada senar tersebut dengan kelajuan $v = 400\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) yang dihasilkan senar tersebut saat dipetik adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$250\\text{ Hz}$",
      "$500\\text{ Hz}$",
      "$125\\text{ Hz}$",
      "$300\\text{ Hz}$",
      "$400\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Frekuensi Nada Dasar Dawai (Kedua Ujung Terikat):</strong><br>Pada nada dasar, panjang dawai membentuk setengah gelombang ($L = \\frac{1}{2}\\lambda \\implies \\lambda = 2L$):<br>$$f_0 = \\frac{v}{2L}$$</div>`,
      steps: `<ol><li>Konversi satuan panjang ke meter: $L = 80\\text{ cm} = 0{,}8\\text{ m}$.</li><li>Hitung pembagi: $2L = 2 \\times 0{,}8 = 1{,}6\\text{ m}$.</li><li>Frekuensi nada dasar: $f_0 = \\frac{400\\text{ m/s}}{1{,}6\\text{ m}} = 250\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Rumus nada dasar dawai sama persis dengan pipa organa terbuka: $f_0 = \\frac{v}{2L}$. Ingat ada faktor angka 2 di penyebut!</div>`
    }
  },
  {
    id: "drill-bun-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Frekuensi Pipa Organa Tertutup",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pipa organa tertutup memiliki panjang $L = 50\\text{ cm}$. Jika kelajuan bunyi di udara saat itu adalah $v = 340\\text{ m/s}$, maka frekuensi nada dasar ($f_0$) dan frekuensi nada atas pertama ($f_1$) berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$170\\text{ Hz}$ dan $510\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $340\\text{ Hz}$",
      "$340\\text{ Hz}$ dan $680\\text{ Hz}$",
      "$85\\text{ Hz}$ dan $255\\text{ Hz}$",
      "$170\\text{ Hz}$ dan $680\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Pipa Organa Tertutup (Harmonik Ganjil):</strong><br>• Nada dasar ($n=0$): $f_0 = \\frac{v}{4L}$<br>• Perbandingan frekuensi hanya bilangan ganjil: $f_0 : f_1 : f_2 = 1 : 3 : 5$<br>• Nada atas pertama ($n=1$): $f_1 = 3 f_0 = \\frac{3v}{4L}$</div>`,
      steps: `<ol><li>Konversi panjang: $L = 50\\text{ cm} = 0{,}5\\text{ m}$.</li><li>Nada dasar: $f_0 = \\frac{v}{4L} = \\frac{340}{4 \\times 0{,}5} = \\frac{340}{2} = 170\\text{ Hz}$.</li><li>Nada atas pertama: $f_1 = 3 \\times f_0 = 3 \\times 170 = 510\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perbedaan Kunci:</strong> Pipa tertutup penyebutnya $4L$ dan bernada ganjil ($1 : 3 : 5$). Pipa terbuka penyebutnya $2L$ dan bernada bulat ($1 : 2 : 3$).</div>`
    }
  },
  {
    id: "drill-bun-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Resonansi Kolom Udara Tabung",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dalam percobaan resonansi tabung kolom udara menggunakan garpu tala berfrekuensi $f = 500\\text{ Hz}$, terjadi resonansi pertama pada panjang kolom udara $L_1 = 18\\text{ cm}$ dan resonansi kedua terjadi pada $L_2 = 54\\text{ cm}$. Kelajuan rambat bunyi di udara berdasarkan percobaan tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$360\\text{ m/s}$",
      "$340\\text{ m/s}$",
      "$320\\text{ m/s}$",
      "$300\\text{ m/s}$",
      "$270\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Selisih Resonansi Berurutan Tabung Bunyi:</strong><br>Jarak antara dua resonansi berurutan selalu tepat sama dengan <strong>setengah panjang gelombang</strong>:<br>$$\\Delta L = L_2 - L_1 = \\frac{1}{2}\\lambda \\implies \\lambda = 2(L_2 - L_1)$$<br>$$v = f \\cdot \\lambda$$</div>`,
      steps: `<ol><li>Hitung selisih panjang kolom udara: $\\Delta L = 54\\text{ cm} - 18\\text{ cm} = 36\\text{ cm} = 0{,}36\\text{ m}$.</li><li>Panjang gelombang bunyi: $\\lambda = 2 \\times 0{,}36\\text{ m} = 0{,}72\\text{ m}$.</li><li>Kelajuan bunyi: $v = f \\cdot \\lambda = 500\\text{ Hz} \\times 0{,}72\\text{ m} = 360\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Trik Cepat:</strong> Selisih dua resonansi berturutan $\\Delta L = \\frac{1}{2}\\lambda$, sehingga $\\lambda = 2\\Delta L$. Tidak perlu mengkhawatirkan koreksi ujung tabung.</div>`
    }
  },
  {
    id: "drill-bun-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Fenomena Pelayangan Bunyi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dua buah garpu tala $A$ dan $B$ dibunyikan secara bersamaan. Garpu tala $A$ memiliki frekuensi $440\\text{ Hz}$. Jika terdengar $4$ layangan bunyi setiap detiknya, maka frekuensi yang mungkin dari garpu tala $B$ adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$436\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$440\\text{ Hz}$ atau $448\\text{ Hz}$",
      "$220\\text{ Hz}$ atau $880\\text{ Hz}$",
      "$110\\text{ Hz}$ atau $444\\text{ Hz}$",
      "$438\\text{ Hz}$ atau $442\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Frekuensi Pelayangan Bunyi (Beats):</strong><br>Frekuensi pelayangan adalah selisih mutlak dari dua frekuensi gelombang bunyi yang berinterferensi:<br>$$f_{\\text{layang}} = |f_A - f_B|$$</div>`,
      steps: `<ol><li>Diketahui $f_{\\text{layang}} = 4\\text{ Hz}$ dan $f_A = 440\\text{ Hz}$.</li><li>Kemungkinan 1: $f_B = f_A + f_{\\text{layang}} = 440 + 4 = 444\\text{ Hz}$.</li><li>Kemungkinan 2: $f_B = f_A - f_{\\text{layang}} = 440 - 4 = 436\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Pelayangan bunyi selalu berupa selisih sederhana ($|f_1 - f_2|$), bukan rata-rata atau rasio.</div>`
    }
  },
  {
    id: "drill-bun-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Efek Doppler Sumber & Pendengar Saling Mendekat",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah kereta api bergerak mendekati stasiun dengan kelajuan $v_s = 20\\text{ m/s}$ sambil membunyikan peluit berfrekuensi $640\\text{ Hz}$. Pada saat bersamaan, seorang penumpang di peron bergerak berjalan mendekati kereta api dengan kelajuan $v_p = 10\\text{ m/s}$. Jika kelajuan rambat bunyi di udara adalah $v = 340\\text{ m/s}$, frekuensi peluit yang didengar oleh penumpang tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$700\\text{ Hz}$",
      "$680\\text{ Hz}$",
      "$660\\text{ Hz}$",
      "$720\\text{ Hz}$",
      "$600\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kaidah Tanda Efek Doppler:</strong><br>$$f_p = \\left( \\frac{v \\pm v_p}{v \\mp v_s} \\right) f_s$$<br>• Pendengar mendekati sumber $\\implies (+v_p)$ pada pembilang.<br>• Sumber mendekati pendengar $\\implies (-v_s)$ pada penyebut.<br>• Efek keduanya saling mendekat membuat frekuensi yang didengar semakin tinggi ($f_p > f_s$).</div>`,
      steps: `<ol><li>Substitusi nilai: $v = 340$, $v_p = 10$, $v_s = 20$, $f_s = 640$.</li><li>Pembilang: $v + v_p = 340 + 10 = 350\\text{ m/s}$.</li><li>Penyebut: $v - v_s = 340 - 20 = 320\\text{ m/s}$.</li><li>Hitung frekuensi: $f_p = \\frac{350}{320} \\times 640 = 350 \\times 2 = 700\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Mnemonic Tanda Doppler:</strong> \"Mendekat = Lebih Tinggi\" (pembilang ditambah, penyebut dikurang). \"Menjauh = Lebih Rendah\" (pembilang dikurang, penyebut ditambah).</div>`
    }
  },
  {
    id: "drill-bun-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-1",
    category: "Taraf Intensitas Bunyi terhadap Perubahan Jarak",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Taraf intensitas bunyi sebuah sirene pabrik pada jarak $r_1 = 2\\text{ meter}$ adalah $TI_1 = 80\\text{ dB}$. Taraf intensitas bunyi yang terdengar pada jarak $r_2 = 20\\text{ meter}$ dari sirene tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$40\\text{ dB}$",
      "$78\\text{ dB}$",
      "$50\\text{ dB}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Taraf Intensitas terhadap Jarak Titik:</strong><br>Karena intensitas mematuhi hukum kuadrat terbalik ($I \\propto 1/r^2$), taraf intensitas berkurang secara logaritmik:<br>$$TI_2 = TI_1 - 20 \\log_{10}\\left(\\frac{r_2}{r_1}\\right)$$</div>`,
      steps: `<ol><li>Rasio jarak: $\\frac{r_2}{r_1} = \\frac{20}{2} = 10$.</li><li>Hitung logaritma: $\\log_{10}(10) = 1$.</li><li>Pengurangan taraf intensitas: $\\Delta TI = 20 \\times 1 = 20\\text{ dB}$.</li><li>Taraf intensitas pada jarak 20 m: $TI_2 = 80 - 20 = 60\\text{ dB}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Rumus Sakti Jarak:</strong> Jarak naik $10\\times \\implies TI$ turun tepat $20\\text{ dB}$. Jarak naik $100\\times \\implies TI$ turun tepat $40\\text{ dB}$. Faktor pengalinya adalah 20, bukan 10!</div>`
    }
  },

  // ==========================================================================
  // GELOMBANG CAHAYA (fis-gel-2)
  // ==========================================================================
  {
    id: "drill-cah-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Hubungan Frekuensi dan Panjang Gelombang Cahaya",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seberkas laser jingga memiliki panjang gelombang $\\lambda = 600\\text{ nm}$ di ruang hampa ($1\\text{ nm} = 10^{-9}\\text{ m}$). Jika kelajuan cahaya di ruang hampa adalah $c = 3 \\times 10^8\\text{ m/s}$, maka frekuensi gelombang laser tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{15}\\text{ Hz}$",
      "$2 \\times 10^{14}\\text{ Hz}$",
      "$1{,}8 \\times 10^{14}\\text{ Hz}$",
      "$5 \\times 10^{12}\\text{ Hz}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Gelombang Elektromagnetik:</strong><br>$$c = \\lambda \\cdot f \\implies f = \\frac{c}{\\lambda}$$</div>`,
      steps: `<ol><li>Konversi panjang gelombang ke meter: $\\lambda = 600 \\times 10^{-9}\\text{ m} = 6 \\times 10^{-7}\\text{ m}$.</li><li>Hitung frekuensi: $f = \\frac{3 \\times 10^8}{6 \\times 10^{-7}} = 0{,}5 \\times 10^{15} = 5 \\times 10^{14}\\text{ Hz}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perhatikan Orde Pangkat:</strong> Hati-hati saat menaikkan pangkat dari penyebut: $10^8 / 10^{-7} = 10^{8 - (-7)} = 10^{15}$.</div>`
    }
  },
  {
    id: "drill-cah-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kelajuan Cahaya dalam Medium Pembias",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Cahaya merambat dari ruang hampa ($c = 3 \\times 10^8\\text{ m/s}$) memasuki balok kaca yang mempunyai indeks bias $n = 1{,}5$. Kelajuan cahaya di dalam kaca tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}0 \\times 10^8\\text{ m/s}$",
      "$1{,}5 \\times 10^8\\text{ m/s}$",
      "$4{,}5 \\times 10^8\\text{ m/s}$",
      "$2{,}5 \\times 10^8\\text{ m/s}$",
      "$3{,}0 \\times 10^8\\text{ m/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Definisi Indeks Bias Mutlak:</strong><br>Indeks bias medium menyatakan perbandingan kelajuan cahaya di ruang hampa terhadap kelajuan cahaya di medium tersebut:<br>$$n = \\frac{c}{v} \\implies v = \\frac{c}{n}$$</div>`,
      steps: `<ol><li>Substitusi nilai: $c = 3 \\times 10^8\\text{ m/s}$ dan $n = 1{,}5$.</li><li>$v = \\frac{3 \\times 10^8}{1{,}5} = 2{,}0 \\times 10^8\\text{ m/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Konsep Kunci:</strong> Cahaya selalu merambat <em>lebih lambat</em> di dalam medium optik ($n > 1$) dibandingkan di ruang hampa. Nilai $v$ tidak mungkin melebihi $c$.</div>`
    }
  },
  {
    id: "drill-cah-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Sudut Kritis dan Pemantulan Total Sempurna",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seberkas sinar merambat dari dalam air yang memiliki indeks bias $n_1 = \\frac{4}{3}$ menuju ke udara yang memiliki indeks bias $n_2 = 1$. Nilai sinus sudut kritis ($\\sin \\theta_k$) agar terjadi peristiwa pemantulan total sempurna adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{2}{3}$",
      "$\\frac{1}{4}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Syarat Pemantulan Total Sempurna & Sudut Kritis:</strong><br>1. Cahaya harus merambat dari medium <strong>lebih rapat ke medium kurang rapat</strong> ($n_1 > n_2$).<br>2. Pada sudut kritis, sudut bias $r = 90^\\circ$ ($\\sin 90^\\circ = 1$):<br>$$\\sin \\theta_k = \\frac{n_2}{n_1}$$</div>`,
      steps: `<ol><li>Identifikasi: $n_1 = \\frac{4}{3}$ (medium rapat/air), $n_2 = 1$ (medium renggang/udara).</li><li>Rumus sudut kritis: $\\sin \\theta_k = \\frac{n_2}{n_1} = \\frac{1}{\\frac{4}{3}} = \\frac{3}{4}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Cek Masuk Akal:</strong> Nilai sinus suatu sudut nyata tidak pernah boleh lebih dari 1. Jadi pembagian selalu medium kecil dibagi medium besar ($n_{\\text{kecil}} / n_{\\text{besar}}$).</div>`
    }
  },
  {
    id: "drill-cah-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Cermin Cembung Pembentukan Bayangan",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah spion mobil berupa cermin cembung memiliki jarak fokus $|f| = 20\\text{ cm}$. Jika sebuah sepeda motor berada pada jarak $s = 20\\text{ cm}$ di depan cermin tersebut, maka letak bayangan sepeda motor ($s'$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-10\\text{ cm}$ (maya di belakang cermin)",
      "$+10\\text{ cm}$ (nyata di depan cermin)",
      "$-20\\text{ cm}$ (maya di belakang cermin)",
      "$-40\\text{ cm}$ (maya di belakang cermin)",
      "$+20\\text{ cm}$ (nyata di depan cermin)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Aturan Tanda Cermin Cembung:</strong><br>• Jarak fokus cermin cembung <strong>selalu bernilai negatif</strong> ($f = -20\\text{ cm}$).<br>• Persamaan cermin: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'} \\implies \\frac{1}{s'} = \\frac{1}{f} - \\frac{1}{s}$.<br>• Bayangan cermin cembung selalu maya ($s' < 0$), tegak, dan diperkecil.</div>`,
      steps: `<ol><li>$f = -20\\text{ cm}$, $s = +20\\text{ cm}$.</li><li>$\\frac{1}{s'} = -\\frac{1}{20} - \\frac{1}{20} = -\\frac{2}{20} = -\\frac{1}{10}$.</li><li>$s' = -10\\text{ cm}$ (tanda minus menandakan bayangan maya di belakang cermin).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Wajib Diingat:</strong> Selalu beri tanda minus pada fokus cermin cembung dan lensa cekung ($f < 0$).</div>`
    }
  },
  {
    id: "drill-cah-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kuat Lensa (Daya Dioptri)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah lensa cembung memiliki jarak fokus $f = +25\\text{ cm}$. Kuat lensa (daya lensa) tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+4\\text{ Dioptri}$",
      "$+2{,}5\\text{ Dioptri}$",
      "$+0{,}04\\text{ Dioptri}$",
      "$-4\\text{ Dioptri}$",
      "$+10\\text{ Dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Rumus Kuat Lensa (Dioptri):</strong><br>$$P = \\frac{1}{f\\text{ (meter)}} = \\frac{100}{f\\text{ (cm)}}$$</div>`,
      steps: `<ol><li>Jarak fokus dalam cm: $f = 25\\text{ cm}$.</li><li>Hitung kuat lensa: $P = \\frac{100}{25} = +4\\text{ Dioptri}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Jika fokus dalam cm, langsung bagi dengan 100 ($P = 100/f$). Jika fokus dalam meter, $P = 1/f$.</div>`
    }
  },
  {
    id: "drill-cah-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Kacamata Penderita Rabun Jauh (Miopi)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seorang siswa penderita rabun jauh (miopi) tidak dapat melihat benda dengan jelas yang berada lebih jauh dari $PR = 200\\text{ cm}$ (titik jauhnya $2\\text{ meter}$). Agar siswa tersebut dapat melihat benda-benda yang sangat jauh ($s = \\infty$) secara normal, ia harus memakai kacamata dengan kuat lensa ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-0{,}5\\text{ Dioptri}$",
      "$-2{,}0\\text{ Dioptri}$",
      "$+0{,}5\\text{ Dioptri}$",
      "$-1{,}0\\text{ Dioptri}$",
      "$-5{,}0\\text{ Dioptri}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kacamata Rabun Jauh (Miopi):</strong><br>Lensa cekung negatif digunakan untuk membentuk bayangan maya benda jauh tak hingga ($s = \\infty$) tepat pada titik jauhnya ($s' = -PR$):<br>$$P = -\\frac{100}{PR\\text{ (cm)}} = -\\frac{1}{PR\\text{ (meter)}}$$</div>`,
      steps: `<ol><li>Titik jauh: $PR = 200\\text{ cm} = 2\\text{ m}$.</li><li>Hitung kuat lensa kacamata: $P = -\\frac{100}{200} = -0{,}5\\text{ Dioptri}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Miopi selalu butuh lensa minus (cekung). Ingat rumus kilat: $P = -100/PR$.</div>`
    }
  },
  {
    id: "drill-cah-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Perbesaran Lup Mata Tanpa Akomodasi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Seorang tukang arloji memeriksa komponen jam tangan kecil menggunakan sebuah lup yang berjarak fokus $f = 5\\text{ cm}$. Jika titik dekat normal mata tukang arloji adalah $s_n = 25\\text{ cm}$ dan ia mengamati dengan mata rileks tanpa akomodasi, maka perbesaran anguler lup tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5\\text{ kali}$",
      "$6\\text{ kali}$",
      "$4\\text{ kali}$",
      "$2{,}5\\text{ kali}$",
      "$10\\text{ kali}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Perbesaran Sudut Lup (Kaca Pembesar):</strong><br>• Mata <strong>tanpa akomodasi</strong> (rileks): $M = \\frac{s_n}{f}$<br>• Mata <strong>berakomodasi maksimum</strong>: $M = \\frac{s_n}{f} + 1$</div>`,
      steps: `<ol><li>Kondisi mata: tanpa akomodasi.</li><li>Gunakan rumus tanpa akomodasi: $M = \\frac{s_n}{f} = \\frac{25\\text{ cm}}{5\\text{ cm}} = 5\\text{ kali}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menambahkan $+1$ saat mata rileks. Penambahan $+1$ hanya dilakukan jika ada keterangan \"akomodasi maksimum\".</div>`
    }
  },
  {
    id: "drill-cah-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-gel",
    subTopicId: "fis-gel-2",
    category: "Interferensi Celah Ganda Young",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Pada eksperimen interferensi celah ganda Young, jarak antara kedua celah adalah $d = 0{,}2\\text{ mm}$ dan layar diletakkan pada jarak $L = 1\\text{ meter}$ di belakang celah. Jika cahaya monokromatik yang digunakan memiliki panjang gelombang $\\lambda = 500\\text{ nm}$ ($5 \\times 10^{-7}\\text{ m}$), maka jarak antara dua garis terang yang berdekatan ($\\Delta y$) pada layar adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}5\\text{ mm}$",
      "$1{,}0\\text{ mm}$",
      "$5{,}0\\text{ mm}$",
      "$0{,}25\\text{ mm}$",
      "$25\\text{ mm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Jarak Antar-Garis Terang Celah Ganda:</strong><br>Jarak pisah antara dua pola terang berurutan ($\Delta y$) memenuhi persamaan:<br>$$\\frac{d \\cdot \\Delta y}{L} = \\lambda \\implies \\Delta y = \\frac{\\lambda L}{d}$$</div>`,
      steps: `<ol><li>Samakan semua satuan ke meter:<br>• $d = 0{,}2\\text{ mm} = 2 \\times 10^{-4}\\text{ m}$<br>• $L = 1\\text{ m}$<br>• $\\lambda = 5 \\times 10^{-7}\\text{ m}$</li><li>Hitung $\\Delta y$:<br>$$\\Delta y = \\frac{(5 \\times 10^{-7}) \\times 1}{2 \\times 10^{-4}} = 2{,}5 \\times 10^{-3}\\text{ m} = 2{,}5\\text{ mm}$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Selalu konversikan semua data ($\text{mm}$, $\text{nm}$, $\text{cm}$) ke meter terlebih dahulu sebelum melakukan pembagian ordo pangkat.</div>`
    }
  },

  // ==========================================================================
  // DINAMIKA ROTASI (fis-din-3)
  // ==========================================================================
  {
    id: "drill-rot-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Momen Gaya (Torsi) Gaya Bersudut",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah batang homogen dengan panjang $r = 2\\text{ meter}$ dapat berputar bebas pada poros di salah satu ujungnya. Sebuah gaya $F = 30\\text{ N}$ ditarik pada ujung bebas batang dengan membentuk sudut $\\theta = 30^\\circ$ terhadap batang ($\\sin 30^\\circ = 0{,}5$). Besar momen gaya (torsi) yang bekerja pada batang tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$30\\text{ N}\\cdot\\text{m}$",
      "$60\\text{ N}\\cdot\\text{m}$",
      "$15\\text{ N}\\cdot\\text{m}$",
      "$30\\sqrt{3}\\text{ N}\\cdot\\text{m}$",
      "$45\\text{ N}\\cdot\\text{m}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Definisi Momen Gaya (Torsi):</strong><br>Momen gaya adalah hasil kali silang antara lengan gaya dan komponen gaya yang tegak lurus terhadap lengan:<br>$$\\tau = r \\cdot F \\sin \\theta$$</div>`,
      steps: `<ol><li>Identifikasi nilai: $r = 2\\text{ m}$, $F = 30\\text{ N}$, $\\theta = 30^\\circ$.</li><li>Komponen gaya tegak lurus: $F_{\\perp} = F \\sin 30^\\circ = 30 \\times 0{,}5 = 15\\text{ N}$.</li><li>Torsi: $\\tau = r \\times F_{\\perp} = 2 \\times 15 = 30\\text{ N}\\cdot\\text{m}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Mengabaikan faktor sudut $\\sin\\theta$ sehingga menghitung langsung $2 \\times 30 = 60\\text{ N}\\cdot\\text{m}$. Komponen gaya yang sejajar batang tidak menghasilkan torsi!</div>`
    }
  },
  {
    id: "drill-rot-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Perbandingan Momen Inersia Silinder vs Bola Pejal",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah silinder pejal dan sebuah bola pejal memiliki massa ($M$) dan jari-jari ($R$) yang sama persis. Perbandingan momen inersia silinder pejal terhadap momen inersia bola pejal ($I_{\\text{silinder}} : I_{\\text{bola}}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$5 : 4$",
      "$4 : 5$",
      "$2 : 5$",
      "$1 : 2$",
      "$3 : 2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Konstanta Momen Inersia Benda Pejal Baku:</strong><br>• Silinder pejal homogen: $I_{\\text{silinder}} = \\frac{1}{2} M R^2 = 0{,}5 M R^2$<br>• Bola pejal homogen: $I_{\\text{bola}} = \\frac{2}{5} M R^2 = 0{,}4 M R^2$</div>`,
      steps: `<ol><li>Bandingkan koefisien bentuknya:<br>$$\\frac{I_{\\text{silinder}}}{I_{\\text{bola}}} = \\frac{\\frac{1}{2}}{\\frac{2}{5}} = \\frac{1}{2} \\times \\frac{5}{2} = \\frac{5}{4}$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Ingat fraksi bentuk benda berotasi:<br>• Cincin/Silinder Berongga: $k = 1$<br>• Silinder Pejal: $k = 1/2 = 0{,}5$<br>• Bola Berongga: $k = 2/3 \\approx 0{,}67$<br>• Bola Pejal: $k = 2/5 = 0{,}4$</div>`
    }
  },
  {
    id: "drill-rot-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Teorema Sumbu Sejajar Momen Inersia",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah batang silinder homogen bermassa $M$ dan panjang $L$ memiliki momen inersia terhadap poros yang melalui pusat massanya sebesar $I_{\\text{pm}} = \\frac{1}{12} M L^2$. Berdasarkan teorema sumbu sejajar, momen inersia batang jika diputar pada salah satu ujungnya adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{1}{3} M L^2$",
      "$\\frac{1}{4} M L^2$",
      "$\\frac{1}{6} M L^2$",
      "$\\frac{5}{12} M L^2$",
      "$\\frac{2}{3} M L^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Teorema Sumbu Sejajar (Steiner):</strong><br>Momen inersia terhadap sumbu sejajar yang berjarak $d$ dari pusat massa adalah:<br>$$I = I_{\\text{pm}} + M d^2$$</div>`,
      steps: `<ol><li>Jarak dari pusat massa (tengah batang) ke ujung batang: $d = \\frac{1}{2}L$.</li><li>Terapkan teorema sumbu sejajar:<br>$$I = \\frac{1}{12}ML^2 + M\\left(\\frac{1}{2}L\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2$$</li><li>Samakan penyebut:<br>$$I = \\left(\\frac{1}{12} + \\frac{3}{12}\\right)ML^2 = \\frac{4}{12}ML^2 = \\frac{1}{3}ML^2$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Pasangan Rumus Batang:</strong> Poros di tengah $\\implies \\frac{1}{12}ML^2$. Poros di ujung $\\implies \\frac{1}{3}ML^2$.</div>`
    }
  },
  {
    id: "drill-rot-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Hukum II Newton Rotasi dan Percepatan Sudut",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 4\\text{ kg}$ dan jari-jari $R = 0{,}5\\text{ m}$ ($I = \\frac{1}{2}MR^2$). Roda tersebut mula-mula diam, kemudian diberi momen gaya konstan sebesar $\\tau = 6\\text{ N}\\cdot\\text{m}$. Percepatan sudut ($\\alpha$) yang dialami roda gila tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\text{ rad/s}^2$",
      "$6\\text{ rad/s}^2$",
      "$24\\text{ rad/s}^2$",
      "$3\\text{ rad/s}^2$",
      "$8\\text{ rad/s}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum II Newton untuk Rotasi:</strong><br>$$\\Sigma \\tau = I \\cdot \\alpha \\implies \\alpha = \\frac{\\Sigma \\tau}{I}$$</div>`,
      steps: `<ol><li>Hitung momen inersia silinder pejal:<br>$$I = \\frac{1}{2} M R^2 = \\frac{1}{2} \\times 4 \\times (0{,}5)^2 = 2 \\times 0{,}25 = 0{,}5\\text{ kg}\\cdot\\text{m}^2$$</li><li>Hitung percepatan sudut:<br>$$\\alpha = \\frac{\\tau}{I} = \\frac{6\\text{ N}\\cdot\\text{m}}{0{,}5\\text{ kg}\\cdot\\text{m}^2} = 12\\text{ rad/s}^2$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Analogi Gerak:</strong> Torsi $\\tau$ analog dengan gaya $F$, momen inersia $I$ analog dengan massa $m$, dan percepatan sudut $\\alpha$ analog dengan percepatan linier $a$ ($F = ma \\leftrightarrow \\tau = I\\alpha$).</div>`
    }
  },
  {
    id: "drill-rot-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Percepatan Menggelinding Silinder Pejal pada Bidang Miring",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah silinder pejal ($I = \\frac{1}{2}mR^2$) dilepaskan dari keadaan diam di puncak bidang miring kasar bersudut kemiringan $\\theta$ terhadap horizontal. Jika silinder menggelinding murni tanpa slip dan percepatan gravitasi adalah $g$, maka percepatan linier ($a$) silinder pejal tersebut menuruni bidang miring adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\frac{2}{3} g \\sin \\theta$",
      "$\\frac{1}{2} g \\sin \\theta$",
      "$\\frac{5}{7} g \\sin \\theta$",
      "$g \\sin \\theta$",
      "$\\frac{3}{4} g \\sin \\theta$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Percepatan Benda Menggelinding Murni pada Bidang Miring:</strong><br>$$a = \\frac{g \\sin \\theta}{1 + k}$$<br>dengan $k$ konstanta bentuk momen inersia ($I = k m R^2$).</div>`,
      steps: `<ol><li>Untuk silinder pejal: $I = \\frac{1}{2} m R^2 \\implies k = \\frac{1}{2} = 0{,}5$.</li><li>Substitusi nilai $k$ ke rumus umum:<br>$$a = \\frac{g \\sin \\theta}{1 + \\frac{1}{2}} = \\frac{g \\sin \\theta}{\\frac{3}{2}} = \\frac{2}{3} g \\sin \\theta$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perbedaan Luncur vs Gelinding:</strong> Jika bidang licin (meluncur tanpa rotasi), $a = g \\sin\\theta$. Jika menggelinding, inersia rotasi menahan laju sehingga $a = \\frac{g \\sin\\theta}{1 + k} < g \\sin\\theta$.</div>`
    }
  },
  {
    id: "drill-rot-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-din",
    subTopicId: "fis-din-3",
    category: "Hukum Kekekalan Momentum Sudut",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Seorang atlet seluncur es berputar dengan kecepatan sudut $\\omega_1 = 3\\text{ rad/s}$ saat merentangkan kedua tangannya, di mana momen inersia tubuhnya saat itu adalah $I_1 = 4\\text{ kg}\\cdot\\text{m}^2$. Ketika atlet tersebut melipat kedua tangannya merapat ke dada, momen inersianya berkurang menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$. Jika gesekan es diabaikan, kecepatan sudut putaran atlet sekarang ($\\omega_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$8\\text{ rad/s}$",
      "$6\\text{ rad/s}$",
      "$4\\text{ rad/s}$",
      "$12\\text{ rad/s}$",
      "$2\\text{ rad/s}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Kekekalan Momentum Sudut:</strong><br>Jika tidak ada torsi luar yang bekerja pada sistem ($\\Sigma \\tau_{\\text{eksternal}} = 0$), maka momentum sudut sistem kekal:<br>$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$</div>`,
      steps: `<ol><li>Momentum sudut awal: $L_1 = I_1 \\omega_1 = 4 \\times 3 = 12\\text{ kg}\\cdot\\text{m}^2\\text{/s}$.</li><li>Karena momentum sudut kekal: $I_2 \\omega_2 = 12$.</li><li>Kecepatan sudut baru: $\\omega_2 = \\frac{12}{1{,}5} = 8\\text{ rad/s}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Prinsip Fisika Riil:</strong> Saat atlet melipat tangan, jari-jari massa terhadap sumbu putar mengecil $\\implies$ momen inersia $I$ mengecil $\\implies$ kecepatan putar $\\omega$ melonjak naik drastis!</div>`
    }
  },

  // ==========================================================================
  // KALOR DAN PERPINDAHANNYA (fis-ter-1)
  // ==========================================================================
  {
    id: "drill-kal-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Kalor Pemanasan dan Kenaikan Suhu",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebanyak $m = 3\\text{ kg}$ air bersuhu $25^\\circ\\text{C}$ dipanaskan hingga suhunya mencapai $75^\\circ\\text{C}$. Jika kalor jenis air adalah $c = 4200\\text{ J/kg}^\\circ\\text{C}$, jumlah kalor yang diserap oleh air tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$630\\text{ kJ}$",
      "$315\\text{ kJ}$",
      "$420\\text{ kJ}$",
      "$540\\text{ kJ}$",
      "$63\\text{ kJ}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Kalor Sensibel:</strong><br>Kalor yang dibutuhkan untuk menaikkan suhu zat tanpa mengubah wujud:<br>$$Q = m \\cdot c \\cdot \\Delta T$$</div>`,
      steps: `<ol><li>Perubahan suhu: $\\Delta T = 75^\\circ\\text{C} - 25^\\circ\\text{C} = 50^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = 3\\text{ kg} \\times 4200\\text{ J/kg}^\\circ\\text{C} \\times 50^\\circ\\text{C} = 630.000\\text{ J}$.</li><li>Konversi ke kilojoule: $Q = 630\\text{ kJ}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perhatikan Satuan:</strong> Periksa apakah opsi meminta Joule atau kilojoule ($1\\text{ kJ} = 1000\\text{ J}$).</div>`
    }
  },
  {
    id: "drill-kal-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Kalor Laten Peleburan Zat",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebongkah es bermassa $m = 500\\text{ gram}$ pada suhu titik leburnya $0^\\circ\\text{C}$ hendak dicairkan seluruhnya menjadi air bersuhu $0^\\circ\\text{C}$. Jika kalor lebur es adalah $L_f = 336.000\\text{ J/kg}$, banyak kalor yang diperlukan dalam proses peleburan tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$168\\text{ kJ}$",
      "$336\\text{ kJ}$",
      "$84\\text{ kJ}$",
      "$168.000\\text{ kJ}$",
      "$672\\text{ kJ}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kalor Laten Perubahan Wujud:</strong><br>Saat zat melebur atau membeku pada suhu tetap, kalor yang diserap/dilepas tidak menaikkan suhu:<br>$$Q = m \\cdot L_f$$</div>`,
      steps: `<ol><li>Konversi massa ke kg: $m = 500\\text{ g} = 0{,}5\\text{ kg}$.</li><li>Hitung kalor lebur: $Q = 0{,}5\\text{ kg} \\times 336.000\\text{ J/kg} = 168.000\\text{ J} = 168\\text{ kJ}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Konsep Kunci:</strong> Pada peristiwa perubahan wujud zat, suhu zat selalu konstan (tidak ada $\\Delta T$). Jangan masukkan kalor jenis $c$ saat zat sedang melebur!</div>`
    }
  },
  {
    id: "drill-kal-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Pemuaian Luas Keping Logam",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah pelat kuningan memiliki luas mula-mula $A_0 = 2\\text{ m}^2$ pada suhu $20^\\circ\\text{C}$. Koefisien muai panjang kuningan adalah $\\alpha = 2 \\times 10^{-5}/^\\circ\\text{C}$. Jika pelat tersebut dipanaskan hingga suhunya menjadi $70^\\circ\\text{C}$, pertambahan luas pelat kuningan tersebut ($\\Delta A$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4 \\times 10^{-3}\\text{ m}^2$",
      "$2 \\times 10^{-3}\\text{ m}^2$",
      "$8 \\times 10^{-3}\\text{ m}^2$",
      "$4 \\times 10^{-4}\\text{ m}^2$",
      "$1 \\times 10^{-3}\\text{ m}^2$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Koefisien Pemuaian:</strong><br>• Koefisien muai luas adalah dua kali koefisien muai panjang: $\\beta = 2\\alpha$<br>• Pertambahan luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T = A_0 \\cdot (2\\alpha) \\cdot \\Delta T$</div>`,
      steps: `<ol><li>Koefisien muai luas: $\\beta = 2 \\times (2 \\times 10^{-5}) = 4 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Kenaikan suhu: $\\Delta T = 70 - 20 = 50^\\circ\\text{C}$.</li><li>Pertambahan luas: $\\Delta A = 2 \\times (4 \\times 10^{-5}) \\times 50 = 400 \\times 10^{-5} = 4 \\times 10^{-3}\\text{ m}^2$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Hubungan 1-2-3 Dimensi:</strong><br>Panjang $\\implies \\alpha$<br>Luas $\\implies \\beta = 2\\alpha$<br>Volume $\\implies \\gamma = 3\\alpha$</div>`
    }
  },
  {
    id: "drill-kal-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Pemuaian Volume Kubus Logam",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah kubus tembaga memiliki volume awal $V_0 = 1000\\text{ cm}^3$ pada suhu $0^\\circ\\text{C}$. Jika koefisien muai panjang tembaga adalah $\\alpha = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$, maka koefisien muai volume ($\\gamma$) dan pertambahan volume kubus ($\\Delta V$) saat dipanaskan hingga $100^\\circ\\text{C}$ berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 1{,}7\\text{ cm}^3$",
      "$\\gamma = 3{,}4 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 3{,}4\\text{ cm}^3$",
      "$\\gamma = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 51\\text{ cm}^3$",
      "$\\gamma = 1{,}7 \\times 10^{-5}/^\\circ\\text{C}$ dan $\\Delta V = 5{,}1\\text{ cm}^3$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Pemuaian Volume Zat Padat:</strong><br>$$\\gamma = 3\\alpha$$<br>$$\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T$$</div>`,
      steps: `<ol><li>Hitung $\\gamma$: $\\gamma = 3 \\times 1{,}7 \\times 10^{-5} = 5{,}1 \\times 10^{-5}/^\\circ\\text{C}$.</li><li>Hitung $\\Delta V$: $\\Delta V = 1000 \\times (5{,}1 \\times 10^{-5}) \\times 100 = 5{,}1\\text{ cm}^3$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Umum:</strong> Menggunakan nilai $\\alpha$ langsung untuk menghitung pemuaian ruang/volume tanpa mengalikan dengan 3.</div>`
    }
  },
  {
    id: "drill-kal-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Asas Black Campuran Cairan Sejenis",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebanyak $100\\text{ gram}$ air bersuhu $90^\\circ\\text{C}$ dicampurkan dengan $200\\text{ gram}$ air bersuhu $30^\\circ\\text{C}$ di dalam sebuah wadah terisolasi termal ideal (wadah tidak menyerap kalor). Suhu akhir kesetimbangan termal campuran ($T_c$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$55^\\circ\\text{C}$",
      "$40^\\circ\\text{C}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Asas Black:</strong><br>Kalor yang dilepas oleh zat bersuhu lebih tinggi sama dengan kalor yang diserap oleh zat bersuhu lebih rendah:<br>$$Q_{\\text{lepas}} = Q_{\\text{terima}}$$</div>`,
      steps: `<ol><li>Zat sejenis (air) memiliki kalor jenis $c$ yang sama sehingga $c$ dapat dieliminasi.</li><li>Persamaan Asas Black: $m_1 (T_1 - T_c) = m_2 (T_c - T_2)$.</li><li>Substitusi data: $100(90 - T_c) = 200(T_c - 30)$.</li><li>Bagi kedua ruas dengan 100: $90 - T_c = 2(T_c - 30) = 2T_c - 60$.</li><li>Pindahkan suku: $90 + 60 = 2T_c + T_c \\implies 150 = 3T_c \\implies T_c = 50^\\circ\\text{C}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Rumus Cepat Cairan Sejenis:</strong> Rata-rata tertimbang massa: $T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2} = \\frac{100(90) + 200(30)}{300} = \\frac{15000}{300} = 50^\\circ\\text{C}$.</div>`
    }
  },
  {
    id: "drill-kal-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Laju Konduksi Kalor Batang Logam",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah batang tembaga memiliki panjang $L = 50\\text{ cm} = 0{,}5\\text{ m}$ dan luas penampang $A = 4\\text{ cm}^2 = 4 \\times 10^{-4}\\text{ m}^2$. Konduktivitas termal tembaga adalah $k = 400\\text{ W/m}\\cdot\\text{K}$. Jika perbedaan suhu antara kedua ujung batang dipertahankan sebesar $\\Delta T = 100^\\circ\\text{C}$, maka laju perpindahan kalor secara konduksi ($H$) melalui batang tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$32\\text{ Watt}$",
      "$16\\text{ Watt}$",
      "$64\\text{ Watt}$",
      "$8\\text{ Watt}$",
      "$320\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Laju Konduksi Termal Fourier:</strong><br>Laju rambatan kalor per detik berbanding lurus dengan konduktivitas termal, luas penampang, dan gradien suhu:<br>$$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$</div>`,
      steps: `<ol><li>Pembilang: $k \\cdot A \\cdot \\Delta T = 400 \\times (4 \\times 10^{-4}) \\times 100 = 16\\text{ W}\\cdot\\text{m}$.</li><li>Penyebut: $L = 0{,}5\\text{ m}$.</li><li>Laju kalor: $H = \\frac{16}{0{,}5} = 32\\text{ Watt}$ (Joule/detik).</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Konversi Luas $A$:</strong> $1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}$. Kesalahan umum lupa mengkuadratkan faktor $10^{-2}$.</div>`
    }
  },
  {
    id: "drill-kal-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Daya Radiasi Termal Stefan-Boltzmann",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah filamen pemanas berbentuk silinder memancarkan daya radiasi sebesar $P_1 = 50\\text{ Watt}$ ketika suhunya berada pada $T_1 = 300\\text{ K}$. Jika suhu filamen tersebut dinaikkan menjadi $T_2 = 600\\text{ K}$, dengan luas permukaan dan emisivitas tetap, maka daya radiasi yang dipancarkan filamen sekarang ($P_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$800\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$1600\\text{ Watt}$",
      "$100\\text{ Watt}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Radiasi Stefan-Boltzmann:</strong><br>Daya radiasi kalor sebanding dengan <strong>pangkat empat</strong> dari suhu mutlaknya:<br>$$P = e \\cdot \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_2}{P_1} = \\left( \\frac{T_2}{T_1} \\right)^4$$</div>`,
      steps: `<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Pangkat empatkan perbandingan: $2^4 = 16$.</li><li>Daya baru: $P_2 = 16 \\times P_1 = 16 \\times 50\\text{ W} = 800\\text{ Watt}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Pangkat Empat Wajib Diingat:</strong> Kenaikan suhu $2\\times \\implies$ daya radiasi naik $2^4 = 16\\times$. Kenaikan suhu $3\\times \\implies$ daya radiasi naik $3^4 = 81\\times$!</div>`
    }
  },
  {
    id: "drill-kal-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-1",
    category: "Kapasitas Kalor Benda",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu balok logam memiliki kapasitas kalor $C = 250\\text{ J/}^\circ\\text{C}$. Berapakah jumlah kalor yang dibutuhkan untuk memanaskan balok logam tersebut dari suhu $20^\\circ\\text{C}$ hingga menjadi $60^\\circ\\text{C}$?`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$10.000\\text{ Joule}$",
      "$5.000\\text{ Joule}$",
      "$15.000\\text{ Joule}$",
      "$2.500\\text{ Joule}$",
      "$25.000\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Kapasitas Kalor ($C$) dan Kalor ($Q$):</strong><br>Kapasitas kalor adalah kemampuan seluruh benda menyerap kalor per derajat kenaikan suhu ($C = m \\cdot c$):<br>$$Q = C \\cdot \\Delta T$$</div>`,
      steps: `<ol><li>Kenaikan suhu: $\\Delta T = 60^\\circ\\text{C} - 20^\\circ\\text{C} = 40^\\circ\\text{C}$.</li><li>Hitung kalor: $Q = C \\cdot \\Delta T = 250\\text{ J/}^\circ\\text{C} \\times 40^\\circ\\text{C} = 10.000\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Bedakan $c$ dan $C$:</strong> Kalor jenis ($c$) memiliki satuan $\\text{J/kg}^\\circ\\text{C}$ (tergantung massa). Kapasitas kalor ($C$) bersatuan $\\text{J/}^\circ\\text{C}$ (sudah mencakup massa benda).</div>`
    }
  },

  // ==========================================================================
  // PEMANASAN GLOBAL & RADIASI (fis-ter-2)
  // ==========================================================================
  {
    id: "drill-pem-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Hukum Pergeseran Wien",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Permukaan sebuah bintang memancarkan radiasi benda hitam dengan suhu permukaan $T = 6000\\text{ K}$. Jika konstanta pergeseran Wien adalah $C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, maka panjang gelombang di mana intensitas radiasi bernilai maksimum ($\\lambda_{\\max}$) adalah sekitar ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$483\\text{ nm}$ ($4{,}83 \\times 10^{-7}\\text{ m}$)",
      "$580\\text{ nm}$ ($5{,}80 \\times 10^{-7}\\text{ m}$)",
      "$290\\text{ nm}$ ($2{,}90 \\times 10^{-7}\\text{ m}$)",
      "$600\\text{ nm}$ ($6{,}00 \\times 10^{-7}\\text{ m}$)",
      "$350\\text{ nm}$ ($3{,}50 \\times 10^{-7}\\text{ m}$)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Pergeseran Wien:</strong><br>Panjang gelombang intensitas maksimum berbanding terbalik dengan suhu mutlak benda:<br>$$\\lambda_{\\max} \\cdot T = C = 2{,}9 \\times 10^{-3}\\text{ m}\\cdot\\text{K} \\implies \\lambda_{\\max} = \\frac{C}{T}$$</div>`,
      steps: `<ol><li>Substitusi data: $\\lambda_{\\max} = \\frac{2{,}9 \\times 10^{-3}}{6000} = \\frac{2{,}9 \\times 10^{-3}}{6 \\times 10^3}$.</li><li>$\\lambda_{\\max} \\approx 0{,}4833 \\times 10^{-6}\\text{ m} = 483 \\times 10^{-9}\\text{ m} = 483\\text{ nm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Karakteristik Fisik:</strong> Makin panas suatu benda, warnanya bergeser dari merah $\\to$ kuning $\\to$ putih/biru (panjang gelombangnya semakin pendek!).</div>`
    }
  },
  {
    id: "drill-pem-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Pergeseran Puncak Emisi Benda Memanas",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu benda hitam pada suhu $T_1$ memiliki panjang gelombang pancaran maksimum $\\lambda_1 = 800\\text{ nm}$. Ketika suhu mutlak benda tersebut dinaikkan menjadi dua kali lipat ($T_2 = 2T_1$), panjang gelombang pancaran maksimumnya ($\\lambda_2$) bergeser menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$400\\text{ nm}$",
      "$1600\\text{ nm}$",
      "$800\\text{ nm}$",
      "$200\\text{ nm}$",
      "$600\\text{ nm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Perbandingan Hukum Wien:</strong><br>$$\\lambda_1 T_1 = \\lambda_2 T_2 \\implies \\frac{\\lambda_2}{\\lambda_1} = \\frac{T_1}{T_2}$$</div>`,
      steps: `<ol><li>Suhu naik $2\\times$ lipat: $\\frac{T_1}{T_2} = \\frac{1}{2}$.</li><li>Maka panjang gelombang menjadi setengahnya: $\\lambda_2 = \\frac{1}{2} \\lambda_1 = \\frac{1}{2} \\times 800\\text{ nm} = 400\\text{ nm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Ingat Hubungan Terbalik:</strong> Suhu naik $\\implies$ panjang gelombang <em>mengecil/memendek</em>, bukan membesar.</div>`
    }
  },
  {
    id: "drill-pem-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Mekanisme Fisik Efek Rumah Kaca",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Secara fisis, gas rumah kaca (seperti $CO_2$ dan $CH_4$) memicu peningkatan suhu rata-rata atmosfer bumi karena molekul gas-gas tersebut memiliki sifat ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Meneruskan cahaya tampak matahari, namun menyerap dan memancarkan kembali radiasi inframerah dari bumi",
      "Menyerap seluruh radiasi ultraviolet matahari dan mengubahnya menjadi energi mekanik",
      "Memantulkan seluruh cahaya tampak matahari kembali ke ruang angkasa",
      "Mencegah pelepasan gas oksigen ke atmosfer luar angkasa",
      "Menghasilkan energi panas sendiri melalui reaksi fusi nuklir alami di stratosfer"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Proses Fisik Efek Rumah Kaca:</strong><br>Radiasi matahari yang masuk sebagian besar berupa gelombang pendek (cahaya tampak) yang lolos melewati atmosfer. Permukaan bumi menyerap energi ini lalu memancarkannya kembali sebagai <strong>gelombang panjang (inframerah termal)</strong> yang diserap oleh gas rumah kaca sehingga terperangkap di atmosfer.</div>`,
      steps: `<ol><li>Gelombang masuk: Gelombang pendek / cahaya tampak (transparan bagi gas rumah kaca).</li><li>Gelombang terpancar dari bumi: Gelombang panjang / inframerah.</li><li>Peran gas rumah kaca: Mengabsorpsi radiasi inframerah dan memancarkannya kembali ke permukaan bumi.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Bedakan:</strong> Lapisan ozon ($O_3$) menyerap sinar Ultraviolet (UV). Gas rumah kaca ($CO_2, CH_4$) menyerap sinar Inframerah (panas).</div>`
    }
  },
  {
    id: "drill-pem-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Gas Rumah Kaca dengan GWP Tinggi",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Meskipun konsentrasinya di atmosfer lebih kecil daripada gas karbon dioksida ($CO_2$), gas metana ($CH_4$) menjadi perhatian besar dalam mitigasi pemanasan global karena ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "Memiliki potensi pemanasan global (GWP) per molekul yang jauh lebih tinggi daripada $CO_2$ dalam memerangkap panas",
      "Dapat merusak lapisan ozon stratosfer secara langsung",
      "Menyebabkan hujan asam sulfat pekat",
      "Menghalangi fotosintesis tanaman darat dan laut",
      "Dapat terbakar secara spontan di udara bebas pada suhu kamar"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Global Warming Potential (GWP):</strong><br>Metana ($CH_4$) memiliki indeks GWP sekitar 25–28 kali lebih kuat daripada $CO_2$ dalam kurun waktu 100 tahun dalam hal efektivitas penyerapan radiasi inframerah.</div>`,
      steps: `<ol><li>Molekul $CH_4$ memiliki ikatan kimia yang mampu bergetar dan mengabsorpsi spektrum gelombang inframerah termal secara sangat efektif.</li><li>Oleh sebab itu, penurunan emisi gas metana dari sektor limbah dan peternakan menjadi salah satu prioritas mitigasi iklim terpenting.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Catatan Konseptual:</strong> $CO_2$ adalah kontributor terbesar berdasarkan total volume emisi, tetapi $CH_4$ jauh lebih efektif memerangkap kalor per satu satuan molekul.</div>`
    }
  },
  {
    id: "drill-pem-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-2",
    category: "Perbandingan Emisi Radiasi Bintang",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua buah bintang $A$ dan $B$ berbentuk bola memiliki ukuran jari-jari yang sama dan dianggap memancar sebagai benda hitam ideal. Jika suhu permukaan bintang $A$ adalah $T_A = 4000\\text{ K}$ dan suhu permukaan bintang $B$ adalah $T_B = 8000\\text{ K}$, perbandingan daya total radiasi bintang $B$ terhadap bintang $A$ ($P_B : P_A$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$16 : 1$",
      "$2 : 1$",
      "$4 : 1$",
      "$8 : 1$",
      "$32 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Perbandingan Daya Radiasi Termal:</strong><br>$$P = \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_B}{P_A} = \\left( \\frac{T_B}{T_A} \\right)^4$$ (karena jari-jari dan luas permukaan sama).</div>`,
      steps: `<ol><li>Rasio suhu: $\\frac{T_B}{T_A} = \\frac{8000}{4000} = 2$.</li><li>Pangkat empatkan rasio suhu: $2^4 = 16$.</li><li>Maka perbandingan daya pancar: $P_B : P_A = 16 : 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Waspada:</strong> Siswa sering hanya mengkuadratkan ($2^2 = 4$) karena terbiasa dengan rumus luas lingkaran. Ingat Hukum Stefan-Boltzmann berpangkat empat ($T^4$).</div>`
    }
  },

  // ==========================================================================
  // GAS IDEAL (fis-ter-3)
  // ==========================================================================
  {
    id: "drill-gas-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Persamaan Gas Ideal pada Keadaan STP",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebanyak $n = 1\\text{ mol}$ gas ideal berada pada kondisi standar STP (suhu $T = 273\\text{ K}$, tekanan $P = 1\\text{ atm} = 1{,}013 \\times 10^5\\text{ Pa}$). Dengan konstanta gas umum $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, volume yang ditempati oleh gas ideal tersebut adalah mendekati ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$22{,}4\\text{ liter}$ ($0{,}0224\\text{ m}^3$)",
      "$11{,}2\\text{ liter}$ ($0{,}0112\\text{ m}^3$)",
      "$44{,}8\\text{ liter}$ ($0{,}0448\\text{ m}^3$)",
      "$1{,}0\\text{ liter}$ ($0{,}001\\text{ m}^3$)",
      "$24{,}5\\text{ liter}$ ($0{,}0245\\text{ m}^3$)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Persamaan Umum Gas Ideal:</strong><br>$$P \\cdot V = n \\cdot R \\cdot T \\implies V = \\frac{n R T}{P}$$</div>`,
      steps: `<ol><li>Substitusi data STP: $V = \\frac{1 \\times 8{,}314 \\times 273}{1{,}013 \\times 10^5} \\approx 0{,}0224\\text{ m}^3$.</li><li>Konversi ke liter ($1\\text{ m}^3 = 1000\\text{ liter}$): $V \\approx 22{,}4\\text{ liter}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Angka Standar Kimia & Fisika:</strong> Pada kondisi STP ($0^\\circ\\text{C}, 1\\text{ atm}$), volume 1 mol gas ideal selalu $22{,}4\\text{ L}$. Hafalkan angka ini!</div>`
    }
  },
  {
    id: "drill-gas-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Hukum Boyle (Proses Isotermal)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu gas ideal berada di dalam silinder berpenghisap dengan volume awal $V_1 = 2\\text{ liter}$ dan tekanan awal $P_1 = 3\\text{ atm}$. Jika penghisap ditekan perlahan pada suhu tetap (isotermal) sehingga volumenya menyusut menjadi $V_2 = 0{,}5\\text{ liter}$, tekanan gas sekarang ($P_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$12\\text{ atm}$",
      "$6\\text{ atm}$",
      "$1{,}5\\text{ atm}$",
      "$9\\text{ atm}$",
      "$0{,}75\\text{ atm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Boyle (Suhu Konstan):</strong><br>Hasil kali tekanan dan volume gas dalam ruang tertutup bernilai konstan:<br>$$P_1 \\cdot V_1 = P_2 \\cdot V_2 \\implies P_2 = \\frac{P_1 V_1}{V_2}$$</div>`,
      steps: `<ol><li>Identifikasi data: $P_1 = 3\\text{ atm}$, $V_1 = 2\\text{ L}$, $V_2 = 0{,}5\\text{ L}$.</li><li>Hitung tekanan akhir: $P_2 = \\frac{3 \\times 2}{0{,}5} = \\frac{6}{0{,}5} = 12\\text{ atm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Volume mengecil $4\\times$ (dari $2\\text{ L} \\to 0{,}5\\text{ L}$) $\implies$ tekanan otomatis melonjak naik $4\\times$ (dari $3\\text{ atm} \\to 12\\text{ atm}$).</div>`
    }
  },
  {
    id: "drill-gas-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Hukum Charles (Proses Isobarik)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah balon elastis berisi gas ideal dengan volume $V_1 = 3\\text{ liter}$ pada suhu ruang $27^\\circ\\text{C}$. Balon tersebut kemudian dipanaskan pada tekanan konstan (isobarik) hingga suhunya naik menjadi $127^\\circ\\text{C}$. Volume balon gas sekarang ($V_2$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4\\text{ liter}$",
      "$6\\text{ liter}$",
      "$5\\text{ liter}$",
      "$14{,}1\\text{ liter}$",
      "$3{,}5\\text{ liter}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Charles (Tekanan Konstan):</strong><br>Volume gas berbanding lurus dengan suhu mutlaknya (Kelvin):<br>$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = V_1 \\left( \\frac{T_2}{T_1} \\right)$$</div>`,
      steps: `<ol><li>Konversi suhu Celsius ke Kelvin wajib:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 127 + 273 = 400\\text{ K}$</li><li>Hitung volume baru: $V_2 = 3 \\times \\frac{400}{300} = 3 \\times \\frac{4}{3} = 4\\text{ liter}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Kesalahan Paling Fatal di Gas Ideal:</strong> Menggunakan suhu Celsius! $\\frac{127}{27} \\approx 4{,}7$ menghasilkan $14{,}1\\text{ L}$ yang salah total. Suhu gas WAJIB Kelvin ($+273$).</div>`
    }
  },
  {
    id: "drill-gas-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Hukum Gay-Lussac (Proses Isokhorik)",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Tekanan udara di dalam ban mobil pada pagi hari bersuhu $27^\\circ\\text{C}$ adalah $P_1 = 2\\text{ atm}$. Setelah melaju kencang di jalan tol pada siang hari, gesekan ban menyebabkan suhu udara di dalam ban naik menjadi $87^\\circ\\text{C}$. Dengan menganggap volume ban tidak memuai (isokhorik), tekanan udara di dalam ban tersebut sekarang adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$2{,}4\\text{ atm}$",
      "$3{,}2\\text{ atm}$",
      "$6{,}4\\text{ atm}$",
      "$2{,}2\\text{ atm}$",
      "$2{,}8\\text{ atm}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum Gay-Lussac (Volume Konstan):</strong><br>$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\left( \\frac{T_2}{T_1} \\right)$$</div>`,
      steps: `<ol><li>Ubah ke Kelvin:<br>• $T_1 = 27 + 273 = 300\\text{ K}$<br>• $T_2 = 87 + 273 = 360\\text{ K}$</li><li>Hitung tekanan: $P_2 = 2 \\times \\frac{360}{300} = 2 \\times 1{,}2 = 2{,}4\\text{ atm}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal 3 Hukum Gas:</strong><br>• Boyle: $T$ tetap ($P \\cdot V = C$)<br>• Charles: $P$ tetap ($V / T = C$)<br>• Gay-Lussac: $V$ tetap ($P / T = C$)</div>`
    }
  },
  {
    id: "drill-gas-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Energi Kinetik Rata-Rata Molekul Gas Monoatomik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Dua wadah tertutup $A$ dan $B$ memiliki volume dan tekanan yang berbeda. Wadah $A$ berisi gas helium ($M_r = 4$) dan wadah $B$ berisi gas neon ($M_r = 20$). Jika kedua gas berada pada suhu yang sama yaitu $T = 300\\text{ K}$, perbandingan energi kinetik translasi rata-rata satu molekul gas helium terhadap satu molekul gas neon ($\\overline{E_{kA}} : \\overline{E_{kB}}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1 : 1$",
      "$1 : 5$",
      "$5 : 1$",
      "$1 : 25$",
      "$2 : 5$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Energi Kinetik Rata-rata Molekul:</strong><br>$$\\overline{E_k} = \\frac{3}{2} k_B T$$<br>Energi kinetik rata-rata molekul gas ideal monoatomik <strong>hanya bergantung pada suhu mutlak ($T$)</strong> dan sama sekali tidak bergantung pada jenis gas maupun massa molar ($M_r$).</div>`,
      steps: `<ol><li>Kedua gas berada pada suhu yang sama: $T_A = T_B = 300\\text{ K}$.</li><li>Karena $\\overline{E_k} = \\frac{3}{2} k_B T$, maka $\\overline{E_{kA}} = \\overline{E_{kB}}$.</li><li>Perbandingannya adalah tepat $1 : 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Klasik UTBK:</strong> Siswa sering memasukkan rasio $M_r$ ($4 : 20$). Massa molar hanya memengaruhi <em>kecepatan</em> molekul ($v_{\\text{rms}}$), BUKAN energi kinetik rata-ratanya!</div>`
    }
  },
  {
    id: "drill-gas-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Energi Dalam Gas Ideal Monoatomik",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebanyak $n = 2\\text{ mol}$ gas ideal monoatomik berada di dalam tangki tertutup pada suhu mutlak $T = 300\\text{ K}$. Jika konstanta gas ideal adalah $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, besar energi dalam ($U$) sistem gas tersebut adalah mendekati ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$7483\\text{ Joule}$",
      "$4988\\text{ Joule}$",
      "$2494\\text{ Joule}$",
      "$14965\\text{ Joule}$",
      "$9976\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Energi Dalam Gas Ideal Monoatomik:</strong><br>$$U = \\frac{3}{2} n R T$$<br>Faktor derajat kebebasan untuk gas monoatomik (seperti He, Ne, Ar) adalah 3 derajat kebebasan translasi ($f = 3$).</div>`,
      steps: `<ol><li>Identifikasi data: $n = 2\\text{ mol}$, $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$, $T = 300\\text{ K}$.</li><li>Substitusi ke rumus energi dalam:<br>$$U = \\frac{3}{2} \\times 2 \\times 8{,}314 \\times 300$$</li><li>Sederhanakan: $U = 3 \\times 8{,}314 \\times 300 = 900 \\times 8{,}314 = 7482{,}6\\text{ J} \\approx 7483\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Ingat faktor $\\frac{3}{2}$ untuk energi dalam monoatomik ($U = \\frac{3}{2} n R T = \\frac{3}{2} P V$).</div>`
    }
  },
  {
    id: "drill-gas-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Kelajuan Efektif Molekul Gas (v_rms)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Kelajuan efektif molekul-molekul gas oksigen di dalam suatu tabung bersuhu mutlak $T_1 = 300\\text{ K}$ adalah $v_1 = 480\\text{ m/s}$. Agar kelajuan efektif molekul gas oksigen tersebut meningkat menjadi dua kali lipat semula ($v_2 = 960\\text{ m/s}$), suhu mutlak gas tersebut harus dinaikkan menjadi ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$1200\\text{ K}$",
      "$600\\text{ K}$",
      "$900\\text{ K}$",
      "$2400\\text{ K}$",
      "$1800\\text{ K}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kelajuan Efektif Molekul Gas Ideal:</strong><br>$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M_r}} \\implies v_{\\text{rms}} \\propto \\sqrt{T} \\implies T \\propto v_{\\text{rms}}^2$$</div>`,
      steps: `<ol><li>Perbandingan kelajuan efektif: $\\frac{v_2}{v_1} = 2$.</li><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\left(\\frac{v_2}{v_1}\\right)^2 = 2^2 = 4$.</li><li>Suhu akhir: $T_2 = 4 \\times T_1 = 4 \\times 300\\text{ K} = 1200\\text{ K}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Perhatikan Kuadrat:</strong> Untuk melipatduakan kelajuan molekul ($2\\times$), suhu harus dilipat-empatkan ($4\\times$) karena $v \\propto \\sqrt{T}$.</div>`
    }
  },
  {
    id: "drill-gas-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-3",
    category: "Perbandingan v_rms Berdasarkan Massa Molar",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Dua jenis gas ideal, yaitu gas Hidrogen ($M_r = 2\\text{ g/mol}$) dan gas Oksigen ($M_r = 32\\text{ g/mol}$), berada di dalam bejana berbeda pada suhu yang sama. Perbandingan kelajuan efektif molekul gas Hidrogen terhadap gas Oksigen ($v_{H_2} : v_{O_2}$) adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$4 : 1$",
      "$1 : 4$",
      "$16 : 1$",
      "$1 : 16$",
      "$2 : 1$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Kelajuan Efektif terhadap Massa Molar:</strong><br>Pada suhu yang sama, kelajuan efektif molekul berbanding terbalik dengan akar massa molarnya:<br>$$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} \\implies \\frac{v_1}{v_2} = \\sqrt{\\frac{M_{r2}}{M_{r1}}}$$</div>`,
      steps: `<ol><li>Perbandingan: $\\frac{v_{H_2}}{v_{O_2}} = \\sqrt{\\frac{M_{r, O_2}}{M_{r, H_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$.</li><li>Rasionya adalah $4 : 1$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Kaidah Fisik:</strong> Gas yang lebih ringan molekulnya bergerak jauh lebih lincah dan cepat dibandingkan gas yang berat pada suhu yang sama.</div>`
    }
  },

  // ==========================================================================
  // TERMODINAMIKA (fis-ter-4)
  // ==========================================================================
  {
    id: "drill-ter-01",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Usaha Luar Gas pada Proses Isobarik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu gas ideal dipanaskan pada tekanan tetap $P = 2 \\times 10^5\\text{ Pa}$ sehingga volumenya memuai dari $V_1 = 1{,}5\\text{ m}^3$ menjadi $V_2 = 3{,}0\\text{ m}^3$. Besar usaha luar ($W$) yang dilakukan oleh gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$300\\text{ kJ}$ ($3 \\times 10^5\\text{ J}$)",
      "$600\\text{ kJ}$ ($6 \\times 10^5\\text{ J}$)",
      "$150\\text{ kJ}$ ($1{,}5 \\times 10^5\\text{ J}$)",
      "$0\\text{ Joule}$",
      "$450\\text{ kJ}$ ($4{,}5 \\times 10^5\\text{ J}$)"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Usaha pada Proses Isobarik (Tekanan Tetap):</strong><br>$$W = P \\cdot \\Delta V = P(V_2 - V_1)$$</div>`,
      steps: `<ol><li>Perubahan volume: $\\Delta V = 3{,}0 - 1{,}5 = 1{,}5\\text{ m}^3$.</li><li>Hitung usaha: $W = (2 \\times 10^5\\text{ Pa}) \\times 1{,}5\\text{ m}^3 = 3 \\times 10^5\\text{ Joule} = 300\\text{ kJ}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Rumus usaha isobarik $W = P \\Delta V$ adalah dasar termodinamika paling sering keluar. Pastikan $P$ dalam $\\text{Pa}$ ($\text{N/m}^2$) dan $V$ dalam $\\text{m}^3$.</div>`
    }
  },
  {
    id: "drill-ter-02",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Karakteristik Usaha Proses Isokhorik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sejumlah gas ideal dipanaskan di dalam bejana baja kaku bervolume tetap $V = 5\\text{ liter}$. Jika tekanan gas meningkat dari $1\\text{ atm}$ menjadi $3\\text{ atm}$, besar usaha luar ($W$) yang dilakukan gas pada proses isokhorik tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0\\text{ Joule}$",
      "$10\\text{ Joule}$",
      "$15\\text{ Joule}$",
      "$1000\\text{ Joule}$",
      "$1500\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Kaidah Proses Isokhorik (Volume Tetap):</strong><br>Karena volume tidak mengalami perubahan sama sekali ($\\Delta V = 0$):<br>$$W = \\int P \\, dV = 0\\text{ Joule}$$</div>`,
      steps: `<ol><li>Bejana kaku bervolume tetap $\\implies \\Delta V = 0$.</li><li>Usaha gas: $W = 0\\text{ Joule}$.</li><li>Seluruh kalor yang masuk hanya digunakan untuk menaikkan energi dalam gas: $Q = \\Delta U$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Rumus Cepat Mutlak:</strong> Pada proses ISOKHORIK (volume tetap), usaha selalu NOL ($W = 0$). Jangan pernah buang waktu menghitung perkalian $P \\times V$!</div>`
    }
  },
  {
    id: "drill-ter-03",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Proses Isotermal dan Hukum I Termodinamika",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Suatu gas ideal mengalami ekspansi secara isotermal (pada suhu konstan) dengan menyerap kalor dari lingkungan sebesar $Q = 650\\text{ Joule}$. Besar usaha ($W$) yang dilakukan gas dan perubahan energi dalam ($\\Delta U$) berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$W = 650\\text{ J}$ dan $\\Delta U = 0$",
      "$W = 0$ dan $\\Delta U = 650\\text{ J}$",
      "$W = 325\\text{ J}$ dan $\\Delta U = 325\\text{ J}$",
      "$W = 650\\text{ J}$ dan $\\Delta U = 650\\text{ J}$",
      "$W = -650\\text{ J}$ dan $\\Delta U = 0$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hukum I Termodinamika pada Proses Isotermal:</strong><br>Suhu konstan $\\implies \\Delta T = 0 \\implies \\Delta U = 0$.<br>Maka menurut Hukum I: $Q = W + \\Delta U \\implies W = Q$.</div>`,
      steps: `<ol><li>Proses isotermal memiliki $\\Delta U = 0$.</li><li>Seluruh kalor yang diserap diubah menjadi usaha luar: $W = Q = 650\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Kaidah Identitas 4 Proses:</strong><br>• Isokhorik: $W = 0 \\implies Q = \\Delta U$<br>• Isotermal: $\\Delta U = 0 \\implies Q = W$<br>• Adiabatik: $Q = 0 \\implies W = -\\Delta U$</div>`
    }
  },
  {
    id: "drill-ter-04",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Proses Adiabatik",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Gas ideal di dalam silinder mengalami proses adiabatik (tidak ada pertukaran kalor antara sistem dan lingkungan, $Q = 0$). Jika gas tersebut melakukan usaha ke lingkungan sebesar $W = 400\\text{ Joule}$, maka perubahan energi dalam ($\\Delta U$) gas tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$-400\\text{ Joule}$",
      "$+400\\text{ Joule}$",
      "$0\\text{ Joule}$",
      "$+800\\text{ Joule}$",
      "$-800\\text{ Joule}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Proses Adiabatik ($Q = 0$):</strong><br>$$\\Delta U = Q - W \\implies \\Delta U = -W$$<br>Jika gas berekspansi melakukan usaha ($W > 0$), maka energi dalamnya berkurang (suhu gas turun).</div>`,
      steps: `<ol><li>$Q = 0$, $W = +400\\text{ J}$.</li><li>$\\Delta U = -W = -400\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Fenomena Sehari-hari:</strong> Udara yang keluar dari tabung gas bertekanan tinggi saat disemprotkan terasa sangat dingin karena terjadi pemuaian adiabatik (usaha dilakukan dengan mengorbankan energi dalam gas).</div>`
    }
  },
  {
    id: "drill-ter-05",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Efisiensi Mesin Kalor Carnot",
    difficulty: "mudah",
    difficultyLabel: "Mudah",
    statement: `Sebuah mesin kalor Carnot bekerja di antara reservoir suhu tinggi $T_1 = 500\\text{ K}$ dan reservoir suhu rendah $T_2 = 300\\text{ K}$. Efisiensi termal maksimum ($\\eta$) dari mesin Carnot tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$40\\%$",
      "$60\\%$",
      "$20\\%$",
      "$30\\%$",
      "$50\\%$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Efisiensi Mesin Kalor Carnot:</strong><br>$$\\eta = \\left( 1 - \\frac{T_2}{T_1} \\right) \\times 100\\% = \\left( \\frac{T_1 - T_2}{T_1} \\right) \\times 100\\%$$<br>dengan $T_1$ reservoir suhu tinggi dan $T_2$ reservoir suhu rendah (wajib Kelvin!).</div>`,
      steps: `<ol><li>Hitung selisih suhu: $T_1 - T_2 = 500 - 300 = 200\\text{ K}$.</li><li>Hitung efisiensi: $\\eta = \\frac{200}{500} \\times 100\\% = \\frac{2}{5} \\times 100\\% = 40\\%$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Tips Menghafal:</strong> Efisiensi Carnot adalah \"selisih dibagi suhu tinggi\": $\\eta = \\frac{T_{\\text{tinggi}} - T_{\\text{rendah}}}{T_{\\text{tinggi}}}$.</div>`
    }
  },
  {
    id: "drill-ter-06",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Usaha dan Kalor Dibuang Mesin Kalor",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah mesin kalor memiliki efisiensi termal $30\\%$. Dalam setiap siklusnya, mesin tersebut menyerap kalor sebesar $Q_1 = 2000\\text{ Joule}$ dari reservoir panas. Besar usaha yang dihasilkan ($W$) dan kalor yang dibuang ke reservoir dingin ($Q_2$) dalam satu siklus berturut-turut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$W = 600\\text{ J}$ dan $Q_2 = 1400\\text{ J}$",
      "$W = 1400\\text{ J}$ dan $Q_2 = 600\\text{ J}$",
      "$W = 600\\text{ J}$ dan $Q_2 = 2000\\text{ J}$",
      "$W = 300\\text{ J}$ dan $Q_2 = 1700\\text{ J}$",
      "$W = 2000\\text{ J}$ dan $Q_2 = 1400\\text{ J}$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Hubungan Usaha dan Kalor Mesin:</strong><br>• $W = \\eta \\cdot Q_1$<br>• Menurut kekekalan energi: $Q_1 = W + Q_2 \\implies Q_2 = Q_1 - W$</div>`,
      steps: `<ol><li>Hitung usaha yang dihasilkan: $W = 30\\% \\times 2000\\text{ J} = 0{,}3 \\times 2000 = 600\\text{ Joule}$.</li><li>Hitung kalor yang dibuang: $Q_2 = 2000 - 600 = 1400\\text{ Joule}$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Kekekalan Energi Mesin:</strong> Kalor yang masuk ($Q_1$) selalu terbagi menjadi dua: yang menjadi kerja bermanfaat ($W$) dan yang terbuang sia-sia ($Q_2$). $Q_1 = W + Q_2$.</div>`
    }
  },
  {
    id: "drill-ter-07",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Jebakan Satuan Suhu Mesin Carnot",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Suatu mesin kalor Carnot bekerja di antara reservoir panas bersuhu $327^\\circ\\text{C}$ dan reservoir dingin bersuhu $27^\\circ\\text{C}$. Efisiensi mesin Carnot tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$50\\%$",
      "$91{,}7\\%$",
      "$40\\%$",
      "$60\\%$",
      "$25\\%$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Peringatan Mutlak Suhu Carnot:</strong><br>Suhu pada rumus efisiensi Carnot <strong>HARUS</strong> dalam skala Kelvin mutlak, tidak boleh menggunakan derajat Celsius!<br>$$T\\text{ (K)} = T\\text{ (}^\\circ\\text{C)} + 273$$</div>`,
      steps: `<ol><li>Ubah ke Kelvin:<br>• $T_1 = 327 + 273 = 600\\text{ K}$<br>• $T_2 = 27 + 273 = 300\\text{ K}$</li><li>Hitung efisiensi Carnot:<br>$$\\eta = \\frac{T_1 - T_2}{T_1} \\times 100\\% = \\frac{600 - 300}{600} \\times 100\\% = \\frac{300}{600} \\times 100\\% = 50\\%$$</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Jebakan Paling Populer di Soal Ujian:</strong> Menghitung dengan Celsius: $\\eta = \\frac{327 - 27}{327} \\approx 91{,}7\\%$ (SALAH BESAR!). Selalu tambahkan 273 terlebih dahulu!</div>`
    }
  },
  {
    id: "drill-ter-08",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-ter",
    subTopicId: "fis-ter-4",
    category: "Koefisien Performansi Mesin Pendingin (Kulkas)",
    difficulty: "sedang",
    difficultyLabel: "Sedang",
    statement: `Sebuah lemari es (kulkas) bekerja dengan siklus Carnot terbalik antara ruang pendingin bersuhu $-3^\\circ\\text{C}$ dan ruangan dapur bersuhu $27^\\circ\\text{C}$. Koefisien performansi (daya guna $C_P$) lemari es tersebut adalah ....`,
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$9$",
      "$10$",
      "$8$",
      "$0{,}9$",
      "$5$"
    ],
    correctIndex: 0,
    solution: {
      concept: `<div class="callout-box callout-concept"><strong>Koefisien Performansi Mesin Pendingin Carnot ($C_P$):</strong><br>$$C_P = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$$<br>dengan $T_2$ suhu ruang dingin dan $T_1$ suhu lingkungan panas (dalam Kelvin).</div>`,
      steps: `<ol><li>Konversi ke Kelvin:<br>• $T_2 = -3 + 273 = 270\\text{ K}$ (ruang pendingin)<br>• $T_1 = 27 + 273 = 300\\text{ K}$ (lingkungan)</li><li>Selisih suhu: $T_1 - T_2 = 300 - 270 = 30\\text{ K}$.</li><li>Hitung $C_P$: $C_P = \\frac{270}{30} = 9$.</li></ol>`,
      pitfalls: `<div class="callout-box callout-pitfall"><strong>⚠️ Ingat Formula Pendingin:</strong> Pada mesin pendingin yang diinginkan adalah pendinginan ($T_2$), sehingga pembilangnya adalah $T_2$, bukan $T_1$ ($C_P = \\frac{T_2}{T_1 - T_2}$). Nilai $C_P$ biasanya lebih besar dari 1.</div>`
    }
  }
];

console.log(`Prepared ${drillingQuestions.length} prioritized drilling questions.`);
module.exports = { drillingQuestions };
