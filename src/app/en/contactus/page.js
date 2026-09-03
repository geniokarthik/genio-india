"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "src/app/common/styles/Contactus.module.css";
import "../../globals.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroParallaxDecor, { useHeroParallax } from "src/app/common/components/HeroParallaxDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";
import CryptoJS from 'crypto-js';

export default function ContactForm() {
    const { heroRef, parallaxX, parallaxY, onMouseMove, onMouseLeave } = useHeroParallax();
    const [buttonFlg, setButtonFlg] = useState(false);
    const [inputFlg, setInputFlg] = useState(true);
    const [checkFlg, setCheckFlg] = useState(false);
    const [completedFlg, setCompletedFlg] = useState(false);
    const [disableFlg, setDisableFlg] = useState(false);

    const [formData, setFormData] = useState({
        inquiryCategory: "",
        companyName: "",
        name: "",
        phoneNumber: "",
        emailAddress: "",
        inquiryContent: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.inquiryCategory) newErrors.inquiryCategory = "Please select an inquiry category";
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
        else if (!/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Please enter numbers only";
        else if (formData.phoneNumber.length !== 10) newErrors.phoneNumber = "Phone number must be at least 10 digits";
        if (!formData.emailAddress) newErrors.emailAddress = "Email address is required";
        else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Please enter a valid email address";
        if (!formData.inquiryContent) newErrors.inquiryContent = "Inquiry content is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setButtonFlg(true);
                setInputFlg(false);
                setCheckFlg(true);
                const formDataCopy = { ...formData };
                if (buttonFlg) {
                    setDisableFlg(true);
                    const apiKey = "genio-india-secret-key-123";
                    const secretKey = "user-defined-secret";
                    const encryptedKey = CryptoJS.AES.encrypt(apiKey, secretKey).toString();
                    const response = await fetch("/api/sendmail/englishmail", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "x-api-key": encryptedKey },
                        body: JSON.stringify(formDataCopy),
                    });
                    const text = await response.text();
                    const data = JSON.parse(text);
                    try {
                        if (data.success) {
                            alert(data.message);
                            setDisableFlg(false);
                            setFormData({ inquiryCategory: "", companyName: "", name: "", phoneNumber: "", emailAddress: "", inquiryContent: "" });
                            setCheckFlg(false);
                            setCompletedFlg(true);
                        } else {
                            alert("Unauthorized Request");
                            setFormData({ inquiryCategory: "", companyName: "", name: "", phoneNumber: "", emailAddress: "", inquiryContent: "" });
                            setButtonFlg(false);
                        }
                        setDisableFlg(false);
                    } catch (jsonError) {
                        alert("Invalid JSON response from server");
                    }
                }
            } catch (error) {
                alert("Error submitting form:", error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleBack = () => {
        if (checkFlg) {
            setCheckFlg(false);
            setInputFlg(true);
            setCompletedFlg(false);
            setButtonFlg(false);
        }
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&family=Fredoka:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <Header />

            {/* PAGE HERO */}
            <section
                className={styles.pageHero}
                ref={heroRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
            >
                <motion.img
                    src="/images/home/hero_real_team4.png"
                    alt="Genio India team"
                    className={styles.heroBgImg}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div aria-hidden="true" className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <HeroParallaxDecor x={parallaxX} y={parallaxY} />
                    <p className={styles.heroLabel}>Get In Touch</p>
                    <h1 className={styles.heroTitle}>Contact <span>Us</span></h1>
                    <p className={styles.heroSubtitle}>Have a project in mind? Fill in the form below and we&apos;ll get back to you within 2 business days.</p>
                </div>
                <HeroWaveDivider />
            </section>

            {/* CONTACT MAIN */}
            <section className={styles.contactMain}>
                <SectionDecor variant="section" />
                <SectionDecor variant="section2" canvas={false} />
                <div className={styles.heroWrap}>
                    <div className={styles.contactInner}>

                        {/* FORM CARD */}
                        <div className={styles.formCard}>
                            {!completedFlg ? (
                                <>
                                    <h2 className={styles.formCardTitle}>Questions &amp; Consultations Form</h2>
                                    <p className={styles.formCardSub}>Fields marked with <span style={{ color: "#e22110" }}>*</span> are required.</p>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Inquiry Category<span className={styles.required}>*</span></label>
                                            {!buttonFlg ?
                                                <select name="inquiryCategory" value={formData.inquiryCategory} onChange={handleChange}
                                                    className={`${styles.formSelect} ${errors.inquiryCategory ? styles.error : ""}`}>
                                                    <option value="">-- Please Select --</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Service Related">Service Related</option>
                                                    <option value="Technical Support">Technical Support</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                :
                                                <input disabled type="text" name="inquiryCategory" value={formData.inquiryCategory} className={styles.formInput} />
                                            }
                                            {errors.inquiryCategory && <span className={styles.errMsg}>{errors.inquiryCategory}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Company Name</label>
                                            <input disabled={buttonFlg} type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={styles.formInput} placeholder="Genio Co., Ltd." />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Name<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="text" name="name" value={formData.name} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.name ? styles.error : ""}`} placeholder="Takuya Yoneda" />
                                            {errors.name && <span className={styles.errMsg}>{errors.name}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Phone Number<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.phoneNumber ? styles.error : ""}`} placeholder="9876543210" />
                                            {errors.phoneNumber && <span className={styles.errMsg}>{errors.phoneNumber}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Email Address<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.emailAddress ? styles.error : ""}`} placeholder="hello@genioindia.co.in" />
                                            {errors.emailAddress && <span className={styles.errMsg}>{errors.emailAddress}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>Inquiry Content<span className={styles.required}>*</span></label>
                                            <textarea disabled={buttonFlg} name="inquiryContent" value={formData.inquiryContent || ""}
                                                onChange={handleChange} rows={5}
                                                className={`${styles.formTextarea} ${errors.inquiryContent ? styles.error : ""}`}
                                                placeholder="Please describe your project or inquiry in detail..." />
                                            {errors.inquiryContent && <span className={styles.errMsg}>{errors.inquiryContent}</span>}
                                        </div>
                                        <div className={styles.formActions}>
                                            {checkFlg && (
                                                <button type="button" onClick={handleBack} disabled={disableFlg} className={styles.backButton}>
                                                    ← Back
                                                </button>
                                            )}
                                            <button type="submit" className={styles.submitButton} disabled={disableFlg}
                                                style={{ pointerEvents: disableFlg ? "none" : "auto", opacity: disableFlg ? 0.6 : 1 }}>
                                                {inputFlg ? "Confirm →" : "Send Message"}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className={styles.thankyouWrap}>
                                    <div className={styles.thankyouIcon}>✉️</div>
                                    <h1 className={styles.thankyouTitle}>THANK YOU!</h1>
                                    <p className={styles.thankyouMsg}>
                                        Thank you for contacting Genio India Software Pvt. Ltd.<br /><br />
                                        We have received your inquiry and will review its contents. Our team will reach out to you within two business days at the email address you provided.
                                    </p>
                                    <Link href="/" className={styles.homeBtn}>← Return to Home</Link>
                                </div>
                            )}
                        </div>

                        {/* PROGRESS SIDEBAR */}
                        {(() => {
                            const s1 = (checkFlg || completedFlg) ? "done" : inputFlg ? "active" : "inactive";
                            const s2 = completedFlg ? "done" : checkFlg ? "active" : "inactive";
                            const s3 = completedFlg ? "active" : "inactive";
                            const check = (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            );
                            return (
                                <aside className={styles.progressSidebarCard}>
                                    <div className={styles.progressStepRow}>
                                        <span className={`${styles.progressStepNum} ${styles[s1]}`}>{s1 === "done" ? check : "01"}</span>
                                        <span className={`${styles.progressStepLabel} ${styles[s1]}`}>Input</span>
                                    </div>
                                    <div className={`${styles.progressConnector} ${s1 === "done" ? styles.done : ""}`} />
                                    <div className={styles.progressStepRow}>
                                        <span className={`${styles.progressStepNum} ${styles[s2]}`}>{s2 === "done" ? check : "02"}</span>
                                        <span className={`${styles.progressStepLabel} ${styles[s2]}`}>Confirm</span>
                                    </div>
                                    <div className={`${styles.progressConnector} ${s2 === "done" ? styles.done : ""}`} />
                                    <div className={styles.progressStepRow}>
                                        <span className={`${styles.progressStepNum} ${styles[s3]}`}>{s3 === "done" ? check : "03"}</span>
                                        <span className={`${styles.progressStepLabel} ${styles[s3]}`}>Complete</span>
                                    </div>
                                </aside>
                            );
                        })()}

                    </div>
                </div>
            </section>

            <ScrollTop />
            <Footer />
        </>
    );
}
