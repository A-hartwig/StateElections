/**
 * house.js – renders the 2026 House primary race listings.
 *
 * Reads PRIMARY_STATES, HOUSE_DISTRICT_COUNTS, HOUSE_RACES, STATUS_STYLES
 * from data.js and builds a state-by-state accordion.  Each state expands
 * to show individual district rows which themselves expand to show party
 * primary candidates.
 */

(function () {
  "use strict";

  const listEl      = document.getElementById("house-list");
  const countEl     = document.getElementById("house-count");
  const searchInput = document.getElementById("house-search");
  const stateJump   = document.getElementById("state-jump");

  // ── Helpers ───────────────────────────────────────────────────────────────

  /**
   * Returns an <li> element for a single candidate.
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
   * Returns a .party-col element for one party.
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
   * Default candidates used when no specific data is provided for a district.
   * @param {string} [note]
   */
  function defaultDistrictCandidates(note) {
    return {
      note: note || null,
      candidates: {
        Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }],
        Democrat:   [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }]
      }
    };
  }

  /**
   * Builds the accordion row for a single congressional district.
   * @param {string} stateName
   * @param {number} distNum    District number (1-based)
   */
  function buildDistrictRow(stateName, distNum) {
    const totalDistricts = HOUSE_DISTRICT_COUNTS[stateName] || 1;
    const stateRaces     = HOUSE_RACES[stateName] || {};
    const distData       = stateRaces[distNum] || defaultDistrictCandidates();

    const row = document.createElement("div");
    row.className = "district-row";

    // Detect if this district has any named (non-TBD) candidates
    const allCandidates = [
      ...(distData.candidates.Republican || []),
      ...(distData.candidates.Democrat   || [])
    ];
    const hasNamedCandidates = allCandidates.some(c => c.status !== "TBD");

    // ── District header ──────────────────────────────────────────────────────
    const hdr = document.createElement("div");
    hdr.className = "district-header";
    hdr.setAttribute("role", "button");
    hdr.setAttribute("aria-expanded", "false");
    hdr.setAttribute("tabindex", "0");

    const label = document.createElement("span");
    label.className = "district-label";
    label.textContent = totalDistricts === 1
      ? `${stateName} At-Large`
      : `District ${distNum}`;

    hdr.appendChild(label);

    if (distData.note) {
      const noteInline = document.createElement("span");
      noteInline.className = "district-note-inline";
      noteInline.textContent = distData.note;
      hdr.appendChild(noteInline);
    }

    if (hasNamedCandidates) {
      const flag = document.createElement("span");
      flag.className = "status-badge status-Announced";
      flag.textContent = "Candidates announced";
      hdr.appendChild(flag);
    }

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "▼";
    hdr.appendChild(icon);

    row.appendChild(hdr);

    // ── District body ────────────────────────────────────────────────────────
    const body = document.createElement("div");
    body.className = "district-body";

    const cols = document.createElement("div");
    cols.className = "party-columns";
    cols.appendChild(buildPartyCol("Republican", distData.candidates.Republican));
    cols.appendChild(buildPartyCol("Democrat",   distData.candidates.Democrat));
    body.appendChild(cols);
    row.appendChild(body);

    // ── Toggle ────────────────────────────────────────────────────────────────
    function toggle() {
      const expanded = row.classList.toggle("expanded");
      hdr.setAttribute("aria-expanded", String(expanded));
    }
    hdr.addEventListener("click", toggle);
    hdr.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });

    return row;
  }

  /**
   * Builds the full state accordion (header + district list) for one state.
   * @param {string} stateName
   */
  function buildStateSection(stateName) {
    const totalDistricts = HOUSE_DISTRICT_COUNTS[stateName] || 1;

    const section = document.createElement("div");
    section.className = "state-section";
    section.id        = "house-state-" + stateName.toLowerCase().replace(/\s+/g, "-");
    section.dataset.state = stateName.toLowerCase();

    // ── State header ──────────────────────────────────────────────────────────
    const hdr = document.createElement("div");
    hdr.className = "state-header house-state-header";
    hdr.setAttribute("role", "button");
    hdr.setAttribute("aria-expanded", "false");
    hdr.setAttribute("tabindex", "0");

    const nameSpan = document.createElement("span");
    nameSpan.className = "state-name";
    nameSpan.textContent = stateName;

    const badge = document.createElement("span");
    badge.className = "district-count-badge";
    badge.textContent = totalDistricts === 1
      ? "At-Large"
      : `${totalDistricts} districts`;

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "▼";

    hdr.appendChild(nameSpan);
    hdr.appendChild(badge);
    hdr.appendChild(icon);
    section.appendChild(hdr);

    // ── State body (district rows) ────────────────────────────────────────────
    const body = document.createElement("div");
    body.className = "state-body";

    const distList = document.createElement("div");
    distList.className = "district-list";

    for (let d = 1; d <= totalDistricts; d++) {
      distList.appendChild(buildDistrictRow(stateName, d));
    }

    body.appendChild(distList);
    section.appendChild(body);

    // ── Toggle ────────────────────────────────────────────────────────────────
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

  // ── Render all states ─────────────────────────────────────────────────────

  const sections = PRIMARY_STATES.map(buildStateSection);
  sections.forEach(s => listEl.appendChild(s));

  countEl.textContent = sections.length;

  // Populate the "Jump to state" dropdown
  PRIMARY_STATES.forEach(name => {
    const opt = document.createElement("option");
    opt.value       = "house-state-" + name.toLowerCase().replace(/\s+/g, "-");
    opt.textContent = name;
    stateJump.appendChild(opt);
  });

  // ── Search ────────────────────────────────────────────────────────────────

  /**
   * Returns true if `query` matches any visible text within `section`.
   * Checks state name and all candidate names.
   */
  function sectionMatchesQuery(section, query) {
    if (!query) return true;
    const stateName = section.dataset.state;
    if (stateName.includes(query)) return true;

    // Also check candidate names inside the section
    const names = section.querySelectorAll(".candidate-name");
    for (const n of names) {
      if (n.textContent.toLowerCase().includes(query)) return true;
    }
    return false;
  }

  searchInput.addEventListener("input", () => {
    const query   = searchInput.value.trim().toLowerCase();
    let   visible = 0;

    sections.forEach(section => {
      const show = sectionMatchesQuery(section, query);
      section.classList.toggle("hidden", !show);
      if (show) {
        visible++;
        // If there's a text query, expand the state so results are visible
        if (query && !section.classList.contains("expanded")) {
          section.classList.add("expanded");
          const hdr = section.querySelector(".state-header");
          if (hdr) hdr.setAttribute("aria-expanded", "true");
        }
      }
    });

    countEl.textContent = visible;
  });

  // ── Jump to state ─────────────────────────────────────────────────────────

  stateJump.addEventListener("change", () => {
    const id = stateJump.value;
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    // Expand the section if not already
    if (!el.classList.contains("expanded")) {
      el.classList.add("expanded");
      const hdr = el.querySelector(".state-header");
      if (hdr) hdr.setAttribute("aria-expanded", "true");
    }

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    stateJump.value = "";
  });
}());
