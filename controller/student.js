const Student = require('../models/student');

exports.getPage = (req,res,next) => {
    res.render('main-page',{
        pageTitle: 'EMS'   
    });
};

exports.postHallTicket = (req, res, next) => {
    const branch_id = req.body.branch_id;
    const student = new Student();
    student.viewRoomName(branch_id)
    .then(([rows,fieldData])=>{
        res.render('view-studroom',{
            pageTitle:'Student Details',
            data : rows
        });
    })
    .catch(err => console.log(err));
};

exports.postViewSchedule = (req,res,next) => {
    const branch_id = req.body.branch_id;
    const student = new Student();
    student.viewSchedule(branch_id)
    .then(([rows, fieldData])=>{
        res.render('view-examsched',{
            pageTitle:'Exam Schedule',
            data:rows
        });
    })
    .catch(err => console.log(err));
}