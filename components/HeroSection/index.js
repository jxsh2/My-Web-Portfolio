import { Button } from "semantic-ui-react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../public/components/hero-section.module.scss";
import arrow from "../../public/static/images/other/arrow.png";

const HeroSection = () => {
  return (
    <section className={styles.heroCont} id="home">
      <div className="wrapper">
        <motion.div
          className={styles.heroInfo}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.h5
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            CREATE. INNOVATE. LEARN. ELEVATE.
          </motion.h5>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            Hi, I'm <span>Idan Josh Bosi</span>, Creative Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Crafting visually engaging and dynamic web experiences, one pixel at
            a time, with precision and creativity.
          </motion.p>

          <motion.div
            className={styles.buttonGrid}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <a
                href="/static/pdf/[UDPATED]BOSI_Resume_2024.pdf"
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
                duration: 2,
                ease: "easeInOut",
                delay: 2.8,
              }}
            >
              <Image
                src={arrow}
                alt="Arrow"
                className={styles.arrowImg}
                fill={false}
                width={32}
                height={32}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
