function foodForPets(input) {
    let index = 0
    let numDays = Number(input[index])
    index++
    let totalFood = Number(input[index]);
    index++
    let biscuits = 0
    let foodEaten = 0
    let dogEaten=0
    let catEaten=0

    for (let i = 1; i <= numDays; i++) {
        let dogFood = Number(input[index]);
        index++
        foodEaten += dogFood
        dogEaten+=dogFood
        let catFood = Number(input[index])
        index++
        foodEaten += catFood
        catEaten+=catFood

        if ((i % 3) === 0) {
            biscuits += (dogFood + catFood) * 0.1
        }
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${(foodEaten/totalFood*100).toFixed(2)}% of the food has been eaten.`)
    console.log (`${(dogEaten/foodEaten*100).toFixed(2)}% eaten from the dog.`)
    console.log (`${(catEaten/foodEaten*100).toFixed(2)}% eaten from the cat.`)
}
foodForPets([3, 1000, 300, 20, 100, 30, 110, 40])