function cinemaVouchet(input) {
    let index = 0
    let voucher = Number(input[index])
    index++
    let command = input[index];
    index++
    let priceTicket = 0
    let numTIckets=0;
    let otherThings=0

    while (command !== "End") {
        let currName = command

        if (currName.length > 8) {
            priceTicket = currName.charCodeAt(0) + currName.charCodeAt(1)
            if (priceTicket > voucher) {
                break;
            } else {
                voucher -= priceTicket
                numTIckets++
            }
        } else if (currName.length <= 8) {
            priceTicket = currName.charCodeAt(0)
            if (priceTicket > voucher) {
                break;
            } else {
                voucher -= priceTicket
                otherThings++
            }
        }
        command = input[index];
        index++
    }

    console.log (`${numTIckets}`);
    console.log (`${otherThings}`)

}
cinemaVouchet([1500,"Avengers: Endgame","Bohemian Rhapsody","Deadpool 2","End"])