import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import projects from "../ProjectSection/ProjectData";
import style from "../../public/components/project-section.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const parseProject = (project) => {
  const [titlePart, stackPart] = project.header.split("|");
  const title = titlePart?.trim() || project.header;
  const tags = stackPart
    ? stackPart
        .split("/")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  return { ...project, title, tags };
};

const ProjectSection = () => {
  const initialItemsToShow = 4;
  const itemsIncrement = 4;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleShowMore = () => {
    setItemsToShow((prev) =>
      Math.min(prev + itemsIncrement, projects.length)
    );
  };

  const handleShowLess = () => {
    setItemsToShow(initialItemsToShow);
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={style.projectGrid} id="projects">
      <div className="wrapper">
        <motion.div
          className={style.sectionHead}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className={style.eyebrow}>Selected Work</span>
          <h2>Projects</h2>
          <span className={style.count}>
            {String(itemsToShow).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className={style.projectList}>
          {projects.slice(0, itemsToShow).map((rawProject, index) => {
            const project = parseProject(rawProject);
            const RowTag = project.link ? motion.a : motion.div;

            return (
              <RowTag
                key={project.title}
                className={`${style.projectRow} ${
                  project.link ? "" : style.noLink
                }`}
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: (index % itemsIncrement) * 0.08,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className={style.rowIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={style.rowBody}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.tags.length > 0 && (
                    <div className={style.rowTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={style.rowTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={style.rowThumb}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={style.rowImage}
                    fill
                    sizes="(max-width: 767px) 90vw, 320px"
                  />
                </div>

                <div className={style.rowAction}>
                  {project.link ? (
                    <>
                      <span>Visit</span>
                      <Icon name="arrow right" className={style.rowArrow} />
                    </>
                  ) : (
                    <span className={style.rowUnavailable}>Not deployed</span>
                  )}
                </div>
              </RowTag>
            );
          })}
        </div>

        <div className={style.showMoreButton}>
          {itemsToShow < projects.length ? (
            <button onClick={handleShowMore}>
              Show more work
              <Icon name="chevron down" />
            </button>
          ) : (
            itemsToShow > initialItemsToShow && (
              <button onClick={handleShowLess}>
                Show less
                <Icon name="chevron up" />
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
