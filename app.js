/* PaperMaker — 9th Class Math (Lahore Board) test paper generator.
   Static app: all data in localStorage. Vanilla JS. */

/* ================= DATA ================= */
var CHAPTERS = [
  { n: 1,  title: "Real Numbers", topics: ["Types of numbers: natural, whole, integers, rational, irrational", "Real numbers as combination of rational and irrational numbers", "Properties of equality and inequality of real numbers", "Laws of indices; simplifying radical expressions", "Prime factorization"] },
  { n: 2,  title: "Logarithms", topics: ["Definition of logarithm and its relation to exponents", "Laws of logarithms", "Simplifying calculations using logarithms", "Solving exponential equations", "Logarithm tables: characteristic, mantissa, antilogarithm"] },
  { n: 3,  title: "Set and Functions", topics: ["Set theory and types of sets", "Operations on sets", "Functions: domain and range", "Types of functions"] },
  { n: 4,  title: "Factorization and Algebraic Manipulation", topics: ["Factorization by common factors and grouping", "Special algebraic identities", "Factorization of trinomials and cubic expressions", "HCF and LCM of algebraic expressions"] },
  { n: 5,  title: "Linear Equations and Inequalities", topics: ["Forming and solving linear equations in one variable", "Linear equations in two variables", "Linear inequalities and their graphs"] },
  { n: 6,  title: "Trigonometry", topics: ["Trigonometric ratios", "Trigonometric identities", "Values of trigonometric ratios for standard angles", "Solving right-angled triangles"] },
  { n: 7,  title: "Coordinate Geometry", topics: ["Plotting points on the coordinate plane", "Distance between two points", "Midpoint formula", "Slope of a line", "Equations of straight lines"] },
  { n: 8,  title: "Logic", topics: ["Mathematical statements", "Truth tables", "Logical connectives", "Logical reasoning and proof construction"] },
  { n: 9,  title: "Similar Figures", topics: ["Concept of similarity", "Criteria for similar triangles", "Applications of similarity in real-life geometry problems"] },
  { n: 10, title: "Graphs of Functions", topics: ["Representing functions on graphs", "Linear graphs", "Interpreting graphical information"] },
  { n: 11, title: "Loci and Construction", topics: ["Concept of loci", "Construction of triangles and geometric figures"] },
  { n: 12, title: "Information Handling", topics: ["Collection and organization of data", "Frequency distribution", "Mean, median and mode", "Graphical representation of data"] },
  { n: 13, title: "Probability", topics: ["Introduction to probability", "Probability of simple events"] }
];

