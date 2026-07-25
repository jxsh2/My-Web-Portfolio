import React from "react";
import { motion } from "framer-motion";
import style from "../../public/components/contact-section.module.scss";
import Magnetic from "../generics/Magnetic";

const ContactSection = () => {
  return (
    <section className={style.contactSection} id="contact">
      <div className="wrapper">
        {/* Heading entrance */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Want to work with me?
          <motion.span
            className={style.underline}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
          />
        </motion.h2>

        <div className={style.contactGrid}>
          {/* Slide in from right */}
          <motion.h3
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Send me a message
          </motion.h3>

          {/* Slide in from left with delay */}
          <motion.div
            className={style.email}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.9,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Magnetic strength={12} className={style.magneticEmail}>
              <a href="mailto:joshidanbosi02@gmail.com">
                Let’s build something awesome together
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
