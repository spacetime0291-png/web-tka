/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Kalor dan Perpindahannya (fis-termo-kalor)
 * Sub-Bab: Konduksi, Konveksi, dan Radiasi (fis-termo-kalor-perpindahan)
 * Slug: konduksi-konveksi-radiasi
 * Indikator: Laju konduksi Fourier, konveksi zat cair/gas, dan radiasi hukum Stefan-Boltzmann (P = e * sigma * A * T^4).
 * 
 * Total Butir Soal: 15 (Mudah: 6, Sedang: 9, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-kalor-perpindahan";
  const subTopicSlug = "konduksi-konveksi-radiasi";
  const questions = [
  {
    "id": "fis-termo-kalor-perpindahan-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Konduksi Kalor Batang Logam",
    "difficulty": "mudah",
    "statement": "Sebuah batang tembaga memiliki panjang $2\\text{ meter}$ dan luas penampang $0{,}01\\text{ m}^2$. Perbedaan suhu antara kedua ujung batang tersebut dijaga konstan sebesar $50^\\circ\\text{C}$. Jika konduktivitas termal tembaga adalah $400\\text{ W}/(\\text{m}\\cdot\\text{K})$, laju perpindahan kalor secara konduksi melalui batang tembaga tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$800\\text{ Watt}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Laju aliran kalor konduksi menurut hukum Fourier dirumuskan sebagai:<br>$$H = \\frac{Q}{t} = \\frac{k \\times A \\times \\Delta T}{L}$$<br>dengan $k$ adalah konduktivitas termal, $A$ luas penampang, $\\Delta T$ beda suhu, dan $L$ panjang batang.",
      "steps": "1. Tulis besaran yang diketahui:<br>$k = 400\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>$A = 0{,}01\\text{ m}^2$<br>$\\Delta T = 50^\\circ\\text{C} = 50\\text{ K}$<br>$L = 2\\text{ m}$<br>2. Hitung laju konduksi $H$:<br>$$H = \\frac{400 \\times 0{,}01 \\times 50}{2} = \\frac{200}{2} = 100\\text{ Watt}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Perhatikan bahwa panjang batang berada di posisi penyebut ($L$ membagi hasil kali $k A \\Delta T$). Kesalahan menempatkan $L$ sebagai pengali akan menghasilkan nilai $400\\text{ Watt}$ (opsi D)."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Laju aliran kalor konduksi menurut hukum Fourier dirumuskan sebagai: $$H = \\frac{Q}{t} = \\frac{k \\times A \\times \\Delta T}{L}$$ dengan $k$ adalah konduktivitas termal, $A$ luas penampang, $\\Delta T$ beda suhu, dan $L$ panjang batang. **Tips:** Perhatikan bahwa panjang batang berada di posisi penyebut ($L$ membagi hasil kali $k A \\Delta T$)."
  },
  {
    "id": "fis-termo-kalor-perpindahan-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Konsep Tiga Mekanisme Perpindahan Kalor",
    "difficulty": "mudah",
    "statement": "Energi panas matahari dapat merambat melintasi ruang hampa udara antariksa sejauh lebih dari 149 juta kilometer hingga akhirnya menghangatkan permukaan bumi. Mekanisme perpindahan kalor yang memungkinkan energi merambat melalui ruang hampa tanpa memerlukan partikel zat perantara adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Konduksi termal",
      "Konveksi alami",
      "Konveksi paksa",
      "Radiasi elektromagnetik",
      "Evaporasi latent"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Tiga mekanisme perpindahan kalor memiliki karakteristik media perantara yang berbeda:<br>1. Konduksi: perpindahan kalor melalui partikel zat tanpa disertai perpindahan massa zat perantara (butuh medium padat/kontak).<br>2. Konveksi: perpindahan kalor yang disertai aliran materi perantara (butuh medium fluida cair/gas).<br>3. Radiasi: perpindahan kalor dalam bentuk gelombang elektromagnetik (foton) yang tidak memerlukan medium perantara dan dapat merambat dalam ruang hampa.",
      "steps": "1. Antariksa antara matahari dan lapisan atas atmosfer bumi berupa ruang hampa udara (vakum).<br>2. Konduksi dan konveksi mensyaratkan adanya atom/molekul materi perantara sehingga tidak mungkin terjadi di ruang hampa.<br>3. Radiasi merambat dalam bentuk gelombang elektromagnetik berkecepatan cahaya, sehingga mampu menembus ruang hampa.<br>4. Jadi, mekanisme yang dimaksud adalah radiasi.<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan terkecoh dengan konveksi atau konduksi yang hanya dapat berlangsung jika terdapat medium partikel materi (padat, cair, atau gas)."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Tiga mekanisme perpindahan kalor memiliki karakteristik media perantara yang berbeda: 1. Konduksi: perpindahan kalor melalui partikel zat tanpa disertai perpindahan massa zat perantara (butuh medium padat/kontak). 2. Konveksi: perpindahan kalor yang disertai aliran materi perantara (butuh medium fluida cair/gas). 3. Radiasi: perpindahan kalor dalam bentuk gelombang elektromagnetik (foton) yang tidak memerlukan medium perantara dan dapat merambat dalam ruang hampa."
  },
  {
    "id": "fis-termo-kalor-perpindahan-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Perpindahan Kalor secara Konveksi",
    "difficulty": "mudah",
    "statement": "Sebuah pelat pemanas vertikal memiliki luas permukaan $0{,}5\\text{ m}^2$ dan berada pada suhu konstan $60^\\circ\\text{C}$. Pelat tersebut mendingin akibat aliran udara bebas di sekitarnya yang bersuhu $30^\\circ\\text{C}$. Jika koefisien perpindahan kalor konveksi udara adalah $h = 20\\text{ W}/(\\text{m}^2\\cdot^\\circ\\text{C})$, besar laju kalor yang dilepaskan pelat secara konveksi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$150\\text{ Watt}$",
      "$300\\text{ Watt}$",
      "$450\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$900\\text{ Watt}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Laju perpindahan kalor secara konveksi memenuhi hukum pendinginan Newton:<br>$$H = h \\times A \\times \\Delta T$$<br>dengan $h$ koefisien konveksi, $A$ luas permukaan yang bersentuhan dengan fluida, dan $\\Delta T = T_{\\text{permukaan}} - T_{\\text{fluida}}$.",
      "steps": "1. Identifikasi parameter:<br>$h = 20\\text{ W}/(\\text{m}^2\\cdot^\\circ\\text{C})$<br>$A = 0{,}5\\text{ m}^2$<br>$\\Delta T = 60^\\circ\\text{C} - 30^\\circ\\text{C} = 30^\\circ\\text{C}$<br>2. Hitung laju kalor konveksi $H$:<br>$$H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$$<br>3. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Pastikan menggunakan $\\Delta T = 60 - 30 = 30^\\circ\\text{C}$, bukan suhu pelat $60^\\circ\\text{C}$. Menggunakan $60^\\circ\\text{C}$ menghasilkan $600\\text{ Watt}$ (opsi D)."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Laju perpindahan kalor secara konveksi memenuhi hukum pendinginan Newton: $$H = h \\times A \\times \\Delta T$$ dengan $h$ koefisien konveksi, $A$ luas permukaan yang bersentuhan dengan fluida, dan $\\Delta T = T_{\\text{permukaan}} - T_{\\text{fluida}}$."
  },
  {
    "id": "fis-termo-kalor-perpindahan-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Daya Radiasi Termal Benda Hitam",
    "difficulty": "mudah",
    "statement": "Sebuah benda hitam sempurna ($e = 1$) memiliki luas permukaan $2\\text{ m}^2$ dan berada pada suhu mutlak $1000\\text{ Kelvin}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$, daya radiasi kalor total yang dipancarkan oleh seluruh permukaan benda tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$56{,}7\\text{ kW}$",
      "$113{,}4\\text{ kW}$",
      "$226{,}8\\text{ kW}$",
      "$567{,}0\\text{ kW}$",
      "$1134\\text{ kW}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hukum Stefan-Boltzmann menyatakan bahwa daya radiasi kalor total ($P$) yang dipancarkan oleh permukaan benda sebanding dengan pangkat empat suhu mutlaknya:<br>$$P = e \\times \\sigma \\times A \\times T^4$$",
      "steps": "1. Data soal: $e = 1$, $A = 2\\text{ m}^2$, $T = 1000\\text{ K} = 10^3\\text{ K}$, $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$.<br>2. Hitung $T^4$:<br>$$T^4 = (10^3)^4 = 10^{12}\\text{ K}^4$$<br>3. Hitung daya radiasi $P$:<br>$$P = 1 \\times (5{,}67 \\times 10^{-8}) \\times 2 \\times 10^{12} = 11{,}34 \\times 10^4\\text{ Watt} = 113.400\\text{ Watt}$$<br>4. Konversi ke kilowatt:<br>$$P = \\frac{113.400}{1000} = 113{,}4\\text{ kW}$$<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Perhatikan pangkat suhu. Suhu harus dipangkatkan 4 ($T^4$), bukan dipangkatkan 2 ($T^2$). Jika hanya memangkatkan 2, hasilnya akan salah sebesar beberapa orde magnitudo."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gunakan perumusan konsep fisis: $$P = e \\times \\sigma \\times A \\times T^4$$. **Tips:** Perhatikan pangkat suhu."
  },
  {
    "id": "fis-termo-kalor-perpindahan-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Pengaruh Perubahan Suhu terhadap Laju Radiasi",
    "difficulty": "mudah",
    "statement": "Suatu filament lampu pijar memancarkan daya radiasi kalor sebesar $P_0$ saat suhunya $300\\text{ K}$. Jika suhu filament tersebut dinaikkan menjadi $600\\text{ K}$ dengan luas permukaan dan emisivitas yang dianggap tetap, besar daya radiasi yang dipancarkan sekarang adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2\\,P_0$",
      "$4\\,P_0$",
      "$8\\,P_0$",
      "$16\\,P_0$",
      "$32\\,P_0$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum Stefan-Boltzmann, daya radiasi berbanding lurus dengan pangkat empat suhu termodinamika ($P \\propto T^4$):<br>$$\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4$$",
      "steps": "1. Diketahui rasio suhu mutlak:<br>$$\\frac{T_2}{T_1} = \\frac{600\\text{ K}}{300\\text{ K}} = 2$$<br>2. Masukkan ke perbandingan daya radiasi:<br>$$\\frac{P_2}{P_1} = (2)^4 = 16 \\implies P_2 = 16\\,P_0$$<br>3. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jebakan kelipatan linear: jika suhu naik 2 kali lipat, daya TIDAK naik 2 kali lipat (opsi A) ataupun 4 kali lipat ($2^2$, opsi B), melainkan $2^4 = 16$ kali lipat."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum Stefan-Boltzmann, daya radiasi berbanding lurus dengan pangkat empat suhu termodinamika ($P \\propto T^4$): $$\\frac{P_2}{P_1} = \\left(\\frac{T_2}{T_1}\\right)^4$$."
  },
  {
    "id": "fis-termo-kalor-perpindahan-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Suhu Sambungan Dua Batang Logam Konduksi Seri",
    "difficulty": "sedang",
    "statement": "Dua batang logam P dan Q disambungkan secara seri pada salah satu ujungnya. Kedua batang memiliki panjang dan luas penampang yang sama persis ($L_P = L_Q$ dan $A_P = A_Q$). Konduktivitas termal logam P adalah dua kali konduktivitas termal logam Q ($k_P = 2k_Q$). Ujung bebas batang P dipertahankan pada suhu $90^\\circ\\text{C}$ dan ujung bebas batang Q dipertahankan pada suhu $0^\\circ\\text{C}$. Pada keadaan tunak (steady state), suhu pada bidang sambungan kedua logam tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$30^\\circ\\text{C}$",
      "$45^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$70^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Pada kondisi tunak (steady state) tanpa kebocoran kalor melalui selimut batang, laju konduksi kalor yang mengalir melalui batang P harus sama dengan laju konduksi kalor yang melalui batang Q:<br>$$H_P = H_Q \\implies \\frac{k_P \\times A_P \\times (T_P - T_s)}{L_P} = \\frac{k_Q \\times A_Q \\times (T_s - T_Q)}{L_Q}$$",
      "steps": "1. Karena dimensi kedua batang sama ($A_P = A_Q$ dan $L_P = L_Q$), kedua besaran tersebut saling meniadakan:<br>$$k_P(T_P - T_s) = k_Q(T_s - T_Q)$$<br>2. Substitusikan $k_P = 2k_Q$, $T_P = 90^\\circ\\text{C}$, dan $T_Q = 0^\\circ\\text{C}$:<br>$$2k_Q(90 - T_s) = k_Q(T_s - 0)$$<br>3. Bagi kedua ruas dengan $k_Q$:<br>$$2(90 - T_s) = T_s \\implies 180 - 2T_s = T_s$$<br>$$3T_s = 180 \\implies T_s = \\frac{180}{3} = 60^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jangan mengasumsikan suhu sambungan adalah rata-rata langsung $(90 + 0)/2 = 45^\\circ\\text{C}$ (opsi B). Rata-rata langsung hanya berlaku jika konduktivitas kedua logam sama ($k_P = k_Q$). Karena logam P menghantarkan kalor lebih baik, suhunya lebih dekat ke ujung panas."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada kondisi tunak (steady state) tanpa kebocoran kalor melalui selimut batang, laju konduksi kalor yang mengalir melalui batang P harus sama dengan laju konduksi kalor yang melalui batang Q: $$H_P = H_Q \\implies \\frac{k_P \\times A_P \\times (T_P - T_s)}{L_P} = \\frac{k_Q \\times A_Q \\times (T_s - T_Q)}{L_Q}$$."
  },
  {
    "id": "fis-termo-kalor-perpindahan-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Radiasi Kalor Bersih (Net Radiation)",
    "difficulty": "sedang",
    "statement": "Sebuah pelat logam dengan luas permukaan $1\\text{ m}^2$ dan koefisien emisivitas $e = 0{,}8$ dipanaskan hingga suhunya mencapai $127^\\circ\\text{C}$. Pelat tersebut diletakkan di dalam ruangan yang bersuhu $27^\\circ\\text{C}$. Jika konstanta Stefan-Boltzmann adalah $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$, besar laju perpindahan kalor radiasi bersih (neto) dari pelat ke lingkungan sekitarnya adalah sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$396{,}9\\text{ Watt}$",
      "$567{,}0\\text{ Watt}$",
      "$793{,}8\\text{ Watt}$",
      "$992{,}3\\text{ Watt}$",
      "$1161\\text{ Watt}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Laju bersih perpindahan kalor secara radiasi antara benda pada suhu $T$ dan lingkungan pada suhu $T_0$ dihitung dengan rumus radiasi netto Stefan-Boltzmann:<br>$$P_{\\text{neto}} = e \\times \\sigma \\times A \\times (T^4 - T_0^4)$$<br>dengan suhu wajib dikonversikan ke skala mutlak Kelvin ($K = ^\\circ\\text{C} + 273$).",
      "steps": "1. Konversi suhu ke Kelvin:<br>$T = 127 + 273 = 400\\text{ K}$<br>$T_0 = 27 + 273 = 300\\text{ K}$<br>2. Hitung nilai $T^4 - T_0^4$:<br>$$T^4 = (400)^4 = 256 \\times 10^8\\text{ K}^4$$<br>$$T_0^4 = (300)^4 = 81 \\times 10^8\\text{ K}^4$$<br>$$T^4 - T_0^4 = (256 - 81) \\times 10^8 = 175 \\times 10^8\\text{ K}^4$$<br>3. Hitung daya radiasi bersih:<br>$$P_{\\text{neto}} = 0{,}8 \\times (5{,}67 \\times 10^{-8}) \\times 1 \\times (175 \\times 10^8)$$<br>$$P_{\\text{neto}} = 0{,}8 \\times 5{,}67 \\times 175 = 0{,}8 \\times 992{,}25 = 793{,}8\\text{ Watt}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jebakan fatal adalah menghitung $(T - T_0)^4 = (400 - 300)^4 = 100^4 = 10^8$, bukan $T^4 - T_0^4 = 175 \\times 10^8$. Perbedaan nilai keduanya mencapai 175 kali lipat."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Laju bersih perpindahan kalor secara radiasi antara benda pada suhu $T$ dan lingkungan pada suhu $T_0$ dihitung dengan rumus radiasi netto Stefan-Boltzmann: $$P_{\\text{neto}} = e \\times \\sigma \\times A \\times (T^4 - T_0^4)$$ dengan suhu wajib dikonversikan ke skala mutlak Kelvin ($K = ^\\circ\\text{C} + 273$)."
  },
  {
    "id": "fis-termo-kalor-perpindahan-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Konduksi Dinding Komposit Dua Lapis",
    "difficulty": "sedang",
    "statement": "Sebuah dinding ruang berpendingin terdiri dari dua lapisan bahan yang saling menempel rapat:<br>- Lapisan insulasi A dengan tebal $8\\text{ cm}$ dan konduktivitas termal $k_A = 0{,}08\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>- Lapisan kayu B dengan tebal $10\\text{ cm}$ dan konduktivitas termal $k_B = 0{,}20\\text{ W}/(\\text{m}\\cdot\\text{K})$<br>Suhu permukaan luar lapisan A adalah $35^\\circ\\text{C}$ dan suhu permukaan dalam lapisan B adalah $20^\\circ\\text{C}$. Suhu pada bidang antarmuka kontak antara lapisan A dan lapisan B adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$22^\\circ\\text{C}$",
      "$25^\\circ\\text{C}$",
      "$27{,}5^\\circ\\text{C}$",
      "$30^\\circ\\text{C}$",
      "$32^\\circ\\text{C}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Pada susunan dinding berlapis seri, laju aliran kalor konduksi per satuan luas ($H/A$) sama di setiap lapisan:<br>$$\\frac{H}{A} = \\frac{T_1 - T_b}{R_A} = \\frac{T_b - T_2}{R_B}$$<br>dengan resistansi termal konduksi per satuan luas $R = \\frac{d}{k}$.",
      "steps": "1. Hitung resistansi termal lapisan A:<br>$$R_A = \\frac{d_A}{k_A} = \\frac{0{,}08\\text{ m}}{0{,}08\\text{ W}/(\\text{m}\\cdot\\text{K})} = 1{,}0\\text{ m}^2\\cdot\\text{K/W}$$<br>2. Hitung resistansi termal lapisan B:<br>$$R_B = \\frac{d_B}{k_B} = \\frac{0{,}10\\text{ m}}{0{,}20\\text{ W}/(\\text{m}\\cdot\\text{K})} = 0{,}5\\text{ m}^2\\cdot\\text{K/W}$$<br>3. Samakan fluks kalor kedua lapisan:<br>$$\\frac{35 - T_b}{R_A} = \\frac{T_b - 20}{R_B} \\implies \\frac{35 - T_b}{1{,}0} = \\frac{T_b - 20}{0{,}5}$$<br>$$35 - T_b = 2(T_b - 20) = 2T_b - 40$$<br>$$3T_b = 75 \\implies T_b = 25^\\circ\\text{C}$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Pastikan satuan ketebalan dikonversi dari sentimeter ke meter ($8\\text{ cm} = 0{,}08\\text{ m}$ dan $10\\text{ cm} = 0{,}10\\text{ m}$) agar konsisten dengan satuan konduktivitas termal."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Pada susunan dinding berlapis seri, laju aliran kalor konduksi per satuan luas ($H/A$) sama di setiap lapisan: $$\\frac{H}{A} = \\frac{T_1 - T_b}{R_A} = \\frac{T_b - T_2}{R_B}$$ dengan resistansi termal konduksi per satuan luas $R = \\frac{d}{k}$."
  },
  {
    "id": "fis-termo-kalor-perpindahan-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Hukum Pergeseran Wien dan Intensitas Radiasi",
    "difficulty": "sedang",
    "statement": "Spektrum radiasi bintang X menunjukkan panjang gelombang emisi maksimum pada $\\lambda_{\\text{maks, X}} = 600\\text{ nm}$, sedangkan bintang Y menunjukkan panjang gelombang emisi maksimum pada $\\lambda_{\\text{maks, Y}} = 300\\text{ nm}$. Berdasarkan Hukum Pergeseran Wien dan Hukum Stefan-Boltzmann, perbandingan intensitas radiasi total per satuan luas permukaan bintang Y terhadap bintang X ($\\frac{I_Y}{I_X}$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2 : 1$",
      "$4 : 1$",
      "$8 : 1$",
      "$16 : 1$",
      "$32 : 1$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Hukum Pergeseran Wien menyatakan hubungan suhu mutlak dengan panjang gelombang puncak emisi:<br>$$\\lambda_{\\text{maks}} \\times T = C \\implies T \\propto \\frac{1}{\\lambda_{\\text{maks}}}$$<br>Sedangkan Hukum Stefan-Boltzmann menyatakan intensitas radiasi berbanding lurus dengan pangkat empat suhu:<br>$$I = \\sigma T^4 \\implies I \\propto \\left(\\frac{1}{\\lambda_{\\text{maks}}}\\right)^4$$",
      "steps": "1. Tentukan rasio suhu mutlak bintang Y terhadap bintang X:<br>$$\\frac{T_Y}{T_X} = \\frac{\\lambda_{\\text{maks, X}}}{\\lambda_{\\text{maks, Y}}} = \\frac{600\\text{ nm}}{300\\text{ nm}} = 2$$<br>2. Hubungkan dengan intensitas radiasi:<br>$$\\frac{I_Y}{I_X} = \\left(\\frac{T_Y}{T_X}\\right)^4 = (2)^4 = 16$$<br>3. Jadi, rasio intensitas radiasi per satuan luas bintang Y terhadap X adalah $16 : 1$.<br>4. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Perhatikan bahwa panjang gelombang berbanding TERBALIK dengan suhu. Bintang dengan $\\lambda_{\\text{maks}}$ lebih pendek bersuhu lebih tinggi. Jangan lupa memangkatkan empat perbandingan suhu tersebut."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Gunakan perumusan konsep fisis: $$\\lambda_{\\text{maks}} \\times T = C \\implies T \\propto \\frac{1}{\\lambda_{\\text{maks}}}$$ Sedangkan Hukum Stefan-Boltzmann menyatakan intensitas radiasi berbanding lurus dengan pangkat empat suhu: $$I = \\sigma T^4 \\implies I \\propto \\left(\\frac{1}{\\lambda_{\\text{maks}}}\\right)^4$$. **Tips:** Perhatikan bahwa panjang gelombang berbanding TERBALIK dengan suhu."
  },
  {
    "id": "fis-termo-kalor-perpindahan-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-kalor",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Peleburan Es Melalui Konduksi Batang Logam",
    "difficulty": "sedang",
    "statement": "Sebuah batang logam seragam dengan panjang $50\\text{ cm}$ dan luas penampang $2\\text{ cm}^2$ memiliki konduktivitas termal $k = 350\\text{ W}/(\\text{m}\\cdot\\text{K})$. Ujung pertama batang dicelupkan ke dalam air mendidih ($100^\\circ\\text{C}$), sedangkan ujung lainnya dimasukkan ke dalam bejana berisi es pada $0^\\circ\\text{C}$. Seluruh permukaan samping batang diselubungi isolator ideal. Jika kalor lebur es adalah $L = 336.000\\text{ J/kg}$, massa es yang mencair selama $40\\text{ menit}$ akibat hantaran kalor melalui batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$50\\text{ gram}$",
      "$75\\text{ gram}$",
      "$100\\text{ gram}$",
      "$120\\text{ gram}$",
      "$150\\text{ gram}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Kalor yang dihantarkan secara konduksi sepanjang batang dalam selang waktu $t$ digunakan sepenuhnya untuk meleburkan es:<br>$$Q = H \\times t = \\frac{k \\times A \\times \\Delta T}{L_{\\text{batang}}} \\times t$$<br>Massa es yang melebur dihitung dari kalor laten peleburan: $Q = m_{\\text{es}} \\times L_{\\text{lebur}}$.",
      "steps": "1. Konversi satuan ke SI:<br>$L_{\\text{batang}} = 50\\text{ cm} = 0{,}5\\text{ m}$<br>$A = 2\\text{ cm}^2 = 2 \\times 10^{-4}\\text{ m}^2$<br>$\\Delta T = 100^\\circ\\text{C} - 0^\\circ\\text{C} = 100\\text{ K}$<br>$t = 40\\text{ menit} = 40 \\times 60 = 2400\\text{ detik}$<br>2. Hitung laju konduksi kalor $H$:<br>$$H = \\frac{350 \\times (2 \\times 10^{-4}) \\times 100}{0{,}5} = \\frac{7}{0{,}5} = 14\\text{ W}$$<br>3. Hitung kalor total yang dihantarkan selama 40 menit:<br>$$Q = H \\times t = 14\\text{ W} \\times 2400\\text{ s} = 33.600\\text{ Joule}$$<br>4. Hitung massa es yang melebur:<br>$$m_{\\text{es}} = \\frac{Q}{L_{\\text{lebur}}} = \\frac{33.600\\text{ J}}{336.000\\text{ J/kg}} = 0{,}1\\text{ kg} = 100\\text{ gram}$$<br>5. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Lupa mengonversi luas penampang dari $\\text{cm}^2$ ke $\\text{m}^2$ ($1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}\\text{ m}^2$) atau lupa mengonversi menit ke detik akan menghasilkan jawaban yang salah ribuan kali lipat."
    },
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Kalor yang dihantarkan secara konduksi sepanjang batang dalam selang waktu $t$ digunakan sepenuhnya untuk meleburkan es: $$Q = H \\times t = \\frac{k \\times A \\times \\Delta T}{L_{\\text{batang}}} \\times t$$ Massa es yang melebur dihitung dari kalor laten peleburan: $Q = m_{\\text{es}} \\times L_{\\text{lebur}}$."
  },
  {
    "id": "drill2-kal-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Perpindahan Kalor secara Konveksi",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Sebuah pelat pemanas dengan luas penampang $A = 0{,}5\\text{ m}^2$ melepaskan kalor ke udara sekitarnya secara konveksi alami. Koefisien konveksi udara adalah $h = 20\\text{ W/m}^2\\cdot\\text{K}$. Jika perbedaan suhu antara pelat pemanas dan udara ruangan adalah $\\Delta T = 30^\\circ\\text{C}$, maka laju aliran kalor konveksi ($H$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$300\\text{ Watt}$",
      "$150\\text{ Watt}$",
      "$600\\text{ Watt}$",
      "$100\\text{ Watt}$",
      "$50\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Pendinginan Newton (Konveksi):</strong><br>$$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$</div>",
      "steps": "<ol><li>Identifikasi data: $h = 20\\text{ W/m}^2\\cdot\\text{K}$, $A = 0{,}5\\text{ m}^2$, $\\Delta T = 30\\text{ K}$.</li><li>Laju kalor: $H = 20 \\times 0{,}5 \\times 30 = 10 \\times 30 = 300\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Selisih Suhu:</strong> Nilai selisih suhu dalam Celcius sebanding tepat dengan selisih suhu dalam Kelvin ($Delta T\\text{ }^\\circ\\text{C} = \\Delta T\\text{ K}$). Jadi tidak perlu ditambah 273 saat menghitung selisih $Delta T$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "hint": "Gunakan perumusan konsep fisis: $$H = \\frac{Q}{t} = h \\cdot A \\cdot \\Delta T$$."
  },
  {
    "id": "sup-fis-ter-02",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Konduksi Termal Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Dua batang logam $P$ dan $Q$ dengan luas penampang dan panjang yang sama disambungkan ujungnya. Konduktivitas termal logam $P$ adalah dua kali konduktivitas termal logam $Q$ ($k_P = 2k_Q$). Jika ujung bebas logam $P$ bersuhu $90^\\circ\\text{C}$ dan ujung bebas logam $Q$ bersuhu $30^\\circ\\text{C}$, maka suhu sambungan kedua logam pada keadaan tunak (stasioner) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$70^\\circ\\text{C}$",
      "$60^\\circ\\text{C}$",
      "$65^\\circ\\text{C}$",
      "$75^\\circ\\text{C}$",
      "$50^\\circ\\text{C}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Kalor Keadaan Stasioner:</strong><br>Pada sambungan batang, laju aliran kalor melalui batang $P$ sama dengan laju aliran kalor melalui batang $Q$: $H_P = H_Q \\implies k_P A \\frac{\\Delta T_P}{L} = k_Q A \\frac{\\Delta T_Q}{L}$.</div>",
      "steps": "<ol><li>Karena $A$ dan $L$ sama: $k_P (90 - T) = k_Q (T - 30)$.</li><li>Substitusi $k_P = 2k_Q$: $2(90 - T) = T - 30$.</li><li>$180 - 2T = T - 30 \\implies 3T = 210 \\implies T = 70^\\circ\\text{C}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Jebakan Umum:</strong> Mengambil rata-rata aritmetika biasa $\\frac{90 + 30}{2} = 60^\\circ\\text{C}$ tanpa memperhitungkan perbedaan nilai konduktivitas kedua bahan.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "hint": "Laju Konduksi Kalor Keadaan Stasioner: Pada sambungan batang, laju aliran kalor melalui batang $P$ sama dengan laju aliran kalor melalui batang $Q$: $H_P = H_Q \\implies k_P A \\frac{\\Delta T_P}{L} = k_Q A \\frac{\\Delta T_Q}{L}$."
  },
  {
    "id": "drill-kal-06",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Laju Konduksi Kalor Batang Logam",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah batang tembaga memiliki panjang $L = 50\\text{ cm} = 0{,}5\\text{ m}$ dan luas penampang $A = 4\\text{ cm}^2 = 4 \\times 10^{-4}\\text{ m}^2$. Konduktivitas termal tembaga adalah $k = 400\\text{ W/m}\\cdot\\text{K}$. Jika perbedaan suhu antara kedua ujung batang dipertahankan sebesar $\\Delta T = 100^\\circ\\text{C}$, maka laju perpindahan kalor secara konduksi ($H$) melalui batang tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$32\\text{ Watt}$",
      "$16\\text{ Watt}$",
      "$64\\text{ Watt}$",
      "$8\\text{ Watt}$",
      "$320\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Laju Konduksi Termal Fourier:</strong><br>Laju rambatan kalor per detik berbanding lurus dengan konduktivitas termal, luas penampang, dan gradien suhu:<br>$$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$</div>",
      "steps": "<ol><li>Pembilang: $k \\cdot A \\cdot \\Delta T = 400 \\times (4 \\times 10^{-4}) \\times 100 = 16\\text{ W}\\cdot\\text{m}$.</li><li>Penyebut: $L = 0{,}5\\text{ m}$.</li><li>Laju kalor: $H = \\frac{16}{0{,}5} = 32\\text{ Watt}$ (Joule/detik).</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Konversi Luas $A$:</strong> $1\\text{ cm}^2 = 10^{-4}\\text{ m}^2$, bukan $10^{-2}$. Kesalahan umum lupa mengkuadratkan faktor $10^{-2}$.</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "hint": "Laju Konduksi Termal Fourier: Laju rambatan kalor per detik berbanding lurus dengan konduktivitas termal, luas penampang, dan gradien suhu: $$H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$$."
  },
  {
    "id": "drill-kal-07",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Daya Radiasi Termal Stefan-Boltzmann",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah filamen pemanas berbentuk silinder memancarkan daya radiasi sebesar $P_1 = 50\\text{ Watt}$ ketika suhunya berada pada $T_1 = 300\\text{ K}$. Jika suhu filamen tersebut dinaikkan menjadi $T_2 = 600\\text{ K}$, dengan luas permukaan dan emisivitas tetap, maka daya radiasi yang dipancarkan filamen sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$800\\text{ Watt}$",
      "$200\\text{ Watt}$",
      "$400\\text{ Watt}$",
      "$1600\\text{ Watt}$",
      "$100\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Hukum Radiasi Stefan-Boltzmann:</strong><br>Daya radiasi kalor sebanding dengan <strong>pangkat empat</strong> dari suhu mutlaknya:<br>$$P = e \\cdot \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_2}{P_1} = \\left( \\frac{T_2}{T_1} \\right)^4$$</div>",
      "steps": "<ol><li>Perbandingan suhu: $\\frac{T_2}{T_1} = \\frac{600}{300} = 2$.</li><li>Pangkat empatkan perbandingan: $2^4 = 16$.</li><li>Daya baru: $P_2 = 16 \\times P_1 = 16 \\times 50\\text{ W} = 800\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Pangkat Empat Wajib Diingat:</strong> Kenaikan suhu $2\\times \\implies$ daya radiasi naik $2^4 = 16\\times$. Kenaikan suhu $3\\times \\implies$ daya radiasi naik $3^4 = 81\\times$!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "hint": "Daya radiasi kalor sebanding dengan pangkat empat dari suhu mutlaknya: $$P = e \\cdot \\sigma \\cdot A \\cdot T^4 \\implies \\frac{P_2}{P_1} = \\left( \\frac{T_2}{T_1} \\right)^4$$."
  },
  {
    "id": "drill2-kal-05",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-kalor-perpindahan",
    "category": "Hubungan Daya Radiasi dan Luas Permukaan",
    "difficulty": "sedang",
    "difficultyLabel": "Sedang",
    "statement": "Sebuah pelat logam memancarkan energi radiasi termal sebesar $P_1 = 40\\text{ Watt}$. Jika pelat tersebut diganti dengan pelat sejenis dengan luas permukaan dua kali lipat semula ($A_2 = 2A_1$) dan dipanaskan pada suhu mutlak yang sama, maka daya radiasi yang dipancarkannya sekarang ($P_2$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$80\\text{ Watt}$",
      "$160\\text{ Watt}$",
      "$40\\text{ Watt}$",
      "$20\\text{ Watt}$",
      "$640\\text{ Watt}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Ketergantungan Radiasi terhadap Luas:</strong><br>$$P = e \\sigma A T^4 \\implies P \\propto A$$<br>Pada suhu tetap, daya radiasi berbanding lurus linear dengan luas permukaan pemancar.</div>",
      "steps": "<ol><li>Karena suhu $T$ tetap: $\\frac{P_2}{P_1} = \\frac{A_2}{A_1} = 2$.</li><li>Daya baru: $P_2 = 2 \\times P_1 = 2 \\times 40\\text{ W} = 80\\text{ Watt}$.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Hati-hati Tertukar:</strong> Daya sebanding dengan pangkat empat terhadap <strong>suhu</strong> ($T^4$), tetapi sebanding linear dengan <strong>luas permukaan</strong> ($A^1$). Jangan memangkat-empatkan luas!</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Konduksi, Konveksi, dan Radiasi",
    "subTopic": "Konduksi, Konveksi, dan Radiasi",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-kalor",
    "subTopicSlug": "konduksi-konveksi-radiasi",
    "hint": "Ketergantungan Radiasi terhadap Luas: $$P = e \\sigma A T^4 \\implies P \\propto A$$ Pada suhu tetap, daya radiasi berbanding lurus linear dengan luas permukaan pemancar."
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
