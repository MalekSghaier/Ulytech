const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const teamRoutes = require('./routes/teamRoutes');
const clientRoutes = require('./routes/clientRoutes');
const appRoutes = require('./routes/appRoutes');
const contactRoutes = require('./routes/contactRoutes');
const chatRoutes = require('./routes/chatRoutes');



const path = require('path');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api/clients', clientRoutes);
app.use('/api/apps', appRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);





app.get('/', (req, res) => res.json({ message: 'API UlyTech opérationnelle ✅' }));

module.exports = app;