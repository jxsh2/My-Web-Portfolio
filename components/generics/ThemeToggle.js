import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../public/components/theme-toggle.module.scss";

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="1.5" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22.5" />
    <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
    <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
    <line x1="1.5" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22.5" y2="12" />
    <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
    <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
  </svg>
);

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) {
    return <span className={`${styles.togglePlaceholder} ${className}`} />;
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
    >
      <span className={styles.trackIcon}>
        <MoonIcon />
      </span>
      <span className={styles.trackIcon}>
        <SunIcon />
      </span>
      <motion.span
        className={styles.knob}
        animate={{ x: isLight ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
