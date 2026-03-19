"use client";
import Image from "next/image";
import "../../globals.css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/lab_development.png";
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

const SERVICES = [
    { id: "web-development", icon: "🌐", label: "ウェブ開発", sub: "企業サイト・業務システム" },
    { id: "app-development", icon: "📱", label: "アプリ開発", sub: "iOS / Android" },
    { id: "sql-database", icon: "🗄️", label: "データベース", sub: "MySQL 設計・運用" },
    { id: "japanese-study", icon: "🇯🇵", label: "日本語教育", sub: "エンジニア向け日本語" },
];

const techAreas = [
    {
        category: "OS",
        items: [
            { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
            { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
            { name: "iOS", logo: "https://cdn.simpleicons.org/apple/111111" },
            { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84" },
        ],
    },
    {
        category: "開発言語",
        items: [
            { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
            { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
            { name: "JAVA", logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
            { name: "C#", logo: "https://cdn.simpleicons.org/sharp/99CC00" },
            { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS3", logo: "https://cdn.simpleicons.org/css/1572B6" },
            { name: "Javascript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "JQuery", logo: "https://cdn.simpleicons.org/jquery/0769AD" },
            { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Objective-C", logo: "https://cdn.simpleicons.org/apple/111111" },
            { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Nuxt.js", logo: "https://cdn.simpleicons.org/nuxt/00DC82" },
            { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "Vue.js", logo: "https://cdn.simpleicons.org/vuedotjs/42B883" },

        ],
    },
    {
        category: "フレームワーク",
        items: [
            { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
            { name: "Symfony", logo: "https://cdn.simpleicons.org/symfony/111111" },
            { name: "CakePHP", logo: "https://cdn.simpleicons.org/cakephp/D33C43" },
            { name: "Smarty", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/smarty/smarty-original.svg" },
            { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
            { name: "Spring", logo: "https://cdn.simpleicons.org/spring/6DB33F" },
            { name: "Django", logo: "https://cdn.simpleicons.org/django/092E20" },
        ],
    },
    {
        category: "データベース",
        items: [
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "MariaDB", logo: "https://cdn.simpleicons.org/mariadb/003545" },
            { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
            { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
            { name: "AWS Aurora", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable" },
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
            { name: "PhpStorm", logo: "https://cdn.simpleicons.org/phpstorm/000000" },
            { name: "Eclipse", logo: "https://cdn.simpleicons.org/eclipseide/2C2255" },
            { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
            { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
            { name: "Android SDK", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
            { name: "XCode", logo: "https://cdn.simpleicons.org/xcode/147EFB" },
        ],
    },
    {
        category: "ミドルウェア",
        items: [
            { name: "Apache", logo: "https://cdn.simpleicons.org/apache/D22128" },
            { name: "Tomcat", logo: "https://cdn.simpleicons.org/apachetomcat/F8DC75" },
            { name: "nginx", logo: "https://cdn.simpleicons.org/nginx/009639" },
        ],
    },
    {
        category: "AWSサービス",
        items: [
            { name: "EC2", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
            { name: "RDS", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
            { name: "S3", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
            { name: "Lambda", logo: "https://img.icons8.com/color/48/amazon-web-services.png" }
        ],
    },
];

const SINGLE_COL_CATEGORIES = [
    "フレームワーク",
    "OS",
    "データベース",
    "IDE等",
    "ミドルウェア",
    "AWSサービス",
];

const sectionFade = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.1 },
};

const TECH_DOT_COUNT = 5;

const DETAILS = [
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

const PROJECTS = [
    {
        id: "sl", type: "built", no: "01",
        title: "Sales Ledger",
        img: DesktopImg,
        tagline: "営業チームのための台帳管理システム。売上・案件・顧客情報を一元管理し、業務効率を大幅に向上させます。",
        info: [
            { label: "クライアント", val: "GENIO INDIA" },
            { label: "カテゴリ",     val: "業務システム" },
            { label: "制作年",       val: "2024" },
            { label: "担当範囲",     val: "設計 / 開発 / 運用" },
        ],
        outline: "営業担当者が日々の活動を記録・管理するための台帳システムをゼロから設計・構築しました。リアルタイムの売上可視化、案件ステータス管理、顧客情報の一元管理機能を実装。直感的なダッシュボードUIにより、管理者・現場両方の業務効率を向上させました。",
        tags: ["業務システム", "データ管理", "Next.js", "MySQL", "REST API", "ダッシュボード"],
    },
    {
        id: "cb", type: "built", no: "02",
        title: "Chatbot",
        img: AppDevelopmentImg,
        tagline: "AIを活用したカスタマーサポート自動化ボット。24時間365日の即時対応を実現します。",
        info: [
            { label: "クライアント", val: "GENIO INDIA" },
            { label: "カテゴリ",     val: "AI / 自動化" },
            { label: "制作年",       val: "2024" },
            { label: "担当範囲",     val: "設計 / 開発 / 学習モデル調整" },
        ],
        outline: "自然言語処理（NLP）技術を活用した問い合わせ自動応答システムを構築しました。FAQ学習機能、エスカレーション判定ロジック、管理者向け会話ログ分析機能を搭載。対応時間の大幅削減と顧客満足度向上を実現しました。",
        tags: ["AI / NLP", "自動化", "Node.js", "カスタマーサポート", "WebSocket", "チャットUI"],
    },
    {
        id: "ta", type: "involved", no: "03",
        title: "Tarte",
        img: LanguageTeachingImg,
        tagline: "ユーザー体験を最優先に設計されたサービス。機能設計とフロントエンド実装フェーズで中核を担いました。",
        info: [
            { label: "クライアント", val: "外部クライアント" },
            { label: "カテゴリ",     val: "ウェブアプリ / UI" },
            { label: "参画期間",     val: "2023〜2024" },
            { label: "担当範囲",     val: "UI設計 / フロントエンド実装" },
        ],
        outline: "デザインシステムの構築からコンポーネント実装まで、フロントエンド全般を担当しました。レスポンシブ対応、アクセシビリティ改善、パフォーマンス最適化を実施。ユーザーテストのフィードバックをもとに、反復的な改善を行いました。",
        tags: ["UI/UX", "React", "フロントエンド", "デザインシステム", "レスポンシブ", "アクセシビリティ"],
    },
    {
        id: "eap", type: "involved", no: "04",
        title: "EAP",
        img: MySqlImg,
        tagline: "エンタープライズ向けアプリケーションプラットフォーム。開発・保守・機能拡張に継続参画しています。",
        info: [
            { label: "クライアント", val: "外部クライアント" },
            { label: "カテゴリ",     val: "エンタープライズ / SaaS" },
            { label: "参画期間",     val: "2022〜継続中" },
            { label: "担当範囲",     val: "バックエンド / API設計 / DB最適化" },
        ],
        outline: "大規模なエンタープライズプラットフォームのバックエンド開発・保守を担当。RESTful API設計、データベース最適化、マイクロサービス間の連携実装を行いました。CI/CDパイプラインの整備によりリリースサイクルを短縮しました。",
        tags: ["エンタープライズ", "バックエンド", "API", "MySQL", "CI/CD", "マイクロサービス"],
    },
    {
        id: "mh", type: "involved", no: "05",
        title: "Memory Hint",
        img: DesktopImg,
        tagline: "学習支援・記憶定着を目的とした教育テックアプリ。EdTech分野での実績を積みました。",
        info: [
            { label: "クライアント", val: "外部クライアント" },
            { label: "カテゴリ",     val: "EdTech / モバイルアプリ" },
            { label: "参画期間",     val: "2023" },
            { label: "担当範囲",     val: "モバイルアプリ開発 / テスト" },
        ],
        outline: "学習者の記憶定着を科学的にサポートするモバイルアプリの開発に参画。間隔反復アルゴリズムの実装、進捗可視化機能、通知システムを構築しました。React Nativeによるクロスプラットフォーム対応でiOS・Android両方をサポート。",
        tags: ["EdTech", "React Native", "モバイルアプリ", "学習支援", "iOS", "Android"],
    },
    {
        id: "tcc", type: "involved", no: "06",
        title: "TCC",
        img: AppDevelopmentImg,
        tagline: "企業向けコミュニケーション・業務管理システム。SaaSアーキテクチャの設計・構築に参画しました。",
        info: [
            { label: "クライアント", val: "外部クライアント" },
            { label: "カテゴリ",     val: "SaaS / コミュニケーション" },
            { label: "参画期間",     val: "2023〜2024" },
            { label: "担当範囲",     val: "フルスタック / クラウドインフラ" },
        ],
        outline: "企業内コミュニケーションと業務管理を統合したSaaSプラットフォームの開発に参画。リアルタイムメッセージング、タスク管理、ファイル共有機能を実装。AWSを活用したスケーラブルなインフラ設計により大規模ユーザーへの対応を実現しました。",
        tags: ["SaaS", "コミュニケーション", "クラウド", "AWS", "WebSocket", "フルスタック"],
    },
];

const PROJECT_FILTERS = [
    { key: "all",      label: "すべて" },
    { key: "built",    label: "開発・構築" },
    { key: "involved", label: "参画・貢献" },
];

function DetailDrawer({ project, onClose }) {
    const isBuilt = project?.type === "built";

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = project ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <div className={styles.detailPanel}>
                    <motion.div
                        className={styles.detailBackdrop}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className={styles.detailDrawer}
                        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                        transition={{ duration: 0.38, ease: [0.22, 0.68, 0, 1.05] }}
                    >
                        <div className={styles.drawerHero}>
                            <Image src={project.img} alt={project.title} fill style={{ objectFit: "cover" }} priority />
                            <div className={styles.drawerHeroGradient} />
                            <span className={styles.drawerHeroNo}>No.{project.no}</span>
                            <button className={styles.drawerClose} onClick={onClose} aria-label="閉じる">✕</button>
                        </div>
                        <div className={styles.drawerBody}>
                            <div className={styles.drawerMeta}>
                                <span className={`${styles.drawerBadge} ${isBuilt ? styles.badgeBuilt : styles.badgeInvolved}`}>
                                    <span className={styles.bdot} />
                                    {isBuilt ? "開発・構築" : "参画・貢献"}
                                </span>
                            </div>
                            <h2 className={styles.drawerTitle}>{project.title}</h2>
                            <p className={styles.drawerTagline}>{project.tagline}</p>
                            <div className={styles.drawerDivider} />
                            <div className={styles.drawerGrid}>
                                <div className={styles.infoBox}>
                                    <h4 className={styles.infoBoxHead}>Information</h4>
                                    {project.info.map((row, i) => (
                                        <div key={i} className={styles.infoRow}>
                                            <p className={styles.infoLabel}>{row.label}</p>
                                            <p className={styles.infoVal}>{row.val}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.outlineBox}>
                                    <h4 className={styles.outlineBoxHead}>Outline</h4>
                                    <p className={styles.outlineText}>{project.outline}</p>
                                </div>
                            </div>
                            <div className={styles.tagsSection}>
                                <h4 className={styles.tagsSectionHead}>Tags</h4>
                                <div className={styles.tagList}>
                                    {project.tags.map((t) => <span key={t} className={styles.dtag}>{t}</span>)}
                                </div>
                            </div>
                            <button className={styles.drawerBack} onClick={onClose}>← 一覧に戻る</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}


export default function Service_Details() {
    const techSliderRef = useRef(null);
    const isTechDraggingRef = useRef(false);
    const techDragStartXRef = useRef(0);
    const techDragStartScrollRef = useRef(0);
    const techPauseUntilRef = useRef(0);
    const [activeTechDot, setActiveTechDot] = useState(0);

    const [activeFilter,  setActiveFilter]  = useState("all");
    const [activeProject, setActiveProject] = useState(null);

    const filteredProjects = activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.type === activeFilter);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const scrollTech = (direction) => {
        const track = techSliderRef.current;
        if (!track) return;

        const firstCard = track.querySelector(`.${styles.techFeatureCard}`);
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
        const gap = parseFloat(getComputedStyle(track).columnGap || "16") || 16;
        const offset = cardWidth + gap;
        const delta = direction === "next" ? offset : -offset;

        if (typeof track.scrollBy === "function") {
            track.scrollBy({ left: delta, behavior: "smooth" });
        } else {
            track.scrollLeft += delta;
        }
    };

    const pauseTechAutoScroll = () => {
        techPauseUntilRef.current = Date.now() + 6000;
    };

    const scrollTechToDot = (index) => {
        const track = techSliderRef.current;
        if (!track) return;

        const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
        const nextLeft = TECH_DOT_COUNT > 1
            ? (maxScroll * index) / (TECH_DOT_COUNT - 1)
            : 0;

        track.scrollTo({ left: nextLeft, behavior: "smooth" });
        setActiveTechDot(index);
    };

    useEffect(() => {
        const track = techSliderRef.current;
        if (!track) return;

        const syncActiveDot = () => {
            const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
            if (maxScroll === 0) {
                setActiveTechDot(0);
                return;
            }

            const ratio = track.scrollLeft / maxScroll;
            setActiveTechDot(Math.min(TECH_DOT_COUNT - 1, Math.round(ratio * (TECH_DOT_COUNT - 1))));
        };

        syncActiveDot();
        track.addEventListener("scroll", syncActiveDot, { passive: true });

        const handleMouseDown = (event) => {
            if (event.button !== 0) return;

            isTechDraggingRef.current = true;
            techDragStartXRef.current = event.clientX;
            techDragStartScrollRef.current = track.scrollLeft;
            track.style.cursor = "grabbing";
            pauseTechAutoScroll();
        };

        const handleMouseMove = (event) => {
            if (!isTechDraggingRef.current) return;

            const deltaX = event.clientX - techDragStartXRef.current;
            track.scrollLeft = techDragStartScrollRef.current - deltaX;
        };

        const stopDragging = () => {
            if (!isTechDraggingRef.current) return;

            isTechDraggingRef.current = false;
            track.style.cursor = "";
        };

        const handleWheel = () => {
            pauseTechAutoScroll();
        };

        track.addEventListener("mousedown", handleMouseDown);
        track.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", stopDragging);

        const timer = setInterval(() => {
            if (Date.now() < techPauseUntilRef.current) return;

            const firstCard = track.querySelector(`.${styles.techFeatureCard}`);
            const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
            const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - cardWidth;

            if (nearEnd) {
                track.scrollTo({ left: 0, behavior: "smooth" });
                setActiveTechDot(0);
            } else {
                scrollTech("next");
            }
        }, 3800);

        return () => {
            clearInterval(timer);
            track.removeEventListener("scroll", syncActiveDot);
            track.removeEventListener("mousedown", handleMouseDown);
            track.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopDragging);
        };
    }, []);

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
                            <h1 className={`${styles.hero__title} ${styles.firstLetterRed}`}>
                                インド発、<br />高品質、低コストの<br />オフショア開発

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
                            <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>サービス一覧</h2>
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
                        </motion.section>
                    ))}

                    {/* ADDED: Projects section */}
                    <motion.section
                        className={styles.projects}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className={styles.projects__head}>
                            <p className={styles.section_label}>実績 · Projects</p>
                            <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>開発実績のご紹介</h2>
                            <p className={styles.projects__lead}>GENIOが直接開発・構築したプロジェクトと、深く関わってきたサービスをご紹介します。</p>
                        </div>
                        <div className={styles.projects__filters}>
                            {PROJECT_FILTERS.map((f) => (
                                <button key={f.key} className={`${styles.projects__filter_btn} ${activeFilter === f.key ? styles.projects__filter_btn_active : ""}`} onClick={() => setActiveFilter(f.key)}>{f.label}</button>
                            ))}
                        </div>
                        <motion.div className={styles.projects__grid} layout>
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((p, i) => (
                                    <motion.article
                                        key={p.id}
                                        className={`${styles.project_card} ${p.type === "built" ? styles.project_card__built : styles.project_card__involved}`}
                                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.32, delay: i * 0.04 }}
                                        layout
                                        onClick={() => setActiveProject(p)}
                                    >
                                        <div className={styles.cardImg}>
                                            <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                                            <div className={`${styles.cardAccentLine} ${p.type === "built" ? styles.cardAccentBuilt : styles.cardAccentInvolved}`} />
                                            <div className={styles.cardImgGradient} />
                                            <div className={styles.cardOverlay}><div className={styles.overlayPill}>詳細を見る →</div></div>
                                        </div>
                                        <div className={styles.cardFoot}>
                                            <span className={`${styles.cardBadge} ${p.type === "built" ? styles.badgeBuilt : styles.badgeInvolved}`}>
                                                <span className={styles.bdot} />
                                                {p.type === "built" ? "開発・構築" : "参画・貢献"}
                                            </span>
                                            <h3 className={styles.cardTitle}>{p.title}</h3>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </motion.section>


                    <motion.section {...sectionFade} className={styles.tech}>
                        <div className={styles.sectionHead}>
                            <p>技術対応範囲</p>
                            <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>技術領域のご紹介</h2>
                        </div>
                        <p className={styles.techLead}>サポート可能なテクノロジースタックをカテゴリ別にリスト形式でまとめました。</p>

                        <div className={styles.techCarouselWrap}>
                            <div className={styles.techCardTrack} ref={techSliderRef}>
                                {techAreas.map((area, idx) => (
                                    <motion.article
                                        key={area.category}
                                        className={styles.techFeatureCard}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: idx * 0.03 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div className={styles.techFeatureMedia}>
                                            <h3>{area.category}</h3>
                                        </div>
                                        <div className={styles.techFeatureBody}>
                                            <div
                                                className={
                                                    `${styles.techMiniList} ${SINGLE_COL_CATEGORIES.includes(area.category)
                                                        ? styles.techSingleColumn
                                                        : ""
                                                    }`
                                                }
                                            >
                                                {area.items.map((item) => (
                                                    <div className={styles.techMiniItem} key={`${area.category}-${item.name}`}>
                                                        {item.logo ? (
                                                            <img src={item.logo} alt={`${item.name} logo`} loading="lazy" />
                                                        ) : (
                                                            <span className={styles.techLogoFallback}>{item.name.slice(0, 2).toUpperCase()}</span>
                                                        )}
                                                        <span>{item.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                        <div className={styles.techDots}>
                            {Array.from({ length: TECH_DOT_COUNT }, (_, n) => (
                                <button
                                    type="button"
                                    key={n}
                                    className={`${styles.techDot} ${n === activeTechDot ? styles.techDotActive : ""}`}
                                    onClick={() => scrollTechToDot(n)}
                                    aria-label={`技術スライド ${n + 1} へ移動`}
                                />
                            ))}
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
            <DetailDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </>
    );
}
