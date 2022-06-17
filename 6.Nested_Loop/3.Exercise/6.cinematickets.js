function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++
    let standardCount = 0
    let studenCount = 0;
    let kidsCount = 0
    let totalTicketsCounter = 0
    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++

        let ticketType = input[index];
        index++
        let ticketCounter = 0
        while (ticketType !== "End") {
            ticketCounter++

            switch (ticketType) {
                case "standard":
                    standardCount++
                    break;
                case "student":
                    studenCount++
                    break;
                case "kid":
                    kidsCount++
                    break;
            }

            if (ticketCounter >= freeSpace) {
                break;
            }
            ticketType = input[index]
            index++
        }
        totalTicketsCounter += ticketCounter
        let res = ticketCounter / freeSpace * 100
        console.log(`${name} - ${res.toFixed(2)}% full.`);
        command = input[index];
        index++
    }
    let standardTickets =standardCount/totalTicketsCounter*100
    let studentTickets =studenCount/totalTicketsCounter*100
    let kidTickets =kidsCount/totalTicketsCounter*100

        console.log(`Total tickets: ${totalTicketsCounter}`)
        console.log(`${studentTickets.toFixed(2)}% student tickets.`)
        console.log(`${standardTickets.toFixed(2)}% standard tickets.`)
        console.log(`${kidTickets.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
])