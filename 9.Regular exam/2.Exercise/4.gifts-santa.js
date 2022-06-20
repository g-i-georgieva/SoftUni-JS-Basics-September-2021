function giftsSanta(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let output = ""

    for (let i = m; i >= n; i-- && i !== 0) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === s) {
                break;
            } else {
                output += `${i} `
            }
        }

    }
    console.log(output)
}
giftsSanta(["1",
    "36",
    "12"
])