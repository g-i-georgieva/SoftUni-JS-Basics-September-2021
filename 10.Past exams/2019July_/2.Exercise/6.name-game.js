function nameGame(input) {
    let index = 0;
    let command = input[index];
    index++
    let maxPoints = Number.MIN_SAFE_INTEGER
    let maxPlayer=""

    while (command !== "Stop") {
        let playerName = command
        let pointsPlayer = 0

        for (let i = 0; i < playerName.length; i++) {
            let currentPoints = Number(input[index]);
            index++


            if (currentPoints === playerName.charCodeAt(i)) {
                pointsPlayer += 10
            } else {
                pointsPlayer += 2
            }

        }

        if (pointsPlayer>=maxPoints){
            maxPoints=pointsPlayer
            maxPlayer=playerName
        }

        command = input[index];
        index++

    }

    console.log (`The winner is ${maxPlayer} with ${maxPoints} points!`)
}
nameGame(["Ivan", 73, 20, 98, 110, "Ivo", 80, 65, 87, "Stop"])