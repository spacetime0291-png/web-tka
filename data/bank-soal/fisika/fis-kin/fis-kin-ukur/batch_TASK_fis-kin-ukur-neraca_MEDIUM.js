/**
 * Batch Task: TASK_fis-kin-ukur-neraca_MEDIUM
 * SubTopic: Neraca Tiga Lengan (fis-kin-ukur-neraca)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    "id": "fis-kin-ukur-neraca-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Pada neraca Ohaus presisi empat lengan (tipe centigram 311), balok skala terdiri atas: lengan pertama ($0 - 200\\text{ g}$ per $100\\text{ g}$), lengan kedua ($0 - 100\\text{ g}$ per $10\\text{ g}$), lengan ketiga ($0 - 10\\text{ g}$ per $1\\text{ g}$), dan lengan keempat beranting geser halus ($0 - 1{,}00\\text{ g}$ dengan skala terkecil $0{,}01\\text{ g}$). Pada suatu penimbangan cuplikan mineral, anting lengan pertama di angka $100\\text{ g}$, lengan kedua di angka $30\\text{ g}$, lengan ketiga di angka $5\\text{ g}$, dan lengan keempat menunjukkan angka $0{,}47\\text{ g}$. Pelaporan hasil pengukuran massa mineral tersebut beserta ketidakpastian mutlaknya $(\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil})$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN NERACA OHAUS PRESISI EMPAT LENGAN",
    "options": [
      "$(135{,}470 \\pm 0{,}005)\\text{ g}$",
      "$(135{,}470 \\pm 0{,}010)\\text{ g}$",
      "$(135{,}47 \\pm 0{,}05)\\text{ g}$",
      "$(135{,}047 \\pm 0{,}005)\\text{ g}$",
      "$(135{,}470 \\pm 0{,}001)\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Pada neraca presisi empat lengan berketelitian centigram ($0{,}01\\text{ g}$), massa total dihitung dengan menjumlahkan keempat lengan: $m = m_1 + m_2 + m_3 + m_4$. Ketidakpastian mutlak pengukuran tunggal adalah $\\Delta m = \\frac{1}{2} \\times \\text{skala terkecil} = \\frac{1}{2} \\times 0{,}01\\text{ g} = 0{,}005\\text{ g}$.",
      "steps": "1) Menjumlahkan keempat skala lengan:<br>$$m = 100\\text{ g} + 30\\text{ g} + 5\\text{ g} + 0{,}47\\text{ g} = 135{,}47\\text{ g} = 135{,}470\\text{ g}$$<br>2) Menghitung ketidakpastian mutlak ($\\Delta m$):<br>$$\\Delta m = \\frac{1}{2} \\times 0{,}01\\text{ g} = 0{,}005\\text{ g}$$<br>3) Format penulisan hasil pengukuran baku: $(m \\pm \\Delta m) = (135{,}470 \\pm 0{,}005)\\text{ g}$.",
      "pitfalls": "Banyak siswa mengabaikan ketelitian centigram ($0{,}01\\text{ g}$) dan menganggap ketelitiannya sama dengan neraca tiga lengan biasa ($0{,}1\\text{ g}$), sehingga salah memilih $\\pm 0{,}05\\text{ g}$ (opsi C)."
    }
  },
  {
    "id": "fis-kin-ukur-neraca-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebuah bongkahan batu padat tak beraturan ditimbang massanya menggunakan neraca tiga lengan dan diperoleh pembacaan: anting ratusan pada angka $100\\text{ g}$, anting puluhan pada angka $30\\text{ g}$, dan anting satuan pada angka $4{,}0\\text{ g}$. Kemudian batu tersebut dimasukkan ke dalam gelas ukur yang telah berisi air dengan volume awal $V_1 = 50\\text{ mL}$. Permukaan air dalam gelas ukur naik menunjukkan volume akhir $V_2 = 70\\text{ mL}$. Massa jenis bongkahan batu tersebut dalam satuan $\\text{kg/m}^3$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENENTUAN MASSA JENIS BATU DENGAN NERACA OHAUS DAN GELAS UKUR",
    "options": [
      "$6700\\text{ kg/m}^3$",
      "$6{,}7\\text{ kg/m}^3$",
      "$1340\\text{ kg/m}^3$",
      "$1914\\text{ kg/m}^3$",
      "$2680\\text{ kg/m}^3$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Massa jenis benda padat dirumuskan sebagai $\\rho = \\frac{m}{V}$. Volume benda tak beraturan ditentukan melalui metode pemindahan zat cair: $V = V_2 - V_1$. Konversi satuan massa jenis: $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$.",
      "steps": "1) Menghitung massa batu dari neraca Ohaus:<br>$$m = 100\\text{ g} + 30\\text{ g} + 4{,}0\\text{ g} = 134{,}0\\text{ g}$$<br>2) Menghitung volume batu dari selisih gelas ukur:<br>$$V = V_2 - V_1 = 70\\text{ mL} - 50\\text{ mL} = 20\\text{ mL} = 20\\text{ cm}^3$$<br>3) Menghitung massa jenis dalam $\\text{g/cm}^3$:<br>$$\\rho = \\frac{134{,}0\\text{ g}}{20\\text{ cm}^3} = 6{,}7\\text{ g/cm}^3$$<br>4) Mengonversi ke satuan $\\text{kg/m}^3$:<br>$$\\rho = 6{,}7 \\times 1000\\text{ kg/m}^3 = 6700\\text{ kg/m}^3$$.",
      "pitfalls": "Lupa mengalikan 1000 saat mengubah dari $\\text{g/cm}^3$ ke $\\text{kg/m}^3$ (opsi B), atau menggunakan volume total $70\\text{ mL}$ sebagai pembagi alih-alih selisih volume."
    }
  },
  {
    "id": "fis-kin-ukur-neraca-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebuah neraca geser laboratorium bekerja berdasarkan prinsip kesetimbangan momen gaya (torsi). Piringan tempat meletakkan benda tergantung pada lengan kiri pada jarak tetap $L_1 = 5{,}0\\text{ cm}$ dari titik tumpu utama. Di sebelah kanan titik tumpu terdapat lengan berskala panjang dengan anting geser bermassa $m_a = 50\\text{ g}$. Jika pada saat menimbang beban piringan neraca dalam keadaan seimbang mendatar sempurna, anting geser berada pada jarak $L_2 = 24{,}0\\text{ cm}$ dari titik tumpu, maka massa beban di atas piringan adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KESETIMBANGAN MOMEN GAYA PADA LENGAN NERACA GESER",
    "options": [
      "$240\\text{ g}$",
      "$120\\text{ g}$",
      "$480\\text{ g}$",
      "$100\\text{ g}$",
      "$60\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Syarat kesetimbangan rotasi adalah jumlah momen gaya terhadap titik tumpu sama dengan nol: $\\sum \\tau = 0$. Maka torsi searah jarum jam oleh anting geser sama dengan torsi berlawanan jarum jam oleh beban piringan: $m_b \\cdot g \\cdot L_1 = m_a \\cdot g \\cdot L_2$.",
      "steps": "1) Menuliskan persamaan kesetimbangan torsi:<br>$$\\tau_{\\text{beban}} = \\tau_{\\text{anting}}$$<br>$$(m_b \\cdot g) \\cdot L_1 = (m_a \\cdot g) \\cdot L_2$$<br>2) Mengeliminasi percepatan gravitasi $g$:<br>$$m_b \\cdot L_1 = m_a \\cdot L_2$$<br>3) Menghitung massa beban ($m_b$):<br>$$m_b = \\frac{m_a \\cdot L_2}{L_1} = \\frac{50\\text{ g} \\times 24{,}0\\text{ cm}}{5{,}0\\text{ cm}} = 50 \\times 4{,}8 = 240\\text{ g}$$.",
      "pitfalls": "Siswa sering membalik perbandingan lengan ($m_b = \\frac{50 \\times 5}{24} \\approx 10{,}4\\text{ g}$) atau mengalikan lengan tanpa membagi jarak titik tumpu piringan."
    }
  },
  {
    "id": "fis-kin-ukur-neraca-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Sebelum digunakan, jarum penunjuk neraca Ohaus tiga lengan tanpa beban tidak berada tepat pada garis acuan nol, melainkan berada 2 skala di bawah garis nol (setara dengan nilai kesalahan nol sebesar $-0{,}2\\text{ g}$). Tanpa mengalibrasi ulang sekrup tara, seorang siswa langsung meletakkan serbuk kimia di piringan dan menggeser anting-anting neraca hingga jarum penunjuk segaris tepat dengan garis acuan nol statif. Nilai pembacaan anting geser menunjukkan $45{,}6\\text{ g}$. Massa serbuk kimia yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL SISTEMATIK PADA NERACA OHAUS",
    "options": [
      "$45{,}8\\text{ g}$",
      "$45{,}4\\text{ g}$",
      "$45{,}6\\text{ g}$",
      "$46{,}0\\text{ g}$",
      "$45{,}2\\text{ g}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan nol sistematik pada penimbangan: jika posisi awal neraca tanpa beban berada di bawah nol ($Z = -0{,}2\\text{ g}$), maka piringan membutuhkan gaya beban ekstra sebesar $0{,}2\\text{ g}$ agar sistem mencapai kesetimbangan nol. Massa sebenarnya dirumuskan: $m_{\\text{sebenarnya}} = m_{\\text{terbaca}} - Z$.",
      "steps": "1) Menentukan nilai kesalahan titik nol awal:<br>$$Z = -0{,}2\\text{ g}$$<br>2) Menentukan nilai massa yang terbaca pada skala:<br>$$m_{\\text{terbaca}} = 45{,}6\\text{ g}$$<br>3) Mengoreksi massa sebenarnya serbuk kimia:<br>$$m_{\\text{sebenarnya}} = m_{\\text{terbaca}} - Z = 45{,}6\\text{ g} - (-0{,}2\\text{ g}) = 45{,}6\\text{ g} + 0{,}2\\text{ g} = 45{,}8\\text{ g}$$.",
      "pitfalls": "Jebakan paling sering adalah mengurangkan nilai kesalahan nol secara langsung ($45{,}6 - 0{,}2 = 45{,}4\\text{ g}$, opsi B) karena tidak menyadari tanda minus dari kesalahan nol negatif ($m - (-Z) = m + Z$)."
    }
  },
  {
    "id": "fis-kin-ukur-neraca-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-neraca",
    "category": "Neraca Tiga Lengan",
    "difficulty": "sedang",
    "statement": "Seorang siswa membuat larutan garam dengan menimbang kristal $\\text{NaCl}$ murni menggunakan neraca tiga lengan berketelitian $0{,}1\\text{ g}$ (ketidakpastian mutlak $\\Delta m = 0{,}05\\text{ g}$) dan diperoleh massa $m = 25{,}0\\text{ g}$. Kristal tersebut dilarutkan ke dalam labu ukur bervolume $V = 500\\text{ mL}$ (ketidakpastian mutlak $\\Delta V = 1{,}0\\text{ mL}$). Berdasarkan aturan perambatan ketidakpastian pengukuran, persentase ketidakpastian relatif dari konsentrasi massa larutan $(\\frac{\\Delta C}{C} \\times 100\\%)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN PADA PEMBUATAN LARUTAN KIMIA FISIKA",
    "options": [
      "$0{,}40\\%$",
      "$0{,}20\\%$",
      "$0{,}25\\%$",
      "$0{,}60\\%$",
      "$0{,}80\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Konsentrasi massa larutan dirumuskan dengan $C = \\frac{m}{V}$. Menurut teori propagasi ketidakpastian untuk operasi pembagian, ketidakpastian relatif total adalah penjumlahan dari ketidakpastian relatif massa dan ketidakpastian relatif volume: $\\frac{\\Delta C}{C} = \\frac{\\Delta m}{m} + \\frac{\\Delta V}{V}$.",
      "steps": "1) Menghitung ketidakpastian relatif massa garam ($\\frac{\\Delta m}{m}$):<br>$$\\frac{\\Delta m}{m} = \\frac{0{,}05\\text{ g}}{25{,}0\\text{ g}} = 0{,}002 = 0{,}20\\%$$<br>2) Menghitung ketidakpastian relatif volume larutan ($\\frac{\\Delta V}{V}$):<br>$$\\frac{\\Delta V}{V} = \\frac{1{,}0\\text{ mL}}{500\\text{ mL}} = 0{,}002 = 0{,}20\\%$$<br>3) Menghitung ketidakpastian relatif konsentrasi total:<br>$$\\frac{\\Delta C}{C} = \\frac{\\Delta m}{m} + \\frac{\\Delta V}{V} = 0{,}20\\% + 0{,}20\\% = 0{,}40\\%$$.",
      "pitfalls": "Banyak siswa hanya menghitung ketidakpastian massa saja ($0{,}20\\%$, opsi B) atau ketidakpastian volume saja, tanpa menggabungkan kedua komponen perambatan kesalahan pengukuran."
    }
  }
];
