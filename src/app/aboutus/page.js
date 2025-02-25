"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";

import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import TeamSection from "src/app/aboutus/TeamSection";
import ScrollTop from "src/app/scrolltop/ScrollTop";
import styles from "src/app/styles/Aboutus.module.css";
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
                  <h3 className={styles.year}>2025</h3>
                  <p className={styles.description}>
                    Focused on website and application development services,
                    Genio India has expanded its portfolio.
                  </p>
                </div>
                <div className={styles.timelineDot}></div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.year}>2024</h3>
                  <p className={styles.description}>
                    The company relocated to a new office in Vennandur and began
                    offering Japanese language training for its IT engineers.
                  </p>
                </div>
                <div className={styles.timelineDot}></div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.year}>2023</h3>
                  <p className={styles.description}>
                    Expanded our development team and established strong
                    partnerships with international clients.
                  </p>
                </div>
                <div className={styles.timelineDot}></div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.year}>2022</h3>
                  <p className={styles.description}>
                    Genio India Software Pvt. Ltd. was established in December,
                    marking the beginning of our journey.
                  </p>
                  <p className={styles.description}>
                    The Indian Operation is aimed at fulfilling both offshore
                    Development Requirements.
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
        {/* </div> */}
      </div>
      <ScrollTop/>
      <Footer />
    </>
  );
}