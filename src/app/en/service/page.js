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
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Service.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";


const SERVICES = [
  { id: "web-development", icon: "🌐", label: "Web Development",    sub: "Corporate sites · Business systems" },
  { id: "app-development", icon: "📱", label: "App Development",    sub: "iOS / Android" },
  { id: "sql-database",    icon: "🗄️", label: "Database",           sub: "MySQL design & operations" },
  { id: "japanese-study",  icon: "🇯🇵", label: "Japanese Education", sub: "Japanese for engineers" },
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
    category: "Languages",
    items: [
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "JAVA", logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "C#", logo: "https://cdn.simpleicons.org/sharp/99CC00" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Javascript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "JQuery", logo: "https://cdn.simpleicons.org/jquery/0769AD" },
      { name: "ReactNative", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Objective-C", logo: "https://cdn.simpleicons.org/apple/111111" },
      { name: "node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Nuxt.js", logo: "https://cdn.simpleicons.org/nuxt/00DC82" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "vue.js", logo: "https://cdn.simpleicons.org/vuedotjs/42B883" },

    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Symfony", logo: "https://cdn.simpleicons.org/symfony/111111" },
      { name: "CakePHP", logo: "https://cdn.simpleicons.org/cakephp/D33C43" },
      { name: "Smarty", logo: "" },
      { name: "bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "Spring", logo: "https://cdn.simpleicons.org/spring/6DB33F" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django/092E20" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MaruaDB", logo: "https://cdn.simpleicons.org/mariadb/003545" },
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
    category: "IDEs & Design Tools",
    items: [
      { name: "phpStrom", logo: "https://cdn.simpleicons.org/phpstorm/000000" },
      { name: "Eclipse", logo: "https://cdn.simpleicons.org/eclipseide/2C2255" },
      { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "AndroidSDK", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "XCode", logo: "https://cdn.simpleicons.org/xcode/147EFB" },
    ],
  },
  {
    category: "Middleware",
    items: [
      { name: "Apache", logo: "https://cdn.simpleicons.org/apache/D22128" },
      { name: "Tomcat", logo: "https://cdn.simpleicons.org/apachetomcat/F8DC75" },
      { name: "nginx", logo: "https://cdn.simpleicons.org/nginx/009639" },
    ],
  },
  {
    category: "AWS Services",
    items: [
      { name: "EC2", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "RDS", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "S3", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Lambda", logo: "https://img.icons8.com/color/48/amazon-web-services.png" }
    ],
  },
];


const SINGLE_COL_CATEGORIES = [
  "Frameworks",
  "OS",
  "Databases",
  "IDEs & Design Tools",
  "Middleware",
  "AWS Services",
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
    title: "Web Development",
    img: DesktopImg,
    imgAlt: "Web Development",
    text: `We provide end-to-end web site and system development services tailored to each client's needs — from design through development to ongoing operations.

Our services include fully responsive web design for all devices, feature-rich e-commerce site construction, and seamless CMS integration for intuitive management.

On every project we prioritize speed, security, and usability — delivering excellent performance and a comfortable experience across all screen sizes, from desktop to smartphone.`,
  },
  {
    id: "app-development",
    title: "App Development",
    img: AppDevelopmentImg,
    imgAlt: "App Development",
    text: `We handle iOS, Android, and cross-platform app development. Our experienced team turns your ideas and vision into reality with solid engineering.

From early-stage idea organization and MVP design through development, release, and post-launch support, we work closely with you at every step.

We prioritize security, scalability, and intuitive UI/UX design — delivering smooth user experiences that work great on every device.`,
  },
  {
    id: "sql-database",
    title: "MySQL Database",
    img: MySqlImg,
    imgAlt: "MySQL Database",
    text: `We provide comprehensive solutions for MySQL document reading and data processing, supporting efficient retrieval, analysis, and management of structured data.

Our services include advanced query optimization to improve performance and reduce load times, plus high-precision data extraction technology to pull exactly the information you need, when you need it.

We enable smooth MySQL data integration with web and mobile applications for real-time data access — providing comprehensive support to maximize your enterprise data infrastructure.`,
  },
  {
    id: "japanese-study",
    title: "Japanese Education",
    img: LanguageTeachingImg,
    imgAlt: "Japanese Education",
    text: `We offer Japanese language learning programs suitable for beginners through advanced learners. Our level-appropriate courses develop all four core skills — speaking, reading, writing, and listening — for practical communication ability.

All courses include foundational grammar instruction, practical vocabulary acquisition, and kanji study — building a solid learning foundation while helping you gain confidence in everyday conversation.

Whether for travel, work, academics, or personal enrichment, experienced instructors provide personalized guidance with engaging materials that make learning enjoyable.`,
  },
];

const PROJECTS = [
  {
    id: "sl", type: "built", no: "01",
    title: "Sales Ledger",
    img: DesktopImg,
    tagline: "A ledger management system built for sales teams. Centralizes revenue, deals, and customer data to dramatically improve operational efficiency.",
    info: [
      { label: "Client",    val: "GENIO INDIA" },
      { label: "Category",  val: "Business System" },
      { label: "Year",      val: "2024" },
      { label: "Role",      val: "Design / Development / Operations" },
    ],
    outline: "We designed and built a ledger system from scratch for sales staff to log and manage daily activities. Features include real-time sales visualization, deal status tracking, and centralized customer management — all via an intuitive dashboard UI that boosts efficiency for both managers and frontline staff.",
    tags: ["Business System", "Data Management", "Next.js", "MySQL", "REST API", "Dashboard"],
  },
  {
    id: "cb", type: "built", no: "02",
    title: "Chatbot",
    img: AppDevelopmentImg,
    tagline: "An AI-powered customer support automation bot. Delivers instant 24/7 responses to inquiries.",
    info: [
      { label: "Client",    val: "GENIO INDIA" },
      { label: "Category",  val: "AI / Automation" },
      { label: "Year",      val: "2024" },
      { label: "Role",      val: "Design / Development / Model Tuning" },
    ],
    outline: "We built an automated inquiry response system leveraging NLP technology. Equipped with FAQ learning, escalation logic, and an admin conversation log dashboard. Achieved significant reductions in response time and improved customer satisfaction.",
    tags: ["AI / NLP", "Automation", "Node.js", "Customer Support", "WebSocket", "Chat UI"],
  },
  {
    id: "ta", type: "involved", no: "03",
    title: "Tarte",
    img: LanguageTeachingImg,
    tagline: "A user-experience-first service. We played a central role in feature design and frontend implementation.",
    info: [
      { label: "Client",       val: "External Client" },
      { label: "Category",     val: "Web App / UI" },
      { label: "Involvement",  val: "2023–2024" },
      { label: "Role",         val: "UI Design / Frontend Implementation" },
    ],
    outline: "We handled the full frontend — from building the design system to component implementation. Delivered responsive design, accessibility improvements, and performance optimization. Iteratively refined the product based on user testing feedback.",
    tags: ["UI/UX", "React", "Frontend", "Design System", "Responsive", "Accessibility"],
  },
  {
    id: "eap", type: "involved", no: "04",
    title: "EAP",
    img: MySqlImg,
    tagline: "An enterprise-grade application platform. We provide ongoing development, maintenance, and feature expansion.",
    info: [
      { label: "Client",       val: "External Client" },
      { label: "Category",     val: "Enterprise / SaaS" },
      { label: "Involvement",  val: "2022–Present" },
      { label: "Role",         val: "Backend / API Design / DB Optimization" },
    ],
    outline: "We handle backend development and maintenance for a large-scale enterprise platform. Responsibilities include RESTful API design, database optimization, and microservice integration. We also streamlined the CI/CD pipeline to shorten release cycles.",
    tags: ["Enterprise", "Backend", "API", "MySQL", "CI/CD", "Microservices"],
  },
  {
    id: "mh", type: "involved", no: "05",
    title: "Memory Hint",
    img: DesktopImg,
    tagline: "An EdTech app designed to support learning and memory retention. Proud work in the education technology space.",
    info: [
      { label: "Client",       val: "External Client" },
      { label: "Category",     val: "EdTech / Mobile App" },
      { label: "Involvement",  val: "2023" },
      { label: "Role",         val: "Mobile App Development / QA" },
    ],
    outline: "We contributed to a mobile app designed to scientifically support memory retention. Implemented a spaced-repetition algorithm, progress visualization, and a notification system. Built with React Native for cross-platform support on both iOS and Android.",
    tags: ["EdTech", "React Native", "Mobile App", "Learning Support", "iOS", "Android"],
  },
  {
    id: "tcc", type: "involved", no: "06",
    title: "TCC",
    img: AppDevelopmentImg,
    tagline: "A communication and business management system for enterprises. We contributed to the SaaS architecture design and build.",
    info: [
      { label: "Client",       val: "External Client" },
      { label: "Category",     val: "SaaS / Communication" },
      { label: "Involvement",  val: "2023–2024" },
      { label: "Role",         val: "Full Stack / Cloud Infrastructure" },
    ],
    outline: "We participated in building a SaaS platform integrating corporate communications and business management. Implemented real-time messaging, task management, and file sharing. Designed a scalable AWS infrastructure to support large user bases.",
    tags: ["SaaS", "Communication", "Cloud", "AWS", "WebSocket", "Full Stack"],
  },
];

const PROJECT_FILTERS = [
  { key: "all",      label: "All" },
  { key: "built",    label: "Built by Us" },
  { key: "involved", label: "Contributed" },
];

// ADDED: Detail Drawer (English)
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
          <motion.div className={styles.detailBackdrop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} onClick={onClose} />
          <motion.div className={styles.detailDrawer} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.38, ease: [0.22, 0.68, 0, 1.05] }}>
            <div className={styles.drawerHero}>
              <Image src={project.img} alt={project.title} fill style={{ objectFit: "cover" }} priority />
              <div className={styles.drawerHeroGradient} />
              <span className={styles.drawerHeroNo}>No.{project.no}</span>
              <button className={styles.drawerClose} onClick={onClose} aria-label="Close">✕</button>
            </div>
            <div className={styles.drawerBody}>
              <div className={styles.drawerMeta}>
                <span className={`${styles.drawerBadge} ${isBuilt ? styles.badgeBuilt : styles.badgeInvolved}`}>
                  <span className={styles.bdot} />
                  {isBuilt ? "Built by Us" : "Contributed"}
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
              <button className={styles.drawerBack} onClick={onClose}>← Back to List</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


