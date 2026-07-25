import { useRef, useState } from "react";
import { Button } from "semantic-ui-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../../public/components/hero-section.module.scss";
import arrow from "../../public/static/images/other/arrow.png";
import ResumeModal from "../ResumeModal";
import Magnetic from "../generics/Magnetic";

const revealEase = [0.65, 0, 0.35, 1];

const RevealLine = ({ children, delay = 0 }) => (
  <span className={styles.revealMask}>
    <motion.span
      className={styles.revealInner}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: revealEase, delay }}
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
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      className={styles.heroCont}
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.spotlight} />

      <div className="wrapper">
        <motion.div
          className={styles.heroInfo}
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <p className={styles.introLine}>
            <RevealLine delay={0.1}>Hello, I&apos;m</RevealLine>
          </p>

          <h1>
            <RevealLine delay={0.25}>
              <span className={styles.nameAccent}>Idan Josh Bosi</span>
            </RevealLine>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
          >
            I love bringing ideas to life online crafting clean, dynamic, and
            eye-catching web experiences, one pixel at a time.
          </motion.p>

          <motion.div
            className={styles.buttonGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          >
            <div className={styles.buttonRow}>
              <Magnetic className={styles.magneticBtn}>
                <Button onClick={() => setIsResumeModalOpen(true)}>
                  Resume
                </Button>
              </Magnetic>
              <Magnetic className={styles.magneticBtn}>
                <a
                  href="https://github.com/jxsh2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>GitHub</Button>
                </a>
              </Magnetic>
              <Magnetic className={styles.magneticBtn}>
                <a
                  href="https://www.linkedin.com/in/idan-josh-bosi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>LinkedIn</Button>
                </a>
              </Magnetic>
            </div>

            <motion.div
              className={styles.arrow}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  color: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <Image
                  src={arrow}
                  alt="Scroll down arrow"
                  className={styles.arrowImg}
                  fill={false}
                  width={32}
                  height={32}
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
