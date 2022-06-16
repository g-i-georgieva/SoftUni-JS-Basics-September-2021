function sumPrimeNoPrime(input) {
    let index = 0;
    let command = input[index];
    index++
    let sumPrimeNumbers = 0
    let sumNonPrimeNumbers = 0

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`)
            command = input[index];
            index++
            continue;
        }
        if (num === 1) {
            sumPrimeNumbers += num
            command = input[index];
            index++
            continue;
        }
        let isPrime = true
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sumPrimeNumbers += num
        } else {
            sumNonPrimeNumbers += num
        }

        command = input[index];
        index++
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);

}
sumPrimeNoPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
])
sumPrimeNoPrime (["30",
"83",
"33",
"-1",
"20",
"stop"])
sumPrimeNoPrime(["0",
"-9",
"0",
"stop"])

