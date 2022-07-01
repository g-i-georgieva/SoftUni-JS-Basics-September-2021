function football(input) {
  let wons = 0;
  let loses = 0;
  let drawn = 0;

  for (const game of input) {
    let [team, opponent] = game.split(":");
    team = Number(team);
    opponent = Number(opponent);
    if (team > opponent) {
      wons++;
    } else if (team < opponent) {
      loses++;
    } else {
      drawn++;
    }
  }

  console.log(
    `Team won ${wons} games.\nTeam lost ${loses} games.\nDrawn games: ${drawn}`
  );
}

football(["4:2", "0:3", "1:0"]);
