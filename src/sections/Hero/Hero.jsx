import styles from "./HeroStyle.module.css";
/* eslint-disable no-unused-vars */
import Hazem_image from "../../assets/formalphoto1.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import myphoto from "../../assets/myphoto.jpg";
import photome from "../../assets/photome.jpg";

import GithubIconLight from "../../assets/github-light.svg";
import LinkdinIconLight from "../../assets/linkedin-light.svg";
import GithubIconDark from "../../assets/github-dark.svg";
import LinkdinIconDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeICon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? GithubIconLight : GithubIconDark;
  const linkdinIcon = theme === "light" ? LinkdinIconLight : LinkdinIconDark;
  return (
    <section id="Home" className={styles.container}>
      <div className={styles.info}>
        <h2>
          Full Stack Developer
          <br />
          Software Engineer
        </h2>

        <span>
          <a href="https://github.com/hazemzakariasaad">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/hazem-zakaria-bb5769115/">
            <img src={linkdinIcon} alt="github" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a Systems & Biomedical Engineering Student with a passion for full
          stack development and software engineering. Skilled in Python,
          JavaScript, and C++, I enjoy creating web and desktop applications
          that make an impact.
        </p>
        <a href="https://drive.google.com/file/d/1IuCayLJ7wAj3Y9MVyMDuhSeLSqFfWJea/view?usp=sharing">
          <button>Resume</button>
        </a>
      </div>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={photome}
          alt="profile"
          // style={{ width: "600px", height: "400px", padding: "3px", borderRadius: "20%"}}
        />
        {/* <img
          className={styles.colorMode}
          src={themeICon}
          alt="color mode icon"
          onClick={toggleTheme}
        /> */}
      </div>
    </section>
  );
}

export default Hero;
