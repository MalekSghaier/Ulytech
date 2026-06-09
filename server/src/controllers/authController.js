const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
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


// ÉTAPE 1 — Demande de reset
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email requis' });

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      // On ne révèle pas si l'email existe ou non (sécurité)
      return res.json({ message: 'Si cet email existe, un lien a été envoyé.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 1000 * 60 * 30); // 30 minutes

    await pool.query(
      'UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE email = $3',
      [token, expires, email]
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    await transporter.sendMail({
      from: `"UlyTech" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Réinitialisation de votre mot de passe',
      html: `
        <h2>Réinitialisation du mot de passe</h2>
        <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
        <a href="${resetLink}" style="
          display:inline-block;padding:12px 24px;
          background:#7c3aed;color:white;
          border-radius:8px;text-decoration:none;font-weight:bold;
        ">Réinitialiser mon mot de passe</a>
        <p style="color:#999;margin-top:16px;">Ce lien expire dans 30 minutes.</p>
        <p style="color:#999;">Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
      `,
    });

    res.json({ message: 'Si cet email existe, un lien a été envoyé.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// ÉTAPE 2 — Nouveau mot de passe
const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  if (!token || !password) return res.status(400).json({ message: 'Données manquantes' });

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE reset_token = $1 AND reset_token_expires > NOW()',
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Lien invalide ou expiré' });
    }

    const hashed = await bcrypt.hash(password, 10);

    await pool.query(
      'UPDATE users SET mot_de_passe = $1, reset_token = NULL, reset_token_expires = NULL WHERE reset_token = $2',
      [hashed, token]
    );

    res.json({ message: 'Mot de passe mis à jour avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Inscription
const register = async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;

  if (!nom || !email || !mot_de_passe)
    return res.status(400).json({ message: 'Tous les champs sont requis' });

  try {
    const existe = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existe.rows.length > 0)
      return res.status(409).json({ message: 'Email déjà utilisé' });

    const hash = await bcrypt.hash(mot_de_passe, 12);
    const result = await pool.query(
      'INSERT INTO users (nom, email, mot_de_passe) VALUES ($1, $2, $3) RETURNING id, nom, email',
      [nom, email, hash]
    );

    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({ message: 'Compte créé', token, user });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

// Connexion
const login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  if (!email || !mot_de_passe)
    return res.status(400).json({ message: 'Email et mot de passe requis' });

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0)
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

    const user = result.rows[0];
    const valide = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!valide)
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({
      message: 'Connexion réussie',
      token,
      user: { id: user.id, nom: user.nom, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

// Profil (route protégée)
const getProfile = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nom, email, role, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { register, login, getProfile, forgotPassword, resetPassword };