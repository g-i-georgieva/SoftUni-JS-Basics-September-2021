function caTwalking(input) {
    let minutesWalk = Number(input[0]);
    let numWalkings = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let burnedCalories = minutesWalk * 5 * numWalkings

    if (burnedCalories >= caloriesPerDay/2){
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`)
    }else {
        console.log (`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
    }
}
caTwalking([30, 3, 600])