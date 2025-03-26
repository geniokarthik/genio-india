"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";

import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import TeamSection from "src/app/ja/aboutus/TeamSection";
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
              <span className={styles.heroRedText}>企業沿革</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              私たちの成長とマイルストーンの軌跡
            </h2>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.timelineSection}
        >
          <div className={styles.timeLine} ref={timelineRef}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2025年</span>
                <span className={styles.text}> - 日本語教育とグローバル人材支援の拡大</span>
                <p className={styles.description}>
                  エンジニア向けの日本語教育に加え、日本語学習に興味のある大学生や卒業生向けの研修プログラムを開始しました。
                </p>
                <p className={styles.description}>
                  建設業界に特に注力し、専門的な語学研修と、熟練専門家と日本企業をつなぐ新しい人材マッチングサービスを提供しています。
                </p>
                <p className={styles.description}>
                  IT分野を超えて、さまざまな業界の企業との連携を強化し続けています。
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2024年</span>
                <span className={styles.text}> - 新オフィス開設と人材育成</span>
                <p className={styles.description}>
                  日本市場向けプロジェクトのさらなる支援のため、エンジニア向けの日本語教育を開始しました。
                </p>
                <p className={styles.description}>
                  また、新卒エンジニアの採用を開始し、社内研修プログラムを導入しました。
                </p>
                <p className={styles.description}>
                  さらなる成長に対応するため、新オフィスに移転し、開発環境を強化しました。
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2023年</span>
                <span className={styles.text}> - 事業拡大と開発範囲の成長</span>
                <p className={styles.description}>
                  日本のクライアントとのパートナーシップを拡大し、Webシステムとモバイルアプリ開発サービスを正式に開始しました。
                </p>
                <p className={styles.description}>
                  アジャイル開発手法を採用し、迅速で柔軟な開発プロセスを確立しました。
                </p>
                <p className={styles.description}>
                  さらに、様々な業界のクライアントとの協力を通じて、プロジェクト管理能力を強化しました。
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <span className={styles.year}>2022年</span>
                <span className={styles.text}> - 会社設立とオフショア開発の開始</span>
                <p className={styles.description}>
                  2022年に会社を設立し、インドでのオフショア開発を主軸として事業を開始しました。
                </p>
                <p className={styles.description}>
                  日本企業のデジタルトランスフォーメーション（DX）を支援するため、高品質で費用対効果の高いIT開発サービスの提供を目指しています。
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
          <Image
            src={sidelogo}
            alt="スローガンアイコン"
            className={styles.heroBackgroundGradient}
          />
        </motion.section>
        <TeamSection />
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}