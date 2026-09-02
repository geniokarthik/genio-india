"use client";

import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/common/styles/Jlpt.module.css";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import karthik from "src/assets/images/our_team/karthik.png";
import naveen from "src/assets/images/our_team/naveen.png";
import ajith from "src/assets/images/our_team/ajith.png";
import kavinesh from "src/assets/images/our_team/kavinesh.png";
import sivaraj from "src/assets/images/our_team/sivaraj.png";
import premkumar from "src/assets/images/jlpt/premkumar.jpg";
import joswa from "src/assets/images/jlpt/joswa.jpg";

const teamMembers = [
    {
        jlpt: "N1",
        name: "Karthik",
        role: "Project Manager / Bridge SE",
        image: karthik,
    },
    {
        jlpt: "N4",
        name: "Naveen",
        role: "Bilingual Full Stack Developer",
        image: naveen,
    },
    {
        jlpt: "N4",
        name: "Ajith",
        role: "Bilingual Full Stack Developer",
        image: ajith,
    },
    {
        jlpt: "N4",
        name: "Kavinesh",
        role: "Junior Software Developer",
        image: kavinesh,
    },
    {
        jlpt: "N5",
        name: "Sivaraj",
        role: "Junior Software Developer",
        image: sivaraj,
    },
];

const others = [
    {
        jlpt: "N4",
        name: "Premkumar",
        role: "Mechanical Designer",
        image: premkumar,
        linkedin: "https://www.linkedin.com/in/premkumar-s-174896249",
    },
    {
        jlpt: "N5",
        name: "Joswa",
        role: "Japanese Language Program Participant",
        image: joswa,
        linkedin: "",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const LEVEL_MEANING = {
    N1: "Near-native",
    N2: "Business fluent",
    N3: "Intermediate",
    N4: "Conversational",
    N5: "Foundational",
};

const levelRank = (level) => jlptLevels.indexOf(level);

const sortedTeam = [...teamMembers].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));
const sortedOthers = [...others].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));

const levelCounts = jlptLevels.reduce((acc, level) => {
    acc[level] = teamMembers.filter((m) => m.jlpt === level).length;
    return acc;
}, {});

const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const cardIn = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function MemberCard({ member, dashed }) {
    return (
        <motion.div
            variants={cardIn}
            className={`${styles.jlptMemberCard} ${dashed ? styles.jlptMemberCardExt : ""}`}
        >
            <div className={`${styles.jlptMemberPhoto} ${styles[`jlptRing${member.jlpt}`]}`}>
                <Image
                    src={member.image}
                    alt={member.name}
                    width={84}
                    height={84}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
            </div>
            <p className={styles.jlptMemberName}>{member.name}</p>
            <p className={styles.jlptMemberRole}>{member.role}</p>
            <span className={`${styles.jlptPill} ${styles[`jlptPill${member.jlpt}`]}`}>
                JLPT {member.jlpt}
            </span>
            {dashed && member.linkedin && (
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.jlptMemberLinkedin}
                >
                    LinkedIn ↗
                </a>
            )}
        </motion.div>
    );
}

export default function JapaneseClear() {
    const totalCertified = teamMembers.length;

    return (
        <motion.section
            id="team"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            className={styles.jlptSection}
        >
            <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
            <div aria-hidden="true" className={styles.sectionDecorRing} />
            <div aria-hidden="true" className={styles.sectionDecorDot} />
            <div className={styles.container}>
                <div className={styles.secHead}>
                    <p className={styles.secEyebrow}>Japanese Language Education</p>
                    <h2 className={styles.secH2}>Our Commitment to <span>Japanese Language</span></h2>
                </div>
                <p className={styles.jlptIntro}>
                    In addition to our system development capabilities, we actively invest
                    in Japanese language education. To ensure smooth communication with
                    Japanese clients, we continuously provide Japanese language training
                    not only to our internal team members but also to external learners.
                    Based on the Japanese-Language Proficiency Test (JLPT), we introduce
                    our members according to their officially certified proficiency levels.
                </p>

                {/* ── PROFICIENCY OVERVIEW ── */}
                <motion.div
                    className={styles.jlptStatCard}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={styles.jlptStatHead}>
                        <p className={styles.jlptStatTitle}>Team JLPT Proficiency</p>
                        <p className={styles.jlptStatTotal}>{totalCertified} certified engineers</p>
                    </div>
                    <div className={styles.jlptBar}>
                        {jlptLevels.map((level) => {
                            const count = levelCounts[level];
                            if (!count) return null;
                            const pct = (count / totalCertified) * 100;
                            return (
                                <motion.div
                                    key={level}
                                    className={`${styles.jlptBarSeg} ${styles[`jlptLevel${level}`]}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${pct}%` }}
                                    transition={{ duration: 0.8, delay: 0.15 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    title={`JLPT ${level} · ${count}`}
                                />
                            );
                        })}
                    </div>
                    <div className={styles.jlptLegend}>
                        {jlptLevels.map((level) => {
                            const count = levelCounts[level];
                            if (!count) return null;
                            return (
                                <div key={level} className={styles.jlptLegendItem}>
                                    <span className={`${styles.jlptLegendDot} ${styles[`jlptLevel${level}`]}`} />
                                    <span className={styles.jlptLegendLabel}>
                                        JLPT {level} <em>{LEVEL_MEANING[level]}</em>
                                    </span>
                                    <span className={styles.jlptLegendCount}>{count}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ── CORE TEAM ── */}
                <motion.div
                    className={styles.jlptGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={grid}
                >
                    {sortedTeam.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </motion.div>

                {/* ── EXTERNAL LANGUAGE PROGRAM PARTICIPANTS ── */}
                <div className={styles.jlptExtHead}>
                    <h3 className={styles.jlptExtTitle}>Language Program Participants</h3>
                    <span className={styles.jlptExtBadge}>External</span>
                </div>
                <div className={styles.jlptExtNote}>
                    They have acquired a basic understanding of Japanese and are capable of simple daily conversations.
                    {" "}<strong>Note:</strong> this section introduces our Japanese language education achievements —
                    <span className={styles.jlptExtWarn}> these individuals are not engaged in our software development projects.</span>
                </div>
                <motion.div
                    className={styles.jlptGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={grid}
                >
                    {sortedOthers.map((member) => (
                        <MemberCard key={member.name} member={member} dashed />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
