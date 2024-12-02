import { mailUser, passUser } from '@/app/constants';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { to, subject, text } = await req.json();

  // Configura el transporte
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar otros servicios de correo como Yahoo, Outlook, etc.
    auth: {
      user: mailUser,
      pass: passUser,
    },
   tls: { rejectUnauthorized: false, // Desactiva la verificación del certificado
   }
  });

  // Configura las opciones del correo
  const mailOptions = {
    from: mailUser,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado', info });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
