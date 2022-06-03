function shopping(input) {
    let budget = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numRamMemory = Number(input[3]);
    let sumVideoCards = numVideoCards * 250
    let sumProcessors = (sumVideoCards*0.35)*numProcessors
    let sumRamMemory=(sumVideoCards*0.10)*numRamMemory
    let sumMaterials=sumVideoCards+sumProcessors+sumRamMemory;

    if (numVideoCards>numProcessors){
        sumMaterials=sumMaterials-(sumMaterials*0.15)
    }

    if (sumMaterials<=budget){
        console.log(`You have ${(budget-sumMaterials).toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${(sumMaterials-budget).toFixed(2)} leva more!`);
    }

}

shopping(["900",
    "2",
    "1",
    "3"
])
shopping(["920.45",
    "3",
    "1",
    "1"
])