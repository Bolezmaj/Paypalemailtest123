const nodemailer = require("nodemailer");

async function sendLicenseEmail(to, licenseKey) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Use Gmail SMTP (or another service)
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.EMAIL_USER, // Load from environment variables
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: `"Your Company" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: "Your License Key - Thank You for Your Purchase",
        text: `Hello,\n\nThank you for your purchase! Your license key is:\n\n${licenseKey}\n\nBest regards,\nYour Company`
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent successfully to: ${to}`);
}

module.exports = sendLicenseEmail;
