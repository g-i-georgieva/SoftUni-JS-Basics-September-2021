function christmasGifts(input) {
    let index = 0;
    let command = input[index];
    index++;
    let numAdults = 0;
    let numKids = 0;
    let numToys = 0;
    let moneyToys = 0;
    let numSweater = 0;
    let moneySweaters = 0;

    while (command !== 'Christmas') {
        let age = Number(command);

        if (age <= 16) {
            numKids++;
            numToys++;
            moneyToys += 5

        } else {
            numAdults++
            numSweater++
            moneySweaters+=15
        }

        command = input[index];
        index++
    }

    console.log (`Number of adults: ${numAdults}`);
    console.log(`Number of kids: ${numKids}`);
    console.log(`Money for toys: ${moneyToys}`);
    console.log(`Money for sweaters: ${moneySweaters}`)
}
christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"
])
christmasGifts (["16",
"16",
"16",
"16",
"16",
"Christmas"])
christmasGifts (["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])
