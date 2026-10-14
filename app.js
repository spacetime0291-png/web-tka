// Interactive Learning & Drilling Engine for Matematika Wajib SMA

let currentSubId = "1.1";
let activeTab = "materi";
let activeSubDetailTab = "materi";
let catalogFilterMod = "ALL";
let userAnswers = {}; // { questionId: answer }
let submittedQuestions = {}; // { questionId: { isCorrect: boolean, feedback: string } }
let filterSub = "ALL";
let isAuditAllExpanded = true;

// Helper for KaTeX math rendering
function renderKaTeX(element) {
  if (window.renderMathInElement && element) {
    try {
      window.renderMathInElement(element, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX rendering warning:", e);
    }
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

// Get array of all sub-chapter objects in sequence
function getAllSubChaptersList() {
  if (!window.APP_DATA || !window.APP_DATA.matrix) return [];
  const list = [];
  window.APP_DATA.matrix.modules.forEach((mod) => {
    mod.sub_chapters.forEach((sc) => {
      list.push({
        ...sc,
        module_id: mod.module_id,
        module_name: mod.module_name
      });
    });
  });
  return list;
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupSidebarNavigation();
  setupFilterDropdown();
  renderCatalogGrid();
  loadSubChapter(currentSubId);
  renderAuditList();
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
      const displayTitle = sc.short_title || sc.title;

      html += `
        <button onclick="selectSubChapter('${sc.sub_chapter_id}')" 
          id="navBtn_${sc.sub_chapter_id.replace('.', '_')}"
          class="w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all nav-item ${
            isSelected
              ? "bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs font-bold"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }">
          <div class="flex items-center space-x-2 truncate">
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
              isSelected ? "bg-brand-600 text-white" : "bg-slate-200/70 text-slate-600"
            }">${sc.sub_chapter_id}</span>
            <span class="truncate">${displayTitle}</span>
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

// Select a sub-chapter from sidebar or card
function selectSubChapter(subId, initialTab = "materi") {
  currentSubId = subId;
  setupSidebarNavigation();
  showDetailView(subId, initialTab);

  // Close mobile sidebar if open
  const sidebar = document.getElementById("sidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  if (sidebar && !sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("-translate-x-full");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("hidden");
  }
}

// Switch between Main Tabs (Materi, Drilling, Audit)
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
    renderAuditList();
  }
}

// ==========================================
// VIEW 1A: KATALOG LIST MATERI
// ==========================================

function showCatalogView() {
  switchTab("materi");
  const catalogView = document.getElementById("materiCatalogView");
  const detailView = document.getElementById("materiDetailView");
  if (catalogView) catalogView.classList.remove("hidden");
  if (detailView) detailView.classList.add("hidden");
  renderCatalogGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterCatalogByModule(modId) {
  catalogFilterMod = modId;
  const pills = document.querySelectorAll(".catalog-filter-btn");
  pills.forEach((p) => {
    p.className = "catalog-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white border border-slate-200 text-slate-700 hover:bg-slate-100";
  });
  const activePill = document.getElementById(`pill_${modId}`);
  if (activePill) {
    activePill.className = "catalog-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-brand-600 text-white shadow-xs";
  }
  renderCatalogGrid();
}

function renderCatalogGrid() {
  const container = document.getElementById("materiCardGrid");
  if (!container || !window.APP_DATA || !window.APP_DATA.matrix) return;

  const allSub = getAllSubChaptersList();
  const filtered = catalogFilterMod === "ALL" ? allSub : allSub.filter((s) => s.module_id === catalogFilterMod);

  let html = "";
  filtered.forEach((sc) => {
    const qCount = getQuestionCountForSub(sc.sub_chapter_id);
    const subTopics = sc.sub_topics || [];
    const shortTitle = sc.short_title || sc.title;

    // Module color scheme
    let modColor = "bg-blue-50 text-blue-700 border-blue-200";
    if (sc.module_id === "MOD-2") modColor = "bg-purple-50 text-purple-700 border-purple-200";
    if (sc.module_id === "MOD-3") modColor = "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (sc.module_id === "MOD-4") modColor = "bg-amber-50 text-amber-700 border-amber-200";
    if (sc.module_id === "MOD-5") modColor = "bg-rose-50 text-rose-700 border-rose-200";

    html += `
      <div class="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs catalog-card flex flex-col justify-between">
        <div>
          <!-- Header Card -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center space-x-2">
              <span class="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md border ${modColor}">
                ${sc.module_id}
              </span>
              <span class="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                Sub ${sc.sub_chapter_id}
              </span>
            </div>
            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
              qCount > 0 ? "bg-brand-50 text-brand-700 border border-brand-200" : "bg-slate-100 text-slate-400"
            }">
              <i class="fa-solid fa-pen-to-square text-[10px] mr-1"></i> ${qCount} Soal
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-base font-extrabold text-slate-900 tracking-tight leading-snug hover:text-brand-600 transition-colors cursor-pointer" onclick="selectSubChapter('${sc.sub_chapter_id}', 'materi')">
            ${shortTitle}
          </h3>
          <p class="text-xs text-slate-500 mt-1 font-medium">${sc.title}</p>

          <!-- Sub-topics Pills Preview -->
          <div class="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
            ${subTopics
              .slice(0, 3)
              .map(
                (st) =>
                  `<span class="sub-topic-pill truncate max-w-[200px]" title="${st}"><i class="fa-solid fa-circle-small mr-1 text-[8px] text-slate-400"></i>${st}</span>`
              )
              .join("")}
            ${
              subTopics.length > 3
                ? `<span class="sub-topic-pill text-slate-400 font-semibold">+${subTopics.length - 3} lainnya</span>`
                : ""
            }
          </div>
        </div>

        <!-- 4 Quick Choice Action Buttons -->
        <div class="mt-5 pt-3 border-t border-slate-100 grid grid-cols-4 gap-1.5 text-center text-[11px] font-bold">
          <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'materi')" class="py-1.5 px-1 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 transition-all flex flex-col items-center justify-center gap-0.5" title="Materi Lengkap">
            <i class="fa-solid fa-book-open text-xs"></i>
            <span class="truncate">Materi</span>
          </button>
          <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'rangkuman')" class="py-1.5 px-1 rounded-lg bg-slate-100 hover:bg-amber-50 hover:text-amber-800 text-slate-700 transition-all flex flex-col items-center justify-center gap-0.5" title="Rangkuman Materi">
            <i class="fa-solid fa-file-lines text-xs text-amber-600"></i>
            <span class="truncate">Rangkuman</span>
          </button>
          <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'variasi')" class="py-1.5 px-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-800 text-slate-700 transition-all flex flex-col items-center justify-center gap-0.5" title="Contoh Variasi Soal">
            <i class="fa-solid fa-lightbulb text-xs text-indigo-600"></i>
            <span class="truncate">Variasi</span>
          </button>
          <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'latihan')" class="py-1.5 px-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 transition-all flex flex-col items-center justify-center gap-0.5" title="Latihan Soal Sub-bab">
            <i class="fa-solid fa-pen-clip text-xs text-emerald-600"></i>
            <span class="truncate">Latihan</span>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// VIEW 1B: TAMPILAN DETAIL MATERI
