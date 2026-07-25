import { Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
import styles from "../../public/components/footer-section.module.scss";

const FooterSection = () => {
  return (
    <motion.section
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/idanbsi_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="large" />
        </a>
        <a
          href="https://www.facebook.com/idanjosh.bosi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook" size="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/idan-josh-bosi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" size="large" />
        </a>
        <a
          href="https://github.com/jxsh2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="large" />
        </a>
        <a href="mailto:joshidanbosi02@gmail.com">
          <Icon name="mail" size="large" />
        </a>
      </div>
      <div className={styles.credits}>
        <h6>© 2025 Bosi. All rights reserved.</h6>
      </div>
    </motion.section>
  );
};

export default FooterSection;
