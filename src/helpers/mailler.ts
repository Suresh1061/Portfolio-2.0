import nodemailer from 'nodemailer'

export const sendEmail = async ({ name, email, message }: any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER_ID,
                pass: process.env.PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.USER_ID,
            to: email,
            subject: "Contact Through Portfolio Website",
            html: `<p style={{fontSize:18}}>${message}</p>`
        }
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message)
    }
}
