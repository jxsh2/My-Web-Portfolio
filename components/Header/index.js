import styles from "../../public/components/header.module.scss";
import Link from "next/link"; // Import Link from Next.js

const HeaderSection = () => {
  return (
    <div className={styles.cont}>
      {/* Make the label clickable and refresh the page */}
      <Link href="/" passHref>
        <label
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        >
          idan josh bosi
        </label>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="#home">home</Link>
          </li>
          <li>-</li>
          <li>
            <Link href="#about">about</Link>
          </li>
          <li>-</li>
          <li>
            <Link href="#tech-stack">skills</Link>
          </li>
          <li>-</li>
          <li>
            <Link href="#projects">projects</Link>
          </li>
          <li>-</li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderSection;
