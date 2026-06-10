window.STCatalog = {
  subjects: {
    mathematics: {
      title: "I Love Maths",

      context: "Mathematics Curriculum Series",

      description:
        "Conceptual mathematics, practice, reasoning and joyful problem solving.",

      grades: [1, 2, 3, 4, 5, 6, 7, 8],

      colors: ["#12b6c9", "#087c67"],

      gradeColors: {
        1: "#12b6c9",
        2: "#f2c126",
        3: "#e95d78",
        4: "#8bc34a",
        5: "#13866f",
        6: "#f28a2b",
        7: "#2084a8",
        8: "#a45ca7",
      },

      icon: "math",

      coverFolder: "i-love-math",
    },
    science: {
      title: "I Love Science",

      context: "Science Curriculum Series",

      description:
        "Observation, inquiry, experiments and real-world scientific thinking.",

      grades: [1, 2, 3, 4, 5, 6, 7, 8],

      colors: ["#12b6c9", "#087c67"],

      gradeColors: {
        1: "#12b6c9",
        2: "#f2c126",
        3: "#e95d78",
        4: "#8bc34a",
        5: "#13866f",
        6: "#f28a2b",
        7: "#2084a8",
        8: "#a45ca7",
      },

      icon: "science",

      coverFolder: "i-love-science",
    },
    thinking: {
      title: "Thinking Book",
      context: "Computational Thinking & AI",
      description:
        "Computational Thinking for Grades 1–5 and Computational Thinking with Artificial Intelligence for Grades 6–8.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#1f7fb5", "#f6b51b"],
      icon: "thinking",
      coverFolder: "thinking",
    },
  },

  boards: {
    cbse: {
      name: "CBSE",
      description:
        "Computer Science curriculum offerings designed for CBSE schools.",
      colors: ["#3893d0", "#056337"],
      series: [
        "funcoder",
        "happycoder",
        "supercoder",
        "smartcoder",
        "mastercoder",
      ],
    },
    icse: {
      name: "ICSE",
      description:
        "Computer Science curriculum offerings developed for ICSE schools.",
      colors: ["#b82829", "#3893d0"],
      series: ["futurecoder", "creativecoder"],
    },
    "state-board": {
      name: "State Board",
      description:
        "Flexible Computer Science offerings suitable for State Board schools.",
      colors: ["#76b134", "#056337"],
      series: ["funcoder", "happycoder"],
    },
  },

  series: {
    funcoder: {
      name: "FunCoder 3.0",
      description:
        "An entry-level Computer Science series with strong digital literacy, coding and introductory AI.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#3893d0", "#056337"],
    },
    happycoder: {
      name: "HappyCoder 3.0",
      description:
        "A balanced curriculum covering digital literacy, programming, AI, cybersecurity and data science.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#76b134", "#287d3c"],
    },
    supercoder: {
      name: "SuperCoder 3.0",
      description:
        "A progressive Computer Science series with coding, AI, computational thinking and digital skills.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#3893d0", "#3f51b5"],
    },
    smartcoder: {
      name: "SmartCoder 3.0",
      description:
        "An integrated curriculum combining digital literacy, programming, AI, data science and Robotics.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#abc423", "#287d3c"],
    },
    mastercoder: {
      name: "MasterCoder 3.0",
      description:
        "An advanced curriculum with deeper programming, AI, Robotics and computational problem solving.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#b82829", "#3893d0"],
    },
    futurecoder: {
      name: "FutureCoder 3.0",
      description:
        "An ICSE-focused series with computer applications, digital tools and programming foundations.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#3893d0", "#3f51b5"],
    },
    creativecoder: {
      name: "CreativeCoder 3.0",
      description:
        "An ICSE Computer Science series combining digital literacy, coding, AI and creative projects.",
      grades: [1, 2, 3, 4, 5, 6, 7, 8],
      colors: ["#b82829", "#e99a18"],
    },
  },
};

window.STIcons = {
  math: '<svg viewBox="0 0 24 24"><path d="M5 7h6"></path><path d="M8 4v6"></path><path d="M14 6h5"></path><path d="m15 14 4 4"></path><path d="m19 14-4 4"></path><path d="M5 16h6"></path></svg>',
  science:
    '<svg viewBox="0 0 24 24"><path d="M9 3h6"></path><path d="M10 3v5l-5.2 8.4A3 3 0 0 0 7.35 21h9.3a3 3 0 0 0 2.55-4.6L14 8V3"></path><path d="M7.5 15h9"></path></svg>',
  computer:
    '<svg viewBox="0 0 24 24"><path d="M4 5h16v12H4z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>',
  thinking:
    '<svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3"></path><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3"></path><path d="M12 4v16"></path></svg>',
  board:
    '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8l7-5 7 5v13"></path><path d="M9 21v-6h6v6"></path></svg>',
  series:
    '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"></path><path d="M8 5v14"></path><path d="M12 8h5"></path><path d="M12 12h5"></path><path d="M12 16h3"></path></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"></path></svg>',
};
