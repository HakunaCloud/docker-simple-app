const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.EXPR_PORT || 3000;
const FS_PATH = process.env.FS_DIR || '/pippuz';

const LOCAL_FILE = `${FS_PATH}/simple-test-cont-sss`;
let localVar;

app.get('/hello', (req, res) => {
    return res.send({message: "World!"});
});

app.get('/mset', (req, res) => {
    localVar = req.query.q;
    return res.send({value: req.query.q, action: "set"});
});
app.get('/mget', (req, res) => {
    return res.send({value: localVar, action: "get"});
});

app.get('/fset', (req, res) => {
    fs.writeFileSync(LOCAL_FILE, req.query.q);
    return res.send({value: req.query.q, action: "set"});
});
app.get('/fget', (req, res) => {
    return res.send({value: fs.readFileSync(LOCAL_FILE).toString(), action: "get"});
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

process.on('SIGINT', function() {
    process.exit();
});