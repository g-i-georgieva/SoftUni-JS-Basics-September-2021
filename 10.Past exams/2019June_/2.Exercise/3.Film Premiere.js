function filmPremiere(input) {
  let movie = input[0]
  let moviePacket = input[1]
  numTickets = Number(input[2]);
  let result = 0;

  switch (movie) {
    case "John Wick":
      if (moviePacket == "Drink") {
        result = numTickets * 12;
      } else if (moviePacket == "Popcorn") {
        result = numTickets * 15;
      } else {
        result = numTickets * 19;
      }
      break;
    case "Star Wars":
      if (moviePacket == "Drink") {
        result = numTickets * 18;
      } else if (moviePacket == "Popcorn") {
        result = numTickets * 25;
      } else {
        result = numTickets * 30;
      }
      break;
    case "Jumanji":
      if (moviePacket == "Drink") {
        result = numTickets * 9;
      } else if (moviePacket == "Popcorn") {
        result = numTickets * 11;
      } else {
        result = numTickets * 14;
      }
      break;
  }
  if (movie == "Star Wars" && numTickets >= 4) {
    result -= result * 0.3;
  }

  if ((movie = "Jumanji" && numTickets == 2)) {
    result -= result * 0.15;
  }

  console.log(`Your bill is ${result.toFixed(2)} leva.`);
}

filmPremiere(["John Wick", "Drink", 6]);
