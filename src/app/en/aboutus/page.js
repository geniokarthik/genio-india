"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";

import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import TeamSection from "src/app/en/aboutus/TeamSection";
import Jlpt from "src/app/en/aboutus/Jlpt";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import styles from "src/app/common/styles/Aboutus.module.css";
import sidelogo from "src/assets/images/aboutus/sidelogo.png";

export default function AboutUs() {
  const timelineRef = useRef(null);

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
      <Header />
      <div className={styles.home}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.hero}
          id="corporatehistory"
        >
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroRedText}>Corporate History</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              The Story of Our Growth and Milestones Over the Years
            </h2>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.timelineSection}
        >
          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2026</span>
                <span className={styles.text}> - Become a Trusted Long-Term Partner for Japanese Companies</span>
                <p className={styles.description}>
                  Standardize a development framework that ensures security, quality, and efficiency, going beyond simply accepting projects from Japanese companies.
                </p>
                <p className={styles.description}>
                  Build long-term, trust-based relationships that lead to continuous contracts and referrals・
                </p>
                <p className={styles.description}>
                  Establish a talent development model that balances technical skills, Japanese language.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2025</span>
                <span className={styles.text}> - Expansion of Japanese Language Education & Global Talent Support</span>
                <p className={styles.description}>
                  In addition to providing Japanese language education for engineers, we launched training programs for university students and graduates interested in learning Japanese.
                </p>
                <p className={styles.description}>
                  We placed a special focus on the construction industry, offering tailored language training and a new talent-matching service to connect skilled professionals with Japanese companies.
                </p>
                <p className={styles.description}>
                  Beyond the IT sector, we continue to strengthen our collaboration with companies in various industries.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2024</span>
                <span className={styles.text}> - New Office Opening & Talent Development</span>
                <p className={styles.description}>
                  To better support projects for the Japanese market, we started offering Japanese language education for our engineers.
                </p>
                <p className={styles.description}>
                  We also began hiring new graduate engineers and introduced in-house training programs.
                </p>
                <p className={styles.description}>
                  To accommodate further growth, we relocated to a new office and enhanced our development environment.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2023</span>
                <span className={styles.text}> - Business Expansion & Development Scope Growth</span>
                <p className={styles.description}>
                  We expanded our partnerships with Japanese clients and officially launched web system and mobile app development services.
                </p>
                <p className={styles.description}>
                  By adopting agile development methodologies, we established a fast and flexible development process.
                </p>
                <p className={styles.description}>
                  Additionally, we strengthened our project management capabilities while collaborating with clients across various industries.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2022</span>
                <span className={styles.text}> - Company Establishment & Offshore Development Launch</span>
                <p className={styles.description}>
                  Our company was established in 2022 with a primary focus on offshore development in India.
                </p>
                <p className={styles.description}>
                  We aimed to provide high-quality and cost-effective IT development services to support the digital transformation (DX) of Japanese businesses.
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
          <Image
            src={sidelogo}
            alt="sloganicon"
            className={styles.heroBackgroundGradient}
          />
        </motion.section>
        <TeamSection />
        <Jlpt />
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}