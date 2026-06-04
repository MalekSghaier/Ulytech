const pool = require('../config/db');
const fs = require('fs');

const getApps = async (req, res) => {
  try {
    const apps = await pool.query('SELECT * FROM applications ORDER BY created_at DESC');
    const screenshots = await pool.query('SELECT * FROM app_screenshots ORDER BY app_id, ordre');

    const isAdmin = req.headers.authorization?.startsWith('Bearer ');

    const result = apps.rows.map(app => {
      const data = {
        ...app,
        screenshots: screenshots.rows.filter(s => s.app_id === app.id),
      };
      if (!isAdmin) delete data.url_repo;
      return data;
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};


const getAppById = async (req, res) => {
  try {
    const app = await pool.query('SELECT * FROM applications WHERE id = $1', [req.params.id]);
    if (!app.rows.length) return res.status(404).json({ message: 'Introuvable' });
    const screenshots = await pool.query(
      'SELECT * FROM app_screenshots WHERE app_id = $1 ORDER BY ordre',
      [req.params.id]
    );
    res.json({ ...app.rows[0], screenshots: screenshots.rows });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const addApp = async (req, res) => {
  const { nom, description, url_site, url_repo, categorie, technologies, statut } = req.body;
  if (!nom) return res.status(400).json({ message: 'Nom requis' });

  const techArray = technologies
    ? (typeof technologies === 'string' ? technologies.split(',').map(t => t.trim()) : technologies)
    : [];

  try {
    const result = await pool.query(
      `INSERT INTO applications (nom, description, url_site, url_repo, categorie, technologies, statut)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [nom, description || null, url_site || null, url_repo || null,
       categorie || null, techArray, statut || 'production']
    );
    const app = result.rows[0];

    if (req.files?.screenshots) {
      for (let i = 0; i < req.files.screenshots.length; i++) {
        const file = req.files.screenshots[i];
        await pool.query(
          'INSERT INTO app_screenshots (app_id, image, ordre) VALUES ($1,$2,$3)',
          [app.id, `/uploads/apps/${file.filename}`, i]
        );
      }
    }

    const screenshots = await pool.query('SELECT * FROM app_screenshots WHERE app_id = $1', [app.id]);
    res.status(201).json({ ...app, screenshots: screenshots.rows });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

const deleteApp = async (req, res) => {
  try {
    const screenshots = await pool.query('SELECT image FROM app_screenshots WHERE app_id = $1', [req.params.id]);
    screenshots.rows.forEach(s => {
      const full = '.' + s.image;
      if (fs.existsSync(full)) fs.unlinkSync(full);
    });
    await pool.query('DELETE FROM applications WHERE id = $1', [req.params.id]);
    res.json({ message: 'Application supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { getApps, getAppById, addApp, deleteApp };