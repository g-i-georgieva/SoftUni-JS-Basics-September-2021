function cinema(input) {
  let capacity = input.shift();
  let result = 0;

  for (let people of input) {
    if (people == "Movie time!") {
      console.log(`There are ${capacity} seats left in the cinema.`);
      break;
    }

    people = Number(people);

    if (people <= capacity) {
      capacity -= people;
      result += people * 5;
      if (people % 3 == 0) {
        result -= 5;
      }
    } else {
      console.log(`The cinema is full.`);
    }
  }

  console.log(`Cinema income - ${result} lv.`);
}

cinema([100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, "Movie time!"]);
// cinema([50, 15, 10, 10, 15, 5]);
