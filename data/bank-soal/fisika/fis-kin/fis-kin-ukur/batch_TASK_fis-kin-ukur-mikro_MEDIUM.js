/**
 * Batch Task: TASK_fis-kin-ukur-mikro_MEDIUM
 * SubTopic: Mikrometer Sekrup (fis-kin-ukur-mikro)
 * Difficulty: sedang (5 Soal, IDs: -006 .. -010)
 */

module.exports = [
  {
    "id": "fis-kin-ukur-mikro-006",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebelum digunakan untuk mengukur tebal kaca preparat, landasan dan poros geser sebuah mikrometer sekrup berketelitian $0{,}01\\text{ mm}$ dirapatkan tanpa benda. Teramati garis nol pada silinder putar berada 3 skala bagian di bawah garis acuan horizontal skala utama (kesalahan nol positif). Ketika kaca preparat dijepit, skala utama menunjukkan angka $1{,}5\\text{ mm}$ dan garis ke-34 pada silinder putar berimpit tepat dengan garis acuan horizontal. Ketebalan kaca preparat yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL POSITIF PADA MIKROMETER SEKRUP",
    "options": [
      "$1{,}81\\text{ mm}$",
      "$1{,}84\\text{ mm}$",
      "$1{,}87\\text{ mm}$",
      "$1{,}31\\text{ mm}$",
      "$1{,}53\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol positif ($Z > 0$) pada mikrometer sekrup terjadi ketika rahang tertutup rapat tetapi garis nol skala putar berada di bawah garis acuan horizontal. Nilai sebenarnya adalah hasil bacaan terukur dikurangi nilai kesalahan nol: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menentukan nilai kesalahan titik nol positif ($Z$):<br>Garis nol berada 3 skala di bawah garis acuan dengan ketelitian $0{,}01\\text{ mm}$:<br>$$Z = +(3 \\times 0{,}01\\text{ mm}) = +0{,}03\\text{ mm}$$<br>2) Menentukan nilai pembacaan terukur ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 1{,}5\\text{ mm} + (34 \\times 0{,}01\\text{ mm}) = 1{,}5\\text{ mm} + 0{,}34\\text{ mm} = 1{,}84\\text{ mm}$$<br>3) Menghitung ketebalan sebenarnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 1{,}84\\text{ mm} - 0{,}03\\text{ mm} = 1{,}81\\text{ mm}$$.",
      "pitfalls": "Siswa sering melakukan kesalahan dengan menambahkan nilai koreksi alih-alih mengurangkannya ($1{,}84 + 0{,}03 = 1{,}87\\text{ mm}$, opsi C), atau lupa mengoreksi pembacaan awal ($1{,}84\\text{ mm}$, opsi B)."
    }
  },
  {
    "id": "fis-kin-ukur-mikro-007",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Pada saat landasan dan poros mikrometer sekrup (50 skala putar, ketelitian $0{,}01\\text{ mm}$) dirapatkan penuh, garis nol skala putar berada di atas garis acuan mendatar dan garis ke-46 skala putar berimpit segaris dengan garis acuan mendatar (kesalahan nol negatif). Jika mikrometer tersebut digunakan mengukur diameter bola bantalan baja dan menghasilkan pembacaan skala utama $4{,}0\\text{ mm}$ (garis bawah belum terbuka) serta skala putar pada angka $15$, diameter bola bantalan yang sebenarnya adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "KOREKSI KESALAHAN NOL NEGATIF PADA MIKROMETER SEKRUP",
    "options": [
      "$4{,}19\\text{ mm}$",
      "$4{,}15\\text{ mm}$",
      "$4{,}11\\text{ mm}$",
      "$3{,}69\\text{ mm}$",
      "$4{,}61\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Kesalahan titik nol negatif ($Z < 0$) terjadi bila garis nol bidal berada di atas garis acuan saat rahang rapat. Besar kesalahan nol negatif dihitung dari selisih pembagian total skala putar: $Z = - (50 - n) \\times 0{,}01\\text{ mm}$. Nilai sebenarnya: $x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z$.",
      "steps": "1) Menghitung nilai kesalahan nol negatif ($Z$):<br>Garis ke-46 berimpit dari total 50 bagian:<br>$$Z = - (50 - 46) \\times 0{,}01\\text{ mm} = - (4 \\times 0{,}01\\text{ mm}) = -0{,}04\\text{ mm}$$<br>2) Menghitung hasil bacaan terukur ($x_{\\text{terukur}}$):<br>$$x_{\\text{terukur}} = 4{,}0\\text{ mm} + (15 \\times 0{,}01\\text{ mm}) = 4{,}15\\text{ mm}$$<br>3) Menghitung diameter sebenarnya:<br>$$x_{\\text{sebenarnya}} = x_{\\text{terukur}} - Z = 4{,}15\\text{ mm} - (-0{,}04\\text{ mm}) = 4{,}15\\text{ mm} + 0{,}04\\text{ mm} = 4{,}19\\text{ mm}$$.",
      "pitfalls": "Banyak siswa salah menganggap kesalahan negatif bernilai $-0{,}46\\text{ mm}$ secara langsung, atau mengurangkan nilai $0{,}04\\text{ mm}$ sehingga memperoleh $4{,}11\\text{ mm}$ (opsi C)."
    }
  },
  {
    "id": "fis-kin-ukur-mikro-008",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebuah mikrometer sekrup vernier memiliki kisar ulir $0{,}5\\text{ mm}$ dan $50$ pembagian pada skala bidal putar. Selain itu, pada selubung tetap (sleeve) terdapat skala nonius vernier tambahan membujur sebanyak $10$ skala bagian yang membagi 9 bagian skala bidal secara merata. Jika pembacaan pengukuran ketebalan semikonduktor menunjukkan skala utama $6{,}5\\text{ mm}$, skala bidal putar melewati angka $24$, dan garis skala vernier ke-6 berimpit tepat dengan salah satu garis bidal, maka hasil pengukuran tersebut adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PEMBACAAN MIKROMETER SEKRUP DENGAN NONIUS VERNIER TAMBAHAN",
    "options": [
      "$6{,}746\\text{ mm}$",
      "$6{,}740\\text{ mm}$",
      "$6{,}764\\text{ mm}$",
      "$6{,}524\\text{ mm}$",
      "$6{,}806\\text{ mm}$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Mikrometer sekrup vernier memiliki tiga tingkat pembacaan: skala utama ($0{,}5\\text{ mm}$), skala bidal ($0{,}01\\text{ mm}$), dan skala vernier longitudinal ($0{,}001\\text{ mm}$). Rumus pembacaan: $x = \\text{SU} + (\\text{Bidal} \\times 0{,}01\\text{ mm}) + (\\text{Vernier} \\times 0{,}001\\text{ mm})$.",
      "steps": "1) Nilai skala utama: $SU = 6{,}5\\text{ mm}$.<br>2) Nilai skala bidal (thimble): Angka 24 dengan ketelitian $0{,}01\\text{ mm}$:<br>$$SP = 24 \\times 0{,}01\\text{ mm} = 0{,}24\\text{ mm}$$<br>3) Nilai skala vernier tambahan: Garis ke-6 dengan ketelitian $\\frac{0{,}01\\text{ mm}}{10} = 0{,}001\\text{ mm}$:<br>$$SV = 6 \\times 0{,}001\\text{ mm} = 0{,}006\\text{ mm}$$<br>4) Total hasil pengukuran presisi:<br>$$x = 6{,}5\\text{ mm} + 0{,}24\\text{ mm} + 0{,}006\\text{ mm} = 6{,}746\\text{ mm}$$.",
      "pitfalls": "Siswa sering mengabaikan ketelitian vernier 3 desimal milimeter ($0{,}001\\text{ mm}$) dan hanya membulatkan ke 2 desimal ($6{,}74\\text{ mm}$ atau $6{,}740\\text{ mm}$, opsi B)."
    }
  },
  {
    "id": "fis-kin-ukur-mikro-009",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Sebuah kawat penghantar silinder homogen memiliki panjang $L = 10{,}0\\text{ meter}$ dan hambatan jenis bahan $\\rho = 1{,}57 \\times 10^{-7}\\text{ }\\Omega\\cdot\\text{m}$. Diameternya diukur menggunakan mikrometer sekrup berketelitian $0{,}01\\text{ mm}$, di mana skala utama menunjukkan angka $1{,}0\\text{ mm}$ (garis $0{,}5\\text{ mm}$ belum terlihat) dan garis angka $0$ pada skala putar berimpit tepat dengan garis acuan. Besar hambatan listrik kawat penghantar tersebut (gunakan $\\pi = 3{,}14$) adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PENGUKURAN DIAMETER KAWAT UNTUK MENENTUKAN HAMBATAN LISTRIK",
    "options": [
      "$2{,}0\\text{ }\\Omega$",
      "$0{,}5\\text{ }\\Omega$",
      "$4{,}0\\text{ }\\Omega$",
      "$1{,}0\\text{ }\\Omega$",
      "$8{,}0\\text{ }\\Omega$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Hambatan listrik kawat kawat silinder dihitung dengan rumus Pouillet $R = \\rho \\frac{L}{A}$. Dengan penampang lingkaran berdiameter $d$, luas penampang adalah $A = \\frac{1}{4} \\pi d^2$, sehingga $R = \\frac{4 \\rho L}{\\pi d^2}$.",
      "steps": "1) Menentukan diameter kawat terukur:<br>$$d = 1{,}0\\text{ mm} + (0 \\times 0{,}01\\text{ mm}) = 1{,}00\\text{ mm} = 1{,}00 \\times 10^{-3}\\text{ m}$$<br>2) Menghitung luas penampang kawat ($A$):<br>$$A = \\frac{1}{4} \\pi d^2 = \\frac{1}{4} \\times 3{,}14 \\times (1{,}00 \\times 10^{-3}\\text{ m})^2 = 0{,}785 \\times 10^{-6}\\text{ m}^2 = 7{,}85 \\times 10^{-7}\\text{ m}^2$$<br>3) Menghitung hambatan kawat ($R$):<br>$$R = \\frac{\\rho L}{A} = \\frac{(1{,}57 \\times 10^{-7}\\text{ }\\Omega\\cdot\\text{m}) \\times 10{,}0\\text{ m}}{7{,}85 \\times 10^{-7}\\text{ m}^2} = \\frac{15{,}7 \\times 10^{-7}}{7{,}85 \\times 10^{-7}} = 2{,}0\\text{ }\\Omega$$.",
      "pitfalls": "Kesalahan paling fatal adalah lupa mengonversi milimeter ke meter pada diameter ($10^{-3}\\text{ m}$), atau lupa membagi 4 pada rumus $\\pi d^2$ sehingga hambatan terhitung menjadi $0{,}5\\text{ }\\Omega$ (opsi B)."
    }
  },
  {
    "id": "fis-kin-ukur-mikro-010",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-kin",
    "subChapterId": "fis-kin-ukur",
    "subTopicId": "fis-kin-ukur-mikro",
    "category": "Mikrometer Sekrup",
    "difficulty": "sedang",
    "statement": "Diameter sebuah kelereng kaca diukur dengan mikrometer sekrup berketelitian $0{,}01\\text{ mm}$ dan terukur sebesar $d = 10{,}00\\text{ mm}$. Berdasarkan teori propagasi ketidakpastian pengukuran tunggal dengan ketidakpastian mutlak diameter $\\Delta d = \\frac{1}{2} \\times \\text{skala terkecil}$, persentase ketidakpastian relatif dari penentuan volume kelereng tersebut $(\\frac{\\Delta V}{V} \\times 100\\%)$ adalah ....",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "PROPAGASI KETIDAKPASTIAN PADA PENGUKURAN VOLUME BOLA",
    "options": [
      "$0{,}15\\%$",
      "$0{,}05\\%$",
      "$0{,}10\\%$",
      "$0{,}30\\%$",
      "$0{,}45\\%$"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Volume bola dinyatakan dalam fungsi diameter: $V = \\frac{4}{3} \\pi \\left(\\frac{d}{2}\\right)^3 = \\frac{1}{6} \\pi d^3$. Berdasarkan aturan propagasi kesalahan untuk fungsi berpangkat $y = k x^n$, ketidakpastian relatif fraksionalnya adalah $\\frac{\\Delta y}{y} = n \\left(\\frac{\\Delta x}{x}\\right)$.",
      "steps": "1) Menghitung ketidakpastian mutlak pengukuran diameter ($\\Delta d$):<br>$$\\Delta d = \\frac{1}{2} \\times 0{,}01\\text{ mm} = 0{,}005\\text{ mm}$$<br>2) Menghitung ketidakpastian relatif diameter ($\\frac{\\Delta d}{d}$):<br>$$\\frac{\\Delta d}{d} = \\frac{0{,}005\\text{ mm}}{10{,}00\\text{ mm}} = 0{,}0005 = 0{,}05\\%$$<br>3) Menghitung ketidakpastian relatif volume (pangkat 3):<br>$$\\frac{\\Delta V}{V} = 3 \\times \\left(\\frac{\\Delta d}{d}\\right) = 3 \\times 0{,}05\\% = 0{,}15\\%$$.",
      "pitfalls": "Siswa sering menganggap ketidakpastian relatif volume sama dengan ketidakpastian relatif diameter ($0{,}05\\%$, opsi B), lupa mengalikan dengan faktor eksponen 3 dari rumus volume bola berdimensi tiga ($d^3$)."
    }
  }
];
