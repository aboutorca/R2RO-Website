import type { VercelRequest, VercelResponse } from "vercel";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const RECEIVER = process.env.BOOKING_RECEIVER_EMAIL ?? "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method Not Allowed" });
  }

  const { name, email, phone, address, problem, preferredTime } = req.body ?? {};

  // Basic validation
  if (![name, email, phone, address, problem].every(Boolean)) {
    return res.status(400).json({ ok: false, message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "R2RO Booking <booking@resend.dev>", // works without DNS
      to: RECEIVER,
      subject: `New Service Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
        <p><strong>Description:</strong><br/>${(problem || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send failed", err);
    return res.status(500).json({ ok: false, message: "Failed to send email" });
  }
}
