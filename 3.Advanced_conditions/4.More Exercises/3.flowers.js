function flowers(input) {
    let numHrizantemi = Number(input[0]);
    let numRoses = Number(input[1]);
    let numTulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let priceHrizantemi = 0
    let priseRoses = 0;
    let priceTulips = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            priceHrizantemi = 2
            priseRoses = 4.1
            priceTulips = 2.5
            break;
        case "Autumn":
        case "Winter":
            priceHrizantemi = 3.75
            priseRoses = 4.5
            priceTulips = 4.15
            break;
    }
    let priceBouquet = (numHrizantemi * priceHrizantemi) + (numRoses * priseRoses) + (numTulips * priceTulips)

    if (holiday === "Y") {
        priceBouquet = priceBouquet * 1.15
    }
    if (numTulips > 7 && season === "Spring") {
        priceBouquet = priceBouquet * 0.95
    }
    if (numRoses >= 10 && season === "Winter") {
        priceBouquet = priceBouquet * 0.90
    }
    if (numRoses + numTulips + numHrizantemi > 20) {
        priceBouquet = priceBouquet * 0.80
    }
    console.log((priceBouquet + 2).toFixed(2))
}
flowers([2, 4, 8, "Spring", "Y"])