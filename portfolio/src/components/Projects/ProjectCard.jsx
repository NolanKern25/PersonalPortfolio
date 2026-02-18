import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
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
      <div className={styles.links}>
        {demo ? (
          <a href={demo} className={styles.link}>
            Demo
          </a>
        ) : null}
        {source ? (
          <a href={source} className={styles.link}>
            Source
          </a>
        ) : null}
      </div>
    </div>
  );
};