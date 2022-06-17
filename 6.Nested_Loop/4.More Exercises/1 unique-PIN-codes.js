function uniquePinCodes(input) {
    let limitFirst = Number(input[0]);
    let limitSecond = Number(input[1]);
    let limitThird = Number(input[2]);

    for (let first = 1; first <= limitFirst; first++) {
        for (let second = 2; second <= limitSecond; second++) {
            for (let third = 1; third <= limitThird; third++) {
                result = `${first} ${second} ${third}`

                if (first % 2 === 0 && third % 2 === 0 && (second===2||second===3||second===5|second===7)) {
                    console.log(result)
                }
            }
        }
    }
   
}
uniquePinCodes([3, 5, 5])