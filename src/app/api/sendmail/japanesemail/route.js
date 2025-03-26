import nodemailer from "nodemailer";
import CryptoJS from "crypto-js";

export async function POST(req) {
    try {
        const { inquiryCategory, name, phoneNumber, emailAddress, inquiryContent, companyName } = await req.json();
        const apiKey = req.headers.get('x-api-key');
        const secretKey = "user-defined-secret"; 
        const decryptedKey = CryptoJS.AES.decrypt(apiKey, secretKey).toString(CryptoJS.enc.Utf8);

        // 🔹 API Key Validation
        if (!decryptedKey || decryptedKey !== process.env.CONTACT_API_KEY) {
            return Response.json(
                { success: false, message: "認証に失敗しました。無効なリクエストです。" }, 
                { status: 403 }
            );
        }

        // 🔹 Check Required Fields
        if (!inquiryCategory || !name || !phoneNumber || !emailAddress || !inquiryContent) {
            return Response.json(
                { success: false, message: "必須項目が不足しています。" }, 
                { status: 400 }
            );
        }

        // 🔹 Email Configuration
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
            tls: {
                rejectUnauthorized: false,
            },
        });

        // 🔹 Email Content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "kavinesh@genioindia.co.in",
            subject: inquiryCategory,
            text: `
            新しいお問い合わせを受け取りました
            
            こんにちは、
            
            ウェブサイトから新しいお問い合わせが届きました。詳細は以下の通りです：
            
            -----------------------------------
            お問い合わせ詳細:
            お名前: ${name}
            電話番号: ${phoneNumber}
            メールアドレス: ${emailAddress}
            会社名: ${companyName || "提供なし"}
            
            メッセージ:
            ${inquiryContent}
            -----------------------------------
            
            送信日時: ${new Date().toLocaleString()}
            `,
        };

        // 🔹 Send Email
        let info = await transporter.sendMail(mailOptions);

        return Response.json(
            { success: true, message: "お問い合わせが正常に送信されました！", info }, 
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { success: false, message: "メールの送信に失敗しました。もう一度お試しください。", details: error.message }, 
            { status: 500 }
        );
    }
}
