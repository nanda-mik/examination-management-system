const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');

router.post('/login',adminController.postLogin);

router.get('/add-student',adminController.getAddStudent);
router.post('/add-student',adminController.postAddStudent);
router.get('/view-student',adminController.viewStudent);

router.get('/view-branch',adminController.viewBranch);
router.get('/view-room',adminController.viewRoom);
router.get('/view-subject',adminController.viewSubject);

router.get('/add-exam',adminController.getAddExam);
router.post('/add-exam',adminController.postAddExam);
router.get('/view-exam',adminController.viewExam);

router.get('/add-exam-room',adminController.getAddExamRoom);
router.post('/add-exam-room',adminController.postAddExamRoom);
router.get('/view-exam-room',adminController.viewExamRoom);

router.get('/add-schedule',adminController.getAddSchedule);
router.post('/add-schedule',adminController.postAddSchedule);
router.get('/view-schedule',adminController.viewSchedule);
module.exports = router;