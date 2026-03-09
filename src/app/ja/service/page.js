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
import pt1 from "src/assets/images/service/ja/pattern1.png";
import pt2 from "src/assets/images/service/ja/pattern2.png";

const SERVICES = [
  { id: "lab",             icon: "🏭", label: "ラボ型開発",   sub: "専任チーム・月額固定"},
  { id: "web-development", icon: "🌐", label: "ウェブ開発",   sub: "企業サイト・業務システム" },
  { id: "app-development", icon: "📱", label: "アプリ開発",   sub: "iOS / Android"},
  { id: "sql-database",    icon: "🗄️", label: "データベース", sub: "MySQL 設計・運用"},
  { id: "japanese-study",  icon: "🇯🇵", label: "日本語教育",  sub: "エンジニア向け日本語"},
];

const DETAILS = [
  {
    id: "lab",
    title: "ラボ型開発",
    img: TeamMbersImg,
    imgAlt: "ラボ型開発",
    text: `専任の開発チームを月額固定でご提供するラボ型オフショア開発サービスです。プロジェクト単位での発注ではなく、専任エンジニアチームがお客様専用のリソースとして継続的に稼働します。

チームはお客様のビジネスや技術スタックを深く理解した上で業務に当たるため、コミュニケーションコストを最小化しながら、スピーディーかつ高品質な開発を実現します。

スタートアップから中堅企業まで、継続的な開発・改善を必要とするあらゆる企業様に最適なモデルです。`,
    patterns: [
      { img: pt1, alt: "パターン1", label: "パターン 1", desc: "顧客とブリッジSE（BrSE） が直接連携して作業を行います。" },
      { img: pt2, alt: "パターン2", label: "パターン 2", desc: "ブリッジSEが顧客側に出向き、インド側に専属の開発担当チームを立ち上げます。" },
    ],
  },
  {
    id: "web-development",
    title: "ウェブ開発",
    img: DesktopImg,
    imgAlt: "ウェブ開発",
    text: `お客様一人ひとりのニーズに応じた、設計から開発・運用まで一貫対応するWebサイト・システム開発サービスを提供しています。サービス内容は多岐にわたり、すべてのデバイスに対応する完全レスポンシブなWebデザイン、高機能でユーザー体験に優れたECサイトの構築、直感的に操作できるCMSとのスムーズな連携などを含んでいます。

すべてのプロジェクトにおいて、「速度」「セキュリティ」「使いやすさ」を最優先に設計・開発を行い、デスクトップからスマートフォンまで、あらゆる画面サイズにおいて快適な操作性と優れたパフォーマンスを実現しています。

私たちは革新性と品質にこだわり、単にご要望を形にするだけでなく、その期待を超えるWebソリューションの提供を目指しています。`,
  },
  {
    id: "app-development",
    title: "アプリ開発",
    img: AppDevelopmentImg,
    imgAlt: "アプリ開発",
    text: `iOSアプリ・Androidアプリの開発はもちろん、クロスプラットフォーム開発にも対応しています。経験豊富な開発チームが、お客様のアイデアやビジョンを、確かな技術で形にします。

企画段階のアイデア整理やMVP（Minimum Viable Product）の設計から、開発、リリース、運用後のサポートまで、開発のすべての工程をお客様と密に連携しながら進めていきます。

開発にあたっては、セキュリティ性や拡張性はもちろん、直感的で使いやすいUI/UX設計を重視。すべてのデバイスで快適に使える、スムーズなユーザー体験を実現します。`,
  },
  {
    id: "sql-database",
    title: "MySQLデータベース",
    img: MySqlImg,
    imgAlt: "MySQLデータベース",
    text: `MySQLドキュメントの読み取りやデータ処理に対応した包括的なソリューションを提供しており、構造化データの効率的な取得・分析・管理を支援します。

提供するサービスには、パフォーマンス向上と読み込み時間の短縮を実現する高度なクエリ最適化に加え、必要な情報を必要なときに正確に抽出できる高精度なデータ抽出技術が含まれます。

WebアプリケーションやモバイルアプリとのMySQLデータ連携もスムーズに行え、リアルタイムでのデータアクセスを実現。効率性、セキュリティ、拡張性を重視しながら、企業のデータインフラを最大限に活用するための総合的な支援を提供しています。`,
  },
  {
    id: "japanese-study",
    title: "日本語教育",
    img: LanguageTeachingImg,
    imgAlt: "日本語教育",
    text: `初心者から上級者まで対応可能な日本語学習プログラムを提供しています。各レベルに合わせたコースで、「話す」「読む」「書く」「聞く」の4つの基本スキルをバランスよく学び、実践的なコミュニケーション力を身につけます。

すべてのコースには、基礎文法の指導、実用的な語彙の習得、漢字の学習が含まれており、しっかりとした学習の土台を作りながら、日常会話に自信を持てるようサポートします。

旅行や仕事、学業、または個人的な学びの目的に合わせ、経験豊富な講師が個別指導でサポートし、興味を引き出す教材で学習を楽しく進めていきます。`,
  },
];

