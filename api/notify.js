// Vercel serverless function: relays "notify me" signups to an inbox via IONOS SMTP.
// Required environment variables (set in Vercel project settings, not in this repo):
//   SMTP_HOST   e.g. smtp.ionos.co.uk
//   SMTP_PORT   e.g. 587
//   SMTP_USER   the IONOS mailbox address used to authenticate/send
//   SMTP_PASS   that mailbox's password (or app-specific password)
//   NOTIFY_TO   the address that should receive each signup (defaults to SMTP_USER)
import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method not allowed' });
  }

  const { email } = req.body ?? {};
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'invalid email' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error('notify: missing SMTP configuration');
    return res.status(500).json({ error: 'server not configured' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `Delos site <${SMTP_USER}>`,
      to: NOTIFY_TO || SMTP_USER,
      replyTo: email,
      subject: 'New Delos "notify me" signup',
      text: `${email} signed up to be notified when Delos launches.`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('notify: send failed', err);
    return res.status(502).json({ error: 'send failed' });
  }
}