/* Seed: real 9th-class math questions, marked sample:true */
var SEED_QUESTIONS = [
  { id:"q1", chapter:1, type:"long", text:"Prove that \u221A2 is an irrational number.", answer:"Assume \u221A2 = p/q in lowest terms. Then 2q\u00B2 = p\u00B2, so p\u00B2 is even \u2192 p is even, p = 2r \u2192 2q\u00B2 = 4r\u00B2 \u2192 q\u00B2 = 2r\u00B2 \u2192 q is even. Contradiction (p, q both even). Hence \u221A2 is irrational.", marks:6, difficulty:"Hard", sample:true },
  { id:"q2", chapter:1, type:"mcq", text:"Which of the following is an irrational number?", options:["22/7","3.1416","\u221A3","0.25"], correct:2, marks:1, difficulty:"Easy", sample:true },
  { id:"q3", chapter:1, type:"short", text:"Define rational and irrational numbers with one example of each.", answer:"Rational: can be written as p/q (q\u22600), e.g. 3/4. Irrational: cannot be written as p/q; non-terminating, non-repeating decimal, e.g. \u221A2.", marks:3, difficulty:"Easy", sample:true },
  { id:"q4", chapter:2, type:"short", text:"Define logarithm and write its relation with exponents.", answer:"If a\u02E3 = y (a>0, a\u22601), then log\u2090y = x. The logarithm is the exponent to which the base must be raised to obtain the number.", marks:3, difficulty:"Easy", sample:true },
  { id:"q5", chapter:2, type:"mcq", text:"If log\u2081\u2080x = 2, then x equals:", options:["20","100","200","10"], correct:1, marks:1, difficulty:"Medium", sample:true },
  { id:"q6", chapter:2, type:"long", text:"Prove the product law of logarithms: log\u2090(mn) = log\u2090m + log\u2090n.", answer:"Let log\u2090m = x, log\u2090n = y \u2192 m = a\u02E3, n = a\u02B8. Then mn = a\u02E3\u207A\u02B8 \u2192 log\u2090(mn) = x + y = log\u2090m + log\u2090n.", marks:6, difficulty:"Medium", sample:true },
  { id:"q7", chapter:3, type:"short", text:"Define a function. Give an example with its domain and range.", answer:"A function f: A\u2192B assigns each element of A exactly one element of B. Example: f(x) = 2x, domain {1,2,3}, range {2,4,6}.", marks:3, difficulty:"Easy", sample:true },
  { id:"q8", chapter:3, type:"mcq", text:"Which of the following is a singleton set?", options:["{0}","{ }","{1, 2}","{x | x is even}"], correct:0, marks:1, difficulty:"Easy", sample:true },
  { id:"q9", chapter:4, type:"short", text:"Factorize: x\u00B2 + 5x + 6", answer:"(x + 2)(x + 3)", marks:3, difficulty:"Easy", sample:true },
  { id:"q10", chapter:4, type:"mcq", text:"The factors of x\u00B2 \u2212 9 are:", options:["(x + 3)(x \u2212 3)","(x + 9)(x \u2212 1)","(x \u2212 3)\u00B2","(x + 3)\u00B2"], correct:0, marks:1, difficulty:"Easy", sample:true },
  { id:"q11", chapter:4, type:"long", text:"Find the H.C.F. of x\u00B2 \u2212 4 and x\u00B2 + 5x + 6.", answer:"x\u00B2\u22124 = (x\u22122)(x+2); x\u00B2+5x+6 = (x+2)(x+3). Common factor: (x+2). H.C.F. = x + 2.", marks:6, difficulty:"Medium", sample:true },
  { id:"q12", chapter:5, type:"short", text:"Solve the linear equation: 3x \u2212 7 = 11", answer:"3x = 18 \u2192 x = 6", marks:3, difficulty:"Easy", sample:true },
  { id:"q13", chapter:5, type:"mcq", text:"The solution of 2x + 5 = 13 is:", options:["3","4","5","6"], correct:1, marks:1, difficulty:"Easy", sample:true },
  { id:"q14", chapter:6, type:"mcq", text:"The value of sin 30\u00B0 is:", options:["1/2","\u221A3/2","1","0"], correct:0, marks:1, difficulty:"Easy", sample:true },
  { id:"q15", chapter:6, type:"short", text:"Define the six trigonometric ratios of an acute angle \u03B8 in a right-angled triangle.", answer:"sin\u03B8 = perp/hyp, cos\u03B8 = base/hyp, tan\u03B8 = perp/base, cosec\u03B8 = hyp/perp, sec\u03B8 = hyp/base, cot\u03B8 = base/perp.", marks:3, difficulty:"Easy", sample:true },
  { id:"q16", chapter:6, type:"long", text:"Prove the fundamental identity: sin\u00B2\u03B8 + cos\u00B2\u03B8 = 1.", answer:"In a right triangle with hypotenuse h: sin\u03B8 = p/h, cos\u03B8 = b/h. sin\u00B2\u03B8 + cos\u00B2\u03B8 = (p\u00B2+b\u00B2)/h\u00B2 = h\u00B2/h\u00B2 = 1 (Pythagoras theorem).", marks:6, difficulty:"Medium", sample:true },
  { id:"q17", chapter:7, type:"short", text:"Find the distance between the points A(2, 3) and B(6, 6).", answer:"d = \u221A[(6\u22122)\u00B2 + (6\u22123)\u00B2] = \u221A(16+9) = 5 units.", marks:3, difficulty:"Medium", sample:true },
  { id:"q18", chapter:12, type:"long", text:"Find the mean, median and mode of the data: 4, 6, 8, 6, 10, 6, 12.", answer:"Mean = 52/7 \u2248 7.43. Ordered: 4, 6, 6, 6, 8, 10, 12 \u2192 median = 6. Mode = 6 (most frequent).", marks:6, difficulty:"Medium", sample:true }
];

