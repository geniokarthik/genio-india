"use client";

import Image from "next/image";
import "../../globals.css";
import { motion } from "framer-motion";
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
import linkedin from "src/assets/images/our_team/linkedin.png";


const teamMembers = [  {
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
          <span className={styles.heroRedText}>私たちのチーム</span>
        </h2>        <h2 className={styles.heroSubtitle}>
          私たちのチームは、当社の成功を支える原動力であり、ビジョン達成に向けた中心的役割を担っております。
        </h2>
        <div className={`${styles.teamGrid} ${styles.teamContent}`}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  {/* Front of card */}
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

                  {/* Back of card */}
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberDescription}>
                    {member.description}
                    </p>
                    <div className={styles.socialMedia}>
                      {/* LinkedIn Link */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <Image
                          src={linkedin}
                          alt="LinkedIn"
                          width={40}
                          height={40}
                          className={styles.socialIcon}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}