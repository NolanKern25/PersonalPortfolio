import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>

        <div className={styles.linkGroup}>
          <ul className={styles.iconLinks}>
            <li>
              <a
                href="mailto:nolankern25@outlook.com"
                className={styles.iconLink}
                aria-label="Email"
              >
                <img src={email} alt="Email icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nolan-kern25/"
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/NolanKern25"
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={github} alt="GitHub icon" />
              </a>
            </li>
          </ul>

          <ul className={styles.quickLinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>© {currentYear} Nolan Kern. All rights reserved.</p>
      </div>
    </footer>
  );
};