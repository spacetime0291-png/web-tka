/**
 * TKA Physics & Advanced Mathematics Syllabus Hierarchy
 * Complete 2-Pillar Structure with Bab Fundamental (Materi Prasyarat)
 */

window.SYLLABUS_DATA = {
  pillars: [
    {
      id: "fisika",
      name: "Fisika (TKA)",
      shortName: "FISIKA",
      accentColor: "#FF5A26",
      accentBg: "#FFF0EB",
      icon: "fa-bolt-lightning",
      description: "Materi uji Fisika Saintek/TKA: Mekanika, Fluida, Gelombang, Termodinamika, dan Kelistrikan.",
      chapters: [
        {
          id: "fis-kin",
          title: "Kinematika",
          order: 1,
          description: "Studi gerak benda tanpa memperhitungkan penyebab gerak, dari pengukuran presisi hingga gerak lengkung dua dimensi.",
          subTopics: [
            {
              id: "fis-kin-1",
              title: "Pengukuran",
              indicators: "Prinsip kerja & pembacaan jangka sorong; mikrometer sekrup; neraca tiga lengan; kaidah pelaporan & perhitungan angka penting."
            },
            {
              id: "fis-kin-2",
              title: "Gerak Lurus",
              indicators: "Jarak & perpindahan (skalar & vektor); kelajuan & kecepatan (besar & arah); karakteristik & grafik GLB; karakteristik, rumus, & grafik GLBB."
            },
            {
              id: "fis-kin-3",
              title: "Gerak Lengkung",
              indicators: "Komponen kecepatan & posisi gerak parabola bidang horizontal; titik tertinggi & jarak tempuh maksimum gerak parabola; besaran sudut, kecepatan linier, & percepatan sentripetal GMB."
            }
          ]
        },
        {
          id: "fis-din",
          title: "Dinamika",
          order: 2,
          description: "Studi gaya penyebab gerak translasi dan rotasi, hukum kekekalan momentum, dan keseimbangan benda tegar.",
          subTopics: [
            {
              id: "fis-din-1",
              title: "Hubungan Gaya dan Gerak",
              indicators: "Hukum I Newton (kelembaman); Hukum II Newton ($\\Sigma F = ma$); Hukum III Newton (aksi-reaksi); penguraian diagram gaya (berat, normal, gesek statis/kinetis, tegangan tali)."
            },
            {
              id: "fis-din-2",
              title: "Momentum dan Impuls",
              indicators: "Momentum linier; impuls & teorema impuls-momentum; Hukum Kekekalan Momentum pada tumbukan."
            },
            {
              id: "fis-din-3",
              title: "Dinamika Rotasi",
              indicators: "Momen gaya (torsi); momen inersia berbagai benda tegar; Hukum Newton gerak rotasi ($\\Sigma \\tau = I\\alpha$)."
            }
          ]
        },
        {
          id: "fis-flu",
          title: "Fluida",
          order: 3,
          description: "Karakteristik dan hukum mekanika fluida pada kondisi statis (diam) dan dinamis (mengalir).",
          subTopics: [
            {
              id: "fis-flu-1",
              title: "Fluida Statis",
              indicators: "Tekanan hidrostatis & tekanan mutlak; Hukum Pascal sistem hidrolik; Hukum Archimedes & kondisi terapung, melayang, tenggelam."
            },
            {
              id: "fis-flu-2",
              title: "Fluida Dinamis",
              indicators: "Persamaan kontinuitas & debit aliran fluida; penerapan Persamaan Bernoulli."
            }
          ]
        },
        {
          id: "fis-gel",
          title: "Gelombang",
          order: 4,
          description: "Perambatan energi mekanik bunyi dan gelombang elektromagnetik cahaya serta prinsip alat-alat optik.",
          subTopics: [
            {
              id: "fis-gel-1",
              title: "Gelombang Bunyi",
              indicators: "Karakteristik rambatan gelombang mekanik bunyi; sumber bunyi (dawai & pipa organa); intensitas & taraf intensitas bunyi."
            },
            {
              id: "fis-gel-2",
              title: "Gelombang Cahaya",
              indicators: "Karakteristik & spektrum gelombang elektromagnetik; pemantulan & pembiasan cahaya; pembentukan bayangan cermin (datar, cekung, cembung) & lensa (cekung, cembung); prinsip kerja alat optik (mata, kacamata, lup, mikroskop, teropong)."
            }
          ]
        },
        {
          id: "fis-ter",
          title: "Kalor dan Termodinamika",
          order: 5,
          description: "Interaksi energi termal, pengaruh kalor pada wujud materi, kinetika gas ideal, hingga siklus mesin termal.",
          subTopics: [
            {
              id: "fis-ter-1",
              title: "Kalor dan Perpindahannya",
              indicators: "Pengaruh kalor terhadap suhu & perubahan wujud zat (kalor laten); pemuaian panjang, luas, volume; konduksi, konveksi, radiasi; perhitungan pencampuran zat (Asas Black)."
            },
            {
              id: "fis-ter-2",
              title: "Pemanasan Global",
              indicators: "Proses fisik efek rumah kaca; faktor penyebab; solusi penanggulangan."
            },
            {
              id: "fis-ter-3",
              title: "Gas Ideal",
              indicators: "Hukum Boyle (suhu konstan); Hukum Boyle-Gay Lussac (ruang tertutup); persamaan umum gas ideal ($PV = nRT$)."
            },
            {
              id: "fis-ter-4",
              title: "Termodinamika",
              indicators: "Proses isobarik, isokhorik, isotermal, adiabatik; usaha luar & perubahan energi dalam; Hukum I & II Termodinamika; prinsip kerja & efisiensi mesin kalor (siklus Carnot)."
            }
          ]
        },
        {
          id: "fis-lis",
          title: "Kelistrikan",
          order: 6,
          description: "Interaksi muatan diam (elektrostatis) serta dinamika arus listrik searah dalam jaringan resistor dan baterai.",
          subTopics: [
            {
              id: "fis-lis-1",
              title: "Listrik Statis",
              indicators: "Muatan listrik & interaksi elektrostatik; Hukum Coulomb; kuat medan listrik; potensial & energi potensial listrik."
            },
            {
              id: "fis-lis-2",
              title: "Rangkaian Arus Searah (DC)",
              indicators: "Hukum Ohm; aturan percabangan Hukum I Kirchhoff; analisis loop tertutup Hukum II Kirchhoff; hambatan pengganti rangkaian campuran (seri-paralel); energi & daya listrik."
            }
          ]
        }
      ]
    },
    {
      id: "matematika",
      name: "Matematika (TKA & Fundamental)",
      shortName: "MATEMATIKA",
      accentColor: "#2563EB",
      accentBg: "#EFF6FF",
      icon: "fa-calculator",
      description: "Materi uji Matematika Saintek/TKA serta Bab Fundamental Materi Prasyarat wajib.",
      chapters: [
        {
          id: "mtk-fun",
          title: "Bab Fundamental (Materi Prasyarat)",
          order: 0,
          isFoundation: true,
          badge: "FONDASI",
          description: "Fondasi aljabar, trigonometri, dan geometri analitik prasyarat mutlak untuk menyelesaikan seluruh materi TKA tingkat lanjut.",
          subTopics: [
            {
              id: "mtk-fun-1",
              title: "Trigonometri Analitik Dasar",
              indicators: "Perbandingan sisi ($\\sin, \\cos, \\tan$) segitiga siku-siku; sudut istimewa kuadran I; relasi sudut kuadran II, III, IV; identitas Pythagoras ($\\sin^2 x + \\cos^2 x = 1$); sudut rangkap ($\\sin 2x, \\cos 2x$); jumlah & selisih sudut sinus dan kosinus."
            },
            {
              id: "mtk-fun-2",
              title: "Aljabar Elementer",
              indicators: "Bentuk aljabar, pengelompokan suku sejenis, pemfaktoran kuadrat; penyederhanaan pecahan aljabar; substitusi & eliminasi SPLDV dan SPLTV."
            },
            {
              id: "mtk-fun-3",
              title: "Geometri Analitik Bidang",
              indicators: "Koordinat Kartesius & jarak antartitik; persamaan garis lurus ($y = mx + c$ dan $ax + by + c = 0$); gradien sejajar ($m_1 = m_2$) & tegak lurus ($m_1 \\cdot m_2 = -1$); jarak titik ke garis lurus."
            },
            {
              id: "mtk-fun-4",
              title: "Pertidaksamaan dan Nilai Mutlak",
              indicators: "Syarat pecahan terdefinisi (penyebut $\\neq 0$); syarat bentuk akar terdefinisi ($\\ge 0$); sifat dasar persamaan & pertidaksamaan nilai mutlak."
            },
            {
              id: "mtk-fun-5",
              title: "Eksponen dan Logaritma",
              indicators: "Aturan pangkat bulat & rasional; perpangkatan basis bilangan asli; sifat penjumlahan, pengurangan, perpangkatan numerus logaritma; sifat perubahan basis logaritma."
            }
          ]
        },
        {
          id: "mtk-alj",
          title: "Aljabar Lanjut",
          order: 1,
          description: "Matriks, aljabar polinomial suku banyak tingkat tinggi, serta fungsi real dan pemetaan analitis.",
          subTopics: [
            {
              id: "mtk-alj-1",
              title: "Matriks",
              indicators: "Penjumlahan, pengurangan, perkalian skalar & antarmatriks; determinan & invers matriks ordo $2\\times2$ dan $3\\times3$; penyelesaian program linear & sistem persamaan menggunakan matriks."
            },
            {
              id: "mtk-alj-2",
              title: "Polinomial",
              indicators: "Penjumlahan, pengurangan, perkalian polinomial (orde $\\le 4$); pembagian bersusun & skema Horner; pemfaktoran suku banyak hingga faktor linear; Teorema Sisa & Teorema Faktor."
            },
            {
              id: "mtk-alj-3",
              title: "Fungsi",
              indicators: "Domain, kodomain, range, & grafik fungsi polinom (derajat $\\le 4$), rasional, bentuk akar, eksponensial (basis asli), logaritma, nilai mutlak, dan trigonometri."
            }
          ]
        },
        {
          id: "mtk-geo",
          title: "Geometri dan Pengukuran",
          order: 2,
          description: "Vektor ruang dan bidang, geometri analitik lingkaran, serta komposisi transformasi koordinat matriks.",
          subTopics: [
            {
              id: "mtk-geo-1",
              title: "Vektor",
              indicators: "Komponen vektor di $\\mathbb{R}^2$ dan $\\mathbb{R}^3$ (maksimum 3 komponen); panjang/besar vektor; penjumlahan & pengurangan vektor; perkalian skalar dua vektor (dot product)."
            },
            {
              id: "mtk-geo-2",
              title: "Lingkaran",
              indicators: "Persamaan lingkaran pusat $(0,0)$, $(a,b)$, & bentuk umum; persamaan garis singgung (melalui titik pada lingkaran, gradien tertentu, titik di luar lingkaran); keliling, luas, panjang busur, luas juring & tembereng."
            },
            {
              id: "mtk-geo-3",
              title: "Transformasi Geometri",
              indicators: "Translasi, refleksi, rotasi, dilatasi pada titik, garis, & bangun datar; komposisi transformasi; representasi perkalian matriks pada transformasi geometri."
            }
          ]
        },
        {
          id: "mtk-tri",
          title: "Trigonometri & Limit",
          order: 3,
          description: "Konsep limit fungsi aljabar dan limit trigonometri analitis murni tanpa aturan L'Hôpital.",
          subTopics: [
            {
              id: "mtk-tri-1",
              title: "Limit Fungsi",
              indicators: "Limit fungsi aljabar (substitusi, pemfaktoran, rasionalisasi akar — TANPA L'Hôpital); limit fungsi trigonometri (teorema limit dasar & manipulasi identitas — TANPA L'Hôpital)."
            }
          ]
        }
      ]
    }
  ]
};
