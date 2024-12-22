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
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        className="absolute inset-0 pointer-events-none"
        width={40}
        height={40}
        maxOpacity={0.3}
        numSquares={100}
        duration={5}
      />

      {/* Footer Content */}
      <div className={styles.footerContainer}>
        {/* Contact Us Section */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: contact@mycompany.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/consulting">Consulting</Link>
            </li>
            <li>
              <Link href="/trainings">Trainings</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className={styles.socialLinks}>
          <h3>Social Links</h3>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <p className={styles.copy}>© {year} My Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
