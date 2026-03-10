"use client";
import Image from "next/image";
import "../../globals.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/lab_development.png";
import pt1 from "src/assets/images/service/en/pattern1.png";
import pt2 from "src/assets/images/service/en/pattern2.png";
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
  { id: "lab",             icon: "🏭", label: "Lab Development",    sub: "Dedicated team · Monthly fixed" },
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

const DETAILS = [
  {
    id: "lab",
    title: "Lab Development",
    img: TeamMbersImg,
    imgAlt: "Lab Development",
    text: `Our Lab-type offshore development service provides you with a dedicated development team at a fixed monthly cost. Rather than per-project outsourcing, a dedicated engineer team works continuously as your own resource.

The team deeply understands your business and tech stack, minimizing communication overhead while delivering fast, high-quality development.

From startups to mid-sized enterprises, this model is ideal for any company that needs continuous development and improvement.`,
    patterns: [
      { img: pt1, alt: "Pattern 1", label: "Pattern 1", desc: "The client and the Bridge SE (BrSE) work together directly." },
      { img: pt2, alt: "Pattern 2", label: "Pattern 2", desc: "The bridge SE will visit the client and set up a dedicated development team in India." },
    ],
  },
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

export default function ServiceEn() {
  const techSliderRef = useRef(null);

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

  useEffect(() => {
    const track = techSliderRef.current;
    if (!track) return;

    const timer = setInterval(() => {
      const firstCard = track.querySelector(`.${styles.techFeatureCard}`);
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
      const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - cardWidth;

      if (nearEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollTech("next");
      }
    }, 3800);

    return () => clearInterval(timer);
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

              {d.patterns && (
                <div className={styles.pattern_section}>
                  <p className={styles.pattern_section__heading}>Team Formation Patterns</p>
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
                  alt="Development process"
                  width={480}
                  height={420}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </motion.div>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>Development Process</p>
                  <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>How We Work</h2>
                </div>
                {[
                  { n: "01", t: "Requirements Gathering", b: "Interviews · requirement definition · analysis" },
                  { n: "02", t: "Design",                  b: "System architecture · UI/UX design" },
                  { n: "03", t: "Programming",             b: "Implementation · coding · unit testing" },
                  { n: "04", t: "Review",                  b: "Integration testing · client review" },
                  { n: "05", t: "Release",                 b: "Production deployment · delivery" },
                  { n: "06", t: "Maintenance",             b: "Ongoing support · operations" },
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

          <motion.section {...sectionFade} className={styles.tech}>
          <div className={styles.sectionHead}>
            <p>Technical Coverage</p>
            <h2 className={`${styles.section_title} ${styles.firstLetterRed}`}>Technology Areas We Support</h2>
          </div>
          <p className={styles.techLead}>Browse our technology stack by category in a card format.</p>

          <div className={styles.techCarouselWrap}>
            <button type="button" className={`${styles.techArrow} ${styles.techArrowLeft}`} onClick={() => scrollTech("prev")} aria-label="Previous">
              ‹
            </button>
            <button type="button" className={`${styles.techArrow} ${styles.techArrowRight}`} onClick={() => scrollTech("next")} aria-label="Next">
              ›
            </button>

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
            <Link href="/en/contact" className={styles.cta__btn}>Get in Touch →</Link>
          </motion.section>

        </div>
        <ScrollTop />
        <Footer />
      </main>
    </>
  );
}
