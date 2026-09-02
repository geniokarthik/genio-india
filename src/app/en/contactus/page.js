"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "src/app/en/components/Header";
import Footer from "src/app/en/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "src/app/common/styles/Contactus.module.css";
import "../../globals.css";
import returnhomeicon from "src/assets/images/contactus/returnhome.png";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import AnimatedHeroBackdrop from "src/app/common/components/AnimatedHeroBackdrop";
import CryptoJS from 'crypto-js';

export default function ContactForm() {
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
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
            <Header />

            {/* PAGE HERO */}
            <section className={styles.pageHero}>
                <AnimatedHeroBackdrop className={styles.heroCanvasBackdrop} />
                <div aria-hidden="true" className={styles.heroDecorRing} />
                <div aria-hidden="true" className={styles.heroDecorDot} />
                <div className={styles.heroWrap}>
                    <p className={styles.heroEyebrow}>Get in Touch</p>
                    <h1 className={styles.heroH1}><span>Contact Us</span></h1>
                    <p className={styles.heroSub}>Have a project in mind? Fill in the form below and we&apos;ll get back to you within 2 business days.</p>
                    <div className={styles.progress}>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${inputFlg ? styles.active : styles.inactive}`}>01</span>
                            <span className={inputFlg ? styles.stepLabel : styles.instepLabel}>Input</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${checkFlg ? styles.active : styles.inactive}`}>02</span>
                            <span className={checkFlg ? styles.stepLabel : styles.instepLabel}>Confirm</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${completedFlg ? styles.active : styles.inactive}`}>03</span>
                            <span className={completedFlg ? styles.stepLabel : styles.instepLabel}>Complete</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT MAIN */}
            <section className={styles.contactMain}>
                <AnimatedHeroBackdrop className={styles.sectionCanvasBackdrop} />
                <div aria-hidden="true" className={styles.mainDecorRing} />
                <div aria-hidden="true" className={styles.mainDecorDot} />
                <div aria-hidden="true" className={styles.mainDecorRing2} />
                <div aria-hidden="true" className={styles.mainDecorDot2} />
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

                        {/* SIDEBAR */}
                        <aside className={styles.infoSidebar}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoCardTitle}>Contact Information</h3>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Location</p>
                                        <p className={styles.infoValue}>Namakkal, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Email</p>
                                        <p className={styles.infoValue}>info@genioindia.co.in</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Company</p>
                                        <p className={styles.infoValue}>Genio India Software Pvt. Ltd.</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>Response Time</p>
                                        <p className={styles.infoValue}>Within 2 business days</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mapCard}>
                                <iframe title="Genio India location" className={styles.mapFrame}
                                    src="https://www.google.com/maps?q=11.515406,78.091705&output=embed"
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <ScrollTop />
            <Footer />
        </>
    );
}