export default function Service() {
 const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  return (
    <>
      <main className={styles.main}>
        <link href="https://fonts.googleapis.com/css?family=ADLaM+Display" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Cherry+Bomb" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Belanosima" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Oregano" rel="stylesheet" />
        <Header />

        <div className={styles.home}>

          <section className={styles.hero}>
            <motion.div
              className={styles.hero__text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className={styles.hero__label}>事業内容</p>
              <h1 className={styles.hero__title}>
                インド発、<span>高品質・低コスト</span>の<br />オフショア開発
              </h1>
              <p className={styles.hero__desc}>
                ウェブシステム・アプリ・MySQLデータベースをゼロから構築。
                専任チームが日本市場の品質基準に応えます。
              </p>
            </motion.div>

            <motion.div
              className={styles.hero__collage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              <div className={styles.collage__ring}>
                <div className={styles.circle__center}>
                  <Image src={TeamMbersImg} alt="チームメンバー" fill style={{ objectFit: "cover" }} priority />
                </div>
                <div className={styles.orbit__ring}>
                  <div className={styles.orbit__top}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={DesktopImg} alt="ウェブ開発" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__right}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={AppDevelopmentImg} alt="アプリ開発" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__bottom}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={MySqlImg} alt="データベース" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__left}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={LanguageTeachingImg} alt="日本語教育" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`${styles.dot} ${styles.dot__red}`} />
                <span className={`${styles.dot} ${styles.dot__blue}`} />
                <span className={`${styles.dot} ${styles.dot__sm}`} />
              </div>
            </motion.div>
          </section>

          <motion.section
            className={styles.services}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={styles.section_head}>
              <p className={styles.section_label}>私たちが提供するサービス</p>
              <h2 className={styles.section_title}>サービス一覧</h2>
            </div>

            <div className={styles.icon_grid}>
              {SERVICES.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <button
                    onClick={() => scrollTo(`section-${item.id}`)}
                    className={styles.icon_card}
                  >
                    <div className={styles.icon_card__emoji}>{item.icon}</div>
                    <p className={styles.icon_card__label}>{item.label}</p>
                    <div className={styles.icon_card__sub_row}>
                      <p className={styles.icon_card__sub}>{item.sub}</p>
                      <span className={styles.icon_card__arrow}>
                        <Image
                          src={DownArrowImg}
                          alt="scroll down"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {DETAILS.map((d, i) => (
            <motion.section
              key={d.id}
              id={`section-${d.id}`}
              className={styles.detail_section}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={`${styles.detail_section__inner} ${i % 2 !== 0 ? styles.detail_section__reverse : ""}`}>
                <div className={styles.detail_section__text}>
                  <h2 className={styles.detail_section__title}>{d.title}</h2>
                  {d.text.split("\n\n").map((para, j) => (
                    <p key={j} className={styles.detail_section__para}>{para}</p>
                  ))}
                </div>
                <div className={styles.detail_section__img}>
                  <Image
                    src={d.img}
                    alt={d.imgAlt}
                    width={520}
                    height={420}
                    style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {d.patterns && (
                <div className={styles.pattern_section}>
                  <p className={styles.pattern_section__heading}>チームの構成パターン</p>
                  <div className={styles.pattern_grid}>
                    {d.patterns.map((p, pi) => (
                      <div key={pi} className={styles.pattern_card}>
                        <p className={styles.pattern_card__label}>{p.label}</p>
                        <p className={styles.pattern_card__desc}>{p.desc}</p>
                        <div className={styles.pattern_card__img}>
                          <Image src={p.img} alt={p.alt} width={480} height={260} style={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "contain" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          ))}

          <motion.section
            className={styles.process}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
          >
            <div className={styles.process__layout}>
              <motion.div
                className={styles.process__img}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.05 }}
              >
                <Image
                  src={TeamMbersImg}
                  alt="開発プロセス"
                  width={480}
                  height={420}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </motion.div>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>開発プロセス</p>
                  <h2 className={styles.section_title}>ご依頼の流れ</h2>
                </div>
                {[
                  { n: "01", t: "情報収集",       b: "ヒアリング・要件定義・分析" },
                  { n: "02", t: "設計",           b: "システム設計・UI/UX設計" },
                  { n: "03", t: "プログラミング", b: "実装・コーディング・単体テスト" },
                  { n: "04", t: "確認",           b: "結合テスト・クライアント確認" },
                  { n: "05", t: "リリース",       b: "本番環境デプロイ・納品" },
                  { n: "06", t: "運保",           b: "保守・運用・継続サポート" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className={styles.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    viewport={{ once: true, amount: 0.05 }}
                  >
                    <div className={styles.step__num}>{s.n}</div>
                    <div className={styles.step__content}>
                      <p className={styles.step__title}>{s.t}</p>
                      <p className={styles.step__body}>{s.b}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── CTA ── */}
          <motion.section
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className={styles.cta__title}>お問い合わせ</h2>
            <p className={styles.cta__body}>ご依頼・お見積もりについて、こちらからお問い合わせください。</p>
            <Link href="/ja/contactus" className={styles.cta__btn}>お問い合わせはこちら →</Link>
          </motion.section>

        </div>
        <ScrollTop />
        <Footer />
      </main>
    </>
  );
}
