const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', ctrl.getApps);
router.get('/:id', ctrl.getAppById);
router.post('/', protect, upload.fields([{ name: 'screenshots', maxCount: 10 }]), ctrl.addApp);
router.delete('/:id', protect, ctrl.deleteApp);

module.exports = router;