export default function ServiceEn() {
  const techSliderRef = useRef(null);
  const isTechDraggingRef = useRef(false);
  const techDragStartXRef = useRef(0);
  const techDragStartScrollRef = useRef(0);
  const techPauseUntilRef = useRef(0);
  const [activeTechDot, setActiveTechDot] = useState(0);

  const [activeFilter,  setActiveFilter]  = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === activeFilter);

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
              <p className={styles.hero__label}>Our Services</p>
              <h1 className={`${styles.hero__title} ${styles.firstLetterRed}`}>
                India-Based<br/> High Quality,Low Cost <br/>Offshore Development
              </h1>
              <p className={styles.hero__desc}>
                We build web systems, apps, and MySQL databases from scratch.
                Our dedicated team meets Japanese market quality standards.
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
                  <Image src={TeamMbersImg} alt="Team members" fill style={{ objectFit: "cover" }} priority />
                </div>
                <div className={styles.orbit__ring}>
                  <div className={styles.orbit__top}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={DesktopImg} alt="Web development" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__right}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={AppDevelopmentImg} alt="App development" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__bottom}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={MySqlImg} alt="Database" fill style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orbit__left}>
                    <div className={styles.orbit__counter}>
                      <div className={styles.orbit__img}>
                        <Image src={LanguageTeachingImg} alt="Japanese education" fill style={{ objectFit: "cover" }} />
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
              <p className={styles.section_label}>What We Offer</p>
              <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>Our Services</h2>
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
                        <Image src={DownArrowImg} alt="scroll down" width={20} height={20} />
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

          <motion.section
            className={styles.projects}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={styles.projects__head}>
              <p className={styles.section_label}>Works · Projects</p>
              <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>Our Project Portfolio</h2>
              <p className={styles.projects__lead}>Projects built directly by GENIO, alongside services we've contributed to.</p>
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
                      <div className={styles.cardOverlay}><div className={styles.overlayPill}>View Details →</div></div>
                    </div>
                    <div className={styles.cardFoot}>
                      <span className={`${styles.cardBadge} ${p.type === "built" ? styles.badgeBuilt : styles.badgeInvolved}`}>
                        <span className={styles.bdot} />
                        {p.type === "built" ? "Built by Us" : "Contributed"}
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
              <p>Technical Coverage</p>
              <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>Technology Areas We Support</h2>
            </div>
            <p className={styles.techLead}>Browse our technology stack by category in a card format.</p>

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
                          `${styles.techMiniList} ${
                            SINGLE_COL_CATEGORIES.includes(area.category)
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
                  aria-label={`Go to technology slide ${n + 1}`}
                />
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className={styles.cta__title}>Contact Us</h2>
            <p className={styles.cta__body}>For inquiries and estimates, please reach out via the link below.</p>
            <Link href="/en/contactus" className={styles.cta__btn}>Get in Touch →</Link>
          </motion.section>

        </div>
        <ScrollTop />
        <Footer />
      </main>
      <DetailDrawer project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
