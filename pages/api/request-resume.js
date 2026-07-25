import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OWNER_EMAIL = process.env.RESUME_REQUEST_TO || "joshidanbosi02@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const requesterEmail = email.trim();

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables.");
    return res.status(500).json({ error: "Resume requests are temporarily unavailable." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Resume Requests" <${process.env.GMAIL_USER}>`,
      to: OWNER_EMAIL,
      replyTo: requesterEmail,
      subject: "New resume request from your portfolio",
      text: `${requesterEmail} just requested a copy of your resume from your portfolio site.\n\nReply directly to this email to send it to them.`,
      html: `<p><strong>${requesterEmail}</strong> just requested a copy of your resume from your portfolio site.</p><p>Reply directly to this email to send it to them.</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send resume request email:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
}
