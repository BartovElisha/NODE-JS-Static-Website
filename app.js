const express = require("express");

const app = express();
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./public");

const PORT = 4500;

app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) => { res.render('index');
app.get('', (req, res) => {
    res.render("index");
});

app.get('/test', (req, res) => {
    res.send('The Site is Working...');
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});