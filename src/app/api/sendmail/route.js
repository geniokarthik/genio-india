import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { inquiryCategory, name, phoneNumber, emailAddress, inquiryContent } = await req.json();

        if (!inquiryCategory || !name || !phoneNumber || !emailAddress || !inquiryContent) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const to = "info@genioindia.co.in";
        const subject = inquiryCategory;
        const text = `
            Name: ${name}
            Phone No: ${phoneNumber}
            Email Address: ${emailAddress}
            Inquiry Content: ${inquiryContent}
            `;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
            tls: {
                rejectUnauthorized: false, // 🔥 Fix SSL certificate issue
            },
        });
        
        // Email options
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text, // FIXED
        };

        let info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, message: "Your email has been sent successfully!", info }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Email sending failed", details: error.message }), { status: 500 });
    }
}
