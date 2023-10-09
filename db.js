const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: 3306,
    database: 'backend',
    user: 'root',
    password:''
    
};

const conn = mysql.createConnection(config);

conn.connect((err) =>{
    if (err) {
        console.log("ERROR OCURRED WHILE CONNECTING TO MYSQL DATABASSE.", err);
    } else {
        console.log("CONNECTION WITH MYSQL DATABASE CREATED SUCCESSFULLY.");
    }
});

module.exports = conn;