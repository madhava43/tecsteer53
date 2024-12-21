import styles from "../styles/About.module.css";

const Timeline = () => {
  const milestones = [
    { year: "2010", event: "Founded the company with a vision to innovate." },
    { year: "2015", event: "Launched our flagship product, reaching global markets." },
    { year: "2020", event: "Expanded to 10 countries and 100+ employees." },
    { year: "2023", event: "Awarded Best Tech Company of the Year." },
  ];

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <div key={index} className={styles.timelineItem}>
          <span className={styles.timelineYear}>{milestone.year}</span>
          <p className={styles.timelineEvent}>{milestone.event}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
