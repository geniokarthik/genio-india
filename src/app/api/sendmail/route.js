import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { inquiryCategory, name, phoneNumber, emailAddress, inquiryContent, companyName } = await req.json();

        if (!inquiryCategory || !name || !phoneNumber || !emailAddress || !inquiryContent) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

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
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "info@genioindia.co.in",
            subject: inquiryCategory,
            text: `
            New Inquiry Received
        
            Hello,
        
            You have received a new inquiry from the website. Please find the details below:
        
            -----------------------------------
            Inquiry Details:
            Name: ${name}
            Phone: ${phoneNumber}
            Email: ${emailAddress}
            Company: ${companyName || "Not provided"}
            
            Message:
            ${inquiryContent}
            -----------------------------------
        
            Sent on: ${new Date().toLocaleString()}
            `,
        };
        let info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, message: "Your email has been sent successfully!", info }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "Email sending failed", details: error.message }), { status: 500 });
    }
}
