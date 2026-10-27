/**
 * Bank Soal TKA: Fisika (TKA) - Kalor dan Termodinamika
 * Bab Kecil: Pemanasan Global (fis-termo-global)
 * Sub-Bab: Efek Rumah Kaca (fis-termo-global-efek)
 * Slug: efek-rumah-kaca
 * Indikator: Mekanisme perangkap gelombang inframerah oleh gas rumah kaca (CO2, CH4, N2O, uap air).
 * 
 * Total Butir Soal: 12 (Mudah: 7, Sedang: 5, HOTS: 0)
 * Arsitektur: 4-Level Modular (Browser & Node.js Compatible)
 */

(function() {
  const subTopicId = "fis-termo-global-efek";
  const subTopicSlug = "efek-rumah-kaca";
  const questions = [
  {
    "id": "fis-termo-global-efek-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Mekanisme Fisik Efek Rumah Kaca",
    "difficulty": "mudah",
    "statement": "Radiasi matahari dengan panjang gelombang pendek (sebagian besar berupa cahaya tampak) melewati atmosfer dan diserap oleh daratan serta lautan bumi. Permukaan bumi yang menghangat kemudian memancarkan kembali energi tersebut ke atmosfer dalam bentuk spektrum gelombang elektromagnetik berupa ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar gamma",
      "Sinar-X",
      "Sinar ultraviolet (UV)",
      "Gelombang inframerah",
      "Gelombang radio"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Berdasarkan Hukum Pergeseran Wien ($\\lambda_{\\text{maks}} \\times T = C$), panjang gelombang puncak radiasi berbanding terbalik dengan suhu mutlak benda pembocor radiasi:<br>- Permukaan matahari bersuhu sangat tinggi ($\\approx 5800\\text{ K}$) sehingga memancarkan radiasi bergelombang pendek (spektrum cahaya tampak dan UV dekat).<br>- Permukaan bumi bersuhu jauh lebih rendah ($\\approx 288\\text{ K}$) sehingga meradiasikan energi kalor dalam spektrum gelombang yang jauh lebih panjang, yaitu gelombang inframerah termal (panjang gelombang $4\\text{ }\\mu\\text{m} - 100\\text{ }\\mu\\text{m}$).",
      "steps": "1. Analisis proses perpindahan radiasi pada sistem bumi-atmosfer.<br>2. Radiasi bergelombang pendek dari matahari diserap oleh bumi sehingga temperatur permukaan bumi naik.<br>3. Benda bersuhu ruangan atau suhu terestrial memancarkan radiasi termal pada rentang inframerah.<br>4. Gelombang inframerah inilah yang kemudian diserap oleh molekul gas rumah kaca di atmosfer.<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan tertukar antara radiasi datang dari matahari (dominan cahaya tampak dan UV) dengan radiasi yang dipancarkan kembali oleh bumi (radiasi inframerah termal)."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Berdasarkan Hukum Pergeseran Wien ($\\lambda_{\\text{maks}} \\times T = C$), panjang gelombang puncak radiasi berbanding terbalik dengan suhu mutlak benda pembocor radiasi: - Permukaan matahari bersuhu sangat tinggi ($\\approx 5800\\text{ K}$) sehingga memancarkan radiasi bergelombang pendek (spektrum cahaya tampak dan UV dekat). - Permukaan bumi bersuhu jauh lebih rendah ($\\approx 288\\text{ K}$) sehingga meradiasikan energi kalor dalam spektrum gelombang yang jauh lebih panjang, yaitu gelombang inframerah termal (panjang gelombang $4\\text{ }\\mu\\text{m} - 100\\text{ }\\mu\\text{m}$)."
  },
  {
    "id": "fis-termo-global-efek-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Komposisi Gas Rumah Kaca",
    "difficulty": "mudah",
    "statement": "Tidak semua gas yang berada di atmosfer dapat menyerap dan memerangkap radiasi kalor inframerah. Kelompok gas berikut yang seluruhnya tergolong sebagai gas rumah kaca utama di atmosfer bumi adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Oksigen ($\\text{O}_2$), Nitrogen ($\\text{N}_2$), dan Argon ($\\text{Ar}$)",
      "Karbon dioksida ($\\text{CO}_2$), Metana ($\\text{CH}_4$), dan Uap air ($\\text{H}_2\\text{O}$)",
      "Helium ($\\text{He}$), Hidrogen ($\\text{H}_2$), dan Neon ($\\text{Ne}$)",
      "Karbon monoksida ($\\text{CO}$), Kripton ($\\text{Kr}$), dan Oksigen ($\\text{O}_2$)",
      "Nitrogen ($\\text{N}_2$), Klorin ($\\text{Cl}_2$), dan Xenon ($\\text{Xe}$)"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gas rumah kaca (GRK) adalah molekul gas yang mampu menyerap dan memancarkan radiasi inframerah termal karena memiliki ikatan kimia heteronuklir atau poliatomik yang dapat bervibrasi dengan momen dipol listrik asimetris.<br>- Molekul diatomik homonuklir seperti $\\text{N}_2$ dan $\\text{O}_2$ (penyusun $99\\%$ atmosfer) tidak menyerap inframerah.<br>- Gas rumah kaca alami dan antropogenik utama meliputi uap air ($\\text{H}_2\\text{O}$), karbon dioksida ($\\text{CO}_2$), metana ($\\text{CH}_4$), dinitrogen oksida ($\\text{N}_2\\text{O}$), serta gas-gas fluorinasi.",
      "steps": "1. Periksa gas penyusun pada masing-masing opsi jawaban.<br>2. Gas monoatomik (seperti $\\text{Ar}$, $\\text{He}$, $\\text{Ne}$, $\\text{Kr}$, $\\text{Xe}$) dan molekul diatomik simetris (seperti $\\text{N}_2$, $\\text{O}_2$, $\\text{H}_2$) bukan gas rumah kaca.<br>3. Molekul poliatomik $\\text{CO}_2$, $\\text{CH}_4$, dan $\\text{H}_2\\text{O}$ memiliki modus getaran yang aktif menyerap radiasi inframerah.<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Walaupun $\\text{N}_2$ dan $\\text{O}_2$ merupakan gas dengan proporsi terbesar di atmosfer bumi ($78\\%$ dan $21\\%$), keduanya sama sekali bukan gas rumah kaca karena tidak dapat menyerap foton inframerah."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gas rumah kaca (GRK) adalah molekul gas yang mampu menyerap dan memancarkan radiasi inframerah termal karena memiliki ikatan kimia heteronuklir atau poliatomik yang dapat bervibrasi dengan momen dipol listrik asimetris. - Molekul diatomik homonuklir seperti $\\text{N}_2$ dan $\\text{O}_2$ (penyusun $99\\%$ atmosfer) tidak menyerap inframerah. - Gas rumah kaca alami dan antropogenik utama meliputi uap air ($\\text{H}_2\\text{O}$), karbon dioksida ($\\text{CO}_2$), metana ($\\text{CH}_4$), dinitrogen oksida ($\\text{N}_2\\text{O}$), serta gas-gas fluorinasi."
  },
  {
    "id": "fis-termo-global-efek-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Peran Efek Rumah Kaca Alami",
    "difficulty": "mudah",
    "statement": "Efek rumah kaca sering dipersepsikan negatif akibat kaitannya dengan pemanasan global. Namun, secara alamiah efek rumah kaca memiliki peran vital bagi kehidupan. Jika di atmosfer bumi sama sekali tidak terdapat gas rumah kaca alami, suhu rata-rata permukaan bumi diperkirakan akan menjadi sekitar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$+25^\\circ\\text{C}$",
      "$+15^\\circ\\text{C}$",
      "$0^\\circ\\text{C}$",
      "$-18^\\circ\\text{C}$",
      "$-50^\\circ\\text{C}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Tanpa atmosfer dan efek rumah kaca alami, suhu kesetimbangan radiatif bumi murni dihitung dari kesetimbangan fluks radiasi matahari yang diserap dan radiasi termal benda hitam yang dipancarkan bumi:<br>$$S_0 (1 - \\alpha) \\pi R^2 = 4 \\pi R^2 \\sigma T_e^4 \\implies T_e = \\left[\\frac{S_0 (1 - \\alpha)}{4\\sigma}\\right]^{1/4}$$<br>Dengan konstanta surya $S_0 \\approx 1361\\text{ W/m}^2$ dan albedo bumi $\\alpha \\approx 0{,}30$, diperoleh suhu efektif $T_e \\approx 255\\text{ K} \\approx -18^\\circ\\text{C}$.",
      "steps": "1. Suhu rata-rata aktual permukaan bumi saat ini dengan adanya efek rumah kaca alami adalah sekitar $+15^\\circ\\text{C}$ ($288\\text{ K}$).<br>2. Efek rumah kaca alami memberikan efek penghangatan sebesar sekitar $33^\\circ\\text{C}$ ($288\\text{ K} - 255\\text{ K} = 33\\text{ K}$).<br>3. Tanpa gas rumah kaca alami, seluruh energi inframerah langsung lepas ke luar angkasa sehingga suhu rata-rata turun drastis menjadi $-18^\\circ\\text{C}$.<br>4. Pada suhu $-18^\\circ\\text{C}$, seluruh perairan di permukaan bumi akan membeku dan kehidupan tidak dapat berkembang seperti sekarang.<br>5. Jawaban yang tepat adalah pilihan D.",
      "pitfalls": "Jangan keliru mengira suhu bumi tanpa efek rumah kaca adalah $+15^\\circ\\text{C}$ (opsi B, yang merupakan suhu aktual saat ini dengan efek rumah kaca)."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Tanpa atmosfer dan efek rumah kaca alami, suhu kesetimbangan radiatif bumi murni dihitung dari kesetimbangan fluks radiasi matahari yang diserap dan radiasi termal benda hitam yang dipancarkan bumi: $$S_0 (1 - \\alpha) \\pi R^2 = 4 \\pi R^2 \\sigma T_e^4 \\implies T_e = \\left[\\frac{S_0 (1 - \\alpha)}{4\\sigma}\\right]^{1/4}$$ Dengan konstanta surya $S_0 \\approx 1361\\text{ W/m}^2$ dan albedo bumi $\\alpha \\approx 0{,}30$, diperoleh suhu efektif $T_e \\approx 255\\text{ K} \\approx -18^\\circ\\text{C}$."
  },
  {
    "id": "fis-termo-global-efek-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Sumber Antropogenik Emisi Gas Metana",
    "difficulty": "mudah",
    "statement": "Metana ($\\text{CH}_4$) merupakan salah satu gas rumah kaca poten yang memiliki daya serap radiasi inframerah persatuan molekul jauh lebih tinggi dibandingkan karbon dioksida. Aktivitas manusia berikut yang merupakan sumber utama pelepasan gas metana antropogenik ke atmosfer adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Penggunaan kendaraan listrik berbasis baterai ion litium",
      "Fermentasi enterik pada pencernaan hewan ternak ruminansia dan sawah padi tergenang",
      "Penguapan air laut pada tambak pembuatan garam konsumsi",
      "Pembangkitan tenaga listrik melalui kincir angin turbin udara",
      "Pemasangan panel surya fotovoltaik di atap pemukiman warga"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Gas metana ($\\text{CH}_4$) terbentuk dari proses dekomposisi anaerobik (tanpa oksigen) oleh bakteri metanogenik. Sumber antropogenik utama pelepasan $\\text{CH}_4$ meliputi:<br>1. Sektor peternakan: fermentasi enterik pada saluran pencernaan hewan ruminansia (seperti sapi dan kambing).<br>2. Sektor pertanian: lahan sawah padi tergenang air yang miskin oksigen.<br>3. Pengolahan limbah: tempat pemrosesan akhir (TPA) sampah organik tertimbun.<br>4. Kebocoran infrastruktur gas alam dan ekstraksi bahan bakar fosil.",
      "steps": "1. Tinjau proses pembentukan gas metana secara biokimia dan fisikawi.<br>2. Pilihan A, D, dan E merupakan teknologi energi hijau/ramah lingkungan yang justru mereduksi emisi karbon.<br>3. Pilihan C (penguapan air garam) hanya menghasilkan uap air alami tanpa menghasilkan gas metana.<br>4. Peternakan ruminansia dan sawah tergenang merupakan kontributor terbesar emisi gas metana antropogenik global.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Seringkali masyarakat hanya fokus pada gas buang kendaraan bermotor (yang dominan menghasilkan $\\text{CO}_2$ dan $\\text{CO}$) dan melupakan bahwa peternakan skala industri dan persawahan tergenang menghasilkan gas rumah kaca metana dalam jumlah sangat masif."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Gas metana ($\\text{CH}_4$) terbentuk dari proses dekomposisi anaerobik (tanpa oksigen) oleh bakteri metanogenik. Sumber antropogenik utama pelepasan $\\text{CH}_4$ meliputi: 1. Sektor peternakan: fermentasi enterik pada saluran pencernaan hewan ruminansia (seperti sapi dan kambing). 2. Sektor pertanian: lahan sawah padi tergenang air yang miskin oksigen. 3. Pengolahan limbah: tempat pemrosesan akhir (TPA) sampah organik tertimbun. 4. Kebocoran infrastruktur gas alam dan ekstraksi bahan bakar fosil."
  },
  {
    "id": "fis-termo-global-efek-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Konsep Albedo Permukaan Bumi",
    "difficulty": "mudah",
    "statement": "Albedo adalah ukuran fraksi atau persentase radiasi matahari datang yang dipantulkan kembali ke luar angkasa tanpa diserap oleh suatu permukaan. Di antara jenis tutupan permukaan bumi berikut, permukaan yang memiliki nilai albedo paling tinggi (paling banyak memantulkan radiasi surya) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Hutan hujan tropis yang lebat dan basah",
      "Hamparan es dan salju segar di daerah kutub",
      "Jalan raya beraspal hitam di kawasan perkotaan",
      "Permukaan air samudra dan laut dalam yang tenang",
      "Lahan pertanian bertanah humus cokelat gelap"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Albedo ($\\alpha$) berkisar antara 0 (menyerap seluruh radiasi/benda hitam sempurna) hingga 1 (memantulkan seluruh radiasi):<br>- Permukaan berwarna gelap (aspal $\\approx 0{,}05 - 0{,}10$, laut dalam $\\approx 0{,}06 - 0{,}10$, hutan lebat $\\approx 0{,}15$) menyerap sebagian besar radiasi surya.<br>- Permukaan berwarna terang dan berkilau seperti lapisan salju segar dan tutupan es gletser memiliki albedo tertinggi (mencapai $0{,}80 - 0{,}90$), sehingga memantulkan sebagian besar energi radiasi kembali ke angkasa.",
      "steps": "1. Pahami arti fisis dari istilah albedo: daya pantul permukaan terhadap radiasi surya datang.<br>2. Semakin terang dan putih warna suatu permukaan, semakin besar nilai albedonya.<br>3. Salju segar dan es kutub memantulkan sekitar $80\\% - 90\\%$ dari seluruh radiasi matahari yang mengenainya.<br>4. Jadi, hamparan es dan salju segar memiliki albedo tertinggi.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Permukaan air laut dalam justru memiliki albedo sangat rendah (hanya sekitar $6\\% - 10\\%$), artinya air laut menyerap lebih dari $90\\%$ radiasi matahari yang masuk, bukan memantulkannya."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Mudah",
    "hint": "Albedo ($\\alpha$) berkisar antara 0 (menyerap seluruh radiasi/benda hitam sempurna) hingga 1 (memantulkan seluruh radiasi): - Permukaan berwarna gelap (aspal $\\approx 0{,}05 - 0{,}10$, laut dalam $\\approx 0{,}06 - 0{,}10$, hutan lebat $\\approx 0{,}15$) menyerap sebagian besar radiasi surya. - Permukaan berwarna terang dan berkilau seperti lapisan salju segar dan tutupan es gletser memiliki albedo tertinggi (mencapai $0{,}80 - 0{,}90$), sehingga memantulkan sebagian besar energi radiasi kembali ke angkasa."
  },
  {
    "id": "fis-termo-global-efek-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Model Kesetimbangan Radiatif Satu Lapis Atmosfer",
    "difficulty": "sedang",
    "statement": "Dalam model iklim sederhana satu lapis atmosfer isotermal, atmosfer dianggap transparan terhadap radiasi surya gelombang pendek, namun menyerap sempurna radiasi inframerah yang dipancarkan permukaan bumi. Atmosfer kemudian meradiasikan energi kalor secara merata ke angkasa luar dan kembali ke permukaan bumi masing-masing sebesar $\\sigma T_a^4$. Jika suhu efektif kesetimbangan radiatif bumi tanpa atmosfer adalah $T_e$, hubungan antara suhu permukaan bumi ($T_s$) dan $T_e$ menurut model ini adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$T_s = T_e$",
      "$T_s = \\sqrt{2}\\,T_e$",
      "$T_s = 2^{1/4}\\,T_e$",
      "$T_s = 2\\,T_e$",
      "$T_s = 4^{1/4}\\,T_e$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Model kesetimbangan energi satu lapis atmosfer (Single-layer Greenhouse Model):<br>1. Kesetimbangan radiasi atmosfer: Atmosfer menyerap fluks dari bumi ($\\sigma T_s^4$) dan memancarkan radiasi ke atas dan ke bawah: $$\\sigma T_s^4 = 2\\sigma T_a^4 \\implies \\sigma T_a^4 = \\frac{1}{2}\\sigma T_s^4$$<br>2. Kesetimbangan di puncak atmosfer (TOA): Fluks matahari masuk harus sama dengan fluks keluar ke angkasa luar: $$\\sigma T_e^4 = \\sigma T_a^4$$",
      "steps": "1. Substitusikan persamaan fluks puncak atmosfer ke persamaan kesetimbangan lapisan atmosfer:<br>$$\\sigma T_e^4 = \\frac{1}{2}\\sigma T_s^4$$<br>2. Sederhanakan kedua ruas dengan membagi konstanta Stefan-Boltzmann $\\sigma$:<br>$$T_s^4 = 2\\,T_e^4$$<br>3. Tarik akar pangkat empat pada kedua ruas:<br>$$T_s = 2^{1/4}\\,T_e \\approx 1{,}189\\,T_e$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Jebakan eksponen: $T_s^4 = 2 T_e^4$ menghasilkan $T_s = 2^{1/4} T_e$, bukan $T_s = \\sqrt{2} T_e$ (opsi B) ataupun $T_s = 2 T_e$ (opsi D). Eksponen radiasi termal Stefan-Boltzmann adalah pangkat 4."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Model kesetimbangan energi satu lapis atmosfer (Single-layer Greenhouse Model): 1. Kesetimbangan radiasi atmosfer: Atmosfer menyerap fluks dari bumi ($\\sigma T_s^4$) dan memancarkan radiasi ke atas dan ke bawah: $$\\sigma T_s^4 = 2\\sigma T_a^4 \\implies \\sigma T_a^4 = \\frac{1}{2}\\sigma T_s^4$$ 2. Kesetimbangan di puncak atmosfer (TOA): Fluks matahari masuk harus sama dengan fluks keluar ke angkasa luar: $$\\sigma T_e^4 = \\sigma T_a^4$$."
  },
  {
    "id": "fis-termo-global-efek-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Potensi Pemanasan Global (GWP) dan Emisi Ekuivalen",
    "difficulty": "sedang",
    "statement": "Potensi Pemanasan Global (Global Warming Potential / GWP) adalah metrik untuk membandingkan kapasitas perangkap panas dari gas rumah kaca tertentu terhadap karbon dioksida ($\\text{CO}_2$) dalam horizon waktu tertentu. Jika gas metana ($\\text{CH}_4$) memiliki nilai $\\text{GWP}_{100} = 28$ dan dinitrogen oksida ($\\text{N}_2\\text{O}$) memiliki $\\text{GWP}_{100} = 265$, pelepasan $5\\text{ ton } \\text{CH}_4$ dan $2\\text{ ton } \\text{N}_2\\text{O}$ ke atmosfer setara dengan pelepasan $\\text{CO}_2$ ($\\text{CO}_2\\text{e}$) sebesar ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$293\\text{ ton } \\text{CO}_2\\text{e}$",
      "$530\\text{ ton } \\text{CO}_2\\text{e}$",
      "$670\\text{ ton } \\text{CO}_2\\text{e}$",
      "$810\\text{ ton } \\text{CO}_2\\text{e}$",
      "$1470\\text{ ton } \\text{CO}_2\\text{e}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Emisi ekuivalen karbon dioksida ($\\text{CO}_2\\text{e}$) dihitung dengan menjumlahkan hasil kali massa masing-masing gas rumah kaca dengan nilai GWP-nya:<br>$$\\text{Massa } \\text{CO}_2\\text{e} = \\sum (m_i \\times \\text{GWP}_i)$$",
      "steps": "1. Hitung kontribusi ekuivalen metana ($\\text{CH}_4$):<br>$$\\text{CO}_2\\text{e}_{(\\text{CH}_4)} = 5\\text{ ton} \\times 28 = 140\\text{ ton } \\text{CO}_2\\text{e}$$<br>2. Hitung kontribusi ekuivalen dinitrogen oksida ($\\text{N}_2\\text{O}$):<br>$$\\text{CO}_2\\text{e}_{(\\text{N}_2\\text{O})} = 2\\text{ ton} \\times 265 = 530\\text{ ton } \\text{CO}_2\\text{e}$$<br>3. Jumlahkan seluruh kontribusi:<br>$$\\text{Total } \\text{CO}_2\\text{e} = 140 + 530 = 670\\text{ ton } \\text{CO}_2\\text{e}$$<br>4. Jawaban yang tepat adalah pilihan C.",
      "pitfalls": "Lupa mengalikan massa masing-masing gas dengan nilai GWP-nya dan hanya menjumlahkan nilai GWP murni ($28 + 265 = 293$, opsi A)."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Emisi ekuivalen karbon dioksida ($\\text{CO}_2\\text{e}$) dihitung dengan menjumlahkan hasil kali massa masing-masing gas rumah kaca dengan nilai GWP-nya: $$\\text{Massa } \\text{CO}_2\\text{e} = \\sum (m_i \\times \\text{GWP}_i)$$."
  },
  {
    "id": "fis-termo-global-efek-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Mekanisme Umpan Balik Positif Uap Air",
    "difficulty": "sedang",
    "statement": "Peningkatan konsentrasi $\\text{CO}_2$ memicu kenaikan suhu permukaan bumi. Berdasarkan relasi Clausius-Clapeyron dalam termodinamika, kenaikan suhu udara sebesar $1^\\circ\\text{C}$ meningkatkan kapasitas udara menampung uap air jenuh sekitar $7\\%$. Karena uap air merupakan gas rumah kaca alami paling dominan, penguapan air yang meningkat ini memerangkap lebih banyak radiasi inframerah sehingga suhu bumi naik lebih lanjut. Fenomena penguatan respon termal ini di dalam ilmu iklim disebut sebagai ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Umpan balik negatif termal",
      "Umpan balik positif iklim (positive climate feedback loop)",
      "Pendinginan evaporatif terestrial",
      "Peredaman radiasi Planck (Planck radiation damping)",
      "Kesetimbangan statis adiabatik"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Mekanisme umpan balik (feedback loop) dalam sistem iklim:<br>- Umpan balik positif (positive feedback): proses di mana perubahan awal pada suatu variabel menyebabkan perubahan variabel lain yang dampaknya memperkuat perubahan awal tersebut (amplifikasi ketidakstabilan).<br>- Contoh klasik adalah umpan balik uap air (water vapor feedback) dan umpan balik albedo es (ice-albedo feedback).<br>- Umpan balik negatif (negative feedback): mekanisme yang meredam atau melawan perubahan awal menuju kesetimbangan baru.",
      "steps": "1. Kenaikan suhu awal $\\implies$ laju penguapan naik $\\implies$ konsentrasi gas rumah kaca uap air di atmosfer bertambah.<br>2. Tambahan uap air menyerap lebih banyak inframerah $\\implies$ peningkatan radiasi balik ke bumi $\\implies$ suhu bumi semakin meningkat.<br>3. Siklus ini bekerja secara kumulatif memperbesar efek pemanasan awal.<br>4. Jadi, siklus ini merupakan contoh nyata dari umpan balik positif iklim.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Istilah 'positif' di sini bukan berarti hal yang menguntungkan/baik bagi lingkungan, melainkan konsep matematis kontrol sistem di mana sinyal keluaran memperkuat sinyal masukan (efek penguatan/amplifikasi)."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Mekanisme umpan balik (feedback loop) dalam sistem iklim: - Umpan balik positif (positive feedback): proses di mana perubahan awal pada suatu variabel menyebabkan perubahan variabel lain yang dampaknya memperkuat perubahan awal tersebut (amplifikasi ketidakstabilan). - Contoh klasik adalah umpan balik uap air (water vapor feedback) dan umpan balik albedo es (ice-albedo feedback). - Umpan balik negatif (negative feedback): mekanisme yang meredam atau melawan perubahan awal menuju kesetimbangan baru."
  },
  {
    "id": "fis-termo-global-efek-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Jendela Atmosfer Inframerah dan Polutan Halokarbon",
    "difficulty": "sedang",
    "statement": "Pada spektrum radiasi inframerah termal bumi, terdapat rentang panjang gelombang antara $8\\text{ }\\mu\\text{m}$ hingga $12\\text{ }\\mu\\text{m}$ di mana gas rumah kaca alami utama (uap air dan $\\text{CO}_2$) hampir tidak menyerap radiasi, sehingga energi kalor bumi dapat lolos langsung ke luar angkasa. Rentang ini dikenal sebagai jendela atmosfer (atmospheric window). Senyawa sintetis buatan manusia seperti CFC dan HFC dinilai sangat berbahaya terhadap pemanasan global terutama karena ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Mengurangi konsentrasi oksigen bebas di lapisan troposfer",
      "Memiliki pita serapan vibrasi ikatan kimia tepat di dalam celah jendela atmosfer ($8-12\\text{ }\\mu\\text{m}$)",
      "Bereaksi secara eksotermik menghasilkan energi panas spontan di stratosfer",
      "Memantulkan radiasi sinar ultraviolet matahari kembali ke permukaan bumi",
      "Mencegah proses kondensasi uap air menjadi awan presipitasi"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Jendela atmosfer inframerah ($8-12\\text{ }\\mu\\text{m}$) adalah rentang transparan tempat radiasi termal bumi dapat lepas ke antariksa tanpa terhambat $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$.<br>Senyawa halokarbon buatan manusia (CFC, HCFC, HFC, $\\text{SF}_6$) memiliki ikatan karbon-fluor dan karbon-klor yang frekuensi vibrasi resonansinya tepat berada pada rentang jendela atmosfer ($8-12\\text{ }\\mu\\text{m}$). Akibatnya, gas-gas ini menutup celah transmisi kalor bumi yang sebelumnya terbuka, menghasilkan efisiensi penyerapan panas per molekul hingga ribuan kali lipat dibandingkan $\\text{CO}_2$.",
      "steps": "1. Pahami fungsi fisis jendela atmosfer sebagai 'ventilasi' pelepasan panas bumi ke angkasa luar.<br>2. Analisis serapan molekuler senyawa halokarbon.<br>3. Karena ikatan kimia C-F dan C-Cl bervibrasi menyerap foton inframerah berpanjang gelombang $8-12\\text{ }\\mu\\text{m}$, mereka menyumbat jendela pelepasan panas bumi.<br>4. Inilah alasan mengapa nilai GWP senyawa CFC dan HFC luar biasa besar.<br>5. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Walaupun CFC terkenal karena merusak lapisan ozon stratosfer (melalui radikal klorin), peran utamanya dalam memperparah efek rumah kaca termal adalah karena penutupan pita jendela atmosfer inframerah."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Jendela atmosfer inframerah ($8-12\\text{ }\\mu\\text{m}$) adalah rentang transparan tempat radiasi termal bumi dapat lepas ke antariksa tanpa terhambat $\\text{H}_2\\text{O}$ dan $\\text{CO}_2$. Senyawa halokarbon buatan manusia (CFC, HCFC, HFC, $\\text{SF}_6$) memiliki ikatan karbon-fluor dan karbon-klor yang frekuensi vibrasi resonansinya tepat berada pada rentang jendela atmosfer ($8-12\\text{ }\\mu\\text{m}$). Akibatnya, gas-gas ini menutup celah transmisi kalor bumi yang sebelumnya terbuka, menghasilkan efisiensi penyerapan panas per molekul hingga ribuan kali lipat dibandingkan $\\text{CO}_2$."
  },
  {
    "id": "fis-termo-global-efek-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subChapterId": "fis-termo-global",
    "subTopicId": "fis-termo-global-efek",
    "category": "Fluks Radiasi Surya Rata-Rata Terserap Bumi",
    "difficulty": "sedang",
    "statement": "Konstanta surya di batas luar atmosfer bumi bernilai $S = 1360\\text{ W/m}^2$. Luas penampang penerima sinar matahari berbentuk lingkaran $\\pi R^2$, sedangkan luas permukaan bola bumi yang meradiasikan kembali panas adalah $4\\pi R^2$. Jika albedo rata-rata planet bumi adalah $\\alpha = 0{,}30$ ($30\\%$ radiasi surya dipantulkan kembali ke luar angkasa), besar fluks radiasi matahari rata-rata per satuan luas permukaan bumi yang benar-benar diserap oleh sistem bumi-atmosfer adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$102\\text{ W/m}^2$",
      "$238\\text{ W/m}^2$",
      "$340\\text{ W/m}^2$",
      "$476\\text{ W/m}^2$",
      "$952\\text{ W/m}^2$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Fluks radiasi surya yang datang ke bumi disebarkan ke seluruh luas permukaan bola bumi ($4\\pi R^2$), sehingga fluks surya rata-rata insiden di puncak atmosfer adalah:<br>$$\\bar{F}_{\\text{in}} = \\frac{S \\times \\pi R^2}{4\\pi R^2} = \\frac{S}{4}$$<br>Fluks yang diserap permukaan bumi setelah dikurangi fraksi albedo yang dipantulkan ($\\alpha$) dirumuskan:<br>$$F_{\\text{serap}} = \\frac{S}{4} (1 - \\alpha)$$",
      "steps": "1. Hitung fluks surya rata-rata global di batas atas atmosfer:<br>$$\\bar{F}_{\\text{in}} = \\frac{1360\\text{ W/m}^2}{4} = 340\\text{ W/m}^2$$<br>2. Perhitungkan fraksi albedo $\\alpha = 0{,}30$, sehingga fraksi yang diserap adalah $1 - \\alpha = 0{,}70$.<br>3. Hitung fluks rata-rata yang diserap:<br>$$F_{\\text{serap}} = 340\\text{ W/m}^2 \\times 0{,}70 = 238\\text{ W/m}^2$$<br>4. Jawaban yang tepat adalah pilihan B.",
      "pitfalls": "Lupa membagi dengan faktor geometri 4 (rasio luas permukaan bola $4\\pi R^2$ terhadap penampang lingkaran $\\pi R^2$) akan menghasilkan nilai $1360 \\times 0{,}70 = 952\\text{ W/m}^2$ (opsi E). Sedangkan opsi C ($340\\text{ W/m}^2$) adalah fluks datang sebelum dikurangi pantulan albedo."
    },
    "subTopicSlug": "efek-rumah-kaca",
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "difficultyLabel": "Sedang",
    "hint": "Fluks radiasi surya yang datang ke bumi disebarkan ke seluruh luas permukaan bola bumi ($4\\pi R^2$), sehingga fluks surya rata-rata insiden di puncak atmosfer adalah: $$\\bar{F}_{\\text{in}} = \\frac{S \\times \\pi R^2}{4\\pi R^2} = \\frac{S}{4}$$ Fluks yang diserap permukaan bumi setelah dikurangi fraksi albedo yang dipantulkan ($\\alpha$) dirumuskan: $$F_{\\text{serap}} = \\frac{S}{4} (1 - \\alpha)$$."
  },
  {
    "id": "mudah-fis-10",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-efek",
    "category": "Efek Rumah Kaca",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Pemanasan global secara fisis terjadi karena gas-gas rumah kaca di atmosfer bumi menyerap dan memancarkan kembali sebagian radiasi elektromagnetik yang dipancarkan oleh permukaan bumi. Spektrum gelombang elektromagnetik yang diserap secara dominan oleh gas rumah kaca tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Sinar Gamma",
      "Sinar Ultraviolet",
      "Cahaya Tampak",
      "Radiasi Inframerah (Thermal)",
      "Sinar-X"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "\n        <div class=\"callout-box callout-concept\">\n          <strong>Fisika Efek Rumah Kaca:</strong><br>\n          Permukaan bumi menyerap cahaya tampak dari matahari dan meradiasikannya kembali sebagai radiasi termal bergelombang panjang yaitu <em>radiasi inframerah</em>, yang kemudian diserap oleh molekul gas rumah kaca ($CO_2, CH_4, H_2O$) sehingga memerangkap panas di troposfer.\n        </div>\n      ",
      "steps": "\n        <ol>\n          <li>Radiasi matahari yang masuk didominasi cahaya tampak dan UV dekat.</li>\n          <li>Radiasi bumi yang dipancarkan kembali adalah radiasi inframerah termal.</li>\n          <li>Gas rumah kaca memiliki pita serapan getaran molekul pada spektrum inframerah.</li>\n        </ol>\n      ",
      "pitfalls": "\n        <div class=\"callout-box callout-pitfall\">\n          Jangan tertukar dengan lapisan ozon di stratosfer yang menyerap radiasi ultraviolet (UV). Efek rumah kaca berkaitan dengan penyerapan radiasi inframerah.\n        </div>\n      "
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "efek-rumah-kaca",
    "hint": "Fisika Efek Rumah Kaca: Permukaan bumi menyerap cahaya tampak dari matahari dan meradiasikannya kembali sebagai radiasi termal bergelombang panjang yaitu radiasi inframerah , yang kemudian diserap oleh molekul gas rumah kaca ($CO_2, CH_4, H_2O$) sehingga memerangkap panas di troposfer. **Tips:** Jangan tertukar dengan lapisan ozon di stratosfer yang menyerap radiasi ultraviolet (UV)."
  },
  {
    "id": "drill-pem-03",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-termo",
    "subTopicId": "fis-termo-global-efek",
    "category": "Mekanisme Fisik Efek Rumah Kaca",
    "difficulty": "mudah",
    "difficultyLabel": "Mudah",
    "statement": "Secara fisis, gas rumah kaca (seperti $CO_2$ dan $CH_4$) memicu peningkatan suhu rata-rata atmosfer bumi karena molekul gas-gas tersebut memiliki sifat ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "Meneruskan cahaya tampak matahari, namun menyerap dan memancarkan kembali radiasi inframerah dari bumi",
      "Menyerap seluruh radiasi ultraviolet matahari dan mengubahnya menjadi energi mekanik",
      "Memantulkan seluruh cahaya tampak matahari kembali ke ruang angkasa",
      "Mencegah pelepasan gas oksigen ke atmosfer luar angkasa",
      "Menghasilkan energi panas sendiri melalui reaksi fusi nuklir alami di stratosfer"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "<div class=\"callout-box callout-concept\"><strong>Proses Fisik Efek Rumah Kaca:</strong><br>Radiasi matahari yang masuk sebagian besar berupa gelombang pendek (cahaya tampak) yang lolos melewati atmosfer. Permukaan bumi menyerap energi ini lalu memancarkannya kembali sebagai <strong>gelombang panjang (inframerah termal)</strong> yang diserap oleh gas rumah kaca sehingga terperangkap di atmosfer.</div>",
      "steps": "<ol><li>Gelombang masuk: Gelombang pendek / cahaya tampak (transparan bagi gas rumah kaca).</li><li>Gelombang terpancar dari bumi: Gelombang panjang / inframerah.</li><li>Peran gas rumah kaca: Mengabsorpsi radiasi inframerah dan memancarkannya kembali ke permukaan bumi.</li></ol>",
      "pitfalls": "<div class=\"callout-box callout-pitfall\"><strong>⚠️ Bedakan:</strong> Lapisan ozon ($O_3$) menyerap sinar Ultraviolet (UV). Gas rumah kaca ($CO_2, CH_4$) menyerap sinar Inframerah (panas).</div>"
    },
    "bab": "Kalor dan Termodinamika",
    "subBab": "Efek Rumah Kaca",
    "subTopic": "Efek Rumah Kaca",
    "chapterTitle": "Kalor dan Termodinamika",
    "subChapterId": "fis-termo-global",
    "subTopicSlug": "efek-rumah-kaca",
    "hint": "Proses Fisik Efek Rumah Kaca: Radiasi matahari yang masuk sebagian besar berupa gelombang pendek (cahaya tampak) yang lolos melewati atmosfer. Permukaan bumi menyerap energi ini lalu memancarkannya kembali sebagai gelombang panjang (inframerah termal) yang diserap oleh gas rumah kaca sehingga terperangkap di atmosfer. **Tips:** ⚠️ Bedakan: Lapisan ozon ($O_3$) menyerap sinar Ultraviolet (UV)."
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
