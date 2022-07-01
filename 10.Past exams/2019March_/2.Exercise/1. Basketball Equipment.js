function basketball(input) {
  let yearTax = Number(input[0]);
  let priceShoes = yearTax * 0.6;
  let priceSuite = priceShoes * 0.8;
  let priceBall = priceSuite / 4;
  let priceAccessories = priceBall / 5;

  let result = yearTax + priceShoes + priceSuite + priceBall + priceAccessories;

  console.log(result.toFixed(2))
}

basketball([320]);
