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
                　ウェブシステム開発、アプリ開発、
                </h1>
                <h1 className={styles.hero__tittle}>
                　ウェブサイト開発、MySQLデータベースの構築
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
            <h1 className={styles.services__background}>サ</h1>
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
                お客様一人ひとりのニーズに応じた、設計から開発・運用まで一貫対応するWebサイト・システム開発サービスを提供しています。
                サービス内容は多岐にわたり、すべてのデバイスに対応する完全レスポンシブなWebデザイン、高機能でユーザー体験に優れたECサイトの構築、直感的に操作できるCMSとのスムーズな連携などを含んでいます。<br/>
                すべてのプロジェクトにおいて、「速度」「セキュリティ」「使いやすさ」を最優先に設計・開発を行い、デスクトップからスマートフォンまで、あらゆる画面サイズにおいて快適な操作性と優れたパフォーマンスを実現しています。<br/>
                私たちは革新性と品質にこだわり、単にご要望を形にするだけでなく、その期待を超えるWebソリューションの提供を目指しています。
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
                iOSアプリ・Androidアプリの開発はもちろん、クロスプラットフォーム開発にも対応しています。
                経験豊富な開発チームが、お客様のアイデアやビジョンを、確かな技術で形にします。<br/>
                企画段階のアイデア整理やMVP（Minimum Viable Product）の設計から、開発、リリース、運用後のサポートまで、開発のすべての工程をお客様と密に連携しながら進めていきます。<br/>   
                開発にあたっては、セキュリティ性や拡張性はもちろん、直感的で使いやすいUI/UX設計を重視。すべてのデバイスで快適に使える、スムーズなユーザー体験を実現します。<br/>
                また、最新技術と経験に基づいた効率的な開発手法を採用することで、高性能かつ安定性のあるアプリを迅速に提供し、お客様のビジネス目標の達成を強力にサポートします。
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
                MySQLドキュメントの読み取りやデータ処理に対応した包括的なソリューションを提供しており、構造化データの効率的な取得・分析・管理を支援します。
                大規模なデータベースや複雑なデータセットにおいても、経験豊富な専門チームが高精度かつ信頼性の高い手法で、あらゆるデータ管理業務に対応します。<br/><br/>
                提供するサービスには、パフォーマンス向上と読み込み時間の短縮を実現する高度なクエリ最適化に加え、必要な情報を必要なときに正確に抽出できる高精度なデータ抽出技術が含まれます。
                さらに、データに基づく意思決定を支援するための、動的かつ視覚的にわかりやすいレポートの自動生成にも対応しています。<br/><br/>
                WebアプリケーションやモバイルアプリとのMySQLデータ連携もスムーズに行え、リアルタイムでのデータアクセスを実現。
                効率性、セキュリティ、拡張性を重視しながら、企業のデータインフラを最大限に活用するための総合的な支援を提供しています。
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
                初心者から上級者まで対応可能な日本語学習プログラムを提供しています。
                各レベルに合わせたコースで、**「話す」「読む」「書く」「聞く」**の4つの基本スキルをバランスよく学び、実践的なコミュニケーション力を身につけます。<br/>                 
                すべてのコースには、基礎文法の指導、実用的な語彙の習得、漢字の学習が含まれており、しっかりとした学習の土台を作りながら、日常会話に自信を持てるようサポートします。<br/>          
                旅行や仕事、学業、または個人的な学びの目的に合わせ、経験豊富な講師が個別指導でサポートし、興味を引き出す教材で学習を楽しく進めていきます。
                柔軟で親しみやすい学習環境で、日本語を学ぶ楽しさと達成感を皆さんに感じていただけるよう心がけています。              
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
