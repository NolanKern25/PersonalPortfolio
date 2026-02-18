import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out at any time!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:nolankern25@outlook.com">Email</a>
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/nolan-kern25/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="GitHub icon" />
          <a href="https://www.github.com/NolanKern25">Github</a>
        </li>
      </ul>
    </footer>
  );
};