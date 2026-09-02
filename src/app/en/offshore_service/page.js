"use client";
import Image from "next/image";
import "../../globals.css";
import TeamMbersImg from "src/assets/images/service/teammembers.png";
import Pattern1Img from "src/assets/images/service/en/pattern1.png";
import Pattern2Img from "src/assets/images/service/en/pattern2.png";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
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
          <SectionDecor variant="hero" tone="light" />
          <div className={styles.heroInner}>
            <Reveal as="div" x={-50} duration={0.8} immediate className={styles.hero__text}>
              <p className={styles.hero__label}>Offshore Services</p>
              <h1 className={styles.hero__title}>
                Offshoring means giving some work to a company in another country where labor costs are lower to save money.
              </h1>
            </Reveal>

            <Reveal as="div" x={50} duration={0.8} delay={0.2} immediate className={styles.hero__collage}>
              <img
                src="/images/home/hero-real-team.png"
                alt="Genio India development team"
                className={styles.heroImg}
              />
            </Reveal>
          </div>
        </section>

        {/* ── PAGE CONTENT (constrained) ── */}
        <div className={styles.home}>

          {/* BENEFITS */}
          <Reveal as="section" y={40} className={styles.benefits_section}>
            <SectionDecor variant="section" />
            <div className={styles.section_head}>
              <p className={styles.section_label}>Why Offshore?</p>
              <h2 className={styles.section_title}>What are the benefits of offshore?</h2>
              <p className={styles.benefits_lead}>Problems that cannot be solved with internal resources can be resolved by moving offshore.</p>
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

          {/* DEVELOPMENT PROCESS */}
          <Reveal as="section" y={40} amount={0.05} className={styles.process}>
            <SectionDecor variant="section" />
            <div className={styles.process__layout}>
              <Reveal as="div" x={-40} amount={0.05} className={styles.process__img}>
                <img
                  src="/images/home/hero_real_team2.png"
                  alt="Development team at work"
                  className={styles.processImg}
                />
              </Reveal>
              <div className={styles.process__steps}>
                <div className={styles.section_head} style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                  <p className={styles.section_label}>Development Process</p>
                  <h2 className={styles.section_title} style={{ textAlign: "left" }}>How <span>We Work</span></h2>
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

          {/* LAB DEVELOPMENT */}
          <Reveal as="section" id="section-lab" y={40} className={styles.detail_section}>
            <SectionDecor variant="section" />
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
          </Reveal>

          {/* TEAM FORMATION PATTERNS */}
          <Reveal as="section" y={40} className={styles.patternsSection}>
            <SectionDecor variant="section" />
            <h2 className={styles.patternsTitle}>Team Formation Patterns</h2>
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
            <h2 className={styles.cta__title}>Contact Us</h2>
            <p className={styles.cta__body}>For inquiries and estimates, please reach out via the link below.</p>
            <Link href="/en/contactus" className={styles.cta__btn}>Get in Touch →</Link>
          </Reveal>

        </div>
        <ScrollTop />
        <Footer />
      </main>
    </>
  );
}
