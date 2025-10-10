import React, { useState } from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import projects from "../ProjectSection/ProjectData";
import style from "../../public/components/project-section.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const initialItemsToShow = 2;
  const itemsIncrement = 2;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleShowMore = () => {
    if (itemsToShow + itemsIncrement < projects.length) {
      setItemsToShow(itemsToShow + itemsIncrement);
    } else {
      setItemsToShow(projects.length);
    }
  };

  const handleShowLess = () => {
    setItemsToShow(initialItemsToShow);
  };

  return (
    <section className={style.projectGrid} id="projects">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          My Projects
        </motion.h2>

        <Grid stackable columns={2} className={style.gridCont}>
          {projects.slice(0, itemsToShow).map((project, index) => (
            <Grid.Column key={index} className={style.colGrid}>
              <div className={style.projectCard}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.imageWrapper}
                  >
                    <Image
                      src={project.image}
                      alt="My Project"
                      className={style.image}
                      style={{ objectFit: "cover" }}
                    />
                    <div className={style.overlay}>
                      <span className={style.overlayText}>Visit Website</span>
                    </div>
                  </a>
                ) : (
                  <div className={style.imageWrapper}>
                    <Image
                      src={project.image}
                      alt="My Project"
                      className={style.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div className={style.content}>
                  <h6>{project.header}</h6>
                  <p>{project.description}</p>
                </div>
              </div>
            </Grid.Column>
          ))}
        </Grid>

        <div className={style.showMoreButton}>
          {itemsToShow < projects.length ? (
            <Button onClick={handleShowMore}>+</Button>
          ) : (
            <Button onClick={handleShowLess}>-</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
