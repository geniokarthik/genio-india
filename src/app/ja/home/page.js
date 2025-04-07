'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../globals.css";
import Header from "../components/Header";
import Footer from "src/app/ja/components/Footer";

import webdevelopment from "src/assets/images/home/webdevelopment.png";
import appdevelopment from "src/assets/images/home/appdevelopment.png";
import mysqldatabase from "src/assets/images/home/mysqldatabase.png";
import sloganicon from "src/assets/images/home/sloganicon.png";
import sloganicon2 from "src/assets/images/home/sloganicon2.png";
import sidelogo from "src/assets/images/home/sidelogo.png";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import styles from "src/app/common/styles/Home.module.css";


export default function Home() {
  const [imageSrc, setImageSrc] = useState(sloganicon);
  const [heroText, setHeroText] = useState("考える");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc((prevImage) =>
        prevImage === sloganicon ? sloganicon2 : sloganicon
      );
      setHeroText((prevText) =>
        prevText === "考える" ? "創造する" : "考える"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      <Header />
      <motion.div
        className={styles.home}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.container}>

          {/* Hero Section */}
          <motion.section
            className={styles.hero}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.heroContent}>
            <h1 className={styles.heroTittle}>
              <span>
                <span className={styles.heroRedText}>共</span>に、{" "}
              </span>
              <span className={styles.heroThinkWrapper} style={{ marginLeft: 9 }}>
                <span className={styles.heroRedText} style={{ marginLeft: 9 }}>
                  私たちは{" "}
                </span>
                <span style={{ marginRight: 4 }}>{heroText}</span>
                <span className={styles.heroThinkBorder}></span>
                <span className={styles.heroIconWrapper}>
                  <Image
                    src={imageSrc}
                    alt="スローガンアイコン"
                    width={80}
                    height={80}
                    className={styles.heroIconImage}
                  />
                </span>
              </span>
            </h1>
              {/* <div style={{ paddingBottom: 12, paddingTop: 12 }} className={styles.heroContent}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>高品質なウェブサイト</p>
                </div>
              </div> */}
              {/* <div className={styles.heroContent}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>すべての企業のために</p>
                </div>
              </div> */}
              <p className={styles.heroDescription}>
               あらゆる企業向けに高品質なWebサイトをご提供します。<br/>
               2022年から、革新的なWeb・アプリ・データベースのソリューションを高い品質で提供しています。<br/>
              「誰も思いつかなかった」アイディアで、関わる全ての人が「笑顔」になれる。<br/>
              「誰もがつかいやすい」サービスを追い求め続けます。
              </p>
              
            </div>
            <div>
              <Image src={sidelogo} alt="スローガンアイコン" className={styles.heroBackgroundGradient} />
            </div>
          </motion.section>

          {/* Business Content Section */}
          <motion.section
            className={styles.businessContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <header className={styles.header}>
              <h2 className={styles.title}>事業内容</h2>
              <h4 className={styles.subtitle}>
                <div className={styles.businessTittle}>私たちはお客様の課題に真摯に向き合い、関わるすべての人々に笑顔をもたらすサービスを提供しています。</div>
              </h4>
            </header>
            <motion.section
              className={styles.funFacts}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={webdevelopment}
                      alt="ウェブ開発"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>ウェブ開発</h3>
                </div>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={appdevelopment}
                      alt="アプリ開発"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>アプリ開発</h3>
                </div>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={mysqldatabase}
                      alt="MySQLデータベース"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>MySQLデータベース</h3>
                </div>
              </div>
            </motion.section>
          </motion.section>

          {/* Fun Facts Section */}
          <motion.section
            className={styles.funFacts}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.funFactsTitle}>実績</h2>
            <div className={styles.funFactsContainer}>
              {[
                { number: "8", text: "開発者数" },
                { number: "4", text: "進行中のプロジェクト" },
                { number: "5", text: "完了したプロジェクト" },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  className={styles.funFact}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={styles.factNumber}>{fact.number}</div>
                  <div className={styles.factText}>{fact.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Company Profile Section */}
          <motion.section
            className={styles.companyProfile}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="companyprofile"
          >
            <div className={styles.profileTitleWrapper}>
              <h1 className={styles.profileTitle}>
                <span className={styles.profileRedC}>会</span>社概要
              </h1>
            </div>
            <div className={styles.profileContent}>
              {/* Profile Content Rows */}
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>会社名</div>
                <div className={styles.profileValue}>Genio India Software Pvt. Ltd.</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>設立</div>
                <div className={styles.profileValue}>2022年7月28日</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>代表者</div>
                <div className={styles.profileValue}>米田 卓也</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>グループ会社</div>
                <div className={styles.profileValue}>株式会社ジェニオ</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>事業内容</div>
                  <div>
                    <div>• ウェブシステム開発</div>
                    <div>• アプリ開発</div>
                    <div>• ウェブサイト開発</div>
                    <div>• MySQLデータベースの構築</div>
                  </div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>所在地</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileAddress}>
                    No. 171/3/1, Narikkal karadu, Vennandur, Rasipuram, Namakkal, Tamil Nadu, India-637505.
                  </div>
                  <span className={styles.profileMapLink} target="_blank" >
                    Googleマップ <span className={styles.profileArrow}>↘</span>
                  </span>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: "10px" }}
                    src="https://www.google.com/maps?q=11.515406,78.091705&output=embed"
                    target="_blank" 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
      <ScrollTop />
      <Footer />
    </>
  );
}
