const db = require('../util/database');

module.exports = class Examroom{
    constructor(year,branch,room_name){
        this.year = year;
        this.branch = branch;
        this.room_name = room_name;
    }
    save(){
        return db.execute('INSERT INTO exam_room(year_id, branch_id, room_id) VALUES ((SELECT id FROM year WHERE y_name= ?),(SELECT id from branch WHERE b_name=?),(SELECT id FROM room WHERE room_name=?))',
        [this.year,this.branch,this.room_name]);
    }
    viewExamRoomDetails(){
        return db.execute('SELECT y_name,b_name,room_name FROM exam_room INNER JOIN year ON year.id=exam_room.year_id INNER JOIN branch ON branch.id=exam_room.branch_id INNER JOIN room ON room.id= exam_room.room_id');
    }
};