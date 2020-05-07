const db = require('../util/database');

module.exports = class Student{
    constructor(name, id, branch, year){
        this.name = name;
        this.id = id;
        this.branch = branch;
        this.year = year;
    }

    save(){
        return db.execute('INSERT INTO student (s_name, s_id, s_branch, s_year) VALUES(?,?,(SELECT id FROM branch where b_name = ?),(select id from year where y_name=?))',
        [this.name,this.id,this.branch,this.year]);
    }

    viewStudDetails() {
        return db.execute('SELECT s_name,s_id,b_name,y_name FROM student INNER JOIN branch ON branch.id=student.s_branch INNER JOIN year ON year.id=student.s_year');
    }
    viewBranchDetails() {
        return db.execute('SELECT * FROM branch');
    }
    viewRoomDetails(){
        return db.execute('SELECT * FROM room');
    }
    viewSubjectDetails(){
        return db.execute('SELECT * FROM subject');
    }
    viewRoomName(id){
        return db.execute('select s_name, s_id, b_name, y_name, room_name from student inner join branch on branch.id = student.s_branch inner join year on year.id = student.s_year inner join room on room.id=(select room_id from exam_room where year_id =(select s_year from student where s_id=?) and branch_id = (select s_branch from student where s_id=?)) where s_id = ?;',
        [id,id,id]);
    }
    viewSchedule(id){
        return db.execute("SELECT date_of_exam, TIME_FORMAT(start_time, '%h:%i %p') start_time, TIME_FORMAT(end_time, '%h:%i %p') end_time, sub_name FROM schedule inner join exam on schedule.exam_id = exam.id inner join subject on schedule.sub_id = subject.id where year_id=(select s_year from student where s_id=?) and branch_id=(select s_branch from student where s_id=?);",
        [id,id]);
    }
};