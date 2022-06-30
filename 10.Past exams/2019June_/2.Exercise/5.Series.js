function series(input) {
  let budget = Number(input.shift());
  let numSeries = Number(input.shift());
  let count = 0;
  let movieIndex = 0;
  let priceIndex = 1;

  for (let i = 0; i < numSeries; i++) {
    let currentSerie = input[movieIndex];
    let curentPrice = Number(input[priceIndex]);

    if (currentSerie == "Thrones") {
      curentPrice = curentPrice * 0.5;
    } else if (currentSerie == "Lucifer") {
      curentPrice = curentPrice * 0.6;
    } else if (currentSerie == "Protector") {
      curentPrice = curentPrice * 0.7;
    } else if (currentSerie == "TotalDrama") {
      curentPrice = curentPrice * 0.8;
    } else if (currentSerie == "Area") {
      curentPrice = curentPrice * 0.9;
    }

    count++;
    budget -= curentPrice;
    movieIndex += 2;
    priceIndex += 2;
  }

  if (budget < 0) {
    console.log(
      `You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`
    );
  } else {
    console.log(
      `You bought all the series and left with ${budget.toFixed(2)} lv.`
    );
  }
}
series([10, 3, "Thrones", 5, "Riverdale", 5, "Gotham", 2]);