/* ================= STATE ================= */
var LS_Q = "papermaker_questions_v1";
var LS_P = "papermaker_papers_v1";
var questions = [];
var papers = [];
var builderChapters = {};
var manualSelected = {};
var currentPaper = { mcq: [], short: [], long: [] };

function loadState() {
  try {
    var q = localStorage.getItem(LS_Q);
    questions = q ? JSON.parse(q) : JSON.parse(JSON.stringify(SEED_QUESTIONS));
  } catch (e) { questions = JSON.parse(JSON.stringify(SEED_QUESTIONS)); }
  try {
    var p = localStorage.getItem(LS_P);
    papers = p ? JSON.parse(p) : [];
  } catch (e) { papers = []; }
}
function saveState() {
  localStorage.setItem(LS_Q, JSON.stringify(questions));
  localStorage.setItem(LS_P, JSON.stringify(papers));
}
function uid() { return "q" + Date.now().toString(36) + Math.floor(Math.random() * 9999); }
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function chapterName(n) {
  for (var i = 0; i < CHAPTERS.length; i++) if (CHAPTERS[i].n === n) return CHAPTERS[i].title;
  return "Ch " + n;
}
function typeLabel(t) { return t === "mcq" ? "MCQ" : t === "short" ? "Short" : "Long"; }
function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function toRoman(n) {
  var map = [[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]], out = "";
  for (var k = 0; k < map.length; k++) while (n >= map[k][0]) { out += map[k][1]; n -= map[k][0]; }
  return out;
}
function $ (id) { return document.getElementById(id); }

/* ================= TABS ================= */
function switchTab(name) {
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.toggle("active", tabs[i].getAttribute("data-tab") === name);
  var panels = document.querySelectorAll(".tab-panel");
  for (var j = 0; j < panels.length; j++) panels[j].classList.toggle("active", panels[j].id === "tab-" + name);
  if (name === "dashboard") renderDashboard();
  if (name === "bank") renderBank();
  if (name === "papers") renderPapers();
}
function initTabs() {
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++) {
    (function (el) {
      el.addEventListener("click", function () { switchTab(el.getAttribute("data-tab")); });
    })(tabs[i]);
  }
}

/* ================= DASHBOARD ================= */
function renderDashboard() {
  $("statQuestions").textContent = questions.length;
  var ch = {};
  questions.forEach(function (q) { ch[q.chapter] = 1; });
  $("statChapters").textContent = Object.keys(ch).length + " / 13";
  $("statPapers").textContent = papers.length;
}

/* ================= QUESTION BANK ================= */
function chapterOptionsHTML(selected, allLabel) {
  var h = allLabel ? '<option value="">' + allLabel + "</option>" : "";
  CHAPTERS.forEach(function (c) {
    h += '<option value="' + c.n + '"' + (String(selected) === String(c.n) ? " selected" : "") + ">Ch " + c.n + " — " + esc(c.title) + "</option>";
  });
  return h;
}
function filteredBank() {
  var ch = $("filterChapter").value, ty = $("filterType").value,
      df = $("filterDifficulty").value, s = $("filterSearch").value.trim().toLowerCase();
  return questions.filter(function (q) {
    if (ch && String(q.chapter) !== ch) return false;
    if (ty && q.type !== ty) return false;
    if (df && q.difficulty !== df) return false;
    if (s && (q.text || "").toLowerCase().indexOf(s) < 0) return false;
    return true;
  });
}
function questionCardHTML(q) {
  var h = '<div class="q-card">';
  h += '<div class="tags"><span class="tag">Ch ' + q.chapter + " — " + esc(chapterName(q.chapter)) + "</span>";
  h += '<span class="tag type-' + q.type + '">' + typeLabel(q.type) + "</span>";
  h += '<span class="tag diff-' + q.difficulty + '">' + q.difficulty + "</span>";
  if (q.sample) h += '<span class="tag sample">sample</span>';
  h += "</div>";
  h += '<div class="q-text">' + esc(q.text) + "</div>";
  if (q.type === "mcq" && q.options) {
    h += '<div class="q-opts">';
    var letters = ["A", "B", "C", "D"];
    q.options.forEach(function (o, i) {
      h += "<div" + (i === q.correct ? ' class="correct"' : "") + ">" + letters[i] + ") " + esc(o) + (i === q.correct ? " ✓" : "") + "</div>";
    });
    h += "</div>";
  }
  if (q.answer) h += '<div class="q-ans"><strong>Answer:</strong> ' + esc(q.answer) + "</div>";
  h += '<div class="q-meta">' + q.marks + " mark" + (q.marks > 1 ? "s" : "") + "</div>";
  h += '<div class="q-actions"><button class="btn small" data-edit="' + q.id + '">✏️ Edit</button>' +
       '<button class="btn small danger" data-del="' + q.id + '">🗑️ Delete</button></div>';
  h += "</div>";
  return h;
}
function renderBank() {
  var list = filteredBank();
  if (!list.length) { $("bankList").innerHTML = '<div class="empty">No questions match. Add one with “＋ Add Question”.</div>'; }
  else { $("bankList").innerHTML = list.map(questionCardHTML).join(""); }
  bindCardButtons($("bankList"));
  renderDashboard();
}
function bindCardButtons(root) {
  var edits = root.querySelectorAll("[data-edit]");
  for (var i = 0; i < edits.length; i++) (function (el) {
    el.addEventListener("click", function () { openModal(el.getAttribute("data-edit")); });
  })(edits[i]);
  var dels = root.querySelectorAll("[data-del]");
  for (var j = 0; j < dels.length; j++) (function (el) {
    el.addEventListener("click", function () {
      if (confirm("Delete this question?")) {
        questions = questions.filter(function (q) { return q.id !== el.getAttribute("data-del"); });
        saveState(); renderBank();
      }
    });
  })(dels[j]);
}

