import styles from "../../public/components/header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#tech-stack" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const HeaderSection = () => {
  return (
    <motion.div
      className={styles.cont}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 3 }}
    >
      <Link href="/" passHref>
        <motion.label
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          idan josh bosi
        </motion.label>
      </Link>

      <nav>
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={item.href}>
                <motion.span transition={{ duration: 0.2 }}>
                  {item.label}
                </motion.span>
              </Link>
              {index < navItems.length - 1 && (
                <span style={{ margin: "0 10px" }}>-</span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default HeaderSection;
