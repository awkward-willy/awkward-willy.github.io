const Color = {
  React: "bg-[#61DAFB]",
  "Next.js": "bg-white",
  "Tailwind CSS": "bg-[#38BDF8]",
  "Three.js": "bg-gray-200",
  SCSS: "bg-[#CF649A]",
  HTML: "bg-red-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-[#38BDF8]",
  Flutter: "bg-[#54C5F8]",
};

const ProjectConstants = {
  Web: [
    {
      Title: "Portfolio (This Website)",
      Feature: ["The website you are currently viewing!"],
      Image: "/projects/Portfolio.png",
      Link: "/",
      Tag: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Three.js"],
    },
    {
      Title: "Former GitHub Page",
      Feature: ["First Web Page!"],
      Image: "/projects/FormerGitHubPage.png",
      Link: "https://github.com/awkward-willy/FormerGitHubPage",
      Tag: ["HTML", "SCSS", "JavaScript"],
    },
  ],
  Others: [
    {
      Title: "Wordle",
      Feature: ["Simple Wordle Clone", "Tkinter GUI"],
      Image: "/projects/Wordle.png",
      Link: "https://github.com/awkward-willy/Wordle",
      Tag: ["Python"],
    },
  ],
  NCU_Course: [
    {
      Title: "NCU Reservation App",
      Feature: [
        "A course project to build a reservation App for study room in NCU.",
        "Pure UI design only.",
      ],
      Image: "/projects/NCU_Reservation_APP.png",
      Link: "https://github.com/awkward-willy/NCU_Reservation_app_personal",
      Tag: ["Flutter"],
    },
    {
      Title: "MiniGomoku",
      Feature: ["Socket Programming", "PyQt", "Pygame"],
      Image: "/projects/MiniGomoku.png",
      Link: "https://github.com/awkward-willy/MiniGomoku",
      Tag: ["Python"],
    },
  ],
};

export { Color, ProjectConstants };
