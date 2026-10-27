function orderFood(callback) {
    console.log("Order place ho raha hai...");
    setTimeout(() => {
        console.log("Khana ready hai.!!");
    }, 2000);
    callback();
}

function eatFood() {
    console.log("Ab khana kha rahe hain");
}

orderFood(eatFood);