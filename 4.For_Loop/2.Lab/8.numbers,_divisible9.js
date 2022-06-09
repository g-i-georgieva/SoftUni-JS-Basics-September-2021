function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0
    let output = ""

    for (let currNum = num1; currNum <= num2; currNum++) {

        if (currNum % 9 === 0) {
            sum = sum + currNum;
            output += `${currNum}\n`;

        }
    }
    console.log(`The sum:${sum}`);
    console.log(output);
}
solve(["100", "200"])