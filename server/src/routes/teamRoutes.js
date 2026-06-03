const express = require('express');
const router = express.Router();
const { getTeam, addMember, deleteMember } = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getTeam);
router.post('/', protect, upload.single('image'), addMember);
router.delete('/:id', protect, deleteMember);

module.exports = router;