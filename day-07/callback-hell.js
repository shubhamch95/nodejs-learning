setTimeout(() => {
    console.log("1. Order place ho gya.");
    setTimeout(() => {
        console.log("2. Payment ho gaya.");

        setTimeout(() => {
            console.log("3. Delivery ho gayi.!!");
        }, 1000);
    }, 2000);
}, 3000);