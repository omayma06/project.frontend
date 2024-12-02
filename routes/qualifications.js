// qualifications.js

const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, qualificationController.addQualification);
router.put('/:id', authenticateToken, qualificationController.updateQualification);
router.delete('/:id', authenticateToken, qualificationController.deleteQualification);

module.exports = router;
