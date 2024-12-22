"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DotPattern } from "../components/ui/dot-pattern";
import styles from "./styles/Home.module.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Welcome to Tecsteer",
      description: "Your success starts here. Let's work together to achieve your goals.",
      button: "Get Started",
    },
    {
      heading: "Innovative Solutions",
      description: "Delivering cutting-edge technology solutions to help your business thrive.",
      button: "Learn More",
    },
    {
      heading: "Join Our Trainings",
      description: "Empowering individuals and businesses through advanced training programs.",
      button: "View Trainings",
    },
  ];

  const services = [
    {
      title: "Mobile Development",
      description: "Build cutting-edge mobile applications for iOS and Android.",
      icon: "/icons/mobile.png",
    },
    {
      title: "Cloud Services",
      description: "Leverage the power of cloud computing for scalability.",
      icon: "/icons/cloud.png",
    },
    {
      title: "Application Services",
      description: "Streamline your operations with custom application solutions.",
      icon: "/icons/application.png",
    },
    {
      title: "AWS Consulting",
      description: "Get expert advice on AWS architecture and services.",
      icon: "/icons/aws.png",
    },
    {
      title: "Web Development",
      description: "Build responsive, fast, and secure web applications.",
      icon: "/icons/web.png",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces for better user experiences.",
      icon: "/icons/uiux.png",
    },
    {
      title: "Data Analytics",
      description: "Unlock insights with data visualization and analytics.",
      icon: "/icons/data.png",
    },
    {
      title: "Cybersecurity",
      description: "Protect your systems with advanced cybersecurity solutions.",
      icon: "/icons/security.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className={styles.container}>
      {/* DotPattern Background */}
      <DotPattern
        width={10}
        height={10}
        cx={10}
        cy={10}
        cr={1}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ fill: "#ffffff" }}
      />
      {/* Hero Section with Slides */}
      <section className={styles.hero}>
        <div className={styles.slidesContainer}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <h1 className={styles.heading}>{slide.heading}</h1>
                <p className={styles.description}>{slide.description}</p>
                <div className={styles.buttons}>
                  <button className={styles.buttonPrimary}>{slide.button}</button>
                </div>
              </div>
            ))}
          </div>
          <button
            className={styles.navButtonLeft}
            aria-label="Previous Slide"
            onClick={handlePrev}
          >
            &#9664;
          </button>
          <button
            className={styles.navButtonRight}
            aria-label="Next Slide"
            onClick={handleNext}
          >
            &#9654;
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.subHeading}>About Us</h2>
        <p className={styles.paragraph}>
          At My Company, we are dedicated to delivering innovative solutions and
          exceptional services. Since our founding in 2010, we have helped
          businesses and individuals achieve their goals through creativity and
          technology.
        </p>
        <p className={styles.paragraph}>
          Our mission is to empower growth, and our vision is to lead the
          industry with sustainable and impactful solutions.
        </p>
        <Link href="/about" className={styles.link}>
          Learn more about us →
        </Link>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.subHeading}>Our Services</h2>
        <p className={styles.description}>
          Explore the range of services we offer to help your business thrive.
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  {/* Front Side */}
                  <div className={styles.cardFront}>
                    <img src={service.icon} alt={service.title} className={styles.icon} />
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                  {/* Back Side */}
                  <div className={styles.cardBack}>
                    <p className={styles.cardDescription}>{service.description}</p>
                    <button className={styles.cardButton}>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/services" className={styles.link}>
          See all services →
        </Link>
      </section>
    </main>
  );
}
