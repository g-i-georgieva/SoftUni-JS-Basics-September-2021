function filmRating(input) {
    let index = 0
    let numMovies = Number(input[index]);
    index++
    let maxRating = Number.MIN_SAFE_INTEGER
    let maxMovie = ""
    let minRating = Number.MAX_SAFE_INTEGER
    let minMovie = ""
    let totalRating = 0

    for (let i = 0; i < numMovies; i++) {
        let currentMovie = input[index];
        index++
        let currentRating = Number(input[index]);
        index++
        totalRating += currentRating

        if (currentRating > maxRating) {
            maxRating = currentRating
            maxMovie = currentMovie
        }

        if (currentRating < minRating) {
            minRating = currentRating
            minMovie = currentMovie
        }

    }

    console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating/numMovies).toFixed(1)}`);

}
filmRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
])
filmRating(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"
])