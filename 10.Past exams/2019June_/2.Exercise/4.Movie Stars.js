function movieStars(input) {
  let budget = Number(input.shift());
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "ACTION") {
      break;
    }

    if (typeof input[i] == "string") {
      if (input[i].length > 15) {
        budget -= budget * 0.2;
      } else {
        budget -= Number(input[i + 1]);
        i++;
      }
    }

    if (budget < 0) {
      break;
    }
  }

  if (budget >= 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}
movieStars([1000, "John Cena", 800, "Freddy Kim", 3000, "ACTION"]);
