const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
})

con.connect(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('connect');
  }
})