"use client";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import DownArrowImg from "src/assets/images/service/downarrow.png";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";
import MySqlImg from "src/assets/images/service/mysql.png";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Service.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";

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
                <p className={`${styles.web_single__text} ${styles.subtitle}`}>事業内容</p>
                <h1 className={styles.hero__tittle}>
                  ウェブサイト、アプリ、
                </h1>
                <h1 className={styles.hero__tittle}>
                  データベースを
                </h1>
                <h1 className={styles.hero__tittle}>
                  ゼロから構築します！
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
            <h2 className={styles.services__title}>サービス</h2>
            <h1 className={styles.services__background}>S</h1>
          </div>
          <div className={styles.services__grid}>
            <div className={styles.service_card__content}>
              <Link href="#webdev">
                <h3 className={styles.service_card__title}>
                  ウェブ開発
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
                  アプリ開発
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
                  MySQLデータベース
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
                  日本語教育
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
            <span className={styles.web_single__text}>ウ</span>ェブ開発
          </h2>
          <div className={styles.web_dev__content}>
            <div className={styles.web_dev__text}>
              <p className={styles.web_dev__description}>
                レスポンシブデザイン、E-コマース、CMS統合など、カスタムウェブ開発ソリューションを提供しています。当社のソリューションは、すべてのデバイスで優れたパフォーマンスを発揮する、高速で安全、かつユーザーフレンドリーなものです。
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
            <span className={styles.web_single__text}>ア</span>プリ開発
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                iOS、Android、またはクロスプラットフォームアプリケーションなど、お客様のニーズに合わせて、専門チームが優れたユーザー体験を提供します。MVPの設計から展開まで、安全で拡張性が高く、使いやすいアプリケーションを構築します。
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
            <span className={styles.web_single__text}>M</span>ySQLデータベース
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                構造化データの効率的な取得、分析、管理を支援するMySQLドキュメント読み取りとデータ処理ソリューションを提供しています。クエリの最適化、データ抽出、レポート生成、ウェブ・モバイルアプリケーションとのシームレスな統合などのサービスを提供します。
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
            <span className={styles.web_single__text}>日</span>本語教育
          </h2>
          <div className={styles.app_dev__content}>
            <div className={styles.app_dev__text}>
              <p className={styles.app_dev__description}>
                初級から上級まで、あらゆるレベルの日本語教育を提供しています。会話、読解、作文、聴解の能力を養成し、基本的な文法、語彙、漢字をカバーする授業を行っています。
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
