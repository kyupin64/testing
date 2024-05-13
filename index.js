const express = require("express");
const app = express();
const port = process.env.port || 5678;

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome home!\n");
});

app.get("/ab?cd", (req, res) => {
    res.send("arrived\n");
});

app.get("/*apple", (req, res) => {
    res.send("cool apple\n");
});

app.get("/students?/:id", (req, res) => {
    res.send(`status: ${process.env.STATUS}\nname: ${req.params.id}\n`);
});

app.post("/newStudent", (req, res) => {
    const firstName = req.body.firstName;
    res.send(`${firstName}`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});