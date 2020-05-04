const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const tableArr = [];
const waitListArr = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});




app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.post("/reserve", (req, res) => {
    const body = req.body;
    res.sendFile(path.join(__dirname, "reserve.html"));
    console.log(body);
})