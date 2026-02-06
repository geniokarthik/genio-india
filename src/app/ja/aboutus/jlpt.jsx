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
        name: "カルティク",
        role: "プロジェクトマネージャー / ブリッジSE",
        image: karthik,
    },
    {
        jlpt: "N4",
        name: "ナヴィーン",
        role: "バイリンガルフルスタック開発者",
        image: naveen,
    },
    {
        jlpt: "N4",
        name: "アジット",
        role: "バイリンガルフルスタック開発者",
        image: ajith,
    },
    {
        jlpt: "N5",
        name: "カビネーシュ",
        role: "ジュニア開発者",
        image: kavinesh,
    },
];

const others = [
    {
        jlpt: "N5",
        name: "プレム・クマール",
        role: "CADオペレーター（建築CADオペレーター）",
        image: premkumar,
        linkedin: "https://www.linkedin.com/in/premkumar-m-0260a527a/",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const getSubtitleText = (level) => {
    const subtitles = {
        "N5": "このレベルのメンバーは、日本語の基本的な理解があり、日常会話と簡単な仕事の指示を理解することができます。\n注：このセクションは社内メンバーを紹介しています。",
        "N4": "このレベルのメンバーは、日本語の基本的な理解があり、日常会話および業務関連の指示を理解することができます。",
        "N3": "このレベルのメンバーは、中級レベルの日本語能力を備えており、日常会話、一般的な表現、基本的な業務関連コミュニケーションを日本語で理解することができます。",
        "N2": "このレベルのメンバーは、日本語での専門的なコミュニケーションが可能であり、要件確認、仕様の理解、日本語でのメール対応に対応できます。",
        "N1": "このレベルのメンバーは、ネイティブに近い日本語能力を持ち、複雑な交渉、技術的な議論、ドキュメント作成、ビジネスレベルのプレゼンテーションなどの高度な専門的コミュニケーションに対応できます。",
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
                    日本語教育への取り組み
                </h2>

                <p className={styles.heroSubtitle}>
                    当社では、システム開発力だけでなく、日本語教育にも積極的に取り組んでおります。
                    日本企業のお客様と円滑なコミュニケーションを実現するため、
                    社内メンバーに加え、社外の学習者に対しても日本語教育を継続的に実施しています。

                    日本語能力試験（JLPT）に基づき、実際に合格したレベルごとに人材をご紹介しております。
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
                                        JLPT {level}認定{" "}
                                        {members.length === 1 ? "メンバー" : "メンバー"}
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
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* OTHERS – EXTERNAL JAPANESE LANGUAGE PROGRAM PARTICIPANTS (Grouped by JLPT Level) */}
                    <h2 className={styles.heroTitle}>
                        日本語能力試験  合格者（日本語教育受講生）
                    </h2>

                    <div style={{ marginBottom: "0.5rem" }}>
                        <p className={`${styles.levelSubtitle} ${styles.noteText}`}>
                            当社が日本語学習をサポートしている社外の日本語教育受講生のうち、日本語能力試験 N5 に合格した方々です。
                        </p>
                        <p className={`${styles.levelSubtitle} ${styles.noteText}`}>
                            <span className={styles.noteLabel}>注意：</span>
                            <span className={styles.noteContent}>
                                日本語の基礎的な理解があり、簡単な日常会話が可能です。
                                <span className={styles.noteWarning}>
                                ※ 本項目は日本語教育の実績紹介であり、当社の開発業務には従事しておりません。
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
                                        JLPT {level}認定{" "}
                                        {othersAtLevel.length === 1 ? "メンバー" : "メンバー"}（日本語教育受講生）
                                    </h3>
                                </div>
                                <p className={styles.levelSubtitle}>
                                    このグループは、私たちの日本語学習サポートプログラムを完了し、JLPT {level}試験に合格した外部参加者です。
                                    <br />
                                    日本語の基本的な理解を習得し、日常会話に対応できます。
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
