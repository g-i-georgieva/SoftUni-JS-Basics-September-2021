function footballKit(input) {
    let priceTshirt = Number(input[0]);
    let neededSumForBall = Number(input[1]);

    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.2;
    let priceShoes = 2 * (priceTshirt + priceShorts);
    let totalSum = (priceShorts + priceTshirt + priceSocks + priceShoes) * 0.85;

    if (totalSum >= neededSumForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(neededSumForBall-totalSum).toFixed(2)} lv. more.`);
    }

}
footballKit([25, 100])
footballKit([55, 310])
footballKit([59.99, 500])