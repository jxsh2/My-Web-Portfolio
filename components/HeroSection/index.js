import { Button, Divider, Icon } from "semantic-ui-react";
import styles from "../../public/components/hero-section.module.scss";
import Image from "next/image";
import hero from "../../public/static/images/hero.png";

const HeroSection = () => {
  return (
    <div className="wrapper">
      <section className={styles.heroCont}>
        <div className={styles.heroInfo}>
          <h5>TURNING YOUR IDEAS INTO DIGITAL REALITY</h5>
          <h1>
            Hi, I'm <span>Idan</span>, Front End Developer
          </h1>
          <p>
            Crafting visually engaging and dynamic web experiences, one pixel at
            a time, with precision and creativity.
          </p>
          <a
            href="/static/pdf/[BSCS 3-4] Bosi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>RESUME</Button>
          </a>
        </div>

        <div className={styles.heroImage}>
          <Image className={styles.hero} src={hero} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
