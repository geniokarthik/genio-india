"use client";
import Image from "next/image";
import "../../globals.css";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySQLImg from "src/assets/images/service/mysql.png";
import SalesImg from "src/assets/images/service/Sales.png";
import chatbotImg from "src/assets/images/service/chatbot.png";
import tarteImg from "src/assets/images/service/tarte.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Service.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroParallaxDecor, { useHeroParallax } from "src/app/common/components/HeroParallaxDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";
import { cardEntrance } from "src/app/common/motion/variants";

const SERVICES = [
  { id: "web-development", label: "ウェブ開発" },
  { id: "app-development", label: "アプリ開発" },
  { id: "sql-database",    label: "データベース" },
  { id: "japanese-study",  label: "日本語教育" },
];

const ServiceIcons = {
  "web-development": (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "app-development": (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <path d="M9 6h6"/>
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  "sql-database": (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/>
      <path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4"/>
    </svg>
  ),
  "japanese-study": (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
};

const DETAILS = [
  {
    id: "web-development",
    eyebrow: "ウェブ開発",
    titleMain: "企業サイト・",
    titleSpan: "業務システム",
    link: "/ja/contactus",
    linkText: "ウェブ開発のご相談はこちら →",
    img: DesktopImg,
    imgAlt: "ウェブ開発",
    objectFit: "contain",
    text: `お客様一人ひとりのニーズに応じた、設計から開発・運用まで一貫対応するWebサイト・システム開発サービスを提供しています。サービス内容は多岐にわたり、すべてのデバイスに対応する完全レスポンシブなWebデザイン、高機能でユーザー体験に優れたECサイトの構築、直感的に操作できるCMSとのスムーズな連携などを含んでいます。

すべてのプロジェクトにおいて、「速度」「セキュリティ」「使いやすさ」を最優先に設計・開発を行い、デスクトップからスマートフォンまで、あらゆる画面サイズにおいて快適な操作性と優れたパフォーマンスを実現しています。

私たちは革新性と品質にこだわり、単にご要望を形にするだけでなく、その期待を超えるWebソリューションの提供を目指しています。`,
  },
  {
    id: "app-development",
    eyebrow: "アプリ開発",
    titleMain: "iOS・Android・",
    titleSpan: "クロスプラットフォーム",
    link: "/ja/contactus",
    linkText: "アプリ開発のご相談はこちら →",
    img: AppDevelopmentImg,
    imgAlt: "アプリ開発",
    objectFit: "contain",
    text: `iOSアプリ・Androidアプリの開発はもちろん、クロスプラットフォーム開発にも対応しています。経験豊富な開発チームが、お客様のアイデアやビジョンを、確かな技術で形にします。

企画段階のアイデア整理やMVP（Minimum Viable Product）の設計から、開発、リリース、運用後のサポートまで、開発のすべての工程をお客様と密に連携しながら進めていきます。

開発にあたっては、セキュリティ性や拡張性はもちろん、直感的で使いやすいUI/UX設計を重視。すべてのデバイスで快適に使える、スムーズなユーザー体験を実現します。`,
  },
  {
    id: "sql-database",
    eyebrow: "MySQLデータベース",
    titleMain: "データベース設計・",
    titleSpan: "最適化",
    link: "/ja/contactus",
    linkText: "データベースのご相談はこちら →",
    img: MySQLImg,
    imgAlt: "MySQLデータベース",
    objectFit: "contain",
    text: `MySQLドキュメントの読み取りやデータ処理に対応した包括的なソリューションを提供しており、構造化データの効率的な取得・分析・管理を支援します。

提供するサービスには、パフォーマンス向上と読み込み時間の短縮を実現する高度なクエリ最適化に加え、必要な情報を必要なときに正確に抽出できる高精度なデータ抽出技術が含まれます。

WebアプリケーションやモバイルアプリとのMySQLデータ連携もスムーズに行え、リアルタイムでのデータアクセスを実現します。`,
  },
  {
    id: "japanese-study",
    eyebrow: "日本語教育",
    titleMain: "ITエンジニア向け",
    titleSpan: "実践日本語",
    link: "/ja/contactus",
    linkText: "日本語教育のお問い合わせ →",
    img: LanguageTeachingImg,
    imgAlt: "日本語教育",
    objectFit: "contain",
    text: `初心者から上級者まで対応可能な日本語学習プログラムを提供しています。各レベルに合わせたコースで、「話す」「読む」「書く」「聞く」の4つの基本スキルをバランスよく学び、実践的なコミュニケーション力を身につけます。

すべてのコースには、基礎文法の指導、実用的な語彙の習得、漢字の学習が含まれており、しっかりとした学習の土台を作りながら、日常会話に自信を持てるようサポートします。

旅行や仕事、学業、または個人的な学びの目的に合わせ、経験豊富な講師が個別指導でサポートし、興味を引き出す教材で学習を楽しく進めていきます。`,
  },
];

const PROJECTS = [
  {
    id: "sl", type: "built", number: "No.01",
    title: "Smart Sales Ledger",
    img: SalesImg,
    cardImageFit: "contain",
    tagline: "営業チームのための台帳管理システム。売上・案件・顧客情報を一元管理し、業務効率を大幅に向上させます。",
    client: "GENIO INDIA",
    category: "業務システム",
    outline: "営業スタッフが日々の活動を記録・管理するための台帳システムをゼロから設計・開発しました。リアルタイムの売上可視化、案件ステータス管理、顧客管理機能を備え、モバイル操作に最適化されています。",
    tags: ["Flutter", "Laravel", "MySQL", "Firebase"],
  },
  {
    id: "cb", type: "built", number: "No.02",
    title: "Chatbot",
    img: chatbotImg,
    bg: "#0a0a0a",
    cardImageFit: "contain",
    tagline: "AIを活用したカスタマーサポート自動化ボット。24時間365日の即時対応を実現します。",
    client: "GENIO INDIA",
    category: "AI・自動化",
    outline: "NLP技術を活用したインテリジェントなチャットボットを構築しました。既存の業務フローと連携し、応答時間をほぼゼロに短縮。サポートスタッフが複雑な対応に集中できる環境を実現します。",
     tags: ["Python", "React", "SQL Lite"],
  },
  {
    id: "ta", type: "involved", number: "No.03",
    title: "Tarte",
    img: tarteImg,
    bg: "#f8f4f0",
    cardImageFit: "contain",
    tagline: "ユーザー体験を最優先に設計されたサービス。機能設計とフロントエンド実装フェーズで中核を担いました。",
    client: "外部クライアント",
    category: "Webアプリケーション",
    outline: "Reactを使用したプラットフォームの機能設計とフロントエンド開発に貢献しました。全デバイスで高パフォーマンスを発揮する、直感的で快適なユーザー体験の実現を重視しました。",
    tags: ["Cake php", "JavaScript", "CSS"],
  },
];

const TECH_CATEGORY_ICONS = [
  <svg key="os" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  <svg key="lang" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>,
  <svg key="fw" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  <svg key="db" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>,
  <svg key="cms" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  <svg key="ide" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><polyline points="7 9 10 12 7 15"/><line x1="12" y1="15" x2="16" y2="15"/></svg>,
  <svg key="mw" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="6" rx="1.5"/><rect x="2" y="15" width="20" height="6" rx="1.5"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  <svg key="aws" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
];

const techAreas = [
  {
    category: "OS",
    items: [
      { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Linux",   logo: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "iOS",     logo: "https://cdn.simpleicons.org/apple/111111" },
      { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
    ],
  },
  {
    category: "開発言語",
    items: [
      { name: "PHP",         logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Firebase",    logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "JAVA",        logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "C#",          logo: null },
      { name: "HTML5",       logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3",        logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Javascript",  logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "JQuery",      logo: "https://cdn.simpleicons.org/jquery/0769AD" },
      { name: "React Native",logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Objective-C", logo: "https://cdn.simpleicons.org/apple/111111" },
      { name: "Node.js",     logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "React",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Nuxt.js",     logo: "https://cdn.simpleicons.org/nuxt/00DC82" },
      { name: "Next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Vue.js",      logo: "https://cdn.simpleicons.org/vuedotjs/42B883" },
    ],
  },
  {
    category: "フレームワーク",
    items: [
      { name: "Laravel",   logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Symfony",   logo: "https://cdn.simpleicons.org/symfony/111111" },
      { name: "CakePHP",   logo: "https://cdn.simpleicons.org/cakephp/D33C43" },
      { name: "Smarty",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/smarty/smarty-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "Spring",    logo: "https://cdn.simpleicons.org/spring/6DB33F" },
      { name: "Django",    logo: "https://cdn.simpleicons.org/django/092E20" },
    ],
  },
  {
    category: "データベース",
    items: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL",      logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MariaDB",    logo: "https://cdn.simpleicons.org/mariadb/003545" },
      { name: "Oracle",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "AWS Aurora", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Airtable",   logo: "https://cdn.simpleicons.org/airtable" },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
    ],
  },
  {
    category: "IDE等",
    items: [
      { name: "PhpStorm",     logo: "https://cdn.simpleicons.org/phpstorm/000000" },
      { name: "Eclipse",      logo: "https://cdn.simpleicons.org/eclipseide/2C2255" },
      { name: "Visual Studio",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Adobe XD",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Android SDK",  logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "XCode",        logo: "https://cdn.simpleicons.org/xcode/147EFB" },
    ],
  },
  {
    category: "ミドルウェア",
    items: [
      { name: "Apache", logo: "https://cdn.simpleicons.org/apache/D22128" },
      { name: "Tomcat", logo: "https://cdn.simpleicons.org/apachetomcat/F8DC75" },
      { name: "nginx",  logo: "https://cdn.simpleicons.org/nginx/009639" },
    ],
  },
  {
    category: "AWSサービス",
    items: [
      { name: "EC2",    logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "RDS",    logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "S3",     logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Lambda", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
    ],
  },
];

export default function ServiceJa() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTech, setActiveTech] = useState(0);
  const techTrackRef = useRef(null);
  const { heroRef, parallaxX, parallaxY, onMouseMove, onMouseLeave } = useHeroParallax();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollTechCardIntoView = (idx) => {
    requestAnimationFrame(() => {
      const track = techTrackRef.current;
      const card = track?.children[idx];
      if (!track || !card) return;
      // Scroll only the horizontal track itself (never scrollIntoView) so this
      // can never drag the whole page's vertical scroll position along with it.
      const offset = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: offset, behavior: "smooth" });
    });
  };

  const selectTech = (idx) => {
    setActiveTech(idx);
    scrollTechCardIntoView(idx);
  };

  const goTech = (dir) => {
    setActiveTech((prev) => {
      const next = (prev + dir + techAreas.length) % techAreas.length;
      scrollTechCardIntoView(next);
      return next;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => goTech(1), 4000);
    return () => clearTimeout(timer);
  }, [activeTech]);

  return (
    <>
      <main className={styles.main}>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
        <Header />

        {/* ── ヒーロー（全幅）── */}
        <section className={styles.hero} ref={heroRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
          <motion.img
            src="/images/service/service.png"
            alt="事業内容"
            className={styles.heroBgImg}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div aria-hidden="true" className={styles.heroOverlay} />
          <div className={styles.heroWrap}>
            <HeroParallaxDecor x={parallaxX} y={parallaxY} />
            <Reveal as="div" x={-50} duration={0.8} immediate className={styles.hero__text}>
              <p className={styles.hero__label}>事業内容</p>
              <h1 className={styles.hero__title}>
                インド発、高品質・<span>低コスト</span>のオフショア開発
              </h1>
              <p className={styles.hero__desc}>
                ウェブシステム・アプリ・MySQLデータベースをゼロから構築。
                専任チームが日本市場の品質基準に応えます。
              </p>
              <div className={styles.svcTabs}>
                {SERVICES.map((item) => (
                  <a
                    key={item.id}
                    href={`#section-${item.id}`}
                    className={styles.svcTab}
                    onClick={(e) => { e.preventDefault(); scrollTo(`section-${item.id}`); }}
                  >
                    {ServiceIcons[item.id]}
                    {item.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <HeroWaveDivider />
        </section>

        {/* ── コンテンツ（制限幅）── */}
        <div className={styles.home}>

          {/* サービス詳細セクション */}
          {DETAILS.map((d, i) => (
            <Reveal as="section" key={d.id} id={`section-${d.id}`} y={40} className={styles.svcSection}>
              <SectionDecor variant="section" />
              <div className={styles.svcWrap}>
                <div className={`${styles.svcInner} ${i % 2 !== 0 ? styles.svcReverse : ""}`}>
                  <div className={styles.svcText}>
                    <p className={styles.eyebrow}>{d.eyebrow}</p>
                    <h2 className={styles.svcH2}>{d.titleMain}<br /><span>{d.titleSpan}</span></h2>
                    {d.text.split("\n\n").map((para, j) => (
                      <p key={j} className={styles.svcPara}>{para}</p>
                    ))}
                    <Link href={d.link} className={styles.svcLink}>{d.linkText}</Link>
                  </div>
                  <div className={styles.svcImg}>
                    <div className={styles.svcImgFrame}>
                      <Image
                        src={d.img}
                        alt={d.imgAlt}
                        width={520}
                        height={380}
                        style={{ objectFit: d.objectFit || "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* 開発実績 */}
          <Reveal as="section" y={40} className={styles.projects}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>実績 · Projects</p>
              <h2 className={styles.section_title}>開発<span>実績のご紹介</span></h2>
              <p className={styles.projects__lead}>GENIOが直接開発・構築したプロジェクトと、深く関わってきたサービスをご紹介します。</p>
            </div>
            <div className={styles.projGrid}>
              {PROJECTS.map((p, i) => (
                <Reveal
                  as="div"
                  key={p.id}
                  {...cardEntrance(i)}
                  duration={0.45}
                  delay={i * 0.08}
                  className={styles.projCard}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedProject(p)}
                >
                  <div className={styles.projImg} style={p.bg ? { background: p.bg } : {}}>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: p.cardImageFit || "cover", padding: p.cardImageFit === "contain" ? "20px" : "0" }}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                    <span className={`${styles.projBadge} ${p.type === "built" ? styles.badgeBuilt : styles.badgeInvolved}`}>
                      {p.type === "built" ? "開発・構築" : "参画・貢献"}
                    </span>
                  </div>
                  <div className={styles.projBody}>
                    <p className={styles.projTitle}>{p.title}</p>
                    <p className={styles.projDesc}>{p.tagline}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* プロジェクト詳細ドロワー */}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  className={styles.detailPanel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className={styles.detailBackdrop} onClick={() => setSelectedProject(null)} />
                  <motion.div
                    className={styles.detailDrawer}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.32, ease: [0.22, 0.68, 0, 1.2] }}
                  >
                    <div className={styles.drawerHero} style={selectedProject.bg ? { background: selectedProject.bg } : {}}>
                      <Image
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        fill
                        style={{ objectFit: selectedProject.cardImageFit || "cover", padding: selectedProject.cardImageFit === "contain" ? "30px" : "0" }}
                        sizes="720px"
                      />
                      <div className={styles.drawerHeroGradient} />
                      <span className={styles.drawerHeroNo}>{selectedProject.number}</span>
                      <button className={styles.drawerClose} onClick={() => setSelectedProject(null)}>✕</button>
                    </div>

                    <div className={styles.drawerBody}>
                      <div className={styles.drawerMeta}>
                        <span className={`${styles.drawerBadge} ${selectedProject.type === "built" ? styles.badgeBuilt : styles.badgeInvolved}`}>
                          <span className={styles.bdot} />
                          {selectedProject.type === "built" ? "開発・構築" : "参画・貢献"}
                        </span>
                      </div>
                      <h2 className={styles.drawerTitle}>{selectedProject.title}</h2>
                      <p className={styles.drawerTagline}>{selectedProject.tagline}</p>
                      <div className={styles.drawerDivider} />

                      <div className={styles.drawerGrid}>
                        <div className={styles.infoBox}>
                          <p className={styles.infoBoxHead}>基本情報</p>
                          <div className={styles.infoRow}>
                            <p className={styles.infoLabel}>クライアント</p>
                            <p className={styles.infoVal}>{selectedProject.client}</p>
                          </div>
                          <div className={styles.infoRow}>
                            <p className={styles.infoLabel}>カテゴリ</p>
                            <p className={styles.infoVal}>{selectedProject.category}</p>
                          </div>
                        </div>
                        <div className={styles.outlineBox}>
                          <p className={styles.outlineBoxHead}>概要</p>
                          <p className={styles.outlineText}>{selectedProject.outline}</p>
                        </div>
                      </div>

                      {selectedProject.tags?.length > 0 && (
                        <div className={styles.tagsSection}>
                          <p className={styles.tagsSectionHead}>技術スタック</p>
                          <div className={styles.tagList}>
                            {selectedProject.tags.map((t) => (
                              <span key={t} className={styles.dtag}>{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <button className={styles.drawerBack} onClick={() => setSelectedProject(null)}>
                        ← 実績一覧へ戻る
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          {/* 技術スタック */}
          <Reveal as="section" y={40} amount={0.05} className={styles.tech}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>技術対応範囲</p>
              <h2 className={styles.section_title}>技術領域の<span>ご紹介</span></h2>
              <p className={styles.techLead}>カテゴリをタップすると、対応可能な技術の詳細が表示されます。</p>
            </div>

            <div className={styles.techCarousel}>
              <button type="button" className={styles.techArrow} onClick={() => goTech(-1)} aria-label="前のカテゴリ">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>

              <div className={styles.techTrack} ref={techTrackRef}>
                {techAreas.map((area, idx) => (
                  <motion.button
                    layout
                    type="button"
                    key={area.category}
                    className={`${styles.techCardMini} ${idx === activeTech ? styles.techCardMiniActive : ""}`}
                    onClick={() => selectTech(idx)}
                  >
                    <motion.span layout="position" className={styles.techCardMiniIcon}>{TECH_CATEGORY_ICONS[idx]}</motion.span>
                    <motion.p layout="position" className={styles.techCardMiniTitle}>{area.category}</motion.p>
                    <motion.span layout="position" className={styles.techCardMiniBadge}>{area.items.length} 件</motion.span>

                    <AnimatePresence initial={false}>
                      {idx === activeTech && (
                        <motion.div
                          key="items"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className={styles.techCardMiniItems}
                        >
                          <div className={styles.techItems}>
                            {area.items.map((item) => (
                              <div className={styles.techItem} key={`${area.category}-${item.name}`}>
                                {item.logo ? (
                                  <img src={item.logo} alt={item.name} loading="lazy" />
                                ) : (
                                  <span className={styles.techFallback}>{item.name.slice(0, 2).toUpperCase()}</span>
                                )}
                                <span>{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>

              <button type="button" className={styles.techArrow} onClick={() => goTech(1)} aria-label="次のカテゴリ">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>

            <div className={styles.techDots}>
              {techAreas.map((area, idx) => (
                <button
                  type="button"
                  key={area.category}
                  className={`${styles.techDot} ${idx === activeTech ? styles.techDotActive : ""}`}
                  onClick={() => selectTech(idx)}
                  aria-label={area.category}
                />
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
