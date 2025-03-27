import automata from "../../public/static/images/projects/automata.png";
import blackhole from "../../public/static/images/projects/blackhole.png";
import clevercash from "../../public/static/images/projects/clevercash.png";
import diary from "../../public/static/images/projects/diary.png";
import game from "../../public/static/images/projects/game.png";
import idfrom from "../../public/static/images/projects/idfrom.png";
import infoman from "../../public/static/images/projects/infoman.png";
import lexer from "../../public/static/images/projects/lexer.png";
import map from "../../public/static/images/projects/map.png";
import ppl from "../../public/static/images/projects/ppl.png";

const projects = [
  {
    header: "CleverCash",
    description:
      "Financial management platform designed to track budgets and transactions.",
    image: clevercash,
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    header: "PUPAFID",
    description:
      "Interactive site that transforms traditional paperwork into a digital format.",
    image: idfrom,
    techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://jxsh2.github.io/Final_Project_WEBDEV_BC_PUPAFID/",
  },
  {
    header: "Sentiment Analyzer",
    description:
      "Web application that analyzes text sentiments to classify them as positive, negative, or neutral.",
    image: automata,
    techStack: ["HTML", "CSS", "Python"],
  },
  {
    header: "Start-Up Lexer",
    description:
      "Application that supports a custom programming language, focusing on lexical analysis.",
    image: lexer,
    techStack: ["Python"],
  },
  {
    header: "Start-Up Syntax Analyzer",
    description:
      "Continuation of the lexer project focusing on syntax analysis.",
    image: ppl,
    techStack: ["HTML", "CSS", "Python"],
  },
  {
    header: "PUPThere",
    description:
      "Navigation application for PUP Mabini Campus with optimized routing capabilities.",
    image: map,
    techStack: ["Python"],
  },
  {
    header: "Driver Application Form",
    description:
      "Desktop application that digitizes traditional driver's application forms.",
    image: infoman,
    techStack: ["Visual Basic", "MySQL"],
  },
  {
    header: "Black Hole Simulator",
    description: "Desktop application that simulates black hole physics.",
    image: blackhole,
    techStack: ["Python"],
  },
  {
    header: "Mini-Diary Website",
    description: "Simple diary website for personal use.",
    image: diary,
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://jxsh2.github.io/ADET-SIMPLE-APP-W-DB/",
  },
  {
    header: "Tactic Tiles",
    description: "Mini-game featuring an AI opponent.",
    image: game,
    techStack: ["Python"],
  },
];

export default projects;
