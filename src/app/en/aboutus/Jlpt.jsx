"use client";

import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import { stagger, cardEntrance } from "src/app/common/motion/variants";
import styles from "src/app/common/styles/Jlpt.module.css";
import karthik from "src/assets/images/our_team/karthik.png";
import naveen from "src/assets/images/our_team/naveen.png";
import ajith from "src/assets/images/our_team/ajith.png";
import kavinesh from "src/assets/images/our_team/kavinesh.png";
import sivaraj from "src/assets/images/our_team/sivaraj.png";
import premkumar from "src/assets/images/jlpt/premkumar.jpg";
import joshwa from "src/assets/images/jlpt/joshwa.jpg";
import tamiliniyan from "src/assets/images/jlpt/placeholder-avatar.svg";
import linkedin from "src/assets/images/our_team/linkedin.png";

const teamMembers = [
    {
        jlpt: "N1",
        name: "Karthik",
        role: "Project Manager / Bridge SE",
        image: karthik,
        facePosition: "60% 30%",
    },
    {
        jlpt: "N4",
        name: "Naveen",
        role: "Bilingual Full Stack Developer",
        image: naveen,
        facePosition: "68% 38%",
    },
    {
        jlpt: "N4",
        name: "Ajith",
        role: "Bilingual Full Stack Developer",
        image: ajith,
        facePosition: "55% 26%",
    },
    {
        jlpt: "N4",
        name: "Kavinesh",
        role: "Junior Software Developer",
        image: kavinesh,
        facePosition: "50% 32%",
    },
    {
        jlpt: "N5",
        name: "Sivaraj",
        role: "Junior Software Developer",
        image: sivaraj,
        facePosition: "47% 30%",
    },
];

const others = [
    {
        jlpt: "N4",
        name: "Premkumar",
        role: "Mechanical Designer",
        image: premkumar,
        facePosition: "50% 30%",
        linkedin: "https://www.linkedin.com/in/premkumar-s-174896249",
    },
    {
        jlpt: "N5",
        name: "Joshwa",
        role: "Japanese Language Program Participant",
        image: joshwa,
        facePosition: "50% 22%",
        linkedin: "https://www.linkedin.com/in/joshwa-s-b4028a386",
    },
    {
        // TODO: swap in a real photo once available — placeholder for now.
        jlpt: "N5",
        name: "Tamiliniyan",
        role: "Japanese Language Program Participant",
        image: tamiliniyan,
        facePosition: "center 30%",
        linkedin: "",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const LEVEL_DESC = {
    N1: "These members are capable of professional communication in Japanese, including requirement confirmation, specification understanding, and email correspondence in Japanese.",
    N2: "These members can handle business-level Japanese communication, including meetings, reports, and coordination with Japanese stakeholders.",
    N3: "These members can follow and take part in general workplace conversations and documentation in Japanese.",
    N4: "These members have a basic understanding of Japanese and are able to understand daily conversations as well as work-related instructions.",
    N5: "These members have a basic understanding of Japanese and are able to understand daily conversations and simple work instructions.",
};

const levelRank = (level) => jlptLevels.indexOf(level);

const sortedTeam = [...teamMembers].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));
const sortedOthers = [...others].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));

// Group a member list into { level, members }[] roadmap milestones,
// in N1 → N5 order, skipping levels nobody currently holds.
function groupByLevel(list) {
    return jlptLevels
        .map((level) => ({ level, members: list.filter((m) => m.jlpt === level) }))
        .filter((g) => g.members.length > 0);
}

const teamMilestones = groupByLevel(sortedTeam);
const otherMilestones = groupByLevel(sortedOthers);

