
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
import styles from "src/app/styles/Home.module.css";

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
              <h1 className={styles.heroTitle}>
                <span>
                  <span className={styles.heroRedText}>T</span>ogether,{" "}</span>
                <span className={styles.heroThinkWrapper} style={{ marginLeft: 9 }}>
                  <span className={styles.heroRedText} style={{ marginLeft: 9 }}>We </span>
                  <span style={{ marginRight: 9 }}>{heroText}</span>
                  <span className={styles.heroThinkBorder}></span>
                  <span className={styles.heroIconWrapper}>
                    <Image src={imageSrc} alt="sloganicon" width={80} height={80} />
                  </span>
                </span>
              </h1>
              <div style={{ paddingBottom: 12, paddingTop: 12 }} className={styles.heroContent}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>High-quality websites</p>
                </div>
              </div>
              <div className={styles.heroContent}>
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
            <header className={styles.header}>
              <h2 className={styles.title}>Business Content</h2>
              <h4 className={styles.subtitle}>
                <div className={styles.businessTitle}> We face our customers' challenges and provide services that bring smiles to the faces of all those involved.</div>
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
                      alt="Web Development"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>WEB DEVELOPMENT</h3>
                </div>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={appdevelopment}
                      alt="App Development"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>APP DEVELOPMENT</h3>
                </div>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={mysqldatabase}
                      alt="MySQL Database"
                      width={200}
                      height={200}
                      className={styles.serviceImage}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>MYSQL DATABASE</h3>
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
            <h2 className={styles.funFactsTitle}>Some Fun Facts</h2>
            <div className={styles.funFactsContainer}>
              {[
                { number: "8", text: "DEVELOPERS" },
                { number: "4", text: "PROJECT ONGOING" },
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
                <div className={styles.profileValue}>July 28, 2022</div>
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
                  <div>
                    <div>• App Development</div>
                    <div>• Web Development</div>
                    <div>• MySql Database</div>
                  </div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Location</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileAddress}>
                    No. 171/3/1, Narikkal karadu, Vennandur, Rasipuram, Namakkal, Tamil Nadu, India-637505.
                  </div>
                  <span className={styles.profileMapLink} target="_blank" >
                    Google map <span className={styles.profileArrow}>↘</span>
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
