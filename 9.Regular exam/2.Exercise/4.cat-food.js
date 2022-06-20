function catFood(input) {
    let index = 0
    let numCats = Number(input[index]);
    index++
    let group1=0;
    let group2=0;
    let group3=0
    let foodGrams=0

    for (let i = 0; i <= numCats; i++) {
        let foodPerCat = Number(input[index]);
        index++

        if (foodPerCat >= 100 && foodPerCat < 200) {
            foodGrams+=foodPerCat;
            group1++
        } else if (foodPerCat >= 200 && foodPerCat < 300) {
            foodGrams+=foodPerCat;
            group2++
        } else if (foodPerCat >= 300 && foodPerCat < 400){
            foodGrams+=foodPerCat;
            group3++
        }
    }
    let priceForFood=foodGrams/1000*12.45

    console.log (`Group 1: ${group1} cats.`)
    console.log (`Group 2: ${group2} cats.`)
    console.log (`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${(priceForFood).toFixed(2)} lv.`)

}

catFood((["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"
]))
catFood (["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])
catFood (["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])
