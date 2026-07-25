import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../public/components/hero-section.module.scss";
import ResumeModal from "../ResumeModal";

const revealEase = [0.76, 0, 0.24, 1];

const NAME_LINES = ["idan", "josh", "bosi"];

const RevealLine = ({ children, delay = 0, accent = false }) => (
  <span className={styles.lineMask}>
    <motion.span
      className={`${styles.lineInner} ${accent ? styles.lineAccent : ""}`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: revealEase, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className={styles.heroCont} id="home" ref={sectionRef}>
      <motion.div className={styles.heroInner} style={{ opacity: heroOpacity }}>
        <div className={styles.topRow}>
          <motion.span
            className={styles.tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            // portfolio
          </motion.span>
          <motion.span
            className={styles.tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            web developer
          </motion.span>
        </div>

        <h1 className={styles.nameStack} aria-label="Idan Josh Bosi">
          {NAME_LINES.map((word, index) => (
            <RevealLine
              key={word}
              delay={0.15 + index * 0.08}
              accent={index === 1}
            >
              {word}
            </RevealLine>
          ))}
        </h1>

        <div className={styles.bottomRow}>
          <motion.p
            className={styles.blurb}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          >
            I build clean, dynamic, and eye-catching web experiences —
            one pixel at a time.
          </motion.p>

          <motion.div
            className={styles.buttonRow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          >
            <button
              type="button"
              className={`${styles.rawButton} ${styles.rawButtonFilled}`}
              onClick={() => setIsResumeModalOpen(true)}
            >
              Resume
            </button>
            <a
              href="https://github.com/jxsh2"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rawButton}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/idan-josh-bosi/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rawButton}
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