/* ---- Add / Edit modal ---- */
function openModal(editId) {
  $("mqTitle").textContent = editId ? "Edit Question" : "Add Question";
  $("editingId").value = editId || "";
  $("mqChapter").innerHTML = chapterOptionsHTML(editId ? null : 1);
  var q = editId ? questions.filter(function (x) { return x.id === editId; })[0] : null;
  if (q) {
    $("mqChapter").value = q.chapter;
    $("mqType").value = q.type;
    $("mqText").value = q.text || "";
    $("mqAnswer").value = q.answer || "";
    $("mqMarks").value = q.marks;
    $("mqDifficulty").value = q.difficulty;
    for (var i = 0; i < 4; i++) $("mqOpt" + i).value = (q.options && q.options[i]) || "";
    $("mqCorrect").value = q.correct != null ? q.correct : 0;
  } else {
    $("mqType").value = "mcq";
    $("mqText").value = ""; $("mqAnswer").value = "";
    $("mqMarks").value = 1; $("mqDifficulty").value = "Easy";
    for (var k = 0; k < 4; k++) $("mqOpt" + k).value = "";
    $("mqCorrect").value = 0;
  }
  onTypeChange();
  $("qModal").hidden = false;
}
function closeModal() { $("qModal").hidden = true; }
function onTypeChange() {
  var t = $("mqType").value;
  $("mqOptions").style.display = t === "mcq" ? "block" : "none";
  if (!$("editingId").value) {
    $("mqMarks").value = t === "mcq" ? 1 : t === "short" ? 3 : 6;
  }
}
function saveQuestion() {
  var text = $("mqText").value.trim();
  if (!text) { alert("Please write the question text."); return; }
  var type = $("mqType").value, data;
  var editId = $("editingId").value;
  if (type === "mcq") {
    var opts = [0, 1, 2, 3].map(function (i) { return $("mqOpt" + i).value.trim(); });
    if (opts.some(function (o) { return !o; })) { alert("Please fill all 4 MCQ options."); return; }
    data = { chapter: +$("mqChapter").value, type: type, text: text, options: opts,
             correct: +$("mqCorrect").value, answer: $("mqAnswer").value.trim(),
             marks: +$("mqMarks").value || 1, difficulty: $("mqDifficulty").value };
  } else {
    data = { chapter: +$("mqChapter").value, type: type, text: text,
             answer: $("mqAnswer").value.trim(),
             marks: +$("mqMarks").value || (type === "short" ? 3 : 6),
             difficulty: $("mqDifficulty").value };
  }
  if (editId) {
    for (var i = 0; i < questions.length; i++) if (questions[i].id === editId) {
      for (var k in data) questions[i][k] = data[k];
      delete questions[i].options; delete questions[i].correct;
      if (type === "mcq") { questions[i].options = data.options; questions[i].correct = data.correct; }
      questions[i].sample = false;
    }
  } else {
    data.id = uid(); data.sample = false;
    questions.push(data);
  }
  saveState(); closeModal(); renderBank();
}

