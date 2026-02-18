import React from "react";
import nolanImage from "../../assets/nolan/nolanImage.png";
import styles from "./Nolan.module.css";
import resume from "../../assets/nolan/Resume - Nolan Kern 2026.pdf";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";

export const Nolan = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <p className={styles.kicker}>Software Developer</p>
        <h1 className={styles.title}>Hi, I&apos;m Nolan</h1>
        <p className={styles.description}>
          I am currently pursuing a B.S. in Computer Science at Ashland
          University. I focus on web development and graphic design, and I enjoy
          building clean, performant digital experiences.
        </p>
        <div className={styles.actions}>
          <a href="mailto:nolankern25@outlook.com" className={styles.primaryBtn}>
            Contact Me
          </a>
          <a
            href={resume}
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/nolan-kern25/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a
            href="https://www.github.com/NolanKern25"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" className={styles.socialIcon} />
          </a>
        </div>
      </div>
      <img src={nolanImage} alt="Nolan Kern" className={styles.nolanImg} />
      <div className={styles.topBlur} />
    </section>
  );
};