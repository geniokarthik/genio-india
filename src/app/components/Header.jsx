"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import styles from "src/app/styles/Header.module.css"
import logo from "src/assets/images/logo.png";
import logoicon from "src/assets/images/logoicon.png";
import IndFlgIcon from "src/assets/images/indflag.png";
import JpFlgIcon from "src/assets/images/jpflag.png";

export default function Header() {

  const [flag, setFlag] = useState(IndFlgIcon);

  const handleFlagClick = () => {
    setFlag(flag === IndFlgIcon ? JpFlgIcon : IndFlgIcon);
  }

    return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Genio India Logo"
            width={180}
            height={100}
            className={styles.logo}
          />
        </div>
        <div className={styles.logoicon}>
          <Link href="/" className={styles.link}>
            <Image
              src={logoicon}
              alt="Genio India Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/service" className={styles.link}>
            Service
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Image 
            src={flag} 
            alt="India Flag" 
            width={30} 
            height={30} 
            onClick={handleFlagClick}
          />
          <span className={styles.flagtext}>{flag === IndFlgIcon ? 'In' : 'Jp'}</span>
        </div>
      </header>
    )
  }

