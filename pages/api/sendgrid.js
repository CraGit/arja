import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "", // Your email where you'll receive emails
      from: "", // your website email address here
      replyTo: req.body.email,
      subject: `Aria.hr - Upit sa web stranice`,
      html: `Ime: <strong>${req.body.name}</strong><br/>
      Email: <strong>${req.body.email}</strong><br/>
      Mobitel: <strong>${req.body.phone}</strong><br/>
      Poruka: <strong>${req.body.message}</strong><br/></div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
