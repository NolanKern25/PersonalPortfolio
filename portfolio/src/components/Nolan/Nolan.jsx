import React from "react";
import nolanImage from "../../assets/nolan/nolanImage.png";
import styles from "./Nolan.module.css";
import resume from "../../assets/nolan/NolanKern-Resume.pdf";
import { getImageUrl } from "../../utils";

export const Nolan = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Nolan!</h1>
        <p className={styles.description}>
        I am currently pursuing a B.S. in Computer Science at Ashland University. I enjoy Web Development and
        various types Graphic Design. I hope to build a career in Software and/or Web Develoment!
        </p>
        <a href="mailto:nkern@ashland.edu" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={resume} className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
      <img
        src={nolanImage} alt="" className={styles.nolanImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};