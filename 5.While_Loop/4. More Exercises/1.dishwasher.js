function dishwasher(input) {
    let index = 0;
    let detergent = Number(input[index]);
    index++
    let comment = input[index];
    index++
    let detergentInLiters = detergent * 750
    let currentDishes = 0;
    let currentPods = 0
    let counter = 0

    while (comment !== "End") {
        let currentQuantity = Number(comment);
        counter++

        if (counter % 3 !== 0) {
            currentDishes += currentQuantity
            detergentInLiters -= currentQuantity * 5
        } else {
            detergentInLiters -= currentQuantity * 15
            currentPods += currentQuantity
        }

        if (detergentInLiters < 0) {
            break;
        }

        comment = input[index];
        index++
    }

    if (detergentInLiters < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergentInLiters)} ml. more necessary!`)
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${currentDishes} dishes and ${currentPods} pots were washed.`)
        console.log(`Leftover detergent ${detergentInLiters} ml.`)
    }
}
dishwasher([2, 53, 65, 55, "End"])
dishwasher([1, 10, 15, 10, 12, 13, 30])