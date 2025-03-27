import styles from "../../public/components/header.module.scss";
import Link from "next/link"; // Import Link from Next.js

const HeaderSection = () => {
  return (
    <div className={styles.cont}>
      {/* Make the label clickable and refresh the page */}
      <Link href="/" passHref>
        <label style={{ cursor: "pointer" }}>BOSI.PORTFOLIO</label>
      </Link>
      <nav>
        <ul>
          <li>
            {/* Home link */}
            <Link href="/" passHref>
              <a>HOME</a>
            </Link>
          </li>
          <li>
            {/* About link */}
            <Link href="#about" passHref>
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            {/* Skills link */}
            <Link href="#tech-stack" passHref>
              <a>SKILLS</a>
            </Link>
          </li>
          <li>
            {/* Projects link */}
            <Link href="#projects" passHref>
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            {/* Contact link */}
            <Link href="#contact" passHref>
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderSection;
