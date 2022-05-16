//Mysql
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to db
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})


//create table
// sql= 'CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)';
// db.run(sql);

//Drop table
// db.run("DROP TABLE users");

//Insert data into table
// sql = 'INSERT INTO users(first_name,last_name,username,password,email) VALUES(?,?,?,?,?)';
// db.run(
//     sql,
//     ["don","don","don_don_don","hehe","don24@gmail.com"], (err) => {
//     if (err) return console.error(err.message);
// })

//upate the data
// sql = 'UPDATE users SET first_name =? WHERE id = ?';
// db.run(sql,["PRASHANT",1], (err)=>{
//     if (err) return console.error(err.message);
// })

//delete users
// sql = 'DELETE FROM users WHERE id = ?';
// db.run(sql,[1], (err)=>{
//     if (err) return console.error(err.message);
// })


//query the data
sql = 'SELECT * FROM users';
db.all(sql,[],(err,rows) => {
    if (err) return console.error(err.message);
    rows.forEach(row => {
        console.log(row);
    })
})



