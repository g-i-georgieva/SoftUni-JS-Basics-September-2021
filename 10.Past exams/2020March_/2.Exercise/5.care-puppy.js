function careOfPuppy(input) {
    let index = 0;
    let food = Number(input[index]);
    index++
    let foodGrams = food * 1000
    let command = input[index]
    index++
    let totalFeed = 0

    while (command !== "Adopted") {
        let currFeed = Number(command)
        totalFeed += currFeed

        command = input[index];
        index++
    }

    if (totalFeed <= foodGrams) {
        console.log(`Food is enough! Leftovers: ${foodGrams-totalFeed} grams.`)
    }else {
        console.log(`Food is not enough. You need ${totalFeed-foodGrams} grams more.`)
    }
}
careOfPuppy([4, 130, 345, 400, 180, 230, 120, "Adopted"])