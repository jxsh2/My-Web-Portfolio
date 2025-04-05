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
  },
  {
    header: "PUPAFID",
    description:
      "Interactive site that transforms traditional paperwork into a digital format.",
    image: idfrom,
    link: "https://jxsh2.github.io/PUPAFID-System",
  },
  {
    header: "Sentiment Analyzer",
    description:
      "Web application that analyzes text sentiments to classify them as positive, negative, or neutral.",
    image: automata,
  },
  {
    header: "Start-Up Lexer",
    description:
      "Application that supports a custom programming language, focusing on lexical analysis.",
    image: lexer,
  },
  {
    header: "Start-Up Syntax Analyzer",
    description:
      "Continuation of the lexer project focusing on syntax analysis.",
    image: ppl,
  },
  {
    header: "PUPThere",
    description:
      "Navigation application for PUP Mabini Campus with optimized routing capabilities.",
    image: map,
  },
  {
    header: "Driver Application Form",
    description:
      "Desktop application that digitizes traditional driver's application forms.",
    image: infoman,
  },
  {
    header: "Black Hole Simulator",
    description: "Desktop application that simulates black hole physics.",
    image: blackhole,
  },
  {
    header: "Mini-Diary Website",
    description: "Simple diary website for personal use.",
    image: diary,
    link: "https://jxsh2.github.io/My-Memoir",
  },
  {
    header: "Tactic Tiles",
    description: "Mini-game featuring an AI opponent.",
    image: game,
  },
];

export default projects;
