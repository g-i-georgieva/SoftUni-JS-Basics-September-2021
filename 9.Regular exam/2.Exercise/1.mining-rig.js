function minigRig(input) {
    let pricePerOneVideoCard = Number(input[0]);
    let pricePerOnePrehodnik = Number(input[1]);
    let priceElOfCarfPerDay = Number(input[2]);
    let profitOfCardPerDay = Number(input[3]);

    let totalPriceVideoCards = pricePerOneVideoCard * 13;
    let totalPricePrehodnik = pricePerOnePrehodnik * 13;
    let spendMoney = totalPricePrehodnik + totalPriceVideoCards + 1000
    let profitOfCard = profitOfCardPerDay - priceElOfCarfPerDay;
    let totalProfitOfCardsPerDay = 13 * profitOfCard;
    let daysOfReturnIvenstment = spendMoney / totalProfitOfCardsPerDay

    console.log(spendMoney);
    console.log(Math.ceil(daysOfReturnIvenstment))


}
minigRig(["700",
    "15",
    "0.20",
    "2"
])
minigRig(["800",
    "10",
    "0.32",
    "6.4"
])