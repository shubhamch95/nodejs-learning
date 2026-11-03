function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Order place hua.");
            resolve();
        }, 1000);
    });
}

function makePayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Payment ho gaya");
            resolve();
        }, 1000);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Delivery boy nahi mila.");
        }, 1000);
    });
}

async function main() {
    try {
        await placeOrder();
        await makePayment();
        await deliver();
        console.log("3. Delivery ho gayi");
    } catch (error) {
        console.log("Error: " + error);
    }
}

main();