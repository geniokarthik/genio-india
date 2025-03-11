"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname
import styles from "src/app/styles/Header.module.css";
import logo from "src/assets/images/logo.png";
import logoicon from "src/assets/images/logoicon.png";
import IndFlgIcon from "src/assets/images/indflag.png";
import JpFlgIcon from "src/assets/images/jpflag.png";
import Sidebar from "react-sidebar";

export default function Header() {
  const [flag, setFlag] = useState(IndFlgIcon);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current pathname
  const router = useRouter();

  // Handle flag toggle
  // const handleFlagClick = () => {
  //   setFlag(flag === IndFlgIcon ? JpFlgIcon : IndFlgIcon);
  // };

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
  
  const handleHomePage = (e, href) => {
    e.preventDefault();
    router.push(href);
  }

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
          href="/service" 
          className={`${styles.sidebarLink} ${pathname === "/service" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          Service
        </Link>
        <Link 
          href="/aboutus" 
          className={`${styles.sidebarLink} ${pathname === "/aboutus" ? styles.active : ""}`} 
          onClick={() => setSidebarOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/contactus" 
          className={`${styles.sidebarLink} ${pathname === "/contactus" ? styles.active : ""}`} 
          onClick={(e) => handleReload(e, "/contactus")}
        >
          Contact Us
        </Link>
        {/* <div className={styles.sidebarFlagContainer} onClick={handleFlagClick}>
          <Image 
            src={flag} 
            alt={flag === IndFlgIcon ? "India Flag" : "Japan Flag"} 
            width={30} 
            height={30} 
          />
          <span className={styles.flagtext}>{flag === IndFlgIcon ? "IN" : "JP"}</span>
        </div> */}
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <title>Genio India</title>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image
            src={logo}
            alt="Genio India Logo"
            width={180}
            height={100}
            className={styles.logo}
            onClick={(e) => { handleHomePage(e, "/"); }}
          />
        </a>
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
          {/* <div className={styles.logoicon}>
            <Link href="/" className={styles.link}>
              <Image
                src={logoicon}
                alt="Genio India Logo"
                width={55}
                height={55}
                style={{marginTop: 7}}
              />
            </Link>
          </div> */}
          <nav className={styles.nav}>
            <Link 
              href="/service" 
              className={`${styles.link} ${pathname === "/service" ? styles.active : ""}`}
            >
              Service
            </Link>
            <Link 
              href="/aboutus" 
              className={`${styles.link} ${pathname === "/aboutus" ? styles.active : ""}`}
            >
              About Us
            </Link>
            <Link 
              href="/contactus" 
              onClick={(e) => handleReload(e, "/contactus")}
              className={`${styles.link} ${pathname === "/contactus" ? styles.active : ""}`}
            >
              Contact Us
            </Link>
          </nav>
          {/* <div className={styles.flagContainer} onClick={handleFlagClick}>
            <Image 
              src={flag} 
              alt={flag === IndFlgIcon ? "India Flag" : "Japan Flag"} 
              width={30} 
              height={30} 
            />
            <span className={styles.flagtext}>{flag === IndFlgIcon ? "IN" : "JP"}</span>
          </div> */}
        </div>
      )}
    </header>
  );
}