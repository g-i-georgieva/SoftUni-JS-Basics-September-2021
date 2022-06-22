function easterShop(input) {
    let index = 0
    let startEggs = Number(input[index]);
    index++
    let command = input[index];
    index++
    let soldEggs = 0

    while (command !== "Close") {
        let currentAction = command;
        let currentQuantity = Number(input[index]);
        index++

        if (currentAction === "Buy" && startEggs >= currentQuantity) {
            startEggs -= currentQuantity;
            soldEggs += currentQuantity
        } else if (currentAction === "Buy" && startEggs < currentQuantity) {
            console.log(`Not enough eggs in store!`)
            console.log(`You can buy only ${startEggs}.`)
            return;
        }
        if (currentAction === "Fill") {
            startEggs += currentQuantity
        }

        command = input[index];
        index++
    }

    console.log(`Store is closed!`);
    console.log(`${soldEggs} eggs sold.`)
}
easterShop([13, "Buy", 8, "Fill", 3, "Buy", 10])