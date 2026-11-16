const fs = require("fs").promises;

async function main() {
    try {
        await fs.writeFile("todo.txt", "1. Node seekhna\n");
        await fs.appendFile("todo.txt", "2. Git push karna\n ");

        const data = await fs.readFile("todo.txt", "utf8");
        console.log(data);
        await fs.readFile("nahi-hai.txt", "utf8");
    } catch (error) {
        console.log("Error:" + error.message);

    }
}

main();