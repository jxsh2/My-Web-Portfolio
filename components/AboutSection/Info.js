import styles from "../../public/components/info-about.module.scss";
import Image from "next/image";

import travel from "../../public/static/images/projects/mypic.png";
const InfoSection = () => {
  return (
    <section className={styles.infoCont} id="about">
      <div className="wrapper">
        <div className={styles.infoTitle}>
          <h2>About Me</h2>
          {/* <Divider className="divider" /> */}
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoContent}>
            I'm currently a 4th year Bachelor of Science in Computer Science
            student at PUP Sta. Mesa, where I'm building a strong foundation in
            software development and problem-solving. I enjoy creating beautiful
            websites and also I have experience in video editing, combining
            technical skills with creativity. Right now, I'm diving deeper into
            full stack development while exploring the exciting fields of
            machine learning and deep learning to broaden my expertise.
          </div>
          <div className={styles.profileCont}>
            <Image className={styles.profile} src={travel} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
