"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "src/app/styles/Contactus.module.css";
import emailicon from "src/assets/images/contactus/email.png";
import returnhomeicon from "src/assets/images/contactus/returnhome.png";
import ScrollTop from "src/app/scrolltop/ScrollTop";
import CryptoJS from 'crypto-js';

export default function ContactForm() {
    const [isClient, setIsClient] = useState(false);
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

        if (!formData.inquiryCategory) {
            newErrors.inquiryCategory = "Please select an inquiry category";
        }

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Please enter numbers only";
        } else if (formData.phoneNumber.length !== 10) {
            newErrors.phoneNumber = "Phone number must be at least 10 digits";
        }

        if (!formData.emailAddress) {
            newErrors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            newErrors.emailAddress = "Please enter a valid email address";
        }

        if (!formData.inquiryContent) {
            newErrors.inquiryContent = "Inquiry content is required";
        }

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
                    const response = await fetch("/api/sendmail", {
                        method: "POST",
                        headers: { 
                            "Content-Type": "application/json",
                            "x-api-key": encryptedKey
                        },
                        body: JSON.stringify(formDataCopy),
                    });

                    const text = await response.text();
                    const data = JSON.parse(text);
                    try {
                        if (data.success) {
                            alert(data.message);
                            setDisableFlg(false);
                            setFormData({
                                inquiryCategory: "",
                                companyName: "",
                                name: "",
                                phoneNumber: "",
                                emailAddress: "",
                                inquiryContent: "",
                            });
                            setCheckFlg(false);
                            setCompletedFlg(true);
                        } else {
                            alert("Unauthorized Request");
                            setFormData({
                                inquiryCategory: "",
                                companyName: "",
                                name: "",
                                phoneNumber: "",
                                emailAddress: "",
                                inquiryContent: "",
                            });
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
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Atomic Age&display=swap" rel="stylesheet"></link>
            <Header />
            <div className={styles.container}>
                <motion.div
                    className={styles.home}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className={styles.title}>CONTACT</h1>
                    <h2 className={styles.subtitle}>Inquiry</h2>
                    <div className={styles.formWrapper}>
                        <motion.section
                            className={styles.hero}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className={styles.formContainer}>
                                <div className={styles.mailSection}>
                                    <span className={styles.mailIcon}>
                                        <Image
                                            src={emailicon}
                                            alt="Genio India Logo"
                                            className={styles.image}
                                        />
                                        <span className={styles.mailText}>MAIL</span>
                                    </span>
                                </div>

                                <h3 className={styles.formTitle}>Questions & Consultations Form</h3>

                                {!completedFlg ? (
                                    <>
                                        <form className={styles.form} onSubmit={handleSubmit}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>
                                                    Inquiry Category<span className={styles.required}>*</span>
                                                </label>
                                                {!buttonFlg ?
                                                    <select
                                                        name="inquiryCategory"
                                                        value={formData.inquiryCategory}
                                                        onChange={handleChange}
                                                        className={`${styles.inputFields} ${errors.inquiryCategory ? styles.error : ""}`}
                                                    >
                                                        <option value="">--Please Select--</option>
                                                        <option value="General Inquiry">General Inquiry</option>
                                                        <option value="Service Related">Service Related</option>
                                                        <option value="Technical Support">Technical Support</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    :
                                                    <input disabled={buttonFlg} type="text" name="inquiryCategory" value={formData.inquiryCategory} className={styles.inputField} />
                                                }
                                                {errors.inquiryCategory && <span className={styles.errorMessage}>{errors.inquiryCategory}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>Company Name</label>
                                                <input disabled={buttonFlg} type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={styles.inputField} />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>
                                                    Name<span className={styles.required}>*</span>
                                                </label>
                                                <input disabled={buttonFlg} type="text" name="name" value={formData.name} onChange={handleChange} className={`${styles.inputField} ${errors.name ? styles.error : ""}`} />
                                                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>
                                                    Phone Number<span className={styles.required}>*</span>
                                                </label>
                                                <input disabled={buttonFlg} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`${styles.inputField} ${errors.phoneNumber ? styles.error : ""}`} />
                                                {errors.phoneNumber && <span className={styles.errorMessage}>{errors.phoneNumber}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>
                                                    Email Address<span className={styles.required}>*</span>
                                                </label>
                                                <input disabled={buttonFlg} type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className={`${styles.inputField} ${errors.emailAddress ? styles.error : ""}`} />
                                                {errors.emailAddress && <span className={styles.errorMessage}>{errors.emailAddress}</span>}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.labelField}>
                                                    Inquiry Content<span className={styles.required}>*</span>
                                                </label>
                                                <textarea
                                                    disabled={buttonFlg}
                                                    name="inquiryContent"
                                                    value={formData.inquiryContent || ""}
                                                    onChange={handleChange}
                                                    className={`${styles.textareaField} ${errors.inquiryContent ? styles.error : ""}`}
                                                    rows={5}
                                                />
                                                {errors.inquiryContent && <span className={styles.errorMessage}>{errors.inquiryContent}</span>}
                                            </div>

                                            <div className={styles.formGroup1}>
                                                <button type="submit" className={styles.submitButton} disabled={disableFlg}
                                                style={{
                                                    pointerEvents: disableFlg ? "none" : "auto",
                                                    opacity: disableFlg ? 0.6 : 1
                                                }}>
                                                    {!buttonFlg ? 'Confirm' : 'Send'}
                                                </button>
                                            </div>

                                        </form> </>
                                ) : (
                                    <>
                                        <h1 className={styles.footerHead}>THANK YOU !</h1>
                                        <div className={styles.formGroups}>
                                            <p>
                                                Thank you for contacting Genio India Software Pvt. Ltd.
                                                <br /><br />
                                                We have received your inquiry and will review its contents.
                                                Our team will reach out to you within two business days at the email address you provided.
                                            </p>
                                        </div>
                                        <div style={{ paddingTop: 50, textAlign: 'center' }}>
                                            <Link href="/" className={styles.formFooter}>
                                                <h3>
                                                    Return to Home
                                                    <Image
                                                        src={returnhomeicon}
                                                        alt="Back to home"
                                                        width={40}
                                                        height={40}
                                                        style={{ verticalAlign: 'middle', paddingLeft: 10 }}
                                                    />
                                                </h3>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.section>
                        <div className={styles.progress}>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${inputFlg ? styles.active : styles.inactive}`}>01</span>
                                <span className={inputFlg ? styles.stepLabel : styles.instepLabel}>Input</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${checkFlg ? styles.active : styles.inactive}`}>02</span>
                                <span className={checkFlg ? styles.stepLabel : styles.instepLabel}>Check</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${completedFlg ? styles.active : styles.inactive}`}>03</span>
                                <span className={completedFlg ? styles.stepLabel : styles.instepLabel}>Completed</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <ScrollTop/>
            <Footer />
        </>
    );
}
