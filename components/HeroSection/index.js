import { Button } from "semantic-ui-react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../public/components/hero-section.module.scss";
import arrow from "../../public/static/images/other/arrow.png";

const wordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const wordItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = () => {
  return (
    <section className={styles.heroCont} id="home">
      <div className="wrapper">
        <motion.div className={styles.heroInfo}>
          <motion.h5
            variants={wordContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.dominoText}
          >
            {"CREATE. INNOVATE. LEARN. ELEVATE."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordItem}
                  style={{ display: "inline-block", marginRight: "0.5ch" }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h5>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 1.4,
            }}
          >
            Hi, I'm <span>Idan Josh Bosi</span>, Creative Developer
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 2,
            }}
          >
            Crafting visually engaging and dynamic web experiences, one pixel at
            a time, with precision and creativity.
          </motion.p>

          <motion.div
            className={styles.buttonGrid}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 2.6,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 3,
              }}
            >
              <a
                href="/static/pdf/[RESUME]BOSI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Resume</Button>
              </a>
              <a
                href="https://github.com/jxsh2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GitHub</Button>
              </a>
              <a
                href="https://www.linkedin.com/in/idan-josh-bosi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>LinkedIn</Button>
              </a>
            </motion.div>

            <motion.div
              className={styles.arrow}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: "easeInOut",
                delay: 3.4,
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
    </section>
  );
};

export default HeroSection;
