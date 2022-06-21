function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let numStatisti = Number(input[1]);
    let priceCloth = Number(input[2]);
    let clothes = numStatisti * priceCloth
    let decor = filmBudget * 0.10

    if (numStatisti > 150) {
        clothes = clothes * 0.90
    }

    let totalCosts = decor + clothes

    if (totalCosts > filmBudget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalCosts-filmBudget).toFixed(2)} leva more.`);
    }else {
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${(filmBudget-totalCosts).toFixed(2)} leva left.`);
    }
}
godzillaVsKong([20000, 120, 55.5])