// ==========================================

function showDetailView(subId, initialTab = "materi") {
  switchTab("materi");
  const catalogView = document.getElementById("materiCatalogView");
  const detailView = document.getElementById("materiDetailView");
  if (catalogView) catalogView.classList.add("hidden");
  if (detailView) detailView.classList.remove("hidden");

  loadSubChapter(subId);
  switchSubDetailTab(initialTab);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadSubChapter(subId) {
  if (!window.APP_DATA || !window.APP_DATA.subchapters) return;

  const data = window.APP_DATA.subchapters[subId];
  if (!data) return;

  currentSubId = subId;

  // Header Banner
  const shortTitle = data.short_title || data.title;
  document.getElementById("detailModuleBadge").innerText = `${data.module_id} ${data.module_name}`;
  document.getElementById("detailSubIdBadge").innerText = `Sub-bab ${data.sub_chapter_id}`;
  document.getElementById("detailShortTitle").innerText = shortTitle;
  document.getElementById("detailFullTitle").innerText = data.title;
  document.getElementById("bcSubId").innerText = `${data.sub_chapter_id} ${shortTitle}`;

  // Sub-topics Pills
  const topicsContainer = document.getElementById("detailSubTopicsList");
  if (topicsContainer) {
    const topics = data.sub_topics || [];
    topicsContainer.innerHTML = topics
      .map(
        (t) =>
          `<span class="sub-topic-pill"><i class="fa-solid fa-check text-emerald-600 mr-1.5 text-[10px]"></i>${t}</span>`
      )
      .join("");
  }

  // Question count in sub-tab button
  const qCount = getQuestionCountForSub(subId);
  const qCountEl = document.getElementById("detailLatihanCount");
  if (qCountEl) qCountEl.innerText = qCount;

  // 1. Pane Materi Lengkap
  const secTeori = document.getElementById("secTeori");
  const secRumus = document.getElementById("secRumus");
  const secBatasan = document.getElementById("secBatasan");
  const secContoh = document.getElementById("secContoh");
  const secTrik = document.getElementById("secTrik");

  if (secTeori) secTeori.innerHTML = renderMarkdown(data.teori_definisi);
  if (secRumus) secRumus.innerHTML = renderMarkdown(data.rumus_katex);
  if (secBatasan) secBatasan.innerHTML = renderMarkdown(data.karakteristik_batasan);
  if (secContoh) secContoh.innerHTML = renderMarkdown(data.contoh_kontekstual);
  if (secTrik) secTrik.innerHTML = renderMarkdown(data.trik_cepat);

  // 2. Pane Rangkuman
  const rangkumanEl = document.getElementById("detailRangkumanBody");
  if (rangkumanEl) {
    rangkumanEl.innerHTML = renderMarkdown(data.rangkuman || "Rangkuman sedang diperbarui.");
  }

  // 3. Pane Variasi Soal
  renderVariasiSoalList(data.variasi_soal || []);

  // 4. Pane Latihan Soal Sub-bab
  renderSubChapterQuestions(subId);

  // Render KaTeX for all panels
  setTimeout(() => {
    const detailContainer = document.getElementById("materiDetailView");
    if (detailContainer) renderKaTeX(detailContainer);
  }, 50);
}

// Switch between the 4 Sub-Tabs inside Sub-Chapter View
function switchSubDetailTab(tabName) {
  activeSubDetailTab = tabName;

  const btnMateri = document.getElementById("subTabBtn_materi");
  const btnRangkuman = document.getElementById("subTabBtn_rangkuman");
  const btnVariasi = document.getElementById("subTabBtn_variasi");
  const btnLatihan = document.getElementById("subTabBtn_latihan");

  const paneMateri = document.getElementById("subPane_materi");
  const paneRangkuman = document.getElementById("subPane_rangkuman");
  const paneVariasi = document.getElementById("subPane_variasi");
  const paneLatihan = document.getElementById("subPane_latihan");

  const buttons = [btnMateri, btnRangkuman, btnVariasi, btnLatihan];
  const panes = [paneMateri, paneRangkuman, paneVariasi, paneLatihan];

  panes.forEach((p) => p && p.classList.add("hidden"));
  buttons.forEach((b) => {
    if (b) {
      b.className =
        "sub-tab-btn py-2.5 px-3 rounded-lg transition-all duration-150 text-slate-600 hover:text-slate-900 flex items-center justify-center space-x-1.5";
    }
  });

  if (tabName === "materi") {
    paneMateri.classList.remove("hidden");
    btnMateri.className =
      "sub-tab-btn py-2.5 px-3 rounded-lg transition-all duration-150 bg-white text-brand-700 shadow-xs font-extrabold flex items-center justify-center space-x-1.5";
  } else if (tabName === "rangkuman") {
    paneRangkuman.classList.remove("hidden");
    btnRangkuman.className =
      "sub-tab-btn py-2.5 px-3 rounded-lg transition-all duration-150 bg-white text-amber-700 shadow-xs font-extrabold flex items-center justify-center space-x-1.5";
  } else if (tabName === "variasi") {
    paneVariasi.classList.remove("hidden");
    btnVariasi.className =
      "sub-tab-btn py-2.5 px-3 rounded-lg transition-all duration-150 bg-white text-indigo-700 shadow-xs font-extrabold flex items-center justify-center space-x-1.5";
  } else if (tabName === "latihan") {
    paneLatihan.classList.remove("hidden");
    btnLatihan.className =
      "sub-tab-btn py-2.5 px-3 rounded-lg transition-all duration-150 bg-white text-emerald-700 shadow-xs font-extrabold flex items-center justify-center space-x-1.5";
  }

  // Trigger KaTeX on pane switch
  const activePane = document.getElementById(`subPane_${tabName}`);
  if (activePane) renderKaTeX(activePane);
}

// Render Variasi Soal Cards
function renderVariasiSoalList(variasiList) {
  const container = document.getElementById("detailVariasiList");
  if (!container) return;

  if (variasiList.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-slate-500 text-xs">
        Variasi soal untuk sub-bab ini sedang disiapkan.
      </div>
    `;
    return;
  }

  let html = "";
  variasiList.forEach((v, idx) => {
    html += `
      <div class="variasi-card p-5 sm:p-6 space-y-4">
        <!-- Badge & Tipe -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <i class="fa-solid fa-shapes mr-1.5"></i> ${v.tipe}
          </span>
          <span class="text-xs font-semibold text-slate-400">Pola #${idx + 1}</span>
        </div>

        <!-- Soal -->
        <div class="text-sm font-semibold text-slate-800 leading-relaxed q-stem">
          ${renderMarkdown(v.soal)}
        </div>

        <!-- Konsep Kunci -->
        <div class="bg-amber-50/70 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-900 flex items-start space-x-2">
          <i class="fa-solid fa-key mt-0.5 text-amber-600"></i>
          <div>
            <strong>Konsep Kunci:</strong> ${v.konsep_kunci}
          </div>
        </div>

        <!-- Langkah Penyelesaian Terstruktur -->
        <div class="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm text-slate-700 markdown-body">
          <div class="font-bold text-slate-800 mb-2 flex items-center text-xs uppercase tracking-wider text-slate-500">
            <i class="fa-solid fa-list-check mr-1.5 text-brand-600"></i> Langkah Penyelesaian Terstruktur (KaTeX):
          </div>
          ${renderMarkdown(v.solusi)}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  container.querySelectorAll(".q-stem, .markdown-body").forEach((el) => renderKaTeX(el));
}

// Render Questions inside Sub-Chapter View (Tab Latihan Soal)
function renderSubChapterQuestions(subId) {
  const container = document.getElementById("detailSubQuestionsContainer");
  if (!container || !window.APP_DATA || !window.APP_DATA.questions) return;

  const qList = window.APP_DATA.questions.filter((q) => q.sub_chapter_id === subId);

  if (qList.length === 0) {
    container.innerHTML = `
      <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
        <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
          <i class="fa-solid fa-folder-open text-xl"></i>
        </div>
        <h4 class="font-bold text-slate-800 text-sm">Tidak Ada Butir Soal Langsung pada Sub-bab Ini</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          Materi pada sub-bab ini diuji secara integratif pada topik gabungan di bank soal utama.
        </p>
        <button onclick="switchTab('drilling')" class="mt-4 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all">
          Buka Bank 46 Soal Lengkap
        </button>
      </div>
    `;
    return;
  }

  let html = "";
  qList.forEach((q) => {
    const isSubmitted = !!submittedQuestions[q.id];
    const submission = submittedQuestions[q.id];

    html += `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs question-card" id="sub_qcard_${q.id}">
        <!-- Question Card Header -->
        <div class="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            <span class="w-7 h-7 rounded-lg bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
              #${q.id}
            </span>
            <span class="text-xs font-bold text-slate-700">${q.topic}</span>
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
          <div class="text-sm font-medium text-slate-800 leading-relaxed q-stem">
            ${renderMarkdown(q.question_stem)}
          </div>

          ${
            q.image
              ? `
              <div class="my-4 text-center">
                <img src="${q.image}" alt="Diagram Soal ${q.id}" class="max-h-72 mx-auto rounded-lg border border-slate-200 shadow-xs bg-white p-1">
              </div>
            `
              : ""
          }

          <div class="pt-2">
            ${renderQuestionOptions(q)}
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button onclick="checkQuestionAnswer(${q.id}, true)" class="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all">
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
  container.querySelectorAll(".q-stem, .q-option, .markdown-body").forEach((el) => renderKaTeX(el));
}

// Reset Sub-chapter answers
function resetSubDrillingAnswers() {
  const qList = window.APP_DATA.questions.filter((q) => q.sub_chapter_id === currentSubId);
  qList.forEach((q) => {
    delete userAnswers[q.id];
    delete submittedQuestions[q.id];
  });
  updateScoreBoard();
  renderSubChapterQuestions(currentSubId);
}

// Navigate Next / Previous Sub-chapter
function navigateSubChapter(direction) {
  const allSub = getAllSubChaptersList();
  const currentIndex = allSub.findIndex((s) => s.sub_chapter_id === currentSubId);
  if (currentIndex === -1) return;

  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < allSub.length) {
    selectSubChapter(allSub[newIndex].sub_chapter_id, activeSubDetailTab);
  }
}

// Toggle Section Accordion in Tab 1
function toggleSection(secId) {
  const el = document.getElementById(secId);
  const icon = document.getElementById("icon" + secId.charAt(0).toUpperCase() + secId.slice(1));
  if (!el) return;

  if (el.classList.contains("hidden")) {
    el.classList.remove("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-up text-xs text-slate-400";
    renderKaTeX(el);
  } else {
    el.classList.add("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-down text-xs text-slate-400";
  }
}

// ==========================================
// VIEW 2: DRILLING SEMUA 46 SOAL
// ==========================================

function setupFilterDropdown() {
  const select = document.getElementById("filterSubChapterSelect");
  if (!select || !window.APP_DATA || !window.APP_DATA.matrix) return;

  let options = `<option value="ALL">Semua 46 Soal Lengkap</option>`;
  window.APP_DATA.matrix.modules.forEach((mod) => {
    options += `<optgroup label="${mod.module_id} - ${mod.module_name}">`;
    mod.sub_chapters.forEach((sc) => {
      const qCount = getQuestionCountForSub(sc.sub_chapter_id);
      const title = sc.short_title || sc.title;
      options += `<option value="${sc.sub_chapter_id}">Sub ${sc.sub_chapter_id}: ${title} (${qCount} soal)</option>`;
    });
    options += `</optgroup>`;
  });
  select.innerHTML = options;
}

function filterQuestionsBySub(subId) {
  filterSub = subId;
  renderQuestionsList();
}

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
            <span class="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-mono font-semibold cursor-pointer hover:bg-brand-100 hover:text-brand-800" onclick="selectSubChapter('${q.sub_chapter_id}', 'materi')">Sub ${q.sub_chapter_id}</span>
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
          <div class="text-sm font-medium text-slate-800 leading-relaxed q-stem">
            ${renderMarkdown(q.question_stem)}
          </div>

          ${
            q.image
              ? `
              <div class="my-4 text-center">
                <img src="${q.image}" alt="Diagram Soal ${q.id}" class="max-h-72 mx-auto rounded-lg border border-slate-200 shadow-xs bg-white p-1">
              </div>
            `
              : ""
          }

          <div class="pt-2">
            ${renderQuestionOptions(q)}
          </div>

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
  container.querySelectorAll(".q-stem, .q-option, .markdown-body").forEach((el) => renderKaTeX(el));
}

// Render Question Options based on type
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
      const isChecked = ansArray.includes(opt.label);
      out += `
        <label class="flex items-start p-3 rounded-xl border cursor-pointer transition-all ${
          isChecked
            ? "border-brand-500 bg-brand-50/60 text-brand-950 font-semibold"
            : "border-slate-200 hover:bg-slate-50 text-slate-700"
        }">
          <input type="checkbox" name="opt_mcma_q_${q.id}" value="${opt.label}" ${isChecked ? "checked" : ""} 
            onchange="toggleCheckboxAnswer(${q.id}, '${opt.label}')" class="mt-0.5 text-brand-600 rounded focus:ring-brand-500">
          <span class="ml-3 text-xs sm:text-sm flex-1 q-option">
            <strong class="text-slate-900 mr-1.5">${opt.label}.</strong> ${opt.text}
          </span>
        </label>
      `;
    });
    out += `</div>`;
    return out;
  } else if (q.type === "PGK_KATEGORI") {
    const ansObj = typeof currentAns === "object" && currentAns !== null ? currentAns : {};
    let out = `
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead class="bg-slate-100">
            <tr>
              <th class="px-4 py-2.5 text-left font-bold text-slate-700">Pernyataan</th>
              <th class="px-3 py-2.5 text-center font-bold text-slate-700 w-24">Benar</th>
              <th class="px-3 py-2.5 text-center font-bold text-slate-700 w-24">Salah</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
    `;

    q.statements.forEach((stmt, idx) => {
      const chosen = ansObj[idx];
      out += `
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 text-slate-800 q-option">${stmt.text}</td>
          <td class="px-3 py-3 text-center">
            <input type="radio" name="stmt_${q.id}_${idx}" value="Benar" ${chosen === "Benar" ? "checked" : ""}
              onchange="selectCategoryAnswer(${q.id}, ${idx}, 'Benar')" class="text-emerald-600 focus:ring-emerald-500">
          </td>
          <td class="px-3 py-3 text-center">
            <input type="radio" name="stmt_${q.id}_${idx}" value="Salah" ${chosen === "Salah" ? "checked" : ""}
              onchange="selectCategoryAnswer(${q.id}, ${idx}, 'Salah')" class="text-rose-600 focus:ring-rose-500">
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
  return "";
}

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

function selectCategoryAnswer(qId, stmtIdx, val) {
  if (typeof userAnswers[qId] !== "object" || userAnswers[qId] === null) {
    userAnswers[qId] = {};
  }
  userAnswers[qId][stmtIdx] = val;
}

function checkQuestionAnswer(qId, isFromSubPane = false) {
  const q = window.APP_DATA.questions.find((item) => item.id === qId);
  if (!q) return;

  const userAns = userAnswers[qId];
  if (userAns === undefined) {
    alert("Silakan pilih jawaban Anda terlebih dahulu sebelum memeriksa!");
    return;
  }

  let isCorrect = false;

  if (q.type === "PG") {
    isCorrect = userAns === q.correct_answer;
  } else if (q.type === "PGK_MCMA") {
    const sortedUser = Array.isArray(userAns) ? [...userAns].sort().join(",") : "";
    const sortedKey = Array.isArray(q.correct_answer) ? [...q.correct_answer].sort().join(",") : q.correct_answer;
    isCorrect = sortedUser === sortedKey;
  } else if (q.type === "PGK_KATEGORI") {
    const keys = Object.keys(q.correct_answer);
    isCorrect = keys.every((k) => userAns && userAns[k] === q.correct_answer[k]);
  }

  submittedQuestions[qId] = { isCorrect };
  updateScoreBoard();

  if (isFromSubPane) {
    renderSubChapterQuestions(currentSubId);
    const card = document.getElementById(`sub_qcard_${qId}`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    renderQuestionsList();
    const card = document.getElementById(`qcard_${qId}`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function toggleExplanation(qId) {
  const exp = document.getElementById(`explanation_${qId}`);
  const icon = document.getElementById(`iconExp_${qId}`);
  if (!exp) return;

  if (exp.classList.contains("hidden")) {
    exp.classList.remove("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-up ml-1.5 text-[10px]";
    renderKaTeX(exp);
  } else {
    exp.classList.add("hidden");
    if (icon) icon.className = "fa-solid fa-chevron-down ml-1.5 text-[10px]";
  }
}

function formatKeyDisplay(key) {
  if (typeof key === "object" && !Array.isArray(key)) {
    return Object.entries(key).map(([k, v]) => `Pernyataan ${parseInt(k) + 1}: ${v}`).join(", ");
  }
  if (Array.isArray(key)) {
    return key.join(", ");
  }
  return key;
}

function resetAllDrillingAnswers() {
  userAnswers = {};
  submittedQuestions = {};
  updateScoreBoard();
  renderQuestionsList();
  if (activeSubDetailTab === "latihan") {
    renderSubChapterQuestions(currentSubId);
  }
}

function updateScoreBoard() {
  const scoreText = document.getElementById("scoreText");
  if (!scoreText) return;

  const totalSubmitted = Object.keys(submittedQuestions).length;
  const correctCount = Object.values(submittedQuestions).filter((s) => s.isCorrect).length;

  scoreText.innerText = `Skor: ${correctCount} / ${totalSubmitted} (${totalSubmitted > 0 ? Math.round((correctCount / totalSubmitted) * 100) : 0}%)`;
}

// ==========================================
// VIEW 3: AUDIT KURIKULUM LENGKAP & SUB-MATERI DETAIL
// ==========================================

function renderAuditList(filterQuery = "") {
  const container = document.getElementById("auditListContainer");
  if (!container || !window.APP_DATA || !window.APP_DATA.matrix) return;

  const matrix = window.APP_DATA.matrix;
  let html = "";
  const query = filterQuery.toLowerCase().trim();

  matrix.modules.forEach((mod) => {
    // Filter sub-chapters if search query present
    const matchedSubs = mod.sub_chapters.filter((sc) => {
      if (!query) return true;
      const titleMatch = (sc.short_title || "").toLowerCase().includes(query) || sc.title.toLowerCase().includes(query);
      const subTopicMatch = (sc.sub_topics || []).some((st) => st.toLowerCase().includes(query));
      const compMatch = (sc.competencies || []).some((c) => c.toLowerCase().includes(query));
      return titleMatch || subTopicMatch || compMatch || sc.sub_chapter_id.includes(query);
    });

    if (matchedSubs.length === 0) return;

    html += `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <!-- Module Header -->
        <div class="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-3">
            <span class="w-8 h-8 rounded-xl bg-brand-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              ${mod.module_id.replace("MOD-", "M")}
            </span>
            <div>
              <h3 class="text-base font-extrabold text-slate-900">${mod.module_name}</h3>
              <p class="text-xs text-slate-500 font-mono">${mod.module_id} • ${matchedSubs.length} Sub-bab Terverifikasi</p>
            </div>
          </div>
          <span class="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300">
            <i class="fa-solid fa-check mr-1 text-emerald-600"></i> Terverifikasi 100%
          </span>
        </div>

        <!-- Sub-chapters List -->
        <div class="divide-y divide-slate-100">
    `;

    matchedSubs.forEach((sc) => {
      const qIds = window.APP_DATA.questions
        .filter((q) => q.sub_chapter_id === sc.sub_chapter_id)
        .map((q) => q.id);

      const subTopics = sc.sub_topics || [];
      const shortTitle = sc.short_title || sc.title;

      html += `
        <div class="p-6 hover:bg-slate-50/50 transition-colors">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <!-- Sub-chapter Title -->
            <div class="space-y-1">
              <div class="flex items-center space-x-2">
                <span class="text-xs font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200 px-2 py-0.5 rounded">
                  Sub-bab ${sc.sub_chapter_id}
                </span>
                <h4 class="text-base font-extrabold text-slate-900">${shortTitle}</h4>
              </div>
              <p class="text-xs text-slate-500 font-medium">${sc.title}</p>
            </div>

            <!-- Action & Questions -->
            <div class="flex items-center space-x-2">
              <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'materi')" class="px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-lg transition-all flex items-center">
                <span>Buka Materi</span>
                <i class="fa-solid fa-arrow-right ml-1.5 text-[10px]"></i>
              </button>
            </div>
          </div>

          <!-- Penjabaran Sub-Materi Detail (Permintaan User #5) -->
          <div class="mt-4 pt-3 border-t border-slate-100">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span><i class="fa-solid fa-layer-group text-brand-500 mr-1.5"></i> Penjabaran Sub-Materi Detail:</span>
              <span class="text-[11px] font-mono text-slate-400 font-normal">${subTopics.length} Topik Rinci</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 audit-subtopics-list">
              ${subTopics
                .map(
                  (st, idx) => `
                <div class="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span class="text-brand-600 font-mono font-bold mt-0.5">${idx + 1}.</span>
                  <span>${st}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Parameter Matriks & Batasan Silabus -->
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80">
            <div>
              <span class="font-bold text-slate-700 block mb-1">
                <i class="fa-solid fa-bullseye text-blue-500 mr-1"></i> Kompetensi Kurikulum:
              </span>
              <ul class="list-disc list-inside space-y-0.5 text-slate-600">
                ${sc.competencies.map((c) => `<li>${c}</li>`).join("")}
              </ul>
            </div>
            <div>
              <span class="font-bold text-amber-900 block mb-1">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i> Batasan & Ketentuan Khusus:
              </span>
              <p class="text-slate-600 leading-relaxed">${sc.constraints ? sc.constraints.join("; ") : "Mengikuti kaidah umum kurikulum."}</p>
              
              <!-- Soal Terkait -->
              <div class="mt-2 pt-2 border-t border-slate-200/60 flex items-center space-x-2">
                <span class="font-bold text-slate-700">Soal Terkait:</span>
                ${
                  qIds.length > 0
                    ? qIds
                        .map(
                          (id) =>
                            `<button onclick="openQuestionInDrilling(${id})" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-md transition-all">#${id}</button>`
                        )
                        .join(" ")
                    : `<span class="text-slate-400 italic">Diuji secara integratif</span>`
                }
              </div>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  if (!html) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500 text-xs">
        Tidak ditemukan data audit yang sesuai dengan kata kunci "${filterQuery}".
      </div>
    `;
    return;
  }

  container.innerHTML = html;
}

function filterAuditList(query) {
  renderAuditList(query);
}

function toggleAllAuditDetails() {
  const lists = document.querySelectorAll(".audit-subtopics-list");
  isAuditAllExpanded = !isAuditAllExpanded;
  lists.forEach((l) => {
    if (isAuditAllExpanded) {
      l.classList.remove("hidden");
    } else {
      l.classList.add("hidden");
    }
  });
  const btn = document.getElementById("btnToggleAllAudit");
  if (btn) {
    btn.innerHTML = isAuditAllExpanded
      ? `<i class="fa-solid fa-arrows-up-down mr-1.5"></i> Tutup Semua Detail`
      : `<i class="fa-solid fa-arrows-up-down mr-1.5"></i> Buka Semua Detail`;
  }
}

function openQuestionInDrilling(qId) {
  switchTab("drilling");
  const q = window.APP_DATA.questions.find((item) => item.id === qId);
  if (q) {
    const select = document.getElementById("filterSubChapterSelect");
    if (select) select.value = "ALL";
    filterQuestionsBySub("ALL");
    setTimeout(() => {
      const card = document.getElementById(`qcard_${qId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("ring-2", "ring-brand-500");
        setTimeout(() => card.classList.remove("ring-2", "ring-brand-500"), 2000);
      }
    }, 100);
  }
}

// Live Search in Sidebar
function handleSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) {
    setupSidebarNavigation();
    return;
  }

  const container = document.getElementById("moduleNavList");
  if (!container || !window.APP_DATA || !window.APP_DATA.matrix) return;

  let html = `<div class="space-y-1">`;
  const allSubs = getAllSubChaptersList();
  const filtered = allSubs.filter((sc) => {
    const titleMatch = (sc.short_title || "").toLowerCase().includes(query) || sc.title.toLowerCase().includes(query);
    const topicMatch = (sc.sub_topics || []).some((st) => st.toLowerCase().includes(query));
    return titleMatch || topicMatch || sc.sub_chapter_id.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-3 text-xs text-slate-400 text-center">Tidak ada hasil cocok.</div>`;
    return;
  }

  filtered.forEach((sc) => {
    const shortTitle = sc.short_title || sc.title;
    html += `
      <button onclick="selectSubChapter('${sc.sub_chapter_id}', 'materi')" 
        class="w-full text-left px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between hover:bg-slate-100 text-slate-700">
        <span class="truncate"><strong class="font-mono text-brand-600">${sc.sub_chapter_id}</strong> ${shortTitle}</span>
      </button>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}
