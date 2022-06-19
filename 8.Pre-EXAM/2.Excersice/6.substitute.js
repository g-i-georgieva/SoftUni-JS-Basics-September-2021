function substitute(input) {
    let firstFirst = Number(input[0]);
    let secondFirst = Number(input[1]);
    let firstSecond = Number(input[2]);
    let secondSecond = Number(input[3]);
    let combination = 0

    for (let k = firstFirst; k <= 8; k++) {
        for (let l = 9; l >= secondFirst; l--) {
            for (let m = firstSecond; m <= 8; m++) {
                for (let n = 9; n >= secondSecond; n--) {
                    if (k % 2 === 0 && l % 2 !== 0 && m % 2 == 0 && n % 2 !== 0) {

                        let firstPlayer = `${k}${l}`
                        let secondPlayer=`${m}${n}`

                        if (firstPlayer === secondPlayer) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            combination++
                            console.log(`${k}${l} - ${m}${n}`);
                        }
                        if (combination == 6) {
                            return;
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"
])