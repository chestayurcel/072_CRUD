const express = require('express');
let mysql = require('mysql2');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chstmysql8',
    database: 'mahasiswa',
    port: 3308
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the MySQL:', err.stack);
        return;
    }
    console.log('Connection Succesfully!');
});

//Buat Method GET dan POST

//GET
app.get('api/users', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            consoler.error('Error executing query:0', err.stack);
            res.status(500).send('Error Fethcing users')
            return;
        }
        res.json(results);
    });
});