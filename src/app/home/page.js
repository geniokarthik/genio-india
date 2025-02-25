
'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../globals.css";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";

import webdevelopment from "src/assets/images/home/webdevelopment.png";
import appdevelopment from "src/assets/images/home/appdevelopment.png";
import mysqldatabase from "src/assets/images/home/mysqldatabase.png";
import sloganicon from "src/assets/images/home/sloganicon.png";
import sloganicon2 from "src/assets/images/home/sloganicon2.png";
import sidelogo from "src/assets/images/home/sidelogo.png";
import ScrollTop from "src/app/scrolltop/ScrollTop";
import styles from "src/app/styles/home.module.css";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(sloganicon);
  const [heroText, setHeroText] = useState("Think");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc((prevImage) =>
        prevImage === sloganicon ? sloganicon2 : sloganicon
      );
      setHeroText((prevText) =>
        prevText === "Think" ? "Create" : "Think"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
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
              <h1 className={styles.heroTitle}>
                <span className={styles.heroRedText}>T</span>ogether,{" "}
                <span className={styles.heroThinkWrapper}>
                  <span className={styles.heroRedText}>We </span>
                  {heroText}
                  <span className={styles.heroThinkBorder}></span>
                  <span className={styles.heroIconWrapper}>
                    <span className={styles.heroIconCircle}>
                      <Image src={imageSrc} alt="sloganicon" width={180} height={100} />
                    </span>
                  </span>
                </span>
              </h1>
              <div className={styles.heroSubtitleWrapper}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>High-quality websites</p>
                </div>
              </div>
              <div className={styles.heroSubtitleWrapper1}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>for all Companies</p>
                </div>
              </div>
              <p className={styles.heroDescription}>
                Since 2022, we've been crafting innovative web, app, and database solutions with excellence!
              </p>
            </div>
            <div>
              <Image src={sidelogo} alt="sloganicon" className={styles.heroBackgroundGradient} />
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
            <h2 className={styles.businessContentTitle}>Service Content</h2>
            <div className={styles.businessServices}>
              {[webdevelopment, appdevelopment, mysqldatabase].map((imgSrc, index) => (
                <motion.div
                  key={index}
                  className={styles.businessService}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={styles.serviceImage}>
                    <Image src={imgSrc} alt="Service" width={200} height={200} className={styles.serviceIllustration} />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className={styles.businessServicesHeader}>
              <h3>WEB DEVELOPMENT</h3>
              <h3>APP DEVELOPMENT</h3>
              <h3>MYSQL DATABASE</h3>
            </div>
          </motion.section>

          {/* Fun Facts Section */}
          <motion.section
            className={styles.funFacts}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.funFactsTitle}>Some Fun Facts</h2>
            <div className={styles.funFactsContainer}>
              {[
                { number: "8", text: "CUP OF COFFEE" },
                { number: "7", text: "PROJECT ONGOING" },
                { number: "5", text: "PROJECT DELIVERED" },
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
                <span className={styles.profileRedC}>C</span>ompany
                <br />
                Profile
              </h1>
            </div>
            <div className={styles.profileContent}>
              {/* Profile Content Rows */}
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Company Name</div>
                <div className={styles.profileValue}>Genio India Software Pvt. Ltd.</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Established</div>
                <div className={styles.profileValue}>December 28, 2022</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Representative</div>
                <div className={styles.profileValue}>TAKUYA YONEDA</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Group companies</div>
                <div className={styles.profileValue}>Genio Co., Ltd.</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Business Contents</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileBulletPoints}>
                    <div>• App Development</div>
                    <div>• Web Development</div>
                    <div>• MySql Database</div>
                  </div>
                </div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Location</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileAddress}>
                    No. 5/131B1, Narikkal karadu, Vennandur, Rasipuram, Namakkal, Tamil Nadu, India-637505.
                  </div>
                  <a href="#" className={styles.profileMapLink}>
                    Google map <span className={styles.profileArrow}>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
      <ScrollTop/>
      <Footer />
    </>
  );
}
