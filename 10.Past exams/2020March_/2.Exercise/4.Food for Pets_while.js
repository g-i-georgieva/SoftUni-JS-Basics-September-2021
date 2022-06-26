function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let foodQuantity = Number(input[index]);
    index++;
    let dogQuantity = Number(input[index]);
    index++;
    let catQuantity = Number(input[index]);
    index++;
    let currentDay = 1;
    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;
 
    while (currentDay <= days) {
        if (currentDay % 3 == 0) {
            biscuits += (dogQuantity + catQuantity) * 0.1;
        }
 
        dogFood += dogQuantity;
        catFood += catQuantity;
        dogQuantity = Number(input[index]);
        index++;
        catQuantity = Number(input[index]);
        index++;
        currentDay++;
    }
 
    let total = dogFood + catFood;
    let dogP = ((dogFood / total) * 100).toFixed(2);
    let catP = ((catFood / total) * 100).toFixed(2);
    let totalP = ((total / foodQuantity) * 100).toFixed(2);
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalP}% of the food has been eaten.`);
    console.log(`${dogP}% eaten from the dog.`);
    console.log(`${catP}% eaten from the cat.`);
}
solve([3, 1000, 300, 20, 100, 30, 110, 40])