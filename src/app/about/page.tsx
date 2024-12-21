import styles from "../styles/About.module.css";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Company Details Section */}
      <section className={styles.section}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to My Company. Established in 2010, we have been committed to delivering 
          innovative solutions and exceptional services to our clients. Our mission is to 
          empower businesses and individuals through technology and creativity. 
        </p>
        <p className={styles.paragraph}>
          Our vision is to become a global leader in providing sustainable and impactful solutions 
          that make a difference in the world.
        </p>
      </section>

      {/* Leadership/Team Section */}
      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Leadership</h2>
        <div className={styles.teamGrid}>
          <TeamCard
            name="Jane Doe"
            position="CEO"
            image="/images/Jane.jpeg"
            bio="Jane has over 20 years of experience in leadership and technology."
          />
          <TeamCard
            name="John Smith"
            position="CTO"
            image="/images/john.jpeg"
            bio="John is a tech visionary with expertise in AI and software engineering."
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Journey</h2>
        <Timeline />
      </section>
    </div>
  );
}
