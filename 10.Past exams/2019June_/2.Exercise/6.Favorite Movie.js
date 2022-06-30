function favouriteMovie(input) {
  let count = 0;
  let maxRating = Number.MIN_SAFE_INTEGER;
  let bestMovie = "";

  for (const movie of input) {
    let currenMovieLength = movie.length;

    if (movie == "STOP") {
      console.log(
        `The best movie for you is ${bestMovie} with ${maxRating} ASCII sum.`
      );
      break;
    }
    count++;
    let sumAscii = 0;

    for (let i = 0; i < currenMovieLength; i++) {
      if (movie.charCodeAt(i) >= 97 && movie.charCodeAt(i) <= 122) {
        sumAscii -= 2 * currenMovieLength;
      } else if (movie.charCodeAt(i) >= 65 && movie.charCodeAt(i) <= 90) {
        sumAscii -= currenMovieLength;
      }

      sumAscii += movie.charCodeAt(i);
    }

    if (sumAscii > maxRating) {
      bestMovie = movie;
      maxRating = sumAscii;
    }

    if (count == 7) {
      console.log(`The limit is reached.`);
      console.log(
        `The best movie for you is ${bestMovie} with ${maxRating} ASCII sum.`
      );
      break;
    }
  }
}

favouriteMovie([
  "Heavy Metal",
  "Armagedon",
  "War of Titans",
  "TROY",
  "Elysium",
  "Vortex",
  "STOP",
]);
