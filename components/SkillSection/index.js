import Image from "next/image";
import style from "../../public/components/skill.module.scss";

//images
import adobe from "../../public/static/images/tech-stack/adobe.png";
import android from "../../public/static/images/tech-stack/android.png";
import c from "../../public/static/images/tech-stack/c.png";
import cpp from "../../public/static/images/tech-stack/c++.png";
import canva from "../../public/static/images/tech-stack/canva.png";
import capcut from "../../public/static/images/tech-stack/capcut.png";
import css from "../../public/static/images/tech-stack/css.png";
import figma from "../../public/static/images/tech-stack/figma.png";
import finalCut from "../../public/static/images/tech-stack/final cut.png";
import firebase from "../../public/static/images/tech-stack/firebase.png";
import github from "../../public/static/images/tech-stack/github.png";
import html from "../../public/static/images/tech-stack/html.png";
import java from "../../public/static/images/tech-stack/java.png";
import js from "../../public/static/images/tech-stack/js.png";
import mongo from "../../public/static/images/tech-stack/mongo.png";
import mysql from "../../public/static/images/tech-stack/mysql.png";
import next from "../../public/static/images/tech-stack/next.png";
import node from "../../public/static/images/tech-stack/node.png";
import postman from "../../public/static/images/tech-stack/postman.svg";
import python from "../../public/static/images/tech-stack/python.png";
import react from "../../public/static/images/tech-stack/react.png";
import sass from "../../public/static/images/tech-stack/sass.png";
import sonyvegas from "../../public/static/images/tech-stack/sonyvegas.png";
import vb from "../../public/static/images/tech-stack/vb.png";
import vscode from "../../public/static/images/tech-stack/vscode.png";

const techStack = [
  { name: "Adobe", image: adobe },
  { name: "Android", image: android },
  { name: "C", image: c },
  { name: "C++", image: cpp },
  { name: "Canva", image: canva },
  { name: "CapCut", image: capcut },
  { name: "CSS", image: css },
  { name: "Figma", image: figma },
  { name: "Final Cut", image: finalCut },
  { name: "Firebase", image: firebase },
  { name: "GitHub Desktop", image: github },
  { name: "HTML", image: html },
  { name: "Java", image: java },
  { name: "JavaScript", image: js },
  { name: "MongoDB", image: mongo },
  { name: "MySQL", image: mysql },
  { name: "Next.js", image: next },
  { name: "Node.js", image: node },
  { name: "Postman", image: postman },
  { name: "Python", image: python },
  { name: "React", image: react },
  { name: "Sass", image: sass },
  { name: "Sony Vegas", image: sonyvegas },
  { name: "VB", image: vb },
  { name: "VSCode", image: vscode },
];

const SkillSection = () => {
  return (
    <div className={style.skillCont} id="tech-stack">
      <h2 className={style.skillHeader}>TECH STACK</h2>
      <div className={style.tagContainer}>
        {techStack.map((tech, index) => (
          <div key={index} className={style.tagItem}>
            <Image
              src={tech.image}
              alt={tech.name}
              width={40} // Adjust size for the tag image
              height={40}
              className={style.techImage}
            />
            <p className={style.techName}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
