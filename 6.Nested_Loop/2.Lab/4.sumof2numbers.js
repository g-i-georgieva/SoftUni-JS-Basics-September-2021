function sumNumbers(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let magicNum = Number(input[2]);
    combination=0

    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            combination++
            if(i+j==magicNum){
                
               console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
               return;
            }
        }
    }
    console.log(`${combination} combinations - neither equals ${magicNum}`)
}
sumNumbers(["1",
    "10",
    "5"
])
sumNumbers(["88",
"888",
"1000"])
sumNumbers(["23",
"24",
"20"])
sumNumbers(["88", 
"888", 
"2000"])
