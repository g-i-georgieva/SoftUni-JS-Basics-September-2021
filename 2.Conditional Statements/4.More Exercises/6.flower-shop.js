function flowerShop(input) {
    let numMagnolii = Number(input[0])
    let numZumbuli = Number(input[1])
    let numRoses = Number(input[2])
    let numKaktusi = Number(input[3])
    let pricePresent = Number(input[4])

    let orderPrice = numMagnolii * 3.25 + numZumbuli * 4 + numRoses * 3.5 + numKaktusi * 8
    let orderAfterTaxes=orderPrice*0.95

    if (orderAfterTaxes>=pricePresent){
        console.log (`She is left with ${Math.floor(orderAfterTaxes-pricePresent)} leva.`)
    }else {
        console.log (`She will have to borrow ${Math.ceil(pricePresent-orderAfterTaxes)} leva.`)
    }
}
flowerShop([2, 3, 5, 1, 50])