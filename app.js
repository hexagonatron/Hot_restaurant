const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const tableArr = [];
const waitListArr = [];

app.use(express.urlencoded({extended: true}));
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

app.get("/api/tables", (req, res) => {
    res.json(tableArr);
})

app.get("/api/waitlist", (req, res) => {
    res.json(waitListArr);
})

app.delete("/api/clear", (req, res) => {
    res.send();
    tableArr.length = 0;
    waitListArr.length = 0;
})

app.post("/api/reservation", (req, res) => {
    const reservation = req.body;
    if(tableArr.length < 5){
        tableArr.push(reservation);
    } else {
        waitListArr.push(reservation);
    }
    res.send(JSON.stringify(tableArr));
});

app.get("/api/reservation", (req, res) => {
    res.json({
        tables: tableArr,
        waitlist: waitListArr
    })
});