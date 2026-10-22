/**
 * Master Index Aggregator for TKA Modular Bank Soal
 * Provides unified access to all 32 subtopics across 14 chapters in 3 pillars.
 */

const fs = require('fs');
const path = require('path');

const subtopics = {
  "fis-kin-1": require('./fisika/01-kinematika/01-pengukuran.js'),
  "fis-kin-2": require('./fisika/01-kinematika/02-gerak-lurus.js'),
  "fis-kin-3": require('./fisika/01-kinematika/03-gerak-lengkung.js'),
  "fis-din-1": require('./fisika/02-dinamika/01-gaya-dan-gerak.js'),
  "fis-din-2": require('./fisika/02-dinamika/02-momentum-dan-impuls.js'),
  "fis-din-3": require('./fisika/02-dinamika/03-dinamika-rotasi.js'),
  "fis-flu-1": require('./fisika/03-fluida/01-fluida-statis.js'),
  "fis-flu-2": require('./fisika/03-fluida/02-fluida-dinamis.js'),
  "fis-gel-1": require('./fisika/04-gelombang/01-karakteristik-bunyi.js'),
  "fis-gel-2": require('./fisika/04-gelombang/02-dawai-pipa-organa.js'),
  "fis-gel-3": require('./fisika/04-gelombang/03-intensitas-bunyi.js'),
  "fis-gel-4": require('./fisika/04-gelombang/04-efek-doppler.js'),
  "fis-gel-5": require('./fisika/04-gelombang/05-pemantulan-pembiasan.js'),
  "fis-gel-6": require('./fisika/04-gelombang/06-alat-optik.js'),
  "fis-ter-1": require('./fisika/05-kalor-termodinamika/01-kalor-dan-perpindahannya.js'),
  "fis-ter-2": require('./fisika/05-kalor-termodinamika/02-pemanasan-global.js'),
  "fis-ter-3": require('./fisika/05-kalor-termodinamika/03-gas-ideal.js'),
  "fis-ter-4": require('./fisika/05-kalor-termodinamika/04-termodinamika.js'),
  "fis-lis-1": require('./fisika/06-kelistrikan/01-listrik-statis.js'),
  "fis-lis-2": require('./fisika/06-kelistrikan/02-rangkaian-arus-searah.js'),
  "mtk-alj-1": require('./matematika-lanjut/01-aljabar/01-matriks.js'),
  "mtk-alj-2": require('./matematika-lanjut/01-aljabar/02-polinomial.js'),
  "mtk-alj-3": require('./matematika-lanjut/01-aljabar/03-fungsi.js'),
  "mtk-geo-1": require('./matematika-lanjut/02-geometri-pengukuran/01-vektor.js'),
  "mtk-geo-2": require('./matematika-lanjut/02-geometri-pengukuran/02-lingkaran.js'),
  "mtk-geo-3": require('./matematika-lanjut/02-geometri-pengukuran/03-transformasi-geometri.js'),
  "mtk-tri-1": require('./matematika-lanjut/03-trigonometri/01-limit-fungsi.js'),
  "fun-tri-1": require('./fundamental/01-trigonometri-analitik-dasar.js'),
  "fun-alj-1": require('./fundamental/02-aljabar-elementer.js'),
  "fun-geo-1": require('./fundamental/03-geometri-analitik-bidang.js'),
  "fun-mut-1": require('./fundamental/04-pertidaksamaan-dan-nilai-mutlak.js'),
  "fun-eks-1": require('./fundamental/05-eksponen-dan-logaritma.js')
};

// Flattened pools
const allQuestions = [];
const questionsMudah = [];
const questionsSedang = [];
const questionsHots = [];

Object.keys(subtopics).forEach(id => {
  const list = subtopics[id];
  list.forEach(q => {
    allQuestions.push(q);
    if (q.difficulty === 'mudah') questionsMudah.push(q);
    else if (q.difficulty === 'sedang') questionsSedang.push(q);
    else if (q.difficulty === 'hots') questionsHots.push(q);
  });
});

module.exports = {
  subtopics,
  allQuestions,
  questionsMudah,
  questionsSedang,
  questionsHots
};
