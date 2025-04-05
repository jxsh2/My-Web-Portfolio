import React, { useState } from "react";
import { Grid, Button, Icon, Modal } from "semantic-ui-react";
import projects from "../ProjectSection/ProjectData";
import style from "../../public/components/project-section.module.scss";
import Image from "next/image";

const ProjectSection = () => {
  const initialItemsToShow = 2;
  const itemsIncrement = 2;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className={style.projectGrid} id="projects">
      <div className="wrapper">
        <h2>My Projects</h2>
        <Grid stackable columns={2} className={style.gridCont}>
          {projects.slice(0, itemsToShow).map((project, index) => (
            <Grid.Column key={index} className={style.colGrid}>
              <div className={style.projectCard}>
                <div
                  className={style.imageWrapper}
                  onClick={() => openModal(project.image)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={project.image}
                    alt="My Project"
                    className={style.image}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={style.content}>
                  <h6>{project.header}</h6>
                  <p>{project.description}</p>
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
                </div>
              </div>
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

        {/* Modal for full-size image */}
        <Modal
          open={modalOpen}
          onClose={closeModal}
          size="large"
          closeIcon
          className={style.customModal}
          basic
        >
          <Modal.Content>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Full Project"
                width={1000}
                height={600}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  border: "none",
                  color: "black",
                }}
              />
            )}
          </Modal.Content>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectSection;
