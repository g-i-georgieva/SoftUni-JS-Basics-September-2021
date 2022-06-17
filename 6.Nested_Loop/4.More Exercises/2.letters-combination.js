function lettersCombination(input) {
    let start = input[0];
    let end = input[1];
    let skiped = input[2];
    let combinations = 0
    let startN = start.charCodeAt(0)
    let ednN = end.charCodeAt(0)
    let result = "";
    let array = [];

    for (let first = startN; first <= ednN; first++) {
        for (let second = startN; second <= ednN; second++) {
            for (let third = startN; third <= ednN; third++) {
                let firsLetter = String.fromCharCode(first)
                let secondLetter = String.fromCharCode(second)
                let thirdLetter = String.fromCharCode(third)
                if (firsLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {
                    combinations++
                    result += (firsLetter + secondLetter + thirdLetter) + " ";
                    array.push(firsLetter + secondLetter + thirdLetter);
                }
            }
        }
    }
    array.push(combinations);
    console.log(array.join(' '));
}
lettersCombination(["a", "c", "b"])