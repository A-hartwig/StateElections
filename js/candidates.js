/**
 * 2026 Primary Election Candidate Data
 * Organized by state → race → party → candidates
 *
 * Race types:
 *   "Senate"   – U.S. Senate seat (Class 2 senators up in 2026)
 *   "Governor" – Gubernatorial race
 *
 * Candidate object fields:
 *   name      – Full name
 *   incumbent – true if the person currently holds the seat
 *   status    – "Running" | "Announced" | "Exploring" | "TBD"
 *
 * Data current as of March 2026. Primary schedules and filing
 * deadlines vary by state. Check your state's Secretary of State
 * website for the most up-to-date information.
 *
 * Sources: Ballotpedia, FEC filings, candidate campaign announcements.
 */

// 2026 Senate – Class 2 seats (33 total, last elected 2020)
// 2026 Governor races – states that held gubernatorial elections in 2022

const CANDIDATES = {
  Alabama: {
    Senate: {
      Republican: [
        { name: "Tommy Tuberville", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Kay Ivey", incumbent: true, status: "Running" },
        { name: "Will Ainsworth", incumbent: false, status: "Announced" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Alaska: {
    Senate: {
      Republican: [
        { name: "Lisa Murkowski", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Mike Dunleavy", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Independent: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Arizona: {
    Governor: {
      Democrat: [
        { name: "Katie Hobbs", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Karrin Taylor Robson", incumbent: false, status: "Announced" },
        { name: "Abe Hamadeh", incumbent: false, status: "Announced" }
      ]
    }
  },
  Arkansas: {
    Governor: {
      Republican: [
        { name: "Sarah Huckabee Sanders", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  California: {
    Governor: {
      Democrat: [
        { name: "Gavin Newsom", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Colorado: {
    Senate: {
      Democrat: [
        { name: "John Hickenlooper", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Joe O'Dea", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Jared Polis", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Connecticut: {
    Governor: {
      Democrat: [
        { name: "Ned Lamont", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Delaware: {
    Governor: {
      Democrat: [
        { name: "Matt Meyer", incumbent: false, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Florida: {
    Senate: {
      // Marco Rubio vacated seat (became Secretary of State 2025)
      // Special election / appointment situation
      Republican: [
        { name: "TBD – Vacancy / Appointment Situation", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      // Ron DeSantis is term-limited
      Republican: [
        { name: "Attorney General Ashley Moody", incumbent: false, status: "Announced" },
        { name: "Jimmy Patronis", incumbent: false, status: "Announced" },
        { name: "Byron Donalds", incumbent: false, status: "Exploring" }
      ],
      Democrat: [
        { name: "Nikki Fried", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Georgia: {
    Senate: {
      Democrat: [
        { name: "Jon Ossoff", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Marjorie Taylor Greene", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Brian Kemp", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "Stacey Abrams", incumbent: false, status: "Exploring" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Hawaii: {
    Governor: {
      Democrat: [
        { name: "Josh Green", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Idaho: {
    Senate: {
      Republican: [
        { name: "Mike Crapo", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Brad Little", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Illinois: {
    Senate: {
      // Dick Durbin retiring
      Democrat: [
        { name: "Raja Krishnamoorthi", incumbent: false, status: "Announced" },
        { name: "Robin Kelly", incumbent: false, status: "Announced" },
        { name: "Brad Schneider", incumbent: false, status: "Announced" },
        { name: "Delia Ramirez", incumbent: false, status: "Announced" }
      ],
      Republican: [
        { name: "Don DeWitte", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "JB Pritzker", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Indiana: {
    Governor: {
      // Eric Holcomb term-limited, Mike Braun won in 2024
      Republican: [
        { name: "Mike Braun", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Iowa: {
    Senate: {
      Republican: [
        { name: "Joni Ernst", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Kim Reynolds", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Kansas: {
    Senate: {
      Republican: [
        { name: "Jerry Moran", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Laura Kelly", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Derek Schmidt", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Kentucky: {
    Senate: {
      // Mitch McConnell retiring
      Republican: [
        { name: "Andy Barr", incumbent: false, status: "Announced" },
        { name: "Daniel Cameron", incumbent: false, status: "Announced" },
        { name: "Hal Rogers", incumbent: false, status: "Announced" },
        { name: "James Comer", incumbent: false, status: "Exploring" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Louisiana: {
    Senate: {
      Republican: [
        { name: "Bill Cassidy", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Maine: {
    Senate: {
      Republican: [
        { name: "Susan Collins", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Janet Mills", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Maryland: {
    Governor: {
      // Wes Moore won in 2022
      Democrat: [
        { name: "Wes Moore", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Massachusetts: {
    Governor: {
      Democrat: [
        { name: "Maura Healey", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Michigan: {
    Senate: {
      // Gary Peters retiring
      Democrat: [
        { name: "Haley Stevens", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Republican: [
        { name: "Mike Rogers", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      // Gretchen Whitmer term-limited after 2026
      Democrat: [
        { name: "Gretchen Whitmer", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Minnesota: {
    Senate: {
      // Tina Smith retiring
      Democrat: [
        { name: "Melissa Hortman", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Republican: [
        { name: "Joe Fraser", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Tim Walz", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Mississippi: {
    // Governor: Tate Reeves won in 2023 – next gubernatorial election in 2027
    // No federal Senate or Governor primaries in 2026
  },
  Missouri: {
    Senate: {
      Republican: [
        { name: "Eric Schmitt", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Montana: {
    Senate: {
      Republican: [
        { name: "Steve Daines", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Greg Gianforte", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Nebraska: {
    Senate: {
      Republican: [
        { name: "Pete Ricketts", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Jim Pillen", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Nevada: {
    Senate: {
      Democrat: [
        { name: "Catherine Cortez Masto", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Sam Brown", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Joe Lombardo", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "New Hampshire": {
    Senate: {
      // Jeanne Shaheen retiring
      Democrat: [
        { name: "Chris Pappas", incumbent: false, status: "Announced" },
        { name: "Maggie Goodlander", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Republican: [
        { name: "Kelly Ayotte", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Kelly Ayotte", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "New Jersey": {
    Senate: {
      Democrat: [
        { name: "Cory Booker", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "New Mexico": {
    Senate: {
      Democrat: [
        { name: "Martin Heinrich", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Michelle Lujan Grisham", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "New York": {
    Senate: {
      Democrat: [
        { name: "Kirsten Gillibrand", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Kathy Hochul", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "Lee Zeldin", incumbent: false, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "North Carolina": {
    Senate: {
      Republican: [
        { name: "Thom Tillis", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      // Josh Stein won in 2024
      Democrat: [
        { name: "Josh Stein", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "North Dakota": {
    Senate: {
      Republican: [
        { name: "Kevin Cramer", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      // Doug Burgum became U.S. Secretary of the Interior in 2025 – no longer ND Governor
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Ohio: {
    Governor: {
      // Mike DeWine is term-limited and cannot run again
      Republican: [
        { name: "Dave Yost", incumbent: false, status: "Announced" },
        { name: "Jon Husted", incumbent: false, status: "Announced" },
        { name: "Matt Dolan", incumbent: false, status: "Announced" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Oklahoma: {
    Senate: {
      Republican: [
        { name: "Markwayne Mullin", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Kevin Stitt", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Oregon: {
    Senate: {
      Democrat: [
        { name: "Ron Wyden", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Tina Kotek", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Pennsylvania: {
    Governor: {
      Democrat: [
        { name: "Josh Shapiro", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "Rhode Island": {
    Senate: {
      Democrat: [
        { name: "Jack Reed", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Dan McKee", incumbent: true, status: "Announced" },
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "South Carolina": {
    Senate: {
      Republican: [
        { name: "Lindsey Graham", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Henry McMaster", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "South Dakota": {
    Senate: {
      Republican: [
        { name: "John Thune", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Kristi Noem", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Tennessee: {
    Governor: {
      Republican: [
        { name: "Bill Lee", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Texas: {
    Senate: {
      Republican: [
        { name: "John Cornyn", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Greg Abbott", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Utah: {
    Senate: {
      Republican: [
        { name: "Mike Lee", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Vermont: {
    Governor: {
      Republican: [
        { name: "Phil Scott", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Virginia: {
    Senate: {
      Democrat: [
        { name: "Mark Warner", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Washington: {
    Senate: {
      Democrat: [
        { name: "Patty Murray", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Bob Ferguson", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  "West Virginia": {
    Governor: {
      Republican: [
        { name: "Patrick Morrisey", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Wisconsin: {
    Senate: {
      Democrat: [
        { name: "Tammy Baldwin", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Democrat: [
        { name: "Tony Evers", incumbent: true, status: "Running" }
      ],
      Republican: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  },
  Wyoming: {
    Senate: {
      Republican: [
        { name: "John Barrasso", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    },
    Governor: {
      Republican: [
        { name: "Mark Gordon", incumbent: true, status: "Running" }
      ],
      Democrat: [
        { name: "TBD – Filing Period Open", incumbent: false, status: "TBD" }
      ]
    }
  }
};

// All 50 US states in alphabetical order
const ALL_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

// Party color mapping
const PARTY_COLORS = {
  Republican: { bg: "#fee2e2", border: "#ef4444", text: "#991b1b", badge: "#dc2626" },
  Democrat:   { bg: "#dbeafe", border: "#3b82f6", text: "#1e40af", badge: "#2563eb" },
  Independent:{ bg: "#f3f4f6", border: "#6b7280", text: "#374151", badge: "#4b5563" },
  Libertarian:{ bg: "#fef9c3", border: "#eab308", text: "#713f12", badge: "#ca8a04" },
  Green:      { bg: "#dcfce7", border: "#22c55e", text: "#14532d", badge: "#16a34a" }
};

// Status badge styling
const STATUS_STYLES = {
  Running:   { bg: "#dcfce7", text: "#15803d" },
  Announced: { bg: "#dbeafe", text: "#1d4ed8" },
  Exploring: { bg: "#fef9c3", text: "#92400e" },
  TBD:       { bg: "#f3f4f6", text: "#6b7280" }
};
