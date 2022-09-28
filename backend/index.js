const express = require('express');
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "ecom"
});

// db.connect(function(err) {
//     if (err) throw err;
//     var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255),username VARCHAR(255),number VARCHAR(255),active BOOL,role VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw "hello"+ err;
//       console.log("Table created");
//     });
//   });

app.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send(err);
            }

            if (result) {
                res.send(result)
            } else {
                res.send({ message: "wrong username/password combination!" })
            }


        }
    );
})

app.listen(port, () => console.log(`listening on port ${port}`))
app.get("/", (req, res) => {
    
    let tableName = 'gfg_table';
    
    // Query to create table
    let query = `CREATE TABLE ${tableName} (
      name VARCHAR(255), address VARCHAR(255))`;
    
    database.query(query, (err, rows) => {
        if(err) return res.status(500)
            .send("Table Creation Failed");
    
        return res.send(
  `Successfully Created Table - ${tableName}`);
    })
  });