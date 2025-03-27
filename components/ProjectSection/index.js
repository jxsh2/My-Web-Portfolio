import React, { useState } from "react";
import {
  Grid,
  Card,
  Button,
  Label,
  Icon,
  Header,
} from "semantic-ui-react";
import projects from "../ProjectSection/ProjectData";
import style from "../../public/components/project-section.module.scss";
import Image from "next/image";

const ProjectSection = () => {
  const initialItemsToShow = 2; // Initial number of items
  const itemsIncrement = 2; // Number of items to add each time "Show More" is clicked
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
        <h2>PROJECTS</h2>
        <Grid stackable columns={2} className={style.gridCont}>
          {projects.slice(0, itemsToShow).map((project, index) => (
            <Grid.Column key={index} className={style.colGrid}>
              <Card className={style.projectCard}>
                <Image
                  src={project.image}
                  alt="My Project"
                  objectFit="contain"
                  objectPosition="top"
                />
                <Card.Content extra className={style.cardExtraContent}>
                  <div className={style.stackCont}>
                    {project.techStack.map((tech, i) => (
                      <Label key={i} className={style.techStack}>
                        {tech}
                      </Label>
                    ))}
                  </div>
                </Card.Content>
                <Card.Content className={style.content}>
                  <Card.Header as="h6">{project.header}</Card.Header>
                  <Card.Description as="p">
                    {project.description}
                  </Card.Description>
                  <div className={style.iconContainer}>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <Icon
                            className={style.icon}
                            name="external alternate"
                            link
                          />
                        </div>
                      </a>
                    )}
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
        <div className={style.showMoreButton}>
          {itemsToShow < projects.length ? (
            <Button onClick={handleShowMore}>SHOW MORE</Button>
          ) : (
            <Button onClick={handleShowLess}>COLLAPSE</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
