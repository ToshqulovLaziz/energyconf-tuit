export const navbarMenuData = [
  {
    id: 1,
    text: "HOME",
    link: "/",
    selected: null,
  },
  {
    id: 2,
    text: "ABOUT ENERGYCONF",
    link: "/about-cipoc",
    selected: null,
  },
  {
    id: 3,
    text: "COMMITTEES",
    selected: [
      { text: "Organizing Committee", link: "/organizing-committee" },
      { text: "Steering Committee", link: "/steering-committee" },
    ],
  },
  {
    id: 4,
    text: "SUBMISSION",
    selected: [
      { text: "Call for Papers", link: "/call-for-papers" },
      // { text: "Call for Sponsors", link: "call-for-sponsors" },
      { text: "Call for Speakers", link: "/call-for-speakers" },
      { text: "Call for Tutorial", link: "/call-for-tutorial" },
    ],
  },
  {
    id: 5,
    text: "PROGRAM",
    selected: [
      { text: "Program", link: "/program" },
      { text: "Important Dates", link: "/important-dates" },
      { text: "Plenary & Keynote Speakers", link: "/plenary-keynote-speakers" },
      { text: "Invited Speakers", link: "/invited-speakers" },
      { text: "Tutorial", link: "/tutorial" },
    ],
  },
  {
    id: 6,
    text: "REGISTRATION",
    selected: [
      { text: "Visa Letter Request", link: "/visa-letter-request" },
      { text: "Awards", link: "/awards" },
    ],
  },
  {
    id: 7,
    text: "HOTEL/TRAVEL",
    selected: [
      { text: "Hotel", link: "/hotel" },
      { text: "Tour", link: "/tour" },
    ],
  },
];
