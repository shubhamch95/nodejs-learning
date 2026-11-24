const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Shubham" },
  { id: 2, name: "Rajesh" },
  { id: 3, name: "Nitish" }
];

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

app.get("/search", (req, res)=> {
const name = req.quey.name;
const result = users.filter((u)=> {
u.name.toLowerCase().includes(name.toLowerCase())
});
res.json(result);
});

app.listen(3000, () => {
  console.log("Server working fine: http://localhost:3000");
});