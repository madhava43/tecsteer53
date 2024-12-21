import Image from "next/image";
import styles from "../styles/About.module.css";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamCard = ({ name, position, image, bio }: TeamCardProps) => {
  return (
    <div className={styles.teamCard}>
      {/* Use Next.js <Image /> for optimization */}
      <Image
        src={image}
        alt={name}
        className={styles.teamImage}
        width={100} // Provide width
        height={100} // Provide height
      />
      <h3 className={styles.teamName}>{name}</h3>
      <p className={styles.teamPosition}>{position}</p>
      <p className={styles.teamBio}>{bio}</p>
    </div>
  );
};

export default TeamCard;
