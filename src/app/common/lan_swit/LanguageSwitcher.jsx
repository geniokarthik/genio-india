import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Languageselector from "src/assets/images/language.png";
import { SUPPORTED_LANGUAGES } from "src/config/languages";
import styles from "src/app/common/styles/Header.module.css"; 

export default function LanguageSwitcher({ variant = "header" }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.startsWith("/ja") ? "ja" : "en";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLanguageChange = (langCode) => {
    if (langCode === currentLang) {
      setDropdownOpen(false); // already in selected language
      return;
    }
  
    // Rewrite the path using the new language
    const pathSegments = pathname.split("/").filter(Boolean);
    const newPath = pathSegments.length > 1
      ? `/${langCode}/${pathSegments.slice(1).join("/")}`
      : `/${langCode}`;
  
    localStorage.setItem("lang", langCode); 
    setDropdownOpen(false); // close dropdown
    router.push(newPath); 
  };
  
  if (variant === "sidebar") {
    return (
      <div className={styles.langSelectorMobile} ref={dropdownRef}>
        <button
          type="button"
          className={styles.langSelectorMobileBtn}
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <Image src={Languageselector} alt="" width={18} height={18} />
          <span>{SUPPORTED_LANGUAGES[currentLang]?.name || "Language"}</span>
          <svg
            className={`${styles.langChevron} ${dropdownOpen ? styles.langChevronOpen : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className={styles.langDropdownMobile}>
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
              <div
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`${styles.langOption} ${code === currentLang ? styles.activeLang : ""}`}
              >
                {lang.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.langSelector} ref={dropdownRef}>
      <Image
        src={Languageselector}
        alt="Language Selector"
        width={30}
        height={30}
        onClick={() => setDropdownOpen(prev => !prev)}
        style={{ cursor: "pointer", verticalAlign: 'bottom' }}
      />
      {dropdownOpen && (
        <div className={styles.langDropdown}>
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
           <div
           key={code}
           onClick={() => handleLanguageChange(code)}
           className={`${styles.langOption} ${code === currentLang ? styles.activeLang : ""}`}>
           {lang.name}
         </div>
          ))}
        </div>
      )}
    </div>
  );
}
