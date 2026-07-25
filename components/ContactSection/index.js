import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "semantic-ui-react";
import style from "../../public/components/contact-section.module.scss";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!EMAIL_RE.test(form.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please write a message (at least 10 characters).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className={style.contactSection} id="contact">
      <div className="wrapper">
        <div className={style.contactGrid}>
          <motion.div
            className={style.contactInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span className={style.eyebrow} variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              Get In Touch
            </motion.span>

            <motion.h2 variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
              Let&apos;s create
              <br />
              something great
            </motion.h2>

            <motion.p variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }}>
              Have a project in mind, an opportunity to share, or just want to
              say hi? My inbox is open — fill out the form and I&apos;ll get
              back to you.
            </motion.p>

            <motion.div
              className={style.availability}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className={style.availabilityDot}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
              <span className={style.availabilityFull}>
                Available for freelance &amp; full-time opportunities
              </span>
              <span className={style.availabilityShort}>
                Available for work
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className={style.formPanel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {status === "success" ? (
              <motion.div
                className={style.successState}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3>Message sent</h3>
                <p>Thanks for reaching out — I&apos;ll reply as soon as I can.</p>
                <button type="button" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.fieldRow}>
                  <div className={style.field}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange("name")}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className={style.field}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className={style.field}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me a bit about your project or opportunity..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange("message")}
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && (
                  <span className={style.errorText}>{errorMessage}</span>
                )}

                <button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send message"}
                  {status !== "loading" && <Icon name="arrow right" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
