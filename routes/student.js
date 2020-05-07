const path = require('path');
const express = require('express');
const router = express.Router();

const studentController = require('../controller/student');

router.get('/',studentController.getPage);
router.post('/hall-ticket',studentController.postHallTicket);
router.post('/viewSchedule',studentController.postViewSchedule);

module.exports = router;