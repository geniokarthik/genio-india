"use client";
import Image from "next/image"
import Link from "next/link"
import styles from "src/app/common/styles/Footer.module.css"
import logo from "src/assets/images/footerlogo.png";
import xicon from "src/assets/images/twitter.png";
import "../../globals.css";
import instagramicon from "src/assets/images/instagram.png";
import linkedinicon from "src/assets/images/linkedin.png";
import facebookicon from "src/assets/images/facebook.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <Image src={logo} alt="Genio Logo" width={180} height={65} />
        </div>

        {/* Address */}
        <div className={styles.address}>
          <p>Genio India Software Pvt. Ltd.</p>
          <p>営業時間 09:00～18:00</p>
          <p>No. 171/3/1, Narikkal karadu, Vennandur, Rasipuram, Namakkal,</p>
          <p>Tamil Nadu, India - 637505.</p>
        </div>

        {/* Footer Links - Column 1 */}
        <div className={styles.footerLinks}>
          <Link href="/ja/aboutus">会社情報</Link>
          <Link href="/ja/#companyprofile">会社概要</Link>
          <Link href="/ja/contactus">お問い合わせ</Link>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialMedia}>
          <h3>フォローする</h3>
          <div className={styles.socialIcons}>
            <Link href="https://x.com/Genio_India" target="_blank">
              <Image src={xicon} alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/genioindia.co.in" target="_blank">
              <Image src={facebookicon} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/genio_india" target="_blank">
              <Image src={instagramicon} alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/genio-india-software" target="_blank">
              <Image src={linkedinicon} alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>
        <p className={styles.copyright}>&copy; 2025 Genio India Software Pvt. Ltd.</p>
      </div>
    </footer>
  );
}


