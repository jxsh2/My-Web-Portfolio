import { motion } from "framer-motion";
import styles from "../../public/components/loader.module.scss";

const curtainEase = [0.76, 0, 0.24, 1];
const letters = ["I", "J", "B"];

const LoaderComponent = () => {
  return (
    <motion.div className={styles.loaderRoot} aria-hidden="true">
      <motion.div
        className={styles.panelTop}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: curtainEase }}
      />
      <motion.div
        className={styles.panelBottom}
        exit={{ y: "100%" }}
        transition={{ duration: 0.9, ease: curtainEase }}
      />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={styles.initials}>
          {letters.map((letter, index) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.15 + index * 0.12,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>

        <motion.span
          className={styles.fullName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          Idan Josh Bosi
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LoaderComponent;
