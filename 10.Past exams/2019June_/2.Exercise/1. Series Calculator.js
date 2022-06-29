function seriesCalculator(input) {
    let name = input[0];
    let numSeasons = Number(input[1]);
    let numEpisodes = Number(input[2]);
    let timeWithoutAdv = Number(input[3]);

    let adevertising = timeWithoutAdv * 0.2
    let timeWithAdv =adevertising+timeWithoutAdv
        let timeForWathing = (numEpisodes * timeWithAdv) * numSeasons + (numSeasons * 10)

    console.log(`Total time needed to watch the ${name} series is ${Math.round(timeForWathing)} minutes.`)

}
seriesCalculator(["Lucifer", 3, 18, 55])