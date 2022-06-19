function hairSalon(input) {
    index = 0
    let purposeDay = Number(input[index]);
    index++
    let command = input[index];
    index++
    let sum = 0

    while (command !== 'closed') {
        let action = command;
        let type = input[index]
        index++

        if (action === 'haircut') {
            if (type === 'mens') {
                sum += 15
            } else if (type == 'ladies') {
                sum += 20
            } else if (type == 'kids') {
                sum += 10
            }
        } else if (action === 'color') {
            if (type === 'touch up') {
                sum += 20
            } else if (type === 'full color') {
                sum += 30
            }
        }

        if (sum >= purposeDay) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sum}lv.`)
            break;
        }

        command = input[index];
        index++
    }

    if (command === 'closed') {
        if (sum > purposeDay) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sum}lv.`)
        } else {
            console.log(`Target not reached! You need ${purposeDay-sum}lv. more.`);
            console.log(`Earned money: ${sum}lv.`)
        }
    }
}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies","closed"
])