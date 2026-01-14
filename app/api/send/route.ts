import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ad, soyad, email, hizmet, mesaj } = body;

    // 1. Postacıyı Ayarla
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dagdevirenreinigung25@gmail.com', 
        pass: process.env.GMAIL_PASS, // Vercel'den çekecek
      },
    });

    // 2. Mail İçeriği (Tamamen Almanca)
    const mailOptions = {
      from: '"Dagdeviren Web" <dagdevirenreinigung25@gmail.com>',
      to: 'dagdevirenreinigung25@gmail.com', 
      replyTo: email, 
      // Konu Başlığı Almanca: "Yeni Teklif İsteği" yerine
      subject: `Neue Offertenanfrage: ${ad} ${soyad} - ${hizmet}`, 
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0f172a;">Neue Nachricht vom Kunden! 🎉</h2>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p><strong>Vorname Nachname:</strong> ${ad} ${soyad}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Dienstleistung:</strong> ${hizmet}</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
            <strong>Nachricht des Kunden:</strong><br>
            ${mesaj}
          </div>
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
            Diese Nachricht wurde über das Kontaktformular von Dagdeviren Reinigung gesendet.
          </p>
        </div>
      `,
    };

    // 3. Maili Gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "E-Mail erfolgreich gesendet!" }, { status: 200 });

  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ message: "Fehler beim Senden der E-Mail." }, { status: 500 });
  }
}