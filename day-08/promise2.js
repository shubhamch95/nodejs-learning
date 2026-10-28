function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Order place hua.");
            resolve();
        }, 1000);
    })
}

function makepayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Payment ho gaya");
            resolve();
        }, 2000);
    })
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Delivery boy nahi mila");
        }, 3000);
    });
}

placeOrder()
.then(() => makepayment())
.then(()=> deliver())
.then(()=> console.log("3. Delivery ho gayi"))
.catch((error)=> console.log("Error: " + error));