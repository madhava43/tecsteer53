import styles from "../styles/Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ServiceCard;
