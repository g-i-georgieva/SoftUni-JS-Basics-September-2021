function oscars(input) {
  let nameActor = input.shift();
  let startPoints = Number(input.shift());
  let numJury = Number(input.shift());
  let juryIndex = 0;
  let pointsIndex = 1;

  for (let i = 0; i < numJury; i++) {
    let currentJoury = input[juryIndex];
    let currentPoints = Number(input[pointsIndex]);

    startPoints += (currentJoury.length * currentPoints) / 2;

    if (startPoints >= 1250.5) {
      break;
    }

    if (!currentJoury || !currentPoints) {
      break;
    }

    juryIndex += 2;
    pointsIndex += 2;
  }

  if (startPoints > 1250.5) {
    console.log(
      `Congratulations, ${nameActor} got a nominee for leading role with ${startPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${nameActor} you need ${(1250.5 - startPoints).toFixed(1)} more!`
    );
  }
}
oscars(["Starboy", 450.5, 1, "Bibi Style", 50]);
