// Interactive Learning & Drilling Engine for Matematika Wajib SMA

let currentSubId = "1.1";
let activeTab = "materi";
let userAnswers = {}; // { questionId: answer }
let submittedQuestions = {}; // { questionId: { isCorrect: boolean, feedback: string } }
let filterSub = "ALL";

// Helper for KaTeX math rendering
function renderKaTeX(element) {
  if (window.renderMathInElement && element) {
    window.renderMathInElement(element, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }
}

// Format markdown text to HTML
function renderMarkdown(mdText) {
  if (!mdText) return "";
  if (window.marked) {
    return marked.parse(mdText);
  }
  return mdText.replace(/\n/g, "<br>");
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupSidebarNavigation();
  setupFilterDropdown();
  loadSubChapter(currentSubId);
  renderAuditTable();
  updateScoreBoard();

  // Mobile sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarClose = document.getElementById("sidebarClose");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");

  if (sidebarToggle && sidebar && sidebarBackdrop) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
      sidebarBackdrop.classList.remove("hidden");
    });
    sidebarClose.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      sidebarBackdrop.classList.add("hidden");
    });
    sidebarBackdrop.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      sidebarBackdrop.classList.add("hidden");
    });
  }
});

// Setup sidebar modules and sub-chapters
function setupSidebarNavigation() {
  const container = document.getElementById("moduleNavList");
  if (!container || !window.APP_DATA || !window.APP_DATA.matrix) return;

  const matrix = window.APP_DATA.matrix;
  let html = "";

  matrix.modules.forEach((mod) => {
    html += `
      <div class="space-y-1">
        <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2 py-1 flex items-center justify-between">
          <span>${mod.module_name}</span>
          <span class="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.5 rounded font-mono">${mod.module_id}</span>
        </div>
        <div class="space-y-0.5">
    `;

    mod.sub_chapters.forEach((sc) => {
      const isSelected = sc.sub_chapter_id === currentSubId;
      const qCount = getQuestionCountForSub(sc.sub_chapter_id);

      html += `
        <button onclick="selectSubChapter('${sc.sub_chapter_id}')" 
          id="navBtn_${sc.sub_chapter_id.replace('.', '_')}"
          class="w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all nav-item ${
            isSelected
              ? "bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }">
          <div class="flex items-center space-x-2 truncate">
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
              isSelected ? "bg-brand-600 text-white" : "bg-slate-200/70 text-slate-600"
            }">${sc.sub_chapter_id}</span>
            <span class="truncate">${sc.title}</span>
          </div>
          <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
            qCount > 0 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-400"
          }">${qCount}</span>
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Get question count for a sub-chapter
function getQuestionCountForSub(subId) {
  if (!window.APP_DATA || !window.APP_DATA.questions) return 0;
  return window.APP_DATA.questions.filter((q) => q.sub_chapter_id === subId).length;
}

// Select a sub-chapter
function selectSubChapter(subId) {
  currentSubId = subId;
  setupSidebarNavigation();
  loadSubChapter(subId);

  // Close mobile sidebar if open
  const sidebar = document.getElementById("sidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  if (sidebar && !sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("hidden");
  }

  // If in drilling view, filter to this sub
  if (activeTab === "drilling") {
    filterQuestionsBySub(subId);
    const select = document.getElementById("filterSubChapterSelect");
    if (select) select.value = subId;
  }
}

// Load Sub-chapter content into Tab 1
function loadSubChapter(subId) {
  if (!window.APP_DATA || !window.APP_DATA.subchapters) return;

  const data = window.APP_DATA.subchapters[subId];
  if (!data) return;

  // Header
  document.getElementById("materiModuleBadge").innerText = data.module_id;
  document.getElementById("materiSubIdBadge").innerText = `Sub-bab ${data.sub_chapter_id}`;
  document.getElementById("materiTitle").innerText = data.title;

  // 5 Sections
  const secTeori = document.getElementById("secTeori");
  const secRumus = document.getElementById("secRumus");
  const secBatasan = document.getElementById("secBatasan");
  const secContoh = document.getElementById("secContoh");
  const secTrik = document.getElementById("secTrik");

  secTeori.innerHTML = renderMarkdown(data.teori_definisi);
  secRumus.innerHTML = renderMarkdown(data.rumus_katex);
  secBatasan.innerHTML = renderMarkdown(data.karakteristik_batasan);
  secContoh.innerHTML = renderMarkdown(data.contoh_kontekstual);
  secTrik.innerHTML = renderMarkdown(data.trik_cepat);

  // Render Math KaTeX
  [secTeori, secRumus, secBatasan, secContoh, secTrik].forEach((el) => renderKaTeX(el));
}

// Toggle Section Accordion
function toggleSection(secId) {
  const el = document.getElementById(secId);
  const icon = document.getElementById("icon" + secId.charAt(0).toUpperCase() + secId.slice(1));
  if (!el) return;

  if (el.classList.contains("hidden")) {
    el.classList.remove("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-up text-xs text-slate-400";
  } else {
    el.classList.add("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-down text-xs text-slate-400";
  }
}

// Tab Switching
function switchTab(tabName) {
  activeTab = tabName;

  const viewMateri = document.getElementById("viewMateri");
  const viewDrilling = document.getElementById("viewDrilling");
  const viewAudit = document.getElementById("viewAudit");

  const tabMateri = document.getElementById("tabMateri");
  const tabDrilling = document.getElementById("tabDrilling");
  const tabAudit = document.getElementById("tabAudit");

  // Mobile tabs
  const mTabMateri = document.getElementById("mobileTabMateri");
  const mTabDrilling = document.getElementById("mobileTabDrilling");
  const mTabAudit = document.getElementById("mobileTabAudit");

  [viewMateri, viewDrilling, viewAudit].forEach((v) => v.classList.add("hidden"));
  [tabMateri, tabDrilling, tabAudit].forEach((t) => {
    t.className = "px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 text-slate-600 hover:text-slate-900";
  });
  if (mTabMateri && mTabDrilling && mTabAudit) {
    [mTabMateri, mTabDrilling, mTabAudit].forEach((t) => {
      t.className = "py-1 px-3 text-slate-600";
    });
  }

  if (tabName === "materi") {
    viewMateri.classList.remove("hidden");
    tabMateri.className = "px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 bg-white text-brand-700 shadow-xs";
    if (mTabMateri) mTabMateri.className = "py-1 px-3 text-brand-700 border-b-2 border-brand-600 font-bold";
  } else if (tabName === "drilling") {
    viewDrilling.classList.remove("hidden");
    tabDrilling.className = "px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 bg-white text-brand-700 shadow-xs";
    if (mTabDrilling) mTabDrilling.className = "py-1 px-3 text-brand-700 border-b-2 border-brand-600 font-bold";
    renderQuestionsList();
  } else if (tabName === "audit") {
    viewAudit.classList.remove("hidden");
    tabAudit.className = "px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 bg-white text-brand-700 shadow-xs";
    if (mTabAudit) mTabAudit.className = "py-1 px-3 text-brand-700 border-b-2 border-brand-600 font-bold";
  }
}

// Quick jump to drilling of current sub-chapter
function jumpToDrillingCurrentSub() {
  switchTab("drilling");
  const select = document.getElementById("filterSubChapterSelect");
  if (select) select.value = currentSubId;
  filterQuestionsBySub(currentSubId);
}

// Setup Sub-chapter filter in Drilling tab
function setupFilterDropdown() {
  const select = document.getElementById("filterSubChapterSelect");
  if (!select || !window.APP_DATA || !window.APP_DATA.matrix) return;

  let options = `<option value="ALL">Semua 46 Soal Lengkap</option>`;
  window.APP_DATA.matrix.modules.forEach((mod) => {
    options += `<optgroup label="${mod.module_id} - ${mod.module_name}">`;
    mod.sub_chapters.forEach((sc) => {
      const qCount = getQuestionCountForSub(sc.sub_chapter_id);
      options += `<option value="${sc.sub_chapter_id}">Sub-bab ${sc.sub_chapter_id}: ${sc.title} (${qCount} soal)</option>`;
    });
    options += `</optgroup>`;
  });
  select.innerHTML = options;
}

// Filter questions by sub-chapter
function filterQuestionsBySub(subId) {
  filterSub = subId;
  renderQuestionsList();
}

// Render Drilling Questions List
function renderQuestionsList() {
  const container = document.getElementById("questionsContainer");
  if (!container || !window.APP_DATA || !window.APP_DATA.questions) return;

  let qList = window.APP_DATA.questions;
  if (filterSub !== "ALL") {
    qList = qList.filter((q) => q.sub_chapter_id === filterSub);
  }

  if (qList.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center">
        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
          <i class="fa-solid fa-folder-open text-xl"></i>
        </div>
        <h3 class="font-bold text-slate-800">Tidak ada soal langsung pada filter ini</h3>
        <p class="text-xs text-slate-500 mt-1">Gunakan opsi "Semua 46 Soal Lengkap" untuk menjelajahi seluruh bank soal.</p>
      </div>
    `;
    return;
  }

  let html = "";
  qList.forEach((q) => {
    const isSubmitted = !!submittedQuestions[q.id];
    const submission = submittedQuestions[q.id];

    html += `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs question-card" id="qcard_${q.id}">
        <!-- Question Card Header -->
        <div class="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            <span class="w-7 h-7 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
              #${q.id}
            </span>
            <span class="text-xs font-bold text-slate-700">${q.topic}</span>
            <span class="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-mono font-semibold">Sub ${q.sub_chapter_id}</span>
          </div>

          <div class="flex items-center space-x-2">
            <span class="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
              ${q.type === "PG" ? "Pilihan Ganda" : q.type === "PGK_MCMA" ? "Pilihan Ganda Kompleks" : "Kategori Benar/Salah"}
            </span>
            ${
              isSubmitted
                ? submission.isCorrect
                  ? `<span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300"><i class="fa-solid fa-check mr-1"></i> Benar</span>`
                  : `<span class="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300"><i class="fa-solid fa-xmark mr-1"></i> Salah</span>`
                : ""
            }
          </div>
        </div>

        <!-- Question Body -->
        <div class="p-6 space-y-4">
          <!-- Question Stem -->
          <div class="text-sm font-medium text-slate-800 leading-relaxed q-stem">
            ${renderMarkdown(q.question_stem)}
          </div>

          <!-- Question Image Diagram (if available) -->
          ${
            q.image
              ? `
              <div class="my-4 text-center">
                <img src="${q.image}" alt="Diagram Soal ${q.id}" class="max-h-72 mx-auto rounded-lg border border-slate-200 shadow-xs bg-white p-1">
              </div>
            `
              : ""
          }

          <!-- Options or Statement Form -->
          <div class="pt-2">
            ${renderQuestionOptions(q)}
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button onclick="checkQuestionAnswer(${q.id})" class="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all">
              <i class="fa-solid fa-circle-check mr-1.5"></i> Periksa Jawaban
            </button>

            ${
              isSubmitted
                ? `
              <button onclick="toggleExplanation(${q.id})" class="text-xs font-bold text-brand-600 hover:text-brand-800 flex items-center">
                <span>Pembahasan Langkah Demi Langkah</span>
                <i id="iconExp_${q.id}" class="fa-solid fa-chevron-down ml-1.5 text-[10px]"></i>
              </button>
            `
                : ""
            }
          </div>

          <!-- Detailed Explanation Box -->
          <div id="explanation_${q.id}" class="${isSubmitted ? "" : "hidden"} mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 markdown-body">
            <div class="font-extrabold text-slate-800 mb-2 flex items-center text-sm">
              <i class="fa-solid fa-lightbulb text-amber-500 mr-2"></i> Pembahasan Analitis KaTeX (Kunci: ${formatKeyDisplay(q.correct_answer)})
            </div>
            ${renderMarkdown(q.explanation)}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  // Trigger KaTeX on all rendered question elements
  container.querySelectorAll(".q-stem, .q-option, .markdown-body").forEach((el) => renderKaTeX(el));
}

// Render Options based on type
function renderQuestionOptions(q) {
  const currentAns = userAnswers[q.id];

  if (q.type === "PG") {
    let out = `<div class="space-y-2.5">`;
    q.options.forEach((opt) => {
      const isSelected = currentAns === opt.label;
      out += `
        <label class="flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
          isSelected
            ? "border-brand-500 bg-brand-50/60 text-brand-950 font-semibold"
            : "border-slate-200 hover:bg-slate-50 text-slate-700"
        }">
          <input type="radio" name="opt_q_${q.id}" value="${opt.label}" ${isSelected ? "checked" : ""} 
            onchange="selectRadioAnswer(${q.id}, '${opt.label}')" class="mt-0.5 text-brand-600 focus:ring-brand-500">
          <span class="ml-3 text-xs sm:text-sm flex-1 q-option">
            <strong class="text-slate-900 mr-1.5">${opt.label}.</strong> ${opt.text}
          </span>
        </label>
      `;
    });
    out += `</div>`;
    return out;
  } else if (q.type === "PGK_MCMA") {
    let out = `<div class="space-y-2.5">`;
    const ansArray = Array.isArray(currentAns) ? currentAns : [];
    q.options.forEach((opt) => {
      const isSelected = ansArray.includes(opt.label) || ansArray.includes(opt.text);
      out += `
        <label class="flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
          isSelected
            ? "border-brand-500 bg-brand-50/60 text-brand-950 font-semibold"
            : "border-slate-200 hover:bg-slate-50 text-slate-700"
        }">
          <input type="checkbox" value="${opt.label}" ${isSelected ? "checked" : ""} 
            onchange="toggleCheckboxAnswer(${q.id}, '${opt.label}')" class="mt-0.5 text-brand-600 rounded focus:ring-brand-500">
          <span class="ml-3 text-xs sm:text-sm flex-1 q-option">
            <strong class="text-slate-900 mr-1.5">${opt.label}:</strong> ${opt.text}
          </span>
        </label>
      `;
    });
    out += `</div>`;
    return out;
  } else if (q.type === "PGK_Kategori") {
    let out = `
      <div class="overflow-x-auto rounded-xl border border-slate-200">
        <table class="min-w-full text-xs sm:text-sm">
          <thead class="bg-slate-100 text-slate-700">
            <tr>
              <th class="px-4 py-2.5 text-left font-bold">Pernyataan</th>
              <th class="px-4 py-2.5 text-center font-bold w-24">Benar</th>
              <th class="px-4 py-2.5 text-center font-bold w-24">Salah</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
    `;
    const catAns = (typeof currentAns === "object" && currentAns !== null) ? currentAns : {};
    q.options.forEach((opt) => {
      const choice = catAns[opt.label];
      out += `
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 text-slate-800 q-option">
            <strong class="mr-1">${opt.label}.</strong> ${opt.text}
          </td>
          <td class="px-4 py-3 text-center">
            <input type="radio" name="cat_${q.id}_${opt.label}" value="Benar" ${choice === "Benar" ? "checked" : ""}
              onchange="setCategoryAnswer(${q.id}, '${opt.label}', 'Benar')" class="text-emerald-600 focus:ring-emerald-500">
          </td>
          <td class="px-4 py-3 text-center">
            <input type="radio" name="cat_${q.id}_${opt.label}" value="Salah" ${choice === "Salah" ? "checked" : ""}
              onchange="setCategoryAnswer(${q.id}, '${opt.label}', 'Salah')" class="text-rose-600 focus:ring-rose-500">
          </td>
        </tr>
      `;
    });
    out += `
          </tbody>
        </table>
      </div>
    `;
    return out;
  }
}

// User answer inputs
function selectRadioAnswer(qId, val) {
  userAnswers[qId] = val;
}

function toggleCheckboxAnswer(qId, val) {
  if (!Array.isArray(userAnswers[qId])) {
    userAnswers[qId] = [];
  }
  const idx = userAnswers[qId].indexOf(val);
  if (idx > -1) {
    userAnswers[qId].splice(idx, 1);
  } else {
    userAnswers[qId].push(val);
  }
}

function setCategoryAnswer(qId, label, val) {
  if (typeof userAnswers[qId] !== "object" || userAnswers[qId] === null) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][label] = val;
}

// Check Answer Logic
function checkQuestionAnswer(qId) {
  const q = window.APP_DATA.questions.find((item) => item.id === qId);
  if (!q) return;

  const ans = userAnswers[qId];
  let isCorrect = false;

  if (q.type === "PG") {
    // Single choice
    if (ans && (ans.trim().toUpperCase() === q.correct_answer.trim().toUpperCase() || q.correct_answer.includes(ans))) {
      isCorrect = true;
    }
  } else if (q.type === "PGK_MCMA") {
    // Multi select
    const selected = Array.isArray(ans) ? ans : [];
    const correctArr = Array.isArray(q.correct_answer)
      ? q.correct_answer
      : q.correct_answer.split(";").map((s) => s.trim());
    
    // Check if lengths match and all selected are inside correctArr
    if (selected.length > 0 && selected.length === correctArr.length) {
      isCorrect = selected.every((s) => correctArr.some((c) => c.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(c.toLowerCase())));
    }
  } else if (q.type === "PGK_Kategori") {
    // Category Benar/Salah
    const selected = (typeof ans === "object" && ans !== null) ? ans : {};
    if (typeof q.correct_answer === "object") {
      const keys = Object.keys(q.correct_answer);
      isCorrect = keys.every((k) => selected[k] === q.correct_answer[k]);
    } else if (typeof q.correct_answer === "string") {
      // e.g. "Salah-Benar-Benar"
      const parts = q.correct_answer.split("-");
      isCorrect = (selected["A"] === parts[0] && selected["B"] === parts[1] && selected["C"] === parts[2]);
    }
  }

  submittedQuestions[qId] = { isCorrect };
  updateScoreBoard();
  renderQuestionsList();

  // Scroll smoothly to question
  const card = document.getElementById(`qcard_${qId}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// Toggle explanation visibility
function toggleExplanation(qId) {
  const exp = document.getElementById(`explanation_${qId}`);
  const icon = document.getElementById(`iconExp_${qId}`);
  if (!exp) return;

  if (exp.classList.contains("hidden")) {
    exp.classList.remove("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-up ml-1.5 text-[10px]";
  } else {
    exp.classList.add("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-down ml-1.5 text-[10px]";
  }
}

// Format display of correct answer key
function formatKeyDisplay(key) {
  if (typeof key === "object" && !Array.isArray(key)) {
    return Object.entries(key).map(([k, v]) => `${k}: ${v}`).join(", ");
  }
  if (Array.isArray(key)) {
    return key.join(", ");
  }
  return key;
}

// Reset all drilling answers
function resetAllDrillingAnswers() {
  userAnswers = {};
  submittedQuestions = {};
  updateScoreBoard();
  renderQuestionsList();
}

// Update Score Badge
function updateScoreBoard() {
  const scoreText = document.getElementById("scoreText");
  if (!scoreText) return;

  const totalSubmitted = Object.keys(submittedQuestions).length;
  const correctCount = Object.values(submittedQuestions).filter((s) => s.isCorrect).length;

  scoreText.innerText = `Skor: ${correctCount} / ${totalSubmitted} (${totalSubmitted > 0 ? Math.round((correctCount / totalSubmitted) * 100) : 0}%)`;
}

// Live Search Filter
function handleSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) {
    setupSidebarNavigation();
    return;
  }

  const container = document.getElementById("moduleNavList");
  if (!container || !window.APP_DATA || !window.APP_DATA.matrix) return;

  let html = `<div class="space-y-1">`;
  window.APP_DATA.matrix.modules.forEach((mod) => {
    mod.sub_chapters.forEach((sc) => {
      const matchTitle = sc.title.toLowerCase().includes(query);
      const matchComp = sc.competencies.some((c) => c.toLowerCase().includes(query));
      if (matchTitle || matchComp) {
        html += `
          <button onclick="selectSubChapter('${sc.sub_chapter_id}')" 
            class="w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between hover:bg-slate-100 text-slate-700">
            <span class="truncate"><strong class="font-mono text-brand-600">${sc.sub_chapter_id}</strong> ${sc.title}</span>
          </button>
        `;
      }
    });
  });
  html += `</div>`;
  container.innerHTML = html;
}

// Render Audit Matrix Table in Tab 3
function renderAuditTable() {
  const tbody = document.getElementById("auditTableBody");
  if (!tbody || !window.APP_DATA || !window.APP_DATA.matrix) return;

  let html = "";
  window.APP_DATA.matrix.modules.forEach((mod) => {
    mod.sub_chapters.forEach((sc) => {
      const qIds = window.APP_DATA.questions
        .filter((q) => q.sub_chapter_id === sc.sub_chapter_id)
        .map((q) => `#${q.id}`);

      html += `
        <tr class="hover:bg-slate-50/80">
          <td class="px-4 py-3 font-mono font-bold text-brand-600 whitespace-nowrap">${sc.sub_chapter_id}</td>
          <td class="px-4 py-3">
            <div class="font-bold text-slate-800">${sc.title}</div>
            <div class="text-[11px] text-slate-400 font-medium">${mod.module_name} (${mod.module_id})</div>
          </td>
          <td class="px-4 py-3 space-y-1 text-slate-600">
            <div><strong>Kompetensi:</strong> ${sc.competencies.join("; ")}</div>
            ${sc.constraints && sc.constraints.length ? `<div class="text-amber-700"><strong>Batasan:</strong> ${sc.constraints.join("; ")}</div>` : ""}
          </td>
          <td class="px-4 py-3 text-center whitespace-nowrap">
            ${
              qIds.length > 0
                ? `<div class="flex flex-wrap gap-1 justify-center max-w-[120px]">${qIds
                    .map(
                      (id) =>
                        `<span class="bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded text-[10px] font-bold">${id}</span>`
                    )
                    .join("")}</div>`
                : `<span class="text-slate-400 text-xs italic">-</span>`
            }
          </td>
          <td class="px-4 py-3 text-center whitespace-nowrap">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <i class="fa-solid fa-circle-check mr-1 text-emerald-600"></i> LENGKAP
            </span>
          </td>
        </tr>
      `;
    });
  });

  tbody.innerHTML = html;
}
