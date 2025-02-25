"use client";

import Image from "next/image";
import "../globals.css";
import { motion } from "framer-motion";
import styles from "src/app/styles/team.module.css";
import employee from "src/assets/images/our_team/employee.png";
import insta from "src/assets/images/our_team/insta.png";
import linkedin from "src/assets/images/our_team/linkedin.png";

const teamMembers = [
  {
    name: "John Doe",
    role: "Web Developer",
    image: employee,
    description: "Experienced web developer specializing in React and Next.js",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "App Developer",
    image: employee,
    description: "Mobile app expert with focus on React Native development",
    instagram: "https://instagram.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Database Engineer",
    image: employee,
    description: "Database specialist with extensive MySQL experience",
    instagram: "https://instagram.com/mikejohnson",
    linkedin: "https://linkedin.com/in/mikejohnson",
  },
  {
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    image: employee,
    description: "Creative designer focused on user-centered experiences",
    instagram: "https://instagram.com/sarahwilson",
    linkedin: "https://linkedin.com/in/sarahwilson",
  },
  {
    name: "Jane Smith",
    role: "App Developer",
    image: employee,
    description: "Mobile app expert with focus on React Native development",
    instagram: "https://instagram.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Database Engineer",
    image: employee,
    description: "Database specialist with extensive MySQL experience",
    instagram: "https://instagram.com/mikejohnson",
    linkedin: "https://linkedin.com/in/mikejohnson",
  },

];

export default function TeamSection() {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.web_dev}
    >
      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.heroTitle}>
            <span className={styles.heroRedText}>Our Team</span>
          </h2>
          <h2 className={styles.heroSubtitle}>
            Our team is the heart of our success and the core of our visionContent
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
                        height={400}
                        className={styles.memberImage}
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
                        {/* Instagram Link */}
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                        >
                          <Image
                            src={insta}
                            alt="Instagram"
                            width={32}
                            height={32}
                            className={styles.socialIcon}
                          />
                        </a>
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
      </section>
    </motion.section>
  );
}
