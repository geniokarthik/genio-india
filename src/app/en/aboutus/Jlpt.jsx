"use client";

import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/common/styles/Jlpt.module.css";
import karthik from "src/assets/images/our_team/karthik.png";
import naveen from "src/assets/images/our_team/naveen.png";
import ajith from "src/assets/images/our_team/ajith.png";
import kavinesh from "src/assets/images/our_team/kavinesh.png";
import premkumar from "src/assets/images/jlpt/premkumar.jpg";
import linkedin from "src/assets/images/our_team/linkedin.png";

const teamMembers = [
    {
        jlpt: "N2",
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
        jlpt: "N5",
        name: "Kavinesh",
        role: "Junior Software Developer",
        image: kavinesh,
    },
];

const others = [
    {
        jlpt: "N5",
        name: "Premkumar",
        role: "CAD Operator (Architectural CAD Operator)",
        image: premkumar,
        linkedin: "https://www.linkedin.com/in/premkumar-m-0260a527a/",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const getSubtitleText = (level) => {
    const subtitles = {
        "N5": "These members have a basic understanding of Japanese and are able tounderstand daily conversations and simple work instructions.Note: This section introduces our internal company members.",
        "N4": "These members have a basic understanding of Japanese and are able tounderstand daily conversations as well as work-related instructions.",
        "N3": "These members have an intermediate level of Japanese proficiency and canunderstand everyday conversations, commonly used expressions, and basicwork-related communication in Japanese.",
        "N2": "These members are capable of professional communication in Japanese,including requirement confirmation, specification understanding,and email correspondence in Japanese.",
        "N1": "These members possess near-native Japanese proficiency and are capable ofhandling advanced professional communication, including complex negotiations,technical discussions, documentation, and business-level presentations in Japanese.",
    };
    return subtitles[level] || "";
};

const groupByJLPT = () => {
    const grouped = {};
    jlptLevels.forEach(level => {
        grouped[level] = [];
    });

    teamMembers.forEach(member => {
        if (grouped[member.jlpt]) {
            grouped[member.jlpt].push(member);
        }
    });

    return grouped;
};

const groupOthersByJLPT = () => {
    const grouped = {};
    jlptLevels.forEach(level => {
        grouped[level] = [];
    });

    others.forEach(member => {
        if (grouped[member.jlpt]) {
            grouped[member.jlpt].push(member);
        }
    });

    return grouped;
};

export default function JapaneseClear() {
    const groupedMembers = groupByJLPT();
    const groupedOthers = groupOthersByJLPT();

    return (
        <motion.section
            id="team"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className={styles.hero}
            >

            <div className={styles.container}>
                <h2 className={styles.heroTitle}>
                    Our Commitment to Japanese Language Education
                </h2>

                <p className={styles.heroSubtitle}>
                    In addition to our system development capabilities, we actively invest
                    in Japanese language education. To ensure smooth communication with
                    Japanese clients, we continuously provide Japanese language training
                    not only to our internal team members but also to external learners.
                    Based on the Japanese-Language Proficiency Test (JLPT), we introduce
                    our members according to their officially certified proficiency levels.
                </p>

                <div className={styles.jlptContainer}>
                    {/* INTERNAL MEMBERS (JLPT N1–N5) */}
                    {jlptLevels.map((level) => {
                        const members = groupedMembers[level];

                        if (!members || members.length === 0) return null;

                        return (
                            <div key={level} className={styles.jlptLevel}>
                                <div className={styles.levelHeader}>
                                    <h3 className={styles.levelTitle}>
                                        JLPT {level} Certified{" "}
                                        {members.length === 1 ? "Member" : "Members"}
                                    </h3>
                                </div>
                                <p className={styles.levelSubtitle}>
                                    {getSubtitleText(level)}
                                </p>

                                <div className={styles.membersList}>
                                    {members.map((member, index) => (
                                        <div key={index} className={styles.memberCard}>
                                            <div className={styles.memberImageWrapper}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    className={styles.jlptmemberImage}
                                                    width={140}
                                                    height={140}
                                                />
                                            </div>

                                            <div className={styles.memberDetails}>
                                                <h4 className={styles.memberName}>{member.name}</h4>

                                                {member.role && (
                                                    <p className={styles.memberRole}>{member.role}</p>
                                                )}

                                                <p className={styles.memberDescription}>
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* OTHERS – EXTERNAL JAPANESE LANGUAGE PROGRAM PARTICIPANTS (Grouped by JLPT Level) */}
                    <h2 className={styles.heroTitle}>
                        JLPT Certified Members (Japanese Language Program Participants)
                    </h2>
                    <div style={{ marginBottom: "0.5rem" }}>
                        <p className={`${styles.levelSubtitle} ${styles.noteText}`}>
                            They have acquired a basic understanding of Japanese and are capable of simple daily conversations.
                        </p>
                        <p className={`${styles.levelSubtitle} ${styles.noteText}`}>
                            <span className={styles.noteLabel}>Note:</span>
                            <span className={styles.noteContent}>
                                This section is provided as an introduction to our Japanese language education achievements.
                                <span className={styles.noteWarning}>
                                These individuals are not engaged in our software development projects.
                                </span>
                            </span>
                        </p>

                    </div>


                    {jlptLevels.map((level) => {
                        const othersAtLevel = groupedOthers[level];

                        if (!othersAtLevel || othersAtLevel.length === 0) return null;

                        return (
                            <div key={`others-${level}`} className={styles.jlptLevel}>
                                <div className={styles.levelHeader}>
                                    <h3 className={styles.levelTitle}>
                                        JLPT {level} Certified{" "}
                                        {othersAtLevel.length === 1 ? "Member" : "Members"}
                                    </h3>
                                </div>
                                <p className={styles.levelSubtitle}>
                                    {getSubtitleText(level)}
                                </p>

                                <div className={styles.membersList}>
                                    {othersAtLevel.map((member, index) => (
                                        <div key={index} className={styles.memberCardWithFlip}>
                                            <div className={styles.flipCardContainer}>
                                                <div className={styles.flipCardOthers}>
                                                    <div className={styles.flipCardInnerOthers}>
                                                        {/* Front - Image */}
                                                        <div className={styles.flipCardFrontOthers}>
                                                            <Image
                                                                src={member.image}
                                                                alt={member.name}
                                                                className={styles.jlptmemberImage}
                                                                width={180}
                                                                height={180}
                                                            />
                                                        </div>

                                                        {/* Back - LinkedIn Icon Only */}
                                                        <div className={styles.flipCardBackOthers}>
                                                            {member.linkedin && (
                                                                <a
                                                                    href={member.linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={styles.flipLinkedinLink}
                                                                >
                                                                    <Image
                                                                        src={linkedin}
                                                                        alt="LinkedIn"
                                                                        width={48}
                                                                        height={48}
                                                                    />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.memberDetailsFlip}>
                                                <h4 className={styles.memberName}>{member.name}</h4>
                                                {member.role && (
                                                    <p className={styles.memberRole}>{member.role}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            </motion.section>
    );
}
