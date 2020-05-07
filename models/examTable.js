const db = require('../util/database');


module.exports = class Exam{
    constructor(date,start_time,end_time){
        this.date = date;
        this.start_time = start_time;
        this.end_time = end_time;
    }

    save(){
        return db.execute('INSERT INTO exam (date_of_exam, start_time, end_time) VALUES(?,?,?)',
        [this.date,this.start_time,this.end_time]);
    }
    viewExamDetails(){
        return db.execute('SELECT * FROM exam');
    }
};