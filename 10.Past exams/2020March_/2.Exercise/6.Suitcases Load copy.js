function suitcasesLoad(input) {
    let capacity = Number(input.shift());
    let index = 0;
    let baggageCounter = 0;

    let command = input.shift();
    
    while (command !== 'End') {
        let baggage = Number(command);
        index++;

        if (index % 3 === 0) {
            baggage = baggage * 1.10;
        }

        if (capacity - baggage < 0) {
            break;
        }

        baggageCounter++;

        capacity -= baggage;

        command = input.shift();
    }

    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    }
}
suitcasesLoad([1200.2,
    260,
    380.5,
    125.6,
    305,
    "End"
])