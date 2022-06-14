function walking(input) {
    let target = 10000
    index = 0
    let command = input[index];
    index++
    let currentSteps = 0

    while (command !== "Going home") {
        let steps = Number(command)
        currentSteps += steps

        if (currentSteps >= target) {

            break;
        }

        command = input[index]
        index++
    }

    if (command === "Going home") {
        let steps = Number(input[index]);
        index++
        currentSteps += steps
    }


    let diff = Math.abs(currentSteps - target)

    if (currentSteps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking (["1000",
"1500",
"2000",
"6500"])

walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
])