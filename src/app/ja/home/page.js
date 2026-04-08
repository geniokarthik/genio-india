"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../../globals.css";
import Header from "../components/Header";
import Footer from "src/app/ja/components/Footer";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import styles from "src/app/common/styles/HomeRedesign.module.css";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySqlImg from "src/assets/images/service/mysql.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";

const IMG = {
  hero: "/images/home/hero-team.jpg",
  heroTwo: "/images/home/hero-team-jp.jpg",
  heroThree: "/images/home/hero-collaboration.jpg",
  webDev: DesktopImg.src,
  appDev: AppDevelopmentImg.src,
  mysql: MySqlImg.src,
  japanese: LanguageTeachingImg.src,
  case2: "/images/home/project-case2.jpg",
  case3: "/images/home/project-case3.jpg",
};

const heroImages = [
  { src: IMG.hero, alt: "チームコラボレーション" },
  { src: IMG.heroTwo, alt: "開発チームの打ち合わせ" },
  { src: IMG.heroThree, alt: "共同作業を行うチーム" },
];

const services = [
  {
    title: "ウェブ開発",
    description:
      "企業サイトから業務システムまで、使いやすく成果につながるWeb開発を行います。",
    image: IMG.webDev,
    alt: "ウェブ開発",
    href: "/ja/service#section-web-development",
  },
  {
    title: "アプリ開発",
    description:
      "企画段階から運用まで伴走し、現場で役立つモバイル体験を形にします。",
    image: IMG.appDev,
    alt: "アプリ開発",
    href: "/ja/service#section-app-development",
  },
  {
    title: "MySQLデータベース",
    description:
      "安定したデータ基盤の設計、最適化、連携まで一貫して対応します。",
    image: IMG.mysql,
    alt: "MySQLデータベース",
    href: "/ja/service#section-sql-database",
  },
  {
    title: "日本語教育",
    description:
      "初心者から実務まで、使える日本語を段階的に学べます。",
    image: IMG.japanese,
    alt: "日本語教育",
    href: "/ja/service#section-japanese-study",
  },
];

const projectGroups = [
  {
    title: "GENIO INDIAが作っているサービス",
    description:
      "自社で企画・開発を進めているサービスや、継続的に改善しているプロダクトです。",
    image: IMG.case2,
    alt: "GENIO INDIAが作っているサービス",
    projects: ["Sales Ledger", "Chatbot"],
    href: "/ja/service?projectFilter=built#projects",
  },
  {
    title: "GENIO INDIAが関わっているサービス",
    description:
      "開発支援、保守、運用などを通して、お客様やパートナーと一緒に取り組んでいるサービスです。",
    image: IMG.case3,
    alt: "GENIO INDIAが関わっているサービス",
    projects: ["Tarte", "EAP", "Memory Hint", "TCC"],
    href: "/ja/service?projectFilter=involved#projects",
  },
];

const stats = [
  { value: "8", label: "開発者数", icon: "👥" },
  { value: "5", label: "進行中のプロジェクト", icon: "📊" },
  { value: "5", label: "納品プロジェクト", icon: "✅" },
];

const profile = [
  ["会社名", "Genio India Software Pvt. Ltd."],
  ["設立", "2022年7月28日"],
  ["代表者", "米田 卓也"],
  ["所在地", "Namakkal"],
  ["納品実績", "5"],
  ["グループ会社", "株式会社ジェニオ"],
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
              <p className={styles.eyebrow}>共に考え、共に形にする</p>
              <h1 className={styles.heroTitle}>
                あらゆる企業向けに高品質なWebサイトを提供
              </h1>
              <p className={styles.heroDescription}>
                2022年から、革新的なWeb、アプリ、データベースのソリューションを、常に高い品質で提供しています。
                私たちは、「誰も思いつかなかった」アイデアを実現し、関わる全ての人々が「笑顔」になれるサービスを作り上げます。 また、「誰もが使いやすい」ことを最優先に、誰もが簡単に利用できるサービスを追求し続けています。
              </p>
              <div className={styles.heroActions}>
                <Link href="/ja/contactus" className={styles.primaryButton}>
                  お問い合わせ
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
                    aria-label={`${index + 1}枚目の画像を表示`}
                  />
                ))}
              </div>
              <Link href="/ja/aboutus" className={styles.heroFloatingCard}>
                <span className={styles.heroBadge}>N</span>
                <div>
                  <p className={styles.heroFloatingLabel}>会社情報</p>
                  <p className={styles.heroFloatingTitle}>一緒に見つける</p>
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
              <p className={styles.sectionEyebrow}>事業内容</p>
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
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className={styles.sectionSummary}>
              私たちはお客様の課題に向き合い、関わるすべての人が笑顔になれるサービスを目指します。
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
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link href={group.href} className={styles.projectShowcaseLink}>
                    <article className={styles.projectShowcaseCard}>
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
                          {group.projects.length}件のプロジェクト
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
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className={styles.caseStudyFooter}>
              <Link
                href="/ja/service?projectFilter=all#projects"
                className={styles.caseStudyLink}
              >
                サービスを見る ↗
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
              <p className={styles.sectionEyebrow}>実績</p>
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
              <p className={styles.sectionEyebrow}>会社概要</p>
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
                <p className={styles.mapCaption}>Googleマップで見る ↗</p>
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
