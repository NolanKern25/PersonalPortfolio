import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import frontendIcon from "../../assets/about/front-end.png";
import databaseIcon from "../../assets/about/database.png";
import abstractArtIcon from "../../assets/about/abstract-art.png";
import ashlandLogo from "../../assets/about/ashland-eagles-logo.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="About Nolan" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={ashlandLogo} alt="Ashland University logo" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>B.S. in Computer Science at Ashland University</p>
              <p>2023-2027</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={frontendIcon} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={databaseIcon} alt="Database icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={abstractArtIcon} alt="Abstract art icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>
              I have a strong graphic design skillset, including proficiency in Adobe, 
              with several years of experience
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};