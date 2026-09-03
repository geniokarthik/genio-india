"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../globals.css";

import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import TeamSection from "src/app/en/aboutus/TeamSection";
import Jlpt from "src/app/en/aboutus/Jlpt";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroParallaxDecor, { useHeroParallax } from "src/app/common/components/HeroParallaxDecor";
import styles from "src/app/common/styles/Aboutus.module.css";
import sidelogo from "src/assets/images/aboutus/sidelogo.png";

export default function AboutUs() {
  const timelineRef = useRef(null);
  const { heroRef, parallaxX, parallaxY, onMouseMove, onMouseLeave } = useHeroParallax();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(
      `.${styles.timelineItem}`
    );
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
      <Header />
      {/* Hero Section */}
      <section
        className={styles.hero}
        id="corporatehistory"
        ref={heroRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <motion.img
          src="/images/home/hero_real_team3.png"
          alt="Genio India team"
          className={styles.heroBgImg}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div aria-hidden="true" className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <HeroParallaxDecor x={parallaxX} y={parallaxY} />
          <Reveal as="div" x={-50} duration={0.8} immediate>
            <p className={styles.heroLabel}>Our Story</p>
            <h1 className={styles.heroTitle}>Corporate <span>History</span></h1>
            <p className={styles.heroDesc}>
              From a small offshore team in 2022 to a trusted long-term partner for Japanese
              companies — here&apos;s how Genio India has grown, year by year.
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.home}>

        {/* Timeline Section */}
        <Reveal as="section" duration={0.8} delay={0.3} className={styles.timelineSection}>
          <div className={styles.sectionCenter}>
            <p className={styles.sectionEyebrow}>Corporate History</p>
            <h2 className={styles.sectionTitle}>The Story of Our Growth and Milestones Over the Years</h2>
          </div>
          <SectionDecor variant="section" />
          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2026</span>
                <span className={styles.text}> - Become a Trusted Long-Term Partner for Japanese Companies</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  Standardize a development framework that ensures security, quality, and efficiency, going beyond simply accepting projects from Japanese companies.
                </li>
                <li className={styles.description}>
                  Build long-term, trust-based relationships that lead to continuous contracts and referrals・
                </li>
                <li className={styles.description}>
                  Establish a talent development model that balances technical skills, Japanese language.
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2025</span>
                <span className={styles.text}> - Expansion of Japanese Language Education &amp; Global Talent Support</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  In addition to providing Japanese language education for engineers, we launched training programs for university students and graduates interested in learning Japanese.
                </li>
                <li className={styles.description}>
                  We placed a special focus on the construction industry, offering tailored language training and a new talent-matching service to connect skilled professionals with Japanese companies.
                </li>
                <li className={styles.description}>
                  Beyond the IT sector, we continue to strengthen our collaboration with companies in various industries.
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2024</span>
                <span className={styles.text}> - New Office Opening &amp; Talent Development</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  To better support projects for the Japanese market, we started offering Japanese language education for our engineers.
                </li>
                <li className={styles.description}>
                  We also began hiring new graduate engineers and introduced in-house training programs.
                </li>
                <li className={styles.description}>
                  To accommodate further growth, we relocated to a new office and enhanced our development environment.
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2023</span>
                <span className={styles.text}> - Business Expansion &amp; Development Scope Growth</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  We expanded our partnerships with Japanese clients and officially launched web system and mobile app development services.
                </li>
                <li className={styles.description}>
                  By adopting agile development methodologies, we established a fast and flexible development process.
                </li>
                <li className={styles.description}>
                  Additionally, we strengthened our project management capabilities while collaborating with clients across various industries.
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2022</span>
                <span className={styles.text}> - Company Establishment &amp; Offshore Development Launch</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  Our company was established in 2022 with a primary focus on offshore development in India.
                </li>
                <li className={styles.description}>
                  We aimed to provide high-quality and cost-effective IT development services to support the digital transformation (DX) of Japanese businesses.
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={sidelogo}
            alt="sloganicon"
            className={styles.heroBackgroundGradient}
            style={{ width: "auto", height: "auto" }}
          />
        </Reveal>
        <TeamSection />
        <Jlpt />
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}
