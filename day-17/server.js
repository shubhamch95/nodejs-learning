const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

const checkAuth = (req, res, next) => {
    if (req.query.password === "123") {
        next();
    } else {
        res.status(401).send("Wrong Password");
    }
};

app.get("/secret", checkAuth, (req, res) => {
    res.send("This is a secret Page");
});

app.listen(3000, () => {
    console.log("Server chal raha hai: http://localhost:3000");
});