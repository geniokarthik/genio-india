import Image from "next/image"
import Link from "next/link"
import styles from "src/app/styles/Footer.module.css"
import logo from "src/assets/images/logo.png";
import xicon from "src/assets/images/twitter.png";
import instagramicon from "src/assets/images/instagram.png";
import linkedinicon from "src/assets/images/linkedin.png";
import mailinboxicon from "src/assets/images/mailinbox.png";
import facebookicon from "src/assets/images/facebook.png";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.companyInfo}>
          <Image src={logo} alt="Genio Logo" width={150} height={50} />
          <p>Genio India Software Pvt. Ltd.</p>
          <p>Business hours 09:00 to 18:00</p>
          <p>No. 5/131B1, Narikkal karadu, Vennandur, Rasipuram, Namakkal, Tamil Nadu, India-637505.</p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>About Genio</h3>
            <Link href="#">Company Profile</Link>
            <Link href="#">Access</Link>
            <Link href="#">Corporate Philosophy</Link>
            <Link href="#">Message from the CEO</Link>
          </div>
          <div>
            <h3>Business Information</h3>
            <Link href="#">Development and production track record</Link>
            <Link href="#">Pricing & Plans</Link>
            <Link href="#">Recruitment Information</Link>
          </div>
          <div>
            <h3>Notice</h3>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* ✅ Updated Footer Bottom Section */}
      <div className={styles.footerBottom}>
        {/* FOLLOW US (Left Side) */}
        <div className={styles.socialMedia}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
          <Image src={xicon} alt="Twitter" width={24} height={24} />
            <Image src={facebookicon} alt="Facebook" width={24} height={24} />
            <Image src={instagramicon} alt="Instagram" width={24} height={24} />
            <Image src={linkedinicon} alt="LinkedIn" width={24} height={24} />
          </div>
        </div>

        {/* CONTACT (Right Side) */}
        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <Image src={mailinboxicon} alt="Mail" width={24} height={24} />
        </div>
        
        {/* Copyright Text (Centered) */}
        <p className={styles.copyright}>&copy; 2025 Genio India Software Pvt. Ltd.</p>
      </div>
    </footer>
  );
}


