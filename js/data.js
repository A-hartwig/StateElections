/**
 * 2026 Senate & House Primary Races
 *
 * Covers the 47 states that hold traditional partisan primaries —
 * California, Washington, and Alaska use non-partisan top-two or
 * ranked-choice primary systems, so party voters in those states do
 * not separately select their nominee.
 *
 * Senate: Class 2 seats (last elected 2020, up for re-election in 2026).
 * House:  All 435 seats are contested every two years.
 *
 * Candidate status values:
 *   "Running"    – incumbent who has announced re-election bid
 *   "Announced"  – non-incumbent who has formally entered the race
 *   "Exploring"  – publicly weighing a run but not yet officially in
 *   "TBD"        – no candidate announced; filing period still open
 */

// ---------------------------------------------------------------------------
// The 47 states with traditional partisan primaries
// ---------------------------------------------------------------------------
const PRIMARY_STATES = [
  "Alabama", "Arizona", "Arkansas", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "West Virginia",
  "Wisconsin", "Wyoming"
];

// ---------------------------------------------------------------------------
// Senate Races – 2026 Class 2 seats
// Only states from PRIMARY_STATES that have a Senate race in 2026 are listed.
// ---------------------------------------------------------------------------
const SENATE_RACES = {
  Alabama: {
    incumbent: "Tommy Tuberville",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Tommy Tuberville", incumbent: true,  status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Arkansas: {
    incumbent: "Tom Cotton",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Tom Cotton", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Colorado: {
    incumbent: "John Hickenlooper",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "John Hickenlooper", incumbent: true, status: "Running" }
      ]
    }
  },

  Delaware: {
    incumbent: "Chris Coons",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Chris Coons", incumbent: true, status: "Running" }
      ]
    }
  },

  Florida: {
    incumbent: "Marco Rubio (vacated)",
    incumbentParty: "Republican",
    openSeat: true,
    note: "Special election to fill the seat vacated when Rubio became Secretary of State. Primary dates subject to change.",
    candidates: {
      Republican: [
        { name: "TBD – Candidates Announcing", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "TBD – Candidates Announcing", incumbent: false, status: "TBD" }
      ]
    }
  },

  Georgia: {
    incumbent: "Jon Ossoff",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Jon Ossoff", incumbent: true, status: "Running" }
      ]
    }
  },

  Idaho: {
    incumbent: "Jim Risch",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Jim Risch", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Illinois: {
    incumbent: "Dick Durbin (retiring)",
    incumbentParty: "Democrat",
    openSeat: true,
    note: "Dick Durbin is retiring after 28 years, creating one of the most competitive Democratic primaries in the country.",
    candidates: {
      Republican: [
        { name: "TBD – Candidates Announcing", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Raja Krishnamoorthi",  incumbent: false, status: "Announced" },
        { name: "Robin Kelly",          incumbent: false, status: "Announced" },
        { name: "Brad Schneider",       incumbent: false, status: "Announced" },
        { name: "Lauren Underwood",     incumbent: false, status: "Exploring" },
        { name: "Juliana Stratton",     incumbent: false, status: "Announced" }
      ]
    }
  },

  Iowa: {
    incumbent: "Joni Ernst",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Joni Ernst", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Kansas: {
    incumbent: "Roger Marshall",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Roger Marshall", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Kentucky: {
    incumbent: "Mitch McConnell (retiring)",
    incumbentParty: "Republican",
    openSeat: true,
    note: "Mitch McConnell is not seeking re-election, opening one of the most-watched Republican primaries of the cycle.",
    candidates: {
      Republican: [
        { name: "Daniel Cameron",  incumbent: false, status: "Announced" },
        { name: "Andy Barr",       incumbent: false, status: "Announced" },
        { name: "Hal Rogers",      incumbent: false, status: "Exploring" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Louisiana: {
    incumbent: "Bill Cassidy",
    incumbentParty: "Republican",
    openSeat: false,
    note: "Louisiana uses a jungle-primary system; all candidates appear on one ballot and the top two advance to a runoff if no one wins a majority.",
    candidates: {
      Republican: [
        { name: "Bill Cassidy", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Maine: {
    incumbent: "Susan Collins",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Susan Collins", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Massachusetts: {
    incumbent: "Ed Markey",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Ed Markey", incumbent: true, status: "Running" }
      ]
    }
  },

  Michigan: {
    incumbent: "Gary Peters (retiring)",
    incumbentParty: "Democrat",
    openSeat: true,
    note: "Gary Peters is retiring, creating an open seat battle in a key battleground state.",
    candidates: {
      Republican: [
        { name: "Mike Rogers",     incumbent: false, status: "Announced" },
        { name: "James Craig",     incumbent: false, status: "Exploring" }
      ],
      Democrat: [
        { name: "Haley Stevens",   incumbent: false, status: "Announced" },
        { name: "Hillary Scholten", incumbent: false, status: "Announced" }
      ]
    }
  },

  Minnesota: {
    incumbent: "Tina Smith (retiring)",
    incumbentParty: "Democrat",
    openSeat: true,
    note: "Tina Smith is not seeking re-election, opening both party primaries.",
    candidates: {
      Republican: [
        { name: "TBD – Candidates Announcing", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "TBD – Candidates Announcing", incumbent: false, status: "TBD" }
      ]
    }
  },

  Mississippi: {
    incumbent: "Cindy Hyde-Smith",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Cindy Hyde-Smith", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Montana: {
    incumbent: "Steve Daines",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Steve Daines", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Nebraska: {
    incumbent: "Pete Ricketts",
    incumbentParty: "Republican",
    openSeat: false,
    note: "Ricketts was appointed in January 2023 to fill the seat vacated by Ben Sasse and must run in 2026 for a full term.",
    candidates: {
      Republican: [
        { name: "Pete Ricketts", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  "New Hampshire": {
    incumbent: "Jeanne Shaheen (retiring)",
    incumbentParty: "Democrat",
    openSeat: true,
    note: "Jeanne Shaheen is not seeking re-election after four terms.",
    candidates: {
      Republican: [
        { name: "Kelly Ayotte",    incumbent: false, status: "Exploring" },
        { name: "Don Bolduc",      incumbent: false, status: "Exploring" }
      ],
      Democrat: [
        { name: "Chris Pappas",    incumbent: false, status: "Announced" }
      ]
    }
  },

  "New Jersey": {
    incumbent: "Andy Kim",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "Andy Kim won the 2024 general election for the Class 2 seat previously held by Bob Menendez.",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Andy Kim", incumbent: true, status: "Running" }
      ]
    }
  },

  "New Mexico": {
    incumbent: "Martin Heinrich",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Martin Heinrich", incumbent: true, status: "Running" }
      ]
    }
  },

  "North Carolina": {
    incumbent: "Thom Tillis",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Thom Tillis", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Oklahoma: {
    incumbent: "James Lankford",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "James Lankford", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Oregon: {
    incumbent: "Jeff Merkley",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Jeff Merkley", incumbent: true, status: "Running" }
      ]
    }
  },

  "Rhode Island": {
    incumbent: "Sheldon Whitehouse",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Sheldon Whitehouse", incumbent: true, status: "Running" }
      ]
    }
  },

  "South Carolina": {
    incumbent: "Tim Scott",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Tim Scott", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  "South Dakota": {
    incumbent: "Mike Rounds",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Mike Rounds", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Tennessee: {
    incumbent: "Bill Hagerty",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "Bill Hagerty", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Texas: {
    incumbent: "John Cornyn",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "John Cornyn", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Virginia: {
    incumbent: "Mark Warner",
    incumbentParty: "Democrat",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "Mark Warner", incumbent: true, status: "Running" }
      ]
    }
  },

  "West Virginia": {
    incumbent: "Jim Justice",
    incumbentParty: "Republican",
    openSeat: false,
    note: "Jim Justice won the 2024 general election for the seat previously held by Joe Manchin.",
    candidates: {
      Republican: [
        { name: "Jim Justice", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },

  Wyoming: {
    incumbent: "John Barrasso",
    incumbentParty: "Republican",
    openSeat: false,
    note: "",
    candidates: {
      Republican: [
        { name: "John Barrasso", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  }
};

// ---------------------------------------------------------------------------
// House Races – 2026 (all 435 seats contested; data for 47 primary states)
// District counts reflect current apportionment after the 2020 Census.
// Candidate lists grow throughout the filing season; many are still TBD.
// ---------------------------------------------------------------------------

/** Number of congressional districts per state (47 primary states only). */
const HOUSE_DISTRICT_COUNTS = {
  Alabama: 7,   Arizona: 9,     Arkansas: 4,   Colorado: 8,
  Connecticut: 5, Delaware: 1,  Florida: 28,   Georgia: 14,
  Hawaii: 2,    Idaho: 2,       Illinois: 17,  Indiana: 9,
  Iowa: 4,      Kansas: 4,      Kentucky: 6,   Louisiana: 6,
  Maine: 2,     Maryland: 8,    Massachusetts: 9, Michigan: 13,
  Minnesota: 8, Mississippi: 4, Missouri: 8,   Montana: 2,
  Nebraska: 3,  Nevada: 4,      "New Hampshire": 2, "New Jersey": 12,
  "New Mexico": 3, "New York": 26, "North Carolina": 14, "North Dakota": 1,
  Ohio: 15,     Oklahoma: 5,    Oregon: 6,     Pennsylvania: 17,
  "Rhode Island": 2, "South Carolina": 7, "South Dakota": 1, Tennessee: 9,
  Texas: 38,    Utah: 4,        Vermont: 1,    Virginia: 11,
  "West Virginia": 2, Wisconsin: 8, Wyoming: 1
};

/**
 * Known House race candidates.
 * Format: HOUSE_RACES[state][district] = { note, candidates: { Republican: [], Democrat: [] } }
 * Districts not listed below default to "TBD – Filing Period Open".
 */
const HOUSE_RACES = {
  // ── Alabama ───────────────────────────────────────────────────────────────
  Alabama: {
    1: { candidates: { Republican: [{ name: "Barry Moore",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] }, note: "New seat created by redistricting; majority-minority district." },
    3: { candidates: { Republican: [{ name: "Mike Rogers",      incumbent: false, status: "TBD" }],  Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Robert Aderholt",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Dale Strong",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Gary Palmer",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Terri Sewell",       incumbent: true,  status: "Running" }] } }
  },

  // ── Arizona ───────────────────────────────────────────────────────────────
  Arizona: {
    1: { candidates: { Republican: [{ name: "David Schweikert", incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Tom O'Halleran",    incumbent: false, status: "Exploring" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Ruben Gallego (Senate 2024)", incumbent: false, status: "TBD" }], note: "Gallego won AZ Senate seat in 2024; seat is now open." } },
    4: { candidates: { Republican: [{ name: "Greg Stanton",     incumbent: false, status: "TBD" }],   Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Andy Biggs",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Juan Ciscomani",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Raúl Grijalva",      incumbent: true,  status: "Running" }] } },
    8: { candidates: { Republican: [{ name: "Debbie Lesko (retiring)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Lesko announced retirement." } },
    9: { candidates: { Republican: [{ name: "Paul Gosar",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Arkansas ──────────────────────────────────────────────────────────────
  Arkansas: {
    1: { candidates: { Republican: [{ name: "Rick Crawford",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "French Hill",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Steve Womack",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Bruce Westerman",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Colorado ──────────────────────────────────────────────────────────────
  Colorado: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Diana DeGette",     incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Joe Neguse",        incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "Jeff Hurd",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Lauren Boebert",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Doug Lamborn",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jason Crow",        incumbent: true,  status: "Running" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Brittany Pettersen", incumbent: true, status: "Running" }] } },
    8: { candidates: { Republican: [{ name: "Gabe Evans",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Connecticut ───────────────────────────────────────────────────────────
  Connecticut: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "John Larson",      incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Joe Courtney",     incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Rosa DeLauro",     incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jim Himes",        incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jahana Hayes",     incumbent: true,  status: "Running" }] } }
  },

  // ── Delaware ──────────────────────────────────────────────────────────────
  Delaware: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sarah McBride",    incumbent: true,  status: "Running" }] } }
  },

  // ── Florida ───────────────────────────────────────────────────────────────
  Florida: {
    1:  { candidates: { Republican: [{ name: "Matt Gaetz (vacated)",    incumbent: false, status: "TBD" }],  Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Gaetz resigned; special election scheduled." } },
    2:  { candidates: { Republican: [{ name: "Neal Dunn",               incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "Kat Cammack",             incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4:  { candidates: { Republican: [{ name: "Aaron Bean",              incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "John Rutherford",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "Michael Waltz (vacated)", incumbent: false, status: "TBD" }],  Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Waltz became National Security Advisor; special election scheduled." } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Cory Mills",        incumbent: false, status: "TBD" }] } },
    8:  { candidates: { Republican: [{ name: "Bill Posey",              incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Darren Soto",        incumbent: true,  status: "Running" }] } },
    10: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Maxwell Frost",      incumbent: true,  status: "Running" }] } },
    11: { candidates: { Republican: [{ name: "Daniel Webster",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "Gus Bilirakis",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    13: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Kathy Castor",       incumbent: true,  status: "Running" }] } },
    14: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    15: { candidates: { Republican: [{ name: "Laurel Lee",              incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    16: { candidates: { Republican: [{ name: "Vern Buchanan",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    17: { candidates: { Republican: [{ name: "Greg Steube",             incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    18: { candidates: { Republican: [{ name: "Brian Mast",              incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    19: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    20: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sheila Cherfilus-McCormick", incumbent: true, status: "Running" }] } },
    21: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lois Frankel",        incumbent: true,  status: "Running" }] } },
    22: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    23: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jared Moskowitz",    incumbent: true,  status: "Running" }] } },
    24: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Frederica Wilson",    incumbent: true,  status: "Running" }] } },
    25: { candidates: { Republican: [{ name: "Mario Díaz-Balart",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    26: { candidates: { Republican: [{ name: "Carlos Giménez",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    27: { candidates: { Republican: [{ name: "María Elvira Salazar",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    28: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Georgia ───────────────────────────────────────────────────────────────
  Georgia: {
    1:  { candidates: { Republican: [{ name: "Buddy Carter",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sanford Bishop",     incumbent: true,  status: "Running" }] } },
    3:  { candidates: { Republican: [{ name: "Brian Jack",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Hank Johnson",       incumbent: true,  status: "Running" }] } },
    5:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Nikema Williams",    incumbent: true,  status: "Running" }] } },
    6:  { candidates: { Republican: [{ name: "Rich McCormick",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lucy McBath",        incumbent: true,  status: "Running" }] } },
    8:  { candidates: { Republican: [{ name: "Austin Scott",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9:  { candidates: { Republican: [{ name: "Andrew Clyde",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    10: { candidates: { Republican: [{ name: "Mike Collins",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "Barry Loudermilk",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "Rick Allen",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    13: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "David Scott",         incumbent: true,  status: "Running" }] } },
    14: { candidates: { Republican: [{ name: "Marjorie Taylor Greene", incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Hawaii ────────────────────────────────────────────────────────────────
  Hawaii: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Ed Case",           incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jill Tokuda",        incumbent: true,  status: "Running" }] } }
  },

  // ── Idaho ─────────────────────────────────────────────────────────────────
  Idaho: {
    1: { candidates: { Republican: [{ name: "Russ Fulcher",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Mike Simpson",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Illinois ──────────────────────────────────────────────────────────────
  Illinois: {
    1:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jonathan Jackson",   incumbent: true,  status: "Running" }] } },
    2:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Robin Kelly",        incumbent: true,  status: "Running" }], note: "Kelly may vacate to run for Senate." } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Delia Ramirez",      incumbent: true,  status: "Running" }] } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Chuy García",        incumbent: true,  status: "Running" }] } },
    5:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Mike Quigley",       incumbent: true,  status: "Running" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sean Casten",        incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Danny Davis",        incumbent: true,  status: "Running" }] } },
    8:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Raja Krishnamoorthi", incumbent: true,  status: "Running" }], note: "Krishnamoorthi is also running for Senate." } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jan Schakowsky",     incumbent: true,  status: "Running" }] } },
    10: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Brad Schneider",     incumbent: true,  status: "Running" }], note: "Schneider is also running for Senate." } },
    11: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bill Foster",        incumbent: true,  status: "Running" }] } },
    12: { candidates: { Republican: [{ name: "Mike Bost",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    13: { candidates: { Republican: [{ name: "Nikki Budzinski (lost 2024)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    14: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lauren Underwood",   incumbent: true,  status: "Running" }], note: "Underwood is also exploring Senate race." } },
    15: { candidates: { Republican: [{ name: "Mary Miller",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    16: { candidates: { Republican: [{ name: "Darin LaHood",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    17: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Eric Sorensen",      incumbent: true,  status: "Running" }] } }
  },

  // ── Indiana ───────────────────────────────────────────────────────────────
  Indiana: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Frank Mrvan",       incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "Rudy Yakym",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Marlin Stutzman",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Jim Baird",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Victoria Spartz",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Greg Pence",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "André Carson",      incumbent: true,  status: "Running" }] } },
    8: { candidates: { Republican: [{ name: "Mark Messmer",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9: { candidates: { Republican: [{ name: "Erin Houchin",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Iowa ──────────────────────────────────────────────────────────────────
  Iowa: {
    1: { candidates: { Republican: [{ name: "Mariannette Miller-Meeks", incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Ashley Hinson",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Zach Nunn",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Randy Feenstra",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Kansas ────────────────────────────────────────────────────────────────
  Kansas: {
    1: { candidates: { Republican: [{ name: "Tracey Mann",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Jake LaTurner",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sharice Davids",     incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "Ron Estes",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Kentucky ──────────────────────────────────────────────────────────────
  Kentucky: {
    1: { candidates: { Republican: [{ name: "James Comer",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Brett Guthrie",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Morgan McGarvey",    incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "Thomas Massie",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Harold Rogers",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Andy Barr",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Barr is also exploring the Senate race." } }
  },

  // ── Louisiana ─────────────────────────────────────────────────────────────
  Louisiana: {
    1: { candidates: { Republican: [{ name: "Steve Scalise",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Troy Carter",        incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "Clay Higgins",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Mike Johnson",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Julia Letlow",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Garret Graves",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Maine ─────────────────────────────────────────────────────────────────
  Maine: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Chellie Pingree",    incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "Austin Theriault",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Maryland ──────────────────────────────────────────────────────────────
  Maryland: {
    1: { candidates: { Republican: [{ name: "Andy Harris",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Dutch Ruppersberger", incumbent: true, status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sarah Elfreth",      incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Glenn Ivey",         incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Steny Hoyer",        incumbent: true,  status: "Running" }] } },
    6: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "April McClain Delaney", incumbent: true, status: "Running" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Kweisi Mfume",       incumbent: true,  status: "Running" }] } },
    8: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jamie Raskin",       incumbent: true,  status: "Running" }] } }
  },

  // ── Massachusetts ─────────────────────────────────────────────────────────
  Massachusetts: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Richard Neal",       incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jim McGovern",       incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lori Trahan",        incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jake Auchincloss",   incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Katherine Clark",    incumbent: true,  status: "Running" }] } },
    6: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Seth Moulton",       incumbent: true,  status: "Running" }] } },
    7: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Ayanna Pressley",    incumbent: true,  status: "Running" }] } },
    8: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Stephen Lynch",      incumbent: true,  status: "Running" }] } },
    9: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bill Keating",       incumbent: true,  status: "Running" }] } }
  },

  // ── Michigan ──────────────────────────────────────────────────────────────
  Michigan: {
    1:  { candidates: { Republican: [{ name: "Jack Bergman",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "John Moolenaar",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Hillary Scholten",   incumbent: true,  status: "Running" }], note: "Scholten also exploring Senate race." } },
    4:  { candidates: { Republican: [{ name: "Bill Huizenga",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "Tim Walberg",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Debbie Dingell",      incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "Tom Barrett",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8:  { candidates: { Republican: [{ name: "Paul Junge",          incumbent: false, status: "Announced" }], Democrat: [{ name: "Kristen McDonald Rivet", incumbent: true, status: "Running" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Clinton St. Onge",   incumbent: false, status: "TBD" }] } },
    10: { candidates: { Republican: [{ name: "John James",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Haley Stevens",       incumbent: true,  status: "Running" }], note: "Stevens also running for Senate." } },
    12: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Rashida Tlaib",       incumbent: true,  status: "Running" }] } },
    13: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Shri Thanedar",       incumbent: true,  status: "Running" }] } }
  },

  // ── Minnesota ─────────────────────────────────────────────────────────────
  Minnesota: {
    1: { candidates: { Republican: [{ name: "Brad Finstad",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Angie Craig (lost 2024)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Kelly Morrison",     incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Betty McCollum",     incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Ilhan Omar",         incumbent: true,  status: "Running" }] } },
    6: { candidates: { Republican: [{ name: "Tom Emmer",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "Michelle Fischbach", incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8: { candidates: { Republican: [{ name: "Pete Stauber",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Mississippi ───────────────────────────────────────────────────────────
  Mississippi: {
    1: { candidates: { Republican: [{ name: "Trent Kelly",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bennie Thompson",    incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "Michael Guest",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Mike Ezell",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Missouri ──────────────────────────────────────────────────────────────
  Missouri: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Cori Bush (lost primary 2024)", incumbent: false, status: "TBD" }], note: "Cori Bush lost 2024 primary to Wesley Bell." } },
    2: { candidates: { Republican: [{ name: "Ann Wagner",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Blaine Luetkemeyer (retiring)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Mark Alford",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Emanuel Cleaver",    incumbent: true,  status: "Running" }] } },
    6: { candidates: { Republican: [{ name: "Sam Graves",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "Eric Burlison",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8: { candidates: { Republican: [{ name: "Jason Smith",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Montana ───────────────────────────────────────────────────────────────
  Montana: {
    1: { candidates: { Republican: [{ name: "Ryan Zinke",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Troy Downing",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Nebraska ──────────────────────────────────────────────────────────────
  Nebraska: {
    1: { candidates: { Republican: [{ name: "Mike Flood",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Don Bacon",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Adrian Smith",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Nevada ────────────────────────────────────────────────────────────────
  Nevada: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Dina Titus",         incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "Mark Amodei",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Drew Johnson",     incumbent: false, status: "Announced" }], Democrat: [{ name: "Susie Lee",          incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Steven Horsford",    incumbent: true,  status: "Running" }] } }
  },

  // ── New Hampshire ─────────────────────────────────────────────────────────
  "New Hampshire": {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Chris Pappas",      incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Annie Kuster",      incumbent: true,  status: "Running" }] } }
  },

  // ── New Jersey ────────────────────────────────────────────────────────────
  "New Jersey": {
    1:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Donald Norcross",   incumbent: true,  status: "Running" }] } },
    2:  { candidates: { Republican: [{ name: "Jeff Van Drew",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Herb Conaway",       incumbent: true,  status: "Running" }] } },
    4:  { candidates: { Republican: [{ name: "Chris Smith",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Josh Gottheimer",    incumbent: true,  status: "Running" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Frank Pallone",      incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "Tom Kean Jr.",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Rob Menendez",       incumbent: true,  status: "Running" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bill Pascrell Jr. (retiring)", incumbent: false, status: "TBD" }], note: "Pascrell announced retirement." } },
    10: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "LaMonica McIver",    incumbent: true,  status: "Running" }] } },
    11: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Mikie Sherrill",      incumbent: true,  status: "Running" }] } },
    12: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bonnie Watson Coleman", incumbent: true, status: "Running" }] } }
  },

  // ── New Mexico ────────────────────────────────────────────────────────────
  "New Mexico": {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Melanie Stansbury",  incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "Gabe Vasquez (lost 2024)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Teresa Leger Fernández", incumbent: true, status: "Running" }] } }
  },

  // ── New York ──────────────────────────────────────────────────────────────
  "New York": {
    1:  { candidates: { Republican: [{ name: "Nick LaLota",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "Andrew Garbarino",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "George Santos (expelled)", incumbent: false, status: "TBD" }], Democrat: [{ name: "Tom Suozzi",         incumbent: true,  status: "Running" }], note: "Tom Suozzi won the February 2024 special election." } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Anthony D'Esposito",  incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Gregory Meeks",       incumbent: true,  status: "Running" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Grace Meng",          incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Nydia Velázquez",      incumbent: true,  status: "Running" }] } },
    8:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Hakeem Jeffries",      incumbent: true,  status: "Running" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Yvette Clarke",        incumbent: true,  status: "Running" }] } },
    10: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Dan Goldman",          incumbent: true,  status: "Running" }] } },
    11: { candidates: { Republican: [{ name: "Nicole Malliotakis",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jerry Nadler",          incumbent: true,  status: "Running" }] } },
    13: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Adriano Espaillat",    incumbent: true,  status: "Running" }] } },
    14: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Alexandria Ocasio-Cortez", incumbent: true, status: "Running" }] } },
    15: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Ritchie Torres",        incumbent: true,  status: "Running" }] } },
    16: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jamaal Bowman (lost primary 2024)", incumbent: false, status: "TBD" }], note: "George Latimer won primary over Bowman in 2024." } },
    17: { candidates: { Republican: [{ name: "Mike Lawler",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    18: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Pat Ryan",              incumbent: true,  status: "Running" }] } },
    19: { candidates: { Republican: [{ name: "Marc Molinaro",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    20: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Paul Tonko",            incumbent: true,  status: "Running" }] } },
    21: { candidates: { Republican: [{ name: "Elise Stefanik (vacated)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Stefanik left for UN Ambassador; special election held." } },
    22: { candidates: { Republican: [{ name: "Brandon Williams",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    23: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    24: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    25: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Joseph Morelle",        incumbent: true,  status: "Running" }] } },
    26: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Brian Higgins (resigned)", incumbent: false, status: "TBD" }], note: "Tim Kennedy won special election for Higgins' vacated seat." } }
  },

  // ── North Carolina ────────────────────────────────────────────────────────
  "North Carolina": {
    1:  { candidates: { Republican: [{ name: "Don Davis (lost 2024)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Valerie Foushee",     incumbent: true,  status: "Running" }] } },
    3:  { candidates: { Republican: [{ name: "Greg Murphy",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "David Price (retiring)", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "Virginia Foxx",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Kathy Manning",       incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "David Rouzer",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8:  { candidates: { Republican: [{ name: "Richard Hudson",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jeff Jackson (left for AG)", incumbent: false, status: "TBD" }], note: "Jackson ran for state AG in 2024." } },
    10: { candidates: { Republican: [{ name: "Patrick McHenry (retired)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "Chuck Edwards",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Alma Adams",          incumbent: true,  status: "Running" }] } },
    13: { candidates: { Republican: [{ name: "Jeff Clark",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    14: { candidates: { Republican: [{ name: "Tim Moore",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── North Dakota ──────────────────────────────────────────────────────────
  "North Dakota": {
    1: { candidates: { Republican: [{ name: "Kelly Armstrong (left for Gov)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], note: "Armstrong left Congress to successfully run for governor." } }
  },

  // ── Ohio ──────────────────────────────────────────────────────────────────
  Ohio: {
    1:  { candidates: { Republican: [{ name: "Steve Chabot (lost 2022)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "Brad Wenstrup (retired)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Joyce Beatty",         incumbent: true,  status: "Running" }] } },
    4:  { candidates: { Republican: [{ name: "Jim Jordan",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "Bob Latta",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "Michael Rulli",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7:  { candidates: { Republican: [{ name: "Max Miller",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8:  { candidates: { Republican: [{ name: "Warren Davidson",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Marcy Kaptur",          incumbent: true,  status: "Running" }] } },
    10: { candidates: { Republican: [{ name: "Mike Turner",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Shontel Brown",         incumbent: true,  status: "Running" }] } },
    12: { candidates: { Republican: [{ name: "Troy Balderson",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    13: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Emilia Sykes",          incumbent: true,  status: "Running" }] } },
    14: { candidates: { Republican: [{ name: "Dave Joyce",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    15: { candidates: { Republican: [{ name: "Mike Carey",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Oklahoma ──────────────────────────────────────────────────────────────
  Oklahoma: {
    1: { candidates: { Republican: [{ name: "Kevin Hern",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Tom Cole",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Frank Lucas",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Tom Cole (2nd seat?)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Stephanie Bice",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Oregon ────────────────────────────────────────────────────────────────
  Oregon: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Suzanne Bonamici",   incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "Cliff Bentz",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Maxine Dexter",       incumbent: true,  status: "Running" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Val Hoyle",           incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "Lori Chavez-DeRemer (Senate 2024)", incumbent: false, status: "TBD" }], Democrat: [{ name: "Janelle Bynum", incumbent: false, status: "TBD" }], note: "Chavez-DeRemer left for Cabinet; Bynum ran in 2024." } },
    6: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Andrea Salinas (lost 2024)", incumbent: false, status: "TBD" }] } }
  },

  // ── Pennsylvania ──────────────────────────────────────────────────────────
  Pennsylvania: {
    1:  { candidates: { Republican: [{ name: "Brian Fitzpatrick",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Brendan Boyle",       incumbent: true,  status: "Running" }] } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Dwight Evans",         incumbent: true,  status: "Running" }] } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Madeleine Dean",       incumbent: true,  status: "Running" }] } },
    5:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Mary Gay Scanlon",    incumbent: true,  status: "Running" }] } },
    6:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Chrissy Houlahan",    incumbent: true,  status: "Running" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Susan Wild",           incumbent: true,  status: "Running" }] } },
    8:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Matt Cartwright",     incumbent: true,  status: "Running" }] } },
    9:  { candidates: { Republican: [{ name: "Dan Meuser",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    10: { candidates: { Republican: [{ name: "Scott Perry",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "Lloyd Smucker",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Summer Lee",           incumbent: true,  status: "Running" }] } },
    13: { candidates: { Republican: [{ name: "John Joyce",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    14: { candidates: { Republican: [{ name: "Guy Reschenthaler",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    15: { candidates: { Republican: [{ name: "Glenn Thompson",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    16: { candidates: { Republican: [{ name: "Mike Kelly",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    17: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Chris Deluzio",        incumbent: true,  status: "Running" }] } }
  },

  // ── Rhode Island ──────────────────────────────────────────────────────────
  "Rhode Island": {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Gabe Amo",            incumbent: true,  status: "Running" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Seth Magaziner",     incumbent: true,  status: "Running" }] } }
  },

  // ── South Carolina ────────────────────────────────────────────────────────
  "South Carolina": {
    1: { candidates: { Republican: [{ name: "Nancy Mace",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Joe Wilson",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Jeff Duncan",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "William Timmons",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Ralph Norman",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "James Clyburn",      incumbent: true,  status: "Running" }] } },
    7: { candidates: { Republican: [{ name: "Russell Fry",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── South Dakota ──────────────────────────────────────────────────────────
  "South Dakota": {
    1: { candidates: { Republican: [{ name: "Dusty Johnson",    incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Tennessee ─────────────────────────────────────────────────────────────
  Tennessee: {
    1: { candidates: { Republican: [{ name: "Diana Harshbarger", incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Tim Burchett",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Chuck Fleischmann", incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Scott DesJarlais",  incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5: { candidates: { Republican: [{ name: "Andy Ogles",        incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "John Rose",         incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "Mark Green",        incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8: { candidates: { Republican: [{ name: "David Kustoff",     incumbent: true, status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Steve Cohen",          incumbent: true,  status: "Running" }] } }
  },

  // ── Texas ─────────────────────────────────────────────────────────────────
  Texas: {
    1:  { candidates: { Republican: [{ name: "Nathaniel Moran",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "Dan Crenshaw",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "Keith Self",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4:  { candidates: { Republican: [{ name: "Pat Fallon",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    5:  { candidates: { Republican: [{ name: "Lance Gooden",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "Jake Ellzey",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lizzie Fletcher",        incumbent: true,  status: "Running" }] } },
    8:  { candidates: { Republican: [{ name: "Morgan Luttrell",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    9:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Al Green",               incumbent: true,  status: "Running" }] } },
    10: { candidates: { Republican: [{ name: "Michael McCaul",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    11: { candidates: { Republican: [{ name: "August Pfluger",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    12: { candidates: { Republican: [{ name: "Kay Granger (retiring)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    13: { candidates: { Republican: [{ name: "Ronny Jackson",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    14: { candidates: { Republican: [{ name: "Randy Weber",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    15: { candidates: { Republican: [{ name: "Monica De La Cruz",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    16: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Veronica Escobar",       incumbent: true,  status: "Running" }] } },
    17: { candidates: { Republican: [{ name: "Pete Sessions",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    18: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sylvester Turner",        incumbent: true,  status: "Running" }] } },
    19: { candidates: { Republican: [{ name: "Jodey Arrington",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    20: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Joaquin Castro",          incumbent: true,  status: "Running" }] } },
    21: { candidates: { Republican: [{ name: "Chip Roy",              incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    22: { candidates: { Republican: [{ name: "Troy Nehls",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    23: { candidates: { Republican: [{ name: "Tony Gonzales",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    24: { candidates: { Republican: [{ name: "Beth Van Duyne",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    25: { candidates: { Republican: [{ name: "Roger Williams",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    26: { candidates: { Republican: [{ name: "Michael Burgess",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    27: { candidates: { Republican: [{ name: "Michael Cloud",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    28: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Henry Cuellar",           incumbent: true,  status: "Running" }] } },
    29: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Sylvia Garcia",           incumbent: true,  status: "Running" }] } },
    30: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Jasmine Crockett",        incumbent: true,  status: "Running" }] } },
    31: { candidates: { Republican: [{ name: "John Carter",           incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    32: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Colin Allred (left for Senate 2024)", incumbent: false, status: "TBD" }], note: "Allred ran for Senate in 2024; seat now open." } },
    33: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Marc Veasey",             incumbent: true,  status: "Running" }] } },
    34: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Vicente Gonzalez",        incumbent: true,  status: "Running" }] } },
    35: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Greg Casar",              incumbent: true,  status: "Running" }] } },
    36: { candidates: { Republican: [{ name: "Brian Babin",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    37: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Lloyd Doggett",           incumbent: true,  status: "Running" }] } },
    38: { candidates: { Republican: [{ name: "Wesley Hunt",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Utah ──────────────────────────────────────────────────────────────────
  Utah: {
    1: { candidates: { Republican: [{ name: "Rob Bishop (retired)",  incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Celeste Maloy",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3: { candidates: { Republican: [{ name: "Mike Kennedy",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "Burgess Owens",         incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Vermont ───────────────────────────────────────────────────────────────
  Vermont: {
    1: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Becca Balint",        incumbent: true,  status: "Running" }] } }
  },

  // ── Virginia ──────────────────────────────────────────────────────────────
  Virginia: {
    1:  { candidates: { Republican: [{ name: "Bob Wittman",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2:  { candidates: { Republican: [{ name: "Jen Kiggans",          incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    3:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Bobby Scott",          incumbent: true,  status: "Running" }] } },
    4:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Donald McEachin (deceased)", incumbent: false, status: "TBD" }], note: "Jen McClellan won 2023 special election for seat." } },
    5:  { candidates: { Republican: [{ name: "Bob Good",             incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6:  { candidates: { Republican: [{ name: "Ben Cline",            incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Abigail Spanberger (left for Gov)", incumbent: false, status: "TBD" }], note: "Spanberger ran for governor in 2025." } },
    8:  { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Don Beyer",             incumbent: true,  status: "Running" }] } },
    9:  { candidates: { Republican: [{ name: "Morgan Griffith",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    10: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Suhas Subramanyam",     incumbent: true,  status: "Running" }] } },
    11: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Gerry Connolly",        incumbent: true,  status: "Running" }] } }
  },

  // ── West Virginia ─────────────────────────────────────────────────────────
  "West Virginia": {
    1: { candidates: { Republican: [{ name: "Carol Miller",      incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "Alex Mooney",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Wisconsin ─────────────────────────────────────────────────────────────
  Wisconsin: {
    1: { candidates: { Republican: [{ name: "Bryan Steil",       incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    2: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Mark Pocan",          incumbent: true,  status: "Running" }] } },
    3: { candidates: { Republican: [{ name: "Derrick Van Orden",  incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    4: { candidates: { Republican: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }], Democrat: [{ name: "Gwen Moore",           incumbent: true,  status: "Running" }] } },
    5: { candidates: { Republican: [{ name: "Scott Fitzgerald",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    6: { candidates: { Republican: [{ name: "Glenn Grothman",     incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    7: { candidates: { Republican: [{ name: "Tom Tiffany",        incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } },
    8: { candidates: { Republican: [{ name: "Mike Gallagher (retired)", incumbent: false, status: "TBD" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  },

  // ── Wyoming ───────────────────────────────────────────────────────────────
  Wyoming: {
    1: { candidates: { Republican: [{ name: "Harriet Hageman",   incumbent: true,  status: "Running" }], Democrat: [{ name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }] } }
  }
};

// ---------------------------------------------------------------------------
// Visual styling constants
// ---------------------------------------------------------------------------
const PARTY_STYLES = {
  Republican: { bg: "#fff0f0", border: "#cc0000", badge: "#cc0000", text: "#fff" },
  Democrat:   { bg: "#f0f4ff", border: "#003399", badge: "#003399", text: "#fff" }
};

const STATUS_STYLES = {
  Running:   { bg: "#d4edda", color: "#155724" },
  Announced: { bg: "#cce5ff", color: "#004085" },
  Exploring: { bg: "#fff3cd", color: "#856404" },
  TBD:       { bg: "#e2e3e5", color: "#383d41" }
};
