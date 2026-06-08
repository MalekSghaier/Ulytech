const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendContact = async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nouveau message de ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <h2>Nouveau message depuis le site UlyTech</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${company ? `<p><strong>Société :</strong> ${company}</p>` : ''}
        <hr/>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.json({ message: 'Message envoyé avec succès' });
  } catch (err) {
    console.error('SMTP error:', err.message);
    res.status(500).json({ message: "Erreur lors de l'envoi" });
  }
};