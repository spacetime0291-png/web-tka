/**
 * Bank Soal TKA: Fisika (TKA) - Kinematika
 * Bab Kecil: Gerak Lurus (fis-kin-gl)
 * Sub-Bab: Kelajuan dan Kecepatan (fis-kin-gl-kelajuan)
 * Slug: kelajuan-kecepatan
 * Indikator: Kelajuan rata-rata, kecepatan rata-rata, dan kecepatan sesaat.
 * 
 * Total Butir Soal: 15 (Mudah: 8, Sedang: 7, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-kin-gl-kelajuan";
  const subTopicSlug = "kelajuan-kecepatan";
  const questions = [
  {
    "id": "fis-kin-gl-kelajuan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "mudah",
    "statement": "Sebuah bus pariwisata menempuh jarak total $180\\text{ km}$ dalam selang waktu $2{,}5\\text{ jam}$. Nilai kelajuan rata-rata bus tersebut jika dinyatakan dalam satuan standar internasional ($\\text{m/s}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ m/s}$",
      "$25\\text{ m/s}$",
      "$15\\text{ m/s}$",
      "$72\\text{ m/s}$",
      "$18\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kelajuan rata-rata ($v_{\\text{rata}}$) adalah rasio jarak tempuh total ($s$) terhadap waktu tempuh total ($t$):<br>$$v_{\\text{rata}} = \\frac{s}{t}$$<br>Konversi satuan dari $\\text{km/jam}$ ke $\\text{m/s}$ dilakukan dengan mengalikan $\\frac{1000}{3600} = \\frac{5}{18}$.",
      "steps": "1. Hitung kelajuan rata-rata dalam $\\text{km/jam}$:<br>$$v_{\\text{rata}} = \\frac{180\\text{ km}}{2{,}5\\text{ jam}} = 72\\text{ km/jam}$$<br>2. Konversi ke satuan $\\text{m/s}$:<br>$$v = 72 \\times \\frac{5}{18}\\text{ m/s} = 4 \\times 5 = 20\\text{ m/s}$$",
      "pitfalls": "Lupa mengonversi satuan ke SI ($\text{m/s}$) sehingga langsung menjawab $72$."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kelajuan rata-rata ($v_{\\text{rata}}$) adalah rasio jarak tempuh total ($s$) terhadap waktu tempuh total ($t$): $$v_{\\text{rata}} = \\frac{s}{t}$$ Konversi satuan dari $\\text{km/jam}$ ke $\\text{m/s}$ dilakukan dengan mengalikan $\\frac{1000}{3600} = \\frac{5}{18}$. **Tips:** Lupa mengonversi satuan ke SI ($ ext{m/s}$) sehingga langsung menjawab $72$."
  },
  {
    "id": "fis-kin-gl-kelajuan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "mudah",
    "statement": "Seorang atlet berlari lurus ke arah timur menempuh jarak $100\\text{ m}$ dalam waktu $12\\text{ s}$, kemudian berbalik arah dan berjalan santai ke arah barat sejauh $20\\text{ m}$ selama $8\\text{ s}$. Besar kecepatan rata-rata atlet tersebut selama $20\\text{ s}$ perjalanan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$3\\text{ m/s}$",
      "$8\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan rata-rata ($\\bar{v}$) adalah besaran vektor yang dihitung dari perpindahan total ($\\Delta x$) dibagi total selang waktu ($\\Delta t$):<br>$$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$$",
      "steps": "1. Hitung perpindahan total atlet:<br>$$\\Delta x = 100\\text{ m} - 20\\text{ m} = +80\\text{ m}\\text{ (ke arah timur)}$$<br>2. Total waktu perjalanan:<br>$$\\Delta t = 12\\text{ s} + 8\\text{ s} = 20\\text{ s}$$<br>3. Hitung kecepatan rata-rata:<br>$$\\bar{v} = \\frac{80\\text{ m}}{20\\text{ s}} = 4\\text{ m/s}$$",
      "pitfalls": "Nilai $6\\text{ m/s}$ didapatkan jika menghitung kelajuan rata-rata (jarak total $120\\text{ m}$ dibagi $20\\text{ s}$). Soal secara spesifik menanyakan 'kecepatan rata-rata' (berbasis perpindahan)."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kecepatan rata-rata ($\\bar{v}$) adalah besaran vektor yang dihitung dari perpindahan total ($\\Delta x$) dibagi total selang waktu ($\\Delta t$): $$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$$. **Tips:** Nilai $6\\text{ m/s}$ didapatkan jika menghitung kelajuan rata-rata (jarak total $120\\text{ m}$ dibagi $20\\text{ s}$)."
  },
  {
    "id": "fis-kin-gl-kelajuan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "mudah",
    "statement": "Pernyataan yang paling tepat mengenai perbedaan mendasar antara konsep kelajuan rata-rata dan kecepatan rata-rata adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Kelajuan rata-rata adalah besaran skalar berbasis jarak total, sedangkan kecepatan rata-rata adalah besaran vektor berbasis perpindahan total.",
      "Kelajuan rata-rata selalu bernilai lebih kecil dibandingkan kecepatan rata-rata.",
      "Kecepatan rata-rata tidak memiliki arah gerak sedangkan kelajuan rata-rata memiliki arah gerak.",
      "Kelajuan rata-rata dihitung dari turunan posisi, sedangkan kecepatan rata-rata dihitung dari integral kelajuan.",
      "Kedua besaran selalu menghasilkan nilai numerik yang identik untuk segala jenis pola lintasan gerak."
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kelajuan adalah besaran skalar ($v = \\frac{s_{\\text{total}}}{t_{\\text{total}}}$) dan tidak bergantung pada arah gerak. Kecepatan adalah besaran vektor ($\\vec{v} = \\frac{\\Delta \\vec{r}}{\\Delta t}$) yang memiliki besar dan arah.",
      "steps": "Evaluasi opsi jawaban:<br>• Opsi A: Sangat tepat sesuai definisi fisis kinematika.<br>• Opsi B: Salah, kelajuan selalu $\\ge$ kecepatan.<br>• Opsi C: Terbalik definisi besaran skalar dan vektor.<br>• Opsi D: Menjelaskan konsep diferensial yang salah konteks.<br>• Opsi E: Hanya identik jika benda bergerak lurus satu arah tanpa berbalik.",
      "pitfalls": "Perhatikan definisi skalar (jarak) versus vektor (perpindahan)."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kelajuan adalah besaran skalar ($v = \\frac{s_{\\text{total}}}{t_{\\text{total}}}$) dan tidak bergantung pada arah gerak. Kecepatan adalah besaran vektor ($\\vec{v} = \\frac{\\Delta \\vec{r}}{\\Delta t}$) yang memiliki besar dan arah. **Tips:** Perhatikan definisi skalar (jarak) versus vektor (perpindahan)."
  },
  {
    "id": "fis-kin-gl-kelajuan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "mudah",
    "statement": "Sebuah partikel bergerak pada garis lurus dengan posisi dinyatakan oleh persamaan $x(t) = 3t^2 + 2t - 5$, dengan $x$ dalam meter dan $t$ dalam sekon. Kecepatan sesaat partikel pada saat $t = 4\\text{ s}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$26\\text{ m/s}$",
      "$51\\text{ m/s}$",
      "$24\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$28\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan sesaat ($v$) merupakan turunan pertama dari fungsi posisi $x(t)$ terhadap waktu $t$:<br>$$v(t) = \\frac{dx}{dt}$$",
      "steps": "1. Turunkan persamaan $x(t)$ terhadap $t$:<br>$$v(t) = \\frac{d}{dt}(3t^2 + 2t - 5) = 6t + 2$$<br>2. Substitusi nilai waktu $t = 4\\text{ s}$:<br>$$v(4) = 6(4) + 2 = 24 + 2 = 26\\text{ m/s}$$",
      "pitfalls": "Nilai $51\\text{ m}$ didapat jika langsung memasukkan $t = 4$ ke persamaan $x(t)$, yang merupakan kedudukan/posisi, bukan kecepatan."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kecepatan sesaat ($v$) merupakan turunan pertama dari fungsi posisi $x(t)$ terhadap waktu $t$: $$v(t) = \\frac{dx}{dt}$$."
  },
  {
    "id": "fis-kin-gl-kelajuan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "mudah",
    "statement": "Sebuah mobil menempuh jarak $60\\text{ km}$ pertama dengan kelajuan rata-rata $60\\text{ km/jam}$, kemudian menempuh $60\\text{ km}$ kedua dengan kelajuan rata-rata $40\\text{ km/jam}$. Kelajuan rata-rata mobil untuk seluruh perjalanan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$48\\text{ km/jam}$",
      "$50\\text{ km/jam}$",
      "$45\\text{ km/jam}$",
      "$52\\text{ km/jam}$",
      "$42\\text{ km/jam}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kelajuan rata-rata bukan merupakan rata-rata aritmetika biasa dari dua kelajuan, melainkan rata-rata harmonik (karena jarak tempuh tiap segmen sama):<br>$$v_{\\text{rata}} = \\frac{s_1 + s_2}{t_1 + t_2}$$",
      "steps": "1. Waktu tempuh segmen pertama:<br>$$t_1 = \\frac{s_1}{v_1} = \\frac{60}{60} = 1\\text{ jam}$$<br>2. Waktu tempuh segmen kedua:<br>$$t_2 = \\frac{s_2}{v_2} = \\frac{60}{40} = 1{,}5\\text{ jam}$$<br>3. Waktu total dan jarak total:<br>$$s_{\\text{total}} = 60 + 60 = 120\\text{ km},\\quad t_{\\text{total}} = 1 + 1{,}5 = 2{,}5\\text{ jam}$$<br>4. Kelajuan rata-rata seluruh perjalanan:<br>$$v_{\\text{rata}} = \\frac{120}{2{,}5} = 48\\text{ km/jam}$$",
      "pitfalls": "Jebakan paling sering adalah langsung merata-ratakan kelajuan: $\\frac{60 + 40}{2} = 50\\text{ km/jam}$. Rata-rata aritmetika hanya berlaku jika waktu tempuh kedua segmen sama, bukan jaraknya."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Mudah",
    "hint": "Kelajuan rata-rata bukan merupakan rata-rata aritmetika biasa dari dua kelajuan, melainkan rata-rata harmonik (karena jarak tempuh tiap segmen sama): $$v_{\\text{rata}} = \\frac{s_1 + s_2}{t_1 + t_2}$$."
  },
  {
    "id": "fis-kin-gl-kelajuan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "sedang",
    "statement": "Sebuah mobil ekspedisi menempuh perjalanan antar-kota yang dibagi menjadi tiga segmen lintasan dengan panjang sama besar. Sepertiga jarak pertama ditempuh dengan kelajuan rata-rata $v_1 = 20\\text{ km/jam}$, sepertiga jarak kedua dengan $v_2 = 30\\text{ km/jam}$, dan sepertiga jarak terakhir dengan $v_3 = 60\\text{ km/jam}$. Kelajuan rata-rata mobil untuk seluruh perjalanan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30\\text{ km/jam}$",
      "$36{,}67\\text{ km/jam}$",
      "$25\\text{ km/jam}$",
      "$35\\text{ km/jam}$",
      "$28\\text{ km/jam}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Jika suatu perjalanan dibagi menjadi beberapa bagian jarak yang sama besar ($s_1 = s_2 = s_3 = s$), kelajuan rata-rata dihitung menggunakan rata-rata harmonik:<br>$$\\frac{1}{v_{\\text{rata}}} = \\frac{1}{3} \\left( \\frac{1}{v_1} + \\frac{1}{v_2} + \\frac{1}{v_3} \\right)$$",
      "steps": "1. Misal masing-masing sepertiga jarak adalah $s$. Waktu tempuh tiap bagian:<br>$$t_1 = \\frac{s}{20},\\quad t_2 = \\frac{s}{30},\\quad t_3 = \\frac{s}{60}$$<br>2. Waktu total perjalanan:<br>$$t_{\\text{total}} = s \\left( \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{60} \\right) = s \\left( \\frac{3 + 2 + 1}{60} \\right) = s \\left( \\frac{6}{60} \\right) = \\frac{s}{10}$$<br>3. Jarak total = $3s$. Maka kelajuan rata-rata:<br>$$v_{\\text{rata}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}} = \\frac{3s}{\\frac{s}{10}} = 3 \\times 10 = 30\\text{ km/jam}$$",
      "pitfalls": "Jebakan paling sering adalah merata-ratakan aritmetika biasa: $\\frac{20 + 30 + 60}{3} = \\frac{110}{3} \\approx 36{,}67\\text{ km/jam}$, yang merupakan jawaban keliru."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Jika suatu perjalanan dibagi menjadi beberapa bagian jarak yang sama besar ($s_1 = s_2 = s_3 = s$), kelajuan rata-rata dihitung menggunakan rata-rata harmonik: $$\\frac{1}{v_{\\text{rata}}} = \\frac{1}{3} \\left( \\frac{1}{v_1} + \\frac{1}{v_2} + \\frac{1}{v_3} \\right)$$."
  },
  {
    "id": "fis-kin-gl-kelajuan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "sedang",
    "statement": "Sebuah benda bergerak pada garis lurus dengan kecepatan sesaat yang bergantung pada waktu menurut persamaan $v(t) = 6t^2 - 18t + 12$ ($v$ dalam $\\text{m/s}$ dan $t$ dalam sekon). Besar perpindahan dan kecepatan rata-rata benda tersebut dalam selang waktu dari $t = 1\\text{ s}$ sampai $t = 3\\text{ s}$ berturut-turut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ m}$ dan $2\\text{ m/s}$",
      "$8\\text{ m}$ dan $4\\text{ m/s}$",
      "$6\\text{ m}$ dan $3\\text{ m/s}$",
      "$4\\text{ m}$ dan $1\\text{ m/s}$",
      "$12\\text{ m}$ dan $6\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Perpindahan merupakan integral tentu dari fungsi kecepatan terhadap waktu:<br>$$\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt$$<br>Kecepatan rata-rata adalah perbandingan perpindahan terhadap selang waktu:<br>$$\\bar{v} = \\frac{\\Delta x}{t_2 - t_1}$$",
      "steps": "1. Integrasikan fungsi kecepatan dari $t = 1\\text{ s}$ ke $t = 3\\text{ s}$:<br>$$\\Delta x = \\int_1^3 (6t^2 - 18t + 12)\\,dt = \\left[ 2t^3 - 9t^2 + 12t \\right]_1^3$$<br>2. Evaluasi batas integrasi:<br>Saat $t = 3$: $2(27) - 9(9) + 12(3) = 54 - 81 + 36 = 9\\text{ m}$<br>Saat $t = 1$: $2(1) - 9(1) + 12(1) = 5\\text{ m}$<br>$$\\Delta x = 9 - 5 = 4\\text{ m}$$<br>3. Hitung kecepatan rata-rata:<br>$$\\bar{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{4\\text{ m}}{3 - 1\\text{ s}} = \\frac{4}{2} = 2\\text{ m/s}$$",
      "pitfalls": "Jangan menghitung nilai kecepatan di titik awal dan titik akhir lalu membaginya dengan 2, karena $v(t)$ adalah fungsi nonlinear kuadrat."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Perpindahan merupakan integral tentu dari fungsi kecepatan terhadap waktu: $$\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt$$ Kecepatan rata-rata adalah perbandingan perpindahan terhadap selang waktu: $$\\bar{v} = \\frac{\\Delta x}{t_2 - t_1}$$."
  },
  {
    "id": "fis-kin-gl-kelajuan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak menelusuri lintasan lingkaran berjari-jari $R = 10\\text{ m}$ dengan kelajuan konstan $v = 5\\text{ m/s}$. Besar kecepatan rata-rata partikel ketika telah menempuh tepat seperempat lingkaran adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\frac{10\\sqrt{2}}{\\pi}\\text{ m/s}$",
      "$5\\text{ m/s}$",
      "$\\frac{5\\sqrt{2}}{\\pi}\\text{ m/s}$",
      "$\\frac{20}{\\pi}\\text{ m/s}$",
      "$5\\sqrt{2}\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kecepatan rata-rata adalah besar vektor perpindahan dibagi dengan waktu tempuh:<br>$$|\\bar{\\vec{v}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t}$$<br>Untuk seperempat lingkaran, vektor posisi awal dan akhir saling tegak lurus.",
      "steps": "1. Hitung besar perpindahan (tali busur siku-siku):<br>$$|\\Delta \\vec{r}| = \\sqrt{R^2 + R^2} = R\\sqrt{2} = 10\\sqrt{2}\\text{ m}$$<br>2. Hitung jarak tempuh busur dan waktu tempuh:<br>$$s = \\frac{1}{4}(2\\pi R) = \\frac{1}{2}\\pi(10) = 5\\pi\\text{ m}$$<br>$$\\Delta t = \\frac{s}{v} = \\frac{5\\pi}{5} = \\pi\\text{ sekon}$$<br>3. Hitung besar kecepatan rata-rata:<br>$$|\\bar{\\vec{v}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t} = \\frac{10\\sqrt{2}}{\\pi}\\text{ m/s}$$",
      "pitfalls": "Kelajuan konstan adalah $5\\text{ m/s}$, namun kecepatan rata-ratanya berbeda karena lintasan membelok sehingga besar perpindahan lebih kecil dari panjang busur lintasan."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Kecepatan rata-rata adalah besar vektor perpindahan dibagi dengan waktu tempuh: $$|\\bar{\\vec{v}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t}$$ Untuk seperempat lingkaran, vektor posisi awal dan akhir saling tegak lurus."
  },
  {
    "id": "fis-kin-gl-kelajuan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "sedang",
    "statement": "Sebuah mobil menempuh perjalanan pergi dengan membagi waktu tempuhnya menjadi dua bagian sama besar: separuh waktu pertama dipacu dengan kelajuan $40\\text{ km/jam}$ dan separuh waktu kedua dengan $80\\text{ km/jam}$. Pada saat perjalanan pulang melalui lintasan yang sama, mobil membagi jaraknya menjadi dua bagian sama panjang: separuh jarak pertama ditempuh dengan kelajuan $40\\text{ km/jam}$ dan separuh jarak kedua dengan $80\\text{ km/jam}$. Perbandingan kelajuan rata-rata saat berangkat ($v_B$) terhadap kelajuan rata-rata saat pulang ($v_P$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$9 : 8$",
      "$8 : 9$",
      "$1 : 1$",
      "$3 : 2$",
      "$4 : 3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Saat waktu tempuh dibagi sama besar, kelajuan rata-rata adalah rata-rata aritmetika: $v = \\frac{v_1 + v_2}{2}$. Saat jarak tempuh dibagi sama panjang, kelajuan rata-rata adalah rata-rata harmonik: $v = \\frac{2v_1 v_2}{v_1 + v_2}$.",
      "steps": "1. Kelajuan rata-rata berangkat (waktu sama):<br>$$v_B = \\frac{40 + 80}{2} = 60\\text{ km/jam}$$<br>2. Kelajuan rata-rata pulang (jarak sama):<br>$$v_P = \\frac{2(40)(80)}{40 + 80} = \\frac{6400}{120} = \\frac{160}{3}\\text{ km/jam}$$<br>3. Perbandingan rasio:<br>$$\\frac{v_B}{v_P} = \\frac{60}{\\frac{160}{3}} = \\frac{180}{160} = \\frac{9}{8} = 9 : 8$$",
      "pitfalls": "Jangan menganggap kelajuan rata-rata pergi dan pulang bernilai sama karena kondisi pembagian parameter waktu vs jarak memberikan bobot yang berbeda."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Saat waktu tempuh dibagi sama besar, kelajuan rata-rata adalah rata-rata aritmetika: $v = \\frac{v_1 + v_2}{2}$. Saat jarak tempuh dibagi sama panjang, kelajuan rata-rata adalah rata-rata harmonik: $v = \\frac{2v_1 v_2}{v_1 + v_2}$."
  },
  {
    "id": "fis-kin-gl-kelajuan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-gl",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kelajuan dan Kecepatan",
    "difficulty": "sedang",
    "statement": "Sebuah partikel bergerak pada bidang datar dengan vektor posisi dinyatakan oleh $\\vec{r}(t) = (2t^2 - 4)\\hat{i} + (t^3 - 6t)\\hat{j}$, dengan $r$ dalam meter dan $t$ dalam sekon. Besar kecepatan sesaat partikel pada saat $t = 2\\text{ sekon}$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ m/s}$",
      "$14\\text{ m/s}$",
      "$8\\text{ m/s}$",
      "$6\\text{ m/s}$",
      "$12\\text{ m/s}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Vektor kecepatan sesaat diperoleh dari turunan pertama vektor posisi terhadap waktu:<br>$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$<br>Besar kecepatan sesaat merupakan norma vektor kecepatan:<br>$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$",
      "steps": "1. Turunkan komponen posisi terhadap waktu:<br>$$v_x(t) = \\frac{d}{dt}(2t^2 - 4) = 4t$$<br>$$v_y(t) = \\frac{d}{dt}(t^3 - 6t) = 3t^2 - 6$$<br>2. Substitusi waktu $t = 2\\text{ s}$:<br>$$v_x(2) = 4(2) = 8\\text{ m/s}$$<br>$$v_y(2) = 3(2)^2 - 6 = 12 - 6 = 6\\text{ m/s}$$<br>3. Hitung besar resultan kecepatan sesaat:<br>$$|\\vec{v}| = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ m/s}$$",
      "pitfalls": "Lupa menjumlahkan secara vektor kuadrat (Pythagoras) dan langsung menjumlahkan komponen secara aljabar alih-alih $8 + 6 = 14$."
    },
    "subTopicSlug": "kelajuan-kecepatan",
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "difficultyLabel": "Sedang",
    "hint": "Vektor kecepatan sesaat diperoleh dari turunan pertama vektor posisi terhadap waktu: $$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$ Besar kecepatan sesaat merupakan norma vektor kecepatan: $$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$."
  },
  {
    "id": "sedang-fis-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Kinematika Gerak Lurus Pengejaran",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Mobil patroli kepolisian $A$ yang semula diam mulai bergerak dengan percepatan konstan $a = 2\\text{ m/s}^2$ untuk mengejar mobil pelanggar $B$. Pada saat yang bersamaan, mobil $B$ melintas melewati mobil $A$ dengan kelajuan tetap $v = 10\\text{ m/s}$ pada lintasan lurus yang sama. Waktu yang diperlukan mobil $A$ untuk tepat menyusul mobil $B$ sejak awal gerak adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$5\\text{ detik}$",
      "$8\\text{ detik}$",
      "$10\\text{ detik}$",
      "$12\\text{ detik}$",
      "$15\\text{ detik}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Kondisi Pertemuan/Pengejaran Dua Benda:</strong><br>\n          Dua benda yang berangkat dari titik awal yang sama akan bertemu saat jarak tempuh keduanya sama:<br>\n          $$s_A(t) = s_B(t)$$\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Persamaan jarak mobil $A$ (GLBB dari diam): $s_A = \\frac{1}{2} a t^2 = \\frac{1}{2}(2) t^2 = t^2$.</li>\n          <li>Persamaan jarak mobil $B$ (GLB): $s_B = v t = 10t$.</li>\n          <li>Samakan jarak tempuh keduanya:\n            $$t^2 = 10t \\implies t(t - 10) = 0$$\n          </li>\n          <li>Karena $t > 0$, maka mobil $A$ menyusul mobil $B$ pada saat $t = 10\\text{ detik}$.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Hati-hati: saat $t = 5\\text{ detik}$, kecepatan kedua mobil memang sama ($v_A = a t = 10\\text{ m/s}$), namun mobil $A$ belum menyusul mobil $B$ (jarak $A$ baru $25\\text{ m}$ sedangkan $B$ sudah $50\\text{ m}$).\n        </div>\n      "
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan",
    "hint": "Kondisi Pertemuan/Pengejaran Dua Benda: Dua benda yang berangkat dari titik awal yang sama akan bertemu saat jarak tempuh keduanya sama: $$s_A(t) = s_B(t)$$."
  },
  {
    "id": "fis-din-13",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan bermassa $1200\\text{ kg}$ melintasi puncak jembatan layang yang memiliki kelengkungan cembung dengan jari-jari $R = 40\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan maksimum mobil di puncak jembatan agar roda tetap mempertahankan kontak dengan jalan (tidak terangkat ke udara) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "10 m/s",
      "12 m/s",
      "15 m/s",
      "18 m/s",
      "20 m/s"
    ],
    "correctIndex": 4,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar vertikal di puncak bukit/jembatan cembung: $mg - N = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>Kondisi batas mobil tepat tidak terlempar/terangkat adalah gaya normal bernilai nol ($N = 0$).<br>$$mg = \\frac{m v_{\\max}^2}{R} \\Rightarrow v_{\\max} = \\sqrt{g R} = \\sqrt{10 \\times 40} = \\sqrt{400} = 20\\text{ m/s}$$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengira massa mobil ($1200\\text{ kg}$) berpengaruh pada kecepatan lepas, padahal variabel massa tereliminasi dari persamaan.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan",
    "hint": "Konsep: Dinamika gerak melingkar vertikal di puncak bukit/jembatan cembung: $mg - N = \\frac{m v^2}{R}$."
  },
  {
    "id": "fis-din-37",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah mobil sedan melintasi tikungan jalan datar beraspal dengan jari-jari kelengkungan $R = 25\\text{ meter}$. Koefisien gesekan statis antara ban mobil dan permukaan aspal adalah $\\mu_s = 0{,}40$. Jika $g = 10\\text{ m/s}^2$, kelajuan maksimum yang diperbolehkan agar mobil dapat berbelok dengan aman tanpa selip keluar jalur adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "5 m/s",
      "10 m/s",
      "15 m/s",
      "20 m/s",
      "25 m/s"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan datar kasar: gaya gesek statis bertindak sebagai gaya sentripetal ($f_s \\le \\mu_s mg = \\frac{m v^2}{R}$).</div>",
      "steps": "<ol><li>$$v_{\\max} = \\sqrt{\\mu_s g R} = \\sqrt{0{,}40 \\times 10 \\times 25} = \\sqrt{100} = 10\\text{ m/s}$$. (Setara dengan $36\\text{ km/jam}$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Lupa menarik akar kuadrat sehingga menjawab $100\\text{ m/s}$ atau mengira kelajuan maksimum bergantung pada massa mobil.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan",
    "hint": "Konsep: Tikungan datar kasar: gaya gesek statis bertindak sebagai gaya sentripetal ($f_s \\le \\mu_s mg = \\frac{m v^2}{R}$). **Tips:** Lupa menarik akar kuadrat sehingga menjawab $100\\text{ m/s}$ atau mengira kelajuan maksimum bergantung pada massa mobil."
  },
  {
    "id": "fis-din-38",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah kereta *roller coaster* membawa seorang penumpang bermassa $60\\text{ kg}$ melintasi titik terbawah lintasan lembah cekung dengan kelajuan $v = 20\\text{ m/s}$. Jari-jari kelengkungan lembah cekung tersebut adalah $R = 20\\text{ meter}$. Jika $g = 10\\text{ m/s}^2$, besar gaya normal yang dikerjakan kursi terhadap badan penumpang di titik terendah tersebut adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "600 N",
      "1200 N",
      "1500 N",
      "1800 N",
      "2400 N"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Dinamika gerak melingkar di titik terendah lembah cekung: $N - mg = \\frac{m v^2}{R}$.</div>",
      "steps": "<ol><li>1) Berat penumpang: $W = mg = 60(10) = 600\\text{ N}$.<br>2) Gaya sentripetal: $F_s = \\frac{m v^2}{R} = \\frac{60 \\times 20^2}{20} = 1200\\text{ N}$.<br>3) Gaya normal: $N = W + F_s = 600 + 1200 = 1800\\text{ N}$ (penumpang merasakan sensasi $3g$).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering mengurangkan gaya sentripetal dengan gaya berat ($N = 1200 - 600 = 600\\text{ N}$) karena tertukar dengan kasus bukit cembung.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan",
    "hint": "Konsep: Dinamika gerak melingkar di titik terendah lembah cekung: $N - mg = \\frac{m v^2}{R}$."
  },
  {
    "id": "fis-din-15",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subTopicId": "fis-kin-gl-kelajuan",
    "category": "Gerak Melingkar & Gaya Sentripetal",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah jalan tikungan sirkuit balap dirancang dengan kemiringan sudut $\\theta = 37^\\circ$ terhadap bidang datar horizontal ($\\tan 37^\\circ = 0{,}75$) dan memiliki jari-jari kelengkungan $R = 120\\text{ meter}$. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, kelajuan rancangan aman (*design banking speed*) mobil balap agar dapat melintasi tikungan tanpa bergantung sama sekali pada gaya gesekan ban adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "15 m/s",
      "20 m/s",
      "25 m/s",
      "30 m/s",
      "40 m/s"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Konsep:</strong><br>Tikungan miring licin (design banking angle): komponen horizontal gaya normal bertindak sebagai gaya sentripetal ($N \\sin\\theta = \\frac{m v^2}{R}$ dan $N \\cos\\theta = mg$).</div>",
      "steps": "<ol><li>1) Dari perbandingan kedua sumbu: $\\tan\\theta = \\frac{v^2}{g R}$.<br>2) Menghitung kelajuan aman: $v = \\sqrt{g R \\tan\\theta} = \\sqrt{10 \\times 120 \\times 0{,}75} = \\sqrt{900} = 30\\text{ m/s}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan & Catatan:</strong><br>Siswa sering membalik fungsi trigonometri menjadi $\\frac{g R}{\\tan\\theta}$ atau lupa menarik akar kuadrat dari 900.</div>"
    },
    "bab": "Kinematika",
    "subBab": "Kelajuan dan Kecepatan",
    "subTopic": "Kelajuan dan Kecepatan",
    "chapterTitle": "Kinematika",
    "subChapterId": "fis-kin-gl",
    "subTopicSlug": "kelajuan-kecepatan",
    "hint": "Konsep: Tikungan miring licin (design banking angle): komponen horizontal gaya normal bertindak sebagai gaya sentripetal ($N \\sin\\theta = \\frac{m v^2}{R}$ dan $N \\cos\\theta = mg$). **Tips:** Siswa sering membalik fungsi trigonometri menjadi $\\frac{g R}{\\tan\\theta}$ atau lupa menarik akar kuadrat dari 900."
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
