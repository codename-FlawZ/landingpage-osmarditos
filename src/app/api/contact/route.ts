import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const { email, contactType, firstName, lastName, message } = await req.json()

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'contato.osmarditosoficial@gmail.com',
            subject: `Novo contato: ${contactType}`,
            text: `
             Nome: ${firstName} ${lastName} 
             Email: ${email} 
             Tipo: ${contactType} 
             Mensagem: ${message}
            `,
        })
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 })
    }
}