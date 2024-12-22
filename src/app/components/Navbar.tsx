"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const services = [
    { name: "Mobile Development", link: "/services/mobile-development" },
    { name: "Cloud Services", link: "/services/cloud-services" },
    { name: "Application Services", link: "/services/application-services" },
    { name: "AWS Consulting", link: "/services/aws-consulting" },
    { name: "Web Development", link: "/services/web-development" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
    { name: "Data Analytics", link: "/services/data-analytics" },
    { name: "Cybersecurity", link: "/services/cybersecurity" },
  ];

  useEffect(() => {
    setIsClient(true); // Ensure rendering is client-side
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      {isClient && (
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)} // Show dropdown on hover
            onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown on leave
          >
            <Link href="/services" onClick={closeMenu}>
              <span
                className={styles.dropdownToggle}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering dropdown toggle
                  closeMenu(); // Close menu if mobile
                }}
              >
                Services
              </span>
            </Link>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} onClick={closeMenu}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/consulting" onClick={closeMenu}>
              Consulting
            </Link>
          </li>
          <li>
            <Link href="/trainings" onClick={closeMenu}>
              Trainings
            </Link>
          </li>
          <li>
            <Link href="/careers" onClick={closeMenu}>
              Careers
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
