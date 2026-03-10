/**
 * state.js – Logic for the state detail page (state.html)
 * Reads ?state=<StateName> from the URL and renders all primary
 * candidates for that state, grouped by race and party.
 */

(function () {
  "use strict";

  const PARTY_ORDER = ["Republican", "Democrat", "Independent", "Libertarian", "Green"];

  const RACE_ICONS = {
    Senate:   "🏛️",
    Governor: "🗳️"
  };

  /** Build the party column element */
  function buildPartyColumn(party, candidates) {
    const colors = PARTY_COLORS[party] || PARTY_COLORS["Independent"];

    const col = document.createElement("div");
    col.className = "party-column";
    col.style.borderColor = colors.border;

    // Header
    const header = document.createElement("div");
    header.className = "party-column-header";
    header.style.cssText = `background:${colors.bg};color:${colors.text};`;

    const partyDot = document.createElement("span");
    partyDot.style.cssText =
      `display:inline-block;width:10px;height:10px;border-radius:50%;` +
      `background:${colors.badge};flex-shrink:0;`;

    const partyLabel = document.createElement("span");
    partyLabel.textContent = party;

    const countBadge = document.createElement("span");
    const knownCount = candidates.filter(c => c.status !== "TBD").length;
    countBadge.style.cssText =
      `margin-left:auto;font-size:.72rem;font-weight:700;` +
      `background:${colors.badge};color:#fff;padding:.1rem .45rem;border-radius:999px;`;
    countBadge.textContent = knownCount + " known";

    header.appendChild(partyDot);
    header.appendChild(partyLabel);
    header.appendChild(countBadge);
    col.appendChild(header);

    // Candidate list
    const list = document.createElement("div");
    list.className = "candidate-list";

    if (!candidates || candidates.length === 0) {
      const emptyItem = document.createElement("div");
      emptyItem.className = "candidate-item";
      emptyItem.style.color = "#94a3b8";
      emptyItem.style.fontSize = ".85rem";
      emptyItem.textContent = "No candidates announced yet.";
      list.appendChild(emptyItem);
    } else {
      candidates.forEach(candidate => {
        const item = document.createElement("div");
        item.className = "candidate-item";

        const nameEl = document.createElement("div");
        nameEl.className = "candidate-name";
        nameEl.textContent = candidate.name;

        const badges = document.createElement("div");
        badges.className = "candidate-badges";

        if (candidate.incumbent) {
          const incBadge = document.createElement("span");
          incBadge.className = "badge-incumbent";
          incBadge.textContent = "Incumbent";
          badges.appendChild(incBadge);
        }

        if (candidate.status && candidate.status !== "TBD") {
          const statusStyle = STATUS_STYLES[candidate.status] || STATUS_STYLES["TBD"];
          const statusBadge = document.createElement("span");
          statusBadge.className = "badge-status";
          statusBadge.style.cssText =
            `background:${statusStyle.bg};color:${statusStyle.text};`;
          statusBadge.textContent = candidate.status;
          badges.appendChild(statusBadge);
        }

        item.appendChild(nameEl);
        item.appendChild(badges);
        list.appendChild(item);
      });
    }

    col.appendChild(list);
    return col;
  }

  /** Build a race section (e.g. "Senate" or "Governor") */
  function buildRaceSection(raceName, partiesData) {
    const section = document.createElement("section");
    section.className = "race-section";

    const title = document.createElement("h2");
    title.className = "race-title";
    title.innerHTML =
      `<span class="race-icon">${RACE_ICONS[raceName] || "🗳️"}</span>` +
      `${raceName === "Senate" ? "U.S. Senate" : raceName} Primary Candidates`;
    section.appendChild(title);

    const colGrid = document.createElement("div");
    colGrid.className = "party-columns";

    // Render in party order, include any extra parties not in the order list
    const allParties = [
      ...PARTY_ORDER.filter(p => partiesData[p]),
      ...Object.keys(partiesData).filter(p => !PARTY_ORDER.includes(p))
    ];

    if (allParties.length === 0) {
      const notice = document.createElement("div");
      notice.className = "no-races-notice";
      notice.textContent = "No primary candidates have been announced for this race yet.";
      section.appendChild(notice);
    } else {
      allParties.forEach(party => {
        colGrid.appendChild(buildPartyColumn(party, partiesData[party] || []));
      });
      section.appendChild(colGrid);
    }

    return section;
  }

  /** Main render function for the state detail page */
  function renderStatePage(stateName) {
    // Update page title & header
    document.title = `${stateName} – 2026 Primary Election Candidates`;
    const h1 = document.getElementById("stateTitle");
    const subtitle = document.getElementById("stateSubtitle");
    if (h1) h1.textContent = stateName;
    if (subtitle) subtitle.textContent = "2026 Primary Election Candidates by Race & Party";

    const container = document.getElementById("racesContainer");
    if (!container) return;
    container.innerHTML = "";

    const stateData = CANDIDATES[stateName];

    if (!stateData || Object.keys(stateData).length === 0) {
      const notice = document.createElement("div");
      notice.className = "no-races-notice";
      notice.innerHTML =
        "<strong>No federal or gubernatorial primary races scheduled for 2026 in " +
        stateName + ".</strong><br>Check back as the election cycle progresses.";
      container.appendChild(notice);
      return;
    }

    // Render each race type
    const raceOrder = ["Senate", "Governor"];
    const allRaces = [
      ...raceOrder.filter(r => stateData[r] && Object.keys(stateData[r]).length > 0),
      ...Object.keys(stateData).filter(
        r => !raceOrder.includes(r) && Object.keys(stateData[r]).length > 0
      )
    ];

    if (allRaces.length === 0) {
      const notice = document.createElement("div");
      notice.className = "no-races-notice";
      notice.innerHTML =
        "<strong>No primary races with candidates found for " + stateName + ".</strong>";
      container.appendChild(notice);
      return;
    }

    allRaces.forEach(race => {
      container.appendChild(buildRaceSection(race, stateData[race]));
    });
  }

  function init() {
    // Read state from URL parameter
    const params = new URLSearchParams(window.location.search);
    const stateName = decodeURIComponent(params.get("state") || "");

    const backLink = document.getElementById("backLink");
    if (backLink) backLink.href = "index.html";

    if (!stateName || !ALL_STATES.includes(stateName)) {
      const container = document.getElementById("racesContainer");
      if (container) {
        container.innerHTML =
          '<div class="no-races-notice"><strong>State not found.</strong> ' +
          '<a href="index.html">Return to all states</a>.</div>';
      }
      const h1 = document.getElementById("stateTitle");
      if (h1) h1.textContent = "State Not Found";
      return;
    }

    renderStatePage(stateName);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
