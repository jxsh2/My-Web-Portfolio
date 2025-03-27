import { Divider } from "semantic-ui-react";
import styles from "../../public/components/info-about.module.scss";
import Image from "next/image";

import travel from "../../public/static/images/projects/mypic.png";
const InfoSection = () => {
  return (
    <section className={styles.infoCont} id="about">
      <div className="wrapper">
        <div className={styles.infoTitle}>
          <h2>About Me</h2>
          <Divider className="divider" />
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.profileCont}>
            <Image className={styles.profile} src={travel} alt="profile" />
          </div>
          <div className={styles.infoContent}>
            <h4>
              4th Year College | Aspiring Web Developer
              <h6> Polytechnic University of the Philippines - Sta. Mesa</h6>
              <h6> Computer Science Student</h6>
            </h4>
            <Divider className={styles.divider} />
            <p>
              I'm currently pursuing my computer science degree at the
              Polytechnic University of the Philippines, blending technical
              skills with a passion for optimizing systems. I have a strong
              foundation in programming, database management, machine learning,
              UI/UX design, and video editing. Feel free to check out my resume
              and projects or get in touch with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
