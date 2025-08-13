import nodemailer from "nodemailer";

// Create transporter outside the POST function for better performance
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

async function sendEmail(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_RECIPIENT,
      replyTo: email,
      subject: `Arja.hr - Upit s web stranice`,
      html: `
        <div>
          <p><strong>Novi upit s web stranice:</strong></p>
          <p>Ime: <strong>${name}</strong></p>
          <p>Email: <strong>${email}</strong></p>
          <p>Mobitel: <strong>${phone}</strong></p>
          <p>Poruka: <strong>${message}</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ error: "" });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

export default sendEmail;
