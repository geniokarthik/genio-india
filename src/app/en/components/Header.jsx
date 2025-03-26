"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "src/app/common/styles/Header.module.css";
import logo from "src/assets/images/logo.png";
import logoMob from "src/assets/images/logoMob.png";
import IndFlgIcon from "src/assets/images/indflag.png";
import JpFlgIcon from "src/assets/images/jpflag.png";
import Sidebar from "react-sidebar";
import { SUPPORTED_LANGUAGES } from 'src/config/languages';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize flag based on current path - show IndFlgIcon when in English mode
  const [flag, setFlag] = useState(() => pathname.startsWith('/en') ? IndFlgIcon : JpFlgIcon);

  // Handle flag toggle with language switch
  const handleFlagClick = () => {
    const newLang = pathname.startsWith('/en') ? 'ja' : 'en';
    const newFlag = newLang === 'en' ? IndFlgIcon : JpFlgIcon;
    
    setFlag(newFlag);
    localStorage.setItem("lang", newLang);
    
    // Get current path segments and create new path
    const segments = pathname.split('/').filter(Boolean);
    const newPath = segments.length > 1 
      ? `/${newLang}/${segments.slice(1).join('/')}`
      : `/${newLang}`;
      
    router.push(newPath);
  };

  const handleHomePage = (e) => {
    e.preventDefault();
    const defaultLang = Object.values(SUPPORTED_LANGUAGES).find(lang => lang.default)?.code || 'en';
    const currentLang = localStorage.getItem("lang") || defaultLang;
    router.push(`/${currentLang}`);
  };

  // Handle sidebar toggle
  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReload = (e, href) => {
      e.preventDefault();
      setSidebarOpen(false)
      window.location.href = href;
  };   
  
  // Sidebar content
  const sidebarContent = (
    <div className={styles.sidebarContent}>
      <button 
        className={styles.closeButton}
        onClick={() => setSidebarOpen(false)}
      >
        ✕
      </button>
      <div className={styles.sidebarNav}>
        <Link 
          href="/" 
          className={`${styles.sidebarLink} ${pathname === "/" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/en/service" 
          className={`${styles.sidebarLink} ${pathname === "/en/service" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          Service
        </Link>
        <Link 
          href="/en/aboutus" 
          className={`${styles.sidebarLink} ${pathname === "/en/aboutus" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/en/contactus" 
          className={`${styles.sidebarLink} ${pathname === "/en/contactus" ? styles.active : ""}`} 
          onClick={(e) => handleReload(e, "/en/contactus")}
        >
          Contact Us
        </Link>
        <div className={styles.sidebarFlagContainer} onClick={handleFlagClick}>
          <Image 
            src={flag} 
            alt={flag === IndFlgIcon ? "India Flag" : "Japan Flag"} 
            width={30} 
            height={30} 
          />
          <span className={styles.flagtext}>{flag === IndFlgIcon ? "IN" : "JP"}</span>
        </div>
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <title>Genio India</title>
      <div className={styles.logoContainer}>
        <Link href={`/${localStorage.getItem("lang") || "en"}`} onClick={handleHomePage}>
          <Image
            src={isMobile ? logoMob : logo}
            alt="Genio India Logo"
            width={180}
            height={100}
            className={styles.logo}
          />
        </Link>
      </div>

      {isMobile ? (
        <Sidebar
          sidebar={sidebarContent}
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          pullRight={true}
          styles={{ 
            sidebar: { 
              background: "white",
              width: "250px",
              position: "fixed",
              zIndex: 999,
              top: 0,
              bottom: 0
            },
            overlay: {
              zIndex: 998
            }
          }}
        >
          <div className={styles.mobileMenu}>
            <button 
              className={`${styles.hamburger} ${sidebarOpen ? styles.open : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className={styles.hamburgerIcon}></span>
            </button>
          </div>
        </Sidebar>
      ) : (
        <div className={styles.rightSection}>
          <nav className={styles.nav}>
            <Link 
              href="/en/service" 
              className={`${styles.link} ${pathname === "/en/service" ? styles.active : ""}`}
            >
              Service
            </Link>
            <Link 
              href="/en/aboutus" 
              className={`${styles.link} ${pathname === "/en/aboutus" ? styles.active : ""}`}
            >
              About Us
            </Link>
            <Link 
              href="/en/contactus" 
              onClick={(e) => handleReload(e, "/en/contactus")}
              className={`${styles.link} ${pathname === "/en/contactus" ? styles.active : ""}`}
            >
              Contact Us
            </Link>
          </nav>
          <div className={styles.flagContainer} onClick={handleFlagClick}>
            <Image 
              src={flag} 
              alt={flag === IndFlgIcon ? "India Flag" : "Japan Flag"} 
              width={30} 
              height={30} 
            />
            <span className={styles.flagtext}>{flag === IndFlgIcon ? "IN" : "JP"}</span>
          </div>
        </div>
      )}
    </header>
  );
}