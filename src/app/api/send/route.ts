import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: "sureshabantika@gmail.com" });

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
    console.log(name, email, message);
    try {
        const { data, error } = await resend.emails.send({
            from: email,
            to: "sureshabantike@gmail.com",
            subject: "Contact With You Using Portfolio Website",
            react: EmailTemplate({ name, email, message }),
        });
        console.log(data)
        console.log(error)
        if (error) {
            return NextResponse.json(
                {
                    success: false,
                    message: error
                },
                { status: 500 });
        }


        return NextResponse.json(
            {
                success: true,
                message: "Message send successfully"
            },
            { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                success: false,
                message: error
            },
            { status: 500 });
    }
}
