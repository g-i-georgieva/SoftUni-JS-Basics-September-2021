function touristShop(input) {
    let index = 0
    let budget = Number(input[index]);
    index++
    let command = input[index];
    index++
    let numItems = 0
    let priceItems = 0

    while (command !== "Stop") {
        let currentPrice = Number(input[index]);
        index++
        numItems++

        if (numItems % 3 === 0) {
            currentPrice = currentPrice / 2
        }

        priceItems += currentPrice
        budget -= currentPrice

        command=input[index];
        index++
       

        if (budget<0){
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }
    }

    if (command=="Stop"){
        console.log(`You bought ${numItems} products for ${priceItems.toFixed(2)} leva.`)
    }
    
}
touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"
])
touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"
])