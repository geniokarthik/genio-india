"use client";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import OffShoreImg from "src/assets/images/service/ja/offshore.png";
import LabDevImg from "src/assets/images/service/lab_development.png";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Offshore.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import pt1 from "src/assets/images/service/ja/pattern1.png";
import pt2 from "src/assets/images/service/ja/pattern2.png";


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
];

export default function Service() {
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
              <p className={styles.hero__label}>オフショアサービス</p>
              <h1 className={`${styles.hero__title} ${styles.firstLetterRed}`}>
                オフショアとは一般的に、コスト削減を目的として、人件費や物価の安い海外企業に業務の一部を委託することです。

              </h1>
              <h1 className={`${styles.firstLetterRed}`}>
              オフショアのメリットは?
              </h1>
              <p className={styles.hero__desc}>
                内部リソースでは問題解決ができない→人員や技術面で、実施・処理に時間を要する問題はオフショア移行で解決します。コスト削減をしたい→オフショアは、自社ですべて手がける場合、または自国内で人員を雇用する場合に比べて、大幅にコストを削減できます。コア業務に集中したい→優先順位の低い仕事をオフショアし、価値を生み出すコア業務に自社の十分なリソースを投入することが可能になります。スピードを重視したい→多くのスタートアップ企業は、迅速かつ安価なサービスを求めてオフショアに移行しています。
              </p>
            </motion.div>

            <motion.div
              className={styles.hero__collage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              whileHover={{ scale: 1.02 }}
              transition={{
                opacity: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                scale: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 0.6 },
              }}
            >
              <div className={styles.hero__staticImg}>
                <Image
                  src={OffShoreImg}
                  alt="オフショア インフォグラフィック"
                  fill
                  sizes="(min-width: 1100px) 900px, 95vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </motion.div>
          </section>

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
                  src={LabDevImg}
                  alt="開発プロセス"
                  width={480}
                  height={420}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </motion.div>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>開発プロセス</p>
                  <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>ご依頼の流れ</h2>
                </div>
                {[
                  { n: "01", t: "情報収集", b: "ヒアリング・要件定義・分析" },
                  { n: "02", t: "設計", b: "システム設計・UI/UX設計" },
                  { n: "03", t: "プログラミング", b: "実装・コーディング・単体テスト" },
                  { n: "04", t: "確認", b: "結合テスト・クライアント確認" },
                  { n: "05", t: "リリース", b: "本番環境デプロイ・納品" },
                  { n: "06", t: "運保", b: "保守・運用・継続サポート" },
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
                                    <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>{d.title}</h2>
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
