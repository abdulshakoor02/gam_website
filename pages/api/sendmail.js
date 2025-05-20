import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { fullname, email, destination, ext, mobile, age, education } =
        JSON.parse(req.body);

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_CONFIG, // Example for SendGrid
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USERNAME, // SendGrid user
          pass: process.env.MAIL_APP_PASSWORD, // SendGrid API key
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.MAIL_USERNAME, // Sender email address
          to: email, // Recipient email address
          subject: `New Contact Form Submission from ${fullname}`,
          text: `
                    Name: ${fullname}
                    Email: ${email}
                    Message: ${mobile}
                `,
          html: `
                    <p><strong>Name:</strong> ${fullname}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${ext}${mobile}</p>
                `,
          replyTo: email, // Set reply-to to the sender's email
        });

        return res
          .status(200)
          .json({ success: true, message: "Email sent successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          success: false,
          message: "Failed to send email.",
          error: error.message,
        });
      }
    } else {
      // Handle any non-POST requests
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`${err}`);
  }
}
