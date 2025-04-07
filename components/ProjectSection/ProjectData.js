import clevercash from "../../public/static/images/projects/clevercash.png";
import diary from "../../public/static/images/projects/diary.png";
import idfrom from "../../public/static/images/projects/idfrom.png";
import infoman from "../../public/static/images/projects/infoman.png";
import map from "../../public/static/images/projects/map.png";
import ppl from "../../public/static/images/projects/ppl.png";
import vct from "../../public/static/images/projects/VCT.png";
const projects = [
  {
    header: "VCT Dispatch",
    description: "An e-Sport article website all about VCT.",
    image: vct,
    link: "https://vct-dispatch.vercel.app",
  },
  {
    header: "PUPAFID",
    description:
      "Interactive site that transforms traditional paperwork into a digital format.",
    image: idfrom,
    link: "https://jxsh2.github.io/PUPAFID-System",
  },
  {
    header: "CleverCash",
    description:
      "Financial management platform designed to track budgets and transactions.",
    image: clevercash,
    link: "https://clever-cash.vercel.app/",
  },

  {
    header: "Mini-Diary Website",
    description: "Simple diary website for personal use.",
    image: diary,
    link: "https://jxsh2.github.io/My-Memoir",
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
];

export default projects;
