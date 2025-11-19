import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // Create transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Hostinger email
        pass: process.env.SMTP_PASS, // Your email password
      },
    });

    // Email to you (business owner)
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Where you want to receive messages
      replyTo: email,
      subject: `Nieuw contactformulier bericht van ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            Nieuw Contactformulier Bericht
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #111111;">Contactgegevens</h3>
            <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Interesse in:</strong> ${service}</p>` : ''}
          </div>

          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #111111;">Bericht</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>Dit bericht is verzonden via het contactformulier op jorsite.nl</p>
          </div>
        </div>
      `,
      text: `
Nieuw Contactformulier Bericht

Van: ${firstName} ${lastName}
Email: ${email}
${phone ? `Telefoon: ${phone}` : ''}
${service ? `Interesse in: ${service}` : ''}

Bericht:
${message}
      `,
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Bedankt voor uw bericht - JorSite',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #14f195 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #0a0a0a; margin: 0; font-size: 28px;">JorSite</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #111111; margin-top: 0;">Hallo ${firstName},</h2>
            
            <p style="line-height: 1.6; color: #374151;">
              Bedankt voor uw bericht! We hebben uw aanvraag goed ontvangen en zullen 
              <strong style="color: #10b981;">binnen 24 uur</strong> contact met u opnemen.
            </p>

            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Uw bericht:</strong><br/>
                <span style="color: #374151;">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</span>
              </p>
            </div>

            <p style="line-height: 1.6; color: #374151;">
              Heeft u een dringende vraag? U kunt ons ook direct bereiken via 
              <a href="mailto:${process.env.CONTACT_EMAIL || process.env.SMTP_USER}" style="color: #10b981; text-decoration: none;">
                ${process.env.CONTACT_EMAIL || process.env.SMTP_USER}
              </a>
            </p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Met vriendelijke groet,<br/>
                <strong style="color: #10b981;">Team JorSite</strong>
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p>© ${new Date().getFullYear()} JorSite - Premium Webdesign & Branding</p>
          </div>
        </div>
      `,
      text: `
Hallo ${firstName},

Bedankt voor uw bericht! We hebben uw aanvraag goed ontvangen en zullen binnen 24 uur contact met u opnemen.

Uw bericht:
${message}

Heeft u een dringende vraag? U kunt ons ook direct bereiken via ${process.env.CONTACT_EMAIL || process.env.SMTP_USER}

Met vriendelijke groet,
Team JorSite
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email verzonden!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Er ging iets mis bij het verzenden van de email.' },
      { status: 500 }
    );
  }
}

