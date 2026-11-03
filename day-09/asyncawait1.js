function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Khana taiyar hai.!!");
        }, 2000);
    });
}

async function main() {
    console.log("Order de diya");
    const message = await orderFood();
    console.log(message);
    console.log("Ab khana kha rahe hain");
}

main();