"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import "../../globals.css";
import Header from "../components/Header";
import Footer from "src/app/ja/components/Footer";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";
import { fadeUp, stagger, cardEntrance } from "src/app/common/motion/variants";
import styles from "src/app/common/styles/HomeRedesign.module.css";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySqlImg from "src/assets/images/service/mysql.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";

const services = [
  {
    title: "ウェブ開発",
    description: "企業サイトから業務システムまで、使いやすく成果につながるWeb開発を行います。",
    image: DesktopImg.src,
    alt: "ウェブ開発",
    href: "/ja/service#section-web-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="12" rx="2"/><path d="M3 19h18M8 23h8"/>
      </svg>
    ),
  },
  {
    title: "アプリ開発",
    description: "企画段階から運用まで伴走し、現場で役立つモバイル体験を形にします。",
    image: AppDevelopmentImg.src,
    alt: "アプリ開発",
    href: "/ja/service#section-app-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "MySQLデータベース",
    description: "安定したデータ基盤の設計、最適化、連携まで一貫して対応します。",
    image: MySqlImg.src,
    alt: "MySQLデータベース",
    href: "/ja/service#section-sql-database",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    title: "日本語教育",
    description: "初心者から実務まで、使える日本語を段階的に学べます。",
    image: LanguageTeachingImg.src,
    alt: "日本語教育",
    href: "/ja/service#section-japanese-study",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

const stats = [
  { value: "8", label: "開発者数" },
  { value: "4", label: "進行中のプロジェクト" },
  { value: "9", label: "納品プロジェクト" },
];

const profile = [
  ["会社名",       "Genio India Software Pvt. Ltd."],
  ["設立",         "2022年7月28日"],
  ["代表者",       "米田 卓也"],
  ["所在地",       "Namakkal, Tamil Nadu, India"],
  ["納品実績",     "5"],
  ["グループ会社", "株式会社ジェニオ"],
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

        {/* ── ヒーロー ── */}
        <section
          className={styles.hero}
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <motion.img
            src="/images/home/hero-gemini1.png"
            alt="Genio Indiaチーム"
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
                共に考え、共に形にする
              </motion.p>
              <motion.h1
                className={styles.heroTitle}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
              >
                あらゆる企業向けに<br />
                <span>高品質なWebサイトを提供</span>
              </motion.h1>
              <motion.p
                className={styles.heroDesc}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              >
                課題の定義からデザイン、開発、継続的な改善まで、全プロセスをサポートします。
                Web・アプリ・データベースのソリューションを、確かな実装品質でお届けします。
              </motion.p>
              <motion.div
                className={styles.heroActions}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35 } } }}
              >
                <Link href="/ja/contactus" className={styles.btnPrimary}>お問い合わせ &rarr;</Link>
              </motion.div>
            </div>
          </motion.div>
          <HeroWaveDivider fill="#f9fafb" />
        </section>

        {/* ── サービス ── */}
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
            <p className={styles.sectionEyebrow}>事業内容</p>
            <h2 className={styles.sectionTitle}>提供する<span>サービス</span></h2>
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

        {/* ── 実績バンド ── */}
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

        {/* ── 会社概要 ── */}
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
            <p className={styles.sectionEyebrow}>会社概要</p>
            <h2 className={styles.sectionTitle}>Genio <span>Indiaについて</span></h2>
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
                title="Genio India の所在地"
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
