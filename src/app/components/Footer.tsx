"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { AnimatedGridPattern } from "../../components/ui/animated-grid-pattern";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={`${styles.footer} relative`}>
      {/* Animated Grid Pattern */}
      <AnimatedGridPattern
        className="absolute inset-0 pointer-events-none"
        width={40}
        height={40}
        maxOpacity={0.3}
        numSquares={100}
        duration={6}
      />

      {/* Footer Content */}
      <div className="relative container mx-auto text-center z-10">
        {/* Quick Links */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <p className={styles.copy}>© {year} My Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
