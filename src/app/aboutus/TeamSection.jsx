"use client";

import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/styles/Team.module.css";
import employee from "src/assets/images/our_team/employee.png";
import linkedin from "src/assets/images/our_team/linkedin.png";

const teamMembers = [
  {
    name: "John Doe",
    role: "Web Developer",
    image: employee,
    description: "Experienced web developer specializing in React and Next.js",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "App Developer",
    image: employee,
    description: "Mobile app expert with focus on React Native development",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Database Engineer",
    image: employee,
    description: "Database specialist with extensive MySQL experience",
    linkedin: "https://linkedin.com/in/mikejohnson",
  },
  {
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    image: employee,
    description: "Creative designer focused on user-centered experiences",
    linkedin: "https://linkedin.com/in/sarahwilson",
  },
  {
    name: "Jane Smith",
    role: "App Developer",
    image: employee,
    description: "Mobile app expert with focus on React Native development",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Database Engineer",
    image: employee,
    description: "Database specialist with extensive MySQL experience",
    linkedin: "https://linkedin.com/in/mikejohnson",
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
                      width={300}
                      height={600}
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
                          width={32}
                          height={32}
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