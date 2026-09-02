"use client";

import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/common/styles/Jlpt.module.css";
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

const getSubtitleText = (level) => {
    const subtitles = {
        "N5": "These members have a basic understanding of Japanese and are able to understand daily conversations and simple work instructions.Note: This section introduces our internal company members.",
        "N4": "These members have a basic understanding of Japanese and are able to understand daily conversations as well as work-related instructions.",
        "N3": "These members have an intermediate level of Japanese proficiency and can understand everyday conversations, commonly used expressions, and basic work-related communication in Japanese.",
        "N2": "These members are capable of professional communication in Japanese,including requirement confirmation, specification understanding,and email correspondence in Japanese.",
        "N1": "These members possess near-native Japanese proficiency and are capable of handling advanced professional communication, including complex negotiations, technical discussions, documentation, and business-level presentations in Japanese.",
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
            className={styles.jlptSection}
            >

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

                <div className={styles.jlptContainer}>
                    {/* INTERNAL MEMBERS (JLPT N1–N5) */}
                    {jlptLevels.map((level) => {
                        const members = groupedMembers[level];

                        if (!members || members.length === 0) return null;

                        return (
                            <div key={level} className={styles.jlptGroup}>
                                <div className={styles.jlptGroupHead}>
                                  <div className={`${styles.jlptBadge} ${styles[`jlptLevel${level}`]}`}>{level}</div>
                                  <h3 className={styles.jlptGroupTitle}>
                                      JLPT {level} Certified {members.length === 1 ? "Member" : "Members"}
                                  </h3>
                                </div>
                                <p className={styles.jlptGroupSub}>
                                    {getSubtitleText(level)}
                                </p>

                                <div className={styles.jlptCards}>
                                    {members.map((member, index) => (
                                        <div key={index} className={styles.jlptCard}>
                                            <div className={styles.jlptCardPhoto}>
                                                <Image src={member.image} alt={member.name} width={72} height={72} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                                            </div>
                                            <div>
                                                <p className={styles.jlptCardName}>{member.name}</p>
                                                <p className={styles.jlptCardRole}>{member.role}</p>
                                                <span className={`${styles.jlptPill} ${styles[`jlptPill${level}`]}`}>JLPT {level}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* OTHERS – EXTERNAL JAPANESE LANGUAGE PROGRAM PARTICIPANTS (Grouped by JLPT Level) */}
                    <div className={styles.jlptGroupHead} style={{ marginTop: '2rem' }}>
                      <h3 className={styles.jlptGroupTitle}>JLPT Certified Members (Japanese Language Program Participants)</h3>
                      <span className={styles.jlptExtLabel}>External</span>
                    </div>

                    <div className={styles.jlptExtNote}>
                      They have acquired a basic understanding of Japanese and are capable of simple daily conversations.<br />
                      <strong>Note:</strong> This section is provided as an introduction to our Japanese language education achievements.
                      <span style={{ color: '#e22110', fontWeight: 600 }}> These individuals are not engaged in our software development projects.</span>
                    </div>

                    {jlptLevels.map((level) => {
                        const othersAtLevel = groupedOthers[level];

                        if (!othersAtLevel || othersAtLevel.length === 0) return null;

                        return (
                            <div key={`others-${level}`} className={styles.jlptGroup}>
                                <div className={styles.jlptGroupHead}>
                                  <div className={`${styles.jlptBadge} ${styles[`jlptLevel${level}`]}`}>{level}</div>
                                  <h3 className={styles.jlptGroupTitle}>
                                    JLPT {level} Certified {othersAtLevel.length === 1 ? "Member" : "Members"}
                                  </h3>
                                </div>
                                <div className={styles.jlptCards} style={{ paddingLeft: 0 }}>
                                  {othersAtLevel.map((member, index) => (
                                    <div key={index} className={styles.jlptCard}>
                                      <div className={styles.jlptCardPhoto}>
                                        <Image src={member.image} alt={member.name} width={72} height={72} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                                      </div>
                                      <div>
                                        <p className={styles.jlptCardName}>{member.name}</p>
                                        <p className={styles.jlptCardRole}>{member.role}</p>
                                        <span className={`${styles.jlptPill} ${styles[`jlptPill${member.jlpt}`]}`}>JLPT {member.jlpt}</span>
                                        {member.linkedin && (
                                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', fontSize: '0.78rem', fontWeight: 700, color: '#0077b5' }}>LinkedIn →</a>
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
