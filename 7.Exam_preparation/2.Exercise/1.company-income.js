function companyIncome(input) {
    let nameMovie = input[0];
    let numDays = Number(input[1]);
    let numTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let incomeStudio = numDays * numTickets * priceTicket
    let totalIncome = incomeStudio - (incomeStudio * percentForCinema / 100)

    console.log(`The profit from the movie ${nameMovie} is ${totalIncome.toFixed(2)} lv.`);
}

companyIncome(["The Programmer", "20", "500", "7.50", "7"]);
companyIncome(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"
]);
companyIncome(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"
])