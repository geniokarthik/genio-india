"use client";
import Image from "next/image";
import "../../globals.css";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import Pattern1Img from "src/assets/images/service/ja/pattern1.png";
import Pattern2Img from "src/assets/images/service/ja/pattern2.png";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Offshore.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import { cardEntrance } from "src/app/common/motion/variants";

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "内部リソースの課題を解決",
    desc: "内部リソースでは対応が難しい課題も、オフショア移行によって解決できます。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "コスト削減",
    desc: "自社で全て対応する場合や国内採用に比べ、オフショアは大幅にコストを削減できます。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "コア業務に集中",
    desc: "優先度の低い業務をオフショア化し、価値を生み出すコア業務に十分なリソースを投入できます。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "スピードを重視",
    desc: "多くのスタートアップが迅速かつ安価なサービスを求めてオフショアへ。品質を落とさず、速くお届けします。",
  },
];

const STEPS = [
  { n: "01", t: "情報収集", b: "ヒアリング・要件定義・分析" },
  { n: "02", t: "設計",     b: "システム設計・UI/UX設計" },
  { n: "03", t: "プログラミング", b: "実装・コーディング・単体テスト" },
  { n: "04", t: "確認",     b: "結合テスト・クライアント確認" },
  { n: "05", t: "リリース", b: "本番環境デプロイ・納品" },
  { n: "06", t: "運保",     b: "保守・運用・継続サポート" },
];

const PATTERNS = [
  { title: "パターン 1", img: Pattern1Img, desc: "顧客とブリッジSE（BrSE）が直接連携して作業を行います。" },
  { title: "パターン 2", img: Pattern2Img, desc: "ブリッジSEが顧客側に出向き、インド側に専属の開発チームを立ち上げます。" },
];

export default function OffshoreServiceJa() {
  return (
    <>
      <main className={styles.main}>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
        <Header />

        {/* ── ダークヒーロー（全幅）── */}
        <section className={styles.hero}>
          <SectionDecor variant="hero" tone="light" />
          <div className={styles.heroInner}>
            <Reveal as="div" x={-50} duration={0.8} immediate className={styles.hero__text}>
              <p className={styles.hero__label}>オフショアサービス</p>
              <h1 className={styles.hero__title}>
                オフショアとは、コスト削減を目的として人件費の安い海外企業に業務を委託することです。
              </h1>
            </Reveal>

            <Reveal as="div" x={50} duration={0.8} delay={0.2} immediate className={styles.hero__collage}>
              <img
                src="/images/home/hero-real-team.png"
                alt="Genio India 開発チーム"
                className={styles.heroImg}
              />
            </Reveal>
          </div>
        </section>

        {/* ── コンテンツ（制限幅）── */}
        <div className={styles.home}>

          {/* オフショアのメリット */}
          <Reveal as="section" y={40} className={styles.benefits_section}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>オフショアとは？</p>
              <h2 className={styles.section_title}>オフショアの<span>メリット</span></h2>
              <p className={styles.benefits_lead}>内部リソースでは対応できない課題も、オフショア移行によって解決できます。</p>
            </div>
            <div className={styles.benefits_grid}>
              {BENEFITS.map((b, i) => (
                <Reveal as="div" key={b.title} {...cardEntrance(i)} duration={0.45} delay={i * 0.08} className={styles.benefit_card}>
                  <div className={styles.benefit_icon}>{b.icon}</div>
                  <p className={styles.benefit_title}>{b.title}</p>
                  <p className={styles.benefit_desc}>{b.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* 開発プロセス */}
          <Reveal as="section" y={40} amount={0.05} className={styles.process}>
            <SectionDecor variant="section" />
            <div className={styles.process__layout}>
              <Reveal as="div" x={-40} amount={0.05} className={styles.process__img}>
                <img
                  src="/images/home/hero_real_team2.png"
                  alt="開発チームの様子"
                  className={styles.processImg}
                />
              </Reveal>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>開発プロセス</p>
                  <h2 className={styles.section_title} style={{ textAlign: "left" }}>ご依頼の<span>流れ</span></h2>
                </div>
                {STEPS.map((s, i) => (
                  <Reveal as="div" key={i} {...cardEntrance(i + 1)} duration={0.45} delay={i * 0.07} amount={0.05} className={styles.step}>
                    <div className={styles.step__num}>{s.n}</div>
                    <div className={styles.step__content}>
                      <p className={styles.step__title}>{s.t}</p>
                      <p className={styles.step__body}>{s.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ラボ型開発 */}
          <Reveal as="section" id="section-lab" y={40} className={styles.detail_section}>
            <SectionDecor variant="section" />
            <div className={styles.detail_section__inner}>
              <div className={styles.detail_section__text}>
                <p className={styles.eyebrow}>ラボ型開発</p>
                <h2 className={styles.labH2}>専任チームで、<br /><span>月額固定の安心感</span></h2>
                {`専任の開発チームを月額固定でご提供するラボ型オフショア開発サービスです。プロジェクト単位での発注ではなく、専任エンジニアチームがお客様専用のリソースとして継続的に稼働します。

チームはお客様のビジネスや技術スタックを深く理解した上で業務に当たるため、コミュニケーションコストを最小化しながら、スピーディーかつ高品質な開発を実現します。

スタートアップから中堅企業まで、継続的な開発・改善を必要とするあらゆる企業様に最適なモデルです。`.split("\n\n").map((para, j) => (
                  <p key={j} className={styles.detail_section__para}>{para}</p>
                ))}
              </div>
              <div className={styles.detail_section__img}>
                <Image
                  src={TeamMbersImg}
                  alt="ラボ型開発"
                  width={520}
                  height={420}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
            </div>
          </Reveal>

          {/* チームの構成パターン */}
          <Reveal as="section" y={40} className={styles.patternsSection}>
            <SectionDecor variant="section" />
            <h2 className={styles.patternsTitle}>チームの構成パターン</h2>
            <div className={styles.patternsGrid}>
              {PATTERNS.map((p, pi) => (
                <Reveal as="div" key={pi} {...cardEntrance(pi + 2)} duration={0.5} delay={pi * 0.1} amount={0.2} className={styles.patternCard}>
                  <div className={styles.patternImgFrame}>
                    <Image src={p.img} alt={p.title} className={styles.patternImg} />
                  </div>
                  <h3 className={styles.patternCardTitle}>{p.title}</h3>
                  <p className={styles.patternCardDesc}>{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal as="section" y={30} duration={0.6} className={styles.cta}>
            <SectionDecor variant="cta" tone="light" canvas={false} />
            <h2 className={styles.cta__title}>お問い合わせ</h2>
            <p className={styles.cta__body}>ご依頼・お見積もりについて、こちらからお問い合わせください。</p>
            <Link href="/ja/contactus" className={styles.cta__btn}>お問い合わせはこちら →</Link>
          </Reveal>

        </div>
        <ScrollTop />
        <Footer />
      </main>
    </>
  );
}
