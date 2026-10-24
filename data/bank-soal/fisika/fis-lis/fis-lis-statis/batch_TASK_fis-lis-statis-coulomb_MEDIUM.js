/**
 * Batch Task: TASK_fis-lis-statis-coulomb_MEDIUM
 * SubTopic: Hukum Coulomb (fis-lis-statis-coulomb)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    id: "fis-lis-statis-coulomb-006",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Letak Titik dengan Resultan Gaya Coulomb Nol",
    difficulty: "sedang",
    statement: "Dua muatan titik $q_A = +4\\,\\mu\\text{C}$ dan $q_B = +9\\,\\mu\\text{C}$ terpisah pada jarak $20\\text{ cm}$ di udara. Sebuah muatan uji $q_C = +2\\,\\mu\\text{C}$ diletakkan di antara kedua muatan tersebut pada garis hubung $AB$. Agar muatan uji $q_C$ tidak mengalami gaya elektrostatik (resultan gaya nol), jarak muatan uji $q_C$ dari muatan $q_A$ adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Agar resultan gaya Coulomb pada muatan uji di antara dua muatan sejenis bernilai nol, gaya tolak dari muatan $A$ harus seimbang dengan gaya tolak dari muatan $B$:<br>$$F_{AC} = F_{BC} \\implies k \\frac{q_A q_C}{r_{AC}^2} = k \\frac{q_B q_C}{r_{BC}^2}$$",
      steps: "1. Misalkan jarak $q_C$ dari $q_A$ adalah $x$, maka jarak $q_C$ dari $q_B$ adalah $20 - x$.<br>2. Samakan kedua gaya tolak:<br>$$\\frac{q_A}{x^2} = \\frac{q_B}{(20 - x)^2}$$<br>3. Tarik akar kuadrat pada kedua ruas:<br>$$\\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{20 - x} \\implies \\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{20 - x} \\implies \\frac{2}{x} = \\frac{3}{20 - x}$$<br>4. Lakukan perkalian silang:<br>$$2(20 - x) = 3x \\implies 40 - 2x = 3x \\implies 5x = 40 \\implies x = 8\\text{ cm}$$<br>5. Jadi jarak muatan $q_C$ dari $q_A$ adalah $8\\text{ cm}$ (pilihan B).",
      pitfalls: "Siswa sering lupa menarik akar dan langsung membagi muatan $\\frac{4}{x} = \\frac{9}{20-x}$, atau tertukar mengukur jarak dari muatan $B$ ($12\\text{ cm}$) padahal soal meminta jarak dari muatan $A$ ($8\\text{ cm}$)."
    }
  },
  {
    id: "fis-lis-statis-coulomb-007",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Resultan Gaya Coulomb pada Konfigurasi Segitiga Sama Sisi",
    difficulty: "sedang",
    statement: "Tiga buah muatan titik identik masing-masing sebesar $+q$ diletakkan pada ketiga titik sudut sebuah segitiga sama sisi yang memiliki panjang sisi $a$. Jika besar gaya interaksi antara dua muatan adalah $F = k\\frac{q^2}{a^2}$, besar resultan gaya elektrostatik yang dialami oleh salah satu muatan adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$F$",
      "$F\\sqrt{2}$",
      "$F\\sqrt{3}$",
      "$2F$",
      "$3F$"
    ],
    correctIndex: 2,
    solution: {
      concept: "Gaya elektrostatik merupakan besaran vektor. Resultan dua gaya $F_1$ dan $F_2$ yang membentuk sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor:<br>$$F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\theta}$$",
      steps: "1. Pada salah satu sudut segitiga sama sisi, muatan mengalami dua gaya tolak dari dua muatan lainnya yang masing-masing berjarak $a$:<br>$$F_1 = F_2 = F = k\\frac{q^2}{a^2}$$<br>2. Sudut apit antara kedua vektor gaya tolak tersebut sama dengan sudut segitiga sama sisi, yaitu $\\theta = 60^\\circ$.<br>3. Nilai $\\cos 60^\\circ = \\frac{1}{2}$. Hitung resultan vektor gaya:<br>$$F_{\\text{res}} = \\sqrt{F^2 + F^2 + 2(F)(F)\\cos 60^\\circ} = \\sqrt{2F^2 + 2F^2\\left(\\frac{1}{2}\\right)} = \\sqrt{3F^2} = F\\sqrt{3}$$<br>4. Jadi besar resultan gayanya adalah $F\\sqrt{3}$ (pilihan C).",
      pitfalls: "Menjumlahkan gaya secara skalar biasa ($F + F = 2F$) tanpa memperhitungkan sudut apit vektor $60^\\circ$."
    }
  },
  {
    id: "fis-lis-statis-coulomb-008",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Resultan Gaya Coulomb pada Sudut Bujur Sangkar",
    difficulty: "sedang",
    statement: "Empat buah muatan titik identik masing-masing sebesar $+q$ diletakkan di keempat titik sudut bujur sangkar dengan panjang sisi $a$. Jika $F_0 = k \\frac{q^2}{a^2}$, besar resultan gaya elektrostatik yang bekerja pada salah satu muatan di titik sudut bujur sangkar tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$F_0\\sqrt{2}$",
      "$F_0\\left(\\sqrt{2} + \\frac{1}{2}\\right)$",
      "$F_0\\left(\\sqrt{2} + 1\\right)$",
      "$2F_0\\sqrt{2}$",
      "$F_0\\left(2\\sqrt{2} + 1\\right)$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Salah satu muatan berinteraksi dengan tiga muatan lainnya: dua muatan pada sisi bujur sangkar berjarak $a$ yang saling tegak lurus, dan satu muatan pada sudut diagonal berjarak $a\\sqrt{2}$. Resultan gaya diperoleh dari penjumlahan vektor ketiganya.",
      steps: "1. Dua muatan pada sisi yang mengapit saling tegak lurus ($\\theta = 90^\\circ$) dan berjarak $a$:<br>$$F_1 = F_2 = F_0 = k\\frac{q^2}{a^2}$$<br>Resultan dari kedua gaya yang saling tegak lurus ini mengarah sepanjang garis diagonal:<br>$$F_{12} = \\sqrt{F_0^2 + F_0^2} = F_0\\sqrt{2}$$<br>2. Muatan ketiga berada di seberang diagonal pada jarak $r_3 = a\\sqrt{2}$. Gaya tolaknya juga searah dengan garis diagonal menjauhi pusat:<br>$$F_3 = k \\frac{q^2}{(a\\sqrt{2})^2} = k \\frac{q^2}{2a^2} = \\frac{1}{2}F_0$$<br>3. Karena $F_{12}$ dan $F_3$ memiliki arah yang sama persis (sepanjang garis perpanjangan diagonal), besar resultan totalnya adalah:<br>$$F_{\\text{total}} = F_{12} + F_3 = F_0\\sqrt{2} + \\frac{1}{2}F_0 = F_0\\left(\\sqrt{2} + \\frac{1}{2}\\right)$$<br>4. Jadi jawaban yang tepat adalah pilihan B.",
      pitfalls: "Lupa mengkuadratkan faktor diagonal $\\sqrt{2}$ pada jarak muatan ketiga ($r_3^2 = 2a^2$), atau lupa bahwa kedua komponen sisi harus diresultankan secara Pythagoras terlebih dahulu sebelum dijumlahkan dengan gaya komponen diagonal."
    }
  },
  {
    id: "fis-lis-statis-coulomb-009",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Kesetimbangan Muatan Bermassa pada Tali Ayunan",
    difficulty: "sedang",
    statement: "Dua buah bola kecil bermassa sama $m = 30\\text{ gram}$ dan bermuatan sama $+q$ digantungkan pada satu titik tetap menggunakan dua utas tali ringan tak-mulur. Akibat tolak-menolak elektrostatik, kedua bola berada dalam kesetimbangan dan tali masing-masing membentuk sudut $\\theta$ terhadap garis vertikal dengan $\\tan\\theta = 0{,}75$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya Coulomb antara kedua bola tersebut adalah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$0{,}180\\text{ N}$",
      "$0{,}225\\text{ N}$",
      "$0{,}300\\text{ N}$",
      "$0{,}375\\text{ N}$",
      "$0{,}450\\text{ N}$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Pada kesetimbangan statis sebuah bola bermuatan yang digantung tali, berlaku $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$:<br>$$T \\sin\\theta = F_e$$<br>$$T \\cos\\theta = m g$$<br>Maka berlaku hubungan: $\\tan\\theta = \\frac{F_e}{m g} \\implies F_e = m g \\tan\\theta$.",
      steps: "1. Konversikan massa ke satuan SI:<br>$$m = 30\\text{ gram} = 0{,}03\\text{ kg}$$<br>2. Hitung gaya berat bola:<br>$$w = m g = 0{,}03\\text{ kg} \\times 10\\text{ m/s}^2 = 0{,}3\\text{ N}$$<br>3. Dari perbandingan komponen gaya tegangan tali:<br>$$\\frac{T \\sin\\theta}{T \\cos\\theta} = \\frac{F_e}{m g} \\implies \\tan\\theta = \\frac{F_e}{m g}$$<br>4. Hitung besar gaya Coulomb ($F_e$):<br>$$F_e = m g \\tan\\theta = 0{,}3\\text{ N} \\times 0{,}75 = 0{,}225\\text{ N}$$<br>5. Jadi gaya Coulomb antar kedua bola adalah $0{,}225\\text{ N}$ (pilihan B).",
      pitfalls: "Sering menggunakan sinus alih-alih tangen (karena tertukar antara komponen gaya horizontal terhadap tali dengan rasio terhadap berat)."
    }
  },
  {
    id: "fis-lis-statis-coulomb-010",
    subject: "FISIKA",
    pillarId: "fisika",
    chapterId: "fis-lis",
    subChapterId: "fis-lis-statis",
    subTopicId: "fis-lis-statis-coulomb",
    category: "Kesetimbangan Menyeluruh Sistem Tiga Muatan Segaris",
    difficulty: "sedang",
    statement: "Dua muatan titik identik $+Q$ terpisah pada jarak $2d$ satu sama lain. Sebuah muatan ketiga $q$ diletakkan tepat di tengah-tengah antara kedua muatan $+Q$ tersebut. Agar SELURUH sistem ketiga muatan berada dalam kesetimbangan elektrostatik sempurna (resultan gaya pada setiap muatan bernilai nol), besar dan jenis muatan $q$ haruslah ....",
    hasDiagram: false,
    diagramSvg: "",
    diagramCaption: "",
    options: [
      "$+\\frac{1}{4}Q$",
      "$-\\frac{1}{4}Q$",
      "$+\\frac{1}{2}Q$",
      "$-\\frac{1}{2}Q$",
      "$-Q$"
    ],
    correctIndex: 1,
    solution: {
      concept: "Agar seluruh sistem seimbang, gaya neto pada setiap muatan harus nol. Muatan tengah yang simetris selalu berada dalam kesetimbangan ($F_{\\text{net}} = 0$) untuk sembarang nilai $q$. Oleh karena itu, nilai $q$ ditentukan oleh syarat kesetimbangan pada salah satu muatan $+Q$ di ujung.",
      steps: "1. Tinjau salah satu muatan $+Q$ di ujung:<br>- Mengalami gaya tolak dari muatan $+Q$ di ujung lainnya pada jarak $2d$:<br>$$F_{QQ} = k \\frac{Q^2}{(2d)^2} = k \\frac{Q^2}{4d^2}\\quad (\\text{arah menjauhi pusat})$$<br>2. Agar resultan gaya pada muatan ujung bernilai nol, muatan tengah $q$ pada jarak $d$ harus memberikan gaya tarik ke arah pusat.<br>Karena harus menarik muatan $+Q$, muatan $q$ wajib bertanda negatif ($q < 0$).<br>3. Samakan besar kedua gaya:<br>$$F_{qQ} = F_{QQ} \\implies k \\frac{|q|Q}{d^2} = k \\frac{Q^2}{4d^2}$$<br>4. Sederhanakan persamaan:<br>$$|q| = \\frac{Q}{4}$$<br>5. Karena $q$ bertanda negatif, maka nilai muatan ketiga adalah $q = -\\frac{1}{4}Q$ (pilihan B).",
      pitfalls: "Hanya meninjau syarat muatan tengah (yang menghasilkan ilusi seimbang untuk sembarang $q$) dan lupa meninjau syarat kesetimbangan muatan di ujung, atau lupa memberikan tanda negatif pada muatan penyeimbang."
    }
  }
];
