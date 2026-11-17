const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("userLoggedIn", (name) => {
    console.log(" Welcome, " + name);

});

emitter.on("userLoggedIn", (name) => {
    console.log("login email bheja gaya " + name + " ko ");

});

console.log("Login hone wala hai...");
emitter.emit("userLoggedIn", "shubham");
console.log("Login ho gaya");