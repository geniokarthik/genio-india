"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "src/app/common/styles/Header.module.css";
import "../../globals.css";
import logo from "src/assets/images/logo.png";
import logoMob from "src/assets/images/logoMob.png";
import LanguageSwitcher from "src/app/common/lan_swit/LanguageSwitcher";
import Sidebar from "react-sidebar";

export default function Header() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleHomePage = (e) => {
    e.preventDefault();
    const lang = pathname.split('/')[1] || 'ja';
    push(`/${lang}`);
  };

  const onSetSidebarOpen = (open) => setSidebarOpen(open);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarContent = (
    <div className={styles.sidebarContent}>
      <button className={styles.closeButton} onClick={() => setSidebarOpen(false)}>✕</button>
      <div className={styles.sidebarNav}>
        <Link href="/ja" className={`${styles.sidebarLink} ${pathname === "/ja" ? styles.active : ""}`} onClick={() => setSidebarOpen(false)}>ホーム</Link>
        <Link href="/ja/offshore_service" className={`${styles.sidebarLink} ${pathname === "/ja/offshore_service" ? styles.active : ""}`} onClick={() => setSidebarOpen(false)}>オフショアサービス</Link>
        <Link href="/ja/service" className={`${styles.sidebarLink} ${pathname === "/ja/service" ? styles.active : ""}`} onClick={() => setSidebarOpen(false)}>サービス</Link>
        <Link href="/ja/aboutus" className={`${styles.sidebarLink} ${pathname === "/ja/aboutus" ? styles.active : ""}`} onClick={() => setSidebarOpen(false)}>会社情報</Link>
        <Link href="/ja/contactus" className={`${styles.sidebarLink} ${pathname === "/ja/contactus" ? styles.active : ""}`} onClick={() => setSidebarOpen(false)}>お問い合わせ</Link>
        <LanguageSwitcher />
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <title>Genioインド</title>

      {/* Col 1 — Logo */}
      <div className={styles.logoContainer}>
        <Link href={`/${pathname.split('/')[1] || 'ja'}`} onClick={handleHomePage}>
          <Image
            src={isMobile ? logoMob : logo}
            alt="Genio India Logo"
            width={160}
            height={65}
            className={styles.logo}
            priority
          />
        </Link>
      </div>

      {/* Col 2 — Nav (desktop) / empty (mobile) */}
      {!isMobile ? (
        <nav className={styles.nav}>
          <Link href="/ja/offshore_service" className={`${styles.link} ${pathname === "/ja/offshore_service" ? styles.active : ""}`}>オフショアサービス</Link>
          <Link href="/ja/service" className={`${styles.link} ${pathname === "/ja/service" ? styles.active : ""}`}>サービス</Link>
          <Link href="/ja/aboutus" className={`${styles.link} ${pathname === "/ja/aboutus" ? styles.active : ""}`}>会社情報</Link>
          <Link href="/ja/contactus" className={`${styles.link} ${pathname === "/ja/contactus" ? styles.active : ""}`}>お問い合わせ</Link>
        </nav>
      ) : (
        <span />
      )}

      {/* Col 3 — Actions (desktop) / Hamburger (mobile) */}
      {!isMobile ? (
        <div className={styles.rightSection}>
          <LanguageSwitcher />
          <Link href="/ja/contactus" className={styles.btnJoin}>
            お問い合わせ →
          </Link>
        </div>
      ) : (
        <Sidebar
          sidebar={sidebarContent}
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          pullRight={true}
          styles={{
            sidebar: { background: "white", width: "250px", position: "fixed", zIndex: 999, top: 0, bottom: 0 },
            overlay: { zIndex: 998 },
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
      )}
    </header>
  );
}
