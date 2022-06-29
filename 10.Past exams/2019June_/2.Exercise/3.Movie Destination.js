function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let numDays = Number(input[3]);
  let result = 0;

  switch (destination) {
    case "Dubai":
      if (season == "Winter") {
        result = 45000 * numDays;
        result -= result * 0.3;
      } else {
        result = 40000 * numDays;
        result -= result * 0.30;
      }
      break;
    case "Sofia":
      if (season == "Winter") {
        result = 17000 * numDays;
        result += result * 0.25;
      } else {
        result = 12500 * numDays;
        result += result * 0.25;
      }
      break;
    case "London":
      if (season == "Winter") {
        result = 24000 * numDays;
      } else {
        result = 20250 * numDays;
      }
      break;
  }
  if (result <= budget) {
    console.log(
      `The budget for the movie is enough! We have ${(budget - result).toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(
      `The director needs ${(result - budget).toFixed(2)} leva more!`
    );
  }
}

movieDestination([1000000, "Dubai", "Summer", 5]);
