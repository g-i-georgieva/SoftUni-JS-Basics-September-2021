function bestPlayer(input) {
    let index = 0
    let command = input[index];
    let goalsMax = Number.MIN_SAFE_INTEGER
    let playerMax = ""

    while (command !== "END") {
        let currentPlayer = input[index]
        index++
        let currentGoals = Number(input[index])
        index++

        if (currentGoals > goalsMax) {
            goalsMax = currentGoals
            playerMax = currentPlayer
            if (goalsMax >= 10) {
                console.log(`${currentPlayer} is the best player!`)
                console.log(`He has scored ${goalsMax} goals and made a hat-trick !!!`);
                break;
            }
        }
        index++
        command=input[index];


        if (command == "END") {
            console.log(`${playerMax} is the best player!`)
            console.log(`He has scored ${goalsMax} goals!!!`);
        }

    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"])