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

const LEVEL_MEANING = {
    N1: "ネイティブ相当",
    N2: "ビジネスレベル",
    N3: "中級",
    N4: "日常会話",
    N5: "基礎",
};

const levelRank = (level) => jlptLevels.indexOf(level);

const sortedTeam = [...teamMembers].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));
const sortedOthers = [...others].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));

const levelCounts = jlptLevels.reduce((acc, level) => {
    acc[level] = teamMembers.filter((m) => m.jlpt === level).length;
    return acc;
}, {});

function MemberCard({ member, dashed, index = 0 }) {
    return (
        <motion.div
            variants={{ hidden: { opacity: 0, ...cardEntrance(index) }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.45 } } }}
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
        <Reveal as="section" id="jlpt" y={50} duration={0.8} amount={0.05} className={styles.jlptSection}>
            <SectionDecor variant="section" />
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

                {/* ── 保有レベルの概要 ── */}
                <motion.div
                    className={styles.jlptStatCard}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={styles.jlptStatHead}>
                        <p className={styles.jlptStatTitle}>チームのJLPT保有状況</p>
                        <p className={styles.jlptStatTotal}>認定エンジニア {totalCertified}名</p>
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

                {/* ── 社内メンバー ── */}
                <motion.div
                    className={styles.jlptGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger(0.07)}
                >
                    {sortedTeam.map((member, i) => (
                        <MemberCard key={member.name} member={member} index={i} />
                    ))}
                </motion.div>

                {/* ── 社外 – 日本語教育受講生 ── */}
                <div className={styles.jlptExtHead}>
                    <h3 className={styles.jlptExtTitle}>日本語教育受講生</h3>
                    <span className={styles.jlptExtBadge}>社外</span>
                </div>
                <div className={styles.jlptExtNote}>
                    日本語の基礎的な理解を習得し、簡単な日常会話に対応できます。
                    {" "}<strong>注意：</strong>このセクションは日本語教育の実績紹介です。
                    <span className={styles.jlptExtWarn}>これらの方々は当社の開発業務には従事しておりません。</span>
                </div>
                <motion.div
                    className={styles.jlptGrid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger(0.07)}
                >
                    {sortedOthers.map((member, i) => (
                        <MemberCard key={member.name} member={member} dashed index={i} />
                    ))}
                </motion.div>
            </div>
        </Reveal>
    );
}
