import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OWNER_EMAIL =
  process.env.CONTACT_MESSAGE_TO ||
  process.env.RESUME_REQUEST_TO ||
  "joshidanbosi02@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedMessage = typeof message === "string" ? message.trim() : "";

  if (!trimmedName) {
    return res.status(400).json({ error: "Please enter your name." });
  }

  if (!EMAIL_RE.test(trimmedEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (trimmedMessage.length < 10) {
    return res
      .status(400)
      .json({ error: "Please write a message (at least 10 characters)." });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables.");
    return res.status(500).json({ error: "Messages are temporarily unavailable." });
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
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: OWNER_EMAIL,
      replyTo: trimmedEmail,
      subject: `New message from ${trimmedName} via your portfolio`,
      text: `${trimmedName} (${trimmedEmail}) sent you a message from your portfolio:\n\n${trimmedMessage}\n\nReply directly to this email to respond to them.`,
      html: `<p><strong>${trimmedName}</strong> (${trimmedEmail}) sent you a message from your portfolio:</p><p>${trimmedMessage.replace(
        /\n/g,
        "<br/>"
      )}</p><p>Reply directly to this email to respond to them.</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send contact message email:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
}
