"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../globals.css";

import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Jlpt from "src/app/ja/aboutus/jlpt";
import TeamSection from "src/app/ja/aboutus/TeamSection";
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
      <section
        className={styles.hero}
        id="corporatehistory"
        ref={heroRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <motion.img
          src="/images/home/hero_real_team3.png"
          alt="Genio Indiaのチーム"
          className={styles.heroBgImg}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div aria-hidden="true" className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <HeroParallaxDecor x={parallaxX} y={parallaxY} />
          <Reveal as="div" x={-50} duration={0.8} immediate>
            <p className={styles.heroLabel}>私たちの歩み</p>
            <h1 className={styles.heroTitle}>企業<span>沿革</span></h1>
            <p className={styles.heroDesc}>
              2022年、インドの小さなオフショアチームとして始まり、今では日本企業様にとって
              信頼できる長期的パートナーへ。ここでは、その歩みを年ごとにご紹介します。
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.home}>

        <Reveal as="section" duration={0.8} delay={0.3} className={styles.timelineSection}>
          <div className={styles.sectionCenter}>
            <p className={styles.sectionEyebrow}>企業沿革</p>
            <h2 className={styles.sectionTitle}>当社の成長とこれまでの歩み</h2>
          </div>
          <SectionDecor variant="section" />
          <div className={styles.timeline} ref={timelineRef}>
            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2026年</span>
                <span className={styles.text}> - 日本企業から継続的に選ばれる会社になる</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description} style={{ fontSize: "1.1rem" }}>
                  日本企業から仕事を受託するだけでなく、安全・品質・効率を兼ね備えた開発体制を標準化する。
                </li>
                <li className={styles.description}>
                  継続契約や紹介につながる、長期的な信頼関係を構築する。
                </li>
                <li className={styles.description}>
                  技術力・日本語力・業務理解をバランスよく伸ばす人材育成モデルを整える。
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2025年</span>
                <span className={styles.text}> - 日本語教育の拡充とグローバル人材支援</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description} style={{ fontSize: "1.1rem" }}>
                  エンジニア向けの日本語教育に加え、日本語を学びたい大学生や卒業生を対象とした研修プログラムを開始しました。
                </li>
                <li className={styles.description}>
                  特に建設業界に注力し、業界に特化した日本語研修の提供と、優秀な人材と日本企業をつなぐ新たなマッチングサービスを展開しました。
                </li>
                <li className={styles.description}>
                  IT業界にとどまらず、さまざまな業種の企業との連携を引き続き強化していきます。
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2024年</span>
                <span className={styles.text}> - 新拠点の開設と人材育成</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  日本市場向けのプロジェクトをより効果的に支援するため、エンジニア向けの日本語教育を開始しました。
                </li>
                <li className={styles.description}>
                  新卒エンジニアの採用も開始し、社内研修制度を導入しました。
                </li>
                <li className={styles.description}>
                  さらなる成長に対応するため、新オフィスへ移転し、開発環境を強化しました。
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2023年</span>
                <span className={styles.text}> - 事業拡大と開発領域の拡張</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  日本企業との提携を拡大し、Webシステムおよびモバイルアプリ開発サービスを正式に開始しました。
                </li>
                <li className={styles.description}>
                  アジャイル開発手法を導入することで、迅速かつ柔軟な開発プロセスを確立しました。
                </li>
                <li className={styles.description}>
                  さらに、さまざまな業界のクライアントと連携しながら、プロジェクトマネジメント体制を強化しました。
                </li>
              </ul>
            </div>

            <div className={styles.timelineItem}>
              <h3 className={styles.timelineHeading}>
                <span className={styles.year}>2022年</span>
                <span className={styles.text}> - 会社設立とオフショア開発の開始</span>
              </h3>
              <ul className={styles.timelineList}>
                <li className={styles.description}>
                  当社は2022年に設立され、インドでのオフショア開発を主軸に事業を開始しました。
                </li>
                <li className={styles.description}>
                  日本企業のデジタルトランスフォーメーション（DX）を支援するため、高品質かつコスト効率の高いIT開発サービスの提供を目指しています。
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={sidelogo}
            alt="スローガンアイコン"
            className={styles.heroBackgroundGradient}
            style={{ width: "auto", height: "auto" }}
          />
        </Reveal>
        <TeamSection />
        <Jlpt/>
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}
