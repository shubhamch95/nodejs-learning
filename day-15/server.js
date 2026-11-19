const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.json({
        message: "User Found",
        name: req.body.name
    });
});

app.listen(3000, () => {
    console.log("Server is running: http://localhost:3000");

});