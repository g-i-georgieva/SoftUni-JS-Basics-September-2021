function movieRating(input) {
    let index = 0
    let numMovies = input[index]
    index++
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxMovie = ""
    let minRating = Number.MAX_SAFE_INTEGER
    let minMovie = ""
    let totalRating = 0

    for (let i = 0; i < numMovies; i++) {
        let currMovie = input[index];
        index++
        let currRating = Number(input[index])
        index++
        totalRating += currRating

        if (currRating > maxRating) {
            maxRating = currRating;
            maxMovie = currMovie
        }

        if (currRating < minRating) {
            minRating = currRating;
            minMovie = currMovie
        }
    }
    console.log(`${maxMovie} is with highest rating: ${(maxRating).toFixed(1)}`)
    console.log(`${minMovie} is with lowest rating: ${(minRating).toFixed(1)}`)
    console.log(`Average rating: ${(totalRating/numMovies).toFixed(1)}`)
}
movieRating([5, "A Star is Born", 7.8, "Creed 2", 7.3, "Mary Poppins", 7.2, "Vice", 7.2, "Captain Marvel", 7.1])