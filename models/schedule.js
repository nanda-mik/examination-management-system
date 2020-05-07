const db = require('../util/database');

module.exports = class Schedule{
    constructor(year,branch,sub,date_of_exam,start_time,end_time){
        this.year = year;
        this.branch = branch;
        this.sub = sub;
        this.date_of_exam = date_of_exam;
        this.start_time = start_time;
        this.end_time = end_time;
    }
    save(){
        return db.execute('INSERT INTO schedule (year_id,branch_id,sub_id,exam_id) VALUES ((SELECT id FROM year WHERE y_name =?),(SELECT id FROM branch WHERE b_name=?),(SELECT id FROM subject WHERE sub_name=?),(SELECT id from exam WHERE date_of_exam=? AND start_time=?))',
        [this.year,this.branch,this.sub,this.date_of_exam,this.start_time]);
    }
    viewScheduleDetails(){
        return db.execute('SELECT y_name,b_name,sub_name,date_of_exam,start_time,end_time FROM schedule INNER JOIN year ON year.id=schedule.year_id INNER JOIN branch ON branch.id=schedule.branch_id INNER JOIN subject ON subject.id=schedule.sub_id INNER JOIN exam ON exam.id=schedule.exam_id');
    }
};