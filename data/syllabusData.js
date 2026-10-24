/**
 * TKA Physics & Advanced Mathematics Syllabus Hierarchy
 * Complete 4-Level Architecture:
 * Level 1: Pillars (Mata Pelajaran)
 * Level 2: Chapters (Bab Besar)
 * Level 3: SubChapters (Bab Kecil)
 * Level 4: SubTopics (Sub-Bab Spesifik Target Drilling)
 */

if (typeof window === 'undefined') {
  global.window = global;
}

const rawPillars = [
  {
    id: "fisika",
    name: "Fisika (TKA)",
    shortName: "FISIKA",
    order: 1,
    accentColor: "#FF5A26",
    accentBg: "#FFF0EB",
    icon: "fa-bolt-lightning",
    description: "Materi uji Fisika Saintek/TKA: Mekanika, Fluida, Gelombang, Kalor & Termodinamika, dan Kelistrikan.",
    chapters: [
      {
        id: "fis-kin",
        title: "Kinematika",
        order: 1,
        description: "Studi gerak benda tanpa memperhitungkan penyebab gerak, dari pengukuran presisi hingga gerak lengkung dua dimensi.",
        subChapters: [
          {
            id: "fis-kin-ukur",
            title: "Pengukuran",
            order: 1,
            subTopics: [
              {
                id: "fis-kin-ukur-jangka",
                slug: "jangka-sorong",
                title: "Jangka Sorong",
                indicators: "Prinsip kerja, ketelitian 0,05/0,1 mm, pembacaan skala utama & skala nonius jangka sorong."
              },
              {
                id: "fis-kin-ukur-mikro",
                slug: "mikrometer-sekrup",
                title: "Mikrometer Sekrup",
                indicators: "Prinsip kerja, ketelitian 0,01 mm, pembacaan skala utama & skala putar silinder bidal."
              },
              {
                id: "fis-kin-ukur-neraca",
                slug: "neraca-tiga-lengan",
                title: "Neraca Tiga Lengan",
                indicators: "Pengukuran massa presisi, pembacaan posisi anting tiga lengan neraca Ohaus."
              },
              {
                id: "fis-kin-ukur-angka",
                slug: "angka-penting",
                title: "Angka Penting",
                indicators: "Aturan angka penting, operasi hitung penjumlahan, pengurangan, perkalian, & pembagian."
              },
              {
                id: "fis-kin-ukur-ketidakpastian",
                slug: "ketidakpastian-evaluasi-data",
                title: "Ketidakpastian & Evaluasi Data",
                indicators: "Ketidakpastian mutlak (1/2 skala terkecil), ketidakpastian relatif, dan pelaporan hasil ukur berulang."
              }
            ]
          },
          {
            id: "fis-kin-gl",
            title: "Gerak Lurus",
            order: 2,
            subTopics: [
              {
                id: "fis-kin-gl-jarak",
                slug: "jarak-perpindahan",
                title: "Jarak dan Perpindahan",
                indicators: "Perbedaan besaran skalar (jarak) dan vektor (perpindahan) pada lintasan gerak lurus."
              },
              {
                id: "fis-kin-gl-kelajuan",
                slug: "kelajuan-kecepatan",
                title: "Kelajuan dan Kecepatan",
                indicators: "Kelajuan rata-rata, kecepatan rata-rata, dan kecepatan sesaat."
              },
              {
                id: "fis-kin-gl-relatif",
                slug: "kecepatan-relatif",
                title: "Kecepatan Relatif",
                indicators: "Relativitas kecepatan Galileo satu dimensi untuk dua benda bergerak searah & berlawanan arah."
              },
              {
                id: "fis-kin-gl-glb",
                slug: "glb",
                title: "Gerak Lurus Beraturan (GLB)",
                indicators: "Karakteristik GLB (v = konstan, a = 0), hubungan s = v * t."
              },
              {
                id: "fis-kin-gl-glbb",
                slug: "glbb",
                title: "Gerak Lurus Berubah Beraturan (GLBB)",
                indicators: "Karakteristik GLBB (a = konstan), persamaan percepatan, kecepatan akhir, dan jarak tempuh."
              },
              {
                id: "fis-kin-gl-grafik",
                slug: "analisis-grafik",
                title: "Analisis Grafik Gerak Lurus",
                indicators: "Interpretasi grafik s-t, v-t, dan a-t, gradien kecepatan/percepatan, serta luas area grafik."
              },
              {
                id: "fis-kin-gl-vertikal",
                slug: "gerak-vertikal-jatuh-bebas",
                title: "Gerak Vertikal & Jatuh Bebas",
                indicators: "Gerak jatuh bebas tanpa kecepatan awal, gerak vertikal ke atas, waktu puncak, dan kecepatan tumbuk tanah."
              }
            ]
          },
          {
            id: "fis-kin-lengkung",
            title: "Gerak Lengkung",
            order: 3,
            subTopics: [
              {
                id: "fis-kin-lengkung-parabola",
                slug: "vektor-gerak-parabola",
                title: "Vektor Gerak Parabola",
                indicators: "Pemisahan komponen gerak sumbu-x (GLB) dan sumbu-y (GLBB dengan percepatan gravitasi)."
              },
              {
                id: "fis-kin-lengkung-ekstrem",
                slug: "titik-ekstrem-parabola",
                title: "Titik Ekstrem Gerak Parabola",
                indicators: "Penentuan waktu mencapai titik tertinggi (h_max), jangkauan horizontal terjauh (x_max), dan kecepatan di titik ekstrem."
              },
              {
                id: "fis-kin-lengkung-gmb",
                slug: "gmb",
                title: "Gerak Melingkar Beraturan (GMB)",
                indicators: "Frekuensi, periode, kecepatan sudut (omega), dan kelajuan linier (v = omega * r)."
              },
              {
                id: "fis-kin-lengkung-sentripetal",
                slug: "percepatan-sentripetal",
                title: "Percepatan Sentripetal",
                indicators: "Arah dan besar percepatan sentripetal (a_s = v^2 / r = omega^2 * r) menuju pusat lingkaran."
              }
            ]
          }
        ]
      },
      {
        id: "fis-din",
        title: "Dinamika",
        order: 2,
        description: "Studi gaya penyebab gerak translasi dan rotasi, hukum kekekalan momentum, dan keseimbangan benda tegar.",
        subChapters: [
          {
            id: "fis-din-gaya",
            title: "Gaya dan Gerak",
            order: 1,
            subTopics: [
              {
                id: "fis-din-gaya-newton1",
                slug: "hukum-1-newton",
                title: "Hukum I Newton",
                indicators: "Prinsip kelembaman (inersia) dan syarat kesetimbangan translasi (resultan gaya nol)."
              },
              {
                id: "fis-din-gaya-newton2",
                slug: "hukum-2-newton",
                title: "Hukum II Newton",
                indicators: "Hubungan resultan gaya luar, massa, dan percepatan (Sigma F = m * a)."
              },
              {
                id: "fis-din-gaya-newton3",
                slug: "hukum-3-newton",
                title: "Hukum III Newton",
                indicators: "Pasangan gaya aksi-reaksi: besar sama, berlawanan arah, bekerja pada dua benda berbeda."
              },
              {
                id: "fis-din-gaya-berat-normal",
                slug: "gaya-berat-normal",
                title: "Gaya Berat dan Gaya Normal",
                indicators: "Gaya berat gravitasi (w = m * g) dan gaya normal pada bidang horizontal, bidang miring, dan dalam lift."
              },
              {
                id: "fis-din-gaya-gesek",
                slug: "gaya-gesek",
                title: "Gaya Gesek Statis dan Kinetis",
                indicators: "Gaya gesek statis maksimum (f_s = mu_s * N), gesek kinetis (f_k = mu_k * N), dan penentuan kondisi gerak."
              },
              {
                id: "fis-din-gaya-tegangan",
                slug: "gaya-tegangan-tali",
                title: "Gaya Tegangan Tali",
                indicators: "Gaya tegangan tali pada sistem katrol Atwood, benda bergandeng, dan gerak vertikal bertali."
              },
              {
                id: "fis-din-gaya-sentripetal",
                slug: "gaya-sentripetal",
                title: "Gaya Sentripetal",
                indicators: "Resultan gaya sentripetal (F_s = m * v^2 / r) pada lintasan melingkar vertikal dan horizontal."
              }
            ]
          },
          {
            id: "fis-din-mom",
            title: "Momentum dan Impuls",
            order: 2,
            subTopics: [
              {
                id: "fis-din-mom-linier",
                slug: "momentum-linier",
                title: "Momentum Linier",
                indicators: "Besaran momentum linier (p = m * v) sebagai ukuran kesukaran menghentikan benda bergerak."
              },
              {
                id: "fis-din-mom-impuls",
                slug: "impuls-teorema",
                title: "Impuls & Teorema Impuls-Momentum",
                indicators: "Gaya impulsif rata-rata, luas grafik gaya terhadap waktu (F-t), dan teorema I = Delta p."
              },
              {
                id: "fis-din-mom-kekekalan",
                slug: "kekekalan-momentum",
                title: "Hukum Kekekalan Momentum",
                indicators: "Kekekalan momentum total pada sistem terisolasi tanpa gaya luar."
              },
              {
                id: "fis-din-mom-tumbukan",
                slug: "tumbukan-restitusi",
                title: "Tumbukan & Koefisien Restitusi",
                indicators: "Tumbukan lenting sempurna (e=1), lenting sebagian (0 < e < 1), dan tidak lenting sama sekali (e=0)."
              }
            ]
          },
          {
            id: "fis-din-rot",
            title: "Dinamika Rotasi & Kesetimbangan",
            order: 3,
            subTopics: [
              {
                id: "fis-din-rot-torsi",
                slug: "momen-gaya-torsi",
                title: "Momen Gaya (Torsi)",
                indicators: "Perkalian silang lengan gaya dengan vektor gaya (tau = r * F * sin theta) terhadap poros rotasi."
              },
              {
                id: "fis-din-rot-inersia",
                slug: "momen-inersia",
                title: "Momen Inersia",
                indicators: "Momen inersia partikel dan berbagai benda tegar simetris homogen (silinder, bola, batang tipis)."
              },
              {
                id: "fis-din-rot-newton",
                slug: "hukum-2-newton-rotasi",
                title: "Hukum II Newton Rotasi",
                indicators: "Dinamika gerak rotasi murni dan menggelinding tanpa selip (tau = I * alpha, a = alpha * r)."
              },
              {
                id: "fis-din-rot-kesetimbangan",
                slug: "kesetimbangan-benda-tegar",
                title: "Kesetimbangan Benda Tegar",
                indicators: "Syarat kesetimbangan lengkap: resultan gaya nol dan resultan momen gaya nol."
              },
              {
                id: "fis-din-rot-titikberat",
                slug: "titik-berat",
                title: "Titik Berat",
                indicators: "Penentuan koordinat titik berat benda satu dimensi (garis), dua dimensi (luasan), dan gabungan."
              }
            ]
          }
        ]
      },
      {
        id: "fis-flu",
        title: "Fluida",
        order: 3,
        description: "Karakteristik dan hukum mekanika fluida pada kondisi statis (diam) dan dinamis (mengalir).",
        subChapters: [
          {
            id: "fis-flu-statis",
            title: "Fluida Statis",
            order: 1,
            subTopics: [
              {
                id: "fis-flu-statis-tekanan",
                slug: "tekanan-hidrostatis-mutlak",
                title: "Tekanan Hidrostatis & Mutlak",
                indicators: "Tekanan fluida cair (P_h = rho * g * h) dan tekanan mutlak total (P = P_0 + rho * g * h)."
              },
              {
                id: "fis-flu-statis-pipau",
                slug: "hukum-utama-hidrostatis-pipa-u",
                title: "Hukum Utama Hidrostatis (Pipa U)",
                indicators: "Prinsip kesamaan tekanan pada bidang datar horizontal fluida sejenis (rho_1 * h_1 = rho_2 * h_2)."
              },
              {
                id: "fis-flu-statis-pascal",
                slug: "hukum-pascal",
                title: "Hukum Pascal",
                indicators: "Penerusan tekanan ke segala arah sama besar pada dongkrak hidrolik (F_1 / A_1 = F_2 / A_2)."
              },
              {
                id: "fis-flu-statis-archimedes",
                slug: "hukum-archimedes",
                title: "Hukum Archimedes",
                indicators: "Gaya apung ke atas (F_a = rho_f * V_bf * g) dan syarat terapung, melayang, serta tenggelam."
              }
            ]
          },
          {
            id: "fis-flu-dinamis",
            title: "Fluida Dinamis",
            order: 2,
            subTopics: [
              {
                id: "fis-flu-dinamis-kontinuitas",
                slug: "debit-persamaan-kontinuitas",
                title: "Debit & Persamaan Kontinuitas",
                indicators: "Laju aliran debit (Q = A * v) dan kekekalan massa fluida inkompresibel (A_1 * v_1 = A_2 * v_2)."
              },
              {
                id: "fis-flu-dinamis-bernoulli",
                slug: "persamaan-bernoulli",
                title: "Persamaan Bernoulli",
                indicators: "Kekekalan energi mekanik fluida mengalir (P + 0.5 * rho * v^2 + rho * g * h = konstan)."
              },
              {
                id: "fis-flu-dinamis-pitot",
                slug: "tabung-pitot-penyemprot",
                title: "Tabung Pitot & Penyemprot",
                indicators: "Penerapan Bernoulli pada venturimeter, tabung pitot pengukur kecepatan aliran, dan penyemprot."
              },
              {
                id: "fis-flu-dinamis-sayap",
                slug: "gaya-angkat-pesawat",
                title: "Gaya Angkat Pesawat",
                indicators: "Perbedaan kelajuan dan tekanan udara atas-bawah sayap pesawat terbang."
              }
            ]
          }
        ]
      },
      {
        id: "fis-gel",
        title: "Gelombang dan Optik",
        order: 4,
        description: "Perambatan energi mekanik bunyi dan gelombang elektromagnetik cahaya serta prinsip alat-alat optik.",
        subChapters: [
          {
            id: "fis-gel-bunyi",
            title: "Gelombang Bunyi",
            order: 1,
            subTopics: [
              {
                id: "fis-gel-bunyi-karakteristik",
                slug: "karakteristik-gelombang-bunyi",
                title: "Karakteristik Gelombang Bunyi",
                indicators: "Gelombang mekanik longitudinal, medium perambatan, nada, desah, resonansi, dan pelayangan bunyi."
              },
              {
                id: "fis-gel-bunyi-cepatrambat",
                slug: "cepat-rambat-bunyi",
                title: "Cepat Rambat Bunyi",
                indicators: "Kecepatan rambat bunyi pada zat padat, zat cair, dan gas ideal."
              },
              {
                id: "fis-gel-bunyi-dawai",
                slug: "dawai-senar",
                title: "Dawai (Senar)",
                indicators: "Pola gelombang stasioner dawai, hukum Melde (v = sqrt(F / mu)), nada dasar, dan nada atas."
              },
              {
                id: "fis-gel-bunyi-organa",
                slug: "pipa-organa",
                title: "Pipa Organa",
                indicators: "Frekuensi resonansi nada pipa organa terbuka dan pipa organa tertutup."
              },
              {
                id: "fis-gel-bunyi-taraf",
                slug: "intensitas-taraf-intensitas",
                title: "Intensitas & Taraf Intensitas",
                indicators: "Intensitas bunyi titik (I = P / (4*pi*r^2)) dan taraf intensitas desibel (TI = 10 log(I / I_0))."
              },
              {
                id: "fis-gel-bunyi-doppler",
                slug: "efek-doppler",
                title: "Efek Doppler",
                indicators: "Pergeseran frekuensi akibat gerak relatif sumber bunyi dan pendengar."
              }
            ]
          },
          {
            id: "fis-gel-optik",
            title: "Gelombang Cahaya & Optik",
            order: 2,
            subTopics: [
              {
                id: "fis-gel-optik-spektrum",
                slug: "spektrum-elektromagnetik",
                title: "Spektrum Elektromagnetik",
                indicators: "Urutan spektrum gelombang elektromagnetik dari frekuensi terendah ke tertinggi dan peranannya."
              },
              {
                id: "fis-gel-optik-pantul",
                slug: "pemantulan-cahaya",
                title: "Pemantulan Cahaya",
                indicators: "Hukum pemantulan Snellius: sinar datang, garis normal, sinar pantul, dan sudut datang = sudut pantul."
              },
              {
                id: "fis-gel-optik-bias",
                slug: "pembiasan-cahaya-snellius",
                title: "Pembiasan Cahaya (Hukum Snellius)",
                indicators: "Indeks bias medium, hukum pembiasan (n_1 sin theta_1 = n_2 sin theta_2), dan sudut kritis."
              },
              {
                id: "fis-gel-optik-cermin",
                slug: "cermin-datar-cekung-cembung",
                title: "Cermin Datar, Cekung, dan Cembung",
                indicators: "Pembentukan bayangan, titik fokus (f = R/2), persamaan Gauss (1/f = 1/s + 1/s'), dan perbesaran."
              },
              {
                id: "fis-gel-optik-lensa",
                slug: "lensa-cekung-cembung",
                title: "Lensa Cekung dan Cembung",
                indicators: "Persamaan pembuat lensa, kekuatan lensa (P = 100/f dioptri), dan sifat bayangan nyata/maya."
              },
              {
                id: "fis-gel-optik-mata",
                slug: "mata-dan-kacamata",
                title: "Mata dan Kacamata",
                indicators: "Cacat mata miopi, hipermetropi, dan penentuan kuat lensa kacamata bantu."
              },
              {
                id: "fis-gel-optik-alat",
                slug: "lup-mikroskop-teropong",
                title: "Lup, Mikroskop, dan Teropong",
                indicators: "Perbesaran lup, mikroskop (objektif + okuler), dan teropong bintang berakomodasi / tanpa akomodasi."
              }
            ]
          }
        ]
      },
      {
        id: "fis-termo",
        title: "Kalor dan Termodinamika",
        order: 5,
        description: "Interaksi energi termal, pengaruh kalor pada wujud materi, kinetika gas ideal, hingga siklus mesin termal.",
        subChapters: [
          {
            id: "fis-termo-kalor",
            title: "Kalor dan Perpindahannya",
            order: 1,
            subTopics: [
              {
                id: "fis-termo-kalor-sensibel",
                slug: "kalor-sensibel-laten",
                title: "Kalor Sensibel & Kalor Laten",
                indicators: "Kalor pengubah suhu (Q = m * c * Delta T) dan kalor pengubah wujud lebur/uap (Q = m * L)."
              },
              {
                id: "fis-termo-kalor-pemuaian",
                slug: "pemuaian-zat",
                title: "Pemuaian Zat",
                indicators: "Pemuaian panjang (Delta L = L_0 * alpha * Delta T), luas, dan volume zat padat serta cair."
              },
              {
                id: "fis-termo-kalor-asasblack",
                slug: "asas-black",
                title: "Asas Black",
                indicators: "Kekekalan kalor pada pencampuran zat (Q_lepas = Q_serap) dan penentuan suhu akhir campuran."
              },
              {
                id: "fis-termo-kalor-perpindahan",
                slug: "konduksi-konveksi-radiasi",
                title: "Konduksi, Konveksi, dan Radiasi",
                indicators: "Laju konduksi Fourier, konveksi zat cair/gas, dan radiasi hukum Stefan-Boltzmann (P = e * sigma * A * T^4)."
              }
            ]
          },
          {
            id: "fis-termo-global",
            title: "Pemanasan Global",
            order: 2,
            subTopics: [
              {
                id: "fis-termo-global-efek",
                slug: "efek-rumah-kaca",
                title: "Efek Rumah Kaca",
                indicators: "Mekanisme perangkap gelombang inframerah oleh gas rumah kaca (CO2, CH4, N2O, uap air)."
              },
              {
                id: "fis-termo-global-dampak",
                slug: "penyebab-dampak-global",
                title: "Penyebab & Dampak Pemanasan Global",
                indicators: "Kenaikan suhu bumi, pencairan es kutub, kenaikan muka air laut, dan anomali iklim ekstrem."
              },
              {
                id: "fis-termo-global-mitigasi",
                slug: "mitigasi-pemanasan-global",
                title: "Mitigasi Pemanasan Global",
                indicators: "Transisi energi terbarukan, efisiensi energi, reboisasi, dan kebijakan reduksi jejak karbon."
              }
            ]
          },
          {
            id: "fis-termo-gas",
            title: "Teori Gas Ideal",
            order: 3,
            subTopics: [
              {
                id: "fis-termo-gas-boyle",
                slug: "hukum-boyle-gay-lussac",
                title: "Hukum Boyle & Gay-Lussac",
                indicators: "Hukum Boyle isotermal (P * V = konstan) dan Gay-Lussac isokhorik (P / T = konstan)."
              },
              {
                id: "fis-termo-gas-gabungan",
                slug: "hukum-boyle-gay-lussac-gabungan",
                title: "Hukum Boyle-Gay Lussac",
                indicators: "Persamaan keadaan gabungan gas ideal ((P_1 * V_1) / T_1 = (P_2 * V_2) / T_2)."
              },
              {
                id: "fis-termo-gas-ideal",
                slug: "persamaan-umum-gas-ideal",
                title: "Persamaan Umum Gas Ideal",
                indicators: "Persamaan P * V = n * R * T = N * k_B * T, energi kinetik molekul gas, dan kecepatan efektif v_rms."
              }
            ]
          },
          {
            id: "fis-termo-hukum",
            title: "Termodinamika",
            order: 4,
            subTopics: [
              {
                id: "fis-termo-hukum-proses",
                slug: "proses-termodinamika",
                title: "Proses Termodinamika",
                indicators: "Karakteristik proses isobarik, isotermal, isokhorik, dan adiabatik pada diagram P-V."
              },
              {
                id: "fis-termo-hukum-usaha",
                slug: "usaha-energi-dalam",
                title: "Usaha & Energi Dalam",
                indicators: "Usaha luar sistem gas (W = integral P dV) dan perubahan energi dalam gas monoatomik/diatomik."
              },
              {
                id: "fis-termo-hukum-hukum1",
                slug: "hukum-1-termodinamika",
                title: "Hukum I Termodinamika",
                indicators: "Prinsip kekekalan energi pada sistem termodinamika (Q = Delta U + W)."
              },
              {
                id: "fis-termo-hukum-hukum2",
                slug: "hukum-2-termodinamika",
                title: "Hukum II Termodinamika",
                indicators: "Arah aliran kalor spontan, konsep entropi, dan batasan konversi kalor total menjadi usaha."
              },
              {
                id: "fis-termo-hukum-carnot",
                slug: "mesin-kalor-carnot",
                title: "Mesin Kalor & Siklus Carnot",
                indicators: "Efisiensi mesin Carnot ideal (eta = 1 - T_L / T_H), siklus 4 tahap, dan mesin pendingin."
              }
            ]
          }
        ]
      },
      {
        id: "fis-lis",
        title: "Kelistrikan",
        order: 6,
        description: "Interaksi muatan diam (elektrostatis) serta dinamika arus listrik searah dalam jaringan resistor dan baterai.",
        subChapters: [
          {
            id: "fis-lis-statis",
            title: "Listrik Statis",
            order: 1,
            subTopics: [
              {
                id: "fis-lis-statis-coulomb",
                slug: "muatan-listrik-coulomb",
                title: "Muatan Listrik & Hukum Coulomb",
                indicators: "Interaksi gaya elektrostatis Coulomb antarmuatan titik (F = k * |q1 * q2| / r^2)."
              },
              {
                id: "fis-lis-statis-medan",
                slug: "kuat-medan-listrik",
                title: "Kuat Medan Listrik",
                indicators: "Vektor kuat medan listrik (E = k * q / r^2) dan resultan medan listrik gabungan."
              },
              {
                id: "fis-lis-statis-potensial",
                slug: "energi-potensial-listrik",
                title: "Energi Potensial & Potensial Listrik",
                indicators: "Skalar potensial listrik (V = k * q / r), energi potensial (Ep = q * V), dan usaha gerak muatan."
              },
              {
                id: "fis-lis-statis-keping",
                slug: "keping-sejajar",
                title: "Keping Sejajar",
                indicators: "Medan listrik homogen antara dua keping konduktor sejajar dan kapasitas kapasitor keping."
              }
            ]
          },
          {
            id: "fis-lis-dc",
            title: "Rangkaian Arus Searah (DC)",
            order: 2,
            subTopics: [
              {
                id: "fis-lis-dc-ohm",
                slug: "hukum-ohm-hambatan",
                title: "Hukum Ohm & Hambatan",
                indicators: "Hubungan tegangan, arus, dan hambatan (V = I * R), serta hambatan kawat penghantar."
              },
              {
                id: "fis-lis-dc-rangkaian",
                slug: "rangkaian-seri-paralel",
                title: "Rangkaian Seri dan Paralel",
                indicators: "Hambatan pengganti seri, paralel, pembagi tegangan, dan pembagi arus listrik."
              },
              {
                id: "fis-lis-dc-kirchhoff",
                slug: "hukum-1-dan-2-kirchhoff",
                title: "Hukum I dan II Kirchhoff",
                indicators: "Hukum percabangan arus dan analisis rangkaian tertutup satu dan multi-loop."
              },
              {
                id: "fis-lis-dc-daya",
                slug: "energi-dan-daya-listrik",
                title: "Energi dan Daya Listrik",
                indicators: "Energi listrik disipasi (W = P * t) dan daya listrik pada resistor (P = I^2 * R = V^2 / R)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "matematika",
    name: "Matematika Lanjut (TKA)",
    shortName: "MATEMATIKA LANJUT",
    order: 2,
    accentColor: "#2563EB",
    accentBg: "#EFF6FF",
    icon: "fa-calculator",
    description: "Materi uji Matematika Lanjut Saintek/TKA: Aljabar, Geometri & Pengukuran, dan Kalkulus Limit.",
    chapters: [
      {
        id: "mat-alj",
        title: "Aljabar",
        order: 1,
        description: "Matriks, aljabar polinomial suku banyak tingkat tinggi, serta fungsi real dan pemetaan analitis.",
        subChapters: [
          {
            id: "mat-alj-matriks",
            title: "Matriks",
            order: 1,
            subTopics: [
              {
                id: "mat-alj-matriks-ordo",
                slug: "ordo-kesamaan-transpose",
                title: "Ordo, Kesamaan, dan Transpose",
                indicators: "Ordo matriks baris-kolom, kesamaan dua matriks, dan transpose matriks (A^T)."
              },
              {
                id: "mat-alj-matriks-operasi",
                slug: "penjumlahan-pengurangan-matriks",
                title: "Penjumlahan dan Pengurangan Matriks",
                indicators: "Operasi penjumlahan dan pengurangan matriks berordo sama serta sifat aljabarnya."
              },
              {
                id: "mat-alj-matriks-kali",
                slug: "perkalian-skalar-dua-matriks",
                title: "Perkalian Skalar dan Dua Matriks",
                indicators: "Perkalian skalar dengan matriks dan perkalian antardua matriks berdimensi kompatibel."
              },
              {
                id: "mat-alj-matriks-det",
                slug: "determinan-matriks",
                title: "Determinan Matriks 2x2 dan 3x3",
                indicators: "Determinan matriks 2x2, aturan Sarrus/ekspansi kofaktor 3x3, dan sifat perkalian determinan."
              },
              {
                id: "mat-alj-matriks-invers",
                slug: "invers-matriks",
                title: "Invers Matriks 2x2 dan 3x3",
                indicators: "Invers matriks non-singular A^(-1) = (1 / det(A)) * adj(A)."
              },
              {
                id: "mat-alj-matriks-persamaan",
                slug: "persamaan-matriks",
                title: "Persamaan Matriks",
                indicators: "Penyelesaian persamaan matriks AX = B (X = A^(-1) B) dan XA = B (X = B A^(-1))."
              },
              {
                id: "mat-alj-matriks-spl",
                slug: "matriks-spl-program-linear",
                title: "Matriks pada SPL & Program Linear",
                indicators: "Metode invers matriks dan aturan Cramer untuk penyelesaian SPL serta model program linear."
              }
            ]
          },
          {
            id: "mat-alj-polinom",
            title: "Polinomial",
            order: 2,
            subTopics: [
              {
                id: "mat-alj-polinom-operasi",
                slug: "operasi-aljabar-polinomial",
                title: "Operasi Aljabar Polinomial",
                indicators: "Derajat polinomial, penjumlahan, pengurangan, perkalian, dan kesamaan suku banyak."
              },
              {
                id: "mat-alj-polinom-susun",
                slug: "pembagian-bersusun",
                title: "Pembagian Bersusun",
                indicators: "Algoritma pembagian bersusun panjang polinomial oleh pembagi derajat 1 dan 2."
              },
              {
                id: "mat-alj-polinom-horner",
                slug: "skema-horner",
                title: "Skema Horner",
                indicators: "Metode sintetik bagan Horner dan pembagian efisien suku banyak."
              },
              {
                id: "mat-alj-polinom-sisa",
                slug: "teorema-sisa",
                title: "Teorema Sisa",
                indicators: "Sisa pembagian suku banyak P(x) oleh (x - k) bernilai P(k)."
              },
              {
                id: "mat-alj-polinom-faktor",
                slug: "teorema-faktor-akar",
                title: "Teorema Faktor & Akar Polinomial",
                indicators: "Faktor linear suku banyak (P(k) = 0) dan hubungan akar-akar Vieta."
              }
            ]
          },
          {
            id: "mat-alj-fungsi",
            title: "Fungsi",
            order: 3,
            subTopics: [
              {
                id: "mat-alj-fungsi-domain",
                slug: "domain-kodomain-range",
                title: "Domain, Kodomain, dan Range",
                indicators: "Penentuan daerah asal alami (D_f), daerah kawan, dan daerah hasil (R_f) fungsi real."
              },
              {
                id: "mat-alj-fungsi-polinom",
                slug: "fungsi-polinom",
                title: "Fungsi Polinom",
                indicators: "Grafik fungsi linear, kuadrat, kubik, dan titik ekstrem parabola."
              },
              {
                id: "mat-alj-fungsi-rasional",
                slug: "fungsi-rasional",
                title: "Fungsi Rasional",
                indicators: "Karakteristik fungsi pecahan aljabar, asimtot tegak, dan asimtot datar."
              },
              {
                id: "mat-alj-fungsi-akar",
                slug: "fungsi-irasional-akar",
                title: "Fungsi Irasional (Bentuk Akar)",
                indicators: "Fungsi aljabar dalam tanda akar f(x) = sqrt(g(x)) dan syarat numerus g(x) >= 0."
              },
              {
                id: "mat-alj-fungsi-eksponen",
                slug: "fungsi-eksponensial",
                title: "Fungsi Eksponensial",
                indicators: "Grafik f(x) = a^x, pertumbuhan eksponensial, dan asimtot datar y = 0."
              },
              {
                id: "mat-alj-fungsi-logaritma",
                slug: "fungsi-logaritma",
                title: "Fungsi Logaritma",
                indicators: "Grafik f(x) = log_a(x), asimtot tegak x = 0, dan syarat numerus x > 0."
              },
              {
                id: "mat-alj-fungsi-mutlak",
                slug: "fungsi-nilai-mutlak-piecewise",
                title: "Fungsi Nilai Mutlak & Piecewise",
                indicators: "Grafik fungsi sepotong-sepotong (piecewise) dan fungsi nilai mutlak f(x) = |g(x)|."
              },
              {
                id: "mat-alj-fungsi-trigono",
                slug: "grafik-periode-trigonometri",
                title: "Grafik & Periode Fungsi Trigonometri",
                indicators: "Amplitudo, periode gelombang, dan pergeseran fasa fungsi sinus, kosinus, tangen."
              }
            ]
          }
        ]
      },
      {
        id: "mat-geo",
        title: "Geometri dan Pengukuran",
        order: 2,
        description: "Vektor ruang dan bidang, geometri analitik lingkaran, serta komposisi transformasi koordinat matriks.",
        subChapters: [
          {
            id: "mat-geo-vektor",
            title: "Vektor",
            order: 1,
            subTopics: [
              {
                id: "mat-geo-vektor-komponen",
                slug: "vektor-bidang-ruang",
                title: "Vektor Bidang (R2) dan Ruang (R3)",
                indicators: "Komponen vektor basis i, j, k, vektor posisi titik, dan vektor kolom koordinat."
              },
              {
                id: "mat-geo-vektor-panjang",
                slug: "panjang-modulus-vektor",
                title: "Panjang (Modulus) Vektor",
                indicators: "Besar modulus vektor |u| = sqrt(x^2 + y^2 + z^2) dan vektor satuan."
              },
              {
                id: "mat-geo-vektor-operasi",
                slug: "penjumlahan-pengurangan-vektor",
                title: "Penjumlahan dan Pengurangan Vektor",
                indicators: "Operasi aljabar penjumlahan, pengurangan, dan perkalian skalar vektor."
              },
              {
                id: "mat-geo-vektor-perbandingan",
                slug: "perbandingan-ruas-garis-vektor",
                title: "Perbandingan Ruas Garis Vektor",
                indicators: "Vektor pembagi ruas garis di dalam dan di luar dengan rasio m : n."
              },
              {
                id: "mat-geo-vektor-dot",
                slug: "perkalian-titik-dot-product",
                title: "Perkalian Titik (Dot Product)",
                indicators: "Perkalian skalar dot product, sudut antara dua vektor, dan sifat ortogonalitas."
              }
            ]
          },
          {
            id: "mat-geo-lingkaran",
            title: "Lingkaran",
            order: 2,
            subTopics: [
              {
                id: "mat-geo-lingkaran-persamaan",
                slug: "persamaan-lingkaran",
                title: "Persamaan Lingkaran",
                indicators: "Persamaan lingkaran berpusat (0,0), (a,b), dan bentuk umum x^2 + y^2 + Ax + By + C = 0."
              },
              {
                id: "mat-geo-lingkaran-kedudukan",
                slug: "kedudukan-titik-dan-garis",
                title: "Kedudukan Titik dan Garis",
                indicators: "Posisi titik dan garis terhadap lingkaran (memotong, menyinggung, luar)."
              },
              {
                id: "mat-geo-lingkaran-singgung",
                slug: "garis-singgung-lingkaran",
                title: "Garis Singgung Lingkaran",
                indicators: "Persamaan garis singgung lingkaran di titik singgung dan garis singgung bergradien m."
              },
              {
                id: "mat-geo-lingkaran-luas",
                slug: "keliling-dan-luas-lingkaran",
                title: "Keliling dan Luas Lingkaran",
                indicators: "Perhitungan analitis keliling dan luas lingkaran serta daerah arsiran."
              },
              {
                id: "mat-geo-lingkaran-busur",
                slug: "panjang-busur-juring-tembereng",
                title: "Panjang Busur, Juring, dan Tembereng",
                indicators: "Panjang busur lingkaran (s = r * theta), luas juring, dan luas tembereng lingkaran."
              }
            ]
          },
          {
            id: "mat-geo-trans",
            title: "Transformasi Geometri",
            order: 3,
            subTopics: [
              {
                id: "mat-geo-trans-translasi",
                slug: "translasi",
                title: "Translasi",
                indicators: "Pergeseran titik, garis, dan kurva oleh matriks translasi T = (a, b)."
              },
              {
                id: "mat-geo-trans-refleksi",
                slug: "refleksi",
                title: "Refleksi",
                indicators: "Pencerminan terhadap sumbu koordinat, garis y = x, y = -x, dan garis konstanta."
              },
              {
                id: "mat-geo-trans-rotasi",
                slug: "rotasi",
                title: "Rotasi",
                indicators: "Perputaran sebesar sudut alpha terhadap titik pusat asal (0,0) atau titik sembarang (a,b)."
              },
              {
                id: "mat-geo-trans-dilatasi",
                slug: "dilatasi",
                title: "Dilatasi",
                indicators: "Perbesaran dan pengecilan dengan faktor skala k terhadap titik pusat tertentu."
              },
              {
                id: "mat-geo-trans-matriks",
                slug: "matriks-transformasi",
                title: "Matriks Transformasi",
                indicators: "Representasi matriks 2x2 untuk setiap jenis transformasi geometri tunggal."
              },
              {
                id: "mat-geo-trans-komposisi",
                slug: "komposisi-transformasi",
                title: "Komposisi Transformasi",
                indicators: "Gabungan dua atau lebih transformasi berturutan dengan perkalian matriks transformasi."
              },
              {
                id: "mat-geo-trans-luas",
                slug: "luas-bangun-hasil-transformasi",
                title: "Luas Bangun Hasil Transformasi",
                indicators: "Perubahan luas bangun geometri setelah transformasi (L' = |det(M)| * L)."
              }
            ]
          }
        ]
      },
      {
        id: "mat-lim",
        title: "Kalkulus Limit",
        order: 3,
        description: "Konsep limit fungsi aljabar dan limit trigonometri analitis murni tanpa aturan L'Hopital.",
        subChapters: [
          {
            id: "mat-lim-fungsi",
            title: "Limit Fungsi",
            order: 1,
            subTopics: [
              {
                id: "mat-lim-fungsi-aljabar",
                slug: "limit-fungsi-aljabar",
                title: "Limit Fungsi Aljabar",
                indicators: "Limit fungsi aljabar rasional bentuk 0/0 via pemfaktoran dan perkalian sekawan akar."
              },
              {
                id: "mat-lim-fungsi-piecewise",
                slug: "limit-fungsi-piecewise",
                title: "Limit Fungsi Piecewise",
                indicators: "Kekontinuan dan eksistensi limit fungsi melalui kesamaan limit kiri dan kanan."
              },
              {
                id: "mat-lim-fungsi-takhingga",
                slug: "limit-menuju-tak-hingga",
                title: "Limit Menuju Tak Hingga",
                indicators: "Limit fungsi aljabar rasional dan irasional saat x mendekati tak hingga."
              },
              {
                id: "mat-lim-fungsi-trigono",
                slug: "limit-fungsi-trigonometri",
                title: "Limit Fungsi Trigonometri",
                indicators: "Teorema limit trigonometri dasar dan manipulasi identitas tanpa aturan L'Hopital."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "fundamental",
    name: "Bab Fundamental (Prasyarat)",
    shortName: "FUNDAMENTAL",
    order: 3,
    accentColor: "#059669",
    accentBg: "#ECFDF5",
    icon: "fa-shapes",
    description: "Fondasi aljabar, trigonometri, dan geometri analitik prasyarat mutlak untuk menyelesaikan seluruh materi TKA tingkat lanjut.",
    chapters: [
      {
        id: "fun-trig",
        title: "Trigonometri Dasar",
        order: 1,
        isFoundation: true,
        badge: "FONDASI",
        description: "Fondasi perbandingan trigonometri, sudut istimewa, identitas, dan rumus analitik dasar.",
        subChapters: [
          {
            id: "fun-trig-dasar",
            title: "Trigonometri Analitik Dasar",
            order: 1,
            subTopics: [
              {
                id: "fun-trig-dasar-perbandingan",
                slug: "perbandingan-trigonometri-siku-siku",
                title: "Perbandingan Trigonometri Siku-Siku",
                indicators: "Definisi sinus, kosinus, tangen, sekan, kosekan, kotangen pada segitiga siku-siku."
              },
              {
                id: "fun-trig-dasar-kuadran",
                slug: "sudut-istimewa-relasi-kuadran",
                title: "Sudut Istimewa & Relasi Kuadran",
                indicators: "Nilai sudut istimewa dan tanda perbandingan trigonometri pada empat kuadran."
              },
              {
                id: "fun-trig-dasar-pythagoras",
                slug: "identitas-pythagoras",
                title: "Identitas Pythagoras",
                indicators: "Identitas dasar sin^2(x) + cos^2(x) = 1, 1 + tan^2(x) = sec^2(x), dan 1 + cot^2(x) = csc^2(x)."
              },
              {
                id: "fun-trig-dasar-jumlah",
                slug: "rumus-jumlah-selisih-sudut",
                title: "Rumus Jumlah dan Selisih Sudut",
                indicators: "Rumus analitis sin(A +- B) dan cos(A +- B)."
              },
              {
                id: "fun-trig-dasar-rangkap",
                slug: "rumus-sudut-rangkap",
                title: "Rumus Sudut Rangkap",
                indicators: "Rumus analitis sin(2A), cos(2A), dan tan(2A)."
              }
            ]
          }
        ]
      },
      {
        id: "fun-alj",
        title: "Aljabar Elementer",
        order: 2,
        isFoundation: true,
        badge: "FONDASI",
        description: "Fondasi operasi aljabar, pemfaktoran, pecahan aljabar, dan sistem persamaan linear.",
        subChapters: [
          {
            id: "fun-alj-dasar",
            title: "Aljabar Dasar",
            order: 1,
            subTopics: [
              {
                id: "fun-alj-dasar-operasi",
                slug: "operasi-aljabar-pemfaktoran",
                title: "Operasi Aljabar & Pemfaktoran",
                indicators: "Operasi distributif aljabar, pemfaktoran selisih kuadrat, dan bentuk kuadrat sempurna."
              },
              {
                id: "fun-alj-dasar-pecahan",
                slug: "pecahan-bentuk-aljabar",
                title: "Pecahan Bentuk Aljabar",
                indicators: "Penyederhanaan, penjumlahan, pengurangan, dan perkalian pecahan bentuk aljabar."
              },
              {
                id: "fun-alj-dasar-spldv",
                slug: "spldv-dan-spltv",
                title: "SPLDV dan SPLTV",
                indicators: "Metode penyelesaian sistem persamaan linear dua dan tiga variabel."
              }
            ]
          }
        ]
      },
      {
        id: "fun-geo",
        title: "Geometri Analitik Bidang",
        order: 3,
        isFoundation: true,
        badge: "FONDASI",
        description: "Fondasi koordinat Kartesius, jarak titik, persamaan garis lurus, dan hubungan gradien.",
        subChapters: [
          {
            id: "fun-geo-dasar",
            title: "Garis dan Koordinat",
            order: 1,
            subTopics: [
              {
                id: "fun-geo-dasar-koordinat",
                slug: "koordinat-jarak-dua-titik",
                title: "Koordinat & Jarak Dua Titik",
                indicators: "Jarak antara dua titik pada bidang Kartesius dan penentuan titik tengah."
              },
              {
                id: "fun-geo-dasar-garis",
                slug: "persamaan-garis-lurus",
                title: "Persamaan Garis Lurus",
                indicators: "Persamaan garis lurus bentuk eksplisit y = mx + c dan implisit Ax + By + C = 0."
              },
              {
                id: "fun-geo-dasar-gradien",
                slug: "gradien-garis-sejajar-tegak-lurus",
                title: "Gradien Garis Sejajar & Tegak Lurus",
                indicators: "Gradien kemiringan garis lurus, syarat garis sejajar (m1 = m2) dan tegak lurus (m1 * m2 = -1)."
              },
              {
                id: "fun-geo-dasar-jarak",
                slug: "jarak-titik-ke-garis",
                title: "Jarak Titik ke Garis",
                indicators: "Jarak tegak lurus dari titik ke garis lurus pada bidang Kartesius."
              }
            ]
          }
        ]
      },
      {
        id: "fun-mutlak",
        title: "Pertidaksamaan & Nilai Mutlak",
        order: 4,
        isFoundation: true,
        badge: "FONDASI",
        description: "Fondasi syarat definisi fungsi pecahan, akar kuadrat, dan persamaan/pertidaksamaan nilai mutlak.",
        subChapters: [
          {
            id: "fun-mutlak-dasar",
            title: "Syarat Fungsi & Nilai Mutlak",
            order: 1,
            subTopics: [
              {
                id: "fun-mutlak-dasar-rasional",
                slug: "syarat-fungsi-rasional",
                title: "Syarat Fungsi Rasional",
                indicators: "Syarat terdefinisi fungsi rasional pecahan (penyebut tidak sama dengan nol)."
              },
              {
                id: "fun-mutlak-dasar-akar",
                slug: "syarat-fungsi-bentuk-akar",
                title: "Syarat Fungsi Bentuk Akar",
                indicators: "Syarat terdefinisi fungsi irasional bentuk akar (bilangan dalam akar >= 0)."
              },
              {
                id: "fun-mutlak-dasar-persamaan",
                slug: "persamaan-nilai-mutlak",
                title: "Persamaan Nilai Mutlak",
                indicators: "Konsep dasar nilai mutlak sebagai jarak dan penyelesaian persamaan nilai mutlak linear."
              },
              {
                id: "fun-mutlak-dasar-pertidaksamaan",
                slug: "pertidaksamaan-nilai-mutlak",
                title: "Pertidaksamaan Nilai Mutlak",
                indicators: "Sifat penyelesaian pertidaksamaan nilai mutlak (|f(x)| < a dan |f(x)| > a)."
              }
            ]
          }
        ]
      },
      {
        id: "fun-eks",
        title: "Eksponen dan Logaritma",
        order: 5,
        isFoundation: true,
        badge: "FONDASI",
        description: "Fondasi sifat perpangkatan eksponen, penyederhanaan bentuk akar, dan operasi dasar logaritma.",
        subChapters: [
          {
            id: "fun-eks-dasar",
            title: "Sifat Eksponen & Logaritma",
            order: 1,
            subTopics: [
              {
                id: "fun-eks-dasar-eksponen",
                slug: "sifat-eksponen",
                title: "Sifat Eksponen",
                indicators: "Sifat-sifat perkalian, pembagian, perpangkatan, dan pangkat negatif bilangan berpangkat."
              },
              {
                id: "fun-eks-dasar-akar",
                slug: "bentuk-akar-rasionalisasi",
                title: "Bentuk Akar & Rasionalisasi",
                indicators: "Operasi aljabar bentuk akar dan rasionalisasi penyebut pecahan bentuk akar kuadrat."
              },
              {
                id: "fun-eks-dasar-logaritma",
                slug: "sifat-operasi-logaritma",
                title: "Sifat Operasi Logaritma",
                indicators: "Sifat dasar logaritma: log(ab) = log a + log b, log(a/b) = log a - log b, log(a^n) = n log a."
              },
              {
                id: "fun-eks-dasar-basis",
                slug: "perubahan-basis-logaritma",
                title: "Perubahan Basis Logaritma",
                indicators: "Rumus pengubahan basis logaritma dan sifat perkalian rantai basis logaritma."
              }
            ]
          }
        ]
      }
    ]
  }
];

// Enrich each chapter with backward compatibility getters and properties
rawPillars.forEach(p => {
  p.chapters.forEach(ch => {
    ch.pillarId = p.id;
    // Map each subChapter
    (ch.subChapters || []).forEach(sc => {
      sc.pillarId = p.id;
      sc.chapterId = ch.id;
      (sc.subTopics || []).forEach(sub => {
        sub.pillarId = p.id;
        sub.chapterId = ch.id;
        sub.subChapterId = sc.id;
        sub.chapterTitle = ch.title;
        sub.subChapterTitle = sc.title;
      });
    });

    // Backward-compatibility: automatic flat subTopics getter
    Object.defineProperty(ch, 'subTopics', {
      get() {
        const flat = [];
        if (Array.isArray(this.subChapters)) {
          this.subChapters.forEach(sc => {
            if (Array.isArray(sc.subTopics)) {
              flat.push(...sc.subTopics);
            }
          });
        }
        return flat;
      },
      enumerable: true,
      configurable: true
    });
  });
});

window.SYLLABUS_DATA = {
  pillars: rawPillars
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.SYLLABUS_DATA;
}
