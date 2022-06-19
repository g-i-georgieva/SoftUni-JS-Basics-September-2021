function computerFirm(input) {
    index = 0
    let numComputers = Number(input[index]);
    index++
    let rating = 0
    let sales = 0

    for (let i = 0; i < numComputers; i++) {
        let currentsales = Number(input[index]);
        index++
        let numCurrSales = Math.floor(currentsales / 10)


        if (currentsales % 10 === 2) {
            rating += 2
            numCurrSales = 0
            sales += numCurrSales
        } else if (currentsales % 10 === 3) {
            rating += 3
            numCurrSales = numCurrSales / 2
            sales += numCurrSales
        } else if (currentsales % 10 === 4) {
            rating += 4
            numCurrSales = numCurrSales * 0.7
            sales += numCurrSales
        } else if (currentsales % 10 === 5) {
            rating += 5
            numCurrSales = numCurrSales * 0.85
            sales += numCurrSales
        } else if (currentsales % 10 === 6) {
            rating += 6
            numCurrSales = numCurrSales
            sales += numCurrSales
        }

    }
    console.log(sales.toFixed(2))
    console.log((rating / numComputers).toFixed(2))

}
computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"
])
computerFirm (["2",
"204",
"206"])
