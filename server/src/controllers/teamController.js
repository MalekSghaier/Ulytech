const pool = require('../config/db');
const fs = require('fs');

const getTeam = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM team ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

const addMember = async (req, res) => {
  const { nom, role, linkedin, bio } = req.body;
  if (!nom || !role) return res.status(400).json({ message: 'Nom et rôle requis' });

  const image = req.file ? `/uploads/team/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      'INSERT INTO team (nom, role, image, linkedin, bio) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [nom, role, image, linkedin || null, bio || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

const deleteMember = async (req, res) => {
  try {
    const result = await pool.query('SELECT image FROM team WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Membre introuvable' });

    const imagePath = result.rows[0].image;
    if (imagePath) {
      const fullPath = '.' + imagePath;
      if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    }

    await pool.query('DELETE FROM team WHERE id = $1', [req.params.id]);
    res.json({ message: 'Membre supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

module.exports = { getTeam, addMember, deleteMember };