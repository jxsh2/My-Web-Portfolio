import styles from "../../public/components/info-about.module.scss";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 16 },
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
          <motion.span
            className={styles.underline}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </motion.div>

        <div className={styles.infoGrid}>
          <div className={styles.infoMain}>
            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              I am a recent graduate with a Bachelor of Science in Computer
              Science from Polytechnic University of the Philippines, Sta.
              Mesa.
            </motion.p>

            <motion.p
              className={styles.support}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              During my studies, I developed a strong foundation in software
              development and problem-solving. I have experience in web
              development, building modern and user-friendly websites, and I
              am passionate about combining technical skills with
              creativity. I also gained knowledge and hands-on experience in
              machine learning and deep learning through academic projects,
              broadening my expertise in emerging technologies. I am eager to
              apply my skills and continue learning in full stack
              development and artificial intelligence.
            </motion.p>

            <motion.div
              className={styles.credentialChip}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              B.S. Computer Science — Polytechnic University of the
              Philippines
            </motion.div>
          </div>

          <motion.div
            className={styles.techPanel}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.techHeader}>Tech Stack</span>
            <motion.div
              className={styles.techStack}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
