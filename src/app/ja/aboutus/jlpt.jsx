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
        jlpt: "N4",
        name: "カビネーシュ",
        role: "ジュニア開発者",
        image: kavinesh,
    },
    {
        jlpt: "N5",
        name: "シバラジ",
        role: "ジュニア開発者",
        image: sivaraj,
    },
];

const others = [
    {
        jlpt: "N4",
        name: "プレム・クマール",
        role: "メカニカルデザイナー",
        image: premkumar,
        linkedin: "https://www.linkedin.com/in/premkumar-s-174896249",
    },
    {
        jlpt: "N5",
        name: "ジョスワ",
        role: "日本語教育受講生",
        image: joswa,
        linkedin: "",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const getSubtitleText = (level) => {
    const subtitles = {
        "N5": "このレベルのメンバーは、日本語の基本的な理解があり、日常会話と簡単な業務指示を理解することができます。\n注：このセクションは社内メンバーを紹介しています。",
        "N4": "このレベルのメンバーは、日本語の基本的な理解があり、日常会話および業務関連の指示を理解することができます。",
        "N3": "このレベルのメンバーは中級レベルの日本語能力を持ち、日常会話・一般的な表現・基本的な業務コミュニケーションに対応できます。",
        "N2": "このレベルのメンバーは日本語での専門的なコミュニケーションが可能で、要件確認・仕様理解・メール対応に対応できます。",
        "N1": "このレベルのメンバーはネイティブに近い日本語能力を持ち、複雑な交渉・技術的な議論・ドキュメント作成・ビジネスレベルのプレゼンテーションに対応できます。",
    };
    return subtitles[level] || "";
};

const groupByJLPT = () => {
    const grouped = {};
    jlptLevels.forEach(level => { grouped[level] = []; });
    teamMembers.forEach(member => {
        if (grouped[member.jlpt]) grouped[member.jlpt].push(member);
    });
    return grouped;
};

const groupOthersByJLPT = () => {
    const grouped = {};
    jlptLevels.forEach(level => { grouped[level] = []; });
    others.forEach(member => {
        if (grouped[member.jlpt]) grouped[member.jlpt].push(member);
    });
    return grouped;
};

export default function JapaneseClear() {
    const groupedMembers = groupByJLPT();
    const groupedOthers = groupOthersByJLPT();

    return (
        <motion.section
            id="jlpt"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className={styles.jlptSection}
        >
            <div className={styles.container}>
                <div className={styles.secHead}>
                    <p className={styles.secEyebrow}>日本語能力への取り組み</p>
                    <h2 className={styles.secH2}>日本語教育への<span>コミットメント</span></h2>
                </div>
                <p className={styles.jlptIntro}>
                    システム開発力に加え、日本語教育にも積極的に取り組んでおります。
                    日本企業のお客様と円滑なコミュニケーションを実現するため、
                    社内メンバーだけでなく、社外の学習者に対しても継続的に日本語教育を実施しています。
                    日本語能力試験（JLPT）に基づき、合格レベルごとにメンバーをご紹介しております。
                </p>

                <div className={styles.jlptContainer}>
                    {/* 社内メンバー (JLPT N1–N5) */}
                    {jlptLevels.map((level) => {
                        const members = groupedMembers[level];
                        if (!members || members.length === 0) return null;

                        return (
                            <div key={level} className={styles.jlptGroup}>
                                <div className={styles.jlptGroupHead}>
                                    <div className={`${styles.jlptBadge} ${styles[`jlptLevel${level}`]}`}>{level}</div>
                                    <h3 className={styles.jlptGroupTitle}>
                                        JLPT {level}認定 {members.length === 1 ? "メンバー" : "メンバー"}
                                    </h3>
                                </div>
                                <p className={styles.jlptGroupSub}>
                                    {getSubtitleText(level)}
                                </p>
                                <div className={styles.jlptCards}>
                                    {members.map((member, index) => (
                                        <div key={index} className={styles.jlptCard}>
                                            <div className={styles.jlptCardPhoto}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={72}
                                                    height={72}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                                                />
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

                    {/* 社外 – 日本語教育受講生 */}
                    <div className={styles.jlptGroupHead} style={{ marginTop: "2rem" }}>
                        <h3 className={styles.jlptGroupTitle}>JLPT合格者（日本語教育受講生）</h3>
                        <span className={styles.jlptExtLabel}>社外</span>
                    </div>

                    <div className={styles.jlptExtNote}>
                        日本語の基礎的な理解を習得し、簡単な日常会話に対応できます。<br />
                        <strong>注意：</strong>このセクションは日本語教育の実績紹介です。
                        <span style={{ color: "#e22110", fontWeight: 600 }}>これらの方々は当社の開発業務には従事しておりません。</span>
                    </div>

                    {jlptLevels.map((level) => {
                        const othersAtLevel = groupedOthers[level];
                        if (!othersAtLevel || othersAtLevel.length === 0) return null;

                        return (
                            <div key={`others-${level}`} className={styles.jlptGroup}>
                                <div className={styles.jlptGroupHead}>
                                    <div className={`${styles.jlptBadge} ${styles[`jlptLevel${level}`]}`}>{level}</div>
                                    <h3 className={styles.jlptGroupTitle}>
                                        JLPT {level}認定 {othersAtLevel.length === 1 ? "メンバー" : "メンバー"}
                                    </h3>
                                </div>
                                <div className={styles.jlptCards} style={{ paddingLeft: 0 }}>
                                    {othersAtLevel.map((member, index) => (
                                        <div key={index} className={styles.jlptCard}>
                                            <div className={styles.jlptCardPhoto}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={72}
                                                    height={72}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                                                />
                                            </div>
                                            <div>
                                                <p className={styles.jlptCardName}>{member.name}</p>
                                                <p className={styles.jlptCardRole}>{member.role}</p>
                                                <span className={`${styles.jlptPill} ${styles[`jlptPill${member.jlpt}`]}`}>JLPT {member.jlpt}</span>
                                                {member.linkedin && (
                                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                                        style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "8px", fontSize: "0.78rem", fontWeight: 700, color: "#0077b5" }}>
                                                        LinkedIn →
                                                    </a>
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
