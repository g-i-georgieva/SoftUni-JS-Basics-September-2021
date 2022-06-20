function puppyCare(input) {
    index = 0
    let foodBought = Number(input[index]);
    index++
    let command = input[index];
    index++
    let foodInGrams = foodBought * 1000
    let consumedFood = 0

    while (command !== "Adopted") {
        let foodPerFeed = Number(command)
        consumedFood += foodPerFeed
        command = input[index];
        index++
    }

    if (consumedFood <= foodInGrams) {
        console.log(`Food is enough! Leftovers: ${foodInGrams-consumedFood} grams.`)
    } else {
        console.log(`Food is not enough. You need ${consumedFood-foodInGrams} grams more.`)
    }

}
puppyCare(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"
])
puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
