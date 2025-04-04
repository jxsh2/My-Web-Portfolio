import { Button, Divider, Icon } from "semantic-ui-react";
import styles from "../../public/components/hero-section.module.scss";
import Image from "next/image";
import hero from "../../public/static/images/hero.png";

const HeroSection = () => {
  return (
    <div className="wrapper">
      <section className={styles.heroCont}>
        <div className={styles.heroInfo}>
          <h5>CREATE. INNOVATE. LEARN. ELEVATE.</h5>
          <h1>
            Hi, I'm <span>Idan Josh Bosi</span>, Creative Developer
          </h1>
          <p>
            Crafting visually engaging and dynamic web experiences, one pixel at
            a time, with precision and creativity.
          </p>
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
            <Button>Github</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/idan-josh-bosi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>LinkedIn</Button>
          </a>
        </div>
        {/* 
        <div className={styles.heroImage}>
          <Image className={styles.hero} src={hero} alt="Profile" />
        </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
