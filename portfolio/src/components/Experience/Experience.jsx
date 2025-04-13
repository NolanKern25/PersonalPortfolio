import React from "react";

import vitalityImage from "../../assets/history/vitalitylogoblue.png";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import adobeps from "../../assets/skills/adobeps.png";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import javascript from "../../assets/skills/js.png";
import node from "../../assets/skills/node.png";
import react from "../../assets/skills/react.png";
import php from "../../assets/skills/php.png";

// Card Component
const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
export const Experience = () => {
  const skills = [
    { image: java, title: "", description: "" },
    { image: javascript, title: "", description: "" },
    { image: html, title: "", description: "" },
    { image: css, title: "", description: "" },
    { image: php, title: "", description: "" },
    { image: node, title: "", description: "" },
    { image: react, title: "", description: "" },
    { image: adobeps, title: "", description: "" },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <Card
              key={id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={vitalityImage} alt="" />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};