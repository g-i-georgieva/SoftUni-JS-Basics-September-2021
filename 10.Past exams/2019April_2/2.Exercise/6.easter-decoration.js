function easterDecoration(input) {
    let index = 0
    let numCustomers = Number(input[index]);
    index++
    let command = input[index]
    let totalBill = 0
    

    for (let i = 0; i < numCustomers; i++) {

        let numItems = 0
        let command = input[index];
        index++
        let billClient = 0
        

        while (command !== "Finish") {
            let currentItem = command
            numItems++
            if (currentItem === "basket") {
                billClient += 1.5
            } else if (currentItem === "wreath") {
                billClient += 3.80
            } else if (currentItem === "chocolate bunny") {
                billClient += 7
            }
            command = input[index]
            index++
        }
        if (numItems%2===0){
            billClient=billClient*0.8
        }
        console.log(`You purchased ${numItems} items for ${(billClient).toFixed(2)} leva.`)
        totalBill += billClient
    }
    console.log(`Average bill per client is: ${(totalBill/numCustomers).toFixed(2)} leva.`)
}
easterDecoration([2, "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])