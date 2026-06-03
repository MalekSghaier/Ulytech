const express = require('express');
const router = express.Router();
const { getClients, addClient, deleteClient } = require('../controllers/clientController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getClients);
router.post('/', protect, upload.single('logo'), addClient);
router.delete('/:id', protect, deleteClient);

module.exports = router;