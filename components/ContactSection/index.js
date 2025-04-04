import React from "react";

import style from "../../public/components/contact-section.module.scss";

const ContactSection = () => {
  return (
    <section className={style.contactSection} id="contact">
      <div className="wrapper">
        <h2>Want to work with me?</h2>
        <div className={style.contactGrid}>
          <h3>Send me a message</h3>
          <div className={style.email}>
            <a href="mailto:idan.bosi@example.com">
              Let’s build something awesome together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
