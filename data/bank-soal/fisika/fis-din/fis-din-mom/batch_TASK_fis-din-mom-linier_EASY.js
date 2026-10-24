module.exports = [
  {
    "id": "fis-din-mom-linier-001",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah mobil bermassa $m = 1.000\\text{ kg}$ melaju lurus ke arah timur dengan kelajuan tetap $v = 72\\text{ km/jam}$. Besar momentum linier mobil tersebut dalam satuan internasional (SI) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$2.000\\text{ kg}\\cdot\\text{m/s}$",
      "$7.200\\text{ kg}\\cdot\\text{m/s}$",
      "$20.000\\text{ kg}\\cdot\\text{m/s}$",
      "$72.000\\text{ kg}\\cdot\\text{m/s}$",
      "$200.000\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 2,
    "solution": {
      "concept": "Momentum linier didefinisikan sebagai hasil kali antara massa benda dan kecepatannya: $p = m v$. Satuan internasional untuk momentum adalah $\\text{kg}\\cdot\\text{m/s}$.",
      "steps": "1. Konversikan kelajuan ke satuan SI ($\\text{m/s}$):\\n$$v = 72\\text{ km/jam} = 72 \\times \\frac{1.000\\text{ m}}{3.600\\text{ s}} = 20\\text{ m/s}$$\\n2. Hitung besar momentum linier:\\n$$p = m v = 1.000\\text{ kg} \\times 20\\text{ m/s} = 20.000\\text{ kg}\\cdot\\text{m/s}$$\\nJadi, besar momentum linier mobil adalah $20.000\\text{ kg}\\cdot\\text{m/s}$.",
      "pitfalls": "Kerap lupa mengonversi $\\text{km/jam}$ ke $\\text{m/s}$ sehingga langsung mengalikan $1.000 \\times 72 = 72.000\\text{ kg}\\cdot\\text{m/s}$."
    }
  },
  {
    "id": "fis-din-mom-linier-002",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Dua partikel $A$ dan $B$ masing-masing memiliki massa $m_A = 2\\text{ kg}$ dan $m_B = 8\\text{ kg}$. Jika kedua partikel tersebut memiliki energi kinetik yang persis sama ($E_{kA} = E_{kB}$), maka perbandingan besar momentum linier partikel $A$ terhadap partikel $B$ ($p_A : p_B$) adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$1 : 4$",
      "$1 : 2$",
      "$1 : 1$",
      "$2 : 1$",
      "$4 : 1$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Hubungan antara energi kinetik dan momentum linier dinyatakan oleh formula: $E_k = \\frac{p^2}{2m} \\implies p = \\sqrt{2m E_k}$. Pada energi kinetik yang sama, momentum berbanding lurus dengan akar massa benda ($p \\propto \\sqrt{m}$).",
      "steps": "1. Tuliskan perbandingan momentum kedua partikel:\\n$$\\frac{p_A}{p_B} = \\frac{\\sqrt{2m_A E_{kA}}}{\\sqrt{2m_B E_{kB}}}$$\\n2. Karena $E_{kA} = E_{kB}$:\\n$$\\frac{p_A}{p_B} = \\sqrt{\\frac{m_A}{m_B}} = \\sqrt{\\frac{2}{8}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$$\\nJadi, perbandingan $p_A : p_B = 1 : 2$.",
      "pitfalls": "Jangan menyamakan perbandingan momentum dengan perbandingan massa langsung ($1 : 4$). Hubungan antara momentum dan massa pada energi kinetik konstan melibatkan akar kuadrat."
    }
  },
  {
    "id": "fis-din-mom-linier-003",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Perhatikan pernyataan-pernyataan mengenai besaran momentum linier berikut:\\n1. Momentum linier merupakan besaran vektor dengan arah yang selalu searah dengan arah vektor kecepatan benda.\\n2. Satuan SI momentum linier $\\text{kg}\\cdot\\text{m/s}$ ekuivalen secara dimensi dengan satuan $\\text{N}\\cdot\\text{s}$.\\n3. Benda yang bergerak melingkar beraturan memiliki momentum linier yang konstan sepanjang waktu.\\nPernyataan yang BENAR adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "1 dan 2 saja",
      "1 dan 3 saja",
      "2 dan 3 saja",
      "1 saja",
      "1, 2, dan 3"
    ],
    "correctIndex": 0,
    "solution": {
      "concept": "Momentum linier $\\vec{p} = m \\vec{v}$ adalah besaran vektor. Dimensi momentum $[M][L][T]^{-1}$ setara dengan $\\text{N}\\cdot\\text{s} = (\\text{kg}\\cdot\\text{m/s}^2)(\\text{s}) = \\text{kg}\\cdot\\text{m/s}$. Pada gerak melingkar, arah kecepatan berubah secara kontinu sehingga momentum linier tidak konstan.",
      "steps": "1. Pernyataan 1 benar: Karena skalar massa $m > 0$, vektor $\\vec{p} = m \\vec{v}$ selalu searah dengan vektor kecepatan $\\vec{v}$.\\n2. Pernyataan 2 benar: $1\\text{ N}\\cdot\\text{s} = 1(\\text{kg}\\cdot\\text{m/s}^2)\\cdot\\text{s} = 1\\text{ kg}\\cdot\\text{m/s}$.\\n3. Pernyataan 3 salah: Walaupun kelajuan konstan pada gerak melingkar beraturan, arah kecepatan senantiasa berputar sehingga vektor momentumnya terus berubah.\\nJadi, pernyataan yang benar adalah 1 dan 2.",
      "pitfalls": "Kerap mengabaikan sifat vektor pada gerak melingkar beraturan. Besar momentum ($|p|$) memang konstan, tetapi vektor momentum linier ($\vec{p}$) TIDAK konstan karena arahnya selalu berubah."
    }
  },
  {
    "id": "fis-din-mom-linier-004",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah bola bermassa $m = 0,2\\text{ kg}$ bergerak mendatar ke arah kanan dengan laju $v_1 = 10\\text{ m/s}$. Bola menumbuk dinding tegak lurus lalu memantul lurus ke arah kiri dengan laju $v_2 = 8\\text{ m/s}$. Besar perubahan momentum linier ($\\Delta p$) yang dialami bola adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,4\\text{ kg}\\cdot\\text{m/s}$",
      "$1,6\\text{ kg}\\cdot\\text{m/s}$",
      "$2,0\\text{ kg}\\cdot\\text{m/s}$",
      "$3,6\\text{ kg}\\cdot\\text{m/s}$",
      "$4,0\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 3,
    "solution": {
      "concept": "Perubahan momentum adalah selisih vektor antara momentum akhir dan awal: $\\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1$. Karena merupakan vektor satu dimensi, tanda positif dan negatif menentukan arah gerak.",
      "steps": "1. Tetapkan arah ke kanan sebagai positif dan ke kiri sebagai negatif:\\n- Kecepatan awal (ke kanan): $v_1 = +10\\text{ m/s} \\implies p_1 = m v_1 = 0,2 \\times (+10) = +2,0\\text{ kg}\\cdot\\text{m/s}$.\\n- Kecepatan akhir (ke kiri): $v_2 = -8\\text{ m/s} \\implies p_2 = m v_2 = 0,2 \\times (-8) = -1,6\\text{ kg}\\cdot\\text{m/s}$.\\n2. Hitung perubahan momentum:\\n$$\\Delta p = p_2 - p_1 = -1,6 - (+2,0) = -3,6\\text{ kg}\\cdot\\text{m/s}$$\\n3. Besar perubahan momentum adalah harga mutlaknya:\\n$$|\\Delta p| = 3,6\\text{ kg}\\cdot\\text{m/s}$$\\nJadi, besar perubahan momentumnya adalah $3,6\\text{ kg}\\cdot\\text{m/s}$.",
      "pitfalls": "Jebakan paling sering adalah mengabaikan arah pantulan sehingga hanya mengurangkan besar kelajuan: $0,2 \\times (10 - 8) = 0,4\\text{ kg}\\cdot\\text{m/s}$. Ingat bahwa saat benda berbalik arah, perubahan kecepatannya adalah penjumlahan besar kedua kelajuan."
    }
  },
  {
    "id": "fis-din-mom-linier-005",
    "subject": "FISIKA",
    "pillarId": "fisika",
    "chapterId": "fis-din",
    "subChapterId": "fis-din-mom",
    "subTopicId": "fis-din-mom-linier",
    "category": "Mekanika",
    "difficulty": "mudah",
    "statement": "Sebuah peluru bermassa $m = 10\\text{ gram}$ ditembakkan dari senapan dengan kelajuan $v = 400\\text{ m/s}$. Besar momentum linier peluru tersebut dalam satuan SI adalah...",
    "hasDiagram": false,
    "diagramSvg": "",
    "diagramCaption": "",
    "options": [
      "$0,4\\text{ kg}\\cdot\\text{m/s}$",
      "$4\\text{ kg}\\cdot\\text{m/s}$",
      "$40\\text{ kg}\\cdot\\text{m/s}$",
      "$400\\text{ kg}\\cdot\\text{m/s}$",
      "$4.000\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctIndex": 1,
    "solution": {
      "concept": "Momentum linier dihitung melalui perkalian massa dalam kilogram dengan kelajuan dalam meter per sekon: $p = m v$.",
      "steps": "1. Konversikan massa peluru ke satuan kilogram (SI):\\n$$m = 10\\text{ gram} = \\frac{10}{1.000}\\text{ kg} = 0,01\\text{ kg}$$\\n2. Hitung momentum linier:\\n$$p = m v = 0,01\\text{ kg} \\times 400\\text{ m/s} = 4\\text{ kg}\\cdot\\text{m/s}$$\\nJadi, besar momentum peluru adalah $4\\text{ kg}\\cdot\\text{m/s}$.",
      "pitfalls": "Kerap tidak mengonversi gram ke kilogram sehingga menghasilkan nilai $10 \\times 400 = 4.000\\text{ kg}\\cdot\\text{m/s}$."
    }
  }
];
