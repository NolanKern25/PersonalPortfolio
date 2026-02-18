import React from "react";

import vitalityImage from "../../assets/history/vitalitylogoblue.png";
import baseballImage from "../../assets/history/baseball.jpg";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  const historyImages = {
    vitality: vitalityImage,
    baseball: baseballImage,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img
              src={historyImages[historyItem.image] || vitalityImage}
              alt={`${historyItem.organisation} logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                {historyItem.experiences.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
              {historyItem.workLink ? (
                <a
                  href={historyItem.workLink}
                  className={styles.workLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Work
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};