function MemberCard({ member, dashed, index = 0 }) {
    return (
        // The gentle up/down float lives on this plain wrapper, not the
        // motion.div below — framer-motion drives that one's own
        // enter/hover transform, and a CSS animation on the same element
        // would fight it. A per-card delay keeps the cards from bobbing
        // in lockstep.
        <div className={styles.jlptMemberFloat} style={{ animationDelay: `${index * 0.35}s` }}>
            <motion.div
                variants={{ hidden: { opacity: 0, ...cardEntrance(index) }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.45 } } }}
                className={`${styles.jlptMemberCard} ${dashed ? styles.jlptMemberCardExt : ""}`}
            >
                {/* Every JLPT card flips, front = photo only, back =
                    name/role/LinkedIn — same treatment as the Our Team
                    cards elsewhere on this page. */}
                <div className={styles.jlptFlip}>
                    <div className={styles.jlptFlipInner}>
                        <div className={styles.jlptFlipFront}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="(max-width: 700px) 40vw, 170px"
                                style={{ objectFit: "cover", objectPosition: member.facePosition || "center 25%" }}
                            />
                        </div>
                        <div className={styles.jlptFlipBack}>
                            <p className={styles.jlptMemberName}>{member.name}</p>
                            <p className={styles.jlptMemberRole}>{member.role}</p>
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.jlptFlipLinkedin}
                                >
                                    <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Left / right waypoints the path alternates through, in percent — keep
// these in sync with .jlptNodeLeft / .jlptNodeRight in Jlpt.module.css,
// since the connecting curves below use these same numbers as their SVG
// start/end points. Straight alternation (not a 3-position cycle) so
// every other level lines up directly under the one two above it.
const NODE_X = [18, 82];
const zoneOf = (x) => (x < 40 ? "Left" : x > 60 ? "Right" : "Center");

// One JLPT-level "milestone" on the roadmap: a colored node sitting at
// its own left/center/right point on a winding path, with a dashed curve
// leading to the next node and the level's description + member photos
// hanging below it, anchored to that same side.
function LevelRoadmap({ milestones, dashed }) {
    return (
        <div className={`${styles.jlptRoadmap} ${dashed ? styles.jlptRoadmapExt : ""}`}>
            {milestones.map(({ level, members }, gi) => {
                const x = NODE_X[gi % NODE_X.length];
                const hasNext = gi < milestones.length - 1;
                const nextX = hasNext ? NODE_X[(gi + 1) % NODE_X.length] : null;
                return (
                    <div key={level} className={styles.jlptMilestone}>
                        <div className={styles.jlptMilestoneNodeSlot}>
                            <span
                                className={`${styles.jlptMilestoneNode} ${styles[`jlptNode${zoneOf(x)}`]} ${styles[`jlptBadge${level}`]}`}
                            >
                                {level}
                            </span>
                        </div>
                        <motion.div
                            className={`${styles.jlptMilestoneBody} ${styles[`jlptMilestoneBody${zoneOf(x)}`]}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className={styles.jlptMilestoneText}>
                                <h3 className={styles.jlptMilestoneTitle}>
                                    JLPT {level} Certified {members.length > 1 ? "Members" : "Member"}
                                </h3>
                                <p className={styles.jlptMilestoneDesc}>{LEVEL_DESC[level]}</p>
                            </div>
                            <motion.div
                                className={styles.jlptMemberRow}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={stagger(0.07)}
                            >
                                {members.map((member, i) => (
                                    <MemberCard key={member.name} member={member} dashed={dashed} index={i} />
                                ))}
                            </motion.div>
                        </motion.div>
                        {hasNext && (
                            <div className={styles.jlptMilestoneRoad}>
                                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d={`M${x},0 C${x},50 ${nextX},50 ${nextX},100`} />
                                </svg>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default function JapaneseClear() {
    return (
        <Reveal as="section" id="team" y={50} duration={0.8} amount={0.05} className={styles.jlptSection}>
            <SectionDecor variant="section" />
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

                {/* ── INTERNAL TEAM, AS A LEVEL ROADMAP ── */}
                <LevelRoadmap milestones={teamMilestones} />

                {/* ── EXTERNAL LANGUAGE PROGRAM PARTICIPANTS ── */}
                <div className={styles.jlptExtHead}>
                    <h3 className={styles.jlptExtTitle}>Language Program Participants</h3>
                    <span className={styles.jlptExtBadge}>External</span>
                </div>
                <div className={styles.jlptExtNote}>
                    They have acquired a basic understanding of Japanese and are capable of simple daily conversations.
                    <br />
                    <strong>Note:</strong> this section is provided as an introduction to our Japanese language
                    education achievements —
                    <span className={styles.jlptExtWarn}> these individuals are not engaged in our software development projects.</span>
                </div>
                <LevelRoadmap milestones={otherMilestones} dashed />
            </div>
        </Reveal>
    );
}
