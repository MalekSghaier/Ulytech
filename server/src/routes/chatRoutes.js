const express = require('express');
const router = express.Router();
const { chat, getConversations, getMessages, deleteConversation } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', chat);
router.get('/conversations', protect, getConversations);
router.get('/conversations/:id/messages', protect, getMessages);
router.delete('/conversations/:id', protect, deleteConversation);

module.exports = router;