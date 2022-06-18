function pcStore(input) {
    let priceProcessorDolars = input[0];
    let priveVideoCardDolars = input[1];
    let priceRamDolars = input[2];
    let numRam = input[3];
    let discountPercent = input[4];

    let priceProcesorLeva = priceProcessorDolars * 1.57
    let priceProcesorDiscount = priceProcesorLeva - (priceProcesorLeva * discountPercent)
    let priceVideoCardLeva = priveVideoCardDolars * 1.57
    let priceVideoCardDiscount = priceVideoCardLeva - (priceVideoCardLeva * discountPercent);
    let priceRamLeva = priceRamDolars * 1.57 * numRam
    let moneyNeeded = priceRamLeva + priceVideoCardDiscount + priceProcesorDiscount

    console.log(`Money needed - ${moneyNeeded.toFixed(2)} leva.`);

}

pcStore([500, 200, 80, 2, 0.05])
pcStore([1200, 850, 120, 4, 0.1])
pcStore([200, 100, 80, 1, 0.01])