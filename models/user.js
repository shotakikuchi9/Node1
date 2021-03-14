const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shota0925',
  database: 'users'
})
con.connect(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('connect');
  }
}) 
module.exports = {
  createUser: function(userData) {
    const sql = "INSERT INTO users(name, email, password) VALUES(?,?,?)"
    const data = [userData.name, userData.email, userData.password]
    con.query(sql, data, function(err, result, fields) {
      if(err) throw err;
      console.log(result);
    })
  }
}
