"use server";

import { transporter, mailOptions } from "@/lib/nodemailer";
import { FormFields } from "@/types";

export default async function submitContactForm(data: FormFields) {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Demo Submission",
      text: `${data.name}\n${data.link}\n${data.instagram}`,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}
