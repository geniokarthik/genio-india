"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import "../../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";
import { fadeUp, stagger, cardEntrance } from "src/app/common/motion/variants";
import styles from "src/app/common/styles/HomeRedesign.module.css";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySQLImg from "src/assets/images/service/mysql.png";
import LanguageImg from "src/assets/images/service/languageteaching.png";

const services = [
  {
    title: "Web Development",
    description: "We build websites and business systems that are easy to use and designed to create measurable results.",
    image: DesktopImg.src,
    alt: "Web development",
    href: "/en/service#section-web-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="12" rx="2"/><path d="M3 19h18M8 23h8"/>
      </svg>
    ),
  },
  {
    title: "App Development",
    description: "From planning to launch, we create practical mobile experiences that support real work in the field.",
    image: AppDevelopmentImg.src,
    alt: "App development",
    href: "/en/service#section-app-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "MySQL Database",
    description: "We handle database design, optimization, and integration to build a stable foundation for your data.",
    image: MySQLImg.src,
    alt: "MySQL database",
    href: "/en/service#section-sql-database",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    title: "Japanese Education",
    description: "From beginner level to practical workplace learning, we help teams build usable Japanese skills step by step.",
    image: LanguageImg.src,
    alt: "Japanese education",
    href: "/en/service#section-japanese-study",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "8", label: "Developers" },
  { value: "4", label: "Ongoing Projects" },
  { value: "9", label: "Delivered Projects" },
];

const profile = [
  ["Company Name",       "Genio India Software Pvt. Ltd."],
  ["Established",        "July 28, 2022"],
  ["Representative",     "TAKUYA YONEDA"],
  ["Location",           "Namakkal, Tamil Nadu, India"],
  ["Delivered Projects", "5"],
  ["Parent Company",     "Genio Co., Ltd."],
];

export default function Home() {
  const heroRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const parallaxX = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  const handleHeroMouseMove = (e) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (e.clientY - bounds.top) / bounds.height - 0.5;
    rawX.set(relX * 28);
    rawY.set(relY * 28);
  };

  const handleHeroMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const servicesRef = useRef(null);
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });
  const servicesBackdropY = useTransform(servicesProgress, [0, 1], [-40, 40]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&family=Fredoka:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <Header />
      <main>

        {/* ── HERO ── */}
        <section
          className={styles.hero}
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <motion.img
            src="/images/home/hero-gemini1.png"
            alt="Genio India Team"
            className={styles.heroImg}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div aria-hidden="true" className={styles.heroOverlay} />

          <motion.div
            className={styles.heroLeft}
            initial="hidden"
            animate="show"
            variants={stagger()}
          >
            <div aria-hidden="true" className={styles.heroLeftBg}>
              <motion.div
                className={styles.heroCanvasSlot}
                style={{ x: parallaxX, y: parallaxY }}
              >
                <AnimatedHeroBackdrop density={0.55} className={styles.heroCanvasBackdrop} />
              </motion.div>
              <motion.div
                className={styles.heroDotSlot}
                style={{ x: parallaxX, y: parallaxY }}
              >
                <div className={styles.heroDecorDot} />
              </motion.div>
            </div>
            <div className={styles.heroLeftContent}>
              <motion.p
                className={styles.heroTag}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                Think together, build together
              </motion.p>
              <motion.h1
                className={styles.heroTitle}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
              >
                High-quality web solutions<br />
                <span>for every business</span>
              </motion.h1>
              <motion.p
                className={styles.heroDesc}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              >
                We support the full process from defining challenges to design, development,
                and continuous improvement. Our team delivers web, app, and database solutions
                with strong implementation quality.
              </motion.p>
              <motion.div
                className={styles.heroActions}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35 } } }}
              >
                <Link href="/en/contactus" className={styles.btnPrimary}>Contact Us &rarr;</Link>
              </motion.div>
            </div>
          </motion.div>
          <HeroWaveDivider fill="#f9fafb" />
        </section>

        {/* ── SERVICES ── */}
        <motion.section
          ref={servicesRef}
          className={styles.servicesSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger()}
        >
          <motion.div className={styles.servicesBackdropWrap} style={{ y: servicesBackdropY }}>
            <AnimatedHeroBackdrop className={styles.servicesBackdrop} />
          </motion.div>
          <SectionDecor variant="section" canvas={false} />
          <motion.div className={styles.sectionCenter} variants={fadeUp}>
            <p className={styles.sectionEyebrow}>Our Services</p>
            <h2 className={styles.sectionTitle}>What We <span>Offer</span></h2>
          </motion.div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={{ hidden: { opacity: 0, ...cardEntrance(i) }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <Link href={s.href} className={styles.serviceCard}>
                  <img className={styles.serviceThumb} src={s.image} alt={s.alt} loading="lazy" />
                  <div className={styles.serviceBody}>
                    <div className={styles.serviceIconRow}>
                      <div className={styles.serviceIcon}>{s.icon}</div>
                      <p className={styles.serviceName}>{s.title}</p>
                    </div>
                    <p className={styles.serviceDesc}>{s.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── STATS BAND ── */}
        <motion.div
          className={styles.statsBand}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger()}
        >
          <div className={styles.statsInner}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.statItem}
                variants={{ hidden: { opacity: 0, ...cardEntrance(i + 2) }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5, delay: i * 0.12 } } }}
              >
                <p className={styles.statNumber}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── COMPANY PROFILE ── */}
        <motion.section
          className={styles.profileSection}
          id="companyprofile"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger()}
        >
          <div className={styles.profileBackdropWrap}>
            <AnimatedHeroBackdrop className={styles.profileBackdrop} />
          </div>
          <motion.div className={styles.sectionCenter} style={{ marginBottom: "36px" }} variants={fadeUp}>
            <p className={styles.sectionEyebrow}>Company Profile</p>
            <h2 className={styles.sectionTitle}>About <span>Genio India</span></h2>
          </motion.div>
          <motion.div
            className={styles.profileCard}
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <div className={styles.profileTable}>
              {profile.map(([key, val], i) => (
                <motion.div
                  key={key}
                  className={styles.profileRow}
                  initial={{ opacity: 0, ...cardEntrance(i + 1) }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <span className={styles.profileKey}>{key}</span>
                  <span className={styles.profileVal}>{val}</span>
                </motion.div>
              ))}
            </div>
            <div className={styles.mapWrap}>
              <iframe
                title="Genio India location"
                src="https://www.google.com/maps?q=11.515406,78.091705&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.section>

      </main>
      <ScrollTop />
      <Footer />
    </>
  );
}
