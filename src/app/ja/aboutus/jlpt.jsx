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
import tamiliniyanPlaceholder from "src/assets/images/jlpt/placeholder-avatar.svg";
import linkedin from "src/assets/images/our_team/linkedin.png";

const teamMembers = [
    {
        jlpt: "N1",
        name: "カルティク",
        role: "プロジェクトマネージャー / ブリッジSE",
        image: karthik,
        facePosition: "60% 30%",
    },
    {
        jlpt: "N4",
        name: "ナヴィーン",
        role: "バイリンガルフルスタック開発者",
        image: naveen,
        facePosition: "68% 38%",
    },
    {
        jlpt: "N4",
        name: "アジット",
        role: "バイリンガルフルスタック開発者",
        image: ajith,
        facePosition: "55% 26%",
    },
    {
        jlpt: "N4",
        name: "カビネーシュ",
        role: "ジュニア開発者",
        image: kavinesh,
        facePosition: "50% 32%",
    },
    {
        jlpt: "N5",
        name: "シバラジ",
        role: "ジュニア開発者",
        image: sivaraj,
        facePosition: "47% 30%",
    },
];

const others = [
    {
        jlpt: "N4",
        name: "プレム・クマール",
        role: "メカニカルデザイナー",
        image: premkumar,
        facePosition: "50% 30%",
        linkedin: "https://www.linkedin.com/in/premkumar-s-174896249",
    },
    {
        jlpt: "N5",
        name: "ジョスワ",
        role: "日本語教育受講生",
        image: joswa,
        facePosition: "50% 22%",
        linkedin: "",
    },
    {
        // TODO: 写真が用意でき次第、正式なものに差し替える — 現在は仮画像。
        jlpt: "N5",
        name: "タミリニヤン",
        role: "日本語教育受講生",
        image: tamiliniyanPlaceholder,
        facePosition: "center 30%",
        linkedin: "",
    },
];

const jlptLevels = ["N1", "N2", "N3", "N4", "N5"];

const LEVEL_DESC = {
    N1: "要件確認や仕様理解、日本語でのメール対応など、プロフェッショナルなレベルで日本語コミュニケーションが可能なメンバーです。",
    N2: "会議や報告、日本企業の関係者との調整など、ビジネスレベルの日本語コミュニケーションに対応できるメンバーです。",
    N3: "職場での一般的な会話や文書対応にも参加できるレベルのメンバーです。",
    N4: "日本語の基礎的な理解があり、日常会話や業務上の指示を理解できるメンバーです。",
    N5: "日本語の基礎的な理解があり、日常会話や簡単な業務指示を理解できるメンバーです。",
};

const levelRank = (level) => jlptLevels.indexOf(level);

const sortedTeam = [...teamMembers].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));
const sortedOthers = [...others].sort((a, b) => levelRank(a.jlpt) - levelRank(b.jlpt));

// メンバー一覧を { level, members }[] のロードマップ用マイルストーンにまとめる
// （N1 → N5 の順。該当者がいないレベルはスキップ）
function groupByLevel(list) {
    return jlptLevels
        .map((level) => ({ level, members: list.filter((m) => m.jlpt === level) }))
        .filter((g) => g.members.length > 0);
}

const teamMilestones = groupByLevel(sortedTeam);
const otherMilestones = groupByLevel(sortedOthers);

function MemberCard({ member, dashed, index = 0 }) {
    return (
        // 上下フロートはこのプレーンなラッパーに乗せる（下の motion.div
        // ではなく）— framer-motion がそちら自身の enter/hover の
        // transform を制御しているため、同じ要素に CSS アニメーションを
        // 乗せると競合してしまう。カードごとに遅延をずらして、
        // 一斉に揺れないようにしている。
        <div className={styles.jlptMemberFloat} style={{ animationDelay: `${index * 0.35}s` }}>
            <motion.div
                variants={{ hidden: { opacity: 0, ...cardEntrance(index) }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.45 } } }}
                className={`${styles.jlptMemberCard} ${dashed ? styles.jlptMemberCardExt : ""}`}
            >
                {/* JLPT カードはすべてフリップさせる：表 = 写真のみ、
                    裏 = 名前・役職・LinkedIn — ページ内の「私たちのチーム」
                    カードと同じ考え方。 */}
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

// パスが通る左・右のウェイポイント（%）— Jlpt.module.css の
// .jlptNodeLeft / .jlptNodeRight と同じ値に揃えておくこと（下の連結
// カーブの SVG 始点・終点にも同じ数値を使っている）。3点循環ではなく
// 単純な左右交互配置にして、1つ飛ばしのレベルが真下に揃うようにする。
const NODE_X = [18, 82];
const zoneOf = (x) => (x < 40 ? "Left" : x > 60 ? "Right" : "Center");

// ロードマップ上の JLPT レベル1つ分：左・中央・右いずれかの点に
// 色付きノードを置き、次のノードへ向かう点線カーブを描き、その下に
// レベルの説明文とメンバー写真をノードと同じ側に寄せて配置する。
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
                                <h3 className={styles.jlptMilestoneTitle}>JLPT {level} 認定メンバー</h3>
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

                {/* ── 社内メンバー：レベル別ロードマップ ── */}
                <LevelRoadmap milestones={teamMilestones} />

                {/* ── 社外 – 日本語教育受講生 ── */}
                <div className={styles.jlptExtHead}>
                    <h3 className={styles.jlptExtTitle}>日本語教育受講生</h3>
                    <span className={styles.jlptExtBadge}>社外</span>
                </div>
                <div className={styles.jlptExtNote}>
                    日本語の基礎的な理解を習得し、簡単な日常会話に対応できます。
                    <br />
                    <strong>注意：</strong>このセクションは日本語教育の実績紹介として掲載しております。
                    <span className={styles.jlptExtWarn}>これらの方々は当社の開発業務には従事しておりません。</span>
                </div>
                <LevelRoadmap milestones={otherMilestones} dashed />
            </div>
        </Reveal>
    );
}
