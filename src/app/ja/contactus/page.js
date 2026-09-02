"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "src/app/common/styles/Contactus.module.css";
import "../../globals.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import CryptoJS from "crypto-js";

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
        if (!formData.inquiryCategory) newErrors.inquiryCategory = "お問い合わせ種別を選択してください";
        if (!formData.name) newErrors.name = "氏名を入力してください";
        if (!formData.phoneNumber) newErrors.phoneNumber = "電話番号を入力してください";
        else if (!/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = "数字のみ入力してください";
        else if (formData.phoneNumber.length < 10) newErrors.phoneNumber = "電話番号は10桁以上入力してください";
        if (!formData.emailAddress) newErrors.emailAddress = "メールアドレスを入力してください";
        else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "正しいメールアドレスを入力してください";
        if (!formData.inquiryContent) newErrors.inquiryContent = "お問い合わせ内容を入力してください";
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
                    const response = await fetch("/api/sendmail/japanesemail", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "x-api-key": encryptedKey },
                        body: JSON.stringify(formDataCopy),
                    });
                    const text = await response.text();
                    const data = JSON.parse(text);
                    if (data.success) {
                        alert(data.message);
                        setDisableFlg(false);
                        setFormData({ inquiryCategory: "", companyName: "", name: "", phoneNumber: "", emailAddress: "", inquiryContent: "" });
                        setCheckFlg(false);
                        setCompletedFlg(true);
                    } else {
                        alert("不正なリクエストです");
                        setFormData({ inquiryCategory: "", companyName: "", name: "", phoneNumber: "", emailAddress: "", inquiryContent: "" });
                        setButtonFlg(false);
                    }
                    setDisableFlg(false);
                }
            } catch (error) {
                alert("送信中にエラーが発生しました: " + error);
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

    useEffect(() => { setIsClient(true); }, []);

    if (!isClient) return null;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo:wght@700;800;900&display=swap" rel="stylesheet" />
            <Header />

            {/* PAGE HERO */}
            <section className={styles.pageHero}>
                <div className={styles.heroWrap}>
                    <p className={styles.heroEyebrow}>お問い合わせ</p>
                    <h1 className={styles.heroH1}><span>Contact Us</span></h1>
                    <p className={styles.heroSub}>プロジェクトのご相談・お見積もりなど、下記フォームよりお気軽にお問い合わせください。2営業日以内にご返答いたします。</p>
                    <div className={styles.progress}>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${inputFlg ? styles.active : styles.inactive}`}>01</span>
                            <span className={inputFlg ? styles.stepLabel : styles.instepLabel}>入力</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${checkFlg ? styles.active : styles.inactive}`}>02</span>
                            <span className={checkFlg ? styles.stepLabel : styles.instepLabel}>確認</span>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <span className={`${styles.stepNumber} ${completedFlg ? styles.active : styles.inactive}`}>03</span>
                            <span className={completedFlg ? styles.stepLabel : styles.instepLabel}>完了</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT MAIN */}
            <section className={styles.contactMain}>
                <div className={styles.heroWrap}>
                    <div className={styles.contactInner}>

                        {/* FORM CARD */}
                        <div className={styles.formCard}>
                            {!completedFlg ? (
                                <>
                                    <h2 className={styles.formCardTitle}>ご質問・ご相談フォーム</h2>
                                    <p className={styles.formCardSub}><span style={{ color: "#e22110" }}>*</span> は必須項目です。</p>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>お問い合わせ種別<span className={styles.required}>*</span></label>
                                            {!buttonFlg ?
                                                <select name="inquiryCategory" value={formData.inquiryCategory} onChange={handleChange}
                                                    className={`${styles.formSelect} ${errors.inquiryCategory ? styles.error : ""}`}>
                                                    <option value="">-- 選択してください --</option>
                                                    <option value="一般的なお問い合わせ">一般的なお問い合わせ</option>
                                                    <option value="サービスに関するお問い合わせ">サービスに関するお問い合わせ</option>
                                                    <option value="技術サポート">技術サポート</option>
                                                    <option value="その他">その他</option>
                                                </select>
                                                :
                                                <input disabled type="text" name="inquiryCategory" value={formData.inquiryCategory} className={styles.formInput} />
                                            }
                                            {errors.inquiryCategory && <span className={styles.errMsg}>{errors.inquiryCategory}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>会社名</label>
                                            <input disabled={buttonFlg} type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={styles.formInput} placeholder="株式会社ジェニオ" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>氏名<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="text" name="name" value={formData.name} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.name ? styles.error : ""}`} placeholder="山田 太郎" />
                                            {errors.name && <span className={styles.errMsg}>{errors.name}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>電話番号<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.phoneNumber ? styles.error : ""}`} placeholder="09012345678" />
                                            {errors.phoneNumber && <span className={styles.errMsg}>{errors.phoneNumber}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>メールアドレス<span className={styles.required}>*</span></label>
                                            <input disabled={buttonFlg} type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange}
                                                className={`${styles.formInput} ${errors.emailAddress ? styles.error : ""}`} placeholder="hello@genioindia.co.in" />
                                            {errors.emailAddress && <span className={styles.errMsg}>{errors.emailAddress}</span>}
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.formLabel}>お問い合わせ内容<span className={styles.required}>*</span></label>
                                            <textarea disabled={buttonFlg} name="inquiryContent" value={formData.inquiryContent || ""}
                                                onChange={handleChange} rows={5}
                                                className={`${styles.formTextarea} ${errors.inquiryContent ? styles.error : ""}`}
                                                placeholder="プロジェクトやご相談内容を具体的にご記入ください..." />
                                            {errors.inquiryContent && <span className={styles.errMsg}>{errors.inquiryContent}</span>}
                                        </div>
                                        <div className={styles.formActions}>
                                            {checkFlg && (
                                                <button type="button" onClick={handleBack} disabled={disableFlg} className={styles.backButton}>
                                                    ← 戻る
                                                </button>
                                            )}
                                            <button type="submit" className={styles.submitButton} disabled={disableFlg}
                                                style={{ pointerEvents: disableFlg ? "none" : "auto", opacity: disableFlg ? 0.6 : 1 }}>
                                                {inputFlg ? "確認 →" : "送信"}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className={styles.thankyouWrap}>
                                    <div className={styles.thankyouIcon}>✉️</div>
                                    <h1 className={styles.thankyouTitle}>ありがとうございます！</h1>
                                    <p className={styles.thankyouMsg}>
                                        この度はGenio India Software Pvt. Ltd.にお問い合わせいただき誠にありがとうございます。<br /><br />
                                        お問い合わせいただきました内容を確認後、ご記入いただいたメールアドレス宛に2営業日以内にご連絡いたします。
                                    </p>
                                    <Link href="/ja" className={styles.homeBtn}>← ホームへ戻る</Link>
                                </div>
                            )}
                        </div>

                        {/* SIDEBAR */}
                        <aside className={styles.infoSidebar}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoCardTitle}>お問い合わせ情報</h3>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>所在地</p>
                                        <p className={styles.infoValue}>Namakkal, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>メールアドレス</p>
                                        <p className={styles.infoValue}>info@genioindia.co.in</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>会社名</p>
                                        <p className={styles.infoValue}>Genio India Software Pvt. Ltd.</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    </span>
                                    <div>
                                        <p className={styles.infoLabel}>返答期間</p>
                                        <p className={styles.infoValue}>2営業日以内</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mapCard}>
                                <iframe title="Genio India の所在地" className={styles.mapFrame}
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
