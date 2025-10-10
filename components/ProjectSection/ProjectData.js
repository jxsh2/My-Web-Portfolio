import clevercash from "../../public/static/images/projects/clevercash.png";
import diary from "../../public/static/images/projects/diary.png";
import idfrom from "../../public/static/images/projects/idfrom.png";
import infoman from "../../public/static/images/projects/infoman.png";
import map from "../../public/static/images/projects/map.png";
import ppl from "../../public/static/images/projects/ppl.png";
import vct from "../../public/static/images/projects/VCT.png";
import derma from "../../public/static/images/projects/derma.png";

const projects = [
  {
    header: "DermaScan | Python/React JS/SCSS",
    description:
      "A full-stack facial skin disease classification thesis website.",
    image: derma,
    link: "https://dermascan-frontend-view.vercel.app/",
  },
  {
    header: "VCT Dispatch | React JS/Semantic UI React",
    description:
      "A static website for e-Sport all about VCT. Please view using a laptop or desktop for the best experience.",
    image: vct,
    link: "https://vct-dispatch.vercel.app",
  },
  {
    header: "PUPAFID | HTML/CSS/JS",
    description:
      "A full-stack nteractive site that transforms traditional paperwork into a digital format. Please view using a laptop or desktop for the best experience.",
    image: idfrom,
    link: "https://jxsh2.github.io/PUPAFID-System",
  },
  {
    header: "CleverCash | React JS/MongoDB",
    description:
      "A full-stack financial management platform designed to track budgets and transactions. Please view using a laptop or desktop for the best experience.",
    image: clevercash,
    link: "https://clever-cash.vercel.app/",
  },

  {
    header: "Mini-Diary Website | HTML/CSS/JS/Firebase",
    description:
      "A Simple full-stack diary website. Please view using a laptop or desktop for the best experience.",
    image: diary,
    link: "https://jxsh2.github.io/My-Memoir",
  },
  {
    header: "Start-Up Syntax Analyzer | Python",
    description:
      "A continuation of the lexer of a custom programming language project focusing on syntax analysis.",
    image: ppl,
  },
  {
    header: "PUPThere | Python",
    description:
      "Navigation application for PUP Mabini Campus with optimized routing capabilities.",
    image: map,
  },
  {
    header: "Driver Application Form | Visual Basic/MySQL",
    description:
      "Desktop application that digitizes traditional driver's application forms.",
    image: infoman,
  },
];

export default projects;
