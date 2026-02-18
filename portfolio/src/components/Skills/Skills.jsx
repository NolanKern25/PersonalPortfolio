import React from "react";

import styles from "./Skills.module.css";
import adobeps from "../../assets/skills/adobeps.png";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import javascript from "../../assets/skills/js.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import php from "../../assets/skills/php.png";

export const Skills = () => {
  const skills = [
    { image: java, label: "Java" },
    { image: javascript, label: "JavaScript" },
    { image: html, label: "HTML" },
    { image: css, label: "CSS" },
    { image: php, label: "PHP" },
    { image: node, label: "Node.js" },
    { image: react, label: "React" },
    { image: adobeps, label: "Adobe" },
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <article key={skill.label} className={styles.card}>
            <img src={skill.image} alt={skill.label} className={styles.icon} />
            <p>{skill.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
