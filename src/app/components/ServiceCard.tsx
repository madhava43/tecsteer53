"use client";
import { useState } from "react";
import styles from "../styles/Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string; // Added for the "Know More" button
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.card}
      onClick={() => setFlipped((prev) => !prev)} // Toggle flip on click
    >
      <div
        className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}
      >
        {/* Front Side */}
        <div className={styles.cardFront}>
          <img src={icon} alt={title} className={styles.icon} />
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>

        {/* Back Side */}
        <div className={styles.cardBack}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>
            Explore our {title} services in detail.
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card flipping on button click
              window.location.href = link;
            }}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
