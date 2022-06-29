function movieDay(input) {
  timeShooting = Number(input[0]);
  numScenes = Number(input[1]);
  timePerScene = Number(input[2]);
  let preparationTime = timeShooting * 0.15;
  let result = preparationTime + numScenes * timePerScene;
  console.log(
    result <= timeShooting
      ? `You managed to finish the movie on time! You have ${Math.ceil(
          timeShooting - result
        )} minutes left!`
      : `Time is up! To complete the movie you need ${Math.ceil(
          result - timeShooting
        )} minutes.`
  );
}

movieDay([120, 10, 11]);
movieDay([135, 5, 20]);
