/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Muatan Listrik & Hukum Coulomb (fis-lis-statis-coulomb)
 * Slug: muatan-listrik-coulomb
 * Indikator: Interaksi gaya elektrostatis Coulomb antarmuatan titik (F = k * |q1 * q2| / r^2).
 * 
 * Total Butir Soal: 11 (Mudah: 6, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-coulomb";
  const subTopicSlug = "muatan-listrik-coulomb";
  const questions = [
  {
    "id": "fis-lis-statis-coulomb-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Karakteristik Interaksi Gaya Coulomb",
    "difficulty": "mudah",
    "statement": "Berdasarkan Hukum Coulomb, besar gaya interaksi elektrostatik antara dua partikel bermuatan listrik berbanding lurus dengan ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Jarak pemisah antara kedua muatan",
      "Kuadrat jarak pemisah antara kedua muatan",
      "Perkalian besar kedua muatan listrik",
      "Akar kuadrat dari perkalian kedua muatan",
      "Jumlah aljabar kedua muatan listrik"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hukum Coulomb menyatakan bahwa gaya tarik-menarik atau tolak-menolak antara dua muatan listrik titik ($q_1$ dan $q_2$) yang terpisah sejauh $r$ dirumuskan sebagai:<br>$$F = k \\frac{|q_1 q_2|}{r^2}$$<br>dengan $k$ adalah konstanta elektrostatik.",
      "steps": "1. Tinjau persamaan Hukum Coulomb:<br>$$F = k \\frac{|q_1 q_2|}{r^2}$$<br>2. Dari persamaan tersebut terlihat jelas bahwa:<br>- Gaya $F$ berbanding lurus dengan hasil kali kedua nilai mutlak muatan ($|q_1 q_2|$).<br>- Gaya $F$ berbanding terbalik dengan kuadrat jarak pemisah ($r^2$).<br>3. Oleh karena itu, pernyataan yang benar adalah pilihan C.",
      "pitfalls": "Sering tertukar antara berbanding lurus dengan hasil kali muatan ($q_1 q_2$) dan berbanding terbalik dengan kuadrat jarak ($r^2$), atau mengira gayanya berbanding lurus dengan jumlah muatan ($q_1 + q_2$)."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$F = k \\frac{|q_1 q_2|}{r^2}$$ dengan $k$ adalah konstanta elektrostatik."
  },
  {
    "id": "fis-lis-statis-coulomb-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Hukum Kuadrat Terbalik Gaya Coulomb",
    "difficulty": "mudah",
    "statement": "Dua muatan listrik titik yang berjarak $r$ satu sama lain saling tolak-menolak dengan gaya sebesar $F$. Jika jarak antara kedua muatan tersebut dijauhkan menjadi $3r$ sementara besar kedua muatan tidak diubah, gaya tolak-menolak antara kedua muatan akan menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{9}F$",
      "$\\frac{1}{3}F$",
      "$F$",
      "$3F$",
      "$9F$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hukum Coulomb mematuhi prinsip kuadrat terbalik terhadap jarak pemisah:<br>$$F \\propto \\frac{1}{r^2} \\implies \\frac{F'}{F} = \\left(\\frac{r}{r'}\\right)^2$$",
      "steps": "1. Kondisi awal: jarak $r_1 = r$, gaya $F_1 = F$.<br>2. Kondisi baru: jarak $r_2 = 3r$, muatan konstan.<br>3. Gunakan perbandingan gaya dan jarak:<br>$$\\frac{F_2}{F_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{r}{3r}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$$<br>4. Maka gaya yang baru adalah $F_2 = \\frac{1}{9}F$ (pilihan A).",
      "pitfalls": "Lupa mengkuadratkan perbandingan jarak sehingga keliru menjawab $\\frac{1}{3}F$, padahal ketergantungan jarak adalah kuadratik ($r^2$)."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$F \\propto \\frac{1}{r^2} \\implies \\frac{F'}{F} = \\left(\\frac{r}{r'}\\right)^2$$."
  },
  {
    "id": "fis-lis-statis-coulomb-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Perhitungan Gaya Coulomb Dua Muatan Titik",
    "difficulty": "mudah",
    "statement": "Dua buah partikel bermuatan listrik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = -4\\,\\mu\\text{C}$ terpisah pada jarak $20\\text{ cm}$ di udara. Jika konstanta Coulomb $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar dan sifat gaya elektrostatik yang dialami kedua muatan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}18\\text{ N}$, tarik-menarik",
      "$1{,}8\\text{ N}$, tarik-menarik",
      "$1{,}8\\text{ N}$, tolak-menolak",
      "$18\\text{ N}$, tarik-menarik",
      "$18\\text{ N}$, tolak-menolak"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Besar gaya Coulomb dirumuskan dengan $F = k \\frac{|q_1 q_2|}{r^2}$. Dua muatan yang berlawanan jenis tanda (+ dan -) akan saling tarik-menarik.",
      "steps": "1. Konversikan satuan ke SI standar:<br>$$q_1 = 2\\,\\mu\\text{C} = 2 \\times 10^{-6}\\text{ C}$$<br>$$q_2 = -4\\,\\mu\\text{C} \\implies |q_2| = 4 \\times 10^{-6}\\text{ C}$$<br>$$r = 20\\text{ cm} = 0{,}2\\text{ m} = 2 \\times 10^{-1}\\text{ m}$$<br>2. Kuadrat jarak:<br>$$r^2 = (2 \\times 10^{-1}\\text{ m})^2 = 4 \\times 10^{-2}\\text{ m}^2$$<br>3. Hitung besar gaya elektrostatik:<br>$$F = (9 \\times 10^9) \\times \\frac{(2 \\times 10^{-6}) \\times (4 \\times 10^{-6})}{4 \\times 10^{-2}} = 9 \\times 10^9 \\times \\frac{8 \\times 10^{-12}}{4 \\times 10^{-2}}$$<br>$$F = 9 \\times 10^9 \\times 2 \\times 10^{-10} = 18 \\times 10^{-1} = 1{,}8\\text{ N}$$<br>4. Karena muatan berlainan tanda ($+q$ dan $-q$), gaya bersifat tarik-menarik.<br>5. Jadi jawabannya adalah $1{,}8\\text{ N}$, tarik-menarik (pilihan B).",
      "pitfalls": "Lupa mengubah satuan jarak dari $\\text{cm}$ ke $\\text{meter}$ ($20\\text{ cm} = 0{,}2\\text{ m}$) yang menyebabkan galat pangkat sepuluh sebesar $10^4$ kali lipat."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Besar gaya Coulomb dirumuskan dengan $F = k \\frac{|q_1 q_2|}{r^2}$. Dua muatan yang berlawanan jenis tanda (+ dan -) akan saling tarik-menarik."
  },
  {
    "id": "fis-lis-statis-coulomb-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Gaya Coulomb dalam Medium Dielektrik",
    "difficulty": "mudah",
    "statement": "Dua muatan listrik titik terpisah pada jarak tertentu di udara saling tolak-menolak dengan gaya elektrostatik sebesar $80\\text{ N}$. Jika kedua muatan beserta jarak pemisahnya dimasukkan ke dalam suatu medium zat cair yang memiliki permitivitas relatif (konstanta dielektrik) $\\varepsilon_r = 4$, gaya tolak-menolak antara kedua muatan tersebut menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ N}$",
      "$20\\text{ N}$",
      "$80\\text{ N}$",
      "$160\\text{ N}$",
      "$320\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya Coulomb di dalam medium dengan permitivitas relatif $\\varepsilon_r$ melemah dibandingkan dengan gayanya di ruang hampa/udara menurut hubungan:<br>$$F_{\\text{medium}} = \\frac{F_{\\text{udara}}}{\\varepsilon_r}$$",
      "steps": "1. Identifikasi data: gaya di udara $F_{\\text{udara}} = 80\\text{ N}$ dan konstanta dielektrik medium $\\varepsilon_r = 4$.<br>2. Hitung gaya elektrostatik di dalam medium:<br>$$F_{\\text{medium}} = \\frac{F_{\\text{udara}}}{\\varepsilon_r} = \\frac{80\\text{ N}}{4} = 20\\text{ N}$$<br>3. Jadi gaya tolak-menolak antara kedua muatan di dalam medium tersebut adalah $20\\text{ N}$ (pilihan B).",
      "pitfalls": "Alih-alih membagi gaya udara dengan $\\varepsilon_r$, sebagian siswa keliru mengalikannya ($80 \\times 4 = 320\\text{ N}$). Ingat bahwa kehadiran medium dielektrik selalu memperlemah interaksi medan elektrostatik antar muatan."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Gaya Coulomb di dalam medium dengan permitivitas relatif $\\varepsilon_r$ melemah dibandingkan dengan gayanya di ruang hampa/udara menurut hubungan: $$F_{\\text{medium}} = \\frac{F_{\\text{udara}}}{\\varepsilon_r}$$."
  },
  {
    "id": "fis-lis-statis-coulomb-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Redistribusi Muatan Konduktor Identik",
    "difficulty": "mudah",
    "statement": "Dua bola konduktor identik berukuran sama mula-mula bermuatan $q_A = +6\\,\\mu\\text{C}$ dan $q_B = -2\\,\\mu\\text{C}$ terpisah pada jarak $r$ sehingga saling tarik-menarik dengan gaya sebesar $F_1$. Kedua bola kemudian disentuhkan satu sama lain lalu dikembalikan ke posisi semula pada jarak pemisah $r$ yang sama. Gaya elektrostatik baru yang terjadi ($F_2$) dibandingkan dengan $F_1$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{3}F_1$, tolak-menolak",
      "$\\frac{1}{3}F_1$, tarik-menarik",
      "$\\frac{2}{3}F_1$, tolak-menolak",
      "$3F_1$, tolak-menolak",
      "$0$ (kedua bola menjadi netral)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Ketika dua konduktor identik disentuhkan, muatan total akan terdistribusi sama rata ke kedua bola:<br>$$q' = \\frac{q_A + q_B}{2}$$<br>Gaya elektrostatik sebanding dengan hasil kali nilai mutlak muatan ($F \\propto |q_1 q_2|$).",
      "steps": "1. Keadaan mula-mula:<br>$$|q_A q_B| = |(+6) \\times (-2)| = 12\\,(\\mu\\text{C})^2$$<br>Gaya $F_1 \\propto 12$, bertanda beda jenis sehingga tarik-menarik.<br>2. Kedua bola disentuhkan dan muatan dibagi rata:<br>$$q'_A = q'_B = \\frac{+6\\,\\mu\\text{C} + (-2\\,\\mu\\text{C})}{2} = \\frac{+4\\,\\mu\\text{C}}{2} = +2\\,\\mu\\text{C}$$<br>3. Keadaan akhir setelah dipisahkan pada jarak yang sama:<br>$$|q'_A q'_B| = |(+2) \\times (+2)| = 4\\,(\\mu\\text{C})^2$$<br>Karena keduanya bertanda positif (sejenis), gayanya menjadi tolak-menolak.<br>4. Bandingkan besar gaya kedua keadaan:<br>$$\\frac{F_2}{F_1} = \\frac{|q'_A q'_B|}{|q_A q_B|} = \\frac{4}{12} = \\frac{1}{3} \\implies F_2 = \\frac{1}{3}F_1$$<br>5. Jadi besar gayanya adalah $\\frac{1}{3}F_1$ dengan sifat tolak-menolak (pilihan A).",
      "pitfalls": "Siswa sering mengira muatannya saling meniadakan secara mutlak ($|6| - |-2| = 4$) tanpa membagi dua untuk kedua bola, atau lupa bahwa tanda muatan akhir menjadi sama jenis (+ dan +) sehingga sifat interaksi berubah dari tarik-menarik menjadi tolak-menolak."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah",
    "hint": "Ketika dua konduktor identik disentuhkan, muatan total akan terdistribusi sama rata ke kedua bola: $$q' = \\frac{q_A + q_B}{2}$$ Gaya elektrostatik sebanding dengan hasil kali nilai mutlak muatan ($F \\propto |q_1 q_2|$)."
  },
  {
    "id": "fis-lis-statis-coulomb-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Letak Titik dengan Resultan Gaya Coulomb Nol",
    "difficulty": "sedang",
    "statement": "Dua muatan titik $q_A = +4\\,\\mu\\text{C}$ dan $q_B = +9\\,\\mu\\text{C}$ terpisah pada jarak $20\\text{ cm}$ di udara. Sebuah muatan uji $q_C = +2\\,\\mu\\text{C}$ diletakkan di antara kedua muatan tersebut pada garis hubung $AB$. Agar muatan uji $q_C$ tidak mengalami gaya elektrostatik (resultan gaya nol), jarak muatan uji $q_C$ dari muatan $q_A$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$6\\text{ cm}$",
      "$8\\text{ cm}$",
      "$10\\text{ cm}$",
      "$12\\text{ cm}$",
      "$15\\text{ cm}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Agar resultan gaya Coulomb pada muatan uji di antara dua muatan sejenis bernilai nol, gaya tolak dari muatan $A$ harus seimbang dengan gaya tolak dari muatan $B$:<br>$$F_{AC} = F_{BC} \\implies k \\frac{q_A q_C}{r_{AC}^2} = k \\frac{q_B q_C}{r_{BC}^2}$$",
      "steps": "1. Misalkan jarak $q_C$ dari $q_A$ adalah $x$, maka jarak $q_C$ dari $q_B$ adalah $20 - x$.<br>2. Samakan kedua gaya tolak:<br>$$\\frac{q_A}{x^2} = \\frac{q_B}{(20 - x)^2}$$<br>3. Tarik akar kuadrat pada kedua ruas:<br>$$\\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{20 - x} \\implies \\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{20 - x} \\implies \\frac{2}{x} = \\frac{3}{20 - x}$$<br>4. Lakukan perkalian silang:<br>$$2(20 - x) = 3x \\implies 40 - 2x = 3x \\implies 5x = 40 \\implies x = 8\\text{ cm}$$<br>5. Jadi jarak muatan $q_C$ dari $q_A$ adalah $8\\text{ cm}$ (pilihan B).",
      "pitfalls": "Siswa sering lupa menarik akar dan langsung membagi muatan $\\frac{4}{x} = \\frac{9}{20-x}$, atau tertukar mengukur jarak dari muatan $B$ ($12\\text{ cm}$) padahal soal meminta jarak dari muatan $A$ ($8\\text{ cm}$)."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Agar resultan gaya Coulomb pada muatan uji di antara dua muatan sejenis bernilai nol, gaya tolak dari muatan $A$ harus seimbang dengan gaya tolak dari muatan $B$: $$F_{AC} = F_{BC} \\implies k \\frac{q_A q_C}{r_{AC}^2} = k \\frac{q_B q_C}{r_{BC}^2}$$."
  },
  {
    "id": "fis-lis-statis-coulomb-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Resultan Gaya Coulomb pada Konfigurasi Segitiga Sama Sisi",
    "difficulty": "sedang",
    "statement": "Tiga buah muatan titik identik masing-masing sebesar $+q$ diletakkan pada ketiga titik sudut sebuah segitiga sama sisi yang memiliki panjang sisi $a$. Jika besar gaya interaksi antara dua muatan adalah $F = k\\frac{q^2}{a^2}$, besar resultan gaya elektrostatik yang dialami oleh salah satu muatan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$F$",
      "$F\\sqrt{2}$",
      "$F\\sqrt{3}$",
      "$2F$",
      "$3F$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gaya elektrostatik merupakan besaran vektor. Resultan dua gaya $F_1$ dan $F_2$ yang membentuk sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor:<br>$$F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\theta}$$",
      "steps": "1. Pada salah satu sudut segitiga sama sisi, muatan mengalami dua gaya tolak dari dua muatan lainnya yang masing-masing berjarak $a$:<br>$$F_1 = F_2 = F = k\\frac{q^2}{a^2}$$<br>2. Sudut apit antara kedua vektor gaya tolak tersebut sama dengan sudut segitiga sama sisi, yaitu $\\theta = 60^\\circ$.<br>3. Nilai $\\cos 60^\\circ = \\frac{1}{2}$. Hitung resultan vektor gaya:<br>$$F_{\\text{res}} = \\sqrt{F^2 + F^2 + 2(F)(F)\\cos 60^\\circ} = \\sqrt{2F^2 + 2F^2\\left(\\frac{1}{2}\\right)} = \\sqrt{3F^2} = F\\sqrt{3}$$<br>4. Jadi besar resultan gayanya adalah $F\\sqrt{3}$ (pilihan C).",
      "pitfalls": "Menjumlahkan gaya secara skalar biasa ($F + F = 2F$) tanpa memperhitungkan sudut apit vektor $60^\\circ$."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Gaya elektrostatik merupakan besaran vektor. Resultan dua gaya $F_1$ dan $F_2$ yang membentuk sudut apit $\\theta$ dihitung menggunakan aturan kosinus penjumlahan vektor: $$F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos\\theta}$$."
  },
  {
    "id": "fis-lis-statis-coulomb-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Resultan Gaya Coulomb pada Sudut Bujur Sangkar",
    "difficulty": "sedang",
    "statement": "Empat buah muatan titik identik masing-masing sebesar $+q$ diletakkan di keempat titik sudut bujur sangkar dengan panjang sisi $a$. Jika $F_0 = k \\frac{q^2}{a^2}$, besar resultan gaya elektrostatik yang bekerja pada salah satu muatan di titik sudut bujur sangkar tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$F_0\\sqrt{2}$",
      "$F_0\\left(\\sqrt{2} + \\frac{1}{2}\\right)$",
      "$F_0\\left(\\sqrt{2} + 1\\right)$",
      "$2F_0\\sqrt{2}$",
      "$F_0\\left(2\\sqrt{2} + 1\\right)$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Salah satu muatan berinteraksi dengan tiga muatan lainnya: dua muatan pada sisi bujur sangkar berjarak $a$ yang saling tegak lurus, dan satu muatan pada sudut diagonal berjarak $a\\sqrt{2}$. Resultan gaya diperoleh dari penjumlahan vektor ketiganya.",
      "steps": "1. Dua muatan pada sisi yang mengapit saling tegak lurus ($\\theta = 90^\\circ$) dan berjarak $a$:<br>$$F_1 = F_2 = F_0 = k\\frac{q^2}{a^2}$$<br>Resultan dari kedua gaya yang saling tegak lurus ini mengarah sepanjang garis diagonal:<br>$$F_{12} = \\sqrt{F_0^2 + F_0^2} = F_0\\sqrt{2}$$<br>2. Muatan ketiga berada di seberang diagonal pada jarak $r_3 = a\\sqrt{2}$. Gaya tolaknya juga searah dengan garis diagonal menjauhi pusat:<br>$$F_3 = k \\frac{q^2}{(a\\sqrt{2})^2} = k \\frac{q^2}{2a^2} = \\frac{1}{2}F_0$$<br>3. Karena $F_{12}$ dan $F_3$ memiliki arah yang sama persis (sepanjang garis perpanjangan diagonal), besar resultan totalnya adalah:<br>$$F_{\\text{total}} = F_{12} + F_3 = F_0\\sqrt{2} + \\frac{1}{2}F_0 = F_0\\left(\\sqrt{2} + \\frac{1}{2}\\right)$$<br>4. Jadi jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Lupa mengkuadratkan faktor diagonal $\\sqrt{2}$ pada jarak muatan ketiga ($r_3^2 = 2a^2$), atau lupa bahwa kedua komponen sisi harus diresultankan secara Pythagoras terlebih dahulu sebelum dijumlahkan dengan gaya komponen diagonal."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Salah satu muatan berinteraksi dengan tiga muatan lainnya: dua muatan pada sisi bujur sangkar berjarak $a$ yang saling tegak lurus, dan satu muatan pada sudut diagonal berjarak $a\\sqrt{2}$. Resultan gaya diperoleh dari penjumlahan vektor ketiganya."
  },
  {
    "id": "fis-lis-statis-coulomb-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Kesetimbangan Muatan Bermassa pada Tali Ayunan",
    "difficulty": "sedang",
    "statement": "Dua buah bola kecil bermassa sama $m = 30\\text{ gram}$ dan bermuatan sama $+q$ digantungkan pada satu titik tetap menggunakan dua utas tali ringan tak-mulur. Akibat tolak-menolak elektrostatik, kedua bola berada dalam kesetimbangan dan tali masing-masing membentuk sudut $\\theta$ terhadap garis vertikal dengan $\\tan\\theta = 0{,}75$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, besar gaya Coulomb antara kedua bola tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}180\\text{ N}$",
      "$0{,}225\\text{ N}$",
      "$0{,}300\\text{ N}$",
      "$0{,}375\\text{ N}$",
      "$0{,}450\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada kesetimbangan statis sebuah bola bermuatan yang digantung tali, berlaku $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$:<br>$$T \\sin\\theta = F_e$$<br>$$T \\cos\\theta = m g$$<br>Maka berlaku hubungan: $\\tan\\theta = \\frac{F_e}{m g} \\implies F_e = m g \\tan\\theta$.",
      "steps": "1. Konversikan massa ke satuan SI:<br>$$m = 30\\text{ gram} = 0{,}03\\text{ kg}$$<br>2. Hitung gaya berat bola:<br>$$w = m g = 0{,}03\\text{ kg} \\times 10\\text{ m/s}^2 = 0{,}3\\text{ N}$$<br>3. Dari perbandingan komponen gaya tegangan tali:<br>$$\\frac{T \\sin\\theta}{T \\cos\\theta} = \\frac{F_e}{m g} \\implies \\tan\\theta = \\frac{F_e}{m g}$$<br>4. Hitung besar gaya Coulomb ($F_e$):<br>$$F_e = m g \\tan\\theta = 0{,}3\\text{ N} \\times 0{,}75 = 0{,}225\\text{ N}$$<br>5. Jadi gaya Coulomb antar kedua bola adalah $0{,}225\\text{ N}$ (pilihan B).",
      "pitfalls": "Sering menggunakan sinus alih-alih tangen (karena tertukar antara komponen gaya horizontal terhadap tali dengan rasio terhadap berat)."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Pada kesetimbangan statis sebuah bola bermuatan yang digantung tali, berlaku $\\Sigma F_x = 0$ dan $\\Sigma F_y = 0$: $$T \\sin\\theta = F_e$$ $$T \\cos\\theta = m g$$ Maka berlaku hubungan: $\\tan\\theta = \\frac{F_e}{m g} \\implies F_e = m g \\tan\\theta$."
  },
  {
    "id": "fis-lis-statis-coulomb-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Kesetimbangan Menyeluruh Sistem Tiga Muatan Segaris",
    "difficulty": "sedang",
    "statement": "Dua muatan titik identik $+Q$ terpisah pada jarak $2d$ satu sama lain. Sebuah muatan ketiga $q$ diletakkan tepat di tengah-tengah antara kedua muatan $+Q$ tersebut. Agar SELURUH sistem ketiga muatan berada dalam kesetimbangan elektrostatik sempurna (resultan gaya pada setiap muatan bernilai nol), besar dan jenis muatan $q$ haruslah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+\\frac{1}{4}Q$",
      "$-\\frac{1}{4}Q$",
      "$+\\frac{1}{2}Q$",
      "$-\\frac{1}{2}Q$",
      "$-Q$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Agar seluruh sistem seimbang, gaya neto pada setiap muatan harus nol. Muatan tengah yang simetris selalu berada dalam kesetimbangan ($F_{\\text{net}} = 0$) untuk sembarang nilai $q$. Oleh karena itu, nilai $q$ ditentukan oleh syarat kesetimbangan pada salah satu muatan $+Q$ di ujung.",
      "steps": "1. Tinjau salah satu muatan $+Q$ di ujung:<br>- Mengalami gaya tolak dari muatan $+Q$ di ujung lainnya pada jarak $2d$:<br>$$F_{QQ} = k \\frac{Q^2}{(2d)^2} = k \\frac{Q^2}{4d^2}\\quad (\\text{arah menjauhi pusat})$$<br>2. Agar resultan gaya pada muatan ujung bernilai nol, muatan tengah $q$ pada jarak $d$ harus memberikan gaya tarik ke arah pusat.<br>Karena harus menarik muatan $+Q$, muatan $q$ wajib bertanda negatif ($q < 0$).<br>3. Samakan besar kedua gaya:<br>$$F_{qQ} = F_{QQ} \\implies k \\frac{|q|Q}{d^2} = k \\frac{Q^2}{4d^2}$$<br>4. Sederhanakan persamaan:<br>$$|q| = \\frac{Q}{4}$$<br>5. Karena $q$ bertanda negatif, maka nilai muatan ketiga adalah $q = -\\frac{1}{4}Q$ (pilihan B).",
      "pitfalls": "Hanya meninjau syarat muatan tengah (yang menghasilkan ilusi seimbang untuk sembarang $q$) dan lupa meninjau syarat kesetimbangan muatan di ujung, atau lupa memberikan tanda negatif pada muatan penyeimbang."
    },
    "subTopicSlug": "muatan-listrik-coulomb",
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang",
    "hint": "Agar seluruh sistem seimbang, gaya neto pada setiap muatan harus nol. Muatan tengah yang simetris selalu berada dalam kesetimbangan ($F_{\\text{net}} = 0$) untuk sembarang nilai $q$. Oleh karena itu, nilai $q$ ditentukan oleh syarat kesetimbangan pada salah satu muatan $+Q$ di ujung."
  },
  {
    "id": "mudah-fis-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-coulomb",
    "category": "Hukum Coulomb",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Dua buah muatan titik masing-masing $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +3\\,\\mu\\text{C}$ terpisah pada jarak $30\\text{ cm}$ di udara. Jika konstanta elektrostatis $k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar gaya tolak-menolak antara kedua muatan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}3\\text{ N}$",
      "$0{,}6\\text{ N}$",
      "$1{,}2\\text{ N}$",
      "$3{,}0\\text{ N}$",
      "$6{,}0\\text{ N}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Hukum Coulomb:</strong><br>\n          $$F = k \\frac{|q_1 q_2|}{r^2}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Konversi satuan ke SI: $q_1 = 2\\times 10^{-6}\\text{ C}$, $q_2 = 3\\times 10^{-6}\\text{ C}$, $r = 30\\text{ cm} = 0{,}3\\text{ m} = 3\\times 10^{-1}\\text{ m}$.</li>\n          <li>$$F = (9\\times 10^9) \\frac{(2\\times 10^{-6})(3\\times 10^{-6})}{(3\\times 10^{-1})^2} = (9\\times 10^9) \\frac{6\\times 10^{-12}}{9\\times 10^{-2}} = 0{,}6\\text{ N}$$</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Sering lupa mengubah satuan $\\text{cm}$ ke $\\text{meter}$ atau $\\mu\\text{C}$ ke $\\text{Coulomb}$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Muatan Listrik & Hukum Coulomb",
    "subTopic": "Muatan Listrik & Hukum Coulomb",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "muatan-listrik-coulomb",
    "hint": "Gunakan perumusan konsep fisis: $$F = k \\frac{|q_1 q_2|}{r^2}$$. **Tips:** Sering lupa mengubah satuan $\\text{cm}$ ke $\\text{meter}$ atau $\\mu\\text{C}$ ke $\\text{Coulomb}$."
  }
];

  // Self-register to browser global namespace
  if (typeof window !== "undefined") {
    window.TKA_BANK_SOAL = window.TKA_BANK_SOAL || {};
    window.TKA_BANK_SOAL[subTopicId] = questions;
    window.TKA_BANK_SOAL[subTopicSlug] = questions;
  }

  // CommonJS Node.js export
  if (typeof module !== "undefined" && module.exports) {
    module.exports = questions;
  }
})();
