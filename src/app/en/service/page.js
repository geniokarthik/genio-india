"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../globals.css";
import { motion, AnimatePresence } from "framer-motion";
import DesktopImg from "src/assets/images/service/desktop.png";
import AppDevelopmentImg from "src/assets/images/service/appdevelopment.png";
import MySQLImg from "src/assets/images/service/mysql.png";
import SalesImg from "src/assets/images/service/Sales.png";
import chatbotImg from "src/assets/images/service/chatbot.png";
import tarteImg from "src/assets/images/service/tarte.png";
import LanguageTeachingImg from "src/assets/images/service/languageteaching.png";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Service.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroParallaxDecor, { useHeroParallax } from "src/app/common/components/HeroParallaxDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";
import { cardEntrance } from "src/app/common/motion/variants";

const SERVICES = [
  { id: "web-development", label: "Web Development" },
  { id: "app-development", label: "App Development" },
  { id: "sql-database",    label: "MySQL Database" },
  { id: "japanese-study",  label: "Japanese Education" },
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
    eyebrow: "Web Development",
    titleMain: "Corporate Sites &",
    titleSpan: "Business Systems",
    link: "/en/contactus",
    linkText: "Start a web project →",
    img: DesktopImg,
    imgAlt: "Web Development",
    objectFit: "contain",
    text: `We provide end-to-end web site and system development services tailored to each client's needs — from design through development to ongoing operations.

Our services include fully responsive web design for all devices, feature-rich e-commerce site construction, and seamless CMS integration for intuitive management.

On every project we prioritize speed, security, and usability — delivering excellent performance and a comfortable experience across all screen sizes, from desktop to smartphone.`,
  },
  {
    id: "app-development",
    eyebrow: "App Development",
    titleMain: "iOS, Android &",
    titleSpan: "Cross-Platform Apps",
    link: "/en/contactus",
    linkText: "Start an app project →",
    img: AppDevelopmentImg,
    imgAlt: "App Development",
    objectFit: "contain",
    text: `We handle iOS, Android, and cross-platform app development. Our experienced team turns your ideas and vision into reality with solid engineering.

From early-stage idea organization and MVP design through development, release, and post-launch support, we work closely with you at every step.

We prioritize security, scalability, and intuitive UI/UX design — delivering smooth user experiences that work great on every device.`,
  },
  {
    id: "sql-database",
    eyebrow: "MySQL Database",
    titleMain: "Database Design &",
    titleSpan: "Optimization",
    link: "/en/contactus",
    linkText: "Talk database requirements →",
    img: MySQLImg,
    imgAlt: "MySQL Database",
    objectFit: "contain",
    text: `We provide comprehensive solutions for MySQL document reading and data processing, supporting efficient retrieval, analysis, and management of structured data.

Our services include advanced query optimization to improve performance and reduce load times, plus high-precision data extraction technology.

We enable smooth MySQL data integration with web and mobile applications for real-time data access — providing comprehensive support to maximize your enterprise data infrastructure.`,
  },
  {
    id: "japanese-study",
    eyebrow: "Japanese Education",
    titleMain: "Practical Japanese for",
    titleSpan: "IT Professionals",
    link: "/en/contactus",
    linkText: "Enquire about lessons →",
    img: LanguageTeachingImg,
    imgAlt: "Japanese Education",
    objectFit: "contain",
    text: `We offer Japanese language learning programs suitable for beginners through advanced learners. Our level-appropriate courses develop all four core skills — speaking, reading, writing, and listening.

All courses include foundational grammar instruction, practical vocabulary acquisition, and kanji study — building a solid learning foundation while helping you gain confidence in everyday conversation.

Whether for work, travel, or personal enrichment, experienced instructors provide personalized guidance with engaging materials that make learning enjoyable.`,
  },
];

const PROJECTS = [
  {
    id: "sl", type: "built", number: "No.01",
    title: "Smart Sales Ledger",
    img: SalesImg,
    cardImageFit: "contain",
    tagline: "A ledger management system built for sales teams. Centralizes revenue, deals, and customer data to dramatically improve operational efficiency.",
    client: "GENIO INDIA",
    category: "Business System",
    outline: "We designed and built a ledger system from scratch for sales staff to log and manage daily activities. Features include real-time sales visualization, deal status tracking, and customer management — all optimized for mobile use.",
    tags: ["Flutter", "Laravel", "MySQL", "Firebase"],
  },
  {
    id: "cb", type: "built", number: "No.02",
    title: "Chatbot",
    img: chatbotImg,
    bg: "#0a0a0a",
    cardImageFit: "contain",
    tagline: "An AI-powered customer support automation bot. Delivers instant 24/7 responses to inquiries using NLP technology.",
    client: "GENIO INDIA",
    category: "AI / Automation",
    outline: "We built an intelligent chatbot that handles customer inquiries automatically using NLP. The system integrates with existing business workflows, reducing response time to near-zero and freeing support staff for complex cases.",
    tags: ["Python", "React", "SQL Lite"],
  },
  {
    id: "ta", type: "involved", number: "No.03",
    title: "Tarte",
    img: tarteImg,
    bg: "#f8f4f0",
    cardImageFit: "contain",
    tagline: "A user-experience-first service. We played a central role in feature design and frontend implementation using React.",
    client: "External Client",
    category: "Web Application",
    outline: "We contributed to the feature design and frontend development of this platform using React. Our team focused on delivering a smooth, intuitive user experience with high performance across all devices.",
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
      { name: "Windows",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Linux",     logo: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "iOS",       logo: "https://cdn.simpleicons.org/apple/111111" },
      { name: "Android",   logo: "https://cdn.simpleicons.org/android/3DDC84" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "PHP",         logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Firebase",    logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "JAVA",        logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "C#",          logo: null },
      { name: "HTML5",       logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3",        logo: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "JavaScript",  logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "JQuery",      logo: "https://cdn.simpleicons.org/jquery/0769AD" },
      { name: "ReactNative", logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Objective-C", logo: "https://cdn.simpleicons.org/apple/111111" },
      { name: "node.js",     logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "React",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Nuxt.js",     logo: "https://cdn.simpleicons.org/nuxt/00DC82" },
      { name: "Next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "vue.js",      logo: "https://cdn.simpleicons.org/vuedotjs/42B883" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Laravel",    logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Symfony",    logo: "https://cdn.simpleicons.org/symfony/111111" },
      { name: "CakePHP",    logo: "https://cdn.simpleicons.org/cakephp/D33C43" },
      { name: "Smarty",     logo: null },
      { name: "Bootstrap",  logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "Spring",     logo: "https://cdn.simpleicons.org/spring/6DB33F" },
      { name: "Django",     logo: "https://cdn.simpleicons.org/django/092E20" },
    ],
  },
  {
    category: "Databases",
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
    category: "IDEs & Design Tools",
    items: [
      { name: "phpStorm",     logo: "https://cdn.simpleicons.org/phpstorm/000000" },
      { name: "Eclipse",      logo: "https://cdn.simpleicons.org/eclipseide/2C2255" },
      { name: "Visual Studio",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Adobe XD",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "AndroidSDK",   logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "XCode",        logo: "https://cdn.simpleicons.org/xcode/147EFB" },
    ],
  },
  {
    category: "Middleware",
    items: [
      { name: "Apache",  logo: "https://cdn.simpleicons.org/apache/D22128" },
      { name: "Tomcat",  logo: "https://cdn.simpleicons.org/apachetomcat/F8DC75" },
      { name: "nginx",   logo: "https://cdn.simpleicons.org/nginx/009639" },
    ],
  },
  {
    category: "AWS Services",
    items: [
      { name: "EC2",    logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "RDS",    logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "S3",     logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Lambda", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
    ],
  },
];

export default function ServiceEn() {
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

        {/* ── PAGE HERO (full-width) ── */}
        <section className={styles.hero} ref={heroRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
          <motion.img
            src="/images/service/service.png"
            alt="What We Offer"
            className={styles.heroBgImg}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div aria-hidden="true" className={styles.heroOverlay} />
          <div className={styles.heroWrap}>
            <HeroParallaxDecor x={parallaxX} y={parallaxY} />
            <Reveal as="div" x={-50} duration={0.8} immediate className={styles.hero__text}>
              <p className={styles.hero__label}>What We Offer</p>
              <h1 className={styles.hero__title}>
                India-Based High Quality, <span>Low Cost</span> Offshore Development
              </h1>
              <p className={styles.hero__desc}>
                We build web systems, apps, and MySQL databases from scratch.
                Our dedicated team meets Japanese market quality standards.
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

        {/* ── PAGE CONTENT (constrained) ── */}
        <div className={styles.home}>

          {/* SERVICE DETAIL SECTIONS */}
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

          {/* PROJECTS */}
          <Reveal as="section" y={40} className={styles.projects}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>Works · Projects</p>
              <h2 className={styles.section_title}>Our <span>Project Portfolio</span></h2>
              <p className={styles.projects__lead}>Projects built directly by GENIO, alongside services we've contributed to.</p>
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
                      {p.type === "built" ? "Built by Us" : "Contributed"}
                    </span>
                  </div>
                  <div className={styles.projBody}>
                    <p className={styles.projTitle}>{p.title}</p>
                    <p className={styles.projDesc}>{p.tagline}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Project Detail Drawer */}
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
                    {/* Hero image */}
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

                    {/* Body */}
                    <div className={styles.drawerBody}>
                      <div className={styles.drawerMeta}>
                        <span className={`${styles.drawerBadge} ${selectedProject.type === "built" ? styles.badgeBuilt : styles.badgeInvolved}`}>
                          <span className={styles.bdot} />
                          {selectedProject.type === "built" ? "Built by Us" : "Contributed"}
                        </span>
                      </div>
                      <h2 className={styles.drawerTitle}>{selectedProject.title}</h2>
                      <p className={styles.drawerTagline}>{selectedProject.tagline}</p>
                      <div className={styles.drawerDivider} />

                      <div className={styles.drawerGrid}>
                        <div className={styles.infoBox}>
                          <p className={styles.infoBoxHead}>Information</p>
                          <div className={styles.infoRow}>
                            <p className={styles.infoLabel}>Client</p>
                            <p className={styles.infoVal}>{selectedProject.client}</p>
                          </div>
                          <div className={styles.infoRow}>
                            <p className={styles.infoLabel}>Category</p>
                            <p className={styles.infoVal}>{selectedProject.category}</p>
                          </div>
                        </div>
                        <div className={styles.outlineBox}>
                          <p className={styles.outlineBoxHead}>Outline</p>
                          <p className={styles.outlineText}>{selectedProject.outline}</p>
                        </div>
                      </div>

                      {selectedProject.tags?.length > 0 && (
                        <div className={styles.tagsSection}>
                          <p className={styles.tagsSectionHead}>Tech Stack</p>
                          <div className={styles.tagList}>
                            {selectedProject.tags.map((t) => (
                              <span key={t} className={styles.dtag}>{t}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <button className={styles.drawerBack} onClick={() => setSelectedProject(null)}>
                        ← Back to Projects
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          {/* TECH STACK */}
          <Reveal as="section" y={40} amount={0.05} className={styles.tech}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>Technical Coverage</p>
              <h2 className={styles.section_title}>Technology Areas <span>We Support</span></h2>
              <p className={styles.techLead}>Tap a category to see the exact tools we work with.</p>
            </div>

            <div className={styles.techCarousel}>
              <button type="button" className={styles.techArrow} onClick={() => goTech(-1)} aria-label="Previous category">
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
                    <motion.span layout="position" className={styles.techCardMiniBadge}>{area.items.length} TECHNOLOGIES</motion.span>

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

              <button type="button" className={styles.techArrow} onClick={() => goTech(1)} aria-label="Next category">
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
            <h2 className={styles.cta__title}>Contact Us</h2>
            <p className={styles.cta__body}>For inquiries and estimates, please reach out via the link below. We respond within 2 business days.</p>
            <Link href="/en/contactus" className={styles.cta__btn}>Get in Touch →</Link>
          </Reveal>

        </div>
        <ScrollTop />
        <Footer />
      </main>
    </>
  );
}
