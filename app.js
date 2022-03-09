const express = require('express');
var cors = require('cors')
const app = express();
const port = 8081;
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Express server listening on port ${port}.`));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login', (req, res) => {
    res.cookie('name','Snuffy Airman');
    res.status(200).send(`Cookie name set to: ${req.cookies.name}`);
});

app.get('/hello', (req, res) => {
    res.status(200).send(`<h1>Hello ${req.cookies.name}!</h1>`);
});
