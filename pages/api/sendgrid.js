import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const [year, month, day] = req.body.date.split("-");
    const formatiraniDatum = `${day}/${month}/${year}`;
    const fleksibilanDatum =
      req.body.isFlexible === true ? "Fleksibilan" : "Nije fleksibilan";
    await sendgrid.send({
      to: "crashaw@gmail.com", // Your email where you'll receive emails
      from: "hello@explore.hr", // your website email address here
      replyTo: req.body.email,
      subject: `Explore.hr - Upit sa web stranice`,
      html: `Ime: <strong>${req.body.name}</strong><br/>
      Email: <strong>${req.body.email}</strong><br/>
      Mobitel: <strong>${req.body.phone}</strong><br/>
      Datum: <strong>${formatiraniDatum}</strong><br/>
      Fleksibilan datum: <strong>${fleksibilanDatum}</strong><br/>
      Izlet: <strong>${req.body.activitySelectedUrl}</strong><br/>
      Broj ljudi: <strong>${req.body.people}</strong><br/>
      Poruka: <strong>${req.body.message}</strong><br/></div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
