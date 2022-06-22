function easterBake(input) {
    let index = 0
    let numEasterBake = Number(input[index]);
    index++
    let maxFlour = Number.MIN_SAFE_INTEGER
    let maxSugar = Number.MIN_SAFE_INTEGER
    let quantityFlour = 0
    let quantitySugar = 0

    for (let i = 0; i < numEasterBake; i++) {
        let currentSugar = Number(input[index])
        index++
        let currentFlour = Number(input[index]);
        index++

        quantityFlour += currentFlour
        quantitySugar += currentSugar

        if (currentFlour > maxFlour) {
            maxFlour = currentFlour
        }
        if (currentSugar > maxSugar) {
            maxSugar = currentSugar
        }
    }
    console.log(`Sugar: ${Math.ceil(quantitySugar/950)}`)
    console.log(`Flour: ${Math.ceil(quantityFlour/750)}`)
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
}
easterBake([4, 500, 350, 560, 430, 600, 345, 578, 543])