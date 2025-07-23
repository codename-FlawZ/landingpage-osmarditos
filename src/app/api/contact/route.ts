import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: NextRequest) {
    const { email, contactType, firstName, lastName, message } = await req.json()

    const content = {
        to: 'contato_osmar.ditos@gmail.com',
        from: 'no-reply@osmarditos.com',
        subject: `Novo contato: ${contactType}`,
        text: `Nome: ${firstName} ${lastName} Email: ${email} Tipo: ${contactType} Mensagem: ${message}`,
    }

    try {
        await sgMail.send(content)
        return NextResponse.json({ sccess: true }, { status: 200 })
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error)
        return NextResponse.json({ error: 'Erro ao enviar a mensagem'}, { status: 500 })
    }
}