/* ================= BUILDER ================= */
function renderChapterChecks() {
  var h = "";
  CHAPTERS.forEach(function (c) {
    var checked = builderChapters[c.n] ? " checked" : "";
    h += '<label><input type="checkbox" data-ch="' + c.n + '"' + checked + "> <span><strong>Ch " + c.n + "</strong> — " + esc(c.title) + "</span></label>";
  });
  $("chapterChecks").innerHTML = h;
  var boxes = $("chapterChecks").querySelectorAll("input[type=checkbox]");
  for (var i = 0; i < boxes.length; i++) (function (el) {
    el.addEventListener("change", function () {
      if (el.checked) builderChapters[el.getAttribute("data-ch")] = 1;
      else delete builderChapters[el.getAttribute("data-ch")];
      updateChCount();
    });
  })(boxes[i]);
  updateChCount();
}
function updateChCount() {
  var n = Object.keys(builderChapters).length;
  $("chCount").textContent = n + " of 13 chapters selected";
}
function selectedChapterNums() {
  return Object.keys(builderChapters).map(Number).sort(function (a, b) { return a - b; });
}
function showStep(n) {
  [1, 2, 3].forEach(function (i) { $("builderStep" + i).hidden = i !== n; });
  [1, 2, 3].forEach(function (i) {
    var d = $("stepDot" + i);
    d.classList.toggle("active", i === n);
    d.classList.toggle("done", i < n);
  });
  if (n === 2) { manualSelected = {}; renderManualList(); }
}
function balancedPick(pool, n) {
  var byCh = {};
  pool.forEach(function (q) { (byCh[q.chapter] = byCh[q.chapter] || []).push(q); });
  var keys = Object.keys(byCh).map(Number).sort(function (a, b) { return a - b; });
  keys.forEach(function (k) { shuffle(byCh[k]); });
  var idx = {}, out = [];
  keys.forEach(function (k) { idx[k] = 0; });
  while (out.length < n) {
    var added = false;
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (out.length >= n) break;
      if (idx[k] < byCh[k].length) { out.push(byCh[k][idx[k]++]); added = true; }
    }
    if (!added) break;
  }
  return out;
}
function generateAuto() {
  var chs = selectedChapterNums();
  if (!chs.length) { alert("Please select at least one chapter in Step 1."); showStep(1); return; }
  var nM = +$("numMcq").value || 0, nS = +$("numShort").value || 0, nL = +$("numLong").value || 0;
  function poolOf(t) { return questions.filter(function (q) { return q.type === t && builderChapters[q.chapter]; }); }
  var mcq = balancedPick(poolOf("mcq"), nM),
      sh = balancedPick(poolOf("short"), nS),
      lg = balancedPick(poolOf("long"), nL);
  var warns = [];
  if (mcq.length < nM) warns.push("MCQs: only " + mcq.length + " of " + nM + " available");
  if (sh.length < nS) warns.push("Short: only " + sh.length + " of " + nS + " available");
  if (lg.length < nL) warns.push("Long: only " + lg.length + " of " + nL + " available");
  var w = $("autoWarn");
  if (warns.length) { w.hidden = false; w.textContent = "⚠️ Bank is short — " + warns.join(" · ") + ". Add more questions or lower the counts."; }
  else w.hidden = true;
  currentPaper = { mcq: mcq, short: sh, long: lg };
  updateMarks();
  buildPreview();
  showStep(3);
}

