// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db',
    });
};

/*var connection = mysql.createConnection({
  port: 3306,
  host: "jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qvfqlmyiges8tcjz",
  password: "wq6cfp7ku2qkkfa7",
  database: "zjbtg62d7gn9bg7s"
});*/

//var connection = mysql.createConnection(process.env.JAWSDB_URL);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;