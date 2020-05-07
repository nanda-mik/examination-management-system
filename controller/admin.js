const Student = require('../models/student');
const Exam = require('../models/examTable');
const Examroom = require('../models/examRoom');
const Schedule = require('../models/schedule');

exports.postLogin = (req, res, next) =>{
    res.render('admin-page',{
        pageTitle:'Admin Page'
    });
};

exports.getAddStudent = (req, res, next) =>{
    res.render('add-student',{
        pageTitle: 'Add student Details'
    });
};

exports.postAddStudent = (req, res, next) =>{
    const name = req.body.name;
    const id = req.body.id;
    const branch = req.body.branch;
    const year = req.body.year;
    const student = new Student(name,id,branch,year);
    student.save()
    .then(()=>{
        res.render('admin-page',{
            pageTitle:'Admin Page'
        });
    })
    .catch(err => console.log(err));
};

exports.viewStudent = (req,res,next) => {
   const student = new Student();
   student.viewStudDetails()
   .then(([rows,fieldData]) => {
       res.render('view-student',{
            data: rows,
            pageTitle: 'Student Details'
       });
   })
   .catch(err => console.log(err));
};

exports.viewBranch = (req,res,next) => {
    const student = new Student();
    student.viewBranchDetails()
    .then(([rows,fieldData])=>{
        res.render('view-branch',{
            data:rows,
            pageTitle:'Branch Details'
        });
    }).catch(err => console.log(err));
};

exports.viewRoom = (req,res,next) => {
    const student = new Student();
    student.viewRoomDetails()
    .then(([rows,fieldData])=>{
        res.render('view-room',{
            data:rows,
            pageTitle:'Room Details'
        });
    }).catch(err => console.log(err));
};

exports.viewSubject = (req,res,next) => {
    const student = new Student();
    student.viewSubjectDetails()
    .then(([rows,fieldData])=>{
        res.render('view-subject',{
            data:rows,
            pageTitle:'Subject Details'
        });
    }).catch(err => console.log(err));
};

exports.getAddExam = (req, res, next) => {
    res.render('add-exam',{
        pageTitle:'Add Exam Details'
    });
};

exports.postAddExam = (req, res, next) => {
    const date = req.body.date;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const exam = new Exam(date,start_time,end_time);
    exam.save()
    .then(()=>{
        res.render('admin-page',{
            pageTitle:'Admin Page'
        });
    })
    .catch(err => console.log(err));
};

exports.viewExam = (req, res, next) => {
    const exam = new Exam();
    exam.viewExamDetails()
    .then(([rows, fieldData]) => {
        res.render('view-exam',{
            pageTitle:'Exam Details',
            data: rows
        });
    })
    .catch(err => console.log(err));
};

exports.getAddExamRoom = (req, res, next) => {
    res.render('add-exam-room',{
        pageTitle:'Assign Exam Rooms'
    });
};

exports.postAddExamRoom = (req, res, next) => {
    const year = req.body.year;
    const branch = req.body.branch;
    const room_name = req.body.room_name;
    const examroom = new Examroom(year,branch,room_name);
    examroom.save()
    .then(()=>{
        res.render('admin-page',{
            pageTitle:'Admin Page'
        });
    })
    .catch(err => console.log(err));
};

exports.viewExamRoom = (req, res, next) => {
    const examroom = new Examroom();
    examroom.viewExamRoomDetails()
    .then(([rows,fieldData])=>{
        res.render('view-exam-room',{
            data:rows,
            pageTitle:'Assigned Exam Rooms'
        });
    })
    .catch();
};

exports.getAddSchedule = (req, res, next) => {
    res.render('add-schedule',{
        pageTitle: 'Assign Schedule'
    });
};

exports.postAddSchedule = (req, res, next) => {
    const year = req.body.year;
    const branch = req.body.branch;
    const sub = req.body.sub;
    const date_of_exam= req.body.date_of_exam;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const schedule = new Schedule(year,branch,sub,date_of_exam,start_time,end_time);
    schedule.save()
    .then(()=>{
        res.render('admin-page',{
            pageTitle:'Admin Page'
        });
    })
    .catch(err => console.log(err));
};

exports.viewSchedule = (req, res, next) => {
    const schedule = new Schedule();
    schedule.viewScheduleDetails()
    .then(([rows, fieldData])=>{
        res.render('view-schedule',{
            data:rows,
            pageTitle:'Schedule'
        });
    })
    .catch(err => console.log(err));
};