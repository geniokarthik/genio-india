"use client";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import OffShoreImg from "src/assets/images/service/en/offshore.png";
import LabDevImg from "src/assets/images/service/lab_development.png";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import pt1 from "src/assets/images/service/en/pattern1.png";
import pt2 from "src/assets/images/service/en/pattern2.png";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Offshore.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";

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
];

export default function ServiceEn() {
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
              <p className={styles.hero__label}>Offshore Services</p>
              <h1 className={`${styles.hero__title} ${styles.firstLetterRed}`}>
                Offshoring means giving some work to a company in another country where labor costs are lower to save money.
              </h1>
              <h1 className={`${styles.firstLetterRed}`}>
                What are the benefits of offshore?
              </h1>
              <p className={styles.hero__desc}>
                Problems that cannot be solved with internal resources → Problems that require time for implementation and processing due to personnel or technical aspects can be solved by moving to offshore. Want to reduce costs → Offshore can significantly reduce costs compared to doing everything in-house or hiring personnel in the country. Want to focus on core business → Offshore low-priority work can be offshored, allowing the company to devote sufficient resources to core business that creates value. Want to prioritize speed → Many startups are moving to offshore in search of fast and inexpensive services.
              </p>
            </motion.div>

            <motion.div
              className={styles.hero__collage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -30, 0] }}
              whileHover={{ scale: 1.02 }}
              transition={{
                opacity: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                scale: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                y: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 0.6 },
              }}
            >
              <Image
                src={OffShoreImg}
                alt="Offshore services infographic"
                width={520}
                height={480}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                priority
              />
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
                  { n: "01", t: "Requirements Gathering",  b: "Interviews · requirement definition · analysis" },
                  { n: "02", t: "Design & Documentation",  b: "System architecture · UI/UX design" },
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
                        <div className={styles.pattern_card__img}>
                          <Image src={p.img} alt={p.alt} width={480} height={260} style={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "contain" }} />
                        </div>
                        <p className={styles.pattern_card__label}>{p.label}</p>
                        <p className={styles.pattern_card__desc}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          ))}

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
    </>
  );
}
