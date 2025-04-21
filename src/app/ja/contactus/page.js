"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "src/app/ja/components/Header"
import Footer from "src/app/ja/components/Footer"
import styles from "src/app/ja/styles/Contactus.module.css"
import ScrollTop from "src/app/common/scrolltop/ScrollTop"
import CryptoJS from "crypto-js"

export default function ContactForm() {
    const [isClient, setIsClient] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const [disableFlg, setDisableFlg] = useState(false)

    const [formData, setFormData] = useState({
        inquiryCategory: "",
        companyName: "",
        name: "",
        phoneNumber: "",
        phoneNumber1: "",
        phoneNumber2: "",
        phoneNumber3: "",
        emailAddress: "",
        inquiryContent: "",
    })

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        if (!formData.inquiryCategory) {
            newErrors.inquiryCategory = "お問い合わせ種別を選択してください"
        }

        if (!formData.name) {
            newErrors.name = "氏名を入力してください"
        }

        if (!formData.phoneNumber1 && !formData.phoneNumber2 && !formData.phoneNumber3) {
            // If all three fields are empty, show only the common error message
            newErrors.phoneNumber = "電話番号を入力してください";
        } else {
            // Clear the common error since at least one field is filled
            // newErrors.phoneNumber = "";

            // Validate each field for missing input
            if (!formData.phoneNumber1) {
                newErrors.phoneNumber1 = "電話番号を入力してください";
            }
            if (!formData.phoneNumber2) {
                newErrors.phoneNumber2 = "電話番号を入力してください";
            }
            if (!formData.phoneNumber3) {
                newErrors.phoneNumber3 = "電話番号を入力してください";
            }

            // Validate field format only if it has a value
            if (formData.phoneNumber1 && !/^\d{2}$/.test(formData.phoneNumber1)) {
                newErrors.phoneNumber1 = "2桁の数字を入力してください";
            }


            if (formData.phoneNumber2 && !/^\d{4}$/.test(formData.phoneNumber2)) {
                newErrors.phoneNumber2 = "4桁の数字を入力してください";
            }

            if (formData.phoneNumber3 && !/^\d{4}$/.test(formData.phoneNumber3)) {
                newErrors.phoneNumber3 = "4桁の数字を入力してください";
            }
        }

        if (!formData.emailAddress) {
            newErrors.emailAddress = "メールアドレスを入力してください";
        }

        if (!formData.inquiryContent) {
            newErrors.inquiryContent = "お問い合わせ内容を入力してください";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentStep === 1) {
            if (validateForm()) {
                setFormData((prevData) => ({
                    ...prevData,
                    phoneNumber: `${prevData.phoneNumber1}-${prevData.phoneNumber2}-${prevData.phoneNumber3}`,
                }));

                setCurrentStep(2);
            }
        } else if (currentStep === 2) {
            try {
                setDisableFlg(true);

                // Ensure phoneNumber is updated
                const updatedFormData = {
                    ...formData,
                    phoneNumber: `${formData.phoneNumber1}-${formData.phoneNumber2}-${formData.phoneNumber3}`,
                };

                delete updatedFormData.phoneNumber1;
                delete updatedFormData.phoneNumber2;
                delete updatedFormData.phoneNumber3;

                // Encrypt API key
                const apiKey = "genio-india-secret-key-123";
                const secretKey = "user-defined-secret";
                const encryptedKey = CryptoJS.AES.encrypt(apiKey, secretKey).toString();

                const response = await fetch("/api/sendmail/japanesemail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": encryptedKey,
                    },
                    body: JSON.stringify(updatedFormData),
                });

                const text = await response.text();
                let data;
                try {
                    data = JSON.parse(text);
                } catch (jsonError) {
                    alert("Invalid JSON response from server");
                    setDisableFlg(false);
                    return;
                }

                if (data.success) {
                    alert(data.message); 
                    setCurrentStep(3);
                } else {
                    alert(`エラー: ${data.message || "お問い合わせの送信に失敗しました。"}`); 
                    setCurrentStep(1);
                }

                setDisableFlg(false);
            } catch (error) {
                alert("Error submitting form: " + error.message);
                setDisableFlg(false);
            }
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Belanosima&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Atomic+Age&display=swap" rel="stylesheet"></link>
            <Header />
            <div className={styles.container}>
                <motion.div
                    className={styles.home}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className={styles.title}>
                        <span className={styles.redText}>C</span>ontact
                    </h1>
                    <h2 className={styles.subtitle}>お問い合わせ</h2>

                    <div className={styles.formWrapper}>
                        <div className={styles.progress}>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${currentStep >= 1 ? styles.active : styles.inactive}`}>1</span>
                                <span className={currentStep === 1 ? styles.stepLabel : styles.instepLabel}>入力</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${currentStep >= 2 ? styles.active : styles.inactive}`}>2</span>
                                <span className={currentStep === 2 ? styles.stepLabel : styles.instepLabel}>確認</span>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.step}>
                                <span className={`${styles.stepNumber} ${currentStep >= 3 ? styles.active : styles.inactive}`}>3</span>
                                <span className={currentStep === 3 ? styles.stepLabel : styles.instepLabel}>完了</span>
                            </div>
                        </div>

                        <motion.section
                            className={styles.hero}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                           
                            <div className={styles.formContainer}>
                                {currentStep === 3 ? (
                                    <div className={styles.completionContainer}>
                                        <p className={styles.completionText}>
                                            この度は株式会社ジェニオINDIAにお問い合わせいただき誠にありがとうございます。
                                            <br />
                                            <br />
                                            お問い合わせいただきました内容を確認後、
                                            <br />
                                            ご記入していただきましたメールアドレス宛に２営業日以内にご連絡致します。
                                        </p>
                                    </div>
                                ) : (
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        {currentStep === 1 && (
                                            <>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お問い合わせ種別
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <select
                                                        name="inquiryCategory"
                                                        value={formData.inquiryCategory}
                                                        onChange={handleChange}
                                                        className={`${styles.inputFields} ${errors.inquiryCategory ? styles.error : ""}`}
                                                    >
                                                        <option value="">選択してください</option>
                                                        <option value="一般的なお問い合わせ">一般的なお問い合わせ</option>
                                                        <option value="サービスに関するお問い合わせ">サービスに関するお問い合わせ</option>
                                                        <option value="サービスに関するお問い合わせ">技術サポート</option>
                                                        <option value="技術サポート">その他</option>
                                                    </select>
                                                    {errors.inquiryCategory && (
                                                        <span className={styles.errorMessage}>{errors.inquiryCategory}</span>
                                                    )}
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        氏名
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        maxLength={100}
                                                        className={`${styles.inputField} ${errors.name ? styles.error : ""}`}
                                                        placeholder="例) 山田 太郎"
                                                    />
                                                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お電話番号
                                                        <span className={styles.required}>必須</span>
                                                    </label>

                                                    <div className={styles.inputFieldWrapper}>
                                                        <input
                                                            type="text"
                                                            name="phoneNumber1"
                                                            value={formData.phoneNumber1}
                                                            onChange={handleChange}
                                                            maxLength={3}
                                                            placeholder="例) 06"
                                                            className={`${styles.inputField} ${(errors.phoneNumber || errors.phoneNumber1) ? styles.error : ""}`}
                                                        />
                                                        {errors.phoneNumber1 && <span className={styles.errorMessage}>{errors.phoneNumber1}</span>}
                                                        <span className={styles.divider}></span>
                                                        <input
                                                            type="text"
                                                            name="phoneNumber2"
                                                            value={formData.phoneNumber2}
                                                            onChange={handleChange}
                                                            placeholder="例) 6949"
                                                            maxLength={4}
                                                            className={`${styles.inputField} ${(errors.phoneNumber || errors.phoneNumber2) ? styles.error : ""}`}
                                                        />
                                                        {errors.phoneNumber2 && <span className={styles.errorMessage}>{errors.phoneNumber2}</span>}
                                                        <span className={styles.divider}></span>
                                                        <input
                                                            type="text"
                                                            name="phoneNumber3"
                                                            value={formData.phoneNumber3}
                                                            onChange={handleChange}
                                                            maxLength={4}
                                                            placeholder="例) 6949"
                                                            className={`${styles.inputField} ${(errors.phoneNumber || errors.phoneNumber3) ? styles.error : ""}`}
                                                        />

                                                        {errors.phoneNumber3 && <span className={styles.errorMessage}>{errors.phoneNumber3}</span>}
                                                    </div>

                                                    {/* Only show common error if it exists */}
                                                    {errors.phoneNumber && <span className={styles.errorMessage}>{errors.phoneNumber}</span>}
                                                </div>



                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        メールアドレス
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="emailAddress"
                                                        value={formData.emailAddress}
                                                        onChange={handleChange}
                                                        maxLength={250}
                                                        className={`${styles.inputField} ${errors.emailAddress ? styles.error : ""}`}
                                                        placeholder="例) example@genioindia.in"
                                                    />
                                                    {errors.emailAddress && <span className={styles.errorMessage}>{errors.emailAddress}</span>}
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お問い合わせ内容
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <textarea
                                                        name="inquiryContent"
                                                        value={formData.inquiryContent}
                                                        onChange={handleChange}
                                                        maxLength={1000}
                                                        className={`${styles.textareaField} ${errors.inquiryContent ? styles.error : ""}`}
                                                        rows={5}
                                                        placeholder="具体的なお問い合わせ内容をご記入ください"
                                                    />
                                                    {errors.inquiryContent && (
                                                        <span className={styles.errorMessage}>{errors.inquiryContent}</span>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                        {currentStep === 2 && (
                                            <>
                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お問い合わせ種別
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <div className={styles.confirmValue}>{formData.inquiryCategory}</div>
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        氏名
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <div className={styles.confirmValue}>{formData.name}</div>
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お電話番号
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <div className={styles.confirmValue}>{formData.phoneNumber}</div>
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        メールアドレス
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <div className={styles.confirmValue}>{formData.emailAddress}</div>
                                                </div>

                                                <div className={styles.formGroup}>
                                                    <label className={styles.labelField}>
                                                        お問い合わせ内容
                                                        <span className={styles.required}>必須</span>
                                                    </label>
                                                    <div className={styles.confirmValue}>
                                                        {formData.inquiryContent.split("\n").map((line, i) => (
                                                            <span key={i}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <div className={styles.buttonContainer}>
                                            {currentStep === 2 && (
                                                <button type="button" onClick={handleBack} className={styles.backButton}>
                                                    戻る
                                                </button>
                                            )}
                                            <button
                                                type="submit"
                                                className={styles.submitButton}
                                                disabled={disableFlg}
                                                style={{
                                                    pointerEvents: disableFlg ? "none" : "auto",
                                                    opacity: disableFlg ? 0.6 : 1,
                                                }}
                                            >
                                                {currentStep === 1 ? "入力内容を確認" : "送信"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.section>
                    </div>
                </motion.div>
            </div>
            <ScrollTop />
            <Footer />
        </>
    )
}





