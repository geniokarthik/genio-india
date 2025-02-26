"use client";
import { useState, useEffect } from "react";

import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import Image from "next/image"

import styles from "src/app/styles/Contactus.module.css";
import emailicon from "src/assets/images/contactus/email.png";

export default function ContactForm() {

    const [isClient, setIsClient] = useState(false);
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
            newErrors.phoneNumber = "Please enter only numbers without hyphens";
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
                // Keep a copy of formData before resetting
                const formDataCopy = { ...formData };

                setFormData({
                    inquiryCategory: "",
                    companyName: "",
                    name: "",
                    phoneNumber: "",
                    emailAddress: "",
                    inquiryContent: "",
                });

                const response = await fetch("/api/sendmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formDataCopy),
                });

                // Check if response is valid JSON
                const text = await response.text();
                try {
                    const data = JSON.parse(text);
                    alert("Your email has been sent successfully");
                } catch (jsonError) {
                    alert("Invalid JSON response from server");
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

    if (!isClient) return null; // Avoid rendering on server

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Atomic Age&display=swap" rel="stylesheet"></link>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>CONTACT</h1>
                <h2 className={styles.subtitle}>Inquiry</h2>

                <div className={styles.formWrapper}>
                    <div className={styles.formContainer}>
                        <div className={styles.mailSection}>
                            <span className={styles.mailIcon}>
                                <Image
                                    src={emailicon}
                                    alt="Genio India Logo"
                                    width={100}
                                    height={100}
                                />
                            </span> MAIL
                        </div>

                        <h3 className={styles.formTitle}>Questions & Consultations Form</h3>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>
                                    Inquiry Category<span className={styles.required}>*</span>
                                </label>
                                <select
                                    name="inquiryCategory"
                                    value={formData.inquiryCategory}
                                    onChange={handleChange}
                                    className={`${styles.inputField} ${errors.inquiryCategory ? styles.error : ""}`}
                                >
                                    <option value="">--Please Select--</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="service">Service Related</option>
                                    <option value="support">Technical Support</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.inquiryCategory && <span className={styles.errorMessage}>{errors.inquiryCategory}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>Company Name</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={styles.inputField} />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>
                                    Name<span className={styles.required}>*</span>
                                </label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`${styles.inputField} ${errors.name ? styles.error : ""}`} />
                                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>
                                    Phone Number<span className={styles.required}>*</span>
                                </label>
                                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`${styles.inputField} ${errors.phoneNumber ? styles.error : ""}`} />
                                {errors.phoneNumber && <span className={styles.errorMessage}>{errors.phoneNumber}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>
                                    Email Address<span className={styles.required}>*</span>
                                </label>
                                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className={`${styles.inputField} ${errors.emailAddress ? styles.error : ""}`} />
                                {errors.emailAddress && <span className={styles.errorMessage}>{errors.emailAddress}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.labelField}>
                                    Inquiry Content<span className={styles.required}>*</span>
                                </label>
                                <textarea
                                    name="inquiryContent"
                                    value={formData.inquiryContent || ""}
                                    onChange={handleChange}
                                    className={`${styles.textareaField} ${errors.inquiryContent ? styles.error : ""}`}
                                    rows={5}
                                />
                                {errors.inquiryContent && <span className={styles.errorMessage}>{errors.inquiryContent}</span>}
                            </div>

                            <div className={styles.formGroup1}>
                                <button type="submit" className={styles.submitButton}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${styles.active}`}>01</span>
                            <span className={styles.stepLabel}>Input</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${styles.inactive}`}>02</span>
                            <span className={styles.stepLabel}>Check</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${styles.inactive}`}>03</span>
                            <span className={styles.stepLabel}>Completed</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