/* ---- Manual mode ---- */
function renderManualList() {
  var chs = selectedChapterNums();
  var ch = $("manChapter").value, ty = $("manType").value;
  var list = questions.filter(function (q) {
    if (!builderChapters[q.chapter]) return false;
    if (ch && String(q.chapter) !== ch) return false;
    if (ty && q.type !== ty) return false;
    return true;
  });
  if (!list.length) { $("manList").innerHTML = '<div class="empty">No questions for this filter. Add questions in the Question Bank.</div>'; }
  else {
    $("manList").innerHTML = list.map(function (q) {
      var c = manualSelected[q.id] ? " checked" : "";
      return '<label class="man-item"><input type="checkbox" data-mid="' + q.id + '"' + c + ">" +
        "<span><strong>[" + typeLabel(q.type) + "]</strong> Ch " + q.chapter + " — " + esc(q.text) + "</span></label>";
    }).join("");
  }
  var boxes = $("manList").querySelectorAll("input[type=checkbox]");
  for (var i = 0; i < boxes.length; i++) (function (el) {
    el.addEventListener("change", function () {
      if (el.checked) manualSelected[el.getAttribute("data-mid")] = 1;
      else delete manualSelected[el.getAttribute("data-mid")];
      updateManCount();
    });
  })(boxes[i]);
  updateManCount();
}
function updateManCount() { $("manCount").textContent = Object.keys(manualSelected).length; }
function manualPreview() {
  var ids = Object.keys(manualSelected);
  if (!ids.length) { alert("Please tick at least one question."); return; }
  var byId = {};
  questions.forEach(function (q) { byId[q.id] = q; });
  currentPaper = { mcq: [], short: [], long: [] };
  ids.forEach(function (id) {
    var q = byId[id];
    if (q) currentPaper[q.type].push(q);
  });
  updateMarks();
  buildPreview();
  showStep(3);
}

/* ---- Preview ---- */
function updateMarks() {
  var aS = +($("pAttemptShort").value || 0), aL = +($("pAttemptLong").value || 0);
  $("pMarks").value = currentPaper.mcq.length * 1 + aS * 3 + aL * 6;
}
function paperHeaderHTML() {
  var school = esc($("pSchool").value.trim() || "______________________");
  var h = '<div class="p-head">';
  h += '<div class="p-school">' + school + "</div>";
  h += '<div class="p-title">' + esc($("pTitle").value.trim() || "Test") + "</div>";
  h += '<div class="p-meta"><span>Class: ' + esc($("pClass").value) + "</span>" +
       "<span>Subject: " + esc($("pSubject").value) + "</span>" +
       "<span>Time: " + esc($("pTime").value) + "</span>" +
       "<span>Marks: " + esc($("pMarks").value) + "</span></div>";
  h += "</div>";
  return h;
}
function keyText(q) {
  if (q.type === "mcq" && q.options) {
    var letters = ["A", "B", "C", "D"];
    return letters[q.correct] + ") " + q.options[q.correct];
  }
  return q.answer || "—";
}
function buildPreview() {
  var aS = +($("pAttemptShort").value || 0), aL = +($("pAttemptLong").value || 0);
  var h = paperHeaderHTML(), letters = ["A", "B", "C", "D"], n = 0;
  /* Section A */
  h += '<div class="p-section"><div class="p-sec-head">SECTION A — Objective (MCQs)</div>';
  h += '<div class="p-note">All questions are compulsory. Each carries 1 mark.</div>';
  currentPaper.mcq.forEach(function (q) {
    n++;
    h += '<div class="p-q"><span class="qno">' + toRoman(n) + ".</span> " + esc(q.text);
    if (q.options) {
      h += '<div class="p-opts">';
      q.options.forEach(function (o, i) { h += "<div>" + letters[i] + ") " + esc(o) + "</div>"; });
      h += "</div>";
    }
    h += "</div>";
  });
  if (!currentPaper.mcq.length) h += '<div class="p-note">— no MCQs selected —</div>';
  h += "</div>";
  /* Section B */
  h += '<div class="p-section"><div class="p-sec-head">SECTION B — Short Questions</div>';
  h += '<div class="p-note">Attempt any ' + aS + " questions. Each carries 3 marks.</div>";
  currentPaper.short.forEach(function (q, i) {
    h += '<div class="p-q"><span class="qno">' + (i + 1) + ".</span> " + esc(q.text) + "</div>";
  });
  if (!currentPaper.short.length) h += '<div class="p-note">— no short questions selected —</div>';
  h += "</div>";
  /* Section C */
  h += '<div class="p-section"><div class="p-sec-head">SECTION C — Long Questions</div>';
  h += '<div class="p-note">Attempt any ' + aL + " questions. Each carries 6 marks.</div>";
  currentPaper.long.forEach(function (q, i) {
    h += '<div class="p-q"><span class="qno">' + (i + 1) + ".</span> " + esc(q.text) + "</div>";
  });
  if (!currentPaper.long.length) h += '<div class="p-note">— no long questions selected —</div>';
  h += "</div>";
  /* Answer key */
  h += '<div id="keySection"><div class="p-sec-head">ANSWER KEY — FOR TEACHER ONLY</div>';
  n = 0;
  currentPaper.mcq.forEach(function (q) {
    n++;
    h += '<div class="key-item"><span class="k-no">' + toRoman(n) + ".</span> " + esc(keyText(q)) + "</div>";
  });
  currentPaper.short.forEach(function (q, i) {
    h += '<div class="key-item"><span class="k-no">S' + (i + 1) + ".</span> " + esc(q.text) + " → " + esc(keyText(q)) + "</div>";
  });
  currentPaper.long.forEach(function (q, i) {
    h += '<div class="key-item"><span class="k-no">L' + (i + 1) + ".</span> " + esc(q.text) + " → " + esc(keyText(q)) + "</div>";
  });
  h += "</div>";
  $("paperPreview").innerHTML = h;
}

