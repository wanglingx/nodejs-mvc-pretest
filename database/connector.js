const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'annisa-mvc',
    port: 3306,
    user: 'root',
    password: '',
});

connect.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Database Connected !");
    }
});
module.exports = connect;