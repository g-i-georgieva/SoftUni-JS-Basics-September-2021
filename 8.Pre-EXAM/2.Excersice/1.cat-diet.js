function catDiet(input) {
    let fatPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbsPercent = Number(input[2]);
    let calorieTotal = Number(input[3]);
    let waterPercent = Number(input[4]);

    let fatGrams=calorieTotal*fatPercent/9
    let proteinGrams=proteinPercent*calorieTotal/4
    let carbsGrams=carbsPercent*calorieTotal/4
    let foodGrams=fatGrams+proteinGrams+carbsGrams

    let caloriesPerGram=calorieTotal/foodGrams
    let caloriesNoWater=caloriesPerGram-(caloriesPerGram*waterPercent/100)

    console.log((caloriesNoWater*100).toFixed(4))
}
catDiet(["60",
    "25",
    "15",
    "2500",
    "60"
])
catDiet(["40",
"40",
"20",
"3000",
"40"])
catDiet (["20",
"60",
"20",
"1800",
"50"])
