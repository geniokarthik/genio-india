"use client";
import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import Pattern1Img from "src/assets/images/service/en/pattern1.png";
import Pattern2Img from "src/assets/images/service/en/pattern2.png";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Link from "next/link";
import styles from "src/app/common/styles/Offshore.module.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Problems with internal resources",
    desc: "Problems that cannot be solved with internal resources can be resolved by moving offshore.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Reduce Costs",
    desc: "Offshore can significantly reduce costs compared to doing everything in-house or hiring locally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Focus on Core Business",
    desc: "Offshore low-priority tasks and let your team devote resources to core business activities that create real value.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Prioritize Speed",
    desc: "Many startups move to offshore in search of fast and inexpensive services. We deliver fast without compromising quality.",
  },
];

const STEPS = [
  { n: "01", t: "Requirements Gathering", b: "Interviews · requirement definition · analysis" },
  { n: "02", t: "Design & Documentation", b: "System architecture · UI/UX design" },
  { n: "03", t: "Programming",            b: "Implementation · coding · unit testing" },
  { n: "04", t: "Review",                 b: "Integration testing · client review" },
  { n: "05", t: "Release",                b: "Production deployment · delivery" },
  { n: "06", t: "Maintenance",            b: "Ongoing support · operations" },
];

const PATTERNS = [
  { title: "Pattern 1", img: Pattern1Img, desc: "The client and the Bridge SE (BrSE) work together directly." },
  { title: "Pattern 2", img: Pattern2Img, desc: "The bridge SE will visit the client and set up a dedicated development team in India." },
];

export default function OffshoreServiceEn() {
  return (
    <>
      <main className={styles.main}>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
        <Header />

        {/* ── HERO (full-width) ── */}
        <section className={styles.hero}>
          <AnimatedHeroBackdrop className={styles.heroCanvasBackdrop} />
          <div aria-hidden="true" className={styles.heroDecorRing} />
          <div aria-hidden="true" className={styles.heroDecorDot} />
          <div className={styles.heroInner}>
            <motion.div
              className={styles.hero__text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className={styles.hero__label}>Offshore Services</p>
              <h1 className={styles.hero__title}>
                Offshoring means giving some work to a company in another country where labor costs are lower to save money.
              </h1>
            </motion.div>

            <motion.div
              className={styles.hero__collage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="/images/home/hero-real-team.png"
                alt="Genio India development team"
                className={styles.heroImg}
              />
            </motion.div>
          </div>
        </section>

        {/* ── PAGE CONTENT (constrained) ── */}
        <div className={styles.home}>

          {/* BENEFITS */}
          <motion.section
            className={styles.benefits_section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
            <div aria-hidden="true" className={styles.sectionDecorRing} />
            <div aria-hidden="true" className={styles.sectionDecorDot} />
            <div className={styles.section_head}>
              <p className={styles.section_label}>Why Offshore?</p>
              <h2 className={styles.section_title}>What are the benefits of offshore?</h2>
              <p className={styles.benefits_lead}>Problems that cannot be solved with internal resources can be resolved by moving offshore.</p>
            </div>
            <div className={styles.benefits_grid}>
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  className={styles.benefit_card}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className={styles.benefit_icon}>{b.icon}</div>
                  <p className={styles.benefit_title}>{b.title}</p>
                  <p className={styles.benefit_desc}>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* DEVELOPMENT PROCESS */}
          <motion.section
            className={styles.process}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.05 }}
          >
            <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
            <div aria-hidden="true" className={styles.sectionDecorRing} />
            <div aria-hidden="true" className={styles.sectionDecorDot} />
            <div className={styles.process__layout}>
              <motion.div
                className={styles.process__img}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.05 }}
              >
                <img
                  src="/images/home/hero-real-team.png"
                  alt="Development team at work"
                  className={styles.processImg}
                />
              </motion.div>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>Development Process</p>
                  <h2 className={styles.section_title} style={{ textAlign: "left" }}>How <span>We Work</span></h2>
                </div>
                {STEPS.map((s, i) => (
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

          {/* LAB DEVELOPMENT */}
          <motion.section
            id="section-lab"
            className={styles.detail_section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
            <div aria-hidden="true" className={styles.sectionDecorRing} />
            <div aria-hidden="true" className={styles.sectionDecorDot} />
            <div className={styles.detail_section__inner}>
              <div className={styles.detail_section__text}>
                <p className={styles.eyebrow}>Lab Development</p>
                <h2 className={styles.labH2}>Dedicated Team,<br /><span>Fixed Monthly Cost</span></h2>
                {`Our Lab-type offshore development service provides you with a dedicated development team at a fixed monthly cost. Rather than per-project outsourcing, a dedicated engineer team works continuously as your own resource.

The team deeply understands your business and tech stack, minimizing communication overhead while delivering fast, high-quality development.

From startups to mid-sized enterprises, this model is ideal for any company that needs continuous development and improvement.`.split("\n\n").map((para, j) => (
                  <p key={j} className={styles.detail_section__para}>{para}</p>
                ))}
              </div>
              <div className={styles.detail_section__img}>
                <Image
                  src={TeamMbersImg}
                  alt="Lab Development"
                  width={520}
                  height={420}
                  style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.section>

          {/* TEAM FORMATION PATTERNS */}
          <motion.section
            className={styles.patternsSection}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
            <div aria-hidden="true" className={styles.sectionDecorRing} />
            <div aria-hidden="true" className={styles.sectionDecorDot} />
            <h2 className={styles.patternsTitle}>Team Formation Patterns</h2>
            <div className={styles.patternsGrid}>
              {PATTERNS.map((p, pi) => (
                <motion.div
                  key={pi}
                  className={styles.patternCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: pi * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.patternImgFrame}>
                    <Image src={p.img} alt={p.title} className={styles.patternImg} />
                  </div>
                  <h3 className={styles.patternCardTitle}>{p.title}</h3>
                  <p className={styles.patternCardDesc}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div aria-hidden="true" className={styles.ctaDecorRing} />
            <div aria-hidden="true" className={styles.ctaDecorDot} />
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
