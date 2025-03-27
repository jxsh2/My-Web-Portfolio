import { Divider, Icon } from "semantic-ui-react";
import styles from "../../public/components/footer-section.module.scss";

const FooterSection = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="large" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size="large" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" size="large" />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="large" />
        </a>
        <a href="mailto:joshidabosi02@gmail.com">
          <Icon name="mail" size="large" />
        </a>
        <h6>joshidabosi02@gmail.com</h6>
      </div>
      <div className={styles.credits}>
        <h6>© 2024 BOSI.PORTFOLIO . All rights reserved.</h6>
      </div>
    </section>
  );
};

export default FooterSection;
