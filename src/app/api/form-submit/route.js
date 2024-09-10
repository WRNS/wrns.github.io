import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";
import formData from "form-data";

const mailgun = new Mailgun(formData);

export async function POST(req) {
  const body = await req.json();
  const { token, data } = body;

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 400 });
  }

  try {
    // Verify the reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verificationUrl, {
      method: "POST",
    });

    const verification = await response.json();

    if (!verification.success) {
      return NextResponse.json({ message: "Invalid reCAPTCHA token" }, { status: 400 });
    }

    // Process form data
    console.log("Form Data:", data);

    // Configure Mailgun
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });

    const mailData = {
      // from: "no_reply@wintonroad.org",
      from: "Test User <mailgun@sandboxa24eb908df8c4683a1947888db18eef5.mailgun.org>",
      to: ["mcurtis2@gmail.com"],
      // to: "operationsmanager@wintonroad.org",
      subject: `New Enquiry from ${data.firstName} ${data.lastName}`,
      text: `
        A new enquiry has been submitted from the Contact page of wintonroad.org.

        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Subject: ${data.subject}
        
        Enquiry: ${data.enquiry}
      `,
    };

    // Send the email
    await mg.messages
      .create(process.env.MAILGUN_DOMAIN, mailData)
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error;

    return NextResponse.json({ message: "Form submitted successfully and email sent" });
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
