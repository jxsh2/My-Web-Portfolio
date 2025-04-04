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
            {/* Home link */}
            <Link href="#home" passHref>
              <a>home</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            {/* About link */}
            <Link href="#about" passHref>
              <a>about</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            {/* Skills link */}
            <Link href="#tech-stack" passHref>
              <a>skills</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            {/* Projects link */}
            <Link href="#projects" passHref>
              <a>projects</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            {/* Contact link */}
            <Link href="#contact" passHref>
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderSection;
