const pool = require('../config/db');
const fs = require('fs');

const getClients = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

const addClient = async (req, res) => {
  const { nom, contact, email, ville, site_web } = req.body;
  if (!nom) return res.status(400).json({ message: 'Nom requis' });
  const logo = req.file ? `/uploads/clients/${req.file.filename}` : null;
  try {
    const result = await pool.query(
      'INSERT INTO clients (nom, contact, email, ville, logo, site_web) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [nom, contact || null, email || null, ville || null, logo, site_web || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const result = await pool.query('SELECT logo FROM clients WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Client introuvable' });
    const logoPath = result.rows[0].logo;
    if (logoPath) {
      const full = '.' + logoPath;
      if (fs.existsSync(full)) fs.unlinkSync(full);
    }
    await pool.query('DELETE FROM clients WHERE id = $1', [req.params.id]);
    res.json({ message: 'Client supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

module.exports = { getClients, addClient, deleteClient };