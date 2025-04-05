import Image from "next/image";
import style from "../../public/components/skill.module.scss";
import { motion } from "framer-motion";

// images
import c from "../../public/static/images/tech-stack/c.png";
import canva from "../../public/static/images/tech-stack/canva.png";
import css from "../../public/static/images/tech-stack/css.png";
import figma from "../../public/static/images/tech-stack/figma.png";
import firebase from "../../public/static/images/tech-stack/firebase.png";
import github from "../../public/static/images/tech-stack/github.png";
import html from "../../public/static/images/tech-stack/html.png";
import js from "../../public/static/images/tech-stack/js.png";
import mongo from "../../public/static/images/tech-stack/mongo.png";
import mysql from "../../public/static/images/tech-stack/mysql.png";
import next from "../../public/static/images/tech-stack/next.png";
import node from "../../public/static/images/tech-stack/node.png";
import postman from "../../public/static/images/tech-stack/postman.svg";
import python from "../../public/static/images/tech-stack/python.png";
import react from "../../public/static/images/tech-stack/react.png";
import sass from "../../public/static/images/tech-stack/sass.png";
import vscode from "../../public/static/images/tech-stack/vscode.png";
import davinci from "../../public/static/images/tech-stack/davinci.png";
import pytorch from "../../public/static/images/tech-stack/pytorch.png";

const techStack = [
  { name: "C", image: c },
  { name: "Canva", image: canva },
  { name: "CSS", image: css },
  { name: "DaVinci", image: davinci },
  { name: "Figma", image: figma },
  { name: "Firebase", image: firebase },
  { name: "GitHub Desktop", image: github },
  { name: "HTML", image: html },
  { name: "JavaScript", image: js },
  { name: "MongoDB", image: mongo },
  { name: "MySQL", image: mysql },
  { name: "Next.js", image: next },
  { name: "Node.js", image: node },
  { name: "Postman", image: postman },
  { name: "Python", image: python },
  { name: "PyTorch", image: pytorch },
  { name: "React", image: react },
  { name: "Sass", image: sass },
  { name: "VSCode", image: vscode },
];

const SkillSection = () => {
  return (
    <div className={style.skillCont} id="tech-stack">
      <motion.h2
        className={style.skillHeader}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className={style.tagContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={style.tagItem}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className={style.iconWrapper}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Image
                src={tech.image}
                alt={tech.name}
                className={style.techImage}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
