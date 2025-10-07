import styles from "../../public/components/header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const easing = [0.25, 0.1, 0.25, 1];

const HeaderSection = () => {
  return (
    <motion.div
      className={styles.cont}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: -40, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: easing,
            delay: 4.2,
            when: "beforeChildren",
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing, delay: 1.4 }}
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
      </motion.div>

      <nav>
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: easing,
                delay: 1.5 + index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
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
