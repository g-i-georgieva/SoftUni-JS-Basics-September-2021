function cinemTickets(input) {
    let index = 0;
    let command = input[index];
    index++
    let totalTickets = 0
    let command2 = input[index]
    let studenttickets = 0
    let standardtickets = 0
    let kidtickets = 0

    while (command !== "Finish") {
        let currentMovie = command;
        let tottalPlaces = Number(input[index]);
        index++

        let typeTicket = input[index];
        index++
        let ticketCounter;

        while (typeTicket !== "End") {
            ticketCounter++

            if (typeTicket === "standard") {
                standardtickets++
            } else if (typeTicket === "student") {
                studenttickets++
            } else if (typeTicket === "kid") {
                kidtickets++
            }
            command2 = input[index]
            index++

            if (ticketCounter >= tottalPlaces) {
                break;
            }

        }
        typeTicket = input[index]
        index++
        totalTickets += ticketCounter
        let res = ticketCounter / to
        console.log(`${currentMovie} - ${((totalTickets/tottalPlaces).toFixed(2))*100}% full.`)

    }
    console.log(`Total tickets: ${totalTickets}`)
}

cinemTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])