/* ================= SAVED PAPERS ================= */
function snapshotPaper() {
  return {
    id: uid(),
    title: $("pTitle").value.trim() || ("Test — " + new Date().toLocaleDateString()),
    date: new Date().toISOString(),
    settings: {
      school: $("pSchool").value, cls: $("pClass").value, subject: $("pSubject").value,
      time: $("pTime").value, marks: $("pMarks").value,
      attemptShort: $("pAttemptShort").value, attemptLong: $("pAttemptLong").value
    },
    questions: JSON.parse(JSON.stringify(currentPaper))
  };
}
function savePaper() {
  var total = currentPaper.mcq.length + currentPaper.short.length + currentPaper.long.length;
  if (!total) { alert("Nothing to save — build a paper first."); return; }
  papers.unshift(snapshotPaper());
  saveState(); renderDashboard();
  alert("Paper saved to My Papers ✓");
}
function renderPapers() {
  if (!papers.length) {
    $("papersList").innerHTML = '<div class="empty">No saved papers yet. Build one in the Test Builder.</div>';
    return;
  }
  $("papersList").innerHTML = papers.map(function (p) {
    var q = p.questions;
    var d = new Date(p.date).toLocaleString();
    return '<div class="paper-row"><div><div class="pr-title">' + esc(p.title) + "</div>" +
      '<div class="pr-meta">' + esc(d) + " · MCQs " + q.mcq.length + " · Short " + q.short.length +
      " · Long " + q.long.length + " · " + esc(String(p.settings.marks)) + " marks</div></div>" +
      '<div class="row"><button class="btn small" data-view="' + p.id + '">👁 View</button>' +
      '<button class="btn small" data-pprint="' + p.id + '">🖨️ Print</button>' +
      '<button class="btn small danger" data-pdel="' + p.id + '">🗑️ Delete</button></div></div>';
  }).join("");
  var vs = $("papersList").querySelectorAll("[data-view]");
  for (var i = 0; i < vs.length; i++) (function (el) {
    el.addEventListener("click", function () { viewPaper(el.getAttribute("data-view")); });
  })(vs[i]);
  var ps = $("papersList").querySelectorAll("[data-pprint]");
  for (var j = 0; j < ps.length; j++) (function (el) {
    el.addEventListener("click", function () { printSavedPaper(el.getAttribute("data-pprint")); });
  })(ps[j]);
  var ds = $("papersList").querySelectorAll("[data-pdel]");
  for (var k = 0; k < ds.length; k++) (function (el) {
    el.addEventListener("click", function () {
      if (confirm("Delete this saved paper?")) {
        papers = papers.filter(function (p) { return p.id !== el.getAttribute("data-pdel"); });
        saveState(); renderPapers(); renderDashboard();
      }
    });
  })(ds[k]);
}
function applyPaperSettings(s) {
  $("pTitle").value = s.title; $("pSchool").value = s.school || "";
  $("pClass").value = s.cls || "9th"; $("pSubject").value = s.subject || "Mathematics";
  $("pTime").value = s.time || "2:30 hours"; $("pMarks").value = s.marks || 75;
  $("pAttemptShort").value = s.attemptShort || 12; $("pAttemptLong").value = s.attemptLong || 4;
}
function viewPaper(id) {
  var p = papers.filter(function (x) { return x.id === id; })[0];
  if (!p) return;
  currentPaper = JSON.parse(JSON.stringify(p.questions));
  applyPaperSettings({ title: p.title, school: p.settings.school, cls: p.settings.cls,
    subject: p.settings.subject, time: p.settings.time, marks: p.settings.marks,
    attemptShort: p.settings.attemptShort, attemptLong: p.settings.attemptLong });
  buildPreview();
  showStep(3);
  switchTab("builder");
}
function printSavedPaper(id) {
  viewPaper(id);
  setTimeout(function () { window.print(); }, 400);
}

/* ================= INIT ================= */
function init() {
  loadState();
  initTabs();
  /* dashboard quick actions */
  $("qaBank").addEventListener("click", function () { switchTab("bank"); openModal(null); });
  $("qaBuilder").addEventListener("click", function () { switchTab("builder"); });
  $("qaPapers").addEventListener("click", function () { switchTab("papers"); });
  /* bank */
  $("filterChapter").innerHTML = chapterOptionsHTML(null, "All Chapters");
  ["filterChapter", "filterType", "filterDifficulty"].forEach(function (id) {
    $(id).addEventListener("change", renderBank);
  });
  $("filterSearch").addEventListener("input", renderBank);
  $("btnAddQuestion").addEventListener("click", function () { openModal(null); });
  /* modal */
  $("mqType").addEventListener("change", onTypeChange);
  $("mqSave").addEventListener("click", saveQuestion);
  $("mqCancel").addEventListener("click", closeModal);
  $("qModal").addEventListener("click", function (e) { if (e.target === $("qModal")) closeModal(); });
  /* builder step 1 */
  CHAPTERS.forEach(function (c) { builderChapters[c.n] = 1; });
  renderChapterChecks();
  $("chSelectAll").addEventListener("click", function () {
    CHAPTERS.forEach(function (c) { builderChapters[c.n] = 1; }); renderChapterChecks();
  });
  $("chSelectNone").addEventListener("click", function () { builderChapters = {}; renderChapterChecks(); });
  $("btnToStep2").addEventListener("click", function () {
    if (!selectedChapterNums().length) { alert("Select at least one chapter."); return; }
    showStep(2);
  });
  /* builder step 2 */
  $("modeAuto").addEventListener("change", function () {
    $("autoPanel").hidden = false; $("manualPanel").hidden = true;
  });
  $("modeManual").addEventListener("change", function () {
    $("autoPanel").hidden = true; $("manualPanel").hidden = false; renderManualList();
  });
  $("manChapter").innerHTML = chapterOptionsHTML(null, "All Chapters");
  $("manChapter").addEventListener("change", renderManualList);
  $("manType").addEventListener("change", renderManualList);
  $("btnGenerate").addEventListener("click", generateAuto);
  $("btnManualPreview").addEventListener("click", manualPreview);
  $("btnBackStep1").addEventListener("click", function () { showStep(1); });
  $("btnBackStep1b").addEventListener("click", function () { showStep(1); });
  /* builder step 3 */
  $("btnBackStep2").addEventListener("click", function () { showStep(2); });
  ["pAttemptShort", "pAttemptLong"].forEach(function (id) {
    $(id).addEventListener("input", function () { updateMarks(); buildPreview(); });
  });
  ["pTitle", "pSchool", "pClass", "pSubject", "pTime"].forEach(function (id) {
    $(id).addEventListener("input", buildPreview);
  });
  $("btnAnswerKey").addEventListener("change", function () {
    document.body.classList.toggle("show-key", $("btnAnswerKey").checked);
  });
  $("btnSavePaper").addEventListener("click", savePaper);
  $("btnPrint").addEventListener("click", function () { buildPreview(); window.print(); });
  /* go */
  showStep(1);
  renderDashboard();
  renderBank();
  renderPapers();
}
document.addEventListener("DOMContentLoaded", init);
