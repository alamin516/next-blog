import nodemailer from "nodemailer";

export async function SendEmail(EmailTo, EmailText, EmailSubject) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "alaminduc516@gmail.com",
                pass: "ixwdxtqkwkpqnddz",
            },
            tls: { rejectUnauthorized: false },
        });

        const mailOptions = {
            from: 'Blog Portal <alaminduc516@gmail.com>',
            to: EmailTo,
            subject: EmailSubject,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Blog Portal OTP</title>
                <style>
                    /* Fonts */
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
            
                    /* Styles */
                    body {
                        font-family: 'Roboto', sans-serif;
                        margin: 0;
                        padding: 0;
                    }
            
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 40px 20px;
                        border-radius: 8px;
                        background-color: #f8f8f8;
                    }
            
                    .header {
                        text-align: center;
                        margin-bottom: 30px;
                    }
            
                    .header h1 {
                        margin: 0;
                        color: #333333;
                    }
            
                    .content {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                    }
            
                    .content p {
                        margin: 0;
                        color: #666666;
                    }
            
                    .content h2 {
                        margin: 10px 0;
                        color: #333333;
                    }
            
                    .footer {
                        text-align: center;
                        margin-top: 40px;
                        color: #666666;
                    }
            
                    .footer p {
                        margin: 0;
                    }
            
                    .logo {
                        max-width: 100px;
                        display: block;
                        margin: 0 auto;
                    }
                </style>
            </head>
            
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Our Blog Portal!</h1>
                        <h3>Email Verification Code</h3>
                
                    </div>
                    <div class="content">
                        <p>Your OTP code is:</p>
                        <h2>${EmailText}</h2>
                    </div>
                    <div class="footer">
                        <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
                        <p>Company Name</p>
                        <p>123 Street, City, Country</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                </div>
            </body>
            
            </html>
            
            `,
        };

        return await transporter.sendMail(mailOptions);

    } catch (error) {
        console.error("Error:", error);
    }
}
