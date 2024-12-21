"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Services.module.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const services = [
    { category: "web-development", name: "Web Development" },
    { category: "mobile-apps", name: "Mobile Apps" },
    { category: "ui-ux-design", name: "UI/UX Design" },
  ];

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Services
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {services.map((service) => (
            <li key={service.category}>
              <Link href={`/services/category/${service.category}`}>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
