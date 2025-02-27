"use client";
import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import DownArrowImg from "src/assets/images/service/downarrow.png";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";
import MySqlImg from "src/assets/images/service/mysql.png";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import Link from "next/link";
import styles from "src/app/styles/Service.module.css"
import ScrollTop from "src/app/scrolltop/ScrollTop";

export default function Service() {
  return (
    <><main className={styles.main}>
      <link href='https://fonts.googleapis.com/css?family=ADLaM Display' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Cherry Bomb' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Belanosima' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Oregano' rel='stylesheet'></link>
      <Header />
      <div className={styles.home}>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.hero}
        >
            <div className={styles.hero__contents}>
              <div className={styles.hero__text}>
                <p className={`${styles.web_single__text} ${styles.subtitle}`}>WHAT WE DO</p>
                <h1 className={styles.hero__title}>
                  WE BUILD YOUR WEBSITE, APP,
                </h1>
                <h1 className={styles.hero__title}>
                  AND DATABASE FROM
                </h1>
                <h1 className={styles.hero__title}>
                  SCRATCH!
                </h1>
                <span align="center">
                  <Image
                    src={TeamMbersImg}
                    alt="Team collaboration illustration"
                    width={1100}
                    height={900}
                    
                    priority />
                </span>
              </div>
            </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.services}
        >
          <div className={styles.services__container}>
            <h2 className={styles.services__title}>SERVICE</h2>
            <h1 className={styles.services__background}>S</h1>
          </div>
          <div className={styles.services__grid}>
            <div className={styles.service_card__content}>
              <Link href="#webdev">
                <h3 className={styles.service_card__title}>
                  Web Development
                  <Image
                    src={DownArrowImg}
                    alt="Team collaboration illustration"
                    width={27}
                    height={18}
                    align="center"
                    style={{ marginLeft: 5 }}
                    priority />
                </h3>
              </Link>
            </div>

            <div className={styles.service_card__content}>
              <Link href="#appdev">
                <h3 className={styles.service_card__title}>
                  App Development
                  <Image
                    src={DownArrowImg}
                    alt="Team collaboration illustration"
                    width={27}
                    height={18}
                    align="center"
                    style={{ marginLeft: 5 }}
                    priority />
                </h3>
              </Link>
            </div>

            <div className={styles.service_card__content}>
              <Link href="#mysql">
                <h3 className={styles.service_card__title}>
                  MySQL Database
                  <Image
                    src={DownArrowImg}
                    alt="Team collaboration illustration"
                    width={27}
                    height={18}
                    align="center"
                    style={{ marginLeft: 5 }}
                    priority />
                </h3>
              </Link>
            </div>

            <div className={styles.service_card__content}>
              <Link href="#jplanguage">
                <h3 className={styles.service_card__title}>
                  Japanese Language
                  <Image
                    src={DownArrowImg}
                    alt="Team collaboration illustration"
                    width={27}
                    height={18}
                    align="center"
                    style={{ marginLeft: 5 }}
                    priority />
                </h3>
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="webdev"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.web_dev}
        >
          <h2 className={styles.web_dev__title}>
            <span className={styles.web_single__text}>W</span>EB DEVELOPMENT
          </h2>
          <div className={styles.web_dev__content}>
            <div className={styles.web_dev__text}>
              <p className={styles.web_dev__description}>
                We Provide Custom Web Development Solutions, Including Responsive Design, E-Commerce, CMS Integration, And More. Our Solutions Are Fast, Secure, And User-Friendly, Ensuring Superior Performance Across All Devices.
              </p>
            </div>
            <div className={styles.hero}>
              <Image
                src={DesktopImg}
                alt="Desktop design"
                width={1700}
                height={1650} />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="appdev"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.app_dev}
        >
          <h2 className={styles.app_dev__title}>
            <span className={styles.web_single__text}>A</span>PP DEVELOPMENT
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                Whether you need a custom iOS, Android, or cross-platform application, our expert team ensures a seamless and high-performance experience. From MVP design to deployment, we build secure, scalable, and user-friendly applications.
              </p>
            </div>
            <div className={styles.app_dev__images}>
              <Image
                src={AppDevelopmentImg}
                alt="Mobile app screen 1"
                width={1700}
                height={1650} />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="mysql"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.app_dev}
        >
          <h2 className={styles.app_dev__title}>
            <span className={styles.web_single__text}>M</span>YSQL DATABASE
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                We Provide MySQL Document Reading And Data Processing Solutions To Help You Efficiently Retrieve, Analyze, And Manage Structrued Data. Our Services Include Query Optimization, Data Extraction, Report Generation, And Seamless Integration With Web And Mobile Applications.
              </p>
            </div>
            <div className={styles.app_dev__images}>
              <Image
                src={MySqlImg}
                alt="Mobile app screen 1"
                width={1200}
                height={1050} />
            </div>
          </div>
        </motion.section>
        <motion.section
          id="jplanguage"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.app_dev}
        >
          <h2 className={styles.app_dev__title}>
            <span className={styles.web_single__text}>J</span>APANESE LANGUAGE
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                We Offer Japanese Language Training For All Levels, From Beginners To Advanced Learners. Our Courses Focus On Speaking, Reading, Writing, And Listening Skills, Covering Essential Grammer, Vocabulary, And Kanji.
              </p>
            </div>
            <div className={styles.app_dev__images}>
              <Image
                src={LanguageTeachingImg}
                alt="Mobile app screen 1"
                width={1700}
                height={1650} />
            </div>
          </div>
        </motion.section>
      </div>
      <ScrollTop/>
      <Footer />
    </main>
    </>
  );
}
