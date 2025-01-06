import {mailReceptor, mailUser, passUser } from '@/app/constants';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const {name, phone, email, subject, text } = await req.json();

  // Configura el transporte
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
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
    to: mailReceptor,
    subject: subject,
    html:  `<div>
              <h3>Recibiste una nueva consulta desde el Formulario web:</h3></br>
              <h5><strong>${name}</strong> te pregunta: ❝${text}❞</h5><br/>
              <h5>Teléfono: ${phone}</h5><br/>
              <h5>Remitente: <a href="mailto:${email}">${email}</a></h5>
            </vid>
            `,
  };

  try {
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado', enviado : true, info });
  } catch (error) {
    return NextResponse.json({ enviado : false, error: error.message }, { status: 500 });
  }
}
