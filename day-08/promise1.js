const orderFood = new Promise((resolve, reject)=> {
setTimeout(()=> {
    resolve("Khana taiyar hai.!!");
}, 2000);
});

orderFood.then((message)=> {
console.log(message);
})

console.log("Main wait nahi kr raha");