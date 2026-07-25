import { useRef, useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styles from "../../public/components/hero-section.module.scss";
import profile from "../../public/static/images/projects/PROF.jpg";
import ResumeModal from "../ResumeModal";
import Magnetic from "../generics/Magnetic";

const revealEase = [0.65, 0, 0.35, 1];

const NAME = "Idan Josh Bosi";
const TYPE_SPEED = 95;
const DELETE_SPEED = 45;
const PAUSE_FULL = 1800;
const PAUSE_EMPTY = 500;

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

const TypewriterName = () => {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    let timeout;

    if (phase === "typing") {
      if (text.length < NAME.length) {
        timeout = setTimeout(
          () => setText(NAME.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), PAUSE_FULL);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(NAME.slice(0, text.length - 1)),
          DELETE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("typing"), PAUSE_EMPTY);
      }
    }

    return () => clearTimeout(timeout);
  }, [started, text, phase]);

  return (
    <h1 aria-label={NAME}>
      <span className={styles.nameAccent} aria-hidden="true">
        {text}
        <span className={styles.typeCursor} />
      </span>
    </h1>
  );
};

const HeroPhoto = () => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, {
    stiffness: 150,
    damping: 14,
    mass: 0.5,
  });
  const springRotateY = useSpring(rotateY, {
    stiffness: 150,
    damping: 14,
    mass: 0.5,
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={styles.photoWrap}
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
    >
      <motion.div
        ref={cardRef}
        className={styles.photoCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className={styles.photoImgWrap}>
          <Image
            src={profile}
            alt="Idan Josh Bosi"
            fill
            className={styles.photoImg}
            priority
            sizes="(max-width: 767px) 70vw, 380px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

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

  return (
    <section className={styles.heroCont} id="home" ref={sectionRef}>
      <div className="wrapper">
        <motion.div
          className={styles.heroLayout}
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className={styles.heroInfo}>
            <p className={styles.introLine}>
              <RevealLine delay={0.1}>Hello, I&apos;m</RevealLine>
            </p>

            <TypewriterName />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            >
              I love bringing ideas to life online crafting clean, dynamic,
              and eye-catching web experiences, one pixel at a time.
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
            </motion.div>
          </div>

          <HeroPhoto />
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
