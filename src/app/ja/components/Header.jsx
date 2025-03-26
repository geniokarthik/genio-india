"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "src/app/common/styles/Header.module.css";
import logo from "src/assets/images/logo.png";
import IndFlgIcon from "src/assets/images/indflag.png";
import JpFlgIcon from "src/assets/images/jpflag.png";
import Sidebar from "react-sidebar";
import { useRouter } from 'next/navigation';
import { SUPPORTED_LANGUAGES } from 'src/config/languages';

export default function Header() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Initialize flag based on current path - show JpFlgIcon when in Japanese mode
  const [flag, setFlag] = useState(() => pathname.startsWith('/ja') ? JpFlgIcon : IndFlgIcon);

  // Handle flag toggle with language switch
  const handleFlagClick = () => {
    const newLang = pathname.startsWith('/ja') ? 'en' : 'ja';
    const newFlag = newLang === 'ja' ?  JpFlgIcon : IndFlgIcon;
    
    setFlag(newFlag);
    localStorage.setItem("lang", newLang);
    
    // Get current path segments and create new path
    const segments = pathname.split('/').filter(Boolean);
    const newPath = segments.length > 1 
      ? `/${newLang}/${segments.slice(1).join('/')}`
      : `/${newLang}`;
      
    push(newPath);
  };

  const handleHomePage = (e) => {
    e.preventDefault();
    const defaultLang = Object.values(SUPPORTED_LANGUAGES).find(lang => lang.default)?.code || 'en';
    const currentLang = localStorage.getItem("lang") || defaultLang;
    push(`/${currentLang}`);
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
          ホーム
        </Link>
        <Link 
          href="/ja/service" 
          className={`${styles.sidebarLink} ${pathname === "/ja/service" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          サービス
        </Link>
        <Link 
          href="/ja/aboutus" 
          className={`${styles.sidebarLink} ${pathname === "/ja/aboutus" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          会社情報
        </Link>
        <Link 
          href="/ja/contactus" 
          className={`${styles.sidebarLink} ${pathname === "/ja/contactus" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          お問い合わせ
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
      <div className={styles.logoContainer}>
        <Link href={`/${localStorage.getItem("lang") || "ja"}`} onClick={handleHomePage}>
          <Image
            src={logo}
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
              href="/ja/service" 
              className={`${styles.link} ${pathname === "/ja/service" ? styles.active : ""}`}
            >
              サービス
            </Link>
            <Link 
              href="/ja/aboutus" 
              className={`${styles.link} ${pathname === "/ja/aboutus" ? styles.active : ""}`}
            >
              会社情報
            </Link>
            <Link 
              href="/ja/contactus" 
              className={`${styles.link} ${pathname === "/ja/contactus" ? styles.active : ""}`}
            >
              お問い合わせ
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
      <hr/>
    </header>
  );
}