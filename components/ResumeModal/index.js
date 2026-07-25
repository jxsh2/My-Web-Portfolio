import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../public/components/resume-modal.module.scss";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ResumeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setEmail("");
      setStatus("idle");
      setErrorMessage("");
    }, 300);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/request-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>

            {status === "success" ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3>Request sent</h3>
                <p>
                  Thanks! I&apos;ll send my resume straight to your inbox
                  shortly.
                </p>
                <button className={styles.doneButton} onClick={onClose}>
                  Done
                </button>
              </motion.div>
            ) : (
              <>
                <h3 id="resume-modal-title">Request my resume</h3>
                <p>
                  Drop your email below and I&apos;ll send a copy of my
                  resume directly to you.
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    autoFocus
                  />

                  {status === "error" && (
                    <span className={styles.errorText}>{errorMessage}</span>
                  )}

                  <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send request"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
