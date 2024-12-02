// jobRequests.js

const express = require('express');
const router = express.Router();
const jobRequestController = require('../controllers/jobRequestController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, jobRequestController.addJobRequest);
router.put('/:id', authenticateToken, jobRequestController.updateJobRequest);
router.delete('/:id', authenticateToken, jobRequestController.deleteJobRequest);

module.exports = router;
