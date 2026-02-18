import React from "react";

import styles from "./ProjectCard.module.css";
import doveLogo from "../../assets/projects/DoveLogoAlt.webp";
import neoLogo from "../../assets/projects/neo.jpg";
import nolanLogo from "../../assets/projects/nolanKern.jpg";

export const ProjectCard = ({
  project: { title, description, skills, demo, source, logo },
}) => {
  const workLink = demo || source;
  const logos = {
    dove: doveLogo,
    neo: neoLogo,
    nolan: nolanLogo,
  };
  const logoSrc = logos[logo];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.footer}>
        <div className={styles.links}>
          {workLink ? (
            <a
              href={workLink}
              className={styles.workLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Work
            </a>
          ) : null}
        </div>
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className={`${styles.logo} ${logo === "neo" ? styles.logoNeo : ""}`}
          />
        ) : null}
      </div>
    </div>
  );
};