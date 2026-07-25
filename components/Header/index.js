import { useState, useEffect } from "react";
import styles from "../../public/components/header.module.scss";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "home", href: "#home", id: "home" },
  { label: "about", href: "#about", id: "about" },
  { label: "projects", href: "#projects", id: "projects" },
  { label: "contact", href: "#contact", id: "contact" },
];

const socials = [
  { label: "GitHub", icon: "github", href: "https://github.com/jxsh2" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/idan-josh-bosi/",
  },
];

const SECTION_IDS = navItems.map((item) => item.id);

const easing = [0.25, 0.1, 0.25, 1];

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <>
      <motion.div
        className={styles.headerBar}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
      >
        <Link href="#home" className={styles.nameChip}>
          <span className={styles.nameChipName}>idan josh bosi</span>
          <span className={styles.nameChipDivider}>/</span>
          <span className={styles.nameChipRole}>developer</span>
        </Link>

        <nav className={styles.desktopNav}>
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${styles.navChip} ${
                      isActive ? styles.navChipActive : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easing }}
          >
            <button
              type="button"
              className={styles.overlayClose}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              &times;
            </button>

            <nav className={styles.overlayNav}>
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.4,
                      ease: easing,
                      delay: 0.1 + index * 0.07,
                    }}
                  >
                    <Link href={item.href} onClick={handleNavClick}>
                      <span className={styles.overlayIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className={styles.overlaySocials}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </motion.div>

            <motion.span
              className={styles.overlaySignature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              idan josh bosi
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;
