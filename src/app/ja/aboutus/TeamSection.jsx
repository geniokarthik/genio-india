"use client";

import Image from "next/image";
import "../../globals.css";
import Reveal from "src/app/common/components/Reveal";
import SectionDecor from "src/app/common/components/SectionDecor";
import { cardEntrance } from "src/app/common/motion/variants";
import styles from "src/app/common/styles/Team.module.css";
import karthik from "src/assets/images/our_team/karthik.png";
import elavarasan from "src/assets/images/our_team/elavarasan.png";
import naveen from "src/assets/images/our_team/naveen.png";
import sivaraj from "src/assets/images/our_team/sivaraj.png";
import takuyayoneda from "src/assets/images/our_team/takuyayoneda.png";
import deivaraj from "src/assets/images/our_team/deivaraj.png";
import dhanasekaran from "src/assets/images/our_team/dhanasekaran.png";
import ajith from "src/assets/images/our_team/ajith.png";
import kavinesh from "src/assets/images/our_team/kavinesh.png";

const teamMembers = [
  {
    name: "米田 卓也",
    role: "会社の社長",
    image: takuyayoneda,
    description: "",
    linkedin: "",
  },
  {
    name: "カルティク",
    role: "マネージャー",
    image: karthik,
    description: "チームの強さは各メンバーにあり、各メンバーの強さはチームにあります。",
    linkedin: "https://www.linkedin.com/in/karthik-seerangan-7b6058356",
  },
  {
    name: "デイバラジ",
    role: "チームリーダー",
    image: deivaraj,
    description: "スマートにコーディング、迅速に構築、常に革新。フロントエンドでは効率的に、バックエンドでは強力に、フルスタックの専門知識を活かして。",
    linkedin: "https://www.linkedin.com/in/deivaraj-p-a67023146",
  },
  {
    name: "ダナセカラン",
    role: "シニア開発者",
    image: dhanasekaran,
    description: "堅牢なWebアプリケーションの開発、パフォーマンスの最適化、チームと協力してスケーラブルで安全なソリューションを提供することに長けたソフトウェア開発者です。",
    linkedin: "https://www.linkedin.com/in/dhanes-sekar-2a6981345/",
  },
  {
    name: "シバラジ",
    role: "ジュニア開発者",
    image: sivaraj,
    description: "コードを書き、デバッグし、学び、成長し、成功する。",
    linkedin: "https://www.linkedin.com/in/sivaraj-c-a956a8283",
  },
  {
    name: "アジット",
    role: "バイリンガルフルスタック開発者",
    image: ajith,
    description: "コードと無限のコーヒーを通じてアイデアを形にします。",
    linkedin: "https://www.linkedin.com/in/ajith-r-21a377266/",
  },
  {
    name: "ナヴィーン",
    role: "バイリンガルフルスタック開発者",
    image: naveen,
    description: "シームレスで効率的、革新的なデジタル体験を正確に創造します。",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-8816a11b9",
  },
  {
    name: "カビネーシュ",
    role: "ジュニア開発者",
    image: kavinesh,
    description: "一つのバグがシステムを壊すことがありますが、一つの修正で世界を変えることもできます。",
    linkedin: "https://www.linkedin.com/in/kavinesh-annadurai-a6a439267/",
  },
  {
    name: "エラバラサン",
    role: "アプリ開発者",
    image: elavarasan,
    description: "優れたアプリはコードだけでなく、情熱とイノベーション、そして未来へのビジョンで作られます。",
    linkedin: "https://www.linkedin.com/in/elavarasan-m-0260a527a/",
  },
];

export default function TeamSection() {
  return (
    <Reveal as="section" id="team" y={50} duration={0.9} className={styles.teamSection}>
      <SectionDecor variant="section" />
      <div className={styles.container}>
        <div className={styles.secHead}>
          <p className={styles.secEyebrow}>私たちのチーム</p>
          <h2 className={styles.secH2}>Genio Indiaを支える<span>メンバー</span></h2>
          <p className={styles.secLead}>チームは私たちの成功の中心であり、ビジョンの原動力です。カードにホバーして詳細をご覧ください。</p>
        </div>
        <div className={`${styles.teamGrid} ${styles.teamContent}`}>
          {teamMembers.map((member, index) => (
            <Reveal as="div" key={index} {...cardEntrance(index)} duration={0.5} delay={index * 0.06} amount={0.15} className={styles.teamCard}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  {/* 表面 */}
                  <div className={styles.flipCardFront}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={400}
                      quality={100}
                      className={styles.memberImage}
                      priority
                    />
                  </div>

                  {/* 裏面 */}
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberDescription}>{member.description}</p>
                    <div className={styles.socialMedia}>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkedinBtn}
                        >
                          LinkedIn →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
