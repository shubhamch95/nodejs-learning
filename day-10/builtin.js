const os = require("os");
const path = require("path");

console.log(os.platform());
console.log(os.cpus().length);

const filepath = path.join("day-10", "app.js");
console.log(filepath);
console.log(path.basename(filepath));
console.log(path.extname(filepath));