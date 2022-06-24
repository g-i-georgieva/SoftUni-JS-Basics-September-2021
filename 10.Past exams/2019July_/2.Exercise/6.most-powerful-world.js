function mostPowerfulWorld(input) {
    let index = 0;
    let command = input[index];
    index++
    let maxPoints = Number.MIN_SAFE_INTEGER
    let maxWord = ""
    let isFirstLetter = false

    while (command !== "End of words") {
        let currentWord = command
        let lengthWord = currentWord.length
        let points = 0

        for (let i = 0; i < lengthWord; i++) {
            let currLetter = currentWord.charCodeAt(i)

            if (i < 1) {
                points += currLetter
                if (currLetter === 65 || currLetter === 69 || currLetter === 73 || currLetter === 79 || currLetter === 85 || currLetter === 89 || currLetter === 97 || currLetter === 101 || currLetter === 105 || currLetter === 111 || currLetter === 117 || currLetter === 121) {
                    isFirstLetter = true
                }
            } else {
                points += currLetter
            }
        }

        if (isFirstLetter) {
            points = points * lengthWord
        } else {
            points = Math.floor(points / lengthWord)
        }

        if (points >= maxPoints) {
            maxPoints = points
            maxWord = currentWord
        }
        isFirstLetter = false;
        command = input[index];
        index++
    }

    console.log(`The most powerful word is ${maxWord} - ${Math.floor(maxPoints)}`)
}
mostPowerfulWorld(["Is", "Experience", "End of words"])