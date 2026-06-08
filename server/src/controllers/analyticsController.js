const pool = require('../config/db');

const trackVisit = async (req, res) => {
  const { page } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const referrer = req.headers['referer'] || 'direct';

  try {
    // Vérifier si cette IP a déjà visité aujourd'hui
    const existing = await pool.query(
      `SELECT id FROM visits 
       WHERE ip = $1 AND DATE(created_at) = CURRENT_DATE 
       LIMIT 1`,
      [ip]
    );

    // Si déjà enregistré aujourd'hui → ne pas dupliquer
    if (existing.rows.length > 0) {
      return res.json({ ok: true, skipped: true });
    }

    await pool.query(
      'INSERT INTO visits (page, referrer, user_agent, ip) VALUES ($1,$2,$3,$4)',
      [page || '/', referrer, userAgent, ip]
    );

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ message: 'Erreur' });
  }
};

const getStats = async (req, res) => {
  try {
    // Visiteurs des 7 derniers jours
    const visits7days = await pool.query(`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as total,
        COUNT(DISTINCT ip) as uniques
      FROM visits
      WHERE created_at >= NOW() - INTERVAL '7 days'
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `);

    // Visiteurs des 30 derniers jours
    const visits30days = await pool.query(`
      SELECT COUNT(*) as total, COUNT(DISTINCT ip) as uniques
      FROM visits
      WHERE created_at >= NOW() - INTERVAL '30 days'
    `);

    // Total tous les temps
    const totalAll = await pool.query(`
      SELECT COUNT(*) as total, COUNT(DISTINCT ip) as uniques FROM visits
    `);

    // Pages les plus visitées
    const topPages = await pool.query(`
      SELECT page, COUNT(*) as visits
      FROM visits
      GROUP BY page
      ORDER BY visits DESC
      LIMIT 5
    `);

    // Aujourd'hui
    const today = await pool.query(`
      SELECT COUNT(*) as total, COUNT(DISTINCT ip) as uniques
      FROM visits
      WHERE DATE(created_at) = CURRENT_DATE
    `);

    // Hier
    const yesterday = await pool.query(`
      SELECT COUNT(*) as total, COUNT(DISTINCT ip) as uniques
      FROM visits
      WHERE DATE(created_at) = CURRENT_DATE - INTERVAL '1 day'
    `);

    res.json({
      chart7days: visits7days.rows,
      last30days: visits30days.rows[0],
      total: totalAll.rows[0],
      topPages: topPages.rows,
      today: today.rows[0],
      yesterday: yesterday.rows[0],
    });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', detail: err.message });
  }
};

module.exports = { trackVisit, getStats };