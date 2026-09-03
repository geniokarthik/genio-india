"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "src/app/ja/components/Header";
import Footer from "src/app/ja/components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "src/app/common/styles/Contactus.module.css";
import "../../globals.css";
import ScrollTop from "src/app/common/scrolltop/ScrollTop";
import CryptoJS from "crypto-js";
import SectionDecor from "src/app/common/components/SectionDecor";
import HeroParallaxDecor, { useHeroParallax } from "src/app/common/components/HeroParallaxDecor";
import HeroWaveDivider from "src/app/common/components/HeroWaveDivider";

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
                    alt="Genio Indiaのチーム"
                    className={styles.heroBgImg}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div aria-hidden="true" className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <HeroParallaxDecor x={parallaxX} y={parallaxY} />
                    <p className={styles.heroLabel}>ご相談・ご質問</p>
                    <h1 className={styles.heroTitle}>お問い合わせ</h1>
                    <p className={styles.heroSubtitle}>プロジェクトのご相談・お見積もりなど、下記フォームよりお気軽にお問い合わせください。2営業日以内にご返答いたします。</p>
                </div>
                <HeroWaveDivider />
            </section>

            {/* CONTACT MAIN */}
            <section className={styles.contactMain}>
                {/* Very low density — a handful of slow-moving shapes, not
                    the normal section's full shape count. Against this
                    card's plain white background, anything close to the
                    default count/opacity reads as a pink/red wash instead
                    of individual floating shapes. */}
                <SectionDecor variant="section" density={1.5} />
                <SectionDecor variant="section2" canvas={false} />
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
                                        <span className={`${styles.progressStepLabel} ${styles[s1]}`}>入力</span>
                                    </div>
                                    <div className={`${styles.progressConnector} ${s1 === "done" ? styles.done : ""}`} />
                                    <div className={styles.progressStepRow}>
                                        <span className={`${styles.progressStepNum} ${styles[s2]}`}>{s2 === "done" ? check : "02"}</span>
                                        <span className={`${styles.progressStepLabel} ${styles[s2]}`}>確認</span>
                                    </div>
                                    <div className={`${styles.progressConnector} ${s2 === "done" ? styles.done : ""}`} />
                                    <div className={styles.progressStepRow}>
                                        <span className={`${styles.progressStepNum} ${styles[s3]}`}>{s3 === "done" ? check : "03"}</span>
                                        <span className={`${styles.progressStepLabel} ${styles[s3]}`}>完了</span>
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
