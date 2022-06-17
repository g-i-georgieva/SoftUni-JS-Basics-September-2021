function specialNumbers(input) {
    let num = Number(input[0]);
    let specialNumber = "";

    for (let first = 1; first < 10; first++) {
        for (let second = 1; second < 10; second++) {
            for (let third = 1; third < 10; third++) {
                for (let four = 1; four < 10; four++) {

                    if (num % first === 0 && num % second === 0 && num % third === 0 && num % four === 0) {
                        specialNumber += `${first}${second}${third}${four} `
                    }
                }
            }
        }
    }
    console.log(specialNumber)
}
specialNumbers(["3"])