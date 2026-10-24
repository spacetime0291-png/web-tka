/**
 * Bank Soal TKA: Fisika (TKA) - Gelombang dan Optik
 * Bab Kecil: Gelombang Bunyi (fis-gel-bunyi)
 * Sub-Bab: Intensitas & Taraf Intensitas (fis-gel-bunyi-taraf)
 * Slug: intensitas-taraf-intensitas
 * Indikator: Intensitas bunyi titik (I = P / (4*pi*r^2)) dan taraf intensitas desibel (TI = 10 log(I / I_0)).
 * 
 * Total Butir Soal: 14 (Mudah: 6, Sedang: 8, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-gel-bunyi-taraf";
  const subTopicSlug = "intensitas-taraf-intensitas";
  const questions = [
  {
    "id": "fis-gel-bunyi-taraf-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "mudah",
    "statement": "Intensitas gelombang bunyi pada suatu ruangan terukur sebesar $I = 10^{-8}\\text{ W/m}^2$. Jika intensitas ambang pendengaran manusia ditetapkan $I_0 = 10^{-12}\\text{ W/m}^2$, besar taraf intensitas bunyi di ruangan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$20\\text{ dB}$",
      "$30\\text{ dB}$",
      "$40\\text{ dB}$",
      "$50\\text{ dB}$",
      "$60\\text{ dB}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Taraf intensitas bunyi ($\\text{TI}$) dalam satuan desibel ($\\text{dB}$) didefinisikan sebagai logaritma dari perbandingan intensitas bunyi ($I$) terhadap intensitas ambang pendengaran ($I_0$):<br>$$\\text{TI} = 10 \\log\\left(\\frac{I}{I_0}\\right)$$",
      "steps": "1. Substitusikan nilai $I = 10^{-8}\\text{ W/m}^2$ dan $I_0 = 10^{-12}\\text{ W/m}^2$:<br>$$\\frac{I}{I_0} = \\frac{10^{-8}}{10^{-12}} = 10^{-8 - (-12)} = 10^4$$<br>2. Hitung taraf intensitasnya:<br>$$\\text{TI} = 10 \\log(10^4) = 10 \\times 4 = 40\\text{ dB}$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Siswa terkadang lupa mengalikan dengan faktor 10 pada skala desibel sehingga menjawab 4 dB, atau salah dalam menghitung pembagian bilangan berpangkat negatif."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-taraf-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "mudah",
    "statement": "Suatu ruangan memiliki taraf intensitas bunyi sebesar $60\\text{ dB}$. Jika intensitas ambang pendengaran $I_0 = 10^{-12}\\text{ W/m}^2$, intensitas bunyi di dalam ruangan tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10^{-4}\\text{ W/m}^2$",
      "$10^{-5}\\text{ W/m}^2$",
      "$10^{-6}\\text{ W/m}^2$",
      "$10^{-7}\\text{ W/m}^2$",
      "$10^{-8}\\text{ W/m}^2$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Hubungan kebalikan untuk menentukan intensitas bunyi ($I$) dari taraf intensitas ($\\text{TI}$) adalah:<br>$$\\text{TI} = 10 \\log\\left(\\frac{I}{I_0}\\right) \\implies \\log\\left(\\frac{I}{I_0}\\right) = \\frac{\\text{TI}}{10} \\implies I = I_0 \\times 10^{\\frac{\\text{TI}}{10}}$$",
      "steps": "1. Masukkan nilai $\\text{TI} = 60\\text{ dB}$:<br>$$\\frac{60}{10} = \\log\\left(\\frac{I}{10^{-12}}\\right) \\implies \\log\\left(\\frac{I}{10^{-12}}\\right) = 6$$<br>2. Bentuk persamaan eksponen:<br>$$\\frac{I}{10^{-12}} = 10^6 \\implies I = 10^{-12} \\times 10^6 = 10^{-6}\\text{ W/m}^2$$<br>3. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Hati-hati saat mengalikan $10^{-12} \\times 10^6$: pangkat dijumlahkan $(-12 + 6 = -6)$, bukan dikalikan."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-taraf-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "mudah",
    "statement": "Titik A berjarak $2\\text{ m}$ dari sebuah sumber bunyi titik dan menerima intensitas bunyi sebesar $I_A = 36\\text{ W/m}^2$. Besar intensitas bunyi yang diterima oleh titik B yang berjarak $6\\text{ m}$ dari sumber bunyi yang sama adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$4\\text{ W/m}^2$",
      "$6\\text{ W/m}^2$",
      "$9\\text{ W/m}^2$",
      "$12\\text{ W/m}^2$",
      "$18\\text{ W/m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Gelombang bunyi yang memancar dari sumber titik isotropis menyebar ke permukaan bola ($A = 4\\pi r^2$). Oleh karena itu, intensitas bunyi berbanding terbalik dengan kuadrat jarak:<br>$$I = \\frac{P}{4\\pi r^2} \\implies \\frac{I_B}{I_A} = \\left(\\frac{r_A}{r_B}\\right)^2$$",
      "steps": "1. Diketahui $r_A = 2\\text{ m}$, $r_B = 6\\text{ m}$, dan $I_A = 36\\text{ W/m}^2$.<br>2. Gunakan perbandingan terbalik kuadrat jarak:<br>$$\\frac{I_B}{36} = \\left(\\frac{2}{6}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$$<br>3. Hitung $I_B$:<br>$$I_B = \\frac{36}{9} = 4\\text{ W/m}^2$$<br>4. Jawaban yang benar adalah pilihan A.",
      "pitfalls": "Kesalahan umum adalah menganggap intensitas berbanding terbalik linier dengan jarak ($I \\propto 1/r$), yang menghasilkan $I_B = 36 \\times (2/6) = 12\\text{ W/m}^2$ (opsi D)."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-taraf-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "mudah",
    "statement": "Taraf intensitas bunyi sebuah klakson sepeda motor pada jarak tertentu adalah $70\\text{ dB}$. Jika terdapat $10$ klakson sepeda motor identik dibunyikan secara serentak pada jarak yang sama, taraf intensitas total yang dihasilkan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$71\\text{ dB}$",
      "$75\\text{ dB}$",
      "$80\\text{ dB}$",
      "$700\\text{ dB}$",
      "$800\\text{ dB}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Taraf intensitas untuk $n$ sumber bunyi identik yang berbunyi serentak dihitung dengan rumus:<br>$$\\text{TI}_n = \\text{TI}_1 + 10 \\log(n)$$",
      "steps": "1. Diketahui taraf intensitas 1 sumber $\\text{TI}_1 = 70\\text{ dB}$ dan jumlah sumber $n = 10$.<br>2. Masukkan ke dalam rumus taraf intensitas multi sumber:<br>$$\\text{TI}_{10} = 70 + 10 \\log(10)$$<br>3. Karena $\\log(10) = 1$, maka:<br>$$\\text{TI}_{10} = 70 + 10(1) = 80\\text{ dB}$$<br>4. Jawaban yang benar adalah pilihan C.",
      "pitfalls": "Sering terjadi kesalahan fatal dengan mengalikan langsung taraf intensitas dengan jumlah sumber ($70 \\times 10 = 700\\text{ dB}$, opsi D). Taraf intensitas menggunakan skala logaritmik, sehingga yang dijumlahkan secara linier adalah intensitas ($I$), bukan taraf intensitas ($\\text{TI}$)."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-taraf-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "mudah",
    "statement": "Taraf intensitas bunyi sebuah mesin pabrik yang terukur pada jarak $10\\text{ m}$ dari mesin adalah $90\\text{ dB}$. Besar taraf intensitas bunyi pada jarak $100\\text{ m}$ dari mesin tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$80\\text{ dB}$",
      "$85\\text{ dB}$",
      "$89\\text{ dB}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Perubahan taraf intensitas akibat perubahan jarak dari sumber bunyi titik memenuhi persamaan:<br>$$\\text{TI}_2 = \\text{TI}_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      "steps": "1. Diketahui $\\text{TI}_1 = 90\\text{ dB}$, $r_1 = 10\\text{ m}$, dan $r_2 = 100\\text{ m}$.<br>2. Hitung perbandingan jarak:<br>$$\\frac{r_2}{r_1} = \\frac{100}{10} = 10$$<br>3. Hitung $\\text{TI}_2$:<br>$$\\text{TI}_2 = 90 - 20 \\log(10) = 90 - 20(1) = 70\\text{ dB}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Siswa sering keliru menggunakan faktor 10 dan bukan 20 untuk perbandingan jarak, sehingga memperoleh $90 - 10 = 80\\text{ dB}$ (opsi C). Faktor 20 muncul karena intensitas berbanding terbalik dengan kuadrat jarak ($10 \\log(r^{-2}) = -20 \\log r$)."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Mudah"
  },
  {
    "id": "fis-gel-bunyi-taraf-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "sedang",
    "statement": "Taraf intensitas bunyi sebuah mesin tik pada jarak $2\\text{ m}$ adalah $50\\text{ dB}$. Jika terdapat $100$ mesin tik identik yang diketik bersamaan dan didengarkan pada jarak $20\\text{ m}$, taraf intensitas bunyi total yang terukur adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ dB}$",
      "$50\\text{ dB}$",
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$90\\text{ dB}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Kombinasi pengaruh penambahan jumlah sumber ($n$) dan perubahan jarak ($r$) terhadap taraf intensitas dirumuskan:<br>$$\\text{TI}' = \\text{TI}_1 + 10 \\log(n) - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      "steps": "1. Identifikasi variabel: $\\text{TI}_1 = 50\\text{ dB}$, $r_1 = 2\\text{ m}$, $n = 100$, dan $r_2 = 20\\text{ m}$.<br>2. Hitung kontribusi penambahan sumber bunyi:<br>$$\\Delta \\text{TI}_n = 10 \\log(100) = 10(2) = +20\\text{ dB}$$<br>3. Hitung efek pelemahan akibat pertambahan jarak:<br>$$\\Delta \\text{TI}_r = -20 \\log\\left(\\frac{20}{2}\\right) = -20 \\log(10) = -20(1) = -20\\text{ dB}$$<br>4. Jumlahkan seluruh kontribusi:<br>$$\\text{TI}' = 50 + 20 - 20 = 50\\text{ dB}$$<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Pertambahan taraf intensitas akibat 100 sumber (+20 dB) tepat saling meniadakan dengan pelemahan akibat jarak yang menjauh 10 kali lipat (-20 dB). Jangan lupa tanda minus pada suku jarak."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-taraf-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "sedang",
    "statement": "Suatu konser musik menghasilkan taraf intensitas $80\\text{ dB}$ ketika $1$ unit pengeras suara bekerja. Penyelenggara kemudian menyalakan beberapa pengeras suara identik tambahan sehingga taraf intensitas total pada jarak yang sama meningkat menjadi $93\\text{ dB}$. Jika diketahui $\\log 2 \\approx 0{,}3$, jumlah total pengeras suara yang dinyalakan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$10\\text{ unit}$",
      "$13\\text{ unit}$",
      "$15\\text{ unit}$",
      "$20\\text{ unit}$",
      "$25\\text{ unit}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Peningkatan taraf intensitas ($\\Delta\\text{TI}$) akibat penambahan jumlah sumber identik pada jarak yang sama adalah:<br>$$\\Delta \\text{TI} = \\text{TI}_n - \\text{TI}_1 = 10 \\log(n)$$",
      "steps": "1. Hitung selisih taraf intensitas:<br>$$\\Delta \\text{TI} = 93 - 80 = 13\\text{ dB}$$<br>2. Hubungkan dengan persamaan logaritma:<br>$$10 \\log(n) = 13 \\implies \\log(n) = 1{,}3$$<br>3. Uraikan bentuk logaritma menggunakan nilai $\\log 2 \\approx 0{,}3$:<br>$$1{,}3 = 1 + 0{,}3 = \\log(10) + \\log(2) = \\log(10 \\times 2) = \\log(20)$$<br>4. Diperoleh jumlah sumber $n = 20\\text{ unit}$.<br>5. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Siswa sering terkecoh dengan mengira $13\\text{ dB}$ berarti penambahan $13$ sumber (opsi B) karena mengira hubungan taraf intensitas dan jumlah sumber bersifat linier."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-taraf-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "sedang",
    "statement": "Pada jarak $5\\text{ m}$ dari sebuah sumber bunyi titik yang memancarkan energi secara isotropis ke segala arah, terukur taraf intensitas sebesar $80\\text{ dB}$. Jika intensitas ambang pendengaran $I_0 = 10^{-12}\\text{ W/m}^2$, besar daya akustik rata-rata dari sumber bunyi tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$\\pi \\times 10^{-3}\\text{ W}$",
      "$\\pi \\times 10^{-2}\\text{ W}$",
      "$2\\pi \\times 10^{-2}\\text{ W}$",
      "$4\\pi \\times 10^{-2}\\text{ W}$",
      "$10^{-2}\\text{ W}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Daya akustik sumber ($P$) dapat ditentukan dari intensitas bunyi ($I$) melalui luas permukaan bola muka gelombang ($A = 4\\pi r^2$):<br>$$I = I_0 \\times 10^{\\frac{\\text{TI}}{10}}, \\quad P = I \\times A = I \\times (4\\pi r^2)$$",
      "steps": "1. Konversi taraf intensitas $\\text{TI} = 80\\text{ dB}$ ke intensitas bunyi:<br>$$I = 10^{-12} \\times 10^{\\frac{80}{10}} = 10^{-12} \\times 10^8 = 10^{-4}\\text{ W/m}^2$$<br>2. Hitung luas permukaan bola pada radius $r = 5\\text{ m}$:<br>$$A = 4\\pi r^2 = 4\\pi (5)^2 = 100\\pi\\text{ m}^2$$<br>3. Hitung daya akustik sumber:<br>$$P = I \\times A = 10^{-4}\\text{ W/m}^2 \\times 100\\pi\\text{ m}^2 = \\pi \\times 10^{-2}\\text{ Watt}$$<br>4. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jangan menggunakan luas lingkaran $\\pi r^2$. Bunyi dari sumber titik memancar ke ruang tiga dimensi, sehingga luas permukaan yang digunakan wajib luas kulit bola $4\\pi r^2$."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-taraf-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "sedang",
    "statement": "Sebuah sirine pabrik menghasilkan taraf intensitas $100\\text{ dB}$ pada jarak $4\\text{ m}$. Agar taraf intensitas sirine tersebut turun hingga mencapai batas nyaman pendengaran sebesar $60\\text{ dB}$, posisi pengamat harus berjarak sejauh ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$40\\text{ m}$",
      "$80\\text{ m}$",
      "$200\\text{ m}$",
      "$400\\text{ m}$",
      "$800\\text{ m}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Hubungan penurunan taraf intensitas terhadap pertambahan jarak memenuhi persamaan logaritmik kuadrat jarak:<br>$$\\text{TI}_1 - \\text{TI}_2 = 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
      "steps": "1. Substitusikan $\\text{TI}_1 = 100\\text{ dB}$, $\\text{TI}_2 = 60\\text{ dB}$, dan $r_1 = 4\\text{ m}$:<br>$$100 - 60 = 20 \\log\\left(\\frac{r_2}{4}\\right) \\implies 40 = 20 \\log\\left(\\frac{r_2}{4}\\right)$$<br>2. Sederhanakan persamaan logaritma:<br>$$\\log\\left(\\frac{r_2}{4}\\right) = 2 \\implies \\frac{r_2}{4} = 10^2 = 100$$<br>3. Hitung jarak $r_2$:<br>$$r_2 = 4 \\times 100 = 400\\text{ m}$$<br>4. Jawaban yang benar adalah pilihan D.",
      "pitfalls": "Jika keliru menggunakan rumus $\\Delta\\text{TI} = 10 \\log(r_2/r_1)$, maka diperoleh $\\log(r_2/4) = 4 \\implies r_2 = 40.000\\text{ m}$. Ingat bahwa untuk jarak selalu berlaku koefisien 20 karena $I \\propto 1/r^2$."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "fis-gel-bunyi-taraf-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subChapterId": "fis-gel-bunyi",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas & Taraf Intensitas",
    "difficulty": "sedang",
    "statement": "Dua buah mesin berbeda tipe diuji di dalam laboratorium akustik. Mesin pertama menghasilkan taraf intensitas $\\text{TI}_1 = 60\\text{ dB}$, sedangkan mesin kedua menghasilkan taraf intensitas $\\text{TI}_2 = 60\\text{ dB}$. Jika kedua mesin dioperasikan secara bersamaan pada titik ukur yang sama dan diketahui $\\log 2 \\approx 0{,}3$, besar taraf intensitas totalnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ dB}$",
      "$63\\text{ dB}$",
      "$66\\text{ dB}$",
      "$90\\text{ dB}$",
      "$120\\text{ dB}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Taraf intensitas total dari dua sumber bunyi tidak dapat dijumlahkan secara langsung dalam satuan $\\text{dB}$. Yang dijumlahkan secara langsung adalah intensitas fisik ($I$) masing-masing sumber:<br>$$I_{\\text{tot}} = I_1 + I_2 \\implies \\text{TI}_{\\text{tot}} = 10 \\log\\left(\\frac{I_{\\text{tot}}}{I_0}\\right)$$",
      "steps": "1. Hitung intensitas bunyi mesin pertama dan kedua:<br>$$I_1 = 10^{-12} \\times 10^{\\frac{60}{10}} = 10^{-6}\\text{ W/m}^2$$<br>$$I_2 = 10^{-12} \\times 10^{\\frac{60}{10}} = 10^{-6}\\text{ W/m}^2$$<br>2. Jumlahkan intensitas total:<br>$$I_{\\text{tot}} = 10^{-6} + 10^{-6} = 2 \\times 10^{-6}\\text{ W/m}^2$$<br>3. Hitung taraf intensitas total:<br>$$\\text{TI}_{\\text{tot}} = 10 \\log\\left(\\frac{2 \\times 10^{-6}}{10^{-12}}\\right) = 10 \\log(2 \\times 10^6) = 10(6 + \\log 2)$$<br>4. Substitusikan $\\log 2 \\approx 0{,}3$:<br>$$\\text{TI}_{\\text{tot}} = 10(6 + 0{,}3) = 10(6{,}3) = 63\\text{ dB}$$<br>5. Jawaban yang benar adalah pilihan B.",
      "pitfalls": "Jebakan paling sering ditemui adalah menjumlahkan langsung nilai desibel $60 + 60 = 120\\text{ dB}$ (opsi E). Dua sumber yang identik intensitasnya selalu menghasilkan kenaikan tepat $+3\\text{ dB}$ ($10\\log 2 \\approx 3\\text{ dB}$)."
    },
    "subTopicSlug": "intensitas-taraf-intensitas",
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "difficultyLabel": "Sedang"
  },
  {
    "id": "drill2-bun-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Intensitas Bunyi Sumber Titik Isotropis",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pengeras suara memancarkan daya akustik $P = 40\\pi\\text{ Watt}$ secara seragam ke segala arah (sumber titik bola). Besar intensitas bunyi ($I$) yang diterima pada jarak $r = 10\\text{ meter}$ dari pengeras suara tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0{,}1\\text{ W/m}^2$",
      "$1{,}0\\text{ W/m}^2$",
      "$0{,}01\\text{ W/m}^2$",
      "$0{,}4\\text{ W/m}^2$",
      "$4{,}0\\text{ W/m}^2$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Intensitas Bunyi Permukaan Bola:</strong><br>Gelombang bunyi dari sumber titik menyebar membentuk bola dengan luas muka gelombang $A = 4\\pi r^2$:<br>$$I = \\frac{P}{A} = \\frac{P}{4\\pi r^2}$$</div>",
      "steps": "<ol><li>Luas bola pada $r = 10\\text{ m}$: $A = 4\\pi (10)^2 = 400\\pi\\text{ m}^2$.</li><li>Hitung intensitas: $I = \\frac{40\\pi\\text{ W}}{400\\pi\\text{ m}^2} = \\frac{1}{10} = 0{,}1\\text{ W/m}^2$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Tips Menghafal:</strong> Pembagi intensitas bola adalah $4\\pi r^2$ (luas kulit bola), bukan $\\pi r^2$ (luas lingkaran).</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "intensitas-taraf-intensitas"
  },
  {
    "id": "sup-fis-gel-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Taraf Intensitas Bunyi Multi Sumber",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Taraf intensitas bunyi sebuah mesin bor listrik pada jarak tertentu adalah $70\\text{ dB}$. Jika terdapat $100$ mesin bor identik yang bekerja serentak pada jarak yang sama, taraf intensitas bunyi total yang terdengar adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$90\\text{ dB}$",
      "$80\\text{ dB}$",
      "$170\\text{ dB}$",
      "$700\\text{ dB}$",
      "$85\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Taraf Intensitas Multi Sumber Sejenis:</strong><br>Ketika $n$ sumber bunyi identik berbunyi bersamaan, intensitasnya berlipat ganda sebesar $n$, sehingga taraf intensitas totalnya: $TI_n = TI_1 + 10 \\log_{10}(n)$.</div>",
      "steps": "<ol><li>Jumlah sumber bunyi: $n = 100 = 10^2$.</li><li>Kenaikan taraf intensitas: $\\Delta TI = 10 \\log_{10}(100) = 10 \\times 2 = 20\\text{ dB}$.</li><li>Taraf intensitas total: $TI_{\\text{total}} = 70 + 20 = 90\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengalikan langsung nilai dB ($70 \\times 100 = 7000\\text{ dB}$), padahal skala desibel merupakan skala logaritmik bukan linear.</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "intensitas-taraf-intensitas"
  },
  {
    "id": "drill-bun-08",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Taraf Intensitas Bunyi terhadap Perubahan Jarak",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Taraf intensitas bunyi sebuah sirene pabrik pada jarak $r_1 = 2\\text{ meter}$ adalah $TI_1 = 80\\text{ dB}$. Taraf intensitas bunyi yang terdengar pada jarak $r_2 = 20\\text{ meter}$ dari sirene tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$60\\text{ dB}$",
      "$70\\text{ dB}$",
      "$40\\text{ dB}$",
      "$78\\text{ dB}$",
      "$50\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hubungan Taraf Intensitas terhadap Jarak Titik:</strong><br>Karena intensitas mematuhi hukum kuadrat terbalik ($I \\propto 1/r^2$), taraf intensitas berkurang secara logaritmik:<br>$$TI_2 = TI_1 - 20 \\log_{10}\\left(\\frac{r_2}{r_1}\\right)$$</div>",
      "steps": "<ol><li>Rasio jarak: $\\frac{r_2}{r_1} = \\frac{20}{2} = 10$.</li><li>Hitung logaritma: $\\log_{10}(10) = 1$.</li><li>Pengurangan taraf intensitas: $\\Delta TI = 20 \\times 1 = 20\\text{ dB}$.</li><li>Taraf intensitas pada jarak 20 m: $TI_2 = 80 - 20 = 60\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Rumus Sakti Jarak:</strong> Jarak naik $10\\times \\implies TI$ turun tepat $20\\text{ dB}$. Jarak naik $100\\times \\implies TI$ turun tepat $40\\text{ dB}$. Faktor pengalinya adalah 20, bukan 10!</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "intensitas-taraf-intensitas"
  },
  {
    "id": "drill2-bun-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-gel",
    "subTopicId": "fis-gel-bunyi-taraf",
    "category": "Kenaikan Taraf Intensitas 10 Kali Sumber",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah sepeda motor menghasilkan taraf intensitas bunyi sebesar $TI_1 = 65\\text{ dB}$. Jika terdapat $10$ sepeda motor identik yang dibunyikan serentak, maka taraf intensitas bunyi gabungannya ($TI_{10}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$75\\text{ dB}$",
      "$650\\text{ dB}$",
      "$70\\text{ dB}$",
      "$85\\text{ dB}$",
      "$130\\text{ dB}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Kaidah Cepat Multi Sumber Bunyi:</strong><br>Setiap pelipatgandaan jumlah sumber sebesar $10\\times$ akan menambah taraf intensitas tepat $+10\\text{ dB}$:<br>$$TI_n = TI_1 + 10 \\log_{10}(n)$$</div>",
      "steps": "<ol><li>Jumlah sumber: $n = 10 \\implies \\log_{10}(10) = 1$.</li><li>Kenaikan taraf intensitas: $10 \\times 1 = 10\\text{ dB}$.</li><li>Taraf intensitas total: $TI = 65 + 10 = 75\\text{ dB}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pola Logaritmik:</strong><br>• $10\\times$ sumber $\\implies +10\\text{ dB}$<br>• $100\\times$ sumber $\\implies +20\\text{ dB}$<br>• $1000\\times$ sumber $\\implies +30\\text{ dB}$</div>"
    },
    "bab": "Gelombang dan Optik",
    "subBab": "Intensitas & Taraf Intensitas",
    "subTopic": "Intensitas & Taraf Intensitas",
    "chapterTitle": "Gelombang dan Optik",
    "subChapterId": "fis-gel-bunyi",
    "subTopicSlug": "intensitas-taraf-intensitas"
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
