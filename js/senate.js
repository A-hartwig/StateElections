/**
 * senate.js – renders the 2026 Senate primary race listings.
 *
 * Reads PRIMARY_STATES, SENATE_RACES, STATUS_STYLES from data.js and
 * builds an interactive accordion list where each state card shows
 * Democratic and Republican primary candidates side-by-side.
 */

(function () {
  "use strict";

  const listEl      = document.getElementById("senate-list");
  const countEl     = document.getElementById("senate-count");
  const searchInput = document.getElementById("senate-search");
  const filterBtns  = document.querySelectorAll(".filter-btn");

  let currentFilter = "all";
  let currentSearch = "";

  // ── Build all state sections once ────────────────────────────────────────

  /**
   * Returns an <li> element for a single candidate entry.
   * @param {{ name: string, incumbent: boolean, status: string }} candidate
   */
  function buildCandidateItem(candidate) {
    const li = document.createElement("li");
    li.className = "candidate-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "candidate-name" + (candidate.incumbent ? " incumbent" : "");
    nameSpan.textContent = candidate.name;

    const badge = document.createElement("span");
    badge.className = "status-badge status-" + (candidate.status || "TBD");
    badge.textContent = candidate.status || "TBD";

    li.appendChild(nameSpan);
    li.appendChild(badge);
    return li;
  }

  /**
   * Returns a .party-col element for one party's candidates.
   * @param {"Republican"|"Democrat"} party
   * @param {Array}                  candidates
   */
  function buildPartyCol(party, candidates) {
    const col = document.createElement("div");
    col.className = "party-col " + (party === "Republican" ? "republican" : "democrat");

    const header = document.createElement("div");
    header.className = "party-col-header";
    header.textContent = party;
    col.appendChild(header);

    const ul = document.createElement("ul");
    ul.className = "candidate-list";
    candidates.forEach(c => ul.appendChild(buildCandidateItem(c)));
    col.appendChild(ul);

    return col;
  }

  /**
   * Builds the complete section element for one state.
   * @param {string} stateName
   */
  function buildStateSection(stateName) {
    const race   = SENATE_RACES[stateName];
    const hasRace = !!race;

    const section = document.createElement("div");
    section.className = "state-section";
    section.dataset.state     = stateName.toLowerCase();
    section.dataset.hasRace   = hasRace ? "true" : "false";
    section.dataset.openSeat  = (hasRace && race.openSeat) ? "true" : "false";

    // ── Header ──────────────────────────────────────────────────────────────
    const hdr = document.createElement("div");
    hdr.className = "state-header";
    hdr.setAttribute("role", "button");
    hdr.setAttribute("aria-expanded", "false");
    hdr.setAttribute("tabindex", "0");

    const nameSpan = document.createElement("span");
    nameSpan.className = "state-name";
    nameSpan.textContent = stateName;

    hdr.appendChild(nameSpan);

    if (hasRace) {
      if (race.openSeat) {
        const flag = document.createElement("span");
        flag.className = "open-seat-flag";
        flag.textContent = "Open Seat";
        hdr.appendChild(flag);
      }
      const meta = document.createElement("span");
      meta.className = "state-meta";
      meta.textContent = race.openSeat
        ? "Open seat – both parties hold primaries"
        : `Incumbent: ${race.incumbent} (${race.incumbentParty})`;
      hdr.appendChild(meta);
    } else {
      const meta = document.createElement("span");
      meta.className = "state-meta";
      meta.textContent = "No Class 2 Senate seat up in 2026";
      hdr.appendChild(meta);
    }

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "▼";
    hdr.appendChild(icon);

    section.appendChild(hdr);

    // ── Body ─────────────────────────────────────────────────────────────────
    const body = document.createElement("div");
    body.className = "state-body";

    if (!hasRace) {
      const notice = document.createElement("p");
      notice.className = "no-race-notice";
      notice.textContent =
        "This state's senators are in Class 1 or Class 3 and are not up for election in 2026.";
      body.appendChild(notice);
    } else {
      if (race.note) {
        const noteEl = document.createElement("div");
        noteEl.className = "race-note";
        noteEl.textContent = race.note;
        body.appendChild(noteEl);
      }

      const cols = document.createElement("div");
      cols.className = "party-columns";
      cols.appendChild(buildPartyCol("Republican", race.candidates.Republican));
      cols.appendChild(buildPartyCol("Democrat",   race.candidates.Democrat));
      body.appendChild(cols);
    }

    section.appendChild(body);

    // ── Toggle behaviour ─────────────────────────────────────────────────────
    function toggle() {
      const expanded = section.classList.toggle("expanded");
      hdr.setAttribute("aria-expanded", String(expanded));
    }

    hdr.addEventListener("click", toggle);
    hdr.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });

    return section;
  }

  // Build sections for all 47 primary states
  const sections = PRIMARY_STATES.map(buildStateSection);
  sections.forEach(s => listEl.appendChild(s));

  // ── Filter & search ───────────────────────────────────────────────────────

  function applyFiltersAndSearch() {
    let visible = 0;

    sections.forEach(section => {
      const name     = section.dataset.state;
      const hasRace  = section.dataset.hasRace  === "true";
      const openSeat = section.dataset.openSeat === "true";

      // Filter
      let passFilter = true;
      if      (currentFilter === "open")     passFilter = openSeat;
      else if (currentFilter === "has-race") passFilter = hasRace;
      else if (currentFilter === "no-race")  passFilter = !hasRace;

      // Search
      const passSearch = !currentSearch ||
        name.includes(currentSearch.toLowerCase());

      const show = passFilter && passSearch;
      section.classList.toggle("hidden", !show);
      if (show) visible++;
    });

    countEl.textContent = visible;
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFiltersAndSearch();
    });
  });

  // Search
  searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value.trim().toLowerCase();
    applyFiltersAndSearch();
  });

  // Initial render
  applyFiltersAndSearch();

  // Auto-expand races with multiple announced candidates so the list is
  // immediately useful without requiring any clicks.
  sections.forEach(section => {
    const state = PRIMARY_STATES.find(
      s => s.toLowerCase() === section.dataset.state
    );
    if (!state) return;
    const race = SENATE_RACES[state];
    if (!race) return;
    const allCandidates = [
      ...(race.candidates.Republican || []),
      ...(race.candidates.Democrat   || [])
    ];
    const announced = allCandidates.filter(
      c => c.status === "Announced" || c.status === "Exploring"
    );
    if (announced.length > 0 && !section.classList.contains("expanded")) {
      section.classList.add("expanded");
      const hdr = section.querySelector(".state-header");
      if (hdr) hdr.setAttribute("aria-expanded", "true");
    }
  });
}());
