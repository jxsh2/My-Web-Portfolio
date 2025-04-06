import styles from "../../public/components/info-about.module.scss";
import Image from "next/image";
import travel from "../../public/static/images/projects/mypic.png";
import { motion } from "framer-motion";

const techStack = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "C",
  "SQL",
  "MongoDB",
  "TensorFlow",
  "PyTorch",
  "Figma",
  "Canva",
  "CapCut",
  "DaVinci Resolve",
];

// Variants for domino animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const InfoSection = () => {
  return (
    <section className={styles.infoCont} id="about">
      <div className="wrapper">
        <motion.div
          className={styles.infoTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.div>

        <div className={styles.infoGrid}>
          <motion.div
            className={styles.infoContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            I'm currently a 4th year Bachelor of Science in Computer Science
            student at PUP Sta. Mesa, where I'm building a strong foundation in
            software development and problem-solving. I enjoy creating beautiful
            websites and also I have experience in video editing, combining
            technical skills with creativity. Right now, I'm diving deeper into
            full stack development while exploring the exciting fields of
            machine learning and deep learning to broaden my expertise.
            <h4 className={styles.techHeader}>My Tech Stack</h4>
            <motion.div
              className={styles.techStack}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techStack
                .slice()
                .sort()
                .map((tech, index) => (
                  <motion.span
                    key={index}
                    className={styles.techTag}
                    variants={tagVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.profileCont}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.1)",
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={travel}
              alt="profile"
              width={400}
              height={400}
              className={styles.profile}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
