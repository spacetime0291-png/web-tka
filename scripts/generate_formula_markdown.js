const fs = require('fs');
const syllabus = require('../data/syllabusData.js');
const formulaBank = require('../data/formula-bank.js');

let md = `# 📚 BUKU RANGKUMAN RUMUS LENGKAP & CONTOH SOAL TKA
> Platform Latihan Akademik & Drilling UTBK / SIMAK / Mandiri (Fisika, Matematika Lanjut, & Fundamental)
> Memuat seluruh rumus dari 28 Bab Kecil silabus resmi, dilengkapi kamus variabel, batas keberlakuan, analisis jebakan, serta 1 contoh soal terpandu berstep-by-step di setiap rumusnya.

---

## 📑 DAFTAR ISI SILABUS (28 BAB KECIL)
`;

let babKecilNumber = 1;
syllabus.pillars.forEach(pillar => {
  md += `\n### 🏛️ Pilar: ${pillar.name}\n`;
  pillar.chapters.forEach(chapter => {
    md += `- **Bab Besar: ${chapter.title}**\n`;
    chapter.subChapters.forEach(sc => {
      const entry = formulaBank[sc.id];
      const count = entry ? entry.formulas.length : 0;
      md += `  ${babKecilNumber++}. [${sc.title} (\`${sc.id}\`)](#${sc.id}) — *${count} Rumus*\n`;
    });
  });
});

md += `\n---\n`;

babKecilNumber = 1;
syllabus.pillars.forEach(pillar => {
  md += `\n# 🏛️ PILAR: ${pillar.name.toUpperCase()}\n`;
  pillar.chapters.forEach(chapter => {
    md += `\n## 📂 BAB BESAR: ${chapter.title.toUpperCase()}\n`;
    chapter.subChapters.forEach(sc => {
      const entry = formulaBank[sc.id];
      if (!entry) return;

      md += `\n<a id="${sc.id}"></a>\n`;
      md += `### 📖 Bab Kecil ${babKecilNumber++}: ${entry.title}\n`;
      md += `> **Kode Silabus:** \`${sc.id}\` $\\quad$ | $\\quad$ **Bab Besar:** ${entry.chapterTitle} $\\quad$ | $\\quad$ **Pilar:** ${entry.pillarTitle}\n`;
      if (entry.summary) {
        md += `> **Ringkasan Inti:** ${entry.summary}\n`;
      }
      if (entry.subTopicsCovered && entry.subTopicsCovered.length > 0) {
        md += `> **Cakupan Subtopik:** ${entry.subTopicsCovered.join(', ')}\n\n`;
      }

      md += `#### 📋 Indeks Rumus di Bab Ini:\n`;
      entry.formulas.forEach((f, idx) => {
        md += `${idx + 1}. **${f.code || `R-${idx+1}`}**: ${f.title}\n`;
      });
      md += `\n`;

      entry.formulas.forEach((f, idx) => {
        md += `---\n\n`;
        md += `#### [${f.code || `R-${idx+1}`}] ${f.title}\n\n`;
        md += `**Formula:**\n`;
        md += `$$\n${f.formulaLatex}\n$$\n\n`;

        if (f.conditions) {
          md += `* 📌 **Syarat & Kondisi Berlaku:** ${f.conditions}\n`;
        }
        if (f.traps) {
          md += `* ⚠️ **Jebakan Ujian TKA:** ${f.traps}\n`;
        }

        if (f.variables && f.variables.length > 0) {
          md += `\n* **Kamus Besaran & Variabel:**\n\n`;
          md += `| Simbol | Keterangan / Satuan |\n`;
          md += `| :--- | :--- |\n`;
          f.variables.forEach(v => {
            md += `| \`${v.symbol}\` | ${v.desc} |\n`;
          });
          md += `\n`;
        }

        if (f.example) {
          md += `* 📝 **Contoh Soal Terpandu:**\n`;
          md += `  > **Soal:** ${f.example.question}\n\n`;
          md += `  **Pembahasan Step-by-Step:**\n`;
          if (Array.isArray(f.example.steps)) {
            f.example.steps.forEach((st, i) => {
              md += `  ${i + 1}. ${st}\n`;
            });
          }
          md += `\n  **Kunci Jawaban:** **${f.example.answer}**\n\n`;
        }
      });

      md += `\n[⬆ Kembali ke Daftar Isi](#daftar-isi-silabus-28-bab-kecil)\n\n---\n`;
    });
  });
});

fs.writeFileSync('RANGKUMAN_RUMUS_LENGKAP_TKA.md', md, 'utf8');
console.log('File RANGKUMAN_RUMUS_LENGKAP_TKA.md berhasil dibuat dengan sukses!');
console.log('Ukuran file:', (fs.statSync('RANGKUMAN_RUMUS_LENGKAP_TKA.md').size / 1024).toFixed(2), 'KB');
