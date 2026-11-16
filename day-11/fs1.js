const fs = require("fs");

fs.writeFileSync("notes.txt", "Namaste, yeh meri pehli file hai");

const data = fs.readFileSync("notes.txt", "utf8");
console.log(data);
