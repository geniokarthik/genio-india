"use client";

import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/styles/Team.module.css";
import employee from "src/assets/images/our_team/employee.png";
import elavarasan from "src/assets/images/our_team/elavarasan.png";
import naveen from "src/assets/images/our_team/naveen.png";
import sivaraj from "src/assets/images/our_team/sivaraj.png";
import takuyayoneda from "src/assets/images/our_team/takuyayoneda.png";
import deivaraj from "src/assets/images/our_team/deivaraj.png";
import dhanasekaran from "src/assets/images/our_team/dhanasekaran.png";
import ajith from "src/assets/images/our_team/ajith.png";
import kavinesh from "src/assets/images/our_team/kavinesh.png";
import linkedin from "src/assets/images/our_team/linkedin.png";


const teamMembers = [
  // {
  //   name: "Takuya Yoneda",
  //   role: "Founder",
  //   image: takuyayoneda,
  //   description: "",
  //   linkedin: "",
  // },
  // {
  //   name: "Karthik",
  //   role: "Director & Manager",
  //   image: employee,
  //   description: "",
  //   linkedin: "",
  // },
  {
    name: "Deivaraj",
    role: "Team Lead",
    image: deivaraj,
    description: "Code smart, build fast, innovate always—efficient in front, powerful in back, full-stack expertise.",
    linkedin: "https://www.linkedin.com/in/deivaraj-p-a67023146",
  },
  {
    name: "Dhanasekaran",
    role: "Senior Developer",
    image: dhanasekaran,
    description: "Database specialist with extensive MySQL experience",
    linkedin: "",
  },
  {
    name: "Sivaraj",
    role: "Software Developer",
    image: sivaraj,
    description: "Database specialist with extensive MySQL experience",
    linkedin: "https://www.linkedin.com/in/sivaraj-c-a956a8283",
  },
  {
    name: "Ajith",
    role: "Bilingual Full Stack Developer",
    image: ajith,
    description: "Creative designer focused on user-centered experiences",
    linkedin: "",
  },
  {
    name: "Naveen",
    role: "Bilingual Full Stack Developer",
    image: naveen,
    description: "Creating seamless, efficient, and innovative digital experiences with precision.",
    linkedin: "www.linkedin.com/in/naveen-kumar-8816a11b9",
  },
  {
    name: "Kavinesh",
    role: "Software Developer",
    image: kavinesh,
    description: "",
    linkedin: "",
  },
  {
    name: "Elavarasan",
    role: "App Developer",
    image: elavarasan,
    description: "Great apps aren’t just built with code; they’re crafted with passion, innovation, and a vision for the future.",
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
          <span className={styles.heroRedText}>Our Team</span>
        </h2>
        <h2 className={styles.heroSubtitle}>
          Our team is the heart of our success and the core of our vision
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
                      className={styles.memberImage}
                    />
                  </div>

                  {/* Back of card */}
                  <div className={styles.flipCardBack}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    <p className={styles.memberDescription}>
                     " {member.description} "
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