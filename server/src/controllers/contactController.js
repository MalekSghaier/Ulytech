const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendContact = async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ message: 'Nom, email et message requis' });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0f0f12;color:#fff;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#7c3aed,#a855f7);padding:24px 32px;">
        <h2 style="margin:0;font-size:20px;font-weight:600;">Nouveau message — UlyTech</h2>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;width:120px;">Nom</td>
            <td style="padding:10px 0;color:#fff;font-size:14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;">Email</td>
            <td style="padding:10px 0;font-size:14px;"><a href="mailto:${email}" style="color:#a78bfa;">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;">Société</td>
            <td style="padding:10px 0;color:#fff;font-size:14px;">${company}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.05);border-radius:8px;border-left:3px solid #7c3aed;">
          <p style="margin:0 0 8px;color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
          <p style="margin:0;color:#fff;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
        </div>
        <p style="margin-top:24px;color:rgba(255,255,255,0.3);font-size:12px;">
          Reçu le ${new Date().toLocaleDateString('fr-TN', { weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' })}
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"UlyTech Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `✉️ Nouveau message de ${name}${company ? ` — ${company}` : ''}`,
      html,
    });

    res.json({ message: 'Message envoyé avec succès' });
  } catch (err) {
    console.error('Erreur email:', err);
    res.status(500).json({ message: 'Erreur lors de l\'envoi', detail: err.message });
  }
};

module.exports = { sendContact };