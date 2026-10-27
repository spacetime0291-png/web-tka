/**
 * Bank Soal TKA: Fisika (TKA) - Kelistrikan
 * Bab Kecil: Listrik Statis (fis-lis-statis)
 * Sub-Bab: Kuat Medan Listrik (fis-lis-statis-medan)
 * Slug: kuat-medan-listrik
 * Indikator: Vektor kuat medan listrik (E = k * q / r^2) dan resultan medan listrik gabungan.
 * 
 * Total Butir Soal: 11 (Mudah: 5, Sedang: 6, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-lis-statis-medan";
  const subTopicSlug = "kuat-medan-listrik";
  const questions = [
  {
    "id": "fis-lis-statis-medan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Arah dan Konsep Garis Medan Listrik",
    "difficulty": "mudah",
    "statement": "Pernyataan berikut yang benar mengenai karakteristik garis-garis medan listrik di sekitar muatan listrik titik adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Keluar menjauhi muatan positif dan masuk menuju muatan negatif",
      "Masuk menuju muatan positif dan keluar menjauhi muatan negatif",
      "Garis-garis medan listrik dapat saling berpotongan jika medannya sangat kuat",
      "Kerapatan garis medan listrik berbanding terbalik dengan kuat medan listriknya",
      "Garis medan selalu berbentuk lintasan lingkaran tertutup yang mengitari muatan"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Garis-garis medan listrik (electric field lines) menggambarkan arah dan kuat medan listrik. Garis medan selalu berawal dari muatan positif dan berakhir pada muatan negatif (atau di tak hingga), serta tidak pernah saling berpotongan.",
      "steps": "1. Berdasarkan konvensi arah medan listrik, muatan uji positif akan ditolak oleh muatan positif (arah keluar radial) dan ditarik oleh muatan negatif (arah masuk radial).<br>2. Kerapatan garis-garis medan berbanding lurus dengan besar kuat medan listrik (semakin rapat garisnya, semakin kuat medannya).<br>3. Dua garis medan tidak dapat saling berpotongan karena medan listrik pada satu titik memiliki arah resultan yang unik.<br>4. Jadi pilihan A adalah pernyataan yang benar dan tepat.",
      "pitfalls": "Sering tertukar antara arah garis medan listrik (keluar dari positif, masuk ke negatif) dengan arah garis medan magnet di luar batang magnet (keluar dari kutub utara, masuk ke kutub selatan)."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-statis-medan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Kuat Medan Listrik Muatan Titik",
    "difficulty": "mudah",
    "statement": "Kuat medan listrik pada suatu titik yang berjarak $30\\text{ cm}$ dari sebuah muatan titik $+3\\,\\mu\\text{C}$ di udara ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$3 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$3 \\times 10^5\\text{ N/C}$, menuju muatan",
      "$9 \\times 10^5\\text{ N/C}$, menjauhi muatan",
      "$9 \\times 10^5\\text{ N/C}$, menuju muatan"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kuat medan listrik ($E$) pada jarak $r$ dari muatan titik $q$ dirumuskan sebagai:<br>$$E = k \\frac{|q|}{r^2}$$<br>Arah medan listrik menjauhi muatan jika muatan sumber positif, dan menuju muatan jika muatan sumber negatif.",
      "steps": "1. Konversikan satuan ke SI standar:<br>$$q = +3\\,\\mu\\text{C} = 3 \\times 10^{-6}\\text{ C}$$<br>$$r = 30\\text{ cm} = 0{,}3\\text{ m} = 3 \\times 10^{-1}\\text{ m}$$<br>2. Kuadrat jarak:<br>$$r^2 = (3 \\times 10^{-1}\\text{ m})^2 = 9 \\times 10^{-2}\\text{ m}^2$$<br>3. Hitung kuat medan listrik:<br>$$E = (9 \\times 10^9) \\times \\frac{3 \\times 10^{-6}}{9 \\times 10^{-2}} = 3 \\times 10^5\\text{ N/C}$$<br>4. Karena muatan sumber bertanda positif ($+3\\,\\mu\\text{C}$), arah kuat medan listrik menjauhi muatan.<br>5. Jadi jawabannya adalah $3 \\times 10^5\\text{ N/C}$, menjauhi muatan (pilihan B).",
      "pitfalls": "Lupa mengkuadratkan jarak pembagi ($r^2$) sehingga membagi langsung dengan $0{,}3$, atau salah menentukan arah medan listrik untuk muatan positif."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-statis-medan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Hubungan Gaya Coulomb dan Kuat Medan Listrik",
    "difficulty": "mudah",
    "statement": "Sebuah muatan uji $q_0 = -5\\,\\mu\\text{C}$ diletakkan dalam suatu medan listrik homogen dan mengalami gaya elektrostatik sebesar $0{,}25\\text{ N}$ ke arah timur. Besar dan arah kuat medan listrik di titik tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5 \\times 10^4\\text{ N/C}$ ke arah timur",
      "$5 \\times 10^4\\text{ N/C}$ ke arah barat",
      "$1{,}25 \\times 10^{-6}\\text{ N/C}$ ke arah timur",
      "$1{,}25 \\times 10^{-6}\\text{ N/C}$ ke arah barat",
      "$2 \\times 10^4\\text{ N/C}$ ke arah barat"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gaya elektrostatik yang dialami muatan uji dalam medan listrik adalah $\\vec{F} = q_0 \\vec{E}$. Jika muatan uji positif, arah $\\vec{F}$ searah dengan $\\vec{E}$. Jika muatan uji negatif, arah $\\vec{F}$ berlawanan arah dengan $\\vec{E}$.",
      "steps": "1. Hitung besar kuat medan listrik:<br>$$E = \\frac{F}{|q_0|} = \\frac{0{,}25\\text{ N}}{5 \\times 10^{-6}\\text{ C}} = 50.000\\text{ N/C} = 5 \\times 10^4\\text{ N/C}$$<br>2. Tentukan arah medan listrik:<br>Karena muatan uji bernilai negatif ($q_0 = -5\\,\\mu\\text{C}$), gaya elektrostatik berlawanan arah dengan medan listrik.<br>Gaya mengarah ke timur, maka arah medan listrik harus berlawanan, yaitu ke arah barat.<br>3. Jadi kuat medan listrik bernilai $5 \\times 10^4\\text{ N/C}$ ke arah barat (pilihan B).",
      "pitfalls": "Siswa sering menganggap arah medan listrik selalu searah dengan gaya yang dialami partikel, melupakan fakta bahwa muatan negatif mengalami gaya yang berlawanan arah dengan medan listrik."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-statis-medan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Perbandingan Jarak dan Kuat Medan Listrik",
    "difficulty": "mudah",
    "statement": "Kuat medan listrik di titik $P$ yang berjarak $r$ dari suatu muatan sumber adalah $E$. Jika titik pengamatan digeser ke titik $Q$ yang berjarak $2r$ dari muatan sumber yang sama, kuat medan listrik di titik $Q$ menjadi ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{1}{4}E$",
      "$\\frac{1}{2}E$",
      "$E$",
      "$2E$",
      "$4E$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kuat medan listrik dari muatan titik berbanding terbalik dengan kuadrat jaraknya terhadap muatan sumber:<br>$$E \\propto \\frac{1}{r^2} \\implies \\frac{E_Q}{E_P} = \\left(\\frac{r_P}{r_Q}\\right)^2$$",
      "steps": "1. Diketahui $r_P = r$ dengan kuat medan $E_P = E$.<br>2. Titik $Q$ berjarak $r_Q = 2r$.<br>3. Bandingkan kuat medan listrik:<br>$$\\frac{E_Q}{E_P} = \\left(\\frac{r}{2r}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$<br>4. Maka kuat medan di titik $Q$ adalah $E_Q = \\frac{1}{4}E$ (pilihan A).",
      "pitfalls": "Lupa mengkuadratkan faktor perbandingan jarak sehingga memilih $\\frac{1}{2}E$."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-statis-medan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Medan Listrik pada Bola Konduktor Berongga",
    "difficulty": "mudah",
    "statement": "Sebuah bola konduktor berongga dengan jari-jari $R = 10\\text{ cm}$ diberi muatan listrik $+20\\,\\mu\\text{C}$ yang tersebar merata di permukaannya. Kuat medan listrik pada titik yang terletak di dalam rongga bola berjarak $5\\text{ cm}$ dari pusat bola adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0\\text{ N/C}$",
      "$1{,}8 \\times 10^6\\text{ N/C}$",
      "$3{,}6 \\times 10^6\\text{ N/C}$",
      "$7{,}2 \\times 10^6\\text{ N/C}$",
      "Tak terdefinisi (tak hingga)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Berdasarkan Hukum Gauss dan sifat konduktor elektrostatik, seluruh kelebihan muatan pada bahan konduktor akan saling tolak-menolak dan berkumpul hanya di permukaan terluar konduktor. Tidak ada muatan netto di dalam rongga bola, sehingga kuat medan listrik di dalam bola konduktor selalu nol ($E = 0$).",
      "steps": "1. Titik pengamatan berada pada jarak $r = 5\\text{ cm}$, sedangkan jari-jari bola konduktor adalah $R = 10\\text{ cm}$.<br>2. Karena $r < R$, titik pengamatan berada di dalam rongga konduktor.<br>3. Buat permukaan Gauss berbentuk bola dengan jari-jari $r = 5\\text{ cm}$. Jumlah muatan yang dilingkupi permukaan Gauss ini adalah $q_{\\text{enclosed}} = 0$.<br>4. Melalui Hukum Gauss:<br>$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0} = 0 \\implies E = 0\\text{ N/C}$$<br>5. Jadi kuat medan listriknya bernilai $0\\text{ N/C}$ (pilihan A).",
      "pitfalls": "Siswa sering menggunakan rumus muatan titik $k \\frac{q}{r^2}$ dengan memasukkan $r = 5\\text{ cm}$ sehingga mendapatkan nilai $7{,}2 \\times 10^6\\text{ N/C}$, melupakan bahwa untuk konduktor di bagian dalam bola nilai $E$ selalu nol."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-lis-statis-medan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Letak Titik dengan Medan Listrik Nol pada Dua Muatan Berlawanan Tanda",
    "difficulty": "sedang",
    "statement": "Dua buah muatan titik $q_A = +16\\,\\mu\\text{C}$ dan $q_B = -9\\,\\mu\\text{C}$ terpisah sejauh $10\\text{ cm}$ di udara pada sumbu-$x$ ($q_A$ berada di $x = 0$ dan $q_B$ berada di $x = +10\\text{ cm}$). Letak titik pada sumbu-$x$ yang memiliki kuat medan listrik resultan sama dengan nol adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ cm}$ di sebelah kanan $q_B$ ($x = +40\\text{ cm}$)",
      "$30\\text{ cm}$ di sebelah kiri $q_A$ ($x = -30\\text{ cm}$)",
      "$4\\text{ cm}$ di antara $q_A$ dan $q_B$ ($x = +4\\text{ cm}$)",
      "$6\\text{ cm}$ di antara $q_A$ dan $q_B$ ($x = +6\\text{ cm}$)",
      "$10\\text{ cm}$ di sebelah kanan $q_B$ ($x = +20\\text{ cm}$)"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Untuk dua muatan yang berlawanan jenis, kuat medan listrik tidak mungkin nol di antara kedua muatan (karena vektor medannya searah). Titik bernilai nol harus berada di luar bentang kedua muatan, tepatnya di sisi yang lebih dekat dengan muatan yang memiliki magnitudo (nilai mutlak) lebih kecil.",
      "steps": "1. Nilai mutlak muatan: $|q_B| = 9\\,\\mu\\text{C} < |q_A| = 16\\,\\mu\\text{C}$. Maka titik nol berada di sebelah kanan $q_B$ ($x > 10\\text{ cm}$).<br>2. Misalkan jarak titik tersebut dari $q_B$ adalah $d$, maka jaraknya dari $q_A$ adalah $10 + d$.<br>3. Samakan kuat medan dari kedua muatan:<br>$$E_A = E_B \\implies k \\frac{|q_A|}{(10 + d)^2} = k \\frac{|q_B|}{d^2} \\implies \\frac{16}{(10 + d)^2} = \\frac{9}{d^2}$$<br>4. Tarik akar kuadrat pada kedua ruas:<br>$$\\frac{4}{10 + d} = \\frac{3}{d} \\implies 4d = 3(10 + d) \\implies 4d = 30 + 3d \\implies d = 30\\text{ cm}$$<br>5. Posisi pada sumbu-$x$ adalah $x = 10 + 30 = +40\\text{ cm}$ ($30\\text{ cm}$ di sebelah kanan $q_B$).<br>6. Jadi jawaban yang benar adalah pilihan A.",
      "pitfalls": "Mencari titik nol di antara kedua muatan. Untuk muatan berlainan tanda (+ dan -), di antara kedua muatan medan dari muatan positif menjauhi dan medan muatan negatif menuju ke arah yang sama (searah ke kanan), sehingga tidak mungkin saling meniadakan menjadi nol."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-statis-medan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Resultan Medan Listrik Tegak Lurus pada Sudut Siku-Siku",
    "difficulty": "sedang",
    "statement": "Dua muatan listrik titik diletakkan pada titik sudut segitiga siku-siku di titik $A(0, 3\\text{ cm})$ dan $B(4\\text{ cm}, 0)$. Muatan di $A$ adalah $q_A = +9\\,\\text{nC}$ dan muatan di $B$ adalah $q_B = -16\\,\\text{nC}$. Jika $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, besar kuat medan listrik resultan di titik asal $O(0, 0)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 \\times 10^4\\text{ N/C}$",
      "$9\\sqrt{2} \\times 10^4\\text{ N/C}$",
      "$18 \\times 10^4\\text{ N/C}$",
      "$25 \\times 10^4\\text{ N/C}$",
      "$0\\text{ N/C}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kuat medan listrik resultan di titik $O$ merupakan penjumlahan vektor dari medan listrik yang ditimbulkan oleh muatan di $A$ dan muatan di $B$:<br>$$\\vec{E}_{O} = \\vec{E}_A + \\vec{E}_B$$<br>Karena sumbu-$x$ dan sumbu-$y$ saling tegak lurus, besar resultannya adalah $E_{\\text{res}} = \\sqrt{E_A^2 + E_B^2}$.",
      "steps": "1. Hitung medan listrik dari muatan $A$ ($r_A = 3\\text{ cm} = 0{,}03\\text{ m}$):<br>$$E_A = k \\frac{|q_A|}{r_A^2} = (9 \\times 10^9) \\times \\frac{9 \\times 10^{-9}}{(3 \\times 10^{-2})^2} = \\frac{81}{9 \\times 10^{-4}} = 9 \\times 10^4\\text{ N/C}$$<br>Karena $q_A$ positif dan terletak di atas $O$, arah medan $\\vec{E}_A$ menjauhi $A$ (ke arah sumbu $-y$).<br>2. Hitung medan listrik dari muatan $B$ ($r_B = 4\\text{ cm} = 0{,}04\\text{ m}$):<br>$$E_B = k \\frac{|q_B|}{r_B^2} = (9 \\times 10^9) \\times \\frac{16 \\times 10^{-9}}{(4 \\times 10^{-2})^2} = \\frac{144}{16 \\times 10^{-4}} = 9 \\times 10^4\\text{ N/C}$$<br>Karena $q_B$ negatif dan terletak di kanan $O$, arah medan $\\vec{E}_B$ menuju $B$ (ke arah sumbu $+x$).<br>3. Hitung resultan kedua vektor yang saling tegak lurus:<br>$$E_{\\text{res}} = \\sqrt{E_A^2 + E_B^2} = \\sqrt{(9 \\times 10^4)^2 + (9 \\times 10^4)^2} = 9\\sqrt{2} \\times 10^4\\text{ N/C}$$<br>4. Jadi jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Menjumlahkan nilai medan secara skalar biasa ($9 \\times 10^4 + 9 \\times 10^4 = 18 \\times 10^4\\text{ N/C}$) tanpa memperhatikan orientasi ortogonal antar sumbu koordinat."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-statis-medan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Fluks Listrik Menembus Bidang Datar",
    "difficulty": "sedang",
    "statement": "Suatu bidang datar berbentuk persegi panjang berukuran $20\\text{ cm} \\times 30\\text{ cm}$ berada di dalam medan listrik homogen sebesar $E = 4.000\\text{ N/C}$. Jika garis normal bidang tersebut membentuk sudut $60^\\circ$ terhadap arah garis medan listrik, fluks listrik yang menembus bidang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
      "$120\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
      "$120\\sqrt{3}\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
      "$240\\text{ N}\\cdot\\text{m}^2/\\text{C}$",
      "$480\\text{ N}\\cdot\\text{m}^2/\\text{C}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fluks listrik ($\\Phi$) didefinisikan sebagai jumlah garis medan listrik yang menembus suatu luasan bidang secara tegak lurus:<br>$$\\Phi = E A \\cos\\theta$$<br>dengan $\\theta$ adalah sudut antara arah medan listrik dengan garis normal bidang (vektor luas $\\vec{A}$).",
      "steps": "1. Hitung luas permukaan bidang dalam satuan SI:<br>$$A = 20\\text{ cm} \\times 30\\text{ cm} = 0{,}2\\text{ m} \\times 0{,}3\\text{ m} = 0{,}06\\text{ m}^2$$<br>2. Sudut antara vektor medan dan garis normal bidang adalah $\\theta = 60^\\circ$, dengan $\\cos 60^\\circ = 0{,}5$.<br>3. Hitung fluks listrik:<br>$$\\Phi = E A \\cos\\theta = 4.000\\text{ N/C} \\times 0{,}06\\text{ m}^2 \\times 0{,}5 = 120\\text{ N}\\cdot\\text{m}^2/\\text{C}$$<br>4. Jadi besar fluks listrik yang menembus bidang adalah $120\\text{ N}\\cdot\\text{m}^2/\\text{C}$ (pilihan B).",
      "pitfalls": "Siswa sering menggunakan sinus alih-alih kosinus, atau tertukar antara 'sudut terhadap bidang' ($30^\\circ$) dengan 'sudut terhadap garis normal bidang' ($60^\\circ$). Soal telah menyatakan sudut terhadap garis normal, sehingga langsung gunakan $\\cos 60^\\circ$."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-statis-medan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Medan Listrik Bola Konduktor Bermuatan pada Berbagai Jarak",
    "difficulty": "sedang",
    "statement": "Sebuah bola konduktor padat berjejari $R$ diberi muatan positif $Q$. Diketahui kuat medan listrik tepat di permukaan bola adalah $E_0$. Perbandingan kuat medan listrik di titik yang berjarak $\\frac{1}{2}R$ dari pusat bola ($E_1$) terhadap titik yang berjarak $2R$ dari pusat bola ($E_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0$",
      "$1 : 4$",
      "$1 : 1$",
      "$4 : 1$",
      "$16 : 1$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Distribusi medan listrik pada bola konduktor bermuatan bergantung pada posisinya terhadap jari-jari bola $R$:<br>- Di dalam bola ($r < R$): $E = 0$<br>- Di permukaan ($r = R$): $E = E_0 = k\\frac{Q}{R^2}$<br>- Di luar bola ($r > R$): $E = k\\frac{Q}{r^2}$",
      "steps": "1. Titik pertama berada pada jarak $r_1 = \\frac{1}{2}R$. Karena $r_1 < R$ (di dalam konduktor), maka kuat medan listriknya:<br>$$E_1 = 0\\text{ N/C}$$<br>2. Titik kedua berada pada jarak $r_2 = 2R$. Karena $r_2 > R$ (di luar konduktor), maka:<br>$$E_2 = k\\frac{Q}{(2R)^2} = \\frac{1}{4} k\\frac{Q}{R^2} = \\frac{1}{4}E_0$$<br>3. Hitung rasio $E_1 : E_2$:<br>$$\\frac{E_1}{E_2} = \\frac{0}{\\frac{1}{4}E_0} = 0$$<br>4. Jadi perbandingannya bernilai $0$ (pilihan A).",
      "pitfalls": "Mengira medan di dalam bola berbanding lurus dengan jarak seperti pada bola isolator bermuatan merata. Untuk bahan konduktor, medan listrik di seluruh bagian dalam rongga maupun materi padatnya selalu bernilai tepat nol."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-lis-statis-medan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subChapterId": "fis-lis-statis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Defleksi Elektron dalam Medan Listrik Homogen Antarpelat",
    "difficulty": "sedang",
    "statement": "Sebuah elektron bermassa $m$ dan bermuatan $-e$ ditembakkan secara horizontal dengan kecepatan awal $v_0$ ke dalam ruang di antara sepasang pelat konduktor sejajar berjarak $d$ dengan panjang pelat $L$. Di antara pelat terdapat medan listrik homogen $E$ berarah vertikal ke bawah. Besar defleksi (simpangan vertikal $y$) yang dialami elektron saat tepat meninggalkan ujung pelat adalah .... (abaikan pengaruh gravitasi)",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{e E L}{m v_0}$",
      "$\\frac{e E L^2}{m v_0^2}$",
      "$\\frac{e E L^2}{2 m v_0^2}$",
      "$\\frac{2 e E L^2}{m v_0^2}$",
      "$\\frac{e E L}{2 m v_0}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Gerak partikel bermuatan dalam medan listrik homogen tegak lurus analog dengan gerak parabola peluru. Gerak horizontal merupakan gerak lurus beraturan (GLB) dan gerak vertikal merupakan gerak lurus berubah beraturan (GLBB).",
      "steps": "1. Pada arah horizontal (GLB), waktu yang dihabiskan elektron melintasi pelat sepanjang $L$ adalah:<br>$$t = \\frac{L}{v_0}$$<br>2. Pada arah vertikal (GLBB), elektron mengalami gaya elektrostatik ke atas:<br>$$F_y = e E$$<br>sehingga percepatan vertikal elektron adalah:<br>$$a_y = \\frac{F_y}{m} = \\frac{e E}{m}$$<br>3. Karena kecepatan awal vertikal nol ($v_{0y} = 0$), simpangan vertikalnya adalah:<br>$$y = \\frac{1}{2} a_y t^2 = \\frac{1}{2} \\left(\\frac{e E}{m}\\right) \\left(\\frac{L}{v_0}\\right)^2 = \\frac{e E L^2}{2 m v_0^2}$$<br>4. Jadi simpangan vertikal yang dialami elektron adalah $\\frac{e E L^2}{2 m v_0^2}$ (pilihan C).",
      "pitfalls": "Lupa menyertakan faktor $\\frac{1}{2}$ pada persamaan posisi GLBB $y = \\frac{1}{2} a t^2$, atau mengabaikan kuadrat kecepatan $v_0^2$ pada penyebut."
    },
    "subTopicSlug": "kuat-medan-listrik",
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "sedang-fis-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-lis",
    "subTopicId": "fis-lis-statis-medan",
    "category": "Kuat Medan Listrik Nol",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua buah muatan titik $q_A = +4\\,\\mu\\text{C}$ dan $q_B = +9\\,\\mu\\text{C}$ terpisah sejauh $50\\text{ cm}$ di udara. Letak suatu titik pada garis hubung kedua muatan tersebut di mana kuat medan listrik totalnya sama dengan nol adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$15\\text{ cm}$ dari muatan A",
      "$20\\text{ cm}$ dari muatan A",
      "$25\\text{ cm}$ dari muatan A",
      "$30\\text{ cm}$ dari muatan A",
      "$35\\text{ cm}$ dari muatan A"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kuat Medan Listrik Nol di Antara Dua Muatan Sejenis:</strong><br>\n          Karena kedua muatan sejenis (keduanya positif), kuat medan listrik bernilai nol di suatu titik di antara keduanya:<br>\n          $$E_A = E_B \\implies k \\frac{q_A}{x^2} = k \\frac{q_B}{(d - x)^2} \\implies \\frac{\\sqrt{q_A}}{x} = \\frac{\\sqrt{q_B}}{d - x}$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Tarik akar pada kedua ruas:\n            $$\\frac{\\sqrt{4}}{x} = \\frac{\\sqrt{9}}{50 - x} \\implies \\frac{2}{x} = \\frac{3}{50 - x}$$\n          </li>\n          <li>Perkalian silang:\n            $$2(50 - x) = 3x \\implies 100 - 2x = 3x$$\n            $$5x = 100 \\implies x = 20\\text{ cm}$$\n          </li>\n          <li>Jadi titik tersebut berjarak $20\\text{ cm}$ dari muatan A (atau $30\\text{ cm}$ dari muatan B).</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Perhatikan pertanyaan: jarak diukur dari muatan A atau muatan B. Jarak dari A adalah $20\\text{ cm}$.\n        </div>\n      "
    },
    "bab": "Kelistrikan",
    "subBab": "Kuat Medan Listrik",
    "subTopic": "Kuat Medan Listrik",
    "chapterTitle": "Kelistrikan",
    "subChapterId": "fis-lis-statis",
    "subTopicSlug": "kuat-medan-listrik"
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
