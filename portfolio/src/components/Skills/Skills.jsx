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
import python from "../../assets/skills/python.png";
import typescript from "../../assets/skills/Typescript_logo_2020.svg.png";
import tailwind from "../../assets/skills/Tailwind_CSS_Logo.svg.png";
import nextjs from "../../assets/skills/nextjs.png";
import ai from "../../assets/skills/ai.png";
import computerArch from "../../assets/skills/computer-arch.png";
import database from "../../assets/skills/database (1).png";
import videoEditing from "../../assets/skills/montage.png";

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
    { image: python, label: "Python" },
    { image: typescript, label: "TypeScript" },
    { image: tailwind, label: "Tailwind CSS" },
    { image: nextjs, label: "Next.js" },
    { image: ai, label: "Artificial Intelligence" },
    { image: computerArch, label: "Computer Architecture" },
    { image: database, label: "Database Management" },
    { image: videoEditing, label: "Video Editing" },
  ];

  const uniqueSkills = skills.filter(
    (skill, index, allSkills) =>
      index === allSkills.findIndex((item) => item.label === skill.label)
  );

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {uniqueSkills.map((skill) => (
          <article key={skill.label} className={styles.card}>
            {skill.image ? (
              <img src={skill.image} alt={skill.label} className={styles.icon} />
            ) : null}
            <p>{skill.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
