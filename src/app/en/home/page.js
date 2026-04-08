"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import styles from "src/app/common/styles/HomeRedesign.module.css";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySqlImg from "src/assets/images/service/mysql.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";

const IMG = {
  hero: "/images/home/hero-team.jpg",
  heroTwo: "/images/home/hero-team-en.jpg",
  heroThree: "/images/home/hero-collaboration.jpg",
  webDev: DesktopImg.src,
  appDev: AppDevelopmentImg.src,
  mysql: MySqlImg.src,
  japanese: LanguageTeachingImg.src,
  case1: "/images/home/project-case1.jpg",
  case2: "/images/home/project-case2.jpg",
  case3: "/images/home/project-case3.jpg",
};

const heroImages = [
  { src: IMG.hero, alt: "Team collaboration" },
  { src: IMG.heroTwo, alt: "Development team meeting" },
  { src: IMG.heroThree, alt: "Team working together" },
];

const services = [
  {
    title: "Web Development",
    description:
      "We build websites and business systems that are easy to use and designed to create measurable results.",
    image: IMG.webDev,
    alt: "Web development",
    href: "/en/service#section-web-development",
  },
  {
    title: "App Development",
    description:
      "From planning to launch, we create practical mobile experiences that support real work in the field.",
    image: IMG.appDev,
    alt: "App development",
    href: "/en/service#section-app-development",
  },
  {
    title: "MySQL Database",
    description:
      "We handle database design, optimization, and integration to build a stable foundation for your data.",
    image: IMG.mysql,
    alt: "MySQL database",
    href: "/en/service#section-sql-database",
  },
  {
    title: "Japanese Education",
    description:
      "From beginner level to practical workplace learning, we help teams build usable Japanese skills step by step.",
    image: IMG.japanese,
    alt: "Japanese education",
    href: "/en/service#section-japanese-study",
  },
];

const projectGroups = [
  {
    title: "Services Built by GENIO INDIA",
    description:
      "Products and platforms developed directly by our team as part of our ongoing software delivery work.",
    image: IMG.case2,
    alt: "Services built by Genio India",
    projects: ["Sales Ledger", "Chatbot"],
  },
  {
    title: "Services GENIO INDIA Supports",
    description:
      "Projects where our team contributes development, maintenance, or operational support together with partners and clients.",
    image: IMG.case3,
    alt: "Services supported by Genio India",
    projects: ["Tarte"],  
  },
];

const stats = [
  { value: "8", label: "Developers", icon: "👥" },
  { value: "5", label: "Ongoing Projects", icon: "📊" },
  { value: "5", label: "Delivered Projects", icon: "✅" },
];

const profile = [
  ["Company Name", "Genio India Software Pvt. Ltd."],
  ["Established", "July 28, 2022"],
  ["Representative", "TAKUYA YONEDA"],
  ["Location", "Namakkal"],
  ["Delivered Projects", "5"],
  ["Group Company", "Genio Co., Ltd."],
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentHeroIndex((index) => (index + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main className={styles.homeShell}>
        <div className={styles.container}>
          <motion.section
            className={styles.hero}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedHeroBackdrop className={styles.heroMotionCanvas} />
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Think together, build together</p>
              <h1 className={styles.heroTitle}>
                High-quality web solutions for every business
              </h1>
              <p className={styles.heroDescription}>
                We support the full process from defining challenges to design,
                development, and continuous improvement. Our team delivers web,
                app, and database solutions with strong implementation quality.
              </p>
              <div className={styles.heroActions}>
                <Link href="/en/contactus" className={styles.primaryButton}>
                  Contact Us
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroArtBackdrop} />
              <div className={styles.heroImageFrame}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroImages[currentHeroIndex].src}
                    src={heroImages[currentHeroIndex].src}
                    alt={heroImages[currentHeroIndex].alt}
                    className={styles.heroImage}
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              <div className={styles.heroIndicators}>
                {heroImages.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    className={`${styles.heroIndicator} ${index === currentHeroIndex ? styles.heroIndicatorActive : ""}`}
                    onClick={() => setCurrentHeroIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
              <Link href="/en/aboutus" className={styles.heroFloatingCard}>
                <span className={styles.heroBadge}>N</span>
                <div>
                  <p className={styles.heroFloatingLabel}>About Us</p>
                  <p className={styles.heroFloatingTitle}>with us</p>
                </div>
                <span className={styles.heroFloatingArrow}>↗</span>
              </Link>
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Services</p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link href={service.href} className={styles.serviceCardLink}>
                    <article className={styles.serviceCard}>
                      <div className={styles.serviceIconWrap}>
                        <img
                          src={service.image}
                          alt={service.alt}
                          className={styles.serviceImage}
                          loading="lazy"
                        />
                      </div>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className={styles.sectionSummary}>
              We engage directly with our clients&apos; challenges and aim to
              create services that benefit everyone involved.
            </p>
          </motion.section>

          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Projects</p>
            </div>
            <div className={styles.projectShowcaseGrid}>
              {projectGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  className={styles.projectShowcaseCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className={styles.projectShowcaseMedia}>
                    <img
                      src={group.image}
                      alt={group.alt}
                      className={styles.projectShowcaseImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.projectShowcaseBody}>
                    <p className={styles.projectShowcaseLabel}>
                      {group.projects.length} Projects
                    </p>
                    <h3 className={styles.projectShowcaseTitle}>{group.title}</h3>
                    <p className={styles.projectShowcaseDescription}>
                      {group.description}
                    </p>
                    <div className={styles.projectTagList}>
                      {group.projects.map((project) => (
                        <span key={project} className={styles.projectTag}>
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className={styles.caseStudyFooter}>
              <Link href="/en/service" className={styles.caseStudyLink}>
                View services ↗
              </Link>
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Achievements</p>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <p className={styles.statLabel}>{stat.label}</p>
                  <div className={styles.statRow}>
                    <p className={styles.statValue}>{stat.value}</p>
                    <span className={styles.statIcon}>{stat.icon}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.profileSection}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            id="companyprofile"
          >
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Company Profile</p>
            </div>
            <div className={styles.profileCard}>
              <div className={styles.profileDetails}>
                {profile.map(([label, value]) => (
                  <div key={label} className={styles.profileItem}>
                    <p className={styles.profileLabel}>{label}</p>
                    <p className={styles.profileValue}>{value}</p>
                  </div>
                ))}
              </div>
              <div className={styles.mapCard}>
                <iframe
                  title="Genio India location"
                  className={styles.mapFrame}
                  src="https://www.google.com/maps?q=11.515406,78.091705&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className={styles.mapCaption}>View on Google Maps ↗</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <ScrollTop />
      <Footer />
    </>
  );
}
