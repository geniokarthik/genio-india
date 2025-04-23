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
                私たちの会社では、お客様一人ひとりのニーズに合わせた、包括的なカスタムWeb開発ソリューションを提供しています。サービス内容は多岐にわたり、すべての画面サイズに対応する完全レスポンシブなWebデザイン、販売促進とユーザー体験の向上を目的とした高機能なECサイト構築、そして簡単にコンテンツ管理ができるスムーズなCMS連携などを含んでいます。すべてのプロジェクトにおいて、速度・セキュリティ・使いやすさを最優先に考え、デスクトップからスマートフォンまで、あらゆるデバイスで優れたパフォーマンスと快適な操作性を実現しています。革新性と品質にこだわりながら、単にご要望を満たすだけでなく、期待を超えるWebソリューションを目指しています。
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
               私たちは、iOSアプリやAndroidアプリの開発、または強力なクロスプラットフォームソリューションをご希望の場合でも、経験豊富な開発チームが、お客様のビジョンを現実にします。アイデアの立案やMVP（Minimum Viable Product）の設計から、最終的なリリース、そして運用後のサポートに至るまで、開発の全工程をお客様と緊密に連携しながら進めます。開発においては、セキュリティ性・拡張性はもちろん、直感的で使いやすい設計を重視し、すべてのデバイスでスムーズなユーザー体験を提供できるアプリケーションを目指します。最新の技術と開発ベストプラクティスを活用することで、アプリの高いパフォーマンスを実現し、お客様のビジネス目標の達成をスピーディーかつ効果的にサポートします。
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
              私たちは、MySQLドキュメントの読み取りやデータ処理に関する包括的なソリューションを提供しており、構造化データの効率的な取得・分析・管理をサポートします。大規模なデータベースや複雑なデータセットを扱う場合でも、経験豊富な専門チームが、あらゆるデータ管理業務を高精度かつ信頼性の高い方法で対応します。サービス内容には、パフォーマンス向上と読み込み時間の短縮を実現する高度なクエリ最適化、必要な情報を必要なときに正確に取り出すインテリジェントなデータ抽出技術などが含まれます。
              さらに、データに基づく意思決定を支援する、動的でわかりやすいレポートの自動生成にも対応。WebアプリケーションやモバイルアプリとのMySQLデータ連携もスムーズに行い、リアルタイムでのデータアクセスを実現します。効率性・セキュリティ・スケーラビリティに重点を置きながら、企業のデータインフラを最大限に活用するための支援を行っています。
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
                私たちは、まったくの初心者から上級者まで対応可能な、日本語学習者向けの包括的なトレーニングプログラムを提供しています。
                各レベルに合わせて丁寧に構成されたコースでは、**「話す」「読む」「書く」「聞く」**という4つの基本スキルをバランスよく伸ばし、実践的なコミュニケーション力を養います。すべてのコースには、基礎文法の徹底指導、実用的な語彙の習得、そして漢字の体系的な学習が組み込まれており、しっかりとした土台を築くとともに、日常会話にも自信を持てるようサポートします。旅行、仕事、学業、または個人的な学びの目的にかかわらず、経験豊富な講師が個別に対応し、興味を引き出す教材を通じて、学習の進歩をしっかり支えます。
                柔軟で親しみやすい学習環境の中で、日本語を学ぶ楽しさと達成感をすべての受講者に感じていただけることを目指しています。
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
