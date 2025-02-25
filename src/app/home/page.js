'use client';
import { useState, useEffect } from "react";
import Image from "next/image"

import Header from "src/app/components/Header"
import Footer from "src/app/components/Footer"

import webdevelopment from "src/assets/images/home/webdevelopment.png"
import appdevelopment from "src/assets/images/home/appdevelopment.png"
import mysqldatabase from "src/assets/images/home/mysqldatabase.png"
import sloganicon from "src/assets/images/home/sloganicon.png"
import sloganicon2 from "src/assets/images/home/sloganicon2.png"
import sidelogo from "src/assets/images/home/sidelogo.png"

import styles from "src/app/styles/Home.module.css"

export default function Home() {
  const [imageSrc, setImageSrc] = useState(sloganicon);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc((prevImage) => 
        prevImage === sloganicon ? sloganicon2 : sloganicon
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
  <><><Header />
      <div className={styles.home}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroRedText}>T</span>ogether,{" "}
                <span className={styles.heroThinkWrapper}>
                  <span className={styles.heroRedText}>We </span>
                  Think
                  <span className={styles.heroThinkBorder}></span>
                  <span className={styles.heroIconWrapper}>
                    <span className={styles.heroIconCircle}>
                      <Image src={imageSrc} alt="sloganicon" width={180} height={100}/>
                    </span>
                  </span>
                </span>
              </h1>
              <div className={styles.heroSubtitleWrapper}>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>High-quality websites</p>
                </div>
                <div className={styles.heroSubtitleBox}>
                  <p className={styles.heroSubtitle}>for all Companies</p>
                </div>
              </div>
              <p className={styles.heroDescription}>
                Since 2022, we've been crafting innovative web, app, and database solutions with excellence!
              </p>
            </div>
            <div >
              <Image src={sidelogo} alt="sloganicon" className={styles.heroBackgroundGradient}/>
            </div>
          </section>

          {/* Business Content Section */}
          <section className={styles.businessContent}>
            <h2 className={styles.businessContentTitle}>Business Content</h2>
            <p className={styles.businessContentSubtitle}>
              We Face Our Customers&apos; Challenges And Provide Services That Bring Smiles To The Faces Of All Those
              Involved.
            </p>
            <div className={styles.businessServices}>
              <div className={styles.businessService}>
                <div className={styles.serviceImage}>
                  <Image
                    src={webdevelopment}
                    alt="Web Development"
                    width={200}
                    height={200}
                    className={styles.serviceIllustration} />
                </div>
                <h3>WEB DEVELOPMENT</h3>
              </div>
              <div className={styles.businessService}>
                <div className={styles.serviceImage}>
                  <Image
                    src={appdevelopment}
                    alt="App Development"
                    width={200}
                    height={200}
                    className={styles.serviceIllustration} />
                </div>
                <h3>APP DEVELOPMENT</h3>
              </div>
              <div className={styles.businessService}>
                <div className={styles.serviceImage}>
                  <Image
                    src={mysqldatabase}
                    alt="MySQL Database"
                    width={200}
                    height={200}
                    className={styles.serviceIllustration} />
                </div>
                <h3>MYSQL DATABASE</h3>
              </div>
            </div>
          </section>

          {/* Fun Facts Section */}
          <section className={styles.funFacts}>
            <h2 className={styles.funFactsTitle}>Some Fun Facts</h2>
            <div className={styles.funFactsContainer}>
              <div className={styles.funFact}>
                <div className={styles.factNumber}>8</div>
                <div className={styles.factText}>CUP OF COFFEE</div>
              </div>
              <div className={styles.funFact}>
                <div className={styles.factNumber}>7</div>
                <div className={styles.factText}>PROJECT ONGOING</div>
              </div>
              <div className={styles.funFact}>
                <div className={styles.factNumber}>5</div>
                <div className={styles.factText}>PROJECT DELIVERED</div>
              </div>
            </div>
          </section>

          {/* Company Profile Section */}
          <section className={styles.companyProfile}>
            <div className={styles.profileTitleWrapper}>
              <h1 className={styles.profileTitle}>
                <span className={styles.profileRedC}>C</span>ompany
                <br />
                Profile
              </h1>
            </div>
            <div className={styles.profileContent}>
              {/* Profile Content Rows */}
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Company Name</div>
                <div className={styles.profileValue}>Genio India Software Pvt. Ltd.</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Established</div>
                <div className={styles.profileValue}>December 28, 2022</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Representative</div>
                <div className={styles.profileValue}>TAKUYA YONEDA</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Group companies</div>
                <div className={styles.profileValue}>Genio Co., Ltd.</div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Business Contents</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileBulletPoints}>
                    <div>• App Development</div>
                    <div>• Web Development</div>
                    <div>• MySql Database</div>
                  </div>
                </div>
              </div>
              <div className={styles.profileRow}>
                <div className={styles.profileLabel}>Location</div>
                <div className={styles.profileValue}>
                  <div className={styles.profileAddress}>
                    No. 5/131B1, Narikkal karadu, Vennandur, Rasipuram, Namakkal, Tamil Nadu, India-637505 .
                  </div>
                  <a href="#" className={styles.profileMapLink}>
                    Google map <span className={styles.profileArrow}>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div></><Footer /></>
  )
}