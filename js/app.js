/**
 * app.js – Main page logic for StateElections index
 * Renders the state grid and handles search / filter controls.
 */

(function () {
  "use strict";

  // State abbreviation lookup
  const STATE_ABBRS = {
    Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR",
    California: "CA", Colorado: "CO", Connecticut: "CT", Delaware: "DE",
    Florida: "FL", Georgia: "GA", Hawaii: "HI", Idaho: "ID",
    Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS",
    Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD",
    Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS",
    Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV",
    "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
    "New York": "NY", "North Carolina": "NC", "North Dakota": "ND",
    Ohio: "OH", Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA",
    "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
    Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT",
    Virginia: "VA", Washington: "WA", "West Virginia": "WV",
    Wisconsin: "WI", Wyoming: "WY"
  };

  const PARTY_ORDER = ["Republican", "Democrat", "Independent", "Libertarian", "Green"];

  /**
   * Returns a summary of candidate counts per party for a given state
   * across all race types.
   */
  function getPartySummary(stateName) {
    const stateData = CANDIDATES[stateName] || {};
    const summary = {}; // party → candidate count
    const raceTypes = [];

    Object.entries(stateData).forEach(([race, parties]) => {
      const hasParties = Object.keys(parties || {}).length > 0;
      if (hasParties) raceTypes.push(race);

      Object.entries(parties || {}).forEach(([party, candidates]) => {
        const real = (candidates || []).filter(c => c.status !== "TBD").length;
        if (real > 0) {
          summary[party] = (summary[party] || 0) + real;
        }
      });
    });

    return { summary, raceTypes };
  }

  /** Total known (non-TBD) candidates across all races for a state */
  function getTotalCandidates(stateName) {
    const stateData = CANDIDATES[stateName] || {};
    let total = 0;
    Object.values(stateData).forEach(parties => {
      Object.values(parties || {}).forEach(candidates => {
        total += (candidates || []).filter(c => c.status !== "TBD").length;
      });
    });
    return total;
  }

  /** Build a single state card element */
  function buildStateCard(stateName) {
    const abbr = STATE_ABBRS[stateName] || "";
    const { summary, raceTypes } = getPartySummary(stateName);
    const totalCandidates = getTotalCandidates(stateName);

    const card = document.createElement("a");
    card.className = "state-card";
    card.href = `state.html?state=${encodeURIComponent(stateName)}`;
    card.setAttribute("data-state", stateName.toLowerCase());
    card.setAttribute("data-races", raceTypes.join(",").toLowerCase());
    card.setAttribute("data-candidates", totalCandidates);

    // Header row
    const header = document.createElement("div");
    header.className = "state-card-header";

    const nameEl = document.createElement("div");
    nameEl.className = "state-name";
    nameEl.textContent = stateName;

    const abbrEl = document.createElement("div");
    abbrEl.className = "state-abbr";
    abbrEl.textContent = abbr;

    header.appendChild(nameEl);
    header.appendChild(abbrEl);
    card.appendChild(header);

    // Race pills
    if (raceTypes.length > 0) {
      const pillsEl = document.createElement("div");
      pillsEl.className = "race-pills";
      raceTypes.forEach(r => {
        const pill = document.createElement("span");
        pill.className = "race-pill " + r.toLowerCase();
        pill.textContent = r;
        pillsEl.appendChild(pill);
      });
      card.appendChild(pillsEl);
    } else {
      const noRace = document.createElement("div");
      noRace.className = "race-pills";
      const pill = document.createElement("span");
      pill.className = "race-pill";
      pill.style.cssText = "background:#f1f5f9;color:#64748b;border-color:#cbd5e1;";
      pill.textContent = "No 2026 Federal Races";
      noRace.appendChild(pill);
      card.appendChild(noRace);
    }

    // Party summary rows
    const summaryEl = document.createElement("div");
    summaryEl.className = "party-summary";

    const partiesPresent = PARTY_ORDER.filter(p => summary[p]);
    if (partiesPresent.length === 0) {
      const row = document.createElement("div");
      row.className = "party-row";
      row.style.color = "#94a3b8";
      row.style.fontSize = ".8rem";
      row.textContent = "Candidates filing in progress";
      summaryEl.appendChild(row);
    } else {
      partiesPresent.forEach(party => {
        const row = document.createElement("div");
        row.className = "party-row";

        const dot = document.createElement("span");
        dot.className = "party-dot " + party.toLowerCase();

        const label = document.createElement("span");
        label.className = "party-label";
        label.textContent = party;

        const count = document.createElement("span");
        count.className = "party-count";
        count.textContent = summary[party] + " candidate" + (summary[party] !== 1 ? "s" : "");

        row.appendChild(dot);
        row.appendChild(label);
        row.appendChild(count);
        summaryEl.appendChild(row);
      });
    }

    card.appendChild(summaryEl);

    // View more link
    const viewMore = document.createElement("div");
    viewMore.className = "view-more";
    viewMore.innerHTML = "View candidates <span>→</span>";
    card.appendChild(viewMore);

    return card;
  }

  /** Render all state cards into the grid */
  function renderGrid(states) {
    const grid = document.getElementById("stateGrid");
    if (!grid) return;
    grid.innerHTML = "";
    states.forEach(s => grid.appendChild(buildStateCard(s)));
    updateCount(states.length);
  }

  function updateCount(n) {
    const el = document.getElementById("resultsCount");
    if (el) el.textContent = n + " state" + (n !== 1 ? "s" : "");
  }

  /** Filter & search logic */
  function applyFilters() {
    const searchVal = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
    const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";

    const filtered = ALL_STATES.filter(state => {
      // Search filter
      if (searchVal && !state.toLowerCase().includes(searchVal) &&
          !(STATE_ABBRS[state] || "").toLowerCase().includes(searchVal)) {
        return false;
      }

      // Race filter
      if (activeFilter !== "all") {
        const { raceTypes } = getPartySummary(state);
        const lcTypes = raceTypes.map(r => r.toLowerCase());
        if (!lcTypes.includes(activeFilter)) return false;
      }

      return true;
    });

    renderGrid(filtered);
  }

  /** Initialise the page */
  function init() {
    renderGrid(ALL_STATES);

    // Search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilters();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
