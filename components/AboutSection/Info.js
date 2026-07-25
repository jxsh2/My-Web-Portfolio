import styles from "../../public/components/info-about.module.scss";
import Image from "next/image";
import travel from "../../public/static/images/projects/PROF.jpg";
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
          <motion.span
            className={styles.underline}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </motion.div>

        <div className={styles.infoGrid}>
          <motion.div
            className={styles.infoContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            I am a recent graduate with a Bachelor of Science in Computer
            Science from Polytechnic University of the Philippines, Sta. Mesa.
            During my studies, I developed a strong foundation in software
            development and problem-solving. I have experience in web
            development, building modern and user-friendly websites, and I am
            passionate about combining technical skills with creativity. I also
            gained knowledge and hands-on experience in machine learning and
            deep learning through academic projects, broadening my expertise in
            emerging technologies. I am eager to apply my skills and continue
            learning in full stack development and artificial intelligence.
            <p className={styles.techHeader}>Tech Stack</p>
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
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              transition={{ duration: 0.3 }}
              className={styles.profileInner}
            >
              <Image
                src={travel}
                alt="profile"
                width={500}
                height={500}
                className={styles.profile}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
