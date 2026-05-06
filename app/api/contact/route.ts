import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nom, email, telephone, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Dermaglow by Hanane <onboarding@resend.dev>",
      to: "dermaglowbyhanane@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${nom} — Dermaglow`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2D2416;">
          <div style="border-bottom: 2px solid #3D7857; padding-bottom: 16px; margin-bottom: 24px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #3D7857; margin: 0 0 4px;">
              Dermaglow by Hanane
            </p>
            <h1 style="font-size: 22px; margin: 0; font-weight: 600;">Nouveau message reçu</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #6B6052; padding: 10px 0; border-bottom: 1px solid #EDE8DB; width: 30%;">Nom</td>
              <td style="font-size: 14px; padding: 10px 0; border-bottom: 1px solid #EDE8DB;">${nom}</td>
            </tr>
            <tr>
              <td style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #6B6052; padding: 10px 0; border-bottom: 1px solid #EDE8DB;">Courriel</td>
              <td style="font-size: 14px; padding: 10px 0; border-bottom: 1px solid #EDE8DB;">
                <a href="mailto:${email}" style="color: #3D7857;">${email}</a>
              </td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #6B6052; padding: 10px 0; border-bottom: 1px solid #EDE8DB;">Téléphone</td>
              <td style="font-size: 14px; padding: 10px 0; border-bottom: 1px solid #EDE8DB;">${telephone}</td>
            </tr>` : ""}
          </table>

          <div style="background: #EDE8DB; padding: 20px; margin-bottom: 24px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #6B6052; margin: 0 0 10px;">Message</p>
            <p style="font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #9A8E82;">
            Répondez directement à ce courriel pour contacter ${nom}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
