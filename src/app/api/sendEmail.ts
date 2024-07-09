import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, message } = await req.json();
        console.log(name, email, message);
        // const { data, error } = await resend.emails.send({
        //     from: email,
        //     to: "sureshabantika@gmail.com",
        //     subject: "Contact Through Portfolio Website",
        //     react: EmailTemplate({ name, email, message })
        // });

        // if (error) {
        //     console.log(error);
        // }
        // console.log(data)
    } catch (error) {
        console.error('error sending verification email', error)
    }
}