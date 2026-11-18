const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Namaste, My First server is working fine.");
});

app.get("/user", (req, res) => {
    res.json({
        name: "Shubham",
        city: "Delhi",
        isDeveloper: true
    });
});

app.listen(3000, () => {
    console.log("Server is running: http://localhost:3000");
});