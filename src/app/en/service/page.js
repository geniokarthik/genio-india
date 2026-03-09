"use client";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
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
              <p className={styles.hero__label}>Our Services</p>
              <h1 className={styles.hero__title}>
                India-Based <span>High Quality,<br />Low Cost</span> Offshore Development
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
              <h2 className={styles.section_title}>Our Services</h2>
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
                        <Image src={DownArrowImg} alt="scroll down" width={16} height={11} />
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
                  <h2 className={styles.section_title}>How We Work</h2>
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
