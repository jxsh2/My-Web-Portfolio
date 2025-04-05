import { Button } from "semantic-ui-react";
import Image from "next/image";
import styles from "../../public/components/hero-section.module.scss";
import arrow from "../../public/static/images/other/arrow.png";

const HeroSection = () => {
  return (
    <section className={styles.heroCont} id="home">
      <div className="wrapper">
        <div className={styles.heroInfo}>
          <h5>CREATE. INNOVATE. LEARN. ELEVATE.</h5>
          <h1>
            Hi, I'm <span>Idan Josh Bosi</span>, Creative Developer
          </h1>
          <p>
            Crafting visually engaging and dynamic web experiences, one pixel at
            a time, with precision and creativity.
          </p>

          <div className={styles.buttonGrid}>
            <div>
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
            </div>

            <div className={styles.arrow}>
              <Image
                src={arrow}
                alt="Arrow"
                className={styles.arrowImg}
                fill={